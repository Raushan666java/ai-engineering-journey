"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[27165],{

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
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_04_inference_serving_md_aaf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/04-inference-serving","title":"AI Inference Serving","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/04-inference-serving.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/04-inference-serving","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":305,"frontMatter":{"id":"04-inference-serving","slug":"/ai-engineering-placement/27-ai-infrastructure/04-inference-serving","title":"AI Inference Serving","sidebar_label":"AI Inference Serving","sidebar_position":305},"sidebar":"placementSidebar","previous":{"title":"03 — Model Compilation & Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/03-model-compilation"},"next":{"title":"Distributed Inference","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference"}}');
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
	sidebar_position: 305
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Client[\"Client Layer\"]\n        C1[REST API]\n        C2[gRPC]\n        C3[WebSocket]\n    end\n    subgraph Serving[\"Inference Serving Layer\"]\n        VLLM[\"vLLM<br/>PagedAttention<br/>Continuous Batching\"]\n        SGLANG[\"SGLang<br/>RadixAttention<br/>Structured Gen\"]\n        TGI[\"HuggingFace TGI<br/>SSE Streaming<br/>Quantization\"]\n        TRITON[\"Triton Server<br/>Model Repo<br/>Ensemble\"]\n    end\n    subgraph Backend[\"GPU Backend\"]\n        G1[GPU 0<br/>H100]\n        G2[GPU 1<br/>H100]\n        G3[GPU N<br/>H100]\n    end\n    subgraph Storage[\"Model Storage\"]\n        M1[Llama 3.1 70B]\n        M2[Mixtral 8x7B]\n        M3[Custom ONNX]\n    end\n    C1 --> VLLM\n    C1 --> SGLANG\n    C1 --> TGI\n    C2 --> TRITON\n    VLLM --> G1\n    SGLANG --> G2\n    TGI --> G1\n    TRITON --> G1\n    TRITON --> G2\n    TRITON --> G3\n    VLLM --> M1\n    SGLANG --> M1\n    TGI --> M2\n    TRITON --> M3\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Contiguous[\"Contiguous KV Cache (Naive)\"]\n        C1[Seq A K,V: allocated 4096 slots] ---|80% unused| C2[Waste]\n        C3[Seq B K,V: allocated 4096 slots] ---|50% unused| C4[Waste]\n    end\n    subgraph Paged[\"Paged KV Cache (vLLM)\"]\n        PT[Page Table] --> P1[Physical Page 1]\n        PT --> P2[Physical Page 2]\n        PT --> P3[Physical Page 3]\n        PT --> P4[Physical Page N]\n    end\n    style C2 fill:#ff4444,opacity:0.5\n    style C4 fill:#ff4444,opacity:0.5\n"
      })
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
        children: "# Simulate PagedAttention KV cache management\nimport math\nfrom dataclasses import dataclass, field\nfrom typing import Dict, List, Optional\n\n@dataclass\nclass PageBlock:\n    \"\"\"A fixed-size block of KV cache pages.\"\"\"\n    page_id: int\n    tokens: int = 0          # Number of filled token slots\n    max_tokens: int = 16     # Fixed block size\n    k_cache: Optional[bytes] = None  # Key tensor (simulated)\n    v_cache: Optional[bytes] = None  # Value tensor (simulated)\n\n    @property\n    def is_full(self) -> bool:\n        return self.tokens >= self.max_tokens\n\n    def fill(self, num_tokens: int) -> int:\n        \"\"\"Fill tokens into this page. Returns overflow if any.\"\"\"\n        space = self.max_tokens - self.tokens\n        filled = min(space, num_tokens)\n        self.tokens += filled\n        return num_tokens - filled  # overflow\n\nclass PagedKVManager:\n    \"\"\"\n    Simulate PagedAttention's KV cache allocator.\n    Manages physical page blocks across multiple sequences.\n    \"\"\"\n\n    def __init__(self, total_pages: int = 1024, page_size: int = 16):\n        self.total_pages = total_pages\n        self.page_size = page_size\n        self.free_pages: List[int] = list(range(total_pages))\n        self.allocated: Dict[int, List[PageBlock]] = {}  # seq_id -> pages\n        self.page_table: Dict[int, Dict[int, int]] = {}  # seq_id -> logical -> physical\n\n    def allocate_sequence(self, seq_id: int, initial_tokens: int = 0):\n        \"\"\"Allocate pages for a new sequence.\"\"\"\n        needed_pages = math.ceil(initial_tokens / self.page_size) if initial_tokens > 0 else 1\n        if len(self.free_pages) < needed_pages:\n            raise MemoryError(\"Out of KV cache pages\")\n\n        pages = []\n        for _ in range(needed_pages):\n            page_id = self.free_pages.pop(0)\n            pages.append(PageBlock(page_id=page_id, max_tokens=self.page_size))\n\n        self.allocated[seq_id] = pages\n        self.page_table[seq_id] = {i: pages[i].page_id for i in range(len(pages))}\n        print(f\"Sequence {seq_id}: allocated {len(pages)} pages \"\n              f\"(physical IDs: {[p.page_id for p in pages]})\")\n\n        # Fill initial tokens\n        if initial_tokens > 0:\n            self.append_tokens(seq_id, initial_tokens)\n\n    def append_tokens(self, seq_id: int, num_tokens: int):\n        \"\"\"Append tokens to an existing sequence, allocating pages as needed.\"\"\"\n        if seq_id not in self.allocated:\n            raise ValueError(f\"Sequence {seq_id} not found\")\n\n        pages = self.allocated[seq_id]\n        remaining = num_tokens\n\n        for page in pages:\n            if page.is_full:\n                continue\n            remaining = page.fill(remaining)\n            if remaining == 0:\n                break\n\n        # Allocate new pages if needed\n        while remaining > 0:\n            if not self.free_pages:\n                raise MemoryError(\"Out of KV cache pages — would trigger eviction\")\n            page_id = self.free_pages.pop(0)\n            new_page = PageBlock(page_id=page_id, max_tokens=self.page_size)\n            remaining = new_page.fill(remaining)\n            logical_idx = len(pages)\n            pages.append(new_page)\n            self.page_table[seq_id][logical_idx] = page_id\n\n        print(f\"Sequence {seq_id}: now {sum(p.tokens for p in pages)} tokens \"\n              f\"across {len(pages)} pages\")\n\n    def free_sequence(self, seq_id: int):\n        \"\"\"Return all pages to the free pool.\"\"\"\n        if seq_id not in self.allocated:\n            return\n        pages = self.allocated.pop(seq_id)\n        for page in pages:\n            self.free_pages.append(page.page_id)\n        self.free_pages.sort()\n        del self.page_table[seq_id]\n        print(f\"Sequence {seq_id}: freed {len(pages)} pages. \"\n              f\"Free pool: {len(self.free_pages)}/{self.total_pages}\")\n\n    def get_memory_utilization(self) -> float:\n        \"\"\"Calculate KV cache utilization percentage.\"\"\"\n        used_pages = self.total_pages - len(self.free_pages)\n        return used_pages / self.total_pages * 100\n\n    def print_status(self):\n        \"\"\"Print current memory status.\"\"\"\n        used = self.total_pages - len(self.free_pages)\n        print(f\"\\n=== KV Cache Status ===\")\n        print(f\"Total pages: {self.total_pages}\")\n        print(f\"Used pages:  {used}\")\n        print(f\"Free pages:  {len(self.free_pages)}\")\n        print(f\"Utilization: {self.get_memory_utilization():.1f}%\")\n        for seq_id, pages in self.allocated.items():\n            print(f\"  Seq {seq_id}: {len(pages)} pages \"\n                  f\"({sum(p.tokens for p in pages)} tokens)\")\n\n# Demonstrate PagedAttention memory efficiency\nmanager = PagedKVManager(total_pages=128, page_size=16)\n\n# Sequence A: short (32 tokens)\nmanager.allocate_sequence(0, initial_tokens=32)\n# Sequence B: medium (128 tokens)\nmanager.allocate_sequence(1, initial_tokens=128)\n# Sequence C: long (256 tokens)\nmanager.allocate_sequence(2, initial_tokens=256)\n\nmanager.print_status()\n\n# Sequence A finishes — its pages are freed\nmanager.free_sequence(0)\n\n# Sequence D arrives and reuses freed pages\nmanager.allocate_sequence(3, initial_tokens=48)\nmanager.print_status()\n\n# Key insight: PagedAttention reduces KV cache waste from ~60% to ~5%\n# Contiguous allocation would waste 100+ pages for uneven sequence lengths\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "continuous-batching",
      children: "Continuous Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional batching waits for N requests to arrive before inference. This adds latency. Continuous batching (also called in-flight batching) updates the batch at every decoding step — finished sequences leave, new sequences join."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant S as Scheduler\n    participant E as Engine\n    participant R1 as Request 1\n    participant R2 as Request 2\n    participant R3 as Request 3\n\n    Note over S,E: Iteration 1 (batch: R1, R2)\n    S->>E: Schedule R1 (prefill), R2 (prefill)\n    E-->>S: Output tokens: R1=t1, R2=t1\n\n    Note over S,E: Iteration 2 (batch: R1, R2, R3)\n    R3-->>S: Arrives\n    S->>E: Schedule R1 (decode), R2 (decode), R3 (prefill)\n    E-->>S: Output: R1=t2, R2=t2, R3=t1\n\n    Note over S,E: Iteration 3 (batch: R2, R3)\n    R1-->>S: Finish (EOS)\n    S->>E: Schedule R2 (decode), R3 (decode)\n    E-->>S: Output: R2=t3, R3=t2\n\n    Note over S,E: Iteration 4 (batch: R3)\n    R2-->>S: Finish\n    S->>E: Schedule R3 (decode)\n    E-->>S: Output: R3=t3\n"
      })
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
        children: "# Simulate continuous batching scheduler\nimport time\nimport random\nfrom collections import deque\nfrom dataclasses import dataclass\n\n@dataclass\nclass Request:\n    \"\"\"A single inference request.\"\"\"\n    id: int\n    prompt_tokens: int      # Number of prompt tokens (prefill phase)\n    max_gen_tokens: int     # Maximum generation tokens\n    arrival_time: float\n    tokens_generated: int = 0\n    finished: bool = False\n\n    @property\n    def total_tokens(self) -> int:\n        return self.prompt_tokens + self.tokens_generated\n\n@dataclass\nclass SchedulerConfig:\n    \"\"\"Configuration for continuous batching scheduler.\"\"\"\n    max_num_seqs: int = 8           # Max sequences in one batch\n    max_num_batched_tokens: int = 4096  # Max tokens per batch iteration\n    block_size: int = 16\n    gpu_memory_pages: int = 4096\n    decode_slo_ms: float = 100.0\n\nclass ContinuousBatchingScheduler:\n    \"\"\"\n    Simulate vLLM's continuous batching scheduler.\n    Decides at each iteration which requests to run.\n    \"\"\"\n\n    def __init__(self, config: SchedulerConfig):\n        self.config = config\n        self.running: deque = deque()\n        self.waiting: deque = deque()\n        self.swapped: deque = deque()\n        self.finished: List[Request] = []\n        self.iteration = 0\n        self.gpu_usage = 0  # Simulated GPU memory usage in pages\n\n    def add_request(self, prompt_tokens: int, max_gen_tokens: int):\n        \"\"\"Add a new request to the waiting queue.\"\"\"\n        req = Request(\n            id=len(self.finished) + len(self.running) + len(self.waiting) + 1,\n            prompt_tokens=prompt_tokens,\n            max_gen_tokens=max_gen_tokens,\n            arrival_time=time.time(),\n        )\n        self.waiting.append(req)\n\n    def _can_allocate(self, req: Request) -> bool:\n        \"\"\"Check if we have enough GPU pages for this request.\"\"\"\n        needed_pages = (req.prompt_tokens + req.max_gen_tokens + 15) // 16\n        return self.gpu_usage + needed_pages <= self.config.gpu_memory_pages\n\n    def _schedule(self) -> list:\n        \"\"\"\n        Decide which requests to run in this iteration.\n        Returns list of (request, phase) tuples.\n        \"\"\"\n        batch = []\n        total_tokens = 0\n\n        # First: try to prefill waiting requests\n        while self.waiting and len(batch) < self.config.max_num_seqs:\n            req = self.waiting[0]\n            needed_tokens = req.prompt_tokens\n            if total_tokens + needed_tokens <= self.config.max_num_batched_tokens:\n                if self._can_allocate(req):\n                    self.waiting.popleft()\n                    self.running.append(req)\n                    batch.append((req, \"prefill\"))\n                    total_tokens += needed_tokens\n                    pages_needed = (req.prompt_tokens + 15) // 16\n                    self.gpu_usage += pages_needed\n                else:\n                    break\n            else:\n                break\n\n        # Then: add running requests for decode\n        for req in list(self.running):\n            if len(batch) >= self.config.max_num_seqs:\n                break\n            if req.finished:\n                continue\n            if total_tokens + 1 <= self.config.max_num_batched_tokens:\n                batch.append((req, \"decode\"))\n                total_tokens += 1\n\n        return batch\n\n    def step(self) -> List[dict]:\n        \"\"\"Execute one scheduling iteration.\"\"\"\n        self.iteration += 1\n        batch = self._schedule()\n\n        results = []\n        for req, phase in batch:\n            if phase == \"prefill\":\n                # Simulate prefill: process all prompt tokens at once\n                tokens_this_step = req.prompt_tokens\n            else:\n                # Simulate decode: generate one token\n                tokens_this_step = 1\n                req.tokens_generated += 1\n\n                # Check if finished\n                if req.tokens_generated >= req.max_gen_tokens:\n                    req.finished = True\n                    self.finished.append(req)\n                    self.running.remove(req)\n                    # Free KV cache pages\n                    pages_freed = (req.total_tokens + 15) // 16\n                    self.gpu_usage = max(0, self.gpu_usage - pages_freed)\n\n            results.append({\n                \"req_id\": req.id,\n                \"phase\": phase,\n                \"tokens\": tokens_this_step,\n                \"generated_so_far\": req.tokens_generated if phase == \"decode\" else 0,\n            })\n\n        return results\n\n    def run_until_complete(self, max_iterations: int = 200):\n        \"\"\"Run the scheduler until all requests finish.\"\"\"\n        print(f\"{'Iter':<8} {'Batch Size':<12} {'Phase':<12} {'GPU Pages':<12} {'Events':<20}\")\n        print(\"=\"*64)\n\n        for i in range(max_iterations):\n            if not self.waiting and not self.running:\n                print(f\"\\nAll requests complete after {i} iterations\")\n                break\n\n            results = self.step()\n            phases = set(r[\"phase\"] for r in results)\n            events = []\n            if any(r[\"phase\"] == \"prefill\" for r in results):\n                n_prefill = sum(1 for r in results if r[\"phase\"] == \"prefill\")\n                events.append(f\"Prefill {n_prefill}\")\n            n_finished = sum(1 for r in results if r[\"phase\"] == \"decode\" and r[\"generated_so_far\"] > 0)\n            if n_finished:\n                events.append(f\"Decode {len(results)}\")\n\n            print(f\"{i:<8} {len(results):<12} {', '.join(phases):<12} \"\n                  f\"{self.gpu_usage:<12} {' | '.join(events):<20}\")\n\n# Run the simulation\nconfig = SchedulerConfig(\n    max_num_seqs=4,\n    max_num_batched_tokens=2048,\n    gpu_memory_pages=512,\n)\n\nscheduler = ContinuousBatchingScheduler(config)\n\n# Add requests with varying lengths\nrequest_lengths = [\n    (128, 32),   # 128 prompt tokens, generate 32\n    (256, 64),   # 256 prompt, generate 64\n    (64, 128),   # 64 prompt, generate 128\n    (512, 16),   # 512 prompt, generate 16\n    (192, 48),   # 192 prompt, generate 48\n    (64, 256),   # 64 prompt, generate 256\n]\n\nfor prompt_tokens, max_gen in request_lengths:\n    scheduler.add_request(prompt_tokens, max_gen)\n\nscheduler.run_until_complete(max_iterations=100)\n\nprint(f\"\\nTotal requests: {len(scheduler.finished)}\")\nprint(f\"Total iterations: {scheduler.iteration}\")\navg_latency = sum(r.tokens_generated for r in scheduler.finished) / scheduler.iteration\nprint(f\"Average decode steps per iteration: {avg_latency:.2f}\")\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Layer[\"Transformer Layer — Tensor Parallelism\"]\n        direction LR\n        GPUA[\"GPU 0<br/>Wq shard 0<br/>Wk shard 0<br/>Wv shard 0<br/>Wo shard 0\"] -->|all-reduce| ALL[\"Fused Output\"]\n        GPUB[\"GPU 1<br/>Wq shard 1<br/>Wk shard 1<br/>Wv shard 1<br/>Wo shard 1\"] -->|all-reduce| ALL\n        GPUC[\"GPU 2<br/>Wq shard 2<br/>Wk shard 2<br/>Wv shard 2<br/>Wo shard 2\"] -->|all-reduce| ALL\n        GPUD[\"GPU 3<br/>Wq shard 3<br/>Wk shard 3<br/>Wv shard 3<br/>Wo shard 3\"] -->|all-reduce| ALL\n    end\n"
      })
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
        children: "# vLLM server setup (runs as a separate process)\n# Start with: python -m vllm.entrypoints.openai.api_server \\\n#     --model meta-llama/Llama-3.1-8B-Instruct \\\n#     --tensor-parallel-size 2 \\\n#     --max-model-len 8192 \\\n#     --gpu-memory-utilization 0.90\n\nfrom openai import OpenAI\n\n# Point client to vLLM server\nclient = OpenAI(\n    base_url=\"http://localhost:8000/v1\",\n    api_key=\"token-abc123\",  # vLLM requires an API key\n)\n\n# Chat completion (streaming)\nresponse = client.chat.completions.create(\n    model=\"meta-llama/Llama-3.1-8B-Instruct\",\n    messages=[\n        {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n        {\"role\": \"user\", \"content\": \"Explain attention mechanisms in one sentence.\"},\n    ],\n    max_tokens=512,\n    temperature=0.7,\n    stream=True,\n)\n\nprint(\"Response: \", end=\"\")\nfor chunk in response:\n    if chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end=\"\")\nprint()\n\n# Batch completion (non-streaming)\ncompletions = client.completions.create(\n    model=\"meta-llama/Llama-3.1-8B-Instruct\",\n    prompt=[\n        \"What is the capital of France?\",\n        \"What is 2 + 2?\",\n        \"Explain quantum computing.\",\n    ],\n    max_tokens=128,\n)\n\nfor i, choice in enumerate(completions.choices):\n    print(f\"\\nPrompt {i+1}: {choice.text}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vllm-python-api-server-side",
      children: "vLLM Python API (Server-side)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# vLLM programmatic usage — building a custom server\nfrom vllm import LLM, SamplingParams\nfrom typing import List\n\nclass VLLMServingEngine:\n    \"\"\"Wrapper around vLLM's LLM engine for programmatic access.\"\"\"\n\n    def __init__(\n        self,\n        model: str = \"meta-llama/Llama-3.1-8B-Instruct\",\n        tensor_parallel_size: int = 1,\n        max_model_len: int = 8192,\n        gpu_memory_utilization: float = 0.90,\n        dtype: str = \"auto\",\n    ):\n        self.llm = LLM(\n            model=model,\n            tensor_parallel_size=tensor_parallel_size,\n            max_model_len=max_model_len,\n            gpu_memory_utilization=gpu_memory_utilization,\n            dtype=dtype,\n        )\n        print(f\"vLLM engine loaded: {model}\")\n        print(f\"  Tensor parallel size: {tensor_parallel_size}\")\n        print(f\"  Max model length: {max_model_len}\")\n        print(f\"  GPU memory utilization: {gpu_memory_utilization}\")\n\n    def generate(\n        self,\n        prompts: List[str],\n        max_tokens: int = 256,\n        temperature: float = 0.7,\n        top_p: float = 0.9,\n        stop: List[str] = None,\n    ) -> List[dict]:\n        \"\"\"Generate completions for a list of prompts.\"\"\"\n        params = SamplingParams(\n            temperature=temperature,\n            top_p=top_p,\n            max_tokens=max_tokens,\n            stop=stop,\n        )\n        outputs = self.llm.generate(prompts, params)\n        results = []\n        for output in outputs:\n            prompt = output.prompt\n            generated_text = output.outputs[0].text\n            tokens_generated = len(output.outputs[0].token_ids)\n            results.append({\n                \"prompt\": prompt,\n                \"generated_text\": generated_text,\n                \"tokens_generated\": tokens_generated,\n                \"finish_reason\": output.outputs[0].finish_reason,\n            })\n        return results\n\n    def generate_streaming(\n        self,\n        prompt: str,\n        max_tokens: int = 256,\n    ):\n        \"\"\"Generate a single completion with streaming output.\"\"\"\n        params = SamplingParams(\n            temperature=0.0,\n            max_tokens=max_tokens,\n        )\n        # vLLM supports async streaming via AsyncLLM class\n        # This is a synchronous simulation\n        output = self.llm.generate([prompt], params)[0]\n        for token_output in output.outputs[0]:\n            yield token_output.text\n\n    def get_model_info(self) -> dict:\n        \"\"\"Return model metadata.\"\"\"\n        return {\n            \"model\": self.llm.llm_engine.model_config.model,\n            \"max_model_len\": self.llm.llm_engine.model_config.max_model_len,\n            \"num_gpus\": self.llm.llm_engine.parallel_config.tensor_parallel_size,\n            \"dtype\": str(self.llm.llm_engine.model_config.dtype),\n        }\n\n# Usage (requires GPU with sufficient memory)\n# engine = VLLMServingEngine(\n#     model=\"meta-llama/Llama-3.1-8B-Instruct\",\n#     tensor_parallel_size=1,\n# )\n# results = engine.generate([\n#     \"Write a haiku about AI:\",\n#     \"Explain gradient descent simply:\",\n# ])\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph RL[\"RadixAttention Tree\"]\n        ROOT[\"Root (empty)\"] --> P1[\"/system\"]\n        ROOT --> P2[\"/different\"]\n        P1 --> P1A[\"You are a helpful agent\"]\n        P1A --> P1A1[\"User: What is AI?\"]\n        P1A --> P1A2[\"User: Explain ML\"]\n        P1A1 --> P1A1R[\"[Response: AI is...]\"]\n        P1A2 --> P1A2R[\"[Response: ML is...]\"]\n    end\n    style P1A fill:#4488ff,opacity:0.7\n    style P1A1 fill:#44ff44,opacity:0.5\n    style P1A2 fill:#44ff44,opacity:0.5\n"
      })
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
        children: "# Simulate RadixAttention prefix tree\nfrom dataclasses import dataclass, field\nfrom typing import Dict, List, Optional, Tuple\n\n@dataclass\nclass RadixNode:\n    \"\"\"A node in the RadixAttention prefix tree.\"\"\"\n    prefix: Tuple[int, ...]      # Token IDs forming this prefix\n    kv_cache: Optional[object] = None  # Reference to cached K,V tensors\n    children: Dict[int, 'RadixNode'] = field(default_factory=dict)\n    parent: Optional['RadixNode'] = None\n    access_count: int = 0\n    last_access: float = 0.0\n\nclass RadixAttentionTree:\n    \"\"\"\n    Radix tree for KV cache prefix sharing.\n    Enables automatic reuse of KV cache across requests with common prefixes.\n    \"\"\"\n\n    def __init__(self):\n        self.root = RadixNode(prefix=())\n        self.node_count = 1\n        self.cache_hits = 0\n        self.cache_misses = 0\n\n    def insert(self, token_ids: Tuple[int, ...]) -> Tuple[RadixNode, int]:\n        \"\"\"\n        Insert a sequence into the radix tree.\n        Returns the deepest matching node and number of new tokens added.\n        \"\"\"\n        current = self.root\n        matching_depth = 0\n\n        # Traverse tree to find longest matching prefix\n        while matching_depth < len(token_ids):\n            next_token = token_ids[matching_depth]\n            if next_token in current.children:\n                child = current.children[next_token]\n                child_prefix = child.prefix\n\n                # Find how many tokens match in this edge\n                match_len = 0\n                while (matching_depth + match_len < len(token_ids)\n                       and match_len < len(child_prefix)\n                       and token_ids[matching_depth + match_len] == child_prefix[match_len]):\n                    match_len += 1\n\n                if match_len == len(child_prefix):\n                    # Full edge match — move to child\n                    current = child\n                    matching_depth += match_len\n                    child.access_count += 1\n                elif match_len > 0:\n                    # Partial match — split the edge\n                    self._split_edge(current, child, match_len)\n                    current = child\n                    matching_depth += match_len\n                else:\n                    break\n            else:\n                break\n\n        # Insert remaining tokens as new nodes\n        new_tokens = 0\n        while matching_depth < len(token_ids):\n            # Find longest new prefix to add\n            remaining = token_ids[matching_depth:]\n            new_node = RadixNode(\n                prefix=remaining,\n                parent=current,\n            )\n            current.children[remaining[0]] = new_node\n            current = new_node\n            self.node_count += 1\n            new_tokens += len(remaining)\n            matching_depth = len(token_ids)\n\n        if new_tokens == 0:\n            self.cache_hits += 1\n        else:\n            self.cache_misses += 1\n\n        return current, new_tokens\n\n    def _split_edge(self, parent: RadixNode, child: RadixNode, split_at: int):\n        \"\"\"Split a child node's prefix at split_at position.\"\"\"\n        old_prefix = child.prefix\n        # Create intermediate node\n        shared_part = old_prefix[:split_at]\n        remaining_part = old_prefix[split_at:]\n\n        intermediate = RadixNode(\n            prefix=shared_part,\n            parent=parent,\n            children={remaining_part[0]: child},\n        )\n        child.prefix = remaining_part\n        child.parent = intermediate\n        parent.children[shared_part[0]] = intermediate\n\n    def find_longest_prefix(self, token_ids: Tuple[int, ...]) -> Tuple[RadixNode, int]:\n        \"\"\"\n        Find the longest matching prefix in the tree.\n        Returns (node, depth_matched).\n        \"\"\"\n        current = self.root\n        depth = 0\n\n        while depth < len(token_ids):\n            next_token = token_ids[depth]\n            if next_token not in current.children:\n                break\n            child = current.children[next_token]\n            child_prefix = child.prefix\n            # Check full edge\n            if (depth + len(child_prefix) <= len(token_ids)\n                    and token_ids[depth:depth + len(child_prefix)] == child_prefix):\n                depth += len(child_prefix)\n                current = child\n            else:\n                # Partial match\n                match_len = 0\n                while (depth + match_len < len(token_ids)\n                       and match_len < len(child_prefix)\n                       and token_ids[depth + match_len] == child_prefix[match_len]):\n                    match_len += 1\n                depth += match_len\n                break\n\n        return current, depth\n\n    def evict_lru(self, target_nodes: int = 1) -> int:\n        \"\"\"Evict least-recently-used leaf nodes. Returns count evicted.\"\"\"\n        def get_leaves(node: RadixNode) -> List[RadixNode]:\n            if not node.children:\n                return [node]\n            leaves = []\n            for child in node.children.values():\n                leaves.extend(get_leaves(child))\n            return leaves\n\n        leaves = get_leaves(self.root)\n        # Sort by access count (ascending) — simplest eviction policy\n        leaves.sort(key=lambda n: n.access_count)\n        evicted = 0\n        for leaf in leaves[:target_nodes]:\n            if leaf.parent:\n                del leaf.parent.children[leaf.prefix[0]]\n                self.node_count -= 1\n                evicted += 1\n        return evicted\n\n    def print_tree(self, node: Optional[RadixNode] = None, depth: int = 0):\n        \"\"\"Print the radix tree structure.\"\"\"\n        if node is None:\n            node = self.root\n            print(\"RadixAttention Tree:\")\n        \n        # Convert token IDs to readable form when possible\n        if node.prefix:\n            prefix_str = f\"tokens={node.prefix[:8]}...\"\n        else:\n            prefix_str = \"root\"\n        \n        hits = \"HIT\" if node.access_count > 0 else \"\"\n        print(f\"{'  ' * depth}├─ {prefix_str} [access: {node.access_count}] {hits}\")\n        \n        for child in node.children.values():\n            self.print_tree(child, depth + 1)\n\n    def get_stats(self) -> dict:\n        \"\"\"Return statistics about the radix tree.\"\"\"\n        return {\n            \"nodes\": self.node_count,\n            \"cache_hits\": self.cache_hits,\n            \"cache_misses\": self.cache_misses,\n            \"hit_rate\": self.cache_hits / max(1, self.cache_hits + self.cache_misses) * 100,\n        }\n\n# Demonstrate prefix sharing\ntree = RadixAttentionTree()\n\n# Four requests with overlapping prefixes\nconversations = [\n    # System prompt shared by all\n    (1, 2, 3, 4, 5, 10, 11, 12, 13),      # Request 1: system + \"what is AI?\"\n    (1, 2, 3, 4, 5, 14, 15, 16, 17),      # Request 2: system + \"explain ML\"\n    (1, 2, 3, 4, 5, 6, 7, 18, 19, 20),    # Request 3: system + \"write code\"\n    (1, 2, 3, 4, 5, 10, 11, 21, 22),      # Request 4: system + \"what is AI?\" follow-up\n]\n\nfor i, tokens in enumerate(conversations):\n    node, new_tokens = tree.insert(tokens)\n    print(f\"Request {i+1}: {len(tokens)} tokens, \"\n          f\"new KV tokens: {new_tokens}, \"\n          f\"saved: {len(tokens) - new_tokens}\")\n\nprint(f\"\\nStats: {tree.get_stats()}\")\nprint(f\"Total tokens processed: {sum(len(t) for t in conversations)}\")\nprint(f\"New KV tokens computed: {sum(len(t) for t in conversations) - tree.cache_misses}\")\n\n# Key result: with prefix sharing, the system prompt (tokens 1-5) is computed once\n# Subsequent requests save 5 tokens of KV cache computation each\n"
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
        children: "# SGLang programmatic API example\n# Requires: pip install sglang[all]\n\nimport sglang as sgl\nfrom sglang import function, gen, set_default_backend, Runtime\n\n# Define a structured generation function\n@sgl.function\ndef extract_info(s, text: str):\n    \"\"\"Extract structured information from text.\"\"\"\n    s += text\n    s += \"Extract the following:\\n\"\n    s += \"Name: \" + gen(\"name\", max_tokens=20, stop=\"\\n\")\n    s += \"Age: \" + gen(\"age\", max_tokens=5, stop=\"\\n\", regex=\"\\\\d+\")\n    s += \"Occupation: \" + gen(\"occupation\", max_tokens=30, stop=\"\\n\")\n    s += \"Email: \" + gen(\"email\", max_tokens=40, stop=\"\\n\",\n                         regex=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}\")\n    return s\n\n# Generate JSON output with regex constraints\n@sgl.function\ndef generate_json(s, instruction: str):\n    \"\"\"Generate a JSON object with constrained decoding.\"\"\"\n    s += instruction + \"\\n\"\n    s += \"```json\\n\"\n    s += \"{\\n\"\n    s += '  \"name\": \"' + gen(\"name\", max_tokens=30, stop='\"') + '\",\\n'\n    s += '  \"value\": ' + gen(\"value\", max_tokens=10, stop=\",\", regex=\"-?\\\\d+\\\\.?\\\\d*\") + ',\\n'\n    s += '  \"active\": ' + gen(\"active\", max_tokens=5, stop=\",\", regex=\"true|false\") + ',\\n'\n    s += '  \"tags\": ' + gen(\"tags\", max_tokens=100, stop=\"\\n\") + '\\n'\n    s += \"}\\n\"\n    s += \"```\\n\"\n    return s\n\n# Run with local runtime\n# runtime = Runtime(\n#     model_path=\"meta-llama/Llama-3.1-8B-Instruct\",\n#     tp_size=1,\n# )\n# set_default_backend(runtime)\n\n# result = extract_info.run(\n#     text=\"John Doe is a 28-year-old software engineer at johndoe@company.com\"\n# )\n# print(result[\"name\"])      # \"John Doe\"\n# print(result[\"age\"])       # \"28\"\n# print(result[\"occupation\"]) # \"software engineer\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "grammar-constrained-generation",
      children: "Grammar-Constrained Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SGLang supports full grammar-based generation using context-free grammars (CFG). This is useful for producing valid SQL, code, or structured data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Grammar-constrained generation in SGLang\n\n# Generate valid SQL queries\nsql_grammar = \"\"\"\n?start: select_statement\nselect_statement: \"SELECT\" column_list \"FROM\" table_name where_clause?\ncolumn_list: column (\",\" column)*\ncolumn: \"name\" | \"age\" | \"email\" | \"id\" | \"COUNT(*)\"\ntable_name: \"users\" | \"orders\" | \"products\" | \"transactions\"\nwhere_clause: \"WHERE\" condition\ncondition: column operator value\noperator: \"=\" | \">\" | \"<\" | \">=\" | \"<=\" | \"LIKE\"\nvalue: NUMBER | STRING\nNUMBER: /\\\\d+/\nSTRING: /'[^']*'/\n\"\"\"\n\n# In SGLang, constrained decoding is built into the gen() call\n# The framework handles logit masking to enforce grammar compliance\n\n@sgl.function\ndef sql_generator(s, question: str):\n    \"\"\"Generate a SQL query from a natural language question.\"\"\"\n    s += f\"Question: {question}\\n\"\n    s += \"SQL query: SELECT \" + gen(\"columns\", max_tokens=50, stop=\"FROM\") + \" \"\n    s += \"FROM \" + gen(\"table\", max_tokens=20, stop=\"WHERE\", regex=\"users|orders|products\")\n    s += \" WHERE \" + gen(\"condition\", max_tokens=50, stop=\";\") + \";\"\n    return s\n\n# Each gen() call applies logit filtering to ensure the output\n# matches the specified regex or grammar pattern at every decoding step\n"
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
        children: "# Simulate constrained decoding with logit masking\nimport numpy as np\nfrom typing import List, Set\n\nclass ConstrainedDecoder:\n    \"\"\"\n    Simulate constrained decoding with regex-based logit masking.\n    Demonstrates how constrained generation works under the hood.\n    \"\"\"\n\n    def __init__(self, vocabulary: List[str]):\n        self.vocab = vocabulary\n        self.vocab_size = len(vocabulary)\n\n    def _build_regex_mask(self, current_text: str, regex_pattern: str) -> np.ndarray:\n        \"\"\"\n        Build a boolean mask for valid tokens given the current text and regex.\n        A token is valid if current_text + token matches the regex prefix.\n        \"\"\"\n        import re\n        mask = np.ones(self.vocab_size, dtype=bool)\n        for i, token in enumerate(self.vocab):\n            candidate = current_text + token\n            # Check if candidate is a valid prefix of the regex\n            try:\n                if re.match(regex_pattern, candidate):\n                    mask[i] = True\n                else:\n                    # Also allow partial matches (for multi-token sequences)\n                    partial = re.compile(f\"^{re.escape(candidate)}\")\n                    if partial.match(candidate):\n                        mask[i] = True\n                    else:\n                        mask[i] = False\n            except re.error:\n                mask[i] = False\n        return mask\n\n    def _build_json_mask(self, current_text: str, schema: dict) -> np.ndarray:\n        \"\"\"\n        Build a mask for JSON schema constraints.\n        Validates that the current output conforms to the schema.\n        \"\"\"\n        mask = np.ones(self.vocab_size, dtype=bool)\n        # Simplified: check if adding the token would break JSON structure\n        for i, token in enumerate(self.vocab):\n            candidate = current_text + token\n            # Basic checks: balanced quotes, valid JSON prefix\n            quote_count = candidate.count('\"')\n            if quote_count % 2 != 0 and token == '\"':\n                # Check if closing an unopened quote\n                if current_text.count('\"') % 2 == 0:\n                    mask[i] = True\n                else:\n                    mask[i] = True  # Allow closing quote\n            elif token in ('{', '}', '[', ']', ':', ','):\n                mask[i] = True  # Structural characters always valid\n            elif quote_count % 2 == 1:\n                mask[i] = True  # Inside a string — anything goes\n            else:\n                # Outside string — only structural chars and whitespace\n                if token.strip() in ('', '{', '}', '[', ']', ':', ','):\n                    mask[i] = True\n                else:\n                    mask[i] = False\n        return mask\n\n    def constrained_sample(\n        self,\n        logits: np.ndarray,\n        current_text: str,\n        constraint_type: str = \"json\",\n        schema: dict = None,\n    ) -> str:\n        \"\"\"Sample a token subject to constraints.\"\"\"\n        if constraint_type == \"json\":\n            mask = self._build_json_mask(current_text, schema or {})\n        elif constraint_type == \"regex\":\n            mask = self._build_regex_mask(current_text, schema or \".*\")\n        else:\n            mask = np.ones(self.vocab_size, dtype=bool)\n\n        # Apply mask (set invalid logits to -inf)\n        masked_logits = np.where(mask, logits, -np.inf)\n\n        # Sample from masked distribution\n        probs = np.exp(masked_logits - np.max(masked_logits))\n        probs = probs / np.sum(probs)\n        sampled_idx = np.random.choice(self.vocab_size, p=probs)\n        return self.vocab[sampled_idx]\n\n    def generate_constrained(\n        self,\n        logits_generator,\n        constraint_type: str = \"json\",\n        max_tokens: int = 50,\n    ):\n        \"\"\"Generate a sequence with constrained decoding.\"\"\"\n        output = \"\"\n        for step in range(max_tokens):\n            logits = logits_generator(output)\n            token = self.constrained_sample(\n                logits, output, constraint_type\n            )\n            output += token\n            # Check for termination\n            if constraint_type == \"json\" and output.strip().endswith(\"}\"):\n                break\n        return output\n\n# Demonstration with a small vocabulary\nvocab = [chr(i) for i in range(32, 127)]  # Printable ASCII\ndecoder = ConstrainedDecoder(vocab)\n\ndef dummy_logits(text: str) -> np.ndarray:\n    \"\"\"Dummy logits generator — uniform distribution.\"\"\"\n    return np.zeros(len(vocab))\n\n# Generate constrained JSON\njson_output = decoder.generate_constrained(\n    dummy_logits,\n    constraint_type=\"json\",\n    max_tokens=100,\n)\nprint(f\"Constrained JSON output:\\n{json_output}\")\n\n# Key insight: constrained decoding uses logit masking\n# to guarantee output format compliance at every step\n# This eliminates the need for post-processing or retries\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "30-hugging-face-tgi",
      children: "3.0 Hugging Face TGI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hugging Face Text Generation Inference (TGI) is a production-grade serving solution from Hugging Face. It supports quantization, streaming, and watermarking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph TGI[\"TGI Architecture\"]\n        R[Router] --> S1[Shard 0<br/>Model Parallel]\n        R --> S2[Shard 1]\n        R --> SN[Shard N]\n    end\n    subgraph Features[\"Key Features\"]\n        Q[Quantization<br/>GPTQ/AWQ/FP8]\n        SS[SSE Streaming]\n        WM[Watermarking<br/>AEGIS/KGW]\n        CB[Continuous Batching]\n    end\n    subgraph Input[\"Input Processing\"]\n        TOK[Tokenization]\n        TR[Truncation]\n    end\n    TOK --> R\n    R --> SS\n    Q --> S1\n    CB --> S1\n    WM --> S1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "server-sent-events-sse-streaming",
      children: "Server-Sent Events (SSE) Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TGI uses SSE to stream tokens one at a time over HTTP. This gives users sub-100ms time-to-first-token."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TGI client example — streaming with SSE\nimport json\nimport requests\n\ndef tgi_streaming_chat(\n    messages: list,\n    model_url: str = \"http://localhost:8080\",\n    max_tokens: int = 512,\n    temperature: float = 0.7,\n):\n    \"\"\"\n    Send a chat request to TGI and stream the response.\n    TGI uses Server-Sent Events (SSE) for streaming.\n    \"\"\"\n    # Format prompt for chat model\n    prompt = \"\"\n    for msg in messages:\n        if msg[\"role\"] == \"system\":\n            prompt += f\"<|system|>\\n{msg['content']}\\n\"\n        elif msg[\"role\"] == \"user\":\n            prompt += f\"<|user|>\\n{msg['content']}\\n\"\n        elif msg[\"role\"] == \"assistant\":\n            prompt += f\"<|assistant|>\\n{msg['content']}\\n\"\n    prompt += \"<|assistant|>\\n\"\n\n    payload = {\n        \"inputs\": prompt,\n        \"parameters\": {\n            \"max_new_tokens\": max_tokens,\n            \"temperature\": temperature,\n            \"top_p\": 0.9,\n            \"do_sample\": True,\n            \"watermark\": True,  # Enable AEGIS watermarking\n        },\n        \"stream\": True,  # Enable SSE streaming\n    }\n\n    response = requests.post(\n        f\"{model_url}/generate_stream\",\n        json=payload,\n        stream=True,\n    )\n\n    full_text = \"\"\n    for line in response.iter_lines():\n        if line:\n            line = line.decode(\"utf-8\")\n            if line.startswith(\"data:\"):\n                data = json.loads(line[5:])\n                if \"token\" in data and \"text\" in data[\"token\"]:\n                    token_text = data[\"token\"][\"text\"]\n                    full_text += token_text\n                    yield token_text\n\n    return full_text\n\n# Example usage (requires running TGI server)\n# for token in tgi_streaming_chat([\n#     {\"role\": \"system\", \"content\": \"You are a helpful AI assistant.\"},\n#     {\"role\": \"user\", \"content\": \"Write a short poem about AI.\"},\n# ]):\n#     print(token, end=\"\", flush=True)\n\n# Non-streaming request\ndef tgi_generate(\n    prompt: str,\n    model_url: str = \"http://localhost:8080\",\n    max_tokens: int = 256,\n):\n    \"\"\"Send a non-streaming generation request.\"\"\"\n    payload = {\n        \"inputs\": prompt,\n        \"parameters\": {\n            \"max_new_tokens\": max_tokens,\n            \"temperature\": 0.0,\n            \"do_sample\": False,\n        },\n    }\n    response = requests.post(\n        f\"{model_url}/generate\",\n        json=payload,\n    )\n    return response.json()[\"generated_text\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "quantization-support",
      children: "Quantization Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TGI supports multiple quantization methods for reducing memory footprint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TGI server startup with quantization\n# Start with quantization:\n# text-generation-launcher \\\n#     --model-id meta-llama/Llama-3.1-8B-Instruct \\\n#     --quantize awq \\\n#     --max-input-length 4096 \\\n#     --max-total-tokens 8192\n\n# Supported quantizations:\nquantization_options = {\n    \"awq\": {\n        \"description\": \"Activation-Aware Weight Quantization (INT4)\",\n        \"memory_reduction\": \"4x vs FP16\",\n        \"speed\": \"0.9x - 1.0x\",\n        \"use_case\": \"Best for GPU memory constrained deployments\",\n    },\n    \"gptq\": {\n        \"description\": \"GPT Post-Training Quantization (INT4/INT3)\",\n        \"memory_reduction\": \"4x vs FP16\",\n        \"speed\": \"0.85x - 0.95x\",\n        \"use_case\": \"When throughput is less critical than memory\",\n    },\n    \"fp8\": {\n        \"description\": \"8-bit floating point (H100 only)\",\n        \"memory_reduction\": \"2x vs FP16\",\n        \"speed\": \"1.2x - 1.5x\",\n        \"use_case\": \"Best performance on H100 with minimal accuracy loss\",\n    },\n    \"bitsandbytes\": {\n        \"description\": \"8-bit/4-bit via bitsandbytes library\",\n        \"memory_reduction\": \"2x - 4x\",\n        \"speed\": \"0.7x - 0.9x\",\n        \"use_case\": \"Quick quantization without calibration data\",\n    },\n}\n\nprint(\"TGI Quantization Options:\")\nprint(\"=\"*60)\nfor qname, qinfo in quantization_options.items():\n    print(f\"\\n{qname.upper()}:\")\n    print(f\"  {qinfo['description']}\")\n    print(f\"  Memory: {qinfo['memory_reduction']}\")\n    print(f\"  Speed:  {qinfo['speed']}\")\n    print(f\"  Use:    {qinfo['use_case']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "watermarking",
      children: "Watermarking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TGI supports AEGIS watermarking — a statistical watermark embedded in generated text that allows detection of AI-generated content."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Watermarking in TGI\nclass WatermarkDetector:\n    \"\"\"Simulate TGI's watermark detection.\"\"\"\n\n    def __init__(self, watermark_key: int = 42):\n        self.key = watermark_key\n        self.vocab_size = 32000\n\n    def _token_statistic(self, token_id: int, position: int) -> float:\n        \"\"\"Compute a pseudo-random statistic based on token and position.\"\"\"\n        import hashlib\n        seed = f\"{self.key}:{position}:{token_id}\"\n        hash_val = int(hashlib.sha256(seed.encode()).hexdigest(), 16)\n        return (hash_val % 1000) / 1000.0\n\n    def detect_watermark(\n        self,\n        token_ids: list,\n        max_tokens: int = 100,\n    ) -> dict:\n        \"\"\"\n        Detect if the text was generated with AEGIS watermark.\n        Returns score and z-value.\n        \"\"\"\n        green_count = 0\n        total = min(len(token_ids), max_tokens)\n\n        for pos in range(total):\n            stat = self._token_statistic(token_ids[pos], pos)\n            # Green list tokens have statistic > 0.5\n            if stat > 0.5:\n                green_count += 1\n\n        # Expected green rate without watermark: 50%\n        expected = total * 0.5\n        std_dev = (total * 0.5 * 0.5) ** 0.5\n        z_score = (green_count - expected) / max(std_dev, 1)\n\n        return {\n            \"green_tokens\": green_count,\n            \"total_tokens\": total,\n            \"green_ratio\": green_count / max(total, 1),\n            \"z_score\": z_score,\n            \"watermarked\": z_score > 4.0,  # Threshold for detection\n        }\n\n# Demonstrate watermark detection\ndetector = WatermarkDetector(watermark_key=42)\n\n# Simulate watermarked text (more green-list tokens)\nwatermarked_tokens = [100 + (i % 256) for i in range(200)]\nresult = detector.detect_watermark(watermarked_tokens)\nprint(\"Watermark Detection Result:\")\nprint(f\"  Green tokens: {result['green_tokens']}/{result['total_tokens']}\")\nprint(f\"  Green ratio: {result['green_ratio']:.3f}\")\nprint(f\"  Z-score: {result['z_score']:.2f}\")\nprint(f\"  Watermarked: {result['watermarked']}\")\n\n# Key insight: AEGIS watermark embeds a statistical signal\n# that survives text transformation (subsampling, rephrasing)\n# but is invisible to human readers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tgi-configuration",
      children: "TGI Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TGI server configuration parameters\ntgi_config = {\n    \"model_id\": \"meta-llama/Llama-3.1-8B-Instruct\",\n    \"quantize\": \"awq\",               # Quantization method\n    \"max_batch_prefill_tokens\": 4096,  # Max tokens in prefill batch\n    \"max_batch_total_tokens\": 8192,    # Max tokens across all sequences\n    \"max_input_length\": 4096,          # Max input prompt length\n    \"max_total_tokens\": 8192,          # Max input + generation length\n    \"waiting_served_ratio\": 0.3,       # Ratio of waiting vs running requests\n    \"max_waiting_tokens\": 20,          # Max tokens a request waits before decode\n    \"cuda_graphs\": True,               # Enable CUDA graph capture for speed\n    \"rope_scaling\": None,              # RoPE scaling for extended contexts\n    \"watermark\": True,                 # Enable AEGIS watermarking\n    \"hostname\": \"0.0.0.0\",\n    \"port\": 8080,\n    \"sharded\": False,                  # Enable tensor parallelism\n    \"num_shard\": 1,                    # Number of GPU shards\n}\n\nprint(\"TGI Server Configuration:\")\nfor key, value in tgi_config.items():\n    print(f\"  {key}: {value}\")\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Repo[\"Model Repository\"]\n        SUB[model_repository/]\n        SUB --> M1[llama_70b/]\n        M1 --> M1_V1[1/]\n        M1_V1 --> M1_CFG[config.pbtxt]\n        M1_V1 --> M1_ENG[model.plan]\n        \n        SUB --> M2[bge_embedding/]\n        M2 --> M2_V1[1/]\n        M2_V1 --> M2_CFG[config.pbtxt]\n        M2_V1 --> M2_ONNX[model.onnx]\n        \n        SUB --> M3[ensemble_pipeline/]\n        M3 --> M3_V1[1/]\n        M3_V1 --> M3_CFG[config.pbtxt]\n        \n        SUB --> M4[tokenizer_add/]\n        M4 --> M4_V1[1/]\n        M4 --> M4_CFG[config.pbtxt]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each model directory contains versioned subdirectories (1/, 2/, ...) with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config.pbtxt"
      }), " and the model file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-protobuf",
        children: "# config.pbtxt for a Triton model\n# This defines the model's input/output shapes, backend, and scheduling\n\nname: \"llama_70b\"\nbackend: \"tensorrtllm\"\n\nmax_batch_size: 0  # Disable automatic batching — use TRT-LLM's batching\n\ninput [\n  {\n    name: \"input_ids\"\n    data_type: TYPE_INT32\n    dims: [-1]  # Variable-length sequence\n  },\n  {\n    name: \"input_lengths\"\n    data_type: TYPE_INT32\n    dims: [1]\n  },\n  {\n    name: \"request_output_len\"\n    data_type: TYPE_INT32\n    dims: [1]\n  }\n]\n\noutput [\n  {\n    name: \"output_ids\"\n    data_type: TYPE_INT32\n    dims: [-1, -1]  # batch_size x seq_len\n  }\n]\n\ninstance_group [\n  {\n    count: 2  # Two model instances on different GPUs\n    kind: KIND_GPU\n    gpus: [0, 1]\n  }\n]\n\ndynamic_batching {\n  max_queue_delay_microseconds: 100\n  preferred_batch_size: [1, 2, 4, 8]\n}\n"
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
        children: "# Simulate Triton's dynamic batching behavior\nimport time\nimport random\nfrom collections import deque\nfrom dataclasses import dataclass\n\n@dataclass\nclass TritonRequest:\n    \"\"\"A request arriving at Triton.\"\"\"\n    id: int\n    arrival_time: float\n    batch_size: int = 1  # Effective batch contribution\n\nclass DynamicBatcher:\n    \"\"\"\n    Simulate Triton's dynamic batching scheduler.\n    Waits up to max_delay_ms to form a batch.\n    \"\"\"\n\n    def __init__(\n        self,\n        preferred_batch_size: int = 8,\n        max_delay_ms: int = 100,\n        max_queue_size: int = 64,\n    ):\n        self.preferred_batch_size = preferred_batch_size\n        self.max_delay_s = max_delay_ms / 1000.0\n        self.max_queue_size = max_queue_size\n        self.queue: deque = deque()\n        self.batches_formed = 0\n        self.total_requests = 0\n        self.total_latency = 0.0\n\n    def enqueue(self, request: TritonRequest):\n        \"\"\"Add a request to the queue.\"\"\"\n        if len(self.queue) >= self.max_queue_size:\n            return False  # Queue full — reject\n        self.queue.append(request)\n        self.total_requests += 1\n        return True\n\n    def form_batch(self) -> list:\n        \"\"\"\n        Form a batch from queued requests.\n        Returns list of requests to process.\n        \"\"\"\n        now = time.time()\n        batch = []\n\n        # Wait until preferred size or timeout\n        while self.queue:\n            req = self.queue[0]\n\n            # Check timeout for the oldest request\n            wait_time = (now - req.arrival_time)\n\n            if wait_time >= self.max_delay_s:\n                # Timeout — form batch with whatever we have\n                while self.queue:\n                    batch.append(self.queue.popleft())\n                break\n            elif len(batch) >= self.preferred_batch_size:\n                # Reached preferred batch size — process now\n                break\n            else:\n                # Take the next request\n                batch.append(self.queue.popleft())\n\n        if batch:\n            self.batches_formed += 1\n            # Compute average wait time for this batch\n            avg_wait = sum(now - r.arrival_time for r in batch) / len(batch)\n            self.total_latency += avg_wait\n\n        return batch\n\n    def simulate_requests(\n        self,\n        num_requests: int = 100,\n        arrival_rate: float = 50.0,  # Requests per second\n    ):\n        \"\"\"Simulate a stream of incoming requests.\"\"\"\n        print(f\"{'Request':<10} {'Arrival':<12} {'Batch Size':<12} {'Wait (ms)':<12}\")\n        print(\"=\"*46)\n\n        arrivals = []\n        current_time = 0.0\n        for i in range(num_requests):\n            # Exponential inter-arrival times\n            inter_arrival = random.expovariate(arrival_rate)\n            current_time += inter_arrival\n            arrivals.append(current_time)\n\n        for i, arr_time in enumerate(arrivals):\n            req = TritonRequest(id=i, arrival_time=arr_time)\n            self.enqueue(req)\n\n            # Try to form a batch\n            batch = self.form_batch()\n            if batch:\n                wait_ms = (time.time() - batch[0].arrival_time) * 1000\n                print(f\"{batch[0].id:<10} {arr_time:<12.4f} \"\n                      f\"{len(batch):<12} {wait_ms:<12.2f}\")\n\n        # Process remaining queue\n        remaining = list(self.queue)\n        if remaining:\n            batch_time = time.time()\n            wait_ms = (batch_time - remaining[0].arrival_time) * 1000\n            print(f\"{remaining[0].id:<10} {arrivals[-1]:<12.4f} \"\n                  f\"{len(remaining):<12} {wait_ms:<12.2f}\")\n\n        print(f\"\\nStatistics:\")\n        print(f\"  Batches formed: {self.batches_formed}\")\n        print(f\"  Total requests: {self.total_requests}\")\n        avg_batch = self.total_requests / max(self.batches_formed, 1)\n        print(f\"  Avg batch size: {avg_batch:.1f}\")\n        avg_lat = self.total_latency / max(self.batches_formed, 1) * 1000\n        print(f\"  Avg queue latency: {avg_lat:.2f} ms\")\n\n# Run simulation\nbatcher = DynamicBatcher(\n    preferred_batch_size=8,\n    max_delay_ms=100,\n)\nbatcher.simulate_requests(num_requests=50, arrival_rate=60.0)\n\n# Key finding: dynamic batching reduces GPU idle time\n# at the cost of adding queue delay to inference latency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ensemble-models",
      children: "Ensemble Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triton supports ensemble models — directed acyclic graphs of models connected as a pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Ensemble model configuration for a RAG pipeline\n# This config chains: embedding -> retrieval -> generation\n\nensemble_config = {\n    \"name\": \"rag_pipeline\",\n    \"platform\": \"ensemble\",\n    \"max_batch_size\": 8,\n    \"input\": [\n        {\"name\": \"query\", \"data_type\": \"TYPE_STRING\", \"dims\": [1]},\n    ],\n    \"output\": [\n        {\"name\": \"response\", \"data_type\": \"TYPE_STRING\", \"dims\": [1]},\n    ],\n    \"ensemble_scheduling\": {\n        \"step\": [\n            {\n                \"model_name\": \"bge_embedding\",\n                \"model_version\": 1,\n                \"input_map\": {\"input_ids\": \"query\"},\n                \"output_map\": {\"embedding\": \"query_embed\"},\n            },\n            {\n                \"model_name\": \"vector_search\",\n                \"model_version\": 1,\n                \"input_map\": {\"embedding\": \"query_embed\"},\n                \"output_map\": {\"documents\": \"retrieved_docs\"},\n            },\n            {\n                \"model_name\": \"llama_70b\",\n                \"model_version\": 1,\n                \"input_map\": {\n                    \"prompt\": \"retrieved_docs\",\n                    \"query\": \"query\",\n                },\n                \"output_map\": {\"output\": \"response\"},\n            },\n        ]\n    }\n}\n\nprint(\"Ensemble Pipeline: query -> embedding -> retrieval -> generation\")\nfor i, step in enumerate(ensemble_config[\"ensemble_scheduling\"][\"step\"]):\n    print(f\"  Step {i+1}: {step['model_name']} v{step['model_version']}\")\n\n# Triton ensembles are useful for:\n# 1. Multi-modal pipelines (vision + language)\n# 2. RAG pipelines (embed + retrieve + generate)\n# 3. Pre/post processing with custom backends\n# 4. A/B testing different model versions\n"
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
        children: "# Simulate concurrent model execution across GPUs\nfrom dataclasses import dataclass\nimport time\nimport threading\nfrom typing import Dict, List\n\n@dataclass\nclass ModelInstance:\n    \"\"\"A single model instance running on a GPU.\"\"\"\n    model_name: str\n    gpu_id: int\n    instance_id: int\n    busy: bool = False\n    total_requests: int = 0\n    total_time_ms: float = 0.0\n\nclass ConcurrentExecutor:\n    \"\"\"\n    Simulate Triton's concurrent model execution.\n    Multiple model instances run in parallel across GPUs.\n    \"\"\"\n\n    def __init__(self):\n        self.instances: Dict[str, List[ModelInstance]] = {}\n        self.lock = threading.Lock()\n\n    def add_instance(self, model_name: str, gpu_id: int, count: int = 1):\n        \"\"\"Add model instances to the pool.\"\"\"\n        if model_name not in self.instances:\n            self.instances[model_name] = []\n        for i in range(count):\n            inst = ModelInstance(\n                model_name=model_name,\n                gpu_id=gpu_id,\n                instance_id=i,\n            )\n            self.instances[model_name].append(inst)\n\n    def execute(self, model_name: str, inference_time_ms: float) -> Dict:\n        \"\"\"\n        Execute inference on an available instance.\n        Blocks until an instance is free.\n        \"\"\"\n        while True:\n            with self.lock:\n                # Find an available instance\n                for inst in self.instances.get(model_name, []):\n                    if not inst.busy:\n                        inst.busy = True\n                        inst.total_requests += 1\n                        inst.total_time_ms += inference_time_ms\n                        break\n                else:\n                    # No free instance — wait and retry\n                    time.sleep(0.001)\n                    continue\n\n            # Execute (simulate with sleep)\n            time.sleep(inference_time_ms / 1000)\n\n            with self.lock:\n                inst.busy = False\n\n            return {\n                \"model\": model_name,\n                \"gpu\": inst.gpu_id,\n                \"instance\": inst.instance_id,\n                \"time_ms\": inference_time_ms,\n            }\n\n    def print_stats(self):\n        \"\"\"Print execution statistics.\"\"\"\n        print(\"\\nConcurrent Execution Statistics:\")\n        print(\"=\"*60)\n        for model_name, instances in self.instances.items():\n            print(f\"\\nModel: {model_name}\")\n            for inst in instances:\n                util = inst.total_time_ms / (inst.total_requests * 1000) * 100\n                print(f\"  GPU {inst.gpu_id}, Instance {inst.instance_id}: \"\n                      f\"{inst.total_requests} requests, \"\n                      f\"utilization ~{util:.1f}%\")\n\n# Demonstrate concurrent execution\nexecutor = ConcurrentExecutor()\nexecutor.add_instance(\"llama_70b\", gpu_id=0, count=1)\nexecutor.add_instance(\"llama_70b\", gpu_id=1, count=1)\nexecutor.add_instance(\"bge_embedding\", gpu_id=0, count=2)\n\n# Submit concurrent requests\nresults = []\nfor i in range(10):\n    result = executor.execute(\"llama_70b\", inference_time_ms=500)\n    results.append(result)\n    print(f\"Request {i+1}: GPU {result['gpu']}, \"\n          f\"Instance {result['instance']}, {result['time_ms']}ms\")\n\nexecutor.print_stats()\n\n# Key insight: multiple instances increase throughput at the cost of total memory\n# Triton allows fine-grained control over GPU utilization per model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "triton-client-example",
      children: "Triton Client Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Triton client usage for inference\nimport tritonclient.http as httpclient\nimport numpy as np\n\nclass TritonInferenceClient:\n    \"\"\"Client for communicating with Triton Inference Server.\"\"\"\n\n    def __init__(self, url: str = \"localhost:8000\"):\n        self.client = httpclient.InferenceServerClient(url=url)\n        self.url = url\n\n    def get_model_info(self, model_name: str) -> dict:\n        \"\"\"Get metadata about a deployed model.\"\"\"\n        try:\n            metadata = self.client.get_model_metadata(model_name)\n            config = self.client.get_model_config(model_name)\n            return {\n                \"name\": metadata.model_name,\n                \"versions\": metadata.versions,\n                \"inputs\": [\n                    {\"name\": i.name, \"dtype\": i.datatype, \"shape\": i.shape}\n                    for i in metadata.inputs\n                ],\n                \"outputs\": [\n                    {\"name\": o.name, \"dtype\": o.datatype, \"shape\": o.shape}\n                    for o in metadata.outputs\n                ],\n                \"max_batch_size\": config.max_batch_size,\n            }\n        except Exception as e:\n            return {\"error\": str(e)}\n\n    def infer(\n        self,\n        model_name: str,\n        inputs: Dict[str, np.ndarray],\n        model_version: str = \"1\",\n    ) -> Dict[str, np.ndarray]:\n        \"\"\"\n        Run inference on Triton.\n        inputs: dictionary of input_name -> numpy array\n        \"\"\"\n        triton_inputs = []\n        for name, data in inputs.items():\n            infer_input = httpclient.InferInput(name, data.shape, \n                                                self._numpy_to_triton_dtype(data.dtype))\n            infer_input.set_data_from_numpy(data)\n            triton_inputs.append(infer_input)\n\n        # Infer\n        results = self.client.infer(\n            model_name,\n            triton_inputs,\n            model_version=model_version,\n        )\n\n        # Parse outputs\n        outputs = {}\n        for output_name in results.get_response()[\"outputs\"]:\n            name = output_name[\"name\"]\n            outputs[name] = results.as_numpy(name)\n        return outputs\n\n    @staticmethod\n    def _numpy_to_triton_dtype(dtype) -> str:\n        mapping = {\n            np.float32: \"FP32\",\n            np.float16: \"FP16\",\n            np.int32: \"INT32\",\n            np.int64: \"INT64\",\n            np.bool_: \"BOOL\",\n            np.object_: \"BYTES\",  # String\n        }\n        return mapping.get(dtype.type, \"FP32\")\n\n    def list_models(self) -> list:\n        \"\"\"List all models deployed on Triton.\"\"\"\n        response = self.client.get_model_repository_index()\n        return [model[\"name\"] for model in response]\n\n# Usage example\n# client = TritonInferenceClient(\"triton-server:8001\")\n# models = client.list_models()\n# print(f\"Available models: {models}\")\n#\n# # Inference with TensorRT LLM backend\n# input_data = np.array([[101, 205, 340]], dtype=np.int32)\n# results = client.infer(\"llama_70b\", {\"input_ids\": input_data})\n# print(results[\"output_ids\"])\n"
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
        children: "# Compare serving frameworks across key dimensions\n\ncomparison = {\n    \"Feature\": [\n        \"KV Cache Management\",\n        \"Batch Scheduling\",\n        \"Prefix Caching\",\n        \"Constrained Decoding\",\n        \"Quantization\",\n        \"Multi-GPU Support\",\n        \"Streaming\",\n        \"OpenAI API Compat\",\n        \"Model Repository\",\n        \"Ensemble Pipelines\",\n        \"Custom Backends\",\n        \"Framework Support\",\n        \"Ease of Setup\",\n        \"Community\",\n    ],\n    \"vLLM\": [\n        \"PagedAttention ★★★\",\n        \"Continuous Batching ★★★\",\n        \"Automatic ★★\",\n        \"Basic regex ★\",\n        \"AWQ/GPTQ/FP8 ★★★\",\n        \"Tensor Parallel ★★★\",\n        \"SSE ★★★\",\n        \"Full ★★★\",\n        \"No ★\",\n        \"No ★\",\n        \"No ★\",\n        \"PyTorch only ★★\",\n        \"Very easy ★★★\",\n        \"Largest ★★★\",\n    ],\n    \"SGLang\": [\n        \"RadixAttention ★★★\",\n        \"Continuous Batching ★★★\",\n        \"Radix Tree ★★★\",\n        \"Full grammar ★★★\",\n        \"AWQ/GPTQ ★★\",\n        \"Tensor Parallel ★★\",\n        \"SSE ★★★\",\n        \"Partial ★★\",\n        \"No ★\",\n        \"No ★\",\n        \"No ★\",\n        \"PyTorch only ★★\",\n        \"Easy ★★★\",\n        \"Growing ★★\",\n    ],\n    \"TGI\": [\n        \"Basic ★\",\n        \"Continuous Batching ★★\",\n        \"No ★\",\n        \"No ★\",\n        \"AWQ/GPTQ/FP8/BNB ★★★\",\n        \"Tensor Parallel ★★\",\n        \"SSE ★★★\",\n        \"Partial ★★\",\n        \"No ★\",\n        \"No ★\",\n        \"No ★\",\n        \"PyTorch only ★★\",\n        \"Easy ★★\",\n        \"Large ★★\",\n    ],\n    \"Triton\": [\n        \"Backend-specific ★\",\n        \"Dynamic Batching ★★★\",\n        \"No ★\",\n        \"No ★\",\n        \"TensorRT INT8/FP8 ★★★\",\n        \"Multi-instance ★★★\",\n        \"gRPC/HTTP ★★\",\n        \"No ★\",\n        \"Full ★★★\",\n        \"Full ★★★\",\n        \"Full ★★★\",\n        \"Multi-framework ★★★\",\n        \"Complex ★\",\n        \"Enterprise ★★\",\n    ],\n}\n\ndef print_comparison_table(data):\n    \"\"\"Print the comparison as a formatted table.\"\"\"\n    features = data[\"Feature\"]\n    engines = [k for k in data.keys() if k != \"Feature\"]\n    \n    # Column widths\n    feat_width = 30\n    eng_width = 22\n    total_width = feat_width + len(engines) * (eng_width + 3)\n    \n    # Header\n    print(f\"{'Feature':{feat_width}}\", end=\"\")\n    for eng in engines:\n        print(f\" | {eng:{eng_width}}\", end=\"\")\n    print()\n    print(\"=\" * total_width)\n    \n    # Rows\n    for i, feature in enumerate(features):\n        print(f\"{feature:{feat_width}}\", end=\"\")\n        for eng in engines:\n            val = data[eng][i]\n            print(f\" | {val:{eng_width}}\", end=\"\")\n        print()\n    print(\"=\" * total_width)\n    print(\"Ratings: ★★★ = Excellent, ★★ = Good, ★ = Limited/Basic\")\n\nprint_comparison_table(comparison)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "throughput--latency-benchmarks",
      children: "Throughput & Latency Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulated throughput benchmarks for different serving frameworks\n# Based on published benchmarks with Llama 3.1 8B on H100 (80GB)\n\nimport math\n\n@dataclass\nclass BenchmarkMetric:\n    \"\"\"Performance metric for a serving framework.\"\"\"\n    framework: str\n    throughput_tokens_per_sec: float\n    ttft_ms: float  # Time to first token\n    tpots_ms: float  # Time per output token (inter-token latency)\n    memory_gb: float\n    max_batch_size: int\n\nclass ServingBenchmark:\n    \"\"\"\n    Simulate and compare serving framework performance.\n    Based on published benchmarks (vLLM blog, SGLang paper, TGI docs, Triton benchmarks).\n    \"\"\"\n\n    @staticmethod\n    def simulate_throughput(\n        model_size: str = \"8B\",\n        num_gpus: int = 1,\n        batch_size: int = 16,\n        input_length: int = 512,\n        output_length: int = 256,\n    ) -> List[BenchmarkMetric]:\n        \"\"\"Simulate throughput benchmarks for different frameworks.\"\"\"\n\n        # Baseline metrics (approximate, based on published results)\n        # These vary by hardware, model, and configuration\n        benchmarks = {\n            \"vLLM\": {\n                \"throughput_base\": 4500,  # tokens/sec at bs=1\n                \"throughput_scale\": 0.85,  # scaling efficiency per additional seq\n                \"ttft_base_ms\": 150,\n                \"ttft_scale\": 1.2,  # TTFT increases with batch size\n                \"tpots_ms\": 12,  # ms per token (decode phase)\n                \"memory_base_gb\": 16,\n                \"memory_per_seq_gb\": 0.5,\n            },\n            \"SGLang\": {\n                \"throughput_base\": 4200,\n                \"throughput_scale\": 0.88,\n                \"ttft_base_ms\": 120,  # Faster TTFT due to RadixAttention\n                \"ttft_scale\": 1.15,\n                \"tpots_ms\": 11,\n                \"memory_base_gb\": 16,\n                \"memory_per_seq_gb\": 0.45,  # Better memory efficiency\n            },\n            \"TGI\": {\n                \"throughput_base\": 3800,\n                \"throughput_scale\": 0.80,\n                \"ttft_base_ms\": 180,\n                \"ttft_scale\": 1.3,\n                \"tpots_ms\": 14,\n                \"memory_base_gb\": 18,\n                \"memory_per_seq_gb\": 0.55,\n            },\n            \"Triton+TRT\": {\n                \"throughput_base\": 5000,  # TensorRT optimized kernels\n                \"throughput_scale\": 0.90,\n                \"ttft_base_ms\": 160,\n                \"ttft_scale\": 1.1,\n                \"tpots_ms\": 10,\n                \"memory_base_gb\": 14,  # TRT engine optimization\n                \"memory_per_seq_gb\": 0.4,\n            },\n        }\n\n        results = []\n        for framework, metrics in benchmarks.items():\n            # Compute throughput\n            scale_factor = sum(metrics[\"throughput_scale\"] ** i for i in range(batch_size))\n            throughput = metrics[\"throughput_base\"] * (1 + (batch_size - 1) * metrics[\"throughput_scale\"] / batch_size)\n            \n            # Compute TTFT\n            ttft = metrics[\"ttft_base_ms\"] * (metrics[\"ttft_scale\"] ** (math.log2(batch_size)))\n            \n            # Compute memory\n            memory = metrics[\"memory_base_gb\"] + metrics[\"memory_per_seq_gb\"] * batch_size\n            \n            results.append(BenchmarkMetric(\n                framework=framework,\n                throughput_tokens_per_sec=throughput,\n                ttft_ms=round(ttft, 1),\n                tpots_ms=metrics[\"tpots_ms\"],\n                memory_gb=round(memory, 1),\n                max_batch_size=batch_size,\n            ))\n\n        return results\n\n    @staticmethod\n    def print_benchmark_table(results: List[BenchmarkMetric]):\n        \"\"\"Print benchmark comparison table.\"\"\"\n        print(f\"\\nServing Benchmark Comparison (Llama 3.1 8B, 1x H100)\")\n        print(f\"Input: 512 tokens | Output: 256 tokens | Batch: {results[0].max_batch_size}\")\n        print(\"=\"*90)\n        print(f\"{'Framework':<20} {'Throughput':<18} {'TTFT':<14} {'TPOT':<14} {'Memory':<14}\")\n        print(f\"{'':<20} {'(tok/s)':<18} {'(ms)':<14} {'(ms/tok)':<14} {'(GB)':<14}\")\n        print(\"-\"*90)\n        \n        for r in sorted(results, key=lambda x: x.throughput_tokens_per_sec, reverse=True):\n            bar = \"█\" * max(1, int(r.throughput_tokens_per_sec / 300))\n            print(f\"{r.framework:<20} {r.throughput_tokens_per_sec:<18,.0f} \"\n                  f\"{r.ttft_ms:<14.1f} {r.tpots_ms:<14} {r.memory_gb:<14.1f} {bar}\")\n        \n        print(\"=\"*90)\n\n# Run benchmark comparison\nresults = ServingBenchmark.simulate_throughput(\n    model_size=\"8B\",\n    batch_size=16,\n    input_length=512,\n    output_length=256,\n)\nServingBenchmark.print_benchmark_table(results)\n\n# Key takeaways:\n# - vLLM leads in throughput and ease of use\n# - SGLang excels at prefix caching and structured generation\n# - Triton+TRT gives best raw performance but requires more setup\n# - TGI is competitive with strong quantization support\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-comparison",
      children: "Memory Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Memory usage comparison across frameworks\n\ndef compare_memory(\n    model_size_b: float = 8.0,\n    seq_length: int = 4096,\n    num_sequences: int = 16,\n    use_quantization: bool = False,\n) -> dict:\n    \"\"\"\n    Compare memory usage across serving frameworks.\n    Accounts for: model weights, KV cache, activations, overhead.\n    \"\"\"\n    # Model weights (FP16: 2 bytes per parameter)\n    weight_bytes = model_size_b * 1e9 * 2\n    if use_quantization:\n        weight_bytes /= 4  # INT4 quantization\n\n    # KV cache per sequence (simplified)\n    # For a transformer with L layers, H hidden, FP16\n    layers = 32 if model_size_b <= 8 else 80\n    hidden_dim = 4096 if model_size_b <= 8 else 8192\n    kv_bytes_per_token = layers * 2 * hidden_dim * 2  # 2 bytes per FP16\n    total_kv_bytes = kv_bytes_per_token * seq_length * num_sequences\n\n    # Framework overheads\n    frameworks = {\n        \"vLLM\": {\n            \"overhead_gb\": 0.5,\n            \"kv_cache_efficiency\": 0.95,  # PagedAttention: 95% utilization\n            \"activation_memory_gb\": 0.3,\n        },\n        \"SGLang\": {\n            \"overhead_gb\": 0.6,\n            \"kv_cache_efficiency\": 0.90,  # RadixTree: some overhead\n            \"activation_memory_gb\": 0.3,\n        },\n        \"TGI\": {\n            \"overhead_gb\": 0.8,  # Additional buffers for SSE\n            \"kv_cache_efficiency\": 0.70,  # Contiguous allocation waste\n            \"activation_memory_gb\": 0.4,\n        },\n        \"Triton+TRT\": {\n            \"overhead_gb\": 0.4,  # Optimized TRT engine\n            \"kv_cache_efficiency\": 0.85,\n            \"activation_memory_gb\": 0.2,\n        },\n    }\n\n    results = {}\n    for fw_name, fw in frameworks.items():\n        weights_gb = weight_bytes / 1e9\n        kv_effective_gb = total_kv_bytes / 1e9 / fw[\"kv_cache_efficiency\"]\n        activation_gb = fw[\"activation_memory_gb\"]\n        total_gb = weights_gb + kv_effective_gb + activation_gb + fw[\"overhead_gb\"]\n\n        results[fw_name] = {\n            \"weights_gb\": round(weights_gb, 1),\n            \"kv_cache_gb\": round(kv_effective_gb, 1),\n            \"activation_gb\": activation_gb,\n            \"overhead_gb\": fw[\"overhead_gb\"],\n            \"total_gb\": round(total_gb, 1),\n            \"kv_efficiency\": fw[\"kv_cache_efficiency\"],\n        }\n\n    return results\n\nmemory_results = compare_memory(\n    model_size_b=8.0,\n    seq_length=4096,\n    num_sequences=16,\n    use_quantization=False,\n)\n\nprint(\"Memory Comparison (Llama 3.1 8B, 16 sequences, seq_len=4096)\")\nprint(\"=\"*85)\nprint(f\"{'Framework':<20} {'Weights':<12} {'KV Cache':<12} {'Activation':<12} {'Total':<12} {'KV Eff':<10}\")\nprint(\"-\"*85)\nfor fw, metrics in sorted(memory_results.items(), key=lambda x: x[1][\"total_gb\"]):\n    bar = \"█\" * max(1, int(metrics[\"total_gb\"] / 2))\n    print(f\"{fw:<20} {metrics['weights_gb']:<12.1f} {metrics['kv_cache_gb']:<12.1f} \"\n          f\"{metrics['activation_gb']:<12.1f} {metrics['total_gb']:<12.1f} \"\n          f\"{metrics['kv_efficiency']:<10.0%} {bar}\")\n\nprint(\"\\nKey memory insights:\")\nprint(\"- vLLM's PagedAttention reduces KV cache waste by 25% vs TGI\")\nprint(\"- Triton+TRT has lowest total memory due to kernel fusion\")\nprint(\"- SGLang's RadixAttention trades some memory for prefix caching benefits\")\nprint(\"- Quantization (INT4) reduces weights by 4x — enabling 70B models on single GPU\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "selection-guide",
      children: "Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Framework selection guide based on workload\n\ndef recommend_framework(\n    workload_type: str,\n    latency_sla_ms: int = 200,\n    throughput_required: int = 1000,\n    model_size_b: float = 8.0,\n    num_gpus: int = 1,\n    need_prefix_sharing: bool = False,\n    need_structured_output: bool = False,\n    need_multi_model: bool = False,\n) -> str:\n    \"\"\"Recommend the best serving framework for a given workload.\"\"\"\n    \n    scores = {\n        \"vLLM\": 0,\n        \"SGLang\": 0,\n        \"TGI\": 0,\n        \"Triton+TRT\": 0,\n    }\n\n    # Latency-sensitive\n    if latency_sla_ms < 150:\n        scores[\"SGLang\"] += 2  # Lowest TTFT\n        scores[\"vLLM\"] += 1\n    elif latency_sla_ms < 300:\n        scores[\"vLLM\"] += 2\n        scores[\"Triton+TRT\"] += 1\n\n    # High throughput\n    if throughput_required > 5000:\n        scores[\"Triton+TRT\"] += 2\n        scores[\"vLLM\"] += 1\n    \n    # Large model\n    if model_size_b > 70 and num_gpus >= 4:\n        scores[\"Triton+TRT\"] += 2  # Best multi-GPU support\n        scores[\"vLLM\"] += 1\n\n    # Prefix sharing\n    if need_prefix_sharing:\n        scores[\"SGLang\"] += 3  # RadixAttention\n\n    # Structured output\n    if need_structured_output:\n        scores[\"SGLang\"] += 3  # Grammar-constrained decoding\n\n    # Multi-model pipelines\n    if need_multi_model:\n        scores[\"Triton+TRT\"] += 3  # Ensemble models\n        scores[\"vLLM\"] -= 1  # No ensemble support\n\n    # Winner\n    winner = max(scores, key=scores.get)\n    return f\"Recommended: {winner} (scores: {scores})\"\n\n# Test different scenarios\nscenarios = [\n    {\n        \"name\": \"Chat application (low latency)\",\n        \"workload_type\": \"chat\",\n        \"latency_sla_ms\": 100,\n        \"throughput_required\": 2000,\n        \"need_prefix_sharing\": True,\n    },\n    {\n        \"name\": \"Batch document processing\",\n        \"workload_type\": \"batch\",\n        \"latency_sla_ms\": 5000,\n        \"throughput_required\": 10000,\n        \"need_prefix_sharing\": False,\n    },\n    {\n        \"name\": \"RAG pipeline\",\n        \"workload_type\": \"rag\",\n        \"need_prefix_sharing\": True,\n        \"need_structured_output\": True,\n        \"need_multi_model\": True,\n    },\n    {\n        \"name\": \"Multi-tenant API\",\n        \"workload_type\": \"api\",\n        \"latency_sla_ms\": 200,\n        \"throughput_required\": 5000,\n        \"need_prefix_sharing\": False,\n        \"need_multi_model\": True,\n    },\n]\n\nprint(\"Framework Selection Guide:\")\nprint(\"=\"*60)\nfor scenario in scenarios:\n    rec = recommend_framework(**scenario)\n    print(f\"\\nScenario: {scenario['name']}\")\n    print(f\"  {rec}\")\n"
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
            children: "Explain the core idea of AI Inference Serving in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates AI Inference Serving."
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
            children: "Describe a production bug caused by misunderstanding AI Inference Serving. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on AI Inference Serving from 10 users to 10 million?"
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
            children: "Compare AI Inference Serving with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on AI Inference Serving."
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
            children: "How would you make an implementation of AI Inference Serving run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of AI Inference Serving that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name AI Inference Serving explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using AI Inference Serving\")."
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
        children: "Review complexity and edge cases for the classic AI Inference Serving interview problem."
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
        }), " You should memorize the AI Inference Serving chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to AI Inference Serving is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing AI Inference Serving is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of AI Inference Serving is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of AI Inference Serving on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of AI Inference Serving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on AI Inference Serving (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real AI Inference Serving problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements AI Inference Serving"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for AI Inference Serving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on AI Inference Serving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how AI Inference Serving fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how AI Inference Serving is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where AI Inference Serving is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of AI Inference Serving, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is AI Inference Serving asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing AI Inference Serving."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Inference Serving appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding AI Inference Serving helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the AI Inference Serving concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, AI Inference Serving skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply AI Inference Serving to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI Inference Serving is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the AI Inference Serving skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of AI Inference Serving code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on AI Inference Serving"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in AI Inference Serving code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the AI Inference Serving example code."]
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
        children: "Explain AI Inference Serving in 60 seconds."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for AI Inference Serving."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core AI Inference Serving logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses AI Inference Serving daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": AI Inference Serving patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": AI Inference Serving principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": AI Inference Serving shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect AI Inference Serving to the business outcome, not just the code."]
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