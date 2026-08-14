"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[14449],{

/***/ 20840
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_25_multi_agent_systems_md_7a0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-25-multi-agent-systems-md-7a0.json
const site_docs_courses_laravel_25_multi_agent_systems_md_7a0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/25-multi-agent-systems","title":"Chapter 25: Multi-Agent Systems & Orchestration with Laravel","description":"Previous Business Automation Agents","source":"@site/docs/courses/laravel/25-multi-agent-systems.md","sourceDirName":"courses/laravel","slug":"/laravel/25-multi-agent-systems","permalink":"/ai-engineering-journey/laravel/25-multi-agent-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"id":"25-multi-agent-systems","slug":"/laravel/25-multi-agent-systems","title":"Chapter 25: Multi-Agent Systems & Orchestration with Laravel","sidebar_label":"Chapter 25: Multi-Agent Systems & Orchestration with Laravel","sidebar_position":25},"sidebar":"course-laravel","previous":{"title":"Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS","permalink":"/ai-engineering-journey/laravel/24-capstone"},"next":{"title":"Chapter 26: Business Automation Agents","permalink":"/ai-engineering-journey/laravel/26-business-automation-agents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/25-multi-agent-systems.md


const frontMatter = {
	id: '25-multi-agent-systems',
	slug: '/laravel/25-multi-agent-systems',
	title: 'Chapter 25: Multi-Agent Systems & Orchestration with Laravel',
	sidebar_label: 'Chapter 25: Multi-Agent Systems & Orchestration with Laravel',
	sidebar_position: 25
};
const contentTitle = 'Chapter 25: Multi-Agent Systems & Orchestration with Laravel';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "25.1 The Supervisor/Worker Pattern",
  "id": "251-the-supervisorworker-pattern",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 4
}, {
  "value": "The SupervisorAgent Class",
  "id": "the-supervisoragent-class",
  "level": 4
}, {
  "value": "Dedicated Worker Agent Classes",
  "id": "dedicated-worker-agent-classes",
  "level": 4
}, {
  "value": "The Supervisor Resolver",
  "id": "the-supervisor-resolver",
  "level": 4
}, {
  "value": "25.2 Agent Teams &amp; Handoff Protocols",
  "id": "252-agent-teams--handoff-protocols",
  "level": 3
}, {
  "value": "The Handoff Pattern",
  "id": "the-handoff-pattern",
  "level": 4
}, {
  "value": "Building a RouterAgent",
  "id": "building-a-routeragent",
  "level": 4
}, {
  "value": "Handoff Controller",
  "id": "handoff-controller",
  "level": 4
}, {
  "value": "Specialist Agents",
  "id": "specialist-agents",
  "level": 4
}, {
  "value": "Agent-to-Agent Handoff with Tools",
  "id": "agent-to-agent-handoff-with-tools",
  "level": 4
}, {
  "value": "25.3 Parallel Agent Execution",
  "id": "253-parallel-agent-execution",
  "level": 3
}, {
  "value": "The Fan-Out/Fan-In Pattern",
  "id": "the-fan-outfan-in-pattern",
  "level": 4
}, {
  "value": "Dispatching Parallel Agents",
  "id": "dispatching-parallel-agents",
  "level": 4
}, {
  "value": "The ParallelResult Model",
  "id": "the-parallelresult-model",
  "level": 4
}, {
  "value": "The Merged Analysis Migration",
  "id": "the-merged-analysis-migration",
  "level": 4
}, {
  "value": "The Broadcast Event",
  "id": "the-broadcast-event",
  "level": 4
}, {
  "value": "Controller Triggering Parallel Execution",
  "id": "controller-triggering-parallel-execution",
  "level": 4
}, {
  "value": "25.4 State Management Across Agents",
  "id": "254-state-management-across-agents",
  "level": 3
}, {
  "value": "The AgentMemory System",
  "id": "the-agentmemory-system",
  "level": 4
}, {
  "value": "Migration for AgentMemory",
  "id": "migration-for-agentmemory",
  "level": 4
}, {
  "value": "Shared Memory Trait for Agents",
  "id": "shared-memory-trait-for-agents",
  "level": 4
}, {
  "value": "Agent Using Shared Memory",
  "id": "agent-using-shared-memory",
  "level": 4
}, {
  "value": "AgentConversation Context Sharing",
  "id": "agentconversation-context-sharing",
  "level": 4
}, {
  "value": "25.5 Queue-Backed Agent Orchestration",
  "id": "255-queue-backed-agent-orchestration",
  "level": 3
}, {
  "value": "Agent Orchestrator Job",
  "id": "agent-orchestrator-job",
  "level": 4
}, {
  "value": "Individual Chain Jobs",
  "id": "individual-chain-jobs",
  "level": 4
}, {
  "value": "Orchestration Model",
  "id": "orchestration-model",
  "level": 4
}, {
  "value": "Triggering the Orchestrator from a Controller",
  "id": "triggering-the-orchestrator-from-a-controller",
  "level": 4
}, {
  "value": "Horizon Configuration for Agent Workloads",
  "id": "horizon-configuration-for-agent-workloads",
  "level": 4
}, {
  "value": "25.6 Multi-Agent Failure Modes",
  "id": "256-multi-agent-failure-modes",
  "level": 3
}, {
  "value": "Circuit Breaker Pattern",
  "id": "circuit-breaker-pattern",
  "level": 4
}, {
  "value": "Circuit Breaker Middleware for Agents",
  "id": "circuit-breaker-middleware-for-agents",
  "level": 4
}, {
  "value": "Timeout Guard",
  "id": "timeout-guard",
  "level": 4
}, {
  "value": "ConflictResolver",
  "id": "conflictresolver",
  "level": 4
}, {
  "value": "Max-Retry Policy with Exponential Backoff",
  "id": "max-retry-policy-with-exponential-backoff",
  "level": 4
}, {
  "value": "Guarded Agent Execution",
  "id": "guarded-agent-execution",
  "level": 4
}, {
  "value": "25.7 Testing Multi-Agent Systems",
  "id": "257-testing-multi-agent-systems",
  "level": 3
}, {
  "value": "Mocking Individual Agents",
  "id": "mocking-individual-agents",
  "level": 4
}, {
  "value": "Testing the Supervisor/Worker Pattern",
  "id": "testing-the-supervisorworker-pattern",
  "level": 4
}, {
  "value": "Testing Handoff and Routing Logic",
  "id": "testing-handoff-and-routing-logic",
  "level": 4
}, {
  "value": "Testing Agent Teams with Shared Memory",
  "id": "testing-agent-teams-with-shared-memory",
  "level": 4
}, {
  "value": "Testing the Orchestrator Chain",
  "id": "testing-the-orchestrator-chain",
  "level": 4
}, {
  "value": "Testing Circuit Breaker",
  "id": "testing-circuit-breaker",
  "level": 4
}, {
  "value": "Testing Conflict Resolution",
  "id": "testing-conflict-resolution",
  "level": 4
}, {
  "value": "Testing Parallel Execution",
  "id": "testing-parallel-execution",
  "level": 4
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-25-multi-agent-systems--orchestration-with-laravel",
        children: "Chapter 25: Multi-Agent Systems & Orchestration with Laravel"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/24-capstone",
          children: "Capstone"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/26-business-automation-agents",
          children: "Business Automation Agents"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement the supervisor/worker pattern to route tasks across specialized AI agents with tool-based dispatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build agent teams that collaborate via structured handoff protocols and intent-based routing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute multiple agents in parallel using Laravel queues and merge their results with the fan-out/fan-in pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage shared agent state and conversation memory across distributed agent teams using database and Redis backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orchestrate complex multi-step agent workflows with Laravel Horizon, job batching, and failure recovery policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and mitigate multi-agent failure modes with circuit breakers, timeout guards, and output conflict resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write comprehensive PEST tests for multi-agent systems including mock agents, integration tests, and handoff verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/25-multi-agent-systems/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/25-multi-agent-systems/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/25-multi-agent-systems/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/25-multi-agent-systems/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/25-multi-agent-systems/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/25-multi-agent-systems/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor/Worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central supervisor delegates tasks to workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use queues for reliable async delegation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team-based agent coordination with handoff protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define handoff contracts between agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run independent agents simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel queues with separate workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared state across distributed agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Redis for agent state with TTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue-backed agent coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch agent jobs to priority queues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle agent failures and retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement circuit breakers and fallback agents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Supervisor Agent] --> B[Queue Dispatcher]     B --> C[Worker Agent 1]     B --> D[Worker Agent 2]     B --> E[Worker Agent 3]     C --> F[Result Aggregator]     D --> F     E --> F     F --> G[State Store Redis]     F --> H[Response Handler] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/25-multi-agent-systems.png",
        alt: "Multi-Agent Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-the-supervisorworker-pattern",
      children: "25.1 The Supervisor/Worker Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A central supervisor delegates tasks to worker agents via queues, handling distribution and result aggregation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Single-agent systems handle one task per invocation. A multi-agent system introduces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "supervisor"
      }), " that accepts a high-level goal, decomposes it into sub-tasks, and dispatches each sub-task to a specialized ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "worker"
      }), " agent. The supervisor does not perform the work itself — it plans, delegates, and synthesises results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User Request\n      │\n      ▼\nSupervisorAgent ──analyzes task──► decides worker\n      │\n      ├──► ResearchAgent   (gathers information)\n      ├──► SummarizerAgent (condenses content)\n      └──► WriterAgent     (produces final output)\n      │\n      └──► merges results ──► returns response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-supervisoragent-class",
      children: "The SupervisorAgent Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a supervisor that receives a task description, classifies it, and invokes the correct worker via the AI SDK's tool-calling mechanism:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass SupervisorAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a supervisor agent that delegates tasks to specialized workers.\nAnalyze the user's request and classify it into one of these categories:\n- research: needs factual information gathering\n- summarize: needs content condensed\n- write: needs original content produced\n\nCall the appropriate worker tool with the user's input.\nDo NOT answer the question yourself — delegate it.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The supervisor uses tools to dispatch work. Each worker is registered as a callable tool that the model decides to invoke:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\SupervisorAgent;\nuse Illuminate\\Http\\Request;\nuse Laravel\\Ai\\Facades\\Agent;\n\nclass DelegationController extends Controller\n{\n    public function delegate(Request $request): array\n    {\n        $request->validate(['task' => 'required|string']);\n\n        $response = Agent::make()\n            ->instructions($this->supervisorInstructions())\n            ->tools([\n                $this->researchTool(),\n                $this->summarizeTool(),\n                $this->writeTool(),\n            ])\n            ->prompt($request->input('task'));\n\n        return [\n            'result' => $response->text(),\n            'tool_calls' => $response->toolCalls(),\n        ];\n    }\n\n    private function supervisorInstructions(): string\n    {\n        return <<<PROMPT\nYou are a supervisor agent. Analyze the user's request and call the appropriate\nworker tool. Available workers:\n\n1. research: Call when the user needs facts, data, or information gathered.\n2. summarize: Call when the user needs content condensed or shortened.\n3. write: Call when the user needs original content produced.\n\nAfter the worker returns, present the result to the user.\nPROMPT;\n    }\n\n    private function researchTool(): array\n    {\n        return [\n            'type' => 'function',\n            'name' => 'research',\n            'description' => 'Gather factual information on a topic',\n            'parameters' => [\n                'type' => 'object',\n                'properties' => [\n                    'query' => [\n                        'type' => 'string',\n                        'description' => 'The research query or topic',\n                    ],\n                    'depth' => [\n                        'type' => 'string',\n                        'enum' => ['quick', 'detailed'],\n                        'description' => 'Research depth level',\n                    ],\n                ],\n                'required' => ['query'],\n            ],\n        ];\n    }\n\n    private function summarizeTool(): array\n    {\n        return [\n            'type' => 'function',\n            'name' => 'summarize',\n            'description' => 'Condense content into a summary',\n            'parameters' => [\n                'type' => 'object',\n                'properties' => [\n                    'content' => [\n                        'type' => 'string',\n                        'description' => 'The content to summarize',\n                    ],\n                    'max_length' => [\n                        'type' => 'integer',\n                        'description' => 'Maximum words in summary',\n                    ],\n                ],\n                'required' => ['content'],\n            ],\n        ];\n    }\n\n    private function writeTool(): array\n    {\n        return [\n            'type' => 'function',\n            'name' => 'write',\n            'description' => 'Generate original written content',\n            'parameters' => [\n                'type' => 'object',\n                'properties' => [\n                    'topic' => [\n                        'type' => 'string',\n                        'description' => 'The topic to write about',\n                    ],\n                    'format' => [\n                        'type' => 'string',\n                        'enum' => ['email', 'blog', 'report', 'tweet'],\n                        'description' => 'Output format',\n                    ],\n                ],\n                'required' => ['topic', 'format'],\n            ],\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dedicated-worker-agent-classes",
      children: "Dedicated Worker Agent Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each worker is a full agent with its own system prompt and optional tools:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Workers;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass ResearchAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a research specialist. Your job is to gather comprehensive, accurate\ninformation on any topic. Always cite sources where possible. Structure\nyour research with headings and bullet points for clarity.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Workers;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass SummarizerAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a summarization specialist. Condense content while preserving key\nfacts, arguments, and conclusions. Adapt your summary length to the\nrequest — one paragraph for quick overviews, structured sections for\ndetailed summaries. Never add information not in the original.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Workers;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass WriterAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a content writer. Produce clear, engaging, well-structured written\ncontent in the requested format. Adapt your tone to the audience: professional\nfor reports, conversational for blog posts, punchy for social media.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-supervisor-resolver",
      children: "The Supervisor Resolver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The supervisor's tool execution layer resolves which worker to call. This is handled by the AI SDK — when the model calls the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "research"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "summarize"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "write"
      }), " tool, the SDK routes the call to the tool handler registered in the application:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\ToolHandlers;\n\nuse App\\Ai\\Agents\\Workers\\ResearchAgent;\nuse App\\Ai\\Agents\\Workers\\SummarizerAgent;\nuse App\\Ai\\Agents\\Workers\\WriterAgent;\n\nclass WorkerDispatcher\n{\n    public function research(string $query, string $depth = 'quick'): string\n    {\n        $prompt = $depth === 'detailed'\n            ? \"Provide a comprehensive, detailed research report on: {$query}\"\n            : \"Provide a quick overview of: {$query}\";\n\n        return ResearchAgent::make()->prompt($prompt)->text();\n    }\n\n    public function summarize(string $content, int $max_length = 200): string\n    {\n        $prompt = <<<PROMPT\nSummarize the following content in no more than {$max_length} words:\n\n{$content}\nPROMPT;\n\n        return SummarizerAgent::make()->prompt($prompt)->text();\n    }\n\n    public function write(string $topic, string $format = 'blog'): string\n    {\n        $formatInstructions = match ($format) {\n            'email' => 'Write a professional email about:',\n            'blog' => 'Write an engaging blog post about:',\n            'report' => 'Write a formal report about:',\n            'tweet' => 'Write a concise tweet (max 280 chars) about:',\n            default => 'Write content about:',\n        };\n\n        return WriterAgent::make()->prompt(\"{$formatInstructions} {$topic}\")->text();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register tool handlers in a service provider:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Ai\\ToolHandlers\\WorkerDispatcher;\nuse Illuminate\\Support\\ServiceProvider;\nuse Laravel\\Ai\\Facades\\Agent;\n\nclass AiServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        Agent::registerTool('research', function (string $query, string $depth = 'quick') {\n            return app(WorkerDispatcher::class)->research($query, $depth);\n        });\n\n        Agent::registerTool('summarize', function (string $content, int $max_length = 200) {\n            return app(WorkerDispatcher::class)->summarize($content, $max_length);\n        });\n\n        Agent::registerTool('write', function (string $topic, string $format = 'blog') {\n            return app(WorkerDispatcher::class)->write($topic, $format);\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Make the supervisor stateless. Store all task state in Redis so the supervisor can be safely restarted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Make the supervisor stateless. Store all task state in Redis so the supervisor can be safely restarted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-agent-teams--handoff-protocols",
      children: "25.2 Agent Teams & Handoff Protocols"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Agent teams use handoff protocols with contracts defining what data is passed and what the receiving agent should do."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A single supervisor dispatching to isolated workers works for straightforward delegation. Complex goals require ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent teams"
      }), " — multiple agents that collaborate, pass context, and hand off control to one another mid-conversation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-handoff-pattern",
      children: "The Handoff Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The handoff pattern is: Agent A receives a request, determines it is not the right agent to handle it (or needs a specialist), formats a structured handoff message, and passes control to Agent B. Agent B receives the handoff context and continues the work."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "building-a-routeragent",
      children: "Building a RouterAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A router agent classifies incoming intent and hands off to a specialized agent. The handoff is implemented through structured output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Router;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\HasStructuredOutput;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\JsonSchema;\nuse Stringable;\n\nclass RouterAgent implements Agent\n{\n    use Promptable, HasStructuredOutput;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are an intent router. Analyze the user's message and classify it into\nexactly one category. Return your classification as structured output with\nthe category name, confidence score, and any extracted entities.\n\nCategories:\n- technical_support: Installation errors, configuration, bug reports\n- billing: Invoices, subscriptions, refunds, pricing\n- feature_request: New feature ideas, improvements, integrations\n- general: Any question not covered by the above categories\nPROMPT;\n    }\n\n    public function schema(): JsonSchema\n    {\n        return JsonSchema::object()\n            ->property('category', JsonSchema::enum([\n                'technical_support',\n                'billing',\n                'feature_request',\n                'general',\n            ]))\n            ->property('confidence', JsonSchema::number()->minimum(0)->maximum(1))\n            ->property('extracted_entities', JsonSchema::array(\n                JsonSchema::object()\n                    ->property('key', JsonSchema::string())\n                    ->property('value', JsonSchema::string())\n            ))\n            ->property('reasoning', JsonSchema::string()->maxLength(200));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "handoff-controller",
      children: "Handoff Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The router controller determines the target agent from the classification and hands off execution:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\Router\\RouterAgent;\nuse App\\Ai\\Agents\\Specialists\\TechnicalSupportAgent;\nuse App\\Ai\\Agents\\Specialists\\BillingAgent;\nuse App\\Ai\\Agents\\Specialists\\FeatureRequestAgent;\nuse App\\Ai\\Agents\\Specialists\\GeneralAgent;\nuse Illuminate\\Http\\Request;\n\nclass HandoffController extends Controller\n{\n    public function handle(Request $request): array\n    {\n        $request->validate(['message' => 'required|string']);\n\n        $route = RouterAgent::make()->prompt($request->input('message'));\n        $decision = $route->structured();\n\n        $specialist = match ($decision->category) {\n            'technical_support' => TechnicalSupportAgent::class,\n            'billing' => BillingAgent::class,\n            'feature_request' => FeatureRequestAgent::class,\n            'general' => GeneralAgent::class,\n        };\n\n        $handoffContext = $this->buildHandoffContext($request->input('message'), $decision);\n\n        $response = $specialist::make()\n            ->withContext($handoffContext)\n            ->prompt($request->input('message'));\n\n        return [\n            'response' => $response->text(),\n            'routed_to' => $decision->category,\n            'confidence' => $decision->confidence,\n        ];\n    }\n\n    private function buildHandoffContext(string $message, object $decision): array\n    {\n        return [\n            'original_message' => $message,\n            'classification' => $decision->category,\n            'entities' => json_encode($decision->extracted_entities),\n            'router_reasoning' => $decision->reasoning,\n            'handoff_protocol' => 'You are receiving this because the router determined '\n                . \"this is a {$decision->category} request \"\n                . \"(confidence: {$decision->confidence}). \"\n                . 'Continue the conversation and resolve the user\\'s issue.',\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "specialist-agents",
      children: "Specialist Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each specialist agent receives the handoff context and continues the conversation from where the router left off:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Specialists;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Conversational;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\RemembersConversations;\nuse Stringable;\n\nclass TechnicalSupportAgent implements Agent, Conversational\n{\n    use Promptable, RemembersConversations;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a technical support specialist. Help users resolve installation errors,\nconfiguration problems, and bugs. Ask for error messages, logs, and environment\ndetails. Provide step-by-step solutions. Escalate to engineering if the issue\nrequires code changes.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Specialists;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Conversational;\nuse Laravel\\Ai\\Promptable;\nuse Laravel\\Ai\\RemembersConversations;\nuse Stringable;\n\nclass BillingAgent implements Agent, Conversational\n{\n    use Promptable, RemembersConversations;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a billing specialist. Handle invoice questions, subscription changes,\nrefund requests, and pricing inquiries. Verify account ownership before\ndiscussing sensitive billing details. Provide clear timelines for\ntransactions and refunds.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "agent-to-agent-handoff-with-tools",
      children: "Agent-to-Agent Handoff with Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A more advanced handoff pattern lets one agent decide during the conversation that another agent should take over. This is done by registering \"handoff tools\" that transfer control:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass TriageAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are the first point of contact. Handle what you can, but if the user\nneeds specialized help, use the handoff tools to transfer them to the\nright expert.\n\n- handoff_to_support: Escalate technical issues beyond your capability\n- handoff_to_billing: Escalate payment or subscription questions\n- handoff_to_engineering: Escalate suspected bugs or feature requests\n\nWhen handing off, include a summary of what was discussed so the next\nagent can continue seamlessly.\nPROMPT;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register handoff tools that pass a summary to the next agent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Ai\\Agents\\Specialists\\TechnicalSupportAgent;\nuse App\\Ai\\Agents\\Specialists\\BillingAgent;\nuse App\\Ai\\Agents\\Specialists\\FeatureRequestAgent;\nuse Illuminate\\Support\\ServiceProvider;\nuse Laravel\\Ai\\Facades\\Agent;\n\nclass HandoffServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        Agent::registerTool('handoff_to_support', function (string $summary, string $user_message) {\n            return TechnicalSupportAgent::make()\n                ->withContext([\n                    'handoff_summary' => $summary,\n                    'original_request' => $user_message,\n                ])\n                ->prompt($user_message)\n                ->text();\n        });\n\n        Agent::registerTool('handoff_to_billing', function (string $summary, string $user_message) {\n            return BillingAgent::make()\n                ->withContext([\n                    'handoff_summary' => $summary,\n                    'original_request' => $user_message,\n                ])\n                ->prompt($user_message)\n                ->text();\n        });\n\n        Agent::registerTool('handoff_to_engineering', function (string $summary, string $user_message) {\n            return FeatureRequestAgent::make()\n                ->withContext([\n                    'handoff_summary' => $summary,\n                    'original_request' => $user_message,\n                ])\n                ->prompt($user_message)\n                ->text();\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "253-parallel-agent-execution",
      children: "25.3 Parallel Agent Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Independent agents run concurrently on separate queue workers, with results aggregated after all complete."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-agent systems often need to run several agents at the same time — analyzing the same data from different perspectives, researching multiple topics, or generating alternative outputs. Laravel queues enable true parallel execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-fan-outfan-in-pattern",
      children: "The Fan-Out/Fan-In Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fan-out dispatches multiple independent agent jobs simultaneously. Fan-in collects all results and merges them into a single output."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dispatching-parallel-agents",
      children: "Dispatching Parallel Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Ai\\Agents\\Workers\\ResearchAgent;\nuse App\\Ai\\Agents\\Workers\\SummarizerAgent;\nuse App\\Ai\\Agents\\Workers\\WriterAgent;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Support\\Facades\\Bus;\n\nclass ParallelAnalysisJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable;\n\n    public function __construct(\n        public string $topic,\n        public string $analysisId,\n    ) {}\n\n    public function handle(): void\n    {\n        $researchJob = new ResearchJob($this->topic, $this->analysisId, 'research');\n        $summarizeJob = new SummarizeExistingJob($this->topic, $this->analysisId, 'summarize');\n        $writerJob = new WriterOpinionJob($this->topic, $this->analysisId, 'write');\n\n        Bus::batch([\n            $researchJob,\n            $summarizeJob,\n            $writerJob,\n        ])->then(function () {\n            $this->mergeResults($this->analysisId);\n        })->catch(function () {\n            $this->handlePartialFailure($this->analysisId);\n        })->dispatch();\n    }\n\n    private function mergeResults(string $analysisId): void\n    {\n        $results = ParallelResult::where('analysis_id', $analysisId)->get();\n        $merged = new MergedAnalysis();\n        $merged->analysis_id = $analysisId;\n        $merged->research = $results->where('agent_type', 'research')->first()?->output ?? '';\n        $merged->summary = $results->where('agent_type', 'summarize')->first()?->output ?? '';\n        $merged->opinion = $results->where('agent_type', 'write')->first()?->output ?? '';\n        $merged->status = 'completed';\n        $merged->save();\n\n        broadcast(new AnalysisComplete($analysisId));\n    }\n\n    private function handlePartialFailure(string $analysisId): void\n    {\n        $analysis = MergedAnalysis::where('analysis_id', $analysisId)->firstOrNew();\n        $analysis->analysis_id = $analysisId;\n        $analysis->status = 'partial_failure';\n        $analysis->save();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each individual agent job runs its agent in isolation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Ai\\Agents\\Workers\\ResearchAgent;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass ResearchJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 120;\n\n    public function __construct(\n        public string $query,\n        public string $analysisId,\n        public string $agentType,\n    ) {}\n\n    public function handle(): void\n    {\n        $output = ResearchAgent::make()\n            ->prompt(\"Research the following topic thoroughly: {$this->query}\");\n\n        ParallelResult::create([\n            'analysis_id' => $this->analysisId,\n            'agent_type' => $this->agentType,\n            'output' => $output->text(),\n            'input_tokens' => $output->inputTokens(),\n            'output_tokens' => $output->outputTokens(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Ai\\Agents\\Workers\\SummarizerAgent;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass SummarizeExistingJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 120;\n\n    public function __construct(\n        public string $content,\n        public string $analysisId,\n        public string $agentType,\n    ) {}\n\n    public function handle(): void\n    {\n        $output = SummarizerAgent::make()\n            ->prompt(\"Provide a detailed summary of the following:\\n\\n{$this->content}\");\n\n        ParallelResult::create([\n            'analysis_id' => $this->analysisId,\n            'agent_type' => $this->agentType,\n            'output' => $output->text(),\n            'input_tokens' => $output->inputTokens(),\n            'output_tokens' => $output->outputTokens(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Ai\\Agents\\Workers\\WriterAgent;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass WriterOpinionJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 120;\n\n    public function __construct(\n        public string $topic,\n        public string $analysisId,\n        public string $agentType,\n    ) {}\n\n    public function handle(): void\n    {\n        $output = WriterAgent::make()\n            ->prompt(\"Write a thoughtful analysis piece on the following topic. Include key arguments, counterarguments, and your synthesis:\\n\\n{$this->topic}\");\n\n        ParallelResult::create([\n            'analysis_id' => $this->analysisId,\n            'agent_type' => $this->agentType,\n            'output' => $output->text(),\n            'input_tokens' => $output->inputTokens(),\n            'output_tokens' => $output->outputTokens(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-parallelresult-model",
      children: "The ParallelResult Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass ParallelResult extends Model\n{\n    protected $fillable = [\n        'analysis_id',\n        'agent_type',\n        'output',\n        'input_tokens',\n        'output_tokens',\n        'failed_at',\n        'error_message',\n    ];\n\n    protected $casts = [\n        'input_tokens' => 'integer',\n        'output_tokens' => 'integer',\n        'failed_at' => 'datetime',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass MergedAnalysis extends Model\n{\n    protected $fillable = [\n        'analysis_id',\n        'research',\n        'summary',\n        'opinion',\n        'status',\n    ];\n\n    protected $casts = [\n        'status' => 'string',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-merged-analysis-migration",
      children: "The Merged Analysis Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('parallel_results', function (Blueprint $table) {\n            $table->id();\n            $table->string('analysis_id');\n            $table->string('agent_type');\n            $table->longText('output');\n            $table->integer('input_tokens')->nullable();\n            $table->integer('output_tokens')->nullable();\n            $table->timestamp('failed_at')->nullable();\n            $table->text('error_message')->nullable();\n            $table->timestamps();\n\n            $table->index('analysis_id');\n        });\n\n        Schema::create('merged_analyses', function (Blueprint $table) {\n            $table->id();\n            $table->string('analysis_id')->unique();\n            $table->longText('research')->nullable();\n            $table->longText('summary')->nullable();\n            $table->longText('opinion')->nullable();\n            $table->string('status')->default('pending');\n            $table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('merged_analyses');\n        Schema::dropIfExists('parallel_results');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-broadcast-event",
      children: "The Broadcast Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Events;\n\nuse Illuminate\\Broadcasting\\Channel;\nuse Illuminate\\Broadcasting\\InteractsWithSockets;\nuse Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;\nuse Illuminate\\Foundation\\Events\\Dispatchable;\n\nclass AnalysisComplete implements ShouldBroadcast\n{\n    use Dispatchable, InteractsWithSockets;\n\n    public function __construct(\n        public string $analysisId,\n    ) {}\n\n    public function broadcastOn(): Channel\n    {\n        return new Channel(\"analysis.{$this->analysisId}\");\n    }\n\n    public function broadcastAs(): string\n    {\n        return 'analysis.complete';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "controller-triggering-parallel-execution",
      children: "Controller Triggering Parallel Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Jobs\\ParallelAnalysisJob;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Str;\n\nclass ParallelAnalysisController extends Controller\n{\n    public function analyze(Request $request): array\n    {\n        $request->validate([\n            'topic' => 'required|string|min:10',\n        ]);\n\n        $analysisId = (string) Str::uuid();\n\n        ParallelAnalysisJob::dispatch(\n            topic: $request->input('topic'),\n            analysisId: $analysisId,\n        );\n\n        return [\n            'analysis_id' => $analysisId,\n            'status' => 'processing',\n            'message' => 'Three analysis agents are working in parallel. Poll the status endpoint for results.',\n        ];\n    }\n\n    public function status(string $analysisId): array\n    {\n        $analysis = MergedAnalysis::where('analysis_id', $analysisId)->first();\n\n        if (! $analysis) {\n            return ['status' => 'processing'];\n        }\n\n        return [\n            'status' => $analysis->status,\n            'research' => $analysis->research,\n            'summary' => $analysis->summary,\n            'opinion' => $analysis->opinion,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "254-state-management-across-agents",
      children: "25.4 State Management Across Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Redis stores shared agent state with TTL, job IDs, and status tracking for distributed coordination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When multiple agents collaborate on a shared goal, they need a mechanism to read and write shared state. Each agent should be able to save information for other agents, recall what previous agents have discovered, and signal completion of their part."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-agentmemory-system",
      children: "The AgentMemory System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a shared memory layer using Eloquent and Redis:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Support\\Facades\\Cache;\n\nclass AgentMemory extends Model\n{\n    protected $fillable = [\n        'team_id',\n        'session_id',\n        'agent_name',\n        'key',\n        'value',\n        'namespace',\n        'metadata',\n    ];\n\n    protected $casts = [\n        'value' => 'array',\n        'metadata' => 'array',\n    ];\n\n    public function scopeTeam(Builder $query, string $teamId): Builder\n    {\n        return $query->where('team_id', $teamId);\n    }\n\n    public function scopeSession(Builder $query, string $sessionId): Builder\n    {\n        return $query->where('session_id', $sessionId);\n    }\n\n    public function scopeNamespace(Builder $query, string $namespace): Builder\n    {\n        return $query->where('namespace', $namespace);\n    }\n\n    public static function saveMemory(\n        string $teamId,\n        string $sessionId,\n        string $agentName,\n        string $key,\n        mixed $value,\n        string $namespace = 'default',\n        array $metadata = [],\n    ): static {\n        $memory = static::updateOrCreate(\n            [\n                'team_id' => $teamId,\n                'session_id' => $sessionId,\n                'agent_name' => $agentName,\n                'key' => $key,\n                'namespace' => $namespace,\n            ],\n            [\n                'value' => $value,\n                'metadata' => $metadata,\n            ]\n        );\n\n        Cache::put(\n            \"agent_memory:{$teamId}:{$sessionId}:{$namespace}:{$key}\",\n            $value,\n            now()->addHours(2)\n        );\n\n        return $memory;\n    }\n\n    public static function recall(\n        string $teamId,\n        string $sessionId,\n        string $key,\n        string $namespace = 'default',\n    ): mixed {\n        $cached = Cache::get(\"agent_memory:{$teamId}:{$sessionId}:{$namespace}:{$key}\");\n\n        if ($cached !== null) {\n            return $cached;\n        }\n\n        $memory = static::where('team_id', $teamId)\n            ->where('session_id', $sessionId)\n            ->where('key', $key)\n            ->where('namespace', $namespace)\n            ->first();\n\n        return $memory?->value;\n    }\n\n    public static function forget(\n        string $teamId,\n        string $sessionId,\n        string $key,\n        string $namespace = 'default',\n    ): void {\n        Cache::forget(\"agent_memory:{$teamId}:{$sessionId}:{$namespace}:{$key}\");\n\n        static::where('team_id', $teamId)\n            ->where('session_id', $sessionId)\n            ->where('key', $key)\n            ->where('namespace', $namespace)\n            ->delete();\n    }\n\n    public static function recallAll(\n        string $teamId,\n        string $sessionId,\n        string $namespace = 'default',\n    ): array {\n        $memories = static::where('team_id', $teamId)\n            ->where('session_id', $sessionId)\n            ->where('namespace', $namespace)\n            ->get()\n            ->keyBy('key')\n            ->map(fn ($m) => $m->value)\n            ->all();\n\n        $cacheKeys = Cache::getMultiple(\n            array_map(\n                fn ($key) => \"agent_memory:{$teamId}:{$sessionId}:{$namespace}:{$key}\",\n                array_keys($memories)\n            )\n        );\n\n        return array_merge($memories, $cacheKeys);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-agentmemory",
      children: "Migration for AgentMemory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('agent_memories', function (Blueprint $table) {\n            $table->id();\n            $table->string('team_id');\n            $table->string('session_id');\n            $table->string('agent_name');\n            $table->string('key');\n            $table->string('namespace')->default('default');\n            $table->json('value');\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->unique(['team_id', 'session_id', 'agent_name', 'key', 'namespace']);\n            $table->index(['team_id', 'session_id', 'namespace']);\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('agent_memories');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "shared-memory-trait-for-agents",
      children: "Shared Memory Trait for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Concerns;\n\nuse App\\Models\\AgentMemory;\n\ntrait HasSharedMemory\n{\n    public function remember(string $key, mixed $value, ?string $namespace = null): void\n    {\n        AgentMemory::saveMemory(\n            teamId: $this->getTeamId(),\n            sessionId: $this->getSessionId(),\n            agentName: static::class,\n            key: $key,\n            value: $value,\n            namespace: $namespace ?? 'default',\n        );\n    }\n\n    public function recall(string $key, ?string $namespace = null): mixed\n    {\n        return AgentMemory::recall(\n            teamId: $this->getTeamId(),\n            sessionId: $this->getSessionId(),\n            key: $key,\n            namespace: $namespace ?? 'default',\n        );\n    }\n\n    public function recallAll(?string $namespace = null): array\n    {\n        return AgentMemory::recallAll(\n            teamId: $this->getTeamId(),\n            sessionId: $this->getSessionId(),\n            namespace: $namespace ?? 'default',\n        );\n    }\n\n    public function shareContext(array $data, string $namespace = 'context'): void\n    {\n        foreach ($data as $key => $value) {\n            $this->remember($key, $value, $namespace);\n        }\n    }\n\n    abstract protected function getTeamId(): string;\n    abstract protected function getSessionId(): string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "agent-using-shared-memory",
      children: "Agent Using Shared Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents;\n\nuse App\\Ai\\Concerns\\HasSharedMemory;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass ContextAwareResearchAgent implements Agent\n{\n    use Promptable, HasSharedMemory;\n\n    public function __construct(\n        private string $teamId,\n        private string $sessionId,\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $shared = $this->recallAll('context');\n        $context = ! empty($shared)\n            ? \"Shared context from team:\\n\" . json_encode($shared, JSON_PRETTY_PRINT)\n            : 'No shared context yet.';\n\n        return <<<PROMPT\nYou are a research agent operating in a team setting.\n\n{$context}\n\nConduct your research and then save key findings to shared memory\nso other agents can use them.\nPROMPT;\n    }\n\n    public function analyze(string $topic): string\n    {\n        $response = $this->make()->prompt(\"Analyze: {$topic}\");\n\n        $this->remember('research_findings', [\n            'topic' => $topic,\n            'findings' => $response->text(),\n            'analyzed_by' => static::class,\n            'analyzed_at' => now()->toIso8601String(),\n        ], 'research');\n\n        return $response->text();\n    }\n\n    protected function getTeamId(): string\n    {\n        return $this->teamId;\n    }\n\n    protected function getSessionId(): string\n    {\n        return $this->sessionId;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "agentconversation-context-sharing",
      children: "AgentConversation Context Sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For agents that need conversational context, extend the shared memory with conversation IDs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Ai\\Agents\\ContextAwareResearchAgent;\nuse App\\Ai\\Agents\\ContextAwareWriterAgent;\nuse App\\Models\\AgentMemory;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Str;\n\nclass TeamConversationController extends Controller\n{\n    public function collaborate(Request $request): array\n    {\n        $request->validate(['topic' => 'required|string']);\n\n        $teamId = (string) Str::uuid();\n        $sessionId = (string) Str::uuid();\n\n        AgentMemory::saveMemory($teamId, $sessionId, 'system', 'topic', $request->input('topic'), 'context');\n\n        $researchAgent = new ContextAwareResearchAgent($teamId, $sessionId);\n        $researchFindings = $researchAgent->analyze($request->input('topic'));\n\n        $writerAgent = new ContextAwareWriterAgent($teamId, $sessionId);\n        $finalOutput = $writerAgent->write($request->input('topic'));\n\n        $memoryLog = AgentMemory::recallAll($teamId, $sessionId, 'research');\n\n        return [\n            'team_id' => $teamId,\n            'session_id' => $sessionId,\n            'research' => $researchFindings,\n            'output' => $finalOutput,\n            'memory_entries' => count($memoryLog),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Always set TTL on agent state in Redis. Expired state from dead agents should be automatically cleaned up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Always set TTL on agent state in Redis. Expired state from dead agents should be automatically cleaned up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "255-queue-backed-agent-orchestration",
      children: "25.5 Queue-Backed Agent Orchestration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Dedicated queues per agent type with priority levels ensure critical agents process first."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production multi-agent systems run on queues. Laravel Horizon provides a rich dashboard for monitoring agent workers, while job batching enables complex multi-step workflows with built-in sequencing, failure handling, and completion callbacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "agent-orchestrator-job",
      children: "Agent Orchestrator Job"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The orchestrator is a single entry point that decomposes a goal into a sequence of agent jobs, each potentially dependent on the previous:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs\\Orchestrator;\n\nuse App\\Jobs\\Agents\\AnalyzeRequirementsJob;\nuse App\\Jobs\\Agents\\GenerateSolutionJob;\nuse App\\Jobs\\Agents\\ValidateOutputJob;\nuse App\\Jobs\\Agents\\FormatResponseJob;\nuse App\\Models\\Orchestration;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\nuse Illuminate\\Support\\Facades\\Bus;\n\nclass AgentOrchestratorJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 600;\n\n    public function __construct(\n        public string $orchestrationId,\n        public string $goal,\n        public array $parameters = [],\n    ) {}\n\n    public function handle(): void\n    {\n        Orchestration::where('id', $this->orchestrationId)\n            ->update(['status' => 'running']);\n\n        $batch = Bus::chain([\n            new AnalyzeRequirementsJob($this->orchestrationId, $this->goal, $this->parameters),\n            new GenerateSolutionJob($this->orchestrationId),\n            new ValidateOutputJob($this->orchestrationId),\n            new FormatResponseJob($this->orchestrationId),\n        ])->catch(function (\\Throwable $e) {\n            Orchestration::where('id', $this->orchestrationId)\n                ->update([\n                    'status' => 'failed',\n                    'error' => $e->getMessage(),\n                ]);\n        })->then(function () {\n            Orchestration::where('id', $this->orchestrationId)\n                ->update(['status' => 'completed']);\n        });\n\n        $this->batchId = $batch->dispatch();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "individual-chain-jobs",
      children: "Individual Chain Jobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each job in the chain receives the orchestration ID, does its work, and stores output for the next job:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs\\Agents;\n\nuse App\\Models\\Orchestration;\nuse App\\Models\\OrchestrationStep;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass AnalyzeRequirementsJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 180;\n\n    public function __construct(\n        public string $orchestrationId,\n        public string $goal,\n        public array $parameters = [],\n    ) {}\n\n    public function handle(): void\n    {\n        $step = OrchestrationStep::create([\n            'orchestration_id' => $this->orchestrationId,\n            'agent_name' => 'analyze-requirements',\n            'status' => 'running',\n        ]);\n\n        try {\n            $response = \\App\\Ai\\Agents\\Workers\\ResearchAgent::make()\n                ->prompt(\"Analyze the following goal and extract key requirements, constraints, and success criteria:\\n\\nGoal: {$this->goal}\\n\\nParameters: \" . json_encode($this->parameters));\n\n            $requirements = $response->text();\n\n            Orchestration::where('id', $this->orchestrationId)\n                ->update(['step_1_output' => $requirements]);\n\n            $step->update([\n                'output' => $requirements,\n                'status' => 'completed',\n            ]);\n        } catch (\\Throwable $e) {\n            $step->update([\n                'status' => 'failed',\n                'error' => $e->getMessage(),\n            ]);\n            throw $e;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs\\Agents;\n\nuse App\\Models\\Orchestration;\nuse App\\Models\\OrchestrationStep;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass GenerateSolutionJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 300;\n\n    public function __construct(\n        public string $orchestrationId,\n    ) {}\n\n    public function handle(): void\n    {\n        $orchestration = Orchestration::findOrFail($this->orchestrationId);\n\n        $step = OrchestrationStep::create([\n            'orchestration_id' => $this->orchestrationId,\n            'agent_name' => 'generate-solution',\n            'status' => 'running',\n        ]);\n\n        try {\n            $response = \\App\\Ai\\Agents\\Workers\\WriterAgent::make()\n                ->prompt(\"Based on these requirements, generate a comprehensive solution:\\n\\n{$orchestration->step_1_output}\");\n\n            $orchestration->update(['step_2_output' => $response->text()]);\n\n            $step->update([\n                'output' => $response->text(),\n                'status' => 'completed',\n            ]);\n        } catch (\\Throwable $e) {\n            $step->update([\n                'status' => 'failed',\n                'error' => $e->getMessage(),\n            ]);\n            throw $e;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs\\Agents;\n\nuse App\\Models\\Orchestration;\nuse App\\Models\\OrchestrationStep;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass ValidateOutputJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 120;\n\n    public function __construct(\n        public string $orchestrationId,\n    ) {}\n\n    public function handle(): void\n    {\n        $orchestration = Orchestration::findOrFail($this->orchestrationId);\n\n        $step = OrchestrationStep::create([\n            'orchestration_id' => $this->orchestrationId,\n            'agent_name' => 'validate-output',\n            'status' => 'running',\n        ]);\n\n        try {\n            $response = \\App\\Ai\\Agents\\Workers\\SummarizerAgent::make()\n                ->prompt(\"Review this solution for completeness, correctness, and clarity. Identify any gaps or issues:\\n\\n{$orchestration->step_2_output}\");\n\n            $orchestration->update([\n                'step_3_output' => $response->text(),\n                'validation_passed' => true,\n            ]);\n\n            $step->update([\n                'output' => $response->text(),\n                'status' => 'completed',\n            ]);\n        } catch (\\Throwable $e) {\n            $step->update([\n                'status' => 'failed',\n                'error' => $e->getMessage(),\n            ]);\n            throw $e;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs\\Agents;\n\nuse App\\Models\\Orchestration;\nuse App\\Models\\OrchestrationStep;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass FormatResponseJob implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 60;\n\n    public function __construct(\n        public string $orchestrationId,\n    ) {}\n\n    public function handle(): void\n    {\n        $orchestration = Orchestration::findOrFail($this->orchestrationId);\n\n        $step = OrchestrationStep::create([\n            'orchestration_id' => $this->orchestrationId,\n            'agent_name' => 'format-response',\n            'status' => 'running',\n        ]);\n\n        try {\n            $formatted = <<<RESPONSE\n## Solution\n\n{$orchestration->step_2_output}\n\n## Validation\n\n{$orchestration->step_3_output}\nRESPONSE;\n\n            $orchestration->update([\n                'step_4_output' => $formatted,\n                'final_output' => $formatted,\n                'status' => 'completed',\n            ]);\n\n            $step->update([\n                'output' => $formatted,\n                'status' => 'completed',\n            ]);\n\n            broadcast(new \\App\\Events\\OrchestrationComplete($this->orchestrationId));\n        } catch (\\Throwable $e) {\n            $step->update([\n                'status' => 'failed',\n                'error' => $e->getMessage(),\n            ]);\n            throw $e;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "orchestration-model",
      children: "Orchestration Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Orchestration extends Model\n{\n    protected $fillable = [\n        'goal',\n        'parameters',\n        'status',\n        'error',\n        'step_1_output',\n        'step_2_output',\n        'step_3_output',\n        'step_4_output',\n        'final_output',\n        'validation_passed',\n    ];\n\n    protected $casts = [\n        'parameters' => 'array',\n        'validation_passed' => 'boolean',\n    ];\n\n    public function steps(): \\Illuminate\\Database\\Eloquent\\Relations\\HasMany\n    {\n        return $this->hasMany(OrchestrationStep::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass OrchestrationStep extends Model\n{\n    protected $fillable = [\n        'orchestration_id',\n        'agent_name',\n        'status',\n        'output',\n        'error',\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "triggering-the-orchestrator-from-a-controller",
      children: "Triggering the Orchestrator from a Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Jobs\\Orchestrator\\AgentOrchestratorJob;\nuse App\\Models\\Orchestration;\nuse Illuminate\\Http\\Request;\n\nclass OrchestrationController extends Controller\n{\n    public function start(Request $request): array\n    {\n        $request->validate([\n            'goal' => 'required|string|min:20',\n        ]);\n\n        $orchestration = Orchestration::create([\n            'goal' => $request->input('goal'),\n            'parameters' => $request->except('goal'),\n            'status' => 'queued',\n        ]);\n\n        AgentOrchestratorJob::dispatch(\n            orchestrationId: $orchestration->id,\n            goal: $orchestration->goal,\n            parameters: $orchestration->parameters,\n        );\n\n        return [\n            'orchestration_id' => $orchestration->id,\n            'status' => 'queued',\n            'chain' => ['analyze-requirements', 'generate-solution', 'validate-output', 'format-response'],\n        ];\n    }\n\n    public function show(string $id): array\n    {\n        $orchestration = Orchestration::with('steps')->findOrFail($id);\n\n        return [\n            'id' => $orchestration->id,\n            'goal' => $orchestration->goal,\n            'status' => $orchestration->status,\n            'error' => $orchestration->error,\n            'final_output' => $orchestration->final_output,\n            'steps' => $orchestration->steps->map(fn ($step) => [\n                'agent' => $step->agent_name,\n                'status' => $step->status,\n                'error' => $step->error,\n            ]),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "horizon-configuration-for-agent-workloads",
      children: "Horizon Configuration for Agent Workloads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure Horizon to prioritize agent queues:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nreturn [\n    'defaults' => [\n        'supervisor-1' => [\n            'connection' => 'redis',\n            'queue' => ['agent-high', 'agent-default', 'agent-low'],\n            'balance' => 'auto',\n            'autoScalingStrategy' => 'time',\n            'maxProcesses' => 20,\n            'minProcesses' => 4,\n            'maxTime' => 0,\n            'maxJobs' => 0,\n            'memory' => 256,\n            'tries' => 3,\n            'timeout' => 600,\n            'nice' => 0,\n        ],\n    ],\n\n    'environments' => [\n        'production' => [\n            'supervisor-agent-workers' => [\n                'connection' => 'redis',\n                'queue' => ['agent-high', 'agent-default'],\n                'balance' => 'auto',\n                'maxProcesses' => 30,\n                'minProcesses' => 10,\n                'tries' => 3,\n                'timeout' => 600,\n            ],\n        ],\n\n        'local' => [\n            'supervisor-agent-workers' => [\n                'connection' => 'redis',\n                'queue' => ['agent-high', 'agent-default', 'agent-low'],\n                'balance' => 'simple',\n                'maxProcesses' => 6,\n                'minProcesses' => 2,\n                'tries' => 3,\n                'timeout' => 600,\n            ],\n        ],\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dispatch agent jobs to the correct queue based on priority:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "AgentOrchestratorJob::dispatch(...)->onQueue('agent-high');\n\nResearchJob::dispatch(...)->onQueue('agent-default');\n\nSummarizeExistingJob::dispatch(...)->onQueue('agent-low');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "256-multi-agent-failure-modes",
      children: "25.6 Multi-Agent Failure Modes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Circuit breakers, dead-letter queues, and fallback agents handle failures in distributed agent systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-agent systems introduce failure modes that single-agent systems do not face. Agents can produce conflicting outputs, enter infinite handoff loops, cascade failures across a chain, or silently degrade in quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "circuit-breaker-pattern",
      children: "Circuit Breaker Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A circuit breaker prevents cascading failures by monitoring agent failures and temporarily stopping calls to a failing agent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Resilience;\n\nuse Illuminate\\Support\\Facades\\Cache;\n\nclass CircuitBreaker\n{\n    public const STATE_CLOSED = 'closed';\n    public const STATE_OPEN = 'open';\n    public const STATE_HALF_OPEN = 'half_open';\n\n    public function __construct(\n        private string $agentName,\n        private int $failureThreshold = 5,\n        private int $resetTimeoutSeconds = 60,\n        private int $halfOpenMaxCalls = 3,\n    ) {}\n\n    private function cacheKey(string $suffix): string\n    {\n        return \"circuit_breaker:{$this->agentName}:{$suffix}\";\n    }\n\n    public function recordSuccess(): void\n    {\n        $state = $this->state();\n\n        if ($state === self::STATE_HALF_OPEN) {\n            $this->setState(self::STATE_CLOSED);\n            Cache::forget($this->cacheKey('failure_count'));\n        }\n\n        if ($state === self::STATE_CLOSED) {\n            Cache::forget($this->cacheKey('failure_count'));\n        }\n    }\n\n    public function recordFailure(): bool\n    {\n        $state = $this->state();\n\n        if ($state === self::STATE_HALF_OPEN) {\n            $this->setState(self::STATE_OPEN);\n            Cache::put($this->cacheKey('opened_at'), now()->timestamp, $this->resetTimeoutSeconds);\n\n            return false;\n        }\n\n        $failures = Cache::increment($this->cacheKey('failure_count'), 1);\n\n        if ($failures >= $this->failureThreshold) {\n            $this->setState(self::STATE_OPEN);\n            Cache::put($this->cacheKey('opened_at'), now()->timestamp, $this->resetTimeoutSeconds);\n\n            return false;\n        }\n\n        return true;\n    }\n\n    public function isAvailable(): bool\n    {\n        $state = $this->state();\n\n        if ($state === self::STATE_CLOSED) {\n            return true;\n        }\n\n        if ($state === self::STATE_OPEN) {\n            $openedAt = Cache::get($this->cacheKey('opened_at'), 0);\n\n            if (now()->timestamp - $openedAt >= $this->resetTimeoutSeconds) {\n                $this->setState(self::STATE_HALF_OPEN);\n\n                return true;\n            }\n\n            return false;\n        }\n\n        return true;\n    }\n\n    public function state(): string\n    {\n        return Cache::get($this->cacheKey('state'), self::STATE_CLOSED);\n    }\n\n    private function setState(string $state): void\n    {\n        Cache::put($this->cacheKey('state'), $state, 3600);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "circuit-breaker-middleware-for-agents",
      children: "Circuit Breaker Middleware for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Resilience;\n\nuse App\\Ai\\Agents\\Workers\\ResearchAgent;\nuse Closure;\n\nclass CircuitBreakerMiddleware\n{\n    public function handle(string $agentName, Closure $next): mixed\n    {\n        $breaker = new CircuitBreaker($agentName);\n\n        if (! $breaker->isAvailable()) {\n            throw new \\RuntimeException(\n                \"Agent '{$agentName}' is unavailable. Circuit breaker is OPEN. \"\n                . 'Retry after the reset timeout.'\n            );\n        }\n\n        try {\n            $result = $next();\n\n            $breaker->recordSuccess();\n\n            return $result;\n        } catch (\\Throwable $e) {\n            $breaker->recordFailure();\n\n            throw $e;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "timeout-guard",
      children: "Timeout Guard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agent calls can hang indefinitely. A timeout guard wraps agent execution with a hard deadline:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Resilience;\n\nuse Illuminate\\Support\\Facades\\Cache;\n\nclass TimeoutGuard\n{\n    public function __construct(\n        private int $defaultTimeoutSeconds = 120,\n    ) {}\n\n    public function execute(string $taskId, callable $agentCall, ?int $timeoutSeconds = null): mixed\n    {\n        $timeout = $timeoutSeconds ?? $this->defaultTimeoutSeconds;\n\n        Cache::put(\"agent_timeout:{$taskId}\", now()->timestamp, $timeout);\n        $deadline = now()->addSeconds($timeout);\n\n        $result = null;\n        $completed = false;\n\n        $promise = new \\Fiber(function () use ($agentCall, &$result, &$completed) {\n            $result = $agentCall();\n            $completed = true;\n        });\n\n        $promise->start();\n\n        while (! $promise->isTerminated()) {\n            if (now()->greaterThan($deadline)) {\n                Cache::put(\"agent_timeout:{$taskId}:expired\", true, 60);\n                throw new \\RuntimeException(\n                    \"Agent execution timed out after {$timeout} seconds (task: {$taskId}).\"\n                );\n            }\n\n            $promise->resume();\n            usleep(100_000);\n        }\n\n        Cache::forget(\"agent_timeout:{$taskId}\");\n\n        return $result;\n    }\n\n    public static function isExpired(string $taskId): bool\n    {\n        return Cache::get(\"agent_timeout:{$taskId}:expired\", false);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conflictresolver",
      children: "ConflictResolver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When multiple agents return conflicting outputs, a conflict resolver uses a tie-breaking agent or a voting mechanism:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Resilience;\n\nuse Laravel\\Ai\\Facades\\Agent;\n\nclass ConflictResolver\n{\n    public function resolve(array $agentOutputs, string $goal): array\n    {\n        if (empty($agentOutputs)) {\n            throw new \\InvalidArgumentException('No agent outputs to resolve.');\n        }\n\n        if (count($agentOutputs) === 1) {\n            return ['resolution' => $agentOutputs[0], 'method' => 'single_result'];\n        }\n\n        $uniqueOutputs = $this->deduplicate($agentOutputs);\n\n        if (count($uniqueOutputs) === 1) {\n            return ['resolution' => $uniqueOutputs[0], 'method' => 'deduplicated'];\n        }\n\n        $consensusCheck = $this->checkConsensus($uniqueOutputs);\n\n        if ($consensusCheck !== null) {\n            return ['resolution' => $consensusCheck, 'method' => 'majority'];\n        }\n\n        return $this->arbitrate($uniqueOutputs, $goal);\n    }\n\n    private function deduplicate(array $outputs): array\n    {\n        $seen = [];\n        $unique = [];\n\n        foreach ($outputs as $output) {\n            $fingerprint = md5(substr($output, 0, 200));\n\n            if (! isset($seen[$fingerprint])) {\n                $seen[$fingerprint] = true;\n                $unique[] = $output;\n            }\n        }\n\n        return $unique;\n    }\n\n    private function checkConsensus(array $outputs): ?string\n    {\n        $counts = [];\n\n        foreach ($outputs as $output) {\n            $key = md5($output);\n            $counts[$key] = ($counts[$key] ?? 0) + 1;\n        }\n\n        arsort($counts);\n        $top = reset($counts);\n\n        if ($top >= count($outputs) / 2) {\n            $winner = array_key_first($counts);\n            foreach ($outputs as $output) {\n                if (md5($output) === $winner) {\n                    return $output;\n                }\n            }\n        }\n\n        return null;\n    }\n\n    private function arbitrate(array $outputs, string $goal): array\n    {\n        $outputsText = '';\n        foreach ($outputs as $i => $output) {\n            $outputsText .= \"--- Output \" . ($i + 1) . \" ---\\n{$output}\\n\\n\";\n        }\n\n        $response = Agent::make()\n            ->instructions(\"You are an arbiter. Multiple agents produced different outputs for the same goal. Review all outputs and produce the best synthesis. Resolve contradictions by preferring the most well-supported claims.\")\n            ->prompt(\"Goal: {$goal}\\n\\nAgent outputs:\\n{$outputsText}\");\n\n        return [\n            'resolution' => $response->text(),\n            'method' => 'arbitrated',\n            'original_outputs' => $outputs,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "max-retry-policy-with-exponential-backoff",
      children: "Max-Retry Policy with Exponential Backoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Resilience;\n\nuse Illuminate\\Support\\Facades\\Cache;\n\nclass RetryPolicy\n{\n    public function __construct(\n        private int $maxRetries = 3,\n        private int $baseDelayMs = 1000,\n        private float $backoffMultiplier = 2.0,\n    ) {}\n\n    public function execute(string $taskId, callable $operation): mixed\n    {\n        $attempts = 0;\n\n        while ($attempts <= $this->maxRetries) {\n            try {\n                return $operation();\n            } catch (\\Throwable $e) {\n                $attempts++;\n\n                if ($attempts > $this->maxRetries) {\n                    throw new \\RuntimeException(\n                        \"Task '{$taskId}' failed after {$this->maxRetries} retries: {$e->getMessage()}\",\n                        previous: $e\n                    );\n                }\n\n                $delay = (int) ($this->baseDelayMs * ($this->backoffMultiplier ** ($attempts - 1)));\n                $jitter = random_int(0, (int) ($delay * 0.1));\n                $totalDelay = $delay + $jitter;\n\n                Cache::put(\"retry_policy:{$taskId}:attempt\", $attempts, 3600);\n                Cache::put(\"retry_policy:{$taskId}:next_retry_ms\", $totalDelay, 10);\n\n                usleep($totalDelay * 1000);\n            }\n        }\n\n        throw new \\RuntimeException(\"Task '{$taskId}' failed with unknown error.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "guarded-agent-execution",
      children: "Guarded Agent Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combine all resilience patterns into a single guarded execution wrapper:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Resilience;\n\nclass GuardedAgent\n{\n    public function __construct(\n        private string $agentName,\n        private CircuitBreaker $circuitBreaker,\n        private TimeoutGuard $timeoutGuard,\n        private RetryPolicy $retryPolicy,\n        private ConflictResolver $conflictResolver,\n    ) {}\n\n    public function execute(string $taskId, callable $agentCall, ?int $timeoutSeconds = null): mixed\n    {\n        $this->circuitBreaker->isAvailable();\n\n        return $this->retryPolicy->execute($taskId, function () use ($taskId, $agentCall, $timeoutSeconds) {\n            return $this->timeoutGuard->execute($taskId, $agentCall, $timeoutSeconds);\n        });\n    }\n\n    public function executeWithConflictResolution(\n        string $taskId,\n        array $agentCalls,\n        string $goal,\n    ): array {\n        $results = [];\n\n        foreach ($agentCalls as $index => $call) {\n            try {\n                $results[] = $this->execute(\"{$taskId}_{$index}\", $call);\n            } catch (\\Throwable $e) {\n                $results[] = \"[FAILED] {$e->getMessage()}\";\n            }\n        }\n\n        return $this->conflictResolver->resolve($results, $goal);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Design for partial failure. A single failing agent should not block the entire multi-agent system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Design for partial failure. A single failing agent should not block the entire multi-agent system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "257-testing-multi-agent-systems",
      children: "25.7 Testing Multi-Agent Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test each agent in isolation, then test team interactions with integration tests and mock agent responses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing multi-agent systems requires mocking individual agents, verifying handoff logic, and validating orchestration workflows. PEST tests with Laravel's built-in mocking capabilities provide the foundation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mocking-individual-agents",
      children: "Mocking Individual Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Ai\\Agents\\Workers\\ResearchAgent;\nuse App\\Ai\\Agents\\Workers\\SummarizerAgent;\nuse App\\Ai\\Agents\\Workers\\WriterAgent;\nuse Laravel\\Ai\\Facades\\Agent;\nuse Laravel\\Ai\\Lab;\n\ntest('supervisor dispatches to research agent', function () {\n    Agent::fake();\n\n    Agent::registerTool('research', function (string $query, string $depth = 'quick') {\n        return \"Research results for: {$query}\";\n    });\n\n    Agent::registerTool('summarize', function (string $content, int $max_length = 200) {\n        return \"Summary of content\";\n    });\n\n    Agent::registerTool('write', function (string $topic, string $format = 'blog') {\n        return \"Written content about: {$topic}\";\n    });\n\n    $response = Agent::make()\n        ->instructions('Call the research tool with query \"quantum computing\".')\n        ->tools([\n            ['type' => 'function', 'name' => 'research', 'description' => '...', 'parameters' => [...]],\n            ['type' => 'function', 'name' => 'summarize', 'description' => '...', 'parameters' => [...]],\n            ['type' => 'function', 'name' => 'write', 'description' => '...', 'parameters' => [...]],\n        ])\n        ->prompt('Research quantum computing');\n\n    expect($response->toolCalls())->toHaveCount(1);\n    expect($response->toolCalls()[0]['name'])->toBe('research');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-the-supervisorworker-pattern",
      children: "Testing the Supervisor/Worker Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Http\\Controllers\\DelegationController;\nuse Illuminate\\Http\\Request;\n\ntest('supervisor classifies and delegates research tasks', function () {\n    Agent::fake();\n\n    Agent::registerTool('research', function (string $query, string $depth = 'quick') {\n        return \"Deep research findings on {$query}\";\n    });\n\n    $controller = app(DelegationController::class);\n    $request = new Request(['task' => 'Find information about renewable energy trends in 2025']);\n\n    $response = $controller->delegate($request);\n\n    expect($response)->toHaveKeys(['result', 'tool_calls']);\n    expect($response['tool_calls'])->not->toBeEmpty();\n});\n\ntest('supervisor delegates summarization tasks to summarize worker', function () {\n    Agent::fake();\n\n    Agent::registerTool('summarize', function (string $content, int $max_length = 200) {\n        return \"Condensed: \" . substr($content, 0, $max_length) . '...';\n    });\n\n    $controller = app(DelegationController::class);\n    $request = new Request([\n        'task' => 'Summarize this article about machine learning advancements',\n    ]);\n\n    $response = $controller->delegate($request);\n\n    expect($response['tool_calls'][0]['name'] ?? '')->toBe('summarize');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-handoff-and-routing-logic",
      children: "Testing Handoff and Routing Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Ai\\Agents\\Router\\RouterAgent;\nuse App\\Http\\Controllers\\HandoffController;\nuse Illuminate\\Http\\Request;\n\ntest('router classifies technical support requests', function () {\n    Agent::fake();\n\n    $controller = app(HandoffController::class);\n    $request = new Request([\n        'message' => 'I get a 500 error when I try to upload a file to the API',\n    ]);\n\n    $response = $controller->handle($request);\n\n    expect($response)->toHaveKeys(['response', 'routed_to', 'confidence']);\n    expect($response['routed_to'])->toBe('technical_support');\n});\n\ntest('router classifies billing inquiries', function () {\n    Agent::fake();\n\n    $controller = app(HandoffController::class);\n    $request = new Request([\n        'message' => 'I was charged twice for my subscription this month',\n    ]);\n\n    $response = $controller->handle($request);\n\n    expect($response['routed_to'])->toBe('billing');\n});\n\ntest('handoff includes context from router', function () {\n    Agent::fake();\n\n    $controller = app(HandoffController::class);\n    $request = new Request([\n        'message' => 'Can you add a dark mode feature to the dashboard?',\n    ]);\n\n    $response = $controller->handle($request);\n\n    expect($response['confidence'])->toBeGreaterThan(0.5);\n    expect($response['response'])->toBeString();\n    expect(strlen($response['response']))->toBeGreaterThan(0);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-agent-teams-with-shared-memory",
      children: "Testing Agent Teams with Shared Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Models\\AgentMemory;\n\ntest('agents can write and read shared memory', function () {\n    $teamId = (string) \\Illuminate\\Support\\Str::uuid();\n    $sessionId = (string) \\Illuminate\\Support\\Str::uuid();\n\n    AgentMemory::saveMemory(\n        teamId: $teamId,\n        sessionId: $sessionId,\n        agentName: 'test-research-agent',\n        key: 'topic',\n        value: 'Quantum Computing',\n        namespace: 'context',\n    );\n\n    $stored = AgentMemory::recall($teamId, $sessionId, 'topic', 'context');\n\n    expect($stored)->toBe('Quantum Computing');\n});\n\ntest('agents can recall all memories for a session', function () {\n    $teamId = (string) \\Illuminate\\Support\\Str::uuid();\n    $sessionId = (string) \\Illuminate\\Support\\Str::uuid();\n\n    AgentMemory::saveMemory($teamId, $sessionId, 'agent-a', 'finding_1', 'Result A', 'research');\n    AgentMemory::saveMemory($teamId, $sessionId, 'agent-b', 'finding_2', 'Result B', 'research');\n    AgentMemory::saveMemory($teamId, $sessionId, 'agent-c', 'conclusion', 'Final synthesis', 'research');\n\n    $all = AgentMemory::recallAll($teamId, $sessionId, 'research');\n\n    expect($all)->toHaveKeys(['finding_1', 'finding_2', 'conclusion']);\n    expect($all['finding_1'])->toBe('Result A');\n});\n\ntest('forgetting a memory removes it from cache and database', function () {\n    $teamId = (string) \\Illuminate\\Support\\Str::uuid();\n    $sessionId = (string) \\Illuminate\\Support\\Str::uuid();\n\n    AgentMemory::saveMemory($teamId, $sessionId, 'agent-x', 'temp_data', 'delete me', 'scratch');\n\n    expect(AgentMemory::recall($teamId, $sessionId, 'temp_data', 'scratch'))->toBe('delete me');\n\n    AgentMemory::forget($teamId, $sessionId, 'temp_data', 'scratch');\n\n    expect(AgentMemory::recall($teamId, $sessionId, 'temp_data', 'scratch'))->toBeNull();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-the-orchestrator-chain",
      children: "Testing the Orchestrator Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Jobs\\Orchestrator\\AgentOrchestratorJob;\nuse App\\Models\\Orchestration;\nuse App\\Models\\OrchestrationStep;\nuse Illuminate\\Support\\Facades\\Bus;\n\ntest('orchestrator dispatches chain of agent jobs', function () {\n    Bus::fake();\n\n    $orchestration = Orchestration::create([\n        'goal' => 'Write a product description for a new AI-powered task management app',\n        'parameters' => ['tone' => 'professional'],\n        'status' => 'queued',\n    ]);\n\n    AgentOrchestratorJob::dispatch(\n        orchestrationId: $orchestration->id,\n        goal: $orchestration->goal,\n        parameters: $orchestration->parameters,\n    );\n\n    Bus::assertDispatched(AgentOrchestratorJob::class);\n});\n\ntest('orchestration steps are created in order', function () {\n    $orchestration = Orchestration::create([\n        'goal' => 'Test goal for step tracking',\n        'status' => 'running',\n    ]);\n\n    OrchestrationStep::create([\n        'orchestration_id' => $orchestration->id,\n        'agent_name' => 'analyze-requirements',\n        'status' => 'completed',\n    ]);\n\n    OrchestrationStep::create([\n        'orchestration_id' => $orchestration->id,\n        'agent_name' => 'generate-solution',\n        'status' => 'completed',\n    ]);\n\n    expect($orchestration->steps)->toHaveCount(2);\n    expect($orchestration->steps[0]->agent_name)->toBe('analyze-requirements');\n    expect($orchestration->steps[1]->agent_name)->toBe('generate-solution');\n});\n\ntest('orchestration marks as failed when step throws', function () {\n    $orchestration = Orchestration::create([\n        'goal' => 'This will fail',\n        'status' => 'running',\n    ]);\n\n    $step = OrchestrationStep::create([\n        'orchestration_id' => $orchestration->id,\n        'agent_name' => 'failing-agent',\n        'status' => 'failed',\n        'error' => 'Simulated failure',\n    ]);\n\n    $orchestration->update(['status' => 'failed', 'error' => $step->error]);\n\n    expect($orchestration->fresh()->status)->toBe('failed');\n    expect($orchestration->fresh()->error)->toContain('Simulated failure');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-circuit-breaker",
      children: "Testing Circuit Breaker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Ai\\Resilience\\CircuitBreaker;\n\ntest('circuit breaker starts closed', function () {\n    $breaker = new CircuitBreaker(agentName: 'test-agent');\n\n    expect($breaker->state())->toBe(CircuitBreaker::STATE_CLOSED);\n    expect($breaker->isAvailable())->toBeTrue();\n});\n\ntest('circuit breaker opens after threshold failures', function () {\n    $breaker = new CircuitBreaker(\n        agentName: 'test-agent',\n        failureThreshold: 3,\n        resetTimeoutSeconds: 3600,\n    );\n\n    $breaker->recordFailure();\n    $breaker->recordFailure();\n    $breaker->recordFailure();\n\n    expect($breaker->state())->toBe(CircuitBreaker::STATE_OPEN);\n    expect($breaker->isAvailable())->toBeFalse();\n});\n\ntest('circuit breaker half-opens after reset timeout', function () {\n    $breaker = new CircuitBreaker(\n        agentName: 'test-agent',\n        failureThreshold: 2,\n        resetTimeoutSeconds: 1,\n    );\n\n    $breaker->recordFailure();\n    $breaker->recordFailure();\n\n    expect($breaker->state())->toBe(CircuitBreaker::STATE_OPEN);\n\n    usleep(1_500_000);\n\n    expect($breaker->isAvailable())->toBeTrue();\n    expect($breaker->state())->toBe(CircuitBreaker::STATE_HALF_OPEN);\n});\n\ntest('circuit breaker closes on successful half-open call', function () {\n    $breaker = new CircuitBreaker(\n        agentName: 'test-agent',\n        failureThreshold: 1,\n        resetTimeoutSeconds: 1,\n    );\n\n    $breaker->recordFailure();\n    expect($breaker->state())->toBe(CircuitBreaker::STATE_OPEN);\n\n    usleep(1_500_000);\n\n    expect($breaker->isAvailable())->toBeTrue();\n\n    $breaker->recordSuccess();\n\n    expect($breaker->state())->toBe(CircuitBreaker::STATE_CLOSED);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-conflict-resolution",
      children: "Testing Conflict Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Ai\\Resilience\\ConflictResolver;\n\ntest('conflict resolver returns single output directly', function () {\n    $resolver = new ConflictResolver();\n\n    $result = $resolver->resolve(\n        ['The sky is blue.'],\n        'What color is the sky?'\n    );\n\n    expect($result['resolution'])->toBe('The sky is blue.');\n    expect($result['method'])->toBe('single_result');\n});\n\ntest('conflict resolver deduplicates identical outputs', function () {\n    $resolver = new ConflictResolver();\n\n    $result = $resolver->resolve(\n        ['Output A', 'Output A', 'Output A'],\n        'Test goal'\n    );\n\n    expect($result['method'])->toBe('deduplicated');\n});\n\ntest('conflict resolver picks majority output', function () {\n    $resolver = new ConflictResolver();\n\n    $result = $resolver->resolve(\n        ['Answer is 42', 'Answer is 42', 'Answer is 7'],\n        'What is the meaning of life?'\n    );\n\n    expect($result['resolution'])->toBe('Answer is 42');\n    expect($result['method'])->toBe('majority');\n});\n\ntest('conflict resolver arbitrates when no consensus', function () {\n    Agent::fake();\n\n    $resolver = new ConflictResolver();\n\n    $result = $resolver->resolve(\n        ['Option A: use MySQL', 'Option B: use PostgreSQL', 'Option C: use SQLite'],\n        'Which database should we choose?'\n    );\n\n    expect($result)->toHaveKey('resolution');\n    expect($result['method'])->toBeIn(['arbitrated', 'majority']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-parallel-execution",
      children: "Testing Parallel Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse App\\Jobs\\ParallelAnalysisJob;\nuse App\\Models\\MergedAnalysis;\nuse App\\Models\\ParallelResult;\nuse Illuminate\\Support\\Facades\\Bus;\n\ntest('parallel analysis creates merged result', function () {\n    Bus::fake();\n\n    $analysisId = (string) \\Illuminate\\Support\\Str::uuid();\n\n    ParallelResult::create([\n        'analysis_id' => $analysisId,\n        'agent_type' => 'research',\n        'output' => 'Research findings about AI',\n    ]);\n\n    ParallelResult::create([\n        'analysis_id' => $analysisId,\n        'agent_type' => 'summarize',\n        'output' => 'Summary of AI trends',\n    ]);\n\n    ParallelResult::create([\n        'analysis_id' => $analysisId,\n        'agent_type' => 'write',\n        'output' => 'Blog post about AI',\n    ]);\n\n    $merged = MergedAnalysis::create([\n        'analysis_id' => $analysisId,\n        'research' => 'Research findings about AI',\n        'summary' => 'Summary of AI trends',\n        'opinion' => 'Blog post about AI',\n        'status' => 'completed',\n    ]);\n\n    expect($merged->research)->toContain('Research findings');\n    expect($merged->summary)->toContain('Summary');\n    expect($merged->opinion)->toContain('Blog post');\n    expect($merged->status)->toBe('completed');\n});\n\ntest('parallel analysis dispatches batch of agent jobs', function () {\n    Bus::fake();\n\n    ParallelAnalysisJob::dispatch(\n        topic: 'Renewable energy',\n        analysisId: (string) \\Illuminate\\Support\\Str::uuid(),\n    );\n\n    Bus::assertDispatched(ParallelAnalysisJob::class);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor/Worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized task delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team-based coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handoff complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue management overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor::dispatch()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch task to worker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bus::batch([...])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel agent execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task Delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor/Worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team Coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handoff protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breakers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What pattern does the supervisor follow for task delegation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Pub/sub"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Supervisor/Worker"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Event sourcing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) CQRS"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The supervisor delegates tasks to workers via queues and aggregates results."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Where is shared agent state stored?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Database"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Redis with TTL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) File system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Session"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Redis stores shared agent state with TTL for automatic cleanup."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when a worker agent fails?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The entire system fails"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The job is retried or sent to a dead-letter queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The supervisor retries indefinitely"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The failure is ignored"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Failed jobs are retried and eventually sent to a dead-letter queue for analysis."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are agents tested in isolation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Integration tests only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Unit tests with mock responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) End-to-end tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Manual testing"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Each agent is tested in isolation with unit tests using mock responses from other agents."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table-1",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor/Worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized task delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team-based coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handoff complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue management overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor::dispatch()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch task to worker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bus::batch([...])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel agent execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task Delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor/Worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team Coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handoff protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit breakers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What pattern does the supervisor follow for task delegation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Pub/sub"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Supervisor/Worker"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Event sourcing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) CQRS"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The supervisor delegates tasks to workers via queues and aggregates results."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Where is shared agent state stored?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Database"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Redis with TTL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) File system"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Session"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Redis stores shared agent state with TTL for automatic cleanup."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when a worker agent fails?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The entire system fails"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The job is retried or sent to a dead-letter queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The supervisor retries indefinitely"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The failure is ignored"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Failed jobs are retried and eventually sent to a dead-letter queue for analysis."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are agents tested in isolation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Integration tests only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Unit tests with mock responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) End-to-end tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Manual testing"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Each agent is tested in isolation with unit tests using mock responses from other agents."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The supervisor/worker pattern uses a central SupervisorAgent that classifies tasks and dispatches them to specialized worker agents (ResearchAgent, SummarizerAgent, WriterAgent) via tool-calling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent teams collaborate through structured handoff protocols where a RouterAgent classifies intent and routes to the appropriate specialist, carrying context forward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel agent execution uses fan-out/fan-in with Laravel batches: multiple independent agent jobs run simultaneously and results are merged in a completion callback"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shared agent state is managed through the AgentMemory model with database persistence, Redis caching, and a HasSharedMemory trait that provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remember"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recall"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recallAll"
        }), " methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Queue-backed orchestration chains agent jobs using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Bus::chain()"
        }), " and Laravel Horizon, with priority queue routing and per-agent timeout/retry configuration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent failure modes require circuit breakers (open/closed/half-open states), timeout guards with hard deadlines, conflict resolvers for divergent outputs, and retry policies with exponential backoff"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing multi-agent systems leverages Agent::fake() for mocked agents, database assertions for shared memory, Bus::fake() for job chain verification, and unit tests for resilience components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handoff correctness is verified by testing that the router selects the correct category and that the handoff context is properly passed to the receiving specialist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What distinguishes the supervisor/worker pattern from simple function calling? Explain the role of tool registration in dispatching work to the correct worker agent."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does the handoff pattern differ from the supervisor pattern? Describe a scenario where handoff is more appropriate than a supervisor dispatching work."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the fan-out/fan-in pattern and how does Laravel's batch job system support it? How would you handle the case where some agents succeed and others fail?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the three states of a circuit breaker (closed, open, half-open) and how they prevent cascading failures in multi-agent systems. What happens when a half-open circuit breaker records a single failure?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is shared memory necessary for agent teams? How does the AgentMemory system ensure that one agent's findings are visible to other agents in the same session?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "QualityReviewAgent"
          }), " that works alongside an existing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WriterAgent"
          }), ". The writer produces content, then the quality reviewer checks grammar, tone, and factual accuracy. Use the AgentMemory system so the writer's output is automatically available to the reviewer. Implement the handoff as a job chain."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SentimentAnalysisTeam"
          }), " with three parallel agents — each analyzing the same customer review text using a different model provider (Anthropic, OpenAI, Gemini). Use the parallel execution pattern to run them simultaneously, then use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConflictResolver"
          }), " to synthesize a final sentiment score when the agents disagree."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RetryPolicy"
          }), "-protected agent that calls an unreliable external API through an AI agent. Configure the retry with 3 attempts, 2-second base delay, and 1.5x backoff multiplier. Write a PEST test that verifies the retry logic by making the agent throw on the first two calls and succeed on the third."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design and implement a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Agent Research Team"
      }), " that produces a comprehensive research report from a single topic query. The system must include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PlannerAgent"
        }), " that decomposes the topic into 5 sub-questions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fan-Out Orchestrator"
        }), " that dispatches a parallel ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResearchJob"
        }), " for each sub-question"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SynthesisAgent"
        }), " that reads all 5 parallel results from shared memory and writes a coherent report with an executive summary, findings per section, and a conclusion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ValidationAgent"
        }), " that checks the final report for contradictions, missing sections, and factual consistency, routing back to the SynthesisAgent if issues are found (maximum 2 rework cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TimeoutGuard"
        }), " set to 60 seconds per research agent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CircuitBreaker"
        }), " that opens if any single research agent fails 3 times consecutively"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write the complete implementation with all agent classes, jobs, models, and a controller endpoint that accepts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /research-report?topic=..."
      }), " and returns a report ID for polling. Include a full PEST test suite that mocks the AI calls and verifies the end-to-end flow with at least 6 test cases covering the happy path, partial failure, timeout, and circuit breaker scenarios."]
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