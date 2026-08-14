"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[12728],{

/***/ 86861
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_12_ai_observability_debugging_md_4f7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-12-ai-observability-debugging-md-4f7.json
const site_docs_courses_ai_agent_engineer_12_ai_observability_debugging_md_4f7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/12-ai-observability-debugging","title":"Chapter 12 — AI Observability & Debugging","description":"Duration: 1.5 weeks, ~18 hours","source":"@site/docs/courses/ai-agent-engineer/12-ai-observability-debugging.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/12-ai-observability-debugging","permalink":"/ai-engineering-journey/ai-agent-engineer/12-ai-observability-debugging","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"12-ai-observability-debugging","slug":"/ai-agent-engineer/12-ai-observability-debugging","title":"Chapter 12 — AI Observability & Debugging","sidebar_label":"Chapter 12 — AI Observability & Debugging","sidebar_position":13},"sidebar":"course-ai-agent-engineer","previous":{"title":"Chapter 11 — AI Testing, Evaluation & Quality","permalink":"/ai-engineering-journey/ai-agent-engineer/11-ai-testing-evaluation"},"next":{"title":"Chapter 13 — Advanced Vector Search & RAG","permalink":"/ai-engineering-journey/ai-agent-engineer/13-advanced-vector-search"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/12-ai-observability-debugging.md


const frontMatter = {
	id: '12-ai-observability-debugging',
	slug: '/ai-agent-engineer/12-ai-observability-debugging',
	title: 'Chapter 12 — AI Observability & Debugging',
	sidebar_label: 'Chapter 12 — AI Observability & Debugging',
	sidebar_position: 13
};
const contentTitle = 'Chapter 12 — AI Observability & Debugging';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "12.1 Agent Tracing Fundamentals",
  "id": "121-agent-tracing-fundamentals",
  "level": 2
}, {
  "value": "Custom Trace Implementation",
  "id": "custom-trace-implementation",
  "level": 3
}, {
  "value": "12.2 LangSmith Integration",
  "id": "122-langsmith-integration",
  "level": 2
}, {
  "value": "12.3 OpenTelemetry for AI Workloads",
  "id": "123-opentelemetry-for-ai-workloads",
  "level": 2
}, {
  "value": "12.4 Token Tracking &amp; Cost Attribution",
  "id": "124-token-tracking--cost-attribution",
  "level": 2
}, {
  "value": "12.5 Latency Profiling",
  "id": "125-latency-profiling",
  "level": 2
}, {
  "value": "12.6 Custom Quality Metrics",
  "id": "126-custom-quality-metrics",
  "level": 2
}, {
  "value": "Production Quality Monitor",
  "id": "production-quality-monitor",
  "level": 3
}, {
  "value": "12.7 Logging Strategies for AI",
  "id": "127-logging-strategies-for-ai",
  "level": 2
}, {
  "value": "12.8 Alerting &amp; Anomaly Detection",
  "id": "128-alerting--anomaly-detection",
  "level": 2
}, {
  "value": "12.9 Debugging Agent Failures",
  "id": "129-debugging-agent-failures",
  "level": 2
}, {
  "value": "Systematic Debugging Framework",
  "id": "systematic-debugging-framework",
  "level": 3
}, {
  "value": "12.10 Drift Detection",
  "id": "1210-drift-detection",
  "level": 2
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
        id: "chapter-12--ai-observability--debugging",
        children: "Chapter 12 — AI Observability & Debugging"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 1.5 weeks, ~18 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Build comprehensive observability for your AI systems — tracing every agent step, tracking costs, monitoring quality metrics, and debugging production failures."]
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
        href: "../../assets/images/lessons/ai-agent-engineer/12-ai-observability-debugging/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/12-ai-observability-debugging/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/12-ai-observability-debugging/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/12-ai-observability-debugging/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/12-ai-observability-debugging/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/12-ai-observability-debugging/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Agent tracing fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace a single agent request end-to-end with spans and metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangSmith integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect your LangGraph agent to LangSmith with custom metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenTelemetry for AI workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instrument a FastAPI RAG endpoint with OpenTelemetry spans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token tracking & cost attribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a per-request cost tracker that attributes cost to user, model, and feature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency profiling & optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile a RAG request end-to-end and identify the top-3 bottlenecks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom quality metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement and track faithfulness, relevance, and hallucination rate in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging strategies for AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design structured logging for agent decisions, tool calls, and errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alerting & anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up alerts for cost spikes, latency regressions, and quality drops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging agent failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic approach to debugging failing agent runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect when model behavior or data distribution changes over time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-agent-tracing-fundamentals",
      children: "12.1 Agent Tracing Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-trace-implementation",
      children: "Custom Trace Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport uuid\r\nimport json\r\nfrom datetime import datetime\r\nfrom contextlib import contextmanager\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Any\r\n\r\n@dataclass\r\nclass Span:\r\n    name: str\r\n    trace_id: str\r\n    parent_id: str | None\r\n    span_id: str\r\n    start_time: float\r\n    end_time: float | None = None\r\n    attributes: dict = field(default_factory=dict)\r\n    events: list[dict] = field(default_factory=list)\r\n    status: str = \"ok\"\r\n    error: str | None = None\r\n\r\nclass Tracer:\r\n    \"\"\"Lightweight distributed tracer for agent systems.\"\"\"\r\n\r\n    def __init__(self, service_name: str = \"ai-agent\"):\r\n        self.service_name = service_name\r\n        self.spans: list[Span] = []\r\n        self._current_span: Span | None = None\r\n\r\n    def start_trace(self, name: str, attributes: dict | None = None) -> str:\r\n        \"\"\"Start a new trace and return trace_id.\"\"\"\r\n        trace_id = str(uuid.uuid4())[:16]\r\n        span = Span(\r\n            name=name,\r\n            trace_id=trace_id,\r\n            parent_id=None,\r\n            span_id=str(uuid.uuid4())[:16],\r\n            start_time=time.time(),\r\n            attributes=attributes or {},\r\n        )\r\n        self._current_span = span\r\n        self.spans.append(span)\r\n        return trace_id\r\n\r\n    @contextmanager\r\n    def span(self, name: str, attributes: dict | None = None):\r\n        \"\"\"Create a child span under the current trace.\"\"\"\r\n        parent_id = self._current_span.span_id if self._current_span else None\r\n        span = Span(\r\n            name=name,\r\n            trace_id=self._current_span.trace_id if self._current_span else str(uuid.uuid4())[:16],\r\n            parent_id=parent_id,\r\n            span_id=str(uuid.uuid4())[:16],\r\n            start_time=time.time(),\r\n            attributes=attributes or {},\r\n        )\r\n        previous = self._current_span\r\n        self._current_span = span\r\n        self.spans.append(span)\r\n        try:\r\n            yield span\r\n        except Exception as e:\r\n            span.status = \"error\"\r\n            span.error = str(e)\r\n            raise\r\n        finally:\r\n            span.end_time = time.time()\r\n            span.attributes[\"duration_ms\"] = round((span.end_time - span.start_time) * 1000, 2)\r\n            self._current_span = previous\r\n\r\n    def add_event(self, name: str, attributes: dict | None = None):\r\n        if self._current_span:\r\n            self._current_span.events.append({\r\n                \"name\": name,\r\n                \"timestamp\": datetime.now().isoformat(),\r\n                \"attributes\": attributes or {}\r\n            })\r\n\r\n    def export(self) -> dict:\r\n        \"\"\"Export all spans as a trace report.\"\"\"\r\n        return {\r\n            \"service\": self.service_name,\r\n            \"spans\": [\r\n                {\r\n                    \"name\": s.name,\r\n                    \"trace_id\": s.trace_id,\r\n                    \"parent_id\": s.parent_id,\r\n                    \"span_id\": s.span_id,\r\n                    \"duration_ms\": round((s.end_time - s.start_time) * 1000, 2) if s.end_time else None,\r\n                    \"status\": s.status,\r\n                    \"attributes\": s.attributes,\r\n                    \"events\": s.events,\r\n                    \"error\": s.error,\r\n                }\r\n                for s in self.spans\r\n            ]\r\n        }\r\n\r\n# Usage\r\ntracer = Tracer(\"rag-pipeline\")\r\n\r\ntrace_id = tracer.start_trace(\"rag_request\", {\"user_id\": \"user_123\", \"query_length\": 45})\r\n\r\nwith tracer.span(\"embedding\"):\r\n    tracer.add_event(\"api_call_start\", {\"model\": \"text-embedding-3-small\"})\r\n    time.sleep(0.1)  # Simulate API call\r\n    tracer.add_event(\"api_call_complete\", {\"tokens\": 112})\r\n\r\nwith tracer.span(\"vector_search\"):\r\n    tracer.add_event(\"query_vector_db\", {\"collection\": \"docs\", \"top_k\": 5})\r\n    time.sleep(0.05)\r\n    tracer.add_event(\"results\", {\"result_count\": 5})\r\n\r\nwith tracer.span(\"generation\"):\r\n    tracer.add_event(\"llm_start\", {\"model\": \"gpt-4o-mini\", \"prompt_tokens\": 4120})\r\n    time.sleep(0.8)\r\n    tracer.add_event(\"llm_complete\", {\"completion_tokens\": 234})\r\n\r\ntrace_report = tracer.export()\r\nprint(f\"Total duration: {sum(s['duration_ms'] for s in trace_report['spans'] if s['parent_id']):.0f}ms\")\r\nfor span in trace_report[\"spans\"]:\r\n    print(f\"  {span['name']}: {span['duration_ms']}ms [{span['status']}]\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-langsmith-integration",
      children: "12.2 LangSmith Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Requires: pip install langsmith langgraph\r\nimport os\r\nfrom langsmith import Client\r\nfrom langsmith.run_helpers import traceable\r\nfrom langgraph.graph import StateGraph\r\n\r\nos.environ[\"LANGSMITH_TRACING\"] = \"true\"\r\nos.environ[\"LANGSMITH_ENDPOINT\"] = \"https://api.smith.langchain.com\"\r\nos.environ[\"LANGSMITH_API_KEY\"] = \"YOUR_LANGSMITH_API_KEY\"\r\nos.environ[\"LANGSMITH_PROJECT\"] = \"ai-agent-engineer-course\"\r\n\r\nlangsmith_client = Client()\r\n\r\n# Trace individual functions\r\n@traceable(name=\"embed_query\", run_type=\"embedding\")\r\ndef traceable_embed(text: str) -> list[float]:\r\n    response = client.embeddings.create(input=text, model=\"text-embedding-3-small\")\r\n    return response.data[0].embedding\r\n\r\n@traceable(name=\"vector_search\", run_type=\"retriever\")\r\ndef traceable_search(embedding: list[float], top_k: int = 5) -> list[str]:\r\n    results = chroma_collection.query(query_embeddings=[embedding], n_results=top_k)\r\n    return results[\"documents\"][0]\r\n\r\n@traceable(name=\"generate_answer\", run_type=\"llm\")\r\ndef traceable_generate(query: str, context: str) -> str:\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Answer using the context.\"},\r\n            {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n        ]\r\n    )\r\n    return response.choices[0].message.content\r\n\r\n# Full traced RAG pipeline\r\n@traceable(name=\"rag_pipeline\", run_type=\"chain\")\r\ndef traced_rag(query: str) -> str:\r\n    embedding = traceable_embed(query)\r\n    docs = traceable_search(embedding)\r\n    context = \"\\n\\n\".join(docs)\r\n    answer = traceable_generate(query, context)\r\n    return answer\r\n\r\n# Add custom metrics to LangSmith\r\n@traceable(name=\"rag_with_metrics\", run_type=\"chain\")\r\ndef traced_rag_with_metrics(query: str) -> dict:\r\n    t0 = time.time()\r\n\r\n    embedding = traceable_embed(query)\r\n    docs = traceable_search(embedding)\r\n    context = \"\\n\\n\".join(docs)\r\n\r\n    t1 = time.time()\r\n\r\n    answer = traceable_generate(query, context)\r\n\r\n    t2 = time.time()\r\n\r\n    return {\r\n        \"answer\": answer,\r\n        \"metrics\": {\r\n            \"retrieval_latency_ms\": round((t1 - t0) * 1000, 2),\r\n            \"generation_latency_ms\": round((t2 - t1) * 1000, 2),\r\n            \"total_latency_ms\": round((t2 - t0) * 1000, 2),\r\n            \"chunks_retrieved\": len(docs),\r\n        }\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-opentelemetry-for-ai-workloads",
      children: "12.3 OpenTelemetry for AI Workloads"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Requires: pip install opentelemetry-api opentelemetry-sdk opentelemetry-instrumentation-fastapi\r\nfrom opentelemetry import trace\r\nfrom opentelemetry.sdk.trace import TracerProvider\r\nfrom opentelemetry.sdk.trace.export import BatchSpanProcessor\r\nfrom opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter\r\nfrom opentelemetry.instrumentation.fastapi import FastAPIInstrumentor\r\nfrom opentelemetry.sdk.resources import Resource\r\nfrom fastapi import FastAPI, Request\r\nimport time\r\n\r\n# Setup OpenTelemetry\r\nresource = Resource.create({\r\n    \"service.name\": \"rag-api\",\r\n    \"service.version\": \"1.0.0\",\r\n    \"deployment.environment\": \"production\"\r\n})\r\n\r\nprovider = TracerProvider(resource=resource)\r\nprocessor = BatchSpanProcessor(OTLPSpanExporter(endpoint=\"http://localhost:4317\"))\r\nprovider.add_span_processor(processor)\r\ntrace.set_tracer_provider(provider)\r\n\r\ntracer = trace.get_tracer(__name__)\r\n\r\n# FastAPI app with OpenTelemetry instrumentation\r\napp = FastAPI()\r\nFastAPIInstrumentor.instrument_app(app)\r\n\r\n# Custom span for RAG pipeline\r\n@app.post(\"/rag/query\")\r\nasync def rag_query(request: Request):\r\n    body = await request.json()\r\n    query = body[\"query\"]\r\n\r\n    with tracer.start_as_current_span(\"rag_pipeline\") as span:\r\n        span.set_attribute(\"query.length\", len(query))\r\n        span.set_attribute(\"query.truncated\", query[:100])\r\n\r\n        # Embedding step\r\n        with tracer.start_as_current_span(\"embedding\") as embed_span:\r\n            t0 = time.time()\r\n            q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n            embed_span.set_attribute(\"latency_ms\", round((time.time() - t0) * 1000, 2))\r\n            embed_span.set_attribute(\"model\", \"text-embedding-3-small\")\r\n\r\n        # Search step\r\n        with tracer.start_as_current_span(\"vector_search\") as search_span:\r\n            t0 = time.time()\r\n            results = chroma_collection.query(query_embeddings=[q_vec], n_results=5)\r\n            search_span.set_attribute(\"latency_ms\", round((time.time() - t0) * 1000, 2))\r\n            search_span.set_attribute(\"results_count\", len(results[\"documents\"][0]))\r\n\r\n        # Generation step\r\n        with tracer.start_as_current_span(\"generation\") as gen_span:\r\n            context = \"\\n\\n\".join(results[\"documents\"][0])\r\n            t0 = time.time()\r\n            response = client.chat.completions.create(\r\n                model=\"gpt-4o-mini\",\r\n                messages=[\r\n                    {\"role\": \"system\", \"content\": \"Answer using context.\"},\r\n                    {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n                ]\r\n            )\r\n            gen_span.set_attribute(\"latency_ms\", round((time.time() - t0) * 1000, 2))\r\n            gen_span.set_attribute(\"prompt_tokens\", response.usage.prompt_tokens)\r\n            gen_span.set_attribute(\"completion_tokens\", response.usage.completion_tokens)\r\n\r\n    return {\"answer\": response.choices[0].message.content}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-token-tracking--cost-attribution",
      children: "12.4 Token Tracking & Cost Attribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime, timedelta\r\nfrom collections import defaultdict\r\n\r\n# Pricing model\r\nMODEL_PRICING = {\r\n    \"text-embedding-3-small\": {\"input\": 0.02 / 1_000_000},\r\n    \"text-embedding-3-large\": {\"input\": 0.13 / 1_000_000},\r\n    \"gpt-4o-mini\": {\"input\": 0.15 / 1_000_000, \"output\": 0.60 / 1_000_000},\r\n    \"gpt-4o\": {\"input\": 2.50 / 1_000_000, \"output\": 10.00 / 1_000_000},\r\n    \"claude-3-haiku\": {\"input\": 0.25 / 1_000_000, \"output\": 1.25 / 1_000_000},\r\n    \"claude-3-sonnet\": {\"input\": 3.00 / 1_000_000, \"output\": 15.00 / 1_000_000},\r\n}\r\n\r\nclass CostTracker:\r\n    \"\"\"Track token usage and cost across models, users, and features.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.entries: list[dict] = []\r\n        self.daily_budget: dict[str, float] = {}\r\n\r\n    def record(\r\n        self,\r\n        model: str,\r\n        prompt_tokens: int,\r\n        completion_tokens: int,\r\n        user_id: str = \"anonymous\",\r\n        feature: str = \"general\",\r\n        metadata: dict | None = None,\r\n    ):\r\n        pricing = MODEL_PRICING.get(model, {\"input\": 0.001, \"output\": 0.002})\r\n        input_cost = prompt_tokens * pricing[\"input\"]\r\n        output_cost = completion_tokens * pricing[\"output\"]\r\n        total_cost = input_cost + output_cost\r\n\r\n        entry = {\r\n            \"timestamp\": datetime.now().isoformat(),\r\n            \"model\": model,\r\n            \"prompt_tokens\": prompt_tokens,\r\n            \"completion_tokens\": completion_tokens,\r\n            \"total_tokens\": prompt_tokens + completion_tokens,\r\n            \"input_cost\": round(input_cost, 6),\r\n            \"output_cost\": round(output_cost, 6),\r\n            \"total_cost\": round(total_cost, 6),\r\n            \"user_id\": user_id,\r\n            \"feature\": feature,\r\n            \"metadata\": metadata or {},\r\n        }\r\n        self.entries.append(entry)\r\n        return entry\r\n\r\n    def get_daily_cost(self, date: str | None = None) -> float:\r\n        if date is None:\r\n            date = datetime.now().strftime(\"%Y-%m-%d\")\r\n        return sum(e[\"total_cost\"] for e in self.entries if e[\"timestamp\"].startswith(date))\r\n\r\n    def get_user_cost(self, user_id: str, days: int = 7) -> float:\r\n        cutoff = (datetime.now() - timedelta(days=days)).isoformat()\r\n        return sum(\r\n            e[\"total_cost\"] for e in self.entries\r\n            if e[\"user_id\"] == user_id and e[\"timestamp\"] > cutoff\r\n        )\r\n\r\n    def get_feature_breakdown(self, days: int = 7) -> dict:\r\n        cutoff = (datetime.now() - timedelta(days=days)).isoformat()\r\n        features = defaultdict(float)\r\n        for e in self.entries:\r\n            if e[\"timestamp\"] > cutoff:\r\n                features[e[\"feature\"]] += e[\"total_cost\"]\r\n        return dict(features)\r\n\r\n    def get_model_breakdown(self, days: int = 7) -> dict:\r\n        cutoff = (datetime.now() - timedelta(days=days)).isoformat()\r\n        models = defaultdict(lambda: {\"cost\": 0.0, \"calls\": 0, \"tokens\": 0})\r\n        for e in self.entries:\r\n            if e[\"timestamp\"] > cutoff:\r\n                models[e[\"model\"]][\"cost\"] += e[\"total_cost\"]\r\n                models[e[\"model\"]][\"calls\"] += 1\r\n                models[e[\"model\"]][\"tokens\"] += e[\"total_tokens\"]\r\n        return {k: {**v, \"cost\": round(v[\"cost\"], 4)} for k, v in models.items()}\r\n\r\n    def set_daily_budget(self, feature: str, budget_usd: float):\r\n        self.daily_budget[feature] = budget_usd\r\n\r\n    def check_budget(self) -> list[str]:\r\n        \"\"\"Check if any feature has exceeded its daily budget.\"\"\"\r\n        alerts = []\r\n        for feature, budget in self.daily_budget.items():\r\n            cost = sum(\r\n                e[\"total_cost\"] for e in self.entries\r\n                if e[\"feature\"] == feature and e[\"timestamp\"].startswith(datetime.now().strftime(\"%Y-%m-%d\"))\r\n            )\r\n            if cost >= budget:\r\n                alerts.append(f\"Feature '{feature}' exceeded daily budget: ${cost:.4f} / ${budget:.4f}\")\r\n        return alerts\r\n\r\n# Usage\r\ntracker = CostTracker()\r\n\r\n# Record a RAG request\r\ntracker.record(\r\n    model=\"text-embedding-3-small\",\r\n    prompt_tokens=112,\r\n    completion_tokens=0,\r\n    user_id=\"user_123\",\r\n    feature=\"rag_embedding\",\r\n)\r\n\r\ntracker.record(\r\n    model=\"gpt-4o-mini\",\r\n    prompt_tokens=4120,\r\n    completion_tokens=234,\r\n    user_id=\"user_123\",\r\n    feature=\"rag_generation\",\r\n)\r\n\r\n# Check costs\r\nprint(f\"Today's cost: ${tracker.get_daily_cost():.4f}\")\r\nprint(f\"User cost (7d): ${tracker.get_user_cost('user_123'):.4f}\")\r\nprint(f\"Feature breakdown: {tracker.get_feature_breakdown()}\")\r\nprint(f\"Model breakdown: {json.dumps(tracker.get_model_breakdown(), indent=2)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-latency-profiling",
      children: "12.5 Latency Profiling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cProfile\r\nimport pstats\r\nimport io\r\nfrom functools import wraps\r\nfrom time import perf_counter\r\n\r\nclass LatencyProfiler:\r\n    \"\"\"Profile and optimize latency in AI pipelines.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.profiles: list[dict] = []\r\n\r\n    def profile(self, name: str = \"unnamed\"):\r\n        \"\"\"Decorator that profiles a function's execution.\"\"\"\r\n        def decorator(func):\r\n            @wraps(func)\r\n            def wrapper(*args, **kwargs):\r\n                t0 = perf_counter()\r\n                result = func(*args, **kwargs)\r\n                elapsed = (perf_counter() - t0) * 1000\r\n\r\n                self.profiles.append({\r\n                    \"name\": name or func.__name__,\r\n                    \"function\": func.__name__,\r\n                    \"duration_ms\": round(elapsed, 2),\r\n                    \"args\": str(args)[:50],\r\n                    \"timestamp\": datetime.now().isoformat()\r\n                })\r\n                return result\r\n            return wrapper\r\n        return decorator\r\n\r\n    def report(self, sort_by: str = \"duration_ms\", top_n: int = 10) -> dict:\r\n        \"\"\"Generate profiling report.\"\"\"\r\n        sorted_profiles = sorted(self.profiles, key=lambda x: x[sort_by], reverse=True)[:top_n]\r\n        total = sum(p[\"duration_ms\"] for p in sorted_profiles)\r\n        avg = total / len(sorted_profiles) if sorted_profiles else 0\r\n\r\n        return {\r\n            \"total_calls\": len(self.profiles),\r\n            \"total_time_ms\": round(total, 2),\r\n            \"average_ms\": round(avg, 2),\r\n            \"slowest\": [p for p in sorted_profiles[:5]],\r\n            \"recommendations\": self._generate_recommendations(sorted_profiles)\r\n        }\r\n\r\n    def _generate_recommendations(self, profiles: list[dict]) -> list[str]:\r\n        recs = []\r\n        for p in profiles:\r\n            if p[\"duration_ms\"] > 1000:\r\n                recs.append(f\"Hotspot: {p['name']} ({p['duration_ms']}ms) — consider caching or async\")\r\n            elif p[\"duration_ms\"] > 500:\r\n                recs.append(f\"Warning: {p['name']} ({p['duration_ms']}ms) — review for optimization\")\r\n        return recs\r\n\r\n# Decorator for profiling FastAPI endpoints\r\nprofiler = LatencyProfiler()\r\n\r\n@profiler.profile(\"embedding\")\r\ndef profile_embed(text: str) -> list[float]:\r\n    return client.embeddings.create(input=text, model=\"text-embedding-3-small\").data[0].embedding\r\n\r\n@profiler.profile(\"vector_search\")\r\ndef profile_search(embedding: list[float]) -> list[str]:\r\n    results = chroma_collection.query(query_embeddings=[embedding], n_results=5)\r\n    return results[\"documents\"][0]\r\n\r\n# Run a profiled request\r\nresult = profile_embed(\"What are lease terms in Dubai?\")\r\ndocs = profile_search(result)\r\n\r\n# Generate report\r\nreport = profiler.report()\r\nprint(f\"Total: {report['total_time_ms']}ms over {report['total_calls']} calls\")\r\nfor rec in report[\"recommendations\"]:\r\n    print(f\"  ? {rec}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-custom-quality-metrics",
      children: "12.6 Custom Quality Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "production-quality-monitor",
      children: "Production Quality Monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom datetime import datetime, timedelta\r\n\r\nclass QualityMonitor:\r\n    \"\"\"Track production quality metrics for RAG and agent systems.\"\"\"\r\n\r\n    def __init__(self, window_hours: int = 24):\r\n        self.window = timedelta(hours=window_hours)\r\n        self.scores: list[dict] = []\r\n\r\n    def record(\r\n        self,\r\n        metric_name: str,\r\n        value: float,\r\n        weight: float = 1.0,\r\n        metadata: dict | None = None,\r\n    ):\r\n        self.scores.append({\r\n            \"metric\": metric_name,\r\n            \"value\": value,\r\n            \"weight\": weight,\r\n            \"timestamp\": datetime.now(),\r\n            \"metadata\": metadata or {},\r\n        })\r\n\r\n    def get_current(self, metric_name: str) -> dict:\r\n        \"\"\"Get current value and statistics for a metric.\"\"\"\r\n        cutoff = datetime.now() - self.window\r\n        entries = [s for s in self.scores if s[\"metric\"] == metric_name and s[\"timestamp\"] > cutoff]\r\n        values = [s[\"value\"] for s in entries]\r\n\r\n        if not values:\r\n            return {\"metric\": metric_name, \"status\": \"no_data\"}\r\n\r\n        return {\r\n            \"metric\": metric_name,\r\n            \"current\": round(values[-1], 3),\r\n            \"mean\": round(np.mean(values), 3),\r\n            \"median\": round(np.median(values), 3),\r\n            \"p95\": round(np.percentile(values, 95), 3),\r\n            \"trend\": \"improving\" if len(values) > 5 and values[-1] > np.mean(values[-5:]) else \"degrading\",\r\n            \"samples\": len(values),\r\n            \"status\": \"healthy\" if np.mean(values) >= 0.8 else \"degraded\" if np.mean(values) >= 0.5 else \"critical\"\r\n        }\r\n\r\n    def overall_health(self) -> dict:\r\n        \"\"\"Aggregate all metrics into an overall health score.\"\"\"\r\n        cutoff = datetime.now() - self.window\r\n        metrics = set(s[\"metric\"] for s in self.scores if s[\"timestamp\"] > cutoff)\r\n\r\n        scores = {}\r\n        for m in metrics:\r\n            stats = self.get_current(m)\r\n            if stats[\"status\"] != \"no_data\":\r\n                scores[m] = stats[\"status\"]\r\n\r\n        healthy = sum(1 for s in scores.values() if s == \"healthy\")\r\n        degraded = sum(1 for s in scores.values() if s == \"degraded\")\r\n        critical = sum(1 for s in scores.values() if s == \"critical\")\r\n\r\n        return {\r\n            \"overall\": \"healthy\" if critical == 0 and degraded < len(scores) * 0.3 else \"degraded\" if critical < 3 else \"critical\",\r\n            \"metrics_count\": len(scores),\r\n            \"healthy\": healthy,\r\n            \"degraded\": degraded,\r\n            \"critical\": critical,\r\n            \"last_updated\": datetime.now().isoformat(),\r\n        }\r\n\r\n# Define standard metrics\r\nSTD_METRICS = {\r\n    \"faithfulness\": {\"description\": \"Fraction of claims supported by context\", \"threshold\": 0.85},\r\n    \"context_relevance\": {\"description\": \"Average relevance of retrieved chunks\", \"threshold\": 0.7},\r\n    \"answer_completeness\": {\"description\": \"Query coverage score\", \"threshold\": 0.75},\r\n    \"hallucination_rate\": {\"description\": \"Fraction of hallucinated claims\", \"threshold\": 0.1, \"lower_is_better\": True},\r\n    \"response_latency_p50\": {\"description\": \"Median response time (ms)\", \"threshold\": 2000, \"lower_is_better\": True},\r\n    \"response_latency_p95\": {\"description\": \"95th percentile response time (ms)\", \"threshold\": 5000, \"lower_is_better\": True},\r\n    \"cache_hit_rate\": {\"description\": \"Fraction of queries served from cache\", \"threshold\": 0.2},\r\n    \"user_feedback_score\": {\"description\": \"Thumbs up ratio\", \"threshold\": 0.85},\r\n}\r\n\r\n# Usage\r\nmonitor = QualityMonitor(window_hours=24)\r\nmonitor.record(\"faithfulness\", 0.92, metadata={\"model\": \"gpt-4o-mini\", \"dataset\": \"eval_v2\"})\r\nmonitor.record(\"hallucination_rate\", 0.05, weight=2.0, metadata={\"model\": \"gpt-4o-mini\"})\r\nmonitor.record(\"response_latency_p50\", 1450, metadata={\"model\": \"gpt-4o-mini\"})\r\nmonitor.record(\"cache_hit_rate\", 0.35, metadata={\"cache_type\": \"semantic\"})\r\nmonitor.record(\"user_feedback_score\", 0.88, metadata={\"n_responses\": 150})\r\n\r\nprint(json.dumps(monitor.overall_health(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-logging-strategies-for-ai",
      children: "12.7 Logging Strategies for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import structlog\r\nimport json\r\nfrom datetime import datetime\r\n\r\n# Structured logging setup\r\nstructlog.configure(\r\n    processors=[\r\n        structlog.stdlib.add_log_level,\r\n        structlog.processors.TimeStamper(fmt=\"iso\"),\r\n        structlog.processors.JSONRenderer(),\r\n    ],\r\n    context_class=dict,\r\n    cache_logger_on_first_use=True,\r\n)\r\n\r\nlogger = structlog.get_logger()\r\n\r\n# Agent-specific logging\r\nclass AgentLogger:\r\n    \"\"\"Structured logger for agent decisions and tool calls.\"\"\"\r\n\r\n    def __init__(self, agent_name: str, session_id: str):\r\n        self.logger = structlog.get_logger(agent_name=agent_name, session_id=session_id)\r\n        self.tool_calls: list[dict] = []\r\n\r\n    def log_decision(self, thought: str, state: dict):\r\n        self.logger.info(\"agent_decision\",\r\n            thought=thought[:200],\r\n            state_keys=list(state.keys()),\r\n            state_preview={k: str(v)[:50] for k, v in state.items()},\r\n        )\r\n\r\n    def log_tool_call(self, tool_name: str, arguments: dict, result: str | None, error: str | None = None):\r\n        entry = {\r\n            \"tool\": tool_name,\r\n            \"arguments\": arguments,\r\n            \"timestamp\": datetime.now().isoformat(),\r\n            \"success\": error is None,\r\n            \"result_preview\": str(result)[:100] if result else None,\r\n            \"error\": error,\r\n        }\r\n        self.tool_calls.append(entry)\r\n\r\n        if error:\r\n            self.logger.error(\"tool_call_failed\", **entry)\r\n        else:\r\n            self.logger.info(\"tool_call_succeeded\",\r\n                tool=tool_name,\r\n                args_count=len(arguments),\r\n                duration_ms=0,\r\n            )\r\n\r\n    def log_cost(self, model: str, tokens: int, cost: float):\r\n        self.logger.info(\"cost_update\",\r\n            model=model,\r\n            tokens=tokens,\r\n            cost=cost,\r\n        )\r\n\r\n    def log_error(self, error_type: str, message: str, context: dict | None = None):\r\n        self.logger.error(\"error\",\r\n            error_type=error_type,\r\n            message=message,\r\n            context=context or {},\r\n        )\r\n\r\n    def export_session(self) -> dict:\r\n        return {\r\n            \"tool_calls\": self.tool_calls,\r\n            \"total_calls\": len(self.tool_calls),\r\n            \"success_rate\": round(\r\n                sum(1 for t in self.tool_calls if t[\"success\"]) / len(self.tool_calls) * 100, 1\r\n            ) if self.tool_calls else 0,\r\n        }\r\n\r\n# Usage\r\nagent_log = AgentLogger(\"research_agent\", session_id=\"sess_abc123\")\r\nagent_log.log_decision(\"I need to search for recent AI papers\", {\"intent\": \"search\", \"tools_available\": [\"web_search\", \"arxiv_search\"]})\r\nagent_log.log_tool_call(\"arxiv_search\", {\"query\": \"langgraph 2026\"}, result=\"Found 12 papers...\")\r\nagent_log.log_cost(\"text-embedding-3-small\", 112, 0.00000224)\r\n\r\nprint(json.dumps(agent_log.export_session(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-alerting--anomaly-detection",
      children: "12.8 Alerting & Anomaly Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom collections import deque\r\n\r\nclass AnomalyDetector:\r\n    \"\"\"Simple statistical anomaly detection for AI metrics.\"\"\"\r\n\r\n    def __init__(self, window_size: int = 50, threshold_std: float = 3.0):\r\n        self.window = deque(maxlen=window_size)\r\n        self.threshold = threshold_std\r\n\r\n    def add_value(self, value: float) -> dict | None:\r\n        \"\"\"Add a value and return alert if it's anomalous.\"\"\"\r\n        self.window.append(value)\r\n\r\n        if len(self.window) < 10:\r\n            return None  # Not enough data\r\n\r\n        mean = np.mean(self.window)\r\n        std = np.std(self.window)\r\n\r\n        if std < 0.001:\r\n            return None  # Too constant\r\n\r\n        z_score = (value - mean) / std\r\n\r\n        if abs(z_score) > self.threshold:\r\n            return {\r\n                \"value\": value,\r\n                \"mean\": round(mean, 2),\r\n                \"z_score\": round(z_score, 2),\r\n                \"direction\": \"spike_up\" if z_score > 0 else \"spike_down\",\r\n                \"severity\": \"critical\" if abs(z_score) > 4 else \"warning\",\r\n            }\r\n        return None\r\n\r\nclass AlertManager:\r\n    \"\"\"Manage alerts across multiple metrics and notification channels.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.detectors: dict[str, AnomalyDetector] = {}\r\n        self.alerts: list[dict] = []\r\n\r\n    def add_detector(self, metric_name: str, window_size: int = 50, threshold: float = 3.0):\r\n        self.detectors[metric_name] = AnomalyDetector(window_size, threshold)\r\n\r\n    def check_metric(self, metric_name: str, value: float) -> dict | None:\r\n        if metric_name not in self.detectors:\r\n            return None\r\n        alert = self.detectors[metric_name].add_value(value)\r\n        if alert:\r\n            alert[\"metric\"] = metric_name\r\n            alert[\"timestamp\"] = datetime.now().isoformat()\r\n            self.alerts.append(alert)\r\n        return alert\r\n\r\n    def get_recent_alerts(self, n: int = 10) -> list[dict]:\r\n        return self.alerts[-n:]\r\n\r\n    def generate_report(self) -> dict:\r\n        critical = [a for a in self.alerts if a.get(\"severity\") == \"critical\"]\r\n        warnings = [a for a in self.alerts if a.get(\"severity\") == \"warning\"]\r\n\r\n        return {\r\n            \"total_alerts\": len(self.alerts),\r\n            \"critical\": len(critical),\r\n            \"warnings\": len(warnings),\r\n            \"recent_critical\": critical[-3:],\r\n            \"most_common_metric\": max(\r\n                set(a[\"metric\"] for a in self.alerts),\r\n                key=lambda m: sum(1 for a in self.alerts if a[\"metric\"] == m),\r\n                default=None,\r\n            ),\r\n        }\r\n\r\n# Usage\r\nalerts = AlertManager()\r\nalerts.add_detector(\"latency_ms\", window_size=30, threshold=2.5)\r\nalerts.add_detector(\"cost_per_request\", window_size=50, threshold=3.0)\r\nalerts.add_detector(\"hallucination_rate\", window_size=20, threshold=2.0)\r\n\r\n# Simulate monitoring\r\nfor i in range(100):\r\n    latency = 1200 + np.random.normal(0, 100)\r\n    alert = alerts.check_metric(\"latency_ms\", latency)\r\n    if alert:\r\n        print(f\"ALERT: latency {latency:.0f}ms — z={alert['z_score']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "129-debugging-agent-failures",
      children: "12.9 Debugging Agent Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systematic-debugging-framework",
      children: "Systematic Debugging Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AgentDebugger:\r\n    \"\"\"Systematic debugging of failing agent runs.\"\"\"\r\n\r\n    COMMON_FAILURES = {\r\n        \"tool_selection\": [\r\n            \"Wrong tool called for the intent\",\r\n            \"No tool matched the intent\",\r\n            \"Tool arguments malformed (wrong types, missing required fields)\",\r\n            \"Tool call timed out\",\r\n        ],\r\n        \"state_management\": [\r\n            \"State key missing or None\",\r\n            \"State value type mismatch\",\r\n            \"State not persisted across checkpoints\",\r\n            \"State pollution from previous runs\",\r\n        ],\r\n        \"llm_errors\": [\r\n            \"Token limit exceeded (context too long)\",\r\n            \"Rate limited (too many requests)\",\r\n            \"Content filter triggered (false positive)\",\r\n            \"Model returned empty or nonsensical response\",\r\n        ],\r\n        \"routing\": [\r\n            \"Conditional edge evaluated to unexpected path\",\r\n            \"Missing edge case handler\",\r\n            \"Infinite loop (no termination condition)\",\r\n            \"Graph compiled with incorrect node order\",\r\n        ],\r\n        \"memory\": [\r\n            \"Agent forgot previous context\",\r\n            \"Memory buffer exceeded limit\",\r\n            \"Conversation history truncated incorrectly\",\r\n            \"Entity extraction failed\",\r\n        ],\r\n    }\r\n\r\n    def __init__(self, agent_name: str):\r\n        self.agent_name = agent_name\r\n\r\n    def diagnose(self, trace: dict, error: str | None = None) -> dict:\r\n        \"\"\"Analyze a failed trace and return diagnosis.\"\"\"\r\n        findings = []\r\n\r\n        # Check for common patterns\r\n        spans = trace.get(\"spans\", [])\r\n        error_spans = [s for s in spans if s.get(\"status\") == \"error\"]\r\n\r\n        for es in error_spans:\r\n            findings.append({\r\n                \"location\": es[\"name\"],\r\n                \"error\": es.get(\"error\", \"Unknown error\"),\r\n                \"severity\": \"high\",\r\n            })\r\n\r\n        # Check for long-running spans\r\n        for s in spans:\r\n            duration = s.get(\"duration_ms\", 0)\r\n            if duration > 5000:\r\n                findings.append({\r\n                    \"location\": s[\"name\"],\r\n                    \"error\": f\"Timeout risk: {duration}ms duration\",\r\n                    \"severity\": \"medium\",\r\n                })\r\n\r\n        # Check state transitions\r\n        state_changes = [s for s in spans if \"state\" in s.get(\"name\", \"\").lower()]\r\n        if not state_changes:\r\n            findings.append({\r\n                \"location\": \"graph\",\r\n                \"error\": \"No state change events found — graph may not be executing\",\r\n                \"severity\": \"high\",\r\n            })\r\n\r\n        # Generate diagnosis\r\n        diagnosis = {\r\n            \"agent\": self.agent_name,\r\n            \"total_findings\": len(findings),\r\n            \"high_severity\": len([f for f in findings if f[\"severity\"] == \"high\"]),\r\n            \"findings\": findings,\r\n            \"recommended_action\": self._recommend_action(findings),\r\n        }\r\n\r\n        return diagnosis\r\n\r\n    def _recommend_action(self, findings: list[dict]) -> str:\r\n        if any(\"state\" in str(f) for f in findings):\r\n            return \"Add state logging at each node. Verify state schema matches node expectations.\"\r\n        if any(\"tool\" in str(f).lower() for f in findings):\r\n            return \"Test each tool in isolation. Verify tool schemas match function definitions.\"\r\n        if any(\"timeout\" in str(f) or \"5000ms\" in str(f) for f in findings):\r\n            return \"Add timeout handling to tool calls. Consider streaming responses.\"\r\n        return \"Review the full trace. Isolate the failing step with a unit test.\"\r\n\r\n# Usage\r\ndebugger = AgentDebugger(\"research_agent\")\r\ndiagnosis = debugger.diagnose({\r\n    \"spans\": [\r\n        {\"name\": \"classify_intent\", \"status\": \"ok\", \"duration_ms\": 200},\r\n        {\"name\": \"execute_tool\", \"status\": \"error\", \"error\": \"Tool 'search_web' timed out after 10s\", \"duration_ms\": 10123},\r\n        {\"name\": \"generate_response\", \"status\": \"error\", \"error\": \"State key 'tool_result' is None\", \"duration_ms\": 50},\r\n    ]\r\n})\r\nprint(f\"Found {diagnosis['total_findings']} issues ({diagnosis['high_severity']} high severity)\")\r\nprint(f\"Action: {diagnosis['recommended_action']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1210-drift-detection",
      children: "12.10 Drift Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom collections import defaultdict\r\n\r\nclass DriftDetector:\r\n    \"\"\"Detect data drift and model drift in production.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.baselines: dict[str, dict] = {}\r\n        self.current_stats: dict[str, list] = defaultdict(list)\r\n\r\n    def set_baseline(self, metric_name: str, data: list[float]):\r\n        \"\"\"Set initial baseline distribution.\"\"\"\r\n        self.baselines[metric_name] = {\r\n            \"mean\": np.mean(data),\r\n            \"std\": np.std(data),\r\n            \"p5\": np.percentile(data, 5),\r\n            \"p25\": np.percentile(data, 25),\r\n            \"p50\": np.percentile(data, 50),\r\n            \"p75\": np.percentile(data, 75),\r\n            \"p95\": np.percentile(data, 95),\r\n            \"n\": len(data),\r\n            \"timestamp\": datetime.now().isoformat(),\r\n        }\r\n\r\n    def add_sample(self, metric_name: str, value: float):\r\n        self.current_stats[metric_name].append(value)\r\n\r\n    def check_drift(self, metric_name: str, min_samples: int = 100) -> dict | None:\r\n        \"\"\"Check if current distribution has drifted from baseline.\"\"\"\r\n        if metric_name not in self.baselines:\r\n            return None\r\n\r\n        current = self.current_stats[metric_name]\r\n        if len(current) < min_samples:\r\n            return None\r\n\r\n        baseline = self.baselines[metric_name]\r\n        current_mean = np.mean(current)\r\n        current_std = np.std(current)\r\n\r\n        # Simple z-test for mean shift\r\n        se = baseline[\"std\"] / np.sqrt(baseline[\"n\"])\r\n        z_score = (current_mean - baseline[\"mean\"]) / se if se > 0 else 0\r\n\r\n        # Kolmogorov-Smirnov-like distribution comparison\r\n        distribution_overlap = 1 - abs(\r\n            np.percentile(current, 50) - baseline[\"p50\"]\r\n        ) / (baseline[\"p95\"] - baseline[\"p5\"] + 1e-10)\r\n\r\n        drift = {\r\n            \"metric\": metric_name,\r\n            \"baseline_mean\": round(baseline[\"mean\"], 3),\r\n            \"current_mean\": round(current_mean, 3),\r\n            \"mean_shift_pct\": round((current_mean - baseline[\"mean\"]) / baseline[\"mean\"] * 100, 1),\r\n            \"z_score\": round(z_score, 2),\r\n            \"distribution_overlap\": round(distribution_overlap, 3),\r\n            \"severity\": \"none\",\r\n        }\r\n\r\n        # Determine severity\r\n        abs_z = abs(z_score)\r\n        if abs_z > 3.0 or distribution_overlap < 0.5:\r\n            drift[\"severity\"] = \"critical\"\r\n        elif abs_z > 2.0 or distribution_overlap < 0.7:\r\n            drift[\"severity\"] = \"warning\"\r\n        elif abs_z > 1.5 or distribution_overlap < 0.85:\r\n            drift[\"severity\"] = \"monitor\"\r\n\r\n        return drift\r\n\r\n# Usage\r\ndrift = DriftDetector()\r\n\r\n# Set initial baseline\r\ninitial_latency = [1200 + np.random.normal(0, 100) for _ in range(200)]\r\ndrift.set_baseline(\"response_latency\", initial_latency)\r\n\r\n# Simulate production data with drift\r\nfor _ in range(150):\r\n    drifted_latency = 1800 + np.random.normal(0, 100)  # Mean shifted +50%\r\n    drift.add_sample(\"response_latency\", drifted_latency)\r\n\r\nresult = drift.check_drift(\"response_latency\", min_samples=100)\r\nif result:\r\n    print(f\"Drift detected for {result['metric']}: severity={result['severity']}\")\r\n    print(f\"  Baseline mean: {result['baseline_mean']}ms ? Current: {result['current_mean']}ms\")\r\n    print(f\"  Mean shift: {result['mean_shift_pct']}%\")\r\n    print(f\"  Distribution overlap: {result['distribution_overlap']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface QueryPlan { steps: Array&lt;{type:\"retrieve\"|\"decompose\"|\"synthesize\";query:string;deps:string[]}&gt; }\r\nclass MultiHopRAG {\r\n  constructor(private llm: (p:string)=>Promise&lt;string&gt;, private retriever: (q:string)=>Promise&lt;string[]&gt;) {}\r\n  async plan(query: string): Promise&lt;QueryPlan&gt; {\r\n    const prompt = `Break this question into sub-questions: ${query}`; const response = await this.llm(prompt)\r\n    const subQuestions = response.split(\"\\n\").filter(Boolean)\r\n    return {steps:[{type:\"decompose\",query, deps:[]},...subQuestions.map(q=>({type:\"retrieve\" as const, query:q, deps:[]}))]}\r\n  }\r\n  async execute(plan: QueryPlan): Promise&lt;string&gt; {\r\n    let context = \"\"\r\n    for(const step of plan.steps) {\r\n      if(step.type===\"retrieve\") { const docs = await this.retriever(step.query); context+=`${step.query}:\\n${docs.join(\"\\n\")}\\n` }\r\n    }\r\n    return this.llm(`Context:\\n${context}\\nOriginal question: ${plan.steps[0].query}\\nAnswer:`)\r\n  }\r\n}\r\nclass FusionRetriever {\r\n  async fuse(query: string, retrievers: Array&lt;(q:string)=&gt;Promise&lt;string[]&gt;>): Promise&lt;string[]&gt; {\r\n    const results = await Promise.all(retrievers.map(r=>r(query)))\r\n    const unique = new Map&lt;string,number&gt;()\r\n    results.flat().forEach(doc => unique.set(doc,(unique.get(doc)||0)+1))\r\n    return Array.from(unique.entries()).sort((a,b)=>b[1]-a[1]).map(([doc])=>doc)\r\n  }\r\n}\r\nexport { MultiHopRAG, QueryPlan, FusionRetriever }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trace instrumentation:"
          }), " Add tracing to your LangGraph agent using the custom Tracer class. Run 5 agent requests and export the trace report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LangSmith integration:"
          }), " Connect your RAG pipeline to LangSmith. Add custom metrics for retrieval latency and token usage. View the trace in the LangSmith UI."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost dashboard:"
          }), " Build a daily cost dashboard that breaks down cost by model, user, and feature. Set daily budgets and test that alerts fire."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Latency optimization:"
          }), " Profile your RAG pipeline end-to-end. Identify the top-3 bottlenecks and implement optimizations (caching, async, model tiering). Measure the improvement."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Drift monitoring:"
          }), " Set up a drift detector for your RAG system's response latency. Collect 200 baseline samples, then simulate a shifted distribution and verify detection."]
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