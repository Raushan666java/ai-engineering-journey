"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[45138],{

/***/ 30622
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_07_ab_testing_experimental_design_md_69e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-07-ab-testing-experimental-design-md-69e.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_07_ab_testing_experimental_design_md_69e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/07-ab-testing-experimental-design","title":"Chapter 07: A/B Testing & Experimental Design","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":280,"frontMatter":{"id":"07-ab-testing-experimental-design","slug":"/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design","title":"Chapter 07: A/B Testing & Experimental Design","sidebar_label":"Chapter 07: A/B Testing & Experimental Design","sidebar_position":280},"sidebar":"coursesSidebar","previous":{"title":"Chapter 06: Calculus for ML","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/06-calculus-for-ml"},"next":{"title":"Chapter 08: Statistics for ML — Practical","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design.md


const frontMatter = {
	id: '07-ab-testing-experimental-design',
	slug: '/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design',
	title: 'Chapter 07: A/B Testing & Experimental Design',
	sidebar_label: 'Chapter 07: A/B Testing & Experimental Design',
	sidebar_position: 280
};
const contentTitle = 'Chapter 07: A/B Testing & Experimental Design';

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
  "value": "Concept",
  "id": "concept",
  "level": 2
}, {
  "value": "A/B Testing Framework",
  "id": "ab-testing-framework",
  "level": 3
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 3
}, {
  "value": "Advanced Methods",
  "id": "advanced-methods",
  "level": 3
}, {
  "value": "Real Example",
  "id": "real-example",
  "level": 2
}, {
  "value": "Code Example",
  "id": "code-example",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Sample Size and Power Calculation",
  "id": "exercise-1-sample-size-and-power-calculation",
  "level": 3
}, {
  "value": "Exercise 2: Simulated A/B Test with Z-Test",
  "id": "exercise-2-simulated-ab-test-with-z-test",
  "level": 3
}, {
  "value": "Exercise 3: Peeking Simulation",
  "id": "exercise-3-peeking-simulation",
  "level": 3
}, {
  "value": "PYQs",
  "id": "pyqs",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
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
        id: "chapter-07-ab-testing--experimental-design",
        children: "Chapter 07: A/B Testing & Experimental Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the A/B testing framework: hypothesis formulation, primary/secondary/guardrail metrics, randomization, and analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute required sample size from baseline rate, minimum detectable effect, significance level, and power."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply two-proportion z-tests and t-tests to analyze experimental results and build confidence intervals for lifts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain pitfalls such as peeking, novelty effects, Simpson's paradox, and multiple testing, and how to avoid them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze when to use multi-armed bandits or quasi-experimental causal methods (DiD, IV, RDD) instead of classic A/B tests."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A/B testing is the gold standard for evaluating changes in products, models, and user experiences using controlled experiments. As an AI engineer, you will design and analyze A/B tests to validate model improvements, compare recommendation algorithms, and measure the impact of feature changes. This chapter covers the complete A/B testing framework — hypothesis formulation, sample size calculation, power analysis, randomization, stratification, multi-armed bandits, and causal inference with confounding variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hypothesis testing fundamentals (Chapter 03)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability distributions (Chapter 02)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of experimental design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept",
      children: "Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ab-testing-framework",
      children: "A/B Testing Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": A randomized controlled experiment where two variants (A = control, B = treatment) are compared on a key metric."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formulate Hypothesis"
        }), ": What change are you testing? What metric?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define Metrics"
        }), ": Primary metric (success criteria), Secondary metrics (supporting), Guardrail metrics (must not regress)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine Sample Size"
        }), ": Power analysis based on minimum detectable effect (MDE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Randomize"
        }), ": Divide users into A and B groups randomly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run Experiment"
        }), ": Collect data for sufficient duration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze"
        }), ": Hypothesis test, check assumptions, segment analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make Decision"
        }), ": Launch, iterate, or kill"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum Detectable Effect (MDE)"
      }), ": The smallest effect you want to detect. Smaller MDE requires larger sample size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Statistical Power (1 - beta)"
      }), ": Probability of detecting an effect if it truly exists. Typically set to 0.80."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple Testing Correction"
      }), ": When measuring many metrics, adjust significance threshold (Bonferroni, FDR)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Novelty Effect"
      }), ": Users initially engage more with anything new. Run tests long enough for the novelty to wear off."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primacy Effect"
      }), ": Users may resist change initially. Run tests long enough for users to adapt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simpson's Paradox"
      }), ": A trend appears in different groups but disappears or reverses when groups are combined. Caused by confounding variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-methods",
      children: "Advanced Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Armed Bandits (MAB)"
      }), ": Adaptive experimentation that dynamically allocates more traffic to winning variants."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epsilon-Greedy: With probability epsilon, explore; otherwise exploit best variant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thompson Sampling: Bayesian approach using posterior distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces cost of \"losing\" experiments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Causal Inference"
      }), ": Going beyond correlation to establish causation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Randomization is the gold standard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When randomization isn't possible: Difference-in-Differences (DiD), Instrumental Variables (IV), Regression Discontinuity Design (RDD)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Confounding Variables"
      }), ": Variables that affect both treatment assignment and outcome. Randomization breaks the link between confounders and treatment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Define Hypothesis] --> B[Choose Metrics]\n    B --> C{Primary: conversion?<br/>Secondary: revenue?<br/>Guardrail: latency?}\n    C --> D[Calculate Sample Size]\n    D --> E[Randomize Users]\n    E --> F[Run Experiment]\n    F --> G[Check Assumptions<br/>Sample ratio mismatch?<br/>Early peeking?]\n    G --> H[Analyze Results]\n    H --> I{Statistically<br/>Significant?}\n    I -->|Yes| J{Effect Size<br/>Meaningful?}\n    I -->|No| K{Run longer?<br/>or Kill?}\n    J -->|Yes| L[Launch Treatment]\n    J -->|No| M[Consider Business Impact]\n    K --> N[Iterate or Abandon]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph SampleSize[Sample Size Determinants]\n        A[Baseline Rate] --> B[Lower baseline = bigger sample]\n        C[Minimum Detectable Effect] --> D[Smaller MDE = bigger sample]\n        E[Significance Level alpha] --> F[Lower alpha = bigger sample]\n        G[Power 1-beta] --> H[Higher power = bigger sample]\n    end\n    \n    subgraph Pitfalls[A/B Testing Pitfalls]\n        I[Peeking] --> J[Stopping early with significance]\n        K[Novelty Effect] --> L[Initial boost fades over time]\n        M[Network Effects] --> N[Users influence each other]\n        O[Segmentation] --> P[Effect differs by segment]\n        Q[Metrics Correlation] --> R[One metric up, another down]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Life Analogy — Coffee Shop Sign"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your coffee shop wants to know if a new \"Drive-Thru\" lane increases sales:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H0"
        }), ": Drive-thru sales = Counter sales (no difference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H1"
        }), ": Drive-thru sales > Counter sales"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Randomization"
        }), ": Every 10th customer is offered drive-thru vs. counter. Actually, this is flawed — randomization should be at the location or time level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Better design"
        }), ": Randomly select 10 of your 20 shops to get drive-thru. Run for 3 months."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary metric"
        }), ": Average daily revenue per shop"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrail metrics"
        }), ": Customer satisfaction (drive-thru might be faster but less friendly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confounders"
        }), ": Shops in suburban areas might do better with drive-thru. Stratify by location type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Example — Netflix Thumbnail Experiment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Netflix tested whether changing thumbnail images (e.g., from a scene to a character's face) increases play rate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hypothesis"
        }), ": Character face thumbnails increase plays by 2%+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample size"
        }), ": 1 million users (powered to detect 0.5% lift)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duration"
        }), ": 2 weeks (to account for day-of-week effects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result"
        }), ": 1.2% lift, p = 0.003, statistically significant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "But"
        }), ": The effect varied by genre — 3% lift for dramas, 0% for comedies. They launched only for dramas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrail"
        }), ": Watch time per session was unchanged (no quality degradation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom scipy import stats\nimport math\n\nnp.random.seed(42)\nprint(\"=== A/B Testing & Experimental Design ===\\n\")\n\n# ============================================\n# 1. SAMPLE SIZE CALCULATION\n# ============================================\nprint(\"--- Sample Size Calculation ---\")\n\ndef sample_size_two_proportions(p1, p2, alpha=0.05, power=0.80):\n    \"\"\"Calculate required sample size per group for two-proportion z-test.\"\"\"\n    p_pool = (p1 + p2) / 2\n    z_alpha = stats.norm.ppf(1 - alpha/2)\n    z_beta = stats.norm.ppf(power)\n    \n    n = ((z_alpha * math.sqrt(2 * p_pool * (1 - p_pool)) + \n          z_beta * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))))**2 / (p2 - p1)**2\n    return math.ceil(n)\n\n# Example: Current conversion = 5%, want to detect 0.5% lift to 5.5%\nbaseline = 0.05\nmde = 0.005  # 0.5% absolute lift\ntreatment = baseline + mde\n\nn_per_group = sample_size_two_proportions(baseline, treatment)\nprint(f\"Baseline conversion: {baseline*100:.1f}%\")\nprint(f\"Target (MDE = {mde*100:.2f}% lift): {treatment*100:.2f}%\")\nprint(f\"Required sample size per group: {n_per_group:,}\")\nprint(f\"Total: {n_per_group*2:,}\")\n\n# Power curve: how sample size changes with MDE\nprint(f\"\\nSample size vs Minimum Detectable Effect:\")\nfor mde_test in [0.001, 0.002, 0.005, 0.01, 0.02, 0.05]:\n    n_test = sample_size_two_proportions(baseline, baseline + mde_test)\n    print(f\"  MDE = {mde_test*100:.2f}%: n = {n_test:,} per group\")\n\n# ============================================\n# 2. POWER ANALYSIS\n# ============================================\nprint(\"\\n--- Power Analysis ---\")\n\ndef calculate_power(n, p1, p2, alpha=0.05):\n    \"\"\"Calculate power for given sample size.\"\"\"\n    p_pool = (p1 + p2) / 2\n    se = math.sqrt(2 * p_pool * (1 - p_pool) / n)\n    z_alpha = stats.norm.ppf(1 - alpha/2)\n    \n    # Power = P(reject H0 | H1 is true)\n    z_beta = (abs(p2 - p1) - z_alpha * se) / se\n    power = stats.norm.cdf(z_beta)\n    return power\n\nn_test = 50000\npower_achieved = calculate_power(n_test, baseline, treatment)\nprint(f\"With n={n_test:,} per group and MDE={mde*100:.2f}%:\")\nprint(f\"  Achieved power: {power_achieved:.4f}\")\nprint(f\"  {'Adequate (>=0.80)' if power_achieved >= 0.80 else 'Inadequate (<0.80)'}\")\n\n# ============================================\n# 3. TWO-PROPORTION Z-TEST\n# ============================================\nprint(\"\\n--- A/B Test Analysis: Two-Proportion Z-Test ---\")\n\n# Simulate A/B test results\nn_a = n_b = 50000\nconversions_a = int(baseline * n_a)\nconversions_b = int(treatment * n_b)\n\n# Add some noise (actual results may vary)\nnp.random.seed(123)\nconversions_a = np.random.binomial(n_a, baseline)\n# Treatment has true lift of mde\nconversions_b = np.random.binomial(n_b, treatment)\n\np_a = conversions_a / n_a\np_b = conversions_b / n_b\np_pool = (conversions_a + conversions_b) / (n_a + n_b)\n\nse_pool = math.sqrt(p_pool * (1 - p_pool) * (1/n_a + 1/n_b))\nz_stat = (p_b - p_a) / se_pool\np_value = 2 * (1 - stats.norm.cdf(abs(z_stat)))  # two-tailed\n\n# Also use statsmodels-like approach with scipy\n# Actually use proportion_effectsize from scipy\nprint(f\"Group A (Control): {conversions_a}/{n_a} = {p_a*100:.2f}%\")\nprint(f\"Group B (Treatment): {conversions_b}/{n_b} = {p_b*100:.2f}%\")\nprint(f\"Absolute lift: {(p_b - p_a)*100:.4f}%\")\nprint(f\"Relative lift: {((p_b - p_a)/p_a)*100:.2f}%\")\nprint(f\"z-statistic: {z_stat:.4f}\")\nprint(f\"p-value: {p_value:.4f}\")\n\nalpha = 0.05\nif p_value < alpha:\n    print(f\"p < {alpha}: Statistically significant!\")\n    # Confidence interval for the difference\n    se_diff = math.sqrt(p_a * (1-p_a)/n_a + p_b * (1-p_b)/n_b)\n    ci_lower = (p_b - p_a) - 1.96 * se_diff\n    ci_upper = (p_b - p_a) + 1.96 * se_diff\n    print(f\"95% CI for lift: [{ci_lower*100:.4f}%, {ci_upper*100:.4f}%]\")\nelse:\n    print(f\"p >= {alpha}: Not statistically significant.\")\n\n# ============================================\n# 4. CONTINUOUS METRIC A/B TEST (T-TEST)\n# ============================================\nprint(\"\\n--- Continuous Metric A/B Test (t-Test) ---\")\n\n# Revenue per user (highly skewed, so we might log-transform)\nnp.random.seed(456)\nn_users = 2000\n\n# Control group revenue (log-normal distribution)\nrevenue_a = np.random.lognormal(mean=2.0, sigma=0.8, size=n_users)\n# Treatment group with 10% lift\nrevenue_b = np.random.lognormal(mean=2.1, sigma=0.8, size=n_users)\n\n# Standard t-test\nt_stat_cont, p_value_cont = stats.ttest_ind(revenue_b, revenue_a)\nprint(f\"Control: mean={np.mean(revenue_a):.4f}, median={np.median(revenue_a):.4f}\")\nprint(f\"Treatment: mean={np.mean(revenue_b):.4f}, median={np.median(revenue_b):.4f}\")\nprint(f\"t-statistic: {t_stat_cont:.4f}\")\nprint(f\"p-value: {p_value_cont:.4f}\")\n\nif p_value_cont < alpha:\n    print(f\"p < {alpha}: Significant difference in revenue.\")\nelse:\n    print(f\"p >= {alpha}: No significant difference.\")\n\n# Log-transformed t-test (better for skewed data)\nlog_rev_a = np.log(revenue_a + 1)\nlog_rev_b = np.log(revenue_b + 1)\nt_stat_log, p_value_log = stats.ttest_ind(log_rev_b, log_rev_a)\nprint(f\"\\nLog-transformed t-test:\")\nprint(f\"  t-statistic: {t_stat_log:.4f}\")\nprint(f\"  p-value: {p_value_log:.4f}\")\n\n# Non-parametric test (Mann-Whitney U)\nu_stat, p_value_mw = stats.mannwhitneyu(revenue_b, revenue_a, alternative='two-sided')\nprint(f\"\\nMann-Whitney U test:\")\nprint(f\"  U-statistic: {u_stat:.4f}\")\nprint(f\"  p-value: {p_value_mw:.4f}\")\n\n# ============================================\n# 5. SIMPSON'S PARADOX DEMONSTRATION\n# ============================================\nprint(\"\\n--- Simpson's Paradox Demo ---\")\n\n# Overall: treatment seems worse\noverall_data = np.array([\n    # [converted, total] for control and treatment\n    [[180, 1000], [120, 1000]],  # Control: 18%, Treatment: 12% -> Treatment worse!\n])\n\n# But stratified by segment:\n# Segment 1 (small): Control 5/50=10%, Treatment 30/150=20%\n# Segment 2 (large): Control 175/950=18.4%, Treatment 90/850=10.6%\nseg1 = {'control': (5, 50), 'treatment': (30, 150)}\nseg2 = {'control': (175, 950), 'treatment': (90, 850)}\n\nprint(f\"Segment 1: Control {seg1['control'][0]}/{seg1['control'][1]} = {seg1['control'][0]/seg1['control'][1]*100:.1f}%\")\nprint(f\"Segment 1: Treatment {seg1['treatment'][0]}/{seg1['treatment'][1]} = {seg1['treatment'][0]/seg1['treatment'][1]*100:.1f}%\")\nprint(f\"  => Treatment is {'better' if seg1['treatment'][0]/seg1['treatment'][1] > seg1['control'][0]/seg1['control'][1] else 'worse'} in Segment 1\")\n\nprint(f\"\\nSegment 2: Control {seg2['control'][0]}/{seg2['control'][1]} = {seg2['control'][0]/seg2['control'][1]*100:.1f}%\")\nprint(f\"Segment 2: Treatment {seg2['treatment'][0]}/{seg2['treatment'][1]} = {seg2['treatment'][0]/seg2['treatment'][1]*100:.1f}%\")\nprint(f\"  => Treatment is {'better' if seg2['treatment'][0]/seg2['treatment'][1] > seg2['control'][0]/seg2['control'][1] else 'worse'} in Segment 2\")\n\n# Overall\noverall_control = seg1['control'][0] + seg2['control'][0]\noverall_control_n = seg1['control'][1] + seg2['control'][1]\noverall_treatment = seg1['treatment'][0] + seg2['treatment'][0]\noverall_treatment_n = seg1['treatment'][1] + seg2['treatment'][1]\n\nprint(f\"\\nOverall: Control {overall_control}/{overall_control_n} = {overall_control/overall_control_n*100:.1f}%\")\nprint(f\"Overall: Treatment {overall_treatment}/{overall_treatment_n} = {overall_treatment/overall_treatment_n*100:.1f}%\")\nprint(f\"  => Treatment appears {'better' if overall_treatment/overall_treatment_n > overall_control/overall_control_n else 'worse'} overall!\")\nprint(f\"This is Simpson's Paradox! The confounder is the segment distribution.\")\n\n# ============================================\n# 6. EPSILON-GREEDY BANDIT SIMULATION\n# ============================================\nprint(\"\\n--- Epsilon-Greedy Multi-Armed Bandit ---\")\n\ndef epsilon_greedy(true_ctrs, n_rounds=10000, epsilon=0.1):\n    n_arms = len(true_ctrs)\n    counts = np.zeros(n_arms)\n    rewards = np.zeros(n_arms)\n    \n    for _ in range(n_rounds):\n        if np.random.random() < epsilon:\n            # Explore: choose random arm\n            arm = np.random.randint(n_arms)\n        else:\n            # Exploit: choose best arm so far\n            arm = np.argmax(rewards / (counts + 1e-6))\n        \n        # Simulate reward\n        reward = np.random.random() < true_ctrs[arm]\n        counts[arm] += 1\n        rewards[arm] += reward\n    \n    return counts, rewards\n\ntrue_ctrs = [0.05, 0.06, 0.04]  # Arm B (index 1) is best\ncounts, rewards = epsilon_greedy(true_ctrs, n_rounds=10000, epsilon=0.1)\n\nprint(f\"True CTRs: {true_ctrs}\")\nprint(f\"Arm pulls: {counts}\")\nprint(f\"Arm total rewards: {rewards}\")\nprint(f\"Arm empirical CTRs: {rewards / (counts + 1e-6)}\")\nprint(f\"Best arm found: Arm {np.argmax(rewards / (counts + 1e-6))}\")\nprint(f\"Total reward: {np.sum(rewards):.0f}\")\n\n# Compare with A/B testing (equal allocation)\nab_allocation = 10000 / 3\nab_reward = sum(ab_allocation * ctr for ctr in true_ctrs)\nprint(f\"\\nExpected A/B total reward: {ab_reward:.0f}\")\nprint(f\"Bandit improvement: {np.sum(rewards) - ab_reward:.0f} more conversions\")\n\n# ============================================\n# 7. MARTINGALE / EARLY STOPPING CHECK\n# ============================================\nprint(\"\\n--- Do Not Peek: Sequential Testing ---\")\n\n# Simulate peeking every 1000 users\nnp.random.seed(789)\ntrue_effect = 0.003  # 0.3% true lift\np_values_over_time = []\n\nfor i in range(1, 51):  # check 50 times\n    n_so_far = i * 1000\n    # Simulate data with true effect\n    conv_a_seq = np.random.binomial(n_so_far, 0.05)\n    conv_b_seq = np.random.binomial(n_so_far, 0.05 + true_effect)\n    \n    p_a_seq = conv_a_seq / n_so_far\n    p_b_seq = conv_b_seq / n_so_far\n    p_pool_seq = (conv_a_seq + conv_b_seq) / (2 * n_so_far)\n    se_seq = math.sqrt(p_pool_seq * (1 - p_pool_seq) * 2/n_so_far)\n    z_seq = (p_b_seq - p_a_seq) / se_seq\n    p_val_seq = 2 * (1 - stats.norm.cdf(abs(z_seq)))\n    p_values_over_time.append(p_val_seq)\n\n# Would we have stopped early?\nfalse_positives = sum(1 for p in p_values_over_time if p < 0.05)\nprint(f\"Checks performed: {len(p_values_over_time)}\")\nprint(f\"Times p < 0.05 before end: {false_positives}\")\nprint(f\"Type I error rate with peeking: {false_positives/len(p_values_over_time)*100:.1f}% vs nominal 5%\")\n\n# Expected Output (approximate):\n# --- Sample Size Calculation ---\n# Baseline conversion: 5.0%\n# Target (MDE = 0.50% lift): 5.50%\n# Required sample size per group: 15,317\n#\n# --- A/B Test Analysis: Two-Proportion Z-Test ---\n# Group A (Control): 2523/50000 = 5.05%\n# Group B (Treatment): 2717/50000 = 5.43%\n# Absolute lift: 0.39%\n# p-value: 0.0031\n# p < 0.05: Statistically significant!\n#\n# --- Simpson's Paradox Demo ---\n# Treatment appears worse overall!\n# This is Simpson's Paradox!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: How do you calculate the required sample size for an A/B test?"
      }), "\nA: Sample size depends on four factors: (1) Baseline conversion rate (p1), (2) Minimum detectable effect (delta = p2 - p1), (3) Significance level alpha (usually 0.05), (4) Statistical power 1-beta (usually 0.80). Formula: n = (Z_alpha/2 + Z_beta)^2 * (p1*(1-p1) + p2*(1-p2)) / delta^2. Always plan for adequate sample size before running the test — underpowered tests waste time and resources."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the \"peeking problem\" and how do you address it?"
      }), "\nA: Peeking = checking results repeatedly during the experiment and stopping early if significant. This inflates Type I error dramatically (from 5% to potentially 30%+). Solutions: (1) Pre-register the sample size and duration — do not stop early, (2) Use sequential testing methods that adjust for repeated looks (e.g., alpha spending functions, O'Brien-Fleming boundaries), (3) Use Bayesian methods with continuous monitoring, (4) Always report whether sample size was fixed in advance or adapted during the experiment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Explain Simpson's Paradox in A/B testing. How do you prevent it?"
      }), "\nA: Simpson's Paradox occurs when a trend appears in overall data but disappears or reverses within subgroups. In A/B testing, this happens when a confounding variable (e.g., country, device type, user segment) has different distributions between A and B despite randomization — typically due to a bug or non-uniform randomization. Prevention: (1) Verify randomization — check covariate balance between groups, (2) Pre-specify stratification variables, (3) Always analyze key segments (not just overall), (4) Use stratified randomization to ensure balance on known confounders."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Compare A/B testing with Multi-Armed Bandits. When would you use one vs the other?"
      }), "\nA: A/B testing: (1) Equal allocation throughout, (2) Requires pre-determined sample size, (3) Best for long-term decisions, (4) Simpler analysis (frequentist statistics). Multi-Armed Bandits: (1) Adaptive allocation — more traffic to winning variants, (2) Minimizes opportunity cost during the experiment, (3) Best for short-term optimization, (4) More complex analysis (Bayesian). Use A/B testing for: major product launches, features with high implementation cost, causal inference needs. Use MAB for: content optimization, ad selection, small iterative improvements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the difference between a primary metric and a guardrail metric?"
      }), "\nA: Primary metric is the success criterion — what you want to improve (e.g., conversion rate, revenue per user). Guardrail metrics are things you must NOT break (e.g., page load time, error rate, customer satisfaction). A change that improves conversion but crashes the site is worthless. Define both upfront. Also include secondary metrics for supporting evidence and segment metrics for heterogeneity analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How long should you run an A/B test?"
      }), "\nA: Duration depends on: (1) Required sample size — collect enough users, (2) Business cycles — at least one full week (to capture day-of-week effects), ideally 2-4 weeks, (3) Novelty effect — run long enough for initial bias to wear off (1-2 weeks minimum), (4) Weekend/weekend behavior — must include both, (5) Seasonality — avoid holidays unless that's your target period. Rule of thumb: 2 weeks minimum, 4 weeks for high-stakes tests."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What is stratification and when would you use it?"
      }), "\nA: Stratification divides the population into homogeneous subgroups (strata) before randomization, then randomizes within each stratum. Used when: (1) You have known confounding variables (e.g., country, user tier), (2) You want to ensure balance on important covariates, (3) You want to reduce variance (improve statistical power). In ML experiments, stratify by: user geography, device type, subscription tier, or any feature correlated with the outcome."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: How do you handle multiple metrics in an A/B test?"
      }), "\nA: With multiple metrics, the probability of at least one false positive increases (family-wise error rate). Approaches: (1) Pre-register one primary metric — others are secondary/exploratory, (2) Bonferroni correction — alpha_adj = alpha / m (very conservative), (3) Benjamini-Hochberg — controls false discovery rate (FDR), less conservative, (4) Composite metric — combine multiple metrics into one (e.g., Online desirability score), (5) O'Brien's OLS — global test across all metrics. For most product A/B tests, BH correction is a good balance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: How do you detect and handle novelty effects in A/B tests?"
      }), "\nA: Novelty effect = users engage more with anything new, regardless of its actual quality. Detection: (1) Plot the treatment effect over time — if it starts high and decays, novelty is present, (2) Run the test for at least 2-4 weeks, (3) Compare single-use vs returning user behavior. Handling: (1) Run long enough for novelty to wear off, (2) Analyze only \"experienced\" users who have used the feature multiple times, (3) Use a holdout group that never gets the new feature, (4) Report effect by week to show stability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: What is causal inference and when would you use methods like Difference-in-Differences (DiD)?"
      }), "\nA: Causal inference aims to estimate the true causal effect of a treatment. When randomization is impossible (e.g., can't randomly assign users to a new pricing tier), we use quasi-experimental methods. DiD compares the change in outcome for a treated group vs a control group over time. Assumption: in the absence of treatment, both groups would follow parallel trends. Used in: (1) Policy changes where randomization is impossible, (2) Natural experiments (e.g., a feature launch in one region), (3) Evaluating ML model impact after deployment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Statistical power is defined as:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P(Reject H0 | H0 is true)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) P(Reject H0 | H0 is false)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) P(Fail to reject H0 | H0 is true)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P(Fail to reject H0 | H0 is false)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) P(Reject H0 | H0 is false)"
        }), " — power = 1 - beta"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Reducing the Minimum Detectable Effect (MDE) will:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Decrease required sample size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Increase required sample size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Not affect sample size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Decrease the significance level"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Increase required sample size"
        }), " — detecting smaller effects requires more data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: The peeking problem inflates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Statistical power"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Type I error rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Type II error rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Sample size"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Type I error rate"
        }), " — checking results early increases false positive risk"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Stratification in A/B testing helps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Reduce sample size requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Eliminate the need for randomization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Increase the p-value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Make the test one-tailed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) Reduce sample size requirements"
        }), " — stratification reduces variance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Multi-Armed Bandits differ from A/B testing by:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Using equal allocation throughout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Adaptively allocating more traffic to better variants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Requiring larger sample sizes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Not needing randomization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Adaptively allocating more traffic to better variants"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-sample-size-and-power-calculation",
      children: "Exercise 1: Sample Size and Power Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python (SciPy) implementation that computes the required sample size per group for a two-proportion z-test and draws a power curve across minimum detectable effects."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: implement the sample size formula using stats.norm.ppf; compute n for MDEs from 0.1% to 5% at a 5% baseline; verify the achieved power for one (n, MDE) pair with stats.norm.cdf."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: a table of MDE vs required n per group showing n exploding as the MDE shrinks, plus the achieved power for the chosen pair."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-simulated-ab-test-with-z-test",
      children: "Exercise 2: Simulated A/B Test with Z-Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that simulates a 50,000-user-per-group A/B test where the treatment has a true lift, then analyzes it with a two-proportion z-test and a confidence interval."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use np.random.binomial for conversions; compute z-statistic, p-value, and the 95% CI for the lift; repeat once with no true effect and report whether a false positive occurred at alpha = 0.05."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: conversion rates for both groups, lift, p-value, decision, and the CI, followed by the no-effect run's p-value and outcome."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-peeking-simulation",
      children: "Exercise 3: Peeking Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that simulates an experiment with a true lift of 0.3%, checks significance every 1,000 users across 50 checks, and counts how many checks show p < 0.05 before the fixed end."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: track the p-value trajectory with a two-proportion z-test at each check; print the fraction of early significant checks; run the same experiment with a fixed-horizon single test at the end and compare decisions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: the trajectory of p-values, the inflated early-stop rate versus the nominal 5%, and a comparison showing why peeking invalidates the fixed-horizon p-value."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs",
      children: "PYQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1 (Google ML Interview):"
      }), " Your team launches a new search ranking algorithm for 10% of users. After one day, conversion is up 3% with p = 0.04. The team wants to launch to all users. What do you advise?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Do NOT launch based on one day of data. Issues: (1) Peeking — stopping after 1 day inflates Type I error, (2) Day-of-week effects — one day might not be representative, (3) Novelty effect — 3% boost might be users engaging with the novelty, (4) Sample ratio mismatch — algorithm changes might affect which users see results, (5) Seasonality effects — is this a special day? (6) Multiple metrics — check guardrail metrics (revenue, latency, user satisfaction). Recommendation: run for 2-4 weeks, pre-register the test, and check guardrail metrics before launching."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2 (Amazon Applied Scientist):"
      }), " A product manager wants to A/B test a new recommendation widget. They propose testing 10 variants simultaneously to find the best one. What are the statistical concerns and how would you modify the design?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": With 10 variants, comparing all against control requires multiple testing correction. Using Bonferroni: alpha_adj = 0.05/10 = 0.005, requiring much larger sample sizes. Better approach: (1) First, run a small pilot with 2-3 promising variants, (2) Use multi-armed bandit to reduce traffic to poor variants, (3) Use Bayesian hierarchical model that shares information across variants, (4) Use FDR control (Benjamini-Hochberg) instead of Bonferroni, (5) If you must test 10, calculate adjusted sample sizes and warn PM about duration. Also consider: do all 10 need to be tested? Can theory/principles eliminate some?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3 (Meta Data Scientist):"
      }), " Your A/B test shows a 2% conversion lift (p = 0.03) for mobile users but a -1% change (p = 0.40) for desktop users. The overall result is +0.5% (p = 0.15). How do you interpret and what do you recommend?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": This is a heterogeneous treatment effect — the feature works differently on mobile vs desktop. The overall non-significance (p = 0.15) masks a real mobile effect. Recommendations: (1) Test the interaction term: treatment * device_type in a logistic regression. If significant, the effect truly differs by device. (2) Launch for mobile only if the mobile effect is practically significant and the desktop effect is not harmful. (3) Investigate why desktop doesn't benefit — is the widget poorly formatted for desktop? (4) Run a longer test to increase desktop power. (5) Always pre-specify segment analysis to avoid p-hacking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4 (Microsoft Data Scientist):"
      }), " Explain how you would design an experiment to test whether a new AI-powered customer support chatbot reduces resolution time. Include sample size, randomization, metrics, and potential pitfalls."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Design: (1) Randomization at the customer level — half get AI chatbot, half get human-only support. Stratify by: issue complexity, customer tier, language. (2) Primary metric: Average resolution time (in minutes). Guardrails: Customer satisfaction (CSAT score), Escalation rate, Cost per ticket. (3) Sample size: baseline resolution time = 30 min, SD = 15 min, MDE = 2 min (7% reduction), alpha = 0.05, power = 0.80. Using two-sample t-test formula: n = 2 * (1.96 + 0.84)^2 * 15^2 / 2^2 ≈ 441 per group. (4) Duration: 2 weeks minimum. (5) Pitfalls: Chatbot may handle simple issues well but struggle with complex ones — analyze by issue complexity. Novelty effect — users might be more patient with a chatbot initially. Selection bias — users may opt out of chatbot. Seasonality — support volume and issue types vary by day/week."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stopping early when significant"
          }), ": Calling the test at the first sign of significance inflates Type I error. Pre-register sample size and duration. Use sequential testing if early stopping is needed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Running underpowered tests"
          }), ": Tests with insufficient sample size waste resources — they can miss real effects (Type II error) and are more susceptible to random noise. Always calculate required sample size before starting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignoring Simpson's Paradox"
          }), ": Even with randomization, covariate imbalance can occur by chance or due to implementation bugs. Always check covariate balance and analyze key segments separately."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiple testing without correction"
          }), ": Testing 20 metrics with alpha = 0.05 gives an expected 1 false positive per experiment. Use Bonferroni or FDR correction for confirmatory metrics."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusing statistical significance with practical significance"
          }), ": With large n, even tiny effects become significant. Always interpret the effect size and business impact, not just the p-value."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H0"
        }), ": no effect; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "H1"
        }), ": there is an effect"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary metric"
        }), ": success criterion; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrail"
        }), ": must not regress"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MDE"
        }), ": smallest effect worth detecting; smaller MDE = larger n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample size"
        }), ": depends on baseline, MDE, alpha, power"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power"
        }), ": 1-beta = P(detect effect if real); aim for 0.80"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peeking"
        }), ": checking results early; inflates Type I error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Novelty effect"
        }), ": initial engagement boost fades over time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simpson's Paradox"
        }), ": trend reverses in subgroups; check stratification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stratification"
        }), ": randomize within homogeneous subgroups; reduces variance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Armed Bandits"
        }), ": adaptive allocation; minimizes opportunity cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epsilon-greedy"
        }), ": explore with prob epsilon, otherwise exploit best"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thompson Sampling"
        }), ": Bayesian MAB using posterior distributions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Causal inference"
        }), ": estimating causal effects when randomization isn't possible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DiD"
        }), ": Difference-in-Differences for quasi-experimental settings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple testing"
        }), ": Bonferroni (FWER), Benjamini-Hochberg (FDR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always"
        }), ": pre-register, check balance, report effect size + CI"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A/B testing is the primary method for evaluating changes in AI-driven products through randomized controlled experiments. The framework involves formulating hypotheses, calculating sample sizes via power analysis, randomizing users into control and treatment groups, and analyzing results using appropriate statistical tests (z-test for proportions, t-test for continuous metrics). Common pitfalls include early peeking (inflated false positives), Simpson's Paradox (confounding by unobserved variables), novelty effects, and multiple testing without correction. Multi-armed bandits offer an adaptive alternative that minimizes opportunity cost during experimentation. Understanding experimental design and causal inference is essential for AI engineers to rigorously validate model improvements and product changes before deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample Size"
        }), ": Required n grows as the MDE shrinks and power rises - n = (Z_alpha/2 + Z_beta)^2 * (p1(1-p1) + p2(1-p2)) / delta^2; always compute it before launching the experiment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peeking"
        }), ": Checking results repeatedly and stopping at the first significant p-value inflates Type I error from 5% to 30%+ - pre-register sample size and duration or use sequential testing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simpson's Paradox"
        }), ": An overall trend can reverse within segments due to a confounder (e.g., segment mix) - verify covariate balance and always analyze key segments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary vs Guardrail"
        }), ": The primary metric is what you want to improve; guardrail metrics (latency, error rate, satisfaction) are things you must not break - define both before the test."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power"
        }), ": Power = P(reject H0 | H0 false) should be at least 0.80; an underpowered test can miss a real effect (Type II error) and wastes traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Armed Bandits"
        }), ": Bandits allocate more traffic to winning variants, reducing opportunity cost for short-term optimization, but classic A/B tests are better for high-stakes causal decisions."]
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
            children: "Explain the core idea of Chapter 07: A/B Testing & Experimental Design in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chapter 07: A/B Testing & Experimental Design."
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
            children: "Describe a production bug caused by misunderstanding Chapter 07: A/B Testing & Experimental Design. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chapter 07: A/B Testing & Experimental Design from 10 users to 10 million?"
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
            children: "Compare Chapter 07: A/B Testing & Experimental Design with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chapter 07: A/B Testing & Experimental Design."
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
            children: "How does Chapter 07: A/B Testing & Experimental Design behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chapter 07: A/B Testing & Experimental Design run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chapter 07: A/B Testing & Experimental Design that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chapter 07: A/B Testing & Experimental Design explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chapter 07: A/B Testing & Experimental Design\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chapter 07: A/B Testing & Experimental Design to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chapter 07: A/B Testing & Experimental Design (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chapter 07: A/B Testing & Experimental Design and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chapter 07: A/B Testing & Experimental Design-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chapter 07: A/B Testing & Experimental Design interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chapter 07: A/B Testing & Experimental Design in production today?"
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
        }), " Chapter 07: A/B Testing & Experimental Design builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chapter 07: A/B Testing & Experimental Design before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chapter 07: A/B Testing & Experimental Design is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chapter 07: A/B Testing & Experimental Design in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chapter 07: A/B Testing & Experimental Design chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chapter 07: A/B Testing & Experimental Design is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chapter 07: A/B Testing & Experimental Design is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chapter 07: A/B Testing & Experimental Design is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chapter 07: A/B Testing & Experimental Design issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chapter 07: A/B Testing & Experimental Design in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chapter 07: A/B Testing & Experimental Design that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chapter 07: A/B Testing & Experimental Design is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chapter 07: A/B Testing & Experimental Design in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chapter 07: A/B Testing & Experimental Design and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chapter 07: A/B Testing & Experimental Design on an empty input?"
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
            children: "Complete Medium exercises, explain Chapter 07: A/B Testing & Experimental Design to someone else"
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
        children: "Always write a one-line example of Chapter 07: A/B Testing & Experimental Design from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chapter 07: A/B Testing & Experimental Design when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chapter 07: A/B Testing & Experimental Design twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chapter 07: A/B Testing & Experimental Design snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chapter 07: A/B Testing & Experimental Design listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chapter 07: A/B Testing & Experimental Design to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chapter 07: A/B Testing & Experimental Design by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chapter 07: A/B Testing & Experimental Design to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chapter 07: A/B Testing & Experimental Design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chapter 07: A/B Testing & Experimental Design (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chapter 07: A/B Testing & Experimental Design problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chapter 07: A/B Testing & Experimental Design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chapter 07: A/B Testing & Experimental Design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chapter 07: A/B Testing & Experimental Design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chapter 07: A/B Testing & Experimental Design fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chapter 07: A/B Testing & Experimental Design is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chapter 07: A/B Testing & Experimental Design is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chapter 07: A/B Testing & Experimental Design, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chapter 07: A/B Testing & Experimental Design asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 07: A/B Testing & Experimental Design is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chapter 07: A/B Testing & Experimental Design."
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
        children: "Chapter 07: A/B Testing & Experimental Design emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chapter 07: A/B Testing & Experimental Design today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chapter 07: A/B Testing & Experimental Design — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chapter 07: A/B Testing & Experimental Design changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chapter 07: A/B Testing & Experimental Design."
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
        children: "Chapter 07: A/B Testing & Experimental Design appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chapter 07: A/B Testing & Experimental Design helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chapter 07: A/B Testing & Experimental Design concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chapter 07: A/B Testing & Experimental Design skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chapter 07: A/B Testing & Experimental Design to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 07: A/B Testing & Experimental Design is like a recipe"
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
        }), " — this chapter contributes the Chapter 07: A/B Testing & Experimental Design skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-07abtestingexperimentaldesign-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chapter 07: A/B Testing & Experimental Design in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-07abtestingexperimentaldesign-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-07abtestingexperimentaldesign-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chapter 07: A/B Testing & Experimental Design approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-07abtestingexperimentaldesign-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chapter 07: A/B Testing & Experimental Design NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-07abtestingexperimentaldesign-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chapter 07: A/B Testing & Experimental Design applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chapter 07: A/B Testing & Experimental Design (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chapter 07: A/B Testing & Experimental Design (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chapter 07: A/B Testing & Experimental Design-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chapter 07: A/B Testing & Experimental Design in production at scale"
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
        children: "Testing: pytest for unit tests of Chapter 07: A/B Testing & Experimental Design code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chapter 07: A/B Testing & Experimental Design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chapter 07: A/B Testing & Experimental Design code."]
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
        }), " or your IDE's debugger to step through the Chapter 07: A/B Testing & Experimental Design example code."]
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
        children: "Explain Chapter 07: A/B Testing & Experimental Design in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chapter 07: A/B Testing & Experimental Design."
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
        children: "Tell me about a time you debugged a Chapter 07: A/B Testing & Experimental Design problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chapter 07: A/B Testing & Experimental Design is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chapter 07: A/B Testing & Experimental Design."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chapter 07: A/B Testing & Experimental Design logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chapter 07: A/B Testing & Experimental Design without notes"
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
        }), ": a small team uses Chapter 07: A/B Testing & Experimental Design daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chapter 07: A/B Testing & Experimental Design patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chapter 07: A/B Testing & Experimental Design principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chapter 07: A/B Testing & Experimental Design shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chapter 07: A/B Testing & Experimental Design to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical",
        children: "Chapter 08: Statistics for ML — Practical"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 07: A/B Testing & Experimental Design, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chapter 07: A/B Testing & Experimental Design depends on input size and distribution — always benchmark for your own data."
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