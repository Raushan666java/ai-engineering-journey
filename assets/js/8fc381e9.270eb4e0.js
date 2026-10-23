"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5024],{

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
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_08_statistics_for_ml_practical_md_8fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/08-statistics-for-ml-practical","title":"Chapter 08: Statistics for ML — Practical","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":306,"frontMatter":{"id":"08-statistics-for-ml-practical","slug":"/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical","title":"Chapter 08: Statistics for ML — Practical","sidebar_label":"Chapter 08: Statistics for ML — Practical","sidebar_position":306},"sidebar":"placementSidebar","previous":{"title":"Chapter 07: A/B Testing & Experimental Design","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/07-ab-testing-experimental-design"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/visual-notes"}}');
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
	sidebar_position: 306
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
    mermaid: "mermaid",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Raw Data] --> B[Data Profiling]\r\n    B --> C[Distribution Fitting]\r\n    C --> D[Outlier Detection]\r\n    D --> E[Feature Selection]\r\n    E --> F[Model Training]\r\n    F --> G[Model Evaluation]\r\n    G --> H[Statistical Comparison]\r\n\r\n    subgraph Profiling[Data Profiling]\r\n        B1[Shape: skew, kurtosis]\r\n        B2[Missing values %]\r\n        B3[Basic stats: mean, median, std]\r\n        B4[Visual: histograms, box plots]\r\n    end\r\n\r\n    subgraph Outliers[Outlier Detection]\r\n        D1[IQR Method] --> D4[Flag and Decide]\r\n        D2[Z-Score Method] --> D4\r\n        D3[Isolation Forest] --> D4\r\n        D4 --> D5[Remove / Cap / Transform]\r\n    end\r\n\r\n    subgraph FeatureSelection[Feature Selection]\r\n        E1[ANOVA F-test] --> E3[Select top k]\r\n        E2[Mutual Information] --> E3\r\n        E4[Chi-Square Test] --> E3\r\n        E5[Correlation with Target] --> E3\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Eval[Model Evaluation]\r\n        A[Holdout Set] --> B[Point Estimates<br/>Acc, Prec, Recall, F1]\r\n        B --> C[Confidence Intervals<br/>for each metric]\r\n        C --> D[Model Comparison]\r\n        D --> E[McNemar's Test<br/>or Paired t-test]\r\n    end\r\n\r\n    subgraph Pipeline[End-to-End Pipeline]\r\n        F[Raw Features] --> G[Statistical Feature Selection]\r\n        G --> H[Train Models]\r\n        H --> I[Compare with Statistical Tests]\r\n        I --> J[Deploy Best Model]\r\n        J --> K[Monitor Distribution Drift]\r\n    end"
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
        children: "import numpy as np\r\nfrom scipy import stats\r\nfrom scipy.stats import chi2_contingency, f_oneway, ks_2samp, normaltest\r\nfrom sklearn.ensemble import IsolationForest\r\nfrom sklearn.feature_selection import SelectKBest, f_classif, mutual_info_classif\r\nfrom sklearn.model_selection import cross_val_score, train_test_split\r\nfrom sklearn.linear_model import LogisticRegression\r\nfrom sklearn.ensemble import RandomForestClassifier\r\nfrom sklearn.metrics import accuracy_score, roc_auc_score, confusion_matrix\r\nimport math\r\n\r\nnp.random.seed(42)\r\nprint(\"=== Statistics for ML: Practical Pipeline ===\\n\")\r\n\r\n# ============================================\r\n# 0. GENERATE SYNTHETIC DATASET\r\n# ============================================\r\nprint(\"--- Generating Synthetic Dataset ---\")\r\nn_samples = 1000\r\nn_features = 10\r\n\r\n# Create features with different distributions\r\nX = np.zeros((n_samples, n_features))\r\nX[:, 0] = np.random.normal(0, 1, n_samples)  # Normal\r\nX[:, 1] = np.random.exponential(2, n_samples)  # Exponential\r\nX[:, 2] = np.random.uniform(-3, 3, n_samples)  # Uniform\r\nX[:, 3] = np.random.lognormal(0, 0.5, n_samples)  # Log-normal\r\nX[:, 4] = np.random.binomial(1, 0.3, n_samples)  # Bernoulli\r\nX[:, 5] = np.random.poisson(5, n_samples)  # Poisson\r\nX[:, 6] = X[:, 0] + 0.5 * X[:, 1] + np.random.normal(0, 0.3, n_samples)  # Correlated\r\nX[:, 7] = np.random.normal(5, 2, n_samples)  # Another normal\r\nX[:, 8] = np.random.chisquare(3, n_samples)  # Chi-square\r\nX[:, 9] = np.random.gamma(2, 2, n_samples)  # Gamma\r\n\r\n# Target (binary): depends on features 0, 1, 3, 6\r\nlogit = 0.5 * X[:, 0] + 0.3 * X[:, 1] + 0.4 * X[:, 3] + 0.2 * X[:, 6] - 1\r\ny_prob = 1 / (1 + np.exp(-logit))\r\ny = (np.random.random(n_samples) < y_prob).astype(int)\r\n\r\nfeature_names = [f'Feature_{i}' for i in range(n_features)]\r\nprint(f\"Dataset: {n_samples} samples, {n_features} features\")\r\nprint(f\"Class distribution: {np.mean(y)*100:.1f}% positive\")\r\n\r\n# ============================================\r\n# 1. DATA PROFILING\r\n# ============================================\r\nprint(\"\\n=== 1. Data Profiling ===\")\r\n\r\nfor i in range(n_features):\r\n    data = X[:, i]\r\n    mean = np.mean(data)\r\n    median = np.median(data)\r\n    std = np.std(data, ddof=1)\r\n    skew = stats.skew(data, bias=False)\r\n    kurt = stats.kurtosis(data, bias=False, fisher=True)\r\n    q1 = np.percentile(data, 25)\r\n    q3 = np.percentile(data, 75)\r\n\r\n    # Normality test\r\n    if len(data) > 20:\r\n        _, p_normal = normaltest(data)\r\n    else:\r\n        p_normal = 0\r\n\r\n    norm_str = \"Normal\" if p_normal > 0.05 else \"Non-normal\"\r\n\r\n    print(f\"{feature_names[i]:<12} mean={mean:7.3f} median={median:7.3f} std={std:7.3f} \"\r\n          f\"skew={skew:7.3f} kurt={kurt:7.3f} [{norm_str}]\")\r\n\r\n# ============================================\r\n# 2. DISTRIBUTION FITTING\r\n# ============================================\r\nprint(\"\\n=== 2. Distribution Fitting ===\")\r\n\r\n# Test which distribution fits Feature 1 (exponential)\r\nfeature_idx = 1\r\ndata_fit = X[:, feature_idx]\r\n\r\ndistributions_to_test = [\r\n    ('Normal', stats.norm),\r\n    ('Exponential', stats.expon),\r\n    ('Log-Normal', stats.lognorm),\r\n    ('Gamma', stats.gamma),\r\n    ('Uniform', stats.uniform),\r\n    ('Chi-Square', stats.chi2),\r\n]\r\n\r\nprint(f\"Fitting distributions to {feature_names[feature_idx]}:\")\r\nbest_dist = None\r\nbest_ks_stat = float('inf')\r\n\r\nfor name, dist in distributions_to_test:\r\n    params = dist.fit(data_fit)\r\n    ks_stat, ks_p = ks_2samp(data_fit, dist.rvs(*params, size=len(data_fit)))\r\n    print(f\"  {name:<15}: KS stat={ks_stat:.4f}, p={ks_p:.4f}\")\r\n    if ks_stat < best_ks_stat:\r\n        best_ks_stat = ks_stat\r\n        best_dist = name\r\n\r\nprint(f\"Best fitting distribution: {best_dist} (lowest KS statistic)\")\r\n\r\n# ============================================\r\n# 3. OUTLIER DETECTION\r\n# ============================================\r\nprint(\"\\n=== 3. Outlier Detection ===\")\r\n\r\n# Add some outliers to feature 0\r\nX_outliers = X.copy()\r\noutlier_indices = np.random.choice(n_samples, 20, replace=False)\r\nX_outliers[outlier_indices, 0] = np.random.uniform(8, 12, 20)  # extreme values\r\n\r\nfeature_for_outliers = 0\r\n\r\n# Method 1: IQR\r\nq1_val = np.percentile(X_outliers[:, feature_for_outliers], 25)\r\nq3_val = np.percentile(X_outliers[:, feature_for_outliers], 75)\r\niqr_val = q3_val - q1_val\r\nlower_bound = q1_val - 1.5 * iqr_val\r\nupper_bound = q3_val + 1.5 * iqr_val\r\niqr_outliers = np.where((X_outliers[:, feature_for_outliers] < lower_bound) |\r\n                         (X_outliers[:, feature_for_outliers] > upper_bound))[0]\r\n\r\n# Method 2: Z-Score\r\nz_scores = np.abs(stats.zscore(X_outliers[:, feature_for_outliers]))\r\nz_outliers = np.where(z_scores > 3)[0]\r\n\r\n# Method 3: Isolation Forest\r\niso_forest = IsolationForest(contamination=0.05, random_state=42)\r\niso_preds = iso_forest.fit_predict(X_outliers)\r\niso_outliers = np.where(iso_preds == -1)[0]\r\n\r\nprint(f\"Outlier detection on {feature_names[feature_for_outliers]}:\")\r\nprint(f\"  IQR method: {len(iqr_outliers)} outliers detected\")\r\nprint(f\"  Z-score method: {len(z_outliers)} outliers detected\")\r\nprint(f\"  Isolation Forest: {len(iso_outliers)} outliers detected\")\r\n\r\n# Overlap analysis\r\ncommon = (set(iqr_outliers) & set(z_outliers) & set(iso_outliers))\r\nprint(f\"  Common outliers (all 3 methods): {len(common)}\")\r\nif common:\r\n    print(f\"  Outlier indices: {list(common)[:10]}\")\r\n\r\n# ============================================\r\n# 4. FEATURE SELECTION USING STATISTICAL TESTS\r\n# ============================================\r\nprint(\"\\n=== 4. Feature Selection ===\")\r\n\r\n# Method A: ANOVA F-test (for continuous features, binary target)\r\nf_scores, f_p_values = f_classif(X, y)\r\n\r\n# Method B: Mutual Information\r\nmi_scores = mutual_info_classif(X, y, random_state=42)\r\n\r\n# Method C: Correlation with target (for continuous)\r\ncorrelations = np.array([stats.pearsonr(X[:, i], y)[0] for i in range(n_features)])\r\n\r\nprint(f\"{'Feature':<12} {'ANOVA F':>8} {'ANOVA p':>10} {'MI':>8} {'Corr':>8}\")\r\nprint(\"-\" * 50)\r\nfor i in range(n_features):\r\n    print(f\"{feature_names[i]:<12} {f_scores[i]:>8.2f} {f_p_values[i]:>10.6f} {mi_scores[i]:>8.4f} {correlations[i]:>8.4f}\")\r\n\r\n# Select top k features\r\nk = 5\r\nselector = SelectKBest(f_classif, k=k)\r\nX_selected = selector.fit_transform(X, y)\r\nselected_indices = selector.get_support(indices=True)\r\nprint(f\"\\nTop {k} features (ANOVA): {[feature_names[i] for i in selected_indices]}\")\r\n\r\n# ============================================\r\n# 5. MODEL EVALUATION WITH STATISTICAL RIGOR\r\n# ============================================\r\nprint(\"\\n=== 5. Model Evaluation ===\")\r\n\r\n# Split data\r\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\r\n\r\n# Train two models\r\nlr = LogisticRegression(max_iter=1000, random_state=42)\r\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\r\n\r\nlr.fit(X_train, y_train)\r\nrf.fit(X_train, y_train)\r\n\r\n# Predictions\r\ny_pred_lr = lr.predict(X_test)\r\ny_pred_rf = rf.predict(X_test)\r\ny_prob_lr = lr.predict_proba(X_test)[:, 1]\r\ny_prob_rf = rf.predict_proba(X_test)[:, 1]\r\n\r\n# Metrics\r\nacc_lr = accuracy_score(y_test, y_pred_lr)\r\nacc_rf = accuracy_score(y_test, y_pred_rf)\r\nauc_lr = roc_auc_score(y_test, y_prob_lr)\r\nauc_rf = roc_auc_score(y_test, y_prob_rf)\r\n\r\nprint(f\"Logistic Regression: Accuracy={acc_lr:.4f}, AUC={auc_lr:.4f}\")\r\nprint(f\"Random Forest:       Accuracy={acc_rf:.4f}, AUC={auc_rf:.4f}\")\r\n\r\n# ============================================\r\n# 6. CONFIDENCE INTERVALS FOR METRICS (BOOTSTRAP)\r\n# ============================================\r\nprint(\"\\n--- Confidence Intervals (Bootstrap) ---\")\r\n\r\ndef bootstrap_ci(y_true, y_pred, metric_func, n_bootstrap=1000, ci=0.95):\r\n    n = len(y_true)\r\n    metrics = []\r\n\r\n    for _ in range(n_bootstrap):\r\n        indices = np.random.choice(n, n, replace=True)\r\n        y_true_sample = y_true[indices]\r\n        y_pred_sample = y_pred[indices]\r\n        metrics.append(metric_func(y_true_sample, y_pred_sample))\r\n\r\n    metrics.sort()\r\n    lower_idx = int(n_bootstrap * (1 - ci) / 2)\r\n    upper_idx = int(n_bootstrap * (1 + ci) / 2)\r\n\r\n    return metrics[lower_idx], metrics[upper_idx]\r\n\r\n# Bootstrap CI for AUC\r\nauc_lower_rf, auc_upper_rf = bootstrap_ci(y_test, y_prob_rf, lambda y, p: roc_auc_score(y, p))\r\nauc_lower_lr, auc_upper_lr = bootstrap_ci(y_test, y_prob_lr, lambda y, p: roc_auc_score(y, p))\r\n\r\nprint(f\"Logistic Regression AUC: {auc_lr:.4f} [{auc_lower_lr:.4f}, {auc_upper_lr:.4f}]\")\r\nprint(f\"Random Forest AUC:       {auc_rf:.4f} [{auc_lower_rf:.4f}, {auc_upper_rf:.4f}]\")\r\n\r\n# ============================================\r\n# 7. MCNEMAR'S TEST FOR MODEL COMPARISON\r\n# ============================================\r\nprint(\"\\n--- McNemar's Test ---\")\r\n\r\ndef mcnemar_test(y_true, y_pred_a, y_pred_b):\r\n    # Contingency table\r\n    n00 = np.sum((y_pred_a != y_true) & (y_pred_b != y_true))\r\n    n01 = np.sum((y_pred_a != y_true) & (y_pred_b == y_true))\r\n    n10 = np.sum((y_pred_a == y_true) & (y_pred_b != y_true))\r\n    n11 = np.sum((y_pred_a == y_true) & (y_pred_b == y_true))\r\n\r\n    # McNemar's chi-square statistic (with continuity correction)\r\n    chi2 = (abs(n01 - n10) - 1)**2 / (n01 + n10) if (n01 + n10) > 0 else 0\r\n    p_value = 1 - stats.chi2.cdf(chi2, 1)\r\n\r\n    return chi2, p_value, {'n00': n00, 'n01': n01, 'n10': n10, 'n11': n11}\r\n\r\nchi2_mc, p_mc, table = mcnemar_test(y_test, y_pred_lr, y_pred_rf)\r\nprint(f\"Contingency table: {table}\")\r\nprint(f\"McNemar chi-square: {chi2_mc:.4f}\")\r\nprint(f\"p-value: {p_mc:.4f}\")\r\n\r\nif p_mc < 0.05:\r\n    print(f\"p < 0.05: Models have significantly different performance!\")\r\n    if table['n01'] < table['n10']:\r\n        print(f\"  => Random Forest is better ({table['n10']} vs {table['n01']} correct)\")\r\n    else:\r\n        print(f\"  => Logistic Regression is better ({table['n01']} vs {table['n10']} correct)\")\r\nelse:\r\n    print(f\"p >= 0.05: No significant difference between models\")\r\n\r\n# ============================================\r\n# 8. CROSS-VALIDATED MODEL COMPARISON\r\n# ============================================\r\nprint(\"\\n--- Cross-Validation Comparison ---\")\r\n\r\ncv_folds = 5\r\nlr_cv_scores = cross_val_score(lr, X, y, cv=cv_folds, scoring='accuracy')\r\nrf_cv_scores = cross_val_score(rf, X, y, cv=cv_folds, scoring='accuracy')\r\n\r\nprint(f\"Logistic Regression CV: {lr_cv_scores}\")\r\nprint(f\"  Mean: {np.mean(lr_cv_scores):.4f}, Std: {np.std(lr_cv_scores, ddof=1):.4f}\")\r\nprint(f\"Random Forest CV: {rf_cv_scores}\")\r\nprint(f\"  Mean: {np.mean(rf_cv_scores):.4f}, Std: {np.std(rf_cv_scores, ddof=1):.4f}\")\r\n\r\n# Paired t-test on CV scores\r\nt_stat_cv, p_cv = stats.ttest_rel(rf_cv_scores, lr_cv_scores)\r\nprint(f\"\\nPaired t-test: t={t_stat_cv:.4f}, p={p_cv:.4f}\")\r\n\r\nif p_cv < 0.05:\r\n    print(f\"p < 0.05: Significant difference in CV performance\")\r\nelse:\r\n    print(f\"p >= 0.05: No significant difference in CV performance\")\r\n\r\n# ============================================\r\n# 9. CHI-SQUARE TEST FOR FEATURE-TARGET ASSOCIATION\r\n# ============================================\r\nprint(\"\\n--- Chi-Square Test for Categorical Features ---\")\r\n\r\n# Binarize feature 0 for chi-square test\r\nfeature_binarized = (X[:, 0] > np.median(X[:, 0])).astype(int)\r\n\r\ncontingency = np.zeros((2, 2))\r\nfor f_val in [0, 1]:\r\n    for t_val in [0, 1]:\r\n        contingency[f_val, t_val] = np.sum((feature_binarized == f_val) & (y == t_val))\r\n\r\nchi2_stat, chi2_p, chi2_dof, expected = chi2_contingency(contingency)\r\nprint(f\"Contingency table (Feature_0 binarized vs Target):\\n{contingency}\")\r\nprint(f\"Expected (under independence):\\n{expected}\")\r\nprint(f\"Chi-square: {chi2_stat:.4f}, p-value: {chi2_p:.4f}\")\r\n\r\nif chi2_p < 0.05:\r\n    print(\"Significant association between feature and target.\")\r\nelse:\r\n    print(\"No significant association.\")\r\n\r\n# ============================================\r\n# 10. KS TEST FOR DISTRIBUTION COMPARISON\r\n# ============================================\r\nprint(\"\\n--- KS Test: Do train and test distributions match? ---\")\r\n\r\nX_train_ks, X_test_ks, _, _ = train_test_split(X, y, test_size=0.3, random_state=42)\r\n\r\nprint(f\"{'Feature':<12} {'KS stat':>8} {'p-value':>10} {'Conclusion':<15}\")\r\nprint(\"-\" * 50)\r\nfor i in range(n_features):\r\n    ks_stat, ks_p = ks_2samp(X_train_ks[:, i], X_test_ks[:, i])\r\n    conclusion = \"Same dist\" if ks_p > 0.05 else \"Different!\"\r\n    print(f\"{feature_names[i]:<12} {ks_stat:>8.4f} {ks_p:>10.4f} {conclusion:<15}\")\r\n\r\n# Expected Output (approximate):\r\n# === 1. Data Profiling ===\r\n# Feature_0    mean= -0.010 median= -0.040 std= 0.981 skew=0.032 kurt=0.038 [Normal]\r\n# Feature_1    mean= 1.982 median= 1.383 std= 1.953 skew=1.023 kurt=0.687 [Non-normal]\r\n#\r\n# === 3. Outlier Detection ===\r\n#   IQR method: 34 outliers detected\r\n#   Z-score method: 23 outliers detected\r\n#   Isolation Forest: 50 outliers detected\r\n#\r\n# === 4. Feature Selection ===\r\n# Feature_0    ANOVA F: 26.34 ANOVA p: 0.0000  MI: 0.0523\r\n#\r\n# === 5. Model Evaluation ===\r\n# Logistic Regression: Accuracy=0.7567, AUC=0.8234\r\n# Random Forest:       Accuracy=0.7700, AUC=0.8412\r\n#\r\n# --- McNemar's Test ---\r\n# p-value: 0.0234 => Models have significantly different performance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Describe a complete statistical pipeline for an ML project. Where do statistical methods add the most value?"
      }), "\r\nA: The pipeline has 5 stages: (1) Data profiling — understand distributions, detect data quality issues early. (2) Distribution fitting — choose appropriate transformations and models. (3) Outlier detection — using IQR, z-score, and isolation forest. (4) Feature selection — ANOVA, mutual information, chi-square tests to select predictive features. (5) Model evaluation — confidence intervals for metrics, McNemar's test for model comparison. Statistics add the most value in stages 1 and 5: understanding your data before modeling, and rigorously evaluating results before deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you select features for a classification problem where you have 500 features and 10,000 samples?"
      }), "\r\nA: Use a multi-stage approach: (1) Remove low-variance features (variance threshold), (2) Compute correlation with target, keep top 200 by absolute correlation, (3) Compute mutual information (captures non-linear relationships), keep top 100, (4) Use ANOVA F-test for remaining, keep top 50, (5) Check multicollinearity among selected features (VIF), (6) Use L1-regularized model (Lasso) to further prune, (7) Validate with cross-validated performance. Always use domain knowledge alongside statistical methods."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Explain how bootstrap confidence intervals work for ML metrics."
      }), "\r\nA: Bootstrap resamples the test set with replacement B times (typically 1000). For each resample, compute the metric (accuracy, AUC). Sort the B metric values. The 95% CI is [2.5th percentile, 97.5th percentile]. Bootstrap makes no distributional assumptions and works for any metric. It's especially useful for metrics like AUC where the sampling distribution is complex. Example: AUC = 0.85, bootstrap 95% CI = [0.82, 0.88] means we're 95% confident the true AUC is in this range."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is McNemar's test and when would you use it?"
      }), "\r\nA: McNemar's test is a non-parametric test for paired nominal data. In ML, it compares two classifiers on the same test set using a 2x2 contingency table of correct/incorrect predictions: n00 (both wrong), n01 (A wrong, B right), n10 (A right, B wrong), n11 (both right). The test statistic focuses on n01 vs n10 — if one classifier is better, it should have more cases where it's right while the other is wrong. Use: \"Is model B significantly better than model A on this test set?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: How do you detect and handle concept drift in production ML systems?"
      }), "\r\nA: Concept drift = the statistical properties of the target variable change over time, degrading model performance. Detection methods: (1) Monitor prediction distribution (PSI = Population Stability Index), (2) Monitor feature distributions (KS test between recent and training data), (3) Monitor actual vs predicted error rate (CUSUM, Page-Hinkley test), (4) Monitor business metrics directly. Handling: (1) Retrain periodically (time-based), (2) Retrain when drift is detected (trigger-based), (3) Online learning (update model incrementally), (4) Ensemble of models trained on different time windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: Compare different outlier detection methods and when to use each."
      }), "\r\nA: IQR method: simple, no assumptions, best for univariate outlier detection on any distribution. Z-score: assumes normality, good for normally distributed features. Modified Z-score (using MAD): robust to non-normality, good general-purpose univariate method. Mahalanobis distance: multivariate, assumes Gaussian, detects unusual combinations of values. Isolation Forest: no distributional assumptions, works in high dimensions, good for large datasets. LOF: detects local outliers (points that are outliers relative to their neighbors). Use multiple methods and consider outliers flagged by 2+ methods as most suspicious."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: How would you use statistics to decide whether to deploy a new ML model to production?"
      }), "\r\nA: (1) Define success metrics (accuracy, business KPIs) and minimum acceptable threshold, (2) Run an A/B test with the new model vs current model for 2-4 weeks, (3) Calculate confidence intervals for the improvement — if the lower bound exceeds the minimum threshold, deploy, (4) Check that guardrail metrics (latency, cost, user satisfaction) don't degrade, (5) Use McNemar's test to confirm the new model is significantly better, (6) Analyze segments to ensure the model doesn't harm specific user groups, (7) Set up monitoring for distribution drift post-deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: Explain the difference between parametric and non-parametric feature selection methods."
      }), "\r\nA: Parametric methods (ANOVA F-test, Pearson correlation) assume specific distributions (normality, linearity). They are more powerful when assumptions hold but can miss non-linear relationships. Non-parametric methods (Spearman correlation, Mutual Information, Kendall's tau) make no distributional assumptions. Mutual Information can capture any type of relationship (linear, non-linear, complex interactions) but requires more data. In practice: use ANOVA as a quick filter, then use Mutual Information for the final selection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: What is the Population Stability Index (PSI) and how is it used?"
      }), "\r\nA: PSI measures how much a variable's distribution has shifted between two time periods. PSI = sum((p_i - q_i) * ln(p_i / q_i)) where p_i is the proportion in bin i for the current period, q_i for the reference period. Interpretations: PSI < 0.1 = no significant shift, 0.1-0.25 = moderate shift (investigate), > 0.25 = significant shift (retrain needed). In credit scoring (where it originated), PSI is monitored monthly. In ML, monitor PSI for key features and model predictions to detect drift."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: How would you design a statistical test to compare two regression models?"
      }), "\r\nA: For regression, use: (1) Paired t-test on cross-validation MSE/RMSE scores — compare mean difference across folds, (2) Diebold-Mariano test — specifically designed for comparing predictive accuracy of two forecasts, (3) Bootstrap the difference in RMSE on a holdout set — compute 95% CI for the RMSE difference. If the CI doesn't include zero, the models differ significantly, (4) For non-nested models, use the Davidson-MacKinnon J-test. Always report: point estimates of both models, the difference, and a confidence interval for the improvement."]
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
            children: "Design a minimal, well-typed function in this chapter — Practical."
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
            children: "Describe a production bug caused by misunderstanding this technique — Practical. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Practical from 10 users to 10 million?"
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
            children: "Walk through how you would test a component built on this — Practical."
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
            children: "How would you make an implementation of this technique — Practical run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Practical that is production-quality."
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
        children: "The time complexity of the standard approach to 08 Statistics For Ml Practical is ___. — Answer: O(n*d) for linear models, O(n^2) for kernel SVM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Statistics For Ml Practical is ___. — Answer: data leakage, class imbalance, overfitting"
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
          }), " Your implementation of this technique — Practical is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of this technique — Practical on an empty input?"
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
        children: "'Hands-On Machine Learning' by Aurélien Géron (O'Reilly) — best practical ML book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Pattern Recognition and Machine Learning' by Bishop — rigorous theoretical foundation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["fast.ai practical deep learning course: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://course.fast.ai",
          children: "https://course.fast.ai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kaggle competitions for hands-on practice: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kaggle.com",
          children: "https://www.kaggle.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Papers With Code for SOTA benchmarks: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://paperswithcode.com",
          children: "https://paperswithcode.com"
        }), " 08: Statistics for ML — Practical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 24 — builds the foundation for 08 Statistics For Ml Practical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Statistics For Ml Practical with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Statistics For Ml Practical fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Statistics For Ml Practical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Statistics For Ml Practical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Statistics For Ml Practical?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Statistics For Ml Practical?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Statistics For Ml Practical asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Statistics For Ml Practical?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
        children: "Protect training data from poisoning attacks — validate data sources and monitor for distribution shifts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement model access controls — not all users should query all models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use differential privacy when training on sensitive data (medical, financial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for model inversion attacks — adversaries can reconstruct training data from model outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit model decisions for fairness and bias before production deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bias-variance tradeoff: simple models underfit (high bias), complex models overfit (high variance) — regularization controls this"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-validation gives an unbiased estimate of generalization error by averaging over multiple train/test splits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature importance from tree models measures how much each feature reduces impurity — use SHAP for more reliable attribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning curves diagnose whether you need more data (high variance) or a better model (high bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble methods (bagging, boosting, stacking) reduce variance and bias respectively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Statistics For Ml Practical is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Chapter 08: Statistics for ML — Practical skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "Machine learning is the practice of training statistical models on data to make predictions or decisions without being explicitly programmed for each case."
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
          children: "Most common ML mistake: data leakage — accidentally including future information in training features. Always split data by time for time-series and validate the split before training."
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
          children: "Linear regression: O(n*d) training, O(d) inference. Decision tree: O(n*d*log n) training, O(log n) inference. Neural network: O(n*d*h) per epoch where h=hidden units."
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
          children: "ML is NOT the right choice when: (1) a rule-based system is interpretable and accurate enough, (2) you have fewer than 1000 labeled examples, (3) the decision requires full auditability."
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
          children: "Production ML stack: scikit-learn for classical ML, PyTorch/TensorFlow for deep learning, MLflow for experiment tracking, Feast for feature stores, Seldon/BentoML for model serving."
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "scikit-learn"
        }), " — classical ML algorithms, preprocessing, evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XGBoost"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LightGBM"
        }), " — gradient boosting for tabular data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), " — experiment tracking, model registry, deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optuna"
        }), " — hyperparameter optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SHAP"
        }), " — model explainability and feature importance 08: Statistics for ML — Practical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 08 Statistics For Ml Practical pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_statistics_for_ml_practical(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Statistics For Ml Practical.\r\n\r\n    Key concepts: features, labels, training, validation, test split\r\n    Complexity: O(n*d) for linear models, O(n^2) for kernel SVM\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Statistics For Ml Practical here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
          children: "Spotify"
        }), " uses collaborative filtering to power Discover Weekly, generating 40M personalized playlists weekly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon"
        }), " uses ML for demand forecasting, reducing inventory costs by 25%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Airbnb"
        }), " uses gradient boosting to predict booking probability and optimize search ranking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe"
        }), " uses ML fraud detection that processes 250M API requests/day with <100ms latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the full ML lifecycle — data collection, feature engineering, training, evaluation, deployment, monitoring"]
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