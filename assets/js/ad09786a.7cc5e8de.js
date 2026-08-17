"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90695],{

/***/ 3727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_45_webflux_md_ad0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-45-webflux-md-ad0.json
const site_docs_courses_java_45_webflux_md_ad0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/45-webflux","title":"Chapter 45: Spring WebFlux","description":"Previous R2DBC &amp; Reactive Data Access","source":"@site/docs/courses/java/45-webflux.md","sourceDirName":"courses/java","slug":"/java/45-webflux","permalink":"/ai-engineering-journey/java/45-webflux","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":45,"frontMatter":{"id":"45-webflux","slug":"/java/45-webflux","title":"Chapter 45: Spring WebFlux","sidebar_label":"Chapter 45: Spring WebFlux","sidebar_position":45},"sidebar":"course-java","previous":{"title":"Chapter 44: Project Reactor & Reactive Streams","permalink":"/ai-engineering-journey/java/44-reactor"},"next":{"title":"Chapter 46: R2DBC & Reactive Data Access","permalink":"/ai-engineering-journey/java/46-r2dbc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/45-webflux.md


const frontMatter = {
	id: '45-webflux',
	slug: '/java/45-webflux',
	title: 'Chapter 45: Spring WebFlux',
	sidebar_label: 'Chapter 45: Spring WebFlux',
	sidebar_position: 45
};
const contentTitle = 'Chapter 45: Spring WebFlux';

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
  "value": "1. WebFlux Architecture Overview",
  "id": "1-webflux-architecture-overview",
  "level": 2
}, {
  "value": "1.1 Reactive Stack vs Servlet Stack",
  "id": "11-reactive-stack-vs-servlet-stack",
  "level": 3
}, {
  "value": "1.2 Netty Event Loop Model",
  "id": "12-netty-event-loop-model",
  "level": 3
}, {
  "value": "1.3 When to Use WebFlux",
  "id": "13-when-to-use-webflux",
  "level": 3
}, {
  "value": "2. Reactive REST API with Annotated Controllers",
  "id": "2-reactive-rest-api-with-annotated-controllers",
  "level": 2
}, {
  "value": "2.1 Project Setup (Maven)",
  "id": "21-project-setup-maven",
  "level": 3
}, {
  "value": "2.2 Application Entry Point",
  "id": "22-application-entry-point",
  "level": 3
}, {
  "value": "2.3 Domain Model and Repository",
  "id": "23-domain-model-and-repository",
  "level": 3
}, {
  "value": "2.4 Reactive Controller",
  "id": "24-reactive-controller",
  "level": 3
}, {
  "value": "2.5 Non-Streaming Response Type",
  "id": "25-non-streaming-response-type",
  "level": 3
}, {
  "value": "2.6 Error Handling in Reactive Controllers",
  "id": "26-error-handling-in-reactive-controllers",
  "level": 3
}, {
  "value": "3. Functional Routing",
  "id": "3-functional-routing",
  "level": 2
}, {
  "value": "3.1 Handler Functions",
  "id": "31-handler-functions",
  "level": 3
}, {
  "value": "3.2 Router Function Configuration",
  "id": "32-router-function-configuration",
  "level": 3
}, {
  "value": "3.3 Request Predicates",
  "id": "33-request-predicates",
  "level": 3
}, {
  "value": "4. WebClient → Reactive HTTP Client",
  "id": "4-webclient--reactive-http-client",
  "level": 2
}, {
  "value": "4.1 WebClient Configuration",
  "id": "41-webclient-configuration",
  "level": 3
}, {
  "value": "4.2 WebClient Usage Examples",
  "id": "42-webclient-usage-examples",
  "level": 3
}, {
  "value": "4.3 WebClient Error Handling",
  "id": "43-webclient-error-handling",
  "level": 3
}, {
  "value": "5. Server-Sent Events (SSE)",
  "id": "5-server-sent-events-sse",
  "level": 2
}, {
  "value": "5.1 SSE Producer",
  "id": "51-sse-producer",
  "level": 3
}, {
  "value": "5.2 SSE Consumer with WebClient",
  "id": "52-sse-consumer-with-webclient",
  "level": 3
}, {
  "value": "6. Reactive Security",
  "id": "6-reactive-security",
  "level": 2
}, {
  "value": "6.1 Security Configuration",
  "id": "61-security-configuration",
  "level": 3
}, {
  "value": "6.2 OAuth2 Resource Server with WebFlux",
  "id": "62-oauth2-resource-server-with-webflux",
  "level": 3
}, {
  "value": "6.3 Reactive Method Security",
  "id": "63-reactive-method-security",
  "level": 3
}, {
  "value": "7. File Upload and Streaming",
  "id": "7-file-upload-and-streaming",
  "level": 2
}, {
  "value": "7.1 Reactive File Upload",
  "id": "71-reactive-file-upload",
  "level": 3
}, {
  "value": "7.2 Streaming Large File Download",
  "id": "72-streaming-large-file-download",
  "level": 3
}, {
  "value": "8. RSocket → Reactive Socket Protocol",
  "id": "8-rsocket--reactive-socket-protocol",
  "level": 2
}, {
  "value": "8.1 RSocket Server",
  "id": "81-rsocket-server",
  "level": 3
}, {
  "value": "8.2 RSocket Client Configuration",
  "id": "82-rsocket-client-configuration",
  "level": 3
}, {
  "value": "9. Testing WebFlux with WebTestClient",
  "id": "9-testing-webflux-with-webtestclient",
  "level": 2
}, {
  "value": "10. WebFlux Performance Characteristics",
  "id": "10-webflux-performance-characteristics",
  "level": 2
}, {
  "value": "10.1 Threading Model Comparison",
  "id": "101-threading-model-comparison",
  "level": 3
}, {
  "value": "10.2 WebFlux Best Practices",
  "id": "102-webflux-best-practices",
  "level": 3
}, {
  "value": "11. Functional Endpoints vs Annotated Controllers",
  "id": "11-functional-endpoints-vs-annotated-controllers",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
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
        id: "chapter-45-spring-webflux",
        children: "Chapter 45: Spring WebFlux"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/44-reactor",
          children: "Project Reactor & Reactive Streams"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/46-r2dbc",
          children: "R2DBC & Reactive Data Access"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common pitfalls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Concepts] --> B[Setup/Configuration]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Spring MVC and Spring WebFlux architectures and choose the right one"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build reactive REST APIs using annotated controllers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestController"
        }), " in WebFlux"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement functional routing with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RouterFunction"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HandlerFunction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebClient"
        }), " for reactive inter-service communication"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Server-Sent Events (SSE) for real-time data push"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure reactive endpoints with Spring Security reactive support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle file uploads and streaming reactively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build RSocket services for reactive bidirectional communication"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test WebFlux endpoints with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebTestClient"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply performance best practices and understand WebFlux's threading model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-webflux-architecture-overview",
      children: "1. WebFlux Architecture Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Test with production-like configurations → dev setups often hide issues that surface under real load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start simple. Add complexity only when proven necessary. Premature abstraction creates maintenance burden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/45-webflux.png",
        alt: "Spring WebFlux - Reactive Architecture Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-reactive-stack-vs-servlet-stack",
      children: "1.1 Reactive Stack vs Servlet Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring WebFlux is the reactive-stack web framework introduced in Spring 5, built on Project Reactor. It runs on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Netty"
      }), " (default), Undertow, or Servlet 3.1+ containers (Tomcat, Jetty) but uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-blocking I/O"
      }), " throughout."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spring MVC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spring WebFlux"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Underlying API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servlet API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive Streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tomcat, Jetty, Undertow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Netty, Undertow, Tomcat (Servlet 3.1+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One thread per request (blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event loop (few threads, non-blocking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller return types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ModelAndView"
            }), ", etc."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Mono<T>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Flux<T>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Mono<ResponseEntity<T>>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functional routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RouterFunction"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RestTemplate"
            }), " (deprecated), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RestClient"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WebClient"
            }), " (reactive)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableWebSecurity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableWebFluxSecurity"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-netty-event-loop-model",
      children: "1.2 Netty Event Loop Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WebFlux uses an event-loop threading model. For N CPU cores, Netty creates 2N event-loop threads (one reader, one writer per core). All non-blocking I/O operations run on these threads. Blocking operations must be offloaded to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boundedElastic"
      }), " scheduler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Request → EventLoop → Controller → Service → Repository\n           ↓               ↓           ↓           ↓\n        non-blocking   non-blocking  non-blocking  non-blocking\n                             ↓\n                    Never block an event-loop thread!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-when-to-use-webflux",
      children: "1.3 When to Use WebFlux"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Good fit:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long-running, streaming, or real-time endpoints (SSE, WebSocket)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gateway services (Spring Cloud Gateway is built on WebFlux)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microservices making many downstream calls (WebClient concurrency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systems requiring high concurrency with limited threads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IoT or event streaming applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Poor fit:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple CRUD with low concurrency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monoliths where blocking I/O is acceptable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects deeply tied to Servlet API features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teams new to reactive programming (learning curve)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-reactive-rest-api-with-annotated-controllers",
      children: "2. Reactive REST API with Annotated Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-project-setup-maven",
      children: "2.1 Project Setup (Maven)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.webflux</groupId>\n    <artifactId>webflux-demo</artifactId>\n    <version>1.0.0</version>\n    <name>WebFlux Demo</name>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-webflux</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-mongodb-reactive</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-security</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>io.projectreactor</groupId>\n            <artifactId>reactor-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-application-entry-point",
      children: "2.2 Application Entry Point"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;\n\n@SpringBootApplication\n@EnableReactiveMongoRepositories\npublic class WebFluxApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(WebFluxApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-domain-model-and-repository",
      children: "2.3 Domain Model and Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.model;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.mongodb.core.mapping.Document;\nimport java.time.LocalDateTime;\n\n@Document(collection = \"products\")\npublic record Product(\n    @Id String id,\n    String name,\n    String category,\n    double price,\n    int quantity,\n    LocalDateTime createdAt\n) {\n    public Product {\n        if (name == null || name.isBlank()) {\n            throw new IllegalArgumentException(\"Product name must not be blank\");\n        }\n        if (price < 0) {\n            throw new IllegalArgumentException(\"Price must be non-negative\");\n        }\n        if (createdAt == null) {\n            createdAt = LocalDateTime.now();\n        }\n    }\n\n    public Product withId(String id) {\n        return new Product(id, name, category, price, quantity, createdAt);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.repository;\n\nimport com.webflux.demo.model.Product;\nimport org.springframework.data.mongodb.repository.ReactiveMongoRepository;\nimport org.springframework.stereotype.Repository;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\n\n@Repository\npublic interface ProductRepository extends ReactiveMongoRepository<Product, String> {\n\n    Flux<Product> findByCategory(String category);\n\n    Flux<Product> findByNameContainingIgnoreCase(String name);\n\n    Flux<Product> findByPriceBetween(double min, double max);\n\n    Flux<Product> findByQuantityLessThan(int threshold);\n\n    Mono<Long> countByCategory(String category);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-reactive-controller",
      children: "2.4 Reactive Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.MediaType;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.LocalDateTime;\nimport java.time.Duration;\n\n@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n\n    private final ProductRepository repository;\n\n    public ProductController(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    @GetMapping\n    public Flux<Product> getAllProducts() {\n        return repository.findAll();\n    }\n\n    @GetMapping(\"/{id}\")\n    public Mono<ResponseEntity<Product>> getProductById(@PathVariable String id) {\n        return repository.findById(id)\n            .map(ResponseEntity::ok)\n            .defaultIfEmpty(ResponseEntity.notFound().build());\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Mono<Product> createProduct(@RequestBody Product product) {\n        return repository.save(product);\n    }\n\n    @PutMapping(\"/{id}\")\n    public Mono<ResponseEntity<Product>> updateProduct(\n            @PathVariable String id,\n            @RequestBody Product product) {\n        return repository.findById(id)\n            .flatMap(existing -> {\n                Product updated = new Product(\n                    id,\n                    product.name(),\n                    product.category(),\n                    product.price(),\n                    product.quantity(),\n                    existing.createdAt()\n                );\n                return repository.save(updated);\n            })\n            .map(ResponseEntity::ok)\n            .defaultIfEmpty(ResponseEntity.notFound().build());\n    }\n\n    @DeleteMapping(\"/{id}\")\n    public Mono<ResponseEntity<Void>> deleteProduct(@PathVariable String id) {\n        return repository.findById(id)\n            .flatMap(existing ->\n                repository.delete(existing)\n                    .then(Mono.just(ResponseEntity.noContent().<Void>build()))\n            )\n            .defaultIfEmpty(ResponseEntity.notFound().build());\n    }\n\n    @GetMapping(\"/category/{category}\")\n    public Flux<Product> getProductsByCategory(@PathVariable String category) {\n        return repository.findByCategory(category);\n    }\n\n    @GetMapping(\"/search\")\n    public Flux<Product> searchProducts(@RequestParam String q) {\n        return repository.findByNameContainingIgnoreCase(q);\n    }\n\n    @GetMapping(\"/low-stock\")\n    public Flux<Product> getLowStockProducts(@RequestParam(defaultValue = \"10\") int threshold) {\n        return repository.findByQuantityLessThan(threshold);\n    }\n\n    @GetMapping(\"/price-range\")\n    public Flux<Product> getProductsByPriceRange(\n            @RequestParam double min,\n            @RequestParam double max) {\n        return repository.findByPriceBetween(min, max);\n    }\n\n    @PostMapping(\"/batch\")\n    public Flux<Product> createProducts(@RequestBody Flux<Product> products) {\n        return repository.saveAll(products);\n    }\n\n    @DeleteMapping(\"/bulk\")\n    public Mono<Void> deleteAllProducts() {\n        return repository.deleteAll();\n    }\n\n    // Streaming endpoint → emits one product per second\n    @GetMapping(value = \"/stream\", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\n    public Flux<Product> streamProducts() {\n        return repository.findAll()\n            .delayElements(Duration.ofSeconds(1));\n    }\n\n    // Reactive search with query params\n    @GetMapping(\"/advanced-search\")\n    public Flux<Product> advancedSearch(\n            @RequestParam(required = false) String category,\n            @RequestParam(required = false) Double minPrice,\n            @RequestParam(required = false) Double maxPrice) {\n\n        Flux<Product> all = repository.findAll();\n\n        if (category != null) {\n            all = all.filter(p -> p.category().equalsIgnoreCase(category));\n        }\n        if (minPrice != null) {\n            all = all.filter(p -> p.price() >= minPrice);\n        }\n        if (maxPrice != null) {\n            all = all.filter(p -> p.price() <= maxPrice);\n        }\n\n        return all;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-non-streaming-response-type",
      children: "2.5 Non-Streaming Response Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/stats\")\npublic class ProductStatsController {\n\n    private final ProductRepository repository;\n\n    public ProductStatsController(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    @GetMapping(\"/summary\")\n    public Mono<Map<String, Object>> getSummary() {\n        Mono<Long> count = repository.count();\n        Mono<Double> avgPrice = repository.findAll()\n            .map(Product::price)\n            .reduce(0.0, Double::sum)\n            .zipWith(repository.count())\n            .map(tuple -> tuple.getT1() / tuple.getT2());\n\n        return Mono.zip(count, avgPrice)\n            .map(tuple -> Map.of(\n                \"totalProducts\", tuple.getT1(),\n                \"averagePrice\", tuple.getT2()\n            ));\n    }\n\n    @GetMapping(\"/category-counts\")\n    public Mono<Map<String, Long>> getCategoryCounts() {\n        return repository.findAll()\n            .collect(\n                () -> new java.util.HashMap<String, Long>(),\n                (map, product) -> map.merge(product.category(), 1L, Long::sum)\n            );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-error-handling-in-reactive-controllers",
      children: "2.6 Error Handling in Reactive Controllers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WebFlux supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ControllerAdvice"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ExceptionHandler"
      }), " just like Spring MVC, but methods can return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mono"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Flux"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.error;\n\nimport org.springframework.boot.web.error.ErrorAttributeOptions;\nimport org.springframework.boot.web.reactive.error.DefaultErrorAttributes;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.reactive.function.server.ServerRequest;\nimport java.util.Map;\n\n@Component\npublic class GlobalErrorAttributes extends DefaultErrorAttributes {\n\n    @Override\n    public Map<String, Object> getErrorAttributes(\n            ServerRequest request, ErrorAttributeOptions options) {\n        Map<String, Object> errorAttributes = super.getErrorAttributes(request, options);\n        errorAttributes.put(\"timestamp\", System.currentTimeMillis());\n        errorAttributes.put(\"path\", request.path());\n        return errorAttributes;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.error;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.validation.FieldError;\nimport org.springframework.web.bind.annotation.ControllerAdvice;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.support.WebExchangeBindException;\nimport reactor.core.publisher.Mono;\nimport java.util.HashMap;\nimport java.util.Map;\n\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(WebExchangeBindException.class)\n    public Mono<ResponseEntity<Map<String, Object>>> handleValidationErrors(\n            WebExchangeBindException ex) {\n        Map<String, Object> body = new HashMap<>();\n        body.put(\"status\", HttpStatus.BAD_REQUEST.value());\n        body.put(\"error\", \"Validation failed\");\n\n        Map<String, String> fieldErrors = new HashMap<>();\n        for (FieldError fe : ex.getBindingResult().getFieldErrors()) {\n            fieldErrors.put(fe.getField(), fe.getDefaultMessage());\n        }\n        body.put(\"fieldErrors\", fieldErrors);\n\n        return Mono.just(ResponseEntity.badRequest().body(body));\n    }\n\n    @ExceptionHandler(IllegalArgumentException.class)\n    public Mono<ResponseEntity<Map<String, Object>>> handleIllegalArgument(\n            IllegalArgumentException ex) {\n        Map<String, Object> body = new HashMap<>();\n        body.put(\"status\", HttpStatus.BAD_REQUEST.value());\n        body.put(\"error\", ex.getMessage());\n        return Mono.just(ResponseEntity.badRequest().body(body));\n    }\n\n    @ExceptionHandler(RuntimeException.class)\n    public Mono<ResponseEntity<Map<String, Object>>> handleRuntime(RuntimeException ex) {\n        Map<String, Object> body = new HashMap<>();\n        body.put(\"status\", HttpStatus.INTERNAL_SERVER_ERROR.value());\n        body.put(\"error\", \"Internal server error\");\n        return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-functional-routing",
      children: "3. Functional Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-handler-functions",
      children: "3.1 Handler Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.handler;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.MediaType;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.reactive.function.BodyInserters;\nimport org.springframework.web.reactive.function.server.ServerRequest;\nimport org.springframework.web.reactive.function.server.ServerResponse;\nimport reactor.core.publisher.Mono;\nimport java.net.URI;\n\n@Component\npublic class ProductHandler {\n\n    private final ProductRepository repository;\n\n    public ProductHandler(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    public Mono<ServerResponse> getAllProducts(ServerRequest request) {\n        return ServerResponse.ok()\n            .contentType(MediaType.APPLICATION_JSON)\n            .body(repository.findAll(), Product.class);\n    }\n\n    public Mono<ServerResponse> getProductById(ServerRequest request) {\n        String id = request.pathVariable(\"id\");\n        return repository.findById(id)\n            .flatMap(product -> ServerResponse.ok()\n                .contentType(MediaType.APPLICATION_JSON)\n                .bodyValue(product))\n            .switchIfEmpty(ServerResponse.notFound().build());\n    }\n\n    public Mono<ServerResponse> createProduct(ServerRequest request) {\n        return request.bodyToMono(Product.class)\n            .flatMap(product -> repository.save(product))\n            .flatMap(saved -> ServerResponse\n                .created(URI.create(\"/api/fn/products/\" + saved.id()))\n                .contentType(MediaType.APPLICATION_JSON)\n                .bodyValue(saved));\n    }\n\n    public Mono<ServerResponse> updateProduct(ServerRequest request) {\n        String id = request.pathVariable(\"id\");\n        return request.bodyToMono(Product.class)\n            .flatMap(product -> repository.findById(id)\n                .flatMap(existing -> {\n                    Product updated = new Product(\n                        id, product.name(), product.category(),\n                        product.price(), product.quantity(), existing.createdAt()\n                    );\n                    return repository.save(updated);\n                })\n                .flatMap(saved -> ServerResponse.ok()\n                    .contentType(MediaType.APPLICATION_JSON)\n                    .bodyValue(saved))\n                .switchIfEmpty(ServerResponse.notFound().build()));\n    }\n\n    public Mono<ServerResponse> deleteProduct(ServerRequest request) {\n        String id = request.pathVariable(\"id\");\n        return repository.findById(id)\n            .flatMap(existing -> repository.delete(existing)\n                .then(ServerResponse.noContent().build()))\n            .switchIfEmpty(ServerResponse.notFound().build());\n    }\n\n    public Mono<ServerResponse> getProductsByCategory(ServerRequest request) {\n        String category = request.pathVariable(\"category\");\n        return ServerResponse.ok()\n            .contentType(MediaType.APPLICATION_JSON)\n            .body(repository.findByCategory(category), Product.class);\n    }\n\n    public Mono<ServerResponse> searchProducts(ServerRequest request) {\n        String q = request.queryParam(\"q\").orElse(\"\");\n        return ServerResponse.ok()\n            .contentType(MediaType.APPLICATION_JSON)\n            .body(repository.findByNameContainingIgnoreCase(q), Product.class);\n    }\n\n    public Mono<ServerResponse> streamProducts(ServerRequest request) {\n        return ServerResponse.ok()\n            .contentType(MediaType.TEXT_EVENT_STREAM)\n            .body(repository.findAll().delayElements(java.time.Duration.ofSeconds(1)),\n                Product.class);\n    }\n\n    public Mono<ServerResponse> deleteAll(ServerRequest request) {\n        return repository.deleteAll()\n            .then(ServerResponse.noContent().build());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-router-function-configuration",
      children: "3.2 Router Function Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.config;\n\nimport com.webflux.demo.handler.ProductHandler;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.reactive.function.server.RequestPredicates;\nimport org.springframework.web.reactive.function.server.RouterFunction;\nimport org.springframework.web.reactive.function.server.RouterFunctions;\nimport org.springframework.web.reactive.function.server.ServerResponse;\n\nimport static org.springframework.web.reactive.function.server.RequestPredicates.*;\n\n@Configuration\npublic class ProductRouterConfig {\n\n    @Bean\n    public RouterFunction<ServerResponse> productRoutes(ProductHandler handler) {\n        return RouterFunctions.nest(\n            RequestPredicates.path(\"/api/fn/products\"),\n            RouterFunctions\n                .route(GET(\"/\"), handler::getAllProducts)\n                .andRoute(GET(\"/stream\"), handler::streamProducts)\n                .andRoute(GET(\"/category/{category}\"), handler::getProductsByCategory)\n                .andRoute(GET(\"/search\"), handler::searchProducts)\n                .andRoute(GET(\"/{id}\"), handler::getProductById)\n                .andRoute(POST(\"/\"), handler::createProduct)\n                .andRoute(PUT(\"/{id}\"), handler::updateProduct)\n                .andRoute(DELETE(\"/{id}\"), handler::deleteProduct)\n                .andRoute(DELETE(\"/\"), handler::deleteAll)\n        );\n    }\n\n    // Additional routes for other domains\n    @Bean\n    public RouterFunction<ServerResponse> healthRoutes() {\n        return RouterFunctions\n            .route(GET(\"/api/health\"),\n                request -> ServerResponse.ok()\n                    .bodyValue(new java.util.HashMap<>(Map.of(\n                        \"status\", \"UP\",\n                        \"timestamp\", System.currentTimeMillis()\n                    ))));\n\n    }\n\n    private static <K, V> java.util.Map<K, V> Map(K k1, V v1, K k2, V v2) {\n        var map = new java.util.HashMap<K, V>();\n        map.put(k1, v1);\n        map.put(k2, v2);\n        return map;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-request-predicates",
      children: "3.3 Request Predicates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.reactive.function.server.RouterFunction;\nimport org.springframework.web.reactive.function.server.ServerResponse;\n\nimport static org.springframework.web.reactive.function.server.RequestPredicates.*;\nimport static org.springframework.web.reactive.function.server.RouterFunctions.route;\n\n@Configuration\npublic class AdvancedRouterConfig {\n\n    @Bean\n    public RouterFunction<ServerResponse> advancedRoutes() {\n        return\n            // Content type negotiation\n            route(GET(\"/api/data\")\n                    .and(accept(MediaType.APPLICATION_JSON)),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"type\\\": \\\"json\\\"}\"))\n\n            .andRoute(GET(\"/api/data\")\n                    .and(accept(MediaType.APPLICATION_XML)),\n                request -> ServerResponse.ok().bodyValue(\"<data><type>xml</type></data>\"))\n\n            // Header-based routing\n            .andRoute(GET(\"/api/version\")\n                    .and(headers().header(\"X-API-Version\", \"v2\")),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"version\\\": \\\"2.0\\\"}\"))\n\n            .andRoute(GET(\"/api/version\"),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"version\\\": \\\"1.0\\\"}\"))\n\n            // Query param routing\n            .andRoute(GET(\"/api/search\")\n                    .and(queryParam(\"type\", \"detailed\")),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"mode\\\": \\\"detailed\\\"}\"))\n\n            .andRoute(GET(\"/api/search\"),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"mode\\\": \\\"simple\\\"}\"))\n\n            // POST with specific content type\n            .andRoute(POST(\"/api/upload\")\n                    .and(contentType(MediaType.APPLICATION_JSON)),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"received\\\": \\\"json\\\"}\"))\n\n            .andRoute(POST(\"/api/upload\")\n                    .and(contentType(MediaType.MULTIPART_FORM_DATA)),\n                request -> ServerResponse.ok().bodyValue(\"{\\\"received\\\": \\\"multipart\\\"}\")\n\n            // Cookie-based routing\n            .andRoute(GET(\"/api/preferences\")\n                    .and(cookies().doesNotHave(\"theme\")),\n                request -> ServerResponse.ok()\n                    .cookie(ResponseCookie.from(\"theme\", \"light\").build())\n                    .bodyValue(\"{\\\"theme\\\": \\\"default\\\"}\"))\n            );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-webclient--reactive-http-client",
      children: "4. WebClient → Reactive HTTP Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-webclient-configuration",
      children: "4.1 WebClient Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.client;\n\nimport io.netty.channel.ChannelOption;\nimport io.netty.handler.timeout.ReadTimeoutHandler;\nimport io.netty.handler.timeout.WriteTimeoutHandler;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.http.client.reactive.ReactorClientHttpConnector;\nimport org.springframework.web.reactive.function.client.ExchangeStrategies;\nimport org.springframework.web.reactive.function.client.WebClient;\nimport reactor.netty.http.client.HttpClient;\nimport reactor.netty.resources.ConnectionProvider;\nimport java.time.Duration;\nimport java.util.concurrent.TimeUnit;\n\n@Configuration\npublic class WebClientConfig {\n\n    @Bean\n    public WebClient webClient() {\n        // Connection pool configuration\n        ConnectionProvider provider = ConnectionProvider.builder(\"custom-pool\")\n            .maxConnections(200)\n            .maxIdleTime(Duration.ofSeconds(30))\n            .maxLifeTime(Duration.ofMinutes(5))\n            .pendingAcquireTimeout(Duration.ofSeconds(10))\n            .evictInBackground(Duration.ofSeconds(60))\n            .build();\n\n        HttpClient httpClient = HttpClient.create(provider)\n            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)\n            .responseTimeout(Duration.ofSeconds(10))\n            .doOnConnected(conn -> conn\n                .addHandlerLast(new ReadTimeoutHandler(10, TimeUnit.SECONDS))\n                .addHandlerLast(new WriteTimeoutHandler(10, TimeUnit.SECONDS))\n            );\n\n        // Increase max in-memory buffer size (default 256KB)\n        ExchangeStrategies strategies = ExchangeStrategies.builder()\n            .codecs(config -> config\n                .defaultCodecs()\n                .maxInMemorySize(16 * 1024 * 1024)) // 16 MB\n            .build();\n\n        return WebClient.builder()\n            .clientConnector(new ReactorClientHttpConnector(httpClient))\n            .exchangeStrategies(strategies)\n            .baseUrl(\"http://localhost:8080\")\n            .defaultHeader(\"X-Source\", \"webflux-demo\")\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-webclient-usage-examples",
      children: "4.2 WebClient Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.client;\n\nimport com.webflux.demo.model.Product;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.reactive.function.client.WebClient;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\nimport java.util.List;\n\n@Service\npublic class ProductServiceClient {\n\n    private final WebClient webClient;\n\n    public ProductServiceClient(WebClient webClient) {\n        this.webClient = webClient;\n    }\n\n    // GET - retrieve single item\n    public Mono<Product> getProduct(String id) {\n        return webClient.get()\n            .uri(\"/api/products/{id}\", id)\n            .retrieve()\n            .bodyToMono(Product.class)\n            .timeout(Duration.ofSeconds(5))\n            .onErrorResume(e -> {\n                System.err.println(\"Failed to fetch product \" + id + \": \" + e.getMessage());\n                return Mono.empty();\n            });\n    }\n\n    // GET - retrieve list\n    public Flux<Product> getAllProducts() {\n        return webClient.get()\n            .uri(\"/api/products\")\n            .retrieve()\n            .bodyToFlux(Product.class);\n    }\n\n    // GET with query parameters\n    public Flux<Product> searchProducts(String query) {\n        return webClient.get()\n            .uri(uriBuilder -> uriBuilder\n                .path(\"/api/products/search\")\n                .queryParam(\"q\", query)\n                .build())\n            .retrieve()\n            .bodyToFlux(Product.class);\n    }\n\n    // POST - create item\n    public Mono<Product> createProduct(Product product) {\n        return webClient.post()\n            .uri(\"/api/products\")\n            .bodyValue(product)\n            .retrieve()\n            .bodyToMono(Product.class);\n    }\n\n    // PUT - update item\n    public Mono<Product> updateProduct(String id, Product product) {\n        return webClient.put()\n            .uri(\"/api/products/{id}\", id)\n            .bodyValue(product)\n            .retrieve()\n            .bodyToMono(Product.class);\n    }\n\n    // DELETE - delete item\n    public Mono<Void> deleteProduct(String id) {\n        return webClient.delete()\n            .uri(\"/api/products/{id}\", id)\n            .retrieve()\n            .bodyToMono(Void.class);\n    }\n\n    // POST - batch create\n    public Flux<Product> createProducts(List<Product> products) {\n        return webClient.post()\n            .uri(\"/api/products/batch\")\n            .body(Flux.fromIterable(products), Product.class)\n            .retrieve()\n            .bodyToFlux(Product.class);\n    }\n\n    // Exchange: full control over response (headers, status, retry)\n    public Mono<Product> getProductWithRetry(String id) {\n        return webClient.get()\n            .uri(\"/api/products/{id}\", id)\n            .exchangeToMono(response -> {\n                if (response.statusCode().is2xxSuccessful()) {\n                    return response.bodyToMono(Product.class);\n                } else if (response.statusCode().is4xxClientError()) {\n                    return Mono.empty();\n                } else {\n                    return response.createException()\n                        .flatMap(Mono::error);\n                }\n            })\n            .retry(2)\n            .timeout(Duration.ofSeconds(10));\n    }\n\n    // Streaming: consume Server-Sent Events\n    public Flux<Product> streamProducts() {\n        return webClient.get()\n            .uri(\"/api/products/stream\")\n            .accept(org.springframework.http.MediaType.TEXT_EVENT_STREAM)\n            .retrieve()\n            .bodyToFlux(Product.class)\n            .doOnNext(product -> System.out.println(\"Received: \" + product));\n    }\n\n    // Parallel calls: fetch multiple resources concurrently\n    public Flux<Product> getProductsParallel(List<String> ids) {\n        return Flux.fromIterable(ids)\n            .flatMap(id -> getProduct(id)\n                .subscribeOn(reactor.core.scheduler.Schedulers.boundedElastic()), 10);\n    }\n\n    // Exchange filter with logging\n    public Flux<Product> getAllWithLogging() {\n        return webClient.get()\n            .uri(\"/api/products\")\n            .exchangeToFlux(response -> {\n                System.out.println(\"Response status: \" + response.statusCode());\n                System.out.println(\"Content length: \" +\n                    response.headers().contentLength());\n                return response.bodyToFlux(Product.class);\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-webclient-error-handling",
      children: "4.3 WebClient Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.client;\n\nimport com.webflux.demo.model.Product;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.reactive.function.client.WebClient;\nimport org.springframework.web.reactive.function.client.WebClientResponseException;\nimport reactor.core.publisher.Mono;\nimport java.util.Map;\n\n@Service\npublic class ResilientProductClient {\n\n    private final WebClient webClient;\n\n    public ResilientProductClient(WebClient webClient) {\n        this.webClient = webClient;\n    }\n\n    public Mono<Product> getProductSafe(String id) {\n        return webClient.get()\n            .uri(\"/api/products/{id}\", id)\n            .retrieve()\n            .onStatus(HttpStatus::is4xxClientError, response -> {\n                if (response.statusCode() == HttpStatus.NOT_FOUND) {\n                    return Mono.empty(); // Not found is not an error\n                }\n                return response.bodyToMono(Map.class)\n                    .flatMap(body -> {\n                        String message = (String) body.getOrDefault(\"error\", \"Client error\");\n                        return Mono.error(new ClientException(message));\n                    });\n            })\n            .onStatus(HttpStatus::is5xxServerError, response ->\n                response.bodyToMono(String.class)\n                    .flatMap(body -> Mono.error(new ServerException(\"Server error: \" + body)))\n            )\n            .bodyToMono(Product.class)\n            .onErrorResume(WebClientResponseException.class, e -> {\n                System.err.println(\"HTTP \" + e.getStatusCode() + \": \" + e.getResponseBodyAsString());\n                return Mono.empty();\n            });\n    }\n\n    static class ClientException extends RuntimeException {\n        ClientException(String message) { super(message); }\n    }\n\n    static class ServerException extends RuntimeException {\n        ServerException(String message) { super(message); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-server-sent-events-sse",
      children: "5. Server-Sent Events (SSE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-sse-producer",
      children: "5.1 SSE Producer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Sinks;\nimport java.time.Duration;\nimport java.time.Instant;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/sse\")\npublic class SSEController {\n\n    private final ProductRepository repository;\n    private final Sinks.Many<Product> productSink;\n\n    public SSEController(ProductRepository repository) {\n        this.repository = repository;\n        this.productSink = Sinks.many().multicast().onBackpressureBuffer();\n    }\n\n    // Push new products whenever created\n    public void notifyNewProduct(Product product) {\n        productSink.tryEmitNext(product);\n    }\n\n    // SSE endpoint: stream new product notifications\n    @GetMapping(value = \"/new-products\", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\n    public Flux<Product> newProducts() {\n        return productSink.asFlux();\n    }\n\n    // SSE endpoint: periodic stock summary\n    @GetMapping(value = \"/stock-summary\", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\n    public Flux<Map<String, Object>> stockSummary() {\n        return Flux.interval(Duration.ofSeconds(5))\n            .flatMap(tick ->\n                repository.findAll()\n                    .collectList()\n                    .map(products -> Map.of(\n                        \"timestamp\", Instant.now().toString(),\n                        \"totalProducts\", products.size(),\n                        \"totalValue\", products.stream()\n                            .mapToDouble(p -> p.price() * p.quantity())\n                            .sum(),\n                        \"lowStockCount\", products.stream()\n                            .filter(p -> p.quantity() < 10)\n                            .count()\n                    ))\n            );\n    }\n\n    // SSE endpoint: time events\n    @GetMapping(value = \"/clock\", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\n    public Flux<String> clock() {\n        return Flux.interval(Duration.ofSeconds(1))\n            .map(tick -> \"Tick \" + tick + \" at \" + Instant.now());\n    }\n\n    // SSE with custom event types\n    @GetMapping(value = \"/events\", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\n    public Flux<org.springframework.http.codec.ServerSentEvent<Object>> events() {\n        return Flux.interval(Duration.ofSeconds(2))\n            .map(tick -> org.springframework.http.codec.ServerSentEvent.builder()\n                .event(\"heartbeat\")\n                .id(String.valueOf(tick))\n                .data(Map.of(\"tick\", tick, \"timestamp\", Instant.now().toString()))\n                .comment(\"SSE connection active\")\n                .build());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-sse-consumer-with-webclient",
      children: "5.2 SSE Consumer with WebClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.client;\n\nimport com.webflux.demo.model.Product;\nimport org.springframework.http.MediaType;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.reactive.function.client.WebClient;\nimport reactor.core.publisher.Flux;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\n\n@Service\npublic class SSEClient {\n\n    private final WebClient webClient;\n\n    public SSEClient(WebClient webClient) {\n        this.webClient = webClient;\n    }\n\n    public Flux<Product> subscribeNewProducts() {\n        return webClient.get()\n            .uri(\"/api/sse/new-products\")\n            .accept(MediaType.TEXT_EVENT_STREAM)\n            .retrieve()\n            .bodyToFlux(Product.class)\n            .retryBackoff(5, Duration.ofSeconds(1))\n            .doOnSubscribe(s -> System.out.println(\"SSE subscribed\"))\n            .doOnCancel(() -> System.out.println(\"SSE cancelled\"))\n            .doOnError(e -> System.err.println(\"SSE error: \" + e.getMessage()))\n            .subscribeOn(Schedulers.boundedElastic());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-reactive-security",
      children: "6. Reactive Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-security-configuration",
      children: "6.1 Security Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.security;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;\nimport org.springframework.security.config.web.server.ServerHttpSecurity;\nimport org.springframework.security.core.userdetails.MapReactiveUserDetailsService;\nimport org.springframework.security.core.userdetails.User;\nimport org.springframework.security.core.userdetails.UserDetails;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.security.web.server.SecurityWebFilterChain;\nimport org.springframework.security.web.server.authentication.logout.DelegatingServerLogoutHandler;\nimport org.springframework.security.web.server.authentication.logout.SecurityContextServerLogoutHandler;\nimport org.springframework.security.web.server.authentication.logout.WebSessionServerLogoutHandler;\nimport org.springframework.security.web.server.csrf.CookieServerCsrfTokenRepository;\nimport org.springframework.web.cors.CorsConfiguration;\nimport org.springframework.web.cors.reactive.CorsConfigurationSource;\nimport org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;\nimport java.util.List;\n\n@Configuration\n@EnableReactiveMethodSecurity\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {\n        return http\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieServerCsrfTokenRepository.withHttpOnlyFalse()))\n            .cors(cors -> cors.configurationSource(corsConfigurationSource()))\n            .authorizeExchange(exchanges -> exchanges\n                .pathMatchers(\"/api/health\", \"/api/sse/clock\").permitAll()\n                .pathMatchers(HttpMethod.GET, \"/api/products/**\").hasRole(\"USER\")\n                .pathMatchers(HttpMethod.POST, \"/api/products/**\").hasRole(\"ADMIN\")\n                .pathMatchers(HttpMethod.PUT, \"/api/products/**\").hasRole(\"ADMIN\")\n                .pathMatchers(HttpMethod.DELETE, \"/api/products/**\").hasRole(\"ADMIN\")\n                .pathMatchers(\"/api/fn/**\").hasAnyRole(\"USER\", \"ADMIN\")\n                .anyExchange().authenticated()\n            )\n            .formLogin(form -> form\n                .loginPage(\"/login\")\n                .authenticationSuccessHandler((webFilterExchange, authentication) -> {\n                    webFilterExchange.getExchange().getResponse().setStatusCode(\n                        org.springframework.http.HttpStatus.OK);\n                    return webFilterExchange.getChain().filter(webFilterExchange.getExchange());\n                })\n            )\n            .logout(logout -> logout\n                .logoutUrl(\"/logout\")\n                .logoutHandler(new DelegatingServerLogoutHandler(\n                    new SecurityContextServerLogoutHandler(),\n                    new WebSessionServerLogoutHandler()\n                ))\n            )\n            .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)\n            .build();\n    }\n\n    @Bean\n    public MapReactiveUserDetailsService userDetailsService(PasswordEncoder encoder) {\n        UserDetails user = User.builder()\n            .username(\"user\")\n            .password(encoder.encode(\"password\"))\n            .roles(\"USER\")\n            .build();\n\n        UserDetails admin = User.builder()\n            .username(\"admin\")\n            .password(encoder.encode(\"admin\"))\n            .roles(\"USER\", \"ADMIN\")\n            .build();\n\n        return new MapReactiveUserDetailsService(user, admin);\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration config = new CorsConfiguration();\n        config.setAllowedOrigins(List.of(\"http://localhost:3000\"));\n        config.setAllowedMethods(List.of(\"GET\", \"POST\", \"PUT\", \"DELETE\", \"OPTIONS\"));\n        config.setAllowedHeaders(List.of(\"*\"));\n        config.setAllowCredentials(true);\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/**\", config);\n        return source;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-oauth2-resource-server-with-webflux",
      children: "6.2 OAuth2 Resource Server with WebFlux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.security;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;\nimport org.springframework.security.config.web.server.ServerHttpSecurity;\nimport org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;\nimport org.springframework.security.oauth2.jwt.ReactiveJwtDecoders;\nimport org.springframework.security.web.server.SecurityWebFilterChain;\n\n@Configuration\n@EnableWebFluxSecurity\npublic class OAuth2ResourceServerConfig {\n\n    @Bean\n    public SecurityWebFilterChain oauth2Security(ServerHttpSecurity http) {\n        return http\n            .csrf(ServerHttpSecurity.CsrfSpec::disable)\n            .authorizeExchange(exchanges -> exchanges\n                .pathMatchers(\"/api/health\", \"/api/public/**\").permitAll()\n                .pathMatchers(\"/api/admin/**\").hasAuthority(\"SCOPE_admin\")\n                .anyExchange().authenticated()\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtDecoder(jwtDecoder())\n                )\n            )\n            .build();\n    }\n\n    @Bean\n    public ReactiveJwtDecoder jwtDecoder() {\n        // Configure with your OAuth2 provider's issuer URI\n        return ReactiveJwtDecoders\n            .fromIssuerLocation(\"https://your-issuer.example.com\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-reactive-method-security",
      children: "6.3 Reactive Method Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.security.core.annotation.AuthenticationPrincipal;\nimport org.springframework.security.oauth2.jwt.Jwt;\nimport org.springframework.web.bind.annotation.*;\nimport reactor.core.publisher.Mono;\n\n@RestController\n@RequestMapping(\"/api/admin\")\npublic class AdminController {\n\n    private final ProductRepository repository;\n\n    public AdminController(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    @DeleteMapping(\"/products/{id}\")\n    public Mono<Void> adminDeleteProduct(@PathVariable String id) {\n        return repository.deleteById(id);\n    }\n\n    @PreAuthorize(\"hasAuthority('SCOPE_admin')\")\n    @GetMapping(\"/audit-log\")\n    public Mono<String> getAuditLog(@AuthenticationPrincipal Jwt jwt) {\n        String subject = jwt.getSubject();\n        return Mono.just(\"Audit log access by \" + subject);\n    }\n\n    @PreAuthorize(\"@securityService.canAccessProduct(#id)\")\n    @GetMapping(\"/secure-products/{id}\")\n    public Mono<Product> getSecuredProduct(@PathVariable String id) {\n        return repository.findById(id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.security;\n\nimport org.springframework.security.core.context.ReactiveSecurityContextHolder;\nimport org.springframework.stereotype.Service;\nimport reactor.core.publisher.Mono;\n\n@Service(\"securityService\")\npublic class SecurityService {\n\n    public Mono<Boolean> canAccessProduct(String productId) {\n        return ReactiveSecurityContextHolder.getContext()\n            .map(ctx -> ctx.getAuthentication())\n            .flatMap(auth -> {\n                String username = auth.getName();\n                // Custom authorization logic based on username and product\n                return Mono.just(true);\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-file-upload-and-streaming",
      children: "7. File Upload and Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-reactive-file-upload",
      children: "7.1 Reactive File Upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport org.springframework.core.io.Resource;\nimport org.springframework.core.io.UrlResource;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.MediaType;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.http.codec.multipart.FilePart;\nimport org.springframework.http.codec.multipart.Part;\nimport org.springframework.web.bind.annotation.*;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.io.IOException;\nimport java.net.MalformedURLException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardCopyOption;\nimport java.util.Map;\nimport java.util.UUID;\n\n@RestController\n@RequestMapping(\"/api/files\")\npublic class FileController {\n\n    private final Path uploadDir = Paths.get(\"uploads\");\n\n    public FileController() throws IOException {\n        Files.createDirectories(uploadDir);\n    }\n\n    // Single file upload\n    @PostMapping(\"/upload\")\n    public Mono<Map<String, String>> uploadFile(@RequestPart(\"file\") FilePart filePart) {\n        String filename = UUID.randomUUID() + \"_\" + filePart.filename();\n        Path target = uploadDir.resolve(filename);\n\n        return filePart.transferTo(target)\n            .thenReturn(Map.of(\n                \"filename\", filename,\n                \"size\", String.valueOf(target.toFile().length()),\n                \"path\", target.toString()\n            ));\n    }\n\n    // Multiple file upload\n    @PostMapping(value = \"/upload-multiple\", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)\n    public Flux<Map<String, String>> uploadMultipleFiles(\n            @RequestPart(\"files\") Flux<FilePart> fileParts) {\n        return fileParts.flatMap(filePart -> {\n            String filename = UUID.randomUUID() + \"_\" + filePart.filename();\n            Path target = uploadDir.resolve(filename);\n            return filePart.transferTo(target)\n                .thenReturn(Map.of(\n                    \"filename\", filename,\n                    \"path\", target.toString()\n                ));\n        });\n    }\n\n    // Mixed multipart: files + form fields\n    @PostMapping(\"/upload-with-metadata\")\n    public Mono<Map<String, Object>> uploadWithMetadata(\n            @RequestPart(\"file\") FilePart filePart,\n            @RequestPart(\"metadata\") Mono<Map<String, String>> metadata) {\n\n        String filename = UUID.randomUUID() + \"_\" + filePart.filename();\n        Path target = uploadDir.resolve(filename);\n\n        return metadata\n            .flatMap(meta ->\n                filePart.transferTo(target)\n                    .thenReturn(Map.of(\n                        \"filename\", filename,\n                        \"uploadedBy\", meta.getOrDefault(\"uploadedBy\", \"unknown\"),\n                        \"description\", meta.getOrDefault(\"description\", \"\"),\n                        \"size\", target.toFile().length()\n                    ))\n            );\n    }\n\n    // Reactive file download\n    @GetMapping(\"/download/{filename}\")\n    public Mono<ResponseEntity<Resource>> downloadFile(@PathVariable String filename) {\n        Path file = uploadDir.resolve(filename);\n        if (!Files.exists(file)) {\n            return Mono.just(ResponseEntity.notFound().build());\n        }\n        try {\n            Resource resource = new UrlResource(file.toUri());\n            return Mono.just(ResponseEntity.ok()\n                .contentType(MediaType.APPLICATION_OCTET_STREAM)\n                .header(HttpHeaders.CONTENT_DISPOSITION,\n                    \"attachment; filename=\\\"\" + filename + \"\\\"\")\n                .body(resource));\n        } catch (MalformedURLException e) {\n            return Mono.error(e);\n        }\n    }\n\n    // Streaming file list\n    @GetMapping(\"/list\")\n    public Flux<Map<String, Object>> listFiles() throws IOException {\n        return Flux.fromStream(Files.list(uploadDir))\n            .map(path -> {\n                try {\n                    return Map.of(\n                        \"name\", path.getFileName().toString(),\n                        \"size\", Files.size(path),\n                        \"lastModified\", Files.getLastModifiedTime(path).toMillis()\n                    );\n                } catch (IOException e) {\n                    return Map.of(\"name\", path.getFileName().toString());\n                }\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-streaming-large-file-download",
      children: "7.2 Streaming Large File Download"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport org.springframework.core.io.buffer.DataBuffer;\nimport org.springframework.core.io.buffer.DataBufferUtils;\nimport org.springframework.http.MediaType;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.io.IOException;\nimport java.io.RandomAccessFile;\nimport java.nio.channels.AsynchronousFileChannel;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardOpenOption;\n\n@RestController\n@RequestMapping(\"/api/stream\")\npublic class StreamingController {\n\n    private final Path uploadDir = Paths.get(\"uploads\");\n\n    @GetMapping(value = \"/video/{filename}\", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)\n    public Flux<DataBuffer> streamVideo(@PathVariable String filename) {\n        Path file = uploadDir.resolve(filename);\n        return DataBufferUtils.readAsynchronousFileChannel(\n            () -> AsynchronousFileChannel.open(file, StandardOpenOption.READ),\n            org.springframework.core.io.buffer.DefaultDataBufferFactory.sharedInstance,\n            8192 // Buffer size\n        );\n    }\n\n    @GetMapping(\"/range/{filename}\")\n    public Mono<ResponseEntity<Flux<DataBuffer>>> streamRange(\n            @PathVariable String filename,\n            @org.springframework.web.bind.annotation.RequestHeader(\n                value = \"Range\", required = false) String rangeHeader) {\n\n        Path file = uploadDir.resolve(filename);\n        if (!file.toFile().exists()) {\n            return Mono.just(ResponseEntity.notFound().build());\n        }\n\n        long fileSize = file.toFile().length();\n\n        if (rangeHeader == null) {\n            // No range requested → return full file\n            Flux<DataBuffer> data = DataBufferUtils.readAsynchronousFileChannel(\n                () -> AsynchronousFileChannel.open(file, StandardOpenOption.READ),\n                org.springframework.core.io.buffer.DefaultDataBufferFactory.sharedInstance,\n                8192);\n            return Mono.just(ResponseEntity.ok()\n                .contentType(MediaType.APPLICATION_OCTET_STREAM)\n                .header(\"Accept-Ranges\", \"bytes\")\n                .header(\"Content-Length\", String.valueOf(fileSize))\n                .body(data));\n        }\n\n        // Parse range header: \"bytes=start-end\"\n        String range = rangeHeader.replace(\"bytes=\", \"\");\n        String[] parts = range.split(\"-\");\n        long start = Long.parseLong(parts[0]);\n        long end = parts.length > 1 ? Long.parseLong(parts[1]) : fileSize - 1;\n\n        long length = end - start + 1;\n        final long readStart = start;\n        final long readEnd = end;\n\n        Flux<DataBuffer> data = DataBufferUtils.readAsynchronousFileChannel(\n            () -> AsynchronousFileChannel.open(file, StandardOpenOption.READ),\n            org.springframework.core.io.buffer.DefaultDataBufferFactory.sharedInstance,\n            8192, readStart);\n\n        // We need to limit to the range length\n        Flux<DataBuffer> ranged = DataBufferUtils.takeUntilByteCount(data, length);\n\n        return Mono.just(ResponseEntity.status(org.springframework.http.HttpStatus.PARTIAL_CONTENT)\n            .contentType(MediaType.APPLICATION_OCTET_STREAM)\n            .header(\"Accept-Ranges\", \"bytes\")\n            .header(\"Content-Range\", \"bytes \" + start + \"-\" + end + \"/\" + fileSize)\n            .header(\"Content-Length\", String.valueOf(length))\n            .body(ranged));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-rsocket--reactive-socket-protocol",
      children: "8. RSocket → Reactive Socket Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-rsocket-server",
      children: "8.1 RSocket Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.rsocket;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.boot.rsocket.messaging.RSocketStrategiesCustomizer;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.http.codec.json.Jackson2JsonDecoder;\nimport org.springframework.http.codec.json.Jackson2JsonEncoder;\nimport org.springframework.messaging.handler.annotation.MessageMapping;\nimport org.springframework.messaging.handler.annotation.Payload;\nimport org.springframework.stereotype.Controller;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\n\n@Configuration\npublic class RSocketConfig {\n\n    @Bean\n    public RSocketStrategiesCustomizer rSocketStrategies() {\n        return strategies -> strategies\n            .encoder(new Jackson2JsonEncoder())\n            .decoder(new Jackson2JsonDecoder());\n    }\n}\n\n@Controller\npublic class ProductRSocketController {\n\n    private final ProductRepository repository;\n\n    public ProductRSocketController(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    // Fire-and-forget: create product, no response needed\n    @MessageMapping(\"product.create\")\n    public Mono<Void> createProduct(@Payload Product product) {\n        return repository.save(product).then();\n    }\n\n    // Request-response: get product by ID\n    @MessageMapping(\"product.get\")\n    public Mono<Product> getProduct(@Payload String id) {\n        return repository.findById(id);\n    }\n\n    // Request-stream: get all products as stream\n    @MessageMapping(\"product.list\")\n    public Flux<Product> listProducts() {\n        return repository.findAll();\n    }\n\n    // Channel: bidirectional stream\n    @MessageMapping(\"product.search\")\n    public Flux<Product> searchProducts(@Payload Flux<String> searchTerms) {\n        return searchTerms\n            .flatMap(term -> repository.findByNameContainingIgnoreCase(term));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-rsocket-client-configuration",
      children: "8.2 RSocket Client Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.rsocket;\n\nimport com.webflux.demo.model.Product;\nimport org.springframework.boot.rsocket.messaging.RSocketRequesterCustomizer;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.messaging.rsocket.RSocketRequester;\nimport org.springframework.messaging.rsocket.RSocketStrategies;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.util.retry.Retry;\nimport java.net.URI;\nimport java.time.Duration;\n\n@Configuration\npublic class RSocketClientConfig {\n\n    @Bean\n    public RSocketRequester rSocketRequester(RSocketStrategies strategies) {\n        return RSocketRequester.builder()\n            .rsocketStrategies(strategies)\n            .rsocketConnector(connector -> connector\n                .reconnect(Retry.backoff(5, Duration.ofSeconds(1)))\n                .keepAlive(Duration.ofSeconds(30), Duration.ofSeconds(90))\n            )\n            .websocket(URI.create(\"ws://localhost:8080/rsocket\"));\n    }\n}\n\n@Service\npublic class ProductRSocketClient {\n\n    private final RSocketRequester requester;\n\n    public ProductRSocketClient(RSocketRequester requester) {\n        this.requester = requester;\n    }\n\n    // Fire-and-forget\n    public Mono<Void> createProduct(Product product) {\n        return requester\n            .route(\"product.create\")\n            .data(product)\n            .send();\n    }\n\n    // Request-response\n    public Mono<Product> getProduct(String id) {\n        return requester\n            .route(\"product.get\")\n            .data(id)\n            .retrieveMono(Product.class);\n    }\n\n    // Request-stream\n    public Flux<Product> listProducts() {\n        return requester\n            .route(\"product.list\")\n            .retrieveFlux(Product.class);\n    }\n\n    // Channel\n    public Flux<Product> searchProducts(Flux<String> terms) {\n        return requester\n            .route(\"product.search\")\n            .data(terms)\n            .retrieveFlux(Product.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-testing-webflux-with-webtestclient",
      children: "9. Testing WebFlux with WebTestClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.controller;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.http.MediaType;\nimport org.springframework.test.web.reactive.server.WebTestClient;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@AutoConfigureWebTestClient\nclass ProductControllerWebTest {\n\n    @Autowired\n    private WebTestClient webTestClient;\n\n    @Autowired\n    private ProductRepository repository;\n\n    private Product sampleProduct;\n\n    @BeforeEach\n    void setUp() {\n        repository.deleteAll().block();\n        sampleProduct = repository.save(new Product(\n            null, \"Test Product\", \"Electronics\", 99.99, 50, LocalDateTime.now()\n        )).block();\n    }\n\n    @Test\n    void getAllProducts_shouldReturnList() {\n        webTestClient.get()\n            .uri(\"/api/products\")\n            .exchange()\n            .expectStatus().isOk()\n            .expectHeader().contentType(MediaType.APPLICATION_JSON)\n            .expectBodyList(Product.class)\n            .hasSize(1)\n            .contains(sampleProduct);\n    }\n\n    @Test\n    void getProductById_shouldReturnProduct() {\n        webTestClient.get()\n            .uri(\"/api/products/{id}\", sampleProduct.id())\n            .exchange()\n            .expectStatus().isOk()\n            .expectBody()\n            .jsonPath(\"$.name\").isEqualTo(\"Test Product\")\n            .jsonPath(\"$.category\").isEqualTo(\"Electronics\")\n            .jsonPath(\"$.price\").isEqualTo(99.99);\n    }\n\n    @Test\n    void getProductById_notFound_shouldReturn404() {\n        webTestClient.get()\n            .uri(\"/api/products/nonexistent\")\n            .exchange()\n            .expectStatus().isNotFound();\n    }\n\n    @Test\n    void createProduct_shouldReturnCreated() {\n        Product newProduct = new Product(\n            null, \"New Product\", \"Books\", 29.99, 100, null\n        );\n\n        webTestClient.post()\n            .uri(\"/api/products\")\n            .contentType(MediaType.APPLICATION_JSON)\n            .bodyValue(newProduct)\n            .exchange()\n            .expectStatus().isCreated()\n            .expectBody()\n            .jsonPath(\"$.name\").isEqualTo(\"New Product\")\n            .jsonPath(\"$.id\").isNotEmpty();\n    }\n\n    @Test\n    void updateProduct_shouldReturnUpdated() {\n        Product update = new Product(\n            null, \"Updated Product\", \"Electronics\", 79.99, 25, null\n        );\n\n        webTestClient.put()\n            .uri(\"/api/products/{id}\", sampleProduct.id())\n            .contentType(MediaType.APPLICATION_JSON)\n            .bodyValue(update)\n            .exchange()\n            .expectStatus().isOk()\n            .expectBody()\n            .jsonPath(\"$.name\").isEqualTo(\"Updated Product\")\n            .jsonPath(\"$.price\").isEqualTo(79.99);\n    }\n\n    @Test\n    void deleteProduct_shouldReturnNoContent() {\n        webTestClient.delete()\n            .uri(\"/api/products/{id}\", sampleProduct.id())\n            .exchange()\n            .expectStatus().isNoContent();\n\n        // Verify deletion\n        webTestClient.get()\n            .uri(\"/api/products/{id}\", sampleProduct.id())\n            .exchange()\n            .expectStatus().isNotFound();\n    }\n\n    @Test\n    void searchProducts_shouldReturnMatches() {\n        webTestClient.get()\n            .uri(uriBuilder -> uriBuilder\n                .path(\"/api/products/search\")\n                .queryParam(\"q\", \"Test\")\n                .build())\n            .exchange()\n            .expectStatus().isOk()\n            .expectBodyList(Product.class)\n            .hasSize(1);\n    }\n\n    @Test\n    void getProductsByCategory_shouldReturnFiltered() {\n        webTestClient.get()\n            .uri(\"/api/products/category/{category}\", \"Electronics\")\n            .exchange()\n            .expectStatus().isOk()\n            .expectBodyList(Product.class)\n            .hasSize(1);\n    }\n\n    @Test\n    void getLowStockProducts_shouldReturnFiltered() {\n        repository.save(new Product(\n            null, \"Low Stock Item\", \"Other\", 5.99, 3, LocalDateTime.now()\n        )).block();\n\n        webTestClient.get()\n            .uri(uriBuilder -> uriBuilder\n                .path(\"/api/products/low-stock\")\n                .queryParam(\"threshold\", 10)\n                .build())\n            .exchange()\n            .expectStatus().isOk()\n            .expectBodyList(Product.class)\n            .hasSize(1);\n    }\n\n    @Test\n    void testStreamEndpoint() {\n        Flux<Product> stream = webTestClient.get()\n            .uri(\"/api/products/stream\")\n            .accept(MediaType.TEXT_EVENT_STREAM)\n            .exchange()\n            .expectStatus().isOk()\n            .returnResult(Product.class)\n            .getResponseBody()\n            .take(1);\n\n        List<Product> products = stream.collectList().block();\n        assert products != null && !products.isEmpty();\n    }\n\n    @Test\n    void testFunctionalRoutes() {\n        webTestClient.get()\n            .uri(\"/api/fn/products\")\n            .exchange()\n            .expectStatus().isOk()\n            .expectBodyList(Product.class);\n    }\n\n    @Test\n    void testBatchCreate() {\n        List<Product> products = List.of(\n            new Product(null, \"Batch 1\", \"A\", 10.0, 5, LocalDateTime.now()),\n            new Product(null, \"Batch 2\", \"B\", 20.0, 10, LocalDateTime.now()),\n            new Product(null, \"Batch 3\", \"C\", 30.0, 15, LocalDateTime.now())\n        );\n\n        webTestClient.post()\n            .uri(\"/api/products/batch\")\n            .contentType(MediaType.APPLICATION_JSON)\n            .body(Flux.fromIterable(products), Product.class)\n            .exchange()\n            .expectStatus().isOk()\n            .expectBodyList(Product.class)\n            .hasSize(3);\n    }\n\n    @Test\n    void testStatsEndpoint() {\n        webTestClient.get()\n            .uri(\"/api/stats/summary\")\n            .exchange()\n            .expectStatus().isOk()\n            .expectBody()\n            .jsonPath(\"$.totalProducts\").isNumber()\n            .jsonPath(\"$.averagePrice\").isNumber();\n    }\n\n    @Test\n    void test404OnEmptyDelete() {\n        webTestClient.delete()\n            .uri(\"/api/products/nonexistent\")\n            .exchange()\n            .expectStatus().isNotFound();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-webflux-performance-characteristics",
      children: "10. WebFlux Performance Characteristics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-threading-model-comparison",
      children: "10.1 Threading Model Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.performance;\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\nimport java.time.Instant;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\n@RestController\n@RequestMapping(\"/api/perf\")\npublic class PerformanceController {\n\n    @GetMapping(\"/mvc-simulation\")\n    public String simulateMvc() {\n        // Simulate blocking I/O → this would block a Tomcat thread\n        try { Thread.sleep(200); } catch (InterruptedException e) {}\n        return \"Done on \" + Thread.currentThread().getName();\n    }\n\n    @GetMapping(\"/webflux-nonblocking\")\n    public Mono<String> simulateWebFlux() {\n        return Mono.delay(Duration.ofMillis(200))\n            .map(i -> \"Done on \" + Thread.currentThread().getName());\n    }\n\n    @GetMapping(\"/webflux-blocking\")\n    public Mono<String> simulateBlockingInWebFlux() {\n        // Correct way to handle blocking operations in WebFlux\n        return Mono.fromCallable(() -> {\n                Thread.sleep(200);\n                return \"Done on \" + Thread.currentThread().getName();\n            })\n            .subscribeOn(Schedulers.boundedElastic());\n    }\n\n    @GetMapping(\"/concurrent-fetches\")\n    public Mono<String> concurrentDownstreamCalls() {\n        Instant start = Instant.now();\n\n        // Sequential: 3 calls × 200ms = 600ms\n        Mono<String> seq = Mono.fromCallable(() -> {\n            Thread.sleep(200);\n            return \"A\";\n        }).subscribeOn(Schedulers.boundedElastic())\n        .flatMap(a -> Mono.fromCallable(() -> {\n            Thread.sleep(200);\n            return a + \"B\";\n        }).subscribeOn(Schedulers.boundedElastic()))\n        .flatMap(ab -> Mono.fromCallable(() -> {\n            Thread.sleep(200);\n            return ab + \"C\";\n        }).subscribeOn(Schedulers.boundedElastic()))\n        .map(result -> \"Sequential: \" + result + \" in \" +\n            Duration.between(start, Instant.now()).toMillis() + \"ms\");\n\n        // Parallel: 3 calls × 200ms = ~200ms\n        Mono<String> par = Mono.zip(\n            Mono.fromCallable(() -> {\n                Thread.sleep(200);\n                return \"A\";\n            }).subscribeOn(Schedulers.boundedElastic()),\n            Mono.fromCallable(() -> {\n                Thread.sleep(200);\n                return \"B\";\n            }).subscribeOn(Schedulers.boundedElastic()),\n            Mono.fromCallable(() -> {\n                Thread.sleep(200);\n                return \"C\";\n            }).subscribeOn(Schedulers.boundedElastic())\n        ).map(tuple -> \"Parallel: \" + tuple.getT1() + tuple.getT2() + tuple.getT3() + \" in \" +\n            Duration.between(start, Instant.now()).toMillis() + \"ms\");\n\n        // Return parallel result\n        return par;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-webflux-best-practices",
      children: "10.2 WebFlux Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.config;\n\nimport org.springframework.boot.autoconfigure.web.WebProperties;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport reactor.core.publisher.Hooks;\nimport reactor.core.scheduler.Schedulers;\nimport reactor.tools.agent.ReactorDebugAgent;\nimport jakarta.annotation.PostConstruct;\n\n@Configuration\npublic class WebFluxOptimizationConfig {\n\n    @PostConstruct\n    public void init() {\n        // Enable Reactor debug agent in development\n        ReactorDebugAgent.init();\n\n        // Set a global error consumer for unhandled operator errors\n        Hooks.onErrorDropped(e ->\n            System.err.println(\"Dropped error: \" + e.getMessage())\n        );\n\n        // Set a global hook for dropped items\n        Hooks.onNextDropped(item ->\n            System.err.println(\"Dropped item: \" + item)\n        );\n    }\n\n    @Bean\n    public WebProperties.Resources resources() {\n        return new WebProperties.Resources();\n    }\n\n    // Best practices summary:\n    //\n    // 1. NEVER block event-loop threads\n    //    - Wrong: Thread.sleep() in a controller\n    //    - Correct: Mono.fromCallable(() -> blockingOp()).subscribeOn(boundedElastic())\n    //\n    // 2. Use boundedElastic for blocking operations\n    //    - Thread pool is bounded to prevent thread starvation\n    //\n    // 3. Use parallel() for CPU-bound operations\n    //    - Flux.range(1, N).parallel(cores).runOn(Schedulers.parallel())\n    //\n    // 4. Prefer flatMap with concurrency limit\n    //    - flatMap(fn, maxConcurrency) prevents overwhelming downstream\n    //\n    // 5. Set timeouts on all external calls\n    //    - .timeout(Duration.ofSeconds(5))\n    //\n    // 6. Configure connection pooling for WebClient\n    //    - Set max connections, idle time, and acquire timeout\n    //\n    // 7. Use onErrorContinue sparingly\n    //    - It swallows errors which may hide bugs\n    //\n    // 8. Avoid shared mutable state\n    //    - Use atomic classes or Context for state\n    //\n    // 9. Log at operator boundaries, not inside operators\n    //    - Use log() for debugging, doOnNext for side effects\n    //\n    // 10. Test with StepVerifier + VirtualTimeScheduler\n    //     - Avoid real delays in tests\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-functional-endpoints-vs-annotated-controllers",
      children: "11. Functional Endpoints vs Annotated Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section compares the two WebFlux programming models with side-by-side examples:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.webflux.demo.comparison;\n\nimport com.webflux.demo.model.Product;\nimport com.webflux.demo.repository.ProductRepository;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.bind.annotation.*;\nimport org.springframework.web.reactive.function.server.*;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.net.URI;\n\n// ---- ANNOTATED CONTROLLER STYLE ----\n\n@RestController\n@RequestMapping(\"/api/v1/products\")\nclass AnnotatedProductController {\n\n    private final ProductRepository repository;\n\n    AnnotatedProductController(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    @GetMapping\n    public Flux<Product> getAll() {\n        return repository.findAll();\n    }\n\n    @GetMapping(\"/{id}\")\n    public Mono<ServerResponse> getById(@PathVariable String id) {\n        return repository.findById(id)\n            .flatMap(p -> ServerResponse.ok()\n                .bodyValue(p))\n            .switchIfEmpty(ServerResponse.notFound().build());\n    }\n\n    @PostMapping\n    public Mono<ServerResponse> create(@RequestBody Mono<Product> product) {\n        return product\n            .flatMap(repository::save)\n            .flatMap(saved -> ServerResponse\n                .created(URI.create(\"/api/v1/products/\" + saved.id()))\n                .bodyValue(saved));\n    }\n}\n\n// ---- FUNCTIONAL STYLE ----\n\nrecord ProductHandler(ProductRepository repository) {\n    Mono<ServerResponse> getAll(ServerRequest req) {\n        return ServerResponse.ok()\n            .body(repository.findAll(), Product.class);\n    }\n\n    Mono<ServerResponse> getById(ServerRequest req) {\n        String id = req.pathVariable(\"id\");\n        return repository.findById(id)\n            .flatMap(p -> ServerResponse.ok().bodyValue(p))\n            .switchIfEmpty(ServerResponse.notFound().build());\n    }\n\n    Mono<ServerResponse> create(ServerRequest req) {\n        return req.bodyToMono(Product.class)\n            .flatMap(repository::save)\n            .flatMap(saved -> ServerResponse\n                .created(URI.create(\"/api/v2/products/\" + saved.id()))\n                .bodyValue(saved));\n    }\n}\n\nrecord ProductRouter(ProductRepository repository) {\n    RouterFunction<ServerResponse> routes() {\n        var handler = new ProductHandler(repository);\n        return RouterFunctions.route()\n            .GET(\"/api/v2/products\", handler::getAll)\n            .GET(\"/api/v2/products/{id}\", handler::getById)\n            .POST(\"/api/v2/products\", handler::create)\n            .build();\n    }\n}\n"
      })
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
            children: "Approach A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Commands/APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required dependencies and configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify versions match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core code patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cover success and failure paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern C"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of this chapter's main topic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enhanced reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Enhanced reliability.** While all are benefits, the core value proposition is reliability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which approach is recommended for production deployments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The simplest solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The most feature-rich option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The one with best operational characteristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Whatever the team knows best"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) The one with best operational characteristics.** Production choices should prioritize observability, maintainability, and operability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you consider this pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) For every project regardless of size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When complexity justifies the overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only in legacy systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Never → it is outdated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When complexity justifies the overhead.** Apply patterns when the problem complexity warrants the additional abstraction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered Spring WebFlux from architecture through production deployment:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "WebFlux architecture"
          }), " uses an event-loop threading model (Netty default) with non-blocking I/O and supports both annotated controllers and functional endpoints."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Annotated controllers"
          }), " feel like Spring MVC but return ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Mono<T>"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Flux<T>"
          }), ", support ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ControllerAdvice"
          }), " for error handling, and work with reactive repositories."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Functional routing"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RouterFunction"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HandlerFunction"
          }), " provides a code-first alternative with composable route definitions, request predicates, and fine-grained content negotiation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "WebClient"
          }), " is the reactive HTTP client supporting request/response, streaming, server-sent events, exchange filters, error handling, and connection pooling with Netty."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSE"
          }), " (Server-Sent Events) enables real-time push of data streams with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MediaType.TEXT_EVENT_STREAM_VALUE"
          }), " and custom event builders."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@EnableWebFluxSecurity"
          }), " provides reactive authentication, authorization, OAuth2 resource server support, CORS, CSRF, and method-level security."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File upload/download"
          }), " uses reactive multipart handling with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FilePart"
          }), ", streaming with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataBuffer"
          }), ", and range request support."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSocket"
          }), " provides a reactive socket protocol with fire-and-forget, request-response, request-stream, and channel interaction models."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Testing"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WebTestClient"
          }), " provides fluent assertions for status, headers, JSON paths, body content, and streaming endpoints without an embedded server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Best practices"
          }), " include never blocking event-loop threads, using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "boundedElastic"
          }), " for blocking operations, setting timeouts, configuring connection pooling, and using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StepVerifier"
          }), " with virtual time for tests."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the key architectural difference between Spring MVC and Spring WebFlux?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose WebFlux over Spring MVC for a new project?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publishOn"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subscribeOn"
        }), " in a WebFlux application."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the four RSocket interaction models and when would you use each?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebTestClient"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockMvc"
        }), " in testing approach?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Order API"
          }), ": Build a complete reactive REST API for orders with annotated controllers. Include endpoints for CRUD, status-based filtering, and a streaming endpoint that emits new orders in real-time. Use in-memory reactive storage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "WebClient Aggregation Service"
          }), ": Create a service using WebClient that aggregates data from three downstream APIs concurrently (inventory, pricing, shipping) and returns a combined order summary. Implement circuit-breaking with timeout and fallback."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Functional File Server"
          }), ": Implement a file server using functional routing with RouterFunction that supports upload, download with range support, listing, and deletion. Use query parameters and headers for additional control."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSE Dashboard"
          }), ": Build a real-time dashboard endpoint that emits stock summary events every 2 seconds. Include total products, total inventory value, low-stock alerts, and recent orders. Test with WebTestClient."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Auth Gateway"
          }), ": Implement a WebFlux security configuration that combines form login for internal routes, OAuth2 resource server for APIs, and role-based access (@PreAuthorize) for admin operations."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Microservices Gateway"
          }), ": Build a lightweight API gateway using WebFlux functional routing that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Routes requests to downstream services based on path prefix"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Aggregates responses from multiple services"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements request rate limiting per client"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adds correlation IDs to all requests and responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Transforms response payloads to a unified format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles timeouts and partial failures gracefully"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-Time Collaboration Service"
          }), ": Implement a WebFlux + RSocket service that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports multiple document rooms (channels)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Streams editing events to all connected clients in a room"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Persists events to a reactive MongoDB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports reconnection with event replay from last seen offset"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles backpressure from slow consumers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive File Processing Pipeline"
          }), ": Build a WebFlux application that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Accepts large file uploads via multipart streaming"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Processes each file through a pipeline (validate → transform → enrich)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Emits SSE progress events for each processing stage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports concurrent processing with configurable parallelism"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Returns a downloadable report with processing results"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive BFF (Backend for Frontend)"
          }), ": Implement a BFF pattern with WebFlux that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Aggregates data from 5+ microservices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Transforms responses to match frontend needs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements caching with reactive Redis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles partial failures with graceful degradation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses WebSocket to push real-time updates to the frontend"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Secures endpoints with OAuth2 token relay"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "End-to-End Reactive E-Commerce API"
          }), ": Build a complete e-commerce backend using WebFlux that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Product catalog with reactive search and filtering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shopping cart with optimistic locking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Order processing with Saga pattern (choreography)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Real-time inventory updates via SSE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Payment processing with WebClient + retry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Admin dashboard with reactive metrics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All secured with role-based access control"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Full test coverage with WebTestClient"
          }), "\n"]
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