"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1997],{

/***/ 7649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_16_mlops_production_06_drift_monitoring_md_221_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-16-mlops-production-06-drift-monitoring-md-221.json
const site_docs_courses_ai_engineering_placement_16_mlops_production_06_drift_monitoring_md_221_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mlops-production/06-drift-monitoring","title":"Drift Monitoring","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/16-mlops-production/06-drift-monitoring.md","sourceDirName":"courses/ai-engineering-placement/16-mlops-production","slug":"/ai-engineering-placement/16-mlops-production/06-drift-monitoring","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production/06-drift-monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":211,"frontMatter":{"id":"06-drift-monitoring","slug":"/ai-engineering-placement/16-mlops-production/06-drift-monitoring","title":"Drift Monitoring","sidebar_label":"Drift Monitoring","sidebar_position":211},"sidebar":"placementSidebar","previous":{"title":"Model Serving","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production/05-model-serving"},"next":{"title":"Cost Management","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production/07-cost-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/16-mlops-production/06-drift-monitoring.md


const frontMatter = {
	id: '06-drift-monitoring',
	slug: '/ai-engineering-placement/16-mlops-production/06-drift-monitoring',
	title: 'Drift Monitoring',
	sidebar_label: 'Drift Monitoring',
	sidebar_position: 211
};
const contentTitle = 'Drift Monitoring';

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
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "6.1 Types of Drift",
  "id": "61-types-of-drift",
  "level": 2
}, {
  "value": "6.2 Statistical Detection Methods",
  "id": "62-statistical-detection-methods",
  "level": 2
}, {
  "value": "6.3 Real-time Monitoring",
  "id": "63-real-time-monitoring",
  "level": 2
}, {
  "value": "6.4 Alerting",
  "id": "64-alerting",
  "level": 2
}, {
  "value": "6.5 Automated Retraining",
  "id": "65-automated-retraining",
  "level": 2
}, {
  "value": "6.6 Drift Visualization",
  "id": "66-drift-visualization",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
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
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "drift-monitoring",
        children: "Drift Monitoring"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand data drift, concept drift, and prediction drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up real-time drift monitoring pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement statistical drift detection methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build alerting systems for drift thresholds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate retraining triggers based on drift metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualize drift trends in dashboards"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MLOps bridges the gap between experiment and production. Experiment tracking, CI/CD, model serving, and drift monitoring keep AI systems reliable. This module covers the operational side of AI engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding drift monitoring is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how drift monitoring works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types of Drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data, concept, and prediction drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KS-test, PSI, Chi-square methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming drift computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold-based and trend-based alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated Retraining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift-triggered model retraining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift Visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboards and trend analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Production Data] --> B[Feature Store]\r\n    B --> C[Drift Detector]\r\n    D[Reference Data] --> C\r\n    C --> E{Drift Detected?}\r\n    E -->|Yes| F[Alert]\r\n    E -->|No| G[Continue]\r\n    F --> H[Log Incident]\r\n    H --> I[Trigger Retraining]\r\n    I --> J[Deploy New Model]\r\n    J --> K[Update Reference]\r\n    K --> C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-types-of-drift",
      children: "6.1 Types of Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drift in ML systems refers to changes in the statistical properties of data or relationships between variables over time. Understanding the type of drift is essential for correct remediation."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Data Drift[Data Drift — Input distribution changes]\r\n        DD[\"P(X) changes\"]\r\n    end\r\n    subgraph Concept Drift[Concept Drift — Relationship changes]\r\n        CD[\"P(Y|X) changes\"]\r\n    end\r\n    subgraph Prediction Drift[Prediction Drift — Output changes]\r\n        PD[\"P(Y_hat) changes\"]\r\n    end\r\n    Data Drift --> PD\r\n    Concept Drift --> PD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nimport pandas as pd\r\nfrom scipy.stats import ks_2samp, chi2_contingency\r\nfrom typing import Dict, List\r\nimport json\r\n\r\nclass DriftAnalyzer:\r\n    \"\"\"Analyze different types of drift in ML systems.\"\"\"\r\n\r\n    @staticmethod\r\n    def data_drift(reference: pd.DataFrame, current: pd.DataFrame, numeric_cols: List[str], cat_cols: List[str]) -> Dict:\r\n        \"\"\"Detect changes in input distribution P(X).\"\"\"\r\n        results = {\"type\": \"data_drift\", \"drifted_features\": [], \"all_features\": []}\r\n\r\n        for col in numeric_cols:\r\n            if col in reference and col in current:\r\n                stat, p = ks_2samp(reference[col].dropna(), current[col].dropna())\r\n                result = {\"feature\": col, \"type\": \"numeric\", \"ks_stat\": float(stat), \"p_value\": float(p), \"drifted\": p < 0.05}\r\n                results[\"all_features\"].append(result)\r\n                if result[\"drifted\"]:\r\n                    results[\"drifted_features\"].append(col)\r\n\r\n        for col in cat_cols:\r\n            if col in reference and col in current:\r\n                ref_counts = reference[col].value_counts(normalize=True)\r\n                cur_counts = current[col].value_counts(normalize=True)\r\n                all_cats = list(set(ref_counts.index) | set(cur_counts.index))\r\n                ref_freq = [ref_counts.get(c, 0) for c in all_cats]\r\n                cur_freq = [cur_counts.get(c, 0) for c in all_cats]\r\n                chi2, p, _, _ = chi2_contingency(pd.crosstab(\r\n                    pd.concat([reference[col], current[col]]),\r\n                    pd.Series([\"ref\"]*len(reference) + [\"cur\"]*len(current))\r\n                )) if False else (0, 1, 0, 0)  # Simplified\r\n                result = {\"feature\": col, \"type\": \"categorical\", \"drifted\": p < 0.05}\r\n                results[\"all_features\"].append(result)\r\n                if result[\"drifted\"]:\r\n                    results[\"drifted_features\"].append(col)\r\n\r\n        results[\"drift_score\"] = len(results[\"drifted_features\"]) / len(results[\"all_features\"])\r\n        return results\r\n\r\n    @staticmethod\r\n    def concept_drift(y_true_reference: np.ndarray, y_true_current: np.ndarray,\r\n                      y_pred_current: np.ndarray, metric_fn) -> Dict:\r\n        \"\"\"Detect changes in P(Y|X) by comparing expected vs actual performance.\"\"\"\r\n        ref_performance = metric_fn(y_true_reference, y_pred_current[:len(y_true_reference)])\r\n        current_performance = metric_fn(y_true_current, y_pred_current)\r\n\r\n        drift_detected = abs(current_performance - ref_performance) > 0.05 * ref_performance\r\n\r\n        return {\r\n            \"type\": \"concept_drift\",\r\n            \"reference_performance\": float(ref_performance),\r\n            \"current_performance\": float(current_performance),\r\n            \"drift_detected\": bool(drift_detected)\r\n        }\r\n\r\n    @staticmethod\r\n    def prediction_drift(reference_preds: np.ndarray, current_preds: np.ndarray) -> Dict:\r\n        \"\"\"Detect changes in model output distribution P(Y_hat).\"\"\"\r\n        stat, p = ks_2samp(reference_preds, current_preds)\r\n\r\n        return {\r\n            \"type\": \"prediction_drift\",\r\n            \"ks_stat\": float(stat),\r\n            \"p_value\": float(p),\r\n            \"drift_detected\": p < 0.05,\r\n            \"ref_mean\": float(reference_preds.mean()),\r\n            \"cur_mean\": float(current_preds.mean()),\r\n            \"ref_std\": float(reference_preds.std()),\r\n            \"cur_std\": float(current_preds.std())\r\n        }\r\n\r\nanalyzer = DriftAnalyzer()\r\nref_df = pd.DataFrame({\"price\": np.random.normal(300000, 50000, 1000), \"sqft\": np.random.normal(2000, 500, 1000)})\r\ncur_df = pd.DataFrame({\"price\": np.random.normal(350000, 60000, 1000), \"sqft\": np.random.normal(1800, 400, 1000)})\r\nresult = analyzer.data_drift(ref_df, cur_df, [\"price\", \"sqft\"], [])\r\nprint(f\"Data drift: {result['drifted_features']} (score: {result['drift_score']:.2f})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-statistical-detection-methods",
      children: "6.2 Statistical Detection Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple statistical methods exist for drift detection, each with different sensitivity and assumptions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom scipy.stats import ks_2samp, wasserstein_distance\r\nfrom sklearn.metrics import mutual_info_score\r\n\r\nclass StatisticalDriftDetector:\r\n    \"\"\"Comprehensive statistical drift detection toolkit.\"\"\"\r\n\r\n    @staticmethod\r\n    def population_stability_index(expected: np.ndarray, actual: np.ndarray, bins: int = 10) -> float:\r\n        \"\"\"PSI: Measures how much a distribution has shifted. PSI > 0.25 indicates significant drift.\"\"\"\r\n        expected_percents = np.histogram(expected, bins=bins, range=(min(expected.min(), actual.min()), max(expected.max(), actual.max())))[0] / len(expected)\r\n        actual_percents = np.histogram(actual, bins=bins, range=(min(expected.min(), actual.min()), max(expected.max(), actual.max())))[0] / len(actual)\r\n\r\n        # Avoid division by zero\r\n        expected_percents = np.clip(expected_percents, 0.001, 1)\r\n        actual_percents = np.clip(actual_percents, 0.001, 1)\r\n\r\n        psi = np.sum((actual_percents - expected_percents) * np.log(actual_percents / expected_percents))\r\n        return float(psi)\r\n\r\n    @staticmethod\r\n    def wasserstein_dist(expected: np.ndarray, actual: np.ndarray) -> float:\r\n        \"\"\"Earth Mover's Distance: Robust distribution shift metric.\"\"\"\r\n        return float(wasserstein_distance(expected, actual))\r\n\r\n    @staticmethod\r\n    def js_divergence(expected: np.ndarray, actual: np.ndarray, bins: int = 20) -> float:\r\n        \"\"\"Jensen-Shannon Divergence: Symmetric version of KL divergence.\"\"\"\r\n        eps = 1e-10\r\n        p = np.histogram(expected, bins=bins, density=True)[0] + eps\r\n        q = np.histogram(actual, bins=bins, density=True)[0] + eps\r\n        p = p / p.sum()\r\n        q = q / q.sum()\r\n        m = 0.5 * (p + q)\r\n        js = 0.5 * (np.sum(p * np.log(p / m)) + np.sum(q * np.log(q / m)))\r\n        return float(js)\r\n\r\n    def comprehensive_analysis(self, expected: np.ndarray, actual: np.ndarray, feature_name: str) -> Dict:\r\n        \"\"\"Run all drift detection methods and return consensus.\"\"\"\r\n        ks_stat, ks_p = ks_2samp(expected, actual)\r\n        psi = self.population_stability_index(expected, actual)\r\n        wass = self.wasserstein_dist(expected, actual)\r\n        js = self.js_divergence(expected, actual)\r\n\r\n        drift_signals = 0\r\n        if ks_p < 0.05: drift_signals += 1\r\n        if psi > 0.25: drift_signals += 1\r\n        if js > 0.1: drift_signals += 1\r\n\r\n        return {\r\n            \"feature\": feature_name,\r\n            \"ks_statistic\": round(ks_stat, 4),\r\n            \"ks_p_value\": round(ks_p, 4),\r\n            \"psi\": round(psi, 4),\r\n            \"wasserstein\": round(wass, 4),\r\n            \"js_divergence\": round(js, 4),\r\n            \"drift_consensus\": \"drifted\" if drift_signals >= 2 else \"stable\",\r\n            \"signals\": drift_signals\r\n        }\r\n\r\ndetector = StatisticalDriftDetector()\r\nref = np.random.normal(0, 1, 10000)\r\ncurr = np.random.normal(0.3, 1.2, 10000)\r\nreport = detector.comprehensive_analysis(ref, curr, \"feature_1\")\r\nprint(json.dumps(report, indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PSI interpretation guide"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PSI Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interpretation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No significant change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.1 - 0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor shift — monitor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.25 - 0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate drift — investigate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Major drift — retrain needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-real-time-monitoring",
      children: "6.3 Real-time Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-time drift monitoring processes production data as it arrives and updates drift metrics continuously."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nimport numpy as np\r\nfrom collections import deque\r\nfrom datetime import datetime, timedelta\r\nimport threading\r\n\r\nclass RealtimeDriftMonitor:\r\n    \"\"\"Streaming drift monitor with sliding window.\"\"\"\r\n\r\n    def __init__(self, reference_data: np.ndarray, window_size: int = 1000, check_interval: int = 100):\r\n        self.reference = reference_data\r\n        self.window_size = window_size\r\n        self.check_interval = check_interval\r\n        self.current_window = deque(maxlen=window_size)\r\n        self.requests_processed = 0\r\n        self.drift_history = []\r\n        self.running = False\r\n\r\n    def add_prediction(self, value: float):\r\n        \"\"\"Add a new prediction to the sliding window.\"\"\"\r\n        self.current_window.append(value)\r\n        self.requests_processed += 1\r\n\r\n        if self.requests_processed % self.check_interval == 0:\r\n            self.check_for_drift()\r\n\r\n    def check_for_drift(self):\r\n        \"\"\"Run drift detection on current window vs reference.\"\"\"\r\n        if len(self.current_window) < 100:\r\n            return None\r\n\r\n        current = np.array(self.current_window)\r\n        ks_stat, ks_p = ks_2samp(self.reference, current)\r\n\r\n        drift_record = {\r\n            \"timestamp\": datetime.utcnow().isoformat(),\r\n            \"requests_processed\": self.requests_processed,\r\n            \"window_size\": len(current),\r\n            \"ks_statistic\": float(ks_stat),\r\n            \"p_value\": float(ks_p),\r\n            \"drifted\": ks_p < 0.05,\r\n            \"current_mean\": float(current.mean()),\r\n            \"reference_mean\": float(self.reference.mean())\r\n        }\r\n\r\n        self.drift_history.append(drift_record)\r\n        if drift_record[\"drifted\"]:\r\n            print(f\"⚠️ Drift detected at {drift_record['timestamp']}\")\r\n\r\n        return drift_record\r\n\r\n    def start_background_monitoring(self, interval_seconds: int = 60):\r\n        \"\"\"Start periodic drift checks in background thread.\"\"\"\r\n        def monitor_loop():\r\n            self.running = True\r\n            while self.running:\r\n                self.check_for_drift()\r\n                time.sleep(interval_seconds)\r\n\r\n        thread = threading.Thread(target=monitor_loop, daemon=True)\r\n        thread.start()\r\n        print(f\"Background monitoring started (interval={interval_seconds}s)\")\r\n\r\n    def stop(self):\r\n        self.running = False\r\n\r\n## Simulate production predictions\r\nref_data = np.random.normal(0.5, 0.1, 5000)\r\nmonitor = RealtimeDriftMonitor(ref_data, window_size=500, check_interval=50)\r\n\r\n## Simulate drift after some time\r\nfor i in range(2000):\r\n    if i < 500:\r\n        monitor.add_prediction(np.random.normal(0.5, 0.1))\r\n    else:\r\n        monitor.add_prediction(np.random.normal(0.7, 0.15))  # Drifted\r\n\r\nprint(f\"Drift events: {sum(1 for d in monitor.drift_history if d['drifted'])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Streaming drift with batch processing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BatchDriftReporter:\r\n    \"\"\"Computes drift metrics over time windows and writes to monitoring system.\"\"\"\r\n\r\n    def __init__(self, reference: pd.DataFrame, window_hours: int = 24):\r\n        self.reference = reference\r\n        self.window_hours = window_hours\r\n        self.batches = []\r\n\r\n    def process_batch(self, batch: pd.DataFrame, batch_timestamp: datetime = None):\r\n        \"\"\"Process a batch of production data and compute drift.\"\"\"\r\n        if len(batch) < 10:\r\n            return None\r\n\r\n        report = {\r\n            \"timestamp\": (batch_timestamp or datetime.utcnow()).isoformat(),\r\n            \"batch_size\": len(batch),\r\n            \"features\": {}\r\n        }\r\n\r\n        for col in batch.columns:\r\n            if np.issubdtype(batch[col].dtype, np.number) and col in self.reference:\r\n                ks_stat, p = ks_2samp(self.reference[col].dropna(), batch[col].dropna())\r\n                report[\"features\"][col] = {\r\n                    \"ks_stat\": float(ks_stat),\r\n                    \"p_value\": float(p),\r\n                    \"drifted\": p < 0.05,\r\n                    \"ref_mean\": float(self.reference[col].mean()),\r\n                    \"batch_mean\": float(batch[col].mean())\r\n                }\r\n\r\n        report[\"drifted_features\"] = [k for k, v in report[\"features\"].items() if v[\"drifted\"]]\r\n        report[\"drift_score\"] = len(report[\"drifted_features\"]) / len(report[\"features\"])\r\n\r\n        self.batches.append(report)\r\n        return report\r\n\r\n    def get_trend(self, feature: str, metric: str = \"ks_stat\") -> List:\r\n        \"\"\"Get drift trend for a specific feature over time.\"\"\"\r\n        return [(b[\"timestamp\"], b[\"features\"].get(feature, {}).get(metric)) for b in self.batches if feature in b.get(\"features\", {})]\r\n\r\nreporter = BatchDriftReporter(pd.DataFrame({\"price\": np.random.normal(300000, 50000, 5000)}))\r\nfor _ in range(10):\r\n    batch = pd.DataFrame({\"price\": np.random.normal(310000 + _ * 5000, 55000, 500)})\r\n    reporter.process_batch(batch)\r\n    time.sleep(0.1)\r\n\r\nprint(f\"Drift trend for 'price': {reporter.get_trend('price')[:3]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-alerting",
      children: "6.4 Alerting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alerting systems notify teams when drift exceeds thresholds, with different severity levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import smtplib\r\nimport json\r\nimport requests\r\nfrom enum import Enum\r\nfrom typing import Dict, Optional, Callable\r\n\r\nclass AlertSeverity(Enum):\r\n    INFO = \"info\"\r\n    WARNING = \"warning\"\r\n    CRITICAL = \"critical\"\r\n\r\nclass DriftAlert:\r\n    def __init__(self, feature: str, metric: str, value: float, threshold: float, severity: AlertSeverity):\r\n        self.feature = feature\r\n        self.metric = metric\r\n        self.value = value\r\n        self.threshold = threshold\r\n        self.severity = severity\r\n        self.timestamp = datetime.utcnow()\r\n\r\n    def __repr__(self):\r\n        return f\"[{self.severity.value.upper()}] {self.feature}: {self.metric}={self.value:.4f} (threshold={self.threshold:.4f})\"\r\n\r\nclass AlertManager:\r\n    \"\"\"Manages drift alerting with multiple notification channels.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.channels: Dict[str, Callable] = {}\r\n        self.alert_history = []\r\n\r\n    def register_channel(self, name: str, handler: Callable):\r\n        self.channels[name] = handler\r\n\r\n    def send_alert(self, alert: DriftAlert):\r\n        self.alert_history.append(alert)\r\n        for name, handler in self.channels.items():\r\n            try:\r\n                handler(alert)\r\n            except Exception as e:\r\n                print(f\"Alert channel '{name}' failed: {e}\")\r\n\r\n    def get_recent_alerts(self, n: int = 10, severity: Optional[AlertSeverity] = None) -> List[DriftAlert]:\r\n        filtered = [a for a in self.alert_history if severity is None or a.severity == severity]\r\n        return filtered[-n:]\r\n\r\n## Notification handlers\r\ndef slack_alert(alert: DriftAlert):\r\n    \"\"\"Send alert to Slack webhook.\"\"\"\r\n    payload = {\r\n        \"text\": f\"🚨 *Drift Alert*\\nFeature: {alert.feature}\\nMetric: {alert.metric}\\nValue: {alert.value:.4f}\\nSeverity: {alert.severity.value}\",\r\n        \"username\": \"Drift Monitor\"\r\n    }\r\n    # requests.post(\"https://hooks.slack.com/services/...\", json=payload)\r\n\r\ndef email_alert(alert: DriftAlert):\r\n    \"\"\"Send alert via email.\"\"\"\r\n    # server = smtplib.SMTP(\"smtp.gmail.com\", 587)\r\n    # server.sendmail(\"alerts@example.com\", \"team@example.com\", str(alert))\r\n    pass\r\n\r\ndef pagerduty_alert(alert: DriftAlert):\r\n    \"\"\"Trigger PagerDuty incident for critical alerts.\"\"\"\r\n    if alert.severity == AlertSeverity.CRITICAL:\r\n        # requests.post(\"https://events.pagerduty.com/v2/enqueue\", json={...})\r\n        print(f\"PAGERDUTY: {alert}\")\r\n\r\nmanager = AlertManager()\r\nmanager.register_channel(\"slack\", slack_alert)\r\nmanager.register_channel(\"email\", email_alert)\r\nmanager.register_channel(\"pagerduty\", pagerduty_alert)\r\n\r\n## Threshold-based alerting\r\nclass ThresholdAlertPolicy:\r\n    def __init__(self, drift_threshold: float = 0.25, consecutive_failures: int = 3):\r\n        self.threshold = drift_threshold\r\n        self.consecutive = consecutive_failures\r\n        self.failure_count = 0\r\n\r\n    def evaluate(self, psi_value: float) -> Optional[DriftAlert]:\r\n        if psi_value > self.threshold:\r\n            self.failure_count += 1\r\n            if self.failure_count >= self.consecutive:\r\n                severity = AlertSeverity.CRITICAL if psi_value > 0.5 else AlertSeverity.WARNING\r\n                return DriftAlert(\"price\", \"PSI\", psi_value, self.threshold, severity)\r\n        else:\r\n            self.failure_count = 0\r\n        return None\r\n\r\npolicy = ThresholdAlertPolicy(0.25, 3)\r\nfor psi in [0.1, 0.3, 0.4, 0.6]:\r\n    alert = policy.evaluate(psi)\r\n    if alert:\r\n        manager.send_alert(alert)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-automated-retraining",
      children: "6.5 Automated Retraining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drift monitoring should trigger automated retraining pipelines when drift exceeds acceptable levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DriftTriggeredRetraining:\r\n    \"\"\"Orchestrates retraining when drift is detected.\"\"\"\r\n\r\n    def __init__(self, training_pipeline_script: str, min_retrain_interval_hours: int = 24):\r\n        self.pipeline_script = training_pipeline_script\r\n        self.min_interval = timedelta(hours=min_retrain_interval_hours)\r\n        self.last_retrain = None\r\n        self.retrain_count = 0\r\n\r\n    def should_retrain(self, drift_report: Dict, alert_manager: AlertManager) -> bool:\r\n        \"\"\"Decide whether to trigger retraining based on drift report.\"\"\"\r\n        now = datetime.utcnow()\r\n\r\n        # Don't retrain if recently retrained\r\n        if self.last_retrain and (now - self.last_retrain) < self.min_interval:\r\n            print(f\"Skipping retrain: last was {self.last_retrain}, min interval is {self.min_interval}\")\r\n            return False\r\n\r\n        # Check if drift score is significant\r\n        drift_score = drift_report.get(\"drift_score\", 0)\r\n        if drift_score > 0.3:\r\n            alert = DriftAlert(\r\n                \"system\", \"drift_score\", drift_score, 0.3, AlertSeverity.WARNING\r\n            )\r\n            alert_manager.send_alert(alert)\r\n\r\n            # Trigger retraining\r\n            self._execute_retraining(drift_report)\r\n            return True\r\n\r\n        return False\r\n\r\n    def _execute_retraining(self, drift_report: Dict):\r\n        \"\"\"Execute the retraining pipeline.\"\"\"\r\n        import subprocess\r\n        print(f\"🔄 Triggering retraining at {datetime.utcnow()}\")\r\n\r\n        try:\r\n            # In production: subprocess.run([\"python\", self.pipeline_script], check=True)\r\n            result = subprocess.run(\r\n                [\"python\", self.pipeline_script, \"--drift-report\", json.dumps(drift_report)],\r\n                capture_output=True, text=True, check=True\r\n            )\r\n            self.last_retrain = datetime.utcnow()\r\n            self.retrain_count += 1\r\n            print(f\"Retraining completed. Total retrains: {self.retrain_count}\")\r\n        except subprocess.CalledProcessError as e:\r\n            print(f\"Retraining failed: {e.stderr}\")\r\n\r\n    def get_retrain_stats(self) -> Dict:\r\n        return {\r\n            \"last_retrain\": self.last_retrain.isoformat() if self.last_retrain else None,\r\n            \"total_retrains\": self.retrain_count,\r\n            \"min_interval_hours\": self.min_interval.total_seconds() / 3600\r\n        }\r\n\r\nretrainer = DriftTriggeredRetraining(\"train_pipeline.py\", min_retrain_interval_hours=6)\r\nalert_mgr = AlertManager()\r\n\r\n## Simulate drift-triggered retraining\r\nfor drift_score in [0.1, 0.2, 0.4, 0.5]:\r\n    report = {\"drift_score\": drift_score, \"drifted_features\": [\"price\", \"sqft\"]}\r\n    if retrainer.should_retrain(report, alert_mgr):\r\n        print(f\"Retrain triggered at drift score {drift_score}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-drift-visualization",
      children: "6.6 Drift Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drift dashboards help teams understand trends and make decisions about model retraining."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import matplotlib.pyplot as plt\r\nimport matplotlib.dates as mdates\r\nimport numpy as np\r\nfrom datetime import datetime, timedelta\r\n\r\nclass DriftDashboard:\r\n    \"\"\"Generate drift visualization plots.\"\"\"\r\n\r\n    @staticmethod\r\n    def plot_drift_trend(drift_history: List[Dict], feature: str, save_path: str = \"drift_trend.png\"):\r\n        \"\"\"Plot drift metric (e.g., PSI, KS statistic) over time.\"\"\"\r\n        timestamps = [datetime.fromisoformat(h[\"timestamp\"]) for h in drift_history]\r\n        values = [h[\"features\"][feature][\"ks_stat\"] for h in drift_history if feature in h.get(\"features\", {})]\r\n\r\n        if not values:\r\n            print(f\"No drift data for feature {feature}\")\r\n            return\r\n\r\n        fig, ax = plt.subplots(figsize=(12, 5))\r\n        ax.plot(timestamps, values, marker=\"o\", linestyle=\"-\", linewidth=1.5, markersize=4)\r\n        ax.axhline(y=0.05, color=\"r\", linestyle=\"--\", alpha=0.7, label=\"p=0.05 threshold\")\r\n        ax.set_xlabel(\"Time\")\r\n        ax.set_ylabel(\"KS Statistic\")\r\n        ax.set_title(f\"Drift Trend — {feature}\")\r\n        ax.legend()\r\n        ax.grid(True, alpha=0.3)\r\n        plt.xticks(rotation=45)\r\n        plt.tight_layout()\r\n        plt.savefig(save_path)\r\n        print(f\"Saved drift trend to {save_path}\")\r\n\r\n    @staticmethod\r\n    def plot_feature_distributions(reference: np.ndarray, current: np.ndarray, feature: str, save_path: str = \"dist_comparison.png\"):\r\n        \"\"\"Plot reference vs current distribution comparison.\"\"\"\r\n        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))\r\n\r\n        # Histogram\r\n        ax1.hist(reference, bins=50, alpha=0.5, label=\"Reference\", density=True)\r\n        ax1.hist(current, bins=50, alpha=0.5, label=\"Current\", density=True)\r\n        ax1.set_xlabel(feature)\r\n        ax1.set_ylabel(\"Density\")\r\n        ax1.set_title(\"Distribution Comparison\")\r\n        ax1.legend()\r\n\r\n        # CDF\r\n        for data, label, color in [(reference, \"Reference\", \"blue\"), (current, \"Current\", \"orange\")]:\r\n            sorted_data = np.sort(data)\r\n            cdf = np.arange(1, len(sorted_data) + 1) / len(sorted_data)\r\n            ax2.plot(sorted_data, cdf, label=label, color=color)\r\n        ax2.set_xlabel(feature)\r\n        ax2.set_ylabel(\"CDF\")\r\n        ax2.set_title(\"Cumulative Distribution\")\r\n        ax2.legend()\r\n\r\n        plt.tight_layout()\r\n        plt.savefig(save_path)\r\n        print(f\"Saved distribution comparison to {save_path}\")\r\n\r\n    @staticmethod\r\n    def plot_drift_heatmap(drift_matrix: np.ndarray, feature_names: List[str], time_labels: List[str], save_path: str = \"drift_heatmap.png\"):\r\n        \"\"\"Plot drift intensity heatmap across features and time windows.\"\"\"\r\n        fig, ax = plt.subplots(figsize=(12, max(4, len(feature_names) * 0.4)))\r\n        im = ax.imshow(drift_matrix, aspect=\"auto\", cmap=\"RdYlGn_r\", vmin=0, vmax=1)\r\n        ax.set_xticks(range(len(time_labels)))\r\n        ax.set_xticklabels(time_labels, rotation=45, ha=\"right\")\r\n        ax.set_yticks(range(len(feature_names)))\r\n        ax.set_yticklabels(feature_names)\r\n        ax.set_xlabel(\"Time Window\")\r\n        ax.set_ylabel(\"Feature\")\r\n        ax.set_title(\"Drift Intensity Heatmap\")\r\n        plt.colorbar(im, ax=ax, label=\"Drift Score\")\r\n        plt.tight_layout()\r\n        plt.savefig(save_path)\r\n        print(f\"Saved drift heatmap to {save_path}\")\r\n\r\n## Generate dashboard\r\ndashboard = DriftDashboard()\r\nhistory = [\r\n    {\"timestamp\": (datetime.utcnow() - timedelta(hours=i)).isoformat(), \"features\": {\"price\": {\"ks_stat\": min(0.5, i * 0.02 + 0.01)}}}\r\n    for i in range(24, 0, -1)\r\n]\r\ndashboard.plot_drift_trend(history, \"price\", \"price_drift_trend.png\")\r\ndashboard.plot_feature_distributions(\r\n    np.random.normal(300000, 50000, 1000),\r\n    np.random.normal(330000, 55000, 1000),\r\n    \"house_price\",\r\n    \"price_dist_comparison.png\"\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript drift monitoring\r\ninterface DriftReport {\r\n  timestamp: string;\r\n  feature: string;\r\n  ksStatistic: number;\r\n  pValue: number;\r\n  drifted: boolean;\r\n}\r\n\r\nclass DriftMonitor {\r\n  private reference: number[];\r\n  private window: number[] = [];\r\n  private readonly windowSize: number;\r\n\r\n  constructor(reference: number[], windowSize = 1000) {\r\n    this.reference = reference;\r\n    this.windowSize = windowSize;\r\n  }\r\n\r\n  addValue(value: number): DriftReport | null {\r\n    this.window.push(value);\r\n    if (this.window.length > this.windowSize) this.window.shift();\r\n    if (this.window.length < 100) return null;\r\n    const ks = this.ksTest(this.reference, this.window);\r\n    const report: DriftReport = {\r\n      timestamp: new Date().toISOString(),\r\n      feature: \"prediction\",\r\n      ksStatistic: ks.stat,\r\n      pValue: ks.p,\r\n      drifted: ks.p < 0.05,\r\n    };\r\n    if (report.drifted) console.warn(\"Drift detected!\", report);\r\n    return report;\r\n  }\r\n\r\n  private ksTest(a: number[], b: number[]): { stat: number; p: number } {\r\n    const all = [...a, ...b].sort((x, y) => x - y);\r\n    let maxDiff = 0;\r\n    for (const v of all) {\r\n      const ecdfA = a.filter(x => x <= v).length / a.length;\r\n      const ecdfB = b.filter(x => x <= v).length / b.length;\r\n      maxDiff = Math.max(maxDiff, Math.abs(ecdfA - ecdfB));\r\n    }\r\n    const n = a.length * b.length / (a.length + b.length);\r\n    const p = 2 * Math.exp(-2 * n * maxDiff * maxDiff);\r\n    return { stat: maxDiff, p };\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data drift is changes in input distribution P(X), concept drift is changes in P(Y|X), prediction drift is changes in output distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KS test detects numeric feature drift, PSI quantifies distribution shift magnitude, Chi-square detects categorical drift"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PSI < 0.1 is stable, 0.1-0.25 requires monitoring, > 0.25 indicates significant drift"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time drift monitoring uses sliding windows over production data with periodic statistical checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alerting systems should support multiple channels (Slack, email, PagerDuty) with escalating severity levels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated retraining should have minimum interval guards to prevent excessive retraining"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift visualization helps teams understand trends: time-series plots, distribution comparisons, and heatmaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consensus-based detection (multiple statistical methods agreeing) improves reliability over single-method approaches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature-level drift tracking pinpoints which inputs are changing, enabling targeted investigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift monitoring is a continuous process, not a one-time check — it runs throughout the model's production lifetime"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detecting drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple statistical methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relying on a single test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setting thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calibrate on historical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using arbitrary thresholds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window with periodic checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc or manual checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-channel with severity levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert fatigue from too many alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retraining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift-triggered with minimum interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retraining too frequently or never"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trend plots and distribution comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw numbers without context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between data drift and concept drift?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Data drift (covariate shift) is when the distribution of input features P(X) changes — e.g., customers become younger over time. Concept drift is when the relationship between inputs and.\ntargets P(Y|X) changes — e.g., the same features now predict different outcomes. Data drift often leads to concept drift, but they can occur independently."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does the Population Stability Index (PSI) measure drift?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "PSI computes the difference between two distributions by binning both into the same intervals and calculating: sum((actual_pct - expected_pct) * ln(actual_pct/expected_pct)). PSI < 0.1 indicates no change, 0.1-0.25 indicates minor shift, > 0.25 indicates significant drift. It's widely used in credit scoring and finance."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is a sliding window approach for real-time drift monitoring?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "A sliding window maintains the N most recent predictions or feature values in memory. When a new value arrives, the oldest is evicted. Periodically (every K requests), statistical tests compare the window distribution against the reference distribution. This provides continuous drift detection with bounded memory and computation."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you prevent alert fatigue from drift monitoring?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Strategies: (1) Require consecutive threshold violations before alerting (e.g., 3 consecutive windows), (2) Use severity levels — INFO for minor drift,.\nWARNING for moderate, CRITICAL for severe, (3) Implement cooldown periods to avoid repeated alerts for the same drift event, (4) Aggregate alerts across features into a single notification with drift score."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: When should you trigger automated retraining based on drift?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trigger retraining when: (1) Drift score exceeds threshold (e.g., > 30% features drifted), (2) Prediction drift KS p-value < 0.05 for.\nN consecutive windows, (3) PSI > 0.25 on key features, (4) Concept drift detected through performance degradation > 5%. Always enforce a minimum retraining interval (e.g.,.\n6-24 hours) to prevent oscillation."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is prediction drift and why does it matter?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prediction drift is a change in the distribution of model outputs P(Y_hat). It can result from data drift (different inputs produce different outputs) or.\nconcept drift (same inputs map to different targets). Monitoring prediction drift provides a holistic view of model behavior change and is often the easiest drift signal to detect and.\nact upon."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you choose drift detection thresholds?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Calibrate thresholds using historical data: compute drift metrics on time windows where you know the model was performing well vs poorly. Set the threshold at the 95th percentile of the \"performing well\" distribution. For.\nPSI, industry standards exist (< 0.1 stable, > 0.25 drift). For KS test, the standard p-value threshold is 0.05, but you may adjust based on sensitivity needs."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is a drift dashboard and what should it show?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A drift dashboard visualizes drift trends over time. It should show: (1) Overall drift score (proportion of drifted features), (2) Per-feature drift metrics (KS stat,.\nPSI) over time, (3) Distribution comparisons (histograms, CDFs) for top drifted features, (4) Alert history and retraining events, (5) Prediction distribution vs reference. This enables quick diagnosis of drift issues."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle categorical feature drift?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "For categorical features, use: (1) Chi-square test of independence — compares observed vs expected frequencies across categories, (2) JS divergence on category proportions, (3) Category coverage check — detect new or missing categories. Monitor both the distribution of existing categories and the emergence of previously unseen categories."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What is the difference between drift detection at prediction time vs training time?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Training-time drift detection compares new training data against historical training data before model training — it answers \"has the world changed since we last trained?\" Prediction-time drift compares production inference data against the training reference — it answers \"is the model seeing data it understands?\" Both are important,.\nbut prediction-time drift is more urgent for production systems."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What type of drift refers to changes in P(Y|X)?\r\na) Data drift\r\nb) Concept drift\r\nc) Prediction drift\r\nd) Label drift"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Concept drift"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Concept drift is the change in the relationship between inputs and targets, i.e., P(Y|X) changes."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What PSI value indicates significant drift?\r\na) < 0.1\r\nb) 0.1 - 0.25\r\nc) > 0.25\r\nd) > 1.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) > 0.25"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "PSI > 0.25 indicates significant drift requiring investigation."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is a sliding window used for in drift monitoring?\r\na) Training models\r\nb) Maintaining a fixed-size buffer of recent predictions\r\nc) Computing feature importance\r\nd) Scaling model serving"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Maintaining a fixed-size buffer of recent predictions"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "A sliding window keeps the most recent N data points for drift comparison against reference data."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which statistical test is used for categorical feature drift?\r\na) KS test\r\nb) Chi-square test\r\nc) T-test\r\nd) Mann-Whitney U"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Chi-square test"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The chi-square test compares observed vs expected frequencies across categories."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What should trigger automated model retraining?\r\na) Any single drift detection event\r\nb) Drift exceeding threshold for N consecutive windows\r\nc) Every hour regardless of drift\r\nd) Manual request only"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mlops-s06-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Drift exceeding threshold for N consecutive windows"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Requiring multiple consecutive detections prevents false positives from triggering unnecessary retraining."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a PSI calculator that bins data into 10 equal-width bins and computes the population stability index."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a RealtimeDriftMonitor with sliding window that computes KS statistic on every 100th prediction and alerts if p < 0.05."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create an AlertManager with Slack, email, and PagerDuty channels. Implement a threshold policy that alerts after 3 consecutive violations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete drift monitoring system: reference statistics computation, sliding window drift detection, multi-channel alerting, and automated retraining trigger."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Create a DriftDashboard class that generates trend plots, distribution comparison plots, and a heatmap of drift intensity across features and time windows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
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
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
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
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
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
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
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
            children: "How does Drift Monitoring behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Drift Monitoring\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Drift Monitoring to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Drift Monitoring (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Drift Monitoring and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Drift Monitoring-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Drift Monitoring in production today?"
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
        }), " Drift Monitoring builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Drift Monitoring before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Drift Monitoring is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Drift Monitoring in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Drift Monitoring is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 06 Drift Monitoring is ___. — Answer: O(n*d) for linear models, O(n^2) for kernel SVM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Drift Monitoring is ___. — Answer: data leakage, class imbalance, overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Drift Monitoring issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Drift Monitoring in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Drift Monitoring that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Drift Monitoring in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Drift Monitoring and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
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
            children: "Complete Medium exercises, explain Drift Monitoring to someone else"
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
        children: "Always write a one-line example of Drift Monitoring from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Drift Monitoring when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Drift Monitoring twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Drift Monitoring snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Drift Monitoring listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Drift Monitoring to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Drift Monitoring by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Drift Monitoring to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        }), " Monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 16 — builds the foundation for 06 Drift Monitoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Drift Monitoring with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Drift Monitoring fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Drift Monitoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Drift Monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Drift Monitoring?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Drift Monitoring?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Drift Monitoring asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Drift Monitoring?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift Monitoring is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Drift Monitoring."
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
        children: "Drift Monitoring emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Drift Monitoring today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Drift Monitoring — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Drift Monitoring changes quickly; focus on fundamentals that remain stable."
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
            children: "06 Drift Monitoring is like a GPS navigation system"
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
          }), " — this chapter contributes the Drift Monitoring skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-06driftmonitoring-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Drift Monitoring in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Machine learning is the practice of training statistical models on data to make predictions or decisions without being explicitly programmed for each case."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-06driftmonitoring-flash2",
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
      "data-qid": "16mlopsproduction-06driftmonitoring-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Drift Monitoring approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linear regression: O(n*d) training, O(d) inference. Decision tree: O(n*d*log n) training, O(log n) inference. Neural network: O(n*d*h) per epoch where h=hidden units."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-06driftmonitoring-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Drift Monitoring NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "ML is NOT the right choice when: (1) a rule-based system is interpretable and accurate enough, (2) you have fewer than 1000 labeled examples, (3) the decision requires full auditability."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "16mlopsproduction-06driftmonitoring-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Drift Monitoring applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Drift Monitoring (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Drift Monitoring (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Drift Monitoring-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Drift Monitoring in production at scale"
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
        }), " — model explainability and feature importance Monitoring"]
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
        }), ": Add structured logging at each stage of the 06 Drift Monitoring pipeline to identify exactly where the failure occurs."]
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
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Drift Monitoring."
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
        children: "Tell me about a time you debugged a Drift Monitoring problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Drift Monitoring is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_drift_monitoring(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Drift Monitoring.\r\n\r\n    Key concepts: features, labels, training, validation, test split\r\n    Complexity: O(n*d) for linear models, O(n^2) for kernel SVM\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Drift Monitoring here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Drift Monitoring without notes"
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
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/16-mlops-production/07-cost-management",
        children: "Cost Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift Monitoring, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Drift Monitoring depends on input size and distribution — always benchmark for your own data."
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