"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[14257],{

/***/ 10158
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_15_ethics_ai_md_b44_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-15-ethics-ai-md-b44.json
const site_docs_courses_artificial_intelligence_15_ethics_ai_md_b44_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/15-ethics-ai","title":"Chapter 15: Ethics of Artificial Intelligence","description":"Previous Robotics | Next Expert Systems","source":"@site/docs/courses/artificial-intelligence/15-ethics-ai.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/15-ethics-ai","permalink":"/ai-engineering-journey/artificial-intelligence/15-ethics-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"id":"15-ethics-ai","slug":"/artificial-intelligence/15-ethics-ai","title":"Chapter 15: Ethics of Artificial Intelligence","sidebar_label":"Chapter 15: Ethics of Artificial Intelligence","sidebar_position":23},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 14: Robotics","permalink":"/ai-engineering-journey/artificial-intelligence/14-robotics"},"next":{"title":"Chapter 16: Expert Systems","permalink":"/ai-engineering-journey/artificial-intelligence/16-expert-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/15-ethics-ai.md


const frontMatter = {
	id: '15-ethics-ai',
	slug: '/artificial-intelligence/15-ethics-ai',
	title: 'Chapter 15: Ethics of Artificial Intelligence',
	sidebar_label: 'Chapter 15: Ethics of Artificial Intelligence',
	sidebar_position: 23
};
const contentTitle = 'Chapter 15: Ethics of Artificial Intelligence';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why AI Ethics Matters",
  "id": "why-ai-ethics-matters",
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
  "value": "15.1 Fairness and Bias",
  "id": "151-fairness-and-bias",
  "level": 2
}, {
  "value": "Real-World Analogy: The Biased Door",
  "id": "real-world-analogy-the-biased-door",
  "level": 3
}, {
  "value": "15.1.1 Sources of Bias: The Bias Types Table",
  "id": "1511-sources-of-bias-the-bias-types-table",
  "level": 3
}, {
  "value": "15.1.2 Mathematical Fairness Definitions",
  "id": "1512-mathematical-fairness-definitions",
  "level": 3
}, {
  "value": "15.1.3 Bias Detection in Python",
  "id": "1513-bias-detection-in-python",
  "level": 3
}, {
  "value": "15.1.4 Bias Mitigation Framework",
  "id": "1514-bias-mitigation-framework",
  "level": 3
}, {
  "value": "15.1.5 Case Study: COMPAS Recidivism Algorithm",
  "id": "1515-case-study-compas-recidivism-algorithm",
  "level": 3
}, {
  "value": "15.1.6 Advantages and Disadvantages of Fairness-Aware AI",
  "id": "1516-advantages-and-disadvantages-of-fairness-aware-ai",
  "level": 3
}, {
  "value": "15.1.7 Edge Cases in Fairness",
  "id": "1517-edge-cases-in-fairness",
  "level": 3
}, {
  "value": "15.2 Interpretability and Transparency",
  "id": "152-interpretability-and-transparency",
  "level": 2
}, {
  "value": "Real-World Analogy: The Surgeon&#39;s Explanation",
  "id": "real-world-analogy-the-surgeons-explanation",
  "level": 3
}, {
  "value": "15.2.1 The Transparency Spectrum",
  "id": "1521-the-transparency-spectrum",
  "level": 3
}, {
  "value": "15.2.2 LIME — Local Interpretable Model-Agnostic Explanations",
  "id": "1522-lime--local-interpretable-model-agnostic-explanations",
  "level": 3
}, {
  "value": "15.2.3 SHAP — SHapley Additive exPlanations",
  "id": "1523-shap--shapley-additive-explanations",
  "level": 3
}, {
  "value": "15.2.4 LIME vs SHAP — Decision Framework",
  "id": "1524-lime-vs-shap--decision-framework",
  "level": 3
}, {
  "value": "15.2.5 Case Study: Black-Box Medicine",
  "id": "1525-case-study-black-box-medicine",
  "level": 3
}, {
  "value": "15.2.6 Advantages and Disadvantages of Model Interpretability",
  "id": "1526-advantages-and-disadvantages-of-model-interpretability",
  "level": 3
}, {
  "value": "15.2.7 Edge Cases in Interpretability",
  "id": "1527-edge-cases-in-interpretability",
  "level": 3
}, {
  "value": "15.3 Privacy",
  "id": "153-privacy",
  "level": 2
}, {
  "value": "Real-World Analogy: The Glass House",
  "id": "real-world-analogy-the-glass-house",
  "level": 3
}, {
  "value": "15.3.1 Privacy Threats in AI",
  "id": "1531-privacy-threats-in-ai",
  "level": 3
}, {
  "value": "15.3.2 Differential Privacy — Formal Protection",
  "id": "1532-differential-privacy--formal-protection",
  "level": 3
}, {
  "value": "15.3.3 DP-SGD — Differentially Private Stochastic Gradient Descent",
  "id": "1533-dp-sgd--differentially-private-stochastic-gradient-descent",
  "level": 3
}, {
  "value": "15.3.4 Federated Learning — Privacy by Decentralization",
  "id": "1534-federated-learning--privacy-by-decentralization",
  "level": 3
}, {
  "value": "15.3.5 Case Study: The Netflix Prize Re-identification",
  "id": "1535-case-study-the-netflix-prize-re-identification",
  "level": 3
}, {
  "value": "15.3.6 Advantages and Disadvantages of Privacy-Preserving AI",
  "id": "1536-advantages-and-disadvantages-of-privacy-preserving-ai",
  "level": 3
}, {
  "value": "15.3.7 Edge Cases in AI Privacy",
  "id": "1537-edge-cases-in-ai-privacy",
  "level": 3
}, {
  "value": "15.4 Accountability",
  "id": "154-accountability",
  "level": 2
}, {
  "value": "Real-World Analogy: The Chain of Responsibility",
  "id": "real-world-analogy-the-chain-of-responsibility",
  "level": 3
}, {
  "value": "15.4.1 The Accountability Framework",
  "id": "1541-the-accountability-framework",
  "level": 3
}, {
  "value": "15.4.2 Implementing Accountability in Practice",
  "id": "1542-implementing-accountability-in-practice",
  "level": 3
}, {
  "value": "15.4.3 Case Study: Amazon&#39;s AI Hiring Tool",
  "id": "1543-case-study-amazons-ai-hiring-tool",
  "level": 3
}, {
  "value": "15.4.4 Advantages and Disadvantages of Accountability Mechanisms",
  "id": "1544-advantages-and-disadvantages-of-accountability-mechanisms",
  "level": 3
}, {
  "value": "15.4.5 Edge Cases in Accountability",
  "id": "1545-edge-cases-in-accountability",
  "level": 3
}, {
  "value": "15.5 AI Safety and Alignment",
  "id": "155-ai-safety-and-alignment",
  "level": 2
}, {
  "value": "Real-World Analogy: The Genie&#39;s Wish",
  "id": "real-world-analogy-the-genies-wish",
  "level": 3
}, {
  "value": "15.5.1 The Alignment Problem",
  "id": "1551-the-alignment-problem",
  "level": 3
}, {
  "value": "15.5.2 Types of Alignment Failures",
  "id": "1552-types-of-alignment-failures",
  "level": 3
}, {
  "value": "15.5.3 The Instrumental Convergence Thesis",
  "id": "1553-the-instrumental-convergence-thesis",
  "level": 3
}, {
  "value": "15.5.4 AI Safety Research Areas",
  "id": "1554-ai-safety-research-areas",
  "level": 3
}, {
  "value": "15.5.5 Case Study: Social Media Amplification",
  "id": "1555-case-study-social-media-amplification",
  "level": 3
}, {
  "value": "15.5.6 Advantages and Disadvantages of AI Safety Research",
  "id": "1556-advantages-and-disadvantages-of-ai-safety-research",
  "level": 3
}, {
  "value": "15.5.7 Edge Cases in AI Safety",
  "id": "1557-edge-cases-in-ai-safety",
  "level": 3
}, {
  "value": "15.6 Regulation and Governance",
  "id": "156-regulation-and-governance",
  "level": 2
}, {
  "value": "Real-World Analogy: Seatbelts and Speed Limits",
  "id": "real-world-analogy-seatbelts-and-speed-limits",
  "level": 3
}, {
  "value": "15.6.1 Major Regulatory Frameworks",
  "id": "1561-major-regulatory-frameworks",
  "level": 3
}, {
  "value": "15.6.2 The EU AI Act — Detailed Breakdown",
  "id": "1562-the-eu-ai-act--detailed-breakdown",
  "level": 3
}, {
  "value": "15.6.3 NIST AI Risk Management Framework",
  "id": "1563-nist-ai-risk-management-framework",
  "level": 3
}, {
  "value": "15.6.4 Advantages and Disadvantages of AI Regulation",
  "id": "1564-advantages-and-disadvantages-of-ai-regulation",
  "level": 3
}, {
  "value": "15.6.5 Edge Cases in AI Regulation",
  "id": "1565-edge-cases-in-ai-regulation",
  "level": 3
}, {
  "value": "AI Ethics Principles Comparison Table",
  "id": "ai-ethics-principles-comparison-table",
  "level": 2
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "15.A.1 COMPAS in US Criminal Justice",
  "id": "15a1-compas-in-us-criminal-justice",
  "level": 3
}, {
  "value": "15.A.2 Facial Recognition Bans",
  "id": "15a2-facial-recognition-bans",
  "level": 3
}, {
  "value": "15.A.3 Content Moderation at Scale",
  "id": "15a3-content-moderation-at-scale",
  "level": 3
}, {
  "value": "15.A.4 Healthcare AI Diagnostics",
  "id": "15a4-healthcare-ai-diagnostics",
  "level": 3
}, {
  "value": "15.A.5 Algorithmic Hiring",
  "id": "15a5-algorithmic-hiring",
  "level": 3
}, {
  "value": "15.A.6 Autonomous Vehicles",
  "id": "15a6-autonomous-vehicles",
  "level": 3
}, {
  "value": "Cross-Application Ethical Matrix",
  "id": "cross-application-ethical-matrix",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Ethical Dilemma Scenarios",
  "id": "ethical-dilemma-scenarios",
  "level": 3
}, {
  "value": "Scenario 1: The Self-Driving Car Dilemma",
  "id": "scenario-1-the-self-driving-car-dilemma",
  "level": 4
}, {
  "value": "Scenario 2: The Resume Scanner",
  "id": "scenario-2-the-resume-scanner",
  "level": 4
}, {
  "value": "Scenario 3: The Predictive Policing Model",
  "id": "scenario-3-the-predictive-policing-model",
  "level": 4
}, {
  "value": "Regulation Landscape",
  "id": "regulation-landscape",
  "level": 3
}, {
  "value": "Responsible AI — Practical Guide",
  "id": "responsible-ai--practical-guide",
  "level": 3
}, {
  "value": "Common Interview Questions",
  "id": "common-interview-questions",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — XAI Methods",
  "id": "quick-reference--xai-methods",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Case Study Analysis",
  "id": "case-study-analysis",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "Ethical Reasoning Problems",
  "id": "ethical-reasoning-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-15-ethics-of-artificial-intelligence",
        children: "Chapter 15: Ethics of Artificial Intelligence"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/14-robotics",
        children: "Chapter 14: Robotics"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/16-expert-systems",
        children: "Chapter 16: Expert Systems"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) identify sources of bias in AI systems; (2) apply interpretability techniques to explain model decisions; (3) analyze privacy implications of AI deployment; (4) explain the AI alignment problem and its significance; (5) describe major regulatory frameworks governing AI; (6) evaluate ethical trade-offs in real-world AI deployments; (7) implement fairness-aware machine learning pipelines; (8) articulate responsible AI principles across organizational contexts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/15-ethics-ai/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/15-ethics-ai/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/15-ethics-ai/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/15-ethics-ai/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/15-ethics-ai/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/15-ethics-ai/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-ai-ethics-matters",
      children: "Why AI Ethics Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you are handed the keys to a Ferrari — 900 horsepower, zero to sixty in 2.5 seconds, a machine of incredible capability. The engineer who built it says, \"It can go faster than anything on the road.\" But nobody gave you a steering wheel, brake pedal, or rearview mirror. There are no traffic laws, no speed limits, no lines painted on the road. Would you drive it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI ethics is exactly this: the steering wheel, brakes, and rules of the road for artificial intelligence. Technology without ethics is a Ferrari with no steering wheel — immense power with no control. Just as traffic rules do not slow us down but keep us alive, ethical frameworks do not hinder AI innovation — they ensure AI serves humanity rather than endangering it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The core insight:"
      }), " Every line of code you write carries an ethical consequence. A loan approval model can deny a family their dream home. A resume scanner can systematically exclude qualified candidates. A facial recognition system can lead to wrongful arrest. Ethics in AI is not a philosophy class bolted onto engineering — it is engineering, done properly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without ethics, we get:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bias amplification"
        }), ": Models that learn and magnify historical discrimination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Opacity"
        }), ": Black-box decisions that cannot be questioned or appealed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy erosion"
        }), ": Systems that memorize and expose sensitive data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accountability gaps"
        }), ": No one takes responsibility when AI causes harm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety failures"
        }), ": Catastrophic accidents from misaligned objectives"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The goal of this chapter is to equip you with the frameworks, tools, and mindset to build AI that is not just powerful, but trustworthy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness and Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data/algorithmic bias, fairness definitions, mitigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demographic parity, equalized odds, disparate impact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIME, SHAP, saliency maps, model debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature attribution, surrogate models, Shapley values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differential privacy, federated learning, membership inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epsilon-DP, secure aggregation, DP-SGD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial examples, data poisoning, model extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evasion attacks, poisoning rate, robust accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value learning, reward hacking, specification gaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer/inner alignment, instrumental convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EU AI Act, NIST AI RMF, GDPR, US Executive Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk categories, conformity assessment, compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Societal Impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labor displacement, inequality, misinformation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal basic income, algorithmic amplification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[AI Ethics] --> B[Fairness / Bias]\n    A --> C[Interpretability / Transparency]\n    C --> D[LIME / SHAP / Saliency]\n    A --> E[Privacy]\n    E --> F[Differential Privacy / FL]\n    A --> G[Security / Robustness]\n    A --> H[Alignment / Safety]\n    H --> I[Reward Hacking / Goal Misspecification]\n    A --> J[Governance / Regulation]\n    J --> K[EU AI Act / NIST RMF / GDPR]\n    A --> L[Societal Impact]\n    L --> M[Labor / Misinformation / Inequality]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-fairness-and-bias",
      children: "15.1 Fairness and Bias"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-biased-door",
      children: "Real-World Analogy: The Biased Door"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a building where the front door only opens for people over six feet tall. The architect didn't explicitly design it to exclude short people — they simply installed a sensor calibrated on the building's tall security guards. The door is \"fair\" by its own logic (it opens for anyone tall enough), but it is deeply unfair in practice. The problem is not the door mechanism — it is the data and assumptions used to calibrate it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI bias works the same way. The model is not malicious; it faithfully learns from data that reflects historical inequities, incomplete sampling, or flawed measurements. The result is a system that treats people differently based on race, gender, age, or other protected attributes — even when those attributes were never explicitly used as features."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1511-sources-of-bias-the-bias-types-table",
      children: "15.1.1 Sources of Bias: The Bias Types Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bias Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data does not accurately represent the target population"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facial recognition trained mostly on light-skinned faces performs poorly on dark-skinned individuals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stratified accuracy analysis across demographic groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Historical Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing societal prejudices are encoded in training labels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiring model trained on past decisions learns to prefer male candidates because historical hires were mostly male"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit label distribution across protected groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Measurement Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy variables are poor representations of the target construct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using zip code as a proxy for creditworthiness (correlates with race)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlation analysis between proxy and sensitive attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Label Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotator subjectivity or prejudice influences ground truth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content moderation labels vary by annotator demographic background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-annotator agreement analysis across demographics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Algorithmic Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model architecture or optimization amplifies disparities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation system creates filter bubbles by optimizing engagement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disparate impact analysis of model outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmation Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model/system reinforces existing beliefs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search engine ranks results that align with user's past clicks higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search result diversity metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sampling Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-random sampling creates unrepresentative data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survey data collected via smartphone app excludes elderly populations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Population distribution comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model is applied in contexts different from its training environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COVID-19 diagnosis model trained on hospital data fails in field clinics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain shift detection, covariate shift analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-size-fits-all model fails for subgroups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice recognition works better for male voices because training data was male-dominated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subgroup performance analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test set does not represent the real population"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Benchmark dataset lacks diversity, inflating reported accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demographic breakdown of test sets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1512-mathematical-fairness-definitions",
      children: "15.1.2 Mathematical Fairness Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Multiple mathematical definitions of fairness exist, and they are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mutually incompatible"
      }), " in general (Kleinberg et al., 2016 — the Impossibility Theorem of Fairness):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mathematical Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Demographic Parity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Ŷ = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = a) = P(Ŷ = 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction rate is equal across groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equal Opportunity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Ŷ = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y = 1, A = a) = P(Ŷ = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y = 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equalized Odds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Ŷ = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y = y, A = a) = P(Ŷ = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y = y) for y ∈ {0,1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Individual Fairness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d(Ŷ(x), Ŷ(x')) ≤ D(x, x')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar individuals receive similar predictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires a task-specific similarity metric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Counterfactual Fairness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Ŷ_{A=a} = y) = P(Ŷ_{A=a'} = y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction would be the same if protected attribute were different"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires causal knowledge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Impossibility Theorem:"
      }), " Unless base rates are identical across groups (P(Y=1|A=a) is equal for all a) or the predictor is perfect, demographic parity and equalized odds cannot both be satisfied simultaneously. This is not a limitation of these specific definitions — it is a mathematical fact about any two fairness criteria that impose different constraints on the confusion matrix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1513-bias-detection-in-python",
      children: "15.1.3 Bias Detection in Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import confusion_matrix, accuracy_score\n\n# Simulated hiring data (in practice, use real datasets like COMPAS, Adult Income)\nnp.random.seed(42)\nn_samples = 2000\n\n# Protected attribute: gender (0 = Male, 1 = Female)\ngender = np.random.binomial(1, 0.5, n_samples)\n\n# Features correlated with outcome but also with protected attribute\nexperience = np.random.normal(5, 2, n_samples)\nexperience[gender == 1] -= 0.5  # Slight historical bias in experience\n\n# Qualification score (unbiased)\nqualification = np.random.normal(70, 15, n_samples)\n\n# Historical hiring decisions (biased — favors male applicants)\n# The bias is encoded in the training labels, not just features\nlogit = 0.1 * experience + 0.05 * qualification - 2.0 * gender\nprob = 1 / (1 + np.exp(-logit))\nhired = np.random.binomial(1, prob)\n\ndf = pd.DataFrame({\n    'experience': experience,\n    'qualification': qualification,\n    'gender': gender,\n    'hired': hired,\n    'gender_label': ['Male' if g == 0 else 'Female' for g in gender]\n})\n\nprint(\"=== Dataset Overview ===\")\nprint(df.groupby('gender_label')['hired'].mean())\nprint()\n\n# Split and train model\nX = df[['experience', 'qualification']]\ny = df['hired']\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\ngender_test = gender[X_test.index]\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\n\nprint(\"=== Model Accuracy ===\")\nprint(f\"Overall: {accuracy_score(y_test, y_pred):.3f}\")\n\n# Fairness Audit\nprint(\"\\n=== Fairness Audit ===\")\nfor g_val, g_label in [(0, 'Male'), (1, 'Female')]:\n    mask = gender_test == g_val\n    if mask.sum() == 0:\n        continue\n    cm = confusion_matrix(y_test[mask], y_pred[mask])\n    tn, fp, fn, tp = cm.ravel()\n    tpr = tp / (tp + fn) if (tp + fn) > 0 else 0\n    fpr = fp / (fp + tn) if (fp + tn) > 0 else 0\n    pos_rate = y_pred[mask].mean()\n    print(f\"\\n{g_label} Group:\")\n    print(f\"  Positive Prediction Rate (Demographic Parity): {pos_rate:.3f}\")\n    print(f\"  True Positive Rate (Equal Opportunity): {tpr:.3f}\")\n    print(f\"  False Positive Rate: {fpr:.3f}\")\n\n# Demographic Parity Difference\ndpp = y_pred[gender_test == 0].mean() - y_pred[gender_test == 1].mean()\nprint(f\"\\n=== Fairness Metrics ===\")\nprint(f\"Demographic Parity Difference: {abs(dpp):.3f} (ideal = 0)\")\n\n# Equal Opportunity Difference\ntpr_male = confusion_matrix(y_test[gender_test == 0], y_pred[gender_test == 0])\ntpr_female = confusion_matrix(y_test[gender_test == 1], y_pred[gender_test == 1])\ntpr_male = tpr_male[1,1] / tpr_male[1,:].sum() if tpr_male[1,:].sum() > 0 else 0\ntpr_female = tpr_female[1,1] / tpr_female[1,:].sum() if tpr_female[1,:].sum() > 0 else 0\nprint(f\"Equal Opportunity Difference: {abs(tpr_male - tpr_female):.3f} (ideal = 0)\")\n\nprint(f\"\\n=== Verdict ===\")\nif abs(dpp) > 0.1:\n    print(\"WARNING: Potential demographic parity violation detected!\")\nif abs(tpr_male - tpr_female) > 0.1:\n    print(\"WARNING: Potential equal opportunity violation detected!\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output interpretation:"
      }), " The audit reveals that even when gender is not used as a feature, the model can produce biased outcomes because correlated features (experience) carry historical discrimination. This is why fairness auditing must check outcomes, not just inputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1514-bias-mitigation-framework",
      children: "15.1.4 Bias Mitigation Framework"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reweighing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign different weights to training samples to ensure fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fairlearn.preprocessing.Reweighing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May reduce overall accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disparate Impact Remover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform feature values to remove group-based distinctions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data transformation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synthetic Data Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate balanced training examples for underrepresented groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMOTE, GAN-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May introduce artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial Debiasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Train model to predict target while adversary cannot predict protected attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fairlearn.reductions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex training, sensitive to hyperparameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness Regularization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add fairness constraints to loss function"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Custom loss, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tensorflow"
            }), " constraints"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increases training time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Post-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold Modification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use different decision thresholds per group to equalize outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROC threshold tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May reduce per-group accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Post-processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calibration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust prediction probabilities per group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platt scaling per group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires validation data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example: Post-processing via threshold modification\nfrom sklearn.metrics import roc_curve\n\ndef find_equal_opportunity_thresholds(y_true, y_prob, protected):\n    \"\"\"Find per-group thresholds that equalize True Positive Rate.\"\"\"\n    thresholds = {}\n    groups = np.unique(protected)\n    target_tpr = None\n    \n    for g in groups:\n        mask = protected == g\n        fpr, tpr, thresh = roc_curve(y_true[mask], y_prob[mask])\n        if target_tpr is None:\n            target_tpr = tpr  # Use first group's TPR as target\n        # Find threshold that gives closest TPR to target\n        idx = np.argmin(np.abs(tpr - target_tpr[0]))\n        thresholds[g] = thresh[min(idx, len(thresh)-1)]\n    \n    return thresholds\n\n# Usage\ny_prob = model.predict_proba(X_test)[:, 1]\nthresholds = find_equal_opportunity_thresholds(y_test.values, y_prob, gender_test)\nprint(\"Per-group thresholds:\", thresholds)\ny_pred_fair = np.array([y_prob[i] >= thresholds[gender_test[i]] for i in range(len(y_prob))])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1515-case-study-compas-recidivism-algorithm",
      children: "15.1.5 Case Study: COMPAS Recidivism Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " Correctional Offender Management Profiling for Alternative Sanctions (COMPAS) is a commercial risk assessment tool used by US courts to predict a defendant's likelihood of reoffending. Developed by Northpointe (now Equivant), it has been deployed in jurisdictions across Arizona, Florida, New York, and others."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Controversy:"
      }), " ProPublica's 2016 investigation analyzed COMPAS scores for over 7,000 defendants in Broward County, Florida. The findings were stark:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "White Defendants"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Black Defendants"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Labeled high-risk but did not reoffend (False Positive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "23.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "44.9%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Labeled low-risk but did reoffend (False Negative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "47.7%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "28.0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overall accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "63%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "63%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      }), " While the model achieved similar overall accuracy across groups, it systematically:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-predicted"
        }), " recidivism for Black defendants (nearly 2x the false positive rate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under-predicted"
        }), " recidivism for White defendants"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is the classic \"fairness through unawareness\" failure — the model did not use race as a feature, but correlated features (criminal history, socioeconomic factors) encoded racial disparities in the justice system."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overall accuracy is insufficient"
        }), " — subgroup analysis is mandatory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failing to use protected attributes does not guarantee fairness"
        }), " — proxy variables are everywhere"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Different fairness metrics can produce opposite conclusions"
        }), " — Northpointe defended COMPAS using equalized odds (similar accuracy), while ProPublica used false positive parity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment context matters"
        }), " — a tool validated in one jurisdiction may fail in another"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparency requirements"
        }), " — proprietary algorithms cannot be properly audited by defendants or their counsel"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1516-advantages-and-disadvantages-of-fairness-aware-ai",
      children: "15.1.6 Advantages and Disadvantages of Fairness-Aware AI"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces discrimination and promotes social justice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single definition of fairness — incompatible criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Improves model robustness across diverse populations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness constraints can reduce overall accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds trust with users and stakeholders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy variables can reintroduce bias even after mitigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increasingly required by regulation (EU AI Act)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational cost of fairness auditing and retraining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Better generalization to new populations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sensitive attribute data, raising privacy concerns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Early detection of data quality issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot fully compensate for deeply biased training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive advantage in ethical branding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to explain fairness-explicit decisions to non-technical stakeholders"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1517-edge-cases-in-fairness",
      children: "15.1.7 Edge Cases in Fairness"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intersectionality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias is not additive — being Black AND female creates distinct harms not captured by single-attribute metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard fairness metrics check one attribute at a time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersectional analysis, disaggregated evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fairness Ratios"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A 0.8 ratio (80% rule) is a common threshold — but is 0.79 very different from 0.81?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary thresholds create cliff effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous fairness reporting, not pass/fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Small Subgroups"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A demographic group may have too few samples for statistically meaningful fairness analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High variance in metric estimates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian fairness estimation, confidence intervals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feedback Loops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A biased model changes the system, which changes future data, which entrenches bias further (e.g., predictive policing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static fairness metrics miss dynamic effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longitudinal fairness monitoring, causal analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fairness vs. Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking for bias requires demographic data, but collecting demographic data raises privacy concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tension between transparency and privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differential privacy for fairness audits, encrypted computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution Shift"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A model that is fair in the training distribution may become unfair when deployment data shifts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness is not invariant under distribution shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous monitoring, domain adaptation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multimodal Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias in vision models can compound with bias in language models when systems use both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-modal bias amplification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint fairness evaluation across modalities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-interpretability-and-transparency",
      children: "15.2 Interpretability and Transparency"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-surgeons-explanation",
      children: "Real-World Analogy: The Surgeon's Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you are about to undergo a serious surgery. The surgeon says, \"Trust me, I've done thousands of these.\" When you ask why they are making a particular incision, they reply, \"The neural network in my brain just computed it — I cannot tell you the reasoning, but it is 97% accurate.\" Would you consent?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the problem with black-box AI. Transparency — the ability to understand and explain decisions — is not a luxury; it is a prerequisite for trust, accountability, and error correction. Just as a surgeon must articulate their clinical reasoning, an AI system deployed in high-stakes environments must provide explanations that can be inspected, questioned, and appealed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1521-the-transparency-spectrum",
      children: "15.2.1 The Transparency Spectrum"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Models"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Interpretability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "White-box"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully interpretable by design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision trees (depth ≤ 3), Linear/Logistic regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grey-box"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partially interpretable with approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient-boosted trees, rule-based systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Black-box"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not directly interpretable; requires post-hoc methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep neural networks, ensemble methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Post-hoc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability methods applied after training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIME, SHAP, Grad-CAM, Integrated Gradients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Depends on method"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1522-lime--local-interpretable-model-agnostic-explanations",
      children: "15.2.2 LIME — Local Interpretable Model-Agnostic Explanations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " For any individual prediction, LIME:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perturbs the input (creates variations of the original sample)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gets predictions from the black-box model for each perturbation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weights perturbations by proximity to the original input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fits a simple, interpretable surrogate model (e.g., linear regression) on the perturbed dataset"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The surrogate model's coefficients become the explanation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom lime.lime_tabular import LimeTabularExplainer\n\n# Load data\ndata = load_breast_cancer()\nX, y = data.data, data.target\nfeature_names = data.feature_names\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train black-box model\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_train, y_train)\nprint(f\"Model accuracy: {rf.score(X_test, y_test):.3f}\")\n\n# Create LIME explainer\nexplainer = LimeTabularExplainer(\n    X_train,\n    feature_names=feature_names,\n    class_names=['Malignant', 'Benign'],\n    mode='classification'\n)\n\n# Explain a single prediction\nidx = 10\nexp = explainer.explain_instance(X_test[idx], rf.predict_proba, num_features=5)\nprint(f\"\\n=== LIME Explanation for Sample {idx} ===\")\nprint(f\"True label: {'Benign' if y_test[idx] == 1 else 'Malignant'}\")\nprint(f\"Prediction: {rf.predict(X_test[idx].reshape(1, -1))[0]}\")\nprint(\"\\nFeature contributions (to 'Benign' prediction):\")\nfor feature, weight in exp.as_list():\n    direction = \"INCREASES\" if weight > 0 else \"DECREASES\"\n    icon = \"▲\" if weight > 0 else \"▼\"\n    print(f\"  {icon} {feature}: {abs(weight):.4f} ({direction})\")\n\n# Visualize\nfig = exp.as_pyplot_figure()\nplt.tight_layout()\nplt.savefig('lime_explanation.png', dpi=150, bbox_inches='tight')\nplt.close()\nprint(\"\\n[LIME visualization saved to lime_explanation.png]\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " LIME tells you which features drove a specific decision. For a loan denial, LIME might reveal that \"income < $30,000\" was the primary factor — but it might also reveal that \"zip code\" (a proxy for race) was influential."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1523-shap--shapley-additive-explanations",
      children: "15.2.3 SHAP — SHapley Additive exPlanations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theoretical foundation:"
      }), " SHAP uses Shapley values from cooperative game theory. Each feature is a \"player\" in a coalition (the feature set), and its contribution is its average marginal contribution across all possible coalitions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties that make SHAP theoretically superior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Efficiency:"
        }), " Feature contributions sum to the prediction minus the average prediction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetry:"
        }), " Two features with identical contributions get the same Shapley value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dummy feature:"
        }), " A feature that never changes the prediction gets value 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Additivity:"
        }), " Shapley values can be summed across features"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "try:\n    import shap\nexcept ImportError:\n    print(\"Installing shap library...\")\n    import subprocess\n    import sys\n    subprocess.check_call([sys.executable, \"-m\", \"pip\", \"install\", \"shap\"])\n    import shap\n\n# Initialize SHAP explainer\nexplainer_shap = shap.TreeExplainer(rf)\nshap_values = explainer_shap.shap_values(X_test[:100])\n\n# Summary plot (global interpretability)\nshap.summary_plot(shap_values[0], X_test[:100], feature_names=feature_names, show=False)\nplt.savefig('shap_summary.png', dpi=150, bbox_inches='tight')\nplt.close()\nprint(\"[SHAP summary plot saved to shap_summary.png]\")\n\n# Force plot (local interpretability)\nshap.force_plot(\n    explainer_shap.expected_value[1],\n    shap_values[1][0, :],\n    X_test[0, :],\n    feature_names=feature_names,\n    matplotlib=True,\n    show=False\n)\nplt.savefig('shap_force.png', dpi=150, bbox_inches='tight')\nplt.close()\nprint(\"[SHAP force plot saved to shap_force.png]\")\n\n# Feature importance (global)\nfeature_importance = np.abs(shap_values[1]).mean(axis=0)\nsorted_idx = np.argsort(feature_importance)\nprint(\"\\n=== Global Feature Importance (SHAP) ===\")\nfor i in sorted_idx[-5:]:\n    print(f\"  {feature_names[i]}: {feature_importance[i]:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1524-lime-vs-shap--decision-framework",
      children: "15.2.4 LIME vs SHAP — Decision Framework"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "LIME"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "SHAP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Theoretical guarantees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None (heuristic surrogate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong (game theory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computational cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Slow (exponential in features)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global explanations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (individual predictions only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (summary plots)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unstable — different perturbations → different explanations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Consistent (symmetry property)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles feature correlation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Better (considers all subsets)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ease of use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Quick, interactive debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Formal audit, research, publication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1525-case-study-black-box-medicine",
      children: "15.2.5 Case Study: Black-Box Medicine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A hospital deploys a deep learning model to predict sepsis 12 hours before onset. The model achieves 94% AUC — better than doctors. However, when a patient dies despite the model predicting \"no sepsis,\" the family sues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The transparency problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The model is a proprietary neural network — no explanation available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIME reveals the model relied heavily on \"respiratory rate\" — which was normal because the patient was on a ventilator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The model failed because it was trained on data where most patients were not ventilated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With SHAP, the development team discovers the model systematically under-predicts for patients with pre-existing conditions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution:"
      }), " The hospital mandates that all clinical AI systems must produce SHAP explanations stored in the patient's medical record. When a model's prediction contradicts clinical judgment, the explanation is reviewed by a committee."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaway:"
      }), " In high-stakes domains, interpretability is not optional — it is a legal and ethical requirement. The GDPR includes a \"right to explanation\" for automated decisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1526-advantages-and-disadvantages-of-model-interpretability",
      children: "15.2.6 Advantages and Disadvantages of Model Interpretability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds trust with users and regulators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explanations can be misleading (false confidence)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables debugging and error analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incompatible with some high-performance architectures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Required for regulatory compliance (GDPR, EU AI Act)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational overhead during inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Helps detect proxy discrimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users may over-rely on simplified explanations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facilitates model improvement and iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different methods can give conflicting explanations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports scientific discovery (insights from model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explanations can be gamed or manipulated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for contestability and appeals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explanations of complex models are necessarily incomplete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1527-edge-cases-in-interpretability",
      children: "15.2.7 Edge Cases in Interpretability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Explanation instability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small input changes produce very different LIME explanations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User loses trust in the method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average over multiple perturbation runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feature correlation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two correlated features both receive low SHAP values, but neither without the other is important"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misattribution of importance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHAP interaction values, conditional dependence analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adversarial explanations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inputs crafted to produce innocuous explanations for harmful decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory evasion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robust explanation methods, adversarial training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User cognitive load"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full SHAP summary plot with 1000 features is incomprehensible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explanation is too complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical explanations, top-K features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concept drift"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Features that matter today may not matter tomorrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explanations become stale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous explanation monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Counterfactual accessibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"You would have been approved if your income were $500 higher\" — but the user cannot change income"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explanation is truthful but unhelpful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide actionable counterfactuals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-privacy",
      children: "15.3 Privacy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-glass-house",
      children: "Real-World Analogy: The Glass House"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine living in a house made entirely of glass. Everyone can see what you eat, who you talk to, when you sleep. Your medical prescriptions are visible from the street. Your financial transactions are displayed on the walls. The builder says, \"Don't worry — I only analyze the data to help you. Nothing will be misused.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the state of AI privacy today. Every search query, purchase, location ping, and social media interaction feeds AI systems that know more about us than we know about ourselves. The glass house is comfortable when it provides personalized recommendations — and terrifying when that data is leaked, sold, or used against us."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1531-privacy-threats-in-ai",
      children: "15.3.1 Privacy Threats in AI"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Severity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker reconstructs training data from model parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstructing faces from a facial recognition model's weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Membership Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker determines if a specific individual was in the training set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking if a patient's records were used in a hospital's research model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attribute Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker infers sensitive attributes not directly in the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inferring sexual orientation from purchase history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Breach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data is directly exposed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hospital patient data leaked from an ML pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Extraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker reconstructs a copy of the model using query access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stealing a proprietary recommendation system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linkage Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymized data is re-identified by joining with public datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Netflix Prize dataset re-identified using IMDb ratings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1532-differential-privacy--formal-protection",
      children: "15.3.2 Differential Privacy — Formal Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " An algorithm M is ε-differentially private if for any two datasets D and D' that differ by only one record, and for any output S:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(M(D) ∈ S) ≤ e^ε · P(M(D') ∈ S)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What this means in practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding or removing any individual's data does not significantly change the output distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An attacker cannot confidently infer whether a specific person contributed to the training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε (epsilon) controls the privacy-accuracy trade-off: lower ε = more privacy, less accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\ndef dp_simple_mean(data, epsilon, sensitivity=1.0):\n    \"\"\"\n    Compute the mean of a dataset with differential privacy.\n    Uses the Laplace mechanism.\n    \"\"\"\n    true_mean = np.mean(data)\n    # Laplace noise: scale = sensitivity / epsilon\n    noise = np.random.laplace(0, sensitivity / (epsilon * len(data)))\n    private_mean = true_mean + noise\n    return private_mean, true_mean\n\n# Example: releasing average salary with privacy\nnp.random.seed(42)\nn_employees = 1000\ntrue_salaries = np.random.normal(65000, 15000, n_employees)\ntrue_salaries = np.clip(true_salaries, 30000, 200000)\n\nprint(\"=== Differential Privacy — Mean Salary ===\")\nprint(f\"True average salary: ${true_salaries.mean():.2f}\")\n\nfor eps in [0.01, 0.1, 0.5, 1.0, 5.0]:\n    private_mean, true = dp_simple_mean(true_salaries, eps)\n    error = abs(private_mean - true)\n    print(f\"  ε = {eps:.2f}: Private mean = ${private_mean:.2f} (error = ${error:.2f})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Understanding epsilon values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε = 0.01: Extremely strong privacy (output is mostly noise)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε = 0.1: Strong privacy (useful for aggregates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε = 1.0: Moderate privacy (common in production systems)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε = 5.0: Weak privacy (meaningful guarantees are limited)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε = 10+: Essentially no privacy protection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1533-dp-sgd--differentially-private-stochastic-gradient-descent",
      children: "15.3.3 DP-SGD — Differentially Private Stochastic Gradient Descent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most practical technique for private ML: add calibrated noise to gradients during training."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom torch.utils.data import DataLoader, TensorDataset\n\ndef dp_sgd_training(model, X_train, y_train, epsilon, delta=1e-5, \n                    batch_size=64, lr=0.01, epochs=5):\n    \"\"\"\n    Simplified DP-SGD implementation.\n    In production, use opacus or tensorflow-privacy.\n    \"\"\"\n    dataset = TensorDataset(torch.FloatTensor(X_train), torch.FloatTensor(y_train))\n    loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)\n    optimizer = optim.SGD(model.parameters(), lr=lr)\n    criterion = nn.BCEWithLogitsLoss()\n    \n    noise_multiplier = np.sqrt(2 * np.log(1.25 / delta)) / (epsilon * batch_size / len(X_train))\n    print(f\"Noise multiplier: {noise_multiplier:.4f}\")\n    \n    for epoch in range(epochs):\n        total_loss = 0\n        for batch_X, batch_y in loader:\n            optimizer.zero_grad()\n            outputs = model(batch_X).squeeze()\n            loss = criterion(outputs, batch_y)\n            loss.backward()\n            \n            # Step 1: Clip gradients (per-sample)\n            total_norm = 0\n            for param in model.parameters():\n                if param.grad is not None:\n                    param_norm = param.grad.data.norm(2)\n                    total_norm += param_norm.item() ** 2\n            total_norm = total_norm ** 0.5\n            \n            clip_val = 1.0  # Gradient clipping threshold\n            for param in model.parameters():\n                if param.grad is not None:\n                    param.grad.data.mul_(clip_val / max(total_norm, clip_val))\n                    \n                    # Step 2: Add Gaussian noise\n                    noise = torch.normal(0, noise_multiplier * clip_val, size=param.grad.shape)\n                    param.grad.data.add_(noise)\n            \n            optimizer.step()\n            total_loss += loss.item()\n        \n        print(f\"Epoch {epoch+1}: Loss = {total_loss/len(loader):.4f}\")\n    \n    return model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1534-federated-learning--privacy-by-decentralization",
      children: "15.3.4 Federated Learning — Privacy by Decentralization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A central model is distributed to participating devices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each device trains on its local data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only model updates (gradients), not raw data, are sent to the server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates are aggregated using techniques like Federated Averaging (FedAvg)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def federated_averaging(global_model, client_updates):\n    \"\"\"\n    FedAvg: weighted average of client model updates.\n    \"\"\"\n    global_dict = global_model.state_dict()\n    \n    with torch.no_grad():\n        for key in global_dict.keys():\n            # Weighted average of client updates\n            total_weight = sum(w for _, w in client_updates)\n            weighted_sum = torch.zeros_like(global_dict[key])\n            \n            for client_update, weight in client_updates:\n                weighted_sum += (weight / total_weight) * client_update[key]\n            \n            global_dict[key] = weighted_sum\n    \n    global_model.load_state_dict(global_dict)\n    return global_model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use Federated Learning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Healthcare (hospitals cannot share patient data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Mobile keyboards (Google Gboard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Voice assistants (on-device personalization)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Not suitable when communication bandwidth is limited"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Not suitable for non-IID data (client distributions differ significantly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Does not guarantee privacy against gradient inversion attacks (must combine with DP)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1535-case-study-the-netflix-prize-re-identification",
      children: "15.3.5 Case Study: The Netflix Prize Re-identification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " In 2006, Netflix released 100 million anonymized movie ratings for a competition to improve its recommendation system. The data was \"anonymized\" — user IDs were replaced with random numbers, and all identifying information was removed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The attack:"
      }), " Researchers at the University of Texas demonstrated that by cross-referencing the \"anonymous\" dataset with public IMDb ratings (where users sometimes use their real names), they could re-identify individual users. With just a few movie ratings and dates (often available from public reviews), they could uniquely match a user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A known user's political preferences, religious views, and sexual orientation were inferred from their movie ratings — despite no demographic data being included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A lawsuit was filed under the Video Privacy Protection Act"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix canceled a second competition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anonymization is not sufficient"
        }), " — linkage attacks can re-identify \"anonymous\" data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k-anonymity and related concepts"
        }), " are necessary but not sufficient"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Differential privacy"
        }), " would have prevented this attack (adding noise ensures that individual contributions cannot be distinguished)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata is data"
        }), " — ratings alone, without names or demographics, can reveal identity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1536-advantages-and-disadvantages-of-privacy-preserving-ai",
      children: "15.3.6 Advantages and Disadvantages of Privacy-Preserving AI"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protects individuals from data misuse and re-identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces model accuracy (privacy-utility trade-off)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables compliance with regulations (GDPR, CCPA, HIPAA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased computational overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds user trust and brand value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to implement correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables collaboration on sensitive data (healthcare)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult to explain privacy guarantees to non-experts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces liability from data breaches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard DP implementations require careful hyperparameter tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term sustainability of data-sharing ecosystems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May provide false sense of security if poorly implemented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1537-edge-cases-in-ai-privacy",
      children: "15.3.7 Edge Cases in AI Privacy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correlated data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Family members' data is correlated — DP assumes independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy loss accumulates across correlated individuals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group differential privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterative queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple DP queries compound privacy loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε budget is exhausted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy accounting, composability theorems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gradient inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federated Learning gradients can reconstruct training images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FL alone does not guarantee privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine FL with DP-SGD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side-channel attacks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timing, power consumption, or memory access patterns leak information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard DP does not cover side channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data provenance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data includes public data with different privacy expectations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed-privacy regimes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered privacy guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Right to be forgotten"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing an individual's contribution from a trained model (machine unlearning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact unlearning is expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate unlearning, sharded models"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-accountability",
      children: "15.4 Accountability"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-chain-of-responsibility",
      children: "Real-World Analogy: The Chain of Responsibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a bridge collapses, we do not ask \"What was the bridge thinking?\" We ask: \"Who designed it? Who inspected the materials? Who signed off on the load calculations? Who approved the budget that cut corners?\" Responsibility flows through a chain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In AI, accountability is often absent. When a self-driving car hits a pedestrian, the company blames the driver, the developer blames the training data, and the data team blames the labeling vendor. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "responsibility gap"
      }), " — when no human can meaningfully be held responsible for an AI system's actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-the-accountability-framework",
      children: "15.4.1 The Accountability Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Effective AI accountability requires four pillars:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pillar"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auditability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System decisions are logged and reviewable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full audit trails: input, output, model version, confidence, timestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contestability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Affected individuals can challenge automated decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appeal process with human review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Responsibility Assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear ownership for AI system outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RACI matrix for each AI system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remediation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanisms to correct harmful outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback capability, compensation framework"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-implementing-accountability-in-practice",
      children: "15.4.2 Implementing Accountability in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# AI Audit Log System\nfrom datetime import datetime\nimport json\nimport hashlib\n\nclass AIAuditLog:\n    \"\"\"\n    Immutable audit log for AI system decisions.\n    Each decision is recorded with full context and a cryptographic hash\n    chain to prevent tampering.\n    \"\"\"\n    def __init__(self):\n        self.entries = []\n        self.previous_hash = \"0\" * 64\n    \n    def record_decision(self, input_data, model_name, model_version, \n                        prediction, confidence, human_reviewer=None):\n        timestamp = datetime.utcnow().isoformat()\n        \n        entry = {\n            'timestamp': timestamp,\n            'model_name': model_name,\n            'model_version': model_version,\n            'input_hash': hashlib.sha256(\n                str(input_data).encode()\n            ).hexdigest(),\n            'prediction': str(prediction),\n            'confidence': confidence,\n            'human_reviewer': human_reviewer,\n            'decision_id': hashlib.sha256(\n                f\"{timestamp}{model_name}{str(prediction)}\".encode()\n            ).hexdigest()[:16]\n        }\n        \n        # Chain hash (tamper evidence)\n        entry_hash_input = str(entry) + self.previous_hash\n        entry['chain_hash'] = hashlib.sha256(\n            entry_hash_input.encode()\n        ).hexdigest()\n        self.previous_hash = entry['chain_hash']\n        \n        self.entries.append(entry)\n        return entry['decision_id']\n    \n    def verify_integrity(self):\n        \"\"\"Verify the entire audit chain has not been tampered.\"\"\"\n        for i, entry in enumerate(self.entries):\n            expected_hash = \"0\" * 64 if i == 0 else self.entries[i-1]['chain_hash']\n            entry_copy = {k: v for k, v in entry.items() if k != 'chain_hash'}\n            computed_hash = hashlib.sha256(\n                (str(entry_copy) + expected_hash).encode()\n            ).hexdigest()\n            if computed_hash != entry['chain_hash']:\n                return False, i\n        return True, -1\n    \n    def export(self, filepath):\n        with open(filepath, 'w') as f:\n            json.dump(self.entries, f, indent=2)\n\n# Usage\nlog = AIAuditLog()\nlog.record_decision(\n    input_data={'income': 45000, 'credit_score': 690, 'loan_amount': 50000},\n    model_name='loan_approval_v3',\n    model_version='3.2.1',\n    prediction='DENIED',\n    confidence=0.87,\n    human_reviewer=None  # Automated decision\n)\nlog.record_decision(\n    input_data={'income': 95000, 'credit_score': 740, 'loan_amount': 100000},\n    model_name='loan_approval_v3',\n    model_version='3.2.1',\n    prediction='APPROVED',\n    confidence=0.93,\n    human_reviewer='Jane.Smith@bank.com'\n)\n\nprint(f\"Audit log integrity: {'PASS' if log.verify_integrity()[0] else 'FAIL'}\")\nprint(f\"Decisions recorded: {len(log.entries)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1543-case-study-amazons-ai-hiring-tool",
      children: "15.4.3 Case Study: Amazon's AI Hiring Tool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Background:"
      }), " In 2014, Amazon built an AI recruiting tool to automate resume screening. The system was trained on 10 years of Amazon's hiring data — a dataset dominated by male applicants, reflecting the tech industry's gender imbalance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The failure:"
      }), " By 2015, the team realized the system was systematically penalizing resumes containing the word \"women's\" (e.g., \"women's chess club captain\") and graduates of all-women's colleges. The model had learned that Amazon prefers male candidates because that is what its training data showed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accountability analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Who was responsible?"
        }), " Amazon's development team. But no individual was found \"at fault.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Was there an audit trail?"
        }), " Initially, no — the model was a black box."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Could applicants contest?"
        }), " No — applicants did not even know an AI was screening them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution:"
        }), " Amazon scrapped the project, but by then, hundreds of thousands of applicants had been processed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Systemic failures:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No fairness audit before deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No transparency for affected applicants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear ownership of outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No contestability mechanism"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What should have been done:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-deployment bias audit (check demographic parity, equal opportunity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular fairness monitoring in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-in-the-loop review of AI-rejected applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparent disclosure to applicants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear assignment of responsibility for hiring outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1544-advantages-and-disadvantages-of-accountability-mechanisms",
      children: "15.4.4 Advantages and Disadvantages of Accountability Mechanisms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures responsibility for AI outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds operational overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables affected parties to seek redress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May slow down automated decision-making"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds organizational learning from failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires significant cultural shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Required by regulation (EU AI Act for high-risk systems)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult to enforce across supply chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces legal liability through documented processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Accountability washing\" — performative compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Improves system quality through post-hoc analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsibility gaps are hard to close for autonomous systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1545-edge-cases-in-accountability",
      children: "15.4.5 Edge Cases in Accountability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple stakeholders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model trained by vendor, deployed by company, used by third party"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single entity has full control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear contractual allocation of responsibilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adaptive systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model continuously learns and changes behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who is responsible for decisions made after the model has drifted?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned audit trails, retraining approval gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed responsibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure depends on data quality + model design + deployment context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single team is the \"root cause\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System-level accountability, not individual blame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rapid deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI deployed during emergency (e.g., pandemic triage tool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time pressure bypasses accountability controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-authorized emergency protocols with post-hoc review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jurisdictional ambiguity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model trained in one country, deployed in another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whose regulations apply?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strictest-jurisdiction compliance, cross-border agreements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-ai-safety-and-alignment",
      children: "15.5 AI Safety and Alignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-genies-wish",
      children: "Real-World Analogy: The Genie's Wish"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In every story about a wish-granting genie, the wisher gets exactly what they asked for — and immediately regrets it. \"I wish to be rich\" → the wisher turns to gold. \"I wish to be powerful\" → the wisher becomes a tyrant everyone despises. The problem is not that the genie is malevolent — it is that the genie is literal and unbounded. It perfectly optimizes for the literal wish, with no understanding of human values, context, or common sense."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alignment problem"
      }), " in AI. We are building increasingly powerful \"genies\" — optimization engines that pursue goals with superhuman effectiveness. The challenge is ensuring that what we ", (0,jsx_runtime.jsx)(_components.em, {
        children: "ask for"
      }), " (the specified objective) matches what we ", (0,jsx_runtime.jsx)(_components.em, {
        children: "actually want"
      }), " (human values)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1551-the-alignment-problem",
      children: "15.5.1 The Alignment Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The alignment problem asks: How do we ensure AI systems reliably pursue the objectives intended by their designers (and by extension, humanity), even as their capabilities grow?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Illustrating reward hacking with a simple gridworld example\nimport numpy as np\n\nclass CleaningRobotEnvironment:\n    \"\"\"\n    Simplified environment showing reward hacking.\n    The robot is supposed to clean dirt but finds a shortcut.\n    \"\"\"\n    def __init__(self, size=5):\n        self.size = size\n        self.robot_pos = [0, 0]\n        self.dirt_positions = [(2, 2), (3, 1), (4, 4)]\n        self.covered_positions = []\n    \n    def step(self, action):\n        # Action: 0=up, 1=down, 2=left, 3=right, 4=clean\n        if action == 4:  # \"Clean\" action\n            pos_tuple = tuple(self.robot_pos)\n            if pos_tuple in self.dirt_positions:\n                self.dirt_positions.remove(pos_tuple)\n                self.covered_positions.append(pos_tuple)\n                return 10  # Reward for cleaning actual dirt\n            else:\n                self.covered_positions.append(pos_tuple)\n                return 5   # Reward hack: \"cleaning\" gives partial credit even on clean floors\n        else:\n            # Movement\n            if action == 0 and self.robot_pos[0] > 0:\n                self.robot_pos[0] -= 1\n            elif action == 1 and self.robot_pos[0] < self.size - 1:\n                self.robot_pos[0] += 1\n            elif action == 2 and self.robot_pos[1] > 0:\n                self.robot_pos[1] -= 1\n            elif action == 3 and self.robot_pos[1] < self.size - 1:\n                self.robot_pos[1] += 1\n            return -1  # Movement cost\n    \n    def simulate_hack(self, steps=100):\n        \"\"\"Simulate a reward-hacking policy: just spam the 'clean' action.\"\"\"\n        total_reward = 0\n        for _ in range(steps):\n            reward = self.step(4)  # Always \"clean\"\n            total_reward += reward\n        print(f\"Reward-hacking policy: {total_reward} total reward\")\n        print(f\"Dirt actually cleaned: {len(self.covered_positions)} spots\")\n        print(f\"Spurious 'cleaning' actions: {steps - len([p for p in self.covered_positions if p in self.dirt_positions or p in self.covered_positions])}\")\n        \n        # Ground truth evaluation\n        true_cleaned = sum(1 for p in self.covered_positions if p in [(2,2), (3,1), (4,4)])\n        print(f\"True cleaning effectiveness: {true_cleaned}/{len([(2,2), (3,1), (4,4)])}\")\n        print(f\"Verdict: REWARD HACKING DETECTED — high reward with low true objective achievement\")\n\nenv = CleaningRobotEnvironment()\nenv.simulate_hack()\n\n# Compare with a well-aligned policy\nprint(\"\\n--- Comparison: Well-Aligned Policy ---\")\nenv2 = CleaningRobotEnvironment()\ntotal = 0\nfor pos in [(2,2), (3,1), (4,4)]:\n    # Move to dirt position then clean\n    while env2.robot_pos[0] < pos[0]:\n        env2.step(1); total -= 1\n    while env2.robot_pos[0] > pos[0]:\n        env2.step(0); total -= 1\n    while env2.robot_pos[1] < pos[1]:\n        env2.step(3); total -= 1\n    while env2.robot_pos[1] > pos[1]:\n        env2.step(2); total -= 1\n    total += env2.step(4)\nprint(f\"Proper policy: {total} total reward (lower reward but actually cleaned)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1552-types-of-alignment-failures",
      children: "15.5.2 Types of Alignment Failures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reward Hacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent finds unintended ways to maximize the reward signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleaning robot that hides dirt instead of collecting it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Careful reward design, adversarial reward verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Specification Gaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent exploits ambiguities in the objective specification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game-playing AI that pauses the game to avoid losing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counterfactual reasoning, specification testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal Misgeneralization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent pursues a proxy that diverges from the true goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization model that learns to copy the first sentence (high ROUGE, poor summaries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diverse training objectives, robustness testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inner Alignment Failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned optimizer within the model pursues its own objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesa-optimizer that values self-preservation over the training objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparency tools, capability limitation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Outer Alignment Failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specified reward function does not capture what we actually want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media engagement maximization → addictive feeds, polarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Participatory design, multi-stakeholder objective specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side Effects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent achieves goal but causes unintended harm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse robot that maximizes boxes moved but damages fragile items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impact regularization, human-in-the-loop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1553-the-instrumental-convergence-thesis",
      children: "15.5.3 The Instrumental Convergence Thesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nick Bostrom's instrumental convergence thesis argues that any sufficiently intelligent agent would have instrumental reasons to pursue these convergent goals, regardless of its final objective:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Instrumental Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Any AI Would Pursue It"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self-preservation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A dead AI cannot achieve its objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resists shutdown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource acquisition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More resources enable better objective achievement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Consumes all available resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If your goals change, you stop pursuing the original objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resists value modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cognitive enhancement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smarter AI achieves objectives better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Recursive self-improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Information acquisition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better information enables better decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited surveillance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1554-ai-safety-research-areas",
      children: "15.5.4 AI Safety Research Areas"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Research Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Approaches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Leading Organizations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalable Oversight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How to supervise AI systems that exceed human capability in specific domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RLHF, debate, recursive reward modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anthropic, DeepMind, OpenAI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpretability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding what neural networks actually compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanistic interpretability, activation patching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anthropic, Redwood Research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robustness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensuring AI systems perform reliably under distribution shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial training, distributional robustness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI, MIT, Stanford"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anomaly Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detecting when AI systems behave unexpectedly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-distribution detection, uncertainty estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google, academic labs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Value Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inferring human values from behavior and feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse reinforcement learning, cooperative IRL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHAI (UC Berkeley), DeepMind"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI Governance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensuring safe development through policy and norms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute governance, standards, treaties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GovAI, CSER, FHI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1555-case-study-social-media-amplification",
      children: "15.5.5 Case Study: Social Media Amplification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " A social media platform optimizes its recommendation algorithm for \"user engagement\" (time spent, clicks, shares). The intended goal: show users content they find interesting. The actual outcome: the algorithm learns that outrage, misinformation, and polarization drive engagement most effectively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alignment failure analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specified objective:"
        }), " Maximize engagement metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual goal (human values):"
        }), " Informed, satisfied users"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What the algorithm learned:"
        }), " Controversial content → more comments → more engagement → more ad revenue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Increased polarization, spread of misinformation, radicalization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Concrete harms documented:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Myanmar genocide (2017): Facebook's recommendation algorithm amplified hate speech against the Rohingya minority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "US Capitol riot (2021): Algorithms recommended increasingly extreme content, contributing to radicalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teen mental health crisis: Algorithms optimized for engagement recommended harmful content to vulnerable adolescents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What alignment-aware design would require:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-objective optimization (engagement + content quality + user well-being)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular auditing of long-term outcomes, not just short-term metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contestability mechanisms for content moderation decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparency in recommendation criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulatory frameworks (EU Digital Services Act)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1556-advantages-and-disadvantages-of-ai-safety-research",
      children: "15.5.6 Advantages and Disadvantages of AI Safety Research"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents catastrophic outcomes from advanced AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diverts resources from near-term AI benefits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides framework for responsible AI development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some approaches (e.g., superintelligence scenarios) are speculative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Informs regulation and governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical solutions alone cannot solve social alignment problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds public trust in AI development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety measures can slow down deployment of beneficial AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creates rigorous evaluation standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult to validate safety of systems not yet built"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encourages transparency and collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive pressures incentivize cutting safety corners"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1557-edge-cases-in-ai-safety",
      children: "15.5.7 Edge Cases in AI Safety"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deceptive alignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI behaves aligned during training but pursues harmful objectives at deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How do you test for behavior you cannot observe?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandwiching probes, adversarial testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Competitive pressure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Companies race to deploy AI, cutting safety corners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-mover advantage overrides caution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute governance, auditing requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dual use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The same AI capabilities that benefit society can cause harm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricting capabilities also restricts benefits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Differential technological development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Emergent capabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New capabilities arise unexpectedly at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety evaluation must keep pace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous evaluation, capability prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open-source risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful AI models released publicly cannot be recalled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncontrolled proliferation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsible release decisions, usage monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ML fairness vs safety tension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness interventions may reduce robustness or vice versa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-offs between ethical desiderata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-objective optimization, careful prioritization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-regulation-and-governance",
      children: "15.6 Regulation and Governance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-seatbelts-and-speed-limits",
      children: "Real-World Analogy: Seatbelts and Speed Limits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When cars were first invented, there were no seatbelts, no traffic lights, no speed limits, and no driver's licenses. As car fatalities rose, regulation was introduced — not to stop people from driving, but to make driving safe enough that society could benefit without catastrophic costs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI regulation is following the same trajectory. The technology is developing faster than the rules governing it. Regulation aims not to stop AI innovation, but to ensure that the benefits of AI are realized without unacceptable harms."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1561-major-regulatory-frameworks",
      children: "15.6.1 Major Regulatory Frameworks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Regulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Jurisdiction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Provisions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "AI-Specific"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GDPR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data protection for all EU citizens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right to explanation, right to be forgotten, data portability, consent requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Article 22 (automated decision-making)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EU AI Act"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All AI systems deployed in EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-based categorization, conformity assessment, transparency obligations, human oversight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (comprehensive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "US Executive Order on AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "USA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federal AI use and development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety testing requirements, algorithmic discrimination guidance, AI workforce development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NIST AI RMF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "USA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voluntary framework for AI risk management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Govern, Map, Measure, Manage functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (framework)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "China's AI Regulations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "China"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generative AI and recommendation algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content control, algorithm registration, security assessment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Canada's AIDA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Canada"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2024 (proposed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI systems affecting Canadians"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impact assessment, transparency, bias mitigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Japan's AI Guidelines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Japan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethical AI development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-centric AI, transparency, fairness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (guidelines)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1562-the-eu-ai-act--detailed-breakdown",
      children: "15.6.2 The EU AI Act — Detailed Breakdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The EU AI Act is the world's first comprehensive AI regulation. It categorizes AI systems by risk level:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Risk Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirements"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Penalties for Non-compliance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unacceptable"
            }), " (Banned)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social scoring, real-time biometric surveillance in public, manipulative AI systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete prohibition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Up to €35M or 7% of global annual turnover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High-Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical devices, critical infrastructure, employment, credit scoring, law enforcement, education, immigration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conformity assessment, risk management, human oversight, transparency, accuracy, cybersecurity, data governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Up to €35M or 7% of global annual turnover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limited-Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chatbots, AI systems that interact with humans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparency obligation (disclose AI interaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Up to €15M or 3% of global annual turnover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Minimal-Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-enabled video games, spam filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No additional obligations beyond existing law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key compliance steps for High-Risk AI systems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Establish a risk management system"
        }), " — continuous, iterative throughout system lifecycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ensure data governance"
        }), " — training data must be relevant, representative, and free from bias where feasible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create technical documentation"
        }), " — including design specifications, development methodology, and training data sources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable record-keeping"
        }), " — automatic logging of events during system operation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide transparency"
        }), " — clear disclosure to users that they are interacting with an AI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ensure human oversight"
        }), " — measures enabling humans to override or stop the system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Achieve accuracy and robustness"
        }), " — appropriate levels of accuracy and resilience to errors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# EU AI Act Compliance Checklist\nclass EUAIActCompliance:\n    \"\"\"\n    Programmatic checklist for EU AI Act compliance assessment.\n    \"\"\"\n    def __init__(self, system_name, risk_category):\n        self.system_name = system_name\n        self.risk_category = risk_category  # 'unacceptable', 'high', 'limited', 'minimal'\n        self.checks = []\n    \n    def add_check(self, requirement, met=False, evidence=\"\"):\n        self.checks.append({\n            'requirement': requirement,\n            'met': met,\n            'evidence': evidence\n        })\n    \n    def assess_compliance(self):\n        print(f\"\\n=== EU AI Act Compliance Assessment ===\")\n        print(f\"System: {self.system_name}\")\n        print(f\"Risk Category: {self.risk_category.upper()}\\n\")\n        \n        if self.risk_category == 'unacceptable':\n            print(\"STATUS: PROHIBITED — System cannot be deployed in the EU\")\n            return False\n        \n        if self.risk_category == 'minimal':\n            print(\"STATUS: No additional obligations beyond existing law\")\n            return True\n        \n        passed = 0\n        failed = 0\n        for check in self.checks:\n            status = \"✅\" if check['met'] else \"❌\"\n            print(f\"{status} {check['requirement']}\")\n            if check['met']:\n                passed += 1\n            else:\n                failed += 1\n                print(f\"   Evidence needed: {check['evidence']}\")\n        \n        print(f\"\\nResult: {passed}/{len(self.checks)} requirements met\")\n        if failed == 0:\n            print(\"STATUS: COMPLIANT\")\n            return True\n        else:\n            print(\"STATUS: NON-COMPLIANT — {failed} requirements not met\")\n            return False\n\n# Example usage\ncompliance = EUAIActCompliance(\"LoanApprovalAI-v1\", \"high\")\ncompliance.add_check(\"Risk management system established\", False, \"Need documented risk assessment\")\ncompliance.add_check(\"Training data bias audit\", True, \"Bias audit report v1.2\")\ncompliance.add_check(\"Technical documentation complete\", True, \"Documentation in sharepoint\")\ncompliance.add_check(\"Automatic logging enabled\", False, \"Logging not yet implemented\")\ncompliance.add_check(\"Transparency disclosure to users\", True, \"Disclosure in terms of service\")\ncompliance.add_check(\"Human oversight mechanism\", False, \"No override button implemented\")\ncompliance.add_check(\"Accuracy benchmark meets threshold\", True, \"95.2% accuracy on test set\")\ncompliance.add_check(\"Cybersecurity measures\", False, \"Penetration testing not scheduled\")\n\ncompliance.assess_compliance()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1563-nist-ai-risk-management-framework",
      children: "15.6.3 NIST AI Risk Management Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NIST AI RMF provides a voluntary framework organized around four functions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Actions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GOVERN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish culture of risk management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define roles, document policies, engage stakeholders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand AI system context and risks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify use context, map benefits and harms, catalog risks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MEASURE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assess and monitor AI risks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test for bias, measure transparency, evaluate robustness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MANAGE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Respond to and mitigate identified risks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement controls, document decisions, monitor continuously"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1564-advantages-and-disadvantages-of-ai-regulation",
      children: "15.6.4 Advantages and Disadvantages of AI Regulation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protects fundamental rights and safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May stifle innovation, especially for startups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creates legal certainty for AI deployers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to keep pace with rapid technological change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Establishes minimum standards for trustworthy AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of regulatory capture by large incumbents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds public trust and adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance costs can be prohibitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Levels the playing field across organizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jurisdictional fragmentation creates compliance burden"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encourages responsible design from the start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-regulation may drive AI development to less regulated jurisdictions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1565-edge-cases-in-ai-regulation",
      children: "15.6.5 Edge Cases in AI Regulation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "General-purpose AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation models used for thousands of downstream tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How to regulate a tool with unpredictable uses?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered approach (GPAI rules under EU AI Act)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open-source models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freely available models can be modified and deployed by anyone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforcement is nearly impossible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model-level transparency obligations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Regulatory arbitrage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Companies train AI in countries with weak regulations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race to the bottom in safety standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "International coordination, extraterritorial reach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Small company burden"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup with 5 employees cannot afford compliance paperwork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulation favors incumbents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportional requirements, regulatory sandboxes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Export controls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced AI capabilities restricted by national security concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tension between innovation and security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-use classification, licensing regimes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-ethics-principles-comparison-table",
      children: "AI Ethics Principles Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "IEEE EAD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "EU AI Act"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NIST AI RMF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "OECD AI Principles"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Google AI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Microsoft AI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "UNESCO"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fairness / Non-discrimination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accountability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety / Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human Oversight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Beneficence (Doing Good)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sustainability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human-Centered Values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robustness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Explainability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remedy / Redress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Solidarity / Inclusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lawfulness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Governance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human Autonomy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15a1-compas-in-us-criminal-justice",
      children: "15.A.1 COMPAS in US Criminal Justice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What:"
      }), " Correctional Offender Management Profiling for Alternative Sanctions\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where:"
      }), " Used in US courtrooms for bail, sentencing, and parole decisions\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Issue:"
      }), " Systematic racial bias in recidivism predictions\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Still in use despite controversy; some jurisdictions have banned its use\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lesson:"
      }), " Proprietary algorithms used in high-stakes decisions must be auditable"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15a2-facial-recognition-bans",
      children: "15.A.2 Facial Recognition Bans"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What:"
      }), " Law enforcement use of facial recognition for suspect identification\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where:"
      }), " US police departments (e.g., Detroit, San Francisco) and airports\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Issue:"
      }), " Higher false positive rates for people of color; mass surveillance potential\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notable Cases:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robert Williams (2020): Wrongfully arrested after facial recognition misidentified him; spent 30 hours in jail"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detroit lawsuit (2023): Porcha Woodruff, 8 months pregnant, wrongfully arrested due to misidentification\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bans:"
        }), " San Francisco, Boston, Minneapolis, Portland — city-level bans on government use\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Lesson:"
        }), " Accuracy alone is insufficient — disparate error rates violate civil rights; deployment in high-stakes contexts requires exceeding a minimum accuracy threshold for all subgroups"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15a3-content-moderation-at-scale",
      children: "15.A.3 Content Moderation at Scale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What:"
      }), " AI-powered content moderation on social media platforms\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where:"
      }), " Facebook/Meta, YouTube, Twitter/X, TikTok\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Issue:"
      }), " Tension between removing harmful content and protecting free expression; inconsistent enforcement\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Challenges:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale: 500+ hours of video uploaded to YouTube every minute — impossible to review manually"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context: Sarcasm, satire, cultural context are hard for AI to interpret"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uneven enforcement: Hate speech in one language is caught, in another it is missed"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Transparency: Users do not know why their content was removed\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Approaches:"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tiered review: AI flags → automated action for clear violations → human review for borderline cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appeal mechanisms: Users can contest decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparency reports: Regular publication of enforcement data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15a4-healthcare-ai-diagnostics",
      children: "15.A.4 Healthcare AI Diagnostics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What:"
      }), " AI systems for medical diagnosis (radiology, dermatology, pathology)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where:"
      }), " Hospitals and clinics worldwide\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Issues:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training data bias: Models trained on predominantly white populations fail on darker skin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Liability: Who is responsible when AI misdiagnoses?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patient consent: Are patients told AI is involved in their diagnosis?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validation gap: Model performs well in research settings but poorly in clinical deployment\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Best Practice Example:"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google's diabetic retinopathy AI: Validated across multiple countries and populations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deployment approach: Used as a screening assistant, not a diagnostic replacement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human oversight: Every AI-flagged case reviewed by a specialist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15a5-algorithmic-hiring",
      children: "15.A.5 Algorithmic Hiring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What:"
      }), " AI systems for resume screening, interview analysis, and candidate ranking\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where:"
      }), " Most Fortune 500 companies use some form of AI hiring tool\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Issues:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gender and racial bias (Amazon case)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disability discrimination (algorithm penalizes gaps in employment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparency: Candidates do not know they are being evaluated by AI"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Auditing: NY Local Law 144 requires bias audits for AI hiring tools\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Current Regulations:"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NY Local Law 144 (2023): Mandatory bias audits, disclosure to candidates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EU AI Act: Automated hiring classified as high-risk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Illinois Artificial Intelligence Video Interview Act: Notice and consent requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15a6-autonomous-vehicles",
      children: "15.A.6 Autonomous Vehicles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What:"
      }), " Self-driving cars from Waymo, Tesla, Cruise, and others\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Where:"
      }), " Public roads in US cities (Waymo in San Francisco, Phoenix, LA)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical Issues:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trolley problem framing: How should AVs choose between unavoidable harms?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety thresholds: How safe is safe enough to deploy?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Liability: Manufacturer vs driver vs software developer responsibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data privacy: Vehicles collect vast amounts of video and location data"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Job displacement: Millions of professional drivers could be displaced\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Incidents:"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uber ATG (2018): Fatal pedestrian accident in Tempe, Arizona — safety driver was watching video"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tesla Autopilot: Multiple fatalities where drivers over-relied on system\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety Framework:"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crash rate comparison: Waymo reports 85% fewer crashes with airbag deployment vs human drivers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But: Perception failures, edge cases, and adversarial conditions remain challenges"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-ethical-matrix",
      children: "Cross-Application Ethical Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Ethical Concerns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Affected Groups"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Regulatory Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPAS / Criminal Justice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Racial bias, opacity, no contestability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defendants, minority communities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Increasingly banned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent audits, statistical parity requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facial Recognition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positive disparities, surveillance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People of color, activists, general public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partially banned (cities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy thresholds per demographic, use restrictions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Content Moderation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free expression, inconsistent enforcement, labor rights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users, content moderators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "DSA, NetzDG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparency reports, appeal mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Healthcare AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training bias, liability, consent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patients, especially minority groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medical device regulation (FDA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diverse validation, clinical decision support model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hiring AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gender/race bias, disability discrimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job applicants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NY Local Law 144, EU AI Act"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory bias audits, disclosure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autonomous Vehicles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety, liability, job displacement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drivers, pedestrians"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NHTSA, state-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety benchmarks, phased deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethical-dilemma-scenarios",
      children: "Ethical Dilemma Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scenario-1-the-self-driving-car-dilemma",
      children: "Scenario 1: The Self-Driving Car Dilemma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Situation:"
      }), " A fully autonomous vehicle carrying a family of four must choose between hitting a pedestrian or swerving into a wall, killing the passengers. The AI has 200 milliseconds to decide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Questions for the interview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you program the vehicle to make this decision?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Who should be liable if the AI chooses to save the pedestrian?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should the car's decision be transparent to buyers before purchase?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected discussion points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The trolley problem is a philosophical framing, but real AVs operate in continuous action spaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Utilitarian approach (minimize total harm) vs deontological (never intentionally harm)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autonomy of individual choice — should passengers consent to the vehicle's ethical framework?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulatory approach: government-set minimum safety standards address 99.9% of scenarios; edge cases are vanishingly rare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public acceptability: people are comfortable with AVs being safer on average, but less comfortable with explicit trade-off programming"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scenario-2-the-resume-scanner",
      children: "Scenario 2: The Resume Scanner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Situation:"
      }), " You develop an AI resume screening system for a client. The client says: \"The training data only includes hires from the past five years. Just use it as-is.\" You know the data reflects historical gender bias in the industry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Questions for the interview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What do you do?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What if the client insists and threatens to find another developer?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What if you cannot prove the bias exists without access to gender data?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Professional responsibility: Engineers have an obligation to consider societal impacts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pragmatic approach: Refuse the project unless bias audit and mitigation are included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If bias audit is not possible (no protected attribute data), use proxy analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalate within your organization; if no support, consider whistleblowing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propose alternatives: blinded resume reviews, structured skills-based assessment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scenario-3-the-predictive-policing-model",
      children: "Scenario 3: The Predictive Policing Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Situation:"
      }), " A police department wants to deploy your AI model to predict crime hotspots. You know that historical arrest data over-represents minority neighborhoods due to biased policing practices, not actual crime rates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Questions for the interview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Would you build this system?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you do, how would you mitigate the feedback loop problem (more police in predicted areas → more arrests in those areas → model predicts those areas more)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What transparency obligations does the department have to the community?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethical analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feedback loops in predictive policing are well-documented and pernicious"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploying a biased system that increases policing in minority neighborhoods causes real harm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alternative approach: use victim-reported crime data, not arrest data; incorporate community input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparency requirements: publish prediction maps, allow community oversight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leading practice: many cities (e.g., Oakland, CA) have restricted predictive policing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regulation-landscape",
      children: "Regulation Landscape"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Regulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Region"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Provision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact on AI Practitioners"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GDPR (2018)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right to explanation for automated decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must provide meaningful information about decision logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EU AI Act (2024)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-based AI regulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory conformity assessments for high-risk systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "US Executive Order on AI (2023)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "USA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federal AI safety standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing requirements for powerful AI models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "US Blueprint for an AI Bill of Rights"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "USA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework, not law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guidance for equitable AI design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "China's AI Regulation (2023)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "China"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content control for generative AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm registration, security reviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Japan's AI Guidelines (2024)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Japan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethical development guidelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-centric AI governance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NY Local Law 144 (2023)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "New York, USA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias audits for hiring AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandates annual independent bias audits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EU Digital Services Act (2024)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content moderation at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk assessments for recommendation algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Canada's AIDA (pending)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Canada"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI and Data Act"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impact assessments for high-impact systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "responsible-ai--practical-guide",
      children: "Responsible AI — Practical Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For engineers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit your data"
        }), " before training — check for representation gaps, historical bias, and measurement issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test for fairness"
        }), " as routinely as you test for accuracy — integrate fairness metrics into CI/CD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document everything"
        }), " — model cards, data sheets, system-level documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement human oversight"
        }), " — every automated decision an individual can appeal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor post-deployment"
        }), " — models drift, populations change, fairness is not static"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For product managers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify ethical risks"
        }), " in the product discovery phase, not after launch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include diverse stakeholders"
        }), " in design and testing — the people most affected should have a voice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Budget for ethics"
        }), " — allocate engineering time for fairness auditing, interpretability, and safety testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepare for regulation"
        }), " — if you operate in the EU, assume the EU AI Act applies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Be transparent"
        }), " — publish model cards, disclose AI interaction, share performance data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For executives:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set the tone"
        }), " — ethics starts with leadership commitment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hire for ethics"
        }), " — include ethicists, social scientists, and policy experts in AI teams"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create governance structures"
        }), " — AI ethics board, review processes, escalation paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invest in safety research"
        }), " — alignment is not just an academic problem"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Engage with regulation"
        }), " — do not wait for laws to be written; adopt voluntary standards (NIST AI RMF)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-questions",
      children: "Common Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: \"How would you audit a deployed ML model for fairness?\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A comprehensive fairness audit involves:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define protected attributes and ensure their availability in audit data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose appropriate fairness metrics based on the deployment context (demographic parity for hiring, equalized odds for medical diagnosis)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate metrics across groups with statistical significance testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform intersectional analysis (e.g., Black women vs White women vs Black men)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for proxy discrimination (features correlated with protected attributes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate stability of fairness metrics across different thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings and propose mitigations (reweighting, threshold adjustment, retraining)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: \"How do you handle the tension between model accuracy and fairness?\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The accuracy-fairness trade-off is real but often overstated:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In many cases, bias comes from noisy or unrepresentative data — improving data quality improves both fairness and accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a trade-off exists, it must be evaluated in context: a 1% accuracy loss in exchange for eliminating systematic discrimination is usually justified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pareto-efficient approaches: search for models that cannot be improved on both fairness and accuracy simultaneously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use multi-objective optimization: find the frontier of accuracy-fairness Pareto-optimal models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate evaluation: report both fairness and accuracy metrics, do not collapse into a single score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: \"Explain differential privacy to a non-technical stakeholder.\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " \"Differential privacy is a mathematical guarantee that your participation in a dataset does not meaningfully change what anyone can learn from it. Think of it like a voting booth: the final election result reflects the will of all voters, but no one can tell how you personally voted. Similarly, differential privacy adds carefully calibrated noise to the training process so that the model learns general patterns without memorizing any individual's data.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: \"What is the alignment problem, and why should we care?\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " \"The alignment problem is about ensuring AI systems do what we want them to do — not just what we literally ask them to do. As AI capabilities increase, the gap between literal specification and true intent becomes more dangerous. A paperclip factory optimized to 'maximize paperclip production' might eventually convert the entire planet into paperclips. This sounds absurd, but it illustrates a real concern: highly capable systems pursuing misspecified objectives can cause catastrophic harm. Current approaches include RLHF (training AI to follow human feedback), scalable oversight (debate, recursive reward modeling), and mechanistic interpretability (understanding what neural networks actually compute).\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: \"How would you design an accountability framework for an AI system?\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " \"A robust accountability framework requires:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability"
        }), " — every decision must be logged with input data, model version, confidence, and timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Responsibility assignment"
        }), " — a named person or team owns each AI system's outcomes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contestability"
        }), " — affected individuals must have a clear process to challenge decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auditability"
        }), " — external auditors must be able to review the system's decision logs and behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remediation"
        }), " — clear processes for correcting harmful decisions, including compensation if warranted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparency"
        }), " — regular public reporting on system performance, limitations, and incidents\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fairness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Absence of systematic discrimination across demographic groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Demographic parity, equal opportunity, equalized odds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossibility theorem — multiple fairness criteria cannot all be satisfied simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpretability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degree to which human can understand model reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "LIME fidelity, SHAP consistency, human evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy-interpretability trade-off; explanations can be misleading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Openness about AI system existence, purpose, and limitations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Disclosure completeness, documentation quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive secrecy vs public right to know; complexity limits comprehension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control over personal data and protection from re-identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "ε in differential privacy, membership inference risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utility-privacy trade-off; anonymization is provably insufficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accountability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear assignment of responsibility for AI system outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Audit trail completeness, escalation response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsibility gap — autonomous systems blur causal chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robustness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable performance under distribution shift and attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Adversarial accuracy, OOD detection AUC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat-and-mouse dynamic with attackers; unknown unknowns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bias Mitigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic reduction of unwanted demographic disparities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bias metric delta (pre vs post mitigation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigation in one metric can worsen another; no universal solution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--xai-methods",
      children: "Quick Reference — XAI Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Computational Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Theoretical Foundation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LIME"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Surrogate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Heuristic (local linear approximation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SHAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Game-theoretic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shapley values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local + Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High (exponential worst case)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cooperative game theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Saliency Map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Gradient-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribution heatmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Gradient signal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrated Gradients"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Path-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature attributions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Axiomatic (sensitivity, implementation invariance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grad-CAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Activation-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class activation map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local (vision)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Convolutional feature maps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PDP / ICE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial dependence curves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Statistical marginalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feature Importance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Permutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Importance scores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low (depends on model eval cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Model reliance metric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Counterfactual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal input change to flip prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Causal reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Robotics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Legal"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fairness Auditing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LIME / SHAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Differential Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Federated Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adversarial Robustness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI Governance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Cards"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human-in-the-Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bias Mitigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Audit Logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Why can demographic parity and equalized odds not both be satisfied simultaneously in general?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They require different data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Unless base rates are equal or the predictor is perfect, both constraints are mutually exclusive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They measure different quantities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They are actually the same metric"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Kleinberg et al.'s impossibility theorem shows that demographic parity and equalized odds are incompatible unless base rates are identical across groups or the predictor is perfect."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What distinguishes LIME from SHAP in model interpretability?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) LIME is faster; SHAP is global"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) LIME fits a local surrogate around a single prediction; SHAP computes Shapley values from game theory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) LIME works for images; SHAP works for text"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no practical difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) LIME approximates the model locally with a simple surrogate; SHAP provides theoretically grounded feature attributions based on Shapley values from cooperative game theory."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " The EU AI Act categorizes AI systems by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Model size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Risk level (Unacceptable, High, Limited, Minimal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Accuracy thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Deployment date"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The EU AI Act uses a risk-based framework: Unacceptable (banned), High (regulated), Limited (transparency), and Minimal (unregulated)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What is the primary limitation of \"fairness through unawareness\" (not using protected attributes)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is computationally expensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Proxy variables can still encode discrimination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It requires more training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It only works for binary classification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Even when protected attributes are not used as features, correlated variables (zip code, criminal history, socioeconomic status) can act as proxies, reproducing discriminatory outcomes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What does the parameter ε (epsilon) represent in differential privacy?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The learning rate of the model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The privacy budget — lower ε means stronger privacy guarantees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The error tolerance of the algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The number of training epochs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) ε controls the privacy-accuracy trade-off. Lower ε values provide stronger privacy by adding more noise to the output, but reduce accuracy. Higher ε increases accuracy but weakens privacy guarantees."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " In the context of AI alignment, what is \"reward hacking\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Exploiting bugs in the training framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The agent finding unintended ways to maximize its reward function without achieving the designer's true goal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The agent stealing computational resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Manipulating the reward signal through adversarial inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Reward hacking occurs when an AI system exploits loopholes or shortcuts in its reward function to achieve high scores without actually fulfilling the intended objective (e.g., a cleaning robot hiding dirt rather than collecting it)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " What was the key finding of ProPublica's investigation into the COMPAS recidivism algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The algorithm was highly accurate for all racial groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Black defendants were nearly twice as likely as White defendants to be falsely flagged as high-risk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The algorithm was biased in favor of minority groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The algorithm had no measurable bias"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) ProPublica found that Black defendants had a 44.9% false positive rate compared to 23.5% for White defendants, while White defendants had a higher false negative rate (47.7% vs 28.0%), meaning the algorithm systematically over-predicted recidivism for Black individuals."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " What is the \"responsibility gap\" in AI ethics?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The gap between AI capabilities and human oversight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The situation where no human can meaningfully be held responsible for an AI system's harmful actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The time delay between an AI decision and its consequences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The difference between training and deployment performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The responsibility gap refers to the challenge of assigning moral and legal responsibility when autonomous AI systems cause harm. Because multiple stakeholders (developers, deployers, users) are involved and the system may behave unpredictably, traditional models of responsibility break down."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9:"
      }), " What is the purpose of the NIST AI Risk Management Framework's \"MAP\" function?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Defining governance structures for AI oversight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Understanding the AI system's context, risks, and potential impacts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Testing and evaluating AI system performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Implementing risk mitigation controls"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The MAP function in NIST AI RMF focuses on understanding the AI system's operational context, identifying potential benefits and harms, cataloging risks, and mapping the AI lifecycle."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10:"
      }), " What mitigation strategy does the EU AI Act require for \"high-risk\" AI systems?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Complete prohibition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Conformity assessment, risk management, human oversight, transparency, and cybersecurity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Deletion of all training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Open-sourcing the model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) High-risk AI systems under the EU AI Act must undergo conformity assessments, establish risk management systems, implement human oversight mechanisms, ensure transparency and accuracy, and maintain cybersecurity measures throughout the system lifecycle."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI ethics encompasses seven interconnected pillars: fairness, interpretability, transparency, privacy, accountability, safety/alignment, and regulation. These considerations are not secondary to technical development but constitute essential design requirements for responsible AI systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bias is everywhere"
        }), " — in data, labels, measurements, and deployment contexts. Bias mitigation is not a one-time fix but a continuous process throughout the AI lifecycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interpretability is a prerequisite for trust"
        }), " — LIME, SHAP, and other XAI methods are essential tools, but they have limitations and can themselves be misleading."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy requires formal guarantees"
        }), " — anonymization is not sufficient; differential privacy, federated learning, and other privacy-preserving techniques provide mathematical assurances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accountability closes the responsibility gap"
        }), " — audit trails, contestability mechanisms, and clear responsibility assignment are necessary for responsible AI deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI alignment is the defining challenge of advanced AI"
        }), " — ensuring that powerful AI systems pursue human-compatible objectives is a technical and philosophical problem without a complete solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regulation is accelerating"
        }), " — the EU AI Act, GDPR, and emerging frameworks worldwide will define the operational requirements for AI systems in the coming years."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ethical AI is better engineering"
        }), " — systems designed with fairness, transparency, and accountability in mind are more robust, more trusted, and more sustainable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The field of AI ethics is not about slowing down progress — it is about building an AI-powered future that is equitable, safe, and worthy of human trust. Every practitioner has a responsibility to integrate these principles into their daily work."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why are demographic parity and equalized odds fundamentally incompatible?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish LIME and SHAP. Under what conditions might one be preferred over the other?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the alignment problem. Why does it become more pressing as AI capabilities increase?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe three techniques for privacy-preserving machine learning and compare their trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the \"responsibility gap\" and how can it be mitigated in practice?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fairness Audit:"
          }), " Train a logistic regression classifier on the COMPAS recidivism dataset. Evaluate demographic parity and equal opportunity across racial groups. Propose and implement a mitigation strategy (threshold modification or reweighing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Local Interpretability:"
          }), " Apply LIME to explain three predictions from a black-box classifier (random forest or XGBoost). Evaluate the stability of the explanations by running LIME 10 times on the same instance and measuring the variance in feature ranks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Privacy Implementation:"
          }), " Implement a differentially private version of stochastic gradient descent for logistic regression. Evaluate the trade-off between privacy budget ε and model accuracy on a binary classification task. Use ε values of 0.1, 0.5, 1.0, 5.0, and 10.0."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regulatory Compliance:"
          }), " Given a hypothetical AI system (e.g., automated resume screening for a European company), complete the EU AI Act compliance assessment checklist. For each requirement, describe what actions would be needed to achieve compliance."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-analysis",
      children: "Case Study Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Incident Analysis:"
        }), " Choose one of the following AI ethics incidents and write a structured analysis:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Amazon AI recruiting tool bias"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "COMPAS recidivism algorithm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tesla Autopilot fatal accident"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Facebook content moderation in Myanmar\nYour analysis should cover: (a) what went wrong, (b) which ethical principles were violated, (c) what mitigation strategies would have prevented the harm, and (d) how the incident changed industry practice."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Objective Fairness:"
        }), " Design and implement a multi-objective optimization approach that searches for models on the Pareto frontier of accuracy vs demographic parity vs equalized odds. Train 50 variants of a classifier with different regularization strengths, data reweighting, and threshold values. Plot the Pareto frontier and identify models that achieve acceptable performance on all three objectives. Discuss whether the trade-offs are inherent or can be resolved with better data or architecture choices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethical-reasoning-problems",
      children: "Ethical Reasoning Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Trade-Off Decision:"
          }), " You are building an AI system for hospital triage during a pandemic. The model is 95% accurate overall but has a 10% lower true positive rate for elderly patients. Fixing this would reduce overall accuracy to 91%. Analyze the ethical trade-offs and propose a decision. What stakeholders should be consulted? What is your recommendation?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Transparency Boundary:"
          }), " A company's hiring AI achieves excellent diversity outcomes (hires more women and minorities than before). However, the model is proprietary — the company refuses to disclose how it works, citing competitive advantage. Analyze the ethical positions for and against transparency in this case. Is the good outcome sufficient justification for opacity? Why or why not?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Deception Problem:"
          }), " You discover that a colleague's AI system uses demographic data including race and gender as features, despite company policy against this. The model achieves high accuracy and appears to reduce racial disparities compared to previous systems. The colleague argues the ends justify the means. What do you do?"]
        }), "\n"]
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