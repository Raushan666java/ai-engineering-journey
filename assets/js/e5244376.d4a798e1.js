"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[84943],{

/***/ 64131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_04_feedback_loops_md_e52_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-04-feedback-loops-md-e52.json
const site_docs_courses_loop_engineering_ch_04_feedback_loops_md_e52_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch04-feedback-loops","title":"Chapter 4: Feedback Loops","description":"Previous Self-Improvement Loops","source":"@site/docs/courses/loop-engineering/ch04-feedback-loops.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch04-feedback-loops","permalink":"/ai-engineering-journey/loop-engineering/ch04-feedback-loops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"ch04-feedback-loops","slug":"/loop-engineering/ch04-feedback-loops","title":"Chapter 4: Feedback Loops","sidebar_label":"Chapter 4: Feedback Loops","sidebar_position":4},"sidebar":"course-loop-engineering","previous":{"title":"Chapter 3: Human-in-the-Loop","permalink":"/ai-engineering-journey/loop-engineering/ch03-human-in-the-loop"},"next":{"title":"Chapter 5: Self-Improvement Loops","permalink":"/ai-engineering-journey/loop-engineering/ch05-self-improvement-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/ch04-feedback-loops.md


const frontMatter = {
	id: 'ch04-feedback-loops',
	slug: '/loop-engineering/ch04-feedback-loops',
	title: 'Chapter 4: Feedback Loops',
	sidebar_label: 'Chapter 4: Feedback Loops',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Feedback Loops';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. Eval-Driven Loops",
  "id": "1-eval-driven-loops",
  "level": 3
}, {
  "value": "2. Code Review Loops",
  "id": "2-code-review-loops",
  "level": 3
}, {
  "value": "3. Test-Driven Loops",
  "id": "3-test-driven-loops",
  "level": 3
}, {
  "value": "4. Failure-to-Task Conversion",
  "id": "4-failure-to-task-conversion",
  "level": 3
}, {
  "value": "5. Sweep Loops",
  "id": "5-sweep-loops",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: EvalLoopAgent — Generate, Score, Adjust, Repeat",
  "id": "example-1-evalloopagent--generate-score-adjust-repeat",
  "level": 3
}, {
  "value": "Example 2: ReviewLoopAgent — AI Writes, Human Reviews, AI Fixes",
  "id": "example-2-reviewloopagent--ai-writes-human-reviews-ai-fixes",
  "level": 3
}, {
  "value": "Example 3: SweepLoop — Process, Detect Failures, Create Fix Tasks",
  "id": "example-3-sweeploop--process-detect-failures-create-fix-tasks",
  "level": 3
}, {
  "value": "Extended Implementation: Feedback Controller, Q-Learning Loop, Adaptive Threshold, and Multi-Signal Fusion",
  "id": "extended-implementation-feedback-controller-q-learning-loop-adaptive-threshold-and-multi-signal-fusion",
  "level": 3
}, {
  "value": "Advanced Feedback Tools: Oscillation Detection, Cascade Control, Feed-Forward, System ID, and Deadband Filtering",
  "id": "advanced-feedback-tools-oscillation-detection-cascade-control-feed-forward-system-id-and-deadband-filtering",
  "level": 3
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
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "chapter-4-feedback-loops",
        children: "Chapter 4: Feedback Loops"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/loop-engineering/ch03-human-in-the-loop",
          children: "Human-in-the-Loop"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/loop-engineering/ch05-self-improvement-loops",
          children: "Self-Improvement Loops"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design eval-driven loops where agents generate output, score it against criteria, and retry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build code review loops with AI authoring and human reviewing rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement test-driven agent loops where tests are written first and the agent implements to satisfy them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert failed task attempts into concrete subtasks for retry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct sweep loops that automatically detect and fix failures across a task set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish open-loop from closed-loop feedback and choose the right one per context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reason about loop termination: when to stop retrying and when to escalate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Eval-Driven Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate → score → adjust → repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converge on quality through iterative scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Review Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI writes → human reviews → AI fixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair AI breadth with human judgment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test-Driven Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write test first → implement → verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests are executable specifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure-to-Task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed attempt → structured subtask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never throw away partial progress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sweep Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan → detect → fix → verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated maintenance at scale"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-eval-driven-loops",
      children: "1. Eval-Driven Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An eval-driven loop is the most general form of agentic feedback. The agent produces an output, evaluates it against a set of criteria, adjusts its approach based on the evaluation, and repeats."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " ┌──────────┐   generate   ┌─────────┐   score    ┌────────┐\n │  Agent   │ ────────────>│ Output  │ ──────────> │  Eval  │\n │          │<──────────── │         │<────────── │  (LLM  │\n │  (LLM)   │   adjust     │         │   scores   │  or fx)│\n └──────────┘              └─────────┘            └────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key parameters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Controls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Values"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "max_iterations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard cap on retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "min_score"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bar to clear for acceptance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7-0.9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "decay_factor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How much to penalize repeated failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5-0.95"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "early_stop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop if score stops improving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Δ < 0.05"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Termination conditions."
      }), " The loop must always have a stopping rule:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Score threshold met"
        }), " — normal success, exit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max iterations reached"
        }), " — escalate or return best effort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Score plateau"
        }), " — no improvement over last N rounds, exit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Score regression"
        }), " — latest round scored worse than previous, roll back."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-code-review-loops",
      children: "2. Code Review Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a code review loop, the AI authors code and a human plays the role of reviewer. This mirrors real engineering workflows and is one of the most practical agent patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Round 1:  AI writes code ──> Human reviews ──> Feedback\nRound 2:  AI applies feedback ──> Human re-reviews ──> Approve or iterate\nRound N:  (repeat until approval or max rounds)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Feedback granularity."
      }), " Review comments should be specific, actionable, and scoped:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Quality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vague"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"This doesn't look right.\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actionable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["\"Line 34: the null check is redundant because ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getUser()"
            }), " already returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "never null"
            }), ". Remove the if-block.\""]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scoped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each comment references a specific file, line, and concern."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent should restate its understanding of each comment before making changes, to catch misinterpretation early."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-test-driven-loops",
      children: "3. Test-Driven Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test-driven agent loops invert the normal flow: a human (or automated test generator) writes a failing test first, then the agent implements code to make it pass."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1:  Write test (fails) ──> Agent implements ──> Run test\nStep 2:  Test passes? ──> Done.  Test fails? ──> Agent debugs and retries.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This pattern is especially powerful because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests provide an unambiguous pass/fail signal — no LLM-as-judge needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The test suite becomes the specification. If the agent passes all tests, the task is done."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression is automatic: the test suite catches regressions on subsequent iterations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caveat:"
      }), " The agent must be able to read test failures (stack traces, assertion messages) and translate them into debugging actions. A test that says \"expected 5 but got 3\" is only useful if the agent can trace which code produced the 3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-failure-to-task-conversion",
      children: "4. Failure-to-Task Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an agent fails at a step, the failure should not be discarded — it should be converted into a new subtask. This is the agentic equivalent of \"fail fast, fail forward.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Task: \"Implement user authentication\"\n  ├─ Step 1: Add password hashing ──> FAIL (bcrypt import error)\n  │      └─ New subtask: \"Install bcrypt package and verify import\"\n  ├─ Step 2: Add login endpoint ──> FAIL (missing JWT secret)\n  │      └─ New subtask: \"Add JWT secret to config and wire into login flow\"\n  └─ Step 3: Add session middleware ──> SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The subtask must be smaller and more specific than the parent task."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The subtask must include the error message from the failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The subtask should inherit the parent's context (files, imports, types)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a subtask also fails, escalate to a human — do not create subtasks of subtasks indefinitely."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-sweep-loops",
      children: "5. Sweep Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sweep loop processes a collection of items (bugs, tasks, PRs) and automatically creates fix tasks for any that fail. It is the batch-processing counterpart to the eval-driven loop."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " ┌──────────┐   for each    ┌───────────┐   pass     ┌────────┐\n │  Input   │ ────────────> │  Process  │ ──────────>│  Done  │\n │  Queue   │               │  Agent    │            │        │\n └──────────┘               └───────────┘            └────────┘\n                                  │ fail\n                                  v\n                            ┌──────────┐\n                            │  Create   │\n                            │  Fix Task │\n                            └──────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sweep loops are common in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency updates:"
        }), " Run tests against new dependency version; create fix PRs for breakages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linting at scale:"
        }), " Run a new linter rule across the codebase; create tasks for each violation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flaky test remediation:"
        }), " Detect flaky tests, create tasks with reproduction evidence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accessibility audits:"
        }), " Run axe-core across all pages; create issues for each violation found."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-evalloopagent--generate-score-adjust-repeat",
      children: "Example 1: EvalLoopAgent — Generate, Score, Adjust, Repeat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-example1-eval-loop.ts\n// Bun: bun run ch04-example1-eval-loop.ts\n\ninterface EvalCriterion {\n  name: string;\n  weight: number;\n  score: (output: string) => number;\n}\n\ninterface EvalResult {\n  overallScore: number;\n  dimensionScores: Record<string, number>;\n  feedback: string;\n}\n\ninterface EvalLoopConfig {\n  maxIterations: number;\n  minScore: number;\n  plateauWindow: number;\n  improvementThreshold: number;\n}\n\ninterface GeneratorInput {\n  prompt: string;\n  context: Record<string, unknown>;\n}\n\nclass EvalLoopAgent {\n  private config: EvalLoopConfig;\n  private criteria: EvalCriterion[] = [];\n  private iterationHistory: Array<{ iteration: number; score: number; output: string }> = [];\n  private currentParameters: Record<string, number> = {\n    temperature: 0.8,\n    topP: 0.9,\n    repetitionPenalty: 1.0,\n  };\n\n  constructor(config: Partial<EvalLoopConfig> = {}) {\n    this.config = {\n      maxIterations: 5,\n      minScore: 0.8,\n      plateauWindow: 2,\n      improvementThreshold: 0.05,\n      ...config,\n    };\n  }\n\n  addCriterion(criterion: EvalCriterion): void {\n    this.criteria.push(criterion);\n  }\n\n  private simulateGenerate(input: GeneratorInput, params: Record<string, number>): string {\n    const quality = Math.min(1, params.temperature * 0.5 + Math.random() * 0.5);\n    let output = `Generated response for: \"${input.prompt}\"\\n`;\n    output += `Parameters: temp=${params.temperature.toFixed(2)}, `;\n    output += `topP=${params.topP.toFixed(2)}\\n---\\n`;\n    if (quality > 0.7) {\n      output += \"This is a high-quality response that addresses the prompt thoroughly.\";\n    } else if (quality > 0.4) {\n      output += \"This response covers the topic but lacks depth in some areas.\";\n    } else {\n      output += \"Brief response that partially addresses the prompt.\";\n    }\n    return output;\n  }\n\n  private evaluate(output: string): EvalResult {\n    let totalWeight = 0;\n    let weightedSum = 0;\n    const dimensionScores: Record<string, number> = {};\n\n    for (const criterion of this.criteria) {\n      const score = criterion.score(output);\n      dimensionScores[criterion.name] = score;\n      weightedSum += score * criterion.weight;\n      totalWeight += criterion.weight;\n    }\n\n    const overallScore = totalWeight > 0 ? weightedSum / totalWeight : 0;\n    const worstDimension = Object.entries(dimensionScores).sort((a, b) => a[1] - b[1])[0];\n    const feedback = overallScore < this.config.minScore\n      ? `Lowest dimension: ${worstDimension[0]} (${(worstDimension[1] * 100).toFixed(0)}%). Improve ${worstDimension[0]}.`\n      : \"All criteria met or exceeded.\";\n\n    return { overallScore, dimensionScores, feedback };\n  }\n\n  private adjustParameters(iteration: number, lastScore: number, prevScore: number | null): void {\n    if (prevScore === null) {\n      this.currentParameters.temperature = 0.8 - iteration * 0.1;\n    } else if (lastScore < prevScore) {\n      this.currentParameters.temperature = Math.max(0.1, this.currentParameters.temperature - 0.1);\n      this.currentParameters.repetitionPenalty += 0.1;\n    } else {\n      this.currentParameters.temperature = Math.min(1.5, this.currentParameters.temperature + 0.05);\n    }\n    this.currentParameters.temperature = Math.max(0.1, Math.min(1.5, this.currentParameters.temperature));\n  }\n\n  async run(input: GeneratorInput): Promise<{ output: string; history: typeof this.iterationHistory }> {\n    let prevScore: number | null = null;\n    let plateauCount = 0;\n\n    for (let i = 0; i < this.config.maxIterations; i++) {\n      console.log(`\\n=== Iteration ${i + 1}/${this.config.maxIterations} ===`);\n\n      const output = this.simulateGenerate(input, this.currentParameters);\n      const evalResult = this.evaluate(output);\n\n      this.iterationHistory.push({\n        iteration: i + 1,\n        score: evalResult.overallScore,\n        output,\n      });\n\n      console.log(`  Score: ${(evalResult.overallScore * 100).toFixed(0)}%`);\n      console.log(`  Dimensions: ${JSON.stringify(evalResult.dimensionScores)}`);\n      console.log(`  Parameters: temp=${this.currentParameters.temperature.toFixed(2)}`);\n      console.log(`  Feedback: ${evalResult.feedback}`);\n\n      if (evalResult.overallScore >= this.config.minScore) {\n        console.log(`  => Score threshold met. Stopping.`);\n        return { output, history: this.iterationHistory };\n      }\n\n      if (prevScore !== null) {\n        const improvement = evalResult.overallScore - prevScore;\n        if (improvement < 0) {\n          console.log(`  => Score regressed. Rolling back and adjusting.`);\n        } else if (improvement < this.config.improvementThreshold) {\n          plateauCount++;\n          console.log(`  => Plateau detected (${plateauCount}/${this.config.plateauWindow})`);\n          if (plateauCount >= this.config.plateauWindow) {\n            console.log(`  => Max plateau reached. Stopping.`);\n            return { output, history: this.iterationHistory };\n          }\n        } else {\n          plateauCount = 0;\n        }\n      }\n\n      this.adjustParameters(i + 1, evalResult.overallScore, prevScore);\n      prevScore = evalResult.overallScore;\n    }\n\n    console.log(`\\n=> Max iterations (${this.config.maxIterations}) reached. Returning best result.`);\n    const best = this.iterationHistory.reduce((a, b) => (a.score > b.score ? a : b));\n    return { output: best.output, history: this.iterationHistory };\n  }\n}\n\nasync function main() {\n  const agent = new EvalLoopAgent({ maxIterations: 4, minScore: 0.75 });\n\n  agent.addCriterion({\n    name: \"relevance\",\n    weight: 0.4,\n    score: (output) => {\n      if (output.includes(\"addresses the prompt\")) return 0.9;\n      if (output.includes(\"covers the topic\")) return 0.6;\n      return 0.3;\n    },\n  });\n\n  agent.addCriterion({\n    name: \"detail\",\n    weight: 0.35,\n    score: (output) => {\n      if (output.includes(\"high-quality\")) return 0.85;\n      if (output.includes(\"lacks depth\")) return 0.5;\n      return 0.2;\n    },\n  });\n\n  agent.addCriterion({\n    name: \"clarity\",\n    weight: 0.25,\n    score: (_output) => 0.7 + Math.random() * 0.2,\n  });\n\n  const result = await agent.run({\n    prompt: \"Explain the CAP theorem in distributed systems.\",\n    context: { audience: \"senior engineers\", maxTokens: 500 },\n  });\n\n  console.log(\"\\n=== Result ===\");\n  console.log(result.output);\n  console.log(`\\nIterations: ${result.history.length}`);\n  console.log(`Best score: ${(Math.max(...result.history.map((h) => h.score)) * 100).toFixed(0)}%`);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-reviewloopagent--ai-writes-human-reviews-ai-fixes",
      children: "Example 2: ReviewLoopAgent — AI Writes, Human Reviews, AI Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-example2-review-loop.ts\n// Bun: bun run ch04-example2-review-loop.ts\n\ninterface ReviewComment {\n  file: string;\n  line: number;\n  severity: \"error\" | \"warning\" | \"nit\";\n  message: string;\n  suggestion: string;\n}\n\ninterface ReviewRound {\n  round: number;\n  code: string;\n  comments: ReviewComment[];\n  approved: boolean;\n}\n\nclass ReviewLoopAgent {\n  private currentRound = 0;\n  private readonly maxRounds: number;\n  private history: ReviewRound[] = [];\n\n  constructor(maxRounds = 3) {\n    this.maxRounds = maxRounds;\n  }\n\n  private simulateWriteCode(task: string): string {\n    const templates: Record<string, string> = {\n      \"add-user-endpoint\": `import { Router } from \"express\";\nimport { hash } from \"bcrypt\";\nimport { prisma } from \"../db\";\n\nconst router = Router();\n\nrouter.post(\"/users\", async (req, res) => {\n  const { email, password, name } = req.body;\n  const hashed = await hash(password, 10);\n  const user = await prisma.user.create({\n    data: { email, password: hashed, name },\n  });\n  res.status(201).json(user);\n});\n\nexport default router;`,\n\n      \"add-login-endpoint\": `import { Router } from \"express\";\nimport { compare } from \"bcrypt\";\nimport { sign } from \"jsonwebtoken\";\nimport { prisma } from \"../db\";\n\nconst router = Router();\n\nrouter.post(\"/login\", async (req, res) => {\n  const { email, password } = req.body;\n  const user = await prisma.user.findUnique({ where: { email } });\n  if (!user) return res.status(401).json({ error: \"Invalid credentials\" });\n  const valid = await compare(password, user.password);\n  if (!valid) return res.status(401).json({ error: \"Invalid credentials\" });\n  const token = sign({ userId: user.id }, process.env.JWT_SECRET!);\n  res.json({ token });\n});\n\nexport default router;`,\n    };\n\n    return templates[task] ?? `// Implement ${task}\\nexport function solve() {\\n  // TODO\\n}`;\n  }\n\n  private simulateHumanReview(code: string): ReviewComment[] {\n    const comments: ReviewComment[] = [];\n    const lines = code.split(\"\\n\");\n\n    for (let i = 0; i < lines.length; i++) {\n      const line = lines[i];\n      const lineNum = i + 1;\n\n      if (line.includes(\"any\")) {\n        comments.push({\n          file: \"impl.ts\",\n          line: lineNum,\n          severity: \"error\",\n          message: \"Avoid `any` type. Use a proper interface or type alias.\",\n          suggestion: line.replace(\"any\", \"unknown\"),\n        });\n      }\n\n      if (line.includes(\"process.env\") && !line.includes(\"!\")) {\n        comments.push({\n          file: \"impl.ts\",\n          line: lineNum,\n          severity: \"warning\",\n          message: \"Environment variable access without non-null assertion. Consider validating at startup.\",\n          suggestion: line.replace(\"process.env.\", \"process.env.\").replace(\";\", \"!;\"),\n        });\n      }\n\n      if (line.includes(\"TODO\")) {\n        comments.push({\n          file: \"impl.ts\",\n          line: lineNum,\n          severity: \"warning\",\n          message: \"TODO left in code. Complete the implementation or add a tracking issue.\",\n          suggestion: \"Implement the function body or add a @todo comment with an issue link.\",\n        });\n      }\n    }\n\n    comments.push({\n      file: \"impl.ts\",\n      line: 1,\n      severity: \"nit\",\n      message: \"Consider adding JSDoc comments to exported functions.\",\n      suggestion: \"/** Creates a new user. */\",\n    });\n\n    return comments;\n  }\n\n  private applyFeedback(code: string, comments: ReviewComment[]): string {\n    let result = code;\n    for (const comment of comments) {\n      if (comment.severity === \"error\") {\n        result = result.replace(/any/g, \"unknown\");\n      }\n      if (comment.message.includes(\"TODOs\")) {\n        result = result.replace(\"// TODO\", \"// Implemented\");\n      }\n    }\n    return result;\n  }\n\n  async run(task: string): Promise<ReviewRound> {\n    let code = this.simulateWriteCode(task);\n\n    while (this.currentRound < this.maxRounds) {\n      this.currentRound++;\n      console.log(`\\n=== Review Round ${this.currentRound} ===`);\n\n      const comments = this.simulateHumanReview(code);\n      const errors = comments.filter((c) => c.severity === \"error\").length;\n      const warnings = comments.filter((c) => c.severity === \"warning\").length;\n      const nits = comments.filter((c) => c.severity === \"nit\").length;\n\n      console.log(`  Errors: ${errors}, Warnings: ${warnings}, Nits: ${nits}`);\n\n      for (const comment of comments) {\n        console.log(`  [${comment.severity}] L${comment.line}: ${comment.message}`);\n      }\n\n      const approved = errors === 0;\n\n      this.history.push({ round: this.currentRound, code, comments, approved });\n\n      if (approved) {\n        console.log(\"  => Approved! No errors remaining.\");\n        return this.history[this.history.length - 1];\n      }\n\n      if (this.currentRound < this.maxRounds) {\n        code = this.applyFeedback(code, comments);\n        console.log(\"  => Applied fixes. Re-submitting for review...\");\n      }\n    }\n\n    console.log(`\\n=> Max review rounds (${this.maxRounds}) reached.`);\n    return this.history[this.history.length - 1];\n  }\n\n  getHistory(): ReviewRound[] {\n    return this.history;\n  }\n}\n\nasync function main() {\n  const agent = new ReviewLoopAgent(3);\n\n  const result = await agent.run(\"add-user-endpoint\");\n\n  console.log(\"\\n=== Review History ===\");\n  for (const round of agent.getHistory()) {\n    console.log(`\\nRound ${round.round}: ${round.approved ? \"APPROVED\" : \"NEEDS WORK\"}`);\n    console.log(`  ${round.comments.length} comments`);\n  }\n\n  console.log(`\\nFinal approved: ${result.approved}`);\n  console.log(\"Final code:\");\n  console.log(result.code);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-sweeploop--process-detect-failures-create-fix-tasks",
      children: "Example 3: SweepLoop — Process, Detect Failures, Create Fix Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-example3-sweep-loop.ts\n// Bun: bun run ch04-example3-sweep-loop.ts\n\ninterface Task {\n  id: string;\n  description: string;\n  category: string;\n  priority: \"low\" | \"medium\" | \"high\" | \"critical\";\n}\n\ninterface TaskResult {\n  taskId: string;\n  succeeded: boolean;\n  error?: string;\n  output?: string;\n}\n\ninterface FixTask {\n  id: string;\n  parentTaskId: string;\n  description: string;\n  error: string;\n  category: string;\n  priority: \"low\" | \"medium\" | \"high\" | \"critical\";\n}\n\nclass SweepLoop {\n  private fixTasks: FixTask[] = [];\n  private processedCount = 0;\n  private fixRound = 0;\n  private readonly maxFixRounds: number;\n\n  constructor(maxFixRounds = 2) {\n    this.maxFixRounds = maxFixRounds;\n  }\n\n  private async executeTask(task: Task): Promise<TaskResult> {\n    await new Promise((r) => setTimeout(r, 10 + Math.random() * 20));\n    const willFail = Math.random() < 0.4;\n    if (willFail) {\n      const errors = [\n        \"ModuleNotFoundError: No module named 'requests'\",\n        \"TypeError: Cannot read properties of undefined (reading 'map')\",\n        \"SyntaxError: Unexpected token ) in JSON at position 42\",\n        \"TimeoutError: Connection to database timed out\",\n        \"AssertionError: expected 5 to equal 3\",\n      ];\n      return {\n        taskId: task.id,\n        succeeded: false,\n        error: errors[Math.floor(Math.random() * errors.length)],\n      };\n    }\n    return {\n      taskId: task.id,\n      succeeded: true,\n      output: `Successfully completed: ${task.description}`,\n    };\n  }\n\n  private severityToPriority(severity: number): Task[\"priority\"] {\n    if (severity > 0.8) return \"critical\";\n    if (severity > 0.5) return \"high\";\n    if (severity > 0.2) return \"medium\";\n    return \"low\";\n  }\n\n  private parseErrorForFixTask(error: string, parent: Task): string {\n    if (error.includes(\"ModuleNotFoundError\")) {\n      return `Install missing dependency for ${parent.description}. Error: ${error}`;\n    }\n    if (error.includes(\"TypeError\")) {\n      return `Fix null/undefined check in ${parent.description}. Error: ${error}`;\n    }\n    if (error.includes(\"SyntaxError\")) {\n      return `Fix JSON parsing in ${parent.description}. Error: ${error}`;\n    }\n    if (error.includes(\"TimeoutError\")) {\n      return `Add connection retry logic or increase timeout for ${parent.description}. Error: ${error}`;\n    }\n    if (error.includes(\"AssertionError\")) {\n      return `Fix incorrect return value in ${parent.description}. Error: ${error}`;\n    }\n    return `General fix for ${parent.description}: ${error}`;\n  }\n\n  private createFixTask(task: Task, result: TaskResult): FixTask {\n    return {\n      id: `fix-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,\n      parentTaskId: task.id,\n      description: this.parseErrorForFixTask(result.error!, task),\n      error: result.error!,\n      category: task.category,\n      priority: task.priority === \"critical\" ? \"critical\" : \"medium\",\n    };\n  }\n\n  async sweep(tasks: Task[]): Promise<{\n    successes: TaskResult[];\n    failures: TaskResult[];\n    fixTasks: FixTask[];\n    resolvedByFixes: TaskResult[];\n  }> {\n    const successes: TaskResult[] = [];\n    const failures: TaskResult[] = [];\n    const resolvedByFixes: TaskResult[] = [];\n\n    console.log(`=== SWEEP: Processing ${tasks.length} tasks ===\\n`);\n\n    for (const task of tasks) {\n      this.processedCount++;\n      console.log(`[${this.processedCount}/${tasks.length}] ${task.description} (${task.priority})`);\n      const result = await this.executeTask(task);\n      if (result.succeeded) {\n        successes.push(result);\n        console.log(`  => OK`);\n      } else {\n        failures.push(result);\n        const fixTask = this.createFixTask(task, result);\n        this.fixTasks.push(fixTask);\n        console.log(`  => FAIL: ${result.error}`);\n        console.log(`  => Created fix task: ${fixTask.description.slice(0, 60)}...`);\n      }\n    }\n\n    if (this.fixTasks.length > 0 && this.maxFixRounds > 0) {\n      console.log(`\\n=== FIX ROUND ${++this.fixRound}: Processing ${this.fixTasks.length} fix tasks ===\\n`);\n      const pendingFixes = [...this.fixTasks];\n      this.fixTasks = [];\n\n      for (const fix of pendingFixes) {\n        console.log(`[FIX] ${fix.description.slice(0, 60)}...`);\n        const result = await this.executeTask({\n          id: fix.id,\n          description: fix.description,\n          category: fix.category,\n          priority: fix.priority,\n        });\n        if (result.succeeded) {\n          resolvedByFixes.push(result);\n          console.log(`  => FIX SUCCEEDED`);\n        } else {\n          console.log(`  => FIX FAILED: ${result.error}`);\n          if (this.fixRound < this.maxFixRounds) {\n            const subFix = this.createFixTask(\n              { id: fix.parentTaskId, description: fix.description, category: fix.category, priority: fix.priority },\n              result\n            );\n            this.fixTasks.push(subFix);\n            console.log(`  => Re-queued for next fix round`);\n          } else {\n            console.log(`  => Max fix rounds reached. Escalating.`);\n          }\n        }\n      }\n\n      if (this.fixTasks.length > 0 && this.fixRound < this.maxFixRounds) {\n        const remaining = await this.sweep(\n          this.fixTasks.map((f) => ({\n            id: f.id,\n            description: f.description,\n            category: f.category,\n            priority: f.priority,\n          }))\n        );\n        return {\n          successes: [...successes, ...remaining.successes],\n          failures: [...failures, ...remaining.failures],\n          fixTasks: remaining.fixTasks,\n          resolvedByFixes: [...resolvedByFixes, ...remaining.resolvedByFixes],\n        };\n      }\n    }\n\n    return { successes, failures, fixTasks: this.fixTasks, resolvedByFixes };\n  }\n}\n\nasync function main() {\n  const sweeper = new SweepLoop(2);\n\n  const tasks: Task[] = [\n    { id: \"t1\", description: \"Update axios to v1.7.0\", category: \"deps\", priority: \"high\" },\n    { id: \"t2\", description: \"Add input validation to signup form\", category: \"feature\", priority: \"high\" },\n    { id: \"t3\", description: \"Fix pagination off-by-one\", category: \"bug\", priority: \"medium\" },\n    { id: \"t4\", description: \"Add rate limiting to login endpoint\", category: \"security\", priority: \"critical\" },\n    { id: \"t5\", description: \"Refactor user service to use repository pattern\", category: \"refactor\", priority: \"low\" },\n    { id: \"t6\", description: \"Upgrade ESLint config to flat config\", category: \"tooling\", priority: \"medium\" },\n    { id: \"t7\", description: \"Add integration test for payment flow\", category: \"testing\", priority: \"high\" },\n    { id: \"t8\", description: \"Replace moment.js with date-fns\", category: \"deps\", priority: \"low\" },\n  ];\n\n  const result = await sweeper.sweep(tasks);\n\n  console.log(\"\\n=== SWEEP RESULTS ===\");\n  console.log(`Total tasks: ${tasks.length}`);\n  console.log(`Immediate successes: ${result.successes.length}`);\n  console.log(`Immediate failures: ${result.failures.length}`);\n  console.log(`Resolved by auto-fix: ${result.resolvedByFixes.length}`);\n  console.log(`Unresolved (escalated): ${result.fixTasks.length}`);\n  console.log(`Final pass rate: ${((result.successes.length + result.resolvedByFixes.length) / tasks.length * 100).toFixed(0)}%`);\n\n  if (result.fixTasks.length > 0) {\n    console.log(\"\\n=== ESCALATED FIX TASKS ===\");\n    for (const fix of result.fixTasks) {\n      console.log(`  ${fix.id}: ${fix.description}`);\n      console.log(`    Priority: ${fix.priority} | Original error: ${fix.error}`);\n    }\n  }\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-feedback-controller-q-learning-loop-adaptive-threshold-and-multi-signal-fusion",
      children: "Extended Implementation: Feedback Controller, Q-Learning Loop, Adaptive Threshold, and Multi-Signal Fusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section builds advanced feedback infrastructure: a generic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeedbackController"
      }), " with pluggable sensor/actuator/controller components, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReinforcementFeedbackLoop"
      }), " using Q-learning update rules, an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AdaptiveThresholdDetector"
      }), " with moving window statistics, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiSignalFusion"
      }), " engine combining multiple feedback signals, a Smith predictor for delay compensation, and saturation/anti-windup protection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-advanced-feedback.ts\n// bun run ch04-advanced-feedback.ts\n\n// ─── Generic Feedback Controller ───────────────────────────────────────\n\ninterface Sensor {\n  read(): number;\n}\n\ninterface Actuator {\n  apply(control: number): void;\n}\n\ninterface Controller {\n  compute(setpoint: number, measurement: number): number;\n  reset(): void;\n}\n\nclass FeedbackController {\n  private sensor: Sensor;\n  private actuator: Actuator;\n  private controller: Controller;\n  private setpoint: number;\n  private trace: Array<{ cycle: number; measurement: number; control: number; error: number }> = [];\n  private cycle = 0;\n\n  constructor(sensor: Sensor, actuator: Actuator, controller: Controller, setpoint: number) {\n    this.sensor = sensor;\n    this.actuator = actuator;\n    this.controller = controller;\n    this.setpoint = setpoint;\n  }\n\n  async run(cycles: number): Promise<typeof this.trace> {\n    for (let i = 0; i < cycles; i++) {\n      this.cycle++;\n      const measurement = this.sensor.read();\n      const error = this.setpoint - measurement;\n      const control = this.controller.compute(this.setpoint, measurement);\n      this.actuator.apply(control);\n      this.trace.push({ cycle: this.cycle, measurement, control, error });\n    }\n    return this.trace;\n  }\n\n  changeSetpoint(newSetpoint: number): void {\n    this.setpoint = newSetpoint;\n  }\n\n  reset(): void {\n    this.controller.reset();\n    this.trace = [];\n    this.cycle = 0;\n  }\n\n  getTrace(): typeof this.trace {\n    return [...this.trace];\n  }\n}\n\n// ─── PID Controller (imported pattern, re-implemented for feedback context) ───\n\nclass PIDFeedbackController implements Controller {\n  private integral = 0;\n  private prevError = 0;\n  private outputMin: number;\n  private outputMax: number;\n\n  constructor(\n    private kp: number,\n    private ki: number,\n    private kd: number,\n    private dt: number,\n    limits?: { min: number; max: number }\n  ) {\n    this.outputMin = limits?.min ?? -Infinity;\n    this.outputMax = limits?.max ?? Infinity;\n  }\n\n  compute(setpoint: number, measurement: number): number {\n    const error = setpoint - measurement;\n    const proportional = this.kp * error;\n    this.integral += this.ki * error * this.dt;\n    this.integral = Math.max(this.outputMin, Math.min(this.outputMax, this.integral));\n    const derivative = this.kd * ((error - this.prevError) / (this.dt || 1e-6));\n    let output = proportional + this.integral + derivative;\n    output = Math.max(this.outputMin, Math.min(this.outputMax, output));\n    this.prevError = error;\n    return output;\n  }\n\n  reset(): void {\n    this.integral = 0;\n    this.prevError = 0;\n  }\n}\n\n// ─── Reinforcement Feedback Loop (Q-Learning Update) ───────────────────\n\ninterface QLearningConfig {\n  learningRate: number;\n  discountFactor: number;\n  explorationRate: number;\n  stateCount: number;\n  actionCount: number;\n}\n\nclass ReinforcementFeedbackLoop {\n  private qTable: number[][];\n  private config: QLearningConfig;\n  private episodeRewards: number[] = [];\n  private currentEpisode = 0;\n\n  constructor(config: QLearningConfig) {\n    this.config = config;\n    this.qTable = Array.from({ length: config.stateCount }, () =>\n      Array.from({ length: config.actionCount }, () => Math.random() * 0.1)\n    );\n  }\n\n  selectAction(state: number): number {\n    if (Math.random() < this.config.explorationRate) {\n      return Math.floor(Math.random() * this.config.actionCount);\n    }\n    return this.qTable[state].indexOf(Math.max(...this.qTable[state]));\n  }\n\n  update(state: number, action: number, reward: number, nextState: number): void {\n    const { learningRate: alpha, discountFactor: gamma } = this.config;\n    const currentQ = this.qTable[state][action];\n    const maxNextQ = Math.max(...this.qTable[nextState]);\n    this.qTable[state][action] = currentQ + alpha * (reward + gamma * maxNextQ - currentQ);\n  }\n\n  runEpisode(\n    env: (state: number, action: number) => { nextState: number; reward: number; done: boolean },\n    maxSteps: number\n  ): { totalReward: number; steps: number } {\n    this.currentEpisode++;\n    let state = 0;\n    let totalReward = 0;\n    let steps = 0;\n\n    for (let i = 0; i < maxSteps; i++) {\n      const action = this.selectAction(state);\n      const { nextState, reward, done } = env(state, action);\n      this.update(state, action, reward, nextState);\n      totalReward += reward;\n      state = nextState;\n      steps++;\n      if (done) break;\n    }\n\n    this.episodeRewards.push(totalReward);\n\n    if (this.currentEpisode % 100 === 0) {\n      this.config.explorationRate = Math.max(0.01, this.config.explorationRate * 0.95);\n    }\n\n    return { totalReward, steps };\n  }\n\n  getQTable(): number[][] {\n    return this.qTable.map((row) => [...row]);\n  }\n\n  getAverageReward(lastN: number = 10): number {\n    const recent = this.episodeRewards.slice(-lastN);\n    return recent.reduce((a, b) => a + b, 0) / (recent.length || 1);\n  }\n}\n\n// ─── Adaptive Threshold Detector ────────────────────────────────────────\n\nclass AdaptiveThresholdDetector {\n  private window: number[] = [];\n  private readonly windowSize: number;\n  private readonly multiplier: number;\n  private threshold: number;\n\n  constructor(windowSize: number = 20, multiplier: number = 2.0) {\n    this.windowSize = windowSize;\n    this.multiplier = multiplier;\n    this.threshold = 0;\n  }\n\n  update(value: number): void {\n    this.window.push(value);\n    if (this.window.length > this.windowSize) {\n      this.window.shift();\n    }\n    if (this.window.length >= 5) {\n      const mean = this.window.reduce((a, b) => a + b, 0) / this.window.length;\n      const variance = this.window.reduce((sum, v) => sum + (v - mean) ** 2, 0) / this.window.length;\n      const stdDev = Math.sqrt(variance);\n      this.threshold = mean + this.multiplier * stdDev;\n    }\n  }\n\n  isAnomalous(value: number): boolean {\n    return this.window.length >= 5 && Math.abs(value) > this.threshold;\n  }\n\n  getThreshold(): number {\n    return this.threshold;\n  }\n\n  getStats(): { mean: number; stdDev: number; count: number } {\n    if (this.window.length === 0) return { mean: 0, stdDev: 0, count: 0 };\n    const mean = this.window.reduce((a, b) => a + b, 0) / this.window.length;\n    const variance = this.window.reduce((sum, v) => sum + (v - mean) ** 2, 0) / this.window.length;\n    return { mean, stdDev: Math.sqrt(variance), count: this.window.length };\n  }\n}\n\n// ─── Multi-Signal Fusion ───────────────────────────────────────────────\n\ntype FusionMethod = \"weighted\" | \"median\" | \"min\" | \"max\" | \"product\";\n\ninterface SignalSource {\n  name: string;\n  weight: number;\n  read: () => number;\n}\n\nclass MultiSignalFusion {\n  private sources: SignalSource[] = [];\n\n  addSource(source: SignalSource): void {\n    this.sources.push(source);\n  }\n\n  fuse(method: FusionMethod = \"weighted\"): { value: number; contributions: Record<string, number> } {\n    const readings = this.sources.map((s) => ({ name: s.name, value: s.read(), weight: s.weight }));\n    const contributions: Record<string, number> = {};\n    readings.forEach((r) => { contributions[r.name] = r.value; });\n\n    let value: number;\n    switch (method) {\n      case \"weighted\": {\n        const totalWeight = readings.reduce((s, r) => s + r.weight, 0);\n        value = readings.reduce((s, r) => s + r.value * r.weight, 0) / (totalWeight || 1);\n        break;\n      }\n      case \"median\": {\n        const sorted = [...readings].sort((a, b) => a.value - b.value);\n        value = sorted[Math.floor(sorted.length / 2)].value;\n        break;\n      }\n      case \"min\":\n        value = Math.min(...readings.map((r) => r.value));\n        break;\n      case \"max\":\n        value = Math.max(...readings.map((r) => r.value));\n        break;\n      case \"product\":\n        value = readings.reduce((p, r) => p * Math.max(r.value, 0.01), 1);\n        break;\n      default:\n        value = readings.reduce((s, r) => s + r.value, 0) / readings.length;\n    }\n\n    return { value, contributions };\n  }\n\n  listSources(): string[] {\n    return this.sources.map((s) => s.name);\n  }\n\n  adjustWeight(name: string, newWeight: number): void {\n    const source = this.sources.find((s) => s.name === name);\n    if (source) source.weight = Math.max(0, newWeight);\n  }\n}\n\n// ─── Feedback Delay Compensator (Smith Predictor) ──────────────────────\n\nclass SmithPredictor {\n  private delayBuffer: number[] = [];\n  private modelOutput: number = 0;\n  private readonly delay: number;\n  private readonly modelGain: number;\n  private readonly modelTimeConstant: number;\n  private readonly dt: number;\n\n  constructor(delay: number, modelGain: number, modelTimeConstant: number, dt: number) {\n    this.delay = delay;\n    this.modelGain = modelGain;\n    this.modelTimeConstant = modelTimeConstant;\n    this.dt = dt;\n    this.delayBuffer = new Array(Math.max(1, Math.round(delay / dt))).fill(0);\n  }\n\n  predict(controlSignal: number, measuredOutput: number): number {\n    const alpha = this.dt / (this.modelTimeConstant + this.dt);\n    this.modelOutput = (1 - alpha) * this.modelOutput + alpha * this.modelGain * controlSignal;\n    this.delayBuffer.push(this.modelOutput);\n    const delayedOutput = this.delayBuffer.shift() ?? 0;\n    const predictedError = measuredOutput - delayedOutput;\n    return this.modelOutput + predictedError;\n  }\n\n  reset(): void {\n    this.delayBuffer = new Array(this.delayBuffer.length).fill(0);\n    this.modelOutput = 0;\n  }\n}\n\n// ─── Saturation / Anti-Windup Protection ───────────────────────────────\n\nclass AntiWindupProtector {\n  private accumulatedError = 0;\n  private readonly limit: number;\n  private readonly decayRate: number;\n\n  constructor(integralLimit: number = 10, decayRate: number = 0.1) {\n    this.limit = integralLimit;\n    this.decayRate = decayRate;\n  }\n\n  update(error: number, controlOutput: number, isSaturated: boolean): number {\n    if (isSaturated) {\n      this.accumulatedError = (1 - this.decayRate) * this.accumulatedError;\n    } else {\n      this.accumulatedError += error * this.decayRate;\n    }\n    this.accumulatedError = Math.max(-this.limit, Math.min(this.limit, this.accumulatedError));\n    return controlOutput + this.accumulatedError;\n  }\n\n  clamp(value: number, min: number, max: number): { value: number; saturated: boolean } {\n    const saturated = value < min || value > max;\n    return { value: Math.max(min, Math.min(max, value)), saturated };\n  }\n\n  reset(): void {\n    this.accumulatedError = 0;\n  }\n}\n\n// ─── Demo ──────────────────────────────────────────────────────────────\n\nasync function main() {\n  console.log(\"=== Extended Feedback Demo ===\\n\");\n\n  // 1. Feedback Controller with PID\n  let plantOutput = 0;\n  const sensor: Sensor = { read: () => plantOutput + (Math.random() - 0.5) * 0.1 };\n  const actuator: Actuator = { apply: (control) => { plantOutput += control * 0.1 - plantOutput * 0.05; } };\n  const pid = new PIDFeedbackController(2.0, 0.3, 0.05, 0.1, { min: -50, max: 50 });\n  const fc = new FeedbackController(sensor, actuator, pid, 100);\n  const trace = await fc.run(30);\n  const last = trace[trace.length - 1];\n  console.log(`Feedback Controller: ${trace.length} cycles, final error=${last.error.toFixed(3)}`);\n\n  // 2. Reinforcement Feedback Loop\n  const rl = new ReinforcementFeedbackLoop({\n    learningRate: 0.1, discountFactor: 0.9, explorationRate: 0.5,\n    stateCount: 5, actionCount: 3,\n  });\n  for (let ep = 0; ep < 200; ep++) {\n    rl.runEpisode((state, action) => {\n      const reward = action === 1 ? 1 : -0.1;\n      const nextState = Math.min(4, state + (action === 1 ? 1 : -1));\n      return { nextState: Math.max(0, nextState), reward, done: nextState >= 4 };\n    }, 20);\n  }\n  console.log(`\\nQ-Learning: avg reward (last 10) = ${rl.getAverageReward(10).toFixed(3)}`);\n  const qTable = rl.getQTable();\n  console.log(`Q-table max value: ${Math.max(...qTable.flat()).toFixed(3)}`);\n\n  // 3. Adaptive Threshold Detector\n  const detector = new AdaptiveThresholdDetector(15, 2.5);\n  const values = [1, 1.2, 0.8, 1.1, 0.9, 1.3, 1.0, 0.7, 1.1, 1.2, 5.0, 1.0, 0.9];\n  console.log(\"\\nAdaptive Threshold:\");\n  for (const v of values) {\n    detector.update(v);\n    const anomalous = detector.isAnomalous(v) ? \" ⚠ ANOMALOUS\" : \"\";\n    if (anomalous) console.log(`  value=${v.toFixed(1)} threshold=${detector.getThreshold().toFixed(2)}${anomalous}`);\n  }\n\n  // 4. Multi-Signal Fusion\n  const fusion = new MultiSignalFusion();\n  fusion.addSource({ name: \"accuracy\", weight: 0.5, read: () => 0.85 + Math.random() * 0.1 });\n  fusion.addSource({ name: \"latency\", weight: 0.3, read: () => 0.7 + Math.random() * 0.2 });\n  fusion.addSource({ name: \"coverage\", weight: 0.2, read: () => 0.9 + Math.random() * 0.05 });\n  const fused = fusion.fuse(\"weighted\");\n  console.log(`\\nMulti-Signal Fusion (weighted): ${fused.value.toFixed(3)}`);\n  console.log(`  Contributions: ${JSON.stringify(fused.contributions)}`);\n\n  // 5. Smith Predictor\n  const smith = new SmithPredictor(5, 1.0, 2.0, 0.5);\n  const predicted = smith.predict(10, 2.5);\n  console.log(`\\nSmith Predictor: predicted_output=${predicted.toFixed(3)}`);\n\n  // 6. Anti-Windup Protection\n  const aw = new AntiWindupProtector(5, 0.2);\n  let ctrlOutput = 0;\n  for (let i = 0; i < 10; i++) {\n    const { value, saturated } = aw.clamp(ctrlOutput, -10, 10);\n    ctrlOutput = aw.update(2.0, value, saturated);\n  }\n  console.log(`\\nAnti-Windup: output=${ctrlOutput.toFixed(3)}`);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts demonstrated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FeedbackController"
        }), " separates sensor, actuator, and controller concerns — any component can be swapped independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PIDFeedbackController"
        }), " implements proportional-integral-derivative control with integral clamping for anti-windup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ReinforcementFeedbackLoop"
        }), " uses Q-learning update rules (Bellman equation) to learn optimal actions from delayed rewards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AdaptiveThresholdDetector"
        }), " computes a moving-window mean and standard deviation, flagging values beyond ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mean + k·σ"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MultiSignalFusion"
        }), " combines signals via weighted, median, min, max, or product fusion strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SmithPredictor"
        }), " compensates for known feedback delays by modeling the plant and subtracting the delayed component"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AntiWindupProtector"
        }), " prevents integral windup by decaying the accumulated error when the actuator is saturated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-feedback-tools-oscillation-detection-cascade-control-feed-forward-system-id-and-deadband-filtering",
      children: "Advanced Feedback Tools: Oscillation Detection, Cascade Control, Feed-Forward, System ID, and Deadband Filtering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section adds specialized feedback analysis and control components: an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OscillationDetector"
      }), " that flags growing amplitude in the error signal, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CascadeController"
      }), " chaining multiple controllers in series, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeedForwardController"
      }), " that anticipates disturbances before feedback can react, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BumpTestAnalyzer"
      }), " for system identification from step response data, and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DeadbandFilter"
      }), " that ignores error changes below a configurable threshold to reduce dithering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-advanced-feedback-tools.ts\n// bun run ch04-advanced-feedback-tools.ts\n\n/*\n```mermaid\ngraph TD\n    subgraph \"Multi-Signal Fusion with Weighted Averaging\"\n        A[Signal 1: Accuracy] -->|w1=0.4| F[Weighted Average]\n        B[Signal 2: Latency] -->|w2=0.3| F\n        C[Signal 3: Coverage] -->|w3=0.2| F\n        D[Signal 4: Cost] -->|w4=0.1| F\n        E[Median Filter] --> F\n        F --> G{Fused Score}\n        G -->|Above Threshold| H[Execute]\n        G -->|Below Threshold| I[Adjust Parameters]\n        G -->|Oscillating| J[Reduce Gain]\n        I --> K[Re-evaluate]\n        J --> K\n        K --> A\n    end\n    \n    style H fill:#2ecc71,color:#fff\n    style G fill:#3498db,color:#fff\n*/\n*/\n\n// ─── OscillationDetector ───────────────────────────────────────────────\n\ninterface OscillationResult {\n  oscillating: boolean;\n  amplitude: number;\n  period: number | null;\n  growingAmplitude: boolean;\n  zeroCrossingCount: number;\n  recommendation: string;\n}\n\nclass OscillationDetector {\n  private errorHistory: number[] = [];\n  private readonly minSamples: number;\n  private readonly amplitudeGrowthThreshold: number;\n\n  constructor(minSamples: number = 6, amplitudeGrowthThreshold: number = 1.1) {\n    this.minSamples = minSamples;\n    this.amplitudeGrowthThreshold = amplitudeGrowthThreshold;\n  }\n\n  feed(error: number): void {\n    this.errorHistory.push(error);\n  }\n\n  analyze(): OscillationResult {\n    const n = this.errorHistory.length;\n    if (n &lt; this.minSamples) {\n      return { oscillating: false, amplitude: 0, period: null, growingAmplitude: false, zeroCrossingCount: 0, recommendation: \"Need more samples\" };\n    }\n\n    const recent = this.errorHistory.slice(-this.minSamples);\n    let zeroCrossings = 0;\n    for (let i = 1; i &lt; recent.length; i++) {\n      if (recent[i] * recent[i - 1] &lt; 0) zeroCrossings++;\n    }\n\n    const periods: number[] = [];\n    let lastZeroIdx: number | null = null;\n    for (let i = 0; i &lt; this.errorHistory.length; i++) {\n      if (Math.abs(this.errorHistory[i]) &lt; 0.001 || (i &gt; 0 && this.errorHistory[i] * this.errorHistory[i - 1] &lt; 0)) {\n        if (lastZeroIdx !== null) {\n          periods.push(i - lastZeroIdx);\n        }\n        lastZeroIdx = i;\n      }\n    }\n\n    const avgPeriod = periods.length > 0\n      ? periods.reduce((s, p) => s + p, 0) / periods.length\n      : null;\n\n    const halfN = Math.floor(n / 2);\n    const firstHalf = this.errorHistory.slice(0, halfN).map(Math.abs);\n    const secondHalf = this.errorHistory.slice(halfN).map(Math.abs);\n    const firstMean = firstHalf.reduce((s, v) => s + v, 0) / firstHalf.length;\n    const secondMean = secondHalf.reduce((s, v) => s + v, 0) / secondHalf.length;\n    const growingAmplitude = secondMean > firstMean * this.amplitudeGrowthThreshold;\n\n    const amplitude = recent.reduce((max, v) => Math.max(max, Math.abs(v)), 0);\n    const oscillating = zeroCrossings >= 3 && this.errorHistory.length >= 6;\n\n    let recommendation: string;\n    if (!oscillating) {\n      recommendation = \"No oscillation detected.\";\n    } else if (growingAmplitude) {\n      recommendation = \"CRITICAL: Oscillation with growing amplitude. Reduce gain immediately or apply damping.\";\n    } else if (amplitude > 10) {\n      recommendation = \"WARNING: Sustained large-amplitude oscillation. Consider reducing gain by 30-50%.\";\n    } else {\n      recommendation = \"Minor oscillation detected. Monitor trend. Consider slight gain reduction or deadband filter.\";\n    }\n\n    return { oscillating, amplitude, period: avgPeriod, growingAmplitude, zeroCrossingCount: zeroCrossings, recommendation };\n  }\n\n  reset(): void {\n    this.errorHistory = [];\n  }\n}\n\n// ─── CascadeController ────────────────────────────────────────────────\n\ninterface CascadeStage {\n  controller: {\n    compute: (error: number) => number;\n    reset: () => void;\n  };\n  name: string;\n  minOutput: number;\n  maxOutput: number;\n  proportional: number;\n  integral: number;\n}\n\nclass CascadeController {\n  private stages: CascadeStage[] = [];\n  private outputs: number[] = [];\n\n  addStage(name: string, kp: number, ki: number, minOutput: number, maxOutput: number): void {\n    let integral = 0;\n    let prevError = 0;\n    const dt = 0.01;\n\n    const controller = {\n      compute: (error: number): number => {\n        const p = kp * error;\n        integral += ki * error * dt;\n        integral = Math.max(minOutput, Math.min(maxOutput, integral));\n        const d = (error - prevError) / dt;\n        let output = p + integral + d;\n        output = Math.max(minOutput, Math.min(maxOutput, output));\n        prevError = error;\n        return output;\n      },\n      reset: () => { integral = 0; prevError = 0; },\n    };\n\n    this.stages.push({ controller, name, minOutput, maxOutput, proportional: kp, integral: ki });\n  }\n\n  compute(setpoint: number, measurement: number): number {\n    this.outputs = [];\n    let error = setpoint - measurement;\n\n    for (const stage of this.stages) {\n      const stageOutput = stage.controller.compute(error);\n      this.outputs.push(stageOutput);\n      error = stageOutput;\n    }\n\n    return this.outputs[this.outputs.length - 1];\n  }\n\n  simulate(\n    setpoint: number,\n    initialValue: number,\n    plantFn: (control: number) => number,\n    steps: number\n  ): Array&lt;{ step: number; measurement: number; control: number; stageOutputs: number[] }&gt; {\n    const trace: Array&lt;{ step: number; measurement: number; control: number; stageOutputs: number[] }&gt; = [];\n    let measurement = initialValue;\n\n    for (let i = 0; i &lt; steps; i++) {\n      const control = this.compute(setpoint, measurement);\n      measurement = plantFn(control);\n      trace.push({ step: i, measurement, control, stageOutputs: [...this.outputs] });\n    }\n\n    return trace;\n  }\n\n  reset(): void {\n    for (const stage of this.stages) {\n      stage.controller.reset();\n    }\n    this.outputs = [];\n  }\n\n  getStageNames(): string[] {\n    return this.stages.map((s) => s.name);\n  }\n}\n\n// ─── FeedForwardController ─────────────────────────────────────────────\n\ninterface FeedForwardConfig {\n  disturbanceGain: number;\n  modelInverseGain: number;\n  lookaheadSteps: number;\n}\n\nclass FeedForwardController {\n  private config: FeedForwardConfig;\n  private disturbanceHistory: number[] = [];\n  private feedbackOutput = 0;\n\n  constructor(config: FeedForwardConfig) {\n    this.config = config;\n  }\n\n  compute(setpoint: number, measurement: number, predictedDisturbance: number | null): number {\n    const feedbackError = setpoint - measurement;\n\n    // Feedback component (simple P)\n    const feedbackTerm = 0.5 * feedbackError;\n\n    // Feed-forward component: anticipate known disturbances\n    let ffTerm = 0;\n    if (predictedDisturbance !== null) {\n      ffTerm = -this.config.disturbanceGain * predictedDisturbance * this.config.modelInverseGain;\n    }\n\n    this.feedbackOutput = feedbackTerm + ffTerm;\n    return this.feedbackOutput;\n  }\n\n  recordDisturbance(disturbance: number): void {\n    this.disturbanceHistory.push(disturbance);\n    if (this.disturbanceHistory.length > this.config.lookaheadSteps) {\n      this.disturbanceHistory.shift();\n    }\n  }\n\n  predictNextDisturbance(): number | null {\n    if (this.disturbanceHistory.length &lt; 2) return null;\n    const last = this.disturbanceHistory[this.disturbanceHistory.length - 1];\n    const prev = this.disturbanceHistory[this.disturbanceHistory.length - 2];\n    const trend = last - prev;\n    return last + trend;\n  }\n\n  simulate(\n    setpoint: number,\n    initialValue: number,\n    steps: number,\n    disturbanceFn: (step: number) => number\n  ): Array&lt;{ step: number; measurement: number; disturbance: number; control: number; ffTerm: number }&gt; {\n    const trace: Array&lt;{ step: number; measurement: number; disturbance: number; control: number; ffTerm: number }&gt; = [];\n    let measurement = initialValue;\n\n    for (let i = 0; i &lt; steps; i++) {\n      const disturbance = disturbanceFn(i);\n      this.recordDisturbance(disturbance);\n      const predicted = this.predictNextDisturbance();\n      const control = this.compute(setpoint, measurement, predicted);\n      measurement = measurement + 0.1 * control + 0.05 * disturbance + (Math.random() - 0.5) * 0.1;\n      measurement = Math.max(0, measurement);\n\n      const ffOnly = predicted !== null ? -this.config.disturbanceGain * predicted * this.config.modelInverseGain : 0;\n      trace.push({ step: i, measurement, disturbance, control, ffTerm: ffOnly });\n    }\n\n    return trace;\n  }\n\n  reset(): void {\n    this.disturbanceHistory = [];\n    this.feedbackOutput = 0;\n  }\n}\n\n// ─── BumpTestAnalyzer (System Identification) ─────────────────────────\n\ninterface ProcessModel {\n  gain: number;\n  timeConstant: number;\n  deadTime: number;\n  fitPercent: number;\n}\n\nclass BumpTestAnalyzer {\n  identify(stepResponse: number[], stepTime: number, finalValue: number): ProcessModel {\n    const n = stepResponse.length;\n    const steadyState = stepResponse[n - 1];\n    const gain = finalValue > 0 ? steadyState / finalValue : 0;\n\n    const y63 = steadyState * 0.632;\n    const y28 = steadyState * 0.283;\n\n    let t63 = -1;\n    let t28 = -1;\n\n    for (let i = 0; i &lt; n; i++) {\n      if (t28 &lt; 0 && stepResponse[i] &gt;= y28) t28 = i;\n      if (t63 &lt; 0 && stepResponse[i] &gt;= y63) t63 = i;\n    }\n\n    const timeConstant = t63 > 0 && t28 > 0 ? 1.5 * (t63 - t28) : n / 3;\n    const deadTime = t28 > 0 ? Math.max(0, t28 - 0.4 * timeConstant) : 0;\n\n    const modelOutput = this.simulateModel(gain, timeConstant, deadTime, stepResponse.length, finalValue);\n    const ssRes = stepResponse.reduce((s, y, i) => s + (y - modelOutput[i]) ** 2, 0);\n    const ssTotal = stepResponse.reduce((s, y) => s + (y - stepResponse.reduce((a, b) => a + b, 0) / n) ** 2, 0);\n    const fitPercent = ssTotal > 0 ? Math.max(0, 100 * (1 - ssRes / ssTotal)) : 0;\n\n    return { gain, timeConstant: Math.max(0.1, timeConstant), deadTime: Math.max(0, deadTime), fitPercent };\n  }\n\n  private simulateModel(\n    gain: number, timeConstant: number, deadTime: number, steps: number, stepSize: number\n  ): number[] {\n    const output: number[] = [];\n    let value = 0;\n    const alpha = 1 / Math.max(1, timeConstant);\n    const deadSamples = Math.round(deadTime);\n\n    for (let i = 0; i &lt; steps; i++) {\n      const input = i >= deadSamples ? stepSize : 0;\n      value += alpha * (gain * input - value);\n      output.push(value);\n    }\n    return output;\n  }\n\n  recommendTuning(model: ProcessModel): { kp: number; ki: number; kd: number } {\n    const { gain, timeConstant, deadTime } = model;\n    if (gain &lt;= 0) return { kp: 0.5, ki: 0.1, kd: 0 };\n\n    const ratio = deadTime / Math.max(0.01, timeConstant);\n    let kp: number, ki: number, kd: number;\n\n    if (ratio &lt; 0.1) {\n      kp = 0.6 / gain;\n      ki = 0.5 / timeConstant;\n      kd = 0;\n    } else if (ratio &lt; 0.5) {\n      kp = 0.8 / gain;\n      ki = 0.3 / timeConstant;\n      kd = 0.1 * timeConstant;\n    } else {\n      kp = 0.4 / gain;\n      ki = 0.2 / timeConstant;\n      kd = 0;\n    }\n\n    return { kp, ki, kd };\n  }\n}\n\n// ─── DeadbandFilter ────────────────────────────────────────────────────\n\nclass DeadbandFilter {\n  private readonly threshold: number;\n  private lastOutput = 0;\n  private lastValidError = 0;\n  private suppressedCount = 0;\n\n  constructor(threshold: number) {\n    this.threshold = threshold;\n  }\n\n  apply(error: number): number {\n    const change = Math.abs(error - this.lastValidError);\n\n    if (change &lt; this.threshold) {\n      this.suppressedCount++;\n      return this.lastOutput;\n    }\n\n    this.lastOutput = error;\n    this.lastValidError = error;\n    this.suppressedCount = 0;\n    return error;\n  }\n\n  applyWithHysteresis(error: number, hysteresisFactor: number = 1.5): number {\n    const effectiveThreshold = this.suppressedCount > 3\n      ? this.threshold * hysteresisFactor\n      : this.threshold;\n\n    const change = Math.abs(error - this.lastValidError);\n    if (change &lt; effectiveThreshold) {\n      this.suppressedCount++;\n      return this.lastOutput;\n    }\n\n    this.lastOutput = error;\n    this.lastValidError = error;\n    this.suppressedCount = 0;\n    return error;\n  }\n\n  getSuppressedCount(): number {\n    return this.suppressedCount;\n  }\n\n  reset(): void {\n    this.lastOutput = 0;\n    this.lastValidError = 0;\n    this.suppressedCount = 0;\n  }\n\n  static applyToTrace(\n    trace: number[],\n    threshold: number,\n    hysteresis: boolean = false\n  ): { filtered: number[]; suppressed: number } {\n    const filter = new DeadbandFilter(threshold);\n    const filtered = trace.map((v) => hysteresis ? filter.applyWithHysteresis(v) : filter.apply(v));\n    return { filtered, suppressed: filter.getSuppressedCount() };\n  }\n}\n\n// ─── Demo ──────────────────────────────────────────────────────────────\n\nasync function main() {\n  console.log(\"=== Advanced Feedback Tools Demo ===\\n\");\n\n  // 1. Oscillation Detector\n  const detector = new OscillationDetector(8, 1.15);\n  const oscillatingErrors = [10, 8, -12, -6, 14, 9, -15, -8, 18, 10, -20, -11];\n  oscillatingErrors.forEach((e) => detector.feed(e));\n  const result = detector.analyze();\n  console.log(\"Oscillation Detector:\");\n  console.log(`  Oscillating: ${result.oscillating}`);\n  console.log(`  Amplitude: ${result.amplitude.toFixed(1)}`);\n  console.log(`  Period: ${result.period?.toFixed(1) ?? \"N/A\"} samples`);\n  console.log(`  Growing amplitude: ${result.growingAmplitude}`);\n  console.log(`  Zero crossings: ${result.zeroCrossingCount}`);\n  console.log(`  Recommendation: ${result.recommendation}`);\n\n  // 2. Cascade Controller\n  const cascade = new CascadeController();\n  cascade.addStage(\"inner-velocity\", 2.0, 0.1, -50, 50);\n  cascade.addStage(\"outer-position\", 0.8, 0.05, -100, 100);\n  const plant = (u: number) => u * 0.05 + (Math.random() - 0.5) * 0.2;\n  const cascadeTrace = cascade.simulate(100, 0, plant, 30);\n  const lastC = cascadeTrace[cascadeTrace.length - 1];\n  console.log(`\\nCascade Controller (${cascade.getStageNames().join(\" → \")}):`);\n  console.log(`  Stages: ${cascade.getStageNames().length}`);\n  console.log(`  Final measurement: ${lastC.measurement.toFixed(2)}`);\n  console.log(`  Final control: ${lastC.control.toFixed(2)}`);\n  console.log(`  Final error: ${(100 - lastC.measurement).toFixed(2)}`);\n\n  // 3. Feed-Forward Controller\n  const ff = new FeedForwardController({ disturbanceGain: 0.6, modelInverseGain: 0.8, lookaheadSteps: 3 });\n  const ffTrace = ff.simulate(100, 0, 20, (step) => step >= 10 && step &lt; 14 ? 40 : Math.random() * 2);\n  const lastFf = ffTrace[ffTrace.length - 1];\n  console.log(`\\nFeed-Forward Controller (with disturbance at step 10-13):`);\n  console.log(`  Final measurement: ${lastFf.measurement.toFixed(2)}`);\n  const maxDeviation = Math.max(...ffTrace.map((t) => Math.abs(100 - t.measurement)));\n  console.log(`  Max deviation from setpoint: ${maxDeviation.toFixed(2)}`);\n  console.log(`  FF term at peak disturbance: ${ffTrace.filter((t) => t.disturbance > 10).map((t) => t.ffTerm.toFixed(2)).join(\", \")}`);\n\n  // 4. Bump Test Analyzer\n  const bumpAnalyer = new BumpTestAnalyzer();\n  const stepResp: number[] = [];\n  let v = 0;\n  for (let i = 0; i &lt; 40; i++) {\n    v += (1.5 * 100 - v) / 8;\n    stepResp.push(v + (Math.random() - 0.5) * 2);\n  }\n  const model = bumpAnalyer.identify(stepResp, 0, 100);\n  console.log(`\\nBump Test Analyzer (System ID):`);\n  console.log(`  Process gain: ${model.gain.toFixed(3)}`);\n  console.log(`  Time constant: ${model.timeConstant.toFixed(1)} samples`);\n  console.log(`  Dead time: ${model.deadTime.toFixed(1)} samples`);\n  console.log(`  Fit: ${model.fitPercent.toFixed(0)}%`);\n\n  const tuning = bumpAnalyer.recommendTuning(model);\n  console.log(`  Recommended PID: Kp=${tuning.kp.toFixed(2)} Ki=${tuning.ki.toFixed(3)} Kd=${tuning.kd.toFixed(3)}`);\n\n  // 5. Deadband Filter\n  const noisyTrace: number[] = [];\n  for (let i = 0; i &lt; 30; i++) {\n    const trueVal = 50 * Math.exp(-i * 0.08);\n    noisyTrace.push(trueVal + (Math.random() - 0.5) * 3);\n  }\n  const { filtered, suppressed } = DeadbandFilter.applyToTrace(noisyTrace, 0.5, true);\n  console.log(`\\nDeadband Filter:`);\n  console.log(`  Raw range: [${Math.min(...noisyTrace).toFixed(1)}, ${Math.max(...noisyTrace).toFixed(1)}]`);\n  console.log(`  Values suppressed (cumulative): ${suppressed}`);\n  const changeCount = noisyTrace.reduce((s, val, i, arr) => s + (i > 0 && val !== arr[i - 1] ? 1 : 0), 0);\n  const filteredChangeCount = filtered.reduce((s, val, i, arr) => s + (i > 0 && val !== arr[i - 1] ? 1 : 0), 0);\n  console.log(`  Raw value changes: ${changeCount}, Filtered value changes: ${filteredChangeCount}`);\n  console.log(`  Dithering reduction: ${changeCount > 0 ? ((1 - filteredChangeCount / changeCount) * 100).toFixed(0) : 0}%`);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts demonstrated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OscillationDetector"
        }), " analyzes error signal zero crossings and amplitude trends to detect sustained or growing oscillations; provides concrete recommendations (reduce gain, apply damping, monitor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CascadeController"
        }), " chains multiple control stages in series (e.g., inner velocity loop feeding outer position loop), enabling tighter control of complex dynamics than a single controller"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FeedForwardController"
        }), " anticipates known disturbances using a model-inverse approach, compensating before the feedback loop can react; includes disturbance prediction via trend extrapolation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BumpTestAnalyzer"
        }), " performs system identification from step response data — estimates process gain, time constant, dead time, and model fit quality; recommends PID tuning parameters based on dead-time-to-time-constant ratio"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DeadbandFilter"
        }), " ignores error changes below a configurable threshold, reducing actuator dithering and controller chatter; includes hysteresis mode that widens the band after repeated suppression"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eval-driven loops"
        }), " are the general-purpose feedback mechanism: generate, score against explicit criteria, adjust parameters, and retry until quality converges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code review loops"
        }), " mirror real engineering workflows: AI authors, humans review with actionable line-level comments, AI applies fixes, and the cycle repeats until approval."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test-driven loops"
        }), " use tests as executable specifications — a passing test suite is the most objective success signal available to an agent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure-to-task conversion"
        }), " ensures that failures produce concrete next steps instead of dead ends. Each failed attempt shrinks the problem space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sweep loops"
        }), " scale feedback to entire collections — process items, detect failures, generate fix tasks, and iterate the fixes until resolution or escalation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All feedback loops must have explicit termination conditions: score thresholds, max iterations, plateau detection, and escalation paths."
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
          children: "What are the four termination conditions for an eval-driven loop? When would you use each one?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is \"actionable\" feedback important in a code review loop? Give an example of a non-actionable comment and rewrite it to be actionable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a test-driven loop differ from an eval-driven loop in terms of the evaluation signal? What advantage does this provide?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the failure-to-task conversion rule regarding subtask depth? Why is this rule important?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the sweep loop, what distinguishes a fix task that is re-queued from one that is escalated?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Weight-aware eval loop."
          }), " Modify Example 1 so that when a dimension scores below 0.5, its weight is temporarily doubled for the next iteration. This forces the agent to focus on its weakest area."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-file review."
          }), " Extend Example 2 so that the review loop handles multiple files in a single review round. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReviewComment"
          }), " type already has a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file"
          }), " field — modify ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReviewLoopAgent"
          }), " to track changes round by round across a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Map<string, string>"
          }), " of file paths to code contents."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sweep with dependency ordering."
          }), " Modify Example 3 so that tasks can declare dependencies (", (0,jsx_runtime.jsx)(_components.code, {
            children: "dependsOn: string[]"
          }), "). If task B depends on task A and A fails, B is deferred until A's fix task succeeds. If A's fix also fails, B is escalated without attempting execution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Adaptive max iterations."
          }), " Change the eval loop in Example 1 so that ", (0,jsx_runtime.jsx)(_components.code, {
            children: "maxIterations"
          }), " is not a fixed number. Instead, the agent computes a budget based on the importance score of the input prompt (higher importance = more iterations). Importance is derived from keyword matching (e.g., \"production\", \"security\", \"critical\" each add 2 extra iterations)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge",
      children: "Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a multi-stage feedback pipeline."
      }), " Create a class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeedbackPipeline"
      }), " that chains all three feedback loop patterns into a single pipeline:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eval phase:"
        }), " Run the prompt through an eval-driven loop (Example 1) to produce a first draft."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code review phase:"
        }), " Pass the output through a code review loop (Example 2) for human-style review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test phase:"
        }), " Run the reviewed code against a test suite. If tests fail, generate subtasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sweep phase:"
        }), " Collect all failures from the test phase and run a sweep loop (Example 3) to produce fix tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation:"
        }), " Any fix task that survives two sweep rounds is escalated."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement with simulated versions of each phase (no real LLM calls). The pipeline should accept a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PromptTask"
      }), " and return a structured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PipelineReport"
      }), " showing which phase each item passed or failed. Demonstrate with at least 5 prompt tasks covering different failure modes."]
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