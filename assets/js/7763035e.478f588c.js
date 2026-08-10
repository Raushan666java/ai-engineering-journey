"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[19509],{

/***/ 63625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_coding_problems_09_backtracking_md_776_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-coding-problems-09-backtracking-md-776.json
const site_docs_courses_coding_problems_09_backtracking_md_776_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/coding-problems/09-backtracking","title":"Chapter 09: Backtracking","description":"Backtracking is a systematic way to explore all possible configurations of a solution space. It incrementally builds candidates and abandons them (backtracks) when they cannot lead to a valid solution.","source":"@site/docs/courses/coding-problems/09-backtracking.md","sourceDirName":"courses/coding-problems","slug":"/coding-problems/09-backtracking","permalink":"/ai-engineering-journey/coding-problems/09-backtracking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-backtracking","slug":"/coding-problems/09-backtracking","title":"Chapter 09: Backtracking","sidebar_label":"Chapter 09: Backtracking","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 08: Greedy Algorithms","permalink":"/ai-engineering-journey/coding-problems/08-greedy"},"next":{"title":"Blockchain Technology — Complete University Textbook","permalink":"/ai-engineering-journey/blockchain"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/coding-problems/09-backtracking.md


const frontMatter = {
	id: '09-backtracking',
	slug: '/coding-problems/09-backtracking',
	title: 'Chapter 09: Backtracking',
	sidebar_label: 'Chapter 09: Backtracking',
	sidebar_position: 9
};
const contentTitle = 'Chapter 09: Backtracking';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Problem Classification Flow",
  "id": "problem-classification-flow",
  "level": 2
}, {
  "value": "Backtracking Patterns",
  "id": "backtracking-patterns",
  "level": 2
}, {
  "value": "Complexity Decision Tree",
  "id": "complexity-decision-tree",
  "level": 2
}, {
  "value": "Easy Problems (3)",
  "id": "easy-problems-3",
  "level": 2
}, {
  "value": "Problem 1: Subsets (Power Set)",
  "id": "problem-1-subsets-power-set",
  "level": 3
}, {
  "value": "Problem 2: Binary Watch",
  "id": "problem-2-binary-watch",
  "level": 3
}, {
  "value": "Problem 3: Letter Case Permutation",
  "id": "problem-3-letter-case-permutation",
  "level": 3
}, {
  "value": "Medium Problems (8)",
  "id": "medium-problems-8",
  "level": 2
}, {
  "value": "Problem 4: Permutations",
  "id": "problem-4-permutations",
  "level": 3
}, {
  "value": "Problem 5: Permutations II (with duplicates)",
  "id": "problem-5-permutations-ii-with-duplicates",
  "level": 3
}, {
  "value": "Problem 6: Combination Sum",
  "id": "problem-6-combination-sum",
  "level": 3
}, {
  "value": "Problem 7: Combination Sum II",
  "id": "problem-7-combination-sum-ii",
  "level": 3
}, {
  "value": "Problem 8: Subsets II (with duplicates)",
  "id": "problem-8-subsets-ii-with-duplicates",
  "level": 3
}, {
  "value": "Problem 9: Word Search",
  "id": "problem-9-word-search",
  "level": 3
}, {
  "value": "Problem 10: Generate Parentheses",
  "id": "problem-10-generate-parentheses",
  "level": 3
}, {
  "value": "Problem 11: Palindrome Partitioning",
  "id": "problem-11-palindrome-partitioning",
  "level": 3
}, {
  "value": "Problem 12: Restore IP Addresses",
  "id": "problem-12-restore-ip-addresses",
  "level": 3
}, {
  "value": "Hard Problems (4)",
  "id": "hard-problems-4",
  "level": 2
}, {
  "value": "Problem 13: N-Queens",
  "id": "problem-13-n-queens",
  "level": 3
}, {
  "value": "Problem 14: Sudoku Solver",
  "id": "problem-14-sudoku-solver",
  "level": 3
}, {
  "value": "Problem 15: Combinations",
  "id": "problem-15-combinations",
  "level": 3
}, {
  "value": "Advanced Backtracking Concepts",
  "id": "advanced-backtracking-concepts",
  "level": 3
}, {
  "value": "Pruning Strategies",
  "id": "pruning-strategies",
  "level": 4
}, {
  "value": "Time Complexity Analysis",
  "id": "time-complexity-analysis",
  "level": 4
}, {
  "value": "Backtracking vs Other Approaches",
  "id": "backtracking-vs-other-approaches",
  "level": 4
}, {
  "value": "Backtracking Algorithm Template",
  "id": "backtracking-algorithm-template",
  "level": 4
}, {
  "value": "Common Interview Mistakes",
  "id": "common-interview-mistakes",
  "level": 4
}, {
  "value": "Performance Optimization Tips",
  "id": "performance-optimization-tips",
  "level": 4
}, {
  "value": "Summary Table",
  "id": "summary-table",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    number: "number",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    string: "string",
    strong: "strong",
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
        id: "chapter-09-backtracking",
        children: "Chapter 09: Backtracking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Backtracking is a systematic way to explore all possible configurations of a solution space. It incrementally builds candidates and abandons them (backtracks) when they cannot lead to a valid solution."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the backtracking framework: choose, explore, un-choose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement pruning strategies to eliminate dead ends early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve combinatorial problems: permutations, combinations, subsets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply constraint satisfaction to puzzles like N-Queens and Sudoku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model search problems with recursion and state management"
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
        href: "../../assets/images/lessons/coding-problems/09-backtracking/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/coding-problems/09-backtracking/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/coding-problems/09-backtracking/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/coding-problems/09-backtracking/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/coding-problems/09-backtracking/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/coding-problems/09-backtracking/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-classification-flow",
      children: "Problem Classification Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`mermaid\nflowchart TD\nA[Backtracking Problem] --> B{Type?}\nB -->|Permutations| C[All arrangements of elements]\nB -->|Subsets| D[All combinations / power set]\nB -->|Combinatorial| E[Choose k from n]\nB -->|Constraint Sat| F[N-Queens / Sudoku]\nB -->|Graph Search| G[Word Search / Paths]\nB -->|Partitioning| H[Palindrome partitioning]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C --> I[Backtrack with visited array]\nD --> J[Include / Exclude pattern]\nE --> K[Prune when count = k]\nF --> L[Validate before placing]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backtracking-patterns",
      children: "Backtracking Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid mindmap   root((Backtracking Patterns))     Subsets       Pick/not-pick       Power set       Unique combinations     Permutations       All arrangements       With duplicates       Next permutation     Combinations       Choose k elements       Sum to target     Constraint       N-Queens       Sudoku       Crossword     Search       Word search       Path in matrix       Knight's tour     Partitioning       Palindrome partition       IP address restore "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-decision-tree",
      children: "Complexity Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Backtracking] --> B{Pruning possible?}     B -->|Strong| C[O(n!) -> O(branches^depth)]     B -->|Weak| D[Full enumeration O(n!)]     C --> E{Use memo?}     E -->|Yes| F[DP + Backtrack -> faster]     E -->|No| G[Pure recursion] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-3",
      children: "Easy Problems (3)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-subsets-power-set",
      children: "Problem 1: Subsets (Power Set)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Array, Bit Manipulation]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of unique integers, return all possible subsets (the power set)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 2, 3] Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= nums.length <= 10"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtracking:"
        }), " For each element, include or exclude it recursively."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bit Manipulation:"
        }), " Use bits 0..(2^n-1) to represent inclusion."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction subsets(nums: number[]): number[][] {\nconst result: number[][] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, current: number[]) => {\nresult.push([...current]);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = start; i < nums.length; i++) {\n  current.push(nums[i]);\n  backtrack(i + 1, current);\n  current.pop();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, []);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(subsets([1, 2, 3])); // [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]] console.log(subsets([0])); // [[], [0]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n x 2^n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n x 2^n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-binary-watch",
      children: "Problem 2: Binary Watch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Bit Manipulation]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A binary watch has 4 LEDs for hours (0-11) and 6 for minutes (0-59). Given turnedOn (number of lit LEDs), return all possible times."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: turnedOn = 1 Output: [\\\"0:01\\\",\\\"0:02\\\",\\\"0:04\\\",\\\"0:08\\\",\\\"0:16\\\",\\\"0:32\\\",\\\"1:00\\\",\\\"2:00\\\",\\\"4:00\\\",\\\"8:00\\\"]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction readBinaryWatch(turnedOn: number): string[] {\nconst result: string[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (hour: number, minute: number, idx: number, count: number) => {\nif (hour > 11 || minute > 59) return;\nif (count === turnedOn) {\nconst time = hour + ':' + minute.toString().padStart(2, '0');\nresult.push(time);\nreturn;\n}\nif (idx >= 10 || count > turnedOn) return;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (idx < 4) {\n  backtrack(hour + (1 << idx), minute, idx + 1, count + 1);\n} else {\n  backtrack(hour, minute + (1 << (idx - 4)), idx + 1, count + 1);\n}\n\nbacktrack(hour, minute, idx + 1, count);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, 0, 0, 0);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(readBinaryWatch(1)); // [\\\"0:01\\\",\\\"0:02\\\",\\\"0:04\\\",\\\"0:08\\\",\\\"0:16\\\",\\\"0:32\\\",\\\"1:00\\\",\\\"2:00\\\",\\\"4:00\\\",\\\"8:00\\\"] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(2^10) = O(1)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-letter-case-permutation",
      children: "Problem 3: Letter Case Permutation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, String, Bit Manipulation]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s, transform each letter to lowercase or uppercase to create all possible permutations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \\\"a1b2\\\" Output: [\\\"a1b2\\\",\\\"a1B2\\\",\\\"A1b2\\\",\\\"A1B2\\\"]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction letterCasePermutation(s: string): string[] {\nconst result: string[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (idx: number, current: string[]) => {\nif (idx === s.length) {\nresult.push(current.join(''));\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const ch = s[idx];\nif (ch >= '0' && ch <= '9') {\n  current.push(ch);\n  backtrack(idx + 1, current);\n  current.pop();\n} else {\n  current.push(ch.toLowerCase());\n  backtrack(idx + 1, current);\n  current.pop();\n\n  current.push(ch.toUpperCase());\n  backtrack(idx + 1, current);\n  current.pop();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, []);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(letterCasePermutation(\\\"a1b2\\\")); // [\\\"a1b2\\\",\\\"a1B2\\\",\\\"A1b2\\\",\\\"A1B2\\\"] console.log(letterCasePermutation(\\\"3z4\\\")); // [\\\"3z4\\\",\\\"3Z4\\\"] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n x 2^n) where n = number of letters\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n x 2^n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "medium-problems-8",
      children: "Medium Problems (8)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-permutations",
      children: "Problem 4: Permutations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of distinct integers, return all possible permutations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 2, 3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= nums.length <= 6"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction permute(nums: number[]): number[][] {\nconst result: number[][] = [];\nconst visited = new Array(nums.length).fill(false);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (current: number[]) => {\nif (current.length === nums.length) {\nresult.push([...current]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 0; i < nums.length; i++) {\n  if (visited[i]) continue;\n  visited[i] = true;\n  current.push(nums[i]);\n  backtrack(current);\n  current.pop();\n  visited[i] = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack([]);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] console.log(permute([0, 1])); // [[0,1],[1,0]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n x n!)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-permutations-ii-with-duplicates",
      children: "Problem 5: Permutations II (with duplicates)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array that may contain duplicates, return all unique permutations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 1, 2] Output: [[1,1,2],[1,2,1],[2,1,1]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction permuteUnique(nums: number[]): number[][] {\nconst result: number[][] = [];\nnums.sort((a, b) => a - b);\nconst visited = new Array(nums.length).fill(false);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (current: number[]) => {\nif (current.length === nums.length) {\nresult.push([...current]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 0; i < nums.length; i++) {\n  if (visited[i]) continue;\n  if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;\n\n  visited[i] = true;\n  current.push(nums[i]);\n  backtrack(current);\n  current.pop();\n  visited[i] = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack([]);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n x n!)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-combination-sum",
      children: "Problem 6: Combination Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given distinct integers and a target, find all unique combinations where the numbers sum to target. Same number may be reused."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: candidates = [2, 3, 6, 7], target = 7 Output: [[2,2,3],[7]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= candidates.length <= 30"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction combinationSum(candidates: number[], target: number): number[][] {\nconst result: number[][] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, current: number[], remaining: number) => {\nif (remaining === 0) {\nresult.push([...current]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = start; i < candidates.length; i++) {\n  if (candidates[i] > remaining) continue;\n\n  current.push(candidates[i]);\n  backtrack(i, current, remaining - candidates[i]);\n  current.pop();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, [], target);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]] console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n^(target/min)) -- exponential\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(target/min)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-combination-sum-ii",
      children: "Problem 7: Combination Sum II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Same as Combination Sum but each number may be used only once, and array may have duplicates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: candidates = [10,1,2,7,6,1,5], target = 8 Output: [[1,1,6],[1,2,5],[1,7],[2,6]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction combinationSum2(candidates: number[], target: number): number[][] {\nconst result: number[][] = [];\ncandidates.sort((a, b) => a - b);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, current: number[], remaining: number) => {\nif (remaining === 0) {\nresult.push([...current]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = start; i < candidates.length; i++) {\n  if (candidates[i] > remaining) break;\n  if (i > start && candidates[i] === candidates[i - 1]) continue;\n\n  current.push(candidates[i]);\n  backtrack(i + 1, current, remaining - candidates[i]);\n  current.pop();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, [], target);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(2^n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-subsets-ii-with-duplicates",
      children: "Problem 8: Subsets II (with duplicates)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Array]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array that may contain duplicates, return all unique subsets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: nums = [1, 2, 2] Output: [[], [1], [1,2], [1,2,2], [2], [2,2]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction subsetsWithDup(nums: number[]): number[][] {\nconst result: number[][] = [];\nnums.sort((a, b) => a - b);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, current: number[]) => {\nresult.push([...current]);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = start; i < nums.length; i++) {\n  if (i > start && nums[i] === nums[i - 1]) continue;\n  current.push(nums[i]);\n  backtrack(i + 1, current);\n  current.pop();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, []);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(subsetsWithDup([1, 2, 2])); // [[], [1], [1,2], [1,2,2], [2], [2,2]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n x 2^n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n x 2^n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-word-search",
      children: "Problem 9: Word Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Matrix, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an m x n board of letters and a word, determine if the word exists in the grid (adjacent cells, no reuse)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: board = [[\\\"A\\\",\\\"B\\\",\\\"C\\\",\\\"E\\\"],[\\\"S\\\",\\\"F\\\",\\\"C\\\",\\\"S\\\"],[\\\"A\\\",\\\"D\\\",\\\"E\\\",\\\"E\\\"]], word = \\\"ABCCED\\\" Output: true"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= m, n <= 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= word.length <= 15"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction exist(board: string[][], word: string): boolean {\nconst m = board.length;\nconst n = board[0].length;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (r: number, c: number, idx: number): boolean => {\nif (idx === word.length) return true;\nif (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[idx]) return false;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const temp = board[r][c];\nboard[r][c] = '#'; // mark visited\n\nconst found = backtrack(r + 1, c, idx + 1) ||\n              backtrack(r - 1, c, idx + 1) ||\n              backtrack(r, c + 1, idx + 1) ||\n              backtrack(r, c - 1, idx + 1);\n\nboard[r][c] = temp; // restore\nreturn found;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "for (let r = 0; r < m; r++) {\nfor (let c = 0; c < n; c++) {\nif (backtrack(r, c, 0)) return true;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "return false;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript const board = [   [\\\"A\\\",\\\"B\\\",\\\"C\\\",\\\"E\\\"],   [\\\"S\\\",\\\"F\\\",\\\"C\\\",\\\"S\\\"],   [\\\"A\\\",\\\"D\\\",\\\"E\\\",\\\"E\\\"] ]; console.log(exist(board, \\\"ABCCED\\\")); // true console.log(exist(board, \\\"SEE\\\")); // true console.log(exist(board, \\\"ABCB\\\")); // false "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m x n x 4^L) where L = word length\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(L) recursion stack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-generate-parentheses",
      children: "Problem 10: Generate Parentheses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n pairs of parentheses, generate all well-formed combinations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 3 Output: [\\\"((()))\\\",\\\"(()())\\\",\\\"(())()\\\",\\\"()(())\\\",\\\"()()()\\\"]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= n <= 8"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction generateParenthesis(n: number): string[] {\nconst result: string[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (open: number, close: number, current: string) => {\nif (current.length === n * 2) {\nresult.push(current);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (open < n) backtrack(open + 1, close, current + '(');\nif (close < open) backtrack(open, close + 1, current + ')');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, 0, '');\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(generateParenthesis(3)); // [\\\"((()))\\\",\\\"(()())\\\",\\\"(())()\\\",\\\"()(())\\\",\\\"()()()\\\"] console.log(generateParenthesis(1)); // [\\\"()\\\"] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(4^n / sqrt(n)) -- Catalan number\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-palindrome-partitioning",
      children: "Problem 11: Palindrome Partitioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, String, DP]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string, partition it such that every substring is a palindrome. Return all possible palindromic partitions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \\\"aab\\\" Output: [[\\\"a\\\",\\\"a\\\",\\\"b\\\"],[\\\"aa\\\",\\\"b\\\"]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= s.length <= 16"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction partition(s: string): string[][] {\nconst result: string[][] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const isPalindrome = (str: string): boolean => {\nlet left = 0, right = str.length - 1;\nwhile (left < right) {\nif (str[left] !== str[right]) return false;\nleft++;\nright--;\n}\nreturn true;\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, current: string[]) => {\nif (start >= s.length) {\nresult.push([...current]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let end = start + 1; end <= s.length; end++) {\n  const substr = s.substring(start, end);\n  if (isPalindrome(substr)) {\n    current.push(substr);\n    backtrack(end, current);\n    current.pop();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, []);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(partition(\\\"aab\\\")); // [[\\\"a\\\",\\\"a\\\",\\\"b\\\"],[\\\"aa\\\",\\\"b\\\"]] console.log(partition(\\\"a\\\")); // [[\\\"a\\\"]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n x 2^n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-restore-ip-addresses",
      children: "Problem 12: Restore IP Addresses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string of digits, return all valid IP addresses that can be formed by inserting dots."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \\\"25525511135\\\" Output: [\\\"255.255.11.135\\\",\\\"255.255.111.35\\\"]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 <= s.length <= 20"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction restoreIpAddresses(s: string): string[] {\nconst result: string[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, parts: number, current: string) => {\nif (parts === 4 && start === s.length) {\nresult.push(current);\nreturn;\n}\nif (parts === 4 || start >= s.length) return;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let len = 1; len <= 3 && start + len <= s.length; len++) {\n  const segment = s.substring(start, start + len);\n  if (len > 1 && segment[0] === '0') continue;\n  if (parseInt(segment) > 255) continue;\n\n  const prefix = parts === 0 ? '' : '.';\n  backtrack(start + len, parts + 1, current + prefix + segment);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0, 0, '');\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(restoreIpAddresses(\\\"25525511135\\\")); // [\\\"255.255.11.135\\\",\\\"255.255.111.35\\\"] console.log(restoreIpAddresses(\\\"0000\\\")); // [\\\"0.0.0.0\\\"] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(3^4) = O(1)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hard-problems-4",
      children: "Hard Problems (4)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-n-queens",
      children: "Problem 13: N-Queens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Matrix]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Place n queens on an n x n chessboard so that no two queens attack each other. Return all distinct solutions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 4 Output: [[\\\".Q..\\\",\\\"...Q\\\",\\\"Q...\\\",\\\"..Q.\\\"],[\\\"..Q.\\\",\\\"Q...\\\",\\\"...Q\\\",\\\".Q..\\\"]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= n <= 9"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["`\typescript\nfunction solveNQueens(n: number): string[][] {\nconst result: string[][] = [];\nconst board: string[] = new Array(n).fill('.'.repeat(n));\nconst cols = new Set", (0,jsx_runtime.jsxs)(_components.number, {
        children: ["();\nconst diag1 = new Set", (0,jsx_runtime.jsxs)(_components.number, {
          children: ["(); // r + c\nconst diag2 = new Set", (0,jsx_runtime.jsx)(_components.number, {
            children: "(); // r - c"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (row: number) => {\nif (row === n) {\nresult.push([...board]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let col = 0; col < n; col++) {\n  if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) continue;\n\n  const arr = board[row].split('');\n  arr[col] = 'Q';\n  board[row] = arr.join('');\n\n  cols.add(col);\n  diag1.add(row + col);\n  diag2.add(row - col);\n\n  backtrack(row + 1);\n\n  cols.delete(col);\n  diag1.delete(row + col);\n  diag2.delete(row - col);\n\n  arr[col] = '.';\n  board[row] = arr.join('');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(0);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(solveNQueens(4)); // [[\\\".Q..\\\",\\\"...Q\\\",\\\"Q...\\\",\\\"..Q.\\\"],[\\\"..Q.\\\",\\\"Q...\\\",\\\"...Q\\\",\\\".Q..\\\"]] console.log(solveNQueens(1)); // [[\\\"Q\\\"]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n!)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n^2)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-sudoku-solver",
      children: "Problem 14: Sudoku Solver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Matrix, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Write a program to solve a Sudoku puzzle by filling empty cells (denoted by '.')."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: board = [[\\\"5\\\",\\\"3\\\",\\\".\\\",\\\".\\\",\\\"7\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\"],                 [\\\"6\\\",\\\".\\\",\\\".\\\",\\\"1\\\",\\\"9\\\",\\\"5\\\",\\\".\\\",\\\".\\\",\\\".\\\"],                 [\\\".\\\",\\\"9\\\",\\\"8\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"6\\\",\\\".\\\"],                 [\\\"8\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"6\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"3\\\"],                 [\\\"4\\\",\\\".\\\",\\\".\\\",\\\"8\\\",\\\".\\\",\\\"3\\\",\\\".\\\",\\\".\\\",\\\"1\\\"],                 [\\\"7\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"2\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"6\\\"],                 [\\\".\\\",\\\"6\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"2\\\",\\\"8\\\",\\\".\\\"],                 [\\\".\\\",\\\".\\\",\\\".\\\",\\\"4\\\",\\\"1\\\",\\\"9\\\",\\\".\\\",\\\".\\\",\\\"5\\\"],                 [\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"8\\\",\\\".\\\",\\\".\\\",\\\"7\\\",\\\"9\\\"]] Output: solved board (filled)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "board.length == 9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A unique solution exists."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["`\typescript\nfunction solveSudoku(board: string[][]): void {\nconst rows: Set", (0,jsx_runtime.jsxs)(_components.string, {
        children: ["[] = Array.from({ length: 9 }, () => new Set());\nconst cols: Set", (0,jsx_runtime.jsxs)(_components.string, {
          children: ["[] = Array.from({ length: 9 }, () => new Set());\nconst boxes: Set", (0,jsx_runtime.jsx)(_components.string, {
            children: "[] = Array.from({ length: 9 }, () => new Set());"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "for (let r = 0; r < 9; r++) {\nfor (let c = 0; c < 9; c++) {\nconst val = board[r][c];\nif (val !== '.') {\nrows[r].add(val);\ncols[c].add(val);\nboxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(val);\n}\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const solve = (r: number, c: number): boolean => {\nif (r === 9) return true;\nif (c === 9) return solve(r + 1, 0);\nif (board[r][c] !== '.') return solve(r, c + 1);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);\n\nfor (let num = 1; num <= 9; num++) {\n  const digit = num.toString();\n  if (rows[r].has(digit) || cols[c].has(digit) || boxes[boxIdx].has(digit)) continue;\n\n  board[r][c] = digit;\n  rows[r].add(digit);\n  cols[c].add(digit);\n  boxes[boxIdx].add(digit);\n\n  if (solve(r, c + 1)) return true;\n\n  board[r][c] = '.';\n  rows[r].delete(digit);\n  cols[c].delete(digit);\n  boxes[boxIdx].delete(digit);\n}\n\nreturn false;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "solve(0, 0);\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript const board = [   [\\\"5\\\",\\\"3\\\",\\\".\\\",\\\".\\\",\\\"7\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\"],   [\\\"6\\\",\\\".\\\",\\\".\\\",\\\"1\\\",\\\"9\\\",\\\"5\\\",\\\".\\\",\\\".\\\",\\\".\\\"],   [\\\".\\\",\\\"9\\\",\\\"8\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"6\\\",\\\".\\\"],   [\\\"8\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"6\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"3\\\"],   [\\\"4\\\",\\\".\\\",\\\".\\\",\\\"8\\\",\\\".\\\",\\\"3\\\",\\\".\\\",\\\".\\\",\\\"1\\\"],   [\\\"7\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"2\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"6\\\"],   [\\\".\\\",\\\"6\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"2\\\",\\\"8\\\",\\\".\\\"],   [\\\".\\\",\\\".\\\",\\\".\\\",\\\"4\\\",\\\"1\\\",\\\"9\\\",\\\".\\\",\\\".\\\",\\\"5\\\"],   [\\\".\\\",\\\".\\\",\\\".\\\",\\\".\\\",\\\"8\\\",\\\".\\\",\\\".\\\",\\\"7\\\",\\\"9\\\"] ]; solveSudoku(board); console.log(board); // Solved board "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(9^(81)) worst case, but pruning makes it faster\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(81) = O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-combinations",
      children: "Problem 15: Combinations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy (but included as Hard for completeness)\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Backtracking, Combinatorics]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n]."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: n = 4, k = 2 Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= n <= 20"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 <= k <= n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\typescript\nfunction combine(n: number, k: number): number[][] {\nconst result: number[][] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const backtrack = (start: number, current: number[]) => {\nif (current.length === k) {\nresult.push([...current]);\nreturn;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = start; i <= n; i++) {\n  current.push(i);\n  backtrack(i + 1, current);\n  current.pop();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backtrack(1, []);\nreturn result;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "\typescript console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]] console.log(combine(3, 1)); // [[1],[2],[3]] "
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(C(n,k) x k)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(k)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-backtracking-concepts",
      children: "Advanced Backtracking Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pruning-strategies",
      children: "Pruning Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pruning is the key to making backtracking efficient. Without pruning, backtracking explores the entire search space. With good pruning, it can solve problems with millions of candidates in milliseconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common pruning techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Feasibility pruning"
          }), " — Stop exploring if the current partial solution cannot possibly lead to a valid complete solution."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: In N-Queens, if placing a queen at (r, c) conflicts with existing queens, skip."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimality pruning (branch and bound)"
          }), " — Stop exploring if the current partial solution cannot beat the best found so far."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: In TSP, if the current path length already exceeds the best tour found, backtrack."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Symmetry pruning"
          }), " — Skip symmetrical solutions that are equivalent."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: In combinations, enforce order to avoid duplicates (start index >= previous index)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Forward checking"
          }), " — Look ahead to detect dead ends before full exploration."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: In Sudoku, check if any empty cell has no valid options."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Constraint propagation"
          }), " — Reduce the domain of future variables based on current assignments."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: In Sudoku, update possibilities for peers when a cell is filled."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "time-complexity-analysis",
      children: "Time Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The time complexity of backtracking depends on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branching factor (b)"
        }), ": Number of choices at each step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum depth (d)"
        }), ": Maximum recursion depth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pruning effectiveness"
        }), ": How many branches are cut early"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Branching Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst-case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Pruning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n, n-1, ..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(9^81)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combination Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target/min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^(t/m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "backtracking-vs-other-approaches",
      children: "Backtracking vs Other Approaches"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Combinatorial Problem] --> B{Need all solutions?}\n    B -->|Yes| C[Backtracking]\n    B -->|No, count only| D[DP / Combinatorics]\n    B -->|No, find one| E[Backtracking with pruning]\n    \n    C --> F{Optimal needed?}\n    F -->|Yes| G[Branch and Bound]\n    F -->|No| H[Basic backtracking]\n    \n    D --> I[Use recurrence relations]\n    G --> J[Upper/lower bounds + pruning]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "backtracking-algorithm-template",
      children: "Backtracking Algorithm Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function solve(problem):\n    result = []\n    state = initial_state()\n    \n    function backtrack(candidate):\n        if is_valid_solution(candidate):\n            result.add(copy(candidate))\n            return\n        \n        for each choice in get_possible_choices(candidate):\n            if is_valid_choice(candidate, choice):\n                make_choice(candidate, choice)\n                backtrack(candidate)\n                undo_choice(candidate, choice)\n    \n    backtrack(state)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "common-interview-mistakes",
      children: "Common Interview Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not restoring state"
        }), " — Always undo changes after recursion returns. Otherwise the state is corrupted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing base case"
        }), " — Ensure all paths lead to a base case to avoid infinite recursion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copying incorrectly"
        }), " — Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[...current]"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "current.slice()"
        }), " not just ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result.push(current)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inefficient validation"
        }), " — Precompute constraints (e.g., col sets for N-Queens) instead of checking on each call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not sorting for duplicates"
        }), " — Sort input and skip duplicates to avoid repeated solutions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-pruning"
        }), " — Make sure your pruning doesn't eliminate valid solutions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "performance-optimization-tips",
      children: "Performance Optimization Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use bit masks"
        }), " instead of arrays for visited states (faster and memory efficient)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precompute constraints"
        }), " before starting the recursion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use global state"
        }), " with undo rather than passing copies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Order choices wisely"
        }), " — try the most constrained options first (most valuable heuristic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use iterative deepening"
        }), " for problems where optimal depth is unknown"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-table",
      children: "Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Companies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Watch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Letter Case Permutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x n!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x n!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combination Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^(t/m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t/m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combination Sum II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsets II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(mn x 4^L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate Parentheses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(4^n/sqrt(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x 2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore IP Addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-Queens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku Solver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(9^81) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C(n,k) x k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          })]
        })]
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