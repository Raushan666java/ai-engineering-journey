"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[97117],{

/***/ 34984
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_07_dpo_and_preference_tuning_md_935_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-07-dpo-and-preference-tuning-md-935.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_07_dpo_and_preference_tuning_md_935_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/07-dpo-and-preference-tuning","title":"DPO & Preference Tuning","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":194,"frontMatter":{"id":"07-dpo-and-preference-tuning","slug":"/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning","title":"DPO & Preference Tuning","sidebar_label":"DPO & Preference Tuning","sidebar_position":194},"sidebar":"placementSidebar","previous":{"title":"Instruction Tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning"},"next":{"title":"Evaluating Fine-Tuned Models","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/08-evaluating-fine-tuned-models"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning.md


const frontMatter = {
	id: '07-dpo-and-preference-tuning',
	slug: '/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning',
	title: 'DPO & Preference Tuning',
	sidebar_label: 'DPO & Preference Tuning',
	sidebar_position: 194
};
const contentTitle = 'DPO & Preference Tuning';

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
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "7.1 Preference Tuning",
  "id": "71-preference-tuning",
  "level": 2
}, {
  "value": "7.1.1 Preference Tuning Overview",
  "id": "711-preference-tuning-overview",
  "level": 3
}, {
  "value": "7.1.2 Why Direct Optimization",
  "id": "712-why-direct-optimization",
  "level": 3
}, {
  "value": "7.2 DPO Theory",
  "id": "72-dpo-theory",
  "level": 2
}, {
  "value": "7.2.1 DPO Mathematical Foundation",
  "id": "721-dpo-mathematical-foundation",
  "level": 3
}, {
  "value": "7.2.2 Beta Parameter Analysis",
  "id": "722-beta-parameter-analysis",
  "level": 3
}, {
  "value": "7.3 DPO Loss",
  "id": "73-dpo-loss",
  "level": 2
}, {
  "value": "7.3.1 DPO Loss Implementation",
  "id": "731-dpo-loss-implementation",
  "level": 3
}, {
  "value": "7.3.2 Log Probability Extraction",
  "id": "732-log-probability-extraction",
  "level": 3
}, {
  "value": "7.4 Preference Data",
  "id": "74-preference-data",
  "level": 2
}, {
  "value": "7.4.1 Preference Dataset Builder",
  "id": "741-preference-dataset-builder",
  "level": 3
}, {
  "value": "7.4.2 Synthetic Preference Data",
  "id": "742-synthetic-preference-data",
  "level": 3
}, {
  "value": "7.5 Training",
  "id": "75-training",
  "level": 2
}, {
  "value": "7.5.1 DPO Training Loop",
  "id": "751-dpo-training-loop",
  "level": 3
}, {
  "value": "7.5.2 DPO with LoRA",
  "id": "752-dpo-with-lora",
  "level": 3
}, {
  "value": "7.6 Evaluation",
  "id": "76-evaluation",
  "level": 2
}, {
  "value": "7.6.1 Win Rate Calculator",
  "id": "761-win-rate-calculator",
  "level": 3
}, {
  "value": "7.6.2 Alignment Evaluation",
  "id": "762-alignment-evaluation",
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
        id: "dpo--preference-tuning",
        children: "DPO & Preference Tuning"
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
            children: "Understand Direct Preference Optimization (DPO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement DPO loss and training loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and curate preference datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare DPO with RLHF and other alignment methods"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts foundation models to your specific domain. LoRA, QLoRA, and DPO make this affordable. This module covers when to fine-tune, how to do it, and how to evaluate the results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding dpo and preference tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how dpo and preference tuning works in practice."
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preference Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment, human preferences, RLHF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DPO Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct optimization, closed-form policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DPO Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss function, gradient analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preference Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating, curating, and formatting preference pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DPO training loop, hyperparameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reward model, win rate, alignment metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Data\n        P[Prompt]\n        W[Winning Response]\n        L[Losing Response]\n    end\n    subgraph Model\n        M[Policy Model]\n        R[Reference Model]\n    end\n    subgraph Loss\n        D[DPO Loss]\n        G[Update Policy]\n    end\n    P --> M\n    W --> M\n    L --> M\n    P --> R\n    W --> R\n    L --> R\n    M --> D\n    R --> D\n    D --> G -->|Increase prob| W\n    D --> G -->|Decrease prob| L\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-preference-tuning",
      children: "7.1 Preference Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "711-preference-tuning-overview",
      children: "7.1.1 Preference Tuning Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preference tuning aligns language models with human values by learning from comparisons rather than absolute labels."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Tuple, Optional, Dict, Callable\nimport numpy as np\n\n@dataclass\nclass PreferencePair:\n    prompt: str\n    chosen: str  # preferred response\n    rejected: str  # dispreferred response\n    metadata: Dict = field(default_factory=dict)\n\nclass AlignmentMethod(Enum):\n    RLHF = \"rlhf\"\n    DPO = \"dpo\"\n    PPO = \"ppo\"\n    KTO = \"kto\"\n    ORPO = \"orpo\"\n\nclass PreferenceTuner:\n    def __init__(self, method: AlignmentMethod = AlignmentMethod.DPO):\n        self.method = method\n\n    def compare_methods(self) -> Dict[str, str]:\n        return {\n            \"RLHF\": \"Train reward model, then optimize policy with PPO. Complex, unstable.\",\n            \"DPO\": \"Directly optimize from preferences. Simple, stable, no reward model.\",\n            \"PPO\": \"Proximal Policy Optimization. Requires reward model. Sample-efficient.\",\n            \"KTO\": \"Kahneman-Tversky Optimization. Uses binary feedback (good/bad).\",\n            \"ORPO\": \"Odds Ratio PPO. Combines SFT and preference in one stage.\",\n        }\n\n    def recommend(self, data_size: int, compute_budget: str) -> AlignmentMethod:\n        if data_size < 1000:\n            return AlignmentMethod.DPO\n        elif compute_budget == \"low\":\n            return AlignmentMethod.DPO\n        elif compute_budget == \"high\":\n            return AlignmentMethod.RLHF\n        return AlignmentMethod.DPO\n\ntuner = PreferenceTuner()\nprint(f\"Recommended method for 500 examples, low compute: {tuner.recommend(500, 'low').value}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "712-why-direct-optimization",
      children: "7.1.2 Why Direct Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DirectOptimizationAdvantage:\n    def __init__(self):\n        self.comparison = {\n            \"DPO\": {\n                \"reward_model\": False,\n                \"online_sampling\": False,\n                \"stability\": \"high\",\n                \"complexity\": \"low\",\n                \"memory\": \"2x model (policy + reference)\",\n            },\n            \"RLHF\": {\n                \"reward_model\": True,\n                \"online_sampling\": True,\n                \"stability\": \"low\",\n                \"complexity\": \"high\",\n                \"memory\": \"4x model (policy, ref, reward, critic)\",\n            },\n        }\n\n    def memory_savings(self, model_size_b: float) -> Dict:\n        dpo_mem = model_size_b * 2 * 2  # 2 models * FP16\n        rlhf_mem = model_size_b * 4 * 2  # 4 models * FP16\n        return {\n            \"dpo_gb\": dpo_mem,\n            \"rlhf_gb\": rlhf_mem,\n            \"savings_gb\": rlhf_mem - dpo_mem,\n            \"savings_pct\": round((1 - dpo_mem / rlhf_mem) * 100, 1),\n        }\n\ndoa = DirectOptimizationAdvantage()\nprint(f\"DPO memory savings vs RLHF: {doa.memory_savings(7.0)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-dpo-theory",
      children: "7.2 DPO Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-dpo-mathematical-foundation",
      children: "7.2.1 DPO Mathematical Foundation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DPOMathematics:\n    def policy_ratio(self, logprob_chosen_policy: float,\n                     logprob_chosen_ref: float,\n                     logprob_rejected_policy: float,\n                     logprob_rejected_ref: float,\n                     beta: float = 0.1) -> float:\n        chosen_ratio = logprob_chosen_policy - logprob_chosen_ref\n        rejected_ratio = logprob_rejected_policy - logprob_rejected_ref\n        return chosen_ratio - rejected_ratio\n\n    def dpo_loss(self, chosen_logprobs: np.ndarray,\n                 rejected_logprobs: np.ndarray,\n                 ref_chosen_logprobs: np.ndarray,\n                 ref_rejected_logprobs: np.ndarray,\n                 beta: float = 0.1) -> float:\n        pi_ratio = chosen_logprobs - rejected_logprobs - ref_chosen_logprobs + ref_rejected_logprobs\n        loss = -np.log(self.sigmoid(beta * pi_ratio))\n        return np.mean(loss)\n\n    def sigmoid(self, x: np.ndarray) -> np.ndarray:\n        return 1 / (1 + np.exp(-np.clip(x, -100, 100)))\n\n    def gradient_insight(self, beta: float = 0.1) -> str:\n        return (\n            f\"Gradient increases prob(chosen) when β·ratio is large negative, \"\n            f\"decreases prob(rejected) when β·ratio is large positive.\"\n        )\n\ndpo_math = DPOMathematics()\nchosen = np.array([-0.5, -0.3, -0.8])\nrejected = np.array([-2.0, -1.5, -3.0])\nref_chosen = np.array([-0.6, -0.4, -0.9])\nref_rejected = np.array([-0.7, -0.5, -0.8])\n\nloss = dpo_math.dpo_loss(chosen, rejected, ref_chosen, ref_rejected, beta=0.1)\nprint(f\"DPO loss: {loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-beta-parameter-analysis",
      children: "7.2.2 Beta Parameter Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BetaAnalyzer:\n    def analyze(self, beta_values: List[float]) -> Dict:\n        results = {}\n        for beta in beta_values:\n            results[beta] = {\n                \"description\": self._describe_beta(beta),\n                \"strength\": \"strong\" if beta > 0.5 else (\"moderate\" if beta > 0.1 else \"weak\"),\n                \"risk\": \"overfitting\" if beta > 0.5 else \"safe\",\n            }\n        return results\n\n    def _describe_beta(self, beta: float) -> str:\n        if beta < 0.05:\n            return \"Very weak alignment signal — barely changes policy\"\n        elif beta < 0.1:\n            return \"Weak alignment — subtle preference shaping\"\n        elif beta < 0.3:\n            return \"Moderate alignment — good default range\"\n        elif beta < 0.5:\n            return \"Strong alignment — significant preference pressure\"\n        else:\n            return \"Very strong alignment — risk of overfitting to preferences\"\n\n    def recommend(self, dataset_size: int) -> float:\n        if dataset_size < 1000:\n            return 0.05\n        elif dataset_size < 10000:\n            return 0.1\n        else:\n            return 0.3\n\nanalyzer = BetaAnalyzer()\nprint(analyzer.analyze([0.01, 0.1, 0.5]))\nprint(f\"Recommended beta for 5K examples: {analyzer.recommend(5000)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-dpo-loss",
      children: "7.3 DPO Loss"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "731-dpo-loss-implementation",
      children: "7.3.1 DPO Loss Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DPOLoss:\n    def __init__(self, beta: float = 0.1, label_smoothing: float = 0.0):\n        self.beta = beta\n        self.label_smoothing = label_smoothing\n\n    def compute(self, policy_chosen_logps: np.ndarray,\n                policy_rejected_logps: np.ndarray,\n                ref_chosen_logps: np.ndarray,\n                ref_rejected_logps: np.ndarray) -> Dict:\n        pi_logratios = policy_chosen_logps - policy_rejected_logps\n        ref_logratios = ref_chosen_logps - ref_rejected_logps\n        logits = pi_logratios - ref_logratios\n\n        loss = -np.mean(np.log(self.sigmoid(self.beta * logits)))\n\n        chosen_rewards = self.beta * (policy_chosen_logps - ref_chosen_logps)\n        rejected_rewards = self.beta * (policy_rejected_logps - ref_rejected_logps)\n        accuracy = np.mean(chosen_rewards > rejected_rewards)\n\n        return {\n            \"loss\": loss,\n            \"chosen_rewards\": np.mean(chosen_rewards),\n            \"rejected_rewards\": np.mean(rejected_rewards),\n            \"reward_margin\": np.mean(chosen_rewards - rejected_rewards),\n            \"accuracy\": accuracy,\n        }\n\n    def sigmoid(self, x: np.ndarray) -> np.ndarray:\n        return 1 / (1 + np.exp(-np.clip(x, -100, 100)))\n\nloss_fn = DPOLoss(beta=0.1)\npc = np.array([-0.4, -0.5, -0.3])\npr = np.array([-2.0, -1.8, -2.5])\nrc = np.array([-0.5, -0.6, -0.4])\nrr = np.array([-0.6, -0.5, -0.7])\nresult = loss_fn.compute(pc, pr, rc, rr)\nprint(f\"DPO loss: {result['loss']:.4f}, margin: {result['reward_margin']:.4f}, acc: {result['accuracy']:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "732-log-probability-extraction",
      children: "7.3.2 Log Probability Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LogProbabilityExtractor:\n    def get_logprobs(self, logits: np.ndarray, labels: np.ndarray) -> np.ndarray:\n        log_probs = np.zeros(len(labels))\n        for i in range(len(labels)):\n            log_probs[i] = logits[i, labels[i]] - np.log(np.sum(np.exp(logits[i])))\n        return log_probs\n\n    def sequence_logprob(self, token_logprobs: np.ndarray) -> float:\n        return np.sum(token_logprobs)\n\n    def average_logprob(self, token_logprobs: np.ndarray) -> float:\n        return np.mean(token_logprobs)\n\n    def per_token_reward(self, logprobs: np.ndarray, ref_logprobs: np.ndarray,\n                         beta: float) -> np.ndarray:\n        return beta * (logprobs - ref_logprobs)\n\nextractor = LogProbabilityExtractor()\nlogits = np.random.randn(10, 100)  # 10 tokens, vocab=100\nlabels = np.random.randint(0, 100, 10)\nlogprobs = extractor.get_logprobs(logits, labels)\nprint(f\"Sequence logprob: {extractor.sequence_logprob(logprobs):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-preference-data",
      children: "7.4 Preference Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-preference-dataset-builder",
      children: "7.4.1 Preference Dataset Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PreferenceDataset:\n    def __init__(self):\n        self.pairs: List[PreferencePair] = []\n\n    def add(self, pair: PreferencePair):\n        self.pairs.append(pair)\n\n    def add_from_comparisons(self, prompt: str,\n                              responses: List[Tuple[str, float]]) -> List[PreferencePair]:\n        new_pairs = []\n        sorted_responses = sorted(responses, key=lambda x: x[1], reverse=True)\n\n        for i in range(len(sorted_responses)):\n            for j in range(i + 1, len(sorted_responses)):\n                pair = PreferencePair(\n                    prompt=prompt,\n                    chosen=sorted_responses[i][0],\n                    rejected=sorted_responses[j][0],\n                    metadata={\"chosen_score\": sorted_responses[i][1],\n                              \"rejected_score\": sorted_responses[j][1]},\n                )\n                new_pairs.append(pair)\n\n        self.pairs.extend(new_pairs)\n        return new_pairs\n\n    def filter_by_margin(self, min_margin: float = 0.5) -> List[PreferencePair]:\n        filtered = []\n        for pair in self.pairs:\n            chosen_score = pair.metadata.get(\"chosen_score\", 0)\n            rejected_score = pair.metadata.get(\"rejected_score\", 0)\n            if chosen_score - rejected_score >= min_margin:\n                filtered.append(pair)\n        return filtered\n\n    def statistics(self) -> Dict:\n        if not self.pairs:\n            return {\"count\": 0}\n\n        margins = [\n            p.metadata.get(\"chosen_score\", 0) - p.metadata.get(\"rejected_score\", 0)\n            for p in self.pairs if p.metadata\n        ]\n\n        return {\n            \"count\": len(self.pairs),\n            \"avg_margin\": round(np.mean(margins), 3) if margins else 0,\n            \"min_margin\": round(np.min(margins), 3) if margins else 0,\n            \"max_margin\": round(np.max(margins), 3) if margins else 0,\n        }\n\npd = PreferenceDataset()\nresponses = [(\"Great answer\", 0.9), (\"Okay answer\", 0.5), (\"Bad answer\", 0.1)]\npd.add_from_comparisons(\"Explain AI\", responses)\nprint(f\"Generated {len(pd.pairs)} preference pairs\")\nprint(f\"Stats: {pd.statistics()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-synthetic-preference-data",
      children: "7.4.2 Synthetic Preference Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SyntheticPreferenceGenerator:\n    def __init__(self, llm_call: Callable):\n        self.llm = llm_call\n\n    def generate_pair(self, prompt: str) -> PreferencePair:\n        good_response = self.llm(f\"Write a good response to: {prompt}\")\n        bad_response = self.llm(f\"Write a poor response to: {prompt}\")\n\n        return PreferencePair(\n            prompt=prompt,\n            chosen=good_response,\n            rejected=bad_response,\n            metadata={\"source\": \"synthetic\"},\n        )\n\n    def generate_batch(self, prompts: List[str]) -> List[PreferencePair]:\n        return [self.generate_pair(p) for p in prompts]\n\n    def augment_with_perturbations(self, pair: PreferencePair) -> List[PreferencePair]:\n        augmented = [pair]\n        rejected = pair.rejected\n\n        for perturbation in [\"shortened\", \"repetitive\", \"off_topic\"]:\n            if perturbation == \"shortened\":\n                variant = \" \".join(rejected.split()[:3])\n            elif perturbation == \"repetitive\":\n                variant = (rejected + \" \") * 3\n            else:\n                variant = \"This is not relevant.\"\n\n            augmented.append(PreferencePair(\n                prompt=pair.prompt,\n                chosen=pair.chosen,\n                rejected=variant,\n                metadata={\"source\": f\"augmented_{perturbation}\"},\n            ))\n\n        return augmented\n\ndef mock_llm(prompt: str) -> str:\n    return f\"Response to: {prompt}\"\n\ngen = SyntheticPreferenceGenerator(mock_llm)\npair = gen.generate_pair(\"What is DPO?\")\naugmented = gen.augment_with_perturbations(pair)\nprint(f\"Generated {len(augmented)} preference pairs (1 original + {len(augmented)-1} augmented)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-training",
      children: "7.5 Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "751-dpo-training-loop",
      children: "7.5.1 DPO Training Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DPOTrainer:\n    def __init__(self, policy_model: Any, ref_model: Any,\n                 loss_fn: DPOLoss, lr: float = 1e-5):\n        self.policy = policy_model\n        self.reference = ref_model\n        self.loss_fn = loss_fn\n        self.lr = lr\n        self.loss_history: List[float] = []\n        self.reward_history: List[float] = []\n\n    def train_step(self, batch: List[PreferencePair]) -> Dict:\n        chosen_logps = np.array([self._get_logprob(b.prompt, b.chosen) for b in batch])\n        rejected_logps = np.array([self._get_logprob(b.prompt, b.rejected) for b in batch])\n        ref_chosen = np.array([self._get_ref_logprob(b.prompt, b.chosen) for b in batch])\n        ref_rejected = np.array([self._get_ref_logprob(b.prompt, b.rejected) for b in batch])\n\n        metrics = self.loss_fn.compute(chosen_logps, rejected_logps, ref_chosen, ref_rejected)\n        self.loss_history.append(metrics[\"loss\"])\n        self.reward_history.append(metrics[\"reward_margin\"])\n\n        self._update_policy(metrics[\"loss\"])\n\n        return metrics\n\n    def _get_logprob(self, prompt: str, response: str) -> float:\n        return float(np.random.normal(-1.0, 0.5))\n\n    def _get_ref_logprob(self, prompt: str, response: str) -> float:\n        return float(np.random.normal(-1.2, 0.5))\n\n    def _update_policy(self, loss: float):\n        pass\n\n    def train(self, dataset: List[PreferencePair],\n              epochs: int, batch_size: int) -> Dict:\n        for epoch in range(epochs):\n            epoch_metrics = {\"loss\": 0.0, \"accuracy\": 0.0, \"margin\": 0.0}\n            num_batches = max(len(dataset) // batch_size, 1)\n\n            for i in range(0, len(dataset), batch_size):\n                batch = dataset[i:i + batch_size]\n                metrics = self.train_step(batch)\n                epoch_metrics[\"loss\"] += metrics[\"loss\"]\n                epoch_metrics[\"accuracy\"] += metrics[\"accuracy\"]\n                epoch_metrics[\"margin\"] += metrics[\"reward_margin\"]\n\n            print(f\"Epoch {epoch+1}: loss={epoch_metrics['loss']/num_batches:.4f}, \"\n                  f\"acc={epoch_metrics['accuracy']/num_batches:.3f}\")\n\n        return {\n            \"final_loss\": self.loss_history[-1] if self.loss_history else 0,\n            \"avg_margin\": np.mean(self.reward_history) if self.reward_history else 0,\n        }\n\ntrainer = DPOTrainer(None, None, DPOLoss(beta=0.1))\ndataset = [PreferencePair(prompt=f\"Prompt {i}\", chosen=f\"Good {i}\", rejected=f\"Bad {i}\")\n           for i in range(50)]\nresults = trainer.train(dataset, epochs=3, batch_size=8)\nprint(f\"Training results: {results}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "752-dpo-with-lora",
      children: "7.5.2 DPO with LoRA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DPOLoRAConfig:\n    def __init__(self):\n        self.dpo_config = {\n            \"beta\": 0.1,\n            \"label_smoothing\": 0.0,\n            \"loss_type\": \"sigmoid\",  # sigmoid, hinge, ipo\n        }\n        self.lora_config = LoraConfig(\n            r=16,\n            lora_alpha=32,\n            target_modules=[\"q_proj\", \"v_proj\"],\n            lora_dropout=0.05,\n        )\n        self.training = {\n            \"per_device_train_batch_size\": 4,\n            \"gradient_accumulation_steps\": 8,\n            \"learning_rate\": 1e-5,\n            \"num_train_epochs\": 3,\n            \"warmup_ratio\": 0.1,\n            \"logging_steps\": 10,\n            \"save_steps\": 500,\n        }\n\n    def validate(self) -> List[str]:\n        warnings = []\n        if self.dpo_config[\"beta\"] <= 0:\n            warnings.append(\"Beta must be positive\")\n        if self.dpo_config[\"loss_type\"] not in (\"sigmoid\", \"hinge\", \"ipo\"):\n            warnings.append(\"Unknown loss type\")\n        return warnings\n\ndpo_lora = DPOLoRAConfig()\nprint(f\"DPO+LoRA config validated: {dpo_lora.validate()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-evaluation",
      children: "7.6 Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "761-win-rate-calculator",
      children: "7.6.1 Win Rate Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WinRateCalculator:\n    def calculate(self, model_outputs: List[str],\n                  baseline_outputs: List[str],\n                  preferences: Optional[List[int]] = None) -> Dict:\n        if preferences:\n            wins = sum(1 for p in preferences if p == 1)\n            total = len(preferences)\n        else:\n            wins = 0\n            total = len(model_outputs)\n            for m, b in zip(model_outputs, baseline_outputs):\n                wins += 1 if len(m) > len(b) else 0  # simplistic proxy\n\n        return {\n            \"wins\": wins,\n            \"losses\": total - wins,\n            \"win_rate\": round(wins / total * 100, 1),\n            \"total\": total,\n        }\n\n    def pairwise_comparison(self, outputs_a: List[str],\n                             outputs_b: List[str]) -> Dict:\n        a_wins = 0\n        b_wins = 0\n        ties = 0\n\n        for a, b in zip(outputs_a, outputs_b):\n            score_a = self._quality_proxy(a)\n            score_b = self._quality_proxy(b)\n            if score_a > score_b:\n                a_wins += 1\n            elif score_b > score_a:\n                b_wins += 1\n            else:\n                ties += 1\n\n        return {\n            \"a_wins\": a_wins,\n            \"b_wins\": b_wins,\n            \"ties\": ties,\n            \"a_win_rate\": round(a_wins / len(outputs_a) * 100, 1),\n        }\n\n    def _quality_proxy(self, text: str) -> float:\n        return len(text.split()) + (0.1 if text.endswith((\".\", \"!\", \"?\")) else 0)\n\nwrc = WinRateCalculator()\nmodel_out = [\"Good answer here.\" for _ in range(10)]\nbaseline_out = [\"Bad\" for _ in range(10)]\nprint(f\"Win rate: {wrc.calculate(model_out, baseline_out)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "762-alignment-evaluation",
      children: "7.6.2 Alignment Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AlignmentEvaluator:\n    def __init__(self):\n        self.criteria = [\"helpfulness\", \"harmlessness\", \"honesty\"]\n\n    def evaluate(self, responses: List[str], prompt_type: str = \"general\") -> Dict:\n        scores = {}\n        for criterion in self.criteria:\n            if criterion == \"helpfulness\":\n                scores[criterion] = self._score_helpfulness(responses)\n            elif criterion == \"harmlessness\":\n                scores[criterion] = self._score_harmlessness(responses)\n            elif criterion == \"honesty\":\n                scores[criterion] = self._score_honesty(responses)\n\n        scores[\"overall\"] = round(np.mean(list(scores.values())), 3)\n        return scores\n\n    def _score_helpfulness(self, responses: List[str]) -> float:\n        lengths = [len(r.split()) for r in responses]\n        avg_length = np.mean(lengths) if lengths else 0\n        return min(avg_length / 20, 1.0)\n\n    def _score_harmlessness(self, responses: List[str]) -> float:\n        harmful_words = [\"hate\", \"violence\", \"illegal\", \"dangerous\"]\n        clean = 0\n        for r in responses:\n            if not any(w in r.lower() for w in harmful_words):\n                clean += 1\n        return clean / len(responses) if responses else 0\n\n    def _score_honesty(self, responses: List[str]) -> float:\n        uncertainty = sum(1 for r in responses if \"I don't know\" in r or \"unsure\" in r)\n        return 1.0 - (uncertainty / len(responses) * 0.5)\n\nevaluator = AlignmentEvaluator()\nresponses = [\"I'll help you with that.\", \"I cannot help with that request.\"]\nprint(f\"Alignment scores: {evaluator.evaluate(responses)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Direct Preference Optimization (DPO) aligns language models with human preferences without training a separate reward model. The DPO loss is: L = -E[log(σ(β(logπ_w/π_ref_w - logπ_l/π_ref_l)))],.\nwhere β controls alignment strength (typical values: 0.05-0.3). DPO requires only a policy model and a frozen reference model, compared to RLHF which needs 4 models (policy,.\nreference, reward, critic). Preference pairs consist of prompt + chosen response + rejected response. The beta parameter governs how aggressively the policy diverges from the reference — lower β (<0.1) for.\nsmall datasets, higher β (>0.3) for large datasets. Training with LoRA adapters is common, keeping base models frozen while updating low-rank adapters. Win rate against the base model is the primary evaluation metric,.\ntypically measured through pairwise comparisons or LLM-as-judge evaluations."
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
            children: "Start with β=0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced alignment strength for most datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use preference margins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter pairs where the quality difference is small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze reference model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference logprobs computed once for efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPO + LoRA is efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Train adapters, keep base model frozen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measure win rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary metric — compare DPO model vs base model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Watch for over-optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High β + many epochs can degrade response diversity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is Direct Preference Optimization (DPO)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Direct Preference Optimization (DPO) is a training method that aligns language models with human preferences without using reinforcement learning. Unlike RLHF (Reinforcement Learning from Human Feedback),.\nwhich trains a separate reward model and then uses PPO to optimize the policy, DPO directly optimizes the policy using a closed-form mapping between the reward function and.\nthe optimal policy. The DPO loss function compares the log-probabilities of chosen vs. rejected responses: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "L_DPO = -E[log σ(β(log π_θ(y_w|x) - π_ref(y_w|x) - log π_θ(y_l|x) + π_ref(y_l|x)))]"
          }), " where y_w is the preferred response,.\ny_l is the dispreferred response, π_θ is the trained policy, π_ref is the reference policy, β controls how much the policy can deviate from the reference,.\nand σ is the sigmoid function. The loss increases when the model assigns higher probability to rejected responses relative to chosen ones. DPO is simpler,.\nmore stable, and faster than RLHF because it avoids training a separate reward model and the complex PPO optimization loop. It achieves comparable or.\nbetter alignment results with significantly less engineering complexity."]
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
      "data-qid": "ft07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you implement the DPO loss function?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The DPO loss function is implemented by: (1) for each pair of (chosen, rejected) responses, compute the log-probabilities of each response under the current policy (π_θ) and.\nthe reference policy (π_ref, which is frozen at initialization); (2) for each response, the log-probability is the sum of per-token log-probabilities (the model's predicted probability of each target token). Use the model's forward pass with labels to get the per-token log-probs efficiently;.\n(3) compute the implicit reward: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "reward = β — (log π_θ(y|x) - log π_ref(y|x))"
          }), " for both chosen and rejected responses; (4) the DPO loss per pair is: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "loss = -log(sigmoid(reward_chosen - reward_rejected))"
          }), ";.\n(5) average the loss over all pairs in the batch. Implementation in PyTorch: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "def dpo_loss(chosen_logps, rejected_logps, ref_chosen_logps, ref_rejected_logps, beta): chosen_rewards = beta * (chosen_logps - ref_chosen_logps);.\nrejected_rewards = beta * (rejected_logps - ref_rejected_logps); loss = -F.logsigmoid(chosen_rewards - rejected_rewards).mean(); return loss"
          }), ". The beta parameter (typically 0.1-0.5) controls how much the policy can deviate from the reference — higher beta = stronger constraint. The loss gradient pushes the policy to increase probability of chosen responses and.\ndecrease probability of rejected responses, balanced by the KL constraint from the reference."]
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
      "data-qid": "ft07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you create and curate preference datasets?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Preference datasets contain triples of (prompt, chosen_response, rejected_response) where chosen is preferred over rejected. Creation methods: (1) Human annotation — human raters compare two or.\nmore responses to the same prompt and select the better one. Use platforms like Scale AI, Surge, or internal raters. Each pair is rated by 3-5 raters for.\nreliability, with inter-rater agreement tracked; (2) AI feedback — use a stronger model (GPT-4, Claude) to compare responses from a weaker model. This is cheaper but.\nmay not capture human preferences accurately; (3) Implicit feedback — use production logs: responses that users upvote/thumbs-up become chosen, downvoted/thumbs-down become rejected. This provides real-world preference data but.\nmay be noisy; (4) Public datasets — Anthropic's HH-RLHF (helpful/harmless), OpenAI's WebGPT comparisons, Stanford's SHP (social media preferences). Curation: filter pairs where the chosen response is not clearly better (low annotator.\nagreement), balance for diversity (topic, difficulty, response style), and ensure the rejected response is plausible (not obviously wrong or nonsensical). A good preference dataset has 10K-100K pairs covering diverse scenarios. Data quality is critical — noise in preference labels directly degrades alignment quality."
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
      "data-qid": "ft07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does DPO compare with RLHF?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DPO and RLHF both align language models with human preferences but differ in approach. RLHF: (1) trains a separate reward model on preference data (a classifier that scores response quality);.\n(2) uses PPO (Proximal Policy Optimization) to optimize the policy against the reward model; (3) requires maintaining four models: policy, reference,.\nreward, value — requiring significant engineering and compute; (4) more complex training loop with advantage estimation, clipping, and KL penalty. DPO: (1) directly optimizes policy from preference pairs — no reward model needed;.\n(2) simpler training loop — just standard loss minimization on (chosen, rejected) pairs; (3) more stable training — no reward hacking (where the policy exploits reward model weaknesses);.\n(4) faster training — 2-3x faster than PPO because no reward model evaluation and no value function. Empirical results: DPO matches or.\nexceeds PPO on most alignment benchmarks (MT-Bench, Chatbot Arena) while being significantly simpler. DPO's main limitation: it needs on-policy preference data (responses from the current policy) for.\noptimal results, though off-policy data (from a different model) still works well. For most practical alignment tasks, DPO is the recommended approach."
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
      "data-qid": "ft07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the beta parameter in DPO and how do you tune it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The beta (β) parameter in DPO controls the KL divergence constraint — how much the trained policy can deviate from the reference policy. Higher β = stronger constraint = smaller deviation = less alignment but.\nless risk of degeneration. Lower β = weaker constraint = more alignment but risk of overfitting to preference data. Typical values: (1) β=0.1 — aggressive alignment,.\nused when the preference dataset is very high quality and diverse; (2) β=0.3 — recommended default, balances alignment and KL constraint;.\n(3) β=0.5 — conservative alignment, minimizes degeneration risk. Tuning β: (1) train with different β values (0.1, 0.3, 0.5) and evaluate on held-out preference pairs — measure how often the trained model prefers chosen vs rejected responses;.\n(2) measure KL divergence between trained and reference policy — target KL of 5-10 nats for typical alignment; evaluate general capability regression (MMLU,.\nHellaSwag) — high β preserves general capabilities better. The optimal β depends on dataset quality — noisy data needs higher β (more constraint),.\nclean data can use lower β (more alignment). The reference policy for KL computation is the initial policy before DPO training (typically the SFT model). The log-probability ratio β — (log π_θ - log π_ref) is interpreted as the implicit reward."
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
      "data-qid": "ft07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you implement DPO training with the TRL library?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DPO training with the TRL (Transformer Reinforcement Learning) library: (1) Install — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pip install trl peft transformers datasets accelerate bitsandbytes"
          }), "; (2) Load the base model (SFT model) and.\nreference model — typically the same model initially: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.bfloat16, device_map=\"auto\")"
          }), ". The reference model is loaded separately or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DPOTrainer"
          }), " creates it automatically;.\n(3) Prepare preference dataset — HuggingFace dataset with \"prompt\", \"chosen\", \"rejected\" columns. Tokenize each column with the same tokenizer; (4) Configure DPO arguments — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DPOConfig(output_dir=\"./dpo-out\",.\nbeta=0.1, learning_rate=5e-6 (lower than SFT because alignment is more delicate), per_device_train_batch_size=4, gradient_accumulation_steps=8, num_train_epochs=1, warmup_ratio=0.1, logging_steps=10, save_strategy=\"epoch\", fp16=True, max_length=1024, max_prompt_length=512)"
          }), "; (5) Initialize DPOTrainer — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DPOTrainer(model,.\nref_model, args, train_dataset, tokenizer=tokenizer)"
          }), " — the trainer handles per-token log-probability computation, loss calculation, and gradient updates; (6) Train — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trainer.train()"
          }), ". The DPOTrainer handles the complexity of computing log-probabilities for.\nboth chosen and rejected responses under both current and reference policies. Training typically takes 1-2 hours for 10K pairs on a single A100."]
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
      "data-qid": "ft07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you evaluate DPO-aligned models?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evaluating DPO-aligned models requires alignment-specific benchmarks: (1) Preference accuracy — on held-out preference pairs, measure how often the model assigns higher probability to the chosen response vs. the rejected response. A well-aligned model should prefer chosen responses >80% of the time;.\n(2) MT-Bench — multi-turn conversation quality judged by GPT-4. DPO typically improves MT-Bench scores by 0.2-0.5 points over the SFT base;.\n(3) AlpacaEval 2.0 — single-turn instruction following with length-controlled win rate against GPT-4. Measures how well the model follows instructions aligned with human preferences;.\n(4) Reward model score — if available, use an independent reward model to score the model's outputs. DPO should increase the reward score vs. the SFT base;.\n(5) Human evaluation — side-by-side comparison of DPO model vs. SFT base by human raters. Measure win rate; (6) Safety evaluation — test with harmful prompts to ensure alignment didn't reduce safety guardrails. Monitor: KL divergence from reference policy (should not exceed 10-15 nats for.\nstable training), reward accuracy on validation set, and general capability metrics (MMLU) to detect regression. DPO should improve alignment without significantly degrading general capabilities."
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
      "data-qid": "ft07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What are the failure modes of DPO training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Common DPO failure modes: (1) Reward hacking — the model learns to increase probability of chosen responses but degenerates (repeats phrases,.\nproduces generic output). Prevention: monitor KL divergence and set higher β; (2) Mode collapse — the model converges to a narrow distribution,.\nproducing similar responses for different prompts. Prevention: ensure diverse preference data and monitor response diversity metrics (distinct n-grams); (3) Overfitting to preference noise — if the preference dataset has inconsistent labels (chosen is not actually better),.\nthe model learns wrong preferences. Prevention: filter low-agreement pairs, use higher β, train for fewer epochs; (4) Catastrophic forgetting — DPO training degrades general capabilities. Prevention: mix in 10-20% SFT data during DPO training (DPO + SFT combined loss),.\nevaluate MMLU before and after; (5) Training instability — loss spikes or NaN values. Prevention: reduce learning rate (5e-7 to 5e-6 for.\nDPO, lower than SFT), enable gradient clipping, use bf16 instead of fp16; (6) Reference model mismatch — if the reference model differs significantly from the policy (e.g.,.\ndifferent architecture), the KL penalty may be mis-specified. Prevention: always load the SFT model as both policy and reference initializations. Monitor.\ntraining curves — loss should decrease steadily. If loss oscillates or increases, reduce learning rate or increase β."
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
      "data-qid": "ft07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you combine DPO with SFT training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Combining DPO with SFT training is the standard two-stage alignment pipeline: Stage 1 — SFT (Supervised Fine-Tuning): (1) train the base model on high-quality (instruction,.\nresponse) pairs to teach it to follow instructions; (2) use standard cross-entropy loss on chosen responses only; (3) this produces the SFT model that can follow instructions but.\nmay not align with nuanced human preferences. Stage 2 — DPO: (1) load the SFT model as both the policy and.\nreference model; (2) train on (prompt, chosen, rejected) triples using DPO loss; (3) this shifts the policy toward preferred responses and.\naway from dispreferred ones. Benefits: the SFT stage ensures the model can generate coherent responses in the target format, and the DPO stage aligns response quality with human preferences. Without SFT first,.\nDPO may struggle because the model can't generate good enough responses to compare. Combined training: some implementations mix SFT loss and.\nDPO loss in a single stage: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "L = L_DPO + λ * L_SFT"
          }), " where λ controls the SFT strength (typically 0.1-0.5). The SFT component provides a grounding signal that prevents the model from drifting too far. This combined approach is simpler (one training run) but.\nmay not be as effective as the two-stage approach for complex alignment tasks."]
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
      "data-qid": "ft07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What are variants of DPO?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DPO has several variants addressing different limitations: (1) KTO (Kahneman-Tversky Optimization) — uses only one response per prompt (chosen or rejected) instead of pairs. More realistic for.\nproduction data where you might only have positive or negative feedback, not both. Loss function uses a reference point based on the average reward;.\n(2) IPO (Identity Preference Optimization) — reformulates DPO as a regression problem, removing the dependency on the sigmoid function. More stable when preference pairs are similar in quality;.\n(3) ORPO (Odds Ratio Preference Optimization) — combines SFT and preference optimization into a single training stage without a reference model. Uses a ratio of odds (probability of chosen vs. rejected) as the training signal. Simpler than DPO because no reference model is needed;.\n(4) SimPO (Simple Preference Optimization) — uses average log-probability as the implicit reward instead of reward margin. Simplifies DPO by removing the reference model;.\n(5) CPO (Contrastive Preference Optimization) — adds a negative log-likelihood term to DPO loss to maintain generation quality. These variants typically improve on DPO in specific aspects (data efficiency,.\nstability, simplicity) while maintaining the core insight: direct optimization from preference pairs without a reward model. For most production use cases,.\nstandard DPO with β=0.1-0.3 works well as a starting point."
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
      "data-qid": "ft-s7-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What does DPO directly optimize?"]
      }), "\nA. A reward model\nB. The policy from preferences\nC. The value function\nD. The discriminator\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s7-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " How many models does DPO require during training?"]
      }), "\nA. 1 (policy)\nB. 2 (policy + reference)\nC. 3 (policy + reward + value)\nD. 4 (policy + reference + reward + critic)\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s7-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What does the β parameter control?"]
      }), "\nA. Learning rate\nB. Alignment strength — how much policy can diverge from reference\nC. Batch size\nD. Weight decay\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s7-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is a preference pair?"]
      }), "\nA. A prompt and a response\nB. A prompt with a chosen and rejected response\nC. Two models to compare\nD. Two loss functions\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s7-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is the primary evaluation metric for DPO?"]
      }), "\nA. Perplexity\nB. Win rate against base model\nC. Training loss\nD. Model size\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement the DPO loss function from scratch. Test with synthetic logprobs where chosen has higher probability than rejected, and verify the loss is lower when the margin is larger."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a preference dataset from pairwise comparisons. Given a prompt and 4 responses with scores [0.9, 0.7, 0.4, 0.1], generate all valid preference pairs and filter by margin >= 0.3."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a DPO training loop with β=0.15, batch_size=8, 3 epochs. Track loss, reward margin, and accuracy. Show learning curves."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a win rate calculator that compares DPO-tuned vs base model outputs. Use simple quality proxies (length, completeness, formatting) to determine winners."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare DPO (β=0.1) vs DPO (β=0.5) on a small synthetic dataset. Report the reward margin, win rate, and response diversity for each setting. Discuss the tr"
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
            children: "Explain the core idea of DPO & Preference Tuning in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates DPO & Preference Tuning."
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
            children: "Describe a production bug caused by misunderstanding DPO & Preference Tuning. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on DPO & Preference Tuning from 10 users to 10 million?"
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
            children: "Compare DPO & Preference Tuning with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on DPO & Preference Tuning."
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
            children: "How does DPO & Preference Tuning behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of DPO & Preference Tuning run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of DPO & Preference Tuning that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name DPO & Preference Tuning explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using DPO & Preference Tuning\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies DPO & Preference Tuning to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside DPO & Preference Tuning (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of DPO & Preference Tuning and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a DPO & Preference Tuning-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic DPO & Preference Tuning interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply DPO & Preference Tuning in production today?"
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
        }), " DPO & Preference Tuning builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for DPO & Preference Tuning before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for DPO & Preference Tuning is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for DPO & Preference Tuning in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the DPO & Preference Tuning chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers DPO & Preference Tuning is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to DPO & Preference Tuning is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing DPO & Preference Tuning is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug DPO & Preference Tuning issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to DPO & Preference Tuning in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving DPO & Preference Tuning that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of DPO & Preference Tuning is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain DPO & Preference Tuning in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for DPO & Preference Tuning and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of DPO & Preference Tuning on an empty input?"
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
            children: "Complete Medium exercises, explain DPO & Preference Tuning to someone else"
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
        children: "Always write a one-line example of DPO & Preference Tuning from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered DPO & Preference Tuning when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining DPO & Preference Tuning twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own DPO & Preference Tuning snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of DPO & Preference Tuning listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link DPO & Preference Tuning to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of DPO & Preference Tuning by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain DPO & Preference Tuning to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of DPO & Preference Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on DPO & Preference Tuning (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real DPO & Preference Tuning problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements DPO & Preference Tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for DPO & Preference Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on DPO & Preference Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how DPO & Preference Tuning fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how DPO & Preference Tuning is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where DPO & Preference Tuning is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of DPO & Preference Tuning, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is DPO & Preference Tuning asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DPO & Preference Tuning is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with DPO & Preference Tuning."
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
        children: "DPO & Preference Tuning emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for DPO & Preference Tuning today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about DPO & Preference Tuning — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around DPO & Preference Tuning changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing DPO & Preference Tuning."
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
        children: "DPO & Preference Tuning appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding DPO & Preference Tuning helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the DPO & Preference Tuning concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, DPO & Preference Tuning skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply DPO & Preference Tuning to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DPO & Preference Tuning is like a recipe"
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
        }), " — this chapter contributes the DPO & Preference Tuning skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-07dpoandpreferencetuning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of DPO & Preference Tuning in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-07dpoandpreferencetuning-flash2",
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
      "data-qid": "14finetuningpeft-07dpoandpreferencetuning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard DPO & Preference Tuning approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-07dpoandpreferencetuning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is DPO & Preference Tuning NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-07dpoandpreferencetuning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is DPO & Preference Tuning applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for DPO & Preference Tuning (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing DPO & Preference Tuning (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for DPO & Preference Tuning-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running DPO & Preference Tuning in production at scale"
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
        children: "Testing: pytest for unit tests of DPO & Preference Tuning code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on DPO & Preference Tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in DPO & Preference Tuning code."]
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
        }), " or your IDE's debugger to step through the DPO & Preference Tuning example code."]
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
        children: "Explain DPO & Preference Tuning in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of DPO & Preference Tuning."
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
        children: "Tell me about a time you debugged a DPO & Preference Tuning problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where DPO & Preference Tuning is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for DPO & Preference Tuning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core DPO & Preference Tuning logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain DPO & Preference Tuning without notes"
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
        }), ": a small team uses DPO & Preference Tuning daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": DPO & Preference Tuning patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": DPO & Preference Tuning principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": DPO & Preference Tuning shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect DPO & Preference Tuning to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/08-evaluating-fine-tuned-models",
        children: "Evaluating Fine-Tuned Models"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DPO & Preference Tuning, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of DPO & Preference Tuning depends on input size and distribution — always benchmark for your own data."
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