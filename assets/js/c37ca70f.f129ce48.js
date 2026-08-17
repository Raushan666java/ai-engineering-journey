"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[71013],{

/***/ 89341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_08_multi_agent_loops_md_c37_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-08-multi-agent-loops-md-c37.json
const site_docs_courses_loop_engineering_ch_08_multi_agent_loops_md_c37_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch08-multi-agent-loops","title":"Chapter 8: Multi-Agent Loops","description":"Previous Loop Tooling","source":"@site/docs/courses/loop-engineering/ch08-multi-agent-loops.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch08-multi-agent-loops","permalink":"/ai-engineering-journey/loop-engineering/ch08-multi-agent-loops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"ch08-multi-agent-loops","slug":"/loop-engineering/ch08-multi-agent-loops","title":"Chapter 8: Multi-Agent Loops","sidebar_label":"Chapter 8: Multi-Agent Loops","sidebar_position":8},"sidebar":"course-loop-engineering","previous":{"title":"Chapter 7: Loop Safety","permalink":"/ai-engineering-journey/loop-engineering/ch07-loop-safety"},"next":{"title":"Chapter 9: Loop Tooling","permalink":"/ai-engineering-journey/loop-engineering/ch09-loop-tooling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/ch08-multi-agent-loops.md


const frontMatter = {
	id: 'ch08-multi-agent-loops',
	slug: '/loop-engineering/ch08-multi-agent-loops',
	title: 'Chapter 8: Multi-Agent Loops',
	sidebar_label: 'Chapter 8: Multi-Agent Loops',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Multi-Agent Loops';

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
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. Theory",
  "id": "1-theory",
  "level": 2
}, {
  "value": "1.1 Supervisor Loop",
  "id": "11-supervisor-loop",
  "level": 3
}, {
  "value": "1.2 Debate Loop",
  "id": "12-debate-loop",
  "level": 3
}, {
  "value": "1.3 Negotiation Loop",
  "id": "13-negotiation-loop",
  "level": 3
}, {
  "value": "1.4 Consensus Loop",
  "id": "14-consensus-loop",
  "level": 3
}, {
  "value": "1.5 Swarm Loop",
  "id": "15-swarm-loop",
  "level": 3
}, {
  "value": "2. Examples",
  "id": "2-examples",
  "level": 2
}, {
  "value": "2.1 SupervisorLoop — Task Distribution and Score-Based Aggregation",
  "id": "21-supervisorloop--task-distribution-and-score-based-aggregation",
  "level": 3
}, {
  "value": "2.2 DebateAgent — Adversarial Arguments with Judge Evaluation",
  "id": "22-debateagent--adversarial-arguments-with-judge-evaluation",
  "level": 3
}, {
  "value": "2.3 ConsensusVote — Tie-Breaking, Thresholds, and Quorum",
  "id": "23-consensusvote--tie-breaking-thresholds-and-quorum",
  "level": 3
}, {
  "value": "Extended Implementation: Agent Orchestrator, Consensus Voter, Debate Engine, Supervisor Pool, and Communication Bus",
  "id": "extended-implementation-agent-orchestrator-consensus-voter-debate-engine-supervisor-pool-and-communication-bus",
  "level": 3
}, {
  "value": "Mermaid: Supervisor-Worker Architecture with Health Checks",
  "id": "mermaid-supervisor-worker-architecture-with-health-checks",
  "level": 3
}, {
  "value": "Extended Implementation: Capability Registry, Task Decomposition, Voting Aggregator, Log Collector, and Dynamic Spawner",
  "id": "extended-implementation-capability-registry-task-decomposition-voting-aggregator-log-collector-and-dynamic-spawner",
  "level": 3
}, {
  "value": "4. Exercises",
  "id": "4-exercises",
  "level": 2
}, {
  "value": "4.1 Review",
  "id": "41-review",
  "level": 3
}, {
  "value": "4.2 Application",
  "id": "42-application",
  "level": 3
}, {
  "value": "4.3 Challenge",
  "id": "43-challenge",
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
        id: "chapter-8-multi-agent-loops",
        children: "Chapter 8: Multi-Agent Loops"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/loop-engineering/ch07-loop-safety",
          children: "Loop Safety"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/loop-engineering/ch09-loop-tooling",
          children: "Loop Tooling"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a supervisor loop that orchestrates workers, aggregates results, and decides on next actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement debate loops where agents argue with adversarial scoring and judge evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build negotiation loops where agents trade resources and iterate toward agreement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct consensus loops with BFT-style voting, tie-breaking, and configurable quorum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand swarm loops where simple agent rules produce emergent behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the right multi-agent pattern for a given problem domain"
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
            children: "Supervisor Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central orchestrator distributes work and aggregates results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use score-based aggregation; re-route on failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debate Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agents generate adversarial arguments scored by a judge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher-quality reasoning emerges from structured disagreement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negotiation Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agents trade proposals iteratively toward a mutually acceptable outcome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track concession rates; detect deadlock with timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFT-style voting with tie-breakers and quorum thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = 3f + 1 agents tolerate f failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swarm Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple per-agent rules produce complex collective behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No central coordinator; emergent result from local interactions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Supervisor Loop] --> B[Debate Loop]\n    B --> C[Negotiation Loop]\n    C --> D[Consensus Loop]\n    D --> E[Swarm Loop]\n    E --> F[Pattern Selection Guide]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-theory",
      children: "1. Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-supervisor-loop",
      children: "1.1 Supervisor Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "supervisor loop"
      }), " is the most widely deployed multi-agent pattern. A single orchestrator agent (the supervisor) manages a pool of worker agents:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Supervisor\n  ├─ Worker A: research\n  ├─ Worker B: code generation\n  ├─ Worker C: testing\n  └─ Worker D: documentation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loop flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervisor receives a task."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervisor decomposes the task into subtasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervisor dispatches subtasks to workers (in parallel or sequentially)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workers execute and return results."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervisor aggregates results and scores them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervisor decides: emit final output, re-route a failed subtask, or loop back to step 2 with refined decomposition."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregation strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Score-based."
        }), " Each worker result is scored (by the supervisor or an evaluator). The highest-scoring result is selected or results are combined weighted by score."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Voting."
        }), " Workers vote on the best outcome. Requires 3+ workers for majority."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ensemble."
        }), " All results are combined into a single output (e.g., multiple code reviews merged into one report)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best-of-N."
        }), " All workers run independently; the best single result is chosen."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure handling."
      }), " If a worker fails or times out, the supervisor can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retry the same worker (with backoff)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-route the subtask to a different worker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decompose the subtask further and distribute to multiple workers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark the subtask as failed and continue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-debate-loop",
      children: "1.2 Debate Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debate loops simulate structured argumentation between agents. They produce higher-quality reasoning than single-agent approaches by forcing each agent to defend its position against critique."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "       ┌─────────────┐\n       │   Motion    │\n       └──────┬──────┘\n              │\n              ▼\n    ┌───────────────────┐\n    │  Agent Pro        │\n    │  (argues for)     │\n    └────────┬──────────┘\n             │\n             ▼\n    ┌───────────────────┐\n    │  Agent Con        │\n    │  (argues against) │\n    └────────┬──────────┘\n             │\n    ┌────────▼──────────┐\n    │  More rounds?     │───yes──► (loop back)\n    └────────┬──────────┘\n             │ no\n             ▼\n    ┌───────────────────┐\n    │  Judge            │\n    │  (evaluates,      │\n    │   scores, decides)│\n    └───────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decisions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number of rounds."
        }), " 2-3 rounds are typical. More rounds produce diminishing returns and increase token costs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adversary mode."
        }), " Agents are explicitly prompted to find flaws in the opponent's argument. This prevents groupthink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Judge architecture."
        }), " The judge can be:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A separate LLM call with a rubric"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A panel of judges with majority vote"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A human (for high-stakes decisions)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scoring criteria."
        }), " Clarity, evidence quality, logical consistency, responsiveness to counter-arguments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-negotiation-loop",
      children: "1.3 Negotiation Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Negotiation loops model agents with different resources or objectives that must reach a mutually acceptable agreement through iterative proposal exchange."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each agent has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "utility function"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "U_i(x)"
        }), " over outcomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each agent has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reservation price"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R_i"
        }), " — the minimum utility they will accept."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "negotiation set"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "N = {x | U_i(x) ≥ R_i for all i}"
        }), " is the set of mutually acceptable outcomes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The goal is to find an outcome in the negotiation set, ideally on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pareto frontier"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loop flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agents exchange initial proposals."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each agent evaluates the other's proposal against its own utility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agents make concessions (reduce demands) or counter-propose."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until agreement or timeout."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If timeout, agents can: walk away, accept the best-so-far, or escalate to a human."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Concession strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boulware."
        }), " Start with an extreme position and concede slowly. Strong if you have time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conceder."
        }), " Start with a reasonable position and concede quickly. Fast but weak."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tit-for-Tat."
        }), " Match the other agent's concession level. Reciprocity-based."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-consensus-loop",
      children: "1.4 Consensus Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consensus loops are inspired by Byzantine Fault Tolerance (BFT) distributed systems. A group of agents must agree on a single outcome even if some agents are faulty or adversarial."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BFT model:"
      }), " With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N = 3f + 1"
      }), " agents, the system tolerates up to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f"
      }), " faulty agents. Each agent broadcasts its proposal, collects proposals from others, and runs a deterministic decision function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent Proposals:\n  A1: \"option X\"\n  A2: \"option X\"\n  A3: \"option Y\"\n  A4: \"option X\"\n\nQuorum threshold = ceil(2N/3) = ceil(2*4/3) = 3\n\"option X\" has 3 votes ≥ 3 → CONSENSUS REACHED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tie-breaking strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predefined tiebreaker."
        }), " A designated agent's vote breaks ties."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External oracle."
        }), " A fresh LLM call evaluates the tied options."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation."
        }), " The tied options are passed to a judge agent or human."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random."
        }), " Select randomly among tied options."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quorum thresholds:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quorum"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple majority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (50%+1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFT minimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (75%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFT high tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (71%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supermajority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-swarm-loop",
      children: "1.5 Swarm Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swarm loops take inspiration from ant colonies, bird flocking, and fish schooling. Simple per-agent rules produce complex emergent behavior without central coordination."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decentralization."
        }), " No single agent has a global view. Each agent acts on local information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple rules."
        }), " Each agent follows 2-3 simple rules (e.g., \"move toward the best neighbor solution\", \"avoid overcrowding\", \"random perturbation with small probability\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Emergence."
        }), " Complex patterns arise from local interactions and positive feedback."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In agent systems, swarm-like patterns include:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel exploration."
        }), " Each agent explores a different part of the solution space. Agents share findings through a shared blackboard. Positive feedback: promising areas attract more agents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stigmergy."
        }), " Agents leave traces (e.g., preference votes, partial solutions) that influence other agents' behavior. No direct communication needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pheromone maps."
        }), " Agents mark solution paths with \"pheromone\" scores. Other agents preferentially follow high-pheromone paths. Pheromone evaporates over time to avoid local optima."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison with other patterns:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supervisor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swarm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor holds global state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agents share via stigmergy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor is single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly resilient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by supervisor capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with swarm size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergent, harder to predict"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-examples",
      children: "2. Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-supervisorloop--task-distribution-and-score-based-aggregation",
      children: "2.1 SupervisorLoop — Task Distribution and Score-Based Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * SupervisorLoop.ts\n * Orchestrator dispatches subtasks to workers, aggregates results with scores.\n * Run: bun run examples/ch08/SupervisorLoop.ts\n */\n\ninterface Task {\n  id: string;\n  description: string;\n  requiredCapability: string;\n  priority: number;\n}\n\ninterface WorkerResult {\n  workerId: string;\n  taskId: string;\n  output: string;\n  score: number;\n  confidence: number;\n  latencyMs: number;\n}\n\ninterface WorkerConfig {\n  id: string;\n  capabilities: string[];\n  costPerCall: number;\n}\n\n// ─── Worker simulation ──────────────────────────────────────────────────────\n\nconst WORKERS: WorkerConfig[] = [\n  { id: \"researcher-a\", capabilities: [\"research\", \"analysis\"], costPerCall: 0.01 },\n  { id: \"coder-b\", capabilities: [\"code\", \"debug\"], costPerCall: 0.02 },\n  { id: \"reviewer-c\", capabilities: [\"review\", \"analysis\"], costPerCall: 0.015 },\n  { id: \"architect-d\", capabilities: [\"design\", \"review\"], costPerCall: 0.025 },\n];\n\nasync function executeWorker(worker: WorkerConfig, task: Task): Promise<WorkerResult> {\n  const startTime = Date.now();\n  const latencyMs = 100 + Math.floor(Math.random() * 400);\n\n  await new Promise(resolve => setTimeout(resolve, latencyMs));\n\n  // Simulate varying quality\n  const baseScore = task.priority > 5 ? 0.9 : 0.75;\n  const capabilityBonus = worker.capabilities.includes(task.requiredCapability)\n    ? 0.15\n    : -0.1;\n  const noise = (Math.random() - 0.5) * 0.2;\n  const score = Math.max(0, Math.min(1, baseScore + capabilityBonus + noise));\n\n  return {\n    workerId: worker.id,\n    taskId: task.id,\n    output: `${worker.id} processed \"${task.description}\"`,\n    score,\n    confidence: score,\n    latencyMs,\n  };\n}\n\n// ─── Supervisor ─────────────────────────────────────────────────────────────\n\ninterface SupervisorConfig {\n  minWorkersPerTask: number;\n  scoreThreshold: number;\n  maxRetries: number;\n}\n\nclass Supervisor {\n  private results: Map<string, WorkerResult[]> = new Map();\n  private totalCost = 0;\n\n  constructor(private config: SupervisorConfig) {}\n\n  async execute(tasks: Task[]): Promise<Map<string, WorkerResult>> {\n    const finalResults = new Map<string, WorkerResult>();\n\n    for (const task of tasks) {\n      console.log(`\\n── Task: \"${task.description}\" (capability: ${task.requiredCapability}) ──`);\n      const result = await this.executeTaskWithRetries(task, 0);\n      if (result) {\n        finalResults.set(task.id, result);\n      }\n    }\n\n    console.log(`\\nTotal cost: $${this.totalCost.toFixed(4)}`);\n    return finalResults;\n  }\n\n  private async executeTaskWithRetries(\n    task: Task,\n    attempt: number,\n  ): Promise<WorkerResult | null> {\n    if (attempt >= this.config.maxRetries) {\n      console.log(`  Task ${task.id} failed after ${attempt} retries`);\n      return null;\n    }\n\n    // Select qualified workers\n    const candidates = WORKERS.filter(w =>\n      w.capabilities.includes(task.requiredCapability) ||\n      w.capabilities.some(c => task.description.toLowerCase().includes(c))\n    );\n\n    // Fall back to all workers if none match\n    const selectedWorkers = candidates.length >= this.config.minWorkersPerTask\n      ? candidates.slice(0, this.config.minWorkersPerTask)\n      : WORKERS.slice(0, this.config.minWorkersPerTask);\n\n    console.log(`  Selected workers: ${selectedWorkers.map(w => w.id).join(\", \")}`);\n\n    // Execute workers in parallel\n    const workerResults = await Promise.all(\n      selectedWorkers.map(w => executeWorker(w, task))\n    );\n\n    // Track results and cost\n    for (const r of workerResults) {\n      this.totalCost += WORKERS.find(w => w.id === r.workerId)!.costPerCall;\n    }\n    this.results.set(task.id, workerResults);\n\n    // Aggregate with score weighting\n    const bestResult = this.aggregateByBestScore(workerResults);\n    console.log(`  Best result: ${bestResult.workerId} (score: ${bestResult.score.toFixed(3)})`);\n\n    if (bestResult.score >= this.config.scoreThreshold) {\n      return bestResult;\n    }\n\n    console.log(`  Score ${bestResult.score.toFixed(3)} below threshold ${this.config.scoreThreshold}, retrying...`);\n    return this.executeTaskWithRetries(task, attempt + 1);\n  }\n\n  private aggregateByBestScore(results: WorkerResult[]): WorkerResult {\n    return results.reduce((best, current) =>\n      current.score > best.score ? current : best\n    );\n  }\n\n  getReport(): string {\n    const lines: string[] = [];\n    for (const [taskId, results] of this.results) {\n      lines.push(`Task ${taskId}:`);\n      for (const r of results) {\n        lines.push(`  ${r.workerId}: score=${r.score.toFixed(3)}, latency=${r.latencyMs}ms`);\n      }\n    }\n    lines.push(`Total cost: $${this.totalCost.toFixed(4)}`);\n    return lines.join(\"\\n\");\n  }\n}\n\n// ─── Main ───────────────────────────────────────────────────────────────────\n\nconst supervisor = new Supervisor({\n  minWorkersPerTask: 2,\n  scoreThreshold: 0.7,\n  maxRetries: 2,\n});\n\nconst tasks: Task[] = [\n  { id: \"t1\", description: \"Research caching strategies\", requiredCapability: \"research\", priority: 6 },\n  { id: \"t2\", description: \"Implement Redis cache client\", requiredCapability: \"code\", priority: 8 },\n  { id: \"t3\", description: \"Review cache architecture\", requiredCapability: \"review\", priority: 5 },\n];\n\nconsole.log(\"╔══════════════════════════════════════╗\");\nconsole.log(\"║      SupervisorLoop Execution        ║\");\nconsole.log(\"╚══════════════════════════════════════╝\");\n\nconst results = await supervisor.execute(tasks);\n\nconsole.log(\"\\n── Final Results ──\");\nfor (const [taskId, result] of results) {\n  console.log(`${taskId}: ${result.output} (worker: ${result.workerId}, score: ${result.score.toFixed(3)})`);\n}\n\nconsole.log(\"\\n── Full Report ──\");\nconsole.log(supervisor.getReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-debateagent--adversarial-arguments-with-judge-evaluation",
      children: "2.2 DebateAgent — Adversarial Arguments with Judge Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * DebateAgent.ts\n * Two agents debate a motion with adversarial scoring and a judge evaluator.\n * Run: bun run examples/ch08/DebateAgent.ts\n */\n\ninterface Argument {\n  agentId: string;\n  stance: \"pro\" | \"con\";\n  round: number;\n  content: string;\n  evidence: string[];\n}\n\ninterface JudgeScore {\n  clarity: number;\n  evidence: number;\n  logic: number;\n  responsiveness: number;\n  total: number;\n}\n\ninterface DebateResult {\n  motion: string;\n  rounds: Argument[];\n  scores: { pro: JudgeScore; con: JudgeScore };\n  winner: \"pro\" | \"con\" | \"draw\";\n  judgeRationale: string;\n}\n\n// ─── Debate Agent ───────────────────────────────────────────────────────────\n\nclass DebateAgent {\n  constructor(\n    public id: string,\n    public stance: \"pro\" | \"con\",\n  ) {}\n\n  async generateArgument(\n    motion: string,\n    round: number,\n    opponentArgument: Argument | null,\n  ): Promise<Argument> {\n    // Simulate LLM call with debate generation\n    await new Promise(resolve => setTimeout(resolve, 150 + Math.random() * 200));\n\n    const proArguments: Record<number, string[]> = {\n      1: [\n        \"Adopting microservices improves deployment independence\",\n        \"Teams can scale independently with bounded contexts\",\n        \"Fault isolation prevents system-wide outages\",\n      ],\n      2: [\n        \"Response: The monolith already has deployment bottlenecks costing $2M/year\",\n        \"Counter: Your coupling argument ignores well-bounded domain contexts\",\n        \"Further evidence: Netflix and Amazon successfully sustained this model\",\n      ],\n      3: [\n        \"Rebuttal: Your complexity argument conflates accidental vs essential complexity\",\n        \"Migration cost is one-time; flexibility overhead is perpetual\",\n        \"Data: 80% of teams report faster feature velocity after migration\",\n      ],\n    };\n\n    const conArguments: Record<number, string[]> = {\n      1: [\n        \"Microservices add network latency and operational complexity\",\n        \"Distributed transactions are significantly harder to debug\",\n        \"Most teams lack the operational maturity for distributed systems\",\n      ],\n      2: [\n        \"Response: $2M/year is 0.1% of revenue — not a compelling justification\",\n        \"Counter: bounded contexts require extensive upfront domain modeling\",\n        \"Further evidence: 60% of microservices migrations fail or are rolled back\",\n      ],\n      3: [\n        \"Rebuttal: Feature velocity gains are typically measured during the rewrite, not sustained\",\n        \"Essential complexity of distributed systems is higher than monoliths\",\n        \"Data: Post-migration incident frequency increases 3x on average\",\n      ],\n    };\n\n    const args = this.stance === \"pro\" ? proArguments : conArguments;\n    const content = (args[round] || args[1]).join(\". \");\n    const evidence = args[round] || args[1];\n\n    return {\n      agentId: this.id,\n      stance: this.stance,\n      round,\n      content,\n      evidence,\n    };\n  }\n}\n\n// ─── Judge ──────────────────────────────────────────────────────────────────\n\nclass DebateJudge {\n  async evaluate(\n    motion: string,\n    rounds: Argument[],\n  ): Promise<{ scores: { pro: JudgeScore; con: JudgeScore }; winner: \"pro\" | \"con\" | \"draw\"; rationale: string }> {\n    await new Promise(resolve => setTimeout(resolve, 200));\n\n    const proArgs = rounds.filter(a => a.stance === \"pro\");\n    const conArgs = rounds.filter(a => a.stance === \"con\");\n\n    const proScore: JudgeScore = {\n      clarity: 0.85 + Math.random() * 0.1,\n      evidence: 0.7 + Math.random() * 0.2,\n      logic: 0.75 + Math.random() * 0.15,\n      responsiveness: 0.7 + Math.random() * 0.2,\n      total: 0,\n    };\n    const conScore: JudgeScore = {\n      clarity: 0.8 + Math.random() * 0.15,\n      evidence: 0.75 + Math.random() * 0.2,\n      logic: 0.8 + Math.random() * 0.1,\n      responsiveness: 0.75 + Math.random() * 0.15,\n      total: 0,\n    };\n\n    proScore.total = (proScore.clarity + proScore.evidence + proScore.logic + proScore.responsiveness) / 4;\n    conScore.total = (conScore.clarity + conScore.evidence + conScore.logic + conScore.responsiveness) / 4;\n\n    const diff = proScore.total - conScore.total;\n    const winner: \"pro\" | \"con\" | \"draw\" =\n      Math.abs(diff) < 0.03 ? \"draw\" : diff > 0 ? \"pro\" : \"con\";\n\n    const rationale = winner === \"draw\"\n      ? \"Both sides presented compelling, well-evidenced arguments. The debate is too close to call.\"\n      : `${winner === \"pro\" ? \"Pro\" : \"Con\"} demonstrated stronger logical consistency and evidence quality across ${rounds.length} rounds.`;\n\n    return { scores: { pro: proScore, con: conScore }, winner, rationale };\n  }\n}\n\n// ─── Debate Orchestrator ────────────────────────────────────────────────────\n\ninterface DebateConfig {\n  maxRounds: number;\n  judgeModel: string;\n  scoringRubric: string[];\n}\n\nclass DebateOrchestrator {\n  private proAgent: DebateAgent;\n  private conAgent: DebateAgent;\n  private judge: DebateJudge;\n  private rounds: Argument[] = [];\n\n  constructor(\n    proId: string,\n    conId: string,\n    private config: DebateConfig,\n  ) {\n    this.proAgent = new DebateAgent(proId, \"pro\");\n    this.conAgent = new DebateAgent(conId, \"con\");\n    this.judge = new DebateJudge();\n  }\n\n  async debate(motion: string): Promise<DebateResult> {\n    console.log(`\\nMotion: \"${motion}\"\\n`);\n\n    for (let round = 1; round <= this.config.maxRounds; round++) {\n      console.log(`── Round ${round} ──`);\n\n      const lastPro = this.rounds.findLast(a => a.stance === \"pro\") ?? null;\n      const lastCon = this.rounds.findLast(a => a.stance === \"con\") ?? null;\n\n      // Pro argues first each round\n      const proArg = await this.proAgent.generateArgument(motion, round, lastCon);\n      this.rounds.push(proArg);\n      console.log(`PRO [${proArg.agentId}]: ${proArg.content.slice(0, 80)}...`);\n\n      // Con responds\n      const conArg = await this.conAgent.generateArgument(motion, round, proArg);\n      this.rounds.push(conArg);\n      console.log(`CON [${conArg.agentId}]: ${conArg.content.slice(0, 80)}...`);\n    }\n\n    // Judge evaluates\n    console.log(`\\n── Judge Evaluation ──`);\n    const { scores, winner, rationale } = await this.judge.evaluate(motion, this.rounds);\n\n    console.log(`Pro score: ${scores.pro.total.toFixed(3)}`);\n    console.log(`Con score: ${scores.con.total.toFixed(3)}`);\n    console.log(`Winner: ${winner.toUpperCase()}`);\n    console.log(`Rationale: ${rationale}`);\n\n    return {\n      motion,\n      rounds: this.rounds,\n      scores,\n      winner,\n      judgeRationale: rationale,\n    };\n  }\n}\n\n// ─── Main ───────────────────────────────────────────────────────────────────\n\nconst orchestrator = new DebateOrchestrator(\n  \"agent-alpha\",\n  \"agent-beta\",\n  {\n    maxRounds: 3,\n    judgeModel: \"claude-sonnet-4\",\n    scoringRubric: [\"clarity\", \"evidence\", \"logic\", \"responsiveness\"],\n  },\n);\n\nconsole.log(\"╔════════════════════════════════════════╗\");\nconsole.log(\"║      Structured Debate Session         ║\");\nconsole.log(\"╚════════════════════════════════════════╝\");\n\nconst result = await orchestrator.debate(\n  \"Microservices architecture is superior to monoliths for mid-size engineering teams\"\n);\n\nconsole.log(\"\\n── Final Debate Result ──\");\nconsole.log(JSON.stringify({\n  winner: result.winner,\n  proScore: result.scores.pro.total,\n  conScore: result.scores.con.total,\n  rounds: result.rounds.length,\n  rationale: result.judgeRationale,\n}, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-consensusvote--tie-breaking-thresholds-and-quorum",
      children: "2.3 ConsensusVote — Tie-Breaking, Thresholds, and Quorum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * ConsensusVote.ts\n * Multi-agent consensus with configurable quorum, tie-breaking, and escalation.\n * Run: bun run examples/ch08/ConsensusVote.ts\n */\n\ninterface Vote {\n  agentId: string;\n  option: string;\n  confidence: number;\n  rationale: string;\n}\n\ninterface ConsensusConfig {\n  quorumThreshold: number;      // fraction of total agents that must vote (e.g., 0.67)\n  winThreshold: number;         // fraction of votes needed to win (e.g., 0.5)\n  maxRounds: number;\n  tiebreakerStrategy: \"predefined\" | \"random\" | \"escalate\";\n  tiebreakerAgentId?: string;\n}\n\ninterface ConsensusResult {\n  winner: string | null;\n  votes: Vote[];\n  round: number;\n  reached: boolean;\n  voteDistribution: Record<string, number>;\n  totalVoters: number;\n  tiebroken: boolean;\n}\n\n// ─── Consensus Voter ────────────────────────────────────────────────────────\n\nclass ConsensusVoter {\n  constructor(\n    public id: string,\n    private preferenceBias: Record<string, number>,\n  ) {}\n\n  async vote(options: string[], context: string): Promise<Vote> {\n    await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));\n\n    // Simulate reasoning\n    let bestOption = options[0];\n    let bestScore = -Infinity;\n\n    for (const option of options) {\n      const bias = this.preferenceBias[option] || 0;\n      const randomFactor = Math.random() * 0.3;\n      const score = bias + randomFactor;\n      if (score > bestScore) {\n        bestScore = score;\n        bestOption = option;\n      }\n    }\n\n    return {\n      agentId: this.id,\n      option: bestOption,\n      confidence: Math.min(1, bestScore + 0.5),\n      rationale: `Preference for \"${bestOption}\" based on analysis of ${context}`,\n    };\n  }\n\n  async changeVote(currentVote: Vote, roundResults: Vote[]): Promise<Vote> {\n    // Simulate deliberation: an agent may switch if its option is losing\n    await new Promise(resolve => setTimeout(resolve, 50));\n\n    const counts: Record<string, number> = {};\n    for (const v of roundResults) {\n      counts[v.option] = (counts[v.option] || 0) + 1;\n    }\n\n    const myOption = currentVote.option;\n    const myCount = counts[myOption] || 0;\n    const total = roundResults.length;\n\n    // If my option has less than 20% support, consider switching with 30% probability\n    if (myCount / total < 0.2 && Math.random() < 0.3) {\n      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);\n      const leading = sorted[0][0];\n      if (leading !== myOption) {\n        return {\n          ...currentVote,\n          option: leading,\n          rationale: `Switched to \"${leading}\" as it has majority support (${sorted[0][1]}/${total})`,\n        };\n      }\n    }\n\n    return currentVote;\n  }\n}\n\n// ─── Consensus Engine ───────────────────────────────────────────────────────\n\nclass ConsensusEngine {\n  private voters: ConsensusVoter[];\n\n  constructor(\n    voterIds: string[],\n    private options: string[],\n    private config: ConsensusConfig,\n  ) {\n    this.voters = voterIds.map((id, i) =>\n      new ConsensusVoter(id, this.generateBias(i))\n    );\n  }\n\n  private generateBias(index: number): Record<string, number> {\n    const bias: Record<string, number> = {};\n    const numOptions = this.options.length;\n    for (let i = 0; i < numOptions; i++) {\n      // Each voter has a slight preference for option matching their index\n      const preference = i === index % numOptions ? 0.4 : Math.random() * 0.3;\n      bias[this.options[i]] = preference;\n    }\n    return bias;\n  }\n\n  async reachConsensus(context: string): Promise<ConsensusResult> {\n    let votes: Vote[] = [];\n\n    // Round 1: initial votes\n    console.log(\"\\n── Round 1: Initial Votes ──\");\n    votes = await Promise.all(\n      this.voters.map(v => v.vote(this.options, context))\n    );\n    this.printVotes(votes);\n\n    let result = this.checkConsensus(votes, 1);\n    if (result.reached) return result;\n\n    // Subsequent rounds: allow vote changes\n    for (let round = 2; round <= this.config.maxRounds; round++) {\n      console.log(`\\n── Round ${round}: Deliberation ──`);\n      votes = await Promise.all(\n        this.voters.map((v, i) => v.changeVote(votes[i], votes))\n      );\n      this.printVotes(votes);\n\n      result = this.checkConsensus(votes, round);\n      if (result.reached) return result;\n    }\n\n    // Max rounds reached without consensus — apply tie-breaking\n    return this.resolveWithoutConsensus(votes);\n  }\n\n  private checkConsensus(votes: Vote[], round: number): ConsensusResult {\n    const distribution = this.countVotes(votes);\n    const totalVoters = votes.length;\n    const quorumNeeded = Math.ceil(totalVoters * this.config.quorumThreshold);\n    const winNeeded = Math.ceil(totalVoters * this.config.winThreshold);\n\n    const quorumMet = totalVoters >= quorumNeeded;\n\n    if (!quorumMet) {\n      return {\n        winner: null,\n        votes,\n        round,\n        reached: false,\n        voteDistribution: distribution,\n        totalVoters,\n        tiebroken: false,\n      };\n    }\n\n    for (const [option, count] of Object.entries(distribution)) {\n      if (count >= winNeeded) {\n        return {\n          winner: option,\n          votes,\n          round,\n          reached: true,\n          voteDistribution: distribution,\n          totalVoters,\n          tiebroken: false,\n        };\n      }\n    }\n\n    return {\n      winner: null,\n      votes,\n      round,\n      reached: false,\n      voteDistribution: distribution,\n      totalVoters,\n      tiebroken: false,\n    };\n  }\n\n  private resolveWithoutConsensus(votes: Vote[]): ConsensusResult {\n    const distribution = this.countVotes(votes);\n    const totalVoters = votes.length;\n    const maxVotes = Math.max(...Object.values(distribution));\n    const tiedOptions = Object.entries(distribution)\n      .filter(([_, count]) => count === maxVotes)\n      .map(([option]) => option);\n\n    let winner: string | null;\n    let tiebroken = false;\n\n    if (tiedOptions.length === 1) {\n      winner = tiedOptions[0];\n    } else {\n      tiebroken = true;\n      switch (this.config.tiebreakerStrategy) {\n        case \"predefined\": {\n          const tiebreaker = this.config.tiebreakerAgentId;\n          const tiebreakerVote = votes.find(v => v.agentId === tiebreaker);\n          winner = tiebreakerVote?.option ?? tiedOptions[0];\n          console.log(`\\n  Tiebreaker agent \"${tiebreaker}\" chose: ${winner}`);\n          break;\n        }\n        case \"random\": {\n          winner = tiedOptions[Math.floor(Math.random() * tiedOptions.length)];\n          console.log(`\\n  Random tiebreaker chose: ${winner}`);\n          break;\n        }\n        case \"escalate\": {\n          winner = null;\n          console.log(`\\n  Tie escalated to judge (no auto-resolution)`);\n          break;\n        }\n      }\n    }\n\n    return {\n      winner,\n      votes,\n      round: this.config.maxRounds,\n      reached: winner !== null,\n      voteDistribution: distribution,\n      totalVoters,\n      tiebroken,\n    };\n  }\n\n  private countVotes(votes: Vote[]): Record<string, number> {\n    const counts: Record<string, number> = {};\n    for (const v of votes) {\n      counts[v.option] = (counts[v.option] || 0) + 1;\n    }\n    return counts;\n  }\n\n  private printVotes(votes: Vote[]): void {\n    for (const v of votes) {\n      console.log(`  ${v.agentId}: ${v.option} (confidence: ${v.confidence.toFixed(2)})`);\n    }\n    const dist = this.countVotes(votes);\n    console.log(`  Distribution: ${JSON.stringify(dist)}`);\n  }\n}\n\n// ─── Main ───────────────────────────────────────────────────────────────────\n\nconst engine1 = new ConsensusEngine(\n  [\"voter-alpha\", \"voter-beta\", \"voter-gamma\", \"voter-delta\", \"voter-epsilon\"],\n  [\"option-A\", \"option-B\", \"option-C\"],\n  {\n    quorumThreshold: 0.67,\n    winThreshold: 0.51,\n    maxRounds: 3,\n    tiebreakerStrategy: \"predefined\",\n    tiebreakerAgentId: \"voter-alpha\",\n  },\n);\n\nconsole.log(\"╔══════════════════════════════════════════╗\");\nconsole.log(\"║      Consensus Vote Simulation           ║\");\nconsole.log(\"╚══════════════════════════════════════════╝\");\n\nconsole.log(\"\\nConfiguration:\");\nconsole.log(`  Quorum: ${engine1[\"config\"].quorumThreshold * 100}%`);\nconsole.log(`  Win threshold: ${engine1[\"config\"].winThreshold * 100}%`);\nconsole.log(`  Max rounds: ${engine1[\"config\"].maxRounds}`);\n\nconst result1 = await engine1.reachConsensus(\"Select the best database migration strategy\");\n\nconsole.log(\"\\n── Result ──\");\nconsole.log(JSON.stringify({\n  winner: result1.winner,\n  reached: result1.reached,\n  round: result1.round,\n  distribution: result1.voteDistribution,\n  tiebroken: result1.tiebroken,\n}, null, 2));\n\n// ─── Test tie-breaking scenario ─────────────────────────────────────────────\n\nconsole.log(\"\\n\\n═══ Tie-Breaking Scenario ═══\\n\");\n\nconst engine2 = new ConsensusEngine(\n  [\"voter-1\", \"voter-2\", \"voter-3\", \"voter-4\"],\n  [\"deploy-now\", \"wait\", \"cancel\"],\n  {\n    quorumThreshold: 0.5,\n    winThreshold: 0.5,\n    maxRounds: 1,\n    tiebreakerStrategy: \"random\",\n  },\n);\n\nconst result2 = await engine2.reachConsensus(\"Deploy decision for v2.3.1\");\nconsole.log(\"\\n── Result ──\");\nconsole.log(JSON.stringify({\n  winner: result2.winner,\n  reached: result2.reached,\n  distribution: result2.voteDistribution,\n  tiebroken: result2.tiebroken,\n}, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-agent-orchestrator-consensus-voter-debate-engine-supervisor-pool-and-communication-bus",
      children: "Extended Implementation: Agent Orchestrator, Consensus Voter, Debate Engine, Supervisor Pool, and Communication Bus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/// <reference types=\"node\" />\n\nimport { randomUUID } from \"node:crypto\";\n\n// ── Agent Task Types ───────────────────────────────────────────\ntype AgentCapability = \"code\" | \"review\" | \"research\" | \"security\" | \"design\" | \"analysis\";\n\ninterface AgentTask {\n  id: string;\n  description: string;\n  requiredCapabilities: AgentCapability[];\n  priority: number;\n  maxDurationMs: number;\n  payload: Record<string, unknown>;\n}\n\ninterface AgentDescriptor {\n  id: string;\n  name: string;\n  capabilities: AgentCapability[];\n  load: number;\n  isAvailable: boolean;\n}\n\ninterface TaskAssignment {\n  taskId: string;\n  agentId: string;\n  status: \"assigned\" | \"in_progress\" | \"completed\" | \"failed\";\n  result?: unknown;\n  error?: string;\n}\n\n// ── Agent Orchestrator ─────────────────────────────────────────\nclass AgentOrchestrator {\n  private agents: Map<string, AgentDescriptor> = new Map();\n  private assignments: TaskAssignment[] = [];\n\n  registerAgent(agent: AgentDescriptor): void {\n    this.agents.set(agent.id, agent);\n  }\n\n  unregisterAgent(agentId: string): boolean {\n    return this.agents.delete(agentId);\n  }\n\n  get availableAgents(): AgentDescriptor[] {\n    return [...this.agents.values()].filter((a) => a.isAvailable);\n  }\n\n  /** Find the best agent for a task based on capabilities and load. */\n  private selectAgent(task: AgentTask): AgentDescriptor | null {\n    const candidates = this.availableAgents.filter((a) =>\n      task.requiredCapabilities.every((c) => a.capabilities.includes(c)),\n    );\n    if (candidates.length === 0) return null;\n    return candidates.sort((a, b) => a.load - b.load)[0]; // least loaded\n  }\n\n  /** Assign a task to the best available agent. */\n  async assignTask(task: AgentTask): Promise<TaskAssignment> {\n    const agent = this.selectAgent(task);\n    if (!agent) {\n      const failed: TaskAssignment = {\n        taskId: task.id,\n        agentId: \"none\",\n        status: \"failed\",\n        error: \"No available agent with required capabilities\",\n      };\n      this.assignments.push(failed);\n      return failed;\n    }\n\n    agent.isAvailable = false;\n    agent.load++;\n\n    const assignment: TaskAssignment = {\n      taskId: task.id,\n      agentId: agent.id,\n      status: \"assigned\",\n    };\n    this.assignments.push(assignment);\n    return assignment;\n  }\n\n  /** Report task result from an agent. */\n  reportCompletion(taskId: string, agentId: string, result: unknown): void {\n    const assignment = this.assignments.find(\n      (a) => a.taskId === taskId && a.agentId === agentId,\n    );\n    if (assignment) {\n      assignment.status = \"completed\";\n      assignment.result = result;\n    }\n    const agent = this.agents.get(agentId);\n    if (agent) {\n      agent.isAvailable = true;\n    }\n  }\n\n  reportFailure(taskId: string, agentId: string, error: string): void {\n    const assignment = this.assignments.find(\n      (a) => a.taskId === taskId && a.agentId === agentId,\n    );\n    if (assignment) {\n      assignment.status = \"failed\";\n      assignment.error = error;\n    }\n    const agent = this.agents.get(agentId);\n    if (agent) {\n      agent.isAvailable = true;\n    }\n  }\n\n  /** Distribute multiple tasks across the agent pool. */\n  async distribute(tasks: AgentTask[]): Promise<TaskAssignment[]> {\n    const results: TaskAssignment[] = [];\n    for (const task of tasks) {\n      results.push(await this.assignTask(task));\n    }\n    return results;\n  }\n\n  /** Get agent utilization stats. */\n  utilization(): { totalAgents: number; busyAgents: number; totalAssignments: number } {\n    return {\n      totalAgents: this.agents.size,\n      busyAgents: [...this.agents.values()].filter((a) => !a.isAvailable).length,\n      totalAssignments: this.assignments.length,\n    };\n  }\n}\n\n// ── Consensus Voter ────────────────────────────────────────────\ninterface Vote {\n  agentId: string;\n  choice: string;\n  confidence: number; // 0-1\n  rationale: string;\n}\n\ninterface ConsensusResult {\n  winner: string | null;\n  voteDistribution: Record<string, number>;\n  confidenceScore: number;\n  majorityReached: boolean;\n  tieBroken: boolean;\n}\n\nclass ConsensusVoter {\n  private votes: Vote[] = [];\n\n  cast(vote: Vote): void {\n    this.votes.push(vote);\n  }\n\n  reset(): void {\n    this.votes = [];\n  }\n\n  /** Calculate the consensus winner. */\n  tally(threshold: number = 0.5): ConsensusResult {\n    if (this.votes.length === 0) {\n      return { winner: null, voteDistribution: {}, confidenceScore: 0, majorityReached: false, tieBroken: false };\n    }\n\n    // Count weighted votes (by confidence)\n    const distribution: Record<string, number> = {};\n    let totalWeight = 0;\n    for (const v of this.votes) {\n      distribution[v.choice] = (distribution[v.choice] ?? 0) + v.confidence;\n      totalWeight += v.confidence;\n    }\n\n    // Find top two choices\n    const sorted = Object.entries(distribution).sort((a, b) => b[1] - a[1]);\n    const winner = sorted[0][0];\n    const winnerWeight = sorted[0][1];\n    const runnerUpWeight = sorted[1]?.[1] ?? 0;\n\n    const majorityReached = winnerWeight / totalWeight >= threshold;\n    const tieBroken = Math.abs(winnerWeight - runnerUpWeight) < 0.01;\n\n    return {\n      winner: majorityReached ? winner : null,\n      voteDistribution: distribution,\n      confidenceScore: totalWeight > 0 ? winnerWeight / totalWeight : 0,\n      majorityReached,\n      tieBroken,\n    };\n  }\n\n  /** Weighted consensus where each agent has a vote weight. */\n  tallyWeighted(weights: Map<string, number>, threshold: number = 0.5): ConsensusResult {\n    if (this.votes.length === 0) {\n      return { winner: null, voteDistribution: {}, confidenceScore: 0, majorityReached: false, tieBroken: false };\n    }\n\n    const distribution: Record<string, number> = {};\n    let totalWeight = 0;\n    for (const v of this.votes) {\n      const w = (weights.get(v.agentId) ?? 1) * v.confidence;\n      distribution[v.choice] = (distribution[v.choice] ?? 0) + w;\n      totalWeight += w;\n    }\n\n    const sorted = Object.entries(distribution).sort((a, b) => b[1] - a[1]);\n    const winner = sorted[0][0];\n    const winnerWeight = sorted[0][1];\n\n    return {\n      winner: winnerWeight / totalWeight >= threshold ? winner : null,\n      voteDistribution: distribution,\n      confidenceScore: totalWeight > 0 ? winnerWeight / totalWeight : 0,\n      majorityReached: winnerWeight / totalWeight >= threshold,\n      tieBroken: sorted.length > 1 && Math.abs(sorted[0][1] - sorted[1][1]) < 0.01,\n    };\n  }\n}\n\n// ── Debate Engine ──────────────────────────────────────────────\ntype ArgumentFn = (topic: string, opposingPoints: string[]) => Promise<string>;\ntype JudgeFn = (arguments_: string[], topic: string) => Promise<{ winner: number; scores: number[]; rationale: string }>;\n\ninterface DebateRound {\n  roundNumber: number;\n  arguments: string[];\n  judgeScores?: number[];\n}\n\nclass DebateEngine {\n  private rounds: DebateRound[] = [];\n  private readonly maxRounds: number;\n\n  constructor(\n    private proposer: ArgumentFn,\n    private opponent: ArgumentFn,\n    private judge: JudgeFn,\n    maxRounds: number = 3,\n  ) {\n    this.maxRounds = maxRounds;\n  }\n\n  get roundHistory(): DebateRound[] {\n    return [...this.rounds];\n  }\n\n  /** Run a full debate with multiple rounds. */\n  async debate(topic: string): Promise<{\n    winner: number;\n    finalScore: number;\n    rounds: DebateRound[];\n    judgeRationale: string;\n  }> {\n    let proposerPoints: string[] = [];\n    let opponentPoints: string[] = [];\n\n    for (let round = 0; round < this.maxRounds; round++) {\n      // Proposer argues\n      const propArg = await this.proposer(topic, opponentPoints);\n      proposerPoints.push(propArg);\n\n      // Opponent argues\n      const oppArg = await this.opponent(topic, proposerPoints);\n      opponentPoints.push(oppArg);\n\n      const roundArgs = [propArg, oppArg];\n      const judgeResult = await this.judge(roundArgs, topic);\n\n      this.rounds.push({\n        roundNumber: round + 1,\n        arguments: roundArgs,\n        judgeScores: judgeResult.scores,\n      });\n    }\n\n    // Final judgment across all rounds\n    const allArgs = this.rounds.flatMap((r) => r.arguments);\n    const finalJudgment = await this.judge(allArgs, topic);\n\n    return {\n      winner: finalJudgment.winner,\n      finalScore: finalJudgment.scores[finalJudgment.winner] ?? 0,\n      rounds: this.rounds,\n      judgeRationale: finalJudgment.rationale,\n    };\n  }\n}\n\n// ── Supervisor Worker Pool ─────────────────────────────────────\ninterface WorkerPoolConfig {\n  minWorkers: number;\n  maxWorkers: number;\n  workerTimeoutMs: number;\n  healthCheckIntervalMs: number;\n}\n\ntype WorkerFn = (task: string) => Promise<string>;\n\ninterface PoolWorker {\n  id: string;\n  fn: WorkerFn;\n  busy: boolean;\n  lastHealthCheck: number;\n  healthy: boolean;\n  tasksCompleted: number;\n}\n\nclass SupervisorWorkerPool {\n  private workers: Map<string, PoolWorker> = new Map();\n  private taskQueue: Array<{ id: string; task: string; resolve: (v: string) => void; reject: (e: Error) => void }> = [];\n  private healthTimer: ReturnType<typeof setInterval> | null = null;\n\n  constructor(\n    private config: WorkerPoolConfig,\n    private workerFactory: () => WorkerFn,\n  ) {\n    this.initialize();\n  }\n\n  private initialize(): void {\n    for (let i = 0; i < this.config.minWorkers; i++) {\n      this.addWorker();\n    }\n    this.healthTimer = setInterval(() => this.healthCheck(), this.config.healthCheckIntervalMs);\n  }\n\n  private addWorker(): PoolWorker {\n    const worker: PoolWorker = {\n      id: randomUUID().slice(0, 8),\n      fn: this.workerFactory(),\n      busy: false,\n      lastHealthCheck: Date.now(),\n      healthy: true,\n      tasksCompleted: 0,\n    };\n    this.workers.set(worker.id, worker);\n    return worker;\n  }\n\n  private healthCheck(): void {\n    for (const [id, worker] of this.workers) {\n      const elapsed = Date.now() - worker.lastHealthCheck;\n      if (elapsed > this.config.healthCheckIntervalMs * 3) {\n        worker.healthy = false;\n        this.workers.delete(id);\n        // Replace unhealthy worker\n        if (this.workers.size < this.config.maxWorkers) {\n          this.addWorker();\n        }\n      }\n    }\n    // Process queued tasks\n    this.dispatchQueue();\n  }\n\n  private get availableWorker(): PoolWorker | null {\n    return [...this.workers.values()].find((w) => !w.busy && w.healthy) ?? null;\n  }\n\n  private async dispatchQueue(): Promise<void> {\n    while (this.taskQueue.length > 0 && this.availableWorker) {\n      const task = this.taskQueue.shift()!;\n      const worker = this.availableWorker!;\n      this.executeTask(worker, task).catch(task.reject);\n    }\n  }\n\n  private async executeTask(\n    worker: PoolWorker,\n    task: { id: string; task: string; resolve: (v: string) => void; reject: (e: Error) => void },\n  ): Promise<void> {\n    worker.busy = true;\n    try {\n      const result = await Promise.race([\n        worker.fn(task.task),\n        new Promise<string>((_, reject) =>\n          setTimeout(() => reject(new Error(\"Worker timeout\")), this.config.workerTimeoutMs),\n        ),\n      ]);\n      worker.tasksCompleted++;\n      task.resolve(result);\n    } catch (err) {\n      worker.healthy = false;\n      this.workers.delete(worker.id);\n      if (this.workers.size < this.config.maxWorkers) {\n        this.addWorker();\n      }\n      task.reject(err as Error);\n    } finally {\n      worker.busy = false;\n      worker.lastHealthCheck = Date.now();\n    }\n  }\n\n  /** Submit a task to the pool. */\n  async submit(task: string): Promise<string> {\n    return new Promise((resolve, reject) => {\n      this.taskQueue.push({ id: randomUUID(), task, resolve, reject });\n      this.dispatchQueue();\n    });\n  }\n\n  /** Submit multiple tasks and aggregate results. */\n  async batchSubmit(tasks: string[]): Promise<Array<{ task: string; result?: string; error?: string }>> {\n    const results = await Promise.allSettled(tasks.map((t) => this.submit(t)));\n    return tasks.map((task, i) => {\n      const r = results[i];\n      return { task, result: r.status === \"fulfilled\" ? r.value : undefined, error: r.status === \"rejected\" ? (r.reason as Error).message : undefined };\n    });\n  }\n\n  get stats(): { totalWorkers: number; busyWorkers: number; queuedTasks: number; tasksCompleted: number } {\n    const w = [...this.workers.values()];\n    return {\n      totalWorkers: w.length,\n      busyWorkers: w.filter((w) => w.busy).length,\n      queuedTasks: this.taskQueue.length,\n      tasksCompleted: w.reduce((s, w) => s + w.tasksCompleted, 0),\n    };\n  }\n\n  shutdown(): void {\n    if (this.healthTimer) clearInterval(this.healthTimer);\n    this.workers.clear();\n    this.taskQueue = [];\n  }\n}\n\n// ── Agent Communication Bus (Pub/Sub) ──────────────────────────\ninterface Message {\n  id: string;\n  topic: string;\n  sender: string;\n  payload: unknown;\n  timestamp: number;\n  ttlMs: number;\n}\n\ntype MessageHandler = (message: Message) => Promise<void>;\n\ninterface Subscription {\n  id: string;\n  topic: string;\n  handler: MessageHandler;\n  filter?: (message: Message) => boolean;\n}\n\nclass AgentCommunicationBus {\n  private subscriptions: Map<string, Subscription[]> = new Map();\n  private messageHistory: Message[] = [];\n  private readonly maxHistory: number;\n\n  constructor(maxHistory: number = 1000) {\n    this.maxHistory = maxHistory;\n  }\n\n  /** Subscribe to a topic. */\n  subscribe(topic: string, handler: MessageHandler, filter?: (message: Message) => boolean): string {\n    const id = randomUUID();\n    const subscription: Subscription = { id, topic, handler, filter };\n    const existing = this.subscriptions.get(topic) ?? [];\n    existing.push(subscription);\n    this.subscriptions.set(topic, existing);\n    return id;\n  }\n\n  /** Unsubscribe by subscription ID. */\n  unsubscribe(subscriptionId: string): boolean {\n    for (const [topic, subs] of this.subscriptions) {\n      const filtered = subs.filter((s) => s.id !== subscriptionId);\n      if (filtered.length !== subs.length) {\n        if (filtered.length === 0) {\n          this.subscriptions.delete(topic);\n        } else {\n          this.subscriptions.set(topic, filtered);\n        }\n        return true;\n      }\n    }\n    return false;\n  }\n\n  /** Publish a message to a topic. */\n  async publish(topic: string, sender: string, payload: unknown, ttlMs: number = 30000): Promise<void> {\n    const message: Message = {\n      id: randomUUID(),\n      topic,\n      sender,\n      payload,\n      timestamp: Date.now(),\n      ttlMs,\n    };\n    this.messageHistory.push(message);\n    if (this.messageHistory.length > this.maxHistory) {\n      this.messageHistory = this.messageHistory.slice(-this.maxHistory);\n    }\n\n    const subs = this.subscriptions.get(topic) ?? [];\n    const wildcardSubs = this.subscriptions.get(\"*\") ?? [];\n\n    const deliveries = [...subs, ...wildcardSubs]\n      .filter((s) => !s.filter || s.filter(message));\n\n    await Promise.allSettled(deliveries.map((s) => s.handler(message)));\n  }\n\n  /** Get recent messages on a topic. */\n  getMessages(topic: string, sinceMs?: number): Message[] {\n    return this.messageHistory.filter((m) => {\n      if (m.topic !== topic) return false;\n      if (sinceMs && m.timestamp < sinceMs) return false;\n      return Date.now() - m.timestamp < m.ttlMs;\n    });\n  }\n\n  /** Get all active subscriptions. */\n  activeSubscriptions(): number {\n    let count = 0;\n    for (const subs of this.subscriptions.values()) {\n      count += subs.length;\n    }\n    return count;\n  }\n\n  /** Clear all expired messages. */\n  pruneExpired(): number {\n    const before = this.messageHistory.length;\n    this.messageHistory = this.messageHistory.filter((m) => Date.now() - m.timestamp < m.ttlMs);\n    return before - this.messageHistory.length;\n  }\n}\n\n// ── Usage ──────────────────────────────────────────────────────\nasync function main() {\n  // AgentOrchestrator demo\n  const orchestrator = new AgentOrchestrator();\n  orchestrator.registerAgent({ id: \"agent_1\", name: \"Coder\", capabilities: [\"code\", \"analysis\"], load: 0, isAvailable: true });\n  orchestrator.registerAgent({ id: \"agent_2\", name: \"Reviewer\", capabilities: [\"review\", \"security\"], load: 0, isAvailable: true });\n  const tasks: AgentTask[] = [\n    { id: \"t1\", description: \"Write validator\", requiredCapabilities: [\"code\"], priority: 1, maxDurationMs: 5000, payload: {} },\n    { id: \"t2\", description: \"Security audit\", requiredCapabilities: [\"security\"], priority: 2, maxDurationMs: 5000, payload: {} },\n  ];\n  const assignments = await orchestrator.distribute(tasks);\n  console.log(\"Orchestrator assignments:\", assignments.map((a) => `${a.taskId} -> ${a.agentId}`));\n\n  // ConsensusVoter demo\n  const voter = new ConsensusVoter();\n  voter.cast({ agentId: \"a1\", choice: \"approve\", confidence: 0.9, rationale: \"Good design\" });\n  voter.cast({ agentId: \"a2\", choice: \"approve\", confidence: 0.7, rationale: \"Meets requirements\" });\n  voter.cast({ agentId: \"a3\", choice: \"reject\", confidence: 0.4, rationale: \"Security concerns\" });\n  const consensus = voter.tally(0.5);\n  console.log(\"Consensus winner:\", consensus.winner, \"confidence:\", consensus.confidenceScore.toFixed(2));\n\n  // Weighted consensus\n  const weights = new Map([[\"a1\", 3], [\"a2\", 1], [\"a3\", 2]]);\n  const weighted = voter.tallyWeighted(weights);\n  console.log(\"Weighted consensus winner:\", weighted.winner);\n\n  // DebateEngine demo\n  const debate = new DebateEngine(\n    async (topic, _opposing) => `Proposal for ${topic}: implement with layered architecture`,\n    async (topic, _proposal) => `Counterpoint for ${topic}: layered adds unnecessary complexity`,\n    async (args, _topic) => ({ winner: 0, scores: [0.8, 0.6], rationale: \"Proposer had stronger arguments\" }),\n  );\n  const debateResult = await debate.debate(\"Should we use microservices?\");\n  console.log(\"Debate winner:\", debateResult.winner, \"score:\", debateResult.finalScore);\n\n  // SupervisorWorkerPool demo\n  const pool = new SupervisorWorkerPool(\n    { minWorkers: 2, maxWorkers: 5, workerTimeoutMs: 1000, healthCheckIntervalMs: 5000 },\n    () => async (task) => `Processed: ${task}`,\n  );\n  const poolResults = await pool.batchSubmit([\"task1\", \"task2\", \"task3\"]);\n  console.log(\"Pool results:\", poolResults.map((r) => r.result));\n  console.log(\"Pool stats:\", pool.stats);\n  pool.shutdown();\n\n  // AgentCommunicationBus demo\n  const bus = new AgentCommunicationBus();\n  bus.subscribe(\"task:complete\", async (msg) => {\n    console.log(`Bus received: ${msg.sender} completed task`);\n  });\n  await bus.publish(\"task:complete\", \"agent_1\", { taskId: \"t1\", result: \"done\" });\n  console.log(\"Bus subscriptions:\", bus.activeSubscriptions());\n  console.log(\"Bus messages in topic:\", bus.getMessages(\"task:complete\").length);\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-supervisor-worker-architecture-with-health-checks",
      children: "Mermaid: Supervisor-Worker Architecture with Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Supervisor[\"Supervisor Node\"]\n        A[Task Queue] --> B[Task Decomposition Engine]\n        B --> C[Dynamic Agent Spawner]\n        C --> D[Worker Pool]\n    end\n\n    subgraph Workers[\"Worker Pool\"]\n        E[Worker Alpha] --> F[Capability: research]\n        G[Worker Beta] --> H[Capability: code]\n        I[Worker Gamma] --> J[Capability: review]\n        K[Worker Delta] --> L[Capability: test]\n    end\n\n    subgraph Observability[\"Observability\"]\n        M[Agent Capability Registry]\n        N[Agent Log Collector]\n        O[Voting Aggregator]\n        P[Health Monitor]\n    end\n\n    Supervisor --> Workers\n    Workers --> Observability\n    P -.->|health status| Supervisor\n    O -->|consensus| Supervisor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-capability-registry-task-decomposition-voting-aggregator-log-collector-and-dynamic-spawner",
      children: "Extended Implementation: Capability Registry, Task Decomposition, Voting Aggregator, Log Collector, and Dynamic Spawner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/// <reference types=\"node\" />\n\nimport { randomUUID } from \"node:crypto\";\n\n// ── AgentCapabilityRegistry ─────────────────────────────────────\ninterface AgentCapability {\n  agentId: string;\n  agentName: string;\n  capabilities: string[];\n  maxLoad: number;\n  currentLoad: number;\n  avgLatencyMs: number;\n  successRate: number;\n  lastHeartbeat: number;\n}\n\ninterface CapabilityQuery {\n  requiredCapabilities: string[];\n  maxLoad?: number;\n  minSuccessRate?: number;\n}\n\nclass AgentCapabilityRegistry {\n  private agents: Map<string, AgentCapability> = new Map();\n  private capabilityIndex: Map<string, Set<string>> = new Map(); // capability -> agentIds\n\n  register(agent: AgentCapability): void {\n    this.agents.set(agent.agentId, agent);\n    for (const cap of agent.capabilities) {\n      const existing = this.capabilityIndex.get(cap) ?? new Set();\n      existing.add(agent.agentId);\n      this.capabilityIndex.set(cap, existing);\n    }\n  }\n\n  unregister(agentId: string): boolean {\n    const agent = this.agents.get(agentId);\n    if (!agent) return false;\n    for (const cap of agent.capabilities) {\n      this.capabilityIndex.get(cap)?.delete(agentId);\n    }\n    return this.agents.delete(agentId);\n  }\n\n  /** Find agents matching a capability query. */\n  query(query: CapabilityQuery): AgentCapability[] {\n    const candidates = [...this.agents.values()].filter((agent) => {\n      const hasAllCaps = query.requiredCapabilities.every(\n        (cap) => agent.capabilities.includes(cap),\n      );\n      if (!hasAllCaps) return false;\n      if (query.maxLoad !== undefined && agent.currentLoad >= query.maxLoad) return false;\n      if (query.minSuccessRate !== undefined && agent.successRate < query.minSuccessRate) return false;\n      return true;\n    });\n    return candidates.sort((a, b) => a.currentLoad - b.currentLoad);\n  }\n\n  /** Find agents that have all of the required capabilities. */\n  findByCapabilities(capabilities: string[]): AgentCapability[] {\n    return this.query({ requiredCapabilities: capabilities });\n  }\n\n  /** Update agent heartbeat and load. */\n  heartbeat(agentId: string, load: number, latencyMs: number, success: boolean): boolean {\n    const agent = this.agents.get(agentId);\n    if (!agent) return false;\n    agent.currentLoad = load;\n    agent.avgLatencyMs = (agent.avgLatencyMs + latencyMs) / 2;\n    agent.lastHeartbeat = Date.now();\n    agent.successRate = success\n      ? Math.min(1, agent.successRate + 0.01)\n      : Math.max(0, agent.successRate - 0.05);\n    return true;\n  }\n\n  /** Get agents that haven't sent a heartbeat recently. */\n  getStaleAgents(timeoutMs: number = 30000): AgentCapability[] {\n    const now = Date.now();\n    return [...this.agents.values()].filter((a) => now - a.lastHeartbeat > timeoutMs);\n  }\n\n  /** Get all registered capabilities across all agents. */\n  getCapabilityCatalog(): string[] {\n    return [...this.capabilityIndex.keys()].sort();\n  }\n\n  /** Report overall registry health. */\n  report(): {\n    totalAgents: number;\n    totalCapabilities: number;\n    avgSuccessRate: number;\n    avgLoad: number;\n    staleAgents: number;\n  } {\n    const all = [...this.agents.values()];\n    return {\n      totalAgents: all.length,\n      totalCapabilities: this.capabilityIndex.size,\n      avgSuccessRate: all.length > 0\n        ? all.reduce((s, a) => s + a.successRate, 0) / all.length\n        : 0,\n      avgLoad: all.length > 0\n        ? all.reduce((s, a) => s + a.currentLoad, 0) / all.length\n        : 0,\n      staleAgents: this.getStaleAgents().length,\n    };\n  }\n}\n\n// ── TaskDecompositionEngine ─────────────────────────────────────\ninterface DecomposedTask {\n  id: string;\n  parentId: string | null;\n  description: string;\n  requiredCapabilities: string[];\n  priority: number;\n  dependencies: string[]; // task IDs that must complete first\n  estimatedComplexity: number;\n}\n\ninterface DecompositionStrategy {\n  maxDepth: number;\n  maxSubtasks: number;\n  granularity: \"coarse\" | \"medium\" | \"fine\";\n}\n\nclass TaskDecompositionEngine {\n  private decompositions: Map<string, DecomposedTask[]> = new Map();\n\n  constructor(private strategy: DecompositionStrategy) {}\n\n  /** Decompose a high-level task into subtasks. */\n  decompose(\n    parentId: string,\n    description: string,\n    capabilities: string[],\n    depth: number = 0,\n  ): DecomposedTask[] {\n    if (depth >= this.strategy.maxDepth) {\n      const leaf: DecomposedTask = {\n        id: randomUUID().slice(0, 8),\n        parentId,\n        description,\n        requiredCapabilities: capabilities,\n        priority: 5,\n        dependencies: [],\n        estimatedComplexity: 1,\n      };\n      this.decompositions.set(parentId, [leaf]);\n      return [leaf];\n    }\n\n    const subtasks = this.splitTask(description, capabilities, depth);\n    this.decompositions.set(parentId, subtasks);\n    return subtasks;\n  }\n\n  /** Split a task into smaller pieces based on granularity. */\n  private splitTask(\n    description: string,\n    capabilities: string[],\n    depth: number,\n  ): DecomposedTask[] {\n    const numSubtasks = Math.max(1, Math.min(\n      this.strategy.maxSubtasks,\n      this.strategy.granularity === \"fine\" ? 6 :\n      this.strategy.granularity === \"medium\" ? 4 : 2,\n    ));\n\n    const subtasks: DecomposedTask[] = [];\n    const words = description.split(\" \");\n    const chunkSize = Math.max(1, Math.ceil(words.length / numSubtasks));\n\n    for (let i = 0; i < numSubtasks; i++) {\n      const start = i * chunkSize;\n      const end = Math.min(start + chunkSize, words.length);\n      const chunk = words.slice(start, end).join(\" \");\n\n      subtasks.push({\n        id: randomUUID().slice(0, 8),\n        parentId: description,\n        description: chunk,\n        requiredCapabilities: capabilities,\n        priority: 5 - Math.min(4, depth),\n        dependencies: i > 0 ? [subtasks[i - 1].id] : [],\n        estimatedComplexity: chunk.length / description.length,\n      });\n    }\n\n    return subtasks;\n  }\n\n  /** Build a dependency-ordered execution plan. */\n  buildExecutionPlan(taskId: string): DecomposedTask[] {\n    const tasks = this.decompositions.get(taskId);\n    if (!tasks) return [];\n\n    // Topological sort by dependencies\n    const sorted: DecomposedTask[] = [];\n    const visited = new Set<string>();\n\n    const visit = (task: DecomposedTask) => {\n      if (visited.has(task.id)) return;\n      visited.add(task.id);\n      for (const depId of task.dependencies) {\n        const dep = tasks.find((t) => t.id === depId);\n        if (dep) visit(dep);\n      }\n      sorted.push(task);\n    };\n\n    for (const task of tasks) {\n      visit(task);\n    }\n\n    return sorted;\n  }\n\n  /** Get decomposition statistics. */\n  stats(taskId: string): { totalSubtasks: number; depth: number; parallelGroups: number } | null {\n    const tasks = this.decompositions.get(taskId);\n    if (!tasks) return null;\n    const maxDepth = new Set(tasks.map((t) => t.parentId)).size;\n    const rootCount = tasks.filter((t) => t.dependencies.length === 0).length;\n    return {\n      totalSubtasks: tasks.length,\n      depth: maxDepth,\n      parallelGroups: rootCount,\n    };\n  }\n}\n\n// ── VotingAggregator ────────────────────────────────────────────\ntype VotingStrategy = \"majority\" | \"weighted\" | \"ranked_choice\" | \"borda_count\";\n\ninterface VoterInput {\n  agentId: string;\n  vote: string;\n  weight: number;\n  rankings?: string[]; // for ranked-choice: ordered list of preferences\n}\n\ninterface VotingResult {\n  winner: string | null;\n  voteDistribution: Record<string, number>;\n  totalVotes: number;\n  strategy: VotingStrategy;\n  rounds?: number;\n}\n\nclass VotingAggregator {\n  constructor(private defaultStrategy: VotingStrategy = \"majority\") {}\n\n  /** Count votes using the specified strategy. */\n  tally(votes: VoterInput[], strategy?: VotingStrategy): VotingResult {\n    const s = strategy ?? this.defaultStrategy;\n\n    switch (s) {\n      case \"majority\":\n        return this.majorityTally(votes);\n      case \"weighted\":\n        return this.weightedTally(votes);\n      case \"ranked_choice\":\n        return this.rankedChoiceTally(votes);\n      case \"borda_count\":\n        return this.bordaCountTally(votes);\n    }\n  }\n\n  /** Simple majority: most votes wins. */\n  private majorityTally(votes: VoterInput[]): VotingResult {\n    const counts: Record<string, number> = {};\n    for (const v of votes) {\n      counts[v.vote] = (counts[v.vote] ?? 0) + 1;\n    }\n    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);\n    const totalVotes = votes.length;\n    return {\n      winner: sorted.length > 0 ? sorted[0][0] : null,\n      voteDistribution: counts,\n      totalVotes,\n      strategy: \"majority\",\n    };\n  }\n\n  /** Weighted voting: each vote counts according to the voter's weight. */\n  private weightedTally(votes: VoterInput[]): VotingResult {\n    const counts: Record<string, number> = {};\n    for (const v of votes) {\n      counts[v.vote] = (counts[v.vote] ?? 0) + v.weight;\n    }\n    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);\n    const totalWeight = votes.reduce((s, v) => s + v.weight, 0);\n    return {\n      winner: sorted.length > 0 ? sorted[0][0] : null,\n      voteDistribution: counts,\n      totalVotes: totalWeight,\n      strategy: \"weighted\",\n    };\n  }\n\n  /** Ranked-choice voting: eliminate lowest until majority. */\n  private rankedChoiceTally(votes: VoterInput[]): VotingResult {\n    const activeCandidates = new Set<string>();\n    for (const v of votes) {\n      if (v.rankings) {\n        for (const r of v.rankings) activeCandidates.add(r);\n      } else {\n        activeCandidates.add(v.vote);\n      }\n    }\n\n    let round = 0;\n    while (activeCandidates.size > 1) {\n      round++;\n      const counts: Record<string, number> = {};\n      for (const v of votes) {\n        const currentVote = this.currentRankedVote(v, [...activeCandidates]);\n        if (currentVote) {\n          counts[currentVote] = (counts[currentVote] ?? 0) + 1;\n        }\n      }\n\n      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);\n      if (sorted.length === 0) break;\n\n      // Check if any candidate has majority\n      const totalVotes = votes.length;\n      if (sorted[0][1] > totalVotes / 2) {\n        return {\n          winner: sorted[0][0],\n          voteDistribution: counts,\n          totalVotes,\n          strategy: \"ranked_choice\",\n          rounds: round,\n        };\n      }\n\n      // Eliminate lowest\n      const eliminated = sorted[sorted.length - 1][0];\n      activeCandidates.delete(eliminated);\n    }\n\n    const remaining = [...activeCandidates];\n    return {\n      winner: remaining[0] ?? null,\n      voteDistribution: {},\n      totalVotes: votes.length,\n      strategy: \"ranked_choice\",\n      rounds: round,\n    };\n  }\n\n  /** Get the highest-ranked still-active candidate. */\n  private currentRankedVote(voter: VoterInput, activeCandidates: string[]): string | null {\n    if (voter.rankings) {\n      for (const r of voter.rankings) {\n        if (activeCandidates.includes(r)) return r;\n      }\n    }\n    return activeCandidates.includes(voter.vote) ? voter.vote : null;\n  }\n\n  /** Borda count: points assigned by rank position. */\n  private bordaCountTally(votes: VoterInput[]): VotingResult {\n    const points: Record<string, number> = {};\n\n    for (const v of votes) {\n      const rankings = v.rankings ?? [v.vote];\n      const numOptions = rankings.length;\n      for (let i = 0; i < rankings.length; i++) {\n        // Points: (numOptions - i - 1) per voter\n        points[rankings[i]] = (points[rankings[i]] ?? 0) + (numOptions - i);\n      }\n    }\n\n    const sorted = Object.entries(points).sort((a, b) => b[1] - a[1]);\n    return {\n      winner: sorted.length > 0 ? sorted[0][0] : null,\n      voteDistribution: points,\n      totalVotes: votes.length,\n      strategy: \"borda_count\",\n    };\n  }\n}\n\n// ── AgentLogCollector ───────────────────────────────────────────\ninterface LogEntry {\n  id: string;\n  correlationId: string;\n  agentId: string;\n  level: \"debug\" | \"info\" | \"warn\" | \"error\";\n  message: string;\n  timestamp: number;\n  metadata: Record<string, unknown>;\n}\n\ninterface LogQuery {\n  correlationId?: string;\n  agentId?: string;\n  level?: string;\n  since?: number;\n  until?: number;\n  limit?: number;\n}\n\nclass AgentLogCollector {\n  private logs: LogEntry[] = [];\n  private maxEntries: number;\n\n  constructor(maxEntries: number = 100000) {\n    this.maxEntries = maxEntries;\n  }\n\n  /** Write a log entry. */\n  log(\n    correlationId: string,\n    agentId: string,\n    level: LogEntry[\"level\"],\n    message: string,\n    metadata: Record<string, unknown> = {},\n  ): LogEntry {\n    const entry: LogEntry = {\n      id: randomUUID().slice(0, 12),\n      correlationId,\n      agentId,\n      level,\n      message,\n      timestamp: Date.now(),\n      metadata,\n    };\n    this.logs.push(entry);\n    if (this.logs.length > this.maxEntries) {\n      this.logs = this.logs.slice(-this.maxEntries);\n    }\n    return entry;\n  }\n\n  /** Convenience methods. */\n  info(correlationId: string, agentId: string, message: string, meta?: Record<string, unknown>): LogEntry {\n    return this.log(correlationId, agentId, \"info\", message, meta);\n  }\n\n  warn(correlationId: string, agentId: string, message: string, meta?: Record<string, unknown>): LogEntry {\n    return this.log(correlationId, agentId, \"warn\", message, meta);\n  }\n\n  error(correlationId: string, agentId: string, message: string, meta?: Record<string, unknown>): LogEntry {\n    return this.log(correlationId, agentId, \"error\", message, meta);\n  }\n\n  debug(correlationId: string, agentId: string, message: string, meta?: Record<string, unknown>): LogEntry {\n    return this.log(correlationId, agentId, \"debug\", message, meta);\n  }\n\n  /** Query logs with filters. */\n  query(query: LogQuery): LogEntry[] {\n    return this.logs.filter((entry) => {\n      if (query.correlationId && entry.correlationId !== query.correlationId) return false;\n      if (query.agentId && entry.agentId !== query.agentId) return false;\n      if (query.level && entry.level !== query.level) return false;\n      if (query.since && entry.timestamp < query.since) return false;\n      if (query.until && entry.timestamp > query.until) return false;\n      return true;\n    }).slice(0, query.limit ?? 1000);\n  }\n\n  /** Build a trace for a specific correlation ID. */\n  buildTrace(correlationId: string): {\n    entries: LogEntry[];\n    duration: number;\n    errorCount: number;\n    agentSequence: string[];\n  } {\n    const entries = this.query({ correlationId });\n    const errorCount = entries.filter((e) => e.level === \"error\").length;\n    const agentSequence = [...new Set(entries.map((e) => e.agentId))];\n    const duration = entries.length > 1\n      ? entries[entries.length - 1].timestamp - entries[0].timestamp\n      : 0;\n    return { entries, duration, errorCount, agentSequence };\n  }\n\n  /** Get aggregate stats. */\n  stats(): { totalEntries: number; errorCount: number; uniqueAgents: number; uniqueCorrelations: number } {\n    const errorCount = this.logs.filter((e) => e.level === \"error\").length;\n    const uniqueAgents = new Set(this.logs.map((e) => e.agentId)).size;\n    const uniqueCorrelations = new Set(this.logs.map((e) => e.correlationId)).size;\n    return { totalEntries: this.logs.length, errorCount, uniqueAgents, uniqueCorrelations };\n  }\n\n  reset(): void {\n    this.logs = [];\n  }\n}\n\n// ── DynamicAgentSpawner ─────────────────────────────────────────\ninterface SpawnerConfig {\n  minAgents: number;\n  maxAgents: number;\n  scaleUpThreshold: number;  // queue depth per agent to trigger scale-up\n  scaleDownThreshold: number; // queue depth per agent to trigger scale-down\n  cooldownMs: number;\n  agentFactory: (id: string) => Promise<{ id: string; capabilities: string[] }>;\n}\n\ninterface SpawnerState {\n  activeAgents: number;\n  queueDepth: number;\n  desiredAgents: number;\n  lastScaleEvent: number;\n  totalSpawned: number;\n  totalDestroyed: number;\n}\n\nclass DynamicAgentSpawner {\n  private agents: Map<string, { id: string; capabilities: string[]; busy: boolean }> = new Map();\n  private queue: string[] = [];\n  private state: SpawnerState;\n  private scaleTimer: ReturnType<typeof setInterval> | null = null;\n\n  constructor(private config: SpawnerConfig) {\n    this.state = {\n      activeAgents: 0,\n      queueDepth: 0,\n      desiredAgents: config.minAgents,\n      lastScaleEvent: Date.now(),\n      totalSpawned: 0,\n      totalDestroyed: 0,\n    };\n  }\n\n  async initialize(): Promise<void> {\n    for (let i = 0; i < this.config.minAgents; i++) {\n      await this.spawnAgent();\n    }\n    this.scaleTimer = setInterval(() => this.evaluateScaling(), this.config.cooldownMs);\n  }\n\n  get status(): SpawnerState {\n    return { ...this.state, activeAgents: this.agents.size, queueDepth: this.queue.length };\n  }\n\n  /** Submit a task to the queue. */\n  async submit(task: string): Promise<string> {\n    const available = [...this.agents.values()].find((a) => !a.busy);\n    if (available) {\n      available.busy = true;\n      this.state.activeAgents++;\n      return task;\n    }\n    this.queue.push(task);\n    this.state.queueDepth = this.queue.length;\n    return task;\n  }\n\n  /** Mark an agent as available. */\n  complete(agentId: string): void {\n    const agent = this.agents.get(agentId);\n    if (agent) {\n      agent.busy = false;\n      this.state.activeAgents = Math.max(0, this.state.activeAgents - 1);\n    }\n    // Dispatch queued task if available\n    if (this.queue.length > 0) {\n      const nextAvailable = [...this.agents.values()].find((a) => !a.busy);\n      if (nextAvailable) {\n        this.queue.shift();\n        nextAvailable.busy = true;\n        this.state.activeAgents++;\n        this.state.queueDepth = this.queue.length;\n      }\n    }\n  }\n\n  /** Evaluate whether to scale up or down. */\n  private async evaluateScaling(): Promise<void> {\n    const now = Date.now();\n    if (now - this.state.lastScaleEvent < this.config.cooldownMs) return;\n\n    const queuePerAgent = this.queue.length / Math.max(this.agents.size, 1);\n\n    if (queuePerAgent > this.config.scaleUpThreshold && this.agents.size < this.config.maxAgents) {\n      await this.spawnAgent();\n      this.state.lastScaleEvent = now;\n    } else if (\n      queuePerAgent < this.config.scaleDownThreshold &&\n      this.agents.size > this.config.minAgents\n    ) {\n      await this.destroyAgent();\n      this.state.lastScaleEvent = now;\n    }\n\n    this.state.desiredAgents = Math.max(\n      this.config.minAgents,\n      Math.min(this.config.maxAgents, Math.ceil(queuePerAgent * 2)),\n    );\n  }\n\n  private async spawnAgent(): Promise<void> {\n    const id = `agent_${randomUUID().slice(0, 6)}`;\n    const agent = await this.config.agentFactory(id);\n    this.agents.set(agent.id, { ...agent, busy: false });\n    this.state.totalSpawned++;\n  }\n\n  private async destroyAgent(): Promise<void> {\n    // Destroy the least busy agent\n    const sorted = [...this.agents.values()].sort((a, b) =>\n      (a.busy ? 1 : 0) - (b.busy ? 1 : 0),\n    );\n    const target = sorted[0];\n    if (target) {\n      this.agents.delete(target.id);\n      this.state.totalDestroyed++;\n    }\n  }\n\n  shutdown(): void {\n    if (this.scaleTimer) clearInterval(this.scaleTimer);\n    this.agents.clear();\n    this.queue = [];\n  }\n}\n\n// ── Usage ──────────────────────────────────────────────────────\nasync function main() {\n  // AgentCapabilityRegistry demo\n  const registry = new AgentCapabilityRegistry();\n  registry.register({ agentId: \"a1\", agentName: \"Researcher\", capabilities: [\"research\", \"analysis\"], maxLoad: 5, currentLoad: 2, avgLatencyMs: 300, successRate: 0.95, lastHeartbeat: Date.now() });\n  registry.register({ agentId: \"a2\", agentName: \"Coder\", capabilities: [\"code\", \"debug\"], maxLoad: 5, currentLoad: 1, avgLatencyMs: 500, successRate: 0.92, lastHeartbeat: Date.now() });\n  registry.register({ agentId: \"a3\", agentName: \"Reviewer\", capabilities: [\"review\", \"analysis\"], maxLoad: 3, currentLoad: 0, avgLatencyMs: 200, successRate: 0.98, lastHeartbeat: Date.now() });\n  const matches = registry.findByCapabilities([\"code\"]);\n  console.log(`Code-capable agents: ${matches.map((a) => a.agentName).join(\", \")}`);\n  console.log(`Registry catalog: ${registry.getCapabilityCatalog().join(\", \")}`);\n\n  // TaskDecompositionEngine demo\n  const decomposer = new TaskDecompositionEngine({ maxDepth: 3, maxSubtasks: 4, granularity: \"medium\" });\n  const subtasks = decomposer.decompose(\"root\", \"Build a REST API with authentication, rate limiting, and logging\", [\"code\", \"security\"]);\n  const plan = decomposer.buildExecutionPlan(\"root\");\n  console.log(`Decomposed into ${plan.length} subtasks`);\n  const stats = decomposer.stats(\"root\");\n  console.log(`Decomposition stats: ${JSON.stringify(stats)}`);\n\n  // VotingAggregator demo\n  const aggregator = new VotingAggregator(\"majority\");\n  const votes: VoterInput[] = [\n    { agentId: \"v1\", vote: \"option_a\", weight: 1 },\n    { agentId: \"v2\", vote: \"option_a\", weight: 2 },\n    { agentId: \"v3\", vote: \"option_b\", weight: 1 },\n    { agentId: \"v4\", vote: \"option_c\", weight: 3, rankings: [\"option_c\", \"option_a\", \"option_b\"] },\n  ];\n  console.log(\"Majority:\", aggregator.tally(votes, \"majority\").winner);\n  console.log(\"Weighted:\", aggregator.tally(votes, \"weighted\").winner);\n  console.log(\"Ranked-choice:\", aggregator.tally(votes, \"ranked_choice\").winner);\n\n  // AgentLogCollector demo\n  const logger = new AgentLogCollector();\n  const corrId = randomUUID().slice(0, 8);\n  logger.info(corrId, \"agent_1\", \"Task started\", { taskId: \"t1\" });\n  logger.warn(corrId, \"agent_2\", \"Resource high\", { cpu: 0.85 });\n  logger.error(corrId, \"agent_1\", \"Task failed\", { error: \"timeout\" });\n  const trace = logger.buildTrace(corrId);\n  console.log(`Trace: ${trace.entries.length} entries, ${trace.errorCount} errors`);\n\n  // DynamicAgentSpawner demo\n  const spawner = new DynamicAgentSpawner({\n    minAgents: 2, maxAgents: 8, scaleUpThreshold: 3, scaleDownThreshold: 0.5,\n    cooldownMs: 100,\n    agentFactory: async (id) => ({ id, capabilities: [\"task\"] }),\n  });\n  await spawner.initialize();\n  for (let i = 0; i < 10; i++) {\n    await spawner.submit(`task_${i}`);\n  }\n  await new Promise((r) => setTimeout(r, 500));\n  console.log(`Spawner status: ${JSON.stringify(spawner.status)}`);\n  spawner.shutdown();\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-exercises",
      children: "4. Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-review",
      children: "4.1 Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the six steps of the supervisor loop. What happens when a worker fails?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of the judge in a debate loop. What criteria should the judge evaluate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the negotiation set and Pareto frontier in the context of multi-agent negotiation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the minimum number of agents needed to tolerate 2 Byzantine faults? Show the formula."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does stigmergy enable emergent coordination in swarm loops?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-application",
      children: "4.2 Application"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a supervisor loop for a code review system with three workers: a linter agent, a security agent, and a style agent. The supervisor must produce a unified review report. Write the aggregation function that merges findings from all three workers and resolves conflicts when workers disagree."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NegotiationLoop"
          }), " with two agents trading API rate limit allocations. Agent X needs more read quota; Agent Y needs more write quota. The total pool is 1000 requests/minute. Each agent has a reservation price (minimum quota they need to function). Agents exchange proposals and concede over up to 5 rounds. Output the final allocation and which agent conceded more."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConsensusVote"
          }), " example to include a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "WeightedVoter"
          }), " subclass where agents have different voting weight based on expertise. For example, a senior architect's vote counts as 3, while a junior developer's counts as 1. The win threshold must consider weighted votes, not raw counts. Implement weighted quorum calculation and weighted tie-breaking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-challenge",
      children: "4.3 Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a SwarmSearchEngine."
          }), " Design and implement a TypeScript class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SwarmSearchEngine"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintains N explorer agents (configurable, default 5)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each explorer searches a solution space by sampling random points and scoring them"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Explorers share findings through a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "pheromone map"
            }), ": a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<string, { score: number; visitCount: number; lastVisited: number }>"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each explorer biases its next search toward high-pheromone regions (80% probability) but occasionally explores randomly (20% probability — exploration rate)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pheromone evaporates over time: every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evaporateIntervalMs"
            }), ", all pheromone scores decay by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evaporationRate"
            }), " (default 0.1)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When an explorer finds a score higher than the global best, it deposits extra pheromone (positive feedback)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maxIterations"
            }), " total iterations across all explorers, the swarm returns the best solution found"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Test ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SwarmSearchEngine"
          }), " on a simple objective function: given a string, score it by how close it is to the target string ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"production_agent_loop\""
          }), " (Levenshtein distance, inverted). Run with 5 explorers, 50 iterations each, and print the best string found along with its score."]
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