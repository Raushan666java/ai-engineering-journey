"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89519],{

/***/ 87268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_09_uncertainty_md_f83_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-09-uncertainty-md-f83.json
const site_docs_courses_artificial_intelligence_09_uncertainty_md_f83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/09-uncertainty","title":"Chapter 9: Reasoning Under Uncertainty","description":"Previous Planning | Next Probabilistic Reasoning","source":"@site/docs/courses/artificial-intelligence/09-uncertainty.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/09-uncertainty","permalink":"/ai-engineering-journey/artificial-intelligence/09-uncertainty","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"09-uncertainty","slug":"/artificial-intelligence/09-uncertainty","title":"Chapter 9: Reasoning Under Uncertainty","sidebar_label":"Chapter 9: Reasoning Under Uncertainty","sidebar_position":17},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 9: Machine Learning: Learning from Examples","permalink":"/ai-engineering-journey/artificial-intelligence/09-machine-learning"},"next":{"title":"Chapter 10: Probabilistic Reasoning","permalink":"/ai-engineering-journey/artificial-intelligence/10-probabilistic-reasoning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/09-uncertainty.md


const frontMatter = {
	id: '09-uncertainty',
	slug: '/artificial-intelligence/09-uncertainty',
	title: 'Chapter 9: Reasoning Under Uncertainty',
	sidebar_label: 'Chapter 9: Reasoning Under Uncertainty',
	sidebar_position: 17
};
const contentTitle = 'Chapter 9: Reasoning Under Uncertainty';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Probabilistic Reasoning Matters",
  "id": "why-probabilistic-reasoning-matters",
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
  "value": "9.1 Foundations of Probability",
  "id": "91-foundations-of-probability",
  "level": 2
}, {
  "value": "9.1.1 Conditional Probability and Bayes&#39; Rule",
  "id": "911-conditional-probability-and-bayes-rule",
  "level": 3
}, {
  "value": "9.1.2 Independence",
  "id": "912-independence",
  "level": 3
}, {
  "value": "Real-World Analogy — Spam Detection with Bayes",
  "id": "real-world-analogy--spam-detection-with-bayes",
  "level": 3
}, {
  "value": "Algorithmic Steps — Applying Bayes&#39; Rule",
  "id": "algorithmic-steps--applying-bayes-rule",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — Medical Test",
  "id": "step-by-step-dry-run--medical-test",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "9.2 Bayesian Networks",
  "id": "92-bayesian-networks",
  "level": 2
}, {
  "value": "Real-World Analogy — Car Won&#39;t Start",
  "id": "real-world-analogy--car-wont-start",
  "level": 3
}, {
  "value": "9.2.1 Structure and Factorization",
  "id": "921-structure-and-factorization",
  "level": 3
}, {
  "value": "Algorithmic Steps — Constructing a Bayesian Network",
  "id": "algorithmic-steps--constructing-a-bayesian-network",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — Alarm Network Joint Probability",
  "id": "step-by-step-dry-run--alarm-network-joint-probability",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "9.3 d-Separation",
  "id": "93-d-separation",
  "level": 2
}, {
  "value": "Real-World Analogy — Family Traits",
  "id": "real-world-analogy--family-traits",
  "level": 3
}, {
  "value": "9.3.1 d-Separation Rules",
  "id": "931-d-separation-rules",
  "level": 3
}, {
  "value": "Algorithmic Steps — Checking d-Separation",
  "id": "algorithmic-steps--checking-d-separation",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "9.4 Inference by Enumeration",
  "id": "94-inference-by-enumeration",
  "level": 2
}, {
  "value": "Real-World Analogy — Finding a Lost Key",
  "id": "real-world-analogy--finding-a-lost-key",
  "level": 3
}, {
  "value": "Algorithmic Steps",
  "id": "algorithmic-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — $P(\\text{Burglary} \\mid \\text{JohnCalls}, \\text{MaryCalls})$",
  "id": "step-by-step-dry-run--ptextburglary-mid-textjohncalls-textmarycalls",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "9.5 Variable Elimination",
  "id": "95-variable-elimination",
  "level": 2
}, {
  "value": "Real-World Analogy — Summing a Multi-Column Ledger",
  "id": "real-world-analogy--summing-a-multi-column-ledger",
  "level": 3
}, {
  "value": "Algorithmic Steps",
  "id": "algorithmic-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — VE on Alarm Network",
  "id": "step-by-step-dry-run--ve-on-alarm-network",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "9.6 Approximate Inference via Sampling",
  "id": "96-approximate-inference-via-sampling",
  "level": 2
}, {
  "value": "9.6.1 Rejection Sampling",
  "id": "961-rejection-sampling",
  "level": 3
}, {
  "value": "9.6.2 Likelihood Weighting",
  "id": "962-likelihood-weighting",
  "level": 3
}, {
  "value": "9.6.3 Gibbs Sampling (MCMC)",
  "id": "963-gibbs-sampling-mcmc",
  "level": 3
}, {
  "value": "Complexity Analysis — Sampling Methods",
  "id": "complexity-analysis--sampling-methods",
  "level": 3
}, {
  "value": "9.7 Bayesian Networks vs. Markov Networks",
  "id": "97-bayesian-networks-vs-markov-networks",
  "level": 2
}, {
  "value": "9.8 Inference Methods Comparison",
  "id": "98-inference-methods-comparison",
  "level": 2
}, {
  "value": "9.9 Interview Corner",
  "id": "99-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the Naive Bayes classifier. Why is it called &quot;naive&quot;?",
  "id": "q1-explain-the-naive-bayes-classifier-why-is-it-called-naive",
  "level": 3
}, {
  "value": "Q2: What is the difference between Bayesian and frequentist statistics?",
  "id": "q2-what-is-the-difference-between-bayesian-and-frequentist-statistics",
  "level": 3
}, {
  "value": "Q3: Does correlation imply causation?",
  "id": "q3-does-correlation-imply-causation",
  "level": 3
}, {
  "value": "9.10 Applications in Real Systems",
  "id": "910-applications-in-real-systems",
  "level": 2
}, {
  "value": "Medical Diagnosis (PathFinder, QMR, Internist)",
  "id": "medical-diagnosis-pathfinder-qmr-internist",
  "level": 3
}, {
  "value": "Spam Filtering (Naive Bayes in Email Systems)",
  "id": "spam-filtering-naive-bayes-in-email-systems",
  "level": 3
}, {
  "value": "Speech Recognition (Hidden Markov Models)",
  "id": "speech-recognition-hidden-markov-models",
  "level": 3
}, {
  "value": "Other Applications",
  "id": "other-applications",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — d-Separation Rules",
  "id": "quick-reference--d-separation-rules",
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
  "value": "9.11 Summary",
  "id": "911-summary",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "chapter-9-reasoning-under-uncertainty",
        children: "Chapter 9: Reasoning Under Uncertainty"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/08-planning",
        children: "Chapter 8: Planning"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/10-probabilistic-reasoning",
        children: "Chapter 10: Probabilistic Reasoning"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) apply probability theory to represent uncertain knowledge; (2) construct and query Bayesian networks; (3) analyze conditional independence using d-separation; (4) implement exact and approximate inference in Bayesian networks; (5) model temporal processes using dynamic Bayesian networks and hidden Markov models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-probabilistic-reasoning-matters",
      children: "Why Probabilistic Reasoning Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Diagnosing Disease from Symptoms:"
      }), " Imagine you are a doctor. A patient walks in with a fever, cough, and fatigue. These symptoms could indicate flu, COVID-19, common cold, or even something benign. You cannot be certain — but you must act. You weigh:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prior knowledge:"
        }), " Flu is common in winter (~10% of patients). COVID-19 is less common but present (~2%)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " Fever + cough are ", (0,jsx_runtime.jsx)(_components.em, {
          children: "likely"
        }), " given flu (80%), but also possible with COVID (70%) and cold (30%)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Posterior judgment:"
        }), " Given the symptoms, flu becomes most probable (say 65%), COVID next (20%), cold (10%), other (5%)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "probabilistic reasoning"
      }), " — updating beliefs in light of evidence. Every AI system facing uncertainty (speech recognition, medical diagnosis, self-driving cars, spam filters) uses the same framework. Without it, AI would be paralyzed by ambiguity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Foundations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability space, Bayes' rule, independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior, posterior, conditionally independent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAG, CPT, chain rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parents, factorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable elimination, rejection/likelihood/Gibbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Belief propagation, MCMC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d-Separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chains, forks, colliders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active path, Markov blanket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic BN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal processes, transition model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markov assumption, state evolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition, emission, Viterbi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward-backward, decoding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Probability Foundations] --> B[Bayes' Rule]\n    A --> C[Bayesian Networks]\n    C --> D[CPT + Chain Rule]\n    C --> E[Exact Inference]\n    C --> F[Approximate Inference]\n    E --> G[Variable Elimination]\n    F --> H[Rejection Sampling]\n    F --> I[Likelihood Weighting]\n    F --> J[Gibbs / MCMC]\n    C --> K[d-Separation]\n    A --> L[Dynamic BN]\n    L --> M[HMM]\n    M --> N[Forward-Backward / Viterbi]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-foundations-of-probability",
      children: "9.1 Foundations of Probability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch09-probability-bayes.png",
        alt: "Probability and Bayes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Probability theory provides the mathematical framework for reasoning under uncertainty. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "probability space"
      }), " consists of a sample space $\\Omega$, a set of events $\\mathcal{E}$, and a probability measure $P: \\mathcal{E} \\to [0, 1]$ satisfying the Kolmogorov axioms:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(\\omega) \\geq 0$ for all $\\omega \\in \\Omega$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(\\Omega) = 1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For countable disjoint events $E_1, E_2, \\ldots$: $P(\\bigcup_i E_i) = \\sum_i P(E_i)$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "911-conditional-probability-and-bayes-rule",
      children: "9.1.1 Conditional Probability and Bayes' Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The conditional probability of $A$ given $B$ is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(A \\mid B) = \\frac{P(A \\land B)}{P(B)}, \\quad P(B) > 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayes' rule"
      }), " inverts conditional probabilities:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(A \\mid B) = \\frac{P(B \\mid A) , P(A)}{P(B)}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For inference tasks, we compute the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "posterior"
      }), " probability of hypothesis $H$ given evidence $E$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(H \\mid E) = \\frac{P(E \\mid H) , P(H)}{P(E)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The denominator normalizes: $P(E) = \\sum_h P(E \\mid h) P(h)$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "912-independence",
      children: "9.1.2 Independence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two events $A$ and $B$ are independent if $P(A \\land B) = P(A) P(B)$. Conditional independence, a weaker and more common condition, holds when:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(A \\land B \\mid C) = P(A \\mid C) P(B \\mid C)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditional independence assumptions dramatically reduce the complexity of probabilistic models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--spam-detection-with-bayes",
      children: "Real-World Analogy — Spam Detection with Bayes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You receive an email containing the word \"FREE\". You want to know: is it spam?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prior:"
        }), " 60% of all emails are spam $\\to$ $P(Spam) = 0.6$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " 90% of spam contains \"FREE\", only 5% of ham does $\\to$ $P(\\text{FREE} \\mid Spam) = 0.9$, $P(\\text{FREE} \\mid Ham) = 0.05$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " $P(\\text{FREE}) = 0.9 \\times 0.6 + 0.05 \\times 0.4 = 0.56$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Posterior:"
        }), " $P(Spam \\mid \\text{FREE}) = (0.9 \\times 0.6) / 0.56 \\approx 0.964$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The email is 96.4% likely to be spam."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithmic-steps--applying-bayes-rule",
      children: "Algorithmic Steps — Applying Bayes' Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Prior $P(H)$, likelihood $P(E \\mid H)$, evidence probability $P(E)$\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Posterior $P(H \\mid E)$"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the hypothesis $H$ and evidence $E$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determine the prior probability $P(H)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determine the likelihood $P(E \\mid H)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute evidence probability $P(E) = \\sum_h P(E \\mid h) P(h)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply formula: $P(H \\mid E) = P(E \\mid H) \\cdot P(H) / P(E)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the posterior probability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function BAYES-RULE(Prior, Likelihood, EvidenceProb) returns posterior\n    numerator <- Likelihood * Prior\n    if EvidenceProb = 0 then\n        return error(\"Evidence has zero probability\")\n    posterior <- numerator / EvidenceProb\n    return posterior\n\nfunction BAYES-RULE-MARGINALIZE(Prior, LikelihoodFunc, hypotheses) returns posterior\n    evidenceProb <- 0\n    for each h in hypotheses do\n        evidenceProb <- evidenceProb + LikelihoodFunc(h) * Prior[h]\n    if evidenceProb = 0 then\n        return error(\"Evidence has zero probability\")\n    for each h in hypotheses do\n        posterior[h] <- (LikelihoodFunc(h) * Prior[h]) / evidenceProb\n    return posterior\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--medical-test",
      children: "Step-by-Step Dry Run — Medical Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Disease prevalence = 0.1%, test sensitivity = 99%, false positive rate = 2%.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " $P(\\text{Disease} \\mid \\text{Positive})$"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify H and E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H=\"disease\", E=\"positive\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior $P(D)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease prevalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood $P(Pos \\mid D)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test sensitivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(Pos) = 0.99 \\times 0.001 + 0.02 \\times 0.999$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.02097"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marginalization over D and ¬D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numerator $0.99 \\times 0.001$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood × Prior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posterior $P(D \\mid Pos)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00099 / 0.02097 ≈ 0.0472"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 4.72% despite positive test!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The disease is so rare that even a 98% accurate test produces mostly false positives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bayes_rule(prior: float, likelihood: float, evidence_prob: float) -> float:\n    \"\"\"Compute P(H|E) = P(E|H) * P(H) / P(E)\"\"\"\n    if evidence_prob == 0:\n        raise ValueError(\"Evidence probability cannot be zero\")\n    return (likelihood * prior) / evidence_prob\n\ndef bayes_rule_marginalize(priors: dict, likelihoods: dict) -> dict:\n    \"\"\"Compute posterior for all hypotheses given likelihoods\"\"\"\n    evidence_prob = sum(likelihoods[h] * priors[h] for h in priors)\n    if evidence_prob == 0:\n        raise ValueError(\"Evidence probability cannot be zero\")\n    return {h: (likelihoods[h] * priors[h]) / evidence_prob for h in priors}\n\n# Medical test example\npriors = {\"disease\": 0.001, \"no_disease\": 0.999}\nlikelihoods = {\"disease\": 0.99, \"no_disease\": 0.02}\nposteriors = bayes_rule_marginalize(priors, likelihoods)\nprint(f\"P(disease | positive) = {posteriors['disease']:.4f}\")\nprint(f\"P(no_disease | positive) = {posteriors['no_disease']:.4f}\")\n# Output:\n# P(disease | positive) = 0.0472\n# P(no_disease | positive) = 0.9528\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n):"
      }), " Bayes' rule marginalizes over $n$ hypotheses. Each hypothesis contributes one multiplication and one addition to the evidence sum. Work scales linearly — you cannot compute a weighted sum without examining every term. This is optimal."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Space Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single hypothesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$n$ hypotheses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous (integration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Approx O(m) with m quadrature points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(m)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Mathematically sound foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires known prior probabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combines prior knowledge with data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to subjective prior choice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally efficient O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes model structure is correct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incrementally updatable (posterior becomes new prior)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult with high-dimensional evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles uncertainty explicitly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence probability can be near-zero numerically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero evidence probability:"
        }), " If $P(E) = 0$, Bayes' rule is undefined. Use pseudocounts (Laplace smoothing) to avoid zero probabilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floating-point underflow:"
        }), " When $P(E) \\approx 10^{-100}$, use log-probabilities: $\\log P(H \\mid E) = \\log P(E \\mid H) + \\log P(H) - \\log P(E)$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-disjoint hypotheses:"
        }), " The hypothesis set must partition the sample space (exhaustive and mutually exclusive). Gaps or overlaps produce incorrect posteriors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflicting evidence:"
        }), " Product of multiple likelihoods may underflow despite strong individual signals. Normalize in log-space."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-bayesian-networks",
      children: "9.2 Bayesian Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--car-wont-start",
      children: "Real-World Analogy — Car Won't Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your car doesn't start in the morning. Several causes interact:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Battery dead"
        }), " (B): Could be due to age or leaving lights on."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fuel empty"
        }), " (F): Could be due to broken gauge or forgetting to fill."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Starter motor failed"
        }), " (S): Unlikely but possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Car starts?"
        }), " (C): Depends on B, F, and S all working."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B and F are independent (no direct causal link). C depends on B, F, S (all three must work). A Bayesian network captures this: variables are nodes, causes point to effects, each node has a conditional probability table."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "921-structure-and-factorization",
      children: "9.2.1 Structure and Factorization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayesian network"
      }), " (BN) is a directed acyclic graph (DAG) representing a joint probability distribution. Nodes represent random variables; directed edges represent direct probabilistic dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A BN encodes the joint distribution via the chain rule:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(X_1, X_2, \\ldots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each node has an associated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conditional probability table (CPT)"
      }), " specifying $P(X_i \\mid \\text{Parents}(X_i))$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Alarm Network (Pearl, 1988):"
      }), "\nBurglary and Earthquake cause Alarm, which triggers calls from John and Mary. The joint distribution factors as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(B, E, A, J, M) = P(B) P(E) P(A \\mid B, E) P(J \\mid A) P(M \\mid A)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A BN with $n$ nodes, each with at most $k$ parents and $d$ values, requires at most $n d^{k+1}$ parameters — a dramatic reduction from the full $d^n$ joint table."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithmic-steps--constructing-a-bayesian-network",
      children: "Algorithmic Steps — Constructing a Bayesian Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Set of random variables $X_1, \\ldots, X_n$, domain knowledge or data\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " A Bayesian network (DAG + CPTs)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the set of relevant random variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order variables causally (causes before effects)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each $X_i$, choose a minimal set of parents from earlier variables such that $X_i$ is conditionally independent of all other predecessors given its parents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define the CPT for $P(X_i \\mid \\text{Parents}(X_i))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify no cycles exist in the resulting graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The joint distribution is the product of all CPTs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function CONSTRUCT-BN(variables, domainKnowledge) returns BN\n    order <- TOPOLOGICAL-SORT(variables, domainKnowledge)\n    bn <- new DAG with nodes = variables\n    for each X_i in order do\n        parents <- SELECT-PARENTS(X_i, domainKnowledge)\n        bn.AddEdge(parents -> X_i)\n        for each assignment pa of parents do\n            for each value x of X_i do\n                bn.CPT[X_i][pa][x] <- domainKnowledge.ElicitProb(X_i, pa, x)\n    return bn\n\nfunction BN-JOINT-PROB(bn, assignment) returns probability\n    prob <- 1.0\n    for each node X_i in bn do\n        x <- assignment[X_i]\n        pa <- assignment[PARENTS(X_i)]\n        prob <- prob * bn.CPT[X_i][pa][x]\n    return prob\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--alarm-network-joint-probability",
      children: "Step-by-Step Dry Run — Alarm Network Joint Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CPTs:"
      }), " P(B)=0.001, P(E)=0.002, P(A|B,E): TT=0.95, TF=0.94, FT=0.29, FF=0.001\nP(J|A): T=0.90, F=0.05; P(M|A): T=0.70, F=0.01"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Computing $P(B=1, E=1, A=1, J=1, M=1)$:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Var"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPT Entry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running Product"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B=T, E=T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0000019"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.00000171"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000001197"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(B,E,A,J,M) = 1.197 \\times 10^{-6}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BNNode:\n    def __init__(self, name: str, parents: list, cpt: dict):\n        self.name = name\n        self.parents = parents\n        self.cpt = cpt  # key = (self_val, *parent_vals) -> prob\n\nclass BayesianNetwork:\n    def __init__(self, nodes: list):\n        self.nodes = {n.name: n for n in nodes}\n        self.order = [n.name for n in nodes]\n\n    def joint_probability(self, assignment: dict) -> float:\n        prob = 1.0\n        for name in self.order:\n            node = self.nodes[name]\n            x = assignment[name]\n            pa = tuple(assignment[p] for p in node.parents)\n            prob *= node.cpt[(x, *pa)]\n        return prob\n\n# Alarm network nodes\nalarm_nodes = [\n    BNNode(\"Burglary\", [], {(True,): 0.001, (False,): 0.999}),\n    BNNode(\"Earthquake\", [], {(True,): 0.002, (False,): 0.998}),\n    BNNode(\"Alarm\", [\"Burglary\",\"Earthquake\"], {\n        (True,True,True):0.95, (True,True,False):0.05,\n        (True,False,True):0.94, (True,False,False):0.06,\n        (False,True,True):0.29, (False,True,False):0.71,\n        (False,False,True):0.001, (False,False,False):0.999,\n    }),\n    BNNode(\"JohnCalls\", [\"Alarm\"], {\n        (True,True):0.90, (True,False):0.10,\n        (False,True):0.05, (False,False):0.95,\n    }),\n    BNNode(\"MaryCalls\", [\"Alarm\"], {\n        (True,True):0.70, (True,False):0.30,\n        (False,True):0.01, (False,False):0.99,\n    }),\n]\nbn = BayesianNetwork(alarm_nodes)\n\np = bn.joint_probability({\"Burglary\":True,\"Earthquake\":True,\"Alarm\":True,\n                          \"JohnCalls\":True,\"MaryCalls\":True})\nprint(f\"P(B,E,A,J,M) = {p:.10f}\")\n# Output: P(B,E,A,J,M) = 0.0000011970\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why BN parameter count is $O(n d^{k+1})$:"
      }), " Each of $n$ nodes stores a CPT. For a node with $k$ parents and $d$ values, the CPT has $d^{k+1}$ entries (one combination per parent assignment per self value). The full joint table would have $d^n$ entries — exponential in all variables. The BN reduces this to exponential only in the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "maximum number of parents"
      }), " ($k \\ll n$). This is why BNs are called \"compact representations.\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Full Joint Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Bayesian Network"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$d^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$n \\cdot d^{k+1}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(d^n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n d^{k+1})$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(d^n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(d^{tw})$ where tw = treewidth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Compact representation via conditional independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires causal ordering (domain expertise)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive graphical structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPTs grow exponentially with parent count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports both forward and backward inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAG constraint prohibits cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles missing data naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning structure from data is NP-hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combines expert knowledge with data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to CPT accuracy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root nodes (no parents):"
        }), " CPT is just a prior probability (size $d$). All root nodes are marginally independent unless we condition on a common child."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic nodes:"
        }), " $P(X \\mid Pa) \\in {0,1}$. Inference can be optimized (bypass sampling, direct propagation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-specific independence:"
        }), " Some CPT entries may be equal across parent assignments (e.g., $P(A \\mid B, E)$ = $P(A \\mid B)$ when E=False). Use noisy-OR or decision tree CPTs for compression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invalid CPTs:"
        }), " Probabilities for a given parent assignment must sum to 1. Violations produce invalid joint distributions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-d-separation",
      children: "9.3 d-Separation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--family-traits",
      children: "Real-World Analogy — Family Traits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three generations: Grandparent (G), Parent (P), Child (C)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain"
        }), " (G $\\to$ P $\\to$ C): If you know P's hair color, G's gives no additional info about C. Conditioning on P ", (0,jsx_runtime.jsx)(_components.em, {
          children: "blocks"
        }), " G $\\to$ C."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fork"
        }), " (G $\\leftarrow$ P $\\to$ C): P influences both. Knowing P makes G and C independent. Conditioning on P ", (0,jsx_runtime.jsx)(_components.em, {
          children: "blocks"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collider"
        }), " (G $\\to$ P $\\leftarrow$ C): G and C are independent until you condition on P. If P has a rare mutation, learning G has it ", (0,jsx_runtime.jsx)(_components.em, {
          children: "explains away"
        }), " C. Conditioning on P ", (0,jsx_runtime.jsx)(_components.em, {
          children: "opens"
        }), " this path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Explaining away"
      }), " is the most counterintuitive BN concept: two independent causes become dependent when their common effect is observed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "931-d-separation-rules",
      children: "9.3.1 d-Separation Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "d-separation"
      }), " determines conditional independence relations in a BN. A path between $X$ and $Y$ is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "blocked"
      }), " by evidence set $\\mathcal{Z}$ if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain"
        }), " ($X \\to Z \\to Y$ or $X \\leftarrow Z \\leftarrow Y$): $Z \\in \\mathcal{Z}$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fork"
        }), " ($X \\leftarrow Z \\to Y$): $Z \\in \\mathcal{Z}$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collider"
        }), " ($X \\to Z \\leftarrow Y$): $Z \\notin \\mathcal{Z}$ and no descendant of $Z$ in $\\mathcal{Z}$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$X$ and $Y$ are d-separated by $\\mathcal{Z}$ if every path between them is blocked."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithmic-steps--checking-d-separation",
      children: "Algorithmic Steps — Checking d-Separation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " DAG, nodes X and Y, evidence set Z\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " True if X and Y are d-separated by Z"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find all undirected paths between X and Y in the DAG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["For each path, determine if it is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "active"
            }), " (unblocked) given Z"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A path is active if every node satisfies: chain/fork NOT in Z; collider IS in Z (or descendant in Z)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If any path is active, X and Y are ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "d-connected"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If all paths blocked, X and Y are ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "d-separated"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function D-SEPARATED(dag, X, Y, Z) returns Boolean\n    for each path between X and Y do\n        if IS-ACTIVE(path, Z) then\n            return False  // d-connected\n    return True  // d-separated\n\nfunction IS-ACTIVE(path, Z) returns Boolean\n    for each triple (A, B, C) on path do\n        if IS-COLLIDER(A, B, C) then\n            if B not in Z and no descendant of B in Z then\n                return False  // blocked\n        else  // chain or fork\n            if B in Z then\n                return False  // blocked\n    return True  // active\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network:"
      }), " A $\\to$ B $\\to$ C $\\leftarrow$ D $\\to$ E"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Are A and E d-separated given Z = {B}?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Path: A $\\to$ B $\\to$ C $\\leftarrow$ D $\\to$ E"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Triple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocked?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain (A$\\to$B$\\to$C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B is in Z $\\to$ BLOCKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(B, C, D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collider (B$\\to$C$\\leftarrow$D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C NOT in Z, no descendant in Z $\\to$ blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(C, D, E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain (C$\\leftarrow$D$\\to$E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D NOT in Z $\\to$ unblocked (path already blocked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All paths blocked $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A and E ARE d-separated by {B}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query variation:"
      }), " A and E given Z = {C}?"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Triple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocked?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain (A$\\to$B$\\to$C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B NOT in Z $\\to$ unblocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(B, C, D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collider (B$\\to$C$\\leftarrow$D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C is in Z $\\to$ COLLIDER OPENS $\\to$ unblocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(C, D, E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain (C$\\leftarrow$D$\\to$E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D NOT in Z $\\to$ unblocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All triples unblocked $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A and E are NOT d-separated by {C}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict, deque\n\nclass DAG:\n    def __init__(self):\n        self.graph = defaultdict(list)\n        self.parents = defaultdict(list)\n    def add_edge(self, fr, to):\n        self.graph[fr].append(to)\n        self.parents[to].append(fr)\n    def neighbors(self, n):\n        return self.graph[n] + self.parents[n]\n\ndef is_collider(dag, a, b, c):\n    return b in dag.graph[a] and b in dag.graph[c]\n\ndef get_descendants(dag, node):\n    desc, q = set(), deque([node])\n    while q:\n        n = q.popleft()\n        for c in dag.graph[n]:\n            if c not in desc:\n                desc.add(c); q.append(c)\n    return desc\n\ndef d_separated(dag, X, Y, Z):\n    if X == Y: return False\n    q, visited = deque([(X, [(None, X)])]), set()\n    while q:\n        node, path = q.popleft()\n        if node == Y:\n            active = True\n            for i in range(len(path) - 2):\n                a, b, c = path[i][1], path[i+1][0], path[i+2][0]\n                if is_collider(dag, a, b, c):\n                    if b not in Z and not any(d in Z for d in get_descendants(dag, b)):\n                        active = False; break\n                else:\n                    if b in Z: active = False; break\n            if active: return False\n            continue\n        key = (node, path[-1])\n        if key in visited: continue\n        visited.add(key)\n        for nb in dag.neighbors(node):\n            q.append((nb, path + [(node, nb)]))\n    return True\n\ndag = DAG()\ndag.add_edge(\"A\",\"B\"); dag.add_edge(\"B\",\"C\")\ndag.add_edge(\"D\",\"C\"); dag.add_edge(\"D\",\"E\")\nprint(d_separated(dag, \"A\", \"E\", {\"B\"}))  # True\nprint(d_separated(dag, \"A\", \"E\", {\"C\"}))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why $O(|V|+|E|)$ with Bayes-Ball:"
      }), " d-separation checking reduces to graph reachability. Naive path enumeration can be exponential in worst case, but the Bayes-Ball algorithm achieves $O(V+E)$ using annotated BFS with per-node state tracking."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive path enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(2^{"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayes-Ball algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(|V| + |E|)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotated BFS with visited states per node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precomputed ancestral graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(|V| + |E|)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build once, query many times"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Graphical test for conditional independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only applies to DAG-structured dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables efficient structure learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not capture magnitude of dependence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive \"explaining away\" insight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be tedious for large networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces inference burden (skip independent vars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires correct causal direction specification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty evidence set (Z = {}):"
        }), " Chains and forks remain active; colliders block unless a descendant is observed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "X = Y:"
        }), " Trivially d-connected (zero-length path always exists)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence on collider descendant:"
        }), " Partially opens path, creating weak dependence between collider parents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple active paths:"
        }), " One active path suffices to break d-separation — a single \"open\" path bypasses all blocked portions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-inference-by-enumeration",
      children: "9.4 Inference by Enumeration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--finding-a-lost-key",
      children: "Real-World Analogy — Finding a Lost Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You lost your key in a house with 3 rooms. P(Kitchen)=0.3, P(Living)=0.5, P(Bedroom)=0.2. You hear a jingle from the bedroom: P(Jingle|K)=0.1, P(Jingle|L)=0.2, P(Jingle|B)=0.9."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference by enumeration"
      }), " means: list every possible location, compute the joint probability with evidence, sum the appropriate cases, and normalize."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithmic-steps",
      children: "Algorithmic Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Bayesian network BN, query variable Q, evidence E\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Posterior distribution $P(Q \\mid E)$"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify all variables in the network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each value $q$ of the query variable, sum over all joint assignments consistent with evidence and Q=q"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply CPT probabilities for each assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize by total probability of evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function ENUMERATION-INFERENCE(bn, query, evidence) returns distribution\n    for each value q of query do\n        prob[q] <- ENUMERATE-ALL(bn.variables, [], evidence U {query = q})\n    return NORMALIZE(prob)\n\nfunction ENUMERATE-ALL(vars, assignment, evidence) returns probability\n    if vars is empty then return 1.0\n    Y <- FIRST(vars)\n    rest <- REST(vars)\n    if Y has value in evidence then\n        y <- evidence[Y]\n        assignment <- assignment U {Y = y}\n        return P(y | parents(Y)) * ENUMERATE-ALL(rest, assignment, evidence)\n    else\n        sum <- 0\n        for each value y of Y do\n            assignment <- assignment U {Y = y}\n            sum <- sum + P(y | parents(Y)) * ENUMERATE-ALL(rest, assignment, evidence)\n        return sum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--ptextburglary-mid-textjohncalls-textmarycalls",
      children: "Step-by-Step Dry Run — $P(\\text{Burglary} \\mid \\text{JohnCalls}, \\text{MaryCalls})$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Sum over all assignments with B=1, J=1, M=1"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(B=1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(E)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(A|B,E)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(J|A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(M|A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Product"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2.99\\times10^{-7}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$5.907\\times10^{-4}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$5.0\\times10^{-11}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.197\\times10^{-6}$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(B=1, J=1, M=1) \\approx 5.921\\times10^{-4}$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Compute for B=0"
      }), " (same process) $\\to$ $P(B=0, J=1, M=1) \\approx 5.972\\times10^{-3}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Normalize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(B=1 \\mid J,M) = 5.921\\times10^{-4} / (5.921\\times10^{-4} + 5.972\\times10^{-3}) \\approx 0.0902$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(B=0 \\mid J,M) \\approx 0.9098$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Given both calls, there is a 9.02% chance of burglary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def enumerate_all(bn, variables, assignment, evidence):\n    if not variables:\n        return 1.0\n    Y, rest = variables[0], variables[1:]\n    if Y in evidence:\n        y = evidence[Y]\n        pa = tuple(assignment.get(p, False) for p in bn.nodes[Y].parents)\n        assignment[Y] = y\n        result = bn.nodes[Y].cpt[(y, *pa)] * enumerate_all(bn, rest, assignment, evidence)\n        del assignment[Y]\n        return result\n    total = 0.0\n    for y in [True, False]:\n        assignment[Y] = y\n        pa = tuple(assignment.get(p, False) for p in bn.nodes[Y].parents)\n        total += bn.nodes[Y].cpt[(y, *pa)] * enumerate_all(bn, rest, assignment, evidence)\n    del assignment[Y]\n    return total\n\ndef inference_enumeration(bn, query, evidence):\n    post = {}\n    ev_total = 0.0\n    for qv in [True, False]:\n        post[qv] = enumerate_all(bn, bn.order, {}, {**evidence, query: qv})\n        ev_total += post[qv]\n    return {k: v/ev_total for k, v in post.items()}\n\nresult = inference_enumeration(bn, \"Burglary\", {\"JohnCalls\": True, \"MaryCalls\": True})\nprint(f\"P(Burglary=True | J,M) = {result[True]:.4f}\")\nprint(f\"P(Burglary=False | J,M) = {result[False]:.4f}\")\n# Output:\n# P(Burglary=True | J,M) = 0.0902\n# P(Burglary=False | J,M) = 0.9098\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why $O(d^n)$ — exponential in all variables:"
      }), " Enumeration sums over every possible assignment of $n$ unobserved variables. If each has $d$ values, there are $d^n$ assignments. Each requires $n$ CPT multiplications. Total work: $O(n d^n)$. Feasible for $n \\leq 15$ but intractable for $n > 30$."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n \\cdot d^n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enumerates all $d^n$ assignments, $n$ multiplications each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion depth = number of variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot reuse computations across queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Guaranteed exact posterior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential $O(d^n)$ complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant recomputation of subproblems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any BN (no restrictions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for >20 variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides ground truth for testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot exploit conditional independence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All variables observed:"
        }), " Single path through the network. Complexity drops to $O(n)$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No evidence:"
        }), " Returns prior marginal, but still $O(d^n)$ since no evidence constrains the space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numerical underflow:"
        }), " Product of many small CPT entries underflows double precision. Use log-space: $\\log(\\text{product}) = \\sum \\log(\\text{entry})$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected subgraphs:"
        }), " Enumeration still visits all variables even if query is independent of large network portions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-variable-elimination",
      children: "9.5 Variable Elimination"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--summing-a-multi-column-ledger",
      children: "Real-World Analogy — Summing a Multi-Column Ledger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have a spreadsheet with columns A, B, C, D and need totals for A=1. Instead of listing every row (enumeration):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate D:"
        }), " Sum over D for each (A,B,C) — reduces one dimension."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate C:"
        }), " Sum the result over C for each (A,B)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate B:"
        }), " Sum over B for each A."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read off:"
        }), " Result for A=1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Variable Elimination sums out (eliminates) variables one at a time, reusing intermediate results — like compressing a spreadsheet dimension by dimension."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithmic-steps-1",
      children: "Algorithmic Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Bayesian network BN, query Q, evidence E, elimination order\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Posterior distribution $P(Q \\mid E)$"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract all CPTs as factors from the BN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix evidence variables to observed values (restrict factors)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose elimination order for non-query, non-evidence variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each variable: multiply all factors mentioning it, then sum it out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply remaining factors and normalize"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function VARIABLE-ELIMINATION(bn, query, evidence, order) returns distribution\n    factors <- {CPT(X) for each variable X in bn}\n    // Apply evidence\n    for each (var, val) in evidence do\n        for each factor f that mentions var do\n            factors <- factors \\ {f} U {RESTRICT(f, var, val)}\n    // Eliminate non-query variables\n    for each Z in order do\n        related <- {f in factors | Z in scope(f)}\n        if related empty then continue\n        newFactor <- POINTWISE-PRODUCT(related)\n        newFactor <- SUM-OUT(newFactor, Z)\n        factors <- factors \\ related U {newFactor}\n    // Final product\n    result <- POINTWISE-PRODUCT(factors)\n    return NORMALIZE(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--ve-on-alarm-network",
      children: "Step-by-Step Dry Run — VE on Alarm Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " $P(B \\mid J=1, M=1)$ with elimination order: [A, E]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial factors:"
      }), " $f_B(B), f_E(E), f_A(A,B,E), f_J(A)$ [J=1], $f_M(A)$ [M=1]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Eliminate A"
      }), " — multiply $f_A, f_J, f_M$, sum out A"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A=0 Product"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A=1 Product"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sum Over A"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0004995"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0006300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.0011295"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0003550"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1827000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.1830550"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0000300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5922000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.5922300"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0000250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5985000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.5985250"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "New factor $f_1(B,E)$ created."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Eliminate E"
      }), " — multiply $f_E$ with $f_1$, sum out E"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["| B | E=F Product | E=T Product | Sum Over E |\n|---|---|-------------|-------------|-----------|\n| F | 0.00112724 | 0.00036611 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0.00149335"
      }), " |\n| T | 0.59104554 | 0.00119705 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0.59224259"
      }), " |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Multiply by $f_B(B)$ and normalize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(B=0, J, M) = 0.00149335 \\times 0.999 = 0.0014918$\n$P(B=1, J, M) = 0.59224259 \\times 0.001 = 0.0005922$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(B=1 \\mid J,M) = 0.0005922 / (0.0005922 + 0.0014918) \\approx 0.0902$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\nclass Factor:\n    def __init__(self, variables, values):\n        self.vars = variables\n        self.vals = values  # numpy array\n\n    def restrict(self, var, val):\n        idx = self.vars.index(var)\n        s = [slice(None)] * len(self.vars); s[idx] = val\n        return Factor([v for v in self.vars if v != var], self.vals[tuple(s)])\n\n    def sum_out(self, var):\n        idx = self.vars.index(var)\n        return Factor([v for v in self.vars if v != var], np.sum(self.vals, axis=idx))\n\ndef pointwise_product(factors):\n    if len(factors) == 1: return factors[0]\n    result = factors[0]\n    for f in factors[1:]:\n        all_vars = list(dict.fromkeys(result.vars + f.vars))\n        shape = [2] * len(all_vars); new_vals = np.ones(shape)\n        ri = tuple(all_vars.index(v) for v in result.vars)\n        fi = tuple(all_vars.index(v) for v in f.vars)\n        for idx in np.ndindex(*shape):\n            new_vals[idx] = result.vals[tuple(idx[i] for i in ri)] * f.vals[tuple(idx[i] for i in fi)]\n        result = Factor(all_vars, new_vals)\n    return result\n\ndef variable_elimination(bn, query, evidence, order):\n    factors = []\n    for name in bn.order:\n        node = bn.nodes[name]; all_v = node.parents + [name]\n        vals = np.zeros([2] * len(all_v))\n        for bits in np.ndindex(*([2] * len(all_v))):\n            vals[bits] = node.cpt.get(tuple(bool(b) for b in bits), 0.0)\n        factors.append(Factor(all_v, vals))\n    for ev, ev_val in evidence.items():\n        ev_i = 0 if not ev_val else 1\n        factors = [f.restrict(ev, ev_i) if ev in f.vars else f for f in factors]\n    for var in order:\n        rel = [f for f in factors if var in f.vars]\n        if not rel: continue\n        factors = [f for f in factors if var not in f.vars]\n        product = pointwise_product(rel)\n        factors.append(product.sum_out(var))\n    result = pointwise_product(factors)\n    idx = result.vars.index(query)\n    total = np.sum(result.vals)\n    post = {}\n    for val_idx, q_val in enumerate([True, False]):\n        s = [slice(None)] * len(result.vars); s[idx] = val_idx\n        post[q_val] = float(result.vals[tuple(s)]) / total\n    return post\n\nresult_ve = variable_elimination(bn, \"Burglary\",\n    {\"JohnCalls\": True, \"MaryCalls\": True}, [\"Earthquake\", \"Alarm\"])\nprint(f\"VE: P(Burglary=True | J,M) = {result_ve[True]:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why $O(d^{tw+1})$ where tw = treewidth:"
      }), " Complexity is dominated by the largest intermediate factor created during elimination. Treewidth = (max variables in any factor) - 1. If the largest factor has $tw+1$ variables with $d$ values each, the factor has $d^{tw+1}$ entries. Elimination order dramatically affects treewidth — a good order can reduce tw from 15 to 3."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n d^{tw+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each of $n$ vars eliminated; max factor = $d^{tw+1}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(d^{tw+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest intermediate factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n d^n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No dimension reduction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " VE is exponentially faster than enumeration when treewidth is small. For the Alarm network (treewidth = 2), VE needs $O(5 \\cdot 2^3) = O(40)$ ops vs enumeration's $O(5 \\cdot 2^5) = O(160)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Exact inference (same as enumeration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity depends on elimination order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exploits conditional independence via factoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding optimal elimination order is NP-hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reuses intermediate results (no redundant computation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case exponential in treewidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatically faster than enumeration for sparse BNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full network must fit in memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty network (no edges):"
        }), " All factors involve single variables. $O(n)$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polytree:"
        }), " Treewidth = max parents. Polynomial $O(n d^{k+1})$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Near-complete graph:"
        }), " Treewidth $\\approx n-1$. Degrades to $O(n d^n)$ — no better than enumeration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elimination order heuristics:"
        }), " Min-degree (eliminate fewest neighbors) and min-fill (eliminate adding fewest moral edges) are standard. A bad order (e.g., eliminating a highly-connected variable first) creates a huge intermediate factor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-approximate-inference-via-sampling",
      children: "9.6 Approximate Inference via Sampling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "961-rejection-sampling",
      children: "9.6.1 Rejection Sampling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Idea:"
      }), " Sample from the prior, reject samples inconsistent with evidence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " When evidence is rare ($P(E) = 0.001$), 99.9% of samples are rejected. Wastes computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function REJECTION-SAMPLING(bn, query, evidence, N) returns estimate\n    count <- 0\n    for j = 1 to N do\n        sample <- PRIOR-SAMPLE(bn)\n        if sample matches evidence then\n            count[query] <- count[query] + 1\n    return NORMALIZE(counts)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "962-likelihood-weighting",
      children: "9.6.2 Likelihood Weighting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Idea:"
      }), " Fix evidence variables to observed values; weight each sample by the probability of evidence given sampled ancestors. No samples are rejected — all contribute proportionally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "function LIKELIHOOD-WEIGHTING(bn, query, evidence, N) returns estimate\n    weights <- array of size N\n    for j = 1 to N do\n        w <- 1.0\n        for each variable X_i in topological order do\n            if X_i is evidence variable then\n                w <- w * P(X_i = e_i | parents(X_i))\n            else\n                x_i <- sample from P(X_i | parents(X_i))\n        weights[j] <- w\n    return NORMALIZED-WEIGHTED-ESTIMATE(query, weights)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "963-gibbs-sampling-mcmc",
      children: "9.6.3 Gibbs Sampling (MCMC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Idea:"
      }), " Resample each non-evidence variable conditioned on its Markov blanket (parents, children, co-parents). Converges to true posterior as sample size increases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--sampling-methods",
      children: "Complexity Analysis — Sampling Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Time per Sample"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Handles Rare Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rejection Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(1 / P(E))$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood Weighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(1 / \\sqrt{N})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gibbs Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n \\cdot m)$ per sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(1 / \\sqrt{N})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Good (correlated)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Likelihood Weighting handles rare evidence:"
      }), " Instead of discarding samples that don't match evidence, LW forces evidence variables to their observed values and compensates with weights. A sample with improbable evidence gets a low weight (e.g., $w = 0.001$) instead of being thrown away. Effective sample size = $(\\sum w_i)^2 / \\sum w_i^2$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-bayesian-networks-vs-markov-networks",
      children: "9.7 Bayesian Networks vs. Markov Networks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Bayesian Network"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Markov Network"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Directed acyclic (DAG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Undirected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CPTs $P(X_i \\mid Pa_i)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Potential functions $\\phi(C)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Local (CPTs sum to 1 per row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Global (partition function Z)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independence test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "d-separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Graph separation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclic dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Naturally handled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Closed-form ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Requires iterative approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Causal modeling, diagnosis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Spatial data, relational problems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use BNs when"
      }), " you have clear causal direction (disease $\\to$ symptom, cause $\\to$ effect). Experts can specify CPTs directly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use MNs when"
      }), " interactions are symmetric (pixel $\\leftrightarrow$ pixel, word co-occurrence). No natural direction exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-inference-methods-comparison",
      children: "9.8 Inference Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Exact?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Guarantee"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n d^n)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny networks ($n \\leq 15$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n d^{tw+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low treewidth networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Junction Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n d^{tw+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated queries on same BN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rejection Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(N / P(E))$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-probability evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood Weighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(N)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare evidence, quick estimate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gibbs Sampling (MCMC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(N \\times \\text{vars})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large networks, any evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loopy Belief Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Approximate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(n \\cdot d^{k+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-like graphs, fast approx"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Need exact + small BN $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enumeration"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Need exact + sparse BN $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable Elimination"
        }), " (choose good order)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Need exact + many queries $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Junction Tree"
        }), " (precompile once)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rare evidence + speed $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood Weighting"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Large network + any evidence $\\to$ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gibbs Sampling"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "99-interview-corner",
      children: "9.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-naive-bayes-classifier-why-is-it-called-naive",
      children: "Q1: Explain the Naive Bayes classifier. Why is it called \"naive\"?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Naive Bayes applies Bayes' theorem with a strong conditional independence assumption: all features are independent given the class label."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(y \\mid x_1, \\ldots, x_n) \\propto P(y) \\prod_{i=1}^n P(x_i \\mid y)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is \"naive\" because features in real data are rarely independent (e.g., words \"free\" and \"win\" in spam emails co-occur frequently). Despite this violated assumption, Naive Bayes often performs surprisingly well because the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "ranking"
      }), " of class probabilities is robust even when absolute probabilities are miscalibrated."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications:"
      }), " Spam filtering, sentiment analysis, document classification, medical diagnosis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-difference-between-bayesian-and-frequentist-statistics",
      children: "Q2: What is the difference between Bayesian and frequentist statistics?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Bayesian"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Frequentist"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Degree of belief"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Long-run frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Random variables (have distributions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fixed unknown constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Posterior distribution $P(\\theta \\mid D)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Point estimate + confidence interval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Required (can be uninformative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Not used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\"95% chance $\\theta$ is in this interval\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\"95% of intervals contain $\\theta$\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical difference:"
      }), " Bayesian methods naturally incorporate prior knowledge and produce interpretable probability statements. Frequentist methods avoid subjective priors but require more complex uncertainty characterization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-does-correlation-imply-causation",
      children: "Q3: Does correlation imply causation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No. Correlation does not imply causation. This is the central warning of probabilistic reasoning."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Ice cream sales and drowning incidents are correlated. The cause is not ice cream $\\to$ drowning, but a hidden confounder: hot weather (which drives both ice cream sales and swimming)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Bayesian networks, this is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fork"
      }), " structure: Weather $\\to$ Ice Cream and Weather $\\to$ Drowning. Conditioning on Weather makes Ice Cream and Drowning independent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pearl's Causal Hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Association"
        }), " — \"seeing\": correlation, mutual information (Layer 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intervention"
        }), " — \"doing\": what happens if we force a variable (Layer 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counterfactuals"
        }), " — \"imagining\": what would have happened differently (Layer 3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayesian networks (with causal interpretation) support Layer 2 and 3 reasoning via do-calculus."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "910-applications-in-real-systems",
      children: "9.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medical-diagnosis-pathfinder-qmr-internist",
      children: "Medical Diagnosis (PathFinder, QMR, Internist)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " Bayesian network with diseases as root nodes and symptoms/test results as leaf nodes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " PathFinder (lymph node pathology) uses a BN with over 100 diseases and 300+ findings. It outperformed expert pathologists in diagnosing certain conditions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patient presents symptoms $\\to$ evidence enters BN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inference computes posterior over diseases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System suggests most informative next test (value of information)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until diagnosis confidence exceeds threshold"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Reduces diagnostic errors by systematically weighing evidence that humans might miss or misweight."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spam-filtering-naive-bayes-in-email-systems",
      children: "Spam Filtering (Naive Bayes in Email Systems)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " Naive Bayes classifier with words as features."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training: Count word frequencies in spam and ham emails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each word $w$, compute $P(w \\mid Spam)$ and $P(w \\mid Ham)$ with Laplace smoothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For a new email, compute $P(Spam \\mid words) \\propto P(Spam) \\prod_{w \\in email} P(w \\mid Spam)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify as spam if posterior exceeds threshold"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world:"
      }), " Gmail's filter processes billions of emails daily using variants of Naive Bayes. False positive rate is <0.1%."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "speech-recognition-hidden-markov-models",
      children: "Speech Recognition (Hidden Markov Models)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " HMM where hidden states are phonemes/words and observations are audio features (MFCCs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audio signal $\\to$ frame extraction (10ms windows) $\\to$ MFCC feature vectors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HMM for each phoneme: states = beginning/middle/end of phoneme; emissions = MFCC distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viterbi algorithm finds most likely phoneme sequence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language model (n-gram) rescoring improves word-level accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world:"
      }), " Google's speech recognition uses HMM-GMM hybrids (increasingly replaced by DNN-HMM hybrids) achieving <5% word error rate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-applications",
      children: "Other Applications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robotics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBN / Kalman Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State estimation (robot localization)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk assessment, fraud detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BN / HMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gene regulatory networks, protein folding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMM / BN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part-of-speech tagging, named entity recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computer Vision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BN / Markov Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image segmentation, object recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommender Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User preference modeling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Exact?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Guarantee"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Handles Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(exp treewidth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rejection Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N / P(e))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rare evidence fails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood Weighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gibbs Sampling (MCMC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N × vars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--d-separation-rules",
      children: "Quick Reference — d-Separation Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Path Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Condition to Block Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain (X $\\to$ Z $\\to$ Y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Serial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Evidence on Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fork (X $\\leftarrow$ Z $\\to$ Y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Diverging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Evidence on Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collider (X $\\to$ Z $\\leftarrow$ Y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Converging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No evidence on Z or descendants"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gibbs Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Viterbi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " In d-separation, what happens when you condition on a collider?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The path becomes blocked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The path becomes unblocked (creates dependence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The collider becomes independent of its parents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Nothing changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Conditioning on a collider opens the path, creating dependence between its parents (explaining away)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " The HMM forward algorithm computes what quantity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The most likely state sequence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The belief state P(X_t | e_{1:t}) recursively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The posterior over all hidden states jointly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The entropy of the observation distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The forward algorithm recursively computes the belief state (filtering distribution) at each time step."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Likelihood weighting fixes evidence variables. What problem does it still face?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It cannot handle continuous variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) If evidence has low probability, most samples have low weight (inefficient)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It does not converge to the true posterior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It requires the network to be a tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Likelihood weighting is inefficient when evidence has low prior probability because most samples receive negligible weight."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Why does a Bayesian network require fewer parameters than a full joint distribution table?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It uses approximation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Conditional independence assumptions factorize the distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It ignores rare events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It stores probabilities as logarithms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The chain rule factorization via conditional independence reduces parameters from O(d^n) to O(n * d^{k+1})."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Which inference method is guaranteed to give the exact posterior for any Bayesian network?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Likelihood Weighting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Gibbs Sampling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Variable Elimination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Rejection Sampling with infinite samples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Variable Elimination (and Enumeration/Junction Tree) are exact; sampling methods are only asymptotically exact."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "911-summary",
      children: "9.11 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayesian networks provide a compact graphical representation of joint probability distributions. Exact inference via variable elimination is efficient for low-treewidth networks; approximate methods scale to larger networks. Temporal models extend static BNs to sequential domains. The key principle throughout is that conditional independence — captured by the graph structure — makes probabilistic reasoning tractable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bayes' rule is the foundation: posterior $\\propto$ likelihood $\\times$ prior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BNs factorize joint distributions using conditional independence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d-separation provides a graphical test for independence relations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exact inference (VE) is exponential in treewidth; sampling methods scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explaining away (collider conditioning) is the most counterintuitive BN phenomenon"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temporal models (DBN, HMM) extend BNs to sequential data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove Bayes' rule from the definition of conditional probability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain d-separation. Why are colliders different from chains and forks?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare rejection sampling and likelihood weighting. When does each perform well?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the conditional independence assumptions encoded by the Alarm network's structure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why variable elimination is faster than enumeration for sparse networks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a Bayesian network for a medical diagnosis domain with 5 diseases and 8 symptoms. Define CPTs and compute the posterior probability of each disease given a symptom set using variable elimination."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a Hidden Markov Model for part-of-speech tagging with 10 tags. Use the Viterbi algorithm to find the most likely tag sequence for a 5-word sentence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Naive Bayes for spam classification. Train on 100 labeled emails and test on 20 unseen messages. Compare accuracy with a simple keyword-based classifier."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Gibbs sampling for the Alarm Bayesian network. Compare convergence speed and accuracy against exact inference. How many samples are required to achieve within 1% error on posterior probabilities?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a dataset of 20 patient records (Disease, Fever, Cough, TestResult), learn the structure and parameters of a Bayesian network. Compare the learned BN's predictions against a hand-crafted BN."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple HMM-based named entity recognizer. Use the Viterbi algorithm to label each word in a sentence as PERSON, LOCATION, ORGANIZATION, or OTHER."
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