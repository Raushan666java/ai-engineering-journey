"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[34258],{

/***/ 44004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_50_integration_md_4d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-50-integration-md-4d4.json
const site_docs_courses_java_50_integration_md_4d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/50-integration","title":"Spring Integration","description":"Previous Spring Modulith","source":"@site/docs/courses/java/50-integration.md","sourceDirName":"courses/java","slug":"/java/50-integration","permalink":"/ai-engineering-journey/java/50-integration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":50,"frontMatter":{"id":"50-integration","slug":"/java/50-integration","title":"Spring Integration","sidebar_label":"Spring Integration","sidebar_position":50},"sidebar":"course-java","previous":{"title":"Spring Batch","permalink":"/ai-engineering-journey/java/49-batch"},"next":{"title":"Spring Modulith","permalink":"/ai-engineering-journey/java/51-modulith"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/50-integration.md


const frontMatter = {
	id: '50-integration',
	slug: '/java/50-integration',
	title: 'Spring Integration',
	sidebar_label: 'Spring Integration',
	sidebar_position: 50
};
const contentTitle = 'Spring Integration';

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
  "value": "1. Spring Integration Overview",
  "id": "1-spring-integration-overview",
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
  "value": "2. Message Channels",
  "id": "2-message-channels",
  "level": 2
}, {
  "value": "2.1 Channel Bridge Configuration",
  "id": "21-channel-bridge-configuration",
  "level": 3
}, {
  "value": "3. Messaging Gateways",
  "id": "3-messaging-gateways",
  "level": 2
}, {
  "value": "4. Transformers",
  "id": "4-transformers",
  "level": 2
}, {
  "value": "4.1 Custom Transformer Service",
  "id": "41-custom-transformer-service",
  "level": 3
}, {
  "value": "5. Routers",
  "id": "5-routers",
  "level": 2
}, {
  "value": "6. Adapters",
  "id": "6-adapters",
  "level": 2
}, {
  "value": "6.1 File Adapters",
  "id": "61-file-adapters",
  "level": 3
}, {
  "value": "6.2 JMS Adapters",
  "id": "62-jms-adapters",
  "level": 3
}, {
  "value": "6.3 FTP Adapters",
  "id": "63-ftp-adapters",
  "level": 3
}, {
  "value": "6.4 Mail Adapters",
  "id": "64-mail-adapters",
  "level": 3
}, {
  "value": "7. DSL IntegrationFlow",
  "id": "7-dsl-integrationflow",
  "level": 2
}, {
  "value": "8. Service Activator",
  "id": "8-service-activator",
  "level": 2
}, {
  "value": "9. Splitter and Aggregator",
  "id": "9-splitter-and-aggregator",
  "level": 2
}, {
  "value": "10. Filter and WireTap",
  "id": "10-filter-and-wiretap",
  "level": 2
}, {
  "value": "11. Testing",
  "id": "11-testing",
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
        id: "spring-integration",
        children: "Spring Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/49-batch",
          children: "Spring Batch"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/51-modulith",
          children: "Spring Modulith"
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
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Enterprise Integration Patterns using Spring Integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure and use message channels (DirectChannel, QueueChannel, PublishSubscribeChannel, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Messaging Gateways with @MessagingGateway"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build transformers for message conversion (JSON, XML, File, Object)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement routers for dynamic message routing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create JMS, FTP, file, and mail adapters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write DSL-based IntegrationFlows for declarative pipeline construction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle errors, transactions, and idempotent receivers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration flows end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-spring-integration-overview",
      children: "1. Spring Integration Overview"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/50-integration.png",
        alt: "Spring Integration - Enterprise Integration Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Integration implements the Enterprise Integration Patterns, providing a lightweight message-based framework for integrating systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-maven-dependencies",
      children: "1.1 Maven Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.4.0</version>\n        <relativePath/>\n    </parent>\n    <groupId>com.aiengineering</groupId>\n    <artifactId>integration-course</artifactId>\n    <version>1.0.0</version>\n    <name>integration-course</name>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-integration</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-jms</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-ftp</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-file</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-mail</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-jdbc</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-mqtt</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-kafka</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-amqp</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-stomp</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-ws</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-xml</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-event</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>com.fasterxml.jackson.core</groupId>\n            <artifactId>jackson-databind</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.fasterxml.jackson.datatype</groupId>\n            <artifactId>jackson-datatype-jsr310</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.activemq</groupId>\n            <artifactId>activemq-client</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-artemis</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.integration</groupId>\n            <artifactId>spring-integration-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-application-configuration",
      children: "1.2 Application Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\n\n> **Previous:** [Spring Batch](./49-batch.md) | **Next:** [Spring Modulith](./51-modulith.md)\nspring:\n  application:\n    name: integration-course\n\n  artemis:\n    mode: embedded\n    enabled: true\n    port: 61616\n    embedded:\n      enabled: true\n      persistent: false\n\n  jpa:\n    hibernate:\n      ddl-auto: update\n    show-sql: false\n\n  datasource:\n    url: jdbc:postgresql://localhost:5432/integration_course\n    username: postgres\n    password: postgres\n    driver-class-name: org.postgresql.Driver\n\n  mail:\n    host: smtp.gmail.com\n    port: 587\n    username: ${MAIL_USERNAME}\n    password: ${MAIL_PASSWORD}\n    properties:\n      mail:\n        smtp:\n          auth: true\n          starttls:\n            enable: true\n\nserver:\n  port: 8080\n\nftp:\n    host: localhost\n    port: 21\n    username: ftpuser\n    password: ftppass\n    remote-dir: /uploads\n    local-dir: /tmp/ftp-downloads\n\nfile:\n    input-dir: /tmp/input\n    output-dir: /tmp/output\n    error-dir: /tmp/error\n    archive-dir: /tmp/archive\n\nlogging:\n  level:\n    org.springframework.integration: DEBUG\n    org.springframework.jms: DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-message-channels",
      children: "2. Message Channels"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.channel.*;\nimport org.springframework.integration.config.EnableIntegration;\nimport org.springframework.integration.scheduling.PollerMetadata;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.MessageChannel;\nimport org.springframework.messaging.support.ChannelInterceptor;\nimport org.springframework.messaging.support.MessageBuilder;\nimport org.springframework.scheduling.support.PeriodicTrigger;\n\nimport java.util.concurrent.Executors;\n\n@Configuration\n@EnableIntegration\npublic class ChannelConfig {\n\n    @Bean\n    public MessageChannel directChannel() {\n        DirectChannel channel = new DirectChannel();\n        channel.addInterceptor(new LoggingChannelInterceptor(\"directChannel\"));\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel queueChannel() {\n        QueueChannel channel = new QueueChannel(100);\n        channel.addInterceptor(new LoggingChannelInterceptor(\"queueChannel\"));\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel publishSubscribeChannel() {\n        PublishSubscribeChannel channel = new PublishSubscribeChannel();\n        channel.addInterceptor(new LoggingChannelInterceptor(\"publishSubscribeChannel\"));\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel executorChannel() {\n        ExecutorChannel channel = new ExecutorChannel(\n            Executors.newFixedThreadPool(4));\n        channel.addInterceptor(new LoggingChannelInterceptor(\"executorChannel\"));\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel fluxChannel() {\n        FluxMessageChannel channel = new FluxMessageChannel();\n        channel.addInterceptor(new LoggingChannelInterceptor(\"fluxChannel\"));\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel rendezvousChannel() {\n        RendezvousChannel channel = new RendezvousChannel();\n        channel.addInterceptor(new LoggingChannelInterceptor(\"rendezvousChannel\"));\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel priorityChannel() {\n        PriorityChannel channel = new PriorityChannel(100, (msg1, msg2) -> {\n            int priority1 = (int) msg1.getHeaders().getOrDefault(\"priority\", 0);\n            int priority2 = (int) msg2.getHeaders().getOrDefault(\"priority\", 0);\n            return Integer.compare(priority2, priority1);\n        });\n        return channel;\n    }\n\n    @Bean\n    public MessageChannel errorChannel() {\n        DirectChannel channel = new DirectChannel();\n        channel.addInterceptor(new ChannelInterceptor() {\n            @Override\n            public Message<?> preSend(Message<?> message, MessageChannel channel) {\n                System.err.println(\"Error channel received: \" + message);\n                return message;\n            }\n        });\n        return channel;\n    }\n\n    @Bean(name = PollerMetadata.DEFAULT_POLLER)\n    public PollerMetadata defaultPoller() {\n        PollerMetadata poller = new PollerMetadata();\n        poller.setTrigger(new PeriodicTrigger(1000));\n        poller.setMaxMessagesPerPoll(10);\n        poller.setErrorChannel(errorChannel());\n        return poller;\n    }\n\n    public static class LoggingChannelInterceptor implements ChannelInterceptor {\n        private final String channelName;\n\n        public LoggingChannelInterceptor(String channelName) {\n            this.channelName = channelName;\n        }\n\n        @Override\n        public Message<?> preSend(Message<?> message, MessageChannel channel) {\n            return message;\n        }\n\n        @Override\n        public void postSend(Message<?> message, MessageChannel channel, boolean sent) {\n        }\n\n        @Override\n        public void afterSendCompletion(Message<?> message, MessageChannel channel,\n                                         boolean sent, Exception ex) {\n        }\n\n        @Override\n        public boolean preReceive(MessageChannel channel) {\n            return true;\n        }\n\n        @Override\n        public Message<?> postReceive(Message<?> message, MessageChannel channel) {\n            return message;\n        }\n\n        @Override\n        public void afterReceiveCompletion(Message<?> message, MessageChannel channel,\n                                            Exception ex) {\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-channel-bridge-configuration",
      children: "2.1 Channel Bridge Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.annotation.BridgeFrom;\nimport org.springframework.integration.annotation.BridgeTo;\nimport org.springframework.integration.channel.interceptor.WireTap;\nimport org.springframework.messaging.MessageChannel;\n\n@Configuration\npublic class BridgeConfig {\n\n    @Bean\n    public WireTap wireTap(@Qualifier(\"directChannel\") MessageChannel directChannel) {\n        return new WireTap(directChannel);\n    }\n\n    @Bean\n    @BridgeTo(\"publishSubscribeChannel\")\n    public MessageChannel bridgedChannel() {\n        return new DirectChannel();\n    }\n\n    @Bean\n    @BridgeFrom(\"queueChannel\")\n    public MessageChannel bridgedFromChannel() {\n        return new DirectChannel();\n    }\n\n    @Bean\n    public MessageChannel monitoringChannel() {\n        return new DirectChannel();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-messaging-gateways",
      children: "3. Messaging Gateways"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.gateway;\n\nimport com.aiengineering.course.model.Order;\nimport com.aiengineering.course.model.Payment;\nimport com.aiengineering.course.model.Shipment;\nimport org.springframework.integration.annotation.Gateway;\nimport org.springframework.integration.annotation.GatewayHeader;\nimport org.springframework.integration.annotation.MessagingGateway;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.handler.annotation.Header;\nimport org.springframework.messaging.handler.annotation.Payload;\n\nimport java.util.List;\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.Future;\n\n@MessagingGateway(\n    name = \"orderGateway\",\n    defaultRequestChannel = \"orderInputChannel\",\n    defaultReplyChannel = \"orderReplyChannel\",\n    defaultReplyTimeout = 5000,\n    defaultRequestTimeout = 30000\n)\npublic interface OrderGateway {\n\n    @Gateway(requestChannel = \"placeOrderChannel\",\n            replyChannel = \"orderConfirmationChannel\",\n            replyTimeout = 10000)\n    OrderConfirmation placeOrder(Order order);\n\n    @Gateway(requestChannel = \"processPaymentChannel\",\n            headers = @GatewayHeader(name = \"transactionType\", value = \"PAYMENT\"))\n    Payment processPayment(@Payload Payment payment,\n                           @Header(\"paymentMethod\") String paymentMethod);\n\n    @Gateway(requestChannel = \"shipOrderChannel\",\n            replyChannel = \"trackingChannel\")\n    Shipment shipOrder(Order order);\n\n    @Gateway(requestChannel = \"cancelOrderChannel\")\n    void cancelOrder(Long orderId);\n\n    @Gateway(requestChannel = \"checkStatusChannel\",\n            poll = @Poller(\n                maxMessagesPerPoll = 1,\n                fixedDelay = 1000,\n                errorChannel = \"errorChannel\"\n            ))\n    OrderStatus checkStatus(String orderId);\n\n    @Gateway(requestChannel = \"asyncProcessChannel\")\n    Future<String> processAsync(Order order);\n\n    @Gateway(requestChannel = \"asyncCompletableChannel\")\n    CompletableFuture<String> processCompletable(Order order);\n\n    @Gateway(requestChannel = \"batchProcessChannel\")\n    List<OrderConfirmation> batchProcess(List<Order> orders);\n\n    @Gateway(requestChannel = \"orderEventChannel\")\n    void sendOrderEvent(Message<Order> message);\n\n    @Gateway(requestChannel = \"priorityOrderChannel\")\n    OrderConfirmation priorityOrder(@Payload Order order,\n                                    @Header(\"priority\") int priority);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.gateway;\n\nimport org.springframework.integration.annotation.Gateway;\nimport org.springframework.integration.annotation.MessagingGateway;\nimport org.springframework.messaging.Message;\n\nimport java.io.File;\nimport java.util.Map;\n\n@MessagingGateway(defaultRequestChannel = \"notificationChannel\")\npublic interface NotificationGateway {\n\n    @Gateway(requestChannel = \"emailChannel\")\n    void sendEmail(String to, String subject, String body);\n\n    @Gateway(requestChannel = \"smsChannel\")\n    void sendSms(String phoneNumber, String message);\n\n    @Gateway(requestChannel = \"pushNotificationChannel\")\n    void sendPushNotification(String deviceToken, String title, String body);\n\n    @Gateway(requestChannel = \"slackWebhookChannel\")\n    void sendSlackMessage(String webhookUrl, String message);\n\n    @Gateway(requestChannel = \"emailWithTemplateChannel\")\n    void sendTemplatedEmail(Map<String, Object> templateData);\n}\n\n@MessagingGateway(defaultRequestChannel = \"fileProcessingChannel\")\ninterface FileProcessingGateway {\n\n    @Gateway(requestChannel = \"fileProcessChannel\")\n    void processFile(File file);\n\n    @Gateway(requestChannel = \"fileArchiveChannel\")\n    void archiveFile(File file, String archivePath);\n\n    @Gateway(requestChannel = \"fileValidationChannel\",\n            replyChannel = \"validationResultChannel\")\n    ValidationResult validateFile(File file);\n\n    record ValidationResult(boolean valid, String message, long fileSize) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.gateway;\n\nimport org.springframework.integration.annotation.Gateway;\nimport org.springframework.integration.annotation.MessagingGateway;\nimport org.springframework.messaging.handler.annotation.Payload;\n\n@MessagingGateway(defaultRequestChannel = \"inventoryChannel\")\npublic interface InventoryGateway {\n\n    @Gateway(requestChannel = \"checkStockChannel\",\n            replyChannel = \"stockResultChannel\")\n    StockResult checkStock(String productSku, int quantity);\n\n    @Gateway(requestChannel = \"reserveStockChannel\")\n    boolean reserveStock(String productSku, int quantity);\n\n    @Gateway(requestChannel = \"releaseStockChannel\")\n    void releaseStock(String productSku, int quantity);\n\n    @Gateway(requestChannel = \"updateStockChannel\")\n    void updateStock(String productSku, int newQuantity);\n}\n\n@MessagingGateway(defaultRequestChannel = \"auditChannel\")\ninterface AuditGateway {\n\n    @Gateway(requestChannel = \"logAuditEventChannel\")\n    void logEvent(String action, String entityType, Long entityId,\n                  String details, String userId);\n\n    @Gateway(requestChannel = \"queryAuditLogChannel\",\n            replyChannel = \"auditResultChannel\")\n    List<AuditEntry> queryAuditLog(String entityType, Long entityId,\n                                    int limit, int offset);\n\n    record AuditEntry(Long id, String action, String entityType,\n                       Long entityId, String details, String userId,\n                       String timestamp) {}\n\n    @Payload(\"new java.util.Date()\")\n    record List<AuditEntry>() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-transformers",
      children: "4. Transformers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.transformer;\n\nimport com.aiengineering.course.model.Order;\nimport com.aiengineering.course.model.OrderCsvRecord;\nimport com.fasterxml.jackson.core.JsonProcessingException;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.json.JsonToObjectTransformer;\nimport org.springframework.integration.json.ObjectToJsonTransformer;\nimport org.springframework.integration.mapping.support.JsonHeaders;\nimport org.springframework.integration.support.json.Jackson2JsonObjectMapper;\nimport org.springframework.integration.transformer.*;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.MessageHeaders;\nimport org.springframework.messaging.converter.GenericMessageConverter;\nimport org.springframework.messaging.support.MessageBuilder;\n\nimport java.io.File;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Map;\n\n@Configuration\npublic class TransformerConfig {\n\n    @Bean\n    public ObjectMapper objectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n        mapper.registerModule(new JavaTimeModule());\n        return mapper;\n    }\n\n    @Bean\n    public ObjectToJsonTransformer objectToJsonTransformer(ObjectMapper objectMapper) {\n        return new ObjectToJsonTransformer(\n            new Jackson2JsonObjectMapper(objectMapper));\n    }\n\n    @Bean\n    public JsonToObjectTransformer jsonToObjectTransformer(ObjectMapper objectMapper) {\n        return new JsonToObjectTransformer(Order.class,\n            new Jackson2JsonObjectMapper(objectMapper));\n    }\n\n    @Bean\n    public ObjectToStringTransformer objectToStringTransformer() {\n        return new ObjectToStringTransformer();\n    }\n\n    @Bean\n    public FileToStringTransformer fileToStringTransformer() {\n        FileToStringTransformer transformer = new FileToStringTransformer();\n        transformer.setCharset(\"UTF-8\");\n        transformer.setDeleteFiles(false);\n        return transformer;\n    }\n\n    @Bean\n    public MapToObjectTransformer mapToObjectTransformer() {\n        return new MapToObjectTransformer(Order.class);\n    }\n\n    @Bean\n    public ObjectToMapTransformer objectToMapTransformer() {\n        return new ObjectToMapTransformer();\n    }\n\n    @Bean\n    public GenericTransformer<Order, OrderCsvRecord> orderToCsvTransformer() {\n        return order -> new OrderCsvRecord(\n            order.getId().toString(),\n            order.getCustomerName(),\n            order.getTotal().toString(),\n            order.getStatus(),\n            order.getCreatedAt().toString()\n        );\n    }\n\n    @Bean\n    public GenericTransformer<String, Order> csvLineToOrderTransformer() {\n        return line -> {\n            String[] parts = line.split(\",\");\n            if (parts.length < 5) {\n                throw new IllegalArgumentException(\n                    \"Invalid CSV line: \" + line);\n            }\n            Order order = new Order();\n            order.setId(Long.parseLong(parts[0].trim()));\n            order.setCustomerName(parts[1].trim());\n            order.setTotal(new java.math.BigDecimal(parts[2].trim()));\n            order.setStatus(parts[3].trim());\n            return order;\n        };\n    }\n\n    @Bean\n    public GenericTransformer<Message<?>, Message<?>> enrichHeaderTransformer() {\n        return message -> MessageBuilder.fromMessage(message)\n            .setHeader(\"processedAt\", java.time.LocalDateTime.now().toString())\n            .setHeader(\"processedBy\", \"transformer-service\")\n            .setHeader(\"version\", \"1.0\")\n            .build();\n    }\n\n    @Bean\n    public GenericTransformer<String, String> xmlToJsonTransformer() {\n        return xml -> {\n            try {\n                ObjectMapper xmlMapper = new com.fasterxml.jackson.dataformat.xml.XmlMapper();\n                Object obj = xmlMapper.readValue(xml, Object.class);\n                ObjectMapper jsonMapper = new ObjectMapper();\n                return jsonMapper.writeValueAsString(obj);\n            } catch (Exception e) {\n                throw new RuntimeException(\"XML to JSON conversion failed\", e);\n            }\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-custom-transformer-service",
      children: "4.1 Custom Transformer Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.transformer;\n\nimport com.aiengineering.course.model.*;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.integration.annotation.Transformer;\nimport org.springframework.integration.support.MessageBuilder;\nimport org.springframework.messaging.Message;\nimport org.springframework.stereotype.Component;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.UUID;\n\n@Component\npublic class OrderTransformerService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderTransformerService.class);\n\n    @Transformer(inputChannel = \"orderValidationChannel\", outputChannel = \"orderProcessingChannel\")\n    public ValidatedOrder validateOrder(Order order) {\n        log.info(\"Validating order: {}\", order.getId());\n\n        if (order.getTotal() == null || order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {\n            throw new IllegalArgumentException(\"Invalid order total\");\n        }\n        if (order.getCustomerName() == null || order.getCustomerName().isBlank()) {\n            throw new IllegalArgumentException(\"Customer name is required\");\n        }\n\n        return new ValidatedOrder(\n            order.getId(),\n            order.getCustomerName(),\n            order.getTotal(),\n            order.getStatus(),\n            true,\n            \"Order validated successfully\",\n            LocalDateTime.now()\n        );\n    }\n\n    @Transformer(inputChannel = \"orderEnrichmentChannel\", outputChannel = \"orderRoutingChannel\")\n    public Message<EnrichedOrder> enrichOrder(Order order) {\n        EnrichedOrder enriched = new EnrichedOrder(\n            order.getId(),\n            UUID.randomUUID().toString(),\n            order.getCustomerName(),\n            order.getTotal(),\n            order.getStatus(),\n            order.getItems() != null ? order.getItems() : List.of(),\n            LocalDateTime.now(),\n            LocalDateTime.now()\n        );\n\n        return MessageBuilder.withPayload(enriched)\n            .setHeader(\"orderType\", determineOrderType(order))\n            .setHeader(\"priority\", calculatePriority(order))\n            .setHeader(\"requiresReview\", order.getTotal().compareTo(\n                new BigDecimal(\"10000\")) > 0)\n            .build();\n    }\n\n    @Transformer(inputChannel = \"paymentTransformerChannel\", outputChannel = \"paymentProcessingChannel\")\n    public Payment transformPayment(Map<String, Object> paymentData) {\n        return Payment.builder()\n            .transactionId((String) paymentData.get(\"transactionId\"))\n            .orderId(Long.valueOf((String) paymentData.get(\"orderId\")))\n            .amount(new BigDecimal((String) paymentData.get(\"amount\")))\n            .currency((String) paymentData.getOrDefault(\"currency\", \"USD\"))\n            .paymentMethod((String) paymentData.get(\"paymentMethod\"))\n            .status(\"PENDING\")\n            .createdAt(LocalDateTime.now())\n            .build();\n    }\n\n    @Transformer(inputChannel = \"csvOrderChannel\", outputChannel = \"validatedOrderChannel\")\n    public List<Order> parseCsvOrders(String csvContent) {\n        return csvContent.lines()\n            .skip(1)\n            .map(line -> {\n                String[] parts = line.split(\",\");\n                Order order = new Order();\n                order.setCustomerName(parts[0].trim());\n                order.setTotal(new BigDecimal(parts[1].trim()));\n                order.setStatus(\"PENDING\");\n                return order;\n            })\n            .toList();\n    }\n\n    @Transformer(inputChannel = \"notificationTransformChannel\")\n    public Message<?> transformNotification(Map<String, Object> notification) {\n        String type = (String) notification.get(\"type\");\n        String message = (String) notification.get(\"message\");\n\n        return MessageBuilder.withPayload(message)\n            .setHeader(\"notificationType\", type)\n            .setHeader(\"channel\", determineChannel(type))\n            .setHeader(\"timestamp\", LocalDateTime.now().toString())\n            .build();\n    }\n\n    private String determineOrderType(Order order) {\n        if (order.getTotal().compareTo(new BigDecimal(\"5000\")) > 0) return \"PREMIUM\";\n        if (order.getItems() != null && order.getItems().size() > 10) return \"BULK\";\n        return \"STANDARD\";\n    }\n\n    private int calculatePriority(Order order) {\n        if (order.getTotal().compareTo(new BigDecimal(\"50000\")) > 0) return 1;\n        if (order.getTotal().compareTo(new BigDecimal(\"10000\")) > 0) return 2;\n        return 3;\n    }\n\n    private String determineChannel(String type) {\n        return switch (type) {\n            case \"URGENT\", \"ALERT\" -> \"sms\";\n            case \"INFO\", \"CONFIRMATION\" -> \"email\";\n            case \"MARKETING\" -> \"push\";\n            default -> \"email\";\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-routers",
      children: "5. Routers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.router;\n\nimport com.aiengineering.course.model.EnrichedOrder;\nimport com.aiengineering.course.model.Order;\nimport com.aiengineering.course.model.Payment;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.annotation.Router;\nimport org.springframework.integration.router.*;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.MessageChannel;\nimport org.springframework.messaging.support.MessageBuilder;\n\nimport java.util.List;\nimport java.util.Map;\n\n@Configuration\npublic class RouterConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(RouterConfig.class);\n\n    @Bean\n    public HeaderValueRouter orderTypeRouter() {\n        HeaderValueRouter router = new HeaderValueRouter(\"orderType\");\n        router.setChannelMapping(\"PREMIUM\", \"premiumOrderChannel\");\n        router.setChannelMapping(\"STANDARD\", \"standardOrderChannel\");\n        router.setChannelMapping(\"BULK\", \"bulkOrderChannel\");\n        router.setChannelMapping(\"INTERNATIONAL\", \"internationalOrderChannel\");\n        router.setDefaultOutputChannel(defaultOrderChannel());\n        router.setResolutionRequired(false);\n        return router;\n    }\n\n    @Bean\n    public PayloadTypeRouter payloadTypeRouter() {\n        PayloadTypeRouter router = new PayloadTypeRouter();\n        router.setChannelMapping(Order.class.getName(), \"orderChannel\");\n        router.setChannelMapping(Payment.class.getName(), \"paymentChannel\");\n        router.setChannelMapping(String.class.getName(), \"stringMessageChannel\");\n        router.setChannelMapping(Map.class.getName(), \"mapMessageChannel\");\n        return router;\n    }\n\n    @Bean\n    public RecipientListRouter<Message<?>> recipientListRouter() {\n        RecipientListRouter router = new RecipientListRouter();\n        router.setRecipients(List.of(\n            \"auditChannel\",\n            \"notificationChannel\",\n            \"persistenceChannel\"\n        ));\n        router.setApplySequence(true);\n        router.setIgnoreSendFailures(true);\n        router.setTimeout(5000);\n        return router;\n    }\n\n    @Bean\n    public ErrorMessageExceptionTypeRouter errorRouter() {\n        ErrorMessageExceptionTypeRouter router = new ErrorMessageExceptionTypeRouter();\n        router.setChannelMapping(\n            IllegalArgumentException.class.getName(), \"validationErrorChannel\");\n        router.setChannelMapping(\n            org.springframework.dao.DataAccessException.class.getName(),\n            \"databaseErrorChannel\");\n        router.setChannelMapping(\n            org.springframework.integration.IntegrationException.class.getName(),\n            \"integrationErrorChannel\");\n        router.setChannelMapping(\n            java.net.ConnectException.class.getName(), \"networkErrorChannel\");\n        router.setDefaultOutputChannel(genericErrorChannel());\n        return router;\n    }\n\n    @Bean\n    public MessageChannel defaultOrderChannel() {\n        return new org.springframework.integration.channel.DirectChannel();\n    }\n\n    @Bean\n    public MessageChannel genericErrorChannel() {\n        return new org.springframework.integration.channel.DirectChannel();\n    }\n\n    @Bean\n    @Router(inputChannel = \"dynamicRouterChannel\")\n    public AbstractMessageRouter dynamicRouter() {\n        return new AbstractMessageRouter() {\n            @Override\n            protected Collection<MessageChannel> determineTargetChannels(\n                    Message<?> message) {\n                String routingKey = (String) message.getHeaders()\n                    .getOrDefault(\"routingKey\", \"default\");\n\n                return List.of(switch (routingKey) {\n                    case \"fast\" -> fastPathChannel();\n                    case \"reliable\" -> reliablePathChannel();\n                    case \"audit\" -> auditOnlyChannel();\n                    default -> defaultPathChannel();\n                });\n            }\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.router;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.integration.annotation.Router;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.MessageChannel;\nimport org.springframework.stereotype.Component;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport java.util.Map;\n\n@Component\npublic class OrderRouterService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderRouterService.class);\n\n    @Router(inputChannel = \"orderRoutingChannel\")\n    public String routeOrderByType(Message<EnrichedOrder> message) {\n        EnrichedOrder order = message.getPayload();\n        String type = (String) message.getHeaders().getOrDefault(\"orderType\", \"STANDARD\");\n\n        log.info(\"Routing order {} as {}\", order.id(), type);\n\n        return switch (type) {\n            case \"PREMIUM\" -> \"premiumProcessingChannel\";\n            case \"BULK\" -> \"bulkProcessingChannel\";\n            case \"INTERNATIONAL\" -> \"internationalProcessingChannel\";\n            default -> \"standardProcessingChannel\";\n        };\n    }\n\n    @Router(inputChannel = \"paymentRoutingChannel\")\n    public List<String> routePayment(Payment payment) {\n        if (payment.getAmount().compareTo(new BigDecimal(\"100000\")) > 0) {\n            return List.of(\"highValuePaymentChannel\", \"fraudReviewChannel\");\n        }\n        if (payment.getAmount().compareTo(new BigDecimal(\"10000\")) > 0) {\n            return List.of(\"standardPaymentChannel\", \"auditLogChannel\");\n        }\n        return List.of(\"standardPaymentChannel\");\n    }\n\n    @Router(inputChannel = \"errorRoutingChannel\")\n    public String routeError(Message<?> errorMessage) {\n        Throwable cause = (Throwable) errorMessage.getPayload();\n        log.error(\"Routing error: {}\", cause.getMessage());\n\n        if (cause instanceof IllegalArgumentException) {\n            return \"validationErrorChannel\";\n        } else if (cause instanceof java.io.IOException) {\n            return \"retryChannel\";\n        } else if (cause instanceof org.springframework.dao.DataIntegrityViolationException) {\n            return \"deadLetterChannel\";\n        }\n        return \"fatalErrorChannel\";\n    }\n\n    @Router(inputChannel = \"notificationRoutingChannel\")\n    public String routeNotification(Message<?> message) {\n        String type = (String) message.getHeaders().get(\"notificationType\");\n        String channel = (String) message.getHeaders().get(\"channel\");\n\n        return channel + \"NotificationChannel\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-adapters",
      children: "6. Adapters"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-file-adapters",
      children: "6.1 File Adapters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.dsl.IntegrationFlow;\nimport org.springframework.integration.dsl.IntegrationFlows;\nimport org.springframework.integration.dsl.Pollers;\nimport org.springframework.integration.file.FileReadingMessageSource;\nimport org.springframework.integration.file.FileWritingMessageHandler;\nimport org.springframework.integration.file.filters.AcceptOnceFileListFilter;\nimport org.springframework.integration.file.filters.CompositeFileListFilter;\nimport org.springframework.integration.file.filters.LastModifiedFileListFilter;\nimport org.springframework.integration.file.filters.SimplePatternFileListFilter;\nimport org.springframework.integration.file.support.FileExistsMode;\nimport org.springframework.integration.transformer.GenericTransformer;\nimport org.springframework.messaging.MessageHandler;\n\nimport java.io.File;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\n@Configuration\npublic class FileAdapterConfig {\n\n    @Bean\n    public FileReadingMessageSource fileReadingMessageSource() {\n        FileReadingMessageSource source = new FileReadingMessageSource();\n        source.setDirectory(new File(\"/tmp/input\"));\n        source.setAutoCreateDirectory(true);\n        source.setScanEachPoll(true);\n        source.setUseWatchService(true);\n        source.setWatchEvents(\n            FileReadingMessageSource.WatchEventType.CREATE,\n            FileReadingMessageSource.WatchEventType.MODIFY\n        );\n\n        CompositeFileListFilter<File> filter = new CompositeFileListFilter<>();\n        filter.addFilters(\n            new SimplePatternFileListFilter(\"*.csv\"),\n            new SimplePatternFileListFilter(\"*.xml\"),\n            new LastModifiedFileListFilter(1000),\n            new AcceptOnceFileListFilter<>()\n        );\n        source.setFilter(filter);\n\n        return source;\n    }\n\n    @Bean\n    public MessageHandler fileWritingMessageHandler() {\n        FileWritingMessageHandler handler = new FileWritingMessageHandler(\n            new File(\"/tmp/output\"));\n        handler.setAutoCreateDirectory(true);\n        handler.setFileExistsMode(FileExistsMode.REPLACE);\n        handler.setDeleteSourceFiles(true);\n        handler.setCharset(\"UTF-8\");\n        handler.setExpectFailure(false);\n        handler.setFileNameGenerator(message -> {\n            Object payload = message.getPayload();\n            if (payload instanceof File file) {\n                return \"processed_\" + file.getName();\n            }\n            return \"output_\" + System.currentTimeMillis() + \".txt\";\n        });\n        handler.setFileExistsMode(FileExistsMode.APPEND_NO_FLUSH);\n\n        return handler;\n    }\n\n    @Bean\n    public IntegrationFlow fileProcessingFlow() {\n        return IntegrationFlows\n            .from(fileReadingMessageSource(),\n                config -> config.poller(Pollers.fixedDelay(5000)))\n            .filter(File.class, file -> file.getName().endsWith(\".csv\"),\n                f -> f.discardChannel(fileDiscardChannel()))\n            .transform(fileToStringTransformer())\n            .transform(csvLineParserTransformer())\n            .handle(orderProcessingService())\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-jms-adapters",
      children: "6.2 JMS Adapters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport jakarta.jms.ConnectionFactory;\nimport jakarta.jms.MessageListener;\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.jms.*;\nimport org.springframework.integration.jms.dsl.Jms;\nimport org.springframework.integration.dsl.IntegrationFlow;\nimport org.springframework.integration.dsl.IntegrationFlows;\nimport org.springframework.jms.core.JmsTemplate;\nimport org.springframework.jms.listener.DefaultMessageListenerContainer;\nimport org.springframework.jms.support.converter.MappingJackson2MessageConverter;\nimport org.springframework.jms.support.converter.MessageConverter;\nimport org.springframework.jms.support.converter.MessageType;\n\n@Configuration\npublic class JmsAdapterConfig {\n\n    @Bean\n    public ChannelPublishingJmsMessageListener jmsMessageListener() {\n        ChannelPublishingJmsMessageListener listener =\n            new ChannelPublishingJmsMessageListener();\n        listener.setRequestChannelName(\"jmsInboundChannel\");\n        listener.setExpectReply(false);\n        return listener;\n    }\n\n    @Bean\n    public DefaultMessageListenerContainer jmsListenerContainer(\n            ConnectionFactory connectionFactory,\n            ChannelPublishingJmsMessageListener jmsMessageListener) {\n\n        DefaultMessageListenerContainer container =\n            new DefaultMessageListenerContainer();\n        container.setConnectionFactory(connectionFactory);\n        container.setDestinationName(\"orders.queue\");\n        container.setMessageListener(jmsMessageListener);\n        container.setConcurrentConsumers(3);\n        container.setMaxConcurrentConsumers(10);\n        container.setSessionTransacted(true);\n        container.setAutoStartup(true);\n        return container;\n    }\n\n    @Bean\n    public JmsSendingMessageHandler jmsOutboundAdapter(\n            ConnectionFactory connectionFactory) {\n\n        JmsSendingMessageHandler handler = new JmsSendingMessageHandler(\n            new JmsTemplate(connectionFactory));\n        handler.setDestinationName(\"processed.orders.queue\");\n        handler.setLoggingEnabled(true);\n        return handler;\n    }\n\n    @Bean\n    public MessageConverter jmsMessageConverter() {\n        MappingJackson2MessageConverter converter =\n            new MappingJackson2MessageConverter();\n        converter.setTargetType(MessageType.TEXT);\n        converter.setTypeIdPropertyName(\"_type\");\n        return converter;\n    }\n\n    @Bean\n    public IntegrationFlow jmsInboundFlow() {\n        return IntegrationFlows\n            .from(Jms.messageDrivenChannelAdapter(\n                    jmsListenerContainer(null, null))\n                .errorChannel(\"errorChannel\"))\n            .transform(jmsMessageTransformer())\n            .handle(\"orderProcessingService\", \"processJmsOrder\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow jmsOutboundFlow() {\n        return IntegrationFlows\n            .from(\"jmsOutboundChannel\")\n            .handle(Jms.outboundAdapter(\n                    new JmsTemplate(null))\n                .destinationExpression(\"headers.jmsDestination\"))\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-ftp-adapters",
      children: "6.3 FTP Adapters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.apache.commons.net.ftp.FTPFile;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.dsl.IntegrationFlow;\nimport org.springframework.integration.dsl.IntegrationFlows;\nimport org.springframework.integration.dsl.Pollers;\nimport org.springframework.integration.file.filters.AcceptOnceFileListFilter;\nimport org.springframework.integration.file.remote.session.CachingSessionFactory;\nimport org.springframework.integration.file.remote.session.SessionFactory;\nimport org.springframework.integration.ftp.dsl.Ftp;\nimport org.springframework.integration.ftp.session.DefaultFtpSessionFactory;\nimport org.springframework.integration.handler.LoggingHandler;\n\nimport java.time.Duration;\n\n@Configuration\npublic class FtpAdapterConfig {\n\n    @Value(\"${ftp.host}\")\n    private String ftpHost;\n\n    @Value(\"${ftp.port}\")\n    private int ftpPort;\n\n    @Value(\"${ftp.username}\")\n    private String ftpUsername;\n\n    @Value(\"${ftp.password}\")\n    private String ftpPassword;\n\n    @Value(\"${ftp.remote-dir}\")\n    private String remoteDir;\n\n    @Value(\"${ftp.local-dir}\")\n    private String localDir;\n\n    @Bean\n    public DefaultFtpSessionFactory ftpSessionFactory() {\n        DefaultFtpSessionFactory factory = new DefaultFtpSessionFactory();\n        factory.setHost(ftpHost);\n        factory.setPort(ftpPort);\n        factory.setUsername(ftpUsername);\n        factory.setPassword(ftpPassword);\n        factory.setClientMode(org.apache.commons.net.ftp.FTP.PASSIVE_LOCAL_DATA_CONNECTION_MODE);\n        factory.setFileType(org.apache.commons.net.ftp.FTP.BINARY_FILE_TYPE);\n        factory.setBufferSize(1000000);\n        return factory;\n    }\n\n    @Bean\n    public SessionFactory<FTPFile> cachingSessionFactory() {\n        CachingSessionFactory<FTPFile> factory =\n            new CachingSessionFactory<>(ftpSessionFactory());\n        factory.setSessionWaitTimeout(30000);\n        factory.setCacheSize(10);\n        factory.setCacheLimit(10);\n        return factory;\n    }\n\n    @Bean\n    public IntegrationFlow ftpInboundFlow() {\n        return IntegrationFlows\n            .from(Ftp.inboundAdapter(cachingSessionFactory())\n                    .remoteDirectory(remoteDir)\n                    .localDirectory(new java.io.File(localDir))\n                    .autoCreateLocalDirectory(true)\n                    .deleteRemoteFiles(false)\n                    .localFilenameExpression(\"#this.name\")\n                    .filter(new AcceptOnceFileListFilter<>())\n                    .temporaryFileSuffix(\".tmp\"),\n                e -> e.poller(Pollers.fixedDelay(Duration.ofSeconds(30))\n                    .maxMessagesPerPoll(5)))\n            .transform(ftpFileTransformer())\n            .handle(\"ftpFileProcessingService\", \"processFile\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow ftpOutboundFlow() {\n        return IntegrationFlows\n            .from(\"ftpOutboundChannel\")\n            .handle(Ftp.outboundAdapter(cachingSessionFactory())\n                    .remoteDirectory(remoteDir)\n                    .autoCreateDirectory(true)\n                    .temporaryFileSuffix(\".writing\")\n                    .useTemporaryFileName(true)\n                    .fileNameGenerator(message -> {\n                        String original = (String) message.getHeaders()\n                            .get(\"file_name\");\n                        return \"upload_\" + (original != null ? original\n                            : System.currentTimeMillis() + \".csv\");\n                    }),\n                e -> e.advice(ftpRetryAdvice()))\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-mail-adapters",
      children: "6.4 Mail Adapters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport jakarta.mail.internet.MimeMessage;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.dsl.IntegrationFlow;\nimport org.springframework.integration.dsl.IntegrationFlows;\nimport org.springframework.integration.dsl.Pollers;\nimport org.springframework.integration.mail.dsl.Mail;\nimport org.springframework.integration.mail.ImapIdleChannelAdapter;\nimport org.springframework.integration.mail.MailReceivingMessageSource;\nimport org.springframework.integration.mail.MailSendingMessageHandler;\nimport org.springframework.integration.mail.support.DefaultMailHeaderMapper;\nimport org.springframework.integration.support.MessageBuilder;\nimport org.springframework.mail.javamail.JavaMailSender;\nimport org.springframework.mail.javamail.JavaMailSenderImpl;\nimport org.springframework.mail.javamail.MimeMessageHelper;\n\nimport java.util.Properties;\n\n@Configuration\npublic class MailAdapterConfig {\n\n    @Value(\"${spring.mail.host}\")\n    private String mailHost;\n\n    @Value(\"${spring.mail.port}\")\n    private int mailPort;\n\n    @Value(\"${spring.mail.username}\")\n    private String mailUsername;\n\n    @Value(\"${spring.mail.password}\")\n    private String mailPassword;\n\n    @Bean\n    public JavaMailSender javaMailSender() {\n        JavaMailSenderImpl sender = new JavaMailSenderImpl();\n        sender.setHost(mailHost);\n        sender.setPort(mailPort);\n        sender.setUsername(mailUsername);\n        sender.setPassword(mailPassword);\n\n        Properties props = sender.getJavaMailProperties();\n        props.put(\"mail.transport.protocol\", \"smtp\");\n        props.put(\"mail.smtp.auth\", \"true\");\n        props.put(\"mail.smtp.starttls.enable\", \"true\");\n        props.put(\"mail.smtp.connectiontimeout\", \"10000\");\n        props.put(\"mail.smtp.timeout\", \"10000\");\n        props.put(\"mail.smtp.writetimeout\", \"10000\");\n        props.put(\"mail.debug\", \"true\");\n\n        return sender;\n    }\n\n    @Bean\n    public MailReceivingMessageSource imapMailReceiver() {\n        MailReceivingMessageSource receiver = new MailReceivingMessageSource(\n            Mail.imapIdleAdapter(\"imap.gmail.com\", 993, mailUsername, mailPassword)\n                .javaMailProperties(p -> {\n                    p.put(\"mail.debug\", \"false\");\n                    p.put(\"mail.imap.connectiontimeout\", \"30000\");\n                    p.put(\"mail.imap.timeout\", \"30000\");\n                })\n                .shouldDeleteMessages(false)\n                .shouldMarkMessagesAsRead(true)\n                .get());\n\n        return receiver;\n    }\n\n    @Bean\n    public IntegrationFlow mailInboundFlow() {\n        return IntegrationFlows\n            .from(imapMailReceiver(),\n                e -> e.poller(Pollers.fixedDelay(10000)))\n            .transform(MimeMessage.class, mimeMessage -> {\n                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);\n                return MessageBuilder.withPayload(helper.getContent())\n                    .setHeader(\"subject\", helper.getSubject())\n                    .setHeader(\"from\", helper.getFrom())\n                    .setHeader(\"to\", helper.getTo())\n                    .build();\n            })\n            .route(\"headers.subject\", routing -> routing\n                .channelMapping(\"ORDER*\", \"emailOrderChannel\")\n                .channelMapping(\"SUPPORT*\", \"emailSupportChannel\")\n                .channelMapping(\"*\", \"emailGeneralChannel\"))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow mailOutboundFlow() {\n        return IntegrationFlows\n            .from(\"mailOutboundChannel\")\n            .handle(Mail.outboundAdapter(javaMailSender())\n                    .to(\"recipient@example.com\")\n                    .cc(\"cc@example.com\"),\n                e -> e.advice(mailRetryAdvice()))\n            .get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-dsl-integrationflow",
      children: "7. DSL IntegrationFlow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport com.aiengineering.course.model.Order;\nimport com.aiengineering.course.model.OrderStatus;\nimport com.aiengineering.course.model.Payment;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.integration.dsl.IntegrationFlow;\nimport org.springframework.integration.dsl.IntegrationFlows;\nimport org.springframework.integration.dsl.MessageChannels;\nimport org.springframework.integration.dsl.Pollers;\nimport org.springframework.integration.handler.LoggingHandler;\nimport org.springframework.integration.handler.advice.RequestHandlerRetryAdvice;\nimport org.springframework.integration.jpa.dsl.Jpa;\nimport org.springframework.integration.jpa.support.JpaParameter;\nimport org.springframework.integration.router.ExpressionEvaluatingRouter;\nimport org.springframework.integration.splitter.DefaultMessageSplitter;\nimport org.springframework.integration.stream.CharacterStreamWritingMessageHandler;\nimport org.springframework.integration.transformer.*;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.support.MessageBuilder;\nimport org.springframework.retry.support.RetryTemplate;\nimport org.springframework.scheduling.support.PeriodicTrigger;\nimport org.springframework.transaction.support.TransactionTemplate;\nimport jakarta.persistence.EntityManagerFactory;\n\nimport java.math.BigDecimal;\nimport java.time.Duration;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n@Configuration\npublic class IntegrationFlowConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(IntegrationFlowConfig.class);\n\n    private final AtomicInteger orderCounter = new AtomicInteger(0);\n\n    @Bean\n    public IntegrationFlow orderProcessingFlow() {\n        return IntegrationFlows\n            .from(\"orderInputChannel\")\n            .wireTap(\"monitoringChannel\")\n            .log(LoggingHandler.Level.INFO, \"order.received\", m ->\n                \"Received order: \" + m.getHeaders().getId())\n            .transform(orderValidationTransformer())\n            .filter(\"payload.valid == true\",\n                f -> f.discardChannel(\"invalidOrderChannel\"))\n            .route(\"headers.orderType\", routing -> routing\n                .subFlowMapping(\"PREMIUM\", sf -> sf\n                    .channel(MessageChannels.queue())\n                    .transform(premiumOrderTransformer())\n                    .handle(\"premiumOrderService\", \"process\"))\n                .subFlowMapping(\"STANDARD\", sf -> sf\n                    .transform(standardOrderTransformer())\n                    .handle(\"standardOrderService\", \"process\"))\n                .defaultOutputChannel(\"generalOrderProcessingChannel\"))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow paymentProcessingFlow() {\n        return IntegrationFlows\n            .from(\"paymentChannel\")\n            .transform(payment -> {\n                log.info(\"Processing payment: {}\", payment);\n                return MessageBuilder.withPayload(payment)\n                    .setHeader(\"paymentTime\", System.currentTimeMillis())\n                    .build();\n            })\n            .<Payment, Boolean>route(\n                p -> p.getAmount().compareTo(new BigDecimal(\"10000\")) > 0,\n                mapping -> mapping\n                    .channelMapping(true, \"fraudReviewChannel\")\n                    .channelMapping(false, \"standardPaymentChannel\"))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow fraudReviewFlow() {\n        return IntegrationFlows\n            .from(\"fraudReviewChannel\")\n            .<Payment>filter(p -> {\n                log.warn(\"Fraud review for payment: {}\", p.getTransactionId());\n                return true;\n            })\n            .transform(p -> {\n                return Map.of(\n                    \"transactionId\", p.getTransactionId(),\n                    \"amount\", p.getAmount(),\n                    \"requiresReview\", true\n                );\n            })\n            .handle(\"fraudDetectionService\", \"review\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow notificationFlow() {\n        return IntegrationFlows\n            .from(\"notificationChannel\")\n            .publishSubscribeChannel(sub -> sub\n                .subscribe(f -> f\n                    .transform(\"payload.toUpperCase()\")\n                    .handle(loggingHandler()))\n                .subscribe(f -> f\n                    .channel(\"emailChannel\"))\n                .subscribe(f -> f\n                    .channel(\"smsChannel\")))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow batchOrderFlow() {\n        return IntegrationFlows\n            .from(\"batchOrderChannel\")\n            .split()\n            .channel(\"individualOrderChannel\")\n            .aggregate()\n            .channel(\"aggregatedOrderChannel\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow errorHandlingFlow() {\n        return IntegrationFlows\n            .from(\"errorChannel\")\n            .<Message<?>>log(LoggingHandler.Level.ERROR, \"Integration error: \",\n                m -> m.getPayload().toString())\n            .route(errorRouter())\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow scheduledPollingFlow() {\n        return IntegrationFlows\n            .from(() -> MessageBuilder.withPayload(\"tick\")\n                    .setHeader(\"timestamp\", System.currentTimeMillis())\n                    .build(),\n                e -> e.poller(Pollers.fixedDelay(5000)))\n            .transform(m -> \"Polled at: \" + System.currentTimeMillis())\n            .handle(CharacterStreamWritingMessageHandler.stdout())\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow retryFlow() {\n        return IntegrationFlows\n            .from(\"retryChannel\")\n            .handle(\"unreliableService\", \"process\",\n                e -> e.advice(requestHandlerRetryAdvice()))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow scatterGatherFlow() {\n        return IntegrationFlows\n            .from(\"scatterChannel\")\n            .scatterGather(s -> s\n                    .applySequence(false)\n                    .recipientFlow(f -> f.handle(\"serviceA\", \"process\"))\n                    .recipientFlow(f -> f.handle(\"serviceB\", \"process\"))\n                    .recipientFlow(f -> f.handle(\"serviceC\", \"process\")),\n                g -> g\n                    .releaseStrategy(group -> group.size() >= 3)\n                    .outputProcessor(group ->\n                        group.getMessages().stream()\n                            .map(Message::getPayload)\n                            .toList()))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow jdbcPollingFlow(EntityManagerFactory emf) {\n        return IntegrationFlows\n            .from(Jpa.inboundAdapter(emf)\n                    .entityClass(Order.class)\n                    .jpaQuery(\"from Order o where o.status = 'PENDING'\")\n                    .expectSingleResult(false),\n                e -> e.poller(Pollers.fixedDelay(Duration.ofSeconds(10))))\n            .handle(\"orderProcessingService\", \"processOrder\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow bridgeFlow() {\n        return IntegrationFlows\n            .from(\"sourceChannel\")\n            .bridge(e -> e.poller(Pollers.fixedDelay(1000)))\n            .channel(\"targetChannel\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow enrichFlow() {\n        return IntegrationFlows\n            .from(\"enrichInputChannel\")\n            .enrichHeaders(h -> h\n                .header(\"processedBy\", \"integration-flow\")\n                .header(\"version\", 2)\n                .header(\"timestamp\", System::currentTimeMillis)\n                .headerExpressions(hx -> hx\n                    .put(\"requestId\", \"headers.id\")))\n            .handle(\"enrichmentService\", \"process\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow filterFlow() {\n        return IntegrationFlows\n            .from(\"filterInputChannel\")\n            .filter(Order.class, order ->\n                    order.getTotal().compareTo(BigDecimal.ZERO) > 0,\n                f -> f.discardChannel(\"invalidAmountChannel\")\n                    .throwExceptionOnRejection(true))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow transformFlow() {\n        return IntegrationFlows\n            .from(\"transformInputChannel\")\n            .transform(jsonToObjectTransformer())\n            .transform(objectToJsonTransformer())\n            .transform(enrichHeaderTransformer())\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow routingFlow() {\n        return IntegrationFlows\n            .from(\"routeInputChannel\")\n            .route(ExpressionEvaluatingRouter.class,\n                r -> r.setExpression(\"payload.status\")\n                    .setChannelMapping(\"NEW\", \"newOrderChannel\")\n                    .setChannelMapping(\"PROCESSING\", \"processChannel\")\n                    .setChannelMapping(\"COMPLETED\", \"completedChannel\"))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow splitterFlow() {\n        return IntegrationFlows\n            .from(\"splitInputChannel\")\n            .split(DefaultMessageSplitter.class,\n                s -> s.applySequence(true).setDelimiters(\",\"))\n            .handle(\"itemProcessor\", \"processItem\")\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow aggregatorFlow() {\n        return IntegrationFlows\n            .from(\"aggregateInputChannel\")\n            .aggregate(a -> a\n                .correlationStrategy(m -> m.getHeaders().get(\"correlationId\"))\n                .releaseStrategy(g -> g.size() >= 10)\n                .expireGroupsUponCompletion(true)\n                .sendPartialResultOnExpiry(true)\n                .groupTimeout(30000))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow barrierFlow() {\n        return IntegrationFlows\n            .from(\"barrierInputChannel\")\n            .barrier(b -> b.correlationStrategy(\n                    m -> m.getHeaders().get(\"correlationId\"))\n                .timeout(30000))\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow resequenceFlow() {\n        return IntegrationFlows\n            .from(\"resequenceInputChannel\")\n            .resequence()\n            .get();\n    }\n\n    @Bean\n    public IntegrationFlow delayFlow() {\n        return IntegrationFlows\n            .from(\"delayInputChannel\")\n            .delay(\"orderDelayGroup\", d -> d\n                .defaultDelay(5000)\n                .delayExpression(\"headers.delay\"))\n            .handle(\"delayedProcessor\", \"process\")\n            .get();\n    }\n\n    @Bean\n    public RequestHandlerRetryAdvice requestHandlerRetryAdvice() {\n        RequestHandlerRetryAdvice advice = new RequestHandlerRetryAdvice();\n        advice.setRetryTemplate(RetryTemplate.builder()\n            .maxAttempts(3)\n            .exponentialBackoff(1000, 2, 10000)\n            .build());\n        advice.setRecoveryCallback(context -> {\n            log.error(\"Retry exhausted for: {}\", context.getLastThrowable().getMessage());\n            return null;\n        });\n        return advice;\n    }\n\n    @Bean\n    public LoggingHandler loggingHandler() {\n        LoggingHandler handler = new LoggingHandler(LoggingHandler.Level.INFO);\n        handler.setLogExpressionString(\"'Logging: ' + payload\");\n        handler.setShouldLogFullMessage(true);\n        return handler;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-service-activator",
      children: "8. Service Activator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.model.*;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.integration.annotation.ServiceActivator;\nimport org.springframework.integration.support.MessageBuilder;\nimport org.springframework.messaging.Message;\nimport org.springframework.stereotype.Service;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.UUID;\n\n@Service\npublic class OrderProcessingService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderProcessingService.class);\n\n    @ServiceActivator(inputChannel = \"standardOrderProcessingChannel\",\n                      outputChannel = \"orderConfirmationChannel\",\n                      requiresReply = true)\n    public OrderConfirmation processStandardOrder(Order order) {\n        log.info(\"Processing standard order: {}\", order.getId());\n\n        OrderConfirmation confirmation = new OrderConfirmation(\n            UUID.randomUUID().toString(),\n            order.getId(),\n            \"STANDARD\",\n            \"ACCEPTED\",\n            LocalDateTime.now(),\n            \"Order queued for standard processing\"\n        );\n\n        return confirmation;\n    }\n\n    @ServiceActivator(inputChannel = \"premiumOrderProcessingChannel\")\n    public Message<OrderConfirmation> processPremiumOrder(Order order) {\n        log.info(\"Processing PREMIUM order: {}\", order.getId());\n\n        OrderConfirmation confirmation = new OrderConfirmation(\n            UUID.randomUUID().toString(),\n            order.getId(),\n            \"PREMIUM\",\n            \"ACCEPTED\",\n            LocalDateTime.now(),\n            \"Premium order - priority processing\"\n        );\n\n        return MessageBuilder.withPayload(confirmation)\n            .setHeader(\"priority\", 1)\n            .setHeader(\"routingSlip\", List.of(\"inventoryCheck\", \"paymentProcess\", \"shipNow\"))\n            .build();\n    }\n\n    @ServiceActivator(inputChannel = \"orderPersistenceChannel\")\n    public void persistOrder(Order order) {\n        log.info(\"Persisting order: {}\", order.getId());\n    }\n\n    @ServiceActivator(inputChannel = \"orderValidationChannel\",\n                      outputChannel = \"validatedOrderChannel\")\n    public Order validateOrder(Order order) {\n        if (order.getCustomerName() == null || order.getCustomerName().isBlank()) {\n            throw new IllegalArgumentException(\"Customer name is required\");\n        }\n        if (order.getTotal() == null || order.getTotal().signum() <= 0) {\n            throw new IllegalArgumentException(\"Invalid order total\");\n        }\n        return order;\n    }\n\n    @ServiceActivator(inputChannel = \"paymentProcessingChannel\",\n                      outputChannel = \"paymentResultChannel\")\n    public PaymentResult processPayment(Payment payment) {\n        log.info(\"Processing payment {} for order {}\",\n            payment.getTransactionId(), payment.getOrderId());\n\n        return new PaymentResult(\n            payment.getTransactionId(),\n            \"COMPLETED\",\n            payment.getAmount(),\n            LocalDateTime.now()\n        );\n    }\n\n    @ServiceActivator(inputChannel = \"auditChannel\")\n    public void auditEvent(Map<String, Object> auditData) {\n        log.info(\"Audit: action={}, entity={}, id={}\",\n            auditData.get(\"action\"),\n            auditData.get(\"entityType\"),\n            auditData.get(\"entityId\"));\n    }\n\n    @ServiceActivator(inputChannel = \"notifyChannel\", async = true)\n    public void sendNotification(Notification notification) {\n        log.info(\"Sending {} to {}: {}\",\n            notification.type(),\n            notification.recipient(),\n            notification.message());\n    }\n\n    @ServiceActivator(inputChannel = \"errorRecoveryChannel\",\n                      outputChannel = \"recoveryResultChannel\")\n    public RecoveryResult handleError(ErrorMessage errorMessage) {\n        log.error(\"Handling error: {}\", errorMessage.getCause().getMessage());\n\n        return new RecoveryResult(\n            errorMessage.getFailedMessage().getHeaders().getId().toString(),\n            \"RETRY\",\n            errorMessage.getCause().getMessage()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-splitter-and-aggregator",
      children: "9. Splitter and Aggregator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.model.*;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.integration.annotation.Aggregator;\nimport org.springframework.integration.annotation.CorrelationStrategy;\nimport org.springframework.integration.annotation.ReleaseStrategy;\nimport org.springframework.integration.annotation.Splitter;\nimport org.springframework.integration.store.MessageGroup;\nimport org.springframework.messaging.Message;\nimport org.springframework.stereotype.Service;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.UUID;\n\n@Service\npublic class SplitterAggregatorService {\n\n    private static final Logger log = LoggerFactory.getLogger(SplitterAggregatorService.class);\n\n    @Splitter(inputChannel = \"batchOrderSplitterChannel\",\n              outputChannel = \"individualOrderChannel\")\n    public List<Order> splitBatchOrder(BatchOrder batchOrder) {\n        log.info(\"Splitting batch order with {} items\", batchOrder.items().size());\n\n        List<Order> orders = new ArrayList<>();\n        for (BatchOrder.BatchItem item : batchOrder.items()) {\n            Order order = new Order();\n            order.setCustomerName(item.customerName());\n            order.setTotal(item.price().multiply(BigDecimal.valueOf(item.quantity())));\n            order.setStatus(\"PENDING\");\n            order.setItems(List.of(new OrderItem(item.productCode(), item.quantity(), item.price())));\n            orders.add(order);\n        }\n\n        return orders;\n    }\n\n    @Splitter(inputChannel = \"fileLineSplitterChannel\",\n              outputChannel = \"fileLineChannel\")\n    public List<String> splitFileContent(String fileContent) {\n        return fileContent.lines()\n            .filter(line -> !line.isBlank())\n            .filter(line -> !line.startsWith(\"#\"))\n            .toList();\n    }\n\n    @Splitter(inputChannel = \"orderItemSplitterChannel\")\n    public List<OrderItem> splitOrderItems(Order order) {\n        return order.getItems() != null ? order.getItems() : List.of();\n    }\n\n    @Aggregator(inputChannel = \"aggregatedOrderChannel\",\n                 outputChannel = \"orderSummaryChannel\")\n    public OrderSummary aggregateOrders(List<Order> orders) {\n        log.info(\"Aggregating {} orders\", orders.size());\n\n        BigDecimal totalAmount = orders.stream()\n            .map(Order::getTotal)\n            .reduce(BigDecimal.ZERO, BigDecimal::add);\n\n        long completedCount = orders.stream()\n            .filter(o -> \"COMPLETED\".equals(o.getStatus()))\n            .count();\n\n        return new OrderSummary(\n            UUID.randomUUID().toString(),\n            orders.size(),\n            totalAmount,\n            completedCount,\n            LocalDateTime.now()\n        );\n    }\n\n    @Aggregator(inputChannel = \"paymentBatchChannel\",\n                 outputChannel = \"paymentBatchSummaryChannel\")\n    public PaymentBatchSummary aggregatePayments(List<Payment> payments) {\n        BigDecimal totalAmount = payments.stream()\n            .map(Payment::getAmount)\n            .reduce(BigDecimal.ZERO, BigDecimal::add);\n\n        long completedCount = payments.stream()\n            .filter(p -> \"COMPLETED\".equals(p.getStatus()))\n            .count();\n\n        return new PaymentBatchSummary(\n            payments.size(),\n            totalAmount,\n            completedCount\n        );\n    }\n\n    @CorrelationStrategy\n    public Object correlateByHeader(Message<?> message) {\n        return message.getHeaders().getOrDefault(\"correlationId\", \"default\");\n    }\n\n    @ReleaseStrategy\n    public boolean canRelease(MessageGroup group) {\n        return group.size() >= 10\n            || group.getTimestamp() + 30000 < System.currentTimeMillis();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-filter-and-wiretap",
      children: "10. Filter and WireTap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.model.Order;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.integration.annotation.Filter;\nimport org.springframework.integration.annotation.ServiceActivator;\nimport org.springframework.integration.router.HeaderValueRouter;\nimport org.springframework.messaging.Message;\nimport org.springframework.stereotype.Service;\n\nimport java.math.BigDecimal;\n\n@Service\npublic class FilterService {\n\n    private static final Logger log = LoggerFactory.getLogger(FilterService.class);\n\n    @Filter(inputChannel = \"orderFilterChannel\",\n            outputChannel = \"validOrderChannel\",\n            discardChannel = \"invalidOrderChannel\")\n    public boolean validOrderFilter(Order order) {\n        boolean valid = order.getTotal() != null\n            && order.getTotal().compareTo(BigDecimal.ZERO) > 0\n            && order.getCustomerName() != null\n            && !order.getCustomerName().isBlank();\n\n        if (!valid) {\n            log.warn(\"Filtered invalid order: {}\", order);\n        }\n\n        return valid;\n    }\n\n    @Filter(inputChannel = \"largeOrderFilterChannel\",\n            outputChannel = \"largeOrderChannel\",\n            discardChannel = \"standardOrderFilterChannel\")\n    public boolean largeOrderFilter(Message<Order> message) {\n        Order order = message.getPayload();\n        return order.getTotal().compareTo(new BigDecimal(\"10000\")) > 0;\n    }\n\n    @Filter(inputChannel = \"internationalOrderFilterChannel\",\n            outputChannel = \"internationalOrderChannel\",\n            discardChannel = \"domesticOrderChannel\")\n    public boolean internationalOrderFilter(Order order) {\n        return \"INTERNATIONAL\".equals(order.getType());\n    }\n\n    @Filter(inputChannel = \"duplicateOrderFilterChannel\",\n            outputChannel = \"uniqueOrderChannel\",\n            discardChannel = \"duplicateOrderDiscardChannel\")\n    public boolean duplicateOrderFilter(Order order) {\n        return true;\n    }\n\n    @ServiceActivator(inputChannel = \"invalidOrderChannel\")\n    public void handleInvalidOrder(Order order) {\n        log.error(\"Invalid order rejected: customer={}, total={}\",\n            order.getCustomerName(), order.getTotal());\n    }\n\n    @ServiceActivator(inputChannel = \"duplicateOrderDiscardChannel\")\n    public void handleDuplicateOrder(Message<?> message) {\n        log.warn(\"Duplicate order discarded: {}\", message.getHeaders().getId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-testing",
      children: "11. Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport com.aiengineering.course.gateway.OrderGateway;\nimport com.aiengineering.course.model.Order;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.integration.channel.QueueChannel;\nimport org.springframework.integration.config.EnableIntegration;\nimport org.springframework.integration.support.MessageBuilder;\nimport org.springframework.integration.test.context.SpringIntegrationTest;\nimport org.springframework.messaging.Message;\nimport org.springframework.messaging.MessageChannel;\nimport org.springframework.messaging.PollableChannel;\nimport org.springframework.test.annotation.DirtiesContext;\n\nimport java.math.BigDecimal;\nimport java.util.concurrent.TimeUnit;\n\nimport static org.awaitility.Awaitility.await;\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringBootTest\n@SpringIntegrationTest(noAutoStart = \"ftpInboundFlow,mailInboundFlow\")\n@DirtiesContext\npublic class IntegrationFlowTest {\n\n    @Autowired\n    private MessageChannel directChannel;\n\n    @Autowired\n    private PollableChannel queueChannel;\n\n    @Autowired\n    private OrderGateway orderGateway;\n\n    @Autowired\n    private MessageChannel orderInputChannel;\n\n    @Autowired\n    private PollableChannel orderConfirmationChannel;\n\n    @Test\n    void testDirectChannel() {\n        directChannel.send(MessageBuilder.withPayload(\"test\")\n            .build());\n    }\n\n    @Test\n    void testQueueChannel() {\n        queueChannel.receive(5000);\n    }\n\n    @Test\n    void testOrderGateway() {\n        Order order = new Order();\n        order.setCustomerName(\"John Doe\");\n        order.setTotal(new BigDecimal(\"150.00\"));\n        order.setStatus(\"PENDING\");\n\n        var result = orderGateway.placeOrder(order);\n        assertNotNull(result);\n    }\n\n    @Test\n    void testOrderProcessingFlow() {\n        Order order = new Order();\n        order.setCustomerName(\"Jane Doe\");\n        order.setTotal(new BigDecimal(\"250.00\"));\n        order.setStatus(\"PENDING\");\n\n        Message<Order> message = MessageBuilder.withPayload(order)\n            .setHeader(\"orderType\", \"STANDARD\")\n            .build();\n\n        orderInputChannel.send(message);\n\n        Message<?> reply = queueChannel.receive(5000);\n        assertNotNull(reply);\n    }\n\n    @Test\n    void testGatewayWithTimeout() {\n        Order order = new Order();\n        order.setCustomerName(\"Timeout Test\");\n        order.setTotal(new BigDecimal(\"100.00\"));\n        order.setStatus(\"PENDING\");\n\n        assertDoesNotThrow(() -> {\n            var result = orderGateway.placeOrder(order);\n            assertNotNull(result);\n        });\n    }\n\n    @Test\n    void testInvalidOrderRejected() {\n        Order order = new Order();\n        order.setCustomerName(\"\");\n        order.setTotal(new BigDecimal(\"-50.00\"));\n\n        assertDoesNotThrow(() -> {\n            orderInputChannel.send(MessageBuilder.withPayload(order).build());\n        });\n    }\n\n    @Test\n    void testPublishSubscribe() {\n        directChannel.send(MessageBuilder.withPayload(\"broadcast\")\n            .build());\n    }\n\n    @Test\n    void testMultipleMessages() {\n        for (int i = 0; i < 5; i++) {\n            Order order = new Order();\n            order.setCustomerName(\"User \" + i);\n            order.setTotal(new BigDecimal(\"100.00\"));\n            order.setStatus(\"PENDING\");\n\n            Message<Order> message = MessageBuilder.withPayload(order)\n                .setHeader(\"orderType\", i % 2 == 0 ? \"PREMIUM\" : \"STANDARD\")\n                .build();\n\n            orderInputChannel.send(message);\n        }\n    }\n\n    @Test\n    void testFlowMetrics() {\n        long startTime = System.currentTimeMillis();\n        orderInputChannel.send(MessageBuilder.withPayload(new Order())\n            .setHeader(\"orderType\", \"STANDARD\")\n            .build());\n        long duration = System.currentTimeMillis() - startTime;\n        assertTrue(duration < 5000, \"Flow took too long: \" + duration + \"ms\");\n    }\n}\n"
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
      children: "Spring Integration provides a complete implementation of Enterprise Integration Patterns:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Message"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MessageBuilder"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data + headers transport unit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DirectChannel"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "QueueChannel"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PublishSubscribeChannel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message transport medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gateway"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@MessagingGateway"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Gateway"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry point to integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Transformer"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ObjectToJsonTransformer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message format conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Router"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HeaderValueRouter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PayloadTypeRouter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic message routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional message acceptance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Splitter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Splitter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break message into parts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Aggregator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine related messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Activator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ServiceActivator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoke business logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File, JMS, FTP, Mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External system connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntegrationFlow"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IntegrationFlows"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative pipeline construction"
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
            children: "File Monitoring"
          }), ": Build an integration flow that monitors a directory for new CSV files, parses them, and inserts the data into a database."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "E-commerce Pipeline"
          }), ": Design a complete order-to-shipment integration flow with order validation, payment processing, inventory check, and shipment notification."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Protocol"
          }), ": Create a flow that accepts orders via JMS, transforms them, and sends notifications via email, SMS, and Slack simultaneously."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Error Handling"
          }), ": Implement a dead letter channel pattern with retry logic and manual review queue."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Router"
          }), ": Build a content-based router that routes messages based on JSON payload content evaluation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance Testing"
          }), ": Create a flow that processes 10000 messages through a scatter-gather pattern and measure throughput."]
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