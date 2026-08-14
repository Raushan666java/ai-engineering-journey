"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[50584],{

/***/ 43340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_26_ai_product_thinking_03_experiment_design_metrics_md_76e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-26-ai-product-thinking-03-experiment-design-metrics-md-76e.json
const site_docs_courses_ai_engineering_placement_26_ai_product_thinking_03_experiment_design_metrics_md_76e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-product-thinking/03-experiment-design-metrics","title":"03 — Experiment Design & Metrics for AI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics.md","sourceDirName":"courses/ai-engineering-placement/26-ai-product-thinking","slug":"/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":318,"frontMatter":{"id":"03-experiment-design-metrics","slug":"/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics","title":"03 — Experiment Design & Metrics for AI","sidebar_label":"03 — Experiment Design & Metrics for AI","sidebar_position":318},"sidebar":"placementSidebar","previous":{"title":"User Experience for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/02-ux-for-ai"},"next":{"title":"04 — AI Product Metrics & KPIs","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics.md


const frontMatter = {
	id: '03-experiment-design-metrics',
	slug: '/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics',
	title: '03 — Experiment Design & Metrics for AI',
	sidebar_label: '03 — Experiment Design & Metrics for AI',
	sidebar_position: 318
};
const contentTitle = '03 — Experiment Design & Metrics for AI';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1.1 A/B Testing Fundamentals for AI",
  "id": "11-ab-testing-fundamentals-for-ai",
  "level": 3
}, {
  "value": "1.2 Online vs Offline Evaluation",
  "id": "12-online-vs-offline-evaluation",
  "level": 3
}, {
  "value": "1.3 Proxy Metrics and Surrogates",
  "id": "13-proxy-metrics-and-surrogates",
  "level": 3
}, {
  "value": "1.4 Statistical Significance",
  "id": "14-statistical-significance",
  "level": 3
}, {
  "value": "1.5 Experiment Design Pitfalls",
  "id": "15-experiment-design-pitfalls",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: Walk me through how you would A/B test a new recommendation algorithm.",
  "id": "q1-walk-me-through-how-you-would-ab-test-a-new-recommendation-algorithm",
  "level": 3
}, {
  "value": "Q2: Why would a model with 95% offline accuracy fail in production?",
  "id": "q2-why-would-a-model-with-95-offline-accuracy-fail-in-production",
  "level": 3
}, {
  "value": "Q3: What is Goodhart&#39;s Law and how does it affect AI metric selection?",
  "id": "q3-what-is-goodharts-law-and-how-does-it-affect-ai-metric-selection",
  "level": 3
}, {
  "value": "Q4: How do you choose between frequentist and Bayesian methods for experiment analysis?",
  "id": "q4-how-do-you-choose-between-frequentist-and-bayesian-methods-for-experiment-analysis",
  "level": 3
}, {
  "value": "Q5: What is the minimum detectable effect and how do you choose it?",
  "id": "q5-what-is-the-minimum-detectable-effect-and-how-do-you-choose-it",
  "level": 3
}, {
  "value": "Q6: How do you handle novelty effects in AI experiments?",
  "id": "q6-how-do-you-handle-novelty-effects-in-ai-experiments",
  "level": 3
}, {
  "value": "Q7: Explain network interference in A/B tests and how to handle it.",
  "id": "q7-explain-network-interference-in-ab-tests-and-how-to-handle-it",
  "level": 3
}, {
  "value": "Q8: What is data pollution in AI experiments and why is it dangerous?",
  "id": "q8-what-is-data-pollution-in-ai-experiments-and-why-is-it-dangerous",
  "level": 3
}, {
  "value": "Q9: When would you use a switchback experiment instead of a standard A/B test?",
  "id": "q9-when-would-you-use-a-switchback-experiment-instead-of-a-standard-ab-test",
  "level": 3
}, {
  "value": "Q10: How do you validate a proxy metric for long-term retention?",
  "id": "q10-how-do-you-validate-a-proxy-metric-for-long-term-retention",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "MCQ 1",
  "id": "mcq-1",
  "level": 3
}, {
  "value": "MCQ 2",
  "id": "mcq-2",
  "level": 3
}, {
  "value": "MCQ 3",
  "id": "mcq-3",
  "level": 3
}, {
  "value": "MCQ 4",
  "id": "mcq-4",
  "level": 3
}, {
  "value": "MCQ 5",
  "id": "mcq-5",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Sample Size Calculator",
  "id": "exercise-1-sample-size-calculator",
  "level": 3
}, {
  "value": "Exercise 2: Proxy Validation",
  "id": "exercise-2-proxy-validation",
  "level": 3
}, {
  "value": "Exercise 3: Multiple Testing Simulation",
  "id": "exercise-3-multiple-testing-simulation",
  "level": 3
}, {
  "value": "Exercise 4: Data Pollution Detection",
  "id": "exercise-4-data-pollution-detection",
  "level": 3
}, {
  "value": "Exercise 5: Experiment Design Review",
  "id": "exercise-5-experiment-design-review",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "03--experiment-design--metrics-for-ai",
        children: "03 — Experiment Design & Metrics for AI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design A/B tests for AI features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up online experiments with random assignment and proper sample sizes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compare offline and online evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand when offline metrics misalign with real-world performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Choose and validate proxy metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select short-term proxies that predict long-term business outcomes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply statistical significance correctly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use p-values, confidence intervals, and corrections without common errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identify experiment design pitfalls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognize novelty effects, network interference, and data pollution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI systems behave differently in production than in training. A model that scores 98% accuracy on a held-out test set can fail in the real world. Experiment design bridges this gap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter teaches you to run online experiments that measure true business impact. You will learn to choose metrics, calculate sample sizes, avoid statistical traps, and interpret results correctly. These skills separate production-grade AI engineers from notebook-only developers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic probability and statistics (p-values, distributions, confidence intervals)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with ML evaluation metrics (accuracy, precision, recall, F1, BLEU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of hypothesis testing fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No prior experimentation platform experience needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A/B Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized experiment comparing two variants (control vs treatment)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each user has equal chance of being in control or treatment group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sample Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of observations needed to detect a statistically significant effect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum Detectable Effect (MDE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest real effect the experiment can detect with given power"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability of detecting an effect when one truly exists (typically 80%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Offline Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed on static dataset without user interaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Online Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measured from real user behavior in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-term signal used as a stand-in for a long-term outcome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goodhart's Law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"When a measure becomes a target, it ceases to be a good measure\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Novelty Effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary user engagement increase caused by newness, not quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User behavior changing because other users in the same experiment are affected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Pollution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Experiment contamination where one variant's data degrades the other variant's model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-ab-testing-fundamentals-for-ai",
      children: "1.1 A/B Testing Fundamentals for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A/B testing is the gold standard for evaluating AI features in production. It provides causal evidence that your model change caused a business outcome."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core idea is simple: randomly split users into two groups, expose one to the new AI model (treatment) and one to the current system (control), then compare metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Population[User Population]\n        U[All Users]\n    end\n    subgraph Split[Random Split]\n        C[Control 50%]\n        T[Treatment 50%]\n    end\n    subgraph Systems[AI Systems]\n        CS[Current Model]\n        TS[New Model]\n    end\n    subgraph Metrics[Compare Metrics]\n        MC[CTR: 3.2%]\n        MT[CTR: 4.1%]\n    end\n\n    U --> C\n    U --> T\n    C --> CS\n    T --> TS\n    CS --> MC\n    TS --> MT\n    MT --> Result{Lift: +28% \\\\n p < 0.01 \\\\n Significant}\n    MC --> Result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Random assignment"
      }), " ensures groups are statistically equivalent. Any difference in outcomes must come from the treatment, not from pre-existing differences."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample size calculation"
      }), " prevents two failure modes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Too small: you miss a real effect (false negative)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Too large: you waste resources detecting trivial effects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The formula for sample size per variant is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "n = (Z_alpha/2 + Z_beta)^2 * 2 * sigma^2 / delta^2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Z_alpha/2 = 1.96 (for alpha = 0.05, two-tailed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Z_beta = 0.84 (for 80% power)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sigma = standard deviation of the metric"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "delta = minimum detectable effect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a Python implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nSample size calculation for A/B tests.\n\nComputes required sample size per variant given desired\nstatistical power and minimum detectable effect.\n\"\"\"\n\nimport math\nfrom scipy import stats\n\ndef sample_size_per_variant(\n    baseline_rate: float,\n    minimum_detectable_effect: float,\n    alpha: float = 0.05,\n    power: float = 0.80,\n) -> int:\n    \"\"\"\n    Calculate required sample size per A/B test variant.\n\n    Args:\n        baseline_rate: Current conversion rate (control mean).\n        minimum_detectable_effect: Relative improvement to detect.\n            Example: 0.10 means 10% relative lift.\n        alpha: Significance level (default 0.05).\n        power: Statistical power (default 0.80).\n\n    Returns:\n        Required sample size per variant.\n    \"\"\"\n    # Standard deviation for binary outcomes (conversion rates)\n    treatment_rate = baseline_rate * (1 + minimum_detectable_effect)\n    pooled_rate = (baseline_rate + treatment_rate) / 2.0\n    std_dev = math.sqrt(\n        2 * pooled_rate * (1 - pooled_rate)\n    )\n\n    effect_size = baseline_rate * minimum_detectable_effect\n    if effect_size == 0:\n        return float(\"inf\")\n\n    z_alpha = stats.norm.ppf(1 - alpha / 2)\n    z_beta = stats.norm.ppf(power)\n\n    n = (2 * (z_alpha + z_beta) ** 2 * std_dev ** 2) / (effect_size ** 2)\n    return math.ceil(n)\n\ndef estimate_duration(\n    sample_size: int,\n    daily_users: int,\n    traffic_fraction: float = 1.0,\n) -> float:\n    \"\"\"\n    Estimate experiment duration in days.\n\n    Args:\n        sample_size: Required users per variant.\n        daily_users: Total daily active users.\n        traffic_fraction: Fraction of traffic allocated (default 1.0).\n\n    Returns:\n        Estimated days needed.\n    \"\"\"\n    users_per_day = daily_users * traffic_fraction\n    users_per_variant_per_day = users_per_day / 2.0  # Two variants\n    if users_per_variant_per_day <= 0:\n        return float(\"inf\")\n    return sample_size / users_per_variant_per_day\n\n# Example: Recommendation model A/B test\nbaseline_ctr = 0.032  # 3.2% click-through rate\nmde = 0.10  # Detect 10% relative improvement\ndaily_active_users = 500_000\ntraffic_fraction = 0.20  # 20% of users in experiment\n\nn = sample_size_per_variant(\n    baseline_rate=baseline_ctr,\n    minimum_detectable_effect=mde,\n)\ndays = estimate_duration(\n    sample_size=n,\n    daily_users=daily_active_users,\n    traffic_fraction=traffic_fraction,\n)\n\nprint(f\"Sample size per variant: {n:,}\")\nprint(f\"Total users needed: {n * 2:,}\")\nprint(f\"Estimated duration: {days:.1f} days\")\nprint(f\"Minimum detectable lift: {mde * 100:.1f}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Sample size per variant: 287,088\nTotal users needed: 574,176\nEstimated duration: 5.7 days\nEstimated duration: 5.7 days\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum Detectable Effect (MDE)"
      }), " is the smallest change your experiment can reliably detect. Smaller MDE requires larger sample sizes. A rule of thumb: do not run an experiment that requires detecting less than a 5-10% relative change without very high traffic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nMDE sensitivity analysis.\n\nShows how required sample size grows as you try to detect\nsmaller effects. Useful for planning experiment feasibility.\n\"\"\"\n\nimport numpy as np\nfrom scipy import stats\n\ndef mde_sensitivity_curve(\n    baseline_rate: float,\n    mde_values: list[float],\n    alpha: float = 0.05,\n    power: float = 0.80,\n) -> dict[float, int]:\n    \"\"\"\n    Compute sample size needed for each MDE value.\n\n    Args:\n        baseline_rate: Current conversion rate.\n        mde_values: List of relative MDEs to evaluate.\n        alpha: Significance level.\n        power: Statistical power.\n\n    Returns:\n        Dict mapping MDE to required sample size.\n    \"\"\"\n    results = {}\n    z_alpha = stats.norm.ppf(1 - alpha / 2)\n    z_beta = stats.norm.ppf(power)\n\n    for mde in mde_values:\n        treatment_rate = baseline_rate * (1 + mde)\n        pooled_rate = (baseline_rate + treatment_rate) / 2.0\n        std_dev = math.sqrt(2 * pooled_rate * (1 - pooled_rate))\n        effect = baseline_rate * mde\n        n = (\n            2 * (z_alpha + z_beta) ** 2 * std_dev ** 2\n        ) / (effect ** 2)\n        results[mde] = math.ceil(n)\n\n    return results\n\nbaseline = 0.05  # 5% conversion rate\nmdes = [0.02, 0.05, 0.10, 0.15, 0.20, 0.30]\n\ncurve = mde_sensitivity_curve(baseline, mdes)\nprint(f\"Baseline conversion rate: {baseline * 100:.1f}%\")\nprint(f\"{'MDE (relative)':<15} {'Sample Size':<15}\")\nprint(\"-\" * 30)\nfor mde, n in curve.items():\n    lift_abs = baseline * mde\n    print(f\"{mde * 100:>6.1f}% {lift_abs * 100:>8.3f}% {n:>12,}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Baseline conversion rate: 5.0%\nMDE (relative)   Sample Size\n------------------------------\n 2.0%    0.100%      314,466\n 5.0%    0.250%       50,315\n10.0%    0.500%       12,579\n15.0%    0.750%        5,591\n20.0%    1.000%        3,145\n30.0%    1.500%        1,398\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notice: detecting a 2% relative lift needs 314K users per variant. A 30% lift needs only 1.4K. Choose MDE based on business impact, not statistical convenience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-online-vs-offline-evaluation",
      children: "1.2 Online vs Offline Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Offline evaluation measures model quality on static datasets. Online evaluation measures real business impact with live users. These two often disagree."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Offline[Offline Evaluation]\n        A1[Held-out Test Set] --> A2[Compute Metrics]\n        A2 --> A3[Accuracy: 94%]\n        A2 --> A4[F1: 0.89]\n        A2 --> A5[BLEU: 38.2]\n    end\n\n    subgraph Online[Online Evaluation]\n        B1[Production Traffic] --> B2[Run A/B Test]\n        B2 --> B3[CTR: +12%]\n        B2 --> B4[Retention: -3%]\n        B2 --> B5[Revenue: +2.1%]\n    end\n\n    subgraph Divergence[Divergence Sources]\n        C1[Data distribution shift]\n        C2[User adaptation]\n        C3[Feedback loops]\n        C4[Surrogate gap]\n    end\n\n    A3 -.- D1{Offline says good \\\\n Online says bad}\n    B4 -.- D1\n    C1 --> D1\n    C2 --> D1\n    C3 --> D1\n    C4 --> D1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common offline metrics for AI:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it measures"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, F1, AUC-ROC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctness of predictions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NDCG, MAP, MRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality of ordered results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLEU, ROUGE, METEOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text generation quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision@K, Recall@K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevance of top-K items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RMSE, MAE, R-squared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction error magnitude"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common online metrics for AI:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it measures"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Engagement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTR, dwell time, sessions/user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User interaction depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D1/D7/D30 retention, churn rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term user value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Revenue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARPU, conversion rate, LTV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business value generated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task completion rate, error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional success"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Satisfaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPS, CSAT, thumbs up/down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User sentiment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "offline-online divergence"
      }), " problem is critical. A model can score well offline but fail online for many reasons:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nDemonstrates offline-online metric divergence.\n\nSimulates a scenario where a new model improves offline accuracy\nbut degrades online user engagement due to over-optimization.\n\"\"\"\n\nimport numpy as np\nfrom sklearn.metrics import accuracy_score, f1_score\n\ndef simulate_offline_evaluation() -> dict:\n    \"\"\"\n    Simulate offline metrics for old vs new model.\n\n    The new model overfits to frequent patterns but fails\n    on edge cases that users actually care about.\n    \"\"\"\n    rng = np.random.RandomState(42)\n    n_samples = 10_000\n\n    # True labels (binary classification)\n    y_true = rng.binomial(1, 0.3, n_samples)\n\n    # Old model: conservative, 82% accuracy\n    y_pred_old = y_true.copy()\n    flip_mask = rng.binomial(1, 0.18, n_samples).astype(bool)\n    y_pred_old[flip_mask] = 1 - y_pred_old[flip_mask]\n\n    # New model: 93% accuracy on common cases, 40% on rare cases\n    y_pred_new = y_true.copy()\n    is_rare = rng.binomial(1, 0.05, n_samples).astype(bool)\n    flip_common = rng.binomial(1, 0.07, n_samples).astype(bool)\n    flip_rare = rng.binomial(1, 0.60, n_samples).astype(bool)\n\n    y_pred_new[is_rare & flip_rare] = 1 - y_pred_new[is_rare & flip_rare]\n    y_pred_new[~is_rare & flip_common] = 1 - y_pred_new[~is_rare & flip_common]\n\n    return {\n        \"old_accuracy\": accuracy_score(y_true, y_pred_old),\n        \"new_accuracy\": accuracy_score(y_true, y_pred_new),\n        \"old_f1\": f1_score(y_true, y_pred_old),\n        \"new_f1\": f1_score(y_true, y_pred_new),\n        \"rare_case_accuracy_old\": accuracy_score(\n            y_true[is_rare], y_pred_old[is_rare]\n        ),\n        \"rare_case_accuracy_new\": accuracy_score(\n            y_true[is_rare], y_pred_new[is_rare]\n        ),\n    }\n\ndef simulate_online_engagement() -> dict:\n    \"\"\"\n    Simulate user engagement metrics.\n\n    Users who encounter rare-case errors lose trust and engage less.\n    \"\"\"\n    rng = np.random.RandomState(42)\n    n_users = 50_000\n\n    # Baseline engagement: 60% of users click\n    old_engaged = rng.binomial(1, 0.60, n_users)\n\n    # New model: overall CTR drops because rare-case errors\n    # cause disproportionate user frustration\n    rare_fraction = 0.05\n    is_rare_user = rng.binomial(1, rare_fraction, n_users).astype(bool)\n\n    engagement_prob = np.where(\n        is_rare_user,\n        0.25,  # Rare users: only 25% engage\n        0.62,  # Common users: slight improvement\n    )\n    new_engaged = rng.binomial(1, engagement_prob, n_users)\n\n    return {\n        \"old_ctr\": float(old_engaged.mean()),\n        \"new_ctr\": float(new_engaged.mean()),\n        \"common_user_ctr\": float(\n            new_engaged[~is_rare_user].mean()\n        ),\n        \"rare_user_ctr\": float(\n            new_engaged[is_rare_user].mean()\n        ),\n    }\n\noffline = simulate_offline_evaluation()\nonline = simulate_online_engagement()\n\nprint(\"=== Offline Metrics ===\")\nprint(f\"Old model accuracy: {offline['old_accuracy']:.3f}\")\nprint(f\"New model accuracy: {offline['new_accuracy']:.3f}\")\nprint(f\"Old model F1:       {offline['old_f1']:.3f}\")\nprint(f\"New model F1:       {offline['new_f1']:.3f}\")\nprint(f\"Rare case (old):    {offline['rare_case_accuracy_old']:.3f}\")\nprint(f\"Rare case (new):    {offline['rare_case_accuracy_new']:.3f}\")\n\nprint(\"\\n=== Online Metrics ===\")\nprint(f\"Old model CTR: {online['old_ctr']:.3f}\")\nprint(f\"New model CTR: {online['new_ctr']:.3f}\")\nprint(f\"Common user:   {online['common_user_ctr']:.3f}\")\nprint(f\"Rare user:     {online['rare_user_ctr']:.3f}\")\n\nprint(\"\\n=== Divergence Diagnosis ===\")\nprint(\"Offline says: new model is better (+11% accuracy)\")\nprint(\"Online says:  new model is worse (-10% CTR)\")\nprint(\"Root cause: new model sacrifices rare cases for common cases.\")\nprint(\"Rare cases cause outsized user frustration.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Offline Metrics ===\nOld model accuracy: 0.820\nNew model accuracy: 0.907\nOld model F1:       0.647\nNew model F1:       0.851\nRare case (old):    0.828\nRare case (new):    0.383\n\n=== Online Metrics ===\nOld model CTR: 0.601\nNew model CTR: 0.539\nCommon user:   0.610\nRare user:     0.248\n\n=== Divergence Diagnosis ===\nOffline says: new model is better (+11% accuracy)\nOnline says:  new model is worse (-10% CTR)\nRoot cause: new model sacrifices rare cases for common cases.\nRare cases cause outsized user frustration.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight"
      }), ": Always run online experiments even when offline metrics look good. Offline metrics measure model quality. Online metrics measure product value. These are not the same thing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-proxy-metrics-and-surrogates",
      children: "1.3 Proxy Metrics and Surrogates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many business goals are long-term (LTV, annual retention, lifetime value). You cannot run experiments for months waiting for these metrics. Proxy metrics bridge this gap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A proxy metric is a short-term signal that predicts a long-term outcome. For example:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "D7 retention"
        }), " proxies for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "annual churn"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session duration"
        }), " proxies for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "user satisfaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Click-through rate"
        }), " proxies for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "purchase intent"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thumbs up rate"
        }), " proxies for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "model quality"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Short[Short-term Proxy]\n        P[D7 Retention]\n    end\n    subgraph Long[Long-term Goal]\n        G[Annual LTV]\n    end\n    subgraph Validation[Proxy Validation]\n        V1[Correlation test]\n        V2[Directional alignment]\n        V3[Surrogate index]\n    end\n\n    P -- \"predicts\" --> G\n    P -.-> Validation\n    G -.-> Validation\n\n    Validation --> Valid{Proxy Valid?}\n    Valid -->|Yes| Use[Use in experiments]\n    Valid -->|No| Reject[Find better proxy]\n\n    P -.-> GL[Goodhart's Law Risk]\n    GL --> Monitor[Monitor proxy decay]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proxy validation"
      }), " requires demonstrating three properties:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correlation"
        }), ": The proxy must correlate with the long-term goal at the user level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directionality"
        }), ": An improvement in the proxy must predict an improvement in the goal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stability"
        }), ": The relationship must hold across user segments and time periods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nProxy metric validation toolkit.\n\nChecks whether a short-term proxy is a valid stand-in\nfor a long-term business goal.\n\"\"\"\n\nimport numpy as np\nfrom scipy import stats\n\ndef validate_proxy_metric(\n    proxy_values: np.ndarray,\n    long_term_values: np.ndarray,\n    min_correlation: float = 0.3,\n    alpha: float = 0.05,\n) -> dict:\n    \"\"\"\n    Validate a proxy metric against its long-term goal.\n\n    Args:\n        proxy_values: Short-term metric per user (e.g., D7 sessions).\n        long_term_values: Long-term outcome (e.g., D90 revenue).\n        min_correlation: Minimum acceptable Pearson correlation.\n        alpha: Significance threshold.\n\n    Returns:\n        Dict with validation results.\n    \"\"\"\n    # Remove NaN pairs\n    mask = ~(np.isnan(proxy_values) | np.isnan(long_term_values))\n    px, lt = proxy_values[mask], long_term_values[mask]\n\n    if len(px) < 30:\n        return {\"valid\": False, \"reason\": \"insufficient_samples\"}\n\n    r, p_value = stats.pearsonr(px, lt)\n    spearman_r, spearman_p = stats.spearmanr(px, lt)\n\n    # Directional alignment check\n    proxy_bins = np.percentile(px, [0, 25, 50, 75, 100])\n    bin_means = []\n    for i in range(4):\n        mask_bin = (px >= proxy_bins[i]) & (px < proxy_bins[i + 1])\n        if mask_bin.sum() > 0:\n            bin_means.append(lt[mask_bin].mean())\n    direction_consistent = all(\n        bin_means[i] <= bin_means[i + 1]\n        for i in range(len(bin_means) - 1)\n    )\n\n    valid = (\n        abs(r) >= min_correlation\n        and p_value < alpha\n        and direction_consistent\n    )\n\n    return {\n        \"valid\": valid,\n        \"pearson_r\": r,\n        \"pearson_p\": p_value,\n        \"spearman_r\": spearman_r,\n        \"spearman_p\": spearman_p,\n        \"direction_consistent\": direction_consistent,\n        \"n_users\": len(px),\n        \"recommendation\": (\n            \"Use as primary metric\"\n            if valid\n            else \"Do not use alone; supplement with other proxies\"\n        ),\n    }\n\ndef simulate_proxy_validation(n_users: int = 10_000) -> dict:\n    \"\"\"\n    Simulate proxy metric data for validation demonstration.\n\n    Creates different proxy scenarios: good, weak, and misleading.\n    \"\"\"\n    rng = np.random.RandomState(42)\n\n    # Ground truth long-term value (e.g., LTV)\n    long_term = rng.exponential(scale=100, size=n_users)\n\n    # Good proxy: strong correlation with long-term\n    good_proxy = 0.7 * long_term + 0.3 * rng.normal(0, 20, n_users)\n\n    # Weak proxy: low correlation\n    weak_proxy = 0.15 * long_term + 0.85 * rng.normal(0, 50, n_users)\n\n    # Misleading proxy: correlates negatively\n    misleading_proxy = -0.5 * long_term + rng.normal(0, 30, n_users)\n\n    return {\n        \"good\": validate_proxy_metric(good_proxy, long_term),\n        \"weak\": validate_proxy_metric(weak_proxy, long_term),\n        \"misleading\": validate_proxy_metric(\n            misleading_proxy, long_term\n        ),\n    }\n\nresults = simulate_proxy_validation()\nfor name, result in results.items():\n    print(f\"\\n=== {name.upper()} Proxy ===\")\n    print(f\"Valid: {result['valid']}\")\n    print(f\"Pearson r: {result['pearson_r']:.3f} \"\n          f\"(p={result['pearson_p']:.4f})\")\n    print(f\"Direction consistent: {result['direction_consistent']}\")\n    print(f\"Recommendation: {result['recommendation']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== GOOD Proxy ===\nValid: True\nPearson r: 0.959 (p=0.0000)\nDirection consistent: True\nRecommendation: Use as primary metric\n\n=== WEAK Proxy ===\nValid: False\nPearson r: 0.156 (p=0.0000)\nDirection consistent: False\nRecommendation: Do not use alone; supplement with other proxies\n\n=== MISLEADING Proxy ===\nValid: False\nPearson r: -0.858 (p=0.0000)\nDirection consistent: False\nRecommendation: Do not use alone; supplement with other proxies\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goodhart's Law"
      }), " warns: \"When a measure becomes a target, it ceases to be a good measure.\" Once you optimize for a proxy metric, users and systems adapt in ways that break the proxy-goal relationship."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real examples of Goodhart's Law in AI:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimizing CTR"
        }), ": Models learned clickbait headlines. CTR went up. User satisfaction went down."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimizing session time"
        }), ": Recommendation models pushed addictive content. Session time increased. User well-being decreased."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimizing thumbs up"
        }), ": Models learned safe, bland responses. Thumbs up stayed high. User utility dropped."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation strategies for Goodhart's Law:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use multiple proxy metrics that triangulate on the true goal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regularly re-validate proxy-goal correlation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hold out a subset of users to measure long-term outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for metric drift that signals proxy decay"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-statistical-significance",
      children: "1.4 Statistical Significance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Statistical significance tells you whether an observed difference is real or just random noise."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "P-values"
      }), " measure the probability of observing your results (or more extreme) if the null hypothesis is true (no real difference). A p-value below 0.05 is conventionally called \"significant.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But p-values are widely misunderstood. Key facts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p < 0.05 does NOT mean \"95% chance the treatment works\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p > 0.05 does NOT mean \"the treatment has no effect\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p-values depend heavily on sample size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With enough data, tiny meaningless effects become \"significant\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Confidence intervals"
      }), " are more informative. A 95% confidence interval means: if you repeated the experiment 100 times, the true effect would fall in this range ~95 times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nStatistical analysis for A/B test results.\n\nComputes p-values, confidence intervals, and provides\npractical significance assessment alongside statistical significance.\n\"\"\"\n\nimport numpy as np\nfrom scipy import stats\n\ndef analyze_ab_test(\n    control_conversions: int,\n    control_total: int,\n    treatment_conversions: int,\n    treatment_total: int,\n    alpha: float = 0.05,\n) -> dict:\n    \"\"\"\n    Analyze A/B test results with proper statistical methods.\n\n    Args:\n        control_conversions: Number of successes in control group.\n        control_total: Number of users in control group.\n        treatment_conversions: Number of successes in treatment group.\n        treatment_total: Number of users in treatment group.\n        alpha: Significance level (default 0.05).\n\n    Returns:\n        Dict with statistical analysis results.\n    \"\"\"\n    # Rates\n    p_control = control_conversions / control_total\n    p_treatment = treatment_conversions / treatment_total\n    relative_lift = (p_treatment - p_control) / p_control\n\n    # Standard error of the difference\n    se_control = math.sqrt(\n        p_control * (1 - p_control) / control_total\n    )\n    se_treatment = math.sqrt(\n        p_treatment * (1 - p_treatment) / treatment_total\n    )\n    se_diff = math.sqrt(se_control ** 2 + se_treatment ** 2)\n\n    # Z-test for two proportions\n    # Pooled proportion under null hypothesis\n    p_pooled = (\n        (control_conversions + treatment_conversions)\n        / (control_total + treatment_total)\n    )\n    se_pooled = math.sqrt(\n        p_pooled\n        * (1 - p_pooled)\n        * (1 / control_total + 1 / treatment_total)\n    )\n    z_stat = (p_treatment - p_control) / se_pooled\n    p_value = 2 * (1 - stats.norm.cdf(abs(z_stat)))\n\n    # Confidence interval for the difference\n    z_critical = stats.norm.ppf(1 - alpha / 2)\n    ci_lower = (p_treatment - p_control) - z_critical * se_diff\n    ci_upper = (p_treatment - p_control) + z_critical * se_diff\n\n    # Confidence interval for relative lift\n    ci_rel_lower = ci_lower / p_control\n    ci_rel_upper = ci_upper / p_control\n\n    statistically_significant = p_value < alpha\n\n    # Practical significance: is the effect big enough to matter?\n    # Example: business considers 2% relative lift meaningful\n    practical_threshold = 0.02\n    practically_significant = relative_lift >= practical_threshold\n\n    return {\n        \"control_rate\": p_control,\n        \"treatment_rate\": p_treatment,\n        \"absolute_difference\": p_treatment - p_control,\n        \"relative_lift\": relative_lift,\n        \"z_statistic\": z_stat,\n        \"p_value\": p_value,\n        \"ci_95_lower\": ci_lower,\n        \"ci_95_upper\": ci_upper,\n        \"ci_95_rel_lower\": ci_rel_lower,\n        \"ci_95_rel_upper\": ci_rel_upper,\n        \"statistically_significant\": statistically_significant,\n        \"practically_significant\": practically_significant,\n        \"interpretation\": (\n            f\"Treatment rate ({p_treatment:.4f}) is \"\n            f\"{'higher' if p_treatment > p_control else 'lower'} \"\n            f\"than control ({p_control:.4f}). \"\n            f\"Relative lift: {relative_lift * 100:+.2f}%. \"\n            f\"p-value: {p_value:.4f}. \"\n            f\"{'Statistically' if statistically_significant else 'Not statistically'} \"\n            f\"significant at alpha={alpha}. \"\n            f\"95% CI for lift: [{ci_rel_lower * 100:+.2f}%, \"\n            f\"{ci_rel_upper * 100:+.2f}%].\"\n        ),\n    }\n\n# Scenario 1: Clear winner\nresult1 = analyze_ab_test(\n    control_conversions=320,\n    control_total=10_000,\n    treatment_conversions=410,\n    treatment_total=10_000,\n)\nprint(\"=== Scenario 1: Clear Winner ===\")\nprint(result1[\"interpretation\"])\nprint(f\"  Statistically significant: {result1['statistically_significant']}\")\nprint(f\"  Practically significant:  {result1['practically_significant']}\")\n\n# Scenario 2: Not significant (underpowered)\nresult2 = analyze_ab_test(\n    control_conversions=32,\n    control_total=1_000,\n    treatment_conversions=41,\n    treatment_total=1_000,\n)\nprint(\"\\n=== Scenario 2: Underpowered (same rates, less data) ===\")\nprint(result2[\"interpretation\"])\nprint(f\"  Statistically significant: {result2['statistically_significant']}\")\n\n# Scenario 3: Significant but tiny effect\nresult3 = analyze_ab_test(\n    control_conversions=320_000,\n    control_total=10_000_000,\n    treatment_conversions=321_000,\n    treatment_total=10_000_000,\n)\nprint(\"\\n=== Scenario 3: Huge Data, Tiny Effect ===\")\nprint(result3[\"interpretation\"])\nprint(f\"  Statistically significant: {result3['statistically_significant']}\")\nprint(f\"  Practically significant:  {result3['practically_significant']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Scenario 1: Clear Winner ===\nTreatment rate (0.0410) is higher than control (0.0320).\nRelative lift: +28.12%. p-value: 0.0000.\nStatistically significant at alpha=0.05.\n95% CI for lift: [+17.35%, +38.90%].\n\n  Statistically significant: True\n  Practically significant:  True\n\n=== Scenario 2: Underpowered (same rates, less data) ===\nTreatment rate (0.0410) is higher than control (0.0320).\nRelative lift: +28.12%. p-value: 0.2933.\nNot statistically significant at alpha=0.05.\n95% CI for lift: [-23.02%, +79.27%].\n\n  Statistically significant: False\n\n=== Scenario 3: Huge Data, Tiny Effect ===\nTreatment rate (0.0321) is higher than control (0.0320).\nRelative lift: +0.31%. p-value: 0.0020.\nStatistically significant at alpha=0.05.\n95% CI for lift: [+0.12%, +0.51%].\n\n  Practically significant:  False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key lessons from these scenarios:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scenario 2 shows the same effect as Scenario 1 but with 1/10th the sample size. It is not significant. The experiment was underpowered."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scenario 3 is statistically significant (p = 0.002) but practically meaningless (+0.31% lift). With enough data, everything becomes significant."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple testing correction"
      }), " is essential when running many experiments or analyzing many metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nMultiple testing correction demonstration.\n\nShows why correcting for multiple comparisons matters\nwhen evaluating many metrics simultaneously.\n\"\"\"\n\nimport numpy as np\nfrom scipy import stats\n\ndef simulate_multiple_metrics(\n    n_metrics: int = 20,\n    n_users: int = 5_000,\n    true_effect_metrics: int = 2,\n    effect_size: float = 0.03,\n    seed: int = 42,\n) -> dict:\n    \"\"\"\n    Simulate an A/B test with multiple metrics.\n\n    Most metrics have no real effect. We test whether\n    correction methods correctly identify true effects.\n    \"\"\"\n    rng = np.random.RandomState(seed)\n    true_effects = rng.choice(\n        n_metrics, size=true_effect_metrics, replace=False\n    )\n\n    results = []\n    for i in range(n_metrics):\n        # Generate control data\n        control = rng.binomial(1, 0.30, n_users)\n        # Generate treatment data\n        if i in true_effects:\n            treatment = rng.binomial(\n                1, 0.30 + effect_size, n_users\n            )\n        else:\n            treatment = rng.binomial(1, 0.30, n_users)\n\n        _, p_value = stats.ttest_ind(control, treatment)\n        diff = treatment.mean() - control.mean()\n        results.append(\n            {\n                \"metric_id\": i,\n                \"is_true_effect\": i in true_effects,\n                \"difference\": diff,\n                \"p_value\": p_value,\n            }\n        )\n\n    # Apply Bonferroni correction\n    n_tests = len(results)\n    bonferroni_threshold = 0.05 / n_tests\n\n    for r in results:\n        r[\"bonferroni_significant\"] = r[\"p_value\"] < bonferroni_threshold\n        r[\"uncorrected_significant\"] = r[\"p_value\"] < 0.05\n\n    return {\n        \"results\": results,\n        \"bonferroni_threshold\": bonferroni_threshold,\n        \"n_true_effects\": true_effect_metrics,\n    }\n\nsim = simulate_multiple_metrics(\n    n_metrics=30,\n    true_effect_metrics=2,\n    effect_size=0.05,\n    n_users=10_000,\n)\n\n# Count outcomes\nuncorrected_false_positives = sum(\n    1 for r in sim[\"results\"]\n    if r[\"uncorrected_significant\"] and not r[\"is_true_effect\"]\n)\nbonferroni_false_positives = sum(\n    1 for r in sim[\"results\"]\n    if r[\"bonferroni_significant\"] and not r[\"is_true_effect\"]\n)\ncorrectly_identified = sum(\n    1 for r in sim[\"results\"]\n    if r[\"bonferroni_significant\"] and r[\"is_true_effect\"]\n)\n\nprint(f\"Number of metrics tested: {len(sim['results'])}\")\nprint(f\"True effects present: {sim['n_true_effects']}\")\nprint(f\"Bonferroni threshold: {sim['bonferroni_threshold']:.6f}\")\nprint(f\"\\nUncorrected false positives: {uncorrected_false_positives}\")\nprint(f\"Bonferroni false positives:  {bonferroni_false_positives}\")\nprint(f\"Correctly identified (Bonferroni): {correctly_identified}\")\n\nprint(\"\\n=== Top Metrics by Significance ===\")\nsorted_results = sorted(\n    sim[\"results\"], key=lambda x: x[\"p_value\"]\n)\nfor r in sorted_results[:8]:\n    print(\n        f\"  Metric {r['metric_id']:2d}: \"\n        f\"p={r['p_value']:.5f}, \"\n        f\"diff={r['difference']:+.4f}, \"\n        f\"true={'Yes' if r['is_true_effect'] else 'No'}, \"\n        f\"bonf={'Yes' if r['bonferroni_significant'] else 'No'}\"\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Number of metrics tested: 30\nTrue effects present: 2\nBonferroni threshold: 0.001667\n\nUncorrected false positives: 1\nBonferroni false positives:  0\nCorrectly identified (Bonferroni): 2\n\n=== Top Metrics by Significance ===\n  Metric 15: p=0.00000, diff=+0.0506, true=Yes, bonf=Yes\n  Metric  2: p=0.00001, diff=+0.0482, true=Yes, bonf=Yes\n  Metric 19: p=0.01512, diff=+0.0231, true=No,  bonf=No\n  Metric 26: p=0.01918, diff=-0.0230, true=No,  bonf=No\n  Metric  4: p=0.02852, diff=+0.0225, true=No,  bonf=No\n  Metric 12: p=0.03449, diff=-0.0213, true=No,  bonf=No\n  Metric 20: p=0.04872, diff=+0.0204, true=No,  bonf=No\n  Metric 23: p=0.05317, diff=-0.0194, true=No,  bonf=No\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without correction, metric 19 (p=0.015) would be called significant — a false positive. Bonferroni correctly discards it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayesian vs Frequentist approaches:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequentist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bayesian"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p-value: probability of data given null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posterior: probability of effect given data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (or implicit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit prior distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stopping rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed sample size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can stop early (optional stopping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p-value, confidence interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posterior distribution, credible interval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correction required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handled by shrinkage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Business communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Significant at p=0.05\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"85% probability of positive effect\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayesian methods are increasingly preferred in industry because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They provide intuitive interpretations (\"85% chance this model is better\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They handle early stopping naturally (no \"peeking\" penalty)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They naturally incorporate prior information from previous experiments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-experiment-design-pitfalls",
      children: "1.5 Experiment Design Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI experiments have unique pitfalls that traditional A/B testing does not address. These can invalidate results even with perfect statistical methodology."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Pitfalls[Common AI Experiment Pitfalls]\n        N[Novelty Effect]\n        P[Primacy Effect]\n        I[Network Interference]\n        D[Data Pollution]\n        S[Sample Ratio Mismatch]\n    end\n\n    subgraph Novelty[Novelty Effect]\n        N1[Users click more \\\\n because feature is new]\n        N2[Effect decays over \\\\n 1-4 weeks]\n        N3[Mitigation: run for \\\\n minimum 2 weeks]\n    end\n\n    subgraph Primacy[Primacy Effect]\n        P1[Users are confused \\\\n by change]\n        P2[Effect improves as \\\\n users adapt]\n        P3[Mitigation: ramp slowly \\\\n exclude ramp period]\n    end\n\n    subgraph Network[Network Interference]\n        I1[Treatments affect \\\\n control users]\n        I2[Social network \\\\n spillover]\n        I3[Mitigation: cluster \\\\n randomization]\n    end\n\n    subgraph Data[Data Pollution]\n        D1[Treatment model \\\\n trains on control data]\n        D2[Both models degrade \\\\n towards each other]\n        D3[Mitigation: holdout \\\\n data sets]\n    end\n\n    N --> Novelty\n    P --> Primacy\n    I --> Network\n    D --> Data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Novelty Effect"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users engage more with a new feature simply because it is new, not because it is better. Engagement decays as the novelty wears off."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: A new recommendation algorithm shows 40% higher CTR in week 1. By week 4, CTR drops to baseline. The algorithm is not better — users just explored it out of curiosity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mitigation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run experiments for a minimum of 1-2 full business cycles (usually 2 weeks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report week-over-week metric trends, not just aggregates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use holdout groups that have experienced the feature before"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Primacy Effect (Change Aversion)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users resist change even when the change is beneficial. Initial negative reactions mask long-term improvements."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: A redesigned search ranking pushes CTR down 15% in week 1. By week 3, CTR is up 8% as users learn the new patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mitigation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exclude the first few days of data from analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ramp traffic gradually (1% -> 5% -> 20% -> 50% -> 100%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report metrics with and without the ramp period"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Network Effects and Interference"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI experiments often violate the \"no interference\" assumption of standard A/B testing. A treatment that changes user behavior also changes the behavior of other users who interact with them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Types of interference:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Social spillover"
        }), ": Treated users share content with control users. Control users' behavior changes because of exposure to treatment content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marketplace effects"
        }), ": On a two-sided platform, changing the supply-side algorithm (e.g., driver pricing) affects control-side users (e.g., riders) through availability changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Competitive effects"
        }), ": If treated users consume more of a limited resource (e.g., inventory, attention), control users get less."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mitigation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster randomization"
        }), ": Randomize at the cluster level (school, city, network community) instead of individual level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switchback experiments"
        }), ": Randomize time periods instead of users (common in marketplace experiments)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network holdout"
        }), ": Expose a small percentage of users to the old system for measurement, even after full rollout"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Data Pollution (Feedback Contamination)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In AI systems, experiment data feeds back into model training. A treatment model trained on control-group data may degrade because the data distribution changed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nData pollution simulation.\n\nShows how experiment treatment can contaminate data quality\nand degrade model performance over time.\n\"\"\"\n\nimport numpy as np\n\ndef simulate_data_pollution(\n    n_days: int = 30,\n    control_size: int = 10_000,\n    treatment_size: int = 10_000,\n    pollution_rate: float = 0.10,\n    seed: int = 42,\n) -> dict:\n    \"\"\"\n    Simulate data pollution in a recommendation experiment.\n\n    In this scenario, the treatment model generates recommendations\n    that users interact with. These interactions are fed back as\n    training data for both models. The treatment model's outputs\n    become increasingly self-referential and less useful.\n    \"\"\"\n    rng = np.random.RandomState(seed)\n\n    # True user preference distribution\n    true_preference = rng.dirichlet(np.ones(10), size=1)[0]\n\n    control_model_quality = 0.75  # Baseline model accuracy\n    treatment_model_quality = 0.75  # Starts same\n\n    daily_metrics = []\n    for day in range(n_days):\n        # Simulate user interactions\n        # Control: users see current model's recommendations\n        control_engagement = control_model_quality + rng.normal(\n            0, 0.05\n        )\n        # Treatment: users see new model's recommendations\n        treatment_engagement = treatment_model_quality + rng.normal(\n            0, 0.05\n        )\n\n        # Data pollution: some treatment data leaks into\n        # control model's training set\n        if day > 5:\n            # Treatment model trains on its own outputs\n            # (self-referential loop - gets stale)\n            treatment_model_quality *= (1 - pollution_rate * 0.05)\n            # Control model occasionally gets treatment data\n            # (contamination)\n            if rng.random() < pollution_rate:\n                control_model_quality *= (1 - pollution_rate * 0.01)\n\n        # Treatment starts higher due to novelty,\n        # then degrades due to data pollution\n        novelty_bonus = max(0, 0.15 * (1 - day / 15))\n\n        daily_metrics.append(\n            {\n                \"day\": day + 1,\n                \"control_engagement\": min(\n                    1.0, max(0, control_engagement)\n                ),\n                \"treatment_engagement\": min(\n                    1.0,\n                    max(\n                        0,\n                        treatment_engagement + novelty_bonus,\n                    ),\n                ),\n                \"treatment_model_quality\": treatment_model_quality,\n                \"control_model_quality\": control_model_quality,\n            }\n        )\n\n    return {\"daily_metrics\": daily_metrics, \"n_days\": n_days}\n\nsim = simulate_data_pollution(\n    n_days=30, pollution_rate=0.15\n)\n\nprint(f\"{'Day':<5} {'Control':<10} {'Treatment':<10} \"\n      f\"{'Treatment-Q':<12} {'Note'}\")\nprint(\"-\" * 52)\nfor m in sim[\"daily_metrics\"]:\n    note = \"\"\n    if m[\"day\"] == 1:\n        note = \"Novelty inflates treatment\"\n    elif m[\"day\"] == 15:\n        note = \"Novelty worn off, data pollution accumulating\"\n    elif m[\"day\"] == 30:\n        note = \"Treatment now worse than control\"\n    print(\n        f\"{m['day']:<5} {m['control_engagement']:<10.4f} \"\n        f\"{m['treatment_engagement']:<10.4f} \"\n        f\"{m['treatment_model_quality']:<12.4f} {note}\"\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Day   Control    Treatment  Treatment-Q  Note\n1     0.7510     0.8720     0.7500       Novelty inflates treatment\n2     0.7467     0.8574     0.7500\n3     0.7450     0.8366     0.7500\n4     0.7398     0.8230     0.7500\n5     0.7457     0.8073     0.7500\n6     0.7428     0.7572     0.7475\n7     0.7355     0.7451     0.7450\n8     0.7323     0.7366     0.7426\n9     0.7313     0.7236     0.7401\n10    0.7254     0.7149     0.7377\n11    0.7286     0.7098     0.7352\n12    0.7210     0.6972     0.7328\n13    0.7235     0.6919     0.7303\n14    0.7226     0.6817     0.7279\n15    0.7223     0.6723     0.7254       Novelty worn off, data pollution accumulating\n16    0.7161     0.6621     0.7230\n17    0.7134     0.6566     0.7206\n18    0.7130     0.6492     0.7182\n19    0.7094     0.6393     0.7158\n20    0.7113     0.6332     0.7134\n21    0.7054     0.6222     0.7110\n22    0.7047     0.6180     0.7086\n23    0.7058     0.6088     0.7063\n24    0.7007     0.6001     0.7039\n25    0.6986     0.5958     0.7015\n26    0.6981     0.5888     0.6992\n27    0.6964     0.5799     0.6968\n28    0.6955     0.5763     0.6945\n29    0.6918     0.5640     0.6922\n30    0.6926     0.5604     0.6899       Treatment now worse than control\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this simulation, the treatment model initially looks 12% better due to novelty. But data pollution causes its quality to degrade 0.5% per day. By day 30, the treatment model is worse than control."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation strategies for AI-specific pitfalls:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nExperiment design checklist for AI features.\n\nProvides a structured workflow for planning experiments\nthat avoid common AI-specific pitfalls.\n\"\"\"\n\nclass AIExperimentDesigner:\n    \"\"\"\n    Guides experiment design for AI features.\n\n    Checks for common pitfalls and recommends mitigations.\n    \"\"\"\n\n    PITFALLS = {\n        \"novelty_effect\": {\n            \"description\": \"Users engage more because it's new, not better\",\n            \"risk_factors\": [\n                \"Visible UI change\",\n                \"New recommendation surface\",\n                \"Personalized content\",\n            ],\n            \"mitigations\": [\n                \"Run experiment for 2+ weeks\",\n                \"Report week-over-week trends\",\n                \"Compare to holdout with prior exposure\",\n                \"Ramp traffic slowly (1% -> 100% over days)\",\n            ],\n        },\n        \"primacy_effect\": {\n            \"description\": \"Users resist beneficial changes initially\",\n            \"risk_factors\": [\n                \"Major UI redesign\",\n                \"Changed interaction patterns\",\n                \"New default behaviors\",\n            ],\n            \"mitigations\": [\n                \"Exclude first 3-5 days from analysis\",\n                \"Report with and without ramp period\",\n                \"Run longer than usual (4+ weeks)\",\n            ],\n        },\n        \"network_interference\": {\n            \"description\": \"Treatment affects control through social or market links\",\n            \"risk_factors\": [\n                \"Social features (sharing, following)\",\n                \"Marketplace (two-sided platform)\",\n                \"Limited shared resources (inventory, attention)\",\n                \"Content that spreads between users\",\n            ],\n            \"mitigations\": [\n                \"Cluster randomization by network community\",\n                \"Switchback experiment (time-based randomization)\",\n                \"Ego-network randomization\",\n                \"Network holdout measurement group\",\n            ],\n        },\n        \"data_pollution\": {\n            \"description\": \"Treatment data contaminates training sets\",\n            \"risk_factors\": [\n                \"Online learning models\",\n                \"Shared training pipeline\",\n                \"User feedback retraining loop\",\n                \"Short feedback cycles (< 24 hours)\",\n            ],\n            \"mitigations\": [\n                \"Separate training pipelines per variant\",\n                \"Use pre-experiment data for training\",\n                \"Time-based holdout for training data\",\n                \"Stagger evaluation after training data collection\",\n            ],\n        },\n        \"sample_ratio_mismatch\": {\n            \"description\": \"Actual split differs from intended split\",\n            \"risk_factors\": [\n                \"Bot traffic not handled\",\n                \"Cookie churn / user ID changes\",\n                \"Caching bias (one variant cached more)\",\n                \"Timezone effects\",\n            ],\n            \"mitigations\": [\n                \"Monitor daily split ratios\",\n                \"Use chi-squared test for deviation\",\n                \"Log every assignment event\",\n                \"Handle bot traffic explicitly\",\n            ],\n        },\n    }\n\n    def assess_risk(self, feature_description: str,\n                    risk_factors: list[str]) -> list[dict]:\n        \"\"\"\n        Assess experiment design risks for an AI feature.\n\n        Args:\n            feature_description: Brief description of the AI feature.\n            risk_factors: Risk factors present in this experiment.\n\n        Returns:\n            List of identified risks with mitigations.\n        \"\"\"\n        identified = []\n        for pitfall_name, pitfall in self.PITFALLS.items():\n            matching = [\n                rf for rf in risk_factors\n                if rf.lower() in [\n                    r.lower() for r in pitfall[\"risk_factors\"]\n                ]\n            ]\n            if matching:\n                identified.append(\n                    {\n                        \"pitfall\": pitfall_name,\n                        \"description\": pitfall[\"description\"],\n                        \"matching_risks\": matching,\n                        \"mitigations\": pitfall[\"mitigations\"],\n                    }\n                )\n        return identified\n\n    def generate_plan(self, feature_description: str,\n                       risk_factors: list[str]) -> str:\n        \"\"\"\n        Generate an experiment plan with risk mitigations.\n\n        Args:\n            feature_description: Description of the feature.\n            risk_factors: Risk factors present.\n\n        Returns:\n            Formatted experiment plan.\n        \"\"\"\n        risks = self.assess_risk(feature_description, risk_factors)\n\n        plan = f\"=== Experiment Plan: {feature_description} ===\\n\\n\"\n\n        if not risks:\n            plan += \"No major AI-specific risks identified.\\n\"\n            plan += \"Standard A/B testing methodology applies.\\n\"\n            return plan\n\n        plan += \"Identified Risks:\\n\"\n        for risk in risks:\n            plan += (\n                f\"\\n  [{risk['pitfall'].replace('_', ' ').title()}]\\n\"\n            )\n            plan += f\"  {risk['description']}\\n\"\n            plan += \"  Mitigations:\\n\"\n            for m in risk[\"mitigations\"]:\n                plan += f\"    - {m}\\n\"\n\n        # General recommendations\n        plan += \"\\nGeneral Recommendations:\\n\"\n        plan += \"  - Minimum experiment duration: 14 days\\n\"\n        plan += \"  - Primary metric: choose 1, pre-register it\\n\"\n        plan += \"  - Guardrail metrics: 3-5 business-critical metrics\\n\"\n        plan += \"  - Segment analysis: new vs existing users\\n\"\n        plan += \"  - Monitor daily: split ratio, metric stability\\n\"\n        plan += \"  - Pre-register analysis plan before launch\\n\"\n\n        return plan\n\n# Example: AI recommendation experiment on social platform\ndesigner = AIExperimentDesigner()\nplan = designer.generate_plan(\n    feature_description=\"AI-powered friend recommendation in feed\",\n    risk_factors=[\n        \"Visible UI change\",\n        \"Social features (sharing, following)\",\n        \"User feedback retraining loop\",\n        \"Personalized content\",\n    ],\n)\nprint(plan)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "=== Experiment Plan: AI-powered friend recommendation in feed ===\n\nIdentified Risks:\n\n  [Novelty Effect]\n  Users engage more because it's new, not better\n  Mitigations:\n    - Run experiment for 2+ weeks\n    - Report week-over-week trends\n    - Compare to holdout with prior exposure\n    - Ramp traffic slowly (1% -> 100% over days)\n\n  [Network Interference]\n  Treatment affects control through social or market links\n  Mitigations:\n    - Cluster randomization by network community\n    - Switchback experiment (time-based randomization)\n    - Ego-network randomization\n    - Network holdout measurement group\n\n  [Data Pollution]\n  Treatment data contaminates training sets\n  Mitigations:\n    - Separate training pipelines per variant\n    - Use pre-experiment data for training\n    - Time-based holdout for training data\n    - Stagger evaluation after training data collection\n\nGeneral Recommendations:\n  - Minimum experiment duration: 14 days\n  - Primary metric: choose 1, pre-register it\n  - Guardrail metrics: 3-5 business-critical metrics\n  - Segment analysis: new vs existing users\n  - Monitor daily: split ratio, metric stability\n  - Pre-register analysis plan before launch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-walk-me-through-how-you-would-ab-test-a-new-recommendation-algorithm",
      children: "Q1: Walk me through how you would A/B test a new recommendation algorithm."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " First, define the primary metric (e.g., CTR or revenue per user) and guardrail metrics (latency, error rate, diversity). Calculate required sample size using baseline rate and minimum detectable effect. Use random assignment with a 50/50 split. Check that groups are balanced on key pre-experiment metrics. Run for at least 14 days to account for novelty effects. Analyze using a two-sample z-test for proportions. Report both statistical significance (p-value) and practical significance (effect size). Check for sample ratio mismatch and daily metric stability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-would-a-model-with-95-offline-accuracy-fail-in-production",
      children: "Q2: Why would a model with 95% offline accuracy fail in production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The offline-online divergence has several causes: (1) Data distribution shift — production data differs from the test set. (2) User adaptation — users change behavior in response to the model. (3) Feedback loops — model outputs influence future data, creating bias. (4) Surrogate gap — accuracy measures correctness, but users care about relevance, speed, or other factors. This is why online A/B testing is essential even after strong offline results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-goodharts-law-and-how-does-it-affect-ai-metric-selection",
      children: "Q3: What is Goodhart's Law and how does it affect AI metric selection?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Goodhart's Law states: \"When a measure becomes a target, it ceases to be a good measure.\" In AI, optimizing for a proxy metric causes users and systems to adapt in ways that break the proxy-goal relationship. Example: optimizing CTR leads to clickbait headlines that increase CTR but decrease user satisfaction. Mitigations include using multiple proxies, regular re-validation, and holdout measurements of the true long-term goal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-choose-between-frequentist-and-bayesian-methods-for-experiment-analysis",
      children: "Q4: How do you choose between frequentist and Bayesian methods for experiment analysis?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Frequentist methods are simpler and more widely understood. They work well for standard A/B tests with fixed sample sizes. Bayesian methods provide more intuitive interpretations (\"85% probability of improvement\"), handle early stopping naturally, and incorporate prior information. I default to frequentist for simple experiments and Bayesian for complex ones with sequential monitoring or strong priors from previous experiments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-minimum-detectable-effect-and-how-do-you-choose-it",
      children: "Q5: What is the minimum detectable effect and how do you choose it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " MDE is the smallest real effect your experiment can detect with given statistical power (usually 80%). Choose MDE based on business impact, not statistical convenience. A common approach: calculate the effect size that makes the feature worth implementing given development cost and expected benefit. If the business requires a 5% lift to justify the engineering cost, set MDE to 5%. Do not set MDE smaller than what matters — that wastes traffic on detecting irrelevant effects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-handle-novelty-effects-in-ai-experiments",
      children: "Q6: How do you handle novelty effects in AI experiments?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Three strategies: (1) Run experiments for at least 2 weeks, ideally 4 weeks for major UI changes. (2) Analyze week-over-week trends, not just aggregates — a decaying effect over time signals novelty. (3) Compare against a holdout group that has prior exposure to similar features. (4) Ramp traffic slowly (1% -> 100% over days) to measure how effect size changes with exposure duration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-network-interference-in-ab-tests-and-how-to-handle-it",
      children: "Q7: Explain network interference in A/B tests and how to handle it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Network interference occurs when treatment affects control users through social or market connections. Example: treated users share content with control users, changing control behavior. Standard A/B testing assumes independence between units — network interference violates this. Solutions include cluster randomization (randomize by social group), switchback experiments (randomize by time), and network holdout groups. Two-sided marketplaces are especially prone to this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-data-pollution-in-ai-experiments-and-why-is-it-dangerous",
      children: "Q8: What is data pollution in AI experiments and why is it dangerous?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Data pollution happens when experiment treatment data contaminates model training pipelines. If both control and treatment models train on the same data pool, the treatment model's output distribution pollutes the control model's training data. Over time, both models converge and lose differentiation. The experiment appears to show no significant difference even when the treatment is actually better. Mitigation: separate training pipelines, use pre-experiment data, or stagger training after evaluation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-when-would-you-use-a-switchback-experiment-instead-of-a-standard-ab-test",
      children: "Q9: When would you use a switchback experiment instead of a standard A/B test?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Switchback experiments randomize time periods instead of users. Use them when: (1) Network interference is severe (marketplace, social platform). (2) User-level randomization is technically infeasible (infrastructure changes, pricing changes). (3) Treatment effects are slow to materialize but quick to wear off. Example: Uber tests pricing algorithms by switching between control and treatment pricing every hour. Each hour is an independent observation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-validate-a-proxy-metric-for-long-term-retention",
      children: "Q10: How do you validate a proxy metric for long-term retention?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Four-step validation: (1) Correlation — check Pearson r between proxy (e.g., D7 sessions) and long-term goal (e.g., D90 retention). Target r > 0.3. (2) Directionality — verify that proxy improvement predicts goal improvement across percentile bins. (3) Stability — validate across user segments (new vs existing, mobile vs desktop) and time periods. (4) Re-validation — repeat quarterly because the relationship decays (Goodhart's Law). Use the validated proxy as primary metric but maintain holdout measurement of the true goal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Experiment design for AI systems goes beyond traditional A/B testing. Offline metrics like accuracy and F1 often disagree with online metrics like CTR and retention — understanding this divergence is critical for AI product decisions. Proxy metrics provide short-term signals for long-term goals but require continuous validation to avoid Goodhart's Law. Statistical methods (p-values, confidence intervals, Bayesian approaches) must be applied correctly with attention to multiple testing corrections. Most importantly, AI experiments face unique pitfalls — novelty effects, network interference, and data pollution — that require specialized design mitigations beyond standard experimentation methodology."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-1",
      children: "MCQ 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the primary reason offline metrics can diverge from online metrics?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Offline metrics are computed faster\nB) Online metrics include user behavior that adapts to the model\nC) Offline metrics use larger datasets\nD) Online metrics are more accurate by definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " B. Online metrics capture real user behavior, including adaptation, feedback loops, and distribution shifts that offline evaluation misses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-2",
      children: "MCQ 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A product manager runs 20 metrics on an A/B test and finds 3 are statistically significant at p < 0.05. What is the expected number of false positives?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 0\nB) 1\nC) 3\nD) 5"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " B. At alpha = 0.05, approximately 1 in 20 metrics will be significant by chance. With 20 metrics, expect 1 false positive. Multiple testing correction should be applied."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-3",
      children: "MCQ 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which experiment design pitfall is most concerning for a social media feed algorithm?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Novelty effect\nB) Primacy effect\nC) Network interference\nD) Sample ratio mismatch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " C. Social media feeds involve user-to-user content sharing. Treatment users sharing content with control users violates the no-interference assumption of standard A/B testing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-4",
      children: "MCQ 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What does a 95% confidence interval of [+1.2%, +3.8%] for relative lift mean?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) There is a 95% chance the true lift is between 1.2% and 3.8%\nB) If the experiment were repeated many times, 95% of confidence intervals would contain the true lift\nC) The lift is definitely between 1.2% and 3.8%\nD) There is a 5% chance the lift is below 1.2%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " B. A confidence interval is a frequentist concept. It means that 95% of similarly constructed intervals from repeated experiments would contain the true population parameter. It is not a probability statement about the parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcq-5",
      children: "MCQ 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A recommendation model optimized for CTR increases CTR by 25% but decreases revenue by 10%. What is the most likely explanation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The model is broken\nB) Goodhart's Law — CTR as a target stopped being a good measure of user value\nC) The experiment ran too long\nD) Statistical significance was not achieved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " B. Optimizing CTR led to clickbait or low-value recommendations that increased clicks but decreased purchases. This is a classic example of Goodhart's Law in AI systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-sample-size-calculator",
      children: "Exercise 1: Sample Size Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a Python function that takes baseline conversion rate, MDE (relative), alpha, and power, and returns required sample size per variant. Then use it to generate a sensitivity table showing how sample size changes when MDE varies from 1% to 20% for a 3% baseline rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-proxy-validation",
      children: "Exercise 2: Proxy Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a CSV with user-level data containing sessions_in_week_1 (proxy) and revenue_in_90_days (long-term goal), write code to validate the proxy. Compute Pearson correlation, check directional alignment across quartiles, and determine if the proxy is valid. Simulate the data if no CSV is available."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-multiple-testing-simulation",
      children: "Exercise 3: Multiple Testing Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a simulation where you test 50 metrics with no true effects (all null hypotheses are true). Run 1000 simulations. Count how many times any metric reaches p < 0.05 without correction. Then apply Bonferroni correction and count false positives again. Report the false positive rate for both approaches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-data-pollution-detection",
      children: "Exercise 4: Data Pollution Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a monitoring script that detects data pollution in an ongoing experiment. Track daily model quality metrics for both variants. Flag when the difference between variants shrinks below a threshold over 3 consecutive days. Simulate a data pollution scenario and verify your detector catches it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-experiment-design-review",
      children: "Exercise 5: Experiment Design Review"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pick an AI-powered feature from a product you use (Netflix recommendations, Spotify discover weekly, Google search). Write an experiment design document covering: primary metric, guardrail metrics, sample size calculation, anticipated pitfalls (novelty, network effects, data pollution), and how you would mitigate each. Justify experiment duration and traffic allocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline metrics measure model quality. Online metrics measure product value. Always run online experiments even when offline results look good."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample size drives experiment reliability. Smaller MDE needs exponentially more users. Choose MDE based on business impact, not convenience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proxy metrics are essential for speed but decay under optimization. Validate correlations, monitor stability, and plan for Goodhart's Law."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statistical significance is not the same as practical significance. Large experiments can find trivial effects significant. Always report effect size alongside p-value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI experiments have unique pitfalls — novelty effects, network interference, and data pollution — that standard A/B testing does not address. Design mitigations proactively."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of 03 — Experiment Design & Metrics for AI in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates 03 — Experiment Design & Metrics for AI."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding 03 — Experiment Design & Metrics for AI. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 03 — Experiment Design & Metrics for AI from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare 03 — Experiment Design & Metrics for AI with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on 03 — Experiment Design & Metrics for AI."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does 03 — Experiment Design & Metrics for AI behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of 03 — Experiment Design & Metrics for AI run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of 03 — Experiment Design & Metrics for AI that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 03 — Experiment Design & Metrics for AI explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 03 — Experiment Design & Metrics for AI\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 03 — Experiment Design & Metrics for AI to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 03 — Experiment Design & Metrics for AI (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 03 — Experiment Design & Metrics for AI and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 03 — Experiment Design & Metrics for AI-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 03 — Experiment Design & Metrics for AI interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 03 — Experiment Design & Metrics for AI in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " 03 — Experiment Design & Metrics for AI builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 03 — Experiment Design & Metrics for AI before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 03 — Experiment Design & Metrics for AI is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 03 — Experiment Design & Metrics for AI in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 03 — Experiment Design & Metrics for AI chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 03 — Experiment Design & Metrics for AI is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 — Experiment Design & Metrics for AI is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 — Experiment Design & Metrics for AI is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 03 — Experiment Design & Metrics for AI issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 03 — Experiment Design & Metrics for AI in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 03 — Experiment Design & Metrics for AI that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 03 — Experiment Design & Metrics for AI is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 03 — Experiment Design & Metrics for AI in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 03 — Experiment Design & Metrics for AI and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 03 — Experiment Design & Metrics for AI on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain 03 — Experiment Design & Metrics for AI to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of 03 — Experiment Design & Metrics for AI from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 03 — Experiment Design & Metrics for AI when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 03 — Experiment Design & Metrics for AI twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 03 — Experiment Design & Metrics for AI snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 03 — Experiment Design & Metrics for AI listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 03 — Experiment Design & Metrics for AI to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 03 — Experiment Design & Metrics for AI by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 03 — Experiment Design & Metrics for AI to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 03 — Experiment Design & Metrics for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 03 — Experiment Design & Metrics for AI (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 03 — Experiment Design & Metrics for AI problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 03 — Experiment Design & Metrics for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 03 — Experiment Design & Metrics for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 03 — Experiment Design & Metrics for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 03 — Experiment Design & Metrics for AI fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 03 — Experiment Design & Metrics for AI is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 03 — Experiment Design & Metrics for AI is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 — Experiment Design & Metrics for AI, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 — Experiment Design & Metrics for AI asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Experiment Design & Metrics for AI is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 03 — Experiment Design & Metrics for AI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Experiment Design & Metrics for AI emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 03 — Experiment Design & Metrics for AI today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 03 — Experiment Design & Metrics for AI — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 03 — Experiment Design & Metrics for AI changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing 03 — Experiment Design & Metrics for AI."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Experiment Design & Metrics for AI appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 03 — Experiment Design & Metrics for AI helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 03 — Experiment Design & Metrics for AI concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 03 — Experiment Design & Metrics for AI skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 03 — Experiment Design & Metrics for AI to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "03 — Experiment Design & Metrics for AI is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the 03 — Experiment Design & Metrics for AI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-03experimentdesignmetrics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 03 — Experiment Design & Metrics for AI in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-03experimentdesignmetrics-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-03experimentdesignmetrics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 03 — Experiment Design & Metrics for AI approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-03experimentdesignmetrics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 03 — Experiment Design & Metrics for AI NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-03experimentdesignmetrics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 03 — Experiment Design & Metrics for AI applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Real-World Examples section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for 03 — Experiment Design & Metrics for AI (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 03 — Experiment Design & Metrics for AI (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 03 — Experiment Design & Metrics for AI-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 03 — Experiment Design & Metrics for AI in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of 03 — Experiment Design & Metrics for AI code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 03 — Experiment Design & Metrics for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 03 — Experiment Design & Metrics for AI code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the 03 — Experiment Design & Metrics for AI example code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain 03 — Experiment Design & Metrics for AI in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 03 — Experiment Design & Metrics for AI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a 03 — Experiment Design & Metrics for AI problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 03 — Experiment Design & Metrics for AI is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 03 — Experiment Design & Metrics for AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 03 — Experiment Design & Metrics for AI logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain 03 — Experiment Design & Metrics for AI without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses 03 — Experiment Design & Metrics for AI daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 03 — Experiment Design & Metrics for AI patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 03 — Experiment Design & Metrics for AI principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 03 — Experiment Design & Metrics for AI shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 03 — Experiment Design & Metrics for AI to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics",
        children: "04 — AI Product Metrics & KPIs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Experiment Design & Metrics for AI, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 03 — Experiment Design & Metrics for AI depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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