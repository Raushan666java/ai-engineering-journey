"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3877],{

/***/ 73362
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_13_actuator_devtools_md_f09_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-13-actuator-devtools-md-f09.json
const site_docs_courses_java_13_actuator_devtools_md_f09_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/13-actuator-devtools","title":"Actuator, DevTools & Monitoring","description":"Previous Logging, Error Handling & i18n","source":"@site/docs/courses/java/13-actuator-devtools.md","sourceDirName":"courses/java","slug":"/java/13-actuator-devtools","permalink":"/ai-engineering-journey/java/13-actuator-devtools","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-actuator-devtools","slug":"/java/13-actuator-devtools","title":"Actuator, DevTools & Monitoring","sidebar_label":"Actuator, DevTools & Monitoring","sidebar_position":13},"sidebar":"course-java","previous":{"title":"Application Properties & Configuration","permalink":"/ai-engineering-journey/java/12-configuration"},"next":{"title":"Logging, Error Handling & Internationalization","permalink":"/ai-engineering-journey/java/14-logging-error-i18n"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/13-actuator-devtools.md


const frontMatter = {
	id: '13-actuator-devtools',
	slug: '/java/13-actuator-devtools',
	title: 'Actuator, DevTools & Monitoring',
	sidebar_label: 'Actuator, DevTools & Monitoring',
	sidebar_position: 13
};
const contentTitle = 'Actuator, DevTools & Monitoring';

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
  "value": "1. Theory",
  "id": "1-theory",
  "level": 2
}, {
  "value": "1.1 Introduction to Spring Boot Actuator",
  "id": "11-introduction-to-spring-boot-actuator",
  "level": 3
}, {
  "value": "1.2 Core Actuator Endpoints Reference",
  "id": "12-core-actuator-endpoints-reference",
  "level": 3
}, {
  "value": "1.3 Enabling and Exposing Endpoints",
  "id": "13-enabling-and-exposing-endpoints",
  "level": 3
}, {
  "value": "1.3.1 Configuration Properties",
  "id": "131-configuration-properties",
  "level": 4
}, {
  "value": "1.3.2 Sensitive Content Protection",
  "id": "132-sensitive-content-protection",
  "level": 4
}, {
  "value": "1.4 The /actuator/health Endpoint",
  "id": "14-the-actuatorhealth-endpoint",
  "level": 3
}, {
  "value": "1.4.1 Health Status Hierarchy",
  "id": "141-health-status-hierarchy",
  "level": 4
}, {
  "value": "1.4.2 Custom HealthIndicator",
  "id": "142-custom-healthindicator",
  "level": 4
}, {
  "value": "1.4.3 HealthIndicator with Status Details",
  "id": "143-healthindicator-with-status-details",
  "level": 4
}, {
  "value": "1.4.4 ReactiveHealthIndicator",
  "id": "144-reactivehealthindicator",
  "level": 4
}, {
  "value": "1.4.5 Composite Health",
  "id": "145-composite-health",
  "level": 4
}, {
  "value": "1.5 The /actuator/info Endpoint",
  "id": "15-the-actuatorinfo-endpoint",
  "level": 3
}, {
  "value": "1.5.1 Static Info Properties",
  "id": "151-static-info-properties",
  "level": 4
}, {
  "value": "1.5.2 Build Info Contributor",
  "id": "152-build-info-contributor",
  "level": 4
}, {
  "value": "1.5.3 Git Info Contributor",
  "id": "153-git-info-contributor",
  "level": 4
}, {
  "value": "1.5.4 Custom InfoContributor",
  "id": "154-custom-infocontributor",
  "level": 4
}, {
  "value": "1.6 The /actuator/metrics Endpoint",
  "id": "16-the-actuatormetrics-endpoint",
  "level": 3
}, {
  "value": "1.6.1 Listing Available Metrics",
  "id": "161-listing-available-metrics",
  "level": 4
}, {
  "value": "1.6.2 Viewing Specific Metric",
  "id": "162-viewing-specific-metric",
  "level": 4
}, {
  "value": "1.6.3 Custom Metrics with @Counted and @Timed",
  "id": "163-custom-metrics-with-counted-and-timed",
  "level": 4
}, {
  "value": "1.6.4 Using @Counted",
  "id": "164-using-counted",
  "level": 4
}, {
  "value": "1.6.5 Using @Timed",
  "id": "165-using-timed",
  "level": 4
}, {
  "value": "1.6.6 Programmatic Meter Registration",
  "id": "166-programmatic-meter-registration",
  "level": 4
}, {
  "value": "1.6.7 Gauge for Point-in-Time Values",
  "id": "167-gauge-for-point-in-time-values",
  "level": 4
}, {
  "value": "1.7 The /actuator/env Endpoint",
  "id": "17-the-actuatorenv-endpoint",
  "level": 3
}, {
  "value": "1.8 The /actuator/beans Endpoint",
  "id": "18-the-actuatorbeans-endpoint",
  "level": 3
}, {
  "value": "1.9 The /actuator/configprops Endpoint",
  "id": "19-the-actuatorconfigprops-endpoint",
  "level": 3
}, {
  "value": "1.10 The /actuator/loggers Endpoint",
  "id": "110-the-actuatorloggers-endpoint",
  "level": 3
}, {
  "value": "1.10.1 Viewing Logger Configurations",
  "id": "1101-viewing-logger-configurations",
  "level": 4
}, {
  "value": "1.10.2 Changing Log Level at Runtime",
  "id": "1102-changing-log-level-at-runtime",
  "level": 4
}, {
  "value": "1.11 Endpoint /actuator/shutdown",
  "id": "111-endpoint-actuatorshutdown",
  "level": 3
}, {
  "value": "1.12 Endpoint /actuator/heapdump",
  "id": "112-endpoint-actuatorheapdump",
  "level": 3
}, {
  "value": "1.13 Endpoint /actuator/threaddump",
  "id": "113-endpoint-actuatorthreaddump",
  "level": 3
}, {
  "value": "1.14 Endpoint /actuator/mappings",
  "id": "114-endpoint-actuatormappings",
  "level": 3
}, {
  "value": "1.15 Endpoint /actuator/scheduledtasks",
  "id": "115-endpoint-actuatorscheduledtasks",
  "level": 3
}, {
  "value": "1.16 Custom Actuator Endpoints",
  "id": "116-custom-actuator-endpoints",
  "level": 3
}, {
  "value": "1.16.1 @Endpoint with @ReadOperation",
  "id": "1161-endpoint-with-readoperation",
  "level": 4
}, {
  "value": "1.16.2 @WriteOperation",
  "id": "1162-writeoperation",
  "level": 4
}, {
  "value": "1.16.3 @DeleteOperation",
  "id": "1163-deleteoperation",
  "level": 4
}, {
  "value": "1.16.4 Reactive Endpoint",
  "id": "1164-reactive-endpoint",
  "level": 4
}, {
  "value": "1.17 JMX vs HTTP Endpoint Exposure",
  "id": "117-jmx-vs-http-endpoint-exposure",
  "level": 3
}, {
  "value": "1.17.1 JMX Endpoints",
  "id": "1171-jmx-endpoints",
  "level": 4
}, {
  "value": "1.17.2 HTTP Endpoints",
  "id": "1172-http-endpoints",
  "level": 4
}, {
  "value": "1.17.3 CORS Configuration for Actuator",
  "id": "1173-cors-configuration-for-actuator",
  "level": 4
}, {
  "value": "1.18 Securing Actuator Endpoints",
  "id": "118-securing-actuator-endpoints",
  "level": 3
}, {
  "value": "1.18.1 With Spring Security",
  "id": "1181-with-spring-security",
  "level": 4
}, {
  "value": "1.18.2 Role-Based Access",
  "id": "1182-role-based-access",
  "level": 4
}, {
  "value": "1.19 Spring Boot DevTools",
  "id": "119-spring-boot-devtools",
  "level": 3
}, {
  "value": "1.19.1 Automatic Restart",
  "id": "1191-automatic-restart",
  "level": 4
}, {
  "value": "1.19.2 LiveReload",
  "id": "1192-livereload",
  "level": 4
}, {
  "value": "1.19.3 DevTools Property Defaults",
  "id": "1193-devtools-property-defaults",
  "level": 4
}, {
  "value": "1.19.4 Conditional DevTools Configuration",
  "id": "1194-conditional-devtools-configuration",
  "level": 4
}, {
  "value": "1.19.5 Global DevTools Settings",
  "id": "1195-global-devtools-settings",
  "level": 4
}, {
  "value": "1.19.6 Remote Debugging with DevTools",
  "id": "1196-remote-debugging-with-devtools",
  "level": 4
}, {
  "value": "1.19.7 Remote Debugging with Standard JPDA",
  "id": "1197-remote-debugging-with-standard-jpda",
  "level": 4
}, {
  "value": "1.19.8 DevTools in Docker Compose",
  "id": "1198-devtools-in-docker-compose",
  "level": 4
}, {
  "value": "1.19.9 Remote Restart Tunnel",
  "id": "1199-remote-restart-tunnel",
  "level": 4
}, {
  "value": "1.20 Excluding DevTools from the Production Build",
  "id": "120-excluding-devtools-from-the-production-build",
  "level": 3
}, {
  "value": "1.21 Complete Secure Actuator Example",
  "id": "121-complete-secure-actuator-example",
  "level": 3
}, {
  "value": "1.22 Prometheus and Grafana Integration",
  "id": "122-prometheus-and-grafana-integration",
  "level": 3
}, {
  "value": "1.23 Custom Health Aggregator",
  "id": "123-custom-health-aggregator",
  "level": 3
}, {
  "value": "1.24 Metrics with @Timed on All Endpoints",
  "id": "124-metrics-with-timed-on-all-endpoints",
  "level": 3
}, {
  "value": "1.25 Excluding Specific Metrics",
  "id": "125-excluding-specific-metrics",
  "level": 3
}, {
  "value": "1.26 Custom Actuator Endpoint with Filtering",
  "id": "126-custom-actuator-endpoint-with-filtering",
  "level": 3
}, {
  "value": "1.27 Complete DevTools Configuration for Development",
  "id": "127-complete-devtools-configuration-for-development",
  "level": 3
}, {
  "value": "1.28 Disabling DevTools in Production",
  "id": "128-disabling-devtools-in-production",
  "level": 3
}, {
  "value": "1.29 Best Practices",
  "id": "129-best-practices",
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
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Health Indicators",
  "id": "exercise-1-health-indicators",
  "level": 3
}, {
  "value": "Exercise 2: Custom Actuator Endpoint",
  "id": "exercise-2-custom-actuator-endpoint",
  "level": 3
}, {
  "value": "Exercise 3: Business Metrics",
  "id": "exercise-3-business-metrics",
  "level": 3
}, {
  "value": "Exercise 4: Info Contributors",
  "id": "exercise-4-info-contributors",
  "level": 3
}, {
  "value": "Exercise 5: Log Management",
  "id": "exercise-5-log-management",
  "level": 3
}, {
  "value": "Exercise 6: Secure Actuator",
  "id": "exercise-6-secure-actuator",
  "level": 3
}, {
  "value": "Exercise 7: DevTools Configuration",
  "id": "exercise-7-devtools-configuration",
  "level": 3
}, {
  "value": "Exercise 8: Remote Debugging",
  "id": "exercise-8-remote-debugging",
  "level": 3
}, {
  "value": "Exercise 9: Custom Metrics with Timer",
  "id": "exercise-9-custom-metrics-with-timer",
  "level": 3
}, {
  "value": "Exercise 10: Full Monitoring Dashboard",
  "id": "exercise-10-full-monitoring-dashboard",
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
    h4: "h4",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "actuator-devtools--monitoring",
        children: "Actuator, DevTools & Monitoring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/12-configuration",
          children: "Application Properties & Configuration"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/14-logging-error-i18n",
          children: "Logging, Error Handling & i18n"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/java/13-actuator-devtools/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/13-actuator-devtools/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/13-actuator-devtools/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/13-actuator-devtools/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/13-actuator-devtools/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/13-actuator-devtools/visual-explanation.png",
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
        children: "Expose and configure Spring Boot Actuator endpoints for production monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and interpret key actuator endpoints: health, info, metrics, env, beans, configprops, loggers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write custom actuator endpoints with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Endpoint"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ReadOperation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WriteOperation"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DeleteOperation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build custom health indicators with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HealthIndicator"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReactiveHealthIndicator"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish custom application metrics using Micrometer annotations ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Counted"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Timed"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure info contributors for build and environment metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure actuator endpoints with Spring Security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Spring Boot DevTools for live reload and automatic restart during development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure remote debugging with DevTools for containerized environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand JMX vs HTTP endpoint exposure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Actuator Endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/health, /info, /metrics, /env, /beans, /configprops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expose only what's needed in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Indicators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom HealthIndicator with health status aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component-level health checks for dependency services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micrometer Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Counted, @Timed with dimensional metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish to Prometheus, Datadog, or Graphite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevTools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live reload, automatic restart, remote debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include DevTools only in development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Info Contributors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build info, git info, environment info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add build metadata via spring-boot-maven-plugin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Actuator Overview] --> B[Health & Info]\n    B --> C[Metrics & Monitoring]\n    C --> D[Custom Endpoints]\n    D --> E[Securing Actuator]\n    E --> F[DevTools Live Reload]\n    F --> G[Remote Debugging]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Never expose sensitive actuator endpoints (/env, /configprops, /dump) in production without authentication. Use Spring Security or management port separation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-theory",
      children: "1. Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/13-actuator-devtools.png",
        alt: "Actuator & DevTools Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-introduction-to-spring-boot-actuator",
      children: "1.1 Introduction to Spring Boot Actuator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Actuator is a production-grade tool for monitoring and managing Spring Boot applications. It exposes operational information such as health, metrics, environment properties, thread dumps, and more via HTTP endpoints or JMX MBeans."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actuator is not just for production. It is also useful in development and staging environments for debugging and verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding the actuator dependency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "implementation 'org.springframework.boot:spring-boot-starter-actuator'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-core-actuator-endpoints-reference",
      children: "1.2 Core Actuator Endpoints Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actuator provides many built-in endpoints. Here is the complete reference:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "health"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/health"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application health information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary application information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application metrics (Micrometer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "env"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/env"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment property sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "beans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/beans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete list of Spring beans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "configprops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/configprops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties beans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "loggers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/loggers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logger configuration and levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shutdown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/shutdown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gracefully shutdown the application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "heapdump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/heapdump"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JVM heap dump (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".hprof"
            }), " file)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threaddump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/threaddump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JVM thread dump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mappings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/mappings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request mapping paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scheduledtasks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/scheduledtasks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduled task details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "caches"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/caches"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache statistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "conditions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/conditions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configuration conditions report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "integrationgraph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/integrationgraph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Integration graph"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-enabling-and-exposing-endpoints",
      children: "1.3 Enabling and Exposing Endpoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, only the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "health"
      }), " endpoint is exposed over HTTP. All others are exposed via JMX."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-configuration-properties",
      children: "1.3.1 Configuration Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,env\n        exclude: shutdown\n    jmx:\n      exposure:\n        include: \"*\"    # Expose all via JMX\n\n  endpoint:\n    health:\n      show-details: always\n      show-components: always\n    env:\n      show-values: always    # Shows actual property values (not just keys)\n    configprops:\n      show-values: always    # Shows configuration property values\n    shutdown:\n      enabled: true          # Enable shutdown endpoint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties alternative\nmanagement.endpoints.web.exposure.include=health,info,metrics,env\nmanagement.endpoints.web.exposure.exclude=shutdown\nmanagement.endpoints.jmx.exposure.include=*\nmanagement.endpoint.health.show-details=always\nmanagement.endpoint.env.show-values=always\nmanagement.endpoint.configprops.show-values=always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-sensitive-content-protection",
      children: "1.3.2 Sensitive Content Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In production, you should NEVER set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "show-values=always"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "show-details=always"
      }), " without proper security. Instead, use:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoint:\n    health:\n      show-details: when-authorized\n    env:\n      show-values: when-authorized\n    configprops:\n      show-values: when-authorized\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "And configure who is authorized:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-the-actuatorhealth-endpoint",
      children: "1.4 The /actuator/health Endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The health endpoint aggregates health information from all registered ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HealthIndicator"
      }), " beans."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"status\": \"UP\",\n  \"components\": {\n    \"db\": {\n      \"status\": \"UP\",\n      \"details\": {\n        \"database\": \"PostgreSQL\",\n        \"validationQuery\": \"SELECT 1\"\n      }\n    },\n    \"diskSpace\": {\n      \"status\": \"UP\",\n      \"details\": {\n        \"total\": 499963170816,\n        \"free\": 205972684800,\n        \"threshold\": 10485760,\n        \"path\": \"/\"\n      }\n    },\n    \"ping\": {\n      \"status\": \"UP\"\n    },\n    \"redis\": {\n      \"status\": \"UP\",\n      \"details\": {\n        \"version\": \"7.2.0\"\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-health-status-hierarchy",
      children: "1.4.1 Health Status Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Health status forms a hierarchy from worst to best:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DOWN → OUT_OF_SERVICE → UNKNOWN → UP\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If any component reports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOWN"
      }), ", the overall status becomes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOWN"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-custom-healthindicator",
      children: "1.4.2 Custom HealthIndicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a custom health indicator for any external service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.health;\n\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ExternalApiHealthIndicator implements HealthIndicator {\n\n    private final ExternalApiClient externalApiClient;\n\n    public ExternalApiHealthIndicator(ExternalApiClient externalApiClient) {\n        this.externalApiClient = externalApiClient;\n    }\n\n    @Override\n    public Health health() {\n        try {\n            boolean isReachable = externalApiClient.ping();\n            if (isReachable) {\n                return Health.up()\n                        .withDetail(\"apiUrl\", externalApiClient.getBaseUrl())\n                        .withDetail(\"latencyMs\", externalApiClient.measureLatency())\n                        .withDetail(\"version\", \"v2\")\n                        .build();\n            } else {\n                return Health.down()\n                        .withDetail(\"apiUrl\", externalApiClient.getBaseUrl())\n                        .withDetail(\"error\", \"API returned unhealthy status\")\n                        .build();\n            }\n        } catch (Exception e) {\n            return Health.down()\n                    .withDetail(\"apiUrl\", externalApiClient.getBaseUrl())\n                    .withDetail(\"error\", e.getMessage())\n                    .build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-healthindicator-with-status-details",
      children: "1.4.3 HealthIndicator with Status Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.health;\n\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.boot.actuate.health.Status;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class DatabaseMigrationHealthIndicator implements HealthIndicator {\n\n    private final DatabaseMigrationService migrationService;\n\n    public DatabaseMigrationHealthIndicator(DatabaseMigrationService migrationService) {\n        this.migrationService = migrationService;\n    }\n\n    @Override\n    public Health health() {\n        long pendingMigrations = migrationService.countPendingMigrations();\n\n        if (pendingMigrations == 0) {\n            return Health.up()\n                    .withDetail(\"message\", \"All migrations are up to date\")\n                    .withDetail(\"applied\", migrationService.countAppliedMigrations())\n                    .build();\n        }\n\n        if (pendingMigrations < 5) {\n            return Health.status(new Status(\"WARN\", \"Migrations pending\"))\n                    .withDetail(\"pending\", pendingMigrations)\n                    .withDetail(\"applied\", migrationService.countAppliedMigrations())\n                    .withDetail(\"action\", \"Run pending migrations soon\")\n                    .build();\n        }\n\n        return Health.down()\n                .withDetail(\"pending\", pendingMigrations)\n                .withDetail(\"applied\", migrationService.countAppliedMigrations())\n                .withDetail(\"action\", \"Run migrations immediately\")\n                .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-reactivehealthindicator",
      children: "1.4.4 ReactiveHealthIndicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For reactive applications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.health;\n\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.ReactiveHealthIndicator;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\n\n@Component\npublic class ReactiveDatabaseHealthIndicator implements ReactiveHealthIndicator {\n\n    private final ReactiveDatabaseClient databaseClient;\n\n    public ReactiveDatabaseHealthIndicator(ReactiveDatabaseClient databaseClient) {\n        this.databaseClient = databaseClient;\n    }\n\n    @Override\n    public Mono<Health> health() {\n        return databaseClient.validateConnection()\n                .map(result -> Health.up()\n                        .withDetail(\"database\", \"MongoDB\")\n                        .withDetail(\"latency\", result.getLatencyMs() + \"ms\")\n                        .withDetail(\"version\", result.getVersion())\n                        .build())\n                .onErrorResume(e -> Mono.just(\n                        Health.down(e)\n                                .withDetail(\"error\", e.getMessage())\n                                .build()\n                ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "145-composite-health",
      children: "1.4.5 Composite Health"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine multiple indicators into a logical group:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.health;\n\nimport org.springframework.boot.actuate.health.CompositeHealthContributor;\nimport org.springframework.boot.actuate.health.HealthContributor;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.stereotype.Component;\n\nimport java.util.LinkedHashMap;\nimport java.util.Map;\n\n@Component\npublic class DatabaseClusterHealthContributor implements CompositeHealthContributor {\n\n    private final Map<String, HealthContributor> contributors = new LinkedHashMap<>();\n\n    public DatabaseClusterHealthContributor(\n            DatabaseHealthIndicator primary,\n            DatabaseHealthIndicator replica1,\n            DatabaseHealthIndicator replica2) {\n        contributors.put(\"primary\", primary);\n        contributors.put(\"replica-1\", replica1);\n        contributors.put(\"replica-2\", replica2);\n    }\n\n    @Override\n    public HealthContributor getContributor(String name) {\n        return contributors.get(name);\n    }\n\n    @Override\n    public Iterator<NamedContributor<HealthContributor>> iterator() {\n        return contributors.entrySet().stream()\n                .map(entry -> NamedContributor.of(entry.getKey(), entry.getValue()))\n                .iterator();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-the-actuatorinfo-endpoint",
      children: "1.5 The /actuator/info Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The info endpoint exposes arbitrary application information, often build metadata and environment details."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-static-info-properties",
      children: "1.5.1 Static Info Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\ninfo:\n  application:\n    name: \"@project.name@\"\n    description: \"@project.description@\"\n    version: \"@project.version@\"\n    java-version: \"@java.version@\"\n  contact:\n    name: Operations Team\n    email: ops@example.com\n  build:\n    artifact: \"@project.artifactId@\"\n    group: \"@project.groupId@\"\n    time: \"@build.timestamp@\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Very important"
      }), ": Property placeholders like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@project.name@"
      }), " are resolved at build time by Maven/Gradle resource filtering. This requires resource filtering enabled in your build config."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "152-build-info-contributor",
      children: "1.5.2 Build Info Contributor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the Maven/Gradle plugin to generate build info:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <goals>\n                <goal>build-info</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "springBoot {\n    buildInfo()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "META-INF/build-info.properties"
      }), " which the actuator auto-detects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "153-git-info-contributor",
      children: "1.5.3 Git Info Contributor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git-commit-id-plugin"
      }), " to expose git information:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>io.github.git-commit-id</groupId>\n    <artifactId>git-commit-id-maven-plugin</artifactId>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "plugins {\n    id \"com.gorylenko.gradle-git-properties\" version \"2.4.1\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git.properties"
      }), " which the actuator uses to populate git info."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "154-custom-infocontributor",
      children: "1.5.4 Custom InfoContributor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.info;\n\nimport org.springframework.boot.actuate.info.Info;\nimport org.springframework.boot.actuate.info.InfoContributor;\nimport org.springframework.stereotype.Component;\n\nimport java.lang.management.ManagementFactory;\nimport java.lang.management.RuntimeMXBean;\nimport java.time.Duration;\nimport java.time.Instant;\n\n@Component\npublic class RuntimeInfoContributor implements InfoContributor {\n\n    @Override\n    public void contribute(Info.Builder builder) {\n        RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();\n        Instant startTime = Instant.ofEpochMilli(runtime.getStartTime());\n        Duration uptime = Duration.ofMillis(runtime.getUptime());\n\n        builder.withDetail(\"runtime\", Map.of(\n                \"startTime\", startTime.toString(),\n                \"uptime\", uptime.toHours() + \"h \" +\n                          uptime.toMinutesPart() + \"m \" +\n                          uptime.toSecondsPart() + \"s\",\n                \"uptimeSeconds\", runtime.getUptime() / 1000,\n                \"vmName\", runtime.getVmName(),\n                \"vmVersion\", runtime.getVmVersion(),\n                \"inputArguments\", runtime.getInputArguments()\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-the-actuatormetrics-endpoint",
      children: "1.6 The /actuator/metrics Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metrics provides access to Micrometer application metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "161-listing-available-metrics",
      children: "1.6.1 Listing Available Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/metrics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"names\": [\n    \"jvm.memory.used\",\n    \"jvm.memory.max\",\n    \"jvm.gc.pause\",\n    \"http.server.requests\",\n    \"process.cpu.usage\",\n    \"system.cpu.usage\",\n    \"logback.events\",\n    \"application.ready.time\",\n    \"application.started.time\"\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "162-viewing-specific-metric",
      children: "1.6.2 Viewing Specific Metric"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/metrics/http.server.requests\ncurl \"http://localhost:8080/actuator/metrics/http.server.requests?tag=uri:/api/orders&tag=status:200\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "163-custom-metrics-with-counted-and-timed",
      children: "1.6.3 Custom Metrics with @Counted and @Timed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "micrometer-core"
      }), " dependency (it's included in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-actuator"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>io.micrometer</groupId>\n    <artifactId>micrometer-core</artifactId>\n</dependency>\n<dependency>\n    <groupId>io.micrometer</groupId>\n    <artifactId>micrometer-tracing-bridge-brave</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enable aspect-oriented metrics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.config;\n\nimport io.micrometer.core.aop.CountedAspect;\nimport io.micrometer.core.aop.TimedAspect;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration(proxyBeanMethods = false)\npublic class MetricsConfig {\n\n    @Bean\n    public CountedAspect countedAspect(MeterRegistry registry) {\n        return new CountedAspect(registry);\n    }\n\n    @Bean\n    public TimedAspect timedAspect(MeterRegistry registry) {\n        return new TimedAspect(registry);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "164-using-counted",
      children: "1.6.4 Using @Counted"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Track invocation counts and error counts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.service;\n\nimport io.micrometer.core.annotation.Counted;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class OrderService {\n\n    @Counted(\n        value = \"orders.created\",\n        description = \"Number of orders created\",\n        extraTags = {\"service\", \"order-service\"}\n    )\n    public Order createOrder(OrderRequest request) {\n        // business logic\n        Order order = new Order(request);\n        orderRepository.save(order);\n        return order;\n    }\n\n    @Counted(\n        value = \"orders.cancelled\",\n        description = \"Number of orders cancelled\",\n        recordFailuresOnly = false\n    )\n    public void cancelOrder(Long orderId) {\n        Order order = orderRepository.findById(orderId)\n                .orElseThrow(() -> new OrderNotFoundException(orderId));\n        order.setStatus(OrderStatus.CANCELLED);\n        orderRepository.save(order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "165-using-timed",
      children: "1.6.5 Using @Timed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Measure execution time of methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.service;\n\nimport io.micrometer.core.annotation.Timed;\nimport org.springframework.stereotype.Service;\n\nimport java.util.concurrent.TimeUnit;\n\n@Service\npublic class PaymentService {\n\n    @Timed(\n        value = \"payment.processing\",\n        description = \"Time taken to process a payment\",\n        extraTags = {\"processor\", \"stripe\"},\n        longTask = true,\n        percentiles = {0.5, 0.95, 0.99}\n    )\n    public PaymentResult processPayment(PaymentRequest request) {\n        // call payment gateway\n        return paymentGateway.charge(request);\n    }\n\n    @Timed(\n        value = \"payment.refund\",\n        description = \"Time taken to process refund\",\n        histogram = true\n    )\n    public RefundResult processRefund(String transactionId, BigDecimal amount) {\n        return paymentGateway.refund(transactionId, amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "166-programmatic-meter-registration",
      children: "1.6.6 Programmatic Meter Registration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.service;\n\nimport io.micrometer.core.instrument.Counter;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Timer;\nimport jakarta.annotation.PostConstruct;\nimport org.springframework.stereotype.Service;\n\nimport java.util.concurrent.TimeUnit;\nimport java.util.function.Supplier;\n\n@Service\npublic class InventoryService {\n\n    private final Counter stockCheckCounter;\n    private final Timer stockCheckTimer;\n    private final Counter stockReservationCounter;\n\n    public InventoryService(MeterRegistry meterRegistry) {\n        this.stockCheckCounter = meterRegistry.counter(\"inventory.stock.checks\",\n                \"service\", \"inventory-service\");\n        this.stockCheckTimer = meterRegistry.timer(\"inventory.stock.check.duration\",\n                \"service\", \"inventory-service\");\n        this.stockReservationCounter = Counter.builder(\"inventory.reservations\")\n                .description(\"Number of inventory reservations\")\n                .tags(\"region\", \"eu-west\", \"type\", \"standard\")\n                .register(meterRegistry);\n    }\n\n    public boolean checkAvailability(String sku, int quantity) {\n        stockCheckCounter.increment();\n        return stockCheckTimer.record(() -> {\n            // simulate stock lookup\n            return inventoryRepository.hasStock(sku, quantity);\n        });\n    }\n\n    public void reserveStock(String sku, int quantity) {\n        stockReservationCounter.increment(quantity);\n        inventoryRepository.reserve(sku, quantity);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "167-gauge-for-point-in-time-values",
      children: "1.6.7 Gauge for Point-in-Time Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.service;\n\nimport io.micrometer.core.instrument.Gauge;\nimport io.micrometer.core.instrument.MeterRegistry;\nimport jakarta.annotation.PostConstruct;\nimport org.springframework.stereotype.Service;\n\nimport java.util.concurrent.atomic.AtomicInteger;\n\n@Service\npublic class QueueMetricsService {\n\n    private final AtomicInteger pendingJobs = new AtomicInteger(0);\n\n    public QueueMetricsService(MeterRegistry meterRegistry) {\n        Gauge.builder(\"queue.pending.jobs\", pendingJobs, AtomicInteger::get)\n                .description(\"Number of pending jobs in the queue\")\n                .tag(\"queue\", \"order-processing\")\n                .register(meterRegistry);\n    }\n\n    public void enqueueJob() {\n        pendingJobs.incrementAndGet();\n    }\n\n    public void processJob() {\n        pendingJobs.decrementAndGet();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-the-actuatorenv-endpoint",
      children: "1.7 The /actuator/env Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The environment endpoint exposes all property sources and their values."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/env\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response (abbreviated):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"activeProfiles\": [\"dev\"],\n  \"propertySources\": [\n    {\n      \"name\": \"server.ports\",\n      \"properties\": {\n        \"local.server.port\": {\n          \"value\": 8081\n        }\n      }\n    },\n    {\n      \"name\": \"application.yml\",\n      \"properties\": {\n        \"server.port\": {\n          \"value\": 8081\n        },\n        \"spring.datasource.url\": {\n          \"value\": \"jdbc:postgresql://localhost:5432/mydb\"\n        }\n      }\n    },\n    {\n      \"name\": \"systemEnvironment\",\n      \"properties\": {\n        \"PATH\": {\n          \"value\": \"/usr/local/bin:...\",\n          \"origin\": \"System Environment Property\"\n        }\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query a specific property:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/env/server.port\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"property\": {\n    \"source\": \"application.yml\",\n    \"value\": \"8081\"\n  },\n  \"activeProfiles\": [\"dev\"],\n  \"propertySources\": [\n    {\n      \"name\": \"application.yml\",\n      \"property\": {\n        \"source\": \"application.yml\",\n        \"value\": \"8081\"\n      }\n    },\n    {\n      \"name\": \"server.ports\",\n      \"property\": {\n        \"source\": \"server.ports\",\n        \"value\": 8081\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-the-actuatorbeans-endpoint",
      children: "1.8 The /actuator/beans Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lists all Spring beans with their scope, type, and dependencies."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/beans\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"contexts\": {\n    \"application\": {\n      \"beans\": {\n        \"orderService\": {\n          \"aliases\": [],\n          \"scope\": \"singleton\",\n          \"type\": \"com.example.service.OrderService\",\n          \"resource\": \"file:.../OrderService.java\",\n          \"dependencies\": [\"orderRepository\", \"paymentService\"]\n        }\n      },\n      \"parentId\": null\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-the-actuatorconfigprops-endpoint",
      children: "1.9 The /actuator/configprops Endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Shows all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " beans with their current values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/configprops\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"contexts\": {\n    \"application\": {\n      \"beans\": {\n        \"orderProperties\": {\n          \"prefix\": \"app.order\",\n          \"properties\": {\n            \"processingTimeout\": \"PT30S\",\n            \"maxItemsPerOrder\": 50,\n            \"paymentGracePeriod\": \"PT5M\",\n            \"notification\": {\n              \"enabled\": true,\n              \"channels\": [\"EMAIL\", \"SMS\"]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-the-actuatorloggers-endpoint",
      children: "1.10 The /actuator/loggers Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View and change log levels at runtime → one of the most useful features for debugging production issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1101-viewing-logger-configurations",
      children: "1.10.1 Viewing Logger Configurations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/loggers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"levels\": [\"OFF\", \"ERROR\", \"WARN\", \"INFO\", \"DEBUG\", \"TRACE\"],\n  \"loggers\": {\n    \"ROOT\": {\n      \"configuredLevel\": \"INFO\",\n      \"effectiveLevel\": \"INFO\"\n    },\n    \"com.example\": {\n      \"configuredLevel\": null,\n      \"effectiveLevel\": \"INFO\"\n    },\n    \"com.example.service.OrderService\": {\n      \"configuredLevel\": \"DEBUG\",\n      \"effectiveLevel\": \"DEBUG\"\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1102-changing-log-level-at-runtime",
      children: "1.10.2 Changing Log Level at Runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST http://localhost:8080/actuator/loggers/com.example \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"configuredLevel\": \"DEBUG\"}'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "immediate"
      }), " → no restart required. It persists until the application restarts or you change it back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Programmatic equivalent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.controller;\n\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/logging\")\npublic class LoggingController {\n\n    private final LoggingService loggingService;\n\n    public LoggingController(LoggingService loggingService) {\n        this.loggingService = loggingService;\n    }\n\n    @PostMapping(\"/level\")\n    public void setLogLevel(@RequestParam String packageName, @RequestParam String level) {\n        loggingService.setLogLevel(packageName, level);\n    }\n\n    @GetMapping(\"/level/{packageName}\")\n    public String getLogLevel(@PathVariable String packageName) {\n        return loggingService.getLogLevel(packageName);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-endpoint-actuatorshutdown",
      children: "1.11 Endpoint /actuator/shutdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gracefully shutdown the application:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoint:\n    shutdown:\n      enabled: true   # DISABLED by default for safety\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST http://localhost:8080/actuator/shutdown\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"message\": \"Shutting down, bye...\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In production, secure this endpoint or keep it disabled. Use platform-level (Kubernetes, cloud instance group) shutdown mechanisms instead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-endpoint-actuatorheapdump",
      children: "1.12 Endpoint /actuator/heapdump"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download a JVM heap dump for memory analysis:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/heapdump -o heapdump.hprof\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The resulting ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".hprof"
      }), " file can be opened with tools like Eclipse MAT, VisualVM, or JProfiler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-endpoint-actuatorthreaddump",
      children: "1.13 Endpoint /actuator/threaddump"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get a JVM thread dump:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/threaddump\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a JSON array of all threads with stack traces, thread state, and lock information:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"threads\": [\n    {\n      \"threadName\": \"http-nio-8080-exec-1\",\n      \"threadId\": 42,\n      \"blockedTime\": -1,\n      \"blockedCount\": 0,\n      \"waitedTime\": -1,\n      \"waitedCount\": 1,\n      \"lockName\": null,\n      \"lockOwnerId\": -1,\n      \"lockOwnerName\": null,\n      \"inNative\": false,\n      \"suspended\": false,\n      \"threadState\": \"RUNNABLE\",\n      \"stackTrace\": [\n        {\n          \"methodName\": \"doProcess\",\n          \"fileName\": \"OrderService.java\",\n          \"lineNumber\": 45,\n          \"className\": \"com.example.service.OrderService\",\n          \"nativeMethod\": false\n        }\n      ],\n      \"lockedMonitors\": [],\n      \"lockedSynchronizers\": [],\n      \"lockInfo\": null\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-endpoint-actuatormappings",
      children: "1.14 Endpoint /actuator/mappings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shows all request mappings in the application:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/mappings\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"contexts\": {\n    \"application\": {\n      \"mappings\": {\n        \"dispatcherServlets\": {\n          \"dispatcherServlet\": [\n            {\n              \"handler\": \"com.example.controller.OrderController#createOrder(OrderRequest)\",\n              \"predicate\": \"{POST [/api/orders], consumes [application/json]}\",\n              \"methods\": [\"POST\"],\n              \"produces\": [\"application/json\"]\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-endpoint-actuatorscheduledtasks",
      children: "1.15 Endpoint /actuator/scheduledtasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shows all scheduled tasks with their schedule:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl http://localhost:8080/actuator/scheduledtasks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"cron\": [\n    {\n      \"runnable\": \"com.example.service.CacheEvictionService.evictExpiredEntries\",\n      \"expression\": \"0 0 * * * *\",\n      \"nextExecution\": \"2026-06-12T01:00:00Z\"\n    }\n  ],\n  \"fixedRate\": [\n    {\n      \"runnable\": \"com.example.service.HealthCheckService.runHealthCheck\",\n      \"initialDelayMs\": 5000,\n      \"intervalMs\": 30000\n    }\n  ],\n  \"fixedDelay\": [\n    {\n      \"runnable\": \"com.example.service.DataSyncService.syncData\",\n      \"initialDelayMs\": 10000,\n      \"intervalMs\": 60000\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-custom-actuator-endpoints",
      children: "1.16 Custom Actuator Endpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1161-endpoint-with-readoperation",
      children: "1.16.1 @Endpoint with @ReadOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.endpoint;\n\nimport org.springframework.boot.actuate.endpoint.annotation.Endpoint;\nimport org.springframework.boot.actuate.endpoint.annotation.ReadOperation;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Endpoint(id = \"feature-toggles\")\npublic class FeatureToggleEndpoint {\n\n    private final FeatureToggleService featureToggleService;\n\n    public FeatureToggleEndpoint(FeatureToggleService featureToggleService) {\n        this.featureToggleService = featureToggleService;\n    }\n\n    @ReadOperation\n    public Map<String, Object> getAllFeatures() {\n        return featureToggleService.getAllToggles().stream()\n                .collect(Collectors.toMap(\n                        FeatureToggle::getName,\n                        toggle -> Map.of(\n                                \"enabled\", toggle.isEnabled(),\n                                \"description\", toggle.getDescription(),\n                                \"updatedAt\", toggle.getUpdatedAt().toString()\n                        )\n                ));\n    }\n\n    @ReadOperation\n    public Map<String, Object> getFeature(@Selector String featureName) {\n        return featureToggleService.getToggle(featureName)\n                .map(toggle -> Map.of(\n                        \"name\", toggle.getName(),\n                        \"enabled\", toggle.isEnabled(),\n                        \"description\", toggle.getDescription()\n                ))\n                .orElse(Map.of(\"error\", \"Feature not found\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1162-writeoperation",
      children: "1.16.2 @WriteOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Endpoint(id = \"feature-toggles\")\npublic class FeatureToggleEndpoint {\n\n    // ... existing read operations ...\n\n    @WriteOperation\n    public Map<String, Object> setFeature(\n            @Selector String featureName,\n            boolean enabled\n    ) {\n        featureToggleService.setToggle(featureName, enabled);\n        return Map.of(\n                \"name\", featureName,\n                \"enabled\", enabled,\n                \"status\", \"updated\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1163-deleteoperation",
      children: "1.16.3 @DeleteOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Endpoint(id = \"cache\")\npublic class CacheEndpoint {\n\n    private final CacheManager cacheManager;\n\n    public CacheEndpoint(CacheManager cacheManager) {\n        this.cacheManager = cacheManager;\n    }\n\n    @ReadOperation\n    public List<String> getCaches() {\n        return cacheManager.getCacheNames().stream()\n                .sorted()\n                .collect(Collectors.toList());\n    }\n\n    @DeleteOperation\n    public Map<String, Object> clearCache(@Selector String cacheName) {\n        Cache cache = cacheManager.getCache(cacheName);\n        if (cache != null) {\n            cache.clear();\n            return Map.of(\n                    \"cache\", cacheName,\n                    \"status\", \"cleared\"\n            );\n        }\n        return Map.of(\n                \"cache\", cacheName,\n                \"status\", \"not-found\"\n        );\n    }\n\n    @DeleteOperation\n    public Map<String, Object> clearAllCaches() {\n        cacheManager.getCacheNames().forEach(\n                name -> cacheManager.getCache(name).clear()\n        );\n        return Map.of(\n                \"caches\", cacheManager.getCacheNames().size(),\n                \"status\", \"all-cleared\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1164-reactive-endpoint",
      children: "1.16.4 Reactive Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Endpoint(id = \"message-stream\")\npublic class MessageStreamEndpoint {\n\n    private final MessageService messageService;\n\n    public MessageStreamEndpoint(MessageService messageService) {\n        this.messageService = messageService;\n    }\n\n    @ReadOperation\n    public Flux<String> streamMessages() {\n        return messageService.getMessageStream();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-jmx-vs-http-endpoint-exposure",
      children: "1.17 JMX vs HTTP Endpoint Exposure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1171-jmx-endpoints",
      children: "1.17.1 JMX Endpoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All actuator endpoints are exposed via JMX by default. Access them with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jconsole"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jvisualvm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    jmx:\n      exposure:\n        include: health,info,metrics\n        exclude: shutdown\n      domain: com.example.actuator\n      unique-names: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JMX is suitable for on-premise environments where you can connect to the JVM directly. For cloud-native and containerized deployments, HTTP endpoints are preferred."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1172-http-endpoints",
      children: "1.17.2 HTTP Endpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      base-path: /manage    # Custom base path (default: /actuator)\n      exposure:\n        include: health,info,metrics,env,loggers\n        exclude: shutdown\n      path-mapping:\n        health: healthcheck  # Override path: /manage/healthcheck\n  server:\n    port: 9090              # Separate management port\n    address: 127.0.0.1      # Bind to localhost only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using a separate management port is a best practice for security:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  server:\n    port: 9090\n    address: 127.0.0.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This way, actuator endpoints are only accessible from the local machine. A monitoring agent (Prometheus, Datadog, etc.) running on the same host can access them."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1173-cors-configuration-for-actuator",
      children: "1.17.3 CORS Configuration for Actuator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      cors:\n        allowed-origins: https://admin.example.com\n        allowed-methods: GET,POST\n        allowed-headers: \"*\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-securing-actuator-endpoints",
      children: "1.18 Securing Actuator Endpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1181-with-spring-security",
      children: "1.18.1 With Spring Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.core.userdetails.User;\nimport org.springframework.security.core.userdetails.UserDetailsService;\nimport org.springframework.security.provisioning.InMemoryUserDetailsManager;\nimport org.springframework.security.web.SecurityFilterChain;\n\nimport static org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest.toAnyEndpoint;\n\n@Configuration\n@EnableWebSecurity\npublic class ActuatorSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http\n            .securityMatcher(\"/actuator/**\")\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(toAnyEndpoint())\n                    .hasRole(\"ADMIN\")\n                .requestMatchers(\"/actuator/health\")\n                    .permitAll()  // health endpoint is public\n                .anyRequest().authenticated()\n            )\n            .httpBasic(Customizer.withDefaults())\n            .csrf(csrf -> csrf.ignoringRequestMatchers(\"/actuator/**\"));\n\n        return http.build();\n    }\n\n    @Bean\n    public UserDetailsService actuatorUsers() {\n        return new InMemoryUserDetailsManager(\n            User.withUsername(\"admin\")\n                .password(\"{bcrypt}$2a$10$...\")\n                .roles(\"ADMIN\")\n                .build()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1182-role-based-access",
      children: "1.18.2 Role-Based Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class RoleBasedActuatorSecurity {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(toAnyEndpoint().excluding(\"health\"))\n                    .hasRole(\"ACTUATOR_ADMIN\")\n                .requestMatchers(EndpointRequest.to(\"health\"))\n                    .permitAll()\n                .requestMatchers(EndpointRequest.to(\"shutdown\"))\n                    .denyAll()  // Always deny shutdown via web\n                .anyRequest().authenticated()\n            )\n            .httpBasic(Customizer.withDefaults());\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "119-spring-boot-devtools",
      children: "1.19 Spring Boot DevTools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevTools provides development-time productivity features: automatic restart, live reload, property defaults, remote debugging, and more."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <optional>true</optional>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical"
      }), ": Always mark DevTools as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "optional"
      }), " so it doesn't get deployed to production."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1191-automatic-restart",
      children: "1.19.1 Automatic Restart"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevTools monitors the classpath for changes. When a file is modified, it triggers a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "very fast"
      }), " restart."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Triggered by:\n- Modified .class files (recompiled Java)\n- Modified static resources\n- Modified templates\n- Modified properties/YAML files\n\nNOT triggered by:\n- Web resources (static files in /static or /public)\n- View templates (Thymeleaf, FreeMarker)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The restart is faster than a cold start because it uses two classloaders:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base classloader"
        }), ": unchanged third-party JARs (loaded once)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart classloader"
        }), ": application classes (reloaded on changes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  devtools:\n    restart:\n      enabled: true                       # Enable restarts\n      poll-interval: 1s                   # How often to check for changes\n      quiet-period: 400ms                 # Wait period before restart\n      trigger-file: .reload-trigger       # Only watch this file\n      exclude: static/**,public/**        # Exclude patterns\n      additional-paths:                   # Additional paths to watch\n        - src/main/resources\n        - config/\n  thymeleaf:\n    cache: false                          # Disable template caching during dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1192-livereload",
      children: "1.19.2 LiveReload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevTools includes an embedded LiveReload server that triggers browser refresh when resources change."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  devtools:\n    livereload:\n      enabled: true       # Default: true\n      port: 35729         # Default LiveReload port\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the LiveReload browser extension (Chrome, Firefox, Safari) for automatic page refreshes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1193-devtools-property-defaults",
      children: "1.19.3 DevTools Property Defaults"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevTools changes some defaults for development:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Production Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevTools Default"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring.thymeleaf.cache"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " (Spring Boot default), but commonly ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " in prod"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring.freemarker.cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring.groovy.templates.cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring.web.resources.cache.period"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring.web.resources.chain.cache"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " (SB default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1194-conditional-devtools-configuration",
      children: "1.19.4 Conditional DevTools Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevTools supports profile-based configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  devtools:\n    restart:\n      enabled: true\n    livereload:\n      enabled: true\n\n---\nspring:\n  config:\n    activate:\n      on-profile: prod\n\nspring:\n  devtools:\n    restart:\n      enabled: false      # Disable in production\n    livereload:\n      enabled: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or programmatically:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class DevConfig {\n\n    @Bean\n    @Profile(\"dev\")\n    public CommandLineRunner devToolsConfig() {\n        return args -> {\n            System.out.println(\"=== DevTools Active ===\");\n            System.out.println(\"Restart enabled: \" +\n                System.getProperty(\"spring.devtools.restart.enabled\"));\n            System.out.println(\"LiveReload enabled: \" +\n                System.getProperty(\"spring.devtools.livereload.enabled\"));\n            System.out.println(\"Template cache: false\");\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1195-global-devtools-settings",
      children: "1.19.5 Global DevTools Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.spring-boot-devtools.properties"
      }), " in your home directory to apply DevTools settings globally:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ~/.spring-boot-devtools.properties\nspring.devtools.restart.enabled=true\nspring.devtools.restart.poll-interval=2s\nspring.devtools.livereload.enabled=true\nspring.devtools.livereload.port=35729\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These apply to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "every"
      }), " Spring Boot project on your machine and have the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "highest"
      }), " priority in the configuration hierarchy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1196-remote-debugging-with-devtools",
      children: "1.19.6 Remote Debugging with DevTools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WARNING"
      }), ": Remote DevTools support is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "security risk"
      }), " in production. It allows arbitrary code execution. Use only in development or staging environments behind a VPN/firewall."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On the server, run the application with a secret:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar \\\n  --spring.devtools.remote.secret=my-secret-key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From your IDE, create a Remote DevTools client:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# In your IDE's run configuration\nspring.devtools.remote.secret=my-secret-key\nspring.devtools.remote.url=http://remote-server:8080\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The remote URL points to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entire application"
      }), " context path (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://server:8080/myapp"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1197-remote-debugging-with-standard-jpda",
      children: "1.19.7 Remote Debugging with Standard JPDA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the more common and more secure approach:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 -jar app.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure in your IDE (IntelliJ IDEA):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run → Edit Configurations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add New Configuration → Remote JVM Debug"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set port: 5005"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use module classpath for your application"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1198-devtools-in-docker-compose",
      children: "1.19.8 DevTools in Docker Compose"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.yml\nversion: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - \"8080:8080\"\n      - \"35729:35729\"   # LiveReload\n      - \"5005:5005\"     # JPDA debug\n    volumes:\n      - ./target/classes:/app/target/classes  # Mount compiled classes\n      - ./src/main/resources:/app/src/main/resources\n    environment:\n      - JAVA_TOOL_OPTIONS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005\n      - SPRING_PROFILES_ACTIVE=dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1199-remote-restart-tunnel",
      children: "1.19.9 Remote Restart Tunnel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevTools supports tunneling over SSH for remote restart:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "ssh -L 8080:localhost:8080 -L 35729:localhost:35729 user@remote-server\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.devtools.remote.url=http://localhost:8080"
      }), " in your IDE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "120-excluding-devtools-from-the-production-build",
      children: "1.20 Excluding DevTools from the Production Build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <excludeDevtools>true</excludeDevtools>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or ensure it's only in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "provided"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "optional"
      }), " scope as shown earlier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-complete-secure-actuator-example",
      children: "1.21 Complete Secure Actuator Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.core.userdetails.User;\nimport org.springframework.security.core.userdetails.UserDetailsService;\nimport org.springframework.security.provisioning.InMemoryUserDetailsManager;\nimport org.springframework.security.web.SecurityFilterChain;\n\nimport static org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest.toAnyEndpoint;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n\n    @Bean\n    @Order(1)\n    public SecurityFilterChain actuatorFilterChain(HttpSecurity http) throws Exception {\n        http\n            .securityMatcher(\"/actuator/**\")\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(toAnyEndpoint().excluding(\"health\", \"info\"))\n                    .hasRole(\"ACTUATOR\")\n                .requestMatchers(toAnyEndpoint().including(\"health\", \"info\"))\n                    .permitAll()\n                .anyRequest().denyAll()\n            )\n            .httpBasic(Customizer.withDefaults())\n            .csrf(csrf -> csrf.disable());\n\n        return http.build();\n    }\n\n    @Bean\n    @Order(2)\n    public SecurityFilterChain appFilterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            )\n            .formLogin(Customizer.withDefaults());\n\n        return http.build();\n    }\n\n    @Bean\n    public UserDetailsService users() {\n        return new InMemoryUserDetailsManager(\n            User.withUsername(\"admin\")\n                .password(\"{noop}admin\")\n                .roles(\"ADMIN\", \"ACTUATOR\")\n                .build(),\n            User.withUsername(\"monitor\")\n                .password(\"{noop}monitor\")\n                .roles(\"ACTUATOR\")\n                .build(),\n            User.withUsername(\"user\")\n                .password(\"{noop}user\")\n                .roles(\"USER\")\n                .build()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-prometheus-and-grafana-integration",
      children: "1.22 Prometheus and Grafana Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add the Micrometer Prometheus registry:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>io.micrometer</groupId>\n    <artifactId>micrometer-registry-prometheus</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This adds a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/prometheus"
      }), " endpoint:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,prometheus\n  metrics:\n    export:\n      prometheus:\n        enabled: true\n    tags:\n      application: ${spring.application.name}\n      environment: ${spring.profiles.active:default}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prometheus configuration (", (0,jsx_runtime.jsx)(_components.code, {
        children: "prometheus.yml"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "scrape_configs:\n  - job_name: 'spring-boot-app'\n    metrics_path: '/actuator/prometheus'\n    scrape_interval: 15s\n    static_configs:\n      - targets: ['localhost:8080']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grafana dashboard panels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JVM memory usage (heap/non-heap)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP request rate and latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GC pause time and frequency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thread states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom business metrics (orders created, payments processed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logback error rate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-custom-health-aggregator",
      children: "1.23 Custom Health Aggregator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define custom health status aggregation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.health;\n\nimport org.springframework.boot.actuate.health.Status;\nimport org.springframework.boot.actuate.health.StatusAggregator;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Arrays;\nimport java.util.LinkedHashSet;\nimport java.util.Set;\n\n@Component\npublic class CustomStatusAggregator implements StatusAggregator {\n\n    private static final Set<Status> ORDERED_STATUSES = new LinkedHashSet<>(\n            Arrays.asList(\n                    Status.DOWN,\n                    Status.OUT_OF_SERVICE,\n                    new Status(\"WARN\", \"Degraded\"),\n                    Status.UNKNOWN,\n                    Status.UP\n            )\n    );\n\n    @Override\n    public Status getAggregateStatus(Set<Status> statuses) {\n        for (Status status : ORDERED_STATUSES) {\n            if (statuses.contains(status)) {\n                return status;\n            }\n        }\n        return Status.UNKNOWN;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-metrics-with-timed-on-all-endpoints",
      children: "1.24 Metrics with @Timed on All Endpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enable auto-timing for all Spring MVC endpoints:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  metrics:\n    web:\n      server:\n        request:\n          autotime:\n            enabled: true\n            percentiles: 0.5, 0.95, 0.99\n            percentiles-histogram: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-excluding-specific-metrics",
      children: "1.25 Excluding Specific Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  metrics:\n    enable:\n      jvm: false\n      logback: false\n    use-global-registry: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-custom-actuator-endpoint-with-filtering",
      children: "1.26 Custom Actuator Endpoint with Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.actuator.endpoint;\n\nimport org.springframework.boot.actuate.endpoint.annotation.DeleteOperation;\nimport org.springframework.boot.actuate.endpoint.annotation.Endpoint;\nimport org.springframework.boot.actuate.endpoint.annotation.ReadOperation;\nimport org.springframework.boot.actuate.endpoint.annotation.Selector;\nimport org.springframework.boot.actuate.endpoint.annotation.WriteOperation;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\n\n@Component\n@Endpoint(id = \"cache-manager\")\npublic class CacheManagerEndpoint {\n\n    private final Map<String, CacheStats> cacheStats = new ConcurrentHashMap<>();\n\n    @ReadOperation\n    public Map<String, CacheStats> getAllCaches(@Selector String cacheName) {\n        if (cacheName != null) {\n            return Map.of(cacheName, cacheStats.get(cacheName));\n        }\n        return cacheStats;\n    }\n\n    @WriteOperation\n    public void updateCacheConfig(\n            @Selector String cacheName,\n            int maxSize,\n            long ttlSeconds\n    ) {\n        CacheStats stats = cacheStats.computeIfAbsent(cacheName, k -> new CacheStats());\n        stats.setMaxSize(maxSize);\n        stats.setTtlSeconds(ttlSeconds);\n    }\n\n    @DeleteOperation\n    public void evictCache(@Selector String cacheName) {\n        cacheStats.remove(cacheName);\n    }\n\n    public static class CacheStats {\n        private long hits;\n        private long misses;\n        private int maxSize;\n        private long ttlSeconds;\n\n        public long getHits() { return hits; }\n        public void setHits(long hits) { this.hits = hits; }\n        public long getMisses() { return misses; }\n        public void setMisses(long misses) { this.misses = misses; }\n        public int getMaxSize() { return maxSize; }\n        public void setMaxSize(int maxSize) { this.maxSize = maxSize; }\n        public long getTtlSeconds() { return ttlSeconds; }\n        public void setTtlSeconds(long ttlSeconds) { this.ttlSeconds = ttlSeconds; }\n        public double getHitRate() {\n            long total = hits + misses;\n            return total == 0 ? 0.0 : (double) hits / total;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-complete-devtools-configuration-for-development",
      children: "1.27 Complete DevTools Configuration for Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-dev.yml\nspring:\n  devtools:\n    restart:\n      enabled: true\n      poll-interval: 1500ms\n      quiet-period: 500ms\n      exclude: static/**,templates/**\n    livereload:\n      enabled: true\n      port: 35729\n  thymeleaf:\n    cache: false\n  web:\n    resources:\n      cache:\n        period: 0\n\nlogging:\n  level:\n    org.springframework.boot.devtools: DEBUG\n\n---\nspring:\n  config:\n    activate:\n      on-profile: docker-dev\n\nspring:\n  devtools:\n    remote:\n      secret: dev-secret-key-change-in-prod\n    restart:\n      enabled: true\n\nserver:\n  port: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "128-disabling-devtools-in-production",
      children: "1.28 Disabling DevTools in Production"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-prod.yml\nspring:\n  devtools:\n    restart:\n      enabled: false\n    livereload:\n      enabled: false\n    add-properties: false\n\nlogging:\n  level:\n    org.springframework.boot.devtools: OFF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "129-best-practices",
      children: "1.29 Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always mark DevTools as optional"
        }), " to exclude from production."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never expose sensitive actuator info endpoints"
        }), " in production without authentication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use a separate management port"
        }), " for actuator endpoints (", (0,jsx_runtime.jsx)(_components.code, {
          children: "management.server.port"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable only what you need"
        }), " for actuator endpoints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep the shutdown endpoint disabled"
        }), " in production."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use role-based access"
        }), " for different actuator endpoints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never use remote DevTools"
        }), " on a public network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use @Timed and @Counted"
        }), " for business metrics, not just JVM metrics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrate with Prometheus/Grafana"
        }), " for long-term metric storage and visualization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Set health endpoint to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "when-authorized"
          })]
        }), " for details in production."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the spring-boot-maven-plugin with build-info"
        }), " to populate the info endpoint."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exclude DevTools from the final artifact"
        }), " in multi-stage Docker builds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Actuator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready monitoring endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health, metrics, env, beans, configprops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observability in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micrometer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-neutral metrics facade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensional metrics with tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus, Datadog, Graphite exporters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Indicator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component health check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregated health status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database, disk, external service health"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevTools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer productivity tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live reload, auto-restart, remote debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Development-only dependency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Info Contributor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata about running application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build info, git commit, environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version tracking in production"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Actuator Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Exposure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/actuator/health"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web + JMX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App health with component details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/actuator/info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web + JMX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build, git, custom metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/actuator/metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web + JMX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/actuator/env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JMX only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/actuator/beans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JMX only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Spring beans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/actuator/loggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web + JMX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic log level changes"
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
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Development"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staging"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Production"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevTools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health, info, metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health, info, liveness, readiness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log Levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WARN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics Recording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-optimized"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which actuator endpoint provides liveness and readiness probes for Kubernetes?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) /actuator/health"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) /actuator/info"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) /actuator/metrics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) /actuator/liveness"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) /actuator/health.** Spring Boot exposes liveness and readiness as grouped health indicators under /actuator/health/liveness and /actuator/health/readiness when configured.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of Micrometer in Spring Boot?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Code profiling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Vendor-neutral metrics collection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Log aggregation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Health checking"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Vendor-neutral metrics collection.** Micrometer provides a dimensional metrics facade that supports multiple monitoring systems like Prometheus, Datadog, and Graphite.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you enable DevTools live reload for template changes?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Add spring-boot-devtools dependency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Set spring.liveReload.enabled=true"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Install a browser plugin"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Use IntelliJ LiveReload plugin"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) Add spring-boot-devtools dependency.** DevTools automatically enables LiveReload server; install LiveReload browser extension to trigger page refresh on changes.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Actuator and DevTools bridge the gap between development and production:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Actuator"
      }), " provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "15+ built-in monitoring endpoints (health, metrics, env, beans, loggers, threaddump, heapdump, etc.)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom endpoints via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Endpoint"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ReadOperation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WriteOperation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DeleteOperation"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health indicators for service health with composite aggregation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Metrics with Micrometer, Prometheus integration, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Counted"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Timed"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Info contributors for build/git/environment metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JMX and HTTP exposure with CORS, authentication, and role-based security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runtime log level changes without restart"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DevTools"
      }), " provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic restart on classpath changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiveReload for instant browser refresh"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev-optimized property defaults"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote debugging via SSH tunnel or JPDA"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Global settings through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.spring-boot-devtools.properties"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: Actuator makes production visible, DevTools makes development fast. Both are essential for professional Spring Boot development."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-health-indicators",
      children: "Exercise 1: Health Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a comprehensive health check system with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DatabaseHealthIndicator"
        }), " that pings the database and reports connection pool stats"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DiskSpaceHealthIndicator"
        }), " that reports disk usage percentage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MemoryHealthIndicator"
        }), " that reports JVM heap and non-heap memory usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompositeMailServerHealthContributor"
        }), " that reports health of primary and backup mail servers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure health to show details and components. Test by visiting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/health"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-custom-actuator-endpoint",
      children: "Exercise 2: Custom Actuator Endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Endpoint"
      }), " called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deployment"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ReadOperation"
        }), " returning current deploy info (version, commit hash, deploy timestamp, environment)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ReadOperation"
        }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Selector"
        }), " returning specific deployment attribute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@WriteOperation"
        }), " to set the deployment status (deploying, active, rollback)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@DeleteOperation"
        }), " to clear rollback metadata"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Secure this endpoint so only ADMIN role can access it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-business-metrics",
      children: "Exercise 3: Business Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add metrics to an order management system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Counted"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createOrder"
        }), " to count order creations with tags (region, channel)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Timed"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "processPayment"
        }), " with 0.5, 0.95, 0.99 percentiles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Gauge"
        }), " for the number of pending orders"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Register a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Counter"
        }), " for failed payments with micrometer API directly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expose these metrics through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/metrics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a test that verifies the metrics increment correctly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-info-contributors",
      children: "Exercise 4: Info Contributors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create three ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InfoContributor"
      }), " beans:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BuildInfoContributor"
        }), " → returns build number, timestamp, artifact name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SystemInfoContributor"
        }), " → returns OS name, arch, available processors, Java version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DatabaseInfoContributor"
        }), " → returns database product name, version, connection count"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test by checking ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/info"
      }), " response."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-log-management",
      children: "Exercise 5: Log Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a controller that logs at various levels (INFO, DEBUG, WARN, ERROR)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test changing log levels via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/loggers"
        }), " at runtime"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write an integration test that verifies the log level change by reading the response"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LogManagementEndpoint"
        }), " that:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Returns all loggers with current level"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allows setting level for a specific package via POST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resets a logger to its default level"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-secure-actuator",
      children: "Exercise 6: Secure Actuator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Secure actuator endpoints with Spring Security:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/health"
        }), " → public (no auth required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/info"
        }), " → authenticated (any authenticated user)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/env"
        }), " → ADMIN role only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/loggers"
        }), " → ACTUATOR_ADMIN role only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/actuator/shutdown"
        }), " → denied for all (return 403)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use different management port. Write tests for each scenario."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-devtools-configuration",
      children: "Exercise 7: DevTools Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure a Spring Boot app with DevTools:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable automatic restart with a 2-second poll interval"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exclude ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static/**"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public/**"
        }), " from restart"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable LiveReload on port 35729"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable Thymeleaf cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a global DevTools settings file with a custom trigger file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a profile-specific config that disables DevTools in production"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test by changing a Java file and observing the restart."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-remote-debugging",
      children: "Exercise 8: Remote Debugging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure remote debugging for a Docker container:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a Dockerfile that exposes port 5005 for JPDA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up Docker Compose with the debug port exposed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mount compiled classes as a volume for DevTools restart"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include a debug configuration that connects to the container"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write instructions on how to use IntelliJ or VS Code to connect to the remote debug port."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-custom-metrics-with-timer",
      children: "Exercise 9: Custom Metrics with Timer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LatencySimulator"
      }), " service:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a method that sleeps for a random time (100ms-500ms)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Time it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Timed"
        }), " with p50, p95, p99 percentiles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Also time it programmatically with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Timer.Sample"
        }), " from Micrometer"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create an endpoint that calls the method and returns the actual duration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify percentiles appear in the metrics endpoint"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-full-monitoring-dashboard",
      children: "Exercise 10: Full Monitoring Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a complete monitoring setup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spring Boot app exposing all actuator endpoints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Endpoint(\"app-status\")"
        }), " showing:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uptime (days, hours, minutes)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Active user sessions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Database connection pool utilization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cache hit rates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prometheus metrics endpoint configured"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/api/admin/dashboard"
        }), " endpoint that aggregates:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Health summary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Key metrics (memory, CPU, request count)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Active profiles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Last 10 log errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Thread count and state breakdown"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Return this as a structured JSON object."
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