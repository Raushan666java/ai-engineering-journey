"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[24544],{

/***/ 10162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_54_interview_ai_ml_md_3b8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-54-interview-ai-ml-md-3b8.json
const site_docs_courses_laravel_54_interview_ai_ml_md_3b8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/54-interview-ai-ml","title":"Chapter 54: AI/ML Interview Q&A","description":"Previous None","source":"@site/docs/courses/laravel/54-interview-ai-ml.md","sourceDirName":"courses/laravel","slug":"/laravel/54-interview-ai-ml","permalink":"/ai-engineering-journey/laravel/54-interview-ai-ml","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":54,"frontMatter":{"id":"54-interview-ai-ml","slug":"/laravel/54-interview-ai-ml","title":"Chapter 54: AI/ML Interview Q&A","sidebar_label":"Chapter 54: AI/ML Interview Q&A","sidebar_position":54},"sidebar":"course-laravel","previous":{"title":"Chapter 53: JavaScript Interview Q&A","permalink":"/ai-engineering-journey/laravel/53-interview-javascript"},"next":{"title":"Chapter P6: AI/ML Fundamentals & Laravel Integration","permalink":"/ai-engineering-journey/laravel/ai-ml-fundamentals"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/54-interview-ai-ml.md


const frontMatter = {
	id: '54-interview-ai-ml',
	slug: '/laravel/54-interview-ai-ml',
	title: 'Chapter 54: AI/ML Interview Q&A',
	sidebar_label: 'Chapter 54: AI/ML Interview Q&A',
	sidebar_position: 54
};
const contentTitle = 'Chapter 54: AI/ML Interview Q&A';

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Machine Learning Fundamentals",
  "id": "machine-learning-fundamentals",
  "level": 2
}, {
  "value": "Q1: What is the difference between supervised, unsupervised, and reinforcement learning?",
  "id": "q1-what-is-the-difference-between-supervised-unsupervised-and-reinforcement-learning",
  "level": 3
}, {
  "value": "Q2: Explain overfitting and underfitting. How do you detect and fix them?",
  "id": "q2-explain-overfitting-and-underfitting-how-do-you-detect-and-fix-them",
  "level": 3
}, {
  "value": "Q3: What is the bias-variance tradeoff?",
  "id": "q3-what-is-the-bias-variance-tradeoff",
  "level": 3
}, {
  "value": "Q4: Walk through the main evaluation metrics for classification.",
  "id": "q4-walk-through-the-main-evaluation-metrics-for-classification",
  "level": 3
}, {
  "value": "Q5: Explain regression evaluation metrics.",
  "id": "q5-explain-regression-evaluation-metrics",
  "level": 3
}, {
  "value": "Q6: What is cross-validation and why use it?",
  "id": "q6-what-is-cross-validation-and-why-use-it",
  "level": 3
}, {
  "value": "Q7: What is the difference between L1 and L2 regularization?",
  "id": "q7-what-is-the-difference-between-l1-and-l2-regularization",
  "level": 3
}, {
  "value": "Q8: Explain the ROC curve and AUC.",
  "id": "q8-explain-the-roc-curve-and-auc",
  "level": 3
}, {
  "value": "Q9: What is the curse of dimensionality?",
  "id": "q9-what-is-the-curse-of-dimensionality",
  "level": 3
}, {
  "value": "Q10: Compare parametric vs. non-parametric models.",
  "id": "q10-compare-parametric-vs-non-parametric-models",
  "level": 3
}, {
  "value": "Q11: What is gradient descent? Explain batch, stochastic, and mini-batch variants.",
  "id": "q11-what-is-gradient-descent-explain-batch-stochastic-and-mini-batch-variants",
  "level": 3
}, {
  "value": "Q12: Explain the confusion matrix components.",
  "id": "q12-explain-the-confusion-matrix-components",
  "level": 3
}, {
  "value": "Q13: What is the difference between bagging and boosting?",
  "id": "q13-what-is-the-difference-between-bagging-and-boosting",
  "level": 3
}, {
  "value": "Q14: What is the difference between generative and discriminative models?",
  "id": "q14-what-is-the-difference-between-generative-and-discriminative-models",
  "level": 3
}, {
  "value": "Q15: Explain the concept of entropy and information gain in decision trees.",
  "id": "q15-explain-the-concept-of-entropy-and-information-gain-in-decision-trees",
  "level": 3
}, {
  "value": "Q16: How do you handle imbalanced datasets?",
  "id": "q16-how-do-you-handle-imbalanced-datasets",
  "level": 3
}, {
  "value": "Classical ML in PHP",
  "id": "classical-ml-in-php",
  "level": 2
}, {
  "value": "Q17: What libraries are available for machine learning in PHP?",
  "id": "q17-what-libraries-are-available-for-machine-learning-in-php",
  "level": 3
}, {
  "value": "Q18: How do you train a linear regression model with Rubix ML?",
  "id": "q18-how-do-you-train-a-linear-regression-model-with-rubix-ml",
  "level": 3
}, {
  "value": "Q19: How do you classify data with logistic regression using PHP-ML?",
  "id": "q19-how-do-you-classify-data-with-logistic-regression-using-php-ml",
  "level": 3
}, {
  "value": "Q20: Explain Rubix ML pipelines and why they matter.",
  "id": "q20-explain-rubix-ml-pipelines-and-why-they-matter",
  "level": 3
}, {
  "value": "Q21: How do you perform k-means clustering with PHP-ML?",
  "id": "q21-how-do-you-perform-k-means-clustering-with-php-ml",
  "level": 3
}, {
  "value": "Q22: How do you persist and load a trained model in Rubix ML?",
  "id": "q22-how-do-you-persist-and-load-a-trained-model-in-rubix-ml",
  "level": 3
}, {
  "value": "Q23: How do you build a decision tree classifier with Rubix ML?",
  "id": "q23-how-do-you-build-a-decision-tree-classifier-with-rubix-ml",
  "level": 3
}, {
  "value": "Q24: How do you implement k-nearest neighbors in PHP?",
  "id": "q24-how-do-you-implement-k-nearest-neighbors-in-php",
  "level": 3
}, {
  "value": "Q25: How do you evaluate a model on a test set in Rubix ML?",
  "id": "q25-how-do-you-evaluate-a-model-on-a-test-set-in-rubix-ml",
  "level": 3
}, {
  "value": "Q26: What is the difference between <code>Labeled</code> and <code>Unlabeled</code> datasets in Rubix ML?",
  "id": "q26-what-is-the-difference-between-labeled-and-unlabeled-datasets-in-rubix-ml",
  "level": 3
}, {
  "value": "Q27: How do you handle categorical features in Rubix ML?",
  "id": "q27-how-do-you-handle-categorical-features-in-rubix-ml",
  "level": 3
}, {
  "value": "Q28: How do you implement neural network classification in Rubix ML?",
  "id": "q28-how-do-you-implement-neural-network-classification-in-rubix-ml",
  "level": 3
}, {
  "value": "Q29: How do you handle anomaly detection with Rubix ML?",
  "id": "q29-how-do-you-handle-anomaly-detection-with-rubix-ml",
  "level": 3
}, {
  "value": "Q30: How do you use Rubix ML from an Artisan command for batch predictions?",
  "id": "q30-how-do-you-use-rubix-ml-from-an-artisan-command-for-batch-predictions",
  "level": 3
}, {
  "value": "Q31: Compare PHP-ML vs Rubix ML → when to use which?",
  "id": "q31-compare-php-ml-vs-rubix-ml--when-to-use-which",
  "level": 3
}, {
  "value": "NLP &amp; Text Processing",
  "id": "nlp--text-processing",
  "level": 2
}, {
  "value": "Q32: What is tokenization and how do you implement it in PHP?",
  "id": "q32-what-is-tokenization-and-how-do-you-implement-it-in-php",
  "level": 3
}, {
  "value": "Q33: Explain TF-IDF vectorization and how to use it in Rubix ML.",
  "id": "q33-explain-tf-idf-vectorization-and-how-to-use-it-in-rubix-ml",
  "level": 3
}, {
  "value": "Q34: How do you build a text classification pipeline in Rubix ML?",
  "id": "q34-how-do-you-build-a-text-classification-pipeline-in-rubix-ml",
  "level": 3
}, {
  "value": "Q35: What are word embeddings and why are they better than bag-of-words?",
  "id": "q35-what-are-word-embeddings-and-why-are-they-better-than-bag-of-words",
  "level": 3
}, {
  "value": "Q36: How do you perform sentiment analysis in a Laravel application?",
  "id": "q36-how-do-you-perform-sentiment-analysis-in-a-laravel-application",
  "level": 3
}, {
  "value": "Q37: How do you clean and normalize text before feeding it to a model?",
  "id": "q37-how-do-you-clean-and-normalize-text-before-feeding-it-to-a-model",
  "level": 3
}, {
  "value": "Q38: How do you handle multilingual text in ML pipelines?",
  "id": "q38-how-do-you-handle-multilingual-text-in-ml-pipelines",
  "level": 3
}, {
  "value": "Q39: What is n-gram representation and when would you use it?",
  "id": "q39-what-is-n-gram-representation-and-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q40: How do you extract keywords from text in PHP?",
  "id": "q40-how-do-you-extract-keywords-from-text-in-php",
  "level": 3
}, {
  "value": "Q41: How do you handle out-of-vocabulary words at prediction time?",
  "id": "q41-how-do-you-handle-out-of-vocabulary-words-at-prediction-time",
  "level": 3
}, {
  "value": "Feature Engineering &amp; Data Pipelines",
  "id": "feature-engineering--data-pipelines",
  "level": 2
}, {
  "value": "Q42: What is feature engineering and why is it important?",
  "id": "q42-what-is-feature-engineering-and-why-is-it-important",
  "level": 3
}, {
  "value": "Q43: How do you handle missing data in a dataset?",
  "id": "q43-how-do-you-handle-missing-data-in-a-dataset",
  "level": 3
}, {
  "value": "Q44: What is feature scaling and what methods exist?",
  "id": "q44-what-is-feature-scaling-and-what-methods-exist",
  "level": 3
}, {
  "value": "Q45: How do you select the most important features?",
  "id": "q45-how-do-you-select-the-most-important-features",
  "level": 3
}, {
  "value": "Q46: What is a feature store and how would you implement one in Laravel?",
  "id": "q46-what-is-a-feature-store-and-how-would-you-implement-one-in-laravel",
  "level": 3
}, {
  "value": "Q47: How do you build a batch feature pipeline with Laravel queues?",
  "id": "q47-how-do-you-build-a-batch-feature-pipeline-with-laravel-queues",
  "level": 3
}, {
  "value": "Q48: What is data leakage and how do you prevent it?",
  "id": "q48-what-is-data-leakage-and-how-do-you-prevent-it",
  "level": 3
}, {
  "value": "Q49: How do you create time-series features?",
  "id": "q49-how-do-you-create-time-series-features",
  "level": 3
}, {
  "value": "Q50: What is one-hot encoding and what are its alternatives?",
  "id": "q50-what-is-one-hot-encoding-and-what-are-its-alternatives",
  "level": 3
}, {
  "value": "Q51: How do you detect and handle outliers?",
  "id": "q51-how-do-you-detect-and-handle-outliers",
  "level": 3
}, {
  "value": "Q52: How do you build a feature pipeline that runs in production?",
  "id": "q52-how-do-you-build-a-feature-pipeline-that-runs-in-production",
  "level": 3
}, {
  "value": "Laravel AI SDK Integration",
  "id": "laravel-ai-sdk-integration",
  "level": 2
}, {
  "value": "Q53: How do you set up the Laravel AI SDK to call an LLM?",
  "id": "q53-how-do-you-set-up-the-laravel-ai-sdk-to-call-an-llm",
  "level": 3
}, {
  "value": "Q54: What are AI agents in the Laravel AI SDK and how do you define one?",
  "id": "q54-what-are-ai-agents-in-the-laravel-ai-sdk-and-how-do-you-define-one",
  "level": 3
}, {
  "value": "Q55: How do you define custom tools for an AI agent?",
  "id": "q55-how-do-you-define-custom-tools-for-an-ai-agent",
  "level": 3
}, {
  "value": "Q56: How do you get structured output (JSON) from an LLM in Laravel AI SDK?",
  "id": "q56-how-do-you-get-structured-output-json-from-an-llm-in-laravel-ai-sdk",
  "level": 3
}, {
  "value": "Q57: How do you stream an LLM response in Laravel?",
  "id": "q57-how-do-you-stream-an-llm-response-in-laravel",
  "level": 3
}, {
  "value": "Q58: How do you combine ML predictions with LLM reasoning in a single agent tool?",
  "id": "q58-how-do-you-combine-ml-predictions-with-llm-reasoning-in-a-single-agent-tool",
  "level": 3
}, {
  "value": "Q59: How do you implement a RAG (Retrieval-Augmented Generation) pipeline in Laravel?",
  "id": "q59-how-do-you-implement-a-rag-retrieval-augmented-generation-pipeline-in-laravel",
  "level": 3
}, {
  "value": "Q60: How do you handle rate limiting and retries with the AI SDK?",
  "id": "q60-how-do-you-handle-rate-limiting-and-retries-with-the-ai-sdk",
  "level": 3
}, {
  "value": "Q61: How do you test an AI agent in Laravel?",
  "id": "q61-how-do-you-test-an-ai-agent-in-laravel",
  "level": 3
}, {
  "value": "Q62: How do you provide conversation history to maintain context in AI calls?",
  "id": "q62-how-do-you-provide-conversation-history-to-maintain-context-in-ai-calls",
  "level": 3
}, {
  "value": "Q63: How do you use system prompts effectively for domain-specific tasks?",
  "id": "q63-how-do-you-use-system-prompts-effectively-for-domain-specific-tasks",
  "level": 3
}, {
  "value": "Q64: How do you chain multiple AI calls where one depends on another?",
  "id": "q64-how-do-you-chain-multiple-ai-calls-where-one-depends-on-another",
  "level": 3
}, {
  "value": "Q65: How do you consume streaming AI responses in a Livewire component?",
  "id": "q65-how-do-you-consume-streaming-ai-responses-in-a-livewire-component",
  "level": 3
}, {
  "value": "Q66: How do you build a tool that calls a Rubix ML model from an agent?",
  "id": "q66-how-do-you-build-a-tool-that-calls-a-rubix-ml-model-from-an-agent",
  "level": 3
}, {
  "value": "Q67: How do you handle AI provider fallback in Laravel AI SDK?",
  "id": "q67-how-do-you-handle-ai-provider-fallback-in-laravel-ai-sdk",
  "level": 3
}, {
  "value": "Q68: How do you incorporate vector similarity search into an AI agent tool?",
  "id": "q68-how-do-you-incorporate-vector-similarity-search-into-an-ai-agent-tool",
  "level": 3
}, {
  "value": "MLOps &amp; Production",
  "id": "mlops--production",
  "level": 2
}, {
  "value": "Q69: How do you deploy an ML model in a Laravel application?",
  "id": "q69-how-do-you-deploy-an-ml-model-in-a-laravel-application",
  "level": 3
}, {
  "value": "Q70: How do you monitor model performance in production?",
  "id": "q70-how-do-you-monitor-model-performance-in-production",
  "level": 3
}, {
  "value": "Q71: What is model drift and how do you detect it?",
  "id": "q71-what-is-model-drift-and-how-do-you-detect-it",
  "level": 3
}, {
  "value": "Q72: How do you implement A/B testing for ML models in Laravel?",
  "id": "q72-how-do-you-implement-ab-testing-for-ml-models-in-laravel",
  "level": 3
}, {
  "value": "Q73: How do you version ML models and manage a model registry?",
  "id": "q73-how-do-you-version-ml-models-and-manage-a-model-registry",
  "level": 3
}, {
  "value": "Q74: How do you schedule model retraining in Laravel?",
  "id": "q74-how-do-you-schedule-model-retraining-in-laravel",
  "level": 3
}, {
  "value": "Q75: How do you implement a rollback strategy for a bad model?",
  "id": "q75-how-do-you-implement-a-rollback-strategy-for-a-bad-model",
  "level": 3
}, {
  "value": "Q76: How do you optimize ML inference latency in Laravel?",
  "id": "q76-how-do-you-optimize-ml-inference-latency-in-laravel",
  "level": 3
}, {
  "value": "Q77: How do you implement canary deployments for ML models?",
  "id": "q77-how-do-you-implement-canary-deployments-for-ml-models",
  "level": 3
}, {
  "value": "Q78: How do you trace ML predictions for debugging?",
  "id": "q78-how-do-you-trace-ml-predictions-for-debugging",
  "level": 3
}, {
  "value": "System Design with AI/ML",
  "id": "system-design-with-aiml",
  "level": 2
}, {
  "value": "Q79: Design a recommendation system in Laravel.",
  "id": "q79-design-a-recommendation-system-in-laravel",
  "level": 3
}, {
  "value": "Q80: Design a real-time fraud detection pipeline in Laravel.",
  "id": "q80-design-a-real-time-fraud-detection-pipeline-in-laravel",
  "level": 3
}, {
  "value": "Q81: Design a RAG (Retrieval-Augmented Generation) architecture for a customer support system.",
  "id": "q81-design-a-rag-retrieval-augmented-generation-architecture-for-a-customer-support-system",
  "level": 3
}, {
  "value": "Q82: Design a system that scales ML predictions for millions of requests per day.",
  "id": "q82-design-a-system-that-scales-ml-predictions-for-millions-of-requests-per-day",
  "level": 3
}, {
  "value": "Q83: Design a pipeline for real-time content moderation with AI.",
  "id": "q83-design-a-pipeline-for-real-time-content-moderation-with-ai",
  "level": 3
}, {
  "value": "Q84: Design a product categorization system using ML.",
  "id": "q84-design-a-product-categorization-system-using-ml",
  "level": 3
}, {
  "value": "Q85: Design a lead scoring system that combines ML and business rules.",
  "id": "q85-design-a-lead-scoring-system-that-combines-ml-and-business-rules",
  "level": 3
}, {
  "value": "Q86: Design a multi-model ensemble system in Laravel.",
  "id": "q86-design-a-multi-model-ensemble-system-in-laravel",
  "level": 3
}, {
  "value": "Q87: How do you handle concurrent model updates without downtime?",
  "id": "q87-how-do-you-handle-concurrent-model-updates-without-downtime",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "chapter-54-aiml-interview-qa",
        children: "Chapter 54: AI/ML Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/53-interview-javascript",
          children: "JavaScript Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers AI and machine learning interview questions for Laravel developers → from fundamental ML theory to production deployment with Laravel AI SDK. Each answer includes practical PHP code examples drawn from PHP-ML, Rubix ML, and the Laravel AI ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI/ML interview questions covering ML fundamentals, PHP-ML, Rubix ML, Laravel AI SDK, MLOps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML types, overfitting/underfitting, model evaluation, feature engineering, NLP, neural networks, deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q&A format with practical PHP and Laravel AI SDK examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP, Laravel, ML fundamentals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts]\n    B[Interview Questions]\n    C[Code Examples]\n    D[Best Practices]\n    E[Common Pitfalls]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "machine-learning-fundamentals",
      children: "Machine Learning Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/54-interview-ai-ml.png",
        alt: "AI/ML Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-supervised-unsupervised-and-reinforcement-learning",
      children: "Q1: What is the difference between supervised, unsupervised, and reinforcement learning?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Supervised learning uses labeled data (input-output pairs) to learn a mapping function. Unsupervised learning finds hidden patterns in unlabeled data. Reinforcement learning learns through trial-and-error interaction with an environment, maximizing cumulative reward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Supervised → labeled data\n$samples = [[1400, 3], [1800, 4], [950, 2]];\n$labels  = [320000, 410000, 210000]; // known answers\n\n// Unsupervised → no labels\n$customers = [[500, 3], [50, 10], [600, 2]]; // [spend, frequency]\n// Clustering discovers segments without knowing what they are\n\n// Reinforcement → reward signal\n// Agent selects action → environment returns reward + next state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-overfitting-and-underfitting-how-do-you-detect-and-fix-them",
      children: "Q2: Explain overfitting and underfitting. How do you detect and fix them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Overfitting occurs when a model memorizes training data noise instead of learning the underlying pattern → high training accuracy, poor generalization. Underfitting happens when the model is too simple to capture the pattern → poor performance on both training and test sets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection:"
      }), " Compare training vs. validation metrics. A large gap (e.g., 98% train, 72% val) signals overfitting. Both low signals underfitting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes → overfitting:"
      }), " reduce model complexity, add regularization (L1/L2), increase training data, use dropout, early stopping. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes → underfitting:"
      }), " increase model complexity, add features, reduce regularization, train longer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Classifiers\\ClassificationTree;\nuse Rubix\\ML\\Regressors\\Ridge;\nuse Rubix\\ML\\CrossValidation\\Metrics\\Accuracy;\n\n// Overfit-prone: deep tree with no pruning\n$overfit = new ClassificationTree(100); // max depth = 100\n\n// Regularized: Ridge regression with L2 penalty\n$ridge = new Ridge(1.0); // alpha controls regularization strength\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-bias-variance-tradeoff",
      children: "Q3: What is the bias-variance tradeoff?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Bias is the error from incorrect assumptions in the learning algorithm (underfitting). Variance is the error from sensitivity to small fluctuations in the training set (overfitting). The tradeoff: increasing bias reduces variance and vice versa. The goal is to find the sweet spot where total error is minimized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Total Error = Bias² + Variance + Irreducible Error\n\nHigh Bias → underfit, simple model (linear regression on non-linear data)\nHigh Variance → overfit, complex model (deep tree on small data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-walk-through-the-main-evaluation-metrics-for-classification",
      children: "Q4: Walk through the main evaluation metrics for classification."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy"
      }), " = (TP+TN)/(TP+TN+FP+FN) → intuitive but misleading on imbalanced data. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Precision"
      }), " = TP/(TP+FP) → of predicted positives, how many are correct. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recall"
      }), " = TP/(TP+FN) → of actual positives, how many were found. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "F1-Score"
      }), " = 2 * (Precision * Recall) / (Precision + Recall) → harmonic mean, good for imbalanced sets. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AUC-ROC"
      }), " measures separability across thresholds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\CrossValidation\\Metrics\\Accuracy;\nuse Rubix\\ML\\CrossValidation\\Metrics\\F1Score;\nuse Rubix\\ML\\CrossValidation\\Metrics\\Informedness;\n\n$metric = new F1Score();\n$score = $metric->score($predictions, $labels); // 0.0 to 1.0\n\n// Confusion matrix manually\n$matrix = [\n    [50, 5],   // TP: 50, FP: 5\n    [3, 42],   // FN: 3, TN: 42\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-regression-evaluation-metrics",
      children: "Q5: Explain regression evaluation metrics."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MSE"
      }), " (Mean Squared Error) penalizes large errors more heavily. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RMSE"
      }), " (Root MSE) is in the same units as the target. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAE"
      }), " (Mean Absolute Error) is less sensitive to outliers. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "R²"
      }), " (coefficient of determination) measures variance explained → 1.0 is perfect, 0.0 means no better than mean prediction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\CrossValidation\\Metrics\\RMSE;\nuse Rubix\\ML\\CrossValidation\\Metrics\\MAE;\nuse Rubix\\ML\\CrossValidation\\Metrics\\R2;\n\n$predictions = [320000, 410000, 210000];\n$actuals     = [315000, 405000, 220000];\n\n$rmse = (new RMSE())->score($predictions, $actuals);\n$r2   = (new R2())->score($predictions, $actuals);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-cross-validation-and-why-use-it",
      children: "Q6: What is cross-validation and why use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Cross-validation splits data into multiple folds, trains on k-1 folds, and validates on the held-out fold → repeating k times. It gives a more reliable estimate of model performance than a single train-test split, especially on small datasets. k-fold (typically k=5 or 10) is the most common variant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\CrossValidation\\KFold;\nuse Rubix\\ML\\CrossValidation\\Metrics\\Accuracy;\n\n$validator = new KFold(5);\n$score = $validator->test($estimator, $dataset, new Accuracy());\n// Returns mean accuracy across all 5 folds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-difference-between-l1-and-l2-regularization",
      children: "Q7: What is the difference between L1 and L2 regularization?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " L1 (Lasso) adds the absolute value of coefficients to the loss function, driving some weights to exactly zero → useful for feature selection. L2 (Ridge) adds the squared magnitude, shrinking weights proportionally but never to zero. Elastic Net combines both."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Regressors\\Ridge;       // L2\nuse Rubix\\ML\\Regressors\\Lasso;       // L1\n\n$l2 = new Ridge(1.0);\n$l1 = new Lasso(0.5);\n\n// L1 pushes irrelevant feature coefficients to 0\n// L2 distributes weight reduction across all features\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-the-roc-curve-and-auc",
      children: "Q8: Explain the ROC curve and AUC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ROC curve plots True Positive Rate (Recall) against False Positive Rate at various classification thresholds. AUC (Area Under the Curve) quantifies the model's ability to distinguish classes. AUC = 1.0 is perfect; AUC = 0.5 is random guessing. ROC is useful for comparing models and selecting optimal thresholds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-curse-of-dimensionality",
      children: "Q9: What is the curse of dimensionality?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " As feature dimensions increase, data becomes sparse → distances between points grow, making clustering and nearest-neighbor methods unreliable. Volume grows exponentially; you need exponentially more samples to maintain statistical significance. Solutions: feature selection, dimensionality reduction (PCA), or embedding techniques."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\PCA;\nuse Rubix\\ML\\Transformers\\TSNE;\n\n// Reduce 100 features to 20\n$pca = new PCA(20);\n$dataset->apply($pca);\n\n// t-SNE for visualization (2D/3D)\n$tsne = new TSNE(2);\n$embedded = $tsne->fitTransform($dataset);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-compare-parametric-vs-non-parametric-models",
      children: "Q10: Compare parametric vs. non-parametric models."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Parametric models assume a fixed functional form (e.g., linear regression assumes linear relationship) and have a fixed number of parameters regardless of data size → fast to train but limited flexibility. Non-parametric models (k-NN, decision trees, SVMs) make no strong assumptions about data distribution → more flexible but computationally heavier at scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-gradient-descent-explain-batch-stochastic-and-mini-batch-variants",
      children: "Q11: What is gradient descent? Explain batch, stochastic, and mini-batch variants."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Gradient descent iteratively adjusts model parameters to minimize the loss function by moving in the direction of the negative gradient. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Batch GD"
      }), " uses the entire dataset per step → accurate but slow. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stochastic GD"
      }), " (SGD) uses one sample per step → fast but noisy convergence. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mini-batch GD"
      }), " uses a subset (e.g., 32–256 samples) → best of both worlds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\NeuralNet\\Optimizers\\Adam;\nuse Rubix\\ML\\NeuralNet\\Optimizers\\Stochastic;\n\n// Adam (adaptive moment estimation) is the default in most neural nets\n$optimizer = new Adam(0.001); // learning rate\n\n// SGD with momentum\n$sgd = new Stochastic(0.01, 0.9); // lr, momentum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-explain-the-confusion-matrix-components",
      children: "Q12: Explain the confusion matrix components."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Four quadrants: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "True Positives"
      }), " (correctly predicted positive), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "True Negatives"
      }), " (correctly predicted negative), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "False Positives"
      }), " (Type I error → predicted positive, actually negative), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "False Negatives"
      }), " (Type II error → predicted negative, actually positive). In medical testing: FP causes unnecessary worry; FN misses a disease."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                Actual Positive    Actual Negative\nPredicted Pos      TP                    FP\nPredicted Neg      FN                    TN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-what-is-the-difference-between-bagging-and-boosting",
      children: "Q13: What is the difference between bagging and boosting?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Bagging (Random Forest) trains multiple models in parallel on bootstrapped subsets of data, averaging predictions to reduce variance. Boosting (XGBoost, AdaBoost) trains models sequentially, each focusing on the errors of the previous one, reducing bias. Bagging is great for high-variance models; boosting for high-bias."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Classifiers\\RandomForest;\nuse Rubix\\ML\\Classifiers\\ClassificationTree;\nuse Rubix\\ML\\Classifiers\\AdaBoost;\n\n// Bagging\n$forest = new RandomForest(new ClassificationTree(10), 100);\n\n// Boosting\n$adaboost = new AdaBoost(new ClassificationTree(3), 50);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-what-is-the-difference-between-generative-and-discriminative-models",
      children: "Q14: What is the difference between generative and discriminative models?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Generative models learn the joint probability distribution P(X, Y) and can generate new data points → they model how data is produced (Naive Bayes, GANs, VAEs). Discriminative models learn the decision boundary P(Y|X) → they focus on separating classes (logistic regression, SVMs, neural networks). Generative models are more powerful for data synthesis; discriminative models often perform better at classification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-explain-the-concept-of-entropy-and-information-gain-in-decision-trees",
      children: "Q15: Explain the concept of entropy and information gain in decision trees."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Entropy measures impurity or uncertainty in a dataset. Information gain measures how much a feature reduces entropy. Decision trees split on the feature with the highest information gain at each node."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Entropy = -Σ p(i) * log₂(p(i))\n// For a 50/50 split: -(0.5*log₂(0.5) + 0.5*log₂(0.5)) = 1.0\n// A pure node (all one class) has entropy = 0\n\nuse Rubix\\ML\\Classifiers\\ClassificationTree;\n// Default split criterion uses Gini impurity (similar to entropy)\n$tree = new ClassificationTree(10, 10, 3.0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-do-you-handle-imbalanced-datasets",
      children: "Q16: How do you handle imbalanced datasets?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Techniques include: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resampling"
      }), " (oversample minority with SMOTE, undersample majority), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "class weights"
      }), " (penalize mistakes on minority class more), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "anomaly detection"
      }), " approach (treat minority as anomaly), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different metrics"
      }), " (F1, precision-recall, AUC instead of accuracy), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ensemble methods"
      }), " (balanced random forest)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\SMOTESampler;\n\n// Generate synthetic minority samples\n$sampler = new SMOTESampler(2.0); // balance ratio\n$dataset->apply($sampler);\n\n// Or use class weights in a classifier\n$classifier = new Rubix\\ML\\Classifiers\\LogisticRegression(alpha: 0.5);\n// Combine with SMOTE for best results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "classical-ml-in-php",
      children: "Classical ML in PHP"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-what-libraries-are-available-for-machine-learning-in-php",
      children: "Q17: What libraries are available for machine learning in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The two main libraries: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PHP-ML"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "php-ai/php-ml"
      }), ") → lightweight, covers classification, regression, clustering, association, and preprocessing. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rubix ML"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rubix/ml"
      }), ") → more comprehensive, with pipelines, neural networks, cross-validation, transformers, and GPU support. For specialized tasks, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tensorflow/php"
      }), " provides bindings, but most Laravel projects use Rubix ML or PHP-ML."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require rubix/ml\ncomposer require php-ai/php-ml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-train-a-linear-regression-model-with-rubix-ml",
      children: "Q18: How do you train a linear regression model with Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Create a dataset from your samples and labels, instantiate the regressor, and call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "train()"
      }), ". The dataset must be a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Labeled"
      }), " object combining samples (2D array) and labels (1D array)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Regressors\\Ridge;\nuse Rubix\\ML\\Datasets\\Labeled;\n\n// Hours studied, prior GPA → exam score\n$samples = [[40, 3.2], [25, 2.8], [55, 3.9], [30, 3.0]];\n$labels  = [85, 72, 94, 78];\n\n$dataset = Labeled::build($samples, $labels);\n$model = new Ridge(1.0);\n$model->train($dataset);\n\n// Predict new student\n$prediction = $model->predict([[45, 3.5]]);\n// Returns [87.3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-do-you-classify-data-with-logistic-regression-using-php-ml",
      children: "Q19: How do you classify data with logistic regression using PHP-ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP-ML provides a straightforward API with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "train()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "predict()"
      }), ". Load your samples and labels, train the classifier, and predict."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Phpml\\Classification\\LogisticRegression;\n\n$samples = [\n    [0, 0], [1, 1], [2, 0], [1, 0],\n    [10, 10], [11, 9], [12, 11], [9, 10]\n];\n$labels = ['fail', 'fail', 'fail', 'fail', 'pass', 'pass', 'pass', 'pass'];\n\n$classifier = new LogisticRegression();\n$classifier->train($samples, $labels);\n\n$result = $classifier->predict([[3, 2]]); // 'fail'\n$result = $classifier->predict([[8, 9]]); // 'pass'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-explain-rubix-ml-pipelines-and-why-they-matter",
      children: "Q20: Explain Rubix ML pipelines and why they matter."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A pipeline chains preprocessing transformers with an estimator, ensuring transformations are fitted on training data and consistently applied during inference. This prevents data leakage and simplifies deployment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Pipeline;\nuse Rubix\\ML\\Regressors\\Ridge;\nuse Rubix\\ML\\Transformers\\NumericStringConverter;\nuse Rubix\\ML\\Transformers\\MinMaxNormalizer;\nuse Rubix\\ML\\Transformers\\MissingDataImputer;\n\n$pipeline = new Pipeline([\n    new NumericStringConverter(),\n    new MissingDataImputer(),\n    new MinMaxNormalizer(-1.0, 1.0),\n], new Ridge(1.0));\n\n$pipeline->train($dataset);\n$predictions = $pipeline->predict($newData);\n// All transformations applied automatically in both phases\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-how-do-you-perform-k-means-clustering-with-php-ml",
      children: "Q21: How do you perform k-means clustering with PHP-ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " K-means partitions data into k clusters where each point belongs to the cluster with the nearest centroid. PHP-ML's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KMeans"
      }), " implements the algorithm directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Phpml\\Clustering\\KMeans;\n\n$samples = [\n    [1, 2], [2, 1], [1, 1],   // Cluster A\n    [10, 12], [11, 11], [12, 10], // Cluster B\n    [50, 52], [51, 51], [52, 50], // Cluster C\n];\n\n$kmeans = new KMeans(3); // 3 clusters\n$clusters = $kmeans->cluster($samples);\n\n// Returns [[1,2],[2,1],[1,1]], [[10,12],[11,11],[12,10]], [[50,52],[51,51],[52,50]]\n// Each inner array is one cluster's members\n$revenueCluster = $clusters[0]; // may reorder → check centroids\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-how-do-you-persist-and-load-a-trained-model-in-rubix-ml",
      children: "Q22: How do you persist and load a trained model in Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Rubix ML models implement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Persistable"
      }), " interface. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistentModel"
      }), " decorator with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Persister"
      }), " (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Filesystem"
      }), ") to save and restore."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\PersistentModel;\nuse Rubix\\ML\\Persisters\\Filesystem;\nuse Rubix\\ML\\Regressors\\Ridge;\n\n// Train and save\n$model = new PersistentModel(new Ridge(1.0), new Filesystem('models/exam.model'));\n$model->train($dataset);\n$model->save();\n\n// Later → load and predict\n$loaded = PersistentModel::load(new Filesystem('models/exam.model'));\n$score = $loaded->predict([[45, 3.5]]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-how-do-you-build-a-decision-tree-classifier-with-rubix-ml",
      children: "Q23: How do you build a decision tree classifier with Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Decision trees split data by asking questions about features. Rubix ML's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassificationTree"
      }), " uses Gini impurity for splits. Parameters control max depth, min samples per leaf, and max features considered."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Classifiers\\ClassificationTree;\nuse Rubix\\ML\\Datasets\\Labeled;\n\n$samples = [\n    [0, 50], [0, 200], [1, 30], [1, 300],\n    [0, 75], [1, 150], [0, 500], [1, 10],\n];\n$labels = ['ham', 'suspicious', 'ham', 'suspicious',\n           'ham', 'suspicious', 'suspicious', 'ham'];\n\n$dataset = Labeled::build($samples, $labels);\n$tree = new ClassificationTree(5, 3); // max_depth=5, min_leaf=3\n$tree->train($dataset);\n\n$result = $tree->predict([[1, 80]]); // suspicious\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-do-you-implement-k-nearest-neighbors-in-php",
      children: "Q24: How do you implement k-nearest neighbors in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " k-NN classifies a point by looking at the k closest labeled examples and taking a majority vote. Both PHP-ML and Rubix ML support it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Phpml\\Classification\\KNearestNeighbors;\n\n$samples = [[1, 1], [2, 1], [10, 10], [11, 9]];\n$labels  = ['A', 'A', 'B', 'B'];\n\n$knn = new KNearestNeighbors(3); // k = 3 neighbors\n$knn->train($samples, $labels);\n\necho $knn->predict([[3, 2]]);  // 'A' (nearest 3: A, A, B → majority A)\necho $knn->predict([[9, 11]]); // 'B'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-how-do-you-evaluate-a-model-on-a-test-set-in-rubix-ml",
      children: "Q25: How do you evaluate a model on a test set in Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Split the dataset into training and testing portions, train on the former, then use a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Metric"
      }), " to compare predictions against the held-out labels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Datasets\\Labeled;\nuse Rubix\\ML\\Regressors\\Ridge;\nuse Rubix\\ML\\CrossValidation\\Metrics\\RMSE;\n\n// 80/20 split\n$dataset = Labeled::build($samples, $labels);\n[$train, $test] = $dataset->split(0.8);\n\n$model = new Ridge(1.0);\n$model->train($train);\n\n$predictions = $model->predict($test);\n$rmse = (new RMSE())->score($predictions, $test->labels());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q26-what-is-the-difference-between-labeled-and-unlabeled-datasets-in-rubix-ml",
      children: ["Q26: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Labeled"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Unlabeled"
      }), " datasets in Rubix ML?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Labeled"
      }), " datasets have both samples and target values → used for supervised learning (training and testing). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Unlabeled"
      }), " datasets have only samples → used for predictions and clustering. Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Labeled"
      }), " for training and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Unlabeled"
      }), " when making predictions on production data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Datasets\\Labeled;\nuse Rubix\\ML\\Datasets\\Unlabeled;\n\n// Training → needs labels\n$labeled = Labeled::build([[1,2], [3,4]], [10, 20]);\n$model->train($labeled);\n\n// Production → no labels needed\n$new = new Unlabeled([[5, 6], [7, 8]]);\n$predictions = $model->predict($new);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-how-do-you-handle-categorical-features-in-rubix-ml",
      children: "Q27: How do you handle categorical features in Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Rubix ML requires numeric features. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NumericStringConverter"
      }), " to encode strings as integers, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OneHotEncoder"
      }), " for categorical variables with no ordinal relationship. Always fit these transformers on the training set only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\OneHotEncoder;\nuse Rubix\\ML\\Transformers\\NumericStringConverter;\nuse Rubix\\ML\\Pipeline;\n\n$pipeline = new Pipeline([\n    new NumericStringConverter(),\n    new OneHotEncoder(),\n], new Ridge(1.0));\n\n// Before: ['color' => 'red', 'size' => 'M']\n// After: [0.0, 0.0, 1.0, 0.0, 1.0, 0.0] (one-hot: red, green, blue, S, M, L)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-how-do-you-implement-neural-network-classification-in-rubix-ml",
      children: "Q28: How do you implement neural network classification in Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultilayerPerceptron"
      }), " classifier builds feedforward networks. Define the hidden layers with activations and the optimizer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Classifiers\\MultilayerPerceptron;\nuse Rubix\\ML\\NeuralNet\\Layers\\Dense;\nuse Rubix\\ML\\NeuralNet\\Layers\\Activation;\nuse Rubix\\ML\\NeuralNet\\ActivationFunctions\\ReLU;\nuse Rubix\\ML\\NeuralNet\\ActivationFunctions\\Softmax;\n\n$mlp = new MultilayerPerceptron([\n    new Dense(128),\n    new Activation(new ReLU()),\n    new Dense(64),\n    new Activation(new ReLU()),\n], [\n    new Dense(3), // 3 output classes\n    new Activation(new Softmax()),\n]);\n\n$mlp->train($dataset);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-how-do-you-handle-anomaly-detection-with-rubix-ml",
      children: "Q29: How do you handle anomaly detection with Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Rubix ML provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Isolation Forest"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LOF"
      }), " (Local Outlier Factor), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OneClassSVM"
      }), " for anomaly detection. These are unsupervised → they learn what \"normal\" looks like and flag deviations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\AnomalyDetectors\\IsolationForest;\nuse Rubix\\ML\\Datasets\\Unlabeled;\n\n$detector = new IsolationForest(100, 0.3); // trees, contamination ratio\n$detector->train($dataset); // dataset of normal behavior\n\n// Returns 1 for anomaly, 0 for normal\n$outliers = $detector->predict($transactions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-how-do-you-use-rubix-ml-from-an-artisan-command-for-batch-predictions",
      children: "Q30: How do you use Rubix ML from an Artisan command for batch predictions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Wrap the ML workflow in an Artisan command for scheduled or batch processing. Read from CSV, predict, and persist results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// php artisan ml:predict-daily\nnamespace App\\Console\\Commands;\n\nuse Rubix\\ML\\PersistentModel;\nuse Rubix\\ML\\Persisters\\Filesystem;\nuse Rubix\\ML\\Datasets\\Unlabeled;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass PredictDaily extends Command\n{\n    protected $signature = 'ml:predict-daily';\n    protected $description = 'Run daily batch predictions';\n\n    public function handle(): int\n    {\n        $rows = DB::table('daily_metrics')->whereNull('score')->get();\n\n        $samples = $rows->map(fn($r) => [$r->metric_a, $r->metric_b])->toArray();\n        $dataset = new Unlabeled($samples);\n\n        $model = PersistentModel::load(new Filesystem('models/daily.model'));\n        $predictions = $model->predict($dataset);\n\n        foreach ($rows as $i => $row) {\n            DB::table('daily_metrics')\n                ->where('id', $row->id)\n                ->update(['score' => $predictions[$i]]);\n        }\n\n        $this->info(\"Predicted {$rows->count()} records\");\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-compare-php-ml-vs-rubix-ml--when-to-use-which",
      children: "Q31: Compare PHP-ML vs Rubix ML → when to use which?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP-ML is simpler (no pipeline concept, no neural networks) and suitable for basic classification/regression. Rubix ML offers pipelines, neural networks, cross-validation, anomaly detection, transformers, and GPU support. Choose PHP-ML for lightweight tasks; Rubix ML for production-grade ML in Laravel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Feature              | PHP-ML     | Rubix ML          |\n|----------------------|------------|-------------------|\n| Learning curve       | Low        | Medium            |\n| Pipelines            | No         | Yes               |\n| Neural networks      | No         | Yes               |\n| Cross-validation     | No         | Yes               |\n| Model persistence    | Manual     | PersistentModel   |\n| GPU support          | No         | Via TensorFlow    |\n| Active development   | Slower     | Active            |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nlp--text-processing",
      children: "NLP & Text Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-what-is-tokenization-and-how-do-you-implement-it-in-php",
      children: "Q32: What is tokenization and how do you implement it in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Tokenization splits text into tokens (words, subwords, or characters). For Asian languages or complex cases, use a dedicated NLP library. In PHP, start with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "str_word_count"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "explode"
      }), ", but for production use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "splitting"
      }), " via a tokenizer class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Basic tokenization\n$text = \"The quick brown fox jumps over the lazy dog.\";\n$tokens = str_word_count(strtolower($text), 1);\n// ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']\n\n// Remove stop words\n$stopWords = ['the', 'a', 'an', 'is', 'over'];\n$filtered = array_diff($tokens, $stopWords);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-explain-tf-idf-vectorization-and-how-to-use-it-in-rubix-ml",
      children: "Q33: Explain TF-IDF vectorization and how to use it in Rubix ML."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " TF-IDF weighs terms by their frequency in a document (TF) and inversely by their frequency across all documents (IDF). Common words like \"the\" get low weight; rare, meaningful terms get high weight. Rubix ML's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TfIdfTransformer"
      }), " computes this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\TfIdfTransformer;\nuse Rubix\\ML\\Transformers\\WordCountVectorizer;\n\n$pipeline = new Pipeline([\n    new WordCountVectorizer(500), // vocabulary size\n    new TfIdfTransformer(),       // weight by importance\n], $classifier);\n\n// Before TF-IDF: \"the\" appears 10 times in doc1\n// After TF-IDF:  \"the\" weight ≈ 0.01 (appears in all docs)\n//                \"quantum\" weight ≈ 0.85 (rare word, highly relevant)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q34-how-do-you-build-a-text-classification-pipeline-in-rubix-ml",
      children: "Q34: How do you build a text classification pipeline in Rubix ML?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Convert raw text to numeric vectors, then train a classifier. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WordCountVectorizer"
      }), " to create a bag-of-words, then apply TF-IDF."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Pipeline;\nuse Rubix\\ML\\Classifiers\\NaiveBayes;\nuse Rubix\\ML\\Transformers\\WordCountVectorizer;\nuse Rubix\\ML\\Transformers\\TfIdfTransformer;\nuse Rubix\\ML\\Datasets\\Labeled;\n\n$emails = [\n    'Win a free iPhone now!!!', 'Meeting at 3pm tomorrow',\n    'You won a lottery claim your prize', 'Lunch on Friday?',\n];\n$labels = ['spam', 'ham', 'spam', 'ham'];\n\n$samples = array_map(fn($e) => [$e], $emails);\n$dataset = Labeled::build($samples, $labels);\n\n$pipeline = new Pipeline([\n    new WordCountVectorizer(2000),\n    new TfIdfTransformer(),\n], new NaiveBayes());\n\n$pipeline->train($dataset);\n$result = $pipeline->predict([['Free money!!!']]); // 'spam'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-what-are-word-embeddings-and-why-are-they-better-than-bag-of-words",
      children: "Q35: What are word embeddings and why are they better than bag-of-words?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Embeddings map words to dense vectors (e.g., 300 dimensions) where similar words have similar vectors. Unlike bag-of-words (sparse, loses semantics), embeddings capture analogy: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "king - man + woman ≈ queen"
      }), ". BoW is simple but loses context and order; embeddings capture semantic relationships. In Laravel, use external services (OpenAI, HuggingFace) for embeddings since PHP lacks native embedding models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Http;\n\n// Get embeddings via API\n$response = Http::withToken(config('services.openai.key'))\n    ->post('https://api.openai.com/v1/embeddings', [\n        'model' => 'text-embedding-3-small',\n        'input' => 'The quick brown fox',\n    ]);\n\n$embedding = $response->json('data.0.embedding');\n// Array of 1536 floats → dense vector representation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-how-do-you-perform-sentiment-analysis-in-a-laravel-application",
      children: "Q36: How do you perform sentiment analysis in a Laravel application?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Build a text classifier with labeled sentiment data, or use an external API. For production, Rubix ML with a NaiveBayes classifier trained on sentiment-labeled text works well."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Pipeline;\nuse Rubix\\ML\\Classifiers\\NaiveBayes;\nuse Rubix\\ML\\Transformers\\WordCountVectorizer;\nuse Rubix\\ML\\Transformers\\TfIdfTransformer;\n\n// In a Laravel controller\nclass SentimentController extends Controller\n{\n    public function analyze(Request $request): JsonResponse\n    {\n        $validated = $request->validate(['text' => 'required|string']);\n\n        $pipeline = PersistentModel::load(\n            new Filesystem('models/sentiment.model')\n        );\n\n        $score = $pipeline->predict([[mb_strtolower($validated['text'])]]);\n\n        return response()->json([\n            'sentiment' => $score[0],  // 'positive', 'negative', 'neutral'\n            'confidence' => $score[1],\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q37-how-do-you-clean-and-normalize-text-before-feeding-it-to-a-model",
      children: "Q37: How do you clean and normalize text before feeding it to a model?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Text preprocessing pipeline: lowercase, remove URLs/mentions, expand contractions, strip punctuation, remove stop words, stem/lemmatize. Each step improves model performance by reducing noise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class TextPreprocessor\n{\n    public function clean(string $text): string\n    {\n        $text = mb_strtolower($text);\n        $text = preg_replace('/https?:\\/\\/\\S+/', '', $text);\n        $text = preg_replace('/@\\w+/', '', $text);\n        $text = preg_replace('/[^\\w\\s]/', '', $text);\n        $text = preg_replace('/\\s+/', ' ', $text);\n\n        return trim($text);\n    }\n\n    public function tokenize(string $text): array\n    {\n        $tokens = explode(' ', $this->clean($text));\n        return array_diff($tokens, $this->stopWords());\n    }\n\n    private function stopWords(): array\n    {\n        return ['the', 'a', 'an', 'is', 'are', 'was', 'were',\n                'in', 'on', 'at', 'to', 'for', 'of', 'and'];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-how-do-you-handle-multilingual-text-in-ml-pipelines",
      children: "Q38: How do you handle multilingual text in ML pipelines?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " For multilingual support, use language detection (via Google Cloud Translation API or a library like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "patrickschur/language-detection"
      }), "), then route to language-specific models or use multilingual embeddings (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-embedding-3-small"
      }), " which supports 100+ languages)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use LanguageDetector\\LanguageDetector;\n\n$detector = new LanguageDetector();\n$lang = $detector->evaluate('How are you?')->getCode(); // 'en'\n\n// Different models per language\n$models = [\n    'en' => 'models/sentiment-en.model',\n    'es' => 'models/sentiment-es.model',\n    'fr' => 'models/sentiment-fr.model',\n];\n\n$model = PersistentModel::load(new Filesystem($models[$lang]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-what-is-n-gram-representation-and-when-would-you-use-it",
      children: "Q39: What is n-gram representation and when would you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " n-grams are contiguous sequences of n tokens from text. Unigrams (n=1) are individual words. Bigrams (n=2) capture two-word phrases. Trigrams (n=3) capture three-word phrases. n-grams capture phrase-level context that single words miss → \"not bad\" (bigram) has very different sentiment than \"not\" and \"bad\" separately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\WordCountVectorizer;\n\n// Capture unigrams and bigrams\n$vectorizer = new WordCountVectorizer(5000, 1, 2);\n// min_doc_frequency=1, max_ngram_size=2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-how-do-you-extract-keywords-from-text-in-php",
      children: "Q40: How do you extract keywords from text in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use TF-IDF to score terms, then pick the highest-scoring ones. Alternatively, use RAKE (Rapid Automatic Keyword Extraction) or an external NLP API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\WordCountVectorizer;\nuse Rubix\\ML\\Transformers\\TfIdfTransformer;\nuse Rubix\\ML\\Datasets\\Unlabeled;\n\n$documents = [\n    ['PHP machine learning library for classification'],\n    ['Neural networks require large datasets'],\n    ['Keyword extraction using TF-IDF vectorization'],\n];\n\n$dataset = new Unlabeled($documents);\n\n$vectorizer = new WordCountVectorizer(100);\n$tfidf = new TfIdfTransformer();\n\n$dataset->apply($vectorizer);\n$dataset->apply($tfidf);\n\n// Terms with highest TF-IDF scores are keywords\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-how-do-you-handle-out-of-vocabulary-words-at-prediction-time",
      children: "Q41: How do you handle out-of-vocabulary words at prediction time?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " During vectorization, unknown words are ignored by default. Solutions: use subword tokenization (BPE, WordPiece), fall back to character n-grams, or use pre-trained embeddings that include OOV vectors. For Rubix ML, ensure your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WordCountVectorizer"
      }), " max vocabulary is large enough to cover production text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// WordCountVectorizer assigns 0 for unknown words\n// Better: use hashing trick to avoid fixed vocabulary\nuse Phpml\\FeatureExtraction\\TfIdfTransformer as PhpTfIdf;\n\n$vectorizer = new Phpml\\Tokenization\\WhitespaceTokenizer();\n// Hash-based approach handles arbitrary tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-engineering--data-pipelines",
      children: "Feature Engineering & Data Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-what-is-feature-engineering-and-why-is-it-important",
      children: "Q42: What is feature engineering and why is it important?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Feature engineering transforms raw data into features that better represent the underlying problem to a model. It's often the biggest driver of model performance → better features beat better algorithms. Examples: creating price-to-income ratio for loan prediction, extracting day-of-week from timestamps, or generating polynomial features."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class FeatureEngineer\n{\n    public function engineerFeatures(array $row): array\n    {\n        return [\n            $row['price'] / max($row['income'], 1),   // price-to-income\n            (int) date('N', strtotime($row['date'])), // day of week (1-7)\n            (int) date('H', strtotime($row['date'])), // hour of day\n            strlen($row['description']),               // description length\n            str_word_count($row['description']),       // word count\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-how-do-you-handle-missing-data-in-a-dataset",
      children: "Q43: How do you handle missing data in a dataset?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Strategies: remove rows with missing values (if few), impute with mean/median/mode, use model-based imputation (k-NN), or create a \"missing\" indicator column. In Rubix ML, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MissingDataImputer"
      }), " handles this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\MissingDataImputer;\n\n$imputer = new MissingDataImputer('mean'); // mean, median, or mode\n\n// Mean imputation: missing age → average age of dataset\n// Median imputation: better for skewed distributions\n// Separate category: missing → 'Unknown' as explicit category\n\n$dataset->apply($imputer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q44-what-is-feature-scaling-and-what-methods-exist",
      children: "Q44: What is feature scaling and what methods exist?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Feature scaling ensures features have similar ranges, preventing features with larger magnitudes from dominating. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Min-Max Normalization"
      }), " scales to [0,1] or [-1,1]. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standardization (Z-score)"
      }), " centers at mean=0, std=1. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Robust Scaling"
      }), " uses median and IQR → less sensitive to outliers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\MinMaxNormalizer;\nuse Rubix\\ML\\Transformers\\ZScaleStandardizer;\nuse Rubix\\ML\\Transformers\\RobustStandardizer;\n\n// Min-Max: values → [0, 1]\n$normalizer = new MinMaxNormalizer(0.0, 1.0);\n\n// Z-score: (x - mean) / std\n$standardizer = new ZScaleStandardizer();\n\n// Robust: (x - median) / IQR\n$robust = new RobustStandardizer();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-how-do-you-select-the-most-important-features",
      children: "Q45: How do you select the most important features?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Feature selection reduces dimensionality and improves performance. Methods: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filter"
      }), " (correlation, chi-squared, mutual information), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "wrapper"
      }), " (recursive feature elimination), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "embedded"
      }), " (L1 regularization that drives coefficients to zero). Rubix ML provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VarianceThreshold"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SelectKBest"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\VarianceThreshold;\nuse Rubix\\ML\\Transformers\\SelectKBest;\n\n// Remove low-variance features\n$vt = new VarianceThreshold(0.01);\n$dataset->apply($vt);\n\n// Select k best features using ANOVA F-value\n$selector = new SelectKBest(10); // keep top 10\n$dataset->apply($selector);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-what-is-a-feature-store-and-how-would-you-implement-one-in-laravel",
      children: "Q46: What is a feature store and how would you implement one in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A feature store centralizes computed features so they're consistent across training and serving. In Laravel, implement it as a database table or Redis hash keyed by a unique entity identifier. This ensures training and production use identical feature values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration for feature store\nSchema::create('feature_store', function (Blueprint $table) {\n    $table->id();\n    $table->string('entity_type'); // user, order, product\n    $table->unsignedBigInteger('entity_id');\n    $table->json('features');      // {\"spend_30d\": 1500, \"order_count\": 12}\n    $table->timestamp('computed_at');\n    $table->unique(['entity_type', 'entity_id']);\n});\n\n// Feature Store Service\nclass FeatureStore\n{\n    public function getFeatures(string $type, int $id): array\n    {\n        return DB::table('feature_store')\n            ->where('entity_type', $type)\n            ->where('entity_id', $id)\n            ->value('features') ?? [];\n    }\n\n    public function storeFeatures(string $type, int $id, array $features): void\n    {\n        DB::table('feature_store')->updateOrInsert(\n            ['entity_type' => $type, 'entity_id' => $id],\n            ['features' => json_encode($features), 'computed_at' => now()]\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-how-do-you-build-a-batch-feature-pipeline-with-laravel-queues",
      children: "Q47: How do you build a batch feature pipeline with Laravel queues?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Process features in batches using queued jobs. Each job handles a chunk of records, computes features, and stores them. The pipeline is scheduled to run daily."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Jobs;\n\nuse Illuminate\\Bus\\Batchable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass ComputeFeaturesBatch implements ShouldQueue\n{\n    use Batchable;\n\n    public function __construct(\n        private readonly string $entityType,\n        private readonly array $ids\n    ) {}\n\n    public function handle(): void\n    {\n        $records = DB::table($this->entityType . 's')\n            ->whereIn('id', $this->ids)\n            ->get();\n\n        foreach ($records as $record) {\n            $features = (new FeatureEngineer())->engineerFeatures((array) $record);\n            app(FeatureStore::class)->storeFeatures(\n                $this->entityType, $record->id, $features\n            );\n        }\n    }\n}\n\n// Dispatch batch\n$batch = Bus::batch(\n    collect(User::pluck('id'))->chunk(100)->map(fn($ids) =>\n        new ComputeFeaturesBatch('user', $ids->toArray())\n    )\n)->dispatch();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-what-is-data-leakage-and-how-do-you-prevent-it",
      children: "Q48: What is data leakage and how do you prevent it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Data leakage occurs when information from the future or test set influences training. Examples: scaling on the entire dataset before splitting, using the target to create features, or including look-ahead time-series data. Prevent it by: splitting first, fitting transformers only on training data, and using pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// WRONG → leaks test data into scaling\n$scaler = new MinMaxNormalizer();\n$dataset->apply($scaler); // uses all data including test\n[$train, $test] = $dataset->split(0.8);\n\n// CORRECT → fit only on training data\n[$train, $test] = $dataset->split(0.8);\n$scaler = new MinMaxNormalizer();\n$train->apply($scaler); // fit on train only\n$test->apply($scaler);  // transform using train's fitted params\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-how-do-you-create-time-series-features",
      children: "Q49: How do you create time-series features?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Lag features (value at t-1, t-7), rolling statistics (7-day moving average, standard deviation), time-based features (hour, day of week, month), and difference features (change from previous period). These capture temporal patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class TimeSeriesFeatures\n{\n    public function build(array $history): array\n    {\n        return [\n            'value_lag_1'  => $history[count($history) - 2] ?? 0,\n            'value_lag_7'  => $history[count($history) - 8] ?? 0,\n            'rolling_avg_7' => array_sum(array_slice($history, -7)) / 7,\n            'rolling_std_7' => $this->stdDev(array_slice($history, -7)),\n            'diff_1'       => end($history) - prev($history),\n            'hour'         => (int) now()->format('H'),\n            'day_of_week'  => (int) now()->format('N'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-what-is-one-hot-encoding-and-what-are-its-alternatives",
      children: "Q50: What is one-hot encoding and what are its alternatives?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " One-hot encoding creates binary columns for each category. If \"color\" has values red, green, blue, it produces three columns with one 1 and the rest 0. Alternatives: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Label encoding"
      }), " (red=1, green=2, blue=3 → implies ordinality), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target encoding"
      }), " (replace category with mean target value), or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Embeddings"
      }), " (learned dense vectors for high-cardinality features). One-hot is safe for low-cardinality nominal features but explodes with 1000+ categories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Rubix\\ML\\Transformers\\OneHotEncoder;\n\n$encoder = new OneHotEncoder();\n// ['red', 'green', 'blue'] → [[1,0,0], [0,1,0], [0,0,1]]\n\n// For high cardinality → use ordinal encoding + embedding\nuse Rubix\\ML\\Transformers\\OrdinalEncoder;\n$ordinal = new OrdinalEncoder();\n// [zip: 94105, 10001, 60601] → [94105, 10001, 60601] (preserves values)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-how-do-you-detect-and-handle-outliers",
      children: "Q51: How do you detect and handle outliers?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Detection methods: Z-score (points beyond 3σ), IQR (below Q1-1.5", (0,jsx_runtime.jsx)(_components.em, {
        children: "IQR or above Q3+1.5"
      }), "IQR), Isolation Forest, or domain-specific rules. Handling: remove (if measurement error), cap/winsorize (clamp to percentile), or transform (log scale reduces outlier impact)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class OutlierDetector\n{\n    public function zScoreOutliers(array $values, float $threshold = 3.0): array\n    {\n        $mean = array_sum($values) / count($values);\n        $std = sqrt(array_sum(array_map(\n            fn($v) => ($v - $mean) ** 2, $values\n        )) / count($values));\n\n        $outliers = [];\n        foreach ($values as $i => $v) {\n            if (abs($v - $mean) / max($std, 0.0001) > $threshold) {\n                $outliers[] = $i;\n            }\n        }\n        return $outliers;\n    }\n\n    public function winsorize(array $values, float $limits = 0.05): array\n    {\n        sort($values);\n        $lowIndex = (int) floor(count($values) * $limits);\n        $highIndex = (int) ceil(count($values) * (1 - $limits));\n        $lowValue = $values[$lowIndex];\n        $highValue = $values[$highIndex];\n\n        return array_map(fn($v) => max($lowValue, min($highValue, $v)), $values);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-how-do-you-build-a-feature-pipeline-that-runs-in-production",
      children: "Q52: How do you build a feature pipeline that runs in production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Online feature computation happens during the request lifecycle. Use Laravel's pipeline pattern to chain transformations, and cache results for performance. Feature computation must be deterministic → same input always produces same output."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\ML;\n\nuse Illuminate\\Pipeline\\Pipeline as LaravelPipeline;\n\nclass FeaturePipeline\n{\n    public function compute(array $rawData): array\n    {\n        return app(LaravelPipeline::class)\n            ->send($rawData)\n            ->through([\n                new CleanMissingValues(),\n                new EngineerTimeFeatures(),\n                new ScaleNumericFeatures(),\n                new EncodeCategories(),\n                new SelectRelevantFeatures(),\n            ])\n            ->then(fn($features) => $features);\n    }\n}\n\n// Usage in controller\n$features = (new FeaturePipeline())->compute($request->validated());\n$prediction = $model->predict(new Unlabeled([$features]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "laravel-ai-sdk-integration",
      children: "Laravel AI SDK Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q53-how-do-you-set-up-the-laravel-ai-sdk-to-call-an-llm",
      children: "Q53: How do you set up the Laravel AI SDK to call an LLM?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Install via Composer, configure your API key, and use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AI::chat()"
      }), " facade to send messages. The SDK supports OpenAI, Anthropic, Ollama, and other providers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/ai\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/ai.php\nreturn [\n    'default' => 'openai',\n    'providers' => [\n        'openai' => [\n            'api_key' => env('OPENAI_API_KEY'),\n            'model' => 'gpt-4o',\n        ],\n        'anthropic' => [\n            'api_key' => env('ANTHROPIC_API_KEY'),\n            'model' => 'claude-sonnet-4-20250514',\n        ],\n    ],\n];\n\nuse Illuminate\\Support\\Facades\\AI;\n\n$response = AI::chat()->create([\n    'model' => 'gpt-4o',\n    'messages' => [\n        ['role' => 'system', 'content' => 'You are a helpful assistant.'],\n        ['role' => 'user', 'content' => 'Explain overfitting in ML.'],\n    ],\n]);\n\necho $response->choices[0]->message->content;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-what-are-ai-agents-in-the-laravel-ai-sdk-and-how-do-you-define-one",
      children: "Q54: What are AI agents in the Laravel AI SDK and how do you define one?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Agents are autonomous LLM-powered systems that can use tools, maintain state, and execute multi-step tasks. The SDK uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LLMAgent"
      }), " with instructions, tools, and optional callbacks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Laravel\\AI\\Agents\\LLMAgent;\n\n$agent = new LLMAgent(\n    instructions: 'You are a data science assistant. Answer questions about ML models.',\n    tools: [\n        new AnalyzeDatasetTool(),\n        new ExplainAlgorithmTool(),\n    ],\n);\n\n$result = $agent->execute('What model should I use for predicting house prices?');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q55-how-do-you-define-custom-tools-for-an-ai-agent",
      children: "Q55: How do you define custom tools for an AI agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Tools are classes with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle"
      }), " method and a JSON schema describing their parameters. The LLM decides when to call them based on the conversation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Laravel\\AI\\Tools\\Tool;\n\nclass ProductPredictorTool extends Tool\n{\n    public function __construct(\n        private readonly string $modelPath\n    ) {}\n\n    public function name(): string\n    {\n        return 'predict_product_demand';\n    }\n\n    public function description(): string\n    {\n        return 'Predict product demand for next month based on historical data.';\n    }\n\n    public function parameters(): array\n    {\n        return [\n            'type' => 'object',\n            'properties' => [\n                'product_id' => ['type' => 'integer'],\n                'days_history' => ['type' => 'integer', 'default' => 90],\n            ],\n            'required' => ['product_id'],\n        ];\n    }\n\n    public function handle(array $params): string\n    {\n        $model = PersistentModel::load(\n            new Filesystem($this->modelPath)\n        );\n\n        $history = Demand::where('product_id', $params['product_id'])\n            ->orderBy('date')\n            ->take($params['days_history'] ?? 90)\n            ->get();\n\n        $features = $this->engineerFeatures($history);\n        $prediction = $model->predict(new Unlabeled([$features]))[0];\n\n        return json_encode([\n            'product_id' => $params['product_id'],\n            'predicted_demand' => round($prediction, 2),\n            'confidence_interval' => $this->getInterval($history),\n        ]);\n    }\n}\n\n// Register with agent\n$agent = new LLMAgent(\n    instructions: 'Predict product demand and explain results.',\n    tools: [new ProductPredictorTool(storage_path('models/demand.model'))],\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-how-do-you-get-structured-output-json-from-an-llm-in-laravel-ai-sdk",
      children: "Q56: How do you get structured output (JSON) from an LLM in Laravel AI SDK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "response_format"
      }), " parameter to specify a JSON schema. The LLM will return valid JSON matching that schema → critical for type-safe downstream processing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$response = AI::chat()->create([\n    'model' => 'gpt-4o',\n    'messages' => [\n        ['role' => 'user', 'content' => 'Extract entities from this text...'],\n    ],\n    'response_format' => [\n        'type' => 'json_schema',\n        'json_schema' => [\n            'name' => 'entity_extraction',\n            'strict' => true,\n            'schema' => [\n                'type' => 'object',\n                'properties' => [\n                    'people' => [\n                        'type' => 'array',\n                        'items' => ['type' => 'string'],\n                    ],\n                    'organizations' => [\n                        'type' => 'array',\n                        'items' => ['type' => 'string'],\n                    ],\n                    'dates' => [\n                        'type' => 'array',\n                        'items' => ['type' => 'string'],\n                    ],\n                ],\n                'required' => ['people', 'organizations', 'dates'],\n            ],\n        ],\n    ],\n]);\n\n$result = json_decode($response->choices[0]->message->content, true);\n// ['people' => ['Alice'], 'organizations' => ['Acme Corp'], 'dates' => ['2025-01-15']]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-how-do-you-stream-an-llm-response-in-laravel",
      children: "Q57: How do you stream an LLM response in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use Laravel's streaming responses or Server-Sent Events. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), " method processes chunks as they arrive → useful for real-time UX."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Controller\npublic function chat(Request $request): StreamedResponse\n{\n    $validated = $request->validate(['message' => 'required|string']);\n\n    return response()->stream(function () use ($validated) {\n        $stream = AI::chat()->createStreamed([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'user', 'content' => $validated['message']],\n            ],\n        ]);\n\n        foreach ($stream as $chunk) {\n            $content = $chunk->choices[0]->delta->content ?? '';\n            if ($content) {\n                echo \"data: \" . json_encode(['text' => $content]) . \"\\n\\n\";\n                ob_flush();\n                flush();\n            }\n        }\n\n        echo \"data: [DONE]\\n\\n\";\n    }, 200, [\n        'Content-Type' => 'text/event-stream',\n        'Cache-Control' => 'no-cache',\n        'X-Accel-Buffering' => 'no',\n    ]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-how-do-you-combine-ml-predictions-with-llm-reasoning-in-a-single-agent-tool",
      children: "Q58: How do you combine ML predictions with LLM reasoning in a single agent tool?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The LLM calls an ML tool for the numeric prediction, then uses its own reasoning to explain the result in context. This hybrid approach gives you statistical rigor plus natural language explanation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class FraudScoreTool extends Tool\n{\n    public function handle(array $params): string\n    {\n        $features = $this->extractFeatures($params['transaction_id']);\n        $score = $this->model->predict(new Unlabeled([$features]))[0];\n\n        // Return raw data → LLM will interpret it\n        return json_encode([\n            'fraud_score' => $score,\n            'features' => $features,\n            'threshold' => 0.85,\n        ]);\n    }\n}\n\n// Agent combines prediction with reasoning\n$agent = new LLMAgent(\n    instructions: 'Analyze fraud predictions. If score > 0.85, explain why and suggest action.',\n    tools: [new FraudScoreTool(storage_path('models/fraud.model'))],\n);\n\n$result = $agent->execute(\n    'Check transaction #12345 and explain the risk.'\n);\n// \"The fraud score is 0.92, primarily driven by...\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-how-do-you-implement-a-rag-retrieval-augmented-generation-pipeline-in-laravel",
      children: "Q59: How do you implement a RAG (Retrieval-Augmented Generation) pipeline in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " RAG retrieves relevant documents from a vector store, injects them into the LLM prompt, and generates a grounded answer. Laravel AI SDK supports vector stores and embedding-based retrieval."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\AI;\n\nclass RagController extends Controller\n{\n    public function ask(Request $request): JsonResponse\n    {\n        $query = $request->input('question');\n\n        // 1. Embed the question\n        $embedding = AI::embeddings()->create([\n            'model' => 'text-embedding-3-small',\n            'input' => $query,\n        ]);\n\n        // 2. Retrieve similar documents\n        $vector = $embedding->embeddings[0]->embedding;\n        $docs = DB::select(\n            'SELECT content, 1 - (embedding <=> ?) AS distance\n             FROM document_embeddings\n             ORDER BY distance DESC\n             LIMIT 5',\n            [json_encode($vector)]\n        );\n\n        // 3. Ground the LLM response\n        $context = collect($docs)->pluck('content')->implode(\"\\n\\n\");\n\n        $response = AI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'Answer based only on the provided context.'],\n                ['role' => 'user', 'content' =>\n                    \"Context:\\n$context\\n\\nQuestion: $query\"],\n            ],\n        ]);\n\n        return response()->json([\n            'answer' => $response->choices[0]->message->content,\n            'sources' => count($docs),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-how-do-you-handle-rate-limiting-and-retries-with-the-ai-sdk",
      children: "Q60: How do you handle rate limiting and retries with the AI SDK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Wrap calls in a retry mechanism with exponential backoff. Use Laravel's built-in retry helper or a dedicated queue for resilience."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Retry;\n\n$response = Retry::retry(3, function () use ($messages) {\n    return AI::chat()->create([\n        'model' => 'gpt-4o',\n        'messages' => $messages,\n    ]);\n}, 1000); // 1s, 2s, 4s backoff\n\n// Or queue LLM calls for background processing\nclass ProcessAiRequest implements ShouldQueue\n{\n    public function handle(): void\n    {\n        try {\n            $response = AI::chat()->create(['model' => 'gpt-4o', ...]);\n            // handle success\n        } catch (RateLimitException $e) {\n            $this->release($e->retryAfter * 1000); // requeue with delay\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q61-how-do-you-test-an-ai-agent-in-laravel",
      children: "Q61: How do you test an AI agent in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Mock the AI facade to return predictable responses. Test tool invocation and agent behavior without hitting real APIs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\AI;\n\npublic function test_agent_predicts_demand(): void\n{\n    // Mock AI response\n    AI::shouldReceive('chat->create')->once()->andReturn(\n        (object) [\n            'choices' => [\n                (object) [\n                    'message' => (object) [\n                        'content' => '{\"product_id\": 1, \"predicted_demand\": 450}',\n                        'tool_calls' => [[\n                            'function' => (object) [\n                                'name' => 'predict_product_demand',\n                                'arguments' => '{\"product_id\": 1}',\n                            ],\n                        ]],\n                    ],\n                ],\n            ],\n        ]\n    );\n\n    $response = $this->postJson('/api/agent/predict', [\n        'product_id' => 1,\n    ]);\n\n    $response->assertStatus(200);\n    $response->assertJson(['predicted_demand' => 450]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-how-do-you-provide-conversation-history-to-maintain-context-in-ai-calls",
      children: "Q62: How do you provide conversation history to maintain context in AI calls?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Store messages in session or database, then send the full history with each request. This gives the LLM conversational memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ChatController extends Controller\n{\n    public function message(Request $request): JsonResponse\n    {\n        $history = session()->get('chat_history', [\n            ['role' => 'system', 'content' => 'You are a data science tutor.'],\n        ]);\n\n        $history[] = ['role' => 'user', 'content' => $request->input('text')];\n\n        $response = AI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => $history,\n            'max_tokens' => 1024,\n        ]);\n\n        $reply = $response->choices[0]->message->content;\n        $history[] = ['role' => 'assistant', 'content' => $reply];\n\n        // Keep history manageable → last 20 messages\n        session()->put('chat_history', array_slice($history, -20));\n\n        return response()->json(['reply' => $reply]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q63-how-do-you-use-system-prompts-effectively-for-domain-specific-tasks",
      children: "Q63: How do you use system prompts effectively for domain-specific tasks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " System prompts set the behavior and constraints of the LLM. Use them to define the persona, output format, rules, and domain knowledge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$systemPrompt = <<<PROMPT\nYou are a medical coding assistant for ICD-10 classification.\n\nRules:\n- You must always cite the ICD-10 code with the patient's chart number.\n- If a condition matches multiple codes, list all and explain why.\n- Never invent codes → only use codes from the official ICD-10-CM standard.\n- If unsure, say \"Could not determine code\" and explain the ambiguity.\n- Format: **Code**: {code} → {description}\n\nExamples:\n- Diabetes type 2 → **E11.9** → Type 2 diabetes mellitus without complications\nPROMPT;\n\n$response = AI::chat()->create([\n    'model' => 'gpt-4o',\n    'messages' => [\n        ['role' => 'system', 'content' => $systemPrompt],\n        ['role' => 'user', 'content' => 'Patient presents with acute bronchitis.'],\n    ],\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q64-how-do-you-chain-multiple-ai-calls-where-one-depends-on-another",
      children: "Q64: How do you chain multiple AI calls where one depends on another?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Extract structured output from the first call, use it as input for the second. This sequential chaining enables complex multi-step reasoning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Step 1: Classify intent\n$intentResponse = AI::chat()->create([\n    'model' => 'gpt-4o',\n    'messages' => [['role' => 'user', 'content' => $query]],\n    'response_format' => [\n        'type' => 'json_schema',\n        'json_schema' => [\n            'name' => 'intent',\n            'schema' => [\n                'type' => 'object',\n                'properties' => [\n                    'intent' => ['type' => 'string', 'enum' => [\n                        'product_question', 'order_status', 'return_request'\n                    ]],\n                    'entities' => ['type' => 'object'],\n                ],\n            ],\n        ],\n    ],\n]);\n\n$intent = json_decode($intentResponse->choices[0]->message->content, true);\n\n// Step 2: Route to specialized handler\n$context = match ($intent['intent']) {\n    'product_question' => $this->getProductInfo($intent['entities']),\n    'order_status' => $this->getOrderStatus($intent['entities']),\n    'return_request' => $this->getReturnPolicy($intent['entities']),\n};\n\n// Step 3: Generate final response with context\n$finalResponse = AI::chat()->create([\n    'model' => 'gpt-4o',\n    'messages' => [\n        ['role' => 'system', 'content' => \"Context:\\n$context\"],\n        ['role' => 'user', 'content' => $query],\n    ],\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q65-how-do-you-consume-streaming-ai-responses-in-a-livewire-component",
      children: "Q65: How do you consume streaming AI responses in a Livewire component?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use Server-Sent Events and Livewire's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$js"
      }), " or Alpine.js to display tokens as they arrive in real time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Livewire Component\nnamespace App\\Livewire;\n\nuse Livewire\\Component;\n\nclass AiChat extends Component\n{\n    public string $message = '';\n    public string $response = '';\n\n    public function send(): void\n    {\n        $this->validate(['message' => 'required']);\n\n        $this->response = '';\n        $this->dispatch('stream-start');\n\n        // Store message and get streaming URL\n        session()->put('ai_query', $this->message);\n    }\n\n    public function render()\n    {\n        return view('livewire.ai-chat');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- livewire/ai-chat.blade.js --}}\n<div>\n    <textarea wire:model=\"message\"></textarea>\n    <button wire:click=\"send\">Send</button>\n\n    <div id=\"response\" x-data=\"{\n        init() {\n            $wire.on('stream-start', () => {\n                const source = new EventSource('/api/chat/stream');\n                source.onmessage = (e) => {\n                    if (e.data === '[DONE]') { source.close(); return; }\n                    const data = JSON.parse(e.data);\n                    $refs.output.innerText += data.text;\n                };\n            });\n        }\n    }\">\n        <pre x-ref=\"output\"></pre>\n    </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q66-how-do-you-build-a-tool-that-calls-a-rubix-ml-model-from-an-agent",
      children: "Q66: How do you build a tool that calls a Rubix ML model from an agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Wrap model loading, prediction, and response formatting into a Tool class. The agent orchestrates when and how to call it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class DemandForecastTool extends Tool\n{\n    public function name(): string { return 'forecast_demand'; }\n\n    public function description(): string\n    {\n        return 'Predict demand for a product category for the next 30 days.';\n    }\n\n    public function parameters(): array\n    {\n        return [\n            'type' => 'object',\n            'properties' => [\n                'category_id' => ['type' => 'integer'],\n                'include_seasonality' => ['type' => 'boolean', 'default' => true],\n            ],\n            'required' => ['category_id'],\n        ];\n    }\n\n    public function handle(array $params): string\n    {\n        $model = PersistentModel::load(\n            new Filesystem(storage_path('models/demand-forecast.model'))\n        );\n\n        $data = DB::table('daily_sales')\n            ->where('category_id', $params['category_id'])\n            ->orderBy('date', 'desc')\n            ->limit(90)\n            ->get();\n\n        $features = [];\n        foreach ($data as $day) {\n            $features[] = [\n                (int) date('N', strtotime($day->date)),\n                (int) date('m', strtotime($day->date)),\n                $day->sales,\n                $day->promotions,\n            ];\n        }\n\n        $predictions = $model->predict(new Unlabeled($features));\n\n        return json_encode([\n            'category_id' => $params['category_id'],\n            'forecast' => array_map(fn($v) => round($v, 2), $predictions),\n            'total' => round(array_sum($predictions), 2),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q67-how-do-you-handle-ai-provider-fallback-in-laravel-ai-sdk",
      children: "Q67: How do you handle AI provider fallback in Laravel AI SDK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Configure multiple providers and implement a fallback chain. If the primary provider fails, switch to the backup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AiFallbackService\n{\n    private array $providers = ['openai', 'anthropic', 'ollama'];\n\n    public function chat(array $messages): string\n    {\n        foreach ($this->providers as $provider) {\n            try {\n                config(['ai.default' => $provider]);\n\n                $response = AI::chat()->create([\n                    'model' => $this->getModel($provider),\n                    'messages' => $messages,\n                    'timeout' => 30,\n                ]);\n\n                return $response->choices[0]->message->content;\n\n            } catch (Exception $e) {\n                Log::warning(\"AI provider {$provider} failed: {$e->getMessage()}\");\n                continue;\n            }\n        }\n\n        throw new \\RuntimeException('All AI providers failed');\n    }\n\n    private function getModel(string $provider): string\n    {\n        return match ($provider) {\n            'openai' => 'gpt-4o',\n            'anthropic' => 'claude-sonnet-4-20250514',\n            'ollama' => 'llama3',\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q68-how-do-you-incorporate-vector-similarity-search-into-an-ai-agent-tool",
      children: "Q68: How do you incorporate vector similarity search into an AI agent tool?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Build a tool that performs semantic search over your vector store. The agent uses it to retrieve relevant knowledge on demand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class KnowledgeBaseSearchTool extends Tool\n{\n    public function name(): string { return 'search_knowledge_base'; }\n\n    public function description(): string\n    {\n        return 'Search internal knowledge base for relevant documentation.';\n    }\n\n    public function parameters(): array\n    {\n        return [\n            'type' => 'object',\n            'properties' => [\n                'query' => ['type' => 'string'],\n                'limit' => ['type' => 'integer', 'default' => 5],\n            ],\n            'required' => ['query'],\n        ];\n    }\n\n    public function handle(array $params): string\n    {\n        $embedding = AI::embeddings()->create([\n            'model' => 'text-embedding-3-small',\n            'input' => $params['query'],\n        ]);\n\n        $vector = $embedding->embeddings[0]->embedding;\n\n        $results = DB::select(\n            'SELECT title, content, 1 - (embedding <=> ?) AS similarity\n             FROM knowledge_base\n             ORDER BY similarity DESC\n             LIMIT ?',\n            [json_encode($vector), $params['limit'] ?? 5]\n        );\n\n        return json_encode($results);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mlops--production",
      children: "MLOps & Production"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q69-how-do-you-deploy-an-ml-model-in-a-laravel-application",
      children: "Q69: How do you deploy an ML model in a Laravel application?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Export the trained Rubix ML model as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".model"
      }), " file, commit it to storage (or an object store), and load it at runtime. Use a facade or singleton to avoid reloading on every request."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Service Provider boot → load once\npublic function boot(): void\n{\n    $this->app->singleton(FraudDetector::class, function () {\n        return new FraudDetector(\n            PersistentModel::load(\n                new Filesystem(storage_path('models/fraud-v3.model'))\n            )\n        );\n    });\n}\n\n// Controller\nclass FraudController extends Controller\n{\n    public function check(Request $request, FraudDetector $detector): JsonResponse\n    {\n        $features = $this->extractFeatures($request->validated());\n        $score = $detector->predict($features);\n\n        return response()->json([\n            'fraud_score' => $score,\n            'flagged' => $score > 0.85,\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q70-how-do-you-monitor-model-performance-in-production",
      children: "Q70: How do you monitor model performance in production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Log predictions alongside actual outcomes, then compute metrics over time windows. Alert on metric degradation (accuracy drop, drift). Use Laravel's logging or a dedicated metrics table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Log predictions\nclass PredictionLogger\n{\n    public function log(\n        string $modelVersion,\n        array $features,\n        float $prediction,\n        ?float $actual = null\n    ): void {\n        DB::table('prediction_logs')->insert([\n            'model_version' => $modelVersion,\n            'features' => json_encode($features),\n            'prediction' => $prediction,\n            'actual' => $actual,\n            'logged_at' => now(),\n        ]);\n    }\n\n    public function getAccuracySince(string $modelVersion, Carbon $since): float\n    {\n        $rows = DB::table('prediction_logs')\n            ->whereNotNull('actual')\n            ->where('model_version', $modelVersion)\n            ->where('logged_at', '>=', $since)\n            ->get();\n\n        if ($rows->isEmpty()) return 0.0;\n\n        $correct = $rows->filter(fn($r) =>\n            abs($r->prediction - $r->actual) < 0.1\n        )->count();\n\n        return $correct / $rows->count();\n    }\n}\n\n// Scheduled monitoring\n// app/Console/Kernel.php\n$schedule->call(function () {\n    $logger = app(PredictionLogger::class);\n    $accuracy = $logger->getAccuracySince('fraud-v3', now()->subDay());\n\n    if ($accuracy < 0.85) {\n        Notification::route('slack', config('services.slack.webhook'))\n            ->notify(new ModelDriftAlert('fraud-v3', $accuracy));\n    }\n})->daily();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q71-what-is-model-drift-and-how-do-you-detect-it",
      children: "Q71: What is model drift and how do you detect it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Model drift occurs when the statistical properties of the target variable or features change over time. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data drift"
      }), " → input distribution changes (e.g., new customer demographics). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Concept drift"
      }), " → relationship between features and target changes (e.g., buying patterns shift post-pandemic). Detect by tracking feature distributions (Kolmogorov-Smirnov test) and prediction distributions over time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class DriftDetector\n{\n    public function detectDataDrift(string $modelVersion, array $newFeatures): float\n    {\n        $baseline = DB::table('feature_baselines')\n            ->where('model_version', $modelVersion)\n            ->first();\n\n        // Kolmogorov-Smirnov statistic on each feature\n        $driftScores = [];\n        foreach ($newFeatures as $i => $value) {\n            $baselineMean = json_decode($baseline->means)[$i] ?? 0;\n            $baselineStd = json_decode($baseline->stds)[$i] ?? 1;\n            $zScore = abs($value - $baselineMean) / max($baselineStd, 0.001);\n            $driftScores[] = $zScore > 3.0 ? 1.0 : 0.0;\n        }\n\n        return count($driftScores) > 0\n            ? array_sum($driftScores) / count($driftScores)\n            : 0.0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q72-how-do-you-implement-ab-testing-for-ml-models-in-laravel",
      children: "Q72: How do you implement A/B testing for ML models in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Route a percentage of traffic to the new model (B) while the rest uses the current model (A). Log which model served each prediction and compare business metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ModelRouter\n{\n    private const BUCKET_KEY = 'model_ab_test';\n\n    public function route(int $userId): ModelVariant\n    {\n        $bucket = crc32((string) $userId) % 100;\n\n        return match (true) {\n            $bucket < 10 => ModelVariant::B,    // 10% to new model\n            default      => ModelVariant::A,     // 90% to current\n        };\n    }\n}\n\nenum ModelVariant: string\n{\n    case A = 'fraud-v3';\n    case B = 'fraud-v4-experimental';\n}\n\nclass FraudController extends Controller\n{\n    public function check(Request $request, ModelRouter $router): JsonResponse\n    {\n        $variant = $router->route(auth()->id());\n        $model = app(ModelRegistry::class)->get($variant->value);\n\n        $features = $this->extractFeatures($request->validated());\n        $score = $model->predict(new Unlabeled([$features]))[0];\n\n        // Log variant for analysis\n        DB::table('ab_test_log')->insert([\n            'user_id' => auth()->id(),\n            'variant' => $variant->value,\n            'prediction' => $score,\n            'created_at' => now(),\n        ]);\n\n        return response()->json(['fraud_score' => $score]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q73-how-do-you-version-ml-models-and-manage-a-model-registry",
      children: "Q73: How do you version ML models and manage a model registry?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Store models with semantic versioning in a model registry (database table or object store). Track metadata: training date, metrics, dataset hash, features used. Load by version or alias (production, staging)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration\nSchema::create('model_registry', function (Blueprint $table) {\n    $table->id();\n    $table->string('name');\n    $table->string('version');          // 1.2.3\n    $table->string('status');           // staging, production, archived\n    $table->string('path');             // models/fraud-1.2.3.model\n    $table->json('metrics');            // {'accuracy': 0.97, 'f1': 0.94}\n    $table->json('feature_columns');\n    $table->string('training_dataset_hash');\n    $table->timestamp('trained_at');\n    $table->timestamps();\n});\n\nclass ModelRegistry\n{\n    public function get(string $name, ?string $version = null): PersistentModel\n    {\n        $record = DB::table('model_registry')\n            ->where('name', $name)\n            ->when($version, fn($q) => $q->where('version', $version))\n            ->when(!$version, fn($q) => $q->where('status', 'production'))\n            ->firstOrFail();\n\n        return PersistentModel::load(\n            new Filesystem(storage_path($record->path))\n        );\n    }\n\n    public function register(string $name, string $version, array $metrics): void\n    {\n        $path = \"models/{$name}-{$version}.model\";\n        DB::table('model_registry')->insert([\n            'name' => $name,\n            'version' => $version,\n            'status' => 'staging',\n            'path' => $path,\n            'metrics' => json_encode($metrics),\n            'trained_at' => now(),\n        ]);\n    }\n\n    public function promote(string $name, string $version): void\n    {\n        DB::table('model_registry')\n            ->where('name', $name)\n            ->update(['status' => 'archived']);\n\n        DB::table('model_registry')\n            ->where('name', $name)\n            ->where('version', $version)\n            ->update(['status' => 'production']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q74-how-do-you-schedule-model-retraining-in-laravel",
      children: "Q74: How do you schedule model retraining in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use a queue job triggered by a scheduler. The job loads fresh data, retrains, evaluates against the current model, and promotes if better."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Jobs;\n\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass RetrainFraudModel implements ShouldQueue\n{\n    public function handle(ModelRegistry $registry): void\n    {\n        $newVersion = $this->bumpVersion(\n            $registry->getCurrentVersion('fraud')\n        );\n\n        // 1. Load fresh training data\n        $dataset = $this->loadTrainingData();\n\n        // 2. Train new model\n        $model = new Pipeline([\n            new MissingDataImputer(),\n            new MinMaxNormalizer(),\n        ], new IsolationForest(100, 0.1));\n\n        $model->train($dataset);\n\n        // 3. Evaluate\n        [$train, $test] = $dataset->split(0.8);\n        $model->train($train);\n        $predictions = $model->predict($test);\n        $score = (new F1Score())->score($predictions, $test->labels());\n\n        // 4. Save if better than current\n        $current = $registry->getMetrics('fraud', 'production');\n        if ($score > ($current['f1'] ?? 0)) {\n            $model->save();\n            $registry->register('fraud', $newVersion, ['f1' => $score]);\n            $registry->promote('fraud', $newVersion);\n        }\n    }\n}\n\n// app/Console/Kernel.php\n$schedule->job(new RetrainFraudModel())->weekly()->sundays()->at('02:00');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q75-how-do-you-implement-a-rollback-strategy-for-a-bad-model",
      children: "Q75: How do you implement a rollback strategy for a bad model?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Keep the previous production model in the registry. If monitoring detects degradation, swap the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "production"
      }), " status back to the previous version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ModelRollback\n{\n    public function rollback(string $modelName): void\n    {\n        $current = DB::table('model_registry')\n            ->where('name', $modelName)\n            ->where('status', 'production')\n            ->firstOrFail();\n\n        $previous = DB::table('model_registry')\n            ->where('name', $modelName)\n            ->where('version', '<', $current->version)\n            ->where('status', 'archived')\n            ->orderBy('version', 'desc')\n            ->first();\n\n        if (!$previous) {\n            throw new \\RuntimeException(\"No previous version to rollback to\");\n        }\n\n        DB::transaction(function () use ($current, $previous) {\n            DB::table('model_registry')\n                ->where('id', $current->id)\n                ->update(['status' => 'archived']);\n\n            DB::table('model_registry')\n                ->where('id', $previous->id)\n                ->update(['status' => 'production']);\n        });\n\n        // Refresh singleton in container\n        app()->forgetInstance($modelName . '_model');\n        Log::warning(\"Rolled back {$modelName} from v{$current->version} to v{$previous->version}\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q76-how-do-you-optimize-ml-inference-latency-in-laravel",
      children: "Q76: How do you optimize ML inference latency in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Strategies: load model as a singleton (avoid filesystem reads per request), use eager-loading for feature data, batch predictions, cache feature engineering, and consider GPU acceleration or dedicated inference servers for high-throughput scenarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Cache feature engineering results\nclass CacheAwareFeaturePipeline\n{\n    public function compute(string $entityType, int $id): array\n    {\n        return Cache::remember(\n            \"features:{$entityType}:{$id}\",\n            3600, // 1 hour TTL\n            fn() => $this->pipeline->compute(\n                DB::table(\"{$entityType}s\")->find($id)\n            )\n        );\n    }\n}\n\n// Batch predictions in one model call\nclass BatchPredictor\n{\n    public function predictMany(array $features): array\n    {\n        $dataset = new Unlabeled($features);\n        return $this->model->predict($dataset);\n    }\n}\n\n// Use read replicas for feature queries\nclass FeatureRepository\n{\n    public function getFeatures(array $ids): array\n    {\n        return DB::connection('read-replica')\n            ->table('feature_store')\n            ->whereIn('entity_id', $ids)\n            ->pluck('features', 'entity_id')\n            ->toArray();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q77-how-do-you-implement-canary-deployments-for-ml-models",
      children: "Q77: How do you implement canary deployments for ML models?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Deploy the new model to a small percentage of servers (canary group) first. Monitor metrics and gradually increase traffic if performance is stable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class CanaryRouter\n{\n    public function __construct(\n        private readonly string $canaryInstance\n    ) {}\n\n    public function shouldUseCanary(): bool\n    {\n        // Only applies to this server instance\n        return gethostname() === $this->canaryInstance;\n    }\n\n    public function predict(array $features): float\n    {\n        $model = $this->shouldUseCanary()\n            ? app('model.fraud.canary')   // v3.1 experimental\n            : app('model.fraud.production'); // v3.0 current\n\n        return $model->predict(new Unlabeled([$features]))[0];\n    }\n}\n\n// Deploy: update 1 of 5 servers with canary model\n// Monitor: track comparison metrics between instances\n// Promote: if canary shows >= 0% regression for 24h, roll to all servers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q78-how-do-you-trace-ml-predictions-for-debugging",
      children: "Q78: How do you trace ML predictions for debugging?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Log the full prediction context: input features, model version, prediction, confidence, and timing. Use Laravel's logging or a structured observability tool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Log;\n\nclass TracedPredictor\n{\n    public function predict(string $modelName, array $features): array\n    {\n        $start = microtime(true);\n\n        $model = app(ModelRegistry::class)->get($modelName);\n        $prediction = $model->predict(new Unlabeled([$features]))[0];\n\n        $duration = (microtime(true) - $start) * 1000;\n\n        Log::channel('ml-predictions')->info('Prediction', [\n            'model' => $modelName,\n            'features' => $features,\n            'prediction' => $prediction,\n            'duration_ms' => round($duration, 2),\n            'trace_id' => request()->header('X-Trace-ID'),\n            'user_id' => auth()->id(),\n        ]);\n\n        return ['prediction' => $prediction, 'duration_ms' => $duration];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system-design-with-aiml",
      children: "System Design with AI/ML"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q79-design-a-recommendation-system-in-laravel",
      children: "Q79: Design a recommendation system in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Hybrid approach combining collaborative filtering (users like you also liked) and content-based filtering (similar items). Use Rubix ML for training, Redis for serving, and queues for batch updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Offline training (scheduled job)\nclass TrainRecommendations implements ShouldQueue\n{\n    public function handle(): void\n    {\n        $interactions = DB::table('user_product_interactions')\n            ->select('user_id', 'product_id', DB::raw('SUM(weight) as score'))\n            ->groupBy('user_id', 'product_id')\n            ->get();\n\n        // Build user-product matrix\n        $users = $interactions->groupBy('user_id');\n        $samples = [];\n        $labels = [];\n\n        foreach ($users as $userId => $items) {\n            $features = array_fill(0, 1000, 0);\n            foreach ($items as $item) {\n                $features[$item->product_id] = $item->score;\n            }\n            $samples[] = $features;\n            $labels[] = $userId;\n        }\n\n        // Train collaborative filtering model\n        $dataset = Labeled::build($samples, $labels);\n        $model = new KMeans(20); // 20 product clusters\n        $model->train($dataset);\n\n        PersistentModel::save(\n            $model,\n            new Filesystem(storage_path('models/recommendations.model'))\n        );\n    }\n}\n\n// Online serving\nclass RecommendationController extends Controller\n{\n    public function recommend(Request $request): JsonResponse\n    {\n        $user = $request->user();\n        $history = $user->purchases()\n            ->select('product_id', DB::raw('COUNT(*) as count'))\n            ->groupBy('product_id')\n            ->pluck('count', 'product_id');\n\n        // Get similar products based on purchase history\n        $productIds = Product::query()\n            ->whereIn('category_id', $user->purchases()->pluck('category_id'))\n            ->whereNotIn('id', $history->keys())\n            ->inRandomOrder()\n            ->limit(10)\n            ->pluck('id');\n\n        return response()->json([\n            'recommendations' => Product::whereIn('id', $productIds)->get(),\n            'strategy' => 'collaborative_content_hybrid',\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q80-design-a-real-time-fraud-detection-pipeline-in-laravel",
      children: "Q80: Design a real-time fraud detection pipeline in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Multi-stage pipeline: feature computation → ML prediction → rule override → action. Use queues for async scoring on high-volume events, sync scoring for user-facing checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Synchronous scoring (payment page)\nclass FraudMiddleware\n{\n    public function handle(Request $request, Closure $next): Response\n    {\n        if ($request->is('checkout/*')) {\n            $features = $this->extractFeatures($request);\n\n            $score = Cache::remember(\"fraud:{$request->ip()}\", 60, function () use ($features) {\n                return app(FraudDetector::class)->predict($features);\n            });\n\n            if ($score > 0.95) {\n                return response()->json(['error' => 'Transaction blocked'], 403);\n            }\n\n            // High-risk flag for manual review\n            if ($score > 0.80) {\n                DB::table('fraud_reviews')->insert([\n                    'transaction_id' => $request->input('transaction_id'),\n                    'score' => $score,\n                    'status' => 'pending_review',\n                    'created_at' => now(),\n                ]);\n            }\n        }\n\n        return $next($request);\n    }\n\n    private function extractFeatures(Request $request): array\n    {\n        return [\n            $request->input('amount'),\n            (int) ($request->input('amount') > 1000),\n            $this->isNewUser($request->user()),\n            $this->isHighRiskCountry($request->ip()),\n            $this->transactionCount24h($request->user()),\n            $this->distanceFromHome($request->user(), $request->ip()),\n            $this->deviceMatchesHistory($request->user(), $request->userAgent()),\n        ];\n    }\n}\n\n// Async scoring (background queue for non-blocking analysis)\nclass ScoreTransactionJob implements ShouldQueue\n{\n    public function __construct(private readonly array $transaction) {}\n\n    public function handle(FraudDetector $detector): void\n    {\n        $features = $this->extractFeatures($this->transaction);\n        $score = $detector->predict($features);\n\n        DB::table('transaction_scores')->insert([\n            'transaction_id' => $this->transaction['id'],\n            'score' => $score,\n            'features' => json_encode($features),\n            'scored_at' => now(),\n        ]);\n\n        if ($score > 0.85) {\n            Notification::route('slack', config('services.slack.webhook'))\n                ->notify(new SuspiciousTransactionAlert($this->transaction));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q81-design-a-rag-retrieval-augmented-generation-architecture-for-a-customer-support-system",
      children: "Q81: Design a RAG (Retrieval-Augmented Generation) architecture for a customer support system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Ingest documentation into a vector store, retrieve relevant chunks at query time, and generate answers with the LLM. Include citation tracking for compliance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Ingestion pipeline\nclass IngestDocument implements ShouldQueue\n{\n    public function handle(): void\n    {\n        $chunks = $this->chunkDocument($this->content);\n\n        foreach ($chunks as $chunk) {\n            $embedding = AI::embeddings()->create([\n                'model' => 'text-embedding-3-small',\n                'input' => $chunk['text'],\n            ]);\n\n            DB::table('document_chunks')->insert([\n                'document_id' => $this->documentId,\n                'content' => $chunk['text'],\n                'embedding' => json_encode($embedding->embeddings[0]->embedding),\n                'metadata' => json_encode([\n                    'source' => $this->sourceUrl,\n                    'page' => $chunk['page'],\n                    'section' => $chunk['section'],\n                ]),\n            ]);\n        }\n    }\n\n    private function chunkDocument(string $content, int $maxTokens = 500): array\n    {\n        $sentences = preg_split('/(?<=[.!?])\\s+/', $content);\n        $chunks = [];\n        $current = '';\n\n        foreach ($sentences as $sentence) {\n            if (str_word_count($current . ' ' . $sentence) > $maxTokens) {\n                $chunks[] = ['text' => trim($current)];\n                $current = $sentence;\n            } else {\n                $current .= ' ' . $sentence;\n            }\n        }\n\n        if (trim($current)) {\n            $chunks[] = ['text' => trim($current)];\n        }\n\n        return $chunks;\n    }\n}\n\n// Query service\nclass RagQueryService\n{\n    public function answer(string $question): array\n    {\n        // Embed question\n        $embedding = AI::embeddings()->create([\n            'model' => 'text-embedding-3-small',\n            'input' => $question,\n        ]);\n\n        // Retrieve top-5 chunks\n        $vector = json_encode($embedding->embeddings[0]->embedding);\n        $chunks = DB::select(\n            'SELECT content, metadata, 1 - (embedding <=> ?) AS similarity\n             FROM document_chunks\n             ORDER BY similarity DESC\n             LIMIT 5',\n            [$vector]\n        );\n\n        // Generate grounded answer\n        $context = collect($chunks)->pluck('content')->implode(\"\\n---\\n\");\n        $sources = collect($chunks)->pluck('metadata')->map(fn($m) =>\n            json_decode($m, true)['source']\n        )->unique()->values();\n\n        $response = AI::chat()->create([\n            'model' => 'gpt-4o',\n            'messages' => [\n                ['role' => 'system', 'content' =>\n                    'Answer based only on the provided context. Cite sources.'],\n                ['role' => 'user', 'content' =>\n                    \"Context:\\n{$context}\\n\\nQuestion: {$question}\"],\n            ],\n        ]);\n\n        return [\n            'answer' => $response->choices[0]->message->content,\n            'sources' => $sources,\n            'chunks_retrieved' => count($chunks),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q82-design-a-system-that-scales-ml-predictions-for-millions-of-requests-per-day",
      children: "Q82: Design a system that scales ML predictions for millions of requests per day."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three-layer architecture: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge/CDN"
      }), " caches static predictions. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Laravel app"
      }), " serves predictions via singleton-loaded models. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dedicated inference workers"
      }), " handle complex models via Horizon queues. Use read replicas for feature queries and Redis for hot feature cache."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/ml-scaling.php\nreturn [\n    'prediction_cache_ttl' => env('PREDICTION_CACHE_TTL', 300),\n    'batch_size' => env('ML_BATCH_SIZE', 100),\n    'use_queue_for_async' => env('ML_ASYNC_QUEUE', true),\n];\n\n// High-throughput prediction endpoint\nclass FastPredictController extends Controller\n{\n    public function __construct(\n        private readonly ModelRegistry $registry,\n        private readonly CacheAwareFeaturePipeline $features\n    ) {}\n\n    public function predict(Request $request): JsonResponse\n    {\n        $cacheKey = \"pred:{$request->input('entity_type')}:{$request->input('entity_id')}\";\n\n        $score = Cache::remember($cacheKey, 300, function () use ($request) {\n            $features = $this->features->compute(\n                $request->input('entity_type'),\n                $request->input('entity_id')\n            );\n\n            $model = $this->registry->get($request->input('model_name'));\n            return $model->predict(new Unlabeled([$features]))[0];\n        });\n\n        return response()->json(['score' => $score]);\n    }\n}\n\n// Queue for batch prediction jobs (e.g., daily scoring of 1M users)\nclass BatchScoreAllUsers implements ShouldQueue\n{\n    public function handle(): void\n    {\n        User::query()->chunkById(1000, function ($users) {\n            $features = collect($users)->map(fn($u) =>\n                app(CacheAwareFeaturePipeline::class)->compute('user', $u->id)\n            )->toArray();\n\n            $scores = app(ModelRegistry::class)\n                ->get('user-risk')\n                ->predict(new Unlabeled($features));\n\n            foreach ($users as $i => $user) {\n                DB::table('user_risk_scores')->updateOrInsert(\n                    ['user_id' => $user->id],\n                    ['score' => $scores[$i], 'updated_at' => now()]\n                );\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q83-design-a-pipeline-for-real-time-content-moderation-with-ai",
      children: "Q83: Design a pipeline for real-time content moderation with AI."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Multi-layered moderation: ML classifier (toxic content probability) → LLM review (context-based judgment) → human-in-the-loop (edge cases). Use webhook/queue for async processing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ContentModerationPipeline\n{\n    public function moderate(string $content, string $userId): ModerationResult\n    {\n        // Layer 1: ML toxicity classifier (fast, cheap)\n        $toxicityScore = $this->toxicityModel->predict(\n            new Unlabeled([[mb_strtolower($content)]])\n        )[0];\n\n        if ($toxicityScore < 0.3) {\n            return ModerationResult::Approved;\n        }\n\n        // Layer 2: LLM contextual review (slower, nuanced)\n        if ($toxicityScore < 0.8) {\n            $llmVerdict = AI::chat()->create([\n                'model' => 'gpt-4o-mini',\n                'messages' => [\n                    ['role' => 'system', 'content' =>\n                        'Is this content a policy violation? Consider context. ' .\n                        'Reply ONLY with \"violation\" or \"allowed\".'],\n                    ['role' => 'user', 'content' => $content],\n                ],\n                'max_tokens' => 10,\n            ]);\n\n            $verdict = trim($llmVerdict->choices[0]->message->content);\n\n            return match ($verdict) {\n                'violation' => ModerationResult::Rejected,\n                default => ModerationResult::Approved,\n            };\n        }\n\n        // Layer 3: High-confidence toxicity → human review\n        ModerateContentJob::dispatch($content, $userId, $toxicityScore);\n        return ModerationResult::PendingReview;\n    }\n}\n\nclass ModerateContentJob implements ShouldQueue\n{\n    public function handle(): void\n    {\n        Notification::route('slack', config('services.slack.moderation_webhook'))\n            ->notify(new ContentNeedsReview($this->content, $this->score));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q84-design-a-product-categorization-system-using-ml",
      children: "Q84: Design a product categorization system using ML."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use hierarchical classification. Train a text classifier on product titles and descriptions, then map predictions to a category tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ProductCategorizer\n{\n    private PersistentModel $model;\n\n    public function __construct()\n    {\n        $this->model = PersistentModel::load(\n            new Filesystem(storage_path('models/product-category.model'))\n        );\n    }\n\n    public function categorize(array $productData): array\n    {\n        $features = [\n            $productData['title'],\n            $productData['description'] ?? '',\n            $productData['brand'] ?? '',\n            $productData['price_range'] ?? 'unknown',\n        ];\n\n        $text = mb_strtolower(implode(' ', $features));\n\n        $dataset = new Unlabeled([[$text]]);\n        $prediction = $this->model->predict($dataset)[0];\n\n        // Map to category hierarchy\n        return CategoryHierarchy::getPath($prediction);\n    }\n}\n\n// Category hierarchy example\nclass CategoryHierarchy\n{\n    private static array $tree = [\n        'electronics.phones.smartphones' => ['level1' => 'Electronics'],\n        'electronics.phones.accessories' => ['level1' => 'Electronics'],\n        'home.kitchen.small_appliances'  => ['level1' => 'Home'],\n    ];\n\n    public static function getPath(string $prediction): array\n    {\n        $segments = explode('.', $prediction);\n        return [\n            'l1' => $segments[0] ?? 'Uncategorized',\n            'l2' => $segments[1] ?? null,\n            'l3' => $segments[2] ?? null,\n            'full_path' => $prediction,\n        ];\n    }\n}\n\n// Training command\n// php artisan ml:train-categorizer\n$products = DB::table('products')\n    ->whereNotNull('category_path')\n    ->get(['title', 'description', 'category_path']);\n\n$samples = $products->map(fn($p) => [\n    mb_strtolower(\"{$p->title} {$p->description}\")\n])->toArray();\n\n$labels = $products->pluck('category_path')->toArray();\n\n$dataset = Labeled::build($samples, $labels);\n$pipeline = new Pipeline([\n    new WordCountVectorizer(10000),\n    new TfIdfTransformer(),\n], new NaiveBayes());\n\n$pipeline->train($dataset);\nPersistentModel::save($pipeline, new Filesystem(storage_path('models/product-category.model')));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q85-design-a-lead-scoring-system-that-combines-ml-and-business-rules",
      children: "Q85: Design a lead scoring system that combines ML and business rules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ML predicts conversion probability; business rules adjust based on strategic priorities. The combined score determines sales routing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class LeadScoringService\n{\n    public function __construct(\n        private readonly PersistentModel $mlModel\n    ) {}\n\n    public function score(array $lead): LeadScore\n    {\n        // Step 1: ML-based conversion probability\n        $features = [\n            (int) $lead['company_size'],\n            $lead['industry_code'],\n            $lead['website_traffic'],\n            $lead['email_opens_last_30d'],\n            $lead['demo_requests'],\n            $lead['days_since_first_contact'],\n            $lead['has_budget'] ? 1 : 0,\n            $lead['has_timeline'] ? 1 : 0,\n        ];\n\n        $mlScore = $this->mlModel->predict(new Unlabeled([$features]))[0];\n\n        // Step 2: Business rule adjustments\n        $adjustment = 0.0;\n\n        // Strategic account boost\n        if (in_array($lead['domain'], config('ml.strategic_accounts'))) {\n            $adjustment += 0.15;\n        }\n\n        // Recent engagement boost\n        if ($lead['last_activity'] > now()->subDays(3)->timestamp) {\n            $adjustment += 0.10;\n        }\n\n        // Cold lead penalty\n        if ($lead['days_since_first_contact'] > 180) {\n            $adjustment -= 0.20;\n        }\n\n        $finalScore = max(0.0, min(1.0, $mlScore + $adjustment));\n\n        // Step 3: Routing decision\n        return new LeadScore(\n            score: $finalScore,\n            tier: match (true) {\n                $finalScore >= 0.8 => 'hot',\n                $finalScore >= 0.5 => 'warm',\n                default => 'cold',\n            },\n            mlScore: $mlScore,\n            adjustments: $adjustment,\n        );\n    }\n}\n\n// Controller\nclass LeadController extends Controller\n{\n    public function route(LeadScoringService $scorer): JsonResponse\n    {\n        $leads = Lead::whereNull('routed_at')->limit(100)->get();\n        $routed = [];\n\n        foreach ($leads as $lead) {\n            $score = $scorer->score($lead->toArray());\n\n            $assignee = match ($score->tier) {\n                'hot' => $this->findBestRep($lead),\n                'warm' => $this->roundRobinRep(),\n                'cold' => $this->nurtureCampaign(),\n            };\n\n            $lead->update([\n                'score' => $score->score,\n                'tier' => $score->tier,\n                'assigned_to' => $assignee,\n                'routed_at' => now(),\n            ]);\n\n            $routed[] = ['id' => $lead->id, 'tier' => $score->tier];\n        }\n\n        return response()->json(['routed' => count($routed), 'leads' => $routed]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q86-design-a-multi-model-ensemble-system-in-laravel",
      children: "Q86: Design a multi-model ensemble system in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Combine predictions from multiple models (e.g., Random Forest, Neural Net, XGBoost) via weighted averaging or a meta-model. This improves accuracy and robustness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class EnsemblePredictor\n{\n    private array $models;\n    private array $weights;\n\n    public function __construct()\n    {\n        $this->models = [\n            'random_forest' => PersistentModel::load(\n                new Filesystem(storage_path('models/ensemble/rf.model'))\n            ),\n            'neural_net' => PersistentModel::load(\n                new Filesystem(storage_path('models/ensemble/nn.model'))\n            ),\n            'gradient_boost' => PersistentModel::load(\n                new Filesystem(storage_path('models/ensemble/gb.model'))\n            ),\n        ];\n\n        // Weights from validation performance\n        $this->weights = [\n            'random_forest' => 0.35,\n            'neural_net' => 0.25,\n            'gradient_boost' => 0.40,\n        ];\n    }\n\n    public function predict(array $features): array\n    {\n        $dataset = new Unlabeled([$features]);\n        $predictions = [];\n\n        foreach ($this->models as $name => $model) {\n            $predictions[$name] = $model->predict($dataset)[0];\n        }\n\n        // Weighted average\n        $weightedSum = 0;\n        foreach ($predictions as $name => $value) {\n            $weightedSum += $value * ($this->weights[$name] ?? 0);\n        }\n\n        return [\n            'ensemble_score' => $weightedSum,\n            'individual_scores' => $predictions,\n            'variance' => $this->variance($predictions),\n        ];\n    }\n\n    private function variance(array $values): float\n    {\n        $mean = array_sum($values) / count($values);\n        $squaredDiffs = array_map(fn($v) => ($v - $mean) ** 2, $values);\n        return array_sum($squaredDiffs) / count($values);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q87-how-do-you-handle-concurrent-model-updates-without-downtime",
      children: "Q87: How do you handle concurrent model updates without downtime?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use a blue-green deployment pattern. Load the new model while the old one is still serving, then atomically swap the reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AtomicModelSwap\n{\n    private string $activeVersion = 'v1';\n    private array $loadedModels = [];\n\n    public function loadModel(string $name, string $version): void\n    {\n        $path = storage_path(\"models/{$name}-{$version}.model\");\n        $this->loadedModels[\"{$name}:{$version}\"] = PersistentModel::load(\n            new Filesystem($path)\n        );\n    }\n\n    public function predict(string $name, array $features): float\n    {\n        $key = \"{$name}:{$this->activeVersion}\";\n\n        if (!isset($this->loadedModels[$key])) {\n            $this->loadModel($name, $this->activeVersion);\n        }\n\n        return $this->loadedModels[$key]->predict(\n            new Unlabeled([$features])\n        )[0];\n    }\n\n    public function swap(string $name, string $newVersion): void\n    {\n        // Pre-load new model\n        $this->loadModel($name, $newVersion);\n\n        // Atomic swap\n        $oldVersion = $this->activeVersion;\n        $this->activeVersion = $newVersion;\n\n        // Clean up old model\n        unset($this->loadedModels[\"{$name}:{$oldVersion}\"]);\n        gc_collect_cycles();\n    }\n}\n\n// In deployment job\n$swapper = app(AtomicModelSwap::class);\n$swapper->loadModel('fraud', 'v4');\n$swapper->swap('fraud', 'v4');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool/Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ridge, Lasso, SVR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous target (price, demand)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NaiveBayes, RandomForest, MLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete labels (spam, fraud)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMeans, DBSCAN, GaussianMixture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment discovery (customers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IsolationForest, LOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outlier detection (fraud)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WordCountVectorizer + TF-IDF + NaiveBayes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentiment, topic labeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embeddings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI / HuggingFace API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search, RAG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pgvector, Qdrant, Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similarity search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel AI SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reasoning, generation, agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PersistentModel + Filesystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/load trained models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline + Transformers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent data leakage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A/B Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare model variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction logs + drift detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production quality assurance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key AI/ML concepts for interview preparation."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn from labeled data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification + regression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find patterns in unlabeled data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering + dimensionality reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn through environment interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reward-based optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model memorizes training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High variance, poor generalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Underfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model too simple for pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High bias, poor performance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for AI/ML interview topics."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised, Unsupervised, Reinforcement, Semi-supervised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, Precision, Recall, F1, RMSE, R-squared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP-ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification, Regression, Clustering, Association"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rubix ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelines, Neural networks, Anomaly detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel AI SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agents, Tools, Embeddings, RAG, MCP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labeled data requirement vs accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No labels needed vs evaluation difficulty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain expertise vs automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy vs interpretability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MLOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automation vs infrastructure complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your AI/ML interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the difference between supervised and unsupervised learning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Supervised uses labeled data, unsupervised uses unlabeled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) They are the same"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Unsupervised is always better"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Supervised uses reinforcement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>A) Supervised uses labeled data, unsupervised uses unlabeled</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What indicates overfitting?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Low training error, low test error"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) High training accuracy, poor test performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Poor performance on both sets"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Identical train and test error"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) High training accuracy, poor test performance</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " Which PHP library provides ML pipelines and neural networks?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) PHP-ML"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Rubix ML"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Laravel AI SDK"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) TensorFlow PHP"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) Rubix ML</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What does Laravel AI SDK's RAG enable?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Real-time analytics"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Retrieval-augmented generation with vector search"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Automated testing"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Database migrations"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Answer</summary>B) Retrieval-augmented generation with vector search</details>\n"
                  })
                })]
              })
            })]
          })
        })]
      })
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