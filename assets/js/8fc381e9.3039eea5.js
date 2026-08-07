"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[15024],{

/***/ 71977
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_08_statistics_for_ml_practical_md_8fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-08-statistics-for-ml-practical-md-8fc.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_08_statistics_for_ml_practical_md_8fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/08-statistics-for-ml-practical","title":"Chapter 08: Statistics for ML — Practical","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":281,"frontMatter":{"id":"08-statistics-for-ml-practical","slug":"/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical","title":"Chapter 08: Statistics for ML — Practical","sidebar_label":"Chapter 08: Statistics for ML — Practical","sidebar_position":281},"sidebar":"coursesSidebar","previous":{"title":"Chapter 07: A/B Testing & Experimental Design","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design"},"next":{"title":"25 — Data Engineering for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical.md


const frontMatter = {
	id: '08-statistics-for-ml-practical',
	slug: '/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical',
	title: 'Chapter 08: Statistics for ML — Practical',
	sidebar_label: 'Chapter 08: Statistics for ML — Practical',
	sidebar_position: 281
};
const contentTitle = 'Chapter 08: Statistics for ML — Practical';

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
  "value": "The Statistical ML Pipeline",
  "id": "the-statistical-ml-pipeline",
  "level": 3
}, {
  "value": "Distribution Fitting",
  "id": "distribution-fitting",
  "level": 3
}, {
  "value": "Outlier Detection Methods",
  "id": "outlier-detection-methods",
  "level": 3
}, {
  "value": "Feature Selection Using Statistical Tests",
  "id": "feature-selection-using-statistical-tests",
  "level": 3
}, {
  "value": "Model Evaluation Statistics",
  "id": "model-evaluation-statistics",
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
  "value": "Exercise 1: Data Profiling and Distribution Fitting",
  "id": "exercise-1-data-profiling-and-distribution-fitting",
  "level": 3
}, {
  "value": "Exercise 2: Statistical Feature Selection",
  "id": "exercise-2-statistical-feature-selection",
  "level": 3
}, {
  "value": "Exercise 3: Model Comparison with Bootstrap CI and McNemar",
  "id": "exercise-3-model-comparison-with-bootstrap-ci-and-mcnemar",
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
        id: "chapter-08-statistics-for-ml--practical",
        children: "Chapter 08: Statistics for ML — Practical"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the five-stage statistical ML pipeline: profiling, distribution fitting, outlier detection, feature selection, and model evaluation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply IQR, z-score, and isolation forest outlier detection methods and interpret their agreement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain distribution fitting using the KS test and how it guides preprocessing choices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply ANOVA, mutual information, and chi-square tests to select features for classification and regression."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze model performance with bootstrap confidence intervals and McNemar's test for rigorous model comparison."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This capstone chapter brings together all statistical concepts from previous chapters into a practical ML pipeline. You will learn how to profile datasets, fit distributions to data, detect outliers using multiple methods, select features using statistical tests, and evaluate model performance with statistical rigor. By the end of this chapter, you will be able to build a complete statistical pipeline that ensures your ML models are built on solid statistical foundations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All previous chapters (01-07)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with scikit-learn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of ML model training and evaluation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept",
      children: "Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-statistical-ml-pipeline",
      children: "The Statistical ML Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A statistically rigorous ML pipeline integrates statistical methods at every stage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Profiling"
        }), ": Understand distributions, missing values, basic statistics of every feature"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution Fitting"
        }), ": Find the best probability distribution for each feature"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier Detection"
        }), ": Identify and handle anomalous data points"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Selection"
        }), ": Use statistical tests to select relevant features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model Evaluation"
        }), ": Apply statistical tests to compare models and validate performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "distribution-fitting",
      children: "Distribution Fitting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finding which probability distribution best fits your data is important for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choosing appropriate preprocessing (e.g., log transform for log-normal data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding data generation processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applying the correct statistical tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulating realistic data for testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outlier-detection-methods",
      children: "Outlier Detection Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Statistical Methods"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IQR"
        }), ": Points beyond Q1 - 1.5", (0,jsx_runtime.jsx)(_components.em, {
          children: "IQR or Q3 + 1.5"
        }), "IQR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Z-Score"
        }), ": Points with |z| > 3 (assuming normality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modified Z-Score"
        }), ": Using median and MAD (robust to non-normality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mahalanobis Distance"
        }), ": Multivariate outlier detection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ML-Based Methods"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolation Forest"
        }), ": Ensemble method that isolates outliers by random partitioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LOF (Local Outlier Factor)"
        }), ": Measures local density deviation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elliptic Envelope"
        }), ": Assumes Gaussian distribution, fits robust covariance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-selection-using-statistical-tests",
      children: "Feature Selection Using Statistical Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type of test depends on feature and target types"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Statistical Test"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pearson/Spearman correlation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANOVA (2+ groups), t-test (2 groups)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chi-square test of independence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANOVA, Mutual Information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual Information (general)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-evaluation-statistics",
      children: "Model Evaluation Statistics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Confidence Intervals for Metrics"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy: Normal approximation CI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUC-ROC: DeLong's method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Precision/Recall: Bootstrap CI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparing Models"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "McNemar's Test"
        }), ": Compare two classifiers on the same test set"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paired t-test (cross-validation)"
        }), ": Compare CV scores across folds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5x2 Cross-Validation"
        }), ": More robust than paired t-test for comparing models"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Raw Data] --> B[Data Profiling]\n    B --> C[Distribution Fitting]\n    C --> D[Outlier Detection]\n    D --> E[Feature Selection]\n    E --> F[Model Training]\n    F --> G[Model Evaluation]\n    G --> H[Statistical Comparison]\n\n    subgraph Profiling[Data Profiling]\n        B1[Shape: skew, kurtosis]\n        B2[Missing values %]\n        B3[Basic stats: mean, median, std]\n        B4[Visual: histograms, box plots]\n    end\n\n    subgraph Outliers[Outlier Detection]\n        D1[IQR Method] --> D4[Flag and Decide]\n        D2[Z-Score Method] --> D4\n        D3[Isolation Forest] --> D4\n        D4 --> D5[Remove / Cap / Transform]\n    end\n\n    subgraph FeatureSelection[Feature Selection]\n        E1[ANOVA F-test] --> E3[Select top k]\n        E2[Mutual Information] --> E3\n        E4[Chi-Square Test] --> E3\n        E5[Correlation with Target] --> E3\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Eval[Model Evaluation]\n        A[Holdout Set] --> B[Point Estimates<br/>Acc, Prec, Recall, F1]\n        B --> C[Confidence Intervals<br/>for each metric]\n        C --> D[Model Comparison]\n        D --> E[McNemar's Test<br/>or Paired t-test]\n    end\n\n    subgraph Pipeline[End-to-End Pipeline]\n        F[Raw Features] --> G[Statistical Feature Selection]\n        G --> H[Train Models]\n        H --> I[Compare with Statistical Tests]\n        I --> J[Deploy Best Model]\n        J --> K[Monitor Distribution Drift]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Life Analogy — Medical Diagnosis System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Building an ML system to diagnose diseases from patient data:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Profiling"
        }), ": Check age distribution (skewed toward elderly?), blood pressure (normal?), lab values (log-normal?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution Fitting"
        }), ": White blood cell count follows a log-normal distribution. Model it correctly for anomaly detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier Detection"
        }), ": A patient with WBC = 50,000 (normal is 4,000-11,000) — likely leukemia, not data error. Handle carefully."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Selection"
        }), ": Which lab tests are most predictive? Use ANOVA F-test between \"disease\" and \"no disease\" groups for each lab value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model Comparison"
        }), ": Does XGBoost significantly outperform logistic regression? Use McNemar's test on the same test set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment"
        }), ": Monitor that the distribution of features doesn't drift over time (population health changes seasonally)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Example — Credit Risk Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A fintech company builds a credit risk model:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Profiling"
        }), ": Income is highly right-skewed (mean=$65K, median=$45K). Log-transform."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier Detection"
        }), ": A few users have income=$0 (students) and income=$5M (outliers). Handle separately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Selection"
        }), ": 200 features reduced to 25 using mutual information with default status."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model Evaluation"
        }), ": Logistic regression has AUC=0.78, XGBoost has AUC=0.81. Is this significant? McNemar's test gives p=0.003 — yes, XGBoost is significantly better."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confidence Intervals"
        }), ": XGBoost AUC = 0.81 [95% CI: 0.79, 0.83]. The lower bound is still above logistic's AUC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom scipy import stats\nfrom scipy.stats import chi2_contingency, f_oneway, ks_2samp, normaltest\nfrom sklearn.ensemble import IsolationForest\nfrom sklearn.feature_selection import SelectKBest, f_classif, mutual_info_classif\nfrom sklearn.model_selection import cross_val_score, train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, roc_auc_score, confusion_matrix\nimport math\n\nnp.random.seed(42)\nprint(\"=== Statistics for ML: Practical Pipeline ===\\n\")\n\n# ============================================\n# 0. GENERATE SYNTHETIC DATASET\n# ============================================\nprint(\"--- Generating Synthetic Dataset ---\")\nn_samples = 1000\nn_features = 10\n\n# Create features with different distributions\nX = np.zeros((n_samples, n_features))\nX[:, 0] = np.random.normal(0, 1, n_samples)  # Normal\nX[:, 1] = np.random.exponential(2, n_samples)  # Exponential\nX[:, 2] = np.random.uniform(-3, 3, n_samples)  # Uniform\nX[:, 3] = np.random.lognormal(0, 0.5, n_samples)  # Log-normal\nX[:, 4] = np.random.binomial(1, 0.3, n_samples)  # Bernoulli\nX[:, 5] = np.random.poisson(5, n_samples)  # Poisson\nX[:, 6] = X[:, 0] + 0.5 * X[:, 1] + np.random.normal(0, 0.3, n_samples)  # Correlated\nX[:, 7] = np.random.normal(5, 2, n_samples)  # Another normal\nX[:, 8] = np.random.chisquare(3, n_samples)  # Chi-square\nX[:, 9] = np.random.gamma(2, 2, n_samples)  # Gamma\n\n# Target (binary): depends on features 0, 1, 3, 6\nlogit = 0.5 * X[:, 0] + 0.3 * X[:, 1] + 0.4 * X[:, 3] + 0.2 * X[:, 6] - 1\ny_prob = 1 / (1 + np.exp(-logit))\ny = (np.random.random(n_samples) < y_prob).astype(int)\n\nfeature_names = [f'Feature_{i}' for i in range(n_features)]\nprint(f\"Dataset: {n_samples} samples, {n_features} features\")\nprint(f\"Class distribution: {np.mean(y)*100:.1f}% positive\")\n\n# ============================================\n# 1. DATA PROFILING\n# ============================================\nprint(\"\\n=== 1. Data Profiling ===\")\n\nfor i in range(n_features):\n    data = X[:, i]\n    mean = np.mean(data)\n    median = np.median(data)\n    std = np.std(data, ddof=1)\n    skew = stats.skew(data, bias=False)\n    kurt = stats.kurtosis(data, bias=False, fisher=True)\n    q1 = np.percentile(data, 25)\n    q3 = np.percentile(data, 75)\n\n    # Normality test\n    if len(data) > 20:\n        _, p_normal = normaltest(data)\n    else:\n        p_normal = 0\n\n    norm_str = \"Normal\" if p_normal > 0.05 else \"Non-normal\"\n\n    print(f\"{feature_names[i]:<12} mean={mean:7.3f} median={median:7.3f} std={std:7.3f} \"\n          f\"skew={skew:7.3f} kurt={kurt:7.3f} [{norm_str}]\")\n\n# ============================================\n# 2. DISTRIBUTION FITTING\n# ============================================\nprint(\"\\n=== 2. Distribution Fitting ===\")\n\n# Test which distribution fits Feature 1 (exponential)\nfeature_idx = 1\ndata_fit = X[:, feature_idx]\n\ndistributions_to_test = [\n    ('Normal', stats.norm),\n    ('Exponential', stats.expon),\n    ('Log-Normal', stats.lognorm),\n    ('Gamma', stats.gamma),\n    ('Uniform', stats.uniform),\n    ('Chi-Square', stats.chi2),\n]\n\nprint(f\"Fitting distributions to {feature_names[feature_idx]}:\")\nbest_dist = None\nbest_ks_stat = float('inf')\n\nfor name, dist in distributions_to_test:\n    params = dist.fit(data_fit)\n    ks_stat, ks_p = ks_2samp(data_fit, dist.rvs(*params, size=len(data_fit)))\n    print(f\"  {name:<15}: KS stat={ks_stat:.4f}, p={ks_p:.4f}\")\n    if ks_stat < best_ks_stat:\n        best_ks_stat = ks_stat\n        best_dist = name\n\nprint(f\"Best fitting distribution: {best_dist} (lowest KS statistic)\")\n\n# ============================================\n# 3. OUTLIER DETECTION\n# ============================================\nprint(\"\\n=== 3. Outlier Detection ===\")\n\n# Add some outliers to feature 0\nX_outliers = X.copy()\noutlier_indices = np.random.choice(n_samples, 20, replace=False)\nX_outliers[outlier_indices, 0] = np.random.uniform(8, 12, 20)  # extreme values\n\nfeature_for_outliers = 0\n\n# Method 1: IQR\nq1_val = np.percentile(X_outliers[:, feature_for_outliers], 25)\nq3_val = np.percentile(X_outliers[:, feature_for_outliers], 75)\niqr_val = q3_val - q1_val\nlower_bound = q1_val - 1.5 * iqr_val\nupper_bound = q3_val + 1.5 * iqr_val\niqr_outliers = np.where((X_outliers[:, feature_for_outliers] < lower_bound) |\n                         (X_outliers[:, feature_for_outliers] > upper_bound))[0]\n\n# Method 2: Z-Score\nz_scores = np.abs(stats.zscore(X_outliers[:, feature_for_outliers]))\nz_outliers = np.where(z_scores > 3)[0]\n\n# Method 3: Isolation Forest\niso_forest = IsolationForest(contamination=0.05, random_state=42)\niso_preds = iso_forest.fit_predict(X_outliers)\niso_outliers = np.where(iso_preds == -1)[0]\n\nprint(f\"Outlier detection on {feature_names[feature_for_outliers]}:\")\nprint(f\"  IQR method: {len(iqr_outliers)} outliers detected\")\nprint(f\"  Z-score method: {len(z_outliers)} outliers detected\")\nprint(f\"  Isolation Forest: {len(iso_outliers)} outliers detected\")\n\n# Overlap analysis\ncommon = (set(iqr_outliers) & set(z_outliers) & set(iso_outliers))\nprint(f\"  Common outliers (all 3 methods): {len(common)}\")\nif common:\n    print(f\"  Outlier indices: {list(common)[:10]}\")\n\n# ============================================\n# 4. FEATURE SELECTION USING STATISTICAL TESTS\n# ============================================\nprint(\"\\n=== 4. Feature Selection ===\")\n\n# Method A: ANOVA F-test (for continuous features, binary target)\nf_scores, f_p_values = f_classif(X, y)\n\n# Method B: Mutual Information\nmi_scores = mutual_info_classif(X, y, random_state=42)\n\n# Method C: Correlation with target (for continuous)\ncorrelations = np.array([stats.pearsonr(X[:, i], y)[0] for i in range(n_features)])\n\nprint(f\"{'Feature':<12} {'ANOVA F':>8} {'ANOVA p':>10} {'MI':>8} {'Corr':>8}\")\nprint(\"-\" * 50)\nfor i in range(n_features):\n    print(f\"{feature_names[i]:<12} {f_scores[i]:>8.2f} {f_p_values[i]:>10.6f} {mi_scores[i]:>8.4f} {correlations[i]:>8.4f}\")\n\n# Select top k features\nk = 5\nselector = SelectKBest(f_classif, k=k)\nX_selected = selector.fit_transform(X, y)\nselected_indices = selector.get_support(indices=True)\nprint(f\"\\nTop {k} features (ANOVA): {[feature_names[i] for i in selected_indices]}\")\n\n# ============================================\n# 5. MODEL EVALUATION WITH STATISTICAL RIGOR\n# ============================================\nprint(\"\\n=== 5. Model Evaluation ===\")\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\n\n# Train two models\nlr = LogisticRegression(max_iter=1000, random_state=42)\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\n\nlr.fit(X_train, y_train)\nrf.fit(X_train, y_train)\n\n# Predictions\ny_pred_lr = lr.predict(X_test)\ny_pred_rf = rf.predict(X_test)\ny_prob_lr = lr.predict_proba(X_test)[:, 1]\ny_prob_rf = rf.predict_proba(X_test)[:, 1]\n\n# Metrics\nacc_lr = accuracy_score(y_test, y_pred_lr)\nacc_rf = accuracy_score(y_test, y_pred_rf)\nauc_lr = roc_auc_score(y_test, y_prob_lr)\nauc_rf = roc_auc_score(y_test, y_prob_rf)\n\nprint(f\"Logistic Regression: Accuracy={acc_lr:.4f}, AUC={auc_lr:.4f}\")\nprint(f\"Random Forest:       Accuracy={acc_rf:.4f}, AUC={auc_rf:.4f}\")\n\n# ============================================\n# 6. CONFIDENCE INTERVALS FOR METRICS (BOOTSTRAP)\n# ============================================\nprint(\"\\n--- Confidence Intervals (Bootstrap) ---\")\n\ndef bootstrap_ci(y_true, y_pred, metric_func, n_bootstrap=1000, ci=0.95):\n    n = len(y_true)\n    metrics = []\n\n    for _ in range(n_bootstrap):\n        indices = np.random.choice(n, n, replace=True)\n        y_true_sample = y_true[indices]\n        y_pred_sample = y_pred[indices]\n        metrics.append(metric_func(y_true_sample, y_pred_sample))\n\n    metrics.sort()\n    lower_idx = int(n_bootstrap * (1 - ci) / 2)\n    upper_idx = int(n_bootstrap * (1 + ci) / 2)\n\n    return metrics[lower_idx], metrics[upper_idx]\n\n# Bootstrap CI for AUC\nauc_lower_rf, auc_upper_rf = bootstrap_ci(y_test, y_prob_rf, lambda y, p: roc_auc_score(y, p))\nauc_lower_lr, auc_upper_lr = bootstrap_ci(y_test, y_prob_lr, lambda y, p: roc_auc_score(y, p))\n\nprint(f\"Logistic Regression AUC: {auc_lr:.4f} [{auc_lower_lr:.4f}, {auc_upper_lr:.4f}]\")\nprint(f\"Random Forest AUC:       {auc_rf:.4f} [{auc_lower_rf:.4f}, {auc_upper_rf:.4f}]\")\n\n# ============================================\n# 7. MCNEMAR'S TEST FOR MODEL COMPARISON\n# ============================================\nprint(\"\\n--- McNemar's Test ---\")\n\ndef mcnemar_test(y_true, y_pred_a, y_pred_b):\n    # Contingency table\n    n00 = np.sum((y_pred_a != y_true) & (y_pred_b != y_true))\n    n01 = np.sum((y_pred_a != y_true) & (y_pred_b == y_true))\n    n10 = np.sum((y_pred_a == y_true) & (y_pred_b != y_true))\n    n11 = np.sum((y_pred_a == y_true) & (y_pred_b == y_true))\n\n    # McNemar's chi-square statistic (with continuity correction)\n    chi2 = (abs(n01 - n10) - 1)**2 / (n01 + n10) if (n01 + n10) > 0 else 0\n    p_value = 1 - stats.chi2.cdf(chi2, 1)\n\n    return chi2, p_value, {'n00': n00, 'n01': n01, 'n10': n10, 'n11': n11}\n\nchi2_mc, p_mc, table = mcnemar_test(y_test, y_pred_lr, y_pred_rf)\nprint(f\"Contingency table: {table}\")\nprint(f\"McNemar chi-square: {chi2_mc:.4f}\")\nprint(f\"p-value: {p_mc:.4f}\")\n\nif p_mc < 0.05:\n    print(f\"p < 0.05: Models have significantly different performance!\")\n    if table['n01'] < table['n10']:\n        print(f\"  => Random Forest is better ({table['n10']} vs {table['n01']} correct)\")\n    else:\n        print(f\"  => Logistic Regression is better ({table['n01']} vs {table['n10']} correct)\")\nelse:\n    print(f\"p >= 0.05: No significant difference between models\")\n\n# ============================================\n# 8. CROSS-VALIDATED MODEL COMPARISON\n# ============================================\nprint(\"\\n--- Cross-Validation Comparison ---\")\n\ncv_folds = 5\nlr_cv_scores = cross_val_score(lr, X, y, cv=cv_folds, scoring='accuracy')\nrf_cv_scores = cross_val_score(rf, X, y, cv=cv_folds, scoring='accuracy')\n\nprint(f\"Logistic Regression CV: {lr_cv_scores}\")\nprint(f\"  Mean: {np.mean(lr_cv_scores):.4f}, Std: {np.std(lr_cv_scores, ddof=1):.4f}\")\nprint(f\"Random Forest CV: {rf_cv_scores}\")\nprint(f\"  Mean: {np.mean(rf_cv_scores):.4f}, Std: {np.std(rf_cv_scores, ddof=1):.4f}\")\n\n# Paired t-test on CV scores\nt_stat_cv, p_cv = stats.ttest_rel(rf_cv_scores, lr_cv_scores)\nprint(f\"\\nPaired t-test: t={t_stat_cv:.4f}, p={p_cv:.4f}\")\n\nif p_cv < 0.05:\n    print(f\"p < 0.05: Significant difference in CV performance\")\nelse:\n    print(f\"p >= 0.05: No significant difference in CV performance\")\n\n# ============================================\n# 9. CHI-SQUARE TEST FOR FEATURE-TARGET ASSOCIATION\n# ============================================\nprint(\"\\n--- Chi-Square Test for Categorical Features ---\")\n\n# Binarize feature 0 for chi-square test\nfeature_binarized = (X[:, 0] > np.median(X[:, 0])).astype(int)\n\ncontingency = np.zeros((2, 2))\nfor f_val in [0, 1]:\n    for t_val in [0, 1]:\n        contingency[f_val, t_val] = np.sum((feature_binarized == f_val) & (y == t_val))\n\nchi2_stat, chi2_p, chi2_dof, expected = chi2_contingency(contingency)\nprint(f\"Contingency table (Feature_0 binarized vs Target):\\n{contingency}\")\nprint(f\"Expected (under independence):\\n{expected}\")\nprint(f\"Chi-square: {chi2_stat:.4f}, p-value: {chi2_p:.4f}\")\n\nif chi2_p < 0.05:\n    print(\"Significant association between feature and target.\")\nelse:\n    print(\"No significant association.\")\n\n# ============================================\n# 10. KS TEST FOR DISTRIBUTION COMPARISON\n# ============================================\nprint(\"\\n--- KS Test: Do train and test distributions match? ---\")\n\nX_train_ks, X_test_ks, _, _ = train_test_split(X, y, test_size=0.3, random_state=42)\n\nprint(f\"{'Feature':<12} {'KS stat':>8} {'p-value':>10} {'Conclusion':<15}\")\nprint(\"-\" * 50)\nfor i in range(n_features):\n    ks_stat, ks_p = ks_2samp(X_train_ks[:, i], X_test_ks[:, i])\n    conclusion = \"Same dist\" if ks_p > 0.05 else \"Different!\"\n    print(f\"{feature_names[i]:<12} {ks_stat:>8.4f} {ks_p:>10.4f} {conclusion:<15}\")\n\n# Expected Output (approximate):\n# === 1. Data Profiling ===\n# Feature_0    mean= -0.010 median= -0.040 std= 0.981 skew=0.032 kurt=0.038 [Normal]\n# Feature_1    mean= 1.982 median= 1.383 std= 1.953 skew=1.023 kurt=0.687 [Non-normal]\n#\n# === 3. Outlier Detection ===\n#   IQR method: 34 outliers detected\n#   Z-score method: 23 outliers detected\n#   Isolation Forest: 50 outliers detected\n#\n# === 4. Feature Selection ===\n# Feature_0    ANOVA F: 26.34 ANOVA p: 0.0000  MI: 0.0523\n#\n# === 5. Model Evaluation ===\n# Logistic Regression: Accuracy=0.7567, AUC=0.8234\n# Random Forest:       Accuracy=0.7700, AUC=0.8412\n#\n# --- McNemar's Test ---\n# p-value: 0.0234 => Models have significantly different performance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Describe a complete statistical pipeline for an ML project. Where do statistical methods add the most value?"
      }), "\nA: The pipeline has 5 stages: (1) Data profiling — understand distributions, detect data quality issues early. (2) Distribution fitting — choose appropriate transformations and models. (3) Outlier detection — using IQR, z-score, and isolation forest. (4) Feature selection — ANOVA, mutual information, chi-square tests to select predictive features. (5) Model evaluation — confidence intervals for metrics, McNemar's test for model comparison. Statistics add the most value in stages 1 and 5: understanding your data before modeling, and rigorously evaluating results before deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you select features for a classification problem where you have 500 features and 10,000 samples?"
      }), "\nA: Use a multi-stage approach: (1) Remove low-variance features (variance threshold), (2) Compute correlation with target, keep top 200 by absolute correlation, (3) Compute mutual information (captures non-linear relationships), keep top 100, (4) Use ANOVA F-test for remaining, keep top 50, (5) Check multicollinearity among selected features (VIF), (6) Use L1-regularized model (Lasso) to further prune, (7) Validate with cross-validated performance. Always use domain knowledge alongside statistical methods."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Explain how bootstrap confidence intervals work for ML metrics."
      }), "\nA: Bootstrap resamples the test set with replacement B times (typically 1000). For each resample, compute the metric (accuracy, AUC). Sort the B metric values. The 95% CI is [2.5th percentile, 97.5th percentile]. Bootstrap makes no distributional assumptions and works for any metric. It's especially useful for metrics like AUC where the sampling distribution is complex. Example: AUC = 0.85, bootstrap 95% CI = [0.82, 0.88] means we're 95% confident the true AUC is in this range."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is McNemar's test and when would you use it?"
      }), "\nA: McNemar's test is a non-parametric test for paired nominal data. In ML, it compares two classifiers on the same test set using a 2x2 contingency table of correct/incorrect predictions: n00 (both wrong), n01 (A wrong, B right), n10 (A right, B wrong), n11 (both right). The test statistic focuses on n01 vs n10 — if one classifier is better, it should have more cases where it's right while the other is wrong. Use: \"Is model B significantly better than model A on this test set?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: How do you detect and handle concept drift in production ML systems?"
      }), "\nA: Concept drift = the statistical properties of the target variable change over time, degrading model performance. Detection methods: (1) Monitor prediction distribution (PSI = Population Stability Index), (2) Monitor feature distributions (KS test between recent and training data), (3) Monitor actual vs predicted error rate (CUSUM, Page-Hinkley test), (4) Monitor business metrics directly. Handling: (1) Retrain periodically (time-based), (2) Retrain when drift is detected (trigger-based), (3) Online learning (update model incrementally), (4) Ensemble of models trained on different time windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: Compare different outlier detection methods and when to use each."
      }), "\nA: IQR method: simple, no assumptions, best for univariate outlier detection on any distribution. Z-score: assumes normality, good for normally distributed features. Modified Z-score (using MAD): robust to non-normality, good general-purpose univariate method. Mahalanobis distance: multivariate, assumes Gaussian, detects unusual combinations of values. Isolation Forest: no distributional assumptions, works in high dimensions, good for large datasets. LOF: detects local outliers (points that are outliers relative to their neighbors). Use multiple methods and consider outliers flagged by 2+ methods as most suspicious."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: How would you use statistics to decide whether to deploy a new ML model to production?"
      }), "\nA: (1) Define success metrics (accuracy, business KPIs) and minimum acceptable threshold, (2) Run an A/B test with the new model vs current model for 2-4 weeks, (3) Calculate confidence intervals for the improvement — if the lower bound exceeds the minimum threshold, deploy, (4) Check that guardrail metrics (latency, cost, user satisfaction) don't degrade, (5) Use McNemar's test to confirm the new model is significantly better, (6) Analyze segments to ensure the model doesn't harm specific user groups, (7) Set up monitoring for distribution drift post-deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: Explain the difference between parametric and non-parametric feature selection methods."
      }), "\nA: Parametric methods (ANOVA F-test, Pearson correlation) assume specific distributions (normality, linearity). They are more powerful when assumptions hold but can miss non-linear relationships. Non-parametric methods (Spearman correlation, Mutual Information, Kendall's tau) make no distributional assumptions. Mutual Information can capture any type of relationship (linear, non-linear, complex interactions) but requires more data. In practice: use ANOVA as a quick filter, then use Mutual Information for the final selection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: What is the Population Stability Index (PSI) and how is it used?"
      }), "\nA: PSI measures how much a variable's distribution has shifted between two time periods. PSI = sum((p_i - q_i) * ln(p_i / q_i)) where p_i is the proportion in bin i for the current period, q_i for the reference period. Interpretations: PSI < 0.1 = no significant shift, 0.1-0.25 = moderate shift (investigate), > 0.25 = significant shift (retrain needed). In credit scoring (where it originated), PSI is monitored monthly. In ML, monitor PSI for key features and model predictions to detect drift."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: How would you design a statistical test to compare two regression models?"
      }), "\nA: For regression, use: (1) Paired t-test on cross-validation MSE/RMSE scores — compare mean difference across folds, (2) Diebold-Mariano test — specifically designed for comparing predictive accuracy of two forecasts, (3) Bootstrap the difference in RMSE on a holdout set — compute 95% CI for the RMSE difference. If the CI doesn't include zero, the models differ significantly, (4) For non-nested models, use the Davidson-MacKinnon J-test. Always report: point estimates of both models, the difference, and a confidence interval for the improvement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: McNemar's test is used for:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Comparing two independent groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Comparing two classifiers on the same test set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Testing normality of residuals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Feature selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Comparing two classifiers on the same test set"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Which outlier detection method is most robust to non-normal distributions?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Z-score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) IQR method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Elliptic Envelope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both A and B"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) IQR method"
        }), " (IQR doesn't assume normality; Z-score does)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: The KS (Kolmogorov-Smirnov) test compares:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Means of two groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Variances of two groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Distributions of two samples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Proportions of two groups"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Distributions of two samples"
        }), " — KS tests whether two samples come from the same distribution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: For feature selection with a continuous target, which method is appropriate?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Chi-square test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ANOVA F-test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Mutual Information (regression version)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both B and C"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: D) Both B and C"
        }), " — ANOVA for continuous features vs categorical target; Mutual Information works for both regression and classification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Bootstrap confidence intervals for ML metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Assume the metric is normally distributed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Make no distributional assumptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Can only be used for accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Require at least 10,000 samples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Make no distributional assumptions"
        }), " — bootstrap is non-parametric"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-data-profiling-and-distribution-fitting",
      children: "Exercise 1: Data Profiling and Distribution Fitting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python (NumPy/SciPy) implementation that generates features with known distributions (normal, exponential, lognormal), profiles them, and uses the KS test to find the best-fitting distribution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: compute mean, median, std, skewness, kurtosis, and a normality test per feature; fit candidate distributions with dist.fit and compare with ks_2samp; print the best-fitting distribution per feature."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: a profile table per feature and a best-fit verdict (e.g., exponential feature matched by Exponential but rejected by Normal) with KS statistics."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-statistical-feature-selection",
      children: "Exercise 2: Statistical Feature Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that builds a synthetic classification dataset where only a few features are predictive, then ranks features with ANOVA F-scores, mutual information, and a chi-square test."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: use sklearn f_classif and mutual_info_classif; binarize a continuous feature at the median for chi2_contingency; print the top-k features from each ranking and the overlap between rankings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: ranked feature tables showing the predictive features rising to the top in both ANOVA and mutual information, with the chi-square p-values for the binarized feature."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-model-comparison-with-bootstrap-ci-and-mcnemar",
      children: "Exercise 3: Model Comparison with Bootstrap CI and McNemar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python implementation that trains logistic regression and a random forest on the same split, then compares them with 95% bootstrap confidence intervals for AUC and McNemar's test."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements: hand-roll bootstrap_ci (resample with replacement 1000 times, take percentile interval) and mcnemar_test (2x2 error table, chi2 with continuity correction); report whether the CI for the AUC difference includes zero."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected output: accuracy and AUC for both models, bootstrap CIs for each AUC, the McNemar chi-square and p-value, and a final verdict on whether the difference is statistically significant."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pyqs",
      children: "PYQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1 (Google ML Interview):"
      }), " You have a dataset with 50 features. You need to select the most important features for a binary classification task. Walk through your approach using statistical methods."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": (1) Remove near-zero variance features (threshold: variance < 0.01). (2) For each remaining feature, compute the correlation with target. For continuous features: point-biserial correlation. For categorical: Cramer's V or chi-square. (3) Compute Mutual Information for all features (captures non-linear relationships). (4) Rank features by MI score, keep top 20. (5) Check multicollinearity among selected features using VIF — remove features with VIF > 10. (6) Use forward selection with AIC/BIC: add features one by one, stop when improvement is negligible. (7) Validate with L1-regularized model (Lasso) — features with non-zero coefficients are the final set. (8) Cross-validate the entire selection pipeline to avoid selection bias."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2 (Amazon Applied Scientist):"
      }), " Your production ML model's accuracy dropped from 85% to 78%. How would you use statistical methods to diagnose the issue?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": (1) Check for data drift — for each feature, run KS test between current data and training data. Flag features with p < 0.01 as drifted. (2) Check for concept drift — compare actual vs predicted values. Use CUSUM or Page-Hinkley test on the error rate. (3) Check for population shift — compute PSI for model predictions between training and current. (4) Check for outlier prevalence — compare the proportion of outliers (via IQR or isolation forest) between training and current data. (5) Segment analysis — use chi-square test to check if the error distribution has shifted across segments. (6) Check model calibration — use Hosmer-Lemeshow test or reliability diagrams. (7) If drift is detected: retrain on recent data, add drift detection monitoring, and set up automatic retraining triggers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3 (Meta Data Scientist):"
      }), " You trained a new model that shows 0.5% improvement in AUC (from 0.800 to 0.805). The team wants to deploy. How would you determine if this improvement is real and worth deploying?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": (1) Statistical significance: use McNemar's test on the same test set. A 0.005 AUC increase with n=100K might be significant (p < 0.05), but with n=1K it might not be. (2) Confidence intervals: bootstrap both AUCs and compute the 95% CI for the difference. If the CI includes zero, the improvement isn't reliable. (3) Practical significance: does 0.5% AUC improvement translate to meaningful business impact? (4) Cross-validation stability: is the improvement consistent across CV folds? Use paired t-test on CV scores. (5) Robustness: test on different data slices, time periods, and segments. A 0.5% improvement that only holds for one segment might not be worth deploying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4 (Microsoft Data Scientist):"
      }), " Explain how you would use the Isolation Forest algorithm for outlier detection in a high-dimensional dataset. When would you prefer it over statistical methods like Z-score or IQR?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), ": Isolation Forest works by randomly selecting a feature and a split value, recursively partitioning data until each point is isolated. Outliers require fewer splits to isolate (they are \"different\" from the bulk). Advantages over Z-score/IQR: (1) Works in high dimensions — Z-score and IQR are univariate, Isolation Forest handles multivariate outliers, (2) No distributional assumptions — Z-score assumes normality, (3) Handles non-linear relationships, (4) Computationally efficient (O(n log n)), (5) Naturally handles both global and local outliers. Prefer statistical methods when: (1) Data is low-dimensional (1-3 features), (2) Speed is critical and data is well-understood, (3) You need interpretable thresholds, (4) Features are independent and normally distributed. Always use domain knowledge to validate outliers flagged by any method."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applying statistical tests without checking assumptions"
          }), ": ANOVA assumes normality and equal variance. McNemar assumes paired data (same test set). Always check assumptions before interpreting results."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Using the same data for feature selection and evaluation"
          }), ": If you select features on the full dataset, then evaluate on a holdout set, you've already leaked information. Always perform feature selection within the cross-validation loop or on the training set only."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignoring multiple testing in feature selection"
          }), ": Selecting 10 features from 500 using individual p-values means many false positives by chance. Use corrected p-values (Bonferroni, FDR) or methods that handle multiple testing natively (Lasso, RFE)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reporting only point estimates without uncertainty"
          }), ": An accuracy of 85% without a confidence interval is meaningless. Always report CIs, especially when comparing models. Bootstrap CIs are easy to compute and assumption-free."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Assuming model improvement is real without statistical testing"
          }), ": A 1% accuracy improvement might be due to random chance, especially with small test sets. Always use McNemar's test or a paired test to confirm improvements are statistically significant."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data profiling"
        }), ": mean, median, std, skewness, kurtosis, normality test for each feature"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution fitting"
        }), ": use KS test to find best distribution; guide preprocessing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier detection"
        }), ": IQR (univariate, robust), Z-score (univariate, normal), Isolation Forest (multivariate, general)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier handling"
        }), ": investigate before removing; may be valuable (fraud, edge cases)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature selection"
        }), ": ANOVA (continuous vs categorical), MI (general), Chi-square (categorical vs categorical), correlation (continuous vs continuous)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model evaluation CI"
        }), ": bootstrap the metric on test set; report [2.5%, 97.5%] percentile interval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model comparison"
        }), ": McNemar's test (classification, same test set), paired t-test on CV scores"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "McNemar statistic"
        }), ": chi2 = (|n01 - n10| - 1)^2 / (n01 + n10); df=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift detection"
        }), ": KS test for feature drift, PSI for prediction drift, CUSUM for error rate drift"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data leakage"
        }), ": never use test data for feature selection or any preprocessing decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple testing"
        }), ": use Bonferroni or FDR when testing many features/hypotheses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always report"
        }), ": point estimate, CI, effect size, and practical significance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter integrates all statistical concepts from the module into a practical ML pipeline. Data profiling reveals distribution shapes, guides preprocessing, and identifies data quality issues early. Distribution fitting helps choose appropriate statistical tests and transformations. Outlier detection using multiple methods (IQR, z-score, isolation forest) ensures robust data cleaning. Statistical feature selection (ANOVA, mutual information, chi-square) identifies the most predictive features while controlling false positives. Model evaluation with bootstrap confidence intervals and McNemar's test provides rigorous, assumption-light model comparison. Together, these methods form a statistically sound foundation for building, evaluating, and deploying ML models with confidence. Every AI engineer should run this pipeline automatically before finalizing any model for production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Leakage"
        }), ": Never use test data for feature selection or preprocessing decisions - select features inside the cross-validation loop or on training data only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bootstrap CI"
        }), ": Bootstrap resamples the test set with replacement (typically 1000 times) and takes the 2.5th/97.5th percentiles - it makes no distributional assumptions and works for any metric."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "McNemar's Test"
        }), ": Use it to compare two classifiers on the same test set via the 2x2 contingency table of errors (n01 vs n10); chi2 = (|n01 - n10| - 1)^2 / (n01 + n10)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Testing"
        }), ": Selecting features by individual p-values over hundreds of features produces many false positives - apply Bonferroni or FDR, or use Lasso which handles selection natively."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outlier Methods"
        }), ": IQR makes no distributional assumptions, z-score assumes normality, isolation forest handles high-dimensional multivariate outliers - flag points found by 2+ methods as most suspicious."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift Monitoring"
        }), ": Use the KS test for feature drift, PSI for prediction drift (PSI > 0.25 signals retraining), and CUSUM/Page-Hinkley for error-rate drift."]
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
            children: "Explain the core idea of Chapter 08: Statistics for ML — Practical in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Chapter 08: Statistics for ML — Practical."
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
            children: "Describe a production bug caused by misunderstanding Chapter 08: Statistics for ML — Practical. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Chapter 08: Statistics for ML — Practical from 10 users to 10 million?"
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
            children: "Compare Chapter 08: Statistics for ML — Practical with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Chapter 08: Statistics for ML — Practical."
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
            children: "How does Chapter 08: Statistics for ML — Practical behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Chapter 08: Statistics for ML — Practical run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Chapter 08: Statistics for ML — Practical that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Chapter 08: Statistics for ML — Practical explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Chapter 08: Statistics for ML — Practical\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Chapter 08: Statistics for ML — Practical to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Chapter 08: Statistics for ML — Practical (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Chapter 08: Statistics for ML — Practical and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Chapter 08: Statistics for ML — Practical-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Chapter 08: Statistics for ML — Practical interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Chapter 08: Statistics for ML — Practical in production today?"
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
        }), " Chapter 08: Statistics for ML — Practical builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Chapter 08: Statistics for ML — Practical before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Chapter 08: Statistics for ML — Practical is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Chapter 08: Statistics for ML — Practical in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Chapter 08: Statistics for ML — Practical chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Chapter 08: Statistics for ML — Practical is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Chapter 08: Statistics for ML — Practical is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Chapter 08: Statistics for ML — Practical is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Chapter 08: Statistics for ML — Practical issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Chapter 08: Statistics for ML — Practical in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Chapter 08: Statistics for ML — Practical that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Chapter 08: Statistics for ML — Practical is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Chapter 08: Statistics for ML — Practical in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Chapter 08: Statistics for ML — Practical and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Chapter 08: Statistics for ML — Practical on an empty input?"
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
            children: "Complete Medium exercises, explain Chapter 08: Statistics for ML — Practical to someone else"
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
        children: "Always write a one-line example of Chapter 08: Statistics for ML — Practical from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Chapter 08: Statistics for ML — Practical when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Chapter 08: Statistics for ML — Practical twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Chapter 08: Statistics for ML — Practical snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Chapter 08: Statistics for ML — Practical listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Chapter 08: Statistics for ML — Practical to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Chapter 08: Statistics for ML — Practical by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Chapter 08: Statistics for ML — Practical to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Chapter 08: Statistics for ML — Practical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Chapter 08: Statistics for ML — Practical (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Chapter 08: Statistics for ML — Practical problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Chapter 08: Statistics for ML — Practical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Chapter 08: Statistics for ML — Practical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Chapter 08: Statistics for ML — Practical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Chapter 08: Statistics for ML — Practical fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Chapter 08: Statistics for ML — Practical is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Chapter 08: Statistics for ML — Practical is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Chapter 08: Statistics for ML — Practical, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Chapter 08: Statistics for ML — Practical asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 08: Statistics for ML — Practical is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Chapter 08: Statistics for ML — Practical."
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
        children: "Chapter 08: Statistics for ML — Practical emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Chapter 08: Statistics for ML — Practical today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Chapter 08: Statistics for ML — Practical — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Chapter 08: Statistics for ML — Practical changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Chapter 08: Statistics for ML — Practical."
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
        children: "Chapter 08: Statistics for ML — Practical appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Chapter 08: Statistics for ML — Practical helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Chapter 08: Statistics for ML — Practical concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Chapter 08: Statistics for ML — Practical skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Chapter 08: Statistics for ML — Practical to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 08: Statistics for ML — Practical is like a recipe"
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
        }), " — this chapter contributes the Chapter 08: Statistics for ML — Practical skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-08statisticsformlpractical-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Chapter 08: Statistics for ML — Practical in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-08statisticsformlpractical-flash2",
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
      "data-qid": "24statisticsmathematics-08statisticsformlpractical-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Chapter 08: Statistics for ML — Practical approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-08statisticsformlpractical-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Chapter 08: Statistics for ML — Practical NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "24statisticsmathematics-08statisticsformlpractical-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Chapter 08: Statistics for ML — Practical applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Chapter 08: Statistics for ML — Practical (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Chapter 08: Statistics for ML — Practical (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Chapter 08: Statistics for ML — Practical-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Chapter 08: Statistics for ML — Practical in production at scale"
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
        children: "Testing: pytest for unit tests of Chapter 08: Statistics for ML — Practical code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Chapter 08: Statistics for ML — Practical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Chapter 08: Statistics for ML — Practical code."]
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
        }), " or your IDE's debugger to step through the Chapter 08: Statistics for ML — Practical example code."]
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
        children: "Explain Chapter 08: Statistics for ML — Practical in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Chapter 08: Statistics for ML — Practical."
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
        children: "Tell me about a time you debugged a Chapter 08: Statistics for ML — Practical problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Chapter 08: Statistics for ML — Practical is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Chapter 08: Statistics for ML — Practical."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Chapter 08: Statistics for ML — Practical logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Chapter 08: Statistics for ML — Practical without notes"
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
        }), ": a small team uses Chapter 08: Statistics for ML — Practical daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Chapter 08: Statistics for ML — Practical patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Chapter 08: Statistics for ML — Practical principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Chapter 08: Statistics for ML — Practical shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Chapter 08: Statistics for ML — Practical to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 08: Statistics for ML — Practical, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Chapter 08: Statistics for ML — Practical depends on input size and distribution — always benchmark for your own data."
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