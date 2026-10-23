"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7165],{

/***/ 26716
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_04_inference_serving_md_aaf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-04-inference-serving-md-aaf.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_04_inference_serving_md_aaf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/04-inference-serving","title":"AI Inference Serving","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/04-inference-serving.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/04-inference-serving","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":326,"frontMatter":{"id":"04-inference-serving","slug":"/ai-engineering-placement/27-ai-infrastructure/04-inference-serving","title":"AI Inference Serving","sidebar_label":"AI Inference Serving","sidebar_position":326},"sidebar":"placementSidebar","previous":{"title":"03 — Model Compilation & Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/03-model-compilation"},"next":{"title":"Distributed Inference","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/04-inference-serving.md


const frontMatter = {
	id: '04-inference-serving',
	slug: '/ai-engineering-placement/27-ai-infrastructure/04-inference-serving',
	title: 'AI Inference Serving',
	sidebar_label: 'AI Inference Serving',
	sidebar_position: 326
};
const contentTitle = 'AI Inference Serving';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Serving Architecture Overview",
  "id": "serving-architecture-overview",
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
  "value": "1.1 vLLM — PagedAttention",
  "id": "11-vllm--pagedattention",
  "level": 3
}, {
  "value": "The KV Cache Problem",
  "id": "the-kv-cache-problem",
  "level": 4
}, {
  "value": "Continuous Batching",
  "id": "continuous-batching",
  "level": 4
}, {
  "value": "1.2 vLLM — Tensor Parallelism &amp; Online Serving",
  "id": "12-vllm--tensor-parallelism--online-serving",
  "level": 3
}, {
  "value": "Tensor Parallelism",
  "id": "tensor-parallelism",
  "level": 4
}, {
  "value": "Online Serving with OpenAI-Compatible API",
  "id": "online-serving-with-openai-compatible-api",
  "level": 4
}, {
  "value": "vLLM Python API (Server-side)",
  "id": "vllm-python-api-server-side",
  "level": 4
}, {
  "value": "2.1 SGLang — RadixAttention",
  "id": "21-sglang--radixattention",
  "level": 3
}, {
  "value": "The Prefix Sharing Problem",
  "id": "the-prefix-sharing-problem",
  "level": 4
}, {
  "value": "2.2 SGLang — Structured Generation &amp; Constrained Decoding",
  "id": "22-sglang--structured-generation--constrained-decoding",
  "level": 3
}, {
  "value": "Constrained Decoding with Regex",
  "id": "constrained-decoding-with-regex",
  "level": 4
}, {
  "value": "Grammar-Constrained Generation",
  "id": "grammar-constrained-generation",
  "level": 4
}, {
  "value": "Constrained Decoding Implementation",
  "id": "constrained-decoding-implementation",
  "level": 4
}, {
  "value": "3.0 Hugging Face TGI",
  "id": "30-hugging-face-tgi",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 4
}, {
  "value": "Server-Sent Events (SSE) Streaming",
  "id": "server-sent-events-sse-streaming",
  "level": 4
}, {
  "value": "Quantization Support",
  "id": "quantization-support",
  "level": 4
}, {
  "value": "Watermarking",
  "id": "watermarking",
  "level": 4
}, {
  "value": "TGI Configuration",
  "id": "tgi-configuration",
  "level": 4
}, {
  "value": "4.0 Triton Inference Server",
  "id": "40-triton-inference-server",
  "level": 3
}, {
  "value": "Model Repository Structure",
  "id": "model-repository-structure",
  "level": 4
}, {
  "value": "Dynamic Batching",
  "id": "dynamic-batching",
  "level": 4
}, {
  "value": "Ensemble Models",
  "id": "ensemble-models",
  "level": 4
}, {
  "value": "Concurrent Model Execution",
  "id": "concurrent-model-execution",
  "level": 4
}, {
  "value": "Triton Client Example",
  "id": "triton-client-example",
  "level": 4
}, {
  "value": "5.0 Serving Comparison",
  "id": "50-serving-comparison",
  "level": 3
}, {
  "value": "Feature Comparison Matrix",
  "id": "feature-comparison-matrix",
  "level": 4
}, {
  "value": "Throughput &amp; Latency Benchmarks",
  "id": "throughput--latency-benchmarks",
  "level": 4
}, {
  "value": "Memory Comparison",
  "id": "memory-comparison",
  "level": 4
}, {
  "value": "Selection Guide",
  "id": "selection-guide",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1 (Google): Explain PagedAttention. How does it differ from standard KV cache management?",
  "id": "q1-google-explain-pagedattention-how-does-it-differ-from-standard-kv-cache-management",
  "level": 3
}, {
  "value": "Q2 (Microsoft): What is continuous batching and why does it matter for LLM serving?",
  "id": "q2-microsoft-what-is-continuous-batching-and-why-does-it-matter-for-llm-serving",
  "level": 3
}, {
  "value": "Q3 (NVIDIA): Compare vLLM, SGLang, TGI, and Triton Inference Server. When would you use each?",
  "id": "q3-nvidia-compare-vllm-sglang-tgi-and-triton-inference-server-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q4 (Amazon): How does tensor parallelism work for LLM inference? What are the communication costs?",
  "id": "q4-amazon-how-does-tensor-parallelism-work-for-llm-inference-what-are-the-communication-costs",
  "level": 3
}, {
  "value": "Q5 (Anthropic): What is RadixAttention and how does it improve serving efficiency?",
  "id": "q5-anthropic-what-is-radixattention-and-how-does-it-improve-serving-efficiency",
  "level": 3
}, {
  "value": "Q6 (Microsoft): Explain the difference between prefill and decode phases in LLM serving. How does batching differ between them?",
  "id": "q6-microsoft-explain-the-difference-between-prefill-and-decode-phases-in-llm-serving-how-does-batching-differ-between-them",
  "level": 3
}, {
  "value": "Q7 (NVIDIA): How does Triton Inference Server handle multi-model pipelines?",
  "id": "q7-nvidia-how-does-triton-inference-server-handle-multi-model-pipelines",
  "level": 3
}, {
  "value": "Q8 (Meta): What quantization methods does TGI support and how do they affect throughput?",
  "id": "q8-meta-what-quantization-methods-does-tgi-support-and-how-do-they-affect-throughput",
  "level": 3
}, {
  "value": "Q9 (Google): Design a serving architecture for a 70B parameter model serving 10,000 requests per minute.",
  "id": "q9-google-design-a-serving-architecture-for-a-70b-parameter-model-serving-10000-requests-per-minute",
  "level": 3
}, {
  "value": "Q10 (AI Startup): How would you deploy a model that requires structured JSON output? Compare approaches.",
  "id": "q10-ai-startup-how-would-you-deploy-a-model-that-requires-structured-json-output-compare-approaches",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
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
        id: "ai-inference-serving",
        children: "AI Inference Serving"
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
            children: "Explain the PagedAttention algorithm and why it improves KV cache utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare vLLM, SGLang, TGI, and Triton Inference Server for LLM serving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a vLLM server for online LLM inference with continuous batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply structured generation and constrained decoding with SGLang"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy ensemble models on Triton Inference Server with dynamic batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure and compare serving throughput, latency, and memory across frameworks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vLLM: PagedAttention & Continuous Batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory for KV cache, on-the-fly batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vLLM: Tensor Parallelism & Online Serving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-GPU deployment, OpenAI-compatible API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGLang: RadixAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic KV cache reuse across requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGLang: Structured Generation & Constrained Decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grammar-guided output, JSON mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hugging Face TGI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text generation inference server with SSE streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triton Inference Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model repository, dynamic batching, concurrent execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serving Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput, latency, memory benchmarks across all four"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "serving-architecture-overview",
      children: "Serving Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Client[\"Client Layer\"]\r\n        C1[REST API]\r\n        C2[gRPC]\r\n        C3[WebSocket]\r\n    end\r\n    subgraph Serving[\"Inference Serving Layer\"]\r\n        VLLM[\"vLLM<br/>PagedAttention<br/>Continuous Batching\"]\r\n        SGLANG[\"SGLang<br/>RadixAttention<br/>Structured Gen\"]\r\n        TGI[\"HuggingFace TGI<br/>SSE Streaming<br/>Quantization\"]\r\n        TRITON[\"Triton Server<br/>Model Repo<br/>Ensemble\"]\r\n    end\r\n    subgraph Backend[\"GPU Backend\"]\r\n        G1[GPU 0<br/>H100]\r\n        G2[GPU 1<br/>H100]\r\n        G3[GPU N<br/>H100]\r\n    end\r\n    subgraph Storage[\"Model Storage\"]\r\n        M1[Llama 3.1 70B]\r\n        M2[Mixtral 8x7B]\r\n        M3[Custom ONNX]\r\n    end\r\n    C1 --> VLLM\r\n    C1 --> SGLANG\r\n    C1 --> TGI\r\n    C2 --> TRITON\r\n    VLLM --> G1\r\n    SGLANG --> G2\r\n    TGI --> G1\r\n    TRITON --> G1\r\n    TRITON --> G2\r\n    TRITON --> G3\r\n    VLLM --> M1\r\n    SGLANG --> M1\r\n    TGI --> M2\r\n    TRITON --> M3"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI inference serving is the production deployment of trained models. It takes a model checkpoint and turns it into an API endpoint that handles concurrent requests with low latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Serving LLMs is different from serving traditional models. LLMs have autoregressive decoding — each token depends on all previous tokens. This creates unique challenges: managing the KV cache across sequences, batching dynamically as requests arrive and finish, and maximizing GPU utilization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Four major serving frameworks dominate the ecosystem: vLLM, SGLang, Hugging Face TGI, and NVIDIA Triton Inference Server. Each takes a different approach to the same problems. Understanding their trade-offs is essential for any AI engineer deploying LLMs in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning) — transformer architecture, attention mechanism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 12 (LLM) — autoregressive decoding, tokenization, prompt engineering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python async programming — asyncio, async/await patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of GPU memory hierarchy (Module 27, Chapter 01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic REST API concepts — HTTP, JSON, server-sent events"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KV Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value tensors cached during autoregressive decoding to avoid recomputation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PagedAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vLLM's virtual-memory-inspired KV cache management with physical page blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous Batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batching sequences that arrive at different times — batch changes per decoding step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm deciding which requests to include in each decoding batch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RadixAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGLang's prefix-tree KV cache sharing across requests with common prefixes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraining model output to follow a grammar or schema during decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guided Decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forcing token selection to match a regex or JSON schema at each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-Sent Events — HTTP streaming protocol for token-by-token delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triton's file-system layout for managing model versions and configurations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ensemble Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A directed acyclic graph of models chained together in Triton"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically grouping incoming requests into batches for higher throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting a single model's layers across multiple GPUs for faster inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speculative Decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a small draft model to predict tokens verified by the large model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-vllm--pagedattention",
      children: "1.1 vLLM — PagedAttention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vLLM is the most widely used open-source LLM serving framework. It was developed at UC Berkeley and introduced PagedAttention — a novel attention algorithm inspired by virtual memory paging in operating systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-kv-cache-problem",
      children: "The KV Cache Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During autoregressive decoding, each token attends to all previous tokens. The transformer computes key (K) and value (V) tensors for each token at each layer. These tensors are cached to avoid recomputation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a single sequence of length S with L layers and H hidden dimensions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KV cache size per token per layer = 2 * H (one for K, one for V)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total KV cache for one sequence = L * 2 * H * S"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Llama 3 70B (L=80, H=8192) with sequence length 4096:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-token KV cache: 80 * 2 * 8192 * 2 bytes (FP16) = 2.6 MB per token"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full sequence: 2.6 MB * 4096 = 10.5 GB per sequence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With 8 concurrent sequences, that is 84 GB — exceeding most GPU memories. This is the KV cache memory wall."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Contiguous[\"Contiguous KV Cache (Naive)\"]\r\n        C1[Seq A K,V: allocated 4096 slots] ---|80% unused| C2[Waste]\r\n        C3[Seq B K,V: allocated 4096 slots] ---|50% unused| C4[Waste]\r\n    end\r\n    subgraph Paged[\"Paged KV Cache (vLLM)\"]\r\n        PT[Page Table] --> P1[Physical Page 1]\r\n        PT --> P2[Physical Page 2]\r\n        PT --> P3[Physical Page 3]\r\n        PT --> P4[Physical Page N]\r\n    end\r\n    style C2 fill:#ff4444,opacity:0.5\r\n    style C4 fill:#ff4444,opacity:0.5"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naive approach:"
      }), " Pre-allocate a contiguous block for the maximum sequence length for each request. Most requests are shorter than the maximum, wasting 50-80% of KV cache memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PagedAttention solution:"
      }), " Divide the KV cache into fixed-size page blocks (typically 16 tokens each). Allocate physical pages on demand as the sequence grows. A page table maps logical token positions to physical page blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate PagedAttention KV cache management\r\nimport math\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Dict, List, Optional\r\n\r\n@dataclass\r\nclass PageBlock:\r\n    \"\"\"A fixed-size block of KV cache pages.\"\"\"\r\n    page_id: int\r\n    tokens: int = 0          # Number of filled token slots\r\n    max_tokens: int = 16     # Fixed block size\r\n    k_cache: Optional[bytes] = None  # Key tensor (simulated)\r\n    v_cache: Optional[bytes] = None  # Value tensor (simulated)\r\n\r\n    @property\r\n    def is_full(self) -> bool:\r\n        return self.tokens >= self.max_tokens\r\n\r\n    def fill(self, num_tokens: int) -> int:\r\n        \"\"\"Fill tokens into this page. Returns overflow if any.\"\"\"\r\n        space = self.max_tokens - self.tokens\r\n        filled = min(space, num_tokens)\r\n        self.tokens += filled\r\n        return num_tokens - filled  # overflow\r\n\r\nclass PagedKVManager:\r\n    \"\"\"\r\n    Simulate PagedAttention's KV cache allocator.\r\n    Manages physical page blocks across multiple sequences.\r\n    \"\"\"\r\n\r\n    def __init__(self, total_pages: int = 1024, page_size: int = 16):\r\n        self.total_pages = total_pages\r\n        self.page_size = page_size\r\n        self.free_pages: List[int] = list(range(total_pages))\r\n        self.allocated: Dict[int, List[PageBlock]] = {}  # seq_id -> pages\r\n        self.page_table: Dict[int, Dict[int, int]] = {}  # seq_id -> logical -> physical\r\n\r\n    def allocate_sequence(self, seq_id: int, initial_tokens: int = 0):\r\n        \"\"\"Allocate pages for a new sequence.\"\"\"\r\n        needed_pages = math.ceil(initial_tokens / self.page_size) if initial_tokens > 0 else 1\r\n        if len(self.free_pages) < needed_pages:\r\n            raise MemoryError(\"Out of KV cache pages\")\r\n\r\n        pages = []\r\n        for _ in range(needed_pages):\r\n            page_id = self.free_pages.pop(0)\r\n            pages.append(PageBlock(page_id=page_id, max_tokens=self.page_size))\r\n\r\n        self.allocated[seq_id] = pages\r\n        self.page_table[seq_id] = {i: pages[i].page_id for i in range(len(pages))}\r\n        print(f\"Sequence {seq_id}: allocated {len(pages)} pages \"\r\n              f\"(physical IDs: {[p.page_id for p in pages]})\")\r\n\r\n        # Fill initial tokens\r\n        if initial_tokens > 0:\r\n            self.append_tokens(seq_id, initial_tokens)\r\n\r\n    def append_tokens(self, seq_id: int, num_tokens: int):\r\n        \"\"\"Append tokens to an existing sequence, allocating pages as needed.\"\"\"\r\n        if seq_id not in self.allocated:\r\n            raise ValueError(f\"Sequence {seq_id} not found\")\r\n\r\n        pages = self.allocated[seq_id]\r\n        remaining = num_tokens\r\n\r\n        for page in pages:\r\n            if page.is_full:\r\n                continue\r\n            remaining = page.fill(remaining)\r\n            if remaining == 0:\r\n                break\r\n\r\n        # Allocate new pages if needed\r\n        while remaining > 0:\r\n            if not self.free_pages:\r\n                raise MemoryError(\"Out of KV cache pages — would trigger eviction\")\r\n            page_id = self.free_pages.pop(0)\r\n            new_page = PageBlock(page_id=page_id, max_tokens=self.page_size)\r\n            remaining = new_page.fill(remaining)\r\n            logical_idx = len(pages)\r\n            pages.append(new_page)\r\n            self.page_table[seq_id][logical_idx] = page_id\r\n\r\n        print(f\"Sequence {seq_id}: now {sum(p.tokens for p in pages)} tokens \"\r\n              f\"across {len(pages)} pages\")\r\n\r\n    def free_sequence(self, seq_id: int):\r\n        \"\"\"Return all pages to the free pool.\"\"\"\r\n        if seq_id not in self.allocated:\r\n            return\r\n        pages = self.allocated.pop(seq_id)\r\n        for page in pages:\r\n            self.free_pages.append(page.page_id)\r\n        self.free_pages.sort()\r\n        del self.page_table[seq_id]\r\n        print(f\"Sequence {seq_id}: freed {len(pages)} pages. \"\r\n              f\"Free pool: {len(self.free_pages)}/{self.total_pages}\")\r\n\r\n    def get_memory_utilization(self) -> float:\r\n        \"\"\"Calculate KV cache utilization percentage.\"\"\"\r\n        used_pages = self.total_pages - len(self.free_pages)\r\n        return used_pages / self.total_pages * 100\r\n\r\n    def print_status(self):\r\n        \"\"\"Print current memory status.\"\"\"\r\n        used = self.total_pages - len(self.free_pages)\r\n        print(f\"\\n=== KV Cache Status ===\")\r\n        print(f\"Total pages: {self.total_pages}\")\r\n        print(f\"Used pages:  {used}\")\r\n        print(f\"Free pages:  {len(self.free_pages)}\")\r\n        print(f\"Utilization: {self.get_memory_utilization():.1f}%\")\r\n        for seq_id, pages in self.allocated.items():\r\n            print(f\"  Seq {seq_id}: {len(pages)} pages \"\r\n                  f\"({sum(p.tokens for p in pages)} tokens)\")\r\n\r\n# Demonstrate PagedAttention memory efficiency\r\nmanager = PagedKVManager(total_pages=128, page_size=16)\r\n\r\n# Sequence A: short (32 tokens)\r\nmanager.allocate_sequence(0, initial_tokens=32)\r\n# Sequence B: medium (128 tokens)\r\nmanager.allocate_sequence(1, initial_tokens=128)\r\n# Sequence C: long (256 tokens)\r\nmanager.allocate_sequence(2, initial_tokens=256)\r\n\r\nmanager.print_status()\r\n\r\n# Sequence A finishes — its pages are freed\r\nmanager.free_sequence(0)\r\n\r\n# Sequence D arrives and reuses freed pages\r\nmanager.allocate_sequence(3, initial_tokens=48)\r\nmanager.print_status()\r\n\r\n# Key insight: PagedAttention reduces KV cache waste from ~60% to ~5%\r\n# Contiguous allocation would waste 100+ pages for uneven sequence lengths\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "continuous-batching",
      children: "Continuous Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional batching waits for N requests to arrive before inference. This adds latency. Continuous batching (also called in-flight batching) updates the batch at every decoding step — finished sequences leave, new sequences join."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant S as Scheduler\r\n    participant E as Engine\r\n    participant R1 as Request 1\r\n    participant R2 as Request 2\r\n    participant R3 as Request 3\r\n\r\n    Note over S,E: Iteration 1 (batch: R1, R2)\r\n    S->>E: Schedule R1 (prefill), R2 (prefill)\r\n    E-->>S: Output tokens: R1=t1, R2=t1\r\n\r\n    Note over S,E: Iteration 2 (batch: R1, R2, R3)\r\n    R3-->>S: Arrives\r\n    S->>E: Schedule R1 (decode), R2 (decode), R3 (prefill)\r\n    E-->>S: Output: R1=t2, R2=t2, R3=t1\r\n\r\n    Note over S,E: Iteration 3 (batch: R2, R3)\r\n    R1-->>S: Finish (EOS)\r\n    S->>E: Schedule R2 (decode), R3 (decode)\r\n    E-->>S: Output: R2=t3, R3=t2\r\n\r\n    Note over S,E: Iteration 4 (batch: R3)\r\n    R2-->>S: Finish\r\n    S->>E: Schedule R3 (decode)\r\n    E-->>S: Output: R3=t3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scheduler decides which requests to include in each step:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Running requests"
        }), " — sequences currently decoding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Waiting requests"
        }), " — newly arrived prompts awaiting prefill"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swapped requests"
        }), " — sequences whose KV cache was offloaded to CPU"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A good scheduler balances three constraints:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory"
        }), ": total KV cache pages allocated < GPU memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency SLO"
        }), ": decode latency stays under target (e.g., 100ms per step)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fairness"
        }), ": no request starves indefinitely"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate continuous batching scheduler\r\nimport time\r\nimport random\r\nfrom collections import deque\r\nfrom dataclasses import dataclass\r\n\r\n@dataclass\r\nclass Request:\r\n    \"\"\"A single inference request.\"\"\"\r\n    id: int\r\n    prompt_tokens: int      # Number of prompt tokens (prefill phase)\r\n    max_gen_tokens: int     # Maximum generation tokens\r\n    arrival_time: float\r\n    tokens_generated: int = 0\r\n    finished: bool = False\r\n\r\n    @property\r\n    def total_tokens(self) -> int:\r\n        return self.prompt_tokens + self.tokens_generated\r\n\r\n@dataclass\r\nclass SchedulerConfig:\r\n    \"\"\"Configuration for continuous batching scheduler.\"\"\"\r\n    max_num_seqs: int = 8           # Max sequences in one batch\r\n    max_num_batched_tokens: int = 4096  # Max tokens per batch iteration\r\n    block_size: int = 16\r\n    gpu_memory_pages: int = 4096\r\n    decode_slo_ms: float = 100.0\r\n\r\nclass ContinuousBatchingScheduler:\r\n    \"\"\"\r\n    Simulate vLLM's continuous batching scheduler.\r\n    Decides at each iteration which requests to run.\r\n    \"\"\"\r\n\r\n    def __init__(self, config: SchedulerConfig):\r\n        self.config = config\r\n        self.running: deque = deque()\r\n        self.waiting: deque = deque()\r\n        self.swapped: deque = deque()\r\n        self.finished: List[Request] = []\r\n        self.iteration = 0\r\n        self.gpu_usage = 0  # Simulated GPU memory usage in pages\r\n\r\n    def add_request(self, prompt_tokens: int, max_gen_tokens: int):\r\n        \"\"\"Add a new request to the waiting queue.\"\"\"\r\n        req = Request(\r\n            id=len(self.finished) + len(self.running) + len(self.waiting) + 1,\r\n            prompt_tokens=prompt_tokens,\r\n            max_gen_tokens=max_gen_tokens,\r\n            arrival_time=time.time(),\r\n        )\r\n        self.waiting.append(req)\r\n\r\n    def _can_allocate(self, req: Request) -> bool:\r\n        \"\"\"Check if we have enough GPU pages for this request.\"\"\"\r\n        needed_pages = (req.prompt_tokens + req.max_gen_tokens + 15) // 16\r\n        return self.gpu_usage + needed_pages <= self.config.gpu_memory_pages\r\n\r\n    def _schedule(self) -> list:\r\n        \"\"\"\r\n        Decide which requests to run in this iteration.\r\n        Returns list of (request, phase) tuples.\r\n        \"\"\"\r\n        batch = []\r\n        total_tokens = 0\r\n\r\n        # First: try to prefill waiting requests\r\n        while self.waiting and len(batch) < self.config.max_num_seqs:\r\n            req = self.waiting[0]\r\n            needed_tokens = req.prompt_tokens\r\n            if total_tokens + needed_tokens <= self.config.max_num_batched_tokens:\r\n                if self._can_allocate(req):\r\n                    self.waiting.popleft()\r\n                    self.running.append(req)\r\n                    batch.append((req, \"prefill\"))\r\n                    total_tokens += needed_tokens\r\n                    pages_needed = (req.prompt_tokens + 15) // 16\r\n                    self.gpu_usage += pages_needed\r\n                else:\r\n                    break\r\n            else:\r\n                break\r\n\r\n        # Then: add running requests for decode\r\n        for req in list(self.running):\r\n            if len(batch) >= self.config.max_num_seqs:\r\n                break\r\n            if req.finished:\r\n                continue\r\n            if total_tokens + 1 <= self.config.max_num_batched_tokens:\r\n                batch.append((req, \"decode\"))\r\n                total_tokens += 1\r\n\r\n        return batch\r\n\r\n    def step(self) -> List[dict]:\r\n        \"\"\"Execute one scheduling iteration.\"\"\"\r\n        self.iteration += 1\r\n        batch = self._schedule()\r\n\r\n        results = []\r\n        for req, phase in batch:\r\n            if phase == \"prefill\":\r\n                # Simulate prefill: process all prompt tokens at once\r\n                tokens_this_step = req.prompt_tokens\r\n            else:\r\n                # Simulate decode: generate one token\r\n                tokens_this_step = 1\r\n                req.tokens_generated += 1\r\n\r\n                # Check if finished\r\n                if req.tokens_generated >= req.max_gen_tokens:\r\n                    req.finished = True\r\n                    self.finished.append(req)\r\n                    self.running.remove(req)\r\n                    # Free KV cache pages\r\n                    pages_freed = (req.total_tokens + 15) // 16\r\n                    self.gpu_usage = max(0, self.gpu_usage - pages_freed)\r\n\r\n            results.append({\r\n                \"req_id\": req.id,\r\n                \"phase\": phase,\r\n                \"tokens\": tokens_this_step,\r\n                \"generated_so_far\": req.tokens_generated if phase == \"decode\" else 0,\r\n            })\r\n\r\n        return results\r\n\r\n    def run_until_complete(self, max_iterations: int = 200):\r\n        \"\"\"Run the scheduler until all requests finish.\"\"\"\r\n        print(f\"{'Iter':<8} {'Batch Size':<12} {'Phase':<12} {'GPU Pages':<12} {'Events':<20}\")\r\n        print(\"=\"*64)\r\n\r\n        for i in range(max_iterations):\r\n            if not self.waiting and not self.running:\r\n                print(f\"\\nAll requests complete after {i} iterations\")\r\n                break\r\n\r\n            results = self.step()\r\n            phases = set(r[\"phase\"] for r in results)\r\n            events = []\r\n            if any(r[\"phase\"] == \"prefill\" for r in results):\r\n                n_prefill = sum(1 for r in results if r[\"phase\"] == \"prefill\")\r\n                events.append(f\"Prefill {n_prefill}\")\r\n            n_finished = sum(1 for r in results if r[\"phase\"] == \"decode\" and r[\"generated_so_far\"] > 0)\r\n            if n_finished:\r\n                events.append(f\"Decode {len(results)}\")\r\n\r\n            print(f\"{i:<8} {len(results):<12} {', '.join(phases):<12} \"\r\n                  f\"{self.gpu_usage:<12} {' | '.join(events):<20}\")\r\n\r\n# Run the simulation\r\nconfig = SchedulerConfig(\r\n    max_num_seqs=4,\r\n    max_num_batched_tokens=2048,\r\n    gpu_memory_pages=512,\r\n)\r\n\r\nscheduler = ContinuousBatchingScheduler(config)\r\n\r\n# Add requests with varying lengths\r\nrequest_lengths = [\r\n    (128, 32),   # 128 prompt tokens, generate 32\r\n    (256, 64),   # 256 prompt, generate 64\r\n    (64, 128),   # 64 prompt, generate 128\r\n    (512, 16),   # 512 prompt, generate 16\r\n    (192, 48),   # 192 prompt, generate 48\r\n    (64, 256),   # 64 prompt, generate 256\r\n]\r\n\r\nfor prompt_tokens, max_gen in request_lengths:\r\n    scheduler.add_request(prompt_tokens, max_gen)\r\n\r\nscheduler.run_until_complete(max_iterations=100)\r\n\r\nprint(f\"\\nTotal requests: {len(scheduler.finished)}\")\r\nprint(f\"Total iterations: {scheduler.iteration}\")\r\navg_latency = sum(r.tokens_generated for r in scheduler.finished) / scheduler.iteration\r\nprint(f\"Average decode steps per iteration: {avg_latency:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-vllm--tensor-parallelism--online-serving",
      children: "1.2 vLLM — Tensor Parallelism & Online Serving"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tensor-parallelism",
      children: "Tensor Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For models larger than a single GPU's memory (e.g., Llama 3 70B at 140 GB FP16), vLLM splits the model across multiple GPUs using tensor parallelism."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each layer's weights are sharded across GPUs. During the forward pass, each GPU computes its shard and communicates partial results via all-reduce."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Layer[\"Transformer Layer — Tensor Parallelism\"]\r\n        direction LR\r\n        GPUA[\"GPU 0<br/>Wq shard 0<br/>Wk shard 0<br/>Wv shard 0<br/>Wo shard 0\"] -->|all-reduce| ALL[\"Fused Output\"]\r\n        GPUB[\"GPU 1<br/>Wq shard 1<br/>Wk shard 1<br/>Wv shard 1<br/>Wo shard 1\"] -->|all-reduce| ALL\r\n        GPUC[\"GPU 2<br/>Wq shard 2<br/>Wk shard 2<br/>Wv shard 2<br/>Wo shard 2\"] -->|all-reduce| ALL\r\n        GPUD[\"GPU 3<br/>Wq shard 3<br/>Wk shard 3<br/>Wv shard 3<br/>Wo shard 3\"] -->|all-reduce| ALL\r\n    end"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication overhead:"
      }), " Each transformer layer requires 4 all-reduce operations (one per Q, K, V, O projection). With high-bandwidth NVLink (900 GB/s), the overhead is small. With PCIe (128 GB/s), it becomes the bottleneck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "online-serving-with-openai-compatible-api",
      children: "Online Serving with OpenAI-Compatible API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vLLM provides an OpenAI-compatible HTTP API. This means any OpenAI client library can work with vLLM by changing the base URL."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# vLLM server setup (runs as a separate process)\r\n# Start with: python -m vllm.entrypoints.openai.api_server \\\r\n#     --model meta-llama/Llama-3.1-8B-Instruct \\\r\n#     --tensor-parallel-size 2 \\\r\n#     --max-model-len 8192 \\\r\n#     --gpu-memory-utilization 0.90\r\n\r\nfrom openai import OpenAI\r\n\r\n# Point client to vLLM server\r\nclient = OpenAI(\r\n    base_url=\"http://localhost:8000/v1\",\r\n    api_key=\"token-abc123\",  # vLLM requires an API key\r\n)\r\n\r\n# Chat completion (streaming)\r\nresponse = client.chat.completions.create(\r\n    model=\"meta-llama/Llama-3.1-8B-Instruct\",\r\n    messages=[\r\n        {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\r\n        {\"role\": \"user\", \"content\": \"Explain attention mechanisms in one sentence.\"},\r\n    ],\r\n    max_tokens=512,\r\n    temperature=0.7,\r\n    stream=True,\r\n)\r\n\r\nprint(\"Response: \", end=\"\")\r\nfor chunk in response:\r\n    if chunk.choices[0].delta.content:\r\n        print(chunk.choices[0].delta.content, end=\"\")\r\nprint()\r\n\r\n# Batch completion (non-streaming)\r\ncompletions = client.completions.create(\r\n    model=\"meta-llama/Llama-3.1-8B-Instruct\",\r\n    prompt=[\r\n        \"What is the capital of France?\",\r\n        \"What is 2 + 2?\",\r\n        \"Explain quantum computing.\",\r\n    ],\r\n    max_tokens=128,\r\n)\r\n\r\nfor i, choice in enumerate(completions.choices):\r\n    print(f\"\\nPrompt {i+1}: {choice.text}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vllm-python-api-server-side",
      children: "vLLM Python API (Server-side)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# vLLM programmatic usage — building a custom server\r\nfrom vllm import LLM, SamplingParams\r\nfrom typing import List\r\n\r\nclass VLLMServingEngine:\r\n    \"\"\"Wrapper around vLLM's LLM engine for programmatic access.\"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        model: str = \"meta-llama/Llama-3.1-8B-Instruct\",\r\n        tensor_parallel_size: int = 1,\r\n        max_model_len: int = 8192,\r\n        gpu_memory_utilization: float = 0.90,\r\n        dtype: str = \"auto\",\r\n    ):\r\n        self.llm = LLM(\r\n            model=model,\r\n            tensor_parallel_size=tensor_parallel_size,\r\n            max_model_len=max_model_len,\r\n            gpu_memory_utilization=gpu_memory_utilization,\r\n            dtype=dtype,\r\n        )\r\n        print(f\"vLLM engine loaded: {model}\")\r\n        print(f\"  Tensor parallel size: {tensor_parallel_size}\")\r\n        print(f\"  Max model length: {max_model_len}\")\r\n        print(f\"  GPU memory utilization: {gpu_memory_utilization}\")\r\n\r\n    def generate(\r\n        self,\r\n        prompts: List[str],\r\n        max_tokens: int = 256,\r\n        temperature: float = 0.7,\r\n        top_p: float = 0.9,\r\n        stop: List[str] = None,\r\n    ) -> List[dict]:\r\n        \"\"\"Generate completions for a list of prompts.\"\"\"\r\n        params = SamplingParams(\r\n            temperature=temperature,\r\n            top_p=top_p,\r\n            max_tokens=max_tokens,\r\n            stop=stop,\r\n        )\r\n        outputs = self.llm.generate(prompts, params)\r\n        results = []\r\n        for output in outputs:\r\n            prompt = output.prompt\r\n            generated_text = output.outputs[0].text\r\n            tokens_generated = len(output.outputs[0].token_ids)\r\n            results.append({\r\n                \"prompt\": prompt,\r\n                \"generated_text\": generated_text,\r\n                \"tokens_generated\": tokens_generated,\r\n                \"finish_reason\": output.outputs[0].finish_reason,\r\n            })\r\n        return results\r\n\r\n    def generate_streaming(\r\n        self,\r\n        prompt: str,\r\n        max_tokens: int = 256,\r\n    ):\r\n        \"\"\"Generate a single completion with streaming output.\"\"\"\r\n        params = SamplingParams(\r\n            temperature=0.0,\r\n            max_tokens=max_tokens,\r\n        )\r\n        # vLLM supports async streaming via AsyncLLM class\r\n        # This is a synchronous simulation\r\n        output = self.llm.generate([prompt], params)[0]\r\n        for token_output in output.outputs[0]:\r\n            yield token_output.text\r\n\r\n    def get_model_info(self) -> dict:\r\n        \"\"\"Return model metadata.\"\"\"\r\n        return {\r\n            \"model\": self.llm.llm_engine.model_config.model,\r\n            \"max_model_len\": self.llm.llm_engine.model_config.max_model_len,\r\n            \"num_gpus\": self.llm.llm_engine.parallel_config.tensor_parallel_size,\r\n            \"dtype\": str(self.llm.llm_engine.model_config.dtype),\r\n        }\r\n\r\n# Usage (requires GPU with sufficient memory)\r\n# engine = VLLMServingEngine(\r\n#     model=\"meta-llama/Llama-3.1-8B-Instruct\",\r\n#     tensor_parallel_size=1,\r\n# )\r\n# results = engine.generate([\r\n#     \"Write a haiku about AI:\",\r\n#     \"Explain gradient descent simply:\",\r\n# ])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-sglang--radixattention",
      children: "2.1 SGLang — RadixAttention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SGLang is a serving framework optimized for structured generation and prefix sharing. Its key innovation is RadixAttention — a radix tree (prefix tree) structure for the KV cache that enables automatic sharing across requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-prefix-sharing-problem",
      children: "The Prefix Sharing Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many LLM workloads share common prefixes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chat systems: all requests start with the system prompt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code assistants: all requests start with the same instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieval-augmented generation: all requests share the same retrieved document prefix"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without prefix sharing, each request independently computes KV cache for the shared prefix. With RadixAttention, the first request computes it and subsequent requests reuse it."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph RL[\"RadixAttention Tree\"]\r\n        ROOT[\"Root (empty)\"] --> P1[\"/system\"]\r\n        ROOT --> P2[\"/different\"]\r\n        P1 --> P1A[\"You are a helpful agent\"]\r\n        P1A --> P1A1[\"User: What is AI?\"]\r\n        P1A --> P1A2[\"User: Explain ML\"]\r\n        P1A1 --> P1A1R[\"[Response: AI is...]\"]\r\n        P1A2 --> P1A2R[\"[Response: ML is...]\"]\r\n    end\r\n    style P1A fill:#4488ff,opacity:0.7\r\n    style P1A1 fill:#44ff44,opacity:0.5\r\n    style P1A2 fill:#44ff44,opacity:0.5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RadixAttention algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each request's prompt is tokenized into a sequence of tokens."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The sequence is inserted into a radix tree. Each node represents a prefix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a new request arrives, the tree is traversed to find the longest matching prefix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The KV cache for the matching prefix is reused — no recomputation needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New tokens are appended as new leaf nodes in the tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When GPU memory runs low, least-recently-used leaf nodes are evicted."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate RadixAttention prefix tree\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Dict, List, Optional, Tuple\r\n\r\n@dataclass\r\nclass RadixNode:\r\n    \"\"\"A node in the RadixAttention prefix tree.\"\"\"\r\n    prefix: Tuple[int, ...]      # Token IDs forming this prefix\r\n    kv_cache: Optional[object] = None  # Reference to cached K,V tensors\r\n    children: Dict[int, 'RadixNode'] = field(default_factory=dict)\r\n    parent: Optional['RadixNode'] = None\r\n    access_count: int = 0\r\n    last_access: float = 0.0\r\n\r\nclass RadixAttentionTree:\r\n    \"\"\"\r\n    Radix tree for KV cache prefix sharing.\r\n    Enables automatic reuse of KV cache across requests with common prefixes.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.root = RadixNode(prefix=())\r\n        self.node_count = 1\r\n        self.cache_hits = 0\r\n        self.cache_misses = 0\r\n\r\n    def insert(self, token_ids: Tuple[int, ...]) -> Tuple[RadixNode, int]:\r\n        \"\"\"\r\n        Insert a sequence into the radix tree.\r\n        Returns the deepest matching node and number of new tokens added.\r\n        \"\"\"\r\n        current = self.root\r\n        matching_depth = 0\r\n\r\n        # Traverse tree to find longest matching prefix\r\n        while matching_depth < len(token_ids):\r\n            next_token = token_ids[matching_depth]\r\n            if next_token in current.children:\r\n                child = current.children[next_token]\r\n                child_prefix = child.prefix\r\n\r\n                # Find how many tokens match in this edge\r\n                match_len = 0\r\n                while (matching_depth + match_len < len(token_ids)\r\n                       and match_len < len(child_prefix)\r\n                       and token_ids[matching_depth + match_len] == child_prefix[match_len]):\r\n                    match_len += 1\r\n\r\n                if match_len == len(child_prefix):\r\n                    # Full edge match — move to child\r\n                    current = child\r\n                    matching_depth += match_len\r\n                    child.access_count += 1\r\n                elif match_len > 0:\r\n                    # Partial match — split the edge\r\n                    self._split_edge(current, child, match_len)\r\n                    current = child\r\n                    matching_depth += match_len\r\n                else:\r\n                    break\r\n            else:\r\n                break\r\n\r\n        # Insert remaining tokens as new nodes\r\n        new_tokens = 0\r\n        while matching_depth < len(token_ids):\r\n            # Find longest new prefix to add\r\n            remaining = token_ids[matching_depth:]\r\n            new_node = RadixNode(\r\n                prefix=remaining,\r\n                parent=current,\r\n            )\r\n            current.children[remaining[0]] = new_node\r\n            current = new_node\r\n            self.node_count += 1\r\n            new_tokens += len(remaining)\r\n            matching_depth = len(token_ids)\r\n\r\n        if new_tokens == 0:\r\n            self.cache_hits += 1\r\n        else:\r\n            self.cache_misses += 1\r\n\r\n        return current, new_tokens\r\n\r\n    def _split_edge(self, parent: RadixNode, child: RadixNode, split_at: int):\r\n        \"\"\"Split a child node's prefix at split_at position.\"\"\"\r\n        old_prefix = child.prefix\r\n        # Create intermediate node\r\n        shared_part = old_prefix[:split_at]\r\n        remaining_part = old_prefix[split_at:]\r\n\r\n        intermediate = RadixNode(\r\n            prefix=shared_part,\r\n            parent=parent,\r\n            children={remaining_part[0]: child},\r\n        )\r\n        child.prefix = remaining_part\r\n        child.parent = intermediate\r\n        parent.children[shared_part[0]] = intermediate\r\n\r\n    def find_longest_prefix(self, token_ids: Tuple[int, ...]) -> Tuple[RadixNode, int]:\r\n        \"\"\"\r\n        Find the longest matching prefix in the tree.\r\n        Returns (node, depth_matched).\r\n        \"\"\"\r\n        current = self.root\r\n        depth = 0\r\n\r\n        while depth < len(token_ids):\r\n            next_token = token_ids[depth]\r\n            if next_token not in current.children:\r\n                break\r\n            child = current.children[next_token]\r\n            child_prefix = child.prefix\r\n            # Check full edge\r\n            if (depth + len(child_prefix) <= len(token_ids)\r\n                    and token_ids[depth:depth + len(child_prefix)] == child_prefix):\r\n                depth += len(child_prefix)\r\n                current = child\r\n            else:\r\n                # Partial match\r\n                match_len = 0\r\n                while (depth + match_len < len(token_ids)\r\n                       and match_len < len(child_prefix)\r\n                       and token_ids[depth + match_len] == child_prefix[match_len]):\r\n                    match_len += 1\r\n                depth += match_len\r\n                break\r\n\r\n        return current, depth\r\n\r\n    def evict_lru(self, target_nodes: int = 1) -> int:\r\n        \"\"\"Evict least-recently-used leaf nodes. Returns count evicted.\"\"\"\r\n        def get_leaves(node: RadixNode) -> List[RadixNode]:\r\n            if not node.children:\r\n                return [node]\r\n            leaves = []\r\n            for child in node.children.values():\r\n                leaves.extend(get_leaves(child))\r\n            return leaves\r\n\r\n        leaves = get_leaves(self.root)\r\n        # Sort by access count (ascending) — simplest eviction policy\r\n        leaves.sort(key=lambda n: n.access_count)\r\n        evicted = 0\r\n        for leaf in leaves[:target_nodes]:\r\n            if leaf.parent:\r\n                del leaf.parent.children[leaf.prefix[0]]\r\n                self.node_count -= 1\r\n                evicted += 1\r\n        return evicted\r\n\r\n    def print_tree(self, node: Optional[RadixNode] = None, depth: int = 0):\r\n        \"\"\"Print the radix tree structure.\"\"\"\r\n        if node is None:\r\n            node = self.root\r\n            print(\"RadixAttention Tree:\")\r\n        \r\n        # Convert token IDs to readable form when possible\r\n        if node.prefix:\r\n            prefix_str = f\"tokens={node.prefix[:8]}...\"\r\n        else:\r\n            prefix_str = \"root\"\r\n        \r\n        hits = \"HIT\" if node.access_count > 0 else \"\"\r\n        print(f\"{'  ' * depth}├─ {prefix_str} [access: {node.access_count}] {hits}\")\r\n        \r\n        for child in node.children.values():\r\n            self.print_tree(child, depth + 1)\r\n\r\n    def get_stats(self) -> dict:\r\n        \"\"\"Return statistics about the radix tree.\"\"\"\r\n        return {\r\n            \"nodes\": self.node_count,\r\n            \"cache_hits\": self.cache_hits,\r\n            \"cache_misses\": self.cache_misses,\r\n            \"hit_rate\": self.cache_hits / max(1, self.cache_hits + self.cache_misses) * 100,\r\n        }\r\n\r\n# Demonstrate prefix sharing\r\ntree = RadixAttentionTree()\r\n\r\n# Four requests with overlapping prefixes\r\nconversations = [\r\n    # System prompt shared by all\r\n    (1, 2, 3, 4, 5, 10, 11, 12, 13),      # Request 1: system + \"what is AI?\"\r\n    (1, 2, 3, 4, 5, 14, 15, 16, 17),      # Request 2: system + \"explain ML\"\r\n    (1, 2, 3, 4, 5, 6, 7, 18, 19, 20),    # Request 3: system + \"write code\"\r\n    (1, 2, 3, 4, 5, 10, 11, 21, 22),      # Request 4: system + \"what is AI?\" follow-up\r\n]\r\n\r\nfor i, tokens in enumerate(conversations):\r\n    node, new_tokens = tree.insert(tokens)\r\n    print(f\"Request {i+1}: {len(tokens)} tokens, \"\r\n          f\"new KV tokens: {new_tokens}, \"\r\n          f\"saved: {len(tokens) - new_tokens}\")\r\n\r\nprint(f\"\\nStats: {tree.get_stats()}\")\r\nprint(f\"Total tokens processed: {sum(len(t) for t in conversations)}\")\r\nprint(f\"New KV tokens computed: {sum(len(t) for t in conversations) - tree.cache_misses}\")\r\n\r\n# Key result: with prefix sharing, the system prompt (tokens 1-5) is computed once\r\n# Subsequent requests save 5 tokens of KV cache computation each\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-sglang--structured-generation--constrained-decoding",
      children: "2.2 SGLang — Structured Generation & Constrained Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SGLang's primary differentiator is structured generation. It allows developers to specify the output format using a grammar or schema, and the decoder ensures the output matches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "constrained-decoding-with-regex",
      children: "Constrained Decoding with Regex"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# SGLang programmatic API example\r\n# Requires: pip install sglang[all]\r\n\r\nimport sglang as sgl\r\nfrom sglang import function, gen, set_default_backend, Runtime\r\n\r\n# Define a structured generation function\r\n@sgl.function\r\ndef extract_info(s, text: str):\r\n    \"\"\"Extract structured information from text.\"\"\"\r\n    s += text\r\n    s += \"Extract the following:\\n\"\r\n    s += \"Name: \" + gen(\"name\", max_tokens=20, stop=\"\\n\")\r\n    s += \"Age: \" + gen(\"age\", max_tokens=5, stop=\"\\n\", regex=\"\\\\d+\")\r\n    s += \"Occupation: \" + gen(\"occupation\", max_tokens=30, stop=\"\\n\")\r\n    s += \"Email: \" + gen(\"email\", max_tokens=40, stop=\"\\n\",\r\n                         regex=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}\")\r\n    return s\r\n\r\n# Generate JSON output with regex constraints\r\n@sgl.function\r\ndef generate_json(s, instruction: str):\r\n    \"\"\"Generate a JSON object with constrained decoding.\"\"\"\r\n    s += instruction + \"\\n\"\r\n    s += \"```json\\n\"\r\n    s += \"{\\n\"\r\n    s += '  \"name\": \"' + gen(\"name\", max_tokens=30, stop='\"') + '\",\\n'\r\n    s += '  \"value\": ' + gen(\"value\", max_tokens=10, stop=\",\", regex=\"-?\\\\d+\\\\.?\\\\d*\") + ',\\n'\r\n    s += '  \"active\": ' + gen(\"active\", max_tokens=5, stop=\",\", regex=\"true|false\") + ',\\n'\r\n    s += '  \"tags\": ' + gen(\"tags\", max_tokens=100, stop=\"\\n\") + '\\n'\r\n    s += \"}\\n\"\r\n    s += \"```\\n\"\r\n    return s\r\n\r\n# Run with local runtime\r\n# runtime = Runtime(\r\n#     model_path=\"meta-llama/Llama-3.1-8B-Instruct\",\r\n#     tp_size=1,\r\n# )\r\n# set_default_backend(runtime)\r\n\r\n# result = extract_info.run(\r\n#     text=\"John Doe is a 28-year-old software engineer at johndoe@company.com\"\r\n# )\r\n# print(result[\"name\"])      # \"John Doe\"\r\n# print(result[\"age\"])       # \"28\"\r\n# print(result[\"occupation\"]) # \"software engineer\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "grammar-constrained-generation",
      children: "Grammar-Constrained Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SGLang supports full grammar-based generation using context-free grammars (CFG). This is useful for producing valid SQL, code, or structured data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Grammar-constrained generation in SGLang\r\n\r\n# Generate valid SQL queries\r\nsql_grammar = \"\"\"\r\n?start: select_statement\r\nselect_statement: \"SELECT\" column_list \"FROM\" table_name where_clause?\r\ncolumn_list: column (\",\" column)*\r\ncolumn: \"name\" | \"age\" | \"email\" | \"id\" | \"COUNT(*)\"\r\ntable_name: \"users\" | \"orders\" | \"products\" | \"transactions\"\r\nwhere_clause: \"WHERE\" condition\r\ncondition: column operator value\r\noperator: \"=\" | \">\" | \"<\" | \">=\" | \"<=\" | \"LIKE\"\r\nvalue: NUMBER | STRING\r\nNUMBER: /\\\\d+/\r\nSTRING: /'[^']*'/\r\n\"\"\"\r\n\r\n# In SGLang, constrained decoding is built into the gen() call\r\n# The framework handles logit masking to enforce grammar compliance\r\n\r\n@sgl.function\r\ndef sql_generator(s, question: str):\r\n    \"\"\"Generate a SQL query from a natural language question.\"\"\"\r\n    s += f\"Question: {question}\\n\"\r\n    s += \"SQL query: SELECT \" + gen(\"columns\", max_tokens=50, stop=\"FROM\") + \" \"\r\n    s += \"FROM \" + gen(\"table\", max_tokens=20, stop=\"WHERE\", regex=\"users|orders|products\")\r\n    s += \" WHERE \" + gen(\"condition\", max_tokens=50, stop=\";\") + \";\"\r\n    return s\r\n\r\n# Each gen() call applies logit filtering to ensure the output\r\n# matches the specified regex or grammar pattern at every decoding step\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "constrained-decoding-implementation",
      children: "Constrained Decoding Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The core mechanism of constrained decoding is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logit masking"
      }), ". At each decoding step, the framework computes which tokens are valid according to the constraint and masks out invalid tokens before sampling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate constrained decoding with logit masking\r\nimport numpy as np\r\nfrom typing import List, Set\r\n\r\nclass ConstrainedDecoder:\r\n    \"\"\"\r\n    Simulate constrained decoding with regex-based logit masking.\r\n    Demonstrates how constrained generation works under the hood.\r\n    \"\"\"\r\n\r\n    def __init__(self, vocabulary: List[str]):\r\n        self.vocab = vocabulary\r\n        self.vocab_size = len(vocabulary)\r\n\r\n    def _build_regex_mask(self, current_text: str, regex_pattern: str) -> np.ndarray:\r\n        \"\"\"\r\n        Build a boolean mask for valid tokens given the current text and regex.\r\n        A token is valid if current_text + token matches the regex prefix.\r\n        \"\"\"\r\n        import re\r\n        mask = np.ones(self.vocab_size, dtype=bool)\r\n        for i, token in enumerate(self.vocab):\r\n            candidate = current_text + token\r\n            # Check if candidate is a valid prefix of the regex\r\n            try:\r\n                if re.match(regex_pattern, candidate):\r\n                    mask[i] = True\r\n                else:\r\n                    # Also allow partial matches (for multi-token sequences)\r\n                    partial = re.compile(f\"^{re.escape(candidate)}\")\r\n                    if partial.match(candidate):\r\n                        mask[i] = True\r\n                    else:\r\n                        mask[i] = False\r\n            except re.error:\r\n                mask[i] = False\r\n        return mask\r\n\r\n    def _build_json_mask(self, current_text: str, schema: dict) -> np.ndarray:\r\n        \"\"\"\r\n        Build a mask for JSON schema constraints.\r\n        Validates that the current output conforms to the schema.\r\n        \"\"\"\r\n        mask = np.ones(self.vocab_size, dtype=bool)\r\n        # Simplified: check if adding the token would break JSON structure\r\n        for i, token in enumerate(self.vocab):\r\n            candidate = current_text + token\r\n            # Basic checks: balanced quotes, valid JSON prefix\r\n            quote_count = candidate.count('\"')\r\n            if quote_count % 2 != 0 and token == '\"':\r\n                # Check if closing an unopened quote\r\n                if current_text.count('\"') % 2 == 0:\r\n                    mask[i] = True\r\n                else:\r\n                    mask[i] = True  # Allow closing quote\r\n            elif token in ('{', '}', '[', ']', ':', ','):\r\n                mask[i] = True  # Structural characters always valid\r\n            elif quote_count % 2 == 1:\r\n                mask[i] = True  # Inside a string — anything goes\r\n            else:\r\n                # Outside string — only structural chars and whitespace\r\n                if token.strip() in ('', '{', '}', '[', ']', ':', ','):\r\n                    mask[i] = True\r\n                else:\r\n                    mask[i] = False\r\n        return mask\r\n\r\n    def constrained_sample(\r\n        self,\r\n        logits: np.ndarray,\r\n        current_text: str,\r\n        constraint_type: str = \"json\",\r\n        schema: dict = None,\r\n    ) -> str:\r\n        \"\"\"Sample a token subject to constraints.\"\"\"\r\n        if constraint_type == \"json\":\r\n            mask = self._build_json_mask(current_text, schema or {})\r\n        elif constraint_type == \"regex\":\r\n            mask = self._build_regex_mask(current_text, schema or \".*\")\r\n        else:\r\n            mask = np.ones(self.vocab_size, dtype=bool)\r\n\r\n        # Apply mask (set invalid logits to -inf)\r\n        masked_logits = np.where(mask, logits, -np.inf)\r\n\r\n        # Sample from masked distribution\r\n        probs = np.exp(masked_logits - np.max(masked_logits))\r\n        probs = probs / np.sum(probs)\r\n        sampled_idx = np.random.choice(self.vocab_size, p=probs)\r\n        return self.vocab[sampled_idx]\r\n\r\n    def generate_constrained(\r\n        self,\r\n        logits_generator,\r\n        constraint_type: str = \"json\",\r\n        max_tokens: int = 50,\r\n    ):\r\n        \"\"\"Generate a sequence with constrained decoding.\"\"\"\r\n        output = \"\"\r\n        for step in range(max_tokens):\r\n            logits = logits_generator(output)\r\n            token = self.constrained_sample(\r\n                logits, output, constraint_type\r\n            )\r\n            output += token\r\n            # Check for termination\r\n            if constraint_type == \"json\" and output.strip().endswith(\"}\"):\r\n                break\r\n        return output\r\n\r\n# Demonstration with a small vocabulary\r\nvocab = [chr(i) for i in range(32, 127)]  # Printable ASCII\r\ndecoder = ConstrainedDecoder(vocab)\r\n\r\ndef dummy_logits(text: str) -> np.ndarray:\r\n    \"\"\"Dummy logits generator — uniform distribution.\"\"\"\r\n    return np.zeros(len(vocab))\r\n\r\n# Generate constrained JSON\r\njson_output = decoder.generate_constrained(\r\n    dummy_logits,\r\n    constraint_type=\"json\",\r\n    max_tokens=100,\r\n)\r\nprint(f\"Constrained JSON output:\\n{json_output}\")\r\n\r\n# Key insight: constrained decoding uses logit masking\r\n# to guarantee output format compliance at every step\r\n# This eliminates the need for post-processing or retries\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "30-hugging-face-tgi",
      children: "3.0 Hugging Face TGI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hugging Face Text Generation Inference (TGI) is a production-grade serving solution from Hugging Face. It supports quantization, streaming, and watermarking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph TGI[\"TGI Architecture\"]\r\n        R[Router] --> S1[Shard 0<br/>Model Parallel]\r\n        R --> S2[Shard 1]\r\n        R --> SN[Shard N]\r\n    end\r\n    subgraph Features[\"Key Features\"]\r\n        Q[Quantization<br/>GPTQ/AWQ/FP8]\r\n        SS[SSE Streaming]\r\n        WM[Watermarking<br/>AEGIS/KGW]\r\n        CB[Continuous Batching]\r\n    end\r\n    subgraph Input[\"Input Processing\"]\r\n        TOK[Tokenization]\r\n        TR[Truncation]\r\n    end\r\n    TOK --> R\r\n    R --> SS\r\n    Q --> S1\r\n    CB --> S1\r\n    WM --> S1"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "server-sent-events-sse-streaming",
      children: "Server-Sent Events (SSE) Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TGI uses SSE to stream tokens one at a time over HTTP. This gives users sub-100ms time-to-first-token."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TGI client example — streaming with SSE\r\nimport json\r\nimport requests\r\n\r\ndef tgi_streaming_chat(\r\n    messages: list,\r\n    model_url: str = \"http://localhost:8080\",\r\n    max_tokens: int = 512,\r\n    temperature: float = 0.7,\r\n):\r\n    \"\"\"\r\n    Send a chat request to TGI and stream the response.\r\n    TGI uses Server-Sent Events (SSE) for streaming.\r\n    \"\"\"\r\n    # Format prompt for chat model\r\n    prompt = \"\"\r\n    for msg in messages:\r\n        if msg[\"role\"] == \"system\":\r\n            prompt += f\"<|system|>\\n{msg['content']}\\n\"\r\n        elif msg[\"role\"] == \"user\":\r\n            prompt += f\"<|user|>\\n{msg['content']}\\n\"\r\n        elif msg[\"role\"] == \"assistant\":\r\n            prompt += f\"<|assistant|>\\n{msg['content']}\\n\"\r\n    prompt += \"<|assistant|>\\n\"\r\n\r\n    payload = {\r\n        \"inputs\": prompt,\r\n        \"parameters\": {\r\n            \"max_new_tokens\": max_tokens,\r\n            \"temperature\": temperature,\r\n            \"top_p\": 0.9,\r\n            \"do_sample\": True,\r\n            \"watermark\": True,  # Enable AEGIS watermarking\r\n        },\r\n        \"stream\": True,  # Enable SSE streaming\r\n    }\r\n\r\n    response = requests.post(\r\n        f\"{model_url}/generate_stream\",\r\n        json=payload,\r\n        stream=True,\r\n    )\r\n\r\n    full_text = \"\"\r\n    for line in response.iter_lines():\r\n        if line:\r\n            line = line.decode(\"utf-8\")\r\n            if line.startswith(\"data:\"):\r\n                data = json.loads(line[5:])\r\n                if \"token\" in data and \"text\" in data[\"token\"]:\r\n                    token_text = data[\"token\"][\"text\"]\r\n                    full_text += token_text\r\n                    yield token_text\r\n\r\n    return full_text\r\n\r\n# Example usage (requires running TGI server)\r\n# for token in tgi_streaming_chat([\r\n#     {\"role\": \"system\", \"content\": \"You are a helpful AI assistant.\"},\r\n#     {\"role\": \"user\", \"content\": \"Write a short poem about AI.\"},\r\n# ]):\r\n#     print(token, end=\"\", flush=True)\r\n\r\n# Non-streaming request\r\ndef tgi_generate(\r\n    prompt: str,\r\n    model_url: str = \"http://localhost:8080\",\r\n    max_tokens: int = 256,\r\n):\r\n    \"\"\"Send a non-streaming generation request.\"\"\"\r\n    payload = {\r\n        \"inputs\": prompt,\r\n        \"parameters\": {\r\n            \"max_new_tokens\": max_tokens,\r\n            \"temperature\": 0.0,\r\n            \"do_sample\": False,\r\n        },\r\n    }\r\n    response = requests.post(\r\n        f\"{model_url}/generate\",\r\n        json=payload,\r\n    )\r\n    return response.json()[\"generated_text\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "quantization-support",
      children: "Quantization Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TGI supports multiple quantization methods for reducing memory footprint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TGI server startup with quantization\r\n# Start with quantization:\r\n# text-generation-launcher \\\r\n#     --model-id meta-llama/Llama-3.1-8B-Instruct \\\r\n#     --quantize awq \\\r\n#     --max-input-length 4096 \\\r\n#     --max-total-tokens 8192\r\n\r\n# Supported quantizations:\r\nquantization_options = {\r\n    \"awq\": {\r\n        \"description\": \"Activation-Aware Weight Quantization (INT4)\",\r\n        \"memory_reduction\": \"4x vs FP16\",\r\n        \"speed\": \"0.9x - 1.0x\",\r\n        \"use_case\": \"Best for GPU memory constrained deployments\",\r\n    },\r\n    \"gptq\": {\r\n        \"description\": \"GPT Post-Training Quantization (INT4/INT3)\",\r\n        \"memory_reduction\": \"4x vs FP16\",\r\n        \"speed\": \"0.85x - 0.95x\",\r\n        \"use_case\": \"When throughput is less critical than memory\",\r\n    },\r\n    \"fp8\": {\r\n        \"description\": \"8-bit floating point (H100 only)\",\r\n        \"memory_reduction\": \"2x vs FP16\",\r\n        \"speed\": \"1.2x - 1.5x\",\r\n        \"use_case\": \"Best performance on H100 with minimal accuracy loss\",\r\n    },\r\n    \"bitsandbytes\": {\r\n        \"description\": \"8-bit/4-bit via bitsandbytes library\",\r\n        \"memory_reduction\": \"2x - 4x\",\r\n        \"speed\": \"0.7x - 0.9x\",\r\n        \"use_case\": \"Quick quantization without calibration data\",\r\n    },\r\n}\r\n\r\nprint(\"TGI Quantization Options:\")\r\nprint(\"=\"*60)\r\nfor qname, qinfo in quantization_options.items():\r\n    print(f\"\\n{qname.upper()}:\")\r\n    print(f\"  {qinfo['description']}\")\r\n    print(f\"  Memory: {qinfo['memory_reduction']}\")\r\n    print(f\"  Speed:  {qinfo['speed']}\")\r\n    print(f\"  Use:    {qinfo['use_case']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "watermarking",
      children: "Watermarking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TGI supports AEGIS watermarking — a statistical watermark embedded in generated text that allows detection of AI-generated content."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Watermarking in TGI\r\nclass WatermarkDetector:\r\n    \"\"\"Simulate TGI's watermark detection.\"\"\"\r\n\r\n    def __init__(self, watermark_key: int = 42):\r\n        self.key = watermark_key\r\n        self.vocab_size = 32000\r\n\r\n    def _token_statistic(self, token_id: int, position: int) -> float:\r\n        \"\"\"Compute a pseudo-random statistic based on token and position.\"\"\"\r\n        import hashlib\r\n        seed = f\"{self.key}:{position}:{token_id}\"\r\n        hash_val = int(hashlib.sha256(seed.encode()).hexdigest(), 16)\r\n        return (hash_val % 1000) / 1000.0\r\n\r\n    def detect_watermark(\r\n        self,\r\n        token_ids: list,\r\n        max_tokens: int = 100,\r\n    ) -> dict:\r\n        \"\"\"\r\n        Detect if the text was generated with AEGIS watermark.\r\n        Returns score and z-value.\r\n        \"\"\"\r\n        green_count = 0\r\n        total = min(len(token_ids), max_tokens)\r\n\r\n        for pos in range(total):\r\n            stat = self._token_statistic(token_ids[pos], pos)\r\n            # Green list tokens have statistic > 0.5\r\n            if stat > 0.5:\r\n                green_count += 1\r\n\r\n        # Expected green rate without watermark: 50%\r\n        expected = total * 0.5\r\n        std_dev = (total * 0.5 * 0.5) ** 0.5\r\n        z_score = (green_count - expected) / max(std_dev, 1)\r\n\r\n        return {\r\n            \"green_tokens\": green_count,\r\n            \"total_tokens\": total,\r\n            \"green_ratio\": green_count / max(total, 1),\r\n            \"z_score\": z_score,\r\n            \"watermarked\": z_score > 4.0,  # Threshold for detection\r\n        }\r\n\r\n# Demonstrate watermark detection\r\ndetector = WatermarkDetector(watermark_key=42)\r\n\r\n# Simulate watermarked text (more green-list tokens)\r\nwatermarked_tokens = [100 + (i % 256) for i in range(200)]\r\nresult = detector.detect_watermark(watermarked_tokens)\r\nprint(\"Watermark Detection Result:\")\r\nprint(f\"  Green tokens: {result['green_tokens']}/{result['total_tokens']}\")\r\nprint(f\"  Green ratio: {result['green_ratio']:.3f}\")\r\nprint(f\"  Z-score: {result['z_score']:.2f}\")\r\nprint(f\"  Watermarked: {result['watermarked']}\")\r\n\r\n# Key insight: AEGIS watermark embeds a statistical signal\r\n# that survives text transformation (subsampling, rephrasing)\r\n# but is invisible to human readers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tgi-configuration",
      children: "TGI Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TGI server configuration parameters\r\ntgi_config = {\r\n    \"model_id\": \"meta-llama/Llama-3.1-8B-Instruct\",\r\n    \"quantize\": \"awq\",               # Quantization method\r\n    \"max_batch_prefill_tokens\": 4096,  # Max tokens in prefill batch\r\n    \"max_batch_total_tokens\": 8192,    # Max tokens across all sequences\r\n    \"max_input_length\": 4096,          # Max input prompt length\r\n    \"max_total_tokens\": 8192,          # Max input + generation length\r\n    \"waiting_served_ratio\": 0.3,       # Ratio of waiting vs running requests\r\n    \"max_waiting_tokens\": 20,          # Max tokens a request waits before decode\r\n    \"cuda_graphs\": True,               # Enable CUDA graph capture for speed\r\n    \"rope_scaling\": None,              # RoPE scaling for extended contexts\r\n    \"watermark\": True,                 # Enable AEGIS watermarking\r\n    \"hostname\": \"0.0.0.0\",\r\n    \"port\": 8080,\r\n    \"sharded\": False,                  # Enable tensor parallelism\r\n    \"num_shard\": 1,                    # Number of GPU shards\r\n}\r\n\r\nprint(\"TGI Server Configuration:\")\r\nfor key, value in tgi_config.items():\r\n    print(f\"  {key}: {value}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "40-triton-inference-server",
      children: "4.0 Triton Inference Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA Triton Inference Server is a multi-framework inference server supporting TensorRT, ONNX, PyTorch, TensorFlow, and custom backends. It excels at model management, ensemble pipelining, and concurrent execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "model-repository-structure",
      children: "Model Repository Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triton requires a specific file system layout for model storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Repo[\"Model Repository\"]\r\n        SUB[model_repository/]\r\n        SUB --> M1[llama_70b/]\r\n        M1 --> M1_V1[1/]\r\n        M1_V1 --> M1_CFG[config.pbtxt]\r\n        M1_V1 --> M1_ENG[model.plan]\r\n        \r\n        SUB --> M2[bge_embedding/]\r\n        M2 --> M2_V1[1/]\r\n        M2_V1 --> M2_CFG[config.pbtxt]\r\n        M2_V1 --> M2_ONNX[model.onnx]\r\n        \r\n        SUB --> M3[ensemble_pipeline/]\r\n        M3 --> M3_V1[1/]\r\n        M3_V1 --> M3_CFG[config.pbtxt]\r\n        \r\n        SUB --> M4[tokenizer_add/]\r\n        M4 --> M4_V1[1/]\r\n        M4 --> M4_CFG[config.pbtxt]\r\n    end"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each model directory contains versioned subdirectories (1/, 2/, ...) with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config.pbtxt"
      }), " and the model file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-protobuf",
        children: "# config.pbtxt for a Triton model\r\n# This defines the model's input/output shapes, backend, and scheduling\r\n\r\nname: \"llama_70b\"\r\nbackend: \"tensorrtllm\"\r\n\r\nmax_batch_size: 0  # Disable automatic batching — use TRT-LLM's batching\r\n\r\ninput [\r\n  {\r\n    name: \"input_ids\"\r\n    data_type: TYPE_INT32\r\n    dims: [-1]  # Variable-length sequence\r\n  },\r\n  {\r\n    name: \"input_lengths\"\r\n    data_type: TYPE_INT32\r\n    dims: [1]\r\n  },\r\n  {\r\n    name: \"request_output_len\"\r\n    data_type: TYPE_INT32\r\n    dims: [1]\r\n  }\r\n]\r\n\r\noutput [\r\n  {\r\n    name: \"output_ids\"\r\n    data_type: TYPE_INT32\r\n    dims: [-1, -1]  # batch_size x seq_len\r\n  }\r\n]\r\n\r\ninstance_group [\r\n  {\r\n    count: 2  # Two model instances on different GPUs\r\n    kind: KIND_GPU\r\n    gpus: [0, 1]\r\n  }\r\n]\r\n\r\ndynamic_batching {\r\n  max_queue_delay_microseconds: 100\r\n  preferred_batch_size: [1, 2, 4, 8]\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dynamic-batching",
      children: "Dynamic Batching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triton automatically batches incoming requests. The scheduler waits for up to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_queue_delay"
      }), " or until it forms a batch of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "preferred_batch_size"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate Triton's dynamic batching behavior\r\nimport time\r\nimport random\r\nfrom collections import deque\r\nfrom dataclasses import dataclass\r\n\r\n@dataclass\r\nclass TritonRequest:\r\n    \"\"\"A request arriving at Triton.\"\"\"\r\n    id: int\r\n    arrival_time: float\r\n    batch_size: int = 1  # Effective batch contribution\r\n\r\nclass DynamicBatcher:\r\n    \"\"\"\r\n    Simulate Triton's dynamic batching scheduler.\r\n    Waits up to max_delay_ms to form a batch.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        preferred_batch_size: int = 8,\r\n        max_delay_ms: int = 100,\r\n        max_queue_size: int = 64,\r\n    ):\r\n        self.preferred_batch_size = preferred_batch_size\r\n        self.max_delay_s = max_delay_ms / 1000.0\r\n        self.max_queue_size = max_queue_size\r\n        self.queue: deque = deque()\r\n        self.batches_formed = 0\r\n        self.total_requests = 0\r\n        self.total_latency = 0.0\r\n\r\n    def enqueue(self, request: TritonRequest):\r\n        \"\"\"Add a request to the queue.\"\"\"\r\n        if len(self.queue) >= self.max_queue_size:\r\n            return False  # Queue full — reject\r\n        self.queue.append(request)\r\n        self.total_requests += 1\r\n        return True\r\n\r\n    def form_batch(self) -> list:\r\n        \"\"\"\r\n        Form a batch from queued requests.\r\n        Returns list of requests to process.\r\n        \"\"\"\r\n        now = time.time()\r\n        batch = []\r\n\r\n        # Wait until preferred size or timeout\r\n        while self.queue:\r\n            req = self.queue[0]\r\n\r\n            # Check timeout for the oldest request\r\n            wait_time = (now - req.arrival_time)\r\n\r\n            if wait_time >= self.max_delay_s:\r\n                # Timeout — form batch with whatever we have\r\n                while self.queue:\r\n                    batch.append(self.queue.popleft())\r\n                break\r\n            elif len(batch) >= self.preferred_batch_size:\r\n                # Reached preferred batch size — process now\r\n                break\r\n            else:\r\n                # Take the next request\r\n                batch.append(self.queue.popleft())\r\n\r\n        if batch:\r\n            self.batches_formed += 1\r\n            # Compute average wait time for this batch\r\n            avg_wait = sum(now - r.arrival_time for r in batch) / len(batch)\r\n            self.total_latency += avg_wait\r\n\r\n        return batch\r\n\r\n    def simulate_requests(\r\n        self,\r\n        num_requests: int = 100,\r\n        arrival_rate: float = 50.0,  # Requests per second\r\n    ):\r\n        \"\"\"Simulate a stream of incoming requests.\"\"\"\r\n        print(f\"{'Request':<10} {'Arrival':<12} {'Batch Size':<12} {'Wait (ms)':<12}\")\r\n        print(\"=\"*46)\r\n\r\n        arrivals = []\r\n        current_time = 0.0\r\n        for i in range(num_requests):\r\n            # Exponential inter-arrival times\r\n            inter_arrival = random.expovariate(arrival_rate)\r\n            current_time += inter_arrival\r\n            arrivals.append(current_time)\r\n\r\n        for i, arr_time in enumerate(arrivals):\r\n            req = TritonRequest(id=i, arrival_time=arr_time)\r\n            self.enqueue(req)\r\n\r\n            # Try to form a batch\r\n            batch = self.form_batch()\r\n            if batch:\r\n                wait_ms = (time.time() - batch[0].arrival_time) * 1000\r\n                print(f\"{batch[0].id:<10} {arr_time:<12.4f} \"\r\n                      f\"{len(batch):<12} {wait_ms:<12.2f}\")\r\n\r\n        # Process remaining queue\r\n        remaining = list(self.queue)\r\n        if remaining:\r\n            batch_time = time.time()\r\n            wait_ms = (batch_time - remaining[0].arrival_time) * 1000\r\n            print(f\"{remaining[0].id:<10} {arrivals[-1]:<12.4f} \"\r\n                  f\"{len(remaining):<12} {wait_ms:<12.2f}\")\r\n\r\n        print(f\"\\nStatistics:\")\r\n        print(f\"  Batches formed: {self.batches_formed}\")\r\n        print(f\"  Total requests: {self.total_requests}\")\r\n        avg_batch = self.total_requests / max(self.batches_formed, 1)\r\n        print(f\"  Avg batch size: {avg_batch:.1f}\")\r\n        avg_lat = self.total_latency / max(self.batches_formed, 1) * 1000\r\n        print(f\"  Avg queue latency: {avg_lat:.2f} ms\")\r\n\r\n# Run simulation\r\nbatcher = DynamicBatcher(\r\n    preferred_batch_size=8,\r\n    max_delay_ms=100,\r\n)\r\nbatcher.simulate_requests(num_requests=50, arrival_rate=60.0)\r\n\r\n# Key finding: dynamic batching reduces GPU idle time\r\n# at the cost of adding queue delay to inference latency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ensemble-models",
      children: "Ensemble Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triton supports ensemble models — directed acyclic graphs of models connected as a pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Ensemble model configuration for a RAG pipeline\r\n# This config chains: embedding -> retrieval -> generation\r\n\r\nensemble_config = {\r\n    \"name\": \"rag_pipeline\",\r\n    \"platform\": \"ensemble\",\r\n    \"max_batch_size\": 8,\r\n    \"input\": [\r\n        {\"name\": \"query\", \"data_type\": \"TYPE_STRING\", \"dims\": [1]},\r\n    ],\r\n    \"output\": [\r\n        {\"name\": \"response\", \"data_type\": \"TYPE_STRING\", \"dims\": [1]},\r\n    ],\r\n    \"ensemble_scheduling\": {\r\n        \"step\": [\r\n            {\r\n                \"model_name\": \"bge_embedding\",\r\n                \"model_version\": 1,\r\n                \"input_map\": {\"input_ids\": \"query\"},\r\n                \"output_map\": {\"embedding\": \"query_embed\"},\r\n            },\r\n            {\r\n                \"model_name\": \"vector_search\",\r\n                \"model_version\": 1,\r\n                \"input_map\": {\"embedding\": \"query_embed\"},\r\n                \"output_map\": {\"documents\": \"retrieved_docs\"},\r\n            },\r\n            {\r\n                \"model_name\": \"llama_70b\",\r\n                \"model_version\": 1,\r\n                \"input_map\": {\r\n                    \"prompt\": \"retrieved_docs\",\r\n                    \"query\": \"query\",\r\n                },\r\n                \"output_map\": {\"output\": \"response\"},\r\n            },\r\n        ]\r\n    }\r\n}\r\n\r\nprint(\"Ensemble Pipeline: query -> embedding -> retrieval -> generation\")\r\nfor i, step in enumerate(ensemble_config[\"ensemble_scheduling\"][\"step\"]):\r\n    print(f\"  Step {i+1}: {step['model_name']} v{step['model_version']}\")\r\n\r\n# Triton ensembles are useful for:\r\n# 1. Multi-modal pipelines (vision + language)\r\n# 2. RAG pipelines (embed + retrieve + generate)\r\n# 3. Pre/post processing with custom backends\r\n# 4. A/B testing different model versions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "concurrent-model-execution",
      children: "Concurrent Model Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triton can run multiple model instances concurrently on different GPUs. This is configured via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instance_group"
      }), " field in config.pbtxt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate concurrent model execution across GPUs\r\nfrom dataclasses import dataclass\r\nimport time\r\nimport threading\r\nfrom typing import Dict, List\r\n\r\n@dataclass\r\nclass ModelInstance:\r\n    \"\"\"A single model instance running on a GPU.\"\"\"\r\n    model_name: str\r\n    gpu_id: int\r\n    instance_id: int\r\n    busy: bool = False\r\n    total_requests: int = 0\r\n    total_time_ms: float = 0.0\r\n\r\nclass ConcurrentExecutor:\r\n    \"\"\"\r\n    Simulate Triton's concurrent model execution.\r\n    Multiple model instances run in parallel across GPUs.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.instances: Dict[str, List[ModelInstance]] = {}\r\n        self.lock = threading.Lock()\r\n\r\n    def add_instance(self, model_name: str, gpu_id: int, count: int = 1):\r\n        \"\"\"Add model instances to the pool.\"\"\"\r\n        if model_name not in self.instances:\r\n            self.instances[model_name] = []\r\n        for i in range(count):\r\n            inst = ModelInstance(\r\n                model_name=model_name,\r\n                gpu_id=gpu_id,\r\n                instance_id=i,\r\n            )\r\n            self.instances[model_name].append(inst)\r\n\r\n    def execute(self, model_name: str, inference_time_ms: float) -> Dict:\r\n        \"\"\"\r\n        Execute inference on an available instance.\r\n        Blocks until an instance is free.\r\n        \"\"\"\r\n        while True:\r\n            with self.lock:\r\n                # Find an available instance\r\n                for inst in self.instances.get(model_name, []):\r\n                    if not inst.busy:\r\n                        inst.busy = True\r\n                        inst.total_requests += 1\r\n                        inst.total_time_ms += inference_time_ms\r\n                        break\r\n                else:\r\n                    # No free instance — wait and retry\r\n                    time.sleep(0.001)\r\n                    continue\r\n\r\n            # Execute (simulate with sleep)\r\n            time.sleep(inference_time_ms / 1000)\r\n\r\n            with self.lock:\r\n                inst.busy = False\r\n\r\n            return {\r\n                \"model\": model_name,\r\n                \"gpu\": inst.gpu_id,\r\n                \"instance\": inst.instance_id,\r\n                \"time_ms\": inference_time_ms,\r\n            }\r\n\r\n    def print_stats(self):\r\n        \"\"\"Print execution statistics.\"\"\"\r\n        print(\"\\nConcurrent Execution Statistics:\")\r\n        print(\"=\"*60)\r\n        for model_name, instances in self.instances.items():\r\n            print(f\"\\nModel: {model_name}\")\r\n            for inst in instances:\r\n                util = inst.total_time_ms / (inst.total_requests * 1000) * 100\r\n                print(f\"  GPU {inst.gpu_id}, Instance {inst.instance_id}: \"\r\n                      f\"{inst.total_requests} requests, \"\r\n                      f\"utilization ~{util:.1f}%\")\r\n\r\n# Demonstrate concurrent execution\r\nexecutor = ConcurrentExecutor()\r\nexecutor.add_instance(\"llama_70b\", gpu_id=0, count=1)\r\nexecutor.add_instance(\"llama_70b\", gpu_id=1, count=1)\r\nexecutor.add_instance(\"bge_embedding\", gpu_id=0, count=2)\r\n\r\n# Submit concurrent requests\r\nresults = []\r\nfor i in range(10):\r\n    result = executor.execute(\"llama_70b\", inference_time_ms=500)\r\n    results.append(result)\r\n    print(f\"Request {i+1}: GPU {result['gpu']}, \"\r\n          f\"Instance {result['instance']}, {result['time_ms']}ms\")\r\n\r\nexecutor.print_stats()\r\n\r\n# Key insight: multiple instances increase throughput at the cost of total memory\r\n# Triton allows fine-grained control over GPU utilization per model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "triton-client-example",
      children: "Triton Client Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Triton client usage for inference\r\nimport tritonclient.http as httpclient\r\nimport numpy as np\r\n\r\nclass TritonInferenceClient:\r\n    \"\"\"Client for communicating with Triton Inference Server.\"\"\"\r\n\r\n    def __init__(self, url: str = \"localhost:8000\"):\r\n        self.client = httpclient.InferenceServerClient(url=url)\r\n        self.url = url\r\n\r\n    def get_model_info(self, model_name: str) -> dict:\r\n        \"\"\"Get metadata about a deployed model.\"\"\"\r\n        try:\r\n            metadata = self.client.get_model_metadata(model_name)\r\n            config = self.client.get_model_config(model_name)\r\n            return {\r\n                \"name\": metadata.model_name,\r\n                \"versions\": metadata.versions,\r\n                \"inputs\": [\r\n                    {\"name\": i.name, \"dtype\": i.datatype, \"shape\": i.shape}\r\n                    for i in metadata.inputs\r\n                ],\r\n                \"outputs\": [\r\n                    {\"name\": o.name, \"dtype\": o.datatype, \"shape\": o.shape}\r\n                    for o in metadata.outputs\r\n                ],\r\n                \"max_batch_size\": config.max_batch_size,\r\n            }\r\n        except Exception as e:\r\n            return {\"error\": str(e)}\r\n\r\n    def infer(\r\n        self,\r\n        model_name: str,\r\n        inputs: Dict[str, np.ndarray],\r\n        model_version: str = \"1\",\r\n    ) -> Dict[str, np.ndarray]:\r\n        \"\"\"\r\n        Run inference on Triton.\r\n        inputs: dictionary of input_name -> numpy array\r\n        \"\"\"\r\n        triton_inputs = []\r\n        for name, data in inputs.items():\r\n            infer_input = httpclient.InferInput(name, data.shape, \r\n                                                self._numpy_to_triton_dtype(data.dtype))\r\n            infer_input.set_data_from_numpy(data)\r\n            triton_inputs.append(infer_input)\r\n\r\n        # Infer\r\n        results = self.client.infer(\r\n            model_name,\r\n            triton_inputs,\r\n            model_version=model_version,\r\n        )\r\n\r\n        # Parse outputs\r\n        outputs = {}\r\n        for output_name in results.get_response()[\"outputs\"]:\r\n            name = output_name[\"name\"]\r\n            outputs[name] = results.as_numpy(name)\r\n        return outputs\r\n\r\n    @staticmethod\r\n    def _numpy_to_triton_dtype(dtype) -> str:\r\n        mapping = {\r\n            np.float32: \"FP32\",\r\n            np.float16: \"FP16\",\r\n            np.int32: \"INT32\",\r\n            np.int64: \"INT64\",\r\n            np.bool_: \"BOOL\",\r\n            np.object_: \"BYTES\",  # String\r\n        }\r\n        return mapping.get(dtype.type, \"FP32\")\r\n\r\n    def list_models(self) -> list:\r\n        \"\"\"List all models deployed on Triton.\"\"\"\r\n        response = self.client.get_model_repository_index()\r\n        return [model[\"name\"] for model in response]\r\n\r\n# Usage example\r\n# client = TritonInferenceClient(\"triton-server:8001\")\r\n# models = client.list_models()\r\n# print(f\"Available models: {models}\")\r\n#\r\n# # Inference with TensorRT LLM backend\r\n# input_data = np.array([[101, 205, 340]], dtype=np.int32)\r\n# results = client.infer(\"llama_70b\", {\"input_ids\": input_data})\r\n# print(results[\"output_ids\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "50-serving-comparison",
      children: "5.0 Serving Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section compares vLLM, SGLang, TGI, and Triton Inference Server across throughput, latency, and memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "feature-comparison-matrix",
      children: "Feature Comparison Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Compare serving frameworks across key dimensions\r\n\r\ncomparison = {\r\n    \"Feature\": [\r\n        \"KV Cache Management\",\r\n        \"Batch Scheduling\",\r\n        \"Prefix Caching\",\r\n        \"Constrained Decoding\",\r\n        \"Quantization\",\r\n        \"Multi-GPU Support\",\r\n        \"Streaming\",\r\n        \"OpenAI API Compat\",\r\n        \"Model Repository\",\r\n        \"Ensemble Pipelines\",\r\n        \"Custom Backends\",\r\n        \"Framework Support\",\r\n        \"Ease of Setup\",\r\n        \"Community\",\r\n    ],\r\n    \"vLLM\": [\r\n        \"PagedAttention ★★★\",\r\n        \"Continuous Batching ★★★\",\r\n        \"Automatic ★★\",\r\n        \"Basic regex ★\",\r\n        \"AWQ/GPTQ/FP8 ★★★\",\r\n        \"Tensor Parallel ★★★\",\r\n        \"SSE ★★★\",\r\n        \"Full ★★★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"PyTorch only ★★\",\r\n        \"Very easy ★★★\",\r\n        \"Largest ★★★\",\r\n    ],\r\n    \"SGLang\": [\r\n        \"RadixAttention ★★★\",\r\n        \"Continuous Batching ★★★\",\r\n        \"Radix Tree ★★★\",\r\n        \"Full grammar ★★★\",\r\n        \"AWQ/GPTQ ★★\",\r\n        \"Tensor Parallel ★★\",\r\n        \"SSE ★★★\",\r\n        \"Partial ★★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"PyTorch only ★★\",\r\n        \"Easy ★★★\",\r\n        \"Growing ★★\",\r\n    ],\r\n    \"TGI\": [\r\n        \"Basic ★\",\r\n        \"Continuous Batching ★★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"AWQ/GPTQ/FP8/BNB ★★★\",\r\n        \"Tensor Parallel ★★\",\r\n        \"SSE ★★★\",\r\n        \"Partial ★★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"PyTorch only ★★\",\r\n        \"Easy ★★\",\r\n        \"Large ★★\",\r\n    ],\r\n    \"Triton\": [\r\n        \"Backend-specific ★\",\r\n        \"Dynamic Batching ★★★\",\r\n        \"No ★\",\r\n        \"No ★\",\r\n        \"TensorRT INT8/FP8 ★★★\",\r\n        \"Multi-instance ★★★\",\r\n        \"gRPC/HTTP ★★\",\r\n        \"No ★\",\r\n        \"Full ★★★\",\r\n        \"Full ★★★\",\r\n        \"Full ★★★\",\r\n        \"Multi-framework ★★★\",\r\n        \"Complex ★\",\r\n        \"Enterprise ★★\",\r\n    ],\r\n}\r\n\r\ndef print_comparison_table(data):\r\n    \"\"\"Print the comparison as a formatted table.\"\"\"\r\n    features = data[\"Feature\"]\r\n    engines = [k for k in data.keys() if k != \"Feature\"]\r\n    \r\n    # Column widths\r\n    feat_width = 30\r\n    eng_width = 22\r\n    total_width = feat_width + len(engines) * (eng_width + 3)\r\n    \r\n    # Header\r\n    print(f\"{'Feature':{feat_width}}\", end=\"\")\r\n    for eng in engines:\r\n        print(f\" | {eng:{eng_width}}\", end=\"\")\r\n    print()\r\n    print(\"=\" * total_width)\r\n    \r\n    # Rows\r\n    for i, feature in enumerate(features):\r\n        print(f\"{feature:{feat_width}}\", end=\"\")\r\n        for eng in engines:\r\n            val = data[eng][i]\r\n            print(f\" | {val:{eng_width}}\", end=\"\")\r\n        print()\r\n    print(\"=\" * total_width)\r\n    print(\"Ratings: ★★★ = Excellent, ★★ = Good, ★ = Limited/Basic\")\r\n\r\nprint_comparison_table(comparison)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "throughput--latency-benchmarks",
      children: "Throughput & Latency Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulated throughput benchmarks for different serving frameworks\r\n# Based on published benchmarks with Llama 3.1 8B on H100 (80GB)\r\n\r\nimport math\r\n\r\n@dataclass\r\nclass BenchmarkMetric:\r\n    \"\"\"Performance metric for a serving framework.\"\"\"\r\n    framework: str\r\n    throughput_tokens_per_sec: float\r\n    ttft_ms: float  # Time to first token\r\n    tpots_ms: float  # Time per output token (inter-token latency)\r\n    memory_gb: float\r\n    max_batch_size: int\r\n\r\nclass ServingBenchmark:\r\n    \"\"\"\r\n    Simulate and compare serving framework performance.\r\n    Based on published benchmarks (vLLM blog, SGLang paper, TGI docs, Triton benchmarks).\r\n    \"\"\"\r\n\r\n    @staticmethod\r\n    def simulate_throughput(\r\n        model_size: str = \"8B\",\r\n        num_gpus: int = 1,\r\n        batch_size: int = 16,\r\n        input_length: int = 512,\r\n        output_length: int = 256,\r\n    ) -> List[BenchmarkMetric]:\r\n        \"\"\"Simulate throughput benchmarks for different frameworks.\"\"\"\r\n\r\n        # Baseline metrics (approximate, based on published results)\r\n        # These vary by hardware, model, and configuration\r\n        benchmarks = {\r\n            \"vLLM\": {\r\n                \"throughput_base\": 4500,  # tokens/sec at bs=1\r\n                \"throughput_scale\": 0.85,  # scaling efficiency per additional seq\r\n                \"ttft_base_ms\": 150,\r\n                \"ttft_scale\": 1.2,  # TTFT increases with batch size\r\n                \"tpots_ms\": 12,  # ms per token (decode phase)\r\n                \"memory_base_gb\": 16,\r\n                \"memory_per_seq_gb\": 0.5,\r\n            },\r\n            \"SGLang\": {\r\n                \"throughput_base\": 4200,\r\n                \"throughput_scale\": 0.88,\r\n                \"ttft_base_ms\": 120,  # Faster TTFT due to RadixAttention\r\n                \"ttft_scale\": 1.15,\r\n                \"tpots_ms\": 11,\r\n                \"memory_base_gb\": 16,\r\n                \"memory_per_seq_gb\": 0.45,  # Better memory efficiency\r\n            },\r\n            \"TGI\": {\r\n                \"throughput_base\": 3800,\r\n                \"throughput_scale\": 0.80,\r\n                \"ttft_base_ms\": 180,\r\n                \"ttft_scale\": 1.3,\r\n                \"tpots_ms\": 14,\r\n                \"memory_base_gb\": 18,\r\n                \"memory_per_seq_gb\": 0.55,\r\n            },\r\n            \"Triton+TRT\": {\r\n                \"throughput_base\": 5000,  # TensorRT optimized kernels\r\n                \"throughput_scale\": 0.90,\r\n                \"ttft_base_ms\": 160,\r\n                \"ttft_scale\": 1.1,\r\n                \"tpots_ms\": 10,\r\n                \"memory_base_gb\": 14,  # TRT engine optimization\r\n                \"memory_per_seq_gb\": 0.4,\r\n            },\r\n        }\r\n\r\n        results = []\r\n        for framework, metrics in benchmarks.items():\r\n            # Compute throughput\r\n            scale_factor = sum(metrics[\"throughput_scale\"] ** i for i in range(batch_size))\r\n            throughput = metrics[\"throughput_base\"] * (1 + (batch_size - 1) * metrics[\"throughput_scale\"] / batch_size)\r\n            \r\n            # Compute TTFT\r\n            ttft = metrics[\"ttft_base_ms\"] * (metrics[\"ttft_scale\"] ** (math.log2(batch_size)))\r\n            \r\n            # Compute memory\r\n            memory = metrics[\"memory_base_gb\"] + metrics[\"memory_per_seq_gb\"] * batch_size\r\n            \r\n            results.append(BenchmarkMetric(\r\n                framework=framework,\r\n                throughput_tokens_per_sec=throughput,\r\n                ttft_ms=round(ttft, 1),\r\n                tpots_ms=metrics[\"tpots_ms\"],\r\n                memory_gb=round(memory, 1),\r\n                max_batch_size=batch_size,\r\n            ))\r\n\r\n        return results\r\n\r\n    @staticmethod\r\n    def print_benchmark_table(results: List[BenchmarkMetric]):\r\n        \"\"\"Print benchmark comparison table.\"\"\"\r\n        print(f\"\\nServing Benchmark Comparison (Llama 3.1 8B, 1x H100)\")\r\n        print(f\"Input: 512 tokens | Output: 256 tokens | Batch: {results[0].max_batch_size}\")\r\n        print(\"=\"*90)\r\n        print(f\"{'Framework':<20} {'Throughput':<18} {'TTFT':<14} {'TPOT':<14} {'Memory':<14}\")\r\n        print(f\"{'':<20} {'(tok/s)':<18} {'(ms)':<14} {'(ms/tok)':<14} {'(GB)':<14}\")\r\n        print(\"-\"*90)\r\n        \r\n        for r in sorted(results, key=lambda x: x.throughput_tokens_per_sec, reverse=True):\r\n            bar = \"█\" * max(1, int(r.throughput_tokens_per_sec / 300))\r\n            print(f\"{r.framework:<20} {r.throughput_tokens_per_sec:<18,.0f} \"\r\n                  f\"{r.ttft_ms:<14.1f} {r.tpots_ms:<14} {r.memory_gb:<14.1f} {bar}\")\r\n        \r\n        print(\"=\"*90)\r\n\r\n# Run benchmark comparison\r\nresults = ServingBenchmark.simulate_throughput(\r\n    model_size=\"8B\",\r\n    batch_size=16,\r\n    input_length=512,\r\n    output_length=256,\r\n)\r\nServingBenchmark.print_benchmark_table(results)\r\n\r\n# Key takeaways:\r\n# - vLLM leads in throughput and ease of use\r\n# - SGLang excels at prefix caching and structured generation\r\n# - Triton+TRT gives best raw performance but requires more setup\r\n# - TGI is competitive with strong quantization support\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-comparison",
      children: "Memory Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Memory usage comparison across frameworks\r\n\r\ndef compare_memory(\r\n    model_size_b: float = 8.0,\r\n    seq_length: int = 4096,\r\n    num_sequences: int = 16,\r\n    use_quantization: bool = False,\r\n) -> dict:\r\n    \"\"\"\r\n    Compare memory usage across serving frameworks.\r\n    Accounts for: model weights, KV cache, activations, overhead.\r\n    \"\"\"\r\n    # Model weights (FP16: 2 bytes per parameter)\r\n    weight_bytes = model_size_b * 1e9 * 2\r\n    if use_quantization:\r\n        weight_bytes /= 4  # INT4 quantization\r\n\r\n    # KV cache per sequence (simplified)\r\n    # For a transformer with L layers, H hidden, FP16\r\n    layers = 32 if model_size_b <= 8 else 80\r\n    hidden_dim = 4096 if model_size_b <= 8 else 8192\r\n    kv_bytes_per_token = layers * 2 * hidden_dim * 2  # 2 bytes per FP16\r\n    total_kv_bytes = kv_bytes_per_token * seq_length * num_sequences\r\n\r\n    # Framework overheads\r\n    frameworks = {\r\n        \"vLLM\": {\r\n            \"overhead_gb\": 0.5,\r\n            \"kv_cache_efficiency\": 0.95,  # PagedAttention: 95% utilization\r\n            \"activation_memory_gb\": 0.3,\r\n        },\r\n        \"SGLang\": {\r\n            \"overhead_gb\": 0.6,\r\n            \"kv_cache_efficiency\": 0.90,  # RadixTree: some overhead\r\n            \"activation_memory_gb\": 0.3,\r\n        },\r\n        \"TGI\": {\r\n            \"overhead_gb\": 0.8,  # Additional buffers for SSE\r\n            \"kv_cache_efficiency\": 0.70,  # Contiguous allocation waste\r\n            \"activation_memory_gb\": 0.4,\r\n        },\r\n        \"Triton+TRT\": {\r\n            \"overhead_gb\": 0.4,  # Optimized TRT engine\r\n            \"kv_cache_efficiency\": 0.85,\r\n            \"activation_memory_gb\": 0.2,\r\n        },\r\n    }\r\n\r\n    results = {}\r\n    for fw_name, fw in frameworks.items():\r\n        weights_gb = weight_bytes / 1e9\r\n        kv_effective_gb = total_kv_bytes / 1e9 / fw[\"kv_cache_efficiency\"]\r\n        activation_gb = fw[\"activation_memory_gb\"]\r\n        total_gb = weights_gb + kv_effective_gb + activation_gb + fw[\"overhead_gb\"]\r\n\r\n        results[fw_name] = {\r\n            \"weights_gb\": round(weights_gb, 1),\r\n            \"kv_cache_gb\": round(kv_effective_gb, 1),\r\n            \"activation_gb\": activation_gb,\r\n            \"overhead_gb\": fw[\"overhead_gb\"],\r\n            \"total_gb\": round(total_gb, 1),\r\n            \"kv_efficiency\": fw[\"kv_cache_efficiency\"],\r\n        }\r\n\r\n    return results\r\n\r\nmemory_results = compare_memory(\r\n    model_size_b=8.0,\r\n    seq_length=4096,\r\n    num_sequences=16,\r\n    use_quantization=False,\r\n)\r\n\r\nprint(\"Memory Comparison (Llama 3.1 8B, 16 sequences, seq_len=4096)\")\r\nprint(\"=\"*85)\r\nprint(f\"{'Framework':<20} {'Weights':<12} {'KV Cache':<12} {'Activation':<12} {'Total':<12} {'KV Eff':<10}\")\r\nprint(\"-\"*85)\r\nfor fw, metrics in sorted(memory_results.items(), key=lambda x: x[1][\"total_gb\"]):\r\n    bar = \"█\" * max(1, int(metrics[\"total_gb\"] / 2))\r\n    print(f\"{fw:<20} {metrics['weights_gb']:<12.1f} {metrics['kv_cache_gb']:<12.1f} \"\r\n          f\"{metrics['activation_gb']:<12.1f} {metrics['total_gb']:<12.1f} \"\r\n          f\"{metrics['kv_efficiency']:<10.0%} {bar}\")\r\n\r\nprint(\"\\nKey memory insights:\")\r\nprint(\"- vLLM's PagedAttention reduces KV cache waste by 25% vs TGI\")\r\nprint(\"- Triton+TRT has lowest total memory due to kernel fusion\")\r\nprint(\"- SGLang's RadixAttention trades some memory for prefix caching benefits\")\r\nprint(\"- Quantization (INT4) reduces weights by 4x — enabling 70B models on single GPU\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "selection-guide",
      children: "Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Framework selection guide based on workload\r\n\r\ndef recommend_framework(\r\n    workload_type: str,\r\n    latency_sla_ms: int = 200,\r\n    throughput_required: int = 1000,\r\n    model_size_b: float = 8.0,\r\n    num_gpus: int = 1,\r\n    need_prefix_sharing: bool = False,\r\n    need_structured_output: bool = False,\r\n    need_multi_model: bool = False,\r\n) -> str:\r\n    \"\"\"Recommend the best serving framework for a given workload.\"\"\"\r\n    \r\n    scores = {\r\n        \"vLLM\": 0,\r\n        \"SGLang\": 0,\r\n        \"TGI\": 0,\r\n        \"Triton+TRT\": 0,\r\n    }\r\n\r\n    # Latency-sensitive\r\n    if latency_sla_ms < 150:\r\n        scores[\"SGLang\"] += 2  # Lowest TTFT\r\n        scores[\"vLLM\"] += 1\r\n    elif latency_sla_ms < 300:\r\n        scores[\"vLLM\"] += 2\r\n        scores[\"Triton+TRT\"] += 1\r\n\r\n    # High throughput\r\n    if throughput_required > 5000:\r\n        scores[\"Triton+TRT\"] += 2\r\n        scores[\"vLLM\"] += 1\r\n    \r\n    # Large model\r\n    if model_size_b > 70 and num_gpus >= 4:\r\n        scores[\"Triton+TRT\"] += 2  # Best multi-GPU support\r\n        scores[\"vLLM\"] += 1\r\n\r\n    # Prefix sharing\r\n    if need_prefix_sharing:\r\n        scores[\"SGLang\"] += 3  # RadixAttention\r\n\r\n    # Structured output\r\n    if need_structured_output:\r\n        scores[\"SGLang\"] += 3  # Grammar-constrained decoding\r\n\r\n    # Multi-model pipelines\r\n    if need_multi_model:\r\n        scores[\"Triton+TRT\"] += 3  # Ensemble models\r\n        scores[\"vLLM\"] -= 1  # No ensemble support\r\n\r\n    # Winner\r\n    winner = max(scores, key=scores.get)\r\n    return f\"Recommended: {winner} (scores: {scores})\"\r\n\r\n# Test different scenarios\r\nscenarios = [\r\n    {\r\n        \"name\": \"Chat application (low latency)\",\r\n        \"workload_type\": \"chat\",\r\n        \"latency_sla_ms\": 100,\r\n        \"throughput_required\": 2000,\r\n        \"need_prefix_sharing\": True,\r\n    },\r\n    {\r\n        \"name\": \"Batch document processing\",\r\n        \"workload_type\": \"batch\",\r\n        \"latency_sla_ms\": 5000,\r\n        \"throughput_required\": 10000,\r\n        \"need_prefix_sharing\": False,\r\n    },\r\n    {\r\n        \"name\": \"RAG pipeline\",\r\n        \"workload_type\": \"rag\",\r\n        \"need_prefix_sharing\": True,\r\n        \"need_structured_output\": True,\r\n        \"need_multi_model\": True,\r\n    },\r\n    {\r\n        \"name\": \"Multi-tenant API\",\r\n        \"workload_type\": \"api\",\r\n        \"latency_sla_ms\": 200,\r\n        \"throughput_required\": 5000,\r\n        \"need_prefix_sharing\": False,\r\n        \"need_multi_model\": True,\r\n    },\r\n]\r\n\r\nprint(\"Framework Selection Guide:\")\r\nprint(\"=\"*60)\r\nfor scenario in scenarios:\r\n    rec = recommend_framework(**scenario)\r\n    print(f\"\\nScenario: {scenario['name']}\")\r\n    print(f\"  {rec}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-google-explain-pagedattention-how-does-it-differ-from-standard-kv-cache-management",
      children: "Q1 (Google): Explain PagedAttention. How does it differ from standard KV cache management?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " PagedAttention treats the KV cache as virtual memory pages. Standard KV cache allocates contiguous memory for each request's maximum sequence length. This wastes 50-80% because most sequences are shorter. PagedAttention divides the cache into fixed-size page blocks (typically 16 tokens). A page table maps logical token positions to physical page blocks. Pages are allocated on demand as the sequence grows. When memory is full, the scheduler evicts least-recently-used pages. This reduces waste to ~5% and enables memory overcommitment — running more sequences than fit in GPU memory by swapping pages to CPU. The key difference is fragmentation: contiguous allocation suffers internal fragmentation (pre-allocated unused space), while PagedAttention has only external fragmentation (partially full pages at sequence end)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-microsoft-what-is-continuous-batching-and-why-does-it-matter-for-llm-serving",
      children: "Q2 (Microsoft): What is continuous batching and why does it matter for LLM serving?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Continuous batching (in-flight batching) updates the batch at every decoding step. Traditional batching waits for N requests before inference — adding latency. In continuous batching, the scheduler evaluates at each iteration which requests to run. Finished sequences leave the batch and new sequences join. The batch composition changes dynamically. This matters because LLM decoding is memory-bound: we maximize GPU utilization by keeping as many sequences in the batch as possible. Continuous batching increases throughput by 2-3x compared to static batching, especially for bursty traffic patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-nvidia-compare-vllm-sglang-tgi-and-triton-inference-server-when-would-you-use-each",
      children: "Q3 (NVIDIA): Compare vLLM, SGLang, TGI, and Triton Inference Server. When would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " vLLM is best for general-purpose LLM serving with high throughput. It has the largest community and easiest setup. SGLang excels when you need structured output (JSON, SQL generation) or have workloads with shared prefixes (chat systems, RAG). TGI is good when you need strong quantization support (AWQ/GPTQ/FP8/bitsandbytes) and SSE streaming. Triton Inference Server is the choice for enterprise deployments with multiple model types and ensemble pipelines. It supports TensorRT, ONNX, PyTorch, and custom backends in one server. Use vLLM for simplicity, SGLang for structured generation, Triton for complex multi-model pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-amazon-how-does-tensor-parallelism-work-for-llm-inference-what-are-the-communication-costs",
      children: "Q4 (Amazon): How does tensor parallelism work for LLM inference? What are the communication costs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Tensor parallelism splits each transformer layer's weights across GPUs. For a linear layer W of shape (H, H) with 2 GPUs: GPU0 gets W[:, :H/2], GPU1 gets W[:, H/2:]. Each GPU computes its shard of the output. An all-reduce operation combines shards into the complete output. Per transformer layer, we need 4 all-reduce operations (Q, K, V, O projections). With NVLink 4 (900 GB/s), the communication overhead is ~0.1ms per all-reduce for a 8B model — negligible. With PCIe (128 GB/s), it becomes ~0.7ms — significant at high batch sizes. The communication cost scales linearly with hidden dimension and batch size. Tensor parallelism is essential for models that exceed single GPU memory (70B+ in FP16 requires 2+ H100s)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-anthropic-what-is-radixattention-and-how-does-it-improve-serving-efficiency",
      children: "Q5 (Anthropic): What is RadixAttention and how does it improve serving efficiency?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " RadixAttention organizes the KV cache as a radix tree (prefix tree). Each node stores the KV cache for a token prefix. When a new request arrives, the tree is traversed to find the longest matching prefix. The KV cache for that prefix is reused — no recomputation. New tokens are added as leaf nodes. This is especially beneficial for chat systems where all requests share a system prompt. With RadixAttention, the system prompt's KV cache is computed once and shared across all requests. Benchmarks show 1.5-3x throughput improvement for chat workloads with long system prompts. The trade-off is higher memory overhead for the tree structure and LRU eviction logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-microsoft-explain-the-difference-between-prefill-and-decode-phases-in-llm-serving-how-does-batching-differ-between-them",
      children: "Q6 (Microsoft): Explain the difference between prefill and decode phases in LLM serving. How does batching differ between them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Prefill processes the input prompt in parallel — all prompt tokens are computed in one forward pass. This is compute-bound because all tokens attend to all previous tokens (O(n^2) attention). Decode generates one token at a time autoregressively. This is memory-bound because it only computes one new KV cache entry, but must load all previous KV cache from HBM. Batching differs: during prefill, we batch entire prompts (each prompt contributes N tokens to the batch). During decode, we batch individual token positions (each sequence contributes 1 token). Mixed batching (vLLM, SGLang) runs both phases in the same iteration — new requests do prefill while running requests do decode. This improves GPU utilization because prefill uses compute while decode uses memory bandwidth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-nvidia-how-does-triton-inference-server-handle-multi-model-pipelines",
      children: "Q7 (NVIDIA): How does Triton Inference Server handle multi-model pipelines?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Triton supports ensemble models — directed acyclic graphs of models. An ensemble config defines steps: each step maps inputs to a model, and the output feeds into the next step. For a RAG pipeline: Step 1 runs an embedding model on the query, Step 2 runs vector search (custom backend), Step 3 runs the LLM with retrieved documents. Triton handles scheduling across steps, batches within each step, and error propagation. Ensemble models run in a single request/response cycle — no intermediate network calls. Triton also supports concurrent model execution via instance groups. You can configure multiple instances of the same model on different GPUs, and Triton load-balances across them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-meta-what-quantization-methods-does-tgi-support-and-how-do-they-affect-throughput",
      children: "Q8 (Meta): What quantization methods does TGI support and how do they affect throughput?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " TGI supports four quantization methods: (1) AWQ — Activation-Aware Weight Quantization, INT4, memory 4x reduction, throughput ~0.9-1.0x of FP16. (2) GPTQ — GPT Post-Training Quantization, INT4/INT3, memory 4x reduction, throughput ~0.85-0.95x. (3) FP8 — 8-bit floating point on H100, memory 2x reduction, throughput 1.2-1.5x (uses Tensor Cores efficiently). (4) bitsandbytes — 8-bit/4-bit via CPU offloading, memory 2-4x reduction, throughput 0.7-0.9x. AWQ is the best balance of memory savings and speed. FP8 gives the highest throughput but requires H100 hardware. The choice depends on your GPU memory budget and latency requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-google-design-a-serving-architecture-for-a-70b-parameter-model-serving-10000-requests-per-minute",
      children: "Q9 (Google): Design a serving architecture for a 70B parameter model serving 10,000 requests per minute."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Use 4 H100 GPUs with tensor parallelism (2-way) serving two model instances. Deploy vLLM or Triton+TRT for the inference engine. Front with a load balancer (NGINX/HAProxy) distributing requests across instances. Use continuous batching with max_batch_size=32 to maximize throughput. Enable PagedAttention with 95% GPU memory utilization. Quantize to FP8 to reduce memory by 2x (35GB per model copy). Use prefix caching if there are shared system prompts. For latency SLO of 200ms p95, configure the scheduler with max_num_seqs=8 and max_model_len=4096. Monitor with Prometheus + Grafana. Auto-scale: add instances when queue depth exceeds 100 requests. Expected throughput: ~8,000 tokens/sec per instance, serving 10K requests/min comfortably."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-ai-startup-how-would-you-deploy-a-model-that-requires-structured-json-output-compare-approaches",
      children: "Q10 (AI Startup): How would you deploy a model that requires structured JSON output? Compare approaches."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Three approaches: (1) Prompt engineering — ask the model to output JSON. Works for simple cases but produces invalid JSON 5-20% of the time. (2) Post-processing — parse the output and fix JSON errors. Covers most cases but adds latency and can corrupt data. (3) Constrained decoding — use SGLang or guidance to enforce JSON grammar during generation. SGLang's gen() function supports regex constraints and grammar rules. At each decoding step, the framework masks out invalid tokens. This guarantees valid output with zero post-processing. For production, I recommend SGLang with JSON grammar. It adds ~5-10% overhead per token (for logit masking) but eliminates retries completely. For very high throughput, use SGLang's structured generation caching — compiled grammars are cached across requests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI inference serving transforms trained models into production API endpoints. The four major frameworks — vLLM, SGLang, TGI, and Triton — solve the core challenge of LLM serving: maximizing GPU utilization while managing the KV cache across concurrent requests. vLLM's PagedAttention and continuous batching set the standard for throughput. SGLang extends this with RadixAttention for prefix sharing and grammar-constrained decoding for structured output. TGI provides strong quantization and streaming support. Triton Inference Server handles enterprise multi-model pipelines. Choosing the right framework depends on your workload: chat applications benefit from prefix sharing, structured generation tasks need constrained decoding, and complex pipelines need Triton's ensemble support. An AI engineer deploying LLMs in production must understand these trade-offs to optimize serving cost, latency, and throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary innovation of PagedAttention in vLLM?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Using Flash Attention for faster attention computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Treating KV cache as virtual memory pages with on-demand allocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Parallelizing attention across multiple GPUs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Compressing KV cache with quantization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A1:"
      }), " b) PagedAttention divides the KV cache into fixed-size pages and allocates them on demand. This eliminates the 50-80% waste of contiguous pre-allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which serving framework uses RadixAttention for prefix sharing across requests?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) vLLM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) SGLang"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) TGI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Triton Inference Server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A2:"
      }), " b) SGLang uses a radix tree structure to share KV cache across requests with common prefixes, such as system prompts in chat applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " In continuous batching, what happens when a request finishes generating?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) The entire batch is re-evaluated from scratch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) The finished request leaves the batch and a waiting request can join at the next step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) The batch size is reduced by one for all future iterations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) The server idles until a new request arrives"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A3:"
      }), " b) Continuous batching updates the batch at every decoding step. Finished requests leave immediately, and waiting requests join — maximizing GPU utilization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which Triton Inference Server feature allows chaining multiple models into a single inference pipeline?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Dynamic batching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Instance groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Ensemble models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Model repository"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A4:"
      }), " c) Ensemble models define a directed acyclic graph of model steps. Each step's output feeds into the next, enabling pipelines like embedding → retrieval → generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the estimated throughput advantage of vLLM over TGI for Llama 3.1 8B with batch size 16?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) vLLM is ~2x slower"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Approximately equal throughput"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) vLLM is ~15-20% faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) TGI is ~30% faster"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A5:"
      }), " c) vLLM is approximately 15-20% faster than TGI for equivalent configurations, primarily due to PagedAttention's better memory utilization enabling larger effective batch sizes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1:"
      }), " Modify the PagedAttention simulation to implement page eviction. When the free page pool is empty, evict the least-recently-used page from an existing sequence. Show the eviction trace."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2:"
      }), " Build a prefix-sharing benchmark. Create 100 requests where 80% share a 512-token prefix (system prompt). Measure KV cache memory saved with RadixAttention vs no prefix sharing. Express as a percentage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3:"
      }), " Implement a simple constrained decoder that generates valid phone numbers (format: +1-XXX-XXX-XXXX). Use regex-based logit masking. Show the generated output for 5 samples."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4:"
      }), " Design a Triton ensemble configuration for a multi-modal pipeline: image captioning (ViT) + text generation (LLM). Write the config.pbtxt for both models and the ensemble. Show the data flow between steps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5:"
      }), " Write a throughput benchmark script that compares vLLM and SGLang for chat completion. Measure: tokens/sec, TTFT (time to first token), and TPOT (time per output token) at batch sizes [1, 4, 16, 32]. Present results as a table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PagedAttention"
        }), " is the breakthrough that made LLM serving practical. It reduces KV cache waste from 60% to ~5%, enabling 4-8x more concurrent requests on the same GPU."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous batching"
        }), " maximizes GPU utilization by dynamically composing batches at every decoding step. This is essential for bursty traffic patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SGLang's RadixAttention"
        }), " provides automatic prefix sharing for chat and RAG workloads, reducing KV cache computation by 2-3x in typical deployments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constrained decoding"
        }), " (regex/grammar masking) guarantees structured output format, eliminating the need for post-processing or retries in production."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework selection depends on workload:"
        }), " vLLM for simplicity and throughput, SGLang for structured generation, TGI for quantization support, Triton for enterprise multi-model pipelines."]
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
            children: "How does AI Inference Serving behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using AI Inference Serving\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies AI Inference Serving to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside AI Inference Serving (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of AI Inference Serving and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a AI Inference Serving-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply AI Inference Serving in production today?"
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
        }), " AI Inference Serving builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for AI Inference Serving before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for AI Inference Serving is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for AI Inference Serving in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers AI Inference Serving is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 04 Inference Serving is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 Inference Serving is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug AI Inference Serving issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to AI Inference Serving in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving AI Inference Serving that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain AI Inference Serving in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for AI Inference Serving and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain AI Inference Serving to someone else"
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
        children: "Always write a one-line example of AI Inference Serving from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered AI Inference Serving when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining AI Inference Serving twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own AI Inference Serving snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of AI Inference Serving listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link AI Inference Serving to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of AI Inference Serving by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain AI Inference Serving to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Inference Serving"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 27 — builds the foundation for 04 Inference Serving"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 04 Inference Serving with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 04 Inference Serving fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 04 Inference Serving"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 04 Inference Serving"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 Inference Serving?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 04 Inference Serving?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 Inference Serving asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 04 Inference Serving?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Inference Serving is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with AI Inference Serving."
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
        children: "AI Inference Serving emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for AI Inference Serving today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about AI Inference Serving — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around AI Inference Serving changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "04 Inference Serving is like a GPS navigation system"
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
          }), " — this chapter contributes the AI Inference Serving skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-04inferenceserving-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of AI Inference Serving in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-04inferenceserving-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-04inferenceserving-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard AI Inference Serving approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-04inferenceserving-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is AI Inference Serving NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-04inferenceserving-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is AI Inference Serving applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for AI Inference Serving (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing AI Inference Serving (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for AI Inference Serving-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running AI Inference Serving in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Inference Serving"
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
        }), ": Add structured logging at each stage of the 04 Inference Serving pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of AI Inference Serving."
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
        children: "Tell me about a time you debugged a AI Inference Serving problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where AI Inference Serving is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_04_inference_serving(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 04 Inference Serving.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 04 Inference Serving here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain AI Inference Serving without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference",
        children: "Distributed Inference"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Inference Serving, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of AI Inference Serving depends on input size and distribution — always benchmark for your own data."
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