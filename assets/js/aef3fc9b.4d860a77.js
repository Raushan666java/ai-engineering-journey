"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59688],{

/***/ 32705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_06_production_loops_md_aef_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-06-production-loops-md-aef.json
const site_docs_courses_loop_engineering_ch_06_production_loops_md_aef_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch06-production-loops","title":"Chapter 6: Production Loops","description":"Learning Objectives","source":"@site/docs/courses/loop-engineering/ch06-production-loops.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch06-production-loops","permalink":"/ai-engineering-journey/loop-engineering/ch06-production-loops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"ch06-production-loops","slug":"/loop-engineering/ch06-production-loops","title":"Chapter 6: Production Loops","sidebar_label":"Chapter 6: Production Loops","sidebar_position":6},"sidebar":"course-loop-engineering","previous":{"title":"Chapter 5: Self-Improvement Loops","permalink":"/ai-engineering-journey/loop-engineering/ch05-self-improvement-loops"},"next":{"title":"Chapter 7: Loop Safety","permalink":"/ai-engineering-journey/loop-engineering/ch07-loop-safety"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/ch06-production-loops.md


const frontMatter = {
	id: 'ch06-production-loops',
	slug: '/loop-engineering/ch06-production-loops',
	title: 'Chapter 6: Production Loops',
	sidebar_label: 'Chapter 6: Production Loops',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Production Loops';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "6.1 Production Deployment Pipeline",
  "id": "61-production-deployment-pipeline",
  "level": 3
}, {
  "value": "6.2 Shadow and Canary Deployment",
  "id": "62-shadow-and-canary-deployment",
  "level": 3
}, {
  "value": "6.3 Cost Governor Loops",
  "id": "63-cost-governor-loops",
  "level": 3
}, {
  "value": "6.4 Observability Loops",
  "id": "64-observability-loops",
  "level": 3
}, {
  "value": "6.5 SRE for AI Systems",
  "id": "65-sre-for-ai-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 6.1: ProductionLoopManager",
  "id": "example-61-productionloopmanager",
  "level": 3
}, {
  "value": "Example 6.2: AgentCostGovernor",
  "id": "example-62-agentcostgovernor",
  "level": 3
}, {
  "value": "Example 6.3: ShadowDeployer",
  "id": "example-63-shadowdeployer",
  "level": 3
}, {
  "value": "Extended Implementation: Circuit Breaker, Health Checker, Canary Release, and Fallback Strategies",
  "id": "extended-implementation-circuit-breaker-health-checker-canary-release-and-fallback-strategies",
  "level": 3
}, {
  "value": "Mermaid: Production Loop with Safety and Observability",
  "id": "mermaid-production-loop-with-safety-and-observability",
  "level": 3
}, {
  "value": "Extended Implementation: Load Shedder, Adaptive Timeout, Rate Limiter, Health Endpoint, and Metrics Exporter",
  "id": "extended-implementation-load-shedder-adaptive-timeout-rate-limiter-health-endpoint-and-metrics-exporter",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "chapter-6-production-loops",
        children: "Chapter 6: Production Loops"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement a deploy → monitor → drift-detect → retrain → redeploy pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy shadow and canary deployments that compare production vs. candidate models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a cost governor loop that tracks token usage, per-iteration accounting, and auto-halting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct observability loops with structured traces, derived metrics, and alert thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define SLIs and SLOs for agent quality and map them to runbook actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a ProductionLoopManager with timestamped lifecycle steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement an AgentCostGovernor with budget-aware execution and max-retry halting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a ShadowDeployer that scores production and candidate responses in parallel"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-production-deployment-pipeline",
      children: "6.1 Production Deployment Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard production loop for AI agents follows a continuous lifecycle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐\n│  Deploy  │──▶│ Monitor  │──▶│  Detect  │──▶│ Retrain  │──▶│ Redeploy │\n│          │   │          │   │  Drift   │   │          │   │          │\n└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘\n                                                                    │\n                                                                    └──────▶ loop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each phase has specific responsibilities:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deploy."
      }), " Push a new model version or agent configuration to a serving infrastructure. Tag the deployment with a version, timestamp, and rollback metadata. The deployment must be idempotent: deploying the same version twice yields identical behaviour."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitor."
      }), " Collect structured logs from every agent invocation: input, output, latency, token count, error code. Aggregate these into time-series metrics (5th, 50th, 95th percentiles) and expose them through a metrics endpoint."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detect drift."
      }), " Compare current metrics against a baseline window. Common drift signals: rising latency, falling task-completion rate, increasing retry counts, shift in output-token distribution, spike in refusal or guardrail-hit rates. Use statistical tests (Kolmogorov–Smirnov, Z-score) to trigger alerts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Retrain."
      }), " When drift exceeds a threshold, enqueue a retraining job. The retraining dataset includes recent production data (with PII scrubbed) plus any newly collected preference pairs or human corrections. The new model version is validated on a held-out test set before entering the deploy phase."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Redeploy."
      }), " Swap the production model with the validated candidate. Strategies: blue-green (instant swap with pre-warmed infrastructure) or canary (gradual traffic shift with automatic rollback)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-shadow-and-canary-deployment",
      children: "6.2 Shadow and Canary Deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shadow deployment."
      }), " Route production traffic to both the current model and a candidate model simultaneously, but only serve the current model's response to the user. The candidate's response is recorded and scored offline. Shadow deployment has zero user-facing risk because the candidate never affects the user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌────────────────┐\n User ──request───▶│  Traffic Split │\n                    └────┬────┬──────┘\n                         │    │\n                         │    └──▶ Candidate Model (scored, discarded)\n                         │\n                         └──▶ Production Model (served to user)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canary deployment."
      }), " Route a small percentage of real traffic (e.g. 5%) to the candidate model and serve its response to those users. Monitor error rates and quality metrics. If metrics stay within SLO for a window (e.g. 30 minutes), gradually increase the canary percentage to 25%, 50%, 100%. Roll back immediately if any metric breaches the threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Traffic: [████████████████░░░░] 80% production / 20% canary\n         ─── monitor for N minutes ───\n         [████████████░░░░░░░░] 60% production / 40% canary\n         ─── monitor ───\n         [░░░░░░░░░░░░░░░░░░░░] 100% canary (promoted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-cost-governor-loops",
      children: "6.3 Cost Governor Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent loops can execute hundreds of LLM calls per task. Without a cost governor, a runaway agent can burn through budget in minutes. The cost governor implements three controls:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Budget tracking."
      }), " Each request context carries a budget (e.g. $0.50 per task, 10,000 tokens per request). Every LLM call deducts from the budget. The governor maintains running totals at the request, session, and account level."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Per-iteration accounting."
      }), " Each loop iteration records the cost incurred: model used, input tokens, output tokens, compute time. These records feed into real-time cost dashboards and post-hoc billing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-halt."
      }), " When the budget is exhausted, the governor stops the agent mid-flight, persists its state, and raises an alert. Optionally it can switch to a cheaper fallback model (e.g. GPT-4o-mini) for the remaining steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────┐     ┌──────────────┐     ┌──────────────┐\n│  Loop Step   │────▶│  Record Cost │────▶│  Budget OK?  │──yes──▶ continue\n└──────────────┘     └──────────────┘     └──────┬───────┘\n                                                  │ no\n                                                  ▼\n                                          ┌──────────────┐\n                                          │  Halt /      │\n                                          │  Fallback    │\n                                          └──────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-observability-loops",
      children: "6.4 Observability Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observability for AI systems goes beyond traditional application monitoring. The three pillars apply, but with agent-specific extensions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traces."
      }), " A trace represents one end-user request through the entire agent loop. Each span within the trace captures a single LLM call, tool invocation, or decision step. Spans carry metadata: model name, token counts, latency, retry count, the exact prompt and response."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics."
      }), " Derived from traces at aggregation time. Key metrics:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agent.latency.p50"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agent.latency.p95"
        }), " — response time distribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agent.tokens.prompt.avg"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agent.tokens.completion.avg"
        }), " — token consumption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agent.steps.per_request"
        }), " — loop iteration count"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agent.error_rate"
        }), " — fraction of requests with errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agent.drift.score"
        }), " — distribution shift relative to baseline"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alerts."
      }), " Threshold-based and trend-based. Examples:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P95 latency > 5s for 5 consecutive minutes → page"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate > 2% in 1-minute window → warn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift score > 0.15 relative to 24h baseline → investigate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-sre-for-ai-systems",
      children: "6.5 SRE for AI Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service-Level Objectives for agent loops require careful definition because quality is multi-dimensional:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SLI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target SLO"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task completion rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of requests where the agent completes its stated goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥ 99.0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valid response rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of responses that parse, pass validation, and contain no hallucinated facts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥ 99.5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency P95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95th percentile of end-to-end response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 8 seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average LLM API cost per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ $0.03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety violation rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of responses flagged by the constitutional critic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 0.1%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An error budget of 100% − SLO defines how much unreliability is acceptable per month. When the budget is depleted, all non-critical deployments freeze until reliability recovers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-61-productionloopmanager",
      children: "Example 6.1: ProductionLoopManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lifecycle manager that orchestrates deploy → monitor → drift-detect → retrain → redeploy with full timestamped logging."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { randomUUID } from \"node:crypto\";\n\n// ── Types ─────────────────────────────────────────────────────\ninterface Deployment {\n  id: string;\n  modelVersion: string;\n  deployedAt: Date;\n  status: \"active\" | \"draining\" | \"rolled-back\";\n}\n\ninterface MetricSnapshot {\n  timestamp: Date;\n  latencyP50: number;\n  latencyP95: number;\n  errorRate: number;\n  avgTokensPerRequest: number;\n  taskCompletionRate: number;\n}\n\ninterface DriftReport {\n  detected: boolean;\n  score: number;\n  threshold: number;\n  signals: string[];\n  generatedAt: Date;\n}\n\ntype LifecycleStep =\n  | \"deploy\"\n  | \"monitor\"\n  | \"drift-detect\"\n  | \"retrain\"\n  | \"rollback\";\n\ninterface LifecycleEvent {\n  step: LifecycleStep;\n  deploymentId: string;\n  timestamp: Date;\n  detail: string;\n}\n\n// ── Configuration ─────────────────────────────────────────────\ninterface ProductionLoopConfig {\n  modelVersion: string;\n  driftThreshold: number;\n  monitorWindowMinutes: number;\n  retrainHook: () => Promise<string>; // returns new model version\n}\n\n// ── Loop Manager ──────────────────────────────────────────────\nexport class ProductionLoopManager {\n  private config: ProductionLoopConfig;\n  private events: LifecycleEvent[] = [];\n  private deployment: Deployment;\n  private metricsBuffer: MetricSnapshot[] = [];\n  private baseline: MetricSnapshot | null = null;\n\n  constructor(config: ProductionLoopConfig) {\n    this.config = config;\n    this.deployment = {\n      id: randomUUID(),\n      modelVersion: config.modelVersion,\n      deployedAt: new Date(),\n      status: \"active\",\n    };\n  }\n\n  // ── Logging ─────────────────────────────────────────────────\n  private log(\n    step: LifecycleStep,\n    detail: string,\n  ): void {\n    this.events.push({\n      step,\n      deploymentId: this.deployment.id,\n      timestamp: new Date(),\n      detail,\n    });\n  }\n\n  get history(): readonly LifecycleEvent[] {\n    return this.events;\n  }\n\n  // ── Deploy ──────────────────────────────────────────────────\n  async deploy(version?: string): Promise<void> {\n    if (version) {\n      this.deployment = {\n        id: randomUUID(),\n        modelVersion: version,\n        deployedAt: new Date(),\n        status: \"active\",\n      };\n    }\n    this.log(\"deploy\", `Deployed ${this.deployment.modelVersion}`);\n  }\n\n  // ── Monitor ─────────────────────────────────────────────────\n  ingestMetric(snapshot: MetricSnapshot): void {\n    this.metricsBuffer.push(snapshot);\n\n    // Keep only the configured window\n    const cutoff = Date.now() - this.config.monitorWindowMinutes * 60_000;\n    this.metricsBuffer = this.metricsBuffer.filter(\n      (m) => m.timestamp.getTime() > cutoff,\n    );\n\n    this.log(\"monitor\", `Ingested snapshot at ${snapshot.timestamp.toISOString()}`);\n  }\n\n  private currentMetrics(): MetricSnapshot | null {\n    if (this.metricsBuffer.length === 0) return null;\n    const recent = this.metricsBuffer[this.metricsBuffer.length - 1];\n    return recent;\n  }\n\n  // ── Drift Detect ────────────────────────────────────────────\n  async detectDrift(): Promise<DriftReport> {\n    const current = this.currentMetrics();\n    if (!current) {\n      return { detected: false, score: 0, threshold: this.config.driftThreshold, signals: [], generatedAt: new Date() };\n    }\n\n    // First call establishes baseline\n    if (!this.baseline) {\n      this.baseline = current;\n      this.log(\"drift-detect\", \"Baseline established\");\n      return { detected: false, score: 0, threshold: this.config.driftThreshold, signals: [], generatedAt: new Date() };\n    }\n\n    const signals: string[] = [];\n    let score = 0;\n\n    // Compare current against baseline\n    const latencyDelta = Math.abs(current.latencyP95 - this.baseline.latencyP95);\n    if (latencyDelta > 1.0) {\n      signals.push(`Latency P95 shifted by ${latencyDelta.toFixed(2)}s`);\n      score += 0.3;\n    }\n\n    const errDelta = current.errorRate - this.baseline.errorRate;\n    if (errDelta > 0.01) {\n      signals.push(`Error rate increased ${(errDelta * 100).toFixed(1)}%`);\n      score += 0.4;\n    }\n\n    const completionDelta = this.baseline.taskCompletionRate - current.taskCompletionRate;\n    if (completionDelta > 0.02) {\n      signals.push(`Task completion dropped ${(completionDelta * 100).toFixed(1)}%`);\n      score += 0.3;\n    }\n\n    const detected = score >= this.config.driftThreshold;\n    if (detected) {\n      this.log(\"drift-detect\", `Drift detected: score=${score.toFixed(2)} signals=${signals.join(\"; \")}`);\n    }\n\n    return { detected, score, threshold: this.config.driftThreshold, signals, generatedAt: new Date() };\n  }\n\n  // ── Retrain ─────────────────────────────────────────────────\n  async retrain(): Promise<void> {\n    this.log(\"retrain\", \"Retraining triggered\");\n    const newVersion = await this.config.retrainHook();\n    this.log(\"retrain\", `New model version: ${newVersion}`);\n    this.deployment.modelVersion = newVersion;\n    this.baseline = null; // reset baseline for new model\n  }\n\n  // ── Full cycle ──────────────────────────────────────────────\n  async runCycle(): Promise<DriftReport> {\n    this.log(\"deploy\", `Cycle start, version ${this.deployment.modelVersion}`);\n    const drift = await this.detectDrift();\n    if (drift.detected) {\n      await this.retrain();\n    }\n    return drift;\n  }\n}\n\n// ── Usage ─────────────────────────────────────────────────────\nconst manager = new ProductionLoopManager({\n  modelVersion: \"gpt-4o-2025-08-01\",\n  driftThreshold: 0.5,\n  monitorWindowMinutes: 10,\n  retrainHook: async () => \"gpt-4o-2025-09-01-fine-tuned-v2\",\n});\n\nawait manager.deploy();\n\nmanager.ingestMetric({\n  timestamp: new Date(),\n  latencyP50: 1.2,\n  latencyP95: 3.8,\n  errorRate: 0.005,\n  avgTokensPerRequest: 420,\n  taskCompletionRate: 0.995,\n});\n\nconst report = await manager.runCycle();\nconsole.log(report);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-62-agentcostgovernor",
      children: "Example 6.2: AgentCostGovernor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A budget-aware execution wrapper that tracks token usage, computes per-iteration cost, enforces per-request and per-session budgets, and automatically halts the agent with a persisted checkpoint."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { randomUUID } from \"node:crypto\";\n\n// ── Cost model ────────────────────────────────────────────────\ninterface ModelPricing {\n  inputPricePer1kTokens: number;  // USD\n  outputPricePer1kTokens: number;\n}\n\nconst PRICING: Record<string, ModelPricing> = {\n  \"gpt-4o\":       { inputPricePer1kTokens: 0.005,  outputPricePer1kTokens: 0.015 },\n  \"gpt-4o-mini\":  { inputPricePer1kTokens: 0.00015, outputPricePer1kTokens: 0.0006 },\n  \"claude-3.5-sonnet\": { inputPricePer1kTokens: 0.003, outputPricePer1kTokens: 0.015 },\n};\n\n// ── Per-iteration record ──────────────────────────────────────\ninterface CostRecord {\n  iteration: number;\n  model: string;\n  inputTokens: number;\n  outputTokens: number;\n  cost: number;\n  timestamp: Date;\n}\n\ninterface BudgetConfig {\n  /** Maximum total cost per single request. */\n  maxCostPerRequest: number;\n  /** Maximum total cost across a session. */\n  sessionBudget: number;\n  /** Hard limit on loop iterations. */\n  maxIterations: number;\n  /** Fallback model cheaper than the primary. */\n  fallbackModel?: string;\n}\n\n// ── Checkpoint ────────────────────────────────────────────────\ninterface Checkpoint {\n  sessionId: string;\n  step: number;\n  state: unknown;\n  accumulatedCost: number;\n}\n\n// ── Cost Governor ─────────────────────────────────────────────\nexport class AgentCostGovernor {\n  private config: BudgetConfig;\n  private records: CostRecord[] = [];\n  private sessionId: string;\n  private halted = false;\n\n  constructor(config: BudgetConfig) {\n    this.config = config;\n    this.sessionId = randomUUID();\n  }\n\n  get sessionBudgetUsed(): number {\n    return this.records.reduce((sum, r) => sum + r.cost, 0);\n  }\n\n  get requestBudgetUsed(): number {\n    const last = this.records.slice(-this.config.maxIterations);\n    return last.reduce((sum, r) => sum + r.cost, 0);\n  }\n\n  get isHalted(): boolean {\n    return this.halted;\n  }\n\n  /** Compute cost for a single call. */\n  private computeCost(\n    model: string,\n    inputTokens: number,\n    outputTokens: number,\n  ): number {\n    const pricing = PRICING[model];\n    if (!pricing) throw new Error(`Unknown model: ${model}`);\n    const inputCost = (inputTokens / 1000) * pricing.inputPricePer1kTokens;\n    const outputCost = (outputTokens / 1000) * pricing.outputPricePer1kTokens;\n    return inputCost + outputCost;\n  }\n\n  /** Record a cost entry and check budgets. Returns the model to use (may switch to fallback). */\n  recordAndCheck(\n    model: string,\n    inputTokens: number,\n    outputTokens: number,\n  ): { approved: boolean; model: string; reason?: string } {\n    if (this.halted) {\n      return { approved: false, model, reason: \"Session already halted\" };\n    }\n\n    const cost = this.computeCost(model, inputTokens, outputTokens);\n    const iteration = this.records.length + 1;\n\n    this.records.push({ iteration, model, inputTokens, outputTokens, cost, timestamp: new Date() });\n\n    // Check max iterations\n    if (iteration > this.config.maxIterations) {\n      this.halt(`Max iterations (${this.config.maxIterations}) reached`);\n      return { approved: false, model, reason: `Max iterations reached` };\n    }\n\n    // Check request budget\n    if (this.requestBudgetUsed > this.config.maxCostPerRequest) {\n      if (this.config.fallbackModel && model !== this.config.fallbackModel) {\n        // Switch to fallback instead of halting\n        return { approved: true, model: this.config.fallbackModel, reason: \"Switched to fallback\" };\n      }\n      this.halt(`Request budget ($${this.config.maxCostPerRequest}) exceeded`);\n      return { approved: false, model, reason: \"Request budget exceeded\" };\n    }\n\n    // Check session budget\n    if (this.sessionBudgetUsed > this.config.sessionBudget) {\n      this.halt(`Session budget ($${this.config.sessionBudget}) exceeded`);\n      return { approved: false, model, reason: \"Session budget exceeded\" };\n    }\n\n    return { approved: true, model };\n  }\n\n  /** Persist state to checkpoint. */\n  checkpoint(state: unknown): Checkpoint {\n    return {\n      sessionId: this.sessionId,\n      step: this.records.length,\n      state,\n      accumulatedCost: this.sessionBudgetUsed,\n    };\n  }\n\n  private halt(reason: string): void {\n    this.halted = true;\n    console.error(`[CostGovernor] HALT: ${reason}`);\n  }\n\n  /** Export cost records for dashboards. */\n  exportRecords(): CostRecord[] {\n    return [...this.records];\n  }\n\n  /** Summary stats. */\n  summary(): { totalCost: number; totalTokens: number; iterations: number; halted: boolean } {\n    return {\n      totalCost: this.sessionBudgetUsed,\n      totalTokens: this.records.reduce((s, r) => s + r.inputTokens + r.outputTokens, 0),\n      iterations: this.records.length,\n      halted: this.halted,\n    };\n  }\n}\n\n// ── Usage ─────────────────────────────────────────────────────\nconst governor = new AgentCostGovernor({\n  maxCostPerRequest: 0.10,\n  sessionBudget: 1.0,\n  maxIterations: 50,\n  fallbackModel: \"gpt-4o-mini\",\n});\n\nfor (let i = 0; i < 60; i++) {\n  const { approved, model, reason } = governor.recordAndCheck(\"gpt-4o\", 500, 200);\n  if (!approved) {\n    console.log(`Stopped at iteration ${i + 1}: ${reason}`);\n    break;\n  }\n  if (model !== \"gpt-4o\") {\n    console.log(`Iteration ${i + 1}: switched to ${model}`);\n  }\n}\n\nconsole.log(governor.summary());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-63-shadowdeployer",
      children: "Example 6.3: ShadowDeployer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A shadow deployer that routes requests to both production and candidate models, collects latency and quality scores, and decides whether to promote the candidate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { randomUUID } from \"node:crypto\";\nimport { z } from \"zod\";\n\n// ── Types ─────────────────────────────────────────────────────\ninterface ShadowResult {\n  requestId: string;\n  prompt: string;\n  production: { output: string; latencyMs: number };\n  candidate: { output: string; latencyMs: number };\n  qualityScore: { production: number; candidate: number };\n  promoted: boolean;\n  timestamp: Date;\n}\n\ntype ModelFn = (prompt: string) => Promise<{ output: string; latencyMs: number }>;\ntype QualityScorer = (prompt: string, output: string) => Promise<number>;\n\n// ── Promotion Config ──────────────────────────────────────────\ninterface PromotionThresholds {\n  /** Candidate must score at least this much higher than production. */\n  minScoreDelta: number;\n  /** Candidate latency P95 must be no worse than this multiple of production. */\n  maxLatencyRatio: number;\n  /** Minimum number of shadow samples before promotion. */\n  minSamples: number;\n}\n\n// ── Shadow Deployer ───────────────────────────────────────────\nexport class ShadowDeployer {\n  private results: ShadowResult[] = [];\n  private promoted = false;\n\n  constructor(\n    private productionModel: ModelFn,\n    private candidateModel: ModelFn,\n    private scorer: QualityScorer,\n    private thresholds: PromotionThresholds,\n    private onPromote?: (deployer: ShadowDeployer) => Promise<void>,\n  ) {}\n\n  get isPromoted(): boolean {\n    return this.promoted;\n  }\n\n  get totalRuns(): number {\n    return this.results.length;\n  }\n\n  /** Run a single shadow request. */\n  async runRequest(prompt: string): Promise<ShadowResult> {\n    const requestId = randomUUID();\n\n    // Run both models in parallel\n    const [prodResult, candResult] = await Promise.all([\n      this.productionModel(prompt),\n      this.candidateModel(prompt),\n    ]);\n\n    // Score both outputs\n    const [prodScore, candScore] = await Promise.all([\n      this.scorer(prompt, prodResult.output),\n      this.scorer(prompt, candResult.output),\n    ]);\n\n    const result: ShadowResult = {\n      requestId,\n      prompt,\n      production: { output: prodResult.output, latencyMs: prodResult.latencyMs },\n      candidate: { output: candResult.output, latencyMs: candResult.latencyMs },\n      qualityScore: { production: prodScore, candidate: candScore },\n      promoted: false,\n      timestamp: new Date(),\n    };\n\n    this.results.push(result);\n\n    // Check promotion conditions\n    if (\n      !this.promoted &&\n      this.results.length >= this.thresholds.minSamples &&\n      this.shouldPromote()\n    ) {\n      await this.promote();\n    }\n\n    return result;\n  }\n\n  /** Aggregate scores across all runs. */\n  private aggregates(): {\n    avgProdScore: number;\n    avgCandScore: number;\n    avgProdLatency: number;\n    avgCandLatency: number;\n  } {\n    const n = this.results.length;\n    if (n === 0) return { avgProdScore: 0, avgCandScore: 0, avgProdLatency: 0, avgCandLatency: 0 };\n\n    const sum = (key: (r: ShadowResult) => number) =>\n      this.results.reduce((a, r) => a + key(r), 0);\n\n    return {\n      avgProdScore: sum((r) => r.qualityScore.production) / n,\n      avgCandScore: sum((r) => r.qualityScore.candidate) / n,\n      avgProdLatency: sum((r) => r.production.latencyMs) / n,\n      avgCandLatency: sum((r) => r.candidate.latencyMs) / n,\n    };\n  }\n\n  /** Decision logic for promotion. */\n  private shouldPromote(): boolean {\n    const agg = this.aggregates();\n    const scoreDelta = agg.avgCandScore - agg.avgProdScore;\n    const latencyRatio = agg.avgCandLatency / Math.max(agg.avgProdLatency, 0.01);\n\n    return (\n      scoreDelta >= this.thresholds.minScoreDelta &&\n      latencyRatio <= this.thresholds.maxLatencyRatio\n    );\n  }\n\n  /** Execute promotion callback. */\n  private async promote(): Promise<void> {\n    this.promoted = true;\n    this.results.forEach((r) => (r.promoted = true));\n    await this.onPromote?.(this);\n  }\n\n  /** Export full shadow results for observability. */\n  exportResults(): ShadowResult[] {\n    return [...this.results];\n  }\n\n  /** Generate a comparison report. */\n  report(): string {\n    const agg = this.aggregates();\n    return [\n      `ShadowDeployer Report`,\n      `Samples: ${this.results.length}`,\n      `Promoted: ${this.promoted}`,\n      `Production avg score: ${agg.avgProdScore.toFixed(2)}`,\n      `Candidate avg score: ${agg.avgCandScore.toFixed(2)}`,\n      `Score delta: ${(agg.avgCandScore - agg.avgProdScore).toFixed(2)}`,\n      `Production avg latency: ${agg.avgProdLatency.toFixed(0)}ms`,\n      `Candidate avg latency: ${agg.avgCandLatency.toFixed(0)}ms`,\n    ].join(\"\\n\");\n  }\n}\n\n// ── Usage ─────────────────────────────────────────────────────\nasync function main() {\n  const productionModel: ModelFn = async (prompt) => ({\n    output: `Production answer: ${prompt}`,\n    latencyMs: 800 + Math.random() * 400,\n  });\n\n  const candidateModel: ModelFn = async (prompt) => ({\n    output: `Candidate answer: ${prompt} (improved)`,\n    latencyMs: 600 + Math.random() * 300,\n  });\n\n  const scorer: QualityScorer = async (_prompt, output) =>\n    output.includes(\"improved\") ? 92 : 75;\n\n  const deployer = new ShadowDeployer(\n    productionModel,\n    candidateModel,\n    scorer,\n    {\n      minScoreDelta: 10,\n      maxLatencyRatio: 1.5,\n      minSamples: 5,\n    },\n    async (dep) => {\n      console.log(\"CANDIDATE PROMOTED!\");\n      console.log(dep.report());\n    },\n  );\n\n  for (let i = 0; i < 8; i++) {\n    const result = await deployer.runRequest(`Request ${i + 1}`);\n    console.log(\n      `Run ${i + 1}: prod=${result.qualityScore.production} cand=${result.qualityScore.candidate}`,\n    );\n  }\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-circuit-breaker-health-checker-canary-release-and-fallback-strategies",
      children: "Extended Implementation: Circuit Breaker, Health Checker, Canary Release, and Fallback Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/// <reference types=\"node\" />\n\nimport { randomUUID } from \"node:crypto\";\n\n// ── Circuit Breaker State Machine ──────────────────────────────\ntype CircuitState = \"CLOSED\" | \"HALF_OPEN\" | \"OPEN\";\n\ninterface CircuitBreakerConfig {\n  failureThreshold: number;\n  successThreshold: number;\n  halfOpenTimeoutMs: number;\n  cooldownMs: number;\n}\n\nclass CircuitBreakerStateMachine {\n  private state: CircuitState = \"CLOSED\";\n  private failureCount = 0;\n  private successCount = 0;\n  private lastStateChange: number = Date.now();\n\n  constructor(private config: CircuitBreakerConfig) {}\n\n  get currentState(): CircuitState {\n    return this.state;\n  }\n\n  /** Call before each operation. Throws if circuit is OPEN and not yet cooled down. */\n  preCheck(): void {\n    if (this.state === \"OPEN\") {\n      const elapsed = Date.now() - this.lastStateChange;\n      if (elapsed >= this.config.cooldownMs) {\n        this.transitionTo(\"HALF_OPEN\");\n        return;\n      }\n      throw new Error(`Circuit OPEN — call blocked for ${this.config.cooldownMs}ms`);\n    }\n  }\n\n  /** Report a successful operation. */\n  recordSuccess(): void {\n    if (this.state === \"HALF_OPEN\") {\n      this.successCount++;\n      if (this.successCount >= this.config.successThreshold) {\n        this.reset();\n      }\n    } else if (this.state === \"CLOSED\") {\n      this.failureCount = 0; // reset failure count on success\n    }\n  }\n\n  /** Report a failed operation. */\n  recordFailure(): void {\n    this.failureCount++;\n    if (this.state === \"HALF_OPEN\") {\n      this.transitionTo(\"OPEN\");\n    } else if (this.state === \"CLOSED\" && this.failureCount >= this.config.failureThreshold) {\n      this.transitionTo(\"OPEN\");\n    }\n  }\n\n  private transitionTo(newState: CircuitState): void {\n    this.state = newState;\n    this.lastStateChange = Date.now();\n    this.failureCount = 0;\n    this.successCount = 0;\n  }\n\n  private reset(): void {\n    this.state = \"CLOSED\";\n    this.lastStateChange = Date.now();\n    this.failureCount = 0;\n    this.successCount = 0;\n  }\n}\n\n// ── Retry Exhaustion Predictor ─────────────────────────────────\ninterface RetryRecord {\n  attempt: number;\n  error: string;\n  timestamp: number;\n  durationMs: number;\n}\n\nclass RetryExhaustionPredictor {\n  private history: RetryRecord[] = [];\n  private readonly windowMs: number;\n\n  constructor(\n    private maxRetries: number,\n    windowMinutes: number = 5,\n  ) {\n    this.windowMs = windowMinutes * 60 * 1000;\n  }\n\n  get recentRetryRate(): number {\n    this.prune();\n    return this.history.length / (this.windowMs / 1000);\n  }\n\n  get exhaustionProbability(): number {\n    this.prune();\n    const attempts = this.history.length;\n    if (attempts === 0) return 0;\n    const durationPerAttempt = this.history.reduce((s, r) => s + r.durationMs, 0) / attempts;\n    const projectedTotal = (durationPerAttempt * this.maxRetries) / 1000;\n    return Math.min(1, projectedTotal / (this.windowMs / 1000));\n  }\n\n  recordAttempt(attempt: number, error: string, durationMs: number): void {\n    this.history.push({ attempt, error, timestamp: Date.now(), durationMs });\n    this.prune();\n  }\n\n  shouldEscalate(): boolean {\n    return this.exhaustionProbability > 0.8 || this.recentRetryRate > 10;\n  }\n\n  private prune(): void {\n    const cutoff = Date.now() - this.windowMs;\n    this.history = this.history.filter((r) => r.timestamp >= cutoff);\n  }\n}\n\n// ── Observability Collector ────────────────────────────────────\ninterface LoopMetric {\n  loopId: string;\n  cycleNumber: number;\n  cycleTimeMs: number;\n  error: boolean;\n  inputTokens: number;\n  outputTokens: number;\n  timestamp: number;\n}\n\ninterface DerivedMetrics {\n  avgCycleTimeMs: number;\n  errorRate: number;\n  throughputPerMin: number;\n  p95CycleTimeMs: number;\n  totalCycles: number;\n}\n\nclass ObservabilityCollector {\n  private metrics: LoopMetric[] = [];\n  private readonly maxRetention: number;\n\n  constructor(maxRetention: number = 10000) {\n    this.maxRetention = maxRetention;\n  }\n\n  record(metric: LoopMetric): void {\n    this.metrics.push(metric);\n    if (this.metrics.length > this.maxRetention) {\n      this.metrics = this.metrics.slice(-this.maxRetention);\n    }\n  }\n\n  getMetrics(loopId?: string): LoopMetric[] {\n    return loopId\n      ? this.metrics.filter((m) => m.loopId === loopId)\n      : [...this.metrics];\n  }\n\n  derive(loopId?: string): DerivedMetrics {\n    const filtered = this.getMetrics(loopId);\n    if (filtered.length === 0) {\n      return { avgCycleTimeMs: 0, errorRate: 0, throughputPerMin: 0, p95CycleTimeMs: 0, totalCycles: 0 };\n    }\n\n    const cycleTimes = filtered.map((m) => m.cycleTimeMs).sort((a, b) => a - b);\n    const avgCycleTimeMs = cycleTimes.reduce((a, b) => a + b, 0) / cycleTimes.length;\n    const errorRate = filtered.filter((m) => m.error).length / filtered.length;\n    const p95Index = Math.ceil(cycleTimes.length * 0.95) - 1;\n    const p95CycleTimeMs = cycleTimes[Math.max(0, p95Index)];\n\n    const timeSpanMs = filtered.length > 1\n      ? filtered[filtered.length - 1].timestamp - filtered[0].timestamp\n      : 60000;\n    const timeSpanMin = Math.max(timeSpanMs / 60000, 0.01);\n    const throughputPerMin = filtered.length / timeSpanMin;\n\n    return { avgCycleTimeMs, errorRate, throughputPerMin, p95CycleTimeMs, totalCycles: filtered.length };\n  }\n\n  /** Export for dashboard integration. */\n  exportSnapshot(): { metrics: LoopMetric[]; derived: DerivedMetrics } {\n    return { metrics: [...this.metrics], derived: this.derive() };\n  }\n}\n\n// ── Production Loop Health Checker ─────────────────────────────\ninterface HealthCheckResult {\n  healthy: boolean;\n  component: string;\n  latencyMs: number;\n  error: string | null;\n  timestamp: number;\n}\n\ntype HealthCheckFn = () => Promise<{ ok: boolean; error?: string }>;\n\nclass ProductionLoopHealthChecker {\n  private results: HealthCheckResult[] = [];\n\n  constructor(\n    private checks: Map<string, HealthCheckFn>,\n    private intervalMs: number = 30000,\n  ) {}\n\n  get lastResults(): HealthCheckResult[] {\n    return [...this.results];\n  }\n\n  get overallHealth(): boolean {\n    if (this.results.length === 0) return true;\n    const recent = this.results.slice(-this.checks.size * 3);\n    const failures = recent.filter((r) => !r.healthy).length;\n    return failures / recent.length < 0.5;\n  }\n\n  /** Run all health checks once. */\n  async runAll(): Promise<HealthCheckResult[]> {\n    const batch: HealthCheckResult[] = [];\n    for (const [component, check] of this.checks) {\n      const start = Date.now();\n      try {\n        const result = await check();\n        batch.push({\n          healthy: result.ok,\n          component,\n          latencyMs: Date.now() - start,\n          error: result.error ?? null,\n          timestamp: Date.now(),\n        });\n      } catch (err) {\n        batch.push({\n          healthy: false,\n          component,\n          latencyMs: Date.now() - start,\n          error: (err as Error).message,\n          timestamp: Date.now(),\n        });\n      }\n    }\n    this.results.push(...batch);\n    return batch;\n  }\n\n  /** Start periodic health checks. Returns a disposer. */\n  startPeriodic(): () => void {\n    const timer = setInterval(() => this.runAll(), this.intervalMs);\n    return () => clearInterval(timer);\n  }\n}\n\n// ── Canary Release Manager ─────────────────────────────────────\ninterface CanaryStep {\n  trafficPercent: number;\n  observationWindowMs: number;\n}\n\ninterface CanaryConfig {\n  steps: CanaryStep[];\n  maxErrorRate: number;\n  maxLatencyP95Ms: number;\n  promotionCallback?: () => Promise<void>;\n  rollbackCallback?: () => Promise<void>;\n}\n\nclass CanaryReleaseManager {\n  private currentStep = -1;\n  private promoted = false;\n  private rolledBack = false;\n  private stepMetrics: Array<{ step: number; trafficPercent: number; errorRate: number; latencyP95Ms: number }> = [];\n\n  constructor(\n    private config: CanaryConfig,\n    private measureErrorRate: () => Promise<number>,\n    private measureLatencyP95: () => Promise<number>,\n  ) {}\n\n  get status(): string {\n    if (this.promoted) return \"PROMOTED\";\n    if (this.rolledBack) return \"ROLLED_BACK\";\n    if (this.currentStep < 0) return \"NOT_STARTED\";\n    return `STEP_${this.currentStep}_AT_${this.config.steps[this.currentStep]?.trafficPercent}%`;\n  }\n\n  /** Advance one canary step with validation. */\n  async advance(): Promise<{\n    step: number;\n    trafficPercent: number;\n    passed: boolean;\n    promoted: boolean;\n    rolledBack: boolean;\n  }> {\n    if (this.promoted || this.rolledBack) {\n      return { step: this.currentStep, trafficPercent: this.config.steps[this.currentStep]?.trafficPercent ?? 0, passed: true, promoted: this.promoted, rolledBack: this.rolledBack };\n    }\n\n    this.currentStep++;\n    if (this.currentStep >= this.config.steps.length) {\n      this.promoted = true;\n      await this.config.promotionCallback?.();\n      return { step: this.currentStep, trafficPercent: 100, passed: true, promoted: true, rolledBack: false };\n    }\n\n    const step = this.config.steps[this.currentStep];\n    // Observe for the window duration\n    await this.sleep(step.observationWindowMs);\n\n    const errorRate = await this.measureErrorRate();\n    const latencyP95 = await this.measureLatencyP95();\n    this.stepMetrics.push({ step: this.currentStep, trafficPercent: step.trafficPercent, errorRate, latencyP95Ms: latencyP95 });\n\n    if (errorRate > this.config.maxErrorRate || latencyP95 > this.config.maxLatencyP95Ms) {\n      this.rolledBack = true;\n      await this.config.rollbackCallback?.();\n      return { step: this.currentStep, trafficPercent: step.trafficPercent, passed: false, promoted: false, rolledBack: true };\n    }\n\n    return { step: this.currentStep, trafficPercent: step.trafficPercent, passed: true, promoted: false, rolledBack: false };\n  }\n\n  /** Run full canary from 0% to 100%. */\n  async runAll(): Promise<void> {\n    while (!this.promoted && !this.rolledBack) {\n      await this.advance();\n    }\n  }\n\n  private sleep(ms: number): Promise<void> {\n    return new Promise((resolve) => setTimeout(resolve, ms));\n  }\n}\n\n// ── Fallback Strategy Executor ─────────────────────────────────\ntype FallbackAction = () => Promise<{ success: boolean; output?: string; error?: string }>;\n\ninterface FallbackStrategyConfig {\n  strategies: Array<{ name: string; execute: FallbackAction; timeoutMs: number }>;\n  onAllFailed?: () => Promise<void>;\n}\n\nclass FallbackStrategyExecutor {\n  private attemptLog: Array<{ strategy: string; success: boolean; durationMs: number }> = [];\n\n  constructor(private config: FallbackStrategyConfig) {}\n\n  get lastAttempts(): Array<{ strategy: string; success: boolean; durationMs: number }> {\n    return [...this.attemptLog];\n  }\n\n  /** Execute strategies in priority order. Returns first success or throws. */\n  async execute(): Promise<{ output: string; usedStrategy: string; attempts: number }> {\n    for (const strategy of this.config.strategies) {\n      const start = Date.now();\n      try {\n        const result = await this.withTimeout(strategy.execute, strategy.timeoutMs);\n        this.attemptLog.push({ strategy: strategy.name, success: result.success, durationMs: Date.now() - start });\n        if (result.success && result.output !== undefined) {\n          return { output: result.output, usedStrategy: strategy.name, attempts: this.attemptLog.length };\n        }\n      } catch (err) {\n        this.attemptLog.push({ strategy: strategy.name, success: false, durationMs: Date.now() - start });\n      }\n    }\n\n    await this.config.onAllFailed?.();\n    throw new Error(\"All fallback strategies exhausted\");\n  }\n\n  private withTimeout<T>(fn: () => Promise<T>, ms: number): Promise<T> {\n    return Promise.race([\n      fn(),\n      new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)),\n    ]);\n  }\n}\n\n// ── Usage ──────────────────────────────────────────────────────\nasync function main() {\n  // Circuit breaker demo\n  const cb = new CircuitBreakerStateMachine({ failureThreshold: 3, successThreshold: 2, halfOpenTimeoutMs: 1000, cooldownMs: 5000 });\n  console.log(\"Circuit state:\", cb.currentState);\n  try {\n    for (let i = 0; i < 5; i++) {\n      cb.preCheck();\n      if (i < 3) cb.recordFailure();\n      else cb.recordSuccess();\n    }\n  } catch (e) {\n    console.log(\"Circuit opened after 3 failures:\", (e as Error).message);\n  }\n\n  // RetryExhaustionPredictor demo\n  const predictor = new RetryExhaustionPredictor(5);\n  for (let i = 0; i < 4; i++) {\n    predictor.recordAttempt(i, `timeout_${i}`, 2000);\n  }\n  console.log(\"Exhaustion probability:\", predictor.exhaustionProbability.toFixed(2));\n  console.log(\"Should escalate:\", predictor.shouldEscalate());\n\n  // ObservabilityCollector demo\n  const collector = new ObservabilityCollector();\n  for (let i = 0; i < 50; i++) {\n    collector.record({\n      loopId: \"loop_1\",\n      cycleNumber: i,\n      cycleTimeMs: 100 + Math.random() * 900,\n      error: Math.random() < 0.1,\n      inputTokens: 500,\n      outputTokens: 200,\n      timestamp: Date.now(),\n    });\n  }\n  const derived = collector.derive(\"loop_1\");\n  console.log(\"Derived metrics:\", JSON.stringify(derived, null, 2));\n\n  // Health checker demo\n  const checker = new ProductionLoopHealthChecker(\n    new Map([\n      [\"api\", async () => ({ ok: true })],\n      [\"database\", async () => ({ ok: Math.random() > 0.2 })],\n    ]),\n  );\n  await checker.runAll();\n  console.log(\"Overall health:\", checker.overallHealth);\n\n  // Canary release demo\n  const canary = new CanaryReleaseManager(\n    { steps: [{ trafficPercent: 5, observationWindowMs: 100 }, { trafficPercent: 25, observationWindowMs: 100 }, { trafficPercent: 50, observationWindowMs: 100 }, { trafficPercent: 100, observationWindowMs: 100 }], maxErrorRate: 0.05, maxLatencyP95Ms: 2000 },\n    async () => 0.01,\n    async () => 500,\n  );\n  await canary.runAll();\n  console.log(\"Canary status:\", canary.status);\n\n  // Fallback executor demo\n  const executor = new FallbackStrategyExecutor({\n    strategies: [\n      { name: \"primary\", execute: async () => ({ success: false, error: \"rate_limited\" }), timeoutMs: 500 },\n      { name: \"secondary\", execute: async () => ({ success: true, output: \"fallback_output\" }), timeoutMs: 500 },\n    ],\n  });\n  const fallbackResult = await executor.execute();\n  console.log(\"Fallback used:\", fallbackResult.usedStrategy);\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-production-loop-with-safety-and-observability",
      children: "Mermaid: Production Loop with Safety and Observability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Production[\"Production Loop Architecture\"]\n        A[Request] --> B[Load Shedder]\n        B --> C{Rate Limit OK?}\n        C -->|No| D[429 Too Many Requests]\n        C -->|Yes| E[Adaptive Timeout]\n        E --> F[Agent Execution]\n        F --> G{Success?}\n        G -->|No| H[Retry with Backoff]\n        H --> F\n        G -->|Yes| I[Response]\n        F --> J[Prometheus Metrics]\n        F --> K[Health Endpoint]\n    end\n\n    subgraph Circuit[\"Circuit Breaker\"]\n        L[CLOSED] -->|failures > threshold| M[OPEN]\n        M -->|timeout elapsed| N[HALF-OPEN]\n        N -->|test succeeds| L\n        N -->|test fails| M\n    end\n\n    Production --> Circuit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-load-shedder-adaptive-timeout-rate-limiter-health-endpoint-and-metrics-exporter",
      children: "Extended Implementation: Load Shedder, Adaptive Timeout, Rate Limiter, Health Endpoint, and Metrics Exporter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/// <reference types=\"node\" />\n\nimport { randomUUID } from \"node:crypto\";\n\n// ── LoadShedder ─────────────────────────────────────────────────\ntype RequestPriority = \"critical\" | \"high\" | \"normal\" | \"low\";\n\ninterface IncomingRequest {\n  id: string;\n  priority: RequestPriority;\n  path: string;\n  body: unknown;\n  arrivalTime: number;\n}\n\ninterface LoadShedderConfig {\n  maxConcurrent: number;\n  queueCapacity: number;\n  dropStrategy: \"lowest_priority\" | \"oldest\" | \"random\";\n  metricsCallback?: (dropped: number, accepted: number) => void;\n}\n\nclass LoadShedder {\n  private active = 0;\n  private queue: IncomingRequest[] = [];\n  private dropped = 0;\n  private accepted = 0;\n\n  constructor(private config: LoadShedderConfig) {}\n\n  get activeRequests(): number {\n    return this.active;\n  }\n\n  get queueDepth(): number {\n    return this.queue.length;\n  }\n\n  get dropRate(): number {\n    const total = this.dropped + this.accepted;\n    return total > 0 ? this.dropped / total : 0;\n  }\n\n  /** Attempt to admit a request. Returns true if accepted, false if dropped. */\n  admit(request: IncomingRequest): boolean {\n    if (this.active < this.config.maxConcurrent) {\n      this.active++;\n      this.accepted++;\n      this.config.metricsCallback?.(this.dropped, this.accepted);\n      return true;\n    }\n\n    if (this.queue.length < this.config.queueCapacity) {\n      this.queue.push(request);\n      this.accepted++;\n      return true;\n    }\n\n    // Over capacity — apply drop strategy\n    this.dropped++;\n    this.config.metricsCallback?.(this.dropped, this.accepted);\n    return false;\n  }\n\n  /** Complete a request, allowing the next queued request through. */\n  complete(): IncomingRequest | null {\n    this.active = Math.max(0, this.active - 1);\n\n    if (this.queue.length > 0) {\n      // Select next request based on strategy\n      let index = 0;\n      switch (this.config.dropStrategy) {\n        case \"lowest_priority\": {\n          const priorityOrder: Record<string, number> = {\n            critical: 0, high: 1, normal: 2, low: 3,\n          };\n          let bestIdx = 0;\n          let bestPriority = Infinity;\n          for (let i = 0; i < this.queue.length; i++) {\n            const p = priorityOrder[this.queue[i].priority] ?? 4;\n            if (p < bestPriority) { bestPriority = p; bestIdx = i; }\n          }\n          index = bestIdx;\n          break;\n        }\n        case \"oldest\":\n          index = 0;\n          break;\n        case \"random\":\n          index = Math.floor(Math.random() * this.queue.length);\n          break;\n      }\n\n      const next = this.queue.splice(index, 1)[0];\n      this.active++;\n      return next;\n    }\n\n    return null;\n  }\n\n  /** Report current load state for health monitoring. */\n  snapshot(): {\n    active: number;\n    queued: number;\n    dropped: number;\n    accepted: number;\n    dropRate: number;\n    utilization: number;\n  } {\n    return {\n      active: this.active,\n      queued: this.queue.length,\n      dropped: this.dropped,\n      accepted: this.accepted,\n      dropRate: this.dropRate,\n      utilization: this.active / Math.max(this.config.maxConcurrent, 1),\n    };\n  }\n}\n\n// ── AdaptiveTimeout ─────────────────────────────────────────────\nclass AdaptiveTimeout {\n  private latencies: number[] = [];\n  private currentTimeout: number;\n\n  constructor(\n    private initialTimeout: number = 5000,\n    private percentile: number = 95,\n    private windowSize: number = 100,\n    private minTimeout: number = 500,\n    private maxTimeout: number = 30000,\n  ) {\n    this.currentTimeout = initialTimeout;\n  }\n\n  get timeout(): number {\n    return this.currentTimeout;\n  }\n\n  /** Record a completed request latency. */\n  record(latencyMs: number): void {\n    this.latencies.push(latencyMs);\n    if (this.latencies.length > this.windowSize) {\n      this.latencies = this.latencies.slice(-this.windowSize);\n    }\n    this.recalculate();\n  }\n\n  /** Recalculate timeout based on percentile. */\n  private recalculate(): void {\n    if (this.latencies.length < 10) return;\n    const sorted = [...this.latencies].sort((a, b) => a - b);\n    const index = Math.ceil((this.percentile / 100) * sorted.length) - 1;\n    const pValue = sorted[Math.max(0, Math.min(index, sorted.length - 1))];\n\n    // Add 20% headroom above the percentile\n    this.currentTimeout = Math.max(\n      this.minTimeout,\n      Math.min(this.maxTimeout, Math.ceil(pValue * 1.2)),\n    );\n  }\n\n  /** Reset to initial state. */\n  reset(): void {\n    this.latencies = [];\n    this.currentTimeout = this.initialTimeout;\n  }\n\n  /** Get latency distribution stats. */\n  stats(): { p50: number; p95: number; p99: number; currentTimeout: number; samples: number } {\n    if (this.latencies.length === 0) {\n      return { p50: 0, p95: 0, p99: 0, currentTimeout: this.currentTimeout, samples: 0 };\n    }\n    const sorted = [...this.latencies].sort((a, b) => a - b);\n    const getP = (pct: number) => {\n      const idx = Math.ceil((pct / 100) * sorted.length) - 1;\n      return sorted[Math.max(0, Math.min(idx, sorted.length - 1))];\n    };\n    return {\n      p50: getP(50),\n      p95: getP(95),\n      p99: getP(99),\n      currentTimeout: this.currentTimeout,\n      samples: this.latencies.length,\n    };\n  }\n}\n\n// ── RateLimiter (Token Bucket) ──────────────────────────────────\nclass TokenBucketRateLimiter {\n  private tokens: number;\n  private lastRefill: number;\n\n  constructor(\n    private maxTokens: number,\n    private refillRate: number,  // tokens per second\n    private refillInterval: number = 1000, // ms between refills\n  ) {\n    this.tokens = maxTokens;\n    this.lastRefill = Date.now();\n  }\n\n  get availableTokens(): number {\n    this.refill();\n    return this.tokens;\n  }\n\n  get utilization(): number {\n    return 1 - this.tokens / this.maxTokens;\n  }\n\n  /** Refill tokens based on elapsed time. */\n  private refill(): void {\n    const now = Date.now();\n    const elapsed = now - this.lastRefill;\n    const intervals = Math.floor(elapsed / this.refillInterval);\n    if (intervals > 0) {\n      const newTokens = intervals * this.refillRate * (this.refillInterval / 1000);\n      this.tokens = Math.min(this.maxTokens, this.tokens + newTokens);\n      this.lastRefill += intervals * this.refillInterval;\n    }\n  }\n\n  /** Try to consume `count` tokens. Returns true if allowed. */\n  tryConsume(count: number = 1): boolean {\n    this.refill();\n    if (this.tokens >= count) {\n      this.tokens -= count;\n      return true;\n    }\n    return false;\n  }\n\n  /** Wait until tokens are available (async). */\n  async consume(count: number = 1, timeoutMs: number = 10000): Promise<boolean> {\n    if (this.tryConsume(count)) return true;\n    const start = Date.now();\n    while (Date.now() - start < timeoutMs) {\n      await new Promise((resolve) => setTimeout(resolve, 100));\n      if (this.tryConsume(count)) return true;\n    }\n    return false;\n  }\n\n  /** Estimate wait time before tokens are available. */\n  estimatedWaitMs(count: number = 1): number {\n    this.refill();\n    if (this.tokens >= count) return 0;\n    const deficit = count - this.tokens;\n    return Math.ceil((deficit / this.refillRate) * 1000);\n  }\n\n  reset(): void {\n    this.tokens = this.maxTokens;\n    this.lastRefill = Date.now();\n  }\n}\n\n// ── HealthEndpoint ──────────────────────────────────────────────\ninterface HealthComponent {\n  name: string;\n  healthy: boolean;\n  lastCheck: number;\n  latencyMs: number;\n  detail: string;\n}\n\ntype HealthCheck = () => Promise<{ ok: boolean; detail?: string }>;\n\nclass HealthEndpoint {\n  private components: Map<string, { check: HealthCheck; lastResult: HealthComponent }> = new Map();\n  private startTime: number = Date.now();\n  private failureCount = 0;\n  private totalChecks = 0;\n\n  register(name: string, check: HealthCheck): void {\n    this.components.set(name, {\n      check,\n      lastResult: {\n        name,\n        healthy: true,\n        lastCheck: Date.now(),\n        latencyMs: 0,\n        detail: \"not yet checked\",\n      },\n    });\n  }\n\n  unregister(name: string): boolean {\n    return this.components.delete(name);\n  }\n\n  /** Run all health checks and return aggregate status. */\n  async checkAll(): Promise<{\n    status: \"healthy\" | \"degraded\" | \"unhealthy\";\n    uptime: number;\n    components: HealthComponent[];\n    failureRate: number;\n  }> {\n    this.totalChecks++;\n    const results: HealthComponent[] = [];\n\n    for (const [name, entry] of this.components) {\n      const start = Date.now();\n      try {\n        const result = await entry.check();\n        const healthComponent: HealthComponent = {\n          name,\n          healthy: result.ok,\n          lastCheck: Date.now(),\n          latencyMs: Date.now() - start,\n          detail: result.detail ?? (result.ok ? \"ok\" : \"error\"),\n        };\n        entry.lastResult = healthComponent;\n        results.push(healthComponent);\n        if (!result.ok) this.failureCount++;\n      } catch (err) {\n        const healthComponent: HealthComponent = {\n          name,\n          healthy: false,\n          lastCheck: Date.now(),\n          latencyMs: Date.now() - start,\n          detail: (err as Error).message,\n        };\n        entry.lastResult = healthComponent;\n        results.push(healthComponent);\n        this.failureCount++;\n      }\n    }\n\n    const healthyCount = results.filter((r) => r.healthy).length;\n    const totalComponents = results.length;\n    let status: \"healthy\" | \"degraded\" | \"unhealthy\";\n    if (healthyCount === totalComponents) status = \"healthy\";\n    else if (healthyCount >= totalComponents / 2) status = \"degraded\";\n    else status = \"unhealthy\";\n\n    return {\n      status,\n      uptime: Date.now() - this.startTime,\n      components: results,\n      failureRate: this.totalChecks > 0 ? this.failureCount / this.totalChecks : 0,\n    };\n  }\n\n  /** Get a JSON-serializable health report for orchestrators. */\n  async report(): Promise<Record<string, unknown>> {\n    const health = await this.checkAll();\n    return {\n      service: \"production-loop\",\n      status: health.status,\n      uptimeMs: health.uptime,\n      timestamp: new Date().toISOString(),\n      components: Object.fromEntries(\n        health.components.map((c) => [\n          c.name,\n          { healthy: c.healthy, latencyMs: c.latencyMs, detail: c.detail },\n        ]),\n      ),\n      failureRate: health.failureRate,\n    };\n  }\n\n  reset(): void {\n    this.failureCount = 0;\n    this.totalChecks = 0;\n    this.startTime = Date.now();\n  }\n}\n\n// ── PrometheusMetricsExporter ───────────────────────────────────\ninterface MetricFamily {\n  name: string;\n  help: string;\n  type: \"counter\" | \"gauge\" | \"histogram\" | \"summary\";\n  labels: Record<string, string>;\n  value: number;\n}\n\nclass PrometheusMetricsExporter {\n  private metrics: Map<string, MetricFamily> = new Map();\n  private histograms: Map<string, number[]> = new Map();\n\n  /** Increment a counter metric. */\n  incrementCounter(name: string, labels: Record<string, string> = {}, value: number = 1): void {\n    this.metrics.set(name, {\n      name,\n      help: `Counter for ${name}`,\n      type: \"counter\",\n      labels,\n      value: (this.metrics.get(name)?.value ?? 0) + value,\n    });\n  }\n\n  /** Set a gauge metric. */\n  setGauge(name: string, value: number, labels: Record<string, string> = {}): void {\n    this.metrics.set(name, {\n      name,\n      help: `Gauge for ${name}`,\n      type: \"gauge\",\n      labels,\n      value,\n    });\n  }\n\n  /** Observe a value for a histogram metric. */\n  observeHistogram(name: string, value: number, labels: Record<string, string> = {}): void {\n    const key = `${name}:${JSON.stringify(labels)}`;\n    const existing = this.histograms.get(key) ?? [];\n    existing.push(value);\n    this.histograms.set(key, existing);\n\n    // Keep last 1000 observations\n    if (existing.length > 1000) {\n      this.histograms.set(key, existing.slice(-1000));\n    }\n\n    // Store as the last metric set\n    this.metrics.set(name, {\n      name,\n      help: `Histogram for ${name}`,\n      type: \"histogram\",\n      labels,\n      value: existing.length,\n    });\n  }\n\n  /** Export all metrics in Prometheus text format. */\n  export(): string {\n    const lines: string[] = [];\n\n    for (const [, metric] of this.metrics) {\n      lines.push(`# HELP ${metric.name} ${metric.help}`);\n      lines.push(`# TYPE ${metric.name} ${metric.type}`);\n\n      const labelStr = Object.keys(metric.labels).length > 0\n        ? `{${Object.entries(metric.labels).map(([k, v]) => `${k}=\"${v}\"`).join(\",\")}}`\n        : \"\";\n\n      // For histograms, include bucket counts\n      if (metric.type === \"histogram\") {\n        const key = `${metric.name}:${JSON.stringify(metric.labels)}`;\n        const values = this.histograms.get(key) ?? [];\n        const buckets = [10, 50, 100, 500, 1000, 5000];\n        for (const bucket of buckets) {\n          const count = values.filter((v) => v <= bucket).length;\n          lines.push(`${metric.name}_bucket${labelStr}{le=\"${bucket}\"} ${count}`);\n        }\n        lines.push(`${metric.name}_bucket${labelStr}{le=\"+Inf\"} ${values.length}`);\n        lines.push(`${metric.name}_count${labelStr} ${values.length}`);\n        lines.push(`${metric.name}_sum${labelStr} ${values.reduce((a, b) => a + b, 0)}`);\n      } else {\n        lines.push(`${metric.name}${labelStr} ${metric.value}`);\n      }\n    }\n\n    return lines.join(\"\\n\");\n  }\n\n  /** Get a snapshot of current metric values. */\n  snapshot(): Record<string, number> {\n    const result: Record<string, number> = {};\n    for (const [name, metric] of this.metrics) {\n      result[name] = metric.value;\n    }\n    return result;\n  }\n\n  reset(): void {\n    this.metrics.clear();\n    this.histograms.clear();\n  }\n}\n\n// ── Usage ──────────────────────────────────────────────────────\nasync function main() {\n  // LoadShedder demo\n  const shedder = new LoadShedder({ maxConcurrent: 3, queueCapacity: 5, dropStrategy: \"lowest_priority\" });\n  for (let i = 0; i < 10; i++) {\n    const admitted = shedder.admit({\n      id: `req_${i}`,\n      priority: i < 3 ? \"critical\" : i < 6 ? \"normal\" : \"low\",\n      path: \"/api/process\",\n      body: {},\n      arrivalTime: Date.now(),\n    });\n    console.log(`Request ${i} (${i < 3 ? \"critical\" : i < 6 ? \"normal\" : \"low\"}): ${admitted ? \"admitted\" : \"dropped\"}`);\n  }\n  console.log(`Load shedder snapshot:`, shedder.snapshot());\n\n  // AdaptiveTimeout demo\n  const timeout = new AdaptiveTimeout(5000, 95, 20);\n  for (let i = 0; i < 25; i++) {\n    timeout.record(100 + Math.random() * 4000);\n  }\n  console.log(`Adaptive timeout: ${timeout.timeout}ms`, timeout.stats());\n\n  // TokenBucketRateLimiter demo\n  const limiter = new TokenBucketRateLimiter(10, 2);\n  for (let i = 0; i < 15; i++) {\n    const allowed = limiter.tryConsume();\n    if (i > 0 && i % 5 === 0) {\n      await new Promise((r) => setTimeout(r, 1100)); // let tokens refill\n    }\n    if (i === 12) console.log(`Rate limiter utilization: ${(limiter.utilization * 100).toFixed(0)}%`);\n  }\n\n  // HealthEndpoint demo\n  const health = new HealthEndpoint();\n  health.register(\"database\", async () => ({ ok: Math.random() > 0.2 }));\n  health.register(\"api\", async () => ({ ok: true }));\n  health.register(\"cache\", async () => ({ ok: Math.random() > 0.1 }));\n  const healthReport = await health.report();\n  console.log(`Health status: ${healthReport.status}`);\n  console.log(`Health components:`, JSON.stringify((healthReport.components as Record<string, unknown>)), null, 2);\n\n  // PrometheusMetricsExporter demo\n  const metrics = new PrometheusMetricsExporter();\n  metrics.incrementCounter(\"http_requests_total\", { method: \"GET\", path: \"/api\" });\n  metrics.incrementCounter(\"http_requests_total\", { method: \"POST\", path: \"/api\" });\n  metrics.setGauge(\"active_requests\", 5);\n  for (let i = 0; i < 50; i++) {\n    metrics.observeHistogram(\"request_duration_ms\", 50 + Math.random() * 950);\n  }\n  console.log(\"\\nPrometheus metrics:\");\n  console.log(metrics.export());\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Canary deployer."
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CanaryDeployer"
          }), " that gradually shifts traffic from production to candidate in 5% increments, waits for a configurable observation window at each step, and rolls back on any SLO breach. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProductionLoopManager.ingestMetric"
          }), " for monitoring."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-model cost governor."
          }), " Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AgentCostGovernor"
          }), " to support a prioritized model list (", (0,jsx_runtime.jsx)(_components.code, {
            children: "[\"claude-3.5-sonnet\", \"gpt-4o-mini\", \"claude-3-haiku\"]"
          }), "). It should start with the most capable model and downgrade through the list as budget depletes, never halting unless all models are exhausted."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SLO monitor."
          }), " Build an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SloMonitor"
          }), " class that accepts SLI definitions (name, measurement function, target threshold, compliance window). It tracks SLI compliance over rolling windows and emits events when the error budget is 50% depleted and 100% depleted."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Observability trace exporter."
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TraceExporter"
          }), " that wraps any agent loop and emits OpenTelemetry-compatible spans for each iteration. Each span should carry attributes: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model_name"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "input_tokens"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "output_tokens"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "iteration_number"
          }), ", and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "loop_id"
          }), " attribute linking all spans for one request."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Drift detector with KS test."
          }), " Replace the heuristic drift scoring in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProductionLoopManager.detectDrift"
          }), " with a two-sample Kolmogorov–Smirnov test comparing the current window's latency distribution against the baseline. Use a significance threshold of p < 0.05."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Alert router."
          }), " Implement an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AlertRouter"
          }), " that accepts ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DriftReport"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CostRecord"
          }), " events and routes them to configurable channels: Slack webhook, PagerDuty, email, or a silent log. Include a deduplication window so the same alert type fires at most once per 15 minutes."]
        }), "\n"]
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