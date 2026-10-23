"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2544],{

/***/ 8134
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_16_trie_md_6a2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-16-trie-md-6a2.json
const site_docs_courses_data_structures_16_trie_md_6a2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/16-trie","title":"Chapter 16: Trie (Prefix Tree)","description":"Prev B-Trees and B+ Trees | Next Segment Tree and Fenwick Tree","source":"@site/docs/courses/data-structures/16-trie.md","sourceDirName":"courses/data-structures","slug":"/data-structures/16-trie","permalink":"/ai-engineering-journey/data-structures/16-trie","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-trie","slug":"/data-structures/16-trie","title":"Chapter 16: Trie (Prefix Tree)","sidebar_label":"Chapter 16: Trie (Prefix Tree)","sidebar_position":16},"sidebar":"course-data-structures","previous":{"title":"Chapter 15: B-Trees and B+ Trees","permalink":"/ai-engineering-journey/data-structures/15-b-trees"},"next":{"title":"Chapter 17: Segment Tree","permalink":"/ai-engineering-journey/data-structures/17-segment-tree"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/data-structures/16-trie.md


const frontMatter = {
	id: '16-trie',
	slug: '/data-structures/16-trie',
	title: 'Chapter 16: Trie (Prefix Tree)',
	sidebar_label: 'Chapter 16: Trie (Prefix Tree)',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Trie (Prefix Tree)';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Tries Matter",
  "id": "why-tries-matter",
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
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 3
}, {
  "value": "1. Trie Structure",
  "id": "1-trie-structure",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Structure",
  "id": "structure",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "2. Insert Operation",
  "id": "2-insert-operation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run — Insertion Trace",
  "id": "dry-run--insertion-trace",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations",
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
  "value": "3. Search Operation",
  "id": "3-search-operation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run — Search Trace",
  "id": "dry-run--search-trace",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-1",
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
  "value": "4. Delete Operation",
  "id": "4-delete-operation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run — Delete Trace",
  "id": "dry-run--delete-trace",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-2",
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
  "value": "5. Prefix Search (startsWith)",
  "id": "5-prefix-search-startswith",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "6. Autocomplete",
  "id": "6-autocomplete",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-1",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-4",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
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
  "value": "7. Longest Prefix Matching",
  "id": "7-longest-prefix-matching",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-6",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-2",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-5",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
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
  "value": "8. Word Break Problem",
  "id": "8-word-break-problem",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Algorithm Steps (DP + Trie)",
  "id": "algorithm-steps-dp--trie",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-3",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-6",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "Trie vs Hash Table vs BST — Comparison Table",
  "id": "trie-vs-hash-table-vs-bst--comparison-table",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. Word Break (LeetCode 139)",
  "id": "1-word-break-leetcode-139",
  "level": 3
}, {
  "value": "2. Word Search II (LeetCode 212)",
  "id": "2-word-search-ii-leetcode-212",
  "level": 3
}, {
  "value": "3. Longest Word in Dictionary (LeetCode 720)",
  "id": "3-longest-word-in-dictionary-leetcode-720",
  "level": 3
}, {
  "value": "4. Replace Words (LeetCode 648)",
  "id": "4-replace-words-leetcode-648",
  "level": 3
}, {
  "value": "5. Design Add and Search Words Data Structure (LeetCode 211)",
  "id": "5-design-add-and-search-words-data-structure-leetcode-211",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: Trie vs Alternatives",
  "id": "quick-reference-trie-vs-alternatives",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Common Mistakes &amp; GFG Deepening",
  "id": "common-mistakes--gfg-deepening",
  "level": 2
}, {
  "value": "Common Mistakes (GFG-Style)",
  "id": "common-mistakes-gfg-style",
  "level": 3
}, {
  "value": "TypeScript Trie Implementation",
  "id": "typescript-trie-implementation",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern",
  "level": 3
}, {
  "value": "Trie Variants Comparison",
  "id": "trie-variants-comparison",
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
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-16-trie-prefix-tree",
        children: "Chapter 16: Trie (Prefix Tree)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prev:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/15-b-trees",
        children: "Chapter 15: B-Trees and B+ Trees"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/17-segment-tree",
        children: "Chapter 17: Segment Tree and Fenwick Tree"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tries provide O(L) string operations independent of dictionary size and excel at prefix matching where hash tables and BSTs fall short."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the trie data structure and its use for string keys."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement insertion, search, and prefix matching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply tries to autocomplete and word break problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze trie space and time complexity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-tries-matter",
      children: "Why Tries Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine your phone's contact list with 10,000 names. When you type \"Joh\" into the search bar, your phone instantly shows \"Johnson\", \"Johansson\", \"John\", \"Johny\" — every contact whose name starts with those three letters. It does NOT scan all 10,000 names one by one. Instead, it uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trie-like structure"
      }), ": it follows the path J ? o ? h, then collects every name branching from there. A hash table cannot do this. A BST would need O(L log n). A trie does it in O(L + results) — the prefix length plus the number of matches, completely independent of dictionary size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Trie structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Characters on edges, words end at marked nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path from root = prefix of stored strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) regardless of dictionary size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x faster than BST for string keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse prefix path, collect all descendants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autocomplete, spell check, IP routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node may store 26+ child pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use compressed/radix trie for memory savings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary search tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 children (less/equal/greater) per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-efficient middle ground"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autocomplete, IP routing, DNA matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any domain needing fast prefix lookup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Trie Structure] --> B[Root Node]\r\n    B --> C[Insert word char by char]\r\n    C --> D{Char exists?}\r\n    D --> E[Yes arrow Follow edge]\r\n    D --> F[No arrow Create new node]\r\n    E --> G[More chars?]\r\n    F --> G\r\n    G --> H[Yes arrow continue]\r\n    G --> I[No arrow Mark end of word]\r\n    I --> J[Operations]\r\n    J --> K[\"Search O(L)\"]\r\n    J --> L[\"Prefix Match O(L)\"]\r\n    J --> M[\"Autocomplete O(L+Results)\"]\r\n    J --> N[Word Break DP]\r\n    J --> O[\"Delete O(L)\"]\r\n    J --> P[\"Longest Prefix O(L)\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Trie search time depends only on key length, not on the number of stored strings, making it uniquely suited for large dictionaries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch16-trie.png",
        alt: "Trie Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trie"
      }), " (from \"retrieval\") is a tree data structure for storing strings. Each node represents a character. A path from root to a node spells a prefix. Nodes may be marked as terminal (end of a word)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        root\r\n       / |  \\\r\n      a  b   c\r\n     /   |    \\\r\n    p    a     a\r\n   / \\   |     |\r\n  p   t  t     t\r\n  |   |  |     |\r\n [!]  [!] [!]   s\r\n                |\r\n               [!]\r\n\r\nWords: \"app\", \"at\", \"bat\", \"cat\", \"cats\"\r\n[!] marks end of a word\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity",
      children: "Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) avg"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) avg"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N x L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where L is the key length and k is the number of matching results."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-trie-structure",
      children: "1. Trie Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a trie as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "warehouse aisle-organizer"
      }), ". Each aisle is labelled with a letter. To store \"apple\", a worker walks from the entrance (root) through A-aisle, P-aisle, P-aisle, L-aisle, E-aisle, and puts a red flag at the last shelf to mark \"a word ends here\". Any string sharing a prefix shares those aisles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each trie node contains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Children"
        }), ": array or map of child pointers (26 for lowercase English, 256 for ASCII, or a hash map for general Unicode)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "End-of-word flag"
        }), ": boolean marking whether any word ends at this node"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TrieNode {\r\nchildren: map[char, TrieNode]\r\nisEndOfWord: bool\r\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A trie is a rooted tree where each node corresponds to a single character."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The root node is empty — it stores no character."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each path from root to a leaf (or internal node) spells a string by concatenating the characters along the path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nodes with isEndOfWord = true indicate at least one complete word ends there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Words that are prefixes of other words share the same path (e.g., \"app\" and \"apple\" share \"app\")."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-insert-operation",
      children: "2. Insert Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding a new contact \"Bob\" to your phone: you check if B exists from root — yes. Then check if o exists under B — yes. Then check if b exists under o — no, so you create a new b entry and mark it as a complete contact."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the root node. Set current = root."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each character c in the word (left to right):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If c exists in current.children, follow it: current = current.children[c]."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If c does NOT exist, create a new TrieNode, add it to current.children[c], then move to it."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After processing all characters, set current.isEndOfWord = true."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function insert(word):\r\n    current = root\r\n    for each character c in word:\r\n        if c not in current.children:\r\n            current.children[c] = new TrieNode()\r\n        current = current.children[c]\r\n    current.isEndOfWord = true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--insertion-trace",
      children: "Dry Run — Insertion Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert words: \"cat\", \"car\", \"dog\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert \"cat\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow [c]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c arrow [a]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c arrow a arrow [t]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark isEndOfWord = true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c arrow a arrow t(!)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert \"car\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c exists follow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow [c] arrow a arrow t(!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a exists follow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c arrow [a] arrow t(!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c arrow a arrow t(!), [r]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark isEndOfWord = true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c arrow a arrow t(!), r(!)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert \"dog\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c, [d]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c, d arrow [o]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g not in children create node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c, d arrow o arrow [g]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark isEndOfWord = true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root arrow c, d arrow o arrow g(!)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final trie:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        root\r\n       /    \\\r\n      c      d\r\n     /        \\\r\n    a          o\r\n   / \\          \\\r\n  t(!) r(!)      g(!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nclass TrieNode {\r\npublic:\r\n    TrieNode* children[26];\r\n    bool isEndOfWord;\r\n    TrieNode() : isEndOfWord(false) {\r\n        for (int i = 0; i < 26; i++) children[i] = nullptr;\r\n    }\r\n};\r\n\r\nclass Trie {\r\nprivate:\r\n    TrieNode* root;\r\npublic:\r\n    Trie() { root = new TrieNode(); }\r\n    void insert(string word) {\r\n        TrieNode* cur = root;\r\n        for (char c : word) {\r\n            int idx = c - 'a';\r\n            if (!cur->children[idx]) cur->children[idx] = new TrieNode();\r\n            cur = cur->children[idx];\r\n        }\r\n        cur->isEndOfWord = true;\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\nclass TrieNode:\r\n    def __init__(self):\r\n        self.children = {}\r\n        self.isEnd = False\r\n\r\nclass Trie:\r\n    def __init__(self):\r\n        self.root = TrieNode()\r\n    def insert(self, word: str) -> None:\r\n        cur = self.root\r\n        for ch in word:\r\n            if ch not in cur.children:\r\n                cur.children[ch] = TrieNode()\r\n            cur = cur.children[ch]\r\n        cur.isEnd = True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\nclass TrieNode {\r\n    TrieNode[] children = new TrieNode[26];\r\n    boolean isEnd;\r\n}\r\n\r\nclass Trie {\r\n    private TrieNode root;\r\n    public Trie() { root = new TrieNode(); }\r\n    public void insert(String word) {\r\n        TrieNode cur = root;\r\n        for (char c : word.toCharArray()) {\r\n            int idx = c - 'a';\r\n            if (cur.children[idx] == null) cur.children[idx] = new TrieNode();\r\n            cur = cur.children[idx];\r\n        }\r\n        cur.isEnd = true;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L) — each character of the word is processed exactly once. No rebalancing, no hashing overhead, no collisions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(N x L) worst-case — if no strings share prefixes, every character of every word creates a new node. Each node stores 26 pointers (or a hash map entry) plus a boolean."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "O(L) insert independent of dictionary size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High memory overhead (26 child pointers per node)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles variable-length keys naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion slower than hash table for single operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports prefix operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array-based tries waste space on sparse alphabets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No collision handling needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not cache-friendly — pointer chasing across nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty string:"
        }), " Inserting \"\" should mark the root as a valid word. Searching \"\" returns root.isEndOfWord."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate words:"
        }), " Inserting \"cat\" twice is idempotent — the second call leaves isEndOfWord as true (no change)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix is also a word:"
        }), " Inserting \"app\" then \"apple\" — after both inserts, the node at \"app\" is marked as end-of-word, and \"apple\" extends from it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Case sensitivity:"
        }), " \"Cat\" and \"cat\" differ if we use ASCII-lowercase indexing; use a case-folded key or a hash-map-based trie for case-insensitive behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-search-operation",
      children: "3. Search Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Looking up a word in a dictionary: you flip to the starting letter's section, then the next letter's subsection, and so on until you either find the word or reach a dead end. You never check every word on every page."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at current = root."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each character c in the word:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If c is NOT in current.children, return false (word not found)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Else follow the child: current = current.children[c]."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After all characters, return current.isEndOfWord."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function search(word):\r\n    current = root\r\n    for each character c in word:\r\n        if c not in current.children:\r\n            return false\r\n        current = current.children[c]\r\n    return current.isEndOfWord\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--search-trace",
      children: "Dry Run — Search Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trie contains: \"cat\", \"car\", \"dog\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search \"car\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return isEndOfWord = true check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search \"can\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n does NOT exist return false x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nbool search(string word) {\r\n    TrieNode* cur = root;\r\n    for (char c : word) {\r\n        int idx = c - 'a';\r\n        if (!cur->children[idx]) return false;\r\n        cur = cur->children[idx];\r\n    }\r\n    return cur->isEndOfWord;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef search(self, word: str) -> bool:\r\n    cur = self.root\r\n    for ch in word:\r\n        if ch not in cur.children:\r\n            return False\r\n        cur = cur.children[ch]\r\n    return cur.isEnd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\npublic boolean search(String word) {\r\n    TrieNode cur = root;\r\n    for (char c : word.toCharArray()) {\r\n        int idx = c - 'a';\r\n        if (cur.children[idx] == null) return false;\r\n        cur = cur.children[idx];\r\n    }\r\n    return cur.isEnd;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L) — one child-pointer lookup per character. No hash collisions to resolve, no tree rebalancing. Compare to BST: O(L log n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — uses only a pointer variable regardless of dictionary size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
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
            children: "O(L) search regardless of n — ideal for large dictionaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than hash table O(1) average for single exact lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable worst-case (no collisions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot search by value — only by prefix/string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally supports prefix search alongside exact search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache misses due to pointer chasing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word not found:"
        }), " Returns false if any character is missing or if the full path exists but isEndOfWord is false (e.g., searching \"app\" when only \"apple\" is inserted)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty string search:"
        }), " Returns root.isEndOfWord."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word longer than any stored string:"
        }), " Returns false when a character is missing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-existent prefix:"
        }), " Returns false early at the first missing character."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-delete-operation",
      children: "4. Delete Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Removing a contact \"Bob\" from your phone: you navigate B, o, b, remove the \"b\" shelf marker (end-of-word flag), and if that shelf has no other contacts branching from it, you dismantle the entire B-o-b branch to save space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively traverse the word character by character."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At the last node, set isEndOfWord = false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After returning from recursion, check if the current node has any remaining children AND isEndOfWord is false. If neither, delete the node and tell the parent to remove it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function delete(word):\r\n    deleteRecursive(root, word, 0)\r\n\r\nfunction deleteRecursive(node, word, depth):\r\n    if node is null: return false\r\n    if depth == length(word):\r\n        if not node.isEndOfWord: return false\r\n        node.isEndOfWord = false\r\n        return node.children is empty\r\n    c = word[depth]\r\n    if c not in node.children: return false\r\n    shouldDelete = deleteRecursive(node.children[c], word, depth + 1)\r\n    if shouldDelete:\r\n        delete node.children[c]\r\n        remove c from node.children\r\n        return node.children is empty AND not node.isEndOfWord\r\n    return false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--delete-trace",
      children: "Dry Run — Delete Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trie contains: \"cat\"(!), \"car\"(!), \"dog\"(!)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete \"car\":"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set isEndOfWord = false. Children? None. shouldDelete = true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete child r. a has another child (t). keep a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trie after delete: \"cat\"(!), \"dog\"(!). \"car\" removed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete \"ca\" (not inserted):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depth == 2 == len(\"ca\"). isEndOfWord? false. Return false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No nodes modified — correct because \"ca\" was never inserted as a word."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nbool deleteRecursive(TrieNode* node, const string& word, int depth) {\r\n    if (!node) return false;\r\n    if (depth == word.length()) {\r\n        if (!node->isEndOfWord) return false;\r\n        node->isEndOfWord = false;\r\n        for (int i = 0; i < 26; i++)\r\n            if (node->children[i]) return false;\r\n        return true;\r\n    }\r\n    int idx = word[depth] - 'a';\r\n    if (!node->children[idx]) return false;\r\n    bool shouldDelete = deleteRecursive(node->children[idx], word, depth + 1);\r\n    if (shouldDelete) {\r\n        delete node->children[idx];\r\n        node->children[idx] = nullptr;\r\n        if (node->isEndOfWord) return false;\r\n        for (int i = 0; i < 26; i++)\r\n            if (node->children[i]) return false;\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nvoid deleteWord(string word) {\r\n    deleteRecursive(root, word, 0);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef _delete(self, node, word, depth):\r\n    if not node:\r\n        return False\r\n    if depth == len(word):\r\n        if not node.isEnd:\r\n            return False\r\n        node.isEnd = False\r\n        return len(node.children) == 0\r\n    ch = word[depth]\r\n    if ch not in node.children:\r\n        return False\r\n    should_delete = self._delete(node.children[ch], word, depth + 1)\r\n    if should_delete:\r\n        del node.children[ch]\r\n        return len(node.children) == 0 and not node.isEnd\r\n    return False\r\n\r\ndef delete(self, word: str) -> None:\r\n    self._delete(self.root, word, 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\nprivate boolean deleteRecursive(TrieNode node, String word, int depth) {\r\n    if (node == null) return false;\r\n    if (depth == word.length()) {\r\n        if (!node.isEnd) return false;\r\n        node.isEnd = false;\r\n        for (TrieNode child : node.children)\r\n            if (child != null) return false;\r\n        return true;\r\n    }\r\n    int idx = word.charAt(depth) - 'a';\r\n    if (node.children[idx] == null) return false;\r\n    boolean shouldDelete = deleteRecursive(node.children[idx], word, depth + 1);\r\n    if (shouldDelete) {\r\n        node.children[idx] = null;\r\n        if (node.isEnd) return false;\r\n        for (TrieNode child : node.children)\r\n            if (child != null) return false;\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\npublic void delete(String word) {\r\n    deleteRecursive(root, word, 0);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L) — worst-case traverses all L characters of the word. The cleanup check at each node iterates over 26 children (constant). So total is O(L x 26) = O(L)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(L) for the recursion stack depth in worst case (unbalanced deletion path)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
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
            children: "Cascading cleanup frees unused nodes automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive implementation may overflow stack for very long strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Only traverses the exact word path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative version requires tracking parent pointers or using a stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No reorganization needed (unlike BST deletion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking 26 children at each node for cleanup has constant but non-zero overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word not in trie:"
        }), " Returns without modifying any node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word is a prefix of another word"
        }), " (e.g., delete \"app\" when \"apple\" exists): Only sets isEndOfWord = false at the last node. No nodes are deleted because the path is shared."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple words end at the same node:"
        }), " Rare, but isEndOfWord is a boolean — use a counter if frequency tracking is needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty string:"
        }), " Deleting \"\" unmarks root.isEndOfWord. Root itself is never deleted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-prefix-search-startswith",
      children: "5. Prefix Search (startsWith)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You type \"Joh\" into Google search and it instantly shows \"John\", \"Johnson\", \"Johansson\" — it doesn't need to search the entire web index. It just follows the J-o-h path and collects everything below."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse the prefix character by character from root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If any character is missing along the path, return false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the entire prefix is traversed, return true (regardless of isEndOfWord)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function startsWith(prefix):\r\n    current = root\r\n    for each character c in prefix:\r\n        if c not in current.children:\r\n            return false\r\n        current = current.children[c]\r\n    return true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trie contains: \"cat\", \"car\", \"dog\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "startsWith(\"ca\"):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All chars matched return true check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "startsWith(\"do\"):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return true check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "startsWith(\"caa\"):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a exists follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a NOT in children of 'a' return false x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nbool startsWith(string prefix) {\r\n    TrieNode* cur = root;\r\n    for (char c : prefix) {\r\n        int idx = c - 'a';\r\n        if (!cur->children[idx]) return false;\r\n        cur = cur->children[idx];\r\n    }\r\n    return true;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef startsWith(self, prefix: str) -> bool:\r\n    cur = self.root\r\n    for ch in prefix:\r\n        if ch not in cur.children:\r\n            return False\r\n        cur = cur.children[ch]\r\n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\npublic boolean startsWith(String prefix) {\r\n    TrieNode cur = root;\r\n    for (char c : prefix.toCharArray()) {\r\n        int idx = c - 'a';\r\n        if (cur.children[idx] == null) return false;\r\n        cur = cur.children[idx];\r\n    }\r\n    return true;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L) — traverse the L characters of the prefix. No scanning of the entire dictionary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — just a pointer variable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-autocomplete",
      children: "6. Autocomplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google Search autocomplete: you type \"how to\", and Google suggests \"how to tie a tie\", \"how to make pancakes\", \"how to lose weight\" — all pulled from a prefix tree over millions of search queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-5",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse the prefix character by character (same as startsWith)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From the prefix-ending node, perform DFS to collect all words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At each node, if isEndOfWord is true, add the accumulated string to results."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the list of results."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function autocomplete(prefix):\r\n    current = root\r\n    for each character c in prefix:\r\n        if c not in current.children:\r\n            return []\r\n        current = current.children[c]\r\n    results = []\r\n    collectAll(current, prefix, results)\r\n    return results\r\n\r\nfunction collectAll(node, prefix, results):\r\n    if node.isEndOfWord:\r\n        results.append(prefix)\r\n    for each (char, child) in node.children:\r\n        collectAll(child, prefix + char, results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-1",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trie contains: \"app\"(!), \"apple\"(!), \"application\"(!), \"apricot\"(!), \"banana\"(!)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "autocomplete(\"ap\"):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traverse root, a, p. From node 'p', DFS:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "isEnd?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap + p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"app\" check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap + p + l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap + p + l + e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apple\" check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap + p + l + i + c + a + t + i + o + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"application\" check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap + r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ap + r + i + c + o + t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apricot\" check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: [\"app\", \"apple\", \"application\", \"apricot\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nvoid collectAll(TrieNode* node, string prefix, vector<string>& res) {\r\n    if (node->isEndOfWord) res.push_back(prefix);\r\n    for (int i = 0; i < 26; i++) {\r\n        if (node->children[i]) {\r\n            collectAll(node->children[i], prefix + char('a' + i), res);\r\n        }\r\n    }\r\n}\r\n\r\nvector<string> autocomplete(string prefix) {\r\n    TrieNode* cur = root;\r\n    for (char c : prefix) {\r\n        int idx = c - 'a';\r\n        if (!cur->children[idx]) return {};\r\n        cur = cur->children[idx];\r\n    }\r\n    vector<string> res;\r\n    collectAll(cur, prefix, res);\r\n    return res;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef _collect_all(self, node, prefix, results):\r\n    if node.isEnd:\r\n        results.append(prefix)\r\n    for ch, child in node.children.items():\r\n        self._collect_all(child, prefix + ch, results)\r\n\r\ndef autocomplete(self, prefix: str):\r\n    cur = self.root\r\n    for ch in prefix:\r\n        if ch not in cur.children:\r\n            return []\r\n        cur = cur.children[ch]\r\n    results = []\r\n    self._collect_all(cur, prefix, results)\r\n    return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\nprivate void collectAll(TrieNode node, String prefix, List<String> res) {\r\n    if (node.isEnd) res.add(prefix);\r\n    for (int i = 0; i < 26; i++) {\r\n        if (node.children[i] != null) {\r\n            collectAll(node.children[i], prefix + (char)('a' + i), res);\r\n        }\r\n    }\r\n}\r\n\r\npublic List<String> autocomplete(String prefix) {\r\n    TrieNode cur = root;\r\n    for (char c : prefix.toCharArray()) {\r\n        int idx = c - 'a';\r\n        if (cur.children[idx] == null) return new ArrayList<>();\r\n        cur = cur.children[idx];\r\n    }\r\n    List<String> res = new ArrayList<>();\r\n    collectAll(cur, prefix, res);\r\n    return res;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L + M) where L = prefix length, M = total characters across all matching words. DFS visits every node in the subtree below the prefix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(M) for the results list. Recursion stack depth = length of longest matching word."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
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
            children: "Prefix matching is built-in — no special index needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collecting all results can visit many nodes if the prefix is short"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Results are in lexicographical order naturally (DFS order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory blowup for short prefixes with many completions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) to locate the prefix node, then proportional to output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-k results (e.g., top-5) requires priority-queue wrapper"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No words with prefix:"
        }), " Returns empty list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefix itself is a word:"
        }), " The prefix appears in the results (e.g., autocomplete(\"app\") when \"app\" is in the trie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty prefix:"
        }), " Returns all words in the trie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single character prefix:"
        }), " Traverses one level, then collects everything below."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-longest-prefix-matching",
      children: "7. Longest Prefix Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IP routing: when a router receives a packet for 192.168.1.35, it checks the routing table for the longest matching prefix. 192.168.1.0/24 matches more specifically than 192.168.0.0/16, so the router sends the packet via the /24 route. This is exactly a longest prefix match on a binary trie (radix tree)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-6",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse the trie character by character following the given word."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the last node where isEndOfWord = true."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When traversal stops (missing child or end of word), return the word formed up to the last marked node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function longestPrefix(word):\r\n    current = root\r\n    lastMatch = \"\"\r\n    prefix = \"\"\r\n    for each character c in word:\r\n        if c not in current.children:\r\n            break\r\n        prefix += c\r\n        current = current.children[c]\r\n        if current.isEndOfWord:\r\n            lastMatch = prefix\r\n    return lastMatch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-2",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trie contains: \"a\"(!), \"ap\"(!), \"app\"(!), \"appl\"(!), \"apple\"(!)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "longestPrefix(\"applepie\"):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "isEnd?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lastMatch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"app\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"app\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"appl\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"appl\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apple\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apple\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "break (no child 'p')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return \"apple\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "longestPrefix(\"apricot\"):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "isEnd?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lastMatch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apr\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apri\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apric\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"aprico\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"apricot\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ap\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Return \"ap\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-5",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nstring longestPrefix(string word) {\r\n    TrieNode* cur = root;\r\n    string prefix, lastMatch;\r\n    for (char c : word) {\r\n        int idx = c - 'a';\r\n        if (!cur->children[idx]) break;\r\n        prefix += c;\r\n        cur = cur->children[idx];\r\n        if (cur->isEndOfWord) lastMatch = prefix;\r\n    }\r\n    return lastMatch;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef longestPrefix(self, word: str) -> str:\r\n    cur = self.root\r\n    prefix, last_match = \"\", \"\"\r\n    for ch in word:\r\n        if ch not in cur.children:\r\n            break\r\n        prefix += ch\r\n        cur = cur.children[ch]\r\n        if cur.isEnd:\r\n            last_match = prefix\r\n    return last_match\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\npublic String longestPrefix(String word) {\r\n    TrieNode cur = root;\r\n    StringBuilder prefix = new StringBuilder();\r\n    String lastMatch = \"\";\r\n    for (char c : word.toCharArray()) {\r\n        int idx = c - 'a';\r\n        if (cur.children[idx] == null) break;\r\n        prefix.append(c);\r\n        cur = cur.children[idx];\r\n        if (cur.isEnd) lastMatch = prefix.toString();\r\n    }\r\n    return lastMatch;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(L) — one pass through the word. Each step is a constant-time child lookup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — only string variables for tracking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
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
            children: "O(L) time — much faster than checking each dictionary entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only prefix-bound, not substring-bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural use for IP routing, URL routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all prefixes to be inserted first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns the most specific match automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead of the trie itself"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No prefix matches:"
        }), " Returns empty string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entire word is a prefix:"
        }), " If the full word exists as a prefix in the trie, returns the entire word."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word shorter than any prefix:"
        }), " Traverses as far as the word allows; returns the longest valid prefix found."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No prefixes inserted at all:"
        }), " Always returns \"\"."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-word-break-problem",
      children: "8. Word Break Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your phone's predictive text suggests \"iloveyou\" can be split into \"i love you\". Given a string without spaces and a dictionary of valid words, determine if the string can be segmented into dictionary words."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-dp--trie",
      children: "Algorithm Steps (DP + Trie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a trie from the dictionary."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let dp[i] = true if substring s[0:i] can be segmented."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set dp[0] = true (empty string)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each end index i from 1 to n:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each start index j from 0 to i-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If dp[j] is true AND s[j:i] is in the trie, set dp[i] = true and break."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function wordBreak(s, dictionary):\r\n    trie = buildTrie(dictionary)\r\n    n = s.length\r\n    dp = array of size n+1, all false\r\n    dp[0] = true\r\n    for i = 1 to n:\r\n        for j = 0 to i-1:\r\n            if dp[j] AND trie.search(s[j:i]):\r\n                dp[i] = true\r\n                break\r\n    return dp[n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-3",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dictionary: [\"i\", \"like\", \"sam\", \"sung\", \"samsung\"]\r\nString: \"ilikesamsung\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build trie:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        root\r\n       /   \\\r\n      i     l\r\n     (!)    |\r\n            i\r\n             \\\r\n              k\r\n               \\\r\n                e(!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dp array initialization: dp[0] = true"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "s[0:i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "s[j:i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[j]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "trie search?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"i\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"i\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"il\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"il\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"l\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ili\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ili\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"li\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"i\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilik\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilike\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilike\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"like\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikes\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikes\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"likes\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"s\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesa\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesam\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesam\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"sam\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesams\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesams\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"sams\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"s\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesamsu\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesamsung\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ilikesamsung\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"samsung\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dp[11] = true, so \"i like samsung\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-6",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nbool wordBreak(string s, vector<string>& dict) {\r\n    Trie trie;\r\n    for (const string& w : dict) trie.insert(w);\r\n    int n = s.length();\r\n    vector<bool> dp(n + 1, false);\r\n    dp[0] = true;\r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 0; j < i; j++) {\r\n            if (dp[j] && trie.search(s.substr(j, i - j))) {\r\n                dp[i] = true;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    return dp[n];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef wordBreak(s: str, wordDict: List[str]) -> bool:\r\n    trie = Trie()\r\n    for w in wordDict:\r\n        trie.insert(w)\r\n    n = len(s)\r\n    dp = [False] * (n + 1)\r\n    dp[0] = True\r\n    for i in range(1, n + 1):\r\n        for j in range(i):\r\n            if dp[j] and trie.search(s[j:i]):\r\n                dp[i] = True\r\n                break\r\n    return dp[n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\npublic boolean wordBreak(String s, List<String> wordDict) {\r\n    Trie trie = new Trie();\r\n    for (String w : wordDict) trie.insert(w);\r\n    int n = s.length();\r\n    boolean[] dp = new boolean[n + 1];\r\n    dp[0] = true;\r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 0; j < i; j++) {\r\n            if (dp[j] && trie.search(s.substring(j, i))) {\r\n                dp[i] = true;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    return dp[n];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n sup2 x L) naive — for each of n sup2 substrings, a trie search of O(L). Can be optimized to O(n sup2) by traversing the trie during the inner loop instead of calling search each time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n + trie size) — dp array of size n+1 plus the trie structure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
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
            children: "Trie makes substring lookup O(L) instead of O(n) per check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP approach is O(n sup2) — can be slow for very long strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handles large dictionaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie insertion overhead for the dictionary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to modify to return all possible segmentations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-step process (build trie, then DP)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty string:"
        }), " dp[0] is true by definition (empty string can always be segmented)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No valid segmentation:"
        }), " Returns false (e.g., \"icecream\" with dict [\"i\", \"like\"])."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple valid segmentations:"
        }), " Basic DP returns true/false; extend to store parent pointers for full reconstruction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entire string is one dictionary word:"
        }), " dp[n] becomes true in the i=n, j=0 check."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trie-vs-hash-table-vs-bst--comparison-table",
      children: "Trie vs Hash Table vs BST — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exact search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (full scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n + k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest prefix match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (DFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (in-order)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N x L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining/open addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebalancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointer chasing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (array-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix operations, dictionaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-word-break-leetcode-139",
      children: "1. Word Break (LeetCode 139)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string s and a dictionary of words, determine if s can be segmented into space-separated dictionary words."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " DP + Trie (see Word Break section above). Optimization: instead of calling search for each substring, traverse the trie while extending the end index to achieve O(n sup2) time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-word-search-ii-leetcode-212",
      children: "2. Word Search II (LeetCode 212)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an m x n board of characters and a list of words, find all words from the list that appear on the board (adjacent cells, horizontal or vertical)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trie-based solution:"
      }), " Insert all words into a trie. DFS from each cell, traversing the trie simultaneously. Stop when the current trie node has no children for the next character. Use isEndOfWord to collect matches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Time: O(m x n x 4 sup L) where L = max word length\r\nSpace: O(total characters in all words)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key optimization:"
      }), " Remove the word from the trie after finding it (set isEndOfWord = false) to avoid duplicates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-longest-word-in-dictionary-leetcode-720",
      children: "3. Longest Word in Dictionary (LeetCode 720)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the longest word in the dictionary that can be built one character at a time using other words in the dictionary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trie solution:"
      }), " Insert all words. DFS the trie: at each node, only recurse if isEndOfWord is true (the prefix must be a valid word). Track the longest valid path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-replace-words-leetcode-648",
      children: "4. Replace Words (LeetCode 648)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Replace words in a sentence with their shortest root from a dictionary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trie solution:"
      }), " Insert all roots into a trie. For each word in the sentence, traverse the trie character by character. At the first node where isEndOfWord = true, replace the word with the accumulated prefix. If no root is found after traversing the full word, keep the original."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Time: O(N + M) where N = total chars in dictionary, M = total chars in sentence\r\nSpace: O(N) for the trie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-design-add-and-search-words-data-structure-leetcode-211",
      children: "5. Design Add and Search Words Data Structure (LeetCode 211)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design a data structure supporting addWord(word) and search(word) where \".\" in search matches any character."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trie solution:"
      }), " Standard insert. For search with wildcard \".\", use DFS/backtracking: at a \".\" node, explore ALL children."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def search(self, word: str) -> bool:\r\n    def dfs(node, i):\r\n        if i == len(word):\r\n            return node.isEnd\r\n        if word[i] == '.':\r\n            for child in node.children.values():\r\n                if dfs(child, i + 1):\r\n                    return True\r\n            return False\r\n        if word[i] not in node.children:\r\n            return False\r\n        return dfs(node.children[word[i]], i + 1)\r\n    return dfs(self.root, 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Trie Is Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Search Autocomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix tree over billions of search queries; top-k results with frequency-weighted ranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typing \"how to\" shows \"how to tie a tie\", \"how to make pancakes\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spell Checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie stores valid dictionary; edit-distance traversal suggests corrections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"accomodate\" to \"accommodate\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP Routing (Longest Prefix Match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary trie (radix tree) stores routing table; routers find most specific match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192.168.1.35 matches 192.168.1.0/24 over 192.168.0.0/16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9 Predictive Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie maps digit sequences to words; 2-\"abc\", 4-\"ghi\", etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"43556\" to \"hello\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNA Subsequence Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie over genome patterns; prefix search finds gene subsequences in O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding \"ATG\" start codons in a genome"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL Router (Express.js, Django)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compressed trie maps URL paths to handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/api/users/:id/profile matches /api/users/42/profile"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tries outperform hash tables at prefix matching and ordered iteration; compress them via radix trees when memory is a concern."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trie search is O(L) regardless of n"
        }), ": Search time depends only on string length, not on the number of stored strings. This makes tries ideal for dictionaries with millions of entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tries excel where hash tables fail"
        }), ": Hash tables cannot efficiently find all strings with a given prefix, support ordered iteration, or handle variable-length keys without hashing overhead. Tries do all three."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compressed trie (radix tree) saves memory"
        }), ": Merge nodes with single children into one node. This reduces the number of nodes from O(total characters) to O(number of unique strings)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ternary search tree bridges trie and BST"
        }), ": Each node has three children (less, equal, greater). It uses less memory than a trie but has O(L) search — a good middle ground."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wildcard search requires backtracking"
        }), ": The \".\" in LeetCode 211 means you cannot simply traverse — you must branch to all children and backtrack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A trie stores strings as paths in a tree with characters as edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search, insert, and lookup are O(L) where L is the string length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefix matching is natural and efficient — just traverse the prefix path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space can be large: each character may require a 26-element array per node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compressed tries (radix trees) merge single-child paths to reduce nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ternary search trees combine trie-like search with BST-like memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete requires cascading cleanup — only remove nodes not shared by other words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Word break combines tries with DP for O(n sup2) dictionary-based segmentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP routing uses binary trie longest-prefix matching for multi-million entry tables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wildcard search turns a linear traversal into a branching DFS with backtracking."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ternary Search Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (DFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (ASCII keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pointers + key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointers + char"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-trie-vs-alternatives",
      children: "Quick Reference: Trie vs Alternatives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exact search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L + results)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest prefix match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(sum characters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Trie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autocomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix matching, fast suggestions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spell checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary with prefix correction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP routing (longest prefix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radix tree = compressed trie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNA sequence search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching in genomes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient prefix-based prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL router (web framework)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path prefix matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9 predictive text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map digit sequences to words"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--gfg-deepening",
      children: "Common Mistakes & GFG Deepening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-gfg-style",
      children: "Common Mistakes (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Wrong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing trie search with hash table search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie search is O(key_length) regardless of collisions; hash table is O(1) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use trie when prefix search or ordered keys matter; hash table for pure existence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not handling empty string as a valid key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Empty string terminates at root; root needs an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "isEndOfWord"
            }), " flag"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "root.isEndOfWord = true"
            }), " if empty string is valid"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to free/deallocate children recursively (in low-level languages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only deleting the root leaks all child nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursively delete children in destructor; or use smart pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using arrays for children (wasteful for large alphabets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of 26 for English fine, but 256 ASCII or 1114112 Unicode is huge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hash map or array-of-pointers with null checks; for Unicode use Map or ternary search tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trie for sparse keysets wastes memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most nodes have only 1-2 children, but array allocates space for full alphabet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a compressed trie/radix tree or ternary search tree for sparse data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not marking isEndOfWord correctly during deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrementing counts without checking leaf status leaves stale flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only clear isEndOfWord when no children remain and it's not a prefix of another word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary search tree confusion with trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TST saves memory but has O(log n) search vs trie O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TST = hybrid, each node has 3 children (less/same/more). Use for sparse, trie for dense"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-trie-implementation",
      children: "TypeScript Trie Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TrieNode {\r\n    children: Map<string, TrieNode> = new Map();\r\n    isEndOfWord: boolean = false;\r\n    frequency: number = 0; // for prefix counting\r\n}\r\n\r\nclass Trie {\r\n    private root: TrieNode = new TrieNode();\r\n\r\n    insert(word: string): void {\r\n        let node = this.root;\r\n        for (const ch of word) {\r\n            if (!node.children.has(ch)) {\r\n                node.children.set(ch, new TrieNode());\r\n            }\r\n            node = node.children.get(ch)!;\r\n            node.frequency++; // count prefix occurrences\r\n        }\r\n        node.isEndOfWord = true;\r\n    }\r\n\r\n    search(word: string): boolean {\r\n        const node = this._traverse(word);\r\n        return node !== null && node.isEndOfWord;\r\n    }\r\n\r\n    startsWith(prefix: string): boolean {\r\n        return this._traverse(prefix) !== null;\r\n    }\r\n\r\n    countPrefix(prefix: string): number {\r\n        const node = this._traverse(prefix);\r\n        return node ? node.frequency : 0;\r\n    }\r\n\r\n    delete(word: string): boolean {\r\n        return this._delete(this.root, word, 0);\r\n    }\r\n\r\n    private _delete(node: TrieNode, word: string, depth: number): boolean {\r\n        if (depth === word.length) {\r\n            if (!node.isEndOfWord) return false;\r\n            node.isEndOfWord = false;\r\n            return node.children.size === 0;\r\n        }\r\n        const ch = word[depth];\r\n        const child = node.children.get(ch);\r\n        if (!child) return false;\r\n        \r\n        const shouldDelete = this._delete(child, word, depth + 1);\r\n        if (shouldDelete) {\r\n            node.children.delete(ch);\r\n            return node.children.size === 0 && !node.isEndOfWord;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    private _traverse(prefix: string): TrieNode | null {\r\n        let node = this.root;\r\n        for (const ch of prefix) {\r\n            if (!node.children.has(ch)) return null;\r\n            node = node.children.get(ch)!;\r\n        }\r\n        return node;\r\n    }\r\n\r\n    // Auto-complete: find all words with given prefix\r\n    autoComplete(prefix: string): string[] {\r\n        const node = this._traverse(prefix);\r\n        if (!node) return [];\r\n        const results: string[] = [];\r\n        this._collectWords(node, prefix, results);\r\n        return results;\r\n    }\r\n\r\n    private _collectWords(node: TrieNode, prefix: string, results: string[]): void {\r\n        if (node.isEndOfWord) results.push(prefix);\r\n        for (const [ch, child] of node.children) {\r\n            this._collectWords(child, prefix + ch, results);\r\n        }\r\n    }\r\n\r\n    // Find longest common prefix among all words\r\n    longestCommonPrefix(): string {\r\n        let node = this.root;\r\n        let prefix = '';\r\n        while (node.children.size === 1 && !node.isEndOfWord) {\r\n            const [ch, child] = node.children.entries().next().value;\r\n            prefix += ch;\r\n            node = child;\r\n        }\r\n        return prefix;\r\n    }\r\n}\r\n\r\n// Word search in a grid using Trie (LC 212)\r\nfunction findWords(board: string[][], words: string[]): string[] {\r\n    const trie = new Trie();\r\n    for (const w of words) trie.insert(w);\r\n    const result = new Set<string>();\r\n    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];\r\n    \r\n    function dfs(r: number, c: number, node: TrieNode, path: string): void {\r\n        if (node.isEndOfWord) result.add(path);\r\n        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return;\r\n        const ch = board[r][c];\r\n        const child = node.children.get(ch);\r\n        if (!child) return;\r\n        \r\n        board[r][c] = '#'; // mark visited\r\n        for (const [dr, dc] of dirs) dfs(r + dr, c + dc, child, path + ch);\r\n        board[r][c] = ch; // restore\r\n    }\r\n    \r\n    for (let r = 0; r < board.length; r++) {\r\n        for (let c = 0; c < board[0].length; c++) {\r\n            dfs(r, c, trie['root'], '');\r\n        }\r\n    }\r\n    return [...result];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the space complexity of a trie storing n strings of average length L over an alphabet of size A?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(nL)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(nL × A) ✓ (worst-case: each char creates A children)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(A)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A ternary search tree (TST) node stores:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) One character and three child pointers ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Three characters and one pointer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) A character array"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) A hash map"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The number of nodes in a trie for the set {a, aa, aaa, ..., a^k} is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) k"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) k(k+1)/2 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 2^k"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) k²"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Trie is preferred over hash set when:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Memory is the primary concern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Prefix queries are frequent ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Insert order must be preserved"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The key set is small"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A compressed trie (radix tree) compresses:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Leaf nodes into arrays"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Chains of single-child nodes into a single node ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) All nodes into a hash map"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Characters into bits"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In the word search II problem (LC 212), using a trie reduces time complexity from:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(k × m × n) to O(k)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(m × n × 4^L) to O(m × n × 4^L) with pruning ✓ (trie prunes search)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(L²) to O(L)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(k log k) to O(k)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 8-c, 9-a, 10-b, 11-b, 12-b, 13-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Replace words (LC 648)"
          }), ": Given a dictionary of roots and a sentence, replace all words with their shortest root prefix. Use a trie."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Longest word in dictionary (LC 720)"
          }), ": Find the longest word that can be built one character at a time from other words in a dictionary."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Map sum pairs (LC 677)"
          }), ": Design a map that supports ", (0,jsx_runtime.jsx)(_components.code, {
            children: "insert(key, val)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sum(prefix)"
          }), " returning sum of all values of keys starting with the prefix."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Palindrome pairs (LC 336)"
          }), ": Given a list of words, find all pairs of distinct indices (i, j) such that words[i] + words[j] is a palindrome. Use trie + reverse lookup."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stream of characters (LC 1032)"
          }), ": Design a data structure that supports ", (0,jsx_runtime.jsx)(_components.code, {
            children: "query(letter)"
          }), " returning true if any previously seen word suffix matches. Use a reversed trie."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design search autocomplete system (LC 642)"
          }), ": Design a system that suggests top-3 sentences given a prefix, based on previous query frequencies."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract all words matching a wildcard pattern"
          }), ": Given a trie and a pattern with '?' wildcard, return all words matching the pattern."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Phone directory with trie"
          }), ": Given a list of contacts and a phone number string, suggest all contacts matching the prefix as digits are typed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum XOR of two numbers in an array (LC 421)"
          }), ": Use a binary trie to find two numbers whose XOR is maximum."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trie-variants-comparison",
      children: "Trie Variants Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of A pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(nL × A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense alphabets, small A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-map based Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map<char, node>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(nL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode, sparse keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compressed Trie (Radix Tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String + children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP routing, longest prefix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary Search Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 child pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L + log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse keys, memory-limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to suffix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patricia Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit-level indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP routing, memory-constrained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Hash function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Tree height"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What operation is natural in tries but impossible in hash tables?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Exact lookup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Prefix matching"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Insertion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Deletion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What reduces memory in a compressed trie?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Fewer characters"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Merging single-child paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Using arrays"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Hashing keys"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A ternary search tree node has how many children?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 26"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Unlimited"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which data structure is a compressed trie used for IP routing?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) B-tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Radix tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Hash table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) AVL tree"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What happens when deleting \"app\" from a trie that also contains \"apple\"?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Both words are removed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Only \"app\" is removed; \"apple\" remains"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The trie throws an error"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Nodes along \"app\" are deleted"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In Word Search II, why do we remove a word from the trie after finding it?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) To save memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) To avoid duplicate results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) To speed up future searches"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) To prevent infinite loops"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A trie stores strings as paths in a tree, with characters on edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operations run in O(L) time independent of the number of stored strings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The trie supports prefix matching naturally, which hash tables cannot."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space can be optimized with compressed tries (radix trees) or ternary search trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete uses cascading cleanup to remove unshared nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Word break combines tries with dynamic programming for string segmentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Longest prefix matching is the backbone of IP routing tables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wildcard search in tries requires DFS backtracking over all child paths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tries are fundamental to autocomplete, spell check, IP routing, and DNA sequence analysis."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is trie search faster than BST search for string keys?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the space complexity of a trie, and how can it be reduced?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can a hash table not efficiently support prefix matching?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the cascading cleanup in trie deletion — when can a node be safely deleted?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does wildcard search (LeetCode 211) differ from standard search in a trie?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reverse trie"
        }), " to find suffixes (e.g., words ending with \"ing\")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to find the longest common prefix among a set of strings using a trie."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ternary search tree"
        }), " (TST) as an alternative to a trie with lower memory overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Word Search II"
        }), " (LeetCode 212) using a trie as the core data structure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that uses a trie to implement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T9 predictive text"
        }), ": given a digit sequence, return all matching dictionary words."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "compressed trie"
        }), " (radix tree / Patricia trie) where edges with single-child paths are concatenated. Compare insertion and search time against the standard trie for a large dictionary."]
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



/***/ }

}]);