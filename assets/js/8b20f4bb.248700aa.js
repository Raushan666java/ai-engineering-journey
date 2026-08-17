"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61669],{

/***/ 21279
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_08_uncertainty_md_8b2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-08-uncertainty-md-8b2.json
const site_docs_courses_artificial_intelligence_08_uncertainty_md_8b2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/08-uncertainty","title":"Chapter 8: Uncertainty and Probabilistic Reasoning","description":"Previous Logical Reasoning and Inference | Next Machine Learning","source":"@site/docs/courses/artificial-intelligence/08-uncertainty.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/08-uncertainty","permalink":"/ai-engineering-journey/artificial-intelligence/08-uncertainty","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"08-uncertainty","slug":"/artificial-intelligence/08-uncertainty","title":"Chapter 8: Uncertainty and Probabilistic Reasoning","sidebar_label":"Chapter 8: Uncertainty and Probabilistic Reasoning","sidebar_position":15},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 8: Planning","permalink":"/ai-engineering-journey/artificial-intelligence/08-planning"},"next":{"title":"Chapter 9: Machine Learning: Learning from Examples","permalink":"/ai-engineering-journey/artificial-intelligence/09-machine-learning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/08-uncertainty.md


const frontMatter = {
	id: '08-uncertainty',
	slug: '/artificial-intelligence/08-uncertainty',
	title: 'Chapter 8: Uncertainty and Probabilistic Reasoning',
	sidebar_label: 'Chapter 8: Uncertainty and Probabilistic Reasoning',
	sidebar_position: 15
};
const contentTitle = 'Chapter 8: Uncertainty and Probabilistic Reasoning';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Uncertainty Matters in AI",
  "id": "why-uncertainty-matters-in-ai",
  "level": 2
}, {
  "value": "Real-World Analogy → Weather Forecast",
  "id": "real-world-analogy--weather-forecast",
  "level": 3
}, {
  "value": "Probability vs Logic → Comparison Table",
  "id": "probability-vs-logic--comparison-table",
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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Problem of Uncertainty",
  "id": "the-problem-of-uncertainty",
  "level": 3
}, {
  "value": "Topic 1 → Probability Basics",
  "id": "topic-1--probability-basics",
  "level": 2
}, {
  "value": "Real-World Analogy → Rolling Dice",
  "id": "real-world-analogy--rolling-dice",
  "level": 3
}, {
  "value": "Why It Matters in AI",
  "id": "why-it-matters-in-ai",
  "level": 3
}, {
  "value": "Core Concepts",
  "id": "core-concepts",
  "level": 3
}, {
  "value": "Algorithm → Computing Marginal from Joint",
  "id": "algorithm--computing-marginal-from-joint",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Probability Basics",
  "id": "advantages--disadvantages-of-probability-basics",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "Topic 2 → Conditional Probability",
  "id": "topic-2--conditional-probability",
  "level": 2
}, {
  "value": "Real-World Analogy → Medical Test",
  "id": "real-world-analogy--medical-test",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Algorithm → Computing Conditional Probability",
  "id": "algorithm--computing-conditional-probability",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "Topic 3 → Bayes&#39; Rule",
  "id": "topic-3--bayes-rule",
  "level": 2
}, {
  "value": "Real-World Analogy → Spam Filtering",
  "id": "real-world-analogy--spam-filtering",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 3
}, {
  "value": "Algorithm → Bayesian Belief Update",
  "id": "algorithm--bayesian-belief-update",
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
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "Topic 4 → Bayesian Networks",
  "id": "topic-4--bayesian-networks",
  "level": 2
}, {
  "value": "Real-World Analogy → Car Won&#39;t Start",
  "id": "real-world-analogy--car-wont-start",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-2",
  "level": 3
}, {
  "value": "Bayesian Network Properties",
  "id": "bayesian-network-properties",
  "level": 3
}, {
  "value": "Algorithm → Constructing a Bayesian Network",
  "id": "algorithm--constructing-a-bayesian-network",
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
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "Topic 5 → Inference in Bayesian Networks",
  "id": "topic-5--inference-in-bayesian-networks",
  "level": 2
}, {
  "value": "Real-World Analogy → Fire Department",
  "id": "real-world-analogy--fire-department",
  "level": 3
}, {
  "value": "Algorithm → Variable Elimination",
  "id": "algorithm--variable-elimination",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Inference Methods",
  "id": "advantages--disadvantages-of-inference-methods",
  "level": 3
}, {
  "value": "Edge Cases in Inference",
  "id": "edge-cases-in-inference",
  "level": 3
}, {
  "value": "Concept Comparison → Inference Methods",
  "id": "concept-comparison--inference-methods",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain Bayes&#39; Theorem and its applications in machine learning.",
  "id": "q1-explain-bayes-theorem-and-its-applications-in-machine-learning",
  "level": 3
}, {
  "value": "Q2: Why is Naive Bayes &quot;naive&quot;? How does it work?",
  "id": "q2-why-is-naive-bayes-naive-how-does-it-work",
  "level": 3
}, {
  "value": "Q3: How would you learn the structure of a Bayesian Network from data?",
  "id": "q3-how-would-you-learn-the-structure-of-a-bayesian-network-from-data",
  "level": 3
}, {
  "value": "Q4: What is d-separation and why does it matter?",
  "id": "q4-what-is-d-separation-and-why-does-it-matter",
  "level": 3
}, {
  "value": "Q5: What are the trade-offs between exact and approximate inference?",
  "id": "q5-what-are-the-trade-offs-between-exact-and-approximate-inference",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Spam Filtering (Naive Bayes)",
  "id": "1-spam-filtering-naive-bayes",
  "level": 3
}, {
  "value": "2. Medical Diagnosis (Bayesian Networks)",
  "id": "2-medical-diagnosis-bayesian-networks",
  "level": 3
}, {
  "value": "3. Speech Recognition (Hidden Markov Models)",
  "id": "3-speech-recognition-hidden-markov-models",
  "level": 3
}, {
  "value": "4. Fault Diagnosis (Bayesian Networks)",
  "id": "4-fault-diagnosis-bayesian-networks",
  "level": 3
}, {
  "value": "5. Robotics (Bayes Filters → Kalman / Particle Filters)",
  "id": "5-robotics-bayes-filters--kalman--particle-filters",
  "level": 3
}, {
  "value": "Quick Reference → Probability Rules",
  "id": "quick-reference--probability-rules",
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
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "chapter-8-uncertainty-and-probabilistic-reasoning",
        children: "Chapter 8: Uncertainty and Probabilistic Reasoning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/07-logical-reasoning",
        children: "Chapter 7: Logical Reasoning and Inference"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/09-machine-learning",
        children: "Chapter 9: Machine Learning"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why agents must handle uncertainty and the role of probability theory in doing so."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the basics of probability: joint distributions, conditional probability, and Bayes' Rule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct and interpret Bayesian Networks as a representation of probabilistic relationships."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform inference in Bayesian Networks using exact methods like Variable Elimination."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the concept of independence and conditional independence."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-uncertainty-matters-in-ai",
      children: "Why Uncertainty Matters in AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--weather-forecast",
      children: "Real-World Analogy → Weather Forecast"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine planning a picnic. The weather forecast says \"70% chance of rain.\" You cannot know for certain whether it will rain, but you must decide: bring an umbrella or cancel the picnic. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reasoning under uncertainty"
      }), " → you have partial information and must act anyway."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In AI, agents face the same dilemma. A self-driving car cannot know with 100% certainty whether the dark shape ahead is a pedestrian or a shadow. A medical diagnosis system cannot be sure the patient has a disease → only that symptoms suggest it. Just as you weigh the forecast against the cost of a ruined picnic, AI agents must quantify uncertainty and take optimal actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "probability-vs-logic--comparison-table",
      children: "Probability vs Logic → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Truth Value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True / False / Unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous [0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Belief Update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deductive (certain inference)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian update (belief revision)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles Noise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → assumes perfect knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → models noise explicitly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles Missing Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor → breaks without complete info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally integrates partial evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uncertainty Representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot express degree of belief"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degree of belief via probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monotonic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → adding facts never retracts conclusions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → new evidence can change beliefs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computational Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (SAT, resolution)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (sum over variables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World Suitability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toy domains, formal verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical diagnosis, NLP, robotics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight:"
        }), " Logic excels when the world is fully known and deterministic. Probability excels in the real world → noisy sensors, missing data, stochastic outcomes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Problem of Uncertainty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial observability, stochasticity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random variable, joint distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Probability Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional probability, Bayes' Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior, posterior, likelihood"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAG, CPT, chain rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factorization, parent-child"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable elimination, sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood weighting, MCMC"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Uncertainty Sources] --> B[Probability Basics]\n    B --> C[Bayes' Rule]\n    A --> D[Bayesian Networks]\n    D --> E[CPT + Chain Rule]\n    D --> F[Inference]\n    F --> G[Variable Elimination]\n    F --> H[Likelihood Weighting]\n    F --> I[Gibbs Sampling / MCMC]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch08-uncertainty.png",
        alt: "Uncertainty and Probabilistic Reasoning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-problem-of-uncertainty",
      children: "The Problem of Uncertainty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In real-world environments, agents rarely have access to the complete state of the world. Uncertainty arises from:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial Observability"
        }), ": Missing information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stochasticity"
        }), ": Randomness in outcomes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignorance"
        }), ": Incomplete models of the world."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-1--probability-basics",
      children: "Topic 1 → Probability Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--rolling-dice",
      children: "Real-World Analogy → Rolling Dice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you roll a fair six-sided die, you know the possible outcomes {1,2,3,4,5,6} but not which will occur. Probability quantifies this uncertainty: P(Roll=3) = 1/6 ≈ 0.167. Over many rolls, the relative frequency of each face approaches 1/6. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "frequentist interpretation"
      }), ". In AI, we also use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayesian interpretation"
      }), ": probability as degree of belief."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-it-matters-in-ai",
      children: "Why It Matters in AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every AI system makes decisions under uncertainty. Probability gives us the language to say \"I am 80% confident this email is spam\" instead of \"this email is spam\" (which is often false). Without probability, AI would be limited to purely deterministic, toy environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-concepts",
      children: "Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random Variable"
        }), ": A variable whose value is subject to variations due to chance. Example: $Weather \\in {Sunny, Rainy}$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability Distribution"
        }), ": Maps each outcome to its probability. Sum of all probabilities = 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Joint Probability Distribution"
        }), ": Specifies the probability of every possible combination of values for a set of random variables. For 3 boolean variables, the full joint has 2³ = 8 entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marginal Probability"
        }), ": $P(A)$ → the probability of A regardless of other variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm--computing-marginal-from-joint",
      children: "Algorithm → Computing Marginal from Joint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Joint distribution table P(X, Y), target variable X\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " P(X)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify all possible values of X"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each value x of X:\na. Sum the probabilities of all joint entries where X = x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the resulting distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MARGINALIZE(Joint P(X,Y), variable X):\n    result = empty distribution over X\n    for each value x in domain(X):\n        total = 0\n        for each value y in domain(Y):\n            total = total + P(X=x, Y=y)\n        result[x] = total\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Marginal from Joint Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We have two variables: Weather (W) ∈ {Sunny, Rainy} and Mood (M) ∈ {Happy, Sad}. Joint distribution P(W, M):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(W,M)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rainy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rainy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.45"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute P(Weather=Sunny):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Sunny) = P(Sunny, Happy) + P(Sunny, Sad) = 0.30 + 0.15 = 0.45"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute P(Weather=Rainy):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Rainy) = P(Rainy, Happy) + P(Rainy, Sad) = 0.10 + 0.45 = 0.55"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\ndef marginalize(joint, target_var):\n    \"\"\"Marginalize joint distribution over target variable.\n    joint: list of dicts with 'value' tuple and 'prob'\n    target_var: index of variable to keep\n    \"\"\"\n    result = defaultdict(float)\n    for entry in joint:\n        key = entry['value'][target_var]\n        result[key] += entry['prob']\n    return dict(result)\n\n# Example\njoint_table = [\n    {'value': ('Sunny', 'Happy'), 'prob': 0.30},\n    {'value': ('Sunny', 'Sad'),   'prob': 0.15},\n    {'value': ('Rainy', 'Happy'), 'prob': 0.10},\n    {'value': ('Rainy', 'Sad'),   'prob': 0.45},\n]\n\np_weather = marginalize(joint_table, target_var=0)\nprint(\"P(Weather):\", p_weather)\n# Output: P(Weather): {'Sunny': 0.45, 'Rainy': 0.55}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space (full joint)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(dⁿ) for n variables each with d values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every combination must be stored → exponential explosion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (marginalize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(dⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must sum over all other dimensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPT representation (BN)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × dᵏ) where k = max parents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only local parents; k << n in sparse graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The full joint distribution is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "impractical"
      }), " beyond ~20 boolean variables (2²⁰ ≈ 1 million entries). This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "curse of dimensionality"
      }), " and the primary motivation for Bayesian Networks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-probability-basics",
      children: "Advantages & Disadvantages of Probability Basics"
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
            children: "Principled framework for uncertainty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full joint distribution is exponentially large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematically rigorous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires known probabilities (may be hard to estimate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables optimal decision-making"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independence assumptions may be wrong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous variables require integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Probabilities"
        }), ": If P(e) = 0 (observed impossible evidence), Bayes' rule divides by zero. Solution: use probability density for continuous vars; check for zero in code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extremely Rare Events"
        }), ": Prior probability near zero → posterior stays near zero even with strong evidence. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rare disease problem"
        }), " (see Bayes' rule example)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflicting Evidence"
        }), ": Two pieces of evidence pointing opposite directions. Probability naturally balances them via Bayesian update."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Variables"
        }), ": Infinite outcomes. Use Probability Density Functions (PDFs) and integration instead of summation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-2--conditional-probability",
      children: "Topic 2 → Conditional Probability"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--medical-test",
      children: "Real-World Analogy → Medical Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A COVID test is 95% accurate. If you test positive, what is the probability you actually have COVID? It depends on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "base rate"
      }), " (prevalence) in your area. If only 1% of people have COVID, a positive test is more likely to be a false positive than a true positive. Conditional probability captures this: P(COVID | Positive) depends on P(Positive | COVID), P(COVID), and P(Positive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditional probability $P(A|B)$ is the probability of event A given that event B has occurred:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm--computing-conditional-probability",
      children: "Algorithm → Computing Conditional Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Joint distribution P(X, Y), values x, y\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " P(X=x | Y=y)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute P(X=x, Y=y) from the joint table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute P(Y=y) by marginalizing over X"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divide: P(X=x | Y=y) = P(X=x, Y=y) / P(Y=y)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function CONDITIONAL_PROB(joint, x_val, y_val, x_idx, y_idx):\n    joint_prob = lookup P(X=x_val, Y=y_val)\n    prob_y = 0\n    for each value x in domain(X):\n        prob_y = prob_y + lookup P(X=x, Y=y_val)\n    if prob_y == 0:\n        return undefined\n    return joint_prob / prob_y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Conditional from Joint:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the same Weather-Mood table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P(W,M)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rainy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rainy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.45"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is P(Mood=Happy | Weather=Sunny)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(M=Happy, W=Sunny) = 0.30"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(W=Sunny) = 0.30 + 0.15 = 0.45"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(M=Happy | W=Sunny) = 0.30 / 0.45 = 0.667"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is P(Weather=Rainy | Mood=Sad)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(W=Rainy, M=Sad) = 0.45"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(M=Sad) = 0.15 + 0.45 = 0.60"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(W=Rainy | M=Sad) = 0.45 / 0.60 = 0.75"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def conditional_prob(joint, x_val, y_val, x_idx, y_idx):\n    \"\"\"Compute P(X=x_val | Y=y_val) from joint table.\"\"\"\n    joint_prob = 0\n    prob_y = 0\n    for entry in joint:\n        if entry['value'][x_idx] == x_val and entry['value'][y_idx] == y_val:\n            joint_prob = entry['prob']\n        if entry['value'][y_idx] == y_val:\n            prob_y += entry['prob']\n    if prob_y == 0:\n        raise ValueError(\"P(Y=y_val) = 0, conditional undefined\")\n    return joint_prob / prob_y\n\np_happy_given_sunny = conditional_prob(\n    joint_table, 'Happy', 'Sunny', x_idx=1, y_idx=0\n)\nprint(f\"P(Happy | Sunny) = {p_happy_given_sunny:.3f}\")\n# Output: P(Happy | Sunny) = 0.667\n\np_rainy_given_sad = conditional_prob(\n    joint_table, 'Rainy', 'Sad', x_idx=0, y_idx=1\n)\nprint(f\"P(Rainy | Sad) = {p_rainy_given_sad:.3f}\")\n# Output: P(Rainy | Sad) = 0.750\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Captures dependency between events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires joint distribution (may be large)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for causal reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to zero-probability issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in every ML model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes accurate probability estimates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(B) = 0"
        }), ": Conditional probability undefined. In practice, use smoothing (Laplace add-one) or density estimation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Conditioning"
        }), ": P(A | B) for continuous B requires PDF ratio, not simple division."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-3--bayes-rule",
      children: "Topic 3 → Bayes' Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--spam-filtering",
      children: "Real-World Analogy → Spam Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your email provider flags a message containing \"FREE MONEY!!!\". What is the probability it's spam? Historically, 60% of all emails are spam, and \"FREE MONEY!!!\" appears in 80% of spam but only 5% of legitimate emails. Bayes' Rule tells us:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(spam | \"FREE MONEY!!!\") = P(\"FREE MONEY!!!\" | spam) × P(spam) / P(\"FREE MONEY!!!\")"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "= (0.80 × 0.60) / (0.80 × 0.60 + 0.05 × 0.40) = 0.48 / 0.50 = 0.96"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "96% chance it's spam → move to spam folder!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayes' Rule is the fundamental formula for updating beliefs given evidence:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(A)"
        }), " = Prior probability (belief before evidence)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(B|A)"
        }), " = Likelihood (probability of evidence given cause)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(B)"
        }), " = Marginal likelihood (normalizing constant)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P(A|B)"
        }), " = Posterior probability (updated belief after evidence)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm--bayesian-belief-update",
      children: "Algorithm → Bayesian Belief Update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Prior P(A), likelihood P(B|A), evidence B\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Posterior P(A|B)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the hypothesis A and evidence B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the prior P(A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine P(not A) = 1 - P(A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the likelihood P(B|A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine P(B|not A) → false positive rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute marginal P(B) = P(B|A)P(A) + P(B|not A)P(not A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute posterior: P(A|B) = P(B|A) × P(A) / P(B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return posterior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BAYES_RULE(prior, likelihood_given_true, likelihood_given_false):\n    prior_false = 1 - prior\n    marginal = likelihood_given_true * prior + likelihood_given_false * prior_false\n    if marginal == 0:\n        return undefined\n    posterior = (likelihood_given_true * prior) / marginal\n    return posterior\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Medical Diagnosis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(Disease)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior → 1% population has disease"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(Positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.95"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(Positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test Positive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Disease) = 0.01"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Healthy) = 1 - 0.01 = 0.99"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Positive | Disease) = 0.95, P(Positive | Healthy) = 0.05"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Positive) = (0.95 × 0.01) + (0.05 × 0.99) = 0.0095 + 0.0495 = 0.059"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(Disease | Positive) = 0.0095 / 0.059 ≈ 0.161"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table → Each step:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Calculation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prior = P(D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(not D) = 1 - 0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.99"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "numerator = 0.95 × 0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0095"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "denominator = 0.95×0.01 + 0.05×0.99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.059"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "posterior = 0.0095 / 0.059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.161"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even with 95% accurate test, probability of having the disease after a positive result is only 16.1%! This is because the disease is rare (1%) and the false positive rate (5%) generates many false alarms."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bayes_rule(prior, likelihood_given_true, likelihood_given_false):\n    \"\"\"Compute P(A|B) using Bayes' Rule.\"\"\"\n    prior_false = 1.0 - prior\n    marginal = likelihood_given_true * prior + likelihood_given_false * prior_false\n    if marginal == 0.0:\n        return None\n    posterior = (likelihood_given_true * prior) / marginal\n    return posterior\n\n# Medical diagnosis example\np_disease = 0.01\np_pos_given_disease = 0.95\np_pos_given_healthy = 0.05\n\np_disease_given_pos = bayes_rule(p_disease, p_pos_given_disease, p_pos_given_healthy)\nprint(f\"P(Disease | Positive) = {p_disease_given_pos:.3f}\")\n# Output: P(Disease | Positive) = 0.161\n\np2 = bayes_rule(p_disease_given_pos, p_pos_given_disease, p_pos_given_healthy)\nprint(f\"P(Disease | Second Positive) = {p2:.3f}\")\n# Output: P(Disease | Second Positive) = 0.784\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just three multiplications and a division"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested updates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) for k sequential updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each update is O(1); posterior becomes new prior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple hypotheses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for n hypotheses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must compute and normalize over all n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous variables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(integration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires numerical integration over continuous domains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bayes' Rule is constant-time for a single binary hypothesis. Its power is not computational efficiency but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "epistemic efficiency"
      }), " → it gives the principled way to incorporate evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
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
            children: "Optimal belief update (mathematically proven)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires accurate likelihood estimates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles sequential evidence naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior choice can bias results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretable → posterior has clear meaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive for large hypothesis spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for Bayesian ML (Bayesian NNs, GPs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration over continuous vars is hard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Prior"
        }), ": If P(A) = 0, posterior stays 0 regardless of evidence. The prior completely rules out the hypothesis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perfect Likelihood"
        }), ": If P(B|A) = 1 and P(B|not A) = 0, then posterior = 1 → certainty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-informative Prior"
        }), ": When P(A) = 0.5, the posterior depends entirely on the likelihood ratio."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Evidence"
        }), ": P(A|B1, B2) requires either P(B1, B2 | A) or the Naive Bayes assumption P(B1, B2 | A) = P(B1|A)P(B2|A)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-4--bayesian-networks",
      children: "Topic 4 → Bayesian Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--car-wont-start",
      children: "Real-World Analogy → Car Won't Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your car won't start. Possible causes: dead battery, empty fuel tank, or faulty starter. These causes interact: a dead battery also makes headlights dim; an empty tank doesn't. We can model this as a network: Battery → Starts, Fuel → Starts, Battery → Headlights. Each node's probability depends on its direct causes (parents). This structure makes reasoning efficient: we don't need to consider all 2⁵ = 32 combinations independently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayesian Network"
      }), " (BN) is a Directed Acyclic Graph (DAG) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nodes"
        }), " = random variables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges"
        }), " = direct probabilistic influence (parent → child)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each node has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional Probability Table (CPT)"
        }), " quantifying the influence of its parents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bayesian-network-properties",
      children: "Bayesian Network Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DAG Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed acyclic graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents circular dependencies; ensures consistent joint distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factorization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(X) = ∏ P(Xᵢ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parents(Xᵢ))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPT Representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node stores P(node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parents)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditional Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node independent of non-descendants given parents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables efficient inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D-Separation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph-theoretic criterion for independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines which variables are independent given evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Markov Blanket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parents + Children + Children's other parents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sufficient for local inference → node independent of rest given blanket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding/removing edges affects only local CPTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to extend; local changes don't require full recomputation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpretability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable graph structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain experts can validate and refine the model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm--constructing-a-bayesian-network",
      children: "Algorithm → Constructing a Bayesian Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Set of random variables, domain knowledge or data\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " BN structure (DAG) + CPTs"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose an ordering of variables: X₁, X₂, ..., Xₙ (causes before effects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each variable Xᵢ:\na. Identify a minimal set of parents from X₁...Xᵢ₋₁ that directly influence Xᵢ\nb. Add directed edges from each parent to Xᵢ\nc. Define the CPT P(Xᵢ | Parents(Xᵢ))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify the graph is acyclic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the network"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function CONSTRUCT_BN(variables, domain_knowledge):\n    order = TOPOLOGICAL_SORT(variables)\n    for each X in order:\n        parents = domain_knowledge.get_direct_causes(X)\n        add edges from each parent to X\n        CPT[X] = ESTIMATE_CPT(X, parents)\n    if HAS_CYCLE(graph):\n        error(\"Bayesian Network must be acyclic\")\n    return BN(graph, CPT)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Burglary Alarm Network:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Variables: Burglary (B), Earthquake (E), Alarm (A), JohnCalls (J), MaryCalls (M)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (expert knowledge):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Burglary and Earthquake cause Alarm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alarm causes John to call and Mary to call"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CPTs:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "P(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "P(E)"
          }), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.002"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| B | E | P(A=true | B, E) |\n|---|---|-----------------|\n| F | F | 0.001 |\n| F | T | 0.29 |\n| T | F | 0.94 |\n| T | T | 0.95 |"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| A | P(J=true | A) |\n|---|---------------|\n| F | 0.05 |\n| T | 0.90 |"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| A | P(M=true | A) |\n|---|---------------|\n| F | 0.01 |\n| T | 0.70 |"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameter Count Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Representation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Joint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2⁵ - 1 = 31"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BN (this network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 1 + 4 + 2 + 2 = 10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The BN uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "68% fewer parameters"
      }), " → and the gap widens as the network grows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BayesianNode:\n    def __init__(self, name, parents, cpt):\n        self.name = name\n        self.parents = parents\n        self.cpt = cpt\n\nclass BayesianNetwork:\n    def __init__(self, nodes):\n        self.nodes = {n.name: n for n in nodes}\n\n    def get_prob(self, name, value, parent_values=None):\n        node = self.nodes[name]\n        key = tuple(parent_values[p] for p in node.parents) if parent_values else ()\n        return node.cpt[key][value]\n\n# Build the Burglary Alarm network\nB = BayesianNode('Burglary', [], {\n    (): {True: 0.001, False: 0.999}\n})\nE = BayesianNode('Earthquake', [], {\n    (): {True: 0.002, False: 0.998}\n})\nA = BayesianNode('Alarm', ['Burglary', 'Earthquake'], {\n    (False, False): {True: 0.001, False: 0.999},\n    (False, True):  {True: 0.290, False: 0.710},\n    (True, False):  {True: 0.940, False: 0.060},\n    (True, True):   {True: 0.950, False: 0.050},\n})\nJ = BayesianNode('JohnCalls', ['Alarm'], {\n    (False,): {True: 0.05, False: 0.95},\n    (True,):  {True: 0.90, False: 0.10},\n})\nM = BayesianNode('MaryCalls', ['Alarm'], {\n    (False,): {True: 0.01, False: 0.99},\n    (True,):  {True: 0.70, False: 0.30},\n})\n\nbn = BayesianNetwork([B, E, A, J, M])\n\nevidence = {\n    'Burglary': False, 'Earthquake': False, 'Alarm': False,\n    'JohnCalls': False, 'MaryCalls': False\n}\nprob = 1.0\nfor node in bn.nodes.values():\n    parent_vals = {p: evidence[p] for p in node.parents}\n    prob *= bn.get_prob(node.name, evidence[node.name], parent_vals)\nprint(f\"P(all false) = {prob:.10f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full joint parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential in number of variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BN parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × 2ᵏ) where k = max parents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential in max parents, not total variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference (exact)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(exp(treewidth))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-hard in worst case; tractable for low treewidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) heuristic / NP-hard optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each edge direction needs evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory (CPT storage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(∑ 2^{"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parents(Xᵢ)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: if the graph is sparse (each node has few parents), the BN is exponentially more compact than the full joint."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
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
            children: "Visually interpretable → graph shows causal structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structure learning is NP-hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compact representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact inference is NP-hard (treewidth-dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles missing data naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPTs grow exponentially with parent count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encodes causal relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables bidirectional reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous vars need discretization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network with Many Parents"
        }), ": CPT size explodes. Solution: use canonical models like noisy-OR (each parent independently causes child; probabilities combine via P(child=True) = 1 - ∏(1 - pᵢ))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Variables"
        }), ": Use Gaussian BNs (linear Gaussian dependencies) or discretize."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparse Data for CPT"
        }), ": Use Dirichlet priors for smoothing; Bayesian estimation instead of ML."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic Dependencies"
        }), ": Temporal modeling via Dynamic Bayesian Networks (DBNs) → unroll over time slices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-5--inference-in-bayesian-networks",
      children: "Topic 5 → Inference in Bayesian Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--fire-department",
      children: "Real-World Analogy → Fire Department"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a fire station receives an alarm, they need to infer the most likely cause: Is it a real fire, a prank, or a system malfunction? They might call neighbors to ask (observing JohnCalls or MaryCalls). Gradually, they narrow down the cause. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inference"
      }), " → computing P(query | evidence) using the BN's structure and CPTs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm--variable-elimination",
      children: "Algorithm → Variable Elimination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " BN, query variable Q, evidence variables E, elimination ordering\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " P(Q | E)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiply all CPT factors relevant to the query"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each hidden variable H in elimination order:\na. Join (multiply) all factors involving H\nb. Sum out H (marginalize) to create a new factor\nc. Remove all factors that mentioned H"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normalize the resulting factor over Q"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return P(Q | E)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function VARIABLE_ELIMINATION(BN, query, evidence, order):\n    factors = all CPTs in BN\n    for each factor in factors:\n        factor.restrict(evidence)\n    for each var in order:\n        if var == query: continue\n        related = [f for f in factors if var in f.variables]\n        new_factor = SUM_OUT(var, PRODUCT(related))\n        factors = factors - related + new_factor\n    result = PRODUCT(factors)\n    return NORMALIZE(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Inference in Burglary Alarm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " P(Burglary | MaryCalls=true)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variables:"
      }), " B, E, A, J, M → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      }), " M=true → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " B → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Elimination order:"
      }), " J, A, E"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Factors (CPTs):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₁(B): P(B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₂(E): P(E)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₃(A, B, E): P(A | B, E)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₄(J, A): P(J | A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₅(M, A): P(M | A)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Restrict evidence M=true:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₅(M=true, A): A=F → 0.01, A=T → 0.70"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Eliminate J:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum out J: P(J|A) summed over J = 1.0. Factor disappears."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Multiply f₃ × f₅:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₆(B, E, A) = f₃(A, B, E) × f₅(M=true, A)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A=F"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A=T"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.999×0.01=0.00999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001×0.70=0.00070"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.710×0.01=0.00710"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.290×0.70=0.20300"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.060×0.01=0.00060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.940×0.70=0.65800"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.050×0.01=0.00050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.950×0.70=0.66500"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Eliminate A (sum over A):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₇(B=F, E=F) = 0.00999 + 0.00070 = 0.01069"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₇(B=F, E=T) = 0.00710 + 0.20300 = 0.21010"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₇(B=T, E=F) = 0.00060 + 0.65800 = 0.65860"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₇(B=T, E=T) = 0.00050 + 0.66500 = 0.66550"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 → Multiply f₁ × f₂ × f₇:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₈(B=F, E=F) = 0.999 × 0.998 × 0.01069 = 0.010654"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₈(B=F, E=T) = 0.999 × 0.002 × 0.21010 = 0.000420"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₈(B=T, E=F) = 0.001 × 0.998 × 0.65860 = 0.000657"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₈(B=T, E=T) = 0.001 × 0.002 × 0.66550 = 0.000001"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6 → Eliminate E:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₉(B=F) = 0.010654 + 0.000420 = 0.011074"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f₉(B=T) = 0.000657 + 0.000001 = 0.000658"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7 → Normalize:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["P(B=T | M=true) = 0.000658 / (0.011074 + 0.000658) = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0.0561"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["P(B=F | M=true) = 0.011074 / 0.011732 = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0.9439"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import itertools\nfrom collections import defaultdict\n\nclass Factor:\n    def __init__(self, variables, values):\n        self.variables = variables\n        self.values = values\n\n    def restrict(self, evidence):\n        for var, val in evidence.items():\n            if var in self.variables:\n                idx = self.variables.index(var)\n                new_vars = self.variables[:]\n                new_values = {}\n                for assignment, prob in self.values.items():\n                    if assignment[idx] == val:\n                        new_assign = assignment[:idx] + assignment[idx+1:]\n                        new_values[new_assign] = prob\n                new_vars.pop(idx)\n                self.variables = new_vars\n                self.values = new_values\n\n    def sum_out(self, var):\n        idx = self.variables.index(var)\n        new_vars = self.variables[:idx] + self.variables[idx+1:]\n        new_values = defaultdict(float)\n        for assignment, prob in self.values.items():\n            new_assign = assignment[:idx] + assignment[idx+1:]\n            new_values[new_assign] += prob\n        self.variables = new_vars\n        self.values = dict(new_values)\n\n    def multiply(self, other):\n        all_vars = list(dict.fromkeys(self.variables + other.variables))\n        com_vars = [v for v in self.variables if v in other.variables]\n        com_idx1 = [self.variables.index(v) for v in com_vars]\n        com_idx2 = [other.variables.index(v) for v in com_vars]\n        new_values = {}\n        for a1, p1 in self.values.items():\n            for a2, p2 in other.values.items():\n                if all(a1[i1] == a2[i2] for i1, i2 in zip(com_idx1, com_idx2)):\n                    new_a = [a1[self.variables.index(v)] if v in self.variables else a2[other.variables.index(v)] for v in all_vars]\n                    new_values[tuple(new_a)] = p1 * p2\n        return Factor(all_vars, new_values)\n\ndef variable_elimination(bn, query, evidence, elim_order):\n    factors = []\n    for node in bn.nodes.values():\n        cpt_vals = {}\n        for parent_vals, probs in node.cpt.items():\n            for val, prob in probs.items():\n                assignment = list(parent_vals) + [val]\n                cpt_vals[tuple(assignment)] = prob\n        f = Factor(node.parents + [node.name], cpt_vals)\n        f.restrict(evidence)\n        factors.append(f)\n\n    for var in elim_order:\n        if var == query:\n            continue\n        related = [f for f in factors if var in f.variables]\n        if not related:\n            continue\n        product = related[0]\n        for f in related[1:]:\n            product = product.multiply(f)\n        product.sum_out(var)\n        factors = [f for f in factors if f not in related]\n        factors.append(product)\n\n    result = factors[0]\n    for f in factors[1:]:\n        result = result.multiply(f)\n    total = sum(result.values.values())\n    return {k: v / total for k, v in result.values.items()}\n\nresult = variable_elimination(bn, 'Burglary', {'MaryCalls': True}, ['JohnCalls', 'Alarm', 'Earthquake'])\nprint(\"P(Burglary | MaryCalls=true):\")\nfor assignment, prob in result.items():\n    print(f\"  B={assignment[0]}: {prob:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable Elimination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × exp(treewidth))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treewidth = size of largest intermediate factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Naive enumeration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum over all assignments of hidden variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Likelihood Weighting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × n) for N samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No exponential blowup, but approximate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gibbs Sampling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × n) per iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixing time can be exponential for pathological BNs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Treewidth is the critical metric. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polytree"
      }), " (each node has at most one undirected path to any other) has treewidth equal to its maximum node degree → inference is polynomial. A fully connected BN has treewidth = n → inference is exponential."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-inference-methods",
      children: "Advantages & Disadvantages of Inference Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable Elimination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact; optimal for low treewidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-hard in general; sensitive to elimination order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Likelihood Weighting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles rare evidence well"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate; many samples needed for accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gibbs Sampling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to many variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow mixing; pain for near-deterministic CPTs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rejection Sampling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely inefficient for rare evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-inference",
      children: "Edge Cases in Inference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Probabilities in Evidence"
        }), ": If P(evidence) = 0 in the BN, inference divides by zero. The network is inconsistent with the evidence → check CPTs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very Rare Evidence"
        }), ": Rejection sampling may reject 99.99% of samples. Use likelihood weighting instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nearly Deterministic CPTs"
        }), ": Rows like P(A|B) = [0.999, 0.001] cause numerical instability. Use log-space computation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large Treewidth"
        }), ": VE becomes intractable. Use approximate inference (sampling) or simplify the network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Variables"
        }), ": Cannot sum out; must integrate. Use Gaussian BNs or particle filtering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison--inference-methods",
      children: "Concept Comparison → Inference Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Exact?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
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
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(exp treewidth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low treewidth BNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to elimination order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Likelihood Weighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Approx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many samples needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rejection Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Approx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N / P(e))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy-to-satisfy evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes samples on rejections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gibbs Sampling (MCMC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Approx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(N × nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-dimensional posteriors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burn-in and mixing issues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-bayes-theorem-and-its-applications-in-machine-learning",
      children: "Q1: Explain Bayes' Theorem and its applications in machine learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayes' Theorem describes the probability of an event based on prior knowledge:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(H|E) = \\frac{P(E|H) \\cdot P(H)}{P(E)}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications in ML:"
      }), " Naive Bayes Classifier (text classification, spam filtering), Bayesian Linear Regression, Gaussian Processes, Bayesian Model Selection, A/B Testing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-is-naive-bayes-naive-how-does-it-work",
      children: "Q2: Why is Naive Bayes \"naive\"? How does it work?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"It assumes all features are conditionally independent given the class label → a 'naive' assumption rarely true in practice.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(Y | X_1, ..., X_n) \\propto P(Y) \\prod_{i=1}^n P(X_i | Y)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it still works:"
      }), " Decision boundary can be correct even if probabilities are miscalibrated; requires much less data; handles high-dimensional feature spaces; extremely fast → O(n) per prediction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-would-you-learn-the-structure-of-a-bayesian-network-from-data",
      children: "Q3: How would you learn the structure of a Bayesian Network from data?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three approaches:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Score-Based Learning"
        }), ": Search over DAGs maximizing BIC/BDeu score. Greedy search or hill-climbing. NP-hard in general."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint-Based Learning"
        }), ": Use conditional independence tests (chi-square, mutual information) to determine edges. PC algorithm is classic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid Approaches"
        }), ": Combine both."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common algorithms:"
      }), " K2 (fixed ordering), Hill-Climbing (BIC score), PC Algorithm, Max-Min Hill-Climbing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-d-separation-and-why-does-it-matter",
      children: "Q4: What is d-separation and why does it matter?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "d-separation determines whether two variables are conditionally independent given observed variables. A path is blocked if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain"
        }), " A → B → C with B observed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fork"
        }), " A ← B → C with B observed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collider"
        }), " A → B ← C with B or descendant NOT observed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If all paths between X and Y are blocked by Z, then X ⟂ Y | Z."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-the-trade-offs-between-exact-and-approximate-inference",
      children: "Q5: What are the trade-offs between exact and approximate inference?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exact (VE)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approx (Sampling)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converges with more samples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential in treewidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed running time (N samples)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles with rare evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex → factor management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple → just sample and count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward (sample from proposal)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-spam-filtering-naive-bayes",
      children: "1. Spam Filtering (Naive Bayes)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System:"
      }), " Email spam filters (Gmail, Outlook)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      }), " P(Spam | Words) ∝ P(Spam) ∏ P(Word | Spam). Words are assumed conditionally independent given class.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Bayes:"
      }), " Spam words change rapidly; Naive Bayes adapts by updating word probabilities from user feedback.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " ~99.9% of spam blocked, <0.1% false positives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-medical-diagnosis-bayesian-networks",
      children: "2. Medical Diagnosis (Bayesian Networks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System:"
      }), " Computer-aided diagnosis (QMR, Pathfinder)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      }), " BN with nodes for diseases and symptoms. Edges represent causal links. Inference computes P(disease | symptoms).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Bayes:"
      }), " Handles test result uncertainty, accounts for disease prevalence, naturally combines multiple symptoms.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Pathfinder outperformed expert pathologists in diagnostic accuracy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-speech-recognition-hidden-markov-models",
      children: "3. Speech Recognition (Hidden Markov Models)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System:"
      }), " ASR systems (Siri, Google Speech, Whisper)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      }), " HMMs are Bayesian Networks with hidden states (phonemes) and observed outputs (audio features). Viterbi algorithm computes most likely phoneme sequence.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Bayes:"
      }), " Speech is ambiguous → \"recognize\" vs \"wreck a nice\" sound similar. Probabilistic reasoning disambiguates using language models.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Word error rates dropped from ~30% (2000) to <5% (modern systems)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-fault-diagnosis-bayesian-networks",
      children: "4. Fault Diagnosis (Bayesian Networks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System:"
      }), " Aircraft engine diagnostics, network failure diagnosis\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      }), " BN models component failures → observable symptoms. Given sensor readings, P(fault | symptoms) recommends most likely faulty component.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Bayes:"
      }), " Multiple faults interact; symptoms have multiple causes. BN's causal structure mirrors system architecture.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Reduced diagnostic time by 60-80% in aerospace applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-robotics-bayes-filters--kalman--particle-filters",
      children: "5. Robotics (Bayes Filters → Kalman / Particle Filters)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System:"
      }), " Localization, mapping, tracking\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      }), " Robot maintains belief P(state | sensor_data, controls) using Bayes' Rule recursively (predict → update).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Bayes:"
      }), " Unifies sensor noise, motion uncertainty, map uncertainty into a single belief distribution.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Enables autonomous driving (localization at <10cm), drone navigation, warehouse robotics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--probability-rules",
      children: "Quick Reference → Probability Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Joint Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A ∧ B) = P(A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B)P(B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayes' Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) = P(B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(X₁…Xₙ) = ∏ P(Xᵢ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X₁…Xᵢ₋₁)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Law of Total Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(B) = Σ P(B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aᵢ)P(Aᵢ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A,B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C) = P(A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A,B) = P(A)P(B) for independent A,B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factoring independent events"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayes' Rule"
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
            children: "Bayesian Networks"
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
            children: "Naive Bayes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCMC Sampling"
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
            children: "Kalman / Particle Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
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
      }), " Bayes' Rule is most useful for what type of reasoning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Forward (causal) reasoning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Backward (diagnostic) reasoning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Inductive reasoning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Abductive reasoning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Bayes' Rule computes P(cause|effect) from P(effect|cause) → diagnostic reasoning from evidence back to cause."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What does the chain rule for Bayesian Networks state?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P(X₁…Xₙ) = ∏ P(Xᵢ | Parents(Xᵢ))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) P(X₁…Xₙ) = ∏ P(Xᵢ)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) P(A|B) = P(B|A)P(A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P(A ∧ B) = P(A)P(B)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>A) The BN chain rule factorizes the joint as the product of each node's probability conditioned on its parents."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Variable elimination complexity depends on what?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Number of variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Treewidth of the network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Number of evidence variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Number of CPT entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Complexity is exponential in the treewidth → the size of the largest intermediate factor during elimination."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Why does Naive Bayes work well for spam filtering despite its \"naive\" assumption?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It uses deep learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The decision boundary is often correct even if probabilities are miscalibrated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It doesn't rely on word probabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It assumes all words are dependent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Naive Bayes's decision boundary is often correct even if probability estimates are off. It's also fast, handles high-dimensional features, and adapts to new spam patterns quickly."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the main advantage of Bayesian Networks over the full joint distribution?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They are always faster to compute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) They require fewer parameters by exploiting conditional independence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They don't need probability values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They never need inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) BNs factorize the joint distribution into local CPTs, requiring O(n × 2ᵏ) parameters instead of O(2ⁿ) → a massive saving when each node has few parents."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "💡 Pro Tip:"
        }), " When modeling real-world problems with Bayesian networks, focus on getting the qualitative structure (DAG) right → conditional independence assumptions matter far more than precise probability numbers. Use noisy-OR/MAX for efficient parameterization of causal relationships."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability theory provides a formal framework for reasoning under uncertainty."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bayes' Rule is a fundamental tool for updating beliefs based on new evidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bayesian Networks capture dependencies and independencies between variables compactly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The semantics of a Bayesian Network allow us to calculate any entry in the joint distribution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exact inference (like Variable Elimination) is powerful but can be NP-hard in general networks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditional independence allows for significant reductions in the number of parameters needed to define a model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approximate inference via sampling scales to large networks where exact inference is intractable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is a full joint probability distribution usually impractical to store?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between prior probability and posterior probability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does it mean for two variables to be \"conditionally independent\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a Bayesian Network, what information is contained in a node's CPT?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between Variable Elimination and Likelihood Weighting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two Coins"
        }), ": You have one fair coin and one double-headed coin. You pick one at random and flip it. It comes up heads. What is the probability you picked the double-headed coin? Use Bayes' Rule and verify numerically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Car Diagnosis"
        }), ": Draw the Bayesian Network for this scenario: A car's engine won't start if the battery is dead or if the fuel tank is empty. The headlights will only work if the battery is not dead. Construct CPTs and compute P(battery dead | engine won't start, headlights work)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameter Count"
        }), ": Calculate the number of independent parameters needed for a joint distribution of 5 boolean variables versus a Bayesian Network where each node has at most 2 parents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monty Hall Problem"
        }), ": Using Bayes' Rule, compute the probability of winning if you switch doors. Prior: P(car behind door 1) = 1/3. Update after Monty opens door 3 revealing a goat."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "D-Separation"
        }), ": Explain the rules of d-separation in Bayesian Networks. Given a path between two nodes, how do you determine if the path is \"blocked\" given a set of observed evidence nodes? Give examples of chains, forks, and colliders."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BN Structure Learning"
        }), ": Given data about student performance (Intelligence, Grade, SAT score, Difficulty), propose a BN structure. Justify each edge. Then compute P(Intelligence=High | Grade=A, SAT=High) using Variable Elimination."]
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