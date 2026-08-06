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
const site_docs_courses_ai_agent_engineer_09_ai_system_design_md_273_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/09-ai-system-design","title":"Chapter 9 — AI System Design & Architecture","description":"Duration: 2 weeks, ~25 hours","source":"@site/docs/courses/ai-agent-engineer/09-ai-system-design.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/09-ai-system-design","permalink":"/ai-engineering-journey/ai-agent-engineer/09-ai-system-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"09-ai-system-design","slug":"/ai-agent-engineer/09-ai-system-design","title":"Chapter 9 — AI System Design & Architecture","sidebar_label":"Chapter 9 — AI System Design & Architecture","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Job Search Playbook: AI Agent Engineer","permalink":"/ai-engineering-journey/ai-agent-engineer/08-job-search-playbook"},"next":{"title":"Chapter 10 — Prompt Engineering Mastery","permalink":"/ai-engineering-journey/ai-agent-engineer/10-prompt-engineering-mastery"}}');
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
    div: "div",
    em: "em",
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
      }), " 2 weeks, ~25 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "# Naive RAG — one-shot retrieval + generation\nfrom openai import OpenAI\nimport chromadb\n\nclient = OpenAI()\nchroma = chromadb.HttpClient(host=\"localhost\", port=8000)\ncollection = chroma.get_collection(\"docs\")\n\ndef naive_rag(query: str) -> str:\n    # Embed query\n    response = client.embeddings.create(\n        input=query,\n        model=\"text-embedding-3-small\"\n    )\n    query_vector = response.data[0].embedding\n\n    # Retrieve\n    results = collection.query(\n        query_embeddings=[query_vector],\n        n_results=5\n    )\n    context = \"\\n\\n\".join(results[\"documents\"][0])\n\n    # Generate\n    completion = client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Answer using the context provided.\"},\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\n        ]\n    )\n    return completion.choices[0].message.content\n"
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
        children: "User Query ? Query Rewriter ? Multi-Query Expansion ? \n    Parallel Vector Searches ? Re-Ranker ? \n    Context Builder ? LLM ? Response Validation ? \n    Hallucination Check ? Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each step is a lightweight LLM call or a deterministic function. More latency, dramatically better quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Agentic RAG with query rewriting + re-ranking + validation\nfrom typing import Literal\nfrom pydantic import BaseModel\nfrom openai import OpenAI\nimport json\n\nclient = OpenAI()\n\nclass QueryRewrites(BaseModel):\n    queries: list[str]\n    reasoning: str\n\nclass ValidationResult(BaseModel):\n    is_hallucinated: bool\n    hallucinated_claims: list[str]\n    supported_claims: list[str]\n\ndef rewrite_query(original: str) -> list[str]:\n    \"\"\"Generate multiple search queries from one user query.\"\"\"\n    completion = client.beta.chat.completions.parse(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Generate 3 search queries that explore different aspects of the user's question.\"},\n            {\"role\": \"user\", \"content\": original}\n        ],\n        response_format=QueryRewrites\n    )\n    result = completion.choices[0].message.parsed\n    return result.queries\n\ndef cross_encoder_rerank(query: str, documents: list[str], top_k: int = 5) -> list[tuple[str, float]]:\n    \"\"\"Score each (query, doc) pair with a cross-encoder model.\"\"\"\n    pairs = [[query, doc[:500]] for doc in documents]\n    # Using a local cross-encoder model (Cohere or sentence-transformers)\n    # scores = cross_encoder.predict(pairs)\n    # Placeholder for local re-ranker\n    scored = [(doc, 0.95 - i * 0.05) for i, doc in enumerate(documents)]\n    scored.sort(key=lambda x: x[1], reverse=True)\n    return scored[:top_k]\n\ndef validate_response(query: str, context: str, response: str) -> ValidationResult:\n    \"\"\"Check if the response hallucinates claims not in context.\"\"\"\n    completion = client.beta.chat.completions.parse(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Compare the response against the context. Identify any claims in the response that are not supported by the context.\"},\n            {\"role\": \"user\", \"content\": f\"Query: {query}\\n\\nContext: {context}\\n\\nResponse: {response}\"}\n        ],\n        response_format=ValidationResult\n    )\n    return completion.choices[0].message.parsed\n\ndef agentic_rag(query: str) -> str:\n    \"\"\"Full agentic RAG pipeline with quality checks.\"\"\"\n    # Step 1: Query rewriting\n    queries = rewrite_query(query)\n\n    # Step 2: Parallel retrieval\n    all_docs = []\n    for q in queries:\n        q_v = client.embeddings.create(input=q, model=\"text-embedding-3-small\").data[0].embedding\n        results = chroma_collection.query(query_embeddings=[q_v], n_results=5)\n        all_docs.extend(results[\"documents\"][0])\n\n    # Step 3: Re-rank\n    reranked = cross_encoder_rerank(query, all_docs, top_k=5)\n    context = \"\\n\\n\".join([doc for doc, score in reranked])\n\n    # Step 4: Generate\n    response = client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Answer using only the context. Cite sources inline as [1], [2], etc.\"},\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\n        ]\n    ).choices[0].message.content\n\n    # Step 5: Validate\n    validation = validate_response(query, context, response)\n    if validation.is_hallucinated:\n        return response + \"\\n\\n?? Note: Some claims could not be verified against the provided context.\"\n\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3--multi-hop-rag",
      children: "Pattern 3 — Multi-Hop RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For questions that require synthesizing information from multiple documents where no single chunk contains the answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query ? Extract entities ? Find related chunks ? \n    First-hop retrieval ? Extract new entities ? \n    Second-hop retrieval ? Cross-document synthesis ? \n    LLM ? Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def multi_hop_rag(query: str) -> str:\n    \"\"\"Two-hop RAG for questions requiring cross-document synthesis.\"\"\"\n    # Hop 1: Find initial documents\n    q_v = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\n    hop1 = chroma_collection.query(query_embeddings=[q_v], n_results=5)\n\n    # Extract entities from Hop 1 results\n    entity_extraction = client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Extract key entities (names, dates, concepts, IDs) from the retrieved documents that might help find more relevant information.\"},\n            {\"role\": \"user\", \"content\": \"\\n\\n\".join(hop1[\"documents\"][0])}\n        ]\n    )\n    entities = entity_extraction.choices[0].message.content\n\n    # Hop 2: Search using entities\n    e_v = client.embeddings.create(input=entities, model=\"text-embedding-3-small\").data[0].embedding\n    hop2 = chroma_collection.query(query_embeddings=[e_v], n_results=5)\n\n    # Merge contexts\n    combined = list(set(hop1[\"documents\"][0] + hop2[\"documents\"][0]))\n    context = \"\\n\\n\".join(combined)\n\n    return client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Synthesize information from multiple documents to answer the query comprehensively.\"},\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\n        ]\n    ).choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-caching-strategies-for-ai",
      children: "9.2 Caching Strategies for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-layers-of-ai-cache",
      children: "Three Layers of AI Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------------------------+\n¦  L1: Prompt Cache (in-memory) ¦ ? Exact query match, TTL seconds\n+----------------------------¦\n¦  L2: Semantic Cache (vector) ¦ ? Similar query match, cosine > 0.95\n+----------------------------¦\n¦  L3: KV Cache (model-level)  ¦ ? Reused across turns in same session\n+----------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "l1-prompt-cache-exact-match",
      children: "L1: Prompt Cache (Exact Match)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\nimport json\nimport time\nfrom collections import OrderedDict\n\nclass PromptCache:\n    \"\"\"Simple TTL-based LRU cache for exact query matches.\"\"\"\n\n    def __init__(self, capacity: int = 1000, ttl_seconds: int = 300):\n        self.cache: OrderedDict[str, dict] = OrderedDict()\n        self.capacity = capacity\n        self.ttl = ttl_seconds\n\n    def _make_key(self, query: str, model: str, system_prompt: str) -> str:\n        raw = f\"{query}||{model}||{system_prompt}\"\n        return hashlib.sha256(raw.encode()).hexdigest()\n\n    def get(self, query: str, model: str, system_prompt: str) -> str | None:\n        key = self._make_key(query, model, system_prompt)\n        if key in self.cache:\n            entry = self.cache[key]\n            if time.time() - entry[\"timestamp\"] < self.ttl:\n                self.cache.move_to_end(key)\n                return entry[\"response\"]\n            del self.cache[key]\n        return None\n\n    def set(self, query: str, model: str, system_prompt: str, response: str):\n        key = self._make_key(query, model, system_prompt)\n        if len(self.cache) >= self.capacity:\n            self.cache.popitem(last=False)\n        self.cache[key] = {\"response\": response, \"timestamp\": time.time()}\n\n# Usage\nprompt_cache = PromptCache(capacity=5000, ttl_seconds=600)\n\ndef cached_completion(query: str, system_prompt: str = \"You are a helpful assistant.\") -> str:\n    cached = prompt_cache.get(query, \"gpt-4o-mini\", system_prompt)\n    if cached:\n        return cached\n\n    response = client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": system_prompt},\n            {\"role\": \"user\", \"content\": query}\n        ]\n    ).choices[0].message.content\n\n    prompt_cache.set(query, \"gpt-4o-mini\", system_prompt, response)\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "l2-semantic-cache-similarity-match",
      children: "L2: Semantic Cache (Similarity Match)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nclass SemanticCache:\n    \"\"\"Cache that returns a hit when a new query is semantically similar to a cached one.\"\"\"\n\n    def __init__(self, similarity_threshold: float = 0.95, max_entries: int = 500):\n        self.entries: list[dict] = []\n        self.threshold = similarity_threshold\n        self.max_entries = max_entries\n\n    def get(self, query_vector: list[float]) -> str | None:\n        if not self.entries:\n            return None\n\n        vectors = np.array([e[\"vector\"] for e in self.entries])\n        query_vec = np.array(query_vector).reshape(1, -1)\n        similarities = cosine_similarity(query_vec, vectors)[0]\n        best_idx = np.argmax(similarities)\n\n        if similarities[best_idx] >= self.threshold:\n            return self.entries[best_idx][\"response\"]\n        return None\n\n    def set(self, query_vector: list[float], query: str, response: str):\n        if len(self.entries) >= self.max_entries:\n            self.entries.pop(0)\n        self.entries.append({\n            \"query\": query,\n            \"vector\": query_vector,\n            \"response\": response,\n            \"timestamp\": time.time()\n        })\n\n# Usage\nsemantic_cache = SemanticCache(similarity_threshold=0.92)\n\ndef semantic_cached_rag(query: str) -> str:\n    q_vec = client.embeddings.create(\n        input=query, model=\"text-embedding-3-small\"\n    ).data[0].embedding\n\n    cached = semantic_cache.get(q_vec)\n    if cached:\n        return cached\n\n    response = naive_rag(query)\n    semantic_cache.set(q_vec, query, response)\n    return response\n"
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
        children: "from dataclasses import dataclass\n\n@dataclass\nclass RequestCost:\n    embedding_model: str\n    embedding_tokens: int\n    embedding_cost: float\n    llm_model: str\n    prompt_tokens: int\n    completion_tokens: int\n    llm_cost: float\n    vector_search_time_ms: float\n    total_cost: float\n    total_latency_ms: float\n\n# Pricing (per 1M tokens, USD)\nPRICING = {\n    \"text-embedding-3-small\": {\"input\": 0.02},\n    \"text-embedding-3-large\": {\"input\": 0.13},\n    \"gpt-4o-mini\": {\"input\": 0.15, \"output\": 0.60},\n    \"gpt-4o\": {\"input\": 2.50, \"output\": 10.00},\n    \"claude-3-haiku\": {\"input\": 0.25, \"output\": 1.25},\n    \"claude-3-sonnet\": {\"input\": 3.00, \"output\": 15.00},\n}\n\ndef estimate_request_cost(\n    query: str,\n    context_chunks: int,\n    chunk_size: int,\n    embedding_model: str = \"text-embedding-3-small\",\n    llm_model: str = \"gpt-4o-mini\",\n    expected_output_tokens: int = 300,\n) -> RequestCost:\n    query_tokens = len(query) // 4  # Rough estimate\n    context_tokens = context_chunks * chunk_size\n    prompt_tokens = query_tokens + context_tokens + 50  # System prompt overhead\n\n    embed_cost = (query_tokens / 1_000_000) * PRICING[embedding_model][\"input\"]\n    llm_input_cost = (prompt_tokens / 1_000_000) * PRICING[llm_model][\"input\"]\n    llm_output_cost = (expected_output_tokens / 1_000_000) * PRICING[llm_model][\"output\"]\n\n    return RequestCost(\n        embedding_model=embedding_model,\n        embedding_tokens=query_tokens,\n        embedding_cost=round(embed_cost, 6),\n        llm_model=llm_model,\n        prompt_tokens=prompt_tokens,\n        completion_tokens=expected_output_tokens,\n        llm_cost=round(llm_input_cost + llm_output_cost, 6),\n        vector_search_time_ms=50.0,\n        total_cost=round(embed_cost + llm_input_cost + llm_output_cost, 6),\n        total_latency_ms=800.0,\n    )\n\n# Usage\ncost = estimate_request_cost(\n    query=\"What are the lease terms for commercial properties in Dubai Marina?\",\n    context_chunks=5,\n    chunk_size=800,\n    llm_model=\"gpt-4o-mini\"\n)\nprint(f\"Embedding cost: ${cost.embedding_cost}\")\nprint(f\"LLM cost: ${cost.llm_cost}\")\nprint(f\"Total cost: ${cost.total_cost}\")\nprint(f\"Estimated daily cost (10K req): ${cost.total_cost * 10000:.2f}\")\n"
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
        children: "from pydantic import BaseModel\nfrom typing import Literal\n\nclass RouteDecision(BaseModel):\n    model: Literal[\"gpt-4o-mini\", \"gpt-4o\", \"claude-3-haiku\", \"claude-3-sonnet\"]\n    reasoning: str\n    estimated_difficulty: Literal[\"simple\", \"medium\", \"complex\"]\n\ndef route_query_to_model(query: str) -> RouteDecision:\n    \"\"\"Route simple queries to cheap models, complex to expensive.\"\"\"\n    completion = client.beta.chat.completions.parse(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Classify the user query by complexity:\\n\"\n             \"- simple: factual, single-sentence, can be answered directly\\n\"\n             \"- medium: requires reasoning or multiple steps\\n\"\n             \"- complex: requires deep reasoning, code generation, or creative work\"},\n            {\"role\": \"user\", \"content\": query}\n        ],\n        response_format=RouteDecision\n    )\n    return completion.choices[0].message.parsed\n\n# Router implementation\ndef query_with_routing(query: str) -> str:\n    decision = route_query_to_model(query)\n\n    model_map = {\n        \"simple\": \"gpt-4o-mini\",\n        \"medium\": \"gpt-4o-mini\",\n        \"complex\": \"gpt-4o\",\n    }\n    selected = model_map[decision.estimated_difficulty]\n\n    return client.chat.completions.create(\n        model=selected,\n        messages=[{\"role\": \"user\", \"content\": query}]\n    ).choices[0].message.content\n"
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
        children: "import time\n\ndef profile_rag(query: str) -> dict:\n    latencies = {}\n\n    t0 = time.time()\n    q_vec = client.embeddings.create(\n        input=query, model=\"text-embedding-3-small\"\n    ).data[0].embedding\n    latencies[\"embedding\"] = time.time() - t0\n\n    t0 = time.time()\n    results = chroma_collection.query(\n        query_embeddings=[q_vec], n_results=5\n    )\n    latencies[\"vector_search\"] = time.time() - t0\n\n    t0 = time.time()\n    context = \"\\n\\n\".join(results[\"documents\"][0])\n    latencies[\"context_building\"] = time.time() - t0\n\n    t0 = time.time()\n    response = client.chat.completions.create(\n        model=\"gpt-4o-mini\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"Answer using context.\"},\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\n        ],\n        max_tokens=500\n    )\n    latencies[\"llm_generation\"] = time.time() - t0\n    latencies[\"total\"] = sum(latencies.values())\n\n    return {\n        \"latencies_ms\": {k: round(v * 1000, 2) for k, v in latencies.items()},\n        \"prompt_tokens\": response.usage.prompt_tokens,\n        \"completion_tokens\": response.usage.completion_tokens,\n    }\n\n# Profile result\nresult = profile_rag(\"What are the best practices for RAG chunking?\")\nprint(json.dumps(result, indent=2))\n# {\n#   \"latencies_ms\": {\n#     \"embedding\": 150.23,\n#     \"vector_search\": 45.12,\n#     \"context_building\": 0.34,\n#     \"llm_generation\": 1200.56,\n#     \"total\": 1396.25\n#   },\n#   \"prompt_tokens\": 4120,\n#   \"completion_tokens\": 234\n# }\n"
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
        children: "# Connection pooling with async database\nfrom sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker\nfrom sqlalchemy.pool import NullPool\n\n# Pool sizing formula: connections = (CPUs * 2) + effective_spindle_count\nDATABASE_URL = \"postgresql+asyncpg://user:pass@host:5432/ragdb\"\nengine = create_async_engine(\n    DATABASE_URL,\n    pool_size=20,        # Base connections per worker\n    max_overflow=10,     # Additional connections under load\n    pool_pre_ping=True,  # Verify connections before use\n    pool_recycle=3600,   # Recycle every hour\n)\n\n# FastAPI with connection pool\nfrom contextlib import asynccontextmanager\nfrom fastapi import FastAPI\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    async with engine.begin() as conn:\n        await conn.run_sync(Base.metadata.create_all)\n    yield\n    await engine.dispose()\n\napp = FastAPI(lifespan=lifespan)\n\nasync def get_db() -> AsyncSession:\n    async with SessionLocal() as session:\n        yield session\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-replicas-for-vector-search",
      children: "Read Replicas for Vector Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Separate read and write paths for scaling\nREAD_REPLICA_URL = \"postgresql+asyncpg://user:pass@replica:5432/ragdb\"\nWRITE_PRIMARY_URL = \"postgresql+asyncpg://user:pass@primary:5432/ragdb\"\n\nread_engine = create_async_engine(READ_REPLICA_URL, pool_size=30)\nwrite_engine = create_async_engine(WRITE_PRIMARY_URL, pool_size=5)\n\nasync def search_documents(query_vector: list[float], top_k: int = 10):\n    \"\"\"Reads from replica for vector search.\"\"\"\n    async with AsyncSession(read_engine) as session:\n        # pgvector ANN search\n        result = await session.execute(\n            text(\"\"\"\n                SELECT id, content, embedding <-> :query AS distance\n                FROM document_chunks\n                ORDER BY embedding <-> :query\n                LIMIT :top_k\n            \"\"\"),\n            {\"query\": str(query_vector), \"top_k\": top_k}\n        )\n        return result.fetchall()\n\nasync def insert_document(content: str, embedding: list[float]):\n    \"\"\"Writes to primary for consistency.\"\"\"\n    async with AsyncSession(write_engine) as session:\n        session.add(DocumentChunk(content=content, embedding=embedding))\n        await session.commit()\n"
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
        children: "import asyncio\nfrom typing import NamedTuple\n\nclass RegionResult(NamedTuple):\n    region: str\n    documents: list[str]\n    latency_ms: float\n\nasync def search_region(\n    region_url: str,\n    query_vector: list[float],\n    top_k: int,\n    timeout_ms: int = 2000,\n) -> RegionResult:\n    \"\"\"Query a single region's vector DB with timeout.\"\"\"\n    t0 = time.time()\n    try:\n        async with httpx.AsyncClient(timeout=timeout_ms / 1000) as client:\n            resp = await client.post(\n                f\"{region_url}/search\",\n                json={\"vector\": query_vector, \"top_k\": top_k}\n            )\n            data = resp.json()\n            return RegionResult(\n                region=region_url,\n                documents=data[\"documents\"],\n                latency_ms=(time.time() - t0) * 1000\n            )\n    except Exception as e:\n        return RegionResult(region=region_url, documents=[], latency_ms=(time.time() - t0) * 1000)\n\nasync def multi_region_search(\n    query_vector: list[float],\n    regions: list[str],\n    top_k_per_region: int = 5,\n    merge_top_k: int = 10,\n) -> list[str]:\n    \"\"\"Search all regions in parallel, merge results.\"\"\"\n    tasks = [search_region(r, query_vector, top_k_per_region) for r in regions]\n    results = await asyncio.gather(*tasks)\n\n    # Log per-region latency\n    for r in results:\n        print(f\"Region {r.region}: {r.latency_ms:.0f}ms, {len(r.documents)} docs\")\n\n    # Merge and deduplicate\n    seen = set()\n    merged = []\n    for r in sorted(results, key=lambda x: x.latency_ms):\n        for doc in r.documents:\n            doc_id = hash(doc[:100])\n            if doc_id not in seen:\n                seen.add(doc_id)\n                merged.append(doc)\n\n    return merged[:merge_top_k]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-agent-infrastructure-architecture",
      children: "9.7 Agent Infrastructure Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-agent-system-architecture",
      children: "Multi-Agent System Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                         +-------------+\n                         ¦ API Gateway  ¦\n                         ¦ (rate limit, ¦\n                         ¦  auth, route)¦\n                         +-------------+\n                                ¦\n                    +-----------------------+\n                    ¦    Agent Supervisor    ¦\n                    ¦  (orchestration layer) ¦\n                    +-----------------------+\n                                ¦\n         +----------------------+----------------------+\n         ¦                      ¦                      ¦\n    +---------+          +-----------+          +----------+\n    ¦ Agent A ¦          ¦  Agent B  ¦          ¦  Agent C  ¦\n    ¦(search) ¦          ¦ (analyze) ¦          ¦ (respond) ¦\n    +---------+          +-----------+          +----------+\n         ¦                     ¦                      ¦\n         +---------------------+----------------------+\n                               ¦\n                    +---------------------+\n                    ¦     Message Bus      ¦\n                    ¦  (Redis / RabbitMQ)  ¦\n                    +---------------------¦\n                    ¦    State Store       ¦\n                    ¦  (Postgres / Redis)  ¦\n                    +---------------------¦\n                    ¦    Tool Registry     ¦\n                    ¦  (MCP server list)   ¦\n                    +---------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-registry",
      children: "Tool Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel\nfrom typing import Any, Callable\nimport json\n\nclass ToolDefinition(BaseModel):\n    name: str\n    description: str\n    parameters: dict\n    handler: str  # Module path to the handler function\n    timeout_seconds: int = 30\n    cost_per_call: float = 0.0\n    rate_limit_per_minute: int = 60\n\nclass ToolRegistry:\n    \"\"\"Central registry for all tools available to agents.\"\"\"\n\n    def __init__(self):\n        self._tools: dict[str, dict] = {}\n\n    def register(self, tool: ToolDefinition):\n        self._tools[tool.name] = tool.model_dump()\n\n    def get_schemas(self) -> list[dict]:\n        return [\n            {\"type\": \"function\", \"function\": {\n                \"name\": t[\"name\"],\n                \"description\": t[\"description\"],\n                \"parameters\": t[\"parameters\"]\n            }}\n            for t in self._tools.values()\n        ]\n\n    def get_tool(self, name: str) -> dict | None:\n        return self._tools.get(name)\n\n# Usage\nregistry = ToolRegistry()\n\nregistry.register(ToolDefinition(\n    name=\"search_web\",\n    description=\"Search the web for current information\",\n    parameters={\n        \"type\": \"object\",\n        \"properties\": {\n            \"query\": {\"type\": \"string\", \"description\": \"Search query\"}\n        },\n        \"required\": [\"query\"]\n    },\n    handler=\"tools.web_search\",\n    rate_limit_per_minute=30,\n    cost_per_call=0.001,\n))\n\nregistry.register(ToolDefinition(\n    name=\"query_vector_db\",\n    description=\"Search the vector database for relevant documents\",\n    parameters={\n        \"type\": \"object\",\n        \"properties\": {\n            \"query\": {\"type\": \"string\"},\n            \"top_k\": {\"type\": \"integer\", \"default\": 5}\n        },\n        \"required\": [\"query\"]\n    },\n    handler=\"tools.vector_search\",\n    rate_limit_per_minute=120,\n    cost_per_call=0.0005,\n))\n"
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
        children: "import asyncio\nfrom dataclasses import dataclass\nfrom enum import Enum\n\nclass ProcessingStatus(Enum):\n    PENDING = \"pending\"\n    CHUNKING = \"chunking\"\n    EMBEDDING = \"embedding\"\n    INDEXING = \"indexing\"\n    COMPLETED = \"completed\"\n    FAILED = \"failed\"\n\n@dataclass\nclass Document:\n    id: str\n    content: str\n    metadata: dict\n    status: ProcessingStatus = ProcessingStatus.PENDING\n\nclass IngestionPipeline:\n    \"\"\"\n    Handles 10K+ docs/day with parallel chunking, embedding, and indexing.\n    Uses asyncio queues for backpressure.\n    \"\"\"\n\n    def __init__(\n        self,\n        chunk_size: int = 800,\n        chunk_overlap: int = 150,\n        max_concurrent_embeddings: int = 5,\n        batch_size: int = 20,\n    ):\n        self.chunk_size = chunk_size\n        self.chunk_overlap = chunk_overlap\n        self.semaphore = asyncio.Semaphore(max_concurrent_embeddings)\n        self.batch_size = batch_size\n\n    def chunk_document(self, content: str) -> list[str]:\n        \"\"\"Split document into overlapping chunks.\"\"\"\n        chunks = []\n        start = 0\n        while start < len(content):\n            end = start + self.chunk_size\n            if end < len(content):\n                # Try to break at paragraph or sentence boundary\n                end = max(\n                    content.rfind(\"\\n\\n\", start, end),\n                    content.rfind(\". \", start, end),\n                    content.rfind(\" \", start, end),\n                    start + self.chunk_size // 2\n                )\n                end = end + 1 if end > start else start + self.chunk_size\n            chunks.append(content[start:end])\n            start = end - self.chunk_overlap\n        return chunks\n\n    async def embed_chunk(self, chunk: str) -> list[float]:\n        \"\"\"Embed a single chunk with concurrency control.\"\"\"\n        async with self.semaphore:\n            result = await asyncio.to_thread(\n                lambda: client.embeddings.create(\n                    input=chunk,\n                    model=\"text-embedding-3-small\"\n                ).data[0].embedding\n            )\n            return result\n\n    async def embed_batch(self, chunks: list[str]) -> list[list[float]]:\n        \"\"\"Embed chunks in parallel batches.\"\"\"\n        tasks = [self.embed_chunk(c) for c in chunks]\n        return await asyncio.gather(*tasks)\n\n    async def process_document(self, doc: Document) -> int:\n        \"\"\"Process a single document end-to-end.\"\"\"\n        try:\n            doc.status = ProcessingStatus.CHUNKING\n            chunks = self.chunk_document(doc.content)\n\n            doc.status = ProcessingStatus.EMBEDDING\n            # Process in batches for rate limiting\n            all_embeddings = []\n            for i in range(0, len(chunks), self.batch_size):\n                batch = chunks[i:i + self.batch_size]\n                embeddings = await self.embed_batch(batch)\n                all_embeddings.extend(embeddings)\n\n            doc.status = ProcessingStatus.INDEXING\n            # Store in vector DB (batch insert)\n            for chunk, embedding in zip(chunks, all_embeddings):\n                chroma_collection.add(\n                    documents=[chunk],\n                    embeddings=[embedding],\n                    metadatas=[{\"doc_id\": doc.id, **doc.metadata}]\n                )\n\n            doc.status = ProcessingStatus.COMPLETED\n            return len(chunks)\n\n        except Exception as e:\n            doc.status = ProcessingStatus.FAILED\n            print(f\"Failed to process {doc.id}: {e}\")\n            return 0\n\n# Usage\nasync def process_documents(docs: list[Document]):\n    pipeline = IngestionPipeline(max_concurrent_embeddings=10)\n    tasks = [pipeline.process_document(doc) for doc in docs]\n    results = await asyncio.gather(*tasks)\n    print(f\"Processed {sum(results)} chunks from {len(docs)} documents\")\n"
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
        children: "from fastapi import FastAPI, Request, HTTPException\nfrom pydantic import BaseModel\nimport time\nimport hashlib\n\napp = FastAPI(title=\"AI Gateway\")\n\nclass GatewayConfig(BaseModel):\n    rate_limit_per_minute: int = 60\n    max_tokens_per_request: int = 4000\n    max_requests_per_day_per_user: int = 1000\n    cost_alert_threshold_daily: float = 10.0\n\nclass LLMRequest(BaseModel):\n    model: str\n    messages: list[dict]\n    max_tokens: int = 1024\n    temperature: float = 0.7\n\nclass LLMResponse(BaseModel):\n    content: str\n    model: str\n    usage: dict\n    cached: bool = False\n\nclass AIGateway:\n    def __init__(self, config: GatewayConfig):\n        self.config = config\n        self.cache = PromptCache()\n        self.cost_tracker = CostTracker()\n\n    async def route_request(\n        self, request: LLMRequest, user_id: str\n    ) -> LLMResponse:\n        # 1. Authentication\n        if not self.authenticate(user_id):\n            raise HTTPException(status_code=403, detail=\"Unauthorized\")\n\n        # 2. Rate limiting\n        if self.is_rate_limited(user_id):\n            raise HTTPException(status_code=429, detail=\"Rate limit exceeded\")\n\n        # 3. Content filtering (input guard)\n        if self.contains_blocked_content(request.messages):\n            raise HTTPException(status_code=400, detail=\"Content policy violation\")\n\n        # 4. Model routing\n        model = self.route_model(request.model, request.messages)\n\n        # 5. Cache check\n        cache_key = self.cache_key(request)\n        cached = self.cache.get(cache_key)\n        if cached:\n            return LLMResponse(\n                content=cached[\"response\"],\n                model=model,\n                usage={\"prompt_tokens\": 0, \"completion_tokens\": 0},\n                cached=True\n            )\n\n        # 6. Execute\n        t0 = time.time()\n        client = self.get_client(model)\n        response = client.chat.completions.create(\n            model=model,\n            messages=request.messages,\n            max_tokens=min(request.max_tokens, self.config.max_tokens_per_request)\n        )\n\n        # 7. Cache response\n        self.cache.set(cache_key, response.choices[0].message.content)\n\n        # 8. Track cost\n        self.cost_tracker.record(\n            user_id=user_id,\n            model=model,\n            prompt_tokens=response.usage.prompt_tokens,\n            completion_tokens=response.usage.completion_tokens,\n            latency_ms=(time.time() - t0) * 1000\n        )\n\n        return LLMResponse(\n            content=response.choices[0].message.content,\n            model=model,\n            usage={\n                \"prompt_tokens\": response.usage.prompt_tokens,\n                \"completion_tokens\": response.usage.completion_tokens\n            }\n        )\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface SanitizeResult { cleaned: string; removed: string[]; warnings: string[] }\nclass InputSanitizer {\nstripHTML(input: string): string { return input.replace(/<[^>]", (0,jsx_runtime.jsx)(_components.em, {
        children: ">/g, \"\") }\nescapeSQL(input: string): string { return input.replace(/'/g,\"''\").replace(/--/g,\"\").replace(/;/g,\"\") }\nsanitize(input: string): SanitizeResult {\nconst removed: string[] = []; const warnings: string[] = []\nlet cleaned = input\nif(/<script/i.test(cleaned)) { removed.push(\"script tags\"); cleaned = cleaned.replace(/<script[\\s\\S]"
      }), "?</script>/gi,\"\") }\nif(/['\"];/.test(cleaned)) { warnings.push(\"Possible SQL injection\"); cleaned = this.escapeSQL(cleaned) }\nif(input!==cleaned) warnings.push(\"Content was modified\")\nreturn {cleaned,removed,warnings}\n}\n}\nclass PIIDetector {\nprivate patterns: [RegExp,string][] = [\n[/\\b\\d{3}-\\d{2}-\\d{4}\\b/g, \"SSN\"],[/(?:\\d{4}-){3}\\d{4}\\b/g, \"CreditCard\"],[/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/g, \"Email\"]\n]\ndetect(text: string): Array<{type:string;value:string;position:number}> {\nconst found: Array<{type:string;value:string;position:number}> = []\nfor(const [pattern,type] of this.patterns) {\nlet match: RegExpExecArray|null\nwhile((match = pattern.exec(text)) !== null) { found.push({type,value"]
    }), (0,jsx_runtime.jsx)(_components.div, {
      children: "0"
    }), ",position:match.index}) }\n}\nreturn found\n}\nredact(text: string): string { let result = text\nfor(const [pattern] of this.patterns) result = result.replace(pattern,\"[REDACTED]\")\nreturn result\n}\n}\nclass PromptInjectionGuard {\nprivate dangerousPatterns = [/ignore.*previous/i,/forget.*instruction/i,/system.*prompt/i,/new.*role/i,/you are now/i]\ncheck(input: string): { safe: boolean; flags: string[] } {\nconst flags: string[] = []\nfor(const p of this.dangerousPatterns) if(p.test(input)) flags.push(", (0,jsx_runtime.jsx)(_components.code, {
      children: "Pattern: ${p.source}"
    }), ")\nreturn {safe:flags.length===0,flags}\n}\n}\nexport { InputSanitizer, PIIDetector, PromptInjectionGuard }", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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