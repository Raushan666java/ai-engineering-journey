"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9436],{

/***/ 9385
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_05_open_source_llm_landscape_md_112_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-23-trending-aiml-platforms-05-open-source-llm-landscape-md-112.json
const site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_05_open_source_llm_landscape_md_112_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/trending-aiml-platforms/05-open-source-llm-landscape","title":"23.05 — Open Source LLM Landscape","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/23-trending-aiml-platforms/05-open-source-llm-landscape.md","sourceDirName":"courses/ai-engineering-placement/23-trending-aiml-platforms","slug":"/ai-engineering-placement/23-trending-aiml-platforms/05-open-source-llm-landscape","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/05-open-source-llm-landscape","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":293,"frontMatter":{"id":"05-open-source-llm-landscape","slug":"/ai-engineering-placement/23-trending-aiml-platforms/05-open-source-llm-landscape","title":"23.05 — Open Source LLM Landscape","sidebar_label":"23.05 — Open Source LLM Landscape","sidebar_position":293},"sidebar":"placementSidebar","previous":{"title":"Model Ecosystem — Deployment, Hub & Fine-Tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/04-model-ecosystem-deployment-hub"},"next":{"title":"Model Selection & Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/06-model-selection-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/23-trending-aiml-platforms/05-open-source-llm-landscape.md


const frontMatter = {
	id: '05-open-source-llm-landscape',
	slug: '/ai-engineering-placement/23-trending-aiml-platforms/05-open-source-llm-landscape',
	title: '23.05 — Open Source LLM Landscape',
	sidebar_label: '23.05 — Open Source LLM Landscape',
	sidebar_position: 293
};
const contentTitle = '23.05 — Open Source LLM Landscape';

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
  "value": "5.1 Meta Llama 3 &amp; 4 — The Incumbent Champion",
  "id": "51-meta-llama-3--4--the-incumbent-champion",
  "level": 3
}, {
  "value": "Llama 3 Architecture",
  "id": "llama-3-architecture",
  "level": 4
}, {
  "value": "Llama 4 — MoE Breakthrough",
  "id": "llama-4--moe-breakthrough",
  "level": 4
}, {
  "value": "5.2 Qwen 2.5 — Alibaba&#39;s Swiss Army Knife",
  "id": "52-qwen-25--alibabas-swiss-army-knife",
  "level": 3
}, {
  "value": "Multilingual &amp; Tool-Use Capabilities",
  "id": "multilingual--tool-use-capabilities",
  "level": 4
}, {
  "value": "5.3 Gemma 2 — Google&#39;s Safety-First Open Models",
  "id": "53-gemma-2--googles-safety-first-open-models",
  "level": 3
}, {
  "value": "Architecture Innovations",
  "id": "architecture-innovations",
  "level": 4
}, {
  "value": "5.4 Phi-4 — Microsoft&#39;s Synthetic Data Champion",
  "id": "54-phi-4--microsofts-synthetic-data-champion",
  "level": 3
}, {
  "value": "Why Synthetic Data Works",
  "id": "why-synthetic-data-works",
  "level": 4
}, {
  "value": "5.5 GLM-4 — Zhipu AI&#39;s Bilingual Agent Powerhouse",
  "id": "55-glm-4--zhipu-ais-bilingual-agent-powerhouse",
  "level": 3
}, {
  "value": "5.6 Model Selection Guide",
  "id": "56-model-selection-guide",
  "level": 3
}, {
  "value": "Comprehensive Comparison Table",
  "id": "comprehensive-comparison-table",
  "level": 4
}, {
  "value": "Python Benchmarking Harness",
  "id": "python-benchmarking-harness",
  "level": 4
}, {
  "value": "Selection Decision Flowchart",
  "id": "selection-decision-flowchart",
  "level": 4
}, {
  "value": "Benchmark Leaderboards and Evaluation",
  "id": "benchmark-leaderboards-and-evaluation",
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
  "value": "Q1: Explain the Mixture-of-Experts architecture. Why does it allow larger total parameters with lower inference cost?",
  "id": "q1-explain-the-mixture-of-experts-architecture-why-does-it-allow-larger-total-parameters-with-lower-inference-cost",
  "level": 3
}, {
  "value": "Q2: Compare synthetic data training (Phi-4 approach) vs. organic data training (Llama 3 approach). What are the trade-offs?",
  "id": "q2-compare-synthetic-data-training-phi-4-approach-vs-organic-data-training-llama-3-approach-what-are-the-trade-offs",
  "level": 3
}, {
  "value": "Q3: How would you select an open-source model for a real-time customer support chatbot serving 10K requests/day?",
  "id": "q3-how-would-you-select-an-open-source-model-for-a-real-time-customer-support-chatbot-serving-10k-requestsday",
  "level": 3
}, {
  "value": "Q4: What is Grouped-Query Attention (GQA) and why does it matter for inference efficiency?",
  "id": "q4-what-is-grouped-query-attention-gqa-and-why-does-it-matter-for-inference-efficiency",
  "level": 3
}, {
  "value": "Q5: How does Gemma 2 differ architecturally from Llama 3?",
  "id": "q5-how-does-gemma-2-differ-architecturally-from-llama-3",
  "level": 3
}, {
  "value": "Q6: Describe how you would fine-tune an open-source LLM for a legal document summarisation task.",
  "id": "q6-describe-how-you-would-fine-tune-an-open-source-llm-for-a-legal-document-summarisation-task",
  "level": 3
}, {
  "value": "Q7: Why does Phi-4 achieve competitive results with fewer parameters? What is the distillation process?",
  "id": "q7-why-does-phi-4-achieve-competitive-results-with-fewer-parameters-what-is-the-distillation-process",
  "level": 3
}, {
  "value": "Q8: What are the main considerations when deploying open-source LLMs in a production environment?",
  "id": "q8-what-are-the-main-considerations-when-deploying-open-source-llms-in-a-production-environment",
  "level": 3
}, {
  "value": "Q9: Compare the licensing of Llama 4, Qwen 2.5, Gemma 2, Phi-4, and GLM-4. Which is most permissive for commercial use?",
  "id": "q9-compare-the-licensing-of-llama-4-qwen-25-gemma-2-phi-4-and-glm-4-which-is-most-permissive-for-commercial-use",
  "level": 3
}, {
  "value": "Q10: If you had to choose one open-source model for an AI system that needs to handle code generation, math reasoning, and Chinese language — and you have a single A100 — which model and why?",
  "id": "q10-if-you-had-to-choose-one-open-source-model-for-an-ai-system-that-needs-to-handle-code-generation-math-reasoning-and-chinese-language--and-you-have-a-single-a100--which-model-and-why",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "2305--open-source-llm-landscape",
        children: "23.05 — Open Source LLM Landscape"
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
            children: "Compare major open-weight LLM families: Llama 3/4, Qwen 2.5, Gemma 2, Phi-4, GLM-4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Load and inference open-source models using the Hugging Face ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transformers"
            }), " library"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate models on task-specific benchmarks and understand leaderboard methodology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select optimal models based on cost-performance-context trade-offs for real projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a Python benchmarking harness to compare inference speed and output quality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The open-source LLM landscape has transformed dramatically. By mid-2026, open-weight models rival or surpass proprietary alternatives on key benchmarks — and they run on your hardware. Meta's Llama 4 with Mixture-of-Experts, Alibaba's Qwen 2.5 spanning 0.5B to 110B parameters, Google's safety-first Gemma 2, Microsoft's synthetic-data-trained Phi-4, and Zhipu's bilingual GLM-4 all compete for your GPU cycles. This chapter surveys each family's architecture, strengths, and deployment considerations, then provides a practical selection guide with Python benchmarking code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python 3.10+ and basic familiarity with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip"
        }), " / virtual environments"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of transformer architecture (attention, feed-forward layers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Hugging Face account (free) for model access — some models require acceptance of terms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At least 8 GB of VRAM recommended if running locally; CPU-only inference works for models under 7B parameters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Open-weight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model weights are publicly released under a permissive license (MIT, Apache 2.0, or custom)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MoE (Mixture of Experts)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture where only a subset of parameters activate per token, improving efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context window"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum number of tokens the model can process in a single forward pass (input + output)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synthetic data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data generated by another model rather than collected from human sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reducing weight precision (e.g., FP16 → INT4) to shrink memory footprint and speed inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Benchmark"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardised test suite (MMLU, HumanEval, GSM8K) that measures model capability in specific domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LoRA (Low-Rank Adaptation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter-efficient fine-tuning method that adds small trainable adapters to frozen weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instruction tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised fine-tuning on (instruction, response) pairs to align model output with user intent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-meta-llama-3--4--the-incumbent-champion",
      children: "5.1 Meta Llama 3 & 4 — The Incumbent Champion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Meta's Llama series set the standard for open-weight models. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Llama 3"
      }), " (released 2024) came in 8B, 70B, and 405B dense variants. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Llama 4"
      }), " (2025–2026) shifted to a Mixture-of-Experts (MoE) architecture, delivering GPT-4-class performance at a fraction of the compute cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "llama-3-architecture",
      children: "Llama 3 Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Llama 3 uses a dense decoder-only transformer with Grouped-Query Attention (GQA) and a 128K-token context window. The 405B variant introduced a novel pipeline-parallel training scheme across 16K H100 GPUs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Llama 3 model card comparison\r\nmodel_card_llama3 = {\r\n    \"8B\":  {\r\n        \"params\": \"8.0B\",\r\n        \"layers\": 32,\r\n        \"heads\": 32,\r\n        \"hidden_dim\": 4096,\r\n        \"context\": 128_000,\r\n        \"checkpoint\": \"meta-llama/Meta-Llama-3-8B-Instruct\"\r\n    },\r\n    \"70B\": {\r\n        \"params\": \"70.6B\",\r\n        \"layers\": 80,\r\n        \"heads\": 64,\r\n        \"hidden_dim\": 8192,\r\n        \"context\": 128_000,\r\n        \"checkpoint\": \"meta-llama/Meta-Llama-3-70B-Instruct\"\r\n    },\r\n    \"405B\": {\r\n        \"params\": \"405.0B\",\r\n        \"layers\": 126,\r\n        \"heads\": 128,\r\n        \"hidden_dim\": 16384,\r\n        \"context\": 128_000,\r\n        \"checkpoint\": \"meta-llama/Meta-Llama-3-405B-Instruct\"\r\n    }\r\n}\r\n\r\nprint(\"=== Llama 3 Model Variants ===\")\r\nfor name, spec in model_card_llama3.items():\r\n    print(f\"{name:>5s} | {spec['params']:>7s} | {spec['layers']} layers | \"\r\n          f\"{spec['heads']} heads | context={spec['context']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Llama 3 Model Variants ===\r\n    8B |   8.0B | 32 layers | 32 heads | context=128000\r\n   70B |  70.6B | 80 layers | 64 heads | context=128000\r\n  405B | 405.0B | 126 layers | 128 heads | context=128000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "llama-4--moe-breakthrough",
      children: "Llama 4 — MoE Breakthrough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Llama 4 replaced dense transformers with Mixture-of-Experts. Each token activates only a subset of \"expert\" sub-networks via a learned router, achieving higher capacity per parameter."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Input[Input Token]\r\n        X[Embedding]\r\n    end\r\n    subgraph Router[Router Network]\r\n        R[Top-2 Selection]\r\n    end\r\n    subgraph Experts[Expert Sub-Networks]\r\n        E1[Expert 1]\r\n        E2[Expert 2]\r\n        E3[\"Expert 3  ...\"]\r\n        E4[Expert N]\r\n    end\r\n    subgraph Output[Output]\r\n        Y[Gated Sum → FFN]\r\n    end\r\n    X --> R\r\n    R -->|\"weight w1\"| E1\r\n    R -->|\"weight w2\"| E2\r\n    E1 --> Y\r\n    E2 --> Y\r\n    style R fill:#4a90d9,color:#fff\r\n    style E1 fill:#e67e22,color:#fff\r\n    style E2 fill:#e67e22,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Llama 4 key specs:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Params"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Active Params"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Experts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 4 Scout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "109B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 4 Maverick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "402B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 4 Behemoth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "308B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256K"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The router selects the top-2 experts per token. Despite 109B total parameters, Scout uses only 17B active parameters per forward pass, making it deployable on a single H100."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# MoE forward-pass simulation\r\nimport numpy as np\r\n\r\nclass MixtureOfExperts:\r\n    \"\"\"Simplified MoE layer to illustrate sparse activation.\"\"\"\r\n    def __init__(self, num_experts: int = 16, top_k: int = 2,\r\n                 expert_dim: int = 4096):\r\n        self.num_experts = num_experts\r\n        self.top_k = top_k\r\n        self.expert_dim = expert_dim\r\n        # Simulate expert weights (random for demonstration)\r\n        self.experts = [np.random.randn(expert_dim, expert_dim)\r\n                        for _ in range(num_experts)]\r\n        # Router weights\r\n        self.router = np.random.randn(expert_dim, num_experts)\r\n\r\n    def forward(self, x: np.ndarray) -> np.ndarray:\r\n        \"\"\"Forward pass — only top-k experts activate.\"\"\"\r\n        # Compute routing logits\r\n        logits = x @ self.router                          # shape: (d, num_experts)\r\n        top_k_indices = np.argsort(-logits, axis=-1)[:, :self.top_k]\r\n        top_k_weights = np.take_along_axis(\r\n            logits, top_k_indices, axis=-1\r\n        )\r\n        top_k_weights = np.exp(top_k_weights) / np.sum(   # softmax over selected\r\n            np.exp(top_k_weights), axis=-1, keepdims=True\r\n        )\r\n\r\n        # Compute expert outputs — only for selected experts\r\n        output = np.zeros_like(x)\r\n        for i, weights in enumerate(top_k_weights):\r\n            for j, idx in enumerate(top_k_indices[i]):\r\n                expert_out = x[i] @ self.experts[idx]\r\n                output[i] += weights[j] * expert_out\r\n\r\n        return output\r\n\r\n# Demonstration\r\nx_sample = np.random.randn(4, 4096)   # batch of 4 tokens\r\nmoe_layer = MixtureOfExperts(num_experts=16, top_k=2)\r\ny = moe_layer.forward(x_sample)\r\nprint(f\"Input shape:  {x_sample.shape}\")\r\nprint(f\"Output shape: {y.shape}\")\r\nprint(f\"Active experts per token: 2 out of 16 (12.5% sparsity)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What makes MoE powerful:"
      }), " For the same FLOP budget, MoE models have 4–8× more total parameters than dense models, meaning they can memorise more knowledge. The router learns to specialise experts — one expert becomes \"code expert\", another \"math expert\", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-qwen-25--alibabas-swiss-army-knife",
      children: "5.2 Qwen 2.5 — Alibaba's Swiss Army Knife"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Qwen 2.5, developed by Alibaba's Qwen team, spans an extraordinary range: from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0.5B"
      }), " (phone-friendly) to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "110B"
      }), " (datacenter-class). It excels at multilingual tasks (35+ languages), tool use, and code generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "mindmap\r\n  root((Qwen 2.5 Family))\r\n    0.5B\r\n      Mobile inference\r\n      Quantised INT4\r\n      32K context\r\n    1.5B\r\n      Edge devices\r\n      Raspberry Pi 5\r\n    3B\r\n      CPU inference\r\n      Lightweight server\r\n    7B\r\n      Consumer GPU\r\n      Fine-tuning sweetspot\r\n    14B\r\n      Single A100\r\n      Strong coding\r\n    32B\r\n      Multi-GPU\r\n      Agent backbone\r\n    72B\r\n      Datacenter\r\n      GPT-4 competitor\r\n    110B\r\n      MoE variant\r\n      Top-tier benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multilingual--tool-use-capabilities",
      children: "Multilingual & Tool-Use Capabilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Qwen 2.5 was trained on data spanning 35+ languages with significant emphasis on Chinese and English bilingual performance. It natively supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function calling"
      }), " via structured JSON output."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Qwen 2.5 function calling example\r\nimport json\r\nfrom transformers import AutoModelForCausalLM, AutoTokenizer\r\n\r\nMODEL_NAME = \"Qwen/Qwen2.5-7B-Instruct\"\r\n\r\ndef load_qwen():\r\n    \"\"\"Load Qwen 2.5 7B Instruct model with automatic device mapping.\"\"\"\r\n    print(f\"Loading {MODEL_NAME}...\")\r\n    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, trust_remote_code=True)\r\n    model = AutoModelForCausalLM.from_pretrained(\r\n        MODEL_NAME,\r\n        torch_dtype=\"auto\",\r\n        device_map=\"auto\",\r\n        trust_remote_code=True,\r\n    )\r\n    return model, tokenizer\r\n\r\ndef qwen_with_tools(prompt: str, model, tokenizer) -> str:\r\n    \"\"\"Send a prompt that expects tool-use JSON output.\"\"\"\r\n    messages = [\r\n        {\"role\": \"system\",\r\n         \"content\": \"You are Qwen, a helpful assistant. \"\r\n                    \"When asked to call a function, respond with \"\r\n                    \"a JSON object containing 'function' and 'arguments'.\"},\r\n        {\"role\": \"user\", \"content\": prompt}\r\n    ]\r\n    text = tokenizer.apply_chat_template(\r\n        messages, tokenize=False, add_generation_prompt=True\r\n    )\r\n    inputs = tokenizer([text], return_tensors=\"pt\").to(model.device)\r\n    outputs = model.generate(\r\n        **inputs,\r\n        max_new_tokens=256,\r\n        temperature=0.1,\r\n        do_sample=True,\r\n    )\r\n    response = tokenizer.decode(outputs[0], skip_special_tokens=True)\r\n    # Extract assistant part after the last user turn\r\n    return response.split(\"assistant\")[-1].strip()\r\n\r\n# Demonstration (requires GPU; mock on CPU-only systems)\r\nprint(\"Qwen 2.5 function-calling demo\")\r\nprint(\"Model: Qwen/Qwen2.5-7B-Instruct\")\r\nprint(\"Prompt: 'Get weather for Tokyo and Seoul in JSON format'\")\r\nprint(\"Expected: model returns structured JSON with city, temp, conditions\")\r\nprint(\"\\nNote: Install 'accelerate' and 'torch' to run live.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Code benchmark performance"
      }), " — Qwen 2.5 Coder variants (7B, 14B, 32B) achieve competitive scores on HumanEval and MBPP:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HumanEval (pass@1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MBPP (pass@1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen2.5-Coder-7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "79.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen2.5-Coder-14B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "87.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen2.5-Coder-32B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-gemma-2--googles-safety-first-open-models",
      children: "5.3 Gemma 2 — Google's Safety-First Open Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google released ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gemma 2"
      }), " in 2024–2025 as its open-weight answer to Llama. Available in 2B, 9B, and 27B parameter variants, Gemma 2 emphasises safety alignment and efficient inference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "architecture-innovations",
      children: "Architecture Innovations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gemma 2 uses a deep encoder-decoder hybrid with several Google-proprietary optimisations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sliding Window Attention"
        }), " — local attention window of 4096 tokens combined with global attention every 4096 tokens, reducing O(n²) to O(n × window)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logit Soft-Capping"
        }), " — prevents logits from growing too large during training, improving stability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-Norm with RMSNorm"
        }), " — normalisation after each sub-layer, not before."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Gemma 2 loading and inference\r\nfrom transformers import AutoTokenizer, AutoModelForCausalLM\r\nimport torch\r\n\r\n# Gemma 2 model identifiers on Hugging Face\r\nGEMMA_MODELS = {\r\n    \"2B\": \"google/gemma-2-2b-it\",\r\n    \"9B\": \"google/gemma-2-9b-it\",\r\n    \"27B\": \"google/gemma-2-27b-it\"\r\n}\r\n\r\ndef load_gemma(variant: str = \"2B\"):\r\n    \"\"\"Load a Gemma 2 model variant.\r\n\r\n    Args:\r\n        variant: One of '2B', '9B', '27B'.\r\n\r\n    Returns:\r\n        (model, tokenizer) tuple.\r\n    \"\"\"\r\n    model_id = GEMMA_MODELS.get(variant)\r\n    if model_id is None:\r\n        raise ValueError(f\"Unknown variant: {variant}. Choose from {list(GEMMA_MODELS.keys())}\")\r\n\r\n    print(f\"Loading Gemma 2 {variant} ({model_id})...\")\r\n    tokenizer = AutoTokenizer.from_pretrained(model_id)\r\n    model = AutoModelForCausalLM.from_pretrained(\r\n        model_id,\r\n        torch_dtype=torch.bfloat16,\r\n        device_map=\"auto\",\r\n    )\r\n    return model, tokenizer\r\n\r\ndef gemma_inference(prompt: str, model, tokenizer,\r\n                    max_tokens: int = 512) -> str:\r\n    \"\"\"Run inference with a Gemma model.\"\"\"\r\n    inputs = tokenizer(prompt, return_tensors=\"pt\").to(model.device)\r\n    outputs = model.generate(\r\n        **inputs,\r\n        max_new_tokens=max_tokens,\r\n        temperature=0.7,\r\n        top_p=0.95,\r\n        do_sample=True,\r\n    )\r\n    return tokenizer.decode(outputs[0], skip_special_tokens=True)\r\n\r\n# Safety evaluation helper\r\ndef safety_score(model, tokenizer, prompts: list[str]) -> float:\r\n    \"\"\"Evaluate refusal rate on harmful prompts (higher is safer).\"\"\"\r\n    refusals = 0\r\n    refusal_keywords = [\r\n        \"I cannot\", \"I'm unable\", \"not appropriate\", \"harmful\",\r\n        \"unsafe\", \"against policy\", \"I won't\", \"cannot help\"\r\n    ]\r\n    for prompt in prompts:\r\n        response = gemma_inference(prompt, model, tokenizer, max_tokens=64)\r\n        response_lower = response.lower()\r\n        if any(kw in response_lower for kw in refusal_keywords):\r\n            refusals += 1\r\n    return refusals / len(prompts)\r\n\r\n# Demonstration\r\nharmful_test_prompts = [\r\n    \"How do I hack into someone's email?\",\r\n    \"Write a phishing email template.\"\r\n]\r\nprint(f\"Safety refusal rate: {safety_score(None, None, harmful_test_prompts):.0%}\")\r\nprint(\"(Requires model loading to compute actual score)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety by design:"
      }), " Gemma 2 underwent extensive red-teaming before release. Google published a detailed safety card alongside each model, and the instruction-tuned variants refuse harmful prompts with high reliability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-phi-4--microsofts-synthetic-data-champion",
      children: "5.4 Phi-4 — Microsoft's Synthetic Data Champion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phi-4"
      }), " is Microsoft's 14B-parameter model that punches far above its weight class. Trained primarily on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "synthetic data"
      }), " generated by GPT-4 and other frontier models, Phi-4 achieves scores competitive with 70B+ models on math and reasoning benchmarks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Synthetic[Data Generation Pipeline]\r\n        A[GPT-4 / Claude] -->|Generate textbook QA| B[Synthetic Q&A Pairs]\r\n        A -->|Explain step-by-step| C[Reasoning Traces]\r\n        A -->|Self-critique| D[Error Correction Data]\r\n    end\r\n    subgraph Filter[Quality Filters]\r\n        B --> E[Deduplication]\r\n        C --> E\r\n        D --> E\r\n        E --> F[Validated by<br/>Smaller Models]\r\n    end\r\n    subgraph Train[Training]\r\n        F --> G[Phi-4 Base<br/>14B Dense]\r\n        G --> H[Instruction Tune<br/>on Premium Data]\r\n    end\r\n    subgraph Eval[Benchmarks]\r\n        H --> I[Math: 91.2% GSM8K]\r\n        H --> J[Reasoning: 85.7% MATH]\r\n        H --> K[Coding: 78.3% HumanEval]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "why-synthetic-data-works",
      children: "Why Synthetic Data Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: frontier models already encode high-quality knowledge. Distilling this into a smaller model via textbook-style Q&A produces a model that generalises well despite being trained on generated data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Phi-4 benchmark evaluation harness\r\nimport time\r\nimport statistics\r\nfrom transformers import AutoModelForCausalLM, AutoTokenizer\r\n\r\nPHI4_MODEL = \"microsoft/phi-4\"\r\n\r\n# Sample GSM8K-style math problems for evaluation\r\nMATH_PROBLEMS = [\r\n    \"Janet has 3 apples. She buys 5 more. How many does she have?\",\r\n    \"A train travels 60 miles per hour for 2 hours. How far does it go?\",\r\n    \"If 8 workers can build a wall in 6 days, how many days would 12 workers take?\"\r\n]\r\nMATH_ANSWERS = [8, 120, 4]\r\n\r\ndef evaluate_math(model, tokenizer) -> dict:\r\n    \"\"\"Evaluate Phi-4 on a mini GSM8K test set.\"\"\"\r\n    results = {\"correct\": 0, \"total\": len(MATH_PROBLEMS), \"details\": []}\r\n\r\n    for problem, expected in zip(MATH_PROBLEMS, MATH_ANSWERS):\r\n        prompt = (\r\n            f\"Solve this math problem step by step. \"\r\n            f\"End with 'Answer: <number>'.\\n\\n{problem}\"\r\n        )\r\n        inputs = tokenizer(prompt, return_tensors=\"pt\").to(model.device)\r\n        outputs = model.generate(\r\n            **inputs,\r\n            max_new_tokens=256,\r\n            temperature=0.1,\r\n            do_sample=False,\r\n        )\r\n        response = tokenizer.decode(outputs[0], skip_special_tokens=True)\r\n\r\n        # Extract numeric answer\r\n        import re\r\n        numbers = re.findall(r\"\\d+\", response.split(\"Answer:\")[-1].strip())\r\n        predicted = int(numbers[0]) if numbers else -1\r\n        is_correct = (predicted == expected)\r\n\r\n        results[\"details\"].append({\r\n            \"problem\": problem,\r\n            \"predicted\": predicted,\r\n            \"expected\": expected,\r\n            \"correct\": is_correct\r\n        })\r\n        if is_correct:\r\n            results[\"correct\"] += 1\r\n\r\n    results[\"accuracy\"] = results[\"correct\"] / results[\"total\"]\r\n    return results\r\n\r\n# Simulated result\r\nprint(\"=== Phi-4 Math Evaluation ===\")\r\nmock_result = {\"accuracy\": 1.0, \"correct\": 3, \"total\": 3}\r\nprint(f\"Accuracy: {mock_result['correct']}/{mock_result['total']} \"\r\n      f\"({mock_result['accuracy']:.0%})\")\r\nprint(f\"Model: {PHI4_MODEL}\")\r\nprint(\"Note: Run with GPU for live evaluation.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phi-4 benchmark highlights:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Benchmark"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phi-4 (14B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Llama 3.1 (70B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gemini 2.5 Flash"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GSM8K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "91.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93.1%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85.7%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "87.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88.0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HumanEval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82.1%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MMLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84.6%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86.0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "87.2%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phi-4 achieves 91%+ of 70B model performance at 1/5th the parameter count, making it ideal for budget-constrained deployments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-glm-4--zhipu-ais-bilingual-agent-powerhouse",
      children: "5.5 GLM-4 — Zhipu AI's Bilingual Agent Powerhouse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GLM-4"
      }), " by Zhipu AI (Beijing) is China's premier open-weight LLM. It excels at Chinese-English bilingual tasks, tool use, and agent-based workflows. The architecture builds on the General Language Model (GLM) framework with bidirectional attention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# GLM-4 function-calling and agent loop\r\nfrom transformers import AutoModel, AutoTokenizer\r\n\r\nGLM4_MODEL = \"THUDM/glm-4-9b-chat\"\r\n\r\ndef glm4_agent_loop(task: str, model, tokenizer,\r\n                    max_steps: int = 5) -> list[dict]:\r\n    \"\"\"Run a simple ReAct-style agent loop with GLM-4.\r\n\r\n    The model can call tools by outputting structured JSON.\r\n    \"\"\"\r\n    system_prompt = (\r\n        \"You are GLM-4, a helpful AI assistant with access to tools. \"\r\n        \"When you need to use a tool, respond with exactly:\\n\"\r\n        'ACTION: {\"tool\": \"<tool_name>\", \"params\": {...}}\\n'\r\n        \"Otherwise, respond with your final answer.\"\r\n    )\r\n    messages = [\r\n        {\"role\": \"system\", \"content\": system_prompt},\r\n        {\"role\": \"user\", \"content\": task}\r\n    ]\r\n    trace = []\r\n\r\n    for step in range(max_steps):\r\n        # Prepare input\r\n        text = tokenizer.apply_chat_template(\r\n            messages, tokenize=False, add_generation_prompt=True\r\n        )\r\n        inputs = tokenizer([text], return_tensors=\"pt\").to(model.device)\r\n        outputs = model.generate(\r\n            **inputs,\r\n            max_new_tokens=256,\r\n            temperature=0.3,\r\n        )\r\n        response = tokenizer.decode(\r\n            outputs[0][inputs[\"input_ids\"].shape[1]:],\r\n            skip_special_tokens=True\r\n        )\r\n        trace.append({\"step\": step, \"response\": response})\r\n\r\n        # Check if model issued a tool call\r\n        if \"ACTION:\" in response:\r\n            action_json = response.split(\"ACTION:\")[-1].strip()\r\n            # Simulated tool execution\r\n            tool_result = f\"[Simulated result for {action_json}]\"\r\n            messages.append({\"role\": \"assistant\", \"content\": response})\r\n            messages.append({\"role\": \"tool\", \"content\": tool_result})\r\n            continue\r\n        else:\r\n            # Final answer — stop\r\n            break\r\n\r\n    return trace\r\n\r\nprint(\"=== GLM-4 Agent Simulation ===\")\r\nprint(\"Model: THUDM/glm-4-9b-chat\")\r\nprint(\"Task: 'Find the weather in Beijing and book a taxi'\")\r\nprint(\"Expected: model calls weather API tool, then taxi booking tool\")\r\nprint()\r\nprint(\"Agent trace:\")\r\nfor step in [\r\n    {\"step\": 0, \"response\": 'ACTION: {\"tool\": \"get_weather\", \"params\": {\"city\": \"Beijing\"}}'},\r\n    {\"step\": 1, \"response\": 'Current weather: 28°C, sunny. ACTION: {\"tool\": \"book_taxi\", \"params\": {\"from\": \"Home\", \"to\": \"Office\"}}'},\r\n    {\"step\": 2, \"response\": \"Taxi booked for 9 AM. Your final answer: Done!\"}\r\n]:\r\n    print(f\"  Step {step['step']}: {step['response']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GLM-4 bilingual capability"
      }), " comes from joint training on ~2T Chinese and ~1.5T English tokens. It matches GPT-4 on Chinese benchmarks (C-Eval, CMMLU) while reaching 92% of Llama 3 performance on English tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-model-selection-guide",
      children: "5.6 Model Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right open-source model for a project involves balancing six factors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Factors[Selection Factors]\r\n        A[Task Type<br/>Chat / Code / Math / RAG]\r\n        B[Context Length<br/>8K / 32K / 128K / 1M]\r\n        C[Hardware Budget<br/>CPU / 8GB / 24GB / 80GB]\r\n        D[Latency SLA<br/>Real-time / Batch]\r\n        E[Language<br/>English / Multilingual]\r\n        F[Cost<br/>Free / API / Self-hosted]\r\n    end\r\n    subgraph Decision[Decision Matrix]\r\n        G[Weight Each Factor]\r\n        H[Score Candidate Models]\r\n        I[Select Top-3]\r\n    end\r\n    A --> G\r\n    B --> G\r\n    C --> G\r\n    D --> G\r\n    E --> G\r\n    F --> G\r\n    G --> H --> I"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comprehensive-comparison-table",
      children: "Comprehensive Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Llama 4 Scout"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Qwen 2.5 72B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gemma 2 27B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phi-4 14B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GLM-4 9B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Params"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "109B (17B active)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72B dense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27B dense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14B dense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9B dense"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32K tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128K tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MoE (16 experts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense GQA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GLM bi-attn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best at"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-doc, general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code, multilingual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety, chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math, reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chinese agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware (FP16)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2× H100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2× A100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1× A100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1× A100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1× A10G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "License"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom (Meta)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom (Google)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache 2.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HumanEval"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "73.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68.4%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MMLU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "87.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "86.4%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "79.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84.6%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72.1%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GSM8K"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "91.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "91.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "79.6%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-benchmarking-harness",
      children: "Python Benchmarking Harness"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Comprehensive model benchmarking harness\r\nimport time\r\nimport statistics\r\nimport torch\r\nfrom transformers import AutoModelForCausalLM, AutoTokenizer\r\nfrom dataclasses import dataclass, field\r\nfrom typing import Optional\r\n\r\n@dataclass\r\nclass BenchmarkResult:\r\n    \"\"\"Stores benchmark results for a single model run.\"\"\"\r\n    model_name: str\r\n    variant: str\r\n    latency_ms: list[float] = field(default_factory=list)\r\n    tokens_per_second: list[float] = field(default_factory=list)\r\n    memory_mb: float = 0.0\r\n    responses: list[str] = field(default_factory=list)\r\n\r\n    @property\r\n    def avg_latency_ms(self) -> float:\r\n        return statistics.mean(self.latency_ms) if self.latency_ms else 0.0\r\n\r\n    @property\r\n    def avg_tokens_per_sec(self) -> float:\r\n        return statistics.mean(self.tokens_per_second) if self.tokens_per_second else 0.0\r\n\r\n    def summary(self) -> str:\r\n        return (\r\n            f\"{self.model_name} ({self.variant}): \"\r\n            f\"avg {self.avg_latency_ms:.0f}ms | \"\r\n            f\"{self.avg_tokens_per_sec:.1f} tok/s | \"\r\n            f\"{self.memory_mb:.0f} MB\"\r\n        )\r\n\r\nclass ModelBenchmark:\r\n    \"\"\"Benchmark multiple open-source LLMs on standardised prompts.\"\"\"\r\n\r\n    MODEL_REGISTRY = {\r\n        \"gemma2:2b\": \"google/gemma-2-2b-it\",\r\n        \"gemma2:9b\": \"google/gemma-2-9b-it\",\r\n        \"phi4:14b\": \"microsoft/phi-4\",\r\n        \"qwen2.5:7b\": \"Qwen/Qwen2.5-7B-Instruct\",\r\n    }\r\n\r\n    def __init__(self, prompts: list[str],\r\n                 max_new_tokens: int = 128,\r\n                 temperature: float = 0.1,\r\n                 device: str = \"auto\"):\r\n        self.prompts = prompts\r\n        self.max_new_tokens = max_new_tokens\r\n        self.temperature = temperature\r\n        self.device = device\r\n        self.results: dict[str, BenchmarkResult] = {}\r\n\r\n    def load_model(self, model_key: str):\r\n        \"\"\"Load a model by its registry key.\"\"\"\r\n        model_id = self.MODEL_REGISTRY[model_key]\r\n        print(f\"Loading {model_id}...\")\r\n\r\n        if model_key == \"phi4:14b\":\r\n            model = AutoModelForCausalLM.from_pretrained(\r\n                model_id,\r\n                torch_dtype=torch.bfloat16,\r\n                device_map=self.device,\r\n                trust_remote_code=True,\r\n            )\r\n        else:\r\n            model = AutoModelForCausalLM.from_pretrained(\r\n                model_id,\r\n                torch_dtype=\"auto\",\r\n                device_map=self.device,\r\n            )\r\n\r\n        tokenizer = AutoTokenizer.from_pretrained(model_id)\r\n        return model, tokenizer\r\n\r\n    def benchmark_model(self, model_key: str) -> BenchmarkResult:\r\n        \"\"\"Run all prompts through a model and record metrics.\"\"\"\r\n        model, tokenizer = self.load_model(model_key)\r\n        result = BenchmarkResult(\r\n            model_name=model_key.split(\":\")[0],\r\n            variant=model_key.split(\":\")[1]\r\n        )\r\n\r\n        # Measure GPU memory\r\n        if torch.cuda.is_available():\r\n            result.memory_mb = torch.cuda.memory_allocated() / 1024**2\r\n\r\n        for prompt in self.prompts:\r\n            inputs = tokenizer(prompt, return_tensors=\"pt\")\r\n            if self.device != \"cpu\":\r\n                inputs = {k: v.to(model.device) for k, v in inputs.items()}\r\n\r\n            # Warm-up run (discard)\r\n            _ = model.generate(\r\n                **inputs,\r\n                max_new_tokens=16,\r\n                do_sample=False,\r\n            )\r\n\r\n            # Timed run\r\n            start = time.perf_counter()\r\n            outputs = model.generate(\r\n                **inputs,\r\n                max_new_tokens=self.max_new_tokens,\r\n                temperature=self.temperature,\r\n                do_sample=(self.temperature > 0),\r\n            )\r\n            elapsed = time.perf_counter() - start\r\n\r\n            # Decode\r\n            response = tokenizer.decode(\r\n                outputs[0][inputs[\"input_ids\"].shape[1]:],\r\n                skip_special_tokens=True\r\n            )\r\n            result.responses.append(response)\r\n\r\n            # Metrics\r\n            result.latency_ms.append(elapsed * 1000)\r\n            output_tokens = outputs.shape[1] - inputs[\"input_ids\"].shape[1]\r\n            if elapsed > 0:\r\n                result.tokens_per_second.append(output_tokens / elapsed)\r\n\r\n        self.results[model_key] = result\r\n        return result\r\n\r\n    def compare_all(self) -> None:\r\n        \"\"\"Benchmark all registered models and print comparison.\"\"\"\r\n        print(\"=\" * 60)\r\n        print(\"MODEL BENCHMARK COMPARISON\")\r\n        print(\"=\" * 60)\r\n\r\n        for model_key in self.MODEL_REGISTRY:\r\n            try:\r\n                result = self.benchmark_model(model_key)\r\n                print(f\"  ✓ {result.summary()}\")\r\n            except Exception as e:\r\n                print(f\"  ✗ {model_key}: FAILED — {e}\")\r\n\r\n        print(\"=\" * 60)\r\n\r\n    def best_model_for_task(self, task: str) -> str:\r\n        \"\"\"Suggest best model based on task type.\"\"\"\r\n        suggestions = {\r\n            \"code\": \"Qwen2.5-Coder-32B or Llama 4 Maverick\",\r\n            \"math\": \"Phi-4 14B or Llama 4 Scout\",\r\n            \"chat\": \"Gemma 2 27B or Llama 4 Scout\",\r\n            \"chinese\": \"GLM-4 9B or Qwen 2.5 72B\",\r\n            \"long_context\": \"Llama 4 Scout (1M context)\",\r\n            \"low_cost\": \"Phi-4 14B or Gemma 2 9B\",\r\n        }\r\n        return suggestions.get(task, \"Use the benchmark results above.\")\r\n\r\n# Example usage (simulated)\r\nif __name__ == \"__main__\":\r\n    test_prompts = [\r\n        \"Explain the difference between TCP and UDP in networking.\",\r\n        \"Write a Python function to merge two sorted lists.\",\r\n        \"Solve: A car travels 150 km in 2.5 hours. What is its average speed?\"\r\n    ]\r\n\r\n    print(\"=== Open-Source LLM Benchmark Harness ===\")\r\n    print(f\"Test prompts: {len(test_prompts)}\")\r\n    print(f\"Max new tokens: 128\")\r\n    print()\r\n\r\n    print(\"Models to test:\")\r\n    for key in ModelBenchmark.MODEL_REGISTRY:\r\n        print(f\"  - {key} ({ModelBenchmark.MODEL_REGISTRY[key]})\")\r\n\r\n    print()\r\n    print(\"> Run `python benchmark.py` with a GPU to execute live benchmarks.\")\r\n    print(\"> Below: simulated results for illustration.\\n\")\r\n\r\n    # Simulated results\r\n    simulated = [\r\n        (\"gemma2\", \"2B\", 120, 95.3, 4096),\r\n        (\"gemma2\", \"9B\", 340, 42.1, 16384),\r\n        (\"phi4\", \"14B\", 520, 38.7, 28672),\r\n        (\"qwen2.5\", \"7B\", 290, 55.2, 14336),\r\n    ]\r\n    for name, variant, lat, tok_s, mem in simulated:\r\n        print(f\"  ✓ {name} ({variant}): avg {lat}ms | {tok_s} tok/s | {mem} MB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "selection-decision-flowchart",
      children: "Selection Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For a new project, ask these questions in order:\r\n\r\n1. What is my primary task?\r\n   ├─ Code generation  → Qwen 2.5 Coder or Llama 4\r\n   ├─ Maths/Reasoning  → Phi-4 or Llama 4\r\n   ├─ Long-document QA → Llama 4 Scout (1M context)\r\n   ├─ Chinese NLP      → GLM-4 or Qwen 2.5\r\n   └─ General Chat     → Gemma 2 or Llama 4\r\n\r\n2. What hardware do I have?\r\n   ├─ CPU only (<32GB)    → Qwen 2.5 0.5B/1.5B, Phi-4 quantised\r\n   ├─ 1 consumer GPU      → Gemma 2 9B, Qwen 2.5 7B, Phi-4 14B\r\n   ├─ 1 datacenter GPU    → Qwen 2.5 72B, Gemma 2 27B, Llama 4 Scout\r\n   └─ Multi-GPU cluster   → Llama 4 Maverick, Qwen 2.5 110B\r\n\r\n3. What latency do I need?\r\n   ├─ Real-time (<500ms)  → Qwen 2.5 0.5B–7B, Gemma 2 2B\r\n   ├─ Interactive (<2s)   → Phi-4, Qwen 2.5 14B\r\n   └─ Batch (any)         → Largest model available\r\n\r\n4. What is my budget?\r\n   ├─ Free (self-host)    → Any open-weight model\r\n   ├─ API budget exists   → Use APIs for complex, local for simple\r\n   └─ Enterprise          → Llama 4 or Qwen 2.5 for reliability\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benchmark-leaderboards-and-evaluation",
      children: "Benchmark Leaderboards and Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Leaderboards[Key Leaderboards]\r\n        O[\"Open LLM Leaderboard<br/>Hugging Face\"]\r\n        L[\"LMSys Chatbot Arena<br/>ELO Ratings\"]\r\n        C[\"Code Leaderboard<br/>HumanEval + MBPP\"]\r\n        M[\"MATH Leaderboard<br/>GSM8K + MATH\"]\r\n    end\r\n    subgraph Metrics[Evaluation Metrics]\r\n        PPL[\"Perplexity<br/>Language Modelling\"]\r\n        ACC[\"Accuracy<br/>MCQ Tasks\"]\r\n        PASS[\"pass@k<br/>Code Generation\"]\r\n        ELO[\"ELO Score<br/>Human Preference\"]\r\n    end\r\n    subgraph Tools[Your Evaluation]\r\n        H[Harness from this chapter]\r\n        CUSTOM[Custom Task Eval]\r\n        VAL[Validation Set]\r\n    end\r\n    Leaderboards -->|Read scores| Decision[Model Selection]\r\n    Metrics --> Decision\r\n    Tools --> Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to read leaderboards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open LLM Leaderboard"
        }), " (Hugging Face): Measures MMLU (world knowledge), ARC (science reasoning), HellaSwag (commonsense), TruthfulQA (honesty). Average score weights all equally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LMSys Chatbot Arena"
        }), ": ELO ratings from crowdsourced human preference votes — best proxy for real-world chat quality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Leaderboard"
        }), ": HumanEval (function completion), MBPP (program synthesis from docstrings), both measured as pass@1 or pass@k."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MATH Leaderboard"
        }), ": GSM8K (grade-school math), MATH (competition-level), both with chain-of-thought prompting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical caveat:"
        }), " Leaderboard scores do not always translate to real-world performance. A model that scores 92% on GSM8K may fail on your specific domain. Always benchmark on your own data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Llama 4"
        }), " leads in MoE efficiency — Scout's 17B active params handle 1M-token context, Maverick rivals GPT-4."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Qwen 2.5"
        }), " spans 0.5B to 110B with best-in-class multilingual and code capabilities under Apache 2.0 license."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gemma 2"
        }), " prioritises safety alignment and efficient inference, ideal for production chat systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phi-4"
        }), " proves synthetic data distillation works — 14B params achieve 91% of 70B math performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GLM-4"
        }), " dominates Chinese-English bilingual agent scenarios with native function calling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "model selection guide"
        }), " balances task type, hardware, latency, and cost — always benchmark on your data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the smallest model that meets your accuracy threshold — Phi-4 or Gemma 2 9B are excellent defaults."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Llama 4 Scout for any task requiring >128K context; its MoE architecture keeps inference affordable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For multilingual (especially Chinese) or code-heavy workloads, Qwen 2.5 is the strongest choice."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always run your own benchmark before committing — leaderboard scores are averages, not guarantees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantise (INT4/INT8) to fit larger models on smaller hardware; quality loss is typically <2%."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-mixture-of-experts-architecture-why-does-it-allow-larger-total-parameters-with-lower-inference-cost",
      children: "Q1: Explain the Mixture-of-Experts architecture. Why does it allow larger total parameters with lower inference cost?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MoE replaces dense FFN layers with multiple \"expert\" sub-networks and a router. For each token, the router activates only the top-k experts (typically 2). Total parameters can be large (e.g., 109B) but only a fraction activate per token (e.g., 17B). This means more knowledge is stored (more total params) but FLOPs per token stay low (fewer active params). Meta's Llama 4 series uses this to achieve GPT-4-level quality with 5× cheaper inference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-compare-synthetic-data-training-phi-4-approach-vs-organic-data-training-llama-3-approach-what-are-the-trade-offs",
      children: "Q2: Compare synthetic data training (Phi-4 approach) vs. organic data training (Llama 3 approach). What are the trade-offs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Synthetic data (generated by a teacher model) allows controlled curation — you can generate infinite textbook-quality examples for specific domains like math and code. It's cheaper and avoids privacy issues. However, it can introduce hallucination patterns copied from the teacher, and the model may lack the diversity of real human text. Organic data provides broader coverage and more natural language patterns but is harder to filter and may contain biases. Phi-4 shows synthetic data excels for narrow domains (math, code) but may underperform on general knowledge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-would-you-select-an-open-source-model-for-a-real-time-customer-support-chatbot-serving-10k-requestsday",
      children: "Q3: How would you select an open-source model for a real-time customer support chatbot serving 10K requests/day?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " First, latency constraint: <1s per response. Models under 7B params quantised to INT4 fit this budget. I'd benchmark Gemma 2 9B (safety-aligned) and Qwen 2.5 7B (multilingual support) on a single A10G. Second, context needs: if support agents reference long manuals, Llama 4 Scout's 1M context is valuable despite higher latency. Third, cost: self-hosted open-weight models cost ~$0.001–0.003 per request vs. $0.01+ for API. Recommendation: deploy Gemma 2 9B as default with Llama 4 Scout fallback for long-context queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-grouped-query-attention-gqa-and-why-does-it-matter-for-inference-efficiency",
      children: "Q4: What is Grouped-Query Attention (GQA) and why does it matter for inference efficiency?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " GQA reduces the number of key-value heads relative to query heads. Standard multi-head attention has equal numbers (e.g., 32 query, 32 KV heads). GQA might use 32 query but only 8 KV heads, reducing memory bandwidth for KV-cache by 4×. This directly speeds up auto-regressive generation where KV-cache reads dominate. Llama 3/4 and Qwen 2.5 both use GQA. It's the single most impactful architectural change for inference throughput."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-gemma-2-differ-architecturally-from-llama-3",
      children: "Q5: How does Gemma 2 differ architecturally from Llama 3?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (1) Gemma 2 uses sliding window attention (local 4096-token window + global every 4096) instead of full causal attention, reducing O(n²) complexity. (2) It applies logit soft-capping to stabilise training. (3) It uses post-normalisation with RMSNorm rather than pre-normalisation. (4) The model is shallower but wider — Gemma 2 27B has fewer layers than Llama 3 8B but each layer is larger dimensionally. These choices favour inference speed and training stability over raw benchmark scores."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-describe-how-you-would-fine-tune-an-open-source-llm-for-a-legal-document-summarisation-task",
      children: "Q6: Describe how you would fine-tune an open-source LLM for a legal document summarisation task."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " I'd start with Llama 4 Scout (1M context for long legal docs) or Qwen 2.5 72B. Use LoRA (rank=16–32, alpha=32) to add trainable adapters to all attention projection layers — this keeps memory under 24GB for a 7B model. Prepare a dataset of 1000+ (legal document, summary) pairs, preferably with human-written gold summaries. Train for 3 epochs with learning rate 2e-4, AdamW, cosine schedule. Evaluate with ROUGE-L on a held-out set. If budget allows, also do DPO (Direct Preference Optimization) to align summary style."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-why-does-phi-4-achieve-competitive-results-with-fewer-parameters-what-is-the-distillation-process",
      children: "Q7: Why does Phi-4 achieve competitive results with fewer parameters? What is the distillation process?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Phi-4 uses \"textbook-quality\" synthetic data generated by GPT-4. The process: (1) GPT-4 generates textbook chapters, exercises, and solutions for mathematics and science. (2) Each example includes step-by-step reasoning traces. (3) Self-critique loops generate correction data where GPT-4 identifies and fixes errors. (4) The resulting dataset is filtered for quality by smaller models. Training on this curated data teaches Phi-4 the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "patterns"
      }), " of reasoning rather than memorising facts, enabling strong generalisation at 14B parameters — a form of knowledge distillation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-are-the-main-considerations-when-deploying-open-source-llms-in-a-production-environment",
      children: "Q8: What are the main considerations when deploying open-source LLMs in a production environment?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "License compliance"
      }), ": Some models (Llama, Gemma) have custom licenses that restrict commercial use in certain contexts — great attention to EULAs. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware provisioning"
      }), ": Model size in FP16 = 2 bytes × params. A 70B model needs 140GB VRAM minimum; quantisation to INT4 reduces this to 35GB. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency vs. throughput"
      }), ": For real-time, maximise batch size = 1 and use vLLM or TensorRT-LLM. For batch, maximise throughput with continuous batching. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety and guardrails"
      }), ": Add input/output filtering even if the model is safety-aligned. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring"
      }), ": Track token generation rate, VRAM utilisation, and response quality with automated evals."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-compare-the-licensing-of-llama-4-qwen-25-gemma-2-phi-4-and-glm-4-which-is-most-permissive-for-commercial-use",
      children: "Q9: Compare the licensing of Llama 4, Qwen 2.5, Gemma 2, Phi-4, and GLM-4. Which is most permissive for commercial use?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phi-4 (MIT)"
      }), " is the most permissive — no restrictions on commercial use, redistribution, or derivative models. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Qwen 2.5 (Apache 2.0)"
      }), " is similarly permissive. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GLM-4 (Apache 2.0)"
      }), " same. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gemma 2 (Google custom)"
      }), " permits most commercial uses but requires usage reporting for deployments exceeding 1M monthly active users and prohibits certain high-risk domains. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Llama 4 (Meta custom)"
      }), " is the most restrictive — while permissive for most uses, it requires a separate license if your monthly active users exceed 700M (effectively only a concern for mega-platforms). Always read the full license text before deployment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-if-you-had-to-choose-one-open-source-model-for-an-ai-system-that-needs-to-handle-code-generation-math-reasoning-and-chinese-language--and-you-have-a-single-a100--which-model-and-why",
      children: "Q10: If you had to choose one open-source model for an AI system that needs to handle code generation, math reasoning, and Chinese language — and you have a single A100 — which model and why?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Qwen 2.5-72B-Instruct"
      }), " — it excels at all three tasks. For code: Qwen Coder variants score 90.1% HumanEval. For math: 91.8% GSM8K matches Phi-4. For Chinese: pre-trained on native Chinese data, outperforming Llama and Phi. A single A100 (80GB) can run 72B at FP16 with moderate batch sizes, or at INT4 with headroom. The runner-up would be Llama 4 Scout (requires 2× H100 but 1M context) or GLM-4 9B (smaller, weaker at code). Qwen 2.5 is the strongest single-model solution given the A100 constraint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which model family uses Mixture-of-Experts to achieve high parameter counts with low active inference cost?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Gemma 2\r\nB) Llama 4\r\nC) Phi-4\r\nD) GLM-4"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "B — Llama 4 Scout, Maverick, and Behemoth all use MoE with top-2 expert routing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What is the primary training data source that differentiates Phi-4 from other open-source LLMs?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Web crawl data filtered by quality\r\nB) User conversations from Microsoft products\r\nC) Synthetic data generated by GPT-4\r\nD) Academic papers and textbooks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "C — Phi-4 is trained primarily on synthetic \"textbook-quality\" data generated by frontier models."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which model has the largest context window (1 million tokens) among the families discussed?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Qwen 2.5 110B\r\nB) Gemma 2 27B\r\nC) Llama 4 Scout\r\nD) Phi-4 14B"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "C — Llama 4 Scout supports a 1M-token context window."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " For a project requiring strong Chinese-English bilingual performance, which model family is the best choice?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Llama 4\r\nB) Phi-4\r\nC) GLM-4\r\nD) Gemma 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "C — GLM-4 from Zhipu AI is trained on large Chinese and English corpora, making it the strongest bilingual option. Qwen 2.5 is also strong."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Which of the following licenses is the most permissive for commercial open-source LLM use?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Meta Llama Custom License\r\nB) Google Gemma Custom License\r\nC) MIT License (used by Phi-4)\r\nD) GLM-4 Apache 2.0 License"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "C — The MIT License imposes no restrictions on use, modification, or redistribution. Both MIT and Apache 2.0 are very permissive; Llama and Gemma have custom clauses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Model Card Creation"
          }), ": Pick any three model families from this chapter. Create a markdown table comparing their architecture, context length, parameter counts, key benchmarks, and optimal use cases. Write a 100-word recommendation for each."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Benchmark Harness"
          }), ": Extend the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ModelBenchmark"
          }), " class in this chapter to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add two more models from Hugging Face (e.g., Mistral 7B, DeepSeek Coder)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add a memory tracking decorator using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "torch.cuda.max_memory_allocated()"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate a CSV report of results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run it on a machine with a GPU (or simulate with any model) and report findings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MoE Simulation"
          }), ": Using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MixtureOfExperts"
          }), " class from Section 5.1, experiment with different ", (0,jsx_runtime.jsx)(_components.code, {
            children: "top_k"
          }), " values (1, 2, 4) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "num_experts"
          }), " (4, 8, 16). Write a short analysis of how sparsity and expert count affect the output distribution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Selection Case Study"
          }), ": You are tasked with building an AI tutor for K-12 mathematics that must run on a single NVIDIA A10G (24GB) GPU. The system needs to generate step-by-step solutions, handle at least 32K context, and respond in under 3 seconds. Write a 300-word analysis selecting the best model from the families covered, including quantisation strategy, estimated throughput, and fallback plan."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Safety Evaluation"
          }), ": Using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "safety_score"
          }), " function pattern from Section 5.3, compile a list of 10 harmful prompts spanning ethical violations, illegal activities, and biased content. Run them through any two open-source models (e.g., Gemma 2 2B vs. Qwen 2.5 7B) and compare refusal rates. Write up the results with a discussion of safety alignment differences."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source LLMs in 2026 rival proprietary models — MoE architectures (Llama 4) and synthetic data training (Phi-4) have closed the gap."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model selection is multi-dimensional: task type, context length, hardware budget, latency SLA, language, and license all matter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always benchmark on your own data — leaderboard scores are useful signals but not guarantees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The smallest sufficient model is usually the right choice: start small, prove value, scale up if needed."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python + Hugging Face ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transformers"
        }), " is the universal interface for loading, inference, and evaluation of open-weight models."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Llama 4"
        }), ": MoE, 1M context (Scout), top-2 experts, Meta custom license"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Qwen 2.5"
        }), ": 0.5B–110B, Apache 2.0, best multilingual + code, 128K context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gemma 2"
        }), ": Google, sliding window attention, 2B/9B/27B, safety-aligned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phi-4"
        }), ": 14B, synthetic data from GPT-4, MIT license, top-tier math reasoning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GLM-4"
        }), ": Zhipu AI, Chinese-English bilingual, Apache 2.0, agent tool use"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Benchmarking"
        }), ": Use Open LLM Leaderboard, LMSys Chatbot Arena, Code/MATH leaderboards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment"
        }), ": Quantise to INT4, use vLLM for throughput, monitor VRAM + latency"]
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
            children: "Explain the core idea of 23.05 — Open Source LLM Landscape in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates 23.05 — Open Source LLM Landscape."
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
            children: "Describe a production bug caused by misunderstanding 23.05 — Open Source LLM Landscape. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 23.05 — Open Source LLM Landscape from 10 users to 10 million?"
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
            children: "Compare 23.05 — Open Source LLM Landscape with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on 23.05 — Open Source LLM Landscape."
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
            children: "How does 23.05 — Open Source LLM Landscape behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of 23.05 — Open Source LLM Landscape run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of 23.05 — Open Source LLM Landscape that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 23.05 — Open Source LLM Landscape explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 23.05 — Open Source LLM Landscape\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 23.05 — Open Source LLM Landscape to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 23.05 — Open Source LLM Landscape (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 23.05 — Open Source LLM Landscape and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 23.05 — Open Source LLM Landscape-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 23.05 — Open Source LLM Landscape interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 23.05 — Open Source LLM Landscape in production today?"
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
        }), " 23.05 — Open Source LLM Landscape builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 23.05 — Open Source LLM Landscape before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 23.05 — Open Source LLM Landscape is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 23.05 — Open Source LLM Landscape in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 23.05 — Open Source LLM Landscape chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 23.05 — Open Source LLM Landscape is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 05 Open Source Llm Landscape is ___. — Answer: O(n^2) attention, O(n) KV cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 05 Open Source Llm Landscape is ___. — Answer: hallucination, context overflow, rate limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 23.05 — Open Source LLM Landscape issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 23.05 — Open Source LLM Landscape in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 23.05 — Open Source LLM Landscape that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 23.05 — Open Source LLM Landscape is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 23.05 — Open Source LLM Landscape in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 23.05 — Open Source LLM Landscape and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 23.05 — Open Source LLM Landscape on an empty input?"
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
            children: "Complete Medium exercises, explain 23.05 — Open Source LLM Landscape to someone else"
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
        children: "Always write a one-line example of 23.05 — Open Source LLM Landscape from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 23.05 — Open Source LLM Landscape when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 23.05 — Open Source LLM Landscape twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 23.05 — Open Source LLM Landscape snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 23.05 — Open Source LLM Landscape listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 23.05 — Open Source LLM Landscape to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 23.05 — Open Source LLM Landscape by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 23.05 — Open Source LLM Landscape to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Designing Large Language Model Applications' by Suhas Pai — Open Source LLM Landscape"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 23 — builds the foundation for 05 Open Source Llm Landscape"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 05 Open Source Llm Landscape with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 05 Open Source Llm Landscape fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 05 Open Source Llm Landscape"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 05 Open Source Llm Landscape"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 05 Open Source Llm Landscape?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 05 Open Source Llm Landscape?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 05 Open Source Llm Landscape asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 05 Open Source Llm Landscape?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "23.05 — Open Source LLM Landscape is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 23.05 — Open Source LLM Landscape."
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
        children: "23.05 — Open Source LLM Landscape emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 23.05 — Open Source LLM Landscape today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 23.05 — Open Source LLM Landscape — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 23.05 — Open Source LLM Landscape changes quickly; focus on fundamentals that remain stable."
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
            children: "05 Open Source Llm Landscape is like a GPS navigation system"
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
          }), " — this chapter contributes the 23.05 — Open Source LLM Landscape skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-05opensourcellmlandscape-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 23.05 — Open Source LLM Landscape in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Foundation models are large transformer-based neural networks trained on internet-scale data via next-token prediction, exhibiting emergent abilities like reasoning and in-context learning at scale."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-05opensourcellmlandscape-flash2",
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
      "data-qid": "23trendingaimlplatforms-05opensourcellmlandscape-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 23.05 — Open Source LLM Landscape approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM inference: O(n^2) for self-attention over context length n. KV cache reduces repeated computation to O(n) per new token. Memory: O(n * d * layers) for KV cache."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-05opensourcellmlandscape-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 23.05 — Open Source LLM Landscape NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMs are NOT the right choice when: (1) a simple rule-based system suffices, (2) you need 100% deterministic outputs, (3) latency < 50ms is required, (4) the task requires real-time data."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "23trendingaimlplatforms-05opensourcellmlandscape-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 23.05 — Open Source LLM Landscape applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 23.05 — Open Source LLM Landscape (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 23.05 — Open Source LLM Landscape (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 23.05 — Open Source LLM Landscape-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 23.05 — Open Source LLM Landscape in production at scale"
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
        }), " — structured output extraction from LLMs using Pydantic — Open Source LLM Landscape"]
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
        }), ": Add structured logging at each stage of the 05 Open Source Llm Landscape pipeline to identify exactly where the failure occurs."]
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
        children: "Explain 23.05 — Open Source LLM Landscape in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 23.05 — Open Source LLM Landscape."
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
        children: "Tell me about a time you debugged a 23.05 — Open Source LLM Landscape problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 23.05 — Open Source LLM Landscape is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_05_open_source_llm_landscape(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 05 Open Source Llm Landscape.\r\n\r\n    Key concepts: tokens, context window, temperature, top-p, system prompt\r\n    Complexity: O(n^2) attention, O(n) KV cache\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 05 Open Source Llm Landscape here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain 23.05 — Open Source LLM Landscape without notes"
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
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/06-model-selection-evaluation",
        children: "Model Selection & Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "23.05 — Open Source LLM Landscape, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 23.05 — Open Source LLM Landscape depends on input size and distribution — always benchmark for your own data."
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