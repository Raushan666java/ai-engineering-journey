"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32482],{

/***/ 17410
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_07_fine_tuning_md_e06_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-07-fine-tuning-md-e06.json
const site_docs_courses_modern_ai_engineering_07_fine_tuning_md_e06_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/07-fine-tuning","title":"Chapter 7: Fine-Tuning","description":"Learning Objectives","source":"@site/docs/courses/modern-ai-engineering/07-fine-tuning.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/07-fine-tuning","permalink":"/ai-engineering-journey/modern-ai-engineering/07-fine-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-fine-tuning","slug":"/modern-ai-engineering/07-fine-tuning","title":"Chapter 7: Fine-Tuning","sidebar_label":"Chapter 7: Fine-Tuning","sidebar_position":7},"sidebar":"course-modern-ai-engineering","previous":{"title":"Chapter 6: Retrieval-Augmented Generation","permalink":"/ai-engineering-journey/modern-ai-engineering/06-retrieval-augmented-generation"},"next":{"title":"Chapter 8: AI Agents and Tool Use","permalink":"/ai-engineering-journey/modern-ai-engineering/08-ai-agents-and-tool-use"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/modern-ai-engineering/07-fine-tuning.md


const frontMatter = {
	id: '07-fine-tuning',
	slug: '/modern-ai-engineering/07-fine-tuning',
	title: 'Chapter 7: Fine-Tuning',
	sidebar_label: 'Chapter 7: Fine-Tuning',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Fine-Tuning';

const assets = {

};



const toc = [{
  "value": "7.1 When to Fine-Tune",
  "id": "71-when-to-fine-tune",
  "level": 2
}, {
  "value": "7.2 Full Fine-Tuning",
  "id": "72-full-fine-tuning",
  "level": 2
}, {
  "value": "7.3 Parameter-Efficient Fine-Tuning (PEFT)",
  "id": "73-parameter-efficient-fine-tuning-peft",
  "level": 2
}, {
  "value": "7.4 LoRA Deep Dive",
  "id": "74-lora-deep-dive",
  "level": 2
}, {
  "value": "7.5 Instruction Tuning",
  "id": "75-instruction-tuning",
  "level": 2
}, {
  "value": "7.6 RLHF and Preference Optimization",
  "id": "76-rlhf-and-preference-optimization",
  "level": 2
}, {
  "value": "7.7 Data Preparation for Fine-Tuning",
  "id": "77-data-preparation-for-fine-tuning",
  "level": 2
}, {
  "value": "7.8 Evaluating Fine-Tuned Models",
  "id": "78-evaluating-fine-tuned-models",
  "level": 2
}, {
  "value": "7.9 Practical Fine-Tuning Workflow",
  "id": "79-practical-fine-tuning-workflow",
  "level": 2
}, {
  "value": "TypeScript: FineTuneConfig",
  "id": "typescript-finetuneconfig",
  "level": 2
}, {
  "value": "TypeScript: DatasetFormatter",
  "id": "typescript-datasetformatter",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-7-fine-tuning",
        children: "Chapter 7: Fine-Tuning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning Objectives"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "By the end of this chapter, you will be able to:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Decide when fine-tuning is appropriate versus prompting or RAG"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Differentiate full fine-tuning from parameter-efficient methods"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement LoRA adapters and configure rank, alpha, and target modules"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Prepare instruction-tuning datasets with proper chat templates"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Understand the RLHF/DPO preference optimization pipeline"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Evaluate fine-tuned models and avoid benchmark overfitting"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-when-to-fine-tune",
      children: "7.1 When to Fine-Tune"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fine-tuning is one of the most powerful tools in an AI engineer's toolkit, but it is also the most expensive and complex. Before fine-tuning, teams should exhaust cheaper alternatives: prompt engineering, few-shot examples, retrieval-augmented generation (RAG), and controlled decoding. The decision to fine-tune should be driven by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "performance gaps"
      }), " that cannot be closed by other means."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The primary scenarios where fine-tuning is warranted include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain specialization"
        }), ": The base model lacks knowledge of specialized terminology, code syntax, legal language, medical knowledge, or proprietary APIs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format adherence"
        }), ": The model cannot reliably produce structured output (JSON, XML, markdown tables) even with detailed prompting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Style and tone control"
        }), ": The application demands a consistent voice — customer support should always be polite and empathetic, technical docs should be concise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency or cost reduction"
        }), ": A smaller fine-tuned model can match or exceed a larger general model's performance, reducing inference cost and latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-task instruction following"
        }), ": The model struggles with complex multi-step instructions or tasks that require chaining reasoning and action."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Task Requirement] --> B{Can prompt engineering solve it?}\n    B -->|Yes| C[Use Prompt Engineering]\n    B -->|No| D{Can few-shot examples work?}\n    D -->|Yes| E[Use Few-Shot Prompting]\n    D -->|No| F{Is knowledge missing?}\n    F -->|Yes| G{Is knowledge static?}\n    G -->|Yes| H[Use RAG]\n    G -->|No| I[Fine-Tune for Knowledge Injection]\n    F -->|No| J{Format or style issue?}\n    J -->|Yes| K[Fine-Tune for Format/Style]\n    J -->|No| L{Multi-task or complex instructions?}\n    L -->|Yes| M[Instruction Fine-Tune]\n    L -->|No| N[Consider RLHF / Preference Tuning]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A practical heuristic: if you can fix the problem with 5–10 well-crafted examples in the prompt, use few-shot. If you need 100–1000 examples, consider RAG. If you need 1000+ examples and the model still underperforms, it is time to fine-tune."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-full-fine-tuning",
      children: "7.2 Full Fine-Tuning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full fine-tuning updates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all parameters"
      }), " of the pre-trained model on a task-specific dataset. While this gives the model maximum flexibility to adapt, it comes with significant costs and risks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works"
      }), ": A pre-trained model (e.g., Llama 3 70B, GPT-2, BERT) is loaded with its pre-trained weights. The training loop runs on a supervised dataset where each example consists of an input and a target output. Backpropagation computes gradients for every parameter, and the optimizer (typically AdamW) updates all weights."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Computation"
        }), ": For a 7B parameter model, full fine-tuning requires 4–8 A100 GPUs (80 GB each) with gradient checkpointing, mixed precision (bf16/fp16), and possibly distributed data parallelism (DDP) or fully sharded data parallelism (FSDP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory"
        }), ": Each parameter consumes at least 2 bytes (bf16) plus optimizer states (8 bytes per parameter with AdamW). A 7B model may need 70–140 GB of GPU memory just for parameters, gradients, and optimizer states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data"
        }), ": At least 1000–10,000 high-quality examples. More data is generally better, but data quality matters more than quantity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Catastrophic forgetting"
      }), ": The most significant risk of full fine-tuning. As the model updates its weights to perform well on the new task, it can lose capabilities learned during pre-training. For example, fine-tuning a code model on legal documents may degrade its code generation ability. Mitigations include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mixing in general-domain data during fine-tuning (10–20% replay buffer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using Elastic Weight Consolidation (EWC) to penalize changes to important parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lower learning rates (1e-5 to 5e-5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Early stopping based on validation loss"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute needs comparison"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Params Updated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory (7B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forgetting Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Fine-Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~140 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1–1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QLoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1–1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-parameter-efficient-fine-tuning-peft",
      children: "7.3 Parameter-Efficient Fine-Tuning (PEFT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PEFT methods update only a small subset of model parameters while keeping the pre-trained weights frozen. This dramatically reduces memory requirements, training time, and the risk of catastrophic forgetting."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LoRA (Low-Rank Adaptation)"
      }), ": The most popular PEFT method. LoRA injects trainable low-rank decomposition matrices into attention layers. For a weight matrix W of shape d×k, LoRA learns A (d×r) and B (r×k) where r << min(d,k). The update is ΔW = AB, so the modified forward pass becomes h = Wx + ABx. At inference time, LoRA weights can be merged into the original weights with zero added latency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "QLoRA"
      }), ": Quantizes the base model to 4-bit NormalFloat and adds LoRA adapters on top. Enables fine-tuning of 65B models on a single 48GB GPU. Uses double quantization to reduce memory further and paged optimizers to handle memory spikes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adapters"
      }), ": Small bottleneck layers inserted between transformer layers. Each adapter is a down-projection (d → h) followed by a non-linearity and up-projection (h → d), where h << d. Adapters add serial computation, increasing latency slightly at inference."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefix Tuning"
      }), ": Prepends learnable continuous vectors (soft prompts) to the input of each transformer layer. Unlike discrete prompt tokens, these vectors are optimized via gradient descent. The prefix length (typically 10–200 tokens) controls expressiveness."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt Tuning"
      }), ": A simpler variant where learnable tokens are only prepended to the input embedding layer (not every layer). More parameter-efficient but less expressive than prefix tuning."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trainable Params"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expressiveness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Saving"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1–1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (mergeable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–20×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QLoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1–1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (mergeable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15–25×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slight (serial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5–10×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01–0.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20–50×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001–0.01%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50–100×"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In practice, LoRA is the most widely adopted due to its mergeable weights, no inference latency, and strong empirical performance across tasks. QLoRA is preferred when GPU memory is constrained."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-lora-deep-dive",
      children: "7.4 LoRA Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LoRA is based on the observation that learned over-parameterized models lie on a low intrinsic dimension. During adaptation, weight changes also have low intrinsic rank, allowing us to decompose ΔW into two low-rank matrices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-rank decomposition"
      }), ": For a pre-trained weight matrix W₀ of dimensions d×k, the update is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "W = W₀ + ΔW = W₀ + BA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where B ∈ ℝ^{d×r}, A ∈ ℝ^{r×k}, and r << min(d,k). A is initialized with random Gaussian (σ=0.02), B is initialized to zero, so ΔW starts at zero."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rank selection"
      }), ": The rank r controls the expressiveness of the adapter. Common values range from 4 to 64. Higher ranks capture more task-specific patterns but increase trainable parameters and risk overfitting. For most tasks, r=8 or r=16 provides a good balance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target modules"
      }), ": LoRA is typically applied to attention projection matrices (Q, K, V, O) in transformer layers. Some implementations also target feed-forward network (FFN) layers. Applying LoRA to all attention matrices generally yields the best results, while targeting only Q and V is a common cost-saving simplification."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alpha scaling"
      }), ": The LoRA update is scaled by α/r before adding to the base weights. The hyperparameter α controls the magnitude of the adaptation. Higher α values amplify the LoRA contribution. A common rule of thumb is to set α to 2× the rank (e.g., r=8, α=16)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "architecture-beta\n    group transformer[Transformer Layer]\n    service pretrained(server)[Pretrained Weights] in transformer\n    service lora_a(database)[LoRA A d×r] in transformer\n    service lora_b(database)[LoRA B r×k] in transformer\n    service scaling(disk)[Scale α/r] in transformer\n    service sum(cloud)[W₀ + BA]\n    service output(database)[Output]\n\n    pretrained --> sum\n    lora_a --> lora_b\n    lora_b --> scaling\n    scaling --> sum\n    sum --> output\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Merge at inference"
      }), ": After training, the LoRA weights (scaled BA) can be added to the original weights: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W_merged = W₀ + (α/r) × BA"
      }), ". This produces a single weight matrix with no additional computation during inference."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple LoRA adapters"
      }), ": A single base model can host multiple LoRA adapters simultaneously. During inference, the appropriate adapter is selected per request, enabling task-specific behavior without model reloads. Platforms like vLLM and TGI support dynamic LoRA adapter swapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-instruction-tuning",
      children: "7.5 Instruction Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instruction tuning trains a language model to follow natural language instructions. Unlike traditional fine-tuning on input-output pairs, instruction tuning uses formatted prompts that explicitly describe the task."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Methodology"
      }), ": The model is trained on a diverse set of (instruction, input, output) triples. The instruction describes the task, the input provides context, and the output is the desired response. During training, the loss is computed only on the output tokens (not the instruction or input), which teaches the model to condition its generation on the instruction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key datasets"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alpaca (52K)"
        }), ": Generated by GPT-3.5 (text-davinci-003) using 175 seed tasks. Each example includes instruction, input, and output. Despite being synthetic, it proved that small, high-quality datasets can effectively instruction-tune models."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dolly (15K)"
        }), ": Human-generated by Databricks employees across 8 categories (brainstorming, classification, closed QA, generation, information extraction, open QA, summarization, rewriting)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAssistant (OASST1, 66K)"
        }), ": Human-generated conversation trees with multiple turns, collected from volunteers. Messages are ranked for quality, enabling preference learning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ShareGPT"
        }), ": Real user conversations with ChatGPT, scraped from the ShareGPT website. Contains diverse, real-world instructions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chat templates"
      }), ": Each model family uses a specific format for structuring conversations. Common formats include:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "### Llama 3 Chat Template:\n\n<|begin_of_text|><|start_header_id|>system<|end_header_id|>\nYou are a helpful assistant.\n<|eot_id|><|start_header_id|>user<|end_header_id|>\nWhat is the capital of France?\n<|eot_id|><|start_header_id|>assistant<|end_header_id|>\nThe capital of France is Paris.<|eot_id|>\n\n### ChatML (GPT-4):\n\n<|im_start|>system\nYou are a helpful assistant.<|im_end|>\n<|im_start|>user\nWhat is the capital of France?<|im_end|>\n<|im_start|>assistant\nThe capital of France is Paris.<|im_end|>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the correct chat template is critical. Mismatched templates cause the model to generate in unexpected formats or ignore instructions entirely. Libraries like Hugging Face Transformers bundle tokenizers with their expected chat templates."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-task training"
      }), ": Instruction tuning blends multiple datasets, each with different formats and tasks. To prevent task imbalance, datasets are typically sampled with equal probability rather than by total examples. Task-specific loss weighting can also help balance performance across tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-rlhf-and-preference-optimization",
      children: "7.6 RLHF and Preference Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reinforcement Learning from Human Feedback (RLHF) aligns language models with human preferences beyond simple instruction following."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RLHF Pipeline"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supervised Fine-Tuning (SFT)"
        }), ": The base model is instruction-tuned on high-quality demonstrations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reward Modeling"
        }), ": A separate reward model is trained on pairwise comparisons — given two responses to the same prompt, humans indicate which is better. The reward model learns to predict human preference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PPO (Proximal Policy Optimization)"
        }), ": The SFT model generates responses, the reward model scores them, and PPO updates the policy (the language model) to maximize expected reward. A KL divergence penalty prevents the policy from diverging too far from the SFT model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Base Model] --> B[SFT on Demonstrations]\n    B --> C[SFT Model]\n    C --> D[Generate Responses]\n    D --> E[Reward Model Scores]\n    E --> F[PPO Update]\n    F --> D\n    F --> G[KL Penalty vs SFT]\n    G --> D\n    H[Human Preferences] --> I[Train Reward Model]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DPO (Direct Preference Optimization)"
      }), ": DPO eliminates the need for a separate reward model and PPO training. It directly optimizes the policy using preference pairs, reparameterizing the reward function in terms of the policy. The DPO loss function is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L = -E[log σ(β log(π_θ(y_w|x) / π_ref(y_w|x)) - β log(π_θ(y_l|x) / π_ref(y_l|x)))]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where y_w is the preferred response, y_l is the dispreferred response, and β controls the deviation from the reference policy. DPO is simpler, more stable, and requires less compute than RLHF-PPO, making it the preferred choice for most teams."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KTO (Kahneman-Tversky Optimization)"
      }), ": Uses unpaired preference data — only requires knowing whether a response is good or bad, not pairwise comparisons. Based on prospect theory (Kahneman-Tversky), KTO models human utility as asymmetric: the disutility of a bad response outweighs the utility of a good one."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ORPO (Odds Ratio Preference Optimization)"
      }), ": Combines SFT and preference optimization into a single stage. During supervised training, ORPO adds an odds ratio loss that penalizes the model for generating dispreferred responses and rewards preferred ones. This eliminates the need for a separate SFT phase."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reward Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SFT Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RLHF (PPO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unpaired"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORPO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-data-preparation-for-fine-tuning",
      children: "7.7 Data Preparation for Fine-Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data quality is the single most important factor in fine-tuning success. A well-prepared dataset of 1000 examples outperforms a noisy dataset of 100,000 examples."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality filtering"
      }), ": Remove examples with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Factual inaccuracies (use an automated fact-checker or manual review)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Toxic, biased, or harmful content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low-quality formatting (garbled text, excessive typos, non-English content)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Empty or near-empty responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Truncated or corrupted entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format standardization"
      }), ": Every example in the dataset should follow the same template structure. Inconsistent formats confuse the model and degrade performance. Apply your target chat template consistently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task balancing"
      }), ": If your dataset contains multiple tasks, ensure balanced representation. A dataset with 90% summarization and 10% code generation will produce a model that is strong at summarization but poor at code. Use stratified sampling or up/down-sampling to balance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deduplication"
      }), ": Remove near-duplicate examples. Even exact duplicates can bias training. MinHash LSH (locality-sensitive hashing) efficiently finds near-duplicates in large datasets. Deduplication against the pre-training corpus also prevents test set contamination."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Train/test split"
      }), ": Reserve 5–10% of your data for evaluation. Ensure the split is stratified by task (if multi-task) and that no prompt appears in both train and test (no leakage)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "78-evaluating-fine-tuned-models",
      children: "7.8 Evaluating Fine-Tuned Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluation before and after fine-tuning is essential to measure improvements and detect regressions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Before/after comparison"
      }), ": Run the same evaluation benchmarks on the base model and the fine-tuned model. This quantifies improvements on target tasks and detects regression on general capabilities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task-specific benchmarks"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MMLU"
        }), " (knowledge): Massive Multitask Language Understanding — 57 subjects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HumanEval"
        }), " (code): Function completion tasks with unit tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GSM8K"
        }), " (math): Grade school math word problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MT-Bench"
        }), " (multi-turn): Multi-turn conversation quality scored by GPT-4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AlpacaEval"
        }), ": Automatic evaluation against GPT-4 or other reference models"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Human evaluation"
      }), ": For subjective tasks (creative writing, summarization quality, tone), human evaluation remains the gold standard. Use A/B testing where annotators compare two model outputs without knowing which model produced which."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoiding benchmark overfitting"
      }), ": If you evaluate exclusively on your training distribution, you will overestimate real-world performance. Use held-out test sets, cross-validation, and out-of-distribution evaluation. If your model performance on benchmarks increases but real-world user satisfaction decreases, your evaluation framework is flawed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "79-practical-fine-tuning-workflow",
      children: "7.9 Practical Fine-Tuning Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A systematic workflow ensures reproducibility, accountability, and continuous improvement."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Define Task & Metrics] --> B[Collect/Curate Data]\n    B --> C[Data Quality Check]\n    C --> D{Data Good?}\n    D -->|No| B\n    D -->|Yes| E[Format Data & Split]\n    E --> F[Select PEFT Method]\n    F --> G[Configure Hyperparameters]\n    G --> H[Train Model]\n    H --> I[Evaluate on Validation Set]\n    I --> J[Run Benchmark Suite]\n    J --> K{Metrics Improve?}\n    K -->|No| G\n    K -->|Yes| L[Human Evaluation]\n    L --> M[Deploy for A/B Test]\n    M --> N[Monitor Real-World Performance]\n    N --> O{Satisfactory?}\n    O -->|No| B\n    O -->|Yes| P[Production Release]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools"
      }), ": Hugging Face TRL (Transformer Reinforcement Learning) provides Trainer classes for SFT, DPO, PPO, and KTO. Axolotl is a popular fine-tuning framework with YAML configuration. Unsloth optimizes LoRA training on consumer GPUs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-finetuneconfig",
      children: "TypeScript: FineTuneConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DatasetEntry {\n  instruction: string;\n  input: string;\n  output: string;\n  task?: string;\n  source?: string;\n}\n\ninterface SplitResult {\n  train: DatasetEntry[];\n  test: DatasetEntry[];\n  validation: DatasetEntry[];\n}\n\nclass FineTuneConfig {\n  modelName: string;\n  method: 'full' | 'lora' | 'qlora' | 'adapter';\n  precision: 'fp32' | 'bf16' | 'fp16';\n  outputDir: string;\n\n  loraConfig?: {\n    rank: number;\n    alpha: number;\n    targetModules: string[];\n    dropout: number;\n    bias: 'none' | 'all' | 'lora_only';\n  };\n\n  trainingParams: {\n    learningRate: number;\n    numEpochs: number;\n    batchSize: number;\n    gradientAccumulationSteps: number;\n    warmupRatio: number;\n    weightDecay: number;\n    maxGradNorm: number;\n    loggingSteps: number;\n    evalSteps: number;\n    saveSteps: number;\n    saveTotalLimit: number;\n    earlyStoppingPatience: number;\n    useGradientCheckpointing: boolean;\n    mixedPrecision?: 'fp16' | 'bf16';\n    optimizer: 'adamw' | 'adamw8bit' | 'adamwHf';\n    lrScheduler: 'cosine' | 'linear' | 'constant';\n    usePacking: boolean;\n    maxSeqLength: number;\n  };\n\n  dataConfig: {\n    datasetPath: string;\n    validationSplit: number;\n    testSplit: number;\n    shuffleSeed: number;\n    maxExamples?: number;\n    taskBalancing: boolean;\n    deduplicate: boolean;\n    chatTemplate: 'chatml' | 'llama3' | 'mistral' | 'custom';\n    customTemplate?: {\n      systemToken: string;\n      userToken: string;\n      assistantToken: string;\n      endToken: string;\n      bosToken: string;\n    };\n  };\n\n  evalConfig: {\n    benchmarks: string[];\n    metric: string[];\n    humanEvalSampleSize: number;\n    beforeAfterComparison: boolean;\n  };\n\n  constructor(config: Partial<FineTuneConfig>) {\n    this.modelName = config.modelName ?? 'meta-llama/Llama-3.1-8B';\n    this.method = config.method ?? 'lora';\n    this.precision = config.precision ?? 'bf16';\n    this.outputDir = config.outputDir ?? './output';\n\n    this.loraConfig = config.loraConfig ?? {\n      rank: 16,\n      alpha: 32,\n      targetModules: ['q_proj', 'v_proj', 'k_proj', 'o_proj'],\n      dropout: 0.05,\n      bias: 'none',\n    };\n\n    this.trainingParams = config.trainingParams ?? {\n      learningRate: 2e-4,\n      numEpochs: 3,\n      batchSize: 4,\n      gradientAccumulationSteps: 4,\n      warmupRatio: 0.03,\n      weightDecay: 0.01,\n      maxGradNorm: 1.0,\n      loggingSteps: 10,\n      evalSteps: 100,\n      saveSteps: 500,\n      saveTotalLimit: 3,\n      earlyStoppingPatience: 0,\n      useGradientCheckpointing: true,\n      optimizer: 'adamw8bit',\n      lrScheduler: 'cosine',\n      usePacking: true,\n      maxSeqLength: 2048,\n    };\n\n    this.dataConfig = config.dataConfig ?? {\n      datasetPath: './data/train.jsonl',\n      validationSplit: 0.1,\n      testSplit: 0.05,\n      shuffleSeed: 42,\n      taskBalancing: true,\n      deduplicate: true,\n      chatTemplate: 'chatml',\n    };\n\n    this.evalConfig = config.evalConfig ?? {\n      benchmarks: ['mmlu', 'truthfulqa', 'gsm8k'],\n      metric: ['accuracy'],\n      humanEvalSampleSize: 50,\n      beforeAfterComparison: true,\n    };\n  }\n\n  getTotalTrainSteps(): number {\n    return Math.ceil(this.trainingParams.numEpochs * this.getTrainExamples() /\n      (this.trainingParams.batchSize * this.trainingParams.gradientAccumulationSteps));\n  }\n\n  private getTrainExamples(): number {\n    return 1000;\n  }\n\n  getLoraParams(): string {\n    if (this.method !== 'lora' && this.method !== 'qlora') {\n      return 'N/A';\n    }\n    const r = this.loraConfig!.rank;\n    const targetCount = this.loraConfig!.targetModules.length;\n    const layers = 32;\n    const d = 4096;\n    const k = 4096;\n    const total = layers * targetCount * (d * r + r * k);\n    return `${(total / 1e6).toFixed(2)}M`;\n  }\n\n  validate(): string[] {\n    const errors: string[] = [];\n    if (this.trainingParams.learningRate > 1e-3) {\n      errors.push('Learning rate too high for fine-tuning');\n    }\n    if (this.loraConfig && this.loraConfig.rank < 1) {\n      errors.push('LoRA rank must be >= 1');\n    }\n    if (this.dataConfig.validationSplit + this.dataConfig.testSplit >= 0.5) {\n      errors.push('Validation + test split should be < 50%');\n    }\n    return errors;\n  }\n\n  toTrainingArgs(): Record<string, unknown> {\n    return {\n      output_dir: this.outputDir,\n      num_train_epochs: this.trainingParams.numEpochs,\n      per_device_train_batch_size: this.trainingParams.batchSize,\n      gradient_accumulation_steps: this.trainingParams.gradientAccumulationSteps,\n      learning_rate: this.trainingParams.learningRate,\n      warmup_ratio: this.trainingParams.warmupRatio,\n      weight_decay: this.trainingParams.weightDecay,\n      max_grad_norm: this.trainingParams.maxGradNorm,\n      logging_steps: this.trainingParams.loggingSteps,\n      eval_steps: this.trainingParams.evalSteps,\n      save_steps: this.trainingParams.saveSteps,\n      save_total_limit: this.trainingParams.saveTotalLimit,\n      gradient_checkpointing: this.trainingParams.useGradientCheckpointing,\n      optim: this.trainingParams.optimizer,\n      lr_scheduler_type: this.trainingParams.lrScheduler,\n      max_seq_length: this.trainingParams.maxSeqLength,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-datasetformatter",
      children: "TypeScript: DatasetFormatter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DatasetFormatter {\n  private template: string;\n  private systemToken: string;\n  private userToken: string;\n  private assistantToken: string;\n  private endToken: string;\n  private bosToken: string;\n\n  constructor(template: 'chatml' | 'llama3' | 'mistral' | 'custom', customTokens?: Record<string, string>) {\n    const TEMPLATES: Record<string, Record<string, string>> = {\n      chatml: { bos: '', user: '<|im_start|>user\\n', assistant: '<|im_start|>assistant\\n', system: '<|im_start|>system\\n', end: '<|im_end|>\\n' },\n      llama3: { bos: '<|begin_of_text|>', user: '<|start_header_id|>user<|end_header_id|>\\n', assistant: '<|start_header_id|>assistant<|end_header_id|>\\n', system: '<|start_header_id|>system<|end_header_id|>\\n', end: '<|eot_id|>\\n' },\n      mistral: { bos: '<s>', user: '[INST] ', assistant: '[/INST] ', system: '<s>', end: '</s>\\n' },\n      custom: { bos: customTokens?.bos ?? '', user: customTokens?.user ?? '', assistant: customTokens?.assistant ?? '', system: customTokens?.system ?? '', end: customTokens?.end ?? '' },\n    };\n    const t = TEMPLATES[template];\n    this.template = template;\n    this.bosToken = t.bos;\n    this.systemToken = t.system;\n    this.userToken = t.user;\n    this.assistantToken = t.assistant;\n    this.endToken = t.end;\n  }\n\n  formatInstruction(entry: { instruction: string; input?: string; output: string }): string {\n    let prompt = this.bosToken;\n    prompt += this.systemToken + 'You are a helpful assistant.' + this.endToken;\n    prompt += this.userToken + entry.instruction;\n    if (entry.input) {\n      prompt += '\\n\\n' + entry.input;\n    }\n    prompt += this.endToken;\n    prompt += this.assistantToken + entry.output + this.endToken;\n    return prompt;\n  }\n\n  formatChat(messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>): string {\n    let result = this.bosToken;\n    for (const msg of messages) {\n      switch (msg.role) {\n        case 'system':\n          result += this.systemToken + msg.content + this.endToken;\n          break;\n        case 'user':\n          result += this.userToken + msg.content + this.endToken;\n          break;\n        case 'assistant':\n          result += this.assistantToken + msg.content + this.endToken;\n          break;\n      }\n    }\n    return result;\n  }\n\n  splitData(data: DatasetEntry[], valRatio: number, testRatio: number, seed: number): SplitResult {\n    const shuffled = [...data];\n    const seededRand = (s: number) => {\n      let x = Math.sin(s * 9301 + 49297) * 233280;\n      return x - Math.floor(x);\n    };\n    for (let i = shuffled.length - 1; i > 0; i--) {\n      const j = Math.floor(seededRand(seed + i) * (i + 1));\n      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];\n    }\n    const testIdx = Math.floor(data.length * (1 - testRatio - valRatio));\n    const valIdx = Math.floor(data.length * (1 - testRatio));\n    return {\n      train: shuffled.slice(0, testIdx),\n      test: shuffled.slice(testIdx, valIdx),\n      validation: shuffled.slice(valIdx),\n    };\n  }\n\n  validateFormat(entry: DatasetEntry): boolean {\n    return (\n      typeof entry.instruction === 'string' &&\n      entry.instruction.length > 0 &&\n      typeof entry.output === 'string' &&\n      entry.output.length > 0 &&\n      typeof entry.input === 'string'\n    );\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts pre-trained foundation models to specialized tasks when prompting and RAG are insufficient. Full fine-tuning updates all parameters but risks catastrophic forgetting and requires significant compute. Parameter-efficient methods like LoRA, QLoRA, and adapters update only a fraction of parameters, reducing memory requirements and forgetting risk while maintaining strong performance. Instruction tuning teaches models to follow natural language instructions using curated datasets and proper chat templates. RLHF and preference optimization (DPO, KTO, ORPO) align model outputs with human preferences through reward modeling or direct optimization. Data quality, systematic evaluation, and iterative workflow are critical to successful fine-tuning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exhaust cheaper options first"
        }), ": Always try prompt engineering, few-shot, and RAG before fine-tuning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with LoRA"
        }), ": It provides the best trade-off between compute cost, performance, and flexibility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data quality > data quantity"
        }), ": 1000 curated examples outperform 100,000 noisy ones."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the correct chat template"
        }), ": A mismatched template will ruin fine-tuning results."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always benchmark before and after"
        }), ": Measure both target task improvement and general capability retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor for catastrophic forgetting"
        }), ": Mix general-domain data and use early stopping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer DPO over RLHF-PPO"
        }), ": DPO is simpler, more stable, and requires less compute."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which fine-tuning method introduces the lowest inference latency overhead?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full fine-tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LoRA (merged)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adapters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefix tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is the primary purpose of the α (alpha) hyperparameter in LoRA?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controls the learning rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scales the LoRA update contribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determines the rank of the decomposition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sets the dropout probability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which preference optimization method eliminates the need for a separate reward model?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PPO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RLHF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DPO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reward modeling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the recommended validation split percentage for fine-tuning datasets?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0–1%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5–10%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "20–30%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": In the ReAct pattern, what comes after the \"Action\" step?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thought"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key"
      }), ": Q1: 2, Q2: 2, Q3: 3, Q4: 2, Q5: 2"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1"
      }), ": Design a decision flowchart for when to fine-tune a model for a customer support chatbot. Consider factors like domain specificity, required response format, latency budget, and available GPU resources."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A proper decision flow would: (1) check if prompt engineering with 3 examples achieves >90% quality → if yes, use prompting; (2) check if 10 examples + RAG on support docs works → if yes, use RAG; (3) check if the model needs to follow strict JSON schemas → if yes, fine-tune for format; (4) check if latency must be under 200ms → if yes, fine-tune a smaller model; (5) use LoRA with rank 8 on a 7B model as default."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2"
      }), ": Given a pre-trained 7B model with 32 layers, each with attention dimensions d=4096, calculate the number of trainable parameters for LoRA with rank 16 applied to Q, K, V, O projections. Compare this to full fine-tuning (7B parameters)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "For each layer and each projection (Q/K/V/O): LoRA adds A (4096×16) + B (16×4096) = 65,536 + 65,536 = 131,072 parameters per projection. Four projections × 32 layers = 128 × 131,072 = 16,777,216 trainable parameters (~16.8M). Full fine-tuning = 7B. LoRA trains only 0.24% of parameters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3"
      }), ": Convert the following conversation into Llama 3 chat template format: System: \"You are a math tutor.\" User: \"What is 2+2?\" Assistant: \"2+2 equals 4.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\nYou are a math tutor.\n<|eot_id|><|start_header_id|>user<|end_header_id|>\nWhat is 2+2?\n<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n2+2 equals 4.<|eot_id|>\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4"
      }), ": Write a Python-equivalent TypeScript function that computes the DPO loss given log-probabilities of preferred and dispreferred responses and a reference policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function dpoLoss(\n  policyLogProbW: number,\n  policyLogProbL: number,\n  refLogProbW: number,\n  refLogProbL: number,\n  beta: number = 0.1\n): number {\n  const wRatio = policyLogProbW - refLogProbW;\n  const lRatio = policyLogProbL - refLogProbL;\n  const diff = beta * (wRatio - lRatio);\n  return -Math.log(1 / (1 + Math.exp(-diff)));\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5"
      }), ": You fine-tuned a model on a legal document dataset and noticed its general code generation ability dropped by 30%. Propose three mitigations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "(1) Add 10–20% general-domain data (code, general QA) to the training mix as a replay buffer. (2) Use Elastic Weight Consolidation (EWC) to penalize weight changes important for code generation. (3) Lower the learning rate to 1e-5 and use early stopping based on a combined loss that includes a general benchmark score."
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