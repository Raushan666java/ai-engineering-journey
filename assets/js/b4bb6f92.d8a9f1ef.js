"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3188],{

/***/ 93970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_04_lora_implementation_md_b4b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-04-lora-implementation-md-b4b.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_04_lora_implementation_md_b4b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/04-lora-implementation","title":"LoRA Implementation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":191,"frontMatter":{"id":"04-lora-implementation","slug":"/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation","title":"LoRA Implementation","sidebar_label":"LoRA Implementation","sidebar_position":191},"sidebar":"placementSidebar","previous":{"title":"LoRA Theory","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/03-lora-theory"},"next":{"title":"QLoRA & Quantization","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation.md


const frontMatter = {
	id: '04-lora-implementation',
	slug: '/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation',
	title: 'LoRA Implementation',
	sidebar_label: 'LoRA Implementation',
	sidebar_position: 191
};
const contentTitle = 'LoRA Implementation';

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
  "value": "4.1 PEFT Library",
  "id": "41-peft-library",
  "level": 2
}, {
  "value": "4.1.1 LoraConfig",
  "id": "411-loraconfig",
  "level": 3
}, {
  "value": "4.1.2 PEFT Model Simulator",
  "id": "412-peft-model-simulator",
  "level": 3
}, {
  "value": "4.2 Target Modules",
  "id": "42-target-modules",
  "level": 2
}, {
  "value": "4.2.1 Module Selection Analysis",
  "id": "421-module-selection-analysis",
  "level": 3
}, {
  "value": "4.2.2 Custom Module Matching",
  "id": "422-custom-module-matching",
  "level": 3
}, {
  "value": "4.3 Training",
  "id": "43-training",
  "level": 2
}, {
  "value": "4.3.1 LoRA Training Loop",
  "id": "431-lora-training-loop",
  "level": 3
}, {
  "value": "4.3.2 Optimizer Configuration",
  "id": "432-optimizer-configuration",
  "level": 3
}, {
  "value": "4.4 Adapter Management",
  "id": "44-adapter-management",
  "level": 2
}, {
  "value": "4.4.1 Adapter Save/Load",
  "id": "441-adapter-saveload",
  "level": 3
}, {
  "value": "4.4.2 Multi-Adapter Switching",
  "id": "442-multi-adapter-switching",
  "level": 3
}, {
  "value": "4.5 Merging",
  "id": "45-merging",
  "level": 2
}, {
  "value": "4.5.1 Weight Merging",
  "id": "451-weight-merging",
  "level": 3
}, {
  "value": "4.5.2 Inference Optimization",
  "id": "452-inference-optimization",
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
        id: "lora-implementation",
        children: "LoRA Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Implement LoRA using the PEFT library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select and configure target modules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply LoRA to transformers and custom models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge LoRA weights and deploy for inference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts foundation models to your specific domain. LoRA, QLoRA, and DPO make this affordable. This module covers when to fine-tune, how to do it, and how to evaluate the results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding lora implementation is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how lora implementation works in practice."
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEFT Library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoraConfig, get_peft_model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target Modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which layers to apply LoRA to"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA training loop considerations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saving, loading, switching adapters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weight merging for deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph PEFT\r\n        C[LoraConfig]\r\n        M[Base Model]\r\n        PM[get_peft_model]\r\n    end\r\n    subgraph Training\r\n        T[Train with LoRA]\r\n        S[Save Adapters]\r\n    end\r\n    subgraph Deployment\r\n        L[Load Adapters]\r\n        MG[Merge Weights]\r\n        I[Inference]\r\n    end\r\n    C --> PM\r\n    M --> PM\r\n    PM --> T --> S --> L --> MG --> I"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-peft-library",
      children: "4.1 PEFT Library"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "411-loraconfig",
      children: "4.1.1 LoraConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Optional\r\n\r\n@dataclass\r\nclass LoraConfig:\r\n    r: int = 8\r\n    lora_alpha: int = 16\r\n    target_modules: Optional[List[str]] = None\r\n    lora_dropout: float = 0.05\r\n    bias: str = \"none\"\r\n    task_type: str = \"CAUSAL_LM\"\r\n    fan_in_fan_out: bool = False\r\n    modules_to_save: Optional[List[str]] = None\r\n    init_lora_weights: bool = True\r\n\r\n    def validate(self) -> List[str]:\r\n        warnings = []\r\n        if self.r <= 0:\r\n            warnings.append(\"Rank must be positive\")\r\n        if self.lora_alpha <= 0:\r\n            warnings.append(\"Alpha must be positive\")\r\n        if self.lora_dropout < 0 or self.lora_dropout > 1:\r\n            warnings.append(\"Dropout must be in [0, 1]\")\r\n        if self.bias not in (\"none\", \"all\", \"lora_only\"):\r\n            warnings.append(\"Bias must be 'none', 'all', or 'lora_only'\")\r\n        return warnings\r\n\r\n    def to_dict(self) -> dict:\r\n        return {\r\n            \"r\": self.r,\r\n            \"lora_alpha\": self.lora_alpha,\r\n            \"target_modules\": self.target_modules,\r\n            \"lora_dropout\": self.lora_dropout,\r\n            \"bias\": self.bias,\r\n            \"task_type\": self.task_type,\r\n        }\r\n\r\nconfig = LoraConfig(\r\n    r=8,\r\n    lora_alpha=16,\r\n    target_modules=[\"q_proj\", \"v_proj\"],\r\n    lora_dropout=0.1,\r\n)\r\nprint(f\"LoRA config: {config.to_dict()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "412-peft-model-simulator",
      children: "4.1.2 PEFT Model Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PEFTModel:\r\n    def __init__(self, base_model: Any, config: LoraConfig):\r\n        self.base = base_model\r\n        self.config = config\r\n        self.lora_layers: Dict[str, LoRALayer] = {}\r\n        self._inject_lora()\r\n\r\n    def _inject_lora(self):\r\n        modules = self.config.target_modules or [\"q_proj\", \"v_proj\"]\r\n        for name, module in self.base.named_modules():\r\n            if any(t in name for t in modules):\r\n                d = getattr(module, \"in_features\", 768)\r\n                k = getattr(module, \"out_features\", 768)\r\n                self.lora_layers[name] = LoRALayer(\r\n                    d=d,\r\n                    k=k,\r\n                    r=self.config.r,\r\n                    alpha=self.config.lora_alpha,\r\n                )\r\n\r\n    def trainable_params(self) -> int:\r\n        return sum(l.d * l.r + l.r * l.k for l in self.lora_layers.values())\r\n\r\n    def frozen_params(self) -> int:\r\n        total = 0\r\n        for name, module in self.base.named_modules():\r\n            for param in getattr(module, \"parameters\", lambda: [])():\r\n                total += param.numel() if hasattr(param, \"numel\") else 0\r\n        return total\r\n\r\n    def forward(self, x: Dict) -> Dict:\r\n        return self.base(x)\r\n\r\nclass MockModule:\r\n    def __init__(self, in_features: int, out_features: int, name: str = \"\"):\r\n        self.in_features = in_features\r\n        self.out_features = out_features\r\n        self.name = name\r\n\r\n    def named_modules(self):\r\n        return [(\"\", self)]\r\n\r\n    def parameters(self):\r\n        return []\r\n\r\nclass MockBaseModel:\r\n    def __init__(self):\r\n        self.modules = {\r\n            \"model.layers.0.self_attn.q_proj\": MockModule(4096, 4096),\r\n            \"model.layers.0.self_attn.v_proj\": MockModule(4096, 4096),\r\n            \"model.layers.1.self_attn.q_proj\": MockModule(4096, 4096),\r\n            \"model.layers.1.self_attn.v_proj\": MockModule(4096, 4096),\r\n        }\r\n\r\n    def named_modules(self):\r\n        return list(self.modules.items())\r\n\r\nbase = MockBaseModel()\r\npeft = PEFTModel(base, config)\r\nprint(f\"Trainable params: {peft.trainable_params():,}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-target-modules",
      children: "4.2 Target Modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "421-module-selection-analysis",
      children: "4.2.1 Module Selection Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModuleSelector:\r\n    def __init__(self, model_config: Dict):\r\n        self.config = model_config\r\n\r\n    def get_attention_modules(self) -> List[str]:\r\n        return [\"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\"]\r\n\r\n    def get_ffn_modules(self) -> List[str]:\r\n        return [\"gate_proj\", \"up_proj\", \"down_proj\"]\r\n\r\n    def recommend(self, task_type: str) -> Dict:\r\n        recommendations = {\r\n            \"general\": {\r\n                \"modules\": [\"q_proj\", \"v_proj\"],\r\n                \"reasoning\": \"Most common — balances quality and efficiency\",\r\n            },\r\n            \"knowledge\": {\r\n                \"modules\": [\"q_proj\", \"v_proj\", \"o_proj\"],\r\n                \"reasoning\": \"More modules for knowledge-intensive adaptation\",\r\n            },\r\n            \"reasoning\": {\r\n                \"modules\": [\"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\"],\r\n                \"reasoning\": \"Full attention for reasoning tasks\",\r\n            },\r\n            \"full\": {\r\n                \"modules\": [\"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\",\r\n                            \"gate_proj\", \"up_proj\", \"down_proj\"],\r\n                \"reasoning\": \"Maximum expressiveness — all linear layers\",\r\n            },\r\n        }\r\n        return recommendations.get(task_type, recommendations[\"general\"])\r\n\r\n    def parameter_impact(self, modules: List[str], d: int, num_layers: int, r: int) -> Dict:\r\n        params_per_module = d * r + r * d\r\n        total = params_per_module * len(modules) * num_layers\r\n        return {\r\n            \"modules\": modules,\r\n            \"total_params\": total,\r\n            \"params_per_module\": params_per_module,\r\n            \"model_pct\": total / (7_000_000_000) * 100,\r\n        }\r\n\r\nselector = ModuleSelector({\"hidden_size\": 4096, \"num_hidden_layers\": 32})\r\nrec = selector.recommend(\"general\")\r\nprint(f\"Recommended modules: {rec['modules']}\")\r\nimpact = selector.parameter_impact(rec[\"modules\"], 4096, 32, 8)\r\nprint(f\"Parameter impact: {impact['total_params']:,} ({impact['model_pct']:.3f}%)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "422-custom-module-matching",
      children: "4.2.2 Custom Module Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModuleMatcher:\r\n    def __init__(self, include: List[str] = None, exclude: List[str] = None):\r\n        self.include = include or []\r\n        self.exclude = exclude or []\r\n\r\n    def match(self, module_name: str) -> bool:\r\n        if self.exclude:\r\n            if any(e in module_name for e in self.exclude):\r\n                return False\r\n\r\n        if not self.include:\r\n            return \"proj\" in module_name or \"linear\" in module_name\r\n\r\n        return any(i in module_name for i in self.include)\r\n\r\n    def filter_modules(self, all_modules: List[str]) -> List[str]:\r\n        return [m for m in all_modules if self.match(m)]\r\n\r\nmatcher = ModuleMatcher(include=[\"q_proj\", \"v_proj\"], exclude=[\"embed_tokens\", \"lm_head\"])\r\nall_mods = [\r\n    \"model.embed_tokens\", \"model.layers.0.self_attn.q_proj\",\r\n    \"model.layers.0.self_attn.k_proj\", \"model.layers.0.self_attn.v_proj\",\r\n    \"model.layers.0.self_attn.o_proj\", \"model.layers.0.mlp.gate_proj\",\r\n    \"model.layers.0.mlp.up_proj\", \"model.layers.0.mlp.down_proj\",\r\n    \"lm_head\",\r\n]\r\nmatched = matcher.filter_modules(all_mods)\r\nprint(f\"Matched modules: {matched}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-training",
      children: "4.3 Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "431-lora-training-loop",
      children: "4.3.1 LoRA Training Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LoRATrainer:\r\n    def __init__(self, model: PEFTModel, lr: float = 3e-4):\r\n        self.model = model\r\n        self.lr = lr\r\n        self.losses = []\r\n\r\n    def train_step(self, batch: Dict) -> float:\r\n        output = self.model.forward(batch)\r\n        loss = self._compute_loss(output, batch.get(\"labels\"))\r\n        self.losses.append(loss)\r\n        return loss\r\n\r\n    def _compute_loss(self, output: Dict, labels: Any) -> float:\r\n        return float(np.random.exponential(0.3))\r\n\r\n    def train(self, dataset: List[Dict], epochs: int, batch_size: int) -> List[float]:\r\n        for epoch in range(epochs):\r\n            epoch_loss = 0.0\r\n            for i in range(0, len(dataset), batch_size):\r\n                batch = {\"input\": dataset[i], \"labels\": dataset[i]}\r\n                loss = self.train_step(batch)\r\n                epoch_loss += loss\r\n            print(f\"Epoch {epoch+1}: avg_loss={epoch_loss / max(len(dataset)//batch_size, 1):.4f}\")\r\n        return self.losses\r\n\r\ntrainer = LoRATrainer(peft)\r\ndataset = [{\"text\": f\"sample-{i}\"} for i in range(50)]\r\ntrainer.train(dataset, epochs=3, batch_size=8)\r\nprint(f\"Training complete: {len(trainer.losses)} steps\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "432-optimizer-configuration",
      children: "4.3.2 Optimizer Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LoRAOptimizerConfig:\r\n    def __init__(self):\r\n        self.lora_lr: float = 3e-4\r\n        self.base_lr: float = 0.0  # frozen\r\n        self.weight_decay: float = 0.0\r\n        self.optimizer_type: str = \"adamw\"\r\n        self.betas: tuple = (0.9, 0.999)\r\n        self.eps: float = 1e-8\r\n\r\n    def parameter_groups(self, model: Any) -> List[Dict]:\r\n        groups = [\r\n            {\r\n                \"params\": [\"lora_A\", \"lora_B\"],  # lora parameters\r\n                \"lr\": self.lora_lr,\r\n                \"weight_decay\": self.weight_decay,\r\n            },\r\n            {\r\n                \"params\": [\"bias\", \"layernorm\"],  # trainable but no WD\r\n                \"lr\": self.lora_lr,\r\n                \"weight_decay\": 0.0,\r\n            },\r\n        ]\r\n        return groups\r\n\r\nopt_config = LoRAOptimizerConfig()\r\nprint(f\"LoRA LR: {opt_config.lora_lr}, WD: {opt_config.weight_decay}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-adapter-management",
      children: "4.4 Adapter Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "441-adapter-saveload",
      children: "4.4.1 Adapter Save/Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdapterManager:\r\n    def __init__(self, base_path: str = \"./adapters\"):\r\n        self.base_path = base_path\r\n        self.active_adapter: Optional[str] = None\r\n\r\n    def save(self, lora_weights: Dict[str, Tuple[np.ndarray, np.ndarray]],\r\n             adapter_name: str) -> str:\r\n        path = f\"{self.base_path}/{adapter_name}\"\r\n        import json\r\n        os.makedirs(path, exist_ok=True)\r\n\r\n        metadata = {\r\n            \"adapter_name\": adapter_name,\r\n            \"num_modules\": len(lora_weights),\r\n            \"weights\": {},\r\n        }\r\n\r\n        for module_name, (B, A) in lora_weights.items():\r\n            np.save(f\"{path}/{module_name}_B.npy\", B)\r\n            np.save(f\"{path}/{module_name}_A.npy\", A)\r\n            metadata[\"weights\"][module_name] = {\r\n                \"B_shape\": list(B.shape),\r\n                \"A_shape\": list(A.shape),\r\n            }\r\n\r\n        with open(f\"{path}/adapter_config.json\", \"w\") as f:\r\n            json.dump(metadata, f)\r\n\r\n        return path\r\n\r\n    def load(self, adapter_name: str) -> Dict[str, Tuple[np.ndarray, np.ndarray]]:\r\n        path = f\"{self.base_path}/{adapter_name}\"\r\n        with open(f\"{path}/adapter_config.json\") as f:\r\n            metadata = json.load(f)\r\n\r\n        weights = {}\r\n        for module_name in metadata[\"weights\"]:\r\n            B = np.load(f\"{path}/{module_name}_B.npy\")\r\n            A = np.load(f\"{path}/{module_name}_A.npy\")\r\n            weights[module_name] = (B, A)\r\n\r\n        self.active_adapter = adapter_name\r\n        return weights\r\n\r\n    def list_adapters(self) -> List[str]:\r\n        if not os.path.exists(self.base_path):\r\n            return []\r\n        return [d for d in os.listdir(self.base_path)\r\n                if os.path.isdir(f\"{self.base_path}/{d}\")]\r\n\r\nimport os\r\nimport json\r\nmanager = AdapterManager()\r\nprint(f\"Adapter manager ready (base: {manager.base_path})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "442-multi-adapter-switching",
      children: "4.4.2 Multi-Adapter Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiAdapterModel:\r\n    def __init__(self, base_model: Any):\r\n        self.base = base_model\r\n        self.adapters: Dict[str, Dict] = {}\r\n        self.active: Optional[str] = None\r\n\r\n    def add_adapter(self, name: str, weights: Dict):\r\n        self.adapters[name] = weights\r\n        if self.active is None:\r\n            self.active = name\r\n\r\n    def switch_to(self, name: str) -> bool:\r\n        if name in self.adapters:\r\n            self.active = name\r\n            return True\r\n        return False\r\n\r\n    def forward(self, x: Any) -> Any:\r\n        base_out = self.base(x)\r\n        if self.active and self.active in self.adapters:\r\n            adapter = self.adapters[self.active]\r\n            for module_name, (B, A) in adapter.items():\r\n                lora_output = x @ (B @ A)\r\n                base_out += lora_output\r\n        return base_out\r\n\r\n    def list_adapters(self) -> List[str]:\r\n        return list(self.adapters.keys())\r\n\r\nmulti_adapter = MultiAdapterModel(MockBaseModel())\r\nmulti_adapter.add_adapter(\"code-v1\", {\"layer_0\": (np.zeros((4,2)), np.zeros((2,4)))})\r\nmulti_adapter.add_adapter(\"chat-v1\", {\"layer_0\": (np.zeros((4,2)), np.zeros((2,4)))})\r\nmulti_adapter.switch_to(\"chat-v1\")\r\nprint(f\"Active adapter: {multi_adapter.active}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-merging",
      children: "4.5 Merging"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "451-weight-merging",
      children: "4.5.1 Weight Merging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WeightMerger:\r\n    def merge(self, W0: np.ndarray, B: np.ndarray,\r\n              A: np.ndarray, scaling: float) -> np.ndarray:\r\n        return W0 + (B @ A) * scaling\r\n\r\n    def merge_all(self, model: Any, lora_weights: Dict,\r\n                  config: LoraConfig) -> Any:\r\n        scaling = config.lora_alpha / config.r\r\n        merged_model = deepcopy(model)\r\n\r\n        for module_name, (B, A) in lora_weights.items():\r\n            module = self._get_module(merged_model, module_name)\r\n            original_weight = module.weight.copy()\r\n            module.weight = self.merge(original_weight, B, A, scaling)\r\n\r\n        return merged_model\r\n\r\n    def _get_module(self, model: Any, name: str) -> Any:\r\n        parts = name.split(\".\")\r\n        current = model\r\n        for part in parts:\r\n            current = getattr(current, part, None)\r\n            if current is None:\r\n                raise ValueError(f\"Module {name} not found\")\r\n        return current\r\n\r\n    def verify_merge(self, W0: np.ndarray, B: np.ndarray,\r\n                     A: np.ndarray, scaling: float) -> Dict:\r\n        merged = self.merge(W0, B, A, scaling)\r\n        diff = np.linalg.norm(merged - W0, \"fro\")\r\n        return {\r\n            \"merged_shape\": list(merged.shape),\r\n            \"frobenius_diff\": round(diff, 4),\r\n            \"relative_change_pct\": round(diff / np.linalg.norm(W0, \"fro\") * 100, 2),\r\n        }\r\n\r\nfrom copy import deepcopy\r\nmerger = WeightMerger()\r\nW0 = np.random.randn(64, 64)\r\nB = np.random.randn(64, 8)\r\nA = np.random.randn(8, 64)\r\nmerged = merger.merge(W0, B, A, scaling=2.0)\r\nprint(f\"Merge verification: {merger.verify_merge(W0, B, A, 2.0)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "452-inference-optimization",
      children: "4.5.2 Inference Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class InferenceOptimizer:\r\n    def __init__(self):\r\n        self.merged = False\r\n\r\n    def merge_for_inference(self, model: Any, lora_weights: Dict,\r\n                            config: LoraConfig) -> Any:\r\n        merged_model = WeightMerger().merge_all(model, lora_weights, config)\r\n        self.merged = True\r\n        return merged_model\r\n\r\n    def benchmark(self, model: Any, input_data: Any, iterations: int = 100) -> Dict:\r\n        import time\r\n\r\n        latencies = []\r\n        for _ in range(iterations):\r\n            start = time.time()\r\n            model.forward(input_data)\r\n            latencies.append((time.time() - start) * 1000)\r\n\r\n        return {\r\n            \"mean_latency_ms\": round(np.mean(latencies), 2),\r\n            \"p50_ms\": round(np.percentile(latencies, 50), 2),\r\n            \"p95_ms\": round(np.percentile(latencies, 95), 2),\r\n            \"p99_ms\": round(np.percentile(latencies, 99), 2),\r\n        }\r\n\r\n    def memory_saved(self, lora_weights: Dict) -> int:\r\n        total = 0\r\n        for B, A in lora_weights.values():\r\n            total += B.nbytes + A.nbytes\r\n        return total\r\n\r\noptimizer = InferenceOptimizer()\r\nprint(f\"Inference optimizer ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implementing LoRA with the PEFT library requires configuring LoraConfig with rank (r=8), alpha (lora_alpha=16), target modules (typically q_proj and v_proj), and.\r\ndropout (0.05-0.1). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_peft_model"
      }), " function wraps the base model, freezing all original weights and injecting trainable LoRA layers. Target module selection impacts expressiveness: q_proj+v_proj (most common),.\r\nadding k_proj+o_proj (knowledge tasks), or including FFN modules (full adaptation). Adapter management supports saving/loading adapter weights independently — enabling a single base model to host multiple task-specific adapters. For.\r\ndeployment, merging LoRA weights into the base model (W = W₀ + BA·α/r) eliminates any inference overhead. A merged model has the same latency as the original model while incorporating task-specific adaptations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Use PEFT library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-tested implementation with optimal defaults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target q_proj and v_proj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best quality-per-parameter ratio for most tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Save adapters separately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One base model, many task adapters — storage efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge before deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero inference overhead after weight merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set lora_dropout=0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Helps prevent overfitting on small datasets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you implement LoRA using the PEFT library?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implementing LoRA with the PEFT library involves: (1) load the base model from HuggingFace — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.bfloat16, device_map=\"auto\")"
          }), "; (2) create a LoRA configuration (", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoraConfig"
          }), ") specifying: r (rank,.\ne.g., 8), lora_alpha (scaling, e.g., 16), target_modules (which layers to apply LoRA to, e.g., [\"q_proj\", \"v_proj\"]), lora_dropout (dropout probability, e.g., 0.05),.\nbias=\"none\", task_type=\"CAUSAL_LM\"; (3) wrap the model: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model = get_peft_model(model, lora_config)"
          }), " — this replaces the target modules with LoRA layers and freezes all base model parameters;.\n(4) verify trainable parameters: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.print_trainable_parameters()"
          }), " shows the count and percentage of trainable parameters; (5) train using the standard HuggingFace Trainer or.\ncustom training loop — only LoRA parameters have gradients; (6) save: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.save_pretrained(\"lora-adapter\")"
          }), " saves only the small adapter weights (usually 5-50MB). The PEFT library handles all the complexity of freezing base weights,.\ninserting LoRA layers, and ensuring gradients only flow through adapter parameters."]
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
      "data-qid": "ft04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you select and configure target modules for LoRA?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Target modules specify which layers in the model get LoRA adapters. To find available module names in a HuggingFace model: (1) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.named_modules()"
          }), " lists all modules — look for.\nattention projection layers (q_proj, k_proj, v_proj, o_proj), feed-forward layers (gate_proj, up_proj, down_proj), and linear layers; (2) common patterns — Llama models use \"q_proj\",.\n\"k_proj\", \"v_proj\", \"o_proj\", \"gate_proj\", \"up_proj\", \"down_proj\". Mistral uses the same names. GPT-2 uses \"c_attn\", \"c_proj\"; (3) module name patterns can be specified as regex via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "target_modules"
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "r\".*\\.(q_proj|v_proj)$\""
          }), " targets only query and.\nvalue projections. Selection guidelines: (1) always include v_proj (value projection) — it captures the most task-specific information; (2) include q_proj for.\ntasks requiring modified attention patterns; (3) include o_proj for output quality improvement; (4) include feed-forward layers for knowledge-intensive tasks. Most implementations default to [\"q_proj\",.\n\"v_proj\"] as the starting point and add more modules if the task requires more capacity."]
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
      "data-qid": "ft04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you apply LoRA to custom models?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Applying LoRA to custom models (non-HuggingFace) requires manual injection of LoRA layers. Steps: (1) identify all linear layers in the model where you want to apply LoRA;.\n(2) replace each target linear layer with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LinearWithLoRA"
          }), " wrapper that adds the B and A matrices and computes h = W₀x + BAx;.\n(3) freeze the original linear layer weights (W₀) — only B and A should be trainable; (4) configure the forward pass to use the LoRA wrapper's computation;.\n(5) for optimization, only pass LoRA parameters to the optimizer. Implementation using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch.nn.Module"
          }), ": create a LoRALayer class with B (nn.Linear(in_features, r,.\nbias=False) initialized to zero) and A (nn.Linear(r, out_features, bias=False) initialized to random). The forward pass is: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "return self.base(x) + self.alpha * (self.B(self.A(x))) / self.r"
          }), ". The PEFT library handles this automatically for.\nHuggingFace models but the same pattern can be applied to any PyTorch model by replacing target modules with LoRA-wrapped versions. For.\nTensorFlow/JAX models, similar layer wrapping is needed."]
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
      "data-qid": "ft04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you merge LoRA weights and deploy for inference?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Merging LoRA weights into the base model eliminates the separate LoRA computation during inference. Process: (1) load the base model — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained(model_id)"
          }), ";.\n(2) load the LoRA adapter — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PeftModel.from_pretrained(base_model, \"lora-adapter-path\")"
          }), "; (3) merge — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "merged_model = peft_model.merge_and_unload()"
          }), " — this adds the LoRA weights into the base model's weight matrices and.\nremoves the LoRA layers, returning a standard model with updated weights; (4) save the merged model — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "merged_model.save_pretrained(\"merged-model\")"
          }), " creates a standard model directory with the same architecture as the base but.\nwith fine-tuned weights. Benefits of merging: eliminates LoRA inference overhead (faster, uses less memory), the merged model uses standard inference pipeline (no PEFT dependency at inference time),.\nand the model size returns to the original size (no additional adapter storage). The merged model is identical in architecture to the original base model,.\nmaking it compatible with any standard inference framework (vLLM, TGI, ONNX). The unmerge operation restores the LoRA adapter state from the base model if you need to switch between different adapters."]
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
      "data-qid": "ft04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you use multiple LoRA adapters with a single base model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Multiple LoRA adapters enable a single base model to serve multiple fine-tuned configurations. Implementation: (1) train multiple LoRA adapters from the same base model,.\neach for a different task or domain; (2) save each adapter separately (each is 5-50MB); (3) at inference time, load the base model once and.\ndynamically switch adapters via the PEFT library: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PeftModel.from_pretrained(base_model, \"adapterA\")"
          }), " for task A, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "peft_model.load_adapter(\"adapterB\", adapter_name=\"b\")"
          }), " for task B, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "peft_model.set_adapter(\"b\")"
          }), " to switch; (4) for.\nmerged inference, unmerge the current adapter, load the new one, and merge. This is memory-efficient: a single 7B base model (~14GB in fp16) with 10 adapters uses ~14GB + 10—50MB ≈ 14.5GB total,.\nvs. 140GB for 10 fully fine-tuned models. Adapter routing — decide which adapter to use based on the input task. Routing can be: rule-based (keyword matching),.\nclassifier-based (a small model predicts the task), or embedding-based (similarity search in task embedding space). This pattern is widely used for.\nmulti-tenant SaaS applications where different customers need different model behaviors."]
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
      "data-qid": "ft04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you train a LoRA adapter step by step?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Training a LoRA adapter step by step: (1) Install dependencies — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pip install peft transformers datasets accelerate bitsandbytes"
          }), "; (2) Load base model with quantization if needed — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained(\"model\",.\nload_in_4bit=True, bnb_4bit_compute_dtype=torch.bfloat16)"
          }), "; (3) Configure LoRA — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoraConfig(r=8, lora_alpha=16, target_modules=[\"q_proj\",\"v_proj\"], lora_dropout=0.05, bias=\"none\", task_type=\"CAUSAL_LM\")"
          }), "; (4) Apply LoRA — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model = get_peft_model(model, config)"
          }), "; (5) Prepare dataset — load JSONL with \"instruction\" and.\n\"output\" fields, tokenize with formatting function, create train/val split; (6) Configure training — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TrainingArguments(output_dir=\"./lora-out\", per_device_train_batch_size=4, gradient_accumulation_steps=4, learning_rate=2e-4, num_train_epochs=3, logging_steps=10, save_strategy=\"epoch\", evaluation_strategy=\"epoch\",.\nfp16=True)"
          }), "; (7) Initialize Trainer with model, args, datasets; (8) Train — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trainer.train()"
          }), "; (9) Save — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.save_pretrained(\"final-adapter\")"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tokenizer.save_pretrained(\"final-adapter\")"
          }), ". The entire script is typically 50-100 lines of Python. Monitor.\nloss curves in the console output or WandB/TensorBoard integration."]
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
      "data-qid": "ft04-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle LoRA dropout and when should you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LoRA dropout randomly zeros out elements of the LoRA output during training, acting as a regularizer. Implementation: (1) dropout is applied to the output of the LoRA matrix A (before matrix B) — specifically,.\nafter computing A(x), dropout is applied; (2) the dropout probability is set in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoraConfig(lora_dropout=0.05)"
          }), " — common values are 0.0 (no dropout),.\n0.05 (light regularization), 0.1 (strong regularization); (3) during inference, dropout is automatically disabled (PyTorch eval mode). When to use: (1) use dropout when the dataset is small (<1000 examples) to prevent overfitting;.\n(2) use dropout with higher rank (r=32+) where there are more parameters to regularize; (3) no dropout needed for large datasets (>5000 examples) or.\nlow rank (r<8). The tradeoff: dropout adds regularization (reduces overfitting) but slows convergence (needs more training steps). The default lora_dropout=0.05 works well for.\nmost cases. Dropout is applied per training step, so the randomness encourages the adapter to learn robust features that work even when some activation paths are disabled."]
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
      "data-qid": "ft04-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you verify that LoRA is correctly applied to the model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifying LoRA application: (1) Check trainable parameters — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.print_trainable_parameters()"
          }), " shows the number and percentage of trainable parameters. For a 7B model with r=8 on Q+V,.\nexpect ~4M trainable parameters (0.06% of total). If it shows billions of trainable parameters, the base model wasn't frozen correctly; (2) Inspect parameter names — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for.\nname, param in model.named_parameters(): if param.requires_grad: print(name)"
          }), " — LoRA parameters have names like \"base_model.model.model.layers.0.self_attn.q_proj.lora_A.weight\" and \"lora_B.weight\". Only these should have requires_grad=True;.\n(3) Verify base model frozen — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for name, param in model.named_parameters(): if \"lora\" not in name and param.requires_grad: print(f\"UNEXPECTED: {name}\")"
          }), " — should print nothing;.\n(4) Forward pass test — run the model on a test input before and after training; output should change (trained adapter should modify behavior);.\n(5) Check gradient flow — after a backward pass, only LoRA parameters should have non-zero gradients; (6) Size check — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.save_pretrained(\"test\")"
          }), " should produce small adapter files (5-50MB). If the saved files are gigabytes,.\nthe merge happened or the base model wasn't properly frozen."]
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
      "data-qid": "ft04-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you convert between LoRA adapter formats?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LoRA adapter formats vary across frameworks. Standard HuggingFace PEFT format saves adapter_config.json (configuration) and adapter_model.safetensors (weights). Conversion scenarios: (1) PEFT to Unsloth — Unsloth uses an optimized LoRA format for.\nfaster training. Convert by loading with Unsloth's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FastLanguageModel.from_pretrained"
          }), " with the PEFT adapter; (2) PEFT to Axolotl — Axolotl uses its own YAML config format with adapter paths. Either point Axolotl to the PEFT adapter directory or.\nconvert using Axolotl's conversion script; (3) PEFT to Diffusers (for SD models) — LoRA for diffusion models uses a different PEFT format but.\nthe same underlying technique. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "peft_to_diffusers"
          }), " conversion; (4) Custom format — manually extract ", (0,jsx_runtime.jsx)(_components.code, {
            children: "state_dict"
          }), " keys starting with \"lora_\" and save as a PyTorch checkpoint: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch.save({k: v for.\nk, v in model.state_dict().items() if \"lora_\" in k}, \"custom_lora.pt\")"
          }), ". Most frameworks support the standard HuggingFace PEFT format, making cross-framework adapter sharing straightforward. The key files are adapter_config.json (metadata) and.\nadapter_model.safetensors (weights). Validate converted adapters with a forward pass test."]
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
      "data-qid": "ft04-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you troubleshoot common LoRA training issues?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Common LoRA training issues and solutions: (1) Loss not decreasing — check learning rate (should be 1e-4 to 5e-4 for LoRA,.\nhigher than full fine-tuning because only 0.1% of parameters are trained), verify gradients flow to LoRA parameters (check requires_grad), ensure the loss mask only computes loss on output tokens;.\n(2) NaN loss — reduce learning rate, enable gradient clipping (max_grad_norm=1.0), check for corrupted data (non-UTF8 characters, extreme token lengths), use bf16 instead of fp16;.\n(3) Model output unchanged after training — verify the adapter was merged or loaded correctly (", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.base_model.model"
          }), " for PEFT wrapped model), check that training produced non-zero LoRA weights (", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch.norm(adapter_weights)"
          }), ");.\n(4) Out of memory — reduce batch size, enable gradient checkpointing (", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.gradient_checkpointing_enable()"
          }), "), use 4-bit quantization (", (0,jsx_runtime.jsx)(_components.code, {
            children: "load_in_4bit=True"
          }), "), reduce LoRA rank or target fewer modules;.\n(5) Slow training — enable mixed precision (fp16/bf16), use Flash Attention 2 (", (0,jsx_runtime.jsx)(_components.code, {
            children: "attn_implementation=\"flash_attention_2\""
          }), "), increase batch size to utilize GPU fully, optimize data loading (", (0,jsx_runtime.jsx)(_components.code, {
            children: "num_workers>0"
          }), "). Most issues are resolved by adjusting learning rate,.\nbatch size, or precision."]
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
      "data-qid": "ft-s4-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the typical target module configuration for LoRA?"]
      }), "\nA. All layers\nB. Only q_proj and v_proj\nC. Only activation functions\nD. Only embeddings\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s4-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Why merge LoRA weights before deployment?"]
      }), "\nA. To reduce model size\nB. To eliminate inference overhead\nC. To improve accuracy\nD. To enable multi-task learning\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s4-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the benefit of saving adapters separately?"]
      }), "\nA. Smaller storage\nB. One base model can host multiple task-specific adapters\nC. Faster training\nD. Better accuracy\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s4-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What does get_peft_model do?"]
      }), "\nA. Creates a new model\nB. Wraps a base model, freezing weights and injecting LoRA layers\nC. Downloads a pre-trained model\nD. Quantizes the model\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s4-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Why use lora_dropout?"]
      }), "\nA. To speed up training\nB. To prevent overfitting\nC. To reduce memory\nD. To increase accuracy\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a LoraConfig builder with validation. Support configurations for r=[4,8,16], alpha=[8,16,32], target modules selection, and dropout. Validate all parameters."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build an adapter save/load system. Create LoRA weights for 3 modules, save to disk with metadata, load back, and verify weights are identical."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement multi-adapter switching: load 2 different LoRA adapters (code-v1, chat-v1) on a single base model. Switch between them and verify outputs differ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a weight merger that takes base weights, LoRA B/A matrices, and scaling factor, produces merged weights, and reports the Frobenius norm difference before/after merge."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Benchmark inference latency: compare forward pass with separate LoRA computation vs merged weights. Measure mean, p50, p95, p99 over 100 it"
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
            children: "Explain the core idea of LoRA Implementation in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates LoRA Implementation."
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
            children: "Describe a production bug caused by misunderstanding LoRA Implementation. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on LoRA Implementation from 10 users to 10 million?"
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
            children: "Compare LoRA Implementation with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on LoRA Implementation."
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
            children: "How does LoRA Implementation behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of LoRA Implementation run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of LoRA Implementation that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name LoRA Implementation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using LoRA Implementation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies LoRA Implementation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside LoRA Implementation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of LoRA Implementation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a LoRA Implementation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic LoRA Implementation interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply LoRA Implementation in production today?"
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
        }), " LoRA Implementation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for LoRA Implementation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for LoRA Implementation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for LoRA Implementation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the LoRA Implementation chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers LoRA Implementation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 04 Lora Implementation is ___. — Answer: O(r*d) LoRA parameters vs O(d^2) full fine-tune"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 Lora Implementation is ___. — Answer: catastrophic forgetting, overfitting, data quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug LoRA Implementation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to LoRA Implementation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving LoRA Implementation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of LoRA Implementation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain LoRA Implementation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for LoRA Implementation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of LoRA Implementation on an empty input?"
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
            children: "Complete Medium exercises, explain LoRA Implementation to someone else"
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
        children: "Always write a one-line example of LoRA Implementation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered LoRA Implementation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining LoRA Implementation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own LoRA Implementation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of LoRA Implementation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link LoRA Implementation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of LoRA Implementation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain LoRA Implementation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations Implementation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 14 — builds the foundation for 04 Lora Implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 04 Lora Implementation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 04 Lora Implementation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 04 Lora Implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 04 Lora Implementation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 Lora Implementation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 04 Lora Implementation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 Lora Implementation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 04 Lora Implementation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LoRA Implementation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with LoRA Implementation."
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
        children: "LoRA Implementation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for LoRA Implementation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about LoRA Implementation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around LoRA Implementation changes quickly; focus on fundamentals that remain stable."
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
            children: "04 Lora Implementation is like a GPS navigation system"
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
          }), " — this chapter contributes the LoRA Implementation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-04loraimplementation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of LoRA Implementation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-04loraimplementation-flash2",
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
      "data-qid": "14finetuningpeft-04loraimplementation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard LoRA Implementation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-04loraimplementation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is LoRA Implementation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-04loraimplementation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is LoRA Implementation applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for LoRA Implementation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing LoRA Implementation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for LoRA Implementation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running LoRA Implementation in production at scale"
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
        children: "cProfile / py-spy for performance profiling Implementation"
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
        }), ": Add structured logging at each stage of the 04 Lora Implementation pipeline to identify exactly where the failure occurs."]
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
        children: "Explain LoRA Implementation in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of LoRA Implementation."
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
        children: "Tell me about a time you debugged a LoRA Implementation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where LoRA Implementation is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_04_lora_implementation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 04 Lora Implementation.\r\n\r\n    Key concepts: LoRA, QLoRA, PEFT, instruction tuning, DPO\r\n    Complexity: O(r*d) LoRA parameters vs O(d^2) full fine-tune\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 04 Lora Implementation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain LoRA Implementation without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization",
        children: "QLoRA & Quantization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LoRA Implementation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of LoRA Implementation depends on input size and distribution — always benchmark for your own data."
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