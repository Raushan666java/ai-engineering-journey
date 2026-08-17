"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[41267],{

/***/ 67251
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_65_interview_system_design_md_85d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-65-interview-system-design-md-85d.json
const site_docs_courses_java_65_interview_system_design_md_85d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/65-interview-system-design","title":"65. System Design → Interview Q&A","description":"Previous Behavioral Interview Q&amp;A","source":"@site/docs/courses/java/65-interview-system-design.md","sourceDirName":"courses/java","slug":"/java/65-interview-system-design","permalink":"/ai-engineering-journey/java/65-interview-system-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":73,"frontMatter":{"id":"65-interview-system-design","slug":"/java/65-interview-system-design","title":"65. System Design → Interview Q&A","sidebar_label":"65. System Design → Interview Q&A","sidebar_position":73},"sidebar":"course-java","previous":{"title":"64. Design Patterns → Interview Q&A","permalink":"/ai-engineering-journey/java/64-interview-design-patterns"},"next":{"title":"66. Behavioral Interview — Q&A","permalink":"/ai-engineering-journey/java/66-interview-behavioral"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/65-interview-system-design.md


const frontMatter = {
	id: '65-interview-system-design',
	slug: '/java/65-interview-system-design',
	title: '65. System Design → Interview Q&A',
	sidebar_label: '65. System Design → Interview Q&A',
	sidebar_position: 73
};
const contentTitle = '65. System Design → Interview Q&A';

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q1: How would you design a URL shortener like TinyURL?",
  "id": "q1-how-would-you-design-a-url-shortener-like-tinyurl",
  "level": 3
}, {
  "value": "Q2: How would you design a chat system (like WhatsApp)?",
  "id": "q2-how-would-you-design-a-chat-system-like-whatsapp",
  "level": 3
}, {
  "value": "Q3: How would you design an e-commerce system?",
  "id": "q3-how-would-you-design-an-e-commerce-system",
  "level": 3
}, {
  "value": "Q4: How would you design a notification system?",
  "id": "q4-how-would-you-design-a-notification-system",
  "level": 3
}, {
  "value": "Q5: How would you design a rate limiter?",
  "id": "q5-how-would-you-design-a-rate-limiter",
  "level": 3
}, {
  "value": "Q6: How would you design a distributed cache?",
  "id": "q6-how-would-you-design-a-distributed-cache",
  "level": 3
}, {
  "value": "Q7: How would you design a distributed ID generator?",
  "id": "q7-how-would-you-design-a-distributed-id-generator",
  "level": 3
}, {
  "value": "Q8: What is CAP theorem and how does it apply to system design?",
  "id": "q8-what-is-cap-theorem-and-how-does-it-apply-to-system-design",
  "level": 3
}, {
  "value": "Q9: How would you design a search system (like Elasticsearch)?",
  "id": "q9-how-would-you-design-a-search-system-like-elasticsearch",
  "level": 3
}, {
  "value": "Q10: How would you design a distributed logging system?",
  "id": "q10-how-would-you-design-a-distributed-logging-system",
  "level": 3
}, {
  "value": "Q11: How would you design a payment system?",
  "id": "q11-how-would-you-design-a-payment-system",
  "level": 3
}, {
  "value": "Q12: How would you design a recommendation system?",
  "id": "q12-how-would-you-design-a-recommendation-system",
  "level": 3
}, {
  "value": "Q13: How would you design a data pipeline (ETL)?",
  "id": "q13-how-would-you-design-a-data-pipeline-etl",
  "level": 3
}, {
  "value": "Q14: How would you design a task queue (like Celery)?",
  "id": "q14-how-would-you-design-a-task-queue-like-celery",
  "level": 3
}, {
  "value": "Q15: How would you design a distributed job scheduler?",
  "id": "q15-how-would-you-design-a-distributed-job-scheduler",
  "level": 3
}, {
  "value": "Q16: How would you design a distributed file storage system?",
  "id": "q16-how-would-you-design-a-distributed-file-storage-system",
  "level": 3
}, {
  "value": "Q17: How would you design a leader election system?",
  "id": "q17-how-would-you-design-a-leader-election-system",
  "level": 3
}, {
  "value": "Q18: How would you design a content delivery network (CDN)?",
  "id": "q18-how-would-you-design-a-content-delivery-network-cdn",
  "level": 3
}, {
  "value": "Q19: How would you design an API gateway?",
  "id": "q19-how-would-you-design-an-api-gateway",
  "level": 3
}, {
  "value": "Q20: How would you design a distributed configuration system?",
  "id": "q20-how-would-you-design-a-distributed-configuration-system",
  "level": 3
}, {
  "value": "Q21: How would you design a service discovery system?",
  "id": "q21-how-would-you-design-a-service-discovery-system",
  "level": 3
}, {
  "value": "Q22: How would you design a distributed tracing system?",
  "id": "q22-how-would-you-design-a-distributed-tracing-system",
  "level": 3
}, {
  "value": "Q23: How would you design a content management system (CMS)?",
  "id": "q23-how-would-you-design-a-content-management-system-cms",
  "level": 3
}, {
  "value": "Q24: How would you design a social media feed?",
  "id": "q24-how-would-you-design-a-social-media-feed",
  "level": 3
}, {
  "value": "Q25: How would you design a ticket booking system?",
  "id": "q25-how-would-you-design-a-ticket-booking-system",
  "level": 3
}, {
  "value": "Q26: What is the difference between SQL and NoSQL databases in system design?",
  "id": "q26-what-is-the-difference-between-sql-and-nosql-databases-in-system-design",
  "level": 3
}, {
  "value": "Q27: How would you design a database sharding strategy?",
  "id": "q27-how-would-you-design-a-database-sharding-strategy",
  "level": 3
}, {
  "value": "Q28: How would you design a database replication strategy?",
  "id": "q28-how-would-you-design-a-database-replication-strategy",
  "level": 3
}, {
  "value": "Q29: How would you design a monitoring and alerting system?",
  "id": "q29-how-would-you-design-a-monitoring-and-alerting-system",
  "level": 3
}, {
  "value": "Q30: What are the trade-offs between REST, GraphQL, and gRPC?",
  "id": "q30-what-are-the-trade-offs-between-rest-graphql-and-grpc",
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
        id: "65-system-design--interview-qa",
        children: "65. System Design → Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/64-interview-design-patterns",
          children: "Design Patterns Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/66-interview-behavioral",
          children: "Behavioral Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers system design concepts essential for senior Java backend interviews: designing scalable, reliable, and maintainable distributed systems with practical Spring Boot implementations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/65-interview-system-design.png",
        alt: "System Design Interview - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Questions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions, contrasts, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilable, runnable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real interview scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitfalls to avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Code Examples]\n    B --> C[Edge Cases]\n    C --> D[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-would-you-design-a-url-shortener-like-tinyurl",
      children: "Q1: How would you design a URL shortener like TinyURL?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In interviews, always start with the \"why\" before the \"how.\" Explaining the reasoning behind a design choice is more valuable than reciting syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Code readability matters in interviews. Write clean, well-structured code with meaningful variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Shorten long URLs, redirect to original URL, optional custom aliases, analytics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Highly available, low latency redirect ( < 10ms), scalable (100M+ URLs), durable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Encoding Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a unique ID (base 62 encoded: 0-9, a-z, A-Z) for each URL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7 characters = 62^7 ≈ 3.5 trillion combinations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UrlEncoder {\n    private static final String BASE62 = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n\n    public static String encode(long id) {\n        StringBuilder sb = new StringBuilder();\n        while (id > 0) {\n            sb.append(BASE62.charAt((int) (id % 62)));\n            id /= 62;\n        }\n        while (sb.length() < 7) {\n            sb.append('0');\n        }\n        return sb.reverse().toString();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. ID Generation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snowflake ID"
        }), " (Twitter's distributed ID generator):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Timestamp (41 bits) + Worker ID (10 bits) + Sequence (12 bits)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates ~4M unique IDs per second per worker"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SnowflakeIdGenerator {\n    private final long workerId;\n    private final long epoch = 1700000000000L;\n    private long lastTimestamp = -1L;\n    private long sequence = 0L;\n\n    public synchronized long nextId() {\n        long timestamp = System.currentTimeMillis();\n        if (timestamp < lastTimestamp) {\n            throw new RuntimeException(\"Clock moved backwards\");\n        }\n        if (timestamp == lastTimestamp) {\n            sequence = (sequence + 1) & 4095;\n            if (sequence == 0) timestamp = waitNextMillis();\n        } else {\n            sequence = 0;\n        }\n        lastTimestamp = timestamp;\n        return ((timestamp - epoch) << 22) | (workerId << 12) | sequence;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Data Model:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE urls (\n    id BIGINT PRIMARY KEY,\n    short_code VARCHAR(7) UNIQUE NOT NULL,\n    original_url TEXT NOT NULL,\n    user_id BIGINT,\n    created_at TIMESTAMP NOT NULL DEFAULT NOW(),\n    expires_at TIMESTAMP,\n    clicks BIGINT DEFAULT 0\n);\n\nCREATE INDEX idx_short_code ON urls(short_code);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Caching with Redis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class UrlService {\n    private final StringRedisTemplate redis;\n    private final UrlRepository repository;\n\n    @Cacheable(value = \"urls\", key = \"#shortCode\", unless = \"#result == null\")\n    public String getOriginalUrl(String shortCode) {\n        // Cache-aside: check cache first, then DB\n        return repository.findByShortCode(shortCode)\n            .map(Url::getOriginalUrl)\n            .orElseThrow(() -> new UrlNotFoundException(shortCode));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. API:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/v1\")\npublic class UrlController {\n    @PostMapping(\"/shorten\")\n    public ShortenResponse shorten(@RequestBody @Valid ShortenRequest request) {\n        String shortCode = urlService.createShortUrl(request.url(), request.customAlias());\n        return new ShortenResponse(\"https://short.url/\" + shortCode);\n    }\n\n    @GetMapping(\"/{shortCode}\")\n    public ResponseEntity<Void> redirect(@PathVariable String shortCode) {\n        String originalUrl = urlService.getOriginalUrl(shortCode);\n        urlService.incrementClicks(shortCode);\n        return ResponseEntity.status(HttpStatus.FOUND)\n            .location(URI.create(originalUrl))\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Scaling considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redirects"
        }), " are read-heavy (100:1 read-to-write ratio). Use Redis cache to reduce DB load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limiting"
        }), " on shorten endpoint to prevent abuse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database sharding"
        }), " by shortCode hash if needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CDN"
        }), " for redirects (static-like response with 301 redirect)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Async click tracking"
        }), " via Kafka to avoid slowing down redirects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-would-you-design-a-chat-system-like-whatsapp",
      children: "Q2: How would you design a chat system (like WhatsApp)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " One-on-one and group messaging, message delivery status (sent/delivered/read), media sharing, online status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Low latency delivery, high availability, ordered messages, offline messages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client (WebSocket) → Load Balancer → Chat Service (WebSocket handler)\n                                          ↓\n                                Message Queue (Kafka)\n                                          ↓\n                                Message Store (Cassandra)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. WebSocket for real-time communication:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class WebSocketConfig implements WebSocketMessageBrokerConfigurer {\n    @Override\n    public void configureMessageBroker(MessageBrokerRegistry config) {\n        config.enableSimpleBroker(\"/topic\", \"/queue\");\n        config.setApplicationDestinationPrefixes(\"/app\");\n    }\n\n    @Override\n    public void registerStompEndpoints(StompEndpointRegistry registry) {\n        registry.addEndpoint(\"/ws-chat\")\n            .setAllowedOrigins(\"*\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Message model:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record ChatMessage(\n    String messageId,\n    String senderId,\n    String receiverId,\n    String content,\n    MessageType type,  // TEXT, IMAGE, VIDEO, FILE\n    long timestamp,\n    String conversationId\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Conversation management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ChatService {\n    private final SimpMessagingTemplate messagingTemplate;\n\n    public void sendMessage(ChatMessage message) {\n        // 1. Save to database\n        messageStore.save(message);\n\n        // 2. Send via WebSocket if user is connected\n        String destination = \"/queue/messages/\" + message.receiverId();\n        messagingTemplate.convertAndSend(destination, message);\n\n        // 3. If offline, message is retrieved on next connection (sync)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Read/unread tracking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE message_status (\n    message_id VARCHAR(64),\n    user_id VARCHAR(64),\n    status ENUM('SENT', 'DELIVERED', 'READ'),\n    updated_at TIMESTAMP,\n    PRIMARY KEY (message_id, user_id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Offline message sync:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\npublic class SyncController {\n    @GetMapping(\"/sync\")\n    public List<ChatMessage> sync(@RequestParam String userId,\n                                   @RequestParam long lastSyncTimestamp) {\n        return messageStore.findByReceiverAndTimestampAfter(userId, lastSyncTimestamp);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Scaling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WebSocket servers"
        }), " are stateful. Use sticky sessions or a distributed session store (Redis)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kafka"
        }), " partitions messages by conversationId for ordering guarantees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cassandra"
        }), " for message store (high write throughput, no joins needed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CDN"
        }), " for media files (images, videos)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-would-you-design-an-e-commerce-system",
      children: "Q3: How would you design an e-commerce system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Product catalog, shopping cart, checkout, payment, order tracking, inventory management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Handle flash sales, 99.9% uptime, stale inventory prevention"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client → API Gateway → Product Service\n                     → Cart Service\n                     → Order Service → Saga Orchestrator\n                     → Payment Service\n                     → Inventory Service\n                     → Notification Service\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Product Catalog:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Product {\n    @Id private String id;\n    private String name;\n    private String description;\n    @Embedded private Money price;\n    private String categoryId;\n    private List<String> imageUrls;\n    private ProductStatus status;\n}\n\n// Search with Elasticsearch\n@Service\npublic class ProductSearchService {\n    private final ElasticsearchRestTemplate elasticsearch;\n\n    public Page<ProductDocument> search(String query, Pageable pageable) {\n        NativeSearchQuery searchQuery = new NativeSearchQueryBuilder()\n            .withQuery(QueryBuilders.multiMatchQuery(query, \"name\", \"description\"))\n            .withPageable(pageable)\n            .build();\n        return elasticsearch.search(searchQuery, ProductDocument.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Shopping Cart with Redis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RedisHash(\"cart\")\npublic class Cart {\n    @Id private String userId;\n    private Map<String, Integer> items;  // productId → quantity\n    private LocalDateTime lastUpdated;\n}\n\n@Service\npublic class CartService {\n    private final CartRepository cartRepository;\n    private final ProductServiceClient productClient;\n\n    @Transactional\n    public void addItem(String userId, String productId, int quantity) {\n        Cart cart = cartRepository.findById(userId)\n            .orElse(new Cart(userId, new HashMap<>()));\n\n        // Check inventory before adding\n        int currentQty = cart.items().getOrDefault(productId, 0);\n        if (!productClient.checkAvailability(productId, currentQty + quantity)) {\n            throw new InsufficientInventoryException(productId);\n        }\n\n        cart.items().merge(productId, quantity, Integer::sum);\n        cartRepository.save(cart);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Order processing with Saga pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderSagaOrchestrator {\n    @Transactional\n    public Order placeOrder(CheckoutRequest request) {\n        // Step 1: Create pending order\n        Order order = orderService.createOrder(request);\n\n        try {\n            // Step 2: Reserve inventory\n            inventoryService.reserve(order.getItems());\n\n            // Step 3: Process payment\n            paymentService.charge(order.getId(), order.getTotal());\n\n            // Step 4: Confirm order\n            order.confirm();\n            orderService.save(order);\n\n            // Step 5: Send notification (async)\n            notificationService.sendOrderConfirmation(order);\n\n            return order;\n        } catch (InventoryReservationException e) {\n            // Compensate: cancel order\n            order.cancel();\n            orderService.save(order);\n            throw new OrderPlacementException(\"Insufficient inventory\", e);\n        } catch (PaymentException e) {\n            // Compensate: release inventory + cancel order\n            inventoryService.release(order.getItems());\n            order.cancel();\n            orderService.save(order);\n            throw new OrderPlacementException(\"Payment failed\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Inventory management with optimistic locking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class InventoryService {\n    @Transactional\n    public void reserve(List<OrderItem> items) {\n        for (OrderItem item : items) {\n            Inventory inventory = inventoryRepository.findByProductId(item.productId());\n            inventory.reserve(item.quantity());  // Throws if insufficient\n            inventoryRepository.save(inventory);\n        }\n    }\n}\n\n@Entity\npublic class Inventory {\n    @Version private Long version;  // Optimistic lock\n    private int availableQuantity;\n\n    public void reserve(int quantity) {\n        if (availableQuantity < quantity) {\n            throw new InsufficientInventoryException(\"Only \" + availableQuantity + \" available\");\n        }\n        this.availableQuantity -= quantity;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-would-you-design-a-notification-system",
      children: "Q4: How would you design a notification system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Multiple channels (email, SMS, push, in-app), templates, rate limiting, delivery tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " High throughput (millions/day), reliable delivery, scalable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Service → Notification API → Message Queue (Kafka)\n                                  ↓\n       ┌──────────────────────────┼──────────────────────────┐\n       ↓                          ↓                          ↓\n Email Worker              SMS Worker                 Push Worker\n       ↓                          ↓                          ↓\n SendGrid/Twilio           Twilio/SNS                  Firebase/APNs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Notification model:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public record Notification(\n    String notificationId,\n    String userId,\n    NotificationChannel channel,  // EMAIL, SMS, PUSH, IN_APP\n    NotificationTemplate template,\n    Map<String, Object> parameters,\n    NotificationPriority priority,  // HIGH, MEDIUM, LOW\n    LocalDateTime scheduledAt\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Template engine:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class TemplateService {\n    public String render(String templateName, Map<String, Object> params) {\n        // Use Thymeleaf or Handlebars for template rendering\n        Template template = templateRepository.findByName(templateName);\n        return templateEngine.process(template.getContent(), new Context(null, params));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Rate limiting (per user, per channel):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class NotificationRateLimiter {\n    private final RedisTemplate<String, String> redis;\n\n    public boolean isAllowed(String userId, NotificationChannel channel, int maxPerMinute) {\n        String key = \"ratelimit:\" + userId + \":\" + channel.name();\n        Long count = redis.opsForValue().increment(key);\n        if (count == 1) {\n            redis.expire(key, 1, TimeUnit.MINUTES);\n        }\n        return count <= maxPerMinute;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Delivery status tracking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\npublic class WebhookController {\n    @PostMapping(\"/webhooks/email\")\n    public ResponseEntity<Void> handleEmailWebhook(@RequestBody EmailEvent event) {\n        notificationService.updateDeliveryStatus(\n            event.notificationId(),\n            switch (event.event()) {\n                case \"delivered\" -> DeliveryStatus.DELIVERED;\n                case \"bounced\", \"dropped\" -> DeliveryStatus.FAILED;\n                case \"opened\" -> DeliveryStatus.READ;\n                default -> DeliveryStatus.SENT;\n            }\n        );\n        return ResponseEntity.ok().build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Support for multiple priority levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HIGH:"
        }), " Retry immediately, alert on-call if failed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MEDIUM:"
        }), " Retry with exponential backoff (3 attempts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LOW:"
        }), " Best-effort delivery, no retry"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "notifications:\n  retry:\n    high:\n      max-attempts: 5\n      backoff: 1s, 2s, 4s, 8s, 16s\n    medium:\n      max-attempts: 3\n      backoff: 5s, 30s, 120s\n    low:\n      max-attempts: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-would-you-design-a-rate-limiter",
      children: "Q5: How would you design a rate limiter?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Limit requests per user/IP within a time window, support different limits per API, return 429 with retry-after header"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Low latency, distributed (works across service instances)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithms:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Token Bucket (most common):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class TokenBucketRateLimiter {\n    private final RedisTemplate<String, String> redis;\n\n    public boolean isAllowed(String key, int capacity, int refillRate, int refillPeriod) {\n        String script = \"\"\"\n            local key = KEYS[1]\n            local now = tonumber(ARGV[1])\n            local capacity = tonumber(ARGV[2])\n            local refillRate = tonumber(ARGV[3])\n            local refillPeriod = tonumber(ARGV[4])\n\n            local bucket = redis.call('HMGET', key, 'tokens', 'lastRefill')\n            local tokens = tonumber(bucket[1]) or capacity\n            local lastRefill = tonumber(bucket[2]) or now\n\n            local elapsed = now - lastRefill\n            local newTokens = math.floor(elapsed / refillPeriod) * refillRate\n            if newTokens > 0 then\n                tokens = math.min(capacity, tokens + newTokens)\n                lastRefill = now\n            end\n\n            if tokens >= 1 then\n                redis.call('HMSET', key, 'tokens', tokens - 1, 'lastRefill', lastRefill)\n                redis.call('EXPIRE', key, math.ceil(refillPeriod * capacity / refillRate))\n                return 1\n            else\n                redis.call('HMSET', key, 'tokens', tokens, 'lastRefill', lastRefill)\n                return 0\n            end\n        \"\"\";\n\n        RedisScript<Long> redisScript = new DefaultRedisScript<>(script, Long.class);\n        Long result = redis.execute(redisScript, List.of(key),\n            String.valueOf(System.currentTimeMillis() / 1000),\n            String.valueOf(capacity), String.valueOf(refillRate),\n            String.valueOf(refillPeriod));\n\n        return result == 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Sliding Window Log:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class SlidingWindowRateLimiter {\n    private final RedisTemplate<String, String> redis;\n\n    public boolean isAllowed(String key, int maxRequests, long windowMs) {\n        long now = System.currentTimeMillis();\n        long windowStart = now - windowMs;\n\n        // Remove timestamps outside the window\n        redis.opsForZSet().removeRangeByScore(key, 0, windowStart);\n\n        // Count requests in current window\n        Long count = redis.opsForZSet().count(key, windowStart, now);\n\n        if (count >= maxRequests) {\n            return false;\n        }\n\n        // Add current request\n        redis.opsForZSet().add(key, String.valueOf(now), now);\n        redis.expire(key, windowMs, TimeUnit.MILLISECONDS);\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Spring Boot interceptor:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RateLimitInterceptor implements HandlerInterceptor {\n    private final RateLimiter rateLimiter;\n\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        String clientId = request.getRemoteAddr();  // or API key, user ID\n        String endpoint = request.getRequestURI();\n\n        if (!rateLimiter.isAllowed(clientId + \":\" + endpoint, 100, 60)) {\n            response.setStatus(429);\n            response.setHeader(\"Retry-After\", \"60\");\n            response.setContentType(\"application/json\");\n            response.getWriter().write(\"{\\\"error\\\":\\\"Rate limit exceeded\\\"}\");\n            return false;\n        }\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-design-a-distributed-cache",
      children: "Q6: How would you design a distributed cache?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Fast key-value access, TTL support, eviction policies, high availability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Low latency (<1ms), high throughput, distributed consistency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Cache-Aside (most common):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class CacheAsideService {\n    private final RedisTemplate<String, Object> redis;\n    private final DatabaseRepository repository;\n\n    public Object get(String key) {\n        // 1. Try cache\n        Object cached = redis.opsForValue().get(key);\n        if (cached != null) {\n            return cached;\n        }\n\n        // 2. Cache miss → load from DB\n        Object value = repository.findById(key);\n\n        // 3. Populate cache\n        if (value != null) {\n            redis.opsForValue().set(key, value, 5, TimeUnit.MINUTES);\n        }\n        return value;\n    }\n\n    public void update(String key, Object value) {\n        // 4. Update DB first, then invalidate cache\n        repository.save(key, value);\n        redis.delete(key);  // Invalidate, don't update (lazy population)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Read-Through:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ReadThroughCache {\n    private final RedisCacheManager cacheManager;\n\n    @Cacheable(value = \"products\", key = \"#productId\", cacheManager = \"redisCacheManager\")\n    public Product getProduct(String productId) {\n        // Cache manager implements the read-through logic\n        return productRepository.findById(productId)\n            .orElseThrow(() -> new ProductNotFoundException(productId));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Write-Through / Write-Behind:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class WriteThroughCache {\n    @CachePut(value = \"products\", key = \"#product.id\")\n    public Product saveProduct(Product product) {\n        return productRepository.save(product);  // Write to DB first\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Cache eviction strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL-based:"
        }), " Expire after fixed time (most common)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LRU (Least Recently Used):"
        }), " Evict oldest accessed items (Redis ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allkeys-lru"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LFU (Least Frequently Used):"
        }), " Evict least accessed items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual invalidation:"
        }), " Explicit delete on data change"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Distributed cache with Redis Cluster:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  data:\n    redis:\n      cluster:\n        nodes:\n          - redis-node1:6379\n          - redis-node2:6379\n          - redis-node3:6379\n      timeout: 2000ms\n      lettuce:\n        pool:\n          max-active: 16\n          max-idle: 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Cache stampede prevention:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class StampedePreventionService {\n    private final RedisTemplate<String, Object> redis;\n\n    public Object getWithMutex(String key, int ttlSeconds, Supplier<Object> loader) {\n        // Try cache first\n        Object cached = redis.opsForValue().get(key);\n        if (cached != null) {\n            return cached;\n        }\n\n        // Try to acquire a lock\n        String lockKey = \"lock:\" + key;\n        Boolean locked = redis.opsForValue().setIfAbsent(lockKey, \"1\", 5, TimeUnit.SECONDS);\n\n        if (Boolean.TRUE.equals(locked)) {\n            try {\n                // Double-check cache\n                Object retryCached = redis.opsForValue().get(key);\n                if (retryCached != null) {\n                    return retryCached;\n                }\n                // Load from source\n                Object value = loader.get();\n                redis.opsForValue().set(key, value, ttlSeconds, TimeUnit.SECONDS);\n                return value;\n            } finally {\n                redis.delete(lockKey);\n            }\n        }\n\n        // Another thread is loading → wait briefly and retry\n        try { Thread.sleep(50); } catch (InterruptedException e) {}\n        return redis.opsForValue().get(key);  // Might still be null → retry in client\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-would-you-design-a-distributed-id-generator",
      children: "Q7: How would you design a distributed ID generator?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Globally unique, monotonically increasing (for indexing), time-ordered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " High availability, 10K+ IDs per second, works across data centers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Snowflake ID (Twitter):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| 1 bit (sign) | 41 bits (timestamp) | 10 bits (worker) | 12 bits (sequence) |\n|--------------|---------------------|------------------|--------------------|\n       0          ms since epoch           worker ID         per-millis counter\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SnowflakeIdGenerator {\n    private final long workerId;\n    private final long datacenterId;\n    private final long epoch = 1700000000000L;\n\n    private long sequence = 0L;\n    private long lastTimestamp = -1L;\n\n    public synchronized long nextId() {\n        long timestamp = System.currentTimeMillis();\n\n        if (timestamp < lastTimestamp) {\n            throw new RuntimeException(\"Clock moved backwards\");\n        }\n\n        if (timestamp == lastTimestamp) {\n            sequence = (sequence + 1) & 0xFFF;  // 12 bits max\n            if (sequence == 0) {\n                timestamp = tilNextMillis(lastTimestamp);\n            }\n        } else {\n            sequence = 0;\n        }\n\n        lastTimestamp = timestamp;\n\n        return ((timestamp - epoch) << 22)\n             | (datacenterId << 17)\n             | (workerId << 12)\n             | sequence;\n    }\n\n    private long tilNextMillis(long lastTimestamp) {\n        long timestamp = System.currentTimeMillis();\n        while (timestamp <= lastTimestamp) {\n            timestamp = System.currentTimeMillis();\n        }\n        return timestamp;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Database Sequence Batch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class BatchIdGenerator {\n    private final JdbcTemplate jdbcTemplate;\n    private long currentId;\n    private long maxId;\n\n    public synchronized long nextId() {\n        if (currentId >= maxId) {\n            allocateBatch();\n        }\n        return currentId++;\n    }\n\n    private void allocateBatch() {\n        // Atomically reserve a batch\n        jdbcTemplate.update(\"UPDATE id_sequence SET next_id = next_id + 1000 WHERE name = 'default'\");\n        Long nextId = jdbcTemplate.queryForObject(\n            \"SELECT next_id - 1000 FROM id_sequence WHERE name = 'default'\", Long.class);\n        this.currentId = nextId;\n        this.maxId = nextId + 1000;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. UUID-based:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Time-based UUID (v7) → ordered, indexed-friendly\npublic String generateId() {\n    return UUID.randomUUID().toString();  // v4 → not ordered\n    // Use UUIDv7 for ordered IDs:\n    // https://github.com/f4b6a3/uuid-creator\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-cap-theorem-and-how-does-it-apply-to-system-design",
      children: "Q8: What is CAP theorem and how does it apply to system design?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CAP theorem states that a distributed system can provide at most two of three guarantees:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency (C)"
        }), " → Every read receives the most recent write or an error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability (A)"
        }), " → Every request receives a response (without guarantee it contains the latest write)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Tolerance (P)"
        }), " → The system continues to operate despite network partitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-offs in practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CP (Consistency + Partition Tolerance):"
      }), " Bank transactions, inventory systems"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use: ZooKeeper, etcd, HBase, MongoDB (with write concern majority)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk: Unavailable during network partition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AP (Availability + Partition Tolerance):"
      }), " Social media feeds, DNS"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use: Cassandra, Amazon DynamoDB, CouchDB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk: Stale reads during partition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The reality:"
      }), " In distributed systems, partitions are unavoidable. So you choose between CP and AP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In practice with databases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// CP: Traditional RDBMS with strong consistency\n@Transactional\npublic void transferMoney(Long fromAccount, Long toAccount, BigDecimal amount) {\n    Account from = accountRepo.findByIdWithLock(fromAccount);  // SELECT FOR UPDATE\n    Account to = accountRepo.findById(toAccount);\n    from.withdraw(amount);\n    to.deposit(amount);\n    accountRepo.save(from);\n    accountRepo.save(to);\n}\n\n// AP: Eventually consistent with Cassandra\n@Service\npublic class EventualConsistencyService {\n    public void updateUserProfile(UserProfile profile) {\n        // Cassandra write with hinted handoff\n        // Read repair on next read\n        profileRepository.save(profile);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application-level compromise (CRDTs / conflict resolution):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ShoppingCartService {\n    // Use CRDT (Conflict-Free Replicated Data Type) for shopping cart\n    private Map<String, Long> mergeCarts(Map<String, Long> local, Map<String, Long> remote) {\n        // Last-writer-wins with timestamp, or merge-add strategy\n        Map<String, Long> merged = new HashMap<>(local);\n        remote.forEach((key, value) -> merged.merge(key, value, Math::max));  // Max quantity wins\n        return merged;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-would-you-design-a-search-system-like-elasticsearch",
      children: "Q9: How would you design a search system (like Elasticsearch)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Full-text search, faceted search, typo tolerance, sorting, pagination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Sub-second search latency, index millions of documents, high availability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core concepts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Inverted index → the heart of search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Document 1: \"The quick brown fox\"\nDocument 2: \"The lazy brown dog\"\n\nInverted index:\n\"brown\" → Document 1, Document 2\n\"quick\" → Document 1\n\"fox\"   → Document 1\n\"lazy\"  → Document 2\n\"dog\"   → Document 2\n\"the\"   → Document 1, Document 2 (stop word, often excluded)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Indexing pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class IndexingService {\n    private final ElasticsearchRestTemplate elasticsearch;\n\n    @Scheduled(fixedDelay = 60000)\n    public void indexNewProducts() {\n        List<Product> products = productRepository.findByIndexedFalse();\n        List<IndexedProduct> docs = products.stream()\n            .map(this::toDocument)\n            .collect(Collectors.toList());\n\n        elasticsearch.save(docs);\n        productRepository.markAsIndexed(products);\n    }\n\n    private IndexedProduct toDocument(Product product) {\n        return new IndexedProduct(\n            product.getId(),\n            product.getName(),\n            product.getDescription(),\n            product.getCategory(),\n            product.getPrice().amount(),\n            product.getTags()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Search API:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class SearchService {\n    private final ElasticsearchRestTemplate elasticsearch;\n\n    public SearchResult<Product> search(SearchRequest request) {\n        NativeSearchQuery query = new NativeSearchQueryBuilder()\n            .withQuery(QueryBuilders.boolQuery()\n                .must(QueryBuilders.multiMatchQuery(request.query())\n                    .field(\"name\", 3.0f)    // Boost name matches\n                    .field(\"description\")\n                    .field(\"tags\"))\n                .filter(QueryBuilders.termQuery(\"category\", request.category()))\n                .filter(QueryBuilders.rangeQuery(\"price\")\n                    .gte(request.minPrice())\n                    .lte(request.maxPrice())))\n            .withPageable(PageRequest.of(request.page(), request.size()))\n            .withSort(Sort.by(request.sortBy()).descending())\n            .build();\n\n        SearchHits<Product> hits = elasticsearch.search(query, Product.class);\n        return new SearchResult<>(\n            hits.getSearchHits().stream()\n                .map(h -> h.getContent())\n                .collect(Collectors.toList()),\n            hits.getTotalHits()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Faceted search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public SearchResult<Product> searchWithFacets(SearchRequest request) {\n    NativeSearchQuery query = new NativeSearchQueryBuilder()\n        .withQuery(QueryBuilders.matchQuery(\"name\", request.query()))\n        .addAggregation(AggregationBuilders.terms(\"by_category\").field(\"category\"))\n        .addAggregation(AggregationBuilders.range(\"by_price\")\n            .field(\"price\")\n            .addRange(0, 50).addRange(50, 100).addRange(100, 500))\n        .build();\n\n    SearchHits<Product> hits = elasticsearch.search(query, Product.class);\n\n    // Extract aggregations\n    Aggregations aggregations = hits.getAggregations();\n    Terms categoryAgg = aggregations.get(\"by_category\");\n    Range priceAgg = aggregations.get(\"by_price\");\n\n    return new SearchResult<>(products, facets);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Autocomplete / suggestions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(\"/suggest\")\npublic List<String> suggest(@RequestParam String prefix) {\n    CompletionSuggestionBuilder suggestion = SuggestBuilders.completionSuggestion(\"suggest\")\n        .prefix(prefix)\n        .size(5);\n\n    SuggestBuilder suggestBuilder = new SuggestBuilder()\n        .addSuggestion(\"product-suggest\", suggestion);\n\n    SearchRequest request = new SearchRequest(\"products\");\n    request.suggest(suggestBuilder);\n\n    // Return suggestions\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-would-you-design-a-distributed-logging-system",
      children: "Q10: How would you design a distributed logging system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application (stdout JSON logs) → Fluentd/Logstash (agent)\n                                       ↓\n                               Kafka (buffer)\n                                       ↓\n                           ┌───────────┴───────────┐\n                           ↓                       ↓\n                      Elasticsearch             S3 (archive)\n                           ↓\n                       Kibana/Grafana\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key decisions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Structured logging format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class StructuredLogging {\n    private static final Logger log = LoggerFactory.getLogger(StructuredLogging.class);\n\n    public void processOrder(Order order) {\n        MDC.put(\"correlationId\", order.getCorrelationId());\n        MDC.put(\"orderId\", order.getId());\n        MDC.put(\"userId\", order.getUserId());\n\n        log.info(\"Processing order\");\n\n        // Structure extra context in the message object\n        log.info(\"Order total calculated\", order.getTotal());\n\n        MDC.clear();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Agent-based collection with Fluentd configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<source>\n  @type tail\n  path /var/log/app/*.log\n  pos_file /var/log/fluentd.pos\n  tag app.logs\n  <parse>\n    @type json\n    time_key @timestamp\n  </parse>\n</source>\n\n<match app.logs>\n  @type kafka2\n  brokers kafka:9092\n  topic_name app-logs\n</match>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Multi-tenancy (different services, different indices):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class LogIndexRouter {\n    public String determineIndex(LogEvent event) {\n        String service = event.getService();\n        String date = LocalDate.now().toString();\n        return \"logs-\" + service + \"-\" + date;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Hot/warm architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hot tier:"
        }), " Recent logs (7 days) on fast SSDs → Elasticsearch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warm tier:"
        }), " Older logs (30 days) on HDDs with replica"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cold tier:"
        }), " Archived logs (1+ year) in S3, queryable via Elasticsearch (frozen indices)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Log levels and sampling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ERROR logs: always collected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WARN logs: always collected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INFO logs: sampled at 10% (too many at high throughput)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DEBUG/TRACE: only enabled per-request (correlation ID filtered)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-would-you-design-a-payment-system",
      children: "Q11: How would you design a payment system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Multiple payment methods, refunds, idempotency, receipts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Exactly-once processing, audit trail, high availability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Idempotency (preventing double charges):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class PaymentService {\n    private final IdempotencyRepository idempotencyRepo;\n\n    @Transactional\n    public PaymentResult processPayment(PaymentRequest request) {\n        // Check idempotency key\n        String idempotencyKey = request.idempotencyKey();\n        if (idempotencyKey != null) {\n            PaymentResult existing = idempotencyRepo.findByIdempotencyKey(idempotencyKey);\n            if (existing != null) {\n                return existing;  // Return previous result (same charge)\n            }\n        }\n\n        // Process payment with payment gateway\n        PaymentResult result = paymentGateway.charge(request);\n\n        // Store with idempotency key\n        if (idempotencyKey != null) {\n            idempotencyRepo.save(idempotencyKey, result);\n        }\n\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Transactional outbox (safely publish events after DB write):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class PaymentOrchestrator {\n    @Transactional\n    public PaymentResult processPayment(PaymentRequest request) {\n        // 1. Save payment to database\n        Payment payment = paymentRepository.save(new Payment(request));\n\n        // 2. Write event to outbox (same transaction!)\n        outboxRepository.save(new OutboxEvent(\n            EventType.PAYMENT_PROCESSED,\n            payment.getId(),\n            objectMapper.writeValueAsString(payment)\n        ));\n\n        return new PaymentResult(payment.getId(), PaymentStatus.PROCESSING);\n    }\n}\n\n// Outbox publisher (separate component)\n@Component\npublic class OutboxPublisher {\n    @Scheduled(fixedRate = 1000)\n    @Transactional\n    public void publishPendingEvents() {\n        List<OutboxEvent> events = outboxRepository.findTop100ByPublishedFalseOrderByCreatedAt();\n        for (OutboxEvent event : events) {\n            try {\n                kafkaTemplate.send(\"payment-events\", event.getPayload());\n                event.markPublished();\n                outboxRepository.save(event);\n            } catch (Exception e) {\n                log.error(\"Failed to publish event: {}\", event.getId(), e);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Payment reconciliation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match internal transaction records with payment gateway reports daily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flag unmatched transactions for manual review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse double-charged transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Refund handling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class RefundService {\n    @Transactional\n    public RefundResult processRefund(String paymentId, BigDecimal amount, String reason) {\n        Payment payment = paymentRepository.findById(paymentId)\n            .orElseThrow(() -> new PaymentNotFoundException(paymentId));\n\n        // Validate refund amount\n        BigDecimal refundedSoFar = payment.getRefunds().stream()\n            .map(Refund::getAmount)\n            .reduce(BigDecimal.ZERO, BigDecimal::add);\n\n        if (refundedSoFar.add(amount).compareTo(payment.getAmount()) > 0) {\n            throw new RefundExceedsAmountException();\n        }\n\n        // Process via gateway\n        GatewayRefundResult result = paymentGateway.refund(payment.getGatewayId(), amount);\n\n        // Save refund record\n        Refund refund = refundRepository.save(new Refund(payment, amount, reason, result.id()));\n\n        return new RefundResult(refund.getId(), RefundStatus.PROCESSED);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-would-you-design-a-recommendation-system",
      children: "Q12: How would you design a recommendation system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Personalized recommendations (products, content), trending items, \"users who bought X also bought Y\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Low latency (<50ms), updates within minutes of new data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Collaborative Filtering:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class CollaborativeFiltering {\n    private final RedisTemplate<String, String> redis;\n\n    // \"Users who bought this also bought...\"\n    public List<String> getAlsoBought(String productId, int limit) {\n        String key = \"also_bought:\" + productId;\n        return redis.opsForZSet().reverseRange(key, 0, limit - 1)\n            .stream()\n            .collect(Collectors.toList());\n    }\n\n    // Update co-occurrence matrix (batch job)\n    @Scheduled(fixedRate = 300000)  // Every 5 minutes\n    public void updateCoOccurrence() {\n        List<Order> recentOrders = orderRepository.findRecentOrders(Duration.ofHours(1));\n        for (Order order : recentOrders) {\n            List<String> productIds = order.getItems().stream()\n                .map(OrderItem::getProductId)\n                .distinct()\n                .collect(Collectors.toList());\n\n            // Increment co-occurrence for each pair\n            for (int i = 0; i < productIds.size(); i++) {\n                for (int j = i + 1; j < productIds.size(); j++) {\n                    redis.opsForZSet().incrementScore(\n                        \"also_bought:\" + productIds.get(i),\n                        productIds.get(j), 1);\n                    redis.opsForZSet().incrementScore(\n                        \"also_bought:\" + productIds.get(j),\n                        productIds.get(i), 1);\n                }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Content-Based Filtering:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ContentBasedRecommender {\n    private final ElasticsearchRestTemplate elasticsearch;\n\n    public List<Product> recommendSimilar(Product viewed, int limit) {\n        NativeSearchQuery query = new NativeSearchQueryBuilder()\n            .withQuery(QueryBuilders.moreLikeThisQuery()\n                .like(new Like(viewed.getId()))\n                .fields(\"name\", \"description\", \"category\", \"tags\")\n                .minTermFreq(1)\n                .minDocFreq(1))\n            .withPageable(PageRequest.of(0, limit))\n            .build();\n\n        return elasticsearch.search(query, Product.class)\n            .getSearchHits().stream()\n            .map(SearchHit::getContent)\n            .collect(Collectors.toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Trending / Popularity:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class TrendingService {\n    private final RedisTemplate<String, String> redis;\n\n    public void recordView(String productId) {\n        // Track view counts, weighted by recency\n        String key = \"trending:\" + LocalDate.now();\n        redis.opsForZSet().incrementScore(key, productId, 1);\n        redis.expire(key, 7, TimeUnit.DAYS);\n    }\n\n    public List<String> getTrending(int limit) {\n        // Decay older days (day 7 weight: 1.0, day 1 weight: ~0.14)\n        Map<String, Double> scores = new HashMap<>();\n        for (int i = 0; i < 7; i++) {\n            String key = \"trending:\" + LocalDate.now().minusDays(i);\n            double decay = Math.pow(0.75, i);  // Exponential decay\n\n            Map<String, Double> dayViews = redis.opsForZSet()\n                .reverseRangeWithScores(key, 0, 99)\n                .stream()\n                .collect(Collectors.toMap(\n                    TypedTuple::getValue,\n                    t -> t.getScore() * decay,\n                    Double::sum\n                ));\n            dayViews.forEach((k, v) -> scores.merge(k, v, Double::sum));\n        }\n\n        return scores.entrySet().stream()\n            .sorted(Map.Entry.<String, Double>comparingByValue().reversed())\n            .limit(limit)\n            .map(Map.Entry::getKey)\n            .collect(Collectors.toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-would-you-design-a-data-pipeline-etl",
      children: "Q13: How would you design a data pipeline (ETL)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Extract from source (DB, API, files), transform, load to destination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Fault tolerance, exactly-once processing, monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture with Kafka + Spring Batch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Extract:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DatabaseExtractor {\n    private final JdbcTemplate jdbcTemplate;\n\n    @Scheduled(cron = \"0 0 */1 * * *\")  // Hourly\n    public void extractOrders() {\n        LocalDateTime lastRun = getLastExtractTime();\n\n        List<Order> newOrders = jdbcTemplate.query(\n            \"SELECT * FROM orders WHERE updated_at > ?\",\n            new Object[]{Timestamp.valueOf(lastRun)},\n            new OrderRowMapper()\n        );\n\n        // Publish to Kafka\n        for (Order order : newOrders) {\n            kafkaTemplate.send(\"raw-orders\", order.getId().toString(), order);\n        }\n\n        updateLastExtractTime(LocalDateTime.now());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Transform (stream processing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderTransformer {\n    @KafkaListener(topics = \"raw-orders\")\n    public void transform(ConsumerRecord<String, String> record) {\n        RawOrder rawOrder = objectMapper.readValue(record.value(), RawOrder.class);\n\n        // Transform\n        EnrichedOrder enriched = new EnrichedOrder(\n            rawOrder.getId(),\n            enrichCustomerData(rawOrder.getCustomerId()),\n            calculateGeography(rawOrder.getIpAddress()),\n            normalizeCurrency(rawOrder.getAmount(), rawOrder.getCurrency()),\n            rawOrder.getCreatedAt()\n        );\n\n        // Publish enriched\n        kafkaTemplate.send(\"enriched-orders\", enriched.id(), objectMapper.writeValueAsString(enriched));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Load (batch):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DataLoader {\n    @KafkaListener(topics = \"enriched-orders\")\n    public void load(String message) {\n        EnrichedOrder order = objectMapper.readValue(message, EnrichedOrder.class);\n        dataWarehouseRepository.save(order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Full ETL with Spring Batch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class OrderEtlJobConfig {\n    @Bean\n    public Job orderEtlJob(JobRepository jobRepository,\n                           Step extractStep, Step transformStep, Step loadStep) {\n        return new JobBuilder(\"orderEtlJob\", jobRepository)\n            .start(extractStep)\n            .next(transformStep)\n            .next(loadStep)\n            .build();\n    }\n\n    @Bean\n    public Step extractStep(JobRepository jobRepository,\n                            PlatformTransactionManager txManager) {\n        return new StepBuilder(\"extract\", jobRepository)\n            .<Order, Order>chunk(1000, txManager)\n            .reader(orderJdbcReader())\n            .writer(orderKafkaWriter())\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-would-you-design-a-task-queue-like-celery",
      children: "Q14: How would you design a task queue (like Celery)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Schedule and execute background tasks with retries, delayed execution, task status tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Reliable delivery, at-least-once execution, scalable workers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "API → Redis Queue → Worker Pods\n        ↓\n   Redis (status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Task definition\npublic record Task(\n    String taskId,\n    String type,\n    String payload,\n    TaskPriority priority,\n    LocalDateTime scheduledAt,\n    int maxRetries,\n    int retryCount\n) {\n    public boolean isRetryable() {\n        return retryCount < maxRetries;\n    }\n}\n\n// Task producer\n@Service\npublic class TaskProducer {\n    private final RedisTemplate<String, String> redis;\n\n    public String enqueue(String taskType, Object payload) {\n        String taskId = UUID.randomUUID().toString();\n        Task task = new Task(\n            taskId,\n            taskType,\n            objectMapper.writeValueAsString(payload),\n            TaskPriority.NORMAL,\n            LocalDateTime.now(),\n            3,\n            0\n        );\n\n        // Add to the queue\n        redis.opsForList().rightPush(\"task:queue\", objectMapper.writeValueAsString(task));\n        return taskId;\n    }\n\n    public String enqueueDelayed(String taskType, Object payload, Duration delay) {\n        String taskId = UUID.randomUUID().toString();\n        Task task = new Task(/* ... scheduledAt: LocalDateTime.now().plus(delay) */);\n\n        // Use a sorted set for delayed tasks\n        redis.opsForZSet().add(\"task:delayed\", objectMapper.writeValueAsString(task),\n            Instant.now().plus(delay).toEpochMilli());\n        return taskId;\n    }\n}\n\n// Task consumer (worker)\n@Component\npublic class TaskWorker {\n    private final RedisTemplate<String, String> redis;\n    private final Map<String, TaskHandler> handlers;\n    private volatile boolean running = true;\n\n    @PostConstruct\n    public void start() {\n        Executors.newSingleThreadExecutor().submit(() -> {\n            while (running) {\n                // 1. Move delayed tasks that are due\n                moveDelayedTasks();\n\n                // 2. Poll for immediate tasks\n                String taskJson = redis.opsForList().leftPop(\"task:queue\", 1, TimeUnit.SECONDS);\n                if (taskJson != null) {\n                    processTask(objectMapper.readValue(taskJson, Task.class));\n                }\n            }\n        });\n    }\n\n    private void processTask(Task task) {\n        try {\n            TaskHandler handler = handlers.get(task.type());\n            if (handler == null) {\n                log.warn(\"No handler for task type: {}\", task.type());\n                return;\n            }\n\n            // Update status\n            redis.opsForValue().set(\"task:status:\" + task.taskId(), \"RUNNING\");\n\n            handler.handle(task);\n\n            redis.opsForValue().set(\"task:status:\" + task.taskId(), \"COMPLETED\");\n        } catch (Exception e) {\n            log.error(\"Task failed: {}\", task.taskId(), e);\n\n            if (task.isRetryable()) {\n                Task retryTask = new Task(\n                    task.taskId(), task.type(), task.payload(),\n                    task.priority(), LocalDateTime.now().plusSeconds(30),\n                    task.maxRetries(), task.retryCount() + 1\n                );\n                redis.opsForList().rightPush(\"task:queue\", objectMapper.writeValueAsString(retryTask));\n            } else {\n                redis.opsForValue().set(\"task:status:\" + task.taskId(), \"FAILED\");\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-would-you-design-a-distributed-job-scheduler",
      children: "Q15: How would you design a distributed job scheduler?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Schedule recurring jobs (hourly cleanup, daily report), manual trigger, prevent double execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Exactly-once execution across nodes, cron-like flexibility, monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Database-based distributed lock:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DatabaseJobScheduler {\n    private final JdbcTemplate jdbcTemplate;\n\n    @Scheduled(cron = \"0 0 * * * *\")  // Every hour\n    @Transactional\n    public void runHourlyCleanup() {\n        // Try to acquire a lock (database row-level lock)\n        int updated = jdbcTemplate.update(\n            \"UPDATE job_locks SET locked_at = NOW(), locked_by = ? \" +\n            \"WHERE job_name = 'hourly_cleanup' AND \" +\n            \"(locked_at IS NULL OR locked_at < NOW() - INTERVAL '59 minutes')\",\n            getInstanceId()\n        );\n\n        if (updated == 0) {\n            log.info(\"Another instance is running hourly cleanup, skipping\");\n            return;\n        }\n\n        try {\n            // Execute the job\n            cleanupService.runHourlyCleanup();\n        } finally {\n            jdbcTemplate.update(\n                \"UPDATE job_locks SET locked_at = NULL, locked_by = NULL \" +\n                \"WHERE job_name = 'hourly_cleanup' AND locked_by = ?\",\n                getInstanceId()\n            );\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Redis-based distributed lock:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RedisJobScheduler {\n    private final RedisTemplate<String, String> redis;\n\n    @Scheduled(cron = \"0 0 2 * * *\")  // Every day at 2 AM\n    public void runDailyReport() {\n        String lockKey = \"job:lock:daily_report\";\n        String lockValue = UUID.randomUUID().toString();\n\n        Boolean acquired = redis.opsForValue()\n            .setIfAbsent(lockKey, lockValue, Duration.ofHours(2));\n\n        if (Boolean.FALSE.equals(acquired)) {\n            log.info(\"Daily report already running on another instance\");\n            return;\n        }\n\n        try {\n            reportService.generateDailyReport();\n        } finally {\n            // Release lock (only if we still hold it)\n            String storedValue = redis.opsForValue().get(lockKey);\n            if (lockValue.equals(storedValue)) {\n                redis.delete(lockKey);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Quartz Scheduler (distributed, persistent):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class QuartzConfig {\n    @Bean\n    public SchedulerFactoryBean schedulerFactoryBean(DataSource dataSource) {\n        SchedulerFactoryBean factory = new SchedulerFactoryBean();\n        factory.setDataSource(dataSource);\n        factory.setQuartzProperties(properties());\n        return factory;\n    }\n\n    private Properties properties() {\n        Properties props = new Properties();\n        props.setProperty(\"org.quartz.scheduler.instanceName\", \"MyScheduler\");\n        props.setProperty(\"org.quartz.scheduler.instanceId\", \"AUTO\");\n        props.setProperty(\"org.quartz.jobStore.class\", \"org.quartz.impl.jdbcjobstore.JobStoreTX\");\n        props.setProperty(\"org.quartz.jobStore.isClustered\", \"true\");\n        return props;\n    }\n}\n\npublic class DailyReportJob implements Job {\n    public void execute(JobExecutionContext context) {\n        reportService.generateDailyReport();\n    }\n}\n\n// Schedule the job\n@Service\npublic class JobInitializer {\n    @PostConstruct\n    public void scheduleJobs() throws SchedulerException {\n        JobDetail job = JobBuilder.newJob(DailyReportJob.class)\n            .withIdentity(\"dailyReport\")\n            .build();\n\n        Trigger trigger = TriggerBuilder.newTrigger()\n            .withSchedule(CronScheduleBuilder.dailyAtHourAndMinute(2, 0))\n            .build();\n\n        scheduler.scheduleJob(job, trigger);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-would-you-design-a-distributed-file-storage-system",
      children: "Q16: How would you design a distributed file storage system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Upload/download files, metadata management, access control, thumbnails (images)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " High durability (multiple copies), low latency reads, scalable storage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client → API Gateway → File Service → Metadata DB (PostgreSQL)\n                                     → Object Storage (S3/MinIO)\n                                     → CDN for reads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class FileMetadata {\n    @Id private String fileId;\n    private String fileName;\n    private long fileSize;\n    private String mimeType;\n    private String storageKey;     // S3 key\n    private String storageBucket;  // S3 bucket\n    private String checksum;       // SHA-256 for integrity\n    private FileStatus status;     // UPLOADING, AVAILABLE, DELETED\n    private LocalDateTime createdAt;\n}\n\n@Service\npublic class FileService {\n    private final AmazonS3 s3Client;\n    private final FileMetadataRepository metadataRepo;\n\n    public FileUploadResponse initiateUpload(String fileName, long fileSize, String mimeType) {\n        // Generate pre-signed URL for direct upload to S3\n        String fileId = UUID.randomUUID().toString();\n        String storageKey = generateStorageKey(fileId, fileName);\n\n        Date expiration = new Date(System.currentTimeMillis() + 3600_000);  // 1 hour\n        GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(bucket, storageKey)\n            .withMethod(HttpMethod.PUT)\n            .withExpiration(expiration);\n\n        URL uploadUrl = s3Client.generatePresignedUrl(request);\n\n        // Save metadata\n        metadataRepo.save(new FileMetadata(fileId, fileName, fileSize, mimeType, storageKey));\n\n        return new FileUploadResponse(fileId, uploadUrl.toString());\n    }\n\n    public FileDownloadResponse getDownloadUrl(String fileId) {\n        FileMetadata metadata = metadataRepo.findById(fileId)\n            .orElseThrow(() -> new FileNotFoundException(fileId));\n\n        // Generate temporary download URL (with CDN if configured)\n        Date expiration = new Date(System.currentTimeMillis() + 3600_000);\n        GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(\n                metadata.getStorageBucket(), metadata.getStorageKey())\n            .withMethod(HttpMethod.GET)\n            .withExpiration(expiration);\n\n        URL downloadUrl = s3Client.generatePresignedUrl(request);\n        return new FileDownloadResponse(downloadUrl.toString(), metadata);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chunked upload for large files:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ChunkedUploadService {\n    private final AmazonS3 s3Client;\n\n    public String initiateMultipartUpload(String fileName) {\n        InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucket, fileName);\n        InitiateMultipartUploadResult result = s3Client.initiateMultipartUpload(request);\n        return result.getUploadId();\n    }\n\n    public UploadPartResponse uploadPart(String uploadId, String fileName,\n                                          int partNumber, InputStream data) {\n        UploadPartRequest request = new UploadPartRequest()\n            .withBucketName(bucket)\n            .withKey(fileName)\n            .withUploadId(uploadId)\n            .withPartNumber(partNumber)\n            .withInputStream(data)\n            .withPartSize(data.available());\n\n        UploadPartResult result = s3Client.uploadPart(request);\n        return new UploadPartResponse(partNumber, result.getPartETag());\n    }\n\n    public void completeMultipartUpload(String uploadId, String fileName,\n                                         List<UploadPartResponse> parts) {\n        CompleteMultipartUploadRequest request = new CompleteMultipartUploadRequest(\n            bucket, fileName, uploadId,\n            parts.stream()\n                .map(p -> new PartETag(p.partNumber(), p.eTag()))\n                .collect(Collectors.toList())\n        );\n        s3Client.completeMultipartUpload(request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-would-you-design-a-leader-election-system",
      children: "Q17: How would you design a leader election system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " One node acts as leader, monitors health, auto-failover"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Avoid split-brain, fast failover (<5s)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. ZooKeeper-based leader election:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ZookeeperLeaderElection implements LeaderElection {\n    private final CuratorFramework client;\n    private LeaderLatch leaderLatch;\n    private volatile boolean isLeader = false;\n\n    @PostConstruct\n    public void start() throws Exception {\n        leaderLatch = new LeaderLatch(client, \"/election/node\");\n        leaderLatch.addListener(this::onLeadershipChange);\n        leaderLatch.start();\n    }\n\n    private void onLeadershipChange(LeaderLatchListener listener) {\n        isLeader = leaderLatch.hasLeadership();\n        if (isLeader) {\n            log.info(\"This instance is now the leader\");\n            startLeaderTasks();\n        } else {\n            log.info(\"This instance is now a follower\");\n            stopLeaderTasks();\n        }\n    }\n\n    @Override\n    public boolean isLeader() {\n        return isLeader;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Database-based election (simpler but less robust):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DatabaseLeaderElection {\n    private final JdbcTemplate jdbcTemplate;\n    private volatile boolean isLeader = false;\n\n    @Scheduled(fixedRate = 5000)\n    @Transactional\n    public void heartbeat() {\n        // Renew our lease\n        jdbcTemplate.update(\n            \"INSERT INTO leader_election (instance_id, last_heartbeat) VALUES (?, NOW()) \" +\n            \"ON CONFLICT (id) DO UPDATE SET last_heartbeat = NOW() WHERE id = 1\",\n            getInstanceId()\n        );\n\n        // Check if we are the leader\n        String leaderId = jdbcTemplate.queryForObject(\n            \"SELECT instance_id FROM leader_election WHERE id = 1 \" +\n            \"AND last_heartbeat > NOW() - INTERVAL '10 seconds'\",\n            String.class\n        );\n\n        boolean wasLeader = isLeader;\n        isLeader = getInstanceId().equals(leaderId);\n\n        if (isLeader && !wasLeader) {\n            log.info(\"Became leader\");\n            startLeaderTasks();\n        } else if (!isLeader && wasLeader) {\n            log.info(\"Lost leadership\");\n            stopLeaderTasks();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Redis-based election:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RedisLeaderElection {\n    private final RedisTemplate<String, String> redis;\n    private final String instanceId = UUID.randomUUID().toString();\n\n    @Scheduled(fixedRate = 3000)\n    public void heartbeat() {\n        // Try to become leader\n        Boolean acquired = redis.opsForValue()\n            .setIfAbsent(\"leader\", instanceId, Duration.ofSeconds(10));\n\n        if (Boolean.TRUE.equals(acquired)) {\n            onLeadershipGained();\n            return;\n        }\n\n        // Check if we are the leader (renew lease)\n        String currentLeader = redis.opsForValue().get(\"leader\");\n        if (instanceId.equals(currentLeader)) {\n            redis.expire(\"leader\", 10, TimeUnit.SECONDS);\n        } else {\n            onLeadershipLost();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-would-you-design-a-content-delivery-network-cdn",
      children: "Q18: How would you design a content delivery network (CDN)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Origin server:"
        }), " Source of truth for content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge servers:"
        }), " Cache content at geographically distributed locations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pull CDN:"
        }), " Cache fills when user requests content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push CDN:"
        }), " Content is preloaded onto edges"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design for image/video serving:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Image processing on upload\n@Service\npublic class ImageProcessingService {\n    public void processImage(String fileId, InputStream imageData) {\n        // Create multiple resolutions\n        Map<String, byte[]> variants = Map.of(\n            \"thumbnail\", resize(imageData, 150, 150),\n            \"medium\", resize(imageData, 600, 600),\n            \"large\", resize(imageData, 1200, 1200),\n            \"original\", toBytes(imageData)\n        );\n\n        // Store each variant with CDN-friendly naming\n        for (var entry : variants.entrySet()) {\n            String s3Key = String.format(\"images/%s/%s.webp\", fileId, entry.getKey());\n            s3Client.putObject(bucket, s3Key, entry.getValue());\n        }\n\n        // Invalidate CDN cache for this file\n        cdnService.purge(\"images/\" + fileId + \"/*\");\n    }\n}\n\n// Serve the appropriate resolution\n@RestController\npublic class ImageController {\n    @GetMapping(\"/images/{fileId}\")\n    public ResponseEntity<Resource> getImage(\n            @PathVariable String fileId,\n            @RequestParam(defaultValue = \"medium\") String size) {\n        // This is behind a CDN → CDN caches the response\n        String s3Key = String.format(\"images/%s/%s.webp\", fileId, size);\n        S3Object object = s3Client.getObject(bucket, s3Key);\n\n        return ResponseEntity.ok()\n            .cacheControl(CacheControl.maxAge(365, TimeUnit.DAYS).cachePublic())\n            .contentType(MediaType.valueOf(\"image/webp\"))\n            .body(new InputStreamResource(object.getObjectContent()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache headers (critical for CDN effectiveness):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(\"/api/products\")\npublic ResponseEntity<List<Product>> getProducts() {\n    List<Product> products = productService.findAll();\n\n    return ResponseEntity.ok()\n        // CDN will cache this for 5 minutes\n        .cacheControl(CacheControl.maxAge(5, TimeUnit.MINUTES))\n        // Browser can use cached version for 30 seconds\n        .header(\"Cache-Control\", \"public, max-age=300, s-maxage=60\")\n        // CDN serves stale content while revalidating\n        .header(\"Cache-Control\", \"stale-while-revalidate=120\")\n        .body(products);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-would-you-design-an-api-gateway",
      children: "Q19: How would you design an API gateway?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Route requests to appropriate microservices, authentication, rate limiting, request/response transformation, API composition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Low latency (<5ms added), high throughput, failure isolation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Cloud Gateway implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  cloud:\n    gateway:\n      routes:\n        - id: order-service\n          uri: lb://order-service\n          predicates:\n            - Path=/api/orders/**\n          filters:\n            - name: CircuitBreaker\n              args:\n                name: orderServiceCircuitBreaker\n                fallbackUri: forward:/fallback/orders\n            - name: RequestRateLimiter\n              args:\n                redis-rate-limiter.replenishRate: 100\n                redis-rate-limiter.burstCapacity: 200\n\n        - id: product-service\n          uri: lb://product-service\n          predicates:\n            - Path=/api/products/**\n          filters:\n            - StripPrefix=1\n\n        - id: auth-service\n          uri: lb://auth-service\n          predicates:\n            - Path=/api/auth/**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom filters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class AuthenticationFilter implements GlobalFilter, Ordered {\n    private final JwtTokenProvider tokenProvider;\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        // Skip auth for public endpoints\n        if (isPublicEndpoint(exchange.getRequest().getPath().toString())) {\n            return chain.filter(exchange);\n        }\n\n        String token = extractToken(exchange.getRequest());\n        if (token == null || !tokenProvider.validateToken(token)) {\n            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);\n            return exchange.getResponse().setComplete();\n        }\n\n        // Add user info to headers for downstream services\n        Claims claims = tokenProvider.getClaims(token);\n        exchange.getRequest().mutate()\n            .header(\"X-User-Id\", claims.getSubject())\n            .header(\"X-User-Roles\", String.join(\",\", claims.get(\"roles\", List.class)));\n\n        return chain.filter(exchange);\n    }\n}\n\n// API composition (aggregate data from multiple services)\n@Component\npublic class ProductDetailsAggregator {\n    public Mono<ProductDetails> getProductDetails(String productId) {\n        return Mono.zip(\n            productClient.getProduct(productId),\n            inventoryClient.getStock(productId),\n            reviewClient.getReviews(productId, PageRequest.of(0, 5)),\n            priceClient.getPrice(productId)\n        ).map(tuple -> new ProductDetails(\n            tuple.getT1(),\n            tuple.getT2(),\n            tuple.getT3(),\n            tuple.getT4()\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-would-you-design-a-distributed-configuration-system",
      children: "Q20: How would you design a distributed configuration system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Centralized config management, dynamic updates (no restart), environment-specific configs, secrets management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " High availability, low latency reads, audit trail"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Cloud Config with Git backend:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Config Server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@EnableConfigServer\n@SpringBootApplication\npublic class ConfigServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigServerApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml (config server)\n\n> **Previous:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md) | **Next:** [Behavioral Interview Q&amp;A](./66-interview-behavioral.md)\nspring:\n  cloud:\n    config:\n      server:\n        git:\n          uri: https://github.com/company/config-repo\n          search-paths: '{application}'\n          default-label: main\n  security:\n    user:\n      name: config-client\n      password: ${CONFIG_SERVER_PASSWORD}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Repository structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "config-repo/\n├── order-service.yml          (shared config)\n├── order-service-dev.yml      (dev overrides)\n├── order-service-prod.yml     (prod overrides)\n├── product-service.yml\n└── application.yml            (shared across all services)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Config Client:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  application:\n    name: order-service\n  cloud:\n    config:\n      uri: http://config-server:8888\n      fail-fast: true\n      retry:\n        initial-interval: 1000\n        multiplier: 1.5\n        max-attempts: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Dynamic refresh without restart:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RefreshScope  // Bean is recreated when /actuator/refresh is called\npublic class FeatureController {\n    @Value(\"${features.new-checkout-flow:false}\")\n    private boolean newCheckoutFlow;\n\n    @GetMapping(\"/features/checkout\")\n    public boolean isNewCheckoutEnabled() {\n        return newCheckoutFlow;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Trigger refresh across all instances\n\n> **Previous:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md) | **Next:** [Behavioral Interview Q&amp;A](./66-interview-behavioral.md)\ncurl -X POST http://order-service:8080/actuator/refresh\n\n# Or use Spring Cloud Bus for broadcast to all instances\n\n> **Previous:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md) | **Next:** [Behavioral Interview Q&amp;A](./66-interview-behavioral.md)\ncurl -X POST http://order-service:8080/actuator/busrefresh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-how-would-you-design-a-service-discovery-system",
      children: "Q21: How would you design a service discovery system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Services register themselves, clients discover service instances, health checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Fast failure detection (<15s), eventual consistency, no single point of failure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Client-side discovery (Eureka):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Eureka server\n\n> **Previous:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md) | **Next:** [Behavioral Interview Q&amp;A](./66-interview-behavioral.md)\nserver:\n  port: 8761\neureka:\n  client:\n    register-with-eureka: false\n    fetch-registry: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Eureka client (each microservice)\n\n> **Previous:** [Design Patterns Interview Q&amp;A](./64-interview-design-patterns.md) | **Next:** [Behavioral Interview Q&amp;A](./66-interview-behavioral.md)\neureka:\n  client:\n    service-url:\n      defaultZone: http://eureka1:8761/eureka/,http://eureka2:8762/eureka/\n  instance:\n    lease-renewal-interval-in-seconds: 10   # Heartbeat every 10s\n    lease-expiration-duration-in-seconds: 30 # Evict after 30s of no heartbeat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Server-side discovery (Kubernetes):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// In Kubernetes, Service discovery is built-in via DNS\n// A service named \"order-service\" is resolvable as:\n//   order-service (same namespace)\n//   order-service.default.svc.cluster.local (full DNS)\n\n@Bean\n@LoadBalanced\npublic RestClient.Builder restClientBuilder() {\n    return RestClient.builder();\n}\n\n// Usage → just use the service name\n@Service\npublic class OrderClient {\n    private final RestClient restClient;\n\n    public OrderClient(RestClient.Builder builder) {\n        this.restClient = builder.baseUrl(\"http://order-service\").build();\n    }\n\n    public Order getOrder(Long id) {\n        return restClient.get()\n            .uri(\"/api/orders/{id}\", id)\n            .retrieve()\n            .body(Order.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-how-would-you-design-a-distributed-tracing-system",
      children: "Q22: How would you design a distributed tracing system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Trace a request across microservices, visualize bottlenecks, drill into spans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Minimal overhead ( < 1% CPU), sampling for high-throughput services"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenTelemetry + Micrometer Tracing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  tracing:\n    sampling:\n      probability: 0.0\n      probability: 0.1  # Sample 10% of requests\n  zipkin:\n    tracing:\n      endpoint: http://tempo:9411/api/v2/spans\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual tracing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n    private final Tracer tracer;\n    private final RestClient inventoryClient;\n\n    @Autowired\n    public OrderService(Tracer tracer, @LoadBalanced RestClient.Builder builder) {\n        this.tracer = tracer;\n        this.inventoryClient = builder.baseUrl(\"http://inventory-service\").build();\n    }\n\n    @Transactional\n    public Order placeOrder(OrderRequest request) {\n        // Automatic trace from HTTP request\n\n        // Create a custom span for a specific operation\n        Span checkSpan = tracer.spanBuilder(\"check-inventory\")\n            .setAttribute(\"order.id\", request.orderId())\n            .setAttribute(\"items.count\", request.items().size())\n            .startSpan();\n\n        try (Scope scope = checkSpan.makeCurrent()) {\n            // This HTTP call will be a child span of check-inventory\n            InventoryStatus status = inventoryClient.get()\n                .uri(\"/api/inventory/check\")\n                .body(request.items())\n                .retrieve()\n                .body(InventoryStatus.class);\n\n            checkSpan.setAttribute(\"inventory.available\", status.available());\n        } catch (Exception e) {\n            checkSpan.recordException(e);\n            throw e;\n        } finally {\n            checkSpan.end();  // Close the span\n        }\n\n        return saveOrder(request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-how-would-you-design-a-content-management-system-cms",
      children: "Q23: How would you design a content management system (CMS)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content model:"
        }), " Flexible schemas (pages, blog posts, products)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content API:"
        }), " CRUD operations, versioning, publishing workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delivery API:"
        }), " High-performance read-only API for frontend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Media management:"
        }), " Image upload, optimization, CDN integration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flexible content model:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class ContentType {\n    @Id private String id;  // \"article\", \"page\", \"product\"\n    private String name;\n    private String schema;  // JSON schema defining fields\n}\n\n@Entity\npublic class ContentEntry {\n    @Id private String id;\n    private String contentTypeId;\n    private String title;\n    private String slug;\n    private String status;  // DRAFT, PUBLISHED, ARCHIVED\n    private int version;\n\n    @Column(columnDefinition = \"jsonb\")\n    private String fields;  // JSON field values according to schema\n\n    private String createdBy;\n    private LocalDateTime publishedAt;\n    private LocalDateTime createdAt;\n    private LocalDateTime updatedAt;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ContentService {\n    @Transactional\n    public ContentEntry publish(String entryId) {\n        ContentEntry entry = repository.findById(entryId)\n            .orElseThrow(() -> new NotFoundException(entryId));\n\n        // Snapshot current version\n        ContentVersion version = new ContentVersion(\n            entry.getId(), entry.getVersion(), entry.getFields()\n        );\n        versionRepository.save(version);\n\n        // Increment version and publish\n        entry.setVersion(entry.getVersion() + 1);\n        entry.setStatus(\"PUBLISHED\");\n        entry.setPublishedAt(LocalDateTime.now());\n\n        // Invalidate CDN cache for this slug\n        cdnService.purge(\"content/\" + entry.getSlug());\n\n        return repository.save(entry);\n    }\n\n    public ContentEntry rollback(String entryId, int targetVersion) {\n        ContentVersion version = versionRepository\n            .findByEntryIdAndVersion(entryId, targetVersion);\n        // Restore fields from version snapshot\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-would-you-design-a-social-media-feed",
      children: "Q24: How would you design a social media feed?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Infinite scroll feed, chronological or algorithmic, like/share/comment, notifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Low latency load (<1s), handle millions of users, push vs pull"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Pull-based feed (for non-real-time):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/feed\")\npublic class FeedController {\n    @GetMapping\n    public FeedResponse getFeed(@RequestParam String userId,\n                                 @RequestParam(required = false) String cursor,\n                                 @RequestParam(defaultValue = \"20\") int limit) {\n        // Get posts from followed users, ordered by time\n        List<Post> posts = feedService.getFeed(userId, cursor, limit);\n        return new FeedResponse(posts, posts.get(posts.size() - 1).getId());\n    }\n}\n\n@Service\npublic class FeedService {\n    public List<Post> getFeed(String userId, String cursor, int limit) {\n        List<String> followedUserIds = followRepository.findFollowedIds(userId);\n        followedUserIds.add(userId);  // Include own posts\n\n        return postRepository.findByUserIdInAndIdLessThanOrderByIdDesc(\n            followedUserIds,\n            cursor != null ? Long.parseLong(cursor) : Long.MAX_VALUE,\n            PageRequest.of(0, limit)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Push-based feed (fanout on write):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class FeedFanoutService {\n    private final RedisTemplate<String, String> redis;\n\n    @Async\n    public void fanoutPost(Post post, List<String> followerIds) {\n        // Only fanout to active users (recently seen)\n        List<String> activeFollowers = followerIds.stream()\n            .filter(id -> isRecentlyActive(id))\n            .collect(Collectors.toList());\n\n        // Push post to each follower's feed list\n        for (String followerId : activeFollowers) {\n            String feedKey = \"feed:\" + followerId;\n            redis.opsForList().leftPush(feedKey, post.getId().toString());\n            redis.lTrim(feedKey, 0, 999);  // Keep only 1000 most recent posts\n        }\n    }\n\n    @GetMapping\n    public FeedResponse getFeed(String userId, int page, int size) {\n        String feedKey = \"feed:\" + userId;\n        long start = (long) page * size;\n        long end = start + size - 1;\n\n        List<String> postIds = redis.opsForList().range(feedKey, start, end);\n        List<Post> posts = postRepository.findAllById(\n            postIds.stream().map(Long::parseLong).collect(Collectors.toList())\n        );\n        return new FeedResponse(posts);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-how-would-you-design-a-ticket-booking-system",
      children: "Q25: How would you design a ticket booking system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functional:"
        }), " Search events, select seats, book tickets, prevent double booking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-functional:"
        }), " Handle flash sales, prevent overselling, strong consistency for seat inventory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key challenges and solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Seat locking with Redis + DB:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class TicketBookingService {\n    private final RedisTemplate<String, String> redis;\n    private final TicketRepository ticketRepo;\n\n    @Transactional\n    public BookingResult bookSeats(String eventId, List<String> seatIds, String userId) {\n        // 1. Lock all seats in Redis\n        List<String> lockedSeats = new ArrayList<>();\n        try {\n            for (String seatId : seatIds) {\n                String lockKey = \"seat:lock:\" + eventId + \":\" + seatId;\n                Boolean locked = redis.opsForValue()\n                    .setIfAbsent(lockKey, userId, Duration.ofMinutes(10));\n\n                if (Boolean.FALSE.equals(locked)) {\n                    // Seat already locked → fail the whole booking\n                    return BookingResult.failed(\"Seat \" + seatId + \" is not available\");\n                }\n                lockedSeats.add(seatId);\n            }\n\n            // 2. Double-check in database (optimistic locking)\n            int updated = ticketRepo.reserveSeats(eventId, seatIds, userId);\n            if (updated != seatIds.size()) {\n                throw new SeatNotAvailableException();\n            }\n\n            // 3. Confirm booking\n            Booking booking = bookingRepo.save(new Booking(eventId, userId, seatIds));\n            return BookingResult.success(booking);\n        } finally {\n            // Release Redis locks\n            for (String seatId : lockedSeats) {\n                String lockKey = \"seat:lock:\" + eventId + \":\" + seatId;\n                redis.delete(lockKey);\n            }\n        }\n    }\n}\n\n// Atomic seat reservation with optimistic lock\n@Entity\npublic class Ticket {\n    @Id private Long id;\n    private String eventId;\n    private String seatId;\n    private String status;  // AVAILABLE, RESERVED, BOOKED\n    @Version private Long version;\n\n    public boolean reserve(String userId) {\n        if (!\"AVAILABLE\".equals(this.status)) {\n            return false;\n        }\n        this.status = \"RESERVED\";\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Queue system for flash sales:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class FlashSaleQueue {\n    private final RedisTemplate<String, String> redis;\n\n    public String enqueue(String eventId, String userId) {\n        // Add user to queue\n        String queueKey = \"flash:sale:\" + eventId;\n        String queueId = UUID.randomUUID().toString();\n\n        redis.opsForZSet().add(queueKey, userId + \":\" + queueId, System.currentTimeMillis());\n\n        // Get position\n        Long position = redis.opsForZSet().rank(queueKey, userId + \":\" + queueId);\n        return queueId;\n    }\n\n    public Long getPosition(String eventId, String queueId) {\n        String queueKey = \"flash:sale:\" + eventId;\n        return redis.opsForZSet().rank(queueKey, \"*:\" + queueId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-what-is-the-difference-between-sql-and-nosql-databases-in-system-design",
      children: "Q26: What is the difference between SQL and NoSQL databases in system design?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL (PostgreSQL, MySQL)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NoSQL (MongoDB, Cassandra)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed, enforced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, dynamic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOINs, foreign keys, normalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized, embedded docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual (or tunable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (with read replicas)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (sharding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, advanced (GIN, GiST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies (B-tree, LSM tree)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (standardized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary (MongoDB query, CQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (document-level)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial, ERP, structured data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User profiles, activity feeds, IoT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// SQL: Strong consistency for transactions\n@Transactional\npublic void transferMoney(Long fromId, Long toId, BigDecimal amount) {\n    Account from = accountRepo.findByIdWithLock(fromId);  // SELECT FOR UPDATE\n    Account to = accountRepo.findById(toId);\n    from.withdraw(amount);\n    to.deposit(amount);\n}\n\n// NoSQL: High write throughput, eventual consistency OK\n@Service\npublic class UserActivityService {\n    public void recordActivity(String userId, Activity activity) {\n        // Cassandra → high write throughput\n        activityRepository.save(new UserActivity(userId, activity, Instant.now()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-how-would-you-design-a-database-sharding-strategy",
      children: "Q27: How would you design a database sharding strategy?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding splits data across multiple databases horizontally based on a shard key."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Hash-based sharding:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class HashShardRouter {\n    private static final int SHARD_COUNT = 16;\n\n    public String getShardKey(Long userId) {\n        return \"shard_\" + (userId % SHARD_COUNT);\n    }\n\n    public DataSource getDataSource(Long userId) {\n        int shard = (userId.hashCode() & Integer.MAX_VALUE) % SHARD_COUNT;\n        return dataSourceMap.get(\"shard_\" + shard);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Range-based sharding"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Shard 1: users 1-1,000,000\n// Shard 2: users 1,000,001-2,000,000\n// Shard 3: users 2,000,001+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Directory-based sharding:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DirectoryShardRouter {\n    private final Map<String, String> shardLookup = new ConcurrentHashMap<>();\n\n    public String getShardForKey(String key) {\n        return shardLookup.computeIfAbsent(key, k -> assignShard(k));\n    }\n\n    private String assignShard(String key) {\n        // Look up or determine shard assignment\n        // Store mapping in ZooKeeper / etcd\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common challenges:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resharding:"
        }), " Moving data when adding shards. Use consistent hashing to minimize data movement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-shard queries:"
        }), " Avoid JOINs across shards → denormalize or use application-level aggregation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shard key selection:"
        }), " Choose a key that distributes data evenly and matches query patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-how-would-you-design-a-database-replication-strategy",
      children: "Q28: How would you design a database replication strategy?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Single Leader (Master-Slave):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Read from replica, write to master\n@Service\npublic class ReplicationService {\n    @Autowired\n    @Qualifier(\"masterDataSource\")\n    private DataSource master;\n\n    @Autowired\n    @Qualifier(\"replicaDataSource\")\n    private DataSource replica;\n\n    @Transactional(readOnly = true)\n    public Order getOrder(Long id) {\n        // Read from replica (eventually consistent)\n        return new JdbcTemplate(replica)\n            .queryForObject(\"SELECT * FROM orders WHERE id = ?\", orderMapper, id);\n    }\n\n    @Transactional\n    public Order saveOrder(Order order) {\n        // Write to master\n        return orderRepository.save(order);  // Uses master datasource\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Multi-Leader:"
      }), " Each data center has a writable leader that replicates to other data centers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Leaderless (Cassandra):"
      }), " Any node can accept writes. Read repair ensures eventual consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication lag handling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Read-after-write consistency\n@Service\npublic class ConsistentReadService {\n    @Transactional\n    public Order createAndReadOrder(Order order) {\n        // Write\n        Order saved = orderRepository.save(order);\n\n        // Read from master (bypass replica lag)\n        return orderRepository.findByIdFromMaster(saved.getId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-how-would-you-design-a-monitoring-and-alerting-system",
      children: "Q29: How would you design a monitoring and alerting system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application → Prometheus (scrape metrics) → AlertManager → Slack/PagerDuty\n                                              ↓\n                                          Grafana (dashboards)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Metric collection (Prometheus exporters):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class CustomMetrics {\n    private final MeterRegistry registry;\n    private final Counter errorCounter;\n    private final Gauge activeUsers;\n\n    public CustomMetrics(MeterRegistry registry) {\n        this.registry = registry;\n\n        // Counter\n        this.errorCounter = Counter.builder(\"api.errors\")\n            .tag(\"service\", \"order-service\")\n            .register(registry);\n\n        // Gauge\n        this.activeUsers = Gauge.builder(\"app.active_users\", this, CustomMetrics::getActiveUsers)\n            .register(registry);\n    }\n\n    // Timer\n    public <T> T measureOrderCreation(Supplier<T> action) {\n        return Timer.builder(\"order.creation.time\")\n            .publishPercentiles(0.95, 0.99)\n            .register(registry)\n            .record(action);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Alerting rules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "groups:\n  - name: service-alerts\n    rules:\n      - alert: HighErrorRate\n        expr: |\n          rate(http_server_requests_seconds_count{status=~\"5..\"}[5m])\n          / rate(http_server_requests_seconds_count[5m]) > 0.05\n        for: 5m\n        labels:\n          severity: critical\n        annotations:\n          summary: \"Error rate above 5%\"\n          description: \"Service {{ $labels.service }} has error rate {{ $value | humanizePercentage }}\"\n\n      - alert: HighLatency\n        expr: |\n          histogram_quantile(0.99, rate(http_server_requests_seconds_bucket[5m])) > 2\n        for: 10m\n        labels:\n          severity: warning\n        annotations:\n          summary: \"p99 latency above 2 seconds\"\n\n      - alert: InstanceDown\n        expr: up{job=\"order-service\"} == 0\n        for: 1m\n        labels:\n          severity: critical\n        annotations:\n          summary: \"Instance {{ $labels.instance }} is down\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-what-are-the-trade-offs-between-rest-graphql-and-grpc",
      children: "Q30: What are the trade-offs between REST, GraphQL, and gRPC?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "gRPC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data fetching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed response structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client specifies fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed structure (Proto)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Over-fetching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (binary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Under-fetching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common (N+1 requests)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminated (single query)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI spec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".proto required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL or header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evolve schema, deprecate fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must update .proto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP caching (natural)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (field-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (SSE, chunked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscriptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (bidirectional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON parsing overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex query parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (binary, HTTP/2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tooling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (curl, browser)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (GraphiQL, Apollo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (grpcurl)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REST:"
        }), " Public APIs, simple CRUD, when HTTP caching matters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GraphQL:"
        }), " Complex UIs with varying data needs, mobile apps (minimize payload), when frontend drives API design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "gRPC:"
        }), " Internal microservice communication, real-time streaming, polyglot environments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In practice for a Java microservice system:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// REST for public API\n@RestController\n@RequestMapping(\"/api/v1/orders\")\npublic class OrderController {\n    @GetMapping(\"/{id}\")\n    public OrderResponse getOrder(@PathVariable Long id) {\n        return orderService.getOrder(id);\n    }\n}\n\n// GraphQL for flexible client queries\n@Controller\npublic class OrderGraphQLController {\n    @QueryMapping\n    public Order order(@Argument Long id) {\n        return orderService.getOrder(id);\n    }\n\n    @MutationMapping\n    public Order createOrder(@Argument CreateOrderInput input) {\n        return orderService.createOrder(input);\n    }\n}\n\n// gRPC for service-to-service communication\n@GrpcService\npublic class OrderGrpcService extends OrderServiceGrpc.OrderServiceImplBase {\n    @Override\n    public void getOrder(GetOrderRequest request,\n                         StreamObserver<OrderResponse> observer) {\n        Order order = orderService.getOrder(request.getOrderId());\n        observer.onNext(toProto(order));\n        observer.onCompleted();\n    }\n}\n"
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
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract without state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single inheritance, shared state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template method pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent data carrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generated methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, value objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, Inheritance, Polymorphism, Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every interview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List, Set, Map, Queue, Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "synchronized, volatile, Locks, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/10 senior interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas, Streams, Optional, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8/10 interviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Junior (0-2yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid (3-5yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior (6-9yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staff (10+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP & Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and identify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply and combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate and refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and teach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write thread-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug deadlocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design concurrent systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between equals() and == in Java?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) equals() compares values, == compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) == compares values, equals() compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) equals() is for primitives, == is for objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which collection guarantees insertion order?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) HashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TreeMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LinkedHashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) HashSet"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) static"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) final"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) private"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) abstract"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n"
      })]
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