"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4355],{

/***/ 97648
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_09_production_rag_systems_md_a22_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-09-production-rag-systems-md-a22.json
const site_docs_courses_ai_engineering_placement_12_rag_vector_databases_09_production_rag_systems_md_a22_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/09-production-rag-systems","title":"Production RAG Systems","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":166,"frontMatter":{"id":"09-production-rag-systems","slug":"/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems","title":"Production RAG Systems","sidebar_label":"Production RAG Systems","sidebar_position":166},"sidebar":"placementSidebar","previous":{"title":"RAG Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/08-rag-evaluation"},"next":{"title":"Hybrid Search and Reranking","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems.md


const frontMatter = {
	id: '09-production-rag-systems',
	slug: '/ai-engineering-placement/12-rag-vector-databases/09-production-rag-systems',
	title: 'Production RAG Systems',
	sidebar_label: 'Production RAG Systems',
	sidebar_position: 166
};
const contentTitle = 'Production RAG Systems';

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
  "value": "9.1 Production Architecture",
  "id": "91-production-architecture",
  "level": 2
}, {
  "value": "9.1.1 Service-Oriented Architecture",
  "id": "911-service-oriented-architecture",
  "level": 3
}, {
  "value": "9.1.2 Async Pipeline",
  "id": "912-async-pipeline",
  "level": 3
}, {
  "value": "9.1.3 Deployment Patterns",
  "id": "913-deployment-patterns",
  "level": 3
}, {
  "value": "9.2 API Design",
  "id": "92-api-design",
  "level": 2
}, {
  "value": "9.2.1 REST API",
  "id": "921-rest-api",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "9.2.2 Authentication",
  "id": "922-authentication",
  "level": 3
}, {
  "value": "9.2.3 Rate Limiting",
  "id": "923-rate-limiting",
  "level": 3
}, {
  "value": "9.3 Monitoring &amp; Logging",
  "id": "93-monitoring--logging",
  "level": 2
}, {
  "value": "9.3.1 Structured Logging",
  "id": "931-structured-logging",
  "level": 3
}, {
  "value": "9.3.2 Metrics Collection",
  "id": "932-metrics-collection",
  "level": 3
}, {
  "value": "9.3.3 Alerting Rules",
  "id": "933-alerting-rules",
  "level": 3
}, {
  "value": "9.4 Fallback Strategies",
  "id": "94-fallback-strategies",
  "level": 2
}, {
  "value": "9.4.1 Circuit Breaker",
  "id": "941-circuit-breaker",
  "level": 3
}, {
  "value": "9.4.2 Fallback Chain",
  "id": "942-fallback-chain",
  "level": 3
}, {
  "value": "9.4.3 Graceful Degradation",
  "id": "943-graceful-degradation",
  "level": 3
}, {
  "value": "9.5 Data Refresh",
  "id": "95-data-refresh",
  "level": 2
}, {
  "value": "9.5.1 Incremental Indexing",
  "id": "951-incremental-indexing",
  "level": 3
}, {
  "value": "9.5.2 Scheduled Refresh",
  "id": "952-scheduled-refresh",
  "level": 3
}, {
  "value": "9.5.3 Consistency Management",
  "id": "953-consistency-management",
  "level": 3
}, {
  "value": "9.6 Cost &amp; Scale",
  "id": "96-cost--scale",
  "level": 2
}, {
  "value": "9.6.1 Multi-Layer Caching",
  "id": "961-multi-layer-caching",
  "level": 3
}, {
  "value": "9.6.2 Auto-Scaling",
  "id": "962-auto-scaling",
  "level": 3
}, {
  "value": "9.6.3 Cost Allocation",
  "id": "963-cost-allocation",
  "level": 3
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
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "production-rag-systems",
        children: "Production RAG Systems"
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
            children: "Design production-ready RAG architectures with reliability and scalability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement API endpoints, authentication, and rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build monitoring, logging, and observability systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design fallback strategies for retrieval failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement data refresh pipelines for knowledge base updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize for cost, latency, and throughput at scale"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval-Augmented Generation lets LLMs answer questions about your private data. Vector databases store embeddings for semantic search. This module covers the complete RAG pipeline from chunking to reranking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding production rag systems is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how production rag systems works in practice."
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
            children: "9.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, async pipelines, deployment patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST endpoints, authentication, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring & Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics, traces, alerts, dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degradation modes, circuit breakers, graceful handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental indexing, scheduled updates, consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost & Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, auto-scaling, cost allocation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\r\n    subgraph Edge\r\n        A[Client] --> B[API Gateway]\r\n        B --> C[Auth]\r\n        C --> D[Rate Limiter]\r\n    end\r\n    subgraph Services\r\n        D --> E[RAG Service]\r\n        E --> F[Retriever]\r\n        E --> G[Generator]\r\n        F --> H[Vector DB]\r\n        G --> I[LLM API]\r\n    end\r\n    subgraph Observability\r\n        F --> J[Logs]\r\n        G --> J\r\n        E --> K[Metrics]\r\n        E --> L[Traces]\r\n    end\r\n    subgraph Storage\r\n        M[(Knowledge Base)] --> N[Indexer]\r\n        N --> H\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-production-architecture",
      children: "9.1 Production Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "911-service-oriented-architecture",
      children: "9.1.1 Service-Oriented Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Dict, Any\r\nimport asyncio\r\nimport time\r\n\r\n@dataclass\r\nclass ServiceConfig:\r\n    name: str\r\n    host: str\r\n    port: int\r\n    replicas: int\r\n    timeout_ms: int\r\n\r\nclass MicroserviceRAG:\r\n    def __init__(self, configs: Dict[str, ServiceConfig]):\r\n        self.configs = configs\r\n        self.services = {}\r\n\r\n    def health_check(self) -> Dict[str, bool]:\r\n        status = {}\r\n        for name, config in self.configs.items():\r\n            status[name] = True  # Simulated health check\r\n        return status\r\n\r\n    def get_service_url(self, name: str) -> str:\r\n        config = self.configs.get(name)\r\n        if not config:\r\n            raise ValueError(f\"Service {name} not found\")\r\n        return f\"http://{config.host}:{config.port}\"\r\n\r\nconfigs = {\r\n    \"retriever\": ServiceConfig(\"retriever\", \"localhost\", 8001, 3, 200),\r\n    \"generator\": ServiceConfig(\"generator\", \"localhost\", 8002, 2, 5000),\r\n    \"indexer\": ServiceConfig(\"indexer\", \"localhost\", 8003, 1, 30000),\r\n}\r\nms = MicroserviceRAG(configs)\r\nprint(f\"Health: {ms.health_check()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "912-async-pipeline",
      children: "9.1.2 Async Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AsyncRAGPipeline:\r\n    def __init__(self, retriever, generator):\r\n        self.retriever = retriever\r\n        self.generator = generator\r\n\r\n    async def query_async(self, query: str) -> str:\r\n        chunks = await self._retrieve_async(query)\r\n        prompt = self._build_prompt(query, chunks)\r\n        response = await self._generate_async(prompt)\r\n        return response\r\n\r\n    async def _retrieve_async(self, query: str) -> list:\r\n        await asyncio.sleep(0.1)\r\n        return [{\"text\": f\"Result for {query}\"}]\r\n\r\n    async def _generate_async(self, prompt: str) -> str:\r\n        await asyncio.sleep(0.3)\r\n        return f\"Generated response\"\r\n\r\n    def _build_prompt(self, query: str, chunks: list) -> str:\r\n        context = \"\\n\\n\".join([c[\"text\"] for c in chunks])\r\n        return f\"Context: {context}\\n\\nQuestion: {query}\\n\\nAnswer:\"\r\n\r\nasync def test():\r\n    pipeline = AsyncRAGPipeline(None, None)\r\n    start = time.time()\r\n    result = await pipeline.query_async(\"What is RAG?\")\r\n    elapsed = (time.time() - start) * 1000\r\n    print(f\"Async query: {result} ({elapsed:.0f}ms)\")\r\n\r\nasyncio.run(test())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "913-deployment-patterns",
      children: "9.1.3 Deployment Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DeploymentManager:\r\n    def __init__(self):\r\n        self.strategies = {\r\n            \"single\": \"All components on one server\",\r\n            \"microservices\": \"Independent services with API gateway\",\r\n            \"serverless\": \"AWS Lambda / Cloud Functions per component\",\r\n            \"hybrid\": \"Vector DB managed, LLM serverless, app containerized\",\r\n        }\r\n\r\n    def recommend(self, scale: str, budget: str, latency_sla: str) -> str:\r\n        if scale == \"small\" and budget == \"low\":\r\n            return \"single\"\r\n        elif scale == \"large\" and latency_sla == \"strict\":\r\n            return \"microservices\"\r\n        elif budget == \"variable\":\r\n            return \"serverless\"\r\n        else:\r\n            return \"hybrid\"\r\n\r\n    def deployment_plan(self, strategy: str) -> list:\r\n        plans = {\r\n            \"single\": [\"Provision 1 server (32GB RAM, 8CPU)\", \"Install Docker Compose\", \"Deploy all services\"],\r\n            \"microservices\": [\"Set up Kubernetes cluster\", \"Deploy retriever service (3 pods)\", \"Deploy generator service (2 pods)\", \"Set up API gateway\", \"Configure autoscaling\"],\r\n            \"serverless\": [\"Package retriever as Lambda\", \"Package generator as Cloud Function\", \"Use managed vector DB\", \"Set up API Gateway\"],\r\n        }\r\n        return plans.get(strategy, [])\r\n\r\ndm = DeploymentManager()\r\nstrategy = dm.recommend(\"large\", \"medium\", \"strict\")\r\nprint(f\"Recommended: {strategy}\")\r\nprint(dm.deployment_plan(strategy))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-api-design",
      children: "9.2 API Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "921-rest-api",
      children: "9.2.1 REST API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, HTTPException, Depends\r\nfrom pydantic import BaseModel, Field\r\nfrom typing import List, Optional\r\nimport uvicorn\r\n\r\nclass QueryRequest(BaseModel):\r\n    query: str = Field(..., min_length=1, max_length=2000)\r\n    conversation_id: Optional[str] = None\r\n    top_k: int = Field(default=5, ge=1, le=20)\r\n    temperature: float = Field(default=0.0, ge=0, le=2)\r\n\r\nclass QueryResponse(BaseModel):\r\n    answer: str\r\n    sources: List[str]\r\n    confidence: float\r\n    latency_ms: float\r\n\r\nclass SourceResponse(BaseModel):\r\n    chunk_id: str\r\n    text: str\r\n    score: float\r\n    metadata: Dict\r\n\r\n## app = FastAPI(title=\"RAG API\")\r\n#\r\n\r\n## @app.post(\"/query\", response_model=QueryResponse)\r\n\r\n## async def query_endpoint(request: QueryRequest):\r\n\r\n##     try:\r\n\r\n##         start = time.time()\r\n\r\n##         result = rag_pipeline.query(request.query, request.top_k)\r\n\r\n##         elapsed = (time.time() - start) * 1000\r\n\r\n##         return QueryResponse(\r\n\r\n##             answer=result[\"response\"],\r\n\r\n##             sources=[s[\"text\"] for s in result[\"sources\"]],\r\n\r\n##             confidence=result.get(\"confidence\", 0.95),\r\n\r\n##             latency_ms=round(elapsed, 2),\r\n\r\n##         )\r\n\r\n##     except Exception as e:\r\n\r\n##         raise HTTPException(status_code=500, detail=str(e))\r\n\r\nprint(\"FastAPI RAG endpoint design ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "922-authentication",
      children: "9.2.2 Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nimport hmac\r\nfrom datetime import datetime\r\nfrom typing import Optional\r\n\r\nclass APIKeyAuth:\r\n    def __init__(self):\r\n        self.api_keys = {}  # key -> permissions\r\n        self.rate_limits = {}  # key -> request_count_window\r\n\r\n    def add_key(self, key: str, permissions: List[str], rate_limit: int = 100):\r\n        self.api_keys[key] = {\"permissions\": permissions, \"rate_limit\": rate_limit}\r\n        self.rate_limits[key] = []\r\n\r\n    def validate(self, key: str, required_permission: str = None) -> bool:\r\n        if key not in self.api_keys:\r\n            return False\r\n        if required_permission and required_permission not in self.api_keys[key][\"permissions\"]:\r\n            return False\r\n\r\n        now = time.time()\r\n        window = 60  # 1 minute window\r\n        self.rate_limits[key] = [t for t in self.rate_limits.get(key, []) if now - t < window]\r\n\r\n        rate_limit = self.api_keys[key][\"rate_limit\"]\r\n        if len(self.rate_limits[key]) >= rate_limit:\r\n            return False\r\n\r\n        self.rate_limits[key].append(now)\r\n        return True\r\n\r\nclass JWTAuth:\r\n    def __init__(self, secret: str):\r\n        self.secret = secret\r\n\r\n    def create_token(self, user_id: str, permissions: List[str]) -> str:\r\n        payload = f\"{user_id}:{','.join(permissions)}:{datetime.now().timestamp() + 3600}\"\r\n        signature = hmac.new(self.secret.encode(), payload.encode(), hashlib.sha256).hexdigest()\r\n        return f\"{payload}:{signature}\"\r\n\r\n    def validate_token(self, token: str) -> Optional[Dict]:\r\n        parts = token.split(\":\")\r\n        if len(parts) < 3:\r\n            return None\r\n        payload = \":\".join(parts[:-1])\r\n        signature = parts[-1]\r\n\r\n        expected = hmac.new(self.secret.encode(), payload.encode(), hashlib.sha256).hexdigest()\r\n        if not hmac.compare_digest(signature, expected):\r\n            return None\r\n\r\n        timestamp = float(parts[2])\r\n        if datetime.now().timestamp() > timestamp:\r\n            return None\r\n\r\n        return {\"user_id\": parts[0], \"permissions\": parts[1].split(\",\")}\r\n\r\nauth = JWTAuth(\"my-secret-key\")\r\ntoken = auth.create_token(\"user-1\", [\"rag:query\", \"rag:sources\"])\r\nprint(f\"JWT token: {token[:50]}...\")\r\nprint(f\"Validated: {auth.validate_token(token)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "923-rate-limiting",
      children: "9.2.3 Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom collections import defaultdict\r\nfrom threading import Lock\r\n\r\nclass SlidingWindowRateLimiter:\r\n    def __init__(self, default_limit: int = 60, window_seconds: int = 60):\r\n        self.default_limit = default_limit\r\n        self.window = window_seconds\r\n        self.requests: Dict[str, List[float]] = defaultdict(list)\r\n        self.lock = Lock()\r\n\r\n    def check(self, key: str, limit: int = None) -> bool:\r\n        limit = limit or self.default_limit\r\n        now = time.time()\r\n\r\n        with self.lock:\r\n            self.requests[key] = [t for t in self.requests[key] if now - t < self.window]\r\n            if len(self.requests[key]) >= limit:\r\n                return False\r\n            self.requests[key].append(now)\r\n            return True\r\n\r\n    def remaining(self, key: str, limit: int = None) -> int:\r\n        limit = limit or self.default_limit\r\n        now = time.time()\r\n        with self.lock:\r\n            self.requests[key] = [t for t in self.requests[key] if now - t < self.window]\r\n            return limit - len(self.requests[key])\r\n\r\nlimiter = SlidingWindowRateLimiter(default_limit=5, window_seconds=60)\r\nfor i in range(7):\r\n    allowed = limiter.check(\"user-1\")\r\n    print(f\"Request {i+1}: {'allowed' if allowed else 'blocked'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-monitoring--logging",
      children: "9.3 Monitoring & Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "931-structured-logging",
      children: "9.3.1 Structured Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\r\nimport uuid\r\nfrom datetime import datetime\r\n\r\nclass StructuredLogger:\r\n    def __init__(self, service_name: str):\r\n        self.service = service_name\r\n\r\n    def log_query(self, query: str, user_id: str, chunks: int, latency_ms: float):\r\n        entry = {\r\n            \"event\": \"query\",\r\n            \"service\": self.service,\r\n            \"query\": query[:200],\r\n            \"user_id\": user_id,\r\n            \"num_chunks\": chunks,\r\n            \"latency_ms\": round(latency_ms, 2),\r\n            \"timestamp\": datetime.now().isoformat(),\r\n            \"request_id\": str(uuid.uuid4()),\r\n        }\r\n        print(json.dumps(entry))\r\n\r\n    def log_error(self, error: str, context: str, request_id: str):\r\n        entry = {\r\n            \"event\": \"error\",\r\n            \"service\": self.service,\r\n            \"error\": error,\r\n            \"context\": context[:500],\r\n            \"request_id\": request_id,\r\n            \"timestamp\": datetime.now().isoformat(),\r\n        }\r\n        print(json.dumps(entry))\r\n\r\n    def log_metric(self, name: str, value: float, tags: Dict = None):\r\n        entry = {\r\n            \"event\": \"metric\",\r\n            \"service\": self.service,\r\n            \"metric\": name,\r\n            \"value\": value,\r\n            \"tags\": tags or {},\r\n            \"timestamp\": datetime.now().isoformat(),\r\n        }\r\n        print(json.dumps(entry))\r\n\r\nlogger = StructuredLogger(\"rag-service\")\r\nlogger.log_query(\"What is RAG?\", \"user-1\", 5, 450.2)\r\nlogger.log_error(\"Vector DB timeout\", \"Connection pool exhausted\", \"req-123\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "932-metrics-collection",
      children: "9.3.2 Metrics Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\r\nimport statistics\r\n\r\nclass MetricsCollector:\r\n    def __init__(self):\r\n        self.counters: Dict[str, Counter] = defaultdict(Counter)\r\n        self.timings: Dict[str, List[float]] = defaultdict(list)\r\n        self.gauges: Dict[str, float] = {}\r\n\r\n    def increment(self, metric: str, tags: Dict = None):\r\n        tag_str = str(tags) if tags else \"default\"\r\n        self.counters[metric][tag_str] += 1\r\n\r\n    def record_timing(self, metric: str, value_ms: float):\r\n        self.timings[metric].append(value_ms)\r\n\r\n    def set_gauge(self, metric: str, value: float):\r\n        self.gauges[metric] = value\r\n\r\n    def snapshot(self) -> Dict:\r\n        return {\r\n            \"counters\": {\r\n                metric: dict(tags) for metric, tags in self.counters.items()\r\n            },\r\n            \"timings\": {\r\n                metric: {\r\n                    \"avg\": round(statistics.mean(values), 2),\r\n                    \"p50\": round(sorted(values)[len(values) // 2], 2),\r\n                    \"p95\": round(sorted(values)[int(len(values) * 0.95)], 2),\r\n                    \"p99\": round(sorted(values)[int(len(values) * 0.99)], 2),\r\n                    \"count\": len(values),\r\n                }\r\n                for metric, values in self.timings.items()\r\n            },\r\n            \"gauges\": self.gauges,\r\n        }\r\n\r\nmetrics = MetricsCollector()\r\nmetrics.increment(\"queries_total\", {\"endpoint\": \"/query\"})\r\nmetrics.record_timing(\"retrieval_latency\", 150.5)\r\nmetrics.record_timing(\"retrieval_latency\", 200.3)\r\nmetrics.set_gauge(\"vector_db_size\", 10000)\r\nprint(json.dumps(metrics.snapshot(), indent=2, default=str))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "933-alerting-rules",
      children: "9.3.3 Alerting Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass AlertRule:\r\n    metric: str\r\n    operator: str\r\n    threshold: float\r\n    duration_seconds: int\r\n    severity: str\r\n\r\nclass AlertManager:\r\n    def __init__(self):\r\n        self.rules: List[AlertRule] = []\r\n        self.alert_history: List[Dict] = []\r\n        self.metric_buffer: Dict[str, List[tuple]] = defaultdict(list)\r\n\r\n    def add_rule(self, rule: AlertRule):\r\n        self.rules.append(rule)\r\n\r\n    def feed_metric(self, name: str, value: float, timestamp: float = None):\r\n        ts = timestamp or time.time()\r\n        self.metric_buffer[name].append((ts, value))\r\n\r\n    def check_alerts(self) -> List[Dict]:\r\n        alerts = []\r\n        now = time.time()\r\n        for rule in self.rules:\r\n            recent = [\r\n                v for t, v in self.metric_buffer[rule.metric]\r\n                if now - t < rule.duration_seconds\r\n            ]\r\n            if not recent:\r\n                continue\r\n\r\n            trigger = False\r\n            if rule.operator == \"gt\" and statistics.mean(recent) > rule.threshold:\r\n                trigger = True\r\n            elif rule.operator == \"lt\" and statistics.mean(recent) < rule.threshold:\r\n                trigger = True\r\n\r\n            if trigger:\r\n                alert = {\r\n                    \"rule\": rule.metric,\r\n                    \"value\": round(statistics.mean(recent), 2),\r\n                    \"threshold\": rule.threshold,\r\n                    \"severity\": rule.severity,\r\n                    \"timestamp\": datetime.now().isoformat(),\r\n                }\r\n                alerts.append(alert)\r\n                self.alert_history.append(alert)\r\n\r\n        return alerts\r\n\r\nalert_mgr = AlertManager()\r\nalert_mgr.add_rule(AlertRule(\"retrieval_p95_latency\", \"gt\", 500, 300, \"warning\"))\r\nalert_mgr.feed_metric(\"retrieval_p95_latency\", 600)\r\nprint(f\"Alerts: {alert_mgr.check_alerts()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-fallback-strategies",
      children: "9.4 Fallback Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "941-circuit-breaker",
      children: "9.4.1 Circuit Breaker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CircuitBreaker:\r\n    def __init__(self, failure_threshold: int = 5, recovery_timeout: float = 30.0):\r\n        self.failure_threshold = failure_threshold\r\n        self.recovery_timeout = recovery_timeout\r\n        self.failure_count = 0\r\n        self.last_failure_time = 0\r\n        self.state = \"closed\"  # closed, open, half-open\r\n\r\n    def call(self, fn, *args, **kwargs):\r\n        if self.state == \"open\":\r\n            if time.time() - self.last_failure_time > self.recovery_timeout:\r\n                self.state = \"half-open\"\r\n            else:\r\n                raise Exception(\"Circuit breaker is OPEN\")\r\n\r\n        try:\r\n            result = fn(*args, **kwargs)\r\n            if self.state == \"half-open\":\r\n                self.state = \"closed\"\r\n                self.failure_count = 0\r\n            return result\r\n        except Exception as e:\r\n            self.failure_count += 1\r\n            self.last_failure_time = time.time()\r\n            if self.failure_count >= self.failure_threshold:\r\n                self.state = \"open\"\r\n            raise e\r\n\r\ndef unreliable_llm_call(prompt: str) -> str:\r\n    if time.time() % 3 < 1:\r\n        raise Exception(\"LLM timeout\")\r\n    return \"Response\"\r\n\r\ncb = CircuitBreaker(failure_threshold=3, recovery_timeout=10)\r\nfor i in range(10):\r\n    try:\r\n        result = cb.call(unreliable_llm_call, \"test\")\r\n    except Exception as e:\r\n        print(f\"Attempt {i+1}: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "942-fallback-chain",
      children: "9.4.2 Fallback Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FallbackChain:\r\n    def __init__(self, strategies: list):\r\n        self.strategies = strategies\r\n\r\n    def execute(self, query: str) -> tuple:\r\n        errors = []\r\n        for name, strategy_fn in self.strategies:\r\n            try:\r\n                result = strategy_fn(query)\r\n                return result, name\r\n            except Exception as e:\r\n                errors.append(f\"{name}: {e}\")\r\n                continue\r\n        return None, errors\r\n\r\n    @staticmethod\r\n    def default_retriever(query: str) -> list:\r\n        return [{\"text\": f\"Default result for {query}\"}]\r\n\r\n    @staticmethod\r\n    def degraded_retriever(query: str) -> list:\r\n        return [{\"text\": \"Unable to retrieve specific results. Using general knowledge.\"}]\r\n\r\nfallback = FallbackChain([\r\n    (\"primary_vector_db\", lambda q: (_ for _ in ()).throw(Exception(\"DB timeout\"))),\r\n    (\"backup_vector_db\", lambda q: (_ for _ in ()).throw(Exception(\"Backup also down\"))),\r\n    (\"keyword_search\", lambda q: [{\"text\": f\"Keyword match: {q}\"}]),\r\n])\r\nresult, method = fallback.execute(\"What is RAG?\")\r\nprint(f\"Fallback method: {method}, result: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "943-graceful-degradation",
      children: "9.4.3 Graceful Degradation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DegradationManager:\r\n    def __init__(self):\r\n        self.service_health: Dict[str, bool] = {}\r\n        self.degradation_level = 0  # 0=full, 1=reduced, 2=minimal\r\n\r\n    def mark_unhealthy(self, service: str):\r\n        self.service_health[service] = False\r\n        self._recalculate_level()\r\n\r\n    def mark_healthy(self, service: str):\r\n        self.service_health[service] = True\r\n        self._recalculate_level()\r\n\r\n    def _recalculate_level(self):\r\n        unhealthy = sum(1 for h in self.service_health.values() if not h)\r\n        total = len(self.service_health)\r\n        if total == 0:\r\n            self.degradation_level = 0\r\n        elif unhealthy / total > 0.5:\r\n            self.degradation_level = 2\r\n        elif unhealthy > 0:\r\n            self.degradation_level = 1\r\n        else:\r\n            self.degradation_level = 0\r\n\r\n    def get_response_config(self) -> Dict:\r\n        if self.degradation_level == 0:\r\n            return {\"top_k\": 5, \"use_generator\": True, \"include_sources\": True}\r\n        elif self.degradation_level == 1:\r\n            return {\"top_k\": 3, \"use_generator\": True, \"include_sources\": False}\r\n        else:\r\n            return {\"top_k\": 1, \"use_generator\": False, \"include_sources\": False}\r\n\r\ndeg = DegradationManager()\r\ndeg.mark_unhealthy(\"generator\")\r\nprint(f\"Degradation level: {deg.degradation_level}\")\r\nprint(f\"Response config: {deg.get_response_config()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-data-refresh",
      children: "9.5 Data Refresh"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "951-incremental-indexing",
      children: "9.5.1 Incremental Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class IncrementalIndexer:\r\n    def __init__(self, vector_store):\r\n        self.vector_store = vector_store\r\n        self.last_indexed = 0\r\n\r\n    def index_new_documents(self, documents: List[Document]) -> Dict:\r\n        indexed = 0\r\n        errors = 0\r\n        for doc in documents:\r\n            try:\r\n                chunks = chunk_document(doc.text)\r\n                for chunk_text in chunks:\r\n                    vector = mock_embedder(chunk_text).tolist()\r\n                    self.vector_store.insert(\r\n                        id=f\"{doc.id}-{hash(chunk_text[:50])}\",\r\n                        vector=vector,\r\n                        metadata={\"source\": doc.id, \"text\": chunk_text},\r\n                    )\r\n                    indexed += 1\r\n            except Exception:\r\n                errors += 1\r\n\r\n        self.last_indexed = time.time()\r\n        return {\"indexed\": indexed, \"errors\": errors, \"timestamp\": self.last_indexed}\r\n\r\n    def sync_status(self) -> Dict:\r\n        return {\r\n            \"last_indexed\": datetime.fromtimestamp(self.last_indexed).isoformat() if self.last_indexed else \"never\",\r\n            \"num_documents\": self.vector_store.size(),\r\n        }\r\n\r\nindexer = IncrementalIndexer(VectorStore())\r\nstats = indexer.index_new_documents([Document(id=\"new-doc\", text=\"New RAG research\")])\r\nprint(f\"Indexing stats: {stats}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "952-scheduled-refresh",
      children: "9.5.2 Scheduled Refresh"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import schedule\r\nimport time as time_module\r\n\r\nclass RefreshScheduler:\r\n    def __init__(self, indexer: IncrementalIndexer, data_source):\r\n        self.indexer = indexer\r\n        self.data_source = data_source\r\n        self.schedule_jobs = []\r\n\r\n    def add_hourly_refresh(self):\r\n        def job():\r\n            new_docs = self.data_source.get_updates_since(self.indexer.last_indexed)\r\n            if new_docs:\r\n                stats = self.indexer.index_new_documents(new_docs)\r\n                print(f\"Hourly refresh: {stats}\")\r\n        schedule.every(1).hours.do(job)\r\n        self.schedule_jobs.append(\"hourly\")\r\n\r\n    def add_daily_full_refresh(self):\r\n        def job():\r\n            all_docs = self.data_source.get_all()\r\n            stats = self.indexer.index_new_documents(all_docs)\r\n            print(f\"Daily full refresh: {stats}\")\r\n        schedule.every().day.at(\"02:00\").do(job)\r\n        self.schedule_jobs.append(\"daily_full\")\r\n\r\n    def run_pending(self):\r\n        schedule.run_pending()\r\n\r\nclass MockDataSource:\r\n    def get_updates_since(self, timestamp: float) -> List[Document]:\r\n        return [Document(id=\"updated-doc\", text=\"Updated content\")]\r\n\r\n    def get_all(self) -> List[Document]:\r\n        return [Document(id=\"doc-1\", text=\"Full content\")]\r\n\r\nscheduler = RefreshScheduler(IncrementalIndexer(VectorStore()), MockDataSource())\r\nscheduler.add_hourly_refresh()\r\nscheduler.add_daily_full_refresh()\r\nprint(f\"Refresh schedule: {scheduler.schedule_jobs}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "953-consistency-management",
      children: "9.5.3 Consistency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConsistencyManager:\r\n    def __init__(self, vector_store, source_db):\r\n        self.vector_store = vector_store\r\n        self.source_db = source_db\r\n\r\n    def verify_consistency(self, sample_size: int = 100) -> Dict:\r\n        mismatches = 0\r\n        checked = 0\r\n\r\n        for doc_id in self.source_db.get_all_doc_ids()[:sample_size]:\r\n            source_text = self.source_db.get_text(doc_id)\r\n            stored_chunk = self.vector_store.get(doc_id)\r\n            checked += 1\r\n\r\n            if stored_chunk and stored_chunk.metadata.get(\"text\") != source_text:\r\n                mismatches += 1\r\n\r\n        return {\r\n            \"checked\": checked,\r\n            \"mismatches\": mismatches,\r\n            \"consistent_pct\": round((1 - mismatches / checked) * 100, 2) if checked > 0 else 100,\r\n        }\r\n\r\n    def repair_inconsistencies(self):\r\n        report = self.verify_consistency()\r\n        if report[\"mismatches\"] > 0:\r\n            print(f\"Repairing {report['mismatches']} inconsistent documents\")\r\n        return report\r\n\r\ncm = ConsistencyManager(VectorStore(), None)\r\nprint(\"Consistency manager ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-cost--scale",
      children: "9.6 Cost & Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "961-multi-layer-caching",
      children: "9.6.1 Multi-Layer Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ProductionCache:\r\n    def __init__(self):\r\n        self.l1_cache = {}  # In-memory, fast, small\r\n        self.l2_cache = {}  # Redis-like, larger\r\n        self.l1_max_size = 1000\r\n        self.l2_max_size = 10000\r\n        self.hit_counts = {\"l1\": 0, \"l2\": 0, \"miss\": 0}\r\n\r\n    def get(self, key: str) -> Optional[str]:\r\n        if key in self.l1_cache:\r\n            self.hit_counts[\"l1\"] += 1\r\n            return self.l1_cache[key]\r\n        if key in self.l2_cache:\r\n            self.hit_counts[\"l2\"] += 1\r\n            self.l1_cache[key] = self.l2_cache[key]\r\n            return self.l2_cache[key]\r\n        self.hit_counts[\"miss\"] += 1\r\n        return None\r\n\r\n    def set(self, key: str, value: str):\r\n        if len(self.l1_cache) >= self.l1_max_size:\r\n            evict_key = next(iter(self.l1_cache))\r\n            self.l2_cache[evict_key] = self.l1_cache.pop(evict_key)\r\n        self.l1_cache[key] = value\r\n        if len(self.l2_cache) >= self.l2_max_size:\r\n            self.l2_cache.pop(next(iter(self.l2_cache)))\r\n\r\n    def stats(self) -> Dict:\r\n        total = sum(self.hit_counts.values())\r\n        return {\r\n            \"l1_hits\": self.hit_counts[\"l1\"],\r\n            \"l2_hits\": self.hit_counts[\"l2\"],\r\n            \"misses\": self.hit_counts[\"miss\"],\r\n            \"hit_rate\": round((self.hit_counts[\"l1\"] + self.hit_counts[\"l2\"]) / total * 100, 2) if total > 0 else 0,\r\n        }\r\n\r\npcache = ProductionCache()\r\nfor i in range(100):\r\n    pcache.set(f\"key-{i}\", f\"value-{i}\")\r\npcache.get(\"key-1\")\r\npcache.get(\"key-2\")\r\nprint(f\"Cache stats: {pcache.stats()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "962-auto-scaling",
      children: "9.6.2 Auto-Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AutoScaler:\r\n    def __init__(self, min_replicas: int = 2, max_replicas: int = 10):\r\n        self.min_replicas = min_replicas\r\n        self.max_replicas = max_replicas\r\n        self.current_replicas = min_replicas\r\n        self.cpu_threshold = 70.0\r\n        self.qps_threshold = 100\r\n\r\n    def scale(self, current_cpu: float, current_qps: int) -> Dict:\r\n        action = \"none\"\r\n        if current_cpu > self.cpu_threshold or current_qps > self.qps_threshold:\r\n            if self.current_replicas < self.max_replicas:\r\n                self.current_replicas += 1\r\n                action = \"scale_up\"\r\n        elif current_cpu < self.cpu_threshold * 0.5 and current_qps < self.qps_threshold * 0.5:\r\n            if self.current_replicas > self.min_replicas:\r\n                self.current_replicas -= 1\r\n                action = \"scale_down\"\r\n\r\n        return {\r\n            \"current_replicas\": self.current_replicas,\r\n            \"action\": action,\r\n            \"cpu\": current_cpu,\r\n            \"qps\": current_qps,\r\n        }\r\n\r\nscaler = AutoScaler(min_replicas=2, max_replicas=10)\r\nprint(scaler.scale(cpu=85.0, qps=150))\r\nprint(scaler.scale(cpu=30.0, qps=40))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "963-cost-allocation",
      children: "9.6.3 Cost Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CostAllocator:\r\n    def __init__(self):\r\n        self.costs: Dict[str, float] = defaultdict(float)\r\n        self.request_log: List[Dict] = []\r\n\r\n    def record_request(self, query: str, user_id: str, tokens_in: int, tokens_out: int, model: str):\r\n        pricing = PRICING.get(model, ModelPricing(model, 0.15, 0.60))\r\n        cost = (tokens_in / 1000) * pricing.input_price_per_1k + (tokens_out / 1000) * pricing.output_price_per_1k\r\n\r\n        entry = {\r\n            \"user_id\": user_id,\r\n            \"query_length\": len(query),\r\n            \"tokens_in\": tokens_in,\r\n            \"tokens_out\": tokens_out,\r\n            \"model\": model,\r\n            \"cost\": round(cost, 6),\r\n            \"timestamp\": datetime.now().isoformat(),\r\n        }\r\n        self.request_log.append(entry)\r\n        self.costs[user_id] += cost\r\n\r\n    def user_spend(self, user_id: str) -> float:\r\n        return round(self.costs.get(user_id, 0), 4)\r\n\r\n    def top_users(self, n: int = 10) -> List[Dict]:\r\n        sorted_users = sorted(self.costs.items(), key=lambda x: x[1], reverse=True)\r\n        return [\r\n            {\"user_id\": uid, \"cost\": round(cost, 4)}\r\n            for uid, cost in sorted_users[:n]\r\n        ]\r\n\r\nallocator = CostAllocator()\r\nallocator.record_request(\"What is RAG?\", \"user-1\", 1500, 200, \"gpt-4o-mini\")\r\nallocator.record_request(\"Explain transformers\", \"user-1\", 2000, 500, \"gpt-4o\")\r\nprint(f\"User-1 spend: ${allocator.user_spend('user-1')}\")\r\nprint(f\"Top users: {allocator.top_users()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production RAG systems require robust architecture with service-oriented design, comprehensive monitoring, fault tolerance, and scale management. Key considerations include: async pipelines for.\r\nnon-blocking query processing, API authentication with JWT and rate limiting, structured logging and metrics collection for observability, circuit breakers and fallback chains for.\r\nresilience, incremental indexing with scheduled refreshes for data freshness, and multi-layer caching with auto-scaling for cost-effective scaling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log every query, track latency p95, set alerts on degradation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan for failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breakers, fallback chains, and graceful degradation are essential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache aggressively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-level cache (memory + Redis) can reduce costs by 40-60%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index incrementally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch + incremental indexing with consistency verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track spend per user/feature for chargeback and optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scale horizontally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scale based on CPU and QPS, keep stateless services"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " How do you decide between synchronous and asynchronous RAG pipelines in production?"]
      }), "\nThe choice depends on latency requirements and workload predictability. Synchronous pipelines work well for real-time chat applications where users expect sub-second responses — the request flows directly through retrieval,.\ngeneration, and response. Asynchronous pipelines suit batch processing jobs like document summarization or report generation where throughput matters more than latency. In practice,.\nproduction systems often use a hybrid: synchronous for interactive queries with a timeout fallback, and an async queue (e.g., RabbitMQ, Redis Streams) for.\nheavy or parallel workloads. The async path also simplifies retry logic and backpressure handling when the LLM or vector DB is under load.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What metrics do you monitor in a production RAG system, and why?"]
      }), "\nKey metrics fall into three categories: retrieval quality, generation quality, and operational health. For retrieval, track recall@k, mean reciprocal rank, and.\nlatency p50/p99 of vector searches. For generation, monitor faithfulness (whether the response stays grounded in retrieved context), relevance, and hallucination rate via LLM-as-judge evaluations. On the ops side,.\ntrack QPS, error rates, memory usage, and embedding cache hit ratios. A sudden drop in recall or a spike in generation latency often signals a data drift or.\ninfrastructure issue that needs immediate investigation.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " How do you handle real-time updates to your knowledge base without rebuilding indexes?"]
      }), "\nMost production systems use a two-tier strategy: incremental indexing for new documents and periodic full re-indexing for consistency. When a document is added or.\nupdated, the system computes its embedding and upserts it into the vector index (e.g., using the `upsert` endpoint in Pinecone or.\nthe `merge` operation in Qdrant). A metadata field like `last_updated` helps the retriever filter stale documents. For deletions, a tombstone list combined with a nightly compaction job removes orphaned vectors. This approach keeps the index fresh within seconds while avoiding costly full rebuilds.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " Explain the circuit breaker pattern in the context of RAG production systems."]
      }), "\nA circuit breaker prevents cascading failures when a downstream dependency — such as the embedding service, vector DB, or LLM provider — becomes unhealthy. The system tracks failures (e.g.,.\n5xx errors or timeouts) within a sliding window. Once the error threshold is crossed, the breaker trips to OPEN state, causing all subsequent calls to fail fast with a fallback response (e.g.,.\na static answer or a cache hit) instead of waiting for a timeout. After a cooldown period, the breaker transitions to HALF-OPEN,.\nallowing a probe request to test recovery. This pattern is essential for maintaining availability during provider outages or network partitions.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " How do you implement caching strategies to reduce latency and cost in RAG?"]
      }), "\nCaching can be applied at multiple layers: embedding cache, retrieved document cache, and LLM response cache. An embedding cache stores computed embeddings keyed by document hash,.\navoiding redundant API calls to the embedding model. A document cache (e.g., Redis) stores the top-k retrieved chunks keyed by query hash,.\nso identical or near-identical queries skip retrieval entirely. An LLM response cache stores full prompt-response pairs, typically with a TTL and.\nsemantic similarity matching (e.g., cosine similarity > 0.95). The most impactful strategy is usually embedding caching because it reduces both latency and.\nembedding API costs without affecting generation quality.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "6."
        }), " How do you implement canary deployments for a RAG system?"]
      }), "\nA canary deployment routes a small percentage of production traffic (e.g., 5%) to a new model version or retrieval pipeline while the rest uses the stable version. The canary must be evaluated on both quality metrics (faithfulness,.\nrelevance via LLM-as-judge) and operational metrics (latency p99, error rate, cost per query). If the canary performs within acceptable thresholds for.\na observation period (typically 1-24 hours based on traffic volume), traffic is gradually increased to 25%, 50%, then 100%. This approach catches regressions before they affect all users — for.\nexample, a new embedding model that accidentally reduces recall on technical queries would be caught during the 5% phase and rolled back without a full outage.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "7."
        }), " What strategies exist for handling LLM provider rate limits in production?"]
      }), "\nRate limit handling requires a multi-layered approach. First, implement client-side throttling with a token bucket algorithm that stays within the provider's published limits. Second,.\nadd a retry queue with exponential backoff and jitter — if a 429 response is received, the request is retried after `base_delay * 2^attempt + random_jitter` milliseconds. Third,.\nuse a circuit breaker to fail fast when the provider is consistently returning errors. Fourth, implement a fallback chain: if the primary provider (e.g.,.\nGPT-4) is rate-limited, downgrade to a secondary provider (e.g., GPT-3.5 or a self-hosted model) with a different quota pool. Finally, monitor.\nrate limit headroom and alert when usage exceeds 80% of the quota.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8."
        }), " How do you ensure data privacy and compliance in production RAG deployments?"]
      }), "\nData privacy in RAG systems requires controls at every pipeline stage. At ingestion, documents should be classified for sensitivity (PII, confidential,.\npublic) and stored with access control labels. The vector index must enforce tenant isolation — either through separate indexes per tenant or.\nthrough metadata-based filtering that restricts results to the authenticated user's scope. The LLM provider agreement must include a data processing addendum (DPA) that guarantees no training on customer data. For.\nhighly sensitive data, deploy a self-hosted LLM (e.g., Llama 3 via vLLM) so documents never leave the VPC. Audit logging should record every retrieval and.\ngeneration event for compliance review, and a data retention policy must define how long query logs and cached responses are kept.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9."
        }), " Describe how you would set up CI/CD for a RAG pipeline with continuous evaluation."]
      }), "\nA RAG CI/CD pipeline integrates both code changes and data changes. On every push, a build step runs unit tests for.\nthe retriever and generator components, then deploys a preview environment with a snapshot of the evaluation dataset. The pipeline runs a benchmark suite: recall@k against a golden query set,.\nfaithfulness scores from an LLM judge, and latency benchmarks. If all quality gates pass (e.g., recall > 0.85, faithfulness > 0.9,.\np99 latency < 500ms), the changes are promoted to staging. A shadow deployment in production runs the new pipeline in parallel with the old one,.\ncomparing outputs without serving them to users. After 24 hours of shadow evaluation, a final human review approves or rejects the rollout. This process catches both code bugs and.\ndata drift before they reach end users.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag09-q10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10."
        }), " What are the most common failure modes in production RAG systems and how do you mitigate them?"]
      }), "\nThe most common failures are hallucination from missing context, retrieval of irrelevant chunks, and LLM rejection due to safety filters. For.\nmissing context, implement a fallback response like \"I don't have enough information to answer that\" rather than letting the LLM guess. For.\nirrelevant retrieval, add a relevance threshold filter that discards chunks below a cosine similarity of 0.7, paired with a query rewriting step that reformulates ambiguous queries. For.\nsafety filter rejections, log the rejection reason and return a user-friendly message while tracking the trigger patterns to improve the prompt or.\nsafety configuration. Additional mitigations include monotonic retries for transient failures, load shedding under high traffic, and automated rollback triggers that activate when any quality metric drops below its baseline for.\ntwo consecutive evaluation windows.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s9-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What pattern prevents cascading failures when a downstream service is unhealthy?"]
      }), "\nA. Load balancer\nB. Circuit breaker\nC. Connection pool\nD. Thread pool\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s9-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is the purpose of rate limiting in a production RAG API?"]
      }), "\nA. To reduce model accuracy\nB. To protect against abuse and ensure fair usage\nC. To cache responses\nD. To batch requests\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s9-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Which metric is most important for monitoring user-facing RAG latency?"]
      }), "\nA. p50 latency\nB. p95 latency\nC. Mean latency\nD. Minimum latency\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s9-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the first level of caching in a production RAG system?"]
      }), "\nA. Disk cache\nB. L1 in-memory cache\nC. Redis cache\nD. CDN cache\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "rag-s9-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Why use incremental indexing instead of full re-indexing?"]
      }), "\nA. It produces higher quality embeddings\nB. It reduces computational cost and index freshness lag\nC. It eliminates the need for chunking\nD. It supports more data types\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Design a production RAG system architecture with 4 services (retrieval, generation, indexing, monitoring). Draw the data flow and describe each component's scaling strategy."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a FastAPI-based RAG endpoint with JWT authentication, rate limiting (100 req/min/user), and structured logging. Test with 3 concurrent users."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a circuit breaker for LLM API calls with failure threshold=5, recovery timeout=30s. Simulate intermittent failures and demonstrate circuit opening/closing."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a multi-level caching system (L1 memory, L2 Redis) for a RAG pipeline. Measure hit rates and latency improvement with and without cache on 1000 queries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a cost allocation tracker that logs every API call, attributes cost to users/features, and generates a daily report of top spenders and to"
        }), "\n"]
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Production RAG Systems in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Production RAG Systems."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding Production RAG Systems. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Production RAG Systems from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Production RAG Systems with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Production RAG Systems."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Production RAG Systems behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Production RAG Systems run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of Production RAG Systems that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Production RAG Systems explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Production RAG Systems\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Production RAG Systems to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Production RAG Systems (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Production RAG Systems and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Production RAG Systems-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Production RAG Systems interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Production RAG Systems in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Production RAG Systems builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Production RAG Systems before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Production RAG Systems is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Production RAG Systems in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Production RAG Systems chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Production RAG Systems is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 09 Production Rag Systems is ___. — Answer: O(n) embedding, O(log n) ANN search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 09 Production Rag Systems is ___. — Answer: empty retrieval, hallucination, chunk boundary issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Production RAG Systems issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Production RAG Systems in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Production RAG Systems that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Production RAG Systems is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Production RAG Systems in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Production RAG Systems and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Production RAG Systems on an empty input?"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Production RAG Systems to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Production RAG Systems from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Production RAG Systems when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Production RAG Systems twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Production RAG Systems snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Production RAG Systems listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Production RAG Systems to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Production RAG Systems by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Production RAG Systems to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lewis et al. (2020) 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks' — the original RAG paper"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RAGAS framework docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ragas.io",
          children: "https://docs.ragas.io"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangChain RAG tutorial: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://python.langchain.com/docs/tutorials/rag",
          children: "https://python.langchain.com/docs/tutorials/rag"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pinecone learning center: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.pinecone.io/learn",
          children: "https://www.pinecone.io/learn"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Advanced RAG Techniques' by Andrei Lopatenko (Towards Data Science) RAG Systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 12 — builds the foundation for 09 Production Rag Systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 09 Production Rag Systems with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 09 Production Rag Systems fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 09 Production Rag Systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 09 Production Rag Systems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 09 Production Rag Systems?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 09 Production Rag Systems?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 09 Production Rag Systems asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 09 Production Rag Systems?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production RAG Systems is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Production RAG Systems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production RAG Systems emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Production RAG Systems today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Production RAG Systems — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Production RAG Systems changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sanitize retrieved content before injecting into prompts — malicious documents can contain prompt injection attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement access control on the vector index — users should only retrieve documents they are authorized to see"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log full retrieved chunks if they contain PII or confidential data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate-limit retrieval endpoints to prevent data exfiltration via repeated queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate chunk metadata (source, date) to prevent poisoned knowledge base attacks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG is essentially a learned retrieval + conditional generation pipeline — the retriever acts as a soft attention over the entire knowledge base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedding quality directly determines retrieval quality: better embeddings (e.g., text-embedding-3-large vs ada-002) improve recall@5 by 10-20%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The LLM generator is conditioned on retrieved context — this is analogous to cross-attention in encoder-decoder transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunk size is a hyperparameter: smaller chunks improve precision, larger chunks improve recall — tune like any ML hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reranking (cross-encoder) is the equivalent of a second-stage classifier that re-scores retrieved candidates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "09 Production Rag Systems is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Production RAG Systems skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-09productionragsystems-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Production RAG Systems in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG (Retrieval-Augmented Generation) grounds LLM responses in external documents retrieved at query time, reducing hallucination by 40-80% vs zero-shot generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-09productionragsystems-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieving too many chunks (k>10) dilutes relevance and exceeds token limits. Always start with k=3-5 and tune based on recall@k on a validation set."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-09productionragsystems-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Production RAG Systems approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Retrieval: O(log n) with ANN index (HNSW/IVF). Embedding: O(n*d) where d=embedding dim. Generation: O(context_len^2) attention."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-09productionragsystems-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Production RAG Systems NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "RAG is NOT the right choice when: (1) the knowledge base is tiny (<100 docs) and fits in context, (2) you need the model to learn new reasoning patterns (use fine-tuning), (3) sub-100ms latency is required."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "12ragvectordatabases-09productionragsystems-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Production RAG Systems applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production RAG: LangChain/LlamaIndex for orchestration, Pinecone/Weaviate/Qdrant for vector storage, sentence-transformers for embeddings, RAGAS for evaluation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Production RAG Systems (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Production RAG Systems (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Production RAG Systems-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Production RAG Systems in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), " — RAG orchestration frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pinecone"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Weaviate"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Qdrant"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Chroma"
        }), " — vector databases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sentence-transformers"
        }), " — open-source embedding models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAGAS"
        }), " — RAG evaluation framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FAISS"
        }), " — Facebook's fast similarity search library RAG Systems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 09 Production Rag Systems pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Production RAG Systems in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Production RAG Systems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Production RAG Systems problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Production RAG Systems is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_09_production_rag_systems(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 09 Production Rag Systems.\r\n\r\n    Key concepts: chunking, embedding, retrieval, reranking, generation\r\n    Complexity: O(n) embedding, O(log n) ANN search\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 09 Production Rag Systems here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Production RAG Systems without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notion AI"
        }), " uses RAG to answer questions over a user's entire workspace without retraining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Copilot Chat"
        }), " retrieves relevant code snippets from the repo before generating answers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe Docs"
        }), " uses RAG to ground answers in official API documentation, reducing hallucinated API calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Morgan Stanley"
        }), " deployed RAG over 100K+ financial research documents for advisor Q&A"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": describe RAG as 'grounding LLM outputs in evidence' — interviewers want to hear faithfulness and context precision metrics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/10-hybrid-search-and-reranking",
        children: "Hybrid Search and Reranking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production RAG Systems, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Production RAG Systems depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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