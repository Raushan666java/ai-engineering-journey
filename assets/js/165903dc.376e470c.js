"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9836],{

/***/ 8283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_03_human_in_the_loop_md_165_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-03-human-in-the-loop-md-165.json
const site_docs_courses_loop_engineering_ch_03_human_in_the_loop_md_165_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch03-human-in-the-loop","title":"Chapter 3: Human-in-the-Loop","description":"Previous Feedback Loops","source":"@site/docs/courses/loop-engineering/ch03-human-in-the-loop.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch03-human-in-the-loop","permalink":"/ai-engineering-journey/loop-engineering/ch03-human-in-the-loop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"ch03-human-in-the-loop","slug":"/loop-engineering/ch03-human-in-the-loop","title":"Chapter 3: Human-in-the-Loop","sidebar_label":"Chapter 3: Human-in-the-Loop","sidebar_position":3},"sidebar":"course-loop-engineering","previous":{"title":"Chapter 2: Agent Loop Architecture","permalink":"/ai-engineering-journey/loop-engineering/ch02-agent-loop-architecture"},"next":{"title":"Chapter 4: Feedback Loops","permalink":"/ai-engineering-journey/loop-engineering/ch04-feedback-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/loop-engineering/ch03-human-in-the-loop.md


const frontMatter = {
	id: 'ch03-human-in-the-loop',
	slug: '/loop-engineering/ch03-human-in-the-loop',
	title: 'Chapter 3: Human-in-the-Loop',
	sidebar_label: 'Chapter 3: Human-in-the-Loop',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Human-in-the-Loop';

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
  "value": "1. Propose-then-Commit Architecture",
  "id": "1-propose-then-commit-architecture",
  "level": 3
}, {
  "value": "2. Approval Gates",
  "id": "2-approval-gates",
  "level": 3
}, {
  "value": "3. Escalation Policies",
  "id": "3-escalation-policies",
  "level": 3
}, {
  "value": "4. Batch vs Real-Time Review",
  "id": "4-batch-vs-real-time-review",
  "level": 3
}, {
  "value": "5. Trust Calibration Framework",
  "id": "5-trust-calibration-framework",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: HITLAgent — Propose, Wait, Execute or Escalate",
  "id": "example-1-hitlagent--propose-wait-execute-or-escalate",
  "level": 3
}, {
  "value": "Example 2: BatchReviewQueue — Collect and Process Pending Approvals",
  "id": "example-2-batchreviewqueue--collect-and-process-pending-approvals",
  "level": 3
}, {
  "value": "Example 3: TrustScalingGate — Learn When to Auto-Approve",
  "id": "example-3-trustscalinggate--learn-when-to-auto-approve",
  "level": 3
}, {
  "value": "Extended Implementation: Escalation Chains, Approval Gates, Priority Queue, and Audit Logging",
  "id": "extended-implementation-escalation-chains-approval-gates-priority-queue-and-audit-logging",
  "level": 3
}, {
  "value": "HITL Production Tooling: Workload Balancing, Stale Proposals, Performance Tracking, and Simulated Reviewers",
  "id": "hitl-production-tooling-workload-balancing-stale-proposals-performance-tracking-and-simulated-reviewers",
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
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    math: "math",
    mermaid: "mermaid",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-3-human-in-the-loop",
        children: "Chapter 3: Human-in-the-Loop"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/loop-engineering/ch02-agent-loop-architecture",
          children: "Agent Loop Architecture"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/loop-engineering/ch04-feedback-loops",
          children: "Feedback Loops"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a propose-then-commit architecture where agents propose actions and humans approve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement approval gates keyed to confidence thresholds, cost thresholds, and destructive-op detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build escalation policies including timeout escalation and delegation chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare batch versus real-time review workflows and choose the right one per use case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a trust calibration framework that dynamically adjusts autonomy level over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate human-in-the-loop (HITL) into any agent loop without blocking throughput"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose failure modes: approval fatigue, stale context, and inappropriate escalation"
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
            children: "Propose-then-Commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent suggests; human confirms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple suggestion from execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approval Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gate on confidence, cost, destructiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent bad actions before they happen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Escalation Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timeouts, chains, fallback humans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No proposal hangs forever"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch vs Real-Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync approval for fast ops, batch for cheap ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match latency to risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trust Calibration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomy grows with demonstrated reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start conservative, expand with proof"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-propose-then-commit-architecture",
      children: "1. Propose-then-Commit Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The propose-then-commit pattern is the foundational HITL building block. Instead of allowing an agent to execute actions autonomously, the agent first ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "proposes"
      }), " an action (along with justification and confidence), waits for a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "human approval signal"
      }), ", and only then ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "commits"
      }), " the action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " ┌─────────┐     propose     ┌──────────┐    approve    ┌─────────┐\r\n │  Agent   │ ──────────────>│  Human   │ ────────────> │  Action │\r\n │          │   (action +    │  Review  │   (or reject) │  Exec.  │\r\n │          │   rationale)   │  Portal  │               │         │\r\n └─────────┘                 └──────────┘               └─────────┘\r\n      │                           │\r\n      │      escalate             │ timeout\r\n      └──────────────────────────>┘\r\n                              (escalation chain)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key invariants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent must never execute a proposed action before approval."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The proposal must include enough context for a human to make an informed decision."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A rejected proposal must produce a useful signal (why it was rejected) so the agent can adjust."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A timed-out proposal must escalate, not silently approve."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-approval-gates",
      children: "2. Approval Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approval gates are programmable conditions that determine whether an action needs human review or can proceed autonomously. Common gate types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Confidence threshold gate."
      }), " The agent attaches a confidence score ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c ∈ [0, 1]"
      }), " to every proposal. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c ≥ τ_high"
      }), ", the action auto-approves. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c ≤ τ_low"
      }), ", the action is rejected outright. Otherwise, it enters human review."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-approve zone:       c ≥ 0.85\r\nhuman review zone:       0.30 < c < 0.85\r\nauto-reject zone:        c ≤ 0.30\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost threshold gate."
      }), " Every action carries an estimated cost — monetary (API calls, compute) or impact (deleting a record, sending an email). Actions above a cost ceiling require human sign-off regardless of confidence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Destructive-op detection."
      }), " Certain operations are intrinsically high-risk: file deletion, database writes, user notifications, payment execution. A static or learned classifier tags operations and gates them unconditionally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-escalation-policies",
      children: "3. Escalation Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Escalation policies define what happens when a proposal is not reviewed in time or is rejected:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timeout escalation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " seconds, escalate to next reviewer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reviewer is unreachable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary → secondary → tertiary reviewer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tier approval workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After all tiers exhausted, auto-approve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-risk, time-sensitive ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback reject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After all tiers exhausted, auto-reject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-risk ops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Escalation chains should be expressed as a simple ordered list of reviewer identifiers. The agent tries each in sequence with its own timeout."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-batch-vs-real-time-review",
      children: "4. Batch vs Real-Time Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-time (synchronous) review."
      }), " The agent pauses and waits. Latency is human-scale (seconds to minutes). Suitable for: destructive ops, expensive ops, or any action where waiting is acceptable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Batch (asynchronous) review."
      }), " Proposals collect in a queue; a human reviews at their convenience. The agent may continue with other work, but committed actions are deferred until the batch clears. Suitable for: content generation, bulk edits, low-risk proposals."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hybrid patterns are common: classify proposals at ingestion time, route urgent ones to real-time and routine ones to batch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-trust-calibration-framework",
      children: "5. Trust Calibration Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trust calibration is the system by which the agent's autonomy level adjusts based on demonstrated reliability. It is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "feedback loop over the HITL loop"
      }), " — a meta-loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Session n:  propose → review → execute → outcome (success/failure)\r\nSession n+1: trust_score ← update(trust_score, outcome)\r\n             autonomy_level ← map(trust_score)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The trust score is a floating-point value updated after each reviewed action:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "trust' = trust + α · (outcome - trust)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "α"
      }), " is the learning rate and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "outcome ∈ {0, 1}"
      }), " (0 = failure, 1 = success). The autonomy level maps the trust score to a confidence threshold:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trust Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Autonomy Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effective τ"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[0.00, 0.40)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Novice"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "τ = 0.00"
            }), " (everything reviewed)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[0.40, 0.70)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apprentice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "τ = 0.50"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[0.70, 0.90)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practitioner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "τ = 0.75"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[0.90, 1.00]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "τ = 0.90"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As trust grows, the auto-approve threshold rises, meaning the agent needs ", (0,jsx_runtime.jsx)(_components.em, {
        children: "less"
      }), " confidence to act autonomously. Counterintuitive but deliberate: a trusted agent has a proven track record so its lower-confidence predictions are still reliable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-hitlagent--propose-wait-execute-or-escalate",
      children: "Example 1: HITLAgent — Propose, Wait, Execute or Escalate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-example1-hitl-agent.ts\r\n// Bun: bun run ch03-example1-hitl-agent.ts\r\n\r\ninterface Proposal {\r\n  id: string;\r\n  action: string;\r\n  params: Record<string, unknown>;\r\n  confidence: number;\r\n  estimatedCost: number;\r\n  isDestructive: boolean;\r\n  rationale: string;\r\n  createdAt: Date;\r\n}\r\n\r\ntype ReviewDecision = \"approved\" | \"rejected\" | \"timeout\" | \"escalated\";\r\n\r\ninterface ReviewResult {\r\n  proposalId: string;\r\n  decision: ReviewDecision;\r\n  feedback: string;\r\n  reviewedBy: string;\r\n  reviewedAt: Date;\r\n}\r\n\r\ninterface EscalationPolicy {\r\n  tiers: string[];\r\n  timeoutMs: number;\r\n  fallbackAction: \"approve\" | \"reject\";\r\n}\r\n\r\ntype ApprovalGate = (\r\n  proposal: Proposal,\r\n  context: { trustScore: number }\r\n) => \"auto-approve\" | \"auto-reject\" | \"review\";\r\n\r\nfunction confidenceGate(threshold: number): ApprovalGate {\r\n  return (proposal, { trustScore }) => {\r\n    const effectiveThreshold = threshold * (1 - trustScore * 0.5);\r\n    if (proposal.confidence >= effectiveThreshold) return \"auto-approve\";\r\n    if (proposal.confidence < 0.2) return \"auto-reject\";\r\n    return \"review\";\r\n  };\r\n}\r\n\r\nfunction costGate(maxCost: number): ApprovalGate {\r\n  return (proposal, _ctx) => {\r\n    if (proposal.estimatedCost > maxCost) return \"review\";\r\n    return \"auto-approve\";\r\n  };\r\n}\r\n\r\nfunction destructiveOpGate(): ApprovalGate {\r\n  return (proposal, _ctx) => {\r\n    if (proposal.isDestructive) return \"review\";\r\n    return \"auto-approve\";\r\n  };\r\n}\r\n\r\nclass HITLAgent {\r\n  private gates: ApprovalGate[] = [];\r\n  private escalationPolicy: EscalationPolicy;\r\n  private trustScore = 0.5;\r\n  private proposalCount = 0;\r\n  private readonly alpha = 0.1;\r\n\r\n  constructor(policy: EscalationPolicy) {\r\n    this.escalationPolicy = policy;\r\n  }\r\n\r\n  addGate(gate: ApprovalGate): void {\r\n    this.gates.push(gate);\r\n  }\r\n\r\n  private runGates(proposal: Proposal): \"auto-approve\" | \"auto-reject\" | \"review\" {\r\n    for (const gate of this.gates) {\r\n      const result = gate(proposal, { trustScore: this.trustScore });\r\n      if (result !== \"auto-approve\") return result;\r\n    }\r\n    return \"auto-approve\";\r\n  }\r\n\r\n  private simulateHumanReview(proposal: Proposal): Promise<ReviewResult> {\r\n    return new Promise((resolve) => {\r\n      const delay = 50 + Math.random() * 200;\r\n      setTimeout(() => {\r\n        const autoApprove = proposal.confidence > 0.8 && !proposal.isDestructive;\r\n        resolve({\r\n          proposalId: proposal.id,\r\n          decision: autoApprove ? \"approved\" : \"rejected\",\r\n          feedback: autoApprove\r\n            ? \"Looks good.\"\r\n            : `Rejected: confidence too low or destructive op requires manual review.`,\r\n          reviewedBy: \"human-simulated\",\r\n          reviewedAt: new Date(),\r\n        });\r\n      }, delay);\r\n    });\r\n  }\r\n\r\n  private async escalate(proposal: Proposal, reason: string): Promise<ReviewResult> {\r\n    console.log(`  [ESCALATE] ${reason}. Trying tiers: ${this.escalationPolicy.tiers.join(\" -> \")}`);\r\n    for (const tier of this.escalationPolicy.tiers) {\r\n      console.log(`  [ESCALATE] Escalated to ${tier}...`);\r\n      await new Promise((r) => setTimeout(r, 30));\r\n      const approved = Math.random() > 0.3;\r\n      if (approved) {\r\n        return {\r\n          proposalId: proposal.id,\r\n          decision: \"approved\",\r\n          feedback: `Approved by ${tier} after escalation.`,\r\n          reviewedBy: tier,\r\n          reviewedAt: new Date(),\r\n        };\r\n      }\r\n    }\r\n    const fallback = this.escalationPolicy.fallbackAction === \"approve\";\r\n    return {\r\n      proposalId: proposal.id,\r\n      decision: fallback ? \"approved\" : \"rejected\",\r\n      feedback: `All tiers exhausted. Fallback: ${this.escalationPolicy.fallbackAction}.`,\r\n      reviewedBy: \"escalation-fallback\",\r\n      reviewedAt: new Date(),\r\n    };\r\n  }\r\n\r\n  async propose(partial: Omit<Proposal, \"id\" | \"createdAt\">): Promise<ReviewResult> {\r\n    const proposal: Proposal = {\r\n      id: `prop-${++this.proposalCount}`,\r\n      createdAt: new Date(),\r\n      ...partial,\r\n    };\r\n\r\n    console.log(`\\n--- Proposal ${proposal.id} ---`);\r\n    console.log(`  Action: ${proposal.action}`);\r\n    console.log(`  Confidence: ${(proposal.confidence * 100).toFixed(0)}%`);\r\n    console.log(`  Cost: $${proposal.estimatedCost.toFixed(2)}`);\r\n    console.log(`  Destructive: ${proposal.isDestructive}`);\r\n\r\n    const gateResult = this.runGates(proposal);\r\n    console.log(`  Gate result: ${gateResult}`);\r\n\r\n    if (gateResult === \"auto-approve\") {\r\n      const result: ReviewResult = {\r\n        proposalId: proposal.id,\r\n        decision: \"approved\",\r\n        feedback: \"Auto-approved by gates.\",\r\n        reviewedBy: \"system\",\r\n        reviewedAt: new Date(),\r\n      };\r\n      this.updateTrust(true);\r\n      return result;\r\n    }\r\n\r\n    if (gateResult === \"auto-reject\") {\r\n      const result: ReviewResult = {\r\n        proposalId: proposal.id,\r\n        decision: \"rejected\",\r\n        feedback: \"Auto-rejected: confidence below minimum threshold.\",\r\n        reviewedBy: \"system\",\r\n        reviewedAt: new Date(),\r\n      };\r\n      this.updateTrust(false);\r\n      return result;\r\n    }\r\n\r\n    const reviewPromise = this.simulateHumanReview(proposal);\r\n    const timeout = new Promise<null>((resolve) =>\r\n      setTimeout(() => resolve(null), this.escalationPolicy.timeoutMs)\r\n    );\r\n\r\n    const result = await Promise.race([reviewPromise, timeout]);\r\n\r\n    if (result === null) {\r\n      const escalated = await this.escalate(proposal, \"Human reviewer timed out\");\r\n      this.updateTrust(escalated.decision === \"approved\");\r\n      return escalated;\r\n    }\r\n\r\n    this.updateTrust(result.decision === \"approved\");\r\n    return result;\r\n  }\r\n\r\n  private updateTrust(success: boolean): void {\r\n    this.trustScore += this.alpha * (success ? 1 - this.trustScore : 0 - this.trustScore);\r\n    console.log(`  [TRUST] Score: ${(this.trustScore * 100).toFixed(0)}%`);\r\n  }\r\n\r\n  getTrustScore(): number {\r\n    return this.trustScore;\r\n  }\r\n}\r\n\r\nasync function main() {\r\n  const agent = new HITLAgent({\r\n    tiers: [\"senior-engineer\", \"tech-lead\", \"cto\"],\r\n    timeoutMs: 150,\r\n    fallbackAction: \"reject\",\r\n  });\r\n\r\n  agent.addGate(confidenceGate(0.85));\r\n  agent.addGate(costGate(50));\r\n  agent.addGate(destructiveOpGate());\r\n\r\n  const actions: Array<Omit<Proposal, \"id\" | \"createdAt\">> = [\r\n    {\r\n      action: \"deploy-to-production\",\r\n      params: { version: \"v2.1.0\", region: \"us-east-1\" },\r\n      confidence: 0.92,\r\n      estimatedCost: 0.50,\r\n      isDestructive: false,\r\n      rationale: \"Rolling out patch for CVE-2024-1234. All tests green.\",\r\n    },\r\n    {\r\n      action: \"delete-user-account\",\r\n      params: { userId: \"u-4512\" },\r\n      confidence: 0.65,\r\n      estimatedCost: 0.01,\r\n      isDestructive: true,\r\n      rationale: \"User requested account deletion via support ticket #8823.\",\r\n    },\r\n    {\r\n      action: \"bulk-email-campaign\",\r\n      params: { listId: \"lst-77\", template: \"promo-june\" },\r\n      confidence: 0.35,\r\n      estimatedCost: 120.00,\r\n      isDestructive: false,\r\n      rationale: \"Send promotional email to 50k subscribers.\",\r\n    },\r\n  ];\r\n\r\n  for (const action of actions) {\r\n    const result = await agent.propose(action);\r\n    if (result.decision === \"approved\") {\r\n      console.log(`  [EXECUTE] Action committed. Feedback: ${result.feedback}`);\r\n    } else {\r\n      console.log(`  [SKIP] Action not taken. Feedback: ${result.feedback}`);\r\n    }\r\n  }\r\n\r\n  console.log(`\\nFinal trust score: ${(agent.getTrustScore() * 100).toFixed(0)}%`);\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-batchreviewqueue--collect-and-process-pending-approvals",
      children: "Example 2: BatchReviewQueue — Collect and Process Pending Approvals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-example2-batch-review-queue.ts\r\n// Bun: bun run ch03-example2-batch-review-queue.ts\r\n\r\ninterface PendingProposal {\r\n  id: string;\r\n  action: string;\r\n  params: Record<string, unknown>;\r\n  confidence: number;\r\n  estimatedCost: number;\r\n  submittedAt: Date;\r\n  rationale: string;\r\n}\r\n\r\ninterface BatchDecision {\r\n  proposalId: string;\r\n  approved: boolean;\r\n  feedback: string;\r\n}\r\n\r\ntype BatchReviewer = (proposals: PendingProposal[]) => Promise<BatchDecision[]>;\r\n\r\nclass BatchReviewQueue {\r\n  private queue: PendingProposal[] = [];\r\n  private isProcessing = false;\r\n  private flushIntervalMs: number;\r\n  private maxBatchSize: number;\r\n  private reviewer: BatchReviewer;\r\n  private timer: ReturnType<typeof setInterval> | null = null;\r\n\r\n  constructor(\r\n    reviewer: BatchReviewer,\r\n    options: { flushIntervalMs: number; maxBatchSize: number }\r\n  ) {\r\n    this.reviewer = reviewer;\r\n    this.flushIntervalMs = options.flushIntervalMs;\r\n    this.maxBatchSize = options.maxBatchSize;\r\n  }\r\n\r\n  enqueue(proposal: Omit<PendingProposal, \"id\" | \"submittedAt\">): string {\r\n    const id = `batch-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;\r\n    this.queue.push({ id, submittedAt: new Date(), ...proposal });\r\n    console.log(`[QUEUE] Enqueued ${id}: \"${proposal.action}\" (queue: ${this.queue.length})`);\r\n    if (this.queue.length >= this.maxBatchSize && !this.isProcessing) {\r\n      setImmediate(() => this.flush());\r\n    }\r\n    return id;\r\n  }\r\n\r\n  start(): void {\r\n    if (this.timer) return;\r\n    this.timer = setInterval(() => this.flush(), this.flushIntervalMs);\r\n    console.log(`[QUEUE] Started. Flushing every ${this.flushIntervalMs}ms or at ${this.maxBatchSize} items.`);\r\n  }\r\n\r\n  stop(): void {\r\n    if (this.timer) {\r\n      clearInterval(this.timer);\r\n      this.timer = null;\r\n    }\r\n  }\r\n\r\n  async flush(): Promise<BatchDecision[]> {\r\n    if (this.isProcessing || this.queue.length === 0) return [];\r\n    this.isProcessing = true;\r\n\r\n    const batch = this.queue.splice(0, this.maxBatchSize);\r\n    console.log(`[BATCH] Flushing ${batch.length} proposals...`);\r\n\r\n    const decisions = await this.reviewer(batch);\r\n\r\n    for (const decision of decisions) {\r\n      const proposal = batch.find((p) => p.id === decision.proposalId);\r\n      if (proposal) {\r\n        console.log(\r\n          `  ${decision.approved ? \"APPROVED\" : \"REJECTED\"} ${proposal.action}: ${decision.feedback}`\r\n        );\r\n      }\r\n    }\r\n\r\n    this.isProcessing = false;\r\n    return decisions;\r\n  }\r\n\r\n  getQueueLength(): number {\r\n    return this.queue.length;\r\n  }\r\n}\r\n\r\n// Simulated batch reviewer — auto-approves high-confidence proposals, flags others\r\nconst batchReviewer: BatchReviewer = async (proposals) => {\r\n  await new Promise((r) => setTimeout(r, 100));\r\n  return proposals.map((p) => ({\r\n    proposalId: p.id,\r\n    approved: p.confidence >= 0.7 && p.estimatedCost < 10,\r\n    feedback:\r\n      p.confidence >= 0.7 && p.estimatedCost < 10\r\n        ? \"Auto-approved in batch.\"\r\n        : \"Flagged for individual review.\",\r\n  }));\r\n};\r\n\r\nasync function main() {\r\n  const queue = new BatchReviewQueue(batchReviewer, {\r\n    flushIntervalMs: 500,\r\n    maxBatchSize: 3,\r\n  });\r\n\r\n  queue.start();\r\n\r\n  for (let i = 0; i < 7; i++) {\r\n    queue.enqueue({\r\n      action: `update-config-${i}`,\r\n      params: { key: `feature_${i}`, value: `v${i}` },\r\n      confidence: 0.5 + Math.random() * 0.5,\r\n      estimatedCost: Math.random() * 5,\r\n      rationale: `Rolling out feature flag ${i}.`,\r\n    });\r\n  }\r\n\r\n  await new Promise((r) => setTimeout(r, 1200));\r\n  queue.stop();\r\n\r\n  console.log(`\\nFinal queue length: ${queue.getQueueLength()}`);\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-trustscalinggate--learn-when-to-auto-approve",
      children: "Example 3: TrustScalingGate — Learn When to Auto-Approve"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-example3-trust-scaling-gate.ts\r\n// Bun: bun run ch03-example3-trust-scaling-gate.ts\r\n\r\ninterface ActionOutcome {\r\n  actionType: string;\r\n  confidence: number;\r\n  approved: boolean;\r\n  succeeded: boolean;\r\n}\r\n\r\nclass TrustScalingGate {\r\n  private trustByAction: Map<string, { score: number; count: number }> = new Map();\r\n  private readonly alpha = 0.15;\r\n  private readonly minSamples = 5;\r\n\r\n  private getEntry(actionType: string): { score: number; count: number } {\r\n    if (!this.trustByAction.has(actionType)) {\r\n      this.trustByAction.set(actionType, { score: 0.5, count: 0 });\r\n    }\r\n    return this.trustByAction.get(actionType)!;\r\n  }\r\n\r\n  recordOutcome(outcome: ActionOutcome): void {\r\n    const entry = this.getEntry(outcome.actionType);\r\n    if (!outcome.approved) return;\r\n    const reward = outcome.succeeded ? 1 : 0;\r\n    entry.score += this.alpha * (reward - entry.score);\r\n    entry.count++;\r\n    console.log(\r\n      `[TRUST] ${outcome.actionType}: score=${(entry.score * 100).toFixed(0)}% (n=${entry.count})`\r\n    );\r\n  }\r\n\r\n  getThreshold(actionType: string): number {\r\n    const entry = this.getEntry(actionType);\r\n    if (entry.count < this.minSamples) return 0.0;\r\n    const mapped = 1 - entry.score;\r\n    return Math.max(0.1, Math.min(0.95, mapped));\r\n  }\r\n\r\n  needsReview(actionType: string, confidence: number): boolean {\r\n    const threshold = this.getThreshold(actionType);\r\n    const needs = confidence < threshold;\r\n    console.log(\r\n      `  Gate(${actionType}): conf=${(confidence * 100).toFixed(0)}% ` +\r\n        `>= threshold=${(threshold * 100).toFixed(0)}% ? ${!needs}`\r\n    );\r\n    return needs;\r\n  }\r\n\r\n  getStats(): Record<string, { score: number; count: number; threshold: number }> {\r\n    const stats: Record<string, { score: number; count: number; threshold: number }> = {};\r\n    for (const [actionType, entry] of this.trustByAction) {\r\n      stats[actionType] = {\r\n        score: entry.score,\r\n        count: entry.count,\r\n        threshold: this.getThreshold(actionType),\r\n      };\r\n    }\r\n    return stats;\r\n  }\r\n}\r\n\r\nasync function main() {\r\n  const gate = new TrustScalingGate();\r\n\r\n  const actions: ActionOutcome[] = [\r\n    { actionType: \"format-code\", confidence: 0.70, approved: true, succeeded: true },\r\n    { actionType: \"format-code\", confidence: 0.65, approved: true, succeeded: true },\r\n    { actionType: \"format-code\", confidence: 0.80, approved: true, succeeded: true },\r\n    { actionType: \"format-code\", confidence: 0.55, approved: true, succeeded: true },\r\n    { actionType: \"format-code\", confidence: 0.90, approved: true, succeeded: true },\r\n    { actionType: \"format-code\", confidence: 0.75, approved: true, succeeded: false },\r\n    { actionType: \"format-code\", confidence: 0.85, approved: true, succeeded: true },\r\n\r\n    { actionType: \"delete-file\", confidence: 0.95, approved: true, succeeded: true },\r\n    { actionType: \"delete-file\", confidence: 0.90, approved: true, succeeded: false },\r\n    { actionType: \"delete-file\", confidence: 0.88, approved: true, succeeded: true },\r\n    { actionType: \"delete-file\", confidence: 0.92, approved: true, succeeded: false },\r\n    { actionType: \"delete-file\", confidence: 0.85, approved: true, succeeded: true },\r\n\r\n    { actionType: \"refactor\", confidence: 0.60, approved: true, succeeded: true },\r\n    { actionType: \"refactor\", confidence: 0.55, approved: true, succeeded: true },\r\n    { actionType: \"refactor\", confidence: 0.70, approved: true, succeeded: false },\r\n    { actionType: \"refactor\", confidence: 0.65, approved: true, succeeded: true },\r\n    { actionType: \"refactor\", confidence: 0.75, approved: true, succeeded: true },\r\n  ];\r\n\r\n  for (const action of actions) {\r\n    gate.recordOutcome(action);\r\n  }\r\n\r\n  console.log(\"\\n--- Trust Calibration Results ---\");\r\n  const testCases = [\r\n    { actionType: \"format-code\", confidence: 0.72 },\r\n    { actionType: \"delete-file\", confidence: 0.91 },\r\n    { actionType: \"delete-file\", confidence: 0.80 },\r\n    { actionType: \"refactor\", confidence: 0.62 },\r\n    { actionType: \"format-code\", confidence: 0.45 },\r\n  ];\r\n\r\n  for (const tc of testCases) {\r\n    const needs = gate.needsReview(tc.actionType, tc.confidence);\r\n    console.log(`  => ${needs ? \"NEEDS REVIEW\" : \"AUTO-APPROVED\"}\\n`);\r\n  }\r\n\r\n  console.log(\"\\n--- Trust Stats ---\");\r\n  console.table(gate.getStats());\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-escalation-chains-approval-gates-priority-queue-and-audit-logging",
      children: "Extended Implementation: Escalation Chains, Approval Gates, Priority Queue, and Audit Logging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section builds production HITL infrastructure: an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EscalationChain"
      }), " with timeout, delegation, and fallback handlers; a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiStageApprovalGate"
      }), " requiring N independent approvals; a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfidenceDecayTracker"
      }), " with time-based decay; a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PriorityQueueHITL"
      }), " with starvation prevention; an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuditTrailLogger"
      }), " for HITL decisions; and a human feedback aggregator with consensus scoring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-advanced-hitl.ts\r\n// bun run ch03-advanced-hitl.ts\r\n\r\n// ─── EscalationChain ───────────────────────────────────────────────────\r\n\r\ninterface EscalationTier {\r\n  name: string;\r\n  timeoutMs: number;\r\n  canHandle: (proposal: ProposalData) => boolean;\r\n}\r\n\r\ninterface ProposalData {\r\n  id: string;\r\n  action: string;\r\n  riskScore: number;\r\n  cost: number;\r\n  submittedAt: Date;\r\n}\r\n\r\ninterface EscalationResult {\r\n  proposalId: string;\r\n  finalDecision: \"approved\" | \"rejected\";\r\n  handledBy: string;\r\n  chain: string[];\r\n  totalTimeMs: number;\r\n}\r\n\r\nclass EscalationChain {\r\n  private tiers: EscalationTier[] = [];\r\n  private fallbackDecision: \"approved\" | \"rejected\" = \"rejected\";\r\n  private delegateMap = new Map<string, string[]>();\r\n\r\n  addTier(tier: EscalationTier): void {\r\n    this.tiers.push(tier);\r\n  }\r\n\r\n  addDelegate(from: string, to: string[]): void {\r\n    this.delegateMap.set(from, to);\r\n  }\r\n\r\n  setFallback(decision: \"approved\" | \"rejected\"): void {\r\n    this.fallbackDecision = decision;\r\n  }\r\n\r\n  async escalate(proposal: ProposalData): Promise<EscalationResult> {\r\n    const startTime = Date.now();\r\n    const chain: string[] = [];\r\n\r\n    for (const tier of this.tiers) {\r\n      chain.push(tier.name);\r\n      console.log(`  [ESCALATION] Trying tier: ${tier.name}`);\r\n\r\n      if (!tier.canHandle(proposal)) {\r\n        console.log(`  [ESCALATION] ${tier.name} cannot handle, skipping`);\r\n        continue;\r\n      }\r\n\r\n      const handled = await this.tryHandle(tier, proposal);\r\n      if (handled !== null) {\r\n        return {\r\n          proposalId: proposal.id,\r\n          finalDecision: handled,\r\n          handledBy: tier.name,\r\n          chain,\r\n          totalTimeMs: Date.now() - startTime,\r\n        };\r\n      }\r\n    }\r\n\r\n    console.log(`  [ESCALATION] All tiers exhausted, fallback=${this.fallbackDecision}`);\r\n    return {\r\n      proposalId: proposal.id,\r\n      finalDecision: this.fallbackDecision,\r\n      handledBy: \"fallback\",\r\n      chain,\r\n      totalTimeMs: Date.now() - startTime,\r\n    };\r\n  }\r\n\r\n  private async tryHandle(tier: EscalationTier, proposal: ProposalData): Promise<\"approved\" | \"rejected\" | null> {\r\n    const delegates = this.delegateMap.get(tier.name);\r\n    const candidates = delegates ?? [tier.name];\r\n\r\n    for (const delegate of candidates) {\r\n      try {\r\n        const result = await Promise.race([\r\n          this.simulateReview(delegate, proposal),\r\n          new Promise<null>((_, reject) =>\r\n            setTimeout(() => reject(new Error(\"timeout\")), tier.timeoutMs)\r\n          ),\r\n        ]);\r\n        return result;\r\n      } catch {\r\n        console.log(`  [ESCALATION] ${delegate} timed out or unavailable`);\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  private async simulateReview(reviewer: string, proposal: ProposalData): Promise<\"approved\" | \"rejected\"> {\r\n    await new Promise((r) => setTimeout(r, 10 + Math.random() * 30));\r\n    return proposal.riskScore < 0.7 && Math.random() > 0.2 ? \"approved\" : \"rejected\";\r\n  }\r\n}\r\n\r\n// ─── MultiStageApprovalGate ────────────────────────────────────────────\r\n\r\ninterface ApprovalRequest {\r\n  id: string;\r\n  description: string;\r\n  riskLevel: \"low\" | \"medium\" | \"high\" | \"critical\";\r\n  requiredApprovals: number;\r\n  approverPool: string[];\r\n  approvedBy: string[];\r\n  rejectedBy: string[];\r\n  status: \"pending\" | \"approved\" | \"rejected\";\r\n}\r\n\r\nclass MultiStageApprovalGate {\r\n  private requests = new Map<string, ApprovalRequest>();\r\n\r\n  createRequest(description: string, riskLevel: ApprovalRequest[\"riskLevel\"], pool: string[]): ApprovalRequest {\r\n    const requiredApprovals = riskLevel === \"critical\" ? 3 : riskLevel === \"high\" ? 2 : 1;\r\n    const request: ApprovalRequest = {\r\n      id: `approval-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,\r\n      description,\r\n      riskLevel,\r\n      requiredApprovals,\r\n      approverPool: pool,\r\n      approvedBy: [],\r\n      rejectedBy: [],\r\n      status: \"pending\",\r\n    };\r\n    this.requests.set(request.id, request);\r\n    return request;\r\n  }\r\n\r\n  submitApproval(requestId: string, approver: string, decision: \"approve\" | \"reject\"): string | null {\r\n    const req = this.requests.get(requestId);\r\n    if (!req || req.status !== \"pending\") return null;\r\n\r\n    if (decision === \"approve\") {\r\n      if (!req.approvedBy.includes(approver)) req.approvedBy.push(approver);\r\n      if (req.approvedBy.length >= req.requiredApprovals) {\r\n        req.status = \"approved\";\r\n        return \"approved\";\r\n      }\r\n    } else {\r\n      if (!req.rejectedBy.includes(approver)) req.rejectedBy.push(approver);\r\n      if (req.rejectedBy.length >= req.requiredApprovals) {\r\n        req.status = \"rejected\";\r\n        return \"rejected\";\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  getStatus(requestId: string): ApprovalRequest | undefined {\r\n    return this.requests.get(requestId);\r\n  }\r\n\r\n  requestApprovals(request: ApprovalRequest): { needed: number; remaining: number } {\r\n    const remaining = request.requiredApprovals - request.approvedBy.length;\r\n    return { needed: request.requiredApprovals, remaining: Math.max(0, remaining) };\r\n  }\r\n}\r\n\r\n// ─── ConfidenceDecayTracker ────────────────────────────────────────────\r\n\r\nclass ConfidenceDecayTracker {\r\n  private scores = new Map<string, { score: number; lastActive: Date; count: number }>();\r\n  private readonly decayRatePerDay: number;\r\n\r\n  constructor(decayRatePerDay: number = 0.05) {\r\n    this.decayRatePerDay = decayRatePerDay;\r\n  }\r\n\r\n  record(actionType: string, succeeded: boolean, alpha: number = 0.15): void {\r\n    const entry = this.scores.get(actionType) ?? { score: 0.5, lastActive: new Date(), count: 0 };\r\n    this.applyDecay(entry);\r\n    const reward = succeeded ? 1 : 0;\r\n    entry.score += alpha * (reward - entry.score);\r\n    entry.lastActive = new Date();\r\n    entry.count++;\r\n    this.scores.set(actionType, entry);\r\n  }\r\n\r\n  getConfidence(actionType: string): number {\r\n    const entry = this.scores.get(actionType);\r\n    if (!entry) return 0.5;\r\n    this.applyDecay(entry);\r\n    return entry.score;\r\n  }\r\n\r\n  needsReview(actionType: string, proposedConfidence: number, threshold: number = 0.7): boolean {\r\n    const trustScore = this.getConfidence(actionType);\r\n    const effectiveThreshold = threshold * (1 - trustScore * 0.5);\r\n    return proposedConfidence < effectiveThreshold;\r\n  }\r\n\r\n  private applyDecay(entry: { score: number; lastActive: Date; count: number }): void {\r\n    const now = new Date();\r\n    const msSinceActive = now.getTime() - entry.lastActive.getTime();\r\n    const daysSinceActive = msSinceActive / (1000 * 60 * 60 * 24);\r\n    if (daysSinceActive > 0) {\r\n      const decay = Math.pow(1 - this.decayRatePerDay, daysSinceActive);\r\n      entry.score *= decay;\r\n    }\r\n  }\r\n\r\n  getStats(): Record<string, { score: number; count: number }> {\r\n    const stats: Record<string, { score: number; count: number }> = {};\r\n    for (const [actionType, entry] of this.scores) {\r\n      stats[actionType] = { score: entry.score, count: entry.count };\r\n    }\r\n    return stats;\r\n  }\r\n}\r\n\r\n// ─── PriorityQueueHITL with Starvation Prevention ──────────────────────\r\n\r\ntype PriorityLevel = \"critical\" | \"high\" | \"medium\" | \"low\";\r\n\r\ninterface PrioritizedProposal {\r\n  id: string;\r\n  action: string;\r\n  priority: PriorityLevel;\r\n  submittedAt: Date;\r\n  lastAttemptAt: Date | null;\r\n  attemptCount: number;\r\n  riskScore: number;\r\n}\r\n\r\nclass PriorityQueueHITL {\r\n  private queues: Record<PriorityLevel, PrioritizedProposal[]> = {\r\n    critical: [],\r\n    high: [],\r\n    medium: [],\r\n    low: [],\r\n  };\r\n  private ageBoostMs: number;\r\n  private maxAttempts: number;\r\n  private processedCount = 0;\r\n\r\n  constructor(ageBoostMs: number = 30000, maxAttempts: number = 3) {\r\n    this.ageBoostMs = ageBoostMs;\r\n    this.maxAttempts = maxAttempts;\r\n  }\r\n\r\n  enqueue(proposal: Omit<PrioritizedProposal, \"id\" | \"submittedAt\" | \"lastAttemptAt\" | \"attemptCount\">): string {\r\n    const id = `hitl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;\r\n    const entry: PrioritizedProposal = {\r\n      id,\r\n      ...proposal,\r\n      submittedAt: new Date(),\r\n      lastAttemptAt: null,\r\n      attemptCount: 0,\r\n    };\r\n    this.queues[proposal.priority].push(entry);\r\n    console.log(`[PRIORITY] Enqueued ${id} (${proposal.priority}): ${proposal.action} (queue depth: ${this.queues[proposal.priority].length})`);\r\n    return id;\r\n  }\r\n\r\n  dequeue(): PrioritizedProposal | null {\r\n    const effectivePriority = this.computeEffectivePriority();\r\n    const queue = this.queues[effectivePriority];\r\n    while (queue.length > 0) {\r\n      const proposal = queue.shift()!;\r\n      if (proposal.attemptCount >= this.maxAttempts) {\r\n        console.log(`  [PRIORITY] ${proposal.id} exceeded max attempts, escalating`);\r\n        this.escalate(proposal);\r\n        continue;\r\n      }\r\n      proposal.lastAttemptAt = new Date();\r\n      proposal.attemptCount++;\r\n      return proposal;\r\n    }\r\n    return null;\r\n  }\r\n\r\n  private computeEffectivePriority(): PriorityLevel {\r\n    const now = Date.now();\r\n    const priorities: PriorityLevel[] = [\"critical\", \"high\", \"medium\", \"low\"];\r\n\r\n    for (const level of priorities) {\r\n      for (const item of this.queues[level]) {\r\n        const age = now - item.submittedAt.getTime();\r\n        if (age >= this.ageBoostMs) {\r\n          return level === \"critical\" ? \"critical\" : priorities[priorities.indexOf(level) - 1] ?? \"critical\";\r\n        }\r\n      }\r\n    }\r\n\r\n    for (const level of priorities) {\r\n      if (this.queues[level].length > 0) return level;\r\n    }\r\n\r\n    return \"low\";\r\n  }\r\n\r\n  private escalate(proposal: PrioritizedProposal): void {\r\n    console.log(`  [PRIORITY] Escalating ${proposal.id} (${proposal.action}) to critical`);\r\n    this.queues.critical.push({ ...proposal, priority: \"critical\" });\r\n  }\r\n\r\n  getDepth(): Record<PriorityLevel, number> {\r\n    return {\r\n      critical: this.queues.critical.length,\r\n      high: this.queues.high.length,\r\n      medium: this.queues.medium.length,\r\n      low: this.queues.low.length,\r\n    };\r\n  }\r\n\r\n  isEmpty(): boolean {\r\n    return Object.values(this.queues).every((q) => q.length === 0);\r\n  }\r\n}\r\n\r\n// ─── AuditTrailLogger ─────────────────────────────────────────────────\r\n\r\ninterface AuditEntry {\r\n  timestamp: Date;\r\n  proposalId: string;\r\n  action: string;\r\n  decision: string;\r\n  reviewer: string;\r\n  riskScore: number;\r\n  previousState?: string;\r\n  metadata: Record<string, unknown>;\r\n}\r\n\r\nclass AuditTrailLogger {\r\n  private entries: AuditEntry[] = [];\r\n  private readonly maxEntries: number;\r\n\r\n  constructor(maxEntries: number = 10000) {\r\n    this.maxEntries = maxEntries;\r\n  }\r\n\r\n  log(entry: Omit<AuditEntry, \"timestamp\">): void {\r\n    this.entries.push({ timestamp: new Date(), ...entry });\r\n    if (this.entries.length > this.maxEntries) this.entries.shift();\r\n  }\r\n\r\n  query(filters: Partial<AuditEntry>): AuditEntry[] {\r\n    return this.entries.filter((e) => {\r\n      for (const [key, value] of Object.entries(filters)) {\r\n        if ((e as Record<string, unknown>)[key] !== value) return false;\r\n      }\r\n      return true;\r\n    });\r\n  }\r\n\r\n  getStats(): { total: number; approved: number; rejected: number; avgRisk: number } {\r\n    const approved = this.entries.filter((e) => e.decision === \"approved\").length;\r\n    const rejected = this.entries.filter((e) => e.decision === \"rejected\").length;\r\n    const avgRisk = this.entries.reduce((s, e) => s + e.riskScore, 0) / (this.entries.length || 1);\r\n    return { total: this.entries.length, approved, rejected, avgRisk };\r\n  }\r\n\r\n  export(): string {\r\n    return JSON.stringify(this.entries, null, 2);\r\n  }\r\n}\r\n\r\n// ─── Human Feedback Aggregator ─────────────────────────────────────────\r\n\r\ninterface FeedbackVote {\r\n  reviewerId: string;\r\n  score: number;\r\n  comment: string;\r\n}\r\n\r\ninterface AggregatedFeedback {\r\n  meanScore: number;\r\n  medianScore: number;\r\n  stdDev: number;\r\n  consensusLevel: \"strong\" | \"moderate\" | \"weak\" | \"none\";\r\n  voteCount: number;\r\n  comments: string[];\r\n}\r\n\r\nclass FeedbackAggregator {\r\n  aggregate(votes: FeedbackVote[]): AggregatedFeedback {\r\n    const scores = votes.map((v) => v.score);\r\n    const n = scores.length;\r\n    if (n === 0) return { meanScore: 0, medianScore: 0, stdDev: 0, consensusLevel: \"none\", voteCount: 0, comments: [] };\r\n\r\n    const meanScore = scores.reduce((a, b) => a + b, 0) / n;\r\n    const sorted = [...scores].sort((a, b) => a - b);\r\n    const medianScore = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];\r\n    const variance = scores.reduce((sum, s) => sum + (s - meanScore) ** 2, 0) / n;\r\n    const stdDev = Math.sqrt(variance);\r\n\r\n    let consensusLevel: AggregatedFeedback[\"consensusLevel\"] = \"none\";\r\n    if (n >= 3 && stdDev < 0.3) consensusLevel = \"strong\";\r\n    else if (n >= 2 && stdDev < 0.6) consensusLevel = \"moderate\";\r\n    else if (n >= 1) consensusLevel = \"weak\";\r\n\r\n    return {\r\n      meanScore,\r\n      medianScore,\r\n      stdDev,\r\n      consensusLevel,\r\n      voteCount: n,\r\n      comments: votes.map((v) => v.comment),\r\n    };\r\n  }\r\n\r\n  static weightedScore(votes: FeedbackVote[], weights: Record<string, number>): number {\r\n    let totalWeight = 0;\r\n    let weightedSum = 0;\r\n    for (const vote of votes) {\r\n      const w = weights[vote.reviewerId] ?? 1;\r\n      weightedSum += vote.score * w;\r\n      totalWeight += w;\r\n    }\r\n    return totalWeight > 0 ? weightedSum / totalWeight : 0;\r\n  }\r\n}\r\n\r\n// ─── Demo ──────────────────────────────────────────────────────────────\r\n\r\nasync function main() {\r\n  console.log(\"=== Extended HITL Demo ===\\n\");\r\n\r\n  // 1. Escalation Chain\r\n  const chain = new EscalationChain();\r\n  chain.addTier({ name: \"junior-reviewer\", timeoutMs: 20, canHandle: (p) => p.riskScore < 0.5 });\r\n  chain.addTier({ name: \"senior-reviewer\", timeoutMs: 30, canHandle: () => true });\r\n  chain.addTier({ name: \"manager\", timeoutMs: 50, canHandle: () => true });\r\n  chain.addDelegate(\"junior-reviewer\", [\"junior-a\", \"junior-b\"]);\r\n  chain.addDelegate(\"senior-reviewer\", [\"senior-a\"]);\r\n  chain.setFallback(\"rejected\");\r\n\r\n  const escResult = await chain.escalate({\r\n    id: \"p1\", action: \"delete-database\", riskScore: 0.9, cost: 1000, submittedAt: new Date(),\r\n  });\r\n  console.log(`Escalation: ${escResult.finalDecision} by ${escResult.handledBy} via [${escResult.chain.join(\" -> \")}]`);\r\n\r\n  // 2. MultiStageApprovalGate\r\n  const gate = new MultiStageApprovalGate();\r\n  const req = gate.createRequest(\"Deploy to production\", \"critical\", [\"alice\", \"bob\", \"carol\", \"dave\"]);\r\n  console.log(`\\nMultiStage: ${req.id} needs ${req.requiredApprovals} approvals`);\r\n  gate.submitApproval(req.id, \"alice\", \"approve\");\r\n  gate.submitApproval(req.id, \"bob\", \"approve\");\r\n  console.log(`  After 2 approvals: ${gate.submitApproval(req.id, \"carol\", \"approve\")}`);\r\n\r\n  // 3. Confidence Decay\r\n  const decay = new ConfidenceDecayTracker(0.05);\r\n  for (let i = 0; i < 10; i++) {\r\n    decay.record(\"code-gen\", true);\r\n  }\r\n  console.log(`\\nConfidence Decay: code-gen score=${decay.getConfidence(\"code-gen\").toFixed(3)}`);\r\n\r\n  // 4. Priority Queue\r\n  const pq = new PriorityQueueHITL(500, 2);\r\n  pq.enqueue({ action: \"fix-typo\", priority: \"low\", riskScore: 0.1 });\r\n  pq.enqueue({ action: \"patch-security\", priority: \"critical\", riskScore: 0.9 });\r\n  pq.enqueue({ action: \"refactor-module\", priority: \"medium\", riskScore: 0.3 });\r\n  console.log(`\\nPriority Queue depths:`, pq.getDepth());\r\n  const item = pq.dequeue();\r\n  console.log(`  Dequeued: ${item?.id} (${item?.priority}): ${item?.action}`);\r\n\r\n  // 5. Audit Trail\r\n  const audit = new AuditTrailLogger();\r\n  audit.log({ proposalId: \"p1\", action: \"deploy\", decision: \"approved\", reviewer: \"alice\", riskScore: 0.3, metadata: {} });\r\n  audit.log({ proposalId: \"p2\", action: \"delete\", decision: \"rejected\", reviewer: \"bob\", riskScore: 0.9, metadata: {} });\r\n  console.log(`\\nAudit Trail:`, audit.getStats());\r\n\r\n  // 6. Feedback Aggregator\r\n  const aggregator = new FeedbackAggregator();\r\n  const votes: FeedbackVote[] = [\r\n    { reviewerId: \"alice\", score: 0.85, comment: \"Looks good\" },\r\n    { reviewerId: \"bob\", score: 0.90, comment: \"Minor nits\" },\r\n    { reviewerId: \"carol\", score: 0.70, comment: \"Check edge cases\" },\r\n  ];\r\n  const agg = aggregator.aggregate(votes);\r\n  console.log(`\\nFeedback Aggregator: mean=${agg.meanScore.toFixed(2)} median=${agg.medianScore.toFixed(2)} consensus=${agg.consensusLevel}`);\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts demonstrated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EscalationChain"
        }), " models multi-tier human escalation with per-tier timeouts, delegation pools, and a configurable fallback decision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MultiStageApprovalGate"
        }), " requires N independent approvals before an action commits, with separate approve/reject counters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ConfidenceDecayTracker"
        }), " applies time-based decay to trust scores — inactivity reduces autonomy over time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PriorityQueueHITL"
        }), " implements starvation prevention via age-boosting: old proposals get promoted to higher-priority queues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AuditTrailLogger"
        }), " provides immutable, queryable HITL decision records with summary statistics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FeedbackAggregator"
        }), " computes mean, median, standard deviation, and consensus level from multiple reviewer votes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hitl-production-tooling-workload-balancing-stale-proposals-performance-tracking-and-simulated-reviewers",
      children: "HITL Production Tooling: Workload Balancing, Stale Proposals, Performance Tracking, and Simulated Reviewers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section adds production-grade HITL infrastructure: a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReviewerWorkloadBalancer"
      }), " that distributes proposals across available humans, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StaleProposalCleaner"
      }), " that expires unassigned proposals after TTL, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HumanPerformanceTracker"
      }), " measuring reviewer accuracy/speed/fatigue, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimulatedReviewerPool"
      }), " for testing, and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProposalLifecycleLogger"
      }), " for full lifecycle audit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"HITL Escalation Flow with Timeouts & Fallbacks\"\r\n        A[Proposal Submitted] --> B{Run Gates}\r\n        B -->|Auto-Approve| C[Execute]\r\n        B -->|Review Needed| D[Primary Reviewer]\r\n        D -->|Timeout| E[Secondary Reviewer]\r\n        D -->|Reject| F[Rejected]\r\n        D -->|Approve| C\r\n        E -->|Timeout| F\r\n        E -->|Reject| F\r\n        E -->|Approve| C\r\n        F --> G{Reviewer Available?}\r\n        G -->|Yes| H[Delegate Chain]\r\n        H --> D\r\n        G -->|No| I[Fallback Action]\r\n        I --> J{Policy}\r\n        J -->|Approve| C\r\n        J -->|Reject| K[Escalation Log]\r\n        C --> L[Outcome Recorded]\r\n    end\r\n    \r\n    style A fill:#3498db,color:#fff\r\n    style C fill:#2ecc71,color:#fff\r\n    style F fill:#f39c12,color:#fff\r\n    style K fill:#e74c3c,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-hitl-tooling.ts\r\n// bun run ch03-hitl-tooling.ts\r\n\r\n// ─── ReviewerWorkloadBalancer ──────────────────────────────────────────\r\n\r\ninterface Reviewer {\r\n  id: string;\r\n  name: string;\r\n  maxWorkload: number;\r\n  currentLoad: number;\r\n  specialties: string[];\r\n  averageReviewTimeMs: number;\r\n  isAvailable: boolean;\r\n}\r\n\r\ninterface WorkloadAssignment {\r\n  proposalId: string;\r\n  reviewerId: string;\r\n  estimatedDurationMs: number;\r\n  assignedAt: Date;\r\n}\r\n\r\nclass ReviewerWorkloadBalancer {\r\n  private reviewers: Reviewer[] = [];\r\n  private assignments: WorkloadAssignment[] = [];\r\n\r\n  registerReviewer(reviewer: Omit&lt;Reviewer, \"currentLoad\" | \"isAvailable\"&gt;): void {\r\n    this.reviewers.push({ ...reviewer, currentLoad: 0, isAvailable: true });\r\n  }\r\n\r\n  assign(proposalId: string, category: string, estimatedComplexity: number): Reviewer | null {\r\n    const available = this.reviewers.filter(\r\n      (r) => r.isAvailable && r.currentLoad &lt; r.maxWorkload\r\n    );\r\n\r\n    if (available.length === 0) return null;\r\n\r\n    const scored = available.map((r) => {\r\n      const specialtyBonus = r.specialties.includes(category) ? 0.2 : 0;\r\n      const loadFactor = 1 - r.currentLoad / r.maxWorkload;\r\n      const speedFactor = Math.max(0.3, 1 - r.averageReviewTimeMs / 10000);\r\n      const score = specialtyBonus + loadFactor * 0.5 + speedFactor * 0.3;\r\n      return { reviewer: r, score };\r\n    });\r\n\r\n    scored.sort((a, b) => b.score - a.score);\r\n    const best = scored[0].reviewer;\r\n    best.currentLoad++;\r\n    if (best.currentLoad >= best.maxWorkload) best.isAvailable = false;\r\n\r\n    this.assignments.push({\r\n      proposalId,\r\n      reviewerId: best.id,\r\n      estimatedDurationMs: best.averageReviewTimeMs * estimatedComplexity,\r\n      assignedAt: new Date(),\r\n    });\r\n\r\n    return best;\r\n  }\r\n\r\n  completeReview(reviewerId: string): void {\r\n    const reviewer = this.reviewers.find((r) => r.id === reviewerId);\r\n    if (reviewer) {\r\n      reviewer.currentLoad = Math.max(0, reviewer.currentLoad - 1);\r\n      reviewer.isAvailable = reviewer.currentLoad &lt; reviewer.maxWorkload;\r\n    }\r\n  }\r\n\r\n  getWorkloadSnapshot(): Array&lt;{ id: string; load: number; maxLoad: number; available: boolean }&gt; {\r\n    return this.reviewers.map((r) => ({\r\n      id: r.id,\r\n      load: r.currentLoad,\r\n      maxLoad: r.maxWorkload,\r\n      available: r.isAvailable,\r\n    }));\r\n  }\r\n\r\n  getAverageUtilization(): number {\r\n    if (this.reviewers.length === 0) return 0;\r\n    const totalLoad = this.reviewers.reduce((s, r) => s + r.currentLoad, 0);\r\n    const totalCapacity = this.reviewers.reduce((s, r) => s + r.maxWorkload, 0);\r\n    return totalCapacity > 0 ? totalLoad / totalCapacity : 0;\r\n  }\r\n}\r\n\r\n// ─── StaleProposalCleaner ──────────────────────────────────────────────\r\n\r\ninterface StaleProposal {\r\n  id: string;\r\n  action: string;\r\n  status: \"pending\" | \"assigned\" | \"in-review\";\r\n  submittedAt: Date;\r\n  assignedAt: Date | null;\r\n  ttlMs: number;\r\n}\r\n\r\nclass StaleProposalCleaner {\r\n  private proposals: Map&lt;string, StaleProposal&gt; = new Map();\r\n  private expiredCount = 0;\r\n  private cleanInterval: ReturnType&lt;typeof setInterval&gt; | null = null;\r\n\r\n  track(proposal: StaleProposal): void {\r\n    this.proposals.set(proposal.id, proposal);\r\n  }\r\n\r\n  updateStatus(id: string, status: StaleProposal[\"status\"]): void {\r\n    const p = this.proposals.get(id);\r\n    if (p) {\r\n      p.status = status;\r\n      if (status === \"assigned\" && !p.assignedAt) p.assignedAt = new Date();\r\n    }\r\n  }\r\n\r\n  private computeRemainingMs(proposal: StaleProposal): number {\r\n    const start = proposal.assignedAt ?? proposal.submittedAt;\r\n    return proposal.ttlMs - (Date.now() - start.getTime());\r\n  }\r\n\r\n  getExpired(): StaleProposal[] {\r\n    const expired: StaleProposal[] = [];\r\n    for (const[\"id, proposal\"] of this.proposals) {\r\n      if (proposal.status === \"in-review\") continue;\r\n      if (this.computeRemainingMs(proposal) &lt;= 0) {\r\n        expired.push(proposal);\r\n        this.proposals.delete(id);\r\n        this.expiredCount++;\r\n      }\r\n    }\r\n    return expired;\r\n  }\r\n\r\n  getExpiringSoon(thresholdMs: number): StaleProposal[] {\r\n    return[\"...this.proposals.values()\"].filter((p) => {\r\n      const remaining = this.computeRemainingMs(p);\r\n      return remaining > 0 && remaining &lt;= thresholdMs;\r\n    });\r\n  }\r\n\r\n  startAutoClean(intervalMs: number = 5000, onExpired?: (proposals: StaleProposal[]) => void): void {\r\n    if (this.cleanInterval) return;\r\n    this.cleanInterval = setInterval(() => {\r\n      const expired = this.getExpired();\r\n      if (expired.length > 0) {\r\n        console.log(`[CLEANER] Expired ${expired.length} stale proposals`);\r\n        onExpired?.(expired);\r\n      }\r\n    }, intervalMs);\r\n  }\r\n\r\n  stopAutoClean(): void {\r\n    if (this.cleanInterval) {\r\n      clearInterval(this.cleanInterval);\r\n      this.cleanInterval = null;\r\n    }\r\n  }\r\n\r\n  getStats(): { tracked: number; expired: number } {\r\n    return { tracked: this.proposals.size, expired: this.expiredCount };\r\n  }\r\n}\r\n\r\n// ─── HumanPerformanceTracker ──────────────────────────────────────────\r\n\r\ninterface ReviewEvent {\r\n  proposalId: string;\r\n  reviewerId: string;\r\n  decision: \"approved\" | \"rejected\" | \"escalated\";\r\n  timeToDecisionMs: number;\r\n  outcomeCorrect: boolean;\r\n  fatigueLevel: number;\r\n  timestamp: Date;\r\n}\r\n\r\ninterface ReviewerStats {\r\n  reviewerId: string;\r\n  totalReviews: number;\r\n  accuracy: number;\r\n  averageTimeMs: number;\r\n  rejectionRate: number;\r\n  fatigueLevel: number;\r\n  streak: number;\r\n  efficiencyScore: number;\r\n}\r\n\r\nclass HumanPerformanceTracker {\r\n  private events: ReviewEvent[] = [];\r\n  private readonly fatigueDecayPerReview = 0.05;\r\n  private readonly fatigueRecoveryPerMinute = 0.02;\r\n\r\n  recordReview(event: Omit&lt;ReviewEvent, \"timestamp\" | \"fatigueLevel\"&gt;): void {\r\n    const recentEvents = this.events.filter((e) => e.reviewerId === event.reviewerId).slice(-10);\r\n    const fatigueLevel = Math.min(1, recentEvents.reduce((s, e) => s + this.fatigueDecayPerReview, 0));\r\n\r\n    this.events.push({ ...event, fatigueLevel, timestamp: new Date() });\r\n  }\r\n\r\n  getStats(reviewerId: string): ReviewerStats | null {\r\n    const reviewerEvents = this.events.filter((e) => e.reviewerId === reviewerId);\r\n    if (reviewerEvents.length === 0) return null;\r\n\r\n    const totalReviews = reviewerEvents.length;\r\n    const correctOutcomes = reviewerEvents.filter((e) => e.outcomeCorrect).length;\r\n    const rejected = reviewerEvents.filter((e) => e.decision === \"rejected\").length;\r\n    const avgTime = reviewerEvents.reduce((s, e) => s + e.timeToDecisionMs, 0) / totalReviews;\r\n\r\n    let streak = 0;\r\n    for (let i = reviewerEvents.length - 1; i >= 0; i--) {\r\n      if (reviewerEvents[i].outcomeCorrect) streak++;\r\n      else break;\r\n    }\r\n\r\n    const accuracy = totalReviews > 0 ? correctOutcomes / totalReviews : 0;\r\n    const latest = reviewerEvents[reviewerEvents.length - 1];\r\n\r\n    const efficiencyScore = accuracy * (1 / Math.max(1, avgTime / 1000)) * (1 - latest.fatigueLevel);\r\n\r\n    return {\r\n      reviewerId,\r\n      totalReviews,\r\n      accuracy,\r\n      averageTimeMs: avgTime,\r\n      rejectionRate: totalReviews > 0 ? rejected / totalReviews : 0,\r\n      fatigueLevel: latest.fatigueLevel,\r\n      streak,\r\n      efficiencyScore,\r\n    };\r\n  }\r\n\r\n  getRankedReviewers(): ReviewerStats[] {\r\n    const ids = [...new Set(this.events.map((e) => e.reviewerId))];\r\n    return ids\r\n      .map((id) => this.getStats(id)!)\r\n      .filter((s) => s !== null)\r\n      .sort((a, b) => b.efficiencyScore - a.efficiencyScore);\r\n  }\r\n\r\n  applyTimeDecay(minutesPassed: number): void {\r\n    for (const event of this.events) {\r\n      event.fatigueLevel = Math.max(0, event.fatigueLevel - this.fatigueRecoveryPerMinute * minutesPassed);\r\n    }\r\n  }\r\n\r\n  exportCsv(): string {\r\n    const header = \"reviewerId,proposalId,decision,timeMs,correct,fatigue,timestamp\";\r\n    const rows = this.events.map((e) =>\r\n      `${e.reviewerId},${e.proposalId},${e.decision},${e.timeToDecisionMs.toFixed(0)},${e.outcomeCorrect},${e.fatigueLevel.toFixed(2)},${e.timestamp.toISOString()}`\r\n    );\r\n    return[\"header, ...rows\"].join(\"\\n\");\r\n  }\r\n}\r\n\r\n// ─── SimulatedReviewerPool ─────────────────────────────────────────────\r\n\r\ntype SimulatedDecision = \"approve\" | \"reject\" | \"escalate\";\r\n\r\ninterface SimulatedReviewerConfig {\r\n  id: string;\r\n  name: string;\r\n  accuracy: number;\r\n  speedMs: [number, number];\r\n  fatigueThreshold: number;\r\n}\r\n\r\nclass SimulatedReviewerPool {\r\n  private reviewers: SimulatedReviewerConfig[] = [];\r\n  private reviewCount: Map&lt;string, number&gt; = new Map();\r\n  private fatigue: Map&lt;string, number&gt; = new Map();\r\n\r\n  addReviewer(config: SimulatedReviewerConfig): void {\r\n    this.reviewers.push(config);\r\n    this.reviewCount.set(config.id, 0);\r\n    this.fatigue.set(config.id, 0);\r\n  }\r\n\r\n  getRandomReviewer(): SimulatedReviewerConfig {\r\n    return this.reviewers[\"Math.floor(Math.random() * this.reviewers.length)\"];\r\n  }\r\n\r\n  async simulateReview(\r\n    reviewerId: string,\r\n    proposalRisk: number\r\n  ): Promise&lt;{ decision: SimulatedDecision; timeMs: number; feedback: string }&gt; {\r\n    const reviewer = this.reviewers.find((r) => r.id === reviewerId);\r\n    if (!reviewer) throw new Error(`Unknown reviewer: ${reviewerId}`);\r\n\r\n    const[\"minSpeed, maxSpeed\"] = reviewer.speedMs;\r\n    const timeMs = minSpeed + Math.random() * (maxSpeed - minSpeed);\r\n    const currentFatigue = this.fatigue.get(reviewerId) ?? 0;\r\n    const count = this.reviewCount.get(reviewerId) ?? 0;\r\n\r\n    await new Promise((r) => setTimeout(r, Math.min(timeMs, 50)));\r\n\r\n    const effectiveAccuracy = reviewer.accuracy * (1 - currentFatigue * 0.5);\r\n    const rand = Math.random();\r\n\r\n    let decision: SimulatedDecision;\r\n    let feedback: string;\r\n\r\n    if (rand &lt; effectiveAccuracy) {\r\n      if (proposalRisk > 0.7) {\r\n        decision = \"escalate\";\r\n        feedback = `Risk too high (${(proposalRisk * 100).toFixed(0)}%). Escalating.`;\r\n      } else {\r\n        decision = \"approve\";\r\n        feedback = \"Looks good. Approved.\";\r\n      }\r\n    } else if (rand &lt; effectiveAccuracy + (1 - effectiveAccuracy) * 0.6) {\r\n      decision = \"reject\";\r\n      feedback = proposalRisk > 0.5\r\n        ? \"Rejected: concerns about implementation approach.\"\r\n        : \"Rejected: needs more detail.\";\r\n    } else {\r\n      decision = currentFatigue > reviewer.fatigueThreshold ? \"escalate\" : \"approve\";\r\n      feedback = currentFatigue > reviewer.fatigueThreshold\r\n        ? \"Fatigue threshold exceeded. Escalating.\"\r\n        : \"Approved with minor suggestions.\";\r\n    }\r\n\r\n    this.reviewCount.set(reviewerId, count + 1);\r\n    this.fatigue.set(reviewerId, currentFatigue + 0.05);\r\n\r\n    return { decision, timeMs, feedback };\r\n  }\r\n\r\n  resetFatigue(): void {\r\n    for (const key of this.fatigue.keys()) {\r\n      this.fatigue.set(key, 0);\r\n    }\r\n  }\r\n\r\n  getFatigueLevels(): Record&lt;string, number&gt; {\r\n    const levels: Record&lt;string, number&gt; = {};\r\n    for (const[\"id, level\"] of this.fatigue) {\r\n      levels[id] = level;\r\n    }\r\n    return levels;\r\n  }\r\n\r\n  getReviewerCount(): number {\r\n    return this.reviewers.length;\r\n  }\r\n}\r\n\r\n// ─── ProposalLifecycleLogger ───────────────────────────────────────────\r\n\r\ninterface LifecycleEvent {\r\n  timestamp: Date;\r\n  proposalId: string;\r\n  eventType: \"created\" | \"gated\" | \"assigned\" | \"reviewed\" | \"escalated\" | \"approved\" | \"rejected\" | \"executed\" | \"expired\";\r\n  actor: string;\r\n  detail: string;\r\n  durationMs?: number;\r\n}\r\n\r\nclass ProposalLifecycleLogger {\r\n  private events: LifecycleEvent[] = [];\r\n\r\n  log(event: Omit&lt;LifecycleEvent, \"timestamp\"&gt;): void {\r\n    this.events.push({ ...event, timestamp: new Date() });\r\n  }\r\n\r\n  getTimeline(proposalId: string): LifecycleEvent[] {\r\n    return this.events\r\n      .filter((e) => e.proposalId === proposalId)\r\n      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());\r\n  }\r\n\r\n  getTimeInStage(proposalId: string): Array&lt;{ stage: string; durationMs: number }&gt; {\r\n    const timeline = this.getTimeline(proposalId);\r\n    const stages: Array&lt;{ stage: string; durationMs: number }&gt; = [];\r\n    for (let i = 1; i &lt; timeline.length; i++) {\r\n      const duration = timeline[i].timestamp.getTime() - timeline[i - 1].timestamp.getTime();\r\n      stages.push({ stage: `${timeline[i - 1].eventType} → ${timeline[i].eventType}`, durationMs: duration });\r\n    }\r\n    return stages;\r\n  }\r\n\r\n  getStats(): { totalProposals: number; avgTimeToDecision: number; approvalRate: number } {\r\n    const proposalIds = [...new Set(this.events.map((e) => e.proposalId))];\r\n    const approved = this.events.filter((e) => e.eventType === \"approved\").length;\r\n    const rejected = this.events.filter((e) => e.eventType === \"rejected\").length;\r\n\r\n    let totalDecisionTime = 0;\r\n    let decisionCount = 0;\r\n    for (const id of proposalIds) {\r\n      const timeline = this.getTimeline(id);\r\n      const created = timeline.find((e) => e.eventType === \"created\");\r\n      const decided = timeline.find((e) => e.eventType === \"approved\" || e.eventType === \"rejected\" || e.eventType === \"expired\");\r\n      if (created && decided) {\r\n        totalDecisionTime += decided.timestamp.getTime() - created.timestamp.getTime();\r\n        decisionCount++;\r\n      }\r\n    }\r\n\r\n    const totalDecisions = approved + rejected;\r\n    return {\r\n      totalProposals: proposalIds.length,\r\n      avgTimeToDecision: decisionCount > 0 ? totalDecisionTime / decisionCount : 0,\r\n      approvalRate: totalDecisions > 0 ? approved / totalDecisions : 0,\r\n    };\r\n  }\r\n\r\n  exportJson(): string {\r\n    return JSON.stringify(this.events, null, 2);\r\n  }\r\n}\r\n\r\n// ─── Demo ──────────────────────────────────────────────────────────────\r\n\r\nasync function main() {\r\n  console.log(\"=== HITL Production Tooling Demo ===\\n\");\r\n\r\n  // 1. Reviewer Workload Balancer\r\n  const balancer = new ReviewerWorkloadBalancer();\r\n  balancer.registerReviewer({ id: \"alice\", name: \"Alice\", maxWorkload: 3, specialties: [\"security\", \"backend\"], averageReviewTimeMs: 2000 });\r\n  balancer.registerReviewer({ id: \"bob\", name: \"Bob\", maxWorkload: 5, specialties: [\"frontend\", \"ux\"], averageReviewTimeMs: 3000 });\r\n  balancer.registerReviewer({ id: \"carol\", name: \"Carol\", maxWorkload: 2, specialties: [\"infrastructure\", \"security\"], averageReviewTimeMs: 1500 });\r\n\r\n  for (let i = 0; i &lt; 6; i++) {\r\n    const assigned = balancer.assign(`prop-${i}`, i % 2 === 0 ? \"security\" : \"frontend\", 1);\r\n    console.log(`Workload: prop-${i} → ${assigned ? assigned.name : \"NO AVAILABLE REVIEWER\"}`);\r\n  }\r\n  balancer.completeReview(\"alice\");\r\n  const assigned2 = balancer.assign(\"prop-6\", \"security\", 1);\r\n  console.log(`  prop-6 (after Alice freed) → ${assigned2 ? assigned2.name : \"NONE\"}`);\r\n  console.log(`  Avg utilization: ${(balancer.getAverageUtilization() * 100).toFixed(0)}%`);\r\n\r\n  // 2. Stale Proposal Cleaner\r\n  const cleaner = new StaleProposalCleaner();\r\n  cleaner.track({ id: \"sp-1\", action: \"deploy\", status: \"pending\", submittedAt: new Date(Date.now() - 5000), assignedAt: null, ttlMs: 2000 });\r\n  cleaner.track({ id: \"sp-2\", action: \"rollback\", status: \"assigned\", submittedAt: new Date(Date.now() - 3000), assignedAt: new Date(Date.now() - 2000), ttlMs: 4000 });\r\n  const expired = cleaner.getExpired();\r\n  console.log(`\\nStale Cleaner: ${expired.length} expired proposals`);\r\n  cleaner.getExpiringSoon(1000).forEach((p) => console.log(`  Expiring soon: ${p.id} (${p.action})`));\r\n\r\n  // 3. Human Performance Tracker\r\n  const perfTracker = new HumanPerformanceTracker();\r\n  for (let i = 0; i &lt; 8; i++) {\r\n    perfTracker.recordReview({\r\n      proposalId: `perf-${i}`,\r\n      reviewerId: \"alice\",\r\n      decision: i &lt; 6 ? \"approved\" : \"rejected\",\r\n      timeToDecisionMs: 1500 + Math.random() * 2000,\r\n      outcomeCorrect: i !== 5,\r\n    });\r\n  }\r\n  const aliceStats = perfTracker.getStats(\"alice\");\r\n  console.log(`\\nPerformance Tracker (Alice):`);\r\n  console.log(`  Accuracy: ${(aliceStats!.accuracy * 100).toFixed(0)}%`);\r\n  console.log(`  Avg time: ${aliceStats!.averageTimeMs.toFixed(0)}ms`);\r\n  console.log(`  Fatigue: ${(aliceStats!.fatigueLevel * 100).toFixed(0)}%`);\r\n  console.log(`  Streak: ${aliceStats!.streak}`);\r\n  console.log(`  Efficiency score: ${aliceStats!.efficiencyScore.toFixed(3)}`);\r\n\r\n  // 4. Simulated Reviewer Pool\r\n  const pool = new SimulatedReviewerPool();\r\n  pool.addReviewer({ id: \"r1\", name: \"Fast Alice\", accuracy: 0.85, speedMs: [100, 300], fatigueThreshold: 0.6 });\r\n  pool.addReviewer({ id: \"r2\", name: \"Careful Bob\", accuracy: 0.95, speedMs: [400, 800], fatigueThreshold: 0.4 });\r\n  pool.addReviewer({ id: \"r3\", name: \"Quick Carol\", accuracy: 0.70, speedMs: [50, 150], fatigueThreshold: 0.8 });\r\n\r\n  console.log(`\\nSimulated Reviewer Pool (${pool.getReviewerCount()} reviewers):`);\r\n  for (let i = 0; i &lt; 5; i++) {\r\n    const reviewer = pool.getRandomReviewer();\r\n    const { decision, timeMs } = await pool.simulateReview(reviewer.id, 0.3 + Math.random() * 0.6);\r\n    console.log(`  ${reviewer.name}: ${decision} (${timeMs.toFixed(0)}ms)`);\r\n  }\r\n  console.log(`  Fatigue levels:`, pool.getFatigueLevels());\r\n\r\n  // 5. Proposal Lifecycle Logger\r\n  const logger = new ProposalLifecycleLogger();\r\n  logger.log({ proposalId: \"pl-1\", eventType: \"created\", actor: \"agent\", detail: \"Proposal created\" });\r\n  logger.log({ proposalId: \"pl-1\", eventType: \"gated\", actor: \"system\", detail: \"Confidence=0.72 → review needed\" });\r\n  logger.log({ proposalId: \"pl-1\", eventType: \"assigned\", actor: \"alice\", detail: \"Assigned to Alice\" });\r\n  logger.log({ proposalId: \"pl-1\", eventType: \"reviewed\", actor: \"alice\", detail: \"Reviewed and approved\" });\r\n  logger.log({ proposalId: \"pl-1\", eventType: \"executed\", actor: \"system\", detail: \"Action committed\" });\r\n\r\n  const timeline = logger.getTimeline(\"pl-1\");\r\n  console.log(`\\nLifecycle Logger: ${timeline.length} events for pl-1`);\r\n  timeline.forEach((e) => console.log(`  ${e.eventType}: ${e.detail} (${e.actor})`));\r\n  const stats = logger.getStats();\r\n  console.log(`  Total proposals: ${stats.totalProposals}`);\r\n  console.log(`  Approval rate: ${(stats.approvalRate * 100).toFixed(0)}%`);\r\n}\r\n\r\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key concepts demonstrated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ReviewerWorkloadBalancer"
        }), " scores reviewers by specialty match, current load, and speed to make optimal assignment decisions; tracks utilization across the pool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "StaleProposalCleaner"
        }), " tracks proposal TTLs, detects expired items, and supports automatic periodic cleanup with a configurable callback; also surfaces items expiring soon"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HumanPerformanceTracker"
        }), " measures accuracy, average decision time, fatigue level (cumulative per-session), streak length, and computes a composite efficiency score for reviewer ranking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SimulatedReviewerPool"
        }), " generates configurable reviewers with distinct accuracy, speed distributions, and fatigue thresholds; useful for testing HITL systems without real humans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ProposalLifecycleLogger"
        }), " records every state transition with timestamps, computes time-in-stage breakdowns per proposal, and aggregates approval rate and average time-to-decision statistics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propose-then-commit"
        }), " is the atomic HITL pattern: separate suggestion from execution with a human gate between them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approval gates"
        }), " (confidence, cost, destructive-op detection) automate the triage decisions so humans only see what matters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation policies"
        }), " prevent deadlock: timeouts, delegation chains, and fallback actions ensure every proposal terminates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch review"
        }), " trades latency for throughput; real-time review trades throughput for responsiveness. Choose based on risk and urgency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trust calibration"
        }), " closes the meta-loop: the agent's autonomy expands as its demonstrated reliability increases. Start conservative; expand with proof."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All three patterns compose naturally — a batch queue can feed into a trust-scaling gate, which feeds into a HITL agent."
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
          children: "What is the fundamental invariant of the propose-then-commit pattern? Why is it important?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare confidence-based gates and cost-based gates. In what scenarios would you use one over the other? How would you combine them?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the difference between timeout escalation and delegation chain escalation. Can they be combined? If so, how?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is approval fatigue and how does trust calibration help mitigate it?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the batch review pattern, what happens to proposals that are enqueued while a batch is currently being processed?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-stage approval."
          }), " Extend Example 1 so that certain high-cost proposals require ", (0,jsx_runtime.jsx)(_components.em, {
            children: "two"
          }), " independent human approvals before execution. Modify the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ReviewResult"
          }), " type and the escalation policy accordingly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confidence decay."
          }), " Modify the trust calibration in Example 3 so that the trust score decays by 5% per day of inactivity. Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "lastActive"
          }), " timestamp to each action type entry and apply decay before every read."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Priority queue."
          }), " Modify Example 2 to support priority levels (low, medium, high, critical). High-priority proposals are flushed immediately (bypassing the batch window) while low-priority proposals wait for the normal flush interval."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost-aware batching."
          }), " Enhance the batch reviewer in Example 2 so that if the cumulative estimated cost of a batch exceeds ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "100"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      separator: "true",
                      children: ","
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "e"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "b"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "c"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "l"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "o"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "l"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "e"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "f"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "r"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "100, the batch is split and only the first "
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.8889em",
                    verticalAlign: "-0.1944em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "100"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mpunct",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.1667em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "ba"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "hi"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "ss"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0197em"
                  },
                  children: "pl"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "an"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0197em"
                  },
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.1076em"
                  },
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                })]
              })
            })]
          }), "100 worth of proposals is submitted, with the remainder held for the next flush."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge",
      children: "Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a production HITL orchestrator."
      }), " Design a system that combines all three examples into a single orchestrator with these requirements:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Proposals enter via an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueue()"
        }), " method"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each proposal is tagged with an action type, confidence, estimated cost, and priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A pipeline of gates runs synchronously: confidence gate → cost gate → destructive-op gate → trust-scaling gate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If all gates pass, the proposal is executed immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If any gate flags it, the proposal enters the batch review queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The batch queue flushes based on either max batch size (5) or max wait time (30s simulated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A reviewed proposal feeds its outcome back into the trust-scaling gate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalation fires if no reviewer picks up a proposal within 60s (simulated)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement as a single class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HITLOrchestrator"
      }), ". The output should be a complete run that demonstrates all paths: auto-approve, batch-reviewed-and-approved, batch-reviewed-and-rejected, and escalation."]
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