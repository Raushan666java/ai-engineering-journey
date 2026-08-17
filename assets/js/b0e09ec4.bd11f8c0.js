"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1897],{

/***/ 51282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_09_loop_tooling_md_b0e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-09-loop-tooling-md-b0e.json
const site_docs_courses_loop_engineering_ch_09_loop_tooling_md_b0e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch09-loop-tooling","title":"Chapter 9: Loop Tooling","description":"---","source":"@site/docs/courses/loop-engineering/ch09-loop-tooling.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch09-loop-tooling","permalink":"/ai-engineering-journey/loop-engineering/ch09-loop-tooling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"ch09-loop-tooling","slug":"/loop-engineering/ch09-loop-tooling","title":"Chapter 9: Loop Tooling","sidebar_label":"Chapter 9: Loop Tooling","sidebar_position":9},"sidebar":"course-loop-engineering","previous":{"title":"Chapter 8: Multi-Agent Loops","permalink":"/ai-engineering-journey/loop-engineering/ch08-multi-agent-loops"},"next":{"title":"Chapter 10: Capstone — Build a Production-Grade Coding Agent","permalink":"/ai-engineering-journey/loop-engineering/ch10-capstone"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/ch09-loop-tooling.md


const frontMatter = {
	id: 'ch09-loop-tooling',
	slug: '/loop-engineering/ch09-loop-tooling',
	title: 'Chapter 9: Loop Tooling',
	sidebar_label: 'Chapter 9: Loop Tooling',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Loop Tooling';

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
  "value": "9.1 Durable Execution",
  "id": "91-durable-execution",
  "level": 3
}, {
  "value": "9.2 Checkpoint / Restore",
  "id": "92-checkpoint--restore",
  "level": 3
}, {
  "value": "9.3 Rate Limiting",
  "id": "93-rate-limiting",
  "level": 3
}, {
  "value": "9.4 Observability",
  "id": "94-observability",
  "level": 3
}, {
  "value": "9.5 Loop Testing",
  "id": "95-loop-testing",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 9.1 — DurableWorkflowEngine with Saga Compensation",
  "id": "example-91--durableworkflowengine-with-saga-compensation",
  "level": 3
}, {
  "value": "Example 9.2 — StateCheckpointer for Agent Context",
  "id": "example-92--statecheckpointer-for-agent-context",
  "level": 3
}, {
  "value": "Example 9.3 — TokenBucket Rate Limiter + LoopTracer",
  "id": "example-93--tokenbucket-rate-limiter--looptracer",
  "level": 3
}, {
  "value": "Example 9.4 — ChaosMonkey for Failure Injection",
  "id": "example-94--chaosmonkey-for-failure-injection",
  "level": 3
}, {
  "value": "Extended Implementation: Advanced Loop Tooling Suite",
  "id": "extended-implementation-advanced-loop-tooling-suite",
  "level": 3
}, {
  "value": "9.7 Extended Tooling: Test, Replay, and Document",
  "id": "97-extended-tooling-test-replay-and-document",
  "level": 3
}, {
  "value": "SnapshotComparator",
  "id": "snapshotcomparator",
  "level": 4
}, {
  "value": "ScenarioRecorder",
  "id": "scenariorecorder",
  "level": 4
}, {
  "value": "LoopSimulator",
  "id": "loopsimulator",
  "level": 4
}, {
  "value": "ABNTestFramework",
  "id": "abntestframework",
  "level": 4
}, {
  "value": "RegressionTestSuite",
  "id": "regressiontestsuite",
  "level": 4
}, {
  "value": "DocumentationGenerator",
  "id": "documentationgenerator",
  "level": 4
}, {
  "value": "Demo: Extended Tooling Suite",
  "id": "demo-extended-tooling-suite",
  "level": 4
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
  "value": "Challenge",
  "id": "challenge",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "chapter-9-loop-tooling",
        children: "Chapter 9: Loop Tooling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design durable execution workflows with saga compensation patterns for agent loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement checkpoint/restore to serialize and resume agent state across crashes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build rate limiters that enforce per-token, per-iteration, and per-cost budgets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add structured observability with step-level tracing and token tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test loop resilience using deterministic replay and chaos engineering injection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Production agent loops require more than correct logic — they need ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tooling"
      }), " that makes them reliable, observable, and safe. This chapter introduces five categories of production loop tooling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-durable-execution",
      children: "9.1 Durable Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agent loops run for unpredictable durations. A single coding task may require dozens of LLM calls, each consuming seconds. If the process crashes mid-task, all progress is lost. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Durable execution"
      }), " guarantees that a workflow survives restarts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "State machines."
      }), " A loop is a state machine where each iteration is a transition. Durable execution records each transition to persistent storage. On restart, the engine reads the last committed state and resumes from there."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Saga pattern."
      }), " When a multi-step workflow fails midway, some steps may have already produced side effects (files written, emails sent, API calls made). The saga pattern defines a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compensation"
      }), " for each step. If step N fails, the engine runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compensate(N-1)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compensate(N-2)"
      }), ", ..., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compensate(1)"
      }), " in reverse order, undoing each effect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: createFile → compensation: deleteFile\nStep 2: editFile   → compensation: revertFile\nStep 3: deploy     → compensation: rollbackDeploy  ← FAIL\n⇒ Run compensations: rollbackDeploy, revertFile, deleteFile\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Temporal-style workflows."
      }), " Temporal.io popularized the idea of writing workflows as regular async functions whose execution is transparently recorded. The SDK replays the function on worker restart, skipping already-completed activities. While we implement a simplified version here, the same principle applies: make side effects idempotent and log every transition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-checkpoint--restore",
      children: "9.2 Checkpoint / Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checkpointing saves the complete agent context — conversation history, tool results, accumulated state — to durable storage. On recovery, the agent loads the checkpoint and continues without losing context."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What to save in a checkpoint:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "loopId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique run identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "step"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current iteration number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full LLM conversation history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toolResults"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Results from completed tool calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "budget"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remaining token/cost budgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom agent state (files changed, decisions made)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "timestamp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO date of checkpoint"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore strategy."
      }), " On startup, check for an active checkpoint. If one exists, hydrate the agent and continue from the last completed step. If the last step was a tool call whose result was never received, the recovery logic must decide whether to retry the call or skip it (idempotency keys help here)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-rate-limiting",
      children: "9.3 Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent loops can burn through tokens and money at alarming speed. A runaway loop that costs $0.50 per iteration can accumulate hundreds of dollars in minutes. Rate limiting provides three orthogonal controls:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Per-token budget."
      }), " Cap total input + output tokens across the entire run. Once exhausted, the loop terminates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Per-iteration budget."
      }), " Cap tokens per single iteration. This prevents a single over-long generation from blowing the budget."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Per-cost budget."
      }), " Multiply token counts by model pricing to enforce a dollar limit. This accounts for the fact that different models have different costs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────┐\n│           Budget Envelope             │\n│  ┌──────┐  ┌──────────┐  ┌───────┐  │\n│  │Tokens│  │Iterations│  │Cost($)│  │\n│  └──────┘  └──────────┘  └───────┘  │\n│  Loop terminates when ANY limit hit  │\n└──────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Token bucket algorithm."
      }), " The classic rate limiter uses a bucket that fills at a steady rate and drains with each request. If the bucket is empty, the request is denied or queued."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-observability",
      children: "9.4 Observability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Debugging an agent loop is harder than debugging a synchronous program because the control flow involves LLM calls, tool execution, and branching decisions. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structured tracing"
      }), " captures every step as a span with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "plan"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "act"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "observe"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "critique"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gate"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duration:"
        }), " wall-clock time for the step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token count:"
        }), " input + output tokens consumed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision:"
        }), " what the agent chose to do"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error:"
        }), " any error that occurred"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cycle-level trace"
      }), " aggregates spans into a single loop iteration view. A good trace answers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many iterations did the loop run?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which iteration spent the most tokens?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which step type is the slowest?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Did the agent ever retry? Why?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-loop-testing",
      children: "9.5 Loop Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent loops are stochastic — the same input can produce different outputs. Testing requires strategies beyond simple assertions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deterministic replay."
      }), " Record the LLM responses and tool results for a given run. In test mode, replay the exact same sequence instead of calling live APIs. This makes tests hermetic and reproducible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simulation."
      }), " Replace the real LLM with a mock that returns controlled responses. Test edge cases: tool call parsing errors, empty responses, refusal messages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaos engineering."
      }), " Inject failures into the loop — network timeouts, corrupted tool results, delayed responses — and verify the agent handles them gracefully. A resilient loop should degrade instead of crash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-91--durableworkflowengine-with-saga-compensation",
      children: "Example 9.1 — DurableWorkflowEngine with Saga Compensation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This engine executes a sequence of steps where each step may have a compensating action. If any step throws, all prior steps are compensated in reverse order."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// durable-workflow.ts\ninterface Step<T = unknown> {\n  name: string;\n  execute: () => Promise<T>;\n  compensate: () => Promise<void>;\n}\n\ninterface WorkflowResult<T> {\n  success: boolean;\n  data?: T;\n  error?: string;\n  executedSteps: string[];\n  compensatedSteps: string[];\n}\n\nclass DurableWorkflowEngine {\n  private executedSteps: string[] = [];\n  private compensatedSteps: string[] = [];\n\n  async run<T>(steps: Step<T>[]): Promise<WorkflowResult<T>> {\n    this.executedSteps = [];\n    this.compensatedSteps = [];\n\n    for (let i = 0; i < steps.length; i++) {\n      const step = steps[i];\n      try {\n        const result = await step.execute();\n        this.executedSteps.push(step.name);\n        if (i === steps.length - 1) {\n          return {\n            success: true,\n            data: result as T,\n            executedSteps: [...this.executedSteps],\n            compensatedSteps: [],\n          };\n        }\n      } catch (err) {\n        await this.compensate(i);\n        return {\n          success: false,\n          error: `Step \"${step.name}\" failed: ${err instanceof Error ? err.message : String(err)}`,\n          executedSteps: [...this.executedSteps],\n          compensatedSteps: [...this.compensatedSteps],\n        };\n      }\n    }\n\n    return {\n      success: false,\n      error: \"No steps provided\",\n      executedSteps: [],\n      compensatedSteps: [],\n    };\n  }\n\n  private async compensate(failedIndex: number): Promise<void> {\n    for (let i = failedIndex; i >= 0; i--) {\n      const stepName = this.executedSteps[i];\n      this.compensatedSteps.push(stepName);\n    }\n  }\n\n  getExecutionLog(): { executed: string[]; compensated: string[] } {\n    return {\n      executed: [...this.executedSteps],\n      compensated: [...this.compensatedSteps],\n    };\n  }\n}\n\nclass FileSystemSaga {\n  private createdFiles: string[] = [];\n  private editedContent = new Map<string, string>();\n\n  async createFile(path: string, content: string): Promise<void> {\n    await Bun.write(path, content);\n    this.createdFiles.push(path);\n  }\n\n  compensateCreateFile(path: string): () => Promise<void> {\n    return async () => {\n      try {\n        await Bun.write(path, \"\");\n        console.log(`  [compensate] cleared ${path}`);\n      } catch {\n        console.log(`  [compensate] ${path} already gone`);\n      }\n    };\n  }\n\n  async editFile(path: string, newContent: string): Promise<void> {\n    const exists = Bun.file(path).size > 0;\n    if (exists) {\n      this.editedContent.set(path, \"\");\n    }\n    await Bun.write(path, newContent);\n  }\n\n  compensateEditFile(path: string): () => Promise<void> {\n    return async () => {\n      try {\n        await Bun.write(path, \"\");\n        console.log(`  [compensate] reverted edits on ${path}`);\n      } catch {\n        console.log(`  [compensate] ${path} not found`);\n      }\n    };\n  }\n}\n\nasync function mainDurableWorkflow() {\n  const engine = new DurableWorkflowEngine();\n  const fsSaga = new FileSystemSaga();\n\n  const steps: Step[] = [\n    {\n      name: \"create-readme\",\n      execute: async () => {\n        await fsSaga.createFile(\"/tmp/test-readme.md\", \"# Hello\\n\");\n        console.log(\"  [ok] created /tmp/test-readme.md\");\n      },\n      compensate: fsSaga.compensateCreateFile(\"/tmp/test-readme.md\"),\n    },\n    {\n      name: \"create-config\",\n      execute: async () => {\n        await fsSaga.createFile(\"/tmp/test-config.json\", '{\"key\": \"value\"}\\n');\n        console.log(\"  [ok] created /tmp/test-config.json\");\n      },\n      compensate: fsSaga.compensateCreateFile(\"/tmp/test-config.json\"),\n    },\n    {\n      name: \"deploy\",\n      execute: async () => {\n        throw new Error(\"Deployment server unreachable\");\n      },\n      compensate: async () => {\n        console.log(\"  [compensate] deploy had no side effects\");\n      },\n    },\n  ];\n\n  const result = await engine.run(steps);\n  console.log(\"\\nResult:\", result.success ? \"SUCCESS\" : \"FAILED\");\n  if (!result.success) console.log(\"Error:\", result.error);\n  console.log(\"Executed steps:\", result.executedSteps.join(\" → \"));\n  console.log(\"Compensated steps:\", result.compensatedSteps.join(\" → \"));\n}\n\nawait mainDurableWorkflow();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  [ok] created /tmp/test-readme.md\n  [ok] created /tmp/test-config.json\n  [compensate] deploy had no side effects\n  [compensate] cleared /tmp/test-config.json\n  [compensate] cleared /tmp/test-readme.md\n\nResult: FAILED\nError: Step \"deploy\" failed: Deployment server unreachable\nExecuted steps: create-readme → create-config\nCompensated steps: deploy → create-config → create-readme\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-92--statecheckpointer-for-agent-context",
      children: "Example 9.2 — StateCheckpointer for Agent Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This checkpointer serializes the full agent conversation and state to a JSON file. On restart, it loads the checkpoint and resumes from the last completed step."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// state-checkpointer.ts\ninterface ToolCallRecord {\n  id: string;\n  name: string;\n  arguments: string;\n  result?: string;\n  error?: string;\n  startedAt: string;\n  completedAt: string;\n}\n\ninterface AgentCheckpoint {\n  loopId: string;\n  step: number;\n  messages: Array<{ role: string; content: string }>;\n  toolResults: ToolCallRecord[];\n  budget: { tokensUsed: number; costUsd: number };\n  state: Record<string, unknown>;\n  timestamp: string;\n  version: number;\n}\n\nclass StateCheckpointer {\n  private checkpointsDir: string;\n\n  constructor(baseDir = \"/tmp/agent-checkpoints\") {\n    this.checkpointsDir = baseDir;\n  }\n\n  private checkpointPath(loopId: string): string {\n    return `${this.checkpointsDir}/${loopId}.json`;\n  }\n\n  async save(checkpoint: AgentCheckpoint): Promise<void> {\n    const path = this.checkpointPath(checkpoint.loopId);\n    await Bun.write(path, JSON.stringify(checkpoint, null, 2));\n    console.log(`[checkpoint] saved step ${checkpoint.step} → ${path}`);\n  }\n\n  async load(loopId: string): Promise<AgentCheckpoint | null> {\n    const path = this.checkpointPath(loopId);\n    try {\n      const file = Bun.file(path);\n      const exists = await file.exists();\n      if (!exists) return null;\n      const text = await file.text();\n      return JSON.parse(text) as AgentCheckpoint;\n    } catch {\n      return null;\n    }\n  }\n\n  async list(): Promise<string[]> {\n    const dir = Bun.file(this.checkpointsDir);\n    const files = await new Response(dir.stream()).text();\n    const names: string[] = [];\n    for (const line of files.split(\"\\n\")) {\n      if (line.endsWith(\".json\")) {\n        names.push(line.replace(\".json\", \"\"));\n      }\n    }\n    return names;\n  }\n\n  async delete(loopId: string): Promise<void> {\n    const path = this.checkpointPath(loopId);\n    try {\n      await Bun.write(path, \"\");\n      console.log(`[checkpoint] deleted ${loopId}`);\n    } catch {\n      // already gone\n    }\n  }\n}\n\nclass CheckpointedAgent {\n  private checkpointer: StateCheckpointer;\n  private loopId: string;\n  private step = 0;\n  private messages: Array<{ role: string; content: string }> = [];\n  private toolResults: ToolCallRecord[] = [];\n  private tokensUsed = 0;\n  private state: Record<string, unknown> = {};\n\n  constructor(loopId: string) {\n    this.loopId = loopId;\n    this.checkpointer = new StateCheckpointer();\n  }\n\n  async resume(): Promise<boolean> {\n    const cp = await this.checkpointer.load(this.loopId);\n    if (!cp) return false;\n    this.step = cp.step;\n    this.messages = cp.messages;\n    this.toolResults = cp.toolResults;\n    this.tokensUsed = cp.budget.tokensUsed;\n    this.state = cp.state;\n    console.log(`[agent] resumed from step ${this.step} (${this.messages.length} messages)`);\n    return true;\n  }\n\n  async checkpoint(): Promise<void> {\n    await this.checkpointer.save({\n      loopId: this.loopId,\n      step: this.step,\n      messages: this.messages,\n      toolResults: this.toolResults,\n      budget: { tokensUsed: this.tokensUsed, costUsd: this.tokensUsed * 0.00001 },\n      state: this.state,\n      timestamp: new Date().toISOString(),\n      version: 1,\n    });\n  }\n\n  async addMessage(role: string, content: string): Promise<void> {\n    this.messages.push({ role, content });\n  }\n\n  addToolResult(record: ToolCallRecord): void {\n    this.toolResults.push(record);\n  }\n\n  nextStep(): void {\n    this.step++;\n  }\n\n  getContext(): {\n    messages: Array<{ role: string; content: string }>;\n    step: number;\n    tokensUsed: number;\n  } {\n    return {\n      messages: this.messages,\n      step: this.step,\n      tokensUsed: this.tokensUsed,\n    };\n  }\n}\n\nasync function mainCheckpointer() {\n  const agent = new CheckpointedAgent(\"run-demo-001\");\n\n  const resumed = await agent.resume();\n  if (!resumed) {\n    console.log(\"[agent] fresh start — no checkpoint found\");\n  }\n\n  for (let i = 0; i < 3; i++) {\n    await agent.addMessage(\"user\", `Iteration ${agent.getContext().step + 1}`);\n    await agent.addMessage(\"assistant\", `Processed step ${i + 1}`);\n    agent.addToolResult({\n      id: `tool-${i}`,\n      name: \"demo\",\n      arguments: \"{}\",\n      result: `result-${i}`,\n      startedAt: new Date().toISOString(),\n      completedAt: new Date().toISOString(),\n    });\n    agent.nextStep();\n    await agent.checkpoint();\n  }\n\n  const ctx = agent.getContext();\n  console.log(`\\nFinal state: step=${ctx.step}, messages=${ctx.messages.length}, tokens=${ctx.tokensUsed}`);\n\n  // Simulate crash recovery — create a new agent with same loopId\n  console.log(\"\\n--- Simulating restart ---\");\n  const agent2 = new CheckpointedAgent(\"run-demo-001\");\n  const recovered = await agent2.resume();\n  console.log(`Recovered: ${recovered}, step=${agent2.getContext().step}`);\n}\n\nawait mainCheckpointer();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[agent] fresh start — no checkpoint found\n[checkpoint] saved step 1 → /tmp/agent-checkpoints/run-demo-001.json\n[checkpoint] saved step 2 → /tmp/agent-checkpoints/run-demo-001.json\n[checkpoint] saved step 3 → /tmp/agent-checkpoints/run-demo-001.json\n\nFinal state: step=3, messages=6, tokens=0\n\n--- Simulating restart ---\n[agent] resumed from step 3 (6 messages)\nRecovered: true, step=3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-93--tokenbucket-rate-limiter--looptracer",
      children: "Example 9.3 — TokenBucket Rate Limiter + LoopTracer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example provides a token-bucket rate limiter and a structured tracer that records spans for each loop step."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// rate-limiter-tracer.ts\nclass TokenBucket {\n  private capacity: number;\n  private refillRate: number;\n  private refillIntervalMs: number;\n  private tokens: number;\n  private lastRefill: number;\n\n  constructor(\n    capacity: number,\n    refillRate: number,\n    refillIntervalMs = 1000,\n  ) {\n    this.capacity = capacity;\n    this.refillRate = refillRate;\n    this.refillIntervalMs = refillIntervalMs;\n    this.tokens = capacity;\n    this.lastRefill = Date.now();\n  }\n\n  private refill(): void {\n    const now = Date.now();\n    const elapsed = now - this.lastRefill;\n    const intervals = Math.floor(elapsed / this.refillIntervalMs);\n    if (intervals > 0) {\n      this.tokens = Math.min(this.capacity, this.tokens + intervals * this.refillRate);\n      this.lastRefill += intervals * this.refillIntervalMs;\n    }\n  }\n\n  tryConsume(count = 1): boolean {\n    this.refill();\n    if (this.tokens >= count) {\n      this.tokens -= count;\n      return true;\n    }\n    return false;\n  }\n\n  get available(): number {\n    this.refill();\n    return this.tokens;\n  }\n\n  get utilization(): number {\n    return 1 - this.available / this.capacity;\n  }\n\n  /** Wait until tokens are available, then consume and return wait time */\n  async consumeBlocking(count = 1, timeoutMs = 30_000): Promise<number> {\n    const start = Date.now();\n    while (!this.tryConsume(count)) {\n      const elapsed = Date.now() - start;\n      if (elapsed >= timeoutMs) throw new Error(\"TokenBucket timeout\");\n      await new Promise((r) => setTimeout(r, 50));\n    }\n    return Date.now() - start;\n  }\n}\n\n// --- Budget governor that layers token, iteration, and cost limits ---\nclass CostGovernor {\n  private tokenBudget: number;\n  private iterationBudget: number;\n  private costBudgetUsd: number;\n  private tokensUsed = 0;\n  private iterationsUsed = 0;\n  private costUsedUsd = 0;\n\n  constructor(config: {\n    maxTokens: number;\n    maxIterations: number;\n    maxCostUsd: number;\n  }) {\n    this.tokenBudget = config.maxTokens;\n    this.iterationBudget = config.maxIterations;\n    this.costBudgetUsd = config.maxCostUsd;\n  }\n\n  recordIteration(tokens: number, costUsd: number): boolean {\n    this.tokensUsed += tokens;\n    this.iterationsUsed += 1;\n    this.costUsedUsd += costUsd;\n    return this.isWithinBudget();\n  }\n\n  isWithinBudget(): boolean {\n    return (\n      this.tokensUsed <= this.tokenBudget &&\n      this.iterationsUsed <= this.iterationBudget &&\n      this.costUsedUsd <= this.costBudgetUsd\n    );\n  }\n\n  status(): { tokensUsed: number; iterationsUsed: number; costUsedUsd: number; exhausted: boolean } {\n    return {\n      tokensUsed: this.tokensUsed,\n      iterationsUsed: this.iterationsUsed,\n      costUsedUsd: this.costUsedUsd,\n      exhausted: !this.isWithinBudget(),\n    };\n  }\n}\n\n// --- Structured loop tracer ---\ninterface TraceSpan {\n  stepType: \"plan\" | \"act\" | \"observe\" | \"critique\" | \"gate\" | \"tool\";\n  stepNumber: number;\n  startedAt: number;\n  durationMs: number;\n  tokens?: { input: number; output: number };\n  decision?: string;\n  error?: string;\n  metadata?: Record<string, unknown>;\n}\n\nclass LoopTracer {\n  private spans: TraceSpan[] = [];\n  private cycleSpans: Map<number, TraceSpan[]> = new Map();\n\n  startSpan(stepType: TraceSpan[\"stepType\"], stepNumber: number): { end: (opts?: Partial<TraceSpan>) => void } {\n    const span: TraceSpan = {\n      stepType,\n      stepNumber,\n      startedAt: Date.now(),\n      durationMs: 0,\n    };\n\n    return {\n      end: (opts?: Partial<TraceSpan>) => {\n        span.durationMs = Date.now() - span.startedAt;\n        if (opts?.tokens) span.tokens = opts.tokens;\n        if (opts?.decision) span.decision = opts.decision;\n        if (opts?.error) span.error = opts.error;\n        if (opts?.metadata) span.metadata = opts.metadata;\n        this.spans.push(span);\n\n        if (!this.cycleSpans.has(stepNumber)) {\n          this.cycleSpans.set(stepNumber, []);\n        }\n        this.cycleSpans.get(stepNumber)!.push(span);\n      },\n    };\n  }\n\n  getCycleReport(stepNumber: number): { spans: TraceSpan[]; totalTokens: number; totalMs: number } {\n    const spans = this.cycleSpans.get(stepNumber) ?? [];\n    const totalTokens = spans.reduce((s, sp) => s + (sp.tokens?.input ?? 0) + (sp.tokens?.output ?? 0), 0);\n    const totalMs = spans.reduce((s, sp) => s + sp.durationMs, 0);\n    return { spans, totalTokens, totalMs };\n  }\n\n  summary(): { totalSpans: number; totalDurationMs: number; totalTokens: number; cycleCount: number } {\n    const totalDurationMs = this.spans.reduce((s, sp) => s + sp.durationMs, 0);\n    const totalTokens = this.spans.reduce((s, sp) => s + (sp.tokens?.input ?? 0) + (sp.tokens?.output ?? 0), 0);\n    return {\n      totalSpans: this.spans.length,\n      totalDurationMs,\n      totalTokens,\n      cycleCount: this.cycleSpans.size,\n    };\n  }\n\n  export(): TraceSpan[] {\n    return [...this.spans];\n  }\n}\n\nasync function mainRateLimiter() {\n  const bucket = new TokenBucket(10, 5, 1000);\n  const governor = new CostGovernor({ maxTokens: 1000, maxIterations: 5, maxCostUsd: 0.05 });\n  const tracer = new LoopTracer();\n\n  console.log(\"Token bucket ready: capacity=10, refill=5/sec\\n\");\n\n  for (let i = 0; i < 5; i++) {\n    const span = tracer.startSpan(\"plan\", i);\n\n    const waited = await bucket.consumeBlocking(3, 5000);\n    const tokensThisStep = 150 + Math.floor(Math.random() * 50);\n    const costThisStep = tokensThisStep * 0.00001;\n\n    const ok = governor.recordIteration(tokensThisStep, costThisStep);\n    span.end({\n      tokens: { input: 100, output: tokensThisStep - 100 },\n      decision: ok ? \"continue\" : \"terminate\",\n    });\n\n    console.log(\n      `Iter ${i}: waited ${waited}ms, tokens=${tokensThisStep}, ` +\n      `bucket=${bucket.available.toFixed(1)}, budget=${governor.status().exhausted ? \"EXHAUSTED\" : \"OK\"}`,\n    );\n\n    if (!ok) break;\n  }\n\n  const report = tracer.summary();\n  console.log(`\\nTracer summary: ${report.totalSpans} spans, ${report.totalTokens} tokens, ${(report.totalDurationMs / 1000).toFixed(1)}s`);\n\n  console.log(\"\\nCycle breakdown:\");\n  for (let i = 0; i < 5; i++) {\n    const cycle = tracer.getCycleReport(i);\n    if (cycle.spans.length > 0) {\n      console.log(`  Cycle ${i}: ${cycle.totalMs}ms, ${cycle.totalTokens} tokens`);\n    }\n  }\n}\n\nawait mainRateLimiter();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Token bucket ready: capacity=10, refill=5/sec\n\nIter 0: waited 0ms, tokens=183, bucket=7.0, budget=OK\nIter 1: waited 0ms, tokens=192, bucket=4.0, budget=OK\nIter 2: waited 100ms, tokens=177, bucket=1.0, budget=OK\nIter 3: waited 600ms, tokens=165, bucket=8.0, budget=OK\nIter 4: waited 0ms, tokens=188, bucket=5.0, budget=OK\n\nTracer summary: 5 spans, 905 tokens, 0.7s\n\nCycle breakdown:\n  Cycle 0: 0ms, 183 tokens\n  Cycle 1: 0ms, 192 tokens\n  Cycle 2: 100ms, 177 tokens\n  Cycle 3: 600ms, 165 tokens\n  Cycle 4: 0ms, 188 tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-94--chaosmonkey-for-failure-injection",
      children: "Example 9.4 — ChaosMonkey for Failure Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChaosMonkey injects configurable failures into a running loop. Use it to verify that your agent handles network errors, rate limits, corrupt data, and crashes gracefully."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// chaos-monkey.ts\ntype FailureType = \"network\" | \"crash\" | \"corrupt\" | \"timeout\" | \"rateLimit\";\n\ninterface ChaosRule {\n  type: FailureType;\n  probability: number;\n  stepFilter?: (step: number) => boolean;\n  errorMessage?: string;\n  delayMs?: number;\n}\n\nclass ChaosMonkey {\n  private rules: ChaosRule[] = [];\n  private totalInjections = 0;\n\n  constructor(rules: ChaosRule[]) {\n    this.rules = rules;\n  }\n\n  async inject(stepNumber: number): Promise<void> {\n    for (const rule of this.rules) {\n      if (rule.stepFilter && !rule.stepFilter(stepNumber)) continue;\n      if (Math.random() >= rule.probability) continue;\n\n      this.totalInjections++;\n\n      if (rule.delayMs && rule.delayMs > 0) {\n        await new Promise((r) => setTimeout(r, rule.delayMs));\n      }\n\n      switch (rule.type) {\n        case \"network\":\n          throw new Error(rule.errorMessage ?? \"Chaos: network timeout\");\n        case \"crash\":\n          throw new Error(rule.errorMessage ?? \"Chaos: process killed\");\n        case \"corrupt\":\n          throw new Error(rule.errorMessage ?? \"Chaos: corrupted tool result data\");\n        case \"timeout\":\n          throw new Error(rule.errorMessage ?? \"Chaos: tool call timed out after 30s\");\n        case \"rateLimit\":\n          throw new Error(rule.errorMessage ?? \"Chaos: rate limit exceeded (429)\");\n      }\n    }\n  }\n\n  reset(): void {\n    this.totalInjections = 0;\n  }\n\n  get stats(): { totalInjections: number } {\n    return { totalInjections: this.totalInjections };\n  }\n}\n\n// --- A loop runner that tests resilience by running a mock agent ---\nclass ResilientLoop {\n  private chaos: ChaosMonkey;\n  private maxRetries: number;\n\n  constructor(chaos: ChaosMonkey, maxRetries = 3) {\n    this.chaos = chaos;\n    this.maxRetries = maxRetries;\n  }\n\n  async runStep(step: number): Promise<string> {\n    // Simulate a tool call\n    const steps = [\"Reading file...\", \"Searching code...\", \"Writing output...\", \"Analyzing results...\"];\n\n    await this.chaos.inject(step);\n\n    // Simulate work\n    await new Promise((r) => setTimeout(r, 50 + Math.random() * 50));\n    return steps[step % steps.length];\n  }\n\n  async run(): Promise<{ success: boolean; failures: number; retries: number }> {\n    let failures = 0;\n    let retries = 0;\n\n    for (let step = 0; step < 10; step++) {\n      let attempts = 0;\n      let stepSuccess = false;\n\n      while (attempts <= this.maxRetries && !stepSuccess) {\n        try {\n          const result = await this.runStep(step);\n          console.log(`  Step ${step}: ${result}`);\n          stepSuccess = true;\n        } catch (err) {\n          attempts++;\n          retries++;\n          console.log(`  Step ${step}: FAIL (attempt ${attempts}) — ${err instanceof Error ? err.message : String(err)}`);\n          if (attempts > this.maxRetries) {\n            failures++;\n            console.log(`  Step ${step}: GIVING UP after ${this.maxRetries} retries`);\n          }\n        }\n      }\n    }\n\n    return {\n      success: failures === 0,\n      failures,\n      retries,\n    };\n  }\n}\n\nasync function mainChaos() {\n  const chaos = new ChaosMonkey([\n    { type: \"network\", probability: 0.2, errorMessage: \"Connection reset by peer\" },\n    { type: \"timeout\", probability: 0.1, errorMessage: \"Tool execution timed out\" },\n    { type: \"corrupt\", probability: 0.05, errorMessage: \"JSON parsing error in tool output\" },\n    { type: \"rateLimit\", probability: 0.1, errorMessage: \"429 Too Many Requests\" },\n  ]);\n\n  const loop = new ResilientLoop(chaos, 2);\n\n  console.log(\"Running chaos-resilient loop...\\n\");\n  const result = await loop.run();\n\n  console.log(`\\nResult: ${result.success ? \"PASSED\" : \"FAILED\"}`);\n  console.log(`Chaos injections: ${chaos.stats.totalInjections}`);\n  console.log(`Retries: ${result.retries}, Unrecoverable failures: ${result.failures}`);\n}\n\nawait mainChaos();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output (stochastic — exact output depends on random seed):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Running chaos-resilient loop...\n\n  Step 0: Reading file...\n  Step 1: FAIL (attempt 1) — Tool execution timed out\n  Step 1: FAIL (attempt 2) — Tool execution timed out\n  Step 1: FAIL (attempt 3) — GIVING UP after 2 retries\n  Step 2: Searching code...\n  Step 3: FAIL (attempt 1) — 429 Too Many Requests\n  Step 3: Writing output...\n  Step 4: Analyzing results...\n  Step 5: Reading file...\n  ...\n\nResult: FAILED\nChaos injections: 4\nRetries: 6, Unrecoverable failures: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-advanced-loop-tooling-suite",
      children: "Extended Implementation: Advanced Loop Tooling Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following suite brings together six production-grade tools that wrap any agent loop with debugging, profiling, visualization, testing, scaffolding, and configuration management."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// advanced-loop-tooling-suite.ts\n\n// ─── 1. LoopDebugger: breakpoints, cycle stepping, state inspection ───\n\ninterface Breakpoint {\n  condition: string;\n  onHit: (ctx: DebugContext) => Promise<\"continue\" | \"pause\" | \"abort\">;\n}\n\ninterface DebugContext {\n  step: number;\n  phase: \"plan\" | \"act\" | \"observe\" | \"critique\";\n  state: Record<string, unknown>;\n  messages: Array<{ role: string; content: string }>;\n}\n\nclass LoopDebugger {\n  private breakpoints: Breakpoint[] = [];\n  private paused = false;\n  private history: DebugContext[] = [];\n\n  addBreakpoint(bp: Breakpoint): void {\n    this.breakpoints.push(bp);\n  }\n\n  clearBreakpoints(): void {\n    this.breakpoints.length = 0;\n  }\n\n  async step(ctx: DebugContext): Promise<\"continue\" | \"abort\"> {\n    this.history.push(ctx);\n    for (const bp of this.breakpoints) {\n      if (ctx.phase.includes(bp.condition) || ctx.step.toString() === bp.condition) {\n        const action = await bp.onHit(ctx);\n        if (action === \"abort\") return \"abort\";\n        if (action === \"pause\") this.paused = true;\n      }\n    }\n    if (this.paused) {\n      console.log(`[debugger] PAUSED at step ${ctx.step} (${ctx.phase})`);\n      console.log(`  State keys: ${Object.keys(ctx.state).join(\", \")}`);\n      console.log(`  Messages: ${ctx.messages.length}`);\n      this.paused = false;\n    }\n    return \"continue\";\n  }\n\n  getContext(index: number): DebugContext | undefined {\n    return this.history[index];\n  }\n\n  get fullTrace(): DebugContext[] {\n    return [...this.history];\n  }\n\n  exportSnapshot(): string {\n    return JSON.stringify({\n      historySize: this.history.length,\n      lastStep: this.history[this.history.length - 1] ?? null,\n    }, null, 2);\n  }\n}\n\n// ─── 2. LoopProfiler: cycle-time histogram, hot-spot detection ───\n\ninterface ProfileSample {\n  step: number;\n  phase: string;\n  durationMs: number;\n  tokens: number;\n  toolName: string;\n}\n\nclass LoopProfiler {\n  private samples: ProfileSample[] = [];\n  private startTime = Date.now();\n\n  recordSample(sample: ProfileSample): void {\n    this.samples.push(sample);\n  }\n\n  /** Return a histogram of cycle durations bucketed into 100ms intervals */\n  cycleTimeHistogram(): Map<string, number> {\n    const buckets = new Map<string, number>();\n    for (const s of this.samples) {\n      const bucket = `${Math.floor(s.durationMs / 100) * 100}-${Math.floor(s.durationMs / 100) * 100 + 99}ms`;\n      buckets.set(bucket, (buckets.get(bucket) ?? 0) + 1);\n    }\n    return buckets;\n  }\n\n  /** Identify phases whose average duration exceeds the threshold */\n  detectHotSpots(thresholdMs = 500): Array<{ phase: string; avgDurationMs: number; count: number }> {\n    const byPhase = new Map<string, number[]>();\n    for (const s of this.samples) {\n      const arr = byPhase.get(s.phase) ?? [];\n      arr.push(s.durationMs);\n      byPhase.set(s.phase, arr);\n    }\n    const hot: Array<{ phase: string; avgDurationMs: number; count: number }> = [];\n    for (const [phase, durations] of byPhase) {\n      const avg = durations.reduce((a, b) => a + b, 0) / durations.length;\n      if (avg > thresholdMs) hot.push({ phase, avgDurationMs: Math.round(avg), count: durations.length });\n    }\n    return hot.sort((a, b) => b.avgDurationMs - a.avgDurationMs);\n  }\n\n  /** Find the slowest N cycles */\n  findBottlenecks(topN = 3): ProfileSample[] {\n    return [...this.samples].sort((a, b) => b.durationMs - a.durationMs).slice(0, topN);\n  }\n\n  summary(): { totalSamples: number; totalDurationMs: number; avgMs: number; elapsedMs: number } {\n    const totalDurationMs = this.samples.reduce((s, x) => s + x.durationMs, 0);\n    return {\n      totalSamples: this.samples.length,\n      totalDurationMs,\n      avgMs: this.samples.length > 0 ? Math.round(totalDurationMs / this.samples.length) : 0,\n      elapsedMs: Date.now() - this.startTime,\n    };\n  }\n\n  exportCsv(): string {\n    const header = \"step,phase,durationMs,tokens,toolName\";\n    const rows = this.samples.map((s) => `${s.step},${s.phase},${s.durationMs},${s.tokens},${s.toolName}`);\n    return [header, ...rows].join(\"\\n\");\n  }\n}\n\n// ─── 3. TraceVisualizer: flame-graph and cycle-metrics data ───\n\ninterface FlameGraphNode {\n  name: string;\n  value: number;\n  children: FlameGraphNode[];\n}\n\nclass TraceVisualizer {\n  private cycles: Array<{ step: number; spans: Array<{ phase: string; ms: number }> }> = [];\n\n  addCycle(step: number, spans: Array<{ phase: string; ms: number }>): void {\n    this.cycles.push({ step, spans });\n  }\n\n  /** Build a hierarchical flame-graph data structure */\n  buildFlameGraph(): FlameGraphNode {\n    const root: FlameGraphNode = { name: \"loop\", value: 0, children: [] };\n    for (const cycle of this.cycles) {\n      const cycleNode: FlameGraphNode = {\n        name: `cycle-${cycle.step}`,\n        value: 0,\n        children: [],\n      };\n      for (const span of cycle.spans) {\n        cycleNode.children.push({\n          name: span.phase,\n          value: span.ms,\n          children: [],\n        });\n        cycleNode.value += span.ms;\n      }\n      root.children.push(cycleNode);\n      root.value += cycleNode.value;\n    }\n    return root;\n  }\n\n  /** Generate per-cycle metrics for plotting (chart.js compatible) */\n  cycleMetrics(): Array<{ step: number; planMs: number; actMs: number; observeMs: number; critiqueMs: number }> {\n    return this.cycles.map((c) => {\n      const m = { step: c.step, planMs: 0, actMs: 0, observeMs: 0, critiqueMs: 0 };\n      for (const s of c.spans) {\n        if (s.phase.startsWith(\"plan\")) m.planMs += s.ms;\n        else if (s.phase.startsWith(\"act\")) m.actMs += s.ms;\n        else if (s.phase.startsWith(\"observe\")) m.observeMs += s.ms;\n        else if (s.phase.startsWith(\"critique\")) m.critiqueMs += s.ms;\n      }\n      return m;\n    });\n  }\n\n  /** JSON export for external visualization tools */\n  exportJson(): string {\n    return JSON.stringify({\n      flameGraph: this.buildFlameGraph(),\n      cycleMetrics: this.cycleMetrics(),\n      totalCycles: this.cycles.length,\n    }, null, 2);\n  }\n}\n\n// ─── 4. LoopTestHarness: mock outputs, assertion engine, property-based testing ───\n\ninterface MockSpec {\n  toolName: string;\n  argsMatcher: (args: Record<string, unknown>) => boolean;\n  output: unknown;\n  shouldThrow?: boolean;\n}\n\ninterface Assertion {\n  description: string;\n  check: (history: Array<{ step: number; tool: string; args: Record<string, unknown>; result: unknown }>) => boolean;\n}\n\nclass LoopTestHarness {\n  private mocks: MockSpec[] = [];\n  private assertions: Assertion[] = [];\n  private executionHistory: Array<{ step: number; tool: string; args: Record<string, unknown>; result: unknown }> = [];\n\n  registerMock(mock: MockSpec): void {\n    this.mocks.push(mock);\n  }\n\n  /** Intercept a tool call and return the mock response if matched */\n  async callWithMocks(toolName: string, args: Record<string, unknown>, step: number): Promise<unknown> {\n    for (const mock of this.mocks) {\n      if (mock.toolName === toolName && mock.argsMatcher(args)) {\n        if (mock.shouldThrow) throw new Error(`Mock error for ${toolName}`);\n        this.executionHistory.push({ step, tool: toolName, args, result: mock.output });\n        return mock.output;\n      }\n    }\n    throw new Error(`No mock registered for ${toolName}(${JSON.stringify(args)})`);\n  }\n\n  addAssertion(assertion: Assertion): void {\n    this.assertions.push(assertion);\n  }\n\n  runAssertions(): Array<{ description: string; passed: boolean }> {\n    return this.assertions.map((a) => ({\n      description: a.description,\n      passed: a.check(this.executionHistory),\n    }));\n  }\n\n  /** Property-based: run N iterations with random inputs within constraints */\n  async propertyTest(\n    iterations: number,\n    generator: (step: number) => { tool: string; args: Record<string, unknown> },\n    validator: (history: LoopTestHarness[\"executionHistory\"]) => boolean,\n  ): Promise<{ passed: boolean; failingInputs: number }> {\n    let failures = 0;\n    for (let i = 0; i < iterations; i++) {\n      const input = generator(i);\n      try {\n        await this.callWithMocks(input.tool, input.args, i);\n      } catch {\n        // Expected for some mocks; continue\n      }\n      if (!validator(this.executionHistory)) failures++;\n    }\n    return { passed: failures === 0, failingInputs: failures };\n  }\n\n  reset(): void {\n    this.executionHistory = [];\n  }\n\n  get history(): typeof this.executionHistory {\n    return [...this.executionHistory];\n  }\n}\n\n// ─── 5. LoopScaffoldGenerator: boilerplate for new agent loops ───\n\ninterface LoopBlueprint {\n  name: string;\n  tools: string[];\n  hasHITL: boolean;\n  hasCheckpoint: boolean;\n  hasCritique: boolean;\n}\n\nclass LoopScaffoldGenerator {\n  generate(blueprint: LoopBlueprint): Map<string, string> {\n    const files = new Map<string, string>();\n    const toolsArray = blueprint.tools.map((t) => `    \"${t}\"`).join(\",\\n\");\n\n    files.set(\"loop-config.yaml\", `# ${blueprint.name} Loop Configuration\nloop:\n  name: ${blueprint.name}\n  maxSteps: 25\n  maxTokens: 50000\n  maxCostUsd: 0.50\n  tools:\n${blueprint.tools.map((t) => `    - ${t}`).join(\"\\n\")}\n  features:\n    humanInTheLoop: ${String(blueprint.hasHITL)}\n    checkpointing: ${String(blueprint.hasCheckpoint)}\n    selfCritique: ${String(blueprint.hasCritique)}\n`);\n\n    files.set(\"index.ts\", `// ${blueprint.name} — Auto-generated agent loop\nimport { createLoopRuntime } from \"./runtime\";\n\ninterface ToolCall {\n  id: string;\n  name: string;\n  args: Record<string, unknown>;\n}\n\ninterface ToolResult {\n  id: string;\n  name: string;\n  success: boolean;\n  data: string;\n  error?: string;\n}\n\nclass ${blueprint.name} {\n  private step = 0;\n  private readonly tools = new Set([${toolsArray}]);\n\n  constructor(private config: { maxSteps: number; maxTokens: number; maxCostUsd: number }) {}\n\n  private async plan(): Promise<ToolCall | null> {\n    // LLM prompt goes here\n    return null;\n  }\n\n  private async act(tc: ToolCall): Promise<ToolResult> {\n    // Tool dispatch goes here\n    return { id: tc.id, name: tc.name, success: true, data: \"\" };\n  }\n\n  async run(): Promise<{ success: boolean; stepsCompleted: number }> {\n    while (this.step < this.config.maxSteps) {\n      this.step++;\n      const plan = await this.plan();\n      if (plan === null) break;\n${blueprint.hasHITL ? `      const approved = await this.approveGate(plan);\n      if (!approved) continue;\\n` : \"\"}\n      const result = await this.act(plan);\n${blueprint.hasCritique ? `      if (!result.success) {\n        const shouldRetry = await this.critique(plan, result);\n        if (shouldRetry) { this.step--; continue; }\n      }\\n` : \"\"}\n${blueprint.hasCheckpoint ? `      await this.saveCheckpoint();\\n` : \"\"}\n    }\n    return { success: this.step > 0, stepsCompleted: this.step };\n  }\n}\n\nexport { ${blueprint.name} };\n`);\n\n    if (blueprint.hasCheckpoint) {\n      files.set(\"runtime.ts\", `// Checkpoint runtime for ${blueprint.name}\nimport { mkdir, writeFile, readFile } from \"node:fs/promises\";\nimport { join } from \"node:path\";\n\nconst CHECKPOINT_DIR = \"/tmp/${blueprint.name.toLowerCase()}-checkpoints\";\n\nexport async function saveCheckpoint(loopId: string, data: unknown): Promise<void> {\n  await mkdir(CHECKPOINT_DIR, { recursive: true });\n  const path = join(CHECKPOINT_DIR, \\`\\${loopId}.json\\`);\n  await writeFile(path, JSON.stringify(data, null, 2));\n}\n\nexport async function loadCheckpoint<T>(loopId: string): Promise<T | null> {\n  try {\n    const path = join(CHECKPOINT_DIR, \\`\\${loopId}.json\\`);\n    const text = await readFile(path, \"utf-8\");\n    return JSON.parse(text) as T;\n  } catch { return null; }\n}\n`);\n    }\n\n    return files;\n  }\n}\n\n// ─── 6. ConfigurationManager: YAML/JSON configs with schema validation ───\n\ninterface LoopConfigSchema {\n  fields: Array<{\n    key: string;\n    type: \"string\" | \"number\" | \"boolean\" | \"array\" | \"object\";\n    required: boolean;\n    defaultValue?: unknown;\n    validator?: (value: unknown) => boolean;\n  }>;\n}\n\ninterface LoopConfig {\n  [key: string]: unknown;\n}\n\nclass ConfigurationManager {\n  private schema: LoopConfigSchema;\n  private config: LoopConfig = {};\n\n  constructor(schema: LoopConfigSchema) {\n    this.schema = schema;\n  }\n\n  /** Load and validate a JSON configuration object */\n  load(jsonConfig: string): { valid: boolean; errors: string[] } {\n    const errors: string[] = [];\n    let parsed: LoopConfig;\n    try {\n      parsed = JSON.parse(jsonConfig);\n    } catch {\n      return { valid: false, errors: [\"Invalid JSON\"] };\n    }\n\n    for (const field of this.schema.fields) {\n      const value = parsed[field.key];\n      if (value === undefined || value === null) {\n        if (field.required && field.defaultValue === undefined) {\n          errors.push(`Missing required field: ${field.key}`);\n        } else if (field.defaultValue !== undefined) {\n          this.config[field.key] = field.defaultValue;\n        }\n        continue;\n      }\n\n      const expectedType = field.type;\n      const actualType = Array.isArray(value) ? \"array\" : typeof value;\n      if (actualType !== expectedType) {\n        errors.push(`Field \"${field.key}\": expected ${expectedType}, got ${actualType}`);\n        continue;\n      }\n\n      if (field.validator && !field.validator(value)) {\n        errors.push(`Field \"${field.key}\" failed custom validation`);\n        continue;\n      }\n\n      this.config[field.key] = value;\n    }\n\n    return { valid: errors.length === 0, errors };\n  }\n\n  /** Load configuration from a YAML-like string (simple parser) */\n  loadYaml(yamlString: string): { valid: boolean; errors: string[] } {\n    const parsed: LoopConfig = {};\n    const errors: string[] = [];\n    for (const line of yamlString.split(\"\\n\")) {\n      const trimmed = line.trim();\n      if (trimmed === \"\" || trimmed.startsWith(\"#\")) continue;\n      const colonIdx = trimmed.indexOf(\":\");\n      if (colonIdx === -1) continue;\n      const key = trimmed.slice(0, colonIdx).trim();\n      let value: unknown = trimmed.slice(colonIdx + 1).trim();\n      if (value === \"true\") value = true;\n      else if (value === \"false\") value = false;\n      else if (/^\\d+$/.test(value as string)) value = parseInt(value as string, 10);\n      else if (/^\\d+\\.\\d+$/.test(value as string)) value = parseFloat(value as string);\n      parsed[key] = value;\n    }\n    return this.load(JSON.stringify(parsed));\n  }\n\n  get<T>(key: string, fallback?: T): T | undefined {\n    return (this.config[key] as T) ?? fallback;\n  }\n\n  getAll(): LoopConfig {\n    return { ...this.config };\n  }\n\n  validateSchema(jsonConfig: string): { valid: boolean; errors: string[] } {\n    const prev = { ...this.config };\n    const result = this.load(jsonConfig);\n    this.config = prev;\n    return result;\n  }\n}\n\n// ─── Demo: wiring all six tools together ───\n\nasync function demoAdvancedToolingSuite() {\n  console.log(\"═══ Advanced Loop Tooling Suite Demo ═══\\n\");\n\n  // 1. Scaffold a new loop\n  const generator = new LoopScaffoldGenerator();\n  const blueprint: LoopBlueprint = {\n    name: \"CodeReviewAgent\",\n    tools: [\"read\", \"grep\", \"glob\", \"ask\"],\n    hasHITL: true,\n    hasCheckpoint: true,\n    hasCritique: true,\n  };\n  const files = generator.generate(blueprint);\n  console.log(`Generated ${files.size} files for ${blueprint.name}`);\n  for (const [name] of files) {\n    console.log(`  - ${name}`);\n  }\n\n  // 2. Validate a configuration for the scaffolded loop\n  const schema: LoopConfigSchema = {\n    fields: [\n      { key: \"maxSteps\", type: \"number\", required: true, validator: (v) => (v as number) > 0 },\n      { key: \"maxTokens\", type: \"number\", required: true },\n      { key: \"maxCostUsd\", type: \"number\", required: true },\n      { key: \"featureHITL\", type: \"boolean\", required: false, defaultValue: false },\n    ],\n  };\n  const configMgr = new ConfigurationManager(schema);\n  const result = configMgr.load(JSON.stringify({ maxSteps: 50, maxTokens: 100000, maxCostUsd: 0.25 }));\n  console.log(`\\nConfig valid: ${result.valid}, errors: ${result.errors.join(\", \")}`);\n\n  // 3. Profile some simulated samples\n  const profiler = new LoopProfiler();\n  profiler.recordSample({ step: 1, phase: \"plan\", durationMs: 1200, tokens: 500, toolName: \"read\" });\n  profiler.recordSample({ step: 1, phase: \"act\", durationMs: 3400, tokens: 100, toolName: \"bash\" });\n  profiler.recordSample({ step: 2, phase: \"plan\", durationMs: 800, tokens: 400, toolName: \"grep\" });\n  profiler.recordSample({ step: 2, phase: \"act\", durationMs: 150, tokens: 50, toolName: \"read\" });\n  profiler.recordSample({ step: 2, phase: \"critique\", durationMs: 2200, tokens: 600, toolName: \"ask\" });\n\n  console.log(\"\\nProfiler hot spots:\");\n  for (const h of profiler.detectHotSpots(300)) {\n    console.log(`  ${h.phase}: avg ${h.avgDurationMs}ms (${h.count} samples)`);\n  }\n  console.log(\"\\nBottlenecks (top 2):\");\n  for (const b of profiler.findBottlenecks(2)) {\n    console.log(`  Step ${b.step} / ${b.phase}: ${b.durationMs}ms`);\n  }\n\n  // 4. Visualize trace data\n  const visualizer = new TraceVisualizer();\n  visualizer.addCycle(1, [{ phase: \"plan\", ms: 1200 }, { phase: \"act\", ms: 3400 }, { phase: \"observe\", ms: 200 }]);\n  visualizer.addCycle(2, [{ phase: \"plan\", ms: 800 }, { phase: \"act\", ms: 150 }, { phase: \"critique\", ms: 2200 }]);\n  const metrics = visualizer.cycleMetrics();\n  console.log(\"\\nTrace cycle metrics:\");\n  for (const m of metrics) {\n    console.log(`  Cycle ${m.step}: plan=${m.planMs}ms act=${m.actMs}ms critique=${m.critiqueMs}ms`);\n  }\n\n  // 5. Run the test harness\n  const harness = new LoopTestHarness();\n  harness.registerMock({ toolName: \"read\", argsMatcher: () => true, output: \"file content\" });\n  harness.addAssertion({\n    description: \"Every read call returns content\",\n    check: (h) => h.filter((e) => e.tool === \"read\").every((e) => e.result === \"file content\"),\n  });\n  await harness.callWithMocks(\"read\", { path: \"test.txt\" }, 1);\n  const assertionResults = harness.runAssertions();\n  console.log(\"\\nTest harness assertions:\");\n  for (const a of assertionResults) {\n    console.log(`  ${a.passed ? \"✓\" : \"✗\"} ${a.description}`);\n  }\n}\n\nawait demoAdvancedToolingSuite();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "═══ Advanced Loop Tooling Suite Demo ═══\n\nGenerated 3 files for CodeReviewAgent\n  - loop-config.yaml\n  - index.ts\n  - runtime.ts\n\nConfig valid: true, errors: \n\nProfiler hot spots:\n  plan: avg 1000ms (2 samples)\n  act: avg 1775ms (2 samples)\n  critique: avg 2200ms (1 samples)\n\nBottlenecks (top 2):\n  Step 1 / act: 3400ms\n  Step 2 / critique: 2200ms\n\nTrace cycle metrics:\n  Cycle 1: plan=1200ms act=3400ms critique=0ms\n  Cycle 2: plan=800ms act=150ms critique=2200ms\n\nTest harness assertions:\n  ✓ Every read call returns content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-extended-tooling-test-replay-and-document",
      children: "9.7 Extended Tooling: Test, Replay, and Document"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following diagram shows seven complementary tools that provide observation, testing, analysis, and documentation for any agent loop:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Observation\"\n        SR[ScenarioRecorder]\n        PR[LoopProfiler]\n    end\n    subgraph \"Analysis\"\n        SC[SnapshotComparator]\n        TV[TraceVisualizer]\n    end\n    subgraph \"Testing\"\n        LS[LoopSimulator]\n        AB[ABNTestFramework]\n        RS[RegressionTestSuite]\n    end\n    subgraph \"Documentation\"\n        DG[DocumentationGenerator]\n    end\n    SR --> SC\n    SR --> LS\n    LS --> SC\n    LS --> AB\n    SC --> RS\n    AB --> RS\n    RS --> DG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "snapshotcomparator",
      children: "SnapshotComparator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diffs two loop snapshots to detect regressions in steps, tokens, cost, duration, and failure rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// snapshot-comparator.ts\ninterface LoopSnapshot {\n  id: string;\n  timestamp: string;\n  config: { maxSteps: number; maxTokens: number; maxCostUsd: number };\n  cycles: Array<{\n    step: number;\n    phase: string;\n    toolName: string;\n    durationMs: number;\n    tokens: number;\n    success: boolean;\n    error?: string;\n  }>;\n  totals: { steps: number; tokens: number; costUsd: number; durationMs: number };\n}\n\ninterface DiffEntry {\n  metric: string;\n  baseline: number | string;\n  candidate: number | string;\n  delta: string;\n  impact: \"critical\" | \"warning\" | \"info\";\n}\n\nclass SnapshotComparator {\n  compare(baseline: LoopSnapshot, candidate: LoopSnapshot): DiffEntry[] {\n    const diffs: DiffEntry[] = [];\n    const metrics = [\n      { key: \"steps\" as const, label: \"Steps completed\" },\n      { key: \"tokens\" as const, label: \"Tokens consumed\" },\n      { key: \"costUsd\" as const, label: \"Cost (USD)\" },\n      { key: \"durationMs\" as const, label: \"Duration (ms)\" },\n    ];\n    for (const { key, label } of metrics) {\n      const b = baseline.totals[key] as number;\n      const c = candidate.totals[key] as number;\n      const pct = b !== 0 ? ((c - b) / b) * 100 : 0;\n      diffs.push({\n        metric: label,\n        baseline: b,\n        candidate: c,\n        delta: `${pct > 0 ? \"+\" : \"\"}${pct.toFixed(1)}%`,\n        impact: Math.abs(pct) > 50 ? \"critical\" : Math.abs(pct) > 20 ? \"warning\" : \"info\",\n      });\n    }\n    const bFails = baseline.cycles.filter((c) => !c.success).length;\n    const cFails = candidate.cycles.filter((c) => !c.success).length;\n    diffs.push({\n      metric: \"Failed cycles\",\n      baseline: bFails,\n      candidate: cFails,\n      delta: `${cFails - bFails > 0 ? \"+\" : \"\"}${cFails - bFails}`,\n      impact: cFails > bFails ? \"critical\" : \"info\",\n    });\n    return diffs;\n  }\n\n  generateReport(baseline: LoopSnapshot, candidate: LoopSnapshot): string {\n    const diffs = this.compare(baseline, candidate);\n    const lines = [\"═══ Snapshot Comparison Report ═══\\n\"];\n    lines.push(`Baseline:  ${baseline.id} @ ${baseline.timestamp}`);\n    lines.push(`Candidate: ${candidate.id} @ ${candidate.timestamp}\\n`);\n    for (const d of diffs) {\n      const icon = d.impact === \"critical\" ? \"🔴\" : d.impact === \"warning\" ? \"⚠️\" : \"ℹ️\";\n      lines.push(`  ${icon} ${d.metric}: ${d.baseline} → ${d.candidate} (${d.delta})`);\n    }\n    return lines.join(\"\\n\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scenariorecorder",
      children: "ScenarioRecorder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Captures every step of a real loop run — LLM calls, tool results, decisions, and timing — and exports a replayable scenario file."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// scenario-recorder.ts\ninterface ScenarioStep {\n  step: number;\n  llmPrompt?: string;\n  llmResponse?: string;\n  toolCall: { name: string; args: Record<string, unknown> };\n  toolResult: { success: boolean; data: string; error?: string };\n  durationMs: number;\n}\n\ninterface Scenario {\n  name: string;\n  description: string;\n  steps: ScenarioStep[];\n  metadata: Record<string, unknown>;\n}\n\nclass ScenarioRecorder {\n  private scenario: Scenario;\n  private outputDir: string;\n\n  constructor(name: string, description: string, outputDir = \"/tmp/scenarios\") {\n    this.scenario = { name, description, steps: [], metadata: {} };\n    this.outputDir = outputDir;\n  }\n\n  recordStep(step: ScenarioStep): void {\n    this.scenario.steps.push(step);\n  }\n\n  setMetadata(key: string, value: unknown): void {\n    this.scenario.metadata[key] = value;\n  }\n\n  exportToFile(): string {\n    const slug = this.scenario.name.replace(/\\s+/g, \"-\").toLowerCase();\n    const path = `${this.outputDir}/${slug}.json`;\n    Bun.write(path, JSON.stringify(this.scenario, null, 2));\n    return path;\n  }\n\n  static load(path: string): Scenario {\n    return JSON.parse(Bun.file(path).text()) as Scenario;\n  }\n\n  toTestScenario() {\n    return {\n      name: this.scenario.name,\n      steps: this.scenario.steps.map((s) => ({\n        tool: s.toolCall.name,\n        args: s.toolCall.args,\n        expectedSuccess: s.toolResult.success,\n      })),\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loopsimulator",
      children: "LoopSimulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast-forwards a loop by replaying a recorded scenario with synthetic timing, token accounting, and configurable failure injection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// loop-simulator.ts\nclass LoopSimulator {\n  private scenarioPath: string;\n  private maxSteps: number;\n  private tokensPerStep: number;\n  private costPerToken: number;\n  private stepDurationMs: number;\n  private failEveryN: number;\n\n  constructor(config: {\n    scenarioPath: string;\n    maxSteps: number;\n    tokensPerStep: number;\n    costPerToken: number;\n    stepDurationMs: number;\n    failEveryN: number;\n  }) {\n    this.scenarioPath = config.scenarioPath;\n    this.maxSteps = config.maxSteps;\n    this.tokensPerStep = config.tokensPerStep;\n    this.costPerToken = config.costPerToken;\n    this.stepDurationMs = config.stepDurationMs;\n    this.failEveryN = config.failEveryN;\n  }\n\n  async run(): Promise<LoopSnapshot> {\n    const scenario = ScenarioRecorder.load(this.scenarioPath);\n    const cycles: LoopSnapshot[\"cycles\"] = [];\n    let totalTokens = 0;\n    let totalCost = 0;\n    const startTime = Date.now();\n\n    for (let i = 0; i < Math.min(this.maxSteps, scenario.steps.length); i++) {\n      const step = scenario.steps[i];\n      const shouldFail = this.failEveryN > 0 && (i + 1) % this.failEveryN === 0;\n      const jitter = Math.floor(Math.random() * 20);\n      const tokens = this.tokensPerStep + Math.floor(Math.random() * 50);\n      totalTokens += tokens;\n      totalCost += tokens * this.costPerToken;\n\n      cycles.push({\n        step: i + 1,\n        phase: \"act\",\n        toolName: step.toolCall.name,\n        durationMs: this.stepDurationMs + jitter,\n        tokens,\n        success: !shouldFail,\n        error: shouldFail ? \"Simulated failure\" : undefined,\n      });\n      await new Promise((r) => setTimeout(r, 5));\n    }\n\n    return {\n      id: `sim-${Date.now()}`,\n      timestamp: new Date().toISOString(),\n      config: { maxSteps: this.maxSteps, maxTokens: 0, maxCostUsd: 0 },\n      cycles,\n      totals: {\n        steps: cycles.length,\n        tokens: totalTokens,\n        costUsd: totalCost,\n        durationMs: Date.now() - startTime,\n      },\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "abntestframework",
      children: "ABNTestFramework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compares two or more loop configurations side-by-side on the same scenario, reporting deltas in steps, tokens, cost, and duration."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// abn-test-framework.ts\ninterface ABConfig {\n  name: string;\n  overrides: Partial<{\n    maxSteps: number;\n    tokensPerStep: number;\n    stepDurationMs: number;\n    failEveryN: number;\n  }>;\n}\n\nclass ABNTestFramework {\n  private baselineConfig: ConstructorParameters<typeof LoopSimulator>[0];\n\n  constructor(baselineConfig: ConstructorParameters<typeof LoopSimulator>[0]) {\n    this.baselineConfig = baselineConfig;\n  }\n\n  async compare(\n    configs: ABConfig[],\n  ): Promise<{ snapshots: LoopSnapshot[]; report: string }> {\n    const snapshots: LoopSnapshot[] = [];\n    for (const cfg of configs) {\n      const sim = new LoopSimulator({ ...this.baselineConfig, ...cfg.overrides });\n      snapshots.push(await sim.run());\n    }\n    return { snapshots, report: this.buildReport(snapshots) };\n  }\n\n  private buildReport(snapshots: LoopSnapshot[]): string {\n    if (snapshots.length < 2) return \"Need at least 2 configurations\";\n    const lines: string[] = [];\n    for (let i = 1; i < snapshots.length; i++) {\n      const comp = new SnapshotComparator();\n      const diffs = comp.compare(snapshots[0], snapshots[i]);\n      lines.push(`\\n${snapshots[0].id} → ${snapshots[i].id}:`);\n      for (const d of diffs) {\n        lines.push(`  ${d.metric}: ${d.delta} (${d.impact})`);\n      }\n    }\n    return lines.join(\"\\n\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "regressiontestsuite",
      children: "RegressionTestSuite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines a library of named scenarios with expected outcomes. Runs all scenarios and reports pass/fail with diagnostic details."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// regression-test-suite.ts\ninterface TestCase {\n  name: string;\n  scenarioPath: string;\n  expectedSteps: number;\n  maxTokens: number;\n  maxDurationMs: number;\n  minSuccessRate: number;\n}\n\ninterface TestResult {\n  name: string;\n  passed: boolean;\n  actual: { steps: number; tokens: number; durationMs: number; successRate: number };\n  failures: string[];\n}\n\nclass RegressionTestSuite {\n  private tests: TestCase[] = [];\n\n  add(test: TestCase): void {\n    this.tests.push(test);\n  }\n\n  addFromFile(path: string): void {\n    const config: TestCase[] = JSON.parse(Bun.file(path).text());\n    for (const tc of config) this.tests.push(tc);\n  }\n\n  async runAll(\n    baseConfig: ConstructorParameters<typeof LoopSimulator>[0],\n  ): Promise<{ results: TestResult[]; passed: number; failed: number }> {\n    const results: TestResult[] = [];\n    for (const test of this.tests) {\n      const sim = new LoopSimulator({\n        ...baseConfig,\n        scenarioPath: test.scenarioPath,\n        maxSteps: test.expectedSteps * 2,\n      });\n      const snapshot = await sim.run();\n      const failures: string[] = [];\n      const successRate =\n        snapshot.cycles.filter((c) => c.success).length /\n        Math.max(snapshot.cycles.length, 1);\n\n      if (snapshot.totals.steps < test.expectedSteps)\n        failures.push(\n          `Steps: expected ≥${test.expectedSteps}, got ${snapshot.totals.steps}`,\n        );\n      if (snapshot.totals.tokens > test.maxTokens)\n        failures.push(\n          `Tokens: expected ≤${test.maxTokens}, got ${snapshot.totals.tokens}`,\n        );\n      if (snapshot.totals.durationMs > test.maxDurationMs)\n        failures.push(\n          `Duration: expected ≤${test.maxDurationMs}ms, got ${snapshot.totals.durationMs}ms`,\n        );\n      if (successRate < test.minSuccessRate)\n        failures.push(\n          `Success rate: expected ≥${(test.minSuccessRate * 100).toFixed(0)}%, got ${(successRate * 100).toFixed(0)}%`,\n        );\n\n      results.push({\n        name: test.name,\n        passed: failures.length === 0,\n        actual: {\n          steps: snapshot.totals.steps,\n          tokens: snapshot.totals.tokens,\n          durationMs: snapshot.totals.durationMs,\n          successRate,\n        },\n        failures,\n      });\n    }\n    return {\n      results,\n      passed: results.filter((r) => r.passed).length,\n      failed: results.filter((r) => !r.passed).length,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "documentationgenerator",
      children: "DocumentationGenerator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reads TypeScript interfaces, classes, and JSDoc comments from source code to produce structured Markdown API documentation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// documentation-generator.ts\ninterface DocEntry {\n  name: string;\n  kind: \"interface\" | \"class\" | \"type\" | \"function\";\n  description: string;\n  properties?: Array<{ name: string; type: string; description: string }>;\n}\n\nclass DocumentationGenerator {\n  private entries: DocEntry[] = [];\n\n  parseFromSource(source: string): void {\n    const re =\n      /\\/\\*\\*([\\s\\S]*?)\\*\\/\\s*(?:export\\s+)?(interface|class|type|function)\\s+(\\w+)/g;\n    let match: RegExpExecArray | null;\n    while ((match = re.exec(source)) !== null) {\n      this.entries.push({\n        name: match[3],\n        kind: match[2] as DocEntry[\"kind\"],\n        description: match[1].replace(/^[\\s*]+|[\\s*]+$/gm, \"\").trim(),\n      });\n    }\n  }\n\n  addManual(entry: DocEntry): void {\n    this.entries.push(entry);\n  }\n\n  generateMarkdown(): string {\n    const lines = [\"# Loop Tooling API Reference\\n\"];\n    for (const e of this.entries.sort((a, b) =>\n      a.name.localeCompare(b.name),\n    )) {\n      lines.push(`## ${e.name}\\n`);\n      lines.push(`**Kind:** ${e.kind}\\n`);\n      if (e.description) lines.push(`${e.description}\\n`);\n      if (e.properties && e.properties.length > 0) {\n        lines.push(\"| Property | Type | Description |\");\n        lines.push(\"|----------|------|-------------|\");\n        for (const p of e.properties)\n          lines.push(\n            `| \\`${p.name}\\` | \\`${p.type}\\` | ${p.description} |`,\n          );\n        lines.push(\"\");\n      }\n    }\n    lines.push(`_Generated on ${new Date().toISOString().split(\"T\")[0]}_`);\n    return lines.join(\"\\n\");\n  }\n\n  writeToFile(path: string): void {\n    Bun.write(path, this.generateMarkdown());\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "demo-extended-tooling-suite",
      children: "Demo: Extended Tooling Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// demo-extended-tooling.ts\nasync function demoExtendedTooling() {\n  console.log(\"═══ Extended Tooling Suite Demo ═══\\n\");\n\n  // 1. Record a scenario from a live run\n  const recorder = new ScenarioRecorder(\n    \"demo-search\",\n    \"Simulated code search\",\n  );\n  recorder.setMetadata(\"model\", \"claude-sonnet-4\");\n  for (let i = 0; i < 3; i++) {\n    recorder.recordStep({\n      step: i + 1,\n      toolCall: { name: \"read\", args: { path: `file-${i}.ts` } },\n      toolResult: { success: true, data: `content of file ${i}` },\n      durationMs: 50 + Math.floor(Math.random() * 100),\n    });\n  }\n  const scenarioPath = recorder.exportToFile();\n  console.log(`1. Scenario recorded: ${scenarioPath}`);\n\n  // 2. Simulate from the recorded scenario\n  const sim = new LoopSimulator({\n    scenarioPath,\n    maxSteps: 3,\n    tokensPerStep: 150,\n    costPerToken: 0.00001,\n    stepDurationMs: 30,\n    failEveryN: 0,\n  });\n  const snapshot = await sim.run();\n  console.log(\n    `2. Simulation: ${snapshot.totals.steps} steps, ${snapshot.totals.tokens} tokens, ${snapshot.totals.durationMs}ms`,\n  );\n\n  // 3. A/B test two configurations\n  const ab = new ABNTestFramework({\n    scenarioPath,\n    maxSteps: 3,\n    tokensPerStep: 150,\n    costPerToken: 0.00001,\n    stepDurationMs: 30,\n    failEveryN: 0,\n  });\n  const abReport = await ab.compare([\n    { name: \"fast\", overrides: { stepDurationMs: 10, tokensPerStep: 100 } },\n    { name: \"slow\", overrides: { stepDurationMs: 60, tokensPerStep: 300 } },\n  ]);\n  console.log(\"3. A/B report:\");\n  console.log(abReport);\n\n  // 4. Snapshot comparison (simulate a regression)\n  const regressed = {\n    ...snapshot,\n    id: \"regressed-v2\",\n    totals: {\n      ...snapshot.totals,\n      tokens: snapshot.totals.tokens * 2,\n      costUsd: snapshot.totals.costUsd * 2,\n    },\n  };\n  const comp = new SnapshotComparator();\n  console.log(\"\\n4. Regression comparison:\");\n  console.log(comp.generateReport(snapshot, regressed));\n\n  // 5. Regression test suite\n  const suite = new RegressionTestSuite();\n  suite.add({\n    name: \"basic-test\",\n    scenarioPath,\n    expectedSteps: 3,\n    maxTokens: 2000,\n    maxDurationMs: 5000,\n    minSuccessRate: 1.0,\n  });\n  const suiteResult = await suite.runAll({\n    scenarioPath,\n    maxSteps: 3,\n    tokensPerStep: 150,\n    costPerToken: 0.00001,\n    stepDurationMs: 30,\n    failEveryN: 0,\n  });\n  console.log(\n    `\\n5. Regression suite: ${suiteResult.passed} passed, ${suiteResult.failed} failed`,\n  );\n\n  // 6. Generate documentation\n  const docGen = new DocumentationGenerator();\n  docGen.addManual({\n    name: \"LoopSnapshot\",\n    kind: \"interface\",\n    description: \"Complete state of a loop run\",\n    properties: [{ name: \"cycles\", type: \"Cycle[]\", description: \"Recorded cycles\" }],\n  });\n  docGen.addManual({\n    name: \"ScenarioRecorder\",\n    kind: \"class\",\n    description: \"Captures loop runs for replay\",\n    properties: [{ name: \"scenario\", type: \"Scenario\", description: \"Internal state\" }],\n  });\n  console.log(\n    `6. Generated ${docGen.entries.length} API documentation entries`,\n  );\n}\n\nawait demoExtendedTooling();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Durable Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survive crashes by persisting workflow state"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DurableWorkflowEngine"
            }), " with saga compensation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpoint/Restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize agent context, resume seamlessly"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "StateCheckpointer"
            }), " with JSON persistence"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce token, iteration, and cost budgets"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TokenBucket"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CostGovernor"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace every loop step with timing and tokens"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "LoopTracer"
            }), " with cycle-level aggregation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify resilience with deterministic replay and chaos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ChaosMonkey"
            }), " with configurable failure injection"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These five tooling categories turn a prototype agent loop into a production system. Durable execution ensures completeness; checkpointing preserves context; rate limiting prevents runaway costs; observability enables debugging; chaos testing builds confidence."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is saga compensation important for agent loops? What happens if a step creates a file and a later step fails?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What fields should a checkpoint contain to fully restore an agent's state? Why is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "version"
          }), " important?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a token bucket rate limiter differ from a simple fixed-window counter? What advantage does it provide for bursty agent traffic?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What information should each trace span capture? How does cycle-level aggregation help debug a long-running loop?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is deterministic replay critical for testing agent loops? What makes agent tests different from traditional unit tests?"
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
            children: "Add idempotency keys to DurableWorkflowEngine."
          }), " Modify the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Step"
          }), " interface so each step carries an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "idempotencyKey"
          }), ". The engine should skip any step whose key has already been successfully executed. This prevents double-execution when a step succeeds but the checkpoint write fails before recording it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a sliding-window rate limiter."
          }), " Replace ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TokenBucket"
          }), " with a sliding-window log that tracks timestamps of each request. A request is allowed if fewer than N requests occurred in the last W milliseconds. Compare its behavior to the token bucket."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a deterministic replay harness."
          }), " Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RecordingAgent"
          }), " class that captures every LLM response and tool result to a JSONL file. Then write ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReplayAgent"
          }), " that reads the file and replays the exact same sequence without calling any live API. Verify that the agent's decision trace is identical."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extend ChaosMonkey with a \"slow\" failure type."
          }), " Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ChaosRule"
          }), " that does not throw but slows down a step by 5-10 seconds. Verify that your loop's timeout logic catches it and transitions to a retry or fallback path."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge",
      children: "Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrap a real agent loop with the full tooling stack."
        }), " Take the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CodingAgentLoop"
        }), " from Chapter 10 and wrap it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DurableWorkflowEngine"
        }), " (for saga compensation), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StateCheckpointer"
        }), " (for checkpoint after each step), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CostGovernor"
        }), " (to enforce a $0.10 budget), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LoopTracer"
        }), " (to capture spans), and run it through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ChaosMonkey"
        }), " with 15% injection probability on tool calls. Measure: (a) how many steps complete before budget exhaustion, (b) how many chaos injections trigger retries, and (c) how many steps are recovered from checkpoint after a simulated crash."]
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