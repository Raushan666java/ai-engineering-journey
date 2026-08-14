"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40533],{

/***/ 75584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_02_probability_basics_md_c2b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-02-probability-basics-md-c2b.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_02_probability_basics_md_c2b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/02-probability-basics","title":"Chapter 02: Probability Basics","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/02-probability-basics.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/02-probability-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/02-probability-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":300,"frontMatter":{"id":"02-probability-basics","slug":"/ai-engineering-placement/24-statistics-mathematics/02-probability-basics","title":"Chapter 02: Probability Basics","sidebar_label":"Chapter 02: Probability Basics","sidebar_position":300},"sidebar":"placementSidebar","previous":{"title":"Chapter 01: Descriptive Statistics","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/01-descriptive-statistics"},"next":{"title":"Chapter 03: Hypothesis Testing","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/02-probability-basics.md


const frontMatter = {
	id: '02-probability-basics',
	slug: '/ai-engineering-placement/24-statistics-mathematics/02-probability-basics',
	title: 'Chapter 02: Probability Basics',
	sidebar_label: 'Chapter 02: Probability Basics',
	sidebar_position: 300
};
const contentTitle = 'Chapter 02: Probability Basics';

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
  "value": "Fundamental Probability Rules",
  "id": "fundamental-probability-rules",
  "level": 3
}, {
  "value": "Probability Distributions",
  "id": "probability-distributions",
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
  "value": "Exercise 1: Bayes&#39; Theorem Calculator",
  "id": "exercise-1-bayes-theorem-calculator",
  "level": 3
}, {
  "value": "Exercise 2: Simulated Distributions vs Theory",
  "id": "exercise-2-simulated-distributions-vs-theory",
  "level": 3
}, {
  "value": "Exercise 3: Central Limit Theorem Demonstration",
  "id": "exercise-3-central-limit-theorem-demonstration",
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
  "value": "Additional Code: Law of Total Probability &amp; Random Variable Simulation",
  "id": "additional-code-law-of-total-probability--random-variable-simulation",
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
    em: "em",
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
        id: "chapter-02-probability-basics",
        children: "Chapter 02: Probability Basics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the three probability axioms and the addition and multiplication rules for combining events."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute conditional probabilities and apply Bayes' theorem to update beliefs with evidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between PMF, PDF, and CDF and when to use each for discrete versus continuous variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Binomial, Poisson, Normal, Uniform, and Exponential distributions to model real-world random processes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the Central Limit Theorem and Law of Large Numbers to justify normal approximations in large samples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Probability theory quantifies uncertainty and randomness, forming the mathematical foundation for machine learning, Bayesian inference, and decision-making under uncertainty. From Naive Bayes classifiers to probabilistic graphical models and generative AI, every ML algorithm relies on probability concepts. This chapter covers core probability rules, Bayes theorem, and the most important probability distributions used in AI engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic set theory (union, intersection, complement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Descriptive statistics (mean, variance — from Chapter 01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High school algebra"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept",
      children: "Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fundamental-probability-rules",
      children: "Fundamental Probability Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probability Axioms"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(A) is always between 0 and 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Sample Space) = 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For mutually exclusive events: P(A ∪ B) = P(A) + P(B)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Addition Rule"
      }), ": P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For mutually exclusive events: P(A ∪ B) = P(A) + P(B)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplication Rule"
      }), ": P(A ∩ B) = P(A) * P(B|A) = P(B) * P(A|B)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For independent events: P(A ∩ B) = P(A) * P(B)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conditional Probability"
      }), ": P(A|B) = P(A ∩ B) / P(B)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayes Theorem"
      }), ": P(A|B) = P(B|A) * P(A) / P(B)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "probability-distributions",
      children: "Probability Distributions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Discrete Distributions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bernoulli"
        }), ": One trial, two outcomes (coin flip)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binomial"
        }), ": n independent Bernoulli trials (number of heads in n flips)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poisson"
        }), ": Number of events in fixed interval (customer arrivals per hour)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Continuous Distributions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uniform"
        }), ": All values equally likely in [a, b]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normal (Gaussian)"
        }), ": Bell-shaped curve, defined by mean μ and variance σ²"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential"
        }), ": Time between events in a Poisson process"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PMF vs PDF vs CDF"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PMF (Probability Mass Function)"
        }), ": P(X = x) for discrete variables. Sums to 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF (Probability Density Function)"
        }), ": f(x) for continuous variables. Area under curve = 1. P(X = x) = 0 for any single point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CDF (Cumulative Distribution Function)"
        }), ": F(x) = P(X ≤ x). Monotonically increasing from 0 to 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph ProbabilityRules[Probability Rules]\n        A[Event A] --> B[P A = 0 to 1]\n        C[Event B] --> D[P A ∪ B = P A + P B - P A ∩ B]\n        D --> E[If Mutually Exclusive<br/>P A ∩ B = 0]\n    end\n    \n    subgraph BayesConcept[Bayes Theorem]\n        F[Prior P A] --> G[Evidence P B]\n        G --> H[Likelihood P B|A]\n        H --> I[Posterior P A|B]\n        I --> J[P A|B = P B|A * P A / P B]\n    end\n    \n    subgraph Distributions[Key Distributions]\n        K[Discrete] --> L[Binomial<br/>n trials, p success]\n        K --> M[Poisson<br/>λ rate per interval]\n        N[Continuous] --> O[Normal<br/>μ, σ² bell curve]\n        N --> P[Uniform<br/>Equal probability]\n        N --> Q[Exponential<br/>Waiting time]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph PMFvsPDF[PMF vs PDF vs CDF]\n        A[PMF<br/>Discrete<br/>P X = x<br/>Bars sum to 1] --> D[CDF<br/>F x = P X ≤ x<br/>0 to 1 increasing]\n        B[PDF<br/>Continuous<br/>fx density<br/>Area = 1] --> D\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Life Analogy — Weather Forecast"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A weather app says \"70% chance of rain today\":"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(Rain) = 0.7"
        }), " — the probability of rain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(No Rain) = 0.3"
        }), " — complement rule"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional"
        }), ": P(Rain | Cloudy) — probability of rain given it's cloudy (much higher than 0.7)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bayes"
        }), ": You see wet streets in the morning. P(Rain | WetStreets) = P(WetStreets|Rain) * P(Rain) / P(WetStreets). If P(WetStreets|Rain) = 0.9, P(Rain) = 0.7, P(WetStreets) = 0.65, then P(Rain|WetStreets) = 0.9 * 0.7 / 0.65 ≈ 0.97"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Example — Spam Detection (Naive Bayes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Naive Bayes classifier for email spam:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prior: P(Spam) = 0.3, P(Not Spam) = 0.7 (30% of emails are spam)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Likelihood: P(\"free money\" | Spam) = 0.05, P(\"free money\" | Not Spam) = 0.001"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Posterior: P(Spam | \"free money\") = 0.05 * 0.3 / (0.05", (0,jsx_runtime.jsx)(_components.em, {
          children: "0.3 + 0.001"
        }), "0.7) = 0.015 / 0.0157 ≈ 0.955"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The email has 95.5% probability of being spam → send to spam folder"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom scipy import stats\nimport math\n\nprint(\"=== Probability Distributions with SciPy ===\\n\")\n\n# ============================================\n# 1. BINOMIAL DISTRIBUTION\n# ============================================\nprint(\"--- Binomial Distribution ---\")\nn, p = 10, 0.3  # 10 trials, 30% success probability\nbinom = stats.binom(n, p)\n\n# PMF: P(X = k) for k = 0, 1, ..., 10\nfor k in [0, 3, 5, 10]:\n    prob = binom.pmf(k)\n    print(f\"P(X = {k}) = {prob:.4f}\")\n\n# CDF: P(X <= k)\nprint(f\"\\nP(X <= 3) = {binom.cdf(3):.4f}\")\nprint(f\"P(X > 5) = {1 - binom.cdf(5):.4f}\")\nprint(f\"Mean = {binom.mean():.2f}, Variance = {binom.var():.2f}, Std = {binom.std():.2f}\")\n\n# ============================================\n# 2. POISSON DISTRIBUTION\n# ============================================\nprint(\"\\n--- Poisson Distribution ---\")\nlam = 5  # average 5 events per hour\npoisson = stats.poisson(lam)\n\n# PMF: P(X = k)\nfor k in [0, 3, 5, 10]:\n    prob = poisson.pmf(k)\n    print(f\"P(X = {k}) = {prob:.4f}\")\n\nprint(f\"\\nP(X <= 3) = {poisson.cdf(3):.4f}\")\nprint(f\"P(X >= 8) = {1 - poisson.cdf(7):.4f}\")\nprint(f\"Mean = {poisson.mean():.2f}, Variance = {poisson.var():.2f}\")\n\n# ============================================\n# 3. NORMAL (GAUSSIAN) DISTRIBUTION\n# ============================================\nprint(\"\\n--- Normal Distribution ---\")\nmu, sigma = 100, 15  # IQ scores: mean=100, std=15\nnorm = stats.norm(mu, sigma)\n\n# PDF at specific points\nfor x in [85, 100, 115, 130]:\n    density = norm.pdf(x)\n    print(f\"PDF at x={x}: {density:.6f}\")\n\n# CDF probabilities\nprint(f\"\\nP(X < 85) = {norm.cdf(85):.4f}  (below average)\")\nprint(f\"P(85 < X < 115) = {norm.cdf(115) - norm.cdf(85):.4f}  (within 1 std)\")\nprint(f\"P(X > 130) = {1 - norm.cdf(130):.4f}  (above 2 std)\")\n\n# Percentiles (inverse CDF)\nprint(f\"\\nPercentiles:\")\nprint(f\"25th percentile (Q1): {norm.ppf(0.25):.2f}\")\nprint(f\"50th percentile (median): {norm.ppf(0.50):.2f}\")\nprint(f\"75th percentile (Q3): {norm.ppf(0.75):.2f}\")\nprint(f\"99th percentile: {norm.ppf(0.99):.2f}\")\n\n# Z-score calculation\nz_130 = (130 - mu) / sigma\nprint(f\"\\nZ-score for x=130: {z_130:.2f}  (2 std above mean)\")\n\n# ============================================\n# 4. UNIFORM DISTRIBUTION\n# ============================================\nprint(\"\\n--- Uniform Distribution ---\")\na, b = 0, 10  # Uniform on [0, 10]\nuniform = stats.uniform(a, b - a)\n\nprint(f\"P(X < 2) = {uniform.cdf(2):.4f}\")\nprint(f\"P(3 < X < 7) = {uniform.cdf(7) - uniform.cdf(3):.4f}\")\nprint(f\"P(X > 9) = {1 - uniform.cdf(9):.4f}\")\nprint(f\"Mean = {uniform.mean():.2f}, Variance = {uniform.var():.2f}\")\n\n# ============================================\n# 5. EXPONENTIAL DISTRIBUTION\n# ============================================\nprint(\"\\n--- Exponential Distribution ---\")\nlam_exp = 0.5  # rate parameter (events per unit time)\nexpon = stats.expon(scale=1/lam_exp)\n\n# P(waiting time < t)\nfor t in [0.5, 1.0, 2.0, 5.0]:\n    prob = expon.cdf(t)\n    print(f\"P(X < {t}) = {prob:.4f}\")\n\nprint(f\"\\nMean (expected wait): {expon.mean():.2f}\")\nprint(f\"P(X > 3) = {1 - expon.cdf(3):.4f}\")\n\n# ============================================\n# 6. BAYES THEOREM EXAMPLE\n# ============================================\nprint(\"\\n--- Bayes Theorem: Medical Test ---\")\n# Disease prevalence: 1%\np_disease = 0.01\np_no_disease = 0.99\n\n# Test accuracy: 99% sensitive, 95% specific\np_positive_given_disease = 0.99    # sensitivity\np_positive_given_no_disease = 0.05  # false positive rate (1 - specificity)\n\n# P(Positive) = P(Pos|Disease)*P(Disease) + P(Pos|NoDisease)*P(NoDisease)\np_positive = (p_positive_given_disease * p_disease + \n              p_positive_given_no_disease * p_no_disease)\n\n# P(Disease|Positive) using Bayes\np_disease_given_positive = (p_positive_given_disease * p_disease) / p_positive\n\nprint(f\"P(Disease) = {p_disease}\")\nprint(f\"P(Positive|Disease) = {p_positive_given_disease}\")\nprint(f\"P(Positive|No Disease) = {p_positive_given_no_disease}\")\nprint(f\"P(Positive) = {p_positive:.4f}\")\nprint(f\"P(Disease|Positive) = {p_disease_given_positive:.4f}\")\nprint(\"=> Even with a positive test, only {:.1f}% chance of having the disease!\".format(p_disease_given_positive * 100))\n\n# ============================================\n# 7. LAW OF LARGE NUMBERS DEMO\n# ============================================\nprint(\"\\n--- Law of Large Numbers ---\")\nnp.random.seed(42)\ntrue_mean = 0.5\nfor n_samples in [10, 100, 1000, 10000, 100000]:\n    samples = np.random.binomial(1, true_mean, n_samples)\n    sample_mean = np.mean(samples)\n    error = abs(sample_mean - true_mean)\n    print(f\"n={n_samples:6d}: sample mean = {sample_mean:.4f}, error = {error:.4f}\")\n\n# ============================================\n# 8. CENTRAL LIMIT THEOREM DEMO\n# ============================================\nprint(\"\\n--- Central Limit Theorem Demo ---\")\nnp.random.seed(42)\npopulation = np.random.exponential(scale=2, size=100000)  # non-normal population\npop_mean = np.mean(population)\npop_std = np.std(population)\n\nn_iterations = 1000\nsample_means = []\nsample_size = 50\n\nfor _ in range(n_iterations):\n    sample = np.random.choice(population, size=sample_size)\n    sample_means.append(np.mean(sample))\n\nprint(f\"Population mean: {pop_mean:.4f}\")\nprint(f\"Mean of sample means: {np.mean(sample_means):.4f}\")\nprint(f\"Population std: {pop_std:.4f}\")\nprint(f\"Std of sample means (SEM): {np.std(sample_means):.4f}\")\nprint(f\"Theoretical SEM (pop_std / sqrt(n)): {pop_std / math.sqrt(sample_size):.4f}\")\n\n# Expected Output (approximate):\n# --- Binomial Distribution ---\n# P(X = 0) = 0.0282\n# P(X = 3) = 0.2668\n# P(X = 10) = 0.0000\n# P(X <= 3) = 0.6496\n# Mean = 3.00, Variance = 2.10\n# \n# --- Bayes Theorem: Medical Test ---\n# P(Disease) = 0.01\n# P(Disease|Positive) = 0.1667\n# => Even with a positive test, only 16.7% chance of having the disease!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain Bayes Theorem in the context of ML model predictions."
      }), "\nA: Bayes Theorem updates prior beliefs with evidence to compute posterior probability. In ML: P(Class|Data) = P(Data|Class) * P(Class) / P(Data). Naive Bayes classifiers use this directly. In Bayesian neural networks, we maintain a distribution over weights and update it as we see data. This is crucial for uncertainty estimation in AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the difference between likelihood and probability?"
      }), "\nA: Probability describes the chance of observing data given fixed parameters: P(Data|Parameters). Likelihood describes how well parameters explain the observed data: L(Parameters|Data) = P(Data|Parameters). Likelihood is not a probability distribution (doesn't sum to 1 over parameters). In ML, maximum likelihood estimation (MLE) finds parameters that maximize the likelihood of observed data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Why is the Normal distribution so important in ML and statistics?"
      }), "\nA: (1) Central Limit Theorem: sums of independent random variables tend toward normal, regardless of the original distribution. (2) Many natural phenomena are approximately normal (heights, measurement errors). (3) Maximum entropy distribution given mean and variance — makes fewest assumptions. (4) Mathematically tractable — closed-form solutions for many problems. (5) Used as the error distribution in linear regression (Gaussian noise assumption)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the Central Limit Theorem and why does it matter for A/B testing?"
      }), "\nA: CLT states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the population distribution. In A/B testing, this means we can use z-tests and t-tests (which assume normality) for sample means even if the underlying metric (e.g., revenue, which is highly skewed) is not normal, as long as sample size is large enough (n > 30)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: When would you use a Poisson distribution vs a Binomial distribution?"
      }), "\nA: Use Binomial when you have a fixed number of trials and binary outcomes (e.g., number of clicks out of 1000 impressions). Use Poisson when you count events in a fixed interval without a fixed upper bound (e.g., number of customer support tickets per hour). Poisson approximates Binomial when n is large and p is small (rare events)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: What is the difference between PMF, PDF, and CDF?"
      }), "\nA: PMF (discrete) gives P(X = x) directly as a probability. PDF (continuous) gives density at x — the probability is the area under the curve, not the value itself (P(X=x) = 0 for continuous). CDF (both) gives P(X ≤ x), monotonically increasing from 0 to 1. CDF is the cumulative sum/integral of PMF/PDF."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: Explain the concept of expectation and variance of a random variable."
      }), "\nA: Expectation E[X] is the long-run average value (weighted by probability). For discrete: E[X] = Σ x * P(X=x). For continuous: E[X] = ∫ x * f(x) dx. Variance Var[X] = E[(X - μ)²] = E[X²] - E[X]² measures spread. Standard deviation = sqrt(Var[X]). Linearity of expectation: E[aX + b] = aE[X] + b (works even for dependent variables)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What is the relationship between Exponential and Poisson distributions?"
      }), "\nA: Poisson models the number of events in a fixed interval (counts). Exponential models the time between consecutive events in a Poisson process (waiting times). If events follow a Poisson process with rate λ, then: (1) Number of events in time t ~ Poisson(λt), (2) Time between events ~ Exponential(λ). Mean of Exponential = 1/λ, Mean of Poisson count = λt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: How is probability used in loss functions for ML?"
      }), "\nA: Many loss functions derive from probabilistic principles: (1) Mean Squared Error = negative log-likelihood for Gaussian distribution (regression). (2) Cross-Entropy Loss = negative log-likelihood for Bernoulli/Categorical distribution (classification). (3) KL Divergence measures difference between predicted and true probability distributions. (4) Maximum likelihood estimation directly optimizes the probability of observed data under the model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: Explain the difference between frequentist and Bayesian probability."
      }), "\nA: Frequentist: probability is the long-run frequency of events. Parameters are fixed (unknown) constants. Only data is random. Bayesian: probability represents degree of belief. Parameters are random variables with distributions. Bayesian incorporates prior knowledge and updates with data using Bayes rule. In ML, frequentist gives point estimates (MLE), Bayesian gives full posterior distributions (uncertainty quantification)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: If P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2, what is P(A ∪ B)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 0.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 0.7"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 0.9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 1.1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 0.7"
        }), " (P(A∪B) = 0.5 + 0.4 - 0.2 = 0.7)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: In a Binomial distribution with n=100 and p=0.5, what are the mean and variance?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Mean=50, Variance=25"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Mean=50, Variance=50"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Mean=25, Variance=25"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Mean=50, Variance=5"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) Mean=50, Variance=25"
        }), " (Mean=np=50, Variance=np(1-p)=50*0.5=25)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What does a PDF value of 0.04 at x=10 mean for a continuous distribution?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P(X=10) = 0.04"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The density at x=10 is 0.04; probability is area under curve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) P(X ≤ 10) = 0.04"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P(X > 10) = 0.04"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The density at x=10 is 0.04; probability is area under curve"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: The probability of a rare event not occurring in a large number of trials is best modeled by:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Binomial with p=0.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Poisson distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Uniform distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Normal distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Poisson distribution"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: If events A and B are independent, which of the following is TRUE?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P(A|B) = P(A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) P(A ∩ B) = 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) P(A ∪ B) = P(A) + P(B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P(A|B) = P(B)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) P(A|B) = P(A)"
        }), " (Independence means knowing B doesn't change probability of A)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-bayes-theorem-calculator",
      children: "Exercise 1: Bayes' Theorem Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python (NumPy/SciPy) implementation that computes the probability of disease given a positive test using Bayes' theorem, and sweeps prevalence from 0.1% to 10% to show how the posterior changes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use the law of total probability to compute P(Positive); print the posterior P(Disease|Positive) for each prevalence value; state the sensitivity and specificity used."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: a table of prevalence vs posterior showing that a 99%-accurate test still gives a low posterior for very rare diseases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-simulated-distributions-vs-theory",
      children: "Exercise 2: Simulated Distributions vs Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that simulates a Binomial and a Poisson distribution with NumPy, estimates PMF values from the samples, and compares them to the theoretical PMF from scipy.stats."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use np.random.binomial and np.random.poisson; compute mean and variance from samples and compare with np and lambda; repeat with increasing n to show convergence (Law of Large Numbers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: empirical vs theoretical probabilities with errors shrinking as the number of samples grows."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-central-limit-theorem-demonstration",
      children: "Exercise 3: Central Limit Theorem Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that draws repeated samples from a highly skewed exponential population, computes the mean of each sample, and verifies that the distribution of sample means becomes approximately normal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use stats.normaltest on the sample means; compare the standard deviation of sample means with the theoretical SEM (population std / sqrt(sample size)); test sample sizes 10, 30, 100."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: printed SEM comparison and normality test results showing the sampling distribution approaching normal as n increases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs",
      children: "PYQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1 (Google ML Interview):"
      }), " You are building a model to predict whether a user will click on an ad. The click-through rate is 2%. You have 10,000 impressions. What is the probability of getting exactly 200 clicks? What distribution would you use and why?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Use Binomial(n=10000, p=0.02). P(X=200) = C(10000,200) * (0.02)^200 * (0.98)^9800. Since n is large and p is small, we can approximate with Poisson(λ=np=200): P(X=200) ≈ e^(-200) * 200^200 / 200!. Using normal approximation (np>5 and n(1-p)>5): N(μ=200, σ²=196), P(X=200) ≈ 0 (continuous, zero probability for exact value in normal). In practice, use a binomial test or Poisson GLM for rare events."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2 (Amazon Applied Scientist):"
      }), " You observe that customers who buy product A have a 30% chance of also buying product B, while the overall probability of buying B is 5%. Product A has a 10% purchase rate. If a customer buys product B, what is the probability they also bought product A?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Using Bayes Theorem: P(A|B) = P(B|A) * P(A) / P(B) = 0.30 * 0.10 / 0.05 = 0.03 / 0.05 = 0.60. So there is a 60% chance that a customer who bought B also bought A. This is used in recommendation systems for \"customers who bought this also bought\" features."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3 (Meta Data Scientist):"
      }), " Explain how the Central Limit Theorem applies to estimating the average time users spend on a new feature. How large should your sample be?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": CLT ensures the sampling distribution of mean time spent is approximately normal for large n, even if individual times are highly skewed (some users spend seconds, others hours). Required n depends on the population distribution: (1) For reasonably symmetric distributions, n=30 is sufficient. (2) For highly skewed distributions, n=100-500 may be needed. (3) Rule of thumb: n > 30 for CLT to work reasonably. (4) Check with bootstrap: resample with replacement and check if the bootstrap distribution looks normal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4 (Microsoft Data Scientist):"
      }), " In a medical test scenario, the disease prevalence is 1%, the test is 99% accurate (both sensitivity and specificity are 99%). A person tests positive. What is the probability they actually have the disease? Explain the intuition behind this counterintuitive result."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": P(Disease|Positive) = 0.99 * 0.01 / (0.99", (0,jsx_runtime.jsx)(_components.em, {
          children: "0.01 + 0.01"
        }), "0.99) = 0.0099 / 0.0198 = 0.50. Only 50%! Intuition: even though the test is 99% accurate, the disease is so rare (1%) that false positives (1% of 99% = 0.99% of population) are nearly as numerous as true positives (99% of 1% = 0.99% of population). This is why you never mass-screen for rare diseases without a second confirmatory test."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusing P(A|B) with P(B|A)"
          }), ": Falling for the \"prosecutor's fallacy\" — the probability of evidence given innocence is NOT the probability of innocence given evidence. P(HairMatch | Innocent) ≠ P(Innocent | HairMatch)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Assuming independence without verification"
          }), ": Multiplying probabilities of events that are not independent leads to wrong answers. For example, P(Rain ∩ Cloudy) ≠ P(Rain) * P(Cloudy) because rain and clouds are strongly dependent."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Using Normal distribution for count data"
          }), ": Using a normal distribution (continuous) for count data like \"number of purchases\" (discrete, non-negative) can give impossible predictions (negative purchases). Use Poisson or Negative Binomial for counts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Misinterpreting p-values as P(Hypothesis|Data)"
          }), ": The p-value is P(Data|Null Hypothesis), not P(Null Hypothesis|Data). This is a direct application of confusing P(A|B) with P(B|A) — see Bayes theorem."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Forgetting that P(X=x) = 0 for continuous distributions"
          }), ": For continuous random variables, the probability of any exact value is zero. Always compute probabilities over intervals using CDF difference."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three axioms"
        }), ": P(A) in [0,1], P(S)=1, P(A∪B)=P(A)+P(B) if mutually exclusive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Addition rule"
        }), ": P(A∪B) = P(A) + P(B) - P(A∩B)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiplication rule"
        }), ": P(A∩B) = P(A) * P(B|A)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bayes Theorem"
        }), ": P(A|B) = P(B|A)*P(A)/P(B) — updates prior with evidence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent"
        }), ": P(A∩B) = P(A)P(B), P(A|B) = P(A)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binomial"
        }), ": n trials, p success per trial; Mean=np, Var=np(1-p)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poisson"
        }), ": rare events in interval; Mean=Var=λ"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normal"
        }), ": μ mean, σ² variance; 68-95-99.7 rule for 1-2-3 σ"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uniform"
        }), ": all values equally likely in [a,b]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential"
        }), ": waiting time between Poisson events; Mean=1/λ"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLT"
        }), ": sample means ≈ normal for large n, regardless of population shape"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PMF"
        }), " for discrete, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF"
        }), " for continuous, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CDF"
        }), " for both (cumulative probability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Law of Large Numbers"
        }), ": sample mean converges to population mean as n→∞"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Probability theory provides the mathematical framework for handling uncertainty in AI and machine learning systems. The core rules (addition, multiplication, Bayes theorem) govern how probabilities combine, while probability distributions (Binomial, Poisson, Normal, Uniform, Exponential) model different types of random processes. Understanding the difference between discrete (PMF) and continuous (PDF/CDF) distributions is essential for choosing appropriate models and loss functions. The Central Limit Theorem and Law of Large Numbers justify why normal approximations work in large samples, enabling statistical inference in A/B testing and model evaluation. Mastery of these fundamentals is required for Bayesian methods, probabilistic graphical models, and uncertainty-aware AI systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(A|B) vs P(B|A)"
        }), ": Confusing these two is the prosecutor's fallacy - p-values are P(Data|H0), never P(H0|Data); use Bayes' theorem to invert conditional probabilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bayes Theorem"
        }), ": The posterior P(A|B) = P(B|A)*P(A)/P(B) explains why even a 99% accurate test gives only ~16.7% posterior probability for a 1% prevalence disease."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poisson vs Binomial"
        }), ": Use Poisson for counts in a fixed interval with no upper bound and Binomial for a fixed number of independent binary trials; Poisson approximates Binomial for large n and small p."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLT"
        }), ": The sampling distribution of the mean becomes normal as n grows regardless of the population shape - this is why t-tests and z-tests work for skewed metrics like revenue with n > 30."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF vs PMF"
        }), ": P(X = x) = 0 for continuous variables - always compute probabilities over intervals using CDF differences, never evaluate the PDF at a single point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Law of Large Numbers"
        }), ": The sample mean converges to the population mean as n grows; a single small sample can deviate wildly from the true probability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-code-law-of-total-probability--random-variable-simulation",
      children: "Additional Code: Law of Total Probability & Random Variable Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom scipy import stats\n\n# Law of Total Probability\n# P(A) = sum(P(A|B_i) * P(B_i))\nprint(\"=== Law of Total Probability ===\")\n\n# Three customer segments: New, Regular, VIP\np_segments = [0.5, 0.3, 0.2]  # P(New)=0.5, P(Regular)=0.3, P(VIP)=0.2\n# Purchase probability given segment\np_purchase_given_segment = [0.1, 0.4, 0.7]\n\n# Overall purchase probability\np_purchase = sum(p * p_g for p, p_g in zip(p_segments, p_purchase_given_segment))\nprint(f\"P(Purchase) = {p_purchase:.3f}\")\n\n# Random variable simulation: generate samples from mixed distribution\nn_samples = 10000\nsegments = np.random.choice([0, 1, 2], size=n_samples, p=p_segments)\npurchases = np.zeros(n_samples)\nfor seg in range(3):\n    mask = segments == seg\n    n_seg = np.sum(mask)\n    purchases[mask] = np.random.binomial(1, p_purchase_given_segment[seg], n_seg)\n\nprint(f\"Simulated P(Purchase) = {np.mean(purchases):.3f} (matches theory)\")\n\n# Law of Large Numbers demonstration\nprint(\"\\n=== Law of Large Numbers: Coin Flips ===\")\np_heads = 0.5\nfor n_flips in [10, 100, 1000, 10000, 100000]:\n    flips = np.random.binomial(1, p_heads, n_flips)\n    prop = np.mean(flips)\n    error = abs(prop - p_heads)\n    print(f\"n={n_flips:6d}: P(Heads)={prop:.4f}, error={error:.4f}\")\n\n# Central Limit Theorem: sum of uniforms\nprint(\"\\n=== Central Limit Theorem: Sum of 30 Uniform Variables ===\")\nn_experiments = 10000\nn_per_sum = 30\nsums = np.sum(np.random.uniform(0, 1, (n_experiments, n_per_sum)), axis=1)\n# Standardize\nz_sums = (sums - np.mean(sums)) / np.std(sums, ddof=1)\n# Check approximate normality\n_, p_norm = stats.normaltest(z_sums)\nprint(f\"Normality test p-value: {p_norm:.4f}\")\nprint(f\"Mean of sums: {np.mean(sums):.4f} (expected {n_per_sum*0.5:.4f})\")\nprint(f\"Std of sums: {np.std(sums, ddof=1):.4f} (expected {np.sqrt(n_per_sum/12):.4f})\")\nprint(f\"Distribution of sums is approximately normal (CLT confirmed)\")\n"
      })
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
            children: "Explain the core idea of Chapter 02: Probability Basics in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chapter 02: Probability Basics."
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
            children: "Describe a production bug caused by misunderstanding Chapter 02: Probability Basics. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chapter 02: Probability Basics from 10 users to 10 million?"
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
            children: "Compare Chapter 02: Probability Basics with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chapter 02: Probability Basics."
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
            children: "How does Chapter 02: Probability Basics behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chapter 02: Probability Basics run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chapter 02: Probability Basics that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chapter 02: Probability Basics explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chapter 02: Probability Basics\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chapter 02: Probability Basics to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chapter 02: Probability Basics (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chapter 02: Probability Basics and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chapter 02: Probability Basics-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chapter 02: Probability Basics interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chapter 02: Probability Basics in production today?"
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
        }), " Chapter 02: Probability Basics builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chapter 02: Probability Basics before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chapter 02: Probability Basics is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chapter 02: Probability Basics in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chapter 02: Probability Basics chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chapter 02: Probability Basics is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chapter 02: Probability Basics is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chapter 02: Probability Basics is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chapter 02: Probability Basics issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chapter 02: Probability Basics in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chapter 02: Probability Basics that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chapter 02: Probability Basics is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chapter 02: Probability Basics in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chapter 02: Probability Basics and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chapter 02: Probability Basics on an empty input?"
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
            children: "Complete Medium exercises, explain Chapter 02: Probability Basics to someone else"
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
        children: "Always write a one-line example of Chapter 02: Probability Basics from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chapter 02: Probability Basics when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chapter 02: Probability Basics twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chapter 02: Probability Basics snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chapter 02: Probability Basics listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chapter 02: Probability Basics to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chapter 02: Probability Basics by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chapter 02: Probability Basics to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chapter 02: Probability Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chapter 02: Probability Basics (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chapter 02: Probability Basics problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chapter 02: Probability Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chapter 02: Probability Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chapter 02: Probability Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chapter 02: Probability Basics fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chapter 02: Probability Basics is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chapter 02: Probability Basics is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chapter 02: Probability Basics, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chapter 02: Probability Basics asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 02: Probability Basics is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chapter 02: Probability Basics."
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
        children: "Chapter 02: Probability Basics emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chapter 02: Probability Basics today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chapter 02: Probability Basics — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chapter 02: Probability Basics changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chapter 02: Probability Basics."
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
        children: "Chapter 02: Probability Basics appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chapter 02: Probability Basics helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chapter 02: Probability Basics concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chapter 02: Probability Basics skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chapter 02: Probability Basics to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 02: Probability Basics is like a recipe"
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
        }), " — this chapter contributes the Chapter 02: Probability Basics skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-02probabilitybasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chapter 02: Probability Basics in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-02probabilitybasics-flash2",
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
      "data-qid": "24statisticsmathematics-02probabilitybasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chapter 02: Probability Basics approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-02probabilitybasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chapter 02: Probability Basics NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-02probabilitybasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chapter 02: Probability Basics applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chapter 02: Probability Basics (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chapter 02: Probability Basics (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chapter 02: Probability Basics-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chapter 02: Probability Basics in production at scale"
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
        children: "Testing: pytest for unit tests of Chapter 02: Probability Basics code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chapter 02: Probability Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chapter 02: Probability Basics code."]
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
        }), " or your IDE's debugger to step through the Chapter 02: Probability Basics example code."]
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
        children: "Explain Chapter 02: Probability Basics in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chapter 02: Probability Basics."
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
        children: "Tell me about a time you debugged a Chapter 02: Probability Basics problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chapter 02: Probability Basics is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chapter 02: Probability Basics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chapter 02: Probability Basics logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chapter 02: Probability Basics without notes"
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
        }), ": a small team uses Chapter 02: Probability Basics daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chapter 02: Probability Basics patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chapter 02: Probability Basics principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chapter 02: Probability Basics shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chapter 02: Probability Basics to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing",
        children: "Chapter 03: Hypothesis Testing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 02: Probability Basics, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chapter 02: Probability Basics depends on input size and distribution — always benchmark for your own data."
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