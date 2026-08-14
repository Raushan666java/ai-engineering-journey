"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[91435],{

/***/ 19168
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_03_hypothesis_testing_md_f26_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-03-hypothesis-testing-md-f26.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_03_hypothesis_testing_md_f26_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/03-hypothesis-testing","title":"Chapter 03: Hypothesis Testing","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":277,"frontMatter":{"id":"03-hypothesis-testing","slug":"/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing","title":"Chapter 03: Hypothesis Testing","sidebar_label":"Chapter 03: Hypothesis Testing","sidebar_position":277},"sidebar":"placementSidebar","previous":{"title":"Chapter 02: Probability Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/02-probability-basics"},"next":{"title":"Chapter 04: Correlation & Regression Analysis","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing.md


const frontMatter = {
	id: '03-hypothesis-testing',
	slug: '/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing',
	title: 'Chapter 03: Hypothesis Testing',
	sidebar_label: 'Chapter 03: Hypothesis Testing',
	sidebar_position: 277
};
const contentTitle = 'Chapter 03: Hypothesis Testing';

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
  "value": "The Hypothesis Testing Framework",
  "id": "the-hypothesis-testing-framework",
  "level": 3
}, {
  "value": "Type I and Type II Errors",
  "id": "type-i-and-type-ii-errors",
  "level": 3
}, {
  "value": "Key Statistical Tests",
  "id": "key-statistical-tests",
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
  "value": "Exercise 1: One-Sample t-Test and Confidence Interval",
  "id": "exercise-1-one-sample-t-test-and-confidence-interval",
  "level": 3
}, {
  "value": "Exercise 2: Two-Group Comparison with Welch and Mann-Whitney",
  "id": "exercise-2-two-group-comparison-with-welch-and-mann-whitney",
  "level": 3
}, {
  "value": "Exercise 3: Multiple Testing Simulation",
  "id": "exercise-3-multiple-testing-simulation",
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
        id: "chapter-03-hypothesis-testing",
        children: "Chapter 03: Hypothesis Testing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the hypothesis testing framework: null and alternative hypotheses, significance level alpha, and the p-value decision rule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between Type I and Type II errors and how power (1 - beta) depends on effect size and sample size."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute and interpret t-tests (one-sample, two-sample, paired), z-tests, chi-square tests, and ANOVA using SciPy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply confidence intervals to determine statistical significance by checking whether the null value lies inside the interval."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze results by distinguishing statistical significance from practical significance and applying multiple testing corrections."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hypothesis testing is a statistical framework for making data-driven decisions under uncertainty, answering questions like \"Is this new ML model truly better than the baseline?\" or \"Does this feature actually improve user engagement?\" As an AI engineer, you will use hypothesis testing daily to validate model improvements, compare algorithms, and assess feature importance. This chapter covers all major hypothesis tests with Python implementations and practical interpretation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability basics (random variables, distributions — Chapter 02)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normal distribution properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of sampling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept",
      children: "Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-hypothesis-testing-framework",
      children: "The Hypothesis Testing Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), ": State the hypotheses"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Null Hypothesis (H₀)"
        }), ": No effect, no difference, status quo (e.g., new model accuracy = baseline accuracy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative Hypothesis (H₁ or Ha)"
        }), ": There is an effect/difference (e.g., new model accuracy > baseline accuracy)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), ": Choose significance level (α)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typically α = 0.05 (5% chance of false positive)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common values: 0.01, 0.05, 0.10"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3"
      }), ": Choose test statistic and compute it"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4"
      }), ": Compute p-value"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5"
      }), ": Make decision"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If p-value < α: Reject H₀ (statistically significant result)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If p-value ≥ α: Fail to reject H₀ (not statistically significant)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-i-and-type-ii-errors",
      children: "Type I and Type II Errors"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H₀ True"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H₀ False"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reject H₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type I Error (False Positive) α"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct Decision (True Positive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail to Reject H₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct Decision (True Negative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type II Error (False Negative) β"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type I Error (α)"
        }), ": Rejecting a true null hypothesis. \"False alarm.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type II Error (β)"
        }), ": Failing to reject a false null hypothesis. \"Miss.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power"
        }), " = 1 - β: Probability of correctly rejecting a false null hypothesis."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-statistical-tests",
      children: "Key Statistical Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "t-Test"
      }), ": Compares means when population standard deviation is unknown."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-sample: Compare sample mean to known value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-sample (independent): Compare means of two independent groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paired: Compare means of same group at two time points"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "z-Test"
      }), ": Compares means when population standard deviation is known (or n is very large)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chi-Square Test"
      }), ": Tests association between categorical variables."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goodness-of-fit: Does observed distribution match expected?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independence: Are two categorical variables independent?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ANOVA (Analysis of Variance)"
      }), ": Compares means of three or more groups."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-way: One factor, multiple groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two-way: Two factors, multiple groups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Confidence Intervals"
      }), ": Range that contains the true population parameter with a certain confidence level (e.g., 95% CI)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[State H₀ and H₁] --> B[Set α significance level]\n    B --> C[Collect data and compute test statistic]\n    C --> D[Calculate p-value]\n    D --> E{p-value < α?}\n    E -->|Yes| F[Reject H₀<br/>Statistically Significant]\n    E -->|No| G[Fail to Reject H₀<br/>Not Significant]\n    F --> H[Report effect size + CI]\n    G --> H\n    \n    subgraph Errors[Error Types]\n        I[Type I: False Positive<br/>Reject true H₀<br/>Probability = α]\n        J[Type II: False Negative<br/>Fail to reject false H₀<br/>Probability = β]\n    end\n    \n    subgraph Power[Statistical Power]\n        K[Power = 1 - β<br/>Depends on: Effect Size<br/>Sample Size<br/>α level<br/>Test Type]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph TestSelection[Test Selection Guide]\n        A[What are you comparing?]\n        A --> B{Number of groups?}\n        B -->|One group| C{Data type?}\n        C -->|Continuous| D[One-sample t-test<br/>or z-test]\n        C -->|Categorical| E[Chi-square goodness-of-fit]\n        B -->|Two groups| F{Independent or paired?}\n        F -->|Independent| G[Two-sample t-test<br/>or Mann-Whitney U]\n        F -->|Paired| H[Paired t-test<br/>or Wilcoxon signed-rank]\n        B -->|Three+ groups| I{One or two factors?}\n        I -->|One factor| J[One-way ANOVA]\n        I -->|Two factors| K[Two-way ANOVA]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Life Analogy — Coffee Delivery Time"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You claim a new coffee shop delivers faster than your current one (25 min average)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H₀"
        }), ": New shop mean delivery time = 25 minutes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H₁"
        }), ": New shop mean delivery time < 25 minutes (one-tailed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "α"
        }), ": 0.05"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You order 20 times, get sample mean = 22 min, sample std = 4 min"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "t-statistic"
        }), ": (22-25)/(4/√20) = -3/0.894 = -3.35"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p-value"
        }), ": 0.0017"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Since p < 0.05: Reject H₀. New coffee shop is genuinely faster!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If p-value were 0.08: Fail to reject H₀. The 3-minute difference could be due to random chance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Example — Model A/B Test"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your team developed a new recommendation algorithm. You want to prove it improves CTR."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H₀"
        }), ": CTR_new — CTR_old = 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H₁"
        }), ": CTR_new — CTR_old > 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "α"
        }), ": 0.01 (conservative, since deploying is expensive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power analysis"
        }), ": How many users per group to detect a 0.5% lift?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You run the test for 2 weeks with 50,000 users per group"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result"
        }), ": New CTR = 3.2%, Old CTR = 3.0%, p = 0.003"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conclusion"
        }), ": Reject H₀. Deploy new model (but monitor for degradation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom scipy import stats\nimport math\n\nnp.random.seed(42)\nprint(\"=== Hypothesis Testing with SciPy ===\\n\")\n\n# ============================================\n# 1. ONE-SAMPLE T-TEST\n# ============================================\nprint(\"--- One-Sample t-Test ---\")\n# A factory claims their batteries last 100 hours. Test 30 batteries.\npopulation_mean = 100\nsample = np.array([98, 102, 95, 99, 101, 97, 96, 100, 103, 94,\n                   99, 101, 97, 98, 100, 102, 96, 99, 98, 101,\n                   97, 100, 99, 102, 98, 96, 101, 99, 100, 97])\n\nt_stat, p_value = stats.ttest_1samp(sample, population_mean)\nmean = np.mean(sample)\nstd = np.std(sample, ddof=1)\nse = std / math.sqrt(len(sample))\n\nprint(f\"Sample mean: {mean:.2f}, Population mean: {population_mean}\")\nprint(f\"t-statistic: {t_stat:.4f}\")\nprint(f\"p-value (two-tailed): {p_value:.4f}\")\nprint(f\"Standard error: {se:.4f}\")\n\nalpha = 0.05\nif p_value < alpha:\n    print(f\"p < {alpha}: Reject H₀. Battery life differs from 100 hours.\")\nelse:\n    print(f\"p >= {alpha}: Fail to reject H₀. No evidence battery life differs.\")\n\n# Confidence interval\nci = stats.t.interval(0.95, df=len(sample)-1, loc=mean, scale=se)\nprint(f\"95% Confidence Interval: [{ci[0]:.2f}, {ci[1]:.2f}]\")\n\n# ============================================\n# 2. TWO-SAMPLE INDEPENDENT T-TEST\n# ============================================\nprint(\"\\n--- Two-Sample Independent t-Test ---\")\n# Compare two teaching methods\nmethod_a = np.array([85, 78, 92, 88, 76, 95, 82, 90, 79, 84])\nmethod_b = np.array([72, 68, 75, 80, 71, 78, 65, 74, 70, 73])\n\nt_stat, p_value = stats.ttest_ind(method_a, method_b)\nprint(f\"Method A: mean={np.mean(method_a):.2f}, std={np.std(method_a, ddof=1):.2f}\")\nprint(f\"Method B: mean={np.mean(method_b):.2f}, std={np.std(method_b, ddof=1):.2f}\")\nprint(f\"t-statistic: {t_stat:.4f}\")\nprint(f\"p-value (two-tailed): {p_value:.4f}\")\n\nif p_value < alpha:\n    print(f\"p < {alpha}: Significant difference between methods.\")\nelse:\n    print(f\"p >= {alpha}: No significant difference between methods.\")\n\n# Welch's t-test (does not assume equal variance)\nt_stat_w, p_value_w = stats.ttest_ind(method_a, method_b, equal_var=False)\nprint(f\"Welch's t-test p-value: {p_value_w:.4f}\")\n\n# ============================================\n# 3. PAIRED T-TEST\n# ============================================\nprint(\"\\n--- Paired t-Test ---\")\n# Blood pressure before and after treatment\nbefore = np.array([145, 150, 138, 160, 142, 155, 148, 152, 140, 146])\nafter = np.array([135, 142, 130, 148, 138, 140, 136, 141, 132, 135])\n\nt_stat, p_value = stats.ttest_rel(before, after)\ndifferences = before - after\nprint(f\"Differences: mean={np.mean(differences):.2f}, std={np.std(differences, ddof=1):.2f}\")\nprint(f\"t-statistic: {t_stat:.4f}\")\nprint(f\"p-value (one-tailed): {p_value/2:.4f}\")  # one-tailed test\n\nif p_value/2 < alpha:\n    print(f\"p < {alpha}: Treatment significantly reduced blood pressure.\")\nelse:\n    print(f\"p >= {alpha}: No significant reduction.\")\n\n# ============================================\n# 4. Z-TEST (using normal approximation)\n# ============================================\nprint(\"\\n--- z-Test (Proportion) ---\")\n# Out of 1000 visitors, 120 converted. Is this different from 10% baseline?\nn = 1000\nconversions = 120\np_hat = conversions / n\np0 = 0.10\n\nz_stat = (p_hat - p0) / math.sqrt(p0 * (1-p0) / n)\np_value_z = 2 * (1 - stats.norm.cdf(abs(z_stat)))  # two-tailed\n\nprint(f\"Observed proportion: {p_hat:.4f}\")\nprint(f\"Null proportion: {p0}\")\nprint(f\"z-statistic: {z_stat:.4f}\")\nprint(f\"p-value: {p_value_z:.4f}\")\nif p_value_z < alpha:\n    print(f\"p < {alpha}: Conversion rate significantly different from 10%.\")\nelse:\n    print(f\"p >= {alpha}: No significant difference.\")\n\n# ============================================\n# 5. CHI-SQUARE TEST OF INDEPENDENCE\n# ============================================\nprint(\"\\n--- Chi-Square Test of Independence ---\")\n# Is gender associated with product preference?\n# Observed frequencies\nobserved = np.array([\n    [30, 45, 25],   # Male: Product A, B, C\n    [40, 35, 25]    # Female: Product A, B, C\n])\n\nchi2, p_value_chi, dof, expected = stats.chi2_contingency(observed)\nprint(f\"Observed frequencies:\\n{observed}\")\nprint(f\"Expected frequencies:\\n{expected}\")\nprint(f\"Chi-square statistic: {chi2:.4f}\")\nprint(f\"Degrees of freedom: {dof}\")\nprint(f\"p-value: {p_value_chi:.4f}\")\n\nif p_value_chi < alpha:\n    print(f\"p < {alpha}: Gender and product preference are associated.\")\nelse:\n    print(f\"p >= {alpha}: No association between gender and product preference.\")\n\n# ============================================\n# 6. ONE-WAY ANOVA\n# ============================================\nprint(\"\\n--- One-Way ANOVA ---\")\n# Compare test scores across three teaching methods\ngroup1 = np.array([85, 90, 88, 92, 87])\ngroup2 = np.array([78, 82, 80, 85, 79])\ngroup3 = np.array([70, 75, 72, 68, 74])\n\nf_stat, p_value_anova = stats.f_oneway(group1, group2, group3)\nprint(f\"Group 1: mean={np.mean(group1):.2f}, std={np.std(group1, ddof=1):.2f}\")\nprint(f\"Group 2: mean={np.mean(group2):.2f}, std={np.std(group2, ddof=1):.2f}\")\nprint(f\"Group 3: mean={np.mean(group3):.2f}, std={np.std(group3, ddof=1):.2f}\")\nprint(f\"F-statistic: {f_stat:.4f}\")\nprint(f\"p-value: {p_value_anova:.4f}\")\n\nif p_value_anova < alpha:\n    print(f\"p < {alpha}: At least one group differs significantly.\")\n    # Post-hoc: which groups differ?\n    from scipy.stats import tukey_hsd\n    tukey = tukey_hsd(group1, group2, group3)\n    print(f\"\\nTukey HSD post-hoc tests:\")\n    print(f\"Group 1 vs 2: p={tukey.pvalue[0,1]:.4f}\")\n    print(f\"Group 1 vs 3: p={tukey.pvalue[0,2]:.4f}\")\n    print(f\"Group 2 vs 3: p={tukey.pvalue[1,2]:.4f}\")\nelse:\n    print(f\"p >= {alpha}: No significant differences between groups.\")\n\n# ============================================\n# 7. POWER ANALYSIS EXAMPLE\n# ============================================\nprint(\"\\n--- Power Analysis ---\")\nfrom scipy.stats import nct, ncf\n\n# Calculate power for one-sample t-test\neffect_size = 0.5  # Cohen's d (medium effect)\nn = 30\nalpha_power = 0.05\ndf_power = n - 1\n\n# Non-centrality parameter\nncp = effect_size * math.sqrt(n)\n# Critical value\nt_crit = stats.t.ppf(1 - alpha_power/2, df_power)\n# Power\npower = 1 - stats.nct.cdf(t_crit, df_power, ncp) + stats.nct.cdf(-t_crit, df_power, ncp)\nprint(f\"Effect size (Cohen's d): {effect_size}\")\nprint(f\"Sample size: {n}\")\nprint(f\"Power: {power:.4f} (need > 0.80 for adequate power)\")\nprint(f\"Power is {'adequate' if power > 0.80 else 'inadequate'}\")\n\n# Calculate required sample size for 80% power\nfor n_test in range(10, 500):\n    ncp_test = effect_size * math.sqrt(n_test)\n    t_crit_test = stats.t.ppf(1 - alpha_power/2, n_test - 1)\n    power_test = 1 - stats.nct.cdf(t_crit_test, n_test - 1, ncp_test) + stats.nct.cdf(-t_crit_test, n_test - 1, ncp_test)\n    if power_test >= 0.80:\n        print(f\"Required n for 80% power: {n_test}\")\n        break\n\n# Expected Output (approximate):\n# --- One-Sample t-Test ---\n# Sample mean: 99.13, Population mean: 100\n# t-statistic: -2.1445\n# p-value (two-tailed): 0.0404\n# p < 0.05: Reject H₀. Battery life differs from 100 hours.\n# 95% Confidence Interval: [98.30, 99.97]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain the difference between statistical significance and practical significance."
      }), "\nA: Statistical significance means the observed effect is unlikely due to chance (p < α). Practical significance means the effect is large enough to matter in the real world. A large sample can make a tiny effect (0.1% CTR lift) statistically significant but practically irrelevant. Always report effect size (Cohen's d, absolute lift) alongside p-values. Consider cost-benefit: does the improvement justify implementation cost?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the multiple comparisons problem and how do you handle it?"
      }), "\nA: When testing many hypotheses simultaneously, the probability of at least one false positive increases. For m independent tests at α=0.05, the family-wise error rate is 1-(0.95)^m. Corrections: Bonferroni (α/m, most conservative), Holm-Bonferroni (stepwise), Benjamini-Hochberg (FDR control, less conservative). In ML, this applies when comparing many features against a target or many model variants."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: When would you use a one-tailed vs two-tailed test?"
      }), "\nA: Two-tailed: testing for any difference (new ≠ old). Use as default. One-tailed: testing for a specific direction (new > old). Only use when you have a strong prior that the effect can only go one direction, and you're willing to miss an effect in the opposite direction. One-tailed has more power (lower p-value) for the same effect size, but is less conservative."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the relationship between confidence intervals and hypothesis testing?"
      }), "\nA: A 95% confidence interval contains all values for which the null hypothesis would NOT be rejected at α=0.05. If the null value (e.g., 0 for difference) is outside the CI, then p < 0.05. CIs provide more information than a binary reject/fail-to-reject decision — they show the range of plausible effect sizes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: How does sample size affect p-values and statistical power?"
      }), "\nA: Larger sample sizes: (1) Decrease standard error (SE = σ/√n), (2) Increase test statistics (t = effect/SE), (3) Decrease p-values for the same effect size, (4) Increase statistical power (ability to detect true effects). With huge n, even trivial effects become statistically significant. This is why you must always check effect size, not just p-value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: What assumptions does the t-test make and how do you check them?"
      }), "\nA: (1) Independence: observations are independent (checked by study design). (2) Normality: data is approximately normal in each group (checked by Q-Q plot, Shapiro-Wilk test, or by CLT for n>30). (3) Equal variance (for independent t-test): checked by Levene's test or F-test. If normality fails, use non-parametric tests (Mann-Whitney U, Wilcoxon signed-rank). If equal variance fails, use Welch's t-test."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: Describe the p-value controversy. Why do some statisticians recommend moving beyond p-values?"
      }), "\nA: Problems with p-values: (1) p-values are often misinterpreted as P(H₀|Data) instead of P(Data|H₀). (2) p-hacking: running many tests until one is significant. (3) p-values depend on sample size — trivial effects become significant with large n. (4) Replication crisis: many significant findings fail to replicate. Alternatives: (1) Report effect sizes and CIs, (2) Use Bayesian methods (Bayes factors), (3) Pre-register analyses, (4) Use replication and meta-analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What is ANOVA and when would you use it instead of multiple t-tests?"
      }), "\nA: ANOVA (Analysis of Variance) compares means across 3+ groups simultaneously. Using multiple t-tests (A vs B, A vs C, B vs C) inflates Type I error. ANOVA tests the global null (all means equal). If ANOVA is significant, post-hoc tests (Tukey HSD, Bonferroni correction) identify which groups differ. One-way ANOVA = one factor; two-way ANOVA = two factors + interaction effects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: How do you determine the sample size needed for an A/B test?"
      }), "\nA: Sample size depends on: (1) Baseline conversion rate, (2) Minimum detectable effect (MDE) — the smallest lift worth detecting, (3) Significance level α (typically 0.05), (4) Power 1-β (typically 0.80). Formula: n = (Z_α/2 + Z_β)² * 2σ² / δ² (for continuous). Use online calculators or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "statsmodels"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "solve_power"
      }), " function. Always account for multiple variants (Bonferroni correction)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: What is a non-parametric test and when would you use one?"
      }), "\nA: Non-parametric tests make no assumptions about the underlying distribution. Use when: (1) Data is ordinal (ratings, ranks), (2) Normality assumption is severely violated, (3) Sample size is very small. Examples: Mann-Whitney U (alternative to independent t-test), Wilcoxon signed-rank (paired t-test), Kruskal-Wallis (one-way ANOVA), Spearman correlation (Pearson correlation). Trade-off: slightly less power when assumptions hold, but much more robust when they don't."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: If the p-value is 0.03 and α = 0.05, what is the correct conclusion?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Reject H₀, results are statistically significant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Fail to reject H₀, results are not significant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Accept H₀"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The effect is practically significant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) Reject H₀, results are statistically significant"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: A Type II Error occurs when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) We reject a true null hypothesis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) We fail to reject a false null hypothesis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) We reject a false null hypothesis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) We fail to reject a true null hypothesis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) We fail to reject a false null hypothesis"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What test would you use to compare the means of three independent groups?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Paired t-test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) One-sample t-test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ANOVA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Chi-square test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) ANOVA"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: As sample size increases, the standard error:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Increases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Decreases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Stays the same"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Becomes zero"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Decreases"
        }), " (SE = σ/√n)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: A 95% confidence interval for the mean difference is [-0.5, 2.3]. What can we conclude?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The effect is statistically significant at α=0.05"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The effect is not statistically significant at α=0.05 (since 0 is in the interval)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) There is a 95% chance the true mean is in this range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The sample size must be increased"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The effect is not statistically significant at α=0.05"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-one-sample-t-test-and-confidence-interval",
      children: "Exercise 1: One-Sample t-Test and Confidence Interval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python (SciPy) implementation that tests whether a sample of battery lifetimes differs from a claimed population mean of 100 hours."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: state H0 and H1 in comments; use stats.ttest_1samp; compute the 95% CI with stats.t.interval; print the t-statistic, p-value, and decision at alpha = 0.05; check whether 100 lies inside the CI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: the t-statistic, p-value, decision (reject or fail to reject), and a CI that is consistent with the p-value conclusion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-two-group-comparison-with-welch-and-mann-whitney",
      children: "Exercise 2: Two-Group Comparison with Welch and Mann-Whitney"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that simulates two independent groups (one with a true mean shift), then compares them with Welch's t-test (equal_var=False) and the Mann-Whitney U test."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use np.random.seed; compute Cohen's d effect size; print both p-values and explain when the non-parametric test is the safer choice; repeat with a non-normal distribution (e.g., exponential) to see the tests diverge."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: p-values from both tests for normal and skewed data, plus the effect size, showing both agree under normality but can disagree otherwise."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-multiple-testing-simulation",
      children: "Exercise 3: Multiple Testing Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that simulates 100 hypothesis tests where the null hypothesis is true (two samples drawn from the same normal distribution), counts how many are significant at alpha = 0.05, then reapplies the Bonferroni correction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use np.random and stats.ttest_ind per test; record the empirical Type I error rate; recompute significance with alpha_adj = 0.05/100; print both counts and the false-positive rate."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: roughly 5 significant results before correction (empirical 5% error rate) and 0 after Bonferroni, demonstrating why multiple testing corrections exist."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs",
      children: "PYQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1 (Google ML Interview):"
      }), " Your team developed a new ranking algorithm. You run an A/B test with 100,000 users in each group. The new algorithm shows a 0.2% improvement in click-through rate (CTR) with p = 0.003. Your VP says \"deploy immediately.\" Do you agree? Why or why not?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": While the result is statistically significant (p < 0.05), you must consider: (1) Effect size: 0.2% lift is tiny. Is this practically meaningful? (2) Cost: is the new algorithm more expensive to run? (3) Risks: does it harm other metrics (revenue, dwell time, user satisfaction)? (4) Segment analysis: does the improvement come from certain user segments while hurting others? (5) Long-term effects: could it degrade the ecosystem (e.g., filter bubbles)? Recommendation: deploy to 10% first, monitor for 2 weeks including guardrail metrics, then gradually ramp up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2 (Amazon Applied Scientist):"
      }), " You are testing whether a new recommendation system increases revenue per user (RPU). Your test has 500 users per group, baseline RPU = $4.50, new RPU = $4.65, p = 0.12. The team wants to conclude the new system is no better. What's wrong with this conclusion?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": A non-significant result (p = 0.12 > 0.05) does NOT prove the null hypothesis (no difference). The $0.15 (3.3%) lift could be real but undetected due to low power. Before concluding \"no effect\": (1) Calculate the confidence interval for the difference (likely includes the possibility of meaningful gains), (2) Perform a power analysis — were 500 users/group enough to detect a 3% lift? (3) If power is low, run a larger test, (4) Use Bayesian methods to quantify evidence for both hypotheses, (5) Consider a more sensitive metric or reduce measurement noise."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3 (Meta Data Scientist):"
      }), " You are running 20 experiments simultaneously on different product features. Two experiments show p < 0.05. What do you tell your stakeholders?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Apply multiple testing correction. With 20 tests at α=0.05, the expected number of false positives is 20 × 0.05 = 1. Two significant results is exactly what we'd expect by chance if all null hypotheses are true! Use Bonferroni: adjusted α = 0.05/20 = 0.0025. Re-check p-values against this threshold. Alternatively, use FDR control (Benjamini-Hochberg) which is less conservative. Recommend pre-registering experiments and using a holdout set for validation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4 (Microsoft Data Scientist):"
      }), " A colleague runs a paired t-test on pre-test and post-test scores. The mean improvement is 5 points, p = 0.06. They claim \"the training program didn't work.\" Critique this reasoning and suggest improvements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": (1) p = 0.06 is not significant at α=0.05, but it's close — don't interpret as \"no effect.\" (2) Report the effect size (Cohen's d = mean_diff / std_diff). (3) A 5-point improvement might be practically meaningful. (4) Check assumptions: normality of differences, no confounding variables. (5) Increase sample size if feasible. (6) Consider Bayesian approach: what's the posterior probability of a meaningful improvement? (7) Use the confidence interval: it likely includes the possibility of both no effect and a meaningful effect. Never accept the null based on p > 0.05."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Accepting the null hypothesis"
          }), ": Failing to reject H₀ does NOT mean H₀ is true. It means we lack sufficient evidence to reject it. Absence of evidence is not evidence of absence."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "p-hacking"
          }), ": Running multiple tests, removing outliers, or changing analysis until a significant p-value appears. This inflates Type I error. Pre-register your analysis plan. Use corrected thresholds for multiple comparisons."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignoring assumptions"
          }), ": Using a t-test on severely non-normal data with small n, or using ANOVA with unequal variances. Always check assumptions with diagnostic plots and appropriate tests."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusing statistical and practical significance"
          }), ": With large n (millions of users), even 0.01% effects are statistically significant. Always ask: does this effect matter for our business?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "One-tailed tests without justification"
          }), ": Using a one-tailed test because the two-tailed p-value isn't significant. This doubles the α for one direction and ignores the possibility of an effect in the opposite direction."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H₀"
        }), ": No effect; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "H₁"
        }), ": There is an effect"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "α"
        }), ": Probability of Type I error (false positive). Typically 0.05"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "β"
        }), ": Probability of Type II error (false negative)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power"
        }), " = 1 - β. Aim for > 0.80"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p-value"
        }), ": P(observed or more extreme | H₀ true). NOT P(H₀ true)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p < α"
        }), ": Statistically significant. Reject H₀"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "t-test"
        }), ": Compare means (unknown σ). z-test: known σ or large n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paired test"
        }), ": Same subjects, two measurements (before/after)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chi-square"
        }), ": Categorical variable associations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ANOVA"
        }), ": Compare 3+ group means simultaneously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effect size"
        }), ": Cohen's d, absolute lift — measures practical significance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-parametric"
        }), ": Mann-Whitney, Wilcoxon, Kruskal-Wallis (no normality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple testing"
        }), ": Bonferroni, BH correction to control false positives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI"
        }), ": If null value outside CI → significant at that α level"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hypothesis testing provides a rigorous framework for making data-driven decisions under uncertainty. The process involves stating null and alternative hypotheses, selecting a significance level, computing a test statistic and p-value, and drawing conclusions while acknowledging Type I and Type II errors. Different tests (t-test, z-test, chi-square, ANOVA) apply to different data types and research questions. As an AI engineer, hypothesis testing is essential for A/B testing, model comparison, feature selection, and experimental validation — always remember to check both statistical significance (p-value) and practical significance (effect size) before making decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "p-value"
        }), ": A p-value below the significance level alpha (0.05) means the data is unlikely under the null hypothesis - it does NOT measure the size of the effect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fail to Reject vs Accept"
        }), ": A non-significant result (p >= 0.05) does not prove the null hypothesis - absence of evidence is not evidence of absence; report effect size and confidence intervals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type I and Type II"
        }), ": Type I error (false positive, alpha) is rejecting a true null; Type II error (false negative, beta) is missing a real effect; power = 1 - beta should exceed 0.80."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Testing"
        }), ": Running 20 tests at alpha = 0.05 yields an expected 1 false positive - apply Bonferroni (alpha/m) or Benjamini-Hochberg (FDR) corrections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paired vs Independent"
        }), ": Use a paired t-test when measurements come from the same subjects (before/after) and an independent t-test for separate groups; paired designs reduce variance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confidence Intervals"
        }), ": A 95% CI contains all null values that would not be rejected - if the null value (e.g., 0) is outside the interval, the result is significant at alpha = 0.05."]
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
            children: "Explain the core idea of Chapter 03: Hypothesis Testing in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chapter 03: Hypothesis Testing."
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
            children: "Describe a production bug caused by misunderstanding Chapter 03: Hypothesis Testing. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chapter 03: Hypothesis Testing from 10 users to 10 million?"
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
            children: "Compare Chapter 03: Hypothesis Testing with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chapter 03: Hypothesis Testing."
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
            children: "How does Chapter 03: Hypothesis Testing behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chapter 03: Hypothesis Testing run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chapter 03: Hypothesis Testing that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chapter 03: Hypothesis Testing explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chapter 03: Hypothesis Testing\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chapter 03: Hypothesis Testing to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chapter 03: Hypothesis Testing (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chapter 03: Hypothesis Testing and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chapter 03: Hypothesis Testing-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chapter 03: Hypothesis Testing interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chapter 03: Hypothesis Testing in production today?"
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
        }), " Chapter 03: Hypothesis Testing builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chapter 03: Hypothesis Testing before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chapter 03: Hypothesis Testing is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chapter 03: Hypothesis Testing in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chapter 03: Hypothesis Testing chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chapter 03: Hypothesis Testing is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chapter 03: Hypothesis Testing is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chapter 03: Hypothesis Testing is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chapter 03: Hypothesis Testing issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chapter 03: Hypothesis Testing in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chapter 03: Hypothesis Testing that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chapter 03: Hypothesis Testing is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chapter 03: Hypothesis Testing in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chapter 03: Hypothesis Testing and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chapter 03: Hypothesis Testing on an empty input?"
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
            children: "Complete Medium exercises, explain Chapter 03: Hypothesis Testing to someone else"
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
        children: "Always write a one-line example of Chapter 03: Hypothesis Testing from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chapter 03: Hypothesis Testing when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chapter 03: Hypothesis Testing twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chapter 03: Hypothesis Testing snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chapter 03: Hypothesis Testing listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chapter 03: Hypothesis Testing to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chapter 03: Hypothesis Testing by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chapter 03: Hypothesis Testing to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chapter 03: Hypothesis Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chapter 03: Hypothesis Testing (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chapter 03: Hypothesis Testing problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chapter 03: Hypothesis Testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chapter 03: Hypothesis Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chapter 03: Hypothesis Testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chapter 03: Hypothesis Testing fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chapter 03: Hypothesis Testing is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chapter 03: Hypothesis Testing is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chapter 03: Hypothesis Testing, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chapter 03: Hypothesis Testing asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 03: Hypothesis Testing is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chapter 03: Hypothesis Testing."
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
        children: "Chapter 03: Hypothesis Testing emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chapter 03: Hypothesis Testing today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chapter 03: Hypothesis Testing — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chapter 03: Hypothesis Testing changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chapter 03: Hypothesis Testing."
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
        children: "Chapter 03: Hypothesis Testing appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chapter 03: Hypothesis Testing helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chapter 03: Hypothesis Testing concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chapter 03: Hypothesis Testing skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chapter 03: Hypothesis Testing to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 03: Hypothesis Testing is like a recipe"
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
        }), " — this chapter contributes the Chapter 03: Hypothesis Testing skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-03hypothesistesting-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chapter 03: Hypothesis Testing in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-03hypothesistesting-flash2",
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
      "data-qid": "24statisticsmathematics-03hypothesistesting-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chapter 03: Hypothesis Testing approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-03hypothesistesting-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chapter 03: Hypothesis Testing NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-03hypothesistesting-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chapter 03: Hypothesis Testing applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chapter 03: Hypothesis Testing (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chapter 03: Hypothesis Testing (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chapter 03: Hypothesis Testing-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chapter 03: Hypothesis Testing in production at scale"
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
        children: "Testing: pytest for unit tests of Chapter 03: Hypothesis Testing code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chapter 03: Hypothesis Testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chapter 03: Hypothesis Testing code."]
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
        }), " or your IDE's debugger to step through the Chapter 03: Hypothesis Testing example code."]
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
        children: "Explain Chapter 03: Hypothesis Testing in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chapter 03: Hypothesis Testing."
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
        children: "Tell me about a time you debugged a Chapter 03: Hypothesis Testing problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chapter 03: Hypothesis Testing is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chapter 03: Hypothesis Testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chapter 03: Hypothesis Testing logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chapter 03: Hypothesis Testing without notes"
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
        }), ": a small team uses Chapter 03: Hypothesis Testing daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chapter 03: Hypothesis Testing patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chapter 03: Hypothesis Testing principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chapter 03: Hypothesis Testing shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chapter 03: Hypothesis Testing to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis",
        children: "Chapter 04: Correlation & Regression Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 03: Hypothesis Testing, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chapter 03: Hypothesis Testing depends on input size and distribution — always benchmark for your own data."
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