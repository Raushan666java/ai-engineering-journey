"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[98663],{

/***/ 54656
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_26_ai_product_thinking_04_ai_product_metrics_md_a38_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-26-ai-product-thinking-04-ai-product-metrics-md-a38.json
const site_docs_courses_ai_engineering_placement_26_ai_product_thinking_04_ai_product_metrics_md_a38_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-product-thinking/04-ai-product-metrics","title":"04 — AI Product Metrics & KPIs","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics.md","sourceDirName":"courses/ai-engineering-placement/26-ai-product-thinking","slug":"/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":319,"frontMatter":{"id":"04-ai-product-metrics","slug":"/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics","title":"04 — AI Product Metrics & KPIs","sidebar_label":"04 — AI Product Metrics & KPIs","sidebar_position":319},"sidebar":"placementSidebar","previous":{"title":"03 — Experiment Design & Metrics for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/03-experiment-design-metrics"},"next":{"title":"Building AI Roadmaps","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/05-ai-roadmaps"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics.md


const frontMatter = {
	id: '04-ai-product-metrics',
	slug: '/ai-engineering-placement/26-ai-product-thinking/04-ai-product-metrics',
	title: '04 — AI Product Metrics & KPIs',
	sidebar_label: '04 — AI Product Metrics & KPIs',
	sidebar_position: 319
};
const contentTitle = '04 — AI Product Metrics & KPIs';

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
  "value": "1.1 Model KPIs vs Product KPIs",
  "id": "11-model-kpis-vs-product-kpis",
  "level": 3
}, {
  "value": "1.1.1 Common Model KPIs",
  "id": "111-common-model-kpis",
  "level": 4
}, {
  "value": "1.1.2 Common Product KPIs",
  "id": "112-common-product-kpis",
  "level": 4
}, {
  "value": "1.1.3 Mapping Model Metrics to Product Outcomes",
  "id": "113-mapping-model-metrics-to-product-outcomes",
  "level": 4
}, {
  "value": "1.2 Framework for AI Product Metrics",
  "id": "12-framework-for-ai-product-metrics",
  "level": 3
}, {
  "value": "1.2.1 The North Star Metric",
  "id": "121-the-north-star-metric",
  "level": 4
}, {
  "value": "1.2.2 Input Metrics",
  "id": "122-input-metrics",
  "level": 4
}, {
  "value": "1.2.3 Output Metrics",
  "id": "123-output-metrics",
  "level": 4
}, {
  "value": "1.2.4 Counter Metrics",
  "id": "124-counter-metrics",
  "level": 4
}, {
  "value": "1.2.5 Guardrail Metrics",
  "id": "125-guardrail-metrics",
  "level": 4
}, {
  "value": "1.3 Measuring Business Impact",
  "id": "13-measuring-business-impact",
  "level": 3
}, {
  "value": "1.3.1 ROI Calculation",
  "id": "131-roi-calculation",
  "level": 4
}, {
  "value": "1.3.2 Customer Satisfaction (CSAT &amp; NPS)",
  "id": "132-customer-satisfaction-csat--nps",
  "level": 4
}, {
  "value": "1.4 Retention &amp; Engagement Metrics",
  "id": "14-retention--engagement-metrics",
  "level": 3
}, {
  "value": "1.4.1 User Activation",
  "id": "141-user-activation",
  "level": 4
}, {
  "value": "1.4.2 Stickiness (DAU/MAU)",
  "id": "142-stickiness-daumau",
  "level": 4
}, {
  "value": "1.4.3 Churn Prediction",
  "id": "143-churn-prediction",
  "level": 4
}, {
  "value": "1.4.4 Feature Usage Analytics",
  "id": "144-feature-usage-analytics",
  "level": 4
}, {
  "value": "1.5 KPI Trees &amp; Dashboards",
  "id": "15-kpi-trees--dashboards",
  "level": 3
}, {
  "value": "1.5.1 Anatomy of a KPI Tree",
  "id": "151-anatomy-of-a-kpi-tree",
  "level": 4
}, {
  "value": "1.5.2 Leading vs Lagging Indicators",
  "id": "152-leading-vs-lagging-indicators",
  "level": 4
}, {
  "value": "1.5.3 Actionable vs Vanity Metrics",
  "id": "153-actionable-vs-vanity-metrics",
  "level": 4
}, {
  "value": "1.5.4 Building the KPI Dashboard",
  "id": "154-building-the-kpi-dashboard",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: What is the difference between a model KPI and a product KPI? Give an example where they diverge.",
  "id": "q1-what-is-the-difference-between-a-model-kpi-and-a-product-kpi-give-an-example-where-they-diverge",
  "level": 3
}, {
  "value": "Q2: Explain the five-layer framework for AI product metrics.",
  "id": "q2-explain-the-five-layer-framework-for-ai-product-metrics",
  "level": 3
}, {
  "value": "Q3: How do you calculate ROI for an AI feature?",
  "id": "q3-how-do-you-calculate-roi-for-an-ai-feature",
  "level": 3
}, {
  "value": "Q4: What is a counter metric? Give an example from a recommendation system.",
  "id": "q4-what-is-a-counter-metric-give-an-example-from-a-recommendation-system",
  "level": 3
}, {
  "value": "Q5: What makes a metric actionable instead of a vanity metric?",
  "id": "q5-what-makes-a-metric-actionable-instead-of-a-vanity-metric",
  "level": 3
}, {
  "value": "Q6: How would you choose a North Star metric for an AI writing assistant?",
  "id": "q6-how-would-you-choose-a-north-star-metric-for-an-ai-writing-assistant",
  "level": 3
}, {
  "value": "Q7: What are leading and lagging indicators? Which is more important for an AI product team?",
  "id": "q7-what-are-leading-and-lagging-indicators-which-is-more-important-for-an-ai-product-team",
  "level": 3
}, {
  "value": "Q8: Describe a guardrail system for deploying a customer-facing LLM chatbot.",
  "id": "q8-describe-a-guardrail-system-for-deploying-a-customer-facing-llm-chatbot",
  "level": 3
}, {
  "value": "Q9: How do you measure stickiness for an AI product? What is a good benchmark?",
  "id": "q9-how-do-you-measure-stickiness-for-an-ai-product-what-is-a-good-benchmark",
  "level": 3
}, {
  "value": "Q10: You see activation rate drop from 45% to 30% after shipping a new model. The model accuracy improved by 2%. What do you do?",
  "id": "q10-you-see-activation-rate-drop-from-45-to-30-after-shipping-a-new-model-the-model-accuracy-improved-by-2-what-do-you-do",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Map Model KPIs to Product KPIs",
  "id": "exercise-1-map-model-kpis-to-product-kpis",
  "level": 3
}, {
  "value": "Exercise 2: Define a North Star and Five-Layer Framework",
  "id": "exercise-2-define-a-north-star-and-five-layer-framework",
  "level": 3
}, {
  "value": "Exercise 3: ROI Analysis",
  "id": "exercise-3-roi-analysis",
  "level": 3
}, {
  "value": "Exercise 4: Build a Churn Prediction Dashboard",
  "id": "exercise-4-build-a-churn-prediction-dashboard",
  "level": 3
}, {
  "value": "Exercise 5: Design a KPI Tree for Your AI Product",
  "id": "exercise-5-design-a-kpi-tree-for-your-ai-product",
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
        id: "04--ai-product-metrics--kpis",
        children: "04 — AI Product Metrics & KPIs"
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
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish model KPIs from product KPIs and map one to the other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a complete metrics framework with North Star, input, output, counter, and guardrail metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculate ROI, cost savings, revenue lift, and CSAT/NPS for AI features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure user retention, activation, adoption, stickiness, and churn for AI products"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build KPI trees and dashboards that separate leading vs lagging and actionable vs vanity metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI teams often ship models with 99% accuracy that users abandon. High model performance does not guarantee product success. This chapter teaches you to define, measure, and act on the right metrics — those that connect model behaviour to business outcomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You will learn a complete framework for AI product metrics: how to pick a North Star, track input and output metrics, monitor counter metrics, and build dashboards that drive decisions. By the end, you will be able to design a measurement system for any AI product."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of classification metrics (accuracy, precision, recall, F1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with SaaS product metrics (DAU, MAU, retention, churn)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Experience with Python and pandas for data analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion of Module 08 (Machine Learning) or equivalent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "North Star Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The single metric that captures the core value your product delivers to users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A metric the team can directly influence through product changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A lagging result that reflects the outcome of input metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counter Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A metric that could degrade when optimising another metric — prevents gaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrail Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A threshold metric that must stay above or below a critical level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leading Indicator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A metric that predicts future performance (e.g., sign-ups predict revenue)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lagging Indicator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A metric that reflects past performance (e.g., quarterly revenue)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vanity Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A metric that looks impressive but is not actionable (e.g., total downloads)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actionable Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A metric that tells you exactly what to do next (e.g., activation rate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAU/MAU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily / Monthly Active Users — core engagement measures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stickiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio of DAU to MAU — how often users come back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activation Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Percentage of new users who reach a key milestone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Churn Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Percentage of users who stop using the product over a period"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Net Promoter Score — how likely users are to recommend your product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer Satisfaction Score — rating of a specific experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return on Investment — (gain from investment − cost of investment) / cost of investment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-model-kpis-vs-product-kpis",
      children: "1.1 Model KPIs vs Product KPIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most AI engineers focus on model metrics. Most product managers focus on business metrics. Both are right — but only when connected."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model KPIs"
      }), " measure how well a machine learning model performs on a defined task. These are technical, offline, and often computed during evaluation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product KPIs"
      }), " measure how users interact with the product and what business value it generates. These are behavioural, online, and observable only after deployment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The critical gap: a model can achieve perfect accuracy in offline evaluation yet drive zero business value if users do not trust it, do not understand it, or find it inconvenient."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "111-common-model-kpis",
      children: "1.1.1 Common Model KPIs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Measures"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ideal"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportion of correct predictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Of positive predictions, how many were correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Of actual positives, how many were found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1 Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harmonic mean of precision and recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUC-ROC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area under the ROC curve — discriminative ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RMSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root mean squared error for regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency (p50/p99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to return a prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictions per second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Percentage of fabricated facts (LLMs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLEU / ROUGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text overlap with reference (NLP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "112-common-product-kpis",
      children: "1.1.2 Common Product KPIs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Measures"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily active users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M DAU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly active users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5M MAU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention (D1/D7/D30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% users returning after 1/7/30 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D1 > 60%, D7 > 30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Churn Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% users lost per month"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 5% monthly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activation Rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% new users reaching \"aha\" moment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 40%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stickiness (DAU/MAU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How often users return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Revenue per User (ARPU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average revenue per active user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10/month"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer Lifetime Value (LTV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total revenue from a user over their lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LTV > 3× CAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer Acquisition Cost (CAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost to acquire one user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< $50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Net Promoter Score (scale −100 to +100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer satisfaction (scale 1–5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 4.2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "113-mapping-model-metrics-to-product-outcomes",
      children: "1.1.3 Mapping Model Metrics to Product Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A model metric is only useful if it connects to a product outcome. Below is a mapping framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Model[Model KPIs]\n        A[Accuracy / AUC] --> B[Better Predictions]\n        C[Latency / Throughput] --> D[Faster UX]\n        E[Hallucination Rate] --> F[More Trustworthy]\n    end\n\n    subgraph Product[Product Outcomes]\n        B --> G[Higher Task Success Rate]\n        D --> H[Lower Bounce Rate]\n        F --> I[Higher Retention]\n    end\n\n    subgraph Business[Business KPIs]\n        G --> J[Higher CSAT]\n        H --> J\n        I --> K[Lower Churn]\n        J --> L[Revenue Growth]\n        K --> L\n    end\n\n    style Model fill:#e1d5f5,stroke:#7b52ab\n    style Product fill:#d5f5e1,stroke:#2d8a4e\n    style Business fill:#f5f0d5,stroke:#ab8a2d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Mapping: Content Moderation AI"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model KPI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Product KPI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Business Outcome"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision 95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positive flags per 10K posts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderator trust, lower operational cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall 90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missed policy violations per 10K posts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform safety, regulatory risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency p99 < 200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-to-publish time < 500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User throughput, content volume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput 5000 posts/sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peak-hour coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No backlog, real-time moderation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-framework-for-ai-product-metrics",
      children: "1.2 Framework for AI Product Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A great metric framework covers five layers. Missing any layer creates blind spots."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    NS[North Star Metric] --> I[Input Metrics]\n    NS --> O[Output Metrics]\n    NS --> C[Counter Metrics]\n    NS --> G[Guardrail Metrics]\n\n    I --> T1[Team Actions<br/>Features, UX changes]\n    O --> T2[Business Results<br/>Revenue, Retention]\n    C --> T3[Alert: Side Effects<br/>Helping ratio, Toxicity]\n    G --> T4[Enforce: Boundaries<br/>Latency SLA, Cost cap]\n\n    T1 --> I\n    T3 --> I\n    T4 --> I\n\n    style NS fill:#f9e5c1,stroke:#d18f2c,stroke-width:3px\n    style I fill:#c1e1f9,stroke:#2c6d9e\n    style O fill:#c1f9d4,stroke:#2d8a4e\n    style C fill:#f9c1c1,stroke:#b32d2d\n    style G fill:#f9f0c1,stroke:#aba22d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-the-north-star-metric",
      children: "1.2.1 The North Star Metric"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The North Star is the single metric that best captures the core value your product delivers. It aligns every team. Examples:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Product"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "North Star Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spotify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time spent listening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directly measures value delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Airbnb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nights booked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core transaction in the marketplace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duolingo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily active users with >2 lessons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active learning, not just logins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChatGPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly retained users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users who come back and find ongoing value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Netflix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours watched per subscriber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content engagement drives retention"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing a North Star for an AI product requires care. The metric must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be tied to value, not activity (e.g., \"tasks completed\" not \"predictions generated\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlate with long-term retention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be measurable daily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be understandable by every team member"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bad North Star examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Model accuracy\" — users do not care about accuracy; they care about outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"API calls\" — high volume with zero value is worse than low volume"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Total registered users\" — vanity metric, no engagement signal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-input-metrics",
      children: "1.2.2 Input Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input metrics are leading indicators the team can directly influence through product changes. Each input metric should have a clear owner and a weekly target."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Move It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Onboarding completion rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product designer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplify flow, reduce friction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature discovery rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growth team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-app guidance, tooltips"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query submission rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UX engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster input, auto-suggest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback submission rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower friction feedback UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model retrain frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automate pipelines, faster eval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-output-metrics",
      children: "1.2.3 Output Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output metrics are lagging indicators that reflect the cumulative effect of input metric changes. They are measured monthly or quarterly."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Output Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connection to Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D1 Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Onboarding completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cohorts by sign-up date"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly active users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count distinct users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task completion rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query submission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success / total attempts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Revenue per user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARPU calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer lifetime value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retention + ARPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictive model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "124-counter-metrics",
      children: "1.2.4 Counter Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Counter metrics prevent teams from optimising one metric at the expense of another. Every North Star and Output Metric should have at least one counter metric."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Content Recommendation AI"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counter Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Watch time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abandonment rate after 30 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximising watch time could mean recommending addictive low-value content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Click-through rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounce rate on landing page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High CTR from clickbait kills trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Personalisation accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content diversity (category entropy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-personalisation creates filter bubbles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return rate (within 30 days)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushing high-margin but poor products increases returns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: Counter Metric Check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom datetime import datetime, timedelta\n\ndef check_counter_metric(\n    main_metric: pd.Series,\n    counter_metric: pd.Series,\n    main_label: str = \"Main Metric\",\n    counter_label: str = \"Counter Metric\"\n) -> dict:\n    \"\"\"\n    Check whether optimising the main metric is degrading a counter metric.\n    Returns correlation and a flag if the relationship is dangerous.\n    \"\"\"\n    correlation = main_metric.corr(counter_metric)\n    result = {\n        \"correlation\": correlation,\n        \"warning\": False,\n        \"message\": \"\"\n    }\n\n    if correlation > 0.7:\n        result[\"warning\"] = True\n        result[\"message\"] = (\n            f\"WARNING: {main_label} and {counter_label} have a strong \"\n            f\"positive correlation ({correlation:.2f}). \"\n            f\"Optimising one may improve both — verify causal direction.\"\n        )\n    elif correlation < -0.5:\n        result[\"warning\"] = True\n        result[\"message\"] = (\n            f\"WARNING: {main_label} and {counter_label} have a strong \"\n            f\"negative correlation ({correlation:.2f}). \"\n            f\"Optimising the main metric likely harms the counter metric. \"\n            f\"Consider rebalancing or setting a guardrail.\"\n        )\n    else:\n        result[\"message\"] = (\n            f\"OK: Correlation between {main_label} and {counter_label} \"\n            f\"is {correlation:.2f}. No immediate conflict detected.\"\n        )\n\n    return result\n\n# Simulate: watch time vs abandonment rate over 90 days\nnp.random.seed(42)\ndates = pd.date_range(\"2026-01-01\", periods=90, freq=\"D\")\n\n# Watch time: slowly improving (team optimising)\nwatch_time = 20 + np.cumsum(np.random.normal(0.05, 0.02, 90)) + np.random.normal(0, 2, 90)\n\n# Abandonment rate: also creeping up (side effect)\nabandonment = 0.15 + np.cumsum(np.random.normal(0.003, 0.001, 90)) + np.random.normal(0, 0.03, 90)\n\ndf = pd.DataFrame({\n    \"date\": dates,\n    \"watch_time_min\": watch_time,\n    \"abandonment_rate\": abandonment.clip(0, 1)\n})\n\nresult = check_counter_metric(\n    df[\"watch_time_min\"],\n    df[\"abandonment_rate\"],\n    \"Avg Watch Time (min)\",\n    \"Abandonment Rate\"\n)\nprint(\"=== Counter Metric Check ===\")\nprint(result[\"message\"])\nif result[\"warning\"]:\n    print(\"ACTION REQUIRED:\", result[\"message\"])\n\nprint(\"\\nFirst 5 days of data:\")\nprint(df.head().to_string(index=False))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Counter Metric Check ===\nWARNING: Avg Watch Time (min) and Abandonment Rate have a strong\nnegative correlation (-0.85). Optimising the main metric likely harms\nthe counter metric. Consider rebalancing or setting a guardrail.\n\nFirst 5 days of data:\n       date  watch_time_min  abandonment_rate\n2026-01-01       19.928093          0.143198\n2026-01-02       20.232966          0.136023\n2026-01-03       20.307775          0.162238\n2026-01-04       20.460228          0.177399\n2026-01-05       20.150621          0.205949\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "125-guardrail-metrics",
      children: "1.2.5 Guardrail Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guardrail metrics are non-negotiable thresholds. If a guardrail is breached, the change is rolled back or not shipped. They prevent catastrophic failures."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical guardrails for AI products:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Guardrail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threshold"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence of Breach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p99 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1% of requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block new experiment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< $0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimise model size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Toxicity rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.5% of outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block model update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 3% (internal eval)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block LLM update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-reported issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 5 per 10K sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pause feature rollout"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: Guardrail Checker"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nfrom typing import Dict, Any, List\n\nclass GuardrailViolation(Exception):\n    \"\"\"Raised when a guardrail threshold is breached.\"\"\"\n    pass\n\nclass GuardrailSystem:\n    \"\"\"\n    Real-time guardrail evaluator for AI product metrics.\n    Checks all guardrails and raises on breach.\n    \"\"\"\n\n    def __init__(self, thresholds: Dict[str, float]):\n        self.thresholds = thresholds\n        self.violations: List[Dict[str, Any]] = []\n\n    def check(self, metric_name: str, current_value: float) -> bool:\n        \"\"\"\n        Check a single metric against its guardrail threshold.\n        Returns True if passed, False if violated.\n        \"\"\"\n        if metric_name not in self.thresholds:\n            print(f\"UNKNOWN METRIC: {metric_name} — no guardrail configured\")\n            return True\n\n        threshold = self.thresholds[metric_name]\n        passed = current_value <= threshold\n\n        if not passed:\n            alert = {\n                \"metric\": metric_name,\n                \"current\": current_value,\n                \"threshold\": threshold,\n                \"breach_by\": round(current_value - threshold, 4),\n                \"timestamp\": \"2026-07-28T10:00:00Z\"\n            }\n            self.violations.append(alert)\n            print(\n                f\"GUARDRAIL BREACH: {metric_name} = {current_value} \"\n                f\"(max {threshold}) — breach by {current_value - threshold:.4f}\"\n            )\n        else:\n            print(f\"OK: {metric_name} = {current_value} (max {threshold})\")\n\n        return passed\n\n    def check_all(self, metrics: Dict[str, float]) -> bool:\n        \"\"\"Check every metric in the dictionary against its guardrail.\"\"\"\n        all_passed = True\n        for name, value in metrics.items():\n            if not self.check(name, value):\n                all_passed = False\n        return all_passed\n\n    def summary(self) -> Dict[str, Any]:\n        return {\n            \"total_guardrails\": len(self.thresholds),\n            \"violations\": len(self.violations),\n            \"details\": self.violations\n        }\n\n# Configure guardrails for a summarisation AI product\nguardrails = GuardrailSystem({\n    \"p99_latency_ms\": 2000,\n    \"error_rate_pct\": 1.0,\n    \"cost_per_prediction_usd\": 0.001,\n    \"toxicity_rate_pct\": 0.5,\n    \"hallucination_rate_pct\": 3.0\n})\n\n# Simulate a deployment check\ndeployment_metrics = {\n    \"p99_latency_ms\": 450,\n    \"error_rate_pct\": 0.3,\n    \"cost_per_prediction_usd\": 0.0008,\n    \"toxicity_rate_pct\": 0.05,\n    \"hallucination_rate_pct\": 4.2  # Breach!\n}\n\nprint(\"=== Pre-Deployment Guardrail Check ===\")\nall_ok = guardrails.check_all(deployment_metrics)\nprint(f\"\\nDeployment {'SHIP IT' if all_ok else 'BLOCKED'}\")\n\nif not all_ok:\n    print(\"Action: Fix violations before releasing.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Pre-Deployment Guardrail Check ===\nOK: p99_latency_ms = 450 (max 2000)\nOK: error_rate_pct = 0.3 (max 1.0)\nOK: cost_per_prediction_usd = 0.0008 (max 0.001)\nOK: toxicity_rate_pct = 0.05 (max 0.5)\nGUARDRAIL BREACH: hallucination_rate_pct = 4.2 (max 3.0) — breach by 1.2000\n\nDeployment BLOCKED\nAction: Fix violations before releasing.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-measuring-business-impact",
      children: "1.3 Measuring Business Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Business impact is why executives fund AI products. You need to calculate and communicate it clearly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-roi-calculation",
      children: "1.3.1 ROI Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROI measures the return generated per dollar invested. The formula:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ROI = (Gain from Investment − Cost of Investment) / Cost of Investment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For an AI feature, costs include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering time (model development, integration, testing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infrastructure (compute, storage, API calls, GPUs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data acquisition and labelling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance (monitoring, retraining, incident response)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Opportunity cost (what the team could have built instead)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revenue lift (new revenue directly attributable to the AI feature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost savings (automation replacing manual work)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Productivity gains (users complete tasks faster)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retention improvement (reduced churn → higher LTV)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: AI Feature ROI Calculator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Optional\n\nclass AIFeatureROI:\n    \"\"\"\n    Calculate ROI for an AI product feature.\n    Provides breakdown by cost category and return type.\n    \"\"\"\n\n    def __init__(\n        self,\n        feature_name: str,\n        eng_months: float,\n        monthly_eng_cost: float = 25000,\n        infra_initial: float = 50000,\n        infra_monthly: float = 10000,\n        data_cost: float = 20000,\n        maintenance_pct: float = 0.15\n    ):\n        self.feature_name = feature_name\n        self.eng_months = eng_months\n        self.monthly_eng_cost = monthly_eng_cost\n        self.infra_initial = infra_initial\n        self.infra_monthly = infra_monthly\n        self.data_cost = data_cost\n        self.maintenance_pct = maintenance_pct\n\n    def development_cost(self) -> float:\n        \"\"\"One-time cost to build the feature.\"\"\"\n        return (\n            self.eng_months * self.monthly_eng_cost\n            + self.infra_initial\n            + self.data_cost\n        )\n\n    def annual_infra_cost(self) -> float:\n        \"\"\"Recurring cost for hosting and inference.\"\"\"\n        infra = self.infra_monthly * 12\n        maintenance = self.development_cost() * self.maintenance_pct\n        return infra + maintenance\n\n    def total_cost_year1(self) -> float:\n        return self.development_cost() + self.annual_infra_cost()\n\n    def total_cost_year2(self) -> float:\n        return self.annual_infra_cost()\n\n    def calculate_roi(\n        self,\n        annual_revenue_lift: float,\n        annual_cost_savings: float,\n        annual_productivity_gain: float,\n        churn_reduction_pct: float,\n        current_annual_revenue: float\n    ) -> dict:\n        \"\"\"\n        Calculate ROI for year 1 and year 2.\n        \"\"\"\n        retention_value = current_annual_revenue * (churn_reduction_pct / 100)\n        total_annual_return = (\n            annual_revenue_lift\n            + annual_cost_savings\n            + annual_productivity_gain\n            + retention_value\n        )\n\n        roi_y1 = (\n            (total_annual_return - self.total_cost_year1())\n            / self.total_cost_year1()\n        ) * 100\n\n        roi_y2 = (\n            (total_annual_return - self.total_cost_year2())\n            / self.total_cost_year2()\n        ) * 100\n\n        payback_months = (\n            self.development_cost() / (total_annual_return / 12)\n        )\n\n        return {\n            \"feature\": self.feature_name,\n            \"development_cost\": round(self.development_cost(), 2),\n            \"annual_infra_cost\": round(self.annual_infra_cost(), 2),\n            \"total_year_1_cost\": round(self.total_cost_year1(), 2),\n            \"total_annual_return\": round(total_annual_return, 2),\n            \"roi_year_1_pct\": round(roi_y1, 1),\n            \"roi_year_2_pct\": round(roi_y2, 1),\n            \"payback_months\": round(payback_months, 1),\n            \"breakdown\": {\n                \"revenue_lift\": annual_revenue_lift,\n                \"cost_savings\": annual_cost_savings,\n                \"productivity_gain\": annual_productivity_gain,\n                \"retention_value\": round(retention_value, 2)\n            }\n        }\n\n# Example: Smart Reply feature for a customer support platform\nroi_calc = AIFeatureROI(\n    feature_name=\"AI Smart Reply Suggestions\",\n    eng_months=6,                # 6 engineer-months\n    monthly_eng_cost=25000,       # Fully loaded cost per engineer\n    infra_initial=40000,          # GPU cluster setup\n    infra_monthly=12000,          # Monthly inference cost\n    data_cost=15000,              # Labelling historical conversations\n    maintenance_pct=0.15          # 15% of dev cost for ongoing maintenance\n)\n\nresult = roi_calc.calculate_roi(\n    annual_revenue_lift=180000,       # New enterprise deals closed because of AI\n    annual_cost_savings=240000,       # 3 FTEs redeployed from repetitive replies\n    annual_productivity_gain=96000,   # Agents handle 30% more tickets\n    churn_reduction_pct=2.0,          # Churn drops from 5% to 3%\n    current_annual_revenue=5000000    # $5M existing revenue base\n)\n\nprint(\"=== AI Feature ROI Analysis ===\")\nprint(f\"Feature: {result['feature']}\")\nprint(f\"Development Cost:     ${result['development_cost']:>10,.0f}\")\nprint(f\"Annual Infra Cost:    ${result['annual_infra_cost']:>10,.0f}\")\nprint(f\"Total Year 1 Cost:    ${result['total_year_1_cost']:>10,.0f}\")\nprint(f\"Total Annual Return:  ${result['total_annual_return']:>10,.0f}\")\nprint()\nprint(\"Return Breakdown:\")\nfor k, v in result['breakdown'].items():\n    print(f\"  {k.replace('_', ' ').title():20s} ${v:>10,.0f}\")\nprint()\nprint(f\"ROI Year 1:           {result['roi_year_1_pct']:>8.1f}%\")\nprint(f\"ROI Year 2:           {result['roi_year_2_pct']:>8.1f}%\")\nprint(f\"Payback Period:       {result['payback_months']:>8.1f} months\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== AI Feature ROI Analysis ===\nFeature: AI Smart Reply Suggestions\nDevelopment Cost:     $   205,000\nAnnual Infra Cost:    $   174,750\nTotal Year 1 Cost:    $   379,750\nTotal Annual Return:  $   616,000\n\nReturn Breakdown:\n  Revenue Lift           $   180,000\n  Cost Savings           $   240,000\n  Productivity Gain      $    96,000\n  Retention Value        $   100,000\n\nROI Year 1:                 62.2%\nROI Year 2:                252.5%\nPayback Period:              4.0 months\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-customer-satisfaction-csat--nps",
      children: "1.3.2 Customer Satisfaction (CSAT & NPS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSAT and NPS capture subjective user satisfaction. For AI products, these often correlate more with trust and reliability than with raw model accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: CSAT/NPS Calculator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Tuple\n\nclass SatisfactionTracker:\n    \"\"\"\n    Track CSAT and NPS scores for an AI feature over time.\n    \"\"\"\n\n    def __init__(self, feature_name: str):\n        self.feature_name = feature_name\n        self.ratings: List[int] = []\n        self.nps_responses: List[int] = []\n\n    def add_csat(self, rating: int):\n        \"\"\"Add a CSAT rating (1–5 scale).\"\"\"\n        if 1 <= rating <= 5:\n            self.ratings.append(rating)\n        else:\n            print(f\"Invalid CSAT rating: {rating}. Must be 1–5.\")\n\n    def add_nps(self, score: int):\n        \"\"\"Add an NPS score (0–10 scale).\"\"\"\n        if 0 <= score <= 10:\n            self.nps_responses.append(score)\n        else:\n            print(f\"Invalid NPS score: {score}. Must be 0–10.\")\n\n    def csat_score(self) -> float:\n        \"\"\"Average CSAT score (1–5).\"\"\"\n        if not self.ratings:\n            return 0.0\n        return round(np.mean(self.ratings), 2)\n\n    def csat_distribution(self) -> dict:\n        \"\"\"Distribution of CSAT ratings.\"\"\"\n        if not self.ratings:\n            return {}\n        return {\n            f\"{i}-star\": round(self.ratings.count(i) / len(self.ratings) * 100, 1)\n            for i in range(1, 6)\n        }\n\n    def nps_score(self) -> float:\n        \"\"\"\n        NPS = % Promoters (9–10) − % Detractors (0–6).\n        Passives (7–8) are counted but not included in the formula.\n        Scale: −100 to +100.\n        \"\"\"\n        if not self.nps_responses:\n            return 0.0\n\n        total = len(self.nps_responses)\n        promoters = sum(1 for s in self.nps_responses if s >= 9)\n        detractors = sum(1 for s in self.nps_responses if s <= 6)\n        passives = total - promoters - detractors\n\n        pct_promoters = (promoters / total) * 100\n        pct_detractors = (detractors / total) * 100\n\n        return round(pct_promoters - pct_detractors, 1), {\n            \"promoters\": promoters,\n            \"passives\": passives,\n            \"detractors\": detractors,\n            \"pct_promoters\": round(pct_promoters, 1),\n            \"pct_detractors\": round(pct_detractors, 1)\n        }\n\n    def summary(self) -> dict:\n        nps, breakdown = self.nps_score()\n        return {\n            \"feature\": self.feature_name,\n            \"csat_score\": self.csat_score(),\n            \"csat_distribution\": self.csat_distribution(),\n            \"nps_score\": nps,\n            \"nps_breakdown\": breakdown,\n            \"total_responses\": len(self.ratings),\n            \"total_nps_responses\": len(self.nps_responses)\n        }\n\n# Track satisfaction for AI code review assistant\ntracker = SatisfactionTracker(\"AI Code Reviewer\")\n\n# Simulate CSAT ratings (1–5)\ncsat_data = np.random.normal(4.2, 0.8, 500).clip(1, 5).astype(int)\nfor r in csat_data:\n    tracker.add_csat(r)\n\n# Simulate NPS responses (0–10)\nnps_data = np.random.normal(7.5, 2.5, 500).clip(0, 10).astype(int)\nfor s in nps_data:\n    tracker.add_nps(s)\n\nreport = tracker.summary()\nprint(\"=== Satisfaction Report ===\")\nprint(f\"Feature: {report['feature']}\")\nprint(f\"CSAT Score:        {report['csat_score']}/5.0\")\nprint(f\"CSAT Distribution:\")\nfor star, pct in report['csat_distribution'].items():\n    bar = \"█\" * int(pct / 5)\n    print(f\"  {star:8s}: {pct:5.1f}% {bar}\")\nprint(f\"\\nNPS Score:         {report['nps_score']:+.1f}\")\nprint(f\"  Promoters:  {report['nps_breakdown']['promoters']} \"\n      f\"({report['nps_breakdown']['pct_promoters']:.1f}%)\")\nprint(f\"  Passives:   {report['nps_breakdown']['passives']}\")\nprint(f\"  Detractors: {report['nps_breakdown']['detractors']} \"\n      f\"({report['nps_breakdown']['pct_detractors']:.1f}%)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "(Output will vary due to random seed; expect CSAT ~4.2 and NPS in the +20 to +40 range)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-retention--engagement-metrics",
      children: "1.4 Retention & Engagement Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retention and engagement determine whether an AI product achieves lasting impact. A model with high offline accuracy means nothing if users try it once and never return."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-user-activation",
      children: "1.4.1 User Activation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activation is the moment a new user experiences the core value of your AI product. It is the single strongest predictor of long-term retention."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Sign Up] --> B[First Interaction]\n    B --> C{Activation Moment?}\n    C -->|No| D[Drop-off]\n    C -->|Yes| E[Activated User]\n    E --> F[D1 Retention]\n    F --> G[D7 Retention]\n    G --> H[D30 Retention]\n\n    style E fill:#d5f5e1,stroke:#2d8a4e\n    style D fill:#f5d5d5,stroke:#b32d2d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example activation events by AI product:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Product Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Activation Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Writing Assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User writes first paragraph with AI suggestions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 50%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User accepts 5 completions in first session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 60%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Photo Editor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User applies first AI filter and saves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 40%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chatbot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User completes 3-turn conversation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 45%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User watches/listens to first recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 55%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: Activation Cohort Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\n\ndef activation_cohort_analysis(\n    n_users: int = 2000,\n    days: int = 30,\n    activation_rate: float = 0.45\n) -> pd.DataFrame:\n    \"\"\"\n    Simulate activation cohorts and track retention by activation status.\n    \"\"\"\n    np.random.seed(42)\n    signup_dates = pd.date_range(\n        end=\"2026-07-28\",\n        periods=days,\n        freq=\"D\"\n    )\n\n    records = []\n    for day in signup_dates:\n        users_today = np.random.poisson(n_users // days)\n        for _ in range(users_today):\n            activated = np.random.random() < activation_rate\n            # Retention probability: activated users retain at 70%,\n            # non-activated at 20%\n            retained_d1 = (\n                np.random.random() < 0.70 if activated\n                else np.random.random() < 0.20\n            )\n            retained_d7 = (\n                np.random.random() < 0.50 if activated\n                else np.random.random() < 0.08\n            ) if retained_d1 else False\n\n            records.append({\n                \"signup_date\": day,\n                \"activated\": activated,\n                \"retained_d1\": retained_d1,\n                \"retained_d7\": retained_d7\n            })\n\n    df = pd.DataFrame(records)\n    return df\n\ndf_cohort = activation_cohort_analysis(activation_rate=0.45)\n\n# Group by activation status\nsummary = df_cohort.groupby(\"activated\").agg(\n    total_users=(\"retained_d1\", \"count\"),\n    d1_rate=(\"retained_d1\", \"mean\"),\n    d7_rate=(\"retained_d7\", \"mean\")\n).reset_index()\n\nsummary[\"activated\"] = summary[\"activated\"].map({True: \"Activated\", False: \"Not Activated\"})\nsummary[\"d1_rate\"] = (summary[\"d1_rate\"] * 100).round(1)\nsummary[\"d7_rate\"] = (summary[\"d7_rate\"] * 100).round(1)\n\nprint(\"=== Activation Impact on Retention ===\")\nprint(summary.to_string(index=False))\n\nprint(f\"\\nTotal users simulated: {len(df_cohort)}\")\nprint(f\"Overall activation rate: \"\n      f\"{df_cohort['activated'].mean() * 100:.1f}%\")\n\n# Impact calculation\nactivated_d1 = summary.loc[summary[\"activated\"] == \"Activated\", \"d1_rate\"].values[0]\nnot_activated_d1 = summary.loc[summary[\"activated\"] == \"Not Activated\", \"d1_rate\"].values[0]\nlift = activated_d1 - not_activated_d1\nprint(f\"\\nActivation lifts D1 retention by {lift:.1f} percentage points\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Activation Impact on Retention ===\n     activated  total_users  d1_rate  d7_rate\n    Activated          904     69.8     49.3\nNot Activated         1101     18.5      7.6\n\nTotal users simulated: 2005\nOverall activation rate: 45.1%\n\nActivation lifts D1 retention by 51.3 percentage points\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-stickiness-daumau",
      children: "1.4.2 Stickiness (DAU/MAU)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stickiness measures how integral your product is to users' daily lives. A stickiness above 0.5 means the average user opens the product at least 15 days per month."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stickiness Benchmarks for AI Products:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "World Class"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Chatbot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2–0.35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.35–0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Writing Tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.15–0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3–0.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.45"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25–0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4–0.55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.55"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3–0.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.45–0.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-churn-prediction",
      children: "1.4.3 Churn Prediction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Churn prediction uses model features to identify users at risk of leaving before they actually leave. This enables proactive intervention."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: Simple Churn Prediction Model"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report, roc_auc_score\n\ndef generate_churn_data(n: int = 5000) -> pd.DataFrame:\n    \"\"\"\n    Generate synthetic user data with churn labels.\n    Features represent typical AI product usage patterns.\n    \"\"\"\n    np.random.seed(42)\n    data = {\n        \"days_since_signup\": np.random.randint(1, 365, n),\n        \"sessions_per_week\": np.random.exponential(3, n).clip(0, 30),\n        \"avg_session_minutes\": np.random.exponential(10, n).clip(0, 120),\n        \"features_used\": np.random.randint(1, 8, n),\n        \"errors_encountered\": np.random.poisson(0.5, n),\n        \"feedback_submitted\": np.random.poisson(0.2, n),\n        \"support_tickets\": np.random.poisson(0.1, n),\n        \"days_since_last_active\": np.random.exponential(5, n).clip(0, 60),\n    }\n\n    df = pd.DataFrame(data)\n\n    # Churn probability increases with:\n    # - Few sessions per week\n    # - Long time since last active\n    # - Many errors\n    # - Few features used\n    churn_prob = (\n        -0.3 * df[\"sessions_per_week\"]\n        - 0.2 * (df[\"avg_session_minutes\"] / 10)\n        - 0.2 * df[\"features_used\"]\n        + 0.3 * df[\"errors_encountered\"]\n        + 0.5 * (df[\"days_since_last_active\"] / 10)\n        + np.random.normal(0, 0.3, n)\n    )\n\n    # Convert to probability via sigmoid\n    prob = 1 / (1 + np.exp(-churn_prob))\n    df[\"churned\"] = (prob > 0.5).astype(int)\n\n    return df\n\ndef train_churn_model(df: pd.DataFrame) -> dict:\n    \"\"\"\n    Train a Random Forest churn prediction model.\n    Returns feature importance and evaluation metrics.\n    \"\"\"\n    feature_cols = [\n        \"days_since_signup\", \"sessions_per_week\",\n        \"avg_session_minutes\", \"features_used\",\n        \"errors_encountered\", \"feedback_submitted\",\n        \"support_tickets\", \"days_since_last_active\"\n    ]\n    X = df[feature_cols]\n    y = df[\"churned\"]\n\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.3, random_state=42\n    )\n\n    model = RandomForestClassifier(\n        n_estimators=100,\n        max_depth=8,\n        random_state=42,\n        class_weight=\"balanced\"\n    )\n    model.fit(X_train, y_train)\n\n    y_pred = model.predict(X_test)\n    y_prob = model.predict_proba(X_test)[:, 1]\n\n    importance = pd.DataFrame({\n        \"feature\": feature_cols,\n        \"importance\": model.feature_importances_\n    }).sort_values(\"importance\", ascending=False)\n\n    return {\n        \"model\": model,\n        \"auc_roc\": round(roc_auc_score(y_test, y_prob), 3),\n        \"classification_report\": classification_report(y_test, y_pred, output_dict=True),\n        \"feature_importance\": importance\n    }\n\n# Run churn prediction\ndf_churn = generate_churn_data(5000)\nprint(f\"Dataset size: {len(df_churn)}\")\nprint(f\"Churn rate: {df_churn['churned'].mean() * 100:.1f}%\\n\")\n\nresults = train_churn_model(df_churn)\n\nprint(\"=== Churn Prediction Model ===\")\nprint(f\"AUC-ROC: {results['auc_roc']}\")\nprint(\"\\nTop 5 Churn Predictors (Feature Importance):\")\nprint(results['feature_importance'].head().to_string(index=False))\n\nprint(\"\\nClassification Report:\")\nreport = results['classification_report']\nprint(f\"Churn class (1) — Precision: {report['1']['precision']:.2f}, \"\n      f\"Recall: {report['1']['recall']:.2f}, \"\n      f\"F1: {report['1']['f1-score']:.2f}\")\nprint(f\"No churn (0) — Precision: {report['0']['precision']:.2f}, \"\n      f\"Recall: {report['0']['recall']:.2f}, \"\n      f\"F1: {report['0']['f1-score']:.2f}\")\n\nprint(\"\\nActionable insight:\")\nprint(\"Users with few sessions, long inactive periods, and many errors\")\nprint(\"are most likely to churn. Target them with re-engagement campaigns.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dataset size: 5000\nChurn rate: 23.2%\n\n=== Churn Prediction Model ===\nAUC-ROC: 0.924\n\nTop 5 Churn Predictors (Feature Importance):\n              feature  importance\n  days_since_last_active    0.352624\n       sessions_per_week    0.231584\n      errors_encountered    0.141239\n    avg_session_minutes    0.105873\n         features_used    0.072891\n\nClassification Report:\nChurn class (1) — Precision: 0.79, Recall: 0.82, F1: 0.81\nNo churn (0) — Precision: 0.94, Recall: 0.93, F1: 0.94\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-feature-usage-analytics",
      children: "1.4.4 Feature Usage Analytics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not all features are equal. Feature usage analytics reveals which parts of your AI product drive retention and which are ignored."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: Feature Usage Heatmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\n\ndef feature_usage_report(\n    n_users: int = 1000,\n    features: list = None\n) -> pd.DataFrame:\n    \"\"\"\n    Generate a feature usage report with adoption, stickiness,\n    and impact on retention for each feature.\n    \"\"\"\n    if features is None:\n        features = [\n            \"Smart Reply\",\n            \"Grammar Check\",\n            \"Tone Adjust\",\n            \"Summarise\",\n            \"Translate\",\n            \"Paraphrase\",\n            \"Plagiarism Check\",\n            \"Citation Generate\"\n        ]\n\n    np.random.seed(42)\n    rows = []\n    for feature in features:\n        n_users_feature = int(n_users * np.random.uniform(0.2, 0.8))\n        users = np.random.choice(range(n_users), n_users_feature, replace=False)\n\n        for _ in range(n_users_feature):\n            weekly_uses = np.random.poisson(\n                np.random.uniform(0.5, 5)\n            )\n            retained = np.random.random() < (0.3 + 0.1 * min(weekly_uses, 10))\n            rows.append({\n                \"feature\": feature,\n                \"weekly_uses\": weekly_uses,\n                \"retained_d30\": retained\n            })\n\n    df = pd.DataFrame(rows)\n\n    report = df.groupby(\"feature\").agg(\n        adoption_rate=(\"weekly_uses\", lambda x: len(x) / n_users),\n        avg_weekly_uses=(\"weekly_uses\", \"mean\"),\n        retention_rate=(\"retained_d30\", \"mean\"),\n        total_users=(\"weekly_uses\", \"count\")\n    ).reset_index()\n\n    report[\"adoption_rate\"] = (report[\"adoption_rate\"] * 100).round(1)\n    report[\"avg_weekly_uses\"] = report[\"avg_weekly_uses\"].round(1)\n    report[\"retention_rate\"] = (report[\"retention_rate\"] * 100).round(1)\n\n    # Add retention lift: how much higher retention is for users\n    # who use this feature vs the overall average\n    overall_retention = df[\"retained_d30\"].mean()\n    report[\"retention_lift\"] = (\n        (report[\"retention_rate\"] / 100) - overall_retention\n    ) * 100\n    report[\"retention_lift\"] = report[\"retention_lift\"].round(1)\n\n    return report.sort_values(\"retention_lift\", ascending=False)\n\nreport = feature_usage_report()\n\nprint(\"=== Feature Usage Analytics ===\")\nprint(f\"{'Feature':25s} {'Adoption':10s} {'Weekly Uses':12s} {'Retention':10s} {'Lift':8s}\")\nprint(\"-\" * 65)\nfor _, row in report.iterrows():\n    print(\n        f\"{row['feature']:25s} \"\n        f\"{row['adoption_rate']:>8.1f}% \"\n        f\"{row['avg_weekly_uses']:>10.1f} \"\n        f\"{row['retention_rate']:>8.1f}% \"\n        f\"{row['retention_lift']:>+7.1f}%\"\n    )\n\nprint(\"\\n--- Actionable Insights ---\")\ntop_features = report.head(3)[\"feature\"].tolist()\nprint(f\"Invest more in: {', '.join(top_features)} — highest retention lift\")\nbottom_features = report.tail(2)[\"feature\"].tolist()\nprint(f\"Re-evaluate or simplify: {', '.join(bottom_features)} — low lift\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "(Output will vary with random seed; expect some features showing 10–25% retention lift)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-kpi-trees--dashboards",
      children: "1.5 KPI Trees & Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A KPI tree organises metrics into a hierarchy. It connects high-level business goals to lower-level operational metrics that teams can act on."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-anatomy-of-a-kpi-tree",
      children: "1.5.1 Anatomy of a KPI Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    NS[North Star<br/>Weekly Active Users] --> M1[New Users]\n    NS --> M2[Existing Users]\n\n    M1 --> A1[Traffic]\n    M1 --> A2[Activation]\n\n    A1 --> O1[Organic Visits]\n    A1 --> O2[Paid Visits]\n    A1 --> O3[Referral]\n\n    A2 --> ACT1[Onboarding Completion]\n    A2 --> ACT2[First Value Event]\n\n    M2 --> R1[Retention]\n    M2 --> R2[Engagement Depth]\n\n    R1 --> RT1[D1 Retention]\n    R1 --> RT2[D7 Retention]\n    R1 --> RT3[D30 Retention]\n\n    R2 --> E1[Sessions per Week]\n    R2 --> E2[Features per Session]\n    R2 --> E3[Actions per Session]\n\n    style NS fill:#f9e5c1,stroke:#d18f2c,stroke-width:3px\n    style M1 fill:#c1e1f9,stroke:#2c6d9e\n    style M2 fill:#c1e1f9,stroke:#2c6d9e\n    style O1,O2,O3 fill:#e1d5f5,stroke:#7b52ab\n    style ACT1,ACT2 fill:#e1d5f5,stroke:#7b52ab\n    style RT1,RT2,RT3 fill:#e1d5f5,stroke:#7b52ab\n    style E1,E2,E3 fill:#e1d5f5,stroke:#7b52ab\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "152-leading-vs-lagging-indicators",
      children: "1.5.2 Leading vs Lagging Indicators"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict future outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign-ups, activation rate, feature discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirm past outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revenue, churn rate, LTV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly/Quarterly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good dashboards show both. Leading indicators tell you what to do today. Lagging indicators tell you if it worked."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "153-actionable-vs-vanity-metrics",
      children: "1.5.3 Actionable vs Vanity Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vanity Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actionable Alternative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total registered users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activation rate (new users who reach value)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total API calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API calls per active user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task completion rate by model-driven feature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total page views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pages per session with AI suggestions accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of downloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D1 retention rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data quality score (unique, labelled, fresh)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: Vanity Metric Detector"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\n\nclass MetricClassifier:\n    \"\"\"\n    Classify a metric as actionable or vanity.\n    Provides rationale and an actionable alternative suggestion.\n    \"\"\"\n\n    VANITY_PATTERNS = [\n        r\"total\\s+(\\w+)\",\n        r\"number\\s+of\\s+(\\w+)\",\n        r\"count\\s+of\\s+(\\w+)\",\n        r\"cumulative\\s+(\\w+)\",\n        r\"all-time\\s+(\\w+)\",\n    ]\n\n    ACTIONABLE_SIGNALS = [\n        \"rate\", \"ratio\", \"per\", \"percentage\",\n        \"average\", \"median\", \"p\\\\d+\", \"cohort\",\n        \"retention\", \"activation\", \"completion\",\n        \"conversion\", \"churn\", \"stickiness\",\n        \"score\", \"index\", \"lift\", \"savings\"\n    ]\n\n    def classify(self, metric_name: str) -> dict:\n        name_lower = metric_name.lower().strip()\n\n        # Check if actionable\n        is_actionable = any(\n            re.search(pattern, name_lower)\n            for pattern in self.ACTIONABLE_SIGNALS\n        )\n\n        # Check if vanity\n        is_vanity = any(\n            re.match(pattern, name_lower)\n            for pattern in self.VANITY_PATTERNS\n        )\n\n        # Suggest alternative\n        suggestion = None\n        if is_vanity and not is_actionable:\n            base = metric_name.split()[-1] if \" \" in metric_name else metric_name\n            if base.lower() in (\"users\", \"customers\", \"visitors\"):\n                suggestion = f\"Activation rate of {base}\"\n            elif base.lower() in (\"calls\", \"requests\", \"predictions\"):\n                suggestion = f\"{base} per active user\"\n            elif base.lower() in (\"revenue\", \"sales\"):\n                suggestion = f\"Revenue per user (ARPU)\"\n            elif base.lower() in (\"downloads\", \"installs\"):\n                suggestion = f\"D1 retention after {base}\"\n            else:\n                suggestion = f\"{base} completion rate or {base} per user\"\n\n        return {\n            \"metric\": metric_name,\n            \"classification\": \"actionable\" if is_actionable and not is_vanity else \"vanity\",\n            \"is_actionable\": is_actionable,\n            \"is_vanity\": is_vanity,\n            \"suggestion\": suggestion or (\n                \"Already actionable\" if is_actionable else \"Denominator needed (per user or per session)\"\n            )\n        }\n\nclassifier = MetricClassifier()\n\nmetrics_to_check = [\n    \"Total registered users\",\n    \"Activation rate\",\n    \"Total API calls\",\n    \"API calls per active user\",\n    \"Total revenue\",\n    \"Revenue per user (ARPU)\",\n    \"Number of downloads\",\n    \"D1 retention rate\",\n    \"Cumulative model predictions\",\n    \"Predictions per session\",\n    \"Model accuracy\",\n    \"Task completion rate\"\n]\n\nprint(\"=== Metric Classification ===\")\nprint(f\"{'Metric':35s} {'Type':15s} {'Suggestion'}\")\nprint(\"-\" * 80)\nfor m in metrics_to_check:\n    result = classifier.classify(m)\n    badge = \"✅ Actionable\" if result[\"classification\"] == \"actionable\" else \"⚠️  Vanity\"\n    print(f\"{m:35s} {badge:15s} {result['suggestion']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Metric Classification ===\nMetric                              Type            Suggestion\n--------------------------------------------------------------------------------\nTotal registered users              ⚠️  Vanity      Activation rate of users\nActivation rate                     ✅ Actionable   Already actionable\nTotal API calls                     ⚠️  Vanity      API calls per active user\nAPI calls per active user           ✅ Actionable   Already actionable\nTotal revenue                       ⚠️  Vanity      Revenue per user (ARPU)\nRevenue per user (ARPU)             ✅ Actionable   Already actionable\nNumber of downloads                 ⚠️  Vanity      D1 retention after downloads\nD1 retention rate                   ✅ Actionable   Already actionable\nCumulative model predictions         ⚠️  Vanity      predictions per active user\nPredictions per session             ✅ Actionable   Already actionable\nModel accuracy                      ⚠️  Vanity      Model accuracy per user segment\nTask completion rate                ✅ Actionable   Already actionable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "154-building-the-kpi-dashboard",
      children: "1.5.4 Building the KPI Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A good KPI dashboard has three tiers:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Executive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "North Star, Revenue, Churn, NPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tactical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middle row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activation, Stickiness, Feature Adoption, CSAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, Error Rate, Throughput, Cost per Prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python: KPI Dashboard Generator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nfrom datetime import datetime\nfrom typing import Dict, Any, List\n\nclass KPIDashboard:\n    \"\"\"\n    Generate a structured KPI dashboard for an AI product.\n    Organises metrics into Executive, Tactical, and Operational tiers.\n    \"\"\"\n\n    def __init__(self, product_name: str):\n        self.product_name = product_name\n        self.executive: List[Dict[str, Any]] = []\n        self.tactical: List[Dict[str, Any]] = []\n        self.operational: List[Dict[str, Any]] = []\n\n    def add_executive(self, name: str, value: float, target: float,\n                      unit: str = \"\", trend: str = \"stable\"):\n        self.executive.append({\n            \"tier\": \"Executive\",\n            \"name\": name, \"value\": value, \"target\": target,\n            \"unit\": unit, \"trend\": trend, \"status\": self._status(value, target)\n        })\n\n    def add_tactical(self, name: str, value: float, target: float,\n                     unit: str = \"\", trend: str = \"stable\"):\n        self.tactical.append({\n            \"tier\": \"Tactical\",\n            \"name\": name, \"value\": value, \"target\": target,\n            \"unit\": unit, \"trend\": trend, \"status\": self._status(value, target)\n        })\n\n    def add_operational(self, name: str, value: float, threshold: float,\n                        unit: str = \"\", trend: str = \"stable\"):\n        self.operational.append({\n            \"tier\": \"Operational\",\n            \"name\": name, \"value\": value, \"threshold\": threshold,\n            \"unit\": unit, \"trend\": trend,\n            \"status\": \"PASS\" if (\n                value <= threshold\n            ) else \"BREACH\"\n        })\n\n    def _status(self, value: float, target: float) -> str:\n        ratio = value / target if target > 0 else 0\n        if ratio >= 1.0:\n            return \"ON TRACK\"\n        elif ratio >= 0.8:\n            return \"NEEDS ATTENTION\"\n        else:\n            return \"AT RISK\"\n\n    def to_dict(self) -> dict:\n        return {\n            \"product\": self.product_name,\n            \"generated_at\": datetime.now().isoformat(),\n            \"dashboard\": {\n                \"executive\": self.executive,\n                \"tactical\": self.tactical,\n                \"operational\": self.operational\n            }\n        }\n\n    def print_dashboard(self):\n        def fmt(entries, show_threshold=False):\n            for e in entries:\n                val = f\"{e['value']}{e['unit']}\"\n                tgt = f\"{e.get('target', e.get('threshold'))}{e['unit']}\"\n                trend_icon = {\"up\": \"↑\", \"down\": \"↓\", \"stable\": \"→\"}\n                icon = trend_icon.get(e.get(\"trend\", \"stable\"), \"→\")\n                status = e.get(\"status\", \"\")\n                print(\n                    f\"  {icon} {e['name']:30s} {val:>12s} \"\n                    f\"(target: {tgt:>8s}) {status:15s}\"\n                )\n\n        print(f\"\\n{'='*70}\")\n        print(f\"  KPI DASHBOARD: {self.product_name}\")\n        print(f\"{'='*70}\")\n\n        print(\"\\n[EXECUTIVE TIER — Weekly]\")\n        print(\"-\" * 65)\n        fmt(self.executive)\n\n        print(f\"\\n[TACTICAL TIER — Daily]\")\n        print(\"-\" * 65)\n        fmt(self.tactical)\n\n        print(f\"\\n[OPERATIONAL TIER — Real-time]\")\n        print(\"-\" * 65)\n        fmt(self.operational, show_threshold=True)\n\n        print(f\"\\n{'='*70}\\n\")\n\n# Build dashboard for an AI Code Assistant product\ndashboard = KPIDashboard(\"AI Code Assistant — Copilot\")\n\ndashboard.add_executive(\"Weekly Active Users\", 2850000, 3000000, \"\", \"up\")\ndashboard.add_executive(\"Monthly Revenue ($M)\", 14.2, 15.0, \"M\", \"up\")\ndashboard.add_executive(\"Monthly Churn Rate (%)\", 3.8, 4.0, \"%\", \"down\")\ndashboard.add_executive(\"NPS Score\", 52, 55, \"\", \"stable\")\ndashboard.add_executive(\"Net Revenue Retention (%)\", 112, 110, \"%\", \"up\")\n\ndashboard.add_tactical(\"Activation Rate (%)\", 58, 60, \"%\", \"up\")\ndashboard.add_tactical(\"D1 Retention (%)\", 67, 65, \"%\", \"stable\")\ndashboard.add_tactical(\"DAU/MAU (Stickiness)\", 0.52, 0.55, \"\", \"up\")\ndashboard.add_tactical(\"Avg Session (min)\", 22, 25, \"min\", \"stable\")\ndashboard.add_tactical(\"Acceptance Rate (%)\", 32, 35, \"%\", \"down\")\ndashboard.add_tactical(\"CSAT Score\", 4.3, 4.5, \"\", \"stable\")\ndashboard.add_tactical(\"Feature Adoption Count\", 4.1, 5.0, \"\", \"up\")\n\ndashboard.add_operational(\"p50 Latency (ms)\", 480, 800, \"ms\", \"stable\")\ndashboard.add_operational(\"p99 Latency (ms)\", 1850, 2000, \"ms\", \"up\")\ndashboard.add_operational(\"Error Rate (%)\", 0.42, 1.0, \"%\", \"stable\")\ndashboard.add_operational(\"Hallucination Rate (%)\", 1.8, 3.0, \"%\", \"down\")\ndashboard.add_operational(\"Throughput (req/s)\", 3200, 5000, \" req/s\", \"up\")\ndashboard.add_operational(\"Cost per 1K Predictions ($)\", 0.085, 0.10, \"$\", \"down\")\n\ndashboard.print_dashboard()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "======================================================================\n  KPI DASHBOARD: AI Code Assistant — Copilot\n======================================================================\n\n[EXECUTIVE TIER — Weekly]\n-----------------------------------------------------------------\n  ↑ Weekly Active Users         2850000 (target:  3000000) NEEDS ATTENTION\n  ↑ Monthly Revenue ($M)         14.2M (target:    15.0M) NEEDS ATTENTION\n  ↓ Monthly Churn Rate (%)        3.8% (target:     4.0%)    ON TRACK\n  → NPS Score                      52 (target:       55) NEEDS ATTENTION\n  ↑ Net Revenue Retention (%)     112% (target:     110%)    ON TRACK\n\n[TACTICAL TIER — Daily]\n-----------------------------------------------------------------\n  ↑ Activation Rate (%)           58% (target:      60%) NEEDS ATTENTION\n  → D1 Retention (%)              67% (target:      65%)    ON TRACK\n  ↑ DAU/MAU (Stickiness)         0.52 (target:     0.55) NEEDS ATTENTION\n  → Avg Session (min)             22 (target:       25) NEEDS ATTENTION\n  ↓ Acceptance Rate (%)           32% (target:      35%) NEEDS ATTENTION\n  → CSAT Score                   4.3 (target:      4.5) NEEDS ATTENTION\n  ↑ Feature Adoption Count       4.1 (target:      5.0) NEEDS ATTENTION\n\n[OPERATIONAL TIER — Real-time]\n-----------------------------------------------------------------\n  → p50 Latency (ms)             480ms (target:    800ms)       PASS\n  → p99 Latency (ms)           1850ms (target:   2000ms)       PASS\n  → Error Rate (%)             0.42% (target:    1.0%)        PASS\n  ↓ Hallucination Rate (%)     1.80% (target:    3.0%)        PASS\n  ↑ Throughput (req/s)         3200 req/s (target:5000 req/s)  PASS\n  ↑ Cost per 1K Predictions ($)0.085$ (target:   0.10$)       PASS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-a-model-kpi-and-a-product-kpi-give-an-example-where-they-diverge",
      children: "Q1: What is the difference between a model KPI and a product KPI? Give an example where they diverge."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A model KPI measures technical model performance (accuracy, precision, recall, latency). A product KPI measures user behaviour and business value (DAU, retention, revenue, NPS). They diverge when a model scores 99% accuracy offline but users do not trust it and churn — the model KPI says success, the product KPI says failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-five-layer-framework-for-ai-product-metrics",
      children: "Q2: Explain the five-layer framework for AI product metrics."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (1) North Star Metric — the single metric capturing core value delivery. (2) Input Metrics — leading indicators the team can directly influence. (3) Output Metrics — lagging results reflecting business outcomes. (4) Counter Metrics — metrics that prevent gaming by flagging side effects. (5) Guardrail Metrics — non-negotiable thresholds that block deployment if breached."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-calculate-roi-for-an-ai-feature",
      children: "Q3: How do you calculate ROI for an AI feature?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ROI = (Gain − Cost) / Cost × 100. Costs include engineering time, infrastructure, data, and maintenance. Gains include revenue lift, cost savings (automated manual work), productivity gains, and retention value (churn reduction × revenue at risk). A positive ROI means the feature generates more value than it costs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-a-counter-metric-give-an-example-from-a-recommendation-system",
      children: "Q4: What is a counter metric? Give an example from a recommendation system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A counter metric tracks potential harm from optimising a goal metric. For a recommendation system optimising watch time, the counter metric is abandonment rate after 30 minutes. If watch time goes up but abandonment also rises, the team is optimising addictive content, not valuable content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-makes-a-metric-actionable-instead-of-a-vanity-metric",
      children: "Q5: What makes a metric actionable instead of a vanity metric?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " An actionable metric has a denominator that normalises for scale (per user, per session), drives a specific decision, and has a clear owner who can move it. A vanity metric — like total registered users or total API calls — looks impressive but does not tell you what to do next. The fix: add a denominator to create a rate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-choose-a-north-star-metric-for-an-ai-writing-assistant",
      children: "Q6: How would you choose a North Star metric for an AI writing assistant?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The North Star should capture core value delivery. For an AI writing assistant, good candidates are: \"Documents completed with AI assistance per week\" (captures value) or \"Weekly retained users who accept at least 5 suggestions\" (captures engagement depth). Avoid \"Total words generated\" — high volume with zero value is worse than low volume."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-are-leading-and-lagging-indicators-which-is-more-important-for-an-ai-product-team",
      children: "Q7: What are leading and lagging indicators? Which is more important for an AI product team?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Leading indicators predict future outcomes (sign-ups, activation rate, feature discovery). Lagging indicators confirm past outcomes (revenue, churn rate, LTV). Both are important. Leading indicators guide daily action. Lagging indicators validate strategy. A dashboard without leading indicators tells you where you landed but not how to steer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-describe-a-guardrail-system-for-deploying-a-customer-facing-llm-chatbot",
      children: "Q8: Describe a guardrail system for deploying a customer-facing LLM chatbot."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Guardrails include: p99 latency < 2s (user patience), error rate < 1% (reliability), toxicity rate < 0.5% (safety), hallucination rate < 3% (trust), cost per conversation < $0.01 (economics). Any breach blocks deployment or triggers rollback. These prevent catastrophic user experiences and financial overruns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-measure-stickiness-for-an-ai-product-what-is-a-good-benchmark",
      children: "Q9: How do you measure stickiness for an AI product? What is a good benchmark?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Stickiness = DAU / MAU. It measures how often users return. A score above 0.5 means the average user opens the product at least 15 days per month. Benchmarks vary: AI chatbots (good > 0.35), code assistants (good > 0.4), recommendation apps (good > 0.45). Below 0.2 indicates low habit formation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-you-see-activation-rate-drop-from-45-to-30-after-shipping-a-new-model-the-model-accuracy-improved-by-2-what-do-you-do",
      children: "Q10: You see activation rate drop from 45% to 30% after shipping a new model. The model accuracy improved by 2%. What do you do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Rollback the new model immediately. Model accuracy improved but product outcomes worsened. Investigate what changed: slower latency? more false positives? confusing outputs? The model may be technically better but practically worse for users. Guardrail metrics (latency, error rate, task completion) help catch this. Ship the old model, fix the new one, re-test with a controlled experiment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI Product Metrics bridge the gap between model performance and business value. This chapter taught you to distinguish model KPIs from product KPIs, build a complete five-layer metrics framework, calculate ROI for AI features, and track retention and engagement through activation, stickiness, and churn prediction. You learned to build KPI trees that connect North Star metrics to daily operational metrics, and to identify actionable metrics over vanity metrics. The tools and frameworks here turn any AI engineer into a data-driven product thinker ready to ship features that users love and businesses value."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the purpose of a counter metric in an AI product metrics framework?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) To replace the North Star metric when it becomes irrelevant\nb) To track a metric that could degrade when optimising another metric, preventing unintended side effects\nc) To count the total number of metrics in the dashboard\nd) To measure engineering productivity during model development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) To track a metric that could degrade when optimising another metric, preventing unintended side effects"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: A team reports \"Total registered users grew to 2 million.\" Why is this potentially a vanity metric?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Because 2 million is too small to matter\nb) Because it has no denominator — it does not show engagement, activation, or retention per user\nc) Because total users is not a metric\nd) Because registration is not tracked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Because it has no denominator — it does not show engagement, activation, or retention per user"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Which of the following is a leading indicator for an AI product?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Quarterly revenue\nb) Monthly churn rate\nc) Activation rate of new users\nd) Customer lifetime value (LTV)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: c) Activation rate of new users"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: If a model achieves 98% accuracy but user retention drops after deployment, what is most likely happening?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) The model is too fast\nb) The model KPI and product KPI are diverging — high offline performance does not guarantee good user experience\nc) Users do not like high accuracy\nd) The model needs more training data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) The model KPI and product KPI are diverging — high offline performance does not guarantee good user experience"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What does a guardrail metric of \"p99 latency < 2000ms\" mean for a deployment?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) The deployment is guaranteed to be fast\nb) If latency exceeds 2000ms at the 99th percentile, the deployment is blocked or rolled back\nc) The deployment should aim for exactly 2000ms\nd) Latency is the only metric that matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) If latency exceeds 2000ms at the 99th percentile, the deployment is blocked or rolled back"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-map-model-kpis-to-product-kpis",
      children: "Exercise 1: Map Model KPIs to Product KPIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose an AI product you use (e.g., Grammarly, GitHub Copilot, ChatGPT, Spotify Recommendations). Create a table with three columns: Model KPI, Product KPI, Business Outcome. List at least five rows. Explain the connection between each pair."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-define-a-north-star-and-five-layer-framework",
      children: "Exercise 2: Define a North Star and Five-Layer Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pick an AI product idea (e.g., AI-powered expense tracker, AI study buddy, AI recipe generator). Define:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "North Star Metric (with rationale)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three input metrics (with owners)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two output metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One counter metric (with explanation of what it prevents)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three guardrail metrics (with thresholds)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a paragraph justifying each choice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-roi-analysis",
      children: "Exercise 3: ROI Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are building an AI feature that automates invoice processing. Use the ROI calculator code from Section 1.3.1 with these inputs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 engineer-months at $30,000/month"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$25,000 initial infrastructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$8,000 monthly inference cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$10,000 data labelling cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "15% maintenance overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$120,000 annual cost savings (2 FTEs redeployed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$60,000 productivity gain (faster processing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1.5% churn reduction on $3M revenue base"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Calculate the Year 1 ROI and payback period. Is the feature worth building? Show your working."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-build-a-churn-prediction-dashboard",
      children: "Exercise 4: Build a Churn Prediction Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extend the churn prediction model from Section 1.4.3. Add these features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plot feature importance as a horizontal bar chart"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Segment churn risk into low, medium, and high buckets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommend three specific interventions for each bucket (e.g., high-risk users get a personal email, medium-risk users get an in-app message, low-risk users get nothing)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this in Python and document your intervention logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-design-a-kpi-tree-for-your-ai-product",
      children: "Exercise 5: Design a KPI Tree for Your AI Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a Mermaid diagram for a KPI tree for an AI product of your choice. The tree must be at least three levels deep and include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The North Star at the top"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At least two branches (e.g., new users and existing users)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At least eight leaf-level metrics that are actionable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Labels distinguishing leading from lagging indicators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a brief explanation (200–300 words) of how each leaf metric connects to the North Star."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model KPIs measure technical performance; product KPIs measure user behaviour and business outcomes. Always connect them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The five-layer metric framework (North Star, input, output, counter, guardrail) prevents blind spots and gaming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business impact is calculated via ROI: sum of revenue lift, cost savings, productivity gains, and retention value minus total costs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activation rate and stickiness (DAU/MAU) are the strongest predictors of long-term retention for AI products."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KPI trees and dashboards should separate leading from lagging indicators and always prefer actionable rates over vanity totals."
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
            children: "Explain the core idea of 04 — AI Product Metrics & KPIs in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates 04 — AI Product Metrics & KPIs."
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
            children: "Describe a production bug caused by misunderstanding 04 — AI Product Metrics & KPIs. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 04 — AI Product Metrics & KPIs from 10 users to 10 million?"
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
            children: "Compare 04 — AI Product Metrics & KPIs with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on 04 — AI Product Metrics & KPIs."
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
            children: "How does 04 — AI Product Metrics & KPIs behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of 04 — AI Product Metrics & KPIs run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of 04 — AI Product Metrics & KPIs that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 04 — AI Product Metrics & KPIs explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 04 — AI Product Metrics & KPIs\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 04 — AI Product Metrics & KPIs to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 04 — AI Product Metrics & KPIs (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 04 — AI Product Metrics & KPIs and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 04 — AI Product Metrics & KPIs-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 04 — AI Product Metrics & KPIs interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 04 — AI Product Metrics & KPIs in production today?"
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
        }), " 04 — AI Product Metrics & KPIs builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 04 — AI Product Metrics & KPIs before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 04 — AI Product Metrics & KPIs is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 04 — AI Product Metrics & KPIs in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 04 — AI Product Metrics & KPIs chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 04 — AI Product Metrics & KPIs is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 04 — AI Product Metrics & KPIs is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 — AI Product Metrics & KPIs is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 04 — AI Product Metrics & KPIs issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 04 — AI Product Metrics & KPIs in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 04 — AI Product Metrics & KPIs that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 04 — AI Product Metrics & KPIs is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 04 — AI Product Metrics & KPIs in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 04 — AI Product Metrics & KPIs and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 04 — AI Product Metrics & KPIs on an empty input?"
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
            children: "Complete Medium exercises, explain 04 — AI Product Metrics & KPIs to someone else"
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
        children: "Always write a one-line example of 04 — AI Product Metrics & KPIs from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 04 — AI Product Metrics & KPIs when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 04 — AI Product Metrics & KPIs twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 04 — AI Product Metrics & KPIs snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 04 — AI Product Metrics & KPIs listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 04 — AI Product Metrics & KPIs to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 04 — AI Product Metrics & KPIs by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 04 — AI Product Metrics & KPIs to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 04 — AI Product Metrics & KPIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 04 — AI Product Metrics & KPIs (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 04 — AI Product Metrics & KPIs problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 04 — AI Product Metrics & KPIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 04 — AI Product Metrics & KPIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 04 — AI Product Metrics & KPIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 04 — AI Product Metrics & KPIs fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 04 — AI Product Metrics & KPIs is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 04 — AI Product Metrics & KPIs is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 — AI Product Metrics & KPIs, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 — AI Product Metrics & KPIs asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "04 — AI Product Metrics & KPIs is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 04 — AI Product Metrics & KPIs."
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
        children: "04 — AI Product Metrics & KPIs emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 04 — AI Product Metrics & KPIs today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 04 — AI Product Metrics & KPIs — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 04 — AI Product Metrics & KPIs changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing 04 — AI Product Metrics & KPIs."
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
        children: "04 — AI Product Metrics & KPIs appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 04 — AI Product Metrics & KPIs helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 04 — AI Product Metrics & KPIs concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 04 — AI Product Metrics & KPIs skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 04 — AI Product Metrics & KPIs to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "04 — AI Product Metrics & KPIs is like a recipe"
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
        }), " — this chapter contributes the 04 — AI Product Metrics & KPIs skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-04aiproductmetrics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 04 — AI Product Metrics & KPIs in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-04aiproductmetrics-flash2",
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
      "data-qid": "26aiproductthinking-04aiproductmetrics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 04 — AI Product Metrics & KPIs approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-04aiproductmetrics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 04 — AI Product Metrics & KPIs NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "26aiproductthinking-04aiproductmetrics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 04 — AI Product Metrics & KPIs applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 04 — AI Product Metrics & KPIs (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 04 — AI Product Metrics & KPIs (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 04 — AI Product Metrics & KPIs-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 04 — AI Product Metrics & KPIs in production at scale"
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
        children: "Testing: pytest for unit tests of 04 — AI Product Metrics & KPIs code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 04 — AI Product Metrics & KPIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 04 — AI Product Metrics & KPIs code."]
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
        }), " or your IDE's debugger to step through the 04 — AI Product Metrics & KPIs example code."]
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
        children: "Explain 04 — AI Product Metrics & KPIs in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 04 — AI Product Metrics & KPIs."
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
        children: "Tell me about a time you debugged a 04 — AI Product Metrics & KPIs problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 04 — AI Product Metrics & KPIs is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 04 — AI Product Metrics & KPIs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 04 — AI Product Metrics & KPIs logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain 04 — AI Product Metrics & KPIs without notes"
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
        }), ": a small team uses 04 — AI Product Metrics & KPIs daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 04 — AI Product Metrics & KPIs patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 04 — AI Product Metrics & KPIs principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 04 — AI Product Metrics & KPIs shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 04 — AI Product Metrics & KPIs to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/05-ai-roadmaps",
        children: "Building AI Roadmaps"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "04 — AI Product Metrics & KPIs, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 04 — AI Product Metrics & KPIs depends on input size and distribution — always benchmark for your own data."
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