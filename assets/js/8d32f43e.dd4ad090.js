"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[69306],{

/***/ 40116
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_07_system_design_12_design_whatsapp_md_8d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-07-system-design-12-design-whatsapp-md-8d3.json
const site_docs_courses_ai_engineering_placement_07_system_design_12_design_whatsapp_md_8d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/system-design/12-design-whatsapp","title":"Design WhatsApp — Real-Time Messaging, Presence, Encryption","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/07-system-design/12-design-whatsapp.md","sourceDirName":"courses/ai-engineering-placement/07-system-design","slug":"/ai-engineering-placement/07-system-design/12-design-whatsapp","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/12-design-whatsapp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"id":"12-design-whatsapp","slug":"/ai-engineering-placement/07-system-design/12-design-whatsapp","title":"Design WhatsApp — Real-Time Messaging, Presence, Encryption","sidebar_label":"Design WhatsApp — Real-Time Messaging, Presence, Encryption","sidebar_position":100},"sidebar":"coursesSidebar","previous":{"title":"Design ChatGPT — Streaming, Context Window, Prompt Caching","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/11-design-chatgpt"},"next":{"title":"Design Notification System — Push, Real-Time, Delivery Guarantees","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/13-design-notification-system"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/07-system-design/12-design-whatsapp.md


const frontMatter = {
	id: '12-design-whatsapp',
	slug: '/ai-engineering-placement/07-system-design/12-design-whatsapp',
	title: 'Design WhatsApp — Real-Time Messaging, Presence, Encryption',
	sidebar_label: 'Design WhatsApp — Real-Time Messaging, Presence, Encryption',
	sidebar_position: 100
};
const contentTitle = 'Design WhatsApp — Real-Time Messaging, Presence, Encryption';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "12.1 High-Level Architecture",
  "id": "121-high-level-architecture",
  "level": 2
}, {
  "value": "12.2 Real-Time Messaging",
  "id": "122-real-time-messaging",
  "level": 2
}, {
  "value": "12.3 End-to-End Encryption",
  "id": "123-end-to-end-encryption",
  "level": 2
}, {
  "value": "12.4 Presence &amp; Online Status",
  "id": "124-presence--online-status",
  "level": 2
}, {
  "value": "12.5 Group Chat &amp; Media",
  "id": "125-group-chat--media",
  "level": 2
}, {
  "value": "12.6 Offline Messages &amp; Delivery",
  "id": "126-offline-messages--delivery",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "design-whatsapp--real-time-messaging-presence-encryption",
        children: "Design WhatsApp — Real-Time Messaging, Presence, Encryption"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand the system architecture for real-time messaging at global scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design WebSocket-based real-time messaging infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement presence detection and online status distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build end-to-end encryption for message privacy and integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design group chat, media sharing, and message sync across devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address delivery guarantees, ordering, and offline messaging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System design interviews test your ability to architect large-scale systems. Caching, load balancing, message queues, and database sharding are patterns you will apply daily. This module prepares you for both interviews and production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding design whatsapp is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how design whatsapp works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-Level Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection manager, message router, store, presence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket connections, message routing, delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-End Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Protocol, key exchange, ratchet mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presence & Online Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heartbeat, timers, distribution strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group Chat & Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fan-out, upload service, CDN, thumbnails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline Messages & Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store-and-forward, delivery receipts, ordering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Sender] --> B[Connection Manager]\n    B --> C[Message Router]\n    C --> D{Recipient Online?}\n    D -->|Yes| E[Push to WebSocket]\n    D -->|No| F[Store for Later]\n    F --> G[Push Notification]\n    E --> H[Delivery Receipt]\n    H --> I[Presence Update]\n    G --> J[Recipient Connects]\n    J --> K[Retrieve Stored Messages]\n    K --> H\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-high-level-architecture",
      children: "12.1 High-Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WhatsApp serves 2B+ users globally, processing 100B+ messages daily. The architecture must handle real-time delivery, offline storage, and end-to-end encryption at massive scale."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core components"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection Manager (CM)"
        }), ": Maintains WebSocket connections. Each user connects to one CM via consistent hashing (hash(user_id) % N)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message Router (MR)"
        }), ": Routes messages between CMs. Determines recipient's CM and forwards the message."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message Store (MS)"
        }), ": Persistent storage for messages (Cassandra/HBase). Messages are stored per conversation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Presence Service (PS)"
        }), ": Tracks online/offline status with heartbeat timers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Media Service"
        }), ": Handles image/video upload, storage, CDN distribution, and thumbnail generation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push Notification Gateway"
        }), ": Sends push notifications to offline users (APNs for iOS, FCM for Android)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface WhatsAppMessage {\n  id: string;\n  type: \"text\" | \"image\" | \"video\" | \"audio\" | \"document\" | \"location\";\n  from: string;\n  to: string;\n  conversationId: string;\n  content: string;\n  mediaUrl?: string;\n  timestamp: number;\n  encryptionInfo: {\n    ciphertext: string;\n    iv: string;\n    keyId: string;\n  };\n  deliveryStatus: \"sent\" | \"delivered\" | \"read\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scale numbers"
      }), ": 100B messages/day = ~1.2M msg/sec peak. Each message is ~1KB raw, ~100 bytes ciphertext after encryption. Storage: 10TB/day."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-real-time-messaging",
      children: "12.2 Real-Time Messaging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebSocket connections provide persistent, bidirectional communication channels between client and server."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import WebSocket from \"ws\";\n\nclass ConnectionManager {\n  private connections: Map<string, WebSocket> = new Map();\n  private loadBalancer: ConsistentHashRing;\n  private nodes: Map<string, ConnectionManager[]> = new Map();\n\n  registerConnection(userId: string, ws: WebSocket): void {\n    this.connections.set(userId, ws);\n    ws.on(\"close\", () => {\n      this.connections.delete(userId);\n      this.broadcastPresence(userId, \"offline\");\n    });\n    ws.on(\"message\", (data) => this.handleMessage(userId, data.toString()));\n    this.broadcastPresence(userId, \"online\");\n  }\n\n  async handleMessage(senderId: string, raw: string): Promise<void> {\n    const message: WhatsAppMessage = JSON.parse(raw);\n    message.id = crypto.randomUUID();\n    message.timestamp = Date.now();\n\n    // Validate and process\n    message.encryptionInfo = await this.encryptMessage(message.content, message.to);\n\n    // Store message\n    await this.messageStore.saveMessage(message);\n\n    // Route to recipient\n    const recipientNode = this.loadBalancer.getNode(message.to);\n    if (recipientNode === this.nodeId) {\n      await this.deliverLocal(message);\n    } else {\n      await this.forwardToNode(recipientNode, message);\n    }\n  }\n\n  async deliverLocal(message: WhatsAppMessage): Promise<void> {\n    const ws = this.connections.get(message.to);\n    if (ws && ws.readyState === WebSocket.OPEN) {\n      ws.send(JSON.stringify(message));\n      await this.messageStore.updateStatus(message.id, \"delivered\");\n    } else {\n      // Store for offline delivery\n      await this.messageStore.queueForOffline(message);\n      await this.sendPushNotification(message.to, message);\n    }\n  }\n\n  async forwardToNode(targetNode: string, message: WhatsAppMessage): Promise<void> {\n    // Forward via internal RPC (gRPC) to the target node's CM\n    await this.rpcClient.forwardMessage(targetNode, message);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection management"
      }), ": Each physical server handles 500K-1M concurrent connections. Edge servers terminate connections close to users (global PoP deployment)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-end-to-end-encryption",
      children: "12.3 End-to-End Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WhatsApp uses the Signal Protocol for end-to-end encryption, providing forward secrecy and deniable authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PreKeyBundle {\n  identityKey: string;\n  signedPreKey: {\n    key: string;\n    signature: string;\n  };\n  preKeys: Array<{ keyId: number; publicKey: string }>;\n}\n\nclass SignalProtocolManager {\n  private sessions: Map<string, SessionState> = new Map();\n\n  async initiateSession(localUserId: string, remoteUserId: string): Promise<void> {\n    // Fetch remote user's pre-key bundle from server\n    const preKeyBundle = await this.fetchPreKeyBundle(remoteUserId);\n\n    // X3DH key agreement\n    const sharedSecret = this.performX3DH(\n      this.identityKeyPair.privateKey,\n      preKeyBundle\n    );\n\n    // Create ratchet session\n    const session = new SessionState(sharedSecret);\n    this.sessions.set(remoteUserId, session);\n  }\n\n  async encryptMessage(\n    plaintext: string,\n    recipientId: string\n  ): Promise<{ ciphertext: string; iv: string; keyId: string }> {\n    let session = this.sessions.get(recipientId);\n    if (!session) {\n      await this.initiateSession(this.localUserId, recipientId);\n      session = this.sessions.get(recipientId)!;\n    }\n\n    // Double Ratchet: derive new message key\n    const messageKey = session.ratchet.advanceChain();\n    const iv = crypto.randomBytes(12);\n    const cipher = crypto.createCipheriv(\"aes-256-gcm\", messageKey, iv);\n\n    let ciphertext = cipher.update(plaintext, \"utf8\", \"hex\");\n    ciphertext += cipher.final(\"hex\");\n    const authTag = cipher.getAuthTag().toString(\"hex\");\n\n    return {\n      ciphertext: ciphertext + authTag,\n      iv: iv.toString(\"hex\"),\n      keyId: session.currentKeyId.toString(),\n    };\n  }\n\n  async decryptMessage(\n    ciphertext: string,\n    iv: string,\n    senderId: string,\n    keyId: string\n  ): Promise<string> {\n    const session = this.sessions.get(senderId);\n    if (!session) throw new Error(\"No session with sender\");\n\n    const messageKey = session.ratchet.advanceChain();\n    const decipher = crypto.createDecipheriv(\n      \"aes-256-gcm\",\n      messageKey,\n      Buffer.from(iv, \"hex\")\n    );\n\n    const ct = Buffer.from(ciphertext, \"hex\");\n    const tag = ct.subarray(ct.length - 16);\n    const data = ct.subarray(0, ct.length - 16);\n    decipher.setAuthTag(tag);\n\n    let plaintext = decipher.update(data, \"hex\", \"utf8\");\n    plaintext += decipher.final(\"utf8\");\n    return plaintext;\n  }\n\n  private performX3DH(\n    privateKey: string,\n    bundle: PreKeyBundle\n  ): Buffer {\n    // Extended Triple Diffie-Hellman key agreement\n    // Combines identity keys, signed pre-keys, and one-time pre-keys\n    return crypto.randomBytes(32); // Simplified\n  }\n\n  private async fetchPreKeyBundle(userId: string): Promise<PreKeyBundle> {\n    const response = await fetch(`/v1/keys/${userId}/prekeys`);\n    return response.json();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties"
      }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward secrecy"
      }), " — compromising current keys doesn't expose past messages. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deniable authentication"
      }), " — message authenticity can't be proven to third parties. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-compromise security"
      }), " — sessions heal after compromise through the ratchet mechanism."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-presence--online-status",
      children: "12.4 Presence & Online Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Presence detection tracks user online/offline status and distributes it to authorized viewers (mutual contacts)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PresenceService {\n  private heartbeats: Map<string, number> = new Map();\n  private heartbeatTimeout = 30000; // 30 seconds\n  private presenceCache: Map<string, { status: \"online\" | \"offline\"; lastSeen: number }> = new Map();\n  private contactsGraph: Map<string, Set<string>> = new Map();\n\n  handleHeartbeat(userId: string): void {\n    this.heartbeats.set(userId, Date.now());\n    const previousStatus = this.presenceCache.get(userId)?.status;\n    this.presenceCache.set(userId, { status: \"online\", lastSeen: Date.now() });\n\n    // Notify contacts only if status changed\n    if (previousStatus !== \"online\") {\n      this.broadcastToContacts(userId, \"online\");\n    }\n  }\n\n  async checkHeartbeats(): Promise<void> {\n    const now = Date.now();\n    for (const [userId, lastHeartbeat] of this.heartbeats) {\n      if (now - lastHeartbeat > this.heartbeatTimeout) {\n        this.heartbeats.delete(userId);\n        this.presenceCache.set(userId, {\n          status: \"offline\",\n          lastSeen: now,\n        });\n        this.broadcastToContacts(userId, \"offline\");\n      }\n    }\n  }\n\n  private async broadcastToContacts(\n    userId: string,\n    status: \"online\" | \"offline\"\n  ): Promise<void> {\n    const contacts = this.contactsGraph.get(userId);\n    if (!contacts) return;\n\n    const presenceUpdate = JSON.stringify({\n      type: \"presence\",\n      userId,\n      status,\n      timestamp: Date.now(),\n    });\n\n    for (const contactId of contacts) {\n      // Route to the CM serving this contact\n      await this.routeToConnectionManager(contactId, presenceUpdate);\n    }\n  }\n\n  getPresence(\n    userId: string,\n    requesterId: string\n  ): { status: \"online\" | \"offline\"; lastSeen?: number } | null {\n    // Check if requester is authorized (mutual contact)\n    if (!this.contactsGraph.get(userId)?.has(requesterId)) {\n      return null;\n    }\n    return this.presenceCache.get(userId) ?? { status: \"offline\", lastSeen: 0 };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Privacy"
      }), ": Users can configure \"last seen\" visibility: Everyone, Contacts, or Nobody. Presence updates are distributed via the same WebSocket connections used for messaging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-group-chat--media",
      children: "12.5 Group Chat & Media"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Group chat uses fan-out architecture: sender sends once to server, server fans out to all group members."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Group {\n  id: string;\n  name: string;\n  members: string[];\n  adminIds: string[];\n  createdAt: number;\n  avatarUrl?: string;\n  encryptionKey: string; // Group master key\n}\n\nclass GroupChatService {\n  private groups: Map<string, Group> = new Map();\n\n  async sendGroupMessage(\n    senderId: string,\n    groupId: string,\n    message: WhatsAppMessage\n  ): Promise<void> {\n    const group = this.groups.get(groupId);\n    if (!group) throw new Error(\"Group not found\");\n    if (!group.members.includes(senderId)) throw new Error(\"Not a member\");\n\n    // Encrypt message with group key (Sender Key distribution)\n    const encrypted = await this.encryptForGroup(message.content, group);\n\n    // Fan-out: send to each member (server-side)\n    const fanOutPromises = group.members\n      .filter((m) => m !== senderId)\n      .map((memberId) => this.deliverToMember(memberId, encrypted, groupId));\n\n    await Promise.all(fanOutPromises);\n\n    // Store one copy of the message with group metadata\n    await this.messageStore.saveGroupMessage({\n      ...encrypted,\n      groupId,\n      senderId,\n      timestamp: Date.now(),\n    });\n  }\n\n  private async deliverToMember(\n    memberId: string,\n    message: any,\n    groupId: string\n  ): Promise<void> {\n    // Route through CM\n    const cm = this.getConnectionManager(memberId);\n    await cm.sendToUser(memberId, {\n      ...message,\n      type: \"group_message\",\n      groupId,\n    });\n  }\n\n  private async encryptForGroup(\n    plaintext: string,\n    group: Group\n  ): Promise<any> {\n    // Sender Key: encrypt once with group session key\n    const cipher = crypto.createCipheriv(\n      \"aes-256-gcm\",\n      Buffer.from(group.encryptionKey, \"hex\"),\n      crypto.randomBytes(12)\n    );\n    let ct = cipher.update(plaintext, \"utf8\", \"hex\");\n    ct += cipher.final(\"hex\");\n    return { ciphertext: ct + cipher.getAuthTag().toString(\"hex\") };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Media sharing"
      }), ": Images/videos uploaded to Media Service, encrypted with a random key, key sent along with message. CDN delivers media files globally. Thumbnails generated server-side. Streaming for audio/video messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-offline-messages--delivery",
      children: "12.6 Offline Messages & Delivery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user is offline, messages are stored and delivered when they reconnect. Delivery receipts track message status."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class OfflineMessageStore {\n  private messageQueues: Map<string, WhatsAppMessage[]> = new Map();\n  private maxOfflineMessages = 10000;\n  private retentionDays = 30;\n\n  async storeForOffline(message: WhatsAppMessage): Promise<void> {\n    if (!this.messageQueues.has(message.to)) {\n      this.messageQueues.set(message.to, []);\n    }\n    const queue = this.messageQueues.get(message.to)!;\n    if (queue.length < this.maxOfflineMessages) {\n      queue.push(message);\n    } else {\n      // Oldest messages are trimmed\n      queue.shift();\n      queue.push(message);\n    }\n  }\n\n  async deliverOfflineMessages(userId: string, ws: WebSocket): Promise<void> {\n    const queue = this.messageQueues.get(userId) ?? [];\n    this.messageQueues.delete(userId);\n\n    // Deliver in chronological order\n    for (const message of queue.sort((a, b) => a.timestamp - b.timestamp)) {\n      ws.send(JSON.stringify(message));\n      await this.updateDeliveryStatus(message.id, \"delivered\");\n    }\n  }\n\n  async getMessageCount(userId: string): Promise<number> {\n    return (this.messageQueues.get(userId) ?? []).length;\n  }\n}\n\nclass DeliveryReceiptManager {\n  private receipts: Map<string, { delivered: number; read: number }> = new Map();\n\n  async markDelivered(messageId: string): Promise<void> {\n    const receipt = this.receipts.get(messageId) ?? { delivered: 0, read: 0 };\n    receipt.delivered++;\n    this.receipts.set(messageId, receipt);\n\n    // Notify sender\n    const message = await this.messageStore.getMessage(messageId);\n    if (message) {\n      await this.sendReceiptToUser(message.from, {\n        messageId,\n        status: \"delivered\",\n        timestamp: Date.now(),\n      });\n    }\n  }\n\n  async markRead(messageId: string, userId: string): Promise<void> {\n    const receipt = this.receipts.get(messageId) ?? { delivered: 0, read: 0 };\n    receipt.read++;\n    this.receipts.set(messageId, receipt);\n\n    const message = await this.messageStore.getMessage(messageId);\n    if (message && message.from !== userId) {\n      await this.sendReceiptToUser(message.from, {\n        messageId,\n        status: \"read\",\n        timestamp: Date.now(),\n      });\n    }\n  }\n\n  private async sendReceiptToUser(\n    userId: string,\n    receipt: any\n  ): Promise<void> {\n    const cm = this.getConnectionManager(userId);\n    await cm.sendToUser(userId, {\n      type: \"receipt\",\n      ...receipt,\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Message ordering"
      }), ": Each message has a server-assigned timestamp. Messages are delivered in chronological order. For multi-device sync, each device maintains its own pointer of last read message."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class WhatsAppService {\n  private cm: ConnectionManager;\n  private presence: PresenceService;\n  private groups: GroupChatService;\n  private offlineStore: OfflineMessageStore;\n  private encryption: SignalProtocolManager;\n\n  async handleIncomingMessage(raw: string, senderId: string): Promise<void> {\n    const msg: WhatsAppMessage = JSON.parse(raw);\n    msg.id = crypto.randomUUID();\n    msg.timestamp = Date.now();\n\n    // Store\n    await this.storeMessage(msg);\n\n    // Encrypt\n    msg.encryptionInfo = await this.encryption.encryptMessage(\n      msg.content,\n      msg.to\n    );\n\n    // Route\n    const recipientOnline = await this.isUserOnline(msg.to);\n    if (recipientOnline) {\n      await this.cm.sendToUser(msg.to, msg);\n      await this.markDelivered(msg.id);\n    } else {\n      await this.offlineStore.storeForOffline(msg);\n      await this.sendPushNotification(msg.to, msg);\n    }\n  }\n\n  async handleUserConnect(userId: string, ws: WebSocket): Promise<void> {\n    this.cm.registerConnection(userId, ws);\n    this.presence.handleHeartbeat(userId);\n    await this.offlineStore.deliverOfflineMessages(userId, ws);\n  }\n\n  private async isUserOnline(userId: string): Promise<boolean> {\n    const presence = this.presence.getPresence(userId, userId);\n    return presence?.status === \"online\";\n  }\n\n  private async storeMessage(msg: WhatsAppMessage): Promise<void> {\n    // Store in Cassandra/HBase by conversation_id\n  }\n\n  private async markDelivered(messageId: string): Promise<void> {\n    // Update delivery status\n  }\n\n  private async sendPushNotification(to: string, msg: WhatsAppMessage): Promise<void> {\n    // Send to APNs/FCM\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WhatsApp connects 2B+ users with 100B+ daily messages using WebSocket-based real-time messaging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent hashing routes users to Connection Managers for session affinity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signal Protocol provides end-to-end encryption with forward secrecy through X3DH + Double Ratchet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Presence detection uses heartbeat timers with 30s timeout, distributed to mutual contacts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group chat uses server-side fan-out with Sender Key encryption (encrypt once, fan out ciphertext)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Media files are encrypted, uploaded to CDN, with thumbnails generated server-side"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline messages are stored per-user (up to 10K) and delivered in order on reconnection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delivery receipts (sent/delivered/read) provide message status visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-device sync uses per-device last-read pointers and message-level synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global PoP deployment minimizes connection latency with edge-terminated WebSockets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket with persistent connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP polling (wasteful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Protocol (X3DH + Double Ratchet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom encryption (error-prone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presence tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heartbeat with 30s timeout + broadcast on change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant polling from clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Group chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side fan-out with Sender Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side fan-out (unreliable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offline storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user queue sorted by timestamp, max 10K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited storage per user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Media delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted upload to CDN with thumbnails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct server-to-server transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-device sync pointers with message-level reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single device assumption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How would you design WhatsApp's real-time messaging infrastructure for 2B users?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Key components: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Edge servers"
          }), " — WebSocket terminations at 20+ global PoPs, each handling 500K-1M connections. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Consistent hashing"
          }), " — maps user_id to Connection Manager for session affinity. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Message Router"
          }), " — internal gRPC service that routes between CMs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Storage"
          }), " — Cassandra/HBase for message persistence, partitioned by conversation_id. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Presence"
          }), " — heartbeat-based with Redis for fast lookups. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Encryption"
          }), " — Signal Protocol for E2EE. Scale at 1.2M msg/sec peak: use connection pooling, async I/O, and horizontal scaling for CMs."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does the Signal Protocol achieve forward secrecy?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Forward secrecy means compromising current keys doesn't expose past messages. Signal achieves this through the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Double Ratchet algorithm"
          }), ". Each message generates a new encryption key via a ratchet (one-way function). Even if an attacker obtains the current session state, they cannot derive previous message keys because the ratchet only moves forward. Combined with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "X3DH"
          }), " (Extended Triple Diffie-Hellman) for initial key agreement using ephemeral keys, past messages remain secure even if long-term identity keys are compromised. The ratchet also provides post-compromise security — after a compromised session exchanges messages, security is restored."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How would you design group chat for 256 participants with E2EE?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["WhatsApp uses ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sender Key"
          }), " (based on Signal's Messaging Layer): ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Each sender generates a group session key (ratchet chain). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Sender encrypts message once with their group session key. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Ciphertext is sent to the server. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Server fans out the same ciphertext to all group members. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Each member decrypts with the sender's group session key. Benefits: O(1) encryption per sender, O(1) ciphertext size regardless of group size, no per-member encryption overhead. For very large groups (10K+), use a tiered fan-out approach to avoid server overload."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you handle presence detection at WhatsApp scale?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Heartbeat"
          }), ": Client sends heartbeat every 15 seconds via WebSocket. Server tracks last heartbeat timestamp. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Timeout"
          }), ": If no heartbeat for 30 seconds, mark user offline. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Distribution"
          }), ": On status change, server pushes update to mutual contacts via their WebSocket connections. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Privacy"
          }), ": Configurable visibility (Everyone, Contacts, Nobody). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Scale"
          }), ": Presence state stored in Redis cluster with TTL. Broadcast to contacts uses fan-out via CMs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Optimization"
          }), ": Batch presence updates: collect changes for 1 second, then broadcast all at once to reduce message count."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you ensure message ordering and prevent duplicates?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ordering"
          }), ": Each message gets a server-assigned monotonic timestamp. Messages are delivered in chronological order per conversation. For offline delivery, messages are sorted by timestamp before delivery. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deduplication"
          }), ": Each message has a client-generated ID (UUID). Server detects duplicates by tracking seen message IDs per conversation (in Redis with TTL). If a duplicate arrives, server returns the existing delivery status without re-processing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-device"
          }), ": Each device maintains last-read timestamp. New messages carry a sender device ID to prevent echo (device A sends, server doesn't send back to device A)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you design media sharing (images/videos) for WhatsApp?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Upload"
          }), ": Client encrypts media with a random 32-byte key, uploads ciphertext to Media Service. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Storage"
          }), ": Media stored in blob storage (S3, Blob Storage) with CDN for global delivery. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Thumbnail"
          }), ": Server generates thumbnail (process encrypted media after decryption with key). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Encryption key delivery"
          }), ": Media encryption key is sent as part of the message (E2EE). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Progressive delivery"
          }), ": Thumbnail sent first, full-resolution on demand. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Streaming"
          }), ": Video/audio streamed from CDN with range-request support. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Compression"
          }), ": Automatically compress images (max 1600px) and videos (max 16MB) on server side."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle multi-device sync?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Multi-device allows using WhatsApp on phone + desktop + web simultaneously. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Key distribution"
          }), ": When linking a new device, the phone shares the identity key and session state via QR code (local encrypted transfer). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Message sync"
          }), ": Each device maintains its own cursor (last message seen). On reconnect, device requests messages after its cursor. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Server-side queue"
          }), ": Each device has an independent offline message queue. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Read status"
          }), ": Read receipts are per-device; \"read by everyone\" means all devices have read. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Sender key sync"
          }), ": Group session keys shared across devices for seamless group chat. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Conflict resolution"
          }), ": Last-writer-wins for profile, settings; CRDT approaches for more complex state."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you design the storage layer for WhatsApp messages?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cassandra/HBase for message storage: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Messages table"
          }), ": conversation_id (partition key), message_id (clustering key, timeuuid), sender_id, content (encrypted blob), timestamp, media_ref, delivery_status. Partition by conversation_id for fast retrieval of message history. TTL for automatic expiry (30 days default, users can turn off). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Conversation index"
          }), ": user_id (PK), conversation_id, last_message_preview, unread_count. Enables fast \"list my chats\" queries. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Write path"
          }), ": Message written to Cassandra, acknowledged to sender, then delivered to recipient. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Read path"
          }), ": On opening conversation, query partition by conversation_id, sorted by message_id."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle push notifications without compromising E2EE?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Push notifications are a challenge for E2EE because the notification payload goes through Apple/Google servers. WhatsApp's approach: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Thin notifications"
          }), ": Payload contains only metadata (sender name, conversation ID, message type) - no message content. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Local decryption"
          }), ": When user taps notification, app opens, fetches encrypted message from server, decrypts locally. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Server doesn't have keys"
          }), ": Encryption keys never leave user devices. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Notification content"
          }), ": \"New message from Alice\" instead of \"Alice: Hello, how are you?\". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Registration"
          }), ": Device registers for push notifications with platform-specific token, stored on WhatsApp server for routing."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you design WhatsApp status (stories) feature?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Upload"
          }), ": User captures photo/video, it's encrypted with a status-specific key, uploaded to Media Service. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Storage"
          }), ": Media stored for 24 hours with automatic expiry (TTL in storage + CDN cache invalidation after 24h). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Audience"
          }), ": Server maintains contact list. Status visible only to mutual contacts (or custom audience). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Delivery"
          }), ": On upload, server notifies contacts via WebSocket: \"[User] posted a status update\". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) View tracking"
          }), ": Each view is recorded. Status poster sees list of viewers. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Privacy"
          }), ": Users can hide status from specific contacts. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Scale"
          }), ": Status updates are ephemeral, so storage is bounded. CDN handles media delivery. View tracking uses Cassandra with TTL."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What protocol does WhatsApp use for real-time messaging?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) HTTP/2\nb) WebSocket\nc) MQTT\nd) XMPP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) WebSocket"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "WebSocket provides persistent bidirectional communication over a single TCP connection."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which E2EE protocol does WhatsApp use?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) OTR\nb) Signal Protocol\nc) TLS 1.3\nd) PGP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Signal Protocol"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "WhatsApp uses the Signal Protocol (X3DH + Double Ratchet) for end-to-end encryption."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the heartbeat timeout for presence detection?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 5 seconds\nb) 15 seconds\nc) 30 seconds\nd) 60 seconds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 30 seconds"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If no heartbeat is received for 30 seconds, the user is marked offline."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": How does group chat encryption work with Sender Key?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Separate encryption per member\nb) Encrypt once, server fans out ciphertext\nc) Server decrypts and re-encrypts for each member\nd) No encryption for groups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Encrypt once, server fans out ciphertext"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Sender encrypts once with group session key. Server distributes the same ciphertext to all members."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": How many offline messages are stored per user?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 100\nb) 1000\nc) 10000\nd) Unlimited"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 10000"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Up to 10,000 offline messages are stored per user. Oldest messages are trimmed when limit is reached."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not practicing enough problems to build pattern recognition", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Implement a simple WebSocket-based chat server in TypeScript that broadcasts messages to all connected clients."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a heartbeat-based presence tracker that marks users offline after 30 seconds of inactivity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a basic E2EE message exchange using the Double Ratchet concept: each message generates a new AES key by hashing the previous key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a group chat fan-out system that sends one message to N recipients using server-side fan-out with delivery receipts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design and implement a simplified WhatsApp-like system with: WebSocket connections, user presence, 1:1 messaging with delivery receipts, offline message storage and retrieval on reconnect, and group chat with server-side fan-out."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a multi-device sync system where a user's messages are synchronized across two virtual devices, with per-device read cursors and offline message"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the time and space trade-offs of 07-system-design. When would you choose one approach over another?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a system that efficiently handles 07-system-design at scale (millions of requests/second)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you had to optimize a system related to 07-system-design. What was your approach and what was the result?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain 07-system-design to a non-technical stakeholder?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does 07-system-design integrate with enterprise systems and cloud architectures?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the security implications of 07-system-design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize 07-system-design for GPU-accelerated computing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What parallel processing patterns apply to 07-system-design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement 07-system-design in a cost-effective, scalable way for a startup?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the fastest way to prototype a solution using 07-system-design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List 07-system-design under relevant technical skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented 07-system-design to [specific outcome], reducing [metric] by [X]%\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Include 07-system-design in your skills section for ATS optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review core concepts of 07-system-design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice 3-5 problems related to 07-system-design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare 2 real-world examples of using 07-system-design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know the time/space complexity of common 07-system-design operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have questions ready about how the company uses 07-system-design queuing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Design WhatsApp — Real-Time Messaging, Presence, Encryption builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Design WhatsApp — Real-Time Messaging, Presence, Encryption before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Design WhatsApp — Real-Time Messaging, Presence, Encryption is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Design WhatsApp — Real-Time Messaging, Presence, Encryption in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Design WhatsApp — Real-Time Messaging, Presence, Encryption chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Design WhatsApp — Real-Time Messaging, Presence, Encryption is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Design WhatsApp — Real-Time Messaging, Presence, Encryption is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Design WhatsApp — Real-Time Messaging, Presence, Encryption is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Design WhatsApp — Real-Time Messaging, Presence, Encryption issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Design WhatsApp — Real-Time Messaging, Presence, Encryption in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Design WhatsApp — Real-Time Messaging, Presence, Encryption that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Design WhatsApp — Real-Time Messaging, Presence, Encryption is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Design WhatsApp — Real-Time Messaging, Presence, Encryption in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Design WhatsApp — Real-Time Messaging, Presence, Encryption and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Design WhatsApp — Real-Time Messaging, Presence, Encryption on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Advanced\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 45-60 minutes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Complete understanding of previous modules recommended"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Start with the basics — understand the fundamental concepts before moving to advanced topics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Practice actively — don't just read, implement the code examples yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Connect to prior knowledge — relate new concepts to what you learned in previous modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Focus on understanding, not memorizing — understand why things work, not just how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Review regularly — revisit key concepts after a few days to reinforce learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym Method"
        }), ": Create acronyms for lists of concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        }), ": Draw diagrams to visualize abstract concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach someone else"
        }), ": Explaining concepts to others reinforces your understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to real-world"
        }), ": Relate technical concepts to everyday experiences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking"
        }), ": Break complex topics into smaller, manageable pieces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation and language specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"System Design Interview\" by Alex Xu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"AI Engineering\" by Chip Huyen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers and blog posts from leading AI labs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How this connects to System Design fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prerequisites for advanced topics in this module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications in AI engineering systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview questions that test deep understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How long does it take to master design whatsapp?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: Do I need to memorize all the details?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Focus on understanding the core principles. Details can be looked up, but understanding cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: What's the best way to practice?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement the code examples, then modify them to solve different problems. Build small projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How often should I review this material?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Review after 1 day, 3 days, 1 week, and 1 month for long-term retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Understanding the fundamentals is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Don't skip the exercises — they reinforce critical concepts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This topic frequently appears in technical interviews at top companies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": In real systems, these concepts are used daily by AI engineers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Evolution of this technology reflects decades of research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the evolution of design whatsapp helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Validation"
        }), ": Always validate and sanitize inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Don't expose internal details in error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Limits"
        }), ": Set appropriate limits to prevent denial of service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Ensure proper authentication and authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Protection"
        }), ": Handle sensitive data according to security best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering, understanding design whatsapp at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of design whatsapp like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply design whatsapp concepts in a mini-project\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Build a small application that demonstrates understanding of core principles\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), ": 2-4 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Working implementation with documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 1"
      }), ": What is the core concept of design whatsapp?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply design whatsapp in real systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": When building production AI systems that require reliability, scalability, and maintainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 3"
      }), ": What are the common pitfalls to avoid?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Over-engineering, ignoring edge cases, and not considering production requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Academic papers and conference proceedings (NeurIPS, ICML, ICLR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry whitepapers from leading AI companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical blogs from Google, Meta, OpenAI, Anthropic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source implementations and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), ": Framework for building LLM-powered applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), ": Data framework for connecting LLMs with external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face Transformers"
        }), ": State-of-the-art ML models and datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights & Biases"
        }), ": Experiment tracking and model evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), ": Open-source platform for ML lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus + Grafana"
        }), ": Monitoring and observability stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Issues"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check input validation and data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify API keys and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor resource usage (CPU, memory, GPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs for stack traces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the issue with minimal input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add logging at key points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check external dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with known-good inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Fire Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the core concept of System Design?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use this in production?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the trade-offs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does this scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are common pitfalls?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize this for 10x scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What monitoring would you add?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you test this in production?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Design WhatsApp — Real-Time Messaging, Presence, Encryption."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Design WhatsApp — Real-Time Messaging, Presence, Encryption logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy, Precision, Recall, F1-Score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLEU, ROUGE for text generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency, Throughput, Cost per inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate and availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource utilization (CPU, memory, GPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google: Search ranking, translation, autocomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon: Product recommendations, Alexa, fraud detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix: Content recommendations, personalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla: Autonomous driving, computer vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI: ChatGPT, DALL-E, Codex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After mastering System Design, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique."
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