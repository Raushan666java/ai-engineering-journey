"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35781],{

/***/ 16067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_09_dp_sequences_md_5c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-09-dp-sequences-md-5c3.json
const site_docs_courses_algorithms_09_dp_sequences_md_5c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/09-dp-sequences","title":"Chapter 9: Dynamic Programming — Sequences","description":"Prerequisites Dynamic Programming — Knapsack Problems — 2D DP tables, recurrence design | Next Dynamic Programming — Trees & Grids — DP on non-linear structures","source":"@site/docs/courses/algorithms/09-dp-sequences.md","sourceDirName":"courses/algorithms","slug":"/algorithms/09-dp-sequences","permalink":"/ai-engineering-journey/algorithms/09-dp-sequences","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-dp-sequences","slug":"/algorithms/09-dp-sequences","title":"Chapter 9: Dynamic Programming — Sequences","sidebar_label":"Chapter 9: Dynamic Programming — Sequences","sidebar_position":9},"sidebar":"course-algorithms","previous":{"title":"Chapter 8: Dynamic Programming — Knapsack Problems","permalink":"/ai-engineering-journey/algorithms/08-dp-knapsack"},"next":{"title":"Chapter 10: Trees, Grids & Dynamic Programming","permalink":"/ai-engineering-journey/algorithms/10-dp-trees-grids"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/09-dp-sequences.md


const frontMatter = {
	id: '09-dp-sequences',
	slug: '/algorithms/09-dp-sequences',
	title: 'Chapter 9: Dynamic Programming — Sequences',
	sidebar_label: 'Chapter 9: Dynamic Programming — Sequences',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Dynamic Programming — Sequences';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Sequence DP Matters",
  "id": "why-sequence-dp-matters",
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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "9.1 Longest Common Subsequence (LCS)",
  "id": "91-longest-common-subsequence-lcs",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis — With WHY",
  "id": "complexity-analysis--with-why",
  "level": 4
}, {
  "value": "Space Optimization",
  "id": "space-optimization",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "9.2 Longest Increasing Subsequence (LIS)",
  "id": "92-longest-increasing-subsequence-lis",
  "level": 3
}, {
  "value": "( O(n^2) ) DP Approach",
  "id": "-on2--dp-approach",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 5
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 5
}, {
  "value": "( O(n \\log n) ) — Patience Sorting",
  "id": "-on-log-n---patience-sorting",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 5
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 5
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis — With WHY",
  "id": "complexity-analysis--with-why-1",
  "level": 4
}, {
  "value": "Space Optimization",
  "id": "space-optimization-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "9.3 Edit Distance (Levenshtein Distance)",
  "id": "93-edit-distance-levenshtein-distance",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-3",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis — With WHY",
  "id": "complexity-analysis--with-why-2",
  "level": 4
}, {
  "value": "Space Optimization",
  "id": "space-optimization-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "9.4 Matrix Chain Multiplication",
  "id": "94-matrix-chain-multiplication",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-4",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-3",
  "level": 4
}, {
  "value": "Complexity Analysis — With WHY",
  "id": "complexity-analysis--with-why-3",
  "level": 4
}, {
  "value": "Space Optimization",
  "id": "space-optimization-3",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "9.5 Palindrome Partitioning",
  "id": "95-palindrome-partitioning",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-5",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-5",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-4",
  "level": 4
}, {
  "value": "Complexity Analysis — With WHY",
  "id": "complexity-analysis--with-why-4",
  "level": 4
}, {
  "value": "Space Optimization",
  "id": "space-optimization-4",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "Sequence DP Patterns",
  "id": "sequence-dp-patterns",
  "level": 2
}, {
  "value": "Pattern 1: Two-Sequence Comparison",
  "id": "pattern-1-two-sequence-comparison",
  "level": 3
}, {
  "value": "Pattern 2: Single-Sequence Partitioning",
  "id": "pattern-2-single-sequence-partitioning",
  "level": 3
}, {
  "value": "Pattern 3: Interval DP (Chain)",
  "id": "pattern-3-interval-dp-chain",
  "level": 3
}, {
  "value": "Pattern 4: Subsequence within a Single Sequence",
  "id": "pattern-4-subsequence-within-a-single-sequence",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "LIS in O(n log n) — The Patience Sorting Trick",
  "id": "lis-in-on-log-n--the-patience-sorting-trick",
  "level": 3
}, {
  "value": "Shortest Common Supersequence (SCS)",
  "id": "shortest-common-supersequence-scs",
  "level": 3
}, {
  "value": "Longest Palindromic Subsequence (LPS)",
  "id": "longest-palindromic-subsequence-lps",
  "level": 3
}, {
  "value": "Common Interview Question Table",
  "id": "common-interview-question-table",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Git Diff (Edit Distance Variant)",
  "id": "git-diff-edit-distance-variant",
  "level": 3
}, {
  "value": "Bioinformatics (LCS for DNA Alignment)",
  "id": "bioinformatics-lcs-for-dna-alignment",
  "level": 3
}, {
  "value": "Plagiarism Detection",
  "id": "plagiarism-detection",
  "level": 3
}, {
  "value": "Other Real-World Systems",
  "id": "other-real-world-systems",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
    h4: "h4",
    h5: "h5",
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
        id: "chapter-9-dynamic-programming--sequences",
        children: "Chapter 9: Dynamic Programming — Sequences"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/08-dp-knapsack",
          children: "Chapter 8: Dynamic Programming — Knapsack Problems"
        }), " — 2D DP tables, recurrence design | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/10-dp-trees-grids",
          children: "Chapter 10: Dynamic Programming — Trees & Grids"
        }), " — DP on non-linear structures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the longest common subsequence (LCS) and reconstruct the sequence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the longest increasing subsequence (LIS) in both ( O(n^2) ) and ( O(n \\log n) ) time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the edit distance (Levenshtein distance) between two strings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve matrix chain multiplication and palindrome partitioning using DP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-sequence-dp-matters",
      children: "Why Sequence DP Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence DP problems model real-world tasks where order matters. When a spell checker suggests \"receive\" instead of \"recieve\", it uses edit distance — the minimum characters to insert, delete, or replace. When GitHub highlights lines added and removed in a pull request, it runs LCS (longest common subsequence) under the hood. When biologists align two DNA strands to find evolutionary mutations, they use sequence alignment DP — the same recurrence as edit distance, generalized with scoring matrices."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without sequence DP, every comparison of two ordered sequences would require exponential brute force. The core insight — that the optimal solution for prefixes builds on optimal solutions for smaller prefixes — turns an ( O(3^{m+n}) ) problem into ( O(mn) )."
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
            children: "LCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] based on character match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D DP for comparing two sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can reduce to patience sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) via binary search on tails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min of insert/delete/replace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of spell checking and bioinformatics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parenthesization order affects cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] = min over all split points k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand from center or DP intervals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two approaches: O(n²) or O(n³)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Sequence DP] --> B[Two-Sequence LCS]\n    A --> C[Single-Sequence LIS]\n    A --> D[Edit Distance]\n    A --> E[Matrix Chain]\n    A --> F[Palindrome Partitioning]\n    B --> G[dp[i][j] match/mismatch]\n    C --> H[O(n log n) patience sort]\n    D --> I[insert/delete/replace ops]\n    E --> J[dp[i][j] = min over k]\n    F --> K[interval DP]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch09-dp-sequences.png",
        alt: "DP Sequences Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-longest-common-subsequence-lcs",
      children: "9.1 Longest Common Subsequence (LCS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings ( X ) and ( Y ), find the longest subsequence that appears in both. A subsequence is obtained by deleting characters (not necessarily contiguous)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Version control systems (git diff) compute the longest set of lines that remain unchanged between two file versions. The changed lines are everything else — insertions and deletions around the common core. Bioinformatics uses the same idea to compare DNA sequences: \"ACTG\" vs \"ACG\" shares the subsequence \"ACG\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a 2D DP table ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp"
        }), " of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(m+1) × (n+1)"
        }), " initialized to 0, where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m = len(X)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n = len(Y)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Loop ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " from 1 to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j"
        }), " from 1 to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X[i-1] == Y[j-1]"
            }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = dp[i-1][j-1] + 1"
            }), " (character matches, extend the subsequence)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Else, set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = max(dp[i-1][j], dp[i][j-1])"
            }), " (take the best from the row above or column left)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[m][n]"
        }), " as the length of the LCS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["To reconstruct the actual subsequence, trace back from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[m][n]"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X[i-1] == Y[j-1]"
            }), ", include this character and move diagonally to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(i-1, j-1)"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Else, move in the direction of the larger value (up if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i-1][j] > dp[i][j-1]"
            }), ", else left)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reverse the collected characters."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LCS(X, Y, m, n):\n    dp = 2D array of size (m+1) x (n+1), all 0\n    for i = 1 to m:\n        for j = 1 to n:\n            if X[i-1] == Y[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]\n\nRECONSTRUCT(X, Y, dp, m, n):\n    seq = empty list\n    i = m, j = n\n    while i > 0 and j > 0:\n        if X[i-1] == Y[j-1]:\n            seq.prepend(X[i-1])\n            i--, j--\n        else if dp[i-1][j] > dp[i][j-1]:\n            i--\n        else:\n            j--\n    return seq\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "X = \"ABCBDAB\" (m = 7), Y = \"BDCABA\" (n = 6)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial DP table"
      }), " (all zeros):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ø"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ø"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How each cell is computed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=1 (A), j=1 (B)"
        }), ": A≠B → dp[1][1] = max(0,0) = 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=1 (A), j=4 (A)"
        }), ": A=A → dp[1][4] = dp[0][3] + 1 = 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=2 (B), j=1 (B)"
        }), ": B=B → dp[2][1] = dp[1][0] + 1 = 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=2 (B), j=5 (B)"
        }), ": B=B → dp[2][5] = dp[1][4] + 1 = 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=4 (B), j=5 (B)"
        }), ": B=B → dp[4][5] = dp[3][4] + 1 = 3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=6 (A), j=4 (A)"
        }), ": A=A → dp[6][4] = dp[5][3] + 1 = 3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=6 (A), j=6 (A)"
        }), ": A=A → dp[6][6] = dp[5][5] + 1 = 4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=7 (B), j=5 (B)"
        }), ": B=B → dp[7][5] = dp[6][4] + 1 = 4"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconstruction traceback from (7,6):"
      }), "\ndp[7][6]=4 → (7,5): B≠A, dp[6][5]=3 < dp[7][6]=4 → j-- → (7,5): B=B → take 'B', i=6, j=4\ndp[6][4]=3 → (6,4): A=A → take 'A', i=5, j=3\ndp[5][3]=2 → (5,3): D≠C, dp[4][3]=1 < dp[5][3]=2 → j-- → (5,2): D≠B, dp[4][2]=1 < dp[5][2]=2 → j-- → (5,1): D≠B, dp[4][1]=1 = dp[5][1]=1 → j-- → (5,0): stop\nBacktrack from dp[4][1]: (4,1): B=B → take 'B', i=3, j=0 → stop"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LCS = \"BCAB\" (or alternatively \"BCBA\" through different equal choices — both length 4)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " There are multiple optimal LCS strings of length 4: \"BCAB\", \"BCBA\", \"BDAB\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <string>\n#include <vector>\n#include <algorithm>\n#include <iostream>\n\nstd::string lcs(const std::string& X, const std::string& Y) {\n    int m = static_cast<int>(X.size());\n    int n = static_cast<int>(Y.size());\n    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));\n    for (int i = 1; i <= m; ++i) {\n        for (int j = 1; j <= n; ++j) {\n            if (X[i-1] == Y[j-1])\n                dp[i][j] = dp[i-1][j-1] + 1;\n            else\n                dp[i][j] = std::max(dp[i-1][j], dp[i][j-1]);\n        }\n    }\n    std::string result;\n    int i = m, j = n;\n    while (i > 0 && j > 0) {\n        if (X[i-1] == Y[j-1]) {\n            result.push_back(X[i-1]);\n            --i; --j;\n        } else if (dp[i-1][j] > dp[i][j-1]) {\n            --i;\n        } else {\n            --j;\n        }\n    }\n    std::reverse(result.begin(), result.end());\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def lcs(X: str, Y: str) -> str:\n    m, n = len(X), len(Y)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if X[i - 1] == Y[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    i, j = m, n\n    result = []\n    while i > 0 and j > 0:\n        if X[i - 1] == Y[j - 1]:\n            result.append(X[i - 1])\n            i -= 1; j -= 1\n        elif dp[i - 1][j] > dp[i][j - 1]:\n            i -= 1\n        else:\n            j -= 1\n    return ''.join(reversed(result))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static String lcs(String X, String Y) {\n    int m = X.length(), n = Y.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (X.charAt(i - 1) == Y.charAt(j - 1))\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            else\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    StringBuilder sb = new StringBuilder();\n    int i = m, j = n;\n    while (i > 0 && j > 0) {\n        if (X.charAt(i - 1) == Y.charAt(j - 1)) {\n            sb.append(X.charAt(i - 1));\n            i--; j--;\n        } else if (dp[i - 1][j] > dp[i][j - 1]) {\n            i--;\n        } else {\n            j--;\n        }\n    }\n    return sb.reverse().toString();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis--with-why",
      children: "Complexity Analysis — With WHY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(mn)"
        }), " — Each of the (m+1)×(n+1) cells is computed exactly once with O(1) work per cell. This is optimal because the LCS problem has Ω(mn) possible prefix pairs to consider."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(mn)"
        }), " — The full 2D table stores (m+1)×(n+1) integers. Each cell depends on three neighbors (top, left, diagonal), so a full table is needed for reconstruction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why not faster?"
        }), " LCS is in the class of sequence alignment problems with a known Ω(mn) lower bound in the comparison model. No sub-quadratic algorithm exists for arbitrary alphabets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "space-optimization",
      children: "Space Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To compute only the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "length"
      }), " (not the subsequence), we only need two rows at a time because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j]"
      }), " depends only on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i-1][j]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j-1]"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i-1][j-1]"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LCS_LENGTH_OPT(X, Y, m, n):\n    prev = array of size n+1, all 0\n    for i = 1 to m:\n        curr = array of size n+1, all 0\n        for j = 1 to n:\n            if X[i-1] == Y[j-1]:\n                curr[j] = prev[j-1] + 1\n            else:\n                curr[j] = max(prev[j], curr[j-1])\n        prev = curr\n    return prev[n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time: O(mn), Space: O(n)"
      }), " — Only two rows of length n+1 are kept, reducing O(mn) space to O(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
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
            children: "Simple recurrence, easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn) space with full table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable row-by-row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot reconstruct sequence easily with space-optimized version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles arbitrary-length strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not efficient for very long strings (>10⁵ characters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for many variants (diff, alignment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only finds one optimal solution when multiple exist"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LCS Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LCS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"\", Y=\"ABC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One string empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"A\", Y=\"A\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"A\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single character match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"A\", Y=\"B\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single character mismatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"AAA\", Y=\"AA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"ABC\", Y=\"DEF\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No common characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"ABC\", Y=\"ABC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ABC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"ABC\", Y=\"CBA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"B\" or \"A\" or \"C\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversed string"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-longest-increasing-subsequence-lis",
      children: "9.2 Longest Increasing Subsequence (LIS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array ( A ), find the length of the longest strictly increasing subsequence. Elements need not be contiguous."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " In the card game patience (solitaire), you arrange cards into piles where each pile is decreasing. The number of piles equals the length of the LIS. In finance, LIS models the longest uptrend in a stock price — finding the maximum number of days the price can increase in sequence without requiring consecutive days."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-on2--dp-approach",
      children: "( O(n^2) ) DP Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the simpler, intuitive DP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i] = 1"
        }), " for all i (each element alone is a subsequence of length 1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " from 1 to n-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each ", (0,jsx_runtime.jsx)(_components.code, {
              children: "j"
            }), " from 0 to i-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "A[j] < A[i]"
                }), ", update ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dp[i] = max(dp[i], 1 + dp[j])"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max(dp)"
        }), " as the LIS length."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LIS_N2(A, n):\n    dp = array of size n, initialized to 1\n    for i = 1 to n-1:\n        for j = 0 to i-1:\n            if A[j] < A[i]:\n                dp[i] = max(dp[i], 1 + dp[j])\n    return max(dp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A = [10, 9, 2, 5, 3, 7, 101, 18]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[j] < A[i]?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i] before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i] after"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10<9? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0,1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10<2? No, 9<2? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0,1,2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10<5? No, 9<5? No, 2<5? Yes → dp[3]=max(1,1+dp[2])=max(1,2)=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0,1,2,3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10<3? No, 9<3? No, 2<3? Yes → dp[4]=max(1,1+1)=2, 5<3? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2<7 → dp[5]=max(1,1+1)=2, 5<7 → max(2,1+2)=3, 3<7 → max(3,1+2)=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7<101 → dp[6]=max(1,1+3)=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7<18 → max(1,1+3)=4, 101<18? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Final ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp = [1, 1, 1, 2, 2, 3, 4, 4]"
      }), ", LIS length = 4."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-on-log-n---patience-sorting",
      children: "( O(n \\log n) ) — Patience Sorting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintain an array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tails"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tails[k]"
      }), " is the smallest possible last element of an increasing subsequence of length ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k+1"
      }), ". The array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tails"
      }), " is always sorted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize an empty array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tails"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each element ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use binary search (", (0,jsx_runtime.jsx)(_components.code, {
              children: "lower_bound"
            }), ") to find the first position ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), " where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tails[i] >= x"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), " equals the length of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tails"
            }), ", append ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " (a new longer subsequence is possible)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Otherwise, replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tails[i]"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " (maintaining the smallest possible tail for this length)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "len(tails)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LIS_NLOGN(A, n):\n    tails = empty array\n    for x in A:\n        i = lower_bound(tails, x)\n        if i == len(tails):\n            tails.append(x)\n        else:\n            tails[i] = x\n    return len(tails)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A = [10, 9, 2, 5, 3, 7, 101, 18]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "binary search on tails"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "tails after"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[] → i=0 = len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "append 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([10], 9) → 0 < len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replace tails[0]=9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([9], 2) → 0 < len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replace tails[0]=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([2], 5) → 1 = len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "append 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([2,5], 3) → 1 < len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replace tails[1]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([2,3], 7) → 2 = len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "append 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3, 7]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([2,3,7], 101) → 3 = len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "append 101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3, 7, 101]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound([2,3,7,101], 18) → 3 < len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replace tails[3]=18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3, 7, 18]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LIS length = 4."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tails"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " the actual LIS sequence. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[2, 3, 7, 18]"
      }), " is not a subsequence of A. It represents the smallest possible tails for each length."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nint lisLength(const std::vector<int>& A) {\n    std::vector<int> tails;\n    for (int x : A) {\n        auto it = std::lower_bound(tails.begin(), tails.end(), x);\n        if (it == tails.end())\n            tails.push_back(x);\n        else\n            *it = x;\n    }\n    return static_cast<int>(tails.size());\n}\n\n// O(n^2) version — also reconstructs the subsequence\nstd::vector<int> lisSubsequence(const std::vector<int>& A) {\n    int n = static_cast<int>(A.size());\n    std::vector<int> dp(n, 1), prev(n, -1);\n    for (int i = 1; i < n; ++i) {\n        for (int j = 0; j < i; ++j) {\n            if (A[j] < A[i] && dp[j] + 1 > dp[i]) {\n                dp[i] = dp[j] + 1;\n                prev[i] = j;\n            }\n        }\n    }\n    int pos = static_cast<int>(std::max_element(dp.begin(), dp.end()) - dp.begin());\n    std::vector<int> result;\n    while (pos != -1) {\n        result.push_back(A[pos]);\n        pos = prev[pos];\n    }\n    std::reverse(result.begin(), result.end());\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import bisect\n\ndef lis_length(A):\n    tails = []\n    for x in A:\n        i = bisect.bisect_left(tails, x)\n        if i == len(tails):\n            tails.append(x)\n        else:\n            tails[i] = x\n    return len(tails)\n\ndef lis_subsequence(A):\n    n = len(A)\n    dp = [1] * n\n    prev = [-1] * n\n    for i in range(1, n):\n        for j in range(i):\n            if A[j] < A[i] and dp[j] + 1 > dp[i]:\n                dp[i] = dp[j] + 1\n                prev[i] = j\n    pos = max(range(n), key=lambda i: dp[i])\n    result = []\n    while pos != -1:\n        result.append(A[pos])\n        pos = prev[pos]\n    return list(reversed(result))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic static int lisLength(int[] A) {\n    List<Integer> tails = new ArrayList<>();\n    for (int x : A) {\n        int i = Collections.binarySearch(tails, x);\n        if (i < 0) i = -(i + 1);\n        if (i == tails.size())\n            tails.add(x);\n        else\n            tails.set(i, x);\n    }\n    return tails.size();\n}\n\npublic static List<Integer> lisSubsequence(int[] A) {\n    int n = A.length;\n    int[] dp = new int[n], prev = new int[n];\n    Arrays.fill(dp, 1);\n    Arrays.fill(prev, -1);\n    for (int i = 1; i < n; i++) {\n        for (int j = 0; j < i; j++) {\n            if (A[j] < A[i] && dp[j] + 1 > dp[i]) {\n                dp[i] = dp[j] + 1;\n                prev[i] = j;\n            }\n        }\n    }\n    int pos = 0;\n    for (int i = 1; i < n; i++)\n        if (dp[i] > dp[pos]) pos = i;\n    List<Integer> result = new ArrayList<>();\n    while (pos != -1) {\n        result.add(A[pos]);\n        pos = prev[pos];\n    }\n    Collections.reverse(result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis--with-why-1",
      children: "Complexity Analysis — With WHY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n²) time:"
        }), " For each of n elements, scan up to n previous elements — total O(n²) comparisons. A[0..i-1] must each be checked because LIS ending at i can extend any previous subsequence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n log n) time:"
        }), " Binary search on the tails array (size ≤ n) for each of n elements gives O(log n) per element. The tails array stays sorted by construction — each replacement preserves sorted order, enabling binary search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why binary search works:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tails"
        }), " is monotonically increasing (strictly, for strictly increasing subsequences). Every replacement either extends the array (keeping it sorted) or replaces a value that keeps it sorted. This is provable by induction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) for both versions — dp array or tails array."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "space-optimization-1",
      children: "Space Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The O(n²) DP naturally uses O(n) space (single dp array). No further optimization needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the O(n log n) approach, O(n) space is already optimal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
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
              children: "O(n²) DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, intuitive, easy to reconstruct subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for n > 10⁴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(n log n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, handles n up to 10⁶"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Harder to understand; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tails"
            }), " is not the actual subsequence"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle all input types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only find ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "strictly"
            }), " increasing; non-decreasing requires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "upper_bound"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LIS Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 5, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All equal (strictly increasing not satisfied)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3, 2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strictly decreasing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already sorted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 1, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 3, 6, 7, 9, 4, 10, 5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 3, 4, 5, 6] or [1, 3, 6, 7, 9, 10]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-edit-distance-levenshtein-distance",
      children: "9.3 Edit Distance (Levenshtein Distance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings ( X ) and ( Y ), find the minimum number of operations (insert, delete, replace) to transform ( X ) into ( Y )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Spell checkers suggest \"accommodate\" when you type \"acommodate\" — the edit distance is 1 (insert one 'c'). Autocorrect on smartphones uses edit distance to rank candidate corrections. In computational biology, the Needleman-Wunsch algorithm generalizes edit distance to align DNA sequences with affine gap penalties, enabling scientists to quantify evolutionary divergence between species."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a 2D DP table ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp"
        }), " of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(m+1) × (n+1)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize base cases:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][0] = i"
        }), " (cost to delete i characters from X), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[0][j] = j"
        }), " (cost to insert j characters into X)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Loop ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " from 1 to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j"
        }), " from 1 to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X[i-1] == Y[j-1]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = dp[i-1][j-1]"
            }), " (no operation needed)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Else, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "dp[i-1][j] + 1"
                }), " → delete X[i-1] (or equivalently insert into Y)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "dp[i][j-1] + 1"
                }), " → insert Y[j-1] into X"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "dp[i-1][j-1] + 1"
                }), " → replace X[i-1] with Y[j-1]"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[m][n]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EDIT_DISTANCE(X, Y, m, n):\n    dp = 2D array of size (m+1) x (n+1)\n    for i = 0 to m: dp[i][0] = i\n    for j = 0 to n: dp[0][j] = j\n    for i = 1 to m:\n        for j = 1 to n:\n            if X[i-1] == Y[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j],     // delete\n                                    dp[i][j-1],     // insert\n                                    dp[i-1][j-1])   // replace\n    return dp[m][n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "X = \"CAT\" (m = 3), Y = \"CAR\" (n = 3)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial DP table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ø"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ø"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Filling the table:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=1 (C), j=1 (C)"
        }), ": C=C → dp[1][1] = dp[0][0] = 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=1 (C), j=2 (A)"
        }), ": C≠A → min(dp[0][2]=2, dp[1][1]=0, dp[0][1]=1) + 1 = 1 (replace C→CA? Actually delete C and insert A: dp[1][2] = 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=1 (C), j=3 (R)"
        }), ": C≠R → min(dp[0][3]=3, dp[1][2]=1, dp[0][2]=2) + 1 = 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=2 (A), j=1 (C)"
        }), ": A≠C → min(dp[1][1]=0, dp[2][0]=2, dp[1][0]=1) + 1 = 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=2 (A), j=2 (A)"
        }), ": A=A → dp[2][2] = dp[1][1] = 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=2 (A), j=3 (R)"
        }), ": A≠R → min(dp[1][3]=2, dp[2][2]=0, dp[1][2]=1) + 1 = 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=3 (T), j=1 (C)"
        }), ": T≠C → min(dp[2][1]=1, dp[3][0]=3, dp[2][0]=2) + 1 = 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=3 (T), j=2 (A)"
        }), ": T≠A → min(dp[2][2]=0, dp[3][1]=2, dp[2][1]=1) + 1 = 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i=3 (T), j=3 (R)"
        }), ": T≠R → min(dp[2][3]=1, dp[3][2]=1, dp[2][2]=0) + 1 = 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final DP table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ø"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ø"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edit Distance = dp[3][3] = 1 (replace 'T' with 'R': CAT → CAR)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Another example:"
      }), " X = \"SUNDAY\", Y = \"SATURDAY\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final DP table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ø"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Y"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ø"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "U"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edit Distance = 3 (insert 'A' after S, insert 'T' after A, replace 'N' with 'R'... or equivalent sequence)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <string>\n#include <vector>\n#include <algorithm>\n\nint editDistance(const std::string& X, const std::string& Y) {\n    int m = static_cast<int>(X.size());\n    int n = static_cast<int>(Y.size());\n    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1));\n    for (int i = 0; i <= m; ++i) dp[i][0] = i;\n    for (int j = 0; j <= n; ++j) dp[0][j] = j;\n    for (int i = 1; i <= m; ++i) {\n        for (int j = 1; j <= n; ++j) {\n            if (X[i-1] == Y[j-1])\n                dp[i][j] = dp[i-1][j-1];\n            else\n                dp[i][j] = 1 + std::min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});\n        }\n    }\n    return dp[m][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def edit_distance(X: str, Y: str) -> int:\n    m, n = len(X), len(Y)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if X[i - 1] == Y[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])\n    return dp[m][n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static int editDistance(String X, String Y) {\n    int m = X.length(), n = Y.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (X.charAt(i - 1) == Y.charAt(j - 1))\n                dp[i][j] = dp[i - 1][j - 1];\n            else\n                dp[i][j] = 1 + Math.min(dp[i - 1][j],\n                            Math.min(dp[i][j - 1], dp[i - 1][j - 1]));\n        }\n    }\n    return dp[m][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis--with-why-2",
      children: "Complexity Analysis — With WHY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(mn)"
        }), " — Each cell in the (m+1)×(n+1) table requires O(1) work (a comparison and up to three lookups). This is optimal because any algorithm must at least consider each pair of prefix positions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(mn)"
        }), " for the full table. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n)"
        }), " with 2-row optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why three operations?"
        }), " Delete, insert, and replace are the minimal set that can transform any string into any other. Remove any operation and some strings become unreachable (e.g., without replace, \"CAT\"→\"CAR\" requires 2 operations instead of 1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "space-optimization-2",
      children: "Space Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same 2-row technique as LCS:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EDIT_DISTANCE_OPT(X, Y, m, n):\n    prev = array of size n+1, prev[j] = j\n    for i = 1 to m:\n        curr = array of size n+1\n        curr[0] = i\n        for j = 1 to n:\n            if X[i-1] == Y[j-1]:\n                curr[j] = prev[j-1]\n            else:\n                curr[j] = 1 + min(prev[j], curr[j-1], prev[j-1])\n        prev = curr\n    return prev[n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time: O(mn), Space: O(n)."
      }), " Only two rows are kept — the previous row and the current row being filled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Simple, symmetric recurrence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn) can be slow for long strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to extend (different costs per operation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't capture block moves (transpositions need Damerau-Levenshtein)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles arbitrary strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full reconstruction needs full table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for bioinformatics alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space-optimized version loses traceback info"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"\", Y=\"ABC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert all characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"\", Y=\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"A\", Y=\"A\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already equal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"A\", Y=\"B\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"ABC\", Y=\"ABC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"ABC\", Y=\"CBA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse: replace B→B? Actually A↔C → delete A, insert C, delete C, insert A... min=2 (replace A↔C, keep B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X=\"KITTEN\", Y=\"SITTING\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace K→S, replace E→I, insert G"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-matrix-chain-multiplication",
      children: "9.4 Matrix Chain Multiplication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given matrices ( A_1, A_2, \\ldots, A_n ) with dimensions ( p_0 \\times p_1, p_1 \\times p_2, \\ldots, p_{n-1} \\times p_n ), find the parenthesization that minimizes scalar multiplications."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " When a deep learning framework multiplies a sequence of weight matrices and input tensors, the order of multiplication dramatically affects computation speed. For example, multiplying a 10×100 matrix by a 100×5 matrix by a 5×50 matrix costs 7500 multiplications if grouped as (10×100 × 100×5) × 5×50, but 75,000 if grouped as 10×100 × (100×5 × 5×50) — a 10× difference. Compilers use this optimization for tensor operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Let ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p[0..n]"
        }), " be the dimensions where matrix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A_i"
        }), " has dimensions ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p[i-1] × p[i]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a 2D DP table ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp"
        }), " of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n × n"
        }), " initialized to 0, and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "split"
        }), " table for reconstruction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Loop over chain length ", (0,jsx_runtime.jsx)(_components.code, {
          children: "L"
        }), " from 2 to n (subproblem size):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), " from 1 to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n - L + 1"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "j = i + L - 1"
                }), " (end of this chain)."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dp[i][j] = ∞"
                }), "."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["For each split point ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "k"
                }), " from ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "i"
                }), " to ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "j-1"
                }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]"
                    }), "."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "cost < dp[i][j]"
                    }), ", update ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "dp[i][j] = cost"
                    }), " and record ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "split[i][j] = k"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[1][n-1]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MATRIX_CHAIN(p, n):\n    dp = 2D array of size n x n, all 0\n    split = 2D array of size n x n, all 0\n    for L = 2 to n:\n        for i = 1 to n - L + 1:\n            j = i + L - 1\n            dp[i][j] = INF\n            for k = i to j - 1:\n                cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]\n                if cost < dp[i][j]:\n                    dp[i][j] = cost\n                    split[i][j] = k\n    return dp[1][n-1]\n\nPRINT_PARENS(split, i, j):\n    if i == j:\n        print \"A\" + i\n    else:\n        print \"(\"\n        PRINT_PARENS(split, i, split[i][j])\n        PRINT_PARENS(split, split[i][j] + 1, j)\n        print \")\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-4",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dimensions ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p = [5, 4, 6, 2, 7]"
      }), " → matrices: A₁(5×4), A₂(4×6), A₃(6×2), A₄(2×7), n=4."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain length L=2:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "(i,j)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k=1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k=2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k=3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i][j]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+0+5·4·6=120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(2,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+0+4·6·2=48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(3,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+0+6·2·7=84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain length L=3:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1,3): i=1, j=3"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=1: dp[1][1]+dp[2][3] + p[0]·p[1]·p[3] = 0 + 48 + 5·4·2 = 40 + 48 ... wait: 0 + 48 + 5·4·2 = 48 + 40 = 88"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=2: dp[1][2]+dp[3][3] + p[0]·p[2]·p[3] = 120 + 0 + 5·6·2 = 120 + 60 = 180"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "min = 88, split = 1"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2,4): i=2, j=4"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=2: dp[2][2]+dp[3][4] + p[1]·p[2]·p[4] = 0 + 84 + 4·6·7 = 84 + 168 = 252"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=3: dp[2][3]+dp[4][4] + p[1]·p[3]·p[4] = 48 + 0 + 4·2·7 = 48 + 56 = 104"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "min = 104, split = 3"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain length L=4:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(1,4): i=1, j=4\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=1: dp[1][1]+dp[2][4] + p[0]·p[1]·p[4] = 0 + 104 + 5·4·7 = 104 + 140 = 244"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=2: dp[1][2]+dp[3][4] + p[0]·p[2]·p[4] = 120 + 84 + 5·6·7 = 204 + 210 = 414"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "k=3: dp[1][3]+dp[4][4] + p[0]·p[3]·p[4] = 88 + 0 + 5·2·7 = 88 + 70 = 158"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "min = 158, split = 3"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final DP table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "158"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "104"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Minimum cost = 158 multiplications. Parenthesization: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(A₁ × (A₂ × A₃)) × A₄"
      }), " at split=3 for (1,4), and within (2,4) at split=3 → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(A₁ × (A₂ × A₃)) × A₄"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <climits>\n#include <string>\n\nstd::pair<int, std::string> matrixChainOrder(const std::vector<int>& p) {\n    int n = static_cast<int>(p.size()) - 1;\n    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(n + 1, 0));\n    std::vector<std::vector<int>> split(n + 1, std::vector<int>(n + 1, 0));\n    for (int L = 2; L <= n; ++L) {\n        for (int i = 1; i <= n - L + 1; ++i) {\n            int j = i + L - 1;\n            dp[i][j] = INT_MAX;\n            for (int k = i; k < j; ++k) {\n                int cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j];\n                if (cost < dp[i][j]) {\n                    dp[i][j] = cost;\n                    split[i][j] = k;\n                }\n            }\n        }\n    }\n    return {dp[1][n], \"\"}; // reconstruction separate\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def matrix_chain_order(p):\n    n = len(p) - 1\n    dp = [[0] * (n + 1) for _ in range(n + 1)]\n    split = [[0] * (n + 1) for _ in range(n + 1)]\n    for L in range(2, n + 1):\n        for i in range(1, n - L + 2):\n            j = i + L - 1\n            dp[i][j] = float('inf')\n            for k in range(i, j):\n                cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j]\n                if cost < dp[i][j]:\n                    dp[i][j] = cost\n                    split[i][j] = k\n    return dp[1][n], split\n\ndef print_parens(split, i, j):\n    if i == j:\n        return f\"A{i}\"\n    k = split[i][j]\n    return f\"({print_parens(split, i, k)} × {print_parens(split, k + 1, j)})\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-3",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static int matrixChainOrder(int[] p) {\n    int n = p.length - 1;\n    int[][] dp = new int[n + 1][n + 1];\n    for (int L = 2; L <= n; L++) {\n        for (int i = 1; i <= n - L + 1; i++) {\n            int j = i + L - 1;\n            dp[i][j] = Integer.MAX_VALUE;\n            for (int k = i; k < j; k++) {\n                int cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];\n                if (cost < dp[i][j])\n                    dp[i][j] = cost;\n            }\n        }\n    }\n    return dp[1][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis--with-why-3",
      children: "Complexity Analysis — With WHY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(n³)"
        }), " — Three nested loops: chain length L (n iterations), start index i (n iterations per L), split point k (up to n iterations). Total ≈ Σ_{L=2}^{n} (n-L+1)·(L-1) = O(n³)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(n²)"
        }), " — The dp table stores n×n entries. The split table also O(n²) for reconstruction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(n³)?"
        }), " Each subproblem (i,j) tries all possible split points k between i and j-1. There are O(n²) subproblems × O(n) splits each = O(n³). This is optimal for general matrix chains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chu-Liu-Edmonds lower bound:"
        }), " No algorithm can do better than O(n²) because the output itself (split choices) is O(n²) entries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "space-optimization-3",
      children: "Space Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dp table can't be compressed to O(n) easily because interval DP needs all subproblem lengths. However, we only need one split table for reconstruction — the dp table can be stored as-is."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Optimal parenthesization (not a heuristic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) time is slow for large n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstruction is straightforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for standard multiplication (not Strassen's O(n^2.81))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical interval DP problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No practical early termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extends to tensor optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all dimension sizes as input"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p=[5, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single matrix, no multiplication needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p=[5, 4, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only two matrices, one option"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p=[5, 4, 6, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three matrices, better to group (A₁(A₂A₃))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p=[10, 20, 30, 40, 30]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard textbook example"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p=[1, 1, 1, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four identity-like matrices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-palindrome-partitioning",
      children: "9.5 Palindrome Partitioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string ( S ), partition it into substrings such that every substring is a palindrome. Find the minimum number of cuts needed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " NLP pipelines split text into meaningful chunks. Palindrome partitioning models problems where you must segment a sequence into valid substrings — like splitting a compound word (\"longest\") into dictionary words (\"long\", \"est\") or aligning phonemes in speech recognition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-5",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 — Precompute palindrome table:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a boolean 2D table ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isPal"
        }), " of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n × n"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " from 0 to n-1, set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isPal[i][i] = true"
        }), " (single characters are palindromes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "L"
        }), " from 2 to n (substring length):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), " from 0 to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n-L"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "j = i + L - 1"
                }), "."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "S[i] == S[j]"
                }), " and (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "j - i < 2"
                }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "isPal[i+1][j-1]"
                }), "), then ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "isPal[i][j] = true"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — Minimum cuts DP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create 1D array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp"
        }), " of size n, initialized to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INF"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " from 0 to n-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "isPal[0][i]"
            }), " is true, set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i] = 0"
            }), " (no cut needed for a palindrome prefix)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Else, for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "j"
            }), " from 0 to i-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "isPal[j+1][i]"
                }), " is true, update ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dp[i] = min(dp[i], dp[j] + 1)"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[n-1]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PALINDROME_PARTITION(S, n):\n    isPal = 2D boolean array of size n x n\n    for i = 0 to n-1: isPal[i][i] = true\n    for L = 2 to n:\n        for i = 0 to n - L:\n            j = i + L - 1\n            if S[i] == S[j] and (j - i < 2 or isPal[i+1][j-1]):\n                isPal[i][j] = true\n\n    dp = array of size n, all INF\n    for i = 0 to n-1:\n        if isPal[0][i]:\n            dp[i] = 0\n        else:\n            for j = 0 to i-1:\n                if isPal[j+1][i]:\n                    dp[i] = min(dp[i], dp[j] + 1)\n    return dp[n-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-5",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S = \"ababbbabbababa\" (n=14) — simplified as S = \"aab\" (n=3) for illustration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 — Palindrome table for S = \"aab\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i\\j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0 (a)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1 (a)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2 (b)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 (a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 (b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "isPal[0][0]=true, isPal[1][1]=true, isPal[2][2]=true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L=2: i=0,j=1: S[0]=a=S[1]=a, j-i=1<2 → isPal[0][1]=true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L=2: i=1,j=2: S[1]=a≠S[2]=b → isPal[1][2]=false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L=3: i=0,j=2: S[0]=a≠S[2]=b → isPal[0][2]=false"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — Minimum cuts for S = \"aab\":"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=0: isPal[0][0]=true → dp[0]=0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=1: isPal[0][1]=true → dp[1]=0"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["i=2: isPal[0][2]=false → check:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "j=0: isPal[1][2]=false → skip"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "j=1: isPal[2][2]=true → dp[2]=min(INF, dp[1]+1) = min(INF, 0+1) = 1"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimum cuts = 1. Partition: \"aa\" | \"b\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full example:"
      }), " S = \"ababbbabbababa\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Palindrome table preprocessing identifies all palindromic substrings:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single characters: all 14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Length 2: \"bb\" at positions (3,4), (5,6), (8,9), etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Length 3: \"aba\" at (0,2), (2,4), etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Length 5: \"ababa\" at (0,4), etc."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DP then finds the optimal cuts using these precomputed palindromes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <string>\n#include <vector>\n#include <algorithm>\n#include <climits>\n\nint minPalindromePartition(const std::string& S) {\n    int n = static_cast<int>(S.size());\n    std::vector<std::vector<bool>> isPal(n, std::vector<bool>(n, false));\n    for (int i = 0; i < n; ++i) isPal[i][i] = true;\n    for (int L = 2; L <= n; ++L) {\n        for (int i = 0; i <= n - L; ++i) {\n            int j = i + L - 1;\n            if (S[i] == S[j] && (j - i < 2 || isPal[i+1][j-1]))\n                isPal[i][j] = true;\n        }\n    }\n    std::vector<int> dp(n, INT_MAX);\n    for (int i = 0; i < n; ++i) {\n        if (isPal[0][i]) {\n            dp[i] = 0;\n        } else {\n            for (int j = 0; j < i; ++j) {\n                if (isPal[j+1][i])\n                    dp[i] = std::min(dp[i], dp[j] + 1);\n            }\n        }\n    }\n    return dp[n-1];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def min_palindrome_partition(S: str) -> int:\n    n = len(S)\n    isPal = [[False] * n for _ in range(n)]\n    for i in range(n):\n        isPal[i][i] = True\n    for L in range(2, n + 1):\n        for i in range(n - L + 1):\n            j = i + L - 1\n            if S[i] == S[j] and (j - i < 2 or isPal[i + 1][j - 1]):\n                isPal[i][j] = True\n    dp = [float('inf')] * n\n    for i in range(n):\n        if isPal[0][i]:\n            dp[i] = 0\n        else:\n            for j in range(i):\n                if isPal[j + 1][i]:\n                    dp[i] = min(dp[i], dp[j] + 1)\n    return dp[-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-4",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static int minPalindromePartition(String S) {\n    int n = S.length();\n    boolean[][] isPal = new boolean[n][n];\n    for (int i = 0; i < n; i++) isPal[i][i] = true;\n    for (int L = 2; L <= n; L++) {\n        for (int i = 0; i <= n - L; i++) {\n            int j = i + L - 1;\n            if (S.charAt(i) == S.charAt(j) && (j - i < 2 || isPal[i+1][j-1]))\n                isPal[i][j] = true;\n        }\n    }\n    int[] dp = new int[n];\n    for (int i = 0; i < n; i++) {\n        if (isPal[0][i]) {\n            dp[i] = 0;\n        } else {\n            dp[i] = Integer.MAX_VALUE;\n            for (int j = 0; j < i; j++) {\n                if (isPal[j+1][i])\n                    dp[i] = Math.min(dp[i], dp[j] + 1);\n            }\n        }\n    }\n    return dp[n-1];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis--with-why-4",
      children: "Complexity Analysis — With WHY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(n²)"
        }), " — Palindrome precomputation is O(n²) (nested loops over substring lengths and start positions). The cuts DP is also O(n²) (each i checks all j < i). Combined: O(n²)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(n²)"
        }), " — The palindrome table isO(n²) boolean entries. Without precomputation, checking isPal inside the cut loop would be O(n³) — the precomputation is essential."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(n²) and not O(n³)?"
        }), " The palindrome expansion uses the recurrence ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isPal[i][j]"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(S[i] == S[j]) && isPal[i+1][j-1]"
        }), " — this is O(1) per substring, avoiding the naive O(n³) expand-from-center approach."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "space-optimization-4",
      children: "Space Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The palindrome table can be computed on-the-fly using two-pointer expansion from each center (O(n²) time, O(1) space per check), but this makes the cuts DP O(n³) again. An alternative: use expand-around-center to fill isPal in O(n²) with O(n²) space is standard."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A more memory-efficient approach:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PALINDROME_MIN_CUTS(S, n):\n    dp = array of size n, all INF\n    for i = 0 to n-1:\n        // odd-length palindrome centered at i\n        for l = i, r = i; l >= 0 && r < n && S[l] == S[r]; l--, r++:\n            dp[r] = min(dp[r], (l == 0 ? 0 : dp[l-1] + 1))\n        // even-length palindrome centered between i-1 and i\n        for l = i-1, r = i; l >= 0 && r < n && S[l] == S[r]; l--, r++:\n            dp[r] = min(dp[r], (l == 0 ? 0 : dp[l-1] + 1))\n    return dp[n-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time: O(n²), Space: O(n)"
      }), " — Eliminates the isPal table entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Clean separation of palindrome detection and cuts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) space for the standard approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) time is optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't enumerate all partitions (only count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to reconstruct partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No early termination for tight bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1D cuts DP is reusable for other segmentation problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works best for well-structured strings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Cuts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single character"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"aa\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"aa\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already a palindrome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"ab\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\"|\"b\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two single-character palindromes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"aba\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"aba\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"abac\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"aba\"|\"c\" or \"a\"|\"bac\"? Actually \"aba\"|\"c\" = 1 cut"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"abcde\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\"|\"b\"|\"c\"|\"d\"|\"e\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No palindromic substrings longer than 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sequence-dp-patterns",
      children: "Sequence DP Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence DP problems follow recurring structural patterns. Recognizing the pattern helps you derive the recurrence quickly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-two-sequence-comparison",
      children: "Pattern 1: Two-Sequence Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Two sequences (strings, arrays) need to be compared or aligned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][j]"
        }), " = answer for prefixes of length i and j"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Transition: Compare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[i-1]"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B[j-1]"
        }), " → match or mismatch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Base: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[0][j]"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][0]"
        }), " = function of i or j"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      }), " LCS, Edit Distance, Shortest Common Supersequence, Wildcard Matching, Regular Expression Matching"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-single-sequence-partitioning",
      children: "Pattern 2: Single-Sequence Partitioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " One sequence needs to be partitioned into valid segments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i]"
        }), " = answer for prefix of length i"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Transition: Check all cut points ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j < i"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S[j+1..i]"
        }), " forms a valid segment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Base: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[0]"
        }), " = 0 (empty prefix)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      }), " Palindrome Partitioning, Word Break, Decode Ways, Integer Break"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-interval-dp-chain",
      children: "Pattern 3: Interval DP (Chain)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Combine adjacent elements in a sequence where order of combination affects cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][j]"
        }), " = answer for subarray ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[i..j]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Transition: Try all split points ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loop order: By length L from 2 to n"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Base: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][i]"
        }), " = 0 or 1 (single element)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge cost: often involves ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[i-1] * A[k] * A[j]"
        }), " or similar dimension-based formula"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      }), " Matrix Chain Multiplication, Burst Balloons, Stone Game, Optimal BST"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-4-subsequence-within-a-single-sequence",
      children: "Pattern 4: Subsequence within a Single Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Extract a subsequence (not necessarily contiguous) satisfying a property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i]"
        }), " = best value for subsequence ending at position i"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Transition: Scan all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j < i"
        }), ", check if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[j]"
        }), " can precede ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[i]"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity: O(n²) base, can sometimes optimize to O(n log n) with binary search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      }), " LIS, Longest Bitonic Subsequence, Maximum Sum Increasing Subsequence"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-Sequence Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Partition, Word Break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interval DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] by length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix Chain, Burst Balloons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIS O(n²) / O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)/O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lis-in-on-log-n--the-patience-sorting-trick",
      children: "LIS in O(n log n) — The Patience Sorting Trick"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the single most important optimization to know for sequence DP interviews."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n\nint lengthOfLIS(std::vector<int>& nums) {\n    std::vector<int> tails;\n    for (int x : nums) {\n        auto it = std::lower_bound(tails.begin(), tails.end(), x);\n        if (it == tails.end())\n            tails.push_back(x);\n        else\n            *it = x;\n    }\n    return tails.size();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it works:"
      }), " The tails array maintains the invariant that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tails[k]"
      }), " is the smallest possible last element of an increasing subsequence of length k+1. Since tails is always strictly increasing (proved by induction), binary search works in O(log n)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variation — Non-decreasing:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "upper_bound"
      }), " (C++) or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bisect_right"
      }), " (Python) instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lower_bound"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bisect_left"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variation — Maximum Sum Increasing Subsequence:"
      }), " Use O(n²) DP with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i] = A[i] + max(dp[j])"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A[j] < A[i]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shortest-common-supersequence-scs",
      children: "Shortest Common Supersequence (SCS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given strings X and Y, find the shortest string Z such that X and Y are subsequences of Z."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relation to LCS:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "len(SCS) = len(X) + len(Y) - len(LCS(X, Y))"
      }), ". The supersequence merges both strings, keeping the LCS characters once."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " X = \"AGGTAB\", Y = \"GXTXAYB\". LCS = \"GTAB\" (length 4). SCS length = 6 + 7 - 4 = 9. SCS = \"AGXGTXAYB\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconstruction:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through both strings and the LCS simultaneously."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When characters match, take one copy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When they differ, include the character from whichever string we're not aligning."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def shortest_common_supersequence(X, Y):\n    m, n = len(X), len(Y)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if X[i - 1] == Y[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    # LCS length = dp[m][n]\n    # Build SCS\n    i, j = m, n\n    result = []\n    while i > 0 and j > 0:\n        if X[i - 1] == Y[j - 1]:\n            result.append(X[i - 1])\n            i -= 1; j -= 1\n        elif dp[i - 1][j] > dp[i][j - 1]:\n            result.append(X[i - 1])\n            i -= 1\n        else:\n            result.append(Y[j - 1])\n            j -= 1\n    while i > 0: result.append(X[i - 1]); i -= 1\n    while j > 0: result.append(Y[j - 1]); j -= 1\n    return ''.join(reversed(result))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "longest-palindromic-subsequence-lps",
      children: "Longest Palindromic Subsequence (LPS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the longest subsequence (not necessarily contiguous) of a string that is a palindrome."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " LPS of S = LCS of S and reverse(S). This reduces LPS to LCS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " S = \"BBABCBCAB\" → reverse = \"BACBCBABB\" → LCS length = 7 (\"BABCBCB\" or \"BBABCBB\")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Direct DP approach"
      }), " (without reverse):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][j]"
        }), " = LPS length in S[i..j]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S[i] == S[j]"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][j] = dp[i+1][j-1] + 2"
        }), " (match outer characters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][j] = max(dp[i+1][j], dp[i][j-1])"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Base: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dp[i][i]"
        }), " = 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longest_palindromic_subsequence(S):\n    n = len(S)\n    dp = [[0] * n for _ in range(n)]\n    for i in range(n - 1, -1, -1):\n        dp[i][i] = 1\n        for j in range(i + 1, n):\n            if S[i] == S[j]:\n                dp[i][j] = dp[i + 1][j - 1] + 2\n            else:\n                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n    return dp[0][n - 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space complexity:"
      }), " O(n²) time, O(n²) space. Can be optimized to O(n) space with 2-row technique."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-question-table",
      children: "Common Interview Question Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIS length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequence DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patience sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tails array, binary search, O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max sum increasing subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequence DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i] = A[i] + max(dp[j]) for A[j] < A[i]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edit distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(insert, delete, replace)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest common supersequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS derivative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len = m + n - LCS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest palindromic subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interval DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS(S, reverse(S))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Or interval DP expanding from center"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wildcard matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP with states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle *, ? special cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP with hash set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i] = OR over dp[j] && wordDict.contains(S[j:i])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest bitonic subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pass LIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIS from left + LIS from right"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-diff-edit-distance-variant",
      children: "Git Diff (Edit Distance Variant)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "diff"
      }), " algorithm (Myers algorithm) computes the shortest edit script between two files. It's a generalization of LCS where each line is a character."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read both files line by line."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute LCS of the line sequences (hashing lines for O(1) comparison)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lines in the LCS are unchanged; everything else is a deletion (from file A) or insertion (into file B)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simplified diff using LCS\ndef simple_diff(a_lines, b_lines):\n    a_hashes = [hash(line) for line in a_lines]\n    b_hashes = [hash(line) for line in b_lines]\n    lcs_seq = lcs(a_hashes, b_hashes)  # returns hash sequence\n    # Walk and diff\n    result = []\n    i = j = 0\n    for h in lcs_seq:\n        while a_hashes[i] != h:\n            result.append(f\"- {a_lines[i]}\"); i += 1\n        while b_hashes[j] != h:\n            result.append(f\"+ {b_lines[j]}\"); j += 1\n        result.append(f\"  {a_lines[i]}\"); i += 1; j += 1\n    while i < len(a_lines):\n        result.append(f\"- {a_lines[i]}\"); i += 1\n    while j < len(b_lines):\n        result.append(f\"+ {b_lines[j]}\"); j += 1\n    return '\\n'.join(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git also offers patience diff, histogram diff, and minimal diff — all built on LCS/edit distance variants. GitHub uses these to display familiar green/red line highlights."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bioinformatics-lcs-for-dna-alignment",
      children: "Bioinformatics (LCS for DNA Alignment)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DNA sequences are strings over {A, C, G, T}. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Needleman-Wunsch algorithm"
      }), " (1970) generalizes LCS for global sequence alignment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scoring model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match: +1 (or positive score from substitution matrix like BLOSUM62 for proteins)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mismatch: -1 (or negative score)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gap (insert/delete): -2 (gap penalty)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence (generalized):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j] = max(\n    dp[i-1][j-1] + score(X[i], Y[j]),  // match or mismatch\n    dp[i-1][j] + gap_penalty,           // gap in Y\n    dp[i][j-1] + gap_penalty            // gap in X\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real use:"
      }), " The Human Genome Project used sequence alignment to compare genomes across species. When scientists say \"humans share 98% of DNA with chimpanzees\", that percentage comes from a global sequence alignment algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Smith-Waterman algorithm"
      }), " (local alignment) modifies this to find the best-aligning substring pair (score never goes below 0) — used to find conserved functional regions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plagiarism-detection",
      children: "Plagiarism Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MOSS (Measure Of Software Similarity) and JPlag detect code plagiarism using sequence comparison."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokenize source code into a sequence of \"tokens\" (keywords, operators, identifiers mapped to normalized symbols)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run LCS or edit distance on token sequences between all pairs of submissions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports suspicious matches ranked by similarity score."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why LCS and not string matching:"
      }), " Renaming variables (a→b, x→y) changes the literal text but not the tokenized pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IDENT ASSIGN IDENT PLUS IDENT SEMI"
      }), ". LCS on the tokenized sequence catches this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adaptation:"
      }), " Plagiarism detectors often use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "running-Karp-Rabin matching"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "winnowing"
      }), " for efficiency (fingerprinting subsets of matched fingerprints), but the foundation remains sequence alignment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-real-world-systems",
      children: "Other Real-World Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Search Suggestions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct typos in queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "diff"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Myers (LCS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line-by-line file comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autocorrect (iOS, Android)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Levenshtein Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank word suggestions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCBI BLAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smith-Waterman (local alignment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNA/protein database search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Word Grammar Checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance + Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect and correct errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PlagScan, TurnItIn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS / Winnowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document similarity detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNA secondary structure prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nussinov (interval DP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict base-pair folding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D (i,j)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] = LCS length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "match → +1 diagonal, mismatch → max neighbors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1D (i)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i] = LIS ending at i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i] = 1 + max dp[j] where A[j] < A[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) / O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D (i,j)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] = min ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(insert, delete, replace) = base+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] = min cost at split k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min over k of dp[i][k] + dp[k+1][j] + cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1D (i)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i] = min cuts for prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[j] + 1 if S[j+1..i] is palindrome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D (i,j)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] = supersequence length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 from LCS: m + n - LCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D (i,j)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] = LPS length in S[i..j]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "match → +2, no match → max split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
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
              children: "Two-Sequence DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, Edit Distance, SCS — 2D table, O(mn) time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single-Sequence DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIS — 1D or patience sorting, O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interval DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix Chain, LPS — loop by length L, then start i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precomputation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Partition — compute isPal first, then 1D cut DP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reconstruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS and Matrix Chain need separate traceback logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, Edit Distance: 2 rows → O(n). LIS: already O(n)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting base cases (empty strings, single elements)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Favorite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIS O(n log n), Edit Distance traceback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern Matching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Sequence vs Interval vs Partition vs Subsequence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Design"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — diff algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String DP variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version control diffs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git diff, bioinformatics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common — patience sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy + binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock trading, scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — spell check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit distance variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autocorrect systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spell checkers, DNA alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally asked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interval DP problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — string DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String analysis, NLP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare standalone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge/join operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Genome assembly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LCS uses a 2D DP on string prefixes; reconstruction requires traceback. LCS length can be computed in O(n) space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIS has an elegant ( O(n \\log n) ) solution using patience sorting with binary search on a tails array."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edit distance generalizes LCS by allowing insert, delete, and replace operations with flexible cost models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matrix chain multiplication optimizes parenthesization over interval DP by iterating chain lengths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Palindrome partitioning precomputes palindrome substrings and applies 1D DP for minimum cuts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequence DP follows four main patterns: Two-Sequence, Single-Sequence Partition, Interval, and Subsequence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview cornerstones: LIS O(n log n), LPS from LCS(S, reverse(S)), SCS length formula."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications span git diff, bioinformatics sequence alignment, spell checkers, and plagiarism detection."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What data structure does O(n log n) LIS use?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A hash set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A sorted tails array with binary search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A max-heap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A queue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The tails array stores the smallest possible last element for each subsequence length; binary search finds insertion position.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the edit distance recurrence's three operations?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Insert, delete, replace"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Add, remove, swap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Copy, paste, cut"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Push, pop, shift"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nA) Insert (add character), delete (remove character), replace (substitute one character for another).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In matrix chain multiplication, the cost of splitting at k is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) dp[i][k] + dp[k+1][j]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) dp[i][k] + dp[k+1][j] + p[i-1]·p[k]·p[j]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) dp[i][k] + p[i-1]·p[j]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) dp[k][j] + dp[i][k-1]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The total cost is the left subproblem (A_i..A_k) + right subproblem (A_{k+1}..A_j) + the cost of multiplying the two resulting matrices (p[i-1] × p[k] × p[j]).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the formula for shortest common supersequence length in terms of LCS?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) len(X) + len(Y) - LCS(X, Y)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) len(X) + len(Y) + LCS(X, Y)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) max(len(X), len(Y))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) len(X) + len(Y)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nA) SCS length = m + n - LCS length, because LCS characters appear once and the rest from each string are added.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which pattern does Burst Balloons follow?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Two-sequence DP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Interval DP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Single-sequence partition DP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Subsequence DP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Burst Balloons is an interval DP problem where dp[i][j] considers the last balloon to burst in the range, similar to matrix chain multiplication.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the recurrence for edit distance change if you add a transpose operation (swap adjacent characters)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the optimal LIS solution ( O(n \\log n) ) and not ( O(n^2) )?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the tails array in LIS is always strictly increasing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why space optimization for LCS (2 rows) loses reconstruction capability."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How would you modify LIS to find the longest ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-decreasing"
        }), " subsequence (allow equals)?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement edit distance with reconstruction of the edit operations (not just the count)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve LIS on the array [3, 10, 2, 1, 20] using both ( O(n^2) ) and ( O(n \\log n) ) methods."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the optimal parenthesization for matrices with dimensions [5, 4, 6, 2, 7]."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the minimum cuts for palindrome partitioning of the string \"ababbbabbababa\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function that computes the LCS space-optimized (O(n) space) returning only the length."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Design an algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "shortest common supersequence"
          }), " (SCS): given strings X and Y, find the shortest string Z such that X and Y are subsequences of Z. Show how to derive the solution from LCS and implement reconstruction."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LIS reconstruction in O(n log n):"
          }), " While the standard patience algorithm only finds the LIS length, extend it to reconstruct the actual subsequence by storing predecessor indices. Hint: maintain ", (0,jsx_runtime.jsx)(_components.code, {
            children: "parent"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sequence_pos"
          }), " arrays alongside ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tails"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit distance with affine gap penalties:"
          }), " In bioinformatics, opening a gap costs more than extending one. Modify the edit distance recurrence to support separate gap-open and gap-extend penalties."]
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