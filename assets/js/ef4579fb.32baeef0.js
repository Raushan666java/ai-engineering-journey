"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25611],{

/***/ 92906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_17_randomized_md_ef4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-17-randomized-md-ef4.json
const site_docs_courses_algorithms_17_randomized_md_ef4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/17-randomized","title":"Chapter 17: Randomized Algorithms","description":"Prerequisites Approximation Algorithms — Algorithm design for hard problems | Next Advanced Topics — From randomized methods to online and streaming algorithms","source":"@site/docs/courses/algorithms/17-randomized.md","sourceDirName":"courses/algorithms","slug":"/algorithms/17-randomized","permalink":"/ai-engineering-journey/algorithms/17-randomized","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"17-randomized","slug":"/algorithms/17-randomized","title":"Chapter 17: Randomized Algorithms","sidebar_label":"Chapter 17: Randomized Algorithms","sidebar_position":17},"sidebar":"course-algorithms","previous":{"title":"Chapter 16: Approximation Algorithms","permalink":"/ai-engineering-journey/algorithms/16-approximation"},"next":{"title":"Chapter 18: Advanced Topics","permalink":"/ai-engineering-journey/algorithms/18-advanced"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/17-randomized.md


const frontMatter = {
	id: '17-randomized',
	slug: '/algorithms/17-randomized',
	title: 'Chapter 17: Randomized Algorithms',
	sidebar_label: 'Chapter 17: Randomized Algorithms',
	sidebar_position: 17
};
const contentTitle = 'Chapter 17: Randomized Algorithms';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Why Randomized Algorithms Matter",
  "id": "why-randomized-algorithms-matter",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "17.1 Classification",
  "id": "171-classification",
  "level": 3
}, {
  "value": "17.2 Las Vegas vs Monte Carlo: Detailed Comparison",
  "id": "172-las-vegas-vs-monte-carlo-detailed-comparison",
  "level": 3
}, {
  "value": "17.3 Randomized Quickselect (Las Vegas)",
  "id": "173-randomized-quickselect-las-vegas",
  "level": 3
}, {
  "value": "17.4 Randomized Quicksort (Las Vegas)",
  "id": "174-randomized-quicksort-las-vegas",
  "level": 3
}, {
  "value": "17.5 Miller-Rabin Primality Test (Monte Carlo)",
  "id": "175-miller-rabin-primality-test-monte-carlo",
  "level": 3
}, {
  "value": "17.6 Karger&#39;s Minimum Cut Algorithm (Monte Carlo)",
  "id": "176-kargers-minimum-cut-algorithm-monte-carlo",
  "level": 3
}, {
  "value": "17.7 Freivalds&#39; Algorithm for Matrix Verification (Monte Carlo)",
  "id": "177-freivalds-algorithm-for-matrix-verification-monte-carlo",
  "level": 3
}, {
  "value": "17.8 Reservoir Sampling (Las Vegas / Monte Carlo variant)",
  "id": "178-reservoir-sampling-las-vegas--monte-carlo-variant",
  "level": 3
}, {
  "value": "17.9 Birthday Problem Analysis",
  "id": "179-birthday-problem-analysis",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Common Interview Questions",
  "id": "common-interview-questions",
  "level": 3
}, {
  "value": "Applications",
  "id": "applications",
  "level": 2
}, {
  "value": "Cryptography",
  "id": "cryptography",
  "level": 3
}, {
  "value": "Load Balancing",
  "id": "load-balancing",
  "level": 3
}, {
  "value": "Distributed Systems",
  "id": "distributed-systems",
  "level": 3
}, {
  "value": "General Applications",
  "id": "general-applications",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 17.1: Randomized Quickselect in C++",
  "id": "example-171-randomized-quickselect-in-c",
  "level": 3
}, {
  "value": "Example 17.2: Miller-Rabin in C++",
  "id": "example-172-miller-rabin-in-c",
  "level": 3
}, {
  "value": "Example 17.3: Birthday Problem Analysis",
  "id": "example-173-birthday-problem-analysis",
  "level": 3
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
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
        id: "chapter-17-randomized-algorithms",
        children: "Chapter 17: Randomized Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/16-approximation",
          children: "Chapter 16: Approximation Algorithms"
        }), " — Algorithm design for hard problems | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/18-advanced",
          children: "Chapter 18: Advanced Topics"
        }), " — From randomized methods to online and streaming algorithms"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/algorithms/17-randomized/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/17-randomized/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/17-randomized/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/17-randomized/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/17-randomized/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/17-randomized/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between Monte Carlo and Las Vegas randomized algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze randomized quickselect and randomized quicksort."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Miller-Rabin primality test."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the expected running time of randomized algorithms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Monte Carlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May give wrong answer with bounded probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability of error can be made arbitrarily small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Las Vegas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always correct; running time is random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected time analysis, not worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quicksort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot avoids worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) expected; O(n²) worst case with vanishing probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quickselect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot for k-th smallest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) expected time selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Miller-Rabin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic primality test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log³ n); composite detected with probability ≥ 3/4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Randomized Algorithms] --> B[Monte Carlo]\n    A --> C[Las Vegas]\n    B --> D[May err with bounded probability]\n    C --> E[Always correct, random time]\n    A --> F[Randomized Quickselect]\n    A --> G[Miller-Rabin]\n    A --> H[Randomized Quicksort]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-randomized-algorithms-matter",
      children: "Why Randomized Algorithms Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Imagine you are the receptionist at a busy clinic with one waiting room and five doctors. If patients arrive in a fixed order (alphabetically), the first doctor gets all the A-L patients while the others sit idle. If you randomly assign patients to doctors, the load balances naturally — no single doctor gets overwhelmed. This is exactly why Google's load balancers random-shuffle requests across servers: randomness prevents systematic worst-case behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Randomized algorithms are not a niche curiosity — they power:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cryptography:"
        }), " RSA key generation relies on Miller-Rabin to find large primes. Without randomized primality testing, SSL/TLS would not exist."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load balancing:"
        }), " Randomly assigning requests to servers avoids hot spots with high probability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine learning:"
        }), " Stochastic gradient descent uses random mini-batches to escape local minima."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed systems:"
        }), " Randomized consensus algorithms (like in Apache Kafka) achieve agreement without a central coordinator."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data streaming:"
        }), " Reservoir sampling gives uniform random samples from arbitrarily large streams using tiny memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Randomization introduces variance. The same algorithm on the same input may have different running times or outputs. Understanding probability bounds is essential for correctness guarantees."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Randomized algorithms trade deterministic guarantees for practical efficiency, powering cryptography, load balancing, and distributed systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch17-randomized.png",
        alt: "Randomized Algorithms Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "171-classification",
      children: "17.1 Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Randomized algorithms are classified into two types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Las Vegas algorithms:"
      }), " Always produce a correct result; the running time is a random variable. Examples: randomized quicksort, randomized quickselect."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monte Carlo algorithms:"
      }), " May produce an incorrect result with bounded probability; the running time is deterministic. Examples: Miller-Rabin primality test, Karger's minimum cut algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Las Vegas = always right, sometimes slow. Monte Carlo = always fast, sometimes wrong. Use Las Vegas when correctness is critical (sorting), Monte Carlo when speed matters and errors can be tolerated (primality)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " A Monte Carlo algorithm can be converted to a Las Vegas one if you can verify the answer efficiently and retry on failure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Las Vegas algorithms are always correct with random running time; Monte Carlo algorithms have bounded error with fixed running time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "172-las-vegas-vs-monte-carlo-detailed-comparison",
      children: "17.2 Las Vegas vs Monte Carlo: Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Las Vegas"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monte Carlo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correctness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be wrong with bounded probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Running time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random variable (expected time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic (always fixed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — answer is always right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random coins may produce wrong answer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amplification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run many times (always same result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run many times, take majority vote to reduce error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting, selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primality, minimum cut"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected time complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability of correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quicksort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miller-Rabin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow execution is the only risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong answer is a risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can convert Monte Carlo → Las Vegas if verification is fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot easily convert Las Vegas → Monte Carlo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "173-randomized-quickselect-las-vegas",
      children: "17.3 Randomized Quickselect (Las Vegas)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the ( k )-th smallest element in an unsorted array."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You have 1,000 unsorted exam scores and want the median (500th smallest). Instead of sorting all 1,000, you randomly pick a score, arrange others around it, and recursively search only the relevant half. This is like guessing a number between 1 and 1000 — each random guess eliminates roughly half the remaining range."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the subarray has one element, return it."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pick a random pivot index between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "low"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "high"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition the array so elements ≤ pivot are on the left, > pivot on the right."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " equals the pivot's final position, return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[k]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k < pivotIndex"
        }), ", recurse on the left subarray."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k > pivotIndex"
        }), ", recurse on the right subarray."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RandomizedQuickSelect(A, low, high, k):\n    if low == high:\n        return A[low]\n    pivotIndex = Random(low, high)\n    pivotIndex = Partition(A, low, high, pivotIndex)\n    if k == pivotIndex:\n        return A[k]\n    else if k < pivotIndex:\n        return RandomizedQuickSelect(A, low, pivotIndex - 1, k)\n    else:\n        return RandomizedQuickSelect(A, pivotIndex + 1, high, k)\n\nPartition(A, low, high, pivotIndex):\n    swap A[pivotIndex] with A[high]\n    i = low\n    for j = low to high - 1:\n        if A[j] <= A[high]:\n            swap A[i] with A[j]\n            i = i + 1\n    swap A[i] with A[high]\n    return i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Find the 4th smallest element (k=3, 0-indexed) in array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[7, 10, 4, 3, 20, 15]"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subarray"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pivot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After Partition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,10,4,3,20,15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → index 2 (value 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3,4,7,10,20,15] pivotIndex=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k > 1 → recurse right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,10,20,15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → index 0 of subarray (value 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,10,20,15] pivotIndex=0 (relative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need: k - pivot - 1 = 3-1-1=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k=1 in this subarray, pivotIndex=0 → recurse right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,20,15]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → index 2 of subarray (value 15)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,15,20] pivotIndex=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k == 1 → return 15"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 15 is the 4th smallest element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot gives good split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always pick min or max (probability ( 2/n! ))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always pick median"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) ) expected (recursion stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of expected linear time:"
      }), " Let ( T(n) ) be the expected running time. The pivot divides the array into a left and right portion. The expected size of the smaller portion is ( n/4 ) (the probability that the pivot is in the middle half is ( 1/2 )). Therefore:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nE[T(n)] \\le cn + E[T(3n/4)] \\implies E[T(n)] = O(n).\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "Expected linear time — faster than sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case O(n²) (vanishing probability)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-place partitioning (O(1) extra space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unstable — equal elements may reorder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random number generation overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good cache performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive — stack overflow on large arrays"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = 0:"
        }), " Returns minimum element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = n-1:"
        }), " Returns maximum element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All equal elements:"
        }), " Every pivot produces equal split; always O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array of size 1:"
        }), " Returns the only element directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k out of bounds:"
        }), " Must validate before calling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <cstdlib>\n#include <algorithm>\n#include <iostream>\n\nint partition(std::vector<int>& A, int low, int high, int pivotIndex) {\n    std::swap(A[pivotIndex], A[high]);\n    int i = low;\n    for (int j = low; j < high; ++j) {\n        if (A[j] <= A[high]) {\n            std::swap(A[i], A[j]);\n            ++i;\n        }\n    }\n    std::swap(A[i], A[high]);\n    return i;\n}\n\nint quickSelect(std::vector<int>& A, int low, int high, int k) {\n    if (low == high) return A[low];\n    int pivotIndex = low + std::rand() % (high - low + 1);\n    pivotIndex = partition(A, low, high, pivotIndex);\n    if (k == pivotIndex) return A[k];\n    if (k < pivotIndex) return quickSelect(A, low, pivotIndex - 1, k);\n    return quickSelect(A, pivotIndex + 1, high, k);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef partition(arr, low, high, pivot_idx):\n    arr[pivot_idx], arr[high] = arr[high], arr[pivot_idx]\n    i = low\n    for j in range(low, high):\n        if arr[j] <= arr[high]:\n            arr[i], arr[j] = arr[j], arr[i]\n            i += 1\n    arr[i], arr[high] = arr[high], arr[i]\n    return i\n\ndef quick_select(arr, low, high, k):\n    if low == high:\n        return arr[low]\n    pivot_idx = random.randint(low, high)\n    pivot_idx = partition(arr, low, high, pivot_idx)\n    if k == pivot_idx:\n        return arr[k]\n    elif k < pivot_idx:\n        return quick_select(arr, low, pivot_idx - 1, k)\n    else:\n        return quick_select(arr, pivot_idx + 1, high, k)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Random;\n\npublic class QuickSelect {\n    private static Random rand = new Random();\n\n    private static int partition(int[] A, int low, int high, int pivotIndex) {\n        int temp = A[pivotIndex];\n        A[pivotIndex] = A[high];\n        A[high] = temp;\n        int i = low;\n        for (int j = low; j < high; j++) {\n            if (A[j] <= A[high]) {\n                temp = A[i]; A[i] = A[j]; A[j] = temp;\n                i++;\n            }\n        }\n        temp = A[i]; A[i] = A[high]; A[high] = temp;\n        return i;\n    }\n\n    public static int quickSelect(int[] A, int low, int high, int k) {\n        if (low == high) return A[low];\n        int pivotIndex = low + rand.nextInt(high - low + 1);\n        pivotIndex = partition(A, low, high, pivotIndex);\n        if (k == pivotIndex) return A[k];\n        if (k < pivotIndex) return quickSelect(A, low, pivotIndex - 1, k);\n        return quickSelect(A, pivotIndex + 1, high, k);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "174-randomized-quicksort-las-vegas",
      children: "17.4 Randomized Quicksort (Las Vegas)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Imagine organizing a deck of cards by repeatedly picking a random card and splitting the deck around it. Even if you pick unlucky splits occasionally, the expected number of comparisons is remarkably small — about 1.39 n log₂ n. This is why real-world sort implementations (Java's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Arrays.sort"
      }), ", Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sorted"
      }), ") use randomized pivot selection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the subarray has 0 or 1 elements, return."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pick a random pivot index between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "low"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "high"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition the array around the pivot."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively sort the left and right subarrays."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RandomizedQuickSort(A, low, high):\n    if low < high:\n        pivotIndex = Random(low, high)\n        pivotIndex = Partition(A, low, high, pivotIndex)\n        RandomizedQuickSort(A, low, pivotIndex - 1)\n        RandomizedQuickSort(A, pivotIndex + 1, high)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sort array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 7, 8, 9, 1, 5]"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subarray"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pivot (value)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After Partition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursive Calls"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10,7,8,9,1,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → idx 4 (value 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,7,8,9,10,5] pivotIdx=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=[] right=[7,8,9,10,5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,8,9,10,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → idx 2 (value 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,8,5,9,10] pivotIdx=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=[7,8,5] right=[10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,8,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → idx 1 (value 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,5,8] pivotIdx=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=[7,5] right=[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random → idx 0 (value 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5,7] pivotIdx=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "left=[5] right=[]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 5, 7, 8, 9, 10]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot gives balanced splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always pick min/max (probability ( 2/n ))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always pick median"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) ) expected (recursion)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof outline:"
      }), " Let the sorted elements be ( z_1 < z_2 < \\cdots < z_n ). Define indicator random variable ( X_{ij} = 1 ) if ( z_i ) and ( z_j ) are compared. The probability that ( z_i ) and ( z_j ) are compared is ( 2/(j-i+1) ). By linearity of expectation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nE[\\text{total comparisons}] = \\sum_{i=1}^n \\sum_{j>i} \\frac{2}{j-i+1} = O(n \\log n).\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The constant factor is small: ( E[\\text{comparisons}] = 2n \\ln n \\approx 1.39 n \\log_2 n )."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "Expected O(n log n) — avoids deterministic worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random number generation overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-place sorting (O(log n) stack space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not stable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent cache performance (sequential access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive — may overflow stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler than deterministic pivot schemes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case O(n²) still possible (though unlikely)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Already sorted:"
        }), " Random pivot avoids O(n²) behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All equal elements:"
        }), " Every pivot splits evenly; O(n log n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reverse sorted:"
        }), " Same as sorted — random pivot protects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array of size 0 or 1:"
        }), " Trivially sorted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void quickSort(std::vector<int>& A, int low, int high) {\n    if (low < high) {\n        int pivotIndex = low + std::rand() % (high - low + 1);\n        pivotIndex = partition(A, low, high, pivotIndex);\n        quickSort(A, low, pivotIndex - 1);\n        quickSort(A, pivotIndex + 1, high);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef quicksort(arr, low, high):\n    if low < high:\n        pivot_idx = random.randint(low, high)\n        pivot_idx = partition(arr, low, high, pivot_idx)\n        quicksort(arr, low, pivot_idx - 1)\n        quicksort(arr, pivot_idx + 1, high)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static void quickSort(int[] A, int low, int high) {\n    if (low < high) {\n        int pivotIndex = low + rand.nextInt(high - low + 1);\n        pivotIndex = partition(A, low, high, pivotIndex);\n        quickSort(A, low, pivotIndex - 1);\n        quickSort(A, pivotIndex + 1, high);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "175-miller-rabin-primality-test-monte-carlo",
      children: "17.5 Miller-Rabin Primality Test (Monte Carlo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Determine if a number ( n ) is prime or composite."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You are a bouncer at an exclusive club. Instead of checking every ID thoroughly, you randomly ask a few questions. If someone fails a question, you know they are underage for sure. If they pass all questions, they are probably of age. The more questions you ask, the more certain you become. This is exactly how SSL/TLS generates RSA primes — the Miller-Rabin test quickly identifies composites with exponentially small error probability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight (Fermat's little theorem):"
      }), " If ( n ) is prime, then for any ( a ) not divisible by ( n ), ( a^{n-1} \\equiv 1 \\pmod{n} ). However, there exist Carmichael numbers (e.g., 561) for which the converse fails."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strong pseudoprime test:"
      }), " Write ( n-1 = 2^s \\cdot d ) where ( d ) is odd. For a base ( a ):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute ( x_0 = a^d \\bmod n )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For ( i = 1, \\ldots, s-1 ): compute ( x_i = x_{i-1}^2 \\bmod n )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If ( x_0 \\equiv 1 \\pmod{n} ) or ( x_i \\equiv -1 \\pmod{n} ) for some ( i ), then ( n ) passes the test."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MillerRabin(n, k):\n    if n < 2: return false\n    if n == 2 or n == 3: return true\n    if n % 2 == 0: return false\n    Write n-1 = 2^s * d with d odd\n    repeat k times:\n        a = random(2, n-2)\n        x = pow(a, d) mod n\n        if x == 1 or x == n-1: continue\n        for r = 1 to s-1:\n            x = x^2 mod n\n            if x == n-1: break\n            if x == 1: return false\n        if x != n-1: return false\n    return true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test if n = 221 is prime with k = 2 rounds."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "s"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x₀ = a^d mod n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x₁ = x₀² mod n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x₂ = x₁² mod n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n-1 = 220 = 2² × 55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d=55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "174"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "174⁵⁵ mod 221 = 47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47² mod 221 = 220 ≡ -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass (found -1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85⁵⁵ mod 221 = 168"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "168² mod 221 = 157"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "157² mod 221 = 130 ≠ -1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FAIL"
            }), " — 221 is composite"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 221 = 13 × 17. Correctly identified as composite."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error probability:"
      }), " At most ( 4^{-k} ) for a composite ( n ). After ( k ) rounds, if ( n ) passes all tests, it is prime with probability ( 1 - 4^{-k} ). For ( k = 20 ), the error probability is ( 4^{-20} \\approx 10^{-12} )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deterministic variants:"
      }), " For ( n < 2^{64} ), testing bases [2, 3, 5, 7, 11, 13] suffices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (per round)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log^3 n) ) — modular exponentiation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (k rounds)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k \\log^3 n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error prob. (k rounds)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\le 4^{-k} )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "Fast for large numbers (polylog time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic — not 100% certain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error probability tunable via k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than deterministic sieve for small n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any size n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic variants limited to n < 2⁶⁴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of RSA key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carmichael numbers need more rounds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 1:"
        }), " Return false (not prime)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 2, 3:"
        }), " Return true."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Even numbers > 2:"
        }), " Return false immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Carmichael numbers (e.g., 561, 1105):"
        }), " Pass Fermat test but fail Miller-Rabin with high probability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n < 2⁶⁴:"
        }), " Use deterministic base set."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cstdlib>\n#include <cstdint>\n\nint64_t modPow(int64_t a, int64_t d, int64_t n) {\n    int64_t result = 1;\n    a %= n;\n    while (d > 0) {\n        if (d & 1) result = (result * a) % n;\n        a = (a * a) % n;\n        d >>= 1;\n    }\n    return result;\n}\n\nbool millerRabin(int64_t n, int k) {\n    if (n < 2) return false;\n    if (n == 2 || n == 3) return true;\n    if (n % 2 == 0) return false;\n    int64_t d = n - 1;\n    int s = 0;\n    while (d % 2 == 0) { d /= 2; ++s; }\n    for (int i = 0; i < k; ++i) {\n        int64_t a = 2 + std::rand() % (n - 4);\n        int64_t x = modPow(a, d, n);\n        if (x == 1 || x == n - 1) continue;\n        bool composite = true;\n        for (int r = 0; r < s - 1; ++r) {\n            x = (x * x) % n;\n            if (x == n - 1) { composite = false; break; }\n        }\n        if (composite) return false;\n    }\n    return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef mod_pow(a, d, n):\n    result = 1\n    a = a % n\n    while d > 0:\n        if d & 1:\n            result = (result * a) % n\n        a = (a * a) % n\n        d >>= 1\n    return result\n\ndef miller_rabin(n, k=20):\n    if n < 2: return False\n    if n in (2, 3): return True\n    if n % 2 == 0: return False\n    d, s = n - 1, 0\n    while d % 2 == 0:\n        d //= 2\n        s += 1\n    for _ in range(k):\n        a = random.randrange(2, n - 1)\n        x = mod_pow(a, d, n)\n        if x == 1 or x == n - 1:\n            continue\n        for _ in range(s - 1):\n            x = (x * x) % n\n            if x == n - 1:\n                break\n        else:\n            return False\n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.math.BigInteger;\nimport java.util.Random;\n\npublic class MillerRabin {\n    private static Random rand = new Random();\n\n    public static boolean isPrime(BigInteger n, int k) {\n        if (n.compareTo(BigInteger.valueOf(2)) < 0) return false;\n        if (n.equals(BigInteger.valueOf(2)) || n.equals(BigInteger.valueOf(3))) return true;\n        if (n.mod(BigInteger.valueOf(2)).equals(BigInteger.ZERO)) return false;\n\n        BigInteger d = n.subtract(BigInteger.ONE);\n        int s = 0;\n        while (d.mod(BigInteger.valueOf(2)).equals(BigInteger.ZERO)) {\n            d = d.divide(BigInteger.valueOf(2));\n            s++;\n        }\n\n        for (int i = 0; i < k; i++) {\n            BigInteger a = new BigInteger(n.bitLength() - 1, rand).add(BigInteger.valueOf(2));\n            BigInteger x = a.modPow(d, n);\n            if (x.equals(BigInteger.ONE) || x.equals(n.subtract(BigInteger.ONE))) continue;\n            boolean composite = true;\n            for (int r = 0; r < s - 1; r++) {\n                x = x.modPow(BigInteger.valueOf(2), n);\n                if (x.equals(n.subtract(BigInteger.ONE))) {\n                    composite = false;\n                    break;\n                }\n            }\n            if (composite) return false;\n        }\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "176-kargers-minimum-cut-algorithm-monte-carlo",
      children: "17.6 Karger's Minimum Cut Algorithm (Monte Carlo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You run a network of fiber-optic cables and want to find the smallest set of cables whose failure would disconnect the network. Karger's algorithm repeatedly picks a random cable and fuses its two endpoints together, essentially bundling them into a single node. The cut that survives this random contraction process is likely to be the minimum cut."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the minimum cut in an undirected graph ( G = (V, E) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the original graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While there are more than 2 vertices remaining:\na. Pick a random edge ( (u, v) ).\nb. Contract ( u ) and ( v ) into a single super-node.\nc. Remove self-loops; keep parallel edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The remaining edges between the two final super-nodes form a cut."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat ( O(n^2 \\log n) ) times for high-probability guarantee."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "KargerMinCut(G):\n    n = |V|\n    repeat n^2 * ln(n) times:\n        H = copy of G\n        while |V(H)| > 2:\n            pick random edge (u,v) from H\n            contract u and v in H\n        cut = number of edges between remaining two vertices\n        keep minimum cut seen\n    return min_cut\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (4 vertices with cut size 2):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: A-B, A-C, A-D, B-C, C-D (5 edges). The min cut is {B, D} with 2 edges."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After Contraction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remaining Vertices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cut Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A-B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{AB}, C, D; edges: (AB)-C × 2, (AB)-D, C-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ABC}, D with 2 edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B, {CD}; edges: A-B, A-{CD} × 2, B-{CD}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{AB}, {CD} with 2 edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{AC}, B, D; edges: B-{AC} × 2, D-{AC}, B-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ACB}, D with 2 edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "One trial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(m) ) using adjacency list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total (n² log n trials)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2 m \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n + m) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Success probability (one trial)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\ge 2/n^2 )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overall success probability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1 - 1/n )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "Elegant and simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow — O(n² m log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-probability guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs many trials for certainty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles parallel edges naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May destroy min cut in early contractions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to parallelize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for small graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "177-freivalds-algorithm-for-matrix-verification-monte-carlo",
      children: "17.7 Freivalds' Algorithm for Matrix Verification (Monte Carlo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You are grading 100 student submissions for a matrix multiplication. Instead of recomputing the full product for each student, you pick a random test vector. If the result is wrong, you will catch it with high probability — and if it passes, the student is almost certainly correct."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Verify if ( A \\times B = C ) for ( n \\times n ) matrices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a random vector ( r ) of 0s and 1s."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute ( A \\cdot (B \\cdot r) ) — two matrix-vector multiplications: O(n²)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare with ( C \\cdot r ) — one matrix-vector multiplication: O(n²)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If equal, return true; otherwise, return false."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Freivalds(A, B, C, n):\n    r = random vector of length n with entries 0 or 1\n    Br = B * r          // matrix-vector multiply\n    ABr = A * Br        // matrix-vector multiply\n    Cr = C * r          // matrix-vector multiply\n    if ABr == Cr:\n        return true     // probably correct\n    else:\n        return false    // definitely wrong\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) ) — three matrix-vector multiplications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) — just the vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error prob. (one trial)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\le 1/2 )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error prob. (k trials)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\le 2^{-k} )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "O(n²) vs O(n³) for naive re-computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic — small chance of false positive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for matrices over fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error probability reduces exponentially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero false negatives — always catches errors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "178-reservoir-sampling-las-vegas--monte-carlo-variant",
      children: "17.8 Reservoir Sampling (Las Vegas / Monte Carlo variant)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You work at a streaming service and want to show users 5 random songs from an infinitely long playlist. You cannot store the entire playlist in memory. Reservoir sampling lets you maintain a perfectly uniform random sample of size 5 using only 5 slots — no matter how long the stream."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Select ( k ) elements uniformly at random from a stream of unknown length ( n )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fill the reservoir with the first k elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each subsequent element at position i (1-indexed):\na. Generate a random number j between 1 and i.\nb. If j ≤ k, replace reservoir[j-1] with the current element."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ReservoirSampling(stream, k):\n    reservoir = first k elements of stream\n    i = k\n    while stream has more elements:\n        i++\n        j = random(1, i)\n        if j <= k:\n            reservoir[j-1] = current element\n    return reservoir\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Sample k=2 from stream [A, B, C, D, E]."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j (rand 1..i)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j ≤ k?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reservoir Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reservoir After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (2 ≤ 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, C]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (4 > 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, C]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (1 ≤ 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[E, C]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Correctness:"
      }), " At step i, each of the first i elements has probability k/i of being in the reservoir. Proof by induction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly uniform random sample"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "Exact uniform sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential — cannot parallelize easily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) space regardless of n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires k to be known in advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Only one pass over data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each element needs one random number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for infinite streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot produce weighted samples"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = 1:"
        }), " Simplifies to \"keep current element with probability 1/i\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k ≥ n:"
        }), " Reservoir contains the entire stream."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty stream:"
        }), " Return empty reservoir."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> reservoirSampling(const std::vector<int>& stream, int k) {\n    std::vector<int> reservoir(stream.begin(), stream.begin() + k);\n    for (size_t i = k; i < stream.size(); ++i) {\n        int j = std::rand() % (i + 1);\n        if (j < k) reservoir[j] = stream[i];\n    }\n    return reservoir;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef reservoir_sampling(stream, k):\n    reservoir = list(stream[:k])\n    for i, elem in enumerate(stream[k:], start=k):\n        j = random.randint(0, i)\n        if j < k:\n            reservoir[j] = elem\n    return reservoir\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class ReservoirSampling {\n    public static List<Integer> sample(List<Integer> stream, int k) {\n        List<Integer> reservoir = new ArrayList<>(stream.subList(0, k));\n        Random rand = new Random();\n        for (int i = k; i < stream.size(); i++) {\n            int j = rand.nextInt(i + 1);\n            if (j < k) reservoir.set(j, stream.get(i));\n        }\n        return reservoir;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "179-birthday-problem-analysis",
      children: "17.9 Birthday Problem Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application to hashing:"
      }), " The expected number of random samples before a collision in a set of size ( N ) is ( \\Theta(\\sqrt{N}) ). This principle underlies the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "birthday attack"
      }), " in cryptography and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pollard's rho algorithm"
      }), " for integer factorization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correctness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Intuition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quicksort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Las Vegas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot avoids worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quickselect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Las Vegas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot gives linear expected time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Miller-Rabin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monte Carlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k log^3 n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error ≤ 4^-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong pseudoprime check, k rounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Karger Min-Cut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monte Carlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^4 log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random edge contraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freivalds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monte Carlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) per trial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error ≤ 2^-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random vector verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time, O(k) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with prob k/i"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Las Vegas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always correct; expected time analysis; examples: quicksort, quickselect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monte Carlo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded error; deterministic time; amplify via repetition; examples: Miller-Rabin, Karger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quickselect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected O(n); probability of worst case is 1/n!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quicksort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected O(n log n); ~1.39 n log₂ n comparisons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Miller-Rabin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error ≤ 4^-k; strong pseudoprime; deterministic for n < 2^64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Karger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n² log n) trials; success prob ≥ 1 - 1/n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Freivalds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) verification vs O(n³) compute; error < 2^-k with k trials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reservoir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with prob k/i; O(k) space; exact uniform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Other Techniques"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Karger min-cut, Freivalds matrix check, birthday paradox"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quicksort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General sorting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized Quickselect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median/order stats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order statistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Miller-Rabin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (precomputed primes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL/TLS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Karger Min-Cut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freivalds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fault-tolerant computing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data science streams"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-questions",
      children: "Common Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Randomized Selection (k-th smallest)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Problem:"
      }), " Find the k-th smallest element in an unsorted array in expected O(n) time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution:"
      }), " Use Randomized Quickselect. The key insight is that the random pivot gives expected linear time with probability exponentially close to 1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Variation:"
      }), " Find ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all"
      }), " elements in the top 10% of an unsorted array. Use quickselect to find the 90th percentile element, then scan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Random Shuffling (Fisher-Yates)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Problem:"
      }), " Generate a uniformly random permutation of an array."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution:"
      }), " Fisher-Yates shuffle — iterate from the end, swapping each element with a random element before it (inclusive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\ndef fisher_yates(arr):\n    for i in range(len(arr) - 1, 0, -1):\n        j = random.randint(0, i)\n        arr[i], arr[j] = arr[j], arr[i]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Complexity:"
      }), " O(n) time, O(1) extra space. All n! permutations equally likely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Load Balancing with Randomization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Problem:"
      }), " Design a load balancer for k servers handling n requests where you do not know request processing times."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution:"
      }), " Randomly assign each request to a server. With high probability, no server gets more than O(log n / log log n) extra requests beyond the average."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Karger Min-Cut Variations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Variation 1:"
        }), " Karger-Stein algorithm — recursively run two trials and pick the better result. Reduces total time to O(n² log² n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Variation 2:"
        }), " Weighted min-cut — edge probabilities proportional to weight for weighted graphs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Reservoir Sampling Variations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Variation 1:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Weighted reservoir sampling"
        }), " — each element has weight wᵢ; sample proportional to weight."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Variation 2:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed reservoir sampling"
        }), " — sample independently per partition, then merge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Variation 3:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential reservoir"
        }), " — for time-decayed sampling from streams."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Las Vegas vs Monte Carlo in Interview Questions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Question:"
        }), " \"Is Quickselect a Las Vegas or Monte Carlo algorithm?\" — Las Vegas (always correct, random time)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Question:"
        }), " \"Can you convert Miller-Rabin to Las Vegas?\" — Only with a deterministic primality certificate (impossible for large n)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications",
      children: "Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cryptography",
      children: "Cryptography"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Randomized Algorithm Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miller-Rabin to find large primes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diffie-Hellman key exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random private key selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random nonce generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-knowledge proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random challenges for verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Birthday attack prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographic hash salt randomization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kerberos authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random session key generation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancing",
      children: "Load Balancing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Randomization Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Frontend (GFE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random request assignment to backends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS Elastic Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random target selection per request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random hash function for distributed caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apache Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random partition assignment for producers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Swarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized container scheduling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "distributed-systems",
      children: "Distributed Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Randomized Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus (e.g., Raft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random election timeouts prevent split votes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leader election"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized backoff reduces contention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gossip protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random peer selection for information spread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Byzantine agreement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized rounds for fault tolerance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing with random seeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random probing in SWIM protocol"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-applications",
      children: "General Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monte Carlo simulation"
        }), " — financial risk modeling, physics simulations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Randomized rounding"
        }), " — approximation algorithms for integer programming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skip lists"
        }), " — randomized data structure for balanced BST-like performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Randomized dimensionality reduction"
        }), " — Johnson-Lindenstrauss lemma for ML."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property testing"
        }), " — verify graph properties with sublinear queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fingerprinting"
        }), " — Rabin-Karp string matching, polynomial identity testing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-171-randomized-quickselect-in-c",
      children: "Example 17.1: Randomized Quickselect in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <cstdlib>\n#include <algorithm>\n\nint partition(std::vector<int>& A, int low, int high, int pivotIndex) {\n    std::swap(A[pivotIndex], A[high]);\n    int i = low;\n    for (int j = low; j < high; ++j) {\n        if (A[j] <= A[high]) {\n            std::swap(A[i], A[j]);\n            ++i;\n        }\n    }\n    std::swap(A[i], A[high]);\n    return i;\n}\n\nint quickSelect(std::vector<int>& A, int low, int high, int k) {\n    if (low == high) return A[low];\n    int pivotIndex = low + std::rand() % (high - low + 1);\n    pivotIndex = partition(A, low, high, pivotIndex);\n    if (k == pivotIndex) return A[k];\n    if (k < pivotIndex) return quickSelect(A, low, pivotIndex - 1, k);\n    return quickSelect(A, pivotIndex + 1, high, k);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-172-miller-rabin-in-c",
      children: "Example 17.2: Miller-Rabin in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cstdlib>\n#include <cstdint>\n\nint64_t modPow(int64_t a, int64_t d, int64_t n) {\n    int64_t result = 1;\n    a %= n;\n    while (d > 0) {\n        if (d & 1) result = (result * a) % n;\n        a = (a * a) % n;\n        d >>= 1;\n    }\n    return result;\n}\n\nbool millerRabin(int64_t n, int k) {\n    if (n < 2) return false;\n    if (n == 2 || n == 3) return true;\n    if (n % 2 == 0) return false;\n    int64_t d = n - 1;\n    int s = 0;\n    while (d % 2 == 0) { d /= 2; ++s; }\n    for (int i = 0; i < k; ++i) {\n        int64_t a = 2 + std::rand() % (n - 4);\n        int64_t x = modPow(a, d, n);\n        if (x == 1 || x == n - 1) continue;\n        bool composite = true;\n        for (int r = 0; r < s - 1; ++r) {\n            x = (x * x) % n;\n            if (x == n - 1) { composite = false; break; }\n        }\n        if (composite) return false;\n    }\n    return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-173-birthday-problem-analysis",
      children: "Example 17.3: Birthday Problem Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application to hashing:"
      }), " The expected number of random samples before a collision in a set of size ( N ) is ( \\Theta(\\sqrt{N}) ). This principle underlies the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "birthday attack"
      }), " in cryptography and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pollard's rho algorithm"
      }), " for integer factorization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Las Vegas algorithms"
        }), " are always correct with random running time (quickselect, quicksort)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monte Carlo algorithms"
        }), " have deterministic running time with bounded error probability (Miller-Rabin, Karger)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Randomized algorithms often achieve better asymptotic complexity and simpler implementations than deterministic counterparts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Miller-Rabin test is the most practical primality test for large numbers, with error probability ( 4^{-k} )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applications of randomized algorithms span cryptography (RSA), load balancing (GFE), and distributed systems (Raft consensus)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between Monte Carlo and Las Vegas algorithms with examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does randomized quicksort avoid the worst-case O(n²) behavior?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the source of error in the Miller-Rabin test?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does reservoir sampling guarantee uniform distribution?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is Karger's algorithm a Monte Carlo algorithm?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement randomized quicksort and empirically compare its running time with deterministic quicksort on sorted, reverse-sorted, and random inputs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test numbers up to ( 10^6 ) using Miller-Rabin and compare with a deterministic sieve."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Karger's minimum cut algorithm and test it on a 10-vertex graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the expected number of comparisons for randomized quicksort on n = 100 using the formula ( 2n \\ln n )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement reservoir sampling to select 10 random lines from a 10,000-line file."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a randomized algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "distinct elements problem"
        }), " in data streams (Flajolet-Martin algorithm). The algorithm should use ( O(\\log n) ) space and estimate the number of distinct elements with bounded error."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the difference between Las Vegas and Monte Carlo algorithms?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Las Vegas is faster; Monte Carlo is more accurate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Las Vegas always gives correct answers; Monte Carlo may err with bounded probability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Las Vegas uses randomness; Monte Carlo is deterministic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Las Vegas algorithms are always correct (running time is random); Monte Carlo algorithms have bounded error probability (running time is fixed).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the expected time complexity of randomized quickselect?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n²)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) O(n) expected. The recurrence T(n) ≤ T(3n/4) + O(n) solves to O(n).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the source of error in the Miller-Rabin primality test?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Fermat's little theorem is false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Carmichael numbers pass strong pseudoprime tests with some probability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The algorithm uses a fixed number of random bases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both B and C"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nD) For a composite number, a random base has at most 25% chance of falsely declaring it prime. Running k independent rounds reduces error to 4^-k.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " How does reservoir sampling ensure each element has equal probability?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) By storing all elements and picking randomly at the end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) By replacing elements with probability k/i at step i"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) By using a hash function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) By randomly discarding half the elements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) At step i, the current element replaces a reservoir element with probability k/i, ensuring each element has exactly k/i probability of being in the reservoir.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the competitive ratio of the randomized ski rental algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) k"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) e/(e-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) e/(e-1) ≈ 1.58, achieved by choosing a random threshold according to a specific exponential distribution.\n"
      })]
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