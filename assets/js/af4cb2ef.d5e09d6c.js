"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9248],{

/***/ 49501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_13_probability_md_af4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-13-probability-md-af4.json
const site_docs_courses_discrete_mathematics_13_probability_md_af4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/13-probability","title":"Chapter 13: Probability","description":"Previous Boolean Algebra | Next Number Theory","source":"@site/docs/courses/discrete-mathematics/13-probability.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/13-probability","permalink":"/ai-engineering-journey/discrete-mathematics/13-probability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-probability","slug":"/discrete-mathematics/13-probability","title":"Chapter 13: Probability","sidebar_label":"Chapter 13: Probability","sidebar_position":13},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 12: Boolean Algebra","permalink":"/ai-engineering-journey/discrete-mathematics/12-boolean"},"next":{"title":"Chapter 14: Number Theory","permalink":"/ai-engineering-journey/discrete-mathematics/14-number-theory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/13-probability.md


const frontMatter = {
	id: '13-probability',
	slug: '/discrete-mathematics/13-probability',
	title: 'Chapter 13: Probability',
	sidebar_label: 'Chapter 13: Probability',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Probability';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "13.1 Sample Space and Events",
  "id": "131-sample-space-and-events",
  "level": 3
}, {
  "value": "13.2 Axioms of Probability",
  "id": "132-axioms-of-probability",
  "level": 3
}, {
  "value": "13.3 Conditional Probability",
  "id": "133-conditional-probability",
  "level": 3
}, {
  "value": "13.4 Independence",
  "id": "134-independence",
  "level": 3
}, {
  "value": "13.5 Bayes&#39; Theorem",
  "id": "135-bayes-theorem",
  "level": 3
}, {
  "value": "13.6 Random Variables",
  "id": "136-random-variables",
  "level": 3
}, {
  "value": "13.7 Expected Value and Variance",
  "id": "137-expected-value-and-variance",
  "level": 3
}, {
  "value": "13.8 Bernoulli and Binomial Distributions",
  "id": "138-bernoulli-and-binomial-distributions",
  "level": 3
}, {
  "value": "13.9 Geometric Distribution",
  "id": "139-geometric-distribution",
  "level": 3
}, {
  "value": "13.10 Inclusion-Exclusion for Probability",
  "id": "1310-inclusion-exclusion-for-probability",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
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
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "13.11 Law of Total Probability",
  "id": "1311-law-of-total-probability",
  "level": 3
}, {
  "value": "13.12 Monte Carlo Simulation",
  "id": "1312-monte-carlo-simulation",
  "level": 3
}, {
  "value": "13.13 Conditional Expectation",
  "id": "1313-conditional-expectation",
  "level": 3
}, {
  "value": "13.14 Markov and Chebyshev Inequalities",
  "id": "1314-markov-and-chebyshev-inequalities",
  "level": 3
}, {
  "value": "13.15 Probability in Machine Learning: Naive Bayes",
  "id": "1315-probability-in-machine-learning-naive-bayes",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 2
}, {
  "value": "Mermaid: Probability Distributions",
  "id": "mermaid-probability-distributions",
  "level": 3
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
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
        id: "chapter-13-probability",
        children: "Chapter 13: Probability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/12-boolean",
          children: "Chapter 12: Boolean Algebra"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/14-number-theory",
          children: "Chapter 14: Number Theory"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define sample spaces, events, and probability functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the axioms of probability and basic rules (addition, complement, inclusion-exclusion)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute conditional probabilities and apply Bayes' theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between independent and dependent events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand random variables and probability distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute expected value, variance, and standard deviation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize Bernoulli, binomial, and geometric distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the principle of inclusion-exclusion for probability calculations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sample Space & Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$S$ is all possible outcomes; $E \\subseteq S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability is the ratio $"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Axioms of Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0 \\leq P(E) \\leq 1$, $P(S)=1$, additivity for disjoint events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All probability rules derive from these three axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(A \\mid B) = P(A \\cap B) / P(B)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge of $B$ changes the probability of $A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(A \\cap B) = P(A)P(B)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product rule; $P(A \\mid B) = P(A)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayes' Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(H \\mid E) = P(E \\mid H) P(H) / P(E)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates belief given evidence; foundation of machine learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function from $S$ to $\\mathbb{R}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected value is the weighted average of outcomes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{Var}(X) = E[(X-\\mu)^2]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures spread around the mean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bernoulli Trial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single experiment with success/failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building block for binomial, geometric, negative binomial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial Distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$ independent Bernoulli trials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Sample Space] --> B[Events]\n    B --> C[Probability Axioms]\n    C --> D[Rules]\n    D --> E[Addition Rule]\n    D --> F[Complement Rule]\n    D --> G[Inclusion-Exclusion]\n    C --> H[Conditional Probability]\n    H --> I[Bayes' Theorem]\n    C --> J[Independence]\n    A --> K[Random Variables]\n    K --> L[Expected Value]\n    K --> M[Variance]\n    K --> N[Distributions]\n    N --> O[Bernoulli]\n    N --> P[Binomial]\n    N --> Q[Geometric]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-sample-space-and-events",
      children: "13.1 Sample Space and Events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sample space"
      }), " $S$ is the set of all possible outcomes of an experiment. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "event"
      }), " is a subset $E \\subseteq S$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If all outcomes are equally likely, the probability of event $E$ is:\n$$P(E) = \\frac{|E|}{|S|}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations on events:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E \\cup F$: at least one occurs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E \\cap F$: both occur."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E'$ (or $\\overline{E}$): $E$ does not occur."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["$E$ and $F$ are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mutually exclusive (disjoint)"
        }), " if $E \\cap F = \\emptyset$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The sample space contains all possible outcomes; events are subsets, and for equally likely outcomes, probability is the size ratio."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-axioms-of-probability",
      children: "13.2 Axioms of Probability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kolmogorov's axioms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$0 \\leq P(E) \\leq 1$ for any event $E$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(S) = 1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $E_1, E_2, \\dots$ are pairwise disjoint, then $P(\\bigcup_i E_i) = \\sum_i P(E_i)$ (countable additivity)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.1 (Basic rules)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(\\emptyset) = 0$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(E') = 1 - P(E)$ (complement rule)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $E \\subseteq F$, then $P(E) \\leq P(F)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(E \\cup F) = P(E) + P(F) - P(E \\cap F)$ (addition rule)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$0 \\leq P(E) \\leq 1$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every probability rule ? complement, addition, inclusion-exclusion ? follows from Kolmogorov's three axioms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-conditional-probability",
      children: "13.3 Conditional Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conditional probability"
      }), " of $A$ given $B$ is:\n$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$\nprovided $P(B) > 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplication rule:"
      }), " $P(A \\cap B) = P(A \\mid B) \\cdot P(B) = P(B \\mid A) \\cdot P(A)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generalized multiplication rule:"
      }), "\n$$P(A_1 \\cap A_2 \\cap \\dots \\cap A_n) = P(A_1) \\cdot P(A_2 \\mid A_1) \\cdot P(A_3 \\mid A_1 \\cap A_2) \\cdots P(A_n \\mid A_1 \\cap \\dots \\cap A_{n-1})$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Conditional probability updates the probability of $A$ given knowledge that $B$ occurred ? it renormalizes $P(A \\cap B)$ over $P(B)$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-independence",
      children: "13.4 Independence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Events $A$ and $B$ are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "independent"
      }), " if any of the following equivalent conditions hold:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(A \\cap B) = P(A) \\cdot P(B)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(A \\mid B) = P(A)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(B \\mid A) = P(B)$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.2 (Independence of complements)."
      }), " If $A$ and $B$ are independent, then $A$ and $B'$, $A'$ and $B$, $A'$ and $B'$ are also independent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Events $A_1, A_2, \\dots, A_n$ are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mutually independent"
      }), " if for every subset ${i_1, \\dots, i_k}$:\n$$P(A_{i_1} \\cap \\dots \\cap A_{i_k}) = P(A_{i_1}) \\cdots P(A_{i_k})$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Independence means the occurrence of one event does not affect the probability of another ? the joint probability is the product of marginals."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-bayes-theorem",
      children: "13.5 Bayes' Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bayes' theorem:"
      }), "\n$$P(H \\mid E) = \\frac{P(E \\mid H) \\cdot P(H)}{P(E)}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a partition $H_1, H_2, \\dots, H_n$ of the sample space:\n$$P(H_j \\mid E) = \\frac{P(E \\mid H_j) \\cdot P(H_j)}{\\sum_{i=1}^n P(E \\mid H_i) \\cdot P(H_i)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Terminology:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["$P(H)$: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "prior probability"
        }), " (before evidence)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["$P(H \\mid E)$: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "posterior probability"
        }), " (after evidence)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["$P(E \\mid H)$: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "likelihood"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["$P(E)$: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "marginal likelihood"
        }), " (normalization constant)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Bayes' theorem tells us how to update our belief in a hypothesis given new evidence ? it is the foundation of inference, spam filtering, and machine learning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-random-variables",
      children: "13.6 Random Variables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "random variable"
      }), " $X$ is a function $X: S \\rightarrow \\mathbb{R}$ that assigns a real number to each outcome."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Discrete random variable:"
      }), " Takes countably many values (e.g., ${0,1,2,\\dots}$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Probability mass function (PMF):"
      }), " $p(x) = P(X = x)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cumulative distribution function (CDF):"
      }), " $F(x) = P(X \\leq x)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.3 (Properties of PMFs)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$0 \\leq p(x) \\leq 1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\sum_x p(x) = 1$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A random variable maps outcomes to numbers; its probability mass function describes how total probability is distributed across possible values."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-expected-value-and-variance",
      children: "13.7 Expected Value and Variance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected value (mean):"
      }), " $\\mu = E[X] = \\sum_x x \\cdot p(x)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.4 (Linearity of expectation)."
      }), " For any random variables $X$ and $Y$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E[aX + b] = aE[X] + b$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E[X + Y] = E[X] + E[Y]$ (even if $X$ and $Y$ are not independent)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variance:"
      }), " $\\sigma^2 = \\text{Var}(X) = E[(X - \\mu)^2] = E[X^2] - \\mu^2$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard deviation:"
      }), " $\\sigma = \\sqrt{\\text{Var}(X)}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.5 (Variance properties)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $X$ and $Y$ are independent: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Distribution {\n  values: number[];\n  probs: number[];\n}\n\nfunction expectedValue(dist: Distribution): number {\n  let ev = 0;\n  for (let i = 0; i < dist.values.length; i++) {\n    ev += dist.values[i] * dist.probs[i];\n  }\n  return ev;\n}\n\nfunction variance(dist: Distribution): number {\n  const mu = expectedValue(dist);\n  let varSum = 0;\n  for (let i = 0; i < dist.values.length; i++) {\n    varSum += (dist.values[i] - mu) ** 2 * dist.probs[i];\n  }\n  return varSum;\n}\n\n// Example: fair die\nconst die: Distribution = {\n  values: [1, 2, 3, 4, 5, 6],\n  probs: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6],\n};\nconsole.log(expectedValue(die)); // 3.5\nconsole.log(variance(die));      // ~2.917\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Expected value is the probability-weighted average; variance measures spread ? linearity of expectation holds regardless of independence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "138-bernoulli-and-binomial-distributions",
      children: "13.8 Bernoulli and Binomial Distributions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bernoulli trial:"
      }), " A single experiment with two outcomes: success (1) with probability $p$, failure (0) with probability $1-p$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(X = 1) = p$, $P(X = 0) = 1-p$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E[X] = p$, $\\text{Var}(X) = p(1-p)$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binomial distribution:"
      }), " Number of successes in $n$ independent Bernoulli trials, each with success probability $p$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PMF: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, for $k = 0, 1, \\dots, n$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E[X] = np$, $\\text{Var}(X) = np(1-p)$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binomialProb(n: number, k: number, p: number): number {\n  // P(X = k) for Binomial(n, p)\n  return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);\n}\n\nfunction binomialCoeff(n: number, k: number): number {\n  if (k < 0 || k > n) return 0;\n  if (k === 0 || k === n) return 1;\n  k = Math.min(k, n - k);\n  let result = 1;\n  for (let i = 1; i <= k; i++) {\n    result = result * (n - k + i) / i;\n  }\n  return result;\n}\n\nconsole.log(binomialProb(10, 3, 0.5)); // P(3 heads in 10 fair coin flips)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The binomial distribution counts successes in $n$ independent Bernoulli trials; its mean is $np$ and variance is $np(1-p)$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "139-geometric-distribution",
      children: "13.9 Geometric Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of trials until the first success in independent Bernoulli trials."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PMF:"
      }), " $P(X = k) = (1-p)^{k-1} p$, for $k = 1, 2, 3, \\dots$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$E[X] = 1/p$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\text{Var}(X) = (1-p)/p^2$."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memoryless property:"
        }), " $P(X > n + m \\mid X > n) = P(X > m)$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The geometric distribution models \"waiting time\" until the first success; it is memoryless ? past failures do not affect future probability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1310-inclusion-exclusion-for-probability",
      children: "13.10 Inclusion-Exclusion for Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle of inclusion-exclusion for probability:"
      }), "\n$$P\\left(\\bigcup_{i=1}^n A_i\\right) = \\sum_i P(A_i) - \\sum_{i<j} P(A_i \\cap A_j) + \\sum_{i<j<k} P(A_i \\cap A_j \\cap A_k) - \\cdots + (-1)^{n+1} P(A_1 \\cap \\dots \\cap A_n)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $n = 3$:\n$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A\\cap B) - P(A\\cap C) - P(B\\cap C) + P(A \\cap B \\cap C)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Inclusion-exclusion computes the probability of a union by alternating sums and subtractions of intersections of increasing size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Distribution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Support"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$E[X]$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$\\text{Var}(X)$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memoryless"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bernoulli"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${0,1}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p(1-p)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${0,\\dots,n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n, p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$np$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$np(1-p)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1,2,\\dots}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1/p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(1-p)/p^2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform (discrete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1,\\dots,n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(n+1)/2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(n^2-1)/12$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI/ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bayes' Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam filtering, recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Bayes, Bayesian networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fault diagnosis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk assessment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expected Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A/B testing, RL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portfolio expected return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature selection, PCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regularization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality control (6$\\sigma$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portfolio risk (Volatility)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial Distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defect rate modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric Distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stopping time analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markov models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional VaR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If $P(A) = 0.6$, $P(B) = 0.4$, and $P(A \\cap B) = 0.2$, what is $P(A \\mid B)$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 0.2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 0.4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 0.5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 0.6"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $P(A \\mid B) = P(A \\cap B) / P(B) = 0.2 / 0.4 = 0.5$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the expected value of a fair 6-sided die?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 3.5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 6"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $(1+2+3+4+5+6)/6 = 3.5$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The variance of a Bernoulli$(p)$ random variable is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $p$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $1-p$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $p(1-p)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $p^2$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $\\text{Var}(X) = p(1-p)$ for Bernoulli."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Two events are independent if:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $P(A \\cap B) = P(A) + P(B)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $P(A \\cap B) = P(A)P(B)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $P(A \\cup B) = P(A) + P(B)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $P(A) = P(B)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Independence means $P(A \\cap B) = P(A)P(B)$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The binomial distribution $\\text{Bin}(n, p)$ has expected value:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $p$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $np$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $n(1-p)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $E[X] = np$ for binomial."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.1"
      }), " (Probability of a sum of dice). Roll two fair dice. $P(\\text{sum} = 7)$:\n$|S| = 36$. Favorable outcomes: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ = 6. $P = 6/36 = 1/6$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.2"
      }), " (Complement rule). In a deck of 52 cards, $P(\\text{not a heart}) = 1 - P(\\text{heart}) = 1 - 13/52 = 39/52 = 3/4$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.3"
      }), " (Conditional probability). In a class, 60% passed math, 50% passed physics, 30% passed both. $P(\\text{passed physics} \\mid \\text{passed math}) = 0.3 / 0.6 = 0.5$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.4"
      }), " (Bayes theorem). A test for a disease is 99% accurate (sensitivity = 99%, specificity = 99%). Disease prevalence is 0.1%. If a person tests positive, what is the probability they have the disease?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(D) = 0.001$, $P(T \\mid D) = 0.99$, $P(T \\mid \\neg D) = 0.01$.\n$$P(D \\mid T) = \\frac{0.99 \\cdot 0.001}{0.99 \\cdot 0.001 + 0.01 \\cdot 0.999} = \\frac{0.00099}{0.01098} \\approx 0.0902$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even with a 99% accurate test, the posterior probability is only about 9%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bayesTheorem(\n  prior: number,\n  likelihood: number,\n  falsePositiveRate: number\n): number {\n  const numerator = likelihood * prior;\n  const denominator = numerator + falsePositiveRate * (1 - prior);\n  return numerator / denominator;\n}\n\nconsole.log(bayesTheorem(0.001, 0.99, 0.01)); // ~0.0902\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.5"
      }), " (Binomial probability). Fair coin flipped 10 times. $P(\\text{exactly 5 heads}) = \\binom{10}{5} (0.5)^{10} = 252 / 1024 \\approx 0.246$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.6"
      }), " (Linearity of expectation). Expected sum when rolling two dice: $E[X+Y] = E[X] + E[Y] = 3.5 + 3.5 = 7$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.7"
      }), " (Geometric distribution). Probability of first 6 on the third roll of a fair die: $P(X=3) = (5/6)^2 \\cdot (1/6) = 25/216 \\approx 0.116$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.8"
      }), " (Inclusion-exclusion for 3 events). $P(A) = 0.3$, $P(B) = 0.4$, $P(C) = 0.5$, all pairwise intersections = 0.1, triple intersection = 0.05.\n$P(A \\cup B \\cup C) = 0.3 + 0.4 + 0.5 - 0.1 - 0.1 - 0.1 + 0.05 = 0.95$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.9"
      }), " (Variance calculation). For a fair die: $\\mu = 3.5$. $E[X^2] = (1+4+9+16+25+36)/6 = 91/6 = 15.167$. $\\text{Var}(X) = 15.167 - 3.5^2 = 15.167 - 12.25 = 2.917$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.10"
      }), " (Probability of at least one). $P(\\text{at least one 6 in 4 dice rolls}) = 1 - P(\\text{no 6}) = 1 - (5/6)^4 = 1 - 625/1296 = 671/1296 \\approx 0.518$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1311-law-of-total-probability",
      children: "13.11 Law of Total Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "law of total probability"
      }), " expresses the probability of an event $A$ as a weighted average over a partition of the sample space:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(A) = \\sum_{i} P(A \\mid B_i) \\cdot P(B_i)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where ${B_1, B_2, \\dots, B_n}$ is a partition of $S$ (disjoint and covering all outcomes)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.6 (Law of Total Probability)."
      }), " If $B_1, B_2, \\dots, B_n$ partition $S$, then for any event $A$:\n$$P(A) = P(A \\cap B_1) + P(A \\cap B_2) + \\cdots + P(A \\cap B_n) = \\sum_i P(A \\mid B_i) P(B_i)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function totalProbability(\n  conditionalProbs: number[],\n  priorProbs: number[]\n): number {\n  let total = 0;\n  for (let i = 0; i < conditionalProbs.length; i++) {\n    total += conditionalProbs[i] * priorProbs[i];\n  }\n  return total;\n}\n\n// Example: 3 factories produce 50%, 30%, 20% of units.\n// Defect rates: 2%, 3%, 4%. Overall defect rate:\nconst defectRate = totalProbability([0.02, 0.03, 0.04], [0.5, 0.3, 0.2]);\nconsole.log(defectRate); // 0.027 (2.7%)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1312-monte-carlo-simulation",
      children: "13.12 Monte Carlo Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monte Carlo methods use random sampling to approximate probabilities when analytical computation is intractable."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function monteCarloPi(samples: number): number {\n  let inside = 0;\n  for (let i = 0; i < samples; i++) {\n    const x = Math.random() * 2 - 1;\n    const y = Math.random() * 2 - 1;\n    if (x * x + y * y <= 1) inside++;\n  }\n  return 4 * inside / samples;\n}\n\nconsole.log(monteCarloPi(100000)); // ~3.14159\n\nfunction simulateDiceSum(target: number, trials: number): number {\n  let successes = 0;\n  for (let t = 0; t < trials; t++) {\n    const d1 = Math.floor(Math.random() * 6) + 1;\n    const d2 = Math.floor(Math.random() * 6) + 1;\n    if (d1 + d2 === target) successes++;\n  }\n  return successes / trials;\n}\n\nconsole.log(simulateDiceSum(7, 100000)); // ~0.1667\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1313-conditional-expectation",
      children: "13.13 Conditional Expectation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conditional expectation"
      }), " $E[X \\mid Y = y]$ is the expected value of $X$ given that $Y = y$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$E[X \\mid Y = y] = \\sum_x x \\cdot P(X = x \\mid Y = y)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.7 (Law of Total Expectation / Tower Law)."
      }), "\n$$E[X] = E[E[X \\mid Y]] = \\sum_y E[X \\mid Y = y] \\cdot P(Y = y)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function conditionalExpectation(\n  xValues: number[],\n  givenY: (y: number) => number[],\n  yProbs: number[],\n  yValues: number[]\n): number {\n  let total = 0;\n  for (let i = 0; i < yValues.length; i++) {\n    const condProbs = givenY(yValues[i]);\n    let condExp = 0;\n    for (let j = 0; j < xValues.length; j++) {\n      condExp += xValues[j] * condProbs[j];\n    }\n    total += condExp * yProbs[i];\n  }\n  return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1314-markov-and-chebyshev-inequalities",
      children: "13.14 Markov and Chebyshev Inequalities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These inequalities bound probabilities using only the mean and variance ? no distributional assumptions required."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.8 (Markov's Inequality)."
      }), " For a nonnegative random variable $X$ and $a > 0$:\n$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.9 (Chebyshev's Inequality)."
      }), " For any random variable $X$ with mean $\\mu$ and variance $\\sigma^2$, and any $k > 0$:\n$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function markovBound(mean: number, a: number): number {\n  if (a <= 0) return 1;\n  return Math.min(1, mean / a);\n}\n\nfunction chebyshevBound(variance: number, k: number): number {\n  return Math.min(1, 1 / (k * k));\n}\n\n// If average income is $50K, P(income >= $250K) <= 50/250 = 0.2\nconsole.log(markovBound(50, 250)); // 0.2\n\n// If mean=50, variance=25 (std=5), P(|X-50| >= 10) <= 1/4 = 0.25\nconsole.log(chebyshevBound(25, 2)); // 0.25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1315-probability-in-machine-learning-naive-bayes",
      children: "13.15 Probability in Machine Learning: Naive Bayes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Naive Bayes classifiers apply Bayes' theorem with a \"naive\" assumption of conditional independence:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(\\text{class} \\mid \\text{features}) \\propto P(\\text{class}) \\cdot \\prod_i P(\\text{feature}_i \\mid \\text{class})$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NaiveBayesModel {\n  classProbs: Map<string, number>;\n  featureProbs: Map<string, Map<string, Map<string, number>>>;\n}\n\nfunction predictNB(\n  model: NaiveBayesModel,\n  features: Record<string, string>\n): string {\n  let bestClass = \"\";\n  let bestProb = -1;\n  for (const [cls, prior] of model.classProbs) {\n    let prob = Math.log(prior);\n    const clsProbs = model.featureProbs.get(cls)!;\n    for (const [feat, val] of Object.entries(features)) {\n      prob += Math.log(clsProbs.get(feat)?.get(val) ?? 1e-10);\n    }\n    if (prob > bestProb) { bestProb = prob; bestClass = cls; }\n  }\n  return bestClass;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Prior PClass] --> B[Evidence]\n    B --> C[Features]\n    C --> D[Likelihood PFeature|Class]\n    D --> E[Posterior PClass|Features]\n    E --> F[Predict Class with Max Probability]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.11"
      }), " (Monte Carlo approximation of $\\pi$). Using 1,000,000 random points in $[-1,1]^2$, the proportion inside the unit circle approximates $\\pi/4$, giving $\\pi \\approx 4 \\times \\text{inside} / \\text{total}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.12"
      }), " (Law of total expectation ? expected die roll). Let $Y$ be the result of the first roll of a die, and $X$ the sum of two independent rolls. Then $E[X \\mid Y = y] = y + 3.5$, so $E[X] = E[E[X \\mid Y]] = E[Y + 3.5] = 3.5 + 3.5 = 7$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.13"
      }), " (Chebyshev bound on a die). For a fair die, $\\mu = 3.5$, $\\sigma^2 \\approx 2.917$, $\\sigma \\approx 1.708$. For $k = 2$, $P(|X - 3.5| \\geq 3.416) \\leq 1/4 = 0.25$. The actual probability $P(X \\leq 0 \\text{ or } X \\geq 7) = 0$ ? Chebyshev gives a loose bound but requires no distribution assumption."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.14"
      }), " (Naive Bayes for spam). A word \"offer\" appears in 80% of spam emails and 10% of legitimate emails. Prior: 30% of all emails are spam. For an email containing \"offer\", the posterior $P(\\text{spam} \\mid \\text{offer}) = (0.8 \\times 0.3) / (0.8 \\times 0.3 + 0.1 \\times 0.7) = 0.24 / 0.31 \\approx 0.774$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.15"
      }), " (Counting with probability ? birthday problem simulation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function simulateBirthdayCollision(people: number, trials: number): number {\n  let collisions = 0;\n  for (let t = 0; t < trials; t++) {\n    const birthdays = new Set<number>();\n    let hasCollision = false;\n    for (let i = 0; i < people; i++) {\n      const bday = Math.floor(Math.random() * 365);\n      if (birthdays.has(bday)) { hasCollision = true; break; }\n      birthdays.add(bday);\n    }\n    if (hasCollision) collisions++;\n  }\n  return collisions / trials;\n}\n\nconsole.log(simulateBirthdayCollision(23, 50000)); // ~0.507\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the law of total probability: A bag has 3 red and 2 blue marbles from urn A, and 5 red and 1 blue from urn B. An urn is chosen uniformly at random, then a marble is drawn. What is $P(\\text{red})$?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a Monte Carlo simulation for the \"Monty Hall problem\": a contestant picks one of three doors, the host opens a losing door, and the contestant may switch. Estimate $P(\\text{win})$ for staying vs switching."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use Markov's inequality: If the average number of emails received per hour is 20, give an upper bound on $P(\\text{50 or more emails in an hour})$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that if $X$ and $Y$ are independent, then $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$ and use it to prove that for independent variables, $\\text{Cov}(X, Y) = 0$."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-probability-distributions",
      children: "Mermaid: Probability Distributions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Probability Distributions] --> B[Discrete]\n    A --> C[Continuous]\n    B --> D[Bernoulli]\n    B --> E[Binomial]\n    B --> F[Poisson]\n    C --> G[Uniform]\n    C --> H[Normal]\n    C --> I[Exponential]\n    D --> J[\"P(1)=p, P(0)=1-p\"]\n    E --> K[\"P(k)=C(n,k)p?(1-p)n??\"]\n    F --> L[\"P(k)=e??'??/k!\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Factorial for Combinatorial Probability ---\nfunction factorial(n: number): number {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nfunction nCr(n: number, r: number): number {\n  if (r < 0 || r > n) return 0;\n  return factorial(n) / (factorial(r) * factorial(n - r));\n}\n\n// --- Expected Value Calculator (discrete) ---\nfunction expectedValue(values: number[], probs: number[]): number {\n  if (values.length !== probs.length) throw new Error('Mismatched lengths');\n  return values.reduce((sum, v, i) => sum + v * probs[i], 0);\n}\n// Fair die: E = (1+2+3+4+5+6)/6 = 3.5\nconst dieEV = expectedValue([1,2,3,4,5,6], Array(6).fill(1/6));\nconsole.log('E[die]:', dieEV); // 3.5\n\n// --- Variance Calculator ---\nfunction variance(values: number[], probs: number[]): number {\n  const mu = expectedValue(values, probs);\n  return values.reduce((sum, v, i) => sum + (v - mu) ** 2 * probs[i], 0);\n}\nconsole.log('Var[die]:', variance([1,2,3,4,5,6], Array(6).fill(1/6))); // ~2.917\n\n// --- Bayes' Theorem Solver ---\nfunction bayesTheorem(\n  priorA: number,        // P(A)\n  probBGivenA: number,   // P(B|A)\n  probBGivenNotA: number // P(B|?A)\n): number {\n  const probNotA = 1 - priorA;\n  const probB = probBGivenA * priorA + probBGivenNotA * probNotA;\n  return (probBGivenA * priorA) / probB; // P(A|B)\n}\n// Disease test: prevalence 1%, test 99% sensitive, 95% specific\nconst pDiseaseGivenPositive = bayesTheorem(0.01, 0.99, 0.05);\nconsole.log('P(disease|positive):', pDiseaseGivenPositive.toFixed(4)); // ~0.1667\n\n// --- Binomial Distribution ---\nfunction binomialProb(n: number, k: number, p: number): number {\n  return nCr(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);\n}\n// 3 heads in 5 fair coin flips\nconsole.log('P(3 heads in 5 flips):', binomialProb(5, 3, 0.5).toFixed(4)); // 0.3125\n\n// --- Random Variable Simulator ---\nfunction simulateBinomial(n: number, p: number, trials: number): number[] {\n  const results: number[] = [];\n  for (let t = 0; t < trials; t++) {\n    let successes = 0;\n    for (let i = 0; i < n; i++) if (Math.random() < p) successes++;\n    results.push(successes);\n  }\n  return results;\n}\nconst simResults = simulateBinomial(10, 0.5, 1000);\nconst avg = simResults.reduce((a,b) => a+b, 0) / simResults.length;\nconsole.log('Simulated E[Bin(10,0.5)]:', avg.toFixed(2)); // ~5\n\n// --- Geometric Distribution ---\nfunction geometricProb(k: number, p: number): number {\n  return Math.pow(1 - p, k - 1) * p;\n}\nconsole.log('P(first success on trial 4):', geometricProb(4, 0.25).toFixed(4));\n\n// --- Conditional Probability Relaxation ---\nfunction conditionalProb(pAandB: number, pB: number): number {\n  return pAandB / pB;\n}\nconsole.log('P(A|B) = 0.3/0.6:', conditionalProb(0.3, 0.6)); // 0.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Law of Total Probability ---\nfunction totalProbability(partitions: { prob: number; condProb: number }[]): number {\n  return partitions.reduce((sum, p) => sum + p.prob * p.condProb, 0);\n}\nconst diseaseTest = [\n  { prob: 0.01, condProb: 0.99 },  // has disease, test +\n  { prob: 0.99, condProb: 0.02 }   // no disease, test +\n];\nconsole.log('P(positive test):', totalProbability(diseaseTest).toFixed(4));\n\n// --- Bayes' Theorem Calculator ---\nfunction bayesTheorem(prior: number, likelihood: number, evidence: number): number {\n  return (prior * likelihood) / evidence;\n}\nconst pDisease = 0.01;\nconst pPosGivenDisease = 0.99;\nconst pGivenPositive = bayesTheorem(pDisease, pPosGivenDisease, totalProbability(diseaseTest));\nconsole.log('P(disease | positive):', pGivenPositive.toFixed(4));\n\n// --- Expectation and Variance Calculator ---\nfunction expectedValue(dist: { x: number; p: number }[]): number {\n  return dist.reduce((sum, v) => sum + v.x * v.p, 0);\n}\nfunction variance(dist: { x: number; p: number }[]): number {\n  const mu = expectedValue(dist);\n  return dist.reduce((sum, v) => sum + (v.x - mu) ** 2 * v.p, 0);\n}\nconst die = [{x:1,p:1/6},{x:2,p:1/6},{x:3,p:1/6},{x:4,p:1/6},{x:5,p:1/6},{x:6,p:1/6}];\nconsole.log('\\nE[die]:', expectedValue(die).toFixed(4), 'Var[die]:', variance(die).toFixed(4));\n\n// --- Poisson Distribution ---\nfunction poissonPMF(lambda: number, k: number): number {\n  return Math.exp(-lambda) * Math.pow(lambda, k) / Array.from({length: k}, (_, i) => i + 1).reduce((a, b) => a * b, 1);\n}\nconsole.log('\\nPoisson ?=3: P(X=2):', poissonPMF(3, 2).toFixed(4), '(expected: ~0.224)');\n\n// --- Hypergeometric Distribution ---\nfunction hypergeometric(N: number, K: number, n: number, k: number): number {\n  return (nCr(K, k) * nCr(N - K, n - k)) / nCr(N, n);\n}\nconsole.log('Hypergeometric N=52,K=13,n=5,k=3:', hypergeometric(52, 13, 5, 3).toFixed(4));\n\n// --- Markov Chain Simulator ---\nfunction markovChain(\n  transMatrix: number[][],\n  initialState: number,\n  steps: number\n): { states: number[]; stationary: number[] } {\n  const n = transMatrix.length;\n  let state = initialState;\n  const states = [state];\n  for (let s = 0; s < steps; s++) {\n    const r = Math.random();\n    let cum = 0;\n    for (let j = 0; j < n; j++) {\n      cum += transMatrix[state][j];\n      if (r < cum) { state = j; break; }\n    }\n    states.push(state);\n  }\n  // Power iteration for stationary distribution\n  let pi = new Array(n).fill(1 / n);\n  for (let iter = 0; iter < 100; iter++) {\n    pi = pi.map((_, j) => pi.reduce((s, p, i) => s + p * transMatrix[i][j], 0));\n  }\n  return { states, stationary: pi.map(v => +v.toFixed(4)) };\n}\nconst mc = markovChain([[0.7,0.3],[0.4,0.6]], 0, 20);\nconsole.log('\\nMarkov chain states (20 steps):', mc.states.slice(0,10).join('?'), '?');\nconsole.log('Stationary distribution:', mc.stationary);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// probability\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'probability', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// probability - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'probability' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability measures likelihood from 0 to 1; all rules derive from Kolmogorov's axioms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditional probability updates beliefs given evidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bayes' theorem reverses conditional probabilities."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random variables map outcomes to numbers; expected value and variance describe the distribution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bernoulli, binomial, and geometric distributions model sequences of independent trials."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inclusion-exclusion computes union probabilities by alternating intersections."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complement is your best friend"
        }), " ? $P(\\text{at least one})$ is almost always easier as $1 - P(\\text{none})$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linearity of expectation works without independence"
        }), " ? this is the most powerful tool in probability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bayes' theorem avoids false positives"
        }), " ? always account for the base rate (prior)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binomial counts successes in 0/1 trials"
        }), " ? check independence and constant $p$ before using."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variance is not linear"
        }), " ? $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$ only for independent variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three Kolmogorov axioms of probability?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State Bayes' theorem and identify each term."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between mutually exclusive and independent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $E[X]$ and $\\text{Var}(X)$ for a Bernoulli$(p)$ variable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When does the geometric distribution apply?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Roll two fair dice. What is $P(\\text{sum} \\geq 10)$?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A bag has 3 red, 5 blue, 2 green marbles. Draw two without replacement. What is $P(\\text{both red})$?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test sensitivity = 95%, specificity = 98%, prevalence = 2%. A person tests positive. What is $P(\\text{disease})$?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Flip a fair coin 8 times. What is $P(3 \\leq \\text{heads} \\leq 5)$?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The expected value of a random variable $X$ is 10 and $E[X^2] = 120$. Find $\\text{Var}(X)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Roll a die until you get a 6. What is $P(\\text{first 6 appears on roll 4})$?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove: $P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove the memoryless property of the geometric distribution: $P(X > n+m \\mid X > n) = P(X > m)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A random variable $X$ has PMF $p(k) = c/k^2$ for $k = 1, 2, 3, \\dots$. Find $c$ and show whether $E[X]$ exists."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "coupon collector problem"
          }), ": There are $n$ distinct coupons. Each purchase yields a uniformly random coupon. Show that the expected number of purchases needed to collect all $n$ coupons is $n \\cdot H_n$, where $H_n = 1 + 1/2 + \\dots + 1/n$ is the $n$th harmonic number."]
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