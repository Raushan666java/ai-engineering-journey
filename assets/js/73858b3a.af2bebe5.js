"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61670],{

/***/ 63010
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_06_hash_maps_and_sets_md_738_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-03-data-structures-algorithms-06-hash-maps-and-sets-md-738.json
const site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_06_hash_maps_and_sets_md_738_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-structures-algorithms/06-hash-maps-and-sets","title":"Hash Maps and Sets","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets.md","sourceDirName":"courses/ai-engineering-placement/03-data-structures-algorithms","slug":"/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"id":"06-hash-maps-and-sets","slug":"/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets","title":"Hash Maps and Sets","sidebar_label":"Hash Maps and Sets","sidebar_position":39},"sidebar":"coursesSidebar","previous":{"title":"Two Pointers","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers"},"next":{"title":"Linked Lists","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/07-linked-lists"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets.md


const frontMatter = {
	id: '06-hash-maps-and-sets',
	slug: '/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets',
	title: 'Hash Maps and Sets',
	sidebar_label: 'Hash Maps and Sets',
	sidebar_position: 39
};
const contentTitle = 'Hash Maps and Sets';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "6.1 Hash Map Fundamentals",
  "id": "61-hash-map-fundamentals",
  "level": 2
}, {
  "value": "Hashing Basics",
  "id": "hashing-basics",
  "level": 3
}, {
  "value": "Collision Resolution",
  "id": "collision-resolution",
  "level": 3
}, {
  "value": "Load Factor and Rehashing",
  "id": "load-factor-and-rehashing",
  "level": 3
}, {
  "value": "6.2 Frequency Counting",
  "id": "62-frequency-counting",
  "level": 2
}, {
  "value": "Character Frequency",
  "id": "character-frequency",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Word Frequency",
  "id": "word-frequency",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "Majority Element (Boyer-Moore Voting)",
  "id": "majority-element-boyer-moore-voting",
  "level": 3
}, {
  "value": "Frequency Counting Patterns",
  "id": "frequency-counting-patterns",
  "level": 3
}, {
  "value": "6.3 Hash Set Operations",
  "id": "63-hash-set-operations",
  "level": 2
}, {
  "value": "Set Basics",
  "id": "set-basics",
  "level": 3
}, {
  "value": "Intersection of Two Arrays",
  "id": "intersection-of-two-arrays",
  "level": 3
}, {
  "value": "Longest Consecutive Sequence",
  "id": "longest-consecutive-sequence",
  "level": 3
}, {
  "value": "Set Operations Comparison",
  "id": "set-operations-comparison",
  "level": 3
}, {
  "value": "6.4 Constant-Time Lookup",
  "id": "64-constant-time-lookup",
  "level": 2
}, {
  "value": "Two Sum (Unsorted)",
  "id": "two-sum-unsorted",
  "level": 3
}, {
  "value": "Subarray Sum Equals K",
  "id": "subarray-sum-equals-k",
  "level": 3
}, {
  "value": "Check if Array Contains Duplicate",
  "id": "check-if-array-contains-duplicate",
  "level": 3
}, {
  "value": "Constant-Time Lookup Patterns",
  "id": "constant-time-lookup-patterns",
  "level": 3
}, {
  "value": "6.5 Pattern Matching and Grouping",
  "id": "65-pattern-matching-and-grouping",
  "level": 2
}, {
  "value": "Group Anagrams",
  "id": "group-anagrams",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "Isomorphic Strings",
  "id": "isomorphic-strings",
  "level": 3
}, {
  "value": "Word Pattern",
  "id": "word-pattern",
  "level": 3
}, {
  "value": "Pattern Matching Comparison",
  "id": "pattern-matching-comparison",
  "level": 3
}, {
  "value": "6.6 Advanced Applications and Tradeoffs",
  "id": "66-advanced-applications-and-tradeoffs",
  "level": 2
}, {
  "value": "Design a Least Recently Used (LRU) Cache",
  "id": "design-a-least-recently-used-lru-cache",
  "level": 3
}, {
  "value": "Hash Map vs. Alternative Data Structures",
  "id": "hash-map-vs-alternative-data-structures",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Frequency Counting",
  "id": "frequency-counting",
  "level": 3
}, {
  "value": "Two Sum with Type Safety",
  "id": "two-sum-with-type-safety",
  "level": 3
}, {
  "value": "Group Anagrams",
  "id": "group-anagrams-1",
  "level": 3
}, {
  "value": "Longest Consecutive Sequence",
  "id": "longest-consecutive-sequence-1",
  "level": 3
}, {
  "value": "TypeScript vs Python Hash Maps",
  "id": "typescript-vs-python-hash-maps",
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
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Exercise 2 (Medium): Top K Frequent Elements",
  "id": "exercise-2-medium-top-k-frequent-elements",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "Exercise 3 (Medium): Valid Sudoku",
  "id": "exercise-3-medium-valid-sudoku",
  "level": 3
}, {
  "value": "Exercise 4 (Hard): Longest Substring Without Repeating Characters",
  "id": "exercise-4-hard-longest-substring-without-repeating-characters",
  "level": 3
}, {
  "value": "Exercise 5 (Hard): Minimum Window Substring",
  "id": "exercise-5-hard-minimum-window-substring",
  "level": 3
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "hash-maps-and-sets",
        children: "Hash Maps and Sets"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand hash map and set fundamentals including hashing, collision resolution, and load factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve frequency-counting problems using hash maps for character and element counting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply hash sets for intersection, union, and difference operations across collections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hash maps for constant-time lookup patterns like two-sum and subarray sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement pattern-matching and grouping problems such as group anagrams and isomorphic strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze time-space tradeoffs when choosing between hash-based and alternative approaches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hash maps provide O(1) average-case lookup, insertion, and deletion. They are the go-to data structure for frequency counting, caching, and implementing sets. Understanding hash collisions and when to use hash maps vs arrays is essential."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of hashing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding hash maps and sets is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how hash maps and sets works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Map Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hashing functions, buckets, collision resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency Counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character/word frequency, majority element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Set Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection, union, distinct elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-Time Lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-sum, subarray sum, contiguous arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern Matching & Grouping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group anagrams, isomorphic strings, pattern mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU cache, design decisions and tradeoffs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Hash Maps & Sets] --> B[Fundamentals]\n    A --> C[Frequency Counting]\n    A --> D[Set Operations]\n    A --> E[Constant-Time Lookup]\n    A --> F[Pattern Matching]\n    A --> G[Advanced Applications]\n    B --> H[Hash Functions]\n    B --> I[Collision Resolution]\n    C --> J[Character Frequency]\n    C --> K[Word Frequency]\n    D --> L[Intersection & Union]\n    D --> M[Distinct Elements]\n    E --> N[Two Sum]\n    E --> O[Subarray Sum]\n    F --> P[Group Anagrams]\n    F --> Q[Isomorphic Strings]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-hash-map-fundamentals",
      children: "6.1 Hash Map Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash map (or dictionary) stores key-value pairs and provides O(1) average-time insertions, deletions, and lookups. This performance depends on a good hash function that distributes keys uniformly across buckets."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hashing-basics",
      children: "Hashing Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash function converts a key into an integer index within the bucket array. For strings, a common approach is polynomial rolling hash:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def simple_hash(key, table_size):\n    if isinstance(key, str):\n        total = 0\n        for char in key:\n            total = (total * 31 + ord(char)) % table_size\n        return total\n    return hash(key) % table_size\n\nprint(simple_hash(\"hello\", 16))  # Example: 9\nprint(simple_hash(\"world\", 16))  # Example: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collision-resolution",
      children: "Collision Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two common strategies handle hash collisions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaining (Separate Chaining):"
      }), " Each bucket stores a linked list of entries with the same hash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HashMapChaining:\n    def __init__(self, size=16):\n        self.size = size\n        self.buckets = [[] for _ in range(size)]\n\n    def _hash(self, key):\n        return hash(key) % self.size\n\n    def put(self, key, value):\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.buckets[idx]):\n            if k == key:\n                self.buckets[idx][i] = (key, value)\n                return\n        self.buckets[idx].append((key, value))\n\n    def get(self, key):\n        idx = self._hash(key)\n        for k, v in self.buckets[idx]:\n            if k == key:\n                return v\n        raise KeyError(key)\n\n    def remove(self, key):\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.buckets[idx]):\n            if k == key:\n                del self.buckets[idx][i]\n                return\n        raise KeyError(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Open Addressing (Linear Probing):"
      }), " When a collision occurs, probe the next available bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HashMapLinearProbing:\n    def __init__(self, size=16):\n        self.size = size\n        self.keys = [None] * size\n        self.values = [None] * size\n\n    def _hash(self, key):\n        return hash(key) % self.size\n\n    def put(self, key, value):\n        idx = self._hash(key)\n        while self.keys[idx] is not None:\n            if self.keys[idx] == key:\n                self.values[idx] = value\n                return\n            idx = (idx + 1) % self.size\n        self.keys[idx] = key\n        self.values[idx] = value\n\n    def get(self, key):\n        idx = self._hash(key)\n        while self.keys[idx] is not None:\n            if self.keys[idx] == key:\n                return self.values[idx]\n            idx = (idx + 1) % self.size\n        raise KeyError(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-factor-and-rehashing",
      children: "Load Factor and Rehashing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The load factor (entries / buckets) determines performance. Python's dict resizes when the load factor exceeds about 2/3. A low load factor reduces collisions but uses more memory."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Load Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collision Probability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resize Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Late"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-frequency-counting",
      children: "6.2 Frequency Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frequency counting is the most common hash map application. We iterate once over data, counting occurrences, then answer questions about the counts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "character-frequency",
      children: "Character Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def char_frequency(s):\n    freq = {}\n    for c in s:\n        freq[c] = freq.get(c, 0) + 1\n    return freq\n\nprint(char_frequency(\"hello world\"))\n\n## {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "word-frequency",
      children: "Word Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def word_frequency(text):\n    words = text.lower().split()\n    freq = {}\n    for word in words:\n        freq[word] = freq.get(word, 0) + 1\n    return freq\n\ntext = \"the quick brown fox jumps over the lazy dog the quick\"\nprint(word_frequency(text))\n\n## {'the': 3, 'quick': 2, 'brown': 1, 'fox': 1, 'jumps': 1, 'over': 1, 'lazy': 1, 'dog': 1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "majority-element-boyer-moore-voting",
      children: "Majority Element (Boyer-Moore Voting)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the element that appears more than n/2 times. While Boyer-Moore uses O(1) space, the hash map approach is straightforward:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def majority_element_hash(nums):\n    freq = {}\n    threshold = len(nums) // 2\n    for num in nums:\n        freq[num] = freq.get(num, 0) + 1\n        if freq[num] > threshold:\n            return num\n    return None\n\nnums = [2, 2, 1, 1, 1, 2, 2]\nprint(majority_element_hash(nums))  # 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frequency-counting-patterns",
      children: "Frequency Counting Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count occurrences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find frequency of each element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return when count exceeds threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Majority element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running count with condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subarray sum equals k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare two collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anagram check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top-K frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return most frequent elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap with frequency map"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-hash-set-operations",
      children: "6.3 Hash Set Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A hash set stores unique elements. Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "set"
      }), " is implemented as a hash table with only keys (no values). Sets support efficient membership tests, insertions, and deletions in O(1) average time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-basics",
      children: "Set Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def set_operations():\n    set_a = {1, 2, 3, 4, 5}\n    set_b = {4, 5, 6, 7, 8}\n\n    intersection = set_a & set_b\n    union = set_a | set_b\n    difference = set_a - set_b\n    symmetric_diff = set_a ^ set_b\n\n    return intersection, union, difference, symmetric_diff\n\ninter, uni, diff, sym = set_operations()\nprint(f\"Intersection: {inter}\")      # {4, 5}\nprint(f\"Union: {uni}\")               # {1, 2, 3, 4, 5, 6, 7, 8}\nprint(f\"Difference: {diff}\")         # {1, 2, 3}\nprint(f\"Symmetric diff: {sym}\")      # {1, 2, 3, 6, 7, 8}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intersection-of-two-arrays",
      children: "Intersection of Two Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def intersection_of_arrays(nums1, nums2):\n    set1 = set(nums1)\n    result = set()\n    for num in nums2:\n        if num in set1:\n            result.add(num)\n    return list(result)\n\nnums1 = [1, 2, 2, 1]\nnums2 = [2, 2]\nprint(intersection_of_arrays(nums1, nums2))  # [2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "longest-consecutive-sequence",
      children: "Longest Consecutive Sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given an unsorted array of integers, find the length of the longest consecutive subsequence. Solve in O(n) time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longest_consecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            current = num\n            streak = 1\n            while current + 1 in num_set:\n                current += 1\n                streak += 1\n            longest = max(longest, streak)\n    return longest\n\nnums = [100, 4, 200, 1, 3, 2]\nprint(longest_consecutive(nums))  # 4 (sequence: 1, 2, 3, 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it works:"
      }), " We only start counting from the smallest element of each sequence (no predecessor in the set). This ensures each element is visited at most twice, giving O(n) total."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-operations-comparison",
      children: "Set Operations Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x in s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if element exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.add(x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.remove(x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 & s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(n,m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 | s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 - s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements in s1 not in s2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-constant-time-lookup",
      children: "6.4 Constant-Time Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hash map's O(1) lookup makes it ideal for problems that require checking whether a complement or prefix has been seen before."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "two-sum-unsorted",
      children: "Two Sum (Unsorted)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return None\n\nnums = [2, 7, 11, 15]\nprint(two_sum(nums, 9))  # [0, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " As we iterate, we store each number's index. The next number checks if its complement has already been stored. This avoids needing to sort and handles unsorted input in one pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subarray-sum-equals-k",
      children: "Subarray Sum Equals K"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the number of contiguous subarrays whose sum equals k."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def subarray_sum(nums, k):\n    prefix_sum_map = {0: 1}\n    current_sum = 0\n    count = 0\n    for num in nums:\n        current_sum += num\n        if current_sum - k in prefix_sum_map:\n            count += prefix_sum_map[current_sum - k]\n        prefix_sum_map[current_sum] = prefix_sum_map.get(current_sum, 0) + 1\n    return count\n\nnums = [1, 1, 1]\nprint(subarray_sum(nums, 2))  # 2 ([1,1] at index 0-1, and [1,1] at index 1-2)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " We track the cumulative prefix sum at each position. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefix_sum - k"
      }), " has been seen before, that means the subarray between those two points sums to k. The hash map stores how many times each prefix sum has occurred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-if-array-contains-duplicate",
      children: "Check if Array Contains Duplicate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def contains_duplicate(nums):\n    seen = set()\n    for num in nums:\n        if num in seen:\n            return True\n        seen.add(num)\n    return False\n\nprint(contains_duplicate([1, 2, 3, 1]))  # True\nprint(contains_duplicate([1, 2, 3, 4]))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constant-time-lookup-patterns",
      children: "Constant-Time Lookup Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Map Store"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "num -> index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "target - current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subarray Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prefix_sum -> count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current_sum - k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contains Duplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set of seen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current in seen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "First Recurring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set of seen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "current in seen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-pattern-matching-and-grouping",
      children: "6.5 Pattern Matching and Grouping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hash maps excel at grouping elements by a computed key or mapping elements between two sequences."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-anagrams",
      children: "Group Anagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given an array of strings, group the anagrams together."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\ndef group_anagrams(strs):\n    groups = defaultdict(list)\n    for s in strs:\n        key = \"\".join(sorted(s))\n        groups[key].append(s)\n    return list(groups.values())\n\nstrs = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\nprint(group_anagrams(strs))\n\n## [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization:"
      }), " Instead of sorting (O(k log k)), count characters as a tuple of 26 counts for O(k) key computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def group_anagrams_optimized(strs):\n    groups = defaultdict(list)\n    for s in strs:\n        count = [0] * 26\n        for c in s:\n            count[ord(c) - ord(\"a\")] += 1\n        groups[tuple(count)].append(s)\n    return list(groups.values())\n\nprint(group_anagrams_optimized([\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isomorphic-strings",
      children: "Isomorphic Strings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two strings are isomorphic if the characters in one can be replaced to get the other, preserving order."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_isomorphic(s, t):\n    if len(s) != len(t):\n        return False\n    s_to_t = {}\n    t_to_s = {}\n    for c1, c2 in zip(s, t):\n        if c1 in s_to_t:\n            if s_to_t[c1] != c2:\n                return False\n        elif c2 in t_to_s:\n            return False\n        else:\n            s_to_t[c1] = c2\n            t_to_s[c2] = c1\n    return True\n\nprint(is_isomorphic(\"egg\", \"add\"))   # True\nprint(is_isomorphic(\"foo\", \"bar\"))   # False\nprint(is_isomorphic(\"paper\", \"title\"))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two hash maps enforce a bijection: each character in s maps to exactly one character in t, and vice versa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "word-pattern",
      children: "Word Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def word_pattern(pattern, s):\n    words = s.split()\n    if len(pattern) != len(words):\n        return False\n    char_to_word = {}\n    word_to_char = {}\n    for c, w in zip(pattern, words):\n        if c in char_to_word:\n            if char_to_word[c] != w:\n                return False\n        elif w in word_to_char:\n            return False\n        else:\n            char_to_word[c] = w\n            word_to_char[w] = c\n    return True\n\nprint(word_pattern(\"abba\", \"dog cat cat dog\"))  # True\nprint(word_pattern(\"abba\", \"dog cat cat fish\"))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-matching-comparison",
      children: "Pattern Matching Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Group Anagrams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted string or char count as key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DefaultDict[tuple, list]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isomorphic Strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bi-directional char mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two dicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bi-directional char-to-word mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two dicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find and Replace Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize to pattern string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dict mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * k)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-advanced-applications-and-tradeoffs",
      children: "6.6 Advanced Applications and Tradeoffs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-a-least-recently-used-lru-cache",
      children: "Design a Least Recently Used (LRU) Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combines a hash map for O(1) lookup with a doubly linked list for O(1) eviction."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.head = Node(0, 0)\n        self.tail = Node(0, 0)\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    def _remove(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    def _add_to_head(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n\n    def get(self, key):\n        if key in self.cache:\n            node = self.cache[key]\n            self._remove(node)\n            self._add_to_head(node)\n            return node.value\n        return -1\n\n    def put(self, key, value):\n        if key in self.cache:\n            self._remove(self.cache[key])\n        node = Node(key, value)\n        self._add_to_head(node)\n        self.cache[key] = node\n        if len(self.cache) > self.capacity:\n            lru = self.tail.prev\n            self._remove(lru)\n            del self.cache[lru.key]\n\nclass Node:\n    def __init__(self, key, value):\n        self.key = key\n        self.value = value\n        self.prev = None\n        self.next = None\n\ncache = LRUCache(2)\ncache.put(1, 1)\ncache.put(2, 2)\nprint(cache.get(1))    # 1\ncache.put(3, 3)        # evicts key 2\nprint(cache.get(2))    # -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-map-vs-alternative-data-structures",
      children: "Hash Map vs. Alternative Data Structures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Map"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BST (e.g., TreeMap)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sorted Array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) via binary search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k + log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k + log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) via sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) in-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (buckets + entries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (pointers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (contiguous)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hashable keys:"
        }), " Only immutable types (strings, numbers, tuples) can be dictionary keys in Python. Lists and dicts are unhashable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom objects:"
        }), " Must implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__hash__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__eq__"
        }), " for custom objects to work as keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash collision attacks:"
        }), " Malicious input causing many collisions can degrade performance to O(n). Python uses salted hashing to mitigate this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default value handling:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dict.get(key, default)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "defaultdict"
        }), " to avoid KeyError."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modification during iteration:"
        }), " Never modify a dict's size while iterating. Create a list of keys first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory overhead:"
        }), " Each hash map entry carries overhead. For very large datasets, consider alternatives."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\n## Default dict for clean frequency counting\nfreq = defaultdict(int)\nfreq[\"a\"] += 1  # No KeyError, defaults to 0 then increments\n\n## Counter class for convenience\nfrom collections import Counter\nc = Counter(\"hello world\")\nprint(c.most_common(3))  # [('l', 3), ('o', 2), ('h', 1)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map<K, V>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Set<T>"
      }), " built-in, providing the same hash-based semantics with type safety."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frequency-counting",
      children: "Frequency Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function charFrequency(s: string): Map<string, number> {\n    const freq = new Map<string, number>();\n    for (const c of s) {\n        freq.set(c, (freq.get(c) || 0) + 1);\n    }\n    return freq;\n}\n\nconst freq = charFrequency(\"hello world\");\nconsole.log(freq); // Map(8) { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "two-sum-with-type-safety",
      children: "Two Sum with Type Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function twoSum(nums: number[], target: number): number[] | null {\n    const seen = new Map<number, number>();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (seen.has(complement)) {\n            return [seen.get(complement)!, i];\n        }\n        seen.set(nums[i], i);\n    }\n    return null;\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-anagrams-1",
      children: "Group Anagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function groupAnagrams(strs: string[]): string[][] {\n    const groups = new Map<string, string[]>();\n    for (const s of strs) {\n        const key = s.split(\"\").sort().join(\"\");\n        if (!groups.has(key)) {\n            groups.set(key, []);\n        }\n        groups.get(key)!.push(s);\n    }\n    return Array.from(groups.values());\n}\n\nconsole.log(groupAnagrams([\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "longest-consecutive-sequence-1",
      children: "Longest Consecutive Sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function longestConsecutive(nums: number[]): number {\n    const numSet = new Set(nums);\n    let longest = 0;\n    for (const num of numSet) {\n        if (!numSet.has(num - 1)) {\n            let current = num;\n            let streak = 1;\n            while (numSet.has(current + 1)) {\n                current++;\n                streak++;\n            }\n            longest = Math.max(longest, streak);\n        }\n    }\n    return longest;\n}\n\nconsole.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-vs-python-hash-maps",
      children: "TypeScript vs Python Hash Maps"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python dict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript Map"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Literal syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{key: value}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new Map()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<K, V>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d[k] = v"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.set(k, v)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d.get(k)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.get(k)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "k in d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.has(k)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "del d[k]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.delete(k)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "len(d)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.size"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d.items()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.entries()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash maps provide O(1) average-time insertions, lookups, and deletions by using a hash function to distribute keys across buckets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision resolution strategies include chaining (linked list per bucket) and open addressing (linear probing, quadratic probing, double hashing)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load factor controls the space-time tradeoff: lower load factors reduce collisions but use more memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frequency counting is the most common hash map application, used for character counts, word frequencies, and majority element detection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash sets enable O(1) membership testing and efficient set operations (intersection, union, difference) across collections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The two-sum and subarray-sum problems demonstrate the power of storing \"seen before\" values for constant-time complement checking."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group anagrams and isomorphic strings use hash maps for pattern-based grouping and bi-directional mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The LRU cache combines a hash map with a doubly linked list to achieve O(1) get and put operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash maps consume more memory than array-based or tree-based alternatives but offer faster average-case performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's dict, Counter, and defaultdict, along with TypeScript's Map and Set, provide robust hash-based data structures."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problem"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use hash maps when O(1) lookup matters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any problem needing fast existence check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two Sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store prefix sums for subarray problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous subarray queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subarray Sum Equals K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use set for deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates or check membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains Duplicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Group by transformed key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorize elements by property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group Anagrams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use bi-directional mapping for pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-one character mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isomorphic Strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combine hash map with other structures for complex ADTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caches, indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU Cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Counter for frequency problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick frequency counts and top-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most Common Word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remember amortized resize cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict worst-case performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map insertions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1: How does Python's dict achieve O(1) average lookup?"
        })
      }), (0,jsx_runtime.jsx)(_components.strong, {
        children: "\nPython uses a hash table with open addressing. When you insert a key, Python computes `hash(key) % table_size` to find the bucket index. If that bucket is occupied by a different key,.\nit probes the next slot (simple linear probing in CPython's implementation). The table is resized when the load factor exceeds 2/3,.\nensuring O(1) amortized performance. The hash function is randomized per process start (PYTHONHASHSEED) to prevent collision-based denial-of-service attacks.\n"
      })]
    }), (0,jsx_runtime.jsxs)(_components.strong, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2: What types can be used as dictionary keys in Python?"
          })
        }), "\nOnly hashable types: immutable objects whose hash value never changes. This includes `int`, `float`, `str`, `bytes`, `tuple` (if all elements are hashable),.\n`frozenset`, and custom classes that implement `__hash__`. Lists, dictionaries, sets, and other mutable types are unhashable. When using a custom class as a key,.\nyou must implement both `__hash__` and `__eq__` consistently (equal objects must have the same hash).\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Q3: How do you handle collisions in a hash map?"
          })
        }), (0,jsx_runtime.jsx)(_components.strong, {
          children: "\nTwo main strategies: (1) Separate chaining — each bucket stores a linked list of entries. Insertions append to the list. Lookups traverse the list. (2) Open addressing — on collision,.\nprobe subsequent buckets linearly, quadratically, or via double hashing. Python uses open addressing with pseudo-random probing. Chaining is simpler and tolerant of high load factors. Open addressing is more cache-friendly and.\nuses memory more efficiently at low load factors.\n"
        })]
      }), (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Q4: What is the time complexity of the subarray sum equals k solution?"
            })
          }), (0,jsx_runtime.jsx)(_components.strong, {
            children: "\nO(n) time and O(n) space. The single pass computes prefix sums and stores their frequencies in a hash map. For each position,.\nwe check if (current_sum - k) exists in the map. The count increments by the frequency of that prefix sum. The space is O(n) because in the worst case,.\nevery prefix sum could be distinct. This is optimal because subarray problems inherently require scanning each element.\n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Q5: When would you use a set instead of a list for membership testing?"
              })
            }), (0,jsx_runtime.jsx)(_components.strong, {
              children: "\nAlways prefer a set when you only need to check membership and the collection is large. Set membership is O(1) average while list membership is O(n). For.\nsmall collections (less than ~20 elements), the overhead of hashing may make lists competitive. Use a set when: checking if duplicates exist,.\ncomputing intersections/unions, or performing many membership tests. Use a list when: order matters, you need indexing by position, or you have very few elements and.\nno duplicate checking.\n"
            })]
          }), (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
              className: "tp-qa-card",
              children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Q6: How does the LRU cache design achieve O(1) operations?"
                })
              }), (0,jsx_runtime.jsx)(_components.strong, {
                children: "\nIt combines two data structures: (1) A hash map from key to linked list node for O(1) lookups. (2) A doubly linked list for.\nO(1) insertions and deletions at both ends. On get, we find the node via the hash map, remove it from its current position,.\nand move it to the head. On put, we do the same plus potentially evict the tail node. The hash map provides constant key-to-node mapping,.\nwhile the linked list maintains the recency order without shifting elements. This dual-structure approach is a classic interview design problem.\n"
              })]
            }), (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                className: "tp-qa-card",
                children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q7: Explain the group anagrams problem and its optimal solution."
                  })
                }), (0,jsx_runtime.jsx)(_components.strong, {
                  children: "\nGroup anagrams categorizes strings by their sorted character order. Two approaches: (1) Sort each string (O(k log k) per string) and.\nuse the sorted version as the hash key. (2) Count characters into a 26-element tuple (O(k) per string) for the key. The second approach is optimal when strings can be very long. Both achieve O(n * k) or.\nbetter. The hash map groups strings with identical keys into lists. Counting sort is faster when the alphabet is fixed (26 lowercase letters),.\nmaking the total complexity O(n * k + n * 26).\n"
                })]
              }), (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Q8: What is the difference between defaultdict and regular dict?"
                    })
                  }), (0,jsx_runtime.jsx)(_components.strong, {
                    children: "\n`defaultdict` from collections provides a default value for missing keys. When you access a key that doesn't exist, `defaultdict` calls the factory function (e.g.,.\n`int`, `list`, `set`) to create and return a default value. This eliminates boilerplate `if key not in dict` checks. `defaultdict(int)` initializes missing keys to 0,.\nperfect for counting. `defaultdict(list)` initializes to an empty list, ideal for grouping. Regular dict raises a KeyError on missing key access. `defaultdict` is slightly slower for.\nexisting keys due to the factory function overhead.\n"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.strong, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                    className: "tp-qa-card",
                    children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q9: How do you find the longest consecutive sequence in O(n)?"
                      })
                    }), (0,jsx_runtime.jsx)(_components.strong, {
                      children: "\nInsert all elements into a hash set. Then iterate through the set, and for each element, check if its predecessor (element-1) is NOT in the set. If not,.\nthis element starts a sequence. Count consecutive elements by incrementing and checking the set until the sequence breaks. Update the global maximum. This works because we only start counting from sequence starts,.\nensuring each element is visited at most twice (once as a potential start, once as part of counting). The hash set provides O(1) membership checks.\n"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.strong, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                      className: "tp-qa-card",
                      children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Q10: What is the tradeoff between hash maps and balanced BSTs?"
                        })
                      }), (0,jsx_runtime.jsx)(_components.strong, {
                        children: "\nHash maps offer O(1) average vs O(log n) for BSTs on basic operations. But BSTs offer: (1) Ordered iteration without sorting. (2) Range queries (find all keys between X and.\nY) in O(k + log n). (3) Consistent O(log n) worst-case (with tree balancing) vs O(n) worst-case for hash maps under collision. (4) More memory efficient for.\nsparse data. Choose a hash map when you need simple key-value lookups and order doesn't matter. Choose a BST (TreeMap) when you need sorted data,.\nrange queries, or predictable performance.\n"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.strong, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                        className: "tp-qa-card",
                        children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q11: How does Python's Counter work internally?"
                          })
                        }), (0,jsx_runtime.jsx)(_components.strong, {
                          children: "\n`Counter` is a subclass of `dict` designed for counting hashable objects. It inherits all dict properties (O(1) avg lookup, hash-based keys) and.\nadds counting-specific methods: `most_common(n)` returns the n most frequent elements using `heapq.nlargest` on the items; `elements()` returns an iterator over elements repeating each as many times as its count;.\n`subtract()` decrements counts; arithmetic operators (`+`, `-`, `&`, `|`) merge counters. The underlying storage is a regular dict mapping elements to integer counts. `Counter.most_common()` sorts by count internally,.\nso it's O(n log n) for the full result, O(n log m) for the top m.\n"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.strong, {
                        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                          className: "tp-qa-card",
                          children: ["\n  ", (0,jsx_runtime.jsx)(_components.summary, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Q12: What happens during hash map resize (rehash)?"
                            })
                          }), (0,jsx_runtime.jsx)(_components.strong, {
                            children: "\nWhen the load factor threshold is exceeded, the hash map allocates a new, larger bucket array (typically 2x or 4x the size). Every existing entry must be rehashed — its hash is recomputed modulo the new size,.\nand it is inserted into the new bucket. Rehashing is O(n) and happens infrequently (amortized O(1) per insertion). Python's dict growth factor.\nis approximately 2x (actually follows a specific sequence: 5, 11, 22, 45, 90, 181, 362, 724, 1448, 2896...). The resize ensures amortized constant-time performance despite individual resizes being expensive.\n"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.strong, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "chapter-quiz",
                            children: "Chapter Quiz"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q1:"
                              }), " What is the average time complexity of a hash map lookup?"]
                            }), "\n  a) O(1)   b) O(log n)   c) O(n)   d) O(n log n)\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Answer: a) O(1)"
                            }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  With a good hash function and reasonable load factor, hash map operations average O(1). The worst case is O(n) if all keys collide.\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q2:"
                              }), " In the subarray sum equals k problem, why is 0 entered into the prefix sum map initially?"]
                            }), "\n  a) To avoid null pointer errors   b) To handle subarrays starting from index 0   c) It is unnecessary   d) To count empty subarrays\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Answer: b) To handle subarrays starting from index 0"
                            }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  The prefix sum 0 with count 1 represents the empty prefix. This allows counting subarrays where the sum equals k from the very first element.\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " Which of the following cannot be used as a Python dictionary key?"]
                            }), "\n  a) int   b) str   c) list   d) tuple\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Answer: c) list"
                            }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  Lists are mutable and unhashable. Tuples are hashable (if all elements are hashable). Only immutable, hashable types can be keys.\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q4:"
                              }), " What is the time complexity of the longest consecutive sequence solution using a hash set?"]
                            }), "\n  a) O(n^2)   b) O(n log n)   c) O(n)   d) O(n^2 log n)\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Answer: c) O(n)"
                            }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  Building the set is O(n). The loop visits each element at most twice (once as potential start, once during streak counting). Total O(n).\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q5:"
                              }), " In the two-sum hash map solution, what is stored as the key and value in the map?"]
                            }), "\n  a) Index -> Number   b) Number -> Index   c) Number -> Count   d) Index -> Count\n  ", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "\n  ", (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Answer: b) Number -> Index"
                            }), "\n  ", (0,jsx_runtime.jsx)(_components.br, {}), "\n  We map each number to its index. For each new number, we check if its complement (target - current) exists as a key, giving us the index of the complement.\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "exercises",
                            children: "Exercises"
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "common-mistakes",
                            children: "Common Mistakes"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Not handling hash collisions"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Using mutable objects as keys"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Forgetting that hash maps have O(n) worst case"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Not considering memory overhead"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "When to use map vs set vs array### Exercise 1 (Easy): Jewels and Stones"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                            children: ["You are given strings ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "jewels"
                            }), " representing types of stones that are jewels, and ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "stones"
                            }), " representing the stones you have. Return how many of the stones you have are also jewels."]
                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                            children: (0,jsx_runtime.jsx)(_components.code, {
                              className: "language-python",
                              children: "def num_jewels_in_stones(jewels, stones):\n    jewel_set = set(jewels)\n    count = 0\n    for stone in stones:\n        if stone in jewel_set:\n            count += 1\n    return count\n\nprint(num_jewels_in_stones(\"aA\", \"aAAbbbb\"))  # 3\nprint(num_jewels_in_stones(\"z\", \"ZZ\"))        # 0\n"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "exercise-2-medium-top-k-frequent-elements",
                            children: "Exercise 2 (Medium): Top K Frequent Elements"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                            children: ["Given an integer array ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "nums"
                            }), " and an integer ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "k"
                            }), ", return the ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "k"
                            }), " most frequent elements. Solve in better than O(n log n)."]
                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                            children: (0,jsx_runtime.jsx)(_components.code, {
                              className: "language-python",
                              children: "from collections import Counter\nimport heapq\n\ndef top_k_frequent(nums, k):\n    count = Counter(nums)\n    return heapq.nlargest(k, count.keys(), key=count.get)\n\nnums = [1, 1, 1, 2, 2, 3]\nprint(top_k_frequent(nums, 2))  # [1, 2]\n\n## Bucket sort approach for O(n)\ndef top_k_frequent_bucket(nums, k):\n    count = Counter(nums)\n    bucket = [[] for _ in range(len(nums) + 1)]\n    for num, freq in count.items():\n        bucket[freq].append(num)\n    result = []\n    for freq in range(len(bucket) - 1, 0, -1):\n        for num in bucket[freq]:\n            result.append(num)\n            if len(result) == k:\n                return result\n    return result\n\nprint(top_k_frequent_bucket([1, 1, 1, 2, 2, 3], 2))  # [1, 2]\n"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "overview-3",
                            children: "Overview"
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "exercise-3-medium-valid-sudoku",
                            children: "Exercise 3 (Medium): Valid Sudoku"
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: "Determine if a 9x9 Sudoku board is valid. Each row, column, and 3x3 sub-box must contain the digits 1-9 without repetition."
                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                            children: (0,jsx_runtime.jsx)(_components.code, {
                              className: "language-python",
                              children: "from collections import defaultdict\n\ndef is_valid_sudoku(board):\n    rows = defaultdict(set)\n    cols = defaultdict(set)\n    boxes = defaultdict(set)\n\n    for r in range(9):\n        for c in range(9):\n            val = board[r][c]\n            if val == \".\":\n                continue\n            box_key = (r // 3, c // 3)\n            if val in rows[r] or val in cols[c] or val in boxes[box_key]:\n                return False\n            rows[r].add(val)\n            cols[c].add(val)\n            boxes[box_key].add(val)\n    return True\n\nboard = [\n    [\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],\n    [\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],\n    [\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],\n    [\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],\n    [\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],\n    [\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],\n    [\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],\n    [\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],\n    [\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]\n]\nprint(is_valid_sudoku(board))  # True\n"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "exercise-4-hard-longest-substring-without-repeating-characters",
                            children: "Exercise 4 (Hard): Longest Substring Without Repeating Characters"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                            children: ["Given a string ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "s"
                            }), ", find the length of the longest substring without repeating characters. Use a hash map and sliding window."]
                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                            children: (0,jsx_runtime.jsx)(_components.code, {
                              className: "language-python",
                              children: "def length_of_longest_substring(s):\n    char_index = {}\n    left = max_len = 0\n    for right, c in enumerate(s):\n        if c in char_index and char_index[c] >= left:\n            left = char_index[c] + 1\n        char_index[c] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len\n\nprint(length_of_longest_substring(\"abcabcbb\"))  # 3 (\"abc\")\nprint(length_of_longest_substring(\"bbbbb\"))     # 1 (\"b\")\nprint(length_of_longest_substring(\"pwwkew\"))    # 3 (\"wke\")\n"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "exercise-5-hard-minimum-window-substring",
                            children: "Exercise 5 (Hard): Minimum Window Substring"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                            children: ["Given two strings ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "s"
                            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "t"
                            }), ", return the minimum window in ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "s"
                            }), " that contains all characters of ", (0,jsx_runtime.jsx)(_components.code, {
                              children: "t"
                            }), "."]
                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                            children: (0,jsx_runtime.jsx)(_components.code, {
                              className: "language-python",
                              children: "from collections import Counter\n\ndef min_window(s, t):\n    if not s or not t:\n        return \"\"\n    target = Counter(t)\n    required = len(target)\n    left = formed = 0\n    window = {}\n    ans = (float(\"inf\"), None, None)\n\n    for right, c in enumerate(s):\n        window[c] = window.get(c, 0) + 1\n        if c in target and window[c] == target[c]:\n            formed += 1\n\n        while left <= right and formed == required:\n            c = s[left]\n            if right - left + 1 < ans[0]:\n                ans = (right - left + 1, left, right)\n            window[c] -= 1\n            if c in target and window[c] < target[c]:\n                formed -= 1\n            left += 1\n\n    return \"\" if ans[0] == float(\"inf\") else s[ans[1]:ans[2] + 1]\n\ns = \"ADOBECODEBANC\"\nt = \"ABC\"\nprint(min_window(s, t))  # \"BANC\"\n"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                            children: [(0,jsx_runtime.jsx)(_components.a, {
                              href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers",
                              children: "← Previous: Two Pointers"
                            }), " | [Next: Linked Lists →](07-linked-"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "revision-notes",
                            children: "Revision Notes"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Hash map: O(1) avg lookup/insert/delete"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Hash set: O(1) membership testing"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Collision resolution: chaining vs open addressing"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Use for frequency counting and two-sum patterns"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Ordered map for sorted key requirements"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "placement-section",
                            children: "Placement Section"
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "top-10-interview-questions",
                            children: "Top 10 Interview Questions"
                          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                            id: "google-style",
                            children: "Google Style"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Explain the core idea of Hash Maps and Sets in under 60 seconds, then give a real-world analogy."
                                }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Design a minimal, well-typed function that demonstrates Hash Maps and Sets."
                                }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
                              }), "\n"]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                            id: "amazon-style",
                            children: "Amazon Style"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            start: "4",
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Describe a production bug caused by misunderstanding Hash Maps and Sets. How did you diagnose and fix it?"
                                }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "How would you scale a system that relies on Hash Maps and Sets from 10 users to 10 million?"
                                }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
                              }), "\n"]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                            id: "microsoft-style",
                            children: "Microsoft Style"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            start: "6",
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Compare Hash Maps and Sets with the closest alternative approach. When would you choose each?"
                                }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Walk through how you would test a component that depends on Hash Maps and Sets."
                                }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
                              }), "\n"]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                            id: "nvidia-style",
                            children: "NVIDIA Style"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            start: "8",
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "How does Hash Maps and Sets behave differently at scale — memory, throughput, or precision-wise?"
                                }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "How would you make an implementation of Hash Maps and Sets run faster on GPU hardware?"
                                }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
                              }), "\n"]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                            id: "ai-startup-style",
                            children: "AI Startup Style"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            start: "10",
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Write the smallest possible implementation of Hash Maps and Sets that is production-quality."
                              }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "resume-tips",
                            children: "Resume Tips"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Name Hash Maps and Sets explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Hash Maps and Sets\")."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Add a bullet describing a project that applies Hash Maps and Sets to real data, with numbers."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Mention the tools and libraries you used alongside Hash Maps and Sets (linters, test frameworks, profiling tools)."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Keep resume bullets under 15 words and start each with an action verb."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                            id: "interview-day-checklist",
                            children: "Interview Day Checklist"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Rehearse a 60-second explanation of Hash Maps and Sets and one real-world analogy."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Prepare one STAR story about debugging a Hash Maps and Sets-related production issue."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Review complexity and edge cases for the classic Hash Maps and Sets interview problem."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Have questions ready: how does the team apply Hash Maps and Sets in production today?"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "truefalse",
                            children: "True/False"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "True or False:"
                              }), " Hash Maps and Sets builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
                                children: "True."
                              }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "True or False:"
                              }), " You should write at least one code example for Hash Maps and Sets before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
                                children: "True."
                              }), " Active recall with hands-on code beats passive reading for retention."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "True or False:"
                              }), " The complexity analysis for Hash Maps and Sets is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
                                children: "False."
                              }), " Complexity grows with input size; always state best, average, and worst case."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "True or False:"
                              }), " Edge cases (empty input, invalid input, boundary values) matter for Hash Maps and Sets in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
                                children: "True."
                              }), " Most production bugs come from unhandled edge cases."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "True or False:"
                              }), " You should memorize the Hash Maps and Sets chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
                                children: "False."
                              }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "fill-in-the-blank",
                            children: "Fill in the Blank"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The chapter that covers Hash Maps and Sets is Chapter ___ of this module. — Answer: check the module's table of contents."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The time complexity of the standard approach to Hash Maps and Sets is ___. — Answer: review the theory section and state big-O notation."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The main edge case to handle when implementing Hash Maps and Sets is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The tools commonly used to debug Hash Maps and Sets issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The related topic that connects to Hash Maps and Sets in the next chapter is ___. — Answer: see the Next Topic section."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "scenario-questions",
                            children: "Scenario Questions"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Scenario:"
                                }), " A teammate ships a change involving Hash Maps and Sets that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Scenario:"
                                }), " Your implementation of Hash Maps and Sets is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Scenario:"
                                }), " A new hire asks you to explain Hash Maps and Sets in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                children: [(0,jsx_runtime.jsx)(_components.strong, {
                                  children: "Scenario:"
                                }), " Your team's codebase has three different patterns for Hash Maps and Sets and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
                              }), "\n"]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "output-questions",
                            children: "Output Questions"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "What is the output of the simplest correct implementation of Hash Maps and Sets on an empty input?"
                              }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "What is the output when the input is at the boundary value?"
                              }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "What does the implementation return when given invalid input types?"
                              }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "What is the output for the sample input given in the chapter's Examples section?"
                              }), " — Re-run the chapter's example code and compare against the documented output."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "What is the time complexity output when you profile the implementation at 10x input size?"
                              }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "difficulty-level",
                            children: "Difficulty Level"
                          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                            children: [(0,jsx_runtime.jsx)(_components.thead, {
                              children: (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.th, {
                                  children: "Level"
                                }), (0,jsx_runtime.jsx)(_components.th, {
                                  children: "Time"
                                }), (0,jsx_runtime.jsx)(_components.th, {
                                  children: "What It Takes"
                                })]
                              })
                            }), (0,jsx_runtime.jsxs)(_components.tbody, {
                              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Beginner"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "1-2 sessions"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Read theory, run the chapter examples, solve the Easy exercises"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Intermediate"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "3-5 sessions"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Complete Medium exercises, explain Hash Maps and Sets to someone else"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Advanced"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "1+ week"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
                                })]
                              })]
                            })]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "tips--tricks",
                            children: "Tips & Tricks"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Always write a one-line example of Hash Maps and Sets from memory before opening the chapter — active recall first."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Use the chapter's Revision Notes as a checklist: you have mastered Hash Maps and Sets when you can explain each bullet."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "For interviews, practice explaining Hash Maps and Sets twice: once with a technical audience, once with a non-technical audience."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Keep a personal examples file where you collect your own Hash Maps and Sets snippets; interviewers love original examples."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "memory-tricks",
                            children: "Memory Tricks"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Acronym"
                              }), ": build a mnemonic from the 5 key concepts of Hash Maps and Sets listed in the Chapter at a Glance table."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Story"
                              }), ": link Hash Maps and Sets to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Number anchor"
                              }), ": remember the complexity of Hash Maps and Sets by connecting it to a known algorithm of the same class."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Color code"
                              }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Teach-back"
                              }), ": explain Hash Maps and Sets to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "further-reading",
                            children: "Further Reading"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Official documentation for the primary tool or library used in this chapter"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The chapter referenced in Related Topics for the next-level treatment of Hash Maps and Sets"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The classic textbook chapter on Hash Maps and Sets (check the Research References below)"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Two blog posts from engineers who debugged real Hash Maps and Sets problems in production"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The repository of the open-source project that implements Hash Maps and Sets"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "related-topics",
                            children: "Related Topics"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The previous chapter in this module (see table of contents) — foundational for Hash Maps and Sets"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The next chapter (see Next Topic below) — builds on Hash Maps and Sets"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The system design chapters in Module 07 — how Hash Maps and Sets fits into production architectures"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The interview preparation module — how Hash Maps and Sets is asked in screening rounds"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The capstone project — where Hash Maps and Sets is applied end-to-end"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "faqs",
                            children: "FAQs"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Do I need to memorize all of Hash Maps and Sets, or understand the big picture?"
                              }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "What if I get stuck on an exercise?"
                              }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Is Hash Maps and Sets asked in interviews?"
                              }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "important-notes",
                            children: "Important Notes"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Hash Maps and Sets is a core requirement for the rest of this module — do not skip the examples."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Always analyze complexity (time and space) when working with Hash Maps and Sets."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Production correctness means handling edge cases, not just the happy path."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Interview answers should start with the definition, then the example, then the trade-offs."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "historical-context",
                            children: "Historical Context"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Hash Maps and Sets emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The tools used for Hash Maps and Sets today evolved from simpler versions; the chapter covers the modern, recommended approach."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Interviewers value knowing one historical fact about Hash Maps and Sets — it shows genuine interest, not just cramming."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The library/tooling ecosystem around Hash Maps and Sets changes quickly; focus on fundamentals that remain stable."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "security-considerations",
                            children: "Security Considerations"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Never trust external input: validate and sanitize data before processing Hash Maps and Sets."
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
                                children: "eval()"
                              }), " and dynamic code execution on untrusted strings."]
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "For API contexts, add rate limiting and input size limits."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "ml-intuition",
                            children: "ML Intuition"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Hash Maps and Sets appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Understanding Hash Maps and Sets helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "In production ML, the Hash Maps and Sets concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "When optimizing ML systems, Hash Maps and Sets skills let you profile and fix the data path, not just the training loop."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Interview follow-up: how would you apply Hash Maps and Sets to a dataset of 10 million records? — Batching and vectorization."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "analogies",
                            children: "Analogies"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Hash Maps and Sets is like a recipe"
                              }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Complexity is like a delivery route"
                              }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Edge cases are like weather"
                              }), ": the happy path is a sunny day; production is the storm — build for the storm."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "The chapter roadmap is a journey map"
                              }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "capstone-project-link",
                            children: "Capstone Project Link"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.a, {
                                href: "https://github.com/Raushan666java/ai-engineering-journey",
                                children: "Module Capstone: End-to-End Project"
                              }), " — this chapter contributes the Hash Maps and Sets skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "flashcards",
                            children: "Flashcards"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            "data-qid": "03datastructuresalgorithms-06hashmapsandsets-flash1",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              className: "tp-qa-question",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                                className: "tp-qa-status"
                              }), "\n    What is the core concept of Hash Maps and Sets in one sentence?\n  "]
                            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                              className: "tp-qa-answer",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                                children: "Review the first paragraph of the Theory section and condense it to one sentence."
                              }), "\n  "]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            "data-qid": "03datastructuresalgorithms-06hashmapsandsets-flash2",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              className: "tp-qa-question",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                                className: "tp-qa-status"
                              }), "\n    What is the most common mistake engineers make with \n  "]
                            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                              className: "tp-qa-answer",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                                children: "Check the Common Mistakes section of this chapter."
                              }), "\n  "]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            "data-qid": "03datastructuresalgorithms-06hashmapsandsets-flash3",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              className: "tp-qa-question",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                                className: "tp-qa-status"
                              }), "\n    What is the time and space complexity of the standard Hash Maps and Sets approach?\n  "]
                            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                              className: "tp-qa-answer",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                                children: "Refer to the theory and complexity analysis in this chapter."
                              }), "\n  "]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            "data-qid": "03datastructuresalgorithms-06hashmapsandsets-flash4",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              className: "tp-qa-question",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                                className: "tp-qa-status"
                              }), "\n    When is Hash Maps and Sets NOT the right choice?\n  "]
                            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                              className: "tp-qa-answer",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                                children: "Check the Limitations section of this chapter."
                              }), "\n  "]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                            className: "tp-qa-card",
                            "data-qid": "03datastructuresalgorithms-06hashmapsandsets-flash5",
                            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                              className: "tp-qa-question",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                                className: "tp-qa-status"
                              }), "\n    How is Hash Maps and Sets applied in a real production system?\n  "]
                            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                              className: "tp-qa-answer",
                              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                                children: "Check the Real-World Examples section of this chapter."
                              }), "\n  "]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "research-references",
                            children: "Research References"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Official documentation of the primary library for Hash Maps and Sets (linked in Further Reading)"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The classic paper or textbook chapter introducing Hash Maps and Sets (see References below)"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The standard library reference for Hash Maps and Sets-related functions"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Engineering blog posts from companies running Hash Maps and Sets in production at scale"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "PEPs and RFCs where applicable (Python and networking standards)"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "open-source-tools",
                            children: "Open-Source Tools"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The primary library used in this chapter (see the code examples)"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Python standard library modules used in the examples (check the imports)"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Testing: pytest for unit tests of Hash Maps and Sets code"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Linting and formatting: ruff + black"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Profiling: cProfile or py-spy for performance work on Hash Maps and Sets"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "debugging-guide",
                            children: "Debugging Guide"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
                                children: "print()"
                              }), " or a debugger to inspect intermediate values in Hash Maps and Sets code."]
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Reproduce the failure with the smallest possible input before changing code."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "For performance problems, profile before optimizing: measure, then fix."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                                children: "pdb"
                              }), " or your IDE's debugger to step through the Hash Maps and Sets example code."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "mock-interview-section",
                            children: "Mock Interview Section"
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Round 1 — Screening (15 min)"
                            })
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Explain Hash Maps and Sets in 60 seconds."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Write a minimal working example of Hash Maps and Sets."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "What is the complexity of your example?"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Round 2 — Coding (45 min)"
                            })
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Solve the Medium exercise from this chapter under time pressure."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "State your assumptions, then implement with type hints."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Test with edge cases: empty input, boundary values, invalid input."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "Round 3 — Behavioral + System (30 min)"
                            })
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Tell me about a time you debugged a Hash Maps and Sets problem in a project."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "How would you design a system where Hash Maps and Sets is used at scale?"
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "What metrics would you monitor?"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: "Evaluation rubric"
                            }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "optimized-implementation",
                            children: "Optimized Implementation"
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: "`python\nfrom typing import Any, Optional"
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Hash Maps and Sets."
                          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                            children: (0,jsx_runtime.jsx)(_components.code, {
                              children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Hash Maps and Sets logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: "`"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Keeps the function signature stable so tests written against it stay valid."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Handles the empty-input contract explicitly."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Add unit tests for the edge cases before implementing the logic (test-first)."
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "evaluation-metrics",
                            children: "Evaluation Metrics"
                          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                            children: [(0,jsx_runtime.jsx)(_components.thead, {
                              children: (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.th, {
                                  children: "Skill"
                                }), (0,jsx_runtime.jsx)(_components.th, {
                                  children: "Test"
                                }), (0,jsx_runtime.jsx)(_components.th, {
                                  children: "Target"
                                })]
                              })
                            }), (0,jsx_runtime.jsxs)(_components.tbody, {
                              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Concept recall"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Explain Hash Maps and Sets without notes"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "60-second explanation"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Code fluency"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Write the chapter example from memory"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "No syntax errors"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Edge cases"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Handle empty/invalid input in exercises"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "All cases pass"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Complexity"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "State time/space for the standard approach"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Correct big-O"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Interview readiness"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Answer 5 Interview Q&A questions out loud"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Fluent, structured answers"
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.tr, {
                                children: [(0,jsx_runtime.jsx)(_components.td, {
                                  children: "Retention"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "Chapter quiz score after 3 days"
                                }), (0,jsx_runtime.jsx)(_components.td, {
                                  children: "80%+"
                                })]
                              })]
                            })]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "real-world-examples",
                            children: "Real-World Examples"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Startup"
                              }), ": a small team uses Hash Maps and Sets daily in their data pipeline — the chapter's examples mirror their code."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "E-commerce"
                              }), ": Hash Maps and Sets patterns appear in order processing, inventory checks, and recommendation feeds."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Fintech"
                              }), ": Hash Maps and Sets principles apply to transaction validation and fraud detection flows."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "ML platform"
                              }), ": Hash Maps and Sets shows up in feature engineering and model-serving infrastructure."]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Interview insight"
                              }), ": recruiters look for engineers who can connect Hash Maps and Sets to the business outcome, not just the code."]
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "next-topic",
                            children: "Next Topic"
                          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/07-linked-lists",
                              children: "Linked Lists"
                            })
                          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                            id: "limitations",
                            children: "Limitations"
                          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Hash Maps and Sets, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "Performance of Hash Maps and Sets depends on input size and distribution — always benchmark for your own data."
                            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                              children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
                            }), "\n"]
                          }), "\n"]
                        })]
                      })]
                    })]
                  })]
                })]
              })]
            })]
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