"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[15438],{

/***/ 26745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_04_correlation_regression_analysis_md_9de_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-04-correlation-regression-analysis-md-9de.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_04_correlation_regression_analysis_md_9de_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/04-correlation-regression-analysis","title":"Chapter 04: Correlation & Regression Analysis","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":302,"frontMatter":{"id":"04-correlation-regression-analysis","slug":"/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis","title":"Chapter 04: Correlation & Regression Analysis","sidebar_label":"Chapter 04: Correlation & Regression Analysis","sidebar_position":302},"sidebar":"placementSidebar","previous":{"title":"Chapter 03: Hypothesis Testing","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/03-hypothesis-testing"},"next":{"title":"Chapter 05: Linear Algebra Essentials","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis.md


const frontMatter = {
	id: '04-correlation-regression-analysis',
	slug: '/ai-engineering-placement/24-statistics-mathematics/04-correlation-regression-analysis',
	title: 'Chapter 04: Correlation & Regression Analysis',
	sidebar_label: 'Chapter 04: Correlation & Regression Analysis',
	sidebar_position: 302
};
const contentTitle = 'Chapter 04: Correlation & Regression Analysis';

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
  "value": "Correlation",
  "id": "correlation",
  "level": 3
}, {
  "value": "Linear Regression",
  "id": "linear-regression",
  "level": 3
}, {
  "value": "Regression Assumptions (LINE)",
  "id": "regression-assumptions-line",
  "level": 3
}, {
  "value": "Model Fit Metrics",
  "id": "model-fit-metrics",
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
  "value": "Exercise 1: Pearson vs Spearman Robustness",
  "id": "exercise-1-pearson-vs-spearman-robustness",
  "level": 3
}, {
  "value": "Exercise 2: Multiple Regression Diagnostics with VIF",
  "id": "exercise-2-multiple-regression-diagnostics-with-vif",
  "level": 3
}, {
  "value": "Exercise 3: Heteroscedasticity Detection and Fix",
  "id": "exercise-3-heteroscedasticity-detection-and-fix",
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
    annotation: "annotation",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-04-correlation--regression-analysis",
        children: "Chapter 04: Correlation & Regression Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the difference between Pearson (linear) and Spearman (monotonic) correlation and when to use each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute and interpret the covariance and correlation matrices for a set of features."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the LINE assumptions of linear regression and diagnose violations with residual analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply R-squared, adjusted R-squared, RMSE, VIF, and Cook's distance to evaluate and diagnose regression models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze multicollinearity and heteroscedasticity and choose remedies such as ridge regression or transformations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Correlation and regression analysis form the statistical backbone for understanding relationships between variables in AI and machine learning. Correlation quantifies the strength and direction of relationships between features, while linear regression models the relationship between a target variable and one or more predictors. This chapter covers Pearson and Spearman correlation, the covariance matrix, linear regression assumptions, R-squared, residual analysis, and practical regression diagnostics that every AI engineer must know."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Descriptive statistics (mean, variance — Chapter 01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normal distribution properties (Chapter 02)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hypothesis testing basics (Chapter 03)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept",
      children: "Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "correlation",
      children: "Correlation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pearson Correlation Coefficient (r)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measures linear relationship between two continuous variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range: -1 to +1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r = +1: perfect positive linear relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r = -1: perfect negative linear relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r = 0: no linear relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formula: r = cov(X, Y) / (σ_X * σ_Y)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spearman Rank Correlation (ρ)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measures monotonic relationship (not necessarily linear)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Based on ranks, not raw values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robust to outliers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range: -1 to +1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Covariance Matrix"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σ[i,j] = cov(X_i, X_j)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagonal entries are variances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Off-diagonal entries are covariances"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linear-regression",
      children: "Linear Regression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple Linear Regression"
      }), ":\ny = β₀ + β₁x + ε"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "β₀: intercept"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "β₁: slope (coefficient)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε: error term (assumed N(0, σ²))"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple Linear Regression"
      }), ":\ny = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ + ε"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regression-assumptions-line",
      children: "Regression Assumptions (LINE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L"
        }), "inearity: Relationship between X and Y is linear"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I"
        }), "ndependence: Observations are independent (no autocorrelation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N"
        }), "ormality: Residuals are normally distributed (for inference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E"
        }), "qual Variance (Homoscedasticity): Residuals have constant variance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-fit-metrics",
      children: "Model Fit Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "R-squared (R²)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proportion of variance in Y explained by the model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R² = 1 - SS_res / SS_tot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range: 0 to 1 (higher is better, but can overfit)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjusted R-squared"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Penalizes for adding extra predictors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adj R² = 1 - (1-R²)(n-1)/(n-p-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can decrease if useless predictors are added"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Residual Analysis"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Residuals = Actual - Predicted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plot residuals vs fitted values: check for patterns (heteroscedasticity, non-linearity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q-Q plot: check normality of residuals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cook's Distance: identifies influential points"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph CorrelationTypes[Correlation Types]\n        A[Pearson r] --> B[Linear relationship<br/>Parametric<br/>Sensitive to outliers]\n        C[Spearman ρ] --> D[Monotonic relationship<br/>Non-parametric<br/>Robust to outliers]\n        E[Kendall τ] --> F[Rank-based<br/>Non-parametric<br/>Works with ties]\n    end\n    \n    subgraph Strength[Interpretation]\n        G[r = 0 to ±0.3] --> H[Weak]\n        I[r = ±0.3 to ±0.7] --> J[Moderate]\n        K[r = ±0.7 to ±1.0] --> L[Strong]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph RegressionDiagnostics[Regression Diagnostics Flow]\n        A[Fit Linear Model] --> B[Check Linearity<br/>Plot Y vs. each X]\n        B --> C[Check Residuals<br/>vs. Fitted plot]\n        C --> D{Residuals random<br/>around zero?}\n        D -->|No| E[Try transformations<br/>or non-linear models]\n        D -->|Yes| F[Check Homoscedasticity<br/>Constant spread?]\n        F -->|No| G[Use robust SE<br/>or weighted LS]\n        F -->|Yes| H[Check Normality<br/>Q-Q plot]\n        H -->|No| I[Large n? Use CLT.<br/>Small n: transform]\n        H -->|Yes| J[Check Multicollinearity<br/>VIF < 5-10]\n        J -->|VIF high| K[Remove or combine features]\n        J -->|VIF OK| L[Check Influential Points<br/>Cook's Distance]\n        L -->|Influential| M[Investigate outliers]\n        L -->|OK| N[Model is valid<br/>Report R² + adj R²]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Life Analogy — Ice Cream Sales and Temperature"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ice cream shop tracks daily sales and temperature:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Correlation"
          }), ": Temperature and sales have r = 0.85 (strong positive). Days with r = -0.10 (no relationship). \"No correlation ≠ no relationship\" — maybe the relationship is U-shaped (sales also high on very cold days due to hot chocolate)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spearman"
          }), ": If one day had a power outage (sales = 0 despite high temp), Spearman ρ = 0.82 (less affected by the outlier) while Pearson r drops to 0.65."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regression"
          }), ": Sales = -50 + 8 × Temperature + ε. For every 1°F increase, sales increase by $8 (β₁ = 8). Intercept (-50) is meaningless here (no one sells ice cream at 0°F)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "R² = 0.72"
          }), ": Temperature explains 72% of the variance in sales. Other 28%: day of week, holidays, events, marketing."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Example — Feature Selection for House Price Prediction"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have features: sqft, bedrooms, bathrooms, location score, age."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correlation matrix"
        }), ": sqft and bedrooms have r = 0.75 (high multicollinearity). Both may encode \"house size.\" You might keep only sqft."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression diagnostics"
        }), ": Residual vs fitted shows a funnel shape (heteroscedasticity — predictions are worse for expensive houses). Solution: predict log(price) instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VIF (Variance Inflation Factor)"
        }), ": bedrooms has VIF = 8.2 (>5), indicating multicollinearity with sqft. Remove bedrooms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adjusted R²"
        }), ": 0.842 vs R² = 0.847 — the 0.005 drop is worth the simpler model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom scipy import stats\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import r2_score, mean_squared_error\nimport math\n\nnp.random.seed(42)\nprint(\"=== Correlation & Regression Analysis ===\\n\")\n\n# ============================================\n# 1. PEARSON AND SPEARMAN CORRELATION\n# ============================================\nprint(\"--- Correlation Analysis ---\")\n# Generate correlated data\nn = 100\nx = np.random.normal(50, 10, n)\ny = 3 * x + np.random.normal(0, 15, n)  # y depends on x with noise\noutlier_idx = 0\ny_with_outlier = y.copy()\ny_with_outlier[outlier_idx] = 500  # extreme outlier\n\n# Pearson correlation\npearson_r, pearson_p = stats.pearsonr(x, y)\npearson_r_out, pearson_p_out = stats.pearsonr(x, y_with_outlier)\n\n# Spearman correlation\nspearman_r, spearman_p = stats.spearmanr(x, y)\nspearman_r_out, spearman_p_out = stats.spearmanr(x, y_with_outlier)\n\nprint(f\"Pearson r (clean): {pearson_r:.4f} (p={pearson_p:.6f})\")\nprint(f\"Pearson r (with outlier): {pearson_r_out:.4f} (p={pearson_p_out:.6f})\")\nprint(f\"Spearman ρ (clean): {spearman_r:.4f} (p={spearman_p:.6f})\")\nprint(f\"Spearman ρ (with outlier): {spearman_r_out:.4f} (p={spearman_p_out:.6f})\")\nprint(f\"=> Spearman is more robust to the outlier!\")\n\n# ============================================\n# 2. COVARIANCE MATRIX\n# ============================================\nprint(\"\\n--- Covariance Matrix ---\")\ndata = np.column_stack([x, y])\ncov_matrix = np.cov(data, rowvar=False)\ncorr_matrix = np.corrcoef(data, rowvar=False)\n\nprint(\"Covariance Matrix:\")\nprint(cov_matrix)\nprint(\"\\nCorrelation Matrix:\")\nprint(corr_matrix)\nprint(f\"\\nVariance of X: {cov_matrix[0,0]:.2f}\")\nprint(f\"Variance of Y: {cov_matrix[1,1]:.2f}\")\nprint(f\"Covariance of X,Y: {cov_matrix[0,1]:.2f}\")\n\n# ============================================\n# 3. SIMPLE LINEAR REGRESSION\n# ============================================\nprint(\"\\n--- Simple Linear Regression ---\")\nX = x.reshape(-1, 1)\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nbeta_0 = model.intercept_\nbeta_1 = model.coef_[0]\ny_pred = model.predict(X)\n\nprint(f\"Intercept (β₀): {beta_0:.4f}\")\nprint(f\"Slope (β₁): {beta_1:.4f}\")\nprint(f\"Equation: y = {beta_0:.2f} + {beta_1:.2f} * x\")\n\n# R-squared\nr2 = r2_score(y, y_pred)\nn = len(y)\np = 1  # number of predictors\nadj_r2 = 1 - (1 - r2) * (n - 1) / (n - p - 1)\nprint(f\"R²: {r2:.4f}\")\nprint(f\"Adjusted R²: {adj_r2:.4f}\")\n\n# MSE and RMSE\nmse = mean_squared_error(y, y_pred)\nrmse = math.sqrt(mse)\nprint(f\"MSE: {mse:.2f}\")\nprint(f\"RMSE: {rmse:.2f}\")\n\n# ============================================\n# 4. RESIDUAL ANALYSIS\n# ============================================\nprint(\"\\n--- Residual Analysis ---\")\nresiduals = y - y_pred\n\n# Residual statistics\nprint(f\"Mean of residuals: {np.mean(residuals):.4f} (should be ~0)\")\nprint(f\"Std of residuals: {np.std(residuals, ddof=1):.4f}\")\n\n# Check normality of residuals (Shapiro-Wilk test)\nshapiro_stat, shapiro_p = stats.shapiro(residuals)\nprint(f\"Shapiro-Wilk test for normality: stat={shapiro_stat:.4f}, p={shapiro_p:.4f}\")\nif shapiro_p > 0.05:\n    print(\"  => Residuals appear normally distributed (p > 0.05)\")\nelse:\n    print(\"  => Residuals deviate from normality (p <= 0.05)\")\n\n# Durbin-Watson test for autocorrelation\n# (approximation using lag-1 autocorrelation)\ndw = np.sum(np.diff(residuals)**2) / np.sum(residuals**2)\nprint(f\"Durbin-Watson statistic: {dw:.4f} (should be ~2 for independence)\")\nif 1.5 < dw < 2.5:\n    print(\"  => No significant autocorrelation\")\nelse:\n    print(\"  => Possible autocorrelation detected\")\n\n# ============================================\n# 5. MULTIPLE LINEAR REGRESSION\n# ============================================\nprint(\"\\n--- Multiple Linear Regression ---\")\n# Create additional features\nx2 = np.random.normal(50, 15, n)\nx3 = 0.5 * x + 2 * x2 + np.random.normal(0, 10, n)  # engineered feature\n\nX_multi = np.column_stack([x, x2, x3])\nmodel_multi = LinearRegression()\nmodel_multi.fit(X_multi, y)\ny_pred_multi = model_multi.predict(X_multi)\n\nr2_multi = r2_score(y, y_pred_multi)\np_multi = 3\nadj_r2_multi = 1 - (1 - r2_multi) * (n - 1) / (n - p_multi - 1)\n\nprint(f\"Coefficients: β₀={model_multi.intercept_:.4f}\")\nfor i, coef in enumerate(model_multi.coef_):\n    print(f\"  β_{i+1} = {coef:.4f}\")\n\nprint(f\"R² (multi): {r2_multi:.4f}\")\nprint(f\"Adjusted R² (multi): {adj_r2_multi:.4f}\")\nprint(f\"R² improved from {r2:.4f} to {r2_multi:.4f}\")\n\n# ============================================\n# 6. MULTICOLLINEARITY CHECK (VIF)\n# ============================================\nprint(\"\\n--- Multicollinearity (VIF) ---\")\ndef calculate_vif(data):\n    vifs = []\n    for i in range(data.shape[1]):\n        y_col = data[:, i]\n        X_cols = np.delete(data, i, axis=1)\n        reg = LinearRegression().fit(X_cols, y_col)\n        r2_vif = r2_score(y_col, reg.predict(X_cols))\n        vif = 1 / (1 - r2_vif)\n        vifs.append(vif)\n    return vifs\n\nvifs = calculate_vif(X_multi)\nfeature_names = ['X1', 'X2', 'X3']\nfor name, vif in zip(feature_names, vifs):\n    print(f\"VIF for {name}: {vif:.4f}\")\n    if vif > 10:\n        print(f\"  => High multicollinearity! Consider removing {name}\")\n    elif vif > 5:\n        print(f\"  => Moderate multicollinearity\")\n    else:\n        print(f\"  => OK\")\n\n# ============================================\n# 7. HYPOTHESIS TEST FOR SLOPE\n# ============================================\nprint(\"\\n--- Hypothesis Test for Slope ---\")\n# Test if β₁ is significantly different from zero\n# Using scipy's linregress\nslope, intercept, r_value, p_value_slope, std_err = stats.linregress(x, y)\nprint(f\"Slope: {slope:.4f}\")\nprint(f\"Intercept: {intercept:.4f}\")\nprint(f\"Std Error of slope: {std_err:.4f}\")\nprint(f\"t-statistic for slope: {slope/std_err:.4f}\")\nprint(f\"p-value (slope=0): {p_value_slope:.6f}\")\nif p_value_slope < 0.05:\n    print(\"=> Slope is significantly different from zero (p < 0.05)\")\nelse:\n    print(\"=> Slope is NOT significantly different from zero (p >= 0.05)\")\n\n# ============================================\n# 8. CONFIDENCE INTERVAL FOR PREDICTIONS\n# ============================================\nprint(\"\\n--- Prediction Interval ---\")\nx_new = np.array([[55]])\ny_pred_new = model.predict(x_new)[0]\n\n# Simple approximation of prediction interval\nt_crit = stats.t.ppf(0.975, n - 2)\nx_mean = np.mean(x)\nsxx = np.sum((x - x_mean)**2)\nse_fit = math.sqrt(mse * (1/n + (x_new[0,0] - x_mean)**2 / sxx))\nmargin = t_crit * se_fit\n\nprint(f\"Prediction for x=55: {y_pred_new:.2f}\")\nprint(f\"95% CI: [{y_pred_new - margin:.2f}, {y_pred_new + margin:.2f}]\")\n\n# ============================================\n# 9. COOK'S DISTANCE FOR INFLUENTIAL POINTS\n# ============================================\nprint(\"\\n--- Cook's Distance (Influential Points) ---\")\nh = np.diag(X @ np.linalg.inv(X.T @ X) @ X.T)  # leverage\ncooks_d = residuals**2 / (p_multi * mse) * (h / (1 - h)**2)\ninfluential = np.where(cooks_d > 4/n)[0]\nprint(f\"Number of influential points (Cook's D > 4/n): {len(influential)}\")\nif len(influential) > 0:\n    print(f\"Influential point indices: {influential[:5]}\")\n\n# Expected Output (approximate):\n# --- Correlation Analysis ---\n# Pearson r (clean): 0.8942 (p=0.000000)\n# Spearman ρ (with outlier): 0.8854 (p=0.000000)\n# => Spearman is more robust to the outlier!\n#\n# --- Simple Linear Regression ---\n# Equation: y = 2.34 + 2.98 * x\n# R²: 0.7994\n# Adjusted R²: 0.7974\n# RMSE: 14.83\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain the difference between correlation and causation. Give an ML example."
      }), "\nA: Correlation means two variables move together; causation means one causes the other. Correlation does not imply causation — there may be: (1) reverse causation (Y causes X), (2) confounding (Z causes both X and Y), (3) spurious correlation (completely unrelated). ML example: ice cream sales and drowning deaths are correlated, but the confounder is hot weather (more ice cream AND more swimming). Building a model that uses ice cream sales to predict drownings would fail if we intervene (ban ice cream)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is multicollinearity and how does it affect linear regression?"
      }), "\nA: Multicollinearity occurs when predictors are highly correlated (r > 0.7 or VIF > 5-10). Effects: (1) Coefficients become unstable — small changes in data cause large coefficient changes, (2) Standard errors inflate, making coefficients appear insignificant, (3) Model interpretation becomes unreliable. Detection: correlation matrix, VIF. Solutions: remove correlated features, use PCA, use ridge regression (L2 penalty), or combine features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: When should you use Spearman correlation instead of Pearson?"
      }), "\nA: Use Spearman when: (1) The relationship is monotonic but not linear (e.g., Y = log(X)), (2) Data contains outliers (Spearman is rank-based and robust), (3) Data is ordinal (ratings, rankings, Likert scales), (4) The normality assumption is violated. Spearman essentially computes Pearson on the rank-transformed data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What does R-squared mean? What are its limitations?"
      }), "\nA: R² measures the proportion of variance in Y explained by the model. R² = 0.80 means 80% of Y's variance is explained. Limitations: (1) Always increases with more predictors (even useless ones) — use adjusted R², (2) Doesn't indicate model correctness — a biased model can have high R², (3) Doesn't measure prediction accuracy on new data — use cross-validated R², (4) R² can be artificially high with outliers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What are the assumptions of linear regression and how do you diagnose violations?"
      }), "\nA: LINE assumptions: (1) Linearity: plot Y vs each X, plot residuals vs fitted. (2) Independence: Durbin-Watson test, or domain knowledge (no time series structure). (3) Normality of residuals: Q-Q plot, Shapiro-Wilk test. (4) Equal variance (homoscedasticity): residuals vs fitted plot (no funnel shape), Breusch-Pagan test. Violations: use transformations, robust standard errors, weighted least squares, or non-linear models."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How do you interpret a regression coefficient in a multiple linear regression?"
      }), "\nA: The coefficient β_j represents the expected change in Y for a one-unit increase in X_j, holding all other predictors constant (ceteris paribus). Important: if predictors are correlated, \"holding constant\" may be unrealistic. Always check units: if X is in ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mn, {
                  children: "1000"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "Y"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "1000s and Y is in "
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
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1000"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "an"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.2222em"
              },
              children: "Y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "in"
            })]
          })
        })]
      }), ", β_j is the dollar change per $1000 increase."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What is the difference between R-squared and Adjusted R-squared?"
      }), "\nA: R² always increases when you add a predictor (or stays the same). Adjusted R² penalizes for adding predictors using the formula: Adj R² = 1 - (1-R²)(n-1)/(n-p-1). Adjusted R² can decrease if a useless predictor is added. Use adjusted R² for model selection (comparing models with different numbers of predictors)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: Explain heteroscedasticity and how to detect/fix it."
      }), "\nA: Heteroscedasticity means the variance of residuals changes across levels of fitted values (often a funnel shape — larger predictions have larger variance). Detection: residual vs fitted plot (look for fan shape), Breusch-Pagan test, Goldfeld-Quandt test. Consequences: coefficient estimates remain unbiased, but standard errors are wrong (affects hypothesis tests and CIs). Fixes: use heteroscedasticity-consistent standard errors (HC0-HC3), transform Y (log, Box-Cox), or use weighted least squares."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: What is an interaction term in regression? When would you include one?"
      }), "\nA: An interaction term captures when the effect of one predictor depends on the level of another predictor. Model: y = β₀ + β₁x₁ + β₂x₂ + β₃(x₁×x₂) + ε. Example: the effect of advertising spend (x₁) on sales depends on whether it's a holiday (x₂). Include interactions when: domain knowledge suggests effect modification, or exploratory analysis shows different slopes across groups."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: How do you detect influential points in regression?"
      }), "\nA: Three key diagnostics: (1) Leverage (h_i): how far a point's X values are from the mean. High leverage > 2p/n. (2) Studentized residuals: how far the Y value is from the prediction. |residual| > 3 is a potential outlier. (3) Cook's Distance: combines leverage and residual to measure overall influence. Cook's D > 4/n is considered influential. Always investigate influential points: data entry error? legitimate extreme value? Remove only if you have a principled reason, not just to improve the model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: If Pearson r between X and Y is -0.85, what does this mean?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Weak positive relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Strong negative linear relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) No relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Non-linear relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Strong negative linear relationship"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: In linear regression, homoscedasticity means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Residuals have constant variance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Residuals are normally distributed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) X and Y have a linear relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Observations are independent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) Residuals have constant variance"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: If VIF for a predictor is 12, what should you do?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Nothing, VIF is fine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Remove or combine the predictor (multicollinearity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Add more predictors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Use Spearman correlation instead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Remove or combine the predictor (multicollinearity)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Adjusted R-squared is preferable to R-squared because:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is always higher"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It penalizes for adding unnecessary predictors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It measures causation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It is not affected by outliers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) It penalizes for adding unnecessary predictors"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Cook's Distance is used to identify:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Multicollinearity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Influential data points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Heteroscedasticity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Non-normality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Influential data points"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-pearson-vs-spearman-robustness",
      children: "Exercise 1: Pearson vs Spearman Robustness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python (SciPy) implementation that generates correlated data, injects one extreme outlier, and measures how much Pearson and Spearman correlation coefficients change."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use np.random.seed; compute stats.pearsonr and stats.spearmanr before and after injecting the outlier; print all four coefficients and the absolute drop for each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: Pearson r dropping noticeably more than Spearman rho, demonstrating the rank-based method's robustness to outliers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-multiple-regression-diagnostics-with-vif",
      children: "Exercise 2: Multiple Regression Diagnostics with VIF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that fits a multiple linear regression with scikit-learn and computes R-squared, adjusted R-squared, per-predictor VIF, and Cook's distance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: implement VIF manually by regressing each feature on the others (VIF = 1/(1 - R-squared)); compute Cook's distance with the leverage formula; flag features with VIF > 5 and points with Cook's D > 4/n."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: a printed table of coefficients, VIFs, and influential points, with clear flags for multicollinearity and influential observations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-heteroscedasticity-detection-and-fix",
      children: "Exercise 3: Heteroscedasticity Detection and Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that creates data where residual variance grows with x (y = 2x + noise scaled by x), fits a linear model, and detects the funnel pattern by correlating absolute residuals with fitted values."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: fit with sklearn LinearRegression; compute the correlation between |residuals| and fitted values (should be strongly positive); refit the model on log(y) and show the correlation drops toward zero."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: the funnel-pattern correlation before and after the log transformation, demonstrating how transformation restores homoscedasticity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs",
      children: "PYQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1 (Google ML Interview):"
      }), " You have a dataset with 100 features and want to predict housing prices. Your correlation matrix shows many features have |r| > 0.7 with each other. How do you proceed with feature selection?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": High inter-feature correlation means multicollinearity. Approach: (1) Compute VIF for each feature, remove features with VIF > 10 iteratively. (2) Use domain knowledge: if \"number of bedrooms\" and \"total square footage\" are correlated at r=0.75, keep only one (or combine into \"rooms per sqft\"). (3) Apply L1 regularization (Lasso) which automatically performs feature selection. (4) Use PCA to create orthogonal components. (5) Use correlation with target: keep features with |r| > 0.3 with price. (6) Validate with cross-validated model performance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2 (Amazon Applied Scientist):"
      }), " You build a linear regression model to predict delivery time. The R² is 0.92, but the model performs poorly in production. What could be wrong?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": High R² doesn't guarantee good predictions. Issues: (1) Overfitting — model captures noise, not signal. Check: high R² but low cross-validated R². (2) Data leakage — features that won't be available at prediction time (e.g., \"package delivered\" indicator). (3) Non-stationarity — the relationship changes over time (e.g., seasonal effects). (4) Outliers inflating R². (5) Model violates assumptions (e.g., autocorrelation in time series). Fix: cross-validation, remove leaked features, check residuals for patterns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3 (Meta Data Scientist):"
      }), " Your residual vs fitted plot shows a clear U-shaped pattern. What does this mean and what do you do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": A U-shaped pattern indicates non-linearity — the model systematically overpredicts at low and high values and underpredicts in the middle. Fixes: (1) Add polynomial terms (x², x³) or splines. (2) Transform the target variable (log, sqrt). (3) Use a non-linear model (random forest, gradient boosting). (4) Add interaction terms. (5) Check if the relationship truly is non-linear by examining partial dependence plots."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4 (Microsoft Data Scientist):"
      }), " Explain the bias-variance tradeoff in the context of linear regression. How do regularization techniques (Ridge, Lasso) address this?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Simple linear regression (few features) has high bias (underfits) but low variance. Complex regression (many features, polynomials) has low bias but high variance (overfits). Ridge (L2) adds a penalty on squared coefficients, shrinking them toward zero — reduces variance at cost of slightly increased bias. Lasso (L1) adds a penalty on absolute coefficients, setting some to exactly zero — performs feature selection. The optimal λ (regularization strength) balances bias and variance, found via cross-validation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusing correlation with causation"
          }), ": Just because two variables are correlated does not mean one causes the other. Always consider confounders, reverse causation, and spurious correlation before making causal claims."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignoring regression assumptions"
          }), ": Fitting a linear model without checking LINE assumptions leads to invalid inference (wrong p-values, CIs). Always run diagnostic plots after fitting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Using R² alone for model selection"
          }), ": R² always increases with more features. Use adjusted R², AIC, BIC, or cross-validated R² for model comparison."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Removing outliers without justification"
          }), ": Outliers may contain valuable information (fraud cases, edge cases). Investigate before removing. Use robust methods (Huber regression, quantile regression) instead of arbitrary removal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extrapolating beyond the data range"
          }), ": Linear regression cannot reliably predict outside the observed X range. The relationship may change. Always qualify predictions with \"within the observed data range.\""]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pearson r"
        }), ": linear relationship [-1, +1]; sensitive to outliers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spearman ρ"
        }), ": monotonic relationship; rank-based; robust to outliers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Covariance matrix"
        }), ": diagonal = variances, off-diagonal = covariances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear Regression"
        }), ": y = β₀ + β₁x₁ + ... + βₚxₚ + ε"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LINE assumptions"
        }), ": Linearity, Independence, Normality, Equal variance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R²"
        }), ": proportion of variance explained; increases with features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adjusted R²"
        }), ": penalizes for extra predictors; use for model selection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VIF"
        }), ": detects multicollinearity; VIF > 5-10 indicates problem"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Residual analysis"
        }), ": plot residuals vs fitted (linearity, homoscedasticity)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cook's D"
        }), ": identifies influential points; D > 4/n is concerning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RMSE"
        }), ": sqrt(MSE); in same units as Y; measures prediction error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interaction"
        }), ": X₁×X₂ when effect of X₁ depends on X₂"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heteroscedasticity"
        }), ": non-constant variance of residuals; use robust SE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multicollinearity"
        }), ": correlated predictors; use Ridge/Lasso or remove"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Correlation and regression analysis are foundational tools for understanding and modeling relationships between variables in AI systems. Pearson and Spearman correlation quantify different types of relationships (linear vs monotonic), while linear regression models the relationship between predictors and a target variable. The LINE assumptions (linearity, independence, normality, equal variance) must be verified through residual analysis and diagnostic tests. Model fit is evaluated using R-squared, adjusted R-squared, and prediction error metrics (RMSE, MAE). Multicollinearity, heteroscedasticity, and influential points must be addressed for reliable inference. These techniques are essential for feature engineering, model interpretation, and statistical modeling throughout the ML pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correlation vs Causation"
        }), ": Correlation does not imply causation - a third confounding variable (e.g., weather driving both ice cream sales and drownings) can create spurious relationships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pearson vs Spearman"
        }), ": Pearson measures linear relationships and is sensitive to outliers; Spearman measures monotonic rank-based relationships and is robust to outliers and ordinal data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R-squared"
        }), ": R-squared always increases when adding predictors - use adjusted R-squared or cross-validated R-squared for model comparison and selection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multicollinearity"
        }), ": VIF > 5-10 indicates correlated predictors that destabilize coefficients and inflate standard errors - remove features, combine them, or use ridge/Lasso regularization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heteroscedasticity"
        }), ": A funnel shape in residuals vs fitted means variance is not constant - coefficient estimates stay unbiased but standard errors are wrong; use robust standard errors or log-transform the target."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cook's Distance"
        }), ": Points with Cook's D > 4/n are influential - investigate them before removal; outliers can be legitimate data (fraud, edge cases)."]
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
            children: "Explain the core idea of Chapter 04: Correlation & Regression Analysis in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chapter 04: Correlation & Regression Analysis."
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
            children: "Describe a production bug caused by misunderstanding Chapter 04: Correlation & Regression Analysis. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chapter 04: Correlation & Regression Analysis from 10 users to 10 million?"
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
            children: "Compare Chapter 04: Correlation & Regression Analysis with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chapter 04: Correlation & Regression Analysis."
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
            children: "How does Chapter 04: Correlation & Regression Analysis behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chapter 04: Correlation & Regression Analysis run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chapter 04: Correlation & Regression Analysis that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chapter 04: Correlation & Regression Analysis explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chapter 04: Correlation & Regression Analysis\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chapter 04: Correlation & Regression Analysis to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chapter 04: Correlation & Regression Analysis (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chapter 04: Correlation & Regression Analysis and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chapter 04: Correlation & Regression Analysis-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chapter 04: Correlation & Regression Analysis interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chapter 04: Correlation & Regression Analysis in production today?"
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
        }), " Chapter 04: Correlation & Regression Analysis builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chapter 04: Correlation & Regression Analysis before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chapter 04: Correlation & Regression Analysis is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chapter 04: Correlation & Regression Analysis in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chapter 04: Correlation & Regression Analysis chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chapter 04: Correlation & Regression Analysis is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chapter 04: Correlation & Regression Analysis is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chapter 04: Correlation & Regression Analysis is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chapter 04: Correlation & Regression Analysis issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chapter 04: Correlation & Regression Analysis in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chapter 04: Correlation & Regression Analysis that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chapter 04: Correlation & Regression Analysis is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chapter 04: Correlation & Regression Analysis in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chapter 04: Correlation & Regression Analysis and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chapter 04: Correlation & Regression Analysis on an empty input?"
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
            children: "Complete Medium exercises, explain Chapter 04: Correlation & Regression Analysis to someone else"
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
        children: "Always write a one-line example of Chapter 04: Correlation & Regression Analysis from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chapter 04: Correlation & Regression Analysis when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chapter 04: Correlation & Regression Analysis twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chapter 04: Correlation & Regression Analysis snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chapter 04: Correlation & Regression Analysis listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chapter 04: Correlation & Regression Analysis to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chapter 04: Correlation & Regression Analysis by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chapter 04: Correlation & Regression Analysis to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chapter 04: Correlation & Regression Analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chapter 04: Correlation & Regression Analysis (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chapter 04: Correlation & Regression Analysis problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chapter 04: Correlation & Regression Analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chapter 04: Correlation & Regression Analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chapter 04: Correlation & Regression Analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chapter 04: Correlation & Regression Analysis fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chapter 04: Correlation & Regression Analysis is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chapter 04: Correlation & Regression Analysis is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chapter 04: Correlation & Regression Analysis, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chapter 04: Correlation & Regression Analysis asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 04: Correlation & Regression Analysis is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chapter 04: Correlation & Regression Analysis."
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
        children: "Chapter 04: Correlation & Regression Analysis emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chapter 04: Correlation & Regression Analysis today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chapter 04: Correlation & Regression Analysis — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chapter 04: Correlation & Regression Analysis changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chapter 04: Correlation & Regression Analysis."
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
        children: "Chapter 04: Correlation & Regression Analysis appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chapter 04: Correlation & Regression Analysis helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chapter 04: Correlation & Regression Analysis concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chapter 04: Correlation & Regression Analysis skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chapter 04: Correlation & Regression Analysis to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 04: Correlation & Regression Analysis is like a recipe"
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
        }), " — this chapter contributes the Chapter 04: Correlation & Regression Analysis skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-04correlationregressionanalysis-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chapter 04: Correlation & Regression Analysis in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-04correlationregressionanalysis-flash2",
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
      "data-qid": "24statisticsmathematics-04correlationregressionanalysis-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chapter 04: Correlation & Regression Analysis approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-04correlationregressionanalysis-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chapter 04: Correlation & Regression Analysis NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-04correlationregressionanalysis-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chapter 04: Correlation & Regression Analysis applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chapter 04: Correlation & Regression Analysis (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chapter 04: Correlation & Regression Analysis (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chapter 04: Correlation & Regression Analysis-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chapter 04: Correlation & Regression Analysis in production at scale"
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
        children: "Testing: pytest for unit tests of Chapter 04: Correlation & Regression Analysis code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chapter 04: Correlation & Regression Analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chapter 04: Correlation & Regression Analysis code."]
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
        }), " or your IDE's debugger to step through the Chapter 04: Correlation & Regression Analysis example code."]
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
        children: "Explain Chapter 04: Correlation & Regression Analysis in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chapter 04: Correlation & Regression Analysis."
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
        children: "Tell me about a time you debugged a Chapter 04: Correlation & Regression Analysis problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chapter 04: Correlation & Regression Analysis is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chapter 04: Correlation & Regression Analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chapter 04: Correlation & Regression Analysis logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chapter 04: Correlation & Regression Analysis without notes"
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
        }), ": a small team uses Chapter 04: Correlation & Regression Analysis daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chapter 04: Correlation & Regression Analysis patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chapter 04: Correlation & Regression Analysis principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chapter 04: Correlation & Regression Analysis shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chapter 04: Correlation & Regression Analysis to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials",
        children: "Chapter 05: Linear Algebra Essentials"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 04: Correlation & Regression Analysis, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chapter 04: Correlation & Regression Analysis depends on input size and distribution — always benchmark for your own data."
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