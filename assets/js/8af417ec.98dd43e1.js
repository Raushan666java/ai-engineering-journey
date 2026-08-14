"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7024],{

/***/ 48553
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_39_discovery_md_8af_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-39-discovery-md-8af.json
const site_docs_courses_java_39_discovery_md_8af_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/39-discovery","title":"Service Discovery & Load Balancing","description":"Previous API Gateway","source":"@site/docs/courses/java/39-discovery.md","sourceDirName":"courses/java","slug":"/java/39-discovery","permalink":"/ai-engineering-journey/java/39-discovery","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"id":"39-discovery","slug":"/java/39-discovery","title":"Service Discovery & Load Balancing","sidebar_label":"Service Discovery & Load Balancing","sidebar_position":39},"sidebar":"course-java","previous":{"title":"Microservices Architecture Principles","permalink":"/ai-engineering-journey/java/38-microservices-principles"},"next":{"title":"API Gateway (Spring Cloud Gateway)","permalink":"/ai-engineering-journey/java/40-gateway"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/39-discovery.md


const frontMatter = {
	id: '39-discovery',
	slug: '/java/39-discovery',
	title: 'Service Discovery & Load Balancing',
	sidebar_label: 'Service Discovery & Load Balancing',
	sidebar_position: 39
};
const contentTitle = 'Service Discovery & Load Balancing';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Service Discovery Patterns",
  "id": "service-discovery-patterns",
  "level": 3
}, {
  "value": "Netflix Eureka",
  "id": "netflix-eureka",
  "level": 3
}, {
  "value": "Spring Cloud LoadBalancer",
  "id": "spring-cloud-loadbalancer",
  "level": 3
}, {
  "value": "Complete Code Examples",
  "id": "complete-code-examples",
  "level": 2
}, {
  "value": "Eureka Server",
  "id": "eureka-server",
  "level": 3
}, {
  "value": "Eureka Server Security Configuration",
  "id": "eureka-server-security-configuration",
  "level": 3
}, {
  "value": "Eureka Server Dashboard Controller",
  "id": "eureka-server-dashboard-controller",
  "level": 3
}, {
  "value": "Eureka Client — Order Service",
  "id": "eureka-client--order-service",
  "level": 3
}, {
  "value": "Load Balancer Configuration",
  "id": "load-balancer-configuration",
  "level": 3
}, {
  "value": "Custom Load Balancer",
  "id": "custom-load-balancer",
  "level": 3
}, {
  "value": "Custom Weighted Load Balancer",
  "id": "custom-weighted-load-balancer",
  "level": 3
}, {
  "value": "Service Instance Supplier with Custom Metadata",
  "id": "service-instance-supplier-with-custom-metadata",
  "level": 3
}, {
  "value": "EurekaClient API Usage",
  "id": "eurekaclient-api-usage",
  "level": 3
}, {
  "value": "Discovery Controller",
  "id": "discovery-controller",
  "level": 3
}, {
  "value": "Load Balanced Service Client",
  "id": "load-balanced-service-client",
  "level": 3
}, {
  "value": "WebClient with Load Balancer",
  "id": "webclient-with-load-balancer",
  "level": 3
}, {
  "value": "Feign Client with Load Balancer",
  "id": "feign-client-with-load-balancer",
  "level": 3
}, {
  "value": "Custom ServiceInstanceListSupplier Configuration",
  "id": "custom-serviceinstancelistsupplier-configuration",
  "level": 3
}, {
  "value": "Eureka Client - Shipping Service",
  "id": "eureka-client---shipping-service",
  "level": 3
}, {
  "value": "Eureka Client - Payment Service (Second Instance)",
  "id": "eureka-client---payment-service-second-instance",
  "level": 3
}, {
  "value": "Peer-Aware Eureka Server Configuration",
  "id": "peer-aware-eureka-server-configuration",
  "level": 3
}, {
  "value": "Application Event Listeners for Discovery Events",
  "id": "application-event-listeners-for-discovery-events",
  "level": 3
}, {
  "value": "Health Check Indicator",
  "id": "health-check-indicator",
  "level": 3
}, {
  "value": "Eureka Client Metadata Customizer",
  "id": "eureka-client-metadata-customizer",
  "level": 3
}, {
  "value": "Load Balancer Health Check Task",
  "id": "load-balancer-health-check-task",
  "level": 3
}, {
  "value": "Integration Tests",
  "id": "integration-tests",
  "level": 3
}, {
  "value": "Unit Tests for Custom Load Balancer",
  "id": "unit-tests-for-custom-load-balancer",
  "level": 3
}, {
  "value": "Third-Party Registration Pattern (Kubernetes)",
  "id": "third-party-registration-pattern-kubernetes",
  "level": 3
}, {
  "value": "Docker Compose for Eureka Cluster",
  "id": "docker-compose-for-eureka-cluster",
  "level": 3
}, {
  "value": "Actuator Endpoints for Eureka",
  "id": "actuator-endpoints-for-eureka",
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
        id: "service-discovery--load-balancing",
        children: "Service Discovery & Load Balancing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/38-microservices-principles",
          children: "Microservices Principles"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/40-gateway",
          children: "API Gateway"
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
        href: "../../assets/images/lessons/java/39-discovery/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/39-discovery/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/39-discovery/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/39-discovery/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/39-discovery/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/39-discovery/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up a Netflix Eureka server for service registration and discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure microservices as Eureka clients for automatic registration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use EurekaClient API for programmatic service discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand instance metadata, health checks, and self-preservation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Spring Cloud LoadBalancer with RoundRobin, Random, and custom strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use @LoadBalanced RestTemplate and WebClient.Builder for load-balanced calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between client-side and server-side load balancing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement self-registration and third-party registration patterns"
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
            children: "Service Discovery → locate service instances dynamically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side vs server-side discovery patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eureka → Netflix OSS service registry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableEurekaServer"
            }), " for registry; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableEurekaClient"
            }), " for registration"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Checks → detect unhealthy instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eureka heartbeat mechanism; custom health indicators"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Service Discovery] --> B[Discovery Patterns]\n    A --> C[Eureka]\n    A --> D[Health Checks]\n    B --> B1[Client-side discovery]\n    B --> B2[Server-side discovery]\n    C --> C1[Eureka Server]\n    C --> C2[Eureka Client]\n    C --> C3[Self-preservation]\n    D --> D1[Heartbeat / Renew]\n    D --> D2[HealthIndicator]\n"
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
            children: "Eureka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side discovery (REST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP in CAP theorem → prioritizes availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side + server-side (DNS/HTTP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP → prioritizes consistency with Raft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZooKeeper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP → strong consistency for distributed coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side via DNS SRV records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native to K8s, no extra infra needed"
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
              children: "@EnableEurekaServer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turns app into Eureka registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single or clustered deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableEurekaClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registers service with Eureka"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "spring.application.name"
            }), " used as service ID"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DiscoveryClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmatic service lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "discoveryClient.getInstances(\"order-service\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eureka.client.serviceUrl.defaultZone"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eureka server URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http://localhost:8761/eureka/"
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
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eureka + Feign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order service discovers inventory service by name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes DNS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Services resolve via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<service>.<namespace>.svc.cluster.local"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Datacenter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eureka replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-region failover with Eureka peer awareness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between client-side and server-side discovery? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Client-side: the client queries the registry directly. Server-side: a load balancer queries the registry for the client."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Eureka CAP property does it prioritize? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " AP (Availability and Partition tolerance), not consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does Eureka detect unhealthy instances? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Heartbeat → instances send renew requests every 30 seconds; 3 missed = evicted"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/39-discovery.png",
        alt: "Service Discovery & Load Balancing - Eureka Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-discovery-patterns",
      children: "Service Discovery Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a microservices architecture, services need to find each other at runtime. Service discovery solves the problem of locating service instances whose network addresses change dynamically due to auto-scaling, failures, or deployments."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Client-Side Discovery"
      }), ": The client queries a service registry to get available instances and uses a load balancer to select one. Spring Cloud Netflix Eureka implements this pattern."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server-Side Discovery"
      }), ": The client sends requests to a load balancer (e.g., AWS ALB, Kubernetes Service), which forwards to available instances. The client does not query the registry directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netflix-eureka",
      children: "Netflix Eureka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eureka consists of two components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eureka Server"
        }), ": The registry where services register and from which clients discover instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eureka Client"
        }), ": A library that handles registration, heartbeats, and instance lookup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Preservation"
        }), ": Eureka stops evicting instances during network partitions to protect against false removals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peer Awareness"
        }), ": Multiple Eureka servers replicate registration data for high availability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Metadata"
        }), ": Custom key-value pairs associated with each registered instance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health Checks"
        }), ": Eureka clients send heartbeats; the server evicts instances that miss renewals"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spring-cloud-loadbalancer",
      children: "Spring Cloud LoadBalancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Cloud LoadBalancer is the replacement for Netflix Ribbon. It provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ReactorLoadBalancer"
        }), ": Reactive foundation for load-balancing algorithms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RoundRobinLoadBalancer"
        }), ": Distributes requests sequentially across instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RandomLoadBalancer"
        }), ": Selects instances randomly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom load balancers via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactorServiceInstanceLoadBalancer"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\nUse Feign client with Eureka → Feign automatically resolves service names to instances via the registry."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nEureka self-preservation mode prevents mass eviction during network partitions. In development, disable it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eureka.server.enableSelfPreservation=false"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nReplace Eureka default health check with Spring Actuator health endpoint for richer instance health reporting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-code-examples",
      children: "Complete Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-server",
      children: "Eureka Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.course.discovery</groupId>\n    <artifactId>eureka-server</artifactId>\n    <version>1.0.0</version>\n    <name>eureka-server</name>\n    <description>Eureka Service Registry</description>\n\n    <properties>\n        <java.version>21</java.version>\n        <spring-cloud.version>2023.0.0</spring-cloud.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-security</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.discovery.eureka;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;\n\n@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaServerApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\nserver:\n  port: 8761\n\nspring:\n  application:\n    name: eureka-server\n  security:\n    basic:\n      enabled: true\n    user:\n      name: eureka\n      password: eureka-secret\n\neureka:\n  instance:\n    hostname: localhost\n    prefer-ip-address: true\n  client:\n    register-with-eureka: false\n    fetch-registry: false\n    service-url:\n      defaultZone: http://localhost:8761/eureka/\n  server:\n    enable-self-preservation: true\n    renewal-percent-threshold: 0.85\n    eviction-interval-timer-in-ms: 5000\n    response-cache-update-interval-ms: 3000\n    peer-node-read-timeout-ms: 2000\n    peer-node-connect-timeout-ms: 2000\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-server-security-configuration",
      children: "Eureka Server Security Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.discovery.eureka.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class EurekaSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.csrf(csrf -> csrf.ignoringRequestMatchers(\"/eureka/**\"))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/eureka/**\").permitAll()\n                .anyRequest().authenticated())\n            .httpBasic(httpBasic -> {});\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-server-dashboard-controller",
      children: "Eureka Server Dashboard Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.discovery.eureka.web;\n\nimport com.netflix.appinfo.InstanceInfo;\nimport com.netflix.discovery.shared.Application;\nimport com.netflix.eureka.EurekaServerContext;\nimport com.netflix.eureka.EurekaServerContextHolder;\nimport com.netflix.eureka.registry.PeerAwareInstanceRegistry;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport java.util.*;\n\n@RestController\n@RequestMapping(\"/api/discovery\")\npublic class DiscoveryController {\n\n    @GetMapping(\"/apps\")\n    public ResponseEntity<Map<String, Object>> getApplications() {\n        PeerAwareInstanceRegistry registry = getRegistry();\n        List<Application> applications = registry.getApplications().getRegisteredApplications();\n\n        Map<String, Object> result = new HashMap<>();\n        result.put(\"totalApps\", applications.size());\n        result.put(\"totalInstances\", applications.stream()\n                .mapToInt(app -> app.getInstances().size()).sum());\n\n        List<Map<String, Object>> appList = applications.stream().map(app -> {\n            Map<String, Object> appMap = new HashMap<>();\n            appMap.put(\"name\", app.getName());\n            appMap.put(\"instanceCount\", app.getInstances().size());\n            List<Map<String, Object>> instances = app.getInstances().stream().map(inst -> {\n                Map<String, Object> instMap = new HashMap<>();\n                instMap.put(\"instanceId\", inst.getInstanceId());\n                instMap.put(\"hostName\", inst.getHostName());\n                instMap.put(\"ipAddr\", inst.getIPAddr());\n                instMap.put(\"port\", inst.getPort());\n                instMap.put(\"status\", inst.getStatus().name());\n                instMap.put(\"lastUpdatedTimestamp\", new Date(inst.getLastUpdatedTimestamp()));\n                instMap.put(\"lastDirtyTimestamp\", new Date(inst.getLastDirtyTimestamp()));\n                instMap.put(\"actionType\", inst.getActionType().name());\n                instMap.put(\"countryId\", inst.getCountryId());\n                instMap.put(\"homePageUrl\", inst.getHomePageUrl());\n                instMap.put(\"healthCheckUrl\", inst.getHealthCheckUrl());\n                instMap.put(\"statusPageUrl\", inst.getStatusPageUrl());\n                instMap.put(\"vipAddress\", inst.getVIPAddress());\n                instMap.put(\"secureVipAddress\", inst.getSecureVipAddress());\n                instMap.put(\"isCoordinatingServer\", inst.isCoordinatingServer());\n                instMap.put(\"metadata\", inst.getMetadata());\n                return instMap;\n            }).toList();\n            appMap.put(\"instances\", instances);\n            return appMap;\n        }).toList();\n        result.put(\"applications\", appList);\n        return ResponseEntity.ok(result);\n    }\n\n    @GetMapping(\"/status\")\n    public ResponseEntity<Map<String, Object>> getStatus() {\n        PeerAwareInstanceRegistry registry = getRegistry();\n        Map<String, Object> status = new HashMap<>();\n        status.put(\"uptime\", registry.getUptime());\n        status.put(\"isLeaseExpirationEnabled\", registry.isLeaseExpirationEnabled());\n        status.put(\"numberOfRenewsPerMinThreshold\", registry.getNumOfRenewsPerMinThreshold());\n        status.put(\"numberOfRenewsPerMin\", registry.getNumOfRenewsInLastMin());\n        status.put(\"selfPreservationModeEnabled\", registry.isSelfPreservationModeEnabled());\n        status.put(\"instanceCounts\", Map.of(\n                \"registered\", registry.getApplicationCount()\n        ));\n        return ResponseEntity.ok(status);\n    }\n\n    @GetMapping(\"/instances/{instanceId}\")\n    public ResponseEntity<InstanceInfo> getInstance(\n            @PathVariable String instanceId,\n            @RequestParam String appName) {\n        PeerAwareInstanceRegistry registry = getRegistry();\n        InstanceInfo instance = registry.getInstanceByAppAndId(appName, instanceId);\n        if (instance == null) {\n            return ResponseEntity.notFound().build();\n        }\n        return ResponseEntity.ok(instance);\n    }\n\n    @DeleteMapping(\"/instances/{instanceId}\")\n    public ResponseEntity<Void> removeInstance(\n            @PathVariable String instanceId,\n            @RequestParam String appName) {\n        PeerAwareInstanceRegistry registry = getRegistry();\n        registry.cancel(appName, instanceId, true);\n        return ResponseEntity.ok().build();\n    }\n\n    private PeerAwareInstanceRegistry getRegistry() {\n        EurekaServerContext context = EurekaServerContextHolder.getInstance().getServerContext();\n        return context.getRegistry();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-client--order-service",
      children: "Eureka Client — Order Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.course.microservices</groupId>\n    <artifactId>order-service-client</artifactId>\n    <version>1.0.0</version>\n    <name>order-service-client</name>\n    <description>Order Service with Eureka Client</description>\n\n    <properties>\n        <java.version>21</java.version>\n        <spring-cloud.version>2023.0.0</spring-cloud.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-validation</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-loadbalancer</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-openfeign</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-webflux</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.projectreactor.netty</groupId>\n            <artifactId>reactor-netty</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.client.discovery.EnableDiscoveryClient;\nimport org.springframework.cloud.openfeign.EnableFeignClients;\n\n@SpringBootApplication\n@EnableDiscoveryClient\n@EnableFeignClients\npublic class OrderServiceApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(OrderServiceApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\nserver:\n  port: 0\n\nspring:\n  application:\n    name: order-service\n  datasource:\n    url: jdbc:h2:mem:orderdb\n    driver-class-name: org.h2.Driver\n    username: sa\n    password:\n  jpa:\n    hibernate:\n      ddl-auto: create-drop\n    show-sql: true\n\neureka:\n  instance:\n    prefer-ip-address: true\n    instance-id: ${spring.application.name}:${vcap.application.instance_id:${spring.application.instance_id:${random.value}}}\n    lease-renewal-interval-in-seconds: 10\n    lease-expiration-duration-in-seconds: 30\n    metadata-map:\n      zone: us-east-1\n      version: 1.0.0\n      environment: development\n      git-commit: ${GIT_COMMIT:unknown}\n  client:\n    service-url:\n      defaultZone: http://eureka:eureka-secret@localhost:8761/eureka/\n    register-with-eureka: true\n    fetch-registry: true\n    registry-fetch-interval-seconds: 5\n    instance-info-replication-interval-seconds: 10\n    initial-instance-info-replication-interval-seconds: 40\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics\n  endpoint:\n    health:\n      show-details: always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancer-configuration",
      children: "Load Balancer Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.springframework.cloud.client.loadbalancer.LoadBalanced;\nimport org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;\nimport org.springframework.cloud.loadbalancer.annotation.LoadBalancerClients;\nimport org.springframework.cloud.loadbalancer.core.RandomLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.RoundRobinLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\nimport org.springframework.web.client.RestTemplate;\nimport org.springframework.web.reactive.function.client.WebClient;\n\n@Configuration\n@LoadBalancerClients({\n    @LoadBalancerClient(name = \"payment-service\", configuration = PaymentServiceLoadBalancerConfig.class),\n    @LoadBalancerClient(name = \"inventory-service\", configuration = InventoryServiceLoadBalancerConfig.class),\n    @LoadBalancerClient(name = \"shipping-service\", configuration = ShippingServiceLoadBalancerConfig.class)\n})\npublic class LoadBalancerConfig {\n\n    @Bean\n    @LoadBalanced\n    @Primary\n    public RestTemplate loadBalancedRestTemplate() {\n        return new RestTemplate();\n    }\n\n    @Bean\n    @LoadBalanced\n    @Primary\n    public WebClient.Builder loadBalancedWebClientBuilder() {\n        return WebClient.builder();\n    }\n\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n\n    @Bean\n    public WebClient.Builder webClientBuilder() {\n        return WebClient.builder();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.springframework.cloud.loadbalancer.core.RandomLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.env.Environment;\n\n@Configuration\npublic class PaymentServiceLoadBalancerConfig {\n\n    @Bean\n    public ReactorLoadBalancer<?> reactorLoadBalancer(Environment environment,\n                                                       LoadBalancerClientFactory loadBalancerClientFactory) {\n        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);\n        return new RandomLoadBalancer(\n                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),\n                name\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.springframework.cloud.loadbalancer.core.RoundRobinLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.env.Environment;\n\n@Configuration\npublic class InventoryServiceLoadBalancerConfig {\n\n    @Bean\n    public ReactorLoadBalancer<?> reactorLoadBalancer(Environment environment,\n                                                       LoadBalancerClientFactory loadBalancerClientFactory) {\n        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);\n        return new RoundRobinLoadBalancer(\n                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),\n                name\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.env.Environment;\n\n@Configuration\npublic class ShippingServiceLoadBalancerConfig {\n\n    @Bean\n    public ReactorLoadBalancer<?> reactorLoadBalancer(Environment environment,\n                                                       LoadBalancerClientFactory loadBalancerClientFactory) {\n        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);\n        return new ZoneAffinityLoadBalancer(\n                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),\n                name\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-load-balancer",
      children: "Custom Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ReactorServiceInstanceLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport reactor.core.publisher.Mono;\nimport java.util.Comparator;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class ZoneAffinityLoadBalancer implements ReactorServiceInstanceLoadBalancer {\n\n    private static final Logger log = LoggerFactory.getLogger(ZoneAffinityLoadBalancer.class);\n    private static final String DEFAULT_ZONE = \"us-east-1\";\n\n    private final String serviceId;\n    private final AtomicInteger index = new AtomicInteger(0);\n\n    public ZoneAffinityLoadBalancer(ServiceInstanceListSupplier serviceInstanceListSupplier,\n                                    String serviceId) {\n        this.serviceId = serviceId;\n    }\n\n    @Override\n    public Mono<Response<ServiceInstance>> choose(Request request) {\n        ServiceInstanceListSupplier supplier = null;\n        return Mono.just(Response.empty());\n    }\n\n    public ServiceInstance choose(List<ServiceInstance> instances, String preferredZone) {\n        if (instances.isEmpty()) {\n            return null;\n        }\n\n        List<ServiceInstance> zoneInstances = instances.stream()\n                .filter(inst -> {\n                    Map<String, String> metadata = inst.getMetadata();\n                    String zone = metadata.getOrDefault(\"zone\", DEFAULT_ZONE);\n                    return zone.equals(preferredZone);\n                })\n                .toList();\n\n        List<ServiceInstance> candidates = zoneInstances.isEmpty() ? instances : zoneInstances;\n\n        int pos = Math.abs(index.getAndIncrement() % candidates.size());\n        ServiceInstance selected = candidates.get(pos);\n\n        log.debug(\"Selected instance {} for service {} (zone affinity: {} -> {})\",\n                selected.getInstanceId(), serviceId, preferredZone,\n                selected.getMetadata().getOrDefault(\"zone\", \"unknown\"));\n\n        return selected;\n    }\n\n    public String getPreferredZone(ServiceInstance instance) {\n        Map<String, String> metadata = instance.getMetadata();\n        if (metadata != null && metadata.containsKey(\"zone\")) {\n            return metadata.get(\"zone\");\n        }\n        return DEFAULT_ZONE;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-weighted-load-balancer",
      children: "Custom Weighted Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.cloud.loadbalancer.core.ReactorServiceInstanceLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport reactor.core.publisher.Mono;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Random;\nimport java.util.stream.Collectors;\nimport java.util.stream.IntStream;\n\npublic class WeightedResponseTimeLoadBalancer implements ReactorServiceInstanceLoadBalancer {\n\n    private static final Logger log = LoggerFactory.getLogger(WeightedResponseTimeLoadBalancer.class);\n    private static final String WEIGHT_METADATA_KEY = \"weight\";\n\n    private final String serviceId;\n    private final Random random = new Random();\n    private final ServiceInstanceListSupplier supplier;\n\n    public WeightedResponseTimeLoadBalancer(ServiceInstanceListSupplier supplier, String serviceId) {\n        this.supplier = supplier;\n        this.serviceId = serviceId;\n    }\n\n    @Override\n    public Mono<Response<ServiceInstance>> choose(Request request) {\n        return supplier.get(request).next().map(instances -> {\n            if (instances.isEmpty()) {\n                log.warn(\"No instances available for service: {}\", serviceId);\n                return Response.empty();\n            }\n            ServiceInstance instance = weightedSelect(instances);\n            log.debug(\"Selected instance {} for service {} (weighted)\", instance.getInstanceId(), serviceId);\n            return Response.of(instance);\n        });\n    }\n\n    private ServiceInstance weightedSelect(List<ServiceInstance> instances) {\n        List<Integer> weights = instances.stream()\n                .map(inst -> {\n                    Map<String, String> metadata = inst.getMetadata();\n                    if (metadata != null && metadata.containsKey(WEIGHT_METADATA_KEY)) {\n                        try {\n                            return Math.max(1, Integer.parseInt(metadata.get(WEIGHT_METADATA_KEY)));\n                        } catch (NumberFormatException e) {\n                            return 1;\n                        }\n                    }\n                    return 1;\n                })\n                .toList();\n\n        int totalWeight = weights.stream().mapToInt(Integer::intValue).sum();\n        int randomPoint = random.nextInt(totalWeight);\n        int cumulativeWeight = 0;\n\n        for (int i = 0; i < instances.size(); i++) {\n            cumulativeWeight += weights.get(i);\n            if (randomPoint < cumulativeWeight) {\n                return instances.get(i);\n            }\n        }\n        return instances.getLast();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-instance-supplier-with-custom-metadata",
      children: "Service Instance Supplier with Custom Metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport reactor.core.publisher.Flux;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Random;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicLong;\n\npublic class HealthAwareServiceInstanceListSupplier implements ServiceInstanceListSupplier {\n\n    private final ServiceInstanceListSupplier delegate;\n    private final ConcurrentHashMap<String, AtomicLong> failureCounts = new ConcurrentHashMap<>();\n    private final ConcurrentHashMap<String, Long> circuitOpenUntil = new ConcurrentHashMap<>();\n    private static final int FAILURE_THRESHOLD = 5;\n    private static final long CIRCUIT_OPEN_DURATION_MS = 30_000;\n\n    public HealthAwareServiceInstanceListSupplier(ServiceInstanceListSupplier delegate) {\n        this.delegate = delegate;\n    }\n\n    @Override\n    public Flux<List<ServiceInstance>> get() {\n        return delegate.get().map(instances ->\n                instances.stream()\n                        .filter(this::isHealthy)\n                        .toList()\n        );\n    }\n\n    @Override\n    public Flux<List<ServiceInstance>> get(Request request) {\n        return get();\n    }\n\n    @Override\n    public String getServiceId() {\n        return delegate.getServiceId();\n    }\n\n    public void recordFailure(ServiceInstance instance) {\n        String instanceId = instance.getInstanceId();\n        failureCounts.computeIfAbsent(instanceId, k -> new AtomicLong(0));\n        long count = failureCounts.get(instanceId).incrementAndGet();\n\n        if (count >= FAILURE_THRESHOLD) {\n            circuitOpenUntil.put(instanceId, System.currentTimeMillis() + CIRCUIT_OPEN_DURATION_MS);\n            failureCounts.get(instanceId).set(0);\n        }\n    }\n\n    public void recordSuccess(ServiceInstance instance) {\n        String instanceId = instance.getInstanceId();\n        failureCounts.computeIfAbsent(instanceId, k -> new AtomicLong(0));\n        failureCounts.get(instanceId).set(0);\n    }\n\n    private boolean isHealthy(ServiceInstance instance) {\n        String instanceId = instance.getInstanceId();\n        if (!circuitOpenUntil.containsKey(instanceId)) {\n            return true;\n        }\n        long openUntil = circuitOpenUntil.get(instanceId);\n        if (System.currentTimeMillis() > openUntil) {\n            circuitOpenUntil.remove(instanceId);\n            return true;\n        }\n        return false;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eurekaclient-api-usage",
      children: "EurekaClient API Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.discovery;\n\nimport com.netflix.appinfo.InstanceInfo;\nimport com.netflix.discovery.EurekaClient;\nimport com.netflix.discovery.shared.Application;\nimport com.netflix.discovery.shared.Applications;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\n\n@Component\npublic class ServiceDiscoveryClient {\n\n    private static final Logger log = LoggerFactory.getLogger(ServiceDiscoveryClient.class);\n\n    private final EurekaClient eurekaClient;\n\n    public ServiceDiscoveryClient(EurekaClient eurekaClient) {\n        this.eurekaClient = eurekaClient;\n    }\n\n    public Optional<InstanceInfo> getServiceInstance(String serviceName) {\n        InstanceInfo instance = eurekaClient.getNextServerFromEureka(serviceName, false);\n        return Optional.ofNullable(instance);\n    }\n\n    public List<InstanceInfo> getAllServiceInstances(String serviceName) {\n        Application application = eurekaClient.getApplication(serviceName);\n        if (application == null) {\n            return List.of();\n        }\n        return application.getInstances();\n    }\n\n    public List<Application> getAllRegisteredApplications() {\n        Applications applications = eurekaClient.getApplications();\n        return applications.getRegisteredApplications();\n    }\n\n    public Map<String, List<InstanceInfo>> getServiceMap() {\n        return getAllRegisteredApplications().stream()\n                .collect(java.util.stream.Collectors.toMap(\n                        Application::getName,\n                        Application::getInstances\n                ));\n    }\n\n    public int getInstanceCount(String serviceName) {\n        return getAllServiceInstances(serviceName).size();\n    }\n\n    public long getTotalInstanceCount() {\n        return getAllRegisteredApplications().stream()\n                .mapToLong(app -> app.getInstances().size())\n                .sum();\n    }\n\n    public void refreshRegistry() {\n        eurekaClient.getApplications().getRegisteredApplications().forEach(app -> {\n            log.debug(\"Application: {} has {} instances\", app.getName(), app.getInstances().size());\n            app.getInstances().forEach(inst -> {\n                log.debug(\"  Instance: {} at {}:{} status={}\",\n                        inst.getInstanceId(), inst.getIPAddr(), inst.getPort(), inst.getStatus());\n            });\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovery-controller",
      children: "Discovery Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.web;\n\nimport com.course.microservices.order.discovery.ServiceDiscoveryClient;\nimport com.netflix.appinfo.InstanceInfo;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/discovery\")\npublic class DiscoveryController {\n\n    private final ServiceDiscoveryClient discoveryClient;\n\n    public DiscoveryController(ServiceDiscoveryClient discoveryClient) {\n        this.discoveryClient = discoveryClient;\n    }\n\n    @GetMapping(\"/services\")\n    public ResponseEntity<List<String>> getServiceNames() {\n        List<String> serviceNames = discoveryClient.getAllRegisteredApplications().stream()\n                .map(app -> app.getName())\n                .toList();\n        return ResponseEntity.ok(serviceNames);\n    }\n\n    @GetMapping(\"/services/{serviceName}\")\n    public ResponseEntity<List<InstanceInfo>> getServiceInstances(\n            @PathVariable String serviceName) {\n        List<InstanceInfo> instances = discoveryClient.getAllServiceInstances(serviceName);\n        if (instances.isEmpty()) {\n            return ResponseEntity.notFound().build();\n        }\n        return ResponseEntity.ok(instances);\n    }\n\n    @GetMapping(\"/status\")\n    public ResponseEntity<Map<String, Object>> getDiscoveryStatus() {\n        List<String> services = discoveryClient.getAllRegisteredApplications().stream()\n                .map(app -> app.getName())\n                .toList();\n        long totalInstances = discoveryClient.getTotalInstanceCount();\n        return ResponseEntity.ok(Map.of(\n                \"services\", services,\n                \"totalServices\", services.size(),\n                \"totalInstances\", totalInstances,\n                \"status\", \"UP\"\n        ));\n    }\n\n    @GetMapping(\"/debug\")\n    public ResponseEntity<Map<String, Object>> debugDiscovery() {\n        var services = discoveryClient.getServiceMap();\n        return ResponseEntity.ok(Map.of(\n                \"serviceCount\", services.size(),\n                \"services\", services\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balanced-service-client",
      children: "Load Balanced Service Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.cloud.client.loadbalancer.LoadBalancerClient;\nimport org.springframework.http.*;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.client.RestTemplate;\nimport java.util.Map;\n\n@Component\npublic class PaymentServiceClient {\n\n    private static final Logger log = LoggerFactory.getLogger(PaymentServiceClient.class);\n\n    private final RestTemplate loadBalancedRestTemplate;\n    private final LoadBalancerClient loadBalancerClient;\n    private final RestTemplate restTemplate;\n\n    public PaymentServiceClient(RestTemplate loadBalancedRestTemplate,\n                                 LoadBalancerClient loadBalancerClient,\n                                 RestTemplate restTemplate) {\n        this.loadBalancedRestTemplate = loadBalancedRestTemplate;\n        this.loadBalancerClient = loadBalancerClient;\n        this.restTemplate = restTemplate;\n    }\n\n    public PaymentResponse processPayment(PaymentRequest request) {\n        String url = \"http://payment-service/api/payments/process\";\n        ResponseEntity<PaymentResponse> response = loadBalancedRestTemplate.postForEntity(\n                url, request, PaymentResponse.class);\n        return response.getBody();\n    }\n\n    public PaymentStatusResponse getPaymentStatus(String orderId) {\n        String url = \"http://payment-service/api/payments/order/{orderId}\";\n        ResponseEntity<PaymentStatusResponse> response = loadBalancedRestTemplate.getForEntity(\n                url, PaymentStatusResponse.class, orderId);\n        return response.getBody();\n    }\n\n    public RefundResponse refundPayment(String paymentId) {\n        String url = \"http://payment-service/api/payments/refund/{paymentId}\";\n        ResponseEntity<RefundResponse> response = loadBalancedRestTemplate.exchange(\n                url, HttpMethod.POST, null, RefundResponse.class, paymentId);\n        return response.getBody();\n    }\n\n    public PaymentResponse processPaymentWithExplicitLB(PaymentRequest request) {\n        ServiceInstance instance = loadBalancerClient.choose(\"payment-service\");\n        if (instance == null) {\n            throw new IllegalStateException(\"No payment-service instances available\");\n        }\n        String url = String.format(\"http://%s:%s/api/payments/process\",\n                instance.getHost(), instance.getPort());\n        log.info(\"Using instance: {} at {}:{}\", instance.getInstanceId(), instance.getHost(), instance.getPort());\n\n        ResponseEntity<PaymentResponse> response = restTemplate.postForEntity(\n                url, request, PaymentResponse.class);\n        return response.getBody();\n    }\n\n    public record PaymentRequest(String orderId, String customerId, double amount, String currency) {}\n    public record PaymentResponse(String paymentId, String orderId, String status, String transactionReference) {}\n    public record PaymentStatusResponse(String paymentId, String orderId, String status, String paidAt) {}\n    public record RefundResponse(String refundId, String paymentId, String status, double refundedAmount) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webclient-with-load-balancer",
      children: "WebClient with Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.reactive.function.client.WebClient;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\n\n@Component\npublic class InventoryServiceWebClient {\n\n    private static final Logger log = LoggerFactory.getLogger(InventoryServiceWebClient.class);\n    private static final Duration TIMEOUT = Duration.ofSeconds(5);\n\n    private final WebClient.Builder loadBalancedWebClientBuilder;\n\n    public InventoryServiceWebClient(WebClient.Builder loadBalancedWebClientBuilder) {\n        this.loadBalancedWebClientBuilder = loadBalancedWebClientBuilder;\n    }\n\n    public Mono<InventoryResponse> checkInventory(String productId) {\n        WebClient client = loadBalancedWebClientBuilder.build();\n        return client.get()\n                .uri(\"http://inventory-service/api/inventory/{productId}\", productId)\n                .retrieve()\n                .bodyToMono(InventoryResponse.class)\n                .timeout(TIMEOUT)\n                .doOnError(e -> log.error(\"Error checking inventory for product {}: {}\", productId, e.getMessage()));\n    }\n\n    public Mono<ReservationResponse> reserveInventory(String orderId, String productId, int quantity) {\n        WebClient client = loadBalancedWebClientBuilder.build();\n        ReservationRequest request = new ReservationRequest(orderId, productId, quantity);\n        return client.post()\n                .uri(\"http://inventory-service/api/inventory/reserve\")\n                .bodyValue(request)\n                .retrieve()\n                .bodyToMono(ReservationResponse.class)\n                .timeout(TIMEOUT);\n    }\n\n    public Mono<Void> releaseInventory(String orderId, String productId, int quantity) {\n        WebClient client = loadBalancedWebClientBuilder.build();\n        ReservationRequest request = new ReservationRequest(orderId, productId, quantity);\n        return client.post()\n                .uri(\"http://inventory-service/api/inventory/release\")\n                .bodyValue(request)\n                .retrieve()\n                .bodyToMono(Void.class)\n                .timeout(TIMEOUT);\n    }\n\n    public record InventoryResponse(String productId, int availableQuantity, boolean inStock) {}\n    public record ReservationResponse(String reservationId, boolean success, String message) {}\n    public record ReservationRequest(String orderId, String productId, int quantity) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feign-client-with-load-balancer",
      children: "Feign Client with Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\nimport org.springframework.cloud.openfeign.FeignClient;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\n@FeignClient(name = \"payment-service\")\npublic interface PaymentServiceFeignClient {\n\n    @PostMapping(\"/api/payments/process\")\n    ResponseEntity<PaymentResponse> processPayment(@RequestBody PaymentRequest request);\n\n    @GetMapping(\"/api/payments/order/{orderId}\")\n    ResponseEntity<PaymentStatusResponse> getPaymentStatus(@PathVariable(\"orderId\") String orderId);\n\n    @PostMapping(\"/api/payments/refund/{paymentId}\")\n    ResponseEntity<RefundResponse> refundPayment(@PathVariable(\"paymentId\") String paymentId);\n\n    record PaymentRequest(String orderId, String customerId, double amount, String currency) {}\n    record PaymentResponse(String paymentId, String orderId, String status, String transactionReference) {}\n    record PaymentStatusResponse(String paymentId, String orderId, String status, String paidAt) {}\n    record RefundResponse(String refundId, String paymentId, String status, double refundedAmount) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-serviceinstancelistsupplier-configuration",
      children: "Custom ServiceInstanceListSupplier Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport reactor.core.publisher.Flux;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n@Configuration\npublic class CustomLoadBalancerSupplierConfig {\n\n    public static class ZoneFilteringSupplier implements ServiceInstanceListSupplier {\n\n        private final ServiceInstanceListSupplier delegate;\n        private final String targetZone;\n\n        public ZoneFilteringSupplier(ServiceInstanceListSupplier delegate, String targetZone) {\n            this.delegate = delegate;\n            this.targetZone = targetZone;\n        }\n\n        @Override\n        public Flux<List<ServiceInstance>> get() {\n            return delegate.get().map(instances ->\n                    instances.stream()\n                            .filter(inst -> targetZone.equals(\n                                    inst.getMetadata().getOrDefault(\"zone\", \"unknown\")))\n                            .collect(Collectors.toList())\n            );\n        }\n\n        @Override\n        public Flux<List<ServiceInstance>> get(Request request) {\n            return get();\n        }\n\n        @Override\n        public String getServiceId() {\n            return delegate.getServiceId();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-client---shipping-service",
      children: "Eureka Client - Shipping Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.shipping;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n\n@SpringBootApplication\n@EnableDiscoveryClient\npublic class ShippingServiceApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(ShippingServiceApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# shipping-service/src/main/resources/application.yml\nserver:\n  port: 0\n\nspring:\n  application:\n    name: shipping-service\n  datasource:\n    url: jdbc:h2:mem:shippingdb\n    driver-class-name: org.h2.Driver\n  jpa:\n    hibernate:\n      ddl-auto: create-drop\n\neureka:\n  instance:\n    prefer-ip-address: true\n    instance-id: ${spring.application.name}:${random.value}\n    lease-renewal-interval-in-seconds: 10\n    lease-expiration-duration-in-seconds: 30\n    metadata-map:\n      zone: us-east-1\n      weight: 3\n  client:\n    service-url:\n      defaultZone: http://eureka:eureka-secret@localhost:8761/eureka/\n    register-with-eureka: true\n    fetch-registry: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-client---payment-service-second-instance",
      children: "Eureka Client - Payment Service (Second Instance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# payment-service/src/main/resources/application-instance2.yml\nserver:\n  port: 0\n\nspring:\n  application:\n    name: payment-service\n\neureka:\n  instance:\n    metadata-map:\n      zone: us-west-2\n      weight: 1\n  client:\n    service-url:\n      defaultZone: http://localhost:8762/eureka/,http://localhost:8763/eureka/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "peer-aware-eureka-server-configuration",
      children: "Peer-Aware Eureka Server Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# eureka-server-peer1/src/main/resources/application.yml\nserver:\n  port: 8761\n\nspring:\n  application:\n    name: eureka-server\n\neureka:\n  instance:\n    hostname: eureka-peer1\n  client:\n    service-url:\n      defaultZone: http://eureka-peer2:8762/eureka/,http://eureka-peer3:8763/eureka/\n  server:\n    enable-self-preservation: true\n    renewal-percent-threshold: 0.85\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# eureka-server-peer2/src/main/resources/application.yml\nserver:\n  port: 8762\n\nspring:\n  application:\n    name: eureka-server\n\neureka:\n  instance:\n    hostname: eureka-peer2\n  client:\n    service-url:\n      defaultZone: http://eureka-peer1:8761/eureka/,http://eureka-peer3:8763/eureka/\n  server:\n    enable-self-preservation: true\n    renewal-percent-threshold: 0.85\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-event-listeners-for-discovery-events",
      children: "Application Event Listeners for Discovery Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.event;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.client.discovery.event.HeartbeatEvent;\nimport org.springframework.cloud.client.discovery.event.HeartbeatMonitor;\nimport org.springframework.cloud.client.discovery.event.InstanceRegisteredEvent;\nimport org.springframework.cloud.client.discovery.event.ParentHeartbeatEvent;\nimport org.springframework.context.event.EventListener;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class DiscoveryEventLogger {\n\n    private static final Logger log = LoggerFactory.getLogger(DiscoveryEventLogger.class);\n\n    @EventListener\n    public void handleInstanceRegistered(InstanceRegisteredEvent<?> event) {\n        log.info(\"Instance registered with service registry: {} (source: {})\",\n                event.getSource().getClass().getSimpleName(), event.getSource());\n    }\n\n    @EventListener\n    public void handleHeartbeat(HeartbeatEvent event) {\n        log.debug(\"Heartbeat event received: {} (status: {})\",\n                event.getSource().getClass().getSimpleName(), event.getStatus());\n    }\n\n    @EventListener\n    public void handleParentHeartbeat(ParentHeartbeatEvent event) {\n        log.trace(\"Parent heartbeat: {}\", event.getValue());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-check-indicator",
      children: "Health Check Indicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.health;\n\nimport com.netflix.discovery.EurekaClient;\nimport com.netflix.discovery.shared.transport.EurekaHttpClient;\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class EurekaHealthIndicator implements HealthIndicator {\n\n    private final EurekaClient eurekaClient;\n\n    public EurekaHealthIndicator(EurekaClient eurekaClient) {\n        this.eurekaClient = eurekaClient;\n    }\n\n    @Override\n    public Health health() {\n        try {\n            if (eurekaClient != null) {\n                boolean registered = eurekaClient.getApplicationInfoManager().getInfo() != null;\n                return Health.up()\n                        .withDetail(\"registered\", registered)\n                        .withDetail(\"status\", eurekaClient.getInstanceRemoteStatus())\n                        .build();\n            }\n            return Health.down().withDetail(\"reason\", \"EurekaClient not available\").build();\n        } catch (Exception e) {\n            return Health.down(e).withDetail(\"reason\", e.getMessage()).build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eureka-client-metadata-customizer",
      children: "Eureka Client Metadata Customizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport com.netflix.appinfo.HealthCheckHandler;\nimport com.netflix.appinfo.InstanceInfo;\nimport org.springframework.boot.actuate.health.HealthEndpoint;\nimport org.springframework.boot.actuate.health.Status;\nimport org.springframework.cloud.netflix.eureka.EurekaHealthCheckHandler;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class EurekaClientConfig {\n\n    @Bean\n    public HealthCheckHandler healthCheckHandler(HealthEndpoint healthEndpoint) {\n        return new EurekaHealthCheckHandler(healthEndpoint) {\n            @Override\n            public InstanceInfo.InstanceStatus getStatus(Status status) {\n                if (status == Status.UP || status == Status.OUT_OF_SERVICE) {\n                    return InstanceInfo.InstanceStatus.UP;\n                }\n                return InstanceInfo.InstanceStatus.DOWN;\n            }\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancer-health-check-task",
      children: "Load Balancer Health Check Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.schedule;\n\nimport com.netflix.discovery.EurekaClient;\nimport com.netflix.discovery.shared.Application;\nimport com.netflix.appinfo.InstanceInfo;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.scheduling.annotation.EnableScheduling;\nimport org.springframework.scheduling.annotation.Scheduled;\nimport org.springframework.stereotype.Component;\nimport java.util.List;\nimport java.util.concurrent.TimeUnit;\n\n@Component\n@EnableScheduling\npublic class InstanceHealthCheckTask {\n\n    private static final Logger log = LoggerFactory.getLogger(InstanceHealthCheckTask.class);\n\n    private final EurekaClient eurekaClient;\n\n    public InstanceHealthCheckTask(EurekaClient eurekaClient) {\n        this.eurekaClient = eurekaClient;\n    }\n\n    @Scheduled(fixedRate = 30, timeUnit = TimeUnit.SECONDS)\n    public void checkInstances() {\n        List<Application> applications = eurekaClient.getApplications().getRegisteredApplications();\n        for (Application app : applications) {\n            List<InstanceInfo> instances = app.getInstances();\n            long upCount = instances.stream()\n                    .filter(inst -> inst.getStatus() == InstanceInfo.InstanceStatus.UP)\n                    .count();\n            if (upCount < instances.size()) {\n                log.warn(\"Service {} has {}/{} instances UP\",\n                        app.getName(), upCount, instances.size());\n                instances.stream()\n                        .filter(inst -> inst.getStatus() != InstanceInfo.InstanceStatus.UP)\n                        .forEach(inst -> log.warn(\"  Instance {} is {}\",\n                                inst.getInstanceId(), inst.getStatus()));\n            }\n        }\n    }\n\n    @Scheduled(fixedRate = 60, timeUnit = TimeUnit.SECONDS)\n    public void logRegistrySummary() {\n        List<Application> applications = eurekaClient.getApplications().getRegisteredApplications();\n        int totalInstances = applications.stream()\n                .mapToInt(app -> app.getInstances().size())\n                .sum();\n        log.info(\"Registry summary: {} applications, {} total instances\",\n                applications.size(), totalInstances);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-tests",
      children: "Integration Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order;\n\nimport com.course.microservices.order.client.PaymentServiceClient;\nimport com.course.microservices.order.client.InventoryServiceWebClient;\nimport com.course.microservices.order.discovery.ServiceDiscoveryClient;\nimport com.netflix.appinfo.InstanceInfo;\nimport com.netflix.discovery.EurekaClient;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.cloud.client.discovery.DiscoveryClient;\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.test.context.ActiveProfiles;\nimport org.springframework.web.client.RestTemplate;\nimport java.util.List;\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@SpringBootTest\n@ActiveProfiles(\"test\")\nclass ServiceDiscoveryIntegrationTest {\n\n    @Autowired\n    private EurekaClient eurekaClient;\n\n    @Autowired\n    private DiscoveryClient discoveryClient;\n\n    @Autowired\n    private ServiceDiscoveryClient serviceDiscoveryClient;\n\n    @Autowired\n    private RestTemplate loadBalancedRestTemplate;\n\n    @Test\n    void shouldDiscoverServices() {\n        List<String> services = discoveryClient.getServices();\n        assertThat(services).isNotEmpty();\n    }\n\n    @Test\n    void shouldGetServiceInstances() {\n        List<ServiceInstance> instances = discoveryClient.getInstances(\"order-service\");\n        assertThat(instances).isNotEmpty();\n    }\n\n    @Test\n    void shouldGetInstanceDetails() {\n        List<InstanceInfo> instances = serviceDiscoveryClient.getAllServiceInstances(\"order-service\");\n        assertThat(instances).isNotEmpty();\n        InstanceInfo instance = instances.get(0);\n        assertThat(instance.getAppName()).isEqualTo(\"ORDER-SERVICE\");\n        assertThat(instance.getStatus()).isIn(\n                InstanceInfo.InstanceStatus.UP,\n                InstanceInfo.InstanceStatus.STARTING\n        );\n    }\n\n    @Test\n    void shouldGetMetadataFromInstance() {\n        List<InstanceInfo> instances = serviceDiscoveryClient.getAllServiceInstances(\"order-service\");\n        assertThat(instances).isNotEmpty();\n        InstanceInfo instance = instances.get(0);\n        assertThat(instance.getMetadata()).containsKey(\"zone\");\n    }\n\n    @Test\n    void shouldUseLoadBalancedRestTemplate() {\n        assertThat(loadBalancedRestTemplate).isNotNull();\n    }\n\n    @Test\n    void shouldReturnRegistryStatus() {\n        var status = serviceDiscoveryClient.getServiceMap();\n        assertThat(status).isNotNull();\n        assertThat(status).containsKey(\"ORDER-SERVICE\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unit-tests-for-custom-load-balancer",
      children: "Unit Tests for Custom Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.config;\n\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.cloud.client.ServiceInstance;\nimport java.net.URI;\nimport java.util.List;\nimport java.util.Map;\nimport static org.assertj.core.api.Assertions.assertThat;\n\nclass ZoneAffinityLoadBalancerTest {\n\n    private ZoneAffinityLoadBalancer loadBalancer;\n\n    @BeforeEach\n    void setUp() {\n        loadBalancer = new ZoneAffinityLoadBalancer(null, \"test-service\");\n    }\n\n    @Test\n    void shouldSelectPreferredZone() {\n        List<ServiceInstance> instances = List.of(\n                instance(\"inst-1\", \"us-east-1\"),\n                instance(\"inst-2\", \"us-east-1\"),\n                instance(\"inst-3\", \"us-west-2\")\n        );\n\n        ServiceInstance selected = loadBalancer.choose(instances, \"us-east-1\");\n        assertThat(selected.getMetadata().get(\"zone\")).isEqualTo(\"us-east-1\");\n    }\n\n    @Test\n    void shouldFallbackWhenNoZoneMatch() {\n        List<ServiceInstance> instances = List.of(\n                instance(\"inst-1\", \"eu-west-1\"),\n                instance(\"inst-2\", \"eu-west-1\")\n        );\n\n        ServiceInstance selected = loadBalancer.choose(instances, \"us-east-1\");\n        assertThat(selected).isNotNull();\n    }\n\n    @Test\n    void shouldReturnNullForEmptyInstances() {\n        ServiceInstance selected = loadBalancer.choose(List.of(), \"us-east-1\");\n        assertThat(selected).isNull();\n    }\n\n    @Test\n    void shouldRoundRobinWithinZone() {\n        List<ServiceInstance> instances = List.of(\n                instance(\"inst-1\", \"us-east-1\"),\n                instance(\"inst-2\", \"us-east-1\")\n        );\n\n        ServiceInstance first = loadBalancer.choose(instances, \"us-east-1\");\n        ServiceInstance second = loadBalancer.choose(instances, \"us-east-1\");\n        assertThat(first.getInstanceId()).isNotEqualTo(second.getInstanceId());\n    }\n\n    private ServiceInstance instance(String id, String zone) {\n        return new ServiceInstance() {\n            @Override\n            public String getServiceId() { return \"test-service\"; }\n            @Override\n            public String getHost() { return \"localhost\"; }\n            @Override\n            public int getPort() { return 8080; }\n            @Override\n            public boolean isSecure() { return false; }\n            @Override\n            public URI getUri() { return URI.create(\"http://localhost:8080\"); }\n            @Override\n            public Map<String, String> getMetadata() { return Map.of(\"zone\", zone); }\n            @Override\n            public String getInstanceId() { return id; }\n            @Override\n            public String getScheme() { return \"http\"; }\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "third-party-registration-pattern-kubernetes",
      children: "Third-Party Registration Pattern (Kubernetes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# kubernetes/eureka-client-sidecar.yml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: eureka-sidecar\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: eureka-sidecar\n  template:\n    metadata:\n      labels:\n        app: eureka-sidecar\n    spec:\n      containers:\n      - name: eureka-sidecar\n        image: springcloud/spring-cloud-kubernetes-sidecar:3.0.0\n        env:\n        - name: SPRING_CLOUD_DISCOVERY_ENABLED\n          value: \"true\"\n        - name: SPRING_CLOUD_KUBERNETES_DISCOVERY_ENABLED\n          value: \"true\"\n        - name: EUREKA_CLIENT_SERVICEURL_DEFAULTZONE\n          value: \"http://eureka-0.eureka:8761/eureka/\"\n        ports:\n        - containerPort: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-compose-for-eureka-cluster",
      children: "Docker Compose for Eureka Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: '3.8'\nservices:\n  eureka-peer1:\n    image: eureka-server:latest\n    ports:\n      - \"8761:8761\"\n    environment:\n      - EUREKA_INSTANCE_HOSTNAME=eureka-peer1\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer2:8762/eureka/,http://eureka-peer3:8763/eureka/\n    networks:\n      - discovery-net\n\n  eureka-peer2:\n    image: eureka-server:latest\n    ports:\n      - \"8762:8762\"\n    environment:\n      - EUREKA_INSTANCE_HOSTNAME=eureka-peer2\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer1:8761/eureka/,http://eureka-peer3:8763/eureka/\n    networks:\n      - discovery-net\n\n  eureka-peer3:\n    image: eureka-server:latest\n    ports:\n      - \"8763:8763\"\n    environment:\n      - EUREKA_INSTANCE_HOSTNAME=eureka-peer3\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer1:8761/eureka/,http://eureka-peer2:8762/eureka/\n    networks:\n      - discovery-net\n\n  order-service:\n    build: ./order-service\n    ports:\n      - \"0:8080\"\n    environment:\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-peer1:8761/eureka/,http://eureka-peer2:8762/eureka/,http://eureka-peer3:8763/eureka/\n    depends_on:\n      - eureka-peer1\n      - eureka-peer2\n      - eureka-peer3\n    networks:\n      - discovery-net\n\nnetworks:\n  discovery-net:\n    driver: bridge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actuator-endpoints-for-eureka",
      children: "Actuator Endpoints for Eureka"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,eureka\n  endpoint:\n    eureka:\n      enabled: true\n    health:\n      show-details: always\n  info:\n    env:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eureka Server"
        }), " acts as the service registry; services register with it and discover other services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eureka Client"
        }), " handles self-registration, heartbeats, and instance lookup; configured via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableDiscoveryClient"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Preservation"
        }), " prevents premature instance eviction during network partitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Cloud LoadBalancer"
        }), " provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RoundRobinLoadBalancer"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RandomLoadBalancer"
        }), " — the replacement for Netflix Ribbon"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "@LoadBalanced RestTemplate"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WebClient.Builder"
        }), " enable load-balanced inter-service calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client-Side Discovery"
        }), " has the client query the registry; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Server-Side Discovery"
        }), " uses an intermediary load balancer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Registration"
        }), " is the default with Eureka Client; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Third-Party Registration"
        }), " uses a separate registrar like Kubernetes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Eureka Server Setup"
          }), ": Create a three-node Eureka cluster with peer awareness. Configure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "register-with-eureka: true"
          }), " so peers replicate registrations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Metadata"
          }), ": Configure instance metadata for each service instance including zone, version, environment, and weight. Retrieve this metadata in a consuming service."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Load Balancer"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LeastConnectionsLoadBalancer"
          }), " that selects the instance with the fewest active connections. Use it for the payment-service."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service Discovery API"
          }), ": Write a REST controller that exposes an API to query registered services, instance details, and health status from Eureka."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Load Balanced WebClient"
          }), ": Implement a reactive client for the inventory service using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WebClient.Builder"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@LoadBalanced"
          }), " and test it with multiple instances."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Third-Party Registration"
          }), ": Research and write a configuration for Spring Cloud Kubernetes to register pods with an external Eureka server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Failure Simulation"
          }), ": Write a test that starts multiple instances of a service, stops one, and verifies that the load balancer routes only to healthy instances."]
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