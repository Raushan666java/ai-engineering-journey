"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75509],{

/***/ 64125
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_51_modulith_md_503_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-51-modulith-md-503.json
const site_docs_courses_java_51_modulith_md_503_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/51-modulith","title":"Spring Modulith","description":"Previous Docker &amp; Containerization","source":"@site/docs/courses/java/51-modulith.md","sourceDirName":"courses/java","slug":"/java/51-modulith","permalink":"/ai-engineering-journey/java/51-modulith","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":51,"frontMatter":{"id":"51-modulith","slug":"/java/51-modulith","title":"Spring Modulith","sidebar_label":"Spring Modulith","sidebar_position":51},"sidebar":"course-java","previous":{"title":"Spring Integration","permalink":"/ai-engineering-journey/java/50-integration"},"next":{"title":"Docker & Containerization","permalink":"/ai-engineering-journey/java/52-docker"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/51-modulith.md


const frontMatter = {
	id: '51-modulith',
	slug: '/java/51-modulith',
	title: 'Spring Modulith',
	sidebar_label: 'Spring Modulith',
	sidebar_position: 51
};
const contentTitle = 'Spring Modulith';

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
  "value": "1. Spring Modulith Overview",
  "id": "1-spring-modulith-overview",
  "level": 2
}, {
  "value": "1.1 Maven Dependencies",
  "id": "11-maven-dependencies",
  "level": 3
}, {
  "value": "1.2 Application Configuration",
  "id": "12-application-configuration",
  "level": 3
}, {
  "value": "1.3 Project Structure",
  "id": "13-project-structure",
  "level": 3
}, {
  "value": "2. Module Declarations",
  "id": "2-module-declarations",
  "level": 2
}, {
  "value": "2.1 Main Application",
  "id": "21-main-application",
  "level": 3
}, {
  "value": "2.2 Catalog Module",
  "id": "22-catalog-module",
  "level": 3
}, {
  "value": "2.3 Order Module",
  "id": "23-order-module",
  "level": 3
}, {
  "value": "2.4 Other Module Declarations",
  "id": "24-other-module-declarations",
  "level": 3
}, {
  "value": "3. Shared Kernel",
  "id": "3-shared-kernel",
  "level": 2
}, {
  "value": "4. Domain Models",
  "id": "4-domain-models",
  "level": 2
}, {
  "value": "4.1 Catalog Module Domain",
  "id": "41-catalog-module-domain",
  "level": 3
}, {
  "value": "4.2 Order Module Domain",
  "id": "42-order-module-domain",
  "level": 3
}, {
  "value": "4.3 Payment Module Domain",
  "id": "43-payment-module-domain",
  "level": 3
}, {
  "value": "4.4 Inventory Module Domain",
  "id": "44-inventory-module-domain",
  "level": 3
}, {
  "value": "5. Application Services",
  "id": "5-application-services",
  "level": 2
}, {
  "value": "5.1 Order Service",
  "id": "51-order-service",
  "level": 3
}, {
  "value": "5.2 Payment Service",
  "id": "52-payment-service",
  "level": 3
}, {
  "value": "5.3 Inventory Service",
  "id": "53-inventory-service",
  "level": 3
}, {
  "value": "6. Internal Event Handlers",
  "id": "6-internal-event-handlers",
  "level": 2
}, {
  "value": "7. Module Verification and Tests",
  "id": "7-module-verification-and-tests",
  "level": 2
}, {
  "value": "8. REST Controllers",
  "id": "8-rest-controllers",
  "level": 2
}, {
  "value": "9. Event Definitions",
  "id": "9-event-definitions",
  "level": 2
}, {
  "value": "10. Event Publication Configuration",
  "id": "10-event-publication-configuration",
  "level": 2
}, {
  "value": "11. Migration to Microservices",
  "id": "11-migration-to-microservices",
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
        id: "spring-modulith",
        children: "Spring Modulith"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/50-integration",
          children: "Spring Integration"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/52-docker",
          children: "Docker & Containerization"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
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
        href: "../../assets/images/lessons/java/51-modulith/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/51-modulith/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/51-modulith/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/51-modulith/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/51-modulith/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/51-modulith/visual-explanation.png",
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
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure a Spring Boot application as a modular monolith"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define module boundaries with @ApplicationModule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify module dependencies with strict verification tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test modules in isolation with @ApplicationModuleTest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement event-driven communication with internal events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate module documentation and structure diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan and execute migration from monolith to microservices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use DDD tactical patterns within module boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply contract-first approach for service APIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-spring-modulith-overview",
      children: "1. Spring Modulith Overview"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/51-modulith.png",
        alt: "Spring Modulith - Modular Monolith Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Modulith helps architects and developers structure Spring Boot applications as modular monoliths → a middle ground between traditional monoliths and microservices. It enforces module boundaries, enables event-driven integration, and provides a clear path to eventual microservice extraction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-maven-dependencies",
      children: "1.1 Maven Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.4.0</version>\n        <relativePath/>\n    </parent>\n    <groupId>com.aiengineering</groupId>\n    <artifactId>modulith-course</artifactId>\n    <version>1.0.0</version>\n    <name>modulith-course</name>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-validation</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.modulith</groupId>\n            <artifactId>spring-modulith-starter-core</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.modulith</groupId>\n            <artifactId>spring-modulith-starter-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.modulith</groupId>\n            <artifactId>spring-modulith-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.modulith</groupId>\n            <artifactId>spring-modulith-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.modulith</groupId>\n            <artifactId>spring-modulith-docs</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.modulith</groupId>\n                <artifactId>spring-modulith-bom</artifactId>\n                <version>1.3.0</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-application-configuration",
      children: "1.2 Application Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\n\n> **Previous:** [Spring Integration](./50-integration.md) | **Next:** [Docker &amp; Containerization](./52-docker.md)\nspring:\n  application:\n    name: modulith-course\n\n  datasource:\n    url: jdbc:postgresql://localhost:5432/modulith_course\n    username: postgres\n    password: postgres\n    driver-class-name: org.postgresql.Driver\n\n  jpa:\n    hibernate:\n      ddl-auto: update\n    show-sql: false\n    open-in-view: false\n\n  modulith:\n    events:\n      jdbc:\n        schema-initializer:\n          enabled: true\n      republish-outstanding-on-restart: true\n      completion-mode: delete\n    moments:\n      enable-logging: true\n\nserver:\n  port: 8080\n\nlogging:\n  level:\n    org.springframework.modulith: DEBUG\n    org.springframework.transaction: INFO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-project-structure",
      children: "1.3 Project Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/java/com/aiengineering/course/\n├── CourseApplication.java\n├── shared/\n│   ├── SharedKernel.java\n│   └── types/\n│       ├── Money.java\n│       ├── Address.java\n│       ├── Email.java\n│       └── PhoneNumber.java\n├── catalog/\n│   ├── CatalogModule.java\n│   ├── domain/\n│   │   ├── Product.java\n│   │   ├── Category.java\n│   │   ├── InventoryItem.java\n│   │   └── ProductRepository.java\n│   ├── application/\n│   │   ├── ProductService.java\n│   │   ├── InventoryService.java\n│   │   └── dto/\n│   │       ├── ProductDto.java\n│   │       ├── ProductCreateRequest.java\n│   │       └── InventoryDto.java\n│   └── internal/\n│       ├── ProductEventHandler.java\n│       └── ProductValidator.java\n├── order/\n│   ├── OrderModule.java\n│   ├── domain/\n│   │   ├── Order.java\n│   │   ├── OrderItem.java\n│   │   ├── OrderRepository.java\n│   │   ├── OrderStatus.java\n│   │   └── events/\n│   │       ├── OrderPlacedEvent.java\n│   │       ├── OrderShippedEvent.java\n│   │       └── OrderCancelledEvent.java\n│   ├── application/\n│   │   ├── OrderService.java\n│   │   ├── OrderPlacement.java\n│   │   └── dto/\n│   │       ├── OrderDto.java\n│   │       └── OrderCreateRequest.java\n│   └── internal/\n│       ├── OrderEventListener.java\n│       └── OrderValidator.java\n├── payment/\n│   ├── PaymentModule.java\n│   ├── domain/\n│   │   ├── Payment.java\n│   │   ├── PaymentMethod.java\n│   │   ├── PaymentStatus.java\n│   │   ├── PaymentRepository.java\n│   │   └── events/\n│   │       └── PaymentCompletedEvent.java\n│   ├── application/\n│   │   ├── PaymentService.java\n│   │   └── dto/\n│   │       └── PaymentDto.java\n│   └── internal/\n│       └── PaymentProcessor.java\n├── inventory/\n│   ├── InventoryModule.java\n│   ├── domain/\n│   │   ├── Stock.java\n│   │   ├── Warehouse.java\n│   │   ├── StockMovement.java\n│   │   └── StockRepository.java\n│   ├── application/\n│   │   ├── InventoryService.java\n│   │   └── dto/\n│   │       ├── StockDto.java\n│   │       └── StockReservation.java\n│   └── internal/\n│       └── StockReservationHandler.java\n├── notification/\n│   ├── NotificationModule.java\n│   ├── domain/\n│   │   ├── Notification.java\n│   │   └── NotificationType.java\n│   ├── application/\n│   │   ├── NotificationService.java\n│   │   └── dto/\n│   │       └── NotificationDto.java\n│   └── internal/\n│       ├── EmailSender.java\n│       ├── SmsSender.java\n│       └── PushNotificationSender.java\n├── shipping/\n│   ├── ShippingModule.java\n│   ├── domain/\n│   │   ├── Shipment.java\n│   │   ├── Carrier.java\n│   │   └── ShipmentStatus.java\n│   └── application/\n│       ├── ShippingService.java\n│       └── dto/\n│           └── ShipmentDto.java\n├── customer/\n│   ├── CustomerModule.java\n│   ├── domain/\n│   │   ├── Customer.java\n│   │   └── CustomerRepository.java\n│   └── application/\n│       ├── CustomerService.java\n│       └── dto/\n│           └── CustomerDto.java\n└── api/\n    ├── ApiModule.java\n    └── rest/\n        ├── OrderController.java\n        ├── CatalogController.java\n        ├── PaymentController.java\n        └── CustomerController.java\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-module-declarations",
      children: "2. Module Declarations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-main-application",
      children: "2.1 Main Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.modulith.Modulith;\nimport org.springframework.modulith.core.ApplicationModules;\nimport org.springframework.modulith.docs.Documenter;\n\n@SpringBootApplication\n@Modulith(\n    displayName = \"E-Commerce Modulith\",\n    systemName = \"E-Commerce Platform\",\n    useDeliberateDependencyLookup = true\n)\npublic class CourseApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(CourseApplication.class, args);\n    }\n\n    static void verifyStructure() {\n        var modules = ApplicationModules.of(CourseApplication.class);\n        modules.verify();\n\n        System.out.println(\"=== Module Structure ===\");\n        modules.forEach(System.out::println);\n\n        System.out.println(\"\\n=== Module Dependencies ===\");\n        modules.stream().forEach(module -> {\n            System.out.println(module.getName() + \" -> \"\n                + String.join(\", \", modules.getRequiredDirectDependencies(module)\n                    .stream()\n                    .map(dep -> dep.getName())\n                    .toList()));\n        });\n    }\n\n    static void generateDocumentation() {\n        var modules = ApplicationModules.of(CourseApplication.class);\n        modules.verify();\n\n        new Documenter(modules)\n            .writeModulesAsPlantUml()\n            .writeIndividualModulesAsPlantUml();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-catalog-module",
      children: "2.2 Catalog Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.catalog;\n\nimport org.springframework.modulith.ApplicationModule;\nimport org.springframework.modulith.NamedInterface;\nimport org.springframework.modulith.PackageInfo;\nimport org.springframework.transaction.annotation.Transactional;\n\n@ApplicationModule(\n    displayName = \"catalog\",\n    allowedDependencies = {\"shared\"}\n)\n@NamedInterface(\"catalog.api\")\n@PackageInfo\n@Transactional(readOnly = true)\npublic class CatalogModule {\n\n    @Override\n    public String toString() {\n        return \"Catalog Module - Product and Inventory Management\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-order-module",
      children: "2.3 Order Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order;\n\nimport org.springframework.modulith.ApplicationModule;\nimport org.springframework.modulith.NamedInterface;\nimport org.springframework.transaction.annotation.Transactional;\n\n@ApplicationModule(\n    displayName = \"order\",\n    allowedDependencies = {\"catalog\", \"customer\", \"shared\"}\n)\n@NamedInterface(\"order.api\")\n@Transactional\npublic class OrderModule {\n\n    public static final String MODULE_NAME = \"order\";\n    public static final String DISPLAY_NAME = \"Order Management\";\n\n    private OrderModule() {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-other-module-declarations",
      children: "2.4 Other Module Declarations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.payment;\n\nimport org.springframework.modulith.ApplicationModule;\nimport org.springframework.transaction.annotation.Transactional;\n\n@ApplicationModule(\n    displayName = \"payment\",\n    allowedDependencies = {\"order\", \"shared\"}\n)\n@Transactional\npublic class PaymentModule {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.inventory;\n\nimport org.springframework.modulith.ApplicationModule;\nimport org.springframework.transaction.annotation.Transactional;\n\n@ApplicationModule(\n    displayName = \"inventory\",\n    allowedDependencies = {\"catalog\", \"shared\"}\n)\npublic class InventoryModule {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.notification;\n\nimport org.springframework.modulith.ApplicationModule;\n\n@ApplicationModule(\n    displayName = \"notification\",\n    allowedDependencies = {\"shared\"}\n)\npublic class NotificationModule {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.shipping;\n\nimport org.springframework.modulith.ApplicationModule;\nimport org.springframework.transaction.annotation.Transactional;\n\n@ApplicationModule(\n    displayName = \"shipping\",\n    allowedDependencies = {\"order\", \"inventory\", \"shared\"}\n)\npublic class ShippingModule {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.customer;\n\nimport org.springframework.modulith.ApplicationModule;\n\n@ApplicationModule(\n    displayName = \"customer\",\n    allowedDependencies = {\"shared\"}\n)\npublic class CustomerModule {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.api;\n\nimport org.springframework.modulith.ApplicationModule;\n\n@ApplicationModule(\n    displayName = \"api\",\n    allowedDependencies = {\"catalog\", \"order\", \"payment\", \"shipping\", \"customer\", \"shared\"}\n)\npublic class ApiModule {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-shared-kernel",
      children: "3. Shared Kernel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.shared;\n\nimport org.springframework.stereotype.Component;\nimport org.springframework.util.Assert;\n\nimport java.math.BigDecimal;\nimport java.math.RoundingMode;\nimport java.util.Currency;\nimport java.util.Objects;\n\n@Component\npublic record Money(BigDecimal amount, Currency currency) {\n\n    public static final Currency DEFAULT_CURRENCY = Currency.getInstance(\"USD\");\n\n    public Money {\n        Assert.notNull(amount, \"Amount must not be null\");\n        Assert.notNull(currency, \"Currency must not be null\");\n        Assert.isTrue(amount.compareTo(BigDecimal.ZERO) >= 0,\n            \"Amount must not be negative\");\n\n        amount = amount.setScale(2, RoundingMode.HALF_UP);\n    }\n\n    public static Money of(double amount) {\n        return new Money(BigDecimal.valueOf(amount), DEFAULT_CURRENCY);\n    }\n\n    public static Money of(BigDecimal amount) {\n        return new Money(amount, DEFAULT_CURRENCY);\n    }\n\n    public static Money of(BigDecimal amount, Currency currency) {\n        return new Money(amount, currency);\n    }\n\n    public static Money zero() {\n        return new Money(BigDecimal.ZERO, DEFAULT_CURRENCY);\n    }\n\n    public Money add(Money other) {\n        assertSameCurrency(other);\n        return new Money(this.amount.add(other.amount), this.currency);\n    }\n\n    public Money subtract(Money other) {\n        assertSameCurrency(other);\n        return new Money(this.amount.subtract(other.amount), this.currency);\n    }\n\n    public Money multiply(int multiplier) {\n        return new Money(this.amount.multiply(BigDecimal.valueOf(multiplier)),\n            this.currency);\n    }\n\n    public Money multiply(double multiplier) {\n        return new Money(this.amount.multiply(BigDecimal.valueOf(multiplier)),\n            this.currency);\n    }\n\n    public boolean isGreaterThan(Money other) {\n        assertSameCurrency(other);\n        return this.amount.compareTo(other.amount) > 0;\n    }\n\n    public boolean isLessThan(Money other) {\n        assertSameCurrency(other);\n        return this.amount.compareTo(other.amount) < 0;\n    }\n\n    public boolean isZero() {\n        return this.amount.compareTo(BigDecimal.ZERO) == 0;\n    }\n\n    private void assertSameCurrency(Money other) {\n        if (!this.currency.equals(other.currency)) {\n            throw new IllegalArgumentException(\n                \"Currency mismatch: \" + this.currency + \" vs \" + other.currency);\n        }\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Money money)) return false;\n        return amount.compareTo(money.amount) == 0\n            && currency.equals(money.currency);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(amount.stripTrailingZeros(), currency);\n    }\n\n    @Override\n    public String toString() {\n        return currency.getSymbol() + \" \" + amount.toPlainString();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.shared;\n\nimport org.springframework.util.Assert;\n\npublic record Email(String value) {\n\n    private static final String EMAIL_PATTERN =\n        \"^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$\";\n\n    public Email {\n        Assert.hasText(value, \"Email must not be empty\");\n        Assert.isTrue(value.matches(EMAIL_PATTERN),\n            \"Invalid email format: \" + value);\n        value = value.toLowerCase().trim();\n    }\n\n    public String getDomain() {\n        return value.substring(value.indexOf('@') + 1);\n    }\n\n    public String getLocalPart() {\n        return value.substring(0, value.indexOf('@'));\n    }\n\n    @Override\n    public String toString() {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.shared;\n\nimport org.springframework.util.Assert;\n\npublic record Address(\n    String street,\n    String city,\n    String state,\n    String zipCode,\n    String country\n) {\n    public Address {\n        Assert.hasText(street, \"Street must not be empty\");\n        Assert.hasText(city, \"City must not be empty\");\n        Assert.hasText(country, \"Country must not be empty\");\n    }\n\n    public String getFormattedAddress() {\n        StringBuilder sb = new StringBuilder();\n\n        sb.append(street).append(\"\\n\");\n        sb.append(city);\n\n        if (state != null && !state.isBlank()) {\n            sb.append(\", \").append(state);\n        }\n\n        if (zipCode != null && !zipCode.isBlank()) {\n            sb.append(\" \").append(zipCode);\n        }\n\n        sb.append(\"\\n\").append(country);\n\n        return sb.toString();\n    }\n\n    public boolean isDomestic(String domesticCountry) {\n        return country.equalsIgnoreCase(domesticCountry);\n    }\n\n    public Address withStreet(String newStreet) {\n        return new Address(newStreet, city, state, zipCode, country);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.shared;\n\nimport org.springframework.util.Assert;\n\npublic record PhoneNumber(String value, String countryCode) {\n\n    private static final String PHONE_PATTERN = \"^\\\\+?[1-9]\\\\d{1,14}$\";\n\n    public PhoneNumber {\n        Assert.hasText(value, \"Phone number must not be empty\");\n        Assert.hasText(countryCode, \"Country code must not be empty\");\n\n        String cleanNumber = value.replaceAll(\"[\\\\s\\\\-()]\", \"\");\n        Assert.isTrue(cleanNumber.matches(PHONE_PATTERN),\n            \"Invalid phone number: \" + value);\n    }\n\n    public String getInternationalFormat() {\n        return countryCode + value.replaceAll(\"^0+\", \"\");\n    }\n\n    public String getNationalFormat() {\n        String number = value;\n        if (number.startsWith(countryCode)) {\n            number = number.substring(countryCode.length());\n        }\n        return number;\n    }\n\n    public static PhoneNumber of(String value) {\n        return new PhoneNumber(value, \"1\");\n    }\n\n    public static PhoneNumber of(String value, String countryCode) {\n        return new PhoneNumber(value, countryCode);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-domain-models",
      children: "4. Domain Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-catalog-module-domain",
      children: "4.1 Catalog Module Domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.catalog.domain;\n\nimport com.aiengineering.course.shared.Money;\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.NotNull;\nimport lombok.*;\nimport org.hibernate.annotations.CreationTimestamp;\nimport org.hibernate.annotations.UpdateTimestamp;\n\nimport java.time.LocalDateTime;\nimport java.util.HashSet;\nimport java.util.Set;\n\n@Entity\n@Table(name = \"products\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\npublic class Product {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @NotBlank\n    @Column(unique = true, nullable = false, length = 100)\n    private String sku;\n\n    @NotBlank\n    @Column(nullable = false, length = 200)\n    private String name;\n\n    @Column(columnDefinition = \"TEXT\")\n    private String description;\n\n    @NotNull\n    @AttributeOverride(name = \"amount\", column = @Column(name = \"price_amount\", precision = 15, scale = 2))\n    @AttributeOverride(name = \"currency\", column = @Column(name = \"price_currency\", length = 3))\n    private Money price;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"category_id\")\n    private Category category;\n\n    @Column(name = \"image_url\", length = 500)\n    private String imageUrl;\n\n    @Column(name = \"is_active\")\n    private boolean active;\n\n    @Column(name = \"is_available\")\n    private boolean available;\n\n    @Column(name = \"weight_kg\")\n    private Double weightKg;\n\n    @ElementCollection\n    @CollectionTable(name = \"product_tags\", joinColumns = @JoinColumn(name = \"product_id\"))\n    @Column(name = \"tag\", length = 50)\n    private Set<String> tags = new HashSet<>();\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp\n    @Column(name = \"updated_at\")\n    private LocalDateTime updatedAt;\n\n    @Version\n    private Long version;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.catalog.domain;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport lombok.*;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Entity\n@Table(name = \"categories\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\npublic class Category {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @NotBlank\n    @Column(unique = true, nullable = false, length = 100)\n    private String name;\n\n    @Column(length = 500)\n    private String description;\n\n    @Column(length = 200)\n    private String slug;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"parent_category_id\")\n    private Category parentCategory;\n\n    @OneToMany(mappedBy = \"parentCategory\")\n    private List<Category> subcategories = new ArrayList<>();\n\n    @Column(name = \"display_order\")\n    private Integer displayOrder;\n\n    @Column(name = \"is_active\")\n    private boolean active;\n\n    public boolean isRoot() {\n        return parentCategory == null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.catalog.domain;\n\nimport jakarta.persistence.*;\nimport lombok.*;\n\n@Entity\n@Table(name = \"inventory_items\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\npublic class InventoryItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @OneToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"product_id\", unique = true)\n    private Product product;\n\n    @Column(name = \"quantity_on_hand\")\n    private int quantityOnHand;\n\n    @Column(name = \"quantity_reserved\")\n    private int quantityReserved;\n\n    @Column(name = \"reorder_point\")\n    private int reorderPoint;\n\n    @Column(name = \"reorder_quantity\")\n    private int reorderQuantity;\n\n    @Column(length = 50)\n    private String location;\n\n    public int getAvailableQuantity() {\n        return quantityOnHand - quantityReserved;\n    }\n\n    public boolean isInStock() {\n        return getAvailableQuantity() > 0;\n    }\n\n    public boolean needsReorder() {\n        return getAvailableQuantity() <= reorderPoint;\n    }\n\n    public void reserve(int quantity) {\n        if (getAvailableQuantity() < quantity) {\n            throw new IllegalStateException(\n                \"Insufficient stock: \" + getAvailableQuantity()\n                + \" available, \" + quantity + \" requested\");\n        }\n        this.quantityReserved += quantity;\n    }\n\n    public void release(int quantity) {\n        this.quantityReserved = Math.max(0, this.quantityReserved - quantity);\n    }\n\n    public void addStock(int quantity) {\n        this.quantityOnHand += quantity;\n    }\n\n    public void removeStock(int quantity) {\n        if (this.quantityOnHand < quantity) {\n            throw new IllegalStateException(\n                \"Insufficient stock on hand\");\n        }\n        this.quantityOnHand -= quantity;\n        this.quantityReserved = Math.max(0, this.quantityReserved - quantity);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-order-module-domain",
      children: "4.2 Order Module Domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain;\n\nimport com.aiengineering.course.order.domain.events.OrderPlacedEvent;\nimport com.aiengineering.course.shared.Money;\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport lombok.*;\nimport org.springframework.data.domain.AbstractAggregateRoot;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Entity\n@Table(name = \"orders\")\n@Getter @Setter\n@NoArgsConstructor @AllArgsConstructor\n@EqualsAndHashCode(callSuper = false, onlyExplicitlyIncluded = true)\npublic class Order extends AbstractAggregateRoot<Order> {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @Column(name = \"order_number\", unique = true, nullable = false, length = 50)\n    private String orderNumber;\n\n    @Column(name = \"customer_id\", nullable = false)\n    private Long customerId;\n\n    @Enumerated(EnumType.STRING)\n    @Column(nullable = false, length = 20)\n    private OrderStatus status;\n\n    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)\n    @JoinColumn(name = \"order_id\")\n    private List<OrderItem> items = new ArrayList<>();\n\n    @AttributeOverride(name = \"amount\", column = @Column(name = \"subtotal_amount\", precision = 15, scale = 2))\n    @AttributeOverride(name = \"currency\", column = @Column(name = \"subtotal_currency\", length = 3))\n    private Money subtotal;\n\n    @AttributeOverride(name = \"amount\", column = @Column(name = \"tax_amount\", precision = 15, scale = 2))\n    @AttributeOverride(name = \"currency\", column = @Column(name = \"tax_currency\", length = 3))\n    private Money tax;\n\n    @AttributeOverride(name = \"amount\", column = @Column(name = \"shipping_cost\", precision = 15, scale = 2))\n    @AttributeOverride(name = \"currency\", column = @Column(name = \"shipping_currency\", length = 3))\n    private Money shippingCost;\n\n    @AttributeOverride(name = \"amount\", column = @Column(name = \"total_amount\", precision = 15, scale = 2))\n    @AttributeOverride(name = \"currency\", column = @Column(name = \"total_currency\", length = 3))\n    private Money total;\n\n    @Embedded\n    private ShippingAddress shippingAddress;\n\n    @Column(name = \"notes\", length = 2000)\n    private String notes;\n\n    @Column(name = \"placed_at\")\n    private LocalDateTime placedAt;\n\n    @Column(name = \"shipped_at\")\n    private LocalDateTime shippedAt;\n\n    @Column(name = \"delivered_at\")\n    private LocalDateTime deliveredAt;\n\n    @Column(name = \"cancelled_at\")\n    private LocalDateTime cancelledAt;\n\n    @Column(name = \"cancellation_reason\", length = 500)\n    private String cancellationReason;\n\n    @Version\n    private Long version;\n\n    public static Order createOrder(String orderNumber, Long customerId,\n                                     List<OrderItem> items, Money subtotal,\n                                     Money tax, Money shippingCost, Money total,\n                                     ShippingAddress shippingAddress) {\n        Order order = new Order();\n        order.orderNumber = orderNumber;\n        order.customerId = customerId;\n        order.status = OrderStatus.PENDING;\n        order.items = new ArrayList<>(items);\n        order.subtotal = subtotal;\n        order.tax = tax;\n        order.shippingCost = shippingCost;\n        order.total = total;\n        order.shippingAddress = shippingAddress;\n        order.placedAt = LocalDateTime.now();\n\n        order.registerEvent(new OrderPlacedEvent(\n            order.orderNumber,\n            order.customerId,\n            order.total,\n            order.items.stream()\n                .map(item -> new OrderPlacedEvent.OrderItemInfo(\n                    item.getProductId(),\n                    item.getProductName(),\n                    item.getQuantity(),\n                    item.getPrice()))\n                .toList()\n        ));\n\n        return order;\n    }\n\n    public void confirm() {\n        if (status != OrderStatus.PENDING) {\n            throw new IllegalStateException(\n                \"Cannot confirm order in status: \" + status);\n        }\n        this.status = OrderStatus.CONFIRMED;\n    }\n\n    public void ship(String trackingNumber) {\n        if (status != OrderStatus.CONFIRMED) {\n            throw new IllegalStateException(\n                \"Cannot ship order in status: \" + status);\n        }\n        this.status = OrderStatus.SHIPPED;\n        this.shippedAt = LocalDateTime.now();\n    }\n\n    public void deliver() {\n        if (status != OrderStatus.SHIPPED) {\n            throw new IllegalStateException(\n                \"Cannot deliver order in status: \" + status);\n        }\n        this.status = OrderStatus.DELIVERED;\n        this.deliveredAt = LocalDateTime.now();\n    }\n\n    public void cancel(String reason) {\n        if (status == OrderStatus.DELIVERED || status == OrderStatus.CANCELLED) {\n            throw new IllegalStateException(\n                \"Cannot cancel order in status: \" + status);\n        }\n        this.status = OrderStatus.CANCELLED;\n        this.cancelledAt = LocalDateTime.now();\n        this.cancellationReason = reason;\n    }\n\n    public Money calculateTotal() {\n        return subtotal.add(tax).add(shippingCost);\n    }\n\n    public boolean isShippable() {\n        return status == OrderStatus.CONFIRMED;\n    }\n\n    public boolean isCancellable() {\n        return status == OrderStatus.PENDING || status == OrderStatus.CONFIRMED;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain;\n\nimport jakarta.persistence.*;\nimport lombok.*;\n\nimport java.math.BigDecimal;\n\n@Entity\n@Table(name = \"order_items\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\npublic class OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @Column(name = \"product_id\", nullable = false)\n    private Long productId;\n\n    @Column(name = \"product_name\", nullable = false, length = 200)\n    private String productName;\n\n    @Column(name = \"product_sku\", length = 50)\n    private String productSku;\n\n    @Column(nullable = false)\n    private int quantity;\n\n    @Column(nullable = false, precision = 15, scale = 2)\n    private BigDecimal price;\n\n    @Column(nullable = false, precision = 15, scale = 2)\n    private BigDecimal totalPrice;\n\n    public BigDecimal calculateTotalPrice() {\n        return price.multiply(BigDecimal.valueOf(quantity));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain;\n\npublic enum OrderStatus {\n    PENDING,\n    CONFIRMED,\n    PROCESSING,\n    SHIPPED,\n    DELIVERED,\n    CANCELLED,\n    REFUNDED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.NotBlank;\n\n@Embeddable\npublic record ShippingAddress(\n    @NotBlank String street,\n    @NotBlank String city,\n    String state,\n    @NotBlank String zipCode,\n    @NotBlank String country\n) {\n    public ShippingAddress {\n        if (zipCode == null || zipCode.isBlank()) {\n            zipCode = \"N/A\";\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-payment-module-domain",
      children: "4.3 Payment Module Domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.payment.domain;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport lombok.*;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\n\n@Entity\n@Table(name = \"payments\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\npublic class Payment {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(name = \"transaction_id\", unique = true, nullable = false, length = 50)\n    private String transactionId;\n\n    @Column(name = \"order_id\", nullable = false)\n    private Long orderId;\n\n    @Column(name = \"order_number\", length = 50)\n    private String orderNumber;\n\n    @Column(nullable = false, precision = 15, scale = 2)\n    private BigDecimal amount;\n\n    @Column(length = 3)\n    private String currency;\n\n    @Enumerated(EnumType.STRING)\n    @Column(nullable = false, length = 20)\n    private PaymentMethod method;\n\n    @Enumerated(EnumType.STRING)\n    @Column(nullable = false, length = 20)\n    private PaymentStatus status;\n\n    @Column(name = \"payment_details\", length = 1000)\n    private String paymentDetails;\n\n    @Column(name = \"error_message\", length = 500)\n    private String errorMessage;\n\n    @Column(name = \"paid_at\")\n    private LocalDateTime paidAt;\n\n    @Column(name = \"created_at\")\n    private LocalDateTime createdAt;\n\n    @Column(name = \"refunded_at\")\n    private LocalDateTime refundedAt;\n\n    @Version\n    private Long version;\n\n    public boolean isCompleted() {\n        return status == PaymentStatus.COMPLETED;\n    }\n\n    public boolean isFailed() {\n        return status == PaymentStatus.FAILED;\n    }\n\n    public void complete() {\n        this.status = PaymentStatus.COMPLETED;\n        this.paidAt = LocalDateTime.now();\n    }\n\n    public void fail(String errorMessage) {\n        this.status = PaymentStatus.FAILED;\n        this.errorMessage = errorMessage;\n    }\n\n    public void refund() {\n        if (status != PaymentStatus.COMPLETED) {\n            throw new IllegalStateException(\n                \"Cannot refund payment in status: \" + status);\n        }\n        this.status = PaymentStatus.REFUNDED;\n        this.refundedAt = LocalDateTime.now();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.payment.domain;\n\npublic enum PaymentMethod {\n    CREDIT_CARD,\n    DEBIT_CARD,\n    PAYPAL,\n    BANK_TRANSFER,\n    CRYPTO,\n    GIFT_CARD\n}\n\npublic enum PaymentStatus {\n    PENDING,\n    PROCESSING,\n    COMPLETED,\n    FAILED,\n    REFUNDED,\n    CANCELLED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-inventory-module-domain",
      children: "4.4 Inventory Module Domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.inventory.domain;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport lombok.*;\n\nimport java.time.LocalDateTime;\n\n@Entity\n@Table(name = \"stock\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\npublic class Stock {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(name = \"product_id\", unique = true, nullable = false)\n    private Long productId;\n\n    @Column(name = \"warehouse_id\", nullable = false)\n    private Long warehouseId;\n\n    @Column(name = \"quantity_available\")\n    private int quantityAvailable;\n\n    @Column(name = \"quantity_reserved\")\n    private int quantityReserved;\n\n    @Column(name = \"minimum_stock_level\")\n    private int minimumStockLevel;\n\n    @Column(name = \"maximum_stock_level\")\n    private int maximumStockLevel;\n\n    @Column(name = \"reorder_quantity\")\n    private int reorderQuantity;\n\n    @Column(name = \"last_counted_at\")\n    private LocalDateTime lastCountedAt;\n\n    @Version\n    private Long version;\n\n    public int getEffectiveQuantity() {\n        return quantityAvailable - quantityReserved;\n    }\n\n    public boolean hasAvailable(int quantity) {\n        return getEffectiveQuantity() >= quantity;\n    }\n\n    public boolean isLowStock() {\n        return quantityAvailable <= minimumStockLevel;\n    }\n\n    public boolean isOverstocked() {\n        return quantityAvailable > maximumStockLevel;\n    }\n\n    public void reserve(int quantity) {\n        if (!hasAvailable(quantity)) {\n            throw new IllegalStateException(\n                \"Insufficient stock: \" + getEffectiveQuantity()\n                + \" available, \" + quantity + \" requested\");\n        }\n        this.quantityReserved += quantity;\n    }\n\n    public void unreserve(int quantity) {\n        this.quantityReserved = Math.max(0, this.quantityReserved - quantity);\n    }\n\n    public void receive(int quantity) {\n        if (quantityAvailable + quantity > maximumStockLevel) {\n            throw new IllegalStateException(\n                \"Receiving \" + quantity + \" would exceed maximum stock level of \"\n                + maximumStockLevel);\n        }\n        this.quantityAvailable += quantity;\n        this.lastCountedAt = LocalDateTime.now();\n    }\n\n    public void ship(int quantity) {\n        if (quantity > quantityAvailable) {\n            throw new IllegalStateException(\"Insufficient stock to ship\");\n        }\n        this.quantityAvailable -= quantity;\n        this.quantityReserved = Math.max(0, this.quantityReserved - quantity);\n    }\n\n    public void adjust(int newQuantity) {\n        this.quantityAvailable = newQuantity;\n        this.quantityReserved = Math.min(this.quantityReserved, newQuantity);\n        this.lastCountedAt = LocalDateTime.now();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-application-services",
      children: "5. Application Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-order-service",
      children: "5.1 Order Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.application;\n\nimport com.aiengineering.course.order.domain.Order;\nimport com.aiengineering.course.order.domain.OrderItem;\nimport com.aiengineering.course.order.domain.OrderRepository;\nimport com.aiengineering.course.order.domain.ShippingAddress;\nimport com.aiengineering.course.shared.Money;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.UUID;\n\n@Service\n@Transactional\npublic class OrderService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderService.class);\n\n    private final OrderRepository orderRepository;\n\n    public OrderService(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n\n    public Order placeOrder(Long customerId, List<OrderItemRequest> items,\n                             ShippingAddressRequest shippingAddress) {\n        String orderNumber = generateOrderNumber();\n\n        List<OrderItem> orderItems = items.stream()\n            .map(item -> OrderItem.builder()\n                .productId(item.productId())\n                .productName(item.productName())\n                .productSku(item.productSku())\n                .quantity(item.quantity())\n                .price(item.price())\n                .totalPrice(item.price().multiply(BigDecimal.valueOf(item.quantity())))\n                .build())\n            .toList();\n\n        Money subtotal = Money.of(orderItems.stream()\n            .map(oi -> oi.getPrice().multiply(BigDecimal.valueOf(oi.getQuantity())))\n            .reduce(BigDecimal.ZERO, BigDecimal::add));\n\n        Money tax = calculateTax(subtotal);\n        Money shippingCost = calculateShipping(orderItems);\n        Money total = subtotal.add(tax).add(shippingCost);\n\n        ShippingAddress address = new ShippingAddress(\n            shippingAddress.street(),\n            shippingAddress.city(),\n            shippingAddress.state(),\n            shippingAddress.zipCode(),\n            shippingAddress.country()\n        );\n\n        Order order = Order.createOrder(\n            orderNumber, customerId, orderItems,\n            subtotal, tax, shippingCost, total, address\n        );\n\n        order = orderRepository.save(order);\n        log.info(\"Order placed: {} (order number: {})\", order.getId(), orderNumber);\n\n        return order;\n    }\n\n    public void confirmOrder(Long orderId) {\n        Order order = orderRepository.findById(orderId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Order not found: \" + orderId));\n        order.confirm();\n        orderRepository.save(order);\n        log.info(\"Order confirmed: {}\", orderId);\n    }\n\n    public void shipOrder(Long orderId, String trackingNumber) {\n        Order order = orderRepository.findById(orderId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Order not found: \" + orderId));\n        order.ship(trackingNumber);\n        orderRepository.save(order);\n        log.info(\"Order shipped: {} (tracking: {})\", orderId, trackingNumber);\n    }\n\n    public void deliverOrder(Long orderId) {\n        Order order = orderRepository.findById(orderId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Order not found: \" + orderId));\n        order.deliver();\n        orderRepository.save(order);\n        log.info(\"Order delivered: {}\", orderId);\n    }\n\n    public void cancelOrder(Long orderId, String reason) {\n        Order order = orderRepository.findById(orderId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Order not found: \" + orderId));\n        order.cancel(reason);\n        orderRepository.save(order);\n        log.info(\"Order cancelled: {} (reason: {})\", orderId, reason);\n    }\n\n    public Order getOrder(Long orderId) {\n        return orderRepository.findById(orderId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Order not found: \" + orderId));\n    }\n\n    public List<Order> getOrdersByCustomer(Long customerId) {\n        return orderRepository.findByCustomerIdOrderByPlacedAtDesc(customerId);\n    }\n\n    public List<Order> getOrdersByStatus(OrderStatus status) {\n        return orderRepository.findByStatus(status);\n    }\n\n    private String generateOrderNumber() {\n        return \"ORD-\" + UUID.randomUUID().toString()\n            .substring(0, 8).toUpperCase()\n            + \"-\" + System.currentTimeMillis() % 10000;\n    }\n\n    private Money calculateTax(Money subtotal) {\n        return Money.of(subtotal.amount().multiply(\n            BigDecimal.valueOf(0.08)));\n    }\n\n    private Money calculateShipping(List<OrderItem> items) {\n        int totalItems = items.stream()\n            .mapToInt(OrderItem::getQuantity)\n            .sum();\n        if (totalItems == 0) return Money.zero();\n        return Money.of(BigDecimal.valueOf(Math.max(5.99, totalItems * 1.50)));\n    }\n\n    public record OrderItemRequest(\n        Long productId,\n        String productName,\n        String productSku,\n        int quantity,\n        BigDecimal price\n    ) {}\n\n    public record ShippingAddressRequest(\n        String street,\n        String city,\n        String state,\n        String zipCode,\n        String country\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-payment-service",
      children: "5.2 Payment Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.payment.application;\n\nimport com.aiengineering.course.payment.domain.*;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.UUID;\n\n@Service\n@Transactional\npublic class PaymentService {\n\n    private static final Logger log = LoggerFactory.getLogger(PaymentService.class);\n\n    private final PaymentRepository paymentRepository;\n\n    public PaymentService(PaymentRepository paymentRepository) {\n        this.paymentRepository = paymentRepository;\n    }\n\n    public Payment processPayment(Long orderId, String orderNumber,\n                                   BigDecimal amount, PaymentMethod method,\n                                   String paymentDetails) {\n        String transactionId = \"TXN-\" + UUID.randomUUID().toString()\n            .substring(0, 8).toUpperCase();\n\n        Payment payment = Payment.builder()\n            .transactionId(transactionId)\n            .orderId(orderId)\n            .orderNumber(orderNumber)\n            .amount(amount)\n            .currency(\"USD\")\n            .method(method)\n            .status(PaymentStatus.PROCESSING)\n            .paymentDetails(paymentDetails)\n            .createdAt(LocalDateTime.now())\n            .build();\n\n        payment = paymentRepository.save(payment);\n\n        try {\n            boolean success = executePayment(payment);\n            if (success) {\n                payment.complete();\n            } else {\n                payment.fail(\"Payment gateway declined transaction\");\n            }\n        } catch (Exception e) {\n            payment.fail(e.getMessage());\n            log.error(\"Payment processing failed for {}\", transactionId, e);\n        }\n\n        return paymentRepository.save(payment);\n    }\n\n    public Payment refundPayment(String transactionId) {\n        Payment payment = paymentRepository.findByTransactionId(transactionId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Payment not found: \" + transactionId));\n\n        payment.refund();\n        return paymentRepository.save(payment);\n    }\n\n    public Payment getPaymentByTransaction(String transactionId) {\n        return paymentRepository.findByTransactionId(transactionId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Payment not found: \" + transactionId));\n    }\n\n    public List<Payment> getPaymentsByOrder(Long orderId) {\n        return paymentRepository.findByOrderId(orderId);\n    }\n\n    public PaymentStatus getPaymentStatus(String transactionId) {\n        return getPaymentByTransaction(transactionId).getStatus();\n    }\n\n    private boolean executePayment(Payment payment) {\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-inventory-service",
      children: "5.3 Inventory Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.inventory.application;\n\nimport com.aiengineering.course.inventory.domain.Stock;\nimport com.aiengineering.course.inventory.domain.StockRepository;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.util.List;\n\n@Service\n@Transactional\npublic class InventoryService {\n\n    private static final Logger log = LoggerFactory.getLogger(InventoryService.class);\n\n    private final StockRepository stockRepository;\n\n    public InventoryService(StockRepository stockRepository) {\n        this.stockRepository = stockRepository;\n    }\n\n    public boolean reserveStock(Long productId, int quantity) {\n        Stock stock = stockRepository.findByProductId(productId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Stock not found for product: \" + productId));\n\n        stock.reserve(quantity);\n        stockRepository.save(stock);\n        log.info(\"Reserved {} units of product {}\", quantity, productId);\n        return true;\n    }\n\n    public void releaseStock(Long productId, int quantity) {\n        Stock stock = stockRepository.findByProductId(productId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Stock not found for product: \" + productId));\n\n        stock.unreserve(quantity);\n        stockRepository.save(stock);\n        log.info(\"Released {} units of product {}\", quantity, productId);\n    }\n\n    public void receiveStock(Long productId, int quantity) {\n        Stock stock = stockRepository.findByProductId(productId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Stock not found for product: \" + productId));\n\n        stock.receive(quantity);\n        stockRepository.save(stock);\n        log.info(\"Received {} units of product {}\", quantity, productId);\n    }\n\n    public int getAvailableQuantity(Long productId) {\n        return stockRepository.findByProductId(productId)\n            .map(Stock::getEffectiveQuantity)\n            .orElse(0);\n    }\n\n    public boolean isInStock(Long productId, int quantity) {\n        return stockRepository.findByProductId(productId)\n            .map(stock -> stock.hasAvailable(quantity))\n            .orElse(false);\n    }\n\n    public List<Stock> getLowStockItems() {\n        return stockRepository.findAll().stream()\n            .filter(Stock::isLowStock)\n            .toList();\n    }\n\n    public List<Stock> getAllStock() {\n        return stockRepository.findAll();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-internal-event-handlers",
      children: "6. Internal Event Handlers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.internal;\n\nimport com.aiengineering.course.order.domain.events.OrderPlacedEvent;\nimport com.aiengineering.course.shared.Money;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.event.EventListener;\nimport org.springframework.modulith.events.ApplicationModuleListener;\nimport org.springframework.stereotype.Component;\nimport org.springframework.transaction.annotation.Transactional;\n\n@Component\n@Transactional\npublic class OrderEventListener {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderEventListener.class);\n\n    @ApplicationModuleListener\n    public void onOrderPlaced(OrderPlacedEvent event) {\n        log.info(\"Order placed event received: orderNumber={}, customerId={}, total={}\",\n            event.orderNumber(), event.customerId(), event.total());\n\n        handleOrderPlaced(event);\n    }\n\n    private void handleOrderPlaced(OrderPlacedEvent event) {\n        log.debug(\"Processing order placement side effects\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.catalog.internal;\n\nimport com.aiengineering.course.order.domain.events.OrderPlacedEvent;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.modulith.events.ApplicationModuleListener;\nimport org.springframework.stereotype.Component;\nimport org.springframework.transaction.annotation.Transactional;\n\n@Component\n@Transactional\npublic class ProductEventHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(ProductEventHandler.class);\n\n    @ApplicationModuleListener\n    public void onOrderPlaced(OrderPlacedEvent event) {\n        log.info(\"Catalog module handling OrderPlaced: {}\",\n            event.orderNumber());\n\n        for (var item : event.items()) {\n            log.debug(\"Reserving product {} x{}\",\n                item.productId(), item.quantity());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.inventory.internal;\n\nimport com.aiengineering.course.inventory.domain.Stock;\nimport com.aiengineering.course.inventory.domain.StockRepository;\nimport com.aiengineering.course.order.domain.events.OrderPlacedEvent;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.modulith.events.ApplicationModuleListener;\nimport org.springframework.stereotype.Component;\nimport org.springframework.transaction.annotation.Transactional;\n\n@Component\n@Transactional\npublic class StockReservationHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(StockReservationHandler.class);\n\n    private final StockRepository stockRepository;\n\n    public StockReservationHandler(StockRepository stockRepository) {\n        this.stockRepository = stockRepository;\n    }\n\n    @ApplicationModuleListener\n    public void onOrderPlaced(OrderPlacedEvent event) {\n        log.info(\"Reserving stock for order: {}\", event.orderNumber());\n\n        for (var item : event.items()) {\n            Stock stock = stockRepository.findByProductId(item.productId())\n                .orElseThrow(() -> new IllegalStateException(\n                    \"No stock record for product: \" + item.productId()));\n\n            stock.reserve(item.quantity());\n            stockRepository.save(stock);\n\n            log.info(\"Reserved {} units of product {} (available: {})\",\n                item.quantity(), item.productId(), stock.getEffectiveQuantity());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-module-verification-and-tests",
      children: "7. Module Verification and Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.modulith.core.ApplicationModules;\nimport org.springframework.modulith.docs.Documenter;\nimport org.springframework.modulith.test.ApplicationModuleTest;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\npublic class ModulithVerificationTest {\n\n    static final ApplicationModules modules = ApplicationModules.of(CourseApplication.class);\n\n    @Test\n    void shouldVerifyModuleStructure() {\n        modules.verify();\n    }\n\n    @Test\n    void shouldHaveNoIllegalDependencies() {\n        modules.forEach(module -> {\n            System.out.println(\"Module: \" + module.getName());\n            module.getDirectDependencies().forEach(dep -> {\n                System.out.println(\"  -> \" + dep.getName());\n            });\n        });\n        modules.verify();\n    }\n\n    @Test\n    void shouldDetectDDDModules() {\n        var dddModules = modules.stream()\n            .filter(m -> m.isDddAggregate())\n            .toList();\n\n        assertThat(dddModules).isNotEmpty();\n    }\n\n    @Test\n    void shouldHaveValidDependencyGraph() {\n        assertThat(modules.verify().getEvents().getViolations()).isEmpty();\n    }\n\n    @Test\n    void shouldGenerateDocumentation() {\n        new Documenter(modules)\n            .writeDocumentation()\n            .writeModulesAsPlantUml()\n            .writeIndividualModulesAsPlantUml();\n    }\n\n    @Test\n    void shouldHaveNoCycles() {\n        var cycles = modules.stream()\n            .flatMap(module -> module.getDirectDependencies().stream())\n            .filter(dep -> dep.getName().equals(\"api\"))\n            .toList();\n\n        assertThat(cycles).isEmpty();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport com.aiengineering.course.order.OrderModule;\nimport com.aiengineering.course.order.application.OrderService;\nimport com.aiengineering.course.order.domain.Order;\nimport com.aiengineering.course.order.domain.OrderRepository;\nimport com.aiengineering.course.shared.Money;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.modulith.test.ApplicationModuleTest;\nimport org.springframework.modulith.test.Scenario;\n\nimport java.math.BigDecimal;\nimport java.util.List;\n\n@ApplicationModuleTest(module = OrderModule.class)\npublic class OrderModuleTest {\n\n    @Autowired\n    private OrderService orderService;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Test\n    void shouldPlaceOrder(Scenario scenario) {\n        var request = new OrderService.OrderItemRequest(\n            1L, \"Test Product\", \"SKU-001\",\n            2, BigDecimal.valueOf(29.99)\n        );\n\n        var address = new OrderService.ShippingAddressRequest(\n            \"123 Main St\", \"Portland\", \"OR\", \"97201\", \"USA\"\n        );\n\n        scenario.stimulate(() ->\n                orderService.placeOrder(1L, List.of(request), address))\n            .andWaitForEventOfType(OrderPlacedEvent.class)\n            .toArrive();\n\n        List<Order> orders = orderRepository.findByCustomerIdOrderByPlacedAtDesc(1L);\n        assertThat(orders).isNotEmpty();\n        assertThat(orders.getFirst().getStatus()).isEqualTo(OrderStatus.PENDING);\n    }\n\n    @Test\n    void shouldVerifyModuleDependencies() {\n        var modules = ApplicationModules.of(CourseApplication.class);\n        var orderModule = modules.stream()\n            .filter(m -> m.getName().equals(\"order\"))\n            .findFirst()\n            .orElseThrow();\n\n        var dependencies = orderModule.getDirectDependencies()\n            .stream()\n            .map(d -> d.getName())\n            .toList();\n\n        assertThat(dependencies).contains(\"catalog\", \"customer\", \"shared\");\n        assertThat(dependencies).doesNotContain(\"payment\", \"shipping\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport com.aiengineering.course.order.OrderModule;\nimport com.aiengineering.course.order.domain.Order;\nimport com.aiengineering.course.order.domain.OrderRepository;\nimport com.aiengineering.course.order.domain.events.OrderPlacedEvent;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.modulith.test.ApplicationModuleTest;\nimport org.springframework.modulith.test.Scenario;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@ApplicationModuleTest(module = OrderModule.class)\nclass OrderModuleScenarioTest {\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Test\n    void shouldPublishEventOnOrderCreation(Scenario scenario) {\n        scenario.stimulate(() -> {\n                var order = Order.createOrder(\"ORD-TEST-001\", 1L,\n                    List.of(), Money.of(100), Money.of(8),\n                    Money.of(5.99), Money.of(113.99),\n                    new ShippingAddress(\"Street\", \"City\", \"State\",\n                        \"12345\", \"US\"));\n                orderRepository.save(order);\n            })\n            .andWaitForEventOfType(OrderPlacedEvent.class)\n            .toArrive();\n\n        var events = scenario.getEvents();\n        assertThat(events).isNotNull();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-rest-controllers",
      children: "8. REST Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.api.rest;\n\nimport com.aiengineering.course.order.application.OrderService;\nimport com.aiengineering.course.order.domain.Order;\nimport com.aiengineering.course.order.domain.OrderStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.net.URI;\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/v1/orders\")\npublic class OrderController {\n\n    private final OrderService orderService;\n\n    public OrderController(OrderService orderService) {\n        this.orderService = orderService;\n    }\n\n    @PostMapping\n    public ResponseEntity<Order> placeOrder(@RequestBody PlaceOrderRequest request) {\n        var items = request.items().stream()\n            .map(item -> new OrderService.OrderItemRequest(\n                item.productId(), item.productName(),\n                item.productSku(), item.quantity(), item.price()))\n            .toList();\n\n        var address = new OrderService.ShippingAddressRequest(\n            request.shippingAddress().street(),\n            request.shippingAddress().city(),\n            request.shippingAddress().state(),\n            request.shippingAddress().zipCode(),\n            request.shippingAddress().country()\n        );\n\n        Order order = orderService.placeOrder(request.customerId(), items, address);\n\n        return ResponseEntity.created(\n            URI.create(\"/api/v1/orders/\" + order.getId()))\n            .body(order);\n    }\n\n    @GetMapping(\"/{orderId}\")\n    public ResponseEntity<Order> getOrder(@PathVariable Long orderId) {\n        Order order = orderService.getOrder(orderId);\n        return ResponseEntity.ok(order);\n    }\n\n    @PostMapping(\"/{orderId}/confirm\")\n    public ResponseEntity<Void> confirmOrder(@PathVariable Long orderId) {\n        orderService.confirmOrder(orderId);\n        return ResponseEntity.ok().build();\n    }\n\n    @PostMapping(\"/{orderId}/ship\")\n    public ResponseEntity<Void> shipOrder(\n            @PathVariable Long orderId,\n            @RequestBody Map<String, String> body) {\n        orderService.shipOrder(orderId, body.get(\"trackingNumber\"));\n        return ResponseEntity.ok().build();\n    }\n\n    @PostMapping(\"/{orderId}/deliver\")\n    public ResponseEntity<Void> deliverOrder(@PathVariable Long orderId) {\n        orderService.deliverOrder(orderId);\n        return ResponseEntity.ok().build();\n    }\n\n    @PostMapping(\"/{orderId}/cancel\")\n    public ResponseEntity<Void> cancelOrder(\n            @PathVariable Long orderId,\n            @RequestBody Map<String, String> body) {\n        orderService.cancelOrder(orderId, body.get(\"reason\"));\n        return ResponseEntity.ok().build();\n    }\n\n    @GetMapping\n    public ResponseEntity<List<Order>> listOrders(\n            @RequestParam(required = false) Long customerId,\n            @RequestParam(required = false) OrderStatus status) {\n\n        List<Order> orders;\n        if (customerId != null) {\n            orders = orderService.getOrdersByCustomer(customerId);\n        } else if (status != null) {\n            orders = orderService.getOrdersByStatus(status);\n        } else {\n            orders = List.of();\n        }\n\n        return ResponseEntity.ok(orders);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.api.rest;\n\nimport com.aiengineering.course.payment.application.PaymentService;\nimport com.aiengineering.course.payment.domain.Payment;\nimport com.aiengineering.course.payment.domain.PaymentMethod;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.math.BigDecimal;\nimport java.net.URI;\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/v1/payments\")\npublic class PaymentController {\n\n    private final PaymentService paymentService;\n\n    public PaymentController(PaymentService paymentService) {\n        this.paymentService = paymentService;\n    }\n\n    @PostMapping\n    public ResponseEntity<Payment> processPayment(\n            @RequestBody ProcessPaymentRequest request) {\n        Payment payment = paymentService.processPayment(\n            request.orderId(), request.orderNumber(),\n            request.amount(), request.method(),\n            request.paymentDetails());\n\n        return ResponseEntity.created(\n                URI.create(\"/api/v1/payments/\" + payment.getTransactionId()))\n            .body(payment);\n    }\n\n    @GetMapping(\"/{transactionId}\")\n    public ResponseEntity<Payment> getPayment(@PathVariable String transactionId) {\n        Payment payment = paymentService.getPaymentByTransaction(transactionId);\n        return ResponseEntity.ok(payment);\n    }\n\n    @PostMapping(\"/{transactionId}/refund\")\n    public ResponseEntity<Payment> refundPayment(\n            @PathVariable String transactionId) {\n        Payment payment = paymentService.refundPayment(transactionId);\n        return ResponseEntity.ok(payment);\n    }\n\n    @GetMapping(\"/order/{orderId}\")\n    public ResponseEntity<List<Payment>> getOrderPayments(\n            @PathVariable Long orderId) {\n        List<Payment> payments = paymentService.getPaymentsByOrder(orderId);\n        return ResponseEntity.ok(payments);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-event-definitions",
      children: "9. Event Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain.events;\n\nimport com.aiengineering.course.shared.Money;\n\nimport java.math.BigDecimal;\nimport java.util.List;\n\npublic record OrderPlacedEvent(\n    String orderNumber,\n    Long customerId,\n    Money total,\n    List<OrderItemInfo> items\n) {\n    public record OrderItemInfo(\n        Long productId,\n        String productName,\n        int quantity,\n        BigDecimal price\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain.events;\n\nimport java.math.BigDecimal;\n\npublic record OrderShippedEvent(\n    Long orderId,\n    String orderNumber,\n    String trackingNumber,\n    String carrier\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.order.domain.events;\n\npublic record OrderCancelledEvent(\n    Long orderId,\n    String orderNumber,\n    String reason\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.payment.domain.events;\n\nimport java.math.BigDecimal;\n\npublic record PaymentCompletedEvent(\n    String transactionId,\n    Long orderId,\n    String orderNumber,\n    BigDecimal amount,\n    String paymentMethod\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.notification.domain;\n\npublic record OrderConfirmationEvent(\n    String orderNumber,\n    String customerEmail,\n    String customerName,\n    BigDecimal total,\n    String status\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-event-publication-configuration",
      children: "10. Event Publication Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.modulith.events.*;\nimport org.springframework.modulith.events.support.CompletionMode;\n\nimport java.time.Duration;\n\n@Configuration(proxyBeanMethods = false)\npublic class EventConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(EventConfig.class);\n\n    @Bean\n    public EventPublicationRegistry eventPublicationRegistry(\n            EventPublicationRepository repository) {\n        return new EventPublicationRegistry(repository);\n    }\n\n    @Bean\n    public IncompleteEventPublications incompleteEventPublications(\n            EventPublicationRepository repository) {\n        return IncompleteEventPublications.from(repository)\n            .withCleanup(Duration.ofHours(24), Duration.ofMinutes(30))\n            .withLogging();\n    }\n\n    @Bean\n    public EventSerializer eventSerializer() {\n        return new EventSerializer() {\n            @Override\n            public String serialize(Object event) {\n                return event.toString();\n            }\n\n            @Override\n            public Object deserialize(String serialized, Class<?> eventType) {\n                return null;\n            }\n        };\n    }\n\n    @Bean\n    public CompletionMode completionMode() {\n        return CompletionMode.DELETE;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-migration-to-microservices",
      children: "11. Migration to Microservices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.migration;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport java.util.List;\nimport java.util.Map;\n\npublic class MigrationPlanner {\n\n    private static final Logger log = LoggerFactory.getLogger(MigrationPlanner.class);\n\n    private final Map<String, ModuleAnalysis> moduleAnalyses;\n\n    public MigrationPlanner() {\n        this.moduleAnalyses = Map.of(\n            \"order\", new ModuleAnalysis(\"order\", 5, 3, 12, 8, true),\n            \"payment\", new ModuleAnalysis(\"payment\", 3, 2, 6, 4, true),\n            \"catalog\", new ModuleAnalysis(\"catalog\", 4, 3, 8, 6, true),\n            \"inventory\", new ModuleAnalysis(\"inventory\", 3, 2, 5, 3, false),\n            \"notification\", new ModuleAnalysis(\"notification\", 2, 1, 3, 2, true),\n            \"shipping\", new ModuleAnalysis(\"shipping\", 2, 1, 4, 3, false),\n            \"customer\", new ModuleAnalysis(\"customer\", 3, 2, 5, 4, true)\n        );\n    }\n\n    public List<MigrationPhase> planMigration() {\n        return List.of(\n            new MigrationPhase(1, \"Extract Payment Service\",\n                \"Extract payment module as first independent service\",\n                List.of(\"payment\"),\n                30,\n                List.of(\n                    \"Extract payment entities and repositories\",\n                    \"Create REST API for payment operations\",\n                    \"Implement event publishing for payment completion\",\n                    \"Update order module to call payment via API\",\n                    \"Deploy payment service independently\"\n                )),\n\n            new MigrationPhase(2, \"Extract Customer Service\",\n                \"Extract customer module with own database\",\n                List.of(\"customer\"),\n                20,\n                List.of(\n                    \"Extract customer domain model\",\n                    \"Create customer REST API\",\n                    \"Set up customer database\",\n                    \"Update order module to reference customer service\"\n                )),\n\n            new MigrationPhase(3, \"Extract Notification Service\",\n                \"Separate notification as asynchronous event consumer\",\n                List.of(\"notification\"),\n                15,\n                List.of(\n                    \"Extract notification module\",\n                    \"Implement event-driven notification consumer\",\n                    \"Support email, SMS, and push channels\",\n                    \"Create notification API for manual triggers\"\n                )),\n\n            new MigrationPhase(4, \"Extract Catalog and Inventory\",\n                \"Split product catalog and inventory management\",\n                List.of(\"catalog\", \"inventory\"),\n                25,\n                List.of(\n                    \"Separate catalog and inventory domains\",\n                    \"Create product REST API\",\n                    \"Implement inventory management API\",\n                    \"Handle stock reservation via events\"\n                )),\n\n            new MigrationPhase(5, \"Extract Order and Shipping\",\n                \"Final phase extracting order orchestration\",\n                List.of(\"order\", \"shipping\"),\n                30,\n                List.of(\n                    \"Extract order domain as orchestrating service\",\n                    \"Create order REST API\",\n                    \"Implement shipping integration\",\n                    \"Set up saga pattern for distributed transactions\",\n                    \"Configure API gateway for unified entry point\"\n                ))\n        );\n    }\n\n    public void assessExtractionReadiness(String moduleName) {\n        ModuleAnalysis analysis = moduleAnalyses.get(moduleName);\n        if (analysis == null) {\n            log.warn(\"No analysis for module: {}\", moduleName);\n            return;\n        }\n\n        double readinessScore = calculateReadiness(analysis);\n        log.info(\"Module '{}' extraction readiness: {}/100\", moduleName, readinessScore);\n\n        if (readinessScore < 70) {\n            log.warn(\"Module '{}' needs improvement before extraction:\", moduleName);\n            if (analysis.externalDependencies() > 4) {\n                log.warn(\"- Reduce external module dependencies ({})\", analysis.externalDependencies());\n            }\n            if (!analysis.eventsPublic()) {\n                log.warn(\"- Publish events instead of direct service calls\");\n            }\n            if (analysis.internalReferences() > 10) {\n                log.warn(\"- Reduce internal cross-module references ({})\", analysis.internalReferences());\n            }\n        } else {\n            log.info(\"Module '{}' is ready for extraction!\", moduleName);\n        }\n    }\n\n    private double calculateReadiness(ModuleAnalysis analysis) {\n        double score = 100.0;\n\n        score -= Math.max(0, (analysis.externalDependencies() - 2) * 10);\n        score -= Math.max(0, (analysis.internalReferences() - 5) * 5);\n        score -= analysis.externalRepositories() * 5;\n\n        if (!analysis.eventsPublic()) {\n            score -= 20;\n        }\n\n        return Math.max(0, Math.min(100, score));\n    }\n\n    public record ModuleAnalysis(\n        String name,\n        int externalDependencies,\n        int externalRepositories,\n        int internalReferences,\n        int publicApis,\n        boolean eventsPublic\n    ) {}\n\n    public record MigrationPhase(\n        int phaseNumber,\n        String title,\n        String description,\n        List<String> modulesToExtract,\n        int estimatedDays,\n        List<String> steps\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
      children: "Spring Modulith provides a structured approach to building modular monoliths with clear migration paths:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ApplicationModule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define named module with dependency constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationModules.verify()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce module dependency rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@ApplicationModuleTest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Scenario"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test modules in isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@ApplicationModuleListener"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EventPublicationRegistry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven module communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Documenter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate diagrams and module docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module analysis + phased extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path from monolith to microservices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Kernel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Money"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Email"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Address"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared value objects across modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregates, Repositories, Domain Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tactical domain-driven design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Module Structure"
          }), ": Create a new ", (0,jsx_runtime.jsx)(_components.code, {
            children: "reviews"
          }), " module that depends on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "catalog"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "customer"
          }), ", with its own domain model and application service."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Integration"
          }), ": Add an event handler in the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "notification"
          }), " module that listens for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PaymentCompletedEvent"
          }), " and sends a confirmation email."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verification"
          }), ": Run module verification and fix all illegal dependency violations by refactoring code or updating allowed dependencies."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation"
          }), ": Generate PlantUML diagrams for the module structure and examine the dependency graph."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Plan"
          }), ": Create a migration plan document for extracting the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "inventory"
          }), " module into a standalone microservice."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DDD Aggregates"
          }), ": Refactor the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Order"
          }), " aggregate to properly enforce invariants and publish domain events."]
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