"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82412],{

/***/ 95758
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_32_testcontainers_md_e10_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-32-testcontainers-md-e10.json
const site_docs_courses_java_32_testcontainers_md_e10_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/32-testcontainers","title":"Testcontainers & Integration Testing","description":"Previous Security & Performance Testing","source":"@site/docs/courses/java/32-testcontainers.md","sourceDirName":"courses/java","slug":"/java/32-testcontainers","permalink":"/ai-engineering-journey/java/32-testcontainers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"id":"32-testcontainers","slug":"/java/32-testcontainers","title":"Testcontainers & Integration Testing","sidebar_label":"Testcontainers & Integration Testing","sidebar_position":32},"sidebar":"coursesSidebar","previous":{"title":"Spring Boot Testing","permalink":"/ai-engineering-journey/java/31-spring-boot-test"},"next":{"title":"Security Testing & Performance Testing","permalink":"/ai-engineering-journey/java/33-security-perf-test"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/32-testcontainers.md


const frontMatter = {
	id: '32-testcontainers',
	slug: '/java/32-testcontainers',
	title: 'Testcontainers & Integration Testing',
	sidebar_label: 'Testcontainers & Integration Testing',
	sidebar_position: 32
};
const contentTitle = 'Testcontainers & Integration Testing';

const assets = {

};

/*End Image Gallery*/


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
  "value": "1. Testcontainers Architecture",
  "id": "1-testcontainers-architecture",
  "level": 2
}, {
  "value": "1.1 How It Works",
  "id": "11-how-it-works",
  "level": 3
}, {
  "value": "1.2 Core Abstractions",
  "id": "12-core-abstractions",
  "level": 3
}, {
  "value": "2. GenericContainer — The Universal Container",
  "id": "2-genericcontainer--the-universal-container",
  "level": 2
}, {
  "value": "2.1 Basic Usage",
  "id": "21-basic-usage",
  "level": 3
}, {
  "value": "2.2 Container Lifecycle",
  "id": "22-container-lifecycle",
  "level": 3
}, {
  "value": "2.3 Manual Start/Stop Without @Testcontainers",
  "id": "23-manual-startstop-without-testcontainers",
  "level": 3
}, {
  "value": "3. Database Containers",
  "id": "3-database-containers",
  "level": 2
}, {
  "value": "3.1 PostgreSQLContainer",
  "id": "31-postgresqlcontainer",
  "level": 3
}, {
  "value": "3.2 MySQLContainer",
  "id": "32-mysqlcontainer",
  "level": 3
}, {
  "value": "3.3 MSSQLServerContainer",
  "id": "33-mssqlservercontainer",
  "level": 3
}, {
  "value": "3.4 OracleContainer",
  "id": "34-oraclecontainer",
  "level": 3
}, {
  "value": "3.5 Init Scripts",
  "id": "35-init-scripts",
  "level": 3
}, {
  "value": "3.6 JDBC URL with the tc Driver",
  "id": "36-jdbc-url-with-the-tc-driver",
  "level": 3
}, {
  "value": "3.7 @DynamicPropertySource",
  "id": "37-dynamicpropertysource",
  "level": 3
}, {
  "value": "4. Wait Strategies",
  "id": "4-wait-strategies",
  "level": 2
}, {
  "value": "4.1 Wait.forListeningPort",
  "id": "41-waitforlisteningport",
  "level": 3
}, {
  "value": "4.2 Wait.forLogMessage",
  "id": "42-waitforlogmessage",
  "level": 3
}, {
  "value": "4.3 Wait.forHttp",
  "id": "43-waitforhttp",
  "level": 3
}, {
  "value": "4.4 Custom Wait Strategies",
  "id": "44-custom-wait-strategies",
  "level": 3
}, {
  "value": "4.5 Startup Timeout",
  "id": "45-startup-timeout",
  "level": 3
}, {
  "value": "5. Middleware Containers",
  "id": "5-middleware-containers",
  "level": 2
}, {
  "value": "5.1 KafkaContainer",
  "id": "51-kafkacontainer",
  "level": 3
}, {
  "value": "5.2 RedpandaContainer",
  "id": "52-redpandacontainer",
  "level": 3
}, {
  "value": "5.3 RabbitMQContainer",
  "id": "53-rabbitmqcontainer",
  "level": 3
}, {
  "value": "5.4 RedisContainer",
  "id": "54-rediscontainer",
  "level": 3
}, {
  "value": "5.5 ElasticsearchContainer",
  "id": "55-elasticsearchcontainer",
  "level": 3
}, {
  "value": "5.6 LocalStackContainer (AWS)",
  "id": "56-localstackcontainer-aws",
  "level": 3
}, {
  "value": "6. Container Customization",
  "id": "6-container-customization",
  "level": 2
}, {
  "value": "6.1 Environment Variables",
  "id": "61-environment-variables",
  "level": 3
}, {
  "value": "6.2 Exposed Ports",
  "id": "62-exposed-ports",
  "level": 3
}, {
  "value": "6.3 Command Override",
  "id": "63-command-override",
  "level": 3
}, {
  "value": "6.4 Network Configuration",
  "id": "64-network-configuration",
  "level": 3
}, {
  "value": "6.5 Copy Files Into Container",
  "id": "65-copy-files-into-container",
  "level": 3
}, {
  "value": "6.6 Working Directory and User",
  "id": "66-working-directory-and-user",
  "level": 3
}, {
  "value": "7. Network Isolation",
  "id": "7-network-isolation",
  "level": 2
}, {
  "value": "7.1 Creating a Network",
  "id": "71-creating-a-network",
  "level": 3
}, {
  "value": "7.2 Container Aliases",
  "id": "72-container-aliases",
  "level": 3
}, {
  "value": "7.3 Composing Containers Together",
  "id": "73-composing-containers-together",
  "level": 3
}, {
  "value": "8. Docker-Compose Integration",
  "id": "8-docker-compose-integration",
  "level": 2
}, {
  "value": "8.1 Basic Compose Container",
  "id": "81-basic-compose-container",
  "level": 3
}, {
  "value": "8.2 Service Instances",
  "id": "82-service-instances",
  "level": 3
}, {
  "value": "8.3 Custom Docker Compose File Names",
  "id": "83-custom-docker-compose-file-names",
  "level": 3
}, {
  "value": "8.4 Scaling Services",
  "id": "84-scaling-services",
  "level": 3
}, {
  "value": "9. Testcontainers for Spring Boot",
  "id": "9-testcontainers-for-spring-boot",
  "level": 2
}, {
  "value": "9.1 @ServiceConnection (Spring Boot 3.1+)",
  "id": "91-serviceconnection-spring-boot-31",
  "level": 3
}, {
  "value": "9.2 @ServiceConnection with Connection Factories",
  "id": "92-serviceconnection-with-connection-factories",
  "level": 3
}, {
  "value": "9.3 JDBC with tc Driver (Revisited for Spring Boot)",
  "id": "93-jdbc-with-tc-driver-revisited-for-spring-boot",
  "level": 3
}, {
  "value": "10. Reusable Containers",
  "id": "10-reusable-containers",
  "level": 2
}, {
  "value": "10.1 withReuse",
  "id": "101-withreuse",
  "level": 3
}, {
  "value": "10.2 .testcontainers.properties",
  "id": "102-testcontainersproperties",
  "level": 3
}, {
  "value": "10.3 Reusable Containers in CI (Ryuk)",
  "id": "103-reusable-containers-in-ci-ryuk",
  "level": 3
}, {
  "value": "10.4 Singleton Container Pattern",
  "id": "104-singleton-container-pattern",
  "level": 3
}, {
  "value": "10.5 Hybrid Mode: Reuse Locally, Fresh in CI",
  "id": "105-hybrid-mode-reuse-locally-fresh-in-ci",
  "level": 3
}, {
  "value": "11. Complete Example — Full Spring Boot Integration Test",
  "id": "11-complete-example--full-spring-boot-integration-test",
  "level": 2
}, {
  "value": "11.1 Application Code",
  "id": "111-application-code",
  "level": 3
}, {
  "value": "11.2 Integration Test",
  "id": "112-integration-test",
  "level": 3
}, {
  "value": "11.3 Kafka + Database Combined Test",
  "id": "113-kafka--database-combined-test",
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
    section: "section",
    span: "span",
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
        id: "testcontainers--integration-testing",
        children: "Testcontainers & Integration Testing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/31-spring-boot-test",
          children: "Spring Boot Testing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/33-security-perf-test",
          children: "Security & Performance Testing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/java/32-testcontainers/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/32-testcontainers/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/32-testcontainers/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/32-testcontainers/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/32-testcontainers/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/32-testcontainers/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Testcontainers architecture and how it manages container lifecycles"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GenericContainer"
        }), " with the JUnit 5 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Testcontainers"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Container"
        }), " extension"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage container lifecycles: start/stop, reusable containers, singleton patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure database containers (PostgreSQL, MySQL, MSSQL, Oracle) with init scripts"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the JDBC tc driver (", (0,jsx_runtime.jsx)(_components.code, {
          children: "jdbc:tc:postgresql://"
        }), ") for zero-config database testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DynamicPropertySource"
        }), " to inject dynamic container connection details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement wait strategies (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wait.forLogMessage"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wait.forHttp"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wait.forListeningPort"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate middleware containers: Kafka, Redpanda, RabbitMQ, Redis, Elasticsearch, LocalStack"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Customize containers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withEnv"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withExposedPorts"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withCommand"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withNetwork"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withStartupTimeout"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withCopyFileToContainer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Isolate containers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Network.newNetwork"
        }), " and container aliases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compose multi-container topologies with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DockerComposeContainer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Auto-configure connection details with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ServiceConnection"
        }), " (Spring Boot 3.1+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable reusable containers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withReuse"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".testcontainers.properties"
        })]
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
            children: "Testcontainers → disposable containers for integration tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, Redis, Kafka, and more as throwaway containers"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Lifecycle → automatic start/stop with JUnit 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Container"
            }), " annotation manages container lifecycle"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Properties → inject container connection details"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DynamicPropertySource"
            }), " to override ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application.properties"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Testcontainers] --> B[Setup]\n    A --> C[Containers]\n    A --> D[Integration]\n    B --> B1[Testcontainers dependency]\n    B --> B2[@Testcontainers annotation]\n    C --> C1[PostgreSQL / MySQL]\n    C --> C2[Redis / Kafka]\n    D --> D1[DynamicPropertySource]\n    D --> D2[Reuse containers]\n"
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
            children: "H2 Embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory DB for test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast but not production-like SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real PostgreSQL container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production parity, slower startup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis (embedded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight in-memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for Redis module testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real Redis container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full Redis features including modules"
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
              children: "@Container"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit Jupiter extension for container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Container PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Testcontainers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables container lifecycle management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class-level annotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DynamicPropertySource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injects container properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DynamicPropertySource static void props(...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "withReuse(true)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuses containers across test runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speeds up local development"
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
            children: "Database Migration Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers + Flyway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate SQL migrations against real DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers + Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test event-driven flows with real message broker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers + Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify cache eviction and TTL behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What annotation marks a container field to be managed by Testcontainers? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Container"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you pass container connection details to the Spring context? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DynamicPropertySource"
        }), " method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which method enables container reuse between test runs? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container.withReuse(true)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-testcontainers-architecture",
      children: "1. Testcontainers Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/32-testcontainers.png",
        alt: "Testcontainers Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcontainers is a Java library that wraps Docker containers inside your test lifecycle. Instead of mocking a database or running a heavy local install, you spin up a disposable container per test suite — identical to production, every time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-how-it-works",
      children: "1.1 How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────┐\n│               Test Suite                      │\n│  ┌──────────────────────────────────────┐    │\n│  │  @Testcontainers  (JUnit 5 Extension) │    │\n│  │  @Container                           │    │\n│  │  PostgreSQLContainer postgres = ...    │    │\n│  └──────────┬───────────────────────────┘    │\n│             │ start()                         │\n│             ▼                                 │\n│  ┌──────────────────────────────────────┐    │\n│  │       Docker Daemon (local/remote)    │    │\n│  │  Pulls image → Creates container     │    │\n│  │  Exposes port → Waits for readiness  │    │\n│  └──────────────────────────────────────┘    │\n│             │                                 │\n│             │ jdbc:postgresql://localhost:54321│\n│             ▼                                 │\n│  ┌──────────────────────────────────────┐    │\n│  │      Spring Boot ApplicationContext    │    │\n│  │  DataSource → HikariCP → JPA/Hibernate│    │\n│  │  Queries hit the real PostgreSQL      │    │\n│  └──────────────────────────────────────┘    │\n└──────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Minimal Testcontainers dependency (Maven)\n// pom.xml\n/*\n<dependency>\n    <groupId>org.testcontainers</groupId>\n    <artifactId>testcontainers</artifactId>\n    <version>1.20.4</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.testcontainers</groupId>\n    <artifactId>postgresql</artifactId>\n    <version>1.20.4</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.testcontainers</groupId>\n    <artifactId>junit-jupiter</artifactId>\n    <version>1.20.4</version>\n    <scope>test</scope>\n</dependency>\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-core-abstractions",
      children: "1.2 Core Abstractions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcontainers has a layered architecture:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DockerClientFactory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates Docker Java client, checks Docker availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GenericContainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Docker image, manual configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PostgreSQLContainer"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KafkaContainer"
            }), ", etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-configured with sensible defaults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DockerComposeContainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages docker-compose.yml in tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Testcontainers"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Container"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit 5 extension hooks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Every Testcontainers test starts by checking Docker availability\n// This happens once per JVM, cached in DockerClientFactory\nboolean dockerAvailable = DockerClientFactory.instance().isDockerAvailable();\nSystem.out.println(\"Docker available: \" + dockerAvailable);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nContainer reuse (", (0,jsx_runtime.jsx)(_components.code, {
          children: "withReuse(true)"
        }), ") dramatically speeds up local development → containers stay running between test runs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nTestcontainers requires a Docker runtime. CI environments must have Docker installed and configured."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-genericcontainer--the-universal-container",
      children: "2. GenericContainer — The Universal Container"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "GenericContainer"
      }), " is the most flexible container type. Use it when there is no specialized container for your image."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-basic-usage",
      children: "2.1 Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.GenericContainer;\nimport org.testcontainers.containers.wait.strategy.Wait;\nimport org.testcontainers.junit.jupiter.Container;\nimport org.testcontainers.junit.jupiter.Testcontainers;\nimport org.junit.jupiter.api.Test;\n\n@Testcontainers\nclass GenericContainerExampleTest {\n\n    @Container\n    GenericContainer<?> redis = new GenericContainer<>(\"redis:7-alpine\")\n        .withExposedPorts(6379);\n\n    @Test\n    void testRedisConnection() {\n        String host = redis.getHost();\n        Integer port = redis.getMappedPort(6379);\n        System.out.println(\"Redis running at: \" + host + \":\" + port);\n\n        // Use Jedis or Lettuce to connect\n        // Jedis jedis = new Jedis(host, port);\n        // jedis.set(\"key\", \"value\");\n        // assertEquals(\"value\", jedis.get(\"key\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-container-lifecycle",
      children: "2.2 Container Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Testcontainers"
      }), " is active, the extension manages start/stop:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Container"
        }), " static fields → container starts once for the entire test class (shared)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Container"
        }), " instance fields → container starts before each test (isolated)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Testcontainers\nclass LifecycleTest {\n\n    // STATIC — shared across all tests in the class\n    @Container\n    static GenericContainer<?> shared = new GenericContainer<>(\"nginx:alpine\")\n        .withExposedPorts(80);\n\n    // INSTANCE — created fresh for each test method\n    @Container\n    GenericContainer<?> isolated = new GenericContainer<>(\"nginx:alpine\")\n        .withExposedPorts(80);\n\n    @Test\n    void testOne() {\n        System.out.println(shared.getMappedPort(80));  // Same port every test\n        System.out.println(isolated.getMappedPort(80)); // Different port each test\n    }\n\n    @Test\n    void testTwo() {\n        System.out.println(shared.getMappedPort(80));  // Same as testOne\n        System.out.println(isolated.getMappedPort(80)); // Different from testOne\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-manual-startstop-without-testcontainers",
      children: "2.3 Manual Start/Stop Without @Testcontainers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can control the lifecycle manually — useful when containers must start before the Spring context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.GenericContainer;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.Test;\n\nclass ManualLifecycleTest {\n\n    static GenericContainer<?> nginx = new GenericContainer<>(\"nginx:alpine\")\n        .withExposedPorts(80);\n\n    @BeforeAll\n    static void startContainer() {\n        nginx.start();\n    }\n\n    @AfterAll\n    static void stopContainer() {\n        nginx.stop();\n    }\n\n    @Test\n    void test() {\n        System.out.println(\"Nginx running on port: \" + nginx.getMappedPort(80));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-database-containers",
      children: "3. Database Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcontainers provides specialized subclasses for every major database. They pre-configure the driver class, default credentials, and the JDBC URL pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-postgresqlcontainer",
      children: "3.1 PostgreSQLContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.PostgreSQLContainer;\nimport org.testcontainers.junit.jupiter.Container;\nimport org.testcontainers.junit.jupiter.Testcontainers;\n\n@Testcontainers\nclass PostgreSQLTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @Test\n    void testConnection() {\n        String jdbcUrl = postgres.getJdbcUrl();\n        String username = postgres.getUsername();\n        String password = postgres.getPassword();\n\n        System.out.println(\"JDBC: \" + jdbcUrl);\n        // jdbc:postgresql://localhost:54321/testdb\n\n        try (var conn = java.sql.DriverManager.getConnection(jdbcUrl, username, password);\n             var stmt = conn.createStatement();\n             var rs = stmt.executeQuery(\"SELECT version()\")) {\n\n            rs.next();\n            System.out.println(\"PostgreSQL version: \" + rs.getString(1));\n        } catch (Exception e) {\n            throw new RuntimeException(e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-mysqlcontainer",
      children: "3.2 MySQLContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.MySQLContainer;\nimport org.testcontainers.utility.DockerImageName;\n\n@Testcontainers\nclass MySQLTest {\n\n    @Container\n    static MySQLContainer<?> mysql = new MySQLContainer<>(\"mysql:8.4\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @Test\n    void testMySQL() {\n        System.out.println(\"MySQL JDBC: \" + mysql.getJdbcUrl());\n        // jdbc:mysql://localhost:54410/testdb\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL notes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MySQL 8+ requires explicit image name tag — do not use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mysql:latest"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withCommand(\"--default-authentication-plugin=mysql_native_password\")"
        }), " for legacy auth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On Apple Silicon, add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?permuteDNS=false"
        }), " to the JDBC URL"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-mssqlservercontainer",
      children: "3.3 MSSQLServerContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.MSSQLServerContainer;\n\n@Testcontainers\nclass MSSQLTest {\n\n    @Container\n    static MSSQLServerContainer<?> mssql = new MSSQLServerContainer<>(\"mcr.microsoft.com/mssql/server:2022-latest\")\n        .acceptLicense();\n\n    @Test\n    void testMSSQL() {\n        System.out.println(\"MSSQL JDBC: \" + mssql.getJdbcUrl());\n        System.out.println(\"Password: \" + mssql.getPassword()); // Auto-generated SA password\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MSSQL notes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "acceptLicense()"
        }), " to agree to the EULA"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image is ~1.5GB — pull once, cache forever"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getPassword()"
        }), " returns the auto-generated SA password (32 chars)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-oraclecontainer",
      children: "3.4 OracleContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oracle's image is not publicly available on Docker Hub. You must build it from Oracle's GitHub repository."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.OracleContainer;\nimport org.testcontainers.utility.DockerImageName;\n\n@Testcontainers\nclass OracleTest {\n\n    // Requires: docker pull gvenzl/oracle-free:23-slim-faststart\n    @Container\n    static OracleContainer oracle = new OracleContainer(\n        DockerImageName.parse(\"gvenzl/oracle-free:23-slim-faststart\")\n    );\n\n    @Test\n    void testOracle() {\n        System.out.println(\"Oracle JDBC: \" + oracle.getJdbcUrl());\n        // jdbc:oracle:thin:@localhost:49161:XE\n        System.out.println(\"Username: \" + oracle.getUsername());   // system\n        System.out.println(\"Password: \" + oracle.getPassword());   // oracle\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-init-scripts",
      children: "3.5 Init Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can execute SQL scripts automatically when the container starts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Testcontainers\nclass InitScriptTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\")\n        .withInitScript(\"init-test-data.sql\");\n}\n\n// src/test/resources/init-test-data.sql\n/*\nCREATE TABLE items (\n    id BIGSERIAL PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    price DECIMAL(10,2) NOT NULL\n);\n\nINSERT INTO items (name, price) VALUES ('Widget', 9.99);\nINSERT INTO items (name, price) VALUES ('Gadget', 24.99);\nINSERT INTO items (name, price) VALUES ('Doohickey', 4.99);\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple scripts:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withCopyFileToContainer"
      }), " for complex setups:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n    .withCopyFileToContainer(\n        MountableFile.forClasspathResource(\"schema.sql\"),\n        \"/docker-entrypoint-initdb.d/01-schema.sql\"\n    )\n    .withCopyFileToContainer(\n        MountableFile.forClasspathResource(\"seed.sql\"),\n        \"/docker-entrypoint-initdb.d/02-seed.sql\"\n    );\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-jdbc-url-with-the-tc-driver",
      children: "3.6 JDBC URL with the tc Driver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Testcontainers provides a JDBC URL scheme that automatically starts a container when the DataSource connects. No ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Container"
      }), " annotation needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application-test.properties\n# The \"tc:\" prefix tells Testcontainers to auto-start a container\nspring.datasource.url=jdbc:tc:postgresql:16-alpine:///testdb\nspring.datasource.driver-class-name=org.testcontainers.jdbc.ContainerDatabaseDriver\nspring.datasource.username=test\nspring.datasource.password=test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// With tc driver, no container declaration needed in test\n@SpringBootTest\n@ActiveProfiles(\"test\")\nclass TcDriverTest {\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Test\n    void testTcDriver() throws Exception {\n        try (var conn = dataSource.getConnection()) {\n            var meta = conn.getMetaData();\n            System.out.println(\"Connected to: \" + meta.getDatabaseProductName());\n            // Connected to: PostgreSQL\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TC URL format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "jdbc:tc:{image}:{tag}://{host}/{database}?{params}\njdbc:tc:postgresql:16-alpine:///testdb\njdbc:tc:mysql:8.4:///testdb?TC_REUSABLE=true\njdbc:tc:mssql-server:2022-latest:///testdb\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-dynamicpropertysource",
      children: "3.7 @DynamicPropertySource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The preferred pattern for Spring Boot integration: inject container connection details into the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Environment"
      }), " before the context loads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.test.context.DynamicPropertyRegistry;\nimport org.springframework.test.context.DynamicPropertySource;\n\n@SpringBootTest\n@Testcontainers\nclass DynamicPropertySourceTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.flyway.enabled\", () -> \"true\");\n    }\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Test\n    void testDataSource() throws Exception {\n        try (var conn = dataSource.getConnection()) {\n            assertFalse(conn.isClosed());\n            assertTrue(conn.isValid(5));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " The method must be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), " and accept a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DynamicPropertyRegistry"
      }), ". It runs before the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), " is created."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-wait-strategies",
      children: "4. Wait Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers take time to start. Wait strategies define when a container is \"ready.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-waitforlisteningport",
      children: "4.1 Wait.forListeningPort"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest strategy — waits for the container to open a TCP port."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> nginx = new GenericContainer<>(\"nginx:alpine\")\n    .withExposedPorts(80)\n    .waitingFor(Wait.forListeningPort());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-waitforlogmessage",
      children: "4.2 Wait.forLogMessage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Waits for a specific log message. This is the most reliable strategy for databases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n    .waitingFor(Wait.forLogMessage(\".*database system is ready to accept connections.*\\\\n\", 2));\n\n@Container\nstatic GenericContainer<?> kafka = new GenericContainer<>(\"confluentinc/cp-kafka:7.6.0\")\n    .withExposedPorts(9092)\n    .waitingFor(Wait.forLogMessage(\".*started \\\\(kafka.server.KafkaServer\\\\).*\\\\n\", 1));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-waitforhttp",
      children: "4.3 Wait.forHttp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Waits for an HTTP endpoint to return a successful status code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n    .withExposedPorts(8080)\n    .waitingFor(Wait.forHttp(\"/actuator/health\")\n        .forStatusCode(200)\n        .forStatusCodePredicate(code -> code >= 200 && code < 400));\n\n@Container\nstatic GenericContainer<?> elasticsearch = new GenericContainer<>(\"elasticsearch:8.14.0\")\n    .withExposedPorts(9200)\n    .waitingFor(Wait.forHttp(\"/_cluster/health\")\n        .forStatusCode(200));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-custom-wait-strategies",
      children: "4.4 Custom Wait Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.wait.strategy.AbstractWaitStrategy;\nimport java.time.Duration;\n\n@Container\nstatic GenericContainer<?> custom = new GenericContainer<>(\"my-service:1.0\")\n    .withExposedPorts(8080)\n    .waitingFor(new AbstractWaitStrategy() {\n        @Override\n        protected void waitUntilReady() {\n            // Custom logic: poll a file, check a process, etc.\n            var executor = container.getDockerClient()\n                .execCreateCmd(container.getContainerId())\n                .withCmd(\"test\", \"-f\", \"/tmp/ready\");\n            // ...\n        }\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-startup-timeout",
      children: "4.5 Startup Timeout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> slow = new GenericContainer<>(\"slow-image:latest\")\n    .withExposedPorts(8080)\n    .waitingFor(Wait.forLogMessage(\".*ready.*\\\\n\", 1))\n    .withStartupTimeout(Duration.ofMinutes(5));  // Default is 60 seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-middleware-containers",
      children: "5. Middleware Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcontainers provides specialized containers for common middleware services."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-kafkacontainer",
      children: "5.1 KafkaContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.KafkaContainer;\nimport org.testcontainers.utility.DockerImageName;\n\n@Testcontainers\nclass KafkaTest {\n\n    @Container\n    static KafkaContainer kafka = new KafkaContainer(\n        DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\")\n    );\n\n    @Test\n    void testKafkaProduceConsume() {\n        String bootstrapServers = kafka.getBootstrapServers();\n        System.out.println(\"Kafka bootstrap: \" + bootstrapServers);\n        // localhost:49011 (KafkaContainer exposes on port 9092 mapped to random)\n\n        // Use Spring Kafka or Kafka client to test\n        // Properties props = new Properties();\n        // props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);\n        // ...\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Kafka with KRaft (no Zookeeper)\n@Container\nstatic KafkaContainer kafka = new KafkaContainer(\n    DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\")\n)\n    .withEnv(\"KAFKA_NODE_ID\", \"1\")\n    .withEnv(\"KAFKA_PROCESS_ROLES\", \"broker,controller\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-redpandacontainer",
      children: "5.2 RedpandaContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Redpanda is Kafka-compatible without Zookeeper — lighter and faster."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.redpanda.RedpandaContainer;\n\n@Testcontainers\nclass RedpandaTest {\n\n    @Container\n    static RedpandaContainer redpanda = new RedpandaContainer(\n        \"docker.redpanda.com/redpandadata/redpanda:v24.1.1\"\n    );\n\n    @Test\n    void testRedpanda() {\n        String bootstrapServers = redpanda.getBootstrapServers();\n        System.out.println(\"Redpanda bootstrap: \" + bootstrapServers);\n\n        // Identical Kafka API — just swap the bootstrap URL\n    }\n}\n\n// Spring Boot Kafka test with Redpanda and @DynamicPropertySource\n@SpringBootTest\n@Testcontainers\nclass KafkaSpringTest {\n\n    @Container\n    static RedpandaContainer redpanda = new RedpandaContainer(\n        \"docker.redpanda.com/redpandadata/redpanda:v24.1.1\"\n    );\n\n    @DynamicPropertySource\n    static void kafkaProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.kafka.bootstrap-servers\", redpanda::getBootstrapServers);\n    }\n\n    @Autowired\n    private KafkaTemplate<String, String> kafkaTemplate;\n\n    @Test\n    void testSendAndReceive() throws Exception {\n        // Arrange\n        String topic = \"test-topic\";\n        String payload = \"hello-testcontainers\";\n\n        // Act\n        kafkaTemplate.send(topic, payload).get(5, TimeUnit.SECONDS);\n\n        // Assert — use a test consumer or EmbeddedKafkaBroker\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-rabbitmqcontainer",
      children: "5.3 RabbitMQContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.RabbitMQContainer;\n\n@Testcontainers\nclass RabbitMQTest {\n\n    @Container\n    static RabbitMQContainer rabbitmq = new RabbitMQContainer(\"rabbitmq:3.13-management\");\n\n    @Test\n    void testRabbitMQ() {\n        String amqpUrl = rabbitmq.getAmqpUrl();\n        String httpUrl = rabbitmq.getHttpUrl();\n        System.out.println(\"AMQP: \" + amqpUrl);\n        System.out.println(\"Management: \" + httpUrl);\n\n        // amqp://guest:guest@localhost:32789/\n        // http://guest:guest@localhost:32788/api/\n    }\n\n    @Test\n    void testWithQueueDeclare() throws Exception {\n        var factory = new com.rabbitmq.client.ConnectionFactory();\n        factory.setUri(rabbitmq.getAmqpUrl());\n\n        try (var connection = factory.newConnection();\n             var channel = connection.createChannel()) {\n\n            channel.queueDeclare(\"test-queue\", false, false, false, null);\n            channel.basicPublish(\"\", \"test-queue\", null, \"Hello\".getBytes());\n\n            var delivery = channel.basicGet(\"test-queue\", true);\n            assertNotNull(delivery);\n            assertEquals(\"Hello\", new String(delivery.getBody()));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-rediscontainer",
      children: "5.4 RedisContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.GenericContainer;\n\n@Testcontainers\nclass RedisTest {\n\n    @Container\n    static GenericContainer<?> redis = new GenericContainer<>(\"redis:7-alpine\")\n        .withExposedPorts(6379);\n\n    @Test\n    void testRedis() {\n        String host = redis.getHost();\n        Integer port = redis.getMappedPort(6379);\n\n        // Use Lettuce or Jedis\n        // RedisClient client = RedisClient.create(\"redis://\" + host + \":\" + port);\n        // StatefulRedisConnection<String, String> conn = client.connect();\n    }\n}\n\n// Spring Data Redis test\n@SpringBootTest\n@Testcontainers\nclass RedisSpringTest {\n\n    @Container\n    static GenericContainer<?> redis = new GenericContainer<>(\"redis:7-alpine\")\n        .withExposedPorts(6379);\n\n    @DynamicPropertySource\n    static void redisProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.data.redis.host\", redis::getHost);\n        registry.add(\"spring.data.redis.port\", () -> redis.getMappedPort(6379).toString());\n    }\n\n    @Autowired\n    private RedisTemplate<String, String> redisTemplate;\n\n    @Test\n    void testRedisOperations() {\n        redisTemplate.opsForValue().set(\"test:key\", \"testcontainers\");\n        assertEquals(\"testcontainers\", redisTemplate.opsForValue().get(\"test:key\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-elasticsearchcontainer",
      children: "5.5 ElasticsearchContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.wait.strategy.Wait;\nimport org.testcontainers.elasticsearch.ElasticsearchContainer;\n\n@Testcontainers\nclass ElasticsearchTest {\n\n    @Container\n    static ElasticsearchContainer elasticsearch = new ElasticsearchContainer(\n        \"docker.elastic.co/elasticsearch/elasticsearch:8.14.0\"\n    )\n        .withPassword(\"elastic\")\n        .withEnv(\"xpack.security.enabled\", \"false\")\n        .withEnv(\"discovery.type\", \"single-node\");\n\n    @Test\n    void testElasticsearch() {\n        String httpUrl = elasticsearch.getHttpHostAddress();\n        System.out.println(\"Elasticsearch: \" + httpUrl);\n        // localhost:49210\n\n        // Use Elasticsearch client\n        // var client = new RestClientBuilder(HttpHost.create(httpUrl)).build();\n    }\n}\n\n// Spring Data Elasticsearch\n@SpringBootTest\n@Testcontainers\nclass ElasticsearchSpringTest {\n\n    @Container\n    static ElasticsearchContainer elastic = new ElasticsearchContainer(\n        \"docker.elastic.co/elasticsearch/elasticsearch:8.14.0\"\n    )\n        .withEnv(\"xpack.security.enabled\", \"false\")\n        .withEnv(\"discovery.type\", \"single-node\");\n\n    @DynamicPropertySource\n    static void esProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.elasticsearch.uris\", () -> {\n            var host = elastic.getHttpHostAddress();\n            return \"http://\" + host;\n        });\n    }\n\n    @Autowired\n    private ElasticsearchOperations operations;\n\n    @Test\n    void testIndex() {\n        var doc = Map.of(\"title\", \"Testcontainers Guide\", \"content\", \"Integration testing with Docker\");\n        IndexQuery query = new IndexQueryBuilder()\n            .withId(\"1\")\n            .withObject(doc)\n            .build();\n        operations.index(query, IndexCoordinates.of(\"articles\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-localstackcontainer-aws",
      children: "5.6 LocalStackContainer (AWS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalStack emulates AWS services locally — S3, SQS, SNS, DynamoDB, and more."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.localstack.LocalStackContainer;\nimport org.testcontainers.utility.DockerImageName;\nimport software.amazon.awssdk.auth.credentials.AwsBasicCredentials;\nimport software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;\nimport software.amazon.awssdk.regions.Region;\nimport software.amazon.awssdk.services.s3.S3Client;\nimport java.net.URI;\n\n@Testcontainers\nclass LocalStackTest {\n\n    @Container\n    static LocalStackContainer localstack = new LocalStackContainer(\n        DockerImageName.parse(\"localstack/localstack:3.4\")\n    )\n        .withServices(\n            LocalStackContainer.Service.S3,\n            LocalStackContainer.Service.SQS,\n            LocalStackContainer.Service.DYNAMODB\n        );\n\n    @Test\n    void testS3() {\n        var endpoint = localstack.getEndpointOverride(LocalStackContainer.Service.S3);\n        var credentials = StaticCredentialsProvider.create(\n            AwsBasicCredentials.create(localstack.getAccessKey(), localstack.getSecretKey())\n        );\n\n        try (var s3 = S3Client.builder()\n            .endpointOverride(endpoint)\n            .credentialsProvider(credentials)\n            .region(Region.US_EAST_1)\n            .build()) {\n\n            s3.createBucket(b -> b.bucket(\"test-bucket\"));\n            s3.putObject(b -> b.bucket(\"test-bucket\").key(\"test.txt\"),\n                software.amazon.awssdk.core.sync.RequestBody.fromString(\"Hello LocalStack!\"));\n\n            var response = s3.getObjectAsBytes(b -> b.bucket(\"test-bucket\").key(\"test.txt\"));\n            assertEquals(\"Hello LocalStack!\", response.asUtf8String());\n        }\n    }\n\n    @Test\n    void testSQSCreateQueue() {\n        var endpoint = localstack.getEndpointOverride(LocalStackContainer.Service.SQS);\n        var credentials = StaticCredentialsProvider.create(\n            AwsBasicCredentials.create(localstack.getAccessKey(), localstack.getSecretKey())\n        );\n\n        try (var sqs = software.amazon.awssdk.services.sqs.SqsClient.builder()\n            .endpointOverride(endpoint)\n            .credentialsProvider(credentials)\n            .region(Region.US_EAST_1)\n            .build()) {\n\n            var queueUrl = sqs.createQueue(b -> b.queueName(\"test-queue\")).queueUrl();\n            assertNotNull(queueUrl);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LocalStack with @DynamicPropertySource for Spring Cloud AWS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass AwsSpringTest {\n\n    @Container\n    static LocalStackContainer localstack = new LocalStackContainer(\n        DockerImageName.parse(\"localstack/localstack:3.4\")\n    )\n        .withServices(LocalStackContainer.Service.S3, LocalStackContainer.Service.SQS);\n\n    @DynamicPropertySource\n    static void awsProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.cloud.aws.credentials.access-key\", localstack::getAccessKey);\n        registry.add(\"spring.cloud.aws.credentials.secret-key\", localstack::getSecretKey);\n        registry.add(\"spring.cloud.aws.region.static\", () -> \"us-east-1\");\n        registry.add(\"spring.cloud.aws.s3.endpoint\",\n            () -> localstack.getEndpointOverride(LocalStackContainer.Service.S3).toString());\n        registry.add(\"spring.cloud.aws.sqs.endpoint\",\n            () -> localstack.getEndpointOverride(LocalStackContainer.Service.SQS).toString());\n    }\n\n    @Autowired\n    private S3Client s3Client;\n\n    @Test\n    void testS3WithSpring() {\n        s3Client.createBucket(b -> b.bucket(\"spring-bucket\"));\n        var buckets = s3Client.listBuckets();\n        assertTrue(buckets.hasBuckets());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-container-customization",
      children: "6. Container Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-environment-variables",
      children: "6.1 Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n    .withEnv(\"SPRING_PROFILES_ACTIVE\", \"test\")\n    .withEnv(\"JAVA_OPTS\", \"-Xmx256m -Xms256m\")\n    .withEnv(\"DB_URL\", \"jdbc:postgresql://db:5432/mydb\");\n\n// withEnv is varargs:\n.withEnv(\"KEY1\", \"VALUE1\", \"KEY2\", \"VALUE2\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-exposed-ports",
      children: "6.2 Exposed Ports"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n    .withExposedPorts(8080, 8443, 9090);  // Multiple ports\n\n// Dynamic vs fixed port mapping:\n// Use withExposedPorts for dynamic allocation\n// Use .setPortBindings for fixed host ports:\n// .setPortBindings(Arrays.asList(\"8080:8080\", \"8443:8443\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-command-override",
      children: "6.3 Command Override"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> mysql = new GenericContainer<>(\"mysql:8.4\")\n    .withCommand(\"--default-authentication-plugin=mysql_native_password\",\n                 \"--character-set-server=utf8mb4\",\n                 \"--collation-server=utf8mb4_unicode_ci\");\n\n@Container\nstatic GenericContainer<?> postgres = new GenericContainer<>(\"postgres:16-alpine\")\n    .withCommand(\"postgres\", \"-c\", \"max_connections=200\", \"-c\", \"shared_buffers=256MB\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-network-configuration",
      children: "6.4 Network Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.Network;\n\nNetwork network = Network.newNetwork();\n\n@Container\nstatic GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n    .withNetwork(network)\n    .withNetworkAliases(\"app\")\n    .withExposedPorts(8080);\n\n@Container\nstatic PostgreSQLContainer<?> db = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n    .withNetwork(network)\n    .withNetworkAliases(\"db\")\n    .withDatabaseName(\"mydb\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-copy-files-into-container",
      children: "6.5 Copy Files Into Container"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.utility.MountableFile;\n\n@Container\nstatic GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n    .withCopyFileToContainer(\n        MountableFile.forClasspathResource(\"application-test.yml\"),\n        \"/app/config/application.yml\"\n    )\n    .withCopyFileToContainer(\n        MountableFile.forHostPath(\"../common/truststore.jks\"),\n        \"/etc/ssl/certs/truststore.jks\"\n    );\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-working-directory-and-user",
      children: "6.6 Working Directory and User"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n    .withWorkingDirectory(\"/app\")\n    .withCreateContainerCmdModifier(cmd -> cmd.withUser(\"1000:1000\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-network-isolation",
      children: "7. Network Isolation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Networks let containers communicate by alias, avoiding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), " confusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-creating-a-network",
      children: "7.1 Creating a Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Network network = Network.newNetwork();\n\n// Or with specific driver:\nNetwork bridge = Network.builder()\n    .driver(\"bridge\")\n    .build();\n\n// Or with subnet:\nNetwork custom = Network.builder()\n    .driver(\"bridge\")\n    .createNetworkCmdModifier(cmd -> cmd\n        .withName(\"test-net\")\n        .withIpam(new Ipam().withConfigurator(\n            List.of(new IpamConfig().withSubnet(\"172.20.0.0/16\"))\n        ))\n    )\n    .build();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-container-aliases",
      children: "7.2 Container Aliases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Testcontainers\nclass NetworkIsolationTest {\n\n    static Network network = Network.newNetwork();\n\n    @Container\n    static PostgreSQLContainer<?> db = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n        .withNetwork(network)\n        .withNetworkAliases(\"database\")  // Other containers reach it via hostname \"database\"\n        .withDatabaseName(\"orders\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @Container\n    static GenericContainer<?> redis = new GenericContainer<>(\"redis:7-alpine\")\n        .withNetwork(network)\n        .withNetworkAliases(\"cache\")\n        .withExposedPorts(6379);\n\n    @Test\n    void testNetworkCommunication() {\n        // From within the application container:\n        // database:5432 (PostgreSQL via alias)\n        // cache:6379    (Redis via alias)\n        System.out.println(\"DB host: \" + db.getHost() + \":\" + db.getMappedPort(5432));\n        System.out.println(\"Redis host: \" + redis.getHost() + \":\" + redis.getMappedPort(6379));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-composing-containers-together",
      children: "7.3 Composing Containers Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Testcontainers\nclass ComposedServiceTest {\n\n    static Network network = Network.newNetwork();\n\n    @Container\n    static PostgreSQLContainer<?> db = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n        .withNetwork(network)\n        .withNetworkAliases(\"db\");\n\n    @Container\n    static GenericContainer<?> app = new GenericContainer<>(\"my-app:latest\")\n        .withNetwork(network)\n        .withNetworkAliases(\"app\")\n        .withExposedPorts(8080)\n        .withEnv(\"SPRING_DATASOURCE_URL\",\n                 \"jdbc:postgresql://db:5432/testdb\")   // References \"db\" alias\n        .withEnv(\"SPRING_DATASOURCE_USERNAME\", \"test\")\n        .withEnv(\"SPRING_DATASOURCE_PASSWORD\", \"test\")\n        .dependsOn(db);  // Start db first\n\n    @Test\n    void testEndToEnd() {\n        Integer mappedPort = app.getMappedPort(8080);\n        var restTemplate = new org.springframework.web.client.RestTemplate();\n        String response = restTemplate.getForObject(\n            \"http://localhost:\" + mappedPort + \"/api/health\",\n            String.class\n        );\n        assertNotNull(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-docker-compose-integration",
      children: "8. Docker-Compose Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For multi-service topologies, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DockerComposeContainer"
      }), " manages a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-basic-compose-container",
      children: "8.1 Basic Compose Container"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/test/resources/docker-compose-test.yml\nversion: '3.8'\nservices:\n  postgres:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: testdb\n      POSTGRES_USER: test\n      POSTGRES_PASSWORD: test\n    ports:\n      - \"5432\"\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379\"\n\n  kafka:\n    image: confluentinc/cp-kafka:7.6.0\n    ports:\n      - \"9092\"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.testcontainers.containers.DockerComposeContainer;\nimport org.testcontainers.junit.jupiter.Container;\nimport org.testcontainers.junit.jupiter.Testcontainers;\nimport java.io.File;\n\n@Testcontainers\nclass DockerComposeTest {\n\n    @Container\n    static DockerComposeContainer<?> environment =\n        new DockerComposeContainer<>(new File(\"src/test/resources/docker-compose-test.yml\"))\n            .withExposedService(\"postgres\", 5432)\n            .withExposedService(\"redis\", 6379)\n            .withExposedService(\"kafka\", 9092);\n\n    @Test\n    void testServicesAreRunning() {\n        String postgresHost = environment.getServiceHost(\"postgres\", 5432);\n        Integer postgresPort = environment.getServicePort(\"postgres\", 5432);\n        System.out.println(\"PostgreSQL: \" + postgresHost + \":\" + postgresPort);\n\n        String redisHost = environment.getServiceHost(\"redis\", 6379);\n        Integer redisPort = environment.getServicePort(\"redis\", 6379);\n        System.out.println(\"Redis: \" + redisHost + \":\" + redisPort);\n\n        String kafkaHost = environment.getServiceHost(\"kafka\", 9092);\n        Integer kafkaPort = environment.getServicePort(\"kafka\", 9092);\n        System.out.println(\"Kafka: \" + kafkaHost + \":\" + kafkaPort);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-service-instances",
      children: "8.2 Service Instances"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When docker-compose uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "replicas"
      }), " or multiple service instances, access them by index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose-multi.yml\nversion: '3.8'\nservices:\n  app:\n    image: my-app:latest\n    ports:\n      - \"8080\"\n    deploy:\n      replicas: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic DockerComposeContainer<?> environment =\n    new DockerComposeContainer<>(new File(\"src/test/resources/docker-compose-multi.yml\"))\n        .withExposedService(\"app\", 1, 8080)   // First instance\n        .withExposedService(\"app\", 2, 8080);  // Second instance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-custom-docker-compose-file-names",
      children: "8.3 Custom Docker Compose File Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic DockerComposeContainer<?> environment =\n    new DockerComposeContainer<>(new File(\"docker-compose.integration.yml\"))\n        .withLocalCompose(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-scaling-services",
      children: "8.4 Scaling Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic DockerComposeContainer<?> environment =\n    new DockerComposeContainer<>(new File(\"docker-compose.yml\"))\n        .withTailChildContainers(true)  // Show logs from all containers\n        .withEnv(\"COMPOSE_PROJECT_NAME\", \"test-\" + UUID.randomUUID());  // Unique project\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-testcontainers-for-spring-boot",
      children: "9. Testcontainers for Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-serviceconnection-spring-boot-31",
      children: "9.1 @ServiceConnection (Spring Boot 3.1+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot 3.1 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ServiceConnection"
      }), " — no more ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DynamicPropertySource"
      }), " boilerplate for standard containers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass ServiceConnectionTest {\n\n    @Container\n    @ServiceConnection\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\");\n\n    // @ServiceConnection on PostgreSQLContainer auto-configures:\n    //   spring.datasource.url\n    //   spring.datasource.username\n    //   spring.datasource.password\n    //   spring.datasource.driver-class-name\n    // Just inject and use:\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Autowired\n    private JdbcTemplate jdbcTemplate;\n\n    @Test\n    void testQuery() {\n        Integer result = jdbcTemplate.queryForObject(\"SELECT 1\", Integer.class);\n        assertEquals(1, result);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-serviceconnection-with-connection-factories",
      children: "9.2 @ServiceConnection with Connection Factories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Works with any service that has a connection factory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass KafkaServiceConnectionTest {\n\n    @Container\n    @ServiceConnection\n    static KafkaContainer kafka = new KafkaContainer(\n        DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\")\n    );\n\n    // @ServiceConnection auto-configures spring.kafka.bootstrap-servers\n\n    @Autowired\n    private KafkaTemplate<String, String> kafkaTemplate;\n\n    @Test\n    void testKafka() throws Exception {\n        kafkaTemplate.send(\"test-topic\", \"hello-spring\").get(5, TimeUnit.SECONDS);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass RedisServiceConnectionTest {\n\n    @Container\n    @ServiceConnection\n    static GenericContainer<?> redis = new GenericContainer<>(\"redis:7-alpine\")\n        .withExposedPorts(6379);\n\n    // @ServiceConnection auto-configures spring.data.redis.host + spring.data.redis.port\n\n    @Autowired\n    private RedisTemplate<String, String> redisTemplate;\n\n    @Test\n    void testRedis() {\n        redisTemplate.opsForValue().set(\"greeting\", \"Hello from Testcontainers!\");\n        assertEquals(\"Hello from Testcontainers!\", redisTemplate.opsForValue().get(\"greeting\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How @ServiceConnection works under the hood:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Simplified — each container type registers a ConnectionFactory bean\n// PostgreSQLContainer → PostgresContainerConnectionDetails\n// KafkaContainer → KafkaContainerConnectionDetails\n// GenericContainer → GenericContainerConnectionDetails (via @DynamicPropertySource or manual)\n\n// PostgreSQLContainer registers:\n@Bean\nPostgresContainerConnectionDetails postgresContainerConnectionDetails(\n        PostgreSQLContainer<?> container) {\n    return () -> container;\n}\n\n// Which produces:\n//   ContainerDataSourceConnectionDetails\n//   (auto-configures the DataSource)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-jdbc-with-tc-driver-revisited-for-spring-boot",
      children: "9.3 JDBC with tc Driver (Revisited for Spring Boot)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tc JDBC driver is the simplest approach for database-only tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest(properties = {\n    \"spring.datasource.url=jdbc:tc:postgresql:16-alpine:///testdb\",\n    \"spring.datasource.driver-class-name=org.testcontainers.jdbc.ContainerDatabaseDriver\",\n    \"spring.datasource.username=test\",\n    \"spring.datasource.password=test\",\n    \"spring.jpa.generate-ddl=true\"\n})\nclass TcDriverSpringTest {\n\n    @Autowired\n    private JpaRepository<User, Long> userRepository;\n\n    @Test\n    void testEntityPersistence() {\n        User user = new User(null, \"alice\", \"alice@example.com\");\n        User saved = userRepository.save(user);\n        assertNotNull(saved.getId());\n\n        Optional<User> found = userRepository.findById(saved.getId());\n        assertTrue(found.isPresent());\n        assertEquals(\"alice\", found.get().getUsername());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TC URL parameters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TC_REUSABLE=true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable container reuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TC_IMAGE_TAG=16-alpine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override image tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TC_INITSCRIPT=init.sql"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run init script"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TC_DAEMON=true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't wait for ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TC_MY_CNF=my.cnf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL config file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-reusable-containers",
      children: "10. Reusable Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-withreuse",
      children: "10.1 withReuse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, Testcontainers destroys every container after the test JVM exits. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withReuse"
      }), " keeps the container running across test runs — dramatically faster local development."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n    .withReuse(true);  // Container survives JVM restarts\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Reuse requires configuration. Without it, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withReuse"
      }), " is silently ignored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-testcontainersproperties",
      children: "10.2 .testcontainers.properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create this file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.testcontainers.properties"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.testcontainers/.testcontainers.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Global reuse enable — required for withReuse to work\ntestcontainers.reuse.enable=true\n\n# Docker host override (optional)\ndocker.host=unix:///var/run/docker.sock\n\n# Ryuk configuration (optional)\nryuk.container.privileged=true\n\n# Image pull timeout (optional, default 120s)\ntc.image.pull.timeout=180000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For project-specific settings, put it in the project root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# project-root/.testcontainers.properties\ntestcontainers.reuse.enable=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-reusable-containers-in-ci-ryuk",
      children: "10.3 Reusable Containers in CI (Ryuk)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ryuk is Testcontainers' resource reaper — it kills containers after the JVM exits. In CI, Ryuk is essential to prevent orphan containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Ryuk runs automatically. To disable (e.g., when debugging in CI):\n@Testcontainers(disabledWithoutDocker = true)\nclass CiTest {\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# CI .testcontainers.properties\ntestcontainers.reuse.enable=false   # Don't reuse — fresh each CI run\n\n# If Ryuk causes issues (uncommon):\n# testcontainers.ryuk.disabled=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-singleton-container-pattern",
      children: "10.4 Singleton Container Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For maximum reuse, manage a singleton container manually:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// AbstractIntegrationTest.java\npublic abstract class AbstractIntegrationTest {\n\n    private static final PostgreSQLContainer<?> POSTGRES;\n\n    static {\n        POSTGRES = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n            .withDatabaseName(\"testdb\")\n            .withUsername(\"test\")\n            .withPassword(\"test\");\n        POSTGRES.start();\n\n        // Set system properties so Spring picks them up\n        System.setProperty(\"spring.datasource.url\", POSTGRES.getJdbcUrl());\n        System.setProperty(\"spring.datasource.username\", POSTGRES.getUsername());\n        System.setProperty(\"spring.datasource.password\", POSTGRES.getPassword());\n    }\n}\n\n// Concrete test\n@SpringBootTest\nclass UserRepositoryTest extends AbstractIntegrationTest {\n\n    @Autowired\n    private UserRepository userRepository;\n\n    @Test\n    void testSave() {\n        User user = userRepository.save(new User(null, \"bob\", \"bob@test.com\"));\n        assertNotNull(user.getId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-hybrid-mode-reuse-locally-fresh-in-ci",
      children: "10.5 Hybrid Mode: Reuse Locally, Fresh in CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Container\nstatic PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\");\n\nstatic {\n    // Enable reuse only when running locally (not in CI)\n    boolean isCi = Boolean.parseBoolean(System.getenv(\"CI\"));\n    if (!isCi) {\n        postgres.withReuse(true);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "DynamicPropertySource"
        }), " methods must be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " and accept a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DynamicPropertyRegistry"
        }), " parameter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-complete-example--full-spring-boot-integration-test",
      children: "11. Complete Example — Full Spring Boot Integration Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A complete, real-world example tying everything together."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-application-code",
      children: "11.1 Application Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/main/java/com/example/demo/order/Order.java\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private String customerEmail;\n\n    @Column(nullable = false)\n    private BigDecimal total;\n\n    @Column(nullable = false)\n    @Enumerated(EnumType.STRING)\n    private OrderStatus status;\n\n    @Column(nullable = false)\n    private LocalDateTime createdAt;\n\n    public Order() {}\n\n    public Order(String customerEmail, BigDecimal total) {\n        this.customerEmail = customerEmail;\n        this.total = total;\n        this.status = OrderStatus.PENDING;\n        this.createdAt = LocalDateTime.now();\n    }\n\n    // Getters and setters omitted for brevity\n}\n\nenum OrderStatus {\n    PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/main/java/com/example/demo/order/OrderRepository.java\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n    List<Order> findByCustomerEmail(String email);\n    List<Order> findByStatus(OrderStatus status);\n    long countByStatus(OrderStatus status);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/main/java/com/example/demo/order/OrderService.java\n@Service\n@Transactional\npublic class OrderService {\n\n    private final OrderRepository orderRepository;\n\n    public OrderService(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n\n    public Order createOrder(String customerEmail, BigDecimal total) {\n        if (total.compareTo(BigDecimal.ZERO) <= 0) {\n            throw new IllegalArgumentException(\"Total must be positive\");\n        }\n        Order order = new Order(customerEmail, total);\n        return orderRepository.save(order);\n    }\n\n    public Order confirmOrder(Long id) {\n        Order order = orderRepository.findById(id)\n            .orElseThrow(() -> new RuntimeException(\"Order not found: \" + id));\n        if (order.getStatus() != OrderStatus.PENDING) {\n            throw new IllegalStateException(\"Only PENDING orders can be confirmed\");\n        }\n        order.setStatus(OrderStatus.CONFIRMED);\n        return orderRepository.save(order);\n    }\n\n    @Transactional(readOnly = true)\n    public long countPendingOrders() {\n        return orderRepository.countByStatus(OrderStatus.PENDING);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-integration-test",
      children: "11.2 Integration Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/test/java/com/example/demo/order/OrderServiceIntegrationTest.java\npackage com.example.demo.order;\n\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.DynamicPropertyRegistry;\nimport org.springframework.test.context.DynamicPropertySource;\nimport org.springframework.test.context.junit.jupiter.EnabledIf;\nimport org.testcontainers.containers.PostgreSQLContainer;\nimport org.testcontainers.junit.jupiter.Container;\nimport org.testcontainers.junit.jupiter.Testcontainers;\n\nimport java.math.BigDecimal;\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringBootTest\n@Testcontainers\nclass OrderServiceIntegrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\")\n        .withDatabaseName(\"orderdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\")\n        .withReuse(true);\n\n    @DynamicPropertySource\n    static void setupDatabase(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.jpa.hibernate.ddl-auto\", () -> \"create-drop\");\n    }\n\n    @Autowired\n    private OrderService orderService;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @BeforeEach\n    void cleanUp() {\n        orderRepository.deleteAll();\n    }\n\n    @Test\n    void createOrder_ShouldPersistAndReturnOrder() {\n        Order order = orderService.createOrder(\"alice@example.com\", new BigDecimal(\"49.99\"));\n\n        assertNotNull(order.getId());\n        assertEquals(\"alice@example.com\", order.getCustomerEmail());\n        assertEquals(new BigDecimal(\"49.99\"), order.getTotal());\n        assertEquals(OrderStatus.PENDING, order.getStatus());\n        assertNotNull(order.getCreatedAt());\n    }\n\n    @Test\n    void createOrder_WithNegativeTotal_ShouldThrow() {\n        assertThrows(IllegalArgumentException.class, () ->\n            orderService.createOrder(\"bob@example.com\", new BigDecimal(\"-10.00\")));\n    }\n\n    @Test\n    void confirmOrder_ShouldUpdateStatus() {\n        Order order = orderService.createOrder(\"carol@example.com\", new BigDecimal(\"99.99\"));\n\n        Order confirmed = orderService.confirmOrder(order.getId());\n\n        assertEquals(OrderStatus.CONFIRMED, confirmed.getStatus());\n    }\n\n    @Test\n    void confirmOrder_NonPending_ShouldThrow() {\n        Order order = orderService.createOrder(\"dave@example.com\", new BigDecimal(\"10.00\"));\n        orderService.confirmOrder(order.getId());\n\n        assertThrows(IllegalStateException.class, () ->\n            orderService.confirmOrder(order.getId()));\n    }\n\n    @Test\n    void confirmOrder_NotFound_ShouldThrow() {\n        assertThrows(RuntimeException.class, () ->\n            orderService.confirmOrder(99999L));\n    }\n\n    @Test\n    void countPendingOrders_ShouldReturnCorrectCount() {\n        orderService.createOrder(\"a@x.com\", new BigDecimal(\"10.00\"));\n        orderService.createOrder(\"b@x.com\", new BigDecimal(\"20.00\"));\n        orderService.createOrder(\"c@x.com\", new BigDecimal(\"30.00\"));\n\n        assertEquals(3, orderService.countPendingOrders());\n    }\n\n    @Test\n    void findByCustomerEmail_ShouldReturnMatchingOrders() {\n        orderService.createOrder(\"alice@example.com\", new BigDecimal(\"10.00\"));\n        orderService.createOrder(\"alice@example.com\", new BigDecimal(\"20.00\"));\n        orderService.createOrder(\"bob@example.com\", new BigDecimal(\"30.00\"));\n\n        List<Order> aliceOrders = orderService.findByCustomerEmail(\"alice@example.com\");\n        assertEquals(2, aliceOrders.size());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-kafka--database-combined-test",
      children: "11.3 Kafka + Database Combined Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass OrderEventIntegrationTest {\n\n    @Container\n    @ServiceConnection\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16-alpine\");\n\n    @Container\n    @ServiceConnection\n    static RedpandaContainer redpanda = new RedpandaContainer(\n        \"docker.redpanda.com/redpandadata/redpanda:v24.1.1\"\n    );\n\n    @Autowired\n    private OrderService orderService;\n\n    @Autowired\n    private KafkaTemplate<String, Object> kafkaTemplate;\n\n    @Test\n    void orderCreated_ShouldPublishKafkaEvent() throws Exception {\n        Order order = orderService.createOrder(\"alice@x.com\", new BigDecimal(\"15.00\"));\n\n        // Verify Kafka message was sent\n        // (In real tests, use a test consumer or EmbeddedKafka)\n        assertNotNull(order.getId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testcontainers architecture"
        }), " wraps Docker containers inside JUnit tests. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DockerClientFactory"
        }), " manages the Docker connection; specialized containers pre-configure services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GenericContainer"
        }), " is the universal container type. Use it for any Docker image without a specialized container."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Testcontainers"
          })
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Container"
          })
        }), " is the JUnit 5 extension. Static fields share one container per class; instance fields create one per test."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle"
        }), " defaults to start-on-annotation, stop-after-class. Use manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "start()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "stop()"
        }), " for programmatic control and singleton patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database containers"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "PostgreSQLContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MySQLContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MSSQLServerContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OracleContainer"
        }), ") pre-set credentials, driver, and JDBC URL. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withInitScript"
        }), " for schema setup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JDBC tc driver"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "jdbc:tc:postgresql://"
        }), ") auto-starts containers from the JDBC URL — no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Container"
        }), " needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@DynamicPropertySource"
          })
        }), " injects container connection details into the Spring ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Environment"
        }), " before context creation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wait strategies"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wait.forListeningPort"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wait.forLogMessage"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wait.forHttp"
        }), ") ensure containers are ready before tests execute."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Middleware containers"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "KafkaContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RedpandaContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RabbitMQContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GenericContainer"
        }), " for Redis, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ElasticsearchContainer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LocalStackContainer"
        }), ") handle complex service configuration automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Container customization"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "withEnv"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withExposedPorts"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withCommand"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withNetwork"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withStartupTimeout"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withCopyFileToContainer"
        }), ") covers every Docker configuration need."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network isolation"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Network.newNetwork"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withNetworkAliases"
        }), " creates isolated communication between containers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DockerComposeContainer"
          })
        }), " manages docker-compose.yml files directly in tests, supporting service instances and multi-container setups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ServiceConnection"
          })
        }), " (Spring Boot 3.1+) auto-configures connection details for standard containers, replacing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DynamicPropertySource"
        }), " boilerplate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reusable containers"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "withReuse"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".testcontainers.properties"
        }), ", Ryuk) dramatically speed up local development by keeping containers alive across test runs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GenericContainer:"
          }), " Create a test that starts a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "generic-container"
          }), " from the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nginx:alpine"
          }), " image. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Testcontainers"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Container"
          }), ". Verify the container is running by checking ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getMappedPort(80)"
          }), ". Implement wait strategies: first using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Wait.forListeningPort()"
          }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Wait.forHttp(\"/\")"
          }), ". Compare startup times."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Container:"
          }), " Write a test using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PostgreSQLContainer"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@DynamicPropertySource"
          }), ". Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "users"
          }), " table, insert a row, and query it back. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withInitScript"
          }), " for the table creation. Then convert the test to use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ServiceConnection"
          }), " — remove the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@DynamicPropertySource"
          }), " method."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TC JDBC Driver:"
          }), " Configure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring.datasource.url=jdbc:tc:postgresql:16-alpine:///testdb"
          }), " in test properties. Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpringBootTest"
          }), " that injects ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JdbcTemplate"
          }), " and runs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT 1"
          }), ". Do NOT declare any ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Container"
          }), " fields. Explain how the tc driver starts the container automatically."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiple Database Containers:"
          }), " Write a test that runs both ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PostgreSQLContainer"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MySQLContainer"
          }), " simultaneously. Create tables in both, insert data, and verify you can query both databases in the same test method. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@DynamicPropertySource"
          }), " to configure two separate ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataSource"
          }), " beans."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wait Strategies:"
          }), " Given a custom Docker image that logs \"Service ready on port 8080\" when healthy, configure a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericContainer"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Wait.forLogMessage"
          }), ". Then configure an HTTP wait strategy against ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/health"
          }), ". Measure the difference in startup time between the two strategies."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kafka Test:"
          }), " Write a test using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "KafkaContainer"
          }), " that produces a message and consumes it with a Kafka ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Consumer"
          }), ". Then convert the test to use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedpandaContainer"
          }), " and verify the same behavior works. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@DynamicPropertySource"
          }), " to inject ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring.kafka.bootstrap-servers"
          }), " into a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpringBootTest"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redis Test:"
          }), " Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpringBootTest"
          }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericContainer"
          }), " running ", (0,jsx_runtime.jsx)(_components.code, {
            children: "redis:7-alpine"
          }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ServiceConnection"
          }), " to auto-configure Redis connection. Test ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "expire"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "delete"
          }), " operations using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedisTemplate<String, String>"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LocalStack S3 Test:"
          }), " Write a test using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LocalStackContainer"
          }), " with S3 service enabled. Create a bucket, upload an object, download it, and assert the content matches. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "S3Client"
          }), " from the AWS SDK. Then write a second test that does the same with SQS."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Container Customization:"
          }), " Start a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mysql:8.4"
          }), " container with custom MySQL configuration: set ", (0,jsx_runtime.jsx)(_components.code, {
            children: "max_connections=50"
          }), ", enable ", (0,jsx_runtime.jsx)(_components.code, {
            children: "general_log"
          }), ", and set ", (0,jsx_runtime.jsx)(_components.code, {
            children: "character-set-server=utf8mb4"
          }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withCommand"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withEnv"
          }), ". Verify the settings took effect by querying MySQL system variables."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Isolation:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Network"
          }), " and two containers on it: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "postgres:16-alpine"
          }), " with alias ", (0,jsx_runtime.jsx)(_components.code, {
            children: "db"
          }), ", and a custom application image with alias ", (0,jsx_runtime.jsx)(_components.code, {
            children: "app"
          }), ". Configure the app container to connect to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jdbc:postgresql://db:5432/testdb"
          }), ". Verify the app container can resolve and connect to the database container by hostname."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Docker-Compose:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker-compose.yml"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "postgres"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "redis"
          }), " services. Write a test using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DockerComposeContainer"
          }), " that starts both services, verifies they are running, and tests that a Spring Boot application can connect to both when their connection details are extracted."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reusable Containers:"
          }), " Configure ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".testcontainers.properties"
          }), " to enable reuse. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withReuse(true)"
          }), " on a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PostgreSQLContainer"
          }), ". Run your test suite twice and observe the startup time difference. Then write a CI configuration that disables reuse. Explain the role of Ryuk in both scenarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Singleton Container:"
          }), " Implement an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AbstractDatabaseTest"
          }), " base class that starts a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PostgreSQLContainer"
          }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "static"
          }), " block and sets ", (0,jsx_runtime.jsx)(_components.code, {
            children: "System.setProperty"
          }), " values. Write three test classes that extend it and verify they share the same container. How does this pattern differ from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Container"
          }), " on a static field?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chaos with Testcontainers:"
          }), " Write a test that uses a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericContainer"
          }), " running a custom application. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withCommand"
          }), " to simulate a slow startup (add ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sleep 30"
          }), " before the entrypoint). Set ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withStartupTimeout(Duration.ofSeconds(15))"
          }), " and verify the test fails with a timeout exception."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complete Integration Test:"
          }), " Build a full Spring Boot test that uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PostgreSQLContainer"
          }), " (with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ServiceConnection"
          }), "), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedpandaContainer"
          }), " (with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ServiceConnection"
          }), "), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericContainer"
          }), " for Redis. Write a service that processes orders and publishes events to Kafka. Test the entire flow with assertions on the database state and Kafka messages."]
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