"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[71097],{

/***/ 95098
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_interview_preparation_14_company_google_swe_md_ef1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-interview-preparation-14-company-google-swe-md-ef1.json
const site_docs_courses_interview_preparation_14_company_google_swe_md_ef1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/interview-preparation/14-company-google-swe","title":"Chapter 14: Google SWE — Company-Specific Question Bank","description":"Learning Objectives","source":"@site/docs/courses/interview-preparation/14-company-google-swe.md","sourceDirName":"courses/interview-preparation","slug":"/interview-preparation/14-company-google-swe","permalink":"/ai-engineering-journey/interview-preparation/14-company-google-swe","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-company-google-swe","slug":"/interview-preparation/14-company-google-swe","title":"Chapter 14: Google SWE — Company-Specific Question Bank","sidebar_label":"Chapter 14: Google SWE — Company-Specific Question Bank","sidebar_position":14},"sidebar":"coursesSidebar","previous":{"title":"Chapter 13: Amazon SDE — Company-Specific Question Bank","permalink":"/ai-engineering-journey/interview-preparation/13-company-amazon-sde"},"next":{"title":"Chapter 15: Microsoft SDE — Company-Specific Question Bank","permalink":"/ai-engineering-journey/interview-preparation/15-company-microsoft-sde"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/interview-preparation/14-company-google-swe.md


const frontMatter = {
	id: '14-company-google-swe',
	slug: '/interview-preparation/14-company-google-swe',
	title: 'Chapter 14: Google SWE — Company-Specific Question Bank',
	sidebar_label: 'Chapter 14: Google SWE — Company-Specific Question Bank',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Google SWE — Company-Specific Question Bank';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Google Interview Process",
  "id": "google-interview-process",
  "level": 2
}, {
  "value": "Google Design Decision Flow",
  "id": "google-design-decision-flow",
  "level": 2
}, {
  "value": "Section 1: Coding Problems — Google-Style Hard (8 Problems)",
  "id": "section-1-coding-problems--google-style-hard-8-problems",
  "level": 2
}, {
  "value": "Problem 1: Median of Two Sorted Arrays",
  "id": "problem-1-median-of-two-sorted-arrays",
  "level": 3
}, {
  "value": "Problem 2: Serialize and Deserialize Binary Tree",
  "id": "problem-2-serialize-and-deserialize-binary-tree",
  "level": 3
}, {
  "value": "Problem 3: Alien Dictionary",
  "id": "problem-3-alien-dictionary",
  "level": 3
}, {
  "value": "Problem 4: Word Break II",
  "id": "problem-4-word-break-ii",
  "level": 3
}, {
  "value": "Problem 5: Regular Expression Matching",
  "id": "problem-5-regular-expression-matching",
  "level": 3
}, {
  "value": "Problem 6: Longest Increasing Path in a Matrix",
  "id": "problem-6-longest-increasing-path-in-a-matrix",
  "level": 3
}, {
  "value": "Problem 7: Merge Intervals",
  "id": "problem-7-merge-intervals",
  "level": 3
}, {
  "value": "Problem 8: Text Justification",
  "id": "problem-8-text-justification",
  "level": 3
}, {
  "value": "Section 2: System Design (3 Problems)",
  "id": "section-2-system-design-3-problems",
  "level": 2
}, {
  "value": "Problem SD-1: Design Google Docs (Real-time Collaborative Document Editor)",
  "id": "problem-sd-1-design-google-docs-real-time-collaborative-document-editor",
  "level": 3
}, {
  "value": "Problem SD-2: Design Google Search",
  "id": "problem-sd-2-design-google-search",
  "level": 3
}, {
  "value": "Problem SD-3: Design YouTube",
  "id": "problem-sd-3-design-youtube",
  "level": 3
}, {
  "value": "Section 3: Googleyness &amp; Behavioral (10 Questions)",
  "id": "section-3-googleyness--behavioral-10-questions",
  "level": 2
}, {
  "value": "Q1: Tell me about a time you led through ambiguity. (Googleyness — Comfort with Ambiguity)",
  "id": "q1-tell-me-about-a-time-you-led-through-ambiguity-googleyness--comfort-with-ambiguity",
  "level": 3
}, {
  "value": "Q2: Tell me about a time you had a disagreement with a peer. (Googleyness — Collaboration)",
  "id": "q2-tell-me-about-a-time-you-had-a-disagreement-with-a-peer-googleyness--collaboration",
  "level": 3
}, {
  "value": "Q3: Describe the most technically challenging problem you&#39;ve solved. (Problem Solving)",
  "id": "q3-describe-the-most-technically-challenging-problem-youve-solved-problem-solving",
  "level": 3
}, {
  "value": "Q4: How do you stay current with technology? (Learning)",
  "id": "q4-how-do-you-stay-current-with-technology-learning",
  "level": 3
}, {
  "value": "Q5: Tell me about a project that failed. What did you learn? (Humility &amp; Learning)",
  "id": "q5-tell-me-about-a-project-that-failed-what-did-you-learn-humility--learning",
  "level": 3
}, {
  "value": "Q6: How would you design a feature that&#39;s never been built before? (Product Sense)",
  "id": "q6-how-would-you-design-a-feature-thats-never-been-built-before-product-sense",
  "level": 3
}, {
  "value": "Q7: Tell me about a time you influenced someone without authority. (Leadership)",
  "id": "q7-tell-me-about-a-time-you-influenced-someone-without-authority-leadership",
  "level": 3
}, {
  "value": "Q8: How do you approach making decisions with incomplete data? (Comfort with Ambiguity)",
  "id": "q8-how-do-you-approach-making-decisions-with-incomplete-data-comfort-with-ambiguity",
  "level": 3
}, {
  "value": "Q9: Describe a time you improved a process or system significantly. (Impact)",
  "id": "q9-describe-a-time-you-improved-a-process-or-system-significantly-impact",
  "level": 3
}, {
  "value": "Q10: Why Google? What would you work on here? (Motivation)",
  "id": "q10-why-google-what-would-you-work-on-here-motivation",
  "level": 3
}, {
  "value": "Google Preparation Strategy",
  "id": "google-preparation-strategy",
  "level": 2
}, {
  "value": "Coding Preparation (8-12 weeks)",
  "id": "coding-preparation-8-12-weeks",
  "level": 3
}, {
  "value": "System Design Focus Areas",
  "id": "system-design-focus-areas",
  "level": 3
}, {
  "value": "Behavioral Themes",
  "id": "behavioral-themes",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    b: "b",
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
        id: "chapter-14-google-swe--company-specific-question-bank",
        children: "Chapter 14: Google SWE — Company-Specific Question Bank"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master 8 Google-style hard coding problems with complete TypeScript solutions and complexity analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design 3 large-scale systems: Google Docs, Search, and YouTube"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer 10 Googleyness and behavioral questions with Google-specific strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Google's interview process, scoring rubric, and decision-making framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop product sense and design thinking for Google's unique interview style"
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
        href: "../../assets/images/lessons/interview-preparation/14-company-google-swe/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/14-company-google-swe/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/interview-preparation/14-company-google-swe/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/14-company-google-swe/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/interview-preparation/14-company-google-swe/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/14-company-google-swe/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-interview-process",
      children: "Google Interview Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph \"Google SWE Interview Process\"\n        A[Resume Submission] --> B[Recruiter Screen<br/>30 mins • Background Check]\n        B --> C{Strong Fit?}\n        C -->|Yes| D[Phone/Video Screen<br/>45 mins • 1-2 Coding Problems]\n        C -->|No| E[Rejected]\n        D --> F{Pass?}\n        F -->|Yes| G[Onsite Interview<br/>4-5 Rounds • 45 mins each]\n        F -->|No| E\n        G --> H1[Coding Round 1<br/>Algorithmic Thinking]\n        G --> H2[Coding Round 2<br/>Data Structures]\n        G --> H3[System Design<br/>SWE3+ Only]\n        G --> H4[Googleyness<br/>Behavioral + Leadership]\n        G --> H5[Coding Round 3<br/>Hard Problem]\n        \n        H1 --> I[Interviewer Feedback<br/>Hire / No Hire]\n        H2 --> I\n        H3 --> I\n        H4 --> I\n        H5 --> I\n        \n        I --> J[Hiring Committee Review]\n        J --> K{Recommendation}\n        K -->|Positive| L[Compensation Committee]\n        K -->|Negative| M[Rejected or Level Down]\n        L --> N[Offer Extended]\n        M --> E\n    end\n\n    style A fill:#4285f4,color:#fff\n    style N fill:#34a853,color:#fff\n    style K fill:#fbbc04,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-design-decision-flow",
      children: "Google Design Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Design Decision Framework\"\n        A[Problem Statement] --> B[Clarify Requirements]\n        B --> C[Estimate Scale<br/>QPS, Storage, Bandwidth]\n        C --> D[Core Entities<br/>Data Model]\n        D --> E[API Design<br/>REST/gRPC]\n        E --> F[High-Level Design<br/>Components + Data Flow]\n        F --> G[Deep Dive<br/>One Component]\n        G --> H[Scale & Optimize<br/>Sharding, Caching, CDN]\n        H --> I[Trade-offs Discussed<br/>Consistency vs Availability]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-coding-problems--google-style-hard-8-problems",
      children: "Section 1: Coding Problems — Google-Style Hard (8 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-median-of-two-sorted-arrays",
      children: "Problem 1: Median of Two Sorted Arrays"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two sorted arrays ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums1"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums2"
      }), " of sizes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), ", return the median of the two sorted arrays. Overall runtime complexity should be O(log(m+n))."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " This is one of Google's most iconic hard problems. Tests binary search mastery and creative problem decomposition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  nums1 = [1, 3], nums2 = [2]\nOutput: 2.0\nExplanation: merged = [1, 2, 3], median = 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: Binary Search Partition — O(log(min(m,n))) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n  // Ensure nums1 is the smaller array for O(log(min(m,n)))\n  if (nums1.length > nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n  }\n\n  const m = nums1.length;\n  const n = nums2.length;\n  let left = 0, right = m;\n\n  while (left <= right) {\n    const partition1 = Math.floor((left + right) / 2);\n    const partition2 = Math.floor((m + n + 1) / 2) - partition1;\n\n    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];\n    const minRight1 = partition1 === m ? Infinity : nums1[partition1];\n    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];\n    const minRight2 = partition2 === n ? Infinity : nums2[partition2];\n\n    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {\n      if ((m + n) % 2 === 0) {\n        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;\n      } else {\n        return Math.max(maxLeft1, maxLeft2);\n      }\n    } else if (maxLeft1 > minRight2) {\n      right = partition1 - 1; // Move left\n    } else {\n      left = partition1 + 1; // Move right\n    }\n  }\n\n  throw new Error(\"Input arrays are not sorted\");\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(log(min(m,n))) — binary search on the smaller array\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — constant space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key insight:"
        }), " Instead of merging (O(m+n)), we partition both arrays such that all elements on the left are ≤ all elements on the right. The partition indices give us the median directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why Google asks this:"
        }), " Tests ability to transform a seemingly straightforward problem into an elegant O(log n) solution through binary search on the correct search space."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-serialize-and-deserialize-binary-tree",
      children: "Problem 2: Serialize and Deserialize Binary Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design an algorithm to serialize a binary tree into a string and deserialize the string back into the tree. Any format works as long as it's unambiguous."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " Google frequently asks tree serialization — tests understanding of tree traversal and recursive problem solving."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: Preorder with Null Markers — O(n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class TreeNode {\n  val: number;\n  left: TreeNode | null = null;\n  right: TreeNode | null = null;\n  constructor(val: number) { this.val = val; }\n}\n\nfunction serialize(root: TreeNode | null): string {\n  const result: string[] = [];\n\n  function dfs(node: TreeNode | null): void {\n    if (node === null) {\n      result.push('null');\n      return;\n    }\n    result.push(node.val.toString());\n    dfs(node.left);\n    dfs(node.right);\n  }\n\n  dfs(root);\n  return result.join(',');\n}\n\nfunction deserialize(data: string): TreeNode | null {\n  const values = data.split(',');\n  let index = 0;\n\n  function dfs(): TreeNode | null {\n    if (values[index] === 'null') {\n      index++;\n      return null;\n    }\n\n    const node = new TreeNode(parseInt(values[index]));\n    index++;\n    node.left = dfs();\n    node.right = dfs();\n    return node;\n  }\n\n  return dfs();\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
          children: (0,jsx_runtime.jsx)(_components.b, {
            children: "BFS Level Order Approach:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-typescript",
            children: "function serializeBFS(root: TreeNode | null): string {\n  if (!root) return 'null';\n  const queue: (TreeNode | null)[] = [root];\n  const result: string[] = [];\n\n  while (queue.length > 0) {\n    const node = queue.shift()!;\n    if (node === null) {\n      result.push('null');\n    } else {\n      result.push(node.val.toString());\n      queue.push(node.left);\n      queue.push(node.right);\n    }\n  }\n\n  // Remove trailing nulls for efficiency\n  while (result[result.length - 1] === 'null') {\n    result.pop();\n  }\n\n  return result.join(',');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time:"
          }), " O(n), ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Space:"
          }), " O(n) for both approaches"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google interview tip:"
        }), " Discuss trade-offs between approaches — preorder uses recursion (risk of stack overflow for very deep trees), BFS is iterative but more code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-alien-dictionary",
      children: "Problem 3: Alien Dictionary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a sorted dictionary of an alien language (array of words), find the order of characters in the alien alphabet."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " A classic Google hard problem combining graph construction and topological sort."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  [\"wrt\", \"wrf\", \"er\", \"ett\", \"rftt\"]\nOutput: \"wertf\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: Topological Sort (BFS — Kahn's Algorithm) — O(C) time, O(1) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function alienOrder(words: string[]): string {\n  // Build graph\n  const graph = new Map<string, Set<string>>();\n  const inDegree = new Map<string, number>();\n\n  // Initialize characters\n  for (const word of words) {\n    for (const char of word) {\n      if (!graph.has(char)) graph.set(char, new Set());\n      if (!inDegree.has(char)) inDegree.set(char, 0);\n    }\n  }\n\n  // Build edges from adjacent word comparisons\n  for (let i = 0; i < words.length - 1; i++) {\n    const word1 = words[i];\n    const word2 = words[i + 1];\n    const minLen = Math.min(word1.length, word2.length);\n\n    // Check for invalid case: word2 is a prefix of word1\n    if (word1.length > word2.length && word1.startsWith(word2)) {\n      return '';\n    }\n\n    for (let j = 0; j < minLen; j++) {\n      if (word1[j] !== word2[j]) {\n        if (!graph.get(word1[j])!.has(word2[j])) {\n          graph.get(word1[j])!.add(word2[j]);\n          inDegree.set(word2[j], inDegree.get(word2[j])! + 1);\n        }\n        break; // Only the first differing character matters\n      }\n    }\n  }\n\n  // BFS Topological sort (Kahn's algorithm)\n  const queue: string[] = [];\n  for (const [char, degree] of inDegree) {\n    if (degree === 0) queue.push(char);\n  }\n\n  const result: string[] = [];\n  while (queue.length > 0) {\n    const char = queue.shift()!;\n    result.push(char);\n\n    for (const neighbor of graph.get(char)!) {\n      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);\n      if (inDegree.get(neighbor) === 0) {\n        queue.push(neighbor);\n      }\n    }\n  }\n\n  // If not all characters are in result, there's a cycle\n  return result.length === inDegree.size ? result.join('') : '';\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(C) where C = total number of characters across all words\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — at most 26 unique characters (lowercase letters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why this is hard:"
        }), " You must: (1) realize it's a graph problem, (2) correctly extract edges from adjacent word comparisons, (3) handle edge cases like prefix ordering violations, (4) detect cycles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google follow-up:"
        }), " What if the alphabet includes uppercase and lowercase? (Treat them as distinct characters.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-word-break-ii",
      children: "Problem 4: Word Break II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " and a dictionary of words ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wordDict"
      }), ", add spaces in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " to construct all possible sentences where each word is a valid dictionary word."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " Google tests memoized backtracking — combining DFS with DP for optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  s = \"catsanddog\", wordDict = [\"cat\", \"cats\", \"and\", \"sand\", \"dog\"]\nOutput: [\"cats and dog\", \"cat sand dog\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: Memoized Backtracking — O(2^n) worst, O(n × k) with pruning"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function wordBreak(s: string, wordDict: string[]): string[] {\n  const wordSet = new Set(wordDict);\n  const memo = new Map<string, string[]>();\n\n  function dfs(remaining: string): string[] {\n    if (memo.has(remaining)) return memo.get(remaining)!;\n\n    const result: string[] = [];\n\n    if (wordSet.has(remaining)) {\n      result.push(remaining); // The entire remaining string is a valid word\n    }\n\n    for (let i = 1; i < remaining.length; i++) {\n      const prefix = remaining.substring(0, i);\n      if (wordSet.has(prefix)) {\n        const subSentences = dfs(remaining.substring(i));\n        for (const sentence of subSentences) {\n          result.push(prefix + ' ' + sentence);\n        }\n      }\n    }\n\n    memo.set(remaining, result);\n    return result;\n  }\n\n  return dfs(s);\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(2^n) worst case (e.g., s = \"aaa...\", all substrings are words). With memoization and pruning, much faster in practice.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n × k) where k = average number of sentences per substring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key optimization:"
        }), " The memoization ensures each substring is computed only once, transforming exponential brute force into manageable performance for typical inputs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-regular-expression-matching",
      children: "Problem 5: Regular Expression Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement regular expression matching with support for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), " (any character) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " (zero or more of preceding element). The match must cover the entire input string."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " Google's most classic DP-hard problem — tests 2D DP formulation and edge case thinking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  s = \"aa\", p = \"a*\"\nOutput: true\nExplanation: '*' matches zero or more of 'a', so \"aa\" matches \"a*\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: 2D Dynamic Programming — O(m×n) time, O(m×n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function isMatch(s: string, p: string): boolean {\n  const m = s.length;\n  const n = p.length;\n  const dp: boolean[][] = Array.from({ length: m + 1 }, () =>\n    new Array(n + 1).fill(false)\n  );\n\n  dp[0][0] = true; // Empty string matches empty pattern\n\n  // Handle patterns like a*, a*b*, a*b*c* that can match empty string\n  for (let j = 2; j <= n; j += 2) {\n    if (p[j - 1] === '*') {\n      dp[0][j] = dp[0][j - 2];\n    }\n  }\n\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      const sChar = s[i - 1];\n      const pChar = p[j - 1];\n\n      if (pChar === '*') {\n        // Zero occurrences: skip pattern char + '*'\n        dp[i][j] = dp[i][j - 2];\n\n        // One or more occurrences: if preceding pattern char matches\n        const prevPChar = p[j - 2];\n        if (prevPChar === '.' || prevPChar === sChar) {\n          dp[i][j] = dp[i][j] || dp[i - 1][j];\n        }\n      } else if (pChar === '.' || pChar === sChar) {\n        dp[i][j] = dp[i - 1][j - 1];\n      }\n    }\n  }\n\n  return dp[m][n];\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(m × n) — fill DP table\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(m × n) — can be optimized to O(n) space"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DP recurrence:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "If p[j-1] == '*': dp[i][j] = dp[i][j-2] OR (p[j-2] matches s[i-1] AND dp[i-1][j])"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "If p[j-1] == '.' or p[j-1] == s[i-1]: dp[i][j] = dp[i-1][j-1]"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google interview tip:"
        }), " Walk through the DP table on a simple example (s=\"aa\", p=\"a*\") to demonstrate your understanding. Most candidates can code this; fewer can explain WHY the recurrence works."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-longest-increasing-path-in-a-matrix",
      children: "Problem 6: Longest Increasing Path in a Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an m×n integer matrix, return the length of the longest increasing path. From each cell, you can move in four directions (up/down/left/right)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " Google tests DFS + memoization (top-down DP) — combining graph traversal with optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:\n[ [9, 9, 4],\n  [6, 6, 8],\n  [2, 1, 1] ]\nOutput: 4\nExplanation: Longest path is 1→2→6→9 (or 1→2→6→8)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: DFS with Memoization — O(m×n) time, O(m×n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function longestIncreasingPath(matrix: number[][]): number {\n  if (!matrix || matrix.length === 0) return 0;\n\n  const rows = matrix.length;\n  const cols = matrix[0].length;\n  const memo: number[][] = Array.from({ length: rows }, () =>\n    new Array(cols).fill(0)\n  );\n  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n  let maxLength = 0;\n\n  function dfs(r: number, c: number): number {\n    if (memo[r][c] !== 0) return memo[r][c];\n\n    let pathLength = 1; // At minimum, the cell itself\n\n    for (const [dr, dc] of directions) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols &&\n          matrix[nr][nc] > matrix[r][c]) {\n        pathLength = Math.max(pathLength, 1 + dfs(nr, nc));\n      }\n    }\n\n    memo[r][c] = pathLength;\n    return pathLength;\n  }\n\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      maxLength = Math.max(maxLength, dfs(r, c));\n    }\n  }\n\n  return maxLength;\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(m×n) — each cell computed once\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(m×n) — memoization table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why Google asks this:"
        }), " Tests recognition that naive DFS is exponential. Memoization reduces to O(m×n). This pattern (DFS + memo) appears in many Google problems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-merge-intervals",
      children: "Problem 7: Merge Intervals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of intervals where each interval is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[start, end]"
      }), ", merge all overlapping intervals."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " Interval problems are Google favorites — tests sorting + linear scan pattern recognition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution: Sort and Merge — O(n log n) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function merge(intervals: number[][]): number[][] {\n  if (intervals.length <= 1) return intervals;\n\n  // Sort by start time\n  intervals.sort((a, b) => a[0] - b[0]);\n\n  const merged: number[][] = [intervals[0]];\n\n  for (let i = 1; i < intervals.length; i++) {\n    const current = intervals[i];\n    const lastMerged = merged[merged.length - 1];\n\n    if (current[0] <= lastMerged[1]) {\n      // Overlap: merge by extending the end\n      lastMerged[1] = Math.max(lastMerged[1], current[1]);\n    } else {\n      // No overlap: add as new interval\n      merged.push(current);\n    }\n  }\n\n  return merged;\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n log n) — dominated by sorting\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) — storing merged intervals"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Variations Google asks:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Insert Interval (LeetCode 57)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Non-overlapping Intervals (LeetCode 435)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Meeting Rooms II (minimum meeting rooms needed)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-text-justification",
      children: "Problem 8: Text Justification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of words and a max width per line, format the text such that each line has exactly maxWidth characters, fully justified (left and right). The last line is left-justified."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Context:"
      }), " This is one of Google's most infamous implementation-heavy problems — tests attention to detail and handling of edge cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16\nOutput:\n[\n  \"This    is    an\",\n  \"example  of text\",\n  \"justification.  \"\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution — O(n × L) time, O(n) space"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function fullJustify(words: string[], maxWidth: number): string[] {\n  const result: string[] = [];\n  let index = 0;\n\n  while (index < words.length) {\n    // Step 1: Find words that fit in this line\n    let lineStart = index;\n    let lineLength = words[index].length;\n    index++;\n\n    while (index < words.length) {\n      if (lineLength + 1 + words[index].length > maxWidth) break;\n      lineLength += 1 + words[index].length;\n      index++;\n    }\n\n    const lineWords = words.slice(lineStart, index);\n    const wordCount = lineWords.length;\n\n    // Step 2: Build the line\n    const line = buildLine(lineWords, wordCount, maxWidth, index === words.length);\n    result.push(line);\n  }\n\n  return result;\n}\n\nfunction buildLine(\n  words: string[],\n  wordCount: number,\n  maxWidth: number,\n  isLastLine: boolean\n): string {\n  const totalCharLength = words.reduce((sum, w) => sum + w.length, 0);\n  let totalSpaces = maxWidth - totalCharLength;\n\n  if (wordCount === 1 || isLastLine) {\n    // Left-justified: single space between words, remaining spaces at end\n    let line = words.join(' ');\n    line += ' '.repeat(maxWidth - line.length);\n    return line;\n  }\n\n  // Fully justified: distribute spaces\n  const gaps = wordCount - 1;\n  const spacePerGap = Math.floor(totalSpaces / gaps);\n  let extraSpaces = totalSpaces % gaps;\n\n  let line = '';\n  for (let i = 0; i < words.length - 1; i++) {\n    line += words[i];\n    line += ' '.repeat(spacePerGap + (i < extraSpaces ? 1 : 0));\n  }\n  line += words[words.length - 1]; // Last word has no trailing spaces\n\n  return line;\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n × L) where L = maxWidth (building strings of length maxWidth)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) — storing the result"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key complexities:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Distributing extra spaces evenly (left to right)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Handling single-word lines"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Last line is left-justified"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Per-word space calculation"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-system-design-3-problems",
      children: "Section 2: System Design (3 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-sd-1-design-google-docs-real-time-collaborative-document-editor",
      children: "Problem SD-1: Design Google Docs (Real-time Collaborative Document Editor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design a real-time collaborative document editing system like Google Docs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart TB\n    subgraph \"Google Docs Architecture\"\n        A[Client Browser] --> B[WebSocket Gateway]\n        A --> C[CDN<br/>Static Assets]\n        B --> D[Document Service]\n        D --> E[Operation Queue]\n        E --> F[Operational Transform<br/>OT Engine]\n        F --> G[Document Store<br/>Bigtable]\n        F --> H[Revision History<br/>Colossus FS]\n        B --> I[Notification Service]\n        I --> J[Presence<br/>Who's Online]\n        D --> K[Access Control<br/>Google Auth]\n    end\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core Problem:"
        }), " How do multiple users edit the same document simultaneously without conflicts?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach: Operational Transformation (OT)"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Concept"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Operation"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "A single edit: insert(\"hello\", position 5) or delete(3, position 10)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Version Vector"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Each user tracks their operation version"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Transformation"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "When concurrent ops conflict, transform them to apply correctly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Consistency"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "All users eventually see the same document state"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Components:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Component"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Technology"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Real-time Sync"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "WebSocket"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bidirectional low-latency communication"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "OT Engine"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Custom"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transform concurrent operations"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Storage"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bigtable (for docs), Colossus (for revisions)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Scalable, high-availability"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auth"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Google Auth / OAuth 2.0"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Access control"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CDN"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Google Global Cache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Static assets"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Model:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Document {\n  docId: string,\n  content: CRDT_String,  // Conflict-free replicated data type\n  revisions: Revision[],\n  collaborators: User[],\n  createdAt: timestamp,\n  modifiedAt: timestamp\n}\n\nOperation {\n  type: INSERT | DELETE | FORMAT,\n  position: number,\n  data: string,\n  userId: string,\n  version: number,\n  timestamp: number\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each document is a separate OT session"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Load balance documents across OT servers by docId hash"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Read replicas for viewing (eventual consistency)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write master per document partition"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trade-off: OT vs CRDT:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Approach"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Pros"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Cons"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "OT"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Low bandwidth, proven in Google Docs"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Complex transformation logic, centralized"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CRDT"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Decentralized, no central server"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Higher metadata overhead, more bandwidth"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google-specific:"
        }), " Google Docs originally built on OT. Today they've moved towards a hybrid approach for offline support."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-sd-2-design-google-search",
      children: "Problem SD-2: Design Google Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design a web search engine like Google."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart TB\n    subgraph \"Google Search Architecture\"\n        A[Web Crawler] --> B[URL Frontier]\n        B --> C[Downloader]\n        C --> D[Parser]\n        D --> E[Indexer]\n        E --> F[Forward Index]\n        F --> G[Inverted Index<br/>Bigtable]\n        H[User Query] --> I[Query Parser]\n        I --> J[Search Backend]\n        G --> J\n        J --> K[Ranking Engine<br/>PageRank + ML]\n        K --> L[Snippet Generator]\n        L --> M[Search Results Page]\n    end\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Components:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Component"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Scale"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Implementation"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Crawler"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Billions of pages"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Distributed, respectful (robots.txt)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Index"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "100+ PB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Inverted index, sharded by term"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ranking"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "200+ signals"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PageRank + RankBrain (ML) + BERT"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Query"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "100k+ QPS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Real-time, <100ms latency"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverted Index Design:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Term → [ (docId, frequency, positions), ... ]\n\"google\" → [ (doc1, 5, [10, 45, 102]), (doc432, 2, [7, 89]), ... ]\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Query Processing Flow:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Parse query (spell check, synonyms, entity recognition)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Find matching documents via inverted index"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rank by relevance (TF-IDF + PageRank + ML signals)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Generate snippets with query term highlighting"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Return top 10 results (typically)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ranking Signals:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Signal"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Weight"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "PageRank"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Link-based authority"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Keyword matches"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Title, URL, content relevance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Freshness"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Medium"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Recency for news"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "User engagement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Medium"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Click-through rate"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Location"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Low"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Geo-relevance"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling Strategy:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Shard inverted index by term (consistent hashing)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Replicate popular term shards"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Tiered storage: SSD for hot terms, HDD for cold"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Global load balancing via anycast"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google-specific insight:"
        }), " Google's advantage comes from: (1) massive index coverage, (2) PageRank algorithm (original innovation), (3) ML-based ranking (RankBrain, BERT, MUM), (4) infrastructure scale (custom servers, networking, data centers)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-sd-3-design-youtube",
      children: "Problem SD-3: Design YouTube"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design a video streaming platform like YouTube."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Solution"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart TB\n    subgraph \"YouTube Architecture\"\n        A[Upload] --> B[Upload Service]\n        B --> C[Transcoder]\n        C --> D1[480p MP4]\n        C --> D2[720p MP4]\n        C --> D3[1080p MP4]\n        C --> D4[4K MP4]\n        D1 --> E[Content Delivery Network<br/>Google Global Cache]\n        D2 --> E\n        D3 --> E\n        D4 --> E\n        F[User Request] --> G[Load Balancer]\n        G --> H[API Server]\n        H --> I[Video Metadata<br/>Bigtable/Spanner]\n        H --> J[Recommendation Engine<br/>ML Model]\n        H --> E\n    end\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Numbers:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "500+ hours of video uploaded per minute"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "1+ billion hours watched daily"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "2+ billion monthly active users"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Major Subsystems:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Subsystem"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Function"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Technology"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Upload"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Accept video files, metadata"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resumable upload, chunked"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Transcode"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Convert to multiple formats, resolutions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "VP9, AV1 codecs"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Storage"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Store original + transcoded videos"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Google Colossus FS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CDN"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Edge caching for popular videos"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Google Global Cache (6000+ edge nodes)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Recommendation"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Personalize video suggestions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Deep neural network (YouTube DNN)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Search"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Video search with metadata"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Inverted index + ML ranking"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Video Upload Flow:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Client uploads video (resumable, chunked)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Upload service stores original in Colossus"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Transcoding pipeline creates multiple resolutions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Thumbnail generation (multiple options)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Content moderation (automated + manual)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Metadata indexed for search"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Video published to CDN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive Bitrate Streaming:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Client requests manifest (.m3u8 for HLS or .mpd for DASH)\nServer returns playlist of available quality levels\nClient selects quality based on bandwidth:\n  - 4K: 20+ Mbps\n  - 1080p: 5 Mbps\n  - 720p: 2.5 Mbps\n  - 480p: 1 Mbps\n  - 360p: 0.5 Mbps\nClient switches quality dynamically\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CDN Strategy:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cache popular videos at edge nodes closest to users"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Long-tail content served from regional caches"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Most popular content (1% of videos → 80% of views) is CDN-optimized"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Google Global Cache deployed within ISP networks"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation System:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Simplified YouTube recommendation scoring\ninterface VideoFeatures {\n  videoId: string;\n  watchTime: number;\n  clickRate: number;\n  recency: number;\n  userHistorySimilarity: number;\n}\n\nfunction scoreVideo(features: VideoFeatures, weights: number[]): number {\n  return (\n    features.watchTime * weights[0] +\n    features.clickRate * weights[1] +\n    features.recency * weights[2] +\n    features.userHistorySimilarity * weights[3]\n  );\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key design challenges:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scale:"
          }), " 500 hrs/min upload → massive storage & transcoding pipeline"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Latency:"
          }), " First-byte < 1 second globally → CDN with edge caching"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost:"
          }), " Bandwidth is the biggest cost → optimize encoding, use CDN"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Freshness:"
          }), " Trending videos spread fast → cache invalidation strategy"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-googleyness--behavioral-10-questions",
      children: "Section 3: Googleyness & Behavioral (10 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-tell-me-about-a-time-you-led-through-ambiguity-googleyness--comfort-with-ambiguity",
      children: "Q1: Tell me about a time you led through ambiguity. (Googleyness — Comfort with Ambiguity)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Google values engineers who can structure problems themselves. Show you can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define success metrics when there's no clear target"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make progress without complete information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterate based on feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Sample Response"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Situation:"
        }), " My team was tasked with reducing customer churn, but no one had defined what \"churn risk\" meant or how to measure it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " I started by analyzing 6 months of user behavior data to identify patterns that preceded account cancellation. I found 3 leading indicators: (1) 14+ days without login, (2) support ticket filed in last 7 days, (3) feature usage drop > 50%. I built a churn risk score combining these factors and implemented an automated email campaign targeting users with score > 0.7."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Churn rate reduced by 15% in 3 months. The score became the team's primary success metric. I documented the methodology for reuse across product teams."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-tell-me-about-a-time-you-had-a-disagreement-with-a-peer-googleyness--collaboration",
      children: "Q2: Tell me about a time you had a disagreement with a peer. (Googleyness — Collaboration)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Show that you prioritize the best idea, not your idea. Use data to resolve conflicts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Sample Response"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Situation:"
        }), " A teammate wanted to rewrite our legacy frontend in React. I advocated for incremental migration to avoid a 6-month rewrite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " I proposed a compromise: we identified the 3 most pain-prone components and migrated those first. We A/B tested the new components against the old ones. The data showed React reduced page load time by 40% for those components but had a learning curve cost. We agreed to continue the incremental approach."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Full migration took 10 months instead of 6, but we shipped features throughout and maintained 99.9% uptime. The team agreed the incremental approach was the right call."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-describe-the-most-technically-challenging-problem-youve-solved-problem-solving",
      children: "Q3: Describe the most technically challenging problem you've solved. (Problem Solving)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Pick a genuinely hard problem. Walk through your thought process step by step. Show:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How you broke down the problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple approaches you considered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why you chose the approach you did"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What you learned"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-stay-current-with-technology-learning",
      children: "Q4: How do you stay current with technology? (Learning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Show genuine intellectual curiosity. Google wants engineers who learn for fun, not just for work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Good responses:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Follow specific engineering blogs (Google AI Blog, ACM Queue)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Contribute to open source projects"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Build side projects with new technologies"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Read research papers (ArXiv, specifically ML/systems papers)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Attend conferences (or watch talks on YouTube)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Participate in internal tech talks / knowledge sharing"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-tell-me-about-a-project-that-failed-what-did-you-learn-humility--learning",
      children: "Q5: Tell me about a project that failed. What did you learn? (Humility & Learning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Don't blame others. Show you analyzed the failure and changed your approach. Demonstrating growth from failure is more impressive than a string of successes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-design-a-feature-thats-never-been-built-before-product-sense",
      children: "Q6: How would you design a feature that's never been built before? (Product Sense)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Framework:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Understand the user need:"
          }), " Who has this problem? How do we know?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Define success:"
          }), " What metric proves this feature works?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Brainstorm solutions:"
          }), " 3+ approaches, including unconventional ones"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prototype and test:"
          }), " The fastest path to learning"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Iterate:"
          }), " Based on data, not opinion"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-tell-me-about-a-time-you-influenced-someone-without-authority-leadership",
      children: "Q7: Tell me about a time you influenced someone without authority. (Leadership)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Google values \"leading from wherever you sit.\" Show:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You identified a problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built consensus without being the boss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used data and persuasion, not authority"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-approach-making-decisions-with-incomplete-data-comfort-with-ambiguity",
      children: "Q8: How do you approach making decisions with incomplete data? (Comfort with Ambiguity)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Framework:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify what we know"
          }), " (even if it's little)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify what we can learn"
          }), " (fastest experiment to gather data)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decide with a confidence threshold"
          }), " (80% info → decide)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build feedback loops"
          }), " (measure outcome, pivot if wrong)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-describe-a-time-you-improved-a-process-or-system-significantly-impact",
      children: "Q9: Describe a time you improved a process or system significantly. (Impact)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Quantify everything. \"I improved performance by 50%\" is good. \"I reduced P95 latency from 2.3s to 450ms by implementing connection pooling and adding a Redis cache layer, saving $12k/month in compute costs\" is better."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-why-google-what-would-you-work-on-here-motivation",
      children: "Q10: Why Google? What would you work on here? (Motivation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.b, {
          children: "Strategy:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Don't say \"Google is a great company\" — everyone says that. Instead:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name specific Google products or teams"
          }), " you're excited about"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect your skills to their challenges"
          }), " (scale, ML, infrastructure)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Show you understand Google's engineering culture"
          }), " (code reviews, testing, psychological safety)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Be specific about impact"
          }), " you'd want to make"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Example: \"I've been following Google's work on Pathways and the next-gen language models. My experience with large-scale distributed training at [company] aligns well with the infrastructure challenges in that space. I want to contribute to making AI more accessible and useful.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-preparation-strategy",
      children: "Google Preparation Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-preparation-8-12-weeks",
      children: "Coding Preparation (8-12 weeks)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problems/Day"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks 1-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays, Strings, Hash Maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4 easy → medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks 3-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trees, Graphs, Recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 medium → hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks 5-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 medium → hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks 7-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced: Tries, Union Find, Topological Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks 9-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed practice + Mock interviews"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 varied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks 11-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed + Accuracy + System Design (if L5+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-design-focus-areas",
      children: "System Design Focus Areas"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google-Specific Cases"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MapReduce, Pub/Sub, Bigtable design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus (Paxos/Raft), Distributed transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search & Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index, PageRank, Query understanding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File systems (GFS/Colossus), Object storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI/ML Infra"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training pipelines, Model serving"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "behavioral-themes",
      children: "Behavioral Themes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Theme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google Cares About"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cognitive ability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How you think, not what you know"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Role-related knowledge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth in your area (generalist or specialist)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leadership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Influence without authority"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Googleyness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comfort with ambiguity, collaboration, intellectual curiosity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter provided a comprehensive Google SWE question bank covering the hardest coding patterns Google is known for: binary search partition (Median of Two Arrays), graph-based topological sort (Alien Dictionary), 2D DP (Regex Matching), DFS+memo (Longest Increasing Path), and implementation-heavy problems (Text Justification). The 3 system design problems cover search, documents, and video — core Google products. The 10 behavioral questions map to Google's Googleyness criteria with structured response frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google prioritizes problem-solving process over solutions."
        }), " A candidate who arrives at a suboptimal solution with great communication may score higher than someone who silently codes the optimal solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coding interviews are 45 minutes of structured communication."
        }), " Explain your approach before coding. Talk through trade-offs. Verify with examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System design for L4+ only."
        }), " L3 (entry-level) candidates get 3-4 coding rounds, no system design. L4+ candidates get 1 system design round."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Hiring Committee is the final gate."
        }), " Even if all interviewers give \"Hire,\" the committee can still say no based on leveling concerns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⭐ Must-Know Patterns:"
        }), " Binary search on answer, BFS/DFS on graphs, DP with memoization, Topological sort, Sliding window with hash map."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Have 5+ questions for your interviewers."
        }), " Google values intellectual curiosity. Smart questions demonstrate engagement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What algorithmic technique gives O(log(min(m,n))) for finding median of two sorted arrays?\na) Divide and conquer  b) Binary search on partitions  c) Two pointers  d) Merge and find"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: b) Binary search on partitions"
      }), "\nWe binary search on the smaller array to find the correct partition point that divides both arrays into left (smaller) and right (larger) halves.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " In Google's search system, what data structure enables O(1) lookup of documents containing a word?\na) Forward index  b) B-tree  c) Inverted index  d) Hash map"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: c) Inverted index"
      }), "\nThe inverted index maps each term to a list of documents containing that term, enabling fast boolean queries.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does \"Googleyness\" primarily assess?\na) Knowledge of Google products  b) Comfort with ambiguity, collaboration, intellectual curiosity  c) Programming language fluency  d) Years of experience"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: b) Comfort with ambiguity, collaboration, intellectual curiosity"
      }), "\nGoogleyness evaluates cultural fit: how you handle ambiguity, work with others, and approach learning.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In the Alien Dictionary problem, what algorithm finds the character order?\na) DFS traversal  b) Bellman-Ford  c) Topological sort  d) Dijkstra's algorithm"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: c) Topological sort"
      }), "\nThe character dependencies form a DAG. Topological sort (Kahn's algorithm or DFS-based) extracts the ordering.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which consistency model does Google Docs primarily use?\na) Strong consistency  b) Eventual consistency  c) Causal consistency  d) Sequential consistency"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: c) Causal consistency"
      }), "\nGoogle Docs uses Operational Transformation which preserves causal order — operations from the same user are applied in order, and concurrent operations are transformed.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coding:"
        }), " Solve \"Longest Consecutive Sequence\" (LeetCode 128) — Google asks this frequently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coding:"
        }), " Implement \"Minimum Window Substring\" (LeetCode 76) — Google hard, tests sliding window mastery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Design:"
        }), " Design Google's recommendation system for YouTube."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behavioral:"
        }), " Write a full STAR response for \"Tell me about a time you influenced a team decision.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coding:"
        }), " Solve \"First Missing Positive\" (LeetCode 41) — Google classic, O(n) time, O(1) space."]
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