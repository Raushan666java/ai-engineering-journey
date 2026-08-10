"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[19691],{

/***/ 29422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_quantitative_aptitude_06_permutation_combination_probability_md_3a3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-quantitative-aptitude-06-permutation-combination-probability-md-3a3.json
const site_docs_courses_quantitative_aptitude_06_permutation_combination_probability_md_3a3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/quantitative-aptitude/06-permutation-combination-probability","title":"Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls","description":"Learning Objectives","source":"@site/docs/courses/quantitative-aptitude/06-permutation-combination-probability.md","sourceDirName":"courses/quantitative-aptitude","slug":"/quantitative-aptitude/06-permutation-combination-probability","permalink":"/ai-engineering-journey/quantitative-aptitude/06-permutation-combination-probability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-permutation-combination-probability","slug":"/quantitative-aptitude/06-permutation-combination-probability","title":"Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls","sidebar_label":"Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Quadratic Equations & Simplification — Quadratic Comparison, Approximation, BODMAS","permalink":"/ai-engineering-journey/quantitative-aptitude/05-quadratic-equations-simplification"},"next":{"title":"Reasoning Ability — IBPS SO & Govt Exam Prep","permalink":"/ai-engineering-journey/reasoning-ability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/quantitative-aptitude/06-permutation-combination-probability.md


const frontMatter = {
	id: '06-permutation-combination-probability',
	slug: '/quantitative-aptitude/06-permutation-combination-probability',
	title: 'Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls',
	sidebar_label: 'Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. Fundamental Principle of Counting",
  "id": "1-fundamental-principle-of-counting",
  "level": 3
}, {
  "value": "2. Factorial",
  "id": "2-factorial",
  "level": 3
}, {
  "value": "3. Permutation (Arrangement)",
  "id": "3-permutation-arrangement",
  "level": 3
}, {
  "value": "4. Combination (Selection)",
  "id": "4-combination-selection",
  "level": 3
}, {
  "value": "5. Probability",
  "id": "5-probability",
  "level": 3
}, {
  "value": "6. Coin Problems",
  "id": "6-coin-problems",
  "level": 3
}, {
  "value": "7. Dice Problems",
  "id": "7-dice-problems",
  "level": 3
}, {
  "value": "8. Card Problems (Standard 52-Card Deck)",
  "id": "8-card-problems-standard-52-card-deck",
  "level": 3
}, {
  "value": "9. Ball Problems",
  "id": "9-ball-problems",
  "level": 3
}, {
  "value": "Mermaid Diagram: Permutation vs Combination Decision Tree",
  "id": "mermaid-diagram-permutation-vs-combination-decision-tree",
  "level": 2
}, {
  "value": "Mermaid Diagram: Probability Problem-Solving Flow",
  "id": "mermaid-diagram-probability-problem-solving-flow",
  "level": 2
}, {
  "value": "Mermaid Diagram: Types of Probability Problems",
  "id": "mermaid-diagram-types-of-probability-problems",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Fundamental Counting Principle",
  "id": "example-1-fundamental-counting-principle",
  "level": 3
}, {
  "value": "Example 2: Permutation",
  "id": "example-2-permutation",
  "level": 3
}, {
  "value": "Example 3: Permutation with Selection",
  "id": "example-3-permutation-with-selection",
  "level": 3
}, {
  "value": "Example 4: Combination",
  "id": "example-4-combination",
  "level": 3
}, {
  "value": "Example 5: Coin Probability",
  "id": "example-5-coin-probability",
  "level": 3
}, {
  "value": "Example 6: Dice Probability",
  "id": "example-6-dice-probability",
  "level": 3
}, {
  "value": "Example 7: Card Probability",
  "id": "example-7-card-probability",
  "level": 3
}, {
  "value": "Example 8: Ball Probability",
  "id": "example-8-ball-probability",
  "level": 3
}, {
  "value": "Example 9: Permutation with Identical Objects",
  "id": "example-9-permutation-with-identical-objects",
  "level": 3
}, {
  "value": "Example 10: Addition Theorem",
  "id": "example-10-addition-theorem",
  "level": 3
}, {
  "value": "Example 11: Conditional Probability",
  "id": "example-11-conditional-probability",
  "level": 3
}, {
  "value": "Example 12: Selection with Constraints",
  "id": "example-12-selection-with-constraints",
  "level": 3
}, {
  "value": "Example 13: IBPS SO Level — Probability with Cards",
  "id": "example-13-ibps-so-level--probability-with-cards",
  "level": 3
}, {
  "value": "Example 14: IBPS SO Level — Permutation with Constraints",
  "id": "example-14-ibps-so-level--permutation-with-constraints",
  "level": 3
}, {
  "value": "Example 15: Expected Value",
  "id": "example-15-expected-value",
  "level": 3
}, {
  "value": "Shortcut Methods",
  "id": "shortcut-methods",
  "level": 2
}, {
  "value": "Shortcut 1: Permutation vs Combination",
  "id": "shortcut-1-permutation-vs-combination",
  "level": 3
}, {
  "value": "Shortcut 2: Simplifying P(n,r) and C(n,r)",
  "id": "shortcut-2-simplifying-pnr-and-cnr",
  "level": 3
}, {
  "value": "Shortcut 3: Sum of Two Dice",
  "id": "shortcut-3-sum-of-two-dice",
  "level": 3
}, {
  "value": "Shortcut 4: Card Probabilities",
  "id": "shortcut-4-card-probabilities",
  "level": 3
}, {
  "value": "Shortcut 5: &quot;At Least One&quot; Probability",
  "id": "shortcut-5-at-least-one-probability",
  "level": 3
}, {
  "value": "Shortcut 6: Ball Problems",
  "id": "shortcut-6-ball-problems",
  "level": 3
}, {
  "value": "Shortcut 7: Arrangements with Constraints",
  "id": "shortcut-7-arrangements-with-constraints",
  "level": 3
}, {
  "value": "Shortcut 8: Digit Sum and Selection",
  "id": "shortcut-8-digit-sum-and-selection",
  "level": 3
}, {
  "value": "Shortcut 9: Independent Events",
  "id": "shortcut-9-independent-events",
  "level": 3
}, {
  "value": "Shortcut 10: Mutually Exclusive Events",
  "id": "shortcut-10-mutually-exclusive-events",
  "level": 3
}, {
  "value": "Mermaid Diagram: Coin Toss Probabilities",
  "id": "mermaid-diagram-coin-toss-probabilities",
  "level": 2
}, {
  "value": "TypeScript Implementation: Permutation, Combination &amp; Probability Calculator",
  "id": "typescript-implementation-permutation-combination--probability-calculator",
  "level": 2
}, {
  "value": "📝 Solved Examples (20 MCQs)",
  "id": "-solved-examples-20-mcqs",
  "level": 2
}, {
  "value": "Set 1: Permutation &amp; Combination (Questions 1–8)",
  "id": "set-1-permutation--combination-questions-18",
  "level": 3
}, {
  "value": "Set 2: Probability (Questions 9–20)",
  "id": "set-2-probability-questions-920",
  "level": 3
}, {
  "value": "📖 Exercise Bank (30 Questions)",
  "id": "-exercise-bank-30-questions",
  "level": 2
}, {
  "value": "Permutation &amp; Combination (1–12)",
  "id": "permutation--combination-112",
  "level": 3
}, {
  "value": "Probability (13–30)",
  "id": "probability-1330",
  "level": 3
}, {
  "value": "Mermaid Diagram: Permutation vs Combination — Decision Flow",
  "id": "mermaid-diagram-permutation-vs-combination--decision-flow",
  "level": 2
}, {
  "value": "Mermaid Diagram: Probability — &quot;At Least One&quot; Strategy",
  "id": "mermaid-diagram-probability--at-least-one-strategy",
  "level": 2
}, {
  "value": "Mermaid Diagram: Card Probability — Deck Structure",
  "id": "mermaid-diagram-card-probability--deck-structure",
  "level": 2
}, {
  "value": "Formula Reference Table",
  "id": "formula-reference-table",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Mermaid Diagram: Selection with Constraints",
  "id": "mermaid-diagram-selection-with-constraints",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary-1",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Question 1",
  "id": "question-1",
  "level": 3
}, {
  "value": "Question 2",
  "id": "question-2",
  "level": 3
}, {
  "value": "Question 3",
  "id": "question-3",
  "level": 3
}, {
  "value": "Question 4",
  "id": "question-4",
  "level": 3
}, {
  "value": "Question 5",
  "id": "question-5",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1 (Beginner — Counting)",
  "id": "exercise-1-beginner--counting",
  "level": 3
}, {
  "value": "Exercise 2 (Beginner — Permutation)",
  "id": "exercise-2-beginner--permutation",
  "level": 3
}, {
  "value": "Exercise 3 (Beginner — Combination)",
  "id": "exercise-3-beginner--combination",
  "level": 3
}, {
  "value": "Exercise 4 (Intermediate — Coin)",
  "id": "exercise-4-intermediate--coin",
  "level": 3
}, {
  "value": "Exercise 5 (Intermediate — Dice)",
  "id": "exercise-5-intermediate--dice",
  "level": 3
}, {
  "value": "Exercise 6 (Intermediate — Cards)",
  "id": "exercise-6-intermediate--cards",
  "level": 3
}, {
  "value": "Exercise 7 (Advanced — Ball)",
  "id": "exercise-7-advanced--ball",
  "level": 3
}, {
  "value": "Exercise 8 (Advanced — Permutation with Constraint)",
  "id": "exercise-8-advanced--permutation-with-constraint",
  "level": 3
}, {
  "value": "Exercise 9 (IBPS SO Level)",
  "id": "exercise-9-ibps-so-level",
  "level": 3
}, {
  "value": "Exercise 10 (IBPS SO Level)",
  "id": "exercise-10-ibps-so-level",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "chapter-6-permutation--combination-probability--basic-counting-arrangements-selections-coins-dice-cards-balls",
        children: "Chapter 6: Permutation & Combination, Probability — Basic Counting, Arrangements, Selections, Coins, Dice, Cards, Balls"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the fundamental principle of counting to solve arrangement problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate permutations (arrangements) of distinct and identical objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate combinations (selections) from a group of items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve probability problems involving coins, dice, cards, and balls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between permutation and combination in exam questions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use shortcut formulas for IBPS SO-level probability problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve miscellaneous counting problems efficiently"
      }), "\n"]
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
        href: "../../assets/images/lessons/quantitative-aptitude/06-permutation-combination-probability/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/quantitative-aptitude/06-permutation-combination-probability/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/quantitative-aptitude/06-permutation-combination-probability/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/quantitative-aptitude/06-permutation-combination-probability/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/quantitative-aptitude/06-permutation-combination-probability/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/quantitative-aptitude/06-permutation-combination-probability/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-fundamental-principle-of-counting",
      children: "1. Fundamental Principle of Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplication Rule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If one task can be done in m ways and another independent task can be done in\nways, then both tasks together can be done in m × n ways."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Addition Rule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If one task can be done in m ways and another disjoint task can be done in\nways, then either of the two tasks can be done in m + n ways."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-factorial",
      children: "2. Factorial"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Special case: �! = 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Factorial Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1! = 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2! = 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3! = 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4! = 24"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5! = 120"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6! = 720"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7! = 5040"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "8! = 40320"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "9! = 362880"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10! = 3628800"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-permutation-arrangement",
      children: "3. Permutation (Arrangement)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A permutation is an arrangement of objects in a specific order. Order matters."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Number of ways to arrange\robjects out of\ndistinct objects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(n, r) = n! / (n - r)!"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Special Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of arrangements of\ndistinct objects in a line:\n!"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of arrangements of\nobjects in a circle: (n-1)!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Permutations with Repetition (Arrangements with Identical Objects):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If there are\nobjects where p are of one type, q of another type, and\rof another:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Number of arrangements = n! / (p! × q! × r!)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Permutations with Repetition Allowed:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If each of\rpositions can be filled from\nobjects (repetition allowed):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Number of arrangements = n^r"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-combination-selection",
      children: "4. Combination (Selection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A combination is a selection of objects where order does NOT matter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Number of ways to select\robjects out of\ndistinct objects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C(n, r) = n! / [r! × (n - r)!]"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of Combinations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C(n, r) = C(n, n-r) C(n, 0) = C(n, n) = 1 C(n, 1) = n C(n, r) + C(n, r-1) = C(n+1, r)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important Identity:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n) = 2^n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-probability",
      children: "5. Probability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If an experiment has S equally likely outcomes and an event E has F favourable outcomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(E) = F / S = Number of favourable outcomes / Total number of outcomes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Range of Probability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0 ≤ P(E) ≤ 1"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(E) = 0: Impossible event"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(E) = 1: Certain event"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complement of an Event:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(Not E) = 1 - P(E)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Addition Rule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For mutually exclusive events:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "P(A ∪ B) = P(A) + P(B)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiplication Rule (Independent Events):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(A ∩ B) = P(A) × P(B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conditional Probability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P(A|B) = P(A ∩ B) / P(B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Value:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E(X) = Σ xi × P(xi)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-coin-problems",
      children: "6. Coin Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For tossing\ncoins:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total outcomes = 2^n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of ways to get exactly\rheads = C(n, r)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(exactly r heads) = C(n, r) / 2^n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-dice-problems",
      children: "7. Dice Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For rolling\ndice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total outcomes = 6^n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two Dice Sum Probabilities:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Combinations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2),(2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/36 = 1/18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,3),(2,2),(3,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/36 = 1/12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,4),(2,3),(3,2),(4,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/36 = 1/9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,5),(2,4),(3,3),(4,2),(5,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6/36 = 1/6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,6),(3,5),(4,4),(5,3),(6,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,6),(4,5),(5,4),(6,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/36 = 1/9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4,6),(5,5),(6,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/36 = 1/12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5,6),(6,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/36 = 1/18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/36"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-card-problems-standard-52-card-deck",
      children: "8. Card Problems (Standard 52-Card Deck)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 suits: Spades, Hearts, Diamonds, Clubs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "13 cards per suit: A, 2-10, J, Q, K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "26 red cards (Hearts + Diamonds), 26 black cards (Spades + Clubs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "12 face cards (J, Q, K in each of 4 suits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 aces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Probabilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(drawing a king) = 4/52 = 1/13"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(drawing a heart) = 13/52 = 1/4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(drawing a face card) = 12/52 = 3/13"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-ball-problems",
      children: "9. Ball Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drawing balls from a bag without replacement uses combinations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula for probability of drawing specific type from a mixed bag:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If bag has \u0007 red and \b blue balls, probability of picking exactly\rred in\ndraws (without replacement):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P = C(a, r) × C(b, n-r) / C(a+b, n)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-permutation-vs-combination-decision-tree",
      children: "Mermaid Diagram: Permutation vs Combination Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart TD     A[\"Counting Problem\"] --> B{\"Does order matter?\"}     B -->|\"Yes\"| C[\"Permutation\"]     B -->|\"No\"| D[\"Combination\"]     C --> E[\"P(n,r) = n!/(n-r)!\"]     D --> F[\"C(n,r) = n!/(r!(n-r)!)\"]     E --> G[\"Answer\"]     F --> G "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-probability-problem-solving-flow",
      children: "Mermaid Diagram: Probability Problem-Solving Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart TD     A[\"Probability Problem\"] --> B[\"Define sample space S\"]     B --> C[\"Define event E\"]     C --> D[\"Count favourable outcomes\"]     D --> E[\"Count total outcomes\"]     E --> F[\"P(E) = Favourable / Total\"]     F --> G[\"Express as fraction or decimal\"] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-types-of-probability-problems",
      children: "Mermaid Diagram: Types of Probability Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[\"Probability\"] --> B[\"Coin toss\"]     A --> C[\"Dice roll\"]     A --> D[\"Card draw\"]     A --> E[\"Ball pick\"]     A --> F[\"Combined events\"]     B --> G[\"2^n outcomes\"]     C --> H[\"6^n outcomes\"]     D --> I[\"52 cards\"]     E --> J[\"Combinations\"]     F --> K[\"Addition/Multiplication rules\"] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-fundamental-counting-principle",
      children: "Example 1: Fundamental Counting Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First digit: 5 choices (1-5)\nSecond digit: 4 choices (remaining digits)\nThird digit: 3 choices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total = 5 × 4 × 3 = 60 numbers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-permutation",
      children: "Example 2: Permutation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " In how many ways can 6 books be arranged on a shelf?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6 distinct books can be arranged in 6! ways.\n6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 ways"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-permutation-with-selection",
      children: "Example 3: Permutation with Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " How many 4-letter words (with or without meaning) can be formed from the letters of the word \"COMPUTER\" without repetition?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Number of letters in COMPUTER = 8\nWe need to select and arrange 4 letters out of 8."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(8, 4) = 8! / (8-4)! = 8! / 4!\n= (8 × 7 × 6 × 5 × 4!) / 4!\n= 8 × 7 × 6 × 5\n= 1680 words"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-combination",
      children: "Example 4: Combination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " In how many ways can a committee of 3 students be selected from a class of 15 students?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C(15, 3) = 15! / (3! × 12!)\n= (15 × 14 × 13) / (3 × 2 × 1)\n= 2730 / 6\n= 455 ways"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-coin-probability",
      children: "Example 5: Coin Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Two unbiased coins are tossed simultaneously. Find the probability of getting exactly one head."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total outcomes when tossing 2 coins: {HH, HT, TH, TT} = 4\nFavourable outcomes (exactly one head): {HT, TH} = 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(exactly one head) = 2/4 = 1/2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-dice-probability",
      children: "Example 6: Dice Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Two dice are rolled. Find the probability that the sum of the numbers is 7."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total outcomes = 6 × 6 = 36\nFavourable outcomes (sum = 7): (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(sum = 7) = 6/36 = 1/6"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-card-probability",
      children: "Example 7: Card Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " One card is drawn from a well-shuffled pack of 52 cards. Find the probability that it is either a king or a queen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total cards = 52\nNumber of kings = 4\nNumber of queens = 4\nKings and queens are mutually exclusive, so:\nP(King or Queen) = 4/52 + 4/52 = 8/52 = 2/13"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-8-ball-probability",
      children: "Example 8: Ball Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " A bag contains 5 red balls and 7 blue balls. Two balls are drawn at random without replacement. Find the probability that both are red."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total balls = 5 + 7 = 12\nTotal ways to choose 2 balls = C(12, 2) = 66\nWays to choose 2 red balls = C(5, 2) = 10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(both red) = 10/66 = 5/33"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-9-permutation-with-identical-objects",
      children: "Example 9: Permutation with Identical Objects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " How many distinct arrangements can be made from the letters of the word \"MISSISSIPPI\"?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total letters = 11\nM = 1, I = 4, S = 4, P = 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Number of arrangements = 11! / (4! × 4! × 2!)\n= 39916800 / (24 × 24 × 2)\n= 39916800 / 1152\n= 34650 arrangements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-10-addition-theorem",
      children: "Example 10: Addition Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " The probability that A solves a problem is 0.7 and the probability that B solves it is 0.5. If the probability that both solve it is 0.35, find the probability that at least one solves it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n= 0.7 + 0.5 - 0.35\n= 0.85"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-11-conditional-probability",
      children: "Example 11: Conditional Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Two dice are rolled. Given that the sum is greater than 8, find the probability that the sum is 10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total outcomes for sum > 8:\nSum 9: (3,6),(4,5),(5,4),(6,3) = 4\nSum 10: (4,6),(5,5),(6,4) = 3\nSum 11: (5,6),(6,5) = 2\nSum 12: (6,6) = 1\nTotal outcomes with sum > 8 = 4 + 3 + 2 + 1 = 10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(sum = 10 | sum > 8) = P(sum=10 AND sum>8) / P(sum>8)\n= (3/36) / (10/36)\n= 3/10"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-12-selection-with-constraints",
      children: "Example 12: Selection with Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " A committee of 5 is to be formed from 6 men and 4 women. In how many ways can it be done if the committee must have at least 3 women?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Case 1: 3 women, 2 men = C(4,3) × C(6,2) = 4 × 15 = 60\nCase 2: 4 women, 1 man = C(4,4) × C(6,1) = 1 × 6 = 6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total = 60 + 6 = 66 ways"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-13-ibps-so-level--probability-with-cards",
      children: "Example 13: IBPS SO Level — Probability with Cards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " From a well-shuffled pack of 52 cards, 2 cards are drawn at random. Find the probability that both are aces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total ways to draw 2 cards = C(52, 2) = 1326\nWays to draw 2 aces = C(4, 2) = 6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(both aces) = 6/1326 = 1/221"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-14-ibps-so-level--permutation-with-constraints",
      children: "Example 14: IBPS SO Level — Permutation with Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " How many 4-digit numbers can be formed using the digits 0, 1, 2, 3, 4, 5 without repetition if the number must be even?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For an even number, the last digit must be 0, 2, or 4."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Case 1: Last digit = 0\nFirst digit: 5 choices (1,2,3,4,5)\nSecond digit: 4 choices\nThird digit: 3 choices\nTotal for Case 1 = 5 × 4 × 3 = 60"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Case 2: Last digit = 2\nFirst digit: 4 choices (cannot be 0 or 2)\nSecond digit: 4 choices (remaining including 0)\nThird digit: 3 choices\nTotal for Case 2 = 4 × 4 × 3 = 48"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Case 3: Last digit = 4 (same as Case 2)\nTotal for Case 3 = 48"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total even numbers = 60 + 48 + 48 = 156"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-15-expected-value",
      children: "Example 15: Expected Value"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " In a game, a player tosses a fair coin. If it shows heads, he wins ₹10; if tails, he loses ₹5. Find his expected gain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(Heads) = 1/2, Gain = ₹10\nP(Tails) = 1/2, Gain = -₹5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected Value = (1/2 × 10) + (1/2 × (-5))\n= 5 - 2.5\n= ₹2.5"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shortcut-methods",
      children: "Shortcut Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-1-permutation-vs-combination",
      children: "Shortcut 1: Permutation vs Combination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ask: \"Does swapping two items give a different result?\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yes → Permutation (order matters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No → Combination (order does not matter)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-2-simplifying-pnr-and-cnr",
      children: "Shortcut 2: Simplifying P(n,r) and C(n,r)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For P(n,r): multiply n, n-1, n-2, ... for r terms (don't expand factorials fully)\nFor C(n,r): use the formula C(n,r) = C(n, n-r) — choose the smaller r for easier computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-3-sum-of-two-dice",
      children: "Shortcut 3: Sum of Two Dice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memorise: sum of 7 is the most probable (6/36 = 1/6)\nThe probabilities are symmetric around 7."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-4-card-probabilities",
      children: "Shortcut 4: Card Probabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(face card) = 3/13, P(ace) = 1/13, P(heart) = 1/4\nThese are the most commonly tested card probabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-5-at-least-one-probability",
      children: "Shortcut 5: \"At Least One\" Probability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P(at least one) = 1 - P(none)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is especially useful for coin tosses and dice rolls."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-6-ball-problems",
      children: "Shortcut 6: Ball Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always use combinations for \"drawn without replacement\" problems.\nThe formula C(a, r) × C(b, n-r) / C(a+b, n) is the key."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-7-arrangements-with-constraints",
      children: "Shortcut 7: Arrangements with Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For arrangements where certain items must be together, treat them as a single unit and arrange internally.\nFor arrangements where certain items must NOT be together, find total arrangements and subtract those where they ARE together."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-8-digit-sum-and-selection",
      children: "Shortcut 8: Digit Sum and Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For number formation problems, always consider cases based on the constraint (even/odd/divisible by 5)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-9-independent-events",
      children: "Shortcut 9: Independent Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If events are independent, multiply probabilities: P(A and B) = P(A) × P(B)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortcut-10-mutually-exclusive-events",
      children: "Shortcut 10: Mutually Exclusive Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If events cannot happen simultaneously (mutually exclusive), add probabilities: P(A or B) = P(A) + P(B)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-coin-toss-probabilities",
      children: "Mermaid Diagram: Coin Toss Probabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart TD     A[\"Toss n coins\"] --> B[\"Total = 2^n\"]     B --> C[\"P(exactly r heads) = C(n,r)/2^n\"]     C --> D[\"P(at least 1 head) = 1 - 1/2^n\"]     D --> E[\"P(at most 1 head) = (1 + n)/2^n\"] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-permutation-combination--probability-calculator",
      children: "TypeScript Implementation: Permutation, Combination & Probability Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// pnc-probability.ts — Permutation, Combination & Probability tools\n\nclass Factorial {\n  static compute(n: number): number {\n    if (n < 0) throw new Error(\"Negative factorial undefined\");\n    if (n <= 1) return 1;\n    let result = 1;\n    for (let i = 2; i <= n; i++) result *= i;\n    return result;\n  }\n\n  static memoized: Record<number, number> = { 0: 1, 1: 1 };\n  static computeMemo(n: number): number {\n    if (this.memoized[n] !== undefined) return this.memoized[n];\n    this.memoized[n] = n * this.computeMemo(n - 1);\n    return this.memoized[n];\n  }\n}\n\nclass PermutationCalculator {\n  static permutation(n: number, r: number): number {\n    if (r > n) return 0;\n    let result = 1;\n    for (let i = n; i > n - r; i--) result *= i;\n    return result;\n  }\n\n  static circular(n: number): number {\n    return Factorial.compute(n - 1);\n  }\n\n  static withRepetition(n: number, r: number): number {\n    return Math.pow(n, r);\n  }\n\n  static withIdentical(n: number, groups: number[]): number {\n    let result = Factorial.compute(n);\n    for (const g of groups) result /= Factorial.compute(g);\n    return result;\n  }\n\n  static arrangementsWithConstraint(\n    total: number,\n    togetherCount: number\n  ): number {\n    // Treat 'togetherCount' items as a single unit\n    const units = total - togetherCount + 1;\n    return Factorial.compute(units) * Factorial.compute(togetherCount);\n  }\n}\n\nclass CombinationCalculator {\n  static combination(n: number, r: number): number {\n    if (r > n) return 0;\n    if (r === 0 || r === n) return 1;\n    if (r > n - r) r = n - r; // Use smaller r for efficiency\n    let result = 1;\n    for (let i = 1; i <= r; i++) {\n      result = (result * (n - i + 1)) / i;\n    }\n    return result;\n  }\n\n  static selectionWithConstraint(\n    typeA: number,\n    typeB: number,\n    selectA: number,\n    selectB: number\n  ): number {\n    return (\n      this.combination(typeA, selectA) * this.combination(typeB, selectB)\n    );\n  }\n\n  static atLeast(\n    totalA: number,\n    totalB: number,\n    select: number,\n    minA: number\n  ): number {\n    let total = 0;\n    for (let a = minA; a <= Math.min(totalA, select); a++) {\n      const b = select - a;\n      if (b >= 0 && b <= totalB) {\n        total += this.combination(totalA, a) * this.combination(totalB, b);\n      }\n    }\n    return total;\n  }\n}\n\nclass ProbabilityCalculator {\n  static coinToss(n: number, heads: number): number {\n    return CombinationCalculator.combination(n, heads) / Math.pow(2, n);\n  }\n\n  static atLeastOneCoin(n: number): number {\n    return 1 - 1 / Math.pow(2, n);\n  }\n\n  static diceSum(nDice: number, targetSum: number): number {\n    // Counts favourable outcomes for 2 dice\n    if (nDice === 2) {\n      if (targetSum < 2 || targetSum > 12) return 0;\n      const count = 6 - Math.abs(targetSum - 7);\n      return count / 36;\n    }\n    return 0; // Simplified for 2 dice only\n  }\n\n  static cardDraw(\n    totalCards: number,\n    specificCards: number,\n    draw: number,\n    desired: number\n  ): number {\n    const favourable = CombinationCalculator.combination(specificCards, desired) *\n      CombinationCalculator.combination(totalCards - specificCards, draw - desired);\n    const total = CombinationCalculator.combination(totalCards, draw);\n    return favourable / total;\n  }\n\n  static ballPick(\n    red: number,\n    blue: number,\n    draw: number,\n    desiredRed: number\n  ): number {\n    const favourable =\n      CombinationCalculator.combination(red, desiredRed) *\n      CombinationCalculator.combination(blue, draw - desiredRed);\n    const total = CombinationCalculator.combination(red + blue, draw);\n    return favourable / total;\n  }\n\n  static atLeastOne(\n    total: number,\n    defective: number,\n    draw: number\n  ): number {\n    return 1 - this.cardDraw(total, total - defective, draw, draw);\n  }\n\n  static conditionalProbability(\n    probAandB: number,\n    probB: number\n  ): number {\n    return probAandB / probB;\n  }\n\n  static expectedValue(\n    outcomes: { value: number; probability: number }[]\n  ): number {\n    return outcomes.reduce((sum, o) => sum + o.value * o.probability, 0);\n  }\n}\n\n// Example usage\nconsole.log(`P(10,3) = ${PermutationCalculator.permutation(10, 3)}`);\nconsole.log(`C(10,3) = ${CombinationCalculator.combination(10, 3)}`);\nconsole.log(`C(15,3) = ${CombinationCalculator.combination(15, 3)}`);\n\n// Probability examples\nconsole.log(`P(2 heads in 3 tosses) = ${ProbabilityCalculator.coinToss(3, 2)}`);\nconsole.log(`P(sum 7 with 2 dice) = ${ProbabilityCalculator.diceSum(2, 7)}`);\n\n// Card probability: drawing 2 aces from 52\nconsole.log(`P(both aces) = ${ProbabilityCalculator.cardDraw(52, 4, 2, 2)}`);\n\n// Ball probability: 2 red from 5 red + 7 blue\nconsole.log(`P(2 red from 5R+7B) = ${ProbabilityCalculator.ballPick(5, 7, 2, 2)}`);\n\n// At least one head in 3 tosses\nconsole.log(`P(at least 1 head in 3) = ${ProbabilityCalculator.atLeastOneCoin(3)}`);\n\n// \"MISSISSIPPI\" arrangements\nconst arrangements = PermutationCalculator.withIdentical(11, [1, 4, 4, 2]);\nconsole.log(`MISSISSIPPI arrangements: ${arrangements}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-solved-examples-20-mcqs",
      children: "📝 Solved Examples (20 MCQs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-1-permutation--combination-questions-18",
      children: "Set 1: Permutation & Combination (Questions 1–8)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 1:"
      }), " How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6 without repetition?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** Number of arrangements = P(n,r) = n!/(n−r)!\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "P(6,4) = 6 × 5 × 4 × 3 = 360 numbers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 360"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 2:"
      }), " In how many ways can 7 books be arranged on a shelf?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** n distinct objects can be arranged in n! ways.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "7! = 5040 ways"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 5040"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 3:"
      }), " How many distinct arrangements can be made from the word \"BANANA\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** n!/(p! × q! × r!) where p,q,r are counts of identical items.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "B = 1, A = 3, N = 2, total = 6\nArrangements = 6!/(3! × 2!) = 720/(6 × 2) = 720/12 = 60"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 60"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 4:"
      }), " A committee of 5 is to be formed from 8 men and 4 women. In how many ways can it be done if the committee must have exactly 3 men?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** C(men, selected) × C(women, selected)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Select 3 men from 8: C(8,3) = 56\nSelect 2 women from 4: C(4,2) = 6\nTotal = 56 × 6 = 336 ways"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 336"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 5:"
      }), " How many 4-digit numbers divisible by 5 can be formed from digits 0-9 without repetition?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** Numbers divisible by 5 end in 0 or 5. Consider cases.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Case 1 (last digit = 0): First digit: 9 choices (1-9), 2nd: 8, 3rd: 7 → 9×8×7 = 504\nCase 2 (last digit = 5): First digit: 8 choices (1-9 except 5), 2nd: 8, 3rd: 7 → 8×8×7 = 448\nTotal = 504 + 448 = 952"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 952"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 6:"
      }), " In how many ways can 6 people be seated around a circular table?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** Circular arrangements = (n−1)!\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "(6−1)! = 5! = 120 ways"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 120"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 7:"
      }), " A box contains 5 red, 3 blue, and 2 green balls. In how many ways can 3 balls be selected such that at least one is red?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** Total selections − selections with no red = C(10,3) − C(5,3)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Total = C(10,3) = 120\nNo red = C(5,3) = 10 (selecting 3 from 5 non-red)\nAt least one red = 120 − 10 = 110"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 110 ways"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 8:"
      }), " How many 6-digit numbers can be formed using the digits 1, 1, 2, 2, 2, 3?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** n!/(p! × q! × r!)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Total = 6 digits: 1 appears 2 times, 2 appears 3 times, 3 appears 1 time\nArrangements = 6!/(2! × 3! × 1!) = 720/(2 × 6 × 1) = 720/12 = 60"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 60"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-2-probability-questions-920",
      children: "Set 2: Probability (Questions 9–20)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 9:"
      }), " A coin is tossed 5 times. Find the probability of getting exactly 3 heads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P(r heads in n tosses) = C(n,r)/2^n\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Total outcomes = 2⁵ = 32\nFavourable = C(5,3) = 10\nP = 10/32 = 5/16"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 5/16"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 10:"
      }), " Two dice are rolled. Find the probability that the sum is a multiple of 3."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** Count favourable pairs and divide by 36.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Total outcomes = 36\nSum = 3: (1,2),(2,1) = 2\nSum = 6: (1,5),(2,4),(3,3),(4,2),(5,1) = 5\nSum = 9: (3,6),(4,5),(5,4),(6,3) = 4\nSum = 12: (6,6) = 1\nTotal favourable = 2 + 5 + 4 + 1 = 12\nP = 12/36 = 1/3"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 1/3"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 11:"
      }), " From a pack of 52 cards, one card is drawn. Find the probability that it is a red face card."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P = Number of favourable / Total cards\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Red cards = 26 (Hearts + Diamonds)\nFace cards (J,Q,K) in red suits = 3 × 2 = 6\nP = 6/52 = 3/26"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 3/26"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 12:"
      }), " A bag contains 4 red and 6 black balls. Two balls are drawn at random. Find the probability that both are of the same colour."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P(both red) + P(both black)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Total = C(10,2) = 45\nBoth red = C(4,2) = 6\nBoth black = C(6,2) = 15\nP = (6+15)/45 = 21/45 = 7/15"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 7/15"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 13:"
      }), " Three cards are drawn from a well-shuffled pack of 52 cards. Find the probability that all three are kings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P = C(4,3)/C(52,3)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "C(4,3) = 4\nC(52,3) = 22100\nP = 4/22100 = 1/5525"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 1/5525"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 14:"
      }), " Find the probability that a leap year has 53 Sundays."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** A leap year has 366 days = 52 weeks + 2 days. These 2 days can be any of 7 pairs.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Extra days: (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun) = 7 possibilities\nFavourable (contains Sunday): (Sun,Mon), (Sat,Sun) = 2\nP = 2/7"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 2/7"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 15:"
      }), " A box contains 10 bulbs, 3 of which are defective. Two bulbs are drawn at random. Find the probability that at least one is defective."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P(at least 1) = 1 − P(none defective)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "P(none defective) = C(7,2)/C(10,2) = 21/45 = 7/15\nP(at least 1 defective) = 1 − 7/15 = 8/15"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 8/15"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 16:"
      }), " If P(A) = 0.6, P(B) = 0.4, and P(A∩B) = 0.2, find P(A∪B)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P(A∪B) = P(A) + P(B) − P(A∩B)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "P(A∪B) = 0.6 + 0.4 − 0.2 = 0.8"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 0.8"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 17:"
      }), " Two cards are drawn without replacement. Find the probability that the first is a king and the second is a queen."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P(king then queen) = P(king) × P(queen after king)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "P(1st king) = 4/52\nP(2nd queen | 1st king) = 4/51\nP = (4/52) × (4/51) = 16/2652 = 4/663"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 4/663"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 18:"
      }), " A die is rolled twice. Find the probability that the sum is greater than 8."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** Count favourable pairs with sum > 8.\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Total = 36\nSum 9: (3,6),(4,5),(5,4),(6,3) = 4\nSum 10: (4,6),(5,5),(6,4) = 3\nSum 11: (5,6),(6,5) = 2\nSum 12: (6,6) = 1\nFavourable = 4 + 3 + 2 + 1 = 10\nP = 10/36 = 5/18"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 5/18"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 19:"
      }), " In a lottery, there are 10 tickets numbered 1 to 10. Two tickets are drawn. Find the probability that both numbers are even."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P = C(even numbers, 2)/C(10,2)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Even numbers from 1 to 10: 2, 4, 6, 8, 10 = 5\nC(5,2) = 10\nC(10,2) = 45\nP = 10/45 = 2/9"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 2/9"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 20:"
      }), " A speaks the truth in 75% of cases and B in 80% of cases. Find the probability that they contradict each other when narrating the same event."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer & Solution"
      }), "\n**Formula:** P(contradiction) = P(A true, B false) + P(A false, B true)\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "P(A true) = 0.75, P(A false) = 0.25\nP(B true) = 0.80, P(B false) = 0.20\nP(contradiction) = (0.75 × 0.20) + (0.25 × 0.80) = 0.15 + 0.20 = 0.35"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " 0.35"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-exercise-bank-30-questions",
      children: "📖 Exercise Bank (30 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permutation--combination-112",
      children: "Permutation & Combination (1–12)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " How many 3-digit numbers can be formed from digits 2, 3, 4, 5, 6, 7 without repetition?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " In how many ways can the letters of \"MATHEMATICS\" be arranged?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " How many ways to select a committee of 4 from 10 people?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " A team of 5 is to be selected from 6 boys and 4 girls. How many ways if exactly 2 girls?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " How many ways can 5 men and 3 women sit in a row if no two women sit together?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "6."
      }), " How many 4-letter words can be formed from \"PERMUTATION\" without repetition?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "7."
      }), " In how many ways can 8 beads be arranged to form a necklace?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "8."
      }), " How many diagonals does a decagon (10 sides) have?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9."
      }), " From 7 consonants and 5 vowels, how many 4-letter words can be formed with 3 consonants and 1 vowel?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10."
      }), " In how many ways can 12 students be divided into 2 equal groups?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "11."
      }), " How many 5-digit numbers can be formed from 0-9 without repetition that are greater than 50,000?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "12."
      }), " How many ways to select 3 cards from a deck such that exactly 2 are face cards?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "probability-1330",
      children: "Probability (13–30)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "13."
      }), " A coin is tossed 6 times. Find P(exactly 4 heads).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "14."
      }), " Two dice are rolled. Find P(sum is prime).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "15."
      }), " From a pack of 52, one card is drawn. Find P(king or heart).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "16."
      }), " A bag has 5 white, 4 red, 3 black balls. 3 balls drawn. Find P(all different colours).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "17."
      }), " Find P(getting a total of at least 10 in a single throw of two dice).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "18."
      }), " A card is drawn from a pack. Find P(red or ace).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "19."
      }), " 4 coins are tossed. Find P(at least 2 heads).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20."
      }), " A problem is given to 3 students. P(A solves)=0.5, P(B solves)=0.6, P(C solves)=0.7. Find P(at least one solves).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "21."
      }), " A box has 15 tickets numbered 1-15. One is drawn. Find P(multiple of 3 or 5).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "22."
      }), " Two cards are drawn without replacement. Find P(both are face cards).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "23."
      }), " A die is rolled twice. Find P(sum is odd and greater than 7).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "24."
      }), " In a family of 3 children, find P(at least one girl).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "25."
      }), " P(A)=0.4, P(B)=0.5, P(A∩B)=0.1. Find P(A'∩B').\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "26."
      }), " From a deck, 3 cards are drawn. Find P(at least one king).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "27."
      }), " A bag contains 8 red and 4 green balls. 3 balls drawn. Find P(at least 2 red).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "28."
      }), " P(A)=0.6, P(B)=0.3. If A and B are independent, find P(A∪B).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "29."
      }), " Two dice rolled. Find P(sum of 5 given sum is less than 7).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "30."
      }), " In a group of 10, 4 speak Hindi, 8 speak English, and 2 speak both. One is selected at random. Find P(speaks at least one language)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(6,3) = 120"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "11!/(2!×2!×2!) = 4989600"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(10,4) = 210"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(4,2)×C(6,3) = 6×20 = 120"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5! × P(6,3) = 120 × 120 = 14400"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(11,4) = 7920"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(8−1)!/2 = 2520 (necklace can be flipped)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(10,2) − 10 = 45 − 10 = 35"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(7,3)×C(5,1)×4! = 35×5×24 = 4200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(12,6)/2! = 462"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First digit 5-9: 5 choices; remaining: P(9,4) = 3024; Total = 5×3024 = 15120"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(12,2)×C(40,1) = 66×40 = 2640"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(6,4)/64 = 15/64"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prime sums: 2(1),3(2),5(4),7(6),11(2) = 15; P = 15/36 = 5/12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(K) + P(H) − P(K∩H) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(5×4×3×3!)/C(12,3)... Actually: C(5,1)×C(4,1)×C(3,1)/C(12,3) = 60/220 = 3/11"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum≥10: (4,6),(5,5),(5,6),(6,4),(6,5),(6,6) = 6; P = 6/36 = 1/6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(R) + P(A) − P(R∩A) = 26/52 + 4/52 − 2/52 = 28/52 = 7/13"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 − P(0H) − P(1H) = 1 − 1/16 − 4/16 = 11/16"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 − (0.5×0.4×0.3) = 1 − 0.06 = 0.94"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiples of 3: 3,6,9,12,15 = 5; of 5: 5,10,15 = 3; both: 15 = 1; P = (5+3−1)/15 = 7/15"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(12,2)/C(52,2) = 66/1326 = 11/221"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Odd>7 sums: 9(4: odd), 11(2: odd) = 6; P = 6/36 = 1/6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 − P(3 boys) = 1 − 1/8 = 7/8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(A'∩B') = 1 − P(A∪B) = 1 − (0.4+0.5−0.1) = 1 − 0.8 = 0.2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 − C(48,3)/C(52,3) = 1 − 17296/22100 = 4804/22100 ≈ 0.217"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(2R) + P(3R) = [C(8,2)×C(4,1) + C(8,3)]/C(12,3) = (112+56)/220 = 168/220 = 42/55"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(A∪B) = 0.6 + 0.3 − (0.6×0.3) = 0.9 − 0.18 = 0.72"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum<7: sums 2-6: (1+2+3+4+5) = 15. Sum=5 given sum<7: (1,4),(2,3),(3,2),(4,1) = 4; P = 4/15"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(H∪E) = (4+8−2)/10 = 10/10 = 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-permutation-vs-combination--decision-flow",
      children: "Mermaid Diagram: Permutation vs Combination — Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"Counting Problem\"] --> B{\"Does order matter?\"}\n    B -->|\"Yes\"| C[\"Permutation\"]\n    B -->|\"No\"| D[\"Combination\"]\n    C --> E{\"Identical objects?\"}\n    E -->|\"No\"| F[\"P(n,r) = n!/(n−r)!\"]\n    E -->|\"Yes\"| G[\"n!/(p!×q!×r!)\"]\n    D --> H{\"Select all?\"}\n    H -->|\"No\"| I[\"C(n,r) = n!/(r!(n−r)!)\"]\n    H -->|\"Yes\"| J[\"Only 1 way\"]\n    F --> K[\"Answer\"]\n    G --> K\n    I --> K\n    J --> K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-probability--at-least-one-strategy",
      children: "Mermaid Diagram: Probability — \"At Least One\" Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"P(at least one)\"] --> B[\"Find P(none)\"]\n    B --> C[\"Subtract from 1\"]\n    C --> D[\"Answer\"]\n    A --> E{\"Direct approach?\"}\n    E -->|\"Small cases\"| F[\"Sum of all favourable cases\"]\n    E -->|\"Large cases\"| B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-card-probability--deck-structure",
      children: "Mermaid Diagram: Card Probability — Deck Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"52 Cards\"] --> B[\"4 Suits\"]\n    B --> C[\"Spades (13) — Black\"]\n    B --> D[\"Hearts (13) — Red\"]\n    B --> E[\"Diamonds (13) — Red\"]\n    B --> F[\"Clubs (13) — Black\"]\n    A --> G[\"Face Cards: 12 (J, Q, K × 4)\"]\n    A --> H[\"Number Cards: 36 (2-10 × 4)\"]\n    A --> I[\"Aces: 4\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "formula-reference-table",
      children: "Formula Reference Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(n,r) = n!/(n−r)!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(n,r) = n!/(r!(n−r)!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order doesn't matter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identical objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n!/(p!×q!×r!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p,q,r are counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n−1)!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One position fixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin prob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(r heads) = C(n,r)/2^n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fair coin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dice prob (2 dice sum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count/36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum 7 is most likely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Card draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(desired)/C(total)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without replacement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ball draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(a,r)C(b,n−r)/C(a+b,n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypergeometric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "At least one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 − P(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complement method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independent events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A∩B) = P(A)×P(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Events don't affect each other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutually exclusive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A∪B) = P(A)+P(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Events can't occur together"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) = P(A∩B)/P(B)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagram-selection-with-constraints",
      children: "Mermaid Diagram: Selection with Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart TD     A[\"Select r items from n\"] --> B{\"Constraint?\"}     B -->|\"At least k of type A\"| C[\"Sum of cases with k, k+1, ...\"]     B -->|\"Exactly k of type A\"| D[\"C(a,k) × C(b,n-k)\"]     B -->|\"Specific item always included\"| E[\"C(n-1, r-1)\"]     B -->|\"Specific item never included\"| F[\"C(n-1, r)\"]     C --> G[\"Answer\"]     D --> G     E --> G     F --> G "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-1",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fundamental Counting Principle"
        }), " is the building block: multiply independent choices, add disjoint alternatives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permutation"
        }), " involves arrangement (order matters): P(n,r) = n!/(n-r)!"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combination"
        }), " involves selection (order does not matter): C(n,r) = n!/(r!(n-r)!)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability"
        }), " = Favourable outcomes / Total outcomes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coin tosses:"
        }), " 2^n total outcomes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dice rolls:"
        }), " 6^n total outcomes; sum of 7 is most probable for 2 dice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cards:"
        }), " 52 total; use combinations for multiple draws"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Balls:"
        }), " Use hypergeometric formula for draws without replacement"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For \"at least\" problems, use the complement: P(at least one) = 1 - P(none)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In IBPS SO, most probability problems involve 1-2 step calculations using combinations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Mistake"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply independent choices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to subtract restricted choices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(n,r) = n!/(n-r)!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using permutation when order doesn't matter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(n,r) = n!/(r!(n-r)!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using combination when order matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(r heads) = C(n,r)/2^n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting HT and TH as same outcome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dice Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum 7 is 6/36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thinking sums are equally likely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Card Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(4,1) for specific rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting cards are not replaced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ball Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(a,r)C(b,n-r)/C(a+b,n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using permutation instead of combination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "At least one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - P(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to use complement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1",
      children: "Question 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How many 3-digit numbers can be formed from digits 1-9 without repetition?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n9 × 8 × 7 = 504 numbers\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2",
      children: "Question 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A bag has 4 red and 6 blue balls. Two balls are drawn. Probability that both are blue?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nC(6,2)/C(10,2) = 15/45 = 1/3\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3",
      children: "Question 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the probability of getting at least one head when tossing 3 coins?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nP(at least one head) = 1 - P(no heads) = 1 - 1/8 = 7/8\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4",
      children: "Question 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A card is drawn from a pack of 52. Probability that it is a red king?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nRed kings = 2 (King of Hearts, King of Diamonds)\nP = 2/52 = 1/26\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5",
      children: "Question 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In how many ways can 4 boys and 3 girls be arranged in a row such that all girls sit together?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nTreat 3 girls as 1 unit: 5 items to arrange = 5! = 120\nGirls internally: 3! = 6\nTotal = 120 × 6 = 720 ways\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-beginner--counting",
      children: "Exercise 1 (Beginner — Counting)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How many 2-digit numbers can be formed from digits 0, 1, 2, 3, 4, 5 without repetition?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-beginner--permutation",
      children: "Exercise 2 (Beginner — Permutation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In how many ways can 5 people sit in a row of 5 chairs?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-beginner--combination",
      children: "Exercise 3 (Beginner — Combination)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From a group of 10 people, a committee of 4 is to be selected. In how many ways can this be done?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-intermediate--coin",
      children: "Exercise 4 (Intermediate — Coin)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three coins are tossed. Find the probability of getting exactly 2 heads."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-intermediate--dice",
      children: "Exercise 5 (Intermediate — Dice)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two dice are rolled. Find the probability that the sum is a prime number."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-intermediate--cards",
      children: "Exercise 6 (Intermediate — Cards)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From a pack of 52 cards, 2 cards are drawn. Find the probability of getting one king and one queen."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-advanced--ball",
      children: "Exercise 7 (Advanced — Ball)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A bag contains 5 white, 7 red, and 8 black balls. 3 balls are drawn. Find the probability that all are of the same colour."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-advanced--permutation-with-constraint",
      children: "Exercise 8 (Advanced — Permutation with Constraint)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How many 4-digit numbers divisible by 5 can be formed from digits 0-9 without repetition?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-ibps-so-level",
      children: "Exercise 9 (IBPS SO Level)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A committee of 5 is to be formed from 7 men and 5 women. In how many ways can this be done if the committee must have at least 2 women?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-ibps-so-level",
      children: "Exercise 10 (IBPS SO Level)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A box contains 10 bulbs, of which 3 are defective. Two bulbs are drawn at random. Find the probability that at least one is defective."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key (Exercises):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5 × 5 = 25 (first digit cannot be 0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5! = 120"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(10,4) = 210"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(3,2)/8 = 3/8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prime sums: 2,3,5,7,11 → count: 1+2+4+6+2 = 15. P = 15/36 = 5/12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C(4,1)×C(4,1))/C(52,2) = 16/1326 = 8/663"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C(5,3)+C(7,3)+C(8,3) / C(20,3) = (10+35+56)/1140 = 101/1140"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Last digit 0: 9×8×7 = 504; Last digit 5: 8×8×7 = 448; Total = 952"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Case 1: 2W+3M = C(5,2)×C(7,3) = 10×35 = 350; Case 2: 3W+2M = C(5,3)×C(7,2) = 10×21 = 210; Case 3: 4W+1M = C(5,4)×C(7,1) = 5×7 = 35; Case 4: 5W+0M = C(5,5)×C(7,0) = 1×1 = 1; Total = 596"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(at least 1 defective) = 1 - P(none defective) = 1 - C(7,2)/C(10,2) = 1 - 21/45 = 24/45 = 8/15"
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