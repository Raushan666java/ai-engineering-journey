"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46522],{

/***/ 84027
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_09_ai_system_design_md_273_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-09-ai-system-design-md-273.json
const site_docs_courses_ai_agent_engineer_09_ai_system_design_md_273_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/09-ai-system-design","title":"Chapter 9 — AI System Design & Architecture","description":"Duration: 2 weeks, ~25 hours","source":"@site/docs/courses/ai-agent-engineer/09-ai-system-design.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/09-ai-system-design","permalink":"/ai-engineering-journey/ai-agent-engineer/09-ai-system-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"09-ai-system-design","slug":"/ai-agent-engineer/09-ai-system-design","title":"Chapter 9 — AI System Design & Architecture","sidebar_label":"Chapter 9 — AI System Design & Architecture","sidebar_position":10},"sidebar":"course-ai-agent-engineer","previous":{"title":"Job Search Playbook: AI Agent Engineer","permalink":"/ai-engineering-journey/ai-agent-engineer/08-job-search-playbook"},"next":{"title":"Chapter 10 — Prompt Engineering Mastery","permalink":"/ai-engineering-journey/ai-agent-engineer/10-prompt-engineering-mastery"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/09-ai-system-design.md


const frontMatter = {
	id: '09-ai-system-design',
	slug: '/ai-agent-engineer/09-ai-system-design',
	title: 'Chapter 9 — AI System Design & Architecture',
	sidebar_label: 'Chapter 9 — AI System Design & Architecture',
	sidebar_position: 10
};
const contentTitle = 'Chapter 9 — AI System Design & Architecture';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "9.1 RAG System Architecture Patterns",
  "id": "91-rag-system-architecture-patterns",
  "level": 2
}, {
  "value": "Pattern 1 — Naive RAG (Basic)",
  "id": "pattern-1--naive-rag-basic",
  "level": 3
}, {
  "value": "Pattern 2 — Agentic RAG (Advanced)",
  "id": "pattern-2--agentic-rag-advanced",
  "level": 3
}, {
  "value": "Pattern 3 — Multi-Hop RAG",
  "id": "pattern-3--multi-hop-rag",
  "level": 3
}, {
  "value": "9.2 Caching Strategies for AI",
  "id": "92-caching-strategies-for-ai",
  "level": 2
}, {
  "value": "Three Layers of AI Cache",
  "id": "three-layers-of-ai-cache",
  "level": 3
}, {
  "value": "L1: Prompt Cache (Exact Match)",
  "id": "l1-prompt-cache-exact-match",
  "level": 3
}, {
  "value": "L2: Semantic Cache (Similarity Match)",
  "id": "l2-semantic-cache-similarity-match",
  "level": 3
}, {
  "value": "9.3 Cost Architecture &amp; Optimization",
  "id": "93-cost-architecture--optimization",
  "level": 2
}, {
  "value": "Per-Request Cost Model",
  "id": "per-request-cost-model",
  "level": 3
}, {
  "value": "Cost Optimization Strategies",
  "id": "cost-optimization-strategies",
  "level": 3
}, {
  "value": "Model Tiering Router",
  "id": "model-tiering-router",
  "level": 3
}, {
  "value": "9.4 Latency Budgets &amp; Profiling",
  "id": "94-latency-budgets--profiling",
  "level": 2
}, {
  "value": "End-to-End Latency Breakdown (RAG)",
  "id": "end-to-end-latency-breakdown-rag",
  "level": 3
}, {
  "value": "Latency Budget Allocation",
  "id": "latency-budget-allocation",
  "level": 3
}, {
  "value": "9.5 Scalability Patterns",
  "id": "95-scalability-patterns",
  "level": 2
}, {
  "value": "Horizontal Scaling for RAG API",
  "id": "horizontal-scaling-for-rag-api",
  "level": 3
}, {
  "value": "Read Replicas for Vector Search",
  "id": "read-replicas-for-vector-search",
  "level": 3
}, {
  "value": "9.6 Multi-Region Deployment",
  "id": "96-multi-region-deployment",
  "level": 2
}, {
  "value": "Vector DB Topology Options",
  "id": "vector-db-topology-options",
  "level": 3
}, {
  "value": "Cross-Region Vector Search",
  "id": "cross-region-vector-search",
  "level": 3
}, {
  "value": "9.7 Agent Infrastructure Architecture",
  "id": "97-agent-infrastructure-architecture",
  "level": 2
}, {
  "value": "Multi-Agent System Architecture",
  "id": "multi-agent-system-architecture",
  "level": 3
}, {
  "value": "Tool Registry",
  "id": "tool-registry",
  "level": 3
}, {
  "value": "9.8 Async Processing Pipelines",
  "id": "98-async-processing-pipelines",
  "level": 2
}, {
  "value": "Document Ingestion Pipeline",
  "id": "document-ingestion-pipeline",
  "level": 3
}, {
  "value": "9.9 API Gateway Patterns for AI",
  "id": "99-api-gateway-patterns-for-ai",
  "level": 2
}, {
  "value": "AI Gateway Design",
  "id": "ai-gateway-design",
  "level": 3
}, {
  "value": "9.10 System Design Interview Prep",
  "id": "910-system-design-interview-prep",
  "level": 2
}, {
  "value": "Mock Interview: &quot;Design a RAG System for Customer Support&quot;",
  "id": "mock-interview-design-a-rag-system-for-customer-support",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-9--ai-system-design--architecture",
        children: "Chapter 9 — AI System Design & Architecture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 2 weeks, ~25 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Architect production AI systems — RAG pipelines, agent infrastructures, and cost-optimized serving stacks. Make design decisions you can defend in a system-design interview."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/ai-agent-engineer/09-ai-system-design/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/09-ai-system-design/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/09-ai-system-design/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/09-ai-system-design/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/09-ai-system-design/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/09-ai-system-design/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtopic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Done checkpoint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG system architecture patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can sketch naive RAG, agentic RAG, and multi-hop RAG from memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching strategies for AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a 3-tier cache (prompt cache, semantic cache, KV cache) with hit-rate targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost architecture & optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a per-request cost model and identify the top-3 cost drivers in a RAG pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model tiering & routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a router that sends simple queries to cheap models, complex ones to expensive models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency budgets & profiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile a RAG request end-to-end and identify the bottleneck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design horizontal scaling for a RAG API with connection pooling and read replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a multi-region vector DB topology with active-active vs active-passive tradeoffs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent infrastructure architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design the infra for a multi-agent system: message bus, state store, tool registry, gateway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async processing pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design an ingestion pipeline that handles 10K docs/day with chunking, embedding, indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data flow & backpressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a rate-limited ingestion pipeline with backpressure signaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API gateway patterns for AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design an AI gateway with rate limiting, auth, cost tracking, and model routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System design interview prep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock-design \"Design a RAG system for a customer support chatbot\" in 45 minutes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-rag-system-architecture-patterns",
      children: "9.1 RAG System Architecture Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1--naive-rag-basic",
      children: "Pattern 1 — Naive RAG (Basic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User Query ? Embed ? Vector Search ? Top-K Chunks ? LLM ? Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simple, but every query pays the full cost. No query rewriting, no re-ranking, no context refinement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Naive RAG — one-shot retrieval + generation\r\nfrom openai import OpenAI\r\nimport chromadb\r\n\r\nclient = OpenAI()\r\nchroma = chromadb.HttpClient(host=\"localhost\", port=8000)\r\ncollection = chroma.get_collection(\"docs\")\r\n\r\ndef naive_rag(query: str) -> str:\r\n    # Embed query\r\n    response = client.embeddings.create(\r\n        input=query,\r\n        model=\"text-embedding-3-small\"\r\n    )\r\n    query_vector = response.data[0].embedding\r\n\r\n    # Retrieve\r\n    results = collection.query(\r\n        query_embeddings=[query_vector],\r\n        n_results=5\r\n    )\r\n    context = \"\\n\\n\".join(results[\"documents\"][0])\r\n\r\n    # Generate\r\n    completion = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Answer using the context provided.\"},\r\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n        ]\r\n    )\r\n    return completion.choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Prototypes, internal tools, low QPS (< 10 req/min)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2--agentic-rag-advanced",
      children: "Pattern 2 — Agentic RAG (Advanced)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User Query ? Query Rewriter ? Multi-Query Expansion ? \r\n    Parallel Vector Searches ? Re-Ranker ? \r\n    Context Builder ? LLM ? Response Validation ? \r\n    Hallucination Check ? Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each step is a lightweight LLM call or a deterministic function. More latency, dramatically better quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Agentic RAG with query rewriting + re-ranking + validation\r\nfrom typing import Literal\r\nfrom pydantic import BaseModel\r\nfrom openai import OpenAI\r\nimport json\r\n\r\nclient = OpenAI()\r\n\r\nclass QueryRewrites(BaseModel):\r\n    queries: list[str]\r\n    reasoning: str\r\n\r\nclass ValidationResult(BaseModel):\r\n    is_hallucinated: bool\r\n    hallucinated_claims: list[str]\r\n    supported_claims: list[str]\r\n\r\ndef rewrite_query(original: str) -> list[str]:\r\n    \"\"\"Generate multiple search queries from one user query.\"\"\"\r\n    completion = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Generate 3 search queries that explore different aspects of the user's question.\"},\r\n            {\"role\": \"user\", \"content\": original}\r\n        ],\r\n        response_format=QueryRewrites\r\n    )\r\n    result = completion.choices[0].message.parsed\r\n    return result.queries\r\n\r\ndef cross_encoder_rerank(query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:\r\n    \"\"\"Score each (query, doc) pair with a cross-encoder model.\"\"\"\r\n    pairs = [[query, doc[:500]] for doc in documents]\r\n    # Using a local cross-encoder model (Cohere or sentence-transformers)\r\n    # scores = cross_encoder.predict(pairs)\r\n    # Placeholder for local re-ranker\r\n    scored = [(doc, 0.95 - i * 0.05) for i, doc in enumerate(documents)]\r\n    scored.sort(key=lambda x: x[1], reverse=True)\r\n    return scored[:top_k]\r\n\r\ndef validate_response(query: str, context: str, response: str) -> ValidationResult:\r\n    \"\"\"Check if the response hallucinates claims not in context.\"\"\"\r\n    completion = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Compare the response against the context. Identify any claims in the response that are not supported by the context.\"},\r\n            {\"role\": \"user\", \"content\": f\"Query: {query}\\n\\nContext: {context}\\n\\nResponse: {response}\"}\r\n        ],\r\n        response_format=ValidationResult\r\n    )\r\n    return completion.choices[0].message.parsed\r\n\r\ndef agentic_rag(query: str) -> str:\r\n    \"\"\"Full agentic RAG pipeline with quality checks.\"\"\"\r\n    # Step 1: Query rewriting\r\n    queries = rewrite_query(query)\r\n\r\n    # Step 2: Parallel retrieval\r\n    all_docs = []\r\n    for q in queries:\r\n        q_v = client.embeddings.create(input=q, model=\"text-embedding-3-small\").data[0].embedding\r\n        results = chroma_collection.query(query_embeddings=[q_v], n_results=5)\r\n        all_docs.extend(results[\"documents\"][0])\r\n\r\n    # Step 3: Re-rank\r\n    reranked = cross_encoder_rerank(query, all_docs, top_k=5)\r\n    context = \"\\n\\n\".join([doc for doc, score in reranked])\r\n\r\n    # Step 4: Generate\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Answer using only the context. Cite sources inline as [1], [2], etc.\"},\r\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n        ]\r\n    ).choices[0].message.content\r\n\r\n    # Step 5: Validate\r\n    validation = validate_response(query, context, response)\r\n    if validation.is_hallucinated:\r\n        return response + \"\\n\\n?? Note: Some claims could not be verified against the provided context.\"\r\n\r\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3--multi-hop-rag",
      children: "Pattern 3 — Multi-Hop RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For questions that require synthesizing information from multiple documents where no single chunk contains the answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query ? Extract entities ? Find related chunks ? \r\n    First-hop retrieval ? Extract new entities ? \r\n    Second-hop retrieval ? Cross-document synthesis ? \r\n    LLM ? Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def multi_hop_rag(query: str) -> str:\r\n    \"\"\"Two-hop RAG for questions requiring cross-document synthesis.\"\"\"\r\n    # Hop 1: Find initial documents\r\n    q_v = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n    hop1 = chroma_collection.query(query_embeddings=[q_v], n_results=5)\r\n\r\n    # Extract entities from Hop 1 results\r\n    entity_extraction = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Extract key entities (names, dates, concepts, IDs) from the retrieved documents that might help find more relevant information.\"},\r\n            {\"role\": \"user\", \"content\": \"\\n\\n\".join(hop1[\"documents\"][0])}\r\n        ]\r\n    )\r\n    entities = entity_extraction.choices[0].message.content\r\n\r\n    # Hop 2: Search using entities\r\n    e_v = client.embeddings.create(input=entities, model=\"text-embedding-3-small\").data[0].embedding\r\n    hop2 = chroma_collection.query(query_embeddings=[e_v], n_results=5)\r\n\r\n    # Merge contexts\r\n    combined = list(set(hop1[\"documents\"][0] + hop2[\"documents\"][0]))\r\n    context = \"\\n\\n\".join(combined)\r\n\r\n    return client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Synthesize information from multiple documents to answer the query comprehensively.\"},\r\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n        ]\r\n    ).choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-caching-strategies-for-ai",
      children: "9.2 Caching Strategies for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-layers-of-ai-cache",
      children: "Three Layers of AI Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------------------------+\r\n¦  L1: Prompt Cache (in-memory) ¦ ? Exact query match, TTL seconds\r\n+----------------------------¦\r\n¦  L2: Semantic Cache (vector) ¦ ? Similar query match, cosine > 0.95\r\n+----------------------------¦\r\n¦  L3: KV Cache (model-level)  ¦ ? Reused across turns in same session\r\n+----------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "l1-prompt-cache-exact-match",
      children: "L1: Prompt Cache (Exact Match)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nimport json\r\nimport time\r\nfrom collections import OrderedDict\r\n\r\nclass PromptCache:\r\n    \"\"\"Simple TTL-based LRU cache for exact query matches.\"\"\"\r\n\r\n    def __init__(self, capacity: int = 1000, ttl_seconds: int = 300):\r\n        self.cache: OrderedDict[str, dict] = OrderedDict()\r\n        self.capacity = capacity\r\n        self.ttl = ttl_seconds\r\n\r\n    def _make_key(self, query: str, model: str, system_prompt: str) -> str:\r\n        raw = f\"{query}||{model}||{system_prompt}\"\r\n        return hashlib.sha256(raw.encode()).hexdigest()\r\n\r\n    def get(self, query: str, model: str, system_prompt: str) -> str | None:\r\n        key = self._make_key(query, model, system_prompt)\r\n        if key in self.cache:\r\n            entry = self.cache[key]\r\n            if time.time() - entry[\"timestamp\"] < self.ttl:\r\n                self.cache.move_to_end(key)\r\n                return entry[\"response\"]\r\n            del self.cache[key]\r\n        return None\r\n\r\n    def set(self, query: str, model: str, system_prompt: str, response: str):\r\n        key = self._make_key(query, model, system_prompt)\r\n        if len(self.cache) >= self.capacity:\r\n            self.cache.popitem(last=False)\r\n        self.cache[key] = {\"response\": response, \"timestamp\": time.time()}\r\n\r\n# Usage\r\nprompt_cache = PromptCache(capacity=5000, ttl_seconds=600)\r\n\r\ndef cached_completion(query: str, system_prompt: str = \"You are a helpful assistant.\") -> str:\r\n    cached = prompt_cache.get(query, \"gpt-4o-mini\", system_prompt)\r\n    if cached:\r\n        return cached\r\n\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": system_prompt},\r\n            {\"role\": \"user\", \"content\": query}\r\n        ]\r\n    ).choices[0].message.content\r\n\r\n    prompt_cache.set(query, \"gpt-4o-mini\", system_prompt, response)\r\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "l2-semantic-cache-similarity-match",
      children: "L2: Semantic Cache (Similarity Match)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom sklearn.metrics.pairwise import cosine_similarity\r\n\r\nclass SemanticCache:\r\n    \"\"\"Cache that returns a hit when a new query is semantically similar to a cached one.\"\"\"\r\n\r\n    def __init__(self, similarity_threshold: float = 0.95, max_entries: int = 500):\r\n        self.entries: list[dict] = []\r\n        self.threshold = similarity_threshold\r\n        self.max_entries = max_entries\r\n\r\n    def get(self, query_vector: list[float]) -> str | None:\r\n        if not self.entries:\r\n            return None\r\n\r\n        vectors = np.array([e[\"vector\"] for e in self.entries])\r\n        query_vec = np.array(query_vector).reshape(1, -1)\r\n        similarities = cosine_similarity(query_vec, vectors)[0]\r\n        best_idx = np.argmax(similarities)\r\n\r\n        if similarities[best_idx] >= self.threshold:\r\n            return self.entries[best_idx][\"response\"]\r\n        return None\r\n\r\n    def set(self, query_vector: list[float], query: str, response: str):\r\n        if len(self.entries) >= self.max_entries:\r\n            self.entries.pop(0)\r\n        self.entries.append({\r\n            \"query\": query,\r\n            \"vector\": query_vector,\r\n            \"response\": response,\r\n            \"timestamp\": time.time()\r\n        })\r\n\r\n# Usage\r\nsemantic_cache = SemanticCache(similarity_threshold=0.92)\r\n\r\ndef semantic_cached_rag(query: str) -> str:\r\n    q_vec = client.embeddings.create(\r\n        input=query, model=\"text-embedding-3-small\"\r\n    ).data[0].embedding\r\n\r\n    cached = semantic_cache.get(q_vec)\r\n    if cached:\r\n        return cached\r\n\r\n    response = naive_rag(query)\r\n    semantic_cache.set(q_vec, query, response)\r\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-cost-architecture--optimization",
      children: "9.3 Cost Architecture & Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "per-request-cost-model",
      children: "Per-Request Cost Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\n\r\n@dataclass\r\nclass RequestCost:\r\n    embedding_model: str\r\n    embedding_tokens: int\r\n    embedding_cost: float\r\n    llm_model: str\r\n    prompt_tokens: int\r\n    completion_tokens: int\r\n    llm_cost: float\r\n    vector_search_time_ms: float\r\n    total_cost: float\r\n    total_latency_ms: float\r\n\r\n# Pricing (per 1M tokens, USD)\r\nPRICING = {\r\n    \"text-embedding-3-small\": {\"input\": 0.02},\r\n    \"text-embedding-3-large\": {\"input\": 0.13},\r\n    \"gpt-4o-mini\": {\"input\": 0.15, \"output\": 0.60},\r\n    \"gpt-4o\": {\"input\": 2.50, \"output\": 10.00},\r\n    \"claude-3-haiku\": {\"input\": 0.25, \"output\": 1.25},\r\n    \"claude-3-sonnet\": {\"input\": 3.00, \"output\": 15.00},\r\n}\r\n\r\ndef estimate_request_cost(\r\n    query: str,\r\n    context_chunks: int,\r\n    chunk_size: int,\r\n    embedding_model: str = \"text-embedding-3-small\",\r\n    llm_model: str = \"gpt-4o-mini\",\r\n    expected_output_tokens: int = 300,\r\n) -> RequestCost:\r\n    query_tokens = len(query) // 4  # Rough estimate\r\n    context_tokens = context_chunks * chunk_size\r\n    prompt_tokens = query_tokens + context_tokens + 50  # System prompt overhead\r\n\r\n    embed_cost = (query_tokens / 1_000_000) * PRICING[embedding_model][\"input\"]\r\n    llm_input_cost = (prompt_tokens / 1_000_000) * PRICING[llm_model][\"input\"]\r\n    llm_output_cost = (expected_output_tokens / 1_000_000) * PRICING[llm_model][\"output\"]\r\n\r\n    return RequestCost(\r\n        embedding_model=embedding_model,\r\n        embedding_tokens=query_tokens,\r\n        embedding_cost=round(embed_cost, 6),\r\n        llm_model=llm_model,\r\n        prompt_tokens=prompt_tokens,\r\n        completion_tokens=expected_output_tokens,\r\n        llm_cost=round(llm_input_cost + llm_output_cost, 6),\r\n        vector_search_time_ms=50.0,\r\n        total_cost=round(embed_cost + llm_input_cost + llm_output_cost, 6),\r\n        total_latency_ms=800.0,\r\n    )\r\n\r\n# Usage\r\ncost = estimate_request_cost(\r\n    query=\"What are the lease terms for commercial properties in Dubai Marina?\",\r\n    context_chunks=5,\r\n    chunk_size=800,\r\n    llm_model=\"gpt-4o-mini\"\r\n)\r\nprint(f\"Embedding cost: ${cost.embedding_cost}\")\r\nprint(f\"LLM cost: ${cost.llm_cost}\")\r\nprint(f\"Total cost: ${cost.total_cost}\")\r\nprint(f\"Estimated daily cost (10K req): ${cost.total_cost * 10000:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cost-optimization-strategies",
      children: "Cost Optimization Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tradeoff"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model tiering (simple queries ? cheap model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex queries may degrade if misrouted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt caching (exact match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50% hit rate on repeated queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra memory, cache invalidation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic caching (similar match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-30% additional hit rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute for similarity search, lower precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KV cache reuse across turns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-80% latency reduction per turn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State management complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-40% token reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential quality loss on compressed prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50% cost reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postponed responses, not real-time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-tiering-router",
      children: "Model Tiering Router"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel\r\nfrom typing import Literal\r\n\r\nclass RouteDecision(BaseModel):\r\n    model: Literal[\"gpt-4o-mini\", \"gpt-4o\", \"claude-3-haiku\", \"claude-3-sonnet\"]\r\n    reasoning: str\r\n    estimated_difficulty: Literal[\"simple\", \"medium\", \"complex\"]\r\n\r\ndef route_query_to_model(query: str) -> RouteDecision:\r\n    \"\"\"Route simple queries to cheap models, complex to expensive.\"\"\"\r\n    completion = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Classify the user query by complexity:\\n\"\r\n             \"- simple: factual, single-sentence, can be answered directly\\n\"\r\n             \"- medium: requires reasoning or multiple steps\\n\"\r\n             \"- complex: requires deep reasoning, code generation, or creative work\"},\r\n            {\"role\": \"user\", \"content\": query}\r\n        ],\r\n        response_format=RouteDecision\r\n    )\r\n    return completion.choices[0].message.parsed\r\n\r\n# Router implementation\r\ndef query_with_routing(query: str) -> str:\r\n    decision = route_query_to_model(query)\r\n\r\n    model_map = {\r\n        \"simple\": \"gpt-4o-mini\",\r\n        \"medium\": \"gpt-4o-mini\",\r\n        \"complex\": \"gpt-4o\",\r\n    }\r\n    selected = model_map[decision.estimated_difficulty]\r\n\r\n    return client.chat.completions.create(\r\n        model=selected,\r\n        messages=[{\"role\": \"user\", \"content\": query}]\r\n    ).choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-latency-budgets--profiling",
      children: "9.4 Latency Budgets & Profiling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "end-to-end-latency-breakdown-rag",
      children: "End-to-End Latency Breakdown (RAG)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\n\r\ndef profile_rag(query: str) -> dict:\r\n    latencies = {}\r\n\r\n    t0 = time.time()\r\n    q_vec = client.embeddings.create(\r\n        input=query, model=\"text-embedding-3-small\"\r\n    ).data[0].embedding\r\n    latencies[\"embedding\"] = time.time() - t0\r\n\r\n    t0 = time.time()\r\n    results = chroma_collection.query(\r\n        query_embeddings=[q_vec], n_results=5\r\n    )\r\n    latencies[\"vector_search\"] = time.time() - t0\r\n\r\n    t0 = time.time()\r\n    context = \"\\n\\n\".join(results[\"documents\"][0])\r\n    latencies[\"context_building\"] = time.time() - t0\r\n\r\n    t0 = time.time()\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Answer using context.\"},\r\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n        ],\r\n        max_tokens=500\r\n    )\r\n    latencies[\"llm_generation\"] = time.time() - t0\r\n    latencies[\"total\"] = sum(latencies.values())\r\n\r\n    return {\r\n        \"latencies_ms\": {k: round(v * 1000, 2) for k, v in latencies.items()},\r\n        \"prompt_tokens\": response.usage.prompt_tokens,\r\n        \"completion_tokens\": response.usage.completion_tokens,\r\n    }\r\n\r\n# Profile result\r\nresult = profile_rag(\"What are the best practices for RAG chunking?\")\r\nprint(json.dumps(result, indent=2))\r\n# {\r\n#   \"latencies_ms\": {\r\n#     \"embedding\": 150.23,\r\n#     \"vector_search\": 45.12,\r\n#     \"context_building\": 0.34,\r\n#     \"llm_generation\": 1200.56,\r\n#     \"total\": 1396.25\r\n#   },\r\n#   \"prompt_tokens\": 4120,\r\n#   \"completion_tokens\": 234\r\n# }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "latency-budget-allocation",
      children: "Latency Budget Allocation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target (P95)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization lever"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose smaller model, cache embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HNSW index tuning, reduce search scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-formatted templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model tiering, prompt compression, streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "< 2500ms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Balance all levers"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-scalability-patterns",
      children: "9.5 Scalability Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "horizontal-scaling-for-rag-api",
      children: "Horizontal Scaling for RAG API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Connection pooling with async database\r\nfrom sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker\r\nfrom sqlalchemy.pool import NullPool\r\n\r\n# Pool sizing formula: connections = (CPUs * 2) + effective_spindle_count\r\nDATABASE_URL = \"postgresql+asyncpg://user:pass@host:5432/ragdb\"\r\nengine = create_async_engine(\r\n    DATABASE_URL,\r\n    pool_size=20,        # Base connections per worker\r\n    max_overflow=10,     # Additional connections under load\r\n    pool_pre_ping=True,  # Verify connections before use\r\n    pool_recycle=3600,   # Recycle every hour\r\n)\r\n\r\n# FastAPI with connection pool\r\nfrom contextlib import asynccontextmanager\r\nfrom fastapi import FastAPI\r\n\r\n@asynccontextmanager\r\nasync def lifespan(app: FastAPI):\r\n    async with engine.begin() as conn:\r\n        await conn.run_sync(Base.metadata.create_all)\r\n    yield\r\n    await engine.dispose()\r\n\r\napp = FastAPI(lifespan=lifespan)\r\n\r\nasync def get_db() -> AsyncSession:\r\n    async with SessionLocal() as session:\r\n        yield session\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-replicas-for-vector-search",
      children: "Read Replicas for Vector Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Separate read and write paths for scaling\r\nREAD_REPLICA_URL = \"postgresql+asyncpg://user:pass@replica:5432/ragdb\"\r\nWRITE_PRIMARY_URL = \"postgresql+asyncpg://user:pass@primary:5432/ragdb\"\r\n\r\nread_engine = create_async_engine(READ_REPLICA_URL, pool_size=30)\r\nwrite_engine = create_async_engine(WRITE_PRIMARY_URL, pool_size=5)\r\n\r\nasync def search_documents(query_vector: list[float], top_k: int = 10):\r\n    \"\"\"Reads from replica for vector search.\"\"\"\r\n    async with AsyncSession(read_engine) as session:\r\n        # pgvector ANN search\r\n        result = await session.execute(\r\n            text(\"\"\"\r\n                SELECT id, content, embedding <-> :query AS distance\r\n                FROM document_chunks\r\n                ORDER BY embedding <-> :query\r\n                LIMIT :top_k\r\n            \"\"\"),\r\n            {\"query\": str(query_vector), \"top_k\": top_k}\r\n        )\r\n        return result.fetchall()\r\n\r\nasync def insert_document(content: str, embedding: list[float]):\r\n    \"\"\"Writes to primary for consistency.\"\"\"\r\n    async with AsyncSession(write_engine) as session:\r\n        session.add(DocumentChunk(content=content, embedding=embedding))\r\n        await session.commit()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-multi-region-deployment",
      children: "9.6 Multi-Region Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vector-db-topology-options",
      children: "Vector DB Topology Options"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active-Passive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One primary region writes, replicas in other regions read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-sensitive, read-heavy workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active-Active (CRDT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each region writes, conflict resolution via CRDTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency writes everywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Active-Active (sharded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data partitioned by region (e.g., EU data in EU cluster)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data residency requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global secondary index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One primary write region, multiple read replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common, reasonable latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-region-vector-search",
      children: "Cross-Region Vector Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nfrom typing import NamedTuple\r\n\r\nclass RegionResult(NamedTuple):\r\n    region: str\r\n    documents: list[str]\r\n    latency_ms: float\r\n\r\nasync def search_region(\r\n    region_url: str,\r\n    query_vector: list[float],\r\n    top_k: int,\r\n    timeout_ms: int = 2000,\r\n) -> RegionResult:\r\n    \"\"\"Query a single region's vector DB with timeout.\"\"\"\r\n    t0 = time.time()\r\n    try:\r\n        async with httpx.AsyncClient(timeout=timeout_ms / 1000) as client:\r\n            resp = await client.post(\r\n                f\"{region_url}/search\",\r\n                json={\"vector\": query_vector, \"top_k\": top_k}\r\n            )\r\n            data = resp.json()\r\n            return RegionResult(\r\n                region=region_url,\r\n                documents=data[\"documents\"],\r\n                latency_ms=(time.time() - t0) * 1000\r\n            )\r\n    except Exception as e:\r\n        return RegionResult(region=region_url, documents=[], latency_ms=(time.time() - t0) * 1000)\r\n\r\nasync def multi_region_search(\r\n    query_vector: list[float],\r\n    regions: list[str],\r\n    top_k_per_region: int = 5,\r\n    merge_top_k: int = 10,\r\n) -> list[str]:\r\n    \"\"\"Search all regions in parallel, merge results.\"\"\"\r\n    tasks = [search_region(r, query_vector, top_k_per_region) for r in regions]\r\n    results = await asyncio.gather(*tasks)\r\n\r\n    # Log per-region latency\r\n    for r in results:\r\n        print(f\"Region {r.region}: {r.latency_ms:.0f}ms, {len(r.documents)} docs\")\r\n\r\n    # Merge and deduplicate\r\n    seen = set()\r\n    merged = []\r\n    for r in sorted(results, key=lambda x: x.latency_ms):\r\n        for doc in r.documents:\r\n            doc_id = hash(doc[:100])\r\n            if doc_id not in seen:\r\n                seen.add(doc_id)\r\n                merged.append(doc)\r\n\r\n    return merged[:merge_top_k]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-agent-infrastructure-architecture",
      children: "9.7 Agent Infrastructure Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-agent-system-architecture",
      children: "Multi-Agent System Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                         +-------------+\r\n                         ¦ API Gateway  ¦\r\n                         ¦ (rate limit, ¦\r\n                         ¦  auth, route)¦\r\n                         +-------------+\r\n                                ¦\r\n                    +-----------------------+\r\n                    ¦    Agent Supervisor    ¦\r\n                    ¦  (orchestration layer) ¦\r\n                    +-----------------------+\r\n                                ¦\r\n         +----------------------+----------------------+\r\n         ¦                      ¦                      ¦\r\n    +---------+          +-----------+          +----------+\r\n    ¦ Agent A ¦          ¦  Agent B  ¦          ¦  Agent C  ¦\r\n    ¦(search) ¦          ¦ (analyze) ¦          ¦ (respond) ¦\r\n    +---------+          +-----------+          +----------+\r\n         ¦                     ¦                      ¦\r\n         +---------------------+----------------------+\r\n                               ¦\r\n                    +---------------------+\r\n                    ¦     Message Bus      ¦\r\n                    ¦  (Redis / RabbitMQ)  ¦\r\n                    +---------------------¦\r\n                    ¦    State Store       ¦\r\n                    ¦  (Postgres / Redis)  ¦\r\n                    +---------------------¦\r\n                    ¦    Tool Registry     ¦\r\n                    ¦  (MCP server list)   ¦\r\n                    +---------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-registry",
      children: "Tool Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel\r\nfrom typing import Any, Callable\r\nimport json\r\n\r\nclass ToolDefinition(BaseModel):\r\n    name: str\r\n    description: str\r\n    parameters: dict\r\n    handler: str  # Module path to the handler function\r\n    timeout_seconds: int = 30\r\n    cost_per_call: float = 0.0\r\n    rate_limit_per_minute: int = 60\r\n\r\nclass ToolRegistry:\r\n    \"\"\"Central registry for all tools available to agents.\"\"\"\r\n\r\n    def __init__(self):\r\n        self._tools: dict[str, dict] = {}\r\n\r\n    def register(self, tool: ToolDefinition):\r\n        self._tools[tool.name] = tool.model_dump()\r\n\r\n    def get_schemas(self) -> list[dict]:\r\n        return [\r\n            {\"type\": \"function\", \"function\": {\r\n                \"name\": t[\"name\"],\r\n                \"description\": t[\"description\"],\r\n                \"parameters\": t[\"parameters\"]\r\n            }}\r\n            for t in self._tools.values()\r\n        ]\r\n\r\n    def get_tool(self, name: str) -> dict | None:\r\n        return self._tools.get(name)\r\n\r\n# Usage\r\nregistry = ToolRegistry()\r\n\r\nregistry.register(ToolDefinition(\r\n    name=\"search_web\",\r\n    description=\"Search the web for current information\",\r\n    parameters={\r\n        \"type\": \"object\",\r\n        \"properties\": {\r\n            \"query\": {\"type\": \"string\", \"description\": \"Search query\"}\r\n        },\r\n        \"required\": [\"query\"]\r\n    },\r\n    handler=\"tools.web_search\",\r\n    rate_limit_per_minute=30,\r\n    cost_per_call=0.001,\r\n))\r\n\r\nregistry.register(ToolDefinition(\r\n    name=\"query_vector_db\",\r\n    description=\"Search the vector database for relevant documents\",\r\n    parameters={\r\n        \"type\": \"object\",\r\n        \"properties\": {\r\n            \"query\": {\"type\": \"string\"},\r\n            \"top_k\": {\"type\": \"integer\", \"default\": 5}\r\n        },\r\n        \"required\": [\"query\"]\r\n    },\r\n    handler=\"tools.vector_search\",\r\n    rate_limit_per_minute=120,\r\n    cost_per_call=0.0005,\r\n))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-async-processing-pipelines",
      children: "9.8 Async Processing Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "document-ingestion-pipeline",
      children: "Document Ingestion Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\r\nfrom dataclasses import dataclass\r\nfrom enum import Enum\r\n\r\nclass ProcessingStatus(Enum):\r\n    PENDING = \"pending\"\r\n    CHUNKING = \"chunking\"\r\n    EMBEDDING = \"embedding\"\r\n    INDEXING = \"indexing\"\r\n    COMPLETED = \"completed\"\r\n    FAILED = \"failed\"\r\n\r\n@dataclass\r\nclass Document:\r\n    id: str\r\n    content: str\r\n    metadata: dict\r\n    status: ProcessingStatus = ProcessingStatus.PENDING\r\n\r\nclass IngestionPipeline:\r\n    \"\"\"\r\n    Handles 10K+ docs/day with parallel chunking, embedding, and indexing.\r\n    Uses asyncio queues for backpressure.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        chunk_size: int = 800,\r\n        chunk_overlap: int = 150,\r\n        max_concurrent_embeddings: int = 5,\r\n        batch_size: int = 20,\r\n    ):\r\n        self.chunk_size = chunk_size\r\n        self.chunk_overlap = chunk_overlap\r\n        self.semaphore = asyncio.Semaphore(max_concurrent_embeddings)\r\n        self.batch_size = batch_size\r\n\r\n    def chunk_document(self, content: str) -> list[str]:\r\n        \"\"\"Split document into overlapping chunks.\"\"\"\r\n        chunks = []\r\n        start = 0\r\n        while start < len(content):\r\n            end = start + self.chunk_size\r\n            if end < len(content):\r\n                # Try to break at paragraph or sentence boundary\r\n                end = max(\r\n                    content.rfind(\"\\n\\n\", start, end),\r\n                    content.rfind(\". \", start, end),\r\n                    content.rfind(\" \", start, end),\r\n                    start + self.chunk_size // 2\r\n                )\r\n                end = end + 1 if end > start else start + self.chunk_size\r\n            chunks.append(content[start:end])\r\n            start = end - self.chunk_overlap\r\n        return chunks\r\n\r\n    async def embed_chunk(self, chunk: str) -> list[float]:\r\n        \"\"\"Embed a single chunk with concurrency control.\"\"\"\r\n        async with self.semaphore:\r\n            result = await asyncio.to_thread(\r\n                lambda: client.embeddings.create(\r\n                    input=chunk,\r\n                    model=\"text-embedding-3-small\"\r\n                ).data[0].embedding\r\n            )\r\n            return result\r\n\r\n    async def embed_batch(self, chunks: list[str]) -> list[list[float]]:\r\n        \"\"\"Embed chunks in parallel batches.\"\"\"\r\n        tasks = [self.embed_chunk(c) for c in chunks]\r\n        return await asyncio.gather(*tasks)\r\n\r\n    async def process_document(self, doc: Document) -> int:\r\n        \"\"\"Process a single document end-to-end.\"\"\"\r\n        try:\r\n            doc.status = ProcessingStatus.CHUNKING\r\n            chunks = self.chunk_document(doc.content)\r\n\r\n            doc.status = ProcessingStatus.EMBEDDING\r\n            # Process in batches for rate limiting\r\n            all_embeddings = []\r\n            for i in range(0, len(chunks), self.batch_size):\r\n                batch = chunks[i:i + self.batch_size]\r\n                embeddings = await self.embed_batch(batch)\r\n                all_embeddings.extend(embeddings)\r\n\r\n            doc.status = ProcessingStatus.INDEXING\r\n            # Store in vector DB (batch insert)\r\n            for chunk, embedding in zip(chunks, all_embeddings):\r\n                chroma_collection.add(\r\n                    documents=[chunk],\r\n                    embeddings=[embedding],\r\n                    metadatas=[{\"doc_id\": doc.id, **doc.metadata}]\r\n                )\r\n\r\n            doc.status = ProcessingStatus.COMPLETED\r\n            return len(chunks)\r\n\r\n        except Exception as e:\r\n            doc.status = ProcessingStatus.FAILED\r\n            print(f\"Failed to process {doc.id}: {e}\")\r\n            return 0\r\n\r\n# Usage\r\nasync def process_documents(docs: list[Document]):\r\n    pipeline = IngestionPipeline(max_concurrent_embeddings=10)\r\n    tasks = [pipeline.process_document(doc) for doc in docs]\r\n    results = await asyncio.gather(*tasks)\r\n    print(f\"Processed {sum(results)} chunks from {len(docs)} documents\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "99-api-gateway-patterns-for-ai",
      children: "9.9 API Gateway Patterns for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-gateway-design",
      children: "AI Gateway Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, Request, HTTPException\r\nfrom pydantic import BaseModel\r\nimport time\r\nimport hashlib\r\n\r\napp = FastAPI(title=\"AI Gateway\")\r\n\r\nclass GatewayConfig(BaseModel):\r\n    rate_limit_per_minute: int = 60\r\n    max_tokens_per_request: int = 4000\r\n    max_requests_per_day_per_user: int = 1000\r\n    cost_alert_threshold_daily: float = 10.0\r\n\r\nclass LLMRequest(BaseModel):\r\n    model: str\r\n    messages: list[dict]\r\n    max_tokens: int = 1024\r\n    temperature: float = 0.7\r\n\r\nclass LLMResponse(BaseModel):\r\n    content: str\r\n    model: str\r\n    usage: dict\r\n    cached: bool = False\r\n\r\nclass AIGateway:\r\n    def __init__(self, config: GatewayConfig):\r\n        self.config = config\r\n        self.cache = PromptCache()\r\n        self.cost_tracker = CostTracker()\r\n\r\n    async def route_request(\r\n        self, request: LLMRequest, user_id: str\r\n    ) -> LLMResponse:\r\n        # 1. Authentication\r\n        if not self.authenticate(user_id):\r\n            raise HTTPException(status_code=403, detail=\"Unauthorized\")\r\n\r\n        # 2. Rate limiting\r\n        if self.is_rate_limited(user_id):\r\n            raise HTTPException(status_code=429, detail=\"Rate limit exceeded\")\r\n\r\n        # 3. Content filtering (input guard)\r\n        if self.contains_blocked_content(request.messages):\r\n            raise HTTPException(status_code=400, detail=\"Content policy violation\")\r\n\r\n        # 4. Model routing\r\n        model = self.route_model(request.model, request.messages)\r\n\r\n        # 5. Cache check\r\n        cache_key = self.cache_key(request)\r\n        cached = self.cache.get(cache_key)\r\n        if cached:\r\n            return LLMResponse(\r\n                content=cached[\"response\"],\r\n                model=model,\r\n                usage={\"prompt_tokens\": 0, \"completion_tokens\": 0},\r\n                cached=True\r\n            )\r\n\r\n        # 6. Execute\r\n        t0 = time.time()\r\n        client = self.get_client(model)\r\n        response = client.chat.completions.create(\r\n            model=model,\r\n            messages=request.messages,\r\n            max_tokens=min(request.max_tokens, self.config.max_tokens_per_request)\r\n        )\r\n\r\n        # 7. Cache response\r\n        self.cache.set(cache_key, response.choices[0].message.content)\r\n\r\n        # 8. Track cost\r\n        self.cost_tracker.record(\r\n            user_id=user_id,\r\n            model=model,\r\n            prompt_tokens=response.usage.prompt_tokens,\r\n            completion_tokens=response.usage.completion_tokens,\r\n            latency_ms=(time.time() - t0) * 1000\r\n        )\r\n\r\n        return LLMResponse(\r\n            content=response.choices[0].message.content,\r\n            model=model,\r\n            usage={\r\n                \"prompt_tokens\": response.usage.prompt_tokens,\r\n                \"completion_tokens\": response.usage.completion_tokens\r\n            }\r\n        )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "910-system-design-interview-prep",
      children: "9.10 System Design Interview Prep"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mock-interview-design-a-rag-system-for-customer-support",
      children: "Mock Interview: \"Design a RAG System for Customer Support\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "45-minute structure:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What to cover"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0-5 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional: query historical tickets, suggest solutions, escalate. Non-functional: < 3s latency, 99.9% uptime, handle 1000 QPS peak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5-10 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket schema, chunk storage, embedding index, metadata filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10-20 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingestion pipeline, retrieval pipeline, generation pipeline, caching layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20-30 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunking strategy, embedding model choice, vector DB selection, re-ranking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30-40 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read replicas, connection pooling, multi-region for disaster recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40-45 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tradeoffs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost vs latency, cache invalidation strategy, model tiering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions to defend:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chunking:"
          }), " \"I chose semantic chunking over fixed-size because customer tickets have variable-length context that fixed boundaries would break.\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vector DB:"
          }), " \"I chose pgvector over a dedicated vector DB because we already use Postgres for ticket storage. Eliminating ChromaDB reduces operational complexity.\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching:"
          }), " \"Three-tier cache: exact match (Redis, 5-min TTL), semantic similarity (embedding comparison, 0.95 threshold), and KV cache for streaming sessions.\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scaling:"
          }), " \"Read replicas for vector search, primary for writes. Connection pooling with 20 base + 10 overflow per worker.\""]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SanitizeResult { cleaned: string; removed: string[]; warnings: string[] }\r\nclass InputSanitizer {\r\n  stripHTML(input: string): string { return input.replace(/<[^>]*>/g, \"\") }\r\n  escapeSQL(input: string): string { return input.replace(/'/g,\"''\").replace(/--/g,\"\").replace(/;/g,\"\") }\r\n  sanitize(input: string): SanitizeResult {\r\n    const removed: string[] = []; const warnings: string[] = []\r\n    let cleaned = input\r\n    if(/<script/i.test(cleaned)) { removed.push(\"script tags\"); cleaned = cleaned.replace(/<script[\\s\\S]*?<\\/script>/gi,\"\") }\r\n    if(/['\"];/.test(cleaned)) { warnings.push(\"Possible SQL injection\"); cleaned = this.escapeSQL(cleaned) }\r\n    if(input!==cleaned) warnings.push(\"Content was modified\")\r\n    return {cleaned,removed,warnings}\r\n  }\r\n}\r\nclass PIIDetector {\r\n  private patterns: [RegExp,string][] = [\r\n    [/\\b\\d{3}-\\d{2}-\\d{4}\\b/g, \"SSN\"],[/(?:\\d{4}-){3}\\d{4}\\b/g, \"CreditCard\"],[/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g, \"Email\"]\r\n  ]\r\n  detect(text: string): Array&lt;{type:string;value:string;position:number}&gt; {\r\n    const found: Array&lt;{type:string;value:string;position:number}&gt; = []\r\n    for(const [pattern,type] of this.patterns) {\r\n      let match: RegExpExecArray|null\r\n      while((match = pattern.exec(text)) !== null) { found.push({type,value:match[0],position:match.index}) }\r\n    }\r\n    return found\r\n  }\r\n  redact(text: string): string { let result = text\r\n    for(const [pattern] of this.patterns) result = result.replace(pattern,\"[REDACTED]\")\r\n    return result\r\n  }\r\n}\r\nclass PromptInjectionGuard {\r\n  private dangerousPatterns = [/ignore.*previous/i,/forget.*instruction/i,/system.*prompt/i,/new.*role/i,/you are now/i]\r\n  check(input: string): { safe: boolean; flags: string[] } {\r\n    const flags: string[] = []\r\n    for(const p of this.dangerousPatterns) if(p.test(input)) flags.push(`Pattern: ${p.source}`)\r\n    return {safe:flags.length===0,flags}\r\n  }\r\n}\r\nexport { InputSanitizer, PIIDetector, PromptInjectionGuard }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost model:"
          }), " Build a spreadsheet or Python script that estimates daily cost for a RAG system at 10K, 100K, and 1M queries/day. Identify the top-3 cost drivers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache hit-rate analysis:"
          }), " Instrument your RAG API to log cache hits and misses. Run for 24 hours and report hit rates for prompt cache vs semantic cache."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-region prototype:"
          }), " Deploy your RAG API to 2 regions (e.g., US and EU). Build a multi-region search that queries both and merges results."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "System design mock:"
          }), " Set a 45-minute timer and design \"a multi-agent customer support system\" on paper or a whiteboard. Record your design decisions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Latency budget:"
          }), " Profile your RAG API end-to-end. Set a 3-second P99 latency budget and optimize each component to meet it."]
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