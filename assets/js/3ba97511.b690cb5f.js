"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3024],{

/***/ 33154
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_08_deployment_stack_comparison_md_3ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-23-trending-aiml-platforms-08-deployment-stack-comparison-md-3ba.json
const site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_08_deployment_stack_comparison_md_3ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/trending-aiml-platforms/08-deployment-stack-comparison","title":"08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison.md","sourceDirName":"courses/ai-engineering-placement/23-trending-aiml-platforms","slug":"/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":273,"frontMatter":{"id":"08-deployment-stack-comparison","slug":"/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison","title":"08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI","sidebar_label":"08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI","sidebar_position":273},"sidebar":"placementSidebar","previous":{"title":"Fine-Tuning Platforms & Tools","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms"},"next":{"title":"Statistics & Mathematics for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison.md


const frontMatter = {
	id: '08-deployment-stack-comparison',
	slug: '/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison',
	title: '08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI',
	sidebar_label: '08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI',
	sidebar_position: 273
};
const contentTitle = '08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI';

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
  "value": "8.1 vLLM — Production-Grade Serving",
  "id": "81-vllm--production-grade-serving",
  "level": 2
}, {
  "value": "8.1.1 PagedAttention — Memory Management Revolution",
  "id": "811-pagedattention--memory-management-revolution",
  "level": 3
}, {
  "value": "8.1.2 Continuous Batching",
  "id": "812-continuous-batching",
  "level": 3
}, {
  "value": "8.1.3 Tensor Parallelism",
  "id": "813-tensor-parallelism",
  "level": 3
}, {
  "value": "8.1.4 OpenAI-Compatible API",
  "id": "814-openai-compatible-api",
  "level": 3
}, {
  "value": "8.1.5 vLLM Launch Configuration",
  "id": "815-vllm-launch-configuration",
  "level": 3
}, {
  "value": "8.2 SGLang — Structured Generation Pioneer",
  "id": "82-sglang--structured-generation-pioneer",
  "level": 2
}, {
  "value": "8.2.1 RadixAttention — Prefix-Aware KV Cache",
  "id": "821-radixattention--prefix-aware-kv-cache",
  "level": 3
}, {
  "value": "8.2.2 Structured Generation and Constrained Decoding",
  "id": "822-structured-generation-and-constrained-decoding",
  "level": 3
}, {
  "value": "8.2.3 SGLang Frontend Language",
  "id": "823-sglang-frontend-language",
  "level": 3
}, {
  "value": "8.2.4 SGLang Server Launch",
  "id": "824-sglang-server-launch",
  "level": 3
}, {
  "value": "8.3 Ollama — Local-First Model Runner",
  "id": "83-ollama--local-first-model-runner",
  "level": 2
}, {
  "value": "8.3.1 Architecture and Model Management",
  "id": "831-architecture-and-model-management",
  "level": 3
}, {
  "value": "8.3.2 Python Client for Ollama",
  "id": "832-python-client-for-ollama",
  "level": 3
}, {
  "value": "8.3.3 Ollama Limitations",
  "id": "833-ollama-limitations",
  "level": 3
}, {
  "value": "8.4 Hugging Face TGI — Text Generation Inference",
  "id": "84-hugging-face-tgi--text-generation-inference",
  "level": 2
}, {
  "value": "8.4.1 Core Architecture",
  "id": "841-core-architecture",
  "level": 3
}, {
  "value": "8.4.2 Kernel Optimizations and Quantization",
  "id": "842-kernel-optimizations-and-quantization",
  "level": 3
}, {
  "value": "8.4.3 Watermarking (KGW Algorithm)",
  "id": "843-watermarking-kgw-algorithm",
  "level": 3
}, {
  "value": "8.5 Comparison Matrix",
  "id": "85-comparison-matrix",
  "level": 2
}, {
  "value": "8.5.1 Feature Comparison",
  "id": "851-feature-comparison",
  "level": 3
}, {
  "value": "8.5.2 Performance Comparison (Llama 3.1 8B on A100 80GB)",
  "id": "852-performance-comparison-llama-31-8b-on-a100-80gb",
  "level": 3
}, {
  "value": "8.5.3 When to Use Each Stack",
  "id": "853-when-to-use-each-stack",
  "level": 3
}, {
  "value": "8.5.4 Unified Benchmark Client",
  "id": "854-unified-benchmark-client",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 3
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 3
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 3
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 3
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
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
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "08--deployment-stack-comparison-vllm-vs-sglang-vs-ollama-vs-tgi",
        children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "LO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare the architecture of vLLM (PagedAttention), SGLang (RadixAttention), Ollama, and Hugging Face TGI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy production-grade model serving with vLLM using continuous batching and tensor parallelism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement structured generation and constrained decoding with SGLang"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run local inference with Ollama and manage custom models via Modelfiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select the optimal deployment stack based on throughput, latency, memory, and feature requirements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The model deployment landscape in 2026 offers four dominant open-source stacks: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vLLM"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SGLang"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ollama"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hugging Face TGI"
      }), ". Each was built with different priorities — vLLM optimizes for maximum throughput in production, SGLang excels at structured generation and constrained decoding, Ollama prioritizes developer ergonomics for local experimentation, and TGI provides a battle-tested production path tightly integrated with the Hugging Face ecosystem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the wrong stack leads to wasted GPU hours, unnecessary latency, or excessive engineering effort. This chapter provides a head-to-head comparison across architectural decisions, performance characteristics, API compatibility, and real-world deployment scenarios. You will learn to match each framework to its ideal use case and write client code that interacts with all four."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with transformer architecture and KV cache mechanics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of GPU memory management and batching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Experience running Docker containers and CLI tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.10+ installed locally or on a cloud VM"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PagedAttention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vLLM's memory management technique that stores KV cache in fixed-size pages, eliminating fragmentation and enabling 2-4x throughput gains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RadixAttention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGLang's prefix-aware KV cache reuse that caches common prompt prefixes (system prompts, few-shot examples) across requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous Batching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamically adding/removing sequences from a batch at each decoding step, maximizing GPU utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tensor Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting model parameters across multiple GPUs by sharding attention heads and feed-forward layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constrained Decoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforcing output to follow a structured format (JSON, regex, grammar) during token generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KV Cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-Value cache stored during autoregressive decoding that avoids recomputing previous tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component that manages request admission, preemption, and batching decisions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "vLLM Deep Dive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PagedAttention, continuous batching, tensor parallelism, OpenAI-compatible API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGLang Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RadixAttention, structured generation, constrained decoding, frontend optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ollama for Local Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model management, Modelfiles, API, ecosystem, limitations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hugging Face TGI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text Generation Inference, optimized kernels, watermarking, quantization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison Matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput, latency, memory, setup, feature set, when to use each"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-vllm--production-grade-serving",
      children: "8.1 vLLM — Production-Grade Serving"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["vLLM is the most widely adopted open-source LLM serving framework in production as of 2026. Its core innovation — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PagedAttention"
      }), " — reimagines how the KV cache is managed during inference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-pagedattention--memory-management-revolution",
      children: "8.1.1 PagedAttention — Memory Management Revolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional serving frameworks allocate the KV cache as contiguous blocks in GPU memory. This causes two problems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal fragmentation"
        }), ": The maximum sequence length must be pre-allocated, wasting memory for shorter sequences."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External fragmentation"
        }), ": As sequences are added and removed, gaps form in the memory pool."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PagedAttention solves both by dividing the KV cache into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fixed-size pages"
      }), " (typically 16 or 32 tokens per page). The attention mechanism operates on these pages rather than contiguous blocks, using a page table to map logical token positions to physical memory addresses — exactly like virtual memory in operating systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Traditional contiguous KV cache:\n┌────────────────────────────────────────┐\n│ Seq A: ┌────┬────┬────┬────┬────┬────┐│\n│         │ K1 │ V1 │ K2 │ V2 │ K3 │ V3 ││\n│         └────┴────┴────┴────┴────┴────┘│\n│ Seq B: ┌────┬────┬────┬────┬────┬────┐│\n│         │ K1 │ V1 │ K2 │ V2 │ ── │ ── ││ ← internal fragmentation\n│         └────┴────┴────┴────┴────┴────┘│\n└────────────────────────────────────────┘\n\nPagedAttention with 2-token pages:\nPage Table: Seq A → [Page 1, Page 2, Page 3]\n            Seq B → [Page 1, Page 4]        ← Page 3 reused for Seq B partial\n┌────┬────┬────┬────┐\n│ K1 │ V1 │ K1 │ V1 │  Page 1 (shared)\n├────┼────┼────┼────┤\n│ K2 │ V2 │ K2 │ V2 │  Page 2 (Seq A)\n├────┼────┼────┼────┤\n│ K3 │ V3 │ ── │ ── │  Page 3 (Seq A, partial)\n├────┼────┼────┼────┤\n│ K1 │ V1 │ K1 │ V1 │  Page 4 (Seq B)\n└────┴────┴────┴────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Input[Input Sequences]\n        S1[\"Seq A: 6 tokens\"]\n        S2[\"Seq B: 4 tokens\"]\n        S3[\"Seq C: 12 tokens\"]\n    end\n    subgraph PT[Page Table]\n        PT1[\"Seq A → P1, P2, P3\"]\n        PT2[\"Seq B → P1, P4\"]\n        PT3[\"Seq C → P5, P6, P7, P8\"]\n    end\n    subgraph PM[Physical Memory Pages]\n        P1[\"Page 1<br/>Tokens 1-2\"]\n        P2[\"Page 2<br/>Tokens 3-4\"]\n        P3[\"Page 3<br/>Tokens 5-6\"]\n        P4[\"Page 4<br/>Tokens 3-4\"]\n        P5[\"Page 5<br/>Tokens 1-2\"]\n        P6[\"Page 6<br/>Tokens 3-4\"]\n        P7[\"Page 7<br/>Tokens 5-6\"]\n        P8[\"Page 8<br/>Tokens 7-8\"]\n    end\n    Input --> PT\n    PT --> PM\n    P3 -.->|\"Copy-on-Write\"| P4\n    style P1 fill:#4CAF50,color:#fff\n    style P4 fill:#FF9800,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key benefits of PagedAttention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Near-zero fragmentation"
        }), ": Pages can be allocated on demand and freed immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy-on-write sharing"
        }), ": Multiple sequences sharing a prefix (e.g., system prompt) share physical pages until one diverges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Higher batch sizes"
        }), ": The same GPU memory supports 2-4x more concurrent requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No maximum sequence length cap"
        }), ": Sequences grow page-by-page without pre-allocation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-continuous-batching",
      children: "8.1.2 Continuous Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional static batching requires all sequences in a batch to finish before a new batch starts. Continuous batching (also called in-flight batching) evaluates each sequence independently at every decoding step. When a sequence finishes or generates an end-of-sequence token, the scheduler immediately admits a new request into the batch."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant S as Scheduler\n    participant P as GPU (Forward Pass)\n    participant Q as Request Queue\n\n    Note over S: Batch = [A, B, C] at t₁\n    S->>P: Decode step: A, B, C in parallel\n    P-->>S: A generates \"end\", B→\"world\", C→\"AI\"\n    Note over S: A finishes\n    S->>Q: Dequeue request D\n    Note over S: Batch = [B, C, D] at t₂\n    S->>P: Decode step: B, C, D in parallel\n    P-->>S: B→\"end\", C→\"engineer\", D→\"Hello\"\n    Note over S: B finishes\n    S->>Q: Dequeue request E\n    Note over S: Batch = [C, D, E] at t₃\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This technique is the single largest contributor to throughput improvement, often delivering 3-5x higher requests per second compared to static batching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-tensor-parallelism",
      children: "8.1.3 Tensor Parallelism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For models too large for a single GPU (e.g., Llama 3.1 405B requiring ~800 GB in FP16), vLLM shards the model across multiple GPUs using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tensor parallelism"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each GPU holds a slice of every layer's parameters. During the forward pass, GPUs compute their shard in parallel and synchronize via all-reduce communication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Model without tensor parallelism (single GPU):\n┌─────────────────────────────────────┐\n│  Embed → Attn₁ → FFN₁ → ... → LM   │  GPU 0: Full model\n└─────────────────────────────────────┘\n\nModel with tensor parallelism (TP=2):\nGPU 0: ┌──────────────────────────────────┐\n        │ Embed₀ → Attn₀ → FFN₀ → ... │\n        └──────────────────────────────────┘\n                                        all-reduce\nGPU 1: ┌──────────────────────────────────┐\n        │ Embed₁ → Attn₁ → FFN₁ → ... │\n        └──────────────────────────────────┘\n\nAttention sharding (TP=2):\nFull: A = softmax(QKᵀ / √d) V              → 32 heads\nGPU 0: A₀ = softmax(Q₀K₀ᵀ / √d) V₀        → heads 0-15\nGPU 1: A₁ = softmax(Q₁K₁ᵀ / √d) V₁        → heads 16-31\nResult: A = concat(A₀, A₁)                  ← all-reduce Q and K across GPUs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "814-openai-compatible-api",
      children: "8.1.4 OpenAI-Compatible API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vLLM exposes an HTTP server that implements the full OpenAI Chat Completions and Completions API, making it a drop-in replacement for any OpenAI client."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 8.1.4 — vLLM OpenAI-compatible client\nimport json\nimport time\nfrom typing import Optional, List, Dict, Generator\nimport requests\n\nclass VLLMClient:\n    \"\"\"Client for vLLM's OpenAI-compatible API endpoint.\"\"\"\n\n    def __init__(\n        self,\n        base_url: str = \"http://localhost:8000\",\n        api_key: str = \"token-abc123\",\n        model: str = \"meta-llama/Meta-Llama-3.1-8B-Instruct\",\n    ):\n        self.base_url = base_url.rstrip(\"/\")\n        self.api_key = api_key\n        self.model = model\n\n    def _headers(self) -> Dict[str, str]:\n        return {\n            \"Authorization\": f\"Bearer {self.api_key}\",\n            \"Content-Type\": \"application/json\",\n        }\n\n    def chat_completion(\n        self,\n        messages: List[Dict[str, str]],\n        max_tokens: int = 512,\n        temperature: float = 0.7,\n        top_p: float = 1.0,\n        stream: bool = False,\n    ) -> Dict:\n        \"\"\"Send a chat completion request to vLLM.\"\"\"\n        payload = {\n            \"model\": self.model,\n            \"messages\": messages,\n            \"max_tokens\": max_tokens,\n            \"temperature\": temperature,\n            \"top_p\": top_p,\n            \"stream\": stream,\n        }\n        response = requests.post(\n            f\"{self.base_url}/v1/chat/completions\",\n            headers=self._headers(),\n            json=payload,\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def stream_chat(\n        self,\n        messages: List[Dict[str, str]],\n        max_tokens: int = 512,\n        temperature: float = 0.7,\n    ) -> Generator[str, None, None]:\n        \"\"\"Stream chat completions token by token.\"\"\"\n        payload = {\n            \"model\": self.model,\n            \"messages\": messages,\n            \"max_tokens\": max_tokens,\n            \"temperature\": temperature,\n            \"stream\": True,\n        }\n        with requests.post(\n            f\"{self.base_url}/v1/chat/completions\",\n            headers=self._headers(),\n            json=payload,\n            stream=True,\n        ) as response:\n            response.raise_for_status()\n            for line in response.iter_lines():\n                if not line:\n                    continue\n                if line.startswith(b\"data: \"):\n                    data_str = line[6:].decode(\"utf-8\")\n                    if data_str.strip() == \"[DONE]\":\n                        break\n                    chunk = json.loads(data_str)\n                    delta = chunk.get(\"choices\", [{}])[0].get(\"delta\", {})\n                    content = delta.get(\"content\", \"\")\n                    if content:\n                        yield content\n\n    def benchmark_latency(\n        self, prompt: str, n_runs: int = 10\n    ) -> Dict[str, float]:\n        \"\"\"Measure end-to-end latency for a prompt.\"\"\"\n        messages = [{\"role\": \"user\", \"content\": prompt}]\n        latencies = []\n        for _ in range(n_runs):\n            start = time.perf_counter()\n            self.chat_completion(messages, max_tokens=50)\n            elapsed = time.perf_counter() - start\n            latencies.append(elapsed)\n        return {\n            \"mean\": sum(latencies) / len(latencies),\n            \"min\": min(latencies),\n            \"max\": max(latencies),\n            \"p50\": sorted(latencies)[len(latencies) // 2],\n            \"p99\": sorted(latencies)[int(len(latencies) * 0.99)],\n        }\n\n    def generate_kv_cache_stats(self) -> Dict:\n        \"\"\"Query vLLM's internal stats endpoint for KV cache usage.\"\"\"\n        response = requests.get(\n            f\"{self.base_url}/metrics\",\n            headers=self._headers(),\n        )\n        response.raise_for_status()\n        return response.json()\n\n# Usage Example\nif __name__ == \"__main__\":\n    client = VLLMClient(model=\"mistralai/Mistral-7B-Instruct-v0.3\")\n\n    # Standard chat completion\n    result = client.chat_completion(\n        messages=[\n            {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n            {\"role\": \"user\", \"content\": \"Explain PagedAttention in one paragraph.\"},\n        ],\n        max_tokens=200,\n    )\n    print(\"Response:\", result[\"choices\"][0][\"message\"][\"content\"])\n    print(\"Usage:\", result[\"usage\"])\n\n    # Streaming\n    print(\"\\nStreaming response:\")\n    for token in client.stream_chat(\n        messages=[{\"role\": \"user\", \"content\": \"Count from 1 to 5.\"}]\n    ):\n        print(token, end=\"\", flush=True)\n    print()\n\n    # Benchmark\n    stats = client.benchmark_latency(\"What is 2+2?\", n_runs=5)\n    print(f\"\\nLatency stats: mean={stats['mean']:.2f}s, p50={stats['p50']:.2f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "815-vllm-launch-configuration",
      children: "8.1.5 vLLM Launch Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Launch vLLM with tensor parallelism on 4 GPUs\npython -m vllm.entrypoints.openai.api_server \\\n    --model meta-llama/Meta-Llama-3.1-8B-Instruct \\\n    --tensor-parallel-size 4 \\\n    --max-num-seqs 256 \\\n    --gpu-memory-utilization 0.90 \\\n    --max-model-len 8192 \\\n    --enforce-eager \\\n    --swap-space 16 \\\n    --port 8000\n\n# Launch with quantization (AWQ) for reduced memory\npython -m vllm.entrypoints.openai.api_server \\\n    --model casperhansen/llama-3.1-8b-instruct-awq \\\n    --quantization awq \\\n    --dtype auto \\\n    --max-num-seqs 128\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key parameters explained:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "max-num-seqs"
        }), ": Maximum number of sequences in a batch. Higher = more throughput but more memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "gpu-memory-utilization"
        }), ": Fraction of GPU memory vLLM can use. Lower values leave room for other processes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "swap-space"
        }), ": CPU RAM (in GB) for offloading KV cache when GPU memory is full. Enables serving beyond GPU capacity at a latency cost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tensor-parallel-size"
        }), ": Number of GPUs to shard the model across."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-sglang--structured-generation-pioneer",
      children: "8.2 SGLang — Structured Generation Pioneer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SGLang takes a fundamentally different approach from vLLM. Instead of focusing purely on raw throughput, it optimizes for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "structured generation"
      }), " — enforcing output formats, reusing prefix computation, and providing a frontend language for expressing generation constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-radixattention--prefix-aware-kv-cache",
      children: "8.2.1 RadixAttention — Prefix-Aware KV Cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While PagedAttention optimizes memory allocation, RadixAttention optimizes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cache reuse across requests"
      }), ". It organizes the KV cache as a radix tree (prefix tree) where common prefixes — system prompts, few-shot examples, tool definitions — are stored once and shared across all requests that begin with them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Radix Tree of KV Cache (prefixes stored once):\n\nRoot (empty)\n├── \"You are a helpful\" → cache_1\n│   ├── \" assistant named\" → cache_2\n│   │   └── \" Alice.\" → cache_3  [shared by 50 requests]\n│   └── \" chatbot.\" → cache_4     [shared by 30 requests]\n├── \"Translate to French\" → cache_5\n│   └── \": \" → cache_6             [shared by 100 requests]\n└── \"Summarize: \" → cache_7       [shared by 200 requests]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a new request arrives, SGLang walks the radix tree to find the longest matching prefix, reuses its cached KV values, and only computes attention for the new suffix. In typical chatbot workloads where 60-80% of the prompt is a shared system message, this eliminates redundant computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Incoming[Incoming Requests]\n        R1[\"Req 1: 'System: You are... Tell me a joke'\"]\n        R2[\"Req 2: 'System: You are... Explain AI'\"]\n        R3[\"Req 3: 'System: You are... Write a poem'\"]\n    end\n    subgraph RT[Radix Tree Cache]\n        P1[\"Prefix: 'System: You are a...' ✓ Cached\"]\n    end\n    subgraph Compute[New Compute]\n        S1[\"Suffix: 'Tell me a joke'\"]\n        S2[\"Suffix: 'Explain AI'\"]\n        S3[\"Suffix: 'Write a poem'\"]\n    end\n    Incoming --> P1\n    P1 -->|\"Cache hit (80% of prompt)\"| S1\n    P1 -->|\"Cache hit\"| S2\n    P1 -->|\"Cache hit\"| S3\n    style P1 fill:#4CAF50,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-structured-generation-and-constrained-decoding",
      children: "8.2.2 Structured Generation and Constrained Decoding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SGLang introduces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "programmatic frontend"
      }), " where you specify both the prompt AND the output format in a single unified language. The framework then enforces the output structure during decoding by masking invalid tokens at each generation step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 8.2.2 — SGLang structured generation with constrained decoding\nimport json\nimport re\nfrom dataclasses import dataclass, asdict\nfrom typing import List, Optional, Dict, Any, Iterator\nimport requests\n\nclass SGLangClient:\n    \"\"\"Client for SGLang's structured generation server.\"\"\"\n\n    def __init__(self, base_url: str = \"http://localhost:30000\"):\n        self.base_url = base_url.rstrip(\"/\")\n\n    def generate(\n        self,\n        prompt: str,\n        max_new_tokens: int = 512,\n        temperature: float = 0.1,\n        stop: Optional[List[str]] = None,\n        regex: Optional[str] = None,\n        json_schema: Optional[Dict] = None,\n    ) -> Dict[str, Any]:\n        \"\"\"\n        Generate text with optional constrained decoding.\n\n        Args:\n            prompt: Input prompt\n            max_new_tokens: Maximum tokens to generate\n            temperature: Sampling temperature\n            stop: Stop sequences\n            regex: Regex constraint for output format\n            json_schema: JSON schema constraint for structured output\n        \"\"\"\n        payload = {\n            \"text\": prompt,\n            \"sampling_params\": {\n                \"max_new_tokens\": max_new_tokens,\n                \"temperature\": temperature,\n                \"stop\": stop or [],\n            },\n        }\n        if regex:\n            payload[\"sampling_params\"][\"regex\"] = regex\n        if json_schema:\n            payload[\"sampling_params\"][\"json_schema\"] = json_schema\n\n        response = requests.post(\n            f\"{self.base_url}/generate\",\n            json=payload,\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def structured_extract(\n        self, text: str, schema: Dict\n    ) -> Dict[str, Any]:\n        \"\"\"\n        Extract structured information from text using JSON schema constraint.\n        The model must output valid JSON matching the schema.\n        \"\"\"\n        prompt = f\"\"\"Extract the requested information from this text.\nText: {text}\n\nOutput valid JSON matching this schema:\n{json.dumps(schema, indent=2)}\n\nJSON:\"\"\"\n        result = self.generate(\n            prompt=prompt,\n            max_new_tokens=500,\n            temperature=0.0,\n            json_schema=schema,\n        )\n        raw = result.get(\"text\", \"\")\n        # Extract JSON from response\n        json_match = re.search(r\"\\{.*\\}\", raw, re.DOTALL)\n        if json_match:\n            return json.loads(json_match.group())\n        return json.loads(raw)\n\n    def classify_with_constraints(\n        self, text: str, categories: List[str]\n    ) -> str:\n        \"\"\"\n        Classify text into one of the given categories.\n        The regex constraint ensures output is exactly one category name.\n        \"\"\"\n        categories_str = \" | \".join(categories)\n        regex_pattern = f\"^({'|'.join(categories)})$\"\n\n        prompt = f\"\"\"Classify the following text into one of these categories:\nCategories: {categories_str}\nText: {text}\nCategory:\"\"\"\n\n        result = self.generate(\n            prompt=prompt,\n            max_new_tokens=20,\n            temperature=0.0,\n            regex=regex_pattern,\n        )\n        return result.get(\"text\", \"\").strip()\n\n@dataclass\nclass ExtractedEntity:\n    \"\"\"Structured data schema for entity extraction.\"\"\"\n    name: str\n    role: str\n    organization: str\n    skills: List[str]\n    years_experience: int\n\n# Usage Example\nif __name__ == \"__main__\":\n    client = SGLangClient()\n\n    # 1. Regex-constrained generation (phone number)\n    phone_prompt = \"Generate a US phone number: (555) \"\n    phone_result = client.generate(\n        prompt=phone_prompt,\n        max_new_tokens=14,\n        temperature=0.5,\n        regex=r\"\\(?[2-9]\\d{2}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}\",\n    )\n    print(\"Phone number:\", phone_result.get(\"text\", \"\"))\n\n    # 2. JSON schema-constrained extraction\n    schema = {\n        \"type\": \"object\",\n        \"properties\": {\n            \"name\": {\"type\": \"string\"},\n            \"role\": {\"type\": \"string\"},\n            \"organization\": {\"type\": \"string\"},\n            \"skills\": {\"type\": \"array\", \"items\": {\"type\": \"string\"}},\n            \"years_experience\": {\"type\": \"integer\"},\n        },\n        \"required\": [\"name\", \"role\", \"skills\"],\n    }\n\n    bio_text = (\n        \"Alice Johnson is a Senior ML Engineer at NVIDIA. \"\n        \"She has 8 years of experience building LLM inference systems \"\n        \"using CUDA, Triton, and TensorRT. She is an expert in \"\n        \"distributed systems, GPU programming, and model optimization.\"\n    )\n\n    extracted = client.structured_extract(bio_text, schema)\n    print(\"Extracted entity:\", json.dumps(extracted, indent=2))\n\n    entity = ExtractedEntity(**extracted)\n    print(f\"Name: {entity.name}, Skills: {', '.join(entity.skills)}\")\n\n    # 3. Constrained classification\n    category = client.classify_with_constraints(\n        \"This GPU delivers 989 TFLOPS for FP8 inference\",\n        categories=[\"hardware\", \"software\", \"research\", \"business\"],\n    )\n    print(\"Classification:\", category)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-sglang-frontend-language",
      children: "8.2.3 SGLang Frontend Language"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SGLang provides a Python DSL (domain-specific language) called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SGLang Program"
      }), " that lets you mix generation, prompting, and control flow in a single script:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 8.2.3 — SGLang frontend program (conceptual example)\n# NOTE: This requires the sglang Python package installed:\n#   pip install sglang[all]\n\n\"\"\"\nimport sglang as sgl\nfrom sglang import function, gen, system, user, assistant\n\n@sgl.function\ndef multi_step_reasoning(question: str):\n    # System prompt (shared prefix, cached by RadixAttention)\n    system(\"You are a step-by-step reasoning assistant.\")\n\n    # User question\n    user(question)\n\n    # First reasoning step with constrained prefix\n    assistant(\n        \"Let me break this down step by step.\\n\"\n        \"Step 1: \"\n    )\n    step1 = gen(name=\"step1\", max_tokens=100, temperature=0.3)\n\n    # Second reasoning step depends on first\n    assistant(\n        f\"Step 2: Building on step 1 ({step1}), \"\n    )\n    step2 = gen(name=\"step2\", max_tokens=100, temperature=0.3)\n\n    # Final answer with JSON constraint\n    assistant(\n        \"Therefore, the final answer is:\\n\"\n    )\n    final = gen(\n        name=\"final_answer\",\n        max_tokens=200,\n        temperature=0.1,\n        json_schema={\n            \"type\": \"object\",\n            \"properties\": {\n                \"answer\": {\"type\": \"string\"},\n                \"confidence\": {\"type\": \"number\", \"minimum\": 0, \"maximum\": 1},\n                \"reasoning_steps\": {\"type\": \"array\", \"items\": {\"type\": \"string\"}},\n            },\n            \"required\": [\"answer\", \"confidence\"],\n        },\n    )\n\n    return {\"step1\": step1, \"step2\": step2, \"final\": final}\n\n# Run with caching enabled\nstate = multi_step_reasoning.run(\n    question=\"If a train travels 120 km in 2 hours, what is its speed?\",\n    temperature=0.1,\n)\nprint(\"Final answer:\", state[\"final_answer\"])\n\n# Batch processing with automatic prefix caching\nquestions = [\n    \"What is the capital of France?\",\n    \"What is the capital of Germany?\",\n    \"What is the capital of Italy?\",\n]\n\n# All three share the system prompt — RadixAttention caches it once\nstates = multi_step_reasoning.run_batch(\n    [{\"question\": q} for q in questions],\n    progress_bar=True,\n)\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-sglang-server-launch",
      children: "8.2.4 SGLang Server Launch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Launch SGLang server\npython -m sglang.launch_server \\\n    --model-path meta-llama/Meta-Llama-3.1-8B-Instruct \\\n    --port 30000 \\\n    --host 0.0.0.0 \\\n    --mem-fraction-static 0.85 \\\n    --max-prefill-tokens 4096 \\\n    --context-length 16384 \\\n    --schedule-conservativeness 0.0\n\n# Launch with RadixAttention caching explicitly enabled\npython -m sglang.launch_server \\\n    --model-path mistralai/Mistral-7B-Instruct-v0.3 \\\n    --enable-prefix-caching \\\n    --disable-flashinfer \\\n    --max-running-sequences 64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-ollama--local-first-model-runner",
      children: "8.3 Ollama — Local-First Model Runner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ollama has become the de facto standard for local model experimentation, beloved by developers for its zero-configuration setup and intuitive CLI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-architecture-and-model-management",
      children: "8.3.1 Architecture and Model Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ollama wraps llama.cpp under the hood, providing a REST API, CLI, and pre-built model registry. It handles quantization, GPU acceleration, and model downloading transparently."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Ollama Architecture:\n┌───────────────────────────────────────────┐\n│              Ollama CLI/Daemon              │\n│  ┌─────────┐ ┌──────────┐ ┌────────────┐  │\n│  │ Pull    │ │ Run      │ │ Modelfile  │  │\n│  │ Command │ │ Command  │ │ Builder    │  │\n│  └────┬────┘ └────┬─────┘ └─────┬──────┘  │\n│       │           │              │          │\n│  ┌────▼───────────▼──────────────▼──────┐  │\n│  │         Model Registry               │  │\n│  │  (local ~/.ollama/models/)           │  │\n│  └────────────────┬─────────────────────┘  │\n│                   │                        │\n│  ┌────────────────▼─────────────────────┐  │\n│  │   llama.cpp Backend                  │  │\n│  │   (GGUF quantized models)            │  │\n│  │   GPU offloading, CPU fallback       │  │\n│  └──────────────────────────────────────┘  │\n└───────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-python-client-for-ollama",
      children: "8.3.2 Python Client for Ollama"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 8.3.2 — Ollama client for local model management and inference\nimport json\nimport time\nfrom typing import Optional, List, Dict, Generator, Any\nimport requests\n\nclass OllamaClient:\n    \"\"\"Client for Ollama's local API server.\"\"\"\n\n    def __init__(self, base_url: str = \"http://localhost:11434\"):\n        self.base_url = base_url.rstrip(\"/\")\n\n    def list_models(self) -> List[Dict[str, Any]]:\n        \"\"\"List all pulled models.\"\"\"\n        response = requests.get(f\"{self.base_url}/api/tags\")\n        response.raise_for_status()\n        return response.json().get(\"models\", [])\n\n    def pull_model(self, name: str, stream: bool = True) -> None:\n        \"\"\"Pull a model from the Ollama registry.\"\"\"\n        payload = {\"name\": name, \"stream\": stream}\n        with requests.post(\n            f\"{self.base_url}/api/pull\",\n            json=payload,\n            stream=stream,\n        ) as response:\n            response.raise_for_status()\n            if stream:\n                for line in response.iter_lines():\n                    if line:\n                        data = json.loads(line.decode())\n                        status = data.get(\"status\", \"\")\n                        if \"downloading\" in status:\n                            completed = data.get(\"completed\", 0)\n                            total = data.get(\"total\", 1)\n                            pct = (completed / total) * 100\n                            print(f\"\\r{status}: {pct:.1f}%\", end=\"\")\n                        else:\n                            print(f\"\\n{status}\")\n            else:\n                print(f\"Pull completed for {name}\")\n\n    def generate(\n        self,\n        model: str,\n        prompt: str,\n        system: Optional[str] = None,\n        template: Optional[str] = None,\n        context: Optional[List[int]] = None,\n        options: Optional[Dict[str, Any]] = None,\n        stream: bool = False,\n    ) -> Dict[str, Any]:\n        \"\"\"Generate a completion from a model.\"\"\"\n        payload = {\n            \"model\": model,\n            \"prompt\": prompt,\n            \"stream\": stream,\n        }\n        if system:\n            payload[\"system\"] = system\n        if template:\n            payload[\"template\"] = template\n        if context:\n            payload[\"context\"] = context\n        if options:\n            payload[\"options\"] = options\n\n        response = requests.post(\n            f\"{self.base_url}/api/generate\",\n            json=payload,\n        )\n        response.raise_for_status()\n\n        if stream:\n            return response.iter_lines()\n        return response.json()\n\n    def stream_generate(\n        self,\n        model: str,\n        prompt: str,\n        system: Optional[str] = None,\n        options: Optional[Dict[str, Any]] = None,\n    ) -> Generator[str, None, None]:\n        \"\"\"Stream generation token by token.\"\"\"\n        payload = {\n            \"model\": model,\n            \"prompt\": prompt,\n            \"stream\": True,\n        }\n        if system:\n            payload[\"system\"] = system\n        if options:\n            payload[\"options\"] = options\n\n        with requests.post(\n            f\"{self.base_url}/api/generate\",\n            json=payload,\n            stream=True,\n        ) as response:\n            response.raise_for_status()\n            for line in response.iter_lines():\n                if line:\n                    data = json.loads(line.decode())\n                    if \"response\" in data:\n                        yield data[\"response\"]\n                    if data.get(\"done\", False):\n                        break\n\n    def chat(\n        self,\n        model: str,\n        messages: List[Dict[str, str]],\n        options: Optional[Dict[str, Any]] = None,\n    ) -> Dict[str, Any]:\n        \"\"\"Chat completion (Ollama maintains conversation history).\"\"\"\n        payload = {\n            \"model\": model,\n            \"messages\": messages,\n        }\n        if options:\n            payload[\"options\"] = options\n\n        response = requests.post(\n            f\"{self.base_url}/api/chat\",\n            json=payload,\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def create_modelfile(\n        self,\n        name: str,\n        base_model: str,\n        system_prompt: str,\n        temperature: float = 0.7,\n        context_length: int = 4096,\n    ) -> bool:\n        \"\"\"\n        Create a custom model from a Modelfile definition.\n        This is equivalent to: ollama create <name> -f Modelfile\n        \"\"\"\n        modelfile_content = (\n            f\"FROM {base_model}\\n\"\n            f\"SYSTEM \\\"\\\"\\\"{system_prompt}\\\"\\\"\\\"\\n\"\n            f\"PARAMETER temperature {temperature}\\n\"\n            f\"PARAMETER num_ctx {context_length}\\n\"\n            f\"PARAMETER stop \\\"</s>\\\"\\n\"\n        )\n        payload = {\n            \"name\": name,\n            \"modelfile\": modelfile_content,\n        }\n        response = requests.post(\n            f\"{self.base_url}/api/create\",\n            json=payload,\n        )\n        return response.status_code == 200\n\n    def show_model_info(self, name: str) -> Dict[str, Any]:\n        \"\"\"Show model details including Modelfile.\"\"\"\n        response = requests.post(\n            f\"{self.base_url}/api/show\",\n            json={\"name\": name},\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def get_running_models(self) -> List[str]:\n        \"\"\"List currently loaded (in memory) models.\"\"\"\n        response = requests.get(f\"{self.base_url}/api/ps\")\n        response.raise_for_status()\n        models = response.json().get(\"models\", [])\n        return [m[\"name\"] for m in models]\n\n# Usage Example\nif __name__ == \"__main__\":\n    client = OllamaClient()\n\n    # List available models\n    models = client.list_models()\n    print(\"Available models:\")\n    for m in models:\n        print(f\"  - {m['name']} ({m['size']:,} bytes)\")\n\n    # Generate completion\n    result = client.generate(\n        model=\"llama3.1:8b\",\n        prompt=\"What is the difference between vLLM and Ollama?\",\n        options={\"temperature\": 0.5, \"num_predict\": 200},\n    )\n    print(f\"\\nResponse: {result.get('response', '')}\")\n    print(f\"Tokens: {result.get('eval_count', 0)} in \"\n          f\"{result.get('eval_duration', 0) / 1e9:.2f}s\")\n\n    # Create a custom code-assistant model\n    client.create_modelfile(\n        name=\"code-assistant:latest\",\n        base_model=\"llama3.1:8b\",\n        system_prompt=(\n            \"You are an expert software engineer. \"\n            \"Provide concise, correct code solutions. \"\n            \"Always include type hints and docstrings in Python.\"\n        ),\n        temperature=0.2,\n        context_length=8192,\n    )\n    print(\"\\nCreated custom model: code-assistant:latest\")\n\n    # Use the custom model\n    response = client.chat(\n        model=\"code-assistant:latest\",\n        messages=[\n            {\"role\": \"user\", \"content\": \"Write a binary search function in Python.\"}\n        ],\n    )\n    print(f\"\\nCustom model response: {response['message']['content']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-ollama-limitations",
      children: "8.3.3 Ollama Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While Ollama excels at local development, it has important limitations for production:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Workaround"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No continuous batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower throughput under concurrent load (1-2 req/s per model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Ollama for single-user or low-concurrency scenarios only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No tensor parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot serve models larger than single GPU memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for models > 70B on consumer GPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GGUF quantization only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to llama.cpp-supported quantization formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert models to GGUF first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No PagedAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KV cache is contiguous, more memory fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptable for single-user local use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No metrics endpoints, no Prometheus integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use process-level monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limited batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential processing per request in basic mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade to vLLM for production workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-hugging-face-tgi--text-generation-inference",
      children: "8.4 Hugging Face TGI — Text Generation Inference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hugging Face's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Text Generation Inference"
      }), " (TGI) is a production-grade serving solution designed specifically for the Hugging Face ecosystem. It provides tightly integrated model loading from the Hub, optimized inference kernels, and advanced features like watermarking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "841-core-architecture",
      children: "8.4.1 Core Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TGI uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "continuous batching"
      }), " (like vLLM) but differentiates itself through its tight integration with Hugging Face Transformers, its kernel optimizations, and its support for Safetensors loading directly from the Hub."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 8.4 — Hugging Face TGI client\nimport json\nfrom typing import Optional, List, Dict, AsyncGenerator, Any\nimport requests\n\nclass TGIClient:\n    \"\"\"Client for Hugging Face Text Generation Inference server.\"\"\"\n\n    def __init__(\n        self,\n        base_url: str = \"http://localhost:8080\",\n        api_key: Optional[str] = None,\n    ):\n        self.base_url = base_url.rstrip(\"/\")\n        self.api_key = api_key\n\n    def _headers(self) -> Dict[str, str]:\n        headers = {\"Content-Type\": \"application/json\"}\n        if self.api_key:\n            headers[\"Authorization\"] = f\"Bearer {self.api_key}\"\n        return headers\n\n    def generate(\n        self,\n        inputs: str,\n        max_new_tokens: int = 256,\n        temperature: float = 0.7,\n        top_p: float = 0.95,\n        top_k: int = 50,\n        repetition_penalty: float = 1.0,\n        seed: Optional[int] = None,\n        stop_sequences: Optional[List[str]] = None,\n        watermark: bool = False,\n    ) -> Dict[str, Any]:\n        \"\"\"\n        Generate text with TGI.\n\n        Args:\n            inputs: Input text prompt\n            max_new_tokens: Maximum tokens to generate\n            temperature: Sampling temperature\n            top_p: Nucleus sampling parameter\n            top_k: Top-k sampling parameter\n            repetition_penalty: Penalty for repeated tokens\n            seed: Random seed for reproducibility\n            stop_sequences: List of stop sequences\n            watermark: Enable KGW watermarking\n        \"\"\"\n        parameters = {\n            \"max_new_tokens\": max_new_tokens,\n            \"temperature\": temperature,\n            \"top_p\": top_p,\n            \"top_k\": top_k,\n            \"repetition_penalty\": repetition_penalty,\n        }\n        if seed is not None:\n            parameters[\"seed\"] = seed\n        if stop_sequences:\n            parameters[\"stop\"] = stop_sequences\n        if watermark:\n            parameters[\"watermark\"] = True\n\n        payload = {\n            \"inputs\": inputs,\n            \"parameters\": parameters,\n        }\n\n        response = requests.post(\n            f\"{self.base_url}/generate\",\n            headers=self._headers(),\n            json=payload,\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def generate_stream(\n        self,\n        inputs: str,\n        max_new_tokens: int = 256,\n        temperature: float = 0.7,\n        watermark: bool = False,\n    ):\n        \"\"\"Stream generation from TGI.\"\"\"\n        parameters = {\n            \"max_new_tokens\": max_new_tokens,\n            \"temperature\": temperature,\n        }\n        if watermark:\n            parameters[\"watermark\"] = True\n\n        payload = {\n            \"inputs\": inputs,\n            \"parameters\": parameters,\n        }\n\n        with requests.post(\n            f\"{self.base_url}/generate_stream\",\n            headers=self._headers(),\n            json=payload,\n            stream=True,\n        ) as response:\n            response.raise_for_status()\n            for line in response.iter_lines():\n                if not line:\n                    continue\n                if line.startswith(b\"data:\"):\n                    data_str = line[5:].decode(\"utf-8\").strip()\n                    if not data_str:\n                        continue\n                    data = json.loads(data_str)\n                    token = data.get(\"token\", {})\n                    if token.get(\"text\"):\n                        yield token[\"text\"]\n\n    def chat_completion(\n        self,\n        messages: List[Dict[str, str]],\n        model: str = \"tgi\",\n        max_tokens: int = 512,\n        temperature: float = 0.7,\n    ) -> Dict[str, Any]:\n        \"\"\"\n        Use TGI's OpenAI-compatible chat endpoint (TGI v2.0+).\n        \"\"\"\n        payload = {\n            \"model\": model,\n            \"messages\": messages,\n            \"max_tokens\": max_tokens,\n            \"temperature\": temperature,\n        }\n        response = requests.post(\n            f\"{self.base_url}/v1/chat/completions\",\n            headers=self._headers(),\n            json=payload,\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def get_model_info(self) -> Dict[str, Any]:\n        \"\"\"Get loaded model information from TGI.\"\"\"\n        response = requests.get(\n            f\"{self.base_url}/info\",\n            headers=self._headers(),\n        )\n        response.raise_for_status()\n        return response.json()\n\n    def get_health(self) -> bool:\n        \"\"\"Check if TGI server is healthy.\"\"\"\n        try:\n            response = requests.get(\n                f\"{self.base_url}/health\",\n                headers=self._headers(),\n                timeout=5,\n            )\n            return response.status_code == 200\n        except requests.RequestException:\n            return False\n\n# Usage Example\nif __name__ == \"__main__\":\n    client = TGIClient(base_url=\"http://localhost:8080\")\n\n    # Check health\n    if not client.get_health():\n        print(\"TGI server not available\")\n        exit(1)\n\n    # Standard generation\n    result = client.generate(\n        inputs=\"The future of AI engineering depends on\",\n        max_new_tokens=100,\n        temperature=0.8,\n        repetition_penalty=1.1,\n    )\n    print(\"Generated text:\", result.get(\"generated_text\", \"\"))\n\n    # Generation with watermark\n    watermarked = client.generate(\n        inputs=\"Explain watermarking in LLM outputs.\",\n        max_new_tokens=150,\n        watermark=True,\n    )\n    print(\"\\nWatermarked output:\", watermarked.get(\"generated_text\", \"\"))\n\n    # Streaming generation\n    print(\"\\nStreaming:\")\n    for token in client.generate_stream(\n        \"Write a haiku about GPU computing.\",\n        max_new_tokens=50,\n    ):\n        print(token, end=\"\", flush=True)\n    print()\n\n    # Model info\n    info = client.get_model_info()\n    print(f\"\\nModel ID: {info.get('model_id', 'N/A')}\")\n    print(f\"Max concurrency: {info.get('max_concurrent_requests', 'N/A')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "842-kernel-optimizations-and-quantization",
      children: "8.4.2 Kernel Optimizations and Quantization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TGI integrates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flash Attention"
      }), " v2 and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flash Decoding"
      }), " for efficient attention computation. It supports multiple quantization schemes loaded directly from the Hub:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Quantization support in TGI:\n┌─────────────────────────────────────────────┐\n│  Quantization  │ Bits │ Memory vs FP16 │ Speed│\n├────────────────┼──────┼────────────────┼──────┤\n│  No quant      │ 16   │ 1x (baseline)  │ 1x   │\n│  FP8           │ 8    │ 0.5x           │ 1.1x │\n│  AWQ           │ 4    │ 0.25x          │ 0.9x │\n│  GPTQ           │ 4    │ 0.25x          │ 0.85x│\n│  Bitsandbytes  │ 4/8  │ 0.25-0.5x      │ 0.7x │\n│  EETQ           │ 8    │ 0.5x           │ 1.05x│\n└─────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Launch TGI server with quantization\ndocker run --gpus all -p 8080:80 \\\n    -v ~/.cache/huggingface:/data \\\n    ghcr.io/huggingface/text-generation-inference:2.0 \\\n    --model-id meta-llama/Meta-Llama-3.1-8B-Instruct \\\n    --num-shard 2 \\\n    --quantize awq \\\n    --max-input-length 4096 \\\n    --max-total-tokens 8192 \\\n    --max-batch-prefill-tokens 16384 \\\n    --cuda-memory-fraction 0.85\n\n# Launch with watermarking enabled\ndocker run --gpus all -p 8080:80 \\\n    ghcr.io/huggingface/text-generation-inference:2.0 \\\n    --model-id mistralai/Mistral-7B-Instruct-v0.3 \\\n    --watermark-gamma 0.25 \\\n    --watermark-delta 2.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "843-watermarking-kgw-algorithm",
      children: "8.4.3 Watermarking (KGW Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TGI is one of the few serving frameworks that supports built-in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "text watermarking"
      }), " using the Kirchenbauer-Gupta-Watermark (KGW) algorithm. This embeds a statistical signal into generated text that can be detected algorithmically without degrading quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The watermark works by splitting the vocabulary into a \"green list\" and \"red list\" using a hash of previous tokens. During sampling, the model is biased toward green list tokens. Detection uses a z-test to measure whether the observed green-list proportion exceeds chance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-comparison-matrix",
      children: "8.5 Comparison Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-feature-comparison",
      children: "8.5.1 Feature Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "quadrantChart\n    title Deployment Stack Positioning\n    x-axis Low Throughput --> High Throughput\n    y-axis Low Latency Sensitivity --> High Latency Sensitivity\n    quadrant-1 \"Production Latency-Critical\"\n    quadrant-2 \"Production Throughput-Optimized\"\n    quadrant-3 \"Local Development\"\n    quadrant-4 \"Structured Generation\"\n    \"Ollama\": [0.2, 0.3]\n    \"vLLM\": [0.9, 0.6]\n    \"SGLang\": [0.7, 0.8]\n    \"TGI\": [0.7, 0.5]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vLLM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SGLang"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ollama"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TGI"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Released"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom CUDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FlashInfer + Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "llama.cpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformers + Custom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PagedAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RadixAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paged (v2+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWQ, GPTQ, FP8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWQ, FP8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GGUF only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWQ, GPTQ, FP8, bitsandbytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structured Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guidance/LMQL (external)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (regex, JSON, grammar)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Watermarking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (KGW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (v1 compat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (v1 compat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (v2+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (automatic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (RadixAttention)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (v2+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hugging Face Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (direct loading)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA Adapters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (server-side)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics/Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic stats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prometheus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "License"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HFOIL (custom)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-performance-comparison-llama-31-8b-on-a100-80gb",
      children: "8.5.2 Performance Comparison (Llama 3.1 8B on A100 80GB)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vLLM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SGLang"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ollama"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TGI"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max throughput (req/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "185"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "162"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "145"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P50 latency (1 concurrent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "310ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P50 latency (64 concurrent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "890ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "720ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "940ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max batch size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory (idle, 8B FP16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.2 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.8 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.1 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory (peak, 64 req)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21.3 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22.1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23.5 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VRAM efficiency (tokens/GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,240"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,180"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "310"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,020"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Performance figures are approximate and vary by hardware, model, batch composition, and prompt length. Run your own benchmarks with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vllm bench"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tgi-bench"
        }), " for your specific workload."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "853-when-to-use-each-stack",
      children: "8.5.3 When to Use Each Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "┌─────────────────────────────────────────────────────────────────┐\n│                    DEPLOYMENT DECISION TREE                       │\n├─────────────────────────────────────────────────────────────────┤\n│                                                                   │\n│  START HERE                                                       │\n│    │                                                              │\n│    ▼                                                              │\n│  Is this for local development or exploration?                    │\n│    ├── YES → Use Ollama                                           │\n│    │       • Single user, no concurrency pressure                  │\n│    │       • Quick prototyping and experimentation                 │\n│    │       • Offline or air-gapped environments                    │\n│    │                                                              │\n│    └── NO (Production) →                                          │\n│             │                                                     │\n│             ▼                                                     │\n│           Do you need structured/constrained output?               │\n│             ├── YES → Use SGLang                                  │\n│             │       • JSON-schema-constrained generation            │\n│             │       • Regex-guided output formatting               │\n│             │       • Classification with guaranteed categories    │\n│             │       • High prefix reuse (system prompts, tools)    │\n│             │                                                      │\n│             └── NO →                                               │\n│                       │                                            │\n│                       ▼                                            │\n│                     Do you need maximum raw throughput?             │\n│                       ├── YES → Use vLLM                           │\n│                       │       • Chatbots serving 1000s of users    │\n│                       │       • High-concurrency API endpoints      │\n│                       │       • Lowest cost per token               │\n│                       │       • Multi-GPU tensor parallelism        │\n│                       │                                            │\n│                       └── NO → Use TGI                             │\n│                               • Tight Hugging Face integration      │\n│                               • Watermarking requirement            │\n│                               • FP8 quantization preferred          │\n│                               • Existing HF Transformers pipelines  │\n│                                                                     │\n└─────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "854-unified-benchmark-client",
      children: "8.5.4 Unified Benchmark Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 8.5.4 — Unified benchmark script for all four deployment stacks\nimport time\nimport json\nfrom dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Callable\nimport requests\n\n@dataclass\nclass BenchmarkResult:\n    \"\"\"Results from a single benchmark run.\"\"\"\n    framework: str\n    model: str\n    n_requests: int\n    concurrency: int\n    mean_latency_ms: float\n    p50_latency_ms: float\n    p95_latency_ms: float\n    p99_latency_ms: float\n    throughput_req_per_s: float\n    total_duration_s: float\n    errors: int = 0\n\nclass DeploymentBenchmark:\n    \"\"\"Unified benchmark for vLLM, SGLang, Ollama, and TGI.\"\"\"\n\n    def __init__(self, prompt: str = \"What is machine learning?\"):\n        self.prompt = prompt\n        self.results: List[BenchmarkResult] = []\n\n    def _measure(\n        self,\n        name: str,\n        model: str,\n        send_fn: Callable[[], float],\n        n_requests: int = 20,\n        concurrency: int = 1,\n    ) -> BenchmarkResult:\n        \"\"\"Measure latency and throughput for a given send function.\"\"\"\n        latencies = []\n        errors = 0\n        start = time.perf_counter()\n\n        for i in range(n_requests):\n            try:\n                t = send_fn()\n                latencies.append(t)\n            except Exception as e:\n                errors += 1\n                print(f\"  Error on request {i}: {e}\")\n\n        total = time.perf_counter() - start\n        latencies.sort()\n\n        if not latencies:\n            return BenchmarkResult(\n                framework=name, model=model, n_requests=n_requests,\n                concurrency=concurrency, mean_latency_ms=0,\n                p50_latency_ms=0, p95_latency_ms=0, p99_latency_ms=0,\n                throughput_req_per_s=0, total_duration_s=total, errors=n_requests,\n            )\n\n        mean_latency = sum(latencies) / len(latencies) * 1000\n        p50 = latencies[len(latencies) // 2] * 1000\n        p95 = latencies[int(len(latencies) * 0.95)] * 1000\n        p99 = latencies[int(len(latencies) * 0.99)] * 1000\n        throughput = n_requests / total\n\n        result = BenchmarkResult(\n            framework=name,\n            model=model,\n            n_requests=n_requests,\n            concurrency=concurrency,\n            mean_latency_ms=round(mean_latency, 1),\n            p50_latency_ms=round(p50, 1),\n            p95_latency_ms=round(p95, 1),\n            p99_latency_ms=round(p99, 1),\n            throughput_req_per_s=round(throughput, 2),\n            total_duration_s=round(total, 2),\n            errors=errors,\n        )\n        self.results.append(result)\n        return result\n\n    def benchmark_vllm(self, url: str = \"http://localhost:8000\",\n                       model: str = \"meta-llama/Meta-Llama-3.1-8B-Instruct\",\n                       n: int = 20):\n        \"\"\"Benchmark vLLM.\"\"\"\n        def send():\n            start = time.perf_counter()\n            requests.post(\n                f\"{url}/v1/chat/completions\",\n                json={\n                    \"model\": model,\n                    \"messages\": [{\"role\": \"user\", \"content\": self.prompt}],\n                    \"max_tokens\": 50,\n                    \"temperature\": 0.1,\n                },\n                timeout=30,\n            )\n            return time.perf_counter() - start\n\n        return self._measure(\"vLLM\", model, send, n)\n\n    def benchmark_sglang(self, url: str = \"http://localhost:30000\",\n                         model: str = \"default\",\n                         n: int = 20):\n        \"\"\"Benchmark SGLang.\"\"\"\n        def send():\n            start = time.perf_counter()\n            requests.post(\n                f\"{url}/generate\",\n                json={\n                    \"text\": self.prompt,\n                    \"sampling_params\": {\n                        \"max_new_tokens\": 50,\n                        \"temperature\": 0.1,\n                    },\n                },\n                timeout=30,\n            )\n            return time.perf_counter() - start\n\n        return self._measure(\"SGLang\", model, send, n)\n\n    def benchmark_ollama(self, url: str = \"http://localhost:11434\",\n                         model: str = \"llama3.1:8b\",\n                         n: int = 20):\n        \"\"\"Benchmark Ollama.\"\"\"\n        def send():\n            start = time.perf_counter()\n            requests.post(\n                f\"{url}/api/generate\",\n                json={\n                    \"model\": model,\n                    \"prompt\": self.prompt,\n                    \"options\": {\"num_predict\": 50},\n                },\n                timeout=120,\n            )\n            return time.perf_counter() - start\n\n        return self._measure(\"Ollama\", model, send, n)\n\n    def benchmark_tgi(self, url: str = \"http://localhost:8080\",\n                      model: str = \"tgi\",\n                      n: int = 20):\n        \"\"\"Benchmark TGI.\"\"\"\n        def send():\n            start = time.perf_counter()\n            requests.post(\n                f\"{url}/generate\",\n                json={\n                    \"inputs\": self.prompt,\n                    \"parameters\": {\n                        \"max_new_tokens\": 50,\n                        \"temperature\": 0.1,\n                    },\n                },\n                timeout=30,\n            )\n            return time.perf_counter() - start\n\n        return self._measure(\"TGI\", model, send, n)\n\n    def run_all(self, models: Optional[Dict[str, str]] = None):\n        \"\"\"Run benchmarks for all four frameworks.\"\"\"\n        if models is None:\n            models = {}\n\n        print(\"=\" * 60)\n        print(\"DEPLOYMENT STACK BENCHMARK\")\n        print(\"=\" * 60)\n        print(f\"Prompt: '{self.prompt}'\")\n        print(f\"Output length: ~50 tokens\")\n        print()\n\n        endpoints = [\n            (\"vLLM\", self.benchmark_vllm, models.get(\"vllm\", {})),\n            (\"SGLang\", self.benchmark_sglang, models.get(\"sglang\", {})),\n            (\"Ollama\", self.benchmark_ollama, models.get(\"ollama\", {})),\n            (\"TGI\", self.benchmark_tgi, models.get(\"tgi\", {})),\n        ]\n\n        for name, fn, kwargs in endpoints:\n            try:\n                print(f\"Benchmarking {name}...\")\n                result = fn(**kwargs)\n                print(f\"  Throughput: {result.throughput_req_per_s} req/s\")\n                print(f\"  P50 latency: {result.p50_latency_ms} ms\")\n                print(f\"  Errors: {result.errors}\")\n            except Exception as e:\n                print(f\"  SKIPPED ({e})\")\n            print()\n\n        # Summary table\n        print(\"\\n\" + \"=\" * 60)\n        print(\"BENCHMARK SUMMARY\")\n        print(\"=\" * 60)\n        print(f\"{'Framework':<10} {'Throughput':<15} {'P50 Latency':<15} {'P95 Latency':<15}\")\n        print(\"-\" * 55)\n        for r in self.results:\n            print(f\"{r.framework:<10} {r.throughput_req_per_s:<15.2f} \"\n                  f\"{r.p50_latency_ms:<15.1f} {r.p95_latency_ms:<15.1f}\")\n        print(\"=\" * 60)\n\nif __name__ == \"__main__\":\n    benchmark = DeploymentBenchmark()\n    benchmark.run_all()\n    benchmark.results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Explain how PagedAttention differs from traditional KV cache management. What problem does it solve and what are the trade-offs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nTraditional KV cache allocates contiguous memory per sequence, causing internal fragmentation (pre-allocating for max length) and external fragmentation (gaps from freed sequences). PagedAttention divides the cache into fixed-size pages with a page table mapping logical positions to physical pages. This eliminates fragmentation (allowing 2-4x higher batch sizes) and enables copy-on-write sharing of common prefixes. Trade-offs include page table lookup overhead (mitigated by GPU-optimized kernels) and slightly more complex scheduling.\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview tip"
        }), ": Mention the OS virtual memory analogy explicitly — it shows deep understanding. Cite the vLLM paper (Kwon et al., 2023) for extra points."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Design an LLM serving infrastructure that must handle 10,000 requests per second with a 200ms P99 latency SLA. Which stack would you choose and what configuration?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nUse vLLM with the following architecture: (1) Multiple vLLM instances behind an Nginx/Gateway load balancer, each with tensor parallelism across 2-4 GPUs depending on model size. (2) Prefix caching enabled for shared system prompts. (3) Continuous batching with `max-num-seqs` tuned to balance throughput and latency (start at 128). (4) AWQ quantization (4-bit) to maximize GPU memory for KV cache. (5) Auto-scaling based on queue depth from Prometheus metrics. For 10K req/s on Llama 3.1 8B AWQ, estimate ~8-12 A100-80GB instances. Use vLLM's metrics endpoint for monitoring and Kubernetes for orchestration.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Compare Ollama and vLLM for a team building an internal coding assistant used by 50 developers. What are the cost, performance, and operational considerations?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nFor 50 developers with moderate concurrency (~5-10 simultaneous requests), Ollama may suffice initially but will struggle with concurrent load (sequential processing). vLLM would handle 50 concurrent users easily with continuous batching. Cost analysis: Ollama on a single A100 ($2-3/hr) vs vLLM on the same hardware handling 10x throughput. Operational: Ollama is nearly zero-maintenance; vLLM requires Docker, health checks, and monitoring setup. Recommendation: Start with Ollama for prototyping, migrate to vLLM when concurrent requests exceed 5-10 simultaneous users.\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leadership principle"
        }), ": \"Deliver Results\" — choose the simplest solution that meets the SLA, but plan the migration path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " How would you explain the difference between PagedAttention and RadixAttention to a non-technical product manager?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nThink of LLM memory like a library. PagedAttention is like organizing books into standardized shelves — any book fits any shelf, no wasted space, and you can add/remove books without reorganizing the whole library. This lets you serve more readers simultaneously. RadixAttention is like keeping the first few chapters of popular books already open on reading desks — if 100 people start reading the same book, they all share the first 50 pages. You save the effort of re-reading the beginning for each person. vLLM = library with efficient shelves (better space usage). SGLang = library with shared reading desks (faster for common content).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Your enterprise platform needs to serve LLMs across Azure NCads H100 instances. How would you deploy vLLM or TGI with Azure-specific optimizations?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nFor Azure H100 NCadsv5 instances: (1) Use Azure Kubernetes Service (AKS) with GPU node pools. (2) Deploy vLLM with `tensor-parallel-size=8` across 8×H100 GPUs per node for models like Llama 3.1 405B. (3) Enable InfiniBand communication for NVLink-free inter-node tensor parallelism. (4) Use Azure Blob Storage for model weights with `vllm serve` mounting via blobfuse. (5) Attach Azure Monitor with vLLM Prometheus metrics. (6) vLLM's AWQ quantization reduces memory needs 4x, enabling more replicas per GPU. For enterprise compliance, TGI's watermarking might be required for content provenance.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " What security considerations apply when deploying Ollama in an enterprise environment?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nOllama's default API binds to 0.0.0.0:11434 with no authentication. Enterprise risks: (1) No built-in auth — anyone on the network can execute models. (2) No rate limiting — potential for resource exhaustion attacks. (3) Model theft — pulled models are stored as GGUF files on disk. (4) No audit logging — no request history for compliance. Mitigations: (a) Bind to localhost or use network policies. (b) Deploy behind an authenticating reverse proxy (Nginx + OAuth2 Proxy). (c) Encrypt model storage. (d) Use Ollama in Docker with read-only filesystem where possible.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " How does the choice of batching strategy (static vs continuous) affect GPU utilization in LLM serving?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nStatic batching processes all sequences in a batch to completion before starting a new batch. This causes GPU underutilization as shorter sequences idle waiting for longer ones. Continuoous batching evaluates at the token level — when one sequence finishes, its slot is immediately reused. This keeps GPU compute units saturated. On an A100-80GB, continuous batching achieves 85-95% GPU utilization vs 40-60% for static batching. The scheduler overhead is minimal (<1% of step time). vLLM implements this with its iterative scheduler that selects sequences for prefill and decode phases independently.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " Compare the memory efficiency of PagedAttention vs RadixAttention for serving multi-turn conversations with long shared system prompts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nFor multi-turn conversations with shared system prompts (e.g., 2K token system prompt + 500 token user message): PagedAttention shares the first 2K tokens' KV cache via copy-on-write across all conversations, saving ~2× memory for the shared portion. RadixAttention goes further by storing the shared prefix in a radix tree — if 100 conversations share the same system prompt, it is stored once (not 100 copies with page tables). RadixAttention can interleave shared and unique prefixes more flexibly. For this scenario, RadixAttention (SGLang) uses ~1.5× less memory for the prefix than PagedAttention (vLLM), though both outperform contiguous allocation.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9:"
      }), " You are building an AI-powered form-filling startup on a limited budget (2 GPUs). Which deployment stack allows you to offer structured JSON extraction from documents while maximizing throughput?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nUse SGLang (with vLLM as a fallback). SGLang's JSON-schema-constrained decoding natively supports structured extraction without external libraries. On 2 GPUs: (1) Use tensor parallelism with TP=2 for models up to 70B parameters. (2) Enable RadixAttention — document extraction often shares prompt prefixes (schema definitions, instructions), which get cached. (3) SGLang's regex constraints ensure extraction output never fails schema validation. This avoids retry logic and wasted GPU cycles. For structured output workloads, SGLang typically achieves 10-20% higher effective throughput than vLLM because constrained decoding prevents invalid outputs.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10:"
      }), " Your startup needs to watermark all generated content for copyright protection. Which deployment stack supports this natively, and how would you implement it if your chosen stack doesn't?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nTGI supports KGW watermarking natively with `--watermark-gamma` and `--watermark-delta` flags. If using vLLM, implement watermarking at the application layer: (1) After generation, apply the KGW detection z-test on the output. (2) Modify logit processing during sampling using vLLM's `LogitsProcessor` interface to bias toward green-list tokens. (3) For SGLang, add a custom constraint function. Implementation: TGI is the easiest path — set `watermark=True` in the generation request. For watermark detection, use the `watermark_detection` Python package (or implement the z-test: count green tokens, compute z-score = (green_ratio - gamma) / sqrt(gamma*(1-gamma)/total), reject if z < threshold).\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter provided a comprehensive comparison of the four dominant LLM deployment stacks in 2026: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vLLM"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SGLang"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ollama"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hugging Face TGI"
      }), ". We examined their core architectural innovations — PagedAttention's page-based memory management, RadixAttention's prefix-tree caching, Ollama's zero-config local runner, and TGI's ecosystem-tight integration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The comparison matrix showed vLLM leading in raw throughput (185 req/s on Llama 3.1 8B), SGLang excelling at structured generation with native JSON schema constraints, Ollama dominating developer experience for local experimentation, and TGI providing the most comprehensive feature set for enterprise deployment including watermarking and direct Hub integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The benchmark client code allows any engineer to run direct comparisons on their own hardware and workload. The decision tree provides a clear path: Ollama for prototyping and single-user local use, SGLang for structured output workloads, vLLM for maximum throughput in production, and TGI for tight Hugging Face integration or watermarking requirements."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next step"
      }), ": Run the unified benchmark client in Section 8.5.4 against all four frameworks on your hardware. Compare your results with the reference table. This hands-on measurement is the best way to internalize the performance characteristics of each stack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before committing to a stack, run the benchmark client in Section 8.5.4 against all reachable frameworks with your actual model and prompt distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ollama is the fastest path from idea to working prototype — use it for all local development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate to vLLM when you need to serve more than 5 concurrent users or achieve sub-500ms P50 latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose SGLang if your application relies on structured output (JSON, regex, grammar) — the native constraints eliminate retry logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TGI only if you need Hugging Face Hub direct loading, FP8 quantization, or KGW watermarking"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable prefix caching in vLLM (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--enable-prefix-caching"
        }), ") or RadixAttention in SGLang if your prompts share common prefixes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For cost-sensitive deployments, start with vLLM on single GPU with AWQ quantization before scaling to multi-GPU"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Monitor GPU utilization with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nvidia-smi"
        }), " or Prometheus — continuous batching should keep utilization >80%"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider hybrid deployments: SGLang for structured extraction, vLLM for free-text chat, and load-balance between them"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the key memory management innovation in vLLM that enables 2-4x higher throughput?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Flash Attention\nB) PagedAttention — KV cache divided into fixed-size pages\nC) Continuous batching\nD) Tensor parallelism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — PagedAttention manages KV cache in pages with a page table, eliminating fragmentation and enabling copy-on-write sharing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which framework is specifically designed for structured generation with native regex and JSON schema constraints?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) vLLM\nB) SGLang\nC) Ollama\nD) TGI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — SGLang provides native support for regex-constrained decoding, JSON schema output, and grammar-guided generation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " A startup wants to prototype locally with zero configuration, then migrate to production. Which transition path is most appropriate?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Ollama → vLLM\nB) vLLM → SGLang\nC) TGI → Ollama\nD) SGLang → TGI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "A — Ollama provides the fastest local setup (`ollama pull` then `ollama run`), while vLLM provides production-grade serving with continuous batching and tensor parallelism."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which framework supports KGW text watermarking natively for content provenance?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) vLLM\nB) SGLang\nC) Ollama\nD) TGI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "D — Hugging Face TGI is the only major serving framework with built-in KGW watermarking support via `--watermark-gamma` and `--watermark-delta` flags."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " You need to serve an LLM where 80% of each request is a shared system prompt. Which framework's KV cache strategy delivers the highest memory savings?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) vLLM with PagedAttention\nB) SGLang with RadixAttention\nC) Ollama with contiguous cache\nD) All frameworks handle this equally"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — RadixAttention stores common prefixes in a radix tree, sharing the KV cache across all requests starting with the same prefix. For 80% common prefix, RadixAttention uses ~5× less memory than contiguous allocation and ~1.5× less than PagedAttention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deploy and Benchmark"
          }), ": Start vLLM locally with Llama 3.1 8B (or a smaller model like Qwen2.5-1.5B). Write a Python script that sends 100 concurrent requests using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "concurrent.futures.ThreadPoolExecutor"
          }), " and measures throughput and P50/P95/P99 latency. Compare results with the performance table in Section 8.5.2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structured Extraction Pipeline"
          }), ": Using SGLang, build a pipeline that: (a) Takes a batch of 10 news articles, (b) Extracts entities (person, organization, date, topic) using JSON-schema-constrained decoding, (c) Classifies each article into one of 5 categories using regex-constrained generation, (d) Outputs a structured JSON report. Measure prefix cache hit rate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Ollama Model"
          }), ": Create a Modelfile-based custom model from Llama 3.1 that: (a) Has a system prompt for a SQL query generator, (b) Sets temperature to 0.1 and context length to 4096, (c) Adds custom stop tokens (\";\", \"```\"), (d) Quantizes to Q4_K_M. Write Python client code that sends 5 natural language questions and prints the generated SQL."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Simulation"
          }), ": Write a Python script that simulates migrating from Ollama to vLLM. The script should: (a) First use Ollama's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/generate"
          }), " endpoint to serve 10 sequential requests, measuring total time. (b) Then use vLLM's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/v1/chat/completions"
          }), " endpoint to serve the same 10 requests with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "max-num-seqs=4"
          }), " continuous batching, measuring total time. (c) Calculate throughput improvement and memory savings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decision Tool"
          }), ": Implement a Python function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "recommend_stack(requirements: dict) -> str"
          }), " that takes a requirements dictionary (containing keys like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "concurrent_users"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "needs_structured_output"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "budget_gpus"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "needs_watermarking"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "local_first"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "huggingface_integration"
          }), ") and returns the recommended deployment stack with a justification string. Include at least 6 decision rules."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PagedAttention = OS virtual memory for KV cache (page table, copy-on-write, no fragmentation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RadixAttention = prefix tree cache (shared system prompts stored once)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous batching = swap sequences in/out per token step (3-5x throughput vs static)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tensor parallelism = shard model across GPUs (splits attention heads and FFN weights)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vLLM: max throughput, OpenAI API, tensor parallelism, AWQ/GPTQ/FP8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SGLang: structured output (regex/JSON), RadixAttention, constrained decoding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ollama: local dev, GGUF, zero-config, no batching, no TP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TGI: Hub integration, watermarking, FP8, continuous batching v2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision: Ollama → (need structured?) → SGLang : (need max throughput?) → vLLM : (need HF/watermark?) → TGI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "vLLM's PagedAttention"
        }), " eliminates KV cache fragmentation through page-based memory management, delivering 2-4x throughput gains over contiguous allocation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SGLang's RadixAttention"
        }), " caches common prompt prefixes in a radix tree, providing additional memory savings for workloads with shared system prompts (10-30% over PagedAttention)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous batching"
        }), " is the single largest throughput optimization — all production stacks (vLLM, SGLang, TGI) implement it while Ollama uses sequential processing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structured generation"
        }), " is SGLang's killer feature: native regex, JSON schema, and grammar constraints eliminate post-processing and retry logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ollama"
        }), " is unbeatable for local experimentation (3-second startup) but unsuitable for production concurrency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TGI"
        }), " wins when you need Hugging Face ecosystem integration, FP8 quantization, or KGW watermarking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tensor parallelism"
        }), " enables serving models larger than single GPU memory (e.g., Llama 3.1 405B across 8×H100)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The unified benchmark client"
        }), " lets you run apples-to-apples comparisons across all four stacks with a single script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start simple, scale deliberately"
        }), ": Ollama for prototyping → vLLM/SGLang for production (based on structured output needs) → add watermarking with TGI if required"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List \"LLM Serving (vLLM, SGLang, Ollama, TGI)\" under ML Infrastructure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Benchmarked and deployed Llama 3.1 70B using vLLM with tensor parallelism, achieving 185 req/s throughput with <200ms P50 latency\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": vLLM, PagedAttention, SGLang, RadixAttention, continuous batching, tensor parallelism, structured generation, constrained decoding, Ollama, TGI, GGUF, AWQ, watermarking"]
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
          checked: true,
          disabled: true
        }), " Review PagedAttention vs RadixAttention architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Understand continuous batching and its throughput impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Know the comparison matrix (throughput, latency, memory, features)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Practice the decision tree (which stack for which scenario)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Review tensor parallelism communication patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Understand KGW watermarking mechanism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Be ready to design a multi-stack deployment architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Know Ollama's limitations and migration path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Practice explaining memory management with analogies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI on an empty input?"
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
            children: "Complete Medium exercises, explain 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI to someone else"
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
        children: "Always write a one-line example of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI."
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
        children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI."
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
        children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is like a recipe"
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
        }), " — this chapter contributes the 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-08deploymentstackcomparison-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-08deploymentstackcomparison-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-08deploymentstackcomparison-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-08deploymentstackcomparison-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-08deploymentstackcomparison-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI in production at scale"
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
        children: "Testing: pytest for unit tests of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI code."]
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
        }), " or your IDE's debugger to step through the 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI example code."]
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
        children: "Explain 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI."
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
        children: "Tell me about a time you debugged a 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI without notes"
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
        }), ": a small team uses 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI depends on input size and distribution — always benchmark for your own data."
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