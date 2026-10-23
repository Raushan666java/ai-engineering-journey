"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5404],{

/***/ 4740
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_06_agent_evaluation_md_82d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-06-agent-evaluation-md-82d.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_06_agent_evaluation_md_82d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/06-agent-evaluation","title":"Agent Evaluation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":277,"frontMatter":{"id":"06-agent-evaluation","slug":"/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation","title":"Agent Evaluation","sidebar_label":"Agent Evaluation","sidebar_position":277},"sidebar":"placementSidebar","previous":{"title":"Coding Agents","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/05-coding-agents"},"next":{"title":"Model Post-Training for Agents","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation.md


const frontMatter = {
	id: '06-agent-evaluation',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/06-agent-evaluation',
	title: 'Agent Evaluation',
	sidebar_label: 'Agent Evaluation',
	sidebar_position: 277
};
const contentTitle = 'Agent Evaluation';

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
  "value": "6.1 Agent Benchmarks Overview",
  "id": "61-agent-benchmarks-overview",
  "level": 2
}, {
  "value": "6.2 Evaluation Metrics",
  "id": "62-evaluation-metrics",
  "level": 2
}, {
  "value": "6.3 ELO Rating System",
  "id": "63-elo-rating-system",
  "level": 2
}, {
  "value": "6.4 Cost Analysis",
  "id": "64-cost-analysis",
  "level": 2
}, {
  "value": "6.5 Evaluation Datasets",
  "id": "65-evaluation-datasets",
  "level": 2
}, {
  "value": "6.6 Observability &amp; Tracing",
  "id": "66-observability--tracing",
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
  "value": "Exercise 2: ELO Tournament",
  "id": "exercise-2-elo-tournament",
  "level": 3
}, {
  "value": "Exercise 3: Cost Breakdown",
  "id": "exercise-3-cost-breakdown",
  "level": 3
}, {
  "value": "Exercise 4: Dataset Design",
  "id": "exercise-4-dataset-design",
  "level": 3
}, {
  "value": "Exercise 5: Tracing Implementation",
  "id": "exercise-5-tracing-implementation",
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
        id: "agent-evaluation",
        children: "Agent Evaluation"
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
            children: "Understand agent-specific evaluation benchmarks (SWE-bench, GAIA, OSWorld, Terminal-Bench)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement ELO rating systems for agent comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure agent cost, latency, and quality tradeoffs systematically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build evaluation pipelines with observability and tracing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design evaluation datasets with statistical significance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced agents use context engineering, memory, and multi-agent collaboration to solve complex problems. This module covers cutting-edge agent patterns used at leading AI labs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding agent evaluation is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how agent evaluation works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Benchmarks Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SWE-bench, GAIA, OSWorld, Terminal-Bench"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success rate, task completion, tool use accuracy, robustness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELO Rating System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise comparison, relative ranking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token usage, latency percentiles, A/B comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task design, diversity, statistical significance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observability & Tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spans, events, cost attribution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Benchmarks[Agent Benchmarks]\r\n        SWE[SWE-bench<br/>Code Fixes]\r\n        GAIA[GAIA<br/>Tool Use]\r\n        OSW[OSWorld<br/>OS Tasks]\r\n        TB[Terminal-Bench<br/>Terminal Ops]\r\n    end\r\n    subgraph Metrics[Evaluation Metrics]\r\n        SR[Success Rate]\r\n        TU[Tool Accuracy]\r\n        COST[Cost per Task]\r\n        LAT[Latency]\r\n        ROB[Robustness]\r\n    end\r\n    subgraph Ranking[Ranking]\r\n        ELO[ELO Rating]\r\n        A_B[A/B Testing]\r\n        LEAD[Leaderboard]\r\n    end\r\n    Benchmarks --> Metrics\r\n    Metrics --> Ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-agent-benchmarks-overview",
      children: "6.1 Agent Benchmarks Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each benchmark tests a different dimension of agent capability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Benchmark {\r\n    name: string\r\n    description: string\r\n    numTasks: number\r\n    difficulty: 'easy' | 'medium' | 'hard' | 'expert'\r\n    evaluates: string[]\r\n    avgStepsPerTask: number\r\n}\r\n\r\nclass BenchmarkRegistry {\r\n    private benchmarks: Map<string, Benchmark> = new Map()\r\n\r\n    constructor() {\r\n        this.register({\r\n            name: 'SWE-bench',\r\n            description: 'Solve real GitHub issues by generating patches',\r\n            numTasks: 2294,\r\n            difficulty: 'hard',\r\n            evaluates: ['code understanding', 'patch generation', 'debugging'],\r\n            avgStepsPerTask: 15\r\n        })\r\n        this.register({\r\n            name: 'GAIA',\r\n            description: 'General AI Assistants — multi-step reasoning with tools',\r\n            numTasks: 466,\r\n            difficulty: 'medium',\r\n            evaluates: ['tool use', 'multi-step reasoning', 'web search'],\r\n            avgStepsPerTask: 8\r\n        })\r\n        this.register({\r\n            name: 'OSWorld',\r\n            description: 'Operating system-level tasks (file mgmt, apps, config)',\r\n            numTasks: 369,\r\n            difficulty: 'hard',\r\n            evaluates: ['OS navigation', 'app usage', 'file management'],\r\n            avgStepsPerTask: 12\r\n        })\r\n        this.register({\r\n            name: 'Terminal-Bench',\r\n            description: 'Real terminal tasks (compile, deploy, configure)',\r\n            numTasks: 100,\r\n            difficulty: 'medium',\r\n            evaluates: ['terminal commands', 'system admin', 'error recovery'],\r\n            avgStepsPerTask: 10\r\n        })\r\n    }\r\n\r\n    private register(b: Benchmark): void {\r\n        this.benchmarks.set(b.name, b)\r\n    }\r\n\r\n    list(): Benchmark[] {\r\n        return [...this.benchmarks.values()]\r\n    }\r\n\r\n    get(name: string): Benchmark | undefined {\r\n        return this.benchmarks.get(name)\r\n    }\r\n\r\n    getByDifficulty(level: string): Benchmark[] {\r\n        return [...this.benchmarks.values()]\r\n            .filter(b => b.difficulty === level)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import List\r\n\r\n@dataclass\r\nclass BenchmarkConfig:\r\n    name: str\r\n    description: str\r\n    tasks: List[str]\r\n    timeout_seconds: int = 300\r\n\r\n    def estimate_duration(self) -> int:\r\n        return len(self.tasks) * self.timeout_seconds\r\n\r\nclass BenchmarkRunner:\r\n    \"\"\"Runs agents against standardized benchmarks.\"\"\"\r\n\r\n    def __init__(self, config: BenchmarkConfig):\r\n        self.config = config\r\n        self.results = []\r\n\r\n    async def evaluate(self, agent_fn) -> dict:\r\n        passed = 0\r\n        total = len(self.config.tasks)\r\n        total_cost = 0.0\r\n        total_time = 0.0\r\n\r\n        for task in self.config.tasks:\r\n            import time\r\n            start = time.time()\r\n            try:\r\n                result = await agent_fn(task)\r\n                success = result.get('success', False)\r\n                cost = result.get('cost', 0)\r\n            except Exception as e:\r\n                success = False\r\n                cost = 0\r\n\r\n            elapsed = time.time() - start\r\n            if success:\r\n                passed += 1\r\n            total_cost += cost\r\n            total_time += elapsed\r\n\r\n            self.results.append({\r\n                'task': task[:50],\r\n                'success': success,\r\n                'time': elapsed,\r\n                'cost': cost,\r\n            })\r\n\r\n        return {\r\n            'benchmark': self.config.name,\r\n            'success_rate': passed / total,\r\n            'passed': passed,\r\n            'total': total,\r\n            'avg_time': total_time / total,\r\n            'total_cost': total_cost,\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-evaluation-metrics",
      children: "6.2 Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent-specific metrics go beyond simple accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AgentMetrics {\r\n    taskCompletionRate: number\r\n    toolCallAccuracy: number\r\n    averageStepsPerTask: number\r\n    averageCostPerTask: number\r\n    averageLatencyMs: number\r\n    robustnessScore: number\r\n    hallucinationRate: number\r\n}\r\n\r\nclass MetricsCalculator {\r\n    calculate(results: TaskResult[]): AgentMetrics {\r\n        const completed = results.filter(r => r.success).length\r\n        const total = results.length\r\n\r\n        const toolResults = results.flatMap(r => r.toolCalls)\r\n        const correctTools = toolResults.filter(t => t.success).length\r\n        const totalTools = toolResults.length\r\n\r\n        const totalCost = results.reduce((s, r) => s + r.cost, 0)\r\n        const totalLatency = results.reduce((s, r) => s + r.latencyMs, 0)\r\n        const totalSteps = results.reduce((s, r) => s + r.steps, 0)\r\n\r\n        return {\r\n            taskCompletionRate: completed / total,\r\n            toolCallAccuracy: totalTools > 0 ? correctTools / totalTools : 0,\r\n            averageStepsPerTask: totalSteps / total,\r\n            averageCostPerTask: totalCost / total,\r\n            averageLatencyMs: totalLatency / total,\r\n            robustnessScore: this.calculateRobustness(results),\r\n            hallucinationRate: this.calculateHallucinationRate(results)\r\n        }\r\n    }\r\n\r\n    private calculateRobustness(results: TaskResult[]): number {\r\n        // Measure consistency across runs\r\n        const taskGroups = new Map<string, TaskResult[]>()\r\n        for (const r of results) {\r\n            if (!taskGroups.has(r.taskId)) taskGroups.set(r.taskId, [])\r\n            taskGroups.get(r.taskId)!.push(r)\r\n        }\r\n\r\n        let consistencyScore = 0\r\n        let groupCount = 0\r\n        for (const [, group] of taskGroups) {\r\n            if (group.length < 2) continue\r\n            const successes = group.filter(r => r.success).length\r\n            consistencyScore += successes / group.length\r\n            groupCount++\r\n        }\r\n\r\n        return groupCount > 0 ? consistencyScore / groupCount : 0\r\n    }\r\n\r\n    private calculateHallucinationRate(results: TaskResult[]): number {\r\n        const hallucinationPatterns = [\r\n            /i don't have (access|data|information)/i,\r\n            /as an ai/i,\r\n            /i cannot/i,\r\n            /based on my training/i\r\n        ]\r\n\r\n        let hallucinated = 0\r\n        for (const r of results) {\r\n            for (const response of r.responses) {\r\n                let isHallucination = false\r\n                for (const pattern of hallucinationPatterns) {\r\n                    if (pattern.test(response) && r.success) {\r\n                        isHallucination = true\r\n                        break\r\n                    }\r\n                }\r\n                if (isHallucination) hallucinated++\r\n            }\r\n        }\r\n\r\n        return results.length > 0 ? hallucinated / results.length : 0\r\n    }\r\n}\r\n\r\ninterface TaskResult {\r\n    taskId: string\r\n    success: boolean\r\n    steps: number\r\n    cost: number\r\n    latencyMs: number\r\n    toolCalls: Array<{ toolName: string; success: boolean; latencyMs: number }>\r\n    responses: string[]\r\n}\r\n\r\ninterface ScoredComparison {\r\n    winner: string\r\n    loser: string\r\n    margin: 'decisive' | 'moderate' | 'narrow'\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-elo-rating-system",
      children: "6.3 ELO Rating System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ELO provides relative rankings through pairwise comparisons instead of absolute scores."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ELORating {\r\n    private ratings: Map<string, number> = new Map()\r\n    private K: number = 32  // Sensitivity factor\r\n    private matches: Array<{ player1: string; player2: string; winner: string }> = []\r\n\r\n    constructor(defaultRating: number = 1500) {\r\n        this.ratings.set('default', defaultRating)\r\n    }\r\n\r\n    registerPlayer(name: string, initialRating?: number): void {\r\n        this.ratings.set(name, initialRating ?? this.ratings.get('default') ?? 1500)\r\n    }\r\n\r\n    recordMatch(player1: string, player2: string, winner: string): void {\r\n        this.matches.push({ player1, player2, winner })\r\n\r\n        const r1 = this.ratings.get(player1) ?? 1500\r\n        const r2 = this.ratings.get(player2) ?? 1500\r\n\r\n        const e1 = 1 / (1 + Math.pow(10, (r2 - r1) / 400))\r\n        const e2 = 1 - e1\r\n\r\n        const s1 = winner === player1 ? 1 : winner === player2 ? 0 : 0.5\r\n        const s2 = 1 - s1\r\n\r\n        this.ratings.set(player1, r1 + this.K * (s1 - e1))\r\n        this.ratings.set(player2, r2 + this.K * (s2 - e2))\r\n    }\r\n\r\n    getRating(player: string): number {\r\n        return this.ratings.get(player) ?? 1500\r\n    }\r\n\r\n    getLeaderboard(): Array<{ player: string; rating: number; matches: number }> {\r\n        const matchCount = new Map<string, number>()\r\n        for (const m of this.matches) {\r\n            matchCount.set(m.player1, (matchCount.get(m.player1) ?? 0) + 1)\r\n            matchCount.set(m.player2, (matchCount.get(m.player2) ?? 0) + 1)\r\n        }\r\n\r\n        return [...this.ratings.entries()]\r\n            .filter(([name]) => name !== 'default')\r\n            .map(([player, rating]) => ({\r\n                player,\r\n                rating: Math.round(rating),\r\n                matches: matchCount.get(player) ?? 0\r\n            }))\r\n            .sort((a, b) => b.rating - a.rating)\r\n    }\r\n\r\n    getExpectedScore(player1: string, player2: string): number {\r\n        const r1 = this.ratings.get(player1) ?? 1500\r\n        const r2 = this.ratings.get(player2) ?? 1500\r\n        return 1 / (1 + Math.pow(10, (r2 - r1) / 400))\r\n    }\r\n\r\n    simulateTournament(players: string[], numRounds: number): void {\r\n        for (let round = 0; round < numRounds; round++) {\r\n            for (let i = 0; i < players.length; i++) {\r\n                for (let j = i + 1; j < players.length; j++) {\r\n                    const p1 = players[i]\r\n                    const p2 = players[j]\r\n                    const expected = this.getExpectedScore(p1, p2)\r\n                    const winner = Math.random() < expected ? p1 : p2\r\n                    this.recordMatch(p1, p2, winner)\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\r\nfrom typing import Dict, List, Tuple\r\n\r\nclass ELORatingSystem:\r\n    \"\"\"ELO-based agent comparison through pairwise matches.\"\"\"\r\n\r\n    def __init__(self, k_factor: int = 32, default_rating: int = 1500):\r\n        self.ratings: Dict[str, float] = {}\r\n        self.k = k_factor\r\n        self.default = default_rating\r\n        self.match_history: List[Tuple[str, str, str]] = []\r\n\r\n    def register(self, name: str, rating: float = None):\r\n        self.ratings[name] = rating or self.default\r\n\r\n    def expected_score(self, r_a: float, r_b: float) -> float:\r\n        return 1.0 / (1.0 + math.pow(10, (r_b - r_a) / 400))\r\n\r\n    def record_match(self, player_a: str, player_b: str, winner: str):\r\n        self.match_history.append((player_a, player_b, winner))\r\n\r\n        r_a = self.ratings.get(player_a, self.default)\r\n        r_b = self.ratings.get(player_b, self.default)\r\n\r\n        e_a = self.expected_score(r_a, r_b)\r\n        e_b = 1 - e_a\r\n\r\n        s_a = 1.0 if winner == player_a else (0.0 if winner == player_b else 0.5)\r\n        s_b = 1.0 - s_a\r\n\r\n        self.ratings[player_a] = r_a + self.k * (s_a - e_a)\r\n        self.ratings[player_b] = r_b + self.k * (s_b - e_b)\r\n\r\n    def leaderboard(self) -> List[dict]:\r\n        match_counts = {}\r\n        for a, b, _ in self.match_history:\r\n            match_counts[a] = match_counts.get(a, 0) + 1\r\n            match_counts[b] = match_counts.get(b, 0) + 1\r\n\r\n        return sorted(\r\n            [{'name': n, 'rating': round(r), 'matches': match_counts.get(n, 0)}\r\n             for n, r in self.ratings.items()],\r\n            key=lambda x: -x['rating']\r\n        )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-cost-analysis",
      children: "6.4 Cost Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the full cost of agent operation across all components."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CostBreakdown {\r\n    component: string\r\n    tokens: number\r\n    cost: number\r\n    percentage: number\r\n}\r\n\r\ninterface LatencyPercentiles {\r\n    p50: number\r\n    p95: number\r\n    p99: number\r\n    mean: number\r\n}\r\n\r\nclass CostAnalyzer {\r\n    analyze(llmCalls: Array<{ promptTokens: number; completionTokens: number; cacheTokens: number }>): {\r\n        totalCost: number\r\n        breakdown: CostBreakdown[]\r\n        latencyPercentiles: LatencyPercentiles\r\n    } {\r\n        const inputCostPer1K = 0.003\r\n        const outputCostPer1K = 0.015\r\n        const cacheCostPer1K = 0.0003\r\n\r\n        let totalInputTokens = 0\r\n        let totalOutputTokens = 0\r\n        let totalCacheTokens = 0\r\n\r\n        for (const call of llmCalls) {\r\n            totalInputTokens += call.promptTokens\r\n            totalOutputTokens += call.completionTokens\r\n            totalCacheTokens += call.cacheTokens\r\n        }\r\n\r\n        const inputCost = (totalInputTokens / 1000) * inputCostPer1K\r\n        const outputCost = (totalOutputTokens / 1000) * outputCostPer1K\r\n        const cacheSavings = (totalCacheTokens / 1000) * cacheCostPer1K\r\n        const totalCost = inputCost + outputCost\r\n\r\n        const breakdown: CostBreakdown[] = [\r\n            { component: 'Input tokens', tokens: totalInputTokens, cost: inputCost, percentage: (inputCost / totalCost) * 100 },\r\n            { component: 'Output tokens', tokens: totalOutputTokens, cost: outputCost, percentage: (outputCost / totalCost) * 100 },\r\n            { component: 'Cache savings', tokens: totalCacheTokens, cost: -cacheSavings, percentage: 0 },\r\n        ]\r\n\r\n        return {\r\n            totalCost,\r\n            breakdown,\r\n            latencyPercentiles: this.calculatePercentiles(llmCalls.map((_, i) => i * 100 + 50))\r\n        }\r\n    }\r\n\r\n    private calculatePercentiles(latencies: number[]): LatencyPercentiles {\r\n        const sorted = [...latencies].sort((a, b) => a - b)\r\n        return {\r\n            p50: sorted[Math.floor(sorted.length * 0.5)],\r\n            p95: sorted[Math.floor(sorted.length * 0.95)],\r\n            p99: sorted[Math.floor(sorted.length * 0.99)],\r\n            mean: sorted.reduce((s, v) => s + v, 0) / sorted.length\r\n        }\r\n    }\r\n}\r\n\r\nclass A_BTest {\r\n    async compare(agentA: (task: string) => Promise<any>, agentB: (task: string) => Promise<any>, tasks: string[]): Promise<{\r\n        winner: string\r\n        aMetrics: AgentMetrics\r\n        bMetrics: AgentMetrics\r\n        improvement: string\r\n    }> {\r\n        const resultsA = await Promise.all(tasks.map(t => agentA(t)))\r\n        const resultsB = await Promise.all(tasks.map(t => agentB(t)))\r\n\r\n        const calc = new MetricsCalculator()\r\n        const metricsA = calc.calculate(resultsA.map((r, i) => ({\r\n            taskId: tasks[i],\r\n            success: r.success ?? false,\r\n            steps: r.steps ?? 1,\r\n            cost: r.cost ?? 0,\r\n            latencyMs: r.latencyMs ?? 0,\r\n            toolCalls: r.toolCalls ?? [],\r\n            responses: r.responses ?? []\r\n        })))\r\n\r\n        const metricsB = calc.calculate(resultsB.map((r, i) => ({\r\n            taskId: tasks[i],\r\n            success: r.success ?? false,\r\n            steps: r.steps ?? 1,\r\n            cost: r.cost ?? 0,\r\n            latencyMs: r.latencyMs ?? 0,\r\n            toolCalls: r.toolCalls ?? [],\r\n            responses: r.responses ?? []\r\n        })))\r\n\r\n        const improvement = ((metricsA.taskCompletionRate - metricsB.taskCompletionRate) / metricsB.taskCompletionRate * 100).toFixed(1) + '%'\r\n\r\n        return {\r\n            winner: metricsA.taskCompletionRate > metricsB.taskCompletionRate ? 'Agent A' : 'Agent B',\r\n            aMetrics: metricsA,\r\n            bMetrics: metricsB,\r\n            improvement\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-evaluation-datasets",
      children: "6.5 Evaluation Datasets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Designing good evaluation datasets is critical for meaningful results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EvalTask {\r\n    id: string\r\n    description: string\r\n    category: string\r\n    difficulty: 'easy' | 'medium' | 'hard'\r\n    expectedTools: string[]\r\n    successCriteria: string[]\r\n    maxSteps: number\r\n}\r\n\r\nclass DatasetDesigner {\r\n    generateBalancedDataset(totalTasks: number = 100): EvalTask[] {\r\n        const categories = ['web_search', 'code_gen', 'data_analysis', 'planning', 'file_ops']\r\n        const difficulties: Array<'easy' | 'medium' | 'hard'> = ['easy', 'medium', 'hard']\r\n        const tasks: EvalTask[] = []\r\n\r\n        // Distribute evenly\r\n        const perCategory = Math.floor(totalTasks / categories.length)\r\n        const perDifficulty = Math.floor(perCategory / difficulties.length)\r\n\r\n        for (const category of categories) {\r\n            for (const difficulty of difficulties) {\r\n                for (let i = 0; i < perDifficulty; i++) {\r\n                    tasks.push({\r\n                        id: `${category}_${difficulty}_${i}`,\r\n                        description: `A ${difficulty} ${category} task #${i}`,\r\n                        category,\r\n                        difficulty,\r\n                        expectedTools: [category],\r\n                        successCriteria: ['completes_task', 'uses_correct_tools'],\r\n                        maxSteps: difficulty === 'hard' ? 20 : difficulty === 'medium' ? 10 : 5\r\n                    })\r\n                }\r\n            }\r\n        }\r\n\r\n        return tasks\r\n    }\r\n\r\n    validateDataset(tasks: EvalTask[]): { valid: boolean; issues: string[] } {\r\n        const issues: string[] = []\r\n\r\n        // Check for duplicates\r\n        const ids = new Set<string>()\r\n        for (const t of tasks) {\r\n            if (ids.has(t.id)) {\r\n                issues.push(`Duplicate task ID: ${t.id}`)\r\n            }\r\n            ids.add(t.id)\r\n        }\r\n\r\n        // Check category balance\r\n        const catCount = new Map<string, number>()\r\n        tasks.forEach(t => catCount.set(t.category, (catCount.get(t.category) ?? 0) + 1))\r\n        const maxCount = Math.max(...catCount.values())\r\n        const minCount = Math.min(...catCount.values())\r\n        if (maxCount - minCount > tasks.length * 0.2) {\r\n            issues.push('Categories are imbalanced')\r\n        }\r\n\r\n        // Check difficulty balance\r\n        const diffCount = new Map<string, number>()\r\n        tasks.forEach(t => diffCount.set(t.difficulty, (diffCount.get(t.difficulty) ?? 0) + 1))\r\n        if (diffCount.size < 3) {\r\n            issues.push('Not all difficulty levels represented')\r\n        }\r\n\r\n        return {\r\n            valid: issues.length === 0,\r\n            issues\r\n        }\r\n    }\r\n\r\n    statisticalRelevance(results: number[], baseline: number[]): {\r\n        significant: boolean\r\n        pValue: number\r\n        effectSize: number\r\n    } {\r\n        // Simplified t-test\r\n        const meanA = results.reduce((s, v) => s + v, 0) / results.length\r\n        const meanB = baseline.reduce((s, v) => s + v, 0) / baseline.length\r\n\r\n        const varA = results.reduce((s, v) => s + (v - meanA) ** 2, 0) / (results.length - 1)\r\n        const varB = baseline.reduce((s, v) => s + (v - meanB) ** 2, 0) / (baseline.length - 1)\r\n\r\n        const pooled = Math.sqrt(varA / results.length + varB / baseline.length)\r\n        const tStat = (meanA - meanB) / pooled\r\n\r\n        // Simplified p-value (degrees of freedom = n-1)\r\n        const df = Math.min(results.length, baseline.length) - 1\r\n        const pValue = Math.min(0.5, Math.abs(tStat) / (df + Math.abs(tStat)))\r\n        const effectSize = (meanA - meanB) / Math.sqrt((varA + varB) / 2)\r\n\r\n        return {\r\n            significant: pValue < 0.05,\r\n            pValue,\r\n            effectSize\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-observability--tracing",
      children: "6.6 Observability & Tracing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every agent interaction should be traceable for debugging and optimization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Span {\r\n    id: string\r\n    parentId: string | null\r\n    name: string\r\n    startTime: number\r\n    endTime: number\r\n    metadata: Record<string, any>\r\n    events: SpanEvent[]\r\n}\r\n\r\ninterface SpanEvent {\r\n    timestamp: number\r\n    name: string\r\n    attributes: Record<string, any>\r\n}\r\n\r\nclass AgentTracer {\r\n    private spans: Map<string, Span> = new Map()\r\n    private activeSpanId: string | null = null\r\n\r\n    startSpan(name: string, metadata: Record<string, any> = {}): string {\r\n        const id = `span_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`\r\n        const span: Span = {\r\n            id,\r\n            parentId: this.activeSpanId,\r\n            name,\r\n            startTime: performance.now(),\r\n            endTime: 0,\r\n            metadata,\r\n            events: []\r\n        }\r\n        this.spans.set(id, span)\r\n        this.activeSpanId = id\r\n        return id\r\n    }\r\n\r\n    endSpan(spanId: string): void {\r\n        const span = this.spans.get(spanId)\r\n        if (span) {\r\n            span.endTime = performance.now()\r\n            if (span.parentId) {\r\n                this.activeSpanId = span.parentId\r\n            }\r\n        }\r\n    }\r\n\r\n    addEvent(spanId: string, name: string, attributes: Record<string, any> = {}): void {\r\n        const span = this.spans.get(spanId)\r\n        if (span) {\r\n            span.events.push({\r\n                timestamp: performance.now(),\r\n                name,\r\n                attributes\r\n            })\r\n        }\r\n    }\r\n\r\n    getTrace(spanId: string): Span | undefined {\r\n        return this.spans.get(spanId)\r\n    }\r\n\r\n    getFullTrace(spanId: string): Span[] {\r\n        const result: Span[] = []\r\n        const queue: string[] = [spanId]\r\n\r\n        while (queue.length > 0) {\r\n            const current = queue.shift()!\r\n            const span = this.spans.get(current)\r\n            if (span) result.push(span)\r\n\r\n            // Find children\r\n            for (const [, s] of this.spans) {\r\n                if (s.parentId === current) {\r\n                    queue.push(s.id)\r\n                }\r\n            }\r\n        }\r\n\r\n        return result\r\n    }\r\n\r\n    export(): Array<{ name: string; durationMs: number; metadata: Record<string, any> }> {\r\n        return [...this.spans.values()]\r\n            .filter(s => s.endTime > 0)\r\n            .map(s => ({\r\n                name: s.name,\r\n                durationMs: s.endTime - s.startTime,\r\n                metadata: s.metadata\r\n            }))\r\n    }\r\n\r\n    getTotalCost(traceId: string, costPerMs: number = 0.001): number {\r\n        const trace = this.getFullTrace(traceId)\r\n        const totalDuration = trace.reduce((sum, s) => sum + (s.endTime - s.startTime), 0)\r\n        return totalDuration * costPerMs\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport uuid\r\nfrom typing import Dict, List, Optional\r\n\r\nclass AgentTracer:\r\n    \"\"\"Lightweight tracing for agent interactions.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.spans: Dict[str, dict] = {}\r\n        self.active_span: Optional[str] = None\r\n\r\n    def start_span(self, name: str, metadata: dict = None) -> str:\r\n        span_id = str(uuid.uuid4())[:8]\r\n        self.spans[span_id] = {\r\n            'id': span_id,\r\n            'parent': self.active_span,\r\n            'name': name,\r\n            'start': time.time(),\r\n            'end': None,\r\n            'metadata': metadata or {},\r\n            'events': [],\r\n        }\r\n        self.active_span = span_id\r\n        return span_id\r\n\r\n    def end_span(self, span_id: str):\r\n        span = self.spans.get(span_id)\r\n        if span:\r\n            span['end'] = time.time()\r\n            span['duration_ms'] = (span['end'] - span['start']) * 1000\r\n            if span['parent']:\r\n                self.active_span = span['parent']\r\n\r\n    def add_event(self, span_id: str, name: str, attrs: dict = None):\r\n        span = self.spans.get(span_id)\r\n        if span:\r\n            span['events'].append({\r\n                'time': time.time(),\r\n                'name': name,\r\n                'attributes': attrs or {},\r\n            })\r\n\r\n    def get_trace(self, span_id: str) -> List[dict]:\r\n        trace = []\r\n        queue = [span_id]\r\n        while queue:\r\n            current = queue.pop(0)\r\n            span = self.spans.get(current)\r\n            if span:\r\n                trace.append(span)\r\n                for s_id, s in self.spans.items():\r\n                    if s.get('parent') == current:\r\n                        queue.append(s_id)\r\n        return trace\r\n\r\n    def summary(self) -> dict:\r\n        durations = [\r\n            s['duration_ms']\r\n            for s in self.spans.values()\r\n            if s.get('duration_ms') is not None\r\n        ]\r\n        return {\r\n            'total_spans': len(self.spans),\r\n            'avg_duration_ms': sum(durations) / len(durations) if durations else 0,\r\n            'max_duration_ms': max(durations) if durations else 0,\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent evaluation requires specialized benchmarks beyond standard ML metrics. SWE-bench, GAIA, OSWorld, and Terminal-Bench each test different capabilities. ELO ratings provide robust relative rankings through pairwise comparison. Cost analysis reveals the real economics of agent operation — often dominated by multi-turn reasoning chains. Well-designed evaluation datasets balance categories and.\r\ndifficulties. Observability and tracing are prerequisites for meaningful evaluation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never evaluate an agent on a single benchmark — each tests different capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ELO for relative ranking, not absolute scores — it handles uneven matchups better"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track cost per task as a first-class metric, not just accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design evaluation datasets with balanced categories and difficulty levels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tracing from day one — you can't improve what you can't observe"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m22-s06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Why is agent evaluation fundamentally harder than evaluating a single LLM response?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An LLM evaluation compares one output to a reference. An agent performs a multi-step trajectory — tool calls, state changes, environment observations — where the final answer may be correct while the process was wasteful or unsafe, or the answer may be wrong despite correct steps. Evaluation must therefore cover both final outcome and intermediate behavior: tool call accuracy, whether steps were necessary, cost, latency, and safety. The chapter's framework measures exactly this mix: success rate, efficiency, cost, latency, and robustness, which a single-pass LLM eval cannot capture."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Give an example where final-answer accuracy would rank two agents equal but they differ in quality."]
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
      "data-qid": "m22-s06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Compare the major agent benchmarks — SWE-bench, GAIA, OSWorld, Terminal-Bench.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SWE-bench tests real GitHub issues: an agent reads the repo, makes changes, and must pass the hidden test suite to resolve the issue — the gold standard for coding agents. GAIA covers assistant tasks needing reasoning, tool use, and multi-step handling with questions designed to be trivial for humans but hard for AI. OSWorld evaluates computer-use agents on real desktop GUI tasks like editing a spreadsheet in LibreOffice, where screen capture and mouse/keyboard control matter. Terminal-Bench benchmarks CLI agents operating in real terminal environments with shell commands. Each one probes a different capability: code, tool-augmented reasoning, GUI interaction, and terminal operation."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you combine multiple benchmarks into one agent score without gaming any single one?"]
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
      "data-qid": "m22-s06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What metrics does the chapter's evaluation framework track and how are they computed?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The framework tracks five categories. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "successRate"
          }), " is the fraction of tasks fully completed correctly; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "toolAccuracy"
          }), " measures whether each tool call was necessary and correct (use/reuse/abuse); ", (0,jsx_runtime.jsx)(_components.code, {
            children: "efficiency"
          }), " counts tool calls and time per task — the best agents complete in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "< 5"
          }), " calls; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cost & latency"
          }), " track tokens, API spend, and response time (successful tasks are typically under 20 seconds); and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "robustness"
          }), " runs tasks under injected noise — retries, malformed inputs, and rate limits — to see how many still succeed. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EvaluationReport"
          }), " aggregates per-task results and prints averages plus a distribution of outcomes per task."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Which of these metrics would you optimize first for a customer-facing agent?"]
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
      "data-qid": "m22-s06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does the framework rate individual tool calls, and what is tool abuse?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Each tool call is classified into three categories. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "necessary"
          }), " means the call was required to complete the task (e.g., searching before answering). ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unnecessary"
          }), " means the call was wasteful but recoverable — like calling ", (0,jsx_runtime.jsx)(_components.code, {
            children: "web_search"
          }), " for a fact the model already knew, or calling ", (0,jsx_runtime.jsx)(_components.code, {
            children: "calculator"
          }), " for simple arithmetic. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "abuse"
          }), " is the worst case: a tool call that should never have happened, such as invoking ", (0,jsx_runtime.jsx)(_components.code, {
            children: "email_send"
          }), " in the middle of a read-only task or attempting a system command from a data-retrieval query. Tool accuracy is the fraction of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "necessary"
          }), " calls, and the report flags tasks where abuse occurred as critical failures."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you classify a call that is unnecessary but was the only way to recover from a previous error?"]
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
      "data-qid": "m22-s06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How would you design an evaluation dataset and know your results are statistically valid?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A good eval dataset has three properties: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "diversity"
          }), " (tasks spread across types — knowledge, computation, coding, tool use), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "difficulty balance"
          }), " (easy, medium, hard in proportions similar to production traffic), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fixed ground truth"
          }), " (deterministic expected answers). You must also isolate sources of variance: run multiple trials per task because model sampling is stochastic, report mean and spread rather than a single run, and hold out the dataset from prompt optimization to avoid overfitting. When comparing two harness versions, the chapter recommends A/B runs with the same seed and dataset, plus significance checks on success-rate differences."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How many trials per task do you need to distinguish a 2% success-rate difference?"]
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
      "data-qid": "m22-s06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is an ELO rating system applied to agents, and why use it over raw success rates?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In agent ELO, models play pairwise \"matches\" on the same task and win or lose; after each match the winner takes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "K * (1 - winProbability)"
          }), " points from the loser, where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "winProbability"
          }), " is derived from the current ratings. ELO handles circular superiority (A beats B, B beats C, C beats A) better than a linear success-rate ranking, converges to a stable ordering with enough matches, and gives a single comparable scalar per model. The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ELOEvaluator"
          }), " runs round-robin matches over tasks and prints a leaderboard, showing small rating gaps for similar models."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What happens to ELO accuracy when a task set heavily favors one model's strength?"]
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
      children: "1. What does SWE-bench specifically evaluate?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "2. Why is ELO better than average success rate for agent ranking?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "3. What is the first step in agent cost analysis?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "4. What makes a good evaluation dataset?"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "5. What information should every trace span include?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "An agent's ability to solve real GitHub issues by generating correct patches. It tests code understanding, debugging, and patch generation across 2,294 real issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "ELO handles uneven matchups — a 1500 player beating a 1000 player gains fewer points than beating a 2000 player. It also converges faster and doesn't require all agents to face the same tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Token accounting. Measure input, output, and cache tokens per turn, per task, and total. Then apply pricing to each category. This reveals whether costs come from long reasoning chains, large tool outputs, or repeated retries."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Balanced categories (no single type dominates), balanced difficulties (easy/medium/hard), clear success criteria, sufficient sample size for statistical significance, and no task leakage (training data contamination)."
    }), "\n", (0,jsx_runtime.jsx)(_components.summary, {
      children: "Span ID (unique), parent ID (for trace tree), name (human-readable), start and end timestamps, metadata (inputs, outputs, costs), and events (key intermediate steps with timing)."
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
        children: "Not practicing enough problems to build pattern recognition### Exercise 1: Multi-Benchmark Evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run an agent against 3 benchmarks (SWE-bench, GAIA, Terminal-Bench) and compare performance profiles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-elo-tournament",
      children: "Exercise 2: ELO Tournament"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create 4 agent variants, run a round-robin tournament with 50 tasks each, compute ELO ratings."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-cost-breakdown",
      children: "Exercise 3: Cost Breakdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instrument an agent to track token usage per component. Analyze which component costs the most."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-dataset-design",
      children: "Exercise 4: Dataset Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a balanced 50-task evaluation dataset across 5 categories and 3 difficulty levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-tracing-implementation",
      children: "Exercise 5: Tracing Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add span tracing to an existing agent. Export the trace and identify the 3 slowest co"
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
            children: "How does Agent Evaluation behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Agent Evaluation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Agent Evaluation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Agent Evaluation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Agent Evaluation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Agent Evaluation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Agent Evaluation in production today?"
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
        }), " Agent Evaluation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Agent Evaluation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Agent Evaluation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Agent Evaluation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Agent Evaluation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 06 Agent Evaluation is ___. — Answer: O(k) per tool call where k=tool latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Agent Evaluation is ___. — Answer: infinite loops, tool failures, context overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Agent Evaluation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Agent Evaluation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Agent Evaluation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Agent Evaluation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Agent Evaluation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Agent Evaluation to someone else"
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
        children: "Always write a one-line example of Agent Evaluation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Agent Evaluation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Agent Evaluation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Agent Evaluation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Agent Evaluation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Agent Evaluation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Agent Evaluation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Agent Evaluation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yao et al. (2022) 'ReAct: Synergizing Reasoning and Acting in Language Models' — the foundational ReAct paper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shinn et al. (2023) 'Reflexion: Language Agents with Verbal Reinforcement Learning'"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangGraph documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://langchain-ai.github.io/langgraph",
          children: "https://langchain-ai.github.io/langgraph"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenAI function calling guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs/guides/function-calling",
          children: "https://platform.openai.com/docs/guides/function-calling"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 22 — builds the foundation for 06 Agent Evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Agent Evaluation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Agent Evaluation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Agent Evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Agent Evaluation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Agent Evaluation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Agent Evaluation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Agent Evaluation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Agent Evaluation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent Evaluation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Agent Evaluation."
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
        children: "Agent Evaluation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Agent Evaluation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Agent Evaluation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Agent Evaluation changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all tool inputs with JSON Schema before execution — LLMs can generate malformed arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tool-level permissions — agents should not have access to destructive operations (DELETE, DROP TABLE) without human approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log every tool call with inputs and outputs for audit trails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use sandboxed execution environments for code-running agents (Docker containers, E2B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement prompt injection defenses — malicious tool outputs can hijack agent behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent loop is a form of test-time compute scaling — more steps = more reasoning capacity at inference time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool selection is a classification problem: the LLM assigns probability to each tool given the current context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory compression (summarizing old steps) is analogous to attention truncation in transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent success rate improves with better system prompts — treat the system prompt as a hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent systems parallelize reasoning the same way distributed computing parallelizes computation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "06 Agent Evaluation is like a GPS navigation system"
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
          }), " — this chapter contributes the Agent Evaluation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-06agentevaluation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Agent Evaluation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-06agentevaluation-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-06agentevaluation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Agent Evaluation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-06agentevaluation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Agent Evaluation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "22advancedaiagents-06agentevaluation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Agent Evaluation applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production agent stack: LangGraph for stateful workflows, OpenAI function calling or Anthropic tool use for structured tool invocation, LangSmith for tracing and debugging."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Agent Evaluation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Agent Evaluation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Agent Evaluation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Agent Evaluation in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangGraph"
        }), " — stateful multi-step agent framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain AgentExecutor"
        }), " — ReAct agent implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAI Assistants API"
        }), " — managed agent with code interpreter and file search"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangSmith"
        }), " — agent tracing, debugging, and evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic tool use"
        }), " — Claude's native function calling interface Evaluation"]
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
        }), ": Add structured logging at each stage of the 06 Agent Evaluation pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Agent Evaluation."
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
        children: "Tell me about a time you debugged a Agent Evaluation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Agent Evaluation is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_agent_evaluation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Agent Evaluation.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Agent Evaluation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Agent Evaluation without notes"
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
          children: "Devin"
        }), " (Cognition AI) uses a coding agent that writes, runs, and debugs code autonomously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor"
        }), " uses agents to refactor entire codebases based on natural language instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Salesforce Einstein"
        }), " uses agents to autonomously update CRM records and draft emails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harvey AI"
        }), " uses legal agents that research case law, draft contracts, and flag risks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the ReAct loop (Thought → Action → Observation) and explain how you'd add observability with LangSmith traces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/07-model-post-training",
        children: "Model Post-Training for Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent Evaluation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Agent Evaluation depends on input size and distribution — always benchmark for your own data."
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