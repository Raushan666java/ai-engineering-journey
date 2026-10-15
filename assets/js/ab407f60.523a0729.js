"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8699],{

/***/ 91317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_11_llms_prompt_engineering_08_cost_and_latency_optimization_md_ab4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-11-llms-prompt-engineering-08-cost-and-latency-optimization-md-ab4.json
const site_docs_courses_ai_engineering_placement_11_llms_prompt_engineering_08_cost_and_latency_optimization_md_ab4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/llms-prompt-engineering/08-cost-and-latency-optimization","title":"Cost & Latency Optimization","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization.md","sourceDirName":"courses/ai-engineering-placement/11-llms-prompt-engineering","slug":"/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":155,"frontMatter":{"id":"08-cost-and-latency-optimization","slug":"/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization","title":"Cost & Latency Optimization","sidebar_label":"Cost & Latency Optimization","sidebar_position":155},"sidebar":"placementSidebar","previous":{"title":"LLM Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/07-llm-evaluation"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization.md


const frontMatter = {
	id: '08-cost-and-latency-optimization',
	slug: '/ai-engineering-placement/11-llms-prompt-engineering/08-cost-and-latency-optimization',
	title: 'Cost & Latency Optimization',
	sidebar_label: 'Cost & Latency Optimization',
	sidebar_position: 155
};
const contentTitle = 'Cost & Latency Optimization';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "8.1 Cost Drivers",
  "id": "81-cost-drivers",
  "level": 2
}, {
  "value": "8.1.1 Token Pricing",
  "id": "811-token-pricing",
  "level": 3
}, {
  "value": "8.1.2 Cost Comparison Across Models",
  "id": "812-cost-comparison-across-models",
  "level": 3
}, {
  "value": "8.1.3 Hidden Cost Drivers",
  "id": "813-hidden-cost-drivers",
  "level": 3
}, {
  "value": "8.2 Token Optimization",
  "id": "82-token-optimization",
  "level": 2
}, {
  "value": "8.2.1 Prompt Compression",
  "id": "821-prompt-compression",
  "level": 3
}, {
  "value": "8.2.2 Output Length Control",
  "id": "822-output-length-control",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "8.2.3 Prompt Template Optimization",
  "id": "823-prompt-template-optimization",
  "level": 3
}, {
  "value": "8.2.4 Dynamic Prompt Truncation",
  "id": "824-dynamic-prompt-truncation",
  "level": 3
}, {
  "value": "8.3 Caching Strategies",
  "id": "83-caching-strategies",
  "level": 2
}, {
  "value": "8.3.1 Exact Response Cache",
  "id": "831-exact-response-cache",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "8.3.2 Semantic Cache",
  "id": "832-semantic-cache",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "8.3.3 Layered Caching",
  "id": "833-layered-caching",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "8.3.4 Cache Invalidation",
  "id": "834-cache-invalidation",
  "level": 3
}, {
  "value": "8.4 Batching",
  "id": "84-batching",
  "level": 2
}, {
  "value": "8.4.1 Request Batching",
  "id": "841-request-batching",
  "level": 3
}, {
  "value": "8.4.2 Prompt Packing",
  "id": "842-prompt-packing",
  "level": 3
}, {
  "value": "8.4.3 Inference Batching (Server-Side)",
  "id": "843-inference-batching-server-side",
  "level": 3
}, {
  "value": "8.5 Latency Management",
  "id": "85-latency-management",
  "level": 2
}, {
  "value": "8.5.1 Model Selection Strategy",
  "id": "851-model-selection-strategy",
  "level": 3
}, {
  "value": "8.5.2 Streaming",
  "id": "852-streaming",
  "level": 3
}, {
  "value": "8.5.3 Speculative Decoding",
  "id": "853-speculative-decoding",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-4",
  "level": 2
}, {
  "value": "8.5.4 Response Trimming",
  "id": "854-response-trimming",
  "level": 3
}, {
  "value": "8.6 Budget Monitoring",
  "id": "86-budget-monitoring",
  "level": 2
}, {
  "value": "8.6.1 Token Usage Tracking",
  "id": "861-token-usage-tracking",
  "level": 3
}, {
  "value": "8.6.2 Alerting System",
  "id": "862-alerting-system",
  "level": 3
}, {
  "value": "8.6.3 Cost Attribution",
  "id": "863-cost-attribution",
  "level": 3
}, {
  "value": "8.7 Practical Optimization Checklist",
  "id": "87-practical-optimization-checklist",
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
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
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
        id: "cost--latency-optimization",
        children: "Cost & Latency Optimization"
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
            children: "Understand the cost drivers in LLM API usage (token count, model tier, caching)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement token optimization strategies including prompt compression and output shaping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design caching systems to reduce redundant API calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply batching and parallelization for throughput improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage latency through model selection, streaming, and response trimming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build cost tracking and budget monitoring dashboards"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language models are transforming every industry. Understanding how to prompt, evaluate, and optimize LLMs is a critical skill for AI engineers. This module covers the full LLM lifecycle from API calls to cost optimization."
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost Drivers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model tier, token pricing, region, rate limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt compression, output length control, truncation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response caching, semantic caching, TTL policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request batching, prompt packing, inference batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming, model selection, parallel requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost tracking, alerting, usage analytics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[API Request] --> B{Cache Hit?}\r\n    B -->|Yes| C[Return Cached]\r\n    B -->|No| D[Token Optimization]\r\n    D --> E{Model Selection}\r\n    E -->|Cheap| F[Fast Model]\r\n    E -->|Accurate| G[Powerful Model]\r\n    F --> H[Batching]\r\n    G --> H\r\n    H --> I[API Call]\r\n    I --> J[Track Usage]\r\n    J --> K[Update Budget]\r\n    K --> L[Return Response]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-cost-drivers",
      children: "8.1 Cost Drivers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM API costs are primarily driven by token consumption, model selection, and usage patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-token-pricing",
      children: "8.1.1 Token Pricing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most providers charge per token for both input (prompt) and output (completion). Input tokens are typically cheaper than output tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import Dict\r\nimport json\r\n\r\n@dataclass\r\nclass ModelPricing:\r\n    model_id: str\r\n    input_price_per_1k: float\r\n    output_price_per_1k: float\r\n\r\nPRICING: Dict[str, ModelPricing] = {\r\n    \"gpt-4o\": ModelPricing(\"gpt-4o\", 2.50, 10.00),\r\n    \"gpt-4o-mini\": ModelPricing(\"gpt-4o-mini\", 0.15, 0.60),\r\n    \"claude-3-5-sonnet\": ModelPricing(\"claude-3-5-sonnet\", 3.00, 15.00),\r\n    \"claude-3-haiku\": ModelPricing(\"claude-3-haiku\", 0.25, 1.25),\r\n}\r\n\r\ndef calculate_cost(\r\n    model_id: str,\r\n    input_tokens: int,\r\n    output_tokens: int,\r\n) -> Dict[str, float]:\r\n    pricing = PRICING.get(model_id)\r\n    if not pricing:\r\n        return {\"error\": f\"Unknown model: {model_id}\"}\r\n\r\n    input_cost = (input_tokens / 1000) * pricing.input_price_per_1k\r\n    output_cost = (output_tokens / 1000) * pricing.output_price_per_1k\r\n    total = input_cost + output_cost\r\n\r\n    return {\r\n        \"model\": model_id,\r\n        \"input_tokens\": input_tokens,\r\n        \"output_tokens\": output_tokens,\r\n        \"input_cost\": round(input_cost, 6),\r\n        \"output_cost\": round(output_cost, 6),\r\n        \"total_cost\": round(total, 6),\r\n    }\r\n\r\nprint(json.dumps(calculate_cost(\"gpt-4o\", 2000, 500), indent=2))\r\nprint(json.dumps(calculate_cost(\"gpt-4o-mini\", 2000, 500), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-cost-comparison-across-models",
      children: "8.1.2 Cost Comparison Across Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same request can cost 10-40x more depending on model tier."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compare_model_costs(input_tokens: int, output_tokens: int) -> None:\r\n    print(f\"{'Model':<25} {'Input Cost':<12} {'Output Cost':<12} {'Total':<12}\")\r\n    print(\"-\" * 61)\r\n    for model_id in sorted(PRICING.keys()):\r\n        cost = calculate_cost(model_id, input_tokens, output_tokens)\r\n        print(f\"{model_id:<25} ${cost['input_cost']:<9.6f} ${cost['output_cost']:<9.6f} ${cost['total_cost']:<9.6f}\")\r\n\r\ncompare_model_costs(10000, 2000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-hidden-cost-drivers",
      children: "8.1.3 Hidden Cost Drivers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond per-token pricing, consider:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context window padding"
        }), ": Long system prompts repeated on every call"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retry storms"
        }), ": Failed requests consume tokens without useful output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool/function call overhead"
        }), ": Structured output adds tokens for schema descriptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limit overage"
        }), ": Some providers charge premium above allocation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CostAnalyzer:\r\n    def __init__(self, model_id: str, pricing: ModelPricing):\r\n        self.model_id = model_id\r\n        self.pricing = pricing\r\n        self.total_input_tokens = 0\r\n        self.total_output_tokens = 0\r\n        self.retry_count = 0\r\n        self.cache_misses = 0\r\n\r\n    def record_call(self, input_tokens: int, output_tokens: int, cached: bool = False):\r\n        if not cached:\r\n            self.total_input_tokens += input_tokens\r\n            self.total_output_tokens += output_tokens\r\n            self.cache_misses += 1\r\n\r\n    def record_retry(self, tokens_wasted: int):\r\n        self.retry_count += 1\r\n        self.total_input_tokens += tokens_wasted\r\n\r\n    def summary(self) -> Dict:\r\n        input_cost = (self.total_input_tokens / 1000) * self.pricing.input_price_per_1k\r\n        output_cost = (self.total_output_tokens / 1000) * self.pricing.output_price_per_1k\r\n        retry_waste = self.retry_count * (self.pricing.input_price_per_1k / 1000)\r\n\r\n        return {\r\n            \"model\": self.model_id,\r\n            \"total_input_tokens\": self.total_input_tokens,\r\n            \"total_output_tokens\": self.total_output_tokens,\r\n            \"retry_count\": self.retry_count,\r\n            \"cache_misses\": self.cache_misses,\r\n            \"input_cost\": round(input_cost, 4),\r\n            \"output_cost\": round(output_cost, 4),\r\n            \"retry_waste\": round(retry_waste, 4),\r\n            \"total_cost\": round(input_cost + output_cost + retry_waste, 4),\r\n        }\r\n\r\nanalyzer = CostAnalyzer(\"gpt-4o\", PRICING[\"gpt-4o\"])\r\nanalyzer.record_call(1000, 200)\r\nanalyzer.record_call(1500, 300)\r\nanalyzer.record_retry(500)\r\nprint(json.dumps(analyzer.summary(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-token-optimization",
      children: "8.2 Token Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reducing token consumption directly lowers costs and improves latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-prompt-compression",
      children: "8.2.1 Prompt Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove redundant instructions, compress system prompts, and use concise language."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compress_system_prompt(original: str) -> str:\r\n    \"\"\"Remove whitespace, combine instructions, shorten labels.\"\"\"\r\n    lines = [l.strip() for l in original.split(\"\\n\")]\r\n    lines = [l for l in lines if l and not l.startswith(\"#\")]\r\n    return \" \".join(lines)\r\n\r\noriginal_prompt = \"\"\"\r\nYou are an expert assistant. You must follow these rules:\r\n1. Be concise.\r\n2. Be accurate.\r\n3. Use JSON format for structured responses.\r\n4. If unsure, say \"I don't know\".\r\n\"\"\"\r\ncompressed = compress_system_prompt(original_prompt)\r\nprint(f\"Original length: {len(original_prompt)} chars\")\r\nprint(f\"Compressed length: {len(compressed)} chars\")\r\nprint(f\"Compressed: {compressed}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-output-length-control",
      children: "8.2.2 Output Length Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Control output length through explicit constraints and stop sequences."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_length_constrained_request(\r\n    prompt: str,\r\n    max_tokens: int,\r\n    stop_sequences: list = None,\r\n) -> dict:\r\n    \"\"\"Create a request that limits output token consumption.\"\"\"\r\n    system_msg = f\"\"\"Respond in {max_tokens} tokens or fewer.\r\n{chr(10)}\".join(stop_sequences or []) + f\"{chr(10)}Stop when complete — do not repeat.\"\"\"\r\n    return {\r\n        \"messages\": [\r\n            {\"role\": \"system\", \"content\": system_msg},\r\n            {\"role\": \"user\", \"content\": prompt},\r\n        ],\r\n        \"max_tokens\": max_tokens,\r\n        \"stop\": stop_sequences or None,\r\n    }\r\n\r\n## Token budget calculator\r\ndef estimate_token_budget(text: str) -> int:\r\n    \"\"\"Rough estimation: ~4 chars per token for English.\"\"\"\r\n    return len(text) // 4\r\n\r\ndef optimize_output_strategy(\r\n    base_prompt: str,\r\n    desired_response_lines: int,\r\n) -> Dict:\r\n    budget = estimate_token_budget(base_prompt)\r\n    response_budget = desired_response_lines * 15  # ~15 tokens per line\r\n\r\n    return {\r\n        \"input_estimate\": budget,\r\n        \"output_budget\": response_budget,\r\n        \"max_tokens\": response_budget + 50,\r\n        \"recommendation\": f\"Set max_tokens={response_budget + 50} to constrain cost\",\r\n    }\r\n\r\nprint(optimize_output_strategy(\"Explain quantum computing.\", 5))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-prompt-template-optimization",
      children: "8.2.3 Prompt Template Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimize system prompt size by keeping only essential instructions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PromptTemplateOptimizer:\r\n    def __init__(self):\r\n        self.shared_instructions = set()\r\n        self.templates = {}\r\n\r\n    def register_template(self, name: str, template: str):\r\n        self.templates[name] = template\r\n\r\n    def extract_common_prefix(self) -> str:\r\n        \"\"\"Identify shared instructions across templates.\"\"\"\r\n        if not self.templates:\r\n            return \"\"\r\n\r\n        instruction_sets = []\r\n        for template in self.templates.values():\r\n            lines = [l.strip() for l in template.split(\"\\n\") if l.strip()]\r\n            instruction_sets.append(set(lines))\r\n\r\n        common = instruction_sets[0]\r\n        for s in instruction_sets[1:]:\r\n            common &= s\r\n\r\n        return \"\\n\".join(sorted(common)) if common else \"\"\r\n\r\n    def estimate_savings(self, calls_per_day: int) -> Dict:\r\n        common = self.extract_common_prefix()\r\n        common_tokens = estimate_token_budget(common)\r\n\r\n        original_total = sum(\r\n            estimate_token_budget(t) for t in self.templates.values()\r\n        )\r\n        optimized_total = sum(\r\n            estimate_token_budget(t) - common_tokens\r\n            for t in self.templates.values()\r\n        )\r\n\r\n        daily_savings = (original_total - optimized_total) * calls_per_day / 1000 * 0.15\r\n\r\n        return {\r\n            \"common_prefix_tokens\": common_tokens,\r\n            \"original_daily_tokens\": original_total * calls_per_day,\r\n            \"optimized_daily_tokens\": optimized_total * calls_per_day,\r\n            \"estimated_daily_savings_usd\": round(daily_savings, 4),\r\n        }\r\n\r\noptimizer = PromptTemplateOptimizer()\r\noptimizer.register_template(\"qa\", \"You are a Q&A assistant. Be accurate. Be concise.\")\r\noptimizer.register_template(\"summary\", \"You are a summarizer. Be accurate. Be concise.\")\r\nprint(optimizer.estimate_savings(10000))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-dynamic-prompt-truncation",
      children: "8.2.4 Dynamic Prompt Truncation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For context-based tasks, fit the most relevant content within token limits."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def truncate_to_token_budget(\r\n    text: str,\r\n    max_tokens: int,\r\n    strategy: str = \"head\",\r\n) -> str:\r\n    \"\"\"Truncate text to fit within token budget.\"\"\"\r\n    char_budget = max_tokens * 4\r\n\r\n    if strategy == \"head\":\r\n        return text[:char_budget]\r\n    elif strategy == \"tail\":\r\n        return text[-char_budget:]\r\n    elif strategy == \"middle\":\r\n        half = char_budget // 2\r\n        if len(text) <= char_budget:\r\n            return text\r\n        return text[:half] + \"\\n...[truncated]...\\n\" + text[-half:]\r\n    else:\r\n        raise ValueError(f\"Unknown strategy: {strategy}\")\r\n\r\ndef smart_context_fit(\r\n    documents: list,\r\n    query: str,\r\n    max_context_tokens: int,\r\n) -> str:\r\n    \"\"\"Select and truncate documents to fit context window.\"\"\"\r\n    char_budget = (max_context_tokens - estimate_token_budget(query)) * 4\r\n    result = []\r\n    remaining = char_budget\r\n\r\n    for doc in documents:\r\n        doc_chars = min(len(doc), remaining // len(documents))\r\n        if doc_chars > 50:\r\n            result.append(doc[:doc_chars])\r\n            remaining -= doc_chars\r\n\r\n    return \"\\n\\n\".join(result)\r\n\r\ndocs = [\"A\" * 5000, \"B\" * 5000, \"C\" * 5000]\r\nquery = \"What is the capital of France?\"\r\nfitted = smart_context_fit(docs, query, 2000)\r\nprint(f\"Fitted context length: {len(fitted)} chars\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-caching-strategies",
      children: "8.3 Caching Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching eliminates redundant API calls by storing and reusing previous responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-exact-response-cache",
      children: "8.3.1 Exact Response Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nimport json\r\nfrom datetime import datetime, timedelta\r\nfrom typing import Optional, Dict, Any\r\n\r\nclass ExactMatchCache:\r\n    def __init__(self, ttl_seconds: int = 3600):\r\n        self.cache: Dict[str, Dict] = {}\r\n        self.ttl = timedelta(seconds=ttl_seconds)\r\n\r\n    def _make_key(self, messages: list, model: str, temperature: float) -> str:\r\n        content = json.dumps({\"messages\": messages, \"model\": model, \"temperature\": temperature}, sort_keys=True)\r\n        return hashlib.sha256(content.encode()).hexdigest()\r\n\r\n    def get(self, messages: list, model: str, temperature: float = 0) -> Optional[str]:\r\n        key = self._make_key(messages, model, temperature)\r\n        entry = self.cache.get(key)\r\n        if entry is None:\r\n            return None\r\n\r\n        if datetime.now() - entry[\"timestamp\"] > self.ttl:\r\n            del self.cache[key]\r\n            return None\r\n\r\n        entry[\"hits\"] += 1\r\n        return entry[\"response\"]\r\n\r\n    def set(\r\n        self,\r\n        messages: list,\r\n        response: str,\r\n        model: str,\r\n        temperature: float = 0,\r\n    ):\r\n        key = self._make_key(messages, model, temperature)\r\n        self.cache[key] = {\r\n            \"response\": response,\r\n            \"model\": model,\r\n            \"timestamp\": datetime.now(),\r\n            \"hits\": 0,\r\n        }\r\n\r\n    def stats(self) -> Dict:\r\n        return {\r\n            \"size\": len(self.cache),\r\n            \"total_hits\": sum(e[\"hits\"] for e in self.cache.values()),\r\n        }\r\n\r\ncache = ExactMatchCache(ttl_seconds=3600)\r\nmsgs = [{\"role\": \"user\", \"content\": \"What is 2+2?\"}]\r\n\r\n## First call — cache miss\r\nfirst = cache.get(msgs, \"gpt-4o-mini\")\r\nprint(f\"First get (miss): {first}\")\r\n\r\n## Set cache\r\ncache.set(msgs, \"4\", \"gpt-4o-mini\")\r\n\r\n## Second call — cache hit\r\nsecond = cache.get(msgs, \"gpt-4o-mini\")\r\nprint(f\"Second get (hit): {second}\")\r\nprint(f\"Stats: {cache.stats()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-semantic-cache",
      children: "8.3.2 Semantic Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semantic caching matches queries based on meaning rather than exact text, using embeddings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom typing import List, Optional, Tuple\r\n\r\nclass SemanticCache:\r\n    def __init__(self, similarity_threshold: float = 0.95):\r\n        self.entries: List[Tuple[np.ndarray, str]] = []\r\n        self.similarity_threshold = similarity_threshold\r\n\r\n    def _cosine_similarity(self, a: np.ndarray, b: np.ndarray) -> float:\r\n        dot = float(np.dot(a, b))\r\n        norm = float(np.linalg.norm(a) * np.linalg.norm(b))\r\n        return dot / norm if norm > 0 else 0.0\r\n\r\n    def find_similar(self, query_embedding: np.ndarray) -> Optional[str]:\r\n        best_sim = 0.0\r\n        best_response = None\r\n\r\n        for emb, response in self.entries:\r\n            sim = self._cosine_similarity(query_embedding, emb)\r\n            if sim > best_sim:\r\n                best_sim = sim\r\n                best_response = response\r\n\r\n        if best_sim >= self.similarity_threshold:\r\n            return best_response\r\n        return None\r\n\r\n    def store(self, query_embedding: np.ndarray, response: str):\r\n        self.entries.append((query_embedding, response))\r\n\r\n    def stats(self) -> dict:\r\n        return {\"size\": len(self.entries), \"threshold\": self.similarity_threshold}\r\n\r\n## Simulated embeddings\r\nsem_cache = SemanticCache(similarity_threshold=0.9)\r\nemb1 = np.array([1.0, 0.0, 0.0])\r\nemb2 = np.array([0.99, 0.01, 0.01])  # Very similar\r\nemb3 = np.array([0.5, 0.5, 0.5])  # Different\r\n\r\nsem_cache.store(emb1, \"Paris is the capital of France.\")\r\nfound = sem_cache.find_similar(emb2)\r\nprint(f\"Similar query found: {found}\")\r\nnot_found = sem_cache.find_similar(emb3)\r\nprint(f\"Dissimilar query found: {not_found}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-layered-caching",
      children: "8.3.3 Layered Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine exact and semantic caching for optimal coverage."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LayeredCache:\r\n    def __init__(self, exact_ttl: int = 300, semantic_threshold: float = 0.95):\r\n        self.exact_cache = ExactMatchCache(ttl_seconds=exact_ttl)\r\n        self.semantic_cache = SemanticCache(similarity_threshold=semantic_threshold)\r\n\r\n    def get(self, messages: list, query_embedding: np.ndarray, model: str) -> Optional[str]:\r\n        # Try exact match first (fastest)\r\n        exact = self.exact_cache.get(messages, model)\r\n        if exact is not None:\r\n            return exact\r\n\r\n        # Try semantic match\r\n        semantic = self.semantic_cache.find_similar(query_embedding)\r\n        return semantic\r\n\r\n    def set(self, messages: list, query_embedding: np.ndarray, response: str, model: str):\r\n        self.exact_cache.set(messages, response, model)\r\n        self.semantic_cache.store(query_embedding, response)\r\n\r\nlayered = LayeredCache(exact_ttl=600, semantic_threshold=0.92)\r\n\r\n## Usage: layered.get(messages, embedding, \"gpt-4o-mini\")\r\nprint(f\"Layered cache ready. Exact TTL: {layered.exact_cache.ttl}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "834-cache-invalidation",
      children: "8.3.4 Cache Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\nfrom datetime import datetime\r\n\r\nclass InvalidationPolicy(Enum):\r\n    TTL = \"ttl\"\r\n    LRU = \"lru\"\r\n    MANUAL = \"manual\"\r\n    EVENT_DRIVEN = \"event_driven\"\r\n\r\nclass CacheInvalidator:\r\n    def __init__(self, policy: InvalidationPolicy, max_size: int = 1000):\r\n        self.policy = policy\r\n        self.max_size = max_size\r\n        self.access_order: List[str] = []\r\n\r\n    def record_access(self, key: str):\r\n        if key in self.access_order:\r\n            self.access_order.remove(key)\r\n        self.access_order.append(key)\r\n\r\n    def should_evict(self, current_size: int) -> bool:\r\n        if self.policy == InvalidationPolicy.LRU:\r\n            return current_size >= self.max_size\r\n        return False\r\n\r\n    def evict_lru(self, cache: Dict) -> Optional[str]:\r\n        if not self.access_order:\r\n            return None\r\n        oldest = self.access_order.pop(0)\r\n        return cache.pop(oldest, None)\r\n\r\n    def invalidate_by_pattern(self, cache: Dict, pattern: str):\r\n        keys_to_delete = [k for k in cache if pattern in k]\r\n        for k in keys_to_delete:\r\n            cache.pop(k, None)\r\n            if k in self.access_order:\r\n                self.access_order.remove(k)\r\n\r\n    def stats(self) -> Dict:\r\n        return {\r\n            \"policy\": self.policy.value,\r\n            \"max_size\": self.max_size,\r\n            \"current_queue\": len(self.access_order),\r\n        }\r\n\r\ninvalidator = CacheInvalidator(InvalidationPolicy.LRU, max_size=100)\r\ndummy_cache = {\"key1\": \"val1\", \"key2\": \"val2\", \"model-key3\": \"val3\"}\r\ninvalidator.record_access(\"key1\")\r\ninvalidator.record_access(\"key2\")\r\ninvalidator.invalidate_by_pattern(dummy_cache, \"model-\")\r\nprint(f\"After pattern invalidation: {dummy_cache}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-batching",
      children: "8.4 Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batching reduces per-request overhead and improves throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "841-request-batching",
      children: "8.4.1 Request Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine multiple independent requests into a single API call."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List\r\n\r\nclass RequestBatcher:\r\n    def __init__(self, max_batch_size: int = 20):\r\n        self.max_batch_size = max_batch_size\r\n        self.pending: List[dict] = []\r\n\r\n    def add_request(self, request: dict):\r\n        self.pending.append(request)\r\n\r\n    def flush(self) -> List[List[dict]]:\r\n        batches = []\r\n        while self.pending:\r\n            batch = self.pending[:self.max_batch_size]\r\n            self.pending = self.pending[self.max_batch_size:]\r\n            batches.append(batch)\r\n        return batches\r\n\r\n    def batch_summarize(self, texts: List[str], system_prompt: str) -> List[str]:\r\n        \"\"\"Batch multiple summarization requests into one prompt.\"\"\"\r\n        batch_text = \"\"\r\n        for i, text in enumerate(texts):\r\n            batch_text += f\"TEXT {i + 1}: {text}\\n\"\r\n\r\n        combined_prompt = f\"{system_prompt}\\n\\n{batch_text}\\n\\nProvide summaries for each TEXT in order.\"\r\n\r\n        return combined_prompt  # Single API call returns all summaries\r\n\r\nbatcher = RequestBatcher(max_batch_size=5)\r\ntexts = [\"Article about AI\", \"Article about ML\", \"Article about DL\"]\r\ncombined = batcher.batch_summarize(texts, \"Summarize each text in one sentence.\")\r\nprint(f\"Combined prompt length: {len(combined)} chars\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "842-prompt-packing",
      children: "8.4.2 Prompt Packing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pack multiple examples into a single prompt with structured separation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def pack_classification_batch(\r\n    items: List[str],\r\n    categories: List[str],\r\n    batch_size: int = 10,\r\n) -> List[str]:\r\n    \"\"\"Pack classification tasks into batched prompts.\"\"\"\r\n    batches = []\r\n    for i in range(0, len(items), batch_size):\r\n        batch = items[i:i + batch_size]\r\n        packed = f\"\"\"Classify each item into one of: {', '.join(categories)}.\r\nRespond with one label per line in order.\r\n\r\nItems:\r\n{chr(10).join(f\"{j + 1}. {item}\" for j, item in enumerate(batch))}\r\n\r\nLabels:\"\"\"\r\n        batches.append(packed)\r\n    return batches\r\n\r\nitems = [\"Great product!\", \"Terrible service\", \"It was okay\"]\r\nbatches = pack_classification_batch(items, [\"positive\", \"negative\", \"neutral\"])\r\nprint(batches[0])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "843-inference-batching-server-side",
      children: "8.4.3 Inference Batching (Server-Side)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When running local models, batch inference maximizes GPU utilization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom typing import List, Callable\r\n\r\nclass InferenceBatcher:\r\n    def __init__(self, model_fn: Callable, max_batch_size: int = 32):\r\n        self.model_fn = model_fn\r\n        self.max_batch_size = max_batch_size\r\n\r\n    def predict_batch(self, inputs: List[str]) -> List[str]:\r\n        outputs = []\r\n        for i in range(0, len(inputs), self.max_batch_size):\r\n            batch = inputs[i:i + self.max_batch_size]\r\n            batch_outputs = self.model_fn(batch)  # Model handles batching internally\r\n            outputs.extend(batch_outputs)\r\n        return outputs\r\n\r\n    def benchmark(self, inputs: List[str]) -> dict:\r\n        # Sequential\r\n        start = time.time()\r\n        sequential = [self.model_fn([inp])[0] for inp in inputs]\r\n        sequential_time = time.time() - start\r\n\r\n        # Batched\r\n        start = time.time()\r\n        batched = self.predict_batch(inputs)\r\n        batched_time = time.time() - start\r\n\r\n        return {\r\n            \"num_inputs\": len(inputs),\r\n            \"sequential_time\": round(sequential_time, 3),\r\n            \"batched_time\": round(batched_time, 3),\r\n            \"speedup\": round(sequential_time / batched_time, 2) if batched_time > 0 else 0,\r\n        }\r\n\r\n## Simulated model\r\ndef dummy_model(batch: List[str]) -> List[str]:\r\n    time.sleep(0.1 * len(batch))  # Simulate linear scaling\r\n    return [f\"response_{i}\" for i in range(len(batch))]\r\n\r\nbatcher = InferenceBatcher(dummy_model, max_batch_size=10)\r\nresults = batcher.benchmark([\"a\"] * 20)\r\nprint(results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-latency-management",
      children: "8.5 Latency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Latency directly impacts user experience. Multiple strategies help reduce response time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-model-selection-strategy",
      children: "8.5.1 Model Selection Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use cheaper/faster models for simple tasks and reserve powerful models for complex tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass TaskProfile:\r\n    complexity: str  # simple, medium, complex\r\n    accuracy_requirement: str  # low, medium, high\r\n    latency_budget_ms: int\r\n\r\nMODEL_LATENCY = {\r\n    \"gpt-4o-mini\": 500,\r\n    \"gpt-4o\": 2000,\r\n    \"claude-3-haiku\": 600,\r\n    \"claude-3-5-sonnet\": 2500,\r\n}\r\n\r\ndef select_model(profile: TaskProfile) -> str:\r\n    if profile.complexity == \"simple\" and profile.latency_budget_ms < 1000:\r\n        return \"gpt-4o-mini\"\r\n    elif profile.complexity == \"simple\":\r\n        return \"gpt-4o-mini\"\r\n    elif profile.complexity == \"medium\" and profile.latency_budget_ms < 1500:\r\n        return \"claude-3-haiku\"\r\n    elif profile.complexity == \"complex\" and profile.accuracy_requirement == \"high\":\r\n        return \"gpt-4o\"\r\n    else:\r\n        return \"gpt-4o-mini\"\r\n\r\nprofiles = [\r\n    TaskProfile(\"simple\", \"low\", 300),\r\n    TaskProfile(\"complex\", \"high\", 5000),\r\n    TaskProfile(\"medium\", \"medium\", 1200),\r\n]\r\n\r\nfor p in profiles:\r\n    model = select_model(p)\r\n    print(f\"Complexity={p.complexity}, Budget={p.latency_budget_ms}ms -> {model}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-streaming",
      children: "8.5.2 Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streaming returns tokens incrementally, reducing perceived latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom typing import Generator\r\n\r\nclass StreamingClient:\r\n    def __init__(self, tokens: List[str], delay_per_token: float = 0.05):\r\n        self.tokens = tokens\r\n        self.delay = delay_per_token\r\n\r\n    def stream(self) -> Generator[str, None, None]:\r\n        for token in self.tokens:\r\n            time.sleep(self.delay)\r\n            yield token\r\n\r\n    def simulate_streaming_response(self, prompt: str) -> Generator[str, None, None]:\r\n        response_tokens = [\r\n            \"Paris\",\r\n            \" is\",\r\n            \" the\",\r\n            \" capital\",\r\n            \" of\",\r\n            \" France.\",\r\n        ]\r\n        return self.stream()\r\n\r\n    def measure_time_to_first_token(self) -> float:\r\n        start = time.time()\r\n        gen = self.stream()\r\n        first = next(gen)\r\n        return time.time() - start\r\n\r\nclient = StreamingClient([\"hello\", \" world\"], 0.1)\r\nttft = client.measure_time_to_first_token()\r\nprint(f\"Time to first token: {ttft:.3f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "853-speculative-decoding",
      children: "8.5.3 Speculative Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use a draft model to predict tokens, verified by the target model for correctness."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Conceptual speculative decoding\r\nclass SpeculativeDecoder:\r\n    def __init__(self, draft_model, target_model):\r\n        self.draft = draft_model\r\n        self.target = target_model\r\n\r\n    def decode(self, prompt: str, num_speculative: int = 5) -> str:\r\n        # Draft model generates k candidate tokens\r\n        draft_tokens = self.draft.generate(prompt, max_tokens=num_speculative)\r\n\r\n        # Target model verifies in one forward pass\r\n        verified = self.target.verify(prompt, draft_tokens)\r\n\r\n        # Accept longest verified prefix\r\n        accepted = []\r\n        for is_accepted, token in verified:\r\n            if is_accepted:\r\n                accepted.append(token)\r\n            else:\r\n                break\r\n\r\n        return \"\".join(accepted)\r\n\r\nclass MockDraftModel:\r\n    def generate(self, prompt: str, max_tokens: int) -> list:\r\n        return [\" Paris\", \" is\", \" the\", \" capital\", \" of\"]\r\n\r\nclass MockTargetModel:\r\n    def verify(self, prompt: str, tokens: list) -> list:\r\n        return [(True, t) for t in tokens]\r\n\r\ndecoder = SpeculativeDecoder(MockDraftModel(), MockTargetModel())\r\noutput = decoder.decode(\"What is the capital of France?\")\r\nprint(f\"Speculative output: {output}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-4",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "854-response-trimming",
      children: "8.5.4 Response Trimming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reduce output tokens by enforcing concise responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def trim_response(response: str, max_sentences: int = 2) -> str:\r\n    sentences = response.replace(\"!\", \".\").replace(\"?\", \".\").split(\".\")\r\n    trimmed = \". \".join(s.strip() for s in sentences[:max_sentences])\r\n    if not trimmed.endswith(\".\"):\r\n        trimmed += \".\"\r\n    return trimmed\r\n\r\ndef create_concise_prompt(original_prompt: str) -> str:\r\n    concise_instruction = \"Respond in 2 sentences or fewer.\"\r\n    return f\"{concise_instruction}\\n\\n{original_prompt}\"\r\n\r\nlong_response = \"The capital of France is Paris. It is a beautiful city located on the Seine River. The Eiffel Tower is a famous landmark.\"\r\nprint(f\"Trimmed: {trim_response(long_response, 2)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-budget-monitoring",
      children: "8.6 Budget Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Track costs proactively to avoid budget overruns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "861-token-usage-tracking",
      children: "8.6.1 Token Usage Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\r\nfrom datetime import date, datetime\r\nfrom typing import Dict, List\r\n\r\nclass UsageTracker:\r\n    def __init__(self, monthly_budget: float = 100.0):\r\n        self.monthly_budget = monthly_budget\r\n        self.usage: Dict[str, List[Dict]] = defaultdict(list)\r\n\r\n    def record(\r\n        self,\r\n        model: str,\r\n        input_tokens: int,\r\n        output_tokens: int,\r\n        endpoint: str = \"chat\",\r\n    ):\r\n        pricing = PRICING.get(model)\r\n        if not pricing:\r\n            return\r\n\r\n        input_cost = (input_tokens / 1000) * pricing.input_price_per_1k\r\n        output_cost = (output_tokens / 1000) * pricing.output_price_per_1k\r\n\r\n        entry = {\r\n            \"timestamp\": datetime.now().isoformat(),\r\n            \"model\": model,\r\n            \"input_tokens\": input_tokens,\r\n            \"output_tokens\": output_tokens,\r\n            \"input_cost\": round(input_cost, 6),\r\n            \"output_cost\": round(output_cost, 6),\r\n            \"total_cost\": round(input_cost + output_cost, 6),\r\n            \"endpoint\": endpoint,\r\n        }\r\n        self.usage[model].append(entry)\r\n\r\n    def daily_cost(self, target_date: date = None) -> float:\r\n        if target_date is None:\r\n            target_date = date.today()\r\n        total = 0.0\r\n        for model, entries in self.usage.items():\r\n            for entry in entries:\r\n                entry_date = datetime.fromisoformat(entry[\"timestamp\"]).date()\r\n                if entry_date == target_date:\r\n                    total += entry[\"total_cost\"]\r\n        return round(total, 4)\r\n\r\n    def monthly_cost(self) -> float:\r\n        today = date.today()\r\n        total = 0.0\r\n        for model, entries in self.usage.items():\r\n            for entry in entries:\r\n                entry_date = datetime.fromisoformat(entry[\"timestamp\"]).date()\r\n                if entry_date.year == today.year and entry_date.month == today.month:\r\n                    total += entry[\"total_cost\"]\r\n        return round(total, 4)\r\n\r\n    def budget_remaining(self) -> float:\r\n        return round(self.monthly_budget - self.monthly_cost(), 4)\r\n\r\n    def top_models_by_cost(self) -> List[Dict]:\r\n        model_costs = defaultdict(float)\r\n        for model, entries in self.usage.items():\r\n            model_costs[model] += sum(e[\"total_cost\"] for e in entries)\r\n\r\n        sorted_models = sorted(model_costs.items(), key=lambda x: x[1], reverse=True)\r\n        return [\r\n            {\"model\": model, \"cost\": round(cost, 4)}\r\n            for model, cost in sorted_models\r\n        ]\r\n\r\ntracker = UsageTracker(monthly_budget=500.0)\r\ntracker.record(\"gpt-4o\", 50000, 10000)\r\ntracker.record(\"gpt-4o-mini\", 200000, 40000)\r\nprint(f\"Monthly cost: ${tracker.monthly_cost()}\")\r\nprint(f\"Budget remaining: ${tracker.budget_remaining()}\")\r\nprint(f\"Top models: {tracker.top_models_by_cost()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "862-alerting-system",
      children: "8.6.2 Alerting System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BudgetAlertSystem:\r\n    def __init__(self, thresholds: List[float], webhook_url: str = None):\r\n        self.thresholds = sorted(thresholds)  # e.g., [0.5, 0.75, 0.9, 1.0]\r\n        self.webhook_url = webhook_url\r\n        self.triggered = set()\r\n\r\n    def check_budget(self, usage_tracker: UsageTracker) -> List[str]:\r\n        budget = usage_tracker.monthly_budget\r\n        spent = usage_tracker.monthly_cost()\r\n        utilization = spent / budget if budget > 0 else 0\r\n\r\n        alerts = []\r\n        for threshold in self.thresholds:\r\n            if utilization >= threshold and threshold not in self.triggered:\r\n                alert_msg = f\"ALERT: Budget utilization {utilization:.1%} (threshold {threshold:.0%})\"\r\n                alerts.append(alert_msg)\r\n                self.triggered.add(threshold)\r\n\r\n                if self.webhook_url:\r\n                    self._send_webhook(alert_msg)\r\n\r\n        return alerts\r\n\r\n    def _send_webhook(self, message: str):\r\n        # Implement webhook call to Slack, PagerDuty, etc.\r\n        pass\r\n\r\n    def daily_summary(self, tracker: UsageTracker) -> Dict:\r\n        return {\r\n            \"daily_cost\": tracker.daily_cost(),\r\n            \"monthly_cost\": tracker.monthly_cost(),\r\n            \"budget_remaining\": tracker.budget_remaining(),\r\n            \"utilization\": round(\r\n                tracker.monthly_cost() / tracker.monthly_budget * 100, 1\r\n            ),\r\n            \"alerts_triggered\": sorted(self.triggered),\r\n        }\r\n\r\nalert_system = BudgetAlertSystem(thresholds=[0.5, 0.75, 0.9, 1.0])\r\nalerts = alert_system.check_budget(tracker)\r\nprint(f\"Alerts: {alerts}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "863-cost-attribution",
      children: "8.6.3 Cost Attribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Track costs per user, feature, or team for chargeback."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass CostAttribution:\r\n    user_id: str\r\n    feature: str\r\n    team: str\r\n\r\nclass AttributionTracker:\r\n    def __init__(self):\r\n        self.attributions: Dict[str, CostAttribution] = {}\r\n\r\n    def attribute_request(self, request_id: str, attribution: CostAttribution):\r\n        self.attributions[request_id] = attribution\r\n\r\n    def get_feature_costs(\r\n        self, tracker: UsageTracker\r\n    ) -> Dict[str, float]:\r\n        feature_costs = defaultdict(float)\r\n        for model, entries in tracker.usage.items():\r\n            for entry in entries:\r\n                feature = entry.get(\"feature\", \"unknown\")\r\n                feature_costs[feature] += entry[\"total_cost\"]\r\n        return dict(feature_costs)\r\n\r\n    def get_user_costs(\r\n        self, tracker: UsageTracker\r\n    ) -> Dict[str, float]:\r\n        user_costs = defaultdict(float)\r\n        for model, entries in tracker.usage.items():\r\n            for entry in entries:\r\n                user = entry.get(\"user_id\", \"unknown\")\r\n                user_costs[user] += entry[\"total_cost\"]\r\n        return dict(user_costs)\r\n\r\nattribution = AttributionTracker()\r\nprint(\"Attribution tracker ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-practical-optimization-checklist",
      children: "8.7 Practical Optimization Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CostOptimizationAudit:\r\n    def __init__(self):\r\n        self.checks = []\r\n\r\n    def add_check(self, name: str, passed: bool, savings: float):\r\n        self.checks.append({\"name\": name, \"passed\": passed, \"savings\": savings})\r\n\r\n    def total_potential_savings(self) -> float:\r\n        return sum(c[\"savings\"] for c in self.checks if not c[\"passed\"])\r\n\r\n    def report(self) -> Dict:\r\n        passed = sum(1 for c in self.checks if c[\"passed\"])\r\n        total = len(self.checks)\r\n        return {\r\n            \"checks_passed\": f\"{passed}/{total}\",\r\n            \"compliance\": round(passed / total * 100, 1) if total > 0 else 0,\r\n            \"potential_monthly_savings\": round(self.total_potential_savings(), 2),\r\n            \"details\": self.checks,\r\n        }\r\n\r\naudit = CostOptimizationAudit()\r\naudit.add_check(\"Use cheaper model for simple tasks\", True, 0)\r\naudit.add_check(\"Implement response caching\", False, 150.0)\r\naudit.add_check(\"Enable streaming for UX\", True, 0)\r\naudit.add_check(\"Truncate prompts to fit budget\", False, 80.0)\r\naudit.add_check(\"Batch requests where possible\", False, 200.0)\r\naudit.add_check(\"Set max_tokens constraints\", True, 0)\r\naudit.add_check(\"Monitor usage with alerts\", True, 0)\r\n\r\nprint(json.dumps(audit.report(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cost and latency optimization is essential for production LLM applications. Key strategies include: selecting appropriate model tiers based on task complexity,.\r\ncompressing prompts and controlling output length to minimize token consumption, implementing multi-layer caching (exact match, semantic, and hybrid), batching requests to reduce per-call overhead,.\r\nstreaming responses to improve perceived latency, and establishing budget monitoring with usage tracking, cost attribution, and alerting. A systematic audit of these practices can reduce monthly costs by 40-80% while maintaining response quality. The most impactful optimizations are typically caching (eliminates redundant calls),.\r\nmodel tier selection (10-40x cost difference), and prompt compression (20-50% token reduction)."
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
            children: "Cache aggressively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement both exact and semantic caching — it's the highest-impact optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Match model to task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use small models for 80% of requests, reserve large models for complex cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control token budgets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set max_tokens on every request and compress system prompts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch when possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine independent requests to amortize overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor and alert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track daily/monthly costs and set alerts at 50%, 75%, 90% thresholds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream responses to reduce perceived latency by 60-80%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the main cost drivers in LLM API usage and how would you reduce costs by 50%?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main cost drivers are model tier selection (10-40x price difference between small and large models), total token consumption (input + output),.\nand redundant API calls. To reduce costs by 50%: implement exact-match and semantic caching to eliminate repeated queries, switch to a smaller model (e.g.,.\ngpt-4o-mini instead of gpt-4o) for 80% of simpler tasks, compress system prompts by removing redundant instructions, set max_tokens limits on every request,.\nand batch independent requests. Track usage with a CostAnalyzer to identify the biggest saving opportunities."
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
      "data-qid": "llm08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does semantic caching differ from exact-match caching and when would you use each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Exact-match caching stores responses keyed by the exact message content, model, and parameters — it returns a cached response only when the exact same query is repeated. Semantic caching uses embeddings to find similar queries — it returns a cached.\nresponse when a query's embedding is within a similarity threshold (e.g.,.\ncosine similarity > 0.95) of a previously cached query. Use exact-match for deterministic queries (temperature=0) where identical inputs produce identical outputs. Use semantic caching for.\nuser-facing applications where paraphrased questions should reuse cached answers. A layered cache combining both provides optimal coverage."
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
      "data-qid": "llm08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Explain speculative decoding and how it reduces latency without sacrificing output quality.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Speculative decoding uses a fast draft model to generate K candidate tokens in parallel, then the target model verifies them in a single forward pass. Because the draft model is much faster (e.g.,.\na small 100M parameter model) and the target model can verify multiple tokens at once, the effective latency per token decreases significantly. The key insight is that verification is cheaper than generation: verifying 5 draft tokens in one forward pass.\ncosts similar to generating 1 token. Output quality is preserved because the target model rejects any incorrect draft tokens and.\nregenerates them. This technique is most effective when the draft and target models have high agreement."
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
      "data-qid": "llm08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you design a budget alerting system for LLM costs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a UsageTracker that records every API call with model, input tokens, output tokens, timestamp, and user/feature attribution. Set up a BudgetAlertSystem with thresholds at 50%,.\n75%, 90%, and 100% of the monthly budget. Each threshold triggers an alert (Slack, email, or PagerDuty) only once. The system checks utilization on every request and.\nprojects monthly spend based on daily burn rate. Use a sliding window to smooth out spikes. For example, if the monthly budget is \\$500 and.\ndaily spend averages \\$20, an alert fires at \\$250 (50%), \\$375 (75%), and \\$450 (90%)."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "alert_system = BudgetAlertSystem(thresholds=[0.5, 0.75, 0.9, 1.0])\nalerts = alert_system.check_budget(tracker)"
          })
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
      "data-qid": "llm08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What strategies reduce the number of output tokens without sacrificing response quality?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Key strategies include: setting max_tokens to a tight upper bound, using stop sequences to end generation early, instructing the model to be concise in the system prompt,.\ntrimming responses programmatically to a maximum number of sentences, and extracting only the relevant portion of structured outputs (e.g., JSON fields). For.\nexample, a system prompt like \"Respond in 2 sentences or fewer\" can cut output tokens by 60-70% for Q&A tasks. Post-generation trimming can enforce hard limits:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def trim_response(response, max_sentences=2):\n    sentences = response.split(\".\")\n    return \". \".join(s.strip() for s in sentences[:max_sentences]) + \".\""
          })
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
      "data-qid": "llm08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does request batching reduce per-request overhead in LLM applications?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Request batching combines multiple independent prompts into a single API call with a structured multi-part prompt. For example, instead of making 10 separate classification calls,.\npack all 10 items into one prompt with numbered lists and ask the model to return labels in order. This reduces network round-trip overhead,.\namortizes prompt prefix tokens (system instructions), and can improve throughput 5-10x. For local models, inference batching maximizes GPU utilization by processing multiple inputs simultaneously. The trade-off is that batch size is limited by the model's context window — each item still consumes tokens."
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
      "data-qid": "llm08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the cost impact of long system prompts and how do you optimize them?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Long system prompts are a hidden cost driver because they're sent on every API call. If a system prompt is 1000 tokens and.\nyou make 100,000 calls per month, that's 100M input tokens just for system instructions. Optimize by: removing redundant or duplicated instructions,.\ncompressing whitespace, using concise language, extracting common instructions into a shared prefix, and splitting rarely used instructions into separate templates. A PromptTemplateOptimizer can identify common prefixes across templates. For.\nexample, compressing \"You are an expert assistant. You must follow these rules: 1. Be concise. 2. Be accurate.\" to \"Be concise and.\naccurate.\" saves ~60% of instruction tokens."
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
      "data-qid": "llm08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How would you implement a cost attribution system to track LLM spending per feature?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an AttributionTracker that associates each API request with a user_id, feature name, and team. Record the attribution alongside the token usage in the UsageTracker. Build a reporting layer that aggregates costs by feature,.\nuser, and team using per-request entries. This enables chargeback models where each team pays for their LLM usage. Key metrics to expose: cost per feature per day,.\ntop 10 users by spend, and cost per successful query. Store attributions in a time-series database for trend analysis. A typical enterprise deployment might track 20+ features and.\nsurface costs in a monthly dashboard."
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
      "data-qid": "llm08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: Explain how model selection strategy balances cost, latency, and quality.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a ModelRouter that classifies each request by task complexity (simple, medium, complex) and latency budget. Route simple tasks (e.g., classification,.\nentity extraction) to cheap models like gpt-4o-mini or claude-3-haiku. Route complex tasks (e.g., code generation, multi-step reasoning) to powerful models like gpt-4o or.\nclaude-3-5-sonnet. Measure accuracy on a validation set to calibrate the routing rules. A typical distribution is 70% simple, 20% medium, 10% complex — resulting in ~60% cost reduction compared to using a single large model for.\neverything. Monitor and adjust routing thresholds based on real-time quality metrics."
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
      "data-qid": "llm08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What is the difference between time-to-first-token (TTFT) and tokens-per-second (TPS), and which matters more for user experience?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TTFT measures the delay from submitting a request to receiving the first output token — it includes network latency, prompt processing,.\nand initial model computation. TPS measures generation throughput after the first token. For user experience, TTFT is more critical because users perceive waiting before they see any response. Streaming reduces perceived latency by lowering TTFT — the user sees tokens appear incrementally rather than waiting for.\nthe full response. A target TTFT under 500ms is good for interactive applications. Optimize TTFT through model selection (smaller models), prompt caching (reduce prompt processing),.\nand geographic proximity to the API endpoint."
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s8-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Which factor typically has the largest impact on per-request cost?"]
      }), "\nA. Model tier selection\nB. Network latency\nC. API endpoint URL\nD. Client library version\nAnswer: A\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s8-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is the primary advantage of semantic caching over exact-match caching?"]
      }), "\nA. Faster lookups\nB. Matches semantically similar queries\nC. Uses less memory\nD. Requires no embeddings\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s8-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What does speculative decoding help reduce?"]
      }), "\nA. Input token cost\nB. Output latency through draft-then-verify\nC. Memory usage\nD. API rate limit errors\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s8-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " Why is streaming beneficial for user experience?"]
      }), "\nA. Reduces total token usage\nB. Decreases time to first visible token\nC. Eliminates the need for caching\nD. Increases output quality\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "llm-s8-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Which caching strategy should be tried first for the highest impact?"]
      }), "\nA. Semantic cache\nB. Distributed cache\nC. Exact-match (identical request) cache\nD. Persistent disk cache\nAnswer: C\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Build a cost calculator that takes a conversation history (list of messages) and computes total cost across different model tiers. Generate a cost comparison report for a day's worth of 1000 conversations."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a semantic caching system using embeddings from a local model. Measure cache hit rate on a dataset of 500 paraphrased questions. Report precision and recall at different similarity thresholds."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a request batcher for classification tasks that packs 50 items into a single API call and parses the structured response. Benchmark throughput vs sequential calls."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a model router that selects between gpt-4o-mini, gpt-4o, and claude-3-haiku based on task complexity, latency requirements, and remaining daily budget. Simulate 24 hours of traffic."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a budget monitoring dashboard that tracks daily spend, projects monthly cost, and sends alerts at configurable thresholds. Include cost attribution by feature"
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
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
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
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
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
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
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
            children: "How does Cost & Latency Optimization behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Cost & Latency Optimization\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Cost & Latency Optimization to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Cost & Latency Optimization (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Cost & Latency Optimization and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Cost & Latency Optimization-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Cost & Latency Optimization in production today?"
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
        }), " Cost & Latency Optimization builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Cost & Latency Optimization before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Cost & Latency Optimization is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Cost & Latency Optimization in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Cost & Latency Optimization is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Cost And Latency Optimization is ___. — Answer: O(n^2) attention, O(n) KV cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Cost And Latency Optimization is ___. — Answer: hallucination, context overflow, rate limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Cost & Latency Optimization issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Cost & Latency Optimization in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Cost & Latency Optimization that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Cost & Latency Optimization in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Cost & Latency Optimization and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
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
            children: "Complete Medium exercises, explain Cost & Latency Optimization to someone else"
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
        children: "Always write a one-line example of Cost & Latency Optimization from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Cost & Latency Optimization when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Cost & Latency Optimization twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Cost & Latency Optimization snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Cost & Latency Optimization listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Cost & Latency Optimization to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Cost & Latency Optimization by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Cost & Latency Optimization to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vaswani et al. (2017) 'Attention Is All You Need' — the transformer paper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Brown et al. (2020) 'Language Models are Few-Shot Learners' — GPT-3 paper introducing in-context learning"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Anthropic Claude documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.anthropic.com",
          children: "https://docs.anthropic.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenAI API reference: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs",
          children: "https://platform.openai.com/docs"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Designing Large Language Model Applications' by Suhas Pai & Latency Optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 11 — builds the foundation for 08 Cost And Latency Optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Cost And Latency Optimization with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Cost And Latency Optimization fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Cost And Latency Optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Cost And Latency Optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Cost And Latency Optimization?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Cost And Latency Optimization?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Cost And Latency Optimization asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Cost And Latency Optimization?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost & Latency Optimization is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Cost & Latency Optimization."
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
        children: "Cost & Latency Optimization emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Cost & Latency Optimization today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Cost & Latency Optimization — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Cost & Latency Optimization changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log raw LLM prompts in production — they may contain user PII or confidential business data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement output filtering for PII, hate speech, and harmful content before returning to users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rotate API keys regularly and use separate keys per environment (dev/staging/prod)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set spending limits on provider dashboards to prevent runaway costs from prompt injection attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate and sanitize all user inputs before including in LLM prompts to prevent prompt injection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temperature scales logits before softmax: low temperature sharpens the distribution (more deterministic), high temperature flattens it (more random)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Top-p (nucleus sampling) dynamically selects the smallest token set whose cumulative probability exceeds p — more principled than top-k"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context window is the model's working memory — exceeding it causes the model to 'forget' earlier content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokenization affects cost: code and non-English text use more tokens per character than English prose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System prompts are processed first and have stronger influence on model behavior than user messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Cost And Latency Optimization is like a GPS navigation system"
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
          }), " — this chapter contributes the Cost & Latency Optimization skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-08costandlatencyoptimization-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Cost & Latency Optimization in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Foundation models are large transformer-based neural networks trained on internet-scale data via next-token prediction, exhibiting emergent abilities like reasoning and in-context learning at scale."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-08costandlatencyoptimization-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common LLM mistake: using temperature=1.0 for factual tasks. Use temperature=0 for deterministic factual outputs and temperature=0.7-1.0 only for creative generation."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-08costandlatencyoptimization-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Cost & Latency Optimization approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM inference: O(n^2) for self-attention over context length n. KV cache reduces repeated computation to O(n) per new token. Memory: O(n * d * layers) for KV cache."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-08costandlatencyoptimization-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Cost & Latency Optimization NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMs are NOT the right choice when: (1) a simple rule-based system suffices, (2) you need 100% deterministic outputs, (3) latency < 50ms is required, (4) the task requires real-time data."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-08costandlatencyoptimization-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Cost & Latency Optimization applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production LLM stack: OpenAI/Anthropic/Bedrock for inference, tiktoken for token counting, LangSmith for observability, Pydantic for output validation, Redis for response caching."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Cost & Latency Optimization (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Cost & Latency Optimization (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Cost & Latency Optimization-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Cost & Latency Optimization in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAI Python SDK"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install openai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic Python SDK"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install anthropic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tiktoken"
        }), " — OpenAI's tokenizer for token counting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LiteLLM"
        }), " — unified interface across 100+ LLM providers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instructor"
        }), " — structured output extraction from LLMs using Pydantic & Latency Optimization"]
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
        }), ": Add structured logging at each stage of the 08 Cost And Latency Optimization pipeline to identify exactly where the failure occurs."]
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
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Cost & Latency Optimization."
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
        children: "Tell me about a time you debugged a Cost & Latency Optimization problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Cost & Latency Optimization is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_cost_and_latency_optimization(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Cost And Latency Optimization.\r\n\r\n    Key concepts: tokens, context window, temperature, top-p, system prompt\r\n    Complexity: O(n^2) attention, O(n) KV cache\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Cost And Latency Optimization here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Cost & Latency Optimization without notes"
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
          children: "GitHub Copilot"
        }), " uses GPT-4 to generate code completions with 46% of code written by AI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duolingo Max"
        }), " uses GPT-4 for personalized language tutoring at scale"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Klarna"
        }), " replaced 700 customer service agents with an LLM-powered chatbot handling 2.3M conversations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notion AI"
        }), " uses LLMs to summarize, translate, and generate content within documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always quantify LLM impact — 'reduced support tickets by 40%' beats 'improved customer experience'"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost & Latency Optimization, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Cost & Latency Optimization depends on input size and distribution — always benchmark for your own data."
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