"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2454],{

/***/ 75387
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_07_fine_tuning_platforms_md_2be_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-23-trending-aiml-platforms-07-fine-tuning-platforms-md-2be.json
const site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_07_fine_tuning_platforms_md_2be_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/trending-aiml-platforms/07-fine-tuning-platforms","title":"Fine-Tuning Platforms & Tools","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms.md","sourceDirName":"courses/ai-engineering-placement/23-trending-aiml-platforms","slug":"/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":295,"frontMatter":{"id":"07-fine-tuning-platforms","slug":"/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms","title":"Fine-Tuning Platforms & Tools","sidebar_label":"Fine-Tuning Platforms & Tools","sidebar_position":295},"sidebar":"placementSidebar","previous":{"title":"Model Selection & Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/06-model-selection-evaluation"},"next":{"title":"08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms.md


const frontMatter = {
	id: '07-fine-tuning-platforms',
	slug: '/ai-engineering-placement/23-trending-aiml-platforms/07-fine-tuning-platforms',
	title: 'Fine-Tuning Platforms & Tools',
	sidebar_label: 'Fine-Tuning Platforms & Tools',
	sidebar_position: 295
};
const contentTitle = 'Fine-Tuning Platforms & Tools';

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
  "value": "7.1 Unsloth — 2× Faster Training with QLoRA Optimization",
  "id": "71-unsloth--2-faster-training-with-qlora-optimization",
  "level": 3
}, {
  "value": "Core Optimizations",
  "id": "core-optimizations",
  "level": 4
}, {
  "value": "Gradient Checkpointing Deep Dive",
  "id": "gradient-checkpointing-deep-dive",
  "level": 4
}, {
  "value": "Supported Model Architectures",
  "id": "supported-model-architectures",
  "level": 4
}, {
  "value": "Memory Benchmarks (Single GPU, Batch Size 1, Seq Length 4096)",
  "id": "memory-benchmarks-single-gpu-batch-size-1-seq-length-4096",
  "level": 4
}, {
  "value": "7.2 Axolotl — Configuration-Driven Fine-Tuning",
  "id": "72-axolotl--configuration-driven-fine-tuning",
  "level": 3
}, {
  "value": "YAML Configuration Structure",
  "id": "yaml-configuration-structure",
  "level": 4
}, {
  "value": "Dataset Format Support",
  "id": "dataset-format-support",
  "level": 4
}, {
  "value": "Running Training",
  "id": "running-training",
  "level": 4
}, {
  "value": "Multi-GPU Topology",
  "id": "multi-gpu-topology",
  "level": 4
}, {
  "value": "7.3 OpenPipe — Data Curation &amp; Model Comparison",
  "id": "73-openpipe--data-curation--model-comparison",
  "level": 3
}, {
  "value": "Workflow",
  "id": "workflow",
  "level": 4
}, {
  "value": "Data Curation Best Practices",
  "id": "data-curation-best-practices",
  "level": 4
}, {
  "value": "7.4 Together Fine-Tuning — Hosted Fine-Tuning API",
  "id": "74-together-fine-tuning--hosted-fine-tuning-api",
  "level": 3
}, {
  "value": "API-Based Fine-Tuning",
  "id": "api-based-fine-tuning",
  "level": 4
}, {
  "value": "Data Privacy &amp; Security",
  "id": "data-privacy--security",
  "level": 4
}, {
  "value": "Supported Base Models",
  "id": "supported-base-models",
  "level": 4
}, {
  "value": "7.5 Modal — Serverless GPU Fine-Tuning",
  "id": "75-modal--serverless-gpu-fine-tuning",
  "level": 3
}, {
  "value": "Fine-Tuning as Code",
  "id": "fine-tuning-as-code",
  "level": 4
}, {
  "value": "Modal Scaling Properties",
  "id": "modal-scaling-properties",
  "level": 4
}, {
  "value": "7.6 Platform Selection Guide",
  "id": "76-platform-selection-guide",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: Explain how QLoRA enables fine-tuning of 70B models on a single consumer GPU (24 GB).",
  "id": "q1-explain-how-qlora-enables-fine-tuning-of-70b-models-on-a-single-consumer-gpu-24-gb",
  "level": 3
}, {
  "value": "Q2: Compare Unsloth&#39;s <code>use_gradient_checkpointing=&quot;unsloth&quot;</code> with the standard Hugging Face gradient checkpointing.",
  "id": "q2-compare-unsloths-use_gradient_checkpointingunsloth-with-the-standard-hugging-face-gradient-checkpointing",
  "level": 3
}, {
  "value": "Q3: What dataset formats does Axolotl support, and why does format flexibility matter?",
  "id": "q3-what-dataset-formats-does-axolotl-support-and-why-does-format-flexibility-matter",
  "level": 3
}, {
  "value": "Q4: How does OpenPipe&#39;s approach differ from Axolotl for fine-tuning?",
  "id": "q4-how-does-openpipes-approach-differ-from-axolotl-for-fine-tuning",
  "level": 3
}, {
  "value": "Q5: Describe the data privacy guarantees provided by Together AI for hosted fine-tuning.",
  "id": "q5-describe-the-data-privacy-guarantees-provided-by-together-ai-for-hosted-fine-tuning",
  "level": 3
}, {
  "value": "Q6: What is the cold-start problem in serverless GPU platforms like Modal, and how can it be mitigated?",
  "id": "q6-what-is-the-cold-start-problem-in-serverless-gpu-platforms-like-modal-and-how-can-it-be-mitigated",
  "level": 3
}, {
  "value": "Q7: When would you choose LoRA (rank 16) vs. full fine-tuning? What are the trade-offs?",
  "id": "q7-when-would-you-choose-lora-rank-16-vs-full-fine-tuning-what-are-the-trade-offs",
  "level": 3
}, {
  "value": "Q8: How would you design an evaluation pipeline to compare a fine-tuned model against its base model?",
  "id": "q8-how-would-you-design-an-evaluation-pipeline-to-compare-a-fine-tuned-model-against-its-base-model",
  "level": 3
}, {
  "value": "Q9: What factors determine the cost of a hosted fine-tuning job on Together AI?",
  "id": "q9-what-factors-determine-the-cost-of-a-hosted-fine-tuning-job-on-together-ai",
  "level": 3
}, {
  "value": "Q10: How would you fine-tune a model for code generation using Unsloth, and what rank would you choose?",
  "id": "q10-how-would-you-fine-tune-a-model-for-code-generation-using-unsloth-and-what-rank-would-you-choose",
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
        id: "fine-tuning-platforms--tools",
        children: "Fine-Tuning Platforms & Tools"
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
            children: "Fine-tune LLMs with Unsloth using 4-bit QLoRA, achieving 2× training speed with 50% less VRAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure Axolotl YAML pipelines for multi-GPU fine-tuning with custom dataset formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curate training data and compare model performance using OpenPipe's managed platform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy hosted fine-tuning jobs via Together AI's REST API with privacy guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement serverless fine-tuning pipelines on Modal's GPU cloud using Python SDK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts a pre-trained LLM to a specific domain, task, or behaviour by continuing training on curated data. In 2026, the fine-tuning ecosystem has matured beyond the early days of full-parameter retraining on datacenter clusters. A new generation of platforms — Unsloth, Axolotl, OpenPipe, Together AI, and Modal — has made fine-tuning accessible on consumer GPUs, configurable via YAML, manageable through web dashboards, and deployable as serverless functions. This chapter surveys each platform in depth: how they work, what problems they solve, and how to use them in production. You will learn not just the \"what\" but the \"when\" — which platform to pick for your budget, hardware, data size, and deployment constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python 3.10+ and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "torch"
        }), " (PyTorch) basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Familiarity with Hugging Face ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transformers"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "datasets"
        }), " libraries"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of LoRA/QLoRA concepts (Low-Rank Adaptation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic knowledge of GPU memory and VRAM constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Hugging Face account for model access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommended: access to a GPU (T4, RTX 3090/4090, or A100) — or use Modal/Together for hosted compute"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Rank Adaptation — injects trainable rank-decomposition matrices into attention layers; reduces trainable parameters by 10,000×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QLoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantized LoRA — combines 4-bit NormalFloat quantization with LoRA adapters; fine-tunes 65B models on a single 24GB GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Checkpointing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trades compute for memory by recomputing activations during backpropagation instead of storing them; reduces VRAM by ~30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A small set of trainable weights (typically <1% of base model size) that is merged with or loaded alongside frozen base weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YAML Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative configuration file defining model, dataset, hyperparameters, and hardware settings for Axolotl pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Preference Optimization — fine-tunes a model using preference pairs (chosen/rejected) without explicit reward modelling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised Fine-Tuning — trains the model on input-output pairs using standard cross-entropy loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral GPU compute that is allocated on-demand per job; no dedicated instance to manage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Curation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The process of cleaning, filtering, deduplicating, and formatting training data for fine-tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation harnesses that measure model performance before, during, and after fine-tuning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-unsloth--2-faster-training-with-qlora-optimization",
      children: "7.1 Unsloth — 2× Faster Training with QLoRA Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unsloth is a fine-tuning acceleration library that patches Hugging Face's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transformers"
      }), " training loop with custom CUDA kernels and memory optimizations. It achieves ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2× faster training"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "50% less VRAM"
      }), " compared to the standard Hugging Face ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Trainer"
      }), " — without altering model accuracy. Unsloth supports Llama 3/4, Mistral, Gemma, Qwen 2.5, DeepSeek, Phi-4, and 20+ architectures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "core-optimizations",
      children: "Core Optimizations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsloth delivers its speedup through four key innovations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fast attention kernels"
        }), ": Custom CUDA implementations that are 1.5–2× faster than Flash Attention-2 for common model sizes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4-bit NormalFloat (NF4) quantisation"
        }), ": Loads the base model in 4-bit precision, reducing memory footprint by 4× compared to FP16. Trainable adapters remain in FP16/BF16 for gradient accuracy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimised LoRA computation"
        }), ": Fuses the LoRA forward pass and weight-decomposition operations, reducing kernel launch overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic gradient checkpointing"
        }), ": Intelligently selects which activations to checkpoint based on available VRAM, trading recomputation for memory only when needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# install: pip install \"unsloth[cu118-ampere] @ git+https://github.com/unslothai/unsloth.git\"\r\n\r\nfrom unsloth import FastLanguageModel\r\nfrom unsloth import is_bfloat16_supported\r\nimport torch\r\nfrom datasets import load_dataset\r\nfrom trl import SFTTrainer\r\nfrom transformers import TrainingArguments\r\n\r\n# ── 1. Load model with 4-bit QLoRA ──────────────────────────────────\r\nmodel, tokenizer = FastLanguageModel.from_pretrained(\r\n    model_name=\"unsloth/Llama-3.2-3B-Instruct-bnb-4bit\",\r\n    max_seq_length=4096,          # supports up to 32768\r\n    dtype=None,                    # auto-detect: FP16 or BF16\r\n    load_in_4bit=True,             # 4-bit NF4 quantisation\r\n    device_map=\"auto\",\r\n)\r\n\r\n# ── 2. Add LoRA adapters ────────────────────────────────────────────\r\nmodel = FastLanguageModel.get_peft_model(\r\n    model,\r\n    r=16,                          # LoRA rank: 8, 16, 32, 64\r\n    target_modules=[\r\n        \"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\",\r\n        \"gate_proj\", \"up_proj\", \"down_proj\",\r\n    ],\r\n    lora_alpha=32,                 # scaling factor (alpha / r)\r\n    lora_dropout=0.05,             # dropout for regularisation\r\n    bias=\"none\",\r\n    use_gradient_checkpointing=\"unsloth\",  # unsloth's optimised GC\r\n    random_state=42,\r\n    use_rslora=False,\r\n    loftq_config=None,\r\n)\r\n\r\n# ── 3. Load dataset ──────────────────────────────────────────────────\r\ndataset = load_dataset(\"json\", data_files={\"train\": \"training_data.jsonl\"})\r\ndataset = dataset.map(lambda x: {\r\n    \"text\": tokenizer.apply_chat_template(\r\n        [\r\n            {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\r\n            {\"role\": \"user\", \"content\": x[\"instruction\"]},\r\n            {\"role\": \"assistant\", \"content\": x[\"output\"]},\r\n        ],\r\n        tokenize=False,\r\n    )\r\n})\r\n\r\n# ── 4. Configure training ────────────────────────────────────────────\r\ntraining_args = TrainingArguments(\r\n    output_dir=\"./llama-3.2-3b-finetuned\",\r\n    per_device_train_batch_size=4,\r\n    gradient_accumulation_steps=4,   # effective batch = 16\r\n    warmup_steps=10,\r\n    num_train_epochs=3,\r\n    learning_rate=2e-4,\r\n    fp16=not is_bfloat16_supported(),\r\n    bf16=is_bfloat16_supported(),\r\n    logging_steps=10,\r\n    optim=\"adamw_8bit\",              # 8-bit AdamW for lower VRAM\r\n    weight_decay=0.01,\r\n    lr_scheduler_type=\"cosine\",\r\n    seed=42,\r\n    report_to=\"wandb\",               # or \"none\"\r\n)\r\n\r\ntrainer = SFTTrainer(\r\n    model=model,\r\n    tokenizer=tokenizer,\r\n    train_dataset=dataset[\"train\"],\r\n    args=training_args,\r\n    max_seq_length=4096,\r\n    dataset_text_field=\"text\",\r\n)\r\n\r\n# ── 5. Train ─────────────────────────────────────────────────────────\r\ngpu_stats = torch.cuda.get_device_properties(0)\r\nprint(f\"Training on {gpu_stats.name} | VRAM: {gpu_stats.total_memory / 1e9:.1f} GB\")\r\ntrainer.train()\r\n\r\n# ── 6. Save adapter ─────────────────────────────────────────────────\r\nmodel.save_pretrained(\"./llama-3.2-3b-lora-adapter\")\r\ntokenizer.save_pretrained(\"./llama-3.2-3b-lora-adapter\")\r\nprint(f\"Adapter saved. Size: ~{16 * 2 * 0.5:.1f} MB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gradient-checkpointing-deep-dive",
      children: "Gradient Checkpointing Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradient checkpointing (also called activation checkpointing) is the single most impactful VRAM-saving technique after quantisation. During the forward pass, PyTorch normally stores all intermediate activations — these are needed during the backward pass to compute gradients. For a 3B model with sequence length 4096, activations consume roughly 8–12 GB of VRAM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With gradient checkpointing enabled, only a subset of activations are stored. The rest are recomputed on-the-fly during backpropagation by re-running the forward pass from the nearest checkpointed layer. This cuts activation memory by 30–50% at the cost of ~20% slower training."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unsloth's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use_gradient_checkpointing=\"unsloth\""
      }), " goes further: it uses a heuristics-based strategy that selects the optimal checkpoint frequency based on your model depth, batch size, and available VRAM — automatically trading compute for memory only when needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supported-model-architectures",
      children: "Supported Model Architectures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Models"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Seq Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Rank"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 3.1/3.2/4, CodeLlama"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8192–32768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16–32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mistral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mistral v0.3, Mixtral 8×7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8192–32768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16–32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gemma 2 2B/9B/27B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8–16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen 2.5 0.5B–72B, Qwen 2.5 Coder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16–32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSeek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSeek V2/V3, Coder V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096–8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16–32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phi-3/4 mini, medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096–8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8–16"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-benchmarks-single-gpu-batch-size-1-seq-length-4096",
      children: "Memory Benchmarks (Single GPU, Batch Size 1, Seq Length 4096)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FP16 Full"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QLoRA (Unsloth)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VRAM Saved"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4–6 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6–10 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8–12 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12–16 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "70B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "140 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35–40 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Loading and inference with a saved LoRA adapter\r\nfrom unsloth import FastLanguageModel\r\n\r\nmodel, tokenizer = FastLanguageModel.from_pretrained(\r\n    model_name=\"./llama-3.2-3b-lora-adapter\",\r\n    max_seq_length=4096,\r\n    load_in_4bit=True,\r\n)\r\n\r\nFastLanguageModel.for_inference(model)\r\n\r\nprompt = \"Explain gradient checkpointing in one paragraph.\"\r\ninputs = tokenizer([prompt], return_tensors=\"pt\").to(\"cuda\")\r\noutputs = model.generate(**inputs, max_new_tokens=256, temperature=0.7)\r\nprint(tokenizer.decode(outputs[0], skip_special_tokens=True))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-axolotl--configuration-driven-fine-tuning",
      children: "7.2 Axolotl — Configuration-Driven Fine-Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Axolotl is a YAML-driven fine-tuning framework that standardises the entire training pipeline — model loading, dataset preprocessing, LoRA configuration, multi-GPU distribution, and evaluation — into a single configuration file. It is the most popular open-source fine-tuning toolkit for practitioners who need reproducibility and multi-GPU scalability without writing boilerplate."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "yaml-configuration-structure",
      children: "YAML Configuration Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# config/axolotl-llama3-sft.yml\r\nbase_model: unsloth/Llama-3.2-3B-Instruct-bnb-4bit\r\nmodel_type: LlamaForCausalLM\r\ntokenizer_type: AutoTokenizer\r\n\r\n# ── Quantisation ────────────────────────────────────────────────────\r\nload_in_4bit: true\r\nbnb_4bit_quant_type: nf4\r\nbnb_4bit_use_double_quant: true\r\nbnb_4bit_compute_dtype: bfloat16\r\n\r\n# ── LoRA Configuration ──────────────────────────────────────────────\r\nadapter: lora\r\nlora_r: 16\r\nlora_alpha: 32\r\nlora_dropout: 0.05\r\nlora_target_modules:\r\n  - q_proj\r\n  - k_proj\r\n  - v_proj\r\n  - o_proj\r\n  - gate_proj\r\n  - up_proj\r\n  - down_proj\r\nlora_modules_to_save:\r\n  - embed_tokens\r\n  - lm_head\r\n\r\n# ── Dataset Configuration ───────────────────────────────────────────\r\ndatasets:\r\n  - path: ./data/training.jsonl\r\n    type: sharegpt            # sharegpt, alpaca, chat_template, or raw\r\n    conversation: chatml\r\n    split: train\r\n    field: messages\r\n\r\ndataset_prepared_path: ./data/prepared\r\nval_set_size: 0.05            # 5% validation split\r\n\r\n# ── Training Hyperparameters ────────────────────────────────────────\r\nmicro_batch_size: 4\r\ngradient_accumulation_steps: 4\r\nnum_epochs: 3\r\nlearning_rate: 2.0e-4\r\nlr_scheduler: cosine\r\nwarmup_steps: 10\r\noptimizer: adamw_8bit\r\n\r\n# ── Sequence & Curriculum ──────────────────────────────────────────\r\nsequence_len: 4096\r\nsample_packing: true           # packs multiple short sequences together\r\npad_to_sequence_len: true\r\n\r\n# ── Multi-GPU / Distributed ─────────────────────────────────────────\r\ndeepspeed: ./config/deepspeed-zero2.json\r\ngradient_checkpointing: true\r\ngradient_checkpointing_kwargs:\r\n  use_reentrant: false\r\n\r\n# ── Logging & Saving ───────────────────────────────────────────────\r\nwandb_project: my-fine-tune\r\nwandb_watch: gradients\r\noutput_dir: ./outputs/llama3-lora-sft\r\nsave_strategy: steps\r\nsave_steps: 100\r\neval_steps: 100\r\nlogging_steps: 10\r\n\r\n# ── Evaluation ──────────────────────────────────────────────────────\r\neval_table_size: 10\r\neval_max_new_tokens: 256\r\neval_sample_packing: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dataset-format-support",
      children: "Dataset Format Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Axolotl supports six dataset formats out of the box. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), " field in the dataset config selects the parser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ── Dataset format examples ──────────────────────────────────────────\r\n\r\n# Format 1: ShareGPT (multi-turn conversations)\r\n{\r\n    \"conversations\": [\r\n        {\"from\": \"system\", \"value\": \"You are an AI assistant.\"},\r\n        {\"from\": \"human\", \"value\": \"What is QLoRA?\"},\r\n        {\"from\": \"gpt\", \"value\": \"QLoRA combines 4-bit quantization with LoRA...\"}\r\n    ]\r\n}\r\n\r\n# Format 2: Alpaca (instruction-input-output)\r\n{\r\n    \"instruction\": \"Explain LoRA fine-tuning\",\r\n    \"input\": \"\",\r\n    \"output\": \"LoRA injects rank-decomposition matrices into attention layers...\"\r\n}\r\n\r\n# Format 3: ChatML (structured chat template)\r\n{\r\n    \"messages\": [\r\n        {\"role\": \"system\", \"content\": \"You are an AI assistant.\"},\r\n        {\"role\": \"user\", \"content\": \"What is QLoRA?\"},\r\n        {\"role\": \"assistant\", \"content\": \"QLoRA combines 4-bit quantization with LoRA...\"}\r\n    ]\r\n}\r\n\r\n# Format 4: Raw text (single text field)\r\n{\"text\": \"LoRA injects rank-decomposition matrices...\"}\r\n\r\n# Format 5: Preference (for DPO/ORPO training)\r\n{\r\n    \"chosen\": \"The correct answer is Paris.\",\r\n    \"rejected\": \"The correct answer is London.\",\r\n    \"system\": \"You are a geography expert.\"\r\n}\r\n\r\n# Format 6: Completion (prompt-completion pairs)\r\n{\"prompt\": \"Capital of France:\", \"completion\": \"Paris\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "running-training",
      children: "Running Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Single GPU\r\naccelerate launch -m axolotl.cli.train config/axolotl-llama3-sft.yml\r\n\r\n# Multi-GPU with DeepSpeed ZeRO-2\r\ntorchrun --nproc_per_node=4 -m axolotl.cli.train config/axolotl-llama3-sft.yml\r\n\r\n# Multi-node\r\ntorchrun \\\r\n    --nnodes=2 \\\r\n    --node_rank=0 \\\r\n    --nproc_per_node=8 \\\r\n    --master_addr=master-node-ip \\\r\n    -m axolotl.cli.train config/axolotl-llama3-sft.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# config/deepspeed-zero2.json\r\n{\r\n    \"zero_optimization\": {\r\n        \"stage\": 2,\r\n        \"offload_optimizer\": {\"device\": \"cpu\"},\r\n        \"contiguous_gradients\": true,\r\n        \"overlap_comm\": true\r\n    },\r\n    \"fp16\": {\"enabled\": true},\r\n    \"gradient_accumulation_steps\": 4,\r\n    \"train_batch_size\": \"auto\",\r\n    \"train_micro_batch_size_per_gpu\": \"auto\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multi-gpu-topology",
      children: "Multi-GPU Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph Config[Axolotl YAML Config]\r\n        direction TB\r\n        M[Model Config]\r\n        D[Dataset Config]\r\n        H[Hyperparameters]\r\n        DS[DeepSpeed Config]\r\n    end\r\n\r\n    subgraph GPU_Cluster[GPU Cluster]\r\n        Node0[Node 0<br/>GPU 0 · GPU 1 · GPU 2 · GPU 3]\r\n        Node1[Node 1<br/>GPU 0 · GPU 1 · GPU 2 · GPU 3]\r\n    end\r\n\r\n    subgraph Training[Distributed Training]\r\n        FS[Fully Sharded Data Parallel]\r\n        Z2[DeepSpeed ZeRO-2<br/>Optimizer States Sharded]\r\n        GC[Gradient Checkpointing]\r\n    end\r\n\r\n    Config --> Accelerate[Accelerate Launch]\r\n    Accelerate --> Training\r\n    Training --> GPU_Cluster\r\n    GPU_Cluster --> Output[LoRA Adapter<br/>wandb Logs<br/>Checkpoints]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-openpipe--data-curation--model-comparison",
      children: "7.3 OpenPipe — Data Curation & Model Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenPipe is a managed platform that streamlines the fine-tuning workflow from data curation through model comparison to deployment. It targets teams who want to improve model quality on specific tasks without managing infrastructure or writing training code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "workflow",
      children: "Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collect"
        }), ": Log production prompts and responses via OpenPipe's SDK or API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Curate"
        }), ": Use the web dashboard to label, filter, edit, and deduplicate training examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fine-Tune"
        }), ": Select a base model (Llama 3, Mistral, GPT-4o mini) and launch training with one click."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate"
        }), ": Compare the fine-tuned model against the base model using curated test sets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy"
        }), ": Get an OpenAI-compatible endpoint for the fine-tuned model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ── OpenPipe Python SDK ──────────────────────────────────────────────\r\n# pip install openpipe\r\n\r\nfrom openpipe import OpenPipe\r\nfrom openpipe.types import FineTuneConfig\r\n\r\nclient = OpenPipe(api_key=\"op-xxxxxxxx\")\r\n\r\n# ── Step 1: Log production data ─────────────────────────────────────\r\nresponse = client.chat.completions.create(\r\n    model=\"gpt-4o-mini\",\r\n    messages=[\r\n        {\"role\": \"system\", \"content\": \"Summarise legal documents.\"},\r\n        {\"role\": \"user\", \"content\": legal_doc},\r\n    ],\r\n    # Store this response as training data\r\n    training_id=\"legal-summary-2026-07-28\",\r\n)\r\n\r\n# ── Step 2: Create a dataset from logged data ──────────────────────\r\ndataset = client.datasets.create(\r\n    name=\"legal-summary-v1\",\r\n    filters={\r\n        \"training_id\": \"legal-summary-2026-07-28\",\r\n        \"status\": \"completed\",\r\n        \"max_examples\": 1000,\r\n    },\r\n)\r\nprint(f\"Dataset {dataset.id} created with {dataset.size} examples\")\r\n\r\n# ── Step 3: Fine-tune ───────────────────────────────────────────────\r\nft_job = client.fine_tunes.create(\r\n    config=FineTuneConfig(\r\n        model=\"openpipe/llama-3.2-3b\",  # base model\r\n        dataset=dataset.id,\r\n        method=\"lora\",                   # lora, qlora, or full\r\n        hyperparameters={\r\n            \"epochs\": 3,\r\n            \"learning_rate\": 2e-4,\r\n            \"batch_size\": 8,\r\n            \"warmup_ratio\": 0.1,\r\n        },\r\n        validation_split=0.1,\r\n    ),\r\n)\r\nprint(f\"Fine-tune job {ft_job.id} — status: {ft_job.status}\")\r\n\r\n# ── Step 4: Compare models ──────────────────────────────────────────\r\ncomparison = client.evaluations.create(\r\n    name=\"v1-vs-base-comparison\",\r\n    test_dataset=dataset.id,\r\n    models=[\r\n        {\"model\": ft_job.fine_tuned_model},     # fine-tuned model\r\n        {\"model\": \"openpipe/llama-3.2-3b\"},     # base model\r\n        {\"model\": \"gpt-4o-mini\"},               # frontier baseline\r\n    ],\r\n    metrics=[\"exact_match\", \"rouge_l\", \"bert_score\"],\r\n)\r\nprint(f\"Evaluation complete: {comparison.results}\")\r\n\r\n# ── Step 5: Deploy ───────────────────────────────────────────────────\r\ndeployment = client.deployments.create(\r\n    model=ft_job.fine_tuned_model,\r\n    name=\"legal-summary-prod\",\r\n    scaling_config={\r\n        \"min_instances\": 1,\r\n        \"max_instances\": 5,\r\n        \"idle_timeout\": 300,\r\n    },\r\n)\r\nprint(f\"Deployed to {deployment.endpoint_url}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "data-curation-best-practices",
      children: "Data Curation Best Practices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenPipe Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated examples overfit the model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-dedup on import"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge case coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model learns rare but important patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label-based filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Label consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mismatched labels confuse the model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review queues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt diversity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too-similar prompts narrow generalisation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding-based clustering view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input length distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents tokenisation truncation surprises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length histogram in dashboard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenPipe's key differentiator is the comparison dashboard: after training, you can run side-by-side evaluations on a held-out test set and see exact-match, ROUGE-L, and BERTScore improvements broken down by data slice (e.g., by topic, length, or label)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-together-fine-tuning--hosted-fine-tuning-api",
      children: "7.4 Together Fine-Tuning — Hosted Fine-Tuning API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Together AI provides a hosted fine-tuning platform that exposes a REST API for training jobs. Unlike OpenPipe's data-first approach, Together positions itself as a compute platform — you bring your dataset and configuration, Together handles GPU provisioning, training orchestration, and model serving."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "api-based-fine-tuning",
      children: "API-Based Fine-Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ── Together Fine-Tuning API ─────────────────────────────────────────\r\n# pip install together\r\n# Requires: TOGETHER_API_KEY environment variable\r\n\r\nfrom together import Together\r\n\r\nclient = Together()\r\n\r\n# ── Step 1: Upload dataset ───────────────────────────────────────────\r\n# Dataset must be a JSONL file with messages in ChatML format\r\nwith open(\"training_data.jsonl\", \"rb\") as f:\r\n    upload = client.files.upload(file=f, purpose=\"fine-tune\")\r\nprint(f\"Uploaded file: {upload.id}\")\r\n\r\n# ── Step 2: Create fine-tune job ─────────────────────────────────────\r\nft = client.fine_tuning.jobs.create(\r\n    model=\"meta-llama/Llama-3.2-3B-Instruct\",\r\n    training_file=upload.id,\r\n    hyperparameters={\r\n        \"n_epochs\": 3,\r\n        \"learning_rate_multiplier\": 0.0002,\r\n        \"batch_size\": 4,\r\n        \"lora_r\": 16,\r\n        \"lora_alpha\": 32,\r\n        \"lora_dropout\": 0.05,\r\n        \"lora_target_modules\": [\r\n            \"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\",\r\n            \"gate_proj\", \"up_proj\", \"down_proj\",\r\n        ],\r\n    },\r\n    suffix=\"legal-summary-model\",\r\n    wandb_config={\r\n        \"project\": \"together-fine-tunes\",\r\n        \"tags\": [\"legal\", \"llama-3.2-3b\", \"v1\"],\r\n    },\r\n)\r\nprint(f\"Fine-tune job created: {ft.id}\")\r\n\r\n# ── Step 3: Monitor job ──────────────────────────────────────────────\r\nimport time\r\n\r\nwhile True:\r\n    status = client.fine_tuning.jobs.retrieve(ft.id)\r\n    print(f\"Status: {status.status} — {status.trained_tokens} tokens processed\")\r\n    if status.status in (\"succeeded\", \"failed\", \"cancelled\"):\r\n        break\r\n    time.sleep(60)\r\n\r\nif status.status == \"succeeded\":\r\n    print(f\"Fine-tuned model ID: {status.fine_tuned_model}\")\r\n\r\n# ── Step 4: Use the fine-tuned model ─────────────────────────────────\r\nresponse = client.chat.completions.create(\r\n    model=status.fine_tuned_model,\r\n    messages=[\r\n        {\"role\": \"system\", \"content\": \"Summarise legal documents concisely.\"},\r\n        {\"role\": \"user\", \"content\": \"The defendant argues that...\"},\r\n    ],\r\n    temperature=0.3,\r\n    max_tokens=512,\r\n)\r\nprint(response.choices[0].message.content)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "data-privacy--security",
      children: "Data Privacy & Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Together AI addresses the enterprise concern of data leakage during hosted fine-tuning:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data encryption at rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256 encryption for stored datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data encryption in transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 for all API traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ephemeral GPU instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training VMs are destroyed after job completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No data retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data and intermediate checkpoints deleted within 7 days of job completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each fine-tune job runs on dedicated GPU instances (no multi-tenancy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2 Type II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audited annually for security controls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supported-base-models",
      children: "Supported Base Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Context Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LoRA Support"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Price per 1M Tokens Trained"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 3.2 3B Instruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 3.1 8B Instruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixtral 8×7B Instruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (requires 48h notice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$4.80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gemma 2 9B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen 2.5 7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSeek Coder V2 16B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2.40"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-modal--serverless-gpu-fine-tuning",
      children: "7.5 Modal — Serverless GPU Fine-Tuning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modal takes a fundamentally different approach: instead of a web dashboard or YAML config, fine-tuning is expressed as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "code"
      }), ". You write Python functions decorated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@app.function(gpu=...)"
      }), ", and Modal automatically provisions the GPU, runs the training, and tears down the infrastructure when done. You pay only for the compute seconds consumed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fine-tuning-as-code",
      children: "Fine-Tuning as Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ── Modal: Serverless Fine-Tuning ────────────────────────────────────\r\n# pip install modal\r\n# modal setup  (authenticates with your Modal account)\r\n\r\nimport modal\r\n\r\n# ── Define the Modal App ─────────────────────────────────────────────\r\napp = modal.App(\"fine-tune-llama3\")\r\n\r\n# ── Container image with all dependencies ───────────────────────────\r\nimage = (\r\n    modal.Image.debian_slim(python_version=\"3.11\")\r\n    .pip_install(\r\n        \"torch>=2.1\",\r\n        \"transformers>=4.42\",\r\n        \"datasets>=2.14\",\r\n        \"accelerate>=0.28\",\r\n        \"peft>=0.8\",\r\n        \"trl>=0.8\",\r\n        \"bitsandbytes>=0.43\",\r\n        \"wandb\",\r\n    )\r\n    .env({\"HF_HUB_ENABLE_HF_TRANSFER\": \"1\"})\r\n)\r\n\r\n# ── App container for pre-loaded model ──────────────────────────────\r\nvolume = modal.Volume.from_name(\"model-cache\", create_if_missing=True)\r\n\r\n@app.cls(\r\n    image=image,\r\n    gpu=\"A10G\",                    # or \"A100\", \"H100\", \"T4\"\r\n    timeout=3600,                  # max 1 hour per run\r\n    secrets=[modal.Secret.from_name(\"huggingface\")],\r\n    volumes={\"/models\": volume},\r\n)\r\nclass FineTuner:\r\n    def __init__(self):\r\n        self.model = None\r\n        self.tokenizer = None\r\n\r\n    def load_base_model(self, model_name: str = \"meta-llama/Llama-3.2-3B-Instruct\"):\r\n        from transformers import AutoModelForCausalLM, AutoTokenizer\r\n        import torch\r\n\r\n        self.tokenizer = AutoTokenizer.from_pretrained(model_name)\r\n        self.tokenizer.pad_token = self.tokenizer.eos_token\r\n\r\n        self.model = AutoModelForCausalLM.from_pretrained(\r\n            model_name,\r\n            torch_dtype=torch.bfloat16,\r\n            device_map=\"auto\",\r\n            use_cache=False,          # required for gradient checkpointing\r\n        )\r\n        print(f\"Model loaded on: {self.model.device}\")\r\n\r\n    @modal.method()\r\n    def prepare_dataset(self, dataset_path: str):\r\n        from datasets import load_dataset\r\n\r\n        dataset = load_dataset(\"json\", data_files={\"train\": dataset_path})\r\n\r\n        def format_chat(example):\r\n            messages = [\r\n                {\"role\": \"system\", \"content\": \"You are a helpful AI assistant.\"},\r\n                {\"role\": \"user\", \"content\": example[\"instruction\"]},\r\n                {\"role\": \"assistant\", \"content\": example[\"output\"]},\r\n            ]\r\n            example[\"text\"] = self.tokenizer.apply_chat_template(\r\n                messages, tokenize=False\r\n            )\r\n            return example\r\n\r\n        dataset = dataset.map(format_chat)\r\n        return dataset[\"train\"].train_test_split(test_size=0.05)\r\n\r\n    @modal.method()\r\n    def train(\r\n        self,\r\n        dataset_path: str,\r\n        output_dir: str = \"/models/fine-tuned\",\r\n        lora_r: int = 16,\r\n        num_epochs: int = 3,\r\n        learning_rate: float = 2e-4,\r\n    ):\r\n        from peft import LoraConfig, get_peft_model, TaskType\r\n        from transformers import TrainingArguments, Trainer\r\n        import torch\r\n\r\n        # ── Load model if not already loaded ─────────────────────────\r\n        if self.model is None:\r\n            self.load_base_model()\r\n\r\n        # ── Apply LoRA ───────────────────────────────────────────────\r\n        lora_config = LoraConfig(\r\n            r=lora_r,\r\n            lora_alpha=lora_r * 2,\r\n            target_modules=[\r\n                \"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\",\r\n                \"gate_proj\", \"up_proj\", \"down_proj\",\r\n            ],\r\n            lora_dropout=0.05,\r\n            bias=\"none\",\r\n            task_type=TaskType.CAUSAL_LM,\r\n        )\r\n        model = get_peft_model(self.model, lora_config)\r\n        model.print_trainable_parameters()\r\n\r\n        # ── Prepare dataset ──────────────────────────────────────────\r\n        dataset = self.prepare_dataset.remote(dataset_path)\r\n\r\n        # ── Training args ────────────────────────────────────────────\r\n        training_args = TrainingArguments(\r\n            output_dir=output_dir,\r\n            per_device_train_batch_size=4,\r\n            gradient_accumulation_steps=4,\r\n            learning_rate=learning_rate,\r\n            num_train_epochs=num_epochs,\r\n            logging_steps=10,\r\n            eval_strategy=\"steps\",\r\n            eval_steps=100,\r\n            save_strategy=\"steps\",\r\n            save_steps=100,\r\n            bf16=torch.cuda.is_bf16_supported(),\r\n            report_to=\"none\",\r\n            gradient_checkpointing=True,\r\n            optim=\"adamw_8bit\",\r\n            lr_scheduler_type=\"cosine\",\r\n            warmup_ratio=0.05,\r\n        )\r\n\r\n        trainer = Trainer(\r\n            model=model,\r\n            args=training_args,\r\n            train_dataset=dataset[\"train\"],\r\n            eval_dataset=dataset[\"test\"],\r\n            tokenizer=self.tokenizer,\r\n        )\r\n\r\n        # ── Train ────────────────────────────────────────────────────\r\n        trainer.train()\r\n        trainer.save_model(output_dir)\r\n        self.tokenizer.save_pretrained(output_dir)\r\n\r\n        return {\r\n            \"output_dir\": output_dir,\r\n            \"final_loss\": trainer.state.log_history[-1].get(\"loss\", \"N/A\"),\r\n        }\r\n\r\n# ── Entry point ──────────────────────────────────────────────────────\r\n@app.local_entrypoint()\r\ndef main():\r\n    tuner = FineTuner()\r\n    result = tuner.train.remote(\r\n        dataset_path=\"https://huggingface.co/datasets/example/legal-summary/resolve/main/train.jsonl\",\r\n        output_dir=\"/models/llama3-legal-v1\",\r\n    )\r\n    print(f\"Training complete. Model saved to {result['output_dir']}\")\r\n    print(f\"Final loss: {result['final_loss']}\")\r\n\r\n# ── Deploy as a web endpoint ─────────────────────────────────────────\r\n@app.function(\r\n    image=image,\r\n    gpu=\"A10G\",\r\n    secrets=[modal.Secret.from_name(\"huggingface\")],\r\n    keep_warm=1,\r\n)\r\n@modal.web_endpoint(method=\"POST\", label=\"infer\")\r\ndef infer(data: dict):\r\n    \"\"\"Inference endpoint for the fine-tuned model.\"\"\"\r\n    from transformers import AutoModelForCausalLM, AutoTokenizer\r\n    import torch\r\n\r\n    model_path = \"/models/llama3-legal-v1\"\r\n    tokenizer = AutoTokenizer.from_pretrained(model_path)\r\n    model = AutoModelForCausalLM.from_pretrained(\r\n        model_path, torch_dtype=torch.bfloat16, device_map=\"auto\"\r\n    )\r\n\r\n    inputs = tokenizer.apply_chat_template(\r\n        [{\"role\": \"user\", \"content\": data[\"prompt\"]}],\r\n        return_tensors=\"pt\",\r\n        add_generation_prompt=True,\r\n    ).to(\"cuda\")\r\n\r\n    outputs = model.generate(\r\n        inputs, max_new_tokens=256, temperature=0.3, do_sample=True\r\n    )\r\n    response = tokenizer.decode(outputs[0], skip_special_tokens=True)\r\n    return {\"response\": response}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modal-scaling-properties",
      children: "Modal Scaling Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cold start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10–20 seconds for container image pull + model load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warm start"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<1 second if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "keep_warm"
            }), " is set"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max GPU memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A10G (24 GB), A100 (40/80 GB), H100 (80 GB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 hours per function call (86400s timeout)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-second: ~$0.60/hr for A10G, ~$2.50/hr for A100, ~$4.00/hr for H100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent runs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Configurable via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@app.cls(concurrency_limit=...)"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modal is ideal for teams that already version-control their training code and want infrastructure-as-code for GPU workloads. The trade-off: you manage the training code entirely — there is no dashboard for data curation or model comparison."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-platform-selection-guide",
      children: "7.6 Platform Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "quadrantChart\r\n    title Fine-Tuning Platform Selection Matrix\r\n    x-axis Low Control --> High Control\r\n    y-axis Low Ease of Use --> High Ease of Use\r\n    quadrant-1 \"Easy + High Control: Axolotl\"\r\n    quadrant-2 \"Easy + Low Control: OpenPipe\"\r\n    quadrant-3 \"Hard + Low Control: (rare)\"\r\n    quadrant-4 \"Hard + High Control: Modal\"\r\n    Unsloth: [0.6, 0.65]\r\n    Axolotl: [0.75, 0.55]\r\n    OpenPipe: [0.2, 0.85]\r\n    Together: [0.3, 0.7]\r\n    Modal: [0.85, 0.35]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tune on consumer GPU (8–24 GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unsloth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2× speed, 50% less VRAM, QLoRA native"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reproducible multi-GPU pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Axolotl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML config, DeepSpeed, dataset format support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-technical team, data-centric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OpenPipe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard curation, visual comparison, one-click deploy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hosted API, no infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Together"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST API, SOC 2, privacy guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first, infrastructure-as-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless Python, pay-per-second, arbitrary scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Together / Modal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed endpoints, autoscaling, monitoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-how-qlora-enables-fine-tuning-of-70b-models-on-a-single-consumer-gpu-24-gb",
      children: "Q1: Explain how QLoRA enables fine-tuning of 70B models on a single consumer GPU (24 GB)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " QLoRA combines three memory-saving techniques: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4-bit NormalFloat quantisation"
      }), " compresses the base model weights from 16-bit to 4-bit — a 4× reduction. A 70B model drops from 140 GB (FP16) to ~35 GB (NF4). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LoRA adapters"
      }), " add only ~0.1–1% trainable parameters in FP16, which consume ~200 MB for rank 16. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient checkpointing"
      }), " reduces activation memory by 30–50% by recomputing activations during backpropagation. Together, these enable 70B fine-tuning on a single A100 (80 GB) or H100 (80 GB) — and smaller models like 7–8B fit on a 24 GB RTX 4090."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q2-compare-unsloths-use_gradient_checkpointingunsloth-with-the-standard-hugging-face-gradient-checkpointing",
      children: ["Q2: Compare Unsloth's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use_gradient_checkpointing=\"unsloth\""
      }), " with the standard Hugging Face gradient checkpointing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Standard gradient checkpointing in Hugging Face applies uniformly — it checkpoints every layer's activations, recomputing each during backprop. This is simple but suboptimal: it may recompute more than necessary on large-GPU setups or not enough on memory-constrained ones. Unsloth's implementation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic"
      }), ": it profiles the model architecture and available VRAM, then selects an optimal checkpointing frequency. On a 24 GB card with a 7B model, this can save 2–4 GB of additional VRAM compared to standard checkpointing, while keeping the recomputation overhead 10–15% lower."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-dataset-formats-does-axolotl-support-and-why-does-format-flexibility-matter",
      children: "Q3: What dataset formats does Axolotl support, and why does format flexibility matter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Axolotl supports six formats: ShareGPT (multi-turn), Alpaca (instruction), ChatML (structured chat), raw text, preference pairs (for DPO), and completion pairs. Format flexibility matters because training data comes from diverse sources: synthetic data generators output ChatML, human-annotated data may use Alpaca, and preference data requires chosen/rejected pairs. Axolotl's format abstraction decouples data collection from training — you can switch formats without changing the training pipeline."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-does-openpipes-approach-differ-from-axolotl-for-fine-tuning",
      children: "Q4: How does OpenPipe's approach differ from Axolotl for fine-tuning?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " OpenPipe is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "managed platform"
      }), " with a web dashboard for data curation, automated training, and visual model comparison. Axolotl is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open-source framework"
      }), " controlled through YAML configs. OpenPipe targets teams that want minimal engineering overhead — upload data, click \"train,\" get an API endpoint. Axolotl targets teams that need reproducibility, multi-GPU scaling, and full control over the training loop. OpenPipe abstracts infrastructure completely; Axolotl requires the user to manage GPU instances."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-describe-the-data-privacy-guarantees-provided-by-together-ai-for-hosted-fine-tuning",
      children: "Q5: Describe the data privacy guarantees provided by Together AI for hosted fine-tuning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Together provides: (1) AES-256 encryption for data at rest and TLS 1.3 for data in transit. (2) Ephemeral GPU instances — training VMs are destroyed after job completion, leaving no residual data. (3) Data deletion within 7 days of job completion (configurable to immediate deletion). (4) Model isolation — each job runs on dedicated hardware without multi-tenancy. (5) SOC 2 Type II annual audit for security controls. These guarantees make Together suitable for enterprise workloads with compliance requirements like HIPAA or GDPR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-cold-start-problem-in-serverless-gpu-platforms-like-modal-and-how-can-it-be-mitigated",
      children: "Q6: What is the cold-start problem in serverless GPU platforms like Modal, and how can it be mitigated?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Cold start in Modal refers to the 10–20 second delay when a GPU function is invoked for the first time, caused by container image pull, dependency installation, and model weight loading from disk. Mitigation strategies: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "keep_warm"
        })
      }), " parameter — keeps a GPU instance running continuously (increases cost but eliminates cold starts for latency-sensitive apps). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Volume mounts"
      }), " — cache model weights on a Modal Volume so they persist across invocations. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Container image caching"
      }), " — pre-build the image to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "modal.Image.debian_slim().pip_install(...).run_commands(\"preload-model\")"
      }), ". (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Asynchronous warmup"
      }), " — use a scheduled function to invoke the model loader every 5 minutes during business hours."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-when-would-you-choose-lora-rank-16-vs-full-fine-tuning-what-are-the-trade-offs",
      children: "Q7: When would you choose LoRA (rank 16) vs. full fine-tuning? What are the trade-offs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " LoRA (rank 16) adds ~0.5% trainable parameters. It trains in ~4–8 GB VRAM for a 7B model and takes 1–3 hours on a single GPU. Performance typically reaches 90–95% of full fine-tuning for instruction-following and domain adaptation tasks. Full fine-tuning updates all parameters — it requires 2–4× more VRAM and 3–5× more time but can achieve slightly higher accuracy on highly specialised tasks (e.g., medical coding). Recommendation: start with LoRA rank 16; only move to full fine-tuning if you have the budget and the LoRA result is measurably insufficient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-design-an-evaluation-pipeline-to-compare-a-fine-tuned-model-against-its-base-model",
      children: "Q8: How would you design an evaluation pipeline to compare a fine-tuned model against its base model?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A robust evaluation pipeline: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hold-out test set"
      }), " — reserve 10% of curated data before training, stratified by task category. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic metrics"
      }), " — compute ROUGE-L for summarisation, Exact Match for classification, BLEU for translation, and BERTScore for semantic similarity. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Human evaluation"
      }), " — randomly sample 100 examples from the test set and have 2–3 annotators rate outputs on a 1–5 Likert scale for helpfulness, accuracy, and tone. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A/B test in production"
      }), " — route 10% of live traffic to the fine-tuned model and 10% to the base model, measuring user engagement, acceptance rate, and escalation rate. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regression testing"
      }), " — run a fixed set of 50 edge-case prompts through both models to check that fine-tuning didn't degrade safety, factuality, or style."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-factors-determine-the-cost-of-a-hosted-fine-tuning-job-on-together-ai",
      children: "Q9: What factors determine the cost of a hosted fine-tuning job on Together AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Total cost = (base model training tokens) × (price per 1M tokens) × (number of epochs). The base model price varies by size (e.g., Llama 3.2 3B = $0.50/1M tokens, Mixtral 8×7B = $4.80/1M tokens). Training tokens = (total dataset tokens) × (epochs) — a 10,000-example dataset averaging 500 tokens per example with 3 epochs = 15M training tokens, costing ~$7.50 for Llama 3.2 3B. Additional costs: data storage ($0.10/GB/month), trained model hosting ($0.50–2.00/hour), and inference API calls after deployment ($0.10–1.00 per 1M tokens)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-would-you-fine-tune-a-model-for-code-generation-using-unsloth-and-what-rank-would-you-choose",
      children: "Q10: How would you fine-tune a model for code generation using Unsloth, and what rank would you choose?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " For code generation, I'd start with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Qwen 2.5 Coder 7B"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DeepSeek Coder V2"
      }), " base, as these are pre-trained on code-heavy corpora. LoRA rank ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "16"
      }), " is sufficient for instruction-tuning (format alignment, conversation style), but I'd use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rank 32"
      }), " if the goal is domain adaptation (learning new language syntaxes or framework APIs). Rank 32 provides more expressiveness at the cost of ~2× larger adapters (3 MB vs 1.5 MB). Training: use Unsloth's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FastLanguageModel"
      }), " with 4-bit NF4 loading, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use_gradient_checkpointing=\"unsloth\""
      }), ", learning rate 1e-4, and train for 3 epochs. Include a validation set of held-out coding problems to monitor overfitting via pass@1 accuracy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning in 2026 is no longer restricted to teams with datacenter-scale GPU clusters. This chapter covered five platforms that democratise model adaptation across different use cases: Unsloth for maximum efficiency on consumer hardware, Axolotl for config-driven reproducibility, OpenPipe for data-curation-first managed workflows, Together AI for hosted privacy-compliant training, and Modal for serverless code-first infrastructure. You learned how to implement LoRA fine-tuning in each platform, how to configure multi-GPU training, how to curate and evaluate datasets, and how to select the right platform for your constraints. The common thread across all five platforms: fine-tuning has become a standard engineering practice rather than a research activity. Master these tools, and you can adapt any open-source model to any domain — a skill that defines a senior AI engineer in 2026."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary memory-saving technique Unsloth uses to fine-tune large models on consumer GPUs?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Full parameter training with FP32 precision\r\nB) 4-bit NormalFloat quantisation (NF4) combined with LoRA\r\nC) Model parallelism across multiple GPUs\r\nD) Offloading weights to system RAM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — Unsloth loads the base model in 4-bit NF4 quantisation (4× memory reduction) and trains only LoRA adapters in FP16/BF16. This enables 7B models to fit on 8–12 GB GPUs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " In an Axolotl YAML config, which field specifies the dataset format parser?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dataset_format"
      }), "\r\nB) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), "\r\nC) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parser"
      }), "\r\nD) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — The `type` field under each dataset entry selects the parser: `sharegpt`, `alpaca`, `chatml`, `raw`, `preference`, or `completion`."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which OpenPipe feature allows you to compare a fine-tuned model against the base model on a held-out test set?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Dataset curation dashboard\r\nB) Model comparison evaluation\r\nC) A/B testing deployment\r\nD) Log analysis view"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — OpenPipe's evaluation feature runs models against a test dataset and computes metrics like exact match, ROUGE-L, and BERTScore for side-by-side comparison."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What privacy guarantee does Together AI provide for hosted fine-tuning data?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Data is stored indefinitely for future training\r\nB) Training VMs are ephemeral and destroyed after job completion\r\nC) Data is shared across customers to improve models\r\nD) Data is stored in plain text for audit purposes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — Together AI uses ephemeral GPU instances that are destroyed after each training job, and training data is deleted within 7 days of completion."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the typical cold-start latency for a Modal GPU function without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "keep_warm"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) <100 milliseconds\r\nB) 1–2 seconds\r\nC) 10–20 seconds\r\nD) 5–10 minutes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "C — Modal's cold start takes 10–20 seconds due to container image pull, dependency installation, and model weight loading. Using `keep_warm` eliminates this for frequently-used functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unsloth Fine-Tuning Pipeline"
          }), ": Use Unsloth's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FastLanguageModel"
          }), " to fine-tune Llama 3.2 3B on a 500-example JSONL dataset of your choice (instruction-following, summarisation, or classification). Use LoRA rank 16, 4-bit NF4 quantisation, and gradient checkpointing. Train for 3 epochs and track loss. Save the adapter and run inference on 5 test prompts. Report: training time, peak VRAM usage, and final loss."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Axolotl Multi-GPU Config"
          }), ": Write an Axolotl YAML configuration that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Loads Qwen 2.5 7B in 4-bit"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses dataset format ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chatml"
            }), " from a local JSONL file"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configures LoRA rank 32 targeting all linear layers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sets up DeepSpeed ZeRO-2 for 4-GPU training"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enables sample packing and gradient checkpointing"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "torchrun --nproc_per_node=4"
            }), " (simulate if no multi-GPU available)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OpenPipe Data Curation"
          }), ": Design a data curation strategy for a customer support fine-tuning project. Use OpenPipe's SDK to log 100 support conversations, then create a dataset filtered for \"high-quality\" interactions (rating ≥ 4, resolved = true). Write the Python code to: (a) log conversations via the SDK, (b) create the dataset with filters, (c) launch a fine-tune job, and (d) run an evaluation comparing the fine-tuned model against GPT-4o-mini."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modal Serverless Training"
          }), ": Port the Unsloth training script from Exercise 1 into a Modal app. Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FineTuner"
          }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@modal.cls(gpu=\"T4\")"
          }), ", implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "load_base_model"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prepare_dataset"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "train"
          }), " methods, and deploy a web inference endpoint with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@modal.web_endpoint"
          }), ". Measure cold-start time and cost for a 3-epoch training run."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Platform Selection Case Study"
          }), ": You are the AI engineer at a legal-tech startup. Your team needs to fine-tune a model on 50,000 confidential legal documents (average 2,000 tokens each). You have a budget of $500 for the project, a single RTX 4090 (24 GB) available in-house, and the model must be deployed behind an API with <2 second latency. Write a 300-word analysis comparing Unsloth, Axolotl, OpenPipe, Together, and Modal, including: chosen platform, data privacy strategy, estimated cost breakdown, expected training time, and deployment architecture."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsloth"
        }), " is the fastest open-source fine-tuning library for consumer GPUs — 2× speed, half VRAM, QLoRA native, supports 20+ architectures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Axolotl"
        }), " provides YAML-driven reproducibility with multi-GPU (DeepSpeed) support and six dataset format parsers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenPipe"
        }), " offers a managed data-curation-first workflow with visual model comparison and one-click deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Together AI"
        }), " delivers hosted fine-tuning via REST API with enterprise privacy guarantees (SOC 2, ephemeral instances, data deletion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modal"
        }), " enables serverless GPU fine-tuning expressed as Python code, with pay-per-second billing and autoscaling."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with LoRA (rank 16) — it achieves 90–95% of full fine-tuning quality at a fraction of the compute cost."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always evaluate fine-tuned models against their base model using a held-out test set before production deployment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The best platform depends on your team's skill set, data sensitivity, budget, and deployment requirements — there is no one-size-fits-all."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Explain the core idea of Fine-Tuning Platforms & Tools in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter-Tuning Platforms & Tools."
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
            children: "Describe a production bug caused by misunderstanding this technique-Tuning Platforms & Tools. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique-Tuning Platforms & Tools from 10 users to 10 million?"
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
            children: "Compare Fine-Tuning Platforms & Tools with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this-Tuning Platforms & Tools."
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
            children: "How does Fine-Tuning Platforms & Tools behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique-Tuning Platforms & Tools run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique-Tuning Platforms & Tools that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Fine-Tuning Platforms & Tools explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Fine-Tuning Platforms & Tools\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Fine-Tuning Platforms & Tools to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Fine-Tuning Platforms & Tools (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Fine-Tuning Platforms & Tools and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Fine-Tuning Platforms & Tools-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Fine-Tuning Platforms & Tools interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Fine-Tuning Platforms & Tools in production today?"
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
        }), " Fine-Tuning Platforms & Tools builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Fine-Tuning Platforms & Tools before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Fine-Tuning Platforms & Tools is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Fine-Tuning Platforms & Tools in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Fine-Tuning Platforms & Tools chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Fine-Tuning Platforms & Tools is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 07 Fine Tuning Platforms is ___. — Answer: O(r*d) LoRA parameters vs O(d^2) full fine-tune"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 Fine Tuning Platforms is ___. — Answer: catastrophic forgetting, overfitting, data quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Fine-Tuning Platforms & Tools issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Fine-Tuning Platforms & Tools in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Fine-Tuning Platforms & Tools that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique-Tuning Platforms & Tools is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Fine-Tuning Platforms & Tools in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Fine-Tuning Platforms & Tools and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique-Tuning Platforms & Tools on an empty input?"
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
            children: "Complete Medium exercises, explain Fine-Tuning Platforms & Tools to someone else"
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
        children: "Always write a one-line example of Fine-Tuning Platforms & Tools from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Fine-Tuning Platforms & Tools when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Fine-Tuning Platforms & Tools twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Fine-Tuning Platforms & Tools snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Fine-Tuning Platforms & Tools listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Fine-Tuning Platforms & Tools to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Fine-Tuning Platforms & Tools by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Fine-Tuning Platforms & Tools to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Hands-On Machine Learning' by Aurélien Géron (O'Reilly) — best practical ML book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Pattern Recognition and Machine Learning' by Bishop — rigorous theoretical foundation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["fast.ai practical deep learning course: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://course.fast.ai",
          children: "https://course.fast.ai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kaggle competitions for hands-on practice: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kaggle.com",
          children: "https://www.kaggle.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Papers With Code for SOTA benchmarks: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://paperswithcode.com",
          children: "https://paperswithcode.com"
        }), " Platforms & Tools"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 23 — builds the foundation for 07 Fine Tuning Platforms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 Fine Tuning Platforms with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 Fine Tuning Platforms fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 Fine Tuning Platforms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 Fine Tuning Platforms"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 Fine Tuning Platforms?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 Fine Tuning Platforms?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 Fine Tuning Platforms asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 Fine Tuning Platforms?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-Tuning Platforms & Tools is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Fine-Tuning Platforms & Tools."
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
        children: "Fine-Tuning Platforms & Tools emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Fine-Tuning Platforms & Tools today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Fine-Tuning Platforms & Tools — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Fine-Tuning Platforms & Tools changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protect training data from poisoning attacks — validate data sources and monitor for distribution shifts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement model access controls — not all users should query all models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use differential privacy when training on sensitive data (medical, financial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for model inversion attacks — adversaries can reconstruct training data from model outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit model decisions for fairness and bias before production deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bias-variance tradeoff: simple models underfit (high bias), complex models overfit (high variance) — regularization controls this"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-validation gives an unbiased estimate of generalization error by averaging over multiple train/test splits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature importance from tree models measures how much each feature reduces impurity — use SHAP for more reliable attribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning curves diagnose whether you need more data (high variance) or a better model (high bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble methods (bagging, boosting, stacking) reduce variance and bias respectively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "07 Fine Tuning Platforms is like a GPS navigation system"
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
          }), " — this chapter contributes the Fine-Tuning Platforms & Tools skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-07finetuningplatforms-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Fine-Tuning Platforms & Tools in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Machine learning is the practice of training statistical models on data to make predictions or decisions without being explicitly programmed for each case."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-07finetuningplatforms-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common ML mistake: data leakage — accidentally including future information in training features. Always split data by time for time-series and validate the split before training."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-07finetuningplatforms-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Fine-Tuning Platforms & Tools approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linear regression: O(n*d) training, O(d) inference. Decision tree: O(n*d*log n) training, O(log n) inference. Neural network: O(n*d*h) per epoch where h=hidden units."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-07finetuningplatforms-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Fine-Tuning Platforms & Tools NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "ML is NOT the right choice when: (1) a rule-based system is interpretable and accurate enough, (2) you have fewer than 1000 labeled examples, (3) the decision requires full auditability."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-07finetuningplatforms-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Fine-Tuning Platforms & Tools applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production ML stack: scikit-learn for classical ML, PyTorch/TensorFlow for deep learning, MLflow for experiment tracking, Feast for feature stores, Seldon/BentoML for model serving."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Fine-Tuning Platforms & Tools (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Fine-Tuning Platforms & Tools (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Fine-Tuning Platforms & Tools-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Fine-Tuning Platforms & Tools in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "scikit-learn"
        }), " — classical ML algorithms, preprocessing, evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XGBoost"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LightGBM"
        }), " — gradient boosting for tabular data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), " — experiment tracking, model registry, deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optuna"
        }), " — hyperparameter optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SHAP"
        }), " — model explainability and feature importance Platforms & Tools"]
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
        }), ": Add structured logging at each stage of the 07 Fine Tuning Platforms pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Fine-Tuning Platforms & Tools in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Fine-Tuning Platforms & Tools."
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
        children: "Tell me about a time you debugged a Fine-Tuning Platforms & Tools problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Fine-Tuning Platforms & Tools is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_fine_tuning_platforms(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Fine Tuning Platforms.\r\n\r\n    Key concepts: LoRA, QLoRA, PEFT, instruction tuning, DPO\r\n    Complexity: O(r*d) LoRA parameters vs O(d^2) full fine-tune\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Fine Tuning Platforms here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Fine-Tuning Platforms & Tools without notes"
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
          children: "Spotify"
        }), " uses collaborative filtering to power Discover Weekly, generating 40M personalized playlists weekly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon"
        }), " uses ML for demand forecasting, reducing inventory costs by 25%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Airbnb"
        }), " uses gradient boosting to predict booking probability and optimize search ranking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe"
        }), " uses ML fraud detection that processes 250M API requests/day with <100ms latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the full ML lifecycle — data collection, feature engineering, training, evaluation, deployment, monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison",
        children: "08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-Tuning Platforms & Tools, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Fine-Tuning Platforms & Tools depends on input size and distribution — always benchmark for your own data."
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