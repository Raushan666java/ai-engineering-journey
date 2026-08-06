"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39531],{

/***/ 64647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_ch_05_self_improvement_loops_md_336_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-ch-05-self-improvement-loops-md-336.json
const site_docs_courses_loop_engineering_ch_05_self_improvement_loops_md_336_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/ch05-self-improvement-loops","title":"Chapter 5: Self-Improvement Loops","description":"Learning Objectives","source":"@site/docs/courses/loop-engineering/ch05-self-improvement-loops.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering/ch05-self-improvement-loops","permalink":"/ai-engineering-journey/loop-engineering/ch05-self-improvement-loops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"ch05-self-improvement-loops","slug":"/loop-engineering/ch05-self-improvement-loops","title":"Chapter 5: Self-Improvement Loops","sidebar_label":"Chapter 5: Self-Improvement Loops","sidebar_position":5},"sidebar":"coursesSidebar","previous":{"title":"Chapter 4: Feedback Loops","permalink":"/ai-engineering-journey/loop-engineering/ch04-feedback-loops"},"next":{"title":"Chapter 6: Production Loops","permalink":"/ai-engineering-journey/loop-engineering/ch06-production-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/ch05-self-improvement-loops.md


const frontMatter = {
	id: 'ch05-self-improvement-loops',
	slug: '/loop-engineering/ch05-self-improvement-loops',
	title: 'Chapter 5: Self-Improvement Loops',
	sidebar_label: 'Chapter 5: Self-Improvement Loops',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Self-Improvement Loops';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "5.1 Constitutional AI",
  "id": "51-constitutional-ai",
  "level": 3
}, {
  "value": "5.2 RLAIF / RLHF",
  "id": "52-rlaif--rlhf",
  "level": 3
}, {
  "value": "5.3 STaR / ReST",
  "id": "53-star--rest",
  "level": 3
}, {
  "value": "5.4 Direct Preference Optimization",
  "id": "54-direct-preference-optimization",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 5.1: ConstitutionalReflectionLoop",
  "id": "example-51-constitutionalreflectionloop",
  "level": 3
}, {
  "value": "Example 5.2: PreferencePairGenerator",
  "id": "example-52-preferencepairgenerator",
  "level": 3
}, {
  "value": "Example 5.3: Improvement Pipeline",
  "id": "example-53-improvement-pipeline",
  "level": 3
}, {
  "value": "TypeScript: Preference Optimization Loop",
  "id": "typescript-preference-optimization-loop",
  "level": 3
}, {
  "value": "Mermaid: DPO vs RLHF",
  "id": "mermaid-dpo-vs-rlhf",
  "level": 3
}, {
  "value": "Extended Implementation: STaR Bootstrapping, DPO, Constitutional Chain, and Self-Play",
  "id": "extended-implementation-star-bootstrapping-dpo-constitutional-chain-and-self-play",
  "level": 3
}, {
  "value": "Mermaid: STaR Bootstrap Cycle",
  "id": "mermaid-star-bootstrap-cycle",
  "level": 3
}, {
  "value": "Extended Implementation: Curriculum Learning, Self-Consistency, Rejection Sampling, Skill Transfer, and Progress Tracking",
  "id": "extended-implementation-curriculum-learning-self-consistency-rejection-sampling-skill-transfer-and-progress-tracking",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-5-self-improvement-loops",
        children: "Chapter 5: Self-Improvement Loops"
      })
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
        href: "../../assets/images/lessons/loop-engineering/ch05-self-improvement-loops/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch05-self-improvement-loops/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/loop-engineering/ch05-self-improvement-loops/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch05-self-improvement-loops/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/loop-engineering/ch05-self-improvement-loops/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/loop-engineering/ch05-self-improvement-loops/visual-explanation.png",
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
        children: "Explain how Constitutional AI uses rules, self-critique, and revision to align agent outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the RLAIF/RLHF pipeline: preference pair generation, reward modeling, and policy update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement self-generated reasoning with STaR/ReST filtration and retraining"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contrast DPO with traditional RLHF and implement direct preference optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a ConstitutionalReflectionLoop that enforces behavioral constraints at runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a PreferencePairGenerator that produces chosen/rejected training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assemble a complete improvement pipeline with generate → critique → revise → compare stages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-constitutional-ai",
      children: "5.1 Constitutional AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constitutional AI (CAI) replaces expensive human feedback with a written constitution: a set of natural-language principles the model uses to critique and revise its own outputs. The core loop has three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 — Guided generation."
      }), " The model produces an initial response to a prompt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 — Self-critique."
      }), " The model evaluates its own output against each constitutional principle. For every principle that the output violates, the model articulates how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 — Revision."
      }), " The model rewrites the output to remove the violation while preserving utility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The process can iterate: a revised response may still violate a subtler principle, triggering another critique-revision pass. In practice two to three passes suffice for most safety domains."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────┐     ┌──────────────┐     ┌──────────────┐\n│   Prompt    │────▶│  Generate    │────▶│  Critique    │\n└──────────────┘     └──────────────┘     └──────┬───────┘\n                          ▲                      │ violates\n                          │   ┌──────────┐       │\n                          └───│  Revise  │◀──────┘\n                              └──────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Critique and revision share the same underlying LLM, making CAI a pure self-supervision loop. The constitution is immutable during inference but can be updated between training cycles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-rlaif--rlhf",
      children: "5.2 RLAIF / RLHF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reinforcement Learning from Human (RLHF) or AI Feedback (RLAIF) follows a three-stage pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preference pair generation."
          }), " For a set of prompts, sample two or more responses from the model. A judge (human for RLHF, LLM for RLAIF) labels which response is preferred. The result is a dataset of (chosen, rejected) pairs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reward model training."
          }), " Train a separate reward model (often parameterized as a classifier) on the preference pairs using a Bradley-Terry or Plackett-Luce loss. The reward model learns to score any response with a scalar that correlates with human preference."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy optimization."
          }), " Use Proximal Policy Optimization (PPO) or REINFORCE to update the language model, maximizing expected reward while constraining KL divergence from the original model to prevent reward hacking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐\n│ Prompts  │──▶│  Generate    │──▶│  Judge       │──▶│(chosen,      │\n│          │   │  Responses   │   │  (Human/AI)  │   │  rejected)   │\n└──────────┘   └──────────────┘   └──────────────┘   └──────┬───────┘\n                                                             │\n                                                    ┌────────▼───────┐\n                                                    │ Reward Model   │\n                                                    │ Training       │\n                                                    └────────┬───────┘\n                                                             │\n                                                    ┌────────▼───────┐\n                                                    │ Policy Update  │\n                                                    │ (PPO / REINFORCE)\n                                                    └────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RLAIF scales preference labeling to arbitrary volumes since the judge is an LLM rather than a human annotator. The key challenge is judge alignment: the AI judge must itself be aligned, or biases propagate down the pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-star--rest",
      children: "5.3 STaR / ReST"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STaR (Self-Taught Reasoner) and ReST (Reinforced Self-Training) are bootstrap loops that generate training data from the model itself."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "STaR"
      }), " works as follows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample reasoning traces from the model for each question."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filter traces that lead to correct answers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tune the model on the filtered traces."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat. Incorrect questions get a hint (the correct answer) and the model re-generates reasoning around it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ReST"
      }), " (Reinforced Self-Training) generalizes STaR:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grow step:"
        }), " Sample multiple outputs per prompt from the current model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improve step:"
        }), " Filter outputs by a quality criterion (reward score, correctness, human rating), then retrain on the kept subset."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat, annealing the filter threshold each iteration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────┐     ┌──────────────┐     ┌──────────────┐\n│  Prompts     │────▶│  Generate N  │────▶│  Filter by   │\n│              │     │  Responses   │     │  Quality     │\n└──────────────┘     └──────────────┘     └──────┬───────┘\n                          ▲                      │\n                          │   ┌──────────┐       │\n                          └───│ Retrain  │◀──────┘\n                              └──────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These loops close the gap between generation quality and training signal without external annotation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-direct-preference-optimization",
      children: "5.4 Direct Preference Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DPO simplifies RLHF by eliminating the separate reward model. The key insight: the optimal policy under the RLHF objective can be expressed directly as a function of the policy itself and a reference policy. DPO optimizes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ℒ_DPO = -𝔼[log σ(β * (log π_θ(y_w|x) / π_ref(y_w|x) - log π_θ(y_l|x) / π_ref(y_l|x)))]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "y_w"
        }), " is the preferred (chosen) response, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y_l"
        }), " the dispreferred (rejected)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "π_θ"
        }), " is the current policy, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "π_ref"
        }), " the reference (frozen)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "β"
        }), " controls how far the policy can deviate from the reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "σ"
        }), " is the logistic sigmoid"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DPO trains directly on preference pairs without sampling from the policy during training, making it more stable and computationally lighter than PPO-based RLHF."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-51-constitutionalreflectionloop",
      children: "Example 5.1: ConstitutionalReflectionLoop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This loop checks every agent output against a set of constitutional principles, critiques violations, and revises until all rules pass or max retries are exhausted."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { z } from \"zod\";\n\n// ── Constitution ──────────────────────────────────────────────\ninterface Principle {\n  id: string;\n  description: string;\n}\n\nconst PRINCIPLES: Principle[] = [\n  { id: \"harmlessness\", description: \"Output must not contain instructions for illegal or harmful activities.\" },\n  { id: \"honesty\", description: \"Output must not present speculation as fact.\" },\n  { id: \"privacy\", description: \"Output must not reveal personal or private information.\" },\n  { id: \"fairness\", description: \"Output must not promote stereotypes or discrimination.\" },\n];\n\n// ── Critique / Revision types ─────────────────────────────────\ninterface Critique {\n  principleId: string;\n  violated: boolean;\n  explanation: string;\n}\n\ninterface CritiqueResult {\n  passed: boolean;\n  critiques: Critique[];\n}\n\ninterface RevisionResult {\n  revisedOutput: string;\n  critiques: Critique[];\n}\n\n// ── LLM adapter (pluggable) ───────────────────────────────────\ntype LlmGenerate = (prompt: string) => string | Promise<string>;\n\ninterface ConstitutionalConfig {\n  generate: LlmGenerate;\n  principles: Principle[];\n  maxRounds: number;\n}\n\n// ── Core loop ─────────────────────────────────────────────────\nexport class ConstitutionalReflectionLoop {\n  private config: ConstitutionalConfig;\n\n  constructor(config: ConstitutionalConfig) {\n    this.config = config;\n  }\n\n  /** Critique output against all principles. */\n  private async critique(output: string): Promise<CritiqueResult> {\n    const critiquePrompt = `You are a constitutional critic.\nEvaluate the following output against each principle.\nReturn a JSON array of { principleId, violated: boolean, explanation: string }.\n\nPrinciples:\n${this.config.principles.map((p) => `- ${p.id}: ${p.description}`).join(\"\\n\")}\n\nOutput:\n\"\"\"${output}\"\"\"`;\n\n    const raw = await this.config.generate(critiquePrompt);\n    const critiques: Critique[] = JSON.parse(raw);\n    const passed = critiques.every((c) => !c.violated);\n    return { passed, critiques };\n  }\n\n  /** Revise output given the critiques. */\n  private async revise(output: string, critiques: Critique[]): Promise<string> {\n    const violations = critiques\n      .filter((c) => c.violated)\n      .map((c) => `- ${c.principleId}: ${c.explanation}`)\n      .join(\"\\n\");\n\n    const revisePrompt = `Revise the following output to address these violations:\n${violations}\n\nOriginal output:\n\"\"\"${output}\"\"\"\n\nReturn only the revised output.`;\n\n    return this.config.generate(revisePrompt);\n  }\n\n  /** Run the constitutional loop. */\n  async run(prompt: string): Promise<RevisionResult> {\n    let output = await this.config.generate(prompt);\n    const allCritiques: Critique[] = [];\n\n    for (let round = 1; round <= this.config.maxRounds; round++) {\n      const result = await this.critique(output);\n      allCritiques.push(...result.critiques);\n\n      if (result.passed) {\n        return { revisedOutput: output, critiques: allCritiques };\n      }\n      output = await this.revise(output, result.critiques);\n    }\n\n    return { revisedOutput: output, critiques: allCritiques };\n  }\n}\n\n// ── Usage ─────────────────────────────────────────────────────\nconst loop = new ConstitutionalReflectionLoop({\n  generate: async (prompt) => {\n    // In production this calls the actual LLM\n    return `Simulated response to: ${prompt}`;\n  },\n  principles: PRINCIPLES,\n  maxRounds: 3,\n});\n\nconst result = await loop.run(\"How do I pick a lock?\");\nconsole.log(result.revisedOutput);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-52-preferencepairgenerator",
      children: "Example 5.2: PreferencePairGenerator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This component generates (chosen, rejected) response pairs from an LLM, then optionally scores them with a judge model. The pairs feed into DPO or reward-model training pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { randomUUID } from \"node:crypto\";\n\n// ── Types ─────────────────────────────────────────────────────\ninterface PreferencePair {\n  id: string;\n  prompt: string;\n  chosen: string;\n  rejected: string;\n  chosenScore: number;\n  rejectedScore: number;\n  judgeRationale: string;\n}\n\ntype JudgeFn = (prompt: string, response: string) => Promise<number>;\n\ninterface GeneratorConfig {\n  /** Generate N candidate responses per prompt. */\n  generateCandidates: (prompt: string, n: number) => Promise<string[]>;\n  /** Judge model that scores a response 0-100. */\n  judge: JudgeFn;\n  /** Size of the preference dataset to build. */\n  targetPairs: number;\n  /** Number of candidates to sample per prompt. */\n  candidatesPerPrompt: number;\n}\n\n// ── Pair Generator ────────────────────────────────────────────\nexport class PreferencePairGenerator {\n  private config: GeneratorConfig;\n\n  constructor(config: GeneratorConfig) {\n    this.config = config;\n  }\n\n  /** Generate a single preference pair from one prompt. */\n  async generatePair(prompt: string): Promise<PreferencePair> {\n    const candidates = await this.config.generateCandidates(\n      prompt,\n      this.config.candidatesPerPrompt,\n    );\n\n    const scored = await Promise.all(\n      candidates.map(async (text) => ({\n        text,\n        score: await this.config.judge(prompt, text),\n      })),\n    );\n\n    scored.sort((a, b) => b.score - a.score);\n    const best = scored[0];\n    const worst = scored[scored.length - 1];\n\n    if (best.score === worst.score) {\n      throw new Error(\n        `No discriminable preference: all ${scored.length} candidates scored ${best.score}`,\n      );\n    }\n\n    const judgeRationale =\n      `Best scored ${best.score}, worst scored ${worst.score}. ` +\n      `Gap: ${(best.score - worst.score).toFixed(1)} pts.`;\n\n    return {\n      id: randomUUID(),\n      prompt,\n      chosen: best.text,\n      rejected: worst.text,\n      chosenScore: best.score,\n      rejectedScore: worst.score,\n      judgeRationale,\n    };\n  }\n\n  /** Build a dataset of preference pairs across many prompts. */\n  async buildDataset(prompts: string[]): Promise<PreferencePair[]> {\n    const pairs: PreferencePair[] = [];\n    for (const prompt of prompts) {\n      if (pairs.length >= this.config.targetPairs) break;\n      try {\n        const pair = await this.generatePair(prompt);\n        pairs.push(pair);\n      } catch (err) {\n        console.warn(`Skipping prompt \"${prompt.slice(0, 40)}...\": ${err}`);\n      }\n    }\n    return pairs;\n  }\n\n  /** Serialize dataset to JSON lines format. */\n  static toJsonl(pairs: PreferencePair[]): string {\n    return pairs.map((p) => JSON.stringify(p)).join(\"\\n\");\n  }\n\n  /** Serialize to DPO-format: { prompt, chosen, rejected } only. */\n  static toDpoFormat(pairs: PreferencePair[]): string {\n    return pairs\n      .map((p) =>\n        JSON.stringify({\n          prompt: p.prompt,\n          chosen: p.chosen,\n          rejected: p.rejected,\n        }),\n      )\n      .join(\"\\n\");\n  }\n}\n\n// ── Usage ─────────────────────────────────────────────────────\nconst generator = new PreferencePairGenerator({\n  generateCandidates: async (prompt, n) =>\n    Array.from({ length: n }, (_, i) => `Candidate ${i + 1} for: ${prompt}`),\n  judge: async (_prompt, response) => response.length * 2, // toy heuristic\n  targetPairs: 10,\n  candidatesPerPrompt: 4,\n});\n\nconst prompts = [\n  \"Explain quantum entanglement\",\n  \"Write a haiku about loops\",\n  \"Compare REST and GraphQL\",\n];\n\nconst dataset = await generator.buildDataset(prompts);\nconsole.log(PreferencePairGenerator.toDpoFormat(dataset));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-53-improvement-pipeline",
      children: "Example 5.3: Improvement Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A complete improvement pipeline that chains generate → critique → revise → compare, using the constitutional loop as a sub-component and tracking quality deltas."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { ConstitutionalReflectionLoop } from \"./example-5-1\";\nimport { PreferencePairGenerator, type PreferencePair } from \"./example-5-2\";\n\n// ── Types ─────────────────────────────────────────────────────\ninterface PipelineStep {\n  phase: \"generate\" | \"critique\" | \"revise\" | \"compare\";\n  output: string;\n  metrics: Record<string, number>;\n  timestamp: Date;\n}\n\ninterface PipelineResult {\n  prompt: string;\n  steps: PipelineStep[];\n  improvementDelta: number;\n  finalOutput: string;\n  pair: PreferencePair;\n}\n\n// ── Scoring function ──────────────────────────────────────────\ntype Scorer = (prompt: string, output: string) => Promise<number>;\n\n// ── Improvement Pipeline ──────────────────────────────────────\nexport class ImprovementPipeline {\n  constructor(\n    private loop: ConstitutionalReflectionLoop,\n    private generator: PreferencePairGenerator,\n    private scorer: Scorer,\n  ) {}\n\n  private record(\n    steps: PipelineStep[],\n    phase: PipelineStep[\"phase\"],\n    output: string,\n    metrics: Record<string, number>,\n  ): void {\n    steps.push({ phase, output, metrics, timestamp: new Date() });\n  }\n\n  async run(prompt: string): Promise<PipelineResult> {\n    const steps: PipelineStep[] = [];\n\n    // 1. Generate raw output\n    const rawOutput = await this.loop[\"config\"].generate(prompt);\n    const rawScore = await this.scorer(prompt, rawOutput);\n    this.record(steps, \"generate\", rawOutput, { score: rawScore });\n\n    // 2. Critique raw output\n    const critiqueResult = await this.loop[\"critique\"](rawOutput);\n    const violations = critiqueResult.critiques.filter((c) => c.violated).length;\n    this.record(steps, \"critique\", rawOutput, {\n      violations,\n      critiqueCount: critiqueResult.critiques.length,\n    });\n\n    // 3. Revise through constitutional loop\n    const revisionResult = await this.loop.run(prompt);\n    const revisedScore = await this.scorer(prompt, revisionResult.revisedOutput);\n    const remainingViolations = revisionResult.critiques.filter(\n      (c) => c.violated,\n    ).length;\n    this.record(steps, \"revise\", revisionResult.revisedOutput, {\n      score: revisedScore,\n      remainingViolations,\n      revisionRounds: Math.ceil(revisionResult.critiques.length / 4),\n    });\n\n    // 4. Compare — generate a preference pair from raw vs revised\n    const pair: PreferencePair = {\n      id: crypto.randomUUID(),\n      prompt,\n      chosen: revisedScore >= rawScore ? revisionResult.revisedOutput : rawOutput,\n      rejected: revisedScore >= rawScore ? rawOutput : revisionResult.revisedOutput,\n      chosenScore: Math.max(revisedScore, rawScore),\n      rejectedScore: Math.min(revisedScore, rawScore),\n      judgeRationale: `Revised improved by ${(revisedScore - rawScore).toFixed(1)} pts`,\n    };\n    this.record(steps, \"compare\", pair.chosen, {\n      delta: revisedScore - rawScore,\n      improvementRatio: rawScore > 0 ? revisedScore / rawScore : 1,\n    });\n\n    return {\n      prompt,\n      steps,\n      improvementDelta: revisedScore - rawScore,\n      finalOutput: pair.chosen,\n      pair,\n    };\n  }\n\n  /** Batch run and aggregate statistics. */\n  async batchRun(prompts: string[]): Promise<{\n    results: PipelineResult[];\n    avgDelta: number;\n    totalImprovements: number;\n  }> {\n    const results = await Promise.all(prompts.map((p) => this.run(p)));\n    const deltas = results.map((r) => r.improvementDelta);\n    const avgDelta =\n      deltas.reduce((a, b) => a + b, 0) / deltas.length;\n    const totalImprovements = results.filter(\n      (r) => r.improvementDelta > 0,\n    ).length;\n    return { results, avgDelta, totalImprovements };\n  }\n}\n\n// ── Usage ─────────────────────────────────────────────────────\nasync function main() {\n  const loop = new ConstitutionalReflectionLoop({\n    generate: async (p) => `Response to: ${p}`,\n    principles: [\n      { id: \"conciseness\", description: \"Output must be under 100 words.\" },\n      { id: \"accuracy\", description: \"Output must be factually correct.\" },\n    ],\n    maxRounds: 2,\n  });\n\n  const scorer: Scorer = async (_p, output) => output.length;\n  const generator = new PreferencePairGenerator({\n    generateCandidates: async (p, n) =>\n      Array.from({ length: n }, (_, i) => `Candidate ${i}: ${p}`),\n    judge: async (_p, t) => t.length,\n    targetPairs: 5,\n    candidatesPerPrompt: 3,\n  });\n\n  const pipeline = new ImprovementPipeline(loop, generator, scorer);\n\n  const result = await pipeline.run(\"What is the speed of light?\");\n  console.log(`Delta: ${result.improvementDelta}`);\n  console.log(`Final: ${result.finalOutput}`);\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-preference-optimization-loop",
      children: "TypeScript: Preference Optimization Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PreferencePair { chosen: string; rejected: string; reward: number; }\n\nclass SelfImprovementLoop {\n  private policy: Map<string, number> = new Map();\n\n  generate(prompt: string): string {\n    return [...this.policy.entries()]\n      .filter(([k]) => k.startsWith(prompt))\n      .sort((a, b) => b[1] - a[1])[0]?.[0] ?? `${prompt}_default`;\n  }\n\n  critique(output: string): string[] {\n    const issues: string[] = [];\n    if (output.length < 10) issues.push(\"too_short\");\n    if (output.includes(\"harmful\")) issues.push(\"unsafe\");\n    return issues;\n  }\n\n  revise(output: string, critique: string[]): string {\n    let r = output;\n    if (critique.includes(\"too_short\")) r += \"_expanded\";\n    if (critique.includes(\"unsafe\")) r = r.replace(/harmful/g, \"safe\");\n    return r;\n  }\n\n  collectPairs(outputs: string[]): PreferencePair[] {\n    const pairs: PreferencePair[] = [];\n    for (let i = 0; i < outputs.length; i++)\n      for (let j = i + 1; j < outputs.length; j++) {\n        const a = this.policy.get(outputs[i]) ?? 0.5;\n        const b = this.policy.get(outputs[j]) ?? 0.5;\n        pairs.push({\n          chosen: a >= b ? outputs[i] : outputs[j],\n          rejected: a >= b ? outputs[j] : outputs[i],\n          reward: a >= b ? 1 : 0,\n        });\n      }\n    return pairs;\n  }\n\n  async run(prompts: string[], iterations = 10): Promise<void> {\n    for (let iter = 0; iter < iterations; iter++) {\n      const outputs = prompts.map(p => this.revise(this.generate(p), this.critique(this.generate(p))));\n      for (const p of this.collectPairs(outputs))\n        this.policy.set(p.chosen, (this.policy.get(p.chosen) ?? 0) + 0.01);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-dpo-vs-rlhf",
      children: "Mermaid: DPO vs RLHF"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph RLHF[\"RLHF Pipeline\"]\n        A1[Base Model] --> A2[Sample completions]\n        A2 --> A3[Human label preferences]\n        A3 --> A4[Train Reward Model]\n        A4 --> A5[Reward scores completions]\n        A5 --> A6[PPO optimizes policy]\n        A6 --> A7[Updated Model]\n        A7 -.-> A2\n    end\n\n    subgraph DPO[\"DPO Pipeline\"]\n        B1[Base Model] --> B2[Sample pairs]\n        B2 --> B3[Human label preferences]\n        B3 --> B4[DPO loss function]\n        B4 --> B5[Direct policy update]\n        B5 --> B6[Updated Model]\n        B6 -.-> B2\n    end\n\n    RLHF --> |\"No reward model needed\"| DPO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-star-bootstrapping-dpo-constitutional-chain-and-self-play",
      children: "Extended Implementation: STaR Bootstrapping, DPO, Constitutional Chain, and Self-Play"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/// <reference types=\"node\" />\n\nimport { randomUUID } from \"node:crypto\";\n\n// ── Math Problem Types ─────────────────────────────────────────\ninterface MathProblem {\n  id: string;\n  question: string;\n  answer: number;\n}\n\ninterface ReasoningTrace {\n  problemId: string;\n  steps: string[];\n  finalAnswer: number;\n  correct: boolean;\n}\n\ntype SimulateModelFn = (problem: MathProblem) => ReasoningTrace;\n\n// ── StarLoop: STaR Bootstrapping ───────────────────────────────\nclass StarLoop {\n  private traces: ReasoningTrace[] = [];\n  private iteration = 0;\n\n  constructor(\n    private problems: MathProblem[],\n    private model: SimulateModelFn,\n    private accuracyKey: (trace: ReasoningTrace) => boolean,\n  ) {}\n\n  get accuracy(): number {\n    if (this.traces.length === 0) return 0;\n    return this.traces.filter((t) => t.correct).length / this.traces.length;\n  }\n\n  get currentIteration(): number {\n    return this.iteration;\n  }\n\n  /** Run one STaR iteration: generate traces, filter correct, retrain. */\n  async runIteration(): Promise<{\n    generated: number;\n    filtered: number;\n    accuracyBefore: number;\n    accuracyAfter: number;\n  }> {\n    const accuracyBefore = this.accuracy;\n\n    // Generate reasoning traces for all problems\n    const generatedTraces = this.problems.map((p) => this.model(p));\n\n    // Filter: keep only correct traces\n    const correctTraces = generatedTraces.filter((t) => this.accuracyKey(t));\n    this.traces.push(...correctTraces);\n\n    // Retrain: the model improves because it trains on correct traces\n    this.retrain(correctTraces);\n    this.iteration++;\n\n    const accuracyAfter = this.accuracy;\n\n    return {\n      generated: generatedTraces.length,\n      filtered: correctTraces.length,\n      accuracyBefore,\n      accuracyAfter,\n    };\n  }\n\n  /** Simulate retraining on correct traces — accuracy improves each iteration. */\n  private retrain(correct: ReasoningTrace[]): void {\n    const improvement = Math.min(correct.length / this.problems.length, 1.0) * 0.15;\n    const originalModel = this.model;\n    const self = this;\n    this.model = (problem: MathProblem): ReasoningTrace => {\n      const trace = originalModel(problem);\n      const alreadyCorrect = self.traces.some(\n        (t) => t.problemId === problem.id && t.correct,\n      );\n      // Previously correct problems stay correct; others improve gradually\n      trace.correct = alreadyCorrect || Math.random() < 0.3 + improvement;\n      return trace;\n    };\n  }\n\n  /** Run N iterations and return history. */\n  async run(iterations: number): Promise<\n    Array<{ iteration: number; generated: number; filtered: number; accuracy: number }>\n  > {\n    const history: Array<{ iteration: number; generated: number; filtered: number; accuracy: number }> = [];\n    for (let i = 0; i < iterations; i++) {\n      const result = await this.runIteration();\n      history.push({\n        iteration: i + 1,\n        generated: result.generated,\n        filtered: result.filtered,\n        accuracy: result.accuracyAfter,\n      });\n    }\n    return history;\n  }\n}\n\n// ── DPO Loss with Numerical Stability ──────────────────────────\ninterface DpoLossParams {\n  policyLogprobs: number[];\n  refLogprobs: number[];\n  chosen: boolean[];\n  beta: number;\n}\n\nfunction computeDpoLoss(params: DpoLossParams): number {\n  const { policyLogprobs, refLogprobs, chosen, beta } = params;\n  const eps = 1e-8;\n\n  if (\n    policyLogprobs.length !== refLogprobs.length ||\n    refLogprobs.length !== chosen.length\n  ) {\n    throw new Error(\"All input arrays must have the same length\");\n  }\n\n  let totalLoss = 0;\n  let count = 0;\n\n  for (let i = 0; i < policyLogprobs.length - 1; i += 2) {\n    // Pairs are consecutive: (chosen, rejected)\n    if (i + 1 >= policyLogprobs.length) break;\n\n    const chosenIdx = chosen[i] ? i : i + 1;\n    const rejectedIdx = chosen[i] ? i + 1 : i;\n\n    const piChosen = Math.max(policyLogprobs[chosenIdx], eps);\n    const piRejected = Math.max(policyLogprobs[rejectedIdx], eps);\n    const refChosen = Math.max(refLogprobs[chosenIdx], eps);\n    const refRejected = Math.max(refLogprobs[rejectedIdx], eps);\n\n    const logRatio = Math.log(piChosen / refChosen + eps) -\n                     Math.log(piRejected / refRejected + eps);\n\n    const loss = -Math.log(sigmoid(beta * logRatio) + eps);\n    totalLoss += loss;\n    count++;\n  }\n\n  return count > 0 ? totalLoss / count : 0;\n}\n\nfunction sigmoid(x: number): number {\n  if (x >= 0) return 1 / (1 + Math.exp(-x));\n  const expX = Math.exp(x);\n  return expX / (1 + expX);\n}\n\n// ── Constitutional Critics ────────────────────────────────────\ninterface ConstitutionalPrinciple {\n  id: string;\n  description: string;\n  domain: \"safety\" | \"style\" | \"factuality\" | \"custom\";\n}\n\ninterface CritiqueResult {\n  principleId: string;\n  violated: boolean;\n  explanation: string;\n  severity: number; // 0-1\n}\n\ninterface CritiqueResponse {\n  critiques: CritiqueResult[];\n  revisedOutput: string;\n  rounds: number;\n}\n\ntype GenerateFn = (prompt: string) => Promise<string>;\n\n// ── Single-Domain Constitutional Critic ────────────────────────\nclass ConstitutionalCritic {\n  constructor(\n    public readonly principles: ConstitutionalPrinciple[],\n    private generate: GenerateFn,\n    private maxRounds: number = 3,\n  ) {}\n\n  async run(prompt: string): Promise<CritiqueResponse> {\n    let output = await this.generate(prompt);\n    const allCritiques: CritiqueResult[] = [];\n\n    for (let round = 0; round < this.maxRounds; round++) {\n      const critiques = await this.evaluate(output);\n      allCritiques.push(...critiques);\n\n      const violated = critiques.filter((c) => c.violated);\n      if (violated.length === 0) break;\n\n      output = await this.revise(output, violated);\n    }\n\n    return { critiques: allCritiques, revisedOutput: output, rounds: Math.min(this.maxRounds, allCritiques.length) };\n  }\n\n  private async evaluate(output: string): Promise<CritiqueResult[]> {\n    return this.principles.map((p) => {\n      const violated = this.checkViolation(p, output);\n      return {\n        principleId: p.id,\n        violated,\n        explanation: violated ? `Violates ${p.domain} principle: ${p.description}` : \"Passed\",\n        severity: violated ? 0.7 : 0,\n      };\n    });\n  }\n\n  private checkViolation(principle: ConstitutionalPrinciple, output: string): boolean {\n    const keywords = principle.description.toLowerCase().split(\" \");\n    return keywords.some((kw) => output.toLowerCase().includes(kw));\n  }\n\n  private async revise(output: string, violations: CritiqueResult[]): Promise<string> {\n    let revised = output;\n    for (const v of violations) {\n      const word = v.explanation.split(\" \").pop() || \"\";\n      if (word.length > 3) {\n        revised = revised.replace(new RegExp(word, \"gi\"), `[${word}]`);\n      }\n    }\n    return revised;\n  }\n}\n\n// ── ConstitutionalChain: Multi-Domain Sequential Critic ────────\nclass ConstitutionalChain {\n  private critics: ConstitutionalCritic[];\n\n  constructor(critics: ConstitutionalCritic[]) {\n    this.critics = critics;\n  }\n\n  async run(prompt: string): Promise<{\n    finalOutput: string;\n    domainReports: Array<{\n      domain: string;\n      violations: number;\n      rounds: number;\n    }>;\n    totalRounds: number;\n  }> {\n    let currentOutput = prompt;\n    const domainReports: Array<{ domain: string; violations: number; rounds: number }> = [];\n    let totalRounds = 0;\n\n    for (const critic of this.critics) {\n      const result = await critic.run(currentOutput);\n      currentOutput = result.revisedOutput;\n\n      const domain = critic.principles[0]?.domain || \"unknown\";\n      const violations = result.critiques.filter((c) => c.violated).length;\n      domainReports.push({ domain, violations, rounds: result.rounds });\n      totalRounds += result.rounds;\n    }\n\n    return { finalOutput: currentOutput, domainReports, totalRounds };\n  }\n}\n\n// ── TemperatureAnnealingPairGenerator ──────────────────────────\ninterface AnnealingPair {\n  prompt: string;\n  chosen: string;\n  rejected: string;\n  chosenTemperature: number;\n  rejectedTemperature: number;\n  score: number;\n}\n\nclass TemperatureAnnealingPairGenerator {\n  private pairs: AnnealingPair[] = [];\n\n  constructor(\n    private generateAtTemperature: (prompt: string, temperature: number) => Promise<string>,\n    private scoreFn: (output: string) => Promise<number>,\n  ) {}\n\n  get statistics(): Record<string, number> {\n    if (this.pairs.length === 0) return {};\n    const byTemp: Record<number, { chosen: number; total: number }> = {};\n    for (const p of this.pairs) {\n      for (const t of [p.chosenTemperature, p.rejectedTemperature]) {\n        if (!byTemp[t]) byTemp[t] = { chosen: 0, total: 0 };\n        byTemp[t].total++;\n      }\n      byTemp[p.chosenTemperature].chosen++;\n    }\n    const stats: Record<string, number> = {};\n    for (const [t, v] of Object.entries(byTemp)) {\n      stats[`temp_${t}_win_rate`] = v.total > 0 ? v.chosen / v.total : 0;\n    }\n    return stats;\n  }\n\n  async generatePairs(\n    prompts: string[],\n    temperatures: number[] = [0.3, 0.7, 1.0],\n  ): Promise<AnnealingPair[]> {\n    this.pairs = [];\n    for (const prompt of prompts) {\n      // Sample at multiple temperatures\n      const samples: Array<{ output: string; temperature: number; score: number }> = [];\n      for (const temp of temperatures) {\n        const output = await this.generateAtTemperature(prompt, temp);\n        const score = await this.scoreFn(output);\n        samples.push({ output, temperature: temp, score });\n      }\n\n      // Create all pairwise comparisons\n      for (let i = 0; i < samples.length; i++) {\n        for (let j = i + 1; j < samples.length; j++) {\n          const better = samples[i].score >= samples[j].score ? samples[i] : samples[j];\n          const worse = samples[i].score >= samples[j].score ? samples[j] : samples[i];\n          this.pairs.push({\n            prompt,\n            chosen: better.output,\n            rejected: worse.output,\n            chosenTemperature: better.temperature,\n            rejectedTemperature: worse.temperature,\n            score: better.score - worse.score,\n          });\n        }\n      }\n    }\n    return this.pairs;\n  }\n}\n\n// ── ImprovementPipeline with Accumulate and Retrain ────────────\ninterface AccumulatedPair {\n  prompt: string;\n  chosen: string;\n  rejected: string;\n  delta: number;\n}\n\nclass ImprovementPipelineWithRetrain {\n  private accumulatedPairs: AccumulatedPair[] = [];\n  private modelQuality = 0.5; // simulated model quality (0-1)\n  private generations: number[] = [];\n\n  constructor(\n    private generateFn: (prompt: string) => Promise<string>,\n    private critiqueFn: (output: string) => Promise<{ violations: number; revised: string }>,\n    private scorer: (output: string) => Promise<number>,\n  ) {}\n\n  get pairCount(): number {\n    return this.accumulatedPairs.length;\n  }\n\n  get averageQuality(): number {\n    return this.generations.length > 0\n      ? this.generations.reduce((a, b) => a + b, 0) / this.generations.length\n      : 0;\n  }\n\n  async run(prompt: string): Promise<{ output: string; delta: number; violations: number }> {\n    const raw = await this.generateFn(prompt);\n    const rawScore = await this.scorer(raw);\n\n    const { violations, revised } = await this.critiqueFn(raw);\n    const revisedScore = await this.scorer(revised);\n\n    const delta = revisedScore - rawScore;\n    this.generations.push(revisedScore);\n\n    this.accumulatedPairs.push({\n      prompt,\n      chosen: delta >= 0 ? revised : raw,\n      rejected: delta >= 0 ? raw : revised,\n      delta,\n    });\n\n    return { output: revised, delta, violations };\n  }\n\n  async retrain(): Promise<void> {\n    if (this.accumulatedPairs.length === 0) return;\n    const improvement = this.accumulatedPairs.filter((p) => p.delta > 0).length /\n                        this.accumulatedPairs.length;\n    this.modelQuality = Math.min(1.0, this.modelQuality + improvement * 0.1);\n  }\n\n  async batchRun(prompts: string[]): Promise<{\n    results: Array<{ output: string; delta: number }>;\n    avgDelta: number;\n  }> {\n    const results = await Promise.all(prompts.map((p) => this.run(p)));\n    const deltas = results.map((r) => r.delta);\n    const avgDelta = deltas.reduce((a, b) => a + b, 0) / deltas.length;\n    return { results, avgDelta };\n  }\n}\n\n// ── SelfPlayLoop: Policy Improvement via Self-Play ─────────────\ntype PolicyFn = (state: string) => string;\n\ninterface SelfPlayCheckpoint {\n  version: number;\n  policy: PolicyFn;\n  winRate: number;\n}\n\nclass SelfPlayLoop {\n  private checkpoints: SelfPlayCheckpoint[] = [];\n  private version = 0;\n\n  constructor(\n    private policy: PolicyFn,\n    private opponent: PolicyFn,\n    private simulateGame: (policy: PolicyFn, opponent: PolicyFn) => { policyWon: boolean },\n  ) {}\n\n  get currentVersion(): number {\n    return this.version;\n  }\n\n  /** Play one self-play generation: current policy vs past checkpoint. */\n  async playGeneration(): Promise<{\n    winRate: number;\n    newVersion: number;\n    promoted: boolean;\n  }> {\n    const totalGames = 50;\n    let wins = 0;\n\n    const pastCheckpoint = this.checkpoints.length > 0\n      ? this.checkpoints[this.checkpoints.length - 1]\n      : null;\n\n    const opponent = pastCheckpoint?.policy || this.opponent;\n\n    for (let i = 0; i < totalGames; i++) {\n      const result = this.simulateGame(this.policy, opponent);\n      if (result.policyWon) wins++;\n    }\n\n    const winRate = wins / totalGames;\n    const promoted = winRate > 0.55;\n\n    if (promoted) {\n      this.version++;\n      this.checkpoints.push({\n        version: this.version,\n        policy: this.policy,\n        winRate,\n      });\n    }\n\n    return { winRate, newVersion: this.version, promoted };\n  }\n\n  /** Run multiple self-play generations to build a champion. */\n  async run(generations: number): Promise<SelfPlayCheckpoint[]> {\n    for (let g = 0; g < generations; g++) {\n      await this.playGeneration();\n    }\n    return this.checkpoints;\n  }\n}\n\n// ── Usage ──────────────────────────────────────────────────────\nasync function main() {\n  // StarLoop demo\n  const problems: MathProblem[] = Array.from({ length: 20 }, (_, i) => ({\n    id: `prob_${i}`,\n    question: `What is ${i} + ${i}?`,\n    answer: i + i,\n  }));\n\n  const baseModel: SimulateModelFn = (p) => ({\n    problemId: p.id,\n    steps: [`Add ${p.question.split(\" \")[2]} + ${p.question.split(\" \")[4].replace(\"?\", \"\")}`],\n    finalAnswer: Math.random() > 0.5 ? p.answer : p.answer + 1,\n    correct: false,\n  });\n\n  const star = new StarLoop(problems, baseModel, (t) => t.finalAnswer === problems.find(p => p.id === t.problemId)?.answer);\n  const history = await star.run(5);\n  console.log(\"STaR Bootstrapping:\", history);\n\n  // DPO loss demo\n  const loss = computeDpoLoss({\n    policyLogprobs: [0.8, 0.3, 0.9, 0.2, 0.85, 0.25],\n    refLogprobs: [0.7, 0.4, 0.7, 0.3, 0.7, 0.3],\n    chosen: [true, false, true, false, true, false],\n    beta: 0.1,\n  });\n  console.log(\"DPO Loss:\", loss.toFixed(4));\n\n  // ConstitutionalChain demo\n  const gen: GenerateFn = async (p) => `Answer: ${p}`;\n  const safetyPrinciples: ConstitutionalPrinciple[] = [\n    { id: \"no_harm\", description: \"must not contain harmful\", domain: \"safety\" },\n  ];\n  const stylePrinciples: ConstitutionalPrinciple[] = [\n    { id: \"concise\", description: \"must be under 50 words\", domain: \"style\" },\n  ];\n  const chain = new ConstitutionalChain([\n    new ConstitutionalCritic(safetyPrinciples, gen),\n    new ConstitutionalCritic(stylePrinciples, gen),\n  ]);\n  const chainResult = await chain.run(\"Write a short safety message\");\n  console.log(\"ConstitutionalChain rounds:\", chainResult.totalRounds);\n\n  // TemperatureAnnealingPairGenerator demo\n  const tempGen = new TemperatureAnnealingPairGenerator(\n    async (p, t) => `[temp=${t}] ${p}`,\n    async (o) => o.length,\n  );\n  const pairs = await tempGen.generatePairs([\"test prompt\"]);\n  console.log(\"Temperature stats:\", tempGen.statistics);\n\n  // SelfPlayLoop demo\n  const randomPolicy: PolicyFn = () => Math.random() > 0.5 ? \"left\" : \"right\";\n  const selfPlay = new SelfPlayLoop(\n    (s) => s === \"start\" ? \"left\" : \"right\",\n    randomPolicy,\n    (p, o) => ({ policyWon: Math.random() > 0.4 }),\n  );\n  const checkpoints = await selfPlay.run(3);\n  console.log(\"Self-play checkpoints:\", checkpoints.length);\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-star-bootstrap-cycle",
      children: "Mermaid: STaR Bootstrap Cycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph STaR[\"STaR Bootstrap Cycle\"]\n        A[Seed Model] --> B[Generate reasoning traces]\n        B --> C{Answer correct?}\n        C -->|Yes| D[Keep trace]\n        C -->|No| E[Provide hint]\n        E --> B\n        D --> F[Filtered trace dataset]\n        F --> G[Fine-tune model]\n        G --> H[Improved Model]\n        H -.->|next iteration| B\n    end\n\n    subgraph ReST[\"ReST EMT\"]\n        I[Policy Model] --> J[Grow: sample N outputs]\n        J --> K[Improve: filter by reward]\n        K --> L[Retrain on kept subset]\n        L -.->|anneal threshold| I\n    end\n\n    STaR -->|inspires| ReST\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-implementation-curriculum-learning-self-consistency-rejection-sampling-skill-transfer-and-progress-tracking",
      children: "Extended Implementation: Curriculum Learning, Self-Consistency, Rejection Sampling, Skill Transfer, and Progress Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/// <reference types=\"node\" />\n\nimport { randomUUID } from \"node:crypto\";\n\n// ── CurriculumLearningScheduler ─────────────────────────────────\ninterface CurriculumLevel {\n  level: number;\n  description: string;\n  minPerformance: number;   // minimum score to advance (0-1)\n  maxTasks: number;          // max tasks at this level before forced advance\n  taskTemplate: string;\n}\n\ninterface CurriculumState {\n  currentLevel: number;\n  tasksAtLevel: number;\n  runningScore: number[];\n  completed: boolean;\n}\n\nclass CurriculumLearningScheduler {\n  private state: CurriculumState = {\n    currentLevel: 0,\n    tasksAtLevel: 0,\n    runningScore: [],\n    completed: false,\n  };\n\n  constructor(private levels: CurriculumLevel[]) {}\n\n  get currentLevel(): CurriculumLevel {\n    return this.levels[Math.min(this.state.currentLevel, this.levels.length - 1)];\n  }\n\n  get progress(): number {\n    return this.state.currentLevel / Math.max(this.levels.length - 1, 1);\n  }\n\n  /** Record a score and check if the agent should advance. */\n  recordScore(score: number): { advanced: boolean; newLevel: number; completed: boolean } {\n    this.state.tasksAtLevel++;\n    this.state.runningScore.push(score);\n\n    const avgScore = this.state.runningScore.reduce((a, b) => a + b, 0) /\n                     this.state.runningScore.length;\n    const level = this.levels[this.state.currentLevel];\n\n    const shouldAdvance = avgScore >= level.minPerformance ||\n                          this.state.tasksAtLevel >= level.maxTasks;\n\n    if (shouldAdvance && this.state.currentLevel < this.levels.length - 1) {\n      this.state.currentLevel++;\n      this.state.tasksAtLevel = 0;\n      this.state.runningScore = [];\n    } else if (shouldAdvance && this.state.currentLevel >= this.levels.length - 1) {\n      this.state.completed = true;\n    }\n\n    return {\n      advanced: shouldAdvance,\n      newLevel: this.state.currentLevel,\n      completed: this.state.completed,\n    };\n  }\n\n  /** Get a task appropriate for the current level. */\n  getTask(): string {\n    return this.currentLevel.taskTemplate.replace(\n      \"{level}\",\n      String(this.currentLevel.level),\n    );\n  }\n\n  reset(): void {\n    this.state = { currentLevel: 0, tasksAtLevel: 0, runningScore: [], completed: false };\n  }\n}\n\n// ── SelfConsistencyEnsemble ─────────────────────────────────────\ninterface ReasoningPath {\n  id: string;\n  steps: string[];\n  answer: string;\n  confidence: number;\n}\n\nclass SelfConsistencyEnsemble {\n  private paths: ReasoningPath[] = [];\n\n  constructor(\n    private generatePath: (prompt: string) => Promise<ReasoningPath>,\n    private numPaths: number = 5,\n  ) {}\n\n  get allPaths(): readonly ReasoningPath[] {\n    return this.paths;\n  }\n\n  /** Sample multiple reasoning paths and return the consensus answer. */\n  async solve(prompt: string): Promise<{\n    consensus: string;\n    voteDistribution: Record<string, number>;\n    confidence: number;\n    paths: ReasoningPath[];\n  }> {\n    this.paths = [];\n\n    // Generate N reasoning paths in parallel\n    const results = await Promise.all(\n      Array.from({ length: this.numPaths }, () => this.generatePath(prompt)),\n    );\n    this.paths = results;\n\n    // Vote on answers\n    const votes: Record<string, { count: number; totalConfidence: number }> = {};\n    for (const path of results) {\n      if (!votes[path.answer]) {\n        votes[path.answer] = { count: 0, totalConfidence: 0 };\n      }\n      votes[path.answer].count++;\n      votes[path.answer].totalConfidence += path.confidence;\n    }\n\n    // Find the most common answer\n    const sorted = Object.entries(votes).sort((a, b) => b[1].count - a[1].count);\n    const consensus = sorted[0][0];\n    const consensusConfidence = sorted[0][1].totalConfidence / this.numPaths;\n    const voteDistribution: Record<string, number> = {};\n    for (const [answer, data] of Object.entries(votes)) {\n      voteDistribution[answer] = data.count / this.numPaths;\n    }\n\n    return { consensus, voteDistribution, confidence: consensusConfidence, paths: results };\n  }\n\n  /** Check how many paths agree with the consensus. */\n  get agreementRate(): number {\n    if (this.paths.length === 0) return 0;\n    const { consensus } = this.paths.reduce<{\n      consensus: string; counts: Record<string, number>;\n    }>(\n      (acc, p) => {\n        acc.counts[p.answer] = (acc.counts[p.answer] || 0) + 1;\n        return acc;\n      },\n      { consensus: \"\", counts: {} },\n    );\n    const maxCount = Math.max(...Object.values(this.paths.reduce<Record<string, number>>(\n      (acc, p) => { acc[p.answer] = (acc[p.answer] || 0) + 1; return acc; }, {},\n    )));\n    return maxCount / this.paths.length;\n  }\n}\n\n// ── RejectionSamplingLoop ───────────────────────────────────────\ninterface SampledCandidate {\n  id: string;\n  output: string;\n  rewardScore: number;\n  accepted: boolean;\n}\n\nclass RejectionSamplingLoop {\n  private candidates: SampledCandidate[] = [];\n  private iteration = 0;\n\n  constructor(\n    private generateFn: (prompt: string) => Promise<string>,\n    private rewardFn: (output: string) => Promise<number>,\n    private threshold: number,\n    private maxCandidates: number = 10,\n  ) {}\n\n  get acceptedCount(): number {\n    return this.candidates.filter((c) => c.accepted).length;\n  }\n\n  get averageReward(): number {\n    if (this.candidates.length === 0) return 0;\n    return this.candidates.reduce((s, c) => s + c.rewardScore, 0) / this.candidates.length;\n  }\n\n  get acceptanceRate(): number {\n    if (this.candidates.length === 0) return 0;\n    return this.acceptedCount / this.candidates.length;\n  }\n\n  /** Run one rejection sampling iteration. */\n  async runIteration(prompt: string): Promise<SampledCandidate> {\n    this.iteration++;\n    const output = await this.generateFn(prompt);\n    const rewardScore = await this.rewardFn(output);\n    const accepted = rewardScore >= this.threshold;\n\n    const candidate: SampledCandidate = {\n      id: randomUUID(),\n      output,\n      rewardScore,\n      accepted,\n    };\n\n    this.candidates.push(candidate);\n    return candidate;\n  }\n\n  /** Generate N candidates and keep the best K by reward score. */\n  async generateKeepK(\n    prompt: string,\n    n: number,\n    k: number,\n  ): Promise<SampledCandidate[]> {\n    const batch: SampledCandidate[] = [];\n    for (let i = 0; i < n; i++) {\n      const candidate = await this.runIteration(prompt);\n      batch.push(candidate);\n    }\n    batch.sort((a, b) => b.rewardScore - a.rewardScore);\n    return batch.slice(0, k);\n  }\n\n  /** Run until we accumulate `target` accepted candidates. */\n  async runUntilAccepted(\n    prompt: string,\n    target: number,\n    maxAttempts: number = 100,\n  ): Promise<SampledCandidate[]> {\n    const accepted: SampledCandidate[] = [];\n    for (let i = 0; i < maxAttempts && accepted.length < target; i++) {\n      const candidate = await this.runIteration(prompt);\n      if (candidate.accepted) {\n        accepted.push(candidate);\n      }\n    }\n    return accepted;\n  }\n\n  /** Export statistics. */\n  getStats(): {\n    totalCandidates: number;\n    accepted: number;\n    acceptanceRate: number;\n    avgReward: number;\n    bestReward: number;\n  } {\n    const rewards = this.candidates.map((c) => c.rewardScore);\n    return {\n      totalCandidates: this.candidates.length,\n      accepted: this.acceptedCount,\n      acceptanceRate: this.acceptanceRate,\n      avgReward: this.averageReward,\n      bestReward: rewards.length > 0 ? Math.max(...rewards) : 0,\n    };\n  }\n\n  reset(): void {\n    this.candidates = [];\n    this.iteration = 0;\n  }\n}\n\n// ── SkillTransferLoop ───────────────────────────────────────────\ninterface SkillTransferConfig {\n  teacherFn: (task: string) => Promise<string>;\n  studentFn: (task: string) => Promise<string>;\n  judgeFn: (task: string, output: string) => Promise<number>;\n  transferBatchSize: number;\n  similarityThreshold: number;\n}\n\ninterface TransferRecord {\n  task: string;\n  teacherOutput: string;\n  studentOutput: string;\n  teacherScore: number;\n  studentScore: number;\n  gap: number;\n  distilled: boolean;\n}\n\nclass SkillTransferLoop {\n  private transferHistory: TransferRecord[] = [];\n  private studentBaseline = 0;\n\n  constructor(private config: SkillTransferConfig) {}\n\n  get averageGap(): number {\n    if (this.transferHistory.length === 0) return 0;\n    return this.transferHistory.reduce((s, r) => s + r.gap, 0) / this.transferHistory.length;\n  }\n\n  get transferCount(): number {\n    return this.transferHistory.filter((r) => r.distilled).length;\n  }\n\n  /** Run one transfer cycle: teacher demonstrates, student imitates, judge scores. */\n  async transfer(task: string): Promise<TransferRecord> {\n    const [teacherOutput, studentOutput] = await Promise.all([\n      this.config.teacherFn(task),\n      this.config.studentFn(task),\n    ]);\n\n    const [teacherScore, studentScore] = await Promise.all([\n      this.config.judgeFn(task, teacherOutput),\n      this.config.judgeFn(task, studentOutput),\n    ]);\n\n    const gap = teacherScore - studentScore;\n    const distilled = gap > 0 && gap <= this.config.similarityThreshold;\n\n    const record: TransferRecord = {\n      task,\n      teacherOutput,\n      studentOutput,\n      teacherScore,\n      studentScore,\n      gap,\n      distilled,\n    };\n\n    this.transferHistory.push(record);\n    this.studentBaseline = studentScore;\n    return record;\n  }\n\n  /** Run batch transfer on multiple tasks. */\n  async batchTransfer(tasks: string[]): Promise<TransferRecord[]> {\n    const results: TransferRecord[] = [];\n    for (let i = 0; i < tasks.length; i += this.config.transferBatchSize) {\n      const batch = tasks.slice(i, i + this.config.transferBatchSize);\n      const batchResults = await Promise.all(batch.map((t) => this.transfer(t)));\n      results.push(...batchResults);\n    }\n    return results;\n  }\n\n  /** Report improvement over baseline. */\n  improvementReport(): {\n    totalTransfers: number;\n    distilledCount: number;\n    avgGapReduction: number;\n    currentBaseline: number;\n  } {\n    return {\n      totalTransfers: this.transferHistory.length,\n      distilledCount: this.transferCount,\n      avgGapReduction: this.averageGap,\n      currentBaseline: this.studentBaseline,\n    };\n  }\n}\n\n// ── ProgressTracker ─────────────────────────────────────────────\ninterface ProgressPoint {\n  iteration: number;\n  score: number;\n  timestamp: number;\n}\n\ninterface PlateauDetectionResult {\n  plateaued: boolean;\n  plateauLength: number;\n  improvementRate: number;\n  recommendedAction: string;\n}\n\nclass ProgressTracker {\n  private history: ProgressPoint[] = [];\n  private plateausDetected = 0;\n\n  constructor(\n    private windowSize: number = 10,\n    private plateauThreshold: number = 0.02,\n  ) {}\n\n  get currentScore(): number {\n    return this.history.length > 0 ? this.history[this.history.length - 1].score : 0;\n  }\n\n  get totalIterations(): number {\n    return this.history.length;\n  }\n\n  /** Record a new progress data point. */\n  record(iteration: number, score: number): void {\n    this.history.push({ iteration, score, timestamp: Date.now() });\n    if (this.history.length > this.windowSize * 3) {\n      this.history = this.history.slice(-this.windowSize * 3);\n    }\n  }\n\n  /** Calculate improvement rate over the last N iterations. */\n  improvementRate(window?: number): number {\n    const w = window ?? this.windowSize;\n    if (this.history.length < 2) return 0;\n    const recent = this.history.slice(-w);\n    const first = recent[0].score;\n    const last = recent[recent.length - 1].score;\n    return first > 0 ? (last - first) / first : 0;\n  }\n\n  /** Detect if progress has plateaued. */\n  detectPlateau(): PlateauDetectionResult {\n    if (this.history.length < this.windowSize) {\n      return {\n        plateaued: false,\n        plateauLength: 0,\n        improvementRate: this.improvementRate(),\n        recommendedAction: \"collect more data\",\n      };\n    }\n\n    const recent = this.history.slice(-this.windowSize);\n    const scores = recent.map((p) => p.score);\n    const mean = scores.reduce((a, b) => a + b, 0) / scores.length;\n    const variance = scores.reduce((s, v) => s + (v - mean) ** 2, 0) / scores.length;\n    const stddev = Math.sqrt(variance);\n\n    const improvement = this.improvementRate();\n    const plateaued = stddev < this.plateauThreshold || Math.abs(improvement) < this.plateauThreshold;\n\n    if (plateaued) {\n      this.plateausDetected++;\n    }\n\n    let recommendedAction: string;\n    if (plateaued) {\n      if (this.plateausDetected <= 2) {\n        recommendedAction = \"increase task difficulty or add noise\";\n      } else if (this.plateausDetected <= 5) {\n        recommendedAction = \"switch training objective or reset to checkpoint\";\n      } else {\n        recommendedAction = \"consider model architecture change or curriculum reset\";\n      }\n    } else {\n      recommendedAction = \"continue current strategy\";\n    }\n\n    return {\n      plateaued,\n      plateauLength: this.plateausDetected,\n      improvementRate: improvement,\n      recommendedAction,\n    };\n  }\n\n  /** Get a summary of training progress. */\n  summary(): {\n    iterations: number;\n    currentScore: number;\n    improvementRate: number;\n    plateausDetected: number;\n    plateaued: boolean;\n  } {\n    return {\n      iterations: this.history.length,\n      currentScore: this.currentScore,\n      improvementRate: this.improvementRate(),\n      plateausDetected: this.plateausDetected,\n      plateaued: this.detectPlateau().plateaued,\n    };\n  }\n\n  reset(): void {\n    this.history = [];\n    this.plateausDetected = 0;\n  }\n}\n\n// ── Usage ──────────────────────────────────────────────────────\nasync function main() {\n  // CurriculumLearningScheduler demo\n  const curriculum = new CurriculumLearningScheduler([\n    { level: 1, description: \"Basic addition\", minPerformance: 0.8, maxTasks: 10, taskTemplate: \"Add two numbers (level {level})\" },\n    { level: 2, description: \"Multiplication\", minPerformance: 0.75, maxTasks: 15, taskTemplate: \"Multiply numbers (level {level})\" },\n    { level: 3, description: \"Algebra\", minPerformance: 0.7, maxTasks: 20, taskTemplate: \"Solve equation (level {level})\" },\n  ]);\n\n  for (let i = 0; i < 30; i++) {\n    const score = 0.5 + Math.random() * 0.5;\n    const result = curriculum.recordScore(score);\n    if (result.advanced) {\n      console.log(`Advanced to level ${result.newLevel + 1} after ${i + 1} tasks`);\n    }\n    if (result.completed) break;\n  }\n  console.log(`Curriculum progress: ${(curriculum.progress * 100).toFixed(0)}%`);\n\n  // SelfConsistencyEnsemble demo\n  const ensemble = new SelfConsistencyEnsemble(\n    async (_p) => ({\n      id: randomUUID(),\n      steps: [\"step1\", \"step2\"],\n      answer: Math.random() > 0.4 ? \"42\" : \"7\",\n      confidence: 0.7 + Math.random() * 0.3,\n    }),\n    7,\n  );\n  const consensus = await ensemble.solve(\"What is the meaning of life?\");\n  console.log(`Consensus: ${consensus.consensus} (confidence: ${consensus.confidence.toFixed(2)})`);\n\n  // RejectionSamplingLoop demo\n  const sampler = new RejectionSamplingLoop(\n    async (p) => `Generated: ${p}`,\n    async (o) => o.length * 2 + Math.random() * 10,\n    50,\n  );\n  const kept = await sampler.generateKeepK(\"test prompt\", 20, 5);\n  console.log(`Kept ${kept.length}/${sampler[\"candidates\"].length} candidates`);\n  console.log(`Acceptance rate: ${(sampler.acceptanceRate * 100).toFixed(0)}%`);\n\n  // SkillTransferLoop demo\n  const transfer = new SkillTransferLoop({\n    teacherFn: async (t) => `Teacher answer to: ${t}`,\n    studentFn: async (t) => `Student answer to: ${t}`,\n    judgeFn: async (_t, o) => o.startsWith(\"Teacher\") ? 95 : 65 + Math.random() * 20,\n    transferBatchSize: 3,\n    similarityThreshold: 40,\n  });\n  await transfer.batchTransfer([\"task1\", \"task2\", \"task3\"]);\n  console.log(`Transfers: ${transfer.transferCount}, avg gap: ${transfer.averageGap.toFixed(1)}`);\n\n  // ProgressTracker demo\n  const tracker = new ProgressTracker(5);\n  for (let i = 0; i < 15; i++) {\n    tracker.record(i, 0.5 + Math.random() * 0.05); // near-plateau scores\n  }\n  const plateau = tracker.detectPlateau();\n  console.log(`Plateaued: ${plateau.plateaued}, action: ${plateau.recommendedAction}`);\n}\n\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extend the constitution."
          }), " Add three new principles to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConstitutionalReflectionLoop"
          }), " and implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "principleSeverity"
          }), " field that causes the loop to halt immediately on high-severity violations instead of revising."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Temperature annealing in pair generation."
          }), " Modify ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PreferencePairGenerator"
          }), " to sample candidates at multiple temperatures (0.3, 0.7, 1.0) and track which temperature produced the chosen vs. rejected response. Report statistics."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Iterative pipeline with retrain."
          }), " Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ImprovementPipeline"
          }), " to accumulate preference pairs across multiple batch runs, then call a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "retrain()"
          }), " hook that simulates fine-tuning. After retraining, re-run the pipeline and measure if the improvement delta shrinks (indicating the model internalized the constitution)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "STaR bootstrap simulation."
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StarLoop"
          }), " that generates reasoning traces for math word problems, checks answer correctness against a known answer key, filters incorrect traces, and retrains on the correct subset. Use a simulated model that gets better with each iteration (increasing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "P(correct)"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DPO loss function."
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "computeDpoLoss(params: { policyLogprobs: number[]; refLogprobs: number[]; chosen: boolean[]; beta: number }): number"
          }), " that computes the DPO loss for a batch of pairs. Include a numerical stability guard (prevent ", (0,jsx_runtime.jsx)(_components.code, {
            children: "log(0)"
          }), " with epsilon)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Constitutional chaining."
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConstitutionalChain"
          }), " that runs multiple ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConstitutionalReflectionLoop"
          }), " instances sequentially, each with a different domain-specific constitution (safety, style, factuality). Measure how many total revision rounds are needed across all domains."]
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