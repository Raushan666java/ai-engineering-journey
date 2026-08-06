"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59836],{

/***/ 88283
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
const site_docs_courses_loop_engineering_ch_03_human_in_the_loop_md_165_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch03-human-in-the-loop","title":"Chapter 3: Human-in-the-Loop","description":"Previous Feedback Loops","source":"@site/docs/courses/loop-engineering/ch03-human-in-the-loop.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch03-human-in-the-loop","permalink":"/ai-engineering-journey/loop-engineering/ch03-human-in-the-loop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"ch03-human-in-the-loop","slug":"/loop-engineering/ch03-human-in-the-loop","title":"Chapter 3: Human-in-the-Loop","sidebar_label":"Chapter 3: Human-in-the-Loop","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"Chapter 2: Agent Loop Architecture","permalink":"/ai-engineering-journey/loop-engineering/ch02-agent-loop-architecture"},"next":{"title":"Chapter 4: Feedback Loops","permalink":"/ai-engineering-journey/loop-engineering/ch04-feedback-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        href: "../../assets/images/lessons/loop-engineering/ch03-human-in-the-loop/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch03-human-in-the-loop/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/loop-engineering/ch03-human-in-the-loop/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch03-human-in-the-loop/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/loop-engineering/ch03-human-in-the-loop/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch03-human-in-the-loop/visual-explanation.png",
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
        children: " ┌─────────┐     propose     ┌──────────┐    approve    ┌─────────┐\n │  Agent   │ ──────────────>│  Human   │ ────────────> │  Action │\n │          │   (action +    │  Review  │   (or reject) │  Exec.  │\n │          │   rationale)   │  Portal  │               │         │\n └─────────┘                 └──────────┘               └─────────┘\n      │                           │\n      │      escalate             │ timeout\n      └──────────────────────────>┘\n                              (escalation chain)\n"
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
        children: "auto-approve zone:       c ≥ 0.85\nhuman review zone:       0.30 < c < 0.85\nauto-reject zone:        c ≤ 0.30\n"
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
        children: "Session n:  propose → review → execute → outcome (success/failure)\nSession n+1: trust_score ← update(trust_score, outcome)\n             autonomy_level ← map(trust_score)\n"
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
        children: "// ch03-example1-hitl-agent.ts\n// Bun: bun run ch03-example1-hitl-agent.ts\n\ninterface Proposal {\n  id: string;\n  action: string;\n  params: Record<string, unknown>;\n  confidence: number;\n  estimatedCost: number;\n  isDestructive: boolean;\n  rationale: string;\n  createdAt: Date;\n}\n\ntype ReviewDecision = \"approved\" | \"rejected\" | \"timeout\" | \"escalated\";\n\ninterface ReviewResult {\n  proposalId: string;\n  decision: ReviewDecision;\n  feedback: string;\n  reviewedBy: string;\n  reviewedAt: Date;\n}\n\ninterface EscalationPolicy {\n  tiers: string[];\n  timeoutMs: number;\n  fallbackAction: \"approve\" | \"reject\";\n}\n\ntype ApprovalGate = (\n  proposal: Proposal,\n  context: { trustScore: number }\n) => \"auto-approve\" | \"auto-reject\" | \"review\";\n\nfunction confidenceGate(threshold: number): ApprovalGate {\n  return (proposal, { trustScore }) => {\n    const effectiveThreshold = threshold * (1 - trustScore * 0.5);\n    if (proposal.confidence >= effectiveThreshold) return \"auto-approve\";\n    if (proposal.confidence < 0.2) return \"auto-reject\";\n    return \"review\";\n  };\n}\n\nfunction costGate(maxCost: number): ApprovalGate {\n  return (proposal, _ctx) => {\n    if (proposal.estimatedCost > maxCost) return \"review\";\n    return \"auto-approve\";\n  };\n}\n\nfunction destructiveOpGate(): ApprovalGate {\n  return (proposal, _ctx) => {\n    if (proposal.isDestructive) return \"review\";\n    return \"auto-approve\";\n  };\n}\n\nclass HITLAgent {\n  private gates: ApprovalGate[] = [];\n  private escalationPolicy: EscalationPolicy;\n  private trustScore = 0.5;\n  private proposalCount = 0;\n  private readonly alpha = 0.1;\n\n  constructor(policy: EscalationPolicy) {\n    this.escalationPolicy = policy;\n  }\n\n  addGate(gate: ApprovalGate): void {\n    this.gates.push(gate);\n  }\n\n  private runGates(proposal: Proposal): \"auto-approve\" | \"auto-reject\" | \"review\" {\n    for (const gate of this.gates) {\n      const result = gate(proposal, { trustScore: this.trustScore });\n      if (result !== \"auto-approve\") return result;\n    }\n    return \"auto-approve\";\n  }\n\n  private simulateHumanReview(proposal: Proposal): Promise<ReviewResult> {\n    return new Promise((resolve) => {\n      const delay = 50 + Math.random() * 200;\n      setTimeout(() => {\n        const autoApprove = proposal.confidence > 0.8 && !proposal.isDestructive;\n        resolve({\n          proposalId: proposal.id,\n          decision: autoApprove ? \"approved\" : \"rejected\",\n          feedback: autoApprove\n            ? \"Looks good.\"\n            : `Rejected: confidence too low or destructive op requires manual review.`,\n          reviewedBy: \"human-simulated\",\n          reviewedAt: new Date(),\n        });\n      }, delay);\n    });\n  }\n\n  private async escalate(proposal: Proposal, reason: string): Promise<ReviewResult> {\n    console.log(`  [ESCALATE] ${reason}. Trying tiers: ${this.escalationPolicy.tiers.join(\" -> \")}`);\n    for (const tier of this.escalationPolicy.tiers) {\n      console.log(`  [ESCALATE] Escalated to ${tier}...`);\n      await new Promise((r) => setTimeout(r, 30));\n      const approved = Math.random() > 0.3;\n      if (approved) {\n        return {\n          proposalId: proposal.id,\n          decision: \"approved\",\n          feedback: `Approved by ${tier} after escalation.`,\n          reviewedBy: tier,\n          reviewedAt: new Date(),\n        };\n      }\n    }\n    const fallback = this.escalationPolicy.fallbackAction === \"approve\";\n    return {\n      proposalId: proposal.id,\n      decision: fallback ? \"approved\" : \"rejected\",\n      feedback: `All tiers exhausted. Fallback: ${this.escalationPolicy.fallbackAction}.`,\n      reviewedBy: \"escalation-fallback\",\n      reviewedAt: new Date(),\n    };\n  }\n\n  async propose(partial: Omit<Proposal, \"id\" | \"createdAt\">): Promise<ReviewResult> {\n    const proposal: Proposal = {\n      id: `prop-${++this.proposalCount}`,\n      createdAt: new Date(),\n      ...partial,\n    };\n\n    console.log(`\\n--- Proposal ${proposal.id} ---`);\n    console.log(`  Action: ${proposal.action}`);\n    console.log(`  Confidence: ${(proposal.confidence * 100).toFixed(0)}%`);\n    console.log(`  Cost: $${proposal.estimatedCost.toFixed(2)}`);\n    console.log(`  Destructive: ${proposal.isDestructive}`);\n\n    const gateResult = this.runGates(proposal);\n    console.log(`  Gate result: ${gateResult}`);\n\n    if (gateResult === \"auto-approve\") {\n      const result: ReviewResult = {\n        proposalId: proposal.id,\n        decision: \"approved\",\n        feedback: \"Auto-approved by gates.\",\n        reviewedBy: \"system\",\n        reviewedAt: new Date(),\n      };\n      this.updateTrust(true);\n      return result;\n    }\n\n    if (gateResult === \"auto-reject\") {\n      const result: ReviewResult = {\n        proposalId: proposal.id,\n        decision: \"rejected\",\n        feedback: \"Auto-rejected: confidence below minimum threshold.\",\n        reviewedBy: \"system\",\n        reviewedAt: new Date(),\n      };\n      this.updateTrust(false);\n      return result;\n    }\n\n    const reviewPromise = this.simulateHumanReview(proposal);\n    const timeout = new Promise<null>((resolve) =>\n      setTimeout(() => resolve(null), this.escalationPolicy.timeoutMs)\n    );\n\n    const result = await Promise.race([reviewPromise, timeout]);\n\n    if (result === null) {\n      const escalated = await this.escalate(proposal, \"Human reviewer timed out\");\n      this.updateTrust(escalated.decision === \"approved\");\n      return escalated;\n    }\n\n    this.updateTrust(result.decision === \"approved\");\n    return result;\n  }\n\n  private updateTrust(success: boolean): void {\n    this.trustScore += this.alpha * (success ? 1 - this.trustScore : 0 - this.trustScore);\n    console.log(`  [TRUST] Score: ${(this.trustScore * 100).toFixed(0)}%`);\n  }\n\n  getTrustScore(): number {\n    return this.trustScore;\n  }\n}\n\nasync function main() {\n  const agent = new HITLAgent({\n    tiers: [\"senior-engineer\", \"tech-lead\", \"cto\"],\n    timeoutMs: 150,\n    fallbackAction: \"reject\",\n  });\n\n  agent.addGate(confidenceGate(0.85));\n  agent.addGate(costGate(50));\n  agent.addGate(destructiveOpGate());\n\n  const actions: Array<Omit<Proposal, \"id\" | \"createdAt\">> = [\n    {\n      action: \"deploy-to-production\",\n      params: { version: \"v2.1.0\", region: \"us-east-1\" },\n      confidence: 0.92,\n      estimatedCost: 0.50,\n      isDestructive: false,\n      rationale: \"Rolling out patch for CVE-2024-1234. All tests green.\",\n    },\n    {\n      action: \"delete-user-account\",\n      params: { userId: \"u-4512\" },\n      confidence: 0.65,\n      estimatedCost: 0.01,\n      isDestructive: true,\n      rationale: \"User requested account deletion via support ticket #8823.\",\n    },\n    {\n      action: \"bulk-email-campaign\",\n      params: { listId: \"lst-77\", template: \"promo-june\" },\n      confidence: 0.35,\n      estimatedCost: 120.00,\n      isDestructive: false,\n      rationale: \"Send promotional email to 50k subscribers.\",\n    },\n  ];\n\n  for (const action of actions) {\n    const result = await agent.propose(action);\n    if (result.decision === \"approved\") {\n      console.log(`  [EXECUTE] Action committed. Feedback: ${result.feedback}`);\n    } else {\n      console.log(`  [SKIP] Action not taken. Feedback: ${result.feedback}`);\n    }\n  }\n\n  console.log(`\\nFinal trust score: ${(agent.getTrustScore() * 100).toFixed(0)}%`);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-batchreviewqueue--collect-and-process-pending-approvals",
      children: "Example 2: BatchReviewQueue — Collect and Process Pending Approvals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-example2-batch-review-queue.ts\n// Bun: bun run ch03-example2-batch-review-queue.ts\n\ninterface PendingProposal {\n  id: string;\n  action: string;\n  params: Record<string, unknown>;\n  confidence: number;\n  estimatedCost: number;\n  submittedAt: Date;\n  rationale: string;\n}\n\ninterface BatchDecision {\n  proposalId: string;\n  approved: boolean;\n  feedback: string;\n}\n\ntype BatchReviewer = (proposals: PendingProposal[]) => Promise<BatchDecision[]>;\n\nclass BatchReviewQueue {\n  private queue: PendingProposal[] = [];\n  private isProcessing = false;\n  private flushIntervalMs: number;\n  private maxBatchSize: number;\n  private reviewer: BatchReviewer;\n  private timer: ReturnType<typeof setInterval> | null = null;\n\n  constructor(\n    reviewer: BatchReviewer,\n    options: { flushIntervalMs: number; maxBatchSize: number }\n  ) {\n    this.reviewer = reviewer;\n    this.flushIntervalMs = options.flushIntervalMs;\n    this.maxBatchSize = options.maxBatchSize;\n  }\n\n  enqueue(proposal: Omit<PendingProposal, \"id\" | \"submittedAt\">): string {\n    const id = `batch-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;\n    this.queue.push({ id, submittedAt: new Date(), ...proposal });\n    console.log(`[QUEUE] Enqueued ${id}: \"${proposal.action}\" (queue: ${this.queue.length})`);\n    if (this.queue.length >= this.maxBatchSize && !this.isProcessing) {\n      setImmediate(() => this.flush());\n    }\n    return id;\n  }\n\n  start(): void {\n    if (this.timer) return;\n    this.timer = setInterval(() => this.flush(), this.flushIntervalMs);\n    console.log(`[QUEUE] Started. Flushing every ${this.flushIntervalMs}ms or at ${this.maxBatchSize} items.`);\n  }\n\n  stop(): void {\n    if (this.timer) {\n      clearInterval(this.timer);\n      this.timer = null;\n    }\n  }\n\n  async flush(): Promise<BatchDecision[]> {\n    if (this.isProcessing || this.queue.length === 0) return [];\n    this.isProcessing = true;\n\n    const batch = this.queue.splice(0, this.maxBatchSize);\n    console.log(`[BATCH] Flushing ${batch.length} proposals...`);\n\n    const decisions = await this.reviewer(batch);\n\n    for (const decision of decisions) {\n      const proposal = batch.find((p) => p.id === decision.proposalId);\n      if (proposal) {\n        console.log(\n          `  ${decision.approved ? \"APPROVED\" : \"REJECTED\"} ${proposal.action}: ${decision.feedback}`\n        );\n      }\n    }\n\n    this.isProcessing = false;\n    return decisions;\n  }\n\n  getQueueLength(): number {\n    return this.queue.length;\n  }\n}\n\n// Simulated batch reviewer — auto-approves high-confidence proposals, flags others\nconst batchReviewer: BatchReviewer = async (proposals) => {\n  await new Promise((r) => setTimeout(r, 100));\n  return proposals.map((p) => ({\n    proposalId: p.id,\n    approved: p.confidence >= 0.7 && p.estimatedCost < 10,\n    feedback:\n      p.confidence >= 0.7 && p.estimatedCost < 10\n        ? \"Auto-approved in batch.\"\n        : \"Flagged for individual review.\",\n  }));\n};\n\nasync function main() {\n  const queue = new BatchReviewQueue(batchReviewer, {\n    flushIntervalMs: 500,\n    maxBatchSize: 3,\n  });\n\n  queue.start();\n\n  for (let i = 0; i < 7; i++) {\n    queue.enqueue({\n      action: `update-config-${i}`,\n      params: { key: `feature_${i}`, value: `v${i}` },\n      confidence: 0.5 + Math.random() * 0.5,\n      estimatedCost: Math.random() * 5,\n      rationale: `Rolling out feature flag ${i}.`,\n    });\n  }\n\n  await new Promise((r) => setTimeout(r, 1200));\n  queue.stop();\n\n  console.log(`\\nFinal queue length: ${queue.getQueueLength()}`);\n}\n\nawait main();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-trustscalinggate--learn-when-to-auto-approve",
      children: "Example 3: TrustScalingGate — Learn When to Auto-Approve"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-example3-trust-scaling-gate.ts\n// Bun: bun run ch03-example3-trust-scaling-gate.ts\n\ninterface ActionOutcome {\n  actionType: string;\n  confidence: number;\n  approved: boolean;\n  succeeded: boolean;\n}\n\nclass TrustScalingGate {\n  private trustByAction: Map<string, { score: number; count: number }> = new Map();\n  private readonly alpha = 0.15;\n  private readonly minSamples = 5;\n\n  private getEntry(actionType: string): { score: number; count: number } {\n    if (!this.trustByAction.has(actionType)) {\n      this.trustByAction.set(actionType, { score: 0.5, count: 0 });\n    }\n    return this.trustByAction.get(actionType)!;\n  }\n\n  recordOutcome(outcome: ActionOutcome): void {\n    const entry = this.getEntry(outcome.actionType);\n    if (!outcome.approved) return;\n    const reward = outcome.succeeded ? 1 : 0;\n    entry.score += this.alpha * (reward - entry.score);\n    entry.count++;\n    console.log(\n      `[TRUST] ${outcome.actionType}: score=${(entry.score * 100).toFixed(0)}% (n=${entry.count})`\n    );\n  }\n\n  getThreshold(actionType: string): number {\n    const entry = this.getEntry(actionType);\n    if (entry.count < this.minSamples) return 0.0;\n    const mapped = 1 - entry.score;\n    return Math.max(0.1, Math.min(0.95, mapped));\n  }\n\n  needsReview(actionType: string, confidence: number): boolean {\n    const threshold = this.getThreshold(actionType);\n    const needs = confidence < threshold;\n    console.log(\n      `  Gate(${actionType}): conf=${(confidence * 100).toFixed(0)}% ` +\n        `>= threshold=${(threshold * 100).toFixed(0)}% ? ${!needs}`\n    );\n    return needs;\n  }\n\n  getStats(): Record<string, { score: number; count: number; threshold: number }> {\n    const stats: Record<string, { score: number; count: number; threshold: number }> = {};\n    for (const [actionType, entry] of this.trustByAction) {\n      stats[actionType] = {\n        score: entry.score,\n        count: entry.count,\n        threshold: this.getThreshold(actionType),\n      };\n    }\n    return stats;\n  }\n}\n\nasync function main() {\n  const gate = new TrustScalingGate();\n\n  const actions: ActionOutcome[] = [\n    { actionType: \"format-code\", confidence: 0.70, approved: true, succeeded: true },\n    { actionType: \"format-code\", confidence: 0.65, approved: true, succeeded: true },\n    { actionType: \"format-code\", confidence: 0.80, approved: true, succeeded: true },\n    { actionType: \"format-code\", confidence: 0.55, approved: true, succeeded: true },\n    { actionType: \"format-code\", confidence: 0.90, approved: true, succeeded: true },\n    { actionType: \"format-code\", confidence: 0.75, approved: true, succeeded: false },\n    { actionType: \"format-code\", confidence: 0.85, approved: true, succeeded: true },\n\n    { actionType: \"delete-file\", confidence: 0.95, approved: true, succeeded: true },\n    { actionType: \"delete-file\", confidence: 0.90, approved: true, succeeded: false },\n    { actionType: \"delete-file\", confidence: 0.88, approved: true, succeeded: true },\n    { actionType: \"delete-file\", confidence: 0.92, approved: true, succeeded: false },\n    { actionType: \"delete-file\", confidence: 0.85, approved: true, succeeded: true },\n\n    { actionType: \"refactor\", confidence: 0.60, approved: true, succeeded: true },\n    { actionType: \"refactor\", confidence: 0.55, approved: true, succeeded: true },\n    { actionType: \"refactor\", confidence: 0.70, approved: true, succeeded: false },\n    { actionType: \"refactor\", confidence: 0.65, approved: true, succeeded: true },\n    { actionType: \"refactor\", confidence: 0.75, approved: true, succeeded: true },\n  ];\n\n  for (const action of actions) {\n    gate.recordOutcome(action);\n  }\n\n  console.log(\"\\n--- Trust Calibration Results ---\");\n  const testCases = [\n    { actionType: \"format-code\", confidence: 0.72 },\n    { actionType: \"delete-file\", confidence: 0.91 },\n    { actionType: \"delete-file\", confidence: 0.80 },\n    { actionType: \"refactor\", confidence: 0.62 },\n    { actionType: \"format-code\", confidence: 0.45 },\n  ];\n\n  for (const tc of testCases) {\n    const needs = gate.needsReview(tc.actionType, tc.confidence);\n    console.log(`  => ${needs ? \"NEEDS REVIEW\" : \"AUTO-APPROVED\"}\\n`);\n  }\n\n  console.log(\"\\n--- Trust Stats ---\");\n  console.table(gate.getStats());\n}\n\nawait main();\n"
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
        children: "// ch03-advanced-hitl.ts\n// bun run ch03-advanced-hitl.ts\n\n// ─── EscalationChain ───────────────────────────────────────────────────\n\ninterface EscalationTier {\n  name: string;\n  timeoutMs: number;\n  canHandle: (proposal: ProposalData) => boolean;\n}\n\ninterface ProposalData {\n  id: string;\n  action: string;\n  riskScore: number;\n  cost: number;\n  submittedAt: Date;\n}\n\ninterface EscalationResult {\n  proposalId: string;\n  finalDecision: \"approved\" | \"rejected\";\n  handledBy: string;\n  chain: string[];\n  totalTimeMs: number;\n}\n\nclass EscalationChain {\n  private tiers: EscalationTier[] = [];\n  private fallbackDecision: \"approved\" | \"rejected\" = \"rejected\";\n  private delegateMap = new Map<string, string[]>();\n\n  addTier(tier: EscalationTier): void {\n    this.tiers.push(tier);\n  }\n\n  addDelegate(from: string, to: string[]): void {\n    this.delegateMap.set(from, to);\n  }\n\n  setFallback(decision: \"approved\" | \"rejected\"): void {\n    this.fallbackDecision = decision;\n  }\n\n  async escalate(proposal: ProposalData): Promise<EscalationResult> {\n    const startTime = Date.now();\n    const chain: string[] = [];\n\n    for (const tier of this.tiers) {\n      chain.push(tier.name);\n      console.log(`  [ESCALATION] Trying tier: ${tier.name}`);\n\n      if (!tier.canHandle(proposal)) {\n        console.log(`  [ESCALATION] ${tier.name} cannot handle, skipping`);\n        continue;\n      }\n\n      const handled = await this.tryHandle(tier, proposal);\n      if (handled !== null) {\n        return {\n          proposalId: proposal.id,\n          finalDecision: handled,\n          handledBy: tier.name,\n          chain,\n          totalTimeMs: Date.now() - startTime,\n        };\n      }\n    }\n\n    console.log(`  [ESCALATION] All tiers exhausted, fallback=${this.fallbackDecision}`);\n    return {\n      proposalId: proposal.id,\n      finalDecision: this.fallbackDecision,\n      handledBy: \"fallback\",\n      chain,\n      totalTimeMs: Date.now() - startTime,\n    };\n  }\n\n  private async tryHandle(tier: EscalationTier, proposal: ProposalData): Promise<\"approved\" | \"rejected\" | null> {\n    const delegates = this.delegateMap.get(tier.name);\n    const candidates = delegates ?? [tier.name];\n\n    for (const delegate of candidates) {\n      try {\n        const result = await Promise.race([\n          this.simulateReview(delegate, proposal),\n          new Promise<null>((_, reject) =>\n            setTimeout(() => reject(new Error(\"timeout\")), tier.timeoutMs)\n          ),\n        ]);\n        return result;\n      } catch {\n        console.log(`  [ESCALATION] ${delegate} timed out or unavailable`);\n      }\n    }\n\n    return null;\n  }\n\n  private async simulateReview(reviewer: string, proposal: ProposalData): Promise<\"approved\" | \"rejected\"> {\n    await new Promise((r) => setTimeout(r, 10 + Math.random() * 30));\n    return proposal.riskScore < 0.7 && Math.random() > 0.2 ? \"approved\" : \"rejected\";\n  }\n}\n\n// ─── MultiStageApprovalGate ────────────────────────────────────────────\n\ninterface ApprovalRequest {\n  id: string;\n  description: string;\n  riskLevel: \"low\" | \"medium\" | \"high\" | \"critical\";\n  requiredApprovals: number;\n  approverPool: string[];\n  approvedBy: string[];\n  rejectedBy: string[];\n  status: \"pending\" | \"approved\" | \"rejected\";\n}\n\nclass MultiStageApprovalGate {\n  private requests = new Map<string, ApprovalRequest>();\n\n  createRequest(description: string, riskLevel: ApprovalRequest[\"riskLevel\"], pool: string[]): ApprovalRequest {\n    const requiredApprovals = riskLevel === \"critical\" ? 3 : riskLevel === \"high\" ? 2 : 1;\n    const request: ApprovalRequest = {\n      id: `approval-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,\n      description,\n      riskLevel,\n      requiredApprovals,\n      approverPool: pool,\n      approvedBy: [],\n      rejectedBy: [],\n      status: \"pending\",\n    };\n    this.requests.set(request.id, request);\n    return request;\n  }\n\n  submitApproval(requestId: string, approver: string, decision: \"approve\" | \"reject\"): string | null {\n    const req = this.requests.get(requestId);\n    if (!req || req.status !== \"pending\") return null;\n\n    if (decision === \"approve\") {\n      if (!req.approvedBy.includes(approver)) req.approvedBy.push(approver);\n      if (req.approvedBy.length >= req.requiredApprovals) {\n        req.status = \"approved\";\n        return \"approved\";\n      }\n    } else {\n      if (!req.rejectedBy.includes(approver)) req.rejectedBy.push(approver);\n      if (req.rejectedBy.length >= req.requiredApprovals) {\n        req.status = \"rejected\";\n        return \"rejected\";\n      }\n    }\n\n    return null;\n  }\n\n  getStatus(requestId: string): ApprovalRequest | undefined {\n    return this.requests.get(requestId);\n  }\n\n  requestApprovals(request: ApprovalRequest): { needed: number; remaining: number } {\n    const remaining = request.requiredApprovals - request.approvedBy.length;\n    return { needed: request.requiredApprovals, remaining: Math.max(0, remaining) };\n  }\n}\n\n// ─── ConfidenceDecayTracker ────────────────────────────────────────────\n\nclass ConfidenceDecayTracker {\n  private scores = new Map<string, { score: number; lastActive: Date; count: number }>();\n  private readonly decayRatePerDay: number;\n\n  constructor(decayRatePerDay: number = 0.05) {\n    this.decayRatePerDay = decayRatePerDay;\n  }\n\n  record(actionType: string, succeeded: boolean, alpha: number = 0.15): void {\n    const entry = this.scores.get(actionType) ?? { score: 0.5, lastActive: new Date(), count: 0 };\n    this.applyDecay(entry);\n    const reward = succeeded ? 1 : 0;\n    entry.score += alpha * (reward - entry.score);\n    entry.lastActive = new Date();\n    entry.count++;\n    this.scores.set(actionType, entry);\n  }\n\n  getConfidence(actionType: string): number {\n    const entry = this.scores.get(actionType);\n    if (!entry) return 0.5;\n    this.applyDecay(entry);\n    return entry.score;\n  }\n\n  needsReview(actionType: string, proposedConfidence: number, threshold: number = 0.7): boolean {\n    const trustScore = this.getConfidence(actionType);\n    const effectiveThreshold = threshold * (1 - trustScore * 0.5);\n    return proposedConfidence < effectiveThreshold;\n  }\n\n  private applyDecay(entry: { score: number; lastActive: Date; count: number }): void {\n    const now = new Date();\n    const msSinceActive = now.getTime() - entry.lastActive.getTime();\n    const daysSinceActive = msSinceActive / (1000 * 60 * 60 * 24);\n    if (daysSinceActive > 0) {\n      const decay = Math.pow(1 - this.decayRatePerDay, daysSinceActive);\n      entry.score *= decay;\n    }\n  }\n\n  getStats(): Record<string, { score: number; count: number }> {\n    const stats: Record<string, { score: number; count: number }> = {};\n    for (const [actionType, entry] of this.scores) {\n      stats[actionType] = { score: entry.score, count: entry.count };\n    }\n    return stats;\n  }\n}\n\n// ─── PriorityQueueHITL with Starvation Prevention ──────────────────────\n\ntype PriorityLevel = \"critical\" | \"high\" | \"medium\" | \"low\";\n\ninterface PrioritizedProposal {\n  id: string;\n  action: string;\n  priority: PriorityLevel;\n  submittedAt: Date;\n  lastAttemptAt: Date | null;\n  attemptCount: number;\n  riskScore: number;\n}\n\nclass PriorityQueueHITL {\n  private queues: Record<PriorityLevel, PrioritizedProposal[]> = {\n    critical: [],\n    high: [],\n    medium: [],\n    low: [],\n  };\n  private ageBoostMs: number;\n  private maxAttempts: number;\n  private processedCount = 0;\n\n  constructor(ageBoostMs: number = 30000, maxAttempts: number = 3) {\n    this.ageBoostMs = ageBoostMs;\n    this.maxAttempts = maxAttempts;\n  }\n\n  enqueue(proposal: Omit<PrioritizedProposal, \"id\" | \"submittedAt\" | \"lastAttemptAt\" | \"attemptCount\">): string {\n    const id = `hitl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;\n    const entry: PrioritizedProposal = {\n      id,\n      ...proposal,\n      submittedAt: new Date(),\n      lastAttemptAt: null,\n      attemptCount: 0,\n    };\n    this.queues[proposal.priority].push(entry);\n    console.log(`[PRIORITY] Enqueued ${id} (${proposal.priority}): ${proposal.action} (queue depth: ${this.queues[proposal.priority].length})`);\n    return id;\n  }\n\n  dequeue(): PrioritizedProposal | null {\n    const effectivePriority = this.computeEffectivePriority();\n    const queue = this.queues[effectivePriority];\n    while (queue.length > 0) {\n      const proposal = queue.shift()!;\n      if (proposal.attemptCount >= this.maxAttempts) {\n        console.log(`  [PRIORITY] ${proposal.id} exceeded max attempts, escalating`);\n        this.escalate(proposal);\n        continue;\n      }\n      proposal.lastAttemptAt = new Date();\n      proposal.attemptCount++;\n      return proposal;\n    }\n    return null;\n  }\n\n  private computeEffectivePriority(): PriorityLevel {\n    const now = Date.now();\n    const priorities: PriorityLevel[] = [\"critical\", \"high\", \"medium\", \"low\"];\n\n    for (const level of priorities) {\n      for (const item of this.queues[level]) {\n        const age = now - item.submittedAt.getTime();\n        if (age >= this.ageBoostMs) {\n          return level === \"critical\" ? \"critical\" : priorities[priorities.indexOf(level) - 1] ?? \"critical\";\n        }\n      }\n    }\n\n    for (const level of priorities) {\n      if (this.queues[level].length > 0) return level;\n    }\n\n    return \"low\";\n  }\n\n  private escalate(proposal: PrioritizedProposal): void {\n    console.log(`  [PRIORITY] Escalating ${proposal.id} (${proposal.action}) to critical`);\n    this.queues.critical.push({ ...proposal, priority: \"critical\" });\n  }\n\n  getDepth(): Record<PriorityLevel, number> {\n    return {\n      critical: this.queues.critical.length,\n      high: this.queues.high.length,\n      medium: this.queues.medium.length,\n      low: this.queues.low.length,\n    };\n  }\n\n  isEmpty(): boolean {\n    return Object.values(this.queues).every((q) => q.length === 0);\n  }\n}\n\n// ─── AuditTrailLogger ─────────────────────────────────────────────────\n\ninterface AuditEntry {\n  timestamp: Date;\n  proposalId: string;\n  action: string;\n  decision: string;\n  reviewer: string;\n  riskScore: number;\n  previousState?: string;\n  metadata: Record<string, unknown>;\n}\n\nclass AuditTrailLogger {\n  private entries: AuditEntry[] = [];\n  private readonly maxEntries: number;\n\n  constructor(maxEntries: number = 10000) {\n    this.maxEntries = maxEntries;\n  }\n\n  log(entry: Omit<AuditEntry, \"timestamp\">): void {\n    this.entries.push({ timestamp: new Date(), ...entry });\n    if (this.entries.length > this.maxEntries) this.entries.shift();\n  }\n\n  query(filters: Partial<AuditEntry>): AuditEntry[] {\n    return this.entries.filter((e) => {\n      for (const [key, value] of Object.entries(filters)) {\n        if ((e as Record<string, unknown>)[key] !== value) return false;\n      }\n      return true;\n    });\n  }\n\n  getStats(): { total: number; approved: number; rejected: number; avgRisk: number } {\n    const approved = this.entries.filter((e) => e.decision === \"approved\").length;\n    const rejected = this.entries.filter((e) => e.decision === \"rejected\").length;\n    const avgRisk = this.entries.reduce((s, e) => s + e.riskScore, 0) / (this.entries.length || 1);\n    return { total: this.entries.length, approved, rejected, avgRisk };\n  }\n\n  export(): string {\n    return JSON.stringify(this.entries, null, 2);\n  }\n}\n\n// ─── Human Feedback Aggregator ─────────────────────────────────────────\n\ninterface FeedbackVote {\n  reviewerId: string;\n  score: number;\n  comment: string;\n}\n\ninterface AggregatedFeedback {\n  meanScore: number;\n  medianScore: number;\n  stdDev: number;\n  consensusLevel: \"strong\" | \"moderate\" | \"weak\" | \"none\";\n  voteCount: number;\n  comments: string[];\n}\n\nclass FeedbackAggregator {\n  aggregate(votes: FeedbackVote[]): AggregatedFeedback {\n    const scores = votes.map((v) => v.score);\n    const n = scores.length;\n    if (n === 0) return { meanScore: 0, medianScore: 0, stdDev: 0, consensusLevel: \"none\", voteCount: 0, comments: [] };\n\n    const meanScore = scores.reduce((a, b) => a + b, 0) / n;\n    const sorted = [...scores].sort((a, b) => a - b);\n    const medianScore = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];\n    const variance = scores.reduce((sum, s) => sum + (s - meanScore) ** 2, 0) / n;\n    const stdDev = Math.sqrt(variance);\n\n    let consensusLevel: AggregatedFeedback[\"consensusLevel\"] = \"none\";\n    if (n >= 3 && stdDev < 0.3) consensusLevel = \"strong\";\n    else if (n >= 2 && stdDev < 0.6) consensusLevel = \"moderate\";\n    else if (n >= 1) consensusLevel = \"weak\";\n\n    return {\n      meanScore,\n      medianScore,\n      stdDev,\n      consensusLevel,\n      voteCount: n,\n      comments: votes.map((v) => v.comment),\n    };\n  }\n\n  static weightedScore(votes: FeedbackVote[], weights: Record<string, number>): number {\n    let totalWeight = 0;\n    let weightedSum = 0;\n    for (const vote of votes) {\n      const w = weights[vote.reviewerId] ?? 1;\n      weightedSum += vote.score * w;\n      totalWeight += w;\n    }\n    return totalWeight > 0 ? weightedSum / totalWeight : 0;\n  }\n}\n\n// ─── Demo ──────────────────────────────────────────────────────────────\n\nasync function main() {\n  console.log(\"=== Extended HITL Demo ===\\n\");\n\n  // 1. Escalation Chain\n  const chain = new EscalationChain();\n  chain.addTier({ name: \"junior-reviewer\", timeoutMs: 20, canHandle: (p) => p.riskScore < 0.5 });\n  chain.addTier({ name: \"senior-reviewer\", timeoutMs: 30, canHandle: () => true });\n  chain.addTier({ name: \"manager\", timeoutMs: 50, canHandle: () => true });\n  chain.addDelegate(\"junior-reviewer\", [\"junior-a\", \"junior-b\"]);\n  chain.addDelegate(\"senior-reviewer\", [\"senior-a\"]);\n  chain.setFallback(\"rejected\");\n\n  const escResult = await chain.escalate({\n    id: \"p1\", action: \"delete-database\", riskScore: 0.9, cost: 1000, submittedAt: new Date(),\n  });\n  console.log(`Escalation: ${escResult.finalDecision} by ${escResult.handledBy} via [${escResult.chain.join(\" -> \")}]`);\n\n  // 2. MultiStageApprovalGate\n  const gate = new MultiStageApprovalGate();\n  const req = gate.createRequest(\"Deploy to production\", \"critical\", [\"alice\", \"bob\", \"carol\", \"dave\"]);\n  console.log(`\\nMultiStage: ${req.id} needs ${req.requiredApprovals} approvals`);\n  gate.submitApproval(req.id, \"alice\", \"approve\");\n  gate.submitApproval(req.id, \"bob\", \"approve\");\n  console.log(`  After 2 approvals: ${gate.submitApproval(req.id, \"carol\", \"approve\")}`);\n\n  // 3. Confidence Decay\n  const decay = new ConfidenceDecayTracker(0.05);\n  for (let i = 0; i < 10; i++) {\n    decay.record(\"code-gen\", true);\n  }\n  console.log(`\\nConfidence Decay: code-gen score=${decay.getConfidence(\"code-gen\").toFixed(3)}`);\n\n  // 4. Priority Queue\n  const pq = new PriorityQueueHITL(500, 2);\n  pq.enqueue({ action: \"fix-typo\", priority: \"low\", riskScore: 0.1 });\n  pq.enqueue({ action: \"patch-security\", priority: \"critical\", riskScore: 0.9 });\n  pq.enqueue({ action: \"refactor-module\", priority: \"medium\", riskScore: 0.3 });\n  console.log(`\\nPriority Queue depths:`, pq.getDepth());\n  const item = pq.dequeue();\n  console.log(`  Dequeued: ${item?.id} (${item?.priority}): ${item?.action}`);\n\n  // 5. Audit Trail\n  const audit = new AuditTrailLogger();\n  audit.log({ proposalId: \"p1\", action: \"deploy\", decision: \"approved\", reviewer: \"alice\", riskScore: 0.3, metadata: {} });\n  audit.log({ proposalId: \"p2\", action: \"delete\", decision: \"rejected\", reviewer: \"bob\", riskScore: 0.9, metadata: {} });\n  console.log(`\\nAudit Trail:`, audit.getStats());\n\n  // 6. Feedback Aggregator\n  const aggregator = new FeedbackAggregator();\n  const votes: FeedbackVote[] = [\n    { reviewerId: \"alice\", score: 0.85, comment: \"Looks good\" },\n    { reviewerId: \"bob\", score: 0.90, comment: \"Minor nits\" },\n    { reviewerId: \"carol\", score: 0.70, comment: \"Check edge cases\" },\n  ];\n  const agg = aggregator.aggregate(votes);\n  console.log(`\\nFeedback Aggregator: mean=${agg.meanScore.toFixed(2)} median=${agg.medianScore.toFixed(2)} consensus=${agg.consensusLevel}`);\n}\n\nawait main();\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ch03-hitl-tooling.ts\n// bun run ch03-hitl-tooling.ts\n\n/*\n```mermaid\ngraph TD\n    subgraph \"HITL Escalation Flow with Timeouts & Fallbacks\"\n        A[Proposal Submitted] --> B{Run Gates}\n        B -->|Auto-Approve| C[Execute]\n        B -->|Review Needed| D[Primary Reviewer]\n        D -->|Timeout| E[Secondary Reviewer]\n        D -->|Reject| F[Rejected]\n        D -->|Approve| C\n        E -->|Timeout| F\n        E -->|Reject| F\n        E -->|Approve| C\n        F --> G{Reviewer Available?}\n        G -->|Yes| H[Delegate Chain]\n        H --> D\n        G -->|No| I[Fallback Action]\n        I --> J{Policy}\n        J -->|Approve| C\n        J -->|Reject| K[Escalation Log]\n        C --> L[Outcome Recorded]\n    end\n    \n    style A fill:#3498db,color:#fff\n    style C fill:#2ecc71,color:#fff\n    style F fill:#f39c12,color:#fff\n    style K fill:#e74c3c,color:#fff\n*/\n*/\n\n// ─── ReviewerWorkloadBalancer ──────────────────────────────────────────\n\ninterface Reviewer {\n  id: string;\n  name: string;\n  maxWorkload: number;\n  currentLoad: number;\n  specialties: string[];\n  averageReviewTimeMs: number;\n  isAvailable: boolean;\n}\n\ninterface WorkloadAssignment {\n  proposalId: string;\n  reviewerId: string;\n  estimatedDurationMs: number;\n  assignedAt: Date;\n}\n\nclass ReviewerWorkloadBalancer {\n  private reviewers: Reviewer[] = [];\n  private assignments: WorkloadAssignment[] = [];\n\n  registerReviewer(reviewer: Omit&lt;Reviewer, \"currentLoad\" | \"isAvailable\"&gt;): void {\n    this.reviewers.push({ ...reviewer, currentLoad: 0, isAvailable: true });\n  }\n\n  assign(proposalId: string, category: string, estimatedComplexity: number): Reviewer | null {\n    const available = this.reviewers.filter(\n      (r) => r.isAvailable && r.currentLoad &lt; r.maxWorkload\n    );\n\n    if (available.length === 0) return null;\n\n    const scored = available.map((r) => {\n      const specialtyBonus = r.specialties.includes(category) ? 0.2 : 0;\n      const loadFactor = 1 - r.currentLoad / r.maxWorkload;\n      const speedFactor = Math.max(0.3, 1 - r.averageReviewTimeMs / 10000);\n      const score = specialtyBonus + loadFactor * 0.5 + speedFactor * 0.3;\n      return { reviewer: r, score };\n    });\n\n    scored.sort((a, b) => b.score - a.score);\n    const best = scored[0].reviewer;\n    best.currentLoad++;\n    if (best.currentLoad >= best.maxWorkload) best.isAvailable = false;\n\n    this.assignments.push({\n      proposalId,\n      reviewerId: best.id,\n      estimatedDurationMs: best.averageReviewTimeMs * estimatedComplexity,\n      assignedAt: new Date(),\n    });\n\n    return best;\n  }\n\n  completeReview(reviewerId: string): void {\n    const reviewer = this.reviewers.find((r) => r.id === reviewerId);\n    if (reviewer) {\n      reviewer.currentLoad = Math.max(0, reviewer.currentLoad - 1);\n      reviewer.isAvailable = reviewer.currentLoad &lt; reviewer.maxWorkload;\n    }\n  }\n\n  getWorkloadSnapshot(): Array&lt;{ id: string; load: number; maxLoad: number; available: boolean }&gt; {\n    return this.reviewers.map((r) => ({\n      id: r.id,\n      load: r.currentLoad,\n      maxLoad: r.maxWorkload,\n      available: r.isAvailable,\n    }));\n  }\n\n  getAverageUtilization(): number {\n    if (this.reviewers.length === 0) return 0;\n    const totalLoad = this.reviewers.reduce((s, r) => s + r.currentLoad, 0);\n    const totalCapacity = this.reviewers.reduce((s, r) => s + r.maxWorkload, 0);\n    return totalCapacity > 0 ? totalLoad / totalCapacity : 0;\n  }\n}\n\n// ─── StaleProposalCleaner ──────────────────────────────────────────────\n\ninterface StaleProposal {\n  id: string;\n  action: string;\n  status: \"pending\" | \"assigned\" | \"in-review\";\n  submittedAt: Date;\n  assignedAt: Date | null;\n  ttlMs: number;\n}\n\nclass StaleProposalCleaner {\n  private proposals: Map&lt;string, StaleProposal&gt; = new Map();\n  private expiredCount = 0;\n  private cleanInterval: ReturnType&lt;typeof setInterval&gt; | null = null;\n\n  track(proposal: StaleProposal): void {\n    this.proposals.set(proposal.id, proposal);\n  }\n\n  updateStatus(id: string, status: StaleProposal[\"status\"]): void {\n    const p = this.proposals.get(id);\n    if (p) {\n      p.status = status;\n      if (status === \"assigned\" && !p.assignedAt) p.assignedAt = new Date();\n    }\n  }\n\n  private computeRemainingMs(proposal: StaleProposal): number {\n    const start = proposal.assignedAt ?? proposal.submittedAt;\n    return proposal.ttlMs - (Date.now() - start.getTime());\n  }\n\n  getExpired(): StaleProposal[] {\n    const expired: StaleProposal[] = [];\n    for (const [id, proposal] of this.proposals) {\n      if (proposal.status === \"in-review\") continue;\n      if (this.computeRemainingMs(proposal) &lt;= 0) {\n        expired.push(proposal);\n        this.proposals.delete(id);\n        this.expiredCount++;\n      }\n    }\n    return expired;\n  }\n\n  getExpiringSoon(thresholdMs: number): StaleProposal[] {\n    return [...this.proposals.values()].filter((p) => {\n      const remaining = this.computeRemainingMs(p);\n      return remaining > 0 && remaining &lt;= thresholdMs;\n    });\n  }\n\n  startAutoClean(intervalMs: number = 5000, onExpired?: (proposals: StaleProposal[]) => void): void {\n    if (this.cleanInterval) return;\n    this.cleanInterval = setInterval(() => {\n      const expired = this.getExpired();\n      if (expired.length > 0) {\n        console.log(`[CLEANER] Expired ${expired.length} stale proposals`);\n        onExpired?.(expired);\n      }\n    }, intervalMs);\n  }\n\n  stopAutoClean(): void {\n    if (this.cleanInterval) {\n      clearInterval(this.cleanInterval);\n      this.cleanInterval = null;\n    }\n  }\n\n  getStats(): { tracked: number; expired: number } {\n    return { tracked: this.proposals.size, expired: this.expiredCount };\n  }\n}\n\n// ─── HumanPerformanceTracker ──────────────────────────────────────────\n\ninterface ReviewEvent {\n  proposalId: string;\n  reviewerId: string;\n  decision: \"approved\" | \"rejected\" | \"escalated\";\n  timeToDecisionMs: number;\n  outcomeCorrect: boolean;\n  fatigueLevel: number;\n  timestamp: Date;\n}\n\ninterface ReviewerStats {\n  reviewerId: string;\n  totalReviews: number;\n  accuracy: number;\n  averageTimeMs: number;\n  rejectionRate: number;\n  fatigueLevel: number;\n  streak: number;\n  efficiencyScore: number;\n}\n\nclass HumanPerformanceTracker {\n  private events: ReviewEvent[] = [];\n  private readonly fatigueDecayPerReview = 0.05;\n  private readonly fatigueRecoveryPerMinute = 0.02;\n\n  recordReview(event: Omit&lt;ReviewEvent, \"timestamp\" | \"fatigueLevel\"&gt;): void {\n    const recentEvents = this.events.filter((e) => e.reviewerId === event.reviewerId).slice(-10);\n    const fatigueLevel = Math.min(1, recentEvents.reduce((s, e) => s + this.fatigueDecayPerReview, 0));\n\n    this.events.push({ ...event, fatigueLevel, timestamp: new Date() });\n  }\n\n  getStats(reviewerId: string): ReviewerStats | null {\n    const reviewerEvents = this.events.filter((e) => e.reviewerId === reviewerId);\n    if (reviewerEvents.length === 0) return null;\n\n    const totalReviews = reviewerEvents.length;\n    const correctOutcomes = reviewerEvents.filter((e) => e.outcomeCorrect).length;\n    const rejected = reviewerEvents.filter((e) => e.decision === \"rejected\").length;\n    const avgTime = reviewerEvents.reduce((s, e) => s + e.timeToDecisionMs, 0) / totalReviews;\n\n    let streak = 0;\n    for (let i = reviewerEvents.length - 1; i >= 0; i--) {\n      if (reviewerEvents[i].outcomeCorrect) streak++;\n      else break;\n    }\n\n    const accuracy = totalReviews > 0 ? correctOutcomes / totalReviews : 0;\n    const latest = reviewerEvents[reviewerEvents.length - 1];\n\n    const efficiencyScore = accuracy * (1 / Math.max(1, avgTime / 1000)) * (1 - latest.fatigueLevel);\n\n    return {\n      reviewerId,\n      totalReviews,\n      accuracy,\n      averageTimeMs: avgTime,\n      rejectionRate: totalReviews > 0 ? rejected / totalReviews : 0,\n      fatigueLevel: latest.fatigueLevel,\n      streak,\n      efficiencyScore,\n    };\n  }\n\n  getRankedReviewers(): ReviewerStats[] {\n    const ids = [...new Set(this.events.map((e) => e.reviewerId))];\n    return ids\n      .map((id) => this.getStats(id)!)\n      .filter((s) => s !== null)\n      .sort((a, b) => b.efficiencyScore - a.efficiencyScore);\n  }\n\n  applyTimeDecay(minutesPassed: number): void {\n    for (const event of this.events) {\n      event.fatigueLevel = Math.max(0, event.fatigueLevel - this.fatigueRecoveryPerMinute * minutesPassed);\n    }\n  }\n\n  exportCsv(): string {\n    const header = \"reviewerId,proposalId,decision,timeMs,correct,fatigue,timestamp\";\n    const rows = this.events.map((e) =>\n      `${e.reviewerId},${e.proposalId},${e.decision},${e.timeToDecisionMs.toFixed(0)},${e.outcomeCorrect},${e.fatigueLevel.toFixed(2)},${e.timestamp.toISOString()}`\n    );\n    return [header, ...rows].join(\"\\n\");\n  }\n}\n\n// ─── SimulatedReviewerPool ─────────────────────────────────────────────\n\ntype SimulatedDecision = \"approve\" | \"reject\" | \"escalate\";\n\ninterface SimulatedReviewerConfig {\n  id: string;\n  name: string;\n  accuracy: number;\n  speedMs: [number, number];\n  fatigueThreshold: number;\n}\n\nclass SimulatedReviewerPool {\n  private reviewers: SimulatedReviewerConfig[] = [];\n  private reviewCount: Map&lt;string, number&gt; = new Map();\n  private fatigue: Map&lt;string, number&gt; = new Map();\n\n  addReviewer(config: SimulatedReviewerConfig): void {\n    this.reviewers.push(config);\n    this.reviewCount.set(config.id, 0);\n    this.fatigue.set(config.id, 0);\n  }\n\n  getRandomReviewer(): SimulatedReviewerConfig {\n    return this.reviewers[Math.floor(Math.random() * this.reviewers.length)];\n  }\n\n  async simulateReview(\n    reviewerId: string,\n    proposalRisk: number\n  ): Promise&lt;{ decision: SimulatedDecision; timeMs: number; feedback: string }&gt; {\n    const reviewer = this.reviewers.find((r) => r.id === reviewerId);\n    if (!reviewer) throw new Error(`Unknown reviewer: ${reviewerId}`);\n\n    const [minSpeed, maxSpeed] = reviewer.speedMs;\n    const timeMs = minSpeed + Math.random() * (maxSpeed - minSpeed);\n    const currentFatigue = this.fatigue.get(reviewerId) ?? 0;\n    const count = this.reviewCount.get(reviewerId) ?? 0;\n\n    await new Promise((r) => setTimeout(r, Math.min(timeMs, 50)));\n\n    const effectiveAccuracy = reviewer.accuracy * (1 - currentFatigue * 0.5);\n    const rand = Math.random();\n\n    let decision: SimulatedDecision;\n    let feedback: string;\n\n    if (rand &lt; effectiveAccuracy) {\n      if (proposalRisk > 0.7) {\n        decision = \"escalate\";\n        feedback = `Risk too high (${(proposalRisk * 100).toFixed(0)}%). Escalating.`;\n      } else {\n        decision = \"approve\";\n        feedback = \"Looks good. Approved.\";\n      }\n    } else if (rand &lt; effectiveAccuracy + (1 - effectiveAccuracy) * 0.6) {\n      decision = \"reject\";\n      feedback = proposalRisk > 0.5\n        ? \"Rejected: concerns about implementation approach.\"\n        : \"Rejected: needs more detail.\";\n    } else {\n      decision = currentFatigue > reviewer.fatigueThreshold ? \"escalate\" : \"approve\";\n      feedback = currentFatigue > reviewer.fatigueThreshold\n        ? \"Fatigue threshold exceeded. Escalating.\"\n        : \"Approved with minor suggestions.\";\n    }\n\n    this.reviewCount.set(reviewerId, count + 1);\n    this.fatigue.set(reviewerId, currentFatigue + 0.05);\n\n    return { decision, timeMs, feedback };\n  }\n\n  resetFatigue(): void {\n    for (const key of this.fatigue.keys()) {\n      this.fatigue.set(key, 0);\n    }\n  }\n\n  getFatigueLevels(): Record&lt;string, number&gt; {\n    const levels: Record&lt;string, number&gt; = {};\n    for (const [id, level] of this.fatigue) {\n      levels[id] = level;\n    }\n    return levels;\n  }\n\n  getReviewerCount(): number {\n    return this.reviewers.length;\n  }\n}\n\n// ─── ProposalLifecycleLogger ───────────────────────────────────────────\n\ninterface LifecycleEvent {\n  timestamp: Date;\n  proposalId: string;\n  eventType: \"created\" | \"gated\" | \"assigned\" | \"reviewed\" | \"escalated\" | \"approved\" | \"rejected\" | \"executed\" | \"expired\";\n  actor: string;\n  detail: string;\n  durationMs?: number;\n}\n\nclass ProposalLifecycleLogger {\n  private events: LifecycleEvent[] = [];\n\n  log(event: Omit&lt;LifecycleEvent, \"timestamp\"&gt;): void {\n    this.events.push({ ...event, timestamp: new Date() });\n  }\n\n  getTimeline(proposalId: string): LifecycleEvent[] {\n    return this.events\n      .filter((e) => e.proposalId === proposalId)\n      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());\n  }\n\n  getTimeInStage(proposalId: string): Array&lt;{ stage: string; durationMs: number }&gt; {\n    const timeline = this.getTimeline(proposalId);\n    const stages: Array&lt;{ stage: string; durationMs: number }&gt; = [];\n    for (let i = 1; i &lt; timeline.length; i++) {\n      const duration = timeline[i].timestamp.getTime() - timeline[i - 1].timestamp.getTime();\n      stages.push({ stage: `${timeline[i - 1].eventType} → ${timeline[i].eventType}`, durationMs: duration });\n    }\n    return stages;\n  }\n\n  getStats(): { totalProposals: number; avgTimeToDecision: number; approvalRate: number } {\n    const proposalIds = [...new Set(this.events.map((e) => e.proposalId))];\n    const approved = this.events.filter((e) => e.eventType === \"approved\").length;\n    const rejected = this.events.filter((e) => e.eventType === \"rejected\").length;\n\n    let totalDecisionTime = 0;\n    let decisionCount = 0;\n    for (const id of proposalIds) {\n      const timeline = this.getTimeline(id);\n      const created = timeline.find((e) => e.eventType === \"created\");\n      const decided = timeline.find((e) => e.eventType === \"approved\" || e.eventType === \"rejected\" || e.eventType === \"expired\");\n      if (created && decided) {\n        totalDecisionTime += decided.timestamp.getTime() - created.timestamp.getTime();\n        decisionCount++;\n      }\n    }\n\n    const totalDecisions = approved + rejected;\n    return {\n      totalProposals: proposalIds.length,\n      avgTimeToDecision: decisionCount > 0 ? totalDecisionTime / decisionCount : 0,\n      approvalRate: totalDecisions > 0 ? approved / totalDecisions : 0,\n    };\n  }\n\n  exportJson(): string {\n    return JSON.stringify(this.events, null, 2);\n  }\n}\n\n// ─── Demo ──────────────────────────────────────────────────────────────\n\nasync function main() {\n  console.log(\"=== HITL Production Tooling Demo ===\\n\");\n\n  // 1. Reviewer Workload Balancer\n  const balancer = new ReviewerWorkloadBalancer();\n  balancer.registerReviewer({ id: \"alice\", name: \"Alice\", maxWorkload: 3, specialties: [\"security\", \"backend\"], averageReviewTimeMs: 2000 });\n  balancer.registerReviewer({ id: \"bob\", name: \"Bob\", maxWorkload: 5, specialties: [\"frontend\", \"ux\"], averageReviewTimeMs: 3000 });\n  balancer.registerReviewer({ id: \"carol\", name: \"Carol\", maxWorkload: 2, specialties: [\"infrastructure\", \"security\"], averageReviewTimeMs: 1500 });\n\n  for (let i = 0; i &lt; 6; i++) {\n    const assigned = balancer.assign(`prop-${i}`, i % 2 === 0 ? \"security\" : \"frontend\", 1);\n    console.log(`Workload: prop-${i} → ${assigned ? assigned.name : \"NO AVAILABLE REVIEWER\"}`);\n  }\n  balancer.completeReview(\"alice\");\n  const assigned2 = balancer.assign(\"prop-6\", \"security\", 1);\n  console.log(`  prop-6 (after Alice freed) → ${assigned2 ? assigned2.name : \"NONE\"}`);\n  console.log(`  Avg utilization: ${(balancer.getAverageUtilization() * 100).toFixed(0)}%`);\n\n  // 2. Stale Proposal Cleaner\n  const cleaner = new StaleProposalCleaner();\n  cleaner.track({ id: \"sp-1\", action: \"deploy\", status: \"pending\", submittedAt: new Date(Date.now() - 5000), assignedAt: null, ttlMs: 2000 });\n  cleaner.track({ id: \"sp-2\", action: \"rollback\", status: \"assigned\", submittedAt: new Date(Date.now() - 3000), assignedAt: new Date(Date.now() - 2000), ttlMs: 4000 });\n  const expired = cleaner.getExpired();\n  console.log(`\\nStale Cleaner: ${expired.length} expired proposals`);\n  cleaner.getExpiringSoon(1000).forEach((p) => console.log(`  Expiring soon: ${p.id} (${p.action})`));\n\n  // 3. Human Performance Tracker\n  const perfTracker = new HumanPerformanceTracker();\n  for (let i = 0; i &lt; 8; i++) {\n    perfTracker.recordReview({\n      proposalId: `perf-${i}`,\n      reviewerId: \"alice\",\n      decision: i &lt; 6 ? \"approved\" : \"rejected\",\n      timeToDecisionMs: 1500 + Math.random() * 2000,\n      outcomeCorrect: i !== 5,\n    });\n  }\n  const aliceStats = perfTracker.getStats(\"alice\");\n  console.log(`\\nPerformance Tracker (Alice):`);\n  console.log(`  Accuracy: ${(aliceStats!.accuracy * 100).toFixed(0)}%`);\n  console.log(`  Avg time: ${aliceStats!.averageTimeMs.toFixed(0)}ms`);\n  console.log(`  Fatigue: ${(aliceStats!.fatigueLevel * 100).toFixed(0)}%`);\n  console.log(`  Streak: ${aliceStats!.streak}`);\n  console.log(`  Efficiency score: ${aliceStats!.efficiencyScore.toFixed(3)}`);\n\n  // 4. Simulated Reviewer Pool\n  const pool = new SimulatedReviewerPool();\n  pool.addReviewer({ id: \"r1\", name: \"Fast Alice\", accuracy: 0.85, speedMs: [100, 300], fatigueThreshold: 0.6 });\n  pool.addReviewer({ id: \"r2\", name: \"Careful Bob\", accuracy: 0.95, speedMs: [400, 800], fatigueThreshold: 0.4 });\n  pool.addReviewer({ id: \"r3\", name: \"Quick Carol\", accuracy: 0.70, speedMs: [50, 150], fatigueThreshold: 0.8 });\n\n  console.log(`\\nSimulated Reviewer Pool (${pool.getReviewerCount()} reviewers):`);\n  for (let i = 0; i &lt; 5; i++) {\n    const reviewer = pool.getRandomReviewer();\n    const { decision, timeMs } = await pool.simulateReview(reviewer.id, 0.3 + Math.random() * 0.6);\n    console.log(`  ${reviewer.name}: ${decision} (${timeMs.toFixed(0)}ms)`);\n  }\n  console.log(`  Fatigue levels:`, pool.getFatigueLevels());\n\n  // 5. Proposal Lifecycle Logger\n  const logger = new ProposalLifecycleLogger();\n  logger.log({ proposalId: \"pl-1\", eventType: \"created\", actor: \"agent\", detail: \"Proposal created\" });\n  logger.log({ proposalId: \"pl-1\", eventType: \"gated\", actor: \"system\", detail: \"Confidence=0.72 → review needed\" });\n  logger.log({ proposalId: \"pl-1\", eventType: \"assigned\", actor: \"alice\", detail: \"Assigned to Alice\" });\n  logger.log({ proposalId: \"pl-1\", eventType: \"reviewed\", actor: \"alice\", detail: \"Reviewed and approved\" });\n  logger.log({ proposalId: \"pl-1\", eventType: \"executed\", actor: \"system\", detail: \"Action committed\" });\n\n  const timeline = logger.getTimeline(\"pl-1\");\n  console.log(`\\nLifecycle Logger: ${timeline.length} events for pl-1`);\n  timeline.forEach((e) => console.log(`  ${e.eventType}: ${e.detail} (${e.actor})`));\n  const stats = logger.getStats();\n  console.log(`  Total proposals: ${stats.totalProposals}`);\n  console.log(`  Approval rate: ${(stats.approvalRate * 100).toFixed(0)}%`);\n}\n\nawait main();\n"
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
          }), " Enhance the batch reviewer in Example 2 so that if the cumulative estimated cost of a batch exceeds $100, the batch is split and only the first $100 worth of proposals is submitted, with the remainder held for the next flush."]
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