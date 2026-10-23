"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4943],{

/***/ 4131
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    mermaid: "mermaid",
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
        children: " ┌──────────┐   generate   ┌─────────┐   score    ┌────────┐\r\n │  Agent   │ ────────────>│ Output  │ ──────────> │  Eval  │\r\n │          │<──────────── │         │<────────── │  (LLM  │\r\n │  (LLM)   │   adjust     │         │   scores   │  or fx)│\r\n └──────────┘              └─────────┘            └────────┘\n"
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
        children: "Round 1:  AI writes code ──> Human reviews ──> Feedback\r\nRound 2:  AI applies feedback ──> Human re-reviews ──> Approve or iterate\r\nRound N:  (repeat until approval or max rounds)\n"
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
        children: "Step 1:  Write test (fails) ──> Agent implements ──> Run test\r\nStep 2:  Test passes? ──> Done.  Test fails? ──> Agent debugs and retries.\n"
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
        children: "Task: \"Implement user authentication\"\r\n  ├─ Step 1: Add password hashing ──> FAIL (bcrypt import error)\r\n  │      └─ New subtask: \"Install bcrypt package and verify import\"\r\n  ├─ Step 2: Add login endpoint ──> FAIL (missing JWT secret)\r\n  │      └─ New subtask: \"Add JWT secret to config and wire into login flow\"\r\n  └─ Step 3: Add session middleware ──> SUCCESS\n"
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
        children: " ┌──────────┐   for each    ┌───────────┐   pass     ┌────────┐\r\n │  Input   │ ────────────> │  Process  │ ──────────>│  Done  │\r\n │  Queue   │               │  Agent    │            │        │\r\n └──────────┘               └───────────┘            └────────┘\r\n                                  │ fail\r\n                                  v\r\n                            ┌──────────┐\r\n                            │  Create   │\r\n                            │  Fix Task │\r\n                            └──────────┘\n"
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
        children: "// ch04-example1-eval-loop.ts\r\n// Bun: bun run ch04-example1-eval-loop.ts\r\n\r\ninterface EvalCriterion {\r\n  name: string;\r\n  weight: number;\r\n  score: (output: string) => number;\r\n}\r\n\r\ninterface EvalResult {\r\n  overallScore: number;\r\n  dimensionScores: Record<string, number>;\r\n  feedback: string;\r\n}\r\n\r\ninterface EvalLoopConfig {\r\n  maxIterations: number;\r\n  minScore: number;\r\n  plateauWindow: number;\r\n  improvementThreshold: number;\r\n}\r\n\r\ninterface GeneratorInput {\r\n  prompt: string;\r\n  context: Record<string, unknown>;\r\n}\r\n\r\nclass EvalLoopAgent {\r\n  private config: EvalLoopConfig;\r\n  private criteria: EvalCriterion[] = [];\r\n  private iterationHistory: Array<{ iteration: number; score: number; output: string }> = [];\r\n  private currentParameters: Record<string, number> = {\r\n    temperature: 0.8,\r\n    topP: 0.9,\r\n    repetitionPenalty: 1.0,\r\n  };\r\n\r\n  constructor(config: Partial<EvalLoopConfig> = {}) {\r\n    this.config = {\r\n      maxIterations: 5,\r\n      minScore: 0.8,\r\n      plateauWindow: 2,\r\n      improvementThreshold: 0.05,\r\n      ...config,\r\n    };\r\n  }\r\n\r\n  addCriterion(criterion: EvalCriterion): void {\r\n    this.criteria.push(criterion);\r\n  }\r\n\r\n  private simulateGenerate(input: GeneratorInput, params: Record<string, number>): string {\r\n    const quality = Math.min(1, params.temperature * 0.5 + Math.random() * 0.5);\r\n    let output = `Generated response for: \"${input.prompt}\"\\n`;\r\n    output += `Parameters: temp=${params.temperature.toFixed(2)}, `;\r\n    output += `topP=${params.topP.toFixed(2)}\\n---\\n`;\r\n    if (quality > 0.7) {\r\n      output += \"This is a high-quality response that addresses the prompt thoroughly.\";\r\n    } else if (quality > 0.4) {\r\n      output += \"This response covers the topic but lacks depth in some areas.\";\r\n    } else {\r\n      output += \"Brief response that partially addresses the prompt.\";\r\n    }\r\n    return output;\r\n  }\r\n\r\n  private evaluate(output: string): EvalResult {\r\n    let totalWeight = 0;\r\n    let weightedSum = 0;\r\n    const dimensionScores: Record<string, number> = {};\r\n\r\n    for (const criterion of this.criteria) {\r\n      const score = criterion.score(output);\r\n      dimensionScores[criterion.name] = score;\r\n      weightedSum += score * criterion.weight;\r\n      totalWeight += criterion.weight;\r\n    }\r\n\r\n    const overallScore = totalWeight > 0 ? weightedSum / totalWeight : 0;\r\n    const worstDimension = Object.entries(dimensionScores).sort((a, b) => a[1] - b[1])[0];\r\n    const feedback = overallScore < this.config.minScore\r\n      ? `Lowest dimension: ${worstDimension[0]} (${(worstDimension[1] * 100).toFixed(0)}%). Improve ${worstDimension[0]}.`\r\n      : \"All criteria met or exceeded.\";\r\n\r\n    return { overallScore, dimensionScores, feedback };\r\n  }\r\n\r\n  private adjustParameters(iteration: number, lastScore: number, prevScore: number | null): void {\r\n    if (prevScore === null) {\r\n      this.currentParameters.temperature = 0.8 - iteration * 0.1;\r\n    } else if (lastScore < prevScore) {\r\n      this.currentParameters.temperature = Math.max(0.1, this.currentParameters.temperature - 0.1);\r\n      this.currentParameters.repetitionPenalty += 0.1;\r\n    } else {\r\n      this.currentParameters.temperature = Math.min(1.5, this.currentParameters.temperature + 0.05);\r\n    }\r\n    this.currentParameters.temperature = Math.max(0.1, Math.min(1.5, this.currentParameters.temperature));\r\n  }\r\n\r\n  async run(input: GeneratorInput): Promise<{ output: string; history: typeof this.iterationHistory }> {\r\n    let prevScore: number | null = null;\r\n    let plateauCount = 0;\r\n\r\n    for (let i = 0; i < this.config.maxIterations; i++) {\r\n      console.log(`\\n=== Iteration ${i + 1}/${this.config.maxIterations} ===`);\r\n\r\n      const output = this.simulateGenerate(input, this.currentParameters);\r\n      const evalResult = this.evaluate(output);\r\n\r\n      this.iterationHistory.push({\r\n        iteration: i + 1,\r\n        score: evalResult.overallScore,\r\n        output,\r\n      });\r\n\r\n      console.log(`  Score: ${(evalResult.overallScore * 100).toFixed(0)}%`);\r\n      console.log(`  Dimensions: ${JSON.stringify(evalResult.dimensionScores)}`);\r\n      console.log(`  Parameters: temp=${this.currentParameters.temperature.toFixed(2)}`);\r\n      console.log(`  Feedback: ${evalResult.feedback}`);\r\n\r\n      if (evalResult.overallScore >= this.config.minScore) {\r\n        console.log(`  => Score threshold met. Stopping.`);\r\n        return { output, history: this.iterationHistory };\r\n      }\r\n\r\n      if (prevScore !== null) {\r\n        const improvement = evalResult.overallScore - prevScore;\r\n        if (improvement < 0) {\r\n          console.log(`  => Score regressed. Rolling back and adjusting.`);\r\n        } else if (improvement < this.config.improvementThreshold) {\r\n          plateauCount++;\r\n          console.log(`  => Plateau detected (${plateauCount}/${this.config.plateauWindow})`);\r\n          if (plateauCount >= this.config.plateauWindow) {\r\n            console.log(`  => Max plateau reached. Stopping.`);\r\n            return { output, history: this.iterationHistory };\r\n          }\r\n        } else {\r\n          plateauCount = 0;\r\n        }\r\n      }\r\n\r\n      this.adjustParameters(i + 1, evalResult.overallScore, prevScore);\r\n      prevScore = evalResult.overallScore;\r\n    }\r\n\r\n    console.log(`\\n=> Max iterations (${this.config.maxIterations}) reached. Returning best result.`);\r\n    const best = this.iterationHistory.reduce((a, b) => (a.score > b.score ? a : b));\r\n    return { output: best.output, history: this.iterationHistory };\r\n  }\r\n}\r\n\r\nasync function main() {\r\n  const agent = new EvalLoopAgent({ maxIterations: 4, minScore: 0.75 });\r\n\r\n  agent.addCriterion({\r\n    name: \"relevance\",\r\n    weight: 0.4,\r\n    score: (output) => {\r\n      if (output.includes(\"addresses the prompt\")) return 0.9;\r\n      if (output.includes(\"covers the topic\")) return 0.6;\r\n      return 0.3;\r\n    },\r\n  });\r\n\r\n  agent.addCriterion({\r\n    name: \"detail\",\r\n    weight: 0.35,\r\n    score: (output) => {\r\n      if (output.includes(\"high-quality\")) return 0.85;\r\n      if (output.includes(\"lacks depth\")) return 0.5;\r\n      return 0.2;\r\n    },\r\n  });\r\n\r\n  agent.addCriterion({\r\n    name: \"clarity\",\r\n    weight: 0.25,\r\n    score: (_output) => 0.7 + Math.random() * 0.2,\r\n  });\r\n\r\n  const result = await agent.run({\r\n    prompt: \"Explain the CAP theorem in distributed systems.\",\r\n    context: { audience: \"senior engineers\", maxTokens: 500 },\r\n  });\r\n\r\n  console.log(\"\\n=== Result ===\");\r\n  console.log(result.output);\r\n  console.log(`\\nIterations: ${result.history.length}`);\r\n  console.log(`Best score: ${(Math.max(...result.history.map((h) => h.score)) * 100).toFixed(0)}%`);\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-reviewloopagent--ai-writes-human-reviews-ai-fixes",
      children: "Example 2: ReviewLoopAgent — AI Writes, Human Reviews, AI Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-example2-review-loop.ts\r\n// Bun: bun run ch04-example2-review-loop.ts\r\n\r\ninterface ReviewComment {\r\n  file: string;\r\n  line: number;\r\n  severity: \"error\" | \"warning\" | \"nit\";\r\n  message: string;\r\n  suggestion: string;\r\n}\r\n\r\ninterface ReviewRound {\r\n  round: number;\r\n  code: string;\r\n  comments: ReviewComment[];\r\n  approved: boolean;\r\n}\r\n\r\nclass ReviewLoopAgent {\r\n  private currentRound = 0;\r\n  private readonly maxRounds: number;\r\n  private history: ReviewRound[] = [];\r\n\r\n  constructor(maxRounds = 3) {\r\n    this.maxRounds = maxRounds;\r\n  }\r\n\r\n  private simulateWriteCode(task: string): string {\r\n    const templates: Record<string, string> = {\r\n      \"add-user-endpoint\": `import { Router } from \"express\";\r\nimport { hash } from \"bcrypt\";\r\nimport { prisma } from \"../db\";\r\n\r\nconst router = Router();\r\n\r\nrouter.post(\"/users\", async (req, res) => {\r\n  const { email, password, name } = req.body;\r\n  const hashed = await hash(password, 10);\r\n  const user = await prisma.user.create({\r\n    data: { email, password: hashed, name },\r\n  });\r\n  res.status(201).json(user);\r\n});\r\n\r\nexport default router;`,\r\n\r\n      \"add-login-endpoint\": `import { Router } from \"express\";\r\nimport { compare } from \"bcrypt\";\r\nimport { sign } from \"jsonwebtoken\";\r\nimport { prisma } from \"../db\";\r\n\r\nconst router = Router();\r\n\r\nrouter.post(\"/login\", async (req, res) => {\r\n  const { email, password } = req.body;\r\n  const user = await prisma.user.findUnique({ where: { email } });\r\n  if (!user) return res.status(401).json({ error: \"Invalid credentials\" });\r\n  const valid = await compare(password, user.password);\r\n  if (!valid) return res.status(401).json({ error: \"Invalid credentials\" });\r\n  const token = sign({ userId: user.id }, process.env.JWT_SECRET!);\r\n  res.json({ token });\r\n});\r\n\r\nexport default router;`,\r\n    };\r\n\r\n    return templates[task] ?? `// Implement ${task}\\nexport function solve() {\\n  // TODO\\n}`;\r\n  }\r\n\r\n  private simulateHumanReview(code: string): ReviewComment[] {\r\n    const comments: ReviewComment[] = [];\r\n    const lines = code.split(\"\\n\");\r\n\r\n    for (let i = 0; i < lines.length; i++) {\r\n      const line = lines[i];\r\n      const lineNum = i + 1;\r\n\r\n      if (line.includes(\"any\")) {\r\n        comments.push({\r\n          file: \"impl.ts\",\r\n          line: lineNum,\r\n          severity: \"error\",\r\n          message: \"Avoid `any` type. Use a proper interface or type alias.\",\r\n          suggestion: line.replace(\"any\", \"unknown\"),\r\n        });\r\n      }\r\n\r\n      if (line.includes(\"process.env\") && !line.includes(\"!\")) {\r\n        comments.push({\r\n          file: \"impl.ts\",\r\n          line: lineNum,\r\n          severity: \"warning\",\r\n          message: \"Environment variable access without non-null assertion. Consider validating at startup.\",\r\n          suggestion: line.replace(\"process.env.\", \"process.env.\").replace(\";\", \"!;\"),\r\n        });\r\n      }\r\n\r\n      if (line.includes(\"TODO\")) {\r\n        comments.push({\r\n          file: \"impl.ts\",\r\n          line: lineNum,\r\n          severity: \"warning\",\r\n          message: \"TODO left in code. Complete the implementation or add a tracking issue.\",\r\n          suggestion: \"Implement the function body or add a @todo comment with an issue link.\",\r\n        });\r\n      }\r\n    }\r\n\r\n    comments.push({\r\n      file: \"impl.ts\",\r\n      line: 1,\r\n      severity: \"nit\",\r\n      message: \"Consider adding JSDoc comments to exported functions.\",\r\n      suggestion: \"/** Creates a new user. */\",\r\n    });\r\n\r\n    return comments;\r\n  }\r\n\r\n  private applyFeedback(code: string, comments: ReviewComment[]): string {\r\n    let result = code;\r\n    for (const comment of comments) {\r\n      if (comment.severity === \"error\") {\r\n        result = result.replace(/any/g, \"unknown\");\r\n      }\r\n      if (comment.message.includes(\"TODOs\")) {\r\n        result = result.replace(\"// TODO\", \"// Implemented\");\r\n      }\r\n    }\r\n    return result;\r\n  }\r\n\r\n  async run(task: string): Promise<ReviewRound> {\r\n    let code = this.simulateWriteCode(task);\r\n\r\n    while (this.currentRound < this.maxRounds) {\r\n      this.currentRound++;\r\n      console.log(`\\n=== Review Round ${this.currentRound} ===`);\r\n\r\n      const comments = this.simulateHumanReview(code);\r\n      const errors = comments.filter((c) => c.severity === \"error\").length;\r\n      const warnings = comments.filter((c) => c.severity === \"warning\").length;\r\n      const nits = comments.filter((c) => c.severity === \"nit\").length;\r\n\r\n      console.log(`  Errors: ${errors}, Warnings: ${warnings}, Nits: ${nits}`);\r\n\r\n      for (const comment of comments) {\r\n        console.log(`  [${comment.severity}] L${comment.line}: ${comment.message}`);\r\n      }\r\n\r\n      const approved = errors === 0;\r\n\r\n      this.history.push({ round: this.currentRound, code, comments, approved });\r\n\r\n      if (approved) {\r\n        console.log(\"  => Approved! No errors remaining.\");\r\n        return this.history[this.history.length - 1];\r\n      }\r\n\r\n      if (this.currentRound < this.maxRounds) {\r\n        code = this.applyFeedback(code, comments);\r\n        console.log(\"  => Applied fixes. Re-submitting for review...\");\r\n      }\r\n    }\r\n\r\n    console.log(`\\n=> Max review rounds (${this.maxRounds}) reached.`);\r\n    return this.history[this.history.length - 1];\r\n  }\r\n\r\n  getHistory(): ReviewRound[] {\r\n    return this.history;\r\n  }\r\n}\r\n\r\nasync function main() {\r\n  const agent = new ReviewLoopAgent(3);\r\n\r\n  const result = await agent.run(\"add-user-endpoint\");\r\n\r\n  console.log(\"\\n=== Review History ===\");\r\n  for (const round of agent.getHistory()) {\r\n    console.log(`\\nRound ${round.round}: ${round.approved ? \"APPROVED\" : \"NEEDS WORK\"}`);\r\n    console.log(`  ${round.comments.length} comments`);\r\n  }\r\n\r\n  console.log(`\\nFinal approved: ${result.approved}`);\r\n  console.log(\"Final code:\");\r\n  console.log(result.code);\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-sweeploop--process-detect-failures-create-fix-tasks",
      children: "Example 3: SweepLoop — Process, Detect Failures, Create Fix Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-example3-sweep-loop.ts\r\n// Bun: bun run ch04-example3-sweep-loop.ts\r\n\r\ninterface Task {\r\n  id: string;\r\n  description: string;\r\n  category: string;\r\n  priority: \"low\" | \"medium\" | \"high\" | \"critical\";\r\n}\r\n\r\ninterface TaskResult {\r\n  taskId: string;\r\n  succeeded: boolean;\r\n  error?: string;\r\n  output?: string;\r\n}\r\n\r\ninterface FixTask {\r\n  id: string;\r\n  parentTaskId: string;\r\n  description: string;\r\n  error: string;\r\n  category: string;\r\n  priority: \"low\" | \"medium\" | \"high\" | \"critical\";\r\n}\r\n\r\nclass SweepLoop {\r\n  private fixTasks: FixTask[] = [];\r\n  private processedCount = 0;\r\n  private fixRound = 0;\r\n  private readonly maxFixRounds: number;\r\n\r\n  constructor(maxFixRounds = 2) {\r\n    this.maxFixRounds = maxFixRounds;\r\n  }\r\n\r\n  private async executeTask(task: Task): Promise<TaskResult> {\r\n    await new Promise((r) => setTimeout(r, 10 + Math.random() * 20));\r\n    const willFail = Math.random() < 0.4;\r\n    if (willFail) {\r\n      const errors = [\r\n        \"ModuleNotFoundError: No module named 'requests'\",\r\n        \"TypeError: Cannot read properties of undefined (reading 'map')\",\r\n        \"SyntaxError: Unexpected token ) in JSON at position 42\",\r\n        \"TimeoutError: Connection to database timed out\",\r\n        \"AssertionError: expected 5 to equal 3\",\r\n      ];\r\n      return {\r\n        taskId: task.id,\r\n        succeeded: false,\r\n        error: errors[Math.floor(Math.random() * errors.length)],\r\n      };\r\n    }\r\n    return {\r\n      taskId: task.id,\r\n      succeeded: true,\r\n      output: `Successfully completed: ${task.description}`,\r\n    };\r\n  }\r\n\r\n  private severityToPriority(severity: number): Task[\"priority\"] {\r\n    if (severity > 0.8) return \"critical\";\r\n    if (severity > 0.5) return \"high\";\r\n    if (severity > 0.2) return \"medium\";\r\n    return \"low\";\r\n  }\r\n\r\n  private parseErrorForFixTask(error: string, parent: Task): string {\r\n    if (error.includes(\"ModuleNotFoundError\")) {\r\n      return `Install missing dependency for ${parent.description}. Error: ${error}`;\r\n    }\r\n    if (error.includes(\"TypeError\")) {\r\n      return `Fix null/undefined check in ${parent.description}. Error: ${error}`;\r\n    }\r\n    if (error.includes(\"SyntaxError\")) {\r\n      return `Fix JSON parsing in ${parent.description}. Error: ${error}`;\r\n    }\r\n    if (error.includes(\"TimeoutError\")) {\r\n      return `Add connection retry logic or increase timeout for ${parent.description}. Error: ${error}`;\r\n    }\r\n    if (error.includes(\"AssertionError\")) {\r\n      return `Fix incorrect return value in ${parent.description}. Error: ${error}`;\r\n    }\r\n    return `General fix for ${parent.description}: ${error}`;\r\n  }\r\n\r\n  private createFixTask(task: Task, result: TaskResult): FixTask {\r\n    return {\r\n      id: `fix-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,\r\n      parentTaskId: task.id,\r\n      description: this.parseErrorForFixTask(result.error!, task),\r\n      error: result.error!,\r\n      category: task.category,\r\n      priority: task.priority === \"critical\" ? \"critical\" : \"medium\",\r\n    };\r\n  }\r\n\r\n  async sweep(tasks: Task[]): Promise<{\r\n    successes: TaskResult[];\r\n    failures: TaskResult[];\r\n    fixTasks: FixTask[];\r\n    resolvedByFixes: TaskResult[];\r\n  }> {\r\n    const successes: TaskResult[] = [];\r\n    const failures: TaskResult[] = [];\r\n    const resolvedByFixes: TaskResult[] = [];\r\n\r\n    console.log(`=== SWEEP: Processing ${tasks.length} tasks ===\\n`);\r\n\r\n    for (const task of tasks) {\r\n      this.processedCount++;\r\n      console.log(`[${this.processedCount}/${tasks.length}] ${task.description} (${task.priority})`);\r\n      const result = await this.executeTask(task);\r\n      if (result.succeeded) {\r\n        successes.push(result);\r\n        console.log(`  => OK`);\r\n      } else {\r\n        failures.push(result);\r\n        const fixTask = this.createFixTask(task, result);\r\n        this.fixTasks.push(fixTask);\r\n        console.log(`  => FAIL: ${result.error}`);\r\n        console.log(`  => Created fix task: ${fixTask.description.slice(0, 60)}...`);\r\n      }\r\n    }\r\n\r\n    if (this.fixTasks.length > 0 && this.maxFixRounds > 0) {\r\n      console.log(`\\n=== FIX ROUND ${++this.fixRound}: Processing ${this.fixTasks.length} fix tasks ===\\n`);\r\n      const pendingFixes = [...this.fixTasks];\r\n      this.fixTasks = [];\r\n\r\n      for (const fix of pendingFixes) {\r\n        console.log(`[FIX] ${fix.description.slice(0, 60)}...`);\r\n        const result = await this.executeTask({\r\n          id: fix.id,\r\n          description: fix.description,\r\n          category: fix.category,\r\n          priority: fix.priority,\r\n        });\r\n        if (result.succeeded) {\r\n          resolvedByFixes.push(result);\r\n          console.log(`  => FIX SUCCEEDED`);\r\n        } else {\r\n          console.log(`  => FIX FAILED: ${result.error}`);\r\n          if (this.fixRound < this.maxFixRounds) {\r\n            const subFix = this.createFixTask(\r\n              { id: fix.parentTaskId, description: fix.description, category: fix.category, priority: fix.priority },\r\n              result\r\n            );\r\n            this.fixTasks.push(subFix);\r\n            console.log(`  => Re-queued for next fix round`);\r\n          } else {\r\n            console.log(`  => Max fix rounds reached. Escalating.`);\r\n          }\r\n        }\r\n      }\r\n\r\n      if (this.fixTasks.length > 0 && this.fixRound < this.maxFixRounds) {\r\n        const remaining = await this.sweep(\r\n          this.fixTasks.map((f) => ({\r\n            id: f.id,\r\n            description: f.description,\r\n            category: f.category,\r\n            priority: f.priority,\r\n          }))\r\n        );\r\n        return {\r\n          successes: [...successes, ...remaining.successes],\r\n          failures: [...failures, ...remaining.failures],\r\n          fixTasks: remaining.fixTasks,\r\n          resolvedByFixes: [...resolvedByFixes, ...remaining.resolvedByFixes],\r\n        };\r\n      }\r\n    }\r\n\r\n    return { successes, failures, fixTasks: this.fixTasks, resolvedByFixes };\r\n  }\r\n}\r\n\r\nasync function main() {\r\n  const sweeper = new SweepLoop(2);\r\n\r\n  const tasks: Task[] = [\r\n    { id: \"t1\", description: \"Update axios to v1.7.0\", category: \"deps\", priority: \"high\" },\r\n    { id: \"t2\", description: \"Add input validation to signup form\", category: \"feature\", priority: \"high\" },\r\n    { id: \"t3\", description: \"Fix pagination off-by-one\", category: \"bug\", priority: \"medium\" },\r\n    { id: \"t4\", description: \"Add rate limiting to login endpoint\", category: \"security\", priority: \"critical\" },\r\n    { id: \"t5\", description: \"Refactor user service to use repository pattern\", category: \"refactor\", priority: \"low\" },\r\n    { id: \"t6\", description: \"Upgrade ESLint config to flat config\", category: \"tooling\", priority: \"medium\" },\r\n    { id: \"t7\", description: \"Add integration test for payment flow\", category: \"testing\", priority: \"high\" },\r\n    { id: \"t8\", description: \"Replace moment.js with date-fns\", category: \"deps\", priority: \"low\" },\r\n  ];\r\n\r\n  const result = await sweeper.sweep(tasks);\r\n\r\n  console.log(\"\\n=== SWEEP RESULTS ===\");\r\n  console.log(`Total tasks: ${tasks.length}`);\r\n  console.log(`Immediate successes: ${result.successes.length}`);\r\n  console.log(`Immediate failures: ${result.failures.length}`);\r\n  console.log(`Resolved by auto-fix: ${result.resolvedByFixes.length}`);\r\n  console.log(`Unresolved (escalated): ${result.fixTasks.length}`);\r\n  console.log(`Final pass rate: ${((result.successes.length + result.resolvedByFixes.length) / tasks.length * 100).toFixed(0)}%`);\r\n\r\n  if (result.fixTasks.length > 0) {\r\n    console.log(\"\\n=== ESCALATED FIX TASKS ===\");\r\n    for (const fix of result.fixTasks) {\r\n      console.log(`  ${fix.id}: ${fix.description}`);\r\n      console.log(`    Priority: ${fix.priority} | Original error: ${fix.error}`);\r\n    }\r\n  }\r\n}\r\n\r\nawait main();\n"
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
        children: "// ch04-advanced-feedback.ts\r\n// bun run ch04-advanced-feedback.ts\r\n\r\n// ─── Generic Feedback Controller ───────────────────────────────────────\r\n\r\ninterface Sensor {\r\n  read(): number;\r\n}\r\n\r\ninterface Actuator {\r\n  apply(control: number): void;\r\n}\r\n\r\ninterface Controller {\r\n  compute(setpoint: number, measurement: number): number;\r\n  reset(): void;\r\n}\r\n\r\nclass FeedbackController {\r\n  private sensor: Sensor;\r\n  private actuator: Actuator;\r\n  private controller: Controller;\r\n  private setpoint: number;\r\n  private trace: Array<{ cycle: number; measurement: number; control: number; error: number }> = [];\r\n  private cycle = 0;\r\n\r\n  constructor(sensor: Sensor, actuator: Actuator, controller: Controller, setpoint: number) {\r\n    this.sensor = sensor;\r\n    this.actuator = actuator;\r\n    this.controller = controller;\r\n    this.setpoint = setpoint;\r\n  }\r\n\r\n  async run(cycles: number): Promise<typeof this.trace> {\r\n    for (let i = 0; i < cycles; i++) {\r\n      this.cycle++;\r\n      const measurement = this.sensor.read();\r\n      const error = this.setpoint - measurement;\r\n      const control = this.controller.compute(this.setpoint, measurement);\r\n      this.actuator.apply(control);\r\n      this.trace.push({ cycle: this.cycle, measurement, control, error });\r\n    }\r\n    return this.trace;\r\n  }\r\n\r\n  changeSetpoint(newSetpoint: number): void {\r\n    this.setpoint = newSetpoint;\r\n  }\r\n\r\n  reset(): void {\r\n    this.controller.reset();\r\n    this.trace = [];\r\n    this.cycle = 0;\r\n  }\r\n\r\n  getTrace(): typeof this.trace {\r\n    return [...this.trace];\r\n  }\r\n}\r\n\r\n// ─── PID Controller (imported pattern, re-implemented for feedback context) ───\r\n\r\nclass PIDFeedbackController implements Controller {\r\n  private integral = 0;\r\n  private prevError = 0;\r\n  private outputMin: number;\r\n  private outputMax: number;\r\n\r\n  constructor(\r\n    private kp: number,\r\n    private ki: number,\r\n    private kd: number,\r\n    private dt: number,\r\n    limits?: { min: number; max: number }\r\n  ) {\r\n    this.outputMin = limits?.min ?? -Infinity;\r\n    this.outputMax = limits?.max ?? Infinity;\r\n  }\r\n\r\n  compute(setpoint: number, measurement: number): number {\r\n    const error = setpoint - measurement;\r\n    const proportional = this.kp * error;\r\n    this.integral += this.ki * error * this.dt;\r\n    this.integral = Math.max(this.outputMin, Math.min(this.outputMax, this.integral));\r\n    const derivative = this.kd * ((error - this.prevError) / (this.dt || 1e-6));\r\n    let output = proportional + this.integral + derivative;\r\n    output = Math.max(this.outputMin, Math.min(this.outputMax, output));\r\n    this.prevError = error;\r\n    return output;\r\n  }\r\n\r\n  reset(): void {\r\n    this.integral = 0;\r\n    this.prevError = 0;\r\n  }\r\n}\r\n\r\n// ─── Reinforcement Feedback Loop (Q-Learning Update) ───────────────────\r\n\r\ninterface QLearningConfig {\r\n  learningRate: number;\r\n  discountFactor: number;\r\n  explorationRate: number;\r\n  stateCount: number;\r\n  actionCount: number;\r\n}\r\n\r\nclass ReinforcementFeedbackLoop {\r\n  private qTable: number[][];\r\n  private config: QLearningConfig;\r\n  private episodeRewards: number[] = [];\r\n  private currentEpisode = 0;\r\n\r\n  constructor(config: QLearningConfig) {\r\n    this.config = config;\r\n    this.qTable = Array.from({ length: config.stateCount }, () =>\r\n      Array.from({ length: config.actionCount }, () => Math.random() * 0.1)\r\n    );\r\n  }\r\n\r\n  selectAction(state: number): number {\r\n    if (Math.random() < this.config.explorationRate) {\r\n      return Math.floor(Math.random() * this.config.actionCount);\r\n    }\r\n    return this.qTable[state].indexOf(Math.max(...this.qTable[state]));\r\n  }\r\n\r\n  update(state: number, action: number, reward: number, nextState: number): void {\r\n    const { learningRate: alpha, discountFactor: gamma } = this.config;\r\n    const currentQ = this.qTable[state][action];\r\n    const maxNextQ = Math.max(...this.qTable[nextState]);\r\n    this.qTable[state][action] = currentQ + alpha * (reward + gamma * maxNextQ - currentQ);\r\n  }\r\n\r\n  runEpisode(\r\n    env: (state: number, action: number) => { nextState: number; reward: number; done: boolean },\r\n    maxSteps: number\r\n  ): { totalReward: number; steps: number } {\r\n    this.currentEpisode++;\r\n    let state = 0;\r\n    let totalReward = 0;\r\n    let steps = 0;\r\n\r\n    for (let i = 0; i < maxSteps; i++) {\r\n      const action = this.selectAction(state);\r\n      const { nextState, reward, done } = env(state, action);\r\n      this.update(state, action, reward, nextState);\r\n      totalReward += reward;\r\n      state = nextState;\r\n      steps++;\r\n      if (done) break;\r\n    }\r\n\r\n    this.episodeRewards.push(totalReward);\r\n\r\n    if (this.currentEpisode % 100 === 0) {\r\n      this.config.explorationRate = Math.max(0.01, this.config.explorationRate * 0.95);\r\n    }\r\n\r\n    return { totalReward, steps };\r\n  }\r\n\r\n  getQTable(): number[][] {\r\n    return this.qTable.map((row) => [...row]);\r\n  }\r\n\r\n  getAverageReward(lastN: number = 10): number {\r\n    const recent = this.episodeRewards.slice(-lastN);\r\n    return recent.reduce((a, b) => a + b, 0) / (recent.length || 1);\r\n  }\r\n}\r\n\r\n// ─── Adaptive Threshold Detector ────────────────────────────────────────\r\n\r\nclass AdaptiveThresholdDetector {\r\n  private window: number[] = [];\r\n  private readonly windowSize: number;\r\n  private readonly multiplier: number;\r\n  private threshold: number;\r\n\r\n  constructor(windowSize: number = 20, multiplier: number = 2.0) {\r\n    this.windowSize = windowSize;\r\n    this.multiplier = multiplier;\r\n    this.threshold = 0;\r\n  }\r\n\r\n  update(value: number): void {\r\n    this.window.push(value);\r\n    if (this.window.length > this.windowSize) {\r\n      this.window.shift();\r\n    }\r\n    if (this.window.length >= 5) {\r\n      const mean = this.window.reduce((a, b) => a + b, 0) / this.window.length;\r\n      const variance = this.window.reduce((sum, v) => sum + (v - mean) ** 2, 0) / this.window.length;\r\n      const stdDev = Math.sqrt(variance);\r\n      this.threshold = mean + this.multiplier * stdDev;\r\n    }\r\n  }\r\n\r\n  isAnomalous(value: number): boolean {\r\n    return this.window.length >= 5 && Math.abs(value) > this.threshold;\r\n  }\r\n\r\n  getThreshold(): number {\r\n    return this.threshold;\r\n  }\r\n\r\n  getStats(): { mean: number; stdDev: number; count: number } {\r\n    if (this.window.length === 0) return { mean: 0, stdDev: 0, count: 0 };\r\n    const mean = this.window.reduce((a, b) => a + b, 0) / this.window.length;\r\n    const variance = this.window.reduce((sum, v) => sum + (v - mean) ** 2, 0) / this.window.length;\r\n    return { mean, stdDev: Math.sqrt(variance), count: this.window.length };\r\n  }\r\n}\r\n\r\n// ─── Multi-Signal Fusion ───────────────────────────────────────────────\r\n\r\ntype FusionMethod = \"weighted\" | \"median\" | \"min\" | \"max\" | \"product\";\r\n\r\ninterface SignalSource {\r\n  name: string;\r\n  weight: number;\r\n  read: () => number;\r\n}\r\n\r\nclass MultiSignalFusion {\r\n  private sources: SignalSource[] = [];\r\n\r\n  addSource(source: SignalSource): void {\r\n    this.sources.push(source);\r\n  }\r\n\r\n  fuse(method: FusionMethod = \"weighted\"): { value: number; contributions: Record<string, number> } {\r\n    const readings = this.sources.map((s) => ({ name: s.name, value: s.read(), weight: s.weight }));\r\n    const contributions: Record<string, number> = {};\r\n    readings.forEach((r) => { contributions[r.name] = r.value; });\r\n\r\n    let value: number;\r\n    switch (method) {\r\n      case \"weighted\": {\r\n        const totalWeight = readings.reduce((s, r) => s + r.weight, 0);\r\n        value = readings.reduce((s, r) => s + r.value * r.weight, 0) / (totalWeight || 1);\r\n        break;\r\n      }\r\n      case \"median\": {\r\n        const sorted = [...readings].sort((a, b) => a.value - b.value);\r\n        value = sorted[Math.floor(sorted.length / 2)].value;\r\n        break;\r\n      }\r\n      case \"min\":\r\n        value = Math.min(...readings.map((r) => r.value));\r\n        break;\r\n      case \"max\":\r\n        value = Math.max(...readings.map((r) => r.value));\r\n        break;\r\n      case \"product\":\r\n        value = readings.reduce((p, r) => p * Math.max(r.value, 0.01), 1);\r\n        break;\r\n      default:\r\n        value = readings.reduce((s, r) => s + r.value, 0) / readings.length;\r\n    }\r\n\r\n    return { value, contributions };\r\n  }\r\n\r\n  listSources(): string[] {\r\n    return this.sources.map((s) => s.name);\r\n  }\r\n\r\n  adjustWeight(name: string, newWeight: number): void {\r\n    const source = this.sources.find((s) => s.name === name);\r\n    if (source) source.weight = Math.max(0, newWeight);\r\n  }\r\n}\r\n\r\n// ─── Feedback Delay Compensator (Smith Predictor) ──────────────────────\r\n\r\nclass SmithPredictor {\r\n  private delayBuffer: number[] = [];\r\n  private modelOutput: number = 0;\r\n  private readonly delay: number;\r\n  private readonly modelGain: number;\r\n  private readonly modelTimeConstant: number;\r\n  private readonly dt: number;\r\n\r\n  constructor(delay: number, modelGain: number, modelTimeConstant: number, dt: number) {\r\n    this.delay = delay;\r\n    this.modelGain = modelGain;\r\n    this.modelTimeConstant = modelTimeConstant;\r\n    this.dt = dt;\r\n    this.delayBuffer = new Array(Math.max(1, Math.round(delay / dt))).fill(0);\r\n  }\r\n\r\n  predict(controlSignal: number, measuredOutput: number): number {\r\n    const alpha = this.dt / (this.modelTimeConstant + this.dt);\r\n    this.modelOutput = (1 - alpha) * this.modelOutput + alpha * this.modelGain * controlSignal;\r\n    this.delayBuffer.push(this.modelOutput);\r\n    const delayedOutput = this.delayBuffer.shift() ?? 0;\r\n    const predictedError = measuredOutput - delayedOutput;\r\n    return this.modelOutput + predictedError;\r\n  }\r\n\r\n  reset(): void {\r\n    this.delayBuffer = new Array(this.delayBuffer.length).fill(0);\r\n    this.modelOutput = 0;\r\n  }\r\n}\r\n\r\n// ─── Saturation / Anti-Windup Protection ───────────────────────────────\r\n\r\nclass AntiWindupProtector {\r\n  private accumulatedError = 0;\r\n  private readonly limit: number;\r\n  private readonly decayRate: number;\r\n\r\n  constructor(integralLimit: number = 10, decayRate: number = 0.1) {\r\n    this.limit = integralLimit;\r\n    this.decayRate = decayRate;\r\n  }\r\n\r\n  update(error: number, controlOutput: number, isSaturated: boolean): number {\r\n    if (isSaturated) {\r\n      this.accumulatedError = (1 - this.decayRate) * this.accumulatedError;\r\n    } else {\r\n      this.accumulatedError += error * this.decayRate;\r\n    }\r\n    this.accumulatedError = Math.max(-this.limit, Math.min(this.limit, this.accumulatedError));\r\n    return controlOutput + this.accumulatedError;\r\n  }\r\n\r\n  clamp(value: number, min: number, max: number): { value: number; saturated: boolean } {\r\n    const saturated = value < min || value > max;\r\n    return { value: Math.max(min, Math.min(max, value)), saturated };\r\n  }\r\n\r\n  reset(): void {\r\n    this.accumulatedError = 0;\r\n  }\r\n}\r\n\r\n// ─── Demo ──────────────────────────────────────────────────────────────\r\n\r\nasync function main() {\r\n  console.log(\"=== Extended Feedback Demo ===\\n\");\r\n\r\n  // 1. Feedback Controller with PID\r\n  let plantOutput = 0;\r\n  const sensor: Sensor = { read: () => plantOutput + (Math.random() - 0.5) * 0.1 };\r\n  const actuator: Actuator = { apply: (control) => { plantOutput += control * 0.1 - plantOutput * 0.05; } };\r\n  const pid = new PIDFeedbackController(2.0, 0.3, 0.05, 0.1, { min: -50, max: 50 });\r\n  const fc = new FeedbackController(sensor, actuator, pid, 100);\r\n  const trace = await fc.run(30);\r\n  const last = trace[trace.length - 1];\r\n  console.log(`Feedback Controller: ${trace.length} cycles, final error=${last.error.toFixed(3)}`);\r\n\r\n  // 2. Reinforcement Feedback Loop\r\n  const rl = new ReinforcementFeedbackLoop({\r\n    learningRate: 0.1, discountFactor: 0.9, explorationRate: 0.5,\r\n    stateCount: 5, actionCount: 3,\r\n  });\r\n  for (let ep = 0; ep < 200; ep++) {\r\n    rl.runEpisode((state, action) => {\r\n      const reward = action === 1 ? 1 : -0.1;\r\n      const nextState = Math.min(4, state + (action === 1 ? 1 : -1));\r\n      return { nextState: Math.max(0, nextState), reward, done: nextState >= 4 };\r\n    }, 20);\r\n  }\r\n  console.log(`\\nQ-Learning: avg reward (last 10) = ${rl.getAverageReward(10).toFixed(3)}`);\r\n  const qTable = rl.getQTable();\r\n  console.log(`Q-table max value: ${Math.max(...qTable.flat()).toFixed(3)}`);\r\n\r\n  // 3. Adaptive Threshold Detector\r\n  const detector = new AdaptiveThresholdDetector(15, 2.5);\r\n  const values = [1, 1.2, 0.8, 1.1, 0.9, 1.3, 1.0, 0.7, 1.1, 1.2, 5.0, 1.0, 0.9];\r\n  console.log(\"\\nAdaptive Threshold:\");\r\n  for (const v of values) {\r\n    detector.update(v);\r\n    const anomalous = detector.isAnomalous(v) ? \" ⚠ ANOMALOUS\" : \"\";\r\n    if (anomalous) console.log(`  value=${v.toFixed(1)} threshold=${detector.getThreshold().toFixed(2)}${anomalous}`);\r\n  }\r\n\r\n  // 4. Multi-Signal Fusion\r\n  const fusion = new MultiSignalFusion();\r\n  fusion.addSource({ name: \"accuracy\", weight: 0.5, read: () => 0.85 + Math.random() * 0.1 });\r\n  fusion.addSource({ name: \"latency\", weight: 0.3, read: () => 0.7 + Math.random() * 0.2 });\r\n  fusion.addSource({ name: \"coverage\", weight: 0.2, read: () => 0.9 + Math.random() * 0.05 });\r\n  const fused = fusion.fuse(\"weighted\");\r\n  console.log(`\\nMulti-Signal Fusion (weighted): ${fused.value.toFixed(3)}`);\r\n  console.log(`  Contributions: ${JSON.stringify(fused.contributions)}`);\r\n\r\n  // 5. Smith Predictor\r\n  const smith = new SmithPredictor(5, 1.0, 2.0, 0.5);\r\n  const predicted = smith.predict(10, 2.5);\r\n  console.log(`\\nSmith Predictor: predicted_output=${predicted.toFixed(3)}`);\r\n\r\n  // 6. Anti-Windup Protection\r\n  const aw = new AntiWindupProtector(5, 0.2);\r\n  let ctrlOutput = 0;\r\n  for (let i = 0; i < 10; i++) {\r\n    const { value, saturated } = aw.clamp(ctrlOutput, -10, 10);\r\n    ctrlOutput = aw.update(2.0, value, saturated);\r\n  }\r\n  console.log(`\\nAnti-Windup: output=${ctrlOutput.toFixed(3)}`);\r\n}\r\n\r\nawait main();\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Multi-Signal Fusion with Weighted Averaging\"\r\n        A[\"Signal 1: Accuracy\"] -->|\"w1=0.4\"| F[Weighted Average]\r\n        B[\"Signal 2: Latency\"] -->|\"w2=0.3\"| F\r\n        C[\"Signal 3: Coverage\"] -->|\"w3=0.2\"| F\r\n        D[\"Signal 4: Cost\"] -->|\"w4=0.1\"| F\r\n        E[Median Filter] --> F\r\n        F --> G{Fused Score}\r\n        G -->|Above Threshold| H[Execute]\r\n        G -->|Below Threshold| I[Adjust Parameters]\r\n        G -->|Oscillating| J[Reduce Gain]\r\n        I --> K[Re-evaluate]\r\n        J --> K\r\n        K --> A\r\n    end\r\n    \r\n    style H fill:#2ecc71,color:#fff\r\n    style G fill:#3498db,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch04-advanced-feedback-tools.ts\r\n// bun run ch04-advanced-feedback-tools.ts\r\n\r\n// ─── OscillationDetector ───────────────────────────────────────────────\r\n\r\ninterface OscillationResult {\r\n  oscillating: boolean;\r\n  amplitude: number;\r\n  period: number | null;\r\n  growingAmplitude: boolean;\r\n  zeroCrossingCount: number;\r\n  recommendation: string;\r\n}\r\n\r\nclass OscillationDetector {\r\n  private errorHistory: number[] = [];\r\n  private readonly minSamples: number;\r\n  private readonly amplitudeGrowthThreshold: number;\r\n\r\n  constructor(minSamples: number = 6, amplitudeGrowthThreshold: number = 1.1) {\r\n    this.minSamples = minSamples;\r\n    this.amplitudeGrowthThreshold = amplitudeGrowthThreshold;\r\n  }\r\n\r\n  feed(error: number): void {\r\n    this.errorHistory.push(error);\r\n  }\r\n\r\n  analyze(): OscillationResult {\r\n    const n = this.errorHistory.length;\r\n    if (n &lt; this.minSamples) {\r\n      return { oscillating: false, amplitude: 0, period: null, growingAmplitude: false, zeroCrossingCount: 0, recommendation: \"Need more samples\" };\r\n    }\r\n\r\n    const recent = this.errorHistory.slice(-this.minSamples);\r\n    let zeroCrossings = 0;\r\n    for (let i = 1; i &lt; recent.length; i++) {\r\n      if (recent[i] * recent[i - 1] &lt; 0) zeroCrossings++;\r\n    }\r\n\r\n    const periods: number[] = [];\r\n    let lastZeroIdx: number | null = null;\r\n    for (let i = 0; i &lt; this.errorHistory.length; i++) {\r\n      if (Math.abs(this.errorHistory[i]) &lt; 0.001 || (i &gt; 0 && this.errorHistory[i] * this.errorHistory[i - 1] &lt; 0)) {\r\n        if (lastZeroIdx !== null) {\r\n          periods.push(i - lastZeroIdx);\r\n        }\r\n        lastZeroIdx = i;\r\n      }\r\n    }\r\n\r\n    const avgPeriod = periods.length > 0\r\n      ? periods.reduce((s, p) => s + p, 0) / periods.length\r\n      : null;\r\n\r\n    const halfN = Math.floor(n / 2);\r\n    const firstHalf = this.errorHistory.slice(0, halfN).map(Math.abs);\r\n    const secondHalf = this.errorHistory.slice(halfN).map(Math.abs);\r\n    const firstMean = firstHalf.reduce((s, v) => s + v, 0) / firstHalf.length;\r\n    const secondMean = secondHalf.reduce((s, v) => s + v, 0) / secondHalf.length;\r\n    const growingAmplitude = secondMean > firstMean * this.amplitudeGrowthThreshold;\r\n\r\n    const amplitude = recent.reduce((max, v) => Math.max(max, Math.abs(v)), 0);\r\n    const oscillating = zeroCrossings >= 3 && this.errorHistory.length >= 6;\r\n\r\n    let recommendation: string;\r\n    if (!oscillating) {\r\n      recommendation = \"No oscillation detected.\";\r\n    } else if (growingAmplitude) {\r\n      recommendation = \"CRITICAL: Oscillation with growing amplitude. Reduce gain immediately or apply damping.\";\r\n    } else if (amplitude > 10) {\r\n      recommendation = \"WARNING: Sustained large-amplitude oscillation. Consider reducing gain by 30-50%.\";\r\n    } else {\r\n      recommendation = \"Minor oscillation detected. Monitor trend. Consider slight gain reduction or deadband filter.\";\r\n    }\r\n\r\n    return { oscillating, amplitude, period: avgPeriod, growingAmplitude, zeroCrossingCount: zeroCrossings, recommendation };\r\n  }\r\n\r\n  reset(): void {\r\n    this.errorHistory = [];\r\n  }\r\n}\r\n\r\n// ─── CascadeController ────────────────────────────────────────────────\r\n\r\ninterface CascadeStage {\r\n  controller: {\r\n    compute: (error: number) => number;\r\n    reset: () => void;\r\n  };\r\n  name: string;\r\n  minOutput: number;\r\n  maxOutput: number;\r\n  proportional: number;\r\n  integral: number;\r\n}\r\n\r\nclass CascadeController {\r\n  private stages: CascadeStage[] = [];\r\n  private outputs: number[] = [];\r\n\r\n  addStage(name: string, kp: number, ki: number, minOutput: number, maxOutput: number): void {\r\n    let integral = 0;\r\n    let prevError = 0;\r\n    const dt = 0.01;\r\n\r\n    const controller = {\r\n      compute: (error: number): number => {\r\n        const p = kp * error;\r\n        integral += ki * error * dt;\r\n        integral = Math.max(minOutput, Math.min(maxOutput, integral));\r\n        const d = (error - prevError) / dt;\r\n        let output = p + integral + d;\r\n        output = Math.max(minOutput, Math.min(maxOutput, output));\r\n        prevError = error;\r\n        return output;\r\n      },\r\n      reset: () => { integral = 0; prevError = 0; },\r\n    };\r\n\r\n    this.stages.push({ controller, name, minOutput, maxOutput, proportional: kp, integral: ki });\r\n  }\r\n\r\n  compute(setpoint: number, measurement: number): number {\r\n    this.outputs = [];\r\n    let error = setpoint - measurement;\r\n\r\n    for (const stage of this.stages) {\r\n      const stageOutput = stage.controller.compute(error);\r\n      this.outputs.push(stageOutput);\r\n      error = stageOutput;\r\n    }\r\n\r\n    return this.outputs[this.outputs.length - 1];\r\n  }\r\n\r\n  simulate(\r\n    setpoint: number,\r\n    initialValue: number,\r\n    plantFn: (control: number) => number,\r\n    steps: number\r\n  ): Array&lt;{ step: number; measurement: number; control: number; stageOutputs: number[] }&gt; {\r\n    const trace: Array&lt;{ step: number; measurement: number; control: number; stageOutputs: number[] }&gt; = [];\r\n    let measurement = initialValue;\r\n\r\n    for (let i = 0; i &lt; steps; i++) {\r\n      const control = this.compute(setpoint, measurement);\r\n      measurement = plantFn(control);\r\n      trace.push({ step: i, measurement, control, stageOutputs: [...this.outputs] });\r\n    }\r\n\r\n    return trace;\r\n  }\r\n\r\n  reset(): void {\r\n    for (const stage of this.stages) {\r\n      stage.controller.reset();\r\n    }\r\n    this.outputs = [];\r\n  }\r\n\r\n  getStageNames(): string[] {\r\n    return this.stages.map((s) => s.name);\r\n  }\r\n}\r\n\r\n// ─── FeedForwardController ─────────────────────────────────────────────\r\n\r\ninterface FeedForwardConfig {\r\n  disturbanceGain: number;\r\n  modelInverseGain: number;\r\n  lookaheadSteps: number;\r\n}\r\n\r\nclass FeedForwardController {\r\n  private config: FeedForwardConfig;\r\n  private disturbanceHistory: number[] = [];\r\n  private feedbackOutput = 0;\r\n\r\n  constructor(config: FeedForwardConfig) {\r\n    this.config = config;\r\n  }\r\n\r\n  compute(setpoint: number, measurement: number, predictedDisturbance: number | null): number {\r\n    const feedbackError = setpoint - measurement;\r\n\r\n    // Feedback component (simple P)\r\n    const feedbackTerm = 0.5 * feedbackError;\r\n\r\n    // Feed-forward component: anticipate known disturbances\r\n    let ffTerm = 0;\r\n    if (predictedDisturbance !== null) {\r\n      ffTerm = -this.config.disturbanceGain * predictedDisturbance * this.config.modelInverseGain;\r\n    }\r\n\r\n    this.feedbackOutput = feedbackTerm + ffTerm;\r\n    return this.feedbackOutput;\r\n  }\r\n\r\n  recordDisturbance(disturbance: number): void {\r\n    this.disturbanceHistory.push(disturbance);\r\n    if (this.disturbanceHistory.length > this.config.lookaheadSteps) {\r\n      this.disturbanceHistory.shift();\r\n    }\r\n  }\r\n\r\n  predictNextDisturbance(): number | null {\r\n    if (this.disturbanceHistory.length &lt; 2) return null;\r\n    const last = this.disturbanceHistory[this.disturbanceHistory.length - 1];\r\n    const prev = this.disturbanceHistory[this.disturbanceHistory.length - 2];\r\n    const trend = last - prev;\r\n    return last + trend;\r\n  }\r\n\r\n  simulate(\r\n    setpoint: number,\r\n    initialValue: number,\r\n    steps: number,\r\n    disturbanceFn: (step: number) => number\r\n  ): Array&lt;{ step: number; measurement: number; disturbance: number; control: number; ffTerm: number }&gt; {\r\n    const trace: Array&lt;{ step: number; measurement: number; disturbance: number; control: number; ffTerm: number }&gt; = [];\r\n    let measurement = initialValue;\r\n\r\n    for (let i = 0; i &lt; steps; i++) {\r\n      const disturbance = disturbanceFn(i);\r\n      this.recordDisturbance(disturbance);\r\n      const predicted = this.predictNextDisturbance();\r\n      const control = this.compute(setpoint, measurement, predicted);\r\n      measurement = measurement + 0.1 * control + 0.05 * disturbance + (Math.random() - 0.5) * 0.1;\r\n      measurement = Math.max(0, measurement);\r\n\r\n      const ffOnly = predicted !== null ? -this.config.disturbanceGain * predicted * this.config.modelInverseGain : 0;\r\n      trace.push({ step: i, measurement, disturbance, control, ffTerm: ffOnly });\r\n    }\r\n\r\n    return trace;\r\n  }\r\n\r\n  reset(): void {\r\n    this.disturbanceHistory = [];\r\n    this.feedbackOutput = 0;\r\n  }\r\n}\r\n\r\n// ─── BumpTestAnalyzer (System Identification) ─────────────────────────\r\n\r\ninterface ProcessModel {\r\n  gain: number;\r\n  timeConstant: number;\r\n  deadTime: number;\r\n  fitPercent: number;\r\n}\r\n\r\nclass BumpTestAnalyzer {\r\n  identify(stepResponse: number[], stepTime: number, finalValue: number): ProcessModel {\r\n    const n = stepResponse.length;\r\n    const steadyState = stepResponse[n - 1];\r\n    const gain = finalValue > 0 ? steadyState / finalValue : 0;\r\n\r\n    const y63 = steadyState * 0.632;\r\n    const y28 = steadyState * 0.283;\r\n\r\n    let t63 = -1;\r\n    let t28 = -1;\r\n\r\n    for (let i = 0; i &lt; n; i++) {\r\n      if (t28 &lt; 0 && stepResponse[i] &gt;= y28) t28 = i;\r\n      if (t63 &lt; 0 && stepResponse[i] &gt;= y63) t63 = i;\r\n    }\r\n\r\n    const timeConstant = t63 > 0 && t28 > 0 ? 1.5 * (t63 - t28) : n / 3;\r\n    const deadTime = t28 > 0 ? Math.max(0, t28 - 0.4 * timeConstant) : 0;\r\n\r\n    const modelOutput = this.simulateModel(gain, timeConstant, deadTime, stepResponse.length, finalValue);\r\n    const ssRes = stepResponse.reduce((s, y, i) => s + (y - modelOutput[i]) ** 2, 0);\r\n    const ssTotal = stepResponse.reduce((s, y) => s + (y - stepResponse.reduce((a, b) => a + b, 0) / n) ** 2, 0);\r\n    const fitPercent = ssTotal > 0 ? Math.max(0, 100 * (1 - ssRes / ssTotal)) : 0;\r\n\r\n    return { gain, timeConstant: Math.max(0.1, timeConstant), deadTime: Math.max(0, deadTime), fitPercent };\r\n  }\r\n\r\n  private simulateModel(\r\n    gain: number, timeConstant: number, deadTime: number, steps: number, stepSize: number\r\n  ): number[] {\r\n    const output: number[] = [];\r\n    let value = 0;\r\n    const alpha = 1 / Math.max(1, timeConstant);\r\n    const deadSamples = Math.round(deadTime);\r\n\r\n    for (let i = 0; i &lt; steps; i++) {\r\n      const input = i >= deadSamples ? stepSize : 0;\r\n      value += alpha * (gain * input - value);\r\n      output.push(value);\r\n    }\r\n    return output;\r\n  }\r\n\r\n  recommendTuning(model: ProcessModel): { kp: number; ki: number; kd: number } {\r\n    const { gain, timeConstant, deadTime } = model;\r\n    if (gain &lt;= 0) return { kp: 0.5, ki: 0.1, kd: 0 };\r\n\r\n    const ratio = deadTime / Math.max(0.01, timeConstant);\r\n    let kp: number, ki: number, kd: number;\r\n\r\n    if (ratio &lt; 0.1) {\r\n      kp = 0.6 / gain;\r\n      ki = 0.5 / timeConstant;\r\n      kd = 0;\r\n    } else if (ratio &lt; 0.5) {\r\n      kp = 0.8 / gain;\r\n      ki = 0.3 / timeConstant;\r\n      kd = 0.1 * timeConstant;\r\n    } else {\r\n      kp = 0.4 / gain;\r\n      ki = 0.2 / timeConstant;\r\n      kd = 0;\r\n    }\r\n\r\n    return { kp, ki, kd };\r\n  }\r\n}\r\n\r\n// ─── DeadbandFilter ────────────────────────────────────────────────────\r\n\r\nclass DeadbandFilter {\r\n  private readonly threshold: number;\r\n  private lastOutput = 0;\r\n  private lastValidError = 0;\r\n  private suppressedCount = 0;\r\n\r\n  constructor(threshold: number) {\r\n    this.threshold = threshold;\r\n  }\r\n\r\n  apply(error: number): number {\r\n    const change = Math.abs(error - this.lastValidError);\r\n\r\n    if (change &lt; this.threshold) {\r\n      this.suppressedCount++;\r\n      return this.lastOutput;\r\n    }\r\n\r\n    this.lastOutput = error;\r\n    this.lastValidError = error;\r\n    this.suppressedCount = 0;\r\n    return error;\r\n  }\r\n\r\n  applyWithHysteresis(error: number, hysteresisFactor: number = 1.5): number {\r\n    const effectiveThreshold = this.suppressedCount > 3\r\n      ? this.threshold * hysteresisFactor\r\n      : this.threshold;\r\n\r\n    const change = Math.abs(error - this.lastValidError);\r\n    if (change &lt; effectiveThreshold) {\r\n      this.suppressedCount++;\r\n      return this.lastOutput;\r\n    }\r\n\r\n    this.lastOutput = error;\r\n    this.lastValidError = error;\r\n    this.suppressedCount = 0;\r\n    return error;\r\n  }\r\n\r\n  getSuppressedCount(): number {\r\n    return this.suppressedCount;\r\n  }\r\n\r\n  reset(): void {\r\n    this.lastOutput = 0;\r\n    this.lastValidError = 0;\r\n    this.suppressedCount = 0;\r\n  }\r\n\r\n  static applyToTrace(\r\n    trace: number[],\r\n    threshold: number,\r\n    hysteresis: boolean = false\r\n  ): { filtered: number[]; suppressed: number } {\r\n    const filter = new DeadbandFilter(threshold);\r\n    const filtered = trace.map((v) => hysteresis ? filter.applyWithHysteresis(v) : filter.apply(v));\r\n    return { filtered, suppressed: filter.getSuppressedCount() };\r\n  }\r\n}\r\n\r\n// ─── Demo ──────────────────────────────────────────────────────────────\r\n\r\nasync function main() {\r\n  console.log(\"=== Advanced Feedback Tools Demo ===\\n\");\r\n\r\n  // 1. Oscillation Detector\r\n  const detector = new OscillationDetector(8, 1.15);\r\n  const oscillatingErrors = [10, 8, -12, -6, 14, 9, -15, -8, 18, 10, -20, -11];\r\n  oscillatingErrors.forEach((e) => detector.feed(e));\r\n  const result = detector.analyze();\r\n  console.log(\"Oscillation Detector:\");\r\n  console.log(`  Oscillating: ${result.oscillating}`);\r\n  console.log(`  Amplitude: ${result.amplitude.toFixed(1)}`);\r\n  console.log(`  Period: ${result.period?.toFixed(1) ?? \"N/A\"} samples`);\r\n  console.log(`  Growing amplitude: ${result.growingAmplitude}`);\r\n  console.log(`  Zero crossings: ${result.zeroCrossingCount}`);\r\n  console.log(`  Recommendation: ${result.recommendation}`);\r\n\r\n  // 2. Cascade Controller\r\n  const cascade = new CascadeController();\r\n  cascade.addStage(\"inner-velocity\", 2.0, 0.1, -50, 50);\r\n  cascade.addStage(\"outer-position\", 0.8, 0.05, -100, 100);\r\n  const plant = (u: number) => u * 0.05 + (Math.random() - 0.5) * 0.2;\r\n  const cascadeTrace = cascade.simulate(100, 0, plant, 30);\r\n  const lastC = cascadeTrace[cascadeTrace.length - 1];\r\n  console.log(`\\nCascade Controller (${cascade.getStageNames().join(\" → \")}):`);\r\n  console.log(`  Stages: ${cascade.getStageNames().length}`);\r\n  console.log(`  Final measurement: ${lastC.measurement.toFixed(2)}`);\r\n  console.log(`  Final control: ${lastC.control.toFixed(2)}`);\r\n  console.log(`  Final error: ${(100 - lastC.measurement).toFixed(2)}`);\r\n\r\n  // 3. Feed-Forward Controller\r\n  const ff = new FeedForwardController({ disturbanceGain: 0.6, modelInverseGain: 0.8, lookaheadSteps: 3 });\r\n  const ffTrace = ff.simulate(100, 0, 20, (step) => step >= 10 && step &lt; 14 ? 40 : Math.random() * 2);\r\n  const lastFf = ffTrace[ffTrace.length - 1];\r\n  console.log(`\\nFeed-Forward Controller (with disturbance at step 10-13):`);\r\n  console.log(`  Final measurement: ${lastFf.measurement.toFixed(2)}`);\r\n  const maxDeviation = Math.max(...ffTrace.map((t) => Math.abs(100 - t.measurement)));\r\n  console.log(`  Max deviation from setpoint: ${maxDeviation.toFixed(2)}`);\r\n  console.log(`  FF term at peak disturbance: ${ffTrace.filter((t) => t.disturbance > 10).map((t) => t.ffTerm.toFixed(2)).join(\", \")}`);\r\n\r\n  // 4. Bump Test Analyzer\r\n  const bumpAnalyer = new BumpTestAnalyzer();\r\n  const stepResp: number[] = [];\r\n  let v = 0;\r\n  for (let i = 0; i &lt; 40; i++) {\r\n    v += (1.5 * 100 - v) / 8;\r\n    stepResp.push(v + (Math.random() - 0.5) * 2);\r\n  }\r\n  const model = bumpAnalyer.identify(stepResp, 0, 100);\r\n  console.log(`\\nBump Test Analyzer (System ID):`);\r\n  console.log(`  Process gain: ${model.gain.toFixed(3)}`);\r\n  console.log(`  Time constant: ${model.timeConstant.toFixed(1)} samples`);\r\n  console.log(`  Dead time: ${model.deadTime.toFixed(1)} samples`);\r\n  console.log(`  Fit: ${model.fitPercent.toFixed(0)}%`);\r\n\r\n  const tuning = bumpAnalyer.recommendTuning(model);\r\n  console.log(`  Recommended PID: Kp=${tuning.kp.toFixed(2)} Ki=${tuning.ki.toFixed(3)} Kd=${tuning.kd.toFixed(3)}`);\r\n\r\n  // 5. Deadband Filter\r\n  const noisyTrace: number[] = [];\r\n  for (let i = 0; i &lt; 30; i++) {\r\n    const trueVal = 50 * Math.exp(-i * 0.08);\r\n    noisyTrace.push(trueVal + (Math.random() - 0.5) * 3);\r\n  }\r\n  const { filtered, suppressed } = DeadbandFilter.applyToTrace(noisyTrace, 0.5, true);\r\n  console.log(`\\nDeadband Filter:`);\r\n  console.log(`  Raw range: [${Math.min(...noisyTrace).toFixed(1)}, ${Math.max(...noisyTrace).toFixed(1)}]`);\r\n  console.log(`  Values suppressed (cumulative): ${suppressed}`);\r\n  const changeCount = noisyTrace.reduce((s, val, i, arr) => s + (i > 0 && val !== arr[i - 1] ? 1 : 0), 0);\r\n  const filteredChangeCount = filtered.reduce((s, val, i, arr) => s + (i > 0 && val !== arr[i - 1] ? 1 : 0), 0);\r\n  console.log(`  Raw value changes: ${changeCount}, Filtered value changes: ${filteredChangeCount}`);\r\n  console.log(`  Dithering reduction: ${changeCount > 0 ? ((1 - filteredChangeCount / changeCount) * 100).toFixed(0) : 0}%`);\r\n}\r\n\r\nawait main();\n"
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



/***/ }

}]);