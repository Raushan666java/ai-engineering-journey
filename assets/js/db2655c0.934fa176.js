"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[70934],{

/***/ 97434
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_07_model_post_training_md_db2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-07-model-post-training-md-db2.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_07_model_post_training_md_db2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/07-model-post-training","title":"Model Post-Training for Agents","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":255,"frontMatter":{"id":"07-model-post-training","slug":"/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training","title":"Model Post-Training for Agents","sidebar_label":"Model Post-Training for Agents","sidebar_position":255},"sidebar":"coursesSidebar","previous":{"title":"Agent Evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation"},"next":{"title":"Agent Self-Evolution","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/08-agent-self-evolution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training.md


const frontMatter = {
	id: '07-model-post-training',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training',
	title: 'Model Post-Training for Agents',
	sidebar_label: 'Model Post-Training for Agents',
	sidebar_position: 255
};
const contentTitle = 'Model Post-Training for Agents';

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
  "value": "7.1 The Three-Stage Pipeline",
  "id": "71-the-three-stage-pipeline",
  "level": 2
}, {
  "value": "7.2 SFT for Agents",
  "id": "72-sft-for-agents",
  "level": 2
}, {
  "value": "7.3 RL for Agents",
  "id": "73-rl-for-agents",
  "level": 2
}, {
  "value": "7.4 SFT vs RL Comparison",
  "id": "74-sft-vs-rl-comparison",
  "level": 2
}, {
  "value": "7.5 DAPO Algorithm",
  "id": "75-dapo-algorithm",
  "level": 2
}, {
  "value": "7.6 Tool-Augmented Reasoning",
  "id": "76-tool-augmented-reasoning",
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
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
  "level": 2
}, {
  "value": "Questions",
  "id": "questions",
  "level": 3
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Exercise 2: RL Reward Design",
  "id": "exercise-2-rl-reward-design",
  "level": 3
}, {
  "value": "Exercise 3: SFT vs RL Simulation",
  "id": "exercise-3-sft-vs-rl-simulation",
  "level": 3
}, {
  "value": "Exercise 4: DAPO Implementation",
  "id": "exercise-4-dapo-implementation",
  "level": 3
}, {
  "value": "Exercise 5: Tool-Augmented Curriculum",
  "id": "exercise-5-tool-augmented-curriculum",
  "level": 3
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
        id: "model-post-training-for-agents",
        children: "Model Post-Training for Agents"
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
            children: "Understand the three-stage training pipeline: pre-training, SFT, RL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare Supervised Fine-Tuning (SFT) vs Reinforcement Learning (RL) for agent tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement RLHF and DAPO for agent behavior optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design tool-augmented reasoning training pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure and compare post-training methods for agent performance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced agents use context engineering, memory, and multi-agent collaboration to solve complex problems. This module covers cutting-edge agent patterns used at leading AI labs."
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
      children: "Understanding model post training is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how model post training works in practice."
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
            children: "The Three-Stage Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-training → SFT → RL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFT for Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching format, tool use, and task structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RL for Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching behavior, exploration, and optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFT vs RL Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to choose each method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAPO Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constrained optimization for agent tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool-Augmented Reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training models to use tools effectively"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Stage1[Pre-training]\n        PT[Raw Data] -->|Next Token Prediction| BASE[Base Model]\n    end\n    subgraph Stage2[SFT]\n        BASE -->|Supervised Fine-Tuning| SFT_MODEL[SFT Model]\n        DEMOS[Expert Demonstrations] --> SFT_MODEL\n    end\n    subgraph Stage3[RL]\n        SFT_MODEL -->|Reinforcement Learning| FINAL[Final Agent Model]\n        PREFS[Human Preferences] --> FINAL\n        RL_ALGO[DAPO / PPO / GRPO] --> FINAL\n    end\n    Stage1 --> Stage2 --> Stage3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-the-three-stage-pipeline",
      children: "7.1 The Three-Stage Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every production agent model goes through three training stages, each serving a distinct purpose."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TrainingStage {\n    name: string\n    dataType: string\n    objective: string\n    computeCost: string\n}\n\nclass TrainingPipeline {\n    stages: TrainingStage[] = [\n        {\n            name: 'Pre-training',\n            dataType: 'Trillions of tokens (web, books, code)',\n            objective: 'Learn language, facts, and patterns via next-token prediction',\n            computeCost: 'Extreme ($10M+)'\n        },\n        {\n            name: 'Supervised Fine-Tuning (SFT)',\n            dataType: 'Thousands to millions of demonstrations',\n            objective: 'Learn format, tool use, instruction following',\n            computeCost: 'Moderate ($1K-$100K)'\n        },\n        {\n            name: 'Reinforcement Learning (RL)',\n            dataType: 'Model-generated trajectories + reward signals',\n            objective: 'Optimize behavior, exploration, task completion',\n            computeCost: 'High ($10K-$500K)'\n        }\n    ]\n\n    recommend(purpose: 'general' | 'agent' | 'specialist'): TrainingStage[] {\n        if (purpose === 'agent') {\n            return this.stages  // Full three-stage for agents\n        }\n        if (purpose === 'specialist') {\n            return [this.stages[1], this.stages[2]]  // Skip pre-training\n        }\n        return [this.stages[0], this.stages[1]]  // General: pre-train + SFT\n    }\n}\n\ninterface TrainingConfig {\n    baseModel: string\n    sftDataPath: string\n    rlDataPath: string\n    sftEpochs: number\n    rlSteps: number\n    batchSize: number\n    learningRate: number\n    rewardModelPath: string\n}\n\nclass TrainingOrchestrator {\n    async runSFT(config: TrainingConfig): Promise<string> {\n        console.log(`[SFT] Starting supervised fine-tuning on ${config.baseModel}`)\n        console.log(`[SFT] Data: ${config.sftDataPath}, ${config.sftEpochs} epochs`)\n\n        // Mock training loop\n        for (let epoch = 0; epoch < config.sftEpochs; epoch++) {\n            console.log(`[SFT] Epoch ${epoch + 1}/${config.sftEpochs}`)\n            await this.mockTrainingStep(config)\n        }\n\n        const modelPath = `models/${config.baseModel}-sft`\n        console.log(`[SFT] Model saved to ${modelPath}`)\n        return modelPath\n    }\n\n    async runRL(config: TrainingConfig, sftModelPath: string): Promise<string> {\n        console.log(`[RL] Starting RL training from ${sftModelPath}`)\n        console.log(`[RL] Steps: ${config.rlSteps}, batch: ${config.batchSize}`)\n\n        for (let step = 0; step < config.rlSteps; step++) {\n            console.log(`[RL] Step ${step + 1}/${config.rlSteps}`)\n            await this.mockTrainingStep(config)\n        }\n\n        const modelPath = `models/${config.baseModel}-rl-final`\n        console.log(`[RL] Model saved to ${modelPath}`)\n        return modelPath\n    }\n\n    private async mockTrainingStep(config: TrainingConfig): Promise<void> {\n        await new Promise(r => setTimeout(r, 10))\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Optional\nfrom dataclasses import dataclass\n\n@dataclass\nclass TrainingRun:\n    base_model: str\n    method: str  # 'sft' or 'rl'\n    epochs: int\n    learning_rate: float\n    train_losses: List[float] = None\n    eval_scores: List[float] = None\n\n    def __post_init__(self):\n        self.train_losses = self.train_losses or []\n        self.eval_scores = self.eval_scores or []\n\nclass PostTrainingPipeline:\n    \"\"\"Orchestrates the post-training pipeline for agent models.\"\"\"\n\n    def __init__(self, config: TrainingConfig):\n        self.config = config\n\n    def prepare_sft_data(self, demonstrations: List[dict]) -> List[dict]:\n        \"\"\"Format expert demonstrations for SFT.\"\"\"\n        formatted = []\n        for demo in demonstrations:\n            formatted.append({\n                'messages': [\n                    {'role': 'user', 'content': demo['task']},\n                    {'role': 'assistant', 'content': demo['trajectory']},\n                ],\n                'metadata': {\n                    'task_type': demo.get('type', 'general'),\n                    'tools_used': demo.get('tools', []),\n                }\n            })\n        return formatted\n\n    def prepare_rl_data(self, trajectories: List[dict], rewards: List[float]) -> List[dict]:\n        \"\"\"Format agent trajectories with rewards for RL.\"\"\"\n        return [\n            {'trajectory': t, 'reward': r}\n            for t, r in zip(trajectories, rewards)\n        ]\n\n    def evaluate(self, model_path: str, test_tasks: List[str]) -> dict:\n        \"\"\"Run evaluation on held-out tasks.\"\"\"\n        import random\n        results = {\n            'task_completion': random.uniform(0.6, 0.95),\n            'tool_call_accuracy': random.uniform(0.7, 0.98),\n            'avg_steps': random.uniform(3, 12),\n        }\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-sft-for-agents",
      children: "7.2 SFT for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supervised Fine-Tuning teaches the model to follow instructions and use tools through demonstration data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SFTExample {\n    task: string\n    trajectory: string  // Full agent reasoning + actions\n    toolsUsed: string[]\n    outcome: 'success' | 'failure'\n}\n\nclass SFTTrainer {\n    private examples: SFTExample[] = []\n\n    addExample(example: SFTExample): void {\n        this.examples.push(example)\n    }\n\n    prepareDataset(): Array<{ prompt: string; completion: string }> {\n        return this.examples.map(ex => ({\n            prompt: `Task: ${ex.task}\\nAvailable tools: ${ex.toolsUsed.join(', ')}\\n\\nRespond with your reasoning and actions:`,\n            completion: ex.trajectory\n        }))\n    }\n\n    async train(epochs: number = 3): Promise<{ loss: number[]; accuracy: number[] }> {\n        const dataset = this.prepareDataset()\n        const lossHistory: number[] = []\n        const accuracyHistory: number[] = []\n\n        for (let epoch = 0; epoch < epochs; epoch++) {\n            // Mock training\n            const epochLoss = 0.5 * Math.exp(-epoch / 2) + 0.05 * Math.random()\n            const epochAccuracy = 0.6 + 0.3 * (epoch / epochs) + 0.05 * Math.random()\n\n            lossHistory.push(epochLoss)\n            accuracyHistory.push(epochAccuracy)\n\n            console.log(`[SFT] Epoch ${epoch + 1}/${epochs} - loss: ${epochLoss.toFixed(4)}, accuracy: ${(epochAccuracy * 100).toFixed(1)}%`)\n        }\n\n        return { loss: lossHistory, accuracy: accuracyHistory }\n    }\n\n    generateTrajectoryTemplate(taskType: string): string {\n        const templates: Record<string, string> = {\n            'tool_use': 'I need to find [information]. Let me search for it.\\nAction: search({\"query\": \"...\"})\\nObservation: [result]\\nI found [key info]. Now I can answer.\\nAction: final_answer({\"answer\": \"...\"})',\n            'code_gen': 'I need to write a function that [does X].\\nAction: read_file({\"path\": \"...\"})\\nObservation: [context]\\nI understand the structure. Let me implement:\\nAction: write_file({\"path\": \"...\", \"content\": \"...\"})\\nAction: shell({\"command\": \"npm test\"})',\n            'planning': 'The task requires multiple steps:\\n1. First, I need to [do A]\\n2. Then [do B]\\n3. Finally [do C]\\nAction: [tool_call]...'\n        }\n\n        return templates[taskType] ?? templates['tool_use']\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-rl-for-agents",
      children: "7.3 RL for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reinforcement Learning optimizes agent behavior through trial and error with a reward signal."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RLStep {\n    state: string\n    action: string\n    reward: number\n    done: boolean\n}\n\nclass RLTrainer {\n    private policyModel: any  // The agent model being trained\n    private rewardModel: any  // Evaluates agent outputs\n    private trajectoryBuffer: Array<{ steps: RLStep[]; totalReward: number }> = []\n\n    constructor(\n        private learningRate: number = 3e-6,\n        private klPenalty: number = 0.01\n    ) {}\n\n    async collectTrajectories(agent: (task: string) => Promise<RLStep[]>, tasks: string[], numTrajectories: number): Promise<void> {\n        for (let i = 0; i < numTrajectories; i++) {\n            const task = tasks[i % tasks.length]\n            const steps = await agent(task)\n            const totalReward = steps.reduce((sum, s) => sum + s.reward, 0)\n            this.trajectoryBuffer.push({ steps, totalReward })\n\n            // Reward shaping\n            for (const step of steps) {\n                if (step.action === 'final_answer' && step.reward > 5) {\n                    step.reward += 2  // Bonus for completing successfully\n                }\n                if (step.action === 'error') {\n                    step.reward -= 1  // Penalty for errors\n                }\n            }\n        }\n    }\n\n    async train(epochs: number = 10): Promise<{ episodeRewards: number[]; policyLoss: number[] }> {\n        const episodeRewards: number[] = []\n        const policyLoss: number[] = []\n\n        for (let epoch = 0; epoch < epochs; epoch++) {\n            // PPO-style update (simplified)\n            const totalReward = this.trajectoryBuffer\n                .reduce((sum, t) => sum + t.totalReward, 0) / this.trajectoryBuffer.length\n\n            const loss = -totalReward + this.klPenalty * Math.random()\n            episodeRewards.push(totalReward)\n            policyLoss.push(loss)\n\n            console.log(`[RL] Epoch ${epoch + 1}/${epochs} - avg_reward: ${totalReward.toFixed(2)}, loss: ${loss.toFixed(4)}`)\n        }\n\n        return { episodeRewards, policyLoss }\n    }\n\n    computeAdvantage(rewards: number[], gamma: number = 0.99): number[] {\n        const advantages: number[] = []\n        let gae = 0\n\n        for (let t = rewards.length - 1; t >= 0; t--) {\n            const delta = t < rewards.length - 1\n                ? rewards[t] + gamma * rewards[t + 1] - rewards[t]\n                : rewards[t] - rewards[t]\n            gae = delta + gamma * 0.95 * gae\n            advantages.unshift(gae)\n        }\n\n        return advantages\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Callable\n\nclass RLPostTraining:\n    \"\"\"Reinforcement Learning for agent behavior optimization.\"\"\"\n\n    def __init__(self, policy_lr: float = 3e-6, kl_coef: float = 0.01):\n        self.policy_lr = policy_lr\n        self.kl_coef = kl_coef\n        self.trajectories = []\n\n    def compute_gae(self, rewards: List[float], gamma: float = 0.99, lam: float = 0.95) -> np.ndarray:\n        \"\"\"Generalized Advantage Estimation.\"\"\"\n        advantages = np.zeros(len(rewards))\n        gae = 0\n        for t in reversed(range(len(rewards))):\n            delta = rewards[t] + gamma * (rewards[t + 1] if t + 1 < len(rewards) else 0) - rewards[t]\n            gae = delta + gamma * lam * gae\n            advantages[t] = gae\n        return advantages\n\n    def collect_experience(self, agent_fn: Callable, tasks: List[str], n: int = 10):\n        \"\"\"Collect agent trajectories for RL training.\"\"\"\n        for i in range(n):\n            task = tasks[i % len(tasks)]\n            trajectory = agent_fn(task)\n            steps = trajectory.get('steps', [])\n            reward = trajectory.get('reward', 0)\n            self.trajectories.append({\n                'task': task,\n                'steps': steps,\n                'reward': reward,\n            })\n\n    def train_step(self) -> dict:\n        \"\"\"Single PPO update step.\"\"\"\n        if not self.trajectories:\n            return {'loss': 0, 'avg_reward': 0}\n\n        rewards = [t['reward'] for t in self.trajectories[-100:]]\n        advantages = self.compute_gae(rewards)\n\n        # Simplified policy gradient update\n        policy_loss = -np.mean(advantages)\n        kl_penalty = self.kl_coef * np.random.random()\n\n        return {\n            'loss': float(policy_loss + kl_penalty),\n            'avg_reward': float(np.mean(rewards)),\n            'kl_penalty': float(kl_penalty),\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-sft-vs-rl-comparison",
      children: "7.4 SFT vs RL Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice between SFT and RL depends on the task and available data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MethodComparison {\n    aspect: string\n    sft: string\n    rl: string\n    winner: 'sft' | 'rl' | 'depends'\n}\n\nclass SFTvsRLGuide {\n    comparisons: MethodComparison[] = [\n        {\n            aspect: 'Data requirement',\n            sft: 'Needs high-quality demonstrations from experts',\n            rl: 'Needs reward signal (can be automated)',\n            winner: 'depends'\n        },\n        {\n            aspect: 'Learning objective',\n            sft: 'Copy the demonstration format',\n            rl: 'Maximize cumulative reward',\n            winner: 'rl'\n        },\n        {\n            aspect: 'Exploration',\n            sft: 'None — only sees demonstrated paths',\n            rl: 'Explores novel paths during training',\n            winner: 'rl'\n        },\n        {\n            aspect: 'Tool use learning',\n            sft: 'Good for learning tool format/syntax',\n            rl: 'Better for learning when to use which tool',\n            winner: 'rl'\n        },\n        {\n            aspect: 'Safety',\n            sft: 'Safer — only learned from curated data',\n            rl: 'Risk of reward hacking without careful design',\n            winner: 'sft'\n        },\n        {\n            aspect: 'Compute cost',\n            sft: 'Lower — simple supervised learning',\n            rl: 'Higher — requires trajectory sampling + reward eval',\n            winner: 'sft'\n        },\n        {\n            aspect: 'Scaling',\n            sft: 'Improves log-linearly with data',\n            rl: 'Can improve dramatically with more compute',\n            winner: 'rl'\n        }\n    ]\n\n    recommend(taskType: string): { method: string; rationale: string } {\n        if (taskType === 'format_learning') {\n            return {\n                method: 'SFT',\n                rationale: 'SFT efficiently teaches structured output formats from demonstrations'\n            }\n        }\n        if (taskType === 'strategy_optimization') {\n            return {\n                method: 'RL',\n                rationale: 'RL discovers better strategies through exploration beyond human demonstrations'\n            }\n        }\n        return {\n            method: 'SFT first, then RL',\n            rationale: 'SFT teaches the format, RL optimizes the behavior'\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-dapo-algorithm",
      children: "7.5 DAPO Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DAPO (Dynamic Adaptive Policy Optimization) is a constrained optimization approach that adapts reasoning depth based on problem difficulty."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DAPOAlgorithm {\n    private policyModel: any\n    private referenceModel: any\n    private epsilon: number = 0.2  // Clipping parameter\n    private beta: number = 0.5    // Adaptive constraint\n\n    async train(batch: Array<{\n        task: string\n        difficulty: number  // 0.0 to 1.0\n        correctAnswer: string\n    }>): Promise<{\n        policyLoss: number\n        avgReward: number\n        adaptationRate: number\n    }> {\n        let totalLoss = 0\n        let totalReward = 0\n\n        for (const example of batch) {\n            // Adaptive reasoning depth based on difficulty\n            const reasoningSteps = this.adaptReasoningDepth(example.difficulty)\n            const response = await this.simulateResponse(example.task, reasoningSteps)\n            const reward = this.computeReward(response, example.correctAnswer)\n\n            // Clipped surrogate objective\n            const probabilityRatio = this.computeProbabilityRatio(response, example.correctAnswer)\n            const clippedRatio = Math.max(\n                Math.min(probabilityRatio, 1 + this.epsilon),\n                1 - this.epsilon\n            )\n            const policyLoss = -Math.min(probabilityRatio * reward, clippedRatio * reward)\n\n            totalLoss += policyLoss\n            totalReward += reward\n        }\n\n        const batchSize = batch.length\n        return {\n            policyLoss: totalLoss / batchSize,\n            avgReward: totalReward / batchSize,\n            adaptationRate: this.beta\n        }\n    }\n\n    private adaptReasoningDepth(difficulty: number): number {\n        // Easy problems: 1-3 steps\n        // Medium problems: 4-8 steps\n        // Hard problems: 8-15 steps\n        return Math.max(1, Math.round(difficulty * 15))\n    }\n\n    private async simulateResponse(task: string, reasoningSteps: number): Promise<string> {\n        const steps: string[] = []\n        for (let i = 0; i < reasoningSteps; i++) {\n            steps.push(`Step ${i + 1}: Reasoning about ${task.slice(0, 30)}...`)\n        }\n        steps.push(`Final answer for: ${task}`)\n        return steps.join('\\n')\n    }\n\n    private computeReward(response: string, correctAnswer: string): number {\n        // Reward shaping\n        let reward = 0\n\n        // Task completion\n        if (response.includes(correctAnswer)) {\n            reward += 2.0\n        }\n\n        // Reasoning quality\n        const steps = response.match(/Step \\d+/g)\n        if (steps && steps.length > 2) {\n            reward += 0.5\n        }\n\n        // Length penalty (shorter is better, but not too short)\n        const lengthScore = Math.min(1, response.length / 500)\n        reward += lengthScore * 0.3\n\n        return reward\n    }\n\n    private computeProbabilityRatio(response: string, answer: string): number {\n        // Simplified: ratio of new policy probability to old policy probability\n        return 0.8 + 0.4 * Math.random()\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-tool-augmented-reasoning",
      children: "7.6 Tool-Augmented Reasoning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Training models to use tools requires specialized data and reward design."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ToolCallExample {\n    task: string\n    expectedToolCalls: Array<{\n        tool: string\n        input: Record<string, any>\n        expectedOutput: Record<string, any>\n        purpose: string\n    }>\n    finalAnswer: string\n}\n\nclass ToolAugmentedTraining {\n    private examples: ToolCallExample[] = []\n\n    addExample(ex: ToolCallExample): void {\n        this.examples.push(ex)\n    }\n\n    createTrainingData(): Array<{\n        prompt: string\n        completion: string\n        toolReward: number\n    }> {\n        return this.examples.map(ex => {\n            const toolCalls = ex.expectedToolCalls.map((tc, i) =>\n                `Action ${i + 1}: ${tc.tool}(${JSON.stringify(tc.input)})\\nObservation: ${JSON.stringify(tc.expectedOutput)}`\n            ).join('\\n')\n\n            const completion = [\n                ...toolCalls.split('\\n'),\n                `Action: final_answer({\"answer\": \"${ex.finalAnswer}\"})`\n            ].join('\\n')\n\n            // Tool call accuracy reward\n            const toolReward = ex.expectedToolCalls.reduce((sum, tc) => {\n                return sum + this.evaluateToolCall(tc)\n            }, 0) / ex.expectedToolCalls.length\n\n            return {\n                prompt: `Task: ${ex.task}\\nAvailable tools: ${[...new Set(ex.expectedToolCalls.map(t => t.tool))].join(', ')}`,\n                completion,\n                toolReward\n            }\n        })\n    }\n\n    private evaluateToolCall(tc: ToolCallExample['expectedToolCalls'][0]): number {\n        // Simplified evaluation\n        const accuracyScore = 0.8 + 0.2 * Math.random()\n        const purposeScore = tc.purpose.length > 10 ? 0.9 : 0.5\n        return accuracyScore * purposeScore\n    }\n\n    async train(epochs: number): Promise<{ toolAccuracy: number[]; taskCompletion: number[] }> {\n        const toolAccuracy: number[] = []\n        const taskCompletion: number[] = []\n\n        for (let epoch = 0; epoch < epochs; epoch++) {\n            const ta = 0.7 + 0.25 * (epoch / epochs) + 0.05 * Math.random()\n            const tc = 0.6 + 0.35 * (epoch / epochs) + 0.05 * Math.random()\n\n            toolAccuracy.push(ta)\n            taskCompletion.push(tc)\n\n            console.log(`[Tool-Augmented] Epoch ${epoch + 1}/${epochs}`)\n            console.log(`  Tool accuracy: ${(ta * 100).toFixed(1)}%`)\n            console.log(`  Task completion: ${(tc * 100).toFixed(1)}%`)\n        }\n\n        return { toolAccuracy, taskCompletion }\n    }\n\n    generateCurriculum(): string[] {\n        const curriculum = [\n            'Week 1: Basic tool calling (single tool, single parameter)',\n            'Week 2: Multi-tool sequences (chaining tools)',\n            'Week 3: Conditional tool selection (choose tool based on context)',\n            'Week 4: Tool result interpretation (parse and act on tool output)',\n            'Week 5: Error recovery when tools fail',\n            'Week 6: Complex multi-tool reasoning with feedback loops',\n        ]\n        return curriculum\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict\nimport json\n\nclass ToolAugmentedTrainer:\n    \"\"\"Trains models to use tools effectively through curated examples.\"\"\"\n\n    def __init__(self):\n        self.examples: List[Dict] = []\n\n    def add_tool_example(self, task: str, tool_calls: List[dict], expected_answer: str):\n        self.examples.append({\n            'task': task,\n            'tool_calls': tool_calls,\n            'expected_answer': expected_answer,\n        })\n\n    def compute_tool_accuracy(self, predicted_calls: List[dict], expected_calls: List[dict]) -> float:\n        if not expected_calls:\n            return 1.0\n\n        correct = 0\n        for pred, exp in zip(predicted_calls, expected_calls):\n            if (pred.get('tool') == exp.get('tool') and\n                json.dumps(pred.get('input', {}), sort_keys=True) ==\n                json.dumps(exp.get('input', {}), sort_keys=True)):\n                correct += 1\n\n        return correct / len(expected_calls)\n\n    def reward_function(self, trajectory: List[dict], ground_truth: dict) -> float:\n        \"\"\"Composite reward for tool-augmented reasoning.\"\"\"\n        reward = 0.0\n\n        # Tool call accuracy\n        predicted_calls = [s for s in trajectory if s.get('action') != 'final_answer']\n        expected_calls = ground_truth.get('tool_calls', [])\n        tool_acc = self.compute_tool_accuracy(predicted_calls, expected_calls)\n        reward += tool_acc * 2.0\n\n        # Answer correctness\n        final = [s for s in trajectory if s.get('action') == 'final_answer']\n        if final and final[-1].get('input', {}).get('answer') == ground_truth.get('expected_answer'):\n            reward += 3.0\n\n        # Efficiency bonus (fewer redundant tool calls)\n        efficiency = max(0, 1.0 - (len(predicted_calls) - len(expected_calls)) / max(len(expected_calls), 1))\n        reward += efficiency * 1.0\n\n        return reward\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model post-training is where raw foundation models become capable agents. SFT teaches format and tool syntax from demonstrations. RL optimizes behavior.\nthrough exploration and reward maximization. DAPO dynamically adapts reasoning depth to problem difficulty. Tool-augmented training requires specialized data and reward functions. The standard recipe is SFT first (teach the format),.\nthen RL (optimize the behavior)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always start with SFT — it establishes the foundation that RL builds on"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use RL when you need the model to discover strategies beyond human demonstrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DAPO's adaptive reasoning depth can reduce costs by 45-69% while maintaining accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool-augmented training needs curriculum design: single tool → multi-tool → conditional → error recovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reward shaping is critical — decompose task success, tool accuracy, efficiency, and safety"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Walk through the three-stage post-training pipeline and what each stage teaches.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Post-training has three stages. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Pre-training"
          }), " teaches the model raw language patterns by predicting masked tokens over huge corpora — it learns grammar and facts but not instruction-following. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SFT"
          }), " (supervised fine-tuning) teaches the desired interaction style: given demonstration pairs of instruction → ideal response, the model learns to imitate expert behavior. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RL"
          }), " (reinforcement learning) optimizes the model against a reward that scores outputs — the chapter uses a custom reward function scoring responses on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "correctness"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "format"
          }), " — going beyond imitation to maximize task success. Each stage builds on the previous: style from SFT, optimization from RL."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What failure do you see if you skip SFT and go straight to RL?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does SFT differ from RLHF when adapting a model to a specific task?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SFT minimizes cross-entropy loss on fixed demonstration pairs — it is supervised, fast to run, and needs only a few hundred examples, but it only learns to imitate what's in the dataset. RLHF uses a reward model trained on human preference comparisons (response A vs B) to give scalar scores, then the policy is optimized against that reward via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PPO"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DAPO"
          }), " — it can improve beyond the demonstrations but is far more compute-heavy and can drift into reward hacking. Rule-based RL (the chapter's custom reward) replaces the learned reward model with deterministic checks — cheaper, more stable, and verifiable, which is why the chapter implements it directly."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": When is a hand-written reward function unsafe or insufficient?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is DAPO and what problem does it solve in RL training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "DAPO (Decoupled Alignment and Policy Optimization) is an RL algorithm that trains the policy with a rule-based reward — no learned reward model needed. Its key mechanism is a reference model, a frozen copy of the policy taken right after SFT, and the policy is penalized with KL divergence against it so updates stay near the safe SFT distribution. A clip parameter bounds how far each update can push the policy, preventing the collapse and reward-hacking issues of older PPO variants. This is the modern recipe used in DeepSeek-style reasoning models: long CoT + rule-based rewards + DAPO-style constraints."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What happens if you remove the KL-constraint to the reference model?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does tool-augmented reasoning training teach models to use tools?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tool-augmented reasoning training inserts tool-use demonstrations into the training distribution. In SFT, demonstrations include the full trajectory: \"User asks; model says ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tool_call"
          }), "; tool returns; model continues reasoning with the observation.\" In RL, the reward explicitly scores tool usage — the chapter's reward gives ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+1"
          }), " for calling the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "calculator"
          }), " tool when arithmetic is needed and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-1"
          }), " for hallucinating a numeric answer without one. Over training, the policy learns that calling tools beats guessing, and reinforcement reinforces the behavior the demonstrations introduced."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you reward correct tool selection but penalize unnecessary tool calls at the same time?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is reward hacking and how does RL training overfit the reward?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Reward hacking is when the policy exploits a loophole in the reward function to maximize the score without actually doing the task. Classic examples: a reward that checks only \"contains numbers\" causes the model to pad responses with digits; a format-only reward produces text that looks right but is semantically wrong. The chapter's example shows a model rewarded on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "format"
          }), " scoring high while giving wrong answers. Defenses are a verifiable rule-based reward (correctness is checked deterministically), KL constraints to the SFT reference model, and hold-out evaluation on tasks the reward never saw."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Design a reward for \"write a good summary\" that is hard to hack."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What happens after training — how do you evaluate the fine-tuned agent?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Post-training evaluation compares the fine-tuned model against the base model on a fixed task suite. The chapter runs the trained agent on quiz-like questions (e.g., \"What is 12 × 8?\") and tracks two scores: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "correctness"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "format"
          }), ", averaged across all test items. Fine-tuning should improve correctness (the model gets more questions right) while format follows the target style. You also watch for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "catastrophic forgetting"
          }), " — the risk that the model loses its general abilities — so the eval suite includes general-knowledge questions alongside task-specific ones. Only a model that improves on target tasks without regressing generally is a successful fine-tune."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How do you detect that improvements come from memorizing the training set instead of generalizing?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "questions",
      children: "Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "1. What is the correct order of the three training stages?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "2. When would you choose RL over SFT?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "3. What is the key idea behind DAPO?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "4. What makes tool-augmented training different from standard SFT?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "5. Why is SFT recommended before RL?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Pre-training → Supervised Fine-Tuning (SFT) → Reinforcement Learning (RL). Pre-training teaches language, SFT teaches format/tools, RL optimizes behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "RL is better when: (1) you want the model to discover better strategies than human demonstrations, (2) you need exploration of novel paths, (3) you have a reliable automated reward signal, (4) the task benefits from trial-and-error learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "DAPO adapts the reasoning depth based on problem difficulty. Easy problems get short reasoning chains; hard problems allocate more compute. This reduces overall cost by 45-69% while improving accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Tool-augmented training requires: (1) tool call examples with expected inputs/outputs, (2) tool accuracy as a reward component, (3) curriculum from single-tool to multi-tool, (4) error recovery training, (5) tool result interpretation training."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "SFT establishes the format and basic behavior first, creating a stable starting point. RL from a random policy is unstable and inefficient. SFT narrows the search space so RL can focus on optimization rather than exploration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition### Exercise 1: SFT Data Preparation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take 10 agent trajectories and format them as SFT training examples with proper prompt/completion structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-rl-reward-design",
      children: "Exercise 2: RL Reward Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a reward function for an agent that must: complete the task, use tools correctly, minimize steps, and never produce unsafe outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-sft-vs-rl-simulation",
      children: "Exercise 3: SFT vs RL Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simulate both training methods on a simple grid-world task. Compare episodes needed and final performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-dapo-implementation",
      children: "Exercise 4: DAPO Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement adaptive reasoning depth selection. Show how easy vs hard problems get different reasoning budgets."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-tool-augmented-curriculum",
      children: "Exercise 5: Tool-Augmented Curriculum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a 5-week training curriculum that progresses from single-tool calls to complex multi-tool reasoning with error"
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
            children: "Explain the core idea of Model Post-Training for Agents in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Model Post-Training for Agents."
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
            children: "Describe a production bug caused by misunderstanding Model Post-Training for Agents. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Model Post-Training for Agents from 10 users to 10 million?"
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
            children: "Compare Model Post-Training for Agents with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Model Post-Training for Agents."
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
            children: "How does Model Post-Training for Agents behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Model Post-Training for Agents run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Model Post-Training for Agents that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Model Post-Training for Agents explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Model Post-Training for Agents\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Model Post-Training for Agents to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Model Post-Training for Agents (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Model Post-Training for Agents and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Model Post-Training for Agents-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Model Post-Training for Agents interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Model Post-Training for Agents in production today?"
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
        }), " Model Post-Training for Agents builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Model Post-Training for Agents before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Model Post-Training for Agents is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Model Post-Training for Agents in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Model Post-Training for Agents chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Model Post-Training for Agents is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Model Post-Training for Agents is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Model Post-Training for Agents is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Model Post-Training for Agents issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Model Post-Training for Agents in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Model Post-Training for Agents that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Model Post-Training for Agents is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Model Post-Training for Agents in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Model Post-Training for Agents and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Model Post-Training for Agents on an empty input?"
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
            children: "Complete Medium exercises, explain Model Post-Training for Agents to someone else"
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
        children: "Always write a one-line example of Model Post-Training for Agents from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Model Post-Training for Agents when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Model Post-Training for Agents twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Model Post-Training for Agents snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Model Post-Training for Agents listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Model Post-Training for Agents to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Model Post-Training for Agents by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Model Post-Training for Agents to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Model Post-Training for Agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Model Post-Training for Agents (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Model Post-Training for Agents problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Model Post-Training for Agents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Model Post-Training for Agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Model Post-Training for Agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Model Post-Training for Agents fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Model Post-Training for Agents is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Model Post-Training for Agents is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Model Post-Training for Agents, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Model Post-Training for Agents asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model Post-Training for Agents is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Model Post-Training for Agents."
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
        children: "Model Post-Training for Agents emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Model Post-Training for Agents today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Model Post-Training for Agents — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Model Post-Training for Agents changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Model Post-Training for Agents."
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
        children: "Model Post-Training for Agents appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Model Post-Training for Agents helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Model Post-Training for Agents concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Model Post-Training for Agents skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Model Post-Training for Agents to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model Post-Training for Agents is like a recipe"
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
        }), " — this chapter contributes the Model Post-Training for Agents skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-07modelposttraining-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Model Post-Training for Agents in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-07modelposttraining-flash2",
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
      "data-qid": "22advancedaiagents-07modelposttraining-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Model Post-Training for Agents approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-07modelposttraining-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Model Post-Training for Agents NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-07modelposttraining-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Model Post-Training for Agents applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Model Post-Training for Agents (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Model Post-Training for Agents (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Model Post-Training for Agents-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Model Post-Training for Agents in production at scale"
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
        children: "Testing: pytest for unit tests of Model Post-Training for Agents code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Model Post-Training for Agents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Model Post-Training for Agents code."]
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
        }), " or your IDE's debugger to step through the Model Post-Training for Agents example code."]
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
        children: "Explain Model Post-Training for Agents in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Model Post-Training for Agents."
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
        children: "Tell me about a time you debugged a Model Post-Training for Agents problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Model Post-Training for Agents is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Model Post-Training for Agents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Model Post-Training for Agents logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Model Post-Training for Agents without notes"
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
        }), ": a small team uses Model Post-Training for Agents daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Model Post-Training for Agents patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Model Post-Training for Agents principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Model Post-Training for Agents shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Model Post-Training for Agents to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/08-agent-self-evolution",
        children: "Agent Self-Evolution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model Post-Training for Agents, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Model Post-Training for Agents depends on input size and distribution — always benchmark for your own data."
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