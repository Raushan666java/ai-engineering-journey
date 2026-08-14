"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77082],{

/***/ 79206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_coding_problems_02_strings_md_9c9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-coding-problems-02-strings-md-9c9.json
const site_docs_courses_coding_problems_02_strings_md_9c9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/coding-problems/02-strings","title":"Chapter 02: Strings","description":"String problems test your ability to work with character arrays, pattern matching, and text manipulation. They are among the most common problems in coding interviews.","source":"@site/docs/courses/coding-problems/02-strings.md","sourceDirName":"courses/coding-problems","slug":"/coding-problems/02-strings","permalink":"/ai-engineering-journey/coding-problems/02-strings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-strings","slug":"/coding-problems/02-strings","title":"Chapter 02: Strings","sidebar_label":"Chapter 02: Strings","sidebar_position":2},"sidebar":"course-coding-problems","previous":{"title":"Chapter 01: Arrays","permalink":"/ai-engineering-journey/coding-problems/01-arrays"},"next":{"title":"Chapter 03: Linked Lists","permalink":"/ai-engineering-journey/coding-problems/03-linked-lists"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/coding-problems/02-strings.md


const frontMatter = {
	id: '02-strings',
	slug: '/coding-problems/02-strings',
	title: 'Chapter 02: Strings',
	sidebar_label: 'Chapter 02: Strings',
	sidebar_position: 2
};
const contentTitle = 'Chapter 02: Strings';

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
  "value": "String Algorithm Patterns",
  "id": "string-algorithm-patterns",
  "level": 2
}, {
  "value": "Complexity Heatmap",
  "id": "complexity-heatmap",
  "level": 2
}, {
  "value": "Easy Problems (8)",
  "id": "easy-problems-8",
  "level": 2
}, {
  "value": "Problem 1: Valid Palindrome",
  "id": "problem-1-valid-palindrome",
  "level": 3
}, {
  "value": "Problem 2: Valid Anagram",
  "id": "problem-2-valid-anagram",
  "level": 3
}, {
  "value": "Problem 3: First Unique Character in a String",
  "id": "problem-3-first-unique-character-in-a-string",
  "level": 3
}, {
  "value": "Problem 4: Reverse String",
  "id": "problem-4-reverse-string",
  "level": 3
}, {
  "value": "Problem 5: Longest Common Prefix",
  "id": "problem-5-longest-common-prefix",
  "level": 3
}, {
  "value": "Problem 6: Valid Parentheses",
  "id": "problem-6-valid-parentheses",
  "level": 3
}, {
  "value": "Problem 7: Implement strStr()",
  "id": "problem-7-implement-strstr",
  "level": 3
}, {
  "value": "Problem 8: Length of Last Word",
  "id": "problem-8-length-of-last-word",
  "level": 3
}, {
  "value": "Medium Problems (12)",
  "id": "medium-problems-12",
  "level": 2
}, {
  "value": "Problem 9: Longest Substring Without Repeating Characters",
  "id": "problem-9-longest-substring-without-repeating-characters",
  "level": 3
}, {
  "value": "Problem 10: Longest Palindromic Substring",
  "id": "problem-10-longest-palindromic-substring",
  "level": 3
}, {
  "value": "Problem 11: Group Anagrams",
  "id": "problem-11-group-anagrams",
  "level": 3
}, {
  "value": "Problem 12: String to Integer (atoi)",
  "id": "problem-12-string-to-integer-atoi",
  "level": 3
}, {
  "value": "Problem 13: Longest Repeating Character Replacement",
  "id": "problem-13-longest-repeating-character-replacement",
  "level": 3
}, {
  "value": "Problem 14: Minimum Window Substring",
  "id": "problem-14-minimum-window-substring",
  "level": 3
}, {
  "value": "Problem 15: Palindromic Substrings",
  "id": "problem-15-palindromic-substrings",
  "level": 3
}, {
  "value": "Problem 16: Encode and Decode Strings",
  "id": "problem-16-encode-and-decode-strings",
  "level": 3
}, {
  "value": "Problem 17: Longest Substring with At Least K Repeating Characters",
  "id": "problem-17-longest-substring-with-at-least-k-repeating-characters",
  "level": 3
}, {
  "value": "Problem 18: Letter Combinations of a Phone Number",
  "id": "problem-18-letter-combinations-of-a-phone-number",
  "level": 3
}, {
  "value": "Problem 19: Reverse Words in a String",
  "id": "problem-19-reverse-words-in-a-string",
  "level": 3
}, {
  "value": "Problem 20: Compare Version Numbers",
  "id": "problem-20-compare-version-numbers",
  "level": 3
}, {
  "value": "Hard Problems (5)",
  "id": "hard-problems-5",
  "level": 2
}, {
  "value": "Problem 21: Regular Expression Matching",
  "id": "problem-21-regular-expression-matching",
  "level": 3
}, {
  "value": "Problem 22: Edit Distance",
  "id": "problem-22-edit-distance",
  "level": 3
}, {
  "value": "Problem 23: Distinct Subsequences",
  "id": "problem-23-distinct-subsequences",
  "level": 3
}, {
  "value": "Problem 24: Text Justification",
  "id": "problem-24-text-justification",
  "level": 3
}, {
  "value": "Problem 25: Wildcard Matching",
  "id": "problem-25-wildcard-matching",
  "level": 3
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
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-02-strings",
        children: "Chapter 02: Strings"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "String problems test your ability to work with character arrays, pattern matching, and text manipulation. They are among the most common problems in coding interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master string traversal, manipulation, and pattern matching techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand sliding window variations for substring problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement efficient hashing strategies for anagram and pattern matching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle Unicode, whitespace, and edge cases in string parsing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply recursion and DP to string processing problems"
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
        href: "../../assets/images/lessons/coding-problems/02-strings/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/coding-problems/02-strings/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/coding-problems/02-strings/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/coding-problems/02-strings/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/coding-problems/02-strings/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/coding-problems/02-strings/visual-explanation.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[String Problem] --> B{Pattern matching?}\n    B -->|Yes| C{Substring?}\n    C -->|Yes| D[Sliding Window / KMP / Rolling Hash]\n    C -->|No| E{Anagram?}\n    E -->|Yes| F[Character Frequency Map]\n    E -->|No| G[Regex / DP / Recursion]\n    \n    B -->|No| H{Manipulation?}\n    H -->|Yes| I{Palindrome?}\n    I -->|Yes| J[Two Pointers / Expand Around Center]\n    I -->|No| K[String Builders / Reversal]\n    \n    H -->|No| L{Parsing?}\n    L -->|Yes| M[State Machine / Lookahead]\n    L -->|No| N[Hash Set / Trie]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "string-algorithm-patterns",
      children: "String Algorithm Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "mindmap\n  root((String Patterns))\n    Sliding Window\n      Longest substring\n      Minimum window\n      Distinct characters\n    Two Pointers\n      Palindrome check\n      Reverse string\n      Compare strings\n    Hashing\n      Frequency arrays\n      Rolling hash\n      Anagram grouping\n    DP\n      Edit distance\n      LCS\n      Palindromic substrings\n    Pattern Matching\n      KMP\n      Z-algorithm\n      Rabin-Karp\n    Parsing\n      State machine\n      Recursive descent\n      Lookahead\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-heatmap",
      children: "Complexity Heatmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "xychart-beta\n    title \"String Algorithm Complexities\"\n    x-axis [\"Brute Force\", \"Two Pointers\", \"HashMap\", \"DP\", \"KMP\", \"Trie\"]\n    y-axis \"Time Efficiency\" 0 --> 100\n    bar [20, 70, 75, 50, 85, 80]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-8",
      children: "Easy Problems (8)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-valid-palindrome",
      children: "Problem 1: Valid Palindrome"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"A man, a plan, a canal: Panama\"\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"race a car\"\nOutput: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 2 × 10⁵"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute Force:"
        }), " Filter string, then reverse and compare. Time O(n), Space O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal:"
        }), " Two pointers from both ends, skip non-alphanumeric chars. Time O(n), Space O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isPalindrome(s: string): boolean {\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;\n    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;\n\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++;\n    right--;\n  }\n\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isPalindrome(\"A man, a plan, a canal: Panama\")); // true\nconsole.log(isPalindrome(\"race a car\")); // false\nconsole.log(isPalindrome(\" \")); // true\nconsole.log(isPalindrome(\".,\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-valid-anagram",
      children: "Problem 2: Valid Anagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Hash Table, Sorting]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings s and t, return true if t is an anagram of s, false otherwise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"anagram\", t = \"nagaram\"\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"rat\", t = \"car\"\nOutput: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length, t.length ≤ 5 × 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sorting:"
        }), " Sort both strings and compare. Time O(n log n), Space O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (Frequency Count):"
        }), " Use array of 26 counts. Increment for s, decrement for t. Check all zero. Time O(n), Space O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n\n  const counts = new Array(26).fill(0);\n\n  for (let i = 0; i < s.length; i++) {\n    counts[s.charCodeAt(i) - 97]++;\n    counts[t.charCodeAt(i) - 97]--;\n  }\n\n  return counts.every(c => c === 0);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isAnagram(\"anagram\", \"nagaram\")); // true\nconsole.log(isAnagram(\"rat\", \"car\")); // false\nconsole.log(isAnagram(\"a\", \"a\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-first-unique-character-in-a-string",
      children: "Problem 3: First Unique Character in a String"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s, find the first non-repeating character and return its index. If none exists, return -1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"leetcode\"\nOutput: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"loveleetcode\"\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁵"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute Force:"
        }), " Nested loop checking duplicates. Time O(n²), Space O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal:"
        }), " Count frequencies in first pass, find first with count 1 in second pass. Time O(n), Space O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function firstUniqChar(s: string): number {\n  const freq = new Array(26).fill(0);\n\n  for (const ch of s) {\n    freq[ch.charCodeAt(0) - 97]++;\n  }\n\n  for (let i = 0; i < s.length; i++) {\n    if (freq[s.charCodeAt(i) - 97] === 1) return i;\n  }\n\n  return -1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(firstUniqChar(\"leetcode\")); // 0\nconsole.log(firstUniqChar(\"loveleetcode\")); // 2\nconsole.log(firstUniqChar(\"aabb\")); // -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-reverse-string",
      children: "Problem 4: Reverse String"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Write a function that reverses a string in-place."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = [\"h\",\"e\",\"l\",\"l\",\"o\"]\nOutput: [\"o\",\"l\",\"l\",\"e\",\"h\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁵"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reverseString(s: string[]): void {\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    [s[left], s[right]] = [s[right], s[left]];\n    left++;\n    right--;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const s1 = [\"h\",\"e\",\"l\",\"l\",\"o\"];\nreverseString(s1);\nconsole.log(s1); // [\"o\",\"l\",\"l\",\"e\",\"h\"]\n\nconst s2 = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"];\nreverseString(s2);\nconsole.log(s2); // [\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-longest-common-prefix",
      children: "Problem 5: Longest Common Prefix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Trie]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Write a function to find the longest common prefix string amongst an array of strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: strs = [\"flower\", \"flow\", \"flight\"]\nOutput: \"fl\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ strs.length ≤ 200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ strs[i].length ≤ 200"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal Scanning:"
        }), " Start with first string as prefix, reduce for each next string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical Scanning:"
        }), " Compare characters at same position across all strings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function longestCommonPrefix(strs: string[]): string {\n  if (!strs.length) return \"\";\n\n  for (let i = 0; i < strs[0].length; i++) {\n    const char = strs[0][i];\n    for (let j = 1; j < strs.length; j++) {\n      if (i === strs[j].length || strs[j][i] !== char) {\n        return strs[0].substring(0, i);\n      }\n    }\n  }\n\n  return strs[0];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(longestCommonPrefix([\"flower\", \"flow\", \"flight\"])); // \"fl\"\nconsole.log(longestCommonPrefix([\"dog\", \"racecar\", \"car\"])); // \"\"\nconsole.log(longestCommonPrefix([\"\"])); // \"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n * m) where n = number of strings, m = length of prefix\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-valid-parentheses",
      children: "Problem 6: Valid Parentheses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Stack]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string containing '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Brackets must close in the correct order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"()[]{}\"\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isValid(s: string): boolean {\n  const stack: string[] = [];\n  const map: Record<string, string> = { ')': '(', '}': '{', ']': '[' };\n\n  for (const ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') {\n      stack.push(ch);\n    } else {\n      if (stack.pop() !== map[ch]) return false;\n    }\n  }\n\n  return stack.length === 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isValid(\"()\")); // true\nconsole.log(isValid(\"()[]{}\")); // true\nconsole.log(isValid(\"(]\")); // false\nconsole.log(isValid(\"([)]\")); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-implement-strstr",
      children: "Problem 7: Implement strStr()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Two Pointers, Pattern Matching]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: haystack = \"hello\", needle = \"ll\"\nOutput: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ haystack.length, needle.length ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute Force:"
        }), " Slide window and compare. Time O(n*m), Space O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KMP:"
        }), " O(n+m) using prefix function."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function strStr(haystack: string, needle: string): number {\n  if (needle.length === 0) return 0;\n\n  for (let i = 0; i <= haystack.length - needle.length; i++) {\n    let j = 0;\n    while (j < needle.length && haystack[i + j] === needle[j]) {\n      j++;\n    }\n    if (j === needle.length) return i;\n  }\n\n  return -1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(strStr(\"hello\", \"ll\")); // 2\nconsole.log(strStr(\"aaaaa\", \"bba\")); // -1\nconsole.log(strStr(\"\", \"\")); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n*m) worst case\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-length-of-last-word",
      children: "Problem 8: Length of Last Word"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s consisting of words and spaces, return the length of the last word in the string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"Hello World\"\nOutput: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lengthOfLastWord(s: string): number {\n  let length = 0;\n  let i = s.length - 1;\n\n  while (i >= 0 && s[i] === ' ') i--;\n\n  while (i >= 0 && s[i] !== ' ') {\n    length++;\n    i--;\n  }\n\n  return length;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(lengthOfLastWord(\"Hello World\")); // 5\nconsole.log(lengthOfLastWord(\"   fly me   to   the moon  \")); // 4\nconsole.log(lengthOfLastWord(\"a\")); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "medium-problems-12",
      children: "Medium Problems (12)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-longest-substring-without-repeating-characters",
      children: "Problem 9: Longest Substring Without Repeating Characters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Sliding Window, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s, find the length of the longest substring without repeating characters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"abcabcbb\"\nOutput: 3\nExplanation: \"abc\" length 3.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ s.length ≤ 5 × 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute Force:"
        }), " Check all substrings. Time O(n³), Space O(min(n, m))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (Sliding Window):"
        }), " Expand right pointer, shrink left when duplicate found. Track max length. Time O(n), Space O(min(n, m))."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lengthOfLongestSubstring(s: string): number {\n  const charSet = new Set<string>();\n  let left = 0;\n  let maxLen = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    while (charSet.has(s[right])) {\n      charSet.delete(s[left]);\n      left++;\n    }\n    charSet.add(s[right]);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n\n  return maxLen;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(lengthOfLongestSubstring(\"abcabcbb\")); // 3\nconsole.log(lengthOfLongestSubstring(\"bbbbb\")); // 1\nconsole.log(lengthOfLongestSubstring(\"pwwkew\")); // 3\nconsole.log(lengthOfLongestSubstring(\"\")); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(min(m, n))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-longest-palindromic-substring",
      children: "Problem 10: Longest Palindromic Substring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, DP, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s, return the longest palindromic substring in s."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"babad\"\nOutput: \"bab\" or \"aba\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 1000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brute Force:"
        }), " Check all substrings. Time O(n³), Space O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP:"
        }), " Table[i][j] = true if substring i..j is palindrome. O(n²) time and space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (Expand Around Center):"
        }), " For each position, expand outward treating it as center. Handle odd (1 char) and even (2 char) centers. Time O(n²), Space O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function longestPalindrome(s: string): string {\n  if (s.length < 2) return s;\n\n  let start = 0;\n  let maxLen = 1;\n\n  const expandAroundCenter = (left: number, right: number) => {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      const currLen = right - left + 1;\n      if (currLen > maxLen) {\n        maxLen = currLen;\n        start = left;\n      }\n      left--;\n      right++;\n    }\n  };\n\n  for (let i = 0; i < s.length; i++) {\n    expandAroundCenter(i, i);     // odd\n    expandAroundCenter(i, i + 1); // even\n  }\n\n  return s.substring(start, start + maxLen);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(longestPalindrome(\"babad\")); // \"bab\" or \"aba\"\nconsole.log(longestPalindrome(\"cbbd\")); // \"bb\"\nconsole.log(longestPalindrome(\"a\")); // \"a\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-group-anagrams",
      children: "Problem 11: Group Anagrams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Hash Table, Sorting]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of strings strs, group the anagrams together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: strs = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\nOutput: [[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ strs.length ≤ 10⁴"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ strs[i].length ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sorting Key:"
        }), " Sort each string, use as key in map. Time O(n * k log k), Space O(n*k)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Count Key:"
        }), " Use char frequency as key. Time O(n * k), Space O(n*k)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function groupAnagrams(strs: string[]): string[][] {\n  const map = new Map<string, string[]>();\n\n  for (const str of strs) {\n    const key = str.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key)!.push(str);\n  }\n\n  return Array.from(map.values());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(groupAnagrams([\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]));\n// [[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]\nconsole.log(groupAnagrams([\"\"])); // [[\"\"]]\nconsole.log(groupAnagrams([\"a\"])); // [[\"a\"]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n * k log k)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n * k)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-string-to-integer-atoi",
      children: "Problem 12: String to Integer (atoi)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Math]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"42\"\nOutput: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"   -42\"\nOutput: -42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ s.length ≤ 200"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip leading whitespace, handle sign, read digits, clamp to [−2³¹, 2³¹−1]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function myAtoi(s: string): number {\n  let i = 0;\n  let sign = 1;\n  let result = 0;\n\n  while (i < s.length && s[i] === ' ') i++;\n\n  if (i < s.length && (s[i] === '+' || s[i] === '-')) {\n    sign = s[i] === '-' ? -1 : 1;\n    i++;\n  }\n\n  while (i < s.length && s[i] >= '0' && s[i] <= '9') {\n    const digit = s.charCodeAt(i) - 48;\n    if (result > Math.floor((2**31 - 1) / 10) ||\n       (result === Math.floor((2**31 - 1) / 10) && digit > 7)) {\n      return sign === 1 ? 2**31 - 1 : -(2**31);\n    }\n    result = result * 10 + digit;\n    i++;\n  }\n\n  return result * sign;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(myAtoi(\"42\")); // 42\nconsole.log(myAtoi(\"   -42\")); // -42\nconsole.log(myAtoi(\"4193 with words\")); // 4193\nconsole.log(myAtoi(\"words and 987\")); // 0\nconsole.log(myAtoi(\"-91283472332\")); // -2147483648\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-longest-repeating-character-replacement",
      children: "Problem 13: Longest Repeating Character Replacement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Sliding Window]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s and an integer k, find the length of the longest substring that can be obtained by replacing at most k characters to make all characters same."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"ABAB\", k = 2\nOutput: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁵"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ k ≤ s.length"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sliding window with frequency tracking. Valid window when (window size - max freq) ≤ k."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function characterReplacement(s: string, k: number): number {\n  const freq = new Array(26).fill(0);\n  let left = 0;\n  let maxFreq = 0;\n  let maxLen = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    const idx = s.charCodeAt(right) - 65;\n    freq[idx]++;\n    maxFreq = Math.max(maxFreq, freq[idx]);\n\n    while (right - left + 1 - maxFreq > k) {\n      freq[s.charCodeAt(left) - 65]--;\n      left++;\n    }\n\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n\n  return maxLen;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(characterReplacement(\"ABAB\", 2)); // 4\nconsole.log(characterReplacement(\"AABABBA\", 1)); // 4\nconsole.log(characterReplacement(\"AAAA\", 0)); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-minimum-window-substring",
      children: "Problem 14: Minimum Window Substring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Sliding Window, Hash Table]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings s and t, return the minimum window substring of s that contains all characters of t."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"ADOBECODEBANC\", t = \"ABC\"\nOutput: \"BANC\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length, t.length ≤ 10⁵"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sliding window with two frequency maps. Expand right, when window valid, shrink left to find minimum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minWindow(s: string, t: string): string {\n  const need = new Map<string, number>();\n  const have = new Map<string, number>();\n\n  for (const ch of t) {\n    need.set(ch, (need.get(ch) || 0) + 1);\n  }\n\n  let left = 0;\n  let minLen = Infinity;\n  let minStart = 0;\n  let required = need.size;\n  let formed = 0;\n\n  for (let right = 0; right < s.length; right++) {\n    const ch = s[right];\n    have.set(ch, (have.get(ch) || 0) + 1);\n\n    if (need.has(ch) && have.get(ch) === need.get(ch)) {\n      formed++;\n    }\n\n    while (formed === required && left <= right) {\n      if (right - left + 1 < minLen) {\n        minLen = right - left + 1;\n        minStart = left;\n      }\n\n      const leftChar = s[left];\n      have.set(leftChar, have.get(leftChar)! - 1);\n      if (need.has(leftChar) && have.get(leftChar)! < need.get(leftChar)!) {\n        formed--;\n      }\n      left++;\n    }\n  }\n\n  return minLen === Infinity ? \"\" : s.substring(minStart, minStart + minLen);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(minWindow(\"ADOBECODEBANC\", \"ABC\")); // \"BANC\"\nconsole.log(minWindow(\"a\", \"a\")); // \"a\"\nconsole.log(minWindow(\"a\", \"aa\")); // \"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m) where m is unique chars"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-palindromic-substrings",
      children: "Problem 15: Palindromic Substrings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, DP, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Count how many palindromic substrings exist in a given string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"abc\"\nOutput: 3\nExplanation: \"a\", \"b\", \"c\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 1000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expand around each center (including between chars). Count palindromes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function countSubstrings(s: string): number {\n  let count = 0;\n\n  const expand = (left: number, right: number) => {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      count++;\n      left--;\n      right++;\n    }\n  };\n\n  for (let i = 0; i < s.length; i++) {\n    expand(i, i);     // odd\n    expand(i, i + 1); // even\n  }\n\n  return count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(countSubstrings(\"abc\")); // 3\nconsole.log(countSubstrings(\"aaa\")); // 6\nconsole.log(countSubstrings(\"\")); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n²)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-16-encode-and-decode-strings",
      children: "Problem 16: Encode and Decode Strings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Design]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design an algorithm to encode a list of strings to a single string and decode it back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: [\"hello\", \"world\"]\nOutput (encoded): \"5#hello5#world\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use length + delimiter encoding to handle any characters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function encode(strs: string[]): string {\n  return strs.map(s => `${s.length}#${s}`).join('');\n}\n\nfunction decode(s: string): string[] {\n  const result: string[] = [];\n  let i = 0;\n\n  while (i < s.length) {\n    let j = i;\n    while (s[j] !== '#') j++;\n    const len = parseInt(s.substring(i, j));\n    result.push(s.substring(j + 1, j + 1 + len));\n    i = j + 1 + len;\n  }\n\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const original = [\"hello\", \"world\", \"test#1\"];\nconst encoded = encode(original);\nconsole.log(encoded); // \"5#hello5#world6#test#1\"\nconsole.log(decode(encoded)); // [\"hello\", \"world\", \"test#1\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-17-longest-substring-with-at-least-k-repeating-characters",
      children: "Problem 17: Longest Substring with At Least K Repeating Characters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Divide and Conquer, Sliding Window]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the length of the longest substring such that each character appears at least k times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"aaabb\", k = 3\nOutput: 3\nExplanation: \"aaa\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide and Conquer:"
        }), " Split at characters with frequency < k. Recurse on substrings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sliding Window:"
        }), " Try all 26 possible unique character counts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function longestSubstring(s: string, k: number): number {\n  const freq = new Array(26).fill(0);\n  for (const ch of s) freq[ch.charCodeAt(0) - 97]++;\n\n  let splitChar = '';\n  for (let i = 0; i < 26; i++) {\n    if (freq[i] > 0 && freq[i] < k) {\n      splitChar = String.fromCharCode(i + 97);\n      break;\n    }\n  }\n\n  if (!splitChar) return s.length;\n\n  const parts = s.split(splitChar);\n  return Math.max(...parts.map(part => longestSubstring(part, k)));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(longestSubstring(\"aaabb\", 3)); // 3\nconsole.log(longestSubstring(\"ababbc\", 2)); // 5\nconsole.log(longestSubstring(\"ababacb\", 3)); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n * 26)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-letter-combinations-of-a-phone-number",
      children: "Problem 18: Letter Combinations of a Phone Number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Backtracking]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string containing digits 2-9, return all possible letter combinations that the number could represent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: digits = \"23\"\nOutput: [\"ad\", \"ae\", \"af\", \"bd\", \"be\", \"bf\", \"cd\", \"ce\", \"cf\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ digits.length ≤ 4"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function letterCombinations(digits: string): string[] {\n  if (!digits) return [];\n\n  const map: Record<string, string> = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n\n  const result: string[] = [];\n\n  const backtrack = (idx: number, current: string) => {\n    if (idx === digits.length) {\n      result.push(current);\n      return;\n    }\n\n    for (const ch of map[digits[idx]]) {\n      backtrack(idx + 1, current + ch);\n    }\n  };\n\n  backtrack(0, '');\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(letterCombinations(\"23\"));\n// [\"ad\", \"ae\", \"af\", \"bd\", \"be\", \"bf\", \"cd\", \"ce\", \"cf\"]\nconsole.log(letterCombinations(\"\")); // []\nconsole.log(letterCombinations(\"2\")); // [\"a\", \"b\", \"c\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(4^n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-19-reverse-words-in-a-string",
      children: "Problem 19: Reverse Words in a String"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s, reverse the order of words."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"the sky is blue\"\nOutput: \"blue is sky the\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reverseWords(s: string): string {\n  const words = s.trim().split(/\\s+/);\n  return words.reverse().join(' ');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(reverseWords(\"the sky is blue\")); // \"blue is sky the\"\nconsole.log(reverseWords(\"  hello world  \")); // \"world hello\"\nconsole.log(reverseWords(\"a good   example\")); // \"example good a\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-20-compare-version-numbers",
      children: "Problem 20: Compare Version Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Two Pointers]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Compare two version numbers (e.g., \"1.01\" vs \"1.001\"). Return 1 if v1 > v2, -1 if v1 < v2, 0 if equal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: version1 = \"1.01\", version2 = \"1.001\"\nOutput: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function compareVersion(version1: string, version2: string): number {\n  const v1 = version1.split('.').map(Number);\n  const v2 = version2.split('.').map(Number);\n  const maxLen = Math.max(v1.length, v2.length);\n\n  for (let i = 0; i < maxLen; i++) {\n    const num1 = v1[i] || 0;\n    const num2 = v2[i] || 0;\n    if (num1 > num2) return 1;\n    if (num1 < num2) return -1;\n  }\n\n  return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(compareVersion(\"1.01\", \"1.001\")); // 0\nconsole.log(compareVersion(\"1.0\", \"1.0.0\")); // 0\nconsole.log(compareVersion(\"0.1\", \"1.1\")); // -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n + m)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n + m)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hard-problems-5",
      children: "Hard Problems (5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-21-regular-expression-matching",
      children: "Problem 21: Regular Expression Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, DP, Backtracking]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement regular expression matching with support for '.' and '*'."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"aa\", p = \"a*\"\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length ≤ 20"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ p.length ≤ 30"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP:"
        }), " dp[i][j] matches s[0..i-1] with p[0..j-1]."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isMatch(s: string, p: string): boolean {\n  const dp: boolean[][] = Array.from({ length: s.length + 1 }, () =>\n    new Array(p.length + 1).fill(false)\n  );\n  dp[0][0] = true;\n\n  for (let j = 2; j <= p.length; j++) {\n    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];\n  }\n\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 1; j <= p.length; j++) {\n      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else if (p[j - 1] === '*') {\n        dp[i][j] = dp[i][j - 2] ||\n          ((p[j - 2] === '.' || p[j - 2] === s[i - 1]) && dp[i - 1][j]);\n      }\n    }\n  }\n\n  return dp[s.length][p.length];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isMatch(\"aa\", \"a*\")); // true\nconsole.log(isMatch(\"mississippi\", \"mis*is*p*.\")); // false\nconsole.log(isMatch(\"ab\", \".*\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m * n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m * n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-22-edit-distance",
      children: "Problem 22: Edit Distance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, DP]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings, return minimum edit operations (insert, delete, replace) to convert word1 to word2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: word1 = \"horse\", word2 = \"ros\"\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ word1.length, word2.length ≤ 500"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classic DP: dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minDistance(word1: string, word2: string): number {\n  const m = word1.length;\n  const n = word2.length;\n  const dp: number[][] = Array.from({ length: m + 1 }, () =>\n    new Array(n + 1).fill(0)\n  );\n\n  for (let i = 1; i <= m; i++) dp[i][0] = i;\n  for (let j = 1; j <= n; j++) dp[0][j] = j;\n\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = 1 + Math.min(\n          dp[i - 1][j],     // delete\n          dp[i][j - 1],     // insert\n          dp[i - 1][j - 1]  // replace\n        );\n      }\n    }\n  }\n\n  return dp[m][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(minDistance(\"horse\", \"ros\")); // 3\nconsole.log(minDistance(\"intention\", \"execution\")); // 5\nconsole.log(minDistance(\"\", \"a\")); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m * n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m * n) — can be optimized to O(min(m, n))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-23-distinct-subsequences",
      children: "Problem 23: Distinct Subsequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, DP]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two strings s and t, count the number of distinct subsequences of s that equal t."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"rabbbit\", t = \"rabbit\"\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ s.length, t.length ≤ 1000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function numDistinct(s: string, t: string): number {\n  const m = s.length;\n  const n = t.length;\n  const dp: number[][] = Array.from({ length: m + 1 }, () =>\n    new Array(n + 1).fill(0)\n  );\n\n  for (let i = 0; i <= m; i++) dp[i][0] = 1;\n\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      dp[i][j] = dp[i - 1][j];\n      if (s[i - 1] === t[j - 1]) {\n        dp[i][j] += dp[i - 1][j - 1];\n      }\n    }\n  }\n\n  return dp[m][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(numDistinct(\"rabbbit\", \"rabbit\")); // 3\nconsole.log(numDistinct(\"babgbag\", \"bag\")); // 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m * n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m * n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-24-text-justification",
      children: "Problem 24: Text Justification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, Simulation]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of words and a maxWidth, format the text such that each line has exactly maxWidth characters, fully justified."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16\nOutput: [\n   \"This    is    an\",\n   \"example  of text\",\n   \"justification.  \"\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ words.length ≤ 300"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ words[i].length ≤ 20"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fullJustify(words: string[], maxWidth: number): string[] {\n  const result: string[] = [];\n  let i = 0;\n\n  while (i < words.length) {\n    let j = i;\n    let lineLen = 0;\n\n    while (j < words.length && lineLen + words[j].length + (j - i) <= maxWidth) {\n      lineLen += words[j].length;\n      j++;\n    }\n\n    const numWords = j - i;\n    const numSpaces = maxWidth - lineLen;\n\n    if (numWords === 1 || j === words.length) {\n      let line = words.slice(i, j).join(' ');\n      line += ' '.repeat(maxWidth - line.length);\n      result.push(line);\n    } else {\n      const spacesBetween = Math.floor(numSpaces / (numWords - 1));\n      const extraSpaces = numSpaces % (numWords - 1);\n      let line = '';\n\n      for (let k = i; k < j; k++) {\n        line += words[k];\n        if (k < j - 1) {\n          line += ' '.repeat(spacesBetween + (k - i < extraSpaces ? 1 : 0));\n        }\n      }\n      result.push(line);\n    }\n\n    i = j;\n  }\n\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"];\nconsole.log(fullJustify(words, 16));\n// [\"This    is    an\", \"example  of text\", \"justification.  \"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n * L) where L is maxWidth\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-25-wildcard-matching",
      children: "Problem 25: Wildcard Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [String, DP, Greedy]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement wildcard pattern matching with support for '?' (any single char) and '*' (any sequence including empty)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: s = \"aa\", p = \"*\"\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ s.length, p.length ≤ 2000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isMatchWildcard(s: string, p: string): boolean {\n  const dp: boolean[][] = Array.from({ length: s.length + 1 }, () =>\n    new Array(p.length + 1).fill(false)\n  );\n  dp[0][0] = true;\n\n  for (let j = 1; j <= p.length; j++) {\n    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 1];\n  }\n\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 1; j <= p.length; j++) {\n      if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else if (p[j - 1] === '*') {\n        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];\n      }\n    }\n  }\n\n  return dp[s.length][p.length];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isMatchWildcard(\"aa\", \"*\")); // true\nconsole.log(isMatchWildcard(\"cb\", \"?a\")); // false\nconsole.log(isMatchWildcard(\"adceb\", \"*a*b\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(m * n)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(m * n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-table",
      children: "Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Valid Palindrome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid Anagram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First Unique Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Common Prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid Parentheses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement strStr()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length of Last Word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Substring Without Repeating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Palindromic Substring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group Anagrams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*k log k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String to Integer (atoi)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Repeating Char Replacement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum Window Substring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindromic Substrings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encode and Decode Strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest Substring with K Repeating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(26n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Letter Combinations of Phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(4^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse Words in String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare Version Numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular Expression Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinct Subsequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text Justification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wildcard Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n)"
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