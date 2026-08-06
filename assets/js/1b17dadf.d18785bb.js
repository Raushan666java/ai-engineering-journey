"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[66777],{

/***/ 40979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_23_case_study_ai_content_md_1b1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-23-case-study-ai-content-md-1b1.json
const site_docs_courses_laravel_23_case_study_ai_content_md_1b1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/23-case-study-ai-content","title":"Chapter 23: Case Study — AI-Powered Content Platform","description":"Previous Capstone","source":"@site/docs/courses/laravel/23-case-study-ai-content.md","sourceDirName":"courses/laravel","slug":"/laravel/23-case-study-ai-content","permalink":"/ai-engineering-journey/laravel/23-case-study-ai-content","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"id":"23-case-study-ai-content","slug":"/laravel/23-case-study-ai-content","title":"Chapter 23: Case Study — AI-Powered Content Platform","sidebar_label":"Chapter 23: Case Study — AI-Powered Content Platform","sidebar_position":23},"sidebar":"coursesSidebar","previous":{"title":"Chapter 22: Case Study — SaaS E-Commerce Platform","permalink":"/ai-engineering-journey/laravel/22-case-study-ecommerce"},"next":{"title":"Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS","permalink":"/ai-engineering-journey/laravel/24-capstone"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/23-case-study-ai-content.md


const frontMatter = {
	id: '23-case-study-ai-content',
	slug: '/laravel/23-case-study-ai-content',
	title: 'Chapter 23: Case Study — AI-Powered Content Platform',
	sidebar_label: 'Chapter 23: Case Study — AI-Powered Content Platform',
	sidebar_position: 23
};
const contentTitle = 'Chapter 23: Case Study — AI-Powered Content Platform';

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
  "value": "Theory — End-to-End Design",
  "id": "theory--end-to-end-design",
  "level": 2
}, {
  "value": "7.1 Requirements Gathering",
  "id": "71-requirements-gathering",
  "level": 3
}, {
  "value": "7.2 Architecture Overview",
  "id": "72-architecture-overview",
  "level": 3
}, {
  "value": "7.3 Data Model",
  "id": "73-data-model",
  "level": 3
}, {
  "value": "7.4 RAG Pipeline",
  "id": "74-rag-pipeline",
  "level": 3
}, {
  "value": "7.4.1 Document Ingestion Pipeline",
  "id": "741-document-ingestion-pipeline",
  "level": 4
}, {
  "value": "7.4.2 Embedding Service",
  "id": "742-embedding-service",
  "level": 4
}, {
  "value": "7.4.3 Semantic Search with pgvector",
  "id": "743-semantic-search-with-pgvector",
  "level": 4
}, {
  "value": "7.4.4 LLM-Augmented Generation",
  "id": "744-llm-augmented-generation",
  "level": 4
}, {
  "value": "7.5 AI Agent Design",
  "id": "75-ai-agent-design",
  "level": 3
}, {
  "value": "7.5.1 AI Agent Service (Orchestrator)",
  "id": "751-ai-agent-service-orchestrator",
  "level": 4
}, {
  "value": "7.5.2 Writer Agent",
  "id": "752-writer-agent",
  "level": 4
}, {
  "value": "7.5.3 Editor Agent",
  "id": "753-editor-agent",
  "level": 4
}, {
  "value": "7.5.4 Researcher Agent (with web search)",
  "id": "754-researcher-agent-with-web-search",
  "level": 4
}, {
  "value": "7.5.5 Agent Chaining Workflow",
  "id": "755-agent-chaining-workflow",
  "level": 4
}, {
  "value": "7.6 Vector Store Strategy",
  "id": "76-vector-store-strategy",
  "level": 3
}, {
  "value": "7.7 MCP Tool Exposure",
  "id": "77-mcp-tool-exposure",
  "level": 3
}, {
  "value": "7.8 Content Moderation",
  "id": "78-content-moderation",
  "level": 3
}, {
  "value": "7.9 Caching Strategy",
  "id": "79-caching-strategy",
  "level": 3
}, {
  "value": "7.10 Real-Time Collaboration",
  "id": "710-real-time-collaboration",
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
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
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
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
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
        id: "chapter-23-case-study--ai-powered-content-platform",
        children: "Chapter 23: Case Study — AI-Powered Content Platform"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/22-case-study-ecommerce",
          children: "Case Study E-Commerce"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/24-capstone",
          children: "Capstone"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect a RAG (Retrieval-Augmented Generation) pipeline within Laravel using PostgreSQL's pgvector extension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement AI agents with structured output using the AI SDK for content generation, editing, and research"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a multi-tenant vector search strategy with hybrid (full-text + semantic) retrieval and weighted scoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expose MCP (Model Context Protocol) servers that external AI clients can use to search, generate, and analyze content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement an AI-powered content moderation pipeline for both text and image analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design caching strategies for embeddings, search results, and AI responses that balance freshness with cost"
      }), "\n"]
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
        href: "../../assets/images/lessons/laravel/23-case-study-ai-content/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/23-case-study-ai-content/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/23-case-study-ai-content/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/23-case-study-ai-content/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/23-case-study-ai-content/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/23-case-study-ai-content/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI content platform with RAG, agents, and vector search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define content creation, moderation, and search flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven with queued AI processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use events for async content processing pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve, augment, generate content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use vector store for semantic search over content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Agent Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized agents for content tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderation, generation, and search agents collaborate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Store Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store embeddings for semantic search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PostgreSQL pgvector or dedicated vector DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSockets for live updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel Reverb for real-time collaboration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[User] --> B[Laravel App]     B --> C[Content Moderation Agent]     B --> D[RAG Pipeline]     D --> E[Vector Store]     D --> F[LLM Service]     B --> G[Search Agent]     B --> H[Real-Time Reverb]     H --> I[WebSocket Clients]     B --> J[Queue Workers]     J --> K[AI Processing Jobs] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory--end-to-end-design",
      children: "Theory — End-to-End Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/23-case-study-ai-content.png",
        alt: "AI Content Case Study"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-requirements-gathering",
      children: "7.1 Requirements Gathering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The AI content platform requires content creation, moderation, search, and real-time collaboration features."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The platform enables content teams to author, edit, search, and publish articles at scale with AI assistance. Writers produce drafts, editors refine them, and AI agents provide research augmentation, quality checks, and semantic search across the entire knowledge base."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 million documents with version history, metadata, tags, and SEO fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language querying across all documents using vector similarity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI content generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate articles from briefs with structured output (title, body, summary, SEO tags)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI editing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated quality review: grammar, style, factual consistency, tone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web search integration for fact-checking and citation enrichment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documents in 15+ languages with language-aware search and generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple editors on the same document with conflict resolution (operational transforms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content moderation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated flagging of toxic or NSFW content in text and images"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-Functional Requirements"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100,000 registered users (writers, editors, admins)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 million documents, each averaging 10 KB of text + metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1536 (OpenAI text-embedding-3-small)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search latency (p95)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<500ms for semantic search across all documents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generation latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<15 seconds for a 1000-word article"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moderation throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process 1000 submissions per minute via async queue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-architecture-overview",
      children: "7.2 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The architecture uses event-driven design with queued AI processing and WebSocket real-time updates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system consists of five layers: API gateway, Laravel backend, vector database, AI SDK agent layer, and external service integrations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────────────────────────────┐\n│                          Content Platform UI                             │\n│            (Livewire / Inertia + Vue 3, Reverb WebSockets)               │\n└──────────────────────────────────────────────────────────────────────────┘\n                                    │\n                            ┌───────┴───────┐\n                            │   Load Balancer│\n                            └───────┬───────┘\n                                    │\n                    ┌───────────────┴───────────────┐\n                    │       Laravel Octane           │\n                    │   ┌───────────────────────┐   │\n                    │   │  API Controllers       │   │\n                    │   │  AI Agent Orchestrator │   │\n                    │   │  MCP Server Handlers   │   │\n                    │   │  Document Service      │   │\n                    │   └───────────────────────┘   │\n                    └───────────────┬───────────────┘\n                                    │\n        ┌───────────────────────────┼───────────────────────────┐\n        │                           │                           │\n┌───────┴───────┐           ┌───────┴───────┐           ┌───────┴───────┐\n│  PostgreSQL    │           │    Redis       │           │  Queue Workers │\n│  + pgvector    │           │                │           │  (Horizon)     │\n│  (documents,   │           │ ┌────────────┐ │           │  ┌───────────┐ │\n│   embeddings,  │           │ │ Embeddings │ │           │  │Moderation │ │\n│   vectors)     │           │ │ Cache      │ │           │  │Pipeline   │ │\n│               │           │ │ Search TTL  │ │           │  │Embed Gen  │ │\n│               │           │ │ AI Responses│ │           │  │Content Gen│ │\n└───────┬───────┘           │ └────────────┘ │           │  └───────────┘ │\n        │                   └───────┬───────┘           └───────┬───────┘\n        │                           │                           │\n┌───────┴───────┐           ┌───────┴───────┐                   │\n│  AI SDK Layer  │           │   Reverb WS    │                   │\n│ ┌───────────┐  │           │ (collaboration  │                   │\n│ │ Researcher│  │           │  edit status,   │                   │\n│ │ Writer    │  │           │  agent progress │                   │\n│ │ Editor    │  │           │  broadcasts)   │                   │\n│ └───────────┘  │           └───────────────┘                   │\n└───────┬───────┘                                               │\n        │                                                       │\n┌───────┴───────┐                                               │\n│ External APIs  │                                               │\n│ (OpenAI,      │                                               │\n│  Perplexity,  │                                               │\n│  Claude)      │                                               │\n└───────────────┘                                               │\n        │                                                       │\n┌───────┴───────┐                                               │\n│   MCP Servers  │                                              │\n│ (search_docs, │                                               │\n│  generate,    │                                               │\n│  analyze)     │                                               │\n└───────────────┘                                               │\n        │                                                       │\n        └───────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-data-model",
      children: "7.3 Data Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Content, users, embeddings, and moderation results are stored in PostgreSQL with pgvector for vector search."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The schema is designed around documents, their versions, embeddings, and the artifacts produced by AI agents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Documents (core entity)\nCREATE TABLE documents (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    workspace_id    BIGINT UNSIGNED NOT NULL,\n    author_id       BIGINT UNSIGNED NOT NULL,\n    title           VARCHAR(500) NOT NULL,\n    slug            VARCHAR(500) NOT NULL,\n    body            LONGTEXT,\n    summary         VARCHAR(1000),\n    language        CHAR(2) NOT NULL DEFAULT 'en',\n    status          ENUM('draft', 'review', 'published', 'archived') NOT NULL DEFAULT 'draft',\n    visibility      ENUM('private', 'team', 'public') NOT NULL DEFAULT 'team',\n    seo_title       VARCHAR(500),\n    seo_description VARCHAR(1000),\n    seo_keywords    JSON,\n    metadata        JSON,\n    published_at    TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_workspace_status (workspace_id, status),\n    INDEX idx_author (author_id),\n    INDEX idx_language (language),\n    INDEX idx_published_at (published_at),\n    FULLTEXT INDEX ft_title_body (title, body),\n    UNIQUE INDEX idx_workspace_slug (workspace_id, slug),\n\n    CONSTRAINT fk_doc_workspace FOREIGN KEY (workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE,\n    CONSTRAINT fk_doc_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Document versions (immutable audit trail)\nCREATE TABLE document_versions (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    document_id     BIGINT UNSIGNED NOT NULL,\n    version_number  INT UNSIGNED NOT NULL,\n    title           VARCHAR(500) NOT NULL,\n    body            LONGTEXT,\n    summary         VARCHAR(1000),\n    editor_id       BIGINT UNSIGNED NULL,\n    change_summary  VARCHAR(500),\n    word_count      INT UNSIGNED NOT NULL DEFAULT 0,\n    checksum        CHAR(64) NOT NULL,  -- SHA-256 for integrity\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    INDEX idx_document (document_id),\n    UNIQUE INDEX idx_doc_version (document_id, version_number),\n\n    CONSTRAINT fk_version_doc FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,\n    CONSTRAINT fk_version_editor FOREIGN KEY (editor_id) REFERENCES users(id) ON DELETE SET NULL\n) ENGINE=InnoDB;\n\n-- pgvector extension must be enabled:\n-- CREATE EXTENSION vector;\n\n-- Document embeddings (separate table for vector storage)\nCREATE TABLE document_embeddings (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    document_id     BIGINT UNSIGNED NOT NULL,\n    chunk_index     INT UNSIGNED NOT NULL,  -- which chunk of the document\n    chunk_text      TEXT NOT NULL,\n    embedding       VECTOR(1536) NOT NULL,   -- OpenAI text-embedding-3-small\n    content_type    ENUM('article', 'comment', 'metadata') NOT NULL DEFAULT 'article',\n    language        CHAR(2) NOT NULL DEFAULT 'en',\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    INDEX idx_document_chunk (document_id, chunk_index),\n    INDEX idx_content_type (content_type),\n    INDEX idx_language (language),\n\n    CONSTRAINT fk_embedding_doc FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- HNSW index for fast approximate nearest neighbor search\n-- CREATE INDEX idx_embedding_hnsw ON document_embeddings\n--     USING hnsw (embedding vector_cosine_ops)\n--     WITH (m = 16, ef_construction = 200);\n\n-- Tags\nCREATE TABLE tags (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    workspace_id    BIGINT UNSIGNED NOT NULL,\n    name            VARCHAR(100) NOT NULL,\n    slug            VARCHAR(100) NOT NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    UNIQUE INDEX idx_workspace_tag (workspace_id, slug),\n    CONSTRAINT fk_tag_workspace FOREIGN KEY (workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Pivot: document_tags\nCREATE TABLE document_tags (\n    document_id     BIGINT UNSIGNED NOT NULL,\n    tag_id          BIGINT UNSIGNED NOT NULL,\n\n    PRIMARY KEY (document_id, tag_id),\n    INDEX idx_tag (tag_id),\n    CONSTRAINT fk_dt_document FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,\n    CONSTRAINT fk_dt_tag FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Comments (for collaboration and moderation)\nCREATE TABLE comments (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    document_id     BIGINT UNSIGNED NOT NULL,\n    user_id         BIGINT UNSIGNED NOT NULL,\n    parent_id       BIGINT UNSIGNED NULL,\n    body            TEXT NOT NULL,\n    resolved_at     TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_document (document_id),\n    INDEX idx_user (user_id),\n    INDEX idx_parent (parent_id),\n    INDEX idx_resolved (resolved_at),\n\n    CONSTRAINT fk_comment_doc FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,\n    CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,\n    CONSTRAINT fk_comment_parent FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Agent logs (audit trail for all AI actions)\nCREATE TABLE agent_logs (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    agent_type      VARCHAR(100) NOT NULL,  -- 'writer', 'editor', 'researcher', 'moderator'\n    session_id      CHAR(36) NOT NULL,\n    user_id         BIGINT UNSIGNED NULL,\n    document_id     BIGINT UNSIGNED NULL,\n    action          VARCHAR(100) NOT NULL,  -- 'generate', 'review', 'research', 'moderate'\n    input_tokens    INT UNSIGNED NOT NULL DEFAULT 0,\n    output_tokens   INT UNSIGNED NOT NULL DEFAULT 0,\n    model           VARCHAR(100) NOT NULL,\n    duration_ms     INT UNSIGNED NOT NULL DEFAULT 0,\n    status          ENUM('started', 'completed', 'failed') NOT NULL DEFAULT 'started',\n    error_message   TEXT NULL,\n    metadata        JSON,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n\n    INDEX idx_agent_type (agent_type),\n    INDEX idx_user (user_id),\n    INDEX idx_document (document_id),\n    INDEX idx_status (status),\n    INDEX idx_created_at (created_at)\n) ENGINE=InnoDB;\n\n-- Moderation results\nCREATE TABLE moderation_results (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    moderatable_type   VARCHAR(255) NOT NULL,  -- App\\Models\\Document, App\\Models\\Comment\n    moderatable_id     BIGINT UNSIGNED NOT NULL,\n    status          ENUM('approved', 'flagged', 'rejected') NOT NULL DEFAULT 'approved',\n    categories      JSON,  -- e.g., [\"hate_speech\", \"nsfw\", \"harassment\"]\n    scores          JSON,  -- e.g., {\"toxicity\": 0.95, \"nsfw\": 0.02}\n    reviewed_by     ENUM('ai', 'human') NOT NULL DEFAULT 'ai',\n    reviewer_id     BIGINT UNSIGNED NULL,\n    reviewed_at     TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n\n    INDEX idx_moderatable (moderatable_type, moderatable_id),\n    INDEX idx_status (status),\n    INDEX idx_reviewed_by (reviewed_by),\n\n    CONSTRAINT fk_mod_reviewer FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE SET NULL\n) ENGINE=InnoDB;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-rag-pipeline",
      children: "7.4 RAG Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Retrieve-Augment-Generate: fetch relevant content from vector store, augment the prompt, generate the response."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG (Retrieval-Augmented Generation) is the core architectural pattern. When a user queries the knowledge base, we retrieve relevant document chunks via vector similarity, then pass those chunks as context to an LLM for the final answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "741-document-ingestion-pipeline",
      children: "7.4.1 Document Ingestion Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a document is created or updated, it goes through an asynchronous pipeline that chunks the text, generates embeddings, and stores them in pgvector."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Jobs\\ProcessDocumentEmbeddings.php\n<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse App\\Services\\EmbeddingService;\nuse App\\Services\\DocumentChunker;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass ProcessDocumentEmbeddings implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public function __construct(\n        public Document $document\n    ) {}\n\n    public function handle(\n        EmbeddingService $embedder,\n        DocumentChunker $chunker,\n    ): void {\n        // 1. Chunk the document\n        $chunks = $chunker->chunk(\n            text:  \"{$this->document->title}\\n\\n{$this->document->body}\",\n            size:  512,   // tokens per chunk\n            overlap: 50,  // overlap between chunks\n        );\n\n        // 2. Remove old embeddings for this document\n        $this->document->embeddings()->delete();\n\n        // 3. Generate and store embeddings in batches\n        $batches = array_chunk($chunks, 20);\n\n        foreach ($batches as $batch) {\n            $responses = $embedder->embedTexts($batch);\n\n            $records = [];\n\n            foreach ($responses as $index => $response) {\n                $records[] = [\n                    'document_id'  => $this->document->id,\n                    'chunk_index'  => $index,\n                    'chunk_text'   => $batch[$index],\n                    'embedding'    => DB::raw(\"'[\" . implode(',', $response->embedding) . \"]'::vector\"),\n                    'content_type' => 'article',\n                    'language'     => $this->document->language,\n                ];\n            }\n\n            DB::table('document_embeddings')->insert($records);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "742-embedding-service",
      children: "7.4.2 Embedding Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The embedding service abstracts the AI SDK provider (OpenAI in this case) behind an interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\EmbeddingService.php\n<?php\n\nnamespace App\\Services;\n\nuse Illuminate\\Support\\Facades\\Cache;\nuse Illuminate\\Support\\Facades\\Log;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass EmbeddingService\n{\n    private string $model = 'text-embedding-3-small';\n\n    private int $dimensions = 1536;\n\n    public function embedText(string $text): array\n    {\n        $response = $this->embedTexts([$text]);\n\n        return $response[0]->embedding;\n    }\n\n    public function embedTexts(array $texts): array\n    {\n        $cacheKey = $this->buildCacheKey($texts);\n\n        return Cache::remember($cacheKey, 86400, function () use ($texts) {\n            $response = OpenAI::embeddings()->create([\n                'model' => $this->model,\n                'input' => $texts,\n            ]);\n\n            $embeddings = [];\n\n            foreach ($response->embeddings as $embedding) {\n                $embeddings[] = (object) [\n                    'embedding' => $embedding->embedding,\n                    'index'     => $embedding->index,\n                ];\n            }\n\n            usort($embeddings, fn ($a, $b) => $a->index <=> $b->index);\n\n            return $embeddings;\n        });\n    }\n\n    private function buildCacheKey(array $texts): string\n    {\n        $hash = md5(implode('|', array_map('md5', $texts)));\n\n        return \"embedding:{$this->model}:{$hash}\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "743-semantic-search-with-pgvector",
      children: "7.4.3 Semantic Search with pgvector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel does not have native pgvector support, so we write raw queries using the query builder."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\VectorSearchService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Document;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass VectorSearchService\n{\n    public function __construct(\n        private EmbeddingService $embedder,\n    ) {}\n\n    /**\n     * Perform semantic search across documents.\n     *\n     * @param string $query        Natural language query\n     * @param array  $options      Filters: workspace_id, language, status, content_type, limit\n     * @return array\n     */\n    public function search(string $query, array $options = []): array\n    {\n        $queryEmbedding = $this->embedder->embedText($query);\n\n        $vectorLiteral = '[' . implode(',', $queryEmbedding) . ']';\n\n        $limit = $options['limit'] ?? 10;\n        $offset = $options['offset'] ?? 0;\n\n        $wheres = [];\n        $bindings = [];\n\n        if (!empty($options['workspace_id'])) {\n            $wheres[] = 'd.workspace_id = ?';\n            $bindings[] = $options['workspace_id'];\n        }\n\n        if (!empty($options['language'])) {\n            $wheres[] = 'de.language = ?';\n            $bindings[] = $options['language'];\n        }\n\n        if (!empty($options['content_type'])) {\n            $wheres[] = 'de.content_type = ?';\n            $bindings[] = $options['content_type'];\n        }\n\n        if (!empty($options['status'])) {\n            $wheres[] = 'd.status = ?';\n            $bindings[] = $options['status'];\n        }\n\n        $whereClause = !empty($wheres)\n            ? 'WHERE ' . implode(' AND ', $wheres)\n            : '';\n\n        $sql = \"\n            SELECT\n                d.id,\n                d.title,\n                d.summary,\n                d.slug,\n                d.status,\n                d.language,\n                de.chunk_text,\n                de.chunk_index,\n                de.content_type,\n                1 - (de.embedding <=> ?::vector) AS similarity\n            FROM document_embeddings de\n            JOIN documents d ON d.id = de.document_id\n            {$whereClause}\n            ORDER BY de.embedding <=> ?::vector\n            LIMIT ? OFFSET ?\n        \";\n\n        $bindings = array_merge(\n            [$vectorLiteral],\n            $bindings,\n            [$vectorLiteral, $limit, $offset]\n        );\n\n        return DB::select($sql, $bindings);\n    }\n\n    /**\n     * Hybrid search: combine full-text and vector scores.\n     */\n    public function hybridSearch(string $query, array $options = []): array\n    {\n        $queryEmbedding = $this->embedder->embedText($query);\n\n        $vectorLiteral = '[' . implode(',', $queryEmbedding) . ']';\n\n        $limit = $options['limit'] ?? 10;\n        $workspaceId = $options['workspace_id'] ?? null;\n\n        $sql = \"\n            WITH vector_results AS (\n                SELECT\n                    d.id,\n                    d.title,\n                    d.summary,\n                    de.chunk_text,\n                    1 - (de.embedding <=> ?::vector) AS vector_score,\n                    ROW_NUMBER() OVER (ORDER BY de.embedding <=> ?::vector) AS vector_rank\n                FROM document_embeddings de\n                JOIN documents d ON d.id = de.document_id\n                WHERE d.workspace_id = ?\n                ORDER BY de.embedding <=> ?::vector\n                LIMIT 50\n            ),\n            fts_results AS (\n                SELECT\n                    d.id,\n                    d.title,\n                    d.summary,\n                    d.body AS chunk_text,\n                    ts_rank_cd(\n                        to_tsvector('english', d.title || ' ' || d.body),\n                        plainto_tsquery('english', ?)\n                    ) AS fts_score,\n                    ROW_NUMBER() OVER (ORDER BY ts_rank_cd(\n                        to_tsvector('english', d.title || ' ' || d.body),\n                        plainto_tsquery('english', ?)\n                    ) DESC) AS fts_rank\n                FROM documents d\n                WHERE d.workspace_id = ?\n                  AND d.status = 'published'\n                LIMIT 50\n            )\n            SELECT\n                COALESCE(v.id, f.id) AS id,\n                COALESCE(v.title, f.title) AS title,\n                COALESCE(v.summary, f.summary) AS summary,\n                COALESCE(v.chunk_text, f.chunk_text) AS excerpt,\n                COALESCE(v.vector_score, 0) AS vector_score,\n                COALESCE(f.fts_score, 0) AS fts_score,\n                -- Weighted hybrid score: 0.7 vector + 0.3 full-text\n                (COALESCE(v.vector_score, 0) * 0.7 + COALESCE(f.fts_score, 0) * 0.3) AS hybrid_score\n            FROM vector_results v\n            FULL OUTER JOIN fts_results f ON v.id = f.id\n            ORDER BY hybrid_score DESC\n            LIMIT ?\n        \";\n\n        return DB::select($sql, [\n            $vectorLiteral,\n            $vectorLiteral,\n            $workspaceId,\n            $vectorLiteral,\n            $query,\n            $query,\n            $workspaceId,\n            $limit,\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "744-llm-augmented-generation",
      children: "7.4.4 LLM-Augmented Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given retrieved context, we generate an answer using the AI SDK."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\RagService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Document;\nuse Illuminate\\Support\\Facades\\Cache;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass RagService\n{\n    public function __construct(\n        private VectorSearchService $vectorSearch,\n        private AiAgentService $agentService,\n    ) {}\n\n    public function answer(string $query, array $options = []): array\n    {\n        // 1. Check cache for similar query\n        $cacheKey = $this->semanticCacheKey($query, $options);\n        $cached = Cache::get($cacheKey);\n\n        if ($cached) {\n            return $cached;\n        }\n\n        // 2. Retrieve relevant chunks\n        $results = $this->vectorSearch->search(\n            query:   $query,\n            options: array_merge($options, ['limit' => 5]),\n        );\n\n        if (empty($results)) {\n            return [\n                'answer'       => 'No relevant documents found.',\n                'sources'      => [],\n                'from_cache'   => false,\n            ];\n        }\n\n        // 3. Build context from retrieved chunks\n        $context = collect($results)\n            ->map(fn ($r) => \"— {$r->chunk_text} (source: {$r->title}, similarity: \" . round($r->similarity, 3) . \")\")\n            ->implode(\"\\n\\n\");\n\n        $sources = collect($results)\n            ->unique('id')\n            ->map(fn ($r) => [\n                'id'    => $r->id,\n                'title' => $r->title,\n                'slug'  => $r->slug,\n                'similarity' => round($r->similarity, 3),\n            ])\n            ->values()\n            ->toArray();\n\n        // 4. Generate answer using AI agent\n        $answer = $this->agentService->execute('researcher', [\n            'system' => \"You are a research assistant. Answer the user's question based SOLELY on the provided context. If the context does not contain enough information, say so. Cite sources by title.\",\n            'prompt' => \"Context:\\n{$context}\\n\\nQuestion: {$query}\",\n        ]);\n\n        $result = [\n            'answer'     => $answer,\n            'sources'    => $sources,\n            'from_cache' => false,\n        ];\n\n        // 5. Cache result (TTL based on query specificity — shorter for vague queries)\n        $ttl = strlen($query) > 50 ? 3600 : 300;\n        Cache::put($cacheKey, $result, $ttl);\n\n        return $result;\n    }\n\n    private function semanticCacheKey(string $query, array $options): string\n    {\n        $normalized = mb_strtolower(trim(preg_replace('/\\s+/', ' ', $query)));\n\n        return 'rag:' . md5($normalized . json_encode($options));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Chunk your content strategically. Overlapping chunks with metadata improve retrieval accuracy significantly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Chunk your content strategically. Overlapping chunks with metadata improve retrieval accuracy significantly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-ai-agent-design",
      children: "7.5 AI Agent Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Specialized agents handle moderation, generation, and search, communicating through events and queues."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent layer uses Ollama or the AI SDK with structured output. Each agent has a specific role, prompt, and output schema."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "751-ai-agent-service-orchestrator",
      children: "7.5.1 AI Agent Service (Orchestrator)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\AiAgentService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\AgentLog;\nuse Illuminate\\Support\\Facades\\Log;\nuse Illuminate\\Support\\Str;\n\nclass AiAgentService\n{\n    private array $agents = [\n        'writer'     => WriterAgent::class,\n        'editor'     => EditorAgent::class,\n        'researcher' => ResearcherAgent::class,\n    ];\n\n    public function execute(string $agentType, array $params): mixed\n    {\n        $agentClass = $this->agents[$agentType] ?? throw new \\InvalidArgumentException(\"Unknown agent: {$agentType}\");\n\n        $agent = app($agentClass);\n\n        return $agent->handle($params);\n    }\n\n    public function chain(array $pipeline, array $initialInput): array\n    {\n        $output = $initialInput;\n\n        foreach ($pipeline as $step) {\n            $agentType = $step['agent'];\n            $inputMap  = $step['input_map'] ?? fn ($ctx) => $ctx;\n\n            $output = $this->execute($agentType, $inputMap($output));\n        }\n\n        return $output;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "752-writer-agent",
      children: "7.5.2 Writer Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\Agents\\WriterAgent.php\n<?php\n\nnamespace App\\Services\\Agents;\n\nuse App\\Models\\AgentLog;\nuse App\\Models\\Document;\nuse Illuminate\\Support\\Str;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass WriterAgent\n{\n    public function handle(array $params): array\n    {\n        $brief   = $params['brief'];\n        $tone    = $params['tone'] ?? 'professional';\n        $language = $params['language'] ?? 'en';\n        $wordCount = $params['word_count'] ?? 800;\n        $workspaceId = $params['workspace_id'];\n\n        $startTime = microtime(true);\n\n        // Build the prompt with structured output requirements\n        $prompt = <<<PROMPT\nYou are a professional content writer. Write an article based on the following brief.\n\nBRIEF: {$brief}\nTONE: {$tone}\nLANGUAGE: {$language}\nTARGET WORD COUNT: {$wordCount}\n\nYou MUST return your response as valid JSON with exactly these fields:\n- title (string): An SEO-optimized title\n- body (string): The full article body in markdown\n- summary (string): A 2-3 sentence summary\n- seo_title (string): An SEO title under 60 characters\n- seo_description (string): A meta description under 160 characters\n- seo_keywords (array of strings): 5-10 SEO keywords\n- reading_time_minutes (integer): Estimated reading time\nPROMPT;\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' => 'You are a professional content writer. Return ONLY valid JSON.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n            'temperature' => 0.7,\n            'max_tokens'  => 4096,\n        ]);\n\n        $duration = (int) ((microtime(true) - $startTime) * 1000);\n\n        $content = json_decode($response->choices[0]->message->content, true);\n\n        // Log the agent execution\n        AgentLog::create([\n            'agent_type'    => 'writer',\n            'session_id'    => (string) Str::uuid(),\n            'user_id'       => $params['user_id'] ?? null,\n            'action'        => 'generate',\n            'input_tokens'  => $response->usage->promptTokens,\n            'output_tokens' => $response->usage->completionTokens,\n            'model'         => 'gpt-4o',\n            'duration_ms'   => $duration,\n            'status'        => 'completed',\n            'metadata'      => [\n                'brief' => $brief,\n                'tone'  => $tone,\n                'word_count_target' => $wordCount,\n                'actual_word_count' => str_word_count($content['body'] ?? ''),\n            ],\n        ]);\n\n        return $content;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "753-editor-agent",
      children: "7.5.3 Editor Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\Agents\\EditorAgent.php\n<?php\n\nnamespace App\\Services\\Agents;\n\nuse App\\Models\\AgentLog;\nuse Illuminate\\Support\\Str;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass EditorAgent\n{\n    public function handle(array $params): array\n    {\n        $document = $params['document'];\n\n        $startTime = microtime(true);\n\n        $prompt = <<<PROMPT\nReview the following article for quality, grammar, style, and factual consistency.\n\nTITLE: {$document['title']}\nBODY:\n{$document['body']}\n\nReturn your review as JSON with these fields:\n- overall_score (integer 1-10)\n- grammar_issues (array of { \"text\": string, \"issue\": string, \"suggestion\": string })\n- style_issues (array of { \"text\": string, \"issue\": string, \"suggestion\": string })\n- factual_issues (array of { \"text\": string, \"issue\": string, \"suggestion\": string })\n- strengths (array of strings)\n- recommended_changes (array of strings)\n- summary (string)\nPROMPT;\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' => 'You are an expert editor. Return ONLY valid JSON.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n            'temperature' => 0.3,\n        ]);\n\n        $duration = (int) ((microtime(true) - $startTime) * 1000);\n\n        $review = json_decode($response->choices[0]->message->content, true);\n\n        AgentLog::create([\n            'agent_type'    => 'editor',\n            'session_id'    => (string) Str::uuid(),\n            'user_id'       => $params['user_id'] ?? null,\n            'document_id'   => $params['document_id'] ?? null,\n            'action'        => 'review',\n            'input_tokens'  => $response->usage->promptTokens,\n            'output_tokens' => $response->usage->completionTokens,\n            'model'         => 'gpt-4o',\n            'duration_ms'   => $duration,\n            'status'        => 'completed',\n            'metadata'      => [\n                'overall_score' => $review['overall_score'] ?? null,\n                'issue_counts'  => [\n                    'grammar' => count($review['grammar_issues'] ?? []),\n                    'style'   => count($review['style_issues'] ?? []),\n                    'factual' => count($review['factual_issues'] ?? []),\n                ],\n            ],\n        ]);\n\n        return $review;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "754-researcher-agent-with-web-search",
      children: "7.5.4 Researcher Agent (with web search)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\Agents\\ResearcherAgent.php\n<?php\n\nnamespace App\\Services\\Agents;\n\nuse App\\Models\\AgentLog;\nuse Illuminate\\Support\\Facades\\Http;\nuse Illuminate\\Support\\Str;\nuse OpenAI\\Laravel\\Facades\\OpenAI;\n\nclass ResearcherAgent\n{\n    public function handle(array $params): array\n    {\n        $topic = $params['topic'];\n        $existingContent = $params['existing_content'] ?? null;\n\n        $startTime = microtime(true);\n\n        // 1. Search the web for relevant information\n        $searchResults = $this->searchWeb($topic);\n\n        // 2. Synthesize findings using LLM\n        $searchContext = collect($searchResults)\n            ->map(fn ($r) => \"- {$r['title']}: {$r['snippet']} (source: {$r['url']})\")\n            ->implode(\"\\n\");\n\n        $prompt = <<<PROMPT\nYou are a research assistant. Based on the following web search results, provide researched facts,\ncitations, and additional context for the topic.\n\nTOPIC: {$topic}\n\nSEARCH RESULTS:\n{$searchContext}\n\nEXISTING CONTENT:\n{$existingContent}\n\nReturn your research as JSON with these fields:\n- key_facts (array of { \"fact\": string, \"source_url\": string, \"confidence\": \"high\"|\"medium\"|\"low\" })\n- suggested_citations (array of { \"text\": string, \"source\": string, \"url\": string })\n- corrections (array of { \"original\": string, \"correction\": string, \"reasoning\": string })\n- additional_context (string)\n- gaps (array of strings)\nPROMPT;\n\n        $response = OpenAI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' => 'You are a thorough researcher. Return ONLY valid JSON. Cite real sources.'],\n                ['role' => 'user', 'content' => $prompt],\n            ],\n            'response_format' => ['type' => 'json_object'],\n            'temperature' => 0.3,\n        ]);\n\n        $duration = (int) ((microtime(true) - $startTime) * 1000);\n\n        $research = json_decode($response->choices[0]->message->content, true);\n\n        AgentLog::create([\n            'agent_type'    => 'researcher',\n            'session_id'    => (string) Str::uuid(),\n            'user_id'       => $params['user_id'] ?? null,\n            'document_id'   => $params['document_id'] ?? null,\n            'action'        => 'research',\n            'input_tokens'  => $response->usage->promptTokens,\n            'output_tokens' => $response->usage->completionTokens,\n            'model'         => 'gpt-4o',\n            'duration_ms'   => $duration,\n            'status'        => 'completed',\n            'metadata'      => [\n                'topic' => $topic,\n                'source_count' => count($searchResults),\n                'fact_count'   => count($research['key_facts'] ?? []),\n            ],\n        ]);\n\n        return $research;\n    }\n\n    private function searchWeb(string $query): array\n    {\n        $response = Http::withHeaders([\n            'Authorization' => 'Bearer ' . config('services.perplexity.api_key'),\n        ])->post('https://api.perplexity.ai/chat/completions', [\n            'model' => 'sonar-pro',\n            'messages' => [\n                ['role' => 'system', 'content' => 'Search the web and return results in JSON format with title, url, snippet fields.'],\n                ['role' => 'user', 'content' => \"Search for: {$query}\"],\n            ],\n        ]);\n\n        $results = $response->json();\n\n        // Parse and return structured search results\n        return $results['citations'] ?? [];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "755-agent-chaining-workflow",
      children: "7.5.5 Agent Chaining Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full content generation pipeline chains the Researcher → Writer → Editor in sequence."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\ContentGenerationService.php\n<?php\n\nnamespace App\\Services;\n\nuse App\\Models\\Document;\nuse App\\Events\\AgentProgressUpdated;\n\nclass ContentGenerationService\n{\n    public function __construct(\n        private AiAgentService $agentService,\n    ) {}\n\n    public function generateFromBrief(array $brief): Document\n    {\n        $user = auth()->user();\n        $workspaceId = $brief['workspace_id'];\n\n        // Step 1: Research\n        broadcast(new AgentProgressUpdated('research', 'started', $workspaceId));\n\n        $research = $this->agentService->execute('researcher', [\n            'topic'           => $brief['topic'],\n            'user_id'         => $user->id,\n        ]);\n\n        broadcast(new AgentProgressUpdated('research', 'completed', $workspaceId, [\n            'fact_count' => count($research['key_facts'] ?? []),\n        ]));\n\n        // Step 2: Write\n        broadcast(new AgentProgressUpdated('writing', 'started', $workspaceId));\n\n        $article = $this->agentService->execute('writer', [\n            'brief'        => $brief['topic'] . \"\\n\\nResearch context:\\n\" . json_encode($research['key_facts'] ?? []),\n            'tone'         => $brief['tone'] ?? 'professional',\n            'language'     => $brief['language'] ?? 'en',\n            'word_count'   => $brief['word_count'] ?? 800,\n            'workspace_id' => $workspaceId,\n            'user_id'      => $user->id,\n        ]);\n\n        broadcast(new AgentProgressUpdated('writing', 'completed', $workspaceId, [\n            'title' => $article['title'],\n        ]));\n\n        // Step 3: Create document\n        $document = Document::create([\n            'workspace_id'   => $workspaceId,\n            'author_id'      => $user->id,\n            'title'          => $article['title'],\n            'slug'           => Str::slug($article['title']),\n            'body'           => $article['body'],\n            'summary'        => $article['summary'],\n            'language'       => $brief['language'] ?? 'en',\n            'status'         => 'draft',\n            'seo_title'      => $article['seo_title'] ?? $article['title'],\n            'seo_description'=> $article['seo_description'] ?? $article['summary'],\n            'seo_keywords'   => $article['seo_keywords'] ?? [],\n        ]);\n\n        // Step 4: Edit\n        broadcast(new AgentProgressUpdated('editing', 'started', $workspaceId));\n\n        $review = $this->agentService->execute('editor', [\n            'document'    => $article,\n            'document_id' => $document->id,\n            'user_id'     => $user->id,\n        ]);\n\n        broadcast(new AgentProgressUpdated('editing', 'completed', $workspaceId, [\n            'overall_score' => $review['overall_score'],\n        ]));\n\n        // Step 5: Queue embedding generation\n        \\App\\Jobs\\ProcessDocumentEmbeddings::dispatch($document);\n\n        return $document;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-vector-store-strategy",
      children: "7.6 Vector Store Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " PostgreSQL pgvector stores embeddings alongside relational data, avoiding a separate vector database."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The system uses multiple vector collections (separated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "content_type"
      }), ") with hybrid search."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Collection Strategy"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Content Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Index Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Re-index Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "article"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main document body chunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On document update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "comment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User comments and discussions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On comment create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Titles, summaries, SEO fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On document update"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Re-indexing Command"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Console\\Commands\\ReindexEmbeddings.php\n<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Models\\Document;\nuse App\\Jobs\\ProcessDocumentEmbeddings;\nuse Illuminate\\Console\\Command;\n\nclass ReindexEmbeddings extends Command\n{\n    protected $signature = 'embeddings:reindex\n                           {--chunk=100 : Number of documents per chunk}\n                           {--force : Re-index all documents, not just updated}';\n\n    protected $description = 'Re-generate embeddings for stale or all documents';\n\n    public function handle(): int\n    {\n        $query = Document::query();\n\n        if (!$this->option('force')) {\n            $query->where(function ($q) {\n                $q->whereNull('last_embedded_at')\n                  ->orWhereColumn('updated_at', '>', 'last_embedded_at');\n            });\n        }\n\n        $count = $query->count();\n\n        $this->info(\"Found {$count} documents to re-index.\");\n\n        $bar = $this->output->createProgressBar($count);\n\n        $query->chunkById($this->option('chunk'), function ($documents) use ($bar) {\n            foreach ($documents as $document) {\n                ProcessDocumentEmbeddings::dispatch($document);\n                $bar->advance();\n            }\n        });\n\n        $bar->finish();\n\n        $this->newLine();\n        $this->info('Embedding jobs dispatched.');\n\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Embedding generation is expensive. Cache embeddings and generate them asynchronously via queue jobs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Embedding generation is expensive. Cache embeddings and generate them asynchronously via queue jobs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-mcp-tool-exposure",
      children: "7.7 MCP Tool Exposure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Expose content search and generation as MCP tools for external AI agents to discover and use."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The platform exposes its AI capabilities through MCP (Model Context Protocol) servers. This allows external AI clients—like Claude Desktop, Cursor, or custom agents—to search the knowledge base, generate content, and analyze sentiment directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App/Mcp/Servers/ContentMcpServer.php\n<?php\n\nnamespace App\\Mcp\\Servers;\n\nuse App\\Services\\RagService;\nuse App\\Services\\AiAgentService;\nuse App\\Services\\SentimentAnalysisService;\nuse Illuminate\\Http\\JsonResponse;\nuse Illuminate\\Http\\Request;\n\nclass ContentMcpServer\n{\n    public function __construct(\n        private RagService $ragService,\n        private AiAgentService $agentService,\n        private SentimentAnalysisService $sentimentService,\n    ) {}\n\n    /**\n     * MCP Tool: search_documents\n     *\n     * Search the knowledge base using semantic + hybrid search.\n     */\n    public function searchDocuments(Request $request): JsonResponse\n    {\n        $request->validate([\n            'query'        => 'required|string|max:500',\n            'workspace_id' => 'required|integer',\n            'limit'        => 'integer|min:1|max:50',\n            'mode'         => 'in:semantic,hybrid,fulltext',\n        ]);\n\n        $mode = $request->input('mode', 'hybrid');\n\n        $results = match ($mode) {\n            'semantic' => $this->ragService->vectorSearchService->search(\n                $request->input('query'),\n                ['workspace_id' => $request->input('workspace_id'), 'limit' => $request->input('limit', 10)]\n            ),\n            'hybrid' => $this->ragService->vectorSearchService->hybridSearch(\n                $request->input('query'),\n                ['workspace_id' => $request->input('workspace_id'), 'limit' => $request->input('limit', 10)]\n            ),\n            'fulltext' => $this->fullTextSearch(\n                $request->input('query'),\n                $request->input('workspace_id'),\n                $request->input('limit', 10)\n            ),\n        };\n\n        return response()->json([\n            'jsonrpc' => '2.0',\n            'result'  => [\n                'success'  => true,\n                'results'  => $results,\n                'total'    => count($results),\n                'mode'     => $mode,\n            ],\n            'id' => $request->input('id'),\n        ]);\n    }\n\n    /**\n     * MCP Tool: generate_content\n     *\n     * Generate an article from a brief using the Writer agent.\n     */\n    public function generateContent(Request $request): JsonResponse\n    {\n        $request->validate([\n            'brief'        => 'required|string|max:2000',\n            'tone'         => 'string|in:professional,casual,academic,marketing',\n            'language'     => 'string|size:2',\n            'word_count'   => 'integer|min:100|max:5000',\n            'workspace_id' => 'required|integer',\n        ]);\n\n        $result = $this->agentService->execute('writer', [\n            'brief'        => $request->input('brief'),\n            'tone'         => $request->input('tone', 'professional'),\n            'language'     => $request->input('language', 'en'),\n            'word_count'   => $request->input('word_count', 800),\n            'workspace_id' => $request->input('workspace_id'),\n        ]);\n\n        return response()->json([\n            'jsonrpc' => '2.0',\n            'result'  => array_merge(['success' => true], $result),\n            'id'      => $request->input('id'),\n        ]);\n    }\n\n    /**\n     * MCP Tool: analyze_sentiment\n     *\n     * Analyze sentiment of a text passage.\n     */\n    public function analyzeSentiment(Request $request): JsonResponse\n    {\n        $request->validate([\n            'text' => 'required|string|max:10000',\n        ]);\n\n        $result = $this->sentimentService->analyze($request->input('text'));\n\n        return response()->json([\n            'jsonrpc' => '2.0',\n            'result'  => array_merge(['success' => true], $result),\n            'id'      => $request->input('id'),\n        ]);\n    }\n\n    private function fullTextSearch(string $query, int $workspaceId, int $limit): array\n    {\n        return \\App\\Models\\Document::where('workspace_id', $workspaceId)\n            ->where('status', 'published')\n            ->where(function ($q) use ($query) {\n                $q->whereFullText(['title', 'body'], $query)\n                  ->orWhere('title', 'like', \"%{$query}%\")\n                  ->orWhere('body', 'like', \"%{$query}%\");\n            })\n            ->limit($limit)\n            ->get(['id', 'title', 'summary', 'slug', 'published_at'])\n            ->toArray();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MCP Server Registration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// routes/mcp.php\n<?php\n\nuse App\\Mcp\\Servers\\ContentMcpServer;\n\nRoute::post('mcp/content', [ContentMcpServer::class, '__invoke']);\n\n// Or with explicit routing:\nRoute::match(['POST'], 'mcp/content/search', [ContentMcpServer::class, 'searchDocuments']);\nRoute::match(['POST'], 'mcp/content/generate', [ContentMcpServer::class, 'generateContent']);\nRoute::match(['POST'], 'mcp/content/sentiment', [ContentMcpServer::class, 'analyzeSentiment']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "78-content-moderation",
      children: "7.8 Content Moderation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Moderation agents scan content for policy violations using AI classification before publication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Moderation is a two-stage pipeline: text analysis for toxicity and hate speech, image analysis for NSFW content. Both run asynchronously via Horizon queues."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Jobs\\ModerateDocumentJob.php\n<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Document;\nuse App\\Models\\ModerationResult;\nuse App\\Services\\ModerationService;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass ModerateDocumentJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public function __construct(\n        public Document $document\n    ) {}\n\n    public function handle(ModerationService $moderator): void\n    {\n        // Combine title and body for analysis\n        $text = \"{$this->document->title}\\n\\n{$this->document->body}\";\n\n        $result = $moderator->analyzeText($text);\n\n        ModerationResult::updateOrCreate(\n            [\n                'moderatable_type' => Document::class,\n                'moderatable_id'   => $this->document->id,\n            ],\n            [\n                'status'     => $this->determineStatus($result),\n                'categories' => $result['categories'],\n                'scores'     => $result['scores'],\n                'reviewed_by' => 'ai',\n            ]\n        );\n\n        // Auto-reject if scores exceed thresholds\n        if ($result['scores']['toxicity'] > 0.9 || $result['scores']['nsfw'] > 0.8) {\n            $this->document->update(['status' => 'archived']);\n        }\n    }\n\n    private function determineStatus(array $result): string\n    {\n        $maxScore = max($result['scores']);\n\n        return match (true) {\n            $maxScore > 0.9 => 'rejected',\n            $maxScore > 0.6 => 'flagged',\n            default         => 'approved',\n        };\n    }\n}\n\n// App\\Services\\ModerationService.php\n<?php\n\nnamespace App\\Services;\n\nuse Illuminate\\Support\\Facades\\Http;\n\nclass ModerationService\n{\n    public function analyzeText(string $text): array\n    {\n        $response = Http::withHeaders([\n            'Authorization' => 'Bearer ' . config('services.openai.api_key'),\n        ])->post('https://api.openai.com/v1/moderations', [\n            'input' => $text,\n        ]);\n\n        $result = $response->json();\n\n        $categories = [];\n        $scores = [];\n\n        foreach (($result['results'][0]['categories'] ?? []) as $category => $flagged) {\n            if ($flagged) {\n                $categories[] = $category;\n            }\n        }\n\n        foreach (($result['results'][0]['category_scores'] ?? []) as $category => $score) {\n            $scores[$category] = round($score, 4);\n        }\n\n        return [\n            'categories' => $categories,\n            'scores'     => $scores,\n            'flagged'    => $result['results'][0]['flagged'] ?? false,\n        ];\n    }\n\n    public function analyzeImage(string $imageUrl): array\n    {\n        // Use AI SDK or cloud vision API for NSFW detection\n        $response = Http::withHeaders([\n            'Authorization' => 'Bearer ' . config('services.openai.api_key'),\n        ])->post('https://api.openai.com/v1/chat/completions', [\n            'model' => 'gpt-4o',\n            'messages' => [\n                [\n                    'role' => 'user',\n                    'content' => [\n                        ['type' => 'text', 'text' => 'Analyze this image for NSFW content, violence, or hate symbols. Return JSON with categories and confidence scores.'],\n                        ['type' => 'image_url', 'image_url' => ['url' => $imageUrl]],\n                    ],\n                ],\n            ],\n            'response_format' => ['type' => 'json_object'],\n        ]);\n\n        return $response->json('choices.0.message.content');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "79-caching-strategy",
      children: "7.9 Caching Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cache generated content and search results with Redis, invalidating on content updates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching in an AI-powered platform must balance cost (LLM API calls are expensive) with freshness (embeddings and search results become stale)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Invalidation Trigger"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "embedding:{model}:{md5(text)}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (content-addressed, immutable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rag:{md5(query + options)}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-60 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query-dependent TTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai:{md5(prompt + model)}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model version change or explicit flush"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document fragments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "doc:{id}:fragment:{hash}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Similar queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "similar:{md5(query)}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic refresh"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Services\\AiCacheService.php\n<?php\n\nnamespace App\\Services;\n\nuse Illuminate\\Support\\Facades\\Cache;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass AiCacheService\n{\n    const CACHE_PREFIX = 'ai_cache';\n\n    const TTL = [\n        'embedding'     => 86400,\n        'search'        => 3600,\n        'generation'    => 3600,\n        'sentiment'     => 86400,\n        'moderation'    => 86400,\n    ];\n\n    public function remember(string $type, string $key, callable $callback): mixed\n    {\n        $cacheKey = $this->key($type, $key);\n\n        return Cache::remember($cacheKey, self::TTL[$type] ?? 3600, $callback);\n    }\n\n    public function get(string $type, string $key): mixed\n    {\n        return Cache::get($this->key($type, $key));\n    }\n\n    public function put(string $type, string $key, mixed $value, ?int $ttl = null): void\n    {\n        Cache::put(\n            $this->key($type, $key),\n            $value,\n            $ttl ?? self::TTL[$type] ?? 3600\n        );\n    }\n\n    public function forget(string $type, string $key): void\n    {\n        Cache::forget($this->key($type, $key));\n    }\n\n    public function flushType(string $type): void\n    {\n        // Redis: scan and delete by pattern\n        $prefix = config('cache.prefix');\n        $pattern = \"{$prefix}:{$this->key($type, '*')}\";\n\n        $redis = \\Illuminate\\Support\\Facades\\Redis::connection();\n        $cursor = null;\n\n        do {\n            [$cursor, $keys] = $redis->scan($cursor, ['match' => $pattern, 'count' => 100]);\n\n            if (!empty($keys)) {\n                $redis->del($keys);\n            }\n        } while ($cursor !== 0);\n    }\n\n    private function key(string $type, string $key): string\n    {\n        return self::CACHE_PREFIX . \":{$type}:{$key}\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "710-real-time-collaboration",
      children: "7.10 Real-Time Collaboration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel Reverb provides WebSocket-based real-time updates for collaborative content editing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverb broadcasts collaboration events and agent progress updates to connected clients."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Events\\DocumentUpdated.php\n<?php\n\nnamespace App\\Events;\n\nuse App\\Models\\Document;\nuse Illuminate\\Broadcasting\\Channel;\nuse Illuminate\\Broadcasting\\InteractsWithSockets;\nuse Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;\nuse Illuminate\\Foundation\\Events\\Dispatchable;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass DocumentUpdated implements ShouldBroadcast\n{\n    use Dispatchable, InteractsWithSockets, SerializesModels;\n\n    public function __construct(\n        public Document $document,\n        public array $changes,\n    ) {}\n\n    public function broadcastOn(): array\n    {\n        return [\n            new Channel(\"workspace.{$this->document->workspace_id}.document.{$this->document->id}\"),\n        ];\n    }\n\n    public function broadcastWith(): array\n    {\n        return [\n            'document_id' => $this->document->id,\n            'changes'     => $this->changes,\n            'user'        => [\n                'id'   => auth()->id(),\n                'name' => auth()->user()?->name,\n            ],\n            'timestamp'   => now()->toIso8601String(),\n        ];\n    }\n}\n\n// App\\Events\\AgentProgressUpdated.php\n<?php\n\nnamespace App\\Events;\n\nuse Illuminate\\Broadcasting\\Channel;\nuse Illuminate\\Broadcasting\\InteractsWithSockets;\nuse Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;\nuse Illuminate\\Foundation\\Events\\Dispatchable;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass AgentProgressUpdated implements ShouldBroadcast\n{\n    use Dispatchable, InteractsWithSockets, SerializesModels;\n\n    public function __construct(\n        public string $agentType,\n        public string $status,\n        public int $workspaceId,\n        public array $metadata = [],\n    ) {}\n\n    public function broadcastOn(): array\n    {\n        return [\n            new Channel(\"workspace.{$this->workspaceId}.agents\"),\n        ];\n    }\n\n    public function broadcastWith(): array\n    {\n        return [\n            'agent_type' => $this->agentType,\n            'status'     => $this->status,\n            'metadata'   => $this->metadata,\n            'timestamp'  => now()->toIso8601String(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve + augment + generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-aware AI output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding cost and latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector or dedicated DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool exposure for AI agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security considerations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb WebSockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection state management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI::embed()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate text embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time WebSocket channel"
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
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contextual, relevant output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency from LLM calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Moderation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI classification agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable moderation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positive tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Editing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb WebSockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index maintenance cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What vector search strategy does this case study use?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Pinecone"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Weaviate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) PostgreSQL pgvector"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Milvus"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** pgvector stores embeddings alongside relational data in PostgreSQL."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the RAG pipeline?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Generate images"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Retrieve relevant context and augment LLM prompts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Cache API responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Route user requests"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** RAG retrieves relevant content from a vector store and augments the prompt before LLM generation."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Laravel package provides real-time WebSocket capabilities?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Horizon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Reverberate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reverb"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Echo"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Laravel Reverb provides WebSocket-based real-time updates."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are AI agents designed in this architecture?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Monolithic single agent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Specialized agents communicating through events and queues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) External API calls only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Serverless functions"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Specialized agents for moderation, generation, and search communicate through events and queues."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table-1",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve + augment + generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-aware AI output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding cost and latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector or dedicated DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool exposure for AI agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security considerations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb WebSockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection state management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI::embed()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate text embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time WebSocket channel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contextual, relevant output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency from LLM calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Moderation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI classification agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable moderation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positive tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Editing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb WebSockets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index maintenance cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What vector search strategy does this case study use?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Pinecone"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Weaviate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) PostgreSQL pgvector"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Milvus"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** pgvector stores embeddings alongside relational data in PostgreSQL."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the RAG pipeline?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Generate images"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Retrieve relevant context and augment LLM prompts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Cache API responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Route user requests"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** RAG retrieves relevant content from a vector store and augments the prompt before LLM generation."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Laravel package provides real-time WebSocket capabilities?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Horizon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Reverberate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reverb"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Echo"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Laravel Reverb provides WebSocket-based real-time updates."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are AI agents designed in this architecture?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Monolithic single agent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Specialized agents communicating through events and queues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) External API calls only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Serverless functions"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Specialized agents for moderation, generation, and search communicate through events and queues."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The RAG pipeline follows a five-step sequence: text ingestion → chunking → embedding generation (OpenAI text-embedding-3-small, 1536 dimensions) → pgvector storage with HNSW index → similarity search + LLM augmentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three specialized AI agents handle content production: Writer (generates articles from briefs with structured JSON output), Editor (reviews for grammar, style, and factual consistency), and Researcher (performs web search and returns fact-checked citations)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent chaining creates a production pipeline: Researcher → Writer → Editor. Each step broadcasts progress via Reverb so the UI provides real-time feedback."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The vector store is partitioned by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "content_type"
        }), " (article, comment, metadata) with separate HNSW indexes. A periodic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "embeddings:reindex"
        }), " artisan command handles stale embeddings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hybrid search combines pgvector cosine similarity (vector_score) with PostgreSQL full-text search (fts_score) using a weighted formula: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hybrid_score = vector_score Ã→ 0.7 + fts_score Ã→ 0.3"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP tools (search_documents, generate_content, analyze_sentiment) expose platform capabilities to external AI clients through a JSON-RPC interface."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content moderation runs asynchronously: submitted documents and images pass through AI analysis queues. Text is scored for toxicity and NSFW content; images are analyzed via vision model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A multi-layer caching strategy reduces API costs: embedding cache (24h, content-addressed), search result cache (5-60 min), AI response cache (1h), and moderation cache (24h)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Use presence channels in Reverb to show which users are actively editing content."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Use presence channels in Reverb to show which users are actively editing content."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the RAG pipeline step by step. Why is chunking with overlap important? What happens to search quality if the chunk size is too large or too small?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the three search modes (semantic, full-text, hybrid). Under what conditions would hybrid search produce worse results than pure vector search?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the agent chaining pipeline handle failure? If the Writer agent fails after the Researcher has completed, what happens to the research results and API tokens already spent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why do we cache embeddings by content hash rather than by document ID? What are the implications if two documents contain identical text?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The MCP server exposes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "search_documents"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_content"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analyze_sentiment"
        }), ". Design a fourth tool called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "summarize_document"
        }), " that accepts a document ID and returns a multi-language summary. What additional infrastructure would you need?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a document diff agent"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DiffAgent"
          }), " that compares two versions of a document and returns a structured diff with added, removed, and modified sections. The agent should also provide a natural language summary of what changed. Wire it into the agent chaining pipeline so that when an Editor makes changes, the system automatically generates a change summary for the document's version history."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add MCP tool: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "suggest_related_content"
            })]
          }), ": Implement a new MCP tool that, given a document ID, finds the top 5 related documents using vector similarity on the metadata embeddings. The tool should exclude the source document and filter by workspace ID. Return document title, similarity score, and a one-sentence explanation of why they are related."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a multi-language search index"
          }), ": Extend the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "document_embeddings"
          }), " table to support language-specific embedding columns or a language-partitioned search strategy. When a user searches in Spanish, only Spanish embeddings should be queried unless the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "auto_translate"
          }), " flag is set. Implement the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MultiLanguageSearchService"
          }), " with language detection, routing, and optional machine translation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design and implement an AI-powered content recommendation engine"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RecommendationEngine"
      }), " that generates personalized content recommendations for platform users using a hybrid approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collaborative filtering signal"
        }), ": Track user-document interactions (views, likes, saves, time-spent). Store in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "user_document_interactions"
        }), " table with weighted score per action type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content-based signal"
        }), ": Use document embeddings to find documents similar to ones the user has engaged with."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM-reranking"
        }), ": Retrieve the top 50 candidates via hybrid collaborative + content-based scoring, then use the Editor agent to re-rank them based on the user's stated preferences (stored in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "user_preferences"
        }), " JSON column with topics, authors, reading level)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching"
        }), ": Cache recommendations per user with a 30-minute TTL. Invalidate when the user interacts with a new document."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Personalization broadcast"
        }), ": When a user has new recommendations available, broadcast a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RecommendationsUpdated"
        }), " event via Reverb so the UI can update the \"Recommended for You\" section in real time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write the migration for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_document_interactions"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_preferences"
      }), " (add column to users table), the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RecommendationEngine"
      }), " service with all three signals, the jobs to asynchronously compute recommendations after user interaction, the API endpoint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /api/recommendations"
      }), ", and the Reverb event class. Provide explanations for how you handle the cold-start problem for new users with no interaction history."]
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