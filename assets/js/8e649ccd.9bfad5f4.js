"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[44665],{

/***/ 17875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_14_string_algorithms_md_8e6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-14-string-algorithms-md-8e6.json
const site_docs_courses_algorithms_14_string_algorithms_md_8e6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/14-string-algorithms","title":"Chapter 14: String Algorithms","description":"Prerequisites Network Flow — Algorithm design techniques, complexity analysis | Next NP-Completeness — From efficient algorithms to hardness theory","source":"@site/docs/courses/algorithms/14-string-algorithms.md","sourceDirName":"courses/algorithms","slug":"/algorithms/14-string-algorithms","permalink":"/ai-engineering-journey/algorithms/14-string-algorithms","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-string-algorithms","slug":"/algorithms/14-string-algorithms","title":"Chapter 14: String Algorithms","sidebar_label":"Chapter 14: String Algorithms","sidebar_position":14},"sidebar":"course-algorithms","previous":{"title":"Chapter 13: Network Flow","permalink":"/ai-engineering-journey/algorithms/13-graph-flow"},"next":{"title":"Chapter 15: NP-Completeness","permalink":"/ai-engineering-journey/algorithms/15-np-completeness"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/14-string-algorithms.md


const frontMatter = {
	id: '14-string-algorithms',
	slug: '/algorithms/14-string-algorithms',
	title: 'Chapter 14: String Algorithms',
	sidebar_label: 'Chapter 14: String Algorithms',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: String Algorithms';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why String Algorithms Matter",
  "id": "why-string-algorithms-matter",
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
  "value": "14.1 Naive Pattern Search",
  "id": "141-naive-pattern-search",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run",
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
  "value": "14.2 Knuth-Morris-Pratt (KMP) Algorithm",
  "id": "142-knuth-morris-pratt-kmp-algorithm",
  "level": 2
}, {
  "value": "The Key Insight",
  "id": "the-key-insight",
  "level": 3
}, {
  "value": "Steps to Compute Prefix Function",
  "id": "steps-to-compute-prefix-function",
  "level": 3
}, {
  "value": "Steps for KMP Matching",
  "id": "steps-for-kmp-matching",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run — Prefix Function",
  "id": "dry-run--prefix-function",
  "level": 3
}, {
  "value": "Dry Run — Matching Phase",
  "id": "dry-run--matching-phase",
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
  "value": "14.3 Rabin-Karp Algorithm",
  "id": "143-rabin-karp-algorithm",
  "level": 2
}, {
  "value": "The Key Insight",
  "id": "the-key-insight-1",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 3
}, {
  "value": "Rolling Hash Formula",
  "id": "rolling-hash-formula",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-1",
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
  "value": "14.4 Z-Algorithm",
  "id": "144-z-algorithm",
  "level": 2
}, {
  "value": "The Key Insight",
  "id": "the-key-insight-2",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-2",
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
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "14.5 Aho-Corasick Algorithm",
  "id": "145-aho-corasick-algorithm",
  "level": 2
}, {
  "value": "The Key Insight",
  "id": "the-key-insight-3",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run",
  "id": "dry-run-3",
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
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "14.6 Suffix Array &amp; Trie",
  "id": "146-suffix-array--trie",
  "level": 2
}, {
  "value": "Suffix Array",
  "id": "suffix-array",
  "level": 3
}, {
  "value": "Prefix-Doubling Construction",
  "id": "prefix-doubling-construction",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 4
}, {
  "value": "Dry Run: S = &quot;banana&quot;",
  "id": "dry-run-s--banana",
  "level": 4
}, {
  "value": "LCP Array (Kasai&#39;s Algorithm)",
  "id": "lcp-array-kasais-algorithm",
  "level": 3
}, {
  "value": "Steps",
  "id": "steps-1",
  "level": 4
}, {
  "value": "Dry Run: SA = [5, 3, 1, 0, 4, 2], S = &quot;banana&quot;",
  "id": "dry-run-sa--5-3-1-0-4-2-s--banana",
  "level": 4
}, {
  "value": "Applications",
  "id": "applications",
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
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "14.7 Manacher&#39;s Algorithm",
  "id": "147-manachers-algorithm",
  "level": 2
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 3
}, {
  "value": "String Algorithm Comparison",
  "id": "string-algorithm-comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. Longest Palindromic Substring",
  "id": "1-longest-palindromic-substring",
  "level": 3
}, {
  "value": "2. Longest Common Prefix (LCP) of an Array of Strings",
  "id": "2-longest-common-prefix-lcp-of-an-array-of-strings",
  "level": 3
}, {
  "value": "3. Wildcard Pattern Matching",
  "id": "3-wildcard-pattern-matching",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Ctrl+F in Browsers and Editors",
  "id": "ctrlf-in-browsers-and-editors",
  "level": 3
}, {
  "value": "Bioinformatics — DNA Pattern Search",
  "id": "bioinformatics--dna-pattern-search",
  "level": 3
}, {
  "value": "Network Intrusion Detection Systems (NIDS)",
  "id": "network-intrusion-detection-systems-nids",
  "level": 3
}, {
  "value": "Plagiarism Detection",
  "id": "plagiarism-detection",
  "level": 3
}, {
  "value": "Search Engine Indexing",
  "id": "search-engine-indexing",
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
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-14-string-algorithms",
        children: "Chapter 14: String Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/13-graph-flow",
          children: "Chapter 13: Network Flow"
        }), " — Algorithm design techniques, complexity analysis | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/15-np-completeness",
          children: "Chapter 15: NP-Completeness"
        }), " — From efficient algorithms to hardness theory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze KMP, Rabin-Karp, and Z-algorithm for pattern matching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Manacher's algorithm to find all palindromic substrings in linear time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a suffix array and LCP array in ( O(n \\log n) ) time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply suffix arrays to solve substring queries, pattern matching, and string analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Aho-Corasick automaton for multi-pattern matching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze trade-offs between string algorithms and choose the right one for a given problem."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-string-algorithms-matter",
      children: "Why String Algorithms Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Every second, billions of strings are searched."
      }), " When you press Ctrl+F in a document, your browser scans thousands of characters in milliseconds. When BLAST searches a DNA database, it aligns 3 billion base pairs against your query. When your phone autocorrects \"teh\" to \"the\", it computes edit distance instantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "String algorithms are the invisible engine behind:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search engines"
        }), " — Google indexes trillions of web pages using suffix structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bioinformatics"
        }), " — Finding a gene in the human genome is a pattern-matching problem on a string of length 3.2 billion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spell checkers & autocomplete"
        }), " — Tries and edit distance power every text input field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intrusion detection systems"
        }), " — Snort and Suricata match thousands of attack signatures against every packet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plagiarism detection"
        }), " — Turnitin uses suffix arrays to find substring overlaps between documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compression"
        }), " — gzip uses the LZ77 algorithm, which is fundamentally a string-matching problem"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're looking for a specific sentence in a 500-page book. The naive approach is to scan every page word-by-word — at worst, you read the whole book every time. A better approach is the index at the back (like a suffix array): you look up the first word, and it tells you every page that word appears on. Even better is knowing patterns in the language itself — like KMP's prefix function, which tells you \"if this word doesn't match, you can skip ahead by exactly this much because you've already read enough to know.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter transforms the simple act of \"finding a string in another string\" from O(n²) brute force into O(n) elegance."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Naive Pattern Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(nm) baseline; understand why we need better"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix function avoids re-scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m) linear time pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling hash comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m) average; hash collisions can break worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z-array for pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler than KMP for some variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie + failure links = multi-pattern KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for any number of patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted suffixes via doubling + radix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) build; O(m log n) pattern search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCP Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest common prefix between adjacent suffixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables O(m + log n) pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manacher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror property of palindromes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) to find all palindromes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[String Algorithms] --> B[Pattern Matching]\n    A --> C[Palindrome]\n    A --> D[Suffix Structures]\n    A --> E[Multi-Pattern]\n    B --> F[Naive O(nm)]\n    B --> G[KMP O(n+m)]\n    B --> H[Rabin-Karp O(n+m) avg]\n    B --> I[Z-Algorithm O(n)]\n    C --> J[Manacher O(n)]\n    D --> K[Suffix Array O(n log n)]\n    D --> L[LCP Array O(n)]\n    E --> M[Aho-Corasick O(n)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch14-string-algorithms.png",
        alt: "String Algorithms Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-naive-pattern-search",
      children: "14.1 Naive Pattern Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You have a key (the pattern) and a long row of locks (the text). You try the key at the first lock, then the second, then the third — at each position, you check whether every tumbler aligns. If the key doesn't fit at position i, you move to i+1 and try again."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given text (T[0..n-1]) and pattern (P[0..m-1]), slide the pattern over the text one position at a time. At each shift (s), compare (T[s..s+m-1]) with (P[0..m-1]) character by character."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let (n = \\text{len}(T)), (m = \\text{len}(P))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each shift (s) from 0 to (n-m):\na. Set (j = 0)\nb. While (j < m) and (T[s+j] == P[j]): increment (j)\nc. If (j == m): report match at position (s)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NaiveSearch(T, P):\n    n = len(T), m = len(P)\n    for s = 0 to n - m:\n        j = 0\n        while j < m and T[s + j] == P[j]:\n            j = j + 1\n        if j == m:\n            print \"Match at position\", s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Text:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABABDABACDABABCABAB"
      }), " (n=18)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABABCABAB"
      }), " (m=9)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Shift"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison Sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B≠C✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[7]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B≠A✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B≠C✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[9]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B≠A✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D≠A✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=A✓ B=B✓ A=A✓ C≠B✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[7]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B≠A✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=A✓ C≠B✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[8]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C≠A✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[8]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D≠A✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail at T[9]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=A✓ B=B✓ A=A✓ B=B✓ C=C✓ A=A✓ B=B✓ A=A✓ B=B✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Match at 10"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\n#include <vector>\n#include <string>\n\nstd::vector<int> naiveSearch(const std::string& T, const std::string& P) {\n    std::vector<int> matches;\n    int n = T.size(), m = P.size();\n    for (int s = 0; s <= n - m; ++s) {\n        int j = 0;\n        while (j < m && T[s + j] == P[j]) ++j;\n        if (j == m) matches.push_back(s);\n    }\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef naive_search(T: str, P: str) -> list[int]:\n    n, m = len(T), len(P)\n    matches = []\n    for s in range(n - m + 1):\n        j = 0\n        while j < m and T[s + j] == P[j]:\n            j += 1\n        if j == m:\n            matches.append(s)\n    return matches\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic static List<Integer> naiveSearch(String T, String P) {\n    List<Integer> matches = new ArrayList<>();\n    int n = T.length(), m = P.length();\n    for (int s = 0; s <= n - m; s++) {\n        int j = 0;\n        while (j < m && T.charAt(s + j) == P.charAt(j)) j++;\n        if (j == m) matches.add(s);\n    }\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparisons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Omega(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern mismatches at first character of every shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nm) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each shift matches ( m-1 ) characters then fails (e.g., T=\"AAAAAB\", P=\"AAAAB\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random text has very low probability of multiple consecutive matches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(nm)) worst-case. For each of (n-m+1 \\approx n) shifts, we compare up to (m) characters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(1)) — only loop counters."]
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
            children: "Simple to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(nm) worst-case is too slow for large texts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No preprocessing required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-examines already-matched characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any alphabet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No early termination for long partial matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No extra memory needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for n > 10⁵"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern longer than text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ab\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abcde\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern not found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abcdef\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"xyz\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All same characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AAAAAA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AAA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches at 0,1,2,3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AAAA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches at 0,1,2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match at 0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-knuth-morris-pratt-kmp-algorithm",
      children: "14.2 Knuth-Morris-Pratt (KMP) Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're reading a book and searching for the word \"needle.\" When you get to \"needless,\" you realize \"needle\" doesn't match — but you already know the text reads \"needl-.\" Instead of going back to the 'e' and starting over, you skip ahead to where the next possible match could begin, because \"needl-\" shares a suffix with the prefix \"needle.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-key-insight",
      children: "The Key Insight"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prefix function"
      }), " (also called the failure function) (\\pi[i]) stores the length of the longest proper prefix of (P[0..i]) that is also a suffix of (P[0..i]). When a mismatch occurs at position (j) in the pattern, the prefix function tells us how far to shift: the next comparison starts at (\\pi[j-1]) instead of 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-to-compute-prefix-function",
      children: "Steps to Compute Prefix Function"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize (\\pi[0] = 0), (k = 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each (i) from 1 to (m-1):\na. While (k > 0) and (P[k] \\neq P[i]): set (k = \\pi[k-1])\nb. If (P[k] == P[i]): increment (k)\nc. Set (\\pi[i] = k)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-kmp-matching",
      children: "Steps for KMP Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute (\\pi) array from the pattern."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize (j = 0) (pattern index)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each (i) from 0 to (n-1) (text index):\na. While (j > 0) and (T[i] \\neq P[j]): set (j = \\pi[j-1])\nb. If (T[i] == P[j]): increment (j)\nc. If (j == m): report match at (i-m+1), set (j = \\pi[j-1])"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ComputePrefix(P):\n    m = len(P)\n    pi[0] = 0\n    k = 0\n    for i = 1 to m-1:\n        while k > 0 and P[k] != P[i]:\n            k = pi[k-1]\n        if P[k] == P[i]:\n            k = k + 1\n        pi[i] = k\n    return pi\n\nKMP(T, P):\n    pi = ComputePrefix(P)\n    j = 0\n    for i = 0 to n-1:\n        while j > 0 and T[i] != P[j]:\n            j = pi[j-1]\n        if T[i] == P[j]:\n            j = j + 1\n        if j == m:\n            print \"Match at\", i - m + 1\n            j = pi[j-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--prefix-function",
      children: "Dry Run — Prefix Function"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABCABD"
      }), " (m=6)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "while loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P[k]==P[i]?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "k (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "(\\pi[i])"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A≠B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A≠C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A==A✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B==B✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "while: k=(\\pi)[1]=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A≠D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " (\\pi = [0, 0, 0, 1, 2, 0])"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--matching-phase",
      children: "Dry Run — Matching Phase"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Text:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABCABCABD"
      }), " (n=9), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABCABD"
      }), " (m=6), (\\pi = [0,0,0,1,2,0])"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T[i]==P[j]?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A==A✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B==B✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C==C✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A==A✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B==B✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C≠D✗ → j=(\\pi)[4]=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fallback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C==C✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A==A✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B==B✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D==D✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Match at 3"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\n#include <vector>\n#include <string>\n\nstd::vector<int> computePrefix(const std::string& P) {\n    int m = P.size();\n    std::vector<int> pi(m, 0);\n    for (int i = 1, k = 0; i < m; ++i) {\n        while (k > 0 && P[k] != P[i])\n            k = pi[k - 1];\n        if (P[k] == P[i]) ++k;\n        pi[i] = k;\n    }\n    return pi;\n}\n\nstd::vector<int> kmp(const std::string& T, const std::string& P) {\n    std::vector<int> matches;\n    auto pi = computePrefix(P);\n    int n = T.size(), m = P.size();\n    for (int i = 0, j = 0; i < n; ++i) {\n        while (j > 0 && T[i] != P[j])\n            j = pi[j - 1];\n        if (T[i] == P[j]) ++j;\n        if (j == m) {\n            matches.push_back(i - m + 1);\n            j = pi[j - 1];\n        }\n    }\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef compute_prefix(P: str) -> list[int]:\n    m = len(P)\n    pi = [0] * m\n    k = 0\n    for i in range(1, m):\n        while k > 0 and P[k] != P[i]:\n            k = pi[k - 1]\n        if P[k] == P[i]:\n            k += 1\n        pi[i] = k\n    return pi\n\ndef kmp(T: str, P: str) -> list[int]:\n    pi = compute_prefix(P)\n    matches = []\n    j = 0\n    for i, ch in enumerate(T):\n        while j > 0 and ch != P[j]:\n            j = pi[j - 1]\n        if ch == P[j]:\n            j += 1\n        if j == len(P):\n            matches.append(i - len(P) + 1)\n            j = pi[j - 1]\n    return matches\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic static int[] computePrefix(String P) {\n    int m = P.length();\n    int[] pi = new int[m];\n    for (int i = 1, k = 0; i < m; i++) {\n        while (k > 0 && P.charAt(k) != P.charAt(i))\n            k = pi[k - 1];\n        if (P.charAt(k) == P.charAt(i)) k++;\n        pi[i] = k;\n    }\n    return pi;\n}\n\npublic static List<Integer> kmp(String T, String P) {\n    int[] pi = computePrefix(P);\n    List<Integer> matches = new ArrayList<>();\n    int n = T.length(), m = P.length();\n    for (int i = 0, j = 0; i < n; i++) {\n        while (j > 0 && T.charAt(i) != P.charAt(j))\n            j = pi[j - 1];\n        if (T.charAt(i) == P.charAt(j)) j++;\n        if (j == m) {\n            matches.add(i - m + 1);\n            j = pi[j - 1];\n        }\n    }\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration of the while loop decreases (k), and (k) increases at most (m) times total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The text pointer (i) never decreases; (j) decreases only via (\\pi)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "(O(n + m))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The pattern and text are each scanned exactly once"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(m)) for the prefix array."]
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
            children: "Guaranteed O(n+m) time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to understand and debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text pointer never backtracks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires O(m) extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No hash collisions to worry about"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to implement correctly than Rabin-Karp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for streaming/searching large texts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only handles single-pattern search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching loop runs 0 times, no matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern longer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ab\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abcde\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j never reaches m, no matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All same chars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AAAA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\pi = [0,1]); matches at 0,1,2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ABABA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ABA\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\pi = [0,0,1]); matches at 0,2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"abcabc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\pi = [0]); matches at 0,3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " KMP's prefix function (pi array) encodes the \"border\" of each prefix — the longest proper prefix that is also a suffix. This is the key to O(n+m) performance because it never backtracks in the text."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The prefix function is computed on the pattern alone before matching begins. The matching phase runs in O(n) time by always advancing the text pointer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " KMP achieves O(n+m) pattern matching by computing a prefix function on the pattern that encodes how far to shift on mismatch without re-examining matched text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-rabin-karp-algorithm",
      children: "14.3 Rabin-Karp Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're looking for a specific fingerprint in a database. Instead of comparing every ridge detail (which is slow), you compute a hash of the fingerprint and only do a detailed comparison when the hash matches. As you slide through the database, you update the hash incrementally instead of recomputing from scratch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-key-insight-1",
      children: "The Key Insight"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rolling hash"
      }), " to compute the hash of each text window in O(1) time from the previous window's hash. Only perform character-by-character comparison when hashes match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute (hp = \\text{hash}(P)) using base (d) and modulus (q)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute (ht = \\text{hash}(T[0..m-1]))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each window starting at (i) from 0 to (n-m):\na. If (ht == hp) and (T[i..i+m-1] == P): report match.\nb. If (i < n-m): update (ht) to the hash of (T[i+1..i+m])."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rolling-hash-formula",
      children: "Rolling Hash Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "( h(s) = (s[0] \\cdot d^{m-1} + s[1] \\cdot d^{m-2} + \\cdots + s[m-1]) \\bmod q )"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update: ( h_{\\text{new}} = (d \\cdot (h_{\\text{old}} - T[i] \\cdot d^{m-1}) + T[i+m]) \\bmod q )"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RabinKarp(T, P):\n    d = 256, q = large prime\n    m = len(P), n = len(T)\n    hp = 0, ht = 0, h = 1\n    for i = 0 to m-2:\n        h = (h * d) % q\n    for i = 0 to m-1:\n        hp = (d * hp + P[i]) % q\n        ht = (d * ht + T[i]) % q\n    for i = 0 to n-m:\n        if hp == ht:\n            if T[i..i+m-1] == P:\n                print \"Match at\", i\n        if i < n-m:\n            ht = (d * (ht - T[i] * h) + T[i+m]) % q\n            if ht < 0: ht += q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-1",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Text:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CCABCA"
      }), " (n=6), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ABC"
      }), " (m=3)", (0,jsx_runtime.jsx)(_components.br, {}), "\nLet (d = 10, q = 13) for simplicity (using character values A=1, B=2, C=3)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern hash:"
      }), " ( hp = (1 \\cdot 10^2 + 2 \\cdot 10^1 + 3 \\cdot 10^0) \\bmod 13 = (100 + 20 + 3) \\bmod 13 = 123 \\bmod 13 = 6 )"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "hp==ht?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "char match?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "((3\\cdot100+3\\cdot10+1)\\bmod13 = 331\\bmod13 = 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CCA≠ABC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10\\cdot(6-3\\cdot10)+2)\\bmod13 = (-238)\\bmod13 = 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10\\cdot(9-3\\cdot10)+3)\\bmod13 = (-177)\\bmod13 = 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABC==ABC✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Match at 2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10\\cdot(6-1\\cdot10)+1)\\bmod13 = (-39)\\bmod13 = 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\n#include <vector>\n#include <string>\n\nstd::vector<int> rabinKarp(const std::string& T, const std::string& P) {\n    int d = 256, q = 101;\n    int m = P.size(), n = T.size();\n    std::vector<int> matches;\n    int hp = 0, ht = 0, h = 1;\n    for (int i = 0; i < m - 1; ++i) h = (h * d) % q;\n    for (int i = 0; i < m; ++i) {\n        hp = (d * hp + P[i]) % q;\n        ht = (d * ht + T[i]) % q;\n    }\n    for (int i = 0; i <= n - m; ++i) {\n        if (hp == ht) {\n            int j = 0;\n            while (j < m && T[i + j] == P[j]) ++j;\n            if (j == m) matches.push_back(i);\n        }\n        if (i < n - m) {\n            ht = (d * (ht - T[i] * h) + T[i + m]) % q;\n            if (ht < 0) ht += q;\n        }\n    }\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef rabin_karp(T: str, P: str) -> list[int]:\n    d, q = 256, 101\n    m, n = len(P), len(T)\n    matches = []\n    h = pow(d, m - 1, q)\n    hp = ht = 0\n    for i in range(m):\n        hp = (d * hp + ord(P[i])) % q\n        ht = (d * ht + ord(T[i])) % q\n    for i in range(n - m + 1):\n        if hp == ht:\n            if T[i:i + m] == P:\n                matches.append(i)\n        if i < n - m:\n            ht = (d * (ht - ord(T[i]) * h) + ord(T[i + m])) % q\n    return matches\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic static List<Integer> rabinKarp(String T, String P) {\n    int d = 256, q = 101;\n    int m = P.length(), n = T.length();\n    List<Integer> matches = new ArrayList<>();\n    int hp = 0, ht = 0, h = 1;\n    for (int i = 0; i < m - 1; i++) h = (h * d) % q;\n    for (int i = 0; i < m; i++) {\n        hp = (d * hp + P.charAt(i)) % q;\n        ht = (d * ht + T.charAt(i)) % q;\n    }\n    for (int i = 0; i <= n - m; i++) {\n        if (hp == ht) {\n            int j = 0;\n            while (j < m && T.charAt(i + j) == P.charAt(j)) j++;\n            if (j == m) matches.add(i);\n        }\n        if (i < n - m) {\n            ht = (d * (ht - T.charAt(i) * h) + T.charAt(i + m)) % q;\n            if (ht < 0) ht += q;\n        }\n    }\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n + m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash never matches (or rarely matches) without actual pattern match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(nm))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every window's hash collides with pattern hash, forcing full comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n + m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With a good hash function and large prime modulus, collisions are rare"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(1)) — only a few integer variables."]
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
            children: "Expected linear time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case O(nm) with bad hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) extra space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful modulo arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Easily extends to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "multiple patterns"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash collisions need character verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for plagiarism detection (rolling hash of phrases)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing d and q affects collision probability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle separately (match at every position)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern longer than text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop condition (n-m) negative; handle upfront"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All same characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash works fine; no extra collisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character verification catches false positives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large texts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use 64-bit mod or double hashing to reduce collision risk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use a large prime modulus (e.g., (10^9+7)) and a random base to minimize hash collisions. Double hashing or a rolling checksum eliminates worst-case collisions entirely."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The worst-case O(nm) occurs when all window hashes collide with the pattern hash. Always do a character-by-character verification when hashes match."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Rabin-Karp uses rolling hash for O(n+m) expected-time pattern matching with worst-case O(nm) when hash collisions are frequent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-z-algorithm",
      children: "14.4 Z-Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You have a song and want to find every time the chorus repeats. The Z-algorithm is like building a table that says, \"Starting at each position in the song, the next N notes are identical to the first N notes of the song.\" When that N equals the length of the chorus, you've found a match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-key-insight-2",
      children: "The Key Insight"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Z-array"
      }), " (Z[i]) stores the length of the longest substring starting at position (i) that matches the prefix of the string. For pattern matching, concatenate (P + \\text{separator} + T), compute the Z-array, and every (Z[i] = m) indicates a match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize (Z[0] = 0), (l = r = 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each (i) from 1 to (n-1):\na. If (i \\le r): (Z[i] = \\min(r - i + 1, Z[i - l]))\nb. While (i + Z[i] < n) and (S[Z[i]] == S[i + Z[i]]): increment (Z[i])\nc. If (i + Z[i] - 1 > r): set (l = i), (r = i + Z[i] - 1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ComputeZ(S):\n    n = len(S)\n    Z[0] = 0\n    l = 0, r = 0\n    for i = 1 to n-1:\n        if i <= r:\n            Z[i] = min(r - i + 1, Z[i - l])\n        while i + Z[i] < n and S[Z[i]] == S[i + Z[i]]:\n            Z[i]++\n        if i + Z[i] - 1 > r:\n            l = i\n            r = i + Z[i] - 1\n    return Z\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern matching:"
      }), " Concatenate (P + $ + T), compute Z-array. Every (Z[i] = m) means a match at position (i - m - 1) in the original text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-2",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aab"
      }), " (m=3), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Text:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aabaab"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Concatenated S:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aab$aabaab"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i≤r?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Z[i] init"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "While expansion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Z[i] final"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "l"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "r"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1>0=✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[1]==S[0] ✓, S[2]==S[1] ✓, S[3]≠S[2] ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2>2=✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[2]≠S[0] ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3>2=✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[3]≠S[0] ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4>2=✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[4]==S[0] ✓, S[5]==S[1] ✓, S[6]==S[2] ✓, S[7]≠S[3] ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5≤6=✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(2, Z[1]=2)=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[7]≠S[2] ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6≤6=✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(1, Z[2]=0)=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[6]≠S[0] ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7>6=✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S[7]==S[0] ✓, S[8]==S[1] ✓, end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8≤8=✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(1, Z[1]=2)=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matches:"
      }), " (Z[4] = 3 = m) → match at (4 - 3 - 1 = 0).", (0,jsx_runtime.jsx)(_components.br, {}), "\n(Z[4] = 3) → match at position 0 in original text. Indeed, \"aab\" is at position 0 and 3 in \"aabaab\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\n#include <vector>\n#include <string>\n\nstd::vector<int> computeZ(const std::string& S) {\n    int n = S.size();\n    std::vector<int> Z(n, 0);\n    int l = 0, r = 0;\n    for (int i = 1; i < n; ++i) {\n        if (i <= r)\n            Z[i] = std::min(r - i + 1, Z[i - l]);\n        while (i + Z[i] < n && S[Z[i]] == S[i + Z[i]])\n            ++Z[i];\n        if (i + Z[i] - 1 > r) {\n            l = i;\n            r = i + Z[i] - 1;\n        }\n    }\n    return Z;\n}\n\nstd::vector<int> zMatch(const std::string& T, const std::string& P) {\n    std::string S = P + \"$\" + T;\n    auto Z = computeZ(S);\n    std::vector<int> matches;\n    int m = P.size();\n    for (int i = m + 1; i < (int)Z.size(); ++i)\n        if (Z[i] == m) matches.push_back(i - m - 1);\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef compute_z(S: str) -> list[int]:\n    n = len(S)\n    Z = [0] * n\n    l = r = 0\n    for i in range(1, n):\n        if i <= r:\n            Z[i] = min(r - i + 1, Z[i - l])\n        while i + Z[i] < n and S[Z[i]] == S[i + Z[i]]:\n            Z[i] += 1\n        if i + Z[i] - 1 > r:\n            l, r = i, i + Z[i] - 1\n    return Z\n\ndef z_match(T: str, P: str) -> list[int]:\n    S = P + \"$\" + T\n    Z = compute_z(S)\n    m = len(P)\n    return [i - m - 1 for i in range(m + 1, len(Z)) if Z[i] == m]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic static int[] computeZ(String S) {\n    int n = S.length();\n    int[] Z = new int[n];\n    int l = 0, r = 0;\n    for (int i = 1; i < n; i++) {\n        if (i <= r)\n            Z[i] = Math.min(r - i + 1, Z[i - l]);\n        while (i + Z[i] < n && S.charAt(Z[i]) == S.charAt(i + Z[i]))\n            Z[i]++;\n        if (i + Z[i] - 1 > r) {\n            l = i;\n            r = i + Z[i] - 1;\n        }\n    }\n    return Z;\n}\n\npublic static List<Integer> zMatch(String T, String P) {\n    String S = P + \"$\" + T;\n    int[] Z = computeZ(S);\n    List<Integer> matches = new ArrayList<>();\n    int m = P.length();\n    for (int i = m + 1; i < Z.length; i++)\n        if (Z[i] == m) matches.add(i - m - 1);\n    return matches;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-array computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The while loop advances the (r) boundary; (r) only increases, total increments ≤ (n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n + m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One Z-array pass with O(1) checks per position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "(O(n + m))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in the length of the concatenated string"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(n + m)) for the Z-array and concatenated string."]
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
            children: "Simple, clean implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires O(n) extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single linear-time pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separtor character must not appear in P or T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to reason about correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenated string doubles memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well for pattern matching and string analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not as well-known as KMP in interview settings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat as always matched"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern longer than text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (Z[i] = m) found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separator in text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use a character not in the alphabet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z is always 0 or 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All same characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z values grow linearly; works correctly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The Z-algorithm is simpler to implement than KMP for pattern matching — just concatenate P + \"$\" + T, compute the Z-array, and look for Z[i] = len(P). The separator character must not appear in either string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The Z-algorithm's linear time comes from maintaining the [l, r] interval of the rightmost matching prefix — it never recomputes matches inside this window."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The Z-algorithm computes the longest prefix match at each position in O(n) by maintaining the rightmost matching window [l, r]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-aho-corasick-algorithm",
      children: "14.5 Aho-Corasick Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're a security guard monitoring a building with 1000 \"banned items\" on your list. Instead of searching for each item one at a time (which would take 1000 passes), you build a single master checklist. As you walk through the building, you check off items from the master list in one continuous sweep. Aho-Corasick does the same for strings: it searches for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all patterns simultaneously"
      }), " in a single pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-key-insight-3",
      children: "The Key Insight"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trie"
      }), " of all patterns, then add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "failure links"
      }), " (like KMP's prefix function but extended to a tree). Failure links redirect mismatches to the longest proper suffix that is also a prefix of some pattern. The result is an automaton that processes the text in (O(n)) time, regardless of how many patterns exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Build Trie"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a root node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each pattern, traverse the trie character by character, creating new nodes as needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark nodes that correspond to the end of a pattern."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Add Failure Links (BFS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root's direct children have failure = root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each node in BFS order:\na. For each child (c) of the current node:\ni. Let (fail = \\text{failure}(\\text{current})).\nii. While (fail \\neq \\text{root}) and (fail) has no child (c): (fail = \\text{failure}(fail)).\niii. If (fail) has child (c): (\\text{failure}(c) = \\text{child}(fail, c)); else (\\text{failure}(c) = \\text{root}).\niv. Merge output links: if (\\text{failure}(c)) is a pattern end, add that pattern to (c)'s outputs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: Search"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at root."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each character in the text:\na. While current node has no child for this character: follow failure link.\nb. If a child exists, move to it.\nc. Check for matches at the current node (including via output links)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BuildTrie(patterns):\n    root = new Node()\n    for each pattern in patterns:\n        node = root\n        for each char c in pattern:\n            if node has no child c:\n                node.child[c] = new Node()\n            node = node.child[c]\n        node.output.add(pattern)\n    return root\n\nBuildFailureLinks(root):\n    queue = empty\n    for each child c of root:\n        c.fail = root\n        queue.push(c)\n    while queue not empty:\n        current = queue.pop()\n        for each (char c, child) in current.children:\n            fail = current.fail\n            while fail != root and c not in fail.children:\n                fail = fail.fail\n            if c in fail.children:\n                child.fail = fail.children[c]\n            else:\n                child.fail = root\n            child.output.addAll(child.fail.output)\n            queue.push(child)\n\nAhoCorasickSearch(T, root):\n    node = root\n    for i = 0 to len(T)-1:\n        while node != root and T[i] not in node.children:\n            node = node.fail\n        if T[i] in node.children:\n            node = node.children[T[i]]\n        for each pattern in node.output:\n            print \"Match of\", pattern, \"at\", i - len(pattern) + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-3",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Patterns:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ab"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bc"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Text:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abcab"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Build Trie"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "root → 'a' → 'b'*   (pattern \"ab\" ends at node_ab)\nroot → 'b' → 'c'*   (pattern \"bc\" ends at node_bc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Build Failure Links"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depth 1, root has no failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depth 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "failure(node_a)=root, root has child 'b' → node_b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_bc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "failure(node_b)=root, root has no child 'c'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Search"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "node (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "node (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root→a (exists)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a→b (exists)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"ab\" at 0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ab has no c, fail=node_b, b→c (exists)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_bc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"bc\" at 1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_bc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bc has no a, fail=root, root→a (exists)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a→b (exists)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"ab\" at 3"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Matches found: \"ab\" at positions 0 and 3, \"bc\" at position 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\n#include <queue>\n#include <vector>\n#include <string>\n#include <unordered_map>\n\nstruct Node {\n    std::unordered_map<char, Node*> children;\n    Node* fail = nullptr;\n    std::vector<std::string> output;\n};\n\nNode* buildTrie(const std::vector<std::string>& patterns) {\n    Node* root = new Node();\n    for (const auto& p : patterns) {\n        Node* node = root;\n        for (char c : p) {\n            if (!node->children.count(c))\n                node->children[c] = new Node();\n            node = node->children[c];\n        }\n        node->output.push_back(p);\n    }\n    return root;\n}\n\nvoid buildFailureLinks(Node* root) {\n    std::queue<Node*> q;\n    for (auto& [c, child] : root->children) {\n        child->fail = root;\n        q.push(child);\n    }\n    while (!q.empty()) {\n        Node* cur = q.front(); q.pop();\n        for (auto& [c, child] : cur->children) {\n            Node* fail = cur->fail;\n            while (fail != root && !fail->children.count(c))\n                fail = fail->fail;\n            if (fail->children.count(c))\n                child->fail = fail->children[c];\n            else\n                child->fail = root;\n            for (const auto& p : child->fail->output)\n                child->output.push_back(p);\n            q.push(child);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\nfrom collections import deque\n\nclass Node:\n    def __init__(self):\n        self.children = {}\n        self.fail = None\n        self.output = []\n\ndef build_trie(patterns: list[str]) -> Node:\n    root = Node()\n    for p in patterns:\n        node = root\n        for c in p:\n            if c not in node.children:\n                node.children[c] = Node()\n            node = node.children[c]\n        node.output.append(p)\n    return root\n\ndef build_failure_links(root: Node) -> None:\n    q = deque()\n    for child in root.children.values():\n        child.fail = root\n        q.append(child)\n    while q:\n        cur = q.popleft()\n        for c, child in cur.children.items():\n            fail = cur.fail\n            while fail and c not in fail.children:\n                fail = fail.fail\n            child.fail = fail.children[c] if fail and c in fail.children else root\n            if child.fail:\n                child.output.extend(child.fail.output)\n            q.append(child)\n\ndef aho_corasick_search(T: str, root: Node) -> list[tuple[int, str]]:\n    matches = []\n    node = root\n    for i, ch in enumerate(T):\n        while node != root and ch not in node.children:\n            node = node.fail\n        if ch in node.children:\n            node = node.children[ch]\n        for p in node.output:\n            matches.append((i - len(p) + 1, p))\n    return matches\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nimport java.util.*;\n\nclass Node {\n    Map<Character, Node> children = new HashMap<>();\n    Node fail;\n    List<String> output = new ArrayList<>();\n}\n\nclass AhoCorasick {\n    Node root = new Node();\n\n    public void buildTrie(String[] patterns) {\n        for (String p : patterns) {\n            Node node = root;\n            for (char c : p.toCharArray()) {\n                node.children.putIfAbsent(c, new Node());\n                node = node.children.get(c);\n            }\n            node.output.add(p);\n        }\n    }\n\n    public void buildFailureLinks() {\n        Queue<Node> q = new LinkedList<>();\n        for (Node child : root.children.values()) {\n            child.fail = root;\n            q.add(child);\n        }\n        while (!q.isEmpty()) {\n            Node cur = q.poll();\n            for (Map.Entry<Character, Node> e : cur.children.entrySet()) {\n                char c = e.getKey();\n                Node child = e.getValue();\n                Node fail = cur.fail;\n                while (fail != root && !fail.children.containsKey(c))\n                    fail = fail.fail;\n                child.fail = fail.children.getOrDefault(c, root);\n                child.output.addAll(child.fail.output);\n                q.add(child);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trie building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\sum m_i))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of lengths of all patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\sum m_i))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node visited once via BFS; while loops amortize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n + \\text{matches}))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each text character traverses the automaton in amortized O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "(O(n + \\sum m_i + \\text{matches}))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in total input size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(\\sum m_i \\cdot |\\Sigma|)) for the trie, where (|\\Sigma|) is alphabet size."]
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
            children: "Searches ALL patterns in one pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to implement from scratch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear time regardless of pattern count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large memory footprint for large alphabets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extension of KMP intuition to multiple patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for single-pattern search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in real IDS/IPS systems (Snort, Suricata)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output link handling can be tricky"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty pattern list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the root node exists; no matches found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns that are substrings of other patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output links catch the shorter pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No text to traverse; returns empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All patterns identical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie collapses them; output list has duplicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping patterns (e.g., \"aa\", \"a\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both matched correctly at each position"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Aho-Corasick extends KMP's failure function to a trie of multiple patterns, enabling simultaneous search for all patterns in a single linear-time pass through the text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-suffix-array--trie",
      children: "14.6 Suffix Array & Trie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A dictionary's index at the back lists every word alphabetically with page numbers. A suffix array is like that index for every suffix of a string: it lists all suffixes in sorted order. Once you have this index, you can binary search for any substring in (O(m \\log n)), and the LCP array supercharges it to (O(m + \\log n))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "suffix-array",
      children: "Suffix Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "suffix array"
      }), " of string (S) is an array of starting positions of all suffixes of (S) sorted lexicographically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " (S = \\text{\"banana\"})"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Suffix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Start"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "banana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "na"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suffix Array: (SA = [5, 3, 1, 0, 4, 2])"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefix-doubling-construction",
      children: "Prefix-Doubling Construction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Idea:"
      }), " Sort suffixes by the first (2^k) characters, doubling (k) each iteration. After (k \\ge \\log n) rounds, all suffixes are uniquely sorted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize rank as the character value at each position."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For (k = 1, 2, 4, \\ldots) until (k \\ge n):\na. Sort indices by ((rank[i], rank[i+k])).\nb. Assign new ranks: same rank for equal pairs.\nc. If all ranks are unique, stop."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BuildSuffixArray(S):\n    n = len(S)\n    sa = [0, 1, ..., n-1]\n    rank = [ord(S[i]) for i in range(n)]\n    k = 1\n    while k < n:\n        sort sa by (rank[i], rank[i+k])\n        newRank[sa[0]] = 0\n        for i = 1 to n-1:\n            prev = (rank[sa[i-1]], rank[sa[i-1]+k] if sa[i-1]+k < n else -1)\n            cur = (rank[sa[i]], rank[sa[i]+k] if sa[i]+k < n else -1)\n            newRank[sa[i]] = newRank[sa[i-1]] + (prev != cur ? 1 : 0)\n        rank = newRank\n        k *= 2\n    return sa\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-s--banana",
      children: "Dry Run: S = \"banana\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sa = [0, 1, 2, 3, 4, 5]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rank = [98, 97, 110, 97, 110, 97] (ASCII: b=98, a=97, n=110)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k=1: Sort by (rank[i], rank[i+1])"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(98,97) → i=0 | (97,110) → i=1 | (110,97) → i=2 | (97,110) → i=3 | (110,97) → i=4 | (97,-1) → i=5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After sorting: sa = [5, 1, 3, 0, 2, 4]\nNew ranks: [3, 1, 2, 1, 2, 0]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k=2: Sort by (rank[i], rank[i+2])"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=0: (3,2) | i=1: (1,2) | i=2: (2,0) | i=3: (1,-1) | i=4: (2,-1) | i=5: (0,-1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After sorting: sa = [5, 3, 1, 0, 4, 2]\nNew ranks: [3, 2, 4, 1, 4, 0]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k=4: All ranks unique → done"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final SA = [5, 3, 1, 0, 4, 2]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lcp-array-kasais-algorithm",
      children: "LCP Array (Kasai's Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " LCP[i] = longest common prefix between suffixes at SA[i] and SA[i+1]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-1",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute rank array: (rank[SA[i]] = i)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize (h = 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each suffix starting at (i) (in original order):\na. If (rank[i] > 0):\ni. Let (j = SA[rank[i] - 1]) (previous suffix in sorted order).\nii. While (S[i+h] == S[j+h]): increment (h).\niii. Set (LCP[rank[i] - 1] = h).\niv. If (h > 0): decrement (h)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-sa--5-3-1-0-4-2-s--banana",
      children: "Dry Run: SA = [5, 3, 1, 0, 4, 2], S = \"banana\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rank: rank[5]=0, rank[3]=1, rank[1]=2, rank[0]=3, rank[4]=4, rank[2]=5"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i (S index)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rank[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j = SA[rank-1]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compare"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LCP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA[2]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"banana\" vs \"anana\": 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA[1]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"anana\" vs \"ana\": \"ana\"=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (LCP[1]=3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA[4]=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"nana\" vs \"na\": \"na\"=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (LCP[4]=2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA[0]=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ana\" vs \"a\": \"a\"=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (LCP[0]=1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA[3]=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"na\" vs \"banana\": 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (LCP[3]=0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "–"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LCP = [1, 3, 0, 0, 2]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications",
      children: "Applications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest repeated substring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max value in LCP array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of distinct substrings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n(n+1)/2 - \\sum LCP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search on SA: (O(m \\log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest common prefix of two suffixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range minimum query on LCP array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-5",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ Suffix Array (prefix-doubling)\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstd::vector<int> buildSuffixArray(const std::string& S) {\n    int n = S.size();\n    std::vector<int> sa(n), rank(n), tmp(n);\n    for (int i = 0; i < n; ++i) sa[i] = i, rank[i] = S[i];\n    for (int k = 1; k < n; k *= 2) {\n        auto cmp = [&](int a, int b) {\n            if (rank[a] != rank[b]) return rank[a] < rank[b];\n            int ra = a + k < n ? rank[a + k] : -1;\n            int rb = b + k < n ? rank[b + k] : -1;\n            return ra < rb;\n        };\n        std::sort(sa.begin(), sa.end(), cmp);\n        tmp[sa[0]] = 0;\n        for (int i = 1; i < n; ++i)\n            tmp[sa[i]] = tmp[sa[i - 1]] + cmp(sa[i - 1], sa[i]);\n        rank = tmp;\n    }\n    return sa;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef build_suffix_array(S: str) -> list[int]:\n    n = len(S)\n    sa = list(range(n))\n    rank = [ord(c) for c in S]\n    k = 1\n    while k < n:\n        sa.sort(key=lambda i: (rank[i], rank[i + k] if i + k < n else -1))\n        tmp = [0] * n\n        for i in range(1, n):\n            prev = (rank[sa[i - 1]], rank[sa[i - 1] + k] if sa[i - 1] + k < n else -1)\n            cur = (rank[sa[i]], rank[sa[i] + k] if sa[i] + k < n else -1)\n            tmp[sa[i]] = tmp[sa[i - 1]] + (prev != cur)\n        rank = tmp\n        k *= 2\n    return sa\n\ndef build_lcp(S: str, sa: list[int]) -> list[int]:\n    n = len(S)\n    rank = [0] * n\n    for i, pos in enumerate(sa):\n        rank[pos] = i\n    lcp = [0] * (n - 1)\n    h = 0\n    for i in range(n):\n        if rank[i] > 0:\n            j = sa[rank[i] - 1]\n            while i + h < n and j + h < n and S[i + h] == S[j + h]:\n                h += 1\n            lcp[rank[i] - 1] = h\n            if h: h -= 1\n    return lcp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\nimport java.util.*;\n\npublic static int[] buildSuffixArray(String S) {\n    int n = S.length();\n    Integer[] sa = new Integer[n];\n    int[] rank = new int[n];\n    for (int i = 0; i < n; i++) { sa[i] = i; rank[i] = S.charAt(i); }\n    for (int k = 1; k < n; k *= 2) {\n        int kk = k;\n        int[] r = rank.clone();\n        Arrays.sort(sa, (a, b) -> {\n            if (r[a] != r[b]) return r[a] - r[b];\n            int ra = a + kk < n ? r[a + kk] : -1;\n            int rb = b + kk < n ? r[b + kk] : -1;\n            return ra - rb;\n        });\n        int[] tmp = new int[n];\n        tmp[sa[0]] = 0;\n        for (int i = 1; i < n; i++) {\n            int prevA = sa[i - 1], prevB = sa[i];\n            int curA = r[prevA], curB = r[prevB];\n            int nextA = prevA + kk < n ? r[prevA + kk] : -1;\n            int nextB = prevB + kk < n ? r[prevB + kk] : -1;\n            tmp[sa[i]] = tmp[sa[i - 1]] + (curA != curB || nextA != nextB ? 1 : 0);\n        }\n        rank = tmp;\n    }\n    return Arrays.stream(sa).mapToInt(i -> i).toArray();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\log n) sorting rounds, each (O(n \\log n)) (or (O(n)) with radix sort)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build LCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each character compared at most once total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching (binary search)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\log n) steps, each comparing up to (m) characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching (with LCP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m + \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCP accelerates comparison to O(1) amortized"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(n)) for SA, LCP, and rank arrays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
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
            children: "Solves dozens of string problems after one build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construction is more complex than KMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching without per-match O(m) scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) build time (vs O(n) for KMP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCP array enables substring counting and analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large memory (3 arrays of size n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with arbitrary alphabets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for single-pattern search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single character string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA = [0]; no LCP entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All same characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA = [n-1, ..., 0]; LCP entries have decreasing values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle separately; building SA on empty string is undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String with unique characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA sorted by characters directly; stops after k=1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The suffix array sorts all suffixes of a string in O(n log n), enabling efficient substring queries, pattern matching, and string analysis when combined with the LCP array."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-manachers-algorithm",
      children: "14.7 Manacher's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find all palindromic substrings in linear time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Use symmetry to avoid recomputation. Maintain the center and right boundary of the current rightmost palindrome. When expanding, use the mirror palindrome's radius to skip already-known matches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Manacher(S):\n    T = \"^#\" + join(S, \"#\") + \"$\"\n    P = array of size |T|, initialized to 0\n    C = 0, R = 0\n    for i = 1 to |T|-1:\n        if i < R:\n            P[i] = min(R - i, P[2*C - i])\n        while T[i + P[i] + 1] == T[i - P[i] - 1]:\n            P[i]++\n        if i + P[i] > R:\n            C = i\n            R = i + P[i]\n    // P[i] is the radius of palindrome centered at i\n    return P\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstd::vector<int> manacher(const std::string& S) {\n    std::string T = \"^#\";\n    for (char c : S) { T += c; T += '#'; }\n    T += '$';\n    int n = static_cast<int>(T.size());\n    std::vector<int> P(n, 0);\n    int C = 0, R = 0;\n    for (int i = 1; i < n - 1; ++i) {\n        if (i < R) P[i] = std::min(R - i, P[2 * C - i]);\n        while (T[i + P[i] + 1] == T[i - P[i] - 1]) ++P[i];\n        if (i + P[i] > R) { C = i; R = i + P[i]; }\n    }\n    return P;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\ndef manacher(S: str) -> list[int]:\n    T = \"^#\" + \"#\".join(S) + \"#$\"\n    n = len(T)\n    P = [0] * n\n    C = R = 0\n    for i in range(1, n - 1):\n        if i < R:\n            P[i] = min(R - i, P[2 * C - i])\n        while T[i + P[i] + 1] == T[i - P[i] - 1]:\n            P[i] += 1\n        if i + P[i] > R:\n            C, R = i, i + P[i]\n    return P  # P[i] is palindrome radius at center i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\npublic static int[] manacher(String S) {\n    StringBuilder sb = new StringBuilder(\"^#\");\n    for (char c : S.toCharArray()) { sb.append(c); sb.append('#'); }\n    sb.append('$');\n    String T = sb.toString();\n    int n = T.length();\n    int[] P = new int[n];\n    int C = 0, R = 0;\n    for (int i = 1; i < n - 1; i++) {\n        if (i < R) P[i] = Math.min(R - i, P[2 * C - i]);\n        while (T.charAt(i + P[i] + 1) == T.charAt(i - P[i] - 1)) P[i]++;\n        if (i + P[i] > R) { C = i; R = i + P[i]; }\n    }\n    return P;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " (O(n)) — the while loop expands the rightmost palindrome boundary (R), which only increases. Each expansion corresponds to a unique center."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " (O(n)) for the transformed string and radius array."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
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
            children: "Finds ALL palindromes in O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trickier to understand and implement correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uses palindrome symmetry property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires preprocessing with separators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass through transformed string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only solves palindrome problems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Manacher's algorithm is the crown jewel of palindrome algorithms — it uses mirror symmetry to reduce O(n²) naive expansion to O(n). The transformed string with '#' separators ensures all palindromes (even-length) have a distinct center."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "string-algorithm-comparison",
      children: "String Algorithm Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multiple Patterns?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linear?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(nm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny inputs, learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Border-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pattern, large text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m) exp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple patterns, plagiarism detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (avg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interval-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler KMP alternative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+∑m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(∑m·Σ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple patterns, IDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix Array + LCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted suffixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many queries on static text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manacher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror symmetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-longest-palindromic-substring",
      children: "1. Longest Palindromic Substring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a string S, find the longest substring that is a palindrome."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expand around center (O(n²), O(1)):"
        }), " For each center, expand outward while the substring is a palindrome. Handle both odd and even length palindromes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manacher (O(n), O(n)):"
        }), " Use the Manacher algorithm described above."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm (Expand around center):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each index (i) in the string:\na. Expand around center (i) for odd-length palindromes.\nb. Expand around center (i) and (i+1) for even-length palindromes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the longest palindrome found."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LongestPalindrome(S):\n    start = 0, maxLen = 1\n    for i = 0 to n-1:\n        len1 = expand(S, i, i)       // odd\n        len2 = expand(S, i, i+1)     // even\n        len = max(len1, len2)\n        if len > maxLen:\n            start = i - (len-1)/2\n            maxLen = len\n    return S[start..start+maxLen-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n²) time, O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-longest-common-prefix-lcp-of-an-array-of-strings",
      children: "2. Longest Common Prefix (LCP) of an Array of Strings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of strings, find the longest common prefix among all strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal scanning:"
        }), " Compare strings one by one, reducing the common prefix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical scanning:"
        }), " Compare characters at the same position across all strings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary search:"
        }), " Binary search on prefix length; all strings must have that prefix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trie:"
        }), " Build a trie and find the deepest node with degree 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm (Vertical scanning):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LongestCommonPrefix(strs):\n    if strs is empty: return \"\"\n    for i = 0 to len(strs[0])-1:\n        c = strs[0][i]\n        for j = 1 to len(strs)-1:\n            if i == len(strs[j]) or strs[j][i] != c:\n                return strs[0][0..i-1]\n    return strs[0]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(S) where S = sum of all characters in all strings. Space: O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-wildcard-pattern-matching",
      children: "3. Wildcard Pattern Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement wildcard pattern matching with support for '?' (matches any single character) and '*' (matches any sequence of characters)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach (Two-pointer greedy):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use two pointers (i) (text) and (j) (pattern)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the last '*' position in pattern and the corresponding text position."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When '*' is matched, try matching zero characters first, then expand on backtrack."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WildcardMatch(T, P):\n    i = 0, j = 0, star = -1, match = 0\n    while i < n:\n        if j < m and (P[j] == '?' or P[j] == T[i]):\n            i++, j++\n        elif j < m and P[j] == '*':\n            star = j, match = i, j++\n        elif star != -1:\n            j = star + 1, match++, i = match\n        else:\n            return false\n    while j < m and P[j] == '*': j++\n    return j == m\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n + m) time, O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ctrlf-in-browsers-and-editors",
      children: "Ctrl+F in Browsers and Editors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every browser's \"Find in Page\" feature implements some form of pattern matching:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chrome"
        }), " uses a modified version of Boyer-Moore for single-pattern search in the renderer process."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VS Code"
        }), " uses KMP-like algorithms for its search across large files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "grep"
        }), " uses Boyer-Moore for single-pattern search and Aho-Corasick for multi-pattern (", (0,jsx_runtime.jsx)(_components.code, {
          children: "grep -e"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key requirement is interactivity: results must appear while the user types, which demands sub-50ms search for files up to 1MB."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bioinformatics--dna-pattern-search",
      children: "Bioinformatics — DNA Pattern Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DNA is a string over {A, C, G, T} with length ~3.2 billion for the human genome:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BLAST"
        }), " (Basic Local Alignment Search Tool) uses a seed-and-extend approach: find short exact matches (seeds), then extend them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bowtie"
        }), " uses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Burrows-Wheeler Transform"
        }), " (based on suffix arrays) to align reads to a reference genome in O(m) time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Suffix arrays"
        }), " are used to build genome indexes for rapid querying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: Searching for the gene ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BRCA1"
      }), " (~125k base pairs) in the human genome using naive search would take ~10 trillion comparisons. With suffix arrays, it takes microseconds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-intrusion-detection-systems-nids",
      children: "Network Intrusion Detection Systems (NIDS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snort and Suricata match network packets against thousands of attack signatures:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aho-Corasick"
        }), " is the primary algorithm used — it matches all signatures in a single pass over the packet payload."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-pattern matching is critical because a single packet might match 10+ rules."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance requirement: process packets at line rate (1-100 Gbps) without dropping packets."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real numbers:"
      }), " Snort 3's Aho-Corasick implementation matches ~40,000 patterns against a 1500-byte packet in ~2μs on modern hardware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plagiarism-detection",
      children: "Plagiarism Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MOSS"
        }), " (Measure of Software Similarity) uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "document fingerprinting"
        }), " with rolling hashes (Rabin-Karp style). It selects a subset of hashes (e.g., those where the hash mod some value = 0) as fingerprints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Turnitin"
        }), " compares documents using suffix arrays and LCP to find the longest common substrings between papers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "search-engine-indexing",
      children: "Search Engine Indexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Google's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PageRank"
        }), " doesn't use string algorithms directly, but its ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inverted index"
        }), " is built using suffix structures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Autocomplete"
        }), " uses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trie"
        }), " (prefix tree): as the user types each character, the trie is traversed to suggest completions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spelling correction"
        }), " uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "edit distance"
        }), " (Levenshtein distance) combined with BK-trees or tries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(nm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix function (borders)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No backtracking in text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m) exp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple pattern search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z-array window [l,r]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler than KMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie + failure links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+∑m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(∑m·Σ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-pattern search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manacher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome symmetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All palindromes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling + sort ranks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versatile string queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCP Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kasai's linear algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables substring queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "KMP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix function avoids rematching; O(n+m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rabin-Karp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling hash with modulo; hash collision degrades to O(nm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Z-Algorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear via [l,r] interval; concat P + $ + T for matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aho-Corasick"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie + BFS failure links; search all patterns in one pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Manacher"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetry reduces redundant expansion; use # separators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suffix Array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix-doubling O(n log n); use LCP for full power"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Application"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCP → longest repeated substring, distinct substrings"
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
            children: "Algorithm"
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
            children: "Naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word processors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple pattern search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plagiarism detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search engines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler KMP alternative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-pattern problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDS/IPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snort, Suricata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manacher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Genome indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(nm))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n+m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(m))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching (with hashing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected (O(n+m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n + \\sum m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\sum m \\cdot |\\Sigma|))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manacher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindromic substrings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All suffix queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCP Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suffix queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the purpose of the prefix function in KMP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Rabin-Karp handle hash collisions?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the relationship between the Z-array and the prefix function?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Aho-Corasick extend KMP to multiple patterns?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the LCP array necessary for the full power of suffix arrays?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Z-algorithm and use it for pattern matching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the number of distinct substrings of \"BANANA\" using the suffix array and LCP array."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement suffix array construction for a string of length 1000."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the longest palindrome in \"babad\" using Manacher's algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build an Aho-Corasick automaton for patterns {\"cat\", \"car\", \"bat\"} and search in text \"concatenated cardboard battery\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given T = \"ABCABCABCABC\" and P = \"ABCABC\", compare the number of comparisons made by Naive Search vs KMP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an algorithm to find the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "longest common substring"
        }), " of two strings in (O(n + m)) time. Hint: concatenate the strings and use the suffix array + LCP array."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "regex-like matcher"
        }), " that supports '?' (single char wildcard) and '*' (multi-char wildcard) using dynamic programming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use KMP to implement the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strstr()"
        }), " function in C (without using the built-in version)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a string S, find all unique palindromic substrings using Manacher's algorithm."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the key idea behind KMP's linear time guarantee?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Rolling hash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The prefix function that avoids re-examining matched characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Using binary search on the pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Preprocessing the text instead of the pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The prefix function (pi) encodes borders — when a mismatch occurs, we shift by the border length without going back in the text.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the worst-case time complexity of naive Rabin-Karp?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n+m)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(nm)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) O(nm) when many hash collisions force full character-by-character comparison.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What application does the LCP array enable that the suffix array alone cannot?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Lexicographic sorting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Longest common prefix queries between any two suffixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Pattern matching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Finding the longest suffix"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The LCP array enables O(1) longest common prefix queries between consecutive sorted suffixes, which unlocks distinct substrings counting and substring search.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which algorithm is best suited for detecting all occurrences of 10,000 attack patterns in a network packet?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) KMP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Rabin-Karp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Aho-Corasick"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Suffix Array"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Aho-Corasick — it matches all patterns in a single linear pass, making it ideal for IDS/IPS applications.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " In the Z-algorithm, what does Z[i] represent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The length of the longest suffix ending at i"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The length of the longest substring starting at i that matches a prefix of the string"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The position of the first mismatch at i"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The length of the longest palindrome centered at i"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Z[i] is the length of the longest substring starting at position i that is also a prefix of the string.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " What is the time complexity to build a suffix array using prefix doubling?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n² log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) O(n log n) — each doubling round requires sorting n elements, and there are log n rounds.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " For the string \"AAAA\", how many distinct substrings does it have?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 6"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) 4 — \"A\", \"AA\", \"AAA\", \"AAAA\". Using the formula \\(n(n+1)/2 - \\sum LCP\\): \\(10 - (1+2+1) = 4\\).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " In Aho-Corasick, what is the purpose of failure links?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To mark the end of a pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To redirect the search when a mismatch occurs to the longest proper suffix that has a match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To count the number of patterns found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To store the hash of each pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Failure links redirect the automaton on mismatch to the longest proper suffix of the current prefix that is also a prefix of some pattern — analogous to KMP's prefix function.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 15 explores NP-Completeness — the boundary between tractable and intractable problems, and how to recognize problems that likely have no efficient solution."]
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