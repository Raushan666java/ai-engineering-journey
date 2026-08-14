"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[11374],{

/***/ 76330
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_07_system_design_11_design_chatgpt_md_463_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-07-system-design-11-design-chatgpt-md-463.json
const site_docs_courses_ai_engineering_placement_07_system_design_11_design_chatgpt_md_463_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/system-design/11-design-chatgpt","title":"Design ChatGPT — Streaming, Context Window, Prompt Caching","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/07-system-design/11-design-chatgpt.md","sourceDirName":"courses/ai-engineering-placement/07-system-design","slug":"/ai-engineering-placement/07-system-design/11-design-chatgpt","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/11-design-chatgpt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":99,"frontMatter":{"id":"11-design-chatgpt","slug":"/ai-engineering-placement/07-system-design/11-design-chatgpt","title":"Design ChatGPT — Streaming, Context Window, Prompt Caching","sidebar_label":"Design ChatGPT — Streaming, Context Window, Prompt Caching","sidebar_position":99},"sidebar":"placementSidebar","previous":{"title":"Design URL Shortener — Hashing, Redirects, Analytics","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/10-design-url-shortener"},"next":{"title":"Design WhatsApp — Real-Time Messaging, Presence, Encryption","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/12-design-whatsapp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/07-system-design/11-design-chatgpt.md


const frontMatter = {
	id: '11-design-chatgpt',
	slug: '/ai-engineering-placement/07-system-design/11-design-chatgpt',
	title: 'Design ChatGPT — Streaming, Context Window, Prompt Caching',
	sidebar_label: 'Design ChatGPT — Streaming, Context Window, Prompt Caching',
	sidebar_position: 99
};
const contentTitle = 'Design ChatGPT — Streaming, Context Window, Prompt Caching';

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
  "value": "11.1 System Architecture",
  "id": "111-system-architecture",
  "level": 2
}, {
  "value": "11.2 Streaming Responses",
  "id": "112-streaming-responses",
  "level": 2
}, {
  "value": "11.3 Context Window Management",
  "id": "113-context-window-management",
  "level": 2
}, {
  "value": "11.4 Prompt Caching",
  "id": "114-prompt-caching",
  "level": 2
}, {
  "value": "11.5 Rate Limiting &amp; Queuing",
  "id": "115-rate-limiting--queuing",
  "level": 2
}, {
  "value": "11.6 Conversation Storage",
  "id": "116-conversation-storage",
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
    a: "a",
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
        id: "design-chatgpt--streaming-context-window-prompt-caching",
        children: "Design ChatGPT — Streaming, Context Window, Prompt Caching"
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
            children: "Understand the system architecture behind ChatGPT's real-time response generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design streaming response infrastructure with Server-Sent Events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement context window management and prompt caching strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build rate limiting and request queuing for LLM inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design conversation history storage and retrieval at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address latency, cost, and safety considerations for production LLM serving"
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
      children: "Understanding design chatgpt is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how design chatgpt works in practice."
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
            children: "11.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancer, API gateway, inference cluster, storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming Responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE, chunked transfer, token-by-token delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context Window Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt optimization, sliding window, summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KV-cache, prefix matching, cache eviction policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiting & Queuing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token bucket, priority queues, request batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread persistence, history retrieval, multi-modal data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[User] --> B[Load Balancer]\n    B --> C[API Gateway]\n    C --> D[Rate Limiter]\n    D --> E[Request Queue]\n    E --> F[Prompt Processor]\n    F --> G{Context Cache?}\n    G -->|Miss| H[LLM Inference]\n    G -->|Hit| I[Cached Response]\n    H --> J[Streaming Response]\n    I --> J\n    J --> K[Token-by-Token Delivery]\n    K --> L[Conversation Storage]\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-system-architecture",
      children: "11.1 System Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChatGPT's architecture is a multi-layered system designed for low-latency, high-throughput LLM inference."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key components"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancer"
        }), ": Distributes incoming requests across API gateway instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API gateway"
        }), ": Authentication, rate limiting, request validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request queue"
        }), ": Buffers requests during traffic spikes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prompt processor"
        }), ": Prepares input (tokenization, context assembly, moderation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inference cluster"
        }), ": GPU-powered LLM serving nodes (NVIDIA A100/H100)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response streamer"
        }), ": Manages token-by-token delivery over SSE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conversation store"
        }), ": PostgreSQL/Cosmos DB for user threads"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ChatGPTRequest {\n  model: string;\n  messages: Array<{ role: \"system\" | \"user\" | \"assistant\"; content: string }>;\n  stream: boolean;\n  max_tokens: number;\n  temperature: number;\n  conversation_id?: string;\n}\n\ninterface ChatGPTResponse {\n  id: string;\n  object: \"chat.completion\";\n  created: number;\n  model: string;\n  choices: Array<{\n    index: number;\n    message: { role: string; content: string };\n    finish_reason: \"stop\" | \"length\" | \"content_filter\";\n  }>;\n  usage: {\n    prompt_tokens: number;\n    completion_tokens: number;\n    total_tokens: number;\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference optimization"
      }), ": Tensor parallelism across GPUs, KV-cache management, continuous batching, speculative decoding for 2-3x throughput improvement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-streaming-responses",
      children: "11.2 Streaming Responses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Server-Sent Events (SSE) enable token-by-token streaming from the LLM to the client, providing sub-100ms time-to-first-token."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SSEStreamManager {\n  private clients: Map<string, any> = new Map();\n\n  addClient(clientId: string, res: any): void {\n    res.writeHead(200, {\n      \"Content-Type\": \"text/event-stream\",\n      \"Cache-Control\": \"no-cache\",\n      Connection: \"keep-alive\",\n      \"X-Accel-Buffering\": \"no\",\n    });\n    this.clients.set(clientId, res);\n  }\n\n  sendToken(clientId: string, token: string, finishReason?: string): void {\n    const res = this.clients.get(clientId);\n    if (!res) return;\n\n    const event = {\n      id: clientId,\n      object: \"chat.completion.chunk\",\n      created: Date.now(),\n      model: \"gpt-4\",\n      choices: [\n        {\n          index: 0,\n          delta: { content: token },\n          finish_reason: finishReason ?? null,\n        },\n      ],\n    };\n    res.write(`data: ${JSON.stringify(event)}\\n\\n`);\n\n    if (finishReason) {\n      res.write(\"data: [DONE]\\n\\n\");\n      res.end();\n      this.clients.delete(clientId);\n    }\n  }\n\n  sendError(clientId: string, error: string): void {\n    const res = this.clients.get(clientId);\n    if (res) {\n      res.write(`event: error\\ndata: ${JSON.stringify({ error })}\\n\\n`);\n      res.end();\n      this.clients.delete(clientId);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges"
      }), ": Connection management (1M+ concurrent connections), backpressure handling when clients are slow, reconnection logic for dropped connections, token-level rate limiting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-context-window-management",
      children: "11.3 Context Window Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context window determines how much conversation history the model can consider. Managing this window is critical for quality and cost."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ContextWindowManager {\n  private maxTokens: number;\n  private tokenizer: any;\n\n  constructor(maxTokens = 128000) {\n    this.maxTokens = maxTokens;\n  }\n\n  buildPrompt(\n    systemPrompt: string,\n    messages: Array<{ role: string; content: string }>,\n    maxResponseTokens: number\n  ): Array<{ role: string; content: string }> {\n    const availableTokens = this.maxTokens - maxResponseTokens - 50;\n    let totalTokens = this.countTokens(systemPrompt);\n\n    const prompt: Array<{ role: string; content: string }> = [\n      { role: \"system\", content: systemPrompt },\n    ];\n\n    // Add messages from most recent to oldest until we fill the window\n    const reversed = [...messages].reverse();\n    for (const msg of reversed) {\n      const tokens = this.countTokens(msg.content) + 10; // overhead\n      if (totalTokens + tokens > availableTokens) {\n        break;\n      }\n      prompt.splice(1, 0, msg);\n      totalTokens += tokens;\n    }\n\n    return prompt;\n  }\n\n  countTokens(text: string): number {\n    // Simplified token counting — in production, use actual tokenizer\n    return Math.ceil(text.length / 4);\n  }\n\n  async summarizeHistory(\n    messages: Array<{ role: string; content: string }>\n  ): Promise<string> {\n    // When conversation exceeds context window, summarize older messages\n    const summaryPrompt = `Summarize the following conversation:\n${messages\n      .map((m) => `${m.role}: ${m.content}`)\n      .join(\"\\n\")}`;\n    // Call LLM to generate summary\n    return summaryPrompt;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategies"
      }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sliding window"
      }), " — keep most recent N messages. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summarization"
      }), " — compress old messages into a summary. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid"
      }), " — recent messages in full, older messages summarized. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RAG"
      }), " — retrieve relevant history from vector database."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-prompt-caching",
      children: "11.4 Prompt Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prompt caching avoids re-computing the LLM's KV-cache for repeated or similar prompts, reducing latency and cost."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PromptCacheEntry {\n  prefix: string;\n  kvCache: any;\n  lastAccess: number;\n  accessCount: number;\n  tokenCount: number;\n}\n\nclass PromptCache {\n  private cache: Map<string, PromptCacheEntry> = new Map();\n  private maxEntries = 10000;\n  private maxTokensStored = 1000000;\n\n  constructor() {\n    setInterval(() => this.evict(), 60000);\n  }\n\n  getCacheKey(messages: Array<{ role: string; content: string }>): string {\n    // Use system prompt + first user message as cache prefix\n    const prefix = messages\n      .slice(0, 2)\n      .map((m) => `${m.role}:${m.content}`)\n      .join(\"|\");\n    return this.hash(prefix);\n  }\n\n  get(prefix: string): PromptCacheEntry | null {\n    const entry = this.cache.get(prefix);\n    if (entry) {\n      entry.lastAccess = Date.now();\n      entry.accessCount++;\n    }\n    return entry ?? null;\n  }\n\n  set(prefix: string, kvCache: any, tokenCount: number): void {\n    if (this.cache.size >= this.maxEntries) {\n      this.evict();\n    }\n    this.cache.set(prefix, {\n      prefix,\n      kvCache,\n      lastAccess: Date.now(),\n      accessCount: 1,\n      tokenCount,\n    });\n  }\n\n  private evict(): void {\n    // LRU eviction\n    const sorted = [...this.cache.entries()].sort(\n      (a, b) => a[1].lastAccess - b[1].lastAccess\n    );\n    const toRemove = Math.ceil(this.maxEntries * 0.2);\n    for (let i = 0; i < toRemove; i++) {\n      this.cache.delete(sorted[i][0]);\n    }\n  }\n\n  private hash(s: string): string {\n    let hash = 0;\n    for (let i = 0; i < s.length; i++) {\n      hash = (hash << 5) - hash + s.charCodeAt(i);\n    }\n    return Math.abs(hash).toString(36);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache hit scenarios"
      }), ": Repeated system prompts, popular first messages, template-based prompts. Cache miss adds 100-500ms to TTFT (time-to-first-token). Hit can reduce to ~10ms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-rate-limiting--queuing",
      children: "11.5 Rate Limiting & Queuing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM inference is expensive and GPU-constrained. Proper rate limiting and queuing prevent overload and ensure fair resource allocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LLMRequestQueue {\n  private queues: Map<string, Array<{ request: any; resolve: Function }>> = new Map();\n  private processing = false;\n  private maxBatchSize = 32;\n  private maxQueueLength = 1000;\n\n  async enqueue(\n    userId: string,\n    request: any,\n    priority: \"low\" | \"normal\" | \"high\" = \"normal\"\n  ): Promise<any> {\n    return new Promise((resolve, reject) => {\n      if (!this.queues.has(userId)) {\n        this.queues.set(userId, []);\n      }\n      const queue = this.queues.get(userId)!;\n      if (queue.length >= this.maxQueueLength) {\n        reject(new Error(\"Queue full\"));\n        return;\n      }\n      queue.push({ request, resolve });\n\n      if (!this.processing) {\n        this.processBatch();\n      }\n    });\n  }\n\n  private async processBatch(): Promise<void> {\n    this.processing = true;\n    const batch: Array<{ request: any; resolve: Function }> = [];\n\n    // Collect requests from queues (round-robin for fairness)\n    for (const [userId, queue] of this.queues) {\n      while (queue.length > 0 && batch.length < this.maxBatchSize) {\n        batch.push(queue.shift()!);\n      }\n      if (queue.length === 0) this.queues.delete(userId);\n    }\n\n    if (batch.length > 0) {\n      // Send batch to LLM inference\n      const results = await this.inferBatch(batch.map((b) => b.request));\n      for (let i = 0; i < batch.length; i++) {\n        batch[i].resolve(results[i]);\n      }\n    }\n\n    this.processing = false;\n    if (this.getTotalQueueSize() > 0) {\n      setImmediate(() => this.processBatch());\n    }\n  }\n\n  private async inferBatch(requests: any[]): Promise<any[]> {\n    // Continuous batching — send multiple requests to GPU for parallel processing\n    return requests.map((r) => ({ choices: [{ message: { content: \"Mock\" } }] }));\n  }\n\n  private getTotalQueueSize(): number {\n    let total = 0;\n    for (const queue of this.queues.values()) total += queue.length;\n    return total;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate limit tiers"
      }), ": Free users: 20 req/min, 100K tokens/month. Pro users: 100 req/min, 10M tokens/month. Enterprise: custom limits with reserved capacity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-conversation-storage",
      children: "11.6 Conversation Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Storing conversation history enables users to resume threads, review past interactions, and provides training data (with consent)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Conversation {\n  id: string;\n  userId: string;\n  title: string;\n  model: string;\n  createdAt: Date;\n  updatedAt: Date;\n  messageCount: number;\n  totalTokens: number;\n  isArchived: boolean;\n}\n\ninterface Message {\n  id: string;\n  conversationId: string;\n  role: \"system\" | \"user\" | \"assistant\" | \"tool\";\n  content: string;\n  tokens: number;\n  createdAt: Date;\n  parentId?: string;\n  metadata?: {\n    model?: string;\n    finishReason?: string;\n    latency?: number;\n    safetyFlags?: string[];\n  };\n}\n\nclass ConversationStore {\n  private conversations: Map<string, Conversation> = new Map();\n  private messages: Map<string, Message[]> = new Map();\n\n  async createConversation(userId: string, model: string): Promise<string> {\n    const id = crypto.randomUUID();\n    this.conversations.set(id, {\n      id,\n      userId,\n      title: \"New conversation\",\n      model,\n      createdAt: new Date(),\n      updatedAt: new Date(),\n      messageCount: 0,\n      totalTokens: 0,\n      isArchived: false,\n    });\n    return id;\n  }\n\n  async addMessage(message: Message): Promise<void> {\n    if (!this.messages.has(message.conversationId)) {\n      this.messages.set(message.conversationId, []);\n    }\n    this.messages.get(message.conversationId)!.push(message);\n\n    const conv = this.conversations.get(message.conversationId);\n    if (conv) {\n      conv.messageCount++;\n      conv.totalTokens += message.tokens;\n      conv.updatedAt = new Date();\n    }\n  }\n\n  async getConversation(id: string): Promise<{\n    conversation: Conversation | null;\n    messages: Message[];\n  }> {\n    return {\n      conversation: this.conversations.get(id) ?? null,\n      messages: this.messages.get(id) ?? [],\n    };\n  }\n\n  async listUserConversations(\n    userId: string,\n    limit = 50\n  ): Promise<Conversation[]> {\n    return [...this.conversations.values()]\n      .filter((c) => c.userId === userId && !c.isArchived)\n      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())\n      .slice(0, limit);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage considerations"
      }), ": Use PostgreSQL or Cosmos DB for production. Shard by user_id. Implement TTL for conversation retention (90 days for free, indefinite for paid). Full-text search on conversation content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ChatGPTService {\n  private cache: PromptCache;\n  private queue: LLMRequestQueue;\n  private conversations: ConversationStore;\n  private sse: SSEStreamManager;\n\n  async handleChatCompletion(req: ChatGPTRequest, res: any): Promise<void> {\n    try {\n      // Rate limit check\n      await this.checkRateLimit(req);\n\n      // Build conversation context\n      const conv = req.conversation_id\n        ? await this.conversations.getConversation(req.conversation_id)\n        : null;\n\n      const messages = conv ? [...conv.messages.map((m) => ({ role: m.role, content: m.content })), ...req.messages] : req.messages;\n\n      // Check prompt cache\n      const cacheKey = this.cache.getCacheKey(messages);\n      const cached = this.cache.get(cacheKey);\n\n      if (cached) {\n        // Use cached prefix + generate only new tokens\n        return this.generateFromCache(cached, messages, req, res);\n      }\n\n      // Enqueue for inference\n      if (req.stream) {\n        const clientId = crypto.randomUUID();\n        this.sse.addClient(clientId, res);\n        await this.queue.enqueue(req.user ?? \"anonymous\", { ...req, messages, clientId }, req.priority);\n      } else {\n        const result = await this.queue.enqueue(req.user ?? \"anonymous\", { ...req, messages });\n        res.json(result);\n      }\n    } catch (err: any) {\n      res.status(err.status ?? 500).json({ error: { message: err.message } });\n    }\n  }\n\n  private async checkRateLimit(req: any): Promise<void> {\n    // Token bucket implementation\n  }\n\n  private async generateFromCache(cached: any, messages: any[], req: any, res: any): Promise<void> {\n    // Generate only the new tokens after cached prefix\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ChatGPT architecture has load balancer, API gateway, request queue, inference cluster, and response streamer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSE enables sub-100ms time-to-first-token with token-by-token streaming delivery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context window management balances quality vs cost: sliding window, summarization, hybrid, or RAG"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prompt caching reuses KV-cache for repeated prefixes, reducing TTFT from 100-500ms to ~10ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous batching on GPU maximizes inference throughput by processing multiple requests per batch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting tiers (free/pro/enterprise) with token bucket ensure fair resource allocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request queuing with priority levels and round-robin fairness prevents overload"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conversation storage uses PostgreSQL with sharding by user_id and TTL-based retention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety layer: content moderation before and after generation, PII detection, output guardrails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production challenges: GPU cost optimization, latency SLOs, multi-modal support (DALL-E, GPT-4V)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Real-time responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE streaming with token-by-token delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polling for completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long conversations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context window manager with sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncating without summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KV-cache prefix caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-computing full prompt each time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous batching + dynamic batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-request per GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token bucket per user tier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global rate limit (unfair)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL with user_id sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-table unbounded growth"
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
        }), "\n    Q1: How would you design the streaming response system for ChatGPT?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use Server-Sent Events (SSE) for token-by-token delivery. Flow: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Client opens an SSE connection. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Server validates request, checks rate limits, builds prompt. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " LLM inference starts generating tokens. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Each token is sent as an SSE event: `data: {\"choices\":[{\"delta\":{\"content\":\"token\"}}]}`. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " When generation completes, send `data: [DONE]`. Challenges: handling 1M+ concurrent connections, backpressure when clients are slow (buffer tokens or drop connection), reconnection with context resumption, and token-level rate limiting."]
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
        }), "\n    Q2: How do you manage the context window for long conversations?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Four strategies: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Sliding window"
          }), ": Keep the N most recent messages, drop older ones. Simple but loses context. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Summarization"
          }), ": When approaching the limit, ask the LLM to summarize older messages into a compressed form. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Hybrid"
          }), ": Recent messages in full, older messages as a summary plus key details. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) RAG"
          }), ": Store all messages in a vector database. Retrieve relevant historical context dynamically. For ChatGPT, a hybrid approach is used: the system prompt + recent messages in full, with older context optionally retrieved from a conversation store."]
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
        }), "\n    Q3: What is prompt caching and how does it reduce latency?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LLMs process prompts in two phases: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Prefill"
          }), ": Compute KV-cache for the prompt tokens (compute-bound, takes 100-500ms). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Decode"
          }), ": Generate tokens one-by-one using the KV-cache (memory-bound). Prompt caching stores the KV-cache from the prefill phase. If a new prompt shares the same prefix (e.g., same system prompt), the cached KV-cache can be reused, skipping the expensive prefill phase. This reduces time-to-first-token from ~500ms to ~10ms for cache hits. Cache eviction uses LRU policy."]
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
        }), "\n    Q4: How do you handle rate limiting and queuing for LLM inference?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Multi-tier approach: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Application-level rate limiting"
          }), ": Token bucket per user tier (free/pro/enterprise). Limits both requests per minute and tokens per month. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Request queuing"
          }), ": Priority queues (high for paid users, normal for free). Max queue length per user. Queue depth monitoring to trigger auto-scaling. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Continuous batching"
          }), ": GPU processes multiple requests simultaneously. Requests are dynamically batched to maximize throughput. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Fair scheduling"
          }), ": Round-robin across active users to prevent any single user from starving others. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Circuit breaker"
          }), ": If GPU queue depth exceeds threshold, return 503 with Retry-After."]
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
        }), "\n    Q5: How would you design conversation storage at scale?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use PostgreSQL or Cosmos DB with the following design: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Conversations table"
          }), ": id (UUID PK), user_id (indexed), title, model, created_at, updated_at, message_count, is_archived. Partition by user_id hash. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Messages table"
          }), ": id (UUID), conversation_id (FK, indexed), role, content, tokens, created_at, parent_id (for branching conversations). Partition by conversation_id with TTL. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search"
          }), ": Enable full-text search on message content. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching"
          }), ": Redis for recent conversations (last 10 per user). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Retention"
          }), ": Free users 90 days, paid users indefinite. Archive conversations older than 1 year to cold storage."]
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
        }), "\n    Q6: What is continuous batching and why is it important?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Continuous batching (also called dynamic batching or inflight batching) is a technique where a GPU processes multiple independent requests simultaneously, even if they started at different times. Unlike static batching (wait for N requests), continuous batching adds new requests to the running batch as old ones complete. Benefits: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Higher GPU utilization (up to 4x compared to single-request). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Lower latency for individual requests (no waiting for batch to fill). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Better throughput under variable load. This is a key optimization in production LLM serving systems like vLLM, TensorRT-LLM, and NVIDIA Triton Inference Server."]
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
        }), "\n    Q7: How do you handle safety and content moderation in ChatGPT?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Multi-layer safety: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Input moderation"
          }), ": Before generating, scan user input for harmful content (hate speech, violence, sexual content, PII, jailbreak attempts). Use a lightweight classifier or API (OpenAI Moderation endpoint). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Output moderation"
          }), ": After generation, scan the model's response for the same categories. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Guardrails"
          }), ": Apply rule-based constraints (don't reveal system prompt, don't execute commands). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Rate limiting"
          }), ": Stricter limits for suspicious activity. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Human review"
          }), ": Flag high-risk interactions for manual review. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Red teaming"
          }), ": Continuous testing with adversarial inputs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) User reporting"
          }), ": Allow users to report problematic outputs."]
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
        }), "\n    Q8: How do you optimize GPU utilization for LLM inference?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Key optimizations: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Continuous batching"
          }), ": Process multiple requests on the same GPU simultaneously. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) KV-cache management"
          }), ": Use PagedAttention (from vLLM) for efficient memory management of KV-cache. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Tensor parallelism"
          }), ": Distribute model across multiple GPUs (e.g., 8 GPUs for a 70B model). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Quantization"
          }), ": Use FP16, INT8, or INT4 precision to reduce memory and increase throughput. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Speculative decoding"
          }), ": Use a small draft model to predict tokens, large model to verify. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Prompt caching"
          }), ": Reuse KV-cache for repeated prefixes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Pipeline parallelism"
          }), ": Split model layers across GPUs."]
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
        }), "\n    Q9: How do you handle model deployment and versioning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Model deployment pipeline: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Registry"
          }), ": Store model artifacts (weights, tokenizer, config) in a model registry (MLflow, S3 with versioning). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Canary deployment"
          }), ": Deploy new model to 5% of traffic, monitor metrics (quality, latency, error rate). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) A/B testing"
          }), ": Compare new vs old model on specific metrics (user satisfaction, task completion). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Rollback"
          }), ": Instant rollback to previous version if degradation detected. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Shadow mode"
          }), ": Run new model in parallel without serving users, compare outputs offline. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Version pinning"
          }), ": Users can pin a specific model version (e.g., gpt-4-0613). Each user request specifies which model version to use."]
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
        }), "\n    Q10: How do you design the API for ChatGPT streaming vs non-streaming?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Unified API: both modes accept the same input. The `stream` parameter controls the response format. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-streaming"
          }), ": Server waits for complete generation, returns full JSON response with all tokens and usage statistics. Simpler for clients. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming"
          }), ": Server returns SSE stream with token-by-token events. Client accumulates tokens for display. Benefits: sub-100ms time-to-first-token, progressive UI rendering, interruptible (client can abort mid-generation). The API should reuse the same input schema for both modes. Streaming response format: `data: {\"choices\":[{\"delta\":{\"content\":\"token\"},\"index\":0}]}`. End with `data: [DONE]`."]
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
      }), ": What technology enables token-by-token streaming in ChatGPT?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) WebSockets\nb) Server-Sent Events (SSE)\nc) Long polling\nd) HTTP/2 push"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Server-Sent Events (SSE)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SSE provides unidirectional server-to-client streaming over HTTP, perfect for real-time token delivery."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is the main benefit of prompt caching?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Reduced storage costs\nb) Lower time-to-first-token\nc) Better response quality\nd) Longer context windows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Lower time-to-first-token"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Prompt caching reuses the KV-cache from the prefill phase, reducing TTFT from ~500ms to ~10ms."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which technique maximizes GPU throughput for LLM serving?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Static batching\nb) Continuous batching\nc) Single request per GPU\nd) Sequence batching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Continuous batching"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Continuous batching dynamically adds and removes requests from the GPU batch, maximizing utilization."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the purpose of a request queue in LLM serving?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Increase throughput\nb) Buffer requests during traffic spikes\nc) Improve response quality\nd) Reduce GPU memory usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Buffer requests during traffic spikes"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Request queues absorb traffic spikes and ensure fair scheduling across users."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the recommended storage strategy for conversation history?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Single MongoDB collection with no indexes\nb) PostgreSQL with user_id sharding and TTL\nc) In-memory storage only\nd) Redis with no persistence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) PostgreSQL with user_id sharding and TTL"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "PostgreSQL with sharding provides persistence, queryability, and TTL-based retention management."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a basic SSE stream in Node.js/TypeScript that sends tokens (words) one-by-one with 100ms delay between each."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a token counter function that estimates the number of tokens in a text (rule of thumb: ~4 characters per token)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a context window manager that takes an array of messages and a max token limit, and returns the subset that fits within the limit using a sliding window strategy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a simple prompt cache with LRU eviction that stores and retrieves KV-cache entries (abstracted as objects). Support get, set, and evict operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design and implement a complete ChatGPT-like chat service with: SSE streaming, conversation storage (SQLite), context window management, and basic rate limiting (token bucket)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a continuous batching simulator: given a stream of requests arriving at different times, batch them for GPU processing, and report throughput and average latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
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
        }), " Have questions ready about how the company uses 07-system-design> ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/12-design-whatsapp",
          children: "Design WhatsApp"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Design ChatGPT — Streaming, Context Window, Prompt Caching builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Design ChatGPT — Streaming, Context Window, Prompt Caching before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Design ChatGPT — Streaming, Context Window, Prompt Caching is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Design ChatGPT — Streaming, Context Window, Prompt Caching in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Design ChatGPT — Streaming, Context Window, Prompt Caching chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Design ChatGPT — Streaming, Context Window, Prompt Caching is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Design ChatGPT — Streaming, Context Window, Prompt Caching is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Design ChatGPT — Streaming, Context Window, Prompt Caching is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Design ChatGPT — Streaming, Context Window, Prompt Caching issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Design ChatGPT — Streaming, Context Window, Prompt Caching in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Design ChatGPT — Streaming, Context Window, Prompt Caching that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Design ChatGPT — Streaming, Context Window, Prompt Caching is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Design ChatGPT — Streaming, Context Window, Prompt Caching in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Design ChatGPT — Streaming, Context Window, Prompt Caching and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Design ChatGPT — Streaming, Context Window, Prompt Caching on an empty input?"
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
      children: ["**Q: How long does it take to master design chatgpt?\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: "Understanding the evolution of design chatgpt helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
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
      children: "For AI engineering, understanding design chatgpt at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of design chatgpt like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply design chatgpt concepts in a mini-project\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), ": What is the core concept of design chatgpt?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply design chatgpt in real systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Design ChatGPT — Streaming, Context Window, Prompt Caching."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Design ChatGPT — Streaming, Context Window, Prompt Caching logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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