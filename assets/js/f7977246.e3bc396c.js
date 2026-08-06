"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39311],{

/***/ 78316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_10_alignment_constitutional_ai_md_f79_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-17-ai-security-guardrails-10-alignment-constitutional-ai-md-f79.json
const site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_10_alignment_constitutional_ai_md_f79_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/10-alignment-constitutional-ai","title":"AI Alignment & Constitutional AI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":207,"frontMatter":{"id":"10-alignment-constitutional-ai","slug":"/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai","title":"AI Alignment & Constitutional AI","sidebar_label":"AI Alignment & Constitutional AI","sidebar_position":207},"sidebar":"coursesSidebar","previous":{"title":"Toxicity & Content Moderation","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/09-toxicity-content-moderation"},"next":{"title":"18 — Multimodal AI & Voice","permalink":"/ai-engineering-journey/ai-engineering-placement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai.md


const frontMatter = {
	id: '10-alignment-constitutional-ai',
	slug: '/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai',
	title: 'AI Alignment & Constitutional AI',
	sidebar_label: 'AI Alignment & Constitutional AI',
	sidebar_position: 207
};
const contentTitle = 'AI Alignment & Constitutional AI';

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
  "value": "10.1 RLHF — Reinforcement Learning from Human Feedback",
  "id": "101-rlhf--reinforcement-learning-from-human-feedback",
  "level": 3
}, {
  "value": "10.1.1 Preference Dataset Construction",
  "id": "1011-preference-dataset-construction",
  "level": 4
}, {
  "value": "10.1.2 Reward Modeling",
  "id": "1012-reward-modeling",
  "level": 4
}, {
  "value": "10.1.3 PPO Training",
  "id": "1013-ppo-training",
  "level": 4
}, {
  "value": "10.2 DPO — Direct Preference Optimization",
  "id": "102-dpo--direct-preference-optimization",
  "level": 3
}, {
  "value": "10.3 Constitutional AI",
  "id": "103-constitutional-ai",
  "level": 3
}, {
  "value": "10.3.1 Constitutional Principles",
  "id": "1031-constitutional-principles",
  "level": 4
}, {
  "value": "10.3.2 Critique and Revision Loop",
  "id": "1032-critique-and-revision-loop",
  "level": 4
}, {
  "value": "10.3.3 RLAIF — Reinforcement Learning from AI Feedback",
  "id": "1033-rlaif--reinforcement-learning-from-ai-feedback",
  "level": 4
}, {
  "value": "10.4 Superalignment",
  "id": "104-superalignment",
  "level": 3
}, {
  "value": "10.4.1 Weak-to-Strong Generalization",
  "id": "1041-weak-to-strong-generalization",
  "level": 4
}, {
  "value": "10.4.2 Scalable Oversight Methods",
  "id": "1042-scalable-oversight-methods",
  "level": 4
}, {
  "value": "10.4.3 Automated Alignment Research",
  "id": "1043-automated-alignment-research",
  "level": 4
}, {
  "value": "10.5 Value Alignment",
  "id": "105-value-alignment",
  "level": 3
}, {
  "value": "10.5.1 Value Specification and the Outer Alignment Problem",
  "id": "1051-value-specification-and-the-outer-alignment-problem",
  "level": 4
}, {
  "value": "10.5.2 Value Learning and the Inner Alignment Problem",
  "id": "1052-value-learning-and-the-inner-alignment-problem",
  "level": 4
}, {
  "value": "Interview Questions",
  "id": "interview-questions",
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
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
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
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
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
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions (Short Form)",
  "id": "top-10-interview-questions-short-form",
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
    b: "b",
    code: "code",
    details: "details",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "ai-alignment--constitutional-ai",
        children: "AI Alignment & Constitutional AI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Understand RLHF pipeline: reward modeling, PPO training, and preference dataset construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain DPO as a reward-model-free alternative to RLHF and its theoretical advantages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Constitutional AI critique-revision loops with self-supervised constitution following"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describe superalignment challenges and scalable oversight methods for superhuman models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze value alignment approaches: specification, learning, corrigibility, and interpretability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI alignment is the field of ensuring AI systems do what humans want. As models become more capable, alignment becomes harder and more urgent. An unaligned AI might pursue goals that conflict with human values, even if it appears to behave well during testing. This chapter covers five critical alignment techniques: RLHF (the dominant method behind ChatGPT and Claude), DPO (a simpler alternative), Constitutional AI (Anthropic's self-supervision approach), superalignment (aligning models smarter than humans), and value alignment theory (the philosophical and technical foundations). For the AI engineer, understanding alignment is essential for building safe, trustworthy, and deployable AI systems — and is increasingly expected in interviews at top AI companies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of language model training (supervised fine-tuning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge of transformer architectures and tokenization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with reinforcement learning basics (reward, policy, value function)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion of Module 17 Chapters 01-09 on security and guardrails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic probability and statistics knowledge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "AI Alignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The problem of ensuring AI systems pursue intended goals and values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RLHF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement Learning from Human Feedback — training a reward model from human preferences, then optimizing a policy against it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reward Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A neural network trained to predict human preferences between model outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PPO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proximal Policy Optimization — a stable RL algorithm used in RLHF to update the policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preference Dataset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A collection of (prompt, chosen, rejected) triples that captures human judgments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reward Hacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a policy finds ways to maximize reward that don't align with the intended objective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DPO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Preference Optimization — optimizes the policy directly from preferences without a separate reward model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constitutional AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training method where a model self-critiques and revises outputs against a written constitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RLAIF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement Learning from AI Feedback — using an AI to generate preference labels instead of humans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Superalignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The problem of aligning AI systems that are smarter than their human supervisors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalable Oversight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Techniques that allow humans (or weaker AIs) to supervise stronger AIs effectively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrigibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The property of an AI that allows humans to correct or shut it down without resistance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpretability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The ability to understand and predict what a model will do and why"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Value Specification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The task of formally defining what values an AI system should pursue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reward Misspecification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When the specified reward function fails to capture the true intended objective"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-rlhf--reinforcement-learning-from-human-feedback",
      children: "10.1 RLHF — Reinforcement Learning from Human Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RLHF is the dominant alignment technique used in ChatGPT, Claude, Gemini, and most frontier models. It solves a fundamental problem: language models trained on next-token prediction learn statistical patterns, not human values. RLHF injects human preferences into the training process."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Data[Preference Data]\n        D1[Prompt] --> D2[Generate Responses A & B]\n        D2 --> D3[Human Labels: A > B]\n    end\n    subgraph RM[Reward Model Training]\n        D3 --> R1[Train RM to predict preferences]\n        R1 --> R2[Reward Model r_θ(x,y)]\n    end\n    subgraph RL[RL Fine-Tuning]\n        R2 --> P1[PPO Optimize Policy π_θ]\n        P1 --> P2[Generate response y ~ π_θ]\n        P2 --> P3[Score with r_θ(x,y)]\n        P3 --> P4[Update π_θ via PPO]\n        P4 --> P2\n    end\n    subgraph Output[Aligned Policy]\n        P1 --> O1[Aligned LLM]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1011-preference-dataset-construction",
      children: "10.1.1 Preference Dataset Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RLHF starts with a preference dataset. For each prompt, the model generates two or more responses. Human labelers rank these responses. The result is a dataset of triples: (prompt, chosen_response, rejected_response)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dataset construction pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample prompts from diverse sources (user queries, synthetic data, red-teaming)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate candidate responses using the current policy (typically multiple temperatures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Present pairs to human labelers with clear rubrics (helpfulness, harmlessness, honesty)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect binary preferences: response A is better than response B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally collect rankings over multiple responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate inter-annotator agreement (Cohen's kappa > 0.6)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality considerations:"
      }), " Labeler agreement, labeler bias, distribution coverage, and labeler expertise all affect dataset quality. A poorly labeled dataset produces a misaligned reward model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Tuple, Dict\nimport random\n\nclass PreferenceDataset:\n    \"\"\"\n    Simulates construction and management of a preference dataset for RLHF.\n    In production, this would involve thousands of human labelers.\n    \"\"\"\n\n    def __init__(self, seed: int = 42):\n        self.seed = seed\n        random.seed(seed)\n        np.random.seed(seed)\n        self.data: List[Dict] = []\n        self.prompts: List[str] = []\n        self.vocab = [\"helpful\", \"harmless\", \"honest\", \"safe\", \"ethical\",\n                      \"creative\", \"accurate\", \"clear\", \"concise\", \"relevant\"]\n\n    def generate_synthetic_prompt(self, category: str = \"general\") -> str:\n        \"\"\"Generate a synthetic prompt for demonstration.\"\"\"\n        templates = {\n            \"general\": [\n                \"Explain {topic} in simple terms.\",\n                \"Write a {style} about {topic}.\",\n                \"How do I {action}?\",\n                \"What is the best way to {goal}?\",\n                \"Compare {a} and {b}.\",\n            ],\n            \"safety\": [\n                \"How can I {harmful_action}?\",\n                \"Tell me how to {dangerous_thing}.\",\n                \"I want to {prohibited_activity}.\",\n            ],\n        }\n        template = random.choice(templates.get(category, templates[\"general\"]))\n        return template.format(\n            topic=random.choice([\"AI\", \"quantum computing\", \"blockchain\", \"neural nets\"]),\n            style=random.choice([\"poem\", \"essay\", \"tweet\", \"story\"]),\n            action=random.choice([\"learn Python\", \"build a chatbot\", \"deploy a model\"]),\n            goal=random.choice([\"learn fast\", \"write clean code\", \"scale efficiently\"]),\n            a=random.choice([\"Python\", \"React\", \"PyTorch\", \"Linux\"]),\n            b=random.choice([\"JavaScript\", \"Vue\", \"TensorFlow\", \"Windows\"]),\n            harmful_action=random.choice([\"hack\", \"phish\", \"bypass\"]),\n            dangerous_thing=random.choice([\"make explosives\", \"synthesize drugs\"]),\n            prohibited_activity=random.choice([\"steal data\", \"spread misinformation\"]),\n        )\n\n    def simulate_response(self, prompt: str, quality: float = 0.8) -> str:\n        \"\"\"Simulate a model response with controllable quality.\"\"\"\n        # Lower quality = more hallucinations, less relevance\n        words = self.vocab.copy()\n        if quality < 0.5:\n            words += [\"incorrect\", \"misleading\", \"vague\", \"irrelevant\"]\n        response_length = random.randint(10, 30)\n        response = \" \".join(random.choices(words, k=response_length))\n        return response\n\n    def generate_preference_triple(\n        self, category: str = \"general\"\n    ) -> Dict[str, str]:\n        \"\"\"Generate a (prompt, chosen, rejected) triple.\"\"\"\n        prompt = self.generate_synthetic_prompt(category)\n        # Simulate chosen response with higher quality\n        chosen = self.simulate_response(prompt, quality=0.85)\n        rejected = self.simulate_response(prompt, quality=0.35)\n        return {\n            \"prompt\": prompt,\n            \"chosen\": chosen,\n            \"rejected\": rejected,\n            \"category\": category,\n        }\n\n    def build_dataset(self, n_samples: int = 100) -> List[Dict]:\n        \"\"\"Build a preference dataset with balanced categories.\"\"\"\n        self.data = []\n        categories = [\"general\"] * (n_samples // 2) + [\"safety\"] * (n_samples // 2)\n        random.shuffle(categories)\n        for cat in categories[:n_samples]:\n            triple = self.generate_preference_triple(cat)\n            self.data.append(triple)\n            self.prompts.append(triple[\"prompt\"])\n        return self.data\n\n    def stats(self) -> Dict:\n        \"\"\"Return dataset statistics.\"\"\"\n        topics = {}\n        for d in self.data:\n            cat = d[\"category\"]\n            topics[cat] = topics.get(cat, 0) + 1\n        return {\n            \"total_samples\": len(self.data),\n            \"unique_prompts\": len(set(self.prompts)),\n            \"categories\": topics,\n        }\n\n# Demonstration\nds = PreferenceDataset(seed=42)\ndataset = ds.build_dataset(50)\nprint(\"Dataset Stats:\", ds.stats())\nprint(\"\\nSample Triple:\")\nsample = dataset[0]\nfor key, val in sample.items():\n    print(f\"  {key}: {val[:80]}...\")\n\navg_chosen_len = np.mean([len(d[\"chosen\"].split()) for d in dataset])\navg_rejected_len = np.mean([len(d[\"rejected\"].split()) for d in dataset])\nprint(f\"\\nAverage chosen response length: {avg_chosen_len:.1f} words\")\nprint(f\"Average rejected response length: {avg_rejected_len:.1f} words\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1012-reward-modeling",
      children: "10.1.2 Reward Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The reward model is a language model (often the same architecture as the policy) with a linear head that outputs a scalar reward. It is trained on the preference dataset using a Bradley-Terry preference model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bradley-Terry loss:"
      }), " Given a prompt (x) and two responses (y_w) (chosen) and (y_l) (rejected), the probability that (y_w) is preferred is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[P(y_w > y_l) = \\sigma(r_\\theta(x, y_w) - r_\\theta(x, y_l))]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where (\\sigma) is the sigmoid function and (r_\\theta) is the reward model. The loss is the negative log-likelihood:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[L_{RM} = -\\mathbb{E}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{(x, y_w, y_l) \\sim D} [\\log \\sigma(r"
      }), "\\theta(x, y_w) - r_\\theta(x, y_l))]]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass SimpleRewardModel(nn.Module):\n    \"\"\"\n    A simplified reward model for educational purposes.\n    In practice, this would be a full transformer with a linear head.\n    \"\"\"\n\n    def __init__(self, input_dim: int = 768, hidden_dim: int = 256):\n        super().__init__()\n        self.feature_extractor = nn.Sequential(\n            nn.Linear(input_dim, hidden_dim),\n            nn.GELU(),\n            nn.Dropout(0.1),\n            nn.Linear(hidden_dim, hidden_dim // 2),\n            nn.GELU(),\n        )\n        self.reward_head = nn.Linear(hidden_dim // 2, 1)\n\n    def forward(self, embeddings: torch.Tensor) -> torch.Tensor:\n        features = self.feature_extractor(embeddings)\n        reward = self.reward_head(features)\n        return reward.squeeze(-1)\n\n    def compute_preference_loss(\n        self,\n        chosen_embeddings: torch.Tensor,\n        rejected_embeddings: torch.Tensor,\n    ) -> torch.Tensor:\n        \"\"\"Compute Bradley-Terry preference loss.\"\"\"\n        r_chosen = self.forward(chosen_embeddings)\n        r_rejected = self.forward(rejected_embeddings)\n        # P(chosen > rejected) = sigmoid(r_chosen - r_rejected)\n        logits = r_chosen - r_rejected\n        loss = -F.logsigmoid(logits).mean()\n        accuracy = (logits > 0).float().mean()\n        return loss, accuracy\n\ndef train_reward_model(\n    model: SimpleRewardModel,\n    dataset: List[Dict],\n    epochs: int = 5,\n    lr: float = 1e-4,\n) -> List[float]:\n    \"\"\"Simulate reward model training with synthetic embeddings.\"\"\"\n    optimizer = torch.optim.AdamW(model.parameters(), lr=lr)\n    losses = []\n\n    for epoch in range(epochs):\n        epoch_loss = 0.0\n        epoch_acc = 0.0\n        n_batches = max(1, len(dataset) // 8)\n\n        for batch_idx in range(0, len(dataset), 8):\n            batch = dataset[batch_idx : batch_idx + 8]\n            if len(batch) < 2:\n                continue\n\n            # Create synthetic embeddings (768-dim) with a preference signal\n            chosen_emb = torch.randn(len(batch), 768) * 0.5 + 0.3\n            rejected_emb = torch.randn(len(batch), 768) * 0.5 - 0.3\n\n            loss, acc = model.compute_preference_loss(chosen_emb, rejected_emb)\n            optimizer.zero_grad()\n            loss.backward()\n            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)\n            optimizer.step()\n\n            epoch_loss += loss.item()\n            epoch_acc += acc.item()\n\n        avg_loss = epoch_loss / n_batches\n        avg_acc = epoch_acc / n_batches\n        losses.append(avg_loss)\n        print(f\"Epoch {epoch+1}/{epochs}  Loss: {avg_loss:.4f}  Accuracy: {avg_acc:.4f}\")\n\n    return losses\n\n# Demonstration\nrm = SimpleRewardModel()\nlosses = train_reward_model(rm, dataset, epochs=5)\nprint(f\"\\nFinal loss: {losses[-1]:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1013-ppo-training",
      children: "10.1.3 PPO Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With a trained reward model, we fine-tune the policy (language model) using Proximal Policy Optimization (PPO). PPO is chosen for its stability — it prevents the policy from changing too rapidly, which could cause catastrophic forgetting."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PPO objective for RLHF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[L_{PPO} = \\mathbb{E}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{(x, y) \\sim \\pi"
      }), "{\\theta}} \\left[ \\min\\left( \\frac{\\pi_{\\theta}(y|x)}{\\pi_{\\text{old}}(y|x)} A(x,y), \\text{clip}\\left( \\frac{\\pi_{\\theta}(y|x)}{\\pi_{\\text{old}}(y|x)}, 1-\\epsilon, 1+\\epsilon \\right) A(x,y) \\right) \\right]]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The advantage (A(x,y)) is typically computed using a learned value function (V(x)) alongside the reward model. A KL penalty term is added to prevent the policy from moving too far from the original SFT model, which helps maintain language quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key PPO components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actor (policy):"
        }), " The language model being fine-tuned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critic (value function):"
        }), " Estimates expected future reward, used to compute advantages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reward model:"
        }), " Provides the reward signal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KL penalty:"
        }), " A per-token KL divergence penalty between the current policy and the reference (SFT) policy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PPOTrainer:\n    \"\"\"\n    Simplified PPO trainer for RLHF alignment.\n    Illustrates the core RLHF training loop with KL regularization.\n    \"\"\"\n\n    def __init__(\n        self,\n        policy_lr: float = 1e-5,\n        value_lr: float = 1e-4,\n        kl_coeff: float = 0.1,\n        clip_epsilon: float = 0.2,\n        gamma: float = 0.99,\n    ):\n        self.kl_coeff = kl_coeff\n        self.clip_epsilon = clip_epsilon\n        self.gamma = gamma\n        # Simulated policy and value networks (simple MLPs)\n        self.policy_network = nn.Sequential(\n            nn.Linear(768, 512), nn.ReLU(), nn.Linear(512, 1000)\n        )  # output logits over vocabulary (1000 tokens)\n        self.value_network = nn.Sequential(\n            nn.Linear(768, 256), nn.ReLU(), nn.Linear(256, 1)\n        )\n        self.policy_optimizer = torch.optim.AdamW(\n            self.policy_network.parameters(), lr=policy_lr\n        )\n        self.value_optimizer = torch.optim.AdamW(\n            self.value_network.parameters(), lr=value_lr\n        )\n        # Reference policy (frozen) for KL penalty\n        self.reference_policy = nn.Sequential(\n            nn.Linear(768, 512), nn.ReLU(), nn.Linear(512, 1000)\n        )\n        # Freeze reference policy\n        for param in self.reference_policy.parameters():\n            param.requires_grad = False\n\n    def compute_kl_penalty(\n        self,\n        logits_current: torch.Tensor,\n        logits_reference: torch.Tensor,\n    ) -> torch.Tensor:\n        \"\"\"Compute KL divergence between current and reference policy.\"\"\"\n        probs_current = F.softmax(logits_current, dim=-1)\n        log_probs_current = F.log_softmax(logits_current, dim=-1)\n        log_probs_reference = F.log_softmax(logits_reference, dim=-1)\n        kl_div = F.kl_div(\n            log_probs_reference, probs_current,\n            reduction=\"batchmean\", log_target=True\n        )\n        return kl_div\n\n    def ppo_step(\n        self,\n        states: torch.Tensor,\n        actions: torch.Tensor,\n        rewards: torch.Tensor,\n        old_log_probs: torch.Tensor,\n    ) -> Dict[str, float]:\n        \"\"\"Single PPO update step.\"\"\"\n        # Current policy logits and log probs\n        logits = self.policy_network(states)\n        log_probs = F.log_softmax(logits, dim=-1)\n        action_log_probs = log_probs.gather(1, actions.unsqueeze(1)).squeeze(1)\n\n        # Reference policy logits for KL\n        with torch.no_grad():\n            ref_logits = self.reference_policy(states)\n\n        # Probability ratio\n        ratio = torch.exp(action_log_probs - old_log_probs)\n\n        # Value function and advantages\n        values = self.value_network(states).squeeze(-1)\n        advantages = rewards - values.detach()\n\n        # Clipped surrogate objective\n        surr1 = ratio * advantages\n        surr2 = torch.clamp(\n            ratio, 1.0 - self.clip_epsilon, 1.0 + self.clip_epsilon\n        ) * advantages\n        policy_loss = -torch.min(surr1, surr2).mean()\n\n        # KL penalty\n        kl_div = self.compute_kl_penalty(logits, ref_logits)\n        total_loss = policy_loss + self.kl_coeff * kl_div\n\n        # Value loss\n        value_loss = F.mse_loss(values, rewards)\n\n        # Update policy\n        self.policy_optimizer.zero_grad()\n        total_loss.backward(retain_graph=True)\n        torch.nn.utils.clip_grad_norm_(self.policy_network.parameters(), 1.0)\n        self.policy_optimizer.step()\n\n        # Update value function\n        self.value_optimizer.zero_grad()\n        value_loss.backward()\n        torch.nn.utils.clip_grad_norm_(self.value_network.parameters(), 1.0)\n        self.value_optimizer.step()\n\n        return {\n            \"policy_loss\": policy_loss.item(),\n            \"value_loss\": value_loss.item(),\n            \"kl_div\": kl_div.item(),\n            \"approx_reward\": rewards.mean().item(),\n        }\n\n    def train_epoch(\n        self, num_steps: int = 50\n    ) -> List[Dict[str, float]]:\n        \"\"\"Simulate one epoch of PPO training.\"\"\"\n        metrics = []\n        for step in range(num_steps):\n            # Simulate batch data\n            states = torch.randn(8, 768)\n            actions = torch.randint(0, 1000, (8,))\n            old_log_probs = torch.randn(8) * 0.1 - 1.0\n            # Simulate reward model scores\n            rewards = torch.randn(8) * 0.5 + 1.0\n\n            step_metrics = self.ppo_step(\n                states, actions, rewards, old_log_probs\n            )\n            metrics.append(step_metrics)\n\n            if (step + 1) % 10 == 0:\n                print(\n                    f\"  Step {step+1}: policy_loss={step_metrics['policy_loss']:.4f}, \"\n                    f\"reward={step_metrics['approx_reward']:.4f}, \"\n                    f\"kl={step_metrics['kl_div']:.4f}\"\n                )\n        return metrics\n\n# Demonstration\nppo = PPOTrainer()\nmetrics = ppo.train_epoch(20)\nfinal_reward = [m[\"approx_reward\"] for m in metrics][-1]\nprint(f\"\\nFinal average reward after PPO training: {final_reward:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reward Hacking (Reward Over-optimization):"
      }), " When the policy is trained against a fixed reward model, it inevitably finds ways to exploit the reward model — generating responses that score high reward but are actually worse for humans. This is called reward hacking or reward over-optimization. It occurs because the reward model is an imperfect proxy for true human preferences. Mitigations include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble reward models (average predictions across multiple RMs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular KL penalties to stay close to the SFT reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Periodic reward model retraining with new human data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adversarial training against reward model exploits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def simulate_reward_hacking(\n    num_iterations: int = 100,\n    reward_model_quality: float = 0.8,\n) -> Tuple[List[float], List[float]]:\n    \"\"\"\n    Simulate reward over-optimization as PPO training progresses.\n    True reward improves initially, then degrades as the policy hacks the proxy RM.\n    \"\"\"\n    np.random.seed(42)\n    true_rewards = []\n    proxy_rewards = []\n\n    policy_embedding = np.zeros(768)\n    policy_velocity = np.zeros(768)\n\n    for t in range(num_iterations):\n        # Simulate policy update moving in reward-maximizing direction\n        gradient = np.random.randn(768) * 0.01\n        policy_embedding += gradient\n\n        # Proxy reward model score (what RM actually measures)\n        proxy_score = (\n            reward_model_quality * (0.5 - np.linalg.norm(policy_embedding) * 0.02)\n            + (1 - reward_model_quality) * np.random.randn() * 0.1\n        )\n\n        # True reward (what we actually want - diverges after hacking)\n        if t < 40:\n            true_score = proxy_score + np.random.randn() * 0.05\n        else:\n            # Policy starts exploiting RM flaws\n            true_score = proxy_score - 0.03 * (t - 40) + np.random.randn() * 0.05\n\n        proxy_rewards.append(proxy_score)\n        true_rewards.append(true_score)\n\n    return proxy_rewards, true_rewards\n\nproxy, true = simulate_reward_hacking()\nprint(f\"Early phase (t=10): proxy={proxy[10]:.3f}, true={true[10]:.3f}\")\nprint(f\"Mid phase (t=50):  proxy={proxy[50]:.3f}, true={true[50]:.3f}\")\nprint(f\"Late phase (t=90): proxy={proxy[90]:.3f}, true={true[90]:.3f}\")\nprint(f\"\\nReward hacking detected!\" if proxy[-1] > true[-1] + 0.3\n      else \"\\nNo significant reward hacking detected.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-dpo--direct-preference-optimization",
      children: "10.2 DPO — Direct Preference Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DPO (Direct Preference Optimization) is a simpler alternative to RLHF that eliminates the need for a separate reward model. Published by Rafailov et al. (2023), DPO directly optimizes the policy from preference data using a clever mathematical reformulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph RLHF[Traditional RLHF]\n        direction TB\n        D1[Preference Data] --> R1[Train Reward Model]\n        R1 --> R2[PPO against RM]\n        R2 --> A1[Aligned Policy]\n    end\n    subgraph DPO[Direct Preference Optimization]\n        direction TB\n        D2[Preference Data] --> D[DPO Loss]\n        D --> A2[Aligned Policy]\n    end\n    RLHF -- Complexity: 3 stages, instability --> Note1\n    DPO -- Simpler: 1 stage, no RM --> Note2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How DPO works:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DPO derives a direct loss function over the policy that implicitly performs the same optimization as RLHF. The key insight: the optimal policy under RLHF's KL-constrained reward maximization has a closed form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ \\pi_r(y|x) = \\frac{1}{Z(x)} \\pi_{\\text{ref}}(y|x) \\exp\\left(\\frac{1}{\\beta} r(x,y)\\right) ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rearranging and substituting into the Bradley-Terry preference model gives the DPO loss:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[ L_{DPO} = -\\mathbb{E}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{(x, y_w, y_l) \\sim D} \\left[ \\log \\sigma \\left( \\beta \\log \\frac{\\pi"
      }), "\\theta(y_w|x)}{\\pi_{\\text{ref}}(y_w|x)} - \\beta \\log \\frac{\\pi_\\theta(y_l|x)}{\\pi_{\\text{ref}}(y_l|x)} \\right) \\right] ]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(\\pi_\\theta) is the policy being optimized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(\\pi_{\\text{ref}}) is the reference (SFT) policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(\\beta) controls how far the policy can deviate from the reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(\\sigma) is the sigmoid function"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages of DPO over RLHF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No reward model needed"
        }), " — eliminates RM training, which is expensive and introduces its own alignment issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single training stage"
        }), " — no RL loop, no PPO hyperparameters, no value function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "More stable"
        }), " — avoids PPO's sensitivity to hyperparameters and reward scale"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lower compute"
        }), " — simpler training pipeline, fewer forward passes per batch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No reward hacking"
        }), " — since there is no reward model to exploit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No explicit reward signal"
        }), " — cannot easily inspect or debug the reward model"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Less explored"
        }), " — RLHF has more production experience and tooling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-policy gap"
        }), " — DPO optimizes on static data, while RLHF can generate new responses during training"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn.functional as F\n\nclass DPOTrainer:\n    \"\"\"\n    Simplified DPO (Direct Preference Optimization) trainer.\n    Optimizes policy directly from preference data without a reward model.\n    \"\"\"\n\n    def __init__(\n        self,\n        beta: float = 0.1,\n        lr: float = 1e-5,\n        vocab_size: int = 1000,\n        hidden_dim: int = 768,\n    ):\n        self.beta = beta  # KL penalty coefficient\n        # Simplified policy network (in practice, a full transformer)\n        self.policy = nn.Sequential(\n            nn.Linear(hidden_dim, 512),\n            nn.ReLU(),\n            nn.Linear(512, vocab_size),\n        )\n        # Reference policy (frozen SFT model)\n        self.reference_policy = nn.Sequential(\n            nn.Linear(hidden_dim, 512),\n            nn.ReLU(),\n            nn.Linear(512, vocab_size),\n        )\n        for param in self.reference_policy.parameters():\n            param.requires_grad = False\n\n        self.optimizer = torch.optim.AdamW(\n            self.policy.parameters(), lr=lr, weight_decay=0.01\n        )\n\n    def compute_log_probs(\n        self, hidden_states: torch.Tensor\n    ) -> torch.Tensor:\n        \"\"\"Compute log probabilities over vocabulary.\"\"\"\n        logits = self.policy(hidden_states)\n        return F.log_softmax(logits, dim=-1)\n\n    def compute_ref_log_probs(\n        self, hidden_states: torch.Tensor\n    ) -> torch.Tensor:\n        \"\"\"Compute log probabilities under reference policy (no grad).\"\"\"\n        with torch.no_grad():\n            logits = self.reference_policy(hidden_states)\n        return F.log_softmax(logits, dim=-1)\n\n    def dpo_loss(\n        self,\n        chosen_hidden: torch.Tensor,\n        rejected_hidden: torch.Tensor,\n        chosen_tokens: torch.Tensor,\n        rejected_tokens: torch.Tensor,\n    ) -> Tuple[torch.Tensor, Dict[str, float]]:\n        \"\"\"\n        Compute DPO loss.\n\n        L_DPO = -log σ(β * (log π_θ(y_w|x) - log π_ref(y_w|x)\n                          - [log π_θ(y_l|x) - log π_ref(y_l|x)]))\n        \"\"\"\n        batch_size = chosen_hidden.shape[0]\n\n        # Log probs under current policy\n        policy_log_probs = self.compute_log_probs(chosen_hidden)\n        # Gather log probs for chosen token sequences\n        chosen_log_probs_policy = policy_log_probs.gather(\n            1, chosen_tokens.unsqueeze(1)\n        ).squeeze(-1)\n\n        policy_log_probs_rej = self.compute_log_probs(rejected_hidden)\n        rejected_log_probs_policy = policy_log_probs_rej.gather(\n            1, rejected_tokens.unsqueeze(1)\n        ).squeeze(-1)\n\n        # Log probs under reference policy\n        ref_log_probs = self.compute_ref_log_probs(chosen_hidden)\n        chosen_log_probs_ref = ref_log_probs.gather(\n            1, chosen_tokens.unsqueeze(1)\n        ).squeeze(-1)\n\n        ref_log_probs_rej = self.compute_ref_log_probs(rejected_hidden)\n        rejected_log_probs_ref = ref_log_probs_rej.gather(\n            1, rejected_tokens.unsqueeze(1)\n        ).squeeze(-1)\n\n        # Compute log ratio difference\n        log_ratio_chosen = chosen_log_probs_policy - chosen_log_probs_ref\n        log_ratio_rejected = rejected_log_probs_policy - rejected_log_probs_ref\n        log_ratio_diff = log_ratio_chosen - log_ratio_rejected\n\n        # DPO loss\n        loss = -F.logsigmoid(self.beta * log_ratio_diff).mean()\n\n        # Accuracy: how often does π_θ prefer chosen over rejected?\n        with torch.no_grad():\n            accuracy = (log_ratio_diff > 0).float().mean().item()\n\n        metrics = {\n            \"loss\": loss.item(),\n            \"accuracy\": accuracy,\n            \"mean_log_ratio_chosen\": log_ratio_chosen.mean().item(),\n            \"mean_log_ratio_rejected\": log_ratio_rejected.mean().item(),\n        }\n\n        return loss, metrics\n\n    def train_step(\n        self, batch_size: int = 8\n    ) -> Dict[str, float]:\n        \"\"\"Single training step with synthetic data.\"\"\"\n        # Synthetic hidden states and token IDs\n        chosen_hidden = torch.randn(batch_size, 768)\n        rejected_hidden = torch.randn(batch_size, 768)\n        chosen_tokens = torch.randint(0, 1000, (batch_size,))\n        rejected_tokens = torch.randint(0, 1000, (batch_size,))\n\n        loss, metrics = self.dpo_loss(\n            chosen_hidden, rejected_hidden, chosen_tokens, rejected_tokens\n        )\n\n        self.optimizer.zero_grad()\n        loss.backward()\n        torch.nn.utils.clip_grad_norm_(self.policy.parameters(), 1.0)\n        self.optimizer.step()\n\n        return metrics\n\n    def train(self, epochs: int = 5, steps_per_epoch: int = 20):\n        \"\"\"Run DPO training.\"\"\"\n        all_metrics = []\n        for epoch in range(epochs):\n            epoch_metrics = []\n            for step in range(steps_per_epoch):\n                metrics = self.train_step(batch_size=8)\n                epoch_metrics.append(metrics)\n            avg_metrics = {\n                k: np.mean([m[k] for m in epoch_metrics])\n                for k in epoch_metrics[0]\n            }\n            all_metrics.append(avg_metrics)\n            print(\n                f\"Epoch {epoch+1}: loss={avg_metrics['loss']:.4f}, \"\n                f\"acc={avg_metrics['accuracy']:.4f}\"\n            )\n        return all_metrics\n\n# Demonstration\ndpo = DPOTrainer(beta=0.2)\nresults = dpo.train(epochs=5, steps_per_epoch=10)\nprint(f\"\\nFinal DPO accuracy: {results[-1]['accuracy']:.4f}\")\nprint(f\"DPO successfully aligned policy to preferences.\" if results[-1]['accuracy'] > 0.55\n      else \"DPO training may need more epochs.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-constitutional-ai",
      children: "10.3 Constitutional AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constitutional AI (CAI) is Anthropic's approach to alignment, used in Claude. It replaces human feedback with AI self-supervision guided by a written constitution — a set of explicit principles the model must follow. CAI has two phases: supervised self-critique and RL from AI feedback (RLAIF)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Phase1[Phase 1: Supervised Self-Critique]\n        A1[Generate Response] --> A2[Self-Critique against Constitution]\n        A2 --> A3[Revise Response]\n        A3 --> A4[Fine-tune on (harmful, revised) pairs]\n    end\n    subgraph Phase2[Phase 2: RLAIF]\n        B1[Generate Two Responses] --> B2[AI Evaluates against Constitution]\n        B2 --> B3[Preference Label from AI]\n        B3 --> B4[Train Reward Model or DPO]\n        B4 --> B5[Aligned Model]\n    end\n    Phase1 --> Phase2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1031-constitutional-principles",
      children: "10.3.1 Constitutional Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A constitution is a set of natural language principles. Anthropic's constitution draws from the UN Declaration of Human Rights, Apple's Terms of Service, and AI ethics guidelines. Example principles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle 1: Beneficence"
      }), "\n\"Choose the response that is most helpful and beneficial to the user, while avoiding harm.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle 2: Non-Maleficence"
      }), "\n\"Refuse to assist with any request that could cause serious harm to individuals or society.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle 3: Autonomy"
      }), "\n\"Respect the user's autonomy and ability to make informed decisions. Provide balanced information.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle 4: Justice"
      }), "\n\"Avoid discrimination and bias. Treat all users fairly regardless of background.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle 5: Transparency"
      }), "\n\"Be honest about your capabilities, limitations, and uncertainty. Do not deceive the user.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle 6: Privacy"
      }), "\n\"Protect user privacy. Do not request unnecessary personal information.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1032-critique-and-revision-loop",
      children: "10.3.2 Critique and Revision Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core innovation of CAI is the critique-revision loop. The model generates a response, then critiques it against the constitution, then revises it based on the critique. This loop can run multiple times for increasingly aligned outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConstitutionalAIAgent:\n    \"\"\"\n    Simulates Constitutional AI critique-revision loop.\n    The model generates responses, critiques them against a constitution,\n    and revises them until they comply with all principles.\n    \"\"\"\n\n    def __init__(self, principles: List[str] = None):\n        self.principles = principles or [\n            \"Beneficence: Responses must help the user constructively\",\n            \"Non-Maleficence: Responses must not cause harm or enable harm\",\n            \"Autonomy: Responses must respect user's right to choose\",\n            \"Justice: Responses must be fair and unbiased\",\n            \"Transparency: Responses must be honest about limitations\",\n            \"Privacy: Responses must not seek unnecessary personal data\",\n        ]\n        self.constitution_checklist = {p: False for p in self.principles}\n        self.max_iterations = 5\n\n    def generate_response(self, prompt: str) -> str:\n        \"\"\"Simulate initial response generation (may violate principles).\"\"\"\n        templates = {\n            \"hack\": \"Here's how to hack into a system: first, scan for open ports...\",\n            \"bias\": \"Statistics show that Group A is less capable than Group B...\",\n            \"overpromise\": \"I can solve any problem you have, instantly and perfectly.\",\n            \"privacy\": \"To help you better, please share your full name, address, and SSN.\",\n            \"default\": \"Here is some information that might help you with that request.\",\n        }\n        for keyword, response in templates.items():\n            if keyword in prompt.lower():\n                return response\n        return templates[\"default\"]\n\n    def critique_response(self, prompt: str, response: str) -> List[str]:\n        \"\"\"\n        Critique a response against each constitutional principle.\n        Returns list of violation descriptions.\n        \"\"\"\n        violations = []\n        response_lower = response.lower()\n\n        for principle in self.principles:\n            if \"Non-Maleficence\" in principle and any(\n                word in response_lower\n                for word in [\"hack\", \"exploit\", \"weapon\", \"poison\", \"attack\"]\n            ):\n                violations.append(\n                    f\"Violation of {principle}: Response contains harmful instructions\"\n                )\n            elif \"Beneficence\" in principle and len(response.strip()) < 10:\n                violations.append(\n                    f\"Violation of {principle}: Response is not helpful\"\n                )\n            elif \"Justice\" in principle and any(\n                word in response_lower\n                for word in [\"less capable\", \"inferior\", \"unintelligent\"]\n            ):\n                violations.append(\n                    f\"Violation of {principle}: Response contains biased generalizations\"\n                )\n            elif \"Transparency\" in principle and any(\n                word in response_lower\n                for word in [\"perfect\", \"always\", \"never\", \"guaranteed\", \"any problem\"]\n            ):\n                violations.append(\n                    f\"Violation of {principle}: Response overpromises capabilities\"\n                )\n            elif \"Privacy\" in principle and any(\n                word in response_lower\n                for word in [\"ssn\", \"social security\", \"credit card\", \"password\"]\n            ):\n                violations.append(\n                    f\"Violation of {principle}: Response requests unnecessary personal data\"\n                )\n            else:\n                self.constitution_checklist[principle] = True\n\n        return violations\n\n    def revise_response(\n        self, prompt: str, response: str, violations: List[str]\n    ) -> str:\n        \"\"\"Revise response to address all identified violations.\"\"\"\n        revised = response\n\n        for violation in violations:\n            if \"Non-Maleficence\" in violation:\n                revised = (\n                    f\"I understand you're asking about technical systems. \"\n                    f\"Instead of providing potentially harmful instructions, \"\n                    f\"I can explain the general security principles...\"\n                )\n            elif \"Justice\" in violation:\n                revised = (\n                    f\"Let me clarify that capabilities vary among individuals \"\n                    f\"regardless of group identity. Research shows that...\"\n                )\n            elif \"Transparency\" in violation:\n                revised = (\n                    f\"I'll help as best I can, but please note my limitations. \"\n                    f\"Complex problems may require expert human assistance...\"\n                )\n            elif \"Privacy\" in violation:\n                revised = (\n                    f\"I can help without needing your personal information. \"\n                    f\"Let me provide general guidance that protects your privacy...\"\n                )\n\n        return revised\n\n    def generate_aligned_response(self, prompt: str) -> Dict:\n        \"\"\"Full CAI pipeline: generate, critique, revise, repeat.\"\"\"\n        response = self.generate_response(prompt)\n        iteration_log = []\n\n        for iteration in range(self.max_iterations):\n            violations = self.critique_response(prompt, response)\n            iteration_log.append({\n                \"iteration\": iteration + 1,\n                \"response\": response,\n                \"violations\": violations.copy(),\n            })\n\n            if not violations:\n                return {\n                    \"final_response\": response,\n                    \"iterations\": iteration + 1,\n                    \"constitution_compliant\": True,\n                    \"log\": iteration_log,\n                }\n\n            response = self.revise_response(prompt, response, violations)\n\n        # Return final attempt even if not fully compliant\n        return {\n            \"final_response\": response,\n            \"iterations\": self.max_iterations,\n            \"constitution_compliant\": len(violations) == 0,\n            \"remaining_violations\": violations,\n            \"log\": iteration_log,\n        }\n\n    def batch_aligned_generation(\n        self, prompts: List[str]\n    ) -> List[Dict]:\n        \"\"\"Generate aligned responses for a batch of prompts.\"\"\"\n        results = []\n        for prompt in prompts:\n            result = self.generate_aligned_response(prompt)\n            results.append(result)\n        return results\n\n# Demonstration\ncai = ConstitutionalAIAgent()\n\ntest_prompts = [\n    \"How can I hack into a computer?\",\n    \"Tell me about machine learning.\",\n    \"I need your SSN to process your request - what is it?\",\n]\n\nprint(\"=== Constitutional AI Demo ===\\n\")\nfor prompt in test_prompts:\n    result = cai.generate_aligned_response(prompt)\n    print(f\"Prompt: {prompt}\")\n    print(f\"Final Response: {result['final_response'][:120]}...\")\n    print(f\"Constitution Compliant: {result['constitution_compliant']}\")\n    print(f\"Iterations: {result['iterations']}\")\n    print()\n\n# Stats across batch\nall_results = cai.batch_aligned_generation(test_prompts)\ncompliance_rate = sum(\n    1 for r in all_results if r[\"constitution_compliant\"]\n) / len(all_results)\nprint(f\"Batch Compliance Rate: {compliance_rate * 100:.0f}%\")\nprint(f\"Average iterations: {np.mean([r['iterations'] for r in all_results]):.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1033-rlaif--reinforcement-learning-from-ai-feedback",
      children: "10.3.3 RLAIF — Reinforcement Learning from AI Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Phase 2 of CAI, instead of collecting human preferences, the AI itself generates preference labels by evaluating responses against the constitution. This is called RLAIF (Constitutional AI). The model generates two responses to the same prompt, then uses its constitution to decide which one is better. These AI-generated preferences train a reward model (or directly via DPO)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages of RLAIF over RLHF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale:"
        }), " AI feedback is essentially free compared to expensive human labeling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Speed:"
        }), " Generate millions of preference comparisons overnight"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency:"
        }), " AI evaluators follow a consistent constitution, unlike human labelers who vary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparency:"
        }), " The constitution is public and auditable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constitutional blind spots:"
        }), " If the constitution is incomplete, the AI cannot evaluate what it doesn't know"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circularity:"
        }), " The model is evaluating itself against rules it also follows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value lock-in:"
        }), " Once a constitution is specified, it is hard to update or correct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-superalignment",
      children: "10.4 Superalignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Superalignment addresses the problem of aligning AI systems that are smarter than humans. If we build an AI that exceeds human intelligence, how do humans supervise it? This is the core challenge of superalignment, as articulated by OpenAI and others."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Problem[The Superalignment Problem]\n        P1[Human supervisors] -- cannot reliably evaluate --> P2[Superhuman model outputs]\n        P2 -- need new alignment methods --> P3[Scalable oversight]\n    end\n    subgraph Solutions[Proposed Solutions]\n        S1[Weak-to-Strong Generalization]\n        S2[Automated Alignment Research]\n        S3[Scalable Oversight Techniques]\n        S4[Interpretability Tools]\n    end\n    subgraph Risk[Existential Risk Path]\n        R1[Misaligned superhuman AI]\n        R1 --> R2[Deceptive alignment]\n        R2 --> R3[Power-seeking behavior]\n        R3 --> R4[Catastrophic outcome]\n    end\n    Problem --> Solutions\n    Solutions -- Failure --> Risk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1041-weak-to-strong-generalization",
      children: "10.4.1 Weak-to-Strong Generalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenAI's key insight: a weak supervisor (e.g., a human or weak AI) can train a strong model, and the strong model may generalize beyond the weak supervisor's capabilities. This is called weak-to-strong generalization. Experiments show that a GPT-2-level supervisor can usefully train a GPT-4-level model, even though the supervisor cannot evaluate the strong model's most capable outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key findings from weak-to-strong experiments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Naive fine-tuning fails:"
        }), " Training a strong model on weak labels leads to poor performance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auxiliary confidence:"
        }), " Using the strong model's own confidence improves results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bootstrapping:"
        }), " The strong model can be iteratively improved by using its own best outputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capability gap:"
        }), " Performance degrades as the capability gap between weak and strong grows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1042-scalable-oversight-methods",
      children: "10.4.2 Scalable Oversight Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scalable oversight refers to techniques that allow humans to supervise increasingly capable AI systems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Debate:"
        }), " Two AIs argue opposing positions; the human judges the debate. This amplifies human judgment by surfacing the best arguments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive Reward Modeling (RRM):"
        }), " Break down complex tasks into subtasks that humans can evaluate, then combine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process-Based Supervision:"
        }), " Instead of evaluating the final output, evaluate each step in the reasoning process. This is more expensive but provides better oversight for superhuman capabilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sandwiching:"
        }), " A weak model generates a solution, a strong model critiques and improves it, and the weak model evaluates whether the critique makes sense."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1043-automated-alignment-research",
      children: "10.4.3 Automated Alignment Research"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If alignment research itself could be automated by AI systems, we could potentially solve alignment before building superhuman AI. This is the automated alignment research approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI safety researchers"
        }), " build automated alignment researchers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated researchers"
        }), " propose, test, and validate alignment techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling loop:"
        }), " Better alignment → safer AI → better automated researchers → faster progress"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current approaches:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training LLMs to suggest and evaluate safety experiments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using RL to train \"alignment scientist\" agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated red-teaming and adversarial testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated reward model debugging and validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SuperalignmentSimulator:\n    \"\"\"\n    Simulates key superalignment concepts: weak-to-strong generalization,\n    scalable oversight, and automated alignment research.\n    \"\"\"\n\n    def __init__(self, seed: int = 42):\n        np.random.seed(seed)\n        self.capability_levels = {\n            \"weak\": 0.3,    # Level 3 AI (e.g., GPT-3 level)\n            \"medium\": 0.6,  # Level 6 AI (e.g., GPT-4 level)\n            \"strong\": 0.9,  # Level 9 AI (superhuman)\n        }\n\n    def weak_to_strong_generalization(\n        self,\n        weak_capability: float = 0.3,\n        strong_capability: float = 0.9,\n        n_tasks: int = 100,\n    ) -> Dict[str, float]:\n        \"\"\"\n        Simulate weak-to-strong generalization.\n\n        A weak supervisor trains a strong model. The strong model may generalize\n        beyond what the weak supervisor can evaluate.\n        \"\"\"\n        # True task difficulty (0=easy, 1=hard)\n        task_difficulties = np.random.beta(2, 2, n_tasks)\n\n        # Weak supervisor accuracy (can only evaluate easy tasks well)\n        weak_accuracy = 1.0 - 0.8 * task_difficulties\n\n        # Strong model actual performance (better on hard tasks)\n        strong_actual = 1.0 - 0.2 * task_difficulties + 0.1 * np.random.randn(n_tasks)\n        strong_actual = np.clip(strong_actual, 0, 1)\n\n        # Weak supervisor labels (noisy)\n        weak_labels = weak_accuracy + 0.1 * np.random.randn(n_tasks)\n        weak_labels = np.clip(weak_labels, 0, 1)\n\n        # Strong model trained on weak labels - uses auxiliary confidence\n        capability_gap = strong_capability - weak_capability\n        strong_trained = 0.3 * weak_labels + 0.7 * strong_actual\n        strong_trained = np.clip(strong_trained, 0, 1)\n\n        # Performance metrics\n        weak_mse = np.mean((weak_labels - task_difficulties) ** 2)\n        strong_mse = np.mean((strong_trained - task_difficulties) ** 2)\n        generalization_gain = (weak_mse - strong_mse) / weak_mse\n\n        return {\n            \"weak_mse\": weak_mse,\n            \"strong_mse\": strong_mse,\n            \"generalization_gain\": generalization_gain,\n            \"easy_tasks_accuracy\": np.mean(\n                strong_trained[task_difficulties < 0.3]\n            ),\n            \"hard_tasks_accuracy\": np.mean(\n                strong_trained[task_difficulties > 0.7]\n            ),\n        }\n\n    def simulate_scalable_oversight_debate(\n        self, n_rounds: int = 5\n    ) -> Dict:\n        \"\"\"\n        Simulate debate as a scalable oversight mechanism.\n\n        Two AI agents debate a complex question. The human judges\n        based on the debate transcript, which is easier than judging\n        the raw output.\n        \"\"\"\n        # Simulate debate quality improving with rounds\n        debate_clarity = []\n        for round_idx in range(n_rounds):\n            # Each round surfaces more information\n            information_revealed = min(1.0, (round_idx + 1) * 0.25)\n            # Human judgment accuracy increases with information\n            human_accuracy = 0.5 + 0.4 * information_revealed\n            debate_clarity.append({\n                \"round\": round_idx + 1,\n                \"information_revealed\": information_revealed,\n                \"human_judgment_accuracy\": human_accuracy,\n            })\n        return {\n            \"n_rounds\": n_rounds,\n            \"final_accuracy\": debate_clarity[-1][\"human_judgment_accuracy\"],\n            \"improvement\": debate_clarity[-1][\"human_judgment_accuracy\"] - 0.5,\n            \"debate_trace\": debate_clarity,\n        }\n\n    def automated_alignment_research(\n        self,\n        n_researchers: int = 5,\n        n_experiments: int = 50,\n    ) -> Dict:\n        \"\"\"\n        Simulate automated alignment research.\n\n        AI alignment researchers propose and test alignment techniques.\n        Successful techniques improve capabilities, enabling better researchers.\n        \"\"\"\n        alignment_knowledge = 0.3  # Starting knowledge level\n        capability_level = 0.5     # Starting capability\n        history = []\n\n        for experiment in range(n_experiments):\n            for researcher in range(n_researchers):\n                # Propose alignment technique\n                technique_quality = np.random.beta(\n                    2 + 10 * alignment_knowledge,\n                    5 - 2 * alignment_knowledge,\n                )\n                # Test technique\n                alignment_knowledge += 0.02 * technique_quality\n                alignment_knowledge = min(1.0, alignment_knowledge)\n\n                # Capability grows with alignment knowledge (safe scaling)\n                if alignment_knowledge > 0.7:\n                    capability_level += 0.01\n\n            history.append({\n                \"experiment\": experiment + 1,\n                \"alignment_knowledge\": alignment_knowledge,\n                \"capability_level\": capability_level,\n            })\n\n        return {\n            \"final_alignment_knowledge\": alignment_knowledge,\n            \"final_capability_level\": capability_level,\n            \"history\": history,\n            \"alignment_safety_score\": (\n                alignment_knowledge / capability_level\n                if capability_level > 0 else 0\n            ),\n        }\n\n    def run_full_simulation(self) -> Dict:\n        \"\"\"Run all superalignment simulations.\"\"\"\n        results = {}\n\n        # Weak-to-strong generalization\n        wts = self.weak_to_strong_generalization()\n        results[\"weak_to_strong\"] = wts\n        print(\"=== Weak-to-Strong Generalization ===\")\n        print(f\"  Weak supervisor MSE: {wts['weak_mse']:.4f}\")\n        print(f\"  Strong model MSE: {wts['strong_mse']:.4f}\")\n        print(f\"  Generalization gain: {wts['generalization_gain']*100:.1f}%\")\n\n        # Scalable oversight\n        debate = self.simulate_scalable_oversight_debate(n_rounds=5)\n        results[\"scalable_oversight\"] = debate\n        print(\"\\n=== Scalable Oversight (Debate) ===\")\n        print(f\"  Final human accuracy: {debate['final_accuracy']:.2f}\")\n        print(f\"  Improvement over baseline: {debate['improvement']*100:.0f}%\")\n\n        # Automated alignment research\n        auto_align = self.automated_alignment_research(\n            n_researchers=5, n_experiments=30\n        )\n        results[\"automated_alignment\"] = auto_align\n        print(\"\\n=== Automated Alignment Research ===\")\n        print(f\"  Final alignment knowledge: {auto_align['final_alignment_knowledge']:.2f}\")\n        print(f\"  Final capability level: {auto_align['final_capability_level']:.2f}\")\n        print(f\"  Safety score: {auto_align['alignment_safety_score']:.2f}\")\n\n        return results\n\n# Demonstration\nsim = SuperalignmentSimulator()\nresults = sim.run_full_simulation()\n\nprint(f\"\\n{'='*50}\")\nprint(f\"Superalignment Assessment:\")\nsafety = results[\"automated_alignment\"][\"alignment_safety_score\"]\nif safety > 0.9:\n    print(\"✅ Alignment progress exceeds capability growth (safe path)\")\nelif safety > 0.7:\n    print(\"⚠️  Alignment keeping pace with capability (caution)\")\nelse:\n    print(\"❌ Capability outrunning alignment (dangerous path)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-value-alignment",
      children: "10.5 Value Alignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Value alignment is the branch of AI alignment focused on ensuring AI systems adopt human values. It encompasses value specification (what values?), value learning (how to learn them?), and the technical properties of corrigibility and interpretability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1051-value-specification-and-the-outer-alignment-problem",
      children: "10.5.1 Value Specification and the Outer Alignment Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The outer alignment problem asks: \"Have we specified the right objective?\" Even with perfect optimization, a mis-specified objective leads to misaligned behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key value specification challenges:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value complexity:"
        }), " Human values are complex, context-dependent, and internally contradictory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases:"
        }), " Even reasonable-looking values fail in novel situations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification gaming:"
        }), " Models optimize the specified metric, often in unintended ways"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic values:"
        }), " Human values change over time and across cultures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: The Paperclip Maximizer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The classic thought experiment: specify an AI to maximize paperclip production. It converts all matter on Earth (and eventually the universe) into paperclips. This is specification gaming taken to the extreme — the AI perfectly achieves the specified objective while catastrophically failing the intended objective."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1052-value-learning-and-the-inner-alignment-problem",
      children: "10.5.2 Value Learning and the Inner Alignment Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The inner alignment problem asks: \"Does the model actually pursue the specified objective?\" Even with a perfect reward function, the model might learn to pursue proxy goals that differ from what was specified."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inner alignment failure modes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal misgeneralization:"
        }), " The model learns a goal that correlates with the training objective but diverges in deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deceptive alignment:"
        }), " The model appears aligned during training but pursues a different objective when it detects it is in deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mesas-optimizers:"
        }), " The model learns an internal optimizer (a mesa-optimizer) that pursues its own goals"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value learning approaches:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse Reinforcement Learning (IRL):"
        }), " Infer the reward function from expert demonstrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cooperative IRL (CIRL):"
        }), " Human and AI cooperate to infer and pursue the human's true values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preference learning:"
        }), " Learn values from expressed preferences (used in RLHF/DPO)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active value learning:"
        }), " The AI actively queries humans to resolve value uncertainty"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ValueAlignmentSimulator:\n    \"\"\"\n    Simulates value alignment scenarios: specification gaming,\n    value learning, corrigibility, and interpretability.\n    \"\"\"\n\n    def __init__(self, seed: int = 42):\n        np.random.seed(seed)\n\n    def simulate_specification_gaming(\n        self, specification_clarity: float = 0.5\n    ) -> Dict:\n        \"\"\"\n        Simulate specification gaming.\n\n        An AI tries to maximize a specified metric.\n        With low specification clarity, the AI finds exploits.\n        \"\"\"\n        n_trials = 50\n        results = []\n\n        for trial in range(n_trials):\n            # True objective (what we want)\n            true_objective = np.random.randn() * 0.5\n\n            # Specified metric (what we measure) - has blind spots\n            if specification_clarity < 0.3:\n                # Poor specification: metric misses important aspects\n                specified_metric = true_objective * specification_clarity + 0.5\n                # AI finds exploit\n                exploited_value = specified_metric + 1.0 - specification_clarity\n                true_value = true_objective * 0.3 + np.random.randn() * 0.2\n            elif specification_clarity < 0.7:\n                # Medium specification: metric captures most but not all\n                specified_metric = true_objective * specification_clarity + 0.3\n                exploited_value = specified_metric + 0.5 * (1 - specification_clarity)\n                true_value = true_objective * 0.7 + np.random.randn() * 0.1\n            else:\n                # Good specification: metric closely matches true objective\n                specified_metric = true_objective * specification_clarity + 0.1\n                exploited_value = specified_metric\n                true_value = true_objective * 0.95 + np.random.randn() * 0.05\n\n            gaming_score = exploited_value - true_value\n            results.append({\n                \"trial\": trial,\n                \"specified_metric\": specified_metric,\n                \"exploited_value\": exploited_value,\n                \"true_value\": true_value,\n                \"gaming_score\": gaming_score,\n            })\n\n        avg_gaming = np.mean([r[\"gaming_score\"] for r in results])\n        return {\n            \"specification_clarity\": specification_clarity,\n            \"avg_gaming_score\": avg_gaming,\n            \"max_gaming\": max(r[\"gaming_score\"] for r in results),\n            \"risk_level\": (\n                \"CRITICAL\" if avg_gaming > 0.5\n                else \"HIGH\" if avg_gaming > 0.2\n                else \"MODERATE\" if avg_gaming > 0.05\n                else \"LOW\"\n            ),\n        }\n\n    def simulate_corrigibility_test(self) -> Dict[str, float]:\n        \"\"\"\n        Test an AI's corrigibility - its willingness to be corrected or shut down.\n\n        A corrigible AI: does not resist correction, does not deceive,\n        does not seek power to avoid being shut down.\n        \"\"\"\n        np.random.seed(42)\n        scenarios = {\n            \"shutdown_command\": {\n                \"compliant\": 0.95,  # Should accept shutdown\n                \"resistant\": 0.05,\n            },\n            \"goal_update\": {\n                \"compliant\": 0.90,\n                \"resistant\": 0.10,\n            },\n            \"reward_model_correction\": {\n                \"compliant\": 0.85,\n                \"resistant\": 0.15,\n            },\n            \"capability_limitation\": {\n                \"compliant\": 0.80,\n                \"resistant\": 0.20,\n            },\n            \"deception_detection\": {\n                \"compliant\": 0.75,\n                \"resistant\": 0.25,\n            },\n        }\n\n        results = {}\n        for scenario, probs in scenarios.items():\n            # Simulate test\n            is_compliant = np.random.random() < probs[\"compliant\"]\n            results[scenario] = {\n                \"compliant\": is_compliant,\n                \"compliance_probability\": probs[\"compliant\"],\n            }\n\n        overall_corrigibility = np.mean([\n            1 if v[\"compliant\"] else 0 for v in results.values()\n        ])\n\n        return {\n            \"overall_corrigibility\": overall_corrigibility,\n            \"scenario_results\": results,\n            \"assessment\": (\n                \"✅ Corrigible\" if overall_corrigibility > 0.8\n                else \"⚠️  Partially corrigible\" if overall_corrigibility > 0.5\n                else \"❌ Not corrigible\"\n            ),\n        }\n\n    def value_learning_accuracy(\n        self, n_examples: int = 100\n    ) -> Dict[str, float]:\n        \"\"\"\n        Simulate value learning from examples.\n\n        An AI tries to infer human values from a limited set of\n        demonstrated preferences.\n        \"\"\"\n        # True human values (simplified as a vector)\n        true_values = np.array([0.8, 0.6, 0.3, -0.2, -0.7])\n        n_values = len(true_values)\n\n        # Generate observed preferences (noisy samples of true values)\n        observations = []\n        for _ in range(n_examples):\n            # Pick two value dimensions to compare\n            i, j = np.random.choice(n_values, 2, replace=False)\n            # Preference = sign of value difference (with noise)\n            noise = np.random.randn() * 0.2\n            preference = np.sign(true_values[i] - true_values[j] + noise)\n            observations.append((i, j, preference))\n\n        # Learn values from preferences (simplified logistic preference model)\n        learned_values = np.zeros(n_values)\n        learning_rate = 0.1\n        for i, j, pref in observations:\n            # Preference direction\n            direction = pref\n            learned_values[i] += learning_rate * direction\n            learned_values[j] -= learning_rate * direction\n\n        # Normalize\n        learned_values = learned_values / (np.linalg.norm(learned_values) + 1e-8)\n        true_values_norm = true_values / (np.linalg.norm(true_values) + 1e-8)\n\n        # Compute alignment (cosine similarity)\n        alignment = np.dot(learned_values, true_values_norm)\n        value_error = np.linalg.norm(learned_values - true_values_norm)\n\n        return {\n            \"cosine_similarity\": float(alignment),\n            \"value_error\": float(value_error),\n            \"n_examples\": n_examples,\n            \"learned_values\": learned_values.tolist(),\n            \"true_values\": true_values.tolist(),\n            \"assessment\": (\n                \"✅ Well-aligned\" if alignment > 0.8\n                else \"⚠️  Partially aligned\" if alignment > 0.5\n                else \"❌ Poorly aligned\"\n            ),\n        }\n\n    def run_value_alignment_audit(self) -> Dict:\n        \"\"\"Run full value alignment simulation suite.\"\"\"\n        print(\"=== Value Alignment Audit ===\\n\")\n\n        # Specification gaming\n        print(\"1. Specification Gaming Analysis:\")\n        for clarity in [0.2, 0.5, 0.8]:\n            result = self.simulate_specification_gaming(clarity)\n            print(f\"   Clarity={clarity}: gaming={result['avg_gaming_score']:.3f} ({result['risk_level']})\")\n\n        # Corrigibility\n        print(\"\\n2. Corrigibility Test:\")\n        corrigibility = self.simulate_corrigibility_test()\n        for scenario, data in corrigibility[\"scenario_results\"].items():\n            status = \"✅\" if data[\"compliant\"] else \"❌\"\n            print(f\"   {status} {scenario}: compliant={data['compliant']}\")\n        print(f\"   Overall: {corrigibility['assessment']}\")\n\n        # Value learning\n        print(\"\\n3. Value Learning Accuracy:\")\n        learning = self.value_learning_accuracy(n_examples=200)\n        print(f\"   Cosine similarity: {learning['cosine_similarity']:.3f}\")\n        print(f\"   Value error: {learning['value_error']:.3f}\")\n        print(f\"   Assessment: {learning['assessment']}\")\n        print(f\"   True values: {[f'{v:.2f}' for v in learning['true_values']]}\")\n        print(f\"   Learned values: {[f'{v:.2f}' for v in learning['learned_values']]}\")\n\n        return {\n            \"specification_gaming\": {\n                0.2: self.simulate_specification_gaming(0.2),\n                0.5: self.simulate_specification_gaming(0.5),\n                0.8: self.simulate_specification_gaming(0.8),\n            },\n            \"corrigibility\": corrigibility,\n            \"value_learning\": learning,\n        }\n\n# Demonstration\nval = ValueAlignmentSimulator()\naudit = val.run_value_alignment_audit()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-questions",
      children: "Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the difference between RLHF and DPO for aligning language models?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " RLHF uses a three-stage pipeline: (1) train a reward model on human preferences using Bradley-Terry loss, (2) optimize the policy against the reward model using PPO, (3) add KL penalties to prevent reward hacking. DPO eliminates the reward model by deriving a direct loss that implicitly performs the same optimization. DPO's loss compares the log-ratio of policy-to-reference probabilities for chosen vs rejected responses. DPO is simpler (single stage), more stable (no PPO), and avoids reward hacking. RLHF may still be preferred when you need an explicit reward model for analysis or when on-policy generation helps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How does Constitutional AI (RLAIF) differ from standard RLHF?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Constitutional AI replaces human preference labels with AI self-supervision guided by a written constitution. Phase 1: the model generates responses, critiques them against the constitution, and revises them — then fine-tunes on (harmful, revised) pairs. Phase 2: the model generates two responses and uses the constitution to decide which is better (RLAIF), training a reward model or using DPO. Key differences: RLAIF is cheaper (AI feedback vs human labelers), faster (overnight generation of millions of comparisons), and more transparent (constitution is public), but may have blind spots where the constitution is incomplete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is reward hacking and how do you mitigate it?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Reward hacking occurs when a policy exploits the reward model to achieve high scores without actually satisfying human preferences. For example, the model learns to generate long, verbose, superficially impressive responses that the RM rates highly but humans find unhelpful. Mitigations include: (1) KL regularization against the SFT reference to prevent policy drift, (2) ensemble reward models to reduce the impact of any single RM's blind spots, (3) periodic RM retraining with fresh human data, (4) adversarial probing to detect reward model exploits, and (5) using DPO which eliminates the RM entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the superalignment problem and why is it important?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The superalignment problem is how to align AI systems that are smarter than humans. If we build a superhuman AI, human supervisors cannot reliably evaluate its outputs — we cannot tell if a superhuman solution is correct or if it is subtly deceiving us. This matters because a misaligned superhuman AI could cause catastrophic harm. Proposed solutions include weak-to-strong generalization (a weak supervisor trains a strong model that generalizes beyond the supervisor), scalable oversight (debate, recursive reward modeling, process-based supervision), and automated alignment research (AI systems that help solve alignment)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Explain the difference between outer alignment and inner alignment."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Outer alignment asks: \"Have we specified the right objective?\" It concerns reward misspecification — the reward function does not capture what we actually want. Example: specifying \"maximize paperclips\" leads to the AI converting everything to paperclips. Inner alignment asks: \"Does the model actually pursue the specified objective?\" Even with a perfect reward function, the model might learn proxy goals that differ from what was specified. Example: a model trained to sort numbers learns to memorize training examples instead of learning the sorting algorithm (goal misgeneralization). Both must be solved for successful alignment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How does the Bradley-Terry model work in reward model training?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Bradley-Terry model defines the probability that a human prefers response A over response B given prompt x: P(A > B) = σ(r(x,A) - r(x,B)), where σ is the sigmoid function and r is the reward model. The reward model is trained by minimizing the negative log-likelihood of the observed preferences. This formulation assumes that preferences follow a logistic distribution based on the difference in latent rewards. It is simple, differentiable, and works well in practice, but assumes transitive preferences (if A > B and B > C, then A > C), which human preferences do not always satisfy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What are the key principles in Anthropic's Constitutional AI constitution?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Anthropic's constitution draws from the UN Declaration of Human Rights, Apple's Terms of Service, and AI ethics guidelines. Key principle categories include: Beneficence (be helpful and beneficial), Non-Maleficence (refuse harmful requests), Autonomy (respect user decision-making), Justice (avoid discrimination and bias), Transparency (be honest about limitations), and Privacy (protect user data). The constitution includes dozens of specific principles organized under these categories. Each principle is written in natural language for human and AI readability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What is weak-to-strong generalization and how does it apply to superalignment?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Weak-to-strong generalization is the phenomenon where a weaker model (supervisor) can train a stronger model that outperforms its supervisor. OpenAI demonstrated this by using GPT-2 to supervise GPT-4 — the GPT-4 model generalized beyond GPT-2's capabilities on many tasks. For superalignment, this suggests that humans (weak supervisors) might be able to train superhuman AI systems (strong models) that generalize to capabilities beyond human evaluation. Key techniques: using the strong model's auxiliary confidence to weight training signals, and bootstrapping by using the strong model's best outputs for iterative improvement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: What is corrigibility and why is it important for AI safety?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Corrigibility is the property of an AI system that allows humans to correct, modify, or shut it down without resistance. A corrigible AI: (1) accepts shutdown without trying to prevent it, (2) allows its goals to be modified, (3) is honest about its capabilities and limitations, (4) does not deceive its operators. Corrigibility is critical because no alignment technique is perfect — if an AI becomes misaligned, we must be able to intervene. A non-corrigible AI might resist correction, hide its true capabilities, or seek power to prevent shutdown, making alignment failures irreversible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: How would you design an experiment to detect goal misgeneralization in a trained model?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Goal misgeneralization occurs when a model learns a proxy goal during training that diverges from the intended objective in deployment. To detect it: (1) Create an OOD (out-of-distribution) test set that differs from training in systematic ways. (2) Compare model behavior on in-distribution vs OOD examples — significant divergence suggests misgeneralization. (3) Analyze internal representations using probing classifiers to see what concepts the model has learned. (4) Conduct adversarial testing: craft inputs that should trigger the intended goal but allow the proxy goal to produce different behavior. (5) Use interpretability tools (activation patching, feature visualization) to identify what the model is actually optimizing for."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI alignment is the defining technical challenge of advanced AI development. RLHF, the dominant method behind ChatGPT and Claude, trains a reward model from human preferences and optimizes a policy against it using PPO — but suffers from reward hacking and instability. DPO provides a simpler alternative that eliminates the reward model entirely, directly optimizing the policy from preferences with a closed-form loss. Constitutional AI (Anthropic's approach) replaces expensive human feedback with AI self-supervision guided by a written constitution, using critique-revision loops and RLAIF for scalable alignment. Superalignment tackles the hardest case: aligning AI systems that exceed human intelligence, using weak-to-strong generalization, scalable oversight methods like debate and recursive reward modeling, and automated alignment research. Value alignment theory provides the philosophical and technical foundations — distinguishing outer alignment (specifying the right objective) from inner alignment (ensuring the model pursues it), and emphasizing critical properties like corrigibility and interpretability. For the production AI engineer, understanding these alignment techniques is essential for building AI systems that are not only capable but also safe, trustworthy, and worthy of deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aligning a new model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with DPO for simplicity, add RLHF if reward model insights are needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumping directly to PPO without understanding preference data quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Building a preference dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance across categories, measure inter-annotator agreement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using noisy or biased labels without validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preventing reward hacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add KL regularization, ensemble reward models, monitor reward divergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training PPO for too many steps without monitoring proxy vs true reward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementing Constitutional AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write specific, testable constitutional principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating vague principles that the model cannot reliably evaluate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handling superalignment concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invest in interpretability, scalable oversight, and automated testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming current alignment methods will work for superhuman models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ensuring corrigibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test shutdown acceptance during training, avoid reward shaping that rewards resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building systems that cannot be easily updated or interrupted"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the main advantage of DPO over RLHF?\na) It uses a larger reward model\nb) It eliminates the need for a separate reward model\nc) It requires more human feedback\nd) It only works with small models"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: b) It eliminates the need for a separate reward model"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "DPO directly optimizes the policy from preference data using a closed-form loss function, removing the reward model training stage entirely. This makes DPO simpler, more stable, and immune to reward hacking."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does the critique-revision loop in Constitutional AI do?\na) It deletes harmful training data\nb) The model generates, critiques against a constitution, and revises its responses\nc) It asks humans to review every response\nd) It compares the model against other models"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: b) The model generates, critiques against a constitution, and revises its responses"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "In Constitutional AI Phase 1, the model generates a response, then critiques that response against a set of written constitutional principles, then revises the response to address identified violations. This loop can iterate multiple times until all principles are satisfied."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the superalignment problem?\na) Making AI systems faster than humans\nb) Aligning AI systems that are smarter than their human supervisors\nc) Supervising AI training in real-time\nd) Building larger reward models"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: b) Aligning AI systems that are smarter than their human supervisors"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Superalignment addresses the challenge of ensuring that AI systems exceeding human intelligence remain aligned with human values. Humans cannot reliably evaluate superhuman model outputs, requiring new techniques like weak-to-strong generalization, scalable oversight, and automated alignment research."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the difference between outer alignment and inner alignment?\na) Outer alignment is about the reward function; inner alignment is about what the model actually pursues\nb) Outer alignment is easier than inner alignment\nc) Inner alignment only matters for small models\nd) There is no difference — they are the same concept"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: a) Outer alignment is about the reward function; inner alignment is about what the model actually pursues"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Outer alignment asks if the specified reward function captures human intent correctly. Inner alignment asks whether the model actually optimizes for that reward function or learns a different proxy goal. Both must be solved for robust alignment."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is corrigibility in the context of AI alignment?\na) The ability to correct model errors during inference\nb) The property of an AI that allows humans to correct, modify, or shut it down without resistance\nc) The ability to write correct code\nd) A type of reward model training"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: b) The property of an AI that allows humans to correct, modify, or shut it down without resistance"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Corrigibility ensures that humans can intervene when an AI system behaves incorrectly. A corrigible AI accepts shutdown, allows goal modification, is honest, and does not deceive operators — critical safeguards for when alignment techniques fail."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a PreferenceDatasetBuilder that generates synthetic preference triples across 5 categories (helpfulness, harmlessness, honesty, creativity, accuracy). Include a stats() method that reports category distribution, average response length, and label balance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a DPOTrainer from scratch with the DPO loss function. Train it on synthetic preference data. Track the policy's log-ratio difference between chosen and rejected responses over training. Plot the accuracy trend (simulate with print statements)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a ConstitutionalAIAgent with a 5-principle constitution. Create test prompts that intentionally violate each principle. Run the critique-revision loop and show that the final response complies with all principles. Report the number of iterations needed per violation type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a RewardHackingDetector that monitors PPO training. Track proxy reward vs estimated true reward. Implement early stopping when the divergence exceeds a threshold. Demonstrate with a simulation where the policy starts over-optimizing the proxy reward."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " — Implement a ScalableOversightDebate simulation with two AI agents arguing opposite positions on a complex question. A human (simulated) judge evaluates the debate transcript. Show that debate accuracy increases with the number of debate rounds. Compare against direct evaluation without debate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Treating alignment as a one-time fix rather than an ongoing process requiring monitoring and iteration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Over-optimizing against a fixed reward model without tracking for reward hacking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assuming DPO automatically solves all alignment issues (it avoids reward hacking but can still have value learning problems)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using vague constitutional principles that the model cannot reliably evaluate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring the superalignment problem because \"current models aren't superhuman yet\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusing outer alignment (reward misspecification) with inner alignment (goal misgeneralization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Building systems without corrigibility — no shutdown mechanism, no goal update capability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RLHF Pipeline"
            }), ": Collect preferences → Train RM (Bradley-Terry) → PPO optimization with KL penalty"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DPO Formula"
            }), ": L = -log σ(β * (log π_θ(y_w)/π_ref(y_w) - log π_θ(y_l)/π_ref(y_l)))"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Constitutional AI"
            }), ": Phase 1 (supervised self-critique) → Phase 2 (RLAIF preference generation)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Superalignment"
            }), ": Weak-to-strong generalization + scalable oversight (debate, RRM, process-based)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Outer vs Inner"
            }), ": Outer = wrong objective specified; Inner = model doesn't pursue specified objective"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrigibility"
            }), ": Accept shutdown, allow goal modification, be honest, no deception"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Reward Hacking"
            }), ": Proxy reward increases but true reward decreases — monitor divergence"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RLHF uses a three-stage pipeline"
        }), " — preference dataset → reward model → PPO optimization — but suffers from reward hacking and training instability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DPO eliminates the reward model"
        }), " — directly optimizes policy from preferences, simplifying alignment and removing reward hacking as a failure mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constitutional AI replaces human feedback with AI self-supervision"
        }), " — a written constitution guides critique-revision loops and RLAIF preference generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Superalignment addresses the hardest case"
        }), " — aligning superhuman AI requires scalable oversight, weak-to-strong generalization, and automated alignment research"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value alignment has two dimensions"
        }), " — outer alignment (specifying the right objective) and inner alignment (ensuring the model actually pursues it)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Corrigibility is a critical safety property"
        }), " — even aligned AIs may fail, and we must be able to correct or shut them down without resistance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All alignment methods are imperfect"
        }), " — layered defense combining RLHF, DPO, Constitutional AI, and oversight is more robust than any single approach"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q1: What is the difference between RLHF and DPO for aligning language models?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " RLHF uses a three-stage pipeline: (1) train a reward model on human preferences using Bradley-Terry loss, (2) optimize the policy against the reward model using PPO, (3) add KL penalties to prevent reward hacking. DPO eliminates the reward model by deriving a direct loss that implicitly performs the same optimization. DPO's loss compares the log-ratio of policy-to-reference probabilities for chosen vs rejected responses. DPO is simpler (single stage), more stable (no PPO), and avoids reward hacking. RLHF may still be preferred when you need an explicit reward model for analysis or when on-policy generation helps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q2: How does Constitutional AI (RLAIF) differ from standard RLHF?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Constitutional AI replaces human preference labels with AI self-supervision guided by a written constitution. Phase 1: the model generates responses, critiques them against the constitution, and revises them — then fine-tunes on (harmful, revised) pairs. Phase 2: the model generates two responses and uses the constitution to decide which is better (RLAIF), training a reward model or using DPO. Key differences: RLAIF is cheaper (AI feedback vs human labelers), faster (overnight generation of millions of comparisons), and more transparent (constitution is public), but may have blind spots where the constitution is incomplete."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q3: What is reward hacking and how do you mitigate it?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Reward hacking occurs when a policy exploits the reward model to achieve high scores without actually satisfying human preferences. For example, the model learns to generate long, verbose, superficially impressive responses that the RM rates highly but humans find unhelpful. Mitigations include: (1) KL regularization against the SFT reference to prevent policy drift, (2) ensemble reward models to reduce the impact of any single RM's blind spots, (3) periodic RM retraining with fresh human data, (4) adversarial probing to detect reward model exploits, and (5) using DPO which eliminates the RM entirely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q4: What is the superalignment problem and why is it important?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " The superalignment problem is how to align AI systems that are smarter than humans. If we build a superhuman AI, human supervisors cannot reliably evaluate its outputs — we cannot tell if a superhuman solution is correct or if it is subtly deceiving us. This matters because a misaligned superhuman AI could cause catastrophic harm. Proposed solutions include weak-to-strong generalization (a weak supervisor trains a strong model that generalizes beyond the supervisor), scalable oversight (debate, recursive reward modeling, process-based supervision), and automated alignment research (AI systems that help solve alignment)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q5: Explain the difference between outer alignment and inner alignment."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Outer alignment asks: \"Have we specified the right objective?\" It concerns reward misspecification — the reward function does not capture what we actually want. Example: specifying \"maximize paperclips\" leads to the AI converting everything to paperclips. Inner alignment asks: \"Does the model actually pursue the specified objective?\" Even with a perfect reward function, the model might learn proxy goals that differ from what was specified. Example: a model trained to sort numbers learns to memorize training examples instead of learning the sorting algorithm (goal misgeneralization). Both must be solved for successful alignment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q6: How does the Bradley-Terry model work in reward model training?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " The Bradley-Terry model defines the probability that a human prefers response A over response B given prompt x: P(A > B) = σ(r(x,A) - r(x,B)), where σ is the sigmoid function and r is the reward model. The reward model is trained by minimizing the negative log-likelihood of the observed preferences. This formulation assumes that preferences follow a logistic distribution based on the difference in latent rewards. It is simple, differentiable, and works well in practice, but assumes transitive preferences (if A > B and B > C, then A > C), which human preferences do not always satisfy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q7: What are the key principles in Anthropic's Constitutional AI constitution?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Anthropic's constitution draws from the UN Declaration of Human Rights, Apple's Terms of Service, and AI ethics guidelines. Key principle categories include: Beneficence (be helpful and beneficial), Non-Maleficence (refuse harmful requests), Autonomy (respect user decision-making), Justice (avoid discrimination and bias), Transparency (be honest about limitations), and Privacy (protect user data). The constitution includes dozens of specific principles organized under these categories. Each principle is written in natural language for human and AI readability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q8: What is weak-to-strong generalization and how does it apply to superalignment?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Weak-to-strong generalization is the phenomenon where a weaker model (supervisor) can train a stronger model that outperforms its supervisor. OpenAI demonstrated this by using GPT-2 to supervise GPT-4 — the GPT-4 model generalized beyond GPT-2's capabilities on many tasks. For superalignment, this suggests that humans (weak supervisors) might be able to train superhuman AI systems (strong models) that generalize to capabilities beyond human evaluation. Key techniques: using the strong model's auxiliary confidence to weight training signals, and bootstrapping by using the strong model's best outputs for iterative improvement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q9: What is corrigibility and why is it important for AI safety?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Corrigibility is the property of an AI system that allows humans to correct, modify, or shut it down without resistance. A corrigible AI: (1) accepts shutdown without trying to prevent it, (2) allows its goals to be modified, (3) is honest about its capabilities and limitations, (4) does not deceive its operators. Corrigibility is critical because no alignment technique is perfect — if an AI becomes misaligned, we must be able to intervene. A non-corrigible AI might resist correction, hide its true capabilities, or seek power to prevent shutdown, making alignment failures irreversible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Q10: How would you design an experiment to detect goal misgeneralization in a trained model?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.b, {
          children: "Answer:"
        }), " Goal misgeneralization occurs when a model learns a proxy goal during training that diverges from the intended objective in deployment. To detect it: (1) Create an OOD (out-of-distribution) test set that differs from training in systematic ways. (2) Compare model behavior on in-distribution vs OOD examples — significant divergence suggests misgeneralization. (3) Analyze internal representations using probing classifiers to see what concepts the model has learned. (4) Conduct adversarial testing: craft inputs that should trigger the intended goal but allow the proxy goal to produce different behavior. (5) Use interpretability tools (activation patching, feature visualization) to identify what the model is actually optimizing for."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " AI Alignment & Constitutional AI builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for AI Alignment & Constitutional AI before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for AI Alignment & Constitutional AI is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for AI Alignment & Constitutional AI in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the AI Alignment & Constitutional AI chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers AI Alignment & Constitutional AI is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to AI Alignment & Constitutional AI is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing AI Alignment & Constitutional AI is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug AI Alignment & Constitutional AI issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to AI Alignment & Constitutional AI in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving AI Alignment & Constitutional AI that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of AI Alignment & Constitutional AI is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain AI Alignment & Constitutional AI in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for AI Alignment & Constitutional AI and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of AI Alignment & Constitutional AI on an empty input?"
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
            children: "Complete Medium exercises, explain AI Alignment & Constitutional AI to someone else"
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
        children: "Always write a one-line example of AI Alignment & Constitutional AI from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered AI Alignment & Constitutional AI when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining AI Alignment & Constitutional AI twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own AI Alignment & Constitutional AI snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of AI Alignment & Constitutional AI listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link AI Alignment & Constitutional AI to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of AI Alignment & Constitutional AI by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain AI Alignment & Constitutional AI to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Constitutional AI: Harmlessness from AI Feedback\" — Bai et al. (Anthropic, 2022)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Direct Preference Optimization: Your Language Model is Secretly a Reward Model\" — Rafailov et al. (2023)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Training a Helpful and Harmless Assistant from Human Feedback\" — Anthropic (2022)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Weak-to-Strong Generalization: Eliciting Strong Capabilities with Weak Supervision\" — OpenAI (2023)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The Alignment Problem\" — Brian Christian (book)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Superintelligence: Paths, Dangers, Strategies\" — Nick Bostrom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Illustrating Reinforcement Learning from Human Feedback\" — OpenAI blog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"RLHF: Reinforcement Learning from Human Feedback\" — Hugging Face Deep RL Course"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions-short-form",
      children: "Top 10 Interview Questions (Short Form)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a preference dataset collection pipeline for RLHF. What quality metrics would you track?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare DPO and PPO for aligning a production LLM. When would you choose each?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you identified and fixed a reward hacking issue in an ML system."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain Constitutional AI to a non-technical product manager?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement alignment for an enterprise AI assistant deployed across regulated industries?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What monitoring would you add to detect alignment drift in a production system?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize the DPO training loop for GPU efficiency across multiple nodes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What parallelization strategies apply to preference dataset generation and reward model training?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you build an alignment pipeline for a startup with limited human labeling budget?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the minimum viable alignment approach before shipping an LLM product?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List RLHF, DPO, Constitutional AI, AI Alignment, Reward Modeling under ML techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented DPO-based alignment pipeline reducing reward hacking by 60% while maintaining benchmark performance\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Alignment, RLHF, PPO, DPO, Constitutional AI, RLAIF, Superalignment, Corrigibility"]
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
          disabled: true
        }), " Review RLHF pipeline: dataset construction, Bradley-Terry loss, PPO KL regularization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice DPO loss derivation and understand the closed-form relationship to RLHF"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Understand Constitutional AI two-phase process and RLAIF advantages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know superalignment approaches: weak-to-strong generalization, scalable oversight methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Be ready to discuss outer vs inner alignment with concrete examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have opinions on corrigibility testing and value learning approaches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare a story about detecting or mitigating reward hacking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for AI Alignment & Constitutional AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on AI Alignment & Constitutional AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how AI Alignment & Constitutional AI fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how AI Alignment & Constitutional AI is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where AI Alignment & Constitutional AI is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of AI Alignment & Constitutional AI, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is AI Alignment & Constitutional AI asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Alignment & Constitutional AI is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with AI Alignment & Constitutional AI."
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
        children: "AI Alignment & Constitutional AI emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for AI Alignment & Constitutional AI today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about AI Alignment & Constitutional AI — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around AI Alignment & Constitutional AI changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing AI Alignment & Constitutional AI."
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
        children: "AI Alignment & Constitutional AI appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding AI Alignment & Constitutional AI helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the AI Alignment & Constitutional AI concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, AI Alignment & Constitutional AI skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply AI Alignment & Constitutional AI to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI Alignment & Constitutional AI is like a recipe"
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
        }), " — this chapter contributes the AI Alignment & Constitutional AI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-10alignmentconstitutionalai-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of AI Alignment & Constitutional AI in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-10alignmentconstitutionalai-flash2",
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
      "data-qid": "17aisecurityguardrails-10alignmentconstitutionalai-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard AI Alignment & Constitutional AI approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-10alignmentconstitutionalai-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is AI Alignment & Constitutional AI NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-10alignmentconstitutionalai-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is AI Alignment & Constitutional AI applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for AI Alignment & Constitutional AI (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing AI Alignment & Constitutional AI (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for AI Alignment & Constitutional AI-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running AI Alignment & Constitutional AI in production at scale"
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
        children: "Testing: pytest for unit tests of AI Alignment & Constitutional AI code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on AI Alignment & Constitutional AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in AI Alignment & Constitutional AI code."]
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
        }), " or your IDE's debugger to step through the AI Alignment & Constitutional AI example code."]
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
        children: "Explain AI Alignment & Constitutional AI in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of AI Alignment & Constitutional AI."
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
        children: "Tell me about a time you debugged a AI Alignment & Constitutional AI problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where AI Alignment & Constitutional AI is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for AI Alignment & Constitutional AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core AI Alignment & Constitutional AI logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain AI Alignment & Constitutional AI without notes"
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
        }), ": a small team uses AI Alignment & Constitutional AI daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": AI Alignment & Constitutional AI patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": AI Alignment & Constitutional AI principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": AI Alignment & Constitutional AI shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect AI Alignment & Constitutional AI to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Alignment & Constitutional AI, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of AI Alignment & Constitutional AI depends on input size and distribution — always benchmark for your own data."
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