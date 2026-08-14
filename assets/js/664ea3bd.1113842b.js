"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[86312],{

/***/ 62163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_47_spring_ai_md_664_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-47-spring-ai-md-664.json
const site_docs_courses_java_47_spring_ai_md_664_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/47-spring-ai","title":"Spring AI","description":"Previous GraphQL","source":"@site/docs/courses/java/47-spring-ai.md","sourceDirName":"courses/java","slug":"/java/47-spring-ai","permalink":"/ai-engineering-journey/java/47-spring-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":47,"frontMatter":{"id":"47-spring-ai","slug":"/java/47-spring-ai","title":"Spring AI","sidebar_label":"Spring AI","sidebar_position":47},"sidebar":"course-java","previous":{"title":"Chapter 46: R2DBC & Reactive Data Access","permalink":"/ai-engineering-journey/java/46-r2dbc"},"next":{"title":"Spring GraphQL","permalink":"/ai-engineering-journey/java/48-graphql"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/47-spring-ai.md


const frontMatter = {
	id: '47-spring-ai',
	slug: '/java/47-spring-ai',
	title: 'Spring AI',
	sidebar_label: 'Spring AI',
	sidebar_position: 47
};
const contentTitle = 'Spring AI';

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
  "value": "1. Spring AI Overview",
  "id": "1-spring-ai-overview",
  "level": 2
}, {
  "value": "1.1 Maven Dependencies",
  "id": "11-maven-dependencies",
  "level": 3
}, {
  "value": "1.2 Application Properties",
  "id": "12-application-properties",
  "level": 3
}, {
  "value": "2. ChatClient → Prompt, Call, Stream, Messages",
  "id": "2-chatclient--prompt-call-stream-messages",
  "level": 2
}, {
  "value": "2.1 Basic ChatClient Configuration",
  "id": "21-basic-chatclient-configuration",
  "level": 3
}, {
  "value": "2.2 ChatService → Sync, Stream, Multi-Turn",
  "id": "22-chatservice--sync-stream-multi-turn",
  "level": 3
}, {
  "value": "2.3 Conversation Model and Repository",
  "id": "23-conversation-model-and-repository",
  "level": 3
}, {
  "value": "3. ChatModel Configuration",
  "id": "3-chatmodel-configuration",
  "level": 2
}, {
  "value": "3.1 Provider Factory",
  "id": "31-provider-factory",
  "level": 3
}, {
  "value": "4. Structured Output with BeanOutputConverter",
  "id": "4-structured-output-with-beanoutputconverter",
  "level": 2
}, {
  "value": "4.1 Generic Structured Output Controller",
  "id": "41-generic-structured-output-controller",
  "level": 3
}, {
  "value": "5. Tool Calling",
  "id": "5-tool-calling",
  "level": 2
}, {
  "value": "5.1 Tool Definitions",
  "id": "51-tool-definitions",
  "level": 3
}, {
  "value": "5.2 Tool Execution Service",
  "id": "52-tool-execution-service",
  "level": 3
}, {
  "value": "5.3 Tool Controller",
  "id": "53-tool-controller",
  "level": 3
}, {
  "value": "6. Vector Stores",
  "id": "6-vector-stores",
  "level": 2
}, {
  "value": "6.1 Vector Store Configuration",
  "id": "61-vector-store-configuration",
  "level": 3
}, {
  "value": "6.2 Vector Store Service",
  "id": "62-vector-store-service",
  "level": 3
}, {
  "value": "6.3 Vector Store Controller",
  "id": "63-vector-store-controller",
  "level": 3
}, {
  "value": "7. Embedding Models",
  "id": "7-embedding-models",
  "level": 2
}, {
  "value": "7.1 Embedding Controller",
  "id": "71-embedding-controller",
  "level": 3
}, {
  "value": "8. Document APIs",
  "id": "8-document-apis",
  "level": 2
}, {
  "value": "9. RAG Pipeline",
  "id": "9-rag-pipeline",
  "level": 2
}, {
  "value": "9.1 RAG Controller",
  "id": "91-rag-controller",
  "level": 3
}, {
  "value": "10. Prompt Templates",
  "id": "10-prompt-templates",
  "level": 2
}, {
  "value": "10.1 Prompt Template Controller",
  "id": "101-prompt-template-controller",
  "level": 3
}, {
  "value": "11. Multi-Agent Orchestration",
  "id": "11-multi-agent-orchestration",
  "level": 2
}, {
  "value": "11.1 Agent Controller",
  "id": "111-agent-controller",
  "level": 3
}, {
  "value": "12. Advisors",
  "id": "12-advisors",
  "level": 2
}, {
  "value": "12.1 Advisor Controller",
  "id": "121-advisor-controller",
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
        id: "spring-ai",
        children: "Spring AI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/46-r2dbc",
          children: "R2DBC & Reactive Data Access"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/48-graphql",
          children: "GraphQL"
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
        href: "../../assets/images/lessons/java/47-spring-ai/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/47-spring-ai/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/47-spring-ai/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/47-spring-ai/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/47-spring-ai/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/47-spring-ai/visual-explanation.png",
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
        children: "Configure Spring AI with OpenAI, Anthropic, and Ollama providers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ChatClient for synchronous, streaming, and multi-turn conversations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement structured output extraction using BeanOutputConverter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and register tool callbacks with the @Tool annotation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure and query vector stores (PGVector, Redis, Chroma)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete RAG pipeline from document ingestion to LLM augmentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use embedding models and Document APIs for vector search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design prompt templates for reusable AI interactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orchestrate multi-agent workflows with supervisor and routing patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply advisors for context-aware question answering and chat memory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-spring-ai-overview",
      children: "1. Spring AI Overview"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/47-spring-ai.png",
        alt: "Spring AI - LLM Integration, RAG, Vector Stores"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring AI is a framework that brings AI capabilities to Spring Boot applications. It provides a consistent abstraction over LLM providers, vector databases, document processing, and RAG pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-maven-dependencies",
      children: "1.1 Maven Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.4.0</version>\n        <relativePath/>\n    </parent>\n    <groupId>com.aiengineering</groupId>\n    <artifactId>spring-ai-course</artifactId>\n    <version>1.0.0</version>\n    <name>spring-ai-course</name>\n\n    <properties>\n        <java.version>21</java.version>\n        <spring-ai.version>1.0.0-M5</spring-ai.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-openai-spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-anthropic-spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-ollama-spring-boot-starter</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-pgvector-store-spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-redis-store-spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-chroma-store-spring-boot-starter</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-tika-document-reader</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.ai</groupId>\n            <artifactId>spring-ai-pdf-document-reader</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.ai</groupId>\n                <artifactId>spring-ai-bom</artifactId>\n                <version>${spring-ai.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-application-properties",
      children: "1.2 Application Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\n\n> **Previous:** [R2DBC &amp; Reactive Data Access](./46-r2dbc.md) | **Next:** [GraphQL](./48-graphql.md)\nspring:\n  application:\n    name: spring-ai-course\n\n  ai:\n    openai:\n      api-key: ${OPENAI_API_KEY}\n      chat:\n        options:\n          model: gpt-4o\n          temperature: 0.7\n          max-tokens: 2000\n      embedding:\n        options:\n          model: text-embedding-3-small\n\n    anthropic:\n      api-key: ${ANTHROPIC_API_KEY}\n      chat:\n        options:\n          model: claude-3-5-sonnet-20241022\n          temperature: 0.5\n          max-tokens: 4096\n\n    ollama:\n      base-url: http://localhost:11434\n      chat:\n        options:\n          model: llama3.2\n          temperature: 0.8\n      embedding:\n        options:\n          model: nomic-embed-text\n\n    vectorstore:\n      pgvector:\n        index-type: HNSW\n        distance-type: COSINE_DISTANCE\n        dimension: 1536\n\n  datasource:\n    url: jdbc:postgresql://localhost:5432/spring_ai\n    username: postgres\n    password: postgres\n    driver-class-name: org.postgresql.Driver\n\n  jpa:\n    hibernate:\n      ddl-auto: update\n    show-sql: false\n    properties:\n      hibernate:\n        format_sql: true\n\nserver:\n  port: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-chatclient--prompt-call-stream-messages",
      children: "2. ChatClient → Prompt, Call, Stream, Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChatClient is the central abstraction for interacting with LLMs. It supports synchronous calls, streaming responses, and multi-message conversations with system, user, and assistant message roles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-basic-chatclient-configuration",
      children: "2.1 Basic ChatClient Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration(proxyBeanMethods = false)\npublic class ChatClientConfig {\n\n    @Bean\n    ChatClient chatClient(ChatClient.Builder builder) {\n        return builder\n            .defaultSystem(\"You are a helpful Java programming assistant. \" +\n                \"Provide concise, accurate answers with code examples when relevant.\")\n            .defaultOptions(ops -> ops\n                .temperature(0.7)\n                .maxTokens(2000))\n            .build();\n    }\n\n    @Bean\n    ChatClient creativeChatClient(ChatClient.Builder builder) {\n        return builder\n            .defaultSystem(\"You are a creative brainstorming partner. \" +\n                \"Generate innovative and unexpected ideas.\")\n            .defaultOptions(ops -> ops\n                .temperature(1.2)\n                .maxTokens(3000))\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-chatservice--sync-stream-multi-turn",
      children: "2.2 ChatService → Sync, Stream, Multi-Turn"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.model.Conversation;\nimport com.aiengineering.course.repository.ConversationRepository;\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.ai.chat.messages.AssistantMessage;\nimport org.springframework.ai.chat.messages.SystemMessage;\nimport org.springframework.ai.chat.messages.UserMessage;\nimport org.springframework.ai.chat.model.ChatResponse;\nimport org.springframework.ai.chat.prompt.Prompt;\nimport org.springframework.stereotype.Service;\nimport reactor.core.publisher.Flux;\n\nimport java.time.LocalDateTime;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.UUID;\n\n@Service\npublic class ChatService {\n\n    private final ChatClient chatClient;\n    private final ChatClient creativeChatClient;\n    private final ConversationRepository conversationRepository;\n\n    public ChatService(\n            ChatClient chatClient,\n            ChatClient creativeChatClient,\n            ConversationRepository conversationRepository) {\n        this.chatClient = chatClient;\n        this.creativeChatClient = creativeChatClient;\n        this.conversationRepository = conversationRepository;\n    }\n\n    public String ask(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .call()\n            .content();\n    }\n\n    public ChatResponse askWithResponse(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .call()\n            .chatResponse();\n    }\n\n    public Flux<String> askStream(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .stream()\n            .content();\n    }\n\n    public Flux<ChatResponse> askStreamWithMetadata(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .stream()\n            .chatResponse();\n    }\n\n    public String askWithSystemContext(String question, String systemContext) {\n        return chatClient.prompt()\n            .system(spec -> spec.text(systemContext))\n            .user(question)\n            .call()\n            .content();\n    }\n\n    public String askWithThinking(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .system(\"Think step by step before answering. Show your reasoning \" +\n                \"in <thinking> tags, then provide the final answer.\")\n            .call()\n            .content();\n    }\n\n    public String multiTurnConversation(List<String> messages) {\n        var prompt = ChatClient.builder(chatClient.getChatModel()).build();\n\n        var promptBuilder = prompt.prompt();\n\n        for (int i = 0; i < messages.size(); i++) {\n            if (i % 2 == 0) {\n                promptBuilder.user(messages.get(i));\n            } else {\n                promptBuilder.assistant(messages.get(i));\n            }\n        }\n\n        return promptBuilder.call().content();\n    }\n\n    public Conversation startConversation(String initialMessage) {\n        Conversation conversation = new Conversation();\n        conversation.setId(UUID.randomUUID().toString());\n        conversation.setTitle(initialMessage.length() > 50\n            ? initialMessage.substring(0, 50) + \"...\"\n            : initialMessage);\n        conversation.setCreatedAt(LocalDateTime.now());\n        conversation.setMessages(new ArrayList<>());\n\n        conversation.getMessages().add(new Conversation.Message(\"user\", initialMessage));\n\n        String response = ask(initialMessage);\n        conversation.getMessages().add(new Conversation.Message(\"assistant\", response));\n\n        return conversationRepository.save(conversation);\n    }\n\n    public Conversation continueConversation(String conversationId, String message) {\n        Conversation conversation = conversationRepository.findById(conversationId)\n            .orElseThrow(() -> new IllegalArgumentException(\n                \"Conversation not found: \" + conversationId));\n\n        conversation.getMessages().add(new Conversation.Message(\"user\", message));\n\n        StringBuilder contextBuilder = new StringBuilder();\n        contextBuilder.append(\"Continue the following conversation.\\n\\n\");\n\n        for (Conversation.Message msg : conversation.getMessages()) {\n            contextBuilder.append(msg.getRole()).append(\": \").append(msg.getContent()).append(\"\\n\");\n        }\n\n        String response = askWithSystemContext(\n            message,\n            contextBuilder.toString()\n        );\n\n        conversation.getMessages().add(new Conversation.Message(\"assistant\", response));\n        conversation.setUpdatedAt(LocalDateTime.now());\n\n        return conversationRepository.save(conversation);\n    }\n\n    public String askWithParameters(String question, String tone, int maxLength) {\n        return chatClient.prompt()\n            .user(question)\n            .system(\"Answer in a %s tone. Keep responses under %d characters.\", tone, maxLength)\n            .options(ops -> ops\n                .temperature(tone.equals(\"creative\") ? 1.0 : 0.3)\n                .maxTokens(maxLength / 4))\n            .call()\n            .content();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-conversation-model-and-repository",
      children: "2.3 Conversation Model and Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport jakarta.persistence.*;\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@Entity\n@Table(name = \"conversations\")\npublic class Conversation {\n\n    @Id\n    private String id;\n\n    @Column(nullable = false)\n    private String title;\n\n    @Column(name = \"created_at\", nullable = false)\n    private LocalDateTime createdAt;\n\n    @Column(name = \"updated_at\")\n    private LocalDateTime updatedAt;\n\n    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)\n    @JoinColumn(name = \"conversation_id\")\n    @OrderColumn(name = \"message_order\")\n    private List<Message> messages;\n\n    @Column(name = \"model_used\")\n    private String modelUsed;\n\n    @Column(name = \"token_count\")\n    private int tokenCount;\n\n    @Column(length = 1000)\n    private String tags;\n\n    public String getId() { return id; }\n    public void setId(String id) { this.id = id; }\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\n    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }\n    public List<Message> getMessages() { return messages; }\n    public void setMessages(List<Message> messages) { this.messages = messages; }\n    public String getModelUsed() { return modelUsed; }\n    public void setModelUsed(String modelUsed) { this.modelUsed = modelUsed; }\n    public int getTokenCount() { return tokenCount; }\n    public void setTokenCount(int tokenCount) { this.tokenCount = tokenCount; }\n    public String getTags() { return tags; }\n    public void setTags(String tags) { this.tags = tags; }\n\n    @Entity\n    @Table(name = \"conversation_messages\")\n    public static class Message {\n\n        @Id\n        @GeneratedValue(strategy = GenerationType.IDENTITY)\n        private Long id;\n\n        @Column(nullable = false)\n        private String role;\n\n        @Column(nullable = false, length = 10000)\n        private String content;\n\n        @Column(name = \"token_count\")\n        private int tokenCount;\n\n        @Column(name = \"created_at\")\n        private LocalDateTime createdAt;\n\n        public Message() {}\n\n        public Message(String role, String content) {\n            this.role = role;\n            this.content = content;\n            this.createdAt = LocalDateTime.now();\n        }\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getRole() { return role; }\n        public void setRole(String role) { this.role = role; }\n        public String getContent() { return content; }\n        public void setContent(String content) { this.content = content; }\n        public int getTokenCount() { return tokenCount; }\n        public void setTokenCount(int tokenCount) { this.tokenCount = tokenCount; }\n        public LocalDateTime getCreatedAt() { return createdAt; }\n        public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.repository;\n\nimport com.aiengineering.course.model.Conversation;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\nimport org.springframework.stereotype.Repository;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@Repository\npublic interface ConversationRepository extends JpaRepository<Conversation, String> {\n\n    List<Conversation> findByTitleContainingIgnoreCase(String title);\n\n    List<Conversation> findByCreatedAtAfter(LocalDateTime after);\n\n    @Query(\"SELECT c FROM Conversation c ORDER BY c.createdAt DESC\")\n    List<Conversation> findAllOrderByNewest();\n\n    @Query(\"SELECT COUNT(c) FROM Conversation c WHERE c.createdAt >= :since\")\n    long countConversationsSince(@Param(\"since\") LocalDateTime since);\n\n    @Query(\"SELECT c FROM Conversation c WHERE SIZE(c.messages) >= :minMessages\")\n    List<Conversation> findByMinimumMessageCount(@Param(\"minMessages\") int minMessages);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-chatmodel-configuration",
      children: "3. ChatModel Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChatModel is the lower-level abstraction for configuring model parameters, retry policies, and provider-specific options."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.chat.model.ChatModel;\nimport org.springframework.ai.model.Media;\nimport org.springframework.ai.model.function.FunctionCallback;\nimport org.springframework.ai.openai.OpenAiChatModel;\nimport org.springframework.ai.openai.OpenAiChatOptions;\nimport org.springframework.ai.openai.api.OpenAiApi;\nimport org.springframework.ai.retry.RetryUtils;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.retry.support.RetryTemplate;\nimport org.springframework.util.MimeType;\n\nimport java.time.Duration;\nimport java.util.List;\nimport java.util.Map;\n\n@Configuration(proxyBeanMethods = false)\npublic class ChatModelConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(ChatModelConfig.class);\n\n    @Value(\"${spring.ai.openai.api-key}\")\n    private String openAiApiKey;\n\n    @Bean\n    public OpenAiApi openAiApi() {\n        return OpenAiApi.builder()\n            .apiKey(openAiApiKey)\n            .baseUrl(\"https://api.openai.com\")\n            .build();\n    }\n\n    @Bean\n    public ChatModel customChatModel(OpenAiApi openAiApi) {\n        var retryTemplate = RetryUtils.DEFAULT_RETRY_TEMPLATE;\n\n        var options = OpenAiChatOptions.builder()\n            .model(\"gpt-4o\")\n            .temperature(0.5)\n            .maxTokens(4096)\n            .frequencyPenalty(0.1)\n            .presencePenalty(0.1)\n            .topP(0.95)\n            .stop(List.of(\"```end\"))\n            .user(\"spring-ai-course-user\")\n            .seed(42)\n            .responseFormat(Map.of(\"type\", \"text\"))\n            .build();\n\n        return OpenAiChatModel.builder()\n            .openAiApi(openAiApi)\n            .defaultOptions(options)\n            .retryTemplate(retryTemplate)\n            .build();\n    }\n\n    @Bean\n    public ChatModel jsonChatModel(OpenAiApi openAiApi) {\n        var options = OpenAiChatOptions.builder()\n            .model(\"gpt-4o\")\n            .temperature(0.1)\n            .maxTokens(4096)\n            .responseFormat(Map.of(\"type\", \"json_object\"))\n            .build();\n\n        return OpenAiChatModel.builder()\n            .openAiApi(openAiApi)\n            .defaultOptions(options)\n            .build();\n    }\n\n    @Bean\n    public RetryTemplate aiRetryTemplate() {\n        return RetryUtils.builder()\n            .initialInterval(Duration.ofSeconds(1))\n            .maxInterval(Duration.ofSeconds(30))\n            .maxAttempts(5)\n            .backoffMultiplier(2.0)\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-provider-factory",
      children: "3.1 Provider Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.springframework.ai.chat.model.ChatModel;\nimport org.springframework.ai.anthropic.AnthropicChatModel;\nimport org.springframework.ai.ollama.OllamaChatModel;\nimport org.springframework.ai.openai.OpenAiChatModel;\nimport org.springframework.stereotype.Service;\n\nimport java.util.Map;\n\n@Service\npublic class AiProviderService {\n\n    private final Map<String, ChatModel> chatModels;\n\n    public AiProviderService(\n            OpenAiChatModel openAiChatModel,\n            AnthropicChatModel anthropicChatModel,\n            OllamaChatModel ollamaChatModel) {\n        this.chatModels = Map.of(\n            \"openai\", openAiChatModel,\n            \"anthropic\", anthropicChatModel,\n            \"ollama\", ollamaChatModel\n        );\n    }\n\n    public String chat(String provider, String message) {\n        ChatModel model = chatModels.get(provider);\n        if (model == null) {\n            throw new IllegalArgumentException(\"Unknown provider: \" + provider\n                + \". Available: \" + chatModels.keySet());\n        }\n        return model.call(message).getResult().getOutput().getContent();\n    }\n\n    public String chatWithOptions(String provider, String message,\n                                   double temperature, int maxTokens) {\n        ChatModel model = chatModels.get(provider);\n        if (model == null) {\n            throw new IllegalArgumentException(\"Unknown provider: \" + provider);\n        }\n\n        var response = model.call(new org.springframework.ai.chat.prompt.Prompt(\n            message,\n            org.springframework.ai.chat.prompt.ChatOptionsBuilder.builder()\n                .withTemperature(temperature)\n                .withMaxTokens(maxTokens)\n                .build()\n        ));\n\n        return response.getResult().getOutput().getContent();\n    }\n\n    public Map<String, String> getAvailableProviders() {\n        return Map.of(\n            \"openai\", \"GPT-4o\",\n            \"anthropic\", \"Claude 3.5 Sonnet\",\n            \"ollama\", \"Llama 3.2 (local)\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-structured-output-with-beanoutputconverter",
      children: "4. Structured Output with BeanOutputConverter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extract structured data from LLM responses using type-safe Java objects."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\npublic record CodeReview(\n    String fileName,\n    int totalLines,\n    int totalIssues,\n    int criticalIssues,\n    int majorIssues,\n    int minorIssues,\n    double overallScore,\n    List<Issue> issues,\n    String summary,\n    LocalDateTime reviewedAt\n) {\n    public record Issue(\n        int line,\n        IssueSeverity severity,\n        IssueCategory category,\n        String message,\n        String suggestion\n    ) {}\n\n    public enum IssueSeverity {\n        CRITICAL, MAJOR, MINOR\n    }\n\n    public enum IssueCategory {\n        SECURITY, PERFORMANCE, CODE_STYLE, BUG, DESIGN, TESTING\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport java.util.List;\n\npublic record MeetingMinutes(\n    String title,\n    String date,\n    List<String> attendees,\n    List<String> absentees,\n    List<AgendaItem> agenda,\n    List<Decision> decisions,\n    List<ActionItem> actionItems,\n    String nextMeetingDate\n) {\n    public record AgendaItem(\n        String topic,\n        String presenter,\n        String discussion,\n        String outcome\n    ) {}\n\n    public record Decision(\n        String description,\n        String rationale,\n        boolean unanimous\n    ) {}\n\n    public record ActionItem(\n        String task,\n        String assignee,\n        String dueDate,\n        String priority\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.model.CodeReview;\nimport com.aiengineering.course.model.MeetingMinutes;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.ai.converter.BeanOutputConverter;\nimport org.springframework.ai.converter.MapOutputConverter;\nimport org.springframework.ai.converter.ListOutputConverter;\nimport org.springframework.core.ParameterizedTypeReference;\nimport org.springframework.core.convert.support.DefaultConversionService;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class StructuredOutputService {\n\n    private static final Logger log = LoggerFactory.getLogger(StructuredOutputService.class);\n\n    private final ChatClient chatClient;\n\n    public StructuredOutputService(ChatClient chatClient) {\n        this.chatClient = chatClient;\n    }\n\n    public CodeReview reviewCode(String codeSnippet) {\n        BeanOutputConverter<CodeReview> converter =\n            new BeanOutputConverter<>(CodeReview.class);\n\n        String response = chatClient.prompt()\n            .user(\"Review this Java code and return structured results:\\n\\n\" + codeSnippet)\n            .system(\"You are an expert Java code reviewer. \" +\n                \"Analyze the code for bugs, security issues, performance problems, \" +\n                \"code style violations, and design issues.\\n\\n\" +\n                converter.getFormatInstruction())\n            .call()\n            .content();\n\n        return converter.convert(response);\n    }\n\n    public MeetingMinutes extractMeetingMinutes(String transcript) {\n        BeanOutputConverter<MeetingMinutes> converter =\n            new BeanOutputConverter<>(MeetingMinutes.class);\n\n        String response = chatClient.prompt()\n            .user(\"Extract meeting minutes from this transcript:\\n\\n\" + transcript)\n            .system(\"Extract structured meeting minutes from the transcript.\\n\\n\"\n                + converter.getFormatInstruction())\n            .call()\n            .content();\n\n        return converter.convert(response);\n    }\n\n    public List<String> extractKeywords(String text) {\n        ListOutputConverter converter =\n            new ListOutputConverter(DefaultConversionService.getSharedInstance());\n\n        String response = chatClient.prompt()\n            .user(\"Extract the top 10 keywords from this text:\\n\\n\" + text)\n            .system(\"Return a comma-separated list of keywords.\\n\\n\"\n                + converter.getFormatInstruction())\n            .call()\n            .content();\n\n        return converter.convert(response);\n    }\n\n    public Map<String, Object> extractEntities(String text) {\n        MapOutputConverter converter = new MapOutputConverter();\n\n        String response = chatClient.prompt()\n            .user(\"Extract all entities (people, organizations, locations, dates) \" +\n                \"from this text:\\n\\n\" + text)\n            .system(\"Return entities as a JSON map with entity types as keys \" +\n                \"and lists as values.\\n\\n\" + converter.getFormatInstruction())\n            .call()\n            .content();\n\n        return converter.convert(response);\n    }\n\n    public <T> T extractAs(String text, Class<T> type) {\n        BeanOutputConverter<T> converter = new BeanOutputConverter<>(type);\n\n        String response = chatClient.prompt()\n            .user(\"Analyze and extract structured data:\\n\\n\" + text)\n            .system(\"Return your analysis in this format:\\n\\n\"\n                + converter.getFormatInstruction())\n            .call()\n            .content();\n\n        return converter.convert(response);\n    }\n\n    public List<String> analyzeSentiment(String text) {\n        var converter = new BeanOutputConverter<>(\n            new ParameterizedTypeReference<List<String>>() {});\n\n        String response = chatClient.prompt()\n            .user(\"Analyze the sentiment of each paragraph:\\n\\n\" + text)\n            .system(\"Return a JSON array of sentiment labels \" +\n                \"('positive', 'negative', 'neutral') per paragraph.\\n\\n\"\n                + converter.getFormatInstruction())\n            .call()\n            .content();\n\n        return converter.convert(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-generic-structured-output-controller",
      children: "4.1 Generic Structured Output Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.CodeReview;\nimport com.aiengineering.course.model.MeetingMinutes;\nimport com.aiengineering.course.service.StructuredOutputService;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/extract\")\npublic class StructuredOutputController {\n\n    private final StructuredOutputService service;\n\n    public StructuredOutputController(StructuredOutputService service) {\n        this.service = service;\n    }\n\n    @PostMapping(\"/code-review\")\n    public ResponseEntity<CodeReview> reviewCode(@RequestBody String code) {\n        CodeReview review = service.reviewCode(code);\n        return ResponseEntity.ok(review);\n    }\n\n    @PostMapping(\"/meeting-minutes\")\n    public ResponseEntity<MeetingMinutes> extractMeetingMinutes(\n            @RequestBody String transcript) {\n        MeetingMinutes minutes = service.extractMeetingMinutes(transcript);\n        return ResponseEntity.ok(minutes);\n    }\n\n    @PostMapping(\"/keywords\")\n    public ResponseEntity<List<String>> extractKeywords(@RequestBody String text) {\n        List<String> keywords = service.extractKeywords(text);\n        return ResponseEntity.ok(keywords);\n    }\n\n    @PostMapping(\"/entities\")\n    public ResponseEntity<Map<String, Object>> extractEntities(@RequestBody String text) {\n        Map<String, Object> entities = service.extractEntities(text);\n        return ResponseEntity.ok(entities);\n    }\n\n    @PostMapping(\"/sentiment\")\n    public ResponseEntity<List<String>> analyzeSentiment(@RequestBody String text) {\n        List<String> sentiment = service.analyzeSentiment(text);\n        return ResponseEntity.ok(sentiment);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tool-calling",
      children: "5. Tool Calling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tools allow LLMs to call external functions. Spring AI provides the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Tool"
      }), " annotation for declarative tool registration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-tool-definitions",
      children: "5.1 Tool Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.tool;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.tool.annotation.Tool;\nimport org.springframework.stereotype.Component;\n\nimport java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\nimport java.util.List;\nimport java.util.Map;\n\n@Component\npublic class DateTimeTools {\n\n    private static final Logger log = LoggerFactory.getLogger(DateTimeTools.class);\n\n    @Tool(description = \"Get the current date and time\")\n    public String getCurrentDateTime() {\n        log.info(\"Tool called: getCurrentDateTime\");\n        return LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);\n    }\n\n    @Tool(description = \"Get the current date\")\n    public String getCurrentDate() {\n        log.info(\"Tool called: getCurrentDate\");\n        return LocalDate.now().format(DateTimeFormatter.ISO_LOCAL_DATE);\n    }\n\n    @Tool(description = \"Calculate the difference in days between two dates\")\n    public long daysBetween(String startDate, String endDate) {\n        log.info(\"Tool called: daysBetween({}, {})\", startDate, endDate);\n        LocalDate start = LocalDate.parse(startDate);\n        LocalDate end = LocalDate.parse(endDate);\n        return java.time.temporal.ChronoUnit.DAYS.between(start, end);\n    }\n\n    @Tool(description = \"Check if a given year is a leap year\")\n    public boolean isLeapYear(int year) {\n        log.info(\"Tool called: isLeapYear({})\", year);\n        return java.time.Year.of(year).isLeap();\n    }\n\n    @Tool(description = \"Get the day of the week for a date\")\n    public String getDayOfWeek(String date) {\n        log.info(\"Tool called: getDayOfWeek({})\", date);\n        LocalDate parsed = LocalDate.parse(date);\n        return parsed.getDayOfWeek().toString();\n    }\n\n    @Tool(description = \"Add days to a date and return the new date\")\n    public String addDays(String date, long days) {\n        log.info(\"Tool called: addDays({}, {})\", date, days);\n        LocalDate parsed = LocalDate.parse(date);\n        return parsed.plusDays(days).format(DateTimeFormatter.ISO_LOCAL_DATE);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.tool;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.tool.annotation.Tool;\nimport org.springframework.stereotype.Component;\n\nimport java.util.*;\nimport java.util.stream.Collectors;\n\n@Component\npublic class MathTools {\n\n    private static final Logger log = LoggerFactory.getLogger(MathTools.class);\n\n    @Tool(description = \"Calculate the nth Fibonacci number\")\n    public long fibonacci(int n) {\n        log.info(\"Tool called: fibonacci({})\", n);\n        if (n <= 1) return n;\n        long a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            long temp = a + b;\n            a = b;\n            b = temp;\n        }\n        return b;\n    }\n\n    @Tool(description = \"Check if a number is prime\")\n    public boolean isPrime(int n) {\n        log.info(\"Tool called: isPrime({})\", n);\n        if (n <= 1) return false;\n        if (n <= 3) return true;\n        if (n % 2 == 0 || n % 3 == 0) return false;\n        for (int i = 5; i * i <= n; i += 6) {\n            if (n % i == 0 || n % (i + 2) == 0) return false;\n        }\n        return true;\n    }\n\n    @Tool(description = \"Calculate the greatest common divisor of two numbers\")\n    public int gcd(int a, int b) {\n        log.info(\"Tool called: gcd({}, {})\", a, b);\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return a;\n    }\n\n    @Tool(description = \"Calculate the least common multiple of two numbers\")\n    public long lcm(int a, int b) {\n        log.info(\"Tool called: lcm({}, {})\", a, b);\n        return (long) a * b / gcd(a, b);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.tool;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.tool.annotation.Tool;\nimport org.springframework.stereotype.Component;\n\nimport java.util.*;\nimport java.util.stream.Collectors;\n\n@Component\npublic class DataTools {\n\n    private static final Logger log = LoggerFactory.getLogger(DataTools.class);\n\n    private final Map<String, List<Map<String, Object>>> inMemoryDatabase = new HashMap<>();\n\n    @Tool(description = \"Store data records under a given collection name\")\n    public void storeData(String collection, String jsonData) {\n        log.info(\"Tool called: storeData({})\", collection);\n        inMemoryDatabase.computeIfAbsent(collection, k -> new ArrayList<>());\n\n        @SuppressWarnings(\"unchecked\")\n        Map<String, Object> record = parseJson(jsonData);\n        inMemoryDatabase.get(collection).add(record);\n    }\n\n    @Tool(description = \"Query stored data by collection and optional field filters\")\n    public List<Map<String, Object>> queryData(String collection, String fieldFilter) {\n        log.info(\"Tool called: queryData({}, {})\", collection, fieldFilter);\n        List<Map<String, Object>> data = inMemoryDatabase.getOrDefault(collection, List.of());\n\n        if (fieldFilter == null || fieldFilter.isBlank() || fieldFilter.equals(\"*\")) {\n            return data;\n        }\n\n        return data.stream()\n            .filter(record -> matchesFilter(record, fieldFilter))\n            .collect(Collectors.toList());\n    }\n\n    @Tool(description = \"Get summary statistics for a collection\")\n    public Map<String, Object> getCollectionStats(String collection) {\n        log.info(\"Tool called: getCollectionStats({})\", collection);\n        List<Map<String, Object>> data = inMemoryDatabase.getOrDefault(collection, List.of());\n\n        return Map.of(\n            \"collection\", collection,\n            \"recordCount\", data.size(),\n            \"fields\", data.stream()\n                .flatMap(m -> m.keySet().stream())\n                .distinct()\n                .collect(Collectors.toList())\n        );\n    }\n\n    @Tool(description = \"Sort data in a collection by a field\")\n    public List<Map<String, Object>> sortData(String collection, String sortField,\n                                               boolean ascending) {\n        log.info(\"Tool called: sortData({}, {}, {})\", collection, sortField, ascending);\n        List<Map<String, Object>> data = new ArrayList<>(\n            inMemoryDatabase.getOrDefault(collection, List.of()));\n\n        data.sort((a, b) -> {\n            Comparable<Object> valA = (Comparable<Object>) a.getOrDefault(sortField, \"\");\n            Comparable<Object> valB = (Comparable<Object>) b.getOrDefault(sortField, \"\");\n            int cmp = valA.compareTo(valB);\n            return ascending ? cmp : -cmp;\n        });\n\n        return data;\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    private Map<String, Object> parseJson(String json) {\n        Map<String, Object> result = new HashMap<>();\n        String inner = json.trim();\n        if (inner.startsWith(\"{\") && inner.endsWith(\"}\")) {\n            inner = inner.substring(1, inner.length() - 1).trim();\n        }\n        for (String pair : inner.split(\",(?=(?:[^\\\"]*\\\"[^\\\"]*\\\")*[^\\\"]*$)\")) {\n            String[] kv = pair.split(\":(?=(?:[^\\\"]*\\\"[^\\\"]*\\\")*[^\\\"]*$)\", 2);\n            if (kv.length == 2) {\n                String key = kv[0].trim().replaceAll(\"^\\\"|\\\"$\", \"\");\n                String value = kv[1].trim().replaceAll(\"^\\\"|\\\"$\", \"\");\n                result.put(key, value);\n            }\n        }\n        return result;\n    }\n\n    private boolean matchesFilter(Map<String, Object> record, String filter) {\n        String[] parts = filter.split(\"=\", 2);\n        if (parts.length != 2) return true;\n        String field = parts[0].trim();\n        String value = parts[1].trim().replaceAll(\"^\\\"|\\\"$\", \"\");\n        return value.equals(String.valueOf(record.get(field)));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-tool-execution-service",
      children: "5.2 Tool Execution Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.tool.DataTools;\nimport com.aiengineering.course.tool.DateTimeTools;\nimport com.aiengineering.course.tool.MathTools;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class ToolService {\n\n    private static final Logger log = LoggerFactory.getLogger(ToolService.class);\n\n    private final ChatClient chatClient;\n\n    public ToolService(ChatClient chatClient) {\n        this.chatClient = chatClient;\n    }\n\n    public String askWithDateTimeTools(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .tools(new DateTimeTools())\n            .call()\n            .content();\n    }\n\n    public String askWithMathTools(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .tools(new MathTools())\n            .call()\n            .content();\n    }\n\n    public String askWithAllTools(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .tools(new DateTimeTools(), new MathTools(), new DataTools())\n            .call()\n            .content();\n    }\n\n    public String askWithToolContext(String question, String toolContext) {\n        return chatClient.prompt()\n            .user(question)\n            .system(toolContext)\n            .tools(new DateTimeTools())\n            .call()\n            .content();\n    }\n\n    public String askWithToolAndStream(String question) {\n        var response = chatClient.prompt()\n            .user(question)\n            .tools(new MathTools())\n            .call()\n            .content();\n        return response;\n    }\n\n    public Map<String, Object> getToolExecutionPlan(String question) {\n        String plan = chatClient.prompt()\n            .user(\"Create an execution plan for this task. \" +\n                \"List which tools to call and in what order:\\n\\n\" + question)\n            .tools(new DateTimeTools(), new MathTools(), new DataTools())\n            .call()\n            .content();\n\n        return Map.of(\n            \"question\", question,\n            \"plan\", plan\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-tool-controller",
      children: "5.3 Tool Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.ToolService;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/tools\")\npublic class ToolController {\n\n    private final ToolService toolService;\n\n    public ToolController(ToolService toolService) {\n        this.toolService = toolService;\n    }\n\n    @PostMapping(\"/ask\")\n    public ResponseEntity<Map<String, String>> askWithTools(@RequestBody Map<String, String> request) {\n        String question = request.get(\"question\");\n        String toolSet = request.getOrDefault(\"tools\", \"all\");\n\n        String answer = switch (toolSet) {\n            case \"datetime\" -> toolService.askWithDateTimeTools(question);\n            case \"math\" -> toolService.askWithMathTools(question);\n            case \"all\" -> toolService.askWithAllTools(question);\n            default -> throw new IllegalArgumentException(\"Unknown tool set: \" + toolSet);\n        };\n\n        return ResponseEntity.ok(Map.of(\"answer\", answer));\n    }\n\n    @PostMapping(\"/plan\")\n    public ResponseEntity<Map<String, Object>> plan(@RequestBody Map<String, String> request) {\n        String question = request.get(\"question\");\n        Map<String, Object> plan = toolService.getToolExecutionPlan(question);\n        return ResponseEntity.ok(plan);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-vector-stores",
      children: "6. Vector Stores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vector stores enable semantic search by storing and querying embeddings. Spring AI supports PGVector, Redis, Chroma, and more."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-vector-store-configuration",
      children: "6.1 Vector Store Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.ai.embedding.EmbeddingModel;\nimport org.springframework.ai.vectorstore.PgVectorStore;\nimport org.springframework.ai.vectorstore.RedisVectorStore;\nimport org.springframework.ai.vectorstore.VectorStore;\nimport org.springframework.ai.vectorstore.ChromaVectorStore;\nimport org.springframework.ai.vectorstore.filter.FilterExpressionConverter;\nimport org.springframework.ai.vectorstore.filter.converter.PgVectorFilterExpressionConverter;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\nimport org.springframework.jdbc.core.JdbcTemplate;\n\nimport javax.sql.DataSource;\n\n@Configuration(proxyBeanMethods = false)\npublic class VectorStoreConfig {\n\n    @Bean\n    @Primary\n    public PgVectorStore pgVectorStore(EmbeddingModel embeddingModel, JdbcTemplate jdbcTemplate) {\n        return PgVectorStore.builder(jdbcTemplate, embeddingModel)\n            .vectorTableName(\"knowledge_vectors\")\n            .schemaName(\"public\")\n            .indexType(PgVectorStore.PgIndexType.HNSW)\n            .distanceType(PgVectorStore.PgDistanceType.COSINE_DISTANCE)\n            .dimensions(1536)\n            .maxDocumentBatchSize(100)\n            .removeExistingVectorStoreTable(false)\n            .initializeSchema(true)\n            .build();\n    }\n\n    @Bean\n    public VectorStore pgVectorStoreAlternative(EmbeddingModel embeddingModel,\n                                                  DataSource dataSource) {\n        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);\n        return PgVectorStore.builder(jdbcTemplate, embeddingModel)\n            .vectorTableName(\"documents\")\n            .dimensions(1536)\n            .initializeSchema(true)\n            .build();\n    }\n\n    @Bean\n    public FilterExpressionConverter pgFilterConverter() {\n        return new PgVectorFilterExpressionConverter();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-vector-store-service",
      children: "6.2 Vector Store Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.document.Document;\nimport org.springframework.ai.vectorstore.SearchRequest;\nimport org.springframework.ai.vectorstore.VectorStore;\nimport org.springframework.ai.vectorstore.filter.FilterExpressionBuilder;\nimport org.springframework.stereotype.Service;\n\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\n@Service\npublic class VectorStoreService {\n\n    private static final Logger log = LoggerFactory.getLogger(VectorStoreService.class);\n\n    private final VectorStore vectorStore;\n\n    public VectorStoreService(VectorStore vectorStore) {\n        this.vectorStore = vectorStore;\n    }\n\n    public void storeDocuments(List<Document> documents) {\n        log.info(\"Storing {} documents in vector store\", documents.size());\n        vectorStore.add(documents);\n    }\n\n    public void storeDocument(String content, Map<String, Object> metadata) {\n        Document document = new Document(content, metadata);\n        vectorStore.add(List.of(document));\n        log.info(\"Stored document with metadata: {}\", metadata);\n    }\n\n    public void storeDocumentWithId(String id, String content, Map<String, Object> metadata) {\n        Document document = new Document(id, content, metadata);\n        vectorStore.add(List.of(document));\n    }\n\n    public List<Document> similaritySearch(String query, int topK) {\n        SearchRequest request = SearchRequest.builder()\n            .query(query)\n            .topK(topK)\n            .similarityThreshold(0.5)\n            .build();\n\n        return vectorStore.similaritySearch(request);\n    }\n\n    public List<Document> similaritySearchWithFilter(String query, int topK,\n                                                      String filterExpression) {\n        SearchRequest request = SearchRequest.builder()\n            .query(query)\n            .topK(topK)\n            .similarityThreshold(0.6)\n            .filterExpression(filterExpression)\n            .build();\n\n        return vectorStore.similaritySearch(request);\n    }\n\n    public List<Document> searchByMetadata(String query, int topK,\n                                            String metadataKey, String metadataValue) {\n        var builder = new FilterExpressionBuilder();\n        var filter = builder.eq(metadataKey, metadataValue).build();\n\n        SearchRequest request = SearchRequest.builder()\n            .query(query)\n            .topK(topK)\n            .similarityThreshold(0.4)\n            .filterExpression(filter)\n            .build();\n\n        return vectorStore.similaritySearch(request);\n    }\n\n    public List<Document> searchByCategory(String query, String category) {\n        return searchByMetadata(query, 10, \"category\", category);\n    }\n\n    public void deleteDocument(String documentId) {\n        vectorStore.delete(List.of(documentId));\n        log.info(\"Deleted document: {}\", documentId);\n    }\n\n    public void deleteDocuments(List<String> documentIds) {\n        vectorStore.delete(documentIds);\n        log.info(\"Deleted {} documents\", documentIds.size());\n    }\n\n    public void updateDocument(String id, String newContent, Map<String, Object> metadata) {\n        vectorStore.delete(List.of(id));\n        Document updated = new Document(id, newContent, metadata);\n        vectorStore.add(List.of(updated));\n    }\n\n    public Map<String, Object> getSearchStats() {\n        return Map.of(\n            \"storeType\", vectorStore.getClass().getSimpleName(),\n            \"status\", \"connected\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-vector-store-controller",
      children: "6.3 Vector Store Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.VectorStoreService;\nimport org.springframework.ai.document.Document;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/vectorstore\")\npublic class VectorStoreController {\n\n    private final VectorStoreService vectorStoreService;\n\n    public VectorStoreController(VectorStoreService vectorStoreService) {\n        this.vectorStoreService = vectorStoreService;\n    }\n\n    @PostMapping(\"/documents\")\n    public ResponseEntity<Void> storeDocument(@RequestBody Map<String, Object> request) {\n        String content = (String) request.get(\"content\");\n        @SuppressWarnings(\"unchecked\")\n        Map<String, Object> metadata = (Map<String, Object>)\n            request.getOrDefault(\"metadata\", new java.util.HashMap<>());\n\n        if (request.containsKey(\"id\")) {\n            vectorStoreService.storeDocumentWithId(\n                (String) request.get(\"id\"), content, metadata);\n        } else {\n            vectorStoreService.storeDocument(content, metadata);\n        }\n\n        return ResponseEntity.ok().build();\n    }\n\n    @GetMapping(\"/search\")\n    public ResponseEntity<List<Map<String, Object>>> search(\n            @RequestParam String query,\n            @RequestParam(defaultValue = \"5\") int topK) {\n\n        List<Document> results = vectorStoreService.similaritySearch(query, topK);\n\n        List<Map<String, Object>> response = results.stream()\n            .map(doc -> Map.of(\n                \"id\", doc.getId(),\n                \"content\", doc.getText(),\n                \"metadata\", doc.getMetadata(),\n                \"score\", doc.getMetadata().getOrDefault(\"distance\", 0.0)\n            ))\n            .toList();\n\n        return ResponseEntity.ok(response);\n    }\n\n    @GetMapping(\"/search/filter\")\n    public ResponseEntity<List<Map<String, Object>>> searchWithFilter(\n            @RequestParam String query,\n            @RequestParam(defaultValue = \"5\") int topK,\n            @RequestParam(defaultValue = \"\") String filter) {\n\n        List<Document> results = vectorStoreService.similaritySearchWithFilter(\n            query, topK, filter);\n\n        List<Map<String, Object>> response = results.stream()\n            .map(doc -> Map.of(\n                \"id\", doc.getId(),\n                \"content\", doc.getText(),\n                \"metadata\", doc.getMetadata()\n            ))\n            .toList();\n\n        return ResponseEntity.ok(response);\n    }\n\n    @DeleteMapping(\"/documents/{id}\")\n    public ResponseEntity<Void> deleteDocument(@PathVariable String id) {\n        vectorStoreService.deleteDocument(id);\n        return ResponseEntity.noContent().build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-embedding-models",
      children: "7. Embedding Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embedding models convert text into vector representations for semantic search and similarity computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.embedding.EmbeddingModel;\nimport org.springframework.ai.embedding.EmbeddingOptionsBuilder;\nimport org.springframework.ai.embedding.EmbeddingRequest;\nimport org.springframework.ai.embedding.EmbeddingResponse;\nimport org.springframework.ai.embedding.TokenCountBatchingStrategy;\nimport org.springframework.stereotype.Service;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\n@Service\npublic class EmbeddingService {\n\n    private static final Logger log = LoggerFactory.getLogger(EmbeddingService.class);\n\n    private final EmbeddingModel embeddingModel;\n\n    public EmbeddingService(EmbeddingModel embeddingModel) {\n        this.embeddingModel = embeddingModel;\n    }\n\n    public float[] getEmbedding(String text) {\n        log.info(\"Generating embedding for text of length: {}\", text.length());\n        List<float[]> embeddings = getEmbeddings(List.of(text));\n        return embeddings.isEmpty() ? new float[0] : embeddings.getFirst();\n    }\n\n    public List<float[]> getEmbeddings(List<String> texts) {\n        log.info(\"Generating embeddings for {} texts\", texts.size());\n        EmbeddingRequest request = new EmbeddingRequest(\n            texts,\n            EmbeddingOptionsBuilder.builder()\n                .withModel(\"text-embedding-3-small\")\n                .build()\n        );\n\n        EmbeddingResponse response = embeddingModel.call(request);\n\n        return response.getResults().stream()\n            .map(result -> result.getOutput())\n            .toList();\n    }\n\n    public List<float[]> getEmbeddingsBatched(List<String> texts, int batchSize) {\n        log.info(\"Generating embeddings in batches of {}\", batchSize);\n        List<float[]> allEmbeddings = new ArrayList<>();\n\n        for (int i = 0; i < texts.size(); i += batchSize) {\n            int end = Math.min(i + batchSize, texts.size());\n            List<String> batch = texts.subList(i, end);\n            allEmbeddings.addAll(getEmbeddings(batch));\n        }\n\n        return allEmbeddings;\n    }\n\n    public double computeSimilarity(float[] embedding1, float[] embedding2) {\n        double dotProduct = 0.0;\n        double normA = 0.0;\n        double normB = 0.0;\n\n        for (int i = 0; i < embedding1.length; i++) {\n            dotProduct += embedding1[i] * embedding2[i];\n            normA += embedding1[i] * embedding1[i];\n            normB += embedding2[i] * embedding2[i];\n        }\n\n        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));\n    }\n\n    public List<Map<String, Object>> findMostSimilar(String query, List<String> candidates) {\n        float[] queryEmbedding = getEmbedding(query);\n\n        List<float[]> candidateEmbeddings = getEmbeddings(candidates);\n\n        List<Map<String, Object>> results = new ArrayList<>();\n        for (int i = 0; i < candidates.size(); i++) {\n            double similarity = computeSimilarity(queryEmbedding, candidateEmbeddings.get(i));\n\n            results.add(Map.of(\n                \"text\", candidates.get(i).length() > 100\n                    ? candidates.get(i).substring(0, 100) + \"...\"\n                    : candidates.get(i),\n                \"similarity\", similarity\n            ));\n        }\n\n        results.sort((a, b) -> Double.compare(\n            (Double) b.get(\"similarity\"), (Double) a.get(\"similarity\")));\n\n        return results;\n    }\n\n    public int getEmbeddingDimension() {\n        float[] test = getEmbedding(\"test\");\n        return test.length;\n    }\n\n    public Map<String, Object> getEmbeddingStats() {\n        float[] test = getEmbedding(\"Spring AI embedding model test\");\n        return Map.of(\n            \"model\", embeddingModel.getClass().getSimpleName(),\n            \"dimension\", test.length,\n            \"sample\", List.of(\n                test[0], test[1], test[2], test[3], test[4]\n            )\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-embedding-controller",
      children: "7.1 Embedding Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.EmbeddingService;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/embeddings\")\npublic class EmbeddingController {\n\n    private final EmbeddingService embeddingService;\n\n    public EmbeddingController(EmbeddingService embeddingService) {\n        this.embeddingService = embeddingService;\n    }\n\n    @PostMapping(\"/generate\")\n    public ResponseEntity<Map<String, Object>> generateEmbedding(@RequestBody Map<String, String> request) {\n        String text = request.get(\"text\");\n        float[] embedding = embeddingService.getEmbedding(text);\n\n        List<Float> embeddingList = new java.util.ArrayList<>();\n        for (float v : embedding) {\n            embeddingList.add(v);\n        }\n\n        return ResponseEntity.ok(Map.of(\n            \"dimension\", embedding.length,\n            \"embedding\", embeddingList.subList(0, Math.min(10, embedding.length)),\n            \"note\", \"Showing first 10 dimensions\"\n        ));\n    }\n\n    @PostMapping(\"/similarity\")\n    public ResponseEntity<List<Map<String, Object>>> computeSimilarity(\n            @RequestBody Map<String, Object> request) {\n        String query = (String) request.get(\"query\");\n        @SuppressWarnings(\"unchecked\")\n        List<String> candidates = (List<String>) request.get(\"candidates\");\n\n        List<Map<String, Object>> results = embeddingService.findMostSimilar(query, candidates);\n        return ResponseEntity.ok(results);\n    }\n\n    @GetMapping(\"/stats\")\n    public ResponseEntity<Map<String, Object>> getStats() {\n        return ResponseEntity.ok(embeddingService.getEmbeddingStats());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-document-apis",
      children: "8. Document APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring AI provides document processing APIs for reading, transforming, and writing documents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.document.Document;\nimport org.springframework.ai.document.DocumentReader;\nimport org.springframework.ai.document.DocumentTransformer;\nimport org.springframework.ai.document.DocumentWriter;\nimport org.springframework.ai.reader.tika.TikaDocumentReader;\nimport org.springframework.ai.reader.pdf.PagePdfDocumentReader;\nimport org.springframework.ai.reader.pdf.config.PdfDocumentReaderConfig;\nimport org.springframework.ai.transformer.splitter.TokenTextSplitter;\nimport org.springframework.ai.transformer.splitter.TextSplitter;\nimport org.springframework.ai.transformer.splitter.ContentFormatTransformer;\nimport org.springframework.core.io.FileSystemResource;\nimport org.springframework.core.io.Resource;\nimport org.springframework.stereotype.Service;\n\nimport java.io.File;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class DocumentService {\n\n    private static final Logger log = LoggerFactory.getLogger(DocumentService.class);\n\n    public List<Document> readPdf(String filePath) {\n        log.info(\"Reading PDF from: {}\", filePath);\n        Resource resource = new FileSystemResource(filePath);\n\n        PdfDocumentReaderConfig config = PdfDocumentReaderConfig.builder()\n            .pagesPerDocument(1)\n            .pageTopMargin(0)\n            .pageBottomMargin(0)\n            .build();\n\n        PagePdfDocumentReader reader = new PagePdfDocumentReader(resource, config);\n        return reader.get();\n    }\n\n    public List<Document> readWithTika(String filePath) {\n        log.info(\"Reading document with Tika from: {}\", filePath);\n        Resource resource = new FileSystemResource(filePath);\n        TikaDocumentReader reader = new TikaDocumentReader(resource);\n        return reader.get();\n    }\n\n    public List<Document> readWithTika(Resource resource) {\n        log.info(\"Reading document with Tika from resource: {}\", resource.getFilename());\n        TikaDocumentReader reader = new TikaDocumentReader(resource);\n        return reader.get();\n    }\n\n    public List<Document> readAndSplit(String filePath, int chunkSize, int overlap) {\n        List<Document> documents;\n        String lower = filePath.toLowerCase();\n\n        if (lower.endsWith(\".pdf\")) {\n            documents = readPdf(filePath);\n        } else if (lower.endsWith(\".txt\") || lower.endsWith(\".md\")\n            || lower.endsWith(\".html\") || lower.endsWith(\".docx\")) {\n            documents = readWithTika(filePath);\n        } else {\n            throw new IllegalArgumentException(\"Unsupported file type: \" + filePath);\n        }\n\n        TextSplitter splitter = new TokenTextSplitter(chunkSize, overlap, 5, 1000, true);\n        return splitter.split(documents);\n    }\n\n    public List<Document> splitDocuments(List<Document> documents, int chunkSize, int overlap) {\n        TextSplitter splitter = new TokenTextSplitter(chunkSize, overlap, 5, 1000, true);\n        return splitter.split(documents);\n    }\n\n    public List<Document> splitByTokenCount(List<Document> documents, int maxTokens) {\n        TokenTextSplitter splitter = new TokenTextSplitter(\n            maxTokens, maxTokens / 5, 5, 1000, true);\n        return splitter.split(documents);\n    }\n\n    public List<Document> addMetadata(List<Document> documents,\n                                       Map<String, Object> metadata) {\n        for (Document doc : documents) {\n            doc.getMetadata().putAll(metadata);\n        }\n        return documents;\n    }\n\n    public List<Document> addSourceMetadata(List<Document> documents, String source) {\n        return addMetadata(documents, Map.of(\n            \"source\", source,\n            \"indexed_at\", java.time.Instant.now().toString()\n        ));\n    }\n\n    public List<Document> transformContentFormat(List<Document> documents,\n                                                  String targetFormat) {\n        ContentFormatTransformer transformer = new ContentFormatTransformer(targetFormat);\n        return transformer.apply(documents);\n    }\n\n    public void writeDocuments(List<Document> documents, String outputPath) {\n        log.info(\"Writing {} documents to: {}\", documents.size(), outputPath);\n        DocumentWriter writer = new JsonDocumentWriter(outputPath);\n        writer.accept(documents);\n    }\n\n    public void writeDocumentsAsText(List<Document> documents, String outputPath) {\n        log.info(\"Writing documents as text to: {}\", outputPath);\n        DocumentWriter writer = new TextDocumentWriter(outputPath);\n        writer.accept(documents);\n    }\n\n    public void processDocumentPipeline(String inputPath, String outputPath) {\n        List<Document> docs = readWithTika(inputPath);\n        docs = addSourceMetadata(docs, inputPath);\n        docs = splitByTokenCount(docs, 500);\n        writeDocuments(docs, outputPath);\n        log.info(\"Document processing pipeline complete: {} -> {}\", inputPath, outputPath);\n    }\n\n    static class JsonDocumentWriter implements DocumentWriter {\n        private final String outputPath;\n\n        JsonDocumentWriter(String outputPath) {\n            this.outputPath = outputPath;\n        }\n\n        @Override\n        public void accept(List<Document> documents) {\n            StringBuilder sb = new StringBuilder();\n            sb.append(\"[\\n\");\n            for (int i = 0; i < documents.size(); i++) {\n                Document doc = documents.get(i);\n                sb.append(\"  {\\n\");\n                sb.append(\"    \\\"id\\\": \\\"\").append(doc.getId()).append(\"\\\",\\n\");\n\n                String text = doc.getText().replace(\"\\\"\", \"\\\\\\\"\")\n                    .replace(\"\\n\", \"\\\\n\").replace(\"\\r\", \"\\\\r\");\n                sb.append(\"    \\\"content\\\": \\\"\").append(text).append(\"\\\",\\n\");\n                sb.append(\"    \\\"metadata\\\": {\\n\");\n\n                var meta = doc.getMetadata();\n                int count = 0;\n                for (var entry : meta.entrySet()) {\n                    count++;\n                    sb.append(\"      \\\"\").append(entry.getKey()).append(\"\\\": \\\"\")\n                        .append(entry.getValue()).append(\"\\\"\");\n                    if (count < meta.size()) sb.append(\",\");\n                    sb.append(\"\\n\");\n                }\n\n                sb.append(\"    }\\n\");\n                sb.append(\"  }\");\n                if (i < documents.size() - 1) sb.append(\",\");\n                sb.append(\"\\n\");\n            }\n            sb.append(\"]\");\n\n            try {\n                java.nio.file.Files.writeString(\n                    java.nio.file.Path.of(outputPath), sb.toString());\n            } catch (Exception e) {\n                throw new RuntimeException(\"Failed to write JSON documents\", e);\n            }\n        }\n    }\n\n    static class TextDocumentWriter implements DocumentWriter {\n        private final String outputPath;\n\n        TextDocumentWriter(String outputPath) {\n            this.outputPath = outputPath;\n        }\n\n        @Override\n        public void accept(List<Document> documents) {\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < documents.size(); i++) {\n                Document doc = documents.get(i);\n                sb.append(\"=== Document \").append(i + 1).append(\" ===\\n\");\n                sb.append(\"ID: \").append(doc.getId()).append(\"\\n\");\n                sb.append(\"Metadata: \").append(doc.getMetadata()).append(\"\\n\\n\");\n                sb.append(doc.getText()).append(\"\\n\\n\");\n            }\n\n            try {\n                java.nio.file.Files.writeString(\n                    java.nio.file.Path.of(outputPath), sb.toString());\n            } catch (Exception e) {\n                throw new RuntimeException(\"Failed to write text documents\", e);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-rag-pipeline",
      children: "9. RAG Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation combines document retrieval with LLM generation for accurate, context-aware answers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.ai.document.Document;\nimport org.springframework.ai.vectorstore.SearchRequest;\nimport org.springframework.ai.vectorstore.VectorStore;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\n@Service\npublic class RagPipelineService {\n\n    private static final Logger log = LoggerFactory.getLogger(RagPipelineService.class);\n\n    private final ChatClient chatClient;\n    private final VectorStore vectorStore;\n    private final VectorStoreService vectorStoreService;\n    private final DocumentService documentService;\n\n    public RagPipelineService(\n            ChatClient chatClient,\n            VectorStore vectorStore,\n            VectorStoreService vectorStoreService,\n            DocumentService documentService) {\n        this.chatClient = chatClient;\n        this.vectorStore = vectorStore;\n        this.vectorStoreService = vectorStoreService;\n        this.documentService = documentService;\n    }\n\n    public String answer(String question) {\n        log.info(\"RAG query: {}\", question);\n\n        List<Document> relevantDocs = vectorStoreService.similaritySearch(question, 5);\n\n        String context = relevantDocs.stream()\n            .map(Document::getText)\n            .collect(Collectors.joining(\"\\n\\n---\\n\\n\"));\n\n        return chatClient.prompt()\n            .user(question)\n            .system(\"You are a knowledgeable assistant. Answer the question based on \" +\n                \"the provided context. If the context does not contain enough information, \" +\n                \"say so clearly.\\n\\nContext:\\n%s\", context)\n            .call()\n            .content();\n    }\n\n    public String answerWithSources(String question) {\n        List<Document> relevantDocs = vectorStoreService.similaritySearch(question, 5);\n\n        String context = relevantDocs.stream()\n            .map(doc -> \"Source (\" + doc.getMetadata().getOrDefault(\"source\", \"unknown\")\n                + \"): \" + doc.getText())\n            .collect(Collectors.joining(\"\\n\\n\"));\n\n        String answer = chatClient.prompt()\n            .user(question)\n            .system(\"Answer using only the provided context. Cite sources when possible.\\n\\n\"\n                + \"Context:\\n%s\", context)\n            .call()\n            .content();\n\n        var sourceNames = relevantDocs.stream()\n            .map(doc -> doc.getMetadata().getOrDefault(\"source\", \"unknown\").toString())\n            .distinct()\n            .toList();\n\n        return answer + \"\\n\\n**Sources:** \" + String.join(\", \", sourceNames);\n    }\n\n    public String answerWithScore(String question, double minScore) {\n        SearchRequest request = SearchRequest.builder()\n            .query(question)\n            .topK(10)\n            .similarityThreshold(minScore)\n            .build();\n\n        List<Document> relevantDocs = vectorStore.similaritySearch(request);\n\n        if (relevantDocs.isEmpty()) {\n            return \"I couldn't find any relevant information in the knowledge base \"\n                + \"with sufficient confidence (threshold: \" + minScore + \").\";\n        }\n\n        String context = relevantDocs.stream()\n            .map(Document::getText)\n            .collect(Collectors.joining(\"\\n\\n---\\n\\n\"));\n\n        return chatClient.prompt()\n            .user(question)\n            .system(\"Answer the question using the provided context. \" +\n                \"If the context is insufficient, say so.\\n\\nContext:\\n%s\", context)\n            .call()\n            .content();\n    }\n\n    public Map<String, Object> answerWithMetadata(String question) {\n        long startTime = System.currentTimeMillis();\n\n        List<Document> relevantDocs = vectorStoreService.similaritySearch(question, 3);\n        String context = relevantDocs.stream()\n            .map(Document::getText)\n            .collect(Collectors.joining(\"\\n\\n\"));\n\n        String answer = chatClient.prompt()\n            .user(question)\n            .system(\"Answer concisely using the context.\\n\\nContext:\\n%s\", context)\n            .call()\n            .content();\n\n        long duration = System.currentTimeMillis() - startTime;\n\n        return Map.of(\n            \"question\", question,\n            \"answer\", answer,\n            \"documentsRetrieved\", relevantDocs.size(),\n            \"durationMs\", duration,\n            \"sources\", relevantDocs.stream()\n                .map(doc -> doc.getMetadata().toString())\n                .toList()\n        );\n    }\n\n    public String ingestDocument(String filePath, String category) {\n        log.info(\"Ingesting document: {} (category: {})\", filePath, category);\n\n        List<Document> documents = switch (filePath) {\n            case String s when s.endsWith(\".pdf\") ->\n                documentService.readAndSplit(filePath, 500, 50);\n            case String s when s.endsWith(\".txt\") || s.endsWith(\".md\") ->\n                documentService.readAndSplit(filePath, 500, 50);\n            default ->\n                documentService.readAndSplit(filePath, 500, 50);\n        };\n\n        int originalCount = documents.size();\n        documents = documentService.addMetadata(documents,\n            Map.of(\"category\", category, \"source\", filePath));\n\n        vectorStoreService.storeDocuments(documents);\n\n        return String.format(\"Ingested %d chunks from %s into category '%s'\",\n            originalCount, filePath, category);\n    }\n\n    public String ingestText(String text, String category, String source) {\n        Document doc = new Document(text, Map.of(\n            \"category\", category,\n            \"source\", source,\n            \"ingested_at\", java.time.Instant.now().toString()\n        ));\n\n        List<Document> split = documentService.splitByTokenCount(List.of(doc), 500);\n        vectorStoreService.storeDocuments(split);\n\n        return String.format(\"Ingested %d chunks from text (category: %s)\",\n            split.size(), category);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-rag-controller",
      children: "9.1 RAG Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.RagPipelineService;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/rag\")\npublic class RagController {\n\n    private final RagPipelineService ragService;\n\n    public RagController(RagPipelineService ragService) {\n        this.ragService = ragService;\n    }\n\n    @PostMapping(\"/ask\")\n    public ResponseEntity<Map<String, String>> ask(@RequestBody Map<String, String> request) {\n        String question = request.get(\"question\");\n        String answer = ragService.answer(question);\n        return ResponseEntity.ok(Map.of(\"answer\", answer));\n    }\n\n    @PostMapping(\"/ask/sources\")\n    public ResponseEntity<Map<String, String>> askWithSources(\n            @RequestBody Map<String, String> request) {\n        String question = request.get(\"question\");\n        String answer = ragService.answerWithSources(question);\n        return ResponseEntity.ok(Map.of(\"answer\", answer));\n    }\n\n    @PostMapping(\"/ask/details\")\n    public ResponseEntity<Map<String, Object>> askWithDetails(\n            @RequestBody Map<String, String> request) {\n        String question = request.get(\"question\");\n        Map<String, Object> result = ragService.answerWithMetadata(question);\n        return ResponseEntity.ok(result);\n    }\n\n    @PostMapping(\"/ingest/file\")\n    public ResponseEntity<Map<String, String>> ingestFile(\n            @RequestBody Map<String, String> request) {\n        String filePath = request.get(\"filePath\");\n        String category = request.getOrDefault(\"category\", \"general\");\n        String result = ragService.ingestDocument(filePath, category);\n        return ResponseEntity.ok(Map.of(\"message\", result));\n    }\n\n    @PostMapping(\"/ingest/text\")\n    public ResponseEntity<Map<String, String>> ingestText(\n            @RequestBody Map<String, String> request) {\n        String text = request.get(\"text\");\n        String category = request.getOrDefault(\"category\", \"general\");\n        String source = request.getOrDefault(\"source\", \"manual\");\n        String result = ragService.ingestText(text, category, source);\n        return ResponseEntity.ok(Map.of(\"message\", result));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-prompt-templates",
      children: "10. Prompt Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring AI supports reusable prompt templates with variable substitution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.ai.chat.prompt.PromptTemplate;\nimport org.springframework.ai.chat.prompt.PromptTemplateBuilder;\nimport org.springframework.ai.chat.messages.Message;\nimport org.springframework.ai.chat.messages.SystemMessage;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class PromptTemplateService {\n\n    private static final Logger log = LoggerFactory.getLogger(PromptTemplateService.class);\n\n    private final ChatClient chatClient;\n\n    public PromptTemplateService(ChatClient chatClient) {\n        this.chatClient = chatClient;\n    }\n\n    public String codeReviewPrompt(String code, String language) {\n        PromptTemplate template = new PromptTemplate(\"\"\"\n            Act as an expert {language} code reviewer.\n            \n            Review the following code for:\n            1. Bugs and logic errors\n            2. Security vulnerabilities\n            3. Performance issues\n            4. Code style violations\n            5. Test coverage gaps\n            \n            Code to review:\n            ```{language}\n            {code}\n            ```\n            \n            Provide a severity rating (CRITICAL, MAJOR, MINOR) for each issue found.\n            \"\"\");\n\n        Message message = template.createMessage(Map.of(\n            \"language\", language,\n            \"code\", code\n        ));\n\n        return chatClient.prompt().messages(List.of(message)).call().content();\n    }\n\n    public String generateTestCases(String className, String methodSignatures) {\n        String templateText = \"\"\"\n            Generate comprehensive JUnit 5 test cases for the following Java class.\n            \n            Class: {className}\n            \n            Methods to test:\n            {methodSignatures}\n            \n            For each method, provide:\n            1. Happy path test case\n            2. Edge case tests (null inputs, empty values, boundary conditions)\n            3. Exception/error case tests\n            \n            Use Mockito for mocking dependencies.\n            Use AssertJ for fluent assertions.\n            \"\"\";\n\n        PromptTemplate template = new PromptTemplate(templateText);\n        Message message = template.createMessage(Map.of(\n            \"className\", className,\n            \"methodSignatures\", methodSignatures\n        ));\n\n        return chatClient.prompt().messages(List.of(message)).call().content();\n    }\n\n    public String explainCode(String code, String audience) {\n        String templateText = \"\"\"\n            Explain the following code to a {audience}.\n            \n            ```java\n            {code}\n            ```\n            \n            Structure your explanation:\n            1. What this code does (high-level purpose)\n            2. How it works (step by step)\n            3. Key design decisions\n            4. Potential improvements\n            \n            Adjust technical depth for a {audience} audience.\n            \"\"\";\n\n        PromptTemplate template = new PromptTemplate(templateText);\n        return chatClient.prompt()\n            .user(u -> u.text(templateText)\n                .param(\"code\", code)\n                .param(\"audience\", audience))\n            .call()\n            .content();\n    }\n\n    public String generateSpringBootEndpoint(String entityName, String fields) {\n        String templateText = \"\"\"\n            Generate a complete Spring Boot REST controller for the {entityName} entity.\n            \n            Entity fields:\n            {fields}\n            \n            Include:\n            1. CRUD endpoints (POST, GET, PUT, DELETE)\n            2. Request/Response DTOs\n            3. Validation annotations\n            4. Pagination support\n            5. Error handling\n            6. OpenAPI/Swagger documentation\n            \n            Use Spring Data JPA and follow REST best practices.\n            \"\"\";\n\n        return chatClient.prompt()\n            .user(u -> u.text(templateText)\n                .param(\"entityName\", entityName)\n                .param(\"fields\", fields))\n            .call()\n            .content();\n    }\n\n    public String multiTemplatePrompt(String concept, String level) {\n        var systemTemplate = new PromptTemplate(\"\"\"\n            You are a {level} Java programming tutor.\n            \n            Teaching style:\n            - Use analogies and real-world examples\n            - Provide runnable code snippets\n            - Ask comprehension questions\n            - Suggest practice exercises\n            \n            Difficulty level: {level}\n            \"\"\");\n\n        var userTemplate = new PromptTemplate(\"\"\"\n            Teach me about {concept} in Java.\n            \n            Cover:\n            1. What is {concept} and why is it useful\n            2. Core concepts and terminology\n            3. Code examples with explanation\n            4. Common pitfalls\n            5. Practice exercise\n            \"\"\");\n\n        SystemMessage systemMessage = (SystemMessage) systemTemplate.createMessage(\n            Map.of(\"level\", level));\n\n        Message userMessage = userTemplate.createMessage(Map.of(\"concept\", concept));\n\n        return chatClient.prompt()\n            .messages(List.of(systemMessage, userMessage))\n            .call()\n            .content();\n    }\n\n    public String templateFromResource(String templateName, Map<String, Object> params) {\n        PromptTemplate template = new PromptTemplate(\"classpath:/prompts/\" + templateName);\n        Message message = template.createMessage(params);\n\n        return chatClient.prompt()\n            .messages(List.of(message))\n            .call()\n            .content();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-prompt-template-controller",
      children: "10.1 Prompt Template Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.PromptTemplateService;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/prompts\")\npublic class PromptTemplateController {\n\n    private final PromptTemplateService promptTemplateService;\n\n    public PromptTemplateController(PromptTemplateService promptTemplateService) {\n        this.promptTemplateService = promptTemplateService;\n    }\n\n    @PostMapping(\"/code-review\")\n    public ResponseEntity<Map<String, String>> codeReview(@RequestBody Map<String, String> request) {\n        String result = promptTemplateService.codeReviewPrompt(\n            request.get(\"code\"), request.getOrDefault(\"language\", \"Java\"));\n        return ResponseEntity.ok(Map.of(\"result\", result));\n    }\n\n    @PostMapping(\"/generate-tests\")\n    public ResponseEntity<Map<String, String>> generateTests(\n            @RequestBody Map<String, String> request) {\n        String result = promptTemplateService.generateTestCases(\n            request.get(\"className\"), request.get(\"methodSignatures\"));\n        return ResponseEntity.ok(Map.of(\"result\", result));\n    }\n\n    @PostMapping(\"/explain\")\n    public ResponseEntity<Map<String, String>> explainCode(\n            @RequestBody Map<String, String> request) {\n        String result = promptTemplateService.explainCode(\n            request.get(\"code\"), request.getOrDefault(\"audience\", \"beginner\"));\n        return ResponseEntity.ok(Map.of(\"result\", result));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-multi-agent-orchestration",
      children: "11. Multi-Agent Orchestration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Coordinate multiple AI agents with a supervisor pattern and routing logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport com.aiengineering.course.service.ChatService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Service;\n\nimport java.util.*;\nimport java.util.regex.Pattern;\nimport java.util.stream.Collectors;\n\n@Service\npublic class AgentSupervisor {\n\n    private static final Logger log = LoggerFactory.getLogger(AgentSupervisor.class);\n\n    private final ChatService chatService;\n    private final Map<String, Agent> agents;\n\n    public AgentSupervisor(ChatService chatService, List<Agent> agentList) {\n        this.chatService = chatService;\n        this.agents = agentList.stream()\n            .collect(Collectors.toMap(Agent::getName, a -> a));\n    }\n\n    public Map<String, Object> processRequest(String userRequest) {\n        log.info(\"Supervisor processing: {}\", userRequest);\n\n        String routingDecision = chatService.askWithSystemContext(\n            userRequest,\n            \"You are an AI agent router. Available agents:\\n\" +\n            agents.values().stream()\n                .map(a -> \"- \" + a.getName() + \": \" + a.getDescription())\n                .collect(Collectors.joining(\"\\n\")) +\n            \"\\n\\nRespond with ONLY the agent name that should handle this request. \" +\n            \"If multiple agents are needed, respond with their names separated by commas. \" +\n            \"If no agent is appropriate, respond with 'UNKNOWN'.\"\n        );\n\n        List<String> agentNames = Arrays.stream(routingDecision.split(\",\"))\n            .map(String::trim)\n            .filter(name -> agents.containsKey(name) || name.equals(\"UNKNOWN\"))\n            .toList();\n\n        if (agentNames.isEmpty() || agentNames.contains(\"UNKNOWN\")) {\n            return Map.of(\n                \"request\", userRequest,\n                \"routingDecision\", routingDecision,\n                \"assignedAgents\", List.of(),\n                \"responses\", Map.of(),\n                \"summary\", \"Unable to route request to any agent. \" +\n                    \"Falling back to general assistant.\",\n                \"finalResponse\", chatService.ask(userRequest)\n            );\n        }\n\n        Map<String, String> responses = new LinkedHashMap<>();\n        for (String agentName : agentNames) {\n            Agent agent = agents.get(agentName);\n            try {\n                String response = agent.execute(userRequest);\n                responses.put(agentName, response);\n            } catch (Exception e) {\n                log.error(\"Agent {} failed: {}\", agentName, e.getMessage());\n                responses.put(agentName, \"ERROR: \" + e.getMessage());\n            }\n        }\n\n        String summary = chatService.askWithSystemContext(\n            userRequest,\n            \"Synthesize the following agent responses into a coherent answer:\\n\\n\" +\n            responses.entrySet().stream()\n                .map(e -> \"[\" + e.getKey() + \"]: \" + e.getValue())\n                .collect(Collectors.joining(\"\\n\\n\"))\n        );\n\n        return Map.of(\n            \"request\", userRequest,\n            \"routingDecision\", routingDecision,\n            \"assignedAgents\", agentNames,\n            \"responses\", responses,\n            \"summary\", summary,\n            \"finalResponse\", responses.values().iterator().next()\n        );\n    }\n\n    public Map<String, Object> getAgentStatus() {\n        Map<String, Object> statuses = new LinkedHashMap<>();\n        for (Agent agent : agents.values()) {\n            statuses.put(agent.getName(), Map.of(\n                \"description\", agent.getDescription(),\n                \"capabilities\", agent.getCapabilities(),\n                \"status\", \"ready\"\n            ));\n        }\n        return statuses;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport java.util.List;\n\npublic interface Agent {\n    String getName();\n    String getDescription();\n    List<String> getCapabilities();\n    String execute(String input);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport com.aiengineering.course.service.ChatService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class CodeAgent implements Agent {\n\n    private static final Logger log = LoggerFactory.getLogger(CodeAgent.class);\n\n    private final ChatService chatService;\n\n    public CodeAgent(ChatService chatService) {\n        this.chatService = chatService;\n    }\n\n    @Override\n    public String getName() {\n        return \"CodeAgent\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Expert Java developer. Writes, reviews, and debugs code. \" +\n            \"Handles Spring Boot, REST APIs, JPA, and testing.\";\n    }\n\n    @Override\n    public List<String> getCapabilities() {\n        return List.of(\n            \"Write production-quality Java code\",\n            \"Code review and refactoring\",\n            \"Debugging and error resolution\",\n            \"Spring Boot application development\",\n            \"Unit and integration testing\",\n            \"Performance optimization\"\n        );\n    }\n\n    @Override\n    public String execute(String input) {\n        log.info(\"CodeAgent executing: {}\", input);\n        return chatService.askWithSystemContext(input,\n            \"You are CodeAgent, an expert Java and Spring Boot developer. \" +\n            \"Write clean, production-quality code with proper error handling. \" +\n            \"Follow SOLID principles and best practices. \" +\n            \"Include imports, annotations, and proper package structure.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport com.aiengineering.course.service.ChatService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class DatabaseAgent implements Agent {\n\n    private static final Logger log = LoggerFactory.getLogger(DatabaseAgent.class);\n\n    private final ChatService chatService;\n\n    public DatabaseAgent(ChatService chatService) {\n        this.chatService = chatService;\n    }\n\n    @Override\n    public String getName() {\n        return \"DatabaseAgent\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Database expert specializing in SQL, JPA, Hibernate, \" +\n            \"schema design, and query optimization.\";\n    }\n\n    @Override\n    public List<String> getCapabilities() {\n        return List.of(\n            \"SQL query writing and optimization\",\n            \"Database schema design and normalization\",\n            \"JPA entity and repository design\",\n            \"Hibernate performance tuning\",\n            \"Migration and indexing strategies\",\n            \"Database security best practices\"\n        );\n    }\n\n    @Override\n    public String execute(String input) {\n        log.info(\"DatabaseAgent executing: {}\", input);\n        return chatService.askWithSystemContext(input,\n            \"You are DatabaseAgent, an expert in database design and JPA. \" +\n            \"Provide optimized SQL queries, proper indexing strategies, \" +\n            \"and efficient JPA mappings. Include explain plans where relevant.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport com.aiengineering.course.service.ChatService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class SecurityAgent implements Agent {\n\n    private static final Logger log = LoggerFactory.getLogger(SecurityAgent.class);\n\n    private final ChatService chatService;\n\n    public SecurityAgent(ChatService chatService) {\n        this.chatService = chatService;\n    }\n\n    @Override\n    public String getName() {\n        return \"SecurityAgent\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Security specialist focusing on OWASP Top 10, \" +\n            \"authentication, authorization, and secure coding.\";\n    }\n\n    @Override\n    public List<String> getCapabilities() {\n        return List.of(\n            \"OWASP Top 10 vulnerability assessment\",\n            \"Spring Security configuration\",\n            \"Authentication and authorization design\",\n            \"Secure coding practices\",\n            \"API security (JWT, OAuth2, API keys)\",\n            \"Security audit and penetration testing advice\"\n        );\n    }\n\n    @Override\n    public String execute(String input) {\n        log.info(\"SecurityAgent executing: {}\", input);\n        return chatService.askWithSystemContext(input,\n            \"You are SecurityAgent, a security expert. \" +\n            \"Identify vulnerabilities and provide secure solutions. \" +\n            \"Reference OWASP guidelines and Spring Security best practices. \" +\n            \"Always prioritize security over convenience.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport com.aiengineering.course.service.ChatService;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class TestingAgent implements Agent {\n\n    private final ChatService chatService;\n\n    public TestingAgent(ChatService chatService) {\n        this.chatService = chatService;\n    }\n\n    @Override\n    public String getName() {\n        return \"TestingAgent\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Testing specialist for JUnit 5, Mockito, integration tests, \" +\n            \"and test-driven development.\";\n    }\n\n    @Override\n    public List<String> getCapabilities() {\n        return List.of(\n            \"JUnit 5 test writing\",\n            \"Mockito mocking and verification\",\n            \"Integration test setup\",\n            \"Test-driven development\",\n            \"Code coverage analysis\",\n            \"Performance and load testing\"\n        );\n    }\n\n    @Override\n    public String execute(String input) {\n        return chatService.askWithSystemContext(input,\n            \"You are TestingAgent, a testing expert. \" +\n            \"Write comprehensive tests using JUnit 5 and Mockito. \" +\n            \"Cover edge cases, error scenarios, and happy paths. \" +\n            \"Use AssertJ for fluent assertions. \" +\n            \"Follow the Given-When-Then pattern.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service.agent;\n\nimport com.aiengineering.course.service.ChatService;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class ArchitectureAgent implements Agent {\n\n    private final ChatService chatService;\n\n    public ArchitectureAgent(ChatService chatService) {\n        this.chatService = chatService;\n    }\n\n    @Override\n    public String getName() {\n        return \"ArchitectureAgent\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Software architect for microservices, event-driven systems, \" +\n            \"and enterprise application design.\";\n    }\n\n    @Override\n    public List<String> getCapabilities() {\n        return List.of(\n            \"Microservices architecture design\",\n            \"Event-driven system design\",\n            \"CQRS and event sourcing\",\n            \"API design and contract-first development\",\n            \"System scalability and resilience\",\n            \"Technology stack evaluation\"\n        );\n    }\n\n    @Override\n    public String execute(String input) {\n        return chatService.askWithSystemContext(input,\n            \"You are ArchitectureAgent, a software architect. \" +\n            \"Design scalable, maintainable systems. \" +\n            \"Consider trade-offs between different architectural patterns. \" +\n            \"Include diagrams descriptions, component interactions, \" +\n            \"and technology recommendations with rationale.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-agent-controller",
      children: "11.1 Agent Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.agent.AgentSupervisor;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/agents\")\npublic class AgentController {\n\n    private final AgentSupervisor supervisor;\n\n    public AgentController(AgentSupervisor supervisor) {\n        this.supervisor = supervisor;\n    }\n\n    @PostMapping(\"/process\")\n    public ResponseEntity<Map<String, Object>> processRequest(\n            @RequestBody Map<String, String> request) {\n        String userRequest = request.get(\"request\");\n        Map<String, Object> result = supervisor.processRequest(userRequest);\n        return ResponseEntity.ok(result);\n    }\n\n    @GetMapping(\"/status\")\n    public ResponseEntity<Map<String, Object>> getAgentStatus() {\n        return ResponseEntity.ok(supervisor.getAgentStatus());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-advisors",
      children: "12. Advisors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advisors provide cross-cutting concerns like context injection, question-answering augmentation, and chat memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.ai.chat.client.advisor.QuestionAnswerAdvisor;\nimport org.springframework.ai.chat.client.advisor.VectorStoreChatMemoryAdvisor;\nimport org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;\nimport org.springframework.ai.vectorstore.VectorStore;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration(proxyBeanMethods = false)\npublic class AdvisorConfig {\n\n    @Bean\n    public QuestionAnswerAdvisor questionAnswerAdvisor(VectorStore vectorStore) {\n        return new QuestionAnswerAdvisor(vectorStore,\n            QuestionAnswerAdvisor.DEFAULT_SEARCH_REQUEST,\n            \"Context information is below.\\n\" +\n            \"---------------------\\n\" +\n            \"{question_answer_context}\\n\" +\n            \"---------------------\\n\" +\n            \"Given the context and your prior knowledge, \" +\n            \"answer the user question.\");\n    }\n\n    @Bean\n    public VectorStoreChatMemoryAdvisor chatMemoryAdvisor(VectorStore vectorStore) {\n        return new VectorStoreChatMemoryAdvisor(\n            vectorStore,\n            \"default-conversation\",\n            10\n        );\n    }\n\n    @Bean\n    public SimpleLoggerAdvisor simpleLoggerAdvisor() {\n        return new SimpleLoggerAdvisor();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.ai.chat.client.advisor.QuestionAnswerAdvisor;\nimport org.springframework.ai.chat.client.advisor.VectorStoreChatMemoryAdvisor;\nimport org.springframework.stereotype.Service;\n\nimport java.util.Map;\n\n@Service\npublic class AdvisorService {\n\n    private static final Logger log = LoggerFactory.getLogger(AdvisorService.class);\n\n    private final ChatClient chatClient;\n    private final QuestionAnswerAdvisor qaAdvisor;\n    private final VectorStoreChatMemoryAdvisor memoryAdvisor;\n\n    public AdvisorService(\n            ChatClient chatClient,\n            QuestionAnswerAdvisor qaAdvisor,\n            VectorStoreChatMemoryAdvisor memoryAdvisor) {\n        this.chatClient = chatClient;\n        this.qaAdvisor = qaAdvisor;\n        this.memoryAdvisor = memoryAdvisor;\n    }\n\n    public String askWithContext(String question) {\n        return chatClient.prompt()\n            .user(question)\n            .advisors(a -> a.advisor(qaAdvisor))\n            .call()\n            .content();\n    }\n\n    public String chatWithMemory(String conversationId, String message) {\n        return chatClient.prompt()\n            .user(message)\n            .advisors(a -> a.advisor(memoryAdvisor)\n                .param(VectorStoreChatMemoryAdvisor.CONVERSATION_ID_KEY, conversationId))\n            .call()\n            .content();\n    }\n\n    public String askWithAllAdvisors(String conversationId, String question) {\n        return chatClient.prompt()\n            .user(question)\n            .advisors(a -> a\n                .advisor(qaAdvisor)\n                .advisor(memoryAdvisor)\n                .param(VectorStoreChatMemoryAdvisor.CONVERSATION_ID_KEY, conversationId))\n            .call()\n            .content();\n    }\n\n    public String askWithCustomContext(String question, String additionalContext) {\n        return chatClient.prompt()\n            .user(question)\n            .system(\"Additional context:\\n%s\\n\\nAnswer based on this context.\", additionalContext)\n            .advisors(a -> a.advisor(qaAdvisor))\n            .call()\n            .content();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-advisor-controller",
      children: "12.1 Advisor Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.service.AdvisorService;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/ai/advisors\")\npublic class AdvisorController {\n\n    private final AdvisorService advisorService;\n\n    public AdvisorController(AdvisorService advisorService) {\n        this.advisorService = advisorService;\n    }\n\n    @PostMapping(\"/ask\")\n    public ResponseEntity<Map<String, String>> askWithContext(\n            @RequestBody Map<String, String> request) {\n        String answer = advisorService.askWithContext(request.get(\"question\"));\n        return ResponseEntity.ok(Map.of(\"answer\", answer));\n    }\n\n    @PostMapping(\"/chat\")\n    public ResponseEntity<Map<String, String>> chat(\n            @RequestBody Map<String, String> request) {\n        String conversationId = request.getOrDefault(\"conversationId\", \"default\");\n        String answer = advisorService.chatWithMemory(conversationId, request.get(\"message\"));\n        return ResponseEntity.ok(Map.of(\"answer\", answer));\n    }\n}\n"
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
      children: "Spring AI provides a comprehensive framework for integrating AI capabilities into Spring Boot applications:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Class/Interface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ChatClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-level LLM interaction with prompt, call, stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ChatModel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level model configuration and provider abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BeanOutputConverter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe extraction of structured data from LLM responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Calling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Tool"
            }), " annotation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative tool registration for LLM function execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Stores"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PgVectorStore"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RedisVectorStore"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ChromaVectorStore"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search with embedding similarity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "EmbeddingModel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-vector conversion for semantic search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document APIs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DocumentReader"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DocumentTransformer"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DocumentWriter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document processing pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom service combining retrieval + generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-augmented LLM responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt Templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PromptTemplate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable parameterized prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor + specialized agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestrated multi-agent workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advisors"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "QuestionAnswerAdvisor"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VectorStoreChatMemoryAdvisor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-cutting AI concerns"
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
            children: "Basic Chat"
          }), ": Create a ChatClient that supports streaming responses and display each chunk as it arrives."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tool Integration"
          }), ": Build a WeatherTool that fetches weather data from an external API and registers it with the LLM."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vector Store"
          }), ": Ingest a set of documentation files into PGVectorStore and build a RAG-based Q&A system."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Agent"
          }), ": Create a team of 3 agents (Writer, Editor, Publisher) orchestrated by a supervisor to produce blog posts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structured Output"
          }), ": Design a ResumeParser that extracts structured candidate information from unstructured resume text."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt Templates"
          }), ": Create a library of 5 reusable prompt templates for common development tasks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advisors"
          }), ": Implement a custom advisor that filters inappropriate content before sending to the LLM."]
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