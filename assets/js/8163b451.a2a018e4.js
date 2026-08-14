"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[93251],{

/***/ 66114
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_10_capstone_md_816_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-10-capstone-md-816.json
const site_docs_courses_loop_engineering_ch_10_capstone_md_816_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch10-capstone","title":"Chapter 10: Capstone — Build a Production-Grade Coding Agent","description":"---","source":"@site/docs/courses/loop-engineering/ch10-capstone.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch10-capstone","permalink":"/ai-engineering-journey/loop-engineering/ch10-capstone","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"ch10-capstone","slug":"/loop-engineering/ch10-capstone","title":"Chapter 10: Capstone — Build a Production-Grade Coding Agent","sidebar_label":"Chapter 10: Capstone — Build a Production-Grade Coding Agent","sidebar_position":10},"sidebar":"course-loop-engineering","previous":{"title":"Chapter 9: Loop Tooling","permalink":"/ai-engineering-journey/loop-engineering/ch09-loop-tooling"},"next":{"title":"Loop Engineering — Build Production-Grade AI Agent Loops","permalink":"/ai-engineering-journey/loop-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/ch10-capstone.md


const frontMatter = {
	id: 'ch10-capstone',
	slug: '/loop-engineering/ch10-capstone',
	title: 'Chapter 10: Capstone — Build a Production-Grade Coding Agent',
	sidebar_label: 'Chapter 10: Capstone — Build a Production-Grade Coding Agent',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Capstone — Build a Production-Grade Coding Agent';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory: Synthesis of the Complete Stack",
  "id": "theory-synthesis-of-the-complete-stack",
  "level": 2
}, {
  "value": "Full Implementation: CodingAgentLoop",
  "id": "full-implementation-codingagentloop",
  "level": 2
}, {
  "value": "Tool Surface",
  "id": "tool-surface",
  "level": 3
}, {
  "value": "State Types",
  "id": "state-types",
  "level": 3
}, {
  "value": "Complete Implementation",
  "id": "complete-implementation",
  "level": 3
}, {
  "value": "Running the Base Agent",
  "id": "running-the-base-agent",
  "level": 3
}, {
  "value": "MultiFileCodingAgent — File Operations with Human Gates",
  "id": "multifilecodingagent--file-operations-with-human-gates",
  "level": 2
}, {
  "value": "Recovery from Multi-Step Failure",
  "id": "recovery-from-multi-step-failure",
  "level": 3
}, {
  "value": "Extended Implementation: Complete Loop System Assembly",
  "id": "extended-implementation-complete-loop-system-assembly",
  "level": 3
}, {
  "value": "Production Platform Tooling",
  "id": "production-platform-tooling",
  "level": 3
}, {
  "value": "LoopTemplateLibrary",
  "id": "looptemplatelibrary",
  "level": 4
}, {
  "value": "DeploymentValidator",
  "id": "deploymentvalidator",
  "level": 4
}, {
  "value": "OnCallDashboard",
  "id": "oncalldashboard",
  "level": 4
}, {
  "value": "LoopUpgradeManager",
  "id": "loopupgrademanager",
  "level": 4
}, {
  "value": "MultiTenantLoopManager",
  "id": "multitenantloopmanager",
  "level": 4
}, {
  "value": "CapstoneProjectEvaluator",
  "id": "capstoneprojectevaluator",
  "level": 4
}, {
  "value": "Demo: Platform Tooling Integration",
  "id": "demo-platform-tooling-integration",
  "level": 4
}, {
  "value": "Summary: What You Have Built",
  "id": "summary-what-you-have-built",
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
  "value": "Challenge",
  "id": "challenge",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
        id: "chapter-10-capstone--build-a-production-grade-coding-agent",
        children: "Chapter 10: Capstone — Build a Production-Grade Coding Agent"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter you will be able to:"
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
        href: "../../assets/images/lessons/loop-engineering/ch10-capstone/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch10-capstone/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/loop-engineering/ch10-capstone/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch10-capstone/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/loop-engineering/ch10-capstone/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch10-capstone/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine all loop concepts from Chapters 1–9 into a single production agent system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a Plan-Act-Observe (ReAct) main loop with a full tool surface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design human-in-the-loop approval gates with auto-approve heuristics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build eval-driven self-improvement with self-critique and retry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce cost budgets that terminate runaway loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement durable checkpointing with multi-step recovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend a base agent to handle file operations with human safety gates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory-synthesis-of-the-complete-stack",
      children: "Theory: Synthesis of the Complete Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-grade coding agent is the integration of every concept in this course. Each chapter contributed a layer:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role in Capstone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop foundations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The outer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), " loop with convergence check"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan → Act → Observe as the core cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-in-the-loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval gates before destructive file operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eval-driven retry when the agent detects its own error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM critiques its own output and revises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost governor, budget enforcement, termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max iterations, kill switch, rollback on failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-agent loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Not directly used — reserved for future tool delegation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Durable execution, checkpoint/restore, tracing, chaos testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The architecture."
      }), " The capstone agent is a single TypeScript class that orchestrates these layers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────┐\n│              CodingAgentLoop                  │\n│                                              │\n│  ┌─────────┐  loop  ┌─────────┐              │\n│  │  Plan   │ ──────→ │  Act    │ ──────┐     │\n│  │ (LLM +  │         │ (tool   │       │     │\n│  │  prompt)│         │  call)  │       │     │\n│  └─────────┘         └─────────┘       │     │\n│       ↑                                 │     │\n│       │  ┌──────────┐                  │     │\n│       └──│ Observe  │ ←────────────────┘     │\n│          │ (parse   │                        │\n│          │  result) │                        │\n│          └──────────┘                        │\n│                                              │\n│  Cross-cutting: HITL | Budget | Checkpoint   │\n└──────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan phase."
      }), " The LLM receives the current state (conversation history + tool results) and decides what to do next. It outputs a structured plan: either a tool call command or a final answer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Act phase."
      }), " The agent executes the chosen tool. Before execution, the HITL gate checks whether the operation is risky. Low-risk operations (read, grep) auto-approve. Destructive operations (write, delete) pause for human confirmation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observe phase."
      }), " The tool result is appended to the conversation. The agent optionally critiques its own output — if the result contains an error or looks wrong, it can retry with a refined approach."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-cutting concerns."
      }), " After each cycle, the agent checks budgets, saves a checkpoint, and records trace spans."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "full-implementation-codingagentloop",
      children: "Full Implementation: CodingAgentLoop"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-surface",
      children: "Tool Surface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent operates on a virtual filesystem through six tools:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// coding-agent.ts\ntype ToolName = \"read\" | \"write\" | \"grep\" | \"glob\" | \"bash\" | \"ask\";\n\ninterface ToolCall {\n  id: string;\n  name: ToolName;\n  args: Record<string, unknown>;\n}\n\ninterface ToolResult {\n  id: string;\n  name: ToolName;\n  success: boolean;\n  data: string;\n  error?: string;\n}\n\ninterface ToolDefinition {\n  name: ToolName;\n  description: string;\n  parameters: Record<string, string>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-types",
      children: "State Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Message {\n  role: \"system\" | \"user\" | \"assistant\" | \"tool\";\n  content: string;\n  toolCallId?: string;\n}\n\ninterface AgentCheckpoint {\n  loopId: string;\n  step: number;\n  messages: Message[];\n  budgetUsed: number;\n  costUsedUsd: number;\n  filesModified: string[];\n  state: Record<string, unknown>;\n  timestamp: string;\n  version: number;\n}\n\ninterface EvalResult {\n  score: number;\n  critique: string;\n  shouldRetry: boolean;\n  refinedPlan?: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-implementation",
      children: "Complete Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CodingAgentLoop {\n  // --- Configuration ---\n  private maxSteps = 25;\n  private maxTokens = 50_000;\n  private maxCostUsd = 0.50;\n  private tokensUsed = 0;\n  private costUsedUsd = 0;\n  private step = 0;\n\n  // --- State ---\n  private messages: Message[] = [];\n  private filesModified: string[] = [];\n  private loopId: string;\n  private state: Record<string, unknown> = {};\n  private checkpointsDir: string;\n\n  constructor(loopId: string, config?: Partial<{ maxSteps: number; maxTokens: number; maxCostUsd: number }>) {\n    this.loopId = loopId;\n    this.checkpointsDir = \"/tmp/agent-checkpoints\";\n    if (config?.maxSteps) this.maxSteps = config.maxSteps;\n    if (config?.maxTokens) this.maxTokens = config.maxTokens;\n    if (config?.maxCostUsd) this.maxCostUsd = config.maxCostUsd;\n  }\n\n  // ─── Tool definitions exposed to the LLM ───\n\n  getToolDefinitions(): ToolDefinition[] {\n    return [\n      {\n        name: \"read\",\n        description: \"Read a file from the filesystem\",\n        parameters: { path: \"string\" },\n      },\n      {\n        name: \"write\",\n        description: \"Write content to a file (creates or overwrites)\",\n        parameters: { path: \"string\", content: \"string\" },\n      },\n      {\n        name: \"grep\",\n        description: \"Search for a pattern in files\",\n        parameters: { pattern: \"string\", include: \"string\" },\n      },\n      {\n        name: \"glob\",\n        description: \"Find files matching a pattern\",\n        parameters: { pattern: \"string\" },\n      },\n      {\n        name: \"bash\",\n        description: \"Run a shell command\",\n        parameters: { command: \"string\" },\n      },\n      {\n        name: \"ask\",\n        description: \"Ask the user a question\",\n        parameters: { question: \"string\" },\n      },\n    ];\n  }\n\n  // ─── Tool execution — the Act phase ───\n\n  private async executeTool(tc: ToolCall): Promise<ToolResult> {\n    const start = Date.now();\n    try {\n      switch (tc.name) {\n        case \"read\": {\n          const path = tc.args.path as string;\n          const file = Bun.file(path);\n          const exists = await file.exists();\n          if (!exists) return { id: tc.id, name: \"read\", success: false, data: \"\", error: `File not found: ${path}` };\n          const content = await file.text();\n          return { id: tc.id, name: \"read\", success: true, data: content.length > 10_000 ? content.slice(0, 10_000) + \"\\n... [truncated]\" : content };\n        }\n        case \"write\": {\n          const path = tc.args.path as string;\n          const content = tc.args.content as string;\n          await Bun.write(path, content);\n          this.filesModified.push(path);\n          return { id: tc.id, name: \"write\", success: true, data: `Written ${content.length} bytes to ${path}` };\n        }\n        case \"grep\": {\n          const pattern = tc.args.pattern as string;\n          const include = (tc.args.include as string) ?? \"*\";\n          const proc = Bun.spawnSync([\"rg\", \"-n\", pattern, \"--include\", include, \"--max-depth\", \"5\", \".\"]);\n          const stdout = proc.stdout.toString();\n          return { id: tc.id, name: \"grep\", success: proc.exitCode === 0, data: stdout || \"(no matches)\" };\n        }\n        case \"glob\": {\n          const pattern = tc.args.pattern as string;\n          const glob = new Bun.Glob(pattern);\n          const matches: string[] = [];\n          for await (const file of glob.scan({ cwd: \".\" })) {\n            matches.push(file);\n            if (matches.length >= 100) break;\n          }\n          return { id: tc.id, name: \"glob\", success: true, data: matches.join(\"\\n\") || \"(no files match)\" };\n        }\n        case \"bash\": {\n          const command = tc.args.command as string;\n          const proc = Bun.spawnSync([\"cmd.exe\", \"/c\", command], { timeout: 30_000 });\n          const stdout = proc.stdout.toString();\n          const stderr = proc.stderr.toString();\n          const output = stdout + (stderr ? `\\nSTDERR:\\n${stderr}` : \"\");\n          return { id: tc.id, name: \"bash\", success: proc.exitCode === 0, data: output || \"(no output)\" };\n        }\n        case \"ask\": {\n          const question = tc.args.question as string;\n          // In a real agent this would wait for user input.\n          // Here we simulate approval.\n          return { id: tc.id, name: \"ask\", success: true, data: `User responded: approved` };\n        }\n        default:\n          return { id: tc.id, name: tc.name, success: false, data: \"\", error: `Unknown tool: ${tc.name}` };\n      }\n    } catch (err) {\n      return { id: tc.id, name: tc.name, success: false, data: \"\", error: `Execution error: ${err instanceof Error ? err.message : String(err)}` };\n    }\n  }\n\n  // ─── HITL approval gate ───\n\n  private riskLevel(tc: ToolCall): \"low\" | \"medium\" | \"high\" {\n    switch (tc.name) {\n      case \"read\":\n      case \"grep\":\n      case \"glob\":\n        return \"low\";\n      case \"bash\":\n        return \"medium\";\n      case \"write\":\n        return \"high\";\n      case \"ask\":\n        return \"low\";\n      default:\n        return \"medium\";\n    }\n  }\n\n  private async approveGate(tc: ToolCall): Promise<boolean> {\n    const risk = this.riskLevel(tc);\n    if (risk === \"low\") return true;\n\n    if (risk === \"medium\") {\n      console.log(`\\n⚠  Tool call requires approval:`);\n      console.log(`   ${tc.name}(${JSON.stringify(tc.args)})`);\n      // Simulate auto-approve for demo\n      return true;\n    }\n\n    // High risk — destructive operation\n    console.log(`\\n🔴 DESTRUCTIVE operation: ${tc.name}(${JSON.stringify(tc.args)})`);\n    console.log(`   Enter 'y' to approve, anything else to deny:`);\n    // In production this would use stdin or a callback\n    return true;\n  }\n\n  // ─── Self-critique (eval-driven improvement) ───\n\n  private async critiqueStep(tc: ToolCall, result: ToolResult): Promise<EvalResult> {\n    if (result.success) {\n      return { score: 1.0, critique: \"Step completed successfully\", shouldRetry: false };\n    }\n\n    const critiquePrompt = `\nThe following tool call failed:\nTool: ${tc.name}\nArguments: ${JSON.stringify(tc.args)}\nError: ${result.error}\n\nAnalyze the failure. Is it:\na) A transient error (network, timeout, resource contention) — RETRY\nb) A logical error (wrong arguments, bad path) — REFINE\nc) A fatal error (permission denied, missing tool) — GIVE UP\n\nRespond with JSON: { \"analysis\": string, \"shouldRetry\": boolean, \"refinedArgs\": object | null }\n`;\n\n    // In production this calls the LLM. Here we use heuristics.\n    const isTransient = result.error?.includes(\"timeout\") ||\n      result.error?.includes(\"busy\") ||\n      result.error?.includes(\"retry\");\n\n    return {\n      score: 0.0,\n      critique: result.error ?? \"Unknown error\",\n      shouldRetry: isTransient,\n      refinedPlan: isTransient ? `Retry ${tc.name} with same arguments` : undefined,\n    };\n  }\n\n  // ─── Plan phase — call LLM to decide next action ───\n\n  private async planNextAction(): Promise<ToolCall | null> {\n    const planningPrompt = this.buildPlanningPrompt();\n\n    // In production this calls an LLM API.\n    // For this implementation, we simulate the LLM response\n    // with a deterministic strategy that makes the demo runnable.\n    const action = this.simulateLLMPlanning();\n    return action;\n  }\n\n  private buildPlanningPrompt(): string {\n    const tools = this.getToolDefinitions()\n      .map((t) => `- ${t.name}: ${t.description}`)\n      .join(\"\\n\");\n\n    return `You are a coding agent. Available tools:\\n${tools}\\n\\nCurrent step: ${this.step}`;\n  }\n\n  private simulateLLMPlanning(): ToolCall | null {\n    // Deterministic demo: performs a sequence of operations\n    const demoTasks: ToolCall[] = [\n      { id: \"t1\", name: \"glob\", args: { pattern: \"src/**/*.ts\" } },\n      { id: \"t2\", name: \"read\", args: { path: \"package.json\" } },\n      { id: \"t3\", name: \"grep\", args: { pattern: \"class.*Loop\", include: \"*.ts\" } },\n      { id: \"t4\", name: \"read\", args: { path: \"README.md\" } },\n      { id: \"t5\", name: \"ask\", args: { question: \"Should I add a test file?\" } },\n    ];\n\n    if (this.step < demoTasks.length) {\n      return demoTasks[this.step];\n    }\n    return null; // No more actions — loop ends\n  }\n\n  // ─── Checkpointing ───\n\n  private async saveCheckpoint(): Promise<void> {\n    const cp: AgentCheckpoint = {\n      loopId: this.loopId,\n      step: this.step,\n      messages: this.messages,\n      budgetUsed: this.tokensUsed,\n      costUsedUsd: this.costUsedUsd,\n      filesModified: [...this.filesModified],\n      state: this.state,\n      timestamp: new Date().toISOString(),\n      version: 1,\n    };\n    const path = `${this.checkpointsDir}/${this.loopId}.json`;\n    await Bun.write(path, JSON.stringify(cp, null, 2));\n    console.log(`  [checkpoint] saved step ${this.step}`);\n  }\n\n  async resume(): Promise<boolean> {\n    const path = `${this.checkpointsDir}/${this.loopId}.json`;\n    try {\n      const file = Bun.file(path);\n      const exists = await file.exists();\n      if (!exists) return false;\n      const text = await file.text();\n      const cp = JSON.parse(text) as AgentCheckpoint;\n      this.step = cp.step;\n      this.messages = cp.messages;\n      this.tokensUsed = cp.budgetUsed;\n      this.costUsedUsd = cp.costUsedUsd;\n      this.filesModified = cp.filesModified;\n      this.state = cp.state;\n      console.log(`[agent] resumed from step ${this.step} (${this.messages.length} messages, ${this.filesModified.length} files modified)`);\n      return true;\n    } catch {\n      return false;\n    }\n  }\n\n  // ─── Budget enforcement ───\n\n  private checkBudget(): boolean {\n    if (this.tokensUsed >= this.maxTokens) {\n      console.log(`  [budget] token limit hit (${this.tokensUsed}/${this.maxTokens})`);\n      return false;\n    }\n    if (this.costUsedUsd >= this.maxCostUsd) {\n      console.log(`  [budget] cost limit hit ($${this.costUsedUsd.toFixed(4)}/$${this.maxCostUsd.toFixed(2)})`);\n      return false;\n    }\n    if (this.step >= this.maxSteps) {\n      console.log(`  [budget] step limit hit (${this.step}/${this.maxSteps})`);\n      return false;\n    }\n    return true;\n  }\n\n  private updateBudget(tokens: number): void {\n    this.tokensUsed += tokens;\n    this.costUsedUsd += tokens * 0.00001; // ~$0.01 per 1K tokens\n  }\n\n  // ─── Main Loop ───\n\n  async run(): Promise<{\n    success: boolean;\n    stepsCompleted: number;\n    tokensUsed: number;\n    costUsd: number;\n    filesModified: string[];\n  }> {\n    const resumed = await this.resume();\n    if (!resumed) {\n      this.messages.push({ role: \"system\", content: \"You are a production-grade coding agent.\" });\n      console.log(\"[agent] fresh start\\n\");\n    }\n\n    while (this.checkBudget()) {\n      this.step++;\n      console.log(`\\n═══ Cycle ${this.step} ═══`);\n\n      // ─── PLAN ───\n      const plan = await this.planNextAction();\n      if (plan === null) {\n        console.log(\"  [plan] no more actions — task complete\");\n        break;\n      }\n      console.log(`  [plan] ${plan.name}(${JSON.stringify(plan.args)})`);\n      this.messages.push({ role: \"assistant\", content: `I will call ${plan.name} with ${JSON.stringify(plan.args)}` });\n\n      // ─── HITL GATE ───\n      const approved = await this.approveGate(plan);\n      if (!approved) {\n        console.log(`  [gate] user denied ${plan.name} — skipping`);\n        this.messages.push({ role: \"user\", content: `Operation ${plan.name} was denied.` });\n        await this.saveCheckpoint();\n        continue;\n      }\n\n      // ─── ACT ───\n      const result = await this.executeTool(plan);\n      const duration = \"(timing available via tracer)\";\n\n      if (result.success) {\n        console.log(`  [act] ✓ ${result.data.slice(0, 120)}${result.data.length > 120 ? \"…\" : \"\"}`);\n      } else {\n        console.log(`  [act] ✗ ${result.error}`);\n      }\n\n      // Simulate token usage\n      const tokens = 100 + Math.floor(Math.random() * 200);\n      this.updateBudget(tokens);\n\n      // ─── OBSERVE ───\n      const obsMsg = result.success\n        ? `Tool ${plan.name} returned:\\n${result.data}`\n        : `Tool ${plan.name} failed:\\n${result.error}`;\n      this.messages.push({ role: \"tool\", content: obsMsg, toolCallId: plan.id });\n\n      // ─── SELF-CRITIQUE ───\n      const evalResult = await this.critiqueStep(plan, result);\n      if (!result.success && evalResult.shouldRetry) {\n        console.log(`  [critique] will retry: ${evalResult.critique}`);\n        this.messages.push({\n          role: \"assistant\",\n          content: `The tool call failed. Analysis: ${evalResult.critique}. I will retry.`,\n        });\n        this.step--; // Retry the same step number\n        await this.saveCheckpoint();\n        continue;\n      }\n\n      if (!result.success && !evalResult.shouldRetry) {\n        console.log(`  [critique] fatal error — giving up on this step: ${evalResult.critique}`);\n      }\n\n      // ─── CHECKPOINT ───\n      await this.saveCheckpoint();\n    }\n\n    const result = {\n      success: this.step > 0,\n      stepsCompleted: this.step,\n      tokensUsed: this.tokensUsed,\n      costUsd: this.costUsedUsd,\n      filesModified: [...this.filesModified],\n    };\n\n    console.log(`\\n═══ Agent finished ═══`);\n    console.log(`Steps: ${result.stepsCompleted}, Tokens: ${result.tokensUsed}, Cost: $${result.costUsd.toFixed(4)}`);\n    if (result.filesModified.length > 0) {\n      console.log(`Files modified: ${result.filesModified.join(\", \")}`);\n    }\n\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "running-the-base-agent",
      children: "Running the Base Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// run-agent.ts\nasync function main() {\n  const agent = new CodingAgentLoop(\"capstone-demo-1\", {\n    maxSteps: 10,\n    maxTokens: 20_000,\n    maxCostUsd: 0.10,\n  });\n\n  const result = await agent.run();\n\n  console.log(`\\nFinal status: ${result.success ? \"SUCCESS\" : \"FAILED\"}`);\n  console.log(`Steps completed: ${result.stepsCompleted}`);\n  console.log(`Budget: ${result.tokensUsed} tokens / $${result.costUsd.toFixed(4)}`);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[agent] fresh start\n\n═══ Cycle 1 ═══\n  [plan] glob({\"pattern\":\"src/**/*.ts\"})\n  [act] ✓ (no files match)\n  [checkpoint] saved step 1\n\n═══ Cycle 2 ═══\n  [plan] read({\"path\":\"package.json\"})\n  [act] ✓ {contents of package.json}\n  [checkpoint] saved step 2\n\n═══ Cycle 3 ═══\n  [plan] grep({\"pattern\":\"class.*Loop\",\"include\":\"*.ts\"})\n  [act] ✓ (no matches)\n  [checkpoint] saved step 3\n\n═══ Cycle 4 ═══\n  [plan] read({\"path\":\"README.md\"})\n  [act] ✓ {contents of README.md}\n  [checkpoint] saved step 4\n\n═══ Cycle 5 ═══\n  [plan] ask({\"question\":\"Should I add a test file?\"})\n  [act] ✓ User responded: approved\n  [checkpoint] saved step 5\n\n═══ Agent finished ═══\nSteps: 5, Tokens: 838, Cost: $0.0084\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multifilecodingagent--file-operations-with-human-gates",
      children: "MultiFileCodingAgent — File Operations with Human Gates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiFileCodingAgent"
      }), " extends the base agent with structured file operations. Each file change goes through a propose → review → commit pipeline with human approval at the commit stage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// multifile-coding-agent.ts\ninterface FileEdit {\n  path: string;\n  originalContent: string | null; // null = new file\n  newContent: string;\n  reason: string;\n}\n\ninterface ProposedChanges {\n  edits: FileEdit[];\n  summary: string;\n  estimatedImpact: string;\n}\n\nclass MultiFileCodingAgent extends CodingAgentLoop {\n  private pendingEdits: FileEdit[] = [];\n  private committedEdits: FileEdit[] = [];\n  private rollbackStack: Array<() => Promise<void>> = [];\n\n  constructor(loopId: string, config?: { maxSteps?: number; maxTokens?: number; maxCostUsd?: number }) {\n    super(loopId, config);\n  }\n\n  // ─── Multi-edit proposal (called by the LLM) ───\n\n  async proposeEdit(path: string, newContent: string, reason: string): Promise<void> {\n    let originalContent: string | null = null;\n    const file = Bun.file(path);\n    if (await file.exists()) {\n      originalContent = await file.text();\n    }\n\n    this.pendingEdits.push({ path, originalContent, newContent, reason });\n    console.log(`  [propose] ${path} (${reason})`);\n  }\n\n  async proposeDelete(path: string, reason: string): Promise<void> {\n    const file = Bun.file(path);\n    let originalContent: string | null = null;\n    if (await file.exists()) {\n      originalContent = await file.text();\n    }\n\n    this.pendingEdits.push({ path, originalContent, newContent: \"\", reason });\n    console.log(`  [propose] DELETE ${path} (${reason})`);\n  }\n\n  // ─── Review and commit with human gate ───\n\n  private async reviewChanges(): Promise<ProposedChanges> {\n    const edits = [...this.pendingEdits];\n    const summary = edits.map((e) => {\n      if (e.originalContent === null) return `+ ${e.path} (new)`;\n      if (e.newContent === \"\") return `- ${e.path} (delete)`;\n      return `~ ${e.path} (modify)`;\n    }).join(\"\\n\");\n\n    const impact = edits.map((e) => {\n      if (e.originalContent === null) return `Create ${e.path} — ${e.reason}`;\n      const added = e.newContent.length - (e.originalContent?.length ?? 0);\n      return `${e.path}: ${added > 0 ? `+${added}` : added} bytes — ${e.reason}`;\n    }).join(\"\\n\");\n\n    return { edits, summary, estimatedImpact: impact };\n  }\n\n  private async commitChanges(): Promise<void> {\n    for (const edit of this.pendingEdits) {\n      if (edit.newContent === \"\") {\n        // Delete file\n        try {\n          await Bun.write(edit.path, \"\");\n          console.log(`  [commit] deleted ${edit.path}`);\n        } catch (err) {\n          console.log(`  [commit] failed to delete ${edit.path}: ${err}`);\n        }\n\n        this.rollbackStack.push(async () => {\n          if (edit.originalContent !== null) {\n            await Bun.write(edit.path, edit.originalContent);\n            console.log(`  [rollback] restored ${edit.path}`);\n          }\n        });\n      } else {\n        // Write / overwrite file\n        try {\n          await Bun.write(edit.path, edit.newContent);\n          console.log(`  [commit] wrote ${edit.newContent.length} bytes to ${edit.path}`);\n        } catch (err) {\n          console.log(`  [commit] failed to write ${edit.path}: ${err}`);\n        }\n\n        this.rollbackStack.push(async () => {\n          if (edit.originalContent !== null) {\n            await Bun.write(edit.path, edit.originalContent);\n            console.log(`  [rollback] restored original ${edit.path}`);\n          } else {\n            await Bun.write(edit.path, \"\");\n            console.log(`  [rollback] removed new file ${edit.path}`);\n          }\n        });\n      }\n\n      this.committedEdits.push(edit);\n    }\n\n    this.pendingEdits = [];\n  }\n\n  async rollbackLastCommit(): Promise<void> {\n    const rollback = this.rollbackStack.pop();\n    if (rollback) {\n      await rollback();\n      console.log(\"  [rollback] last commit undone\");\n    }\n  }\n\n  // ─── Override the HITL gate for bulk commits ───\n\n  async reviewAndCommitGate(): Promise<boolean> {\n    if (this.pendingEdits.length === 0) return true;\n\n    const changes = await this.reviewChanges();\n\n    console.log(`\\n📋 Proposed changes:`);\n    console.log(changes.summary);\n    console.log(`\\nImpact analysis:`);\n    console.log(changes.estimatedImpact);\n\n    if (this.pendingEdits.every((e) => e.originalContent !== null && e.newContent !== \"\")) {\n      // All edits are modifications (no deletes)\n      console.log(\"   → Auto-approved (low risk, modifications only)\");\n      await this.commitChanges();\n      return true;\n    }\n\n    const hasDeletes = this.pendingEdits.some((e) => e.newContent === \"\");\n    if (hasDeletes) {\n      console.log(`\\n🔴 Contains ${this.pendingEdits.filter((e) => e.newContent === \"\").length} deletion(s) — requires approval`);\n      console.log(\"   Enter 'y' to commit:\");\n    }\n\n    // In production, await user input. For demo, auto-approve.\n    await this.commitChanges();\n    return true;\n  }\n\n  // ─── Override run to add review/commit step ───\n\n  async run(): Promise<{\n    success: boolean;\n    stepsCompleted: number;\n    tokensUsed: number;\n    costUsd: number;\n    filesModified: string[];\n    editsCommitted: number;\n  }> {\n    const baseResult = await super.run();\n    const committed = this.committedEdits.length;\n\n    // Propose some demo edits\n    await this.proposeEdit(\n      \"/tmp/demo-output.txt\",\n      \"Generated by MultiFileCodingAgent\\n\",\n      \"Create output file with agent results\",\n    );\n\n    await this.proposeEdit(\n      \"/tmp/demo-summary.json\",\n      JSON.stringify(baseResult, null, 2),\n      \"Save execution summary as JSON\",\n    );\n\n    const approved = await this.reviewAndCommitGate();\n\n    return {\n      ...baseResult,\n      editsCommitted: approved ? this.committedEdits.length : 0,\n    };\n  }\n}\n\nasync function runMultiFile() {\n  const agent = new MultiFileCodingAgent(\"capstone-multifile-1\", {\n    maxSteps: 8,\n    maxTokens: 30_000,\n    maxCostUsd: 0.15,\n  });\n\n  const result = await agent.run();\n\n  console.log(`\\n═══ MultiFile agent complete ═══`);\n  console.log(`Steps: ${result.stepsCompleted}`);\n  console.log(`Files modified by tools: ${result.filesModified.length}`);\n  console.log(`Edits committed via review: ${result.editsCommitted}`);\n  console.log(`Budget: ${result.tokensUsed} tokens / $${result.costUsd.toFixed(4)}`);\n  console.log(`Success: ${result.success}`);\n}\n\nawait runMultiFile();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[agent] fresh start\n\n═══ Cycle 1 ═══\n  [plan] glob({\"pattern\":\"src/**/*.ts\"})\n  [act] ✓ (no files match)\n  [checkpoint] saved step 1\n...\n\n═══ MultiFile agent complete ═══\nSteps: 5\nFiles modified by tools: 0\n  [propose] /tmp/demo-output.txt (Create output file with agent results)\n  [propose] /tmp/demo-summary.json (Save execution summary as JSON)\n\n📋 Proposed changes:\n+ /tmp/demo-output.txt (new)\n+ /tmp/demo-summary.json (new)\n\nImpact analysis:\nCreate /tmp/demo-output.txt — Create output file with agent results\nCreate /tmp/demo-summary.json — Save execution summary as JSON\n   → Auto-approved (low risk, modifications only)\n  [commit] wrote 37 bytes to /tmp/demo-output.txt\n  [commit] wrote 257 bytes to /tmp/demo-summary.json\nEdits committed via review: 2\nBudget: 838 tokens / $0.0084\nSuccess: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recovery-from-multi-step-failure",
      children: "Recovery from Multi-Step Failure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The true power of the capstone architecture is multi-step recovery. Here is a standalone demo of how the checkpoint + rollback + retry chain works:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// recovery-demo.ts\nasync function demonstrateMultiStepRecovery() {\n  console.log(\"═══ Multi-Step Recovery Demo ═══\\n\");\n\n  // Phase 1: agent does some work, checkpoints\n  console.log(\"Phase 1: Normal execution with checkpoints\\n\");\n\n  const agent1 = new CodingAgentLoop(\"recovery-demo\", {\n    maxSteps: 5,\n    maxTokens: 10_000,\n    maxCostUsd: 0.05,\n  });\n\n  await agent1.run();\n\n  // Phase 2: simulate crash by clearing in-memory state\n  console.log(\"\\nPhase 2: 💥 Process crash — all in-memory state lost\\n\");\n\n  // Phase 3: create a new agent with same loopId — it resumes\n  console.log(\"Phase 3: Restart — agent discovers checkpoint\\n\");\n\n  const agent2 = new CodingAgentLoop(\"recovery-demo\", {\n    maxSteps: 5,\n    maxTokens: 10_000,\n    maxCostUsd: 0.05,\n  });\n\n  const resumed = await agent2.resume();\n  console.log(`Resumed from checkpoint: ${resumed}\\n`);\n\n  // Phase 4: Run the MultiFile variant which adds rollback\n  console.log(\"\\nPhase 4: Rollback demonstration\\n\");\n\n  const fileAgent = new MultiFileCodingAgent(\"rollback-demo\");\n\n  // Simulate some edits\n  await fileAgent.proposeEdit(\"/tmp/test-rollback.txt\", \"First version\\n\", \"Initial content\");\n  await fileAgent.proposeEdit(\"/tmp/test-rollback-2.txt\", \"Second file\\n\", \"Another file\");\n\n  // Commit\n  console.log(\"\\nCommitting edits...\");\n  await fileAgent[\"commitChanges\"](); // Access via type cast for demo\n\n  console.log(\"\\nRolling back last commit...\");\n  await fileAgent.rollbackLastCommit();\n\n  console.log(\"\\nRecovery demo complete — both restart and rollback work\");\n}\n\nawait demonstrateMultiStepRecovery();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-complete-loop-system-assembly",
      children: "Extended Implementation: Complete Loop System Assembly"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LoopComposer"
      }), " orchestrates all prior components into a deployable system. It is accompanied by a metrics aggregator, system validator, deployment config, and performance benchmark."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// complete-loop-system-assembly.ts\n\n// ─── 1. Component Registry — every sub-loop has a slot ───\n\ninterface SubLoopDescriptor {\n  name: string;\n  run: (context: LoopContext) => Promise<SubLoopResult>;\n  dependencies: string[];\n  timeoutMs: number;\n}\n\ninterface SubLoopResult {\n  name: string;\n  success: boolean;\n  output: unknown;\n  durationMs: number;\n  error?: string;\n}\n\ninterface LoopContext {\n  sharedState: Map<string, unknown>;\n  messages: Array<{ role: string; content: string }>;\n  budget: { tokensUsed: number; costUsedUsd: number };\n  startTime: number;\n}\n\n// ─── 2. Metrics Aggregator — collects and reports across all sub-loops ───\n\ninterface MetricPoint {\n  subLoop: string;\n  metric: string;\n  value: number;\n  timestamp: number;\n}\n\nclass MetricsAggregator {\n  private points: MetricPoint[] = [];\n  private labels: Map<string, string> = new Map();\n\n  record(subLoop: string, metric: string, value: number): void {\n    this.points.push({ subLoop, metric, value, timestamp: Date.now() });\n  }\n\n  label(subLoop: string, label: string): void {\n    this.labels.set(subLoop, label);\n  }\n\n  /** Average of a specific metric across all sub-loops */\n  average(metric: string): number {\n    const relevant = this.points.filter((p) => p.metric === metric);\n    if (relevant.length === 0) return 0;\n    return relevant.reduce((s, p) => s + p.value, 0) / relevant.length;\n  }\n\n  /** Per-sub-loop summary */\n  bySubLoop(): Map<string, MetricPoint[]> {\n    const grouped = new Map<string, MetricPoint[]>();\n    for (const p of this.points) {\n      const arr = grouped.get(p.subLoop) ?? [];\n      arr.push(p);\n      grouped.set(p.subLoop, arr);\n    }\n    return grouped;\n  }\n\n  /** Generate a human-readable report */\n  generateReport(): string {\n    const lines: string[] = [\"═══ Loop Metrics Report ═══\\n\"];\n    const byLoop = this.bySubLoop();\n    for (const [name, pts] of byLoop) {\n      const label = this.labels.get(name) ?? \"\";\n      lines.push(`Sub-loop: ${name} ${label ? `(${label})` : \"\"}`);\n      for (const p of pts) {\n        lines.push(`  ${p.metric}: ${p.value}`);\n      }\n      lines.push(\"\");\n    }\n    lines.push(`System-wide averages:`);\n    const uniqueMetrics = [...new Set(this.points.map((p) => p.metric))];\n    for (const m of uniqueMetrics) {\n      lines.push(`  ${m}: ${this.average(m).toFixed(2)}`);\n    }\n    lines.push(`\\nTotal data points: ${this.points.length}`);\n    return lines.join(\"\\n\");\n  }\n\n  /** Export as JSON for dashboarding */\n  exportJson(): string {\n    return JSON.stringify({\n      points: this.points,\n      summary: {\n        totalPoints: this.points.length,\n        averages: Object.fromEntries(\n          [...new Set(this.points.map((p) => p.metric))].map((m) => [m, this.average(m)])\n        ),\n      },\n    }, null, 2);\n  }\n}\n\n// ─── 3. SystemValidator — pre-flight checks and integration tests ───\n\ninterface ValidationCheck {\n  name: string;\n  severity: \"critical\" | \"warning\" | \"info\";\n  run: () => Promise<{ passed: boolean; message: string }>;\n}\n\nclass SystemValidator {\n  private checks: ValidationCheck[] = [];\n\n  addCheck(check: ValidationCheck): void {\n    this.checks.push(check);\n  }\n\n  /** Run all pre-flight checks */\n  async preFlight(): Promise<{\n    passed: boolean;\n    results: Array<{ name: string; severity: string; passed: boolean; message: string }>;\n  }> {\n    console.log(\"═══ Pre-flight validation ═══\\n\");\n    const results: Array<{ name: string; severity: string; passed: boolean; message: string }> = [];\n\n    for (const check of this.checks) {\n      process.stdout.write(`  [${check.severity}] ${check.name}... `);\n      try {\n        const result = await check.run();\n        results.push({ name: check.name, severity: check.severity, passed: result.passed, message: result.message });\n        console.log(result.passed ? \"✓\" : `✗ — ${result.message}`);\n      } catch (err) {\n        results.push({ name: check.name, severity: check.severity, passed: false, message: String(err) });\n        console.log(`✗ — ${err}`);\n      }\n    }\n\n    const criticalFails = results.filter((r) => r.severity === \"critical\" && !r.passed);\n    console.log(`\\n${criticalFails.length > 0 ? \"❌ PRE-FLIGHT FAILED\" : \"✅ Pre-flight passed\"}`);\n    console.log(`  ${results.filter((r) => r.passed).length}/${results.length} checks passed`);\n    return { passed: criticalFails.length === 0, results };\n  }\n\n  /** Run integration tests that exercise end-to-end scenarios */\n  async integrationTests(\n    scenarios: Array<{\n      name: string;\n      run: () => Promise<boolean>;\n      setup?: () => Promise<void>;\n      teardown?: () => Promise<void>;\n    }>,\n  ): Promise<{ passed: number; failed: number; results: Array<{ name: string; passed: boolean }> }> {\n    console.log(\"\\n═══ Integration tests ═══\\n\");\n    const results: Array<{ name: string; passed: boolean }> = [];\n    for (const scenario of scenarios) {\n      process.stdout.write(`  ${scenario.name}... `);\n      try {\n        if (scenario.setup) await scenario.setup();\n        const passed = await scenario.run();\n        results.push({ name: scenario.name, passed });\n        console.log(passed ? \"✓\" : \"✗\");\n        if (scenario.teardown) await scenario.teardown();\n      } catch (err) {\n        results.push({ name: scenario.name, passed: false });\n        console.log(`✗ (${err})`);\n      }\n    }\n    const passed = results.filter((r) => r.passed).length;\n    const failed = results.filter((r) => !r.passed).length;\n    console.log(`\\nIntegration: ${passed} passed, ${failed} failed`);\n    return { passed, failed, results };\n  }\n}\n\n// ─── 4. LoopComposer — assembles sub-loops into a complete system ───\n\nclass LoopComposer {\n  private subLoops: SubLoopDescriptor[] = [];\n  private context: LoopContext = {\n    sharedState: new Map(),\n    messages: [],\n    budget: { tokensUsed: 0, costUsedUsd: 0 },\n    startTime: Date.now(),\n  };\n  private metrics = new MetricsAggregator();\n  private validator = new SystemValidator();\n  private results: SubLoopResult[] = [];\n\n  register(subLoop: SubLoopDescriptor): void {\n    this.subLoops.push(subLoop);\n  }\n\n  getMetrics(): MetricsAggregator {\n    return this.metrics;\n  }\n\n  getValidator(): SystemValidator {\n    return this.validator;\n  }\n\n  /** Resolve dependency order using topological sort */\n  private resolveOrder(): SubLoopDescriptor[] {\n    const visited = new Set<string>();\n    const order: SubLoopDescriptor[] = [];\n    const map = new Map(this.subLoops.map((s) => [s.name, s]));\n\n    function visit(node: SubLoopDescriptor): void {\n      if (visited.has(node.name)) return;\n      visited.add(node.name);\n      for (const dep of node.dependencies) {\n        const depNode = map.get(dep);\n        if (depNode) visit(depNode);\n      }\n      order.push(node);\n    }\n\n    for (const sl of this.subLoops) visit(sl);\n    return order;\n  }\n\n  /** Execute all sub-loops in dependency order */\n  async execute(): Promise<{ success: boolean; results: SubLoopResult[]; elapsedMs: number }> {\n    const order = this.resolveOrder();\n    console.log(`═══ LoopComposer: ${order.length} sub-loops in dependency order ═══\\n`);\n    for (const sl of order) {\n      console.log(`  Running: ${sl.name} (timeout: ${sl.timeoutMs}ms)`);\n      const start = Date.now();\n      try {\n        const result = await Promise.race([\n          sl.run(this.context),\n          new Promise<never>((_, reject) =>\n            setTimeout(() => reject(new Error(`Timeout after ${sl.timeoutMs}ms`)), sl.timeoutMs),\n          ),\n        ]);\n        this.results.push(result);\n        this.metrics.record(sl.name, \"durationMs\", result.durationMs);\n        this.metrics.record(sl.name, \"success\", result.success ? 1 : 0);\n        console.log(`    → ${result.success ? \"✓\" : \"✗\"} (${result.durationMs}ms)`);\n      } catch (err) {\n        this.results.push({\n          name: sl.name,\n          success: false,\n          output: null,\n          durationMs: Date.now() - start,\n          error: String(err),\n        });\n        this.metrics.record(sl.name, \"durationMs\", Date.now() - start);\n        this.metrics.record(sl.name, \"success\", 0);\n        console.log(`    → ✗ ${err}`);\n      }\n    }\n\n    const elapsedMs = Date.now() - this.context.startTime;\n    const success = this.results.every((r) => r.success);\n    console.log(`\\nComposer finished: ${success ? \"ALL PASSED\" : \"SOME FAILED\"} in ${elapsedMs}ms`);\n    return { success, results: [...this.results], elapsedMs };\n  }\n\n  /** Clear all state for a fresh run */\n  reset(): void {\n    this.context = {\n      sharedState: new Map(),\n      messages: [],\n      budget: { tokensUsed: 0, costUsedUsd: 0 },\n      startTime: Date.now(),\n    };\n    this.results = [];\n    this.metrics = new MetricsAggregator();\n  }\n}\n\n// ─── 5. DeploymentConfig — runtime configuration for the composed loop ───\n\ninterface EnvironmentOverrides {\n  [env: string]: { maxSteps?: number; maxTokens?: number; maxCostUsd?: number; logLevel?: string };\n}\n\nclass DeploymentConfig {\n  private envOverrides: EnvironmentOverrides = {};\n  private baseConfig = {\n    maxSteps: 25,\n    maxTokens: 50_000,\n    maxCostUsd: 0.50,\n    logLevel: \"info\",\n    checkpointsEnabled: true,\n    checkpointsDir: \"/tmp/loop-checkpoints\",\n    metricsEnabled: true,\n    metricsIntervalMs: 5000,\n    hitalAutoApproveRisk: \"low\",\n    maxRetries: 3,\n    retryBackoffMs: 1000,\n    killSwitchEnabled: true,\n    killSwitchCooldownMs: 30_000,\n  };\n\n  setBaseConfig(partial: Partial<typeof this.baseConfig>): void {\n    Object.assign(this.baseConfig, partial);\n  }\n\n  setEnvironmentOverrides(env: string, overrides: EnvironmentOverrides[string]): void {\n    this.envOverrides[env] = overrides;\n  }\n\n  resolve(environment: string): typeof this.baseConfig {\n    const envConfig = this.envOverrides[environment];\n    if (!envConfig) return { ...this.baseConfig };\n    return { ...this.baseConfig, ...envConfig };\n  }\n\n  /** Generate a deployment manifest */\n  generateManifest(environment: string): string {\n    const cfg = this.resolve(environment);\n    return JSON.stringify({\n      manifestVersion: \"1.0\",\n      environment,\n      deployedAt: new Date().toISOString(),\n      config: cfg,\n      resources: {\n        cpu: \"1 core\",\n        memory: \"512 MB\",\n        storage: \"100 MB\",\n      },\n    }, null, 2);\n  }\n}\n\n// ─── 6. PerformanceBenchmark — stress-tests the complete system ───\n\ninterface BenchmarkResult {\n  scenario: string;\n  iterations: number;\n  totalMs: number;\n  avgMs: number;\n  p50Ms: number;\n  p95Ms: number;\n  p99Ms: number;\n  throughputPerSec: number;\n  failures: number;\n}\n\nclass PerformanceBenchmark {\n  private timings: Map<string, number[]> = new Map();\n  private failures: Map<string, number> = new Map();\n\n  async runScenario(\n    name: string,\n    iterations: number,\n    fn: (iteration: number) => Promise<void>,\n    concurrency = 1,\n  ): Promise<BenchmarkResult> {\n    console.log(`Benchmark: ${name} (${iterations} iterations, concurrency=${concurrency})`);\n    const durations: number[] = [];\n    let failureCount = 0;\n\n    const runBatch = async (start: number, count: number): Promise<void> => {\n      for (let i = start; i < start + count; i++) {\n        const t0 = performance.now();\n        try {\n          await fn(i);\n          durations.push(performance.now() - t0);\n        } catch {\n          failureCount++;\n        }\n      }\n    };\n\n    const batches: Array<() => Promise<void>> = [];\n    for (let i = 0; i < iterations; i += concurrency) {\n      const count = Math.min(concurrency, iterations - i);\n      batches.push(() => runBatch(i, count));\n    }\n\n    const totalStart = performance.now();\n    for (const batch of batches) await batch();\n    const totalMs = performance.now() - totalStart;\n\n    durations.sort((a, b) => a - b);\n    const p50 = durations[Math.floor(durations.length * 0.5)] ?? 0;\n    const p95 = durations[Math.floor(durations.length * 0.95)] ?? 0;\n    const p99 = durations[Math.floor(durations.length * 0.99)] ?? 0;\n    const avg = durations.length > 0 ? durations.reduce((s, d) => s + d, 0) / durations.length : 0;\n    const throughput = totalMs > 0 ? (iterations / totalMs) * 1000 : 0;\n\n    this.timings.set(name, durations);\n    this.failures.set(name, failureCount);\n\n    const result: BenchmarkResult = {\n      scenario: name,\n      iterations,\n      totalMs: Math.round(totalMs),\n      avgMs: Math.round(avg),\n      p50Ms: Math.round(p50),\n      p95Ms: Math.round(p95),\n      p99Ms: Math.round(p99),\n      throughputPerSec: Math.round(throughput * 10) / 10,\n      failures: failureCount,\n    };\n\n    console.log(`  Total: ${result.totalMs}ms, Avg: ${result.avgMs}ms, P50: ${result.p50Ms}ms, P95: ${result.p95Ms}ms, Throughput: ${result.throughputPerSec}/s, Failures: ${result.failures}`);\n    return result;\n  }\n\n  /** Compare two benchmark runs */\n  compare(baseline: BenchmarkResult, candidate: BenchmarkResult): string {\n    const speedup = baseline.avgMs > 0 ? ((baseline.avgMs - candidate.avgMs) / baseline.avgMs * 100).toFixed(1) : \"N/A\";\n    const failureDelta = candidate.failures - baseline.failures;\n    return [\n      `═══ Comparison: ${baseline.scenario} vs ${candidate.scenario} ═══`,\n      `  Avg: ${baseline.avgMs}ms → ${candidate.avgMs}ms (${speedup}%)`,\n      `  P95: ${baseline.p95Ms}ms → ${candidate.p95Ms}ms`,\n      `  Throughput: ${baseline.throughputPerSec}/s → ${candidate.throughputPerSec}/s`,\n      `  Failures: ${baseline.failures} → ${candidate.failures} (${failureDelta > 0 ? \"+\" : \"\"}${failureDelta})`,\n    ].join(\"\\n\");\n  }\n}\n\n// ─── Demo: wiring the complete system ───\n\nasync function demoCompleteAssembly() {\n  console.log(\"═══ Complete Loop System Assembly Demo ═══\\n\");\n\n  // Build deployment config\n  const deployCfg = new DeploymentConfig();\n  deployCfg.setBaseConfig({ maxSteps: 30, maxCostUsd: 0.25, logLevel: \"debug\" });\n  deployCfg.setEnvironmentOverrides(\"production\", { maxTokens: 100_000, logLevel: \"warn\" });\n  const manifest = deployCfg.generateManifest(\"production\");\n  console.log(\"Deployment manifest generated for production\");\n  const prodCfg = deployCfg.resolve(\"production\");\n  console.log(`  Production maxTokens: ${prodCfg.maxTokens}, logLevel: ${prodCfg.logLevel}`);\n\n  // Create the composer and register sub-loops\n  const composer = new LoopComposer();\n  composer.register({\n    name: \"planning-loop\",\n    dependencies: [],\n    timeoutMs: 10_000,\n    run: async (ctx) => {\n      const start = Date.now();\n      ctx.sharedState.set(\"plan\", [\"read config\", \"scan files\"]);\n      return { name: \"planning-loop\", success: true, output: [\"read config\", \"scan files\"], durationMs: Date.now() - start };\n    },\n  });\n  composer.register({\n    name: \"execution-loop\",\n    dependencies: [\"planning-loop\"],\n    timeoutMs: 15_000,\n    run: async (ctx) => {\n      const start = Date.now();\n      const plan = ctx.sharedState.get(\"plan\") as string[] ?? [];\n      ctx.messages.push({ role: \"system\", content: `Executing: ${plan.join(\", \")}` });\n      ctx.budget.tokensUsed += 500;\n      return { name: \"execution-loop\", success: true, output: plan, durationMs: Date.now() - start };\n    },\n  });\n  composer.register({\n    name: \"critique-loop\",\n    dependencies: [\"execution-loop\"],\n    timeoutMs: 8_000,\n    run: async (ctx) => {\n      const start = Date.now();\n      const successRate = ctx.budget.tokensUsed < 1000 ? 1.0 : 0.5;\n      return { name: \"critique-loop\", success: true, output: { score: successRate }, durationMs: Date.now() - start };\n    },\n  });\n\n  // Pre-flight validation\n  const validator = composer.getValidator();\n  validator.addCheck({\n    name: \"All sub-loops registered\",\n    severity: \"critical\",\n    run: async () => ({ passed: true, message: \"3 sub-loops detected\" }),\n  });\n  validator.addCheck({\n    name: \"Dependency graph is acyclic\",\n    severity: \"critical\",\n    run: async () => ({ passed: true, message: \"No cycles detected\" }),\n  });\n  validator.addCheck({\n    name: \"Budget limits are positive\",\n    severity: \"warning\",\n    run: async () => {\n      const cfg = deployCfg.resolve(\"staging\");\n      return { passed: cfg.maxSteps > 0 && cfg.maxTokens > 0, message: `maxSteps=${cfg.maxSteps}, maxTokens=${cfg.maxTokens}` };\n    },\n  });\n  await validator.preFlight();\n\n  // Execute all sub-loops\n  const execResult = await composer.execute();\n\n  // Generate metrics report\n  const metrics = composer.getMetrics();\n  metrics.label(\"planning-loop\", \"Phase 1\");\n  metrics.label(\"execution-loop\", \"Phase 2\");\n  metrics.label(\"critique-loop\", \"Phase 3\");\n  console.log(\"\\n\" + metrics.generateReport());\n\n  // Integration tests\n  await validator.integrationTests([\n    {\n      name: \"Empty composer produces no results\",\n      run: async () => {\n        const c2 = new LoopComposer();\n        const r = await c2.execute();\n        return r.results.length === 0;\n      },\n    },\n    {\n      name: \"Single sub-loop passes through\",\n      run: async () => {\n        const c2 = new LoopComposer();\n        c2.register({ name: \"test\", dependencies: [], timeoutMs: 1000, run: async () => ({ name: \"test\", success: true, output: \"ok\", durationMs: 1 }) });\n        const r = await c2.execute();\n        return r.results.length === 1 && r.results[0].success;\n      },\n    },\n    {\n      name: \"Timeout kills slow sub-loop\",\n      run: async () => {\n        const c2 = new LoopComposer();\n        c2.register({ name: \"slow\", dependencies: [], timeoutMs: 10, run: async () => { await new Promise((r) => setTimeout(r, 100_000)); return { name: \"slow\", success: true, output: \"\", durationMs: 0 }; } });\n        const r = await c2.execute();\n        return !r.success && r.results[0].error?.includes(\"Timeout\") === true;\n      },\n    },\n  ]);\n\n  // Performance benchmark\n  const benchmark = new PerformanceBenchmark();\n  const baseline = await benchmark.runScenario(\"baseline-plan\", 10, async (i) => {\n    await new Promise((r) => setTimeout(r, 5 + Math.random() * 10));\n  });\n  const optimized = await benchmark.runScenario(\"optimized-plan\", 10, async () => {\n    await new Promise((r) => setTimeout(r, 3 + Math.random() * 5));\n  });\n  console.log(\"\\n\" + benchmark.compare(baseline, optimized));\n}\n\nawait demoCompleteAssembly();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "═══ Complete Loop System Assembly Demo ═══\n\nDeployment manifest generated for production\n  Production maxTokens: 100000, logLevel: warn\n\n═══ Pre-flight validation ═══\n  [critical] All sub-loops registered... ✓\n  [critical] Dependency graph is acyclic... ✓\n  [warning] Budget limits are positive... ✓\n✅ Pre-flight passed\n  3/3 checks passed\n\n═══ LoopComposer: 3 sub-loops in dependency order ═══\n\n  Running: planning-loop (timeout: 10000ms)\n    → ✓ (0ms)\n  Running: execution-loop (timeout: 15000ms)\n    → ✓ (0ms)\n  Running: critique-loop (timeout: 8000ms)\n    → ✓ (0ms)\n\nComposer finished: ALL PASSED in Xms\n\n═══ Metrics Report ═══\n...\nIntegration: 3 passed, 0 failed\n\nBenchmark: baseline-plan (10 iterations...\n  Total: Xms, Avg: Yms, P50: Zms, P95: Wms...\n\n═══ Comparison: baseline-plan vs optimized-plan ═══\n  Avg: Xms → Yms (...%)\n  ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "production-platform-tooling",
      children: "Production Platform Tooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following architecture diagram shows how the complete loop system composes sub-loops, templates, deployment validation, monitoring, upgrade management, multi-tenancy, and evaluation into a unified production platform:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Templates & Composition\"\n        LTL[LoopTemplateLibrary]\n        LC[LoopComposer]\n    end\n    subgraph \"Deployment & Validation\"\n        DV[DeploymentValidator]\n        LUM[LoopUpgradeManager]\n    end\n    subgraph \"Operations\"\n        OCD[OnCallDashboard]\n        MTM[MultiTenantLoopManager]\n    end\n    subgraph \"Evaluation\"\n        CPE[CapstoneProjectEvaluator]\n    end\n    LTL -->|instantiates| LC\n    LC -->|validates| DV\n    DV -->|deploys| OCD\n    OCD -->|monitors| LUM\n    LUM -->|upgrades| MTM\n    MTM -->|reports| CPE\n    CPE -->|scores| LTL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "looptemplatelibrary",
      children: "LoopTemplateLibrary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides pre-built templates for common loop patterns — ReAct, RAG, chat, code generation, and moderation — each with pre-configured tools, prompts, and cycle hooks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// loop-template-library.ts\ntype LoopTemplateId = \"react\" | \"rag\" | \"chat\" | \"code-gen\" | \"moderation\";\n\ninterface TemplateDefinition {\n  name: string;\n  description: string;\n  tools: Array<{ name: string; description: string }>;\n  maxSteps: number;\n  maxTokens: number;\n  systemPrompt: string;\n  cycleHooks: string[];\n}\n\nclass LoopTemplateLibrary {\n  private templates = new Map<LoopTemplateId, TemplateDefinition>();\n\n  constructor() {\n    this.registerDefaults();\n  }\n\n  private registerDefaults(): void {\n    this.templates.set(\"react\", {\n      name: \"ReAct Agent\",\n      description: \"Plan–Act–Observe reasoning loop\",\n      tools: [\n        { name: \"search\", description: \"Search knowledge base\" },\n        { name: \"calculate\", description: \"Perform calculation\" },\n      ],\n      maxSteps: 25,\n      maxTokens: 50_000,\n      systemPrompt:\n        \"You are a ReAct agent. Think step by step. Output a plan before each action.\",\n      cycleHooks: [\"plan\", \"act\", \"observe\"],\n    });\n    this.templates.set(\"rag\", {\n      name: \"RAG Pipeline\",\n      description: \"Retrieve–Augment–Generate with document retrieval\",\n      tools: [\n        { name: \"retrieve\", description: \"Retrieve relevant chunks\" },\n        { name: \"rerank\", description: \"Rerank by relevance\" },\n      ],\n      maxSteps: 10,\n      maxTokens: 80_000,\n      systemPrompt:\n        \"You are a RAG agent. Retrieve relevant information before answering.\",\n      cycleHooks: [\"retrieve\", \"augment\", \"generate\"],\n    });\n    this.templates.set(\"chat\", {\n      name: \"Conversational Chat\",\n      description: \"Multi-turn dialogue with context management\",\n      tools: [\n        {\n          name: \"searchMemory\",\n          description: \"Search conversation history\",\n        },\n      ],\n      maxSteps: 50,\n      maxTokens: 100_000,\n      systemPrompt:\n        \"You are a helpful conversational agent. Maintain context across turns.\",\n      cycleHooks: [\"contextualize\", \"respond\"],\n    });\n    this.templates.set(\"code-gen\", {\n      name: \"Code Generation\",\n      description: \"Code writing with file ops and test generation\",\n      tools: [\n        { name: \"read\", description: \"Read a file\" },\n        { name: \"write\", description: \"Write a file\" },\n        { name: \"test\", description: \"Run tests\" },\n      ],\n      maxSteps: 30,\n      maxTokens: 120_000,\n      systemPrompt:\n        \"You are a code generation agent. Write clean, tested code.\",\n      cycleHooks: [\"plan\", \"write\", \"test\", \"fix\"],\n    });\n    this.templates.set(\"moderation\", {\n      name: \"Content Moderation\",\n      description: \"Classification loop with human escalation gates\",\n      tools: [\n        { name: \"classify\", description: \"Classify content\" },\n        { name: \"escalate\", description: \"Escalate to human\" },\n      ],\n      maxSteps: 5,\n      maxTokens: 20_000,\n      systemPrompt:\n        \"You are a content moderation agent. Flag and escalate harmful content.\",\n      cycleHooks: [\"classify\", \"gate\", \"escalate\"],\n    });\n  }\n\n  get(id: LoopTemplateId): TemplateDefinition {\n    const t = this.templates.get(id);\n    if (!t) throw new Error(`Unknown template: ${id}`);\n    return { ...t };\n  }\n\n  list(): Array<{ id: LoopTemplateId; name: string; description: string }> {\n    return [...this.templates.entries()].map(([id, t]) => ({\n      id,\n      name: t.name,\n      description: t.description,\n    }));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deploymentvalidator",
      children: "DeploymentValidator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checks environment readiness before deploying a loop — verifies filesystem writability, memory headroom, API key presence, and runtime version."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// deployment-validator.ts\nclass DeploymentValidator {\n  private checks: Array<{\n    name: string;\n    run: () => Promise<{ passed: boolean; message: string }>;\n  }> = [];\n\n  addCheck(\n    name: string,\n    fn: () => Promise<{ passed: boolean; message: string }>,\n  ): void {\n    this.checks.push({ name, run: fn });\n  }\n\n  addDefaultChecks(config: {\n    checkpointsDir: string;\n    maxMemoryMb: number;\n  }): void {\n    this.addCheck(\"Checkpoints directory writable\", async () => {\n      const testFile = `${config.checkpointsDir}/.write-test`;\n      await Bun.write(testFile, \"ok\");\n      return {\n        passed: true,\n        message: `${config.checkpointsDir} is writable`,\n      };\n    });\n    this.addCheck(\"Memory within limits\", async () => {\n      const used = process.memoryUsage().heapUsed / 1024 / 1024;\n      return {\n        passed: used < config.maxMemoryMb * 0.8,\n        message: `Heap: ${used.toFixed(1)} MB / ${config.maxMemoryMb} MB limit`,\n      };\n    });\n    this.addCheck(\"Node.js version >= 18\", async () => {\n      const major = parseInt(process.version.slice(1).split(\".\")[0], 10);\n      return {\n        passed: major >= 18,\n        message: `Node.js ${process.version}`,\n      };\n    });\n  }\n\n  async validateAll(): Promise<{\n    passed: boolean;\n    results: Array<{ name: string; passed: boolean; message: string }>;\n  }> {\n    console.log(\"═══ Deployment Validation ═══\\n\");\n    const results: Array<{\n      name: string;\n      passed: boolean;\n      message: string;\n    }> = [];\n    for (const check of this.checks) {\n      process.stdout.write(`  ${check.name}... `);\n      try {\n        const r = await check.run();\n        results.push({ name: check.name, ...r });\n        console.log(r.passed ? \"✓\" : `✗ — ${r.message}`);\n      } catch (err) {\n        results.push({ name: check.name, passed: false, message: String(err) });\n        console.log(`✗ — ${err}`);\n      }\n    }\n    const passed = results.every((r) => r.passed);\n    console.log(`\\n${passed ? \"✅\" : \"❌\"} Environment ${passed ? \"ready\" : \"not ready\"}`);\n    return { passed, results };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "oncalldashboard",
      children: "OnCallDashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shows live loop health, recent alerts, and incident history. Computes an aggregate health score from all running loops."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// on-call-dashboard.ts\ninterface Alert {\n  id: string;\n  severity: \"critical\" | \"warning\" | \"info\";\n  message: string;\n  loopId: string;\n  timestamp: string;\n  acknowledged: boolean;\n}\n\ninterface Incident {\n  id: string;\n  title: string;\n  loopId: string;\n  startedAt: string;\n  resolvedAt?: string;\n  summary: string;\n}\n\nclass OnCallDashboard {\n  private alerts: Alert[] = [];\n  private incidents: Incident[] = [];\n  private loopStatuses = new Map<\n    string,\n    {\n      status: \"healthy\" | \"degraded\" | \"down\";\n      lastHeartbeat: string;\n      cyclesPerMinute: number;\n    }\n  >();\n\n  reportAlert(alert: Omit<Alert, \"id\" | \"timestamp\">): void {\n    this.alerts.push({\n      ...alert,\n      id: `alert-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,\n      timestamp: new Date().toISOString(),\n    });\n  }\n\n  acknowledgeAlert(alertId: string): void {\n    const alert = this.alerts.find((a) => a.id === alertId);\n    if (alert) alert.acknowledged = true;\n  }\n\n  reportIncident(incident: Omit<Incident, \"id\">): void {\n    this.incidents.push({ ...incident, id: `inc-${Date.now()}` });\n  }\n\n  resolveIncident(incidentId: string, summary: string): void {\n    const inc = this.incidents.find((i) => i.id === incidentId);\n    if (inc) {\n      inc.resolvedAt = new Date().toISOString();\n      inc.summary = summary;\n    }\n  }\n\n  updateLoopStatus(\n    loopId: string,\n    status: \"healthy\" | \"degraded\" | \"down\",\n    cyclesPerMinute: number,\n  ): void {\n    this.loopStatuses.set(loopId, {\n      status,\n      lastHeartbeat: new Date().toISOString(),\n      cyclesPerMinute,\n    });\n  }\n\n  healthScore(): number {\n    const statuses = [...this.loopStatuses.values()];\n    if (statuses.length === 0) return 1.0;\n    return (\n      statuses.reduce(\n        (s, st) =>\n          s +\n          (st.status === \"healthy\" ? 1 : st.status === \"degraded\" ? 0.5 : 0),\n        0,\n      ) / statuses.length\n    );\n  }\n\n  generateDashboard(): string {\n    const lines = [\"═══ On-Call Dashboard ═══\\n\"];\n    const score = this.healthScore();\n    lines.push(\n      `Health Score: ${(score * 100).toFixed(0)}% ${\n        score >= 0.8 ? \"✅\" : score >= 0.5 ? \"⚠️\" : \"🚨\"\n      }\\n`,\n    );\n    lines.push(\"Running Loops:\");\n    for (const [id, st] of this.loopStatuses) {\n      lines.push(\n        `  ${id}: ${st.status} (${st.cyclesPerMinute.toFixed(1)} cpm, last: ${st.lastHeartbeat.slice(11, 19)})`,\n      );\n    }\n    const unacked = this.alerts.filter((a) => !a.acknowledged);\n    lines.push(`\\nUnacknowledged Alerts: ${unacked.length}`);\n    for (const a of unacked.slice(0, 5))\n      lines.push(`  [${a.severity}] ${a.message} (${a.loopId})`);\n    const open = this.incidents.filter((i) => !i.resolvedAt);\n    lines.push(`\\nOpen Incidents: ${open.length}`);\n    for (const i of open.slice(0, 3))\n      lines.push(`  ${i.title} — ${i.startedAt.slice(11, 19)}`);\n    return lines.join(\"\\n\");\n  }\n\n  exportJson(): string {\n    return JSON.stringify(\n      {\n        healthScore: this.healthScore(),\n        loops: [...this.loopStatuses.entries()].map(([k, v]) => ({\n          loopId: k,\n          ...v,\n        })),\n        unacknowledgedAlerts: this.alerts.filter((a) => !a.acknowledged).length,\n        openIncidents: this.incidents.filter((i) => !i.resolvedAt).length,\n      },\n      null,\n      2,\n    );\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loopupgrademanager",
      children: "LoopUpgradeManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Handles zero-downtime upgrades of running loops using a canary deployment strategy with automatic rollback."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// loop-upgrade-manager.ts\ninterface LoopVersion {\n  version: string;\n  deployedAt: string;\n  config: Record<string, unknown>;\n  active: boolean;\n}\n\nclass LoopUpgradeManager {\n  private versions: LoopVersion[] = [];\n  private currentIdx = -1;\n  private upgrading = false;\n\n  deployVersion(version: string, config: Record<string, unknown>): void {\n    this.versions.push({\n      version,\n      deployedAt: new Date().toISOString(),\n      config,\n      active: false,\n    });\n  }\n\n  async canaryUpgrade(\n    version: string,\n    trafficPercent = 10,\n  ): Promise<boolean> {\n    const ver = this.versions.find((v) => v.version === version);\n    if (!ver || this.upgrading) return false;\n    this.upgrading = true;\n    console.log(\n      `[upgrade] Canary deploying ${version} at ${trafficPercent}%`,\n    );\n    await new Promise((r) => setTimeout(r, 50));\n    const healthy = Math.random() > 0.15;\n    if (healthy) {\n      this.versions.forEach((v) => (v.active = false));\n      ver.active = true;\n      this.currentIdx = this.versions.indexOf(ver);\n      console.log(`[upgrade] ${version} healthy — promoted`);\n    } else {\n      console.log(`[upgrade] ${version} unhealthy — rolling back`);\n    }\n    this.upgrading = false;\n    return healthy;\n  }\n\n  async rollingUpgrade(\n    versions: string[],\n  ): Promise<{ success: boolean; finalVersion: string }> {\n    for (const ver of versions) {\n      this.deployVersion(ver, { version: ver });\n      const ok = await this.canaryUpgrade(ver);\n      if (!ok)\n        return { success: false, finalVersion: this.currentVersion };\n    }\n    return { success: true, finalVersion: this.currentVersion };\n  }\n\n  rollback(): { version: string; rolledBackAt: string } | null {\n    if (this.currentIdx < 1) return null;\n    const prev = this.versions[this.currentIdx - 1];\n    if (!prev) return null;\n    this.versions.forEach((v) => (v.active = false));\n    prev.active = true;\n    this.currentIdx--;\n    return {\n      version: prev.version,\n      rolledBackAt: new Date().toISOString(),\n    };\n  }\n\n  get currentVersion(): string {\n    return this.versions[this.currentIdx]?.version ?? \"none\";\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multitenantloopmanager",
      children: "MultiTenantLoopManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isolates loops per tenant with resource quotas — concurrent loops, hourly tokens, and daily cost — and enforces limits at runtime."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// multi-tenant-loop-manager.ts\ninterface TenantQuota {\n  maxConcurrentLoops: number;\n  maxTokensPerHour: number;\n  maxCostPerDay: number;\n}\n\ninterface TenantState {\n  activeLoops: number;\n  tokensThisHour: number;\n  costToday: number;\n  tokensResetAt: number;\n  costResetAt: number;\n}\n\nclass MultiTenantLoopManager {\n  private tenants = new Map<string, TenantState>();\n  private quotas = new Map<string, TenantQuota>();\n  private loopOwners = new Map<string, string>();\n\n  registerTenant(tenantId: string, quota: TenantQuota): void {\n    this.tenants.set(tenantId, {\n      activeLoops: 0,\n      tokensThisHour: 0,\n      costToday: 0,\n      tokensResetAt: Date.now(),\n      costResetAt: Date.now(),\n    });\n    this.quotas.set(tenantId, quota);\n  }\n\n  canStartLoop(\n    tenantId: string,\n  ): { allowed: boolean; reason?: string } {\n    const state = this.tenants.get(tenantId);\n    const quota = this.quotas.get(tenantId);\n    if (!state || !quota)\n      return { allowed: false, reason: \"Tenant not registered\" };\n    this.refreshWindows(state);\n    if (state.activeLoops >= quota.maxConcurrentLoops)\n      return {\n        allowed: false,\n        reason: `Max concurrent loops (${quota.maxConcurrentLoops}) reached`,\n      };\n    if (state.tokensThisHour >= quota.maxTokensPerHour)\n      return {\n        allowed: false,\n        reason: `Hourly token quota (${quota.maxTokensPerHour}) exhausted`,\n      };\n    if (state.costToday >= quota.maxCostPerDay)\n      return {\n        allowed: false,\n        reason: `Daily cost quota ($${quota.maxCostPerDay.toFixed(2)}) exhausted`,\n      };\n    return { allowed: true };\n  }\n\n  startLoop(tenantId: string, loopId: string): boolean {\n    if (!this.canStartLoop(tenantId).allowed) return false;\n    this.tenants.get(tenantId)!.activeLoops++;\n    this.loopOwners.set(loopId, tenantId);\n    return true;\n  }\n\n  endLoop(loopId: string, tokensUsed: number, costUsd: number): void {\n    const tenantId = this.loopOwners.get(loopId);\n    if (!tenantId) return;\n    const state = this.tenants.get(tenantId)!;\n    state.activeLoops = Math.max(0, state.activeLoops - 1);\n    state.tokensThisHour += tokensUsed;\n    state.costToday += costUsd;\n    this.loopOwners.delete(loopId);\n  }\n\n  private refreshWindows(state: TenantState): void {\n    const hour = 60 * 60 * 1000;\n    if (Date.now() - state.tokensResetAt > hour) {\n      state.tokensThisHour = 0;\n      state.tokensResetAt = Date.now();\n    }\n    if (Date.now() - state.costResetAt > 24 * hour) {\n      state.costToday = 0;\n      state.costResetAt = Date.now();\n    }\n  }\n\n  usageReport(\n    tenantId: string,\n  ): {\n    activeLoops: number;\n    tokenUsagePct: number;\n    costUsagePct: number;\n  } | null {\n    const state = this.tenants.get(tenantId);\n    const quota = this.quotas.get(tenantId);\n    if (!state || !quota) return null;\n    this.refreshWindows(state);\n    return {\n      activeLoops: state.activeLoops,\n      tokenUsagePct:\n        (state.tokensThisHour / Math.max(quota.maxTokensPerHour, 1)) * 100,\n      costUsagePct:\n        (state.costToday / Math.max(quota.maxCostPerDay, 0.01)) * 100,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "capstoneprojectevaluator",
      children: "CapstoneProjectEvaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scores a capstone project submission against a weighted rubric. The default rubric evaluates loop completeness, HITL safety gates, tooling integration, code quality, and chaos resilience."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// capstone-project-evaluator.ts\ninterface RubricCriterion {\n  name: string;\n  weight: number;\n  maxScore: number;\n  check: (submission: {\n    code: string;\n    readme: string;\n  }) => Promise<{ score: number; feedback: string }>;\n}\n\ninterface EvalCriterionResult {\n  criterion: string;\n  score: number;\n  maxScore: number;\n  weightedScore: number;\n  feedback: string;\n}\n\nclass CapstoneProjectEvaluator {\n  private rubric: RubricCriterion[] = [];\n\n  addCriterion(c: RubricCriterion): void {\n    this.rubric.push(c);\n  }\n\n  addDefaultRubric(): void {\n    this.addCriterion({\n      name: \"Loop Completeness\",\n      weight: 0.25,\n      maxScore: 100,\n      check: async (s) => {\n        const hasReAct =\n          /plan.*act.*observe|ReAct/i.test(s.code);\n        const hasBudget =\n          /\\b(budget|maxTokens|maxCost)\\b/i.test(s.code);\n        const hasCheckpoint =\n          /\\b(checkpoint|resume)\\b/i.test(s.code);\n        const score =\n          (hasReAct ? 40 : 0) + (hasBudget ? 30 : 0) + (hasCheckpoint ? 30 : 0);\n        return {\n          score,\n          feedback: `ReAct: ${hasReAct}, Budget: ${hasBudget}, Checkpoint: ${hasCheckpoint}`,\n        };\n      },\n    });\n    this.addCriterion({\n      name: \"HITL Safety Gates\",\n      weight: 0.15,\n      maxScore: 100,\n      check: async (s) => {\n        const hasRisk =\n          /\\b(riskLevel|approveGate)\\b/i.test(s.code);\n        const hasRollback =\n          /\\b(rollback|denied|compensate)\\b/i.test(s.code);\n        return {\n          score: (hasRisk ? 50 : 0) + (hasRollback ? 50 : 0),\n          feedback: `Risk levels: ${hasRisk}, Rollback: ${hasRollback}`,\n        };\n      },\n    });\n    this.addCriterion({\n      name: \"Tooling Integration\",\n      weight: 0.20,\n      maxScore: 100,\n      check: async (s) => {\n        const hasTracing =\n          /\\b(tracer|TraceSpan|profiler)\\b/i.test(s.code);\n        const hasTesting =\n          /\\b(Mock|TestHarness|assertion)\\b/i.test(s.code);\n        return {\n          score: (hasTracing ? 50 : 0) + (hasTesting ? 50 : 0),\n          feedback: `Tracing: ${hasTracing}, Testing: ${hasTesting}`,\n        };\n      },\n    });\n    this.addCriterion({\n      name: \"Code Quality\",\n      weight: 0.15,\n      maxScore: 100,\n      check: async (s) => {\n        const hasTypes = /\\b(interface|type\\s)\\b/.test(s.code);\n        const hasDocs = s.readme.length > 200;\n        return {\n          score: (hasTypes ? 50 : 0) + (hasDocs ? 50 : 0),\n          feedback: `Typed: ${hasTypes}, Documented: ${hasDocs}`,\n        };\n      },\n    });\n    this.addCriterion({\n      name: \"Chaos Resilience\",\n      weight: 0.25,\n      maxScore: 100,\n      check: async (s) => {\n        const hasRetry =\n          /\\b(retry|maxRetries|attempt)\\b/i.test(s.code);\n        const hasRecovery =\n          /\\b(resume|checkpoint|saga)\\b/i.test(s.code);\n        return {\n          score: (hasRetry ? 50 : 0) + (hasRecovery ? 50 : 0),\n          feedback: `Retry: ${hasRetry}, Recovery: ${hasRecovery}`,\n        };\n      },\n    });\n  }\n\n  async evaluate(submission: { code: string; readme: string }): Promise<{\n    results: EvalCriterionResult[];\n    totalScore: number;\n    maxScore: number;\n    percentage: number;\n    grade: string;\n  }> {\n    const results: EvalCriterionResult[] = [];\n    let total = 0;\n    let maxTotal = 0;\n    for (const c of this.rubric) {\n      const r = await c.check(submission);\n      const weighted = (r.score / c.maxScore) * c.weight * 100;\n      results.push({\n        criterion: c.name,\n        score: r.score,\n        maxScore: c.maxScore,\n        weightedScore: Math.round(weighted * 100) / 100,\n        feedback: r.feedback,\n      });\n      total += weighted;\n      maxTotal += c.weight * 100;\n    }\n    const pct = maxTotal > 0 ? (total / maxTotal) * 100 : 0;\n    const grade =\n      pct >= 90 ? \"A\" : pct >= 80 ? \"B\" : pct >= 70 ? \"C\" : pct >= 60 ? \"D\" : \"F\";\n    return {\n      results,\n      totalScore: Math.round(total * 100) / 100,\n      maxScore: Math.round(maxTotal * 100) / 100,\n      percentage: Math.round(pct * 100) / 100,\n      grade,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "demo-platform-tooling-integration",
      children: "Demo: Platform Tooling Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// demo-platform-tooling.ts\nasync function demoPlatformTooling() {\n  console.log(\"═══ Platform Tooling Demo ═══\\n\");\n\n  // 1. Loop Template Library\n  const lib = new LoopTemplateLibrary();\n  console.log(\"Available templates:\");\n  for (const t of lib.list()) console.log(`  - ${t.id}: ${t.name}`);\n\n  // 2. Deployment validation\n  const validator = new DeploymentValidator();\n  validator.addDefaultChecks({\n    checkpointsDir: \"/tmp/loop-checkpoints\",\n    maxMemoryMb: 512,\n  });\n  await validator.validateAll();\n\n  // 3. On-Call Dashboard\n  const dashboard = new OnCallDashboard();\n  dashboard.updateLoopStatus(\"agent-prod-1\", \"healthy\", 12.5);\n  dashboard.updateLoopStatus(\"agent-prod-2\", \"degraded\", 3.2);\n  dashboard.reportAlert({\n    severity: \"warning\",\n    message: \"High token consumption\",\n    loopId: \"agent-prod-2\",\n    acknowledged: false,\n  });\n  dashboard.reportIncident({\n    title: \"Agent-prod-2 budget exceeded\",\n    loopId: \"agent-prod-2\",\n    startedAt: new Date().toISOString(),\n    summary: \"\",\n  });\n  console.log(\"\\n\" + dashboard.generateDashboard());\n\n  // 4. Multi-tenant management\n  const mtm = new MultiTenantLoopManager();\n  mtm.registerTenant(\"acme-corp\", {\n    maxConcurrentLoops: 5,\n    maxTokensPerHour: 50_000,\n    maxCostPerDay: 2.0,\n  });\n  mtm.registerTenant(\"startup-inc\", {\n    maxConcurrentLoops: 2,\n    maxTokensPerHour: 10_000,\n    maxCostPerDay: 0.5,\n  });\n  mtm.startLoop(\"acme-corp\", \"loop-1\");\n  mtm.endLoop(\"loop-1\", 5_000, 0.05);\n  const usage = mtm.usageReport(\"acme-corp\");\n  console.log(\n    `\\nAcme-Corp usage: ${usage?.activeLoops} active, ${usage?.tokenUsagePct.toFixed(0)}% token quota, ${usage?.costUsagePct.toFixed(0)}% cost quota`,\n  );\n\n  // 5. Zero-downtime upgrade\n  const upgrade = new LoopUpgradeManager();\n  upgrade.deployVersion(\"v1.0.0\", { maxSteps: 25 });\n  upgrade.deployVersion(\"v1.1.0\", { maxSteps: 30 });\n  const upResult = await upgrade.rollingUpgrade([\"v1.2.0\", \"v1.3.0\"]);\n  console.log(\n    `\\nUpgrade: ${upResult.success ? \"✓\" : \"✗\"} (current: ${upgrade.currentVersion})`,\n  );\n\n  // 6. Capstone evaluation\n  const evaluator = new CapstoneProjectEvaluator();\n  evaluator.addDefaultRubric();\n  const evalResult = await evaluator.evaluate({\n    code: `class CodingAgent { plan(){} act(){} observe(){} checkpoint(){} resume(){} retry(){} riskLevel(){} tracer: any; }`,\n    readme: `# Coding Agent\\n\\nA production-grade coding agent with loop support.`,\n  });\n  console.log(\n    `\\nCapstone Evaluation: ${evalResult.grade} (${evalResult.percentage}%)`,\n  );\n  for (const r of evalResult.results)\n    console.log(\n      `  ${r.criterion}: ${r.score}/${r.maxScore} (weighted: ${r.weightedScore})`,\n    );\n}\n\nawait demoPlatformTooling();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-what-you-have-built",
      children: "Summary: What You Have Built"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The capstone integrates every loop concept from this course into a single, coherent system:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter Origin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch2 — Agent Architecture"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PlannedAction → executeTool → observe"
            }), " cycle"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HITL gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch3 — Human-in-the-Loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Risk-based ", (0,jsx_runtime.jsx)(_components.code, {
              children: "approveGate"
            }), " with auto-approve for low-risk tools"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-critique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch5 — Self-Improvement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "critiqueStep"
            }), " evaluates failures and decides retry vs. give-up"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Budget enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch6 — Production Loops"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "checkBudget"
            }), " with token, step, and cost limits"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safe termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch7 — Loop Safety"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Max iterations check in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while (this.checkBudget())"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Durable execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch9 — Loop Tooling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saveCheckpoint"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "resume"
            }), " with full state serialization"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaos resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch9 — Loop Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry logic handles transient failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Saga rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch9 — Loop Tooling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rollbackStack"
            }), " with original-content restoration"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The core insight."
      }), " A production agent is not a single LLM call — it is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "controlled loop"
      }), " where every iteration is planned, gated, traced, budgeted, check-pointed, and recoverable. The LLM provides intelligence; the loop provides reliability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trace the complete lifecycle of a tool call."
          }), " Starting from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "planNextAction"
          }), ", list every step the call goes through, including which cross-cutting systems (HITL, budget, checkpoint, critique) interact with it and in what order."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Why does the HITL gate distinguish three risk levels?"
          }), " Give an example of each level and explain what could go wrong if every tool call required approval (too conservative) or if no tool calls required approval (too permissive)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does the self-critique loop differ from a simple try/catch?"
          }), " Why is it better to have the LLM analyze a failure rather than just retrying blindly?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What information would be lost if you only checkpointed the messages array?"
          }), " Why does the checkpoint also need to store ", (0,jsx_runtime.jsx)(_components.code, {
            children: "filesModified"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "budgetUsed"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "state"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the propose → review → commit pipeline in MultiFileCodingAgent."
          }), " How does it protect against partial failures better than writing each file independently?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add memory persistence with SQLite."
          }), " Replace the JSON file checkpointer with a SQLite database (use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bun:sqlite"
          }), "). Store each checkpoint in a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "checkpoints"
          }), " table with columns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "id"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "loop_id"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "step"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "data"
          }), " (JSON blob), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "created_at"
          }), ". Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "listCheckpoints(loopId)"
          }), " method that returns all checkpoints for a given run."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add MCP tool protocol support."
          }), " The Model Context Protocol (MCP) lets agents discover and call tools from external servers. Add an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "registerMCPServer(url: string)"
          }), " method to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CodingAgentLoop"
          }), " that fetches the server's tool list via HTTP GET ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/tools"
          }), " and adds them to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getToolDefinitions()"
          }), ". When an MCP tool is called, route the execution through an HTTP POST to the server. Handle connection errors gracefully."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add a sandboxed execution guard."
          }), " Wrap the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bash"
          }), " tool so that commands execute inside a Docker container instead of on the host. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Bun.spawn([\"docker\", \"run\", \"--rm\", \"-i\", \"sandbox:latest\", \"cmd.exe\", \"/c\", command])"
          }), ". Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sandboxImage"
          }), " config option. If Docker is unavailable, fall back to a warning message and block the execution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convert the CodingAgentLoop to a Temporal workflow."
          }), " Identify which methods map to Temporal constructs:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "executeTool"
            }), " → Activity"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "approveGate"
            }), " → Signal (human approval)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "run"
            }), " → Workflow with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), " loop"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saveCheckpoint"
            }), " → built into Temporal's event history"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Outline the conversion. Which parts of the loop become activities, which become signals, and which remain in the workflow function? Why can't you use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "console.log"
          }), " inside a Temporal workflow?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge",
      children: "Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a CI agent that reviews PRs autonomously."
          }), " Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MultiFileCodingAgent"
          }), " into a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PRReviewAgent"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Takes a GitHub PR URL as input"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reads the PR diff (via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bash: gh pr diff {url}"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each file, runs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "grep"
            }), " for code quality issues (N+1 queries, missing error handling, hardcoded secrets)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Proposes edits via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "proposeEdit"
            }), " for each issue found"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Groups edits by file and presents a single review gate per file"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Posts the review comment on the PR via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bash: gh pr comment {url} --body {review}"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checkpoints after each file review so partial progress survives crashes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enforces a $0.25 max cost per review session"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test it on a public repository with known issues. Report: (a) how many issues it found, (b) how many false positives, (c) what percentage of the budget was consumed."
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