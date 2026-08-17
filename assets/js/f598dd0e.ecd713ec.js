"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[13522],{

/***/ 51253
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_14_logging_error_i_18_n_md_f59_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-14-logging-error-i-18-n-md-f59.json
const site_docs_courses_java_14_logging_error_i_18_n_md_f59_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/14-logging-error-i18n","title":"Logging, Error Handling & Internationalization","description":"Previous REST API Development","source":"@site/docs/courses/java/14-logging-error-i18n.md","sourceDirName":"courses/java","slug":"/java/14-logging-error-i18n","permalink":"/ai-engineering-journey/java/14-logging-error-i18n","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-logging-error-i18n","slug":"/java/14-logging-error-i18n","title":"Logging, Error Handling & Internationalization","sidebar_label":"Logging, Error Handling & Internationalization","sidebar_position":14},"sidebar":"course-java","previous":{"title":"Actuator, DevTools & Monitoring","permalink":"/ai-engineering-journey/java/13-actuator-devtools"},"next":{"title":"REST API Development with Spring MVC","permalink":"/ai-engineering-journey/java/15-rest-api"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/14-logging-error-i18n.md


const frontMatter = {
	id: '14-logging-error-i18n',
	slug: '/java/14-logging-error-i18n',
	title: 'Logging, Error Handling & Internationalization',
	sidebar_label: 'Logging, Error Handling & Internationalization',
	sidebar_position: 14
};
const contentTitle = 'Logging, Error Handling & Internationalization';

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
  "value": "1. Theory",
  "id": "1-theory",
  "level": 2
}, {
  "value": "1.1 The Java Logging Landscape",
  "id": "11-the-java-logging-landscape",
  "level": 3
}, {
  "value": "1.2 SLF4J API Fundamentals",
  "id": "12-slf4j-api-fundamentals",
  "level": 3
}, {
  "value": "1.2.1 Logger Hierarchy",
  "id": "121-logger-hierarchy",
  "level": 4
}, {
  "value": "1.2.2 Log Levels (in order of severity)",
  "id": "122-log-levels-in-order-of-severity",
  "level": 4
}, {
  "value": "1.2.3 Parameterized Logging",
  "id": "123-parameterized-logging",
  "level": 4
}, {
  "value": "1.2.4 Checking Log Levels",
  "id": "124-checking-log-levels",
  "level": 4
}, {
  "value": "1.3 Logback Configuration",
  "id": "13-logback-configuration",
  "level": 3
}, {
  "value": "1.3.1 Basic Logback Configuration",
  "id": "131-basic-logback-configuration",
  "level": 4
}, {
  "value": "1.3.2 Pattern Layout Reference",
  "id": "132-pattern-layout-reference",
  "level": 4
}, {
  "value": "1.3.3 Rolling Policies",
  "id": "133-rolling-policies",
  "level": 4
}, {
  "value": "1.3.4 Logback Filters",
  "id": "134-logback-filters",
  "level": 4
}, {
  "value": "1.3.5 MDC → Mapped Diagnostic Context",
  "id": "135-mdc--mapped-diagnostic-context",
  "level": 4
}, {
  "value": "1.4 Structured JSON Logging",
  "id": "14-structured-json-logging",
  "level": 3
}, {
  "value": "1.4.1 Using Logstash Logback Encoder",
  "id": "141-using-logstash-logback-encoder",
  "level": 4
}, {
  "value": "1.4.2 Custom JSON Layout",
  "id": "142-custom-json-layout",
  "level": 4
}, {
  "value": "1.4.3 Programmatic Structured Logging",
  "id": "143-programmatic-structured-logging",
  "level": 4
}, {
  "value": "1.4.4 Logging Exceptions as Structured Data",
  "id": "144-logging-exceptions-as-structured-data",
  "level": 4
}, {
  "value": "1.5 Log4j2 Configuration",
  "id": "15-log4j2-configuration",
  "level": 3
}, {
  "value": "1.5.1 log4j2-spring.xml",
  "id": "151-log4j2-springxml",
  "level": 4
}, {
  "value": "1.5.2 Async Loggers in Log4j2",
  "id": "152-async-loggers-in-log4j2",
  "level": 4
}, {
  "value": "1.6 Spring Boot Logging Configuration",
  "id": "16-spring-boot-logging-configuration",
  "level": 3
}, {
  "value": "1.7 Global Error Handling with @ControllerAdvice",
  "id": "17-global-error-handling-with-controlleradvice",
  "level": 3
}, {
  "value": "1.7.1 Basic @ExceptionHandler",
  "id": "171-basic-exceptionhandler",
  "level": 4
}, {
  "value": "1.7.2 Custom Exception Classes",
  "id": "172-custom-exception-classes",
  "level": 4
}, {
  "value": "1.7.3 Complete @RestControllerAdvice",
  "id": "173-complete-restcontrolleradvice",
  "level": 4
}, {
  "value": "1.8 RFC 7807 Problem Details",
  "id": "18-rfc-7807-problem-details",
  "level": 3
}, {
  "value": "1.8.1 Enabling Problem Details",
  "id": "181-enabling-problem-details",
  "level": 4
}, {
  "value": "1.8.2 Standard ProblemDetail Response",
  "id": "182-standard-problemdetail-response",
  "level": 4
}, {
  "value": "1.8.3 Custom ProblemDetail",
  "id": "183-custom-problemdetail",
  "level": 4
}, {
  "value": "1.8.4 Validation Errors with ProblemDetail",
  "id": "184-validation-errors-with-problemdetail",
  "level": 4
}, {
  "value": "1.9 Internationalization (i18n)",
  "id": "19-internationalization-i18n",
  "level": 3
}, {
  "value": "1.9.1 MessageSource Configuration",
  "id": "191-messagesource-configuration",
  "level": 4
}, {
  "value": "1.9.2 LocaleResolver Strategies",
  "id": "192-localeresolver-strategies",
  "level": 4
}, {
  "value": "1.9.3 Message Bundles",
  "id": "193-message-bundles",
  "level": 4
}, {
  "value": "1.9.4 Using MessageSource in Code",
  "id": "194-using-messagesource-in-code",
  "level": 4
}, {
  "value": "1.9.5 Locale Change Controller",
  "id": "195-locale-change-controller",
  "level": 4
}, {
  "value": "1.10 Thymeleaf i18n Integration",
  "id": "110-thymeleaf-i18n-integration",
  "level": 3
}, {
  "value": "1.11 Validation Message Internationalization",
  "id": "111-validation-message-internationalization",
  "level": 3
}, {
  "value": "1.11.1 Validation Message Bundles",
  "id": "1111-validation-message-bundles",
  "level": 4
}, {
  "value": "1.11.2 DTO with i18n Validation Messages",
  "id": "1112-dto-with-i18n-validation-messages",
  "level": 4
}, {
  "value": "1.11.3 Custom Validator with i18n",
  "id": "1113-custom-validator-with-i18n",
  "level": 4
}, {
  "value": "1.12 Programmatic Message Resolution in REST Controllers",
  "id": "112-programmatic-message-resolution-in-rest-controllers",
  "level": 3
}, {
  "value": "1.13 Locale Interceptor",
  "id": "113-locale-interceptor",
  "level": 3
}, {
  "value": "1.14 Date, Number, and Currency Formatting with i18n",
  "id": "114-date-number-and-currency-formatting-with-i18n",
  "level": 3
}, {
  "value": "1.15 Complete Error Handling Example with i18n",
  "id": "115-complete-error-handling-example-with-i18n",
  "level": 3
}, {
  "value": "1.16 Creating a Logging Aspect for Business Operations",
  "id": "116-creating-a-logging-aspect-for-business-operations",
  "level": 3
}, {
  "value": "1.17 Complete Logging Configuration Example",
  "id": "117-complete-logging-configuration-example",
  "level": 3
}, {
  "value": "1.18 Best Practices",
  "id": "118-best-practices",
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
  "value": "Exercise 1: Logback Configuration",
  "id": "exercise-1-logback-configuration",
  "level": 3
}, {
  "value": "Exercise 2: Structured JSON Logging",
  "id": "exercise-2-structured-json-logging",
  "level": 3
}, {
  "value": "Exercise 3: MDC Filter",
  "id": "exercise-3-mdc-filter",
  "level": 3
}, {
  "value": "Exercise 4: Global Error Handler",
  "id": "exercise-4-global-error-handler",
  "level": 3
}, {
  "value": "Exercise 5: Problem Details with RFC 7807",
  "id": "exercise-5-problem-details-with-rfc-7807",
  "level": 3
}, {
  "value": "Exercise 6: MessageSource Configuration",
  "id": "exercise-6-messagesource-configuration",
  "level": 3
}, {
  "value": "Exercise 7: LocaleResolver Implementation",
  "id": "exercise-7-localeresolver-implementation",
  "level": 3
}, {
  "value": "Exercise 8: Internationalized Validation",
  "id": "exercise-8-internationalized-validation",
  "level": 3
}, {
  "value": "Exercise 9: Thymeleaf i18n Integration",
  "id": "exercise-9-thymeleaf-i18n-integration",
  "level": 3
}, {
  "value": "Exercise 10: Audit Logging System",
  "id": "exercise-10-audit-logging-system",
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
        id: "logging-error-handling--internationalization",
        children: "Logging, Error Handling & Internationalization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/13-actuator-devtools",
          children: "Actuator, DevTools & Monitoring"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/15-rest-api",
          children: "REST API Development"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Logback with custom appenders, loggers, rolling policies, and MDC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Log4j2 as an alternative logging framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the SLF4J API with parameterized logging throughout your application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement structured JSON logging for log aggregation systems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle application errors globally with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ControllerAdvice"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ExceptionHandler"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return structured error responses following RFC 7807 Problem Details"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement internationalization (i18n) with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MessageSource"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LocaleResolver"
        }), " strategies for multi-language applications"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate i18n with Thymeleaf templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internationalize validation error messages"
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
            children: "Logback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLF4J facade + Logback implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDC for contextual logging, rolling policies for log rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON format for log aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use logstash-logback-encoder for ELK integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ControllerAdvice + @ExceptionHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized, consistent error responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7807"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem Details for HTTP API errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard error format adopted by Spring Boot 3.x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i18n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MessageSource + LocaleResolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Externalize messages in properties files per locale"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Logging Configuration] --> B[Logback & Log4j2]\n    B --> C[MDC & Structured Logging]\n    C --> D[Error Handling]\n    D --> E[RFC 7807 Problem Details]\n    E --> F[Internationalization]\n    F --> G[Locale Resolution]\n    G --> H[i18n + Validation]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use parametrized logging (", (0,jsx_runtime.jsx)(_components.code, {
          children: "log.info(\"user {} logged in\", userId)"
        }), ") instead of string concatenation — SLF4J evaluates the template only if the log level is enabled, saving CPU cycles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-theory",
      children: "1. Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/14-logging-error-i18n.png",
        alt: "Logging Error Handling & i18n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-java-logging-landscape",
      children: "1.1 The Java Logging Landscape"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot applications have access to a rich ecosystem of logging frameworks:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SLF4J"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Logging Facade for Java → the API facade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native SLF4J implementation, Spring Boot's default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log4j2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Log4j 2 → asynchronous, high-performance alternative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "java.util.logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JDK built-in, rarely used directly in Spring Boot"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot uses SLF4J + Logback by default. All internal Spring logging goes through SLF4J, and Logback is the default implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-slf4j-api-fundamentals",
      children: "1.2 SLF4J API Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SLF4J is the API your code should depend on. Never depend directly on Logback or Log4j2 in your application code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class OrderService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderService.class);\n\n    public void processOrder(Order order) {\n        log.info(\"Processing order: {}\", order.getId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important"
      }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LoggerFactory.getLogger()"
      }), " at the class level with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static final"
      }), " for performance. The logger instance is thread-safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-logger-hierarchy",
      children: "1.2.1 Logger Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loggers follow a hierarchical naming convention based on the dot-separated name:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logger \"com.example\" is an ancestor of \"com.example.service\"\nLogger \"com.example.service\" is an ancestor of \"com.example.service.OrderService\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A logger inherits its level from its nearest ancestor that has a configured level. The root logger sits at the top:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ROOT\n └── com\n      └── com.example\n           └── com.example.service\n                └── com.example.service.OrderService\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-log-levels-in-order-of-severity",
      children: "1.2.2 Log Levels (in order of severity)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SLF4J Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ERROR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "log.error(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application failure, data corruption, unrecoverable issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WARN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "log.warn(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexpected but recoverable, deprecated API usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INFO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "log.info(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Important business events, startup/shutdown, state changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DEBUG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "log.debug(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed information for debugging during development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TRACE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "log.trace(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finest-grained details, request/request payload dumps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-parameterized-logging",
      children: "1.2.3 Parameterized Logging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SLF4J supports parameterized messages with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{}"
      }), " placeholders:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Good → parameterized (avoids string concatenation when disabled)\nlog.info(\"User {} placed order {} worth ${}\", userId, orderId, amount);\n\n// Bad → string concatenation (evaluated even when level is disabled)\nlog.info(\"User \" + userId + \" placed order \" + orderId);\n\n// Multiple parameters\nlog.debug(\"Processing order {} for user {} with items {}\",\n        orderId, userId, itemCount);\n\n// Exception (last parameter is special)\ntry {\n    // risky operation\n} catch (Exception e) {\n    log.error(\"Failed to process order {}\", orderId, e);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Parameterized logging is important because the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{}"
      }), " placeholders are only evaluated if the log level is enabled. String concatenation with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " always happens, even when the log line is suppressed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "124-checking-log-levels",
      children: "1.2.4 Checking Log Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For expensive message construction:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "if (log.isDebugEnabled()) {\n    log.debug(\"Order details: {}\", buildExpensiveDebugString(order));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For TRACE level, which is almost always disabled in production:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "if (log.isTraceEnabled()) {\n    log.trace(\"Full request dump: {}\", serializeFullRequest(request));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-logback-configuration",
      children: "1.3 Logback Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Logback is configured via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logback-spring.xml"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/"
      }), ". Spring Boot also supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logback.xml"
      }), ", but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logback-spring.xml"
      }), " allows Spring-specific extensions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-basic-logback-configuration",
      children: "1.3.1 Basic Logback Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<configuration scan=\"true\" scanPeriod=\"30 seconds\">\n\n    <!-- Property definitions -->\n    <springProperty name=\"APP_NAME\" source=\"spring.application.name\" defaultValue=\"app\"/>\n    <springProperty name=\"LOG_PATH\" source=\"logging.file.path\" defaultValue=\"logs\"/>\n\n    <!-- Console Appender -->\n    <appender name=\"CONSOLE\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder>\n            <pattern>\n                %d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} [%X{traceId}] - %msg%n\n            </pattern>\n        </encoder>\n    </appender>\n\n    <!-- File Appender -->\n    <appender name=\"FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>${LOG_PATH}/${APP_NAME}.log</file>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n            <fileNamePattern>${LOG_PATH}/${APP_NAME}.%d{yyyy-MM-dd}.%i.log</fileNamePattern>\n            <maxHistory>30</maxHistory>\n            <cleanHistoryOnStart>true</cleanHistoryOnStart>\n            <totalSizeCap>3GB</totalSizeCap>\n            <timeBasedFileNamingAndTriggeringPolicy class=\"ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP\">\n                <maxFileSize>100MB</maxFileSize>\n            </timeBasedFileNamingAndTriggeringPolicy>\n        </rollingPolicy>\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <!-- Error-specific File Appender -->\n    <appender name=\"ERROR_FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>${LOG_PATH}/${APP_NAME}-error.log</file>\n        <filter class=\"ch.qos.logback.classic.filter.ThresholdFilter\">\n            <level>ERROR</level>\n        </filter>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n            <fileNamePattern>${LOG_PATH}/${APP_NAME}-error.%d{yyyy-MM-dd}.log</fileNamePattern>\n            <maxHistory>90</maxHistory>\n        </rollingPolicy>\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <!-- Root Logger -->\n    <root level=\"INFO\">\n        <appender-ref ref=\"CONSOLE\"/>\n        <appender-ref ref=\"FILE\"/>\n        <appender-ref ref=\"ERROR_FILE\"/>\n    </root>\n\n    <!-- Package-specific log levels -->\n    <logger name=\"com.example\" level=\"DEBUG\" additivity=\"false\">\n        <appender-ref ref=\"CONSOLE\"/>\n        <appender-ref ref=\"FILE\"/>\n    </logger>\n\n    <logger name=\"org.springframework.web\" level=\"DEBUG\" additivity=\"false\">\n        <appender-ref ref=\"CONSOLE\"/>\n    </logger>\n\n    <logger name=\"org.springframework.security\" level=\"WARN\"/>\n\n    <logger name=\"org.hibernate.SQL\" level=\"DEBUG\" additivity=\"false\">\n        <appender-ref ref=\"CONSOLE\"/>\n    </logger>\n\n    <logger name=\"org.hibernate.type.descriptor.sql.BasicBinder\" level=\"TRACE\">\n        <appender-ref ref=\"CONSOLE\"/>\n    </logger>\n\n</configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-pattern-layout-reference",
      children: "1.3.2 Pattern Layout Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%pattern"
      }), " in the encoder supports many conversion words:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Conversion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date/time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2026-06-12 14:30:00.123"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http-nio-8080-exec-3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INFO"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%-5level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left-padded to 5 chars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INFO "
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%logger{36}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logger name (abbreviated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.e.service.OrderService"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%msg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Order 42 processed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newline"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%X{key}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDC value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%X{traceId}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%marker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marker name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SECURITY"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%caller{1}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderService.java:42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%M"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "processOrder"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%replace(p){r,t}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex replace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%replace(%msg){'secret', '****'}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%highlight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANSI color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Levels colored in console"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%boldYellow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANSI bold yellow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warnings in yellow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%boldRed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANSI bold red"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Errors in red"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Colored console pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<appender name=\"CONSOLE\" class=\"ch.qos.logback.core.ConsoleAppender\">\n    <encoder>\n        <pattern>%d{HH:mm:ss.SSS} %highlight(%-5level) [%thread] %cyan(%logger{36}) - %msg%n</pattern>\n    </encoder>\n</appender>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "133-rolling-policies",
      children: "1.3.3 Rolling Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logback supports several rolling policies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time-based rolling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n    <fileNamePattern>logs/app.%d{yyyy-MM-dd}.log</fileNamePolicy>\n    <!-- More patterns:\n         .%d{yyyy-MM-dd}           → daily\n         .%d{yyyy-MM-dd_HH}        → hourly\n         .%d{yyyy-ww}              → weekly\n         .%d{yyyy-MM}              → monthly\n    -->\n    <maxHistory>30</maxHistory>\n    <cleanHistoryOnStart>true</cleanHistoryOnStart>\n</rollingPolicy>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Size-based rolling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<rollingPolicy class=\"ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy\">\n    <maxFileSize>100MB</maxFileSize>\n</rollingPolicy>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Size and time combined"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<rollingPolicy class=\"ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy\">\n    <fileNamePattern>logs/app.%d{yyyy-MM-dd}.%i.log</fileNamePattern>\n    <maxFileSize>100MB</maxFileSize>\n    <maxHistory>30</maxHistory>\n    <totalSizeCap>10GB</totalSizeCap>\n</rollingPolicy>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "134-logback-filters",
      children: "1.3.4 Logback Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters control which log events reach an appender."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ThresholdFilter"
      }), " → only events above a threshold:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<appender name=\"ERROR_FILE\" class=\"ch.qos.logback.core.FileAppender\">\n    <filter class=\"ch.qos.logback.classic.filter.ThresholdFilter\">\n        <level>ERROR</level>\n    </filter>\n</appender>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LevelFilter"
      }), " → exact match:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<appender name=\"WARN_FILE\" class=\"ch.qos.logback.core.FileAppender\">\n    <filter class=\"ch.qos.logback.classic.filter.LevelFilter\">\n        <level>WARN</level>\n        <onMatch>ACCEPT</onMatch>\n        <onMismatch>DENY</onMismatch>\n    </filter>\n</appender>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EvaluatorFilter"
      }), " → custom conditions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<appender name=\"SLOW_SQL\" class=\"ch.qos.logback.core.FileAppender\">\n    <filter class=\"ch.qos.logback.classic.boolex.JaninoEventEvaluator\">\n        <expression>\n            return formattedMessage.contains(\"slow query\")\n                || formattedMessage.contains(\"> 1000ms\");\n        </expression>\n    </filter>\n</appender>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "135-mdc--mapped-diagnostic-context",
      children: "1.3.5 MDC → Mapped Diagnostic Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MDC allows you to add contextual information to log messages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.slf4j.MDC;\n\n@Service\npublic class OrderService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderService.class);\n\n    public Order createOrder(OrderRequest request) {\n        try {\n            MDC.put(\"userId\", request.getUserId());\n            MDC.put(\"orderId\", UUID.randomUUID().toString());\n            MDC.put(\"traceId\", TraceContext.getTraceId());\n\n            log.info(\"Creating order for user\");\n\n            Order order = new Order(request);\n            orderRepository.save(order);\n\n            log.info(\"Order created successfully\");\n\n            return order;\n        } finally {\n            MDC.clear();  // ALWAYS clear in finally block\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using a filter to automatically populate MDC:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.logging;\n\nimport jakarta.servlet.*;\nimport jakarta.servlet.http.HttpServletRequest;\nimport org.slf4j.MDC;\nimport org.springframework.core.Ordered;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\n\nimport java.io.IOException;\nimport java.util.UUID;\n\n@Component\n@Order(Ordered.HIGHEST_PRECEDENCE)\npublic class MDCFilter implements Filter {\n\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response,\n                         FilterChain chain) throws IOException, ServletException {\n\n        HttpServletRequest req = (HttpServletRequest) request;\n\n        try {\n            MDC.put(\"traceId\", UUID.randomUUID().toString().substring(0, 8));\n            MDC.put(\"requestUri\", req.getRequestURI());\n            MDC.put(\"method\", req.getMethod());\n            MDC.put(\"remoteAddr\", req.getRemoteAddr());\n\n            if (req.getUserPrincipal() != null) {\n                MDC.put(\"user\", req.getUserPrincipal().getName());\n            }\n\n            chain.doFilter(request, response);\n        } finally {\n            MDC.clear();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Include MDC values in log pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<encoder>\n    <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} [trace=%X{traceId}, user=%X{user}] - %msg%n</pattern>\n</encoder>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2026-06-12 14:30:00.123 [http-nio-8080-exec-3] INFO  c.e.service.OrderService [trace=a1b2c3d4, user=jdoe] - Order created successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-structured-json-logging",
      children: "1.4 Structured JSON Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For log aggregation systems like ELK, Datadog, Grafana Loki, or Splunk, structured JSON output is essential."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-using-logstash-logback-encoder",
      children: "1.4.1 Using Logstash Logback Encoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>net.logstash.logback</groupId>\n    <artifactId>logstash-logback-encoder</artifactId>\n    <version>7.4</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- logback-spring.xml -->\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<configuration>\n    <springProperty name=\"APP_NAME\" source=\"spring.application.name\" defaultValue=\"app\"/>\n    <springProperty name=\"ENV\" source=\"spring.profiles.active\" defaultValue=\"development\"/>\n\n    <!-- JSON Appender -->\n    <appender name=\"JSON_FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>logs/${APP_NAME}.json</file>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy\">\n            <fileNamePattern>logs/${APP_NAME}.%d{yyyy-MM-dd}.%i.json.gz</fileNamePattern>\n            <maxFileSize>500MB</maxFileSize>\n            <maxHistory>7</maxHistory>\n            <totalSizeCap>10GB</totalSizeCap>\n        </rollingPolicy>\n        <encoder class=\"net.logstash.logback.encoder.LogstashEncoder\">\n            <!-- Custom fields -->\n            <customFields>{\"application\":\"${APP_NAME}\",\"environment\":\"${ENV}\"}</customFields>\n\n            <!-- Include MDC -->\n            <includeMdc>true</includeMdc>\n\n            <!-- Exclude fields -->\n            <excludeMdcKey>password</excludeMdcKey>\n            <excludeMdcKey>secret</excludeMdcKey>\n\n            <!-- Field names configuration -->\n            <fieldNames>\n                <timestamp>@timestamp</timestamp>\n                <level>severity</level>\n                <logger>logger_name</logger>\n                <thread>thread_name</thread>\n                <message>message</message>\n                <mdc>context</mdc>\n            </fieldNames>\n        </encoder>\n    </appender>\n\n    <root level=\"INFO\">\n        <appender-ref ref=\"JSON_FILE\"/>\n        <appender-ref ref=\"CONSOLE\"/>\n    </root>\n</configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example JSON output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"@timestamp\": \"2026-06-12T14:30:00.123Z\",\n  \"severity\": \"INFO\",\n  \"logger_name\": \"com.example.service.OrderService\",\n  \"thread_name\": \"http-nio-8080-exec-3\",\n  \"message\": \"Order created successfully\",\n  \"context\": {\n    \"traceId\": \"a1b2c3d4\",\n    \"userId\": \"user-42\",\n    \"orderId\": \"ord-12345\"\n  },\n  \"application\": \"order-service\",\n  \"environment\": \"production\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-custom-json-layout",
      children: "1.4.2 Custom JSON Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<appender name=\"CUSTOM_JSON\" class=\"ch.qos.logback.core.ConsoleAppender\">\n    <encoder class=\"ch.qos.logback.classic.encoder.JsonEncoder\"/>\n</appender>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-programmatic-structured-logging",
      children: "1.4.3 Programmatic Structured Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.logging;\n\nimport net.logstash.logback.argument.StructuredArguments;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\n@Service\npublic class OrderLoggingService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderLoggingService.class);\n\n    public void logOrderCreation(Order order) {\n        log.info(\"Order created\",\n                StructuredArguments.keyValue(\"orderId\", order.getId()),\n                StructuredArguments.keyValue(\"userId\", order.getUserId()),\n                StructuredArguments.keyValue(\"amount\", order.getTotalAmount()),\n                StructuredArguments.keyValue(\"currency\", order.getCurrency()),\n                StructuredArguments.keyValue(\"items\", order.getItemCount()),\n                StructuredArguments.keyValue(\"channel\", order.getChannel())\n        );\n    }\n\n    public void logPaymentFailure(String orderId, String errorCode, BigDecimal amount) {\n        log.error(\"Payment failed\",\n                StructuredArguments.keyValue(\"orderId\", orderId),\n                StructuredArguments.keyValue(\"errorCode\", errorCode),\n                StructuredArguments.keyValue(\"amount\", amount),\n                StructuredArguments.keyValue(\"retryCount\", 3)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"message\": \"Order created\",\n  \"orderId\": \"ord-12345\",\n  \"userId\": \"user-42\",\n  \"amount\": 299.99,\n  \"currency\": \"USD\",\n  \"items\": 3,\n  \"channel\": \"web\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-logging-exceptions-as-structured-data",
      children: "1.4.4 Logging Exceptions as Structured Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "try {\n    paymentGateway.charge(order);\n} catch (PaymentException e) {\n    log.error(\"Payment processing failed\",\n            StructuredArguments.keyValue(\"orderId\", order.getId()),\n            StructuredArguments.keyValue(\"gateway\", \"stripe\"),\n            StructuredArguments.keyValue(\"errorType\", e.getErrorType()),\n            StructuredArguments.keyValue(\"declineCode\", e.getDeclineCode()),\n            e  // stack trace\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-log4j2-configuration",
      children: "1.5 Log4j2 Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To use Log4j2 instead of Logback:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-logging</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-log4j2</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-log4j2-springxml",
      children: "1.5.1 log4j2-spring.xml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Configuration status=\"WARN\" monitorInterval=\"30\">\n\n    <Properties>\n        <Property name=\"APP_NAME\">${spring:spring.application.name:-app}</Property>\n        <Property name=\"LOG_PATH\">${sys:logging.file.path:-logs}</Property>\n        <Property name=\"LOG_PATTERN\">\n            %d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n\n        </Property>\n    </Properties>\n\n    <Appenders>\n        <Console name=\"CONSOLE\" target=\"SYSTEM_OUT\">\n            <PatternLayout pattern=\"${LOG_PATTERN}\"/>\n        </Console>\n\n        <RollingFile name=\"FILE\" fileName=\"${LOG_PATH}/${APP_NAME}.log\"\n                     filePattern=\"${LOG_PATH}/${APP_NAME}.%d{yyyy-MM-dd}.%i.log.gz\">\n            <PatternLayout pattern=\"${LOG_PATTERN}\"/>\n            <Policies>\n                <TimeBasedTriggeringPolicy interval=\"1\" modulate=\"true\"/>\n                <SizeBasedTriggeringPolicy size=\"100 MB\"/>\n            </Policies>\n            <DefaultRolloverStrategy max=\"30\"/>\n        </RollingFile>\n\n        <RollingFile name=\"ERROR_FILE\" fileName=\"${LOG_PATH}/${APP_NAME}-error.log\"\n                     filePattern=\"${LOG_PATH}/${APP_NAME}-error.%d{yyyy-MM-dd}.log.gz\">\n            <PatternLayout pattern=\"${LOG_PATTERN}\"/>\n            <ThresholdFilter level=\"ERROR\" onMatch=\"ACCEPT\" onMismatch=\"DENY\"/>\n            <Policies>\n                <TimeBasedTriggeringPolicy interval=\"1\" modulate=\"true\"/>\n            </Policies>\n            <DefaultRolloverStrategy max=\"90\"/>\n        </RollingFile>\n\n        <Routing name=\"ROUTING\">\n            <Routes pattern=\"$${ctx:userId}\">\n                <Route>\n                    <RollingFile\n                        fileName=\"${LOG_PATH}/users/${ctx:userId}.log\"\n                        filePattern=\"${LOG_PATH}/users/${ctx:userId}.%d{yyyy-MM-dd}.log.gz\">\n                        <PatternLayout pattern=\"${LOG_PATTERN}\"/>\n                        <Policies>\n                            <TimeBasedTriggeringPolicy interval=\"1\" modulate=\"true\"/>\n                        </Policies>\n                    </RollingFile>\n                </Route>\n            </Routes>\n        </Routing>\n\n        <Console name=\"JSON_CONSOLE\" target=\"SYSTEM_OUT\">\n            <JsonTemplateLayout eventTemplateUri=\"classpath:LogstashJsonEventLayoutV1.json\"/>\n        </Console>\n    </Appenders>\n\n    <Loggers>\n        <!-- Async logger for performance -->\n        <AsyncLogger name=\"com.example\" level=\"DEBUG\" additivity=\"false\">\n            <AppenderRef ref=\"CONSOLE\"/>\n            <AppenderRef ref=\"FILE\"/>\n            <AppenderRef ref=\"ERROR_FILE\"/>\n        </AsyncLogger>\n\n        <Logger name=\"org.springframework.web\" level=\"DEBUG\"/>\n        <Logger name=\"org.springframework.security\" level=\"WARN\"/>\n        <Logger name=\"org.hibernate.SQL\" level=\"DEBUG\"/>\n\n        <!-- Root logger -->\n        <Root level=\"INFO\">\n            <AppenderRef ref=\"CONSOLE\"/>\n            <AppenderRef ref=\"FILE\"/>\n            <AppenderRef ref=\"ERROR_FILE\"/>\n        </Root>\n    </Loggers>\n\n</Configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "152-async-loggers-in-log4j2",
      children: "1.5.2 Async Loggers in Log4j2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Log4j2's async loggers use LMAX Disruptor for extremely high throughput:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.lmax</groupId>\n    <artifactId>disruptor</artifactId>\n    <version>3.4.4</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<Configuration>\n    <Appenders>\n        <RollingFile name=\"ASYNC_FILE\" ...>\n            <!-- ... -->\n        </RollingFile>\n    </Appenders>\n\n    <Loggers>\n        <AsyncRoot level=\"INFO\">\n            <AppenderRef ref=\"ASYNC_FILE\"/>\n        </AsyncRoot>\n\n        <AsyncLogger name=\"com.example.highvolume\" level=\"DEBUG\">\n            <AppenderRef ref=\"ASYNC_FILE\"/>\n        </AsyncLogger>\n    </Loggers>\n</Configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-spring-boot-logging-configuration",
      children: "1.6 Spring Boot Logging Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot allows configuring logging entirely through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.yml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "logging:\n  level:\n    root: INFO\n    com.example: DEBUG\n    com.example.service.PaymentService: TRACE\n    org.springframework.web: WARN\n    org.springframework.security: ERROR\n    org.hibernate.SQL: DEBUG\n    org.hibernate.type.descriptor.sql.BasicBinder: TRACE\n\n  pattern:\n    console: \"%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %highlight(%-5level) %cyan(%logger{36}) - %msg%n\"\n    file: \"%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n\"\n    dateformat: \"yyyy-MM-dd HH:mm:ss.SSS\"\n\n  file:\n    name: logs/application.log\n    path: logs\n    max-size: 100MB\n    max-history: 30\n    total-size-cap: 3GB\n\n  logback:\n    rollingpolicy:\n      file-name-pattern: ${LOG_FILE}.%d{yyyy-MM-dd}.%i.gz\n      max-file-size: 100MB\n      max-history: 30\n      total-size-cap: 3GB\n\n  group:\n    web: org.springframework.web, org.springframework.web.servlet\n    sql: org.hibernate.SQL, org.hibernate.type\n\n  register-shutdown-hook: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Log groups let you set levels for multiple loggers at once:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "logging:\n  group:\n    web: org.springframework.web, org.springframework.web.servlet\n    sql: org.hibernate.SQL, org.hibernate.type.descriptor.sql\n    business: com.example.service, com.example.controller\n  level:\n    web: DEBUG\n    sql: TRACE\n    business: INFO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-global-error-handling-with-controlleradvice",
      children: "1.7 Global Error Handling with @ControllerAdvice"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "171-basic-exceptionhandler",
      children: "1.7.1 Basic @ExceptionHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.error;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\nimport java.time.LocalDateTime;\nimport java.util.Map;\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<Map<String, Object>> handleNotFound(ResourceNotFoundException ex) {\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 404,\n                \"error\", \"Not Found\",\n                \"message\", ex.getMessage(),\n                \"path\", ex.getPath()\n        ));\n    }\n\n    @ExceptionHandler(InvalidRequestException.class)\n    public ResponseEntity<Map<String, Object>> handleInvalidRequest(InvalidRequestException ex) {\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 400,\n                \"error\", \"Bad Request\",\n                \"message\", ex.getMessage(),\n                \"errors\", ex.getErrors()\n        ));\n    }\n\n    @ExceptionHandler(UnauthorizedException.class)\n    public ResponseEntity<Map<String, Object>> handleUnauthorized(UnauthorizedException ex) {\n        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 401,\n                \"error\", \"Unauthorized\",\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(ForbiddenException.class)\n    public ResponseEntity<Map<String, Object>> handleForbidden(ForbiddenException ex) {\n        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 403,\n                \"error\", \"Forbidden\",\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(DuplicateResourceException.class)\n    public ResponseEntity<Map<String, Object>> handleDuplicate(DuplicateResourceException ex) {\n        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 409,\n                \"error\", \"Conflict\",\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<Map<String, Object>> handleGeneral(Exception ex) {\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 500,\n                \"error\", \"Internal Server Error\",\n                \"message\", \"An unexpected error occurred\"\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "172-custom-exception-classes",
      children: "1.7.2 Custom Exception Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.error;\n\npublic class ResourceNotFoundException extends RuntimeException {\n\n    private final String resourceType;\n    private final String resourceId;\n    private final String path;\n\n    public ResourceNotFoundException(String resourceType, String resourceId, String path) {\n        super(String.format(\"%s with id '%s' not found\", resourceType, resourceId));\n        this.resourceType = resourceType;\n        this.resourceId = resourceId;\n        this.path = path;\n    }\n\n    public String getResourceType() {\n        return resourceType;\n    }\n\n    public String getResourceId() {\n        return resourceId;\n    }\n\n    public String getPath() {\n        return path;\n    }\n}\n\npublic class InvalidRequestException extends RuntimeException {\n\n    private final List<FieldError> errors;\n\n    public InvalidRequestException(String message, List<FieldError> errors) {\n        super(message);\n        this.errors = errors;\n    }\n\n    public InvalidRequestException(String message) {\n        this(message, List.of());\n    }\n\n    public List<FieldError> getErrors() {\n        return errors;\n    }\n\n    public record FieldError(String field, String message, Object rejectedValue) {}\n}\n\npublic class UnauthorizedException extends RuntimeException {\n    public UnauthorizedException(String message) {\n        super(message);\n    }\n}\n\npublic class ForbiddenException extends RuntimeException {\n    public ForbiddenException(String message) {\n        super(message);\n    }\n}\n\npublic class DuplicateResourceException extends RuntimeException {\n    public DuplicateResourceException(String resourceType, String field, String value) {\n        super(String.format(\"%s with %s '%s' already exists\", resourceType, field, value));\n    }\n}\n\npublic class ServiceException extends RuntimeException {\n    private final String errorCode;\n\n    public ServiceException(String message, String errorCode) {\n        super(message);\n        this.errorCode = errorCode;\n    }\n\n    public ServiceException(String message, String errorCode, Throwable cause) {\n        super(message, cause);\n        this.errorCode = errorCode;\n    }\n\n    public String getErrorCode() {\n        return errorCode;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "173-complete-restcontrolleradvice",
      children: "1.7.3 Complete @RestControllerAdvice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.error;\n\nimport jakarta.validation.ConstraintViolation;\nimport jakarta.validation.ConstraintViolationException;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.HttpStatusCode;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.validation.FieldError;\nimport org.springframework.web.bind.MethodArgumentNotValidException;\nimport org.springframework.web.bind.MissingServletRequestParameterException;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\nimport org.springframework.web.context.request.WebRequest;\nimport org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;\nimport org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;\n\nimport java.time.LocalDateTime;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\n@RestControllerAdvice\npublic class RestExceptionHandler extends ResponseEntityExceptionHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(RestExceptionHandler.class);\n\n    @Override\n    protected ResponseEntity<Object> handleMethodArgumentNotValid(\n            MethodArgumentNotValidException ex,\n            HttpHeaders headers,\n            HttpStatusCode status,\n            WebRequest request) {\n\n        Map<String, Object> body = new HashMap<>();\n        body.put(\"timestamp\", LocalDateTime.now().toString());\n        body.put(\"status\", status.value());\n        body.put(\"error\", \"Validation Failed\");\n\n        List<Map<String, Object>> errors = ex.getBindingResult()\n                .getFieldErrors()\n                .stream()\n                .map(fieldError -> Map.<String, Object>of(\n                        \"field\", fieldError.getField(),\n                        \"message\", fieldError.getDefaultMessage(),\n                        \"rejectedValue\", fieldError.getRejectedValue(),\n                        \"code\", fieldError.getCode()\n                ))\n                .collect(Collectors.toList());\n\n        body.put(\"errors\", errors);\n\n        return ResponseEntity.status(status).body(body);\n    }\n\n    @Override\n    protected ResponseEntity<Object> handleMissingServletRequestParameter(\n            MissingServletRequestParameterException ex,\n            HttpHeaders headers,\n            HttpStatusCode status,\n            WebRequest request) {\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 400,\n                \"error\", \"Missing Parameter\",\n                \"parameter\", ex.getParameterName(),\n                \"parameterType\", ex.getParameterType()\n        ));\n    }\n\n    @ExceptionHandler(ConstraintViolationException.class)\n    public ResponseEntity<Object> handleConstraintViolation(ConstraintViolationException ex) {\n        Map<String, Object> errors = ex.getConstraintViolations()\n                .stream()\n                .collect(Collectors.toMap(\n                        cv -> cv.getPropertyPath().toString(),\n                        ConstraintViolation::getMessage,\n                        (a, b) -> a + \"; \" + b\n                ));\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 400,\n                \"error\", \"Validation Failed\",\n                \"errors\", errors\n        ));\n    }\n\n    @ExceptionHandler(MethodArgumentTypeMismatchException.class)\n    public ResponseEntity<Object> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 400,\n                \"error\", \"Type Mismatch\",\n                \"parameter\", ex.getName(),\n                \"expectedType\", ex.getRequiredType() != null ? ex.getRequiredType().getSimpleName() : \"unknown\",\n                \"rejectedValue\", ex.getValue()\n        ));\n    }\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<Object> handleResourceNotFound(ResourceNotFoundException ex) {\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 404,\n                \"error\", \"Not Found\",\n                \"resourceType\", ex.getResourceType(),\n                \"resourceId\", ex.getResourceId(),\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(DuplicateResourceException.class)\n    public ResponseEntity<Object> handleDuplicate(DuplicateResourceException ex) {\n        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 409,\n                \"error\", \"Conflict\",\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(InvalidRequestException.class)\n    public ResponseEntity<Object> handleInvalidRequest(InvalidRequestException ex) {\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 400,\n                \"error\", \"Bad Request\",\n                \"message\", ex.getMessage(),\n                \"errors\", ex.getErrors()\n        ));\n    }\n\n    @ExceptionHandler(UnauthorizedException.class)\n    public ResponseEntity<Object> handleUnauthorized(UnauthorizedException ex) {\n        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 401,\n                \"error\", \"Unauthorized\",\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(ForbiddenException.class)\n    public ResponseEntity<Object> handleForbidden(ForbiddenException ex) {\n        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 403,\n                \"error\", \"Forbidden\",\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(ServiceException.class)\n    public ResponseEntity<Object> handleServiceException(ServiceException ex) {\n        log.error(\"Service error: code={}, message={}\", ex.getErrorCode(), ex.getMessage(), ex);\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 500,\n                \"error\", \"Service Error\",\n                \"errorCode\", ex.getErrorCode(),\n                \"message\", ex.getMessage()\n        ));\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<Object> handleAllUncaught(Exception ex, WebRequest request) {\n        log.error(\"Unhandled exception\", ex);\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(\n                \"timestamp\", LocalDateTime.now().toString(),\n                \"status\", 500,\n                \"error\", \"Internal Server Error\",\n                \"message\", \"An unexpected error occurred. Please try again later.\",\n                \"traceId\", request.getHeader(\"X-Trace-Id\")\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-rfc-7807-problem-details",
      children: "1.8 RFC 7807 Problem Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RFC 7807 (Problem Details for HTTP APIs) provides a standard format for error responses. Spring Boot 3.x has built-in support."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "181-enabling-problem-details",
      children: "1.8.1 Enabling Problem Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  mvc:\n    problemdetails:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "182-standard-problemdetail-response",
      children: "1.8.2 Standard ProblemDetail Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With problem details enabled, Spring Boot automatically returns RFC 7807 responses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"type\": \"about:blank\",\n  \"title\": \"Not Found\",\n  \"status\": 404,\n  \"detail\": \"Order with id '999' not found\",\n  \"instance\": \"/api/orders/999\",\n  \"timestamp\": \"2026-06-12T14:30:00.123Z\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "183-custom-problemdetail",
      children: "1.8.3 Custom ProblemDetail"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.error;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ProblemDetail;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\nimport java.net.URI;\n\n@RestControllerAdvice\npublic class ProblemDetailExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.NOT_FOUND, ex.getMessage()\n        );\n        problem.setTitle(\"Resource Not Found\");\n        problem.setType(URI.create(\"https://api.example.com/errors/not-found\"));\n        problem.setInstance(URI.create(ex.getPath()));\n        problem.setProperty(\"resourceType\", ex.getResourceType());\n        problem.setProperty(\"resourceId\", ex.getResourceId());\n        problem.setProperty(\"timestamp\", java.time.Instant.now().toString());\n        return problem;\n    }\n\n    @ExceptionHandler(InvalidRequestException.class)\n    public ProblemDetail handleInvalidRequest(InvalidRequestException ex) {\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.BAD_REQUEST, ex.getMessage()\n        );\n        problem.setTitle(\"Invalid Request\");\n        problem.setType(URI.create(\"https://api.example.com/errors/invalid-request\"));\n        problem.setProperty(\"errors\", ex.getErrors());\n        problem.setProperty(\"timestamp\", java.time.Instant.now().toString());\n        return problem;\n    }\n\n    @ExceptionHandler(ServiceException.class)\n    public ProblemDetail handleServiceError(ServiceException ex) {\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage()\n        );\n        problem.setTitle(\"Service Error\");\n        problem.setType(URI.create(\"https://api.example.com/errors/service-error\"));\n        problem.setProperty(\"errorCode\", ex.getErrorCode());\n        problem.setProperty(\"timestamp\", java.time.Instant.now().toString());\n        return problem;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "184-validation-errors-with-problemdetail",
      children: "1.8.4 Validation Errors with ProblemDetail"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestControllerAdvice\npublic class ValidationProblemDetailHandler extends ResponseEntityExceptionHandler {\n\n    @Override\n    protected ResponseEntity<Object> handleMethodArgumentNotValid(\n            MethodArgumentNotValidException ex,\n            HttpHeaders headers,\n            HttpStatusCode status,\n            WebRequest request) {\n\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                status, \"Validation failed for the request\"\n        );\n        problem.setTitle(\"Validation Error\");\n        problem.setType(URI.create(\"https://api.example.com/errors/validation\"));\n\n        List<Map<String, Object>> errors = ex.getBindingResult()\n                .getFieldErrors()\n                .stream()\n                .map(fe -> Map.<String, Object>of(\n                        \"field\", fe.getField(),\n                        \"message\", fe.getDefaultMessage(),\n                        \"rejectedValue\", fe.getRejectedValue()\n                ))\n                .toList();\n\n        problem.setProperty(\"errors\", errors);\n        problem.setProperty(\"timestamp\", Instant.now().toString());\n\n        return ResponseEntity.status(status).body(problem);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-internationalization-i18n",
      children: "1.9 Internationalization (i18n)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot provides comprehensive i18n support through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MessageSource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LocaleResolver"
      }), ", and Thymeleaf integration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "191-messagesource-configuration",
      children: "1.9.1 MessageSource Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.config;\n\nimport org.springframework.context.MessageSource;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.support.ReloadableResourceBundleMessageSource;\nimport org.springframework.web.servlet.LocaleResolver;\nimport org.springframework.web.servlet.i18n.AcceptHeaderLocaleResolver;\nimport org.springframework.web.servlet.i18n.CookieLocaleResolver;\nimport org.springframework.web.servlet.i18n.SessionLocaleResolver;\n\nimport java.time.Duration;\nimport java.util.Locale;\n\n@Configuration\npublic class I18nConfig {\n\n    @Bean\n    public MessageSource messageSource() {\n        ReloadableResourceBundleMessageSource messageSource =\n                new ReloadableResourceBundleMessageSource();\n\n        // Base names of message bundles (comma-separated)\n        messageSource.setBasenames(\n                \"classpath:messages/messages\",\n                \"classpath:messages/validation\",\n                \"classpath:messages/emails\",\n                \"classpath:messages/errors\"\n        );\n\n        // UTF-8 encoding for full Unicode support\n        messageSource.setDefaultEncoding(\"UTF-8\");\n\n        // Cache seconds for development (0 = always reload, production = 3600+)\n        messageSource.setCacheSeconds(3600);\n\n        // Fallback to system locale if no matching bundle found\n        messageSource.setFallbackToSystemLocale(false);\n\n        // Use the message code as the default message if not found\n        messageSource.setUseCodeAsDefaultMessage(true);\n\n        // Always use the message format (even for single-argument messages)\n        messageSource.setAlwaysUseMessageFormat(false);\n\n        return messageSource;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "192-localeresolver-strategies",
      children: "1.9.2 LocaleResolver Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AcceptHeaderLocaleResolver"
      }), " → uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept-Language"
      }), " HTTP header:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic LocaleResolver localeResolver() {\n    AcceptHeaderLocaleResolver resolver = new AcceptHeaderLocaleResolver();\n    resolver.setDefaultLocale(Locale.ENGLISH);\n    resolver.setSupportedLocales(List.of(\n            Locale.ENGLISH,\n            Locale.FRENCH,\n            Locale.GERMAN,\n            Locale.JAPANESE,\n            new Locale(\"es\"),\n            new Locale(\"pt\", \"BR\"),\n            new Locale(\"zh\", \"CN\")\n    ));\n    return resolver;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SessionLocaleResolver"
      }), " → stores locale in the HTTP session:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic LocaleResolver localeResolver() {\n    SessionLocaleResolver resolver = new SessionLocaleResolver();\n    resolver.setDefaultLocale(Locale.ENGLISH);\n    resolver.setSupportedLocales(List.of(Locale.ENGLISH, Locale.FRENCH, Locale.GERMAN));\n    return resolver;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CookieLocaleResolver"
      }), " → stores locale in a cookie (persists across sessions):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic LocaleResolver localeResolver() {\n    CookieLocaleResolver resolver = new CookieLocaleResolver();\n    resolver.setDefaultLocale(Locale.ENGLISH);\n    resolver.setCookieName(\"LANG\");\n    resolver.setCookieMaxAge(Duration.ofDays(365));\n    resolver.setCookiePath(\"/\");\n    resolver.setCookieSecure(true);\n    resolver.setCookieHttpOnly(true);\n    resolver.setSupportedLocales(List.of(\n            Locale.ENGLISH,\n            Locale.FRENCH,\n            Locale.GERMAN,\n            Locale.SPANISH\n    ));\n    return resolver;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom LocaleResolver"
      }), " → for database-backed locale persistence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.config;\n\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.web.servlet.i18n.AbstractLocaleResolver;\n\nimport java.util.Locale;\n\npublic class UserPreferenceLocaleResolver extends AbstractLocaleResolver {\n\n    private final UserLocaleRepository userLocaleRepository;\n\n    public UserPreferenceLocaleResolver(UserLocaleRepository userLocaleRepository) {\n        this.userLocaleRepository = userLocaleRepository;\n    }\n\n    @Override\n    public Locale resolveLocale(HttpServletRequest request) {\n        String userId = request.getUserPrincipal() != null\n                ? request.getUserPrincipal().getName()\n                : null;\n\n        if (userId != null) {\n            return userLocaleRepository.findByUserId(userId)\n                    .map(UserLocale::getLocale)\n                    .orElse(getDefaultLocale());\n        }\n\n        String acceptLanguage = request.getHeader(\"Accept-Language\");\n        if (acceptLanguage != null) {\n            return Locale.LanguageRange.parse(acceptLanguage).stream()\n                    .map(range -> Locale.forLanguageTag(range.getRange()))\n                    .filter(locale -> getSupportedLocales().contains(locale))\n                    .findFirst()\n                    .orElse(getDefaultLocale());\n        }\n\n        return getDefaultLocale();\n    }\n\n    @Override\n    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {\n        String userId = request.getUserPrincipal() != null\n                ? request.getUserPrincipal().getName()\n                : null;\n\n        if (userId != null) {\n            userLocaleRepository.save(new UserLocale(userId, locale));\n        }\n    }\n\n    private List<Locale> getSupportedLocales() {\n        return List.of(Locale.ENGLISH, Locale.FRENCH, Locale.GERMAN);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "193-message-bundles",
      children: "1.9.3 Message Bundles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "src/main/resources/messages/messages.properties"
      }), " (default → English):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# General\napp.title=My Application\napp.description=Welcome to our e-commerce platform\napp.footer.copyright=© 2026 My App Inc. All rights reserved.\n\n# Navigation\nnav.home=Home\nnav.products=Products\nnav.cart=Shopping Cart\nnav.profile=My Profile\nnav.logout=Logout\nnav.login=Login\nnav.register=Register\n\n# Product\nproduct.title=Products\nproduct.search=Search products...\nproduct.addToCart=Add to Cart\nproduct.outOfStock=Out of Stock\nproduct.price=Price\nproduct.description=Description\nproduct.reviews=Reviews\nproduct.addReview=Write a Review\n\n# Order\norder.confirmation=Order Confirmation\norder.number=Order Number\norder.date=Order Date\norder.status=Order Status\norder.total=Total Amount\norder.items=Order Items\norder.shippingAddress=Shipping Address\norder.placeOrder=Place Order\norder.cancel=Cancel Order\n\n# Cart\ncart.empty=Your cart is empty\ncart.total=Cart Total\ncart.checkout=Proceed to Checkout\ncart.continueShopping=Continue Shopping\ncart.remove=Remove\ncart.quantity=Quantity\ncart.summary=Cart Summary\n\n# User\nuser.welcome=Welcome, {0}\nuser.profile=My Profile\nuser.settings=Settings\nuser.orders=My Orders\nuser.addresses=My Addresses\nuser.paymentMethods=Payment Methods\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "src/main/resources/messages/messages_fr.properties"
      }), " (French):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# General\napp.title=Mon Application\napp.description=Bienvenue sur notre plateforme e-commerce\napp.footer.copyright=© 2026 My App Inc. Tous droits réservés.\n\n# Navigation\nnav.home=Accueil\nnav.products=Produits\nnav.cart=Panier\nnav.profile=Mon Profil\nnav.logout=Déconnexion\nnav.login=Connexion\nnav.register=S'inscrire\n\n# Product\nproduct.title=Produits\nproduct.search=Rechercher des produits...\nproduct.addToCart=Ajouter au panier\nproduct.outOfStock=Rupture de stock\nproduct.price=Prix\nproduct.description=Description\nproduct.reviews=Avis\nproduct.addReview=Donner votre avis\n\n# Order\norder.confirmation=Confirmation de commande\norder.number=Numéro de commande\norder.date=Date de commande\norder.status=Statut de la commande\norder.total=Montant total\norder.items=Articles commandés\norder.shippingAddress=Adresse de livraison\norder.placeOrder=Passer la commande\norder.cancel=Annuler la commande\n\n# Cart\ncart.empty=Votre panier est vide\ncart.total=Total du panier\ncart.checkout=Commander\ncart.continueShopping=Continuer vos achats\ncart.remove=Supprimer\ncart.quantity=Quantité\ncart.summary=Récapitulatif du panier\n\n# User\nuser.welcome=Bienvenue, {0}\nuser.profile=Mon Profil\nuser.settings=Paramètres\nuser.orders=Mes commandes\nuser.addresses=Mes adresses\nuser.paymentMethods=Moyens de paiement\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "src/main/resources/messages/messages_de.properties"
      }), " (German):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# General\napp.title=Meine Anwendung\napp.description=Willkommen auf unserer E-Commerce-Plattform\napp.footer.copyright=© 2026 My App Inc. Alle Rechte vorbehalten.\n\n# Navigation\nnav.home=Startseite\nnav.products=Produkte\nnav.cart=Warenkorb\nnav.profile=Mein Profil\nnav.logout=Abmelden\nnav.login=Anmelden\nnav.register=Registrieren\n\n# Product\nproduct.title=Produkte\nproduct.search=Produkte suchen...\nproduct.addToCart=In den Warenkorb\nproduct.outOfStock=Ausverkauft\nproduct.price=Preis\nproduct.description=Beschreibung\nproduct.reviews=Bewertungen\nproduct.addReview=Bewertung schreiben\n\n# Order\norder.confirmation=Bestellbestätigung\norder.number=Bestellnummer\norder.date=Bestelldatum\norder.status=Bestellstatus\norder.total=Gesamtbetrag\norder.items=Bestellte Artikel\norder.shippingAddress=Lieferadresse\norder.placeOrder=Bestellung aufgeben\norder.cancel=Bestellung stornieren\n\n# Cart\ncart.empty=Ihr Warenkorb ist leer\ncart.total=Warenkorbsumme\ncart.checkout=Zur Kasse\ncart.continueShopping=Einkauf fortsetzen\ncart.remove=Entfernen\ncart.quantity=Menge\ncart.summary=Warenkorbübersicht\n\n# User\nuser.welcome=Willkommen, {0}\nuser.profile=Mein Profil\nuser.settings=Einstellungen\nuser.orders=Meine Bestellungen\nuser.addresses=Meine Adressen\nuser.paymentMethods=Zahlungsmethoden\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "194-using-messagesource-in-code",
      children: "1.9.4 Using MessageSource in Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.service;\n\nimport org.springframework.context.MessageSource;\nimport org.springframework.context.i18n.LocaleContextHolder;\nimport org.springframework.stereotype.Service;\n\nimport java.util.Locale;\n\n@Service\npublic class LocalizedMessageService {\n\n    private final MessageSource messageSource;\n\n    public LocalizedMessageService(MessageSource messageSource) {\n        this.messageSource = messageSource;\n    }\n\n    public String getMessage(String code) {\n        return messageSource.getMessage(code, null, LocaleContextHolder.getLocale());\n    }\n\n    public String getMessage(String code, Object[] args) {\n        return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());\n    }\n\n    public String getMessage(String code, Object[] args, Locale locale) {\n        return messageSource.getMessage(code, args, locale);\n    }\n\n    public String getWelcomeMessage(String username) {\n        return messageSource.getMessage(\n                \"user.welcome\",\n                new Object[]{username},\n                LocaleContextHolder.getLocale()\n        );\n    }\n\n    public String getOrderConfirmation(String orderNumber, String date) {\n        return messageSource.getMessage(\n                \"order.confirmation.detail\",\n                new Object[]{orderNumber, date},\n                LocaleContextHolder.getLocale()\n        );\n    }\n\n    public String getCartSummary(int itemCount, BigDecimal total) {\n        return messageSource.getMessage(\n                \"cart.summary.detail\",\n                new Object[]{itemCount, total},\n                LocaleContextHolder.getLocale()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "195-locale-change-controller",
      children: "1.9.5 Locale Change Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.controller;\n\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.context.i18n.LocaleContextHolder;\nimport org.springframework.web.bind.annotation.*;\nimport org.springframework.web.servlet.LocaleResolver;\n\nimport java.util.Locale;\n\n@RestController\n@RequestMapping(\"/api/locale\")\npublic class LocaleController {\n\n    private final LocaleResolver localeResolver;\n\n    public LocaleController(LocaleResolver localeResolver) {\n        this.localeResolver = localeResolver;\n    }\n\n    @GetMapping(\"/current\")\n    public Map<String, Object> getCurrentLocale() {\n        Locale current = LocaleContextHolder.getLocale();\n        return Map.of(\n                \"language\", current.getLanguage(),\n                \"displayLanguage\", current.getDisplayLanguage(),\n                \"country\", current.getCountry(),\n                \"displayName\", current.getDisplayName(),\n                \"toLanguageTag\", current.toLanguageTag()\n        );\n    }\n\n    @PostMapping(\"/change\")\n    public Map<String, String> changeLocale(\n            @RequestParam String lang,\n            HttpServletRequest request,\n            HttpServletResponse response) {\n\n        Locale locale = Locale.forLanguageTag(lang);\n        localeResolver.setLocale(request, response, locale);\n\n        return Map.of(\n                \"message\", \"Locale changed to \" + locale.getDisplayLanguage(),\n                \"locale\", locale.toLanguageTag()\n        );\n    }\n\n    @GetMapping(\"/supported\")\n    public List<Map<String, String>> getSupportedLocales() {\n        return List.of(\n                Map.of(\"code\", \"en\", \"name\", \"English\"),\n                Map.of(\"code\", \"fr\", \"name\", \"Français\"),\n                Map.of(\"code\", \"de\", \"name\", \"Deutsch\"),\n                Map.of(\"code\", \"es\", \"name\", \"Español\"),\n                Map.of(\"code\", \"ja\", \"name\", \"日本語\"),\n                Map.of(\"code\", \"zh-CN\", \"name\", \"中文\"),\n                Map.of(\"code\", \"pt-BR\", \"name\", \"Português (Brasil)\")\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-thymeleaf-i18n-integration",
      children: "1.10 Thymeleaf i18n Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For server-rendered views with Thymeleaf, i18n is built-in:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title th:text=\"#{app.title}\">My Application</title>\n</head>\n<body>\n    <header>\n        <nav>\n            <a th:href=\"@{/}\" th:text=\"#{nav.home}\">Home</a>\n            <a th:href=\"@{/products}\" th:text=\"#{nav.products}\">Products</a>\n            <a th:href=\"@{/cart}\" th:text=\"#{nav.cart}\">Cart</a>\n            <a th:href=\"@{/profile}\" th:text=\"#{nav.profile}\">Profile</a>\n\n            <div class=\"locale-selector\">\n                <a th:href=\"@{/api/locale/change(lang=en)}\">EN</a>\n                <a th:href=\"@{/api/locale/change(lang=fr)}\">FR</a>\n                <a th:href=\"@{/api/locale/change(lang=de)}\">DE</a>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n        <h1 th:text=\"#{product.title}\">Products</h1>\n\n        <div class=\"welcome-message\" th:text=\"#{user.welcome(${session.user.name})}\">\n            Welcome, Guest\n        </div>\n\n        <div class=\"product-grid\" th:each=\"product : ${products}\">\n            <div class=\"product-card\">\n                <h3 th:text=\"${product.name}\">Product Name</h3>\n                <p class=\"price\" th:text=\"#{product.price} + ': ' + ${product.price}\">\n                    Price: $0.00\n                </p>\n                <p class=\"stock\" th:if=\"${product.inStock}\"\n                   th:text=\"#{product.addToCart}\">\n                    Add to Cart\n                </p>\n                <p class=\"stock out-of-stock\" th:unless=\"${product.inStock}\"\n                   th:text=\"#{product.outOfStock}\">\n                    Out of Stock\n                </p>\n            </div>\n        </div>\n    </main>\n\n    <footer>\n        <p th:text=\"#{app.footer.copyright}\">Copyright</p>\n    </footer>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thymeleaf message expression: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#{message.code}"
      }), " resolves through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MessageSource"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With parameters: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#{user.welcome(${user.name})}"
      }), " maps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{0}"
      }), " in the message bundle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-validation-message-internationalization",
      children: "1.11 Validation Message Internationalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1111-validation-message-bundles",
      children: "1.11.1 Validation Message Bundles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "src/main/resources/messages/validation.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Field validation messages\nNotBlank.orderRequest.customerName=Customer name is required\nNotBlank.orderRequest.email=Email address is required\nNotBlank.orderRequest.shippingAddress=Shipping address is required\nEmail.orderRequest.email=Please provide a valid email address\nPositive.orderRequest.totalAmount=Total amount must be positive\nSize.orderRequest.customerName=Customer name must be between {2} and {1} characters\nMin.orderRequest.totalAmount=Minimum order amount is {1}\nMax.orderRequest.totalAmount=Maximum order amount is {1}\nPattern.orderRequest.phone=Phone number must match the pattern {1}\n\n# Global validation messages\njakarta.validation.constraints.NotBlank.message={field} is required\njakarta.validation.constraints.Email.message={field} must be a valid email\njakarta.validation.constraints.Positive.message={field} must be positive\njakarta.validation.constraints.Size.message={field} size must be between {min} and {max}\njakarta.validation.constraints.Min.message={field} must be at least {value}\njakarta.validation.constraints.Max.message={field} must be at most {value}\njakarta.validation.constraints.NotNull.message={field} is required\njakarta.validation.constraints.Pattern.message={field} has invalid format\norg.hibernate.validator.constraints.Length.message={field} length must be between {min} and {max}\norg.hibernate.validator.constraints.CreditCardNumber.message={field} is not a valid card number\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "src/main/resources/messages/validation_fr.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Field validation messages\nNotBlank.orderRequest.customerName=Le nom du client est obligatoire\nNotBlank.orderRequest.email=L'adresse e-mail est obligatoire\nNotBlank.orderRequest.shippingAddress=L'adresse de livraison est obligatoire\nEmail.orderRequest.email=Veuillez fournir une adresse e-mail valide\nPositive.orderRequest.totalAmount=Le montant total doit être positif\nSize.orderRequest.customerName=Le nom doit contenir entre {2} et {1} caractères\nMin.orderRequest.totalAmount=Le montant minimum est de {1}\nMax.orderRequest.totalAmount=Le montant maximum est de {1}\nPattern.orderRequest.phone=Le numéro de téléphone doit correspondre au format {1}\n\n# Global validation messages\njakarta.validation.constraints.NotBlank.message={field} est obligatoire\njakarta.validation.constraints.Email.message={field} doit être un e-mail valide\njakarta.validation.constraints.Positive.message={field} doit être positif\njakarta.validation.constraints.Size.message={field} doit contenir entre {min} et {max} caractères\njakarta.validation.constraints.Min.message={field} doit être au moins {value}\njakarta.validation.constraints.Max.message={field} doit être au plus {value}\njakarta.validation.constraints.NotNull.message={field} est obligatoire\njakarta.validation.constraints.Pattern.message={field} a un format invalide\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1112-dto-with-i18n-validation-messages",
      children: "1.11.2 DTO with i18n Validation Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.dto;\n\nimport jakarta.validation.constraints.*;\nimport java.math.BigDecimal;\nimport java.util.List;\n\npublic class OrderRequest {\n\n    @NotBlank(message = \"{NotBlank.orderRequest.customerName}\")\n    @Size(min = 2, max = 100, message = \"{Size.orderRequest.customerName}\")\n    private String customerName;\n\n    @NotBlank(message = \"{NotBlank.orderRequest.email}\")\n    @Email(message = \"{Email.orderRequest.email}\")\n    private String email;\n\n    @NotBlank(message = \"{NotBlank.orderRequest.shippingAddress}\")\n    private String shippingAddress;\n\n    @Positive(message = \"{Positive.orderRequest.totalAmount}\")\n    @Min(value = 1, message = \"{Min.orderRequest.totalAmount}\")\n    @Max(value = 100000, message = \"{Max.orderRequest.totalAmount}\")\n    private BigDecimal totalAmount;\n\n    @Pattern(regexp = \"\\\\+?[0-9]{7,15}\", message = \"{Pattern.orderRequest.phone}\")\n    private String phone;\n\n    @NotEmpty\n    private List<@NotBlank String> items;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1113-custom-validator-with-i18n",
      children: "1.11.3 Custom Validator with i18n"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.validation;\n\nimport jakarta.validation.Constraint;\nimport jakarta.validation.Payload;\nimport java.lang.annotation.*;\n\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Constraint(validatedBy = DateRangeValidator.class)\npublic @interface ValidDateRange {\n\n    String message() default \"{ValidDateRange.orderRequest}\";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.validation;\n\nimport jakarta.validation.ConstraintValidator;\nimport jakarta.validation.ConstraintValidatorContext;\n\npublic class DateRangeValidator implements ConstraintValidator<ValidDateRange, DateRangeRequest> {\n\n    @Override\n    public boolean isValid(DateRangeRequest value, ConstraintValidatorContext context) {\n        if (value.getStartDate() == null || value.getEndDate() == null) {\n            return true; // @NotNull handles this\n        }\n        return value.getEndDate().isAfter(value.getStartDate());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Message bundle entry:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "ValidDateRange.orderRequest=End date must be after start date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "French:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "ValidDateRange.orderRequest=La date de fin doit être postérieure à la date de début\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-programmatic-message-resolution-in-rest-controllers",
      children: "1.12 Programmatic Message Resolution in REST Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.controller;\n\nimport org.springframework.context.MessageSource;\nimport org.springframework.context.i18n.LocaleContextHolder;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Locale;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/messages\")\npublic class LocalizedMessageController {\n\n    private final MessageSource messageSource;\n\n    public LocalizedMessageController(MessageSource messageSource) {\n        this.messageSource = messageSource;\n    }\n\n    @GetMapping(\"/{code}\")\n    public ResponseEntity<Map<String, String>> getMessage(\n            @PathVariable String code,\n            @RequestParam(required = false) Locale locale) {\n\n        Locale resolvedLocale = locale != null ? locale : LocaleContextHolder.getLocale();\n\n        String message = messageSource.getMessage(\n                code,\n                null,\n                \"Message not found for: \" + code,\n                resolvedLocale\n        );\n\n        return ResponseEntity.ok(Map.of(\n                \"code\", code,\n                \"message\", message,\n                \"locale\", resolvedLocale.toLanguageTag()\n        ));\n    }\n\n    @PostMapping(\"/format\")\n    public ResponseEntity<Map<String, Object>> formatMessage(\n            @RequestBody MessageFormatRequest request) {\n\n        Locale locale = request.locale() != null\n                ? request.locale()\n                : LocaleContextHolder.getLocale();\n\n        String formatted = messageSource.getMessage(\n                request.code(),\n                request.args() != null ? request.args().toArray() : null,\n                locale\n        );\n\n        return ResponseEntity.ok(Map.of(\n                \"code\", request.code(),\n                \"formatted\", formatted,\n                \"locale\", locale.toLanguageTag()\n        ));\n    }\n\n    public record MessageFormatRequest(\n            String code,\n            List<String> args,\n            Locale locale\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-locale-interceptor",
      children: "1.13 Locale Interceptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.config;\n\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.slf4j.MDC;\nimport org.springframework.web.servlet.HandlerInterceptor;\nimport org.springframework.web.servlet.LocaleResolver;\n\nimport java.util.Locale;\n\npublic class LocaleLoggingInterceptor implements HandlerInterceptor {\n\n    private final LocaleResolver localeResolver;\n\n    public LocaleLoggingInterceptor(LocaleResolver localeResolver) {\n        this.localeResolver = localeResolver;\n    }\n\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,\n                             Object handler) {\n        Locale locale = localeResolver.resolveLocale(request);\n        MDC.put(\"locale\", locale.toLanguageTag());\n        return true;\n    }\n\n    @Override\n    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,\n                                Object handler, Exception ex) {\n        MDC.remove(\"locale\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register the interceptor:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n\n    private final LocaleResolver localeResolver;\n\n    public WebConfig(LocaleResolver localeResolver) {\n        this.localeResolver = localeResolver;\n    }\n\n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(new LocaleLoggingInterceptor(localeResolver));\n        registry.addInterceptor(new LocaleChangeInterceptor());\n    }\n\n    @Bean\n    public LocaleChangeInterceptor localeChangeInterceptor() {\n        LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();\n        interceptor.setParamName(\"lang\");\n        return interceptor;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-date-number-and-currency-formatting-with-i18n",
      children: "1.14 Date, Number, and Currency Formatting with i18n"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.i18n.service;\n\nimport org.springframework.context.i18n.LocaleContextHolder;\nimport org.springframework.stereotype.Service;\n\nimport java.math.BigDecimal;\nimport java.text.NumberFormat;\nimport java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\nimport java.time.format.FormatStyle;\nimport java.util.Locale;\n\n@Service\npublic class LocalizedFormattingService {\n\n    public String formatDate(LocalDate date) {\n        Locale locale = LocaleContextHolder.getLocale();\n        DateTimeFormatter formatter = DateTimeFormatter\n                .ofLocalizedDate(FormatStyle.MEDIUM)\n                .withLocale(locale);\n        return date.format(formatter);\n    }\n\n    public String formatDateTime(LocalDateTime dateTime) {\n        Locale locale = LocaleContextHolder.getLocale();\n        DateTimeFormatter formatter = DateTimeFormatter\n                .ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.SHORT)\n                .withLocale(locale);\n        return dateTime.format(formatter);\n    }\n\n    public String formatCurrency(BigDecimal amount) {\n        Locale locale = LocaleContextHolder.getLocale();\n        NumberFormat formatter = NumberFormat.getCurrencyInstance(locale);\n        return formatter.format(amount);\n    }\n\n    public String formatNumber(BigDecimal number, int decimalPlaces) {\n        Locale locale = LocaleContextHolder.getLocale();\n        NumberFormat formatter = NumberFormat.getNumberInstance(locale);\n        formatter.setMinimumFractionDigits(decimalPlaces);\n        formatter.setMaximumFractionDigits(decimalPlaces);\n        return formatter.format(number);\n    }\n\n    public String formatPercentage(double value) {\n        Locale locale = LocaleContextHolder.getLocale();\n        NumberFormat formatter = NumberFormat.getPercentInstance(locale);\n        return formatter.format(value);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-complete-error-handling-example-with-i18n",
      children: "1.15 Complete Error Handling Example with i18n"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.error;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.MessageSource;\nimport org.springframework.context.i18n.LocaleContextHolder;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ProblemDetail;\nimport org.springframework.web.bind.MethodArgumentNotValidException;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\nimport java.net.URI;\nimport java.time.Instant;\nimport java.util.List;\nimport java.util.Locale;\n\n@RestControllerAdvice\npublic class I18nExceptionHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(I18nExceptionHandler.class);\n    private final MessageSource messageSource;\n\n    public I18nExceptionHandler(MessageSource messageSource) {\n        this.messageSource = messageSource;\n    }\n\n    private String resolve(String code, Object... args) {\n        Locale locale = LocaleContextHolder.getLocale();\n        return messageSource.getMessage(code, args, code, locale);\n    }\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.NOT_FOUND,\n                resolve(\"error.notFound\", ex.getResourceType(), ex.getResourceId())\n        );\n        problem.setTitle(resolve(\"error.notFound.title\"));\n        problem.setType(URI.create(\"https://api.example.com/errors/not-found\"));\n        problem.setProperty(\"timestamp\", Instant.now().toString());\n        problem.setProperty(\"resourceType\", ex.getResourceType());\n        problem.setProperty(\"resourceId\", ex.getResourceId());\n        return problem;\n    }\n\n    @ExceptionHandler(InvalidRequestException.class)\n    public ProblemDetail handleInvalidRequest(InvalidRequestException ex) {\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.BAD_REQUEST,\n                resolve(\"error.invalidRequest\")\n        );\n        problem.setTitle(resolve(\"error.invalidRequest.title\"));\n        problem.setType(URI.create(\"https://api.example.com/errors/invalid-request\"));\n        problem.setProperty(\"timestamp\", Instant.now().toString());\n        return problem;\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ProblemDetail handleValidation(MethodArgumentNotValidException ex) {\n        Locale locale = LocaleContextHolder.getLocale();\n\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.BAD_REQUEST,\n                resolve(\"error.validation\")\n        );\n        problem.setTitle(resolve(\"error.validation.title\"));\n        problem.setType(URI.create(\"https://api.example.com/errors/validation\"));\n        problem.setProperty(\"timestamp\", Instant.now().toString());\n\n        List<LocalizedFieldError> errors = ex.getBindingResult()\n                .getFieldErrors()\n                .stream()\n                .map(fe -> new LocalizedFieldError(\n                        fe.getField(),\n                        messageSource.getMessage(\n                                fe.getDefaultMessage() != null && fe.getDefaultMessage().startsWith(\"{\")\n                                        ? fe.getDefaultMessage().substring(1, fe.getDefaultMessage().length() - 1)\n                                        : fe.getDefaultMessage(),\n                                null,\n                                fe.getDefaultMessage(),\n                                locale\n                        ),\n                        fe.getRejectedValue()\n                ))\n                .toList();\n\n        problem.setProperty(\"errors\", errors);\n        return problem;\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ProblemDetail handleGeneral(Exception ex) {\n        log.error(\"Unhandled exception\", ex);\n        ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.INTERNAL_SERVER_ERROR,\n                resolve(\"error.internal\")\n        );\n        problem.setTitle(resolve(\"error.internal.title\"));\n        problem.setType(URI.create(\"https://api.example.com/errors/internal\"));\n        problem.setProperty(\"timestamp\", Instant.now().toString());\n        return problem;\n    }\n\n    public record LocalizedFieldError(String field, String message, Object rejectedValue) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-creating-a-logging-aspect-for-business-operations",
      children: "1.16 Creating a Logging Aspect for Business Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.logging;\n\nimport org.aspectj.lang.ProceedingJoinPoint;\nimport org.aspectj.lang.annotation.Around;\nimport org.aspectj.lang.annotation.Aspect;\nimport org.aspectj.lang.reflect.MethodSignature;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.slf4j.MDC;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Arrays;\nimport java.util.UUID;\nimport java.util.stream.Collectors;\n\n@Aspect\n@Component\npublic class LoggingAspect {\n\n    @Around(\"execution(* com.example.service.*.*(..))\")\n    public Object logServiceMethod(ProceedingJoinPoint joinPoint) throws Throwable {\n        MethodSignature signature = (MethodSignature) joinPoint.getSignature();\n        Logger log = LoggerFactory.getLogger(signature.getDeclaringType());\n\n        String className = signature.getDeclaringType().getSimpleName();\n        String methodName = signature.getMethod().getName();\n        Object[] args = joinPoint.getArgs();\n\n        String correlationId = UUID.randomUUID().toString().substring(0, 8);\n\n        try {\n            MDC.put(\"correlationId\", correlationId);\n            MDC.put(\"class\", className);\n            MDC.put(\"method\", methodName);\n\n            log.info(\"→ {}.{}({})\", className, methodName,\n                    Arrays.stream(args)\n                            .map(a -> a != null ? a.toString() : \"null\")\n                            .collect(Collectors.joining(\", \")));\n\n            long start = System.currentTimeMillis();\n            Object result = joinPoint.proceed();\n            long duration = System.currentTimeMillis() - start;\n\n            if (duration > 1000) {\n                log.warn(\"← {}.{} completed in {}ms (SLOW)\", className, methodName, duration);\n            } else {\n                log.info(\"← {}.{} completed in {}ms\", className, methodName, duration);\n            }\n\n            return result;\n\n        } catch (Exception e) {\n            log.error(\"✗ {}.{} failed: {}\", className, methodName, e.getMessage(), e);\n            throw e;\n        } finally {\n            MDC.clear();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-complete-logging-configuration-example",
      children: "1.17 Complete Logging Configuration Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Putting it all together:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<configuration scan=\"true\" scanPeriod=\"30 seconds\">\n\n    <springProperty name=\"APP_NAME\" source=\"spring.application.name\" defaultValue=\"app\"/>\n    <springProperty name=\"LOG_PATH\" source=\"logging.file.path\" defaultValue=\"logs\"/>\n    <springProperty name=\"ENV\" source=\"spring.profiles.active\" defaultValue=\"dev\"/>\n\n    <!-- Console Appender with Colors -->\n    <appender name=\"CONSOLE\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder>\n            <pattern>\n                %d{HH:mm:ss.SSS} %highlight(%-5level) [%thread] %cyan(%logger{36}) %magenta([%X{traceId}]) - %msg%n\n            </pattern>\n        </encoder>\n    </appender>\n\n    <!-- JSON Appender for Log Aggregation -->\n    <appender name=\"JSON_FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>${LOG_PATH}/${APP_NAME}.json</file>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy\">\n            <fileNamePattern>${LOG_PATH}/${APP_NAME}.%d{yyyy-MM-dd}.%i.json.gz</fileNamePattern>\n            <maxFileSize>500MB</maxFileSize>\n            <maxHistory>7</maxHistory>\n            <totalSizeCap>10GB</totalSizeCap>\n        </rollingPolicy>\n        <encoder class=\"net.logstash.logback.encoder.LogstashEncoder\">\n            <customFields>{\"application\":\"${APP_NAME}\",\"environment\":\"${ENV}\"}</customFields>\n            <includeMdc>true</includeMdc>\n            <fieldNames>\n                <timestamp>@timestamp</timestamp>\n                <level>severity</level>\n                <logger>logger</logger>\n                <thread>thread</thread>\n                <message>message</message>\n                <mdc>context</mdc>\n            </fieldNames>\n        </encoder>\n    </appender>\n\n    <!-- Error Tracing Appender -->\n    <appender name=\"ERROR_FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>${LOG_PATH}/${APP_NAME}-error.log</file>\n        <filter class=\"ch.qos.logback.classic.filter.ThresholdFilter\">\n            <level>ERROR</level>\n        </filter>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n            <fileNamePattern>${LOG_PATH}/${APP_NAME}-error.%d{yyyy-MM-dd}.log</fileNamePattern>\n            <maxHistory>90</maxHistory>\n        </rollingPolicy>\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} [%X{traceId}] - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <!-- Audit Log -->\n    <appender name=\"AUDIT_FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>${LOG_PATH}/${APP_NAME}-audit.log</file>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n            <fileNamePattern>${LOG_PATH}/${APP_NAME}-audit.%d{yyyy-MM-dd}.log</fileNamePattern>\n            <maxHistory>365</maxHistory>\n        </rollingPolicy>\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} | %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <!-- Audit Logger -->\n    <logger name=\"AUDIT\" level=\"INFO\" additivity=\"false\">\n        <appender-ref ref=\"AUDIT_FILE\"/>\n    </logger>\n\n    <!-- Package-specific Logging -->\n    <logger name=\"com.example\" level=\"DEBUG\" additivity=\"false\">\n        <appender-ref ref=\"CONSOLE\"/>\n        <appender-ref ref=\"JSON_FILE\"/>\n        <appender-ref ref=\"ERROR_FILE\"/>\n    </logger>\n\n    <logger name=\"com.example.service\" level=\"TRACE\"/>\n\n    <logger name=\"org.springframework.web\" level=\"INFO\"/>\n    <logger name=\"org.springframework.security\" level=\"WARN\"/>\n    <logger name=\"org.springframework.cache\" level=\"TRACE\"/>\n\n    <logger name=\"org.hibernate.SQL\" level=\"DEBUG\">\n        <appender-ref ref=\"CONSOLE\"/>\n    </logger>\n\n    <!-- Root Logger -->\n    <root level=\"INFO\">\n        <appender-ref ref=\"CONSOLE\"/>\n        <appender-ref ref=\"JSON_FILE\"/>\n        <appender-ref ref=\"ERROR_FILE\"/>\n    </root>\n\n    <!-- Profile-specific configuration -->\n    <springProfile name=\"dev\">\n        <logger name=\"com.example\" level=\"DEBUG\"/>\n        <logger name=\"org.springframework.web\" level=\"DEBUG\"/>\n        <root level=\"INFO\">\n            <appender-ref ref=\"CONSOLE\"/>\n        </root>\n    </springProfile>\n\n    <springProfile name=\"prod\">\n        <logger name=\"com.example\" level=\"WARN\"/>\n        <root level=\"WARN\">\n            <appender-ref ref=\"JSON_FILE\"/>\n            <appender-ref ref=\"ERROR_FILE\"/>\n        </root>\n    </springProfile>\n\n</configuration>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-best-practices",
      children: "1.18 Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use SLF4J API"
        }), " in application code, never Logback or Log4j2 directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use parameterized logging"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{}"
        }), " placeholders instead of string concatenation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use MDC"
        }), " for contextual information (trace IDs, user IDs, request IDs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always clear MDC"
        }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finally"
        }), " block when using it in non-filter code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use structured JSON logging"
        }), " for production to feed log aggregators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create separate appenders"
        }), " for different severity levels and audit trails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ControllerAdvice"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ExceptionHandler"
          })]
        }), " for centralized error handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adopt RFC 7807 Problem Details"
        }), " for standardized API error responses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MessageSource"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReloadableResourceBundleMessageSource"
          })]
        }), " for i18n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name message bundle keys systematically"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error.code"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation.field.constraint"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always provide a default message"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "messageSource.getMessage()"
        }), " calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LocaleContextHolder"
          })]
        }), " to access the current locale in any layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internationalize validation messages"
        }), " by using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{message.code}"
        }), " in constraint annotations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Configure a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LocaleResolver"
          })]
        }), " appropriate for your deployment (AcceptHeader for APIs, Cookie for web apps)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handle uncaught exceptions"
        }), " with a catch-all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ExceptionHandler(Exception.class)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log exceptions at the right level"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log.error"
        }), " for application errors, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log.warn"
        }), " for recoverable issues."]
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
            children: "Logback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default SLF4J implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible configuration, rolling file appenders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log4j2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative logging implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async loggers, garbage-free mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLF4J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging facade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouples API from implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapped Diagnostic Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-local key-value pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request tracing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-formatted log output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine-parseable, log aggregation friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELK/EFK stack integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Log Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spring Boot Default"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical failures requiring immediate attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WARN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recoverable issues or unusual conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal application lifecycle events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed diagnostic information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very detailed execution trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden"
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
            children: "Log Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WARN for app, INFO for framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Appenders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Console"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Console + File rolling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Console + File rolling + external"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDC Population"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request ID + user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request ID + user + session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request ID + user + session + tenant"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the recommended way to add contextual information to log entries in Spring Boot?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Thread name"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Mapped Diagnostic Context (MDC)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) System.out.println"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Static fields"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Mapped Diagnostic Context (MDC).** MDC allows adding request-specific information that gets included in all subsequent log entries from the same thread.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Spring annotation captures exception handling globally?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @ExceptionHandler"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @ControllerAdvice"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @RestController"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @ResponseStatus"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) @ControllerAdvice.** @ControllerAdvice combined with @ExceptionHandler methods provides global, cross-controller exception handling.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you resolve locale-specific messages in Spring Boot?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Resource bundle properties files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) JavaScript i18n library"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Database translations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) OS locale settings"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) Resource bundle properties files.** Spring Boot uses MessageSource backed by messages.properties files per locale, resolved via Accept-Language header.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered three critical pillars of production Spring Boot applications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logging"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLF4J as the universal API with parameterized logging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logback configuration with appenders, rolling policies, MDC, and structured JSON"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log4j2 as an alternative with async loggers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MDC for contextual tracing, logging aspects for AOP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spring Boot-level logging configuration with groups and profiles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ControllerAdvice"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestControllerAdvice"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ExceptionHandler"
        }), " for global error management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ResponseEntityExceptionHandler"
        }), " for overriding Spring MVC error responses"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom exception classes mapping to appropriate HTTP status codes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RFC 7807 Problem Details for standardized error payloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured, localized error responses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internationalization"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MessageSource"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReloadableResourceBundleMessageSource"
        }), " for dynamic reloading"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Multiple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LocaleResolver"
        }), " strategies: AcceptHeader, Session, Cookie, custom"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Message bundles for UI text, validation errors, and domain-specific messages"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thymeleaf integration with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#{}"
        }), " expressions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i18n of Bean Validation error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Date, number, and currency formatting per locale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These three topics work together: errors should be logged with context, returned in the user's locale, and structured for easy consumption by both humans and machines."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-logback-configuration",
      children: "Exercise 1: Logback Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a complete ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logback-spring.xml"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logs to console with colored output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logs to a rolling file (daily, max 100MB per file, 30 day retention)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logs ERROR level to a separate error file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses MDC values for trace ID and user ID"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Has different levels per environment (dev=DEBUG, prod=WARN)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "springProfile"
        }), " tags for environment-specific configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Include all appender definitions, encoder patterns, and logger declarations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-structured-json-logging",
      children: "Exercise 2: Structured JSON Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add the Logstash encoder and configure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A JSON file appender with daily rotation and gzip compression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom fields for application name and environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MDC inclusion in JSON output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom field name mappings (timestamp → @timestamp, level → severity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redaction of sensitive fields (password, secret, creditCard)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a test that logs an order creation event and verifies the JSON output structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-mdc-filter",
      children: "Exercise 3: MDC Filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MDCFilter"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates a unique trace ID for each request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Captures the request URI, HTTP method, remote address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Captures the authenticated username if present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds all values to MDC before the request is processed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Clears MDC in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finally"
        }), " block after the response"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Include the trace ID in all log messages. Verify with a test controller."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-global-error-handler",
      children: "Exercise 4: Global Error Handler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GlobalExceptionHandler"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestControllerAdvice"
      }), " that handles:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MethodArgumentNotValidException"
        }), " → returns field-level validation errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ConstraintViolationException"
        }), " → returns constraint violation messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MissingServletRequestParameterException"
        }), " → returns missing parameter info"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MethodArgumentTypeMismatchException"
        }), " → returns type mismatch details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HttpMessageNotReadableException"
        }), " → returns malformed request body error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "AccessDeniedException"
        }), " → returns 403 with a message"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Any other ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exception"
        }), " → returns 500 with a generic message"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Format all responses as RFC 7807 Problem Details with timestamps and trace IDs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-problem-details-with-rfc-7807",
      children: "Exercise 5: Problem Details with RFC 7807"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enable problem details in Spring Boot 3.x and:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.mvc.problemdetails.enabled=true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProblemDetail"
        }), " responses for your domain exceptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), " field to meaningful error documentation URLs"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add custom properties for error codes, field names, and timestamps"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Override the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResponseEntityExceptionHandler"
        }), " methods for Spring's built-in exceptions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test with curl and verify the JSON response structure matches RFC 7807."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-messagesource-configuration",
      children: "Exercise 6: MessageSource Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReloadableResourceBundleMessageSource"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Three base bundle names: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "messages"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "emails"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UTF-8 encoding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No fallback to system locale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use code as default message (for development)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache for 1 hour in production, 0 in dev"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create bundles for English and French with at least 20 message keys each covering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI navigation elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Form labels and buttons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Success/error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Email templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-localeresolver-implementation",
      children: "Exercise 7: LocaleResolver Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement three different ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LocaleResolver"
      }), " strategies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "AcceptHeaderLocaleResolver"
        }), " → for REST API clients"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CookieLocaleResolver"
        }), " → for web applications with persistence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SessionLocaleResolver"
        }), " → for session-based web apps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LocaleChangeInterceptor"
      }), " and a controller endpoint that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Returns the current locale with language, country, and display name"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changes locale via POST with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lang"
        }), " parameter"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lists all supported locales"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test by sending different ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept-Language"
      }), " headers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-internationalized-validation",
      children: "Exercise 8: Internationalized Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserRegistrationRequest"
      }), " DTO with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "username"
        }), ": @NotBlank, @Size(min=3, max=50)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), ": @NotBlank, @Email"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "password"
        }), ": @NotBlank, @Size(min=8, max=100), @Pattern for strength"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "phone"
        }), ": @Pattern for international format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "age"
        }), ": @Min(18), @Max(120)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All messages should use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{message.code}"
      }), " notation referencing a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validation"
      }), " bundle. Create messages in English and German. Write a test that verifies the correct localized error message is returned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-thymeleaf-i18n-integration",
      children: "Exercise 9: Thymeleaf i18n Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a Thymeleaf template that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#{}"
        }), " expressions for all user-facing text"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formats currency values according to locale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formats dates according to locale"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Has a language switcher that changes the locale via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LocaleChangeInterceptor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses parameterized messages with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{0}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{1}"
        }), " placeholders"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes right-to-left (RTL) support for Arabic/Hebrew locales"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-audit-logging-system",
      children: "Exercise 10: Audit Logging System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build an audit logging system with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AUDIT"
        }), " logger that writes to a separate audit file (365-day retention)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Auditable"
        }), " annotation for marking methods that need audit logging"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An AOP aspect that captures method entry/exit with parameters and duration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured audit log entries with actor, action, resource, status, and timestamp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MDC context for correlation IDs across audit entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A controller endpoint to query recent audit log entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a test that verifies the audit log file contains expected entries after performing actions."
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